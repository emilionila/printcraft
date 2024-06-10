import { FC, MouseEvent } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import LinckStyle from './NavigationLink.module.scss';

export interface NavigationLinkProps {
  to: string;
  linkText: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  to,
  linkText,
  onClick,
}) => {
  const cn = classNames.bind(LinckStyle);

  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        'nav__link',
        { active: isActive },
      )}
      onClick={onClick}
    >
      {linkText}
    </NavLink>
  );
};
