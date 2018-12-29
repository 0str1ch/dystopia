import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Clients from '../components/work/clients';
import ScrollText from '../components/scroll-text';

const Home = () => (
  <Layout>
    <Container grid minHeight maxHeight overflow>
      <div className="panel-left">
        <Clients />
      </div>

      <ScrollText />
    </Container>

    <style jsx global>
      {`
        .test {
          height: 9000px;
        }

        .panel-left {
          grid-column: 1 / 2;
          display: flex;
          height: 100%;
          flex-direction: column;
          place-items: center;
          place-content: center;
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
          /*border-left: 1px solid #fff;*/
          padding: 0 2rem;
          margin-right: 2rem;
          /*background: var(--x-background);
          background-attachment: fixed;*/
          min-height: 102vh;
          overflow: scroll;
          position: relative;
          display: flex;
          flex-direction: column;
          place-items: flex-end;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          overflow: -moz-scrollbars-none;
          scroll-snap-type: y proximity;
        }

        .panel-right figure:first-of-type {
          padding-top: 10vh;
        }

        .panel-right figure:last-of-type {
          padding-bottom: 10vh;
        }

        .panel-right figure {
          padding-top: 0;
        }

        .panel-right:before {
          content: '';
          position: fixed;
          display: block;
          height: 100%;
          width: calc(50% - 2rem);
          /* margin-right: 2rem; */
          top: 0;
          right: 2rem;
          overflow: hidden;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 0) 9%,
            rgba(0, 0, 0, 0) 100%
          );
          background-size: 100% 165%;
          background-position: top;
          z-index: 100;
        }

        .panel-right figure {
          scroll-snap-align: center;
        }

        .panel-bottom {
          /*border-top: 1px solid #fff;*/
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

export default Home;
