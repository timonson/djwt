/*
 * JSW §1: Cryptographic algorithms and identifiers for use with this specification
 * are described in the separate JSON Web Algorithms (JWA) specification:
 * https://www.rfc-editor.org/rfc/rfc7518
 */
export type Algorithm =
  | "none"
  | "HS256"
  | "HS512"
  | "RS256"
  | "RS512"
  | "PS256"
  | "PS512";

export type AlgorithmInput = Algorithm | Array<Exclude<Algorithm, "none">>;

export function verify(algorithm: AlgorithmInput, jwtAlg: string): boolean {
  return Array.isArray(algorithm)
    ? (algorithm as string[]).includes(jwtAlg)
    : algorithm === jwtAlg;
}
