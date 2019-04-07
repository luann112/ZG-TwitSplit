import React, { Component } from 'react';
import { 
  ConnectionsListWrapperStyled
} from './ConnectionsList.styles';
import ConnectionItem from '../../containers/connectionItem';


class ConnectionsList extends Component {

  renderConnectionItem = (connection) => {
    const { userId } = this.props;
    return userId !== connection.id && (
      <ConnectionItem
        key={connection.id}
        connection={connection}
      />
    );
  }

  render() {
    const { connectionsListData = [] } = this.props;
    return (
      <ConnectionsListWrapperStyled>
        {connectionsListData.map(this.renderConnectionItem)}
      </ConnectionsListWrapperStyled>
    );
  }
}

export default ConnectionsList;