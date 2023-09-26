import { Comment } from './Comment'
import { Movie } from './Movie'
import { Review } from './Review'
import { User } from './User'
  
interface EntityTypes  {
  Comment: Comment
    Movie: Movie
    Review: Review
    User: User
}
  
export { EntityTypes, Comment, Movie, Review, User }