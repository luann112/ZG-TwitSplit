import React, { Component } from 'react';
import {
  ConnectionItemWrapperStyled,
  ConnectionDetailStyled,
  UserNameStyled,
  LastMessageStyled,
  LastActivityStyled
} from './ConnectionItem.styles';
import Avatar from 'src/components/avatar';

class ConnectionItem extends Component {
  selectConnection = () => {
    const { selectedConnectionId, selectConnection, connection = {} } = this.props;
    if (selectedConnectionId !== connection.id && selectConnection && typeof selectConnection === 'function') {
      selectConnection(connection.id, connection.name);
    }
  }
  render() {
    const { connection = {}, selectedConnectionId } = this.props;
    const { id, avatar, name, latestMessage } = connection;
    return (
      <ConnectionItemWrapperStyled
        onClick={this.selectConnection}
        isActive={selectedConnectionId === id}>
        <Avatar size="small" src={avatar} />
        <ConnectionDetailStyled>
          <UserNameStyled>
            {name}
          </UserNameStyled>
          <LastMessageStyled>{latestMessage.message || ''}</LastMessageStyled>
        </ConnectionDetailStyled>
      </ConnectionItemWrapperStyled>
    );
  }
}

export default ConnectionItem;