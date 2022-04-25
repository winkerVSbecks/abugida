import { Graph } from './graph';

export const lettersGraph = new Graph();

/**
 * Transliteration
 */
const transliteration = [
  'ʾ (ʔ Glottal stop)',
  'b',
  'g',
  'd',
  'h',
  'w',
  'z',
  'ḥ',
  'ṭ',
  'j',
  'k',
  'l',
  'm',
  'n',
  's',
  'ʿ',
  'p',
  'ṣ',
  'q',
  'r',
  'š',
  't',
];

lettersGraph.addNode('Transliteration', {
  name: 'Egyptian hieroglyphs',
  scriptType: 'Logogram',
  direction: 'right-to-left',
});
transliteration.forEach((letter) => {
  lettersGraph.addNode(letter);
});

/**
 * Egyptian hieroglyphs
 */
export const egyptianHieroglyphs = [
  '𓃾',
  '𓉐',
  '𓌙',
  '𓇯',
  '𓀠',
  '𓏲',
  '𓏭',
  '𓉗',
  '𓄤',
  '𓂝',
  '𓂧',
  '𓌅',
  '𓈖',
  '𓆓',
  '𓊽',
  '𓁹',
  '𓂋',
  '𓇑',
  '𓃻',
  '𓁶',
  '𓌓',
  '𓏴',
];

lettersGraph.addNode('Egyptian hieroglyphs', {
  name: 'Egyptian hieroglyphs',
  scriptType: 'Logogram',
  direction: 'right-to-left',
});

egyptianHieroglyphs.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'logogram',
  });

  lettersGraph.addLine('Egyptian hieroglyphs', letter);
  lettersGraph.addLine(transliteration[index], letter);
});

/**
 * Proto-Sinaitic
 */
lettersGraph.addNode('Proto-Sinaitic', {
  name: 'Proto-Sinaitic',
  scriptType: 'Abjad',
  direction: 'Mixed',
});
lettersGraph.addLine('Egyptian hieroglyphs', 'Proto-Sinaitic');

// TODO

/**
 * Phoenician alphabet
 */
export const phoenicianAlphabet = [
  '𐤀',
  '𐤁',
  '𐤂',
  '𐤃',
  '𐤄',
  '𐤅',
  '𐤆',
  '𐤇',
  '𐤈',
  '𐤉',
  '𐤊',
  '𐤋',
  '𐤌',
  '𐤍',
  '𐤎',
  '𐤏',
  '𐤐',
  '𐤑',
  '𐤒',
  '𐤓',
  '𐤔',
  '𐤕',
];

lettersGraph.addNode('Phoenician alphabet', {
  name: 'Phoenician alphabet',
  scriptType: 'Abjad',
  direction: 'right-to-left',
});

lettersGraph.addLine('Proto-Sinaitic', 'Phoenician alphabet');

phoenicianAlphabet.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
  });

  lettersGraph.addLine('Phoenician alphabet', letter);
  lettersGraph.addLine(egyptianHieroglyphs[index], letter);
  lettersGraph.addLine(transliteration[index], letter);
});
