import { Alert, Card, CardMedia, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomBrownButton } from "./Customs/CustomButton";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Features/CartSlice";

const LatestCard = ({ src, title, price, item, contain }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const addtoCartHandler = () => {
    dispatch(addtoCart({ ...item, quantity: 1 }));
    setOpen(true);
  };

  const handleClose = () => {
    // console.log("rane");
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Added to Cart
        </Alert>
      </Snackbar>

      <Card sx={{ boxShadow: "none" }} raised={false}>
        <CardMedia
          component="img"
          height="194"
          image={src}
          style={{ objectFit: contain ? "contain" : "none" }}
          alt="image1"
        />
        <div style={{ margin: "1rem 0" }} className="c_wrapper">
          <div className="avt_wrapper">
            <div>
              <Typography paragraph variant="h5">
                {title}
              </Typography>
              <Typography paragraph variant="p">
                {price} Rs
              </Typography>
            </div>
          </div>
          <CustomBrownButton onClick={addtoCartHandler} variant="contained">
            Add To Cart
          </CustomBrownButton>
        </div>
      </Card>
    </>
  );
};

export default LatestCard;
