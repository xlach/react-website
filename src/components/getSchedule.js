import { useState, useEffect } from 'react';

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

export default function GetSchedule() {
  const [scheduleList, initSchedule] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://bell.dev.harker.org/api/schedule?month=${month}&day=${day}&year=${year}`);
    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {

        var oldsched = res.schedule;

        var periods = oldsched.map(element => element.name);

        console.log(periods);

        const getsched = (periods.map(period => (
          <div class="period-container">
            <hr />
            <span id={Math.random()}>{period}</span>
          </div>
        )));
        console.log(getsched);
        initSchedule(getsched);
      });
  }, []);

  return (scheduleList);
}
