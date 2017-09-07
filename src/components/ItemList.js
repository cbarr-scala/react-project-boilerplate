import 'whatwg-fetch';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsDeleteItem } from '../actions/items';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry, there was an error... #fail</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            <button onClick={() => { this.props.deleteItemClicked(item.id); }}>Delete</button> - {item.label} 
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    deleteItemClicked: (itemId) => dispatch(itemsDeleteItem(itemId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
