import { SAMPLE_USERS } from 'lib/enums';

export const getConnectionsListData = ({ chatBox }) => {
  const { chatData } = chatBox;
  const connectionsListData = SAMPLE_USERS.map((userItem) => {
    const { id } = userItem;
    const connectionChatData = chatData[id] || [];
    const latestMessage = connectionChatData[connectionChatData.length -1] || {};
    return {
      ...userItem,
      latestMessage,
    }
  });
  return connectionsListData;
}