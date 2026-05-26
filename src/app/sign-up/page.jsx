
"use client";
import { authClient, signOut } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { CgGoogle } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";


export default function SignUpPage() {

    const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

        console.log(name,image,email,password)
    const {data, error} = await authClient.signUp.email({
        name,
        email,
        password,
        image,
    })
   

    //  if(!error) {
    //    toast.success('SignUp Successfully')
    //     // router.push('/')
         
    // }

    console.log({data, error})
    // if(data){
    //    redirect('/login')
                                                        
    // }
      

  if (data) {
    toast.success("Signup Successfully");

    // logout user immediately
    await authClient.signOut();

    // redirect to login page
    router.push("/login");
  }
  
  };


  const handleGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
  });

};

  return (
    
    <Card className="max-w-md  md:mx-auto my-10 p-8 shadow-xl border rounded-2xl mx-5">

  {/* Header */}
  <div className="text-center mb-6">
    <h1 className="text-3xl font-bold tracking-tight">
      Create Account
    </h1>
    <p className="text-sm text-gray-500 mt-2">
      Join <span className="font-semibold text-[#0b8fac]">Doctor-Appointment</span> to explore and manage your appointments.
    </p>
  </div>

  {/* Form */}
  <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

    <TextField isRequired name="name" type="text">
      <Label>Full Name</Label>
      <Input placeholder="" />
      <FieldError />
    </TextField>

    <TextField  name="image" type="url">
      <Label>Profile Image</Label>
      <Input placeholder="" />
      <FieldError />
    </TextField>

    <TextField
      isRequired
      name="email"
      type="email"
      validate={(value) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return "Enter a valid email address";
        }
        return null;
      }}
    >
      <Label>Email Address</Label>
      <Input placeholder="" />
      <FieldError />
    </TextField>

    <TextField
      isRequired
      minLength={8}
      name="password"
      type="password"
      validate={(value) => {
        if (value.length < 8) return "At least 8 characters required";
        if (!/[A-Z]/.test(value)) return "Include one uppercase letter";
        if (!/[0-9]/.test(value)) return "Include one number";
        return null;
      }}
    >
      <Label>Password</Label>
      <Input placeholder="" />
      <Description>
        Minimum 8 characters, 1 uppercase & 1 number
      </Description>
      <FieldError />
    </TextField>

    {/* Buttons */}
    <Button type="submit" className="w-full mt-2">
     
      Create Account
    </Button>

  </Form>

  {/* Divider */}
  <div className="flex items-center gap-3 my-6">
    <div className="flex-1 h-px bg-gray-200"></div>
    <span className="text-sm text-gray-400">OR Register With</span>
    <div className="flex-1 h-px bg-gray-200"></div>
  </div>

  {/* Google Button */}
  <Button
    onClick={handleGoogle}
    variant="outline"
    className="w-full flex items-center justify-center gap-2"
  >
    <FcGoogle className="text-lg " />
    Continue with Google
  </Button>

  {/* Footer */}
  <p className="text-center text-sm text-gray-500 mt-6">
    Already have an account?{" "}
    <Link href="/login" className="text-[#0b8fac] font-medium cursor-pointer hover:underline">
      Login
    </Link>
  </p>

</Card>
  );
}