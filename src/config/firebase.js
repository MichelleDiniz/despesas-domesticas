// after install firebase  with $ npm install --save firebase
import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export const expensesRef = databaseRef.child("expenses");
