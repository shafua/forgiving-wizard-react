import DO from '../consts/actions'

export default (
  state = {
    name: '',
    surname: '',
    birth: {
      day: '',
      month: '',
      year: '',
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
    zip: '',
    occupation: '',
    hobbies: '',
    languages: '',
    'af1': '',
    'af2': '',
    'af3': '',
  },
  action) => {
  console.log('action')
  console.log(action)
  console.log('state')
  console.log(state)

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
