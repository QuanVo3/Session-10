function handleData(data)
{
    let table = document.getElementById("table");
    for(let i = 0; i < data.length;i++)
    {
        let row = document.createElement("tr");
        let userId = document.createElement("td");
        userId.innerText = data[i].userId;
        let Id = document.createElement("td");
        Id.innerText = data[i].id;
        let title = document.createElement("td");
        title.innerText = data[i].title;
        let body = document.createElement("td");
        body.innerText = data[i].body;
        row.insertAdjacentElement('beforeend',userId);
        row.insertAdjacentElement('beforeend',Id);
        row.insertAdjacentElement('beforeend',title);
        row.insertAdjacentElement('beforeend',body);
        table.appendChild(row);
    }
}
fetch("https://jsonplaceholder.typicode.com/posts")
.then((request) => request.json())
.then(handleData);
