import os
import re
import subprocess
from collections import defaultdict
from datetime import datetime, timedelta
from urllib.parse import quote as urlencode
from xml.dom.minidom import getDOMImplementation


# recursive defaultdict: the default is a defaultdict till infinity
def ddict():
    return defaultdict(ddict)


docs_path = 'docs'
excluded_dirs = ['.git', 'docs', '.vscode', '.github']
# key used to store files in the dict, this is a good name because slashes cant appear in a path
files_key = '/files'
summary = ddict()

for root, dirs, files in os.walk('.'):
    if root == '.':
        dirs[:] = [d for d in dirs if d not in excluded_dirs]

    curr_docs = os.path.join(docs_path, root[2:])
    os.makedirs(curr_docs, exist_ok=True)

    for f in filter(lambda f: f.endswith('md'), files):
        curr_file = os.path.join(root, f)
        curr_out = os.path.join(
            curr_docs, f[:-2] + 'html')
        subprocess.run(['pandoc', curr_file, '-s',
                        '--katex', '-o', curr_out, '--metadata', f'pagetitle={f[:-3]}', '-H', '.github/workflows/headers.html'])

        rec = summary['.']
        for x in root.split('/')[1:]:
            rec = rec[x]
        if files_key in rec:
            rec[files_key].append(f[:-2] + 'html')
        else:
            rec[files_key] = [f[:-2] + 'html']


def generate_html_list(document, container, data, path):
    ul = document.createElement('ul')
    for key in sorted(data.keys(), key=str.lower):
        if key != files_key:
            li = document.createElement('li')
            li.appendChild(document.createTextNode(key))
            ul.appendChild(li)
            generate_html_list(document, li, data[key], f'{path}/{key}')
        else:
            for f in sorted(data[key], key=str.lower):
                li = document.createElement('li')
                a = document.createElement('a')
                a.setAttribute(
                    'href', '/'.join(map(lambda x: urlencode(x, safe=''), f'{path}/{f}'.split('/'))))
                a.appendChild(document.createTextNode(f[:-5]))
                li.appendChild(a)
                ul.appendChild(li)
    container.appendChild(ul)


document = getDOMImplementation().createDocument(None, "document", None)
generate_html_list(document, document.documentElement, summary['.'], '.')


with open(os.path.join(docs_path, 'index.html'), mode='w+') as f:
    html_summary = document.documentElement.childNodes[0].toxml()

    with open('.github/workflows/headers.html') as h:
        f.write(f"""\
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Uni notes</title>
        {h.read()}
    </head>
    <body>
        Available notes:

        {html_summary}

        <footer>
            Pages are auto-generated, if you see any problems please open an issue on <a href="https://github.com/shilangyu/uni-notes">GitHub</a> <br/>
            Last update: {(datetime.now() + timedelta(hours=1)).strftime("%H:%M %B %d, %Y")}
        </footer>
    </body>
    </html>
    """)
