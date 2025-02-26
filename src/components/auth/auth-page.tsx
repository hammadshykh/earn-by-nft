"use client";
import { useFirebaseAuth } from "@/hooks/use-firebase-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import GoogleIcon from "../shared/icons";
import { toast } from "sonner";
import Image from "next/image";
import { Container } from "../layout/container";

const authSchema = z.object({
 email: z.string().email("Invalid email address"),
 password: z.string().min(6, "Password must be at least 6 characters"),
 referralCode: z.string().optional(),
});

type AuthFormData = z.infer<typeof authSchema>;

export default function AuthPage() {
 const { user, signInWithGoogle, signInWithEmail, signUpWithEmail, loading } =
  useFirebaseAuth();
 const router = useRouter();

 const loginForm = useForm<AuthFormData>({
  resolver: zodResolver(authSchema),
  defaultValues: {
   email: "",
   password: "",
  },
 });

 const registerForm = useForm<AuthFormData>({
  resolver: zodResolver(authSchema),
  defaultValues: {
   email: "",
   password: "",
   referralCode: "",
  },
 });

 if (user) {
  router.push("/");
  return null;
 }

 const handleLoginSubmit = async (data: AuthFormData) => {
  try {
   await signInWithEmail(data.email, data.password);
  } catch (error) {
   console.log(error);
  }
 };

 const handleRegisterSubmit = async (data: AuthFormData) => {
  try {
   await signUpWithEmail(data.email, data.password, data.referralCode);

   toast.success("Your account has been created successfully.");
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <Container>
   <div className="min-h-screen grid md:grid-cols-2">
    <div className="flex items-center  p-8">
     <Card className="w-full max-w-lg bg-transparent border-0">
      <CardHeader className="text-center">
       <CardTitle>Welcome to EarnByNFT</CardTitle>
       <CardDescription>
        Login or create an account to start trading NFTs
       </CardDescription>
      </CardHeader>
      <CardContent>
       <Button
        variant="outline"
        className="w-full mb-6"
        onClick={() => signInWithGoogle()}
        disabled={loading}
       >
        {loading ? (
         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
         <GoogleIcon />
        )}
        Continue with Google
       </Button>

       <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
         <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
         <span className="bg-background px-2 text-muted-foreground">
          Or continue with
         </span>
        </div>
       </div>

       <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2">
         <TabsTrigger value="login">Login</TabsTrigger>
         <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
         <Form {...loginForm}>
          <form
           onSubmit={loginForm.handleSubmit(handleLoginSubmit)}
           className="space-y-4"
          >
           <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
             <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
               <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
             </FormItem>
            )}
           />
           <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
             <FormItem>
              <FormLabel className="text-base">Password</FormLabel>
              <FormControl>
               <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
             </FormItem>
            )}
           />
           {loginForm.formState.errors.root && (
            <p className="text-sm font-medium text-destructive">
             {loginForm.formState.errors.root.message}
            </p>
           )}
           <Button
            type="submit"
            className="w-full"
            disabled={loading || loginForm.formState.isSubmitting}
           >
            {loading || loginForm.formState.isSubmitting ? (
             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Login
           </Button>
          </form>
         </Form>
        </TabsContent>

        <TabsContent value="register">
         <Form {...registerForm}>
          <form
           onSubmit={registerForm.handleSubmit(handleRegisterSubmit)}
           className="space-y-4"
          >
           <FormField
            control={registerForm.control}
            name="email"
            render={({ field }) => (
             <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
               <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
             </FormItem>
            )}
           />
           <FormField
            control={registerForm.control}
            name="password"
            render={({ field }) => (
             <FormItem>
              <FormLabel className="text-base">Password</FormLabel>
              <FormControl>
               <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
             </FormItem>
            )}
           />
           <FormField
            control={registerForm.control}
            name="referralCode"
            render={({ field }) => (
             <FormItem>
              <FormLabel className="text-base">
               Referral Code (Optional)
              </FormLabel>
              <FormControl>
               <Input {...field} placeholder="Enter referral code" />
              </FormControl>
              <FormMessage />
             </FormItem>
            )}
           />
           {registerForm.formState.errors.root && (
            <p className="text-sm font-medium text-destructive">
             {registerForm.formState.errors.root.message}
            </p>
           )}
           <Button
            type="submit"
            className="w-full"
            disabled={loading || registerForm.formState.isSubmitting}
           >
            {loading || registerForm.formState.isSubmitting ? (
             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Register
           </Button>
          </form>
         </Form>
        </TabsContent>
       </Tabs>
      </CardContent>
     </Card>
    </div>

    <div className="hidden md:flex items-center flex-col justify-center relative">
     <div className="relative aspect-square w-full mt-10 h-[400px]">
      <Image
       src={"/images/register-page-image.webp"}
       className="w-max h-full"
       fill
       alt="nfts"
      />
     </div>
    </div>
   </div>
  </Container>
 );
}
