import Image from '../image';
import clientManifest from '../../client-manifest';

const PortfolioImages = props => (
  <>
    {props.items.clients.map(item => (
      <Image
        src={item.img}
        key={item.name}
        oversize
        width={1830 / 3}
        height={1830 / 3}
      />
    ))}
  </>
);

export default PortfolioImages;
