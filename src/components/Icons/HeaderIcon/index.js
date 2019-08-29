import React from 'react';
import MainRight from './MainRight';
import HomeRight from './HomeRight';
import Back from './Back';
import ProductRight from './ProductRight';
import ResetFilter from './ResetFilter';


import PropTypes from 'prop-types';
import Menu from './Menu';
const HeaderIcon = ({ name, navigation,category_id }) => {
    switch (name) {
        case 'main-right':
            return <MainRight navigation={navigation} />;
        case 'home-right':
            return <HomeRight navigation={navigation} />;
        case 'back':
            return <Back navigation={navigation} />;
        case 'product-right':
            return <ProductRight navigation={navigation} />;
        case 'reset_filter':
            return <ResetFilter navigation={navigation} category_id={category_id} />
        case 'menu':
            return <Menu navigation={navigation} />
        default:
            return null;
    }
}
HeaderIcon.propTypes = {
    name: PropTypes.string.isRequired
}

export { HeaderIcon };
