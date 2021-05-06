import {join} from 'path';
import {readFileSync} from 'fs';
import createEsmUtils from 'esm-utils'
import printer from './shared/markdown-rules-printer.mjs';
import writeFile from './shared/write-file.mjs';
import getRules from './shared/get-rules.mjs';
import parseRuleId from './shared/parse-rule-id.mjs';
import sortRuleId from './shared/sort-rule-id.mjs';
import config from '../index.js';

const {dirname} = createEsmUtils(import.meta)

const rules = getRules(config);
const data = Object.keys(rules)
  .sort(sortRuleId)
  .map((ruleId) => ({
    ...parseRuleId(ruleId),
    ...rules[ruleId],
  }))
  .filter(({value}) => value !== 'off');

const RULE_START_MARK = '<!-- rules start -->';
const RULE_END_MARK = '<!-- rules end -->';

const fixable = data.filter(({meta: {fixable}}) => Boolean(fixable));
const noneFixable = data.filter(({meta: {fixable}}) => !fixable);
const warnData = noneFixable.filter(({value}) => value === 'warn');
const errorData = noneFixable.filter(({value}) => value === 'error');

const content = [
  RULE_START_MARK,
  "<!-- AUTO GENERATED CONTENT, DON'T EDIT -->",
  '### Error',
  printer(errorData),
  '### Warn',
  printer(warnData),
  '### Fixable',
  printer(fixable),
  RULE_END_MARK,
].join('\n\n');

const readmeFile = join(dirname, `../readme.md`);
const readme = readFileSync(readmeFile, 'utf8').replace(
  new RegExp(`${RULE_START_MARK}[\\s\\S]*?${RULE_END_MARK}`, 'm'),
  content
);

writeFile(readmeFile, readme);
