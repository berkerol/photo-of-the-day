import sys, json
from sys import platform
from subprocess import check_output

if platform == "linux" or platform == "linux2":
    mode = True
elif platform == "darwin":
    mode = False
else:
    sys.exit("not supported yet")
url = json.loads(check_output("curl -X GET 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US'", shell = True).decode('utf-8'))['images'][0]['url']
if mode:
    dirname = "/home/" + check_output("whoami", shell = True).split()[0] + "/Pictures/Bing/"
else:
    dirname = "/Users/" + check_output("whoami", shell = True).decode('utf-8').split()[0] + "/Pictures/Bing/"
filename = dirname + url[url.rfind("/") + 1:]
check_output("mkdir -p " + dirname + " && wget https://bing.com" + url + " -O " + filename, shell = True)
if mode:
    check_output("gsettings set org.gnome.desktop.background picture-uri file://" + filename, shell = True)
else:
    check_output("osascript -e 'tell application \"Finder\" to set desktop picture to POSIX file \"%s\"'" % filename, shell = True)
