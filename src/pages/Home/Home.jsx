import { useCallback, useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Box from '~/components/Box';
import NoteItem from '~/components/NoteItem';
import { getNotes, deleteNote, patchNote } from '~/services';
import { NoteContext } from '~/hooks/NoteContext';


const cx = classNames.bind(styles);

function Home() {

    const [notes, setNotes] = useState([]);
    const { selectedNoteId, setSelectedNoteId } = useContext(NoteContext);

    // Fetch all notes
    const getAllNotes = useCallback(async () => {
        try {
            const response = await getNotes();
            setNotes(response);
        } catch (err) {
            console.error('Lỗi khi fetch notes:', err);
        }
    }, []);

    // Xoá note
    const handleDeleteNote = useCallback(async (id) => {
        try {
            await deleteNote(id);
            await getAllNotes(); // Fetch lại
            setSelectedNoteId(null); // Reset lại state
        } catch (err) {
            console.error('Lỗi khi xoá note:', err);
        }
    }, [getAllNotes, setSelectedNoteId]);

    // Load notes lần đầu
    useEffect(() => {
        getAllNotes();
    }, [getAllNotes]);

    // Nếu có selectedNoteId thì xoá
    useEffect(() => {
        if (selectedNoteId) {
            handleDeleteNote(selectedNoteId);
        }
    }, [selectedNoteId, handleDeleteNote]);

    const handleComplete = async (id) => {
        await patchNote(id, { isCompleted: true });
        await getAllNotes();
    };

    const handleRestore = async (id) => {
        await patchNote(id, { isCompleted: false });
        await getAllNotes();
    };

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
                                        onComplete={handleComplete}
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
                                        onRestore={handleRestore}
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
