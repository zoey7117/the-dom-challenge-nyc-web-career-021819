// const timer = document.querySelector('#counter')
//
// var i = 1;
//
// var interval = setInterval( increment, 1000);
//
// function increment(){
//     i = i % 360 + 1;
// }

document.addEventListener("DOMContentLoaded", function() {
  const timer = document.querySelector('#counter')
  function increment(){
      timer.innerText = timer.innerText % 360 + 1;

    }
   let interval = setInterval(increment, 1000);




  const minusButton = document.getElementById('-')
  minusButton.addEventListener('click', function(e) {
    e.preventDefault()
    timer.innerText--
  })

  const plusButton = document.getElementById('+')
  plusButton.addEventListener('click', function(e) {
    e.preventDefault()
    timer.innerText++
    // console.log('I am clicked')
  })

  const counterObj = {}
  const loveButton = document.getElementById('<3')
  loveButton.addEventListener('click', function(e) {
    e.preventDefault()

    // let timeOfLike = timer.innerText
      if (!counterObj[timer.innerText]){
      counterObj[timer.innerText] = 1
      } else {
       counterObj[timer.innerText]++
      }

      const list = document.getElementById('likeList')
      if (!document.getElementById(`${timer.innerText}`)){

        list.innerHTML += `<li id=${timer.innerText}>you've liked this ${timer.innerText} 1 time</li>`
      } else {
        let liFound = document.getElementById(`${timer.innerText}`)
        // list.appendChild('q')
              liFound.innerHTML = `you've liked this ${timer.innerText} number ${counterObj[timer.innerText]} times`
        // list.appendChild.innerHTML = `<li id=${timer.innerText}>you've liked this ${timer.innerText} number ${counter} times</li>`

      }



  })

  const pause = document.getElementById('pause')
  const submitButton = document.getElementById('submit')
  pause.addEventListener('click', function(e) {
    e.preventDefault()


      if (pause.innerText == 'pause'){
        pause.innerText = 'resume'
        clearInterval(interval)
        const stopButtons = [minusButton, plusButton, loveButton, submitButton]
        stopButtons.forEach(function (butt){
          butt.disabled = true
        })

      } else {
        pause.innerText = 'pause'
        interval = setInterval(increment, 1000)
        const stopButtons = [minusButton, plusButton, loveButton, submitButton]
        stopButtons.forEach(function (butt){
        butt.disabled = false
          })
      }


  })

//
  const form = document.getElementById('comment-form')
//
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    // console.log('I am clicked')
    let comment = document.getElementById('comment').value
    form.innerHTML += `<li>${comment}</li>`

//
//
})

})
