import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import NavLink from '@/components/NavLink';

const cx = classNames.bind(styles);

function MenuItem({ title, href, icon }) {
    return (
        <NavLink href={href} className={cx('menu-item')}>
            {icon}
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
