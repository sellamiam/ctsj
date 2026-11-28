import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

//all functions can be modified to callthe backend

export async function getAllVolunteers() {
  try {
    const querySnapshot = await getDocs(collection(db, "volunteers"));
    const volunteers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data,
    }));
    console.log(volunteers);
    return volunteers;
  } catch (error) {
    console.error("Error getting volunteers:", error);
  }
}

export async function getVolunteersByEmail(email) {
  const q = query(collection(db, "volunteers"), where("email", "==", email));

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
