import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './AddNote.module.scss';
import Button from '~/components/Button';
import Box from '~/components/Box';
import { addNote, getNotes } from '~/services';


const cx = classNames.bind(styles);

function AddNote() {

    const [notes, setNotes] = useState([]);
    const [text, setText] = useState('');
    const inputRef = useRef();

    // get notes
    useEffect(() => {
        async function getAllNotes() {
            try {
                const response = await getNotes();
                setNotes(response);
            } catch (err) {
                console.error('Lỗi khi fetch notes:', err);
            }
        }

        getAllNotes();
    }, [text]);

    const handleAddNote = async () => {
        if (!text.trim()) return;

        try {
            await addNote(text);  // Gửi POST request tại đây
            setText('');          // Xóa input sau khi thêm thành công (nếu cần)
            inputRef.current.focus();
        } catch (err) {
            console.error('Lỗi khi thêm note:', err);
        };
    };

    return (
        <div className={cx('container')}>
            {/* Form thêm ghi chú */}
            <div className={cx('form')}>
                <h2 className={cx('form-title')}>+ Thêm ghi chú</h2>
                <div className={cx('form-row')}>
                    <input
                        ref={inputRef}
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
            <Box
                type="primary"
                title="📒 Ghi chú gần đây:"
                className={cx('note-list')}
            >
                {notes.length === 0 ? (
                    <p style={{ fontStyle: 'italic', color: '#999' }}>
                        Chưa có ghi chú nào.
                    </p>
                ) : (
                    notes.map((note) => (
                        <div
                            key={note._id}
                            className={cx('note')}
                        >
                            {note.text}
                        </div>
                    ))
                )}
            </Box>
        </div>
    );
}

export default AddNote;