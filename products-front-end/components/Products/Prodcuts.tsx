import { Grid } from "@mui/material";
import Product from "../Product/Product";
import { getProducts } from "./actions";
import type { ProductType } from "@/types/prodcuts";
import Link from "next/link";

const Products = async () => {
  const products = (await getProducts()) as ProductType[];

  return (
    <Grid container spacing={3}>
      {products.map((product: ProductType) => (
        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={product.id}>
          <Link href={`/products/${product.id}`} className="no-underline">
            <Product product={product} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
