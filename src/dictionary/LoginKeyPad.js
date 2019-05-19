import React from 'react';
import { arrowLeft } from '../Icons'

const FORGOT_VALUE = <span className='r-login-keypad-forgot'>Forgot?</span>
const ERASE_VALUE = <span className='r-login-keypad-erase'>{arrowLeft}</span>

export const FORGOT = 'FORGOT'
export const ERASE = 'ERASE'
export const KeyLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, FORGOT, 0, ERASE]
export const KeyValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, FORGOT_VALUE, 0, ERASE_VALUE]