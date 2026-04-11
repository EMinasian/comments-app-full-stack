"use server";

import { post } from "@/utils/customFetch";

const createPost = async (formData: FormData) => {
  const payload = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
  };

  const res = await post("/products", payload);

  if (res?.errors) {
    return { errors: res.errors };
  }
};

export { createPost };
