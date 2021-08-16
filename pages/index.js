import { Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import ProductItem from '../components/Product-items/ProdcutItem';
import data from '../utils/data';
import useStyles from '../utils/styles';

export default function Home() {
  const styles = useStyles();
  return (
    <Layout>
      <Typography variant="h2">Products</Typography>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={product.name}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
