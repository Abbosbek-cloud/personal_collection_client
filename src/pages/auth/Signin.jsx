import { Box, Typography } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";
import { H3, H6, Small } from "../../components/Typography";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { AuthWrapper, FormButton } from "../../styled/Components";
import { BASE_URL } from "../../constants/base";
import { useTranslation } from "react-i18next";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { t } = useTranslation();
  const formSchema = yup.object().shape({
    password: yup.string().required(t("pswdReq")),
    email: yup.string().required(""),
  });
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values) => {
    try {
      setLoading(true);
      await axios({
        url: `${BASE_URL}/user/auth/login`,
        method: "POST",
        data: values,
      }).then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        const { role } = res.data.user;
        console.log(res.data);
        if (role === "MODERATOR") {
          navigate("/moderator");
        } else if (role === "ADMIN") {
          navigate("/admin/dashboard");
        } else if (role === "USER") {
          navigate("/user/profile");
        }
      });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
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
      sx={{ margin: "10vh auto" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ width: "90%", marginInline: "auto" }}
      >
        <H3 textAlign="center" mb={1}>
          {t("logPage")}
        </H3>
        <Small
          display="block"
          fontSize="12px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
        >
          {t("logText")}
        </Small>
        <CustomTextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
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
          mb={2}
          fullWidth
          size="small"
          name="password"
          label={t("password")}
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder={t("askPassword")}
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

        {loading ? (
          <LoadingButton
            loading={loading}
            sx={{ padding: "20px", width: "100%", backgroundColor: "#ddd" }}
          ></LoadingButton>
        ) : (
          <FormButton
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            sx={{
              mb: "1.65rem",
              height: 44,
            }}
          >
            {t("send")}
          </FormButton>
        )}
        <Typography sx={{ mt: 1, textAlign: "center" }}>
          {t("toSignUp")}{" "}
          <Link to="/signup" style={{ color: "red", fontWeight: 600 }}>
            SignUp
          </Link>{" "}
        </Typography>
      </form>
    </AuthWrapper>
  );
};

export default Login;
