// import Featured from '../../components/blog/featured';
import Preview from '../../components/blog/preview';
import { components } from '../../components/blog/post-components';
import Layout from '../../components/Layout';
import Container from '../../components/Container';

function importAll(r) {
  return r.keys().map(r);
}

const previewItems = importAll(
  require.context('../../blog', false, /-preview\.mdx$/)
);

function dateSortDesc(a, b) {
  const date1 = new Date(a.meta.date);
  const date2 = new Date(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

const postCount = 5;

const items = previewItems
  .sort(dateSortDesc)
  .slice(0, postCount)
  .map(({ default: Component, meta }, index) => (
    <Preview key={meta.title} detail={index < 5} prefetch={index < 3} {...meta}>
      <Component components={components} />
    </Preview>
  ));

export default () => (
  <Layout title="Blog - Jeremy Smith">
    <Container wide>{items}</Container>
  </Layout>
);
