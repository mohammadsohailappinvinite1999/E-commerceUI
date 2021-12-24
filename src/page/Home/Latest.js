import React from "react";
import { Grid } from "@mui/material";
import { LatestItemsData } from "../../Data/ItemsData";
import LatestCard from "../../Components/LatestCard";

const Latest = () => {
  return (
    <>
      <Grid container spacing={2}>
        {LatestItemsData.map((el) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={el.id}>
              <LatestCard
                title={el.name}
                src={el.imageSrc}
                price={el.price}
                item={el}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Latest;
