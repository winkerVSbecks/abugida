import Image from 'next/image';
import letters from '../data';
import { brahmi } from '../data/brahmic-scripts';

let nextLang = letters.find('Brahmi');
const resultLang = [];

while (nextLang) {
  resultLang.push(nextLang.value.name);
  const potentialNext = nextLang.lines[nextLang.lines.length - 1];
  nextLang = potentialNext?.value.name ? potentialNext : null;
}

// https://observablehq.com/@d3/mobile-patent-suits

const Letter = ({ value }) =>
  value.match(/(svg|png)/) ? (
    <>
      ⟨
      <Image alt={value} src={value} width={20} height={20} />⟩
    </>
  ) : (
    `⟨${value}⟩`
  );

const Etymology = ({ letter }) => {
  const result = getEtymology(letter);

  return (
    <p className="measure lh-copy f3">
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
  return (
    <article className="cf ph3 ph5-ns pv5">
      <header className="fn fl-ns w-40-ns pr4-ns">
        <h1 className="mb3 mt0 lh-title">Transliteration</h1>
        <p className="measure lh-copy">
          Conversion of a text from one script to another that involves swapping
          letters (thus trans- + liter-) in predictable ways.
        </p>
        <p className="measure lh-copy">
          For example, Greek ⟨α⟩ → ⟨a⟩, Cyrillic ⟨д⟩ → ⟨d⟩, Greek ⟨χ⟩ → the
          digraph ⟨ch⟩, Armenian ⟨ն⟩ → ⟨n⟩ or Latin ⟨æ⟩ → ⟨ae⟩.
        </p>
      </header>
      <div className="fn fl-ns w-60-ns">
        <p className="measure lh-copy f4">{resultLang.join(' → ')}</p>
        {brahmi.map((symbol) => (
          <Etymology key={symbol} letter={symbol} />
        ))}
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
