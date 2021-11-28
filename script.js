// функции для перехода между страницами
function aboutPage(){
    location.href = "about.html";
}

function productsPage(){
    location.href = "products.html";
}

function reviewsPage(){
    location.href = "reviews.html";
}

function paymentPage(){
    location.href = "payment.html";
}

function mainPage(){
    location.href = "index.html";
}

// функция для получения оставшегося времени
function getTimeRemaining(endtime) {
    var time = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  // функция для создания часов
  function initializeClock(id, deadline) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    // функция для обновления часов
    function updateClock() {
      var time = getTimeRemaining(deadline);
   
      daysSpan.innerHTML = time.days;
      hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
   
      if (time.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = '2021-12-31';
  initializeClock('countdown', deadline);