#!/usr/bin/env python

import sys
import json
import time
import argparse
from sys import platform
from subprocess import check_output

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-n', '--nasa', dest='type', action='store_false',
                        default=True, help='NASA photo option (default: Bing)')
    parser.add_argument('-l', '--locale', dest='locale', action='store',
                        default='en-US', type=str, help='Bing locale option (default: en-US)')
    parser.add_argument('-r', '--resolution', dest='resolution', action='store',
                        default='1920x1080', type=str, help='Bing resolution option (default: 1920x1080)')
    parser.add_argument('-d', '--date', dest='date', action='store', default=time.strftime(
        "%Y-%m-%d"), type=str, help='NASA date option (default: today)')
    parser.add_argument('-o', '--option', dest='option', action='store', default='zoom',
                        type=str, help='wallpaper, centered, scaled, stretched, zoom (default), spanned')
    arguments = parser.parse_args()
    if platform == "linux" or platform == "linux2":
        mode = True
    elif platform == "darwin":
        mode = False
    else:
        sys.exit("not supported yet")
    if arguments.type:
        photo = json.loads(check_output("curl -X GET 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=%s'" %
                                        arguments.locale, shell=True).decode('utf-8'))['images'][0]['url']
        url = "https://www.bing.com" + \
            photo[:photo.rfind("_") + 1] + arguments.resolution + ".jpg"
        storedir = "/Pictures/Bing/"
    else:
        photo = json.loads(check_output("curl -X GET 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=True&date=%s'" %
                                      arguments.date, shell=True).decode('utf-8'))
        if 'hdurl' in photo:
            url = photo['hdurl']
        else:
            sys.exit("no photo today")
        storedir = "/Pictures/NASA/"
    if mode:
        dirname = "/home/" + \
            check_output("whoami", shell=True).split()[0] + storedir
    else:
        dirname = "/Users/" + \
            check_output("whoami", shell=True).decode(
                'utf-8').split()[0] + storedir
    filename = dirname + url[url.rfind("/") + 1:]
    check_output("mkdir -p " + dirname + " && wget " +
                 url + " -O " + filename, shell=True)
    if mode:
        check_output(
            "gsettings set org.gnome.desktop.background picture-uri file://" + filename, shell=True)
        check_output("gsettings set org.gnome.desktop.background picture-options \"%s\"" %
                     arguments.option, shell=True)
    else:
        check_output(
            "osascript -e 'tell application \"Finder\" to set desktop picture to POSIX file \"%s\"'" % filename, shell=True)
