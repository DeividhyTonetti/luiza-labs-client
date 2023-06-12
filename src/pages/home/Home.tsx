import { Grid } from '@mantine/core';
// import ProductCard from '../../components/ProductCard'
import FavoriteProductTable from '../../components/FavoriteProductTable';
import CustomerTable from '../../components/CustomerTable';
import { Box } from '@mantine/core';
import Fields from '../../components/Fields';

const Home = (props: any) => {
  const customerData = [{
    name: 'Deividhy',
    email: 'deividhytonetti@gmail.com',
  }];

  const productData = [{
    title: 'Goiabada',
    price: 'R$ 200,00',
    image: 'qualquer',
    reviewLink: 'htpp:....'
  }];

  return (
    <Grid justify="center" align="flex-start" ml={3} mr={3}>
      <Grid.Col span={12}>
        <Fields
          customers={props.customers || []}
          pageProducts={props.pageProducts || []}
          onAddCustomer={props.onAddCustomer}
          onAddProduct={props.onAddProduct}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Box
          sx={(theme) => ({
            backgroundColor: 'white',
            textAlign: 'center',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
          })}
        >
          <CustomerTable data={props.customers || []} />
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box
          sx={(theme) => ({
            backgroundColor: 'white',
            textAlign: 'center',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
          })}
        >
          <FavoriteProductTable data={productData} />
        </Box>
      </Grid.Col>
    </Grid>
  )
}

export default Home
