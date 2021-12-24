import {
  Box,
  Divider,
  Grid,
  Card,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";
import React from "react";
import {
  CustomBrownButton,
  CustomRedButton,
} from "../../Components/Customs/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { editQuantity, removefromCart } from "../../Features/CartSlice";

const CartItem = ({ src, title, price, category, stock, quantity, item }) => {
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    dispatch(
      editQuantity({
        ...item,
        quantity: quantity - 1,
        stock: stock + 1,
      })
    );
  };
  const increaseQuantity = () => {
    dispatch(
      editQuantity({
        ...item,
        quantity: quantity + 1,
        stock: stock - 1,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(removefromCart(item.id));
  };

  return (
    <>
      <Box sx={{ width: "100%", paddingX: "30px", marginY: "30px" }}>
        <Grid container spacing={2} sx={{ marginY: "30px" }}>
          <Grid item md={3}>
            <Card sx={{ boxShadow: "none" }}>
              <CardMedia component="img" src={src} height="160" alt={title} />
              <CardActions sx={{ justifyContent: "center" }}>
                <CustomBrownButton
                  sx={{
                    borderRadius: "50%",
                    minWidth: "25px",
                    height: "25px",
                    marginX: "8px",
                  }}
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                >
                  <RemoveIcon fontSize="small" />
                </CustomBrownButton>
                <Typography variant="p" align="center">
                  {quantity}
                </Typography>
                <CustomBrownButton
                  sx={{
                    borderRadius: "50%",
                    minWidth: "25px",
                    height: "25px",
                    marginX: "8px",
                  }}
                  disabled={!stock}
                  onClick={increaseQuantity}
                >
                  <AddIcon fontSize="small" />
                </CustomBrownButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={9} sm={12}>
            <div className="cart_info">
              <Typography variant="h5">{title}</Typography>
              <Typography color="#66180d" variant="h4">
                {quantity * price} Rs
              </Typography>
            </div>
            <div style={{ marginTop: "1rem" }} className="cart_info">
              <Typography
                sx={{ fontSize: "1rem" }}
                color="#848484"
                variant="caption"
              >
                {category}
              </Typography>
              <Typography
                sx={{ fontSize: "1rem" }}
                className=""
                color="#848484"
                variant="caption"
              >
                {stock} in stock
              </Typography>
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
              className="cart_info"
            >
              <CustomRedButton onClick={removeItemHandler}>
                Remove
              </CustomRedButton>
            </div>
          </Grid>
        </Grid>
        <Divider />
      </Box>
    </>
  );
};

export default CartItem;
