import renderToString from "https://cdn.skypack.dev/preact-render-to-string";
import { h } from "https://cdn.skypack.dev/preact@^10.4.4";

const React = { createElement: h }; // I don't want to create a jsconfig just to change the jsx factory...

await Deno.remove("docs", { recursive: true }).catch(() => {});
await Deno.mkdir("docs");

/// return a tuple of all the markdown files and directories in a given path
/// respects internal excluded directories
/// everything is sorted alphabetically
function filesAndDirs(path) {
  const excludedDirs = new Set([".git", "docs", ".vscode", ".github"]);
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

/// recursively generates html files with pandoc and creates a jsx tree of a table of contents
function Summary({ path }) {
  const [files, dirs] = filesAndDirs(path);
  const base = path + "/";

  for (const dirname of dirs) {
    Deno.mkdirSync("docs/" + base + dirname);
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
          "docs/" + base + filename.replace(/md$/, "html"),
          "--metadata",
          `pagetitle=${filename.slice(0, -3)}`,
          "-H",
          ".github/workflows/headers.html",
        ],
      }).status()
    ),
  );

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

await Deno.writeTextFile(
  "docs/index.html",
  renderToString(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Uni notes</title>
        <span
          dangerouslySetInnerHTML={{
            __html: await Deno.readTextFile(".github/workflows/headers.html"),
          }}
        >
        </span>
      </head>
      <body>
        Available notes:
        <Summary path="." />
        <footer>
          Pages are auto-generated, if you see any problems please open an issue
          on <a href="https://github.com/shilangyu/uni-notes">GitHub</a>
          <br />
          Last update: {new Date().toUTCString()}
        </footer>
      </body>
    </html>,
  ),
);

await Promise.all(pandocExec);
