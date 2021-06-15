//login handler function
const loginToApp = async (event) => {
  const email = document.querySelector('#inputEmail4').value.trim();
  const password = document.querySelector('#inputPassword4').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // successful login redirects to dashboard page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};
