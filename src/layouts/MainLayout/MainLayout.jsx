import classNames from "classnames/bind";

import styles from './MainLayout.module.scss';
import Header from "../components/Header";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className="wrapper">
            {/* Header */}
            <Header/>

            {/* Main content */}
            <main className={cx('main')}>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t text-center text-sm text-gray-400 py-4">
                &copy; {new Date().getFullYear()} NoteApp. All rights reserved.
            </footer>
        </div>
    );
}

export default MainLayout;