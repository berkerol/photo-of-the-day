# Photo of the Day

- Downloads [Bing Photo of the Day](https://www.bing.com/gallery/) & [NASA Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) and makes it desktop background
- Stores all photos in _~/Pictures/Bing_ & _~/Pictures/NASA_

## Usage

- Sets Bing photos by default (with no arguments).
- Sets NASA Astronomy Picture of the Day with _-n_ or _--nasa_ arguments
- Supports Bing photos of different locales with _-l_ or _--locale_ arguments
- Supports Bing photos of different resolutions with _-r_ or _--resolution_ arguments
- Supports NASA photos of different dates with _-d_ or _--date_ arguments
- Choose how the background is displayed (Linux only): wallpaper, centered, scaled, stretched, zoom (default), spanned

## Supported Desktops

- Mac OS X
- Linux Unity
- Linux GNOME

## Supported Bing Locales & Resolutions

- Locales: ar-XA, bg-BG, cs-CZ, da-DK, de-AT, de-CH, de-DE, el-GR, en-AU, en-CA, en-GB, en-ID, en-IE, en-IN, en-MY, en-NZ, en-PH, en-SG, en-US, en-XA, en-ZA, es-AR, es-CL, es-ES, es-MX, es-US, es-XL, et-EE, fi-FI, fr-BE, fr-CA, fr-CH, fr-FR, he-IL, hr-HR, hu-HU, it-IT, ja-JP, ko-KR, lt-LT, lv-LV, nb-NO, nl-BE, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sl-SL, sv-SE, th-TH, tr-TR, uk-UA, zh-CN, zh-HK, zh-TW
- Resolutions: 800x600, 1024x768, 1280x720, 1280x768, 1366x768, 1920x1080, 1920x1200 (watermarked)

## Examples

Example                         | Description
------------------------------- | ---------------------------------------------
./potd.py                       | Bing photo
./potd.py -l en-AU              | Bing from Australia
./potd.py -r 1920x1200          | Bing with 1920x1200 resolution
./potd.py -l en-AU -r 1920x1200 | Bing from Australia with 1920x1200 resolution
./potd.py -n                    | NASA photo
./potd.py -n -d 2017-06-08      | NASA from 2017-06-08
