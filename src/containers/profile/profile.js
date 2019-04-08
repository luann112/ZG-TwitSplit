import { connect } from 'react-redux';
import Profile from '../../components/profile';

const mapStateToProps = ({ auth }) => ({
  userId: auth.userId,
  userName: auth.userName
});

export default connect(mapStateToProps)(Profile);