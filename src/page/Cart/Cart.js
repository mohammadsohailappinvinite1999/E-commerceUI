import { Toolbar, Typography } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartState } from "../../Features/CartSlice";
import { Box } from "@mui/system";
const Cart = () => {
  const { cart } = useSelector(getCartState);

  return (
    <>
      <Toolbar sx={{ flexGrow: 1 }}>
        <Typography variant="h5">My Cart</Typography>
      </Toolbar>
      {cart.length ? (
        cart.map((el) => {
          return (
            <CartItem
              src={el.imageSrc}
              key={el.id}
              title={el.name}
              price={el.price}
              category={el.category}
              stock={el.stock}
              quantity={el.quantity}
              item={el}
            />
          );
        })
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">No Cart Items...</Typography>
        </Box>
      )}
    </>
  );
};

export default Cart;
