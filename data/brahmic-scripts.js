import { lettersGraph } from './root';
import { aramaicAlphabet } from './aramic';

// (.*\n){2}

export const isoSymbols = [
  'a',
  'ā',
  'i',
  'ī',
  'u',
  'ū',
  'ṛ',
  'ṝ',
  'e',
  'ai',
  'o',
  'au',
  'ka',
  'kh',
  'ga',
  'gh',
  'ṅa',
  'ca',
  'ch',
  'ja',
  'jh',
  'ña',
  'ṭa',
  'ṭh',
  'ḍa',
  'ḍh',
  'ṇa',
  'ta',
  'th',
  'da',
  'dh',
  'na',
  'pa',
  'ph',
  'ba',
  'bh',
  'ma',
  'ya',
  'ra',
  'la',
  'va',
  'śa',
  'ṣa',
  'sa',
  'ha',
];
isoSymbols.forEach((letter) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
  });
});

/**
 * Brahmi
 */
export const brahmi = [
  '𑀅', // a
  '𑀆', // ā
  '𑀇', // i
  '𑀈', // ī
  '𑀉', // u
  '𑀊', // ū
  '𑀋', // ṛ
  '𑀌', // ṝ
  '𑀏', // e
  '𑀐', // ai
  '𑀑', // o
  '𑀒', // au
  '𑀓', // ka
  '𑀔', // kha
  '𑀕', // ga
  '𑀖', // gha
  '𑀗', // ṅa
  '𑀘', // ca
  '𑀙', // cha
  '𑀚', // ja
  '𑀛', // jha
  '𑀜', // ña
  '𑀝', // ṭa
  '𑀞', // ṭha
  '𑀟', // ḍa
  '𑀠', // ḍha
  '𑀡', // ṇa
  '𑀢', // ta
  '𑀣', // tha
  '𑀤', // da
  '𑀥', // dha
  '𑀦', // na
  '𑀧', // pa
  '𑀨', // pha
  '𑀩', // ba
  '𑀪', // bha
  '𑀫', // ma
  '𑀬', // ya
  '𑀭', // ra
  '𑀮', // la
  '𑀯', // va
  '𑀰', // śa
  '𑀱', // ṣa
  '𑀲', // sa
  '𑀳', // ha
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
    iso: isoSymbols[index],
  });

  lettersGraph.addLine('Brahmi', letter);
  lettersGraph.addLine(isoSymbols[index], letter);
});
// prettier-ignore
[ '𑀅', '𑀩', '𑀕', '𑀥', '𑀳', '𑀯', '𑀚', '𑀖', '𑀣', '𑀬', '𑀓', '𑀮', '𑀫', '𑀦', '𑀱', '𑀏', '𑀧', '𑀘', '𑀔', '𑀭', '𑀰', '𑀢',
].forEach((letter, index) => {
  lettersGraph.addLine(aramaicAlphabet[index], letter);
});

/**
 * Gupta
 */
