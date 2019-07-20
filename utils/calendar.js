const dayjs = require('dayjs');

function buildCalendar(month) {
  const date = new Date(month);

  const from = dayjs(date)
    .startOf('month')
    .startOf('week');

  const calendarWidth = 7;
  const calendarHeight = 6;

  return Array.from({length: calendarWidth * calendarHeight}).map(
    (_, index) => {
      return {
        date: from.add(index + 1, 'day').toString(),
        events: [],
      };
    },
  );
}

module.exports = {
  buildCalendar,
};
