"use client";

import {
 useState,
 useEffect,
 createContext,
 useContext,
 ReactNode,
} from "react";
import {
 User,
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
 signInWithPopup,
 signOut,
 onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";
import { generateReferralCode } from "@/lib/utils";
import { toast } from "sonner";

interface FirebaseAuthContextType {
 user: User | null;
 loading: boolean;
 error: Error | null;
 signInWithGoogle: () => Promise<void>;
 signInWithEmail: (email: string, password: string) => Promise<void>;
 signUpWithEmail: (
  email: string,
  password: string,
  referralCode?: string
 ) => Promise<void>;
 logout: () => Promise<void>;
}

const FirebaseAuthContext = createContext<FirebaseAuthContextType | null>(null);

async function createUserProfile(user: User, referralCode?: string) {
 const userRef = doc(db, "users", user.uid);
 const userSnap = await getDoc(userRef);

 if (!userSnap.exists()) {
  // Generate a unique referral code for the new user
  const newReferralCode = generateReferralCode();

  // Create user profile
  const userData = {
   email: user.email,
   referralCode: newReferralCode,
   referredBy: null,
   teamMembers: [],
   totalEarnings: 0,
   dailyEarnings: 0,
   referralEarnings: 0,
   activityStake: 0,
   createdAt: new Date().toISOString(),
  };

  // If user was referred, update the referrer's profile
  if (referralCode) {
   const referrerSnapshot = await getDoc(
    doc(db, "referralCodes", referralCode)
   );

   if (referrerSnapshot.exists()) {
    const referrerId = referrerSnapshot.data().userId;

    // Update the new user's profile with referrer info
    userData.referredBy = referrerId;

    // Update referrer's team members
    const referrerRef = doc(db, "users", referrerId);
    await updateDoc(referrerRef, {
     teamMembers: arrayUnion(user.uid),
    });
   }
  }

  // Create the user profile
  await setDoc(userRef, userData);

  // Store the referral code mapping
  await setDoc(doc(db, "referralCodes", newReferralCode), {
   userId: user.uid,
   createdAt: new Date().toISOString(),
  });
 }
}

export function FirebaseAuthProvider({ children }: { children: ReactNode }) {
 const [user, setUser] = useState<User | null>(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<Error | null>(null);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(
   auth,
   (user) => {
    setUser(user);
    setLoading(false);
   },
   (error) => {
    setError(error);
    setLoading(false);
   }
  );

  return () => unsubscribe();
 }, []);

 const signInWithGoogle = async () => {
  try {
   setLoading(true);
   const result = await signInWithPopup(auth, googleProvider);
   await createUserProfile(result.user);
   toast.success("Successfully signed in with Google");
  } catch (error) {
   setError(error as Error);
   toast.error("Login failed", {
    description: (error as Error).message,
   });
  } finally {
   setLoading(false);
  }
 };

 const signInWithEmail = async (email: string, password: string) => {
  try {
   setLoading(true);
   await signInWithEmailAndPassword(auth, email, password);
   toast.success("Successfully signed in");
  } catch (error) {
   setError(error as Error);
   toast.error("Login failed!", {
    description: "Please check it out your cradential",
   });
   throw error;
  } finally {
   setLoading(false);
  }
 };

 const signUpWithEmail = async (
  email: string,
  password: string,
  referralCode?: string
 ) => {
  try {
   setLoading(true);
   const result = await createUserWithEmailAndPassword(auth, email, password);
   await createUserProfile(result.user, referralCode);
   toast.success("Welcome to EarnByNFT!", {
    description: "Your account has been created successfully",
   });
  } catch (error) {
   setError(error as Error);
   toast.error("SignUp failed!", {
    description: "Firebase: Error (auth/email-already-in-use)",
   });
   throw error;
  } finally {
   setLoading(false);
  }
 };

 const logout = async () => {
  try {
   setLoading(true);
   await signOut(auth);
   toast.success("Successfully logged out");
  } catch (error) {
   setError(error as Error);
   toast.error("Logout failed", {
    description: (error as Error).message,
   });
  } finally {
   setLoading(false);
  }
 };

 return (
  <FirebaseAuthContext.Provider
   value={{
    user,
    loading,
    error,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logout,
   }}
  >
   {children}
  </FirebaseAuthContext.Provider>
 );
}

export function useFirebaseAuth() {
 const context = useContext(FirebaseAuthContext);
 if (!context) {
  throw new Error("useFirebaseAuth must be used within a FirebaseAuthProvider");
 }
 return context;
}
