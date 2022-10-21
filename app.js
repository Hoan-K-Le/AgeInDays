const ageInDays = () => {
  let birthYear = prompt('What year were you born')
  let convertAgeInDays = (2022 - birthYear) * 365
  let h1 = document.createElement('h1')
  let textAnswer = document.createTextNode(
    'You are ' + convertAgeInDays + ' days old'
  )
  h1.setAttribute('id', 'ageInDays')
  h1.appendChild(textAnswer)
  document.getElementById('answerBox').appendChild(h1)
  console.log(convertAgeInDays)
}

const resetBtn = () => {
  document.getElementById('ageInDays').remove()
}
