import DO from '../consts/actions'

export default (
  state = {
    firstPage: {
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
      }
    },
    secondPage: {
      country:'',
      city:'',
      street:'',
      bulilding: '',
      apartment:'',
      zip: ''
    },
    thirdPage: {
      occupation: '',
      hobbies: '',
      languages: ''
    },
    fourthPage: {
      'af1': '',
      'af2': '',
      'af3': ''
    }
  },
  action) => {
  switch (action.type) {
    case DO.FIELDCHANGE: return {
      ...state,
      [action.page]:{
        ...state[action.page],
        [action.fieldName]: action.value
      }
    }
    case DO.EMAILCHANGE: return {
      ...state,
      firstPage: {
        ...state.firstPage,
        email: {
          value: action.value,
          validation: action.validation
        }
      }
    }
    case DO.BIRTHCHANGE: return {
      ...state,
      firstPage: {
        ...state.firstPage,
        birth: {
          ...state.firstPage.birth,
          [action.fieldName]: action.value
        }
      }
    }
    default: return state
  }
}
