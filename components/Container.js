export default ({
  grid,
  padding,
  small,
  minHeight,
  maxHeight,
  overflow,
  children,
  ...props
}) => (
  <section className="grid-container" {...props}>
    <style jsx>
      {`
        section {
          ${grid ? 'grid-template-columns: 1fr 1fr;' : 'grid: auto;'}
          ${minHeight ? 'min-height: 100vh;' : ''}
          ${maxHeight ? 'max-height: 100vh;' : ''}
          ${small ? 'max-width: 700px;' : ''}
          ${overflow ? 'overflow: hidden;' : ''}
        }
        `}
    </style>
    <style jsx>
      {`
        section {
          width: 100%;
          margin: 0 auto;
          padding: ${padding ? '1rem' : ''};
          display: grid;
          grid-template-rows: 1fr;
        }

        section ~ div {
          padding: 1rem;
        }

        :after {
          content: '';
          display: table;
          clear: both;
        }

        @media screen and (max-width: 960px) {
          section {
            padding: 0;
            display: flex;
            flex-direction: column;
          }
        }

        @media screen and (max-width: 640px) {
          section {
            padding: 0;
          }
        }
      `}
    </style>
    {children}
  </section>
);
