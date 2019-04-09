import { connect } from 'react-redux';
import ChatBoxContent from '../../components/chatBoxContent';
import { getCurrentChatData } from 'src/reducers/chatBox';

const mapStateToProps = (state) => ({
  currentChatData: getCurrentChatData(state),
  userId: state.auth.userId,
  error: state.chatBox.error
});

export default connect(mapStateToProps)(ChatBoxContent);