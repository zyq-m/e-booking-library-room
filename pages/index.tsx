import React, { useRef, useState } from "react";

import { useRouter } from "next/router";
import Button from "../components/Button";
import Input from "../components/Input";
import useSupabase from "../lib/supabaseClient";

export default function Home() {
  const { session, supabase } = useSupabase();
  const [signUp, setSignUp] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function onLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    });

    setError("");

    if (error) setError(error.message);

    router.push("/home");
  }

  async function onSignUp() {
    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    });

    setError("");
    setSuccess(false);

    if (error) setError(error.message);
    else setSuccess(true);
  }

  function onClick() {
    setSignUp(!signUp);
    setError("");
    setSuccess(false);
  }

  return (
    <div className="grid min-h-screen px-4">
      <div className="self-center">
        <h1 className="mb-6 text-4xl">Find Your Favorite Room to Study</h1>
        <p>Find your study room and book any time you want with us</p>
      </div>
      <div className="self-center">
        <Input
          id="email"
          ref={emailRef}
          label="Email"
          type="email"
          styles="mb-4"
        />
        <Input
          id="password"
          ref={passwordRef}
          label="Password"
          type="password"
          styles="mb-4"
        />
        {signUp ? (
          <Button
            label="Sign Up"
            styles="mb-3 w-full text-lg"
            onClick={onSignUp}
          />
        ) : (
          <Button
            label="Login"
            styles="mb-3 w-full text-lg"
            onClick={onLogin}
          />
        )}
        <p className="mb-2 text-center text-gray-500">
          {!signUp ? "No account?" : "Already have account?"}
          <a className="text-blue-400" onClick={onClick}>
            {!signUp ? " Sign up" : " Log In"}
          </a>
        </p>
        {error && <p className="text-center text-red-500">{error}</p>}
        {success && <p className="text-center">Please confirm your email</p>}
      </div>
    </div>
  );
}
