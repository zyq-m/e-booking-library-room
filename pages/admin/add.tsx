import React, { useRef } from "react";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";
// add new admin

export default function Add() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function onAdd() {
    console.log(emailRef.current?.value, passwordRef.current?.value);
  }

  return (
    <Layout>
      <div>
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
        <Button label="Add" id="add" styles="w-full" onClick={onAdd} />
      </div>
    </Layout>
  );
}
