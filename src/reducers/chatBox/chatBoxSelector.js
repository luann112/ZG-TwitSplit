export const getCurrentChatData = ({ usersBox, chatBox }) => {
  const { selectedConnectionId = null } = usersBox;
  const { chatData = {} } = chatBox;
  if (!selectedConnectionId) return [];
  return chatData[selectedConnectionId] || [];
}