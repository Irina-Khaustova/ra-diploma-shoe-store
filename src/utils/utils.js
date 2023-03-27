export default async function skillsRequest(urlParams) {
  
  console.log(`http://localhost:7777/api/${urlParams}`);
  const response = await fetch(`http://localhost:7777/api/${urlParams}`);
  if (!response.ok) {
    console.log(response)
    throw new Error("Ошибка загрузки");
  }

  return await response.json();
}


export async function makingOrder(urlParams, data) {
  
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