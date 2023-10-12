import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import Sidebar from '@/layout/Sidebar';

const cx = classNames.bind(styles);

export default function Layout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            <div className={cx('wrapper')}>
                {/* Include shared UI here e.g. a header or sidebar */}
                <Sidebar />
                {children}
            </div>
        </section>
    );
}
