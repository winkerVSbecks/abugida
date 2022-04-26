import Link from 'next/link';

export const Navigation = () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <Link href="/">
      <a className="link dim black b f6 f5-ns dib mr3">Abugida</a>
    </Link>
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <Link href="/family-tree">
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l">
          ABCD Family Tree
        </a>
      </Link>
      <Link href="/evolution">
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l">
          Evolution of Letters
        </a>
      </Link>
      <Link href="/transliteration">
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l">
          Transliteration
        </a>
      </Link>
      <Link href="/diacritic">
        <a className="link dim dark-gray f6 f5-l dib">Diacritic</a>
      </Link>
    </div>
  </nav>
);
