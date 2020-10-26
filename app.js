const list = document.querySelector(".todos");
const form = document.querySelector(".add");
const submit = document.querySelector(".submit");
// const time = document.querySelector(".time");

const genarateTemplate = (title, description, time) => {

    const html = `
    <tr>
        <td>${title}</td>
        <td>${description}</td>
        <td>${time}</td>
        <td><i class="far fa-trash-alt delete"></i></td>
    </tr>
    `

    list.innerHTML += html;
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const title = form.title.value;
    const description = form.description.value;
    const time = form.time.value;
    if (title.length && description.length && time.length) {
        console.log(title, description, time);
        genarateTemplate(title, description, time);
    }
})








// daleating todos
list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

});