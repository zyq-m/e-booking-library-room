import React from "react";

export default function Home() {
  return (
    <div className="grid min-h-screen">
      <div className="self-center">
        <h1 className="mb-6 text-4xl">Find Your Favorite Room to Study</h1>
        <p>Find your study room and book any time you want with us</p>
      </div>
      <div className="self-end">
        <button className="mb-3 w-full py-2 text-lg rounded-3xl bg-blue-400">
          Sign up
        </button>
        <p className="mb-6 text-center">
          Already have account? <a className="text-blue-400">Log in</a>
        </p>
      </div>
    </div>
  );
}
