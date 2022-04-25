import Image from 'next/image';
import { ScriptTypes } from './ScriptTypes';

export const ABCDFamilyTree = () => (
  <article className="cf ph3 ph5-ns pv5">
    <header className="fn fl-ns w-50-ns pr4-ns">
      <h1 className="mb3 mt0 lh-title">The ABCD Family Tree</h1>
      <p className="measure lh-copy gray">
        A writing system is a method of visually representing verbal
        communication, based on a script and a set of rules regulating its use.
      </p>
      <p className="measure lh-copy gray">
        There are a huge variety of systems in use all over the world. The
        infographic below (
        <a
          className="gray"
          href="https://starkeycomics.com/2018/12/11/the-abcd-family-tree/"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Starkey Comics
        </a>
        ) shows how 57 different scripts are descended from ancient Egyptian
        hieroglyphs.
      </p>
      <p className="measure lh-copy mb0">
        <Image
          src="/abcd-family-tree.jpg"
          alt="ABCD Family tree"
          layout="responsive"
          width={1024}
          height={948}
        />
      </p>
    </header>
    <ScriptTypes />
  </article>
);

export default ABCDFamilyTree;
