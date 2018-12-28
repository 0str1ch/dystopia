export default ({
  hero,
  columnFull,
  columnEven,
  columnSidebar,
  rowWide,
  grid,
  center,
  vCenter,
  dark,
  gray,
  wide,
  small,
  overflow,
  minHeight,
  dotBackground,
  children,
  mobileStyle,
  ...props
}) => (
  <section className="grid-container" {...props}>
    <style jsx>
      {`
        section {
          width: 100%;
          margin: 0 auto;
          padding: 0;
          display: grid;
          grid-template-columns: 2rem auto 8rem;
          grid-template-rows: auto 5rem;
          height: 100vh;
          max-height: 100vh;
          max-width: 100%;
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
