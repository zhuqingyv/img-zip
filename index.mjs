#!/usr/bin/env node
import path from 'path';
import { copyFile } from 'cp-file';
import fs from 'fs-extra';
import { getConfig } from './src/getConfig.js';
import history from './src/history.js';
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
  // const {} = history();

};

bin();