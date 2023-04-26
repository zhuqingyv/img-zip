import path from 'path';

export default (dir = {}, commonOption = {}) => {
  const project = Object.keys(dir).reduce((pre, cur) => {
    const {
      path: _path,
      option = {}
    } = dir[cur];

    const __path = _path;
    pre[cur] = {
      path: __path,
      option: {
        ...commonOption,
        ...option
      }
    }
    return pre;
  }, {});

  const [a,b,projectName] = process.argv;

  if (projectName !== undefined) {
    return project[projectName];
  }
};