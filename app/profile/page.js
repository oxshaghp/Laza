import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function page() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome! You are logged in.</p>
    </div>
  );
}
