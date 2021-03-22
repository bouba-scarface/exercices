import moment from "moment";

function formatDate(date){
  return moment(date).format("dddd Do MMMM YYYY");
}
function yearsSinceDate(date){
  return parseInt(moment().format("YYYY")) - parseInt( moment(date).format("YYYY") );
}
function getDayFromDate(date){
  return moment(date).format("dddd");
}
function daysSinceDate(date){
  let currentDate = moment();
  let dateGiven = moment(date);
  return Math.round(moment.duration((currentDate - dateGiven)).asDays());


}



export {formatDate, yearsSinceDate, getDayFromDate, daysSinceDate};


//console.log(( moment().format("YYYYMMDD")));