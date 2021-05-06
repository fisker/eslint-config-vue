import {CLIEngine} from 'eslint';
import mem from 'mem';
import ruleMeta from './rule-meta.mjs';
import ruleValue from './rule-value.mjs';

function getRules(config) {
  const engine = new CLIEngine({
    baseConfig: config,
    useEslintrc: false,
  });

  const {rules} = engine.getConfigForFile('example.js');
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
