import json
from subprocess import check_output
from gi.repository import Gio

url = json.loads(check_output("curl -X GET 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US'", shell = True))['images'][0]['url']
filename = "/home/" + check_output("whoami", shell = True).split()[0] + "/Pictures/Bing/" + url[url.rfind("/") + 1:]
check_output("wget -xO " + filename + " https://bing.com" + url, shell = True)
gsettings = Gio.Settings.new('org.gnome.desktop.background')
gsettings.set_string('picture-uri', 'file://%s' % filename)
