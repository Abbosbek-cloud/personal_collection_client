import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";
import { FlexBox } from "../../components/flex-box";
import { H3, H6, Small } from "../../components/Typography";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import axios from "axios";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { AuthWrapper, FormButton } from "../../styled/Components";
import { BASE_URL } from "../../constants/base";
import { getUserData } from "../../redux/user/user-saga";
import { useTranslation } from "react-i18next";

const initialValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
};

const Signup = () => {
  const { t } = useTranslation();
  const formSchema = yup.object().shape({
    name: yup.string().required(t("askName")),
    email: yup.string().required(t("askEmail")),
    password: yup.string().required(t("askPassword")),
    re_password: yup
      .string()
      .oneOf([yup.ref("password"), null], t("notMatchPassword"))
      .required(t("askPassword")),
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rePasswordVisibility, setrePasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const togglerePasswordVisibility = useCallback(() => {
    setrePasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values) => {
    values.email = values.email.toLowerCase();

    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/user/auth/signup`, values).then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.newUser));

        navigate("/user/profile");
        setLoading(false);
      });
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return (
    <AuthWrapper
      elevation={3}
      passwordVisibility={passwordVisibility}
      sx={{ margin: "30px auto" }}
    >
      <form onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          {t("register")}
        </H3>
        <Small
          mb={4.5}
          fontSize={12}
          display="block"
          fontWeight={600}
          color="grey.800"
          textAlign="center"
        >
          {t("correctAnswers")}
        </Small>

        <CustomTextField
          mb={1.5}
          fullWidth
          name="name"
          size="small"
          label="Name"
          variant="outlined"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder={t("askName")}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <CustomTextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label={t("email")}
          placeholder={t("askEmail")}
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <CustomTextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label={t("password")}
          variant="outlined"
          autoComplete="on"
          placeholder={t("askPassword")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <CustomTextField
          fullWidth
          size="small"
          autoComplete="on"
          name="re_password"
          variant="outlined"
          label={t("rePassword")}
          placeholder={t("rePasswordCap")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.re_password}
          type={rePasswordVisibility ? "text" : "password"}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={rePasswordVisibility}
                click={togglerePasswordVisibility}
              />
            ),
          }}
        />

        {loading ? (
          <LoadingButton
            loading={loading}
            sx={{
              padding: "20px",
              width: "100%",
              backgroundColor: "#ddd",
              mt: 2,
            }}
          ></LoadingButton>
        ) : (
          <FormButton
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            sx={{
              height: 44,
              mt: 2,
            }}
          >
            {t("register")}
          </FormButton>
        )}
        <Typography sx={{ mt: 1, textAlign: "center" }}>
          {t("toLogin")}{" "}
          <Link to="/signin" sx={{ color: "red", fontWeight: 600 }}>
            Login
          </Link>{" "}
        </Typography>
      </form>
    </AuthWrapper>
  );
};

export default Signup;
