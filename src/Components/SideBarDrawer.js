import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles({
    hide: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    centermd: {
      "& img": {
        width: "35px",
        height: "38px",
      },
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    Linksmd: {
      display: "inline-block",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& span": {
          display: "none",
        },
      },
    },
  });

const SideBarDrawer = () => {
  // const { window } = props;

  const theme = useTheme();

  const classes = useStyles(theme)();

  const Links = [
    {
      title: "home",
      to: "/",
      icon: "fas fa-home",
    },
    {
      title: "My Wardrobe",
      to: "wardrobe",
      icon: "fas fa-tshirt",
    },
    {
      title: "Orders",
      to: "/orders",
      icon: "fas fa-list",
    },
    { title: "My Friend", to: "/friends", icon: "fas fa-user-friends" },
    { title: "My Background", to: "/background", icon: "fas fa-image" },
    { title: "chats", to: "/chats", icon: "far fa-comment-dots" },
    { title: "Gifts", to: "/gifts", icon: "fas fa-gift" },
  ];

  return (
    <Drawer
      sx={{
        width: "16.66%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "16.66%",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar className={classes.centermd} sx={{ padding: 0 }}>
        <div className={classes.centermd}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
            alt="logo"
          />
        </div>
        <Typography className={classes.hide} variant="p" marginLeft="10px">
          E-commerce
        </Typography>
      </Toolbar>
      <ul className="sidelinks_wrapper">
        {Links.map((el) => (
          <li key={el.title} className="sidelinks">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#4a4a4a",
                background: isActive ? "#66180d" : "transparent",
                width: "100%",
              })}
              to={el.to}
              className={classes.Linksmd}
            >
              <i style={{ marginRight: "15px" }} className={el.icon}></i>
              <Typography variant="p">{el.title}</Typography>
            </NavLink>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default SideBarDrawer;
