const app = document.getElementById("app");
const userinput = document.getElementById("userinput");
const toast = document.querySelector(".toast");
const list = document.getElementById("list");

const showToast = (message) => {
  toast.innerHTML = message
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1000);
}

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

  li.addEventListener('click', () => {
    li.classList.toggle('overline')
  })

  btn.addEventListener("click", () => {
    li.remove();
  });
};

app.addEventListener("submit", addTask);