import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
// import HoverBackground from '../components/HoverBackground';
import Clients from '../components/work/clients';

const Work = () => (
  <Layout>
    <Container grid minHeight>
      <div className="panel-left">
        <Clients />
      </div>
      <nav className="panel-right">
        <ul>
          <li>Home</li>
          <li>Test</li>
          <li>Help</li>
        </ul>
      </nav>
      <div className="scrolling">
        <span className="vertical-text">
          <q>
            Just because I do a lot of thinking doesn’t mean I don’t like
            parties and getting into trouble.
          </q>{' '}
          – Stephen Hawking
        </span>
      </div>
    </Container>

    <style jsx>
      {`
        .test {
          height: 9000px;
        }

        .vertical-text {
          font-family: var(--monospace);
          font-size: var(--text-small);
          letter-spacing: 0.5em;
          color: var(--primary-text);
          writing-mode: vertical-lr;
          text-orientation: upright;
          text-transform: uppercase;
          justify-self: center;
          margin-top: 101.5vh;
          display: inline;
          animation: infinite-scroll 60s linear 0s infinite normal none running;
          will-change: transform;
        }

        div.scrolling {
          margin: 0;
          height: 100%;
          width: 2rem;
          display: flex;
          place-content: center;
          white-space: nowrap;
          overflow: hidden;
          border-left: 1px solid #fff;
          position: absolute;
          right: 0;
          backface-visibility: hidden;
        }

        @keyframes infinite-scroll {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(0, -200rem);
          }
        }

        .panel-left {
          grid-column: 1 / 2;
          padding: 2rem 4rem;
          display: flex;
          place-items: center;
        }

        .panel-right {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          border-left: 1px solid #fff;
        }

        .hover-background-wrapper {
        }
        .tilt {
          transform-style: preserve-3d;
          transform: perspective(1000px);
          background: url(static/da-band.jpg) 100%;
        }

        .linker a {
          color: #fff;
          font-size: 5vw;
          font-weight: bold;
          text-decoration: none;
        }

        .clip1 {
          clip-path: url(#absolute_path);
          height: 500px;
          width: 500px;
        }

        .hero-content-wrapper {
          height: 100%;
        }

        .hero-content {
          word-break: break-all;
          text-transform: uppercase;
          /* font-size: 27vh; */
          text-align: justify;
          transition: filter 1s;
          left: 1rem;
          top: -1rem;
          height: 100%;
          z-index: 0;
          color: white;
          text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
            1px 1px 0 #fff;
        }

        .hero-content h1 {
          transform: rotateZ(-90deg);
          width: 99vh;
          height: 100%;
          filter: blur(0px);
          margin: 0;
          font-size: 16vw;
          line-height: 0.6;
          color: var(--background-dark);
        }

        .hero-content h2 {
          margin: 0;
          font-size: 11vw;
          line-height: 0.6;
          color: var(--background-dark);
          display: inline-block;
        }

        .sm_client-list {
          display: flex;
          place-content: flex-end;
        }
      `}
    </style>
  </Layout>
);

export default Work;
