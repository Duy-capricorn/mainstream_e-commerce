import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <h1>Product's page</h1>
        </div>
    );
}

export default Product;
