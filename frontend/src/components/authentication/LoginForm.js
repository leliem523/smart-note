import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { debounce } from "lodash";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function LoginForm() {
  const listUser = useSelector((state) => state.authenticate.listUser);
  const navigate = useNavigate();
  console.log("listUser: ", listUser);

  const signinSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(6)
      .max(50)
      .required("Required"),
    password: Yup.string().min(8).max(50).required("Required"),
  });

  const handleSubmit = debounce((values, { setSubmitting }) => {
    const { email = null, password = null } = values;
    const user = listUser.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      swal(
        "Đăng nhập thất bại!",
        "Tài khoản hoặc mật khẩu của bạn không đúng!",
        "warning"
      );
      return;
    }
    localStorage.setItem("Auth:user", user.id);
    swal({
      title: "Đăng nhập thành công!",
      icon: "success",
    });
    setSubmitting(false);
    window.location.href = "/";
  }, 500);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={signinSchema}
      onSubmit={handleSubmit}
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
            <label htmlFor="email">email</label>
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
            <label htmlFor="password">password</label>
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
            <button type="submit" disabled={isSubmitting}>
              Đăng nhập
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
