"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { motion } from "framer-motion";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = signup
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !pass) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password: pass }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Login successful!");
        window.location.href = "/profile";
      } else {
        toast.error(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !pass || !phone) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password: pass, phone }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Account created successfully!");
        setIsLogin(true);
      } else {
        toast.error(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <ToastContainer position="top-center" />
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/reg/download.png"
          alt="Auth Image"
          width={500}
          height={300}
        />
      </motion.div>

      {isLogin ? (
        <form onSubmit={handleLogin} className="flex flex-col gap-3 w-80">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full border rounded-md p-2"
          />
          <Button type="submit" className="mt-2">
            Login
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSignUp} className="flex flex-col gap-3 w-80">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-md p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full border rounded-md p-2"
          />
          <Button type="submit" className="mt-2">
            Sign Up
          </Button>
        </form>
      )}

      <p className="mt-2 text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          className="text-blue-500 underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default AuthForm;
