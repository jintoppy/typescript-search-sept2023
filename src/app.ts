const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const containerEl = document.querySelector('#result-container');

const students = [
    {name: 'ajay', age: 10},
    {name: 'roopa', age: 12},
    {name: 'judith', age: 11}
];

const renderList = (data) => {
  const liHtml = data
                  .map(student => `<li>${student.name}</li>`)
                  .join('');

  containerEl.innerHTML = `<ul>
  ${liHtml}
  </ul>`;
}

buttonEl.addEventListener('click', () => {
  const searchValue = inputEl.value.toLowerCase();
  const filteredStudents = students
                            .filter(student => student.name
                                                      .toLowerCase()
                                                      .includes(searchValue)
                              );

  renderList(filteredStudents);
});

renderList(students);
