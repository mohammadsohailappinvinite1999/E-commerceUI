import React, { useEffect } from "react";

import { useFormik } from "formik";
import Input from "../../Components/Input";
import { Button } from "@mui/material";
import { validationSchema } from "../../Schemas/FormSchema";
import FileUpload from "../../Components/FileUpload";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthState } from "../../Features/AuthSlice";
import {
  Container,
  Wrapper,
} from "../../Components/StyledComponents/AuthScreens/AuthScreenComponents";
import AuthScreensLayout from "../../Components/StyledComponents/AuthScreens/AuthScreensLayout";
import { CustomBrownButton } from "../../Components/Customs/CustomButton";

const Signup = () => {
  const {
    handleSubmit,
    values,
    touched,
    errors,
    getFieldProps,
    setFieldValue,
    handleReset,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      preferredEmail: "",
      number: "",
      file: undefined,
      isLoggedin: false,
    },
    onSubmit: (values) => {
      console.log(values);
      handleReset();
    },
    validationSchema,
  });

  const { auth } = useSelector(getAuthState);

  const location = useLocation();
  let from = location?.state?.from ? location?.state?.from?.pathname : "/";

  const navigate = useNavigate();

  useEffect(() => {
    auth && navigate(from);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <AuthScreensLayout>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <FileUpload
          name={"file"}
          value={values.file}
          setFieldValue={setFieldValue}
        />
        {errors.file ? (
          <div className="errorMessage">*{errors.file}</div>
        ) : null}
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
          icon={"far fa-envelope"}
          placeholder={"Preferred Email ID"}
          type={"email"}
          {...getFieldProps("preferredEmail")}
        />
        {touched.preferredEmail && errors.preferredEmail ? (
          <div className="errorMessage">*{errors.preferredEmail}</div>
        ) : null}
        <Input
          value={values.name}
          icon={"fas fa-male"}
          placeholder={"username"}
          {...getFieldProps("name")}
        />
        {touched.name && errors.name ? (
          <div className="errorMessage">*{errors.name}</div>
        ) : null}
        <Input
          icon={"fas fa-mobile-alt"}
          placeholder={"Phone Number"}
          type="text"
          {...getFieldProps("number")}
        />
        {touched.number && errors.number ? (
          <div className="errorMessage">*{errors.number}</div>
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
          Sign Up
        </CustomBrownButton>
        <div style={{ margin: "1rem 0" }}>
          Already have a account?{" "}
          <Link style={{ color: "#66180d" }} to="/">
            Sign in
          </Link>
        </div>
      </form>
    </AuthScreensLayout>
  );
};

export default Signup;
