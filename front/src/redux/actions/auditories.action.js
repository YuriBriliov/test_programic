import { TAKE_ALL_AUDITORIES, GET_AUDITORIES, SET_AUDITORIES, UPDATE_AUDITORIES } from '../types'

export const selectAllAuditories = (categoryes) => ({
  type: TAKE_ALL_AUDITORIES,
  payload: { categoryes }
})

export const updateAuditories = (categoryes) => ({
  type: UPDATE_AUDITORIES,
  payload: { categoryes }
})

export const selectAuditory = (card) => ({
  type: GET_AUDITORIES,
  payload: { card }
})

export const newCategorys = (card) => ({
  type: SET_AUDITORIES,
  payload: { card }
})


export const setNewCategorys = (card,file) => async (dispatch) => {
  // console.log(card)
  try {
    const formData = new FormData()
    for(let key in card) {
      formData.append(key, card[key])
    }

    formData.append('file', file)
    // const options = {
    //   method: 'POST',
    //   body: formData,
    //   files: file
    // }

    const response = await fetch(`http://localhost:5001/auditories`, {
      method: 'POST',
      credentials: "include",
      body: formData,
      
    })  
    const newCard = await response.json()

    dispatch(newCategorys(newCard))
  } catch (error) {
    console.log(error)
  }
}


