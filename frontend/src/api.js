// frontend/src/api.js
const API_URL = import.meta.env.VITE_API_URL || '/';

export async function getHealth() {
  const res = await fetch(new URL('/health', API_URL));
  if (!res.ok) throw new Error('Failed to fetch health');
  return res.json();
}
