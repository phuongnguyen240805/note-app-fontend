import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './AddNote.module.scss';
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function AddNote() {

    const datas = [
        {
            id: 1,
            text: "phuong"
        },
        {
            id: 2,
            text: "thu"
        },
        {
            id: 3,
            text: "thi"
        },
    ];

    const [notes, setNotes] = useState(datas);
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
                <h2 className={cx('form-title')}>+ Thêm ghi chú</h2>
                <div className={cx('form-row')}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Nhập nội dung ghi chú..."
                        className={cx('input')}
                    />
                    <Button 
                    onClick={handleAddNote} 
                    className={cx('button')}
                    >
                        Thêm
                    </Button>
                </div>
            </div>

            {/* Danh sách ghi chú */}
            <div className={cx('note-list')}>
                <h3 className={cx('form-title')}>📒 Ghi chú gần đây:</h3>
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

export default AddNote;