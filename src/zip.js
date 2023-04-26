import fs from 'fs';
import zip from 'compress-images';

export default (project) => {
  const inputPath = project.path
  const reporter = {
    totalMin: 0,
    totalCount: 0
  };

  zip(
    inputPath,
    '.cache/',
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: project.option.jpg || { engine: 'mozjpeg', command: ['-quality', '80'] } },
    { png: project.option.png || { engine: 'pngquant', command: ['--quality=80', '-o'] } },
    { svg: project.option.svg || { engine: 'svgo', command: '--multipass' } },
    { gif: project.option.gif || { engine: 'gifsicle', command: ['--colors', '80', '--use-col=web'] } },
    (error, completed, statistic) => {
      if (error) {
        console.error(error);
        return;
      };
      const { input, path_out_new, size_in, size_output } = statistic;
      // 仅当尺寸小的时候才进行复制
      if (size_output < size_in) {
        reporter.totalMin += size_in - size_output;
        reporter.totalCount += 1;
        copyFile(path_out_new, input);
      }
      if (completed) {
        fs.remove('.cache');
        console.log(`MinSize: ${reporter.totalMin / 1024}kb`);
        console.log(`MinCount: ${reporter.totalCount}`);
      }
    }
  );
};