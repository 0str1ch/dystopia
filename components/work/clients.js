import clientManifest from '../../client-manifest';
import ClientList from './client-list';

const Clients = () => (
  <article className="projects">
    <div className="clientListWrapper">
      <ClientList items={clientManifest} />
    </div>
    <style jsx>
      {`
        article {
          display: flex;
          place-content: center;
          place-items: center;
          width: 100%;
          min-height: calc(100vh - 3rem);
          position: sticky;
          top: 0;
          padding: 6rem 4rem;
        }
        .clientListWrapper {
          display: flex;
          flex-direction: column;
          place-content: flex-end;
          width: 100%;
          text-align: inherit;
        }
      `}
    </style>
  </article>
);

export default Clients;
