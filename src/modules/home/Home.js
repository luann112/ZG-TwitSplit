import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'src/reducers/auth';
import {
  HomeWrapperStyled,
  UserWrapperStyled,
  TextStyled,
  UsersWrapperStyled,
  UserNameStyled
} from './Home.styles';
import Avatar from 'src/components/avatar';
import { SAMPLE_USERS } from 'lib/enums';
import UserTile from './components/userTile';

class Home extends Component {

  renderUser = (user) => user.id !== 'broadcast' && (
    <UserTile 
      key={user.id}
      user={user}
      initUser={this.props.initUser}
    />
  );
  
  render() {
    return (
      <HomeWrapperStyled className="container">
        <TextStyled>Who are you?</TextStyled>
        <UsersWrapperStyled>
          {SAMPLE_USERS.map(this.renderUser)}
        </UsersWrapperStyled>
      </HomeWrapperStyled>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  initUser: actions.initUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);