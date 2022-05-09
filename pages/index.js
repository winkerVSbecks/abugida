import Image from 'next/image';
import { BrahmicVowels } from '../components/BrahmicVowels';
import { Varun } from '../components/Varun';

const Home = () => (
  <article className="cf ph3 ph5-ns pv5">
    <header className="fn fl-ns w-50-ns pr4-ns">
      <h1 className="mb3 mt0 lh-title">Abugia</h1>
      <p className="f6 ttu tracked gray">Varun Vachhar</p>
      <ul className="lh-copy measure pl0">
        <li>Writing system + vowels & consonants</li>
        <li>Types of writing systems</li>
        <li>ABCD Family Tree</li>
        <li>
          Evolution of Letters
          <ul>
            <li>Evolution of Roman alphabet</li>
            <li>Evolution of Cyrillic alphabet</li>
            <li>Evolution of Devanagari</li>
          </ul>
        </li>
        <li>Diacritic</li>
        <li>Transliteration</li>
      </ul>
    </header>
    <div className="fn fl-ns w-50-ns">
      <p className="lh-copy measure-wide mt4 mt0-ns">
        I'm a Punjabi from Delhi. That means I can speak Punjabi (the language)
        but not read or write it. In 2021 I decided to learn how to read
        Punjabi. Along the way, I discovered a fascinating link between scripts
        used worldwide. Did you know that every alphabet used today evolved from
        Egyptian Hieroglyphics?
      </p>
      <p className="lh-copy measure-wide">
        This essay delves into the world of writing systems. We'll explore the
        family tree of scripts. Some systems use full letters, others don't
        write vowels, and Abugidas use partial characters to indicate vowel
        sounds. You'll even learn to convert text from one script to another by
        swapping symbols.
      </p>
      <hr className="measure-wide bt b--black-10 ml0 mt4 mb5" />
      <p className="lh-copy measure-wide">
        In 1947 Punjab was split between India and Pakistan, displacing millions
        of people. My family was amongst them. My grandparents migrated from
        Western Punjab to Delhi, where I was born and raised. Growing up in
        Delhi meant that I learned to speak Punjabi but not read or write it.
      </p>
      <p className="lh-copy measure-wide">
        India is one of the most linguistically diverse countries, with hundreds
        of languages and dozens of scripts. Plus, thanks to colonialism, English
        is one of the country's official languages. This is why most of my
        education was in English. The second language you learn at school
        depends on what part of the country you live in. For me, that was Hindi.
      </p>
      <p className="lh-copy measure-wide">
        Growing up, I mostly conversed in Hindi and learned to read and write it
        at school. Punjabi I picked up at home. Learning a new script in my
        30's, was a daunting task. Punjabi uses Gurmukhi. Here it is next to the
        Hindi alphabet (Devanagari).
      </p>
      <p className="lh-copy measure-wide tc">
        <Image
          src="/gurmukhi-devanagari.png"
          alt="Gurmukhi vs Devanagari"
          width={257}
          height={287}
          layout="intrinsic"
        />
      </p>
      <p className="lh-copy measure-wide">
        They're not exactly worlds apart. Some letters even look the same. It's
        kind of like learning the Cyrillic alphabet as an English speaker.
      </p>
      <p className="lh-copy measure-wide">
        The English alphabet has 26 letters (5 vowels and 21 consonants). Hindi
        uses 14 vowels and 33 consonants. What's more, vowels in Hindi are often
        written as symbols representing half letters. Turns out Punjabi does the
        same! The more time I spent with it, the more I realized that the two
        scripts map onto each other almost perfectly.
      </p>
      <div className="lh-copy measure-wide mb3">
        <BrahmicVowels include={['Devanagari', 'Gurmukhi']} />
      </div>
      <div className="lh-copy measure-wide">
        <Varun />
      </div>

      {/* <p className="lh-copy measure mt4 mt0-ns">
          An essay on writing systems. How symbols are used to capture language
          sounds
        </p>
        <p className="lh-copy measure">
          My background is Punjabi and I grew up in a Hindi speaking part of
          India. As a result I understand Punjabi but, can't read or write it.
          So, this year I decided to learn to read Punjabi.
        </p>
        <p className="lh-copy measure">
          Now, I expected this to be difficult. This script is called Gurmukhi.
          It simultaneously looks widely different but also familiar to
          Devanagari (the Hindi script).
        </p>
        <p className="lh-copy measure">
          The more time I spent with it, the more I realized that the letters
          for both scripts map onto each other, almost perfectly. Vowels in
          Hindi are often written as symbols representing half letters. Well,
          Punjabi does the same!
        </p>
        <p className="lh-copy measure">
          I found this fascinating so, dug into this more. Turns out that most
          South and South East Asian scripts are derived from the Brahmi script.
          There is essentially a lookup table between all these scripts.
        </p>
        <p className="lh-copy measure">
          The breadth is amazing. Tibetan & Lepcha in the North. Hindi, Punjabi,
          Gurjrati, etc. in the centre. Assamese and Bengali in the east.
          Dravidian languages like Tamil & Telugu in the south. Even as far east
          as Khmer, Burmese and Thai.
        </p>
        <p className="lh-copy measure">
          Finally, here's my name in Hindi, Punjabi and Thai. Ok, so I'm not
          totally sure how accurate the Thai version is. But, it's cool that I
          can do that 😬
        </p>
        <p className="lh-copy measure f3">वरुन → ਵਰੁਨ → วรุน</p> */}
    </div>
  </article>
);

export default Home;
