import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <p>
        &copy; {new Date().getFullYear()} <span className={cx('highlight')}>NoteApp</span>. All rights reserved.
      </p>
      <p className={cx('subtext')}>Made with ❤️ using ReactJS & NodeJS</p>
    </footer>
  );
}

export default Footer;
