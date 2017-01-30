import DO from '../consts/actions'

export default (
  state = {
    name: '',
    surname: '',
    birth: {
      day: null,
      month: null,
      year: null,
    },
    email: {
      value: '',
      validation: ''
    },
    country:'',
    city:'',
    street:'',
    bulilding: '',
    apartment:'',
    zip: null,
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
    case DO.BIRTHCHANGE: return {
      ...state,
      birth: {
        ...state.birth,
        [action.fieldName]: action.value
      }
    }
    default: return state
  }
}
