import classNames from 'classnames/bind';
import MenuSidebar from './MenuSidebar';
import MenuSidebarItem from './MenuSidebar/MenuSidebarItem';
import routes from '../../config/route';
import styles from './SidebarProfile.module.scss';
import {
    Homeicon,
    UserGroupIcon,
    UserGroupIconActive,
    LiveIcon,
    HomeActiveIcon,
    LiveActionIcon,
} from '../assets/logos';
import SuggestedAccounts from '../SuggestedAccounts';
import LoginSidebar from './LoginSidebar';
import Discover from './Discover';
import FooterSidebar from './FooterSidebar';
const cx = classNames.bind(styles);
function Sidebar({ className }) {
    return (
        <div className={cx('wrapper', className)}>
            <MenuSidebar>
                <MenuSidebarItem title="For You" to={routes.home} icon={<HomeActiveIcon />} activeIcon={<Homeicon />} />
                <MenuSidebarItem
                    title="Following"
                    to={routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuSidebarItem title="LIVE" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActionIcon />} />
            </MenuSidebar>
            <LoginSidebar title="Log in to follow creators, like videos, and view comments." />
            <SuggestedAccounts title="Suggested accounts" />
            <Discover />
            <FooterSidebar />
        </div>
    );
}

export default Sidebar;
