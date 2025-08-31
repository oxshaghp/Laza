import React from "react";
import { Button } from "./ui/button";

function LogIn() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md p-2"
        />
        <Button type="submit" className="mt-2">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default LogIn;
