import { createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart = [
  'If it hurts, do it more often',   
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',  
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map( asObject )

const anecdoteSlice = createSlice({
	name: 'anecdotes',
	initialState,
	reducers: {		
		voteAnecdote( state, action ) {					
			const id = action.payload.id
			const anecdoteToVote = action.payload
			
				return state.map((anecdote) =>
					anecdote.id !== id ? anecdote : anecdoteToVote
				)
		},
		appendAnecdote( state, action ) {			
			state.push(action.payload)
		},	
		newVote( state, action ) {
			state.push(action.payload)
		}
	},
})

export const { voteAnecdote, appendAnecdote } =
	anecdoteSlice.actions

export const createAnecdote = ( content ) => {	
	return (dispatch) => {
		const newAnecdote = content
		dispatch(appendAnecdote(newAnecdote))
	}
}

export const addVote = ( id, anecdoteToVote ) => {	
	return async (dispatch) => {
		const anecdoteVote = {
			...anecdoteToVote,
			votes: anecdoteToVote.votes + 1,
		}		
		dispatch(voteAnecdote(anecdoteVote))
	}
}

export default anecdoteSlice.reducer