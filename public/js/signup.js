//sign up handler function
const signUpToApp = async (event) => {
  event.preventDefault();

  const username = document
    .querySelector('#inlineFormInputGroupUsername')
    .value.trim();
  const email = document.querySelector('#inputEmail4').value.trim();
  const password = document.querySelector('#inputPassword4').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#sign-up-btn').addEventListener('submit', signUpToApp);
