import { useSelector } from "react-redux"

const Notification = (  ) => { 
  const notification = useSelector( state => state.notifications )
  
  if ( notification === null ) {
    return null
  }
  return (
		<div className='notification__wrapper'>			
			{notification}
		</div>
	)
}

export default Notification