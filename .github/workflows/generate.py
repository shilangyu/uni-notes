import os
import re
import subprocess
from datetime import datetime

docs_path = 'docs'
excluded_dirs = ['.git', 'docs', '.vscode']
summary = {}

for root, dirs, files in os.walk('.'):
    if root == '.':
        dirs[:] = [d for d in dirs if d not in excluded_dirs]

    curr_docs = os.path.join(docs_path, root[2:])
    os.makedirs(curr_docs, exist_ok=True)

    for f in filter(lambda f: f.endswith('md'), files):
        curr_file = os.path.join(root, f)
        curr_out = os.path.join(
            curr_docs, re.compile(r'[\\/]').split(curr_file)[-1][:-2] + 'html')
        subprocess.run(['pandoc', curr_file, '-s',
                        '--katex', '-o', curr_out, '--css', '/uni-notes/styles.css', '--metadata', f'pagetitle="{f[:-3]}"'])
        if root in summary:
            summary[root].append(f[:-2] + 'html')
        else:
            summary[root] = [f[:-2] + 'html']

with open(os.path.join(docs_path, 'index.html'), mode='w+') as f:
    html_summary = ''
    for key in summary:
        if key != '.':
            html_summary += f'<li>{key[2:]}<ul>'
        for topic in summary[key]:
            html_summary += f'<li><a href="{os.path.join(key, topic)}">{topic[:-5]}</a></li>'
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
    <link rel="stylesheet" href="./styles.css"/>
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

with open(os.path.join(docs_path, 'styles.css'), mode='w+') as f:
    f.write(
        'html{font-size:100%;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{color:#444;font-family:Georgia,Palatino,"Palatino Linotype",Times,"Times New Roman",serif;font-size:12px;line-height:1.7;padding:1em;margin:auto;max-width:42em;background:#fefefe}a{color:#0645ad;text-decoration:none}a:visited{color:#0b0080}a:hover{color:#06e}a:active{color:#faa700}a:focus{outline:thin dotted}::-moz-selection{background:rgba(255,255,0,.3);color:#000}::selection{background:rgba(255,255,0,.3);color:#000}a::-moz-selection{background:rgba(255,255,0,.3);color:#0645ad}a::selection{background:rgba(255,255,0,.3);color:#0645ad}p{margin:1em 0}img{max-width:100%}h1,h2,h3,h4,h5,h6{color:#111;line-height:125%;margin-top:2em;font-weight:400}h4,h5,h6{font-weight:700}h1{font-size:2.5em}h2{font-size:2em}h3{font-size:1.5em}h4{font-size:1.2em}h5{font-size:1em}h6{font-size:.9em}blockquote{color:#666;margin:0;padding-left:3em;border-left:.5em #eee solid}hr{display:block;height:2px;border:0;border-top:1px solid #aaa;border-bottom:1px solid #eee;margin:1em 0;padding:0}code,kbd,pre,samp{color:#000;font-family:monospace,monospace;font-size:.98em}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}b,strong{font-weight:700}dfn{font-style:italic}ins{background:#ff9;color:#000;text-decoration:none}mark{background:#ff0;color:#000;font-style:italic;font-weight:700}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}ol,ul{margin:1em 0;padding:0 0 0 2em}li p:last-child{margin-bottom:0}ol ol,ul ul{margin:.3em 0}dl{margin-bottom:1em}dt{font-weight:700;margin-bottom:.8em}dd{margin:0 0 .8em 2em}dd:last-child{margin-bottom:0}img{border:0;-ms-interpolation-mode:bicubic;vertical-align:middle}figure{display:block;text-align:center;margin:1em 0}figure img{border:none;margin:0 auto}figcaption{font-size:.8em;font-style:italic;margin:0 0 .8em}table{margin-bottom:2em;border-bottom:1px solid #ddd;border-right:1px solid #ddd;border-spacing:0;border-collapse:collapse}table th{padding:.2em 1em;background-color:#eee;border-top:1px solid #ddd;border-left:1px solid #ddd}table td{padding:.2em 1em;border-top:1px solid #ddd;border-left:1px solid #ddd;vertical-align:top}.author{font-size:1.2em;text-align:center}@media only screen and (min-width:480px){body{font-size:14px}}@media only screen and (min-width:768px){body{font-size:16px}}@media print{*{background:0 0!important;color:#000!important;filter:none!important;-ms-filter:none!important}body{font-size:12pt;max-width:100%}a,a:visited{text-decoration:underline}hr{height:1px;border:0;border-bottom:1px solid #000}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}.ir a:after,a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;padding-right:1em;page-break-inside:avoid}img,tr{page-break-inside:avoid}img{max-width:100%!important}@page :left{margin:15mm 20mm 15mm 10mm}@page :right{margin:15mm 10mm 15mm 20mm}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}')