const gupta = [
  '/gupta/a.svg', // a
  '/gupta/aa.svg', // ā
  '/gupta/i.svg', // i
  '/gupta/ii.svg', // ī
  '/gupta/u.svg', // u
  '/gupta/uu.svg', // ū
  '/gupta/r-.png', // ṛ
  '/gupta/r--.png', // ṝ
  '/gupta/e.svg', // e
  '/gupta/ai.svg', // ai
  '/gupta/o.svg', // o
  '/gupta/au.svg', // au
  '/gupta/k.svg', // ka
  '/gupta/kh.svg', // kha
  '/gupta/g.svg', // ga
  '/gupta/gh.svg', // gha
  '/gupta/ng.svg', // ṅa
  '/gupta/c.svg', // ca
  '/gupta/ch.svg', // cha
  '/gupta/j.svg', // ja
  '/gupta/jh.svg', // jha
  '/gupta/ny.svg', // ña
  '/gupta/tt.svg', // ṭa
  '/gupta/tth.svg', // ṭha
  '/gupta/dd.svg', // ḍa
  '/gupta/ddh.svg', // ḍha
  '/gupta/nn.svg', // ṇa
  '/gupta/t.svg', // ta
  '/gupta/th.svg', // tha
  '/gupta/d.svg', // da
  '/gupta/dh.svg', // dha
  '/gupta/n.svg', // na
  '/gupta/p.svg', // pa
  '/gupta/ph.svg', // pha
  '/gupta/b.svg', // ba
  '/gupta/bh.svg', // bha
  '/gupta/m.svg', // ma
  '/gupta/y.svg', // ya
  '/gupta/r.svg', // ra
  '/gupta/l.svg', // la
  '/gupta/v.svg', // va
  '/gupta/sh.svg', // śa
  '/gupta/ss.svg', // ṣa
  '/gupta/s.svg', // sa
  '/gupta/h.svg', // ha
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
    iso: isoSymbols[index],
  });

  lettersGraph.addLine('Gupta', letter);
  lettersGraph.addLine(brahmi[index], letter);
  lettersGraph.addLine(isoSymbols[index], letter);
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

const siddham = [
  '𑖀', // a
  '𑖁', // ā
  '𑖂', // i
  '𑖃', // ī
  '𑖄', // u
  '𑖅', // ū
  '𑖆', // ṛ
  '𑖇', // ṝ
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

siddham.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
    iso: isoSymbols[index],
  });

  lettersGraph.addLine('Siddham', letter);
  lettersGraph.addLine(gupta[index], letter);
  lettersGraph.addLine(isoSymbols[index], letter);
});

/**
 * Devanagari
 */
const devanagari = [
  'अ', // a
  'आ', // ā
  'इ', // i
  'ई', // ī
  'उ', // u
  'ऊ', // ū
  'ऋ', // ṛ
  'ॠ', // ṝ
  'ए', // e
  'ऐ', // ai
  'ओ', // o
  'औ', // au
  'क', // ka
  'ख', // kh
  'ग', // ga
  'घ', // gh
  'ङ', // ṅa
  'च', // ca
  'छ', // ch
  'ज', // ja
  'झ', // jh
  'ञ', // ña
  'ट', // ṭa
  'ठ', // ṭh
  'ड', // ḍa
  'ढ', // ḍh
  'ण', // ṇa
  'त', // ta
  'थ', // th
  'द', // da
  'ध', // dh
  'न', // na
  'प', // pa
  'फ', // ph
  'ब', // ba
  'भ', // bh
  'म', // ma
  'य', // ya
  'र', // ra
  'ल', // la
  'व', // va
  'श', // śa
  'ष', // ṣa
  'स', // sa
  'ह', // ha
];

lettersGraph.addNode('Devanagari', {
  name: 'Devanāgarī',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});
lettersGraph.addLine('Siddham', 'Devanagari');

devanagari.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
    iso: isoSymbols[index],
  });

  lettersGraph.addLine('Devanagari', letter);
  lettersGraph.addLine(siddham[index], letter);
  lettersGraph.addLine(isoSymbols[index], letter);
});

/**
 * Gurmukhi
 */
const gurmukhi = [
  'ਅ', // a
  'ਆ', // ā
  'ਇ', // i
  'ਈ', // ī
  'ਉ', // u
  'ਊ', // ū
  'ਰੁʼ', // ṛ
  'ਰੂʼ', // ṝ
  'ਏ', // e
  'ਐ', // ai
  'ਓ', // o
  'ਔ', // au
  'ਕ', // ka
  'ਖ', // kha
  'ਗ', // ga
  'ਘ', // gha
  'ਙ', // ṅa
  'ਚ', // ca
  'ਛ', // cha
  'ਜ', // ja
  'ਝ', // jha
  'ਞ', // ña
  'ਟ', // ṭa
  'ਠ', // ṭha
  'ਡ', // ḍa
  'ਢ', // ḍha
  'ਣ', // ṇa
  'ਤ', // ta
  'ਥ', // tha
  'ਦ', // da
  'ਧ', // dha
  'ਨ', // na
  'ਪ', // pa
  'ਫ', // pha
  'ਬ', // ba
  'ਭ', // bha
  'ਮ', // ma
  'ਯ', // ya
  'ਰ', // ra
  'ਲ', // la
  'ਵ', // va
  'ਸ਼', // śa
  'ਸ਼਼', // ṣa
  'ਸ', // sa
  'ਹ', // ha
];

