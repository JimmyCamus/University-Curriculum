import {
  collection,
  CollectionReference,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { firestoreReference, storage } from "../lib/config/firebase.config";
import { Career, Course } from "../lib/types/career.type";

export const getCareers = async (): Promise<Career[]> => {
  const careerColectionReference: CollectionReference = collection(
    firestoreReference,
    "careers"
  );

  const data: QuerySnapshot<DocumentData> = await getDocs(
    careerColectionReference
  );

  const cleanData: Career[] = data.docs.map((docSnap) => {
    return {
      id: docSnap.id,
      name: docSnap.data().name,
    };
  });
  return cleanData;
};

export const getImage = async (name: String) => {
  const url = getDownloadURL(ref(storage, `images/${name}.jpg`));
  return url;
};

export const getCareer = async (id: string) => {
  const docRef = doc(firestoreReference, "careers", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log(`Document with id ${id} doesn't exist`);
    return;
  }

  const career: Career = {
    id: docSnap.id,
    name: docSnap.data().name,
  };

  return career;
};

export const getCourses = async (id: string) => {
  const careerDocRef = doc(firestoreReference, "careers", id);
  const coursesRef = collection(firestoreReference, "courses");
  const q = query(coursesRef, where("careers", "array-contains", careerDocRef));
  const querySnapshot = await getDocs(q);
  const courses: Course[] = querySnapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    name: docSnap.data().name,
    semester: docSnap.data().semester,
    successors: docSnap.data().successors ?? [],
    predecessors: docSnap.data().predecessors ?? [],
    isHover: false,
    isPredecessor: false,
    isSuccessor: false,
  }));
  return courses;
};
