"use server";

import { get } from "@/utils/customFetch";
import type { ProductType } from "@/types/prodcuts";

const getProduct = async (productId: string) => {
  return await get<ProductType>({ path: `/products/${productId}` });
};

export { getProduct };
