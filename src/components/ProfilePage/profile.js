import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import SidebarProfile from '../SidebarProfile';
import HeaderProfile from '../HeaderProfile';
import Button from '../Button';
import { useEffect, useState, useLocation, useContext } from 'react';
const cx = classNames.bind(styles);

function ProfilePage() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${document.URL.slice(23)}&type=less`)
            .then((response) => response.json())
            .then((json) => {
                setData(...json.data);
            });

        console.log(data);
    }, [document.URL]);
    return (
        <div className={cx('wrapper')}>
            <HeaderProfile />
            <div className={cx('container')}>
                <SidebarProfile className={cx('sidebar')} />
                <div className={cx('content')}>
                    <div className={cx('wrapper')}>
                        <div className={cx('info')}>
                            <div className={cx('info-user')}>
                                <img src={data.avatar} alt="" className={cx('image-user')} />
                                <div className={cx('name')}>
                                    <h2 className={cx('name-user')}>{data.nickname}</h2>
                                    <h1 className={cx('nickname')}>
                                        {data.first_name} {data.last_name}
                                    </h1>

                                    <div className={cx('follow-btn')}>
                                        <Button primary className={cx('btn-follow')}>
                                            Follow
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('numbers')}>
                                <div className={cx('Following')}>
                                    <strong>{data.followings_count}</strong>
                                    <span className={cx('title')}>Followings</span>
                                </div>
                                <div className={cx('Following')}>
                                    <strong className={cx('strong')}>{data.followers_count}</strong>
                                    <span className={cx('title')}>Followers</span>
                                </div>
                                <div className={cx('Following')}>
                                    <strong>{data.likes_count}</strong>
                                    <span className={cx('title')}>Likes</span>
                                </div>
                            </div>
                            <h2 className={cx('user-bio')}>No bio yet</h2>
                        </div>

                        <div className={cx('video')}>
                            <div className={cx('video-header')}>
                                <p className={cx('videos')}>Videos</p>
                                <p className={cx('videos')}>Liked</p>
                            </div>
                            <div className={cx('video-content')}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
