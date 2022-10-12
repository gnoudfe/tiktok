import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import { useRef } from 'react';
import ControlVideo from '../ControlVideo';
const cx = classNames.bind(styles);

const Video = ({ src, index, className }) => {
    const refVideo = useRef();
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <video loop ref={refVideo}>
                <source src={src} type="video/mp4" />
            </video>
            <ControlVideo refVideo={refVideo} index={index} />
        </div>
    );
};

export default Video;
