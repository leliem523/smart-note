import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { debounce } from "lodash";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../../actions/common";
import { register } from "../../actions/authenticate";
import {useNavigate} from 'react-router-dom';

function RegisterForm() {
  const listUser = useSelector((state) => state.authenticate.listUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(6)
      .max(50)
      .required("Required"),
    password: Yup.string().min(8).max(50).required("Required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const handleFormSubmit = debounce((values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      dispatch(turnOnLoader());
      const { email = null, password = null } = values;
      const user = listUser.find((user) => user.email === email);
      if (user) {
        swal("Đăng ký thất bại!", "Tài khoản này đã tồn tại!", "warning");
        return;
      }
      dispatch(register({ email, password }));
      swal({
        title: "Đăng ký thành công!",
        icon: "success",
      });
    navigate('/login');
    } catch (error) {
      console.log("error: ", error);
    } finally {
      dispatch(turnOffLoader());
      setSubmitting(false);
    }
  }, 500);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form_item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </div>
          <div className="form_item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </div>

          <div className="form_item">
            <label htmlFor="passwordConfirmation">Confirm password</label>
            <input
              type="password"
              name="passwordConfirmation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirmation}
            />
            {errors.passwordConfirmation &&
              touched.passwordConfirmation &&
              errors.passwordConfirmation}
          </div>

          <div className="form_item">
            <button type="submit" disabled={isSubmitting}>
              Đăng ký
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
