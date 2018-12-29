import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
// import HoverBackground from '../components/HoverBackground';
import Clients from '../components/work/clients';
import clientManifest from '../client-manifest';

import PortfolioImages from '../components/work/portfolio-images';

const Work = () => (
  <Layout>
    <Container grid minHeight maxHeight overflow>
      <div className="panel-left">
        <Clients />
        <div className="panel-bottom">
          <h4>Hello.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quae
            dolore repudiandae perferendis! Incidunt ad aliquam officiis velit
            doloremque vero qui nesciunt? Totam, dignissimos officia veniam
            accusamus voluptatibus quia eaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            dignissimos sunt perferendis nesciunt corrupti dolor, sed voluptate
            quo nam. Voluptate, expedita! Nihil animi qui nisi cum, voluptas
            ipsa accusantium officia.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            possimus porro unde natus placeat eos inventore consequatur nemo
            omnis numquam, explicabo facilis laudantium molestiae perferendis
            asperiores hic, ducimus eligendi quas!
          </p>
        </div>
      </div>
      <div className="panel-right">
        <PortfolioImages items={clientManifest} />
      </div>

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

    <style jsx global>
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
          background: var(--background-dark);
          z-index: 10;
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
          display: flex;
          flex-direction: column;
          place-items: center;
          min-height: 102vh;
          overflow: scroll;
          position: relative;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          overflow: -moz-scrollbars-none;
        }

        .panel-left::-webkit-scrollbar,
        .panel-right::-webkit-scrollbar {
          width: 0px; /* remove scrollbar space */
          background: transparent; /* optional: just make scrollbar invisible */
        }

        .panel-right {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          border-left: 1px solid #fff;
          padding: 0 2rem;
          margin-right: 2rem;
          background: var(--x-background);
          background-attachment: fixed;
          min-height: 100vh;
          overflow: scroll;
          position: relative;
          display: flex;
          flex-direction: column;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          overflow: -moz-scrollbars-none;
          scroll-snap-type: y proximity;
        }

        .panel-right figure {
          scroll-snap-align: center;
        }

        .panel-bottom {
          border-top: 1px solid #fff;
          padding: 2rem;
          top: 8rem;
          display: flex;
          flex-direction: column;
          position: sticky;
          min-height: calc(100vh - 8rem);
          background: var(--background-dark);
          transition: transform var(--ease-in-cubic) 0.2s;
        }

        .panel-bottom:hover {
          transform: translate3d(0, -1rem, 0);
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
