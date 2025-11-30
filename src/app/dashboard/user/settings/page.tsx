"use client";

import { FormEvent, useEffect, useState } from "react";
import { Lock, User } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApp } from "@/context/AppContext";
import { AppState } from "../types/type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

export default function SettingsPage() {
  const [user, setUser] = useState<AppState["user"] | null>(null);
  const { state, updateUserData } = useApp();

  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (state.user) {
      setUser(state.user);
      setFirstName(state.user.fullName.split(" ")[0]);
      setLastName(state.user.fullName.split(" ")[1]);
      setPhoneNumber(state.user.phoneNumber || "");
      setAddress(state.user.address || "");
      setZipCode(state.user.sortcode || "");
      setSortCode(state.user.sortcode || "");
      setCountry(state.user.country || "");
      setOccupation(state.user.occupation || "");
      setDateOfBirth(state.user.dateOfBirth || "");
      setGender(state.user.gender || "");
      // Initialize other fields if available in user data
    }
  }, [state.user]);

  const handleSaveChanges = async () => {
    if (user) {
      const updatedData = {
        fullName: `${firstName} ${lastName}`,
        phoneNumber,
        address,
        zipCode,
        accountNumber: state.user?.accountNumber,
        email: state.user?.email,
        sortCode,
        country,
        occupation,
        dateOfBirth,
        gender,
      };
      toast.promise(
        updateUserData(user.uid, updatedData),
        {
          loading: "Updating your details...",
          success: "Details updated successfully",
          error: "Failed to update details",
        },
        {
          style: {
            minWidth: "250px",
            fontSize: "14px",
          },
          success: {
            duration: 4000,
          },
          position: "top-right",
        }
      );
    }
  };

    const handleUpdatePin = (event: FormEvent) => {
      event.preventDefault()
      const form = event.currentTarget as HTMLFormElement
      const formData = new FormData(form);
    const newPin = formData.get("new-pin") as string || '';
    const confirmPin= formData.get("confirm-pin") as string || '';

    if (newPin !== confirmPin) {
      toast.error("New passwords do not match");
    }

    if (user) {
      toast.promise(
        updateUserData(user.uid, { pin: newPin }),
        {
          loading: "Updating your pin...",
          success: "Pin updated successfully",
          error: "Failed to update pin",
        },
        {
          style: {
            minWidth: "250px",
            fontSize: "14px",
          },
          success: {
            duration: 4000,
          },
          position: "top-right",
        }
      )
    }
  }

  const handleUpdatePassword = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const currentPassword = formData.get("current-password") as string;
    const newPassword = formData.get("new-password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if(state.user?.password !== currentPassword) {
      toast.error("Incorrect Old Password");
      return
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (user) {
      toast.promise(
        updateUserData(user.uid, { password: newPassword }),
        {
          loading: "Updating your password...",
          success: "Password updated successfully",
          error: "Failed to update password",
        },
        {
          style: {
            minWidth: "250px",
            fontSize: "14px",
          },
          success: {
            duration: 4000,
          },
          position: "top-right",
        }
      );
    }
  };



  return (
    <div className="grid gap-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100">
          <TabsTrigger value="profile" className="data-[state=active]:bg-white">
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-white">
            Security
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="mt-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-10 w-10 text-gray-500" />
                </div>
                <Button
                  variant="outline"
                  className="border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                >
                  Change Avatar
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border-gray-200"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border-gray-200"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="city">Country</Label>
                  <Input defaultValue={state.user?.country} readOnly className="border-gray-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sort-code">Sort Code</Label>
                  <Input
                    id="sort-code"
                    value={sortCode}
                    onChange={(e) => setSortCode(e.target.value)}
                    className="border-gray-200"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="account-no">Account No</Label>
                  <Input
                    id="account-no"
                    defaultValue={state.user?.accountNumber}
                    readOnly
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={state.user?.email}
                    readOnly
                    className="border-gray-200"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="border-gray-200"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date-of-birth">Date of Birth</Label>
                  <Input
                    id="date-of-birth"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={gender} onValueChange={(value) => setGender(value)}>
                    <SelectTrigger className="border-gray-200 w-full">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Fields */}
            </CardContent>
            <CardFooter>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="mt-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Security Settings</CardTitle>
              <CardDescription>Manage your password and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-x-12">

              <form onSubmit={handleUpdatePin}>
                <div className="space-y-4">
                  <h3 className="text-base font-medium flex items-center">
                    <Lock className="mr-2 h-5 w-5 text-gray-500" />
                    Pin
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Pin</Label>
                    <Input
                      id="new-pin"
                      name="new-pin"
                      required
                      className="border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Pin</Label>
                    <Input
                      id="confirm-pin"
                      name="confirm-pin"
                      required
                      className="border-gray-200"
                    />
                  </div>
                  <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
                    Update Pin
                  </Button>
                </div>
              </form>
              <form onSubmit={handleUpdatePassword}>
                <div className="space-y-4">
                  <h3 className="text-base font-medium flex items-center">
                    <Lock className="mr-2 h-5 w-5 text-gray-500" />
                    Password
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Old Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      name="current-password"
                      required
                      className="border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      name="new-password"
                      required
                      className="border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      name="confirm-password"
                      required
                      className="border-gray-200"
                    />
                  </div>
                  <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
                    Update Password
                  </Button>
                </div>
              </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
