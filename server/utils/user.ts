import type { SQL } from 'drizzle-orm'
import type { UserInsert } from '~~/server/utils/db'

export async function findUserById(userId: number) {
  return useDB()
    .select()
    .from(tables.users)
    .where(eq(tables.users.id, userId))
    .get()
}

export async function findUserByGitHubId(githubId: number) {
  return useDB()
    .select()
    .from(tables.users)
    .where(eq(tables.users.githubId, githubId))
    .get()
}

export async function findUserByGoogleId(googleId: string) {
  return useDB()
    .select()
    .from(tables.users)
    .where(eq(tables.users.googleId, googleId))
    .get()
}

export async function findUserBy(query: SQL | undefined) {
  return useDB().select().from(tables.users).where(query).get()
}

export async function createUser(user: UserInsert) {
  return useDB()
    .insert(tables.users)
    .values(user)
    .returning({
      id: tables.users.id,
      email: tables.users.email,
      name: tables.users.name,
      avatar: tables.users.avatar,
      verifiedAt: tables.users.verifiedAt,
    })
    .get()
}

export async function updateUser(userId: number, user: Partial<UserInsert>) {
  return useDB()
    .update(tables.users)
    .set(user)
    .where(eq(tables.users.id, userId))
    .run()
}
