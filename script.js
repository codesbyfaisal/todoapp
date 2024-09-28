const app = document.getElementById("app");
const userinput = document.getElementById("userinput");
const list = document.getElementById("list");

const addTask = (e) => {
  e.preventDefault();

  if (userinput.value === '') {
    return showToast('todo must not be empty')
  }

  const task = userinput.value;
  userinput.value = '';

  const li = document.createElement("li");
  li.textContent = task;
  const btn = document.createElement("button");
  btn.setAttribute('class', 'fa-solid fa-trash');
  li.appendChild(btn);

  list.appendChild(li);
};

app.addEventListener("submit", addTask);