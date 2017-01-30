import emailValidator from '../../utils/emailValidator'

let okCase = 'ok';
let wrongCase = 'wrong';

test('testing 123@yahoo.com', ()=>{
  expect(emailValidator('123@yahoo.com')).toEqual(okCase)
})


test('testing someemail@yahoo.google.marisa.mark.com', ()=>{
  expect(emailValidator('someemail@yahoo.google.marisa.mark.com')).toEqual(okCase)
})


test('testing @yahoo.com', ()=>{
  expect(emailValidator('@yahoo.com')).toEqual(wrongCase)
})


test('testing adress@', ()=>{
  expect(emailValidator('adress@')).toEqual(wrongCase)
})


test('testing Abc.example.com', ()=>{
  expect(emailValidator('Abc.example.com')).toEqual(wrongCase)
})


test('testing A@b@c@example.com', ()=>{
  expect(emailValidator('A@b@c@example.com')).toEqual(wrongCase)
})


test('testing john..doe@example.com', ()=>{
  expect(emailValidator('john..doe@example.com')).toEqual(wrongCase)
})


test('testing this\ still\"not\\allowed@example.com', ()=>{
  expect(emailValidator('this\ still\"not\\allowed@example.com')).toEqual(wrongCase)
})


test('testing just"not"right@example.com', ()=>{
  expect(emailValidator('just"not"right@example.com')).toEqual(wrongCase)
})


test('testing a"b(c)d,e:f;g<h>i[j\k]l@example.com', ()=>{
  expect(emailValidator('a"b(c)d,e:f;g<h>i[j\k]l@example.com')).toEqual(wrongCase)
})
