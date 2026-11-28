import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function createSubmission(data) {
  return addDoc(collection(db, "volunteers"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
