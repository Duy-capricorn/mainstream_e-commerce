'use client';
import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faLanguage,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Search from '@/components/Search';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <Link href={'/'} className={cx('logo')}>
                    Ecommerce
                </Link>
                <div className={cx('navbar-option')}>
                    <Link href={'/'}>Showcase</Link>
                    <Link href={'/'}>Docs</Link>
                    <Link href={'/product'}>Product</Link>
                    <Link href={'/'}>Analytics</Link>
                    <Link href={'/'}>Template</Link>
                    <Link href={'/'}>Enterprise</Link>
                </div>

                <div className={cx('search')}>
                    <Search />
                </div>

                {!!isLogin ? (
                    <div className={cx('action')}>
                        <Button className={cx('sing-up')} href={'/signup'} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                            Sign up
                        </Button>

                        <Button primary>Log in</Button>

                        <Menu items={MENU_ITEMS}>
                            <button className={cx('menu-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Header;
