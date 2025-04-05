// app/(auth)/auth.ts

export async function auth() {
  return {
    user: {
      id: 'demo-user-1',
      name: 'Demo User',
      email: 'demo@manup.com',
      image: 'https://i.pravatar.cc/100?u=demo-user-1', // optional
    },
  };
}
