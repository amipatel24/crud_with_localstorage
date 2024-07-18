import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { Context, MyContext } from "../../App";

function AddUser() {
    const {setUserData, userData} = useContext(MyContext)
    console.log("userData", userData);
  const addUser = (values) => {
    console.log("values", values);
    setUserData([...userData,values])
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              name: "",
              email: "",
              mobileNumber: "",

              city: "",
              gender: "",
            }}
            // validationSchema={LoginSchema}
            onSubmit={(values) => addUser(values)}
          >
            {(props) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 ">
                    <div>
                      <h1>Add User</h1>{" "}
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
                          <label htmlFor="mobileNumber" className="mt-3">
                            MobileNumber
                          </label>
                          <Field
                            type="text"
                            name="mobileNumber"
                            placeholder="Enter MobileNumber"
                            className={`form-control ${
                              props.touched.mobileNumber &&
                              props.errors.mobileNumber
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="mobileNumber"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="city" className="mt-3">
                            City
                          </label>
                          <Field
                            as="select"
                            name="city"
                            className="form-control"
                          >
                            <option value="ahmedabad">Ahmedabad</option>
                            <option value="vadodara">vadodara</option>
                            <option value="gandhinagar">gandhinagar</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="city"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group">
                          <label className="mt-3">Gender</label>
                          
                          <div>
                            <label>
                              <Field
                                type="radio"
                                name="gender"
                                value="male"
                                className="form-check-input"
                              />
                              Male
                            </label>
                          </div>
                          <div>
                            <label>
                              <Field
                                type="radio"
                                name="gender"
                                value="female"
                                className="form-check-input"
                              />
                              Female
                            </label>
                          </div>
                          <ErrorMessage
                            component="div"
                            name="gender"
                            className="invalid-feedback"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mt-4"
                        >
                            Submit
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

export default AddUser;
