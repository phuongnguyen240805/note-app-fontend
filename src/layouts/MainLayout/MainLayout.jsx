import classNames from "classnames/bind";

import styles from './MainLayout.module.scss';
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className="wrapper">
            {/* Header */}
            <Header />

            {/* Main content */}
            <main className={cx('main')}>
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default MainLayout;