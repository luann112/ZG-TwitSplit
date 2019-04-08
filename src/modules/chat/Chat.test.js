import { shallow, mount } from 'enzyme';
import Chat from './Chat';
import ChatBox from './components/chatBox';
import UsersBox from './components/usersBox';

describe('<Chat />', () => {
  const chatComponent1 = shallow(<Chat />);
  it('should render', () => {
    expect(chatComponent1.length).toBe(1);
  });
  it('should match snapshot', () => {
    expect(chatComponent1).toMatchSnapshot();
  });
});