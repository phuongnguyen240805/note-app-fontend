import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './NoteItem.module.scss';
import Button from "~/components/Button";
import { routes } from "~/config";

const cx = classNames.bind(styles);

function NoteItem({
    note,
    className,
    type,
    completed = false,
}) {

    const classes = cx('wrapper', {
        [className]: className,
        [type]: type,
        completed
    });

    return (
        <div className={classes}>
            <div key={note.id} className={cx('note-card', { [type]: type })}>
                <span className={cx('note-text')}>{note.text}</span>
                {
                    completed ? (
                        <div className={cx('actions')}>
                            <Button className={cx('btn')}>↩️</Button>
                            <Button
                                className={cx('btn')}
                                to={routes.update}
                            >📝</Button>
                            <Button className={cx('btn')}>❌</Button>
                        </div>
                    ) : (
                        <div className={cx('actions')}>
                            <Button className={cx('btn')}>✅</Button>
                            <Button
                                className={cx('btn')}
                                to={routes.update}
                            >📝</Button>
                            <Button className={cx('btn')}>❌</Button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    note: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    completed: PropTypes.bool,
};

export default NoteItem;