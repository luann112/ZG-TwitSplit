import React, { Component } from 'react';
import { 
  ConnectionsListWrapperStyled
} from './ConnectionsList.styles';
import ConnectionItem from '../../containers/ConnectionItem';


class ConnectionList extends Component {
  render() {
    return (
      <ConnectionsListWrapperStyled>
        <ConnectionItem 
        />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
        
      </ConnectionsListWrapperStyled>
    );
  }
}

export default ConnectionList;