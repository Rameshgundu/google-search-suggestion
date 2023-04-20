// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, pushToSearchBar} = props
  const {suggestion} = suggestionsList
  const pushSuggestion = () => {
    pushToSearchBar(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={pushSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
