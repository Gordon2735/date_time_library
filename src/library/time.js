// StarGateJS v0.1.0: Time Library

'use strict';

function Constructor(date) {
	if (!Array.isArray(date)) {
		date = [date];
	}
	this.date = new Date(...date);
}

/**
 * Get the day of the week
 * @param  {Date}   date  The date object
 * @return {String}       The day of the week
 */
Constructor.prototype.getDay = function () {
	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	return days[this.date.getDay()];
};

/**
 * Get the month of the year
 * @param  {Date}   date  The date object
 * @return {String}       The month of the year
 */
Constructor.prototype.getMonth = function () {
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	return months[this.date.getMonth()];
};

/**
 * Add days to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of days to add
 */
Constructor.prototype.addDays = function (n) {
	this.date.setDate(this.date.getDate() + n);
	return this;
};

/**
 * Add months to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of months to add
 */
Constructor.prototype.addMonths = function (n) {
	this.date.setMonth(this.date.getMonth() + n);
	Z;
	return this;
};

/**
 * Add years to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of years to add
 */
Constructor.prototype.addYears = function (n) {
	this.date.setFullYear(this.date.getFullYear() + n);

	return this;
};

export default Constructor;
