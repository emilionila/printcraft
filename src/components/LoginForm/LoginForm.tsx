import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import style from './LoginForm.module.scss';
import { SERVER_HOST, scrollToTop } from '../../utils/helpers';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const notify = (message: string) => toast(message);
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios.post(`${SERVER_HOST}/users/login`, {
      email: formData.email,
      password: formData.password,
    }).then((res) => {
      notify('Login verified, redirecting to account page');
      localStorage.setItem('jwt', res.data.jwt);
      setTimeout(() => navigate('/account'), 3000);
    }).catch(err => {
      notify(err.response.data.err);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        action="#"
        method="post"
        className={style.LoginForm}
        onSubmit={handleLogin}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          theme="dark"
          closeButton={false}
        />
        <h2 className={style.LoginForm__title}>Log In</h2>

        <div className={style.LoginForm__item}>
          <label htmlFor="email" className={style.LoginForm__label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className={style.LoginForm__input}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.LoginForm__item}>
          <label htmlFor="password" className={style.LoginForm__label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className={style.LoginForm__input}
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className={style.LoginForm__submitBtn}>
          Log In
        </button>

        <p className={style.LoginForm__haveAnAcc}>
          Do not have an account yet?
          <Link
            to="/account/register"
            className={style.LoginForm__register}
            onClick={scrollToTop}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};
