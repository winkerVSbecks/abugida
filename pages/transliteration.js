import letters from '../data';

let next = letters.find('𓃾');
const result = [];

while (next) {
  result.push(next.value.symbol);
  next = next.lines[0];
}

let nextLang = letters.find('Egyptian hieroglyphs');
const resultLang = [];

while (nextLang) {
  resultLang.push(nextLang.value.name);
  const potentialNext = nextLang.lines[nextLang.lines.length - 1];
  nextLang = potentialNext.value.name ? potentialNext : null;
}

console.log(letters.find('Egyptian hieroglyphs'));
console.log(letters.find('𑀛'));
// console.log(letters.find('ʾ'));
console.log(letters.find('Proto-Sinaitic'));

// https://observablehq.com/@d3/mobile-patent-suits

export const Transliteration = () => {
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
        <p className="measure lh-copy f2">{`⟨${result.join('⟩ → ⟨')}⟩`}</p>
        <p className="measure lh-copy f4">{resultLang.join(' → ')}</p>
      </div>
    </article>
  );
};

export default Transliteration;
