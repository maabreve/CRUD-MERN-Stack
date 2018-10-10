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
    let totalPages = 1;
    if (this.props.items && this.props.itemsPerPage && this.props.itemsPerPage > 0) {
      totalPages = Math.ceil(this.props.items.length / this.props.itemsPerPage);
    }

    return (
      <Container>
        <Pagination onClick={this.handlePageChange.bind(this)}
          activePage={this.props.currentPage} totalPages={totalPages} />
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
