import Image from "next/image";
import { Card, Stack, Typography } from "@mui/material";
import { ProductType } from "@/types/prodcuts";
import getProductImageUrl from "@/utils/getProductImageUrl";

const Product = ({ product }: { product: ProductType }) => {
  const { name, description, price, imageExists, id } = product;
  const imageUrl = getProductImageUrl(String(id));

  return (
    <Card className="p-4">
      <Stack gap={3}>
        <Typography variant="h4">{name}</Typography>
        {imageExists && (
          <Image
            src={imageUrl}
            width={0}
            height={0}
            className="w-full h-auto"
            sizes="100vhw"
            alt={`product-image-${id}`}
          />
        )}
        <Typography>{description}</Typography>
        <Typography>$ {price}</Typography>
      </Stack>
    </Card>
  );
};

export default Product;
