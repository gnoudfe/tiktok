import classNames from 'classnames/bind';
import Button from '../../Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img src={data.avatar} alt="" className={cx('avatar')} />
                <div>
                    <Button primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong> {data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                </p>
                <p className={cx('name')}>{data.lastname}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('label')}>Followers</span>

                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
