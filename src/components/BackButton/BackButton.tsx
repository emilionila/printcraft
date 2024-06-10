import { useNavigate } from 'react-router-dom';
import style from './BackButton.module.scss';
import { Arrow } from '../Arrow/Arrow';

export const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={style.backBtnContainer}>
      <Arrow />
      <button
        type="button"
        onClick={goBack}
        className={style.backBtn}
      >
        Back
      </button>
    </div>
  );
};
