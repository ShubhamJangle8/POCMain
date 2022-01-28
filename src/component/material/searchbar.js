import SearchBar from "material-ui-search-bar"
// *snip*
import React from 'react'

const searchbar = () => {

  const doSomethingWith = () =>{
    console.log('a')
  }
  return (
    <SearchBar
      value={this.state.value}
      onChange={(newValue) => this.setState({ value: newValue })}
      onRequestSearch={() => doSomethingWith(this.state.value)}
    />
  );
}

export default searchbar

