import { connect } from 'react-redux';
import ConnectionsList from '../../components/connectionsList';
import { actions, getConnectionsListData } from 'src/reducers/usersBox';

const mapStateToProps = (state) => ({
  connectionsListData: getConnectionsListData(state),
  userId: state.auth.userId,
  keyword: state.usersBox.keyword
});

export default connect(mapStateToProps)(ConnectionsList);