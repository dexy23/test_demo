import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
    const wrapper = shallow(<App {...props}/>);
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
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.length).toBe(1);
});

test('renders counter display', ()=> {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', ()=> {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
});

describe('Increment', () => {
    test('renders increment button', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'increment-button');
        expect(button.length).toBe(1);
    })
    test('clicking button increments counter display', () => {
        const counter = 7;
        const wrapper = setup(null, { counter });
    
        const button = findByTestAttr(wrapper, 'increment-button');
        button.simulate('click');
    
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter + 1);
    });
})

describe('Decrement', () => {
    test('renders decrement button', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'decrement-button');
        expect(button.length).toBe(1);
    })
    test('clicking button decrements counter display', () => {
        const counter = 5;
        const wrapper = setup(null, { counter });
    
        const button = findByTestAttr(wrapper, 'decrement-button');
        button.simulate('click');
    
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter - 1);
    })
    test('error does not show when not needed', () =>{
        const wrapper = setup();
        const errorDiv = findByTestAttr(wrapper, 'error-message');

        const errorHasHiddenClass = errorDiv.hasClass('hidden');
        expect(errorHasHiddenClass).toBe(true);
    })
})

describe('counter is 0 and decrement is clicked', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup();

        const button = findByTestAttr(wrapper, 'decrement-button');
        button.simulate('click');
        wrapper.update();
    })
    test('error shows', () => {
        const errorDiv = findByTestAttr(wrapper, 'error-message');
        const errorHasHiddenClass = errorDiv.hasClass('hidden');
        expect(errorHasHiddenClass).toBe(false);
    })
    test('counter still displays 0', () => {
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(0);
    })
    test('clicking increment clears the error', () => {
        const button = findByTestAttr(wrapper, 'increment-button');
        button.simulate('click');

        const errorDiv = findByTestAttr(wrapper, 'error-message');
        const errorHasHiddenClass = errorDiv.hasClass('hidden');
        expect(errorHasHiddenClass).toBe(true);
    })
})