import { Box, Checkbox, FormControlLabel } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";
import { FlexBox } from "../../components/flex-box";
import { H3, H6, Small } from "../../components/Typography";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
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

const Signup = () => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rePasswordVisibility, setrePasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const togglerePasswordVisibility = useCallback(() => {
    setrePasswordVisibility((visible) => !visible);
  }, []);

  const session = useSelector((state) => state.user.user);

  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user && session?.user?.isAdmin) {
      router.push(redirect || "/admin/vendor/dashboard");
    } else if (session?.user && !session?.user?.isAdmin) {
      router.push(redirect || "/profile");
    }
  }, [router, session, redirect]);

  const handleFormSubmit = async (values) => {
    values.email = values.email.toLowerCase();

    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/user/auth/signup`, values).then((res) => {
        dispatch(getUserData({ token: res.data.token }));
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
    <AuthWrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          Ro'yhatdan o'tish
        </H3>
        <Small
          mb={4.5}
          fontSize={12}
          display="block"
          fontWeight={600}
          color="grey.800"
          textAlign="center"
        >
          Iltimos barcha malumotlarni to'gri kiriting.
        </Small>

        <CustomTextField
          mb={1.5}
          fullWidth
          name="name"
          size="small"
          label="Ism va Familiya"
          variant="outlined"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder="Ism"
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
          label="Login"
          placeholder="Login"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <CustomTextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="Parol"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
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
          label="Parolni qayta kiriting"
          placeholder="*********"
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

        <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={values.agreement || false}
            />
          }
          label={
            <FlexBox
              flexWrap="wrap"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box
                component="a"
                href="/privacy-policy"
                rel="noreferrer noopener"
              >
                <H6
                  ml={1}
                  borderBottom="1px solid"
                  sx={{
                    color: errors.agreement && touched.agreement ? "red" : "",
                  }}
                  borderColor="grey.900"
                >
                  Qonun va qoidalar
                </H6>
              </Box>
            </FlexBox>
          }
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
              height: 44,
            }}
          >
            Ro'yhatdan o'tish
          </FormButton>
        )}
      </form>
    </AuthWrapper>
  );
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
  agreement: false,
};

const formSchema = yup.object().shape({
  name: yup.string().required("Ism va familiya kiritilishi shart!"),
  email: yup.string().required("Login kiriting!"),
  password: yup.string().required("Parol kiriting!"),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Parol yuqoridagi bilan mos kelmadi!")
    .required("Iltimos parolni qayta kiriting!"),
});
export default Signup;
