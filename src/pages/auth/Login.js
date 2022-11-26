import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'

import Axios from 'axios';
import { useNavigate } from 'react-router';
import login from './login.module.css'

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required()
})

const Login = ({ setIsAdmin }) => {

  const navigate = useNavigate()
  const onSubmit = async (values) => {
    const response = await Axios
      .post("http://localhost:5000/auth/login", values)
      .catch(err => {
        if (err && err.response) console.log("Error: ", err.response.data.message);
      })
    if (response.data.isAdmin) {
      navigate('/all-courses')
      setIsAdmin(true)
    }
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })



  return (
    <section className={login.login_section}>
      <h1>Anywhere in your app!</h1>
      <form className={login.form} onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder='Enter your login'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? <div className={login.alert}>{formik.errors.email}</div> : ""}
        <input
          type="password"
          name="password"
          placeholder='Enter your password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? <div className={login.alert}>{formik.errors.password}</div> : ""}
        <button type="submit" >
          Login
        </button>
      </form>
    </section>
  )
}

export default Login