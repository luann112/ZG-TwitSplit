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
    const { connection = {} } = this.props;
    const { avatar = '/static/img/iron-man.jpg' } = connection;
    return (
      <ConnectionItemWrapperStyled>
        <Avatar small src={avatar} />
        <ConnectionDetailStyled>
          <UserNameStyled>
            Luan Nguyen
          </UserNameStyled>
          <LastMessageStyled>This is last message</LastMessageStyled>
        </ConnectionDetailStyled>
      </ConnectionItemWrapperStyled>
    );
  }
}

export default ConnectionItem;