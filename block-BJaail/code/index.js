class TodoList{
    constructor(root, list=[]){
        this.root = root;
        this.todos = JSON.parse(localStorage.getItem("todos")) || [];
        this.createUi();
    }
    add(title, tdAuthor, number){
        this.todos.push({
            title, tdAuthor, number
        });
        this.createUi();
        localStorage.setItem("todos", JSON.stringify(this.todos));
    };
    handelCheck(event){
        let id = event.target.dataset.id;
        let index = this.todos.findIndex((todo)=> todo.id === id);
        this.todos.splice(index,1);
        this.createUi(this.todos);
        localStorage.setItem("todos", JSON.stringify(this.todos));
    };
    createUi(){
        this.root.innerHTML = "";
        this.todos.forEach(todo => {
            let currentTodo  = new Todo(todo.title, todo.tdAuthor, todo.number );
            const ui = currentTodo.createUi();
            ui.querySelector(".delete").addEventListener("click", this.handelCheck.bind(this));
            this.root.append(ui);
        })
    };

}

class Todo {
    constructor(title, author, number){
        this.title = title;
        this.author = author;
        this.number = number;
        this.isDone = false;
        this.id = `id-${Date.now()}`;
    };
   
    createUi(){
        let tr = document.createElement("tr");
        let tdTitle = document.createElement("td");
        tdTitle.innerText = this.title;
        let tdAuthor = document.createElement("td");
        tdAuthor.innerText = this.author;
        let tdIsbn = document.createElement("td");
        tdIsbn.innerText = this.number;
        let tdDelete = document.createElement("td");
        tdDelete.classList.add("delete");
        tdDelete.innerHTML= `<i class="fas fa-trash-alt" data-id=${this.id}></i>`
        tdAuthor.innerText = this.author;
        tdIsbn.innerText = this.number;
        tdTitle.innerText = this.title;
        tr.append(tdTitle,tdAuthor,tdIsbn,tdDelete);
        return tr;
    };
}

let todoList = new TodoList(document.querySelector("tbody"));
let form = document.querySelector("form");
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let title = document.querySelector(".title").value;
   let author = document.querySelector(".author").value;
   let number = document.querySelector(".number").value;
   todoList.add(title, author, number);
})
// todoList.createUi();

