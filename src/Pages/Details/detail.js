import styles from './Details.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Video from '../../components/Content/Video';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import routes from '../../config/route';
const cx = classNames.bind(styles);

function Details() {
    const [content, setContent] = useState([]);
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/@trananhquan0704`)
            .then((res) => res.json())
            .then((res) => setContent(res.data));
    });

    return (
        <div className={cx('wrapper')}>
            <Link to={routes.home}>
                <FontAwesomeIcon icon={faXmark} className={cx('x-btn')} />
            </Link>
            <div className={cx('tiktok-video')}>
                {content.videos.map((video, index) => (
                    <Video src={video.file_url} key={index} className={cx('video-details')} />
                ))}
            </div>

            <div className={cx('tiktok-info')}>
                <div className={cx('info-header')}>
                    <img src={content.avatar} alt="" className={cx('images')} />
                    <div className={cx('name')}>
                        <span className={cx('username')}>{content.nickname}</span>
                        <span className={cx('nickname')}>
                            {content.first_name} {content.last_name}
                        </span>
                    </div>
                    <Button outline className={cx('btn-detail')}>
                        Follow
                    </Button>
                </div>

                <div className={cx('tiktok-content')}>
                    <div className={cx('browse-video')}>
                        <span className={cx('spanText')}>Voi con ở bản đônnn</span>
                    </div>
                    <h4 className={cx('browse-music')}>{content.bio}</h4>
                </div>
                <div className={cx('TiktokComment')}></div>
            </div>
        </div>
    );
}

export default Details;
