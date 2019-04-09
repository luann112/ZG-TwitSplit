import { connect } from 'react-redux';
import TopNavBar from '../../components/topNavBar';
import { actions } from 'src/reducers/usersBox';

const mapStateToProps = ({ auth }) => ({
  userId: auth.userId
});
const mapDispatchToProps = {
  toggleUsersTab: actions.toggleUsersTab
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);