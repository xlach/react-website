import { useState, useEffect } from 'react';

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

const breakDates = [`${year}-9-5`, `${year}-9-26`, `${year}-10-24`, `${year}-11-21`, `${year}-11-22`, `${year}-11-23`, `${year}-11-24`, `${year}-11-25`, `${year}-12-19`, `${year}-12-20`, `${year}-12-21`, `${year}-12-22`, `${year}-12-23`, `${year}-12-24`, `${year}-12-25`, `${year}-12-26`, `${year}-12-27`, `${year}-12-28`, `${year}-12-29`, `${year}-12-30`, `${year}-12-31`, `${year + 1}-01-01`, `${year + 1}-01-02`, `${year + 1}-01-16`, `${year + 1}-02-13`, `${year + 1}-02-14`, `${year + 1}-02-15`, `${year + 1}-02-16`, `${year + 1}-02-17`, `${year + 1}-02-18`, `${year + 1}-02-19`, `${year + 1}-02-20`, `${year + 1}-04-03`, `${year + 1}-04-04`, `${year + 1}-04-05`, `${year + 1}-04-06`, `${year + 1}-04-07`, `${year + 1}-05-29`];

const finalDays = [`${year}-12-13`, `${year}-12-14`, `${year}-12-15`, `${year}-12-16`, `${year + 1}-5-30`, `${year + 1}-5-31`, `${year + 1}-06-01`];

const reviewDays = [`${year}-12-12`];

export default function GetSchedule() {
  const [scheduleList, initSchedule] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://bell.dev.harker.org/api/schedule?month=${month}&day=${day}&year=${year}`);
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  }
  useEffect(() => {
    fetchData()
      .then((res) => {
        initSchedule(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  if (date.getDay() === 0 || date.getDay() === 6) {
    return (`weekend`)
  }
  else if (breakDates.includes(`${year}-${month}-${day}`)) {
    return (`break!`);
  }
  else if (reviewDays.includes(`${year}-${month}-${day}`)) {
    return (`GO REVIEW!`);
  }
  else if (finalDays.includes(`${year}-${month}-${day}`)) {
    return (`finals :(`);
  }
  else {
    console.log (date.getDay());
    return (`Code:\xa0\xa0\xa0${scheduleList.code}`);
  }
}
