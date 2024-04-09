'use strict';

import Time from '../library/time.js';

let christmas = new Time([2023, 11, 25]);

let day = christmas.getDay();
let month = christmas.getMonth();
console.log(day, month);

let newYear = christmas.addDays(7).addYears(1);
console.log(newYear, newYear.date, christmas);
