export const typeDefs = ["type Chat {\n  id: Int!\n  messages: [Message]!\n  participants: [User]!\n  createAt: String!\n  updateAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  chat: Chat!\n  user: User!\n  createAt: String!\n  updateAt: String\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  createAt: String!\n  updateAt: String\n}\n\ntype Ride {\n  id: Int!\n  stauts: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLun: Float!\n  dropOffAdress: String!\n  dropOffLat: Float!\n  dropOffLun: Float!\n  price: Float!\n  distnace: String!\n  duration: String!\n  driver: User!\n  passenger: User!\n  createAt: String!\n  updateAt: String\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String, fbId: String!): FacebookConnectResponse!\n  StartPhoneVerification(phoneNumber: String): StartPhoneVerificationResponse!\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  fbId: String\n  profilePhoto: String\n  fullName: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float!\n  lastLat: Float!\n  lastOrientation: Float\n  chat: Chat\n  messages: [Message]\n  verification: [Verification]\n  ridesAsPassenger: [Ride]\n  ridesAsDriver: [Ride]\n  createAt: String!\n  updateAt: String\n}\n\ntype Query {\n  user: User\n}\n\ntype StartPhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  user: User!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  fbId: string | null;
  profilePhoto: string | null;
  fullName: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number;
  lastLat: number;
  lastOrientation: number | null;
  chat: Chat | null;
  messages: Array<Message> | null;
  verification: Array<Verification> | null;
  ridesAsPassenger: Array<Ride> | null;
  ridesAsDriver: Array<Ride> | null;
  createAt: string;
  updateAt: string | null;
}

export interface Chat {
  id: number;
  messages: Array<Message>;
  participants: Array<User>;
  createAt: string;
  updateAt: string | null;
}

export interface Message {
  id: number;
  text: string;
  chat: Chat;
  user: User;
  createAt: string;
  updateAt: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  user: User;
  createdAt: string;
  updatedAt: string | null;
}

export interface Ride {
  id: number;
  stauts: string;
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLun: number;
  dropOffAdress: string;
  dropOffLat: number;
  dropOffLun: number;
  price: number;
  distnace: string;
  duration: string;
  driver: User;
  passenger: User;
  createAt: string;
  updateAt: string | null;
}

export interface Mutation {
  EmailSignIn: EmailSignInResponse;
  FacebookConnect: FacebookConnectResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string | null;
  fbId: string;
}

export interface StartPhoneVerificationMutationArgs {
  phoneNumber: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface StartPhoneVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
  createAt: string;
  updateAt: string | null;
}
