const ClientList = props => (
  <>
    <ul key="clientlist">
      {props.items.clients.map(item => (
        <li key={item.name}>
          <a href={item.url} key={item.name}>
            {item.name}
          </a>

          <style jsx>
            {`
              li {
                line-height: 1.7;
              }
              a {
                font-family: var(--monospace);
                font-size: var(--h3-medium);
                font-weight: bold;
                color: var(--primary-text);
                text-decoration: none;
                padding: 0 0rem;
              }
              a:hover {
                color: var(--primary-text);
              }
              a:active,
              a:focus,
              a:hover {
                text-decoration: none;
                transition: color 150ms ease-in-out;
              }

              a:active,
              a:hover {
                outline: 0;
              }

              a:before {
                right: -0.03em;
                left: auto;
                display: block;
                content: '';
                position: absolute;
                height: 17.5%;
                width: 0%;
                top: 50%;
                -ms-transform: translateY(-30%) translateX(0) skewX(0);
                transform: translateY(-30%) translateX(0) skewX(0);
                background-color: var(--primary-hue, --primary-text, #000);
                z-index: 1;
                opacity: 0.8;
                transition: color 0.5s var(--ease-in-out-cubic),
                  width 0.3s var(--ease-in-out-cubic);
                clip-path: url(/static/stroke1.svg);
              }

              a:hover:before {
                right: auto;
                left: -0.03em;
                width: calc(100% + 0.06em);
              }

              a {
                background-color: transparent;
              }

              a {
                position: relative;
                display: inline-block;
                max-width: -webkit-max-content;
                max-width: -moz-max-content;
                max-width: max-content;
              }
            `}
          </style>
        </li>
      ))}
    </ul>
  </>
);

export default ClientList;
