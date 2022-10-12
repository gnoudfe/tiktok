import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Popper/Wrapper/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview';
import { Link } from 'react-router-dom';
import routes from '../../config/route';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <Wrapper>
                    <AccountPreview data={data} />
                </Wrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-25, -10]} placement="bottom" delay={[900, 0]} render={renderPreview}>
                <Link to={`/@${data?.nickname}`}>
                    <div className={cx('account-item')}>
                        <img src={data.avatar} alt="avatar" className={cx('avatar')} />

                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong> {data.nickname}</strong>
                                {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                            </p>
                            <p className={cx('name')}>{data.lastname}</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
