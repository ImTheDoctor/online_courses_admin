import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import loginStyle from './login.module.css'
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async () => {
    const newInfo = {
      email,
      password,
    }
    await login(newInfo)
  }

  return (
    <section className={loginStyle.login_section}>
      <Form layout='vertical' className={login.form} onFinish={handleSubmit}>
        <Form.Item label="Email">
          <Input
            type="email"
            name="email"
            placeholder='Enter your login'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password
            type="password"
            name="password"
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type='primary' disabled={isLoading} block>
            Login
          </Button>
          {error && <div className={loginStyle.error}>{error.message}</div>}
          
        </Form.Item>

      </Form>
    </section>
  )
}

export default Login