import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Video from './Video';
import { Link } from 'react-router-dom';
import routes from '../../config/route';
const cx = classNames.bind(styles);

function Content() {
    const [content, setContent] = useState([]);
    const [pagination, setPagination] = useState(1);
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=${pagination}`)
            .then((response) => response.json())
            .then((json) => setContent((prev) => [...prev, ...json.data]));
    }, [pagination]);
    useEffect(() => {
        const handler = setTimeout(() => {
            if (pagination <= 3) {
                setPagination((prev) => prev + 1);
            }
        }, 10000);

        return () => clearTimeout(handler);
    }, [pagination]);

    return (
        <div className={cx('wrapper')}>
            {content.map((data, index) => (
                <div className={cx('video')} key={index}>
                    <div className={cx('account')}>
                        <Link to={`/@${data.user.nickname}`}>
                            <img className={cx('avatar')} alt="avatar" src={data.user.avatar} />
                        </Link>

                        <div className={cx('info')}>
                            <div className={cx('name')}>
                                <span className={cx('nickname')}>{data.user.nickname}</span>

                                <p className={cx('username')}>{data.user.last_name}</p>
                            </div>

                            <span className={cx('description')}> {data.description}</span>
                        </div>

                        <div>
                            <Button outline className={cx('follow')}>
                                Follow
                            </Button>
                        </div>
                    </div>

                    <div className={cx('content')}>
                        <Video src={data.file_url} index={index} />

                        <div className={cx('interaction')}>
                            <button>
                                <span>
                                    <FontAwesomeIcon icon={faShare} />
                                </span>
                                <p>{data.shares_count}</p>
                            </button>
                            <button>
                                <span>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </span>
                                <p>{data.comments_count}</p>
                            </button>
                            <button>
                                <span>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <p>{data.likes_count}</p>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Content;
