import {join} from 'path';
import {readFileSync} from 'fs';
import printer from './shared/markdown-rules-printer';
import writeFile from './shared/write-file';
import getRules from './shared/get-rules';
import parseRuleId from './shared/parse-rule-id';
import sortRuleId from './shared/sort-rule-id';
import config from '..';

const rules = getRules(config);
const data = Object.keys(rules)
  .sort(sortRuleId)
  .map(ruleId => ({
    ...parseRuleId(ruleId),
    ...rules[ruleId],
  }))
  .filter(({prefix}) => prefix === 'vue');

const RULE_START_MARK = '<!-- rules start -->';
const RULE_END_MARK = '<!-- rules end -->';

const warnData = data.filter(({value}) => value === 'warn');
const errorData = data.filter(({value}) => value === 'error');

const content = [
  RULE_START_MARK,
  "<!-- AUTO GENERATED CONTENT, DON'T EDIT -->",
  '### Error',
  printer(errorData),
  '### Warn',
  printer(warnData),
  RULE_END_MARK,
].join('\n\n');

const readmeFile = join(__dirname, `../readme.md`);
const readme = readFileSync(readmeFile, 'utf8').replace(
  new RegExp(`${RULE_START_MARK}[\\s\\S]*?${RULE_END_MARK}`, 'm'),
  content
);

writeFile(readmeFile, readme);
