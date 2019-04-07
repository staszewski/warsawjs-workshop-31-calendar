const dayjs = require('dayjs');

function buildCalendar(month) {
  const date = new Date(month);

  const from = dayjs(date).startOf('month').startOf('week');

  const calendarWidth = 7;
  const calendarHeight = 6;

  return Array
        .from({ length: calendarWidth * calendarHeight })
        .map((_, index) => from.add(index + 1, 'day').toString());
};

console.log(buildCalendar(1))

module.exports = {
  buildCalendar
};
