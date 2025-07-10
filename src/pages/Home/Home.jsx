import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Box from '~/components/Box';


const cx = classNames.bind(styles);

function Home() {

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
                    notes={notes}
                    title="📌 Ghi chú đang làm."
                    empty="Không có ghi chú nào."
                />

                {/* Cột phải - Ghi chú đã làm */}
                <Box
                    type="secondary"
                    notes={notes}
                    title="✅ Đã hoàn thành"
                    empty="Chưa có ghi chú nào được hoàn thành."
                    completed
                />
            </div>

        </div>
    );
}

export default Home;