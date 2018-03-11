export const getHorizontalRule = (quill) => {
  let BlockEmbed = quill.import('blots/block/embed');

  class HorizontalRule extends BlockEmbed {}
  HorizontalRule.blotName = 'hr';
  HorizontalRule.tagName = 'hr';

  return HorizontalRule;  
}
