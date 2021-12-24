import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { styled } from "@mui/material/styles";
import app from "../../firebase";
import { FirebaseLoginsuccess } from "../../Features/AuthSlice";

const provider = new GoogleAuthProvider();
const firebaseauth = getAuth();

const GoogleButton = styled(Button)({
  backgroundColor: "#fff",
  width: 45,
  height: 45,
  minWidth: 45,
  padding: "0 2px",
  marginLeft: "1rem",
  "&:hover": {
    backgroundColor: "#fff",
  },
});

const GoogleFireBaseLogin = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(firebaseauth, provider)
      .then((res) => {
        const { uid, photoURL, email, displayName } = res.user;
        const authObj = {
          uid,
          photoURL,
          email,
          displayName,
        };
        dispatch(FirebaseLoginsuccess(authObj));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GoogleButton variant="contained" onClick={signIn}>
      <img
        style={{
          width: "80%",
        }}
        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        alt="google"
      />
    </GoogleButton>
  );
};

export default GoogleFireBaseLogin;
