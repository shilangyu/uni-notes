import renderToString from "https://cdn.jsdelivr.net/npm/preact-render-to-string@6.5.11/+esm";
import { h } from "https://cdn.jsdelivr.net/npm/preact@10.24.2/+esm";
import { walk, walkSync, existsSync } from "jsr:@std/fs@1.0.4";

const React = { createElement: h }; // I don't want to create a jsconfig just to change the jsx factory...

const outFolder = "docs";

await Deno.remove(outFolder, { recursive: true }).catch(() => {});
await Deno.mkdir(outFolder);

/// return a tuple of all the markdown files, directories, and optional favicon in a given path
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
      // ignore directories which do not have markdown files
      const hasMd =
        [...walkSync(path + "/" + f.name, { match: [/\.md$/] })].length != 0;
      if (hasMd) {
        dirs.push(f.name);
      }
    }
  }

  const faviconPath = "favicon.png";
  const favicon = existsSync(path + "/" + faviconPath, { isFile: true }) ? faviconPath : undefined;

  const lowerCaseSort = (a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase());
  return [files.sort(lowerCaseSort), dirs.sort(lowerCaseSort), favicon];
}

const rawHeaderContent = Deno.readTextFileSync(".github/workflows/headers.html");
function createHeader(faviconPath) {
    const file = Deno.makeTempFileSync();
    const content = rawHeaderContent.replace("%%FAVICON%%", faviconPath);
    Deno.writeTextFileSync(file, content);
    return [file, content];
}

const pandocExec = [];
const folderIndexes = [];

/// recursively generates html files with pandoc and creates a jsx tree of a table of contents
function Summary({ path, faviconPath }) {
  const [files, dirs, newFavicon] = filesAndDirs(path);
  const base = path + "/";
  const favicon = newFavicon ? ("./" + newFavicon) : faviconPath;

  for (const dirname of dirs) {
    Deno.mkdirSync(outFolder + "/" + base + dirname);
  }

  const [headerFile, _] = createHeader(favicon);
  pandocExec.push(
    ...files.map((filename) =>
      new Deno.Command("pandoc", {
        args: [
          base + filename,
          "-s",
          "--number-sections",
          "--katex",
          "-o",
          outFolder + "/" + base + filename.replace(/md$/, "html"),
          "--metadata",
          `pagetitle=${filename.slice(0, -3)}`,
          "-H",
          headerFile,
        ],
      }).output()
    )
  );

  // special case: dont write to the top level index, that is written by <Summary /> itself
  if (path !== ".") {
    folderIndexes.push([
      outFolder + "/" + base + "index.html",
      <Helmet title={base} faviconPath={favicon}>
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
          <Summary path={base + dirname} faviconPath={"./." + favicon} />
        </li>
      ))}
    </ul>
  );
}

function Helmet({ title, children, faviconPath }) {
  const [_, headerContent] = createHeader(faviconPath)
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

// copy over all other supported non-markdown files
for await (const file of walk(".", { match: [/\.png$/, /\.jpg$/] })) {
  if (!file.isFile) continue;

  await Deno.mkdir(outFolder + "/" + file.path.slice(0, -file.name.length), {
    recursive: true,
  });
  await Deno.copyFile(file.path, outFolder + "/" + file.path);
}
