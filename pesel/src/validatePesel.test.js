import { expect, test } from 'vitest'
import { validatePESEL } from './utils/validatePesel'

// npm run test
test('Pesel number is valid.', () => {
  expect(validatePESEL('02070803628')).toBe(true)
})
test('Pesel number is invalid.', () => {
  expect(validatePESEL('95032005403')).toBe(false)
})
test('Pesel number is too short.', () => {
  expect(validatePESEL('95032005')).toBe(false)
})
test('Pesel number is too long.', () => {
  expect(validatePESEL('9503200540333')).toBe(false)
})
test('Pesel number contains invalid characters.', () => {
  expect(validatePESEL('95032A0B403')).toBe(false)
})