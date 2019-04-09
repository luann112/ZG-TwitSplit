import { shallow } from 'enzyme';
import Chat from './Chat';

describe('<Chat />', () => {
  const chatComponent1 = shallow(<Chat />);
  it('should render', () => {
    expect(chatComponent1.length).toBe(1);
  });
  it('should match snapshot', () => {
    expect(chatComponent1).toMatchSnapshot();
  });
});
