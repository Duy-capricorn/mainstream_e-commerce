import classNames from "classnames/bind";
import styles from './sighup.module.scss'

const cx = classNames.bind(styles);

function signup() {
    return ( <main className={cx('wrapper')}>
        <h1>SIGN UP PAGE</h1>
    </main> );
}

export default signup;