import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import Button from "../components/Button";
import Input from "../components/Input";
import useSupabase from "../hooks/useSupabaseAuth";
import { login } from "../helper/login";
import { addUser } from "../helper/addUser";

export default function Home() {
  const { supabase } = useSupabase();
  const [signUp, setSignUp] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function onLogin() {
    const { error, role } = await login(
      supabase,
      emailRef.current?.value || "",
      passwordRef.current?.value || ""
    );

    setError("");

    if (error) {
      setError(error.message);
      return;
    }

    if (role == "user") {
      router.push("/home");
    } else {
      router.push("/admin");
    }
  }

  async function onSignUp() {
    const { error } = await addUser(
      supabase,
      emailRef.current?.value || "",
      passwordRef.current?.value || "",
      nameRef.current?.value
    );

    if (error) {
      setSuccess(false);
      setError(error.message);
    } else {
      setSuccess(true);
      setError("");
    }
  }

  function onClick() {
    setSignUp(!signUp);
    setError("");
    setSuccess(false);
  }

  return (
    <div className="grid min-h-screen px-4 bg-img">
      <div className="self-end">
        <h1 className="mb-6 text-4xl font-semibold text-blue-900">
          Find Your Favorite Room to Study
        </h1>
        <p className="font-light">
          Find your study room and book any time you want with us
        </p>
      </div>
      <div className="self-center">
        {signUp && (
          <Input
            id="name"
            ref={nameRef}
            label="Name"
            type="text"
            styles="mb-4"
          />
        )}
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
            id="signup"
            styles="mb-3 w-full text-lg"
            onClick={onSignUp}
          />
        ) : (
          <Button
            label="Log In"
            id="login"
            styles="mb-3 w-full text-lg"
            onClick={onLogin}
          />
        )}
        <p className="mb-2 text-center text-gray-500">
          {!signUp ? "Don't have account?" : "Already have account?"}
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
