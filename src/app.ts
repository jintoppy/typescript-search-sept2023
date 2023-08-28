const inputEl = <HTMLInputElement>document.querySelector('input');
const buttonEl = <HTMLButtonElement>document.querySelector('button');
const containerEl = <HTMLDivElement>document.querySelector('#result-container');

type StudentResponse = {
    total_count:number;
    incomplete_results: boolean;
    items: Student[]
}

type Student = {
    login:string;
    id:number;
    url:string;
}


const renderList = (data: Student[]) => {
  const liHtml = data
                  .map(student => `<li>${student.login}</li>`)
                  .join('');

  containerEl.innerHTML = `<ul>
  ${liHtml}
  </ul>`;
}

buttonEl.addEventListener('click', () => {
  const searchValue : string = inputEl.value.toLowerCase();
  fetch(`https://api.github.com/search/users?q=${searchValue}`)
    .then(res => res.json())
    .then((result: StudentResponse) => renderList(result.items))
});