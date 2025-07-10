import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './Box.module.scss';
import NoteItem from "~/components/NoteItem";

const cx = classNames.bind(styles);

function Box({
    notes,
    title,
    empty,
    type,
    leftIcon,
    rightIcon,
    className,
    completed=false,
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
            <div className={cx('note-list')}>
                {notes.filter((n) => !n.completed).length === 0 ? (
                    <p className={cx('empty')}>{empty}</p>
                ) : (
                    notes
                        .filter((n) => !n.completed)
                        .map((note) => (
                            <NoteItem 
                                completed={completed}
                                note={note}
                                type={type}
                            />
                        ))
                )}
            </div>
        </div>
    );
}

Box.propTypes = {
    notes: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Box;