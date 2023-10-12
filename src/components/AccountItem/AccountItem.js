import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Image from '@/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/277586515_674067960539266_7776752452895151417_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=L6XkEDVV-EsAX8CNc8z&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfAsirZuG9cxzQa_wq8ZN9KISZ2kKUSoVvDv_ivAbu8xEA&oe=651F2A8F"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Trần Thái Duy</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>tranthaiduy</span>
            </div>
        </div>
    );
}

export default AccountItem;
