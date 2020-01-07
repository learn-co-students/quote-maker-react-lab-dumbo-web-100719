import uuid from 'uuid';
import Quotes from '../containers/Quotes';
 


export default (state = [], action) => {
  let quote;
  let index;
  switch(action.type) {
  case ("ADD_QUOTE"):
    return [...state, {
      content: action.quote.content,
      author: action.quote.author,
      id: action.quote.id,
      votes: action.quote.votes
    }]
    case("REMOVE_QUOTE"):
      return state.filter(quote => quote.id !== action.quoteId)
    case("UPVOTE_QUOTE"):
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      return [
        ...state.slice(0, index),
        {...quote, votes: quote.votes +=1},
        ...state.slice(index + 1)
      ]
      case("DOWNVOTE_QUOTE"):
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      if(quote.votes > 0) {
      return [
        ...state.slice(0, index),
        {...quote, votes: quote.votes -=1},
        ...state.slice(index + 1)
      ]} else {
        return state
      }

  default:
    return state;
  }
}
