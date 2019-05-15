const timeHelper = require('./helpers');

jest.mock('luxon');

test('testing luxon', () => {
    const expectedValue = {
        days: '0',
        time: '1:30'
    }

    expect(timeHelper.getTimeUntilTekken('time')).toBe(expectedValue);
});

describe('testing sooshDay', () => {
    var date1 = new Date('2019-05-01T12:00:00'); // true: 1st and weekday
    var date2 = new Date('2019-05-15T12:00:00'); // true: 15th and weekday
    var date3 = new Date('2019-06-01T12:00:00'); // false: 1st and saturday
    var date4 = new Date('2019-06-03T12:00:00'); // true: 3rd and monday
    var date5 = new Date('2019-06-15T12:00:00'); // false: 15th and saturday
    var date6 = new Date('2019-06-17T12:00:00'); // true: 17th and monday

    test('1st and 15th on weekday should be true', () => {
        expect(timeHelper.sooshDay(date1)).toBe(true);
        expect(timeHelper.sooshDay(date2)).toBe(true);
    });

    test('false: 1st or 15th and saturday should be true', () => {
        expect(timeHelper.sooshDay(date3)).toBe(false);
        expect(timeHelper.sooshDay(date5)).toBe(false);
    });

    test('true: 3rd or 17th and monday should be true', () => {
        expect(timeHelper.sooshDay(date4)).toBe(true);
        expect(timeHelper.sooshDay(date6)).toBe(true);
    });

});
