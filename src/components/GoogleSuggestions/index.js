// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    inputValue: '',
  }

  displaySuggestion = event => {
    this.setState({searchInput: event.target.value})
  }

  pushToSearchBar = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput, inputValue} = this.state
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <div className="sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-bar-container">
            <button type="button" onChange={this.getInput}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-img"
              />
            </button>
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.displaySuggestion}
            />
            <ul>
              {filteredList.map(eachItem => (
                <SuggestionItem
                  suggestionsList={eachItem}
                  key={eachItem.id}
                  pushToSearchBar={this.pushToSearchBar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
