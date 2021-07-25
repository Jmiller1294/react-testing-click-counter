import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

//function to create a shallow wrapper fro App component
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, 'counter-display')
  expect(counter.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

test('clicking button increments counter display', () => {
  //call setup function
  const wrapper = setup();

  //find the button
  const button = findByTestAttr(wrapper, 'increment-button');

  //simulate a button click
  button.simulate('click');

  //find count display and test whether the number was incremented
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});

test('clicking button decrements counter display', () => {
  const wrapper = setup();

  const button = findByTestAttr(wrapper, 'decrement-button');

  button.simulate('click');

  const count = findByTestAttr(wrapper, 'count').text();

 
});

