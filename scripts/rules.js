import {join} from 'path';
import {readFileSync} from 'fs';
import printer from './shared/markdown-rules-printer';
import writeFile from './shared/write-file';
import getRules from './shared/get-rules';
import parseRuleId from './shared/parse-rule-id';
import sortRuleId from './shared/sort-rule-id';
import config from '..';

const rules = getRules(config),
  data = Object.keys(rules)
    .sort(sortRuleId)
    .map(ruleId => ({
      ...parseRuleId(ruleId),
      ...rules[ruleId],
    }))
    .filter(({prefix}) => prefix === 'vue')
    .filter(({value}) => value !== 'off'),
  RULE_START_MARK = '<!-- rules start -->',
  RULE_END_MARK = '<!-- rules end -->',
  fixable = data.filter(({meta: {fixable}}) => Boolean(fixable)),
  noneFixable = data.filter(({meta: {fixable}}) => !fixable),
  warnData = noneFixable.filter(({value}) => value === 'warn'),
  errorData = noneFixable.filter(({value}) => value === 'error'),
  content = [
    RULE_START_MARK,
    "<!-- AUTO GENERATED CONTENT, DON'T EDIT -->",
    '### Error',
    printer(errorData),
    '### Warn',
    printer(warnData),
    '### Fixable',
    printer(fixable),
    RULE_END_MARK,
  ].join('\n\n'),
  readmeFile = join(__dirname, `../readme.md`),
  readme = readFileSync(readmeFile, 'utf8').replace(
    new RegExp(`${RULE_START_MARK}[\\s\\S]*?${RULE_END_MARK}`, 'm'),
    content
  );

writeFile(readmeFile, readme);
