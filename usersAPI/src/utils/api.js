let apiToken = 'f3b56fe9849b82753f47cb8eb83398426c27fc4a7f0ac5d4df750302bfda1de9';

export async function getUsers() {
  const response = await fetch(
  `https://gorest.co.in/public/v2/users`,
  {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${apiToken}`
    },
  }
  ).then((response) => response.json())

  return response
}

export async function editUser(userId, query) {
  const response = await fetch(
  `https://gorest.co.in/public/v2/users/${userId}`,
  {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${apiToken}`
    },
    body: JSON.stringify(query),
  }
  ).then((response) => response.json())
  
  return response
}

export async function findUser(name) {
  const response = await fetch(
  `https://gorest.co.in/public/v2/users?name=${name}`,
  {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${apiToken}`
    },
  }
  ).then((response) => response.json())
  
  return response
}