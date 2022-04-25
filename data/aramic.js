import { lettersGraph, phoenicianAlphabet } from './root';

/**
 * Aramaic
 */
export const aramaicAlphabet = [
  '𐡀',
  '𐡁',
  '𐡂',
  '𐡃',
  '𐡄',
  '𐡅',
  '𐡆',
  '𐡇',
  '𐡈',
  '𐡉',
  '𐡊',
  '𐡋',
  '𐡌',
  '𐡍',
  '𐡎',
  '𐡏',
  '𐡐',
  '𐡑',
  '𐡒',
  '𐡓',
  '𐡔',
  '𐡕',
];

lettersGraph.addNode('Aramaic alphabet', {
  name: 'Aramaic alphabet',
  scriptType: 'Abjad',
  direction: 'right-to-left',
});
lettersGraph.addLine('Phoenician alphabet', 'Aramaic alphabet');

aramaicAlphabet.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
  });

  lettersGraph.addLine('Aramaic alphabet', letter);
  lettersGraph.addLine(phoenicianAlphabet[index], letter);
});
