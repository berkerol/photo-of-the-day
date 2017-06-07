import json
from subprocess import check_output
from gi.repository import Gio

check_output("curl -X GET 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US' > file.json", shell = True)
f = open("file.json", "r")
url = json.load(f)['images'][0]['url']
f.close()
check_output("rm file.json", shell = True)
check_output("wget https://bing.com" + url, shell = True)
gsettings = Gio.Settings.new('org.gnome.desktop.background')
gsettings.set_string('picture-uri', 'file://%s' % (check_output("pwd", shell = True).split()[0] + "/" + url[url.rfind("/") + 1:]))
