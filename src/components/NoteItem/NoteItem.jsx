import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useContext } from "react";

import styles from './NoteItem.module.scss';
import Button from "~/components/Button";
import { routes } from "~/config";
import { NoteContext } from "~/hooks/NoteContext";

const cx = classNames.bind(styles);

function NoteItem({
    note,
    onComplete, 
    onRestore,
    className,
    type,
    completed = false,
}) {

    const { setSelectedNoteId } = useContext(NoteContext);

    const classes = cx('wrapper', {
        [className]: className,
        [type]: type,
        completed
    });

    return (
        <div className={classes}>
            <div key={note?._id} className={cx('note-card', { [type]: type })}>
                <span className={cx('note-text')}>{note?.text}</span>
                {
                    completed ? (
                        <div className={cx('actions')}>
                            <Button
                                className={cx('btn')}
                                onClick={() => onRestore(note._id)}
                            >↩️</Button>
                            <Button
                                className={cx('btn')}
                                to={routes.updateGenerator(note?._id)}
                            >📝</Button>
                            <Button
                                className={cx('btn')}
                                onClick={() => setSelectedNoteId(note?._id)}
                            >❌</Button>
                        </div>
                    ) : (
                        <div className={cx('actions')}>
                            <Button
                                className={cx('btn')}
                                onClick={() => onComplete(note._id)}
                            >✅</Button>
                            <Button
                                className={cx('btn')}
                                to={routes.updateGenerator(note?._id)}
                            >📝</Button>
                            <Button
                                className={cx('btn')}
                                onClick={() => setSelectedNoteId(note?._id)}
                            >❌</Button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    note: PropTypes.node.isRequired,
    onComplete: PropTypes.func,
    onRestore: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    completed: PropTypes.bool,
};

export default NoteItem;