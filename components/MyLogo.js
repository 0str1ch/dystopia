const MyLogo = () => (
  <>
    <svg
      className="js-fox-logo"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fox-body"
        d="m12.53 68.26a17.77 17.77 0 0 0 9.32.48 47.33 47.33 0 0 0 15-5.7 4 4 0 0 0 1.93-2.91c.61-4.38 1.71-15.22-1.53-19.7a13.68 13.68 0 0 0 -8.79-5.38 27 27 0 0 1 -8.11-2.53.59.59 0 0 1 .27-1.11 53.46 53.46 0 0 1 9.3.36 17.94 17.94 0 0 1 10.08 4.61 7.48 7.48 0 0 0 .2-3.38.4.4 0 0 1 .64-.39 11.41 11.41 0 0 1 3.66 5.2 23.5 23.5 0 0 1 1.19 7.37 7.6 7.6 0 0 0 1.6-1.88.47.47 0 0 1 .86.12 18.4 18.4 0 0 1 .36 1.81 29.67 29.67 0 0 1 0 4 33.42 33.42 0 0 1 -1.21 7.15s9.84-12.46 4.9-25.49-16.44-20-16.44-20-2.94-4.93-4.64-4.93-1.83 9.74-1.83 9.75c.06.77-1.75 2.34-2.22 2.92a31.12 31.12 0 0 1 -3.52 3.65c-2.94 2.61-6.28 4.24-9.74 6-.37.19-.79.43-.89.84a1.44 1.44 0 0 0 .21 1c2.69 5 10.37 6.6 15.49 6.78.34 0-.1 1.91-.13 2-.77 2.34-2.72 4-4.51 5.54-4.28 3.69-9.38 6.56-13.09 10.92a12.84 12.84 0 0 0 -2.74 4.86 6.73 6.73 0 0 0 .72 5.41 7.12 7.12 0 0 0 3.66 2.63zm15.13-43.52c1.11 0 1 .29 1 .88s.07 1.27-1 1.27-2-.48-2-1.07.9-1.08 2-1.08z"
      />
      <path
        className="foxtail"
        d="m76.9 75.3c0-9-6.87-15.83-15.81-16.18a22.41 22.41 0 0 0 -4.25.24c-5.86.9-11.09 3.91-16.17 6.79-5.25 3-10.43 5.67-16.37 7-5.4 1.21-11.3 1.61-15.73-2.26a13.44 13.44 0 0 1 -1.82-2c-.26-.35-.78-1.52-1.37-1.4-.4.09-.28 1.23-.24 1.76.52 7.73 3.47 15.89 10.49 20a22.06 22.06 0 0 0 12.61 2.75c8.57-.64 16.54-5.34 24.63-7.89 4.35-1.36 8.87-2.56 13.4-1.3 4.68 1.31 4.85 4.85 4.33 7.3a.67.67 0 0 0 1.15.59c5.62-6.3 5.15-15.4 5.15-15.4zm-14.59-5.3a25.75 25.75 0 0 0 -7.36.76 48.3 48.3 0 0 0 -7.13 2.42c-2.36 1-4.7 2.07-7.15 3a46.45 46.45 0 0 1 6.47-4.37 30.54 30.54 0 0 1 7.34-3 20.53 20.53 0 0 1 8-.37 14.23 14.23 0 0 1 7.16 3.31 21.18 21.18 0 0 0 -7.33-1.75z"
      />
    </svg>
    <style jsx="true">
      {`
        .js-fox-logo {
          fill: #fff;
          position: relative;
          height: auto;
          width: 3rem;
          transition: fill 100ms ease-in;
        }

        .js-fox-logo .foxtail {
          transform-origin: 0 70%;
        }

        .js-fox-logo:hover .foxtail {
          animation: tail-wag 560ms ease-in-out;
        }

        @keyframes tail-wag {
          0%,
          100% {
            transform: rotate(0);
          }
          20%,
          60% {
            transform: rotate(-7deg);
          }
          40%,
          80% {
            transform: rotate(1deg);
          }
        }

        @media (max-width: 500px) {
          .js-fox-logo:hover .foxtail {
            animation: none;
          }
          .js-fox-logo .foxtail {
            animation: tail-wag 560ms ease-in-out 0.5s;
          }
        }
      `}
    </style>
  </>
);

export default MyLogo;
