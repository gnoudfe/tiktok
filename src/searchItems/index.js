import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchItems.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function SearchItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img src={data.avatar} alt={data.nickname} className={cx('image')} />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('tick')} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

SearchItems.propType = {
    data: PropTypes.object.isRequired,
};

export default SearchItems;
