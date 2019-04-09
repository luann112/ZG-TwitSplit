import { connect } from 'react-redux';
import ConnectionItem from '../../components/connectionItem';
import { actions } from 'src/reducers/usersBox';

const mapStateToProps = ({ usersBox }) => ({
  selectedConnectionId: usersBox.selectedConnectionId,
});

const mapDispatchToProps = {
  toggleUsersTab: actions.toggleUsersTab,
  selectConnection: actions.selectConnection,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionItem);