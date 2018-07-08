export const typeDefs = [
  "type SayHelloResponse {\n  text: String!\n  err: Boolean!\n}\n\ntype Query {\n  sayHello(name: String!): SayHelloResponse!\n}\n"
];
/* tslint:disable */

export interface Query {
  sayHello: SayHelloResponse;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  err: boolean;
}
