// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests

test('858-141-9999 is a valid phone number', () => {
  expect(isPhoneNumber("858-141-9999")).toBe(true);
});

test('101-000-0410 is a valid phone number', () => {
  expect(isPhoneNumber("101-000-0410")).toBe(true);
});

test('random_string is not a valid phone number', () => {
  expect(isPhoneNumber("random_string")).toBe(false);
});

test('1-2-3 is not a valid phone number', () => {
  expect(isPhoneNumber("1-2-3")).toBe(false);
});

//isEmail tests

test('hi_idk@gmail.com is a valid email', () => {
  expect(isEmail("hi_idk@gmail.com")).toBe(true);
});

test('ucsd_student@ucsd.edu is a valid email', () => {
  expect(isEmail("ucsd_student@ucsd.edu")).toBe(true);
});

test('@light_beam is not a valid email', () => {
  expect(isEmail("@light_beam")).toBe(false);
});

test('The empty string is not a valid email', () => {
  expect(isEmail("")).toBe(false);
});

//isStrongPassword tests

test('cool_ice1999 is a strong password', () => {
  expect(isStrongPassword("cool_ice1999")).toBe(true);
});

test('password is a strong password', () => {
  expect(isStrongPassword("password")).toBe(true);
});

test('aj8af#h80h#1rub0$_bcasfajr is not a strong password', () => {
  expect(isStrongPassword("aj8af#h80h#1rub0$_bcasfajr")).toBe(false);
});

test('999999 is not a strong password', () => {
  expect(isStrongPassword("999999")).toBe(false);
});

//isDate tests

test('01/01/2000 is a valid date', () => {
  expect(isDate("01/01/2000")).toBe(true);
});


test('02 / 01 / 2026 is a valid date', () => {
  expect(isDate("02/01/2026")).toBe(true);
});

test('200 / 200 / 2000 is an invalid date', () => {
  expect(isDate("200 / 200 / 2000")).toBe(false);
});

test('2026/1/1 is an invalid date', () => {
  expect(isDate("2026/1/1")).toBe(false);
});

//isHexColor tests

test('#afafaf is a valid hex color', () => {
  expect(isHexColor("#afafaf")).toBe(true);
});

test('#b2b is a valid hex color', () => {
  expect(isHexColor("#b2b")).toBe(true);
});

test('#afaezf is an invalid hex color', () => {
  expect(isHexColor("#afaezf")).toBe(false);
});

test('#e9 is an invalid hex color', () => {
  expect(isHexColor("#a9")).toBe(false);
});