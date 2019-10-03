Get-ChildItem -Attributes directory -Exclude docs | ForEach-Object {
	Copy-Item $_ -Filter *.html -Destination docs -Recurse
}

git add docs
