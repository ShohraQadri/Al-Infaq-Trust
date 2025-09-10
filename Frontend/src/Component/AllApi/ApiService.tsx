// src/AllApi/ApiService.ts

// function to get API base URL
export const getApiUrl = () => {
  return import.meta.env.VITE_API_URL || "http://localhost:3001";
};

// endpoints
export const endpoints = {
  signin: () => `${getApiUrl()}/api/auth/signin`,
  signup: () => `${getApiUrl()}/api/auth/signup`,
  health: () => `${getApiUrl()}/api/health`,
};

// POST request helper
export const postRequest = async (url: string, body: any) => {
  console.log(" Fetching:", url, body);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  console.log("👉 Response status:", response.status);
  console.log("👉 Raw response text:", text);

  const data = text ? JSON.parse(text) : {};

  if (!response.ok) throw new Error(data.message || "Something went wrong!");
  return data;
};
