import { useLocation } from 'react-router-dom';
import style from './AccountForm.module.scss';
import BookImgLogin from '../../images/1.jpg';
import { RegisterForm } from '../RegisterForm';
import { LoginForm } from '../LoginForm';

export const AccountForm = () => {
  const location = useLocation();

  return (
    <div className={style.AccountFormContainer}>
      <div className={style.AccountFormImageContainer}>
        <img
          src={BookImgLogin}
          alt="iphone 15"
          className={style.AccountFormImage}
        />
      </div>

      {location.pathname === '/account/register' && <RegisterForm />}
      {location.pathname === '/account/login' && <LoginForm />}
    </div>
  );
};
