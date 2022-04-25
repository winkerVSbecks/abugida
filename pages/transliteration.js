import Image from 'next/image';
import letters from '../data';
import { egyptianHieroglyphs } from '../data/root';

let nextLang = letters.find('Egyptian hieroglyphs');
const resultLang = [];

while (nextLang) {
  resultLang.push(nextLang.value.name);
  const potentialNext = nextLang.lines[nextLang.lines.length - 1];
  nextLang = potentialNext?.value.name ? potentialNext : null;
}

console.log(letters.find('Egyptian hieroglyphs'));
console.log(letters.find('𑀛'));
// console.log(letters.find('ʾ'));
console.log(letters.find('Proto-Sinaitic'));

// https://observablehq.com/@d3/mobile-patent-suits

const Letter = ({ value }) =>
  value.includes('svg') ? (
    <>
      ⟨
      <Image
        alt={value}
        src={value}
        width={30}
        height={30}
        style={{ width: '0.75em', height: '0.75em' }}
      />
      ⟩
    </>
  ) : (
    `⟨${value}⟩`
  );

const Etymology = ({ letter }) => {
  const result = getEtymology(letter);

  return (
    <p className="measure lh-copy f2">
      {result.map((letter, idx) => (
        <span key={idx}>
          <Letter value={letter} />
          {idx === result.length - 1 ? '' : ' → '}
        </span>
      ))}
    </p>
  );
};

export const Transliteration = () => {
  const r2 = getEtymology('𓂧');

  return (
    <article className="cf ph3 ph5-ns pv5">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="mb3 mt0 lh-title">Transliteration</h1>
        <p className="measure lh-copy gray">
          Conversion of a text from one script to another that involves swapping
          letters (thus trans- + liter-) in predictable ways.
        </p>
        <p className="measure lh-copy gray">
          For example, Greek ⟨α⟩ → ⟨a⟩, Cyrillic ⟨д⟩ → ⟨d⟩, Greek ⟨χ⟩ → the
          digraph ⟨ch⟩, Armenian ⟨ն⟩ → ⟨n⟩ or Latin ⟨æ⟩ → ⟨ae⟩.
        </p>
      </header>
      <div className="fn fl-ns w-50-ns">
        <p className="measure lh-copy f4">{resultLang.join(' → ')}</p>
        {egyptianHieroglyphs.map((symbol) => (
          <Etymology key={symbol} letter={symbol} />
        ))}
        {/* <Etymology letter="𓃾" /> */}
        {/* <Etymology letter="𓂧" /> */}
      </div>
    </article>
  );
};

export default Transliteration;

function getEtymology(symbol) {
  let next = letters.find(symbol);
  const result = [];

  while (next) {
    result.push(next.value.symbol);
    next = next.lines[0];
  }
  return result;
}
