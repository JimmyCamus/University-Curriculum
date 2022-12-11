import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { firestoreReference, storage } from "../lib/config/firebase.config";
import { Career } from "../lib/types/career.type";

export const getCareers = async (): Promise<Career[]> => {
  const careerColectionReference: CollectionReference = collection(
    firestoreReference,
    "careers"
  );

  const data: QuerySnapshot<DocumentData> = await getDocs(
    careerColectionReference
  );

  const cleanData: Career[] = data.docs.map((doc) => {
    return {
      id: doc.id,
      name: doc.data().name,
    };
  });
  return cleanData;
};

export const getImage = async (name: String) => {
  const url =  getDownloadURL(ref(storage, `images/${name}.jpg`));
  return url;
};
