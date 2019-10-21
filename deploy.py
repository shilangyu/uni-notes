import os
import shutil
from datetime import datetime

docs_path = 'docs'
excluded_dirs = ['.git', 'docs', '.vscode']
summary = {}

for root, dirs, files in os.walk('.'):
    if root == '.':
        dirs[:] = [d for d in dirs if d not in excluded_dirs]

    curr_docs = os.path.join(docs_path, root[2:])
    os.makedirs(curr_docs, exist_ok=True)

    for f in filter(lambda f: f.endswith('html'), files):
        curr_file = os.path.join(root, f)
        shutil.copy(curr_file, os.path.join(curr_docs, f))
        if root in summary:
            summary[root].append(f)
        else:
            summary[root] = [f]

with open(os.path.join(docs_path, 'index.html'), mode='w+') as f:
    html_summary = ''
    for key in summary:
        if key != '.':
            html_summary += f'<li>{key[2:]}<ul>'
        for topic in summary[key]:
            html_summary += f'<li><a href="{os.path.join(key, topic)}"">{topic[:-5]}</a></li>'
        if key != '.':
            html_summary += '</ul></li>'
    f.write(f"""\
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

    <ul>{html_summary}</ul>


    <footer>
        Pages are auto-generated, if you see any problems please open an issue on <a href="https://github.com/shilangyu/uni-notes">GitHub</a> <br/>
        Last update: {datetime.now().strftime("%H:%M %B %d, %Y")}
    </footer>
</body>
</html>
""")
