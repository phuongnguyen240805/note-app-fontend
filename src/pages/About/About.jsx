import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './About.module.scss';


const cx = classNames.bind(styles);

function About() {
    const [notes, setNotes] = useState([]);
    const [text, setText] = useState('');

    const handleAddNote = () => {
        if (!text.trim()) return;
        setNotes([{ id: Date.now(), text }, ...notes]);
        setText('');
    };

    return (
        <div className={cx('container')}>
            {/* Form thêm ghi chú */}
            <div className={cx('form')}>
                <h2 className={cx('formTitle')}>+ Thêm ghi chú</h2>
                <div className={cx('formRow')}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Nhập nội dung ghi chú..."
                        className={cx('input')}
                    />
                    <button onClick={handleAddNote} className={cx('button')}>
                        Thêm
                    </button>
                </div>
            </div>

            {/* Danh sách ghi chú */}
            <div className={cx('noteList')}>
                <h3 className={cx('formTitle')}>📒 Ghi chú gần đây:</h3>
                {notes.length === 0 ? (
                    <p style={{ fontStyle: 'italic', color: '#999' }}>
                        Chưa có ghi chú nào.
                    </p>
                ) : (
                    notes.map((note) => (
                        <div key={note.id} className={cx('note')}>
                            {note.text}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default About;