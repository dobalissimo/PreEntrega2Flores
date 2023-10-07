import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig'; 

export async function getProducts() {
  const productCollection = collection(db, 'items');
  const querySnapshot = await getDocs(productCollection);

  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });

  return products;
}

export async function getProductById(productId) {
  const productDocRef = doc(db, 'items', productId);
  const productDocSnapshot = await getDoc(productDocRef);

  if (productDocSnapshot.exists()) {
    return { id: productDocSnapshot.id, ...productDocSnapshot.data() };
  } else {
    return null;
  }
}

export async function getProductsByCategory(productCategory) {
  const productCollection = collection(db, 'items');
  const productQuery = query(productCollection, where('category', '==', productCategory));
  const querySnapshot = await getDocs(productQuery);

  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });

  return products;
}
