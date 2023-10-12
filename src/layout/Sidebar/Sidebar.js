import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const sidebarItemsProducts = [];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem href={'/'}></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
