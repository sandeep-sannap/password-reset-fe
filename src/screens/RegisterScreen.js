import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

import FormContainer from "../components/FormContainer";
import { register } from "../services/controllers";

toast.configure();
export default function RegisterScreen() {
  const history = useHistory();
  return (
    <FormContainer>
      <div className="login_form">
        <h1 className="mt-5">Register form</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              let email = values.email;
              let password = values.password;
              let name = values.name;
              const data = { name, email, password };
              console.log(data);
              register(data)
                .then((res) => {
                  console.log(res);
                  toast.success("Registered Successfully.");
                  history.push("/");
                })

                .catch((error) => {
                  console.log(error);
                  const message =
                    error.response && error.response.data.message
                      ? error.response.data.message
                      : error.message;
                  toast.error(message);
                });

              setSubmitting(false);
              resetForm();
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Enter valid email address.")
              .required("Email address required"),
            password: Yup.string()
              .required("Password required.")
              .min(
                8,
                "Password is too short - should be minimum 8 characters long."
              )
              .max(
                12,
                "Password is too long - should be maximum 12 characters long."
              )
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
            name: Yup.string().required("Name required."),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={errors.email && touched.email && "error"}
                  />

                  {errors.name && touched.name && (
                    <div className="invalid">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={errors.email && touched.email && "error"}
                  />

                  {errors.email && touched.email && (
                    <div className="invalid">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    // className={errors.password && touched.password && "error"}
                  />
                  {errors.password && touched.password && (
                    <div className="invalid">{errors.password}</div>
                  )}{" "}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-2"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
                <div className="row mt-2"></div>
              </form>
            );
          }}
        </Formik>
        <div className="row">
          <p className="text-muted">
            Have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* {loader && <Loader /> }

      {user.error && error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email.."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Password.."
          />
        </div>
        <div className="form-group">
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <p className="text-muted">Forgot password</p>
          </Link>
        </div>
        <button className="btn btn-primary mb-4">Sign In</button>
      </form>
      <div className="row">
        <p className="text-muted">
          New user?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </p>
      </div> */}
    </FormContainer>
  );
}
