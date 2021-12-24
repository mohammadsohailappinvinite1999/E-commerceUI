import { styled } from "@mui/system";

export const Container = styled("div")({
  minHeight: "100vh",
  backgroundColor: "orange",
  width: "100%",
  display: "flex",
  position: "relative",
});

export const Wrapper = styled("div")(({ bg }) => ({
  width: "50%",
  backgroundColor: `${bg}`,
  minHeight: "100%",
}));

export const CustomModal = styled("div")({
  position: "absolute",
  height: "90%",
  width: "90%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 100,
  borderRadius: "10px",
  display: "flex",
  overflow: "hidden",
});

export const ModalSection = styled("div")(({ theme, img }) => {
  return {
    width: "50%",
    backgroundColor: "#fff",
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      display: img && "none",
      width: "100%",
    },
    "& .overlay": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(252, 252, 252, 0.41)",
    },
  };
});

export const FlexAlignCenter = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px 0",
});

export const Divder = styled("div")({
  height: "2px",
  width: "100%",
  border: "1px solid #c7c7c7",
  marginTop: "10px",
  position: "relative",
  "&:before": {
    content: "'Or'",
    position: "absolute",
    backgroundColor: "#fff",
    left: "50%",
    bottom: "-9px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const AuthLogoImage = styled("img")({
  height: "91px",
  width: "82px",
  margin: "20px",
});
