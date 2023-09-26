import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Comment,Movie,Review,User } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Comment' | 'Movie' | 'Review' | 'User'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  comment: Entity<Comment>,
    movie: Entity<Movie>,
    review: Entity<Review>,
    user: Entity<User>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'comment', hooks: EntityHooks<Comment>): any
    addEntityHooks(entityName: 'movie', hooks: EntityHooks<Movie>): any
    addEntityHooks(entityName: 'review', hooks: EntityHooks<Review>): any
    addEntityHooks(entityName: 'user', hooks: EntityHooks<User>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
