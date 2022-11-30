var date = new Date();

export default function GetDay() {
    Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return Date.shortDays[date.getDay()];
}