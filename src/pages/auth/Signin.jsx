import { Box } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";
import { H3, H6, Small } from "../../components/Typography";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { getUserData } from "../../redux/user/user-saga";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const session = useSelector((state) => state?.user?.user);
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
        dispatch(getUserData({ token: res?.data?.token }));
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

  useEffect(() => {
    if (session?.user && session?.user?.role === "MODERATOR") {
      dispatch(getUserData({ token: session.token }));
      navigate("/moderator");
    } else if (session?.user && session?.user?.role === "ADMIN") {
      dispatch(getUserData({ token: session?.token }));
      navigate("/admin/dashboard");
    } else if (session?.user && session?.user?.role === "USER") {
      dispatch(getUserData({ token: session?.token }));
      navigate("/user/profile");
    }
  }, [session]);

  return (
    <AuthWrapper
      elevation={3}
      passwordVisibility={passwordVisibility}
      sx={{ margin: "30px auto" }}
    >
      <form onSubmit={handleSubmit}>
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
      </form>
      <Box component="a" href="/signup" rel="noreferrer noopener">
        <H6
          ml={1}
          borderBottom="1px solid"
          sx={{
            color: errors.agreement && touched.agreement ? "red" : "",
          }}
          borderColor="grey.900"
        >
          Ro'yhatdan o'tish!
        </H6>
      </Box>
    </AuthWrapper>
  );
};

export default Login;
