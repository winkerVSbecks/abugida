import { lettersGraph } from './root';
import { aramaicAlphabet } from './aramic';

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
  '𑀅𑀁', // aṃ
  '𑀅𑀂', // aḥ
  '𑀅𑀀', // am̐
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
  if (index < aramaicAlphabet.length) {
    lettersGraph.addLine(aramaicAlphabet[index], letter);
  }
});

/**
 * Gupta
 */
const gupta = [
  '/gupta/a.svg',
  '/gupta/b.svg',
  '/gupta/g.svg',
  '/gupta/dh.svg',
  '/gupta/h.svg',
  '/gupta/v.svg',
  '/gupta/j.svg',
  '/gupta/gh.svg',
  '/gupta/th.svg',
  '/gupta/y.svg',
  '/gupta/k.svg',
  '/gupta/l.svg',
  '/gupta/m.svg',
  '/gupta/n.svg',
  '/gupta/ss.svg',
  '/gupta/e.svg',
  '/gupta/p.svg',
  '/gupta/c.svg',
  '/gupta/kh.svg',
  '/gupta/r.svg',
  '/gupta/sh.svg',
  '/gupta/t.svg',
  // Gupta not in the aramaic set
  '/gupta/g.svg',
  '/gupta/ng.svg',
  '/gupta/ch.svg',
  '/gupta/jh.svg',
  '/gupta/ny.svg',
  '/gupta/tt.svg',
  '/gupta/tth.svg',
  '/gupta/dd.svg',
  '/gupta/ddh.svg',
  '/gupta/nn.svg',
  '/gupta/d.svg',
  '/gupta/ph.svg',
  '/gupta/bh.svg',
  '/gupta/s.svg',
];

lettersGraph.addNode('Gupta', {
  name: 'Gupta',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});
lettersGraph.addLine('Brahmi', 'Gupta');

gupta.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
  });

  lettersGraph.addLine('Gupta', letter);

  // if (brahmi[index]) {
  //   lettersGraph.addLine(brahmi[index], letter);
  // }

  if (index < aramaicAlphabet.length) {
    lettersGraph.addLine(brahmi[index], letter);
  }
});

/**
 * Siddhaṃ
 */
lettersGraph.addNode('Siddham', {
  name: 'Siddhaṃ',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});
lettersGraph.addLine('Gupta', 'Siddham');
// lettersGraph.addLine('Gupta', 'Siddham');

const siddham = [
  '𑖀', // a
  '𑖁', // ā
  '𑖂', // i
  '𑖃', // ī
  '𑖄', // u
  '𑖅', // ū
  '𑖆', // ṛ
  '𑖇', // ṝ
  '𑖈', // ḷ
  '𑖉', // ḹ
  '𑖊', // e
  '𑖋', // ai
  '𑖌', // o
  '𑖍', // au
  '𑖎', // ka
  '𑖏', // kha
  '𑖐', // ga
  '𑖑', // gha
  '𑖒', // ṅa
  '𑖓', // ca
  '𑖔', // cha
  '𑖕', // ja
  '𑖖', // jha
  '𑖗', // ña
  '𑖘', // ṭa
  '𑖙', // ṭha
  '𑖚', // ḍa
  '𑖛', // ḍha
  '𑖜', // ṇa
  '𑖝', // ta
  '𑖞', // tha
  '𑖟', // da
  '𑖠', // dha
  '𑖡', // na
  '𑖢', // pa
  '𑖣', // pha
  '𑖤', // ba
  '𑖥', // bha
  '𑖦', // ma
  '𑖧', // ya
  '𑖨', // ra
  '𑖩', // la
  '𑖪', // va
  '𑖫', // śa
  '𑖬', // ṣa
  '𑖭', // sa
  '𑖮', // ha
];

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
  // Devanagari not in the aramaic set
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
  'अं', // aṃ
  'अः', // aḥ
  'अँ', // am̐
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
    // lettersGraph.addLine(gupta[index], letter);
  }

  if (index < aramaicAlphabet.length) {
    lettersGraph.addLine(gupta[index], letter);
  }
});
