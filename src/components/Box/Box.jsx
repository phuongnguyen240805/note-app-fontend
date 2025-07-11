import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './Box.module.scss';

const cx = classNames.bind(styles);

function Box({
    children,
    type,
    title,
    leftIcon,
    rightIcon,
    className,
}) {

    const classes = cx('wrapper', {
        [className]: className,
        [type]: type,
    });

    return (
        <div className={classes}>
            <h3 className={cx('section-title')}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span>{title}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </h3>
            {children}
        </div>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Box;