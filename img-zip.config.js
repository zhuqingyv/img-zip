export default {
  dir: {
    project1: {
      path: 'project1/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
      option: {
        jpg: { engine: 'mozjpeg', command: ['-quality', '50'] },
        png: { engine: 'pngquant', command: ['--quality=80', '-o'] },
        svg: { engine: 'svgo', command: '--multipass' },
        gif: { engine: 'gifsicle', command: ['--colors', '80', '--use-col=web'] }
      }
    }
  },
  option: {
    jpg: {},
    png: {},
    svg: {},
    gif: {}
  }
};