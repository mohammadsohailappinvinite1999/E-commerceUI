import { Skeleton, Stack, Grid } from "@mui/material";
import React from "react";

const CustomSkeleton = () => {
  return (
    <>
      <Grid container spacing={2}>
        {Array.from({ length: 6 }).map((el) => (
          <Grid item xs={12} md={6} lg={4}>
            <Skeleton variant="rectangular" height={118} />
            <Skeleton variant="text" width={40} />
            <Skeleton variant="text" width={210} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CustomSkeleton;
