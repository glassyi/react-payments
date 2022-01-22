import { initCardState } from '@components/Card/type';

export const CARD_NUMBER = 'cardNumber';
export const EXPIRY_DATE = 'expiryDate';
export const OWNER = 'owner';
export const CVC = 'cvc';
export const PASSWORD = 'password';
export const COMPANY = 'company';
export const NICKNAME = 'nickname';
export const BG_COLOR = 'bgColor';

export const DIGITS = {
  [CARD_NUMBER]: 4,
  [EXPIRY_DATE]: 2,
  [PASSWORD]: 2,
};

export const INPUT_LENGTH: {
  [k in keyof Omit<initCardState, typeof COMPANY | typeof BG_COLOR>]: number;
} = {
  [CARD_NUMBER]: 4,
  [OWNER]: 30,
  [EXPIRY_DATE]: 2,
  [PASSWORD]: 1,
  [CVC]: 3,
  [NICKNAME]: 30,
};

export const INIT_CARD_STATE: initCardState = Object.freeze({
  [CARD_NUMBER]: Array(DIGITS[CARD_NUMBER]).fill(''),
  [EXPIRY_DATE]: Array(DIGITS[EXPIRY_DATE]).fill(''),
  [OWNER]: '',
  [CVC]: '',
  [PASSWORD]: Array(DIGITS[PASSWORD]).fill(''),
  [COMPANY]: '',
  [NICKNAME]: '',
  [BG_COLOR]: '',
});

export const FIELD_ORDERS = Object.keys(INIT_CARD_STATE);
