import { connect } from 'react-redux';
import ChatBoxInput from '../../components/chatBoxInput';
import { actions } from 'src/reducers/usersBox';

const mapStateToProps = ({ usersBox }) => ({
  selectedConnectionId: usersBox.selectedConnectionId,
});

const mapDispatchToProps = {
  selectConnection: actions.selectConnection
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxInput);