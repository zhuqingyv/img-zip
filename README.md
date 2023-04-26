# zip-img

## install

``` shell
npm i zip-img -g
```

## Use
``` shell
zip-img projectName
```

## Config
Create a js named image-zip.config.js

``` javascript
export default {
  dir: {
    // your project'name you can run code 'zip-img projectName'
    projectName: {
      path: 'project1/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
      option: {
        jpg: { engine: 'mozjpeg', command: ['-quality', '50'] },
        png: { engine: 'pngquant', command: ['--quality=80', '-o'] },
        svg: { engine: 'svgo', command: '--multipass' },
        gif: { engine: 'gifsicle', command: ['--colors', '80', '--use-col=web'] }
      }
    }
  },
  // some common options
  option: {
    jpg: {},
    png: {},
    svg: {},
    gif: {}
  }
};
```