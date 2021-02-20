import {BASE_URL} from '../config.json';

export async function loginPost(data) {
    // Default options are marked with *

    return fetch(BASE_URL + 'auth/login', 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((result) =>
    {
        //console.log(result["<value>"]);
        return result;
    });
    //return response.json();
}

export function saveUser(data) {
  console.log(data);
  localStorage.setItem("user" , JSON.stringify(data));
}

export function logout() {
  localStorage.removeItem("user");
}