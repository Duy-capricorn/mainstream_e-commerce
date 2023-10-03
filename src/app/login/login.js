import classNames from 'classnames/bind';
import styles from './login.module.scss';

const cx = classNames.bind(styles);

function login() {
    return (
        <main className={cx('wrapper')}>
            <h1>Login page!</h1>
        </main>
    );
}

export default login;
