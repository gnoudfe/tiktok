import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../Button';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <div className={cx('wrapper')}>
            <Button leftIcon={data.icons} className={classes} onClick={onClick} to={data.to}>
                <span className={cx('title')}>{data.title}</span>
            </Button>
        </div>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItems;
