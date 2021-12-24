import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import { LoginvalidationSchema } from "../../Schemas/loginSchema";
// import { Google } from "@mui/icons-material";
// import GoogleLoginComp from "../../Components/GoogleAuth/GoogleLogin";
import FBLogin from "../../Components/FacebookAuth/FBLogin";
import GoogleFireBaseLogin from "../../Components/FirebaseAuth/GoogleAuthProvider";
import { useSelector } from "react-redux";
import { getAuthState } from "../../Features/AuthSlice";
import { CustomBrownButton } from "../../Components/Customs/CustomButton";
import {
  AuthLogoImage,
  Divder,
  FlexAlignCenter,
} from "../../Components/StyledComponents/AuthScreens/AuthScreenComponents";
import AuthScreensLayout from "../../Components/StyledComponents/AuthScreens/AuthScreensLayout";

const Login = () => {
  const { auth } = useSelector(getAuthState);

  const location = useLocation();
  let from = location?.state?.from ? location?.state?.from?.pathname : "/";

  const navigate = useNavigate();

  useEffect(() => {
    auth && navigate(from);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const {
    handleSubmit,
    // values,
    touched,
    errors,
    getFieldProps,
    handleReset,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      isLoggedin: false,
    },
    onSubmit: (values) => {
      console.log(values);
      handleReset();
    },
    validationSchema: LoginvalidationSchema,
  });

  return (
    <AuthScreensLayout>
      <h1>E-Commerce</h1>
      <FlexAlignCenter>
        <FBLogin />
        <GoogleFireBaseLogin />
      </FlexAlignCenter>
      <Divder />
      <form onSubmit={handleSubmit}>
        <Input
          icon={"far fa-envelope"}
          placeholder={"Email ID"}
          type={"email"}
          {...getFieldProps("email")}
        />
        {touched.email && errors.email ? (
          <div className="errorMessage">*{errors.email}</div>
        ) : null}
        <Input
          icon={"fas fa-key"}
          placeholder={"Password"}
          type="password"
          {...getFieldProps("password")}
        />
        {touched.password && errors.password ? (
          <div className="errorMessage">*{errors.password}</div>
        ) : null}
        <div className="input_Wrapper">
          <input
            {...getFieldProps("isLoggedin")}
            id="checkbox"
            type="checkbox"
          />
          <label style={{ marginLeft: "1rem" }} htmlFor="checkbox">
            Keep me Logged in
          </label>
        </div>
        <CustomBrownButton variant="contained" type={"submit"} fullWidth>
          Log In
        </CustomBrownButton>
        {/* <Button sx={{ margin: "1rem 0" }} fullWidth variant="contained">
          <Facebook />
        </Button> */}

        {/* <GoogleLoginComp
                renderComp={(renderProps) => (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    fullWidth
                    variant="contained"
                    color="secondary"
                  >
                    <Google />
                  </Button>
                )}
              /> */}

        <FlexAlignCenter style={{ margin: "20px 0" }}>
          New User?{" "}
          <Link style={{ color: "#66180d" }} to="/signUp">
            Register
          </Link>
        </FlexAlignCenter>
      </form>
    </AuthScreensLayout>
  );
};

export default Login;
