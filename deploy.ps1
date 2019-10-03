Get-ChildItem -Attributes directory -Exclude docs | ForEach-Object {
	Copy-Item $_ -Filter *.html -Destination docs -Recurse -Force
}


$indexFile = @"
	<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Uni notes</title>
  </head>
	<body>
		Available notes:

			 
		
		<footer>
			Page was auto-generated, if you see any problems please open an issue on <a href="https://github.com/shilangyu/uni-notes">GitHub</a>
		</footer>
  </body>
  </html>
"@

[IO.File]::WriteAllLines("$pwd/docs/index.html", $indexFile)


git add docs
