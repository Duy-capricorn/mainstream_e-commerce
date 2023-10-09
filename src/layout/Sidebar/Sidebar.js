import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu/Menu';
import MenuItem from '@/layout/Sidebar/Menu/MenuItem';

const cx = classNames.bind(styles);

const sidebarItemsProducts = [];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="" />
                <MenuItem />
                <MenuItem />
            </Menu>
        </aside>
    );
}

export default Sidebar;
