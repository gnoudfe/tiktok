import Tippy from '@tippyjs/react/headless';
import TippyToolTip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import SearchItems from '../../searchItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faEarthAmerica,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPlus,
    faVideo,
    faStore,
} from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '../assets/logos';
import Wrapper from '../Popper/Wrapper/Wrapper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import useDebounce from '../../Hooks/useDebounce';
import axios from 'axios';
import request from '../../utils/request';
const cx = classNames.bind(styles);
function Search() {
    // eslint-disable-next-line no-use-before-define
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 800);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
            .then((response) => response.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            });
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleChange = (e) => {
        const searchInputValue = e.target.value;
        if (!searchInputValue.startsWith(' ')) {
            setSearchValue(searchInputValue);
        }
    };

    return (
        <div>
            <Tippy
                interactive
                onClickOutside={() => setShowResult(false)}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h4 className={cx('accounts')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <SearchItems key={result.id} data={result} />
                            ))}
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        className={cx('input')}
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!loading && searchValue && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
