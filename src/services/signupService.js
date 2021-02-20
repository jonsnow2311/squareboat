import {BASE_URL} from '../config.json';

export async function signupPost(data) {
    // Default options are marked with *

    return fetch(BASE_URL + 'auth/register', 
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

export async function saveUser(data) {
    localStorage.setItem("user" , data);
}