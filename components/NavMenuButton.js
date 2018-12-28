const NavMenuButton = () => (
  <>
    <div className="nav-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          fill="var(--nav-shadow)"
          d="M49.9 53.4c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.6 3.4-3.4 3.4z"
        />
        <path
          className="point-0"
          fill="var(--nav-highlight)"
          d="M49.9 45.2c-2.7 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8-2.1-4.8-4.8-4.8z"
        />
        <path
          fill="var(--nav-shadow)"
          d="M27.8 52.4c-1.3 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1.1 2.4-2.4 2.4z"
        />
        <path
          className="point-1"
          fill="var(--nav-highlight)"
          d="M27.8 45.2c-2.7 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8-2.1-4.8-4.8-4.8z"
        />
        <path
          fill="var(--nav-shadow)"
          d="M71.9 52.4c-1.3 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1.1 2.4-2.4 2.4z"
        />
        <g className="point-2">
          <path
            fill="var(--nav-highlight)"
            d="M71.9 45.2c-2.7 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8-2.1-4.8-4.8-4.8z"
          />
        </g>
      </svg>
    </div>
    <style jsx="true">
      {`
        :root {
          --nav-highlight: var(--primary-light);
          --nav-shadow: var(--hint-light);
        }
        .nav-button svg {
          width: 2.7rem;
          height: 2.7rem;
          fill: var(--light-text);
          transform: rotate(90deg);
          color: #fff;
        }

        .nav-button {
          cursor: pointer;
          color: #fff;
        }

        .nav-button:focus {
          outline: 0;
        }

        .point-1,
        .point-2 {
          -webkit-animation: 2s infinite ease-in-out pointAnimation;
          animation: 2s infinite ease-in-out pointAnimation;
        }
        .point-0 {
          animation: 2s infinite ease-in-out pointAnimation2;
        }

        .point-1 {
          -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
        }
        .point-0 {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }
        .point-2 {
          -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
        }

        @keyframes pointAnimation {
          0% {
            transform: translateY(0);
          }
          10% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-0.8rem);
          }
          50% {
            transform: translateY(0);
          }
          60% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes pointAnimation2 {
          0% {
            transform: translateY(0);
          }
          10% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-1.2rem);
          }
          50% {
            transform: translateY(0);
          }
          60% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}
    </style>
  </>
);

export default NavMenuButton;
