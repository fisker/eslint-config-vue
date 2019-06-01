const mem = require('mem');

function getRuleDocs(ruleId, defs) {
  const def = defs.get(ruleId) || {},
    {meta = {}} = def,
    {fixable = false, docs = {}} = meta;

  return {
    fixable,
    docs,
  };
}

export default mem(getRuleDocs, {cacheKey: ruleId => ruleId});
