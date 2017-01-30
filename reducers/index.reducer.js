import DO from '../consts/actions'

export default (
  state = {
    name: '',
    surname: '',
    birth: '',
    email: {
      value: '',
      validation: ''
    },
  },
  action) => {
  console.log(action)

  switch (action.type) {
    case DO.FIELDCHANGE: return {
      ...state,
      [action.fieldName]: action.value
    }
    case DO.EMAILCHANGE: return {
      ...state,
      email: {
        value: action.value,
        validation: action.validation
      }
    }
  }

  return state
}
