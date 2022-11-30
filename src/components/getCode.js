import { useState, useEffect } from 'react';

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

const finalDays = [`${year}-12-13`, `${year}-12-14`, `${year}-12-15`, `${year}-12-16`, `${year + 1}-5-30`, `${year + 1}-5-31`, `${year + 1}-06-01`];

const reviewDays = [`${year}-12-12`];

export default function GetCode() {
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
  else if (scheduleList.code === ' ') {
    return (`no school!`);
  }
  else if (reviewDays.includes(`${year}-${month}-${day}`)) {
    return (`GO REVIEW!`);
  }
  else if (finalDays.includes(`${year}-${month}-${day}`)) {
    return (`finals :(`);
  }
  else {
    return (`${scheduleList.code}`);
  }
}
