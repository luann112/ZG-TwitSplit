import { connect } from 'react-redux';
import ChatBoxInput from '../../components/chatBoxInput';
import { actions } from 'src/reducers/chatBox';

const mapStateToProps = ({ usersBox }) => ({
  selectedConnectionId: usersBox.selectedConnectionId,
});

const mapDispatchToProps = {
  sendMessage: actions.sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxInput);