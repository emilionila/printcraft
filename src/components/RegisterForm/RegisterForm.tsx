import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './RegisterForm.module.scss';
import { SERVER_HOST, scrollToTop } from '../../utils/helpers';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const notify = (message: string) => toast(message);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('registeredUser', JSON.stringify(formData));
    axios.post(`${SERVER_HOST}/users/register`, {
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
    })
      .then(() => {
        notify('Successfully registered, redirecting to login');
        setTimeout(() => navigate('/account/login'), 3000);
      })
      .catch(err => {
        notify(err.response.data.err);
      });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        className={style.RegisterForm}
        onSubmit={handleSubmit}
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
        <h2 className={style.RegisterForm__title}>Register</h2>

        <div className={style.RegisterForm__item}>
          <label
            htmlFor="firstName"
            className={style.RegisterForm__label}
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className={style.RegisterForm__input}
          />
        </div>

        <div className={style.RegisterForm__item}>
          <label
            htmlFor="lastName"
            className={style.RegisterForm__label}
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Enter your surname"
            className={style.RegisterForm__input}
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.RegisterForm__item}>
          <label
            htmlFor="email"
            className={style.RegisterForm__label}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className={style.RegisterForm__input}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.RegisterForm__item}>

          <label
            htmlFor="password"
            className={style.RegisterForm__label}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className={style.RegisterForm__input}
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        {/* <div className={style.RegisterForm__item}>

          <label
            htmlFor="repeatPassword"
            className={style.RegisterForm__label}
          >
            Repeat Password:
          </label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Repeat your password"
            required
            className={style.RegisterForm__input}
            value={formData.repeatPassword}
            onChange={handleInputChange}
          />
        </div> */}

        <button
          type="submit"
          className={style.RegisterForm__submitBtn}
        >
          Register
        </button>

        <p className={style.RegisterForm__haveAnAcc}>
          Already have an account?
          <Link
            to="/account/login"
            onClick={scrollToTop}
            className={style.RegisterForm__signIn}
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};
