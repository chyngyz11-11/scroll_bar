const form = document.querySelector(".form")
const inputs = document.querySelectorAll("input")
const result_summary = document.querySelector(".result_summary")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const weekly_summary_spenses = []

    inputs.forEach((input) => {
        if (Number(input.value) === 0) {
            alert("its empty")
        }else {
           weekly_summary_spenses.push(Number(input.value))
           input.value = ""

        }
    })

    const total = weekly_summary_spenses.reduce((sum, value) => sum + value, 0)

    const average = total / weekly_summary_spenses.length

    result_summary.innerHTML = `
        <h2 class="total">Total:${total} som</h2>
        <strong class="average">Average:${average.toFixed(2)} som</strong>
    `
})
