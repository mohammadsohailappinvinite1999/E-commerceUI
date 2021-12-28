import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategories,
  fetchAllProducts,
  fetchProductbyCategory,
  getWardrobeState,
} from "../../Features/WardrobeSlice";
import { styled } from "@mui/material/styles";
import { Breadcrumbs, Chip, Grid, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import LatestCard from "../../Components/LatestCard";
import CustomSkeleton from "../../Components/CustomSkeleton";
import { Link } from "react-router-dom";

const CustomChip = styled(Chip)(({ active }) => {
  return {
    backgroundColor: active ? "#66180d" : "#fff",
    color: active ? "#fff" : "#000",
    "&:hover": {
      backgroundColor: "#66180d !important",
      color: "#fff",
    },
  };
});

const Wardrobe = () => {
  const { products, loading, categories } = useSelector(getWardrobeState);
  const dispatch = useDispatch();
  // console.log(wardrobeState);

  const [category, setCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, []);

  useEffect(() => {
    if (category === "All") return;
    dispatch(fetchProductbyCategory(category));
  }, [category]);

  // if (loading) return <CustomSkeleton />;

  return (
    <>
      {" "}
      <Toolbar sx={{ flexGrow: 1 }}>
        <Typography variant="h5">Wardrobe</Typography>
      </Toolbar>
      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb">
          {["All", ...categories].map((el, i) => {
            return (
              <CustomChip
                key={i}
                active={category === el}
                label={el}
                variant="outlined"
                onClick={() => {
                  setCategory(el);
                }}
              />
            );
          })}
        </Breadcrumbs>
      </Toolbar>
      {loading ? (
        <CustomSkeleton />
      ) : (
        <Grid container spacing={2}>
          {products.map((el) => {
            const substr = el.title.substr(0, 10);

            return (
              <Grid item xs={12} md={6} lg={4} key={el.id}>
                <LatestCard
                  title={`${substr}...`}
                  src={el.image}
                  price={el.price}
                  item={el}
                  contain
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Wardrobe;
