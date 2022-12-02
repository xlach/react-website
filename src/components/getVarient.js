import { useState, useEffect } from 'react';

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

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
  if (scheduleList.variant === 'adjusted')
    return (`adjusted`);
  else if (scheduleList.variant === 'special')
    return (`special`);
  else if (scheduleList.variant === '');
    return (`normal`);
}
