import { connect } from 'react-redux';
import UsersTab from '../../components/usersTab';
import { actions, getConnectionsListData } from 'src/reducers/usersBox';

const mapStateToProps = ({ usersBox }) => ({
  isShowUsersTab: usersBox.isShowUsersTab,
});

export default connect(mapStateToProps)(UsersTab);