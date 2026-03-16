function showMessage(){
    console.log("Добро пожаловать в javaScript")
}

showMessage()


function greetUser(name){
    console.log(`Добрый день,${name}!`)
}

greetUser("Асан")
greetUser("Азамат")
greetUser('Айгуль')


function showAge(age){
    console.log(`Мне ${age} лет`)
}

showAge(15)
showAge(38)
showAge(45)


   function findEvenNumbers(array) {
  let even = []

  for (let num of array) {
    if (num % 2 === 0) {
      even.push(num)
    }
  }

  return even
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]))
        


function findBigNumbers(array) {
  let big_numbers = []

  for (let i = 0; i <= array.length; i++) {
    if (array[i] > 5) {
      big_numbers.push(array[i])
    }
  }

  return big_numbers
}

console.log(findBigNumbers([1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]))


function squareArea(a) {
  return a * a
}

console.log(squareArea(4))



function checkNumber(num) {
  if (num === 10) {
    console.log("Правильно")
  } else {
    console.log("Неправильно")
  }
}

checkNumber(10)
checkNumber(7)


function checkEven(num) {
  if (num % 2 === 0) {
    console.log("Чётное")
  } else {
    console.log("Нечётное")
  }
}

checkEven(4)
checkEven(5)


function checkPassword(password) {
  if (password === "1234") {
    console.log("Доступ разрешён")
  } else {
    console.log("Неверный пароль")
  }
}

checkPassword("1234")
checkPassword("1111")