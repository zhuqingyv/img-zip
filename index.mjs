#!/usr/bin/env node
import { getConfig } from './src/getConfig.js';
import getProject from './src/getProject.js';
import zip from './src/zip.js';


const bin = async() => {
  // 获取配置
  const {
    dir,
    option: commonOption
  } = await getConfig();

  const currentProject = getProject(dir, commonOption);

  zip(currentProject);

};

bin();