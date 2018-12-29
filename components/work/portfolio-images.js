import Image from '../image';

const PortfolioImages = props => (
  <>
    {props.items.clients.map(item => (
      <Image
        lazy
        src={item.img}
        key={item.name}
        width={1840 / 3}
        height={1840 / 3}
        caption={item.description}
      />
    ))}
  </>
);

export default PortfolioImages;
