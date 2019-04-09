import { shallow } from 'enzyme';
import Home from './Home';
import UserTile from './components/userTile';

describe('<Home />', () => {
  const wrapper = shallow(<Home />);
  it('should render', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
