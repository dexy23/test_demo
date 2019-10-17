import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ProductCard from './ProductCard';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
    const wrapper = shallow(<ProductCard {...props}/>);
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
    const productCardComponent = findByTestAttr(wrapper, 'product-card')
    expect(productCardComponent.length).toBe(1);
});