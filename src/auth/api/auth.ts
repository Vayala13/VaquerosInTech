export async function loginUser(email: string, password: string) {
  const response = await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return await response.text(); // or JSON if your backend sends JSON
}

export async function registerUser(
  email: string,
  password: string,
  name: string,
  major: string,
  graduationDate: string,
  role: string
) {
  const response = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      major,
      graduationDate,
      role,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Registration failed.");
  }

  return await response.text(); // or response.json() depending on your backend
}