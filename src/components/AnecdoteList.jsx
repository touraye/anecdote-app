import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { createNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {	
	const anecdotes = useSelector( ( state ) => state.anecdotes )	
	const dispatch = useDispatch()

	const handleVote = ( id ) => {		
		const foundAnecdote = anecdotes.map(anecdote=>anecdote).find(anecdote => anecdote.id === id)
		
		dispatch( addVote( foundAnecdote.id, foundAnecdote ) )		
		dispatch(createNotification('Anecdote liked', 1))				
	}

	const storedAnecdotes = anecdotes
		.map((n) => n)
		.sort((a, b) => b.votes - a.votes)	

	return (
		<div>
			<h2 className='anecdote__heading'>Anecdotes List</h2>		
			<ul>
				{storedAnecdotes.map((anecdote) => (
					<li key={anecdote.id} className='anecdote__list'>
						<p className='anecdote__content'>{anecdote.content}</p>
						<div className='anecdote__vote-container'>
							has <span className='anecdote__vote'>{anecdote.votes}</span>
							<button
								onClick={() => handleVote(anecdote.id)}
								className='anecdote__btn vote-btn'>
								vote
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default AnecdoteList