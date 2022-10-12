import './authenticate.scss'
import React from 'react'
import RegisterForm from '../../components/authentication/RegisterForm'

function Register() {
  return (
    <div className="register_page">
    <div className="title">
      <span>Đăng ký</span>
    </div>
      <RegisterForm />
    </div>
  )
}

export default Register