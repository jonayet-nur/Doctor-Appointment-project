
"use client";
import { authClient } from "@/lib/auth-client";
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
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

export default function LoginInPage() {

//   const handleGoogleLogin = async () => {
//   await authClient.signIn.social({
//     provider: "google",
//   });
// };
    // const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault();

    
  
    const email = e.target.email.value;
    const password = e.target.password.value;

        console.log(email,password)
    const {data, error} = await authClient.signIn.email({
       
        email,
        password,
        // callbackURL:'/'
       
    })
    

    console.log({data, error})
  

    if (error) {
  toast.error("Login Failed");
} else {
  toast.success("Login Successfully");
}
    
    if(data){
        redirect('/')
    }

  };

  return (
    <Card className="border w-full mx-auto lg:w-125 py-10 my-5">
      <h1 className="text-center text-2xl font-bold">Login</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
      

       

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

       
          <Button type="submit" className="w-full">
            <Check />
            Login
          </Button>
         
       {/* Divider */}
  <div className="flex items-center gap-3 my-2">
    <div className="flex-1 h-px bg-gray-200"></div>
    <span className="text-sm text-gray-400">OR Login With</span>
    <div className="flex-1 h-px bg-gray-200"></div>
  </div>
      </Form>

           <Button
            //   onClick={handleGoogleLogin}
              variant="outline"
              className="lg:w-full w-80 mx-auto flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-lg " />
              Continue with Google
            </Button>

            {/* Footer */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Create an Account{" "}
                <Link href="/sign-up" className="text-[#0b8fac] font-medium cursor-pointer hover:underline">
                  Sign Up
                </Link>
              </p>
    </Card>
  );
}