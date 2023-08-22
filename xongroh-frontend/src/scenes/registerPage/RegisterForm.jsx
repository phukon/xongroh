import {Link} from 'react-router-dom'
import * as yup from 'yup'
import { Formik, Form, ErrorMessage, Field } from "formik"


const RegisterForm = () => {

    const loginSchema = yup.object().shape({
        firstname: yup.string().required('First name is required'),
        lastname: yup.string().required('Last name is required'),
        username: yup.string().required('Username is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required')
    })
    
    const initialValuesLogin = {
        email: "",
        password: "",
    }

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
                <Form className='flex flex-col items-center'>
                    <div className='pt-4'>
                        <Field name="firstname" type="firstname" placeholder="firstname" className='border border-gray-400 rounded px-3 py-2' />
                        <div className="error text-gray-400">
                            <ErrorMessage name="firstname" component="span" />
                        </div>
                    </div>

                    <div className='py-4'>
                        <Field name="lastname" type="lastname" placeholder="lastname" className='border border-gray-400 rounded px-3 py-2' />
                        <div className="error text-gray-400">
                            <ErrorMessage name="lastname" component="span" />
                        </div>
                    </div>

                    <div className='pt-4'>
                        <Field name="username" type="username" placeholder="username" className='border border-gray-400 rounded px-3 py-2' />
                        <div className="error text-gray-400">
                            <ErrorMessage name="username" component="span" />
                        </div>
                    </div>

                    <div className='py-4'>
                        <Field name="email" type="email" placeholder="Email" className='border border-gray-400 rounded px-3 py-2' />
                        <div className="error text-gray-400">
                            <ErrorMessage name="email" component="span" />
                        </div>
                    </div>
                    
                    <div  className='pb-10'>
                        <Field name="password" type="password" placeholder="password" className='border border-gray-400 rounded px-3 py-2'/>
                        <div className="error text-gray-400">
                            <ErrorMessage name="password" component="span" />
                        </div>
                    </div>
                    <button className='bg-orange-400 rounded-lg py-2 px-10 text-white font-medium' type="submit">Sign in</button>

                    <div className="text-center py-4">
                        <span className='text-gray-500'>Already have an account? <Link className='text-orange-400 font-medium' to="/login">Log in here</Link></span>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default RegisterForm;