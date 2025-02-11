import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Label from "../components/ui/label";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-[100vh] overflow-y-hidden bg-black text-white">
      <div className="flex items-center justify-center py-12 px-5">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground text-gray-300 hidden md:block">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="px-3 py-2 bg-black border-[1px] border-gray-600"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline text-gray-300"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="px-3 py-2 bg-black border-[1px] border-gray-600"
              />
            </div>
            <Button
              type="submit"
              className="w-full text-black bg-white text-lg py-2"
            >
              Login
            </Button>
            <Button
              className="w-full border-[1px] border-gray-600 py-2"
              onClick={() => loginWithRedirect()}
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="../../public/Login-Registration Page/Vector.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
        />
      </div>
    </div>
  );
}
