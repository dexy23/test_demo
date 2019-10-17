import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ProductList from './ProductList';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
    const wrapper = shallow(<ProductList {...props}/>);
    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
    const wrapper = setup();
    const productListComponent = findByTestAttr(wrapper, 'product-list')
    expect(productListComponent.length).toBe(1);
});