import classNames from 'classnames/bind';
import routes from '../../../config/route';
import Button from '../../Button';
import styles from './LoginSidebar.module.scss';

const cx = classNames.bind(styles);

function LoginSidebar({ title }) {
    return (
        <div className={cx('login-sidebar')}>
            <p className={cx('login-watch')}>{title}</p>

            <Button outline large className={cx('button-login-sidebar')} to="/login">
                Log in
            </Button>
        </div>
    );
}

export default LoginSidebar;
