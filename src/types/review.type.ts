import { Author } from './user.type'

export type Review = {
  id: string
  author_details: Author
  content: string
  created_at: string
  updated_at: string
}
