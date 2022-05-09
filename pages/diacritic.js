import { BrahmicVowels } from '../components/BrahmicVowels';

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
    <BrahmicVowels />
  </article>
);

export default Diacritic;
