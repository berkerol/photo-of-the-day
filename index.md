# Photo of the Day

- Downloads Bing Photo of the Day & NASA Astronomy Picture of the Day and makes it desktop background
- Saves all photos to _~/Pictures/Bing_ & _~/Pictures/NASA_
- Sets Bing photos by default (with no arguments).
- Sets NASA Astronomy Picture of the Day with _-n_ or _--nasa_ arguments
- Supports Bing photos of different locales with _-l_ or _--locale_ arguments
- Supports Bing photos of different resolutions with _-r_ or _--resolution_ arguments
- Supports NASA photos of different dates with _-d_ or _--date_ arguments
- For Bing, 1920x1200 is watermarked, others are not
- Not all resolutions are supported by Bing

Example                         | Description
------------------------------- | ---------------------------------------------
./potd.py                       | Bing photo
./potd.py -l en-AU              | Bing from Australia
./potd.py -r 1920x1200          | Bing with 1920x1200 resolution
./potd.py -l en-AU -r 1920x1200 | Bing from Australia with 1920x1200 resolution
./potd.py -n                    | NASA photo
./potd.py -n -d 2017-06-08      | NASA from 2017-06-08

## Supported Desktops

- Mac OS X
- Linux Unity
- Linux GNOME
