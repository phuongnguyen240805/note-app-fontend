import { useState } from 'react';
import styles from './Home.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {

    const [text, setText] = useState('');
    const [notes, setNotes] = useState([]);

    const handleAddNote = () => {
        if (!text.trim()) return;
        const newNote = {
            id: Date.now(),
            text,
            completed: false,
        };
        setNotes([newNote, ...notes]);
        setText('');
    };

    const handleDelete = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const handleToggleDone = (id) => {
        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, completed: !note.completed } : note
            )
        );
    };

    return (
        <div className={cx('container')}>
            {/* Form thêm ghi chú */}
            <div className={cx('banner')}>
                <span className={cx('banner-text')}>📝 Ghi chú mỗi ngày, sắp xếp cuộc sống ✨</span>
            </div>

            {/* Khối hiển thị danh sách ghi chú chia làm 2 cột */}
            <div className={cx('columns')}>
                {/* Cột trái - Ghi chú đang làm */}
                <div className={cx('first-column')}>
                    <h3 className={cx('section-title')}>📌 Ghi chú đang làm</h3>
                    <div className={cx('note-list')}>
                        {notes.filter((n) => !n.completed).length === 0 ? (
                            <p className={cx('empty')}>Không có ghi chú nào.</p>
                        ) : (
                            notes
                                .filter((n) => !n.completed)
                                .map((note) => (
                                    <div key={note.id} className={cx('note-card')}>
                                        <span>{note.text}</span>
                                        <div className={cx('actions')}>
                                            <button onClick={() => handleToggleDone(note.id)} title="Hoàn thành">✅</button>
                                            <button title="Sửa (chưa hỗ trợ)">📝</button>
                                            <button onClick={() => handleDelete(note.id)} title="Xoá">❌</button>
                                        </div>
                                    </div>
                                ))
                        )}
                    </div>
                </div>

                {/* Cột phải - Ghi chú đã làm */}
                <div className={cx('second-column')}>
                    <h3 className={cx('section-title')}>✅ Đã hoàn thành</h3>
                    <div className={cx('note-list')}>
                        {notes.filter((n) => n.completed).length === 0 ? (
                            <p className={cx('empty')}>Chưa có ghi chú nào được hoàn thành.</p>
                        ) : (
                            notes
                                .filter((n) => n.completed)
                                .map((note) => (
                                    <div key={note.id} className={`${cx('note-card')} ${cx('completed')}`}>
                                        <span>{note.text}</span>
                                        <div className={cx('actions')}>
                                            <button onClick={() => handleToggleDone(note.id)} title="Hoàn tác">↩️</button>
                                            <button title="Sửa (chưa hỗ trợ)">📝</button>
                                            <button onClick={() => handleDelete(note.id)} title="Xoá">❌</button>
                                        </div>
                                    </div>
                                ))
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;