import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Box from '~/components/Box';
import NoteItem from '~/components/NoteItem';
import request from '~/utils/request';

const cx = classNames.bind(styles);

function Home() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getNotes() {
            try {
                const response = await request.get('/');
                setNotes(response.data);
            } catch (err) {
                console.error('Lỗi khi fetch notes:', err);
            }
        }

        getNotes();
    }, []);

    return (
        <div className={cx('container')}>
            {/* Banner trang trí */}
            <div className={cx('banner')}>
                <span className={cx('banner-text')}>
                    📝 Ghi chú mỗi ngày, sắp xếp cuộc sống ✨
                </span>
            </div>

            {/* Khối 2 cột */}
            <div className={cx('columns')}>
                {/* Ghi chú đang làm */}
                <Box
                    type="primary"
                    title="📌 Ghi chú đang làm."
                >
                    <div className={cx('note-list')}>
                        {notes.filter((n) => !n.isCompleted).length === 0 ? (
                            <p className={cx('empty')}>Không có ghi chú nào.</p>
                        ) : (
                            notes
                                .filter((n) => !n.isCompleted)
                                .map((note) => (
                                    <NoteItem
                                        key={note._id}
                                        note={note}
                                        type="primary"
                                    />
                                ))
                        )}
                    </div>
                </Box>

                {/* Ghi chú đã hoàn thành */}
                <Box
                    type="secondary"
                    title="✅ Đã hoàn thành"
                >
                    <div className={cx('note-list')}>
                        {notes.filter((n) => n.isCompleted).length === 0 ? (
                            <p className={cx('empty')}>Chưa có ghi chú nào được hoàn thành.</p>
                        ) : (
                            notes
                                .filter((n) => n.isCompleted)
                                .map((note) => (
                                    <NoteItem
                                        key={note._id}
                                        note={note}
                                        type="secondary"
                                        completed
                                    />
                                ))
                        )}
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default Home;
