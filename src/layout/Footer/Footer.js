import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <footer>
                <div className={cx('footer')}>{/* <Links /> */}</div>
                <div className={cx('footer-bottom')}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <div className={cx('info')}>
                        <a href="https://github.com/Duy-capricorn">Tran Thai Duy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
