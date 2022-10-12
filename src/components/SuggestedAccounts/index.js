import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function SuggestedAccounts({ title }) {
    const [account, setAccount] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    useEffect(() => {
        if (seeAll) {
            fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=20')
                .then((response) => response.json())
                .then((json) => setAccount(json.data));
        } else {
            fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5')
                .then((response) => response.json())
                .then((json) => setAccount(json.data));
        }

        return;
    }, [seeAll]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('suggested-title')}>{title}</p>
            {account.map((item, index) => (
                <AccountItem key={index} data={item} />
            ))}
            <div className={cx('more-btn')}>
                {!seeAll && (
                    <div onClick={() => setSeeAll(true)} className={cx('seeall')}>
                        See all
                    </div>
                )}
                {seeAll && (
                    <div onClick={() => setSeeAll(false)} className={cx('seeall')}>
                        See less
                    </div>
                )}
            </div>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
