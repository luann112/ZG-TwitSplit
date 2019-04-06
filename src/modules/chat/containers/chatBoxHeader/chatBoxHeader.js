import { connect } from 'react-redux';
import ChatBoxHeader from '../../components/chatBoxHeader';

const mapStateToProps = ({ usersBox }) => ({
  selectedConnectionId: usersBox.selectedConnectionId,
  selectedConnectionName: usersBox.selectedConnectionName
});

export default connect(mapStateToProps)(ChatBoxHeader);