import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const register = (values) => {
    console.log("values", values);
    localStorage.setItem('user', JSON.stringify(values));
    alert("register successfully")
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            // validationSchema={LoginSchema}
            onSubmit={(values) => register(values)}
          >
            {(props) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 ">
                    {!props.isSubmitting ? (
                      <div>
                        <h1>Sign Up</h1>{" "}
                        <Form>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field
                              type="text"
                              name="name"
                              placeholder="Enter name"
                              autoComplete="off"
                              className={`mt-2 form-control ${
                                props.touched.name && props.errors.name
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="name"
                              className="invalid-feedback"
                            />
                          </div>
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
                            disabled={props.isSubmitting}
                          >
                            {props.isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                        </Form>
                      </div>
                    ) : (
                      <h1>Home Page</h1>
                    )}
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

export default SignUp;
