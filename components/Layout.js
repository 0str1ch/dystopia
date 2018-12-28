import Head from 'next/head';
import Header from './Header';
import withPure from './hoc';

export default withPure(({ title, description, children }) => (
  <main className="screen">
    <Header />
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <title>{title || 'Jeremy Smith'}</title>
      <meta
        name="description"
        content={
          description || 'Jeremy Smith is a product designer and web developer.'
        }
      />
    </Head>
    <div className="screen-render">{children}</div>
    <style jsx global>
      {`
        body {
          position: relative;
        }

        .screen {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0;
          position: relative;
          overflow-scrolling: touch;
          background: var(--background-dark);
        }

        .screen:after {
          content: '';
          height: 1px;
          width: 100%;
          background: #fff;
          bottom: 2rem;
          z-index: 10;
          position: absolute;
        }

        .screen:before {
          content: '';
          height: 1px;
          width: 100%;
          background: #fff;
          top: 2rem;
          z-index: 10;
          position: absolute;
        }

        .screen-render:before {
          content: '';
          height: 100%;
          width: 1px;
          background: #fff;
          left: 2rem;
          z-index: 10;
          position: absolute;
        }

        .screen-render {
          align-items: stretch;
          display: flex;
          flex-direction: row;
          width: 100%;
          margin: auto;
          overflow: visible;
        }

        @keyframes fadeup {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        /** Web Fonts START **/
        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Regular_Italic.woff2')
            format('woff2');
          font-weight: normal;
          font-style: italic;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Medium_Italic.woff2')
            format('woff2');
          font-weight: normal;
          font-style: italic;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Bold.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Bold_Italic.woff2')
            format('woff2');
          font-weight: 700;
          font-style: italic;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Medium.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Black.woff2') format('woff2');
          font-weight: 900;
          font-style: normal;
        }

        @font-face {
          font-family: 'MaisonNeue-Mono';
          font-display: swap;
          src: url('/static/fonts/MaisonNeue-Mono.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        /** END Web Fonts **/

        * {
          -ms-font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'alt' 1;
          -webkit-font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1;
          font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1;
          -webkit-font-kerning: normal;
          -moz-font-kerning: normal;
          font-kerning: normal;
          -webkit-font-variant-ligatures: common-ligatures contextual;
          font-variant-ligatures: common-ligatures contextual;
        }

        @media (min-width: 30em) {
          :root {
            font-size: calc(1rem + ((1vw - 0.6em) * 0.5556));
          }
        }
        @media (min-width: 120em) {
          :root {
            font-size: 1.2em;
          }
        }

        :root {
          /*font-size: calc(1vw + 1vh + .5vmin);*/
          /** Typography Sizes**/
          --big-text: 5.333vw;
          --h1-xl: 3.157em;
          --h2-large: 2.369em;
          --h3-medium: 1.777em;
          --h4-small: 1.333em;
          --text-large: ;
          --text-normal: 1em;
          --text-small: 0.85em;
          /** Font Family Variables**/
          --monospace: MaisonNeue-Mono, monospace;
        }

        body {
          font-weight: 400;
          color: var(--secondary-text);
        }

        p {
          margin-bottom: 1.3em;
          color: var(--primary-text);
          font-size: 1em;
        }

        h1,
        h2,
        h3,
        h4 {
          margin: 1.414rem 0 0.5rem;
          line-height: 1.2;
        }

        h1 {
          margin-top: 0;
          font-size: var(--h1-xl);
          font-weight: 900;
          color: var(--primary-text);
        }

        h2 {
          font-size: var(--h2-large);
          font-weight: 900;
          color: var(--primary-text);
        }

        h3 {
          font-size: var(--h3-medium);
          font-weight: 700;
          color: var(--primary-text);
        }

        h4 {
          font-size: var(--h4-small);
          color: var(--primary-text);
        }

        small,
        .font_small {
          font-size: var(--text-small);
        }

        strong {
          font-family: 'Untitled Sans';
          font-weight: 500;
        }

        em {
          font-family: 'Untitled Sans';
          font-style: italic;
        }

        a {
          color: inherit;
        }

        h1:last-child,
        h1:only-child,
        h2:last-child,
        h2:only-child,
        h4:last-child,
        h4:only-child,
        h6:last-child,
        h6:only-child,
        p:last-child,
        p:only-child {
          margin-bottom: 0;
        }

        code,
        pre {
          font-family: MaisonNeue-Mono, monospace;
        }

        code:before,
        code:after {
          content: '\`';
        }
        pre code:before,
        pre code:after {
          content: none;
        }

        p > code,
        li > code,
        dd > code,
        td > code {
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
          font-size: 85%;
          margin: 0 0.3em;
          padding: 0.2em 0;
          overflow-wrap: break-word;
          word-wrap: break-word;
          font-family: MaisonNeue-Mono, monospace;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: #f8f8f2;
          background: none;
          text-shadow: 0 1px rgba(0, 0, 0, 0.3);
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 0.5em 0;
          overflow: auto;
          border-radius: 0.3em;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #272822;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          border-radius: 0.3em;
          white-space: normal;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #f8f8f2;
        }

        .namespace {
          opacity: 0.7;
        }

        .token.property,
        .token.tag,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: #f92672;
        }

        .token.boolean,
        .token.number {
          color: #ae81ff;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #a6e22e;
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string,
        .token.variable {
          color: #f8f8f2;
        }

        .token.atrule,
        .token.attr-value,
        .token.function,
        .token.class-name {
          color: #e6db74;
        }

        .token.keyword {
          color: #66d9ef;
        }

        .token.regex,
        .token.important {
          color: #fd971f;
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }

        .token.entity {
          cursor: help;
        }

        blockquote {
          display: block;
          padding: 1.25em 0;
          margin-bottom: 1.5em;
          width: 100%;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:after,
        blockquote:before,
        q:after,
        q:before {
          content: '';
          content: none;
        }

        blockquote.left-pull {
          margin-left: -40%;
        }

        @media only screen and (max-width: 36em) {
          blockquote.left-pull {
            margin-left: 0;
          }
        }

        blockquote.right-pull {
          width: 130%;
          margin-left: 15%;
        }

        @media only screen and (max-width: 36em) {
          blockquote.right-pull {
            width: 100%;
            margin-left: 0;
          }
        }

        blockquote .video {
          margin-bottom: 1.5em;
        }

        blockquote p {
          font-size: var(--h3-medium);
          color: var(--hue-1);
          line-height: 1.2;
        }

        blockquote p:first-of-type:before {
          content: '';
        }

        blockquote p:last-of-type:after {
          content: '';
        }

        blockquote span {
          display: block;
          text-align: right;
        }

        .quote-position,
        .quote-source {
          color: #000;
          opacity: 0.5;
        }

        .quote-source {
          font-family: NeueHaasBold, Helvetica, sans-serif;
          font-size: 1.5em;
          padding-bottom: 0.25em;
          margin-top: -1em;
        }

        .quote-source:before {
          content: '';
        }

        .quote-position {
          font-family: AndaleMono, monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-right: -0.15em;
          font-size: 0.75em;
          font-weight: 700;
        }

        .quote-position + .quote-position {
          margin-top: 0.5em;
        }

        .col-2 {
          display: grid;
          grid-gap: 2rem;
          grid-template-columns: 1fr 1fr;
        }

        /** Glitch Inverse Img Class */
        .glitch {
          filter: saturate(0) contrast(20) invert(100%);
          image-rendering: pixelated;
        }
        .glitch:hover {
          filter: none;
          image-rendering: default;
        }
      `}
    </style>
  </main>
));
