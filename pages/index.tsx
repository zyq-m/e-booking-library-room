import React from "react";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="grid min-h-screen px-4">
      <div className="self-center">
        <h1 className="mb-6 text-4xl">Find Your Favorite Room to Study</h1>
        <p>Find your study room and book any time you want with us</p>
      </div>
      <div className="self-end">
        <Button label="Sign up" styles="mb-3 w-full text-lg" />
        <p className="mb-6 text-center">
          Already have account? <a className="text-blue-400">Log in</a>
        </p>
      </div>
    </div>
  );
}
