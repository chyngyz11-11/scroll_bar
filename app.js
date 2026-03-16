const name = "Chyngyz"
let age = 14
let online = false
let user = {
    name: "Chyngyz",
    age: 14,
    online: false
}
console.log(name, typeof name)
console.log(age, typeof age)
console.log(online, typeof online)
console.log(user, typeof user)



let phone = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 50000
}
console.log(`Телефон: ${phone.brand} ${phone.model} ${phone.price}`)



let book = {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967
}
console.log(`Книга: ${book.title} ${book.author} ${book.year}`)



let student = {
    name: "Acaн",
    grade: 5,
    subject: "Математика"
}
console.log(` ${student.name} получил ${student.grade} по предмету ${student.subject}`)



let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    owner: {
        name: "Айбек",
        age: 30
    }

}
console.log(`Машина: ${car.brand} ${car.model} ${car.year}, ${car.owner.age}`)