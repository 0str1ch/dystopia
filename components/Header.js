import React, { PureComponent } from 'react';
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import MyLogo from './MyLogo';
import NavMenuButton from './NavMenuButton';

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

  menu() {
    return this.state;
  }

  render() {
    const { navShown } = this.state;
    return (
      <>
        <header>
          <Link href="/">
            <a className="logo">
              <span>JS(OS)</span>
            </a>
          </Link>

          <div className="header__right">
            <div
              role="button"
              tabIndex={0}
              className="header-toggle"
              onClick={this.toggleNav}
              onKeyPress={this.toggleNav}
            >
              <NavMenuButton />
            </div>
          </div>
        </header>

        <nav className="header__mobile-nav container">
          <div
            role="button"
            tabIndex={0}
            className="header__mobile-toggle"
            onClick={this.toggleNav}
            onKeyPress={this.toggleNav}
          >
            <NavMenuButton />
          </div>
          <ActiveLink href="/bigtext">Bigtext</ActiveLink>
          <ActiveLink href="/typography">Typography</ActiveLink>
          <ActiveLink href="/work">Work</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
        </nav>

        <style jsx global>
          {`
            header {
              position: absolute;
              height: 2rem;
              top: 0;
              background-color: transparent;
              width: 100%;
              padding-left: 2rem;
              padding-right: 2rem;
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

            a:active {
              text-decoration: none;
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
              font-weight: 500;
              font-style: normal;
              text-shadow: var(--text-outline);
              font-stretch: normal;
              font-size: var(--h3-medium);
              color: var(--background-dark);
              padding-left: 0.333rem;
              margin: 0;
              text-transform: uppercase;
              text-decoration: none;
              line-height: 2rem;
              font-smoothing: antialiased;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              transform: translateZ(0);
            }

            .logo span {
              margin: 0;
              line-height: 5rem;
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
              opacity: ${navShown ? '1' : '0'};
              width: 100%;
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
