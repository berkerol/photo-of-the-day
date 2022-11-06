# Photo of the Day

[![NPM](https://nodei.co/npm/photo-of-the-day.png)](https://nodei.co/npm/photo-of-the-day/)

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=berkerol_photo-of-the-day&metric=alert_status)](https://sonarcloud.io/dashboard?id=berkerol_photo-of-the-day)
[![CI](https://github.com/berkerol/photo-of-the-day/actions/workflows/lint.yml/badge.svg?branch=master)](https://github.com/berkerol/photo-of-the-day/actions/workflows/lint.yml)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/berkerol/photo-of-the-day/issues)
[![semistandard](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)
[![ECMAScript](https://img.shields.io/badge/ECMAScript-latest-brightgreen.svg)](https://www.ecma-international.org/ecma-262)
[![license](https://img.shields.io/badge/license-GNU%20GPL%20v3.0-blue.svg)](https://github.com/berkerol/photo-of-the-day/blob/master/LICENSE)

Downloads [Bing Photo of the Day](https://www.bing.com), [NASA Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html), [National Geographic Photo of the Day](http://www.nationalgeographic.com/photography/photo-of-the-day), [Unsplash Source Random Photo](https://source.unsplash.com/) and sets it as wallpaper.

## Features

* Choose Bing, NASA, National Geographic or Unsplash photos.
* Set date, locale & resolution for Bing photos.
* Use custom API key for NASA.
* Set date for NASA & National Geographic photos.
* Choose a random photo from NASA & National Geographic & Unsplash.
* Set resolution for Unsplash photos.
* Set background display option for Linux.
* Stores all photos in _~/Pictures/Bing_, _~/Pictures/NASA_, _~/Pictures/National Geographic_, _~/Pictures/Unsplash_.
* Runs at startup automatically.

## Supported Desktops

* Mac OS X
* Linux GNOME
* Linux Unity

## Options

* Bing Date (# of days before): 0 (default), 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
* Bing Locales: ar-XA, bg-BG, cs-CZ, da-DK, de-AT, de-CH, de-DE, el-GR, en-AU, en-CA, en-GB, en-ID, en-IE, en-IN, en-MY, en-NZ, en-PH, en-SG, en-US (default), en-XA, en-ZA, es-AR, es-CL, es-ES, es-MX, es-US, es-XL, et-EE, fi-FI, fr-BE, fr-CA, fr-CH, fr-FR, he-IL, hr-HR, hu-HU, it-IT, ja-JP, ko-KR, lt-LT, lv-LV, nb-NO, nl-BE, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sl-SL, sv-SE, th-TH, tr-TR, uk-UA, zh-CN, zh-HK, zh-TW
* Bing & Unsplash Resolutions: 800x600, 1024x768, 1280x720, 1280x768, 1366x768, 1920x1080 (default), 1920x1200 (watermarked for Bing)
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
`--ng` | `-N` | Choose National Geographic photo | `-N`
`--unsplash` | `-u` | Choose Unsplash photo | `-u`
`--before` | `-b` | Set date for Bing | `-b 1`
`--locale` | `-l` | Set locale for Bing | `-l en-GB`
`--resolution` | `-r` | Set resolution for Bing & Unsplash | `-r 1920x1200`
`--key` | `-k` | Set API key for NASA | `-k SOME_API_KEY`
`--date` | `-d` | Set date for NASA or National Geographic (YYYY-mm-dd) | `-d 2019-06-19`
`--random` | `-R` | Choose a random photo from NASA or National Geographic or Unsplash | `-R`
`--wallpaper` | `-w` | Don't set downloaded photo as wallpaper (can be used for bulk downloading) | `-w`
`--option` | `-o` | Set background display option for Linux | `-o centered`

## Examples

Example | Description
--------|------------
`$ potd` | Sets wallpaper as Bing photo
`$ potd -n` | Sets wallpaper as NASA photo
`$ potd -N` | Sets wallpaper as National Geographic photo
`$ potd -u` | Sets wallpaper as Unsplash photo
`$ potd -b 1` | Sets wallpaper as Bing from yesterday
`$ potd -l en-GB` | Sets wallpaper as Bing from Great Britain
`$ potd -r 1920x1200` | Sets wallpaper as Bing with 1920x1200 resolution
`$ potd -b 1 -l en-GB -r 1920x1200` | Sets wallpaper as Bing from yesterday and Great Britain with 1920x1200 resolution
`$ potd -n -k SOME_API_KEY` | Sets wallpaper as NASA using specified API key
`$ potd -n -d 2019-06-18` | Sets wallpaper as NASA from 2019-06-18
`$ potd -n -R` | Sets wallpaper as a random NASA photo
`$ potd -n -k SOME_API_KEY -d 2019-06-18` | Sets wallpaper as NASA from 2019-06-18 using specified API key
`$ potd -n -k SOME_API_KEY -R` | Sets wallpaper as a random NASA photo using specified API key
`$ potd -N -d 2019-06-06` | Sets wallpaper as National Geographic from 2019-06-06
`$ potd -N -R` | Sets wallpaper as a random National Geographic photo
`$ potd -u -r 1920x1200` | Sets wallpaper as Unsplash with 1920x1200 resolution
`$ potd -u -R` | Sets wallpaper as a random Unsplash photo
`$ potd -u -r 1920x1200 -R` | Sets wallpaper as a random Unsplash photo with 1920x1200 resolution
`$ potd -w` | Only downloads Bing photo (doesn't set it as wallpaper)
`$ potd -o centered` | Wallpaper centered on desktop

## TODO

* [x] Run at startup
* [x] Bing Photo of the Day
* [x] NASA Astronomy Picture of the Day
* [x] National Geographic Photo of the Day
* [x] Unsplash Source Random Photo
* [x] Date option for Bing
* [x] Locale option for Bing
* [x] Resolution option for Bing
* [x] Custom API key for NASA
* [x] Date option for NASA
* [x] Random option for NASA
* [x] Date option for National Geographic
* [x] Random option for National Geographic
* [x] Resolution option for Unsplash
* [x] Random option for Unsplash
* [x] Background display option for Linux
* [ ] Windows 10 (saves image but can't set as wallpaper)
* [x] Mac OS X
* [x] Linux GNOME & Unity
* [ ] Other Linux desktops

## Continous Integration

It is setup using GitHub Actions in `.github/workflows/lint.yml`

## Contribution

Feel free to [contribute](https://github.com/berkerol/photo-of-the-day/issues) according to the [semistandard rules](https://github.com/Flet/semistandard) and [latest ECMAScript Specification](https://www.ecma-international.org/ecma-262).

## Distribution

You can distribute this software freely under [GNU GPL v3.0](https://github.com/berkerol/photo-of-the-day/blob/master/LICENSE).
