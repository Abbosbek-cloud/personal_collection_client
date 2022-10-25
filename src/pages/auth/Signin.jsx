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

const Login = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state?.user?.user);
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useNavigate();
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
    if (session?.user && session?.user?.isAdmin) {
      dispatch(getUserData({ token: session.token }));
      router.push("/admin/vendor/dashboard");
    } else if (session?.user && !session?.user?.isAdmin) {
      dispatch(getUserData({ token: session?.token }));
      router.push("/profile");
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
          <span style={{ textTransform: "capitalize" }}>
            {process.env.NEXT_PUBLIC_APP_NAME}
          </span>{" "}
          ga xush kelibsiz.
        </H3>
        <Small
          display="block"
          fontSize="12px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
        >
          Kirish uchun Login yoki Telefon raqamingiz va parolingizni kiriting
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
          label="Email"
          placeholder="Email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <CustomTextField
          mb={2}
          fullWidth
          size="small"
          name="password"
          label="Parol"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
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
            Kirish
          </FormButton>
        )}
      </form>
      <Box component="a" href="/auth/signup" rel="noreferrer noopener">
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

const initialValues = {
  email: "",
  password: "",
};
const formSchema = yup.object().shape({
  password: yup.string().required("Parol kiritilishi shart!"),
  email: yup.string().required("Login kiritilishi shart!"),
});
export default Login;
