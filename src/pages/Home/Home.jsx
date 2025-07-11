import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Box from '~/components/Box';
import NoteItem from '~/components/NoteItem';

const cx = classNames.bind(styles);

function Home() {

    const datas = [
        {
            id: 1,
            text: "phuong fullstack web devoloper"
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

    return (
        <div className={cx('container')}>
            {/* Form thêm ghi chú */}
            <div className={cx('banner')}>
                <span className={cx('banner-text')}>📝 Ghi chú mỗi ngày, sắp xếp cuộc sống ✨</span>
            </div>

            {/* Khối hiển thị danh sách ghi chú chia làm 2 cột */}
            <div className={cx('columns')}>
                {/* Cột trái - Ghi chú đang làm */}
                <Box
                    type="primary"
                    title="📌 Ghi chú đang làm."
                >
                    <div className={cx('note-list')}>
                        {notes.filter((n) => !n.completed).length === 0 ? (
                            <p className={cx('empty')}>Không có ghi chú nào.</p>
                        ) : (
                            notes
                                .filter((n) => !n.completed)
                                .map((note) => (
                                    <NoteItem
                                        key={note.id}
                                        note={note}
                                        type="primary"
                                    />
                                ))
                        )}
                    </div>
                </Box>

                {/* Cột phải - Ghi chú đã làm */}
                <Box
                    type="secondary"
                    title="✅ Đã hoàn thành"
                >
                    <div className={cx('note-list')}>
                        {notes.filter((n) => !n.completed).length === 0 ? (
                            <p className={cx('empty')}>Chưa có ghi chú nào được hoàn thành.</p>
                        ) : (
                            notes
                                .filter((n) => !n.completed)
                                .map((note) => (
                                    <NoteItem
                                        key={note.id}
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