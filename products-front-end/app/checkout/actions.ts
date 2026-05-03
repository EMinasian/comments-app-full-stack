"use server";

import { post } from "@/utils/customFetch";

const checkout = async (productId: number) => {
  return post({ path: "/checkout/session", payload: { productId } });
};

export { checkout };
