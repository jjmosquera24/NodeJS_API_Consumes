import fetch from "node-fetch";

/*//Get data
function getData() {
  return fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((json) => {
      //console.log(json.data[0]);
      //setObject(json.page);
      return json.data;
    });
}

let todo = {
  userId: 123,
  title: "loren impsum doloris",
  completed: false,
};*/

//Send data
/*function sendData() {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}*/

//sendData();
//getData();
/*getData().then((response) => {
  console.log(response);
});*/
/*
const fetchAndLog = async () => {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const json = await response.json();
  return json;
};*/

//console.log(fetchAndLog.page);

async () => {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const json = await response.json();
  return json;
};
