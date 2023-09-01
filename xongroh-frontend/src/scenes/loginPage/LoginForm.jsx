import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

const LoginForm = () => {
  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const initialValuesLogin = {
    email: "",
    password: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log("onSubmit", values);

    resetForm();
  };

  // const login = async (values) => {
  //     const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(values),
  //     });
  //     const loggedIn = await loggedInResponse.json();
  //     resetForm();
  //     if (loggedIn) {
  //       dispatch(
  //         setLogin({
  //           user: loggedIn.user,
  //           token: loggedIn.token,
  //         })
  //       );
  //       navigate("/home");
  //     }
  //   };

  return (
    <Formik
      initialValues={initialValuesLogin}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      {() => (
        <Form className="flex flex-col items-center">
          <div className="py-4">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="rounded border border-gray-400 px-3 py-2"
            />
            <div className="error text-gray-400">
              <ErrorMessage name="email" component="span" />
            </div>
          </div>

          <div className="pb-10">
            <Field
              name="password"
              type="password"
              placeholder="password"
              className="rounded border border-gray-400 px-3 py-2"
            />
            <div className="error text-gray-400">
              <ErrorMessage name="password" component="span" />
            </div>
          </div>
          <button
            className="rounded-lg bg-orange-400 px-10 py-2 font-medium text-white"
            type="submit"
          >
            Sign in
          </button>

          <div className="py-4 text-center">
            <span className="text-gray-500">
              Don't have an account?{" "}
              <Link className="font-medium text-orange-400" to="/register">
                Create an account
              </Link>
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
