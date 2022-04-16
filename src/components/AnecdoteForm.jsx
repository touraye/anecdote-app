import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {	
	const dispatch = useDispatch()

	const getId = () => (100000 * Math.random()).toFixed(0)

	const addAnecdotes = async (event) => {
		event.preventDefault()

		const content = event.target.anecdote.value
		
		event.target.anecdote.value = ''	
		const newContent = {
			content,
			id: getId(),
			votes: 0
		}

		dispatch( createAnecdote( newContent ) )
		dispatch(createNotification('Anecdote Added', 2))	
	}

	return (
		<form onSubmit={ addAnecdotes } className='anecdote__form'>			
			<h2 className='anecdote__heading'>create new anecdote</h2>
			<div className='anecdote__form-group'>
				<input name='anecdote' placeholder='Add anecdote' required />
			</div>
			<button className='btn anecdote__btn create-btn'>create</button>
		</form>
	)
}

export default AnecdoteForm
