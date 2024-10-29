declare module '#auth-utils' {
  interface User {
    id: number
    name: string
    email: string
    avatar: string | null
    githubId?: number | null
    googleId?: string | null
    verifiedAt: string | null
    emailToVerify?: string | null
  }
}
export {}
