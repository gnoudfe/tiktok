import styles from './FollowPage.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

const PAGE_NUMBER = 1;
function FollowPage() {
    const [state, setState] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=${page}&per_page=20`)
            .then((res) => res.json())
            .then((json) => setState((prev) => [...prev, ...json.data]));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    const scrollToEnd = () => {
        setPage(page + 1);
    };
    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd();
        }
    };
    return (
        <div className={cx('wrapper')}>
            {state.length > 0 &&
                state.map((follow, index) => (
                    <div className={cx('follow')} key={index}>
                        <img src={follow.avatar} alt="" className={cx('image')} />
                        <div className={cx('info')}>
                            <img src={follow.avatar} alt="avatar-following" className={cx('img-avatar')} />
                            <div className={cx('name')}>
                                <span className={cx('fullname')}>
                                    {follow.first_name} {follow.last_name}
                                </span>
                                <span className={cx('nickname')}>{follow.nickname}</span>
                            </div>

                            <Button primary className={cx('btn-follow')}>
                                Follow
                            </Button>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default FollowPage;
