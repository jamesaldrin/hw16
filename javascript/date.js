var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months = ["January", "February", "March", "April", "May", "June", "July", "Augast", "September", "October", "Novamber", "December"];

document.getElementById('daymonth').innerHTML = day + " " +months[month] + " ";
document.getElementById('year').innerHTML = year;

function time() {
  var d = new Date(),
      s = d.getSeconds() * 6,
      m = d.getMinutes() * 6 + (s / 60),
      h = d.getHours() % 12 / 12 * 360 + (m / 12);
  
  document.getElementById('day').innerHTML = days[d.getDay()] + ", ";
}
time();