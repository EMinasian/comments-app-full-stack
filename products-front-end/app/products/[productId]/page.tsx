import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { getProduct } from "./actions";
import type { ProductType } from "@/types/prodcuts";
import getProductImageUrl from "@/utils/getProductImageUrl";
import Checkout from "@/components/Checkout";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const product = (await getProduct(productId)) as ProductType;

  return (
    <Stack gap={4} marginBottom={"2rem"}>
      <Typography variant="h2">{product.name}</Typography>
      {product.imageExists && (
        <Image
          src={getProductImageUrl(String(productId))}
          width={0}
          height={0}
          className="w-auto md:w-1/2 h-auto"
          sizes="100vhw"
          alt={`product-image-${productId}`}
        />
      )}
      <Typography>{product.description}</Typography>
      <Typography variant="h4">$ {product.price}</Typography>
      <Checkout productId={Number(productId)} />
    </Stack>
  );
};

export default SingleProductPage;
