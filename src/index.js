import './index.css';

import numeral from 'numeral'; //library for formatting numbers

const courseValue = numeral(1000).format('$0,0.00');
console.log(`Value is ${courseValue}.`); // eslint-disable-line no-console
