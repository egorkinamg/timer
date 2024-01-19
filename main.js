let monthAr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let dayWeekAr =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const giveAway = document.querySelector(".giveaway")
const h3Days = document.querySelector(".days")
const h3Hours = document.querySelector(".hours")
const h3minutes = document.querySelector(".minutes")
const h3seconds = document.querySelector(".seconds")

let end = new Date(2024, 0, 30, 12, 59)
let endYear = end.getFullYear()
let endMonth = monthAr[end.getMonth()]
let endDate = end.getDate()
let endHour = end.getHours()
let endDay = dayWeekAr[end.getDay()]
let endMin = end.getMinutes()



giveAway.textContent =  `Giveawey ends on ${endDay}, ${endDate} ${endMonth} ${endYear} ${endHour< 10 ? '0' + endHour :endHour}:${endMin < 10 ? '0' + endMin : endMin}${endHour < 12 ? 'am' : 'pm'}`


function reminderFun(){
    let now = new Date()
    let diff = end - now
    
    let oneDay = 24 * 60 * 60 * 1000
    let oneHour = 60 * 60 * 1000
    let oneMinutes = 60 * 1000
    
 
    let days = Math.floor(diff / oneDay) 
    let hours = Math.floor((diff % oneDay) / oneHour)
    let minutes = Math.floor((diff % oneHour) / oneMinutes)
    let seconds = Math.floor((diff % oneMinutes) / 1000)
    
    
    h3Days.textContent = days 
    h3Hours.textContent = hours
    h3minutes.textContent = minutes
    h3seconds.textContent = seconds
} 

setInterval(reminderFun, 1000)



// days.textContent = days
