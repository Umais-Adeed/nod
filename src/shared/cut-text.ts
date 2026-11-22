const graphemes = new Intl.Segmenter('en', { granularity: 'grapheme' });

export function cutText(text: string, limit: number): string {
  if (text.length <= limit) return text;
  let end = 0;
  for (const { index, segment } of graphemes.segment(text)) {
    const next = index + segment.length;
    if (next > limit) break;
    end = next;
  }
  return text.slice(0, end);
}
