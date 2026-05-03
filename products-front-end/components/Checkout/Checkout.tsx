"use client";
import { checkout } from "@/app/checkout/actions";
import { getStripe } from "@/utils/stripe";
import { Button } from "@mui/material";

const Checkout = ({ productId }: { productId: number }) => {
  const handleCheckout = async () => {
    const session = await checkout(productId);
    console.log("session", session);
    const stripe = await getStripe();
    window.location.href = session?.data.url;
  };

  return (
    <Button
      variant="contained"
      className="max-w-[25%]"
      onClick={handleCheckout}
    >
      Buy now
    </Button>
  );
};

export default Checkout;
