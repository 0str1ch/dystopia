import Image from '../image';

const PortfolioImages = props => (
  <>
    {props.items.clients.map(item => (
      <Image
        lazy
        src={item.img}
        key={item.name}
        oversize
        width={1830 / 3}
        height={1830 / 3}
        caption={item.description}
      />
    ))}
  </>
);

export default PortfolioImages;
