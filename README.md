# Photo of the Day

[![NPM](https://nodei.co/npm/photo-of-the-day.png)](https://nodei.co/npm/photo-of-the-day/)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/berkerol/photo-of-the-day/issues)
[![semistandard](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)
[![ECMAScript](https://img.shields.io/badge/ECMAScript-latest-brightgreen.svg)](https://www.ecma-international.org/ecma-262)
[![license](https://img.shields.io/badge/license-GNU%20GPL%20v3.0-blue.svg)](https://github.com/berkerol/photo-of-the-day/blob/master/LICENSE)

Downloads [Bing Photo of the Day](https://www.bing.com) & [NASA Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) and sets it as wallpaper.

## Features

* Choose Bing or NASA photos.
* Set locale & resolution for Bing photos.
* Use custom API key for NASA.
* Set date for NASA photos.
* Set background display option for Linux.
* Stores all photos in _~/Pictures/Bing_ & _~/Pictures/NASA_.
* Runs at startup automatically.

## Supported Desktops

* Mac OS X
* Linux GNOME
* Linux Unity

## Options

* Bing Locales: ar-XA, bg-BG, cs-CZ, da-DK, de-AT, de-CH, de-DE, el-GR, en-AU, en-CA, en-GB, en-ID, en-IE, en-IN, en-MY, en-NZ, en-PH, en-SG, en-US (default), en-XA, en-ZA, es-AR, es-CL, es-ES, es-MX, es-US, es-XL, et-EE, fi-FI, fr-BE, fr-CA, fr-CH, fr-FR, he-IL, hr-HR, hu-HU, it-IT, ja-JP, ko-KR, lt-LT, lv-LV, nb-NO, nl-BE, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sl-SL, sv-SE, th-TH, tr-TR, uk-UA, zh-CN, zh-HK, zh-TW
* Bing Resolutions: 800x600, 1024x768, 1280x720, 1280x768, 1366x768, 1920x1080 (default), 1920x1200 (watermarked)
* Linux Background Display Options: wallpaper, centered, scaled, stretched, zoom (default), spanned

## Installation

```
$ npm install photo-of-the-day
```

## Run at startup

```
$ cd startup
$ ./autostart.sh
```

You must install it globally first in order to use this feature. You can customize the startup command in potd.plist (for Mac OS X) or potd.desktop (for Linux) file.

## Usage

Flag | Short | Description | Usage
-----|-------|---------|------
`--nasa` | `-n` | Choose NASA photo | `-n`
`--locale` | `-l` | Set locale for Bing | `-l en-GB`
`--resolution` | `-r` | Set resolution for Bing | `-r 1920x1200`
`--key` | `-k` | Set API key for NASA | `-k SOME_API_KEY`
`--date` | `-d` | Set date for NASA (YYYY-mm-dd) | `-d 2019-06-19`
`--option` | `-o` | Set background display option for Linux | `-o centered`

## Examples

Example | Description
--------|------------
`$ potd` | Sets wallpaper as Bing photo
`$ potd -n` | Sets wallpaper as NASA photo
`$ potd -l en-GB` | Sets wallpaper as Bing from Great Britain
`$ potd -r 1920x1200` | Sets wallpaper as Bing with 1920x1200 resolution
`$ potd -l en-GB -r 1920x1200` | Sets wallpaper as Bing from Great Britain with 1920x1200 resolution
`$ potd -n -k SOME_API_KEY` | Sets wallpaper as NASA using specified API key
`$ potd -n -d 2019-06-18` | Sets wallpaper as NASA from 2019-06-18
`$ potd -n -k SOME_API_KEY -d 2019-06-18` | Sets wallpaper as NASA from 2019-06-18 using specified API key
`$ potd -o centered` | Wallpaper centered on desktop

## TODO

* [x] Run at startup
* [x] Bing Photo of the Day
* [ ] GoPro Photo of the Day
* [x] NASA Astronomy Picture of the Day
* [ ] National Geographic Photo of the Day
* [x] Locale option for Bing
* [x] Resolution option for Bing
* [x] Custom API key for NASA
* [x] Date option for NASA
* [x] Background display option for Linux
* [ ] Windows 10
* [x] Mac OS X
* [x] Linux GNOME & Unity
* [ ] Other Linux desktops

## Contribution

Feel free to [contribute](https://github.com/berkerol/photo-of-the-day/issues) according to the [semistandard rules](https://github.com/Flet/semistandard) and [latest ECMAScript Specification](https://www.ecma-international.org/ecma-262).

## Distribution

You can distribute this software freely under [GNU GPL v3.0](https://github.com/berkerol/photo-of-the-day/blob/master/LICENSE).
