export const typeDefs = ["type Greeting {\n  text: String!\n  err: Boolean!\n}\n\ntype Query {\n  sayHello: Greeting!\n}\n"];
/* tslint:disable */

export interface Query {
  sayHello: Greeting;
}

export interface Greeting {
  text: string;
  err: boolean;
}
