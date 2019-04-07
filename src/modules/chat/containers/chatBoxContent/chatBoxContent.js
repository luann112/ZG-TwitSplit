import { connect } from 'react-redux';
import ChatBoxContent from '../../components/chatBoxContent';
import { getCurrentChatData } from 'src/reducers/chatBox';

const mapStateToProps = (state) => ({
  currentChatData: getCurrentChatData(state),
  userId: state.auth.userId,
});

export default connect(mapStateToProps)(ChatBoxContent);