import { FC } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import LogoStyle from './Logo.module.scss';
import logo from '../../icons/Logo.png';

export interface LogokProps {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo: FC<LogokProps> = ({
  onClick,
}) => {
  const cn = classNames.bind(LogoStyle);

  return (
    <NavLink
      to="."
      className={cn('logo')}
      onClick={onClick}
    >
      <img
        src={logo}
        alt="Nice Gadgets logo"
        className={cn('logo__img')}
      />
    </NavLink>
  );
};
