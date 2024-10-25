import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  emailToVerify: text('email_to_verify'),
  name: text('name').notNull(),
  avatar: text('avatar'),
  githubId: integer('github_id').unique(),
  githubToken: text('github_token'),
  googleId: text('google_id').unique(),
  googleToken: text('google_token'),
  verifiedAt: text('verified_at'),
  createdAt: text('created_at')
    .notNull()
    .$defaultFn(() => sql`(current_timestamp)`),
  updatedAt: text('updated_at')
    .notNull()
    .$defaultFn(() => sql`(current_timestamp)`)
    .$onUpdateFn(() => sql`(current_timestamp)`),
})

export const todos = sqliteTable('todos', {
  id: integer('id').primaryKey(),
  userId: integer('user_id').notNull(),
  title: text('title').notNull(),
  completed: integer('completed').notNull().default(0),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
