import classNames from 'classnames/bind';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
    return (
        <main className={cx('wrapper')}>
            <h2>HOME PAGE</h2>
        </main>
    );
}
