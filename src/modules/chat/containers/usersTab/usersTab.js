import { connect } from 'react-redux';
import UsersTab from '../../components/usersTab';

const mapStateToProps = ({ usersBox }) => ({
  isShowUsersTab: usersBox.isShowUsersTab,
});

export default connect(mapStateToProps)(UsersTab);