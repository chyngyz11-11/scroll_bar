const subjects_array = ["Физика", "Химия", "География", "Геометрия", "Алгебра",]

console.log(subjects_array)

const count_subjects = document.querySelector(".count_subjects")
const subjects = document.querySelector(".subjects")
const sort_btn = document.querySelector(".sort_btn")

count_subjects.textContent = `Количество предметов: ${subjects_array.length}`

function render () { 
    const subjects_html = subjects_array.map((s) => {
        return`
        <li class="subjects">${s}<li>
        `
    })

    subjects.innerHTML = subjects_html.join("")
}

render()

sort_btn.addEventListener("click", function() {
    subjects_array.sort((a,b) => a.localeCompare(b))
    render()
})