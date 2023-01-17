import renderToString from "https://cdn.skypack.dev/preact-render-to-string";
import { h } from "https://cdn.skypack.dev/preact@^10.11.3";

const React = { createElement: h }; // I don't want to create a jsconfig just to change the jsx factory...

const outFolder = "docs";

await Deno.remove(outFolder, { recursive: true }).catch(() => {});
await Deno.mkdir(outFolder);

/// return a tuple of all the markdown files and directories in a given path
/// respects internal excluded directories
/// everything is sorted alphabetically
function filesAndDirs(path) {
  const excludedDirs = new Set([".git", outFolder, ".vscode", ".github"]);
  const files = [];
  const dirs = [];

  for (const f of Deno.readDirSync(path)) {
    if (f.isFile && f.name.endsWith("md")) {
      files.push(f.name);
    }
    if (f.isDirectory && !excludedDirs.has(f.name)) {
      dirs.push(f.name);
    }
  }

  const lowerCaseSort = (a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase());
  return [files.sort(lowerCaseSort), dirs.sort(lowerCaseSort)];
}

const pandocExec = [];
const folderIndexes = [];

/// recursively generates html files with pandoc and creates a jsx tree of a table of contents
function Summary({ path }) {
  const [files, dirs] = filesAndDirs(path);
  const base = path + "/";

  for (const dirname of dirs) {
    Deno.mkdirSync(outFolder + "/" + base + dirname);
  }

  pandocExec.push(
    ...files.map((filename) =>
      Deno.run({
        cmd: [
          "pandoc",
          base + filename,
          "-s",
          "--number-sections",
          "--katex",
          "-o",
          outFolder + "/" + base + filename.replace(/md$/, "html"),
          "--metadata",
          `pagetitle=${filename.slice(0, -3)}`,
          "-H",
          ".github/workflows/headers.html",
        ],
      }).status()
    )
  );

  // special case: dont write to the top level index, that is written by <Summary /> itself
  if (path !== ".") {
    folderIndexes.push([
      outFolder + "/" + base + "index.html",
      <Helmet title={base}>
        <a href="..">Go up</a>

        <ul>
          {dirs.map((dirname) => (
            <li>
              <a href={dirname}>{dirname}</a>
            </li>
          ))}
          {files.map((filename) => (
            <li>
              <a href={filename.replace(/md$/, "html")}>
                {filename.replace(/\.md$/, "")}
              </a>
            </li>
          ))}
        </ul>
      </Helmet>,
    ]);
  }

  return (
    <ul>
      {files.map((filename) => (
        <li>
          <a href={base + filename.replace(/md$/, "html")}>
            {filename.replace(/\.md$/, "")}
          </a>
        </li>
      ))}
      {dirs.map((dirname) => (
        <li>
          {dirname}
          <Summary path={base + dirname} />
        </li>
      ))}
    </ul>
  );
}

const headerContent = await Deno.readTextFile(".github/workflows/headers.html");

function Helmet({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{title}</title>
        <span
          dangerouslySetInnerHTML={{
            __html: headerContent,
          }}
        ></span>
      </head>
      <body>{children}</body>
    </html>
  );
}

await Deno.writeTextFile(
  outFolder + "/index.html",
  renderToString(
    <Helmet title="Uni notes">
      Available notes:
      <Summary path="." />
      <footer>
        Pages are auto-generated, if you see any problems please open an issue
        on <a href="https://github.com/shilangyu/uni-notes">GitHub</a>
        <br />
        Last update: {new Date().toUTCString()}
      </footer>
    </Helmet>
  )
);

await Promise.all(
  folderIndexes.map(([filename, children]) =>
    Deno.writeTextFile(filename, renderToString(children))
  )
);

await Promise.all(pandocExec);
