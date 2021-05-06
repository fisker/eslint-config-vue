import mem from 'mem';

function getRuleDocs(ruleId, defs) {
  const def = defs.get(ruleId) || {};
  const {meta = {}} = def;
  const {fixable = false, docs = {}} = meta;

  return {
    fixable,
    docs,
  };
}

export default mem(getRuleDocs, {cacheKey: (ruleId) => ruleId});
