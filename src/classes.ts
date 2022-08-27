const btn = document.getElementById("btn")! as HTMLButtonElement
const input = document.getElementById("todoinput")! as HTMLInputElement
const form = document.getElementById("todoform")! as HTMLFormElement
const todoList = document.getElementById("todolist")!

function handleSubmit (e: SubmitEvent) {
    e.preventDefault()
    const newTodoText = input.value
    const newLI = document.createElement("LI")
    newLI.append(newTodoText)
    todoList.append(newLI)
    input.value = ""
}

form.addEventListener("submit", handleSubmit)