import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faX } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import AccountItem from '@/components/AccountItem';
import PopperWrapper from '@/components/Popper/Wrapper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    // useEffect cho thanh công cụ search
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive={true}
                // visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-label')}>Relates</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('Search')}>
                    <input
                        placeholder="Search for a course"
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    ></input>

                    <button className={cx('search-clear')}>
                        <FontAwesomeIcon icon={faX} />
                    </button>

                    <button className={cx('search-loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
