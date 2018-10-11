import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Pagination, Container } from 'semantic-ui-react';
import { setCurrentPage } from '../../actions/pagination.action';

class PaginationComponent extends Component {
  componentDidMount() {
    this.props.setCurrentPage(1);
  }

  render() {
    return (
      <Container>
        <Pagination onClick={this.pageChanged.bind(this)}
          activePage={this.props.currentPage} 
          totalPages={this.props.totalPages} />
      </Container>
    )
  }

  pageChanged(pageSelected) {
    let page = pageSelected.target && 
              pageSelected.target.attributes && 
              pageSelected.target.attributes.value ? 
              pageSelected.target.attributes.value.value : 
              1;
    
    this.props.setCurrentPage(page);
    this.props.handlePageChange(page);
  }
}

function mapStateToProps(state) {
  return {
    currentPage: state.paginationStore.currentPage
  }
}

export default connect(mapStateToProps, { setCurrentPage })(PaginationComponent);
