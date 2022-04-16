import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice ({
	name: 'notification',
	initialState: null,
  reducers: {
    setNotification( state, action ) {      
      return action.payload
    }
  },
} )

export const {setNotification}=notificationsSlice.actions

let timeOutId = null

export const createNotification = ( newNotification, time ) => {
  return dispatch => {
    dispatch( setNotification( newNotification ) )
    
    if ( timeOutId ) {
      clearTimeout(timeOutId)
    }

    timeOutId = setTimeout( () => {
      dispatch(setNotification( null ))
    }, time * 1000)
  }
}


export default notificationsSlice.reducer