import { APIGatewayProxyEvent } from 'aws-lambda';

export interface AuthenticatedUser {
  uid: string;
  email: string;
  name?: string;
}

// export interface AuthenticatedEvent extends APIGatewayProxyEvent {
//   user: AuthenticatedUser;
// }

export interface FirebaseTokenPayload {
  uid: string;
  email?: string;
  name?: string;
  aud: string;
  auth_time: number;
  exp: number;
  iat: number;
  iss: string;
  sub: string;
}
//---------------------------------------------------------------
export interface RegisterInput {
  email: string;
  password: string;
}

export interface AuthenticatedEvent extends APIGatewayProxyEvent {
  user: {
    uid: string;
    email: string;
    name?: string;
  };
}