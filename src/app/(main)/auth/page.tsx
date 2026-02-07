"use client";

// @typescript-eslint/no-explicit-any
import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { useApp } from "@/context/AppContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { usePin } from "@/context/AppSecurityContext";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "Japan",
  "India",
  // …add the rest you need
];

export default function AuthPage() {
  // ──────────────────────────────────────────────────────────────
  // 1. All state at the top (important!)
  // ──────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Login fields
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [username, setUsername] = useState("");

  // Success modal (account created)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createdAccountNumber, setCreatedAccountNumber] = useState("");

  const { login, register } = useApp();
  const {setUserAccount} = usePin()
  const router = useRouter();

  // ──────────────────────────────────────────────────────────────
  // Login handler – now uses accountNumber as username
  // ──────────────────────────────────────────────────────────────
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const user = await login(loginUsername.trim(), loginPassword.trim());

      if (!user) throw new Error("Invalid Account ID or password");

      setUserAccount(loginUsername)

      // Store minimal session info (you can expand this)
      // Explicitly type user.role as "admin" | "user"
      type UserRole = "admin" | "user";
      const session = {
        id: user.uid,
        role: user.role as UserRole,
        email: user.email,
        name: user.fullName,
        accountNumber: user.accountNumber,
      };
      localStorage.setItem("session", JSON.stringify(session));

      toast.success("Login successful!");

      // Redirect
      if ((user.role as UserRole) === "admin") {
        router.push("/dashboard/admin");
      } else if ((user.role as UserRole) === "user") {
        router.push("/dashboard/user");
      } else {
        // fallback or handle unexpected role
        router.push("/dashboard/user");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err) || "Login failed";
      setError(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // ──────────────────────────────────────────────────────────────
  // Signup handler – now sends welcome e-mail with account number
  // ──────────────────────────────────────────────────────────────
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !firstName || !lastName || !country) {
      setError("Please fill all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const userData = await register(
        email.trim(),
        password,
        firstName.trim(),
        lastName.trim(),
        country,
        username
      );

      if (!userData?.accountNumber) throw new Error("Account creation failed");

      setCreatedAccountNumber(userData.accountNumber);
      setIsModalVisible(true);

      // Reset form & switch to login tab
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setCountry("");
      setActiveTab("login");

      toast.success("Account created successfully!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err) || "Signup failed";
      setError(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // ──────────────────────────────────────────────────────────────
  // Success modal
  // ──────────────────────────────────────────────────────────────
  const AccountCreatedModal = () => {
    return (
      <Dialog open={isModalVisible} onOpenChange={setIsModalVisible}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="space-y-4">
            <div className="mx-auto bg-emerald-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <DialogTitle className="text-2xl font-semibold text-center">
              Account Created Successfully!
            </DialogTitle>
            <DialogDescription className="text-center space-y-3">
              Congratulations! Your account has been created.
            </DialogDescription>
            <div className="bg-gray-50 p-4 rounded-lg border text-center">
              <strong>Your Account ID:</strong>{" "}
              <span className="font-mono text-lg text-emerald-600 block mt-1">
                {createdAccountNumber}
              </span>
            </div>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button
              onClick={() => setIsModalVisible(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Got it, thanks!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  // ──────────────────────────────────────────────────────────────
  // Render
  // ──────────────────────────────────────────────────────────────
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Toaster />
      <AccountCreatedModal />

      <div className="flex flex-col items-center justify-center w-full p-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
            <p className="text-gray-500">
              Secure, simple, and financial solutions at your fingertips
            </p>
          </div>

          {/* Tab switcher */}
          <div className="grid grid-cols-2 bg-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={() => {
                setActiveTab("login");
                setError("");
              }}
              className={`py-3 font-medium transition ${
                activeTab === "login" ? "bg-white shadow-sm" : ""
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setActiveTab("signup");
                setError("");
              }}
              className={`py-3 font-medium transition ${
                activeTab === "signup" ? "bg-white shadow-sm" : ""
              }`}
            >
              Sign Up
            </button>
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          {/* ====================== LOGIN ====================== */}
          {activeTab === "login" && (
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Enter your Account ID and password</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="username">UserName</Label>
                    <Input
                      id="username"
                      placeholder="e.g. Johndoe111"
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="login-password">Password</Label>
                      <Link href="#" className="text-sm text-emerald-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Sign in"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          )}

          {/* ====================== SIGNUP ====================== */}
          {activeTab === "signup" && (
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Fill in the details below</CardDescription>
              </CardHeader>
              <form onSubmit={handleSignup}>
                <CardContent className="grid gap-y-5 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>UserName</Label>
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Password</Label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Confirm Password</Label>
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
