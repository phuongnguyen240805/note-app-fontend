import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Update.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

// Giả lập dữ liệu notes (nếu chưa dùng API/backend)
const fakeNotes = [
    { id: '1', text: 'Ghi chú A', completed: false },
    { id: '2', text: 'Ghi chú B', completed: true },
];

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState(fakeNotes);
    const [text, setText] = useState('');

    useEffect(() => {
        const found = fakeNotes.find((n) => n.id === id);
        if (found) {
            setNote(found);
            setText(found.text);
        }
    }, [id]);

    const handleSave = () => {
        if (!text.trim()) return;
        // Xử lý lưu logic tại đây (API hoặc state)
        console.log('Cập nhật note:', { ...note, text });
        navigate('/'); // Quay về trang chính
    };

    if (!note) return <p className={cx('not-found')}>Không tìm thấy ghi chú.</p>;

    return (
        <div className={cx('container')}>
            <div className={cx('edit-page')}>
                <h2 className={cx('title')}>📝 Sửa ghi chú</h2>
                <textarea
                    className={cx('textarea')}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className={cx('actions')}>
                    <Button
                        onClick={handleSave}
                        className={cx('save-btn')}
                    >Lưu</Button>
                    <Button
                        primary
                        onClick={() => navigate('/')}
                        className={cx('cancel-btn')}
                    >Hủy</Button>
                </div>
            </div >
        </div >
    );
}

export default Update;
