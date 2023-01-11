const postData = async (url = '') => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
    },
    body: JSON.stringify({ 
      token: localStorage.getItem("access"), 
      user: localStorage.getItem("user"),
    })
  });
  if (response.status === 200) {
  }
  return response.json()
}

window.onload = postData('http://localhost:8000/api/auth/jwt/verify/');

const posta = () => {
  const us = localStorage.getItem("user");
  console.log(us);
  console.log(localStorage.length);
}
