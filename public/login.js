document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('LoginEmail').value.trim();
    const password = document.getElementById('LoginPassword').value.trim();

    try {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify({ email , password }),
        });

        const data = await res.json();
        if (res.ok) {
            alert(data.message);
            window.location.href = "home.html"; // Redirect to dashboard or another page
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error(err);
        alert('Could not connect to server. Try again later.');
    }
});