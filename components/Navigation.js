import Link from 'next/link';

export const Navigation = () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <Link href="/">
      <a className="link dim black b f6 f5-ns dib mr3">Abugida</a>
    </Link>
    {/* <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
      <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name">
    </a> */}
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <Link href="/transliteration">
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l">
          Transliteration
        </a>
      </Link>
      <Link href="/family-tree">
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l">
          ABCD Family Tree
        </a>
      </Link>
      <a className="link dim dark-gray f6 f5-l dib" href="#" title="Contact">
        Contact
      </a>
    </div>
  </nav>
);
