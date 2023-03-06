//import REACT_APP_URL from "../Utils/.env"

export default async function skillsRequest(urlParams) {
  //const params = new URLSearchParams({q: urlParams})
  console.log(`http://localhost:7777/api/${urlParams}`);
  const response = await fetch(`http://localhost:7777/api/${urlParams}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}


export async function makingOrder(urlParams, data) {
  console.log(33, typeof data.items[0].price)
  const response = await fetch(`http://localhost:7777/api/${urlParams}`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  });
  if(!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.status;

  }