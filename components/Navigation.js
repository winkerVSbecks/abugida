import Link from 'next/link';

export const Navigation = () => (
  <nav className="pa3 pa4-ns">
    <Link href="/">
      <a className="link dim black b f6 f5-ns dib mr3">Abugida</a>
    </Link>
    <Link href="/family-tree">
      <a className="link dim gray f6 f5-ns dib mr3">ABCD Family Tree</a>
    </Link>
    <Link href="/evolution">
      <a className="link dim gray f6 f5-ns dib mr3">Evolution of Letters</a>
    </Link>
    <Link href="/transliteration">
      <a className="link dim gray f6 f5-ns dib mr3">Transliteration</a>
    </Link>
    <Link href="/diacritic">
      <a className="link dim gray f6 f5-ns dib">Diacritic</a>
    </Link>
  </nav>
);
