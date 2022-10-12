import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';

const cx = classNames.bind(styles);
function MenuSidebarItem({ to, title, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-sidebar-items', { active: nav.isActive })} end to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuSidebarItem;
