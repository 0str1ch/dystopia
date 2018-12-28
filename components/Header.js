import React, { PureComponent } from 'react';
import Link from 'next/link';
import ActiveLink from './ActiveLink';

export default class Header extends PureComponent {
  constructor() {
    super();

    this.state = {
      navShown: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    const menu = this.menu();
    this.setState({
      navShown: !menu.navShown,
    });
  }

  hideNav() {
    const menu = this.menu();
    this.setState({
      navShown: !menu.false,
    });
  }

  menu() {
    return this.state;
  }

  render() {
    const { navShown } = this.state;
    return (
      <>
        <header>
          <Link href="/">
            <a
              className="logo"
              onFocus={this.toggleNav}
              role="presentation"
              onMouseEnter={this.toggleNav}
              onMouseLeave={this.toggleNav}
              onClick={this.hideNav}
            >
              Jeremy Smith{' '}
              <span className="not-my-name">
                designs and develops interactive experiences
              </span>
            </a>
          </Link>
        </header>

        <nav className="header__mobile-nav container">
          <ActiveLink href="/info">Info</ActiveLink>
          <ActiveLink href="/work">Work</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
        </nav>

        <style jsx global>
          {`
            header {
              position: absolute;
              top: 0;
              background-color: transparent;
              width: 100%;
              padding: 2rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              z-index: 10;
            }

            .desktop-nav {
              position: fixed;
              bottom: 0;
              right: 1rem;
              line-height: 2.3rem;
              transform: rotate(90deg);
              transform-origin: 100%;
              height: auto;
              width: 100%;
              display: flex;
              place-content: flex-end;
              /* padding: 1rem; */
              z-index: 1;
            }

            a.logo:hover .not-my-name {
              text-decoration: line-through var(--primary-hue);
              color: var(--hint-light);
            }

            .header-toggle:focus,
            .header__mobile-toggle:focus,
            .nav-button:focus {
              outline: 0;
            }

            .logo {
              display: block;
              position: relative;
              z-index: 100;
              width: 25rem;
              font-weight: bold;
              font-style: normal;
              font-family: var(--monospace);
              font-stretch: normal;
              font-size: var(--logo);
              color: var(--primary-text);
              margin: 0;
              text-decoration: none;
            }

            .logo span,
            .logo a {
              margin: 0;
            }
            .header__right {
              display: flex;
              align-items: center;
            }
            .header__right {
              margin-left: 24px;
            }

            .menu-nav-link {
              position: relative;
              color: var(--primary-text);
              display: flex;
              height: auto;
              width: 100%;
            }
            @media (max-width: 900px) {
              .container {
                padding: 0;
              }
            }

            .header__mobile-toggle {
              display: flex;
              padding: 1rem;
              place-self: flex-end;
            }
            .header__mobile-toggle svg {
              width: 2em;
            }
            body {
              ${navShown ? 'overflow-y: hidden;' : 'overflow-y: visible;'}
            }

            .header__mobile-nav {
              display: flex;
              transform: translateX(${navShown ? '100%)' : '-100%'});
              opacity: ${navShown ? '1' : '0'};
              width: 50%;
              height: 100%;
              top: 0;
              right: 0;
              flex-direction: column;
              align-items: center;
              position: fixed;
              margin-bottom: 3em;
              background: var(--primary-hue);
              z-index: ${navShown ? '10' : '-1'};
              overflow: hidden;
              transition: opacity 0.3s var(--ease-in-cubic);
            }
            .header__mobile-nav :global(a) {
              height: 3em;
              width: 100%;
              margin-bottom: 1em;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              color: var(--primary-text);
            }
            .header__mobile-nav :global(a):not(:last-child) {
              margin-right: 0;
            }
            .header__mobile-nav :global(a):last-of-type {
              margin-bottom: 0;
            }
          `}
        </style>
      </>
    );
  }
}
