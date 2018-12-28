import { withRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({ children, router, href }) => (
  <Link href={href} prefetch>
    <a className="nav-button">
      {children}
      <style jsx>
        {`
          a {
            font-size: var(--text-small);
            text-decoration: none;
            color: var(--primary-text);
            z-index: 1000;
          }

          .nav-button {
            text-align: left;
            font-size: var(--h4-small);
            line-height: normal;
            font-weight: 900;
            padding: 0.2em 0.8em;
            cursor: pointer;
            position: relative;
            place-content: center;
            place-self: flex-start;
            color: ${router.pathname === href
              ? 'var(--hue-primary)'
              : 'var(--hue-1)'};
          }

          .nav-button:hover {
            color: ${router.pathname === href ? 'var(--hue-1)' : '#fff'};
          }
        `}
      </style>
    </a>
  </Link>
);

export default withRouter(ActiveLink);
