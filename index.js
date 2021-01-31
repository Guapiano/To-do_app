//Coletando ID'S do input e do botão de adicionar TO-DO.
const add_todo_input = document.getElementById('add-todo-input');
const add_todo_button = document.getElementById('add-todo-button');

//Coletando ID da div filho do todos-container.
const todos_contents = document.getElementById('todos-contents');

function addTodo(){
    add_todo_button.addEventListener("click", () => {
        const create_todo = () => {
            //Criando o Background da TO-DO.
            let todo_bg = document.createElement('div');
                todo_bg.classList.add('todo-bg');
                todos_contents.appendChild(todo_bg);

            //Criando os conteúdos da TO-DO.
            let todo_contents_bg = document.createElement('div');
                todo_contents_bg.classList.add('todo-bg-contents');
                todo_bg.appendChild(todo_contents_bg);

            //Criando o texto da TO-DO.
            let todo_text = document.createElement('p');
                todo_text.classList.add('todo-text');
                todo_text.innerText = add_todo_input.value;
                todo_contents_bg.appendChild(todo_text);

            //Criando botão que irá deletar a TO-DO.
            let complete_button = document.createElement('button');
                complete_button.classList.add('delete-todo-button');
                complete_button.innerHTML = "Complete";
                todo_contents_bg.appendChild(complete_button);

            //Limpando o Input.
            add_todo_input.value = "";

            //Criando função para deletar a TO-DO.
            const delete_todo = () => {
                complete_button.addEventListener("click", () => {
                    todo_bg.remove();
                })
            }
            delete_todo()
        }

        //Verificando se o Input está vazio.
        if(add_todo_input.value === ''){
            alert('Você precisa adicionar uma TO-DO.');
        }else(
            create_todo()
        )
    })
}

addTodo()