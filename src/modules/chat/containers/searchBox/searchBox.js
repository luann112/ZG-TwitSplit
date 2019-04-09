import { connect } from 'react-redux';
import SearchBox from '../../components/searchBox';
import { actions } from 'src/reducers/usersBox';

const mapDispatchToProps = {
  updateKeyword: actions.updateKeyword
}

export default connect(null, mapDispatchToProps)(SearchBox);