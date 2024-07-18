import { useAuth0 } from "@auth0/auth0-react";

export default function Homepage() {
  const { isAuthenticated, logout, user } = useAuth0();
  console.log(user);
  return (
    <div>
      <div>HomePage</div>
      {isAuthenticated && <button onClick={() => logout()}>Logout</button>}
    </div>
  );
}
