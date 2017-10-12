# Photo of the Day

Downloads [Bing Photo of the Day](https://www.bing.com/gallery/) & [NASA Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) and makes it desktop background.

## Features

- Sets Bing photos by default (with no arguments).
- Sets NASA Astronomy Picture of the Day with `-n` or `--nasa` arguments.
- Supports Bing photos of different locales with `-l` or `--locale` arguments.
- Supports Bing photos of different resolutions with `-r` or `--resolution` arguments.
- Supports NASA photos of different dates with `-d` or `--date` arguments.
- Supports Linux background display options with `-o` or `--option` arguments.
- Stores all photos in _~/Pictures/Bing_ & _~/Pictures/NASA_.
- Runs at startup automatically.

## Supported Desktops

- Mac OS X
- Linux Unity
- Linux GNOME

## Options

- Bing Locales: ar-XA, bg-BG, cs-CZ, da-DK, de-AT, de-CH, de-DE, el-GR, en-AU, en-CA, en-GB, en-ID, en-IE, en-IN, en-MY, en-NZ, en-PH, en-SG, en-US, en-XA, en-ZA, es-AR, es-CL, es-ES, es-MX, es-US, es-XL, et-EE, fi-FI, fr-BE, fr-CA, fr-CH, fr-FR, he-IL, hr-HR, hu-HU, it-IT, ja-JP, ko-KR, lt-LT, lv-LV, nb-NO, nl-BE, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sl-SL, sv-SE, th-TH, tr-TR, uk-UA, zh-CN, zh-HK, zh-TW
- Bing Resolutions: 800x600, 1024x768, 1280x720, 1280x768, 1366x768, 1920x1080, 1920x1200 (watermarked)
- Linux Background Display Options: wallpaper, centered, scaled, stretched, zoom (default), spanned

## Install

```
$ ./install.sh
```

## Uninstall

```
$ ./unistall.sh
```

## Run at startup

```
$ ./autostart.sh
```

You can customize the startup command in potd.desktop (for Mac OS X) or potd.plist (Linux) file.

## Usage

Flag           | Short | Meaning                         | Usage
-------------- | ----- | ------------------------------- | ------------------
`--nasa`       | `-n`  | Use NASA photo                  | `-n`
`--locale`     | `-l`  | Local of Bing photo             | `-l en-AU`
`--resolution` | `-r`  | Resolution of Bing photo        | `-r 1920x1200`
`--date`       | `-d`  | Date of NASA photo (YYYY-mm-dd) | `-n -d 2017-06-08`
`--option`     | `-o`  | Background display option       | `-o centered`

## Examples

Example                        | Description
------------------------------ | ---------------------------------------------
`$ potd`                       | Bing photo
`$ potd -n`                    | NASA photo
`$ potd -l en-AU`              | Bing from Australia
`$ potd -r 1920x1200`          | Bing with 1920x1200 resolution
`$ potd -l en-AU -r 1920x1200` | Bing from Australia with 1920x1200 resolution
`$ potd -n -d 2017-06-08`      | NASA from 2017-06-08
`$ potd -o centered`           | Photo centered on desktop
