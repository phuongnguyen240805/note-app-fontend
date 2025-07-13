import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Update.module.scss';
import Button from '~/components/Button';
import { getNoteById, updateNote } from '~/services';

const cx = classNames.bind(styles);

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');

    // get note text
    useEffect(() => {
        async function getNote() {
            try {
                const data = await getNoteById(id);
                setText(data?.text);
            } catch (err) {
                console.error('Lỗi khi fetch note theo ID:', err);
            }
        };

        if (id) getNote();
    }, [id]);

    // handle update data
    const handleSave = () => {
        if (!text.trim()) return;

        async function updateNoteById() {
            try {
                return await updateNote(id, text);
            } catch (err) {
                console.error('Lỗi khi fetch note theo ID:', err);
            }
        };

        if (id) updateNoteById();
        navigate('/');
    };

    // if (!note) return <p className={cx('not-found')}>Không tìm thấy ghi chú.</p>;

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
