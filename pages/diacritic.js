const languages = [
  {
    language: 'Devanagari',
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
    language: 'Gurmukhi',
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
    language: 'Bangla',
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
    language: 'Tamil',
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
    language: 'Sinhala',
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
    language: 'Malayalam',
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
    language: 'Thai',
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
    language: 'Mongolian (Ali Gali)',
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
    language: 'Tibetan',
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

const Diacritic = () => (
  <article className="cf ph3 ph5-ns pv5">
    <h1 className="mb3 mt0 lh-title">Diacritic</h1>
    <p className="measure">
      A diacritic is a glyph added to a letter or to a basic glyph to change its
      sound-values. Some diacritics, such as the acute ◌́  and grave ◌̀ , are
      often called accents.
    </p>
    <p className="measure">
      In abugida scripts, (such as Hindi and Thai), diacritics indicate vowels,
      and may occur above, below, before, after, or around the consonant letter
      they modify.
    </p>
    <p className="measure">क का कि की कु कू के कै को कौ कृ कं कः क्</p>
    <p className="measure">kī = k + ī = क + ी = {'क' + 'ी'}</p>
    <p className="measure">
      Virama is a Sanskrit phonological concept to suppress the inherent vowel
      that otherwise occurs with every consonant letter.
    </p>
    <p className="measure">stha = स +  ् + थ = स्थ</p>
    <p className="measure">tva = त + व = त्व, ṇḍha = ण + ढ = ण्ढ</p>
    <p className="measure">
      र r(a) as a first member takes the form of a curved upward dash above the
      final character or its ā-diacritic. e.g. र्व rva, र्वा rvā, र्स्प rspa,
      र्स्पा rspā. As a final member with ट ṭa, ठ ṭha, ड ḍa, ढ ḍha, ड़ ṛa, छ
      cha, it is two lines together below the character pointed downwards. Thus
      ट्र ṭra, ठ्र ṭhra, ड्र ḍra, ढ्र ḍhra, ड़्र ṛra, छ्र chra. Elsewhere as a
      final member it is a diagonal stroke extending leftwards and down. e.g.
      क्र ग्र भ्र ब्र. त ta is shifted up to make the conjunct त्र tra.
    </p>

    <div className="overflow-auto">
      <table className="f6 w-100 mb4" cellSpacing="0">
        <thead>
          <tr className="stripe-dark">
            <th className="bg-white"></th>
            {Object.keys(languages[0].letters).map((letter) => (
              <th key={letter} className="fw6 tc pa3 bg-white">
                {letter}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="lh-copy">
          {languages.map(({ language, letters }) => (
            <tr key={language} className="stripe-dark">
              <th className="pa3 tl">{language}</th>
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
  </article>
);

export default Diacritic;
