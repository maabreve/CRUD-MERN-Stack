import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Pagination, Container } from 'semantic-ui-react';
import { setCurrentPage } from '../../actions/pagination.action';

class PaginationComponent extends Component {
  handlePageChange(menu) {
    let page = menu.target.attributes.value.value;
    this.props.handlePageChange(page);
  }
  
  mountControl = () => {
    // let totalPages = 1;
    // if (totalItems && itemsPerPage && itemsPerPage > 0) {
    //   totalPages = totalItems / itemsPerPage;
    // }

    return (
      <Container>
        <Pagination onClick={this.handlePageChange.bind(this)}
          activePage={this.props.currentPage} totalPages={3} />
      </Container>
    )
  }

  render() {
    return (
      this.mountControl()
    )
  }
  
}

function mapStateToProps(state) {
  return {
    currentPage: state.paginationStore.currentPage
  }
}

export default connect(mapStateToProps, { setCurrentPage })(PaginationComponent);
