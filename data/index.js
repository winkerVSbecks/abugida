import { Graph } from './graph';

const lettersGraph = new Graph();

// Hieroglyphs -> Proto-Sinaitic -> Phoenician -> Aramaic -> Brahmi -> Gupta -> Nagari -> Devanagari -> Gujarati
//                                                                           -> Sarada -> Gurmukhi
//                                                        -> Hebrew
//                                              -> Greek -> Etruscan -> Latin -> Roman
//                                                       -> Cyrillic

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
const egyptianHieroglyphs = [
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
const phoenicianAlphabet = [
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

/**
 * Aramaic
 */
const aramaicAlphabet = [
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
  lettersGraph.addLine(transliteration[index], letter);
});

/**
 * Brahmi
 */
const brahmi = [
  '𑀅',
  '𑀩',
  '𑀕',
  '𑀥',
  '𑀳',
  '𑀯',
  '𑀚',
  '𑀖',
  '𑀣',
  '𑀬',
  '𑀓',
  '𑀮',
  '𑀫',
  '𑀦',
  '𑀱',
  '𑀏',
  '𑀧',
  '𑀘',
  '𑀔',
  '𑀭',
  '𑀰',
  '𑀢',
  // Brahmi not in transliteration set
  '𑀆', // ā
  '𑀇', // i
  '𑀈', // ī
  '𑀉', // u
  '𑀊', // ū
  '𑀐', // ai
  '𑀑', // o
  '𑀒', // au
  '𑀋', // ṛ
  '𑀌', // ṝ
  '𑀍', // l̩
  '𑀎', // ḹ
  '𑀗',
  '𑀙',
  '𑀛',
  '𑀜',
  '𑀝',
  '𑀞',
  '𑀟',
  '𑀠',
  '𑀡',
  '𑀤',
  '𑀨',
  '𑀪',
  '𑀲',
];

lettersGraph.addNode('Brahmi', {
  name: 'Brahmi',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});
lettersGraph.addLine('Aramaic alphabet', 'Brahmi');

brahmi.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
  });

  lettersGraph.addLine('Brahmi', letter);
  if (index < transliteration.length) {
    lettersGraph.addLine(aramaicAlphabet[index], letter);
    lettersGraph.addLine(transliteration[index], letter);
  }
});

/**
 * Gupta
 */
lettersGraph.addNode('Gupta', {
  name: 'Gupta',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});
lettersGraph.addLine('Brahmi', 'Gupta');
// TODO

/**
 * Nāgarī
 */
lettersGraph.addNode('Nagari', {
  name: 'Nāgarī',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});
lettersGraph.addLine('Gupta', 'Nagari');
// TODO

/**
 * Siddhaṃ
 */
lettersGraph.addNode('Siddham', {
  name: 'Siddhaṃ',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});
lettersGraph.addLine('Nagari', 'Siddham');
// TODO

/**
 * Devanagari
 */
const devanagari = [
  'अ',
  'ब',
  'ग',
  'ध',
  'ह',
  'व',
  'ज',
  'घ',
  'थ',
  'य',
  'क',
  'ल',
  'म',
  'न',
  'ष',
  'ए',
  'प',
  'च',
  'ख',
  'र',
  'श',
  'त',
  // Devanagari not in the Phoenician set
  'आ', // ā
  'इ', // i
  'ई', // ī
  'उ', // u
  'ऊ', // ū
  'ऐ', // ai
  'ओ', // o
  'औ', // au
  'ऋ', // ṛ
  'ॠ', // ṝ
  'ऌ', // l̩
  'ॡ', // ḹ
  'ङ',
  'छ',
  'झ',
  'ञ',
  'ट',
  'ठ',
  'ड',
  'ढ',
  'ण',
  'द',
  'फ',
  'भ',
  'स',
  // not in Brahmi
  'ॲ', // ê
  'ऑ', // ô
];

lettersGraph.addNode('Devanagari', {
  name: 'Devanagari',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});
lettersGraph.addLine('Siddham', 'Devanagari');

devanagari.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
  });

  lettersGraph.addLine('Devanagari', letter);

  if (brahmi[index]) {
    lettersGraph.addLine(brahmi[index], letter);
  }

  if (index < transliteration.length) {
    lettersGraph.addLine(transliteration[index], letter);
  }
});

export default lettersGraph;
