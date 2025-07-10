import { Link } from 'react-router';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { routes } from '~/config';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('wrapper')}>
        <Link to="/" className={cx('logo')}>
          <img className={cx('logo-img')} src={images.logo} alt="logo-img" />
        </Link>

        <nav className={cx('nav')}>
          <Button
            defaultBtn
            to={routes.home}
            className={cx('link')}
          >
            My Note
          </Button>
          <Button
            defaultBtn
            to={routes.addnote}
            className={cx('link')}
          >
            Add Note
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
