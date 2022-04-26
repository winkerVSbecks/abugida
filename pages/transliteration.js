import Image from 'next/image';
import lettersGraph from '../data';
import { isoSymbols } from '../data/brahmic-scripts';
// const isoSymbols = ['ka', 'kh', 'ga', 'gh', 'ṅa'];

const Letter = ({ value }) =>
  value.match(/(svg|png)/) ? (
    <Image alt={value} src={value} width={18} height={18} layout="fixed" />
  ) : (
    value
  );

const ScriptSet = ({ scripts, letters }) => {
  const scriptResults = scripts.map((script) => getScript(letters, script));
  console.log(scriptResults);

  return (
    <div className="overflow-auto">
      <table className="f4 w-100" cellSpacing="0">
        <thead className="f6">
          <tr className="bg-black-10">
            <th className="fw6 bb b--black-20 tl pv3 ph3"></th>
            {letters.map((l) => (
              <th key={l} className="fw6 bb b--black-20 tl ph3 pr3">
                {l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="lh-copy">
          {scriptResults.map((script, idx) => (
            <tr key={script.name}>
              <th className="f6 tl fw6 pv3 ph3 bb b--black-20 bg-black-10">
                {script.name}
              </th>
              {script.letters.map((letter) => (
                <td key={letter} className="pv3 ph3 bb b--black-20">
                  <Letter value={letter} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const scripts = [
  'Brahmi',
  'Gupta',
  'Siddham',
  'Devanagari',
  'Gurmukhi',
  'Tamil',
  'Thai',
];

export const Transliteration = () => {
  return (
    <article className="cf ph3 ph5-ns pv5">
      <h1 className="mb3 mt0 lh-title">Transliteration</h1>
      <p className="measure lh-copy">
        Conversion of a text from one script to another that involves swapping
        letters (thus trans- + liter-) in predictable ways.
      </p>
      <p className="measure lh-copy mb5">
        For example, Greek ⟨α⟩ → ⟨a⟩, Cyrillic ⟨д⟩ → ⟨d⟩, Greek ⟨χ⟩ → the
        digraph ⟨ch⟩, Armenian ⟨ն⟩ → ⟨n⟩ or Latin ⟨æ⟩ → ⟨ae⟩.
      </p>
      <ScriptSet scripts={scripts} letters={isoSymbols} />
    </article>
  );
};

export default Transliteration;

function getScript(letters, script) {
  const result = { name: '', letters: [] };
  const scriptNode = lettersGraph.find(script);
  result.name = scriptNode.value.name;

  letters.forEach((toFind) => {
    const letter = scriptNode.lines.find((l) => l.value.iso === toFind);

    if (letter) {
      result.letters.push(letter.value.symbol);
    }
  });

  return result;
}
