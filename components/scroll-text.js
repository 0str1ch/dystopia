/* eslint-disable react/jsx-one-expression-per-line */
const ScrollText = () => (
  <>
    <div className="scrolling">
      <span className="vertical-text">
        <q>
          Just because I do a lot of thinking doesn’t mean I don’t like parties
          and getting into trouble.
        </q>{' '}
        – Stephen Hawking
      </span>
    </div>

    <style jsx global>
      {`
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
      `}
    </style>
  </>
);

export default ScrollText;
