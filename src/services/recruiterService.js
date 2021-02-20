import {BASE_URL} from '../config.json';

export async function getPostedJobs (token) {
    return fetch(BASE_URL + 'recruiters/jobs', 
    {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(res => res.json())
    .then((result) =>
    {
        return result;
    });
}

export async function postJob (token , job) {
    return fetch(BASE_URL + 'jobs/', 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(job)
    })
    .then(res => res.json())
    .then((result) =>
    {
        return result;
    });
}

export async function getApplicants (token , id) {
    return fetch(BASE_URL + 'recruiters/jobs/' + id + '/candidates', 
    {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(res => res.json())
    .then((result) =>
    {
        return result;
    });
}