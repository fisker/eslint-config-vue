import {CLIEngine} from 'eslint';
import mem from 'mem';

import ruleMeta from './rule-meta';
import ruleValue from './rule-value';

function getRules(config) {
  const engine = new CLIEngine({
    baseConfig: config,
    useEslintrc: false,
  });

  engine.executeOnText('');

  const {rules} = engine.getConfigForFile('');
  const defs = engine.getRules();

  for (const ruleId of Object.keys(rules)) {
    const value = ruleValue(rules[ruleId]);
    const meta = ruleMeta(ruleId, defs);

    rules[ruleId] = {
      value,
      meta,
    };
  }
  return rules;
}

export default mem(getRules);
