const app = document.getElementById("app");
const userinput = document.getElementById("userinput");
const toast = document.querySelector(".toast");
const list = document.getElementById("list");

const showToast = (message) => {
  toast.innerHTML = message
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

const addTask = (e) => {
  e.preventDefault();
  const task = userinput.value.trim();

  if (task === '') {
    userinput.value = '';
    return showToast('todo must not be empty')
  }

  if (list.children[0]) {
    for (let i = 0; i < list.children.length; i++) {
      if (list.children[i].children[0].innerHTML === task) {
        userinput.value = '';
        return showToast('task already added')
      }
    }
  }

  userinput.value = '';

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = task;
  const btn = document.createElement("button");
  btn.setAttribute('class', 'fa-solid fa-trash');
  li.appendChild(span)
  li.appendChild(btn);

  list.appendChild(li);
  showToast('task added');

  li.addEventListener('click', () => {
    span.classList.toggle('overline')
    showToast('task delete successfully')
  })

  btn.addEventListener("click", () => {
    li.remove();
  });
};

app.addEventListener("submit", addTask);