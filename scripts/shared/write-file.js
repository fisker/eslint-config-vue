import {dirname} from 'path';
import {mkdirSync, writeFileSync, existsSync} from 'fs';
import writePrettierFile from 'write-prettier-file';

function writeFile(file, content) {
  const dir = dirname(file);

  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  writePrettierFile(file, content);
}

export default writeFile;
