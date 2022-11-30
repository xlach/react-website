import { useState, useEffect } from 'react';

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

export default function GetSchedule() {
  const [scheduleList, initSchedule] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://bell.dev.harker.org/api/schedule?month=${month}&day=29&year=${year}`);
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
          <>
          <hr></hr>
          <span id={Math.random()}>{period}</span>
          <br></br>
          </>
        )))
        console.log(getsched);
        // eslint-disable-next-line no-eval
        initSchedule(getsched);
      });
  }, []);

  return (scheduleList);

  //console.log(scheduleList.code);


  //console.log(scheduleList.schedule.indexOf(0));


  /*for (let i = 0; i < 10; i++) {
    ///console.log(scheduleList.schedule[i].name);
    sched += `<hr></hr>
    <span>${scheduleList.schedule[i].name}</span>
    <br></br>
    <span>8:00 - 9:25</span>
    <br></br>`;
  };*/

  //console.log(sched);
}
