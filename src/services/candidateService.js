import {BASE_URL} from '../config.json';

export async function getAppliedJobs (token) {
    return fetch(BASE_URL + 'candidates/jobs/applied', 
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

export async function getAllJobs (token) {
    return fetch(BASE_URL + 'candidates/jobs/', 
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

export async function applyJob (token , job) {
  return fetch(BASE_URL + 'candidates/jobs', 
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