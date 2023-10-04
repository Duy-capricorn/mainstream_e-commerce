import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const sidebarItemsProducts = [];

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-menu')}>
                <div></div>
            </div>
        </div>
    );
}

export default Sidebar;
