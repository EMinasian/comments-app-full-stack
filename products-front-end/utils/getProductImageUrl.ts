const getProductImageUrl = (productId: string): string => {
  return `${process.env.API_URL}/images/products/${productId}.png`;
};

export default getProductImageUrl;
