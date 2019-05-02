import React from 'react';

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      journals: this.props.data,
      pageSize: null,
      startingPage: null,
      pageCount: null,
      currentPage: null
    }
  }

  componentWillReceiveProps(nextProps) {
    let data = nextProps.data;
    let pageSize = 4;
    let startingPage = 1;
    let currentPage = startingPage;
    let pageCount = parseInt(data.length / pageSize);
    if (data.length % pageSize > 0) { pageCount++; }
    
    this.setState({
      journals: nextProps.data,
      pageCount,
      pageSize,
      startingPage,
      currentPage
    })
  }

  setCurrentPage(num) {
    this.setState({ currentPage: num });
  }

  createControls() {
    let controls = [];
    const pageCount = this.state.pageCount;
    for (let i = 1; i <= pageCount; i++) {
      const baseClassName = 'pagination-controls__button';
      const activeClassName = i === this.state.currentPage ? `${baseClassName}--active` : '';
      controls.push(
        <div
          className={`${baseClassName} ${activeClassName}`}
          onClick={() => this.setCurrentPage(i)}
          key={i}
        >
          {i}
        </div>
      );
    }

    
    return controls;
  }

  createPaginatedData() {
    const data = this.state.journals;
    const pageSize = this.state.pageSize;
    const currentPage = this.state.currentPage;
    const upperLimit = currentPage * pageSize;
    const dataSlice = data.slice((upperLimit - pageSize), upperLimit);
    return dataSlice;
  }

  render() {
    return (
      <div className='pagination'>
        <div className='pagination-results'>
          {React.cloneElement(this.props.children, { data: this.createPaginatedData() })}
        </div>
        <div className='pagination-controls'>
          {this.createControls()}
        </div>
      </div>
    );
  }
}
export default Pagination;