import React, { Component } from 'react';
import { 
  ConnectionsListWrapperStyled
} from './ConnectionsList.styles';
import ConnectionItem from '../../containers/connectionItem';


class ConnectionsList extends Component {
  constructor(props) {
    super(props);
    const { connectionsListData = [], keyword } = this.props;
    this.state = {
      connectionsListData,
      keyword
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { keyword, connectionsListData } = nextProps;
    if (keyword !== prevState.keyword) {
      const filteredList = keyword === '' ? connectionsListData :
      connectionsListData.filter(item => item.name.includes(keyword));
      return {
        keyword,
        connectionsListData: filteredList
      }
    }
    return null;
  }

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
    const { connectionsListData = [] } = this.state;
    return (
      <ConnectionsListWrapperStyled>
        {connectionsListData.map(this.renderConnectionItem)}
      </ConnectionsListWrapperStyled>
    );
  }
}

export default ConnectionsList;