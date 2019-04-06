import { connect } from 'react-redux';
import ConnectionItem from '../../components/connectionItem';
import { actions } from 'src/reducers/usersBox';

const mapStateToProps = ({ usersBox }) => ({
  selectedConnectionId: usersBox.selectedConnectionId
});

const mapDispatchToProps = {
  selectConnection: actions.selectConnection
}

export default connect(mapStateToProps)(ConnectionItem);