import { Card, Typography } from "@mui/material";
import { ProductType } from "@/types/prodcuts";

const Product = ({ product }: { product: ProductType }) => {
  const { name, description, price } = product;
  return (
    <Card className="p-4">
      <Typography variant="h4">{name}</Typography>
      <Typography>{description}</Typography>
      <Typography>$ {price}</Typography>
    </Card>
  );
};

export default Product;