lettersGraph.addNode('Gurmukhi', {
  name: 'Gurmukhi',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});

gurmukhi.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
    iso: isoSymbols[index],
  });

  lettersGraph.addLine('Gurmukhi', letter);
  lettersGraph.addLine(isoSymbols[index], letter);
});

/**
 * Tamil
 */
const tamil = [
  'அ', // a
  'ஆ', // ā
  'இ', // i
  'ஈ', // ī
  'உ', // u
  'ஊ', // ū
  'ருʼ', // ṛ
  'ரூʼ', // ṝ
  'ஏ', // e
  'ஐ', // ai
  'ஓ', // o
  'ஔ', // au
  'க', // ka
  'க²', // kha
  'க³', // ga
  'க⁴', // gha
  'ங', // ṅa
  'ச', // ca
  'ச²', // cha
  'ஜ', // ja
  'ஜ²', // jha
  'ஞ', // ña
  'ட', // ṭa
  'ட²', // ṭha
  'ட³', // ḍa
  'ட⁴', // ḍha
  'ண', // ṇa
  'த', // ta
  'த²', // tha
  'த³', // da
  'த⁴', // dha
  'ந', // na
  'ப', // pa
  'ப²', // pha
  'ப³', // ba
  'ப⁴', // bha
  'ம', // ma
  'ய', // ya
  'ர', // ra
  'ல', // la
  'வ', // va
  'ஶ', // śa
  'ஷ', // ṣa
  'ஸ', // sa
  'ஹ', // ha
];

lettersGraph.addNode('Tamil', {
  name: 'Tamil',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});

tamil.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
    iso: isoSymbols[index],
  });

  lettersGraph.addLine('Tamil', letter);
  lettersGraph.addLine(isoSymbols[index], letter);
});

/**
 * Thai
 */
const thai = [
  'อ', // a
  'อา', // ā
  'อิ', // i
  'อี', // ī
  'อุ', // u
  'อู', // ū
  'ฤ', // ṛ
  'ฤๅ', // ṝ
  'เอ', // e
  'ไอ', // ai
  'โอ', // o
  'เอา', // au
  'ก', // ka
  'ข', // kha
  'ค', // ga
  'ฆ', // gha
  'ง', // ṅa
  'จ', // ca
  'ฉ', // cha
  'ช', // ja
  'ฌ', // jha
  'ญ', // ña
  'ฏ', // ṭa
  'ฐ', // ṭha
  'ฑ', // ḍa
  'ฒ', // ḍha
  'ณ', // ṇa
  'ต', // ta
  'ถ', // tha
  'ท', // da
  'ธ', // dha
  'น', // na
  'ป', // pa
  'ผ', // pha
  'พ', // ba
  'ภ', // bha
  'ม', // ma
  'ย', // ya
  'ร', // ra
  'ล', // la
  'ว', // va
  'ศ', // śa
  'ษ', // ṣa
  'ส', // sa
  'ห', // ha
];

lettersGraph.addNode('Thai', {
  name: 'Thai',
  scriptType: 'Abugida',
  direction: 'left-to-right',
});

thai.forEach((letter, index) => {
  lettersGraph.addNode(letter, {
    symbol: letter,
    type: 'consonant',
    iso: isoSymbols[index],
  });

  lettersGraph.addLine('Thai', letter);
  lettersGraph.addLine(isoSymbols[index], letter);
});
