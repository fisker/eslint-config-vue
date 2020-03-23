const MARKDOWN_TH_ALIGN_LEFT = ':-';
const MARKDOWN_TH_ALIGN_CENTER = ':-:';
const MARKDOWN_TH_ALIGN = [
  MARKDOWN_TH_ALIGN_LEFT,
  MARKDOWN_TH_ALIGN_CENTER,
  MARKDOWN_TH_ALIGN_CENTER,
];

function markdown({names, data}) {
  const [localName, foreignName] = names;

  if (data.length === 0) {
    return 'No difference.';
  }

  return [
    ['Rule', localName, foreignName],
    MARKDOWN_TH_ALIGN,
    ...data.map(({name, link, local, foreign}) => [
      link ? `[${name}](${link})` : name,
      local,
      foreign,
    ]),
  ]
    .map((parts) => parts.join('|'))
    .join('\n');
}

export default markdown;
