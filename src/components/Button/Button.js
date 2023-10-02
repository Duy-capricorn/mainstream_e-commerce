import classNames from 'classnames/bind';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    className,
    onClick,
    outline = false,
    primary = false,
    text = false,
    disable = false,
    large = false,
    small = false,
    rounded = false,
    AddProduct = false,
    SingUp = false,
    leftIcon,
    rightIcon,
    children,
    content,
    ...passProps
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Component = 'a';
    } else if (href) {
        props.href = href;
        Component = Link;
    }

    const classes = cx('wrapper', {
        primary,
        text,
        outline,
        small,
        large,
        disable,
        AddProduct,
        rounded,
        leftIcon,
        [className]: className,
    });

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (text) {
        content = <FontAwesomeIcon icon={faPlus} />;
    } else {
        content = '';
    }

    return (
        <Component className={classes} {...props} onClick={onClick}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

// Button.propTypes = {
//     to: PropTypes.string,
//     href: PropTypes.string,
//     content: PropTypes.string,
//     text: PropTypes.bool,
//     primary: PropTypes.bool,
//     outline: PropTypes.bool,
//     disable: PropTypes.bool,
//     large: PropTypes.bool,
//     small: PropTypes.bool,
//     rounded: PropTypes.bool,
//     AddProduct: PropTypes.bool,
//     children: PropTypes.node.isRequired,
//     leftIcon: PropTypes.node,
//     rightIcon: PropTypes.node,
//     onClick: PropTypes.func,
// };

export default Button;
