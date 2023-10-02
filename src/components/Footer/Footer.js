import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <footer>
                <div className={cx('footer')}>
                    <div className={cx('grid')}>
                        <span>@Copyright belong to Tran Thai Duy - B2000104 - CTU</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
