#!/usr/bin/env node

const fs = require('fs');
const childProcess = require('child_process');

const axios = require('axios');
const yargs = require('yargs');

const argv = yargs
  .options({
    'n': {
      alias: 'nasa',
      describe: 'Choose NASA photo',
      type: 'boolean'
    },
    'N': {
      alias: 'ng',
      describe: 'Choose National Geographic photo',
      type: 'boolean'
    },
    'b': {
      alias: 'before',
      describe: 'Bing date option (# of days before)',
      type: 'number',
      default: 0,
      choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    'l': {
      alias: 'locale',
      describe: 'Bing locale option',
      type: 'string',
      default: 'en-US',
      choices: ['ar-XA', 'bg-BG', 'cs-CZ', 'da-DK', 'de-AT', 'de-CH', 'de-DE', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-ID', 'en-IE', 'en-IN', 'en-MY', 'en-NZ', 'en-PH', 'en-SG', 'en-US', 'en-XA', 'en-ZA', 'es-AR', 'es-CL', 'es-ES', 'es-MX', 'es-US', 'es-XL', 'et-EE', 'fi-FI', 'fr-BE', 'fr-CA', 'fr-CH', 'fr-FR', 'he-IL', 'hr-HR', 'hu-HU', 'it-IT', 'ja-JP', 'ko-KR', 'lt-LT', 'lv-LV', 'nb-NO', 'nl-BE', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sk-SK', 'sl-SL', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'zh-CN', 'zh-HK', 'zh-TW']
    },
    'r': {
      alias: 'resolution',
      describe: 'Bing resolution option',
      type: 'string',
      default: '1920x1080',
      choices: ['800x600', '1024x768', '1280x720', '1280x768', '1366x768', '1920x1080', '1920x1200']
    },
    'k': {
      alias: 'key',
      describe: 'NASA API key',
      type: 'string',
      default: 'DEMO_KEY'
    },
    'd': {
      alias: 'date',
      describe: 'NASA date option (YYYY-mm-dd)',
      type: 'string',
      default: new Date().toISOString().slice(0, 10)
    },
    'o': {
      alias: 'option',
      describe: 'Linux background display option',
      type: 'string',
      default: 'zoom',
      choices: ['none', 'wallpaper', 'centered', 'scaled', 'stretched', 'zoom', 'spanned']
    }
  })
  .help()
  .alias('help', 'h')
  .version()
  .alias('version', 'v')
  .argv;

const main = async () => {
  let linux;
  if (process.platform === 'linux') {
    linux = true;
  } else if (process.platform === 'darwin') {
    linux = false;
  } else {
    console.error('Your platform is not supported yet.');
    process.exitCode = 1;
  }
  let searchUrl;
  if (argv.N) {
    searchUrl = 'https://www.nationalgeographic.com/photography/photo-of-the-day/_jcr_content/.gallery.json';
  } else if (argv.n) {
    searchUrl = `https://api.nasa.gov/planetary/apod?api_key=${argv.k}&hd=True&date=${argv.d}`;
  } else {
    let idx = 0;
    let n = 1;
    if (argv.b <= 7) {
      idx = argv.b;
      n = 1;
    } else {
      idx = 7;
      n = argv.b - 6;
    }
    searchUrl = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=${n}&mkt=${argv.l}`;
  }
  let photo;
  let photoUrl;
  let photoName;
  let photoDir = '/Pictures/';
  await axios(searchUrl)
    .then(res => {
      if (argv.N) {
        photo = res.data.items[0];
        photoUrl = photo.originalUrl;
        photoName = `${photo.title}.jpg`;
        photoDir += 'National Geographic/';
      } else if (argv.n) {
        photo = res.data;
        if (photo.hdurl) {
          photoUrl = photo.hdurl;
          photoName = photoUrl.slice(photoUrl.lastIndexOf('/') + 1);
          photoDir += 'NASA/';
        } else {
          console.error('There is no photo today.');
          process.exitCode = 1;
        }
      } else {
        photo = `${res.data.images[res.data.images.length - 1].urlbase}_${argv.r}.jpg`;
        photoUrl = `https://www.bing.com${photo}`;
        photoName = photo.slice(photo.indexOf('.') + 1);
        photoDir += 'Bing/';
      }
    })
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    });
  const directory = (linux ? '/home/' : '/Users/') + process.env.USER + photoDir;
  const fileName = directory + photoName;
  await fs.promises.mkdir(directory, { recursive: true })
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    });
  await axios({ url: photoUrl, responseType: 'stream', timeout: 20000 })
    .then(res => {
      res.data.pipe(fs.createWriteStream(fileName));
    })
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    });
  let command;
  if (linux) {
    command = `gsettings set org.gnome.desktop.background picture-options "${argv.o}" & gsettings set org.gnome.desktop.background picture-uri "file://${fileName}"`;
  } else {
    command = `osascript -e 'tell application "Finder" to set desktop picture to POSIX file "${fileName}"'`;
  }
  childProcess.exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

main();
