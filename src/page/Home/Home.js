import React, { useState } from "react";
import { Grid, Toolbar, Typography } from "@mui/material";
import CardUI from "../../Components/Card";
import Latest from "./Latest";
import Following from "./Following";

const Home = () => {
  const [section, setSection] = useState("following");

  return (
    <>
      <Toolbar sx={{ flexGrow: 1 }}>
        <Typography variant="h5">HOME</Typography>
      </Toolbar>
      <section className="categories">
        <Toolbar>
          <Typography
            onClick={() => {
              setSection("latest");
            }}
            variant="p"
            className={`home_nav ${
              section === "latest" ? "home_nav_item" : ""
            }`}
          >
            LATEST
          </Typography>
          <Typography
            onClick={() => {
              setSection("following");
            }}
            className={`home_nav ${
              section === "following" ? "home_nav_item" : ""
            }`}
            variant="p"
          >
            FOLLOWING
          </Typography>
        </Toolbar>

        {section === "latest" ? <Latest /> : <Following />}
      </section>
    </>
  );
};

export default Home;
