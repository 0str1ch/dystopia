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
          place-content: flex-end;
          width: 100%;
        }
        .clientListWrapper {
          display: flex;
          flex-direction: column;
          place-content: flex-end;
          width: 100%;
          text-align: right;
        }
      `}
    </style>
  </article>
);

export default Clients;
