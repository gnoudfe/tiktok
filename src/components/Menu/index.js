import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Popper/Wrapper/Wrapper';
import MenuItems from './MenuItems';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    console.log(current);
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    const handleBackToFirstMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('more-lists')} tabIndex="-1" {...attrs}>
            <Wrapper>
                {history.length > 1 && <HeaderMenu title={current.title} onBack={handleBackToFirstMenu} />}
                <div className={cx('menu-scrollable')}> {renderItems()}</div>
            </Wrapper>
        </div>
    );

    const handleResetToFirstMenu = () => setHistory((prev) => prev.slice(0, 1));
    return (
        <Tippy
            delay={[0, 300]}
            offset={[20, 15]}
            interactive
            hideOnClick={false}
            onHide={handleResetToFirstMenu}
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};

export default Menu;
