import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../assets/images';
import { MessageIcon, InboxIcon, userIcon } from '../assets/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faEarthAmerica,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPlus,
    faVideo,
    faStore,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import TippyToolTip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Button from '../Button';
import Search from '../Search';
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import routes from '../../config/route';
import Register from '../Register';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Header({ href, state, className }) {
    const currentUse = false;
    const MENU_ITEMS = [
        {
            icons: <FontAwesomeIcon icon={faEarthAmerica} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icons: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
        },
        {
            icons: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard Shortcuts',
        },
    ];
    const USER_ITEMS = [
        {
            icons: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            // eslint-disable-next-line no-undef
            to: '/@:nickname',
        },

        {
            icons: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icons: <FontAwesomeIcon icon={faVideo} />,
            title: 'Live Studio',
            to: '/live',
        },
        {
            icons: <FontAwesomeIcon icon={faStore} />,
            title: 'Business Suite',
            to: '/business',
        },
        {
            icons: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icons: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
            to: '/logout',
        },
    ];

    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo tiktok */}
                    <Link to={routes.home} className={cx('logo')}>
                        <img src={images.logo} alt="titkok-logo" className={cx('logo')} />
                    </Link>
                    {/* Search */}
                    <Search />
                    {/* actions */}

                    <div className={cx('actions')}>
                        {currentUse ? (
                            <>
                                <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} to="upload">
                                    Upload
                                </Button>

                                <TippyToolTip content="Messages" placement="bottom" delay={[0, 300]}>
                                    <Link to="/messages" className={cx('logo-icon-actions')}>
                                        <span className={cx('badge')}>1</span>
                                        <MessageIcon />
                                    </Link>
                                </TippyToolTip>
                                <TippyToolTip content="Inbox" placement="bottom" delay={[0, 300]}>
                                    <Link to="/inbox" className={cx('logo-icon-actions')}>
                                        <InboxIcon />
                                    </Link>
                                </TippyToolTip>
                            </>
                        ) : (
                            <>
                                <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={handleShowLoginForm}>
                                    Upload
                                </Button>
                                <Button primary onClick={handleShowLoginForm}>
                                    Log in
                                </Button>
                            </>
                        )}

                        <Menu items={currentUse ? USER_ITEMS : MENU_ITEMS}>
                            {currentUse ? (
                                <img
                                    src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                                    alt=""
                                    className={cx('avatar-image')}
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>

            {showLoginForm && (
                <Register className={cx('registerLoginForm')}>
                    <button
                        onClick={() => {
                            setShowLoginForm(false);
                        }}
                        className={cx('clear')}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </Register>
            )}

            {showLoginForm && <div className={cx('overlay')}></div>}
        </>
    );
}

export default Header;
