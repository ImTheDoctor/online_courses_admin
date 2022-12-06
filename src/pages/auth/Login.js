import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Button, Form, Input } from 'antd';

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
      .then((response) => {
        let token = response.data.token;
        localStorage.setItem('tkn', 'Bearer ' + token)
        Axios.defaults.headers.common['authorization'] = 'Bearer ' + token
        if (response.data.isAdmin) {
          navigate('/all-courses')
          setIsAdmin(response.data.isAdmin)
        }
        
      })
      .catch(err => {
        if (err && err.response) console.log("Error: ", err.response.data.message);
      })
  }



  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })



  return (
    <section className={login.login_section}>
      <Form layout='vertical' className={login.form} onFinish={formik.handleSubmit}>
        <Form.Item label="Email">
          <Input
            type="email"
            name="email"
            placeholder='Enter your login'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
          {formik.errors.email && formik.touched.email ? <div className={login.alert}>{formik.errors.email}</div> : ""}
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password
            type="password"
            name="password"
            placeholder='Enter your password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          />
          {formik.errors.password && formik.touched.password ? <div className={login.alert}>{formik.errors.password}</div> : ""}
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type='primary' block>
            Login
          </Button>
        </Form.Item>

      </Form>
    </section>
  )
}

export default Login