const second = document.querySelector('.second')
const minutes = document.querySelector('.minutes')
const hour = document.querySelector('.hour')
const digitalHour = document.querySelector('.digital-hour')
const digitalMinutes = document.querySelector('.digital-minutes')
const calendar = document.querySelector('.calendar')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

setInterval(() => {
    const date = new Date()
    const currentSecond = date.getSeconds() * 6 //60 second === 360 deg -> 1 second === 6 deg
    const currentMinutes = date.getMinutes() * 6
    const currentHour = date.getHours() * 30 + date.getMinutes() / 2

    second.style.transform = `rotate(${currentSecond}deg)`
    minutes.style.transform = `rotate(${currentMinutes}deg)`
    hour.style.transform = `rotate(${currentHour}deg)`

    digitalHour.textContent = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
    digitalMinutes.textContent = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()

    calendar.textContent = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
}, 1000);