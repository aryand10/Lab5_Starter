// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('isPhoneNumber', () => {
  test('valid phone number', () => {
    expect(isPhoneNumber('317-252-4639')).toBe(true);
  });
  test('valid phone number with modified entry', () => {
    expect(isPhoneNumber('(317) 252-4639')).toBe(true);
  });
  test('phone number with letters', () => {
    expect(isPhoneNumber('317-GGS-4639')).toBe(false);
  });
  test('phone number without formatting', () => {
    expect(isPhoneNumber('3172524638')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('student@ucsd.com')).toBe(true);
  });
  test('valid email with numbers', () => {
    expect(isEmail('student252@ucsd.com')).toBe(true);
  });
  test('email missing @', () => {
    expect(isEmail('studentucsd.com')).toBe(false);
  });
  test('email with multiple dots', () => {
    expect(isEmail('student@.ucsd.com')).toBe(false);
  });
});

// isStrongPassword tests
describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('Student2525')).toBe(true);
  });
  test('valid strong password with underscore', () => {
    expect(isStrongPassword('Student_2525')).toBe(true);
  });
  test('password starting with number', () => {
    expect(isStrongPassword('2525Student')).toBe(false);
  });
  test('password with special characters', () => {
    expect(isStrongPassword('Student#!2525')).toBe(false);
  });
});

// isDate tests
describe('isDate', () => {
  test('valid date', () => {
    expect(isDate('1/5/2024')).toBe(true);
  });
  test('valid date with two digits month and day', () => {
    expect(isDate('10/25/2024')).toBe(true);
  });
  test('date with dashes', () => {
    expect(isDate('10-25-2024')).toBe(false);
  });
  test('month spelled out with numbers for rest', () => {
    expect(isDate('October/25/2024')).toBe(false);
  });
});

// Test for isHexColor
describe('isHexColor', () => {
  test('valid 6 digit Hex', () => {
    expect(isHexColor('#ABCDEF')).toBe(true);
  });
  test('valid 3 digits Hex', () => {
    expect(isHexColor('#ABA')).toBe(true);
  });
  test('wrong characters not in Hex', () => {
    expect(isHexColor('#QZT')).toBe(false);
  });
  test('too many digits in hex', () => {
    expect(isHexColor('#ABCDEFB')).toBe(false);
  });
});
