export default function GetDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return month + "/" + day + "/" + year + " | " + date.toLocaleDateString('EN-en', { weekday: 'long' }).toLowerCase();
}
