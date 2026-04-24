const SingleProductPage = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1>Product ID: {params.productId}</h1>
      {/* You can fetch and display product details here using the productId */}
    </div>
  );
};
