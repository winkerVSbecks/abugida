const scriptsData = [
  {
    name: 'Devanagari',
    letters: {
      ka: 'क',
      kā: 'का',
      ki: 'कि',
      kī: 'की',
      ku: 'कु',
      kū: 'कू',
      ke: 'के',
      kai: 'कै',
      ko: 'को',
      kau: 'कौ',
    },
  },
  {
    name: 'Gurmukhi',
    letters: {
      ka: 'ਕ',
      kā: 'ਕਾ',
      ki: 'ਕਿ',
      kī: 'ਕੀ',
      ku: 'ਕੁ',
      kū: 'ਕੂ',
      ke: 'ਕੇ',
      kai: 'ਕੈ',
      ko: 'ਕੋ',
      kau: 'ਕੌ',
    },
  },
  {
    name: 'Bangla',
    letters: {
      ka: 'ক',
      kā: 'কা',
      ki: 'কি',
      kī: 'কী',
      ku: 'কু',
      kū: 'কূ',
      ke: 'কে',
      kai: 'কৈ',
      ko: 'কো',
      kau: 'কৌ',
    },
  },
  {
    name: 'Tamil',
    letters: {
      ka: 'க',
      kā: 'கா',
      ki: 'கி',
      kī: 'கீ',
      ku: 'கு',
      kū: 'கூ',
      ke: 'கே',
      kai: 'கை',
      ko: 'கோ',
      kau: 'கௌ',
    },
  },
  {
    name: 'Sinhala',
    letters: {
      ka: 'ක',
      kā: 'කා',
      ki: 'කි',
      kī: 'කී',
      ku: 'කු',
      kū: 'කූ',
      ke: 'කේ',
      kai: 'කෛ',
      ko: 'කෝ',
      kau: 'කෞ',
    },
  },
  {
    name: 'Malayalam',
    letters: {
      ka: 'ക',
      kā: 'കാ',
      ki: 'കി',
      kī: 'കീ',
      ku: 'കു',
      kū: 'കൂ',
      ke: 'കേ',
      kai: 'കൈ',
      ko: 'കോ',
      kau: 'കൗ',
    },
  },
  {
    name: 'Thai',
    letters: {
      ka: 'ก',
      kā: 'กา',
      ki: 'กิ',
      kī: 'กี',
      ku: 'กุ',
      kū: 'กู',
      ke: 'เก',
      kai: 'ไก',
      ko: 'โก',
      kau: 'เกา',
    },
  },
  {
    name: 'Mongolian (Ali Gali)',
    letters: {
      ka: 'ᢉᠠ᠋',
      kā: 'ᢉᠠ᠋᠎ᠠ',
      ki: 'ᢉᢈ',
      kī: 'ᢉᠢᠢ',
      ku: 'ᢉᠦ',
      kū: 'ᢉᠤᠦ',
      ke: 'ᢉᠧ',
      kai: 'ᢉᠧ​ᠧ',
      ko: 'ᢉᠣᠸᠠ',
      kau: 'ᢉᠣᠸᠸᠠ',
    },
  },
  {
    name: 'Tibetan',
    letters: {
      ka: 'ཀ',
      kā: 'ཀཱ',
      ki: 'ཀི',
      kī: 'ཀཱི',
      ku: 'ཀུ',
      kū: 'ཀཱུ',
      ke: 'ཀེ',
      kai: 'ཀཻ',
      ko: 'ཀོ',
      kau: 'ཀཽ',
    },
  },
];

export const BrahmicVowels = ({ include: scriptsToInclude }) => {
  const scripts = scriptsToInclude
    ? scriptsData.filter((l) => scriptsToInclude.includes(l.name))
    : scriptsData;

  return (
    <div className="overflow-auto">
      <table className="f6 w-100" cellSpacing="0">
        <thead>
          <tr className="stripe-dark">
            <th className="bg-white"></th>
            {Object.keys(scripts[0].letters).map((letter) => (
              <th key={letter} className="fw6 tc pa3 bg-white">
                {letter}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="lh-copy">
          {scripts.map(({ name, letters }) => (
            <tr key={name} className="stripe-dark">
              <th className="pa3 tl">{name}</th>
              {Object.values(letters).map((letter) => (
                <td key={letter} className="pa3 tc">
                  {letter}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
