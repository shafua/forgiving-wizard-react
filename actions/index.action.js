import DO from '../consts/actions'

import emailValidator from '../utils/emailValidator'

export let changeField = (page, fieldName, value) => ({
  type: DO.FIELDCHANGE,
  fieldName,
  value,
  page
})

export let changeEmailField = (email) => ({
  type: DO.EMAILCHANGE,
  value: email,
  validation: emailValidator(email)
})

export let changeBirthField = (fieldName, value) => ({
  type: DO.BIRTHCHANGE,
  fieldName,
  value,
})
