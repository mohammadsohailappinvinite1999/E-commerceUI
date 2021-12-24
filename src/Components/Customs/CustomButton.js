import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomBrownButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#66180d",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#66180d",
  },
}));

export const CustomRedButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#f54336",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#f54336",
  },
}));
