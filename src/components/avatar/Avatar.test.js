import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('<Avatar />', () => {
  const avatarComponent = shallow(<Avatar />);
  it('should render', () => {
    expect(avatarComponent.length).toBe(1);
  });
  it('should have an img', () => {
    expect(avatarComponent.find('img').length).toBe(1);
  });
  it('should match snapshot', () => {
    expect(avatarComponent).toMatchSnapshot();
  });
});