/*! date_time_library v1.0.1 | Date/Time Library | StarGateJS  | Copyright 2024 | MIT license */
'use strict';

// StarGateJS v0.1.0: Time Library


function Constructor(date, options = {}) {
	if (!Array.isArray(date)) {
		date = [date];
	}
	this.date = new Date(...date);
	let settings = Object.assign(
		{
			months: [
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
			],
			days: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			]
		},
		options
	);

	Object.freeze(settings);
	this.settings = settings;

	Object.defineProperties(this, {
		date: {
			value: new Date(...date),
			writable: false
		},
		settings: {
			value: settings,
			writable: false
		}
	});
}

/**
 * Get the day of the week
 * @param  {Date}   date  The date object
 * @return {String}       The day of the week
 */
Constructor.prototype.getDay = function () {
	return this.settings.days[this.date.getDay()];
};

/**
 * Get the month of the year
 * @param  {Date}   date  The date object
 * @return {String}       The month of the year
 */
Constructor.prototype.getMonth = function () {
	return this.settings.months[this.date.getMonth()];
};

/**
 * Add days to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of days to add
 */
Constructor.prototype.addDays = function (n) {
	const d = new Date(this.date);
	d.setDate(d.getDate() + n);

	return new Constructor(d);
};

/**
 * Add months to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of months to add
 */
Constructor.prototype.addMonths = function (n) {
	const d = new Date(this.date);
	this.date.setMonth(this.date.getMonth() + n);

	return new Constructor(d);
};

/**
 * Add years to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of years to add
 */
Constructor.prototype.addYears = function (n) {
	const d = new Date(this.date);
	d.setFullYear(d.getFullYear() + n);

	return new Constructor(d);
};

module.exports = Constructor;
