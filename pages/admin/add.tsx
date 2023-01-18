import React, { useRef, useState } from "react";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { addAdmin, addUser } from "../../helper/addUser";
// add new admin

export default function Add() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function onAdd() {
    const signUp = await addUser(
      emailRef.current?.value || "",
      passwordRef.current?.value || ""
    );

    await addAdmin(signUp.data.user?.id);

    if (signUp.error) {
      setError(signUp.error.message);
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
    }
  }

  return (
    <Layout>
      <div>
        <h2 className="mb-4">Add new admin</h2>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="example@email.com"
          ref={emailRef}
          styles="mb-4"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          ref={passwordRef}
          styles="mb-4"
        />
        <Button label="Add" id="add" styles="w-full mb-6" onClick={onAdd} />
        {success && (
          <p className="text-center text-sm text-green-500">
            Successfully sign up for admin. Please verify your email
          </p>
        )}
        {error && <p className="text-center text-sm text-red-500">{error}</p>}
      </div>
    </Layout>
  );
}
