import { connect } from 'react-redux';
import ChatBoxHeader from '../../components/chatBoxHeader';
import { getAvatar } from 'lib/utils';

const mapStateToProps = ({ usersBox }) => {
  const { selectedConnectionId, selectedConnectionName } = usersBox
  return ({
    avatar: getAvatar(selectedConnectionId),
    selectedConnectionName
  });
}

export default connect(mapStateToProps)(ChatBoxHeader);