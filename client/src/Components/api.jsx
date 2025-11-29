const apiUrl = import.meta.env.VITE_API_URL;

export const registerUser = async (username, email, password) => {
  const res = await fetch(`${apiUrl}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const fetchPosts = async () => {
  const res = await fetch(`${apiUrl}/posts`);
  return res.json();
};

export const fetchPostById = async (id) => {
  const res = await fetch(`${apiUrl}/posts/${id}`);
  return res.json();
};
