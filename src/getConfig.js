import path from 'path';

export const defaultConfig = () => {
  return {};
};

export const getConfig = async() => {
  try {
    const workPath = path.resolve('./');
    const { default: configFile } = await import(path.resolve(workPath, 'img-zip.config.js'));
    return {
      ...defaultConfig(),
      ...configFile
    };
  } catch {
    return defaultConfig();
  }
};