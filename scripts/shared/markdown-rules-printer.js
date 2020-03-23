const MARKDOWN_TH_ALIGN_LEFT = ':-';
const MARKDOWN_TH_ALIGN_CENTER = ':-:';
const MARKDOWN_TH_ALIGN = [
  MARKDOWN_TH_ALIGN_CENTER,
  MARKDOWN_TH_ALIGN_CENTER,
  // MARKDOWN_TH_ALIGN_CENTER,
  MARKDOWN_TH_ALIGN_LEFT,
  MARKDOWN_TH_ALIGN_LEFT,
];

function markdown(data) {
  if (data.length === 0) {
    return 'No rules.';
  }

  return [
    [
      '#',
      'Type',
      // 'Fixable',
      'Rule',
      'Description',
    ],
    MARKDOWN_TH_ALIGN,
    ...data.map(({id, meta, value}, index) => [
      index + 1,
      value,
      // meta.fixable ? '✓' : '',
      `[${id}](${meta.docs.url})`,
      meta.docs.description,
    ]),
  ]
    .map((parts) => parts.join('|'))
    .join('\n');
}

export default markdown;
