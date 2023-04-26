import zip from 'compress-images';
import { copyFile } from 'cp-file';
import fs from 'fs-extra';
debugger
const result = {
  totalMin: 0,
  totalCount: 0,
};

zip(
  'packages/lancer-slim/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
  'cache/',
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: 'mozjpeg', command: ['-quality', '80'] } },
  { png: { engine: 'pngquant', command: ['--quality=80', '-o'] } },
  { svg: { engine: 'svgo', command: '--multipass' } },
  { gif: { engine: 'gifsicle', command: ['--colors', '80', '--use-col=web'] } },
  function (error, completed, statistic) {
    const { input, path_out_new, size_in, size_output } = statistic;
    // 仅当尺寸小的时候才进行复制
    if (size_output < size_in) {
      result.totalMin += size_in - size_output;
      result.totalCount += 1;
      copyFile(path_out_new, input);
    }
    if (completed) {
      fs.remove('./cache');
      console.log(`MinSize: ${result.totalMin / 1024}kb`);
      console.log(`MinCount: ${result.totalCount}`);
    }
  }
);
