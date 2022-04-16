import {  useState } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

import Notification from './components/Notification'


const App = () => {
	const [ showForm, setShowForm ] = useState( false )		
	
	return (
		<div className='anecdote__container'>
			<Notification />
			<button className='btn toggle-btn' onClick={() => setShowForm(!showForm)}>
				{showForm ? 'cancel' : 'create new'}
			</button>
			{ showForm && <AnecdoteForm /> }			
			<AnecdoteList />
		</div>
	)
}

export default App