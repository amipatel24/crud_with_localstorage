import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const login = (values) => {
    if (values) {
      const authuser = JSON.parse(localStorage.getItem("user"));
      if (
        authuser.email === values.email &&
        authuser.password === values.password
      ) {
        alert("login successfully");
        navigate("/home");
      } else {
        alert("invalid email & password");
      }
    } else {
      alert("user not found");
    }
    console.log("val", values);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            // validationSchema={LoginSchema}
            onSubmit={(values) => login(values)}
          >
            {(props) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 ">
                    <div>
                      <h1>Login Page</h1>{" "}
                      <Form>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            className={`mt-2 form-control ${
                              props.touched.email && props.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="password" className="mt-3">
                            Password
                          </label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className={`form-control ${
                              props.touched.password && props.errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="password"
                            className="invalid-feedback"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mt-4"
                          // disabled={props.isSubmitting}
                        >
                          login
                          {/* {props.isSubmitting ? "Submitting..." : "Login"} */}
                        </button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
