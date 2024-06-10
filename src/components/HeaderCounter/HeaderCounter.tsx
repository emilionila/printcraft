import { FC, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderCounter.module.scss';

interface Props {
  productsCount: number;
}

export const HeaderCounter: FC<Props> = memo(({ productsCount }) => {
  const cn = classNames.bind(styles);

  return (
    <>
      {productsCount > 0 && (
        <div className={cn('container', 'items')}>
          {productsCount < 100 ? productsCount : '99+'}
        </div>
      )}
    </>
  );
});
