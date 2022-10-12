/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './FooterSidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <a href="https://www.tiktok.com/about?lang=en" target="_blank" rel="noreferrer">
                    About
                </a>
                <a href="https://www.tiktok.com/browse" target="_blank" rel="noreferrer">
                    TikTok Browse
                </a>
                <a href="https://newsroom.tiktok.com/vi-vn/" target="_blank" rel="noreferrer">
                    Newsroom
                </a>
                <a href="https://www.tiktok.com/about/contact?lang=en" target="_blank" rel="noreferrer">
                    Contact{' '}
                </a>
                <a href="https://careers.tiktok.com/" target="_blank" rel="noreferrer">
                    Careers
                </a>
                <a href="https://www.bytedance.com/" target="_blank" rel="noreferrer">
                    ByteDance
                </a>
            </div>

            <div className={cx('content')}>
                <a href="https://www.tiktok.com/forgood" target="_blank" rel="noreferrer">
                    TikTok for Good
                </a>
                <a
                    href="https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1"
                    target="_blank"
                    rel="noreferrer"
                >
                    Advertise
                </a>
                <a href="https://developers.tiktok.com/?refer=tiktok_web" target="_blank" rel="noreferrer">
                    Developers
                </a>
                <a href="https://www.tiktok.com/transparency/en/" target="_blank" rel="noreferrer">
                    Transparency
                </a>
                <a href="https://www.tiktok.com/tiktok-rewards/eligibility/" target="_blank" rel="noreferrer">
                    TikTok Rewards
                </a>
            </div>

            <div className={cx('content')}>
                <a href="https://support.tiktok.com/en" target="_blank" rel="noreferrer">
                    Help
                </a>
                <a href="https://www.tiktok.com/safety/en" target="_blank" rel="noreferrer">
                    Safety
                </a>
                <a
                    href="https://www.tiktok.com/legal/terms-of-service-row?lang=vi&selection=true"
                    target="_blank"
                    rel="noreferrer"
                >
                    Terms
                </a>
                <a href="https://www.tiktok.com/legal/page/row/privacy-policy/en" target="_blank" rel="noreferrer">
                    Privacy
                </a>
                <a href="https://www.tiktok.com/creators/creator-portal/en-us/" target="_blank" rel="noreferrer">
                    Creator Portal
                </a>
                <a href="https://www.tiktok.com/community-guidelines?lang=en" target="_blank" rel="noreferrer">
                    Community Guidlines
                </a>
            </div>

            <p> © 2022 TikTok </p>
        </div>
    );
}

export default FooterSidebar;
