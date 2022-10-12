import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Wrapper from '../Popper/Wrapper/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faQrcode, faUser, faWalkieTalkie, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faApple, faFacebook, faGoogle, faInstagram, faLine, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Button from '../Button';
const cx = classNames.bind(styles);

const registerLoginForm = [
    {
        title: 'Log in to TikTok',
        format: [
            {
                icon: <FontAwesomeIcon icon={faQrcode} />,
                content: 'Use QR code',
            },
            {
                icon: <FontAwesomeIcon icon={faUser} />,
                content: 'Use phone / email / username',
            },
            {
                icon: <FontAwesomeIcon icon={faFacebook} />,
                content: 'Continue with Facebook',
            },
            {
                icon: <FontAwesomeIcon icon={faGoogle} />,
                content: 'Continue with Google',
            },
            {
                icon: <FontAwesomeIcon icon={faTwitch} />,
                content: 'Continue with Twitter',
            },
            {
                icon: <FontAwesomeIcon icon={faLine} />,
                content: 'Continue with LINE',
            },
            {
                icon: <FontAwesomeIcon icon={faWalkieTalkie} />,
                content: 'Continue with KakaoTalk',
            },
            {
                icon: <FontAwesomeIcon icon={faApple} />,
                content: 'Continue with Apple',
            },
            {
                icon: <FontAwesomeIcon icon={faInstagram} />,
                content: 'Continue with Instagram',
            },
        ],
    },

    {
        title: 'Đăng ký TikTok',
        format: [
            {
                icon: <FontAwesomeIcon icon={faUser} />,
                content: 'Số điện thoại / Email / TikTok ID',
            },
            {
                icon: <FontAwesomeIcon icon={faFacebook} />,
                content: 'Tiếp tục với Facebook',
            },
            {
                icon: <FontAwesomeIcon icon={faGoogle} />,
                content: 'Tiếp tục với Google',
            },
        ],
    },
];

const Register = ({ className, children }) => {
    const [form, setForm] = useState([registerLoginForm[0]]);
    const current = form[form.length - 1];
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div>
            <Wrapper className={classes}>
                {children}
                <div className={cx('inner')}>
                    <h2 className={cx('header')}>{current.title}</h2>
                    {current.format.map((index, value) => (
                        <Button className={cx('button')} key={value}>
                            <span className={cx('icon')}>{index.icon}</span>
                            <span className={cx('content')}>{index.content}</span>
                        </Button>
                    ))}
                </div>
                {current.title.startsWith('Log in to TikTok') && (
                    <div className={cx('footer')}>
                        <span>Don't have an account?</span>
                        <button className={cx('btn-transfrom')} onClick={() => setForm([registerLoginForm[1]])}>
                            Sign up
                        </button>
                    </div>
                )}
                {current.title.startsWith('Đăng ký TikTok') && (
                    <>
                        <span className={cx('icon-down')}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        <div className={cx('policy')}>
                            <p className="privacy">
                                By continuing, you agree to TikTok’s
                                <a
                                    href="https://www.tiktok.com/legal/terms-of-service-row?lang=en&selection=true"
                                    target="_blank"
                                    className={cx('termsofservices')}
                                    rel="noreferrer"
                                >
                                    Terms of Service
                                </a>
                                and confirm that you have read TikTok’s
                                <a
                                    href="https://www.tiktok.com/legal/page/row/privacy-policy/en"
                                    target="_blank"
                                    className={cx('termsofservices')}
                                    rel="noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                        <div className={cx('footer')}>
                            <span> Already have an account?</span>
                            <button className={cx('btn-transfrom')} onClick={() => setForm([registerLoginForm[0]])}>
                                Log in
                            </button>
                        </div>
                    </>
                )}
            </Wrapper>
        </div>
    );
};

export default Register;
