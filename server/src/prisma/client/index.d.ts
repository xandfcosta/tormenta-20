
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model Attributes
 * 
 */
export type Attributes = $Result.DefaultSelection<Prisma.$AttributesPayload>
/**
 * Model Expertise
 * 
 */
export type Expertise = $Result.DefaultSelection<Prisma.$ExpertisePayload>
/**
 * Model ExpertiseCharacter
 * 
 */
export type ExpertiseCharacter = $Result.DefaultSelection<Prisma.$ExpertiseCharacterPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model Ability
 * 
 */
export type Ability = $Result.DefaultSelection<Prisma.$AbilityPayload>
/**
 * Model Effect
 * 
 */
export type Effect = $Result.DefaultSelection<Prisma.$EffectPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Characters
 * const characters = await prisma.character.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Characters
   * const characters = await prisma.character.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributes`: Exposes CRUD operations for the **Attributes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attributes.findMany()
    * ```
    */
  get attributes(): Prisma.AttributesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expertise`: Exposes CRUD operations for the **Expertise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expertise
    * const expertise = await prisma.expertise.findMany()
    * ```
    */
  get expertise(): Prisma.ExpertiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expertiseCharacter`: Exposes CRUD operations for the **ExpertiseCharacter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpertiseCharacters
    * const expertiseCharacters = await prisma.expertiseCharacter.findMany()
    * ```
    */
  get expertiseCharacter(): Prisma.ExpertiseCharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ability`: Exposes CRUD operations for the **Ability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abilities
    * const abilities = await prisma.ability.findMany()
    * ```
    */
  get ability(): Prisma.AbilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.effect`: Exposes CRUD operations for the **Effect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Effects
    * const effects = await prisma.effect.findMany()
    * ```
    */
  get effect(): Prisma.EffectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Character: 'Character',
    Attributes: 'Attributes',
    Expertise: 'Expertise',
    ExpertiseCharacter: 'ExpertiseCharacter',
    Inventory: 'Inventory',
    InventoryItem: 'InventoryItem',
    Ability: 'Ability',
    Effect: 'Effect'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "character" | "attributes" | "expertise" | "expertiseCharacter" | "inventory" | "inventoryItem" | "ability" | "effect"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      Attributes: {
        payload: Prisma.$AttributesPayload<ExtArgs>
        fields: Prisma.AttributesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>
          }
          findFirst: {
            args: Prisma.AttributesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>
          }
          findMany: {
            args: Prisma.AttributesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>[]
          }
          create: {
            args: Prisma.AttributesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>
          }
          createMany: {
            args: Prisma.AttributesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>[]
          }
          delete: {
            args: Prisma.AttributesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>
          }
          update: {
            args: Prisma.AttributesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>
          }
          deleteMany: {
            args: Prisma.AttributesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>[]
          }
          upsert: {
            args: Prisma.AttributesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesPayload>
          }
          aggregate: {
            args: Prisma.AttributesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributes>
          }
          groupBy: {
            args: Prisma.AttributesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributesCountArgs<ExtArgs>
            result: $Utils.Optional<AttributesCountAggregateOutputType> | number
          }
        }
      }
      Expertise: {
        payload: Prisma.$ExpertisePayload<ExtArgs>
        fields: Prisma.ExpertiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          findFirst: {
            args: Prisma.ExpertiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          findMany: {
            args: Prisma.ExpertiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          create: {
            args: Prisma.ExpertiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          createMany: {
            args: Prisma.ExpertiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          delete: {
            args: Prisma.ExpertiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          update: {
            args: Prisma.ExpertiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          deleteMany: {
            args: Prisma.ExpertiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpertiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          upsert: {
            args: Prisma.ExpertiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          aggregate: {
            args: Prisma.ExpertiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpertise>
          }
          groupBy: {
            args: Prisma.ExpertiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertiseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseCountAggregateOutputType> | number
          }
        }
      }
      ExpertiseCharacter: {
        payload: Prisma.$ExpertiseCharacterPayload<ExtArgs>
        fields: Prisma.ExpertiseCharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertiseCharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertiseCharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>
          }
          findFirst: {
            args: Prisma.ExpertiseCharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertiseCharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>
          }
          findMany: {
            args: Prisma.ExpertiseCharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>[]
          }
          create: {
            args: Prisma.ExpertiseCharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>
          }
          createMany: {
            args: Prisma.ExpertiseCharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertiseCharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>[]
          }
          delete: {
            args: Prisma.ExpertiseCharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>
          }
          update: {
            args: Prisma.ExpertiseCharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>
          }
          deleteMany: {
            args: Prisma.ExpertiseCharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertiseCharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpertiseCharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>[]
          }
          upsert: {
            args: Prisma.ExpertiseCharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseCharacterPayload>
          }
          aggregate: {
            args: Prisma.ExpertiseCharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpertiseCharacter>
          }
          groupBy: {
            args: Prisma.ExpertiseCharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseCharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertiseCharacterCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseCharacterCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      Ability: {
        payload: Prisma.$AbilityPayload<ExtArgs>
        fields: Prisma.AbilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          findFirst: {
            args: Prisma.AbilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          findMany: {
            args: Prisma.AbilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          create: {
            args: Prisma.AbilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          createMany: {
            args: Prisma.AbilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          delete: {
            args: Prisma.AbilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          update: {
            args: Prisma.AbilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          deleteMany: {
            args: Prisma.AbilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          upsert: {
            args: Prisma.AbilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          aggregate: {
            args: Prisma.AbilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbility>
          }
          groupBy: {
            args: Prisma.AbilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbilityCountArgs<ExtArgs>
            result: $Utils.Optional<AbilityCountAggregateOutputType> | number
          }
        }
      }
      Effect: {
        payload: Prisma.$EffectPayload<ExtArgs>
        fields: Prisma.EffectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EffectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EffectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>
          }
          findFirst: {
            args: Prisma.EffectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EffectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>
          }
          findMany: {
            args: Prisma.EffectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>[]
          }
          create: {
            args: Prisma.EffectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>
          }
          createMany: {
            args: Prisma.EffectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EffectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>[]
          }
          delete: {
            args: Prisma.EffectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>
          }
          update: {
            args: Prisma.EffectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>
          }
          deleteMany: {
            args: Prisma.EffectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EffectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EffectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>[]
          }
          upsert: {
            args: Prisma.EffectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectPayload>
          }
          aggregate: {
            args: Prisma.EffectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEffect>
          }
          groupBy: {
            args: Prisma.EffectGroupByArgs<ExtArgs>
            result: $Utils.Optional<EffectGroupByOutputType>[]
          }
          count: {
            args: Prisma.EffectCountArgs<ExtArgs>
            result: $Utils.Optional<EffectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    character?: CharacterOmit
    attributes?: AttributesOmit
    expertise?: ExpertiseOmit
    expertiseCharacter?: ExpertiseCharacterOmit
    inventory?: InventoryOmit
    inventoryItem?: InventoryItemOmit
    ability?: AbilityOmit
    effect?: EffectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    expertisies: number
    abilities: number
    effects: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expertisies?: boolean | CharacterCountOutputTypeCountExpertisiesArgs
    abilities?: boolean | CharacterCountOutputTypeCountAbilitiesArgs
    effects?: boolean | CharacterCountOutputTypeCountEffectsArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountExpertisiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseCharacterWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountAbilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountEffectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EffectWhereInput
  }


  /**
   * Count Type ExpertiseCountOutputType
   */

  export type ExpertiseCountOutputType = {
    characterLink: number
  }

  export type ExpertiseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterLink?: boolean | ExpertiseCountOutputTypeCountCharacterLinkArgs
  }

  // Custom InputTypes
  /**
   * ExpertiseCountOutputType without action
   */
  export type ExpertiseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCountOutputType
     */
    select?: ExpertiseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpertiseCountOutputType without action
   */
  export type ExpertiseCountOutputTypeCountCharacterLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseCharacterWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    items: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InventoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    id: number | null
    level: number | null
    experience: number | null
    movement: number | null
    defense: number | null
    magicResistence: number | null
    hp: number | null
    hpMax: number | null
    mp: number | null
    mpMax: number | null
  }

  export type CharacterSumAggregateOutputType = {
    id: number | null
    level: number | null
    experience: number | null
    movement: number | null
    defense: number | null
    magicResistence: number | null
    hp: number | null
    hpMax: number | null
    mp: number | null
    mpMax: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: number | null
    name: string | null
    player: string | null
    origin: string | null
    divinity: string | null
    description: string | null
    notes: string | null
    level: number | null
    experience: number | null
    size: string | null
    movement: number | null
    defense: number | null
    magicResistence: number | null
    hp: number | null
    hpMax: number | null
    mp: number | null
    mpMax: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    player: string | null
    origin: string | null
    divinity: string | null
    description: string | null
    notes: string | null
    level: number | null
    experience: number | null
    size: string | null
    movement: number | null
    defense: number | null
    magicResistence: number | null
    hp: number | null
    hpMax: number | null
    mp: number | null
    mpMax: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    player: number
    origin: number
    races: number
    classes: number
    divinity: number
    description: number
    notes: number
    level: number
    experience: number
    size: number
    movement: number
    defense: number
    magicResistence: number
    hp: number
    hpMax: number
    mp: number
    mpMax: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    id?: true
    level?: true
    experience?: true
    movement?: true
    defense?: true
    magicResistence?: true
    hp?: true
    hpMax?: true
    mp?: true
    mpMax?: true
  }

  export type CharacterSumAggregateInputType = {
    id?: true
    level?: true
    experience?: true
    movement?: true
    defense?: true
    magicResistence?: true
    hp?: true
    hpMax?: true
    mp?: true
    mpMax?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    player?: true
    origin?: true
    divinity?: true
    description?: true
    notes?: true
    level?: true
    experience?: true
    size?: true
    movement?: true
    defense?: true
    magicResistence?: true
    hp?: true
    hpMax?: true
    mp?: true
    mpMax?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    player?: true
    origin?: true
    divinity?: true
    description?: true
    notes?: true
    level?: true
    experience?: true
    size?: true
    movement?: true
    defense?: true
    magicResistence?: true
    hp?: true
    hpMax?: true
    mp?: true
    mpMax?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    player?: true
    origin?: true
    races?: true
    classes?: true
    divinity?: true
    description?: true
    notes?: true
    level?: true
    experience?: true
    size?: true
    movement?: true
    defense?: true
    magicResistence?: true
    hp?: true
    hpMax?: true
    mp?: true
    mpMax?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: number
    name: string
    player: string
    origin: string
    races: JsonValue
    classes: JsonValue
    divinity: string | null
    description: string
    notes: string
    level: number
    experience: number
    size: string
    movement: number
    defense: number
    magicResistence: number
    hp: number
    hpMax: number
    mp: number
    mpMax: number
    createdAt: Date
    updatedAt: Date
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    player?: boolean
    origin?: boolean
    races?: boolean
    classes?: boolean
    divinity?: boolean
    description?: boolean
    notes?: boolean
    level?: boolean
    experience?: boolean
    size?: boolean
    movement?: boolean
    defense?: boolean
    magicResistence?: boolean
    hp?: boolean
    hpMax?: boolean
    mp?: boolean
    mpMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attributes?: boolean | Character$attributesArgs<ExtArgs>
    expertisies?: boolean | Character$expertisiesArgs<ExtArgs>
    inventory?: boolean | Character$inventoryArgs<ExtArgs>
    abilities?: boolean | Character$abilitiesArgs<ExtArgs>
    effects?: boolean | Character$effectsArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    player?: boolean
    origin?: boolean
    races?: boolean
    classes?: boolean
    divinity?: boolean
    description?: boolean
    notes?: boolean
    level?: boolean
    experience?: boolean
    size?: boolean
    movement?: boolean
    defense?: boolean
    magicResistence?: boolean
    hp?: boolean
    hpMax?: boolean
    mp?: boolean
    mpMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    player?: boolean
    origin?: boolean
    races?: boolean
    classes?: boolean
    divinity?: boolean
    description?: boolean
    notes?: boolean
    level?: boolean
    experience?: boolean
    size?: boolean
    movement?: boolean
    defense?: boolean
    magicResistence?: boolean
    hp?: boolean
    hpMax?: boolean
    mp?: boolean
    mpMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    name?: boolean
    player?: boolean
    origin?: boolean
    races?: boolean
    classes?: boolean
    divinity?: boolean
    description?: boolean
    notes?: boolean
    level?: boolean
    experience?: boolean
    size?: boolean
    movement?: boolean
    defense?: boolean
    magicResistence?: boolean
    hp?: boolean
    hpMax?: boolean
    mp?: boolean
    mpMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "player" | "origin" | "races" | "classes" | "divinity" | "description" | "notes" | "level" | "experience" | "size" | "movement" | "defense" | "magicResistence" | "hp" | "hpMax" | "mp" | "mpMax" | "createdAt" | "updatedAt", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | Character$attributesArgs<ExtArgs>
    expertisies?: boolean | Character$expertisiesArgs<ExtArgs>
    inventory?: boolean | Character$inventoryArgs<ExtArgs>
    abilities?: boolean | Character$abilitiesArgs<ExtArgs>
    effects?: boolean | Character$effectsArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      attributes: Prisma.$AttributesPayload<ExtArgs> | null
      expertisies: Prisma.$ExpertiseCharacterPayload<ExtArgs>[]
      inventory: Prisma.$InventoryPayload<ExtArgs> | null
      abilities: Prisma.$AbilityPayload<ExtArgs>[]
      effects: Prisma.$EffectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      player: string
      origin: string
      races: Prisma.JsonValue
      classes: Prisma.JsonValue
      divinity: string | null
      description: string
      notes: string
      level: number
      experience: number
      size: string
      movement: number
      defense: number
      magicResistence: number
      hp: number
      hpMax: number
      mp: number
      mpMax: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attributes<T extends Character$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Character$attributesArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expertisies<T extends Character$expertisiesArgs<ExtArgs> = {}>(args?: Subset<T, Character$expertisiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Character$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Character$inventoryArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    abilities<T extends Character$abilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Character$abilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    effects<T extends Character$effectsArgs<ExtArgs> = {}>(args?: Subset<T, Character$effectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'Int'>
    readonly name: FieldRef<"Character", 'String'>
    readonly player: FieldRef<"Character", 'String'>
    readonly origin: FieldRef<"Character", 'String'>
    readonly races: FieldRef<"Character", 'Json'>
    readonly classes: FieldRef<"Character", 'Json'>
    readonly divinity: FieldRef<"Character", 'String'>
    readonly description: FieldRef<"Character", 'String'>
    readonly notes: FieldRef<"Character", 'String'>
    readonly level: FieldRef<"Character", 'Int'>
    readonly experience: FieldRef<"Character", 'Int'>
    readonly size: FieldRef<"Character", 'String'>
    readonly movement: FieldRef<"Character", 'Int'>
    readonly defense: FieldRef<"Character", 'Int'>
    readonly magicResistence: FieldRef<"Character", 'Int'>
    readonly hp: FieldRef<"Character", 'Int'>
    readonly hpMax: FieldRef<"Character", 'Int'>
    readonly mp: FieldRef<"Character", 'Int'>
    readonly mpMax: FieldRef<"Character", 'Int'>
    readonly createdAt: FieldRef<"Character", 'DateTime'>
    readonly updatedAt: FieldRef<"Character", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.attributes
   */
  export type Character$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    where?: AttributesWhereInput
  }

  /**
   * Character.expertisies
   */
  export type Character$expertisiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    where?: ExpertiseCharacterWhereInput
    orderBy?: ExpertiseCharacterOrderByWithRelationInput | ExpertiseCharacterOrderByWithRelationInput[]
    cursor?: ExpertiseCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertiseCharacterScalarFieldEnum | ExpertiseCharacterScalarFieldEnum[]
  }

  /**
   * Character.inventory
   */
  export type Character$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
  }

  /**
   * Character.abilities
   */
  export type Character$abilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    where?: AbilityWhereInput
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    cursor?: AbilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Character.effects
   */
  export type Character$effectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    where?: EffectWhereInput
    orderBy?: EffectOrderByWithRelationInput | EffectOrderByWithRelationInput[]
    cursor?: EffectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EffectScalarFieldEnum | EffectScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model Attributes
   */

  export type AggregateAttributes = {
    _count: AttributesCountAggregateOutputType | null
    _avg: AttributesAvgAggregateOutputType | null
    _sum: AttributesSumAggregateOutputType | null
    _min: AttributesMinAggregateOutputType | null
    _max: AttributesMaxAggregateOutputType | null
  }

  export type AttributesAvgAggregateOutputType = {
    characterId: number | null
    strength: number | null
    dexterity: number | null
    constitution: number | null
    intelligence: number | null
    wisdom: number | null
    charisma: number | null
  }

  export type AttributesSumAggregateOutputType = {
    characterId: number | null
    strength: number | null
    dexterity: number | null
    constitution: number | null
    intelligence: number | null
    wisdom: number | null
    charisma: number | null
  }

  export type AttributesMinAggregateOutputType = {
    characterId: number | null
    strength: number | null
    dexterity: number | null
    constitution: number | null
    intelligence: number | null
    wisdom: number | null
    charisma: number | null
  }

  export type AttributesMaxAggregateOutputType = {
    characterId: number | null
    strength: number | null
    dexterity: number | null
    constitution: number | null
    intelligence: number | null
    wisdom: number | null
    charisma: number | null
  }

  export type AttributesCountAggregateOutputType = {
    characterId: number
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    _all: number
  }


  export type AttributesAvgAggregateInputType = {
    characterId?: true
    strength?: true
    dexterity?: true
    constitution?: true
    intelligence?: true
    wisdom?: true
    charisma?: true
  }

  export type AttributesSumAggregateInputType = {
    characterId?: true
    strength?: true
    dexterity?: true
    constitution?: true
    intelligence?: true
    wisdom?: true
    charisma?: true
  }

  export type AttributesMinAggregateInputType = {
    characterId?: true
    strength?: true
    dexterity?: true
    constitution?: true
    intelligence?: true
    wisdom?: true
    charisma?: true
  }

  export type AttributesMaxAggregateInputType = {
    characterId?: true
    strength?: true
    dexterity?: true
    constitution?: true
    intelligence?: true
    wisdom?: true
    charisma?: true
  }

  export type AttributesCountAggregateInputType = {
    characterId?: true
    strength?: true
    dexterity?: true
    constitution?: true
    intelligence?: true
    wisdom?: true
    charisma?: true
    _all?: true
  }

  export type AttributesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to aggregate.
     */
    where?: AttributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributesOrderByWithRelationInput | AttributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributesMaxAggregateInputType
  }

  export type GetAttributesAggregateType<T extends AttributesAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributes[P]>
      : GetScalarType<T[P], AggregateAttributes[P]>
  }




  export type AttributesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributesWhereInput
    orderBy?: AttributesOrderByWithAggregationInput | AttributesOrderByWithAggregationInput[]
    by: AttributesScalarFieldEnum[] | AttributesScalarFieldEnum
    having?: AttributesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributesCountAggregateInputType | true
    _avg?: AttributesAvgAggregateInputType
    _sum?: AttributesSumAggregateInputType
    _min?: AttributesMinAggregateInputType
    _max?: AttributesMaxAggregateInputType
  }

  export type AttributesGroupByOutputType = {
    characterId: number
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    _count: AttributesCountAggregateOutputType | null
    _avg: AttributesAvgAggregateOutputType | null
    _sum: AttributesSumAggregateOutputType | null
    _min: AttributesMinAggregateOutputType | null
    _max: AttributesMaxAggregateOutputType | null
  }

  type GetAttributesGroupByPayload<T extends AttributesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributesGroupByOutputType[P]>
            : GetScalarType<T[P], AttributesGroupByOutputType[P]>
        }
      >
    >


  export type AttributesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    strength?: boolean
    dexterity?: boolean
    constitution?: boolean
    intelligence?: boolean
    wisdom?: boolean
    charisma?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributes"]>

  export type AttributesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    strength?: boolean
    dexterity?: boolean
    constitution?: boolean
    intelligence?: boolean
    wisdom?: boolean
    charisma?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributes"]>

  export type AttributesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    strength?: boolean
    dexterity?: boolean
    constitution?: boolean
    intelligence?: boolean
    wisdom?: boolean
    charisma?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributes"]>

  export type AttributesSelectScalar = {
    characterId?: boolean
    strength?: boolean
    dexterity?: boolean
    constitution?: boolean
    intelligence?: boolean
    wisdom?: boolean
    charisma?: boolean
  }

  export type AttributesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"characterId" | "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma", ExtArgs["result"]["attributes"]>
  export type AttributesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type AttributesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type AttributesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $AttributesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attributes"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      strength: number
      dexterity: number
      constitution: number
      intelligence: number
      wisdom: number
      charisma: number
    }, ExtArgs["result"]["attributes"]>
    composites: {}
  }

  type AttributesGetPayload<S extends boolean | null | undefined | AttributesDefaultArgs> = $Result.GetResult<Prisma.$AttributesPayload, S>

  type AttributesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributesCountAggregateInputType | true
    }

  export interface AttributesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attributes'], meta: { name: 'Attributes' } }
    /**
     * Find zero or one Attributes that matches the filter.
     * @param {AttributesFindUniqueArgs} args - Arguments to find a Attributes
     * @example
     * // Get one Attributes
     * const attributes = await prisma.attributes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributesFindUniqueArgs>(args: SelectSubset<T, AttributesFindUniqueArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attributes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributesFindUniqueOrThrowArgs} args - Arguments to find a Attributes
     * @example
     * // Get one Attributes
     * const attributes = await prisma.attributes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributesFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesFindFirstArgs} args - Arguments to find a Attributes
     * @example
     * // Get one Attributes
     * const attributes = await prisma.attributes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributesFindFirstArgs>(args?: SelectSubset<T, AttributesFindFirstArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attributes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesFindFirstOrThrowArgs} args - Arguments to find a Attributes
     * @example
     * // Get one Attributes
     * const attributes = await prisma.attributes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributesFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attributes.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attributes.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const attributesWithCharacterIdOnly = await prisma.attributes.findMany({ select: { characterId: true } })
     * 
     */
    findMany<T extends AttributesFindManyArgs>(args?: SelectSubset<T, AttributesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attributes.
     * @param {AttributesCreateArgs} args - Arguments to create a Attributes.
     * @example
     * // Create one Attributes
     * const Attributes = await prisma.attributes.create({
     *   data: {
     *     // ... data to create a Attributes
     *   }
     * })
     * 
     */
    create<T extends AttributesCreateArgs>(args: SelectSubset<T, AttributesCreateArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attributes.
     * @param {AttributesCreateManyArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attributes = await prisma.attributes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributesCreateManyArgs>(args?: SelectSubset<T, AttributesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attributes and returns the data saved in the database.
     * @param {AttributesCreateManyAndReturnArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attributes = await prisma.attributes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attributes and only return the `characterId`
     * const attributesWithCharacterIdOnly = await prisma.attributes.createManyAndReturn({
     *   select: { characterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributesCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attributes.
     * @param {AttributesDeleteArgs} args - Arguments to delete one Attributes.
     * @example
     * // Delete one Attributes
     * const Attributes = await prisma.attributes.delete({
     *   where: {
     *     // ... filter to delete one Attributes
     *   }
     * })
     * 
     */
    delete<T extends AttributesDeleteArgs>(args: SelectSubset<T, AttributesDeleteArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attributes.
     * @param {AttributesUpdateArgs} args - Arguments to update one Attributes.
     * @example
     * // Update one Attributes
     * const attributes = await prisma.attributes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributesUpdateArgs>(args: SelectSubset<T, AttributesUpdateArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attributes.
     * @param {AttributesDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attributes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributesDeleteManyArgs>(args?: SelectSubset<T, AttributesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attributes = await prisma.attributes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributesUpdateManyArgs>(args: SelectSubset<T, AttributesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes and returns the data updated in the database.
     * @param {AttributesUpdateManyAndReturnArgs} args - Arguments to update many Attributes.
     * @example
     * // Update many Attributes
     * const attributes = await prisma.attributes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attributes and only return the `characterId`
     * const attributesWithCharacterIdOnly = await prisma.attributes.updateManyAndReturn({
     *   select: { characterId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttributesUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attributes.
     * @param {AttributesUpsertArgs} args - Arguments to update or create a Attributes.
     * @example
     * // Update or create a Attributes
     * const attributes = await prisma.attributes.upsert({
     *   create: {
     *     // ... data to create a Attributes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attributes we want to update
     *   }
     * })
     */
    upsert<T extends AttributesUpsertArgs>(args: SelectSubset<T, AttributesUpsertArgs<ExtArgs>>): Prisma__AttributesClient<$Result.GetResult<Prisma.$AttributesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attributes.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributesCountArgs>(
      args?: Subset<T, AttributesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributesAggregateArgs>(args: Subset<T, AttributesAggregateArgs>): Prisma.PrismaPromise<GetAttributesAggregateType<T>>

    /**
     * Group by Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributesGroupByArgs['orderBy'] }
        : { orderBy?: AttributesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attributes model
   */
  readonly fields: AttributesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attributes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attributes model
   */
  interface AttributesFieldRefs {
    readonly characterId: FieldRef<"Attributes", 'Int'>
    readonly strength: FieldRef<"Attributes", 'Int'>
    readonly dexterity: FieldRef<"Attributes", 'Int'>
    readonly constitution: FieldRef<"Attributes", 'Int'>
    readonly intelligence: FieldRef<"Attributes", 'Int'>
    readonly wisdom: FieldRef<"Attributes", 'Int'>
    readonly charisma: FieldRef<"Attributes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attributes findUnique
   */
  export type AttributesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where: AttributesWhereUniqueInput
  }

  /**
   * Attributes findUniqueOrThrow
   */
  export type AttributesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where: AttributesWhereUniqueInput
  }

  /**
   * Attributes findFirst
   */
  export type AttributesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributesOrderByWithRelationInput | AttributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributesScalarFieldEnum | AttributesScalarFieldEnum[]
  }

  /**
   * Attributes findFirstOrThrow
   */
  export type AttributesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributesOrderByWithRelationInput | AttributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributesScalarFieldEnum | AttributesScalarFieldEnum[]
  }

  /**
   * Attributes findMany
   */
  export type AttributesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributesOrderByWithRelationInput | AttributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     */
    cursor?: AttributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    distinct?: AttributesScalarFieldEnum | AttributesScalarFieldEnum[]
  }

  /**
   * Attributes create
   */
  export type AttributesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * The data needed to create a Attributes.
     */
    data: XOR<AttributesCreateInput, AttributesUncheckedCreateInput>
  }

  /**
   * Attributes createMany
   */
  export type AttributesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attributes.
     */
    data: AttributesCreateManyInput | AttributesCreateManyInput[]
  }

  /**
   * Attributes createManyAndReturn
   */
  export type AttributesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * The data used to create many Attributes.
     */
    data: AttributesCreateManyInput | AttributesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attributes update
   */
  export type AttributesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * The data needed to update a Attributes.
     */
    data: XOR<AttributesUpdateInput, AttributesUncheckedUpdateInput>
    /**
     * Choose, which Attributes to update.
     */
    where: AttributesWhereUniqueInput
  }

  /**
   * Attributes updateMany
   */
  export type AttributesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributesUpdateManyMutationInput, AttributesUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributesWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
  }

  /**
   * Attributes updateManyAndReturn
   */
  export type AttributesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributesUpdateManyMutationInput, AttributesUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributesWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attributes upsert
   */
  export type AttributesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * The filter to search for the Attributes to update in case it exists.
     */
    where: AttributesWhereUniqueInput
    /**
     * In case the Attributes found by the `where` argument doesn't exist, create a new Attributes with this data.
     */
    create: XOR<AttributesCreateInput, AttributesUncheckedCreateInput>
    /**
     * In case the Attributes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributesUpdateInput, AttributesUncheckedUpdateInput>
  }

  /**
   * Attributes delete
   */
  export type AttributesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
    /**
     * Filter which Attributes to delete.
     */
    where: AttributesWhereUniqueInput
  }

  /**
   * Attributes deleteMany
   */
  export type AttributesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to delete
     */
    where?: AttributesWhereInput
    /**
     * Limit how many Attributes to delete.
     */
    limit?: number
  }

  /**
   * Attributes without action
   */
  export type AttributesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attributes
     */
    select?: AttributesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attributes
     */
    omit?: AttributesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesInclude<ExtArgs> | null
  }


  /**
   * Model Expertise
   */

  export type AggregateExpertise = {
    _count: ExpertiseCountAggregateOutputType | null
    _avg: ExpertiseAvgAggregateOutputType | null
    _sum: ExpertiseSumAggregateOutputType | null
    _min: ExpertiseMinAggregateOutputType | null
    _max: ExpertiseMaxAggregateOutputType | null
  }

  export type ExpertiseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExpertiseSumAggregateOutputType = {
    id: number | null
  }

  export type ExpertiseMinAggregateOutputType = {
    id: number | null
    name: string | null
    attribute: string | null
  }

  export type ExpertiseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    attribute: string | null
  }

  export type ExpertiseCountAggregateOutputType = {
    id: number
    name: number
    attribute: number
    _all: number
  }


  export type ExpertiseAvgAggregateInputType = {
    id?: true
  }

  export type ExpertiseSumAggregateInputType = {
    id?: true
  }

  export type ExpertiseMinAggregateInputType = {
    id?: true
    name?: true
    attribute?: true
  }

  export type ExpertiseMaxAggregateInputType = {
    id?: true
    name?: true
    attribute?: true
  }

  export type ExpertiseCountAggregateInputType = {
    id?: true
    name?: true
    attribute?: true
    _all?: true
  }

  export type ExpertiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expertise to aggregate.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expertise
    **/
    _count?: true | ExpertiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertiseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertiseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertiseMaxAggregateInputType
  }

  export type GetExpertiseAggregateType<T extends ExpertiseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertise[P]>
      : GetScalarType<T[P], AggregateExpertise[P]>
  }




  export type ExpertiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseWhereInput
    orderBy?: ExpertiseOrderByWithAggregationInput | ExpertiseOrderByWithAggregationInput[]
    by: ExpertiseScalarFieldEnum[] | ExpertiseScalarFieldEnum
    having?: ExpertiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertiseCountAggregateInputType | true
    _avg?: ExpertiseAvgAggregateInputType
    _sum?: ExpertiseSumAggregateInputType
    _min?: ExpertiseMinAggregateInputType
    _max?: ExpertiseMaxAggregateInputType
  }

  export type ExpertiseGroupByOutputType = {
    id: number
    name: string
    attribute: string
    _count: ExpertiseCountAggregateOutputType | null
    _avg: ExpertiseAvgAggregateOutputType | null
    _sum: ExpertiseSumAggregateOutputType | null
    _min: ExpertiseMinAggregateOutputType | null
    _max: ExpertiseMaxAggregateOutputType | null
  }

  type GetExpertiseGroupByPayload<T extends ExpertiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertiseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertiseGroupByOutputType[P]>
        }
      >
    >


  export type ExpertiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    attribute?: boolean
    characterLink?: boolean | Expertise$characterLinkArgs<ExtArgs>
    _count?: boolean | ExpertiseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    attribute?: boolean
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    attribute?: boolean
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectScalar = {
    id?: boolean
    name?: boolean
    attribute?: boolean
  }

  export type ExpertiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "attribute", ExtArgs["result"]["expertise"]>
  export type ExpertiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterLink?: boolean | Expertise$characterLinkArgs<ExtArgs>
    _count?: boolean | ExpertiseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpertiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExpertiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExpertisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expertise"
    objects: {
      characterLink: Prisma.$ExpertiseCharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      attribute: string
    }, ExtArgs["result"]["expertise"]>
    composites: {}
  }

  type ExpertiseGetPayload<S extends boolean | null | undefined | ExpertiseDefaultArgs> = $Result.GetResult<Prisma.$ExpertisePayload, S>

  type ExpertiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertiseCountAggregateInputType | true
    }

  export interface ExpertiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expertise'], meta: { name: 'Expertise' } }
    /**
     * Find zero or one Expertise that matches the filter.
     * @param {ExpertiseFindUniqueArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertiseFindUniqueArgs>(args: SelectSubset<T, ExpertiseFindUniqueArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expertise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertiseFindUniqueOrThrowArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertiseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindFirstArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertiseFindFirstArgs>(args?: SelectSubset<T, ExpertiseFindFirstArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expertise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindFirstOrThrowArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertiseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expertise
     * const expertise = await prisma.expertise.findMany()
     * 
     * // Get first 10 Expertise
     * const expertise = await prisma.expertise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertiseWithIdOnly = await prisma.expertise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertiseFindManyArgs>(args?: SelectSubset<T, ExpertiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expertise.
     * @param {ExpertiseCreateArgs} args - Arguments to create a Expertise.
     * @example
     * // Create one Expertise
     * const Expertise = await prisma.expertise.create({
     *   data: {
     *     // ... data to create a Expertise
     *   }
     * })
     * 
     */
    create<T extends ExpertiseCreateArgs>(args: SelectSubset<T, ExpertiseCreateArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expertise.
     * @param {ExpertiseCreateManyArgs} args - Arguments to create many Expertise.
     * @example
     * // Create many Expertise
     * const expertise = await prisma.expertise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertiseCreateManyArgs>(args?: SelectSubset<T, ExpertiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expertise and returns the data saved in the database.
     * @param {ExpertiseCreateManyAndReturnArgs} args - Arguments to create many Expertise.
     * @example
     * // Create many Expertise
     * const expertise = await prisma.expertise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expertise and only return the `id`
     * const expertiseWithIdOnly = await prisma.expertise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertiseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expertise.
     * @param {ExpertiseDeleteArgs} args - Arguments to delete one Expertise.
     * @example
     * // Delete one Expertise
     * const Expertise = await prisma.expertise.delete({
     *   where: {
     *     // ... filter to delete one Expertise
     *   }
     * })
     * 
     */
    delete<T extends ExpertiseDeleteArgs>(args: SelectSubset<T, ExpertiseDeleteArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expertise.
     * @param {ExpertiseUpdateArgs} args - Arguments to update one Expertise.
     * @example
     * // Update one Expertise
     * const expertise = await prisma.expertise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertiseUpdateArgs>(args: SelectSubset<T, ExpertiseUpdateArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expertise.
     * @param {ExpertiseDeleteManyArgs} args - Arguments to filter Expertise to delete.
     * @example
     * // Delete a few Expertise
     * const { count } = await prisma.expertise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertiseDeleteManyArgs>(args?: SelectSubset<T, ExpertiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expertise
     * const expertise = await prisma.expertise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertiseUpdateManyArgs>(args: SelectSubset<T, ExpertiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expertise and returns the data updated in the database.
     * @param {ExpertiseUpdateManyAndReturnArgs} args - Arguments to update many Expertise.
     * @example
     * // Update many Expertise
     * const expertise = await prisma.expertise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expertise and only return the `id`
     * const expertiseWithIdOnly = await prisma.expertise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpertiseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpertiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expertise.
     * @param {ExpertiseUpsertArgs} args - Arguments to update or create a Expertise.
     * @example
     * // Update or create a Expertise
     * const expertise = await prisma.expertise.upsert({
     *   create: {
     *     // ... data to create a Expertise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expertise we want to update
     *   }
     * })
     */
    upsert<T extends ExpertiseUpsertArgs>(args: SelectSubset<T, ExpertiseUpsertArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCountArgs} args - Arguments to filter Expertise to count.
     * @example
     * // Count the number of Expertise
     * const count = await prisma.expertise.count({
     *   where: {
     *     // ... the filter for the Expertise we want to count
     *   }
     * })
    **/
    count<T extends ExpertiseCountArgs>(
      args?: Subset<T, ExpertiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpertiseAggregateArgs>(args: Subset<T, ExpertiseAggregateArgs>): Prisma.PrismaPromise<GetExpertiseAggregateType<T>>

    /**
     * Group by Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpertiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertiseGroupByArgs['orderBy'] }
        : { orderBy?: ExpertiseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpertiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expertise model
   */
  readonly fields: ExpertiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expertise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characterLink<T extends Expertise$characterLinkArgs<ExtArgs> = {}>(args?: Subset<T, Expertise$characterLinkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expertise model
   */
  interface ExpertiseFieldRefs {
    readonly id: FieldRef<"Expertise", 'Int'>
    readonly name: FieldRef<"Expertise", 'String'>
    readonly attribute: FieldRef<"Expertise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expertise findUnique
   */
  export type ExpertiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise findUniqueOrThrow
   */
  export type ExpertiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise findFirst
   */
  export type ExpertiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expertise.
     */
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise findFirstOrThrow
   */
  export type ExpertiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expertise.
     */
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise findMany
   */
  export type ExpertiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise create
   */
  export type ExpertiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expertise.
     */
    data: XOR<ExpertiseCreateInput, ExpertiseUncheckedCreateInput>
  }

  /**
   * Expertise createMany
   */
  export type ExpertiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expertise.
     */
    data: ExpertiseCreateManyInput | ExpertiseCreateManyInput[]
  }

  /**
   * Expertise createManyAndReturn
   */
  export type ExpertiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * The data used to create many Expertise.
     */
    data: ExpertiseCreateManyInput | ExpertiseCreateManyInput[]
  }

  /**
   * Expertise update
   */
  export type ExpertiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expertise.
     */
    data: XOR<ExpertiseUpdateInput, ExpertiseUncheckedUpdateInput>
    /**
     * Choose, which Expertise to update.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise updateMany
   */
  export type ExpertiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expertise.
     */
    data: XOR<ExpertiseUpdateManyMutationInput, ExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which Expertise to update
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to update.
     */
    limit?: number
  }

  /**
   * Expertise updateManyAndReturn
   */
  export type ExpertiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * The data used to update Expertise.
     */
    data: XOR<ExpertiseUpdateManyMutationInput, ExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which Expertise to update
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to update.
     */
    limit?: number
  }

  /**
   * Expertise upsert
   */
  export type ExpertiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expertise to update in case it exists.
     */
    where: ExpertiseWhereUniqueInput
    /**
     * In case the Expertise found by the `where` argument doesn't exist, create a new Expertise with this data.
     */
    create: XOR<ExpertiseCreateInput, ExpertiseUncheckedCreateInput>
    /**
     * In case the Expertise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertiseUpdateInput, ExpertiseUncheckedUpdateInput>
  }

  /**
   * Expertise delete
   */
  export type ExpertiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter which Expertise to delete.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise deleteMany
   */
  export type ExpertiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expertise to delete
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to delete.
     */
    limit?: number
  }

  /**
   * Expertise.characterLink
   */
  export type Expertise$characterLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    where?: ExpertiseCharacterWhereInput
    orderBy?: ExpertiseCharacterOrderByWithRelationInput | ExpertiseCharacterOrderByWithRelationInput[]
    cursor?: ExpertiseCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertiseCharacterScalarFieldEnum | ExpertiseCharacterScalarFieldEnum[]
  }

  /**
   * Expertise without action
   */
  export type ExpertiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
  }


  /**
   * Model ExpertiseCharacter
   */

  export type AggregateExpertiseCharacter = {
    _count: ExpertiseCharacterCountAggregateOutputType | null
    _avg: ExpertiseCharacterAvgAggregateOutputType | null
    _sum: ExpertiseCharacterSumAggregateOutputType | null
    _min: ExpertiseCharacterMinAggregateOutputType | null
    _max: ExpertiseCharacterMaxAggregateOutputType | null
  }

  export type ExpertiseCharacterAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
    expertiseId: number | null
    trainBonus: number | null
  }

  export type ExpertiseCharacterSumAggregateOutputType = {
    id: number | null
    characterId: number | null
    expertiseId: number | null
    trainBonus: number | null
  }

  export type ExpertiseCharacterMinAggregateOutputType = {
    id: number | null
    characterId: number | null
    expertiseId: number | null
    trained: boolean | null
    trainBonus: number | null
  }

  export type ExpertiseCharacterMaxAggregateOutputType = {
    id: number | null
    characterId: number | null
    expertiseId: number | null
    trained: boolean | null
    trainBonus: number | null
  }

  export type ExpertiseCharacterCountAggregateOutputType = {
    id: number
    characterId: number
    expertiseId: number
    trained: number
    trainBonus: number
    _all: number
  }


  export type ExpertiseCharacterAvgAggregateInputType = {
    id?: true
    characterId?: true
    expertiseId?: true
    trainBonus?: true
  }

  export type ExpertiseCharacterSumAggregateInputType = {
    id?: true
    characterId?: true
    expertiseId?: true
    trainBonus?: true
  }

  export type ExpertiseCharacterMinAggregateInputType = {
    id?: true
    characterId?: true
    expertiseId?: true
    trained?: true
    trainBonus?: true
  }

  export type ExpertiseCharacterMaxAggregateInputType = {
    id?: true
    characterId?: true
    expertiseId?: true
    trained?: true
    trainBonus?: true
  }

  export type ExpertiseCharacterCountAggregateInputType = {
    id?: true
    characterId?: true
    expertiseId?: true
    trained?: true
    trainBonus?: true
    _all?: true
  }

  export type ExpertiseCharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertiseCharacter to aggregate.
     */
    where?: ExpertiseCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertiseCharacters to fetch.
     */
    orderBy?: ExpertiseCharacterOrderByWithRelationInput | ExpertiseCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertiseCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertiseCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertiseCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpertiseCharacters
    **/
    _count?: true | ExpertiseCharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertiseCharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertiseCharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertiseCharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertiseCharacterMaxAggregateInputType
  }

  export type GetExpertiseCharacterAggregateType<T extends ExpertiseCharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertiseCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertiseCharacter[P]>
      : GetScalarType<T[P], AggregateExpertiseCharacter[P]>
  }




  export type ExpertiseCharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseCharacterWhereInput
    orderBy?: ExpertiseCharacterOrderByWithAggregationInput | ExpertiseCharacterOrderByWithAggregationInput[]
    by: ExpertiseCharacterScalarFieldEnum[] | ExpertiseCharacterScalarFieldEnum
    having?: ExpertiseCharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertiseCharacterCountAggregateInputType | true
    _avg?: ExpertiseCharacterAvgAggregateInputType
    _sum?: ExpertiseCharacterSumAggregateInputType
    _min?: ExpertiseCharacterMinAggregateInputType
    _max?: ExpertiseCharacterMaxAggregateInputType
  }

  export type ExpertiseCharacterGroupByOutputType = {
    id: number
    characterId: number
    expertiseId: number
    trained: boolean
    trainBonus: number
    _count: ExpertiseCharacterCountAggregateOutputType | null
    _avg: ExpertiseCharacterAvgAggregateOutputType | null
    _sum: ExpertiseCharacterSumAggregateOutputType | null
    _min: ExpertiseCharacterMinAggregateOutputType | null
    _max: ExpertiseCharacterMaxAggregateOutputType | null
  }

  type GetExpertiseCharacterGroupByPayload<T extends ExpertiseCharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertiseCharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertiseCharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertiseCharacterGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertiseCharacterGroupByOutputType[P]>
        }
      >
    >


  export type ExpertiseCharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    expertiseId?: boolean
    trained?: boolean
    trainBonus?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertiseCharacter"]>

  export type ExpertiseCharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    expertiseId?: boolean
    trained?: boolean
    trainBonus?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertiseCharacter"]>

  export type ExpertiseCharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    expertiseId?: boolean
    trained?: boolean
    trainBonus?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertiseCharacter"]>

  export type ExpertiseCharacterSelectScalar = {
    id?: boolean
    characterId?: boolean
    expertiseId?: boolean
    trained?: boolean
    trainBonus?: boolean
  }

  export type ExpertiseCharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "expertiseId" | "trained" | "trainBonus", ExtArgs["result"]["expertiseCharacter"]>
  export type ExpertiseCharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }
  export type ExpertiseCharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }
  export type ExpertiseCharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }

  export type $ExpertiseCharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpertiseCharacter"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      expertise: Prisma.$ExpertisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterId: number
      expertiseId: number
      trained: boolean
      trainBonus: number
    }, ExtArgs["result"]["expertiseCharacter"]>
    composites: {}
  }

  type ExpertiseCharacterGetPayload<S extends boolean | null | undefined | ExpertiseCharacterDefaultArgs> = $Result.GetResult<Prisma.$ExpertiseCharacterPayload, S>

  type ExpertiseCharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertiseCharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertiseCharacterCountAggregateInputType | true
    }

  export interface ExpertiseCharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpertiseCharacter'], meta: { name: 'ExpertiseCharacter' } }
    /**
     * Find zero or one ExpertiseCharacter that matches the filter.
     * @param {ExpertiseCharacterFindUniqueArgs} args - Arguments to find a ExpertiseCharacter
     * @example
     * // Get one ExpertiseCharacter
     * const expertiseCharacter = await prisma.expertiseCharacter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertiseCharacterFindUniqueArgs>(args: SelectSubset<T, ExpertiseCharacterFindUniqueArgs<ExtArgs>>): Prisma__ExpertiseCharacterClient<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpertiseCharacter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertiseCharacterFindUniqueOrThrowArgs} args - Arguments to find a ExpertiseCharacter
     * @example
     * // Get one ExpertiseCharacter
     * const expertiseCharacter = await prisma.expertiseCharacter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertiseCharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertiseCharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertiseCharacterClient<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpertiseCharacter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCharacterFindFirstArgs} args - Arguments to find a ExpertiseCharacter
     * @example
     * // Get one ExpertiseCharacter
     * const expertiseCharacter = await prisma.expertiseCharacter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertiseCharacterFindFirstArgs>(args?: SelectSubset<T, ExpertiseCharacterFindFirstArgs<ExtArgs>>): Prisma__ExpertiseCharacterClient<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpertiseCharacter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCharacterFindFirstOrThrowArgs} args - Arguments to find a ExpertiseCharacter
     * @example
     * // Get one ExpertiseCharacter
     * const expertiseCharacter = await prisma.expertiseCharacter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertiseCharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertiseCharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertiseCharacterClient<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpertiseCharacters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpertiseCharacters
     * const expertiseCharacters = await prisma.expertiseCharacter.findMany()
     * 
     * // Get first 10 ExpertiseCharacters
     * const expertiseCharacters = await prisma.expertiseCharacter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertiseCharacterWithIdOnly = await prisma.expertiseCharacter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertiseCharacterFindManyArgs>(args?: SelectSubset<T, ExpertiseCharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpertiseCharacter.
     * @param {ExpertiseCharacterCreateArgs} args - Arguments to create a ExpertiseCharacter.
     * @example
     * // Create one ExpertiseCharacter
     * const ExpertiseCharacter = await prisma.expertiseCharacter.create({
     *   data: {
     *     // ... data to create a ExpertiseCharacter
     *   }
     * })
     * 
     */
    create<T extends ExpertiseCharacterCreateArgs>(args: SelectSubset<T, ExpertiseCharacterCreateArgs<ExtArgs>>): Prisma__ExpertiseCharacterClient<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpertiseCharacters.
     * @param {ExpertiseCharacterCreateManyArgs} args - Arguments to create many ExpertiseCharacters.
     * @example
     * // Create many ExpertiseCharacters
     * const expertiseCharacter = await prisma.expertiseCharacter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertiseCharacterCreateManyArgs>(args?: SelectSubset<T, ExpertiseCharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpertiseCharacters and returns the data saved in the database.
     * @param {ExpertiseCharacterCreateManyAndReturnArgs} args - Arguments to create many ExpertiseCharacters.
     * @example
     * // Create many ExpertiseCharacters
     * const expertiseCharacter = await prisma.expertiseCharacter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpertiseCharacters and only return the `id`
     * const expertiseCharacterWithIdOnly = await prisma.expertiseCharacter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertiseCharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertiseCharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpertiseCharacter.
     * @param {ExpertiseCharacterDeleteArgs} args - Arguments to delete one ExpertiseCharacter.
     * @example
     * // Delete one ExpertiseCharacter
     * const ExpertiseCharacter = await prisma.expertiseCharacter.delete({
     *   where: {
     *     // ... filter to delete one ExpertiseCharacter
     *   }
     * })
     * 
     */
    delete<T extends ExpertiseCharacterDeleteArgs>(args: SelectSubset<T, ExpertiseCharacterDeleteArgs<ExtArgs>>): Prisma__ExpertiseCharacterClient<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpertiseCharacter.
     * @param {ExpertiseCharacterUpdateArgs} args - Arguments to update one ExpertiseCharacter.
     * @example
     * // Update one ExpertiseCharacter
     * const expertiseCharacter = await prisma.expertiseCharacter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertiseCharacterUpdateArgs>(args: SelectSubset<T, ExpertiseCharacterUpdateArgs<ExtArgs>>): Prisma__ExpertiseCharacterClient<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpertiseCharacters.
     * @param {ExpertiseCharacterDeleteManyArgs} args - Arguments to filter ExpertiseCharacters to delete.
     * @example
     * // Delete a few ExpertiseCharacters
     * const { count } = await prisma.expertiseCharacter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertiseCharacterDeleteManyArgs>(args?: SelectSubset<T, ExpertiseCharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertiseCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpertiseCharacters
     * const expertiseCharacter = await prisma.expertiseCharacter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertiseCharacterUpdateManyArgs>(args: SelectSubset<T, ExpertiseCharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertiseCharacters and returns the data updated in the database.
     * @param {ExpertiseCharacterUpdateManyAndReturnArgs} args - Arguments to update many ExpertiseCharacters.
     * @example
     * // Update many ExpertiseCharacters
     * const expertiseCharacter = await prisma.expertiseCharacter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpertiseCharacters and only return the `id`
     * const expertiseCharacterWithIdOnly = await prisma.expertiseCharacter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpertiseCharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpertiseCharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpertiseCharacter.
     * @param {ExpertiseCharacterUpsertArgs} args - Arguments to update or create a ExpertiseCharacter.
     * @example
     * // Update or create a ExpertiseCharacter
     * const expertiseCharacter = await prisma.expertiseCharacter.upsert({
     *   create: {
     *     // ... data to create a ExpertiseCharacter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpertiseCharacter we want to update
     *   }
     * })
     */
    upsert<T extends ExpertiseCharacterUpsertArgs>(args: SelectSubset<T, ExpertiseCharacterUpsertArgs<ExtArgs>>): Prisma__ExpertiseCharacterClient<$Result.GetResult<Prisma.$ExpertiseCharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpertiseCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCharacterCountArgs} args - Arguments to filter ExpertiseCharacters to count.
     * @example
     * // Count the number of ExpertiseCharacters
     * const count = await prisma.expertiseCharacter.count({
     *   where: {
     *     // ... the filter for the ExpertiseCharacters we want to count
     *   }
     * })
    **/
    count<T extends ExpertiseCharacterCountArgs>(
      args?: Subset<T, ExpertiseCharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertiseCharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpertiseCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpertiseCharacterAggregateArgs>(args: Subset<T, ExpertiseCharacterAggregateArgs>): Prisma.PrismaPromise<GetExpertiseCharacterAggregateType<T>>

    /**
     * Group by ExpertiseCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpertiseCharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertiseCharacterGroupByArgs['orderBy'] }
        : { orderBy?: ExpertiseCharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpertiseCharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertiseCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpertiseCharacter model
   */
  readonly fields: ExpertiseCharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpertiseCharacter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertiseCharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expertise<T extends ExpertiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertiseDefaultArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpertiseCharacter model
   */
  interface ExpertiseCharacterFieldRefs {
    readonly id: FieldRef<"ExpertiseCharacter", 'Int'>
    readonly characterId: FieldRef<"ExpertiseCharacter", 'Int'>
    readonly expertiseId: FieldRef<"ExpertiseCharacter", 'Int'>
    readonly trained: FieldRef<"ExpertiseCharacter", 'Boolean'>
    readonly trainBonus: FieldRef<"ExpertiseCharacter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExpertiseCharacter findUnique
   */
  export type ExpertiseCharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseCharacter to fetch.
     */
    where: ExpertiseCharacterWhereUniqueInput
  }

  /**
   * ExpertiseCharacter findUniqueOrThrow
   */
  export type ExpertiseCharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseCharacter to fetch.
     */
    where: ExpertiseCharacterWhereUniqueInput
  }

  /**
   * ExpertiseCharacter findFirst
   */
  export type ExpertiseCharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseCharacter to fetch.
     */
    where?: ExpertiseCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertiseCharacters to fetch.
     */
    orderBy?: ExpertiseCharacterOrderByWithRelationInput | ExpertiseCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertiseCharacters.
     */
    cursor?: ExpertiseCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertiseCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertiseCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertiseCharacters.
     */
    distinct?: ExpertiseCharacterScalarFieldEnum | ExpertiseCharacterScalarFieldEnum[]
  }

  /**
   * ExpertiseCharacter findFirstOrThrow
   */
  export type ExpertiseCharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseCharacter to fetch.
     */
    where?: ExpertiseCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertiseCharacters to fetch.
     */
    orderBy?: ExpertiseCharacterOrderByWithRelationInput | ExpertiseCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertiseCharacters.
     */
    cursor?: ExpertiseCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertiseCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertiseCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertiseCharacters.
     */
    distinct?: ExpertiseCharacterScalarFieldEnum | ExpertiseCharacterScalarFieldEnum[]
  }

  /**
   * ExpertiseCharacter findMany
   */
  export type ExpertiseCharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseCharacters to fetch.
     */
    where?: ExpertiseCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertiseCharacters to fetch.
     */
    orderBy?: ExpertiseCharacterOrderByWithRelationInput | ExpertiseCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpertiseCharacters.
     */
    cursor?: ExpertiseCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertiseCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertiseCharacters.
     */
    skip?: number
    distinct?: ExpertiseCharacterScalarFieldEnum | ExpertiseCharacterScalarFieldEnum[]
  }

  /**
   * ExpertiseCharacter create
   */
  export type ExpertiseCharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpertiseCharacter.
     */
    data: XOR<ExpertiseCharacterCreateInput, ExpertiseCharacterUncheckedCreateInput>
  }

  /**
   * ExpertiseCharacter createMany
   */
  export type ExpertiseCharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpertiseCharacters.
     */
    data: ExpertiseCharacterCreateManyInput | ExpertiseCharacterCreateManyInput[]
  }

  /**
   * ExpertiseCharacter createManyAndReturn
   */
  export type ExpertiseCharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * The data used to create many ExpertiseCharacters.
     */
    data: ExpertiseCharacterCreateManyInput | ExpertiseCharacterCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpertiseCharacter update
   */
  export type ExpertiseCharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpertiseCharacter.
     */
    data: XOR<ExpertiseCharacterUpdateInput, ExpertiseCharacterUncheckedUpdateInput>
    /**
     * Choose, which ExpertiseCharacter to update.
     */
    where: ExpertiseCharacterWhereUniqueInput
  }

  /**
   * ExpertiseCharacter updateMany
   */
  export type ExpertiseCharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpertiseCharacters.
     */
    data: XOR<ExpertiseCharacterUpdateManyMutationInput, ExpertiseCharacterUncheckedUpdateManyInput>
    /**
     * Filter which ExpertiseCharacters to update
     */
    where?: ExpertiseCharacterWhereInput
    /**
     * Limit how many ExpertiseCharacters to update.
     */
    limit?: number
  }

  /**
   * ExpertiseCharacter updateManyAndReturn
   */
  export type ExpertiseCharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * The data used to update ExpertiseCharacters.
     */
    data: XOR<ExpertiseCharacterUpdateManyMutationInput, ExpertiseCharacterUncheckedUpdateManyInput>
    /**
     * Filter which ExpertiseCharacters to update
     */
    where?: ExpertiseCharacterWhereInput
    /**
     * Limit how many ExpertiseCharacters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpertiseCharacter upsert
   */
  export type ExpertiseCharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpertiseCharacter to update in case it exists.
     */
    where: ExpertiseCharacterWhereUniqueInput
    /**
     * In case the ExpertiseCharacter found by the `where` argument doesn't exist, create a new ExpertiseCharacter with this data.
     */
    create: XOR<ExpertiseCharacterCreateInput, ExpertiseCharacterUncheckedCreateInput>
    /**
     * In case the ExpertiseCharacter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertiseCharacterUpdateInput, ExpertiseCharacterUncheckedUpdateInput>
  }

  /**
   * ExpertiseCharacter delete
   */
  export type ExpertiseCharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
    /**
     * Filter which ExpertiseCharacter to delete.
     */
    where: ExpertiseCharacterWhereUniqueInput
  }

  /**
   * ExpertiseCharacter deleteMany
   */
  export type ExpertiseCharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertiseCharacters to delete
     */
    where?: ExpertiseCharacterWhereInput
    /**
     * Limit how many ExpertiseCharacters to delete.
     */
    limit?: number
  }

  /**
   * ExpertiseCharacter without action
   */
  export type ExpertiseCharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseCharacter
     */
    select?: ExpertiseCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseCharacter
     */
    omit?: ExpertiseCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseCharacterInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    characterId: number | null
    tibares: number | null
  }

  export type InventorySumAggregateOutputType = {
    characterId: number | null
    tibares: number | null
  }

  export type InventoryMinAggregateOutputType = {
    characterId: number | null
    tibares: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    characterId: number | null
    tibares: number | null
  }

  export type InventoryCountAggregateOutputType = {
    characterId: number
    load: number
    tibares: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    characterId?: true
    tibares?: true
  }

  export type InventorySumAggregateInputType = {
    characterId?: true
    tibares?: true
  }

  export type InventoryMinAggregateInputType = {
    characterId?: true
    tibares?: true
  }

  export type InventoryMaxAggregateInputType = {
    characterId?: true
    tibares?: true
  }

  export type InventoryCountAggregateInputType = {
    characterId?: true
    load?: true
    tibares?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    characterId: number
    load: JsonValue
    tibares: number
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    load?: boolean
    tibares?: boolean
    items?: boolean | Inventory$itemsArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    load?: boolean
    tibares?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    load?: boolean
    tibares?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    characterId?: boolean
    load?: boolean
    tibares?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"characterId" | "load" | "tibares", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Inventory$itemsArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      items: Prisma.$InventoryItemPayload<ExtArgs>[]
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      load: Prisma.JsonValue
      tibares: number
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const inventoryWithCharacterIdOnly = await prisma.inventory.findMany({ select: { characterId: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `characterId`
     * const inventoryWithCharacterIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { characterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `characterId`
     * const inventoryWithCharacterIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { characterId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Inventory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly characterId: FieldRef<"Inventory", 'Int'>
    readonly load: FieldRef<"Inventory", 'Json'>
    readonly tibares: FieldRef<"Inventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.items
   */
  export type Inventory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    inventoryId: number | null
    quantity: number | null
    slot: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    inventoryId: number | null
    quantity: number | null
    slot: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    inventoryId: number | null
    type: string | null
    name: string | null
    description: string | null
    quantity: number | null
    slot: number | null
    isEquippable: boolean | null
    equipped: boolean | null
    passive: boolean | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    inventoryId: number | null
    type: string | null
    name: string | null
    description: string | null
    quantity: number | null
    slot: number | null
    isEquippable: boolean | null
    equipped: boolean | null
    passive: boolean | null
  }

  export type InventoryItemCountAggregateOutputType = {
    inventoryId: number
    type: number
    name: number
    description: number
    quantity: number
    slot: number
    isEquippable: number
    equipped: number
    passive: number
    attacks: number
    modifiers: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    inventoryId?: true
    quantity?: true
    slot?: true
  }

  export type InventoryItemSumAggregateInputType = {
    inventoryId?: true
    quantity?: true
    slot?: true
  }

  export type InventoryItemMinAggregateInputType = {
    inventoryId?: true
    type?: true
    name?: true
    description?: true
    quantity?: true
    slot?: true
    isEquippable?: true
    equipped?: true
    passive?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    inventoryId?: true
    type?: true
    name?: true
    description?: true
    quantity?: true
    slot?: true
    isEquippable?: true
    equipped?: true
    passive?: true
  }

  export type InventoryItemCountAggregateInputType = {
    inventoryId?: true
    type?: true
    name?: true
    description?: true
    quantity?: true
    slot?: true
    isEquippable?: true
    equipped?: true
    passive?: true
    attacks?: true
    modifiers?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    inventoryId: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks: JsonValue
    modifiers: JsonValue
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    slot?: boolean
    isEquippable?: boolean
    equipped?: boolean
    passive?: boolean
    attacks?: boolean
    modifiers?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    slot?: boolean
    isEquippable?: boolean
    equipped?: boolean
    passive?: boolean
    attacks?: boolean
    modifiers?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    slot?: boolean
    isEquippable?: boolean
    equipped?: boolean
    passive?: boolean
    attacks?: boolean
    modifiers?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    inventoryId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    slot?: boolean
    isEquippable?: boolean
    equipped?: boolean
    passive?: boolean
    attacks?: boolean
    modifiers?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inventoryId" | "type" | "name" | "description" | "quantity" | "slot" | "isEquippable" | "equipped" | "passive" | "attacks" | "modifiers", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      inventoryId: number
      type: string
      name: string
      description: string
      quantity: number
      slot: number
      isEquippable: boolean
      equipped: boolean
      passive: boolean
      attacks: Prisma.JsonValue
      modifiers: Prisma.JsonValue
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `inventoryId`
     * const inventoryItemWithInventoryIdOnly = await prisma.inventoryItem.findMany({ select: { inventoryId: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `inventoryId`
     * const inventoryItemWithInventoryIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { inventoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems and returns the data updated in the database.
     * @param {InventoryItemUpdateManyAndReturnArgs} args - Arguments to update many InventoryItems.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryItems and only return the `inventoryId`
     * const inventoryItemWithInventoryIdOnly = await prisma.inventoryItem.updateManyAndReturn({
     *   select: { inventoryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly inventoryId: FieldRef<"InventoryItem", 'Int'>
    readonly type: FieldRef<"InventoryItem", 'String'>
    readonly name: FieldRef<"InventoryItem", 'String'>
    readonly description: FieldRef<"InventoryItem", 'String'>
    readonly quantity: FieldRef<"InventoryItem", 'Int'>
    readonly slot: FieldRef<"InventoryItem", 'Int'>
    readonly isEquippable: FieldRef<"InventoryItem", 'Boolean'>
    readonly equipped: FieldRef<"InventoryItem", 'Boolean'>
    readonly passive: FieldRef<"InventoryItem", 'Boolean'>
    readonly attacks: FieldRef<"InventoryItem", 'Json'>
    readonly modifiers: FieldRef<"InventoryItem", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem updateManyAndReturn
   */
  export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model Ability
   */

  export type AggregateAbility = {
    _count: AbilityCountAggregateOutputType | null
    _avg: AbilityAvgAggregateOutputType | null
    _sum: AbilitySumAggregateOutputType | null
    _min: AbilityMinAggregateOutputType | null
    _max: AbilityMaxAggregateOutputType | null
  }

  export type AbilityAvgAggregateOutputType = {
    characterId: number | null
    manaCost: number | null
  }

  export type AbilitySumAggregateOutputType = {
    characterId: number | null
    manaCost: number | null
  }

  export type AbilityMinAggregateOutputType = {
    characterId: number | null
    type: string | null
    name: string | null
    description: string | null
    passive: boolean | null
    manaCost: number | null
  }

  export type AbilityMaxAggregateOutputType = {
    characterId: number | null
    type: string | null
    name: string | null
    description: string | null
    passive: boolean | null
    manaCost: number | null
  }

  export type AbilityCountAggregateOutputType = {
    characterId: number
    type: number
    name: number
    description: number
    passive: number
    manaCost: number
    attacks: number
    modifiers: number
    _all: number
  }


  export type AbilityAvgAggregateInputType = {
    characterId?: true
    manaCost?: true
  }

  export type AbilitySumAggregateInputType = {
    characterId?: true
    manaCost?: true
  }

  export type AbilityMinAggregateInputType = {
    characterId?: true
    type?: true
    name?: true
    description?: true
    passive?: true
    manaCost?: true
  }

  export type AbilityMaxAggregateInputType = {
    characterId?: true
    type?: true
    name?: true
    description?: true
    passive?: true
    manaCost?: true
  }

  export type AbilityCountAggregateInputType = {
    characterId?: true
    type?: true
    name?: true
    description?: true
    passive?: true
    manaCost?: true
    attacks?: true
    modifiers?: true
    _all?: true
  }

  export type AbilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ability to aggregate.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abilities
    **/
    _count?: true | AbilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbilityMaxAggregateInputType
  }

  export type GetAbilityAggregateType<T extends AbilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAbility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbility[P]>
      : GetScalarType<T[P], AggregateAbility[P]>
  }




  export type AbilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityWhereInput
    orderBy?: AbilityOrderByWithAggregationInput | AbilityOrderByWithAggregationInput[]
    by: AbilityScalarFieldEnum[] | AbilityScalarFieldEnum
    having?: AbilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbilityCountAggregateInputType | true
    _avg?: AbilityAvgAggregateInputType
    _sum?: AbilitySumAggregateInputType
    _min?: AbilityMinAggregateInputType
    _max?: AbilityMaxAggregateInputType
  }

  export type AbilityGroupByOutputType = {
    characterId: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    attacks: JsonValue
    modifiers: JsonValue
    _count: AbilityCountAggregateOutputType | null
    _avg: AbilityAvgAggregateOutputType | null
    _sum: AbilitySumAggregateOutputType | null
    _min: AbilityMinAggregateOutputType | null
    _max: AbilityMaxAggregateOutputType | null
  }

  type GetAbilityGroupByPayload<T extends AbilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbilityGroupByOutputType[P]>
            : GetScalarType<T[P], AbilityGroupByOutputType[P]>
        }
      >
    >


  export type AbilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    passive?: boolean
    manaCost?: boolean
    attacks?: boolean
    modifiers?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    passive?: boolean
    manaCost?: boolean
    attacks?: boolean
    modifiers?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    passive?: boolean
    manaCost?: boolean
    attacks?: boolean
    modifiers?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectScalar = {
    characterId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    passive?: boolean
    manaCost?: boolean
    attacks?: boolean
    modifiers?: boolean
  }

  export type AbilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"characterId" | "type" | "name" | "description" | "passive" | "manaCost" | "attacks" | "modifiers", ExtArgs["result"]["ability"]>
  export type AbilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type AbilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type AbilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $AbilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ability"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      type: string
      name: string
      description: string
      passive: boolean
      manaCost: number
      attacks: Prisma.JsonValue
      modifiers: Prisma.JsonValue
    }, ExtArgs["result"]["ability"]>
    composites: {}
  }

  type AbilityGetPayload<S extends boolean | null | undefined | AbilityDefaultArgs> = $Result.GetResult<Prisma.$AbilityPayload, S>

  type AbilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbilityCountAggregateInputType | true
    }

  export interface AbilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ability'], meta: { name: 'Ability' } }
    /**
     * Find zero or one Ability that matches the filter.
     * @param {AbilityFindUniqueArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbilityFindUniqueArgs>(args: SelectSubset<T, AbilityFindUniqueArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbilityFindUniqueOrThrowArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AbilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindFirstArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbilityFindFirstArgs>(args?: SelectSubset<T, AbilityFindFirstArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindFirstOrThrowArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AbilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abilities
     * const abilities = await prisma.ability.findMany()
     * 
     * // Get first 10 Abilities
     * const abilities = await prisma.ability.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const abilityWithCharacterIdOnly = await prisma.ability.findMany({ select: { characterId: true } })
     * 
     */
    findMany<T extends AbilityFindManyArgs>(args?: SelectSubset<T, AbilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ability.
     * @param {AbilityCreateArgs} args - Arguments to create a Ability.
     * @example
     * // Create one Ability
     * const Ability = await prisma.ability.create({
     *   data: {
     *     // ... data to create a Ability
     *   }
     * })
     * 
     */
    create<T extends AbilityCreateArgs>(args: SelectSubset<T, AbilityCreateArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abilities.
     * @param {AbilityCreateManyArgs} args - Arguments to create many Abilities.
     * @example
     * // Create many Abilities
     * const ability = await prisma.ability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbilityCreateManyArgs>(args?: SelectSubset<T, AbilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abilities and returns the data saved in the database.
     * @param {AbilityCreateManyAndReturnArgs} args - Arguments to create many Abilities.
     * @example
     * // Create many Abilities
     * const ability = await prisma.ability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abilities and only return the `characterId`
     * const abilityWithCharacterIdOnly = await prisma.ability.createManyAndReturn({
     *   select: { characterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AbilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ability.
     * @param {AbilityDeleteArgs} args - Arguments to delete one Ability.
     * @example
     * // Delete one Ability
     * const Ability = await prisma.ability.delete({
     *   where: {
     *     // ... filter to delete one Ability
     *   }
     * })
     * 
     */
    delete<T extends AbilityDeleteArgs>(args: SelectSubset<T, AbilityDeleteArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ability.
     * @param {AbilityUpdateArgs} args - Arguments to update one Ability.
     * @example
     * // Update one Ability
     * const ability = await prisma.ability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbilityUpdateArgs>(args: SelectSubset<T, AbilityUpdateArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abilities.
     * @param {AbilityDeleteManyArgs} args - Arguments to filter Abilities to delete.
     * @example
     * // Delete a few Abilities
     * const { count } = await prisma.ability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbilityDeleteManyArgs>(args?: SelectSubset<T, AbilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abilities
     * const ability = await prisma.ability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbilityUpdateManyArgs>(args: SelectSubset<T, AbilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities and returns the data updated in the database.
     * @param {AbilityUpdateManyAndReturnArgs} args - Arguments to update many Abilities.
     * @example
     * // Update many Abilities
     * const ability = await prisma.ability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abilities and only return the `characterId`
     * const abilityWithCharacterIdOnly = await prisma.ability.updateManyAndReturn({
     *   select: { characterId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AbilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ability.
     * @param {AbilityUpsertArgs} args - Arguments to update or create a Ability.
     * @example
     * // Update or create a Ability
     * const ability = await prisma.ability.upsert({
     *   create: {
     *     // ... data to create a Ability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ability we want to update
     *   }
     * })
     */
    upsert<T extends AbilityUpsertArgs>(args: SelectSubset<T, AbilityUpsertArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityCountArgs} args - Arguments to filter Abilities to count.
     * @example
     * // Count the number of Abilities
     * const count = await prisma.ability.count({
     *   where: {
     *     // ... the filter for the Abilities we want to count
     *   }
     * })
    **/
    count<T extends AbilityCountArgs>(
      args?: Subset<T, AbilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbilityAggregateArgs>(args: Subset<T, AbilityAggregateArgs>): Prisma.PrismaPromise<GetAbilityAggregateType<T>>

    /**
     * Group by Ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbilityGroupByArgs['orderBy'] }
        : { orderBy?: AbilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ability model
   */
  readonly fields: AbilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ability model
   */
  interface AbilityFieldRefs {
    readonly characterId: FieldRef<"Ability", 'Int'>
    readonly type: FieldRef<"Ability", 'String'>
    readonly name: FieldRef<"Ability", 'String'>
    readonly description: FieldRef<"Ability", 'String'>
    readonly passive: FieldRef<"Ability", 'Boolean'>
    readonly manaCost: FieldRef<"Ability", 'Int'>
    readonly attacks: FieldRef<"Ability", 'Json'>
    readonly modifiers: FieldRef<"Ability", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Ability findUnique
   */
  export type AbilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability findUniqueOrThrow
   */
  export type AbilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability findFirst
   */
  export type AbilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability findFirstOrThrow
   */
  export type AbilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability findMany
   */
  export type AbilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability create
   */
  export type AbilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Ability.
     */
    data: XOR<AbilityCreateInput, AbilityUncheckedCreateInput>
  }

  /**
   * Ability createMany
   */
  export type AbilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abilities.
     */
    data: AbilityCreateManyInput | AbilityCreateManyInput[]
  }

  /**
   * Ability createManyAndReturn
   */
  export type AbilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * The data used to create many Abilities.
     */
    data: AbilityCreateManyInput | AbilityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ability update
   */
  export type AbilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Ability.
     */
    data: XOR<AbilityUpdateInput, AbilityUncheckedUpdateInput>
    /**
     * Choose, which Ability to update.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability updateMany
   */
  export type AbilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to update.
     */
    limit?: number
  }

  /**
   * Ability updateManyAndReturn
   */
  export type AbilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ability upsert
   */
  export type AbilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Ability to update in case it exists.
     */
    where: AbilityWhereUniqueInput
    /**
     * In case the Ability found by the `where` argument doesn't exist, create a new Ability with this data.
     */
    create: XOR<AbilityCreateInput, AbilityUncheckedCreateInput>
    /**
     * In case the Ability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbilityUpdateInput, AbilityUncheckedUpdateInput>
  }

  /**
   * Ability delete
   */
  export type AbilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter which Ability to delete.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability deleteMany
   */
  export type AbilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abilities to delete
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to delete.
     */
    limit?: number
  }

  /**
   * Ability without action
   */
  export type AbilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
  }


  /**
   * Model Effect
   */

  export type AggregateEffect = {
    _count: EffectCountAggregateOutputType | null
    _avg: EffectAvgAggregateOutputType | null
    _sum: EffectSumAggregateOutputType | null
    _min: EffectMinAggregateOutputType | null
    _max: EffectMaxAggregateOutputType | null
  }

  export type EffectAvgAggregateOutputType = {
    characterId: number | null
    sourceId: number | null
    stacks: number | null
  }

  export type EffectSumAggregateOutputType = {
    characterId: number | null
    sourceId: number | null
    stacks: number | null
  }

  export type EffectMinAggregateOutputType = {
    characterId: number | null
    sourceType: string | null
    sourceId: number | null
    sourceName: string | null
    active: boolean | null
    stacks: number | null
    startedAt: Date | null
  }

  export type EffectMaxAggregateOutputType = {
    characterId: number | null
    sourceType: string | null
    sourceId: number | null
    sourceName: string | null
    active: boolean | null
    stacks: number | null
    startedAt: Date | null
  }

  export type EffectCountAggregateOutputType = {
    characterId: number
    sourceType: number
    sourceId: number
    sourceName: number
    active: number
    duration: number
    stacks: number
    modifiers: number
    startedAt: number
    _all: number
  }


  export type EffectAvgAggregateInputType = {
    characterId?: true
    sourceId?: true
    stacks?: true
  }

  export type EffectSumAggregateInputType = {
    characterId?: true
    sourceId?: true
    stacks?: true
  }

  export type EffectMinAggregateInputType = {
    characterId?: true
    sourceType?: true
    sourceId?: true
    sourceName?: true
    active?: true
    stacks?: true
    startedAt?: true
  }

  export type EffectMaxAggregateInputType = {
    characterId?: true
    sourceType?: true
    sourceId?: true
    sourceName?: true
    active?: true
    stacks?: true
    startedAt?: true
  }

  export type EffectCountAggregateInputType = {
    characterId?: true
    sourceType?: true
    sourceId?: true
    sourceName?: true
    active?: true
    duration?: true
    stacks?: true
    modifiers?: true
    startedAt?: true
    _all?: true
  }

  export type EffectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Effect to aggregate.
     */
    where?: EffectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Effects to fetch.
     */
    orderBy?: EffectOrderByWithRelationInput | EffectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EffectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Effects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Effects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Effects
    **/
    _count?: true | EffectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EffectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EffectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EffectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EffectMaxAggregateInputType
  }

  export type GetEffectAggregateType<T extends EffectAggregateArgs> = {
        [P in keyof T & keyof AggregateEffect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEffect[P]>
      : GetScalarType<T[P], AggregateEffect[P]>
  }




  export type EffectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EffectWhereInput
    orderBy?: EffectOrderByWithAggregationInput | EffectOrderByWithAggregationInput[]
    by: EffectScalarFieldEnum[] | EffectScalarFieldEnum
    having?: EffectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EffectCountAggregateInputType | true
    _avg?: EffectAvgAggregateInputType
    _sum?: EffectSumAggregateInputType
    _min?: EffectMinAggregateInputType
    _max?: EffectMaxAggregateInputType
  }

  export type EffectGroupByOutputType = {
    characterId: number
    sourceType: string
    sourceId: number | null
    sourceName: string
    active: boolean
    duration: JsonValue
    stacks: number
    modifiers: JsonValue
    startedAt: Date
    _count: EffectCountAggregateOutputType | null
    _avg: EffectAvgAggregateOutputType | null
    _sum: EffectSumAggregateOutputType | null
    _min: EffectMinAggregateOutputType | null
    _max: EffectMaxAggregateOutputType | null
  }

  type GetEffectGroupByPayload<T extends EffectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EffectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EffectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EffectGroupByOutputType[P]>
            : GetScalarType<T[P], EffectGroupByOutputType[P]>
        }
      >
    >


  export type EffectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceName?: boolean
    active?: boolean
    duration?: boolean
    stacks?: boolean
    modifiers?: boolean
    startedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effect"]>

  export type EffectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceName?: boolean
    active?: boolean
    duration?: boolean
    stacks?: boolean
    modifiers?: boolean
    startedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effect"]>

  export type EffectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceName?: boolean
    active?: boolean
    duration?: boolean
    stacks?: boolean
    modifiers?: boolean
    startedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effect"]>

  export type EffectSelectScalar = {
    characterId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceName?: boolean
    active?: boolean
    duration?: boolean
    stacks?: boolean
    modifiers?: boolean
    startedAt?: boolean
  }

  export type EffectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"characterId" | "sourceType" | "sourceId" | "sourceName" | "active" | "duration" | "stacks" | "modifiers" | "startedAt", ExtArgs["result"]["effect"]>
  export type EffectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type EffectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type EffectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $EffectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Effect"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      sourceType: string
      sourceId: number | null
      sourceName: string
      active: boolean
      duration: Prisma.JsonValue
      stacks: number
      modifiers: Prisma.JsonValue
      startedAt: Date
    }, ExtArgs["result"]["effect"]>
    composites: {}
  }

  type EffectGetPayload<S extends boolean | null | undefined | EffectDefaultArgs> = $Result.GetResult<Prisma.$EffectPayload, S>

  type EffectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EffectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EffectCountAggregateInputType | true
    }

  export interface EffectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Effect'], meta: { name: 'Effect' } }
    /**
     * Find zero or one Effect that matches the filter.
     * @param {EffectFindUniqueArgs} args - Arguments to find a Effect
     * @example
     * // Get one Effect
     * const effect = await prisma.effect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EffectFindUniqueArgs>(args: SelectSubset<T, EffectFindUniqueArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Effect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EffectFindUniqueOrThrowArgs} args - Arguments to find a Effect
     * @example
     * // Get one Effect
     * const effect = await prisma.effect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EffectFindUniqueOrThrowArgs>(args: SelectSubset<T, EffectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Effect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectFindFirstArgs} args - Arguments to find a Effect
     * @example
     * // Get one Effect
     * const effect = await prisma.effect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EffectFindFirstArgs>(args?: SelectSubset<T, EffectFindFirstArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Effect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectFindFirstOrThrowArgs} args - Arguments to find a Effect
     * @example
     * // Get one Effect
     * const effect = await prisma.effect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EffectFindFirstOrThrowArgs>(args?: SelectSubset<T, EffectFindFirstOrThrowArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Effects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Effects
     * const effects = await prisma.effect.findMany()
     * 
     * // Get first 10 Effects
     * const effects = await prisma.effect.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const effectWithCharacterIdOnly = await prisma.effect.findMany({ select: { characterId: true } })
     * 
     */
    findMany<T extends EffectFindManyArgs>(args?: SelectSubset<T, EffectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Effect.
     * @param {EffectCreateArgs} args - Arguments to create a Effect.
     * @example
     * // Create one Effect
     * const Effect = await prisma.effect.create({
     *   data: {
     *     // ... data to create a Effect
     *   }
     * })
     * 
     */
    create<T extends EffectCreateArgs>(args: SelectSubset<T, EffectCreateArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Effects.
     * @param {EffectCreateManyArgs} args - Arguments to create many Effects.
     * @example
     * // Create many Effects
     * const effect = await prisma.effect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EffectCreateManyArgs>(args?: SelectSubset<T, EffectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Effects and returns the data saved in the database.
     * @param {EffectCreateManyAndReturnArgs} args - Arguments to create many Effects.
     * @example
     * // Create many Effects
     * const effect = await prisma.effect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Effects and only return the `characterId`
     * const effectWithCharacterIdOnly = await prisma.effect.createManyAndReturn({
     *   select: { characterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EffectCreateManyAndReturnArgs>(args?: SelectSubset<T, EffectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Effect.
     * @param {EffectDeleteArgs} args - Arguments to delete one Effect.
     * @example
     * // Delete one Effect
     * const Effect = await prisma.effect.delete({
     *   where: {
     *     // ... filter to delete one Effect
     *   }
     * })
     * 
     */
    delete<T extends EffectDeleteArgs>(args: SelectSubset<T, EffectDeleteArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Effect.
     * @param {EffectUpdateArgs} args - Arguments to update one Effect.
     * @example
     * // Update one Effect
     * const effect = await prisma.effect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EffectUpdateArgs>(args: SelectSubset<T, EffectUpdateArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Effects.
     * @param {EffectDeleteManyArgs} args - Arguments to filter Effects to delete.
     * @example
     * // Delete a few Effects
     * const { count } = await prisma.effect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EffectDeleteManyArgs>(args?: SelectSubset<T, EffectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Effects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Effects
     * const effect = await prisma.effect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EffectUpdateManyArgs>(args: SelectSubset<T, EffectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Effects and returns the data updated in the database.
     * @param {EffectUpdateManyAndReturnArgs} args - Arguments to update many Effects.
     * @example
     * // Update many Effects
     * const effect = await prisma.effect.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Effects and only return the `characterId`
     * const effectWithCharacterIdOnly = await prisma.effect.updateManyAndReturn({
     *   select: { characterId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EffectUpdateManyAndReturnArgs>(args: SelectSubset<T, EffectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Effect.
     * @param {EffectUpsertArgs} args - Arguments to update or create a Effect.
     * @example
     * // Update or create a Effect
     * const effect = await prisma.effect.upsert({
     *   create: {
     *     // ... data to create a Effect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Effect we want to update
     *   }
     * })
     */
    upsert<T extends EffectUpsertArgs>(args: SelectSubset<T, EffectUpsertArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Effects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectCountArgs} args - Arguments to filter Effects to count.
     * @example
     * // Count the number of Effects
     * const count = await prisma.effect.count({
     *   where: {
     *     // ... the filter for the Effects we want to count
     *   }
     * })
    **/
    count<T extends EffectCountArgs>(
      args?: Subset<T, EffectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EffectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Effect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EffectAggregateArgs>(args: Subset<T, EffectAggregateArgs>): Prisma.PrismaPromise<GetEffectAggregateType<T>>

    /**
     * Group by Effect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EffectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EffectGroupByArgs['orderBy'] }
        : { orderBy?: EffectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EffectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEffectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Effect model
   */
  readonly fields: EffectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Effect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EffectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Effect model
   */
  interface EffectFieldRefs {
    readonly characterId: FieldRef<"Effect", 'Int'>
    readonly sourceType: FieldRef<"Effect", 'String'>
    readonly sourceId: FieldRef<"Effect", 'Int'>
    readonly sourceName: FieldRef<"Effect", 'String'>
    readonly active: FieldRef<"Effect", 'Boolean'>
    readonly duration: FieldRef<"Effect", 'Json'>
    readonly stacks: FieldRef<"Effect", 'Int'>
    readonly modifiers: FieldRef<"Effect", 'Json'>
    readonly startedAt: FieldRef<"Effect", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Effect findUnique
   */
  export type EffectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * Filter, which Effect to fetch.
     */
    where: EffectWhereUniqueInput
  }

  /**
   * Effect findUniqueOrThrow
   */
  export type EffectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * Filter, which Effect to fetch.
     */
    where: EffectWhereUniqueInput
  }

  /**
   * Effect findFirst
   */
  export type EffectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * Filter, which Effect to fetch.
     */
    where?: EffectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Effects to fetch.
     */
    orderBy?: EffectOrderByWithRelationInput | EffectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Effects.
     */
    cursor?: EffectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Effects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Effects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Effects.
     */
    distinct?: EffectScalarFieldEnum | EffectScalarFieldEnum[]
  }

  /**
   * Effect findFirstOrThrow
   */
  export type EffectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * Filter, which Effect to fetch.
     */
    where?: EffectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Effects to fetch.
     */
    orderBy?: EffectOrderByWithRelationInput | EffectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Effects.
     */
    cursor?: EffectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Effects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Effects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Effects.
     */
    distinct?: EffectScalarFieldEnum | EffectScalarFieldEnum[]
  }

  /**
   * Effect findMany
   */
  export type EffectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * Filter, which Effects to fetch.
     */
    where?: EffectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Effects to fetch.
     */
    orderBy?: EffectOrderByWithRelationInput | EffectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Effects.
     */
    cursor?: EffectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Effects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Effects.
     */
    skip?: number
    distinct?: EffectScalarFieldEnum | EffectScalarFieldEnum[]
  }

  /**
   * Effect create
   */
  export type EffectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * The data needed to create a Effect.
     */
    data: XOR<EffectCreateInput, EffectUncheckedCreateInput>
  }

  /**
   * Effect createMany
   */
  export type EffectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Effects.
     */
    data: EffectCreateManyInput | EffectCreateManyInput[]
  }

  /**
   * Effect createManyAndReturn
   */
  export type EffectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * The data used to create many Effects.
     */
    data: EffectCreateManyInput | EffectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Effect update
   */
  export type EffectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * The data needed to update a Effect.
     */
    data: XOR<EffectUpdateInput, EffectUncheckedUpdateInput>
    /**
     * Choose, which Effect to update.
     */
    where: EffectWhereUniqueInput
  }

  /**
   * Effect updateMany
   */
  export type EffectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Effects.
     */
    data: XOR<EffectUpdateManyMutationInput, EffectUncheckedUpdateManyInput>
    /**
     * Filter which Effects to update
     */
    where?: EffectWhereInput
    /**
     * Limit how many Effects to update.
     */
    limit?: number
  }

  /**
   * Effect updateManyAndReturn
   */
  export type EffectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * The data used to update Effects.
     */
    data: XOR<EffectUpdateManyMutationInput, EffectUncheckedUpdateManyInput>
    /**
     * Filter which Effects to update
     */
    where?: EffectWhereInput
    /**
     * Limit how many Effects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Effect upsert
   */
  export type EffectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * The filter to search for the Effect to update in case it exists.
     */
    where: EffectWhereUniqueInput
    /**
     * In case the Effect found by the `where` argument doesn't exist, create a new Effect with this data.
     */
    create: XOR<EffectCreateInput, EffectUncheckedCreateInput>
    /**
     * In case the Effect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EffectUpdateInput, EffectUncheckedUpdateInput>
  }

  /**
   * Effect delete
   */
  export type EffectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
    /**
     * Filter which Effect to delete.
     */
    where: EffectWhereUniqueInput
  }

  /**
   * Effect deleteMany
   */
  export type EffectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Effects to delete
     */
    where?: EffectWhereInput
    /**
     * Limit how many Effects to delete.
     */
    limit?: number
  }

  /**
   * Effect without action
   */
  export type EffectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Effect
     */
    select?: EffectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Effect
     */
    omit?: EffectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    player: 'player',
    origin: 'origin',
    races: 'races',
    classes: 'classes',
    divinity: 'divinity',
    description: 'description',
    notes: 'notes',
    level: 'level',
    experience: 'experience',
    size: 'size',
    movement: 'movement',
    defense: 'defense',
    magicResistence: 'magicResistence',
    hp: 'hp',
    hpMax: 'hpMax',
    mp: 'mp',
    mpMax: 'mpMax',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const AttributesScalarFieldEnum: {
    characterId: 'characterId',
    strength: 'strength',
    dexterity: 'dexterity',
    constitution: 'constitution',
    intelligence: 'intelligence',
    wisdom: 'wisdom',
    charisma: 'charisma'
  };

  export type AttributesScalarFieldEnum = (typeof AttributesScalarFieldEnum)[keyof typeof AttributesScalarFieldEnum]


  export const ExpertiseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    attribute: 'attribute'
  };

  export type ExpertiseScalarFieldEnum = (typeof ExpertiseScalarFieldEnum)[keyof typeof ExpertiseScalarFieldEnum]


  export const ExpertiseCharacterScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    expertiseId: 'expertiseId',
    trained: 'trained',
    trainBonus: 'trainBonus'
  };

  export type ExpertiseCharacterScalarFieldEnum = (typeof ExpertiseCharacterScalarFieldEnum)[keyof typeof ExpertiseCharacterScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    characterId: 'characterId',
    load: 'load',
    tibares: 'tibares'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    inventoryId: 'inventoryId',
    type: 'type',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    slot: 'slot',
    isEquippable: 'isEquippable',
    equipped: 'equipped',
    passive: 'passive',
    attacks: 'attacks',
    modifiers: 'modifiers'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const AbilityScalarFieldEnum: {
    characterId: 'characterId',
    type: 'type',
    name: 'name',
    description: 'description',
    passive: 'passive',
    manaCost: 'manaCost',
    attacks: 'attacks',
    modifiers: 'modifiers'
  };

  export type AbilityScalarFieldEnum = (typeof AbilityScalarFieldEnum)[keyof typeof AbilityScalarFieldEnum]


  export const EffectScalarFieldEnum: {
    characterId: 'characterId',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    sourceName: 'sourceName',
    active: 'active',
    duration: 'duration',
    stacks: 'stacks',
    modifiers: 'modifiers',
    startedAt: 'startedAt'
  };

  export type EffectScalarFieldEnum = (typeof EffectScalarFieldEnum)[keyof typeof EffectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: IntFilter<"Character"> | number
    name?: StringFilter<"Character"> | string
    player?: StringFilter<"Character"> | string
    origin?: StringFilter<"Character"> | string
    races?: JsonFilter<"Character">
    classes?: JsonFilter<"Character">
    divinity?: StringNullableFilter<"Character"> | string | null
    description?: StringFilter<"Character"> | string
    notes?: StringFilter<"Character"> | string
    level?: IntFilter<"Character"> | number
    experience?: IntFilter<"Character"> | number
    size?: StringFilter<"Character"> | string
    movement?: IntFilter<"Character"> | number
    defense?: IntFilter<"Character"> | number
    magicResistence?: IntFilter<"Character"> | number
    hp?: IntFilter<"Character"> | number
    hpMax?: IntFilter<"Character"> | number
    mp?: IntFilter<"Character"> | number
    mpMax?: IntFilter<"Character"> | number
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    attributes?: XOR<AttributesNullableScalarRelationFilter, AttributesWhereInput> | null
    expertisies?: ExpertiseCharacterListRelationFilter
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    abilities?: AbilityListRelationFilter
    effects?: EffectListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    player?: SortOrder
    origin?: SortOrder
    races?: SortOrder
    classes?: SortOrder
    divinity?: SortOrderInput | SortOrder
    description?: SortOrder
    notes?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    size?: SortOrder
    movement?: SortOrder
    defense?: SortOrder
    magicResistence?: SortOrder
    hp?: SortOrder
    hpMax?: SortOrder
    mp?: SortOrder
    mpMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attributes?: AttributesOrderByWithRelationInput
    expertisies?: ExpertiseCharacterOrderByRelationAggregateInput
    inventory?: InventoryOrderByWithRelationInput
    abilities?: AbilityOrderByRelationAggregateInput
    effects?: EffectOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    name?: StringFilter<"Character"> | string
    player?: StringFilter<"Character"> | string
    origin?: StringFilter<"Character"> | string
    races?: JsonFilter<"Character">
    classes?: JsonFilter<"Character">
    divinity?: StringNullableFilter<"Character"> | string | null
    description?: StringFilter<"Character"> | string
    notes?: StringFilter<"Character"> | string
    level?: IntFilter<"Character"> | number
    experience?: IntFilter<"Character"> | number
    size?: StringFilter<"Character"> | string
    movement?: IntFilter<"Character"> | number
    defense?: IntFilter<"Character"> | number
    magicResistence?: IntFilter<"Character"> | number
    hp?: IntFilter<"Character"> | number
    hpMax?: IntFilter<"Character"> | number
    mp?: IntFilter<"Character"> | number
    mpMax?: IntFilter<"Character"> | number
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    attributes?: XOR<AttributesNullableScalarRelationFilter, AttributesWhereInput> | null
    expertisies?: ExpertiseCharacterListRelationFilter
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    abilities?: AbilityListRelationFilter
    effects?: EffectListRelationFilter
  }, "id">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    player?: SortOrder
    origin?: SortOrder
    races?: SortOrder
    classes?: SortOrder
    divinity?: SortOrderInput | SortOrder
    description?: SortOrder
    notes?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    size?: SortOrder
    movement?: SortOrder
    defense?: SortOrder
    magicResistence?: SortOrder
    hp?: SortOrder
    hpMax?: SortOrder
    mp?: SortOrder
    mpMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Character"> | number
    name?: StringWithAggregatesFilter<"Character"> | string
    player?: StringWithAggregatesFilter<"Character"> | string
    origin?: StringWithAggregatesFilter<"Character"> | string
    races?: JsonWithAggregatesFilter<"Character">
    classes?: JsonWithAggregatesFilter<"Character">
    divinity?: StringNullableWithAggregatesFilter<"Character"> | string | null
    description?: StringWithAggregatesFilter<"Character"> | string
    notes?: StringWithAggregatesFilter<"Character"> | string
    level?: IntWithAggregatesFilter<"Character"> | number
    experience?: IntWithAggregatesFilter<"Character"> | number
    size?: StringWithAggregatesFilter<"Character"> | string
    movement?: IntWithAggregatesFilter<"Character"> | number
    defense?: IntWithAggregatesFilter<"Character"> | number
    magicResistence?: IntWithAggregatesFilter<"Character"> | number
    hp?: IntWithAggregatesFilter<"Character"> | number
    hpMax?: IntWithAggregatesFilter<"Character"> | number
    mp?: IntWithAggregatesFilter<"Character"> | number
    mpMax?: IntWithAggregatesFilter<"Character"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
  }

  export type AttributesWhereInput = {
    AND?: AttributesWhereInput | AttributesWhereInput[]
    OR?: AttributesWhereInput[]
    NOT?: AttributesWhereInput | AttributesWhereInput[]
    characterId?: IntFilter<"Attributes"> | number
    strength?: IntFilter<"Attributes"> | number
    dexterity?: IntFilter<"Attributes"> | number
    constitution?: IntFilter<"Attributes"> | number
    intelligence?: IntFilter<"Attributes"> | number
    wisdom?: IntFilter<"Attributes"> | number
    charisma?: IntFilter<"Attributes"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }

  export type AttributesOrderByWithRelationInput = {
    characterId?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    constitution?: SortOrder
    intelligence?: SortOrder
    wisdom?: SortOrder
    charisma?: SortOrder
    character?: CharacterOrderByWithRelationInput
  }

  export type AttributesWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    AND?: AttributesWhereInput | AttributesWhereInput[]
    OR?: AttributesWhereInput[]
    NOT?: AttributesWhereInput | AttributesWhereInput[]
    strength?: IntFilter<"Attributes"> | number
    dexterity?: IntFilter<"Attributes"> | number
    constitution?: IntFilter<"Attributes"> | number
    intelligence?: IntFilter<"Attributes"> | number
    wisdom?: IntFilter<"Attributes"> | number
    charisma?: IntFilter<"Attributes"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }, "characterId">

  export type AttributesOrderByWithAggregationInput = {
    characterId?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    constitution?: SortOrder
    intelligence?: SortOrder
    wisdom?: SortOrder
    charisma?: SortOrder
    _count?: AttributesCountOrderByAggregateInput
    _avg?: AttributesAvgOrderByAggregateInput
    _max?: AttributesMaxOrderByAggregateInput
    _min?: AttributesMinOrderByAggregateInput
    _sum?: AttributesSumOrderByAggregateInput
  }

  export type AttributesScalarWhereWithAggregatesInput = {
    AND?: AttributesScalarWhereWithAggregatesInput | AttributesScalarWhereWithAggregatesInput[]
    OR?: AttributesScalarWhereWithAggregatesInput[]
    NOT?: AttributesScalarWhereWithAggregatesInput | AttributesScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"Attributes"> | number
    strength?: IntWithAggregatesFilter<"Attributes"> | number
    dexterity?: IntWithAggregatesFilter<"Attributes"> | number
    constitution?: IntWithAggregatesFilter<"Attributes"> | number
    intelligence?: IntWithAggregatesFilter<"Attributes"> | number
    wisdom?: IntWithAggregatesFilter<"Attributes"> | number
    charisma?: IntWithAggregatesFilter<"Attributes"> | number
  }

  export type ExpertiseWhereInput = {
    AND?: ExpertiseWhereInput | ExpertiseWhereInput[]
    OR?: ExpertiseWhereInput[]
    NOT?: ExpertiseWhereInput | ExpertiseWhereInput[]
    id?: IntFilter<"Expertise"> | number
    name?: StringFilter<"Expertise"> | string
    attribute?: StringFilter<"Expertise"> | string
    characterLink?: ExpertiseCharacterListRelationFilter
  }

  export type ExpertiseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
    characterLink?: ExpertiseCharacterOrderByRelationAggregateInput
  }

  export type ExpertiseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpertiseWhereInput | ExpertiseWhereInput[]
    OR?: ExpertiseWhereInput[]
    NOT?: ExpertiseWhereInput | ExpertiseWhereInput[]
    name?: StringFilter<"Expertise"> | string
    attribute?: StringFilter<"Expertise"> | string
    characterLink?: ExpertiseCharacterListRelationFilter
  }, "id">

  export type ExpertiseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
    _count?: ExpertiseCountOrderByAggregateInput
    _avg?: ExpertiseAvgOrderByAggregateInput
    _max?: ExpertiseMaxOrderByAggregateInput
    _min?: ExpertiseMinOrderByAggregateInput
    _sum?: ExpertiseSumOrderByAggregateInput
  }

  export type ExpertiseScalarWhereWithAggregatesInput = {
    AND?: ExpertiseScalarWhereWithAggregatesInput | ExpertiseScalarWhereWithAggregatesInput[]
    OR?: ExpertiseScalarWhereWithAggregatesInput[]
    NOT?: ExpertiseScalarWhereWithAggregatesInput | ExpertiseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expertise"> | number
    name?: StringWithAggregatesFilter<"Expertise"> | string
    attribute?: StringWithAggregatesFilter<"Expertise"> | string
  }

  export type ExpertiseCharacterWhereInput = {
    AND?: ExpertiseCharacterWhereInput | ExpertiseCharacterWhereInput[]
    OR?: ExpertiseCharacterWhereInput[]
    NOT?: ExpertiseCharacterWhereInput | ExpertiseCharacterWhereInput[]
    id?: IntFilter<"ExpertiseCharacter"> | number
    characterId?: IntFilter<"ExpertiseCharacter"> | number
    expertiseId?: IntFilter<"ExpertiseCharacter"> | number
    trained?: BoolFilter<"ExpertiseCharacter"> | boolean
    trainBonus?: IntFilter<"ExpertiseCharacter"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    expertise?: XOR<ExpertiseScalarRelationFilter, ExpertiseWhereInput>
  }

  export type ExpertiseCharacterOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    expertiseId?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
    character?: CharacterOrderByWithRelationInput
    expertise?: ExpertiseOrderByWithRelationInput
  }

  export type ExpertiseCharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpertiseCharacterWhereInput | ExpertiseCharacterWhereInput[]
    OR?: ExpertiseCharacterWhereInput[]
    NOT?: ExpertiseCharacterWhereInput | ExpertiseCharacterWhereInput[]
    characterId?: IntFilter<"ExpertiseCharacter"> | number
    expertiseId?: IntFilter<"ExpertiseCharacter"> | number
    trained?: BoolFilter<"ExpertiseCharacter"> | boolean
    trainBonus?: IntFilter<"ExpertiseCharacter"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    expertise?: XOR<ExpertiseScalarRelationFilter, ExpertiseWhereInput>
  }, "id">

  export type ExpertiseCharacterOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    expertiseId?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
    _count?: ExpertiseCharacterCountOrderByAggregateInput
    _avg?: ExpertiseCharacterAvgOrderByAggregateInput
    _max?: ExpertiseCharacterMaxOrderByAggregateInput
    _min?: ExpertiseCharacterMinOrderByAggregateInput
    _sum?: ExpertiseCharacterSumOrderByAggregateInput
  }

  export type ExpertiseCharacterScalarWhereWithAggregatesInput = {
    AND?: ExpertiseCharacterScalarWhereWithAggregatesInput | ExpertiseCharacterScalarWhereWithAggregatesInput[]
    OR?: ExpertiseCharacterScalarWhereWithAggregatesInput[]
    NOT?: ExpertiseCharacterScalarWhereWithAggregatesInput | ExpertiseCharacterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExpertiseCharacter"> | number
    characterId?: IntWithAggregatesFilter<"ExpertiseCharacter"> | number
    expertiseId?: IntWithAggregatesFilter<"ExpertiseCharacter"> | number
    trained?: BoolWithAggregatesFilter<"ExpertiseCharacter"> | boolean
    trainBonus?: IntWithAggregatesFilter<"ExpertiseCharacter"> | number
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    characterId?: IntFilter<"Inventory"> | number
    load?: JsonFilter<"Inventory">
    tibares?: IntFilter<"Inventory"> | number
    items?: InventoryItemListRelationFilter
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    characterId?: SortOrder
    load?: SortOrder
    tibares?: SortOrder
    items?: InventoryItemOrderByRelationAggregateInput
    character?: CharacterOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    load?: JsonFilter<"Inventory">
    tibares?: IntFilter<"Inventory"> | number
    items?: InventoryItemListRelationFilter
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }, "characterId">

  export type InventoryOrderByWithAggregationInput = {
    characterId?: SortOrder
    load?: SortOrder
    tibares?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"Inventory"> | number
    load?: JsonWithAggregatesFilter<"Inventory">
    tibares?: IntWithAggregatesFilter<"Inventory"> | number
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    inventoryId?: IntFilter<"InventoryItem"> | number
    type?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    description?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    slot?: IntFilter<"InventoryItem"> | number
    isEquippable?: BoolFilter<"InventoryItem"> | boolean
    equipped?: BoolFilter<"InventoryItem"> | boolean
    passive?: BoolFilter<"InventoryItem"> | boolean
    attacks?: JsonFilter<"InventoryItem">
    modifiers?: JsonFilter<"InventoryItem">
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }

  export type InventoryItemOrderByWithRelationInput = {
    inventoryId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
    isEquippable?: SortOrder
    equipped?: SortOrder
    passive?: SortOrder
    attacks?: SortOrder
    modifiers?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    inventoryId?: number
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    type?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    description?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    slot?: IntFilter<"InventoryItem"> | number
    isEquippable?: BoolFilter<"InventoryItem"> | boolean
    equipped?: BoolFilter<"InventoryItem"> | boolean
    passive?: BoolFilter<"InventoryItem"> | boolean
    attacks?: JsonFilter<"InventoryItem">
    modifiers?: JsonFilter<"InventoryItem">
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }, "inventoryId">

  export type InventoryItemOrderByWithAggregationInput = {
    inventoryId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
    isEquippable?: SortOrder
    equipped?: SortOrder
    passive?: SortOrder
    attacks?: SortOrder
    modifiers?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    inventoryId?: IntWithAggregatesFilter<"InventoryItem"> | number
    type?: StringWithAggregatesFilter<"InventoryItem"> | string
    name?: StringWithAggregatesFilter<"InventoryItem"> | string
    description?: StringWithAggregatesFilter<"InventoryItem"> | string
    quantity?: IntWithAggregatesFilter<"InventoryItem"> | number
    slot?: IntWithAggregatesFilter<"InventoryItem"> | number
    isEquippable?: BoolWithAggregatesFilter<"InventoryItem"> | boolean
    equipped?: BoolWithAggregatesFilter<"InventoryItem"> | boolean
    passive?: BoolWithAggregatesFilter<"InventoryItem"> | boolean
    attacks?: JsonWithAggregatesFilter<"InventoryItem">
    modifiers?: JsonWithAggregatesFilter<"InventoryItem">
  }

  export type AbilityWhereInput = {
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    characterId?: IntFilter<"Ability"> | number
    type?: StringFilter<"Ability"> | string
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    passive?: BoolFilter<"Ability"> | boolean
    manaCost?: IntFilter<"Ability"> | number
    attacks?: JsonFilter<"Ability">
    modifiers?: JsonFilter<"Ability">
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }

  export type AbilityOrderByWithRelationInput = {
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
    attacks?: SortOrder
    modifiers?: SortOrder
    character?: CharacterOrderByWithRelationInput
  }

  export type AbilityWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    type?: StringFilter<"Ability"> | string
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    passive?: BoolFilter<"Ability"> | boolean
    manaCost?: IntFilter<"Ability"> | number
    attacks?: JsonFilter<"Ability">
    modifiers?: JsonFilter<"Ability">
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }, "characterId">

  export type AbilityOrderByWithAggregationInput = {
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
    attacks?: SortOrder
    modifiers?: SortOrder
    _count?: AbilityCountOrderByAggregateInput
    _avg?: AbilityAvgOrderByAggregateInput
    _max?: AbilityMaxOrderByAggregateInput
    _min?: AbilityMinOrderByAggregateInput
    _sum?: AbilitySumOrderByAggregateInput
  }

  export type AbilityScalarWhereWithAggregatesInput = {
    AND?: AbilityScalarWhereWithAggregatesInput | AbilityScalarWhereWithAggregatesInput[]
    OR?: AbilityScalarWhereWithAggregatesInput[]
    NOT?: AbilityScalarWhereWithAggregatesInput | AbilityScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"Ability"> | number
    type?: StringWithAggregatesFilter<"Ability"> | string
    name?: StringWithAggregatesFilter<"Ability"> | string
    description?: StringWithAggregatesFilter<"Ability"> | string
    passive?: BoolWithAggregatesFilter<"Ability"> | boolean
    manaCost?: IntWithAggregatesFilter<"Ability"> | number
    attacks?: JsonWithAggregatesFilter<"Ability">
    modifiers?: JsonWithAggregatesFilter<"Ability">
  }

  export type EffectWhereInput = {
    AND?: EffectWhereInput | EffectWhereInput[]
    OR?: EffectWhereInput[]
    NOT?: EffectWhereInput | EffectWhereInput[]
    characterId?: IntFilter<"Effect"> | number
    sourceType?: StringFilter<"Effect"> | string
    sourceId?: IntNullableFilter<"Effect"> | number | null
    sourceName?: StringFilter<"Effect"> | string
    active?: BoolFilter<"Effect"> | boolean
    duration?: JsonFilter<"Effect">
    stacks?: IntFilter<"Effect"> | number
    modifiers?: JsonFilter<"Effect">
    startedAt?: DateTimeFilter<"Effect"> | Date | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }

  export type EffectOrderByWithRelationInput = {
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    duration?: SortOrder
    stacks?: SortOrder
    modifiers?: SortOrder
    startedAt?: SortOrder
    character?: CharacterOrderByWithRelationInput
  }

  export type EffectWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    AND?: EffectWhereInput | EffectWhereInput[]
    OR?: EffectWhereInput[]
    NOT?: EffectWhereInput | EffectWhereInput[]
    sourceType?: StringFilter<"Effect"> | string
    sourceId?: IntNullableFilter<"Effect"> | number | null
    sourceName?: StringFilter<"Effect"> | string
    active?: BoolFilter<"Effect"> | boolean
    duration?: JsonFilter<"Effect">
    stacks?: IntFilter<"Effect"> | number
    modifiers?: JsonFilter<"Effect">
    startedAt?: DateTimeFilter<"Effect"> | Date | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }, "characterId">

  export type EffectOrderByWithAggregationInput = {
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    duration?: SortOrder
    stacks?: SortOrder
    modifiers?: SortOrder
    startedAt?: SortOrder
    _count?: EffectCountOrderByAggregateInput
    _avg?: EffectAvgOrderByAggregateInput
    _max?: EffectMaxOrderByAggregateInput
    _min?: EffectMinOrderByAggregateInput
    _sum?: EffectSumOrderByAggregateInput
  }

  export type EffectScalarWhereWithAggregatesInput = {
    AND?: EffectScalarWhereWithAggregatesInput | EffectScalarWhereWithAggregatesInput[]
    OR?: EffectScalarWhereWithAggregatesInput[]
    NOT?: EffectScalarWhereWithAggregatesInput | EffectScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"Effect"> | number
    sourceType?: StringWithAggregatesFilter<"Effect"> | string
    sourceId?: IntNullableWithAggregatesFilter<"Effect"> | number | null
    sourceName?: StringWithAggregatesFilter<"Effect"> | string
    active?: BoolWithAggregatesFilter<"Effect"> | boolean
    duration?: JsonWithAggregatesFilter<"Effect">
    stacks?: IntWithAggregatesFilter<"Effect"> | number
    modifiers?: JsonWithAggregatesFilter<"Effect">
    startedAt?: DateTimeWithAggregatesFilter<"Effect"> | Date | string
  }

  export type CharacterCreateInput = {
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesCreateNestedOneWithoutCharacterInput
    expertisies?: ExpertiseCharacterCreateNestedManyWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    abilities?: AbilityCreateNestedManyWithoutCharacterInput
    effects?: EffectCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: number
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesUncheckedCreateNestedOneWithoutCharacterInput
    expertisies?: ExpertiseCharacterUncheckedCreateNestedManyWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    abilities?: AbilityUncheckedCreateNestedManyWithoutCharacterInput
    effects?: EffectUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUpdateManyWithoutCharacterNestedInput
    effects?: EffectUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUncheckedUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUncheckedUpdateManyWithoutCharacterNestedInput
    effects?: EffectUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: number
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributesCreateInput = {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    character: CharacterCreateNestedOneWithoutAttributesInput
  }

  export type AttributesUncheckedCreateInput = {
    characterId: number
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
  }

  export type AttributesUpdateInput = {
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    constitution?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    wisdom?: IntFieldUpdateOperationsInput | number
    charisma?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutAttributesNestedInput
  }

  export type AttributesUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    constitution?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    wisdom?: IntFieldUpdateOperationsInput | number
    charisma?: IntFieldUpdateOperationsInput | number
  }

  export type AttributesCreateManyInput = {
    characterId: number
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
  }

  export type AttributesUpdateManyMutationInput = {
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    constitution?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    wisdom?: IntFieldUpdateOperationsInput | number
    charisma?: IntFieldUpdateOperationsInput | number
  }

  export type AttributesUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    constitution?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    wisdom?: IntFieldUpdateOperationsInput | number
    charisma?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCreateInput = {
    name: string
    attribute: string
    characterLink?: ExpertiseCharacterCreateNestedManyWithoutExpertiseInput
  }

  export type ExpertiseUncheckedCreateInput = {
    id?: number
    name: string
    attribute: string
    characterLink?: ExpertiseCharacterUncheckedCreateNestedManyWithoutExpertiseInput
  }

  export type ExpertiseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    characterLink?: ExpertiseCharacterUpdateManyWithoutExpertiseNestedInput
  }

  export type ExpertiseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    characterLink?: ExpertiseCharacterUncheckedUpdateManyWithoutExpertiseNestedInput
  }

  export type ExpertiseCreateManyInput = {
    id?: number
    name: string
    attribute: string
  }

  export type ExpertiseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertiseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertiseCharacterCreateInput = {
    trained?: boolean
    trainBonus?: number
    character: CharacterCreateNestedOneWithoutExpertisiesInput
    expertise: ExpertiseCreateNestedOneWithoutCharacterLinkInput
  }

  export type ExpertiseCharacterUncheckedCreateInput = {
    id?: number
    characterId: number
    expertiseId: number
    trained?: boolean
    trainBonus?: number
  }

  export type ExpertiseCharacterUpdateInput = {
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutExpertisiesNestedInput
    expertise?: ExpertiseUpdateOneRequiredWithoutCharacterLinkNestedInput
  }

  export type ExpertiseCharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    expertiseId?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterCreateManyInput = {
    id?: number
    characterId: number
    expertiseId: number
    trained?: boolean
    trainBonus?: number
  }

  export type ExpertiseCharacterUpdateManyMutationInput = {
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    expertiseId?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryCreateInput = {
    load: JsonNullValueInput | InputJsonValue
    tibares: number
    items?: InventoryItemCreateNestedManyWithoutInventoryInput
    character: CharacterCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    characterId: number
    load: JsonNullValueInput | InputJsonValue
    tibares: number
    items?: InventoryItemUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    load?: JsonNullValueInput | InputJsonValue
    tibares?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUpdateManyWithoutInventoryNestedInput
    character?: CharacterUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    load?: JsonNullValueInput | InputJsonValue
    tibares?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    characterId: number
    load: JsonNullValueInput | InputJsonValue
    tibares: number
  }

  export type InventoryUpdateManyMutationInput = {
    load?: JsonNullValueInput | InputJsonValue
    tibares?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    load?: JsonNullValueInput | InputJsonValue
    tibares?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateInput = {
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
    inventory: InventoryCreateNestedOneWithoutItemsInput
  }

  export type InventoryItemUncheckedCreateInput = {
    inventoryId: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
    inventory?: InventoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemCreateManyInput = {
    inventoryId: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type AbilityCreateInput = {
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
    character: CharacterCreateNestedOneWithoutAbilitiesInput
  }

  export type AbilityUncheckedCreateInput = {
    characterId: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type AbilityUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
    character?: CharacterUpdateOneRequiredWithoutAbilitiesNestedInput
  }

  export type AbilityUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type AbilityCreateManyInput = {
    characterId: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type AbilityUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type AbilityUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type EffectCreateInput = {
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    modifiers: JsonNullValueInput | InputJsonValue
    startedAt: Date | string
    character: CharacterCreateNestedOneWithoutEffectsInput
  }

  export type EffectUncheckedCreateInput = {
    characterId: number
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    modifiers: JsonNullValueInput | InputJsonValue
    startedAt: Date | string
  }

  export type EffectUpdateInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    modifiers?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharacterUpdateOneRequiredWithoutEffectsNestedInput
  }

  export type EffectUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    modifiers?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EffectCreateManyInput = {
    characterId: number
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    modifiers: JsonNullValueInput | InputJsonValue
    startedAt: Date | string
  }

  export type EffectUpdateManyMutationInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    modifiers?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EffectUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    modifiers?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AttributesNullableScalarRelationFilter = {
    is?: AttributesWhereInput | null
    isNot?: AttributesWhereInput | null
  }

  export type ExpertiseCharacterListRelationFilter = {
    every?: ExpertiseCharacterWhereInput
    some?: ExpertiseCharacterWhereInput
    none?: ExpertiseCharacterWhereInput
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: InventoryWhereInput | null
    isNot?: InventoryWhereInput | null
  }

  export type AbilityListRelationFilter = {
    every?: AbilityWhereInput
    some?: AbilityWhereInput
    none?: AbilityWhereInput
  }

  export type EffectListRelationFilter = {
    every?: EffectWhereInput
    some?: EffectWhereInput
    none?: EffectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExpertiseCharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EffectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    player?: SortOrder
    origin?: SortOrder
    races?: SortOrder
    classes?: SortOrder
    divinity?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    size?: SortOrder
    movement?: SortOrder
    defense?: SortOrder
    magicResistence?: SortOrder
    hp?: SortOrder
    hpMax?: SortOrder
    mp?: SortOrder
    mpMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    movement?: SortOrder
    defense?: SortOrder
    magicResistence?: SortOrder
    hp?: SortOrder
    hpMax?: SortOrder
    mp?: SortOrder
    mpMax?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    player?: SortOrder
    origin?: SortOrder
    divinity?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    size?: SortOrder
    movement?: SortOrder
    defense?: SortOrder
    magicResistence?: SortOrder
    hp?: SortOrder
    hpMax?: SortOrder
    mp?: SortOrder
    mpMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    player?: SortOrder
    origin?: SortOrder
    divinity?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    size?: SortOrder
    movement?: SortOrder
    defense?: SortOrder
    magicResistence?: SortOrder
    hp?: SortOrder
    hpMax?: SortOrder
    mp?: SortOrder
    mpMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    movement?: SortOrder
    defense?: SortOrder
    magicResistence?: SortOrder
    hp?: SortOrder
    hpMax?: SortOrder
    mp?: SortOrder
    mpMax?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type AttributesCountOrderByAggregateInput = {
    characterId?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    constitution?: SortOrder
    intelligence?: SortOrder
    wisdom?: SortOrder
    charisma?: SortOrder
  }

  export type AttributesAvgOrderByAggregateInput = {
    characterId?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    constitution?: SortOrder
    intelligence?: SortOrder
    wisdom?: SortOrder
    charisma?: SortOrder
  }

  export type AttributesMaxOrderByAggregateInput = {
    characterId?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    constitution?: SortOrder
    intelligence?: SortOrder
    wisdom?: SortOrder
    charisma?: SortOrder
  }

  export type AttributesMinOrderByAggregateInput = {
    characterId?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    constitution?: SortOrder
    intelligence?: SortOrder
    wisdom?: SortOrder
    charisma?: SortOrder
  }

  export type AttributesSumOrderByAggregateInput = {
    characterId?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    constitution?: SortOrder
    intelligence?: SortOrder
    wisdom?: SortOrder
    charisma?: SortOrder
  }

  export type ExpertiseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
  }

  export type ExpertiseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExpertiseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
  }

  export type ExpertiseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
  }

  export type ExpertiseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExpertiseScalarRelationFilter = {
    is?: ExpertiseWhereInput
    isNot?: ExpertiseWhereInput
  }

  export type ExpertiseCharacterCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    expertiseId?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
  }

  export type ExpertiseCharacterAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    expertiseId?: SortOrder
    trainBonus?: SortOrder
  }

  export type ExpertiseCharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    expertiseId?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
  }

  export type ExpertiseCharacterMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    expertiseId?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
  }

  export type ExpertiseCharacterSumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    expertiseId?: SortOrder
    trainBonus?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCountOrderByAggregateInput = {
    characterId?: SortOrder
    load?: SortOrder
    tibares?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    characterId?: SortOrder
    tibares?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    characterId?: SortOrder
    tibares?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    characterId?: SortOrder
    tibares?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    characterId?: SortOrder
    tibares?: SortOrder
  }

  export type InventoryScalarRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type InventoryItemCountOrderByAggregateInput = {
    inventoryId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
    isEquippable?: SortOrder
    equipped?: SortOrder
    passive?: SortOrder
    attacks?: SortOrder
    modifiers?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    inventoryId?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    inventoryId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
    isEquippable?: SortOrder
    equipped?: SortOrder
    passive?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    inventoryId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
    isEquippable?: SortOrder
    equipped?: SortOrder
    passive?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    inventoryId?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
  }

  export type AbilityCountOrderByAggregateInput = {
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
    attacks?: SortOrder
    modifiers?: SortOrder
  }

  export type AbilityAvgOrderByAggregateInput = {
    characterId?: SortOrder
    manaCost?: SortOrder
  }

  export type AbilityMaxOrderByAggregateInput = {
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
  }

  export type AbilityMinOrderByAggregateInput = {
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
  }

  export type AbilitySumOrderByAggregateInput = {
    characterId?: SortOrder
    manaCost?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EffectCountOrderByAggregateInput = {
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    duration?: SortOrder
    stacks?: SortOrder
    modifiers?: SortOrder
    startedAt?: SortOrder
  }

  export type EffectAvgOrderByAggregateInput = {
    characterId?: SortOrder
    sourceId?: SortOrder
    stacks?: SortOrder
  }

  export type EffectMaxOrderByAggregateInput = {
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    stacks?: SortOrder
    startedAt?: SortOrder
  }

  export type EffectMinOrderByAggregateInput = {
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    stacks?: SortOrder
    startedAt?: SortOrder
  }

  export type EffectSumOrderByAggregateInput = {
    characterId?: SortOrder
    sourceId?: SortOrder
    stacks?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AttributesCreateNestedOneWithoutCharacterInput = {
    create?: XOR<AttributesCreateWithoutCharacterInput, AttributesUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: AttributesCreateOrConnectWithoutCharacterInput
    connect?: AttributesWhereUniqueInput
  }

  export type ExpertiseCharacterCreateNestedManyWithoutCharacterInput = {
    create?: XOR<ExpertiseCharacterCreateWithoutCharacterInput, ExpertiseCharacterUncheckedCreateWithoutCharacterInput> | ExpertiseCharacterCreateWithoutCharacterInput[] | ExpertiseCharacterUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: ExpertiseCharacterCreateOrConnectWithoutCharacterInput | ExpertiseCharacterCreateOrConnectWithoutCharacterInput[]
    createMany?: ExpertiseCharacterCreateManyCharacterInputEnvelope
    connect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
  }

  export type InventoryCreateNestedOneWithoutCharacterInput = {
    create?: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutCharacterInput
    connect?: InventoryWhereUniqueInput
  }

  export type AbilityCreateNestedManyWithoutCharacterInput = {
    create?: XOR<AbilityCreateWithoutCharacterInput, AbilityUncheckedCreateWithoutCharacterInput> | AbilityCreateWithoutCharacterInput[] | AbilityUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutCharacterInput | AbilityCreateOrConnectWithoutCharacterInput[]
    createMany?: AbilityCreateManyCharacterInputEnvelope
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
  }

  export type EffectCreateNestedManyWithoutCharacterInput = {
    create?: XOR<EffectCreateWithoutCharacterInput, EffectUncheckedCreateWithoutCharacterInput> | EffectCreateWithoutCharacterInput[] | EffectUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EffectCreateOrConnectWithoutCharacterInput | EffectCreateOrConnectWithoutCharacterInput[]
    createMany?: EffectCreateManyCharacterInputEnvelope
    connect?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
  }

  export type AttributesUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<AttributesCreateWithoutCharacterInput, AttributesUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: AttributesCreateOrConnectWithoutCharacterInput
    connect?: AttributesWhereUniqueInput
  }

  export type ExpertiseCharacterUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<ExpertiseCharacterCreateWithoutCharacterInput, ExpertiseCharacterUncheckedCreateWithoutCharacterInput> | ExpertiseCharacterCreateWithoutCharacterInput[] | ExpertiseCharacterUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: ExpertiseCharacterCreateOrConnectWithoutCharacterInput | ExpertiseCharacterCreateOrConnectWithoutCharacterInput[]
    createMany?: ExpertiseCharacterCreateManyCharacterInputEnvelope
    connect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutCharacterInput
    connect?: InventoryWhereUniqueInput
  }

  export type AbilityUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<AbilityCreateWithoutCharacterInput, AbilityUncheckedCreateWithoutCharacterInput> | AbilityCreateWithoutCharacterInput[] | AbilityUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutCharacterInput | AbilityCreateOrConnectWithoutCharacterInput[]
    createMany?: AbilityCreateManyCharacterInputEnvelope
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
  }

  export type EffectUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<EffectCreateWithoutCharacterInput, EffectUncheckedCreateWithoutCharacterInput> | EffectCreateWithoutCharacterInput[] | EffectUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EffectCreateOrConnectWithoutCharacterInput | EffectCreateOrConnectWithoutCharacterInput[]
    createMany?: EffectCreateManyCharacterInputEnvelope
    connect?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AttributesUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<AttributesCreateWithoutCharacterInput, AttributesUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: AttributesCreateOrConnectWithoutCharacterInput
    upsert?: AttributesUpsertWithoutCharacterInput
    disconnect?: AttributesWhereInput | boolean
    delete?: AttributesWhereInput | boolean
    connect?: AttributesWhereUniqueInput
    update?: XOR<XOR<AttributesUpdateToOneWithWhereWithoutCharacterInput, AttributesUpdateWithoutCharacterInput>, AttributesUncheckedUpdateWithoutCharacterInput>
  }

  export type ExpertiseCharacterUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<ExpertiseCharacterCreateWithoutCharacterInput, ExpertiseCharacterUncheckedCreateWithoutCharacterInput> | ExpertiseCharacterCreateWithoutCharacterInput[] | ExpertiseCharacterUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: ExpertiseCharacterCreateOrConnectWithoutCharacterInput | ExpertiseCharacterCreateOrConnectWithoutCharacterInput[]
    upsert?: ExpertiseCharacterUpsertWithWhereUniqueWithoutCharacterInput | ExpertiseCharacterUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: ExpertiseCharacterCreateManyCharacterInputEnvelope
    set?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    disconnect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    delete?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    connect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    update?: ExpertiseCharacterUpdateWithWhereUniqueWithoutCharacterInput | ExpertiseCharacterUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: ExpertiseCharacterUpdateManyWithWhereWithoutCharacterInput | ExpertiseCharacterUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: ExpertiseCharacterScalarWhereInput | ExpertiseCharacterScalarWhereInput[]
  }

  export type InventoryUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutCharacterInput
    upsert?: InventoryUpsertWithoutCharacterInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutCharacterInput, InventoryUpdateWithoutCharacterInput>, InventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type AbilityUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<AbilityCreateWithoutCharacterInput, AbilityUncheckedCreateWithoutCharacterInput> | AbilityCreateWithoutCharacterInput[] | AbilityUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutCharacterInput | AbilityCreateOrConnectWithoutCharacterInput[]
    upsert?: AbilityUpsertWithWhereUniqueWithoutCharacterInput | AbilityUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: AbilityCreateManyCharacterInputEnvelope
    set?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    disconnect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    delete?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    update?: AbilityUpdateWithWhereUniqueWithoutCharacterInput | AbilityUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: AbilityUpdateManyWithWhereWithoutCharacterInput | AbilityUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
  }

  export type EffectUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<EffectCreateWithoutCharacterInput, EffectUncheckedCreateWithoutCharacterInput> | EffectCreateWithoutCharacterInput[] | EffectUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EffectCreateOrConnectWithoutCharacterInput | EffectCreateOrConnectWithoutCharacterInput[]
    upsert?: EffectUpsertWithWhereUniqueWithoutCharacterInput | EffectUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: EffectCreateManyCharacterInputEnvelope
    set?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
    disconnect?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
    delete?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
    connect?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
    update?: EffectUpdateWithWhereUniqueWithoutCharacterInput | EffectUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: EffectUpdateManyWithWhereWithoutCharacterInput | EffectUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: EffectScalarWhereInput | EffectScalarWhereInput[]
  }

  export type AttributesUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<AttributesCreateWithoutCharacterInput, AttributesUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: AttributesCreateOrConnectWithoutCharacterInput
    upsert?: AttributesUpsertWithoutCharacterInput
    disconnect?: AttributesWhereInput | boolean
    delete?: AttributesWhereInput | boolean
    connect?: AttributesWhereUniqueInput
    update?: XOR<XOR<AttributesUpdateToOneWithWhereWithoutCharacterInput, AttributesUpdateWithoutCharacterInput>, AttributesUncheckedUpdateWithoutCharacterInput>
  }

  export type ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<ExpertiseCharacterCreateWithoutCharacterInput, ExpertiseCharacterUncheckedCreateWithoutCharacterInput> | ExpertiseCharacterCreateWithoutCharacterInput[] | ExpertiseCharacterUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: ExpertiseCharacterCreateOrConnectWithoutCharacterInput | ExpertiseCharacterCreateOrConnectWithoutCharacterInput[]
    upsert?: ExpertiseCharacterUpsertWithWhereUniqueWithoutCharacterInput | ExpertiseCharacterUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: ExpertiseCharacterCreateManyCharacterInputEnvelope
    set?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    disconnect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    delete?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    connect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    update?: ExpertiseCharacterUpdateWithWhereUniqueWithoutCharacterInput | ExpertiseCharacterUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: ExpertiseCharacterUpdateManyWithWhereWithoutCharacterInput | ExpertiseCharacterUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: ExpertiseCharacterScalarWhereInput | ExpertiseCharacterScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutCharacterInput
    upsert?: InventoryUpsertWithoutCharacterInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutCharacterInput, InventoryUpdateWithoutCharacterInput>, InventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type AbilityUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<AbilityCreateWithoutCharacterInput, AbilityUncheckedCreateWithoutCharacterInput> | AbilityCreateWithoutCharacterInput[] | AbilityUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutCharacterInput | AbilityCreateOrConnectWithoutCharacterInput[]
    upsert?: AbilityUpsertWithWhereUniqueWithoutCharacterInput | AbilityUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: AbilityCreateManyCharacterInputEnvelope
    set?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    disconnect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    delete?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    update?: AbilityUpdateWithWhereUniqueWithoutCharacterInput | AbilityUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: AbilityUpdateManyWithWhereWithoutCharacterInput | AbilityUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
  }

  export type EffectUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<EffectCreateWithoutCharacterInput, EffectUncheckedCreateWithoutCharacterInput> | EffectCreateWithoutCharacterInput[] | EffectUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EffectCreateOrConnectWithoutCharacterInput | EffectCreateOrConnectWithoutCharacterInput[]
    upsert?: EffectUpsertWithWhereUniqueWithoutCharacterInput | EffectUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: EffectCreateManyCharacterInputEnvelope
    set?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
    disconnect?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
    delete?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
    connect?: EffectWhereUniqueInput | EffectWhereUniqueInput[]
    update?: EffectUpdateWithWhereUniqueWithoutCharacterInput | EffectUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: EffectUpdateManyWithWhereWithoutCharacterInput | EffectUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: EffectScalarWhereInput | EffectScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutAttributesInput = {
    create?: XOR<CharacterCreateWithoutAttributesInput, CharacterUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutAttributesInput
    connect?: CharacterWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<CharacterCreateWithoutAttributesInput, CharacterUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutAttributesInput
    upsert?: CharacterUpsertWithoutAttributesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutAttributesInput, CharacterUpdateWithoutAttributesInput>, CharacterUncheckedUpdateWithoutAttributesInput>
  }

  export type ExpertiseCharacterCreateNestedManyWithoutExpertiseInput = {
    create?: XOR<ExpertiseCharacterCreateWithoutExpertiseInput, ExpertiseCharacterUncheckedCreateWithoutExpertiseInput> | ExpertiseCharacterCreateWithoutExpertiseInput[] | ExpertiseCharacterUncheckedCreateWithoutExpertiseInput[]
    connectOrCreate?: ExpertiseCharacterCreateOrConnectWithoutExpertiseInput | ExpertiseCharacterCreateOrConnectWithoutExpertiseInput[]
    createMany?: ExpertiseCharacterCreateManyExpertiseInputEnvelope
    connect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
  }

  export type ExpertiseCharacterUncheckedCreateNestedManyWithoutExpertiseInput = {
    create?: XOR<ExpertiseCharacterCreateWithoutExpertiseInput, ExpertiseCharacterUncheckedCreateWithoutExpertiseInput> | ExpertiseCharacterCreateWithoutExpertiseInput[] | ExpertiseCharacterUncheckedCreateWithoutExpertiseInput[]
    connectOrCreate?: ExpertiseCharacterCreateOrConnectWithoutExpertiseInput | ExpertiseCharacterCreateOrConnectWithoutExpertiseInput[]
    createMany?: ExpertiseCharacterCreateManyExpertiseInputEnvelope
    connect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
  }

  export type ExpertiseCharacterUpdateManyWithoutExpertiseNestedInput = {
    create?: XOR<ExpertiseCharacterCreateWithoutExpertiseInput, ExpertiseCharacterUncheckedCreateWithoutExpertiseInput> | ExpertiseCharacterCreateWithoutExpertiseInput[] | ExpertiseCharacterUncheckedCreateWithoutExpertiseInput[]
    connectOrCreate?: ExpertiseCharacterCreateOrConnectWithoutExpertiseInput | ExpertiseCharacterCreateOrConnectWithoutExpertiseInput[]
    upsert?: ExpertiseCharacterUpsertWithWhereUniqueWithoutExpertiseInput | ExpertiseCharacterUpsertWithWhereUniqueWithoutExpertiseInput[]
    createMany?: ExpertiseCharacterCreateManyExpertiseInputEnvelope
    set?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    disconnect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    delete?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    connect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    update?: ExpertiseCharacterUpdateWithWhereUniqueWithoutExpertiseInput | ExpertiseCharacterUpdateWithWhereUniqueWithoutExpertiseInput[]
    updateMany?: ExpertiseCharacterUpdateManyWithWhereWithoutExpertiseInput | ExpertiseCharacterUpdateManyWithWhereWithoutExpertiseInput[]
    deleteMany?: ExpertiseCharacterScalarWhereInput | ExpertiseCharacterScalarWhereInput[]
  }

  export type ExpertiseCharacterUncheckedUpdateManyWithoutExpertiseNestedInput = {
    create?: XOR<ExpertiseCharacterCreateWithoutExpertiseInput, ExpertiseCharacterUncheckedCreateWithoutExpertiseInput> | ExpertiseCharacterCreateWithoutExpertiseInput[] | ExpertiseCharacterUncheckedCreateWithoutExpertiseInput[]
    connectOrCreate?: ExpertiseCharacterCreateOrConnectWithoutExpertiseInput | ExpertiseCharacterCreateOrConnectWithoutExpertiseInput[]
    upsert?: ExpertiseCharacterUpsertWithWhereUniqueWithoutExpertiseInput | ExpertiseCharacterUpsertWithWhereUniqueWithoutExpertiseInput[]
    createMany?: ExpertiseCharacterCreateManyExpertiseInputEnvelope
    set?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    disconnect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    delete?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    connect?: ExpertiseCharacterWhereUniqueInput | ExpertiseCharacterWhereUniqueInput[]
    update?: ExpertiseCharacterUpdateWithWhereUniqueWithoutExpertiseInput | ExpertiseCharacterUpdateWithWhereUniqueWithoutExpertiseInput[]
    updateMany?: ExpertiseCharacterUpdateManyWithWhereWithoutExpertiseInput | ExpertiseCharacterUpdateManyWithWhereWithoutExpertiseInput[]
    deleteMany?: ExpertiseCharacterScalarWhereInput | ExpertiseCharacterScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutExpertisiesInput = {
    create?: XOR<CharacterCreateWithoutExpertisiesInput, CharacterUncheckedCreateWithoutExpertisiesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutExpertisiesInput
    connect?: CharacterWhereUniqueInput
  }

  export type ExpertiseCreateNestedOneWithoutCharacterLinkInput = {
    create?: XOR<ExpertiseCreateWithoutCharacterLinkInput, ExpertiseUncheckedCreateWithoutCharacterLinkInput>
    connectOrCreate?: ExpertiseCreateOrConnectWithoutCharacterLinkInput
    connect?: ExpertiseWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CharacterUpdateOneRequiredWithoutExpertisiesNestedInput = {
    create?: XOR<CharacterCreateWithoutExpertisiesInput, CharacterUncheckedCreateWithoutExpertisiesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutExpertisiesInput
    upsert?: CharacterUpsertWithoutExpertisiesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutExpertisiesInput, CharacterUpdateWithoutExpertisiesInput>, CharacterUncheckedUpdateWithoutExpertisiesInput>
  }

  export type ExpertiseUpdateOneRequiredWithoutCharacterLinkNestedInput = {
    create?: XOR<ExpertiseCreateWithoutCharacterLinkInput, ExpertiseUncheckedCreateWithoutCharacterLinkInput>
    connectOrCreate?: ExpertiseCreateOrConnectWithoutCharacterLinkInput
    upsert?: ExpertiseUpsertWithoutCharacterLinkInput
    connect?: ExpertiseWhereUniqueInput
    update?: XOR<XOR<ExpertiseUpdateToOneWithWhereWithoutCharacterLinkInput, ExpertiseUpdateWithoutCharacterLinkInput>, ExpertiseUncheckedUpdateWithoutCharacterLinkInput>
  }

  export type InventoryItemCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type CharacterCreateNestedOneWithoutInventoryInput = {
    create?: XOR<CharacterCreateWithoutInventoryInput, CharacterUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutInventoryInput
    connect?: CharacterWhereUniqueInput
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type InventoryItemUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutInventoryInput | InventoryItemUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutInventoryInput | InventoryItemUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutInventoryInput | InventoryItemUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type CharacterUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<CharacterCreateWithoutInventoryInput, CharacterUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutInventoryInput
    upsert?: CharacterUpsertWithoutInventoryInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutInventoryInput, CharacterUpdateWithoutInventoryInput>, CharacterUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutInventoryInput | InventoryItemUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutInventoryInput | InventoryItemUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutInventoryInput | InventoryItemUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemsInput
    connect?: InventoryWhereUniqueInput
  }

  export type InventoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemsInput
    upsert?: InventoryUpsertWithoutItemsInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutItemsInput, InventoryUpdateWithoutItemsInput>, InventoryUncheckedUpdateWithoutItemsInput>
  }

  export type CharacterCreateNestedOneWithoutAbilitiesInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput
    connect?: CharacterWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutAbilitiesNestedInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput
    upsert?: CharacterUpsertWithoutAbilitiesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutAbilitiesInput, CharacterUpdateWithoutAbilitiesInput>, CharacterUncheckedUpdateWithoutAbilitiesInput>
  }

  export type CharacterCreateNestedOneWithoutEffectsInput = {
    create?: XOR<CharacterCreateWithoutEffectsInput, CharacterUncheckedCreateWithoutEffectsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutEffectsInput
    connect?: CharacterWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharacterUpdateOneRequiredWithoutEffectsNestedInput = {
    create?: XOR<CharacterCreateWithoutEffectsInput, CharacterUncheckedCreateWithoutEffectsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutEffectsInput
    upsert?: CharacterUpsertWithoutEffectsInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutEffectsInput, CharacterUpdateWithoutEffectsInput>, CharacterUncheckedUpdateWithoutEffectsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AttributesCreateWithoutCharacterInput = {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
  }

  export type AttributesUncheckedCreateWithoutCharacterInput = {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
  }

  export type AttributesCreateOrConnectWithoutCharacterInput = {
    where: AttributesWhereUniqueInput
    create: XOR<AttributesCreateWithoutCharacterInput, AttributesUncheckedCreateWithoutCharacterInput>
  }

  export type ExpertiseCharacterCreateWithoutCharacterInput = {
    trained?: boolean
    trainBonus?: number
    expertise: ExpertiseCreateNestedOneWithoutCharacterLinkInput
  }

  export type ExpertiseCharacterUncheckedCreateWithoutCharacterInput = {
    id?: number
    expertiseId: number
    trained?: boolean
    trainBonus?: number
  }

  export type ExpertiseCharacterCreateOrConnectWithoutCharacterInput = {
    where: ExpertiseCharacterWhereUniqueInput
    create: XOR<ExpertiseCharacterCreateWithoutCharacterInput, ExpertiseCharacterUncheckedCreateWithoutCharacterInput>
  }

  export type ExpertiseCharacterCreateManyCharacterInputEnvelope = {
    data: ExpertiseCharacterCreateManyCharacterInput | ExpertiseCharacterCreateManyCharacterInput[]
  }

  export type InventoryCreateWithoutCharacterInput = {
    load: JsonNullValueInput | InputJsonValue
    tibares: number
    items?: InventoryItemCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutCharacterInput = {
    load: JsonNullValueInput | InputJsonValue
    tibares: number
    items?: InventoryItemUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutCharacterInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
  }

  export type AbilityCreateWithoutCharacterInput = {
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type AbilityUncheckedCreateWithoutCharacterInput = {
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type AbilityCreateOrConnectWithoutCharacterInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutCharacterInput, AbilityUncheckedCreateWithoutCharacterInput>
  }

  export type AbilityCreateManyCharacterInputEnvelope = {
    data: AbilityCreateManyCharacterInput | AbilityCreateManyCharacterInput[]
  }

  export type EffectCreateWithoutCharacterInput = {
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    modifiers: JsonNullValueInput | InputJsonValue
    startedAt: Date | string
  }

  export type EffectUncheckedCreateWithoutCharacterInput = {
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    modifiers: JsonNullValueInput | InputJsonValue
    startedAt: Date | string
  }

  export type EffectCreateOrConnectWithoutCharacterInput = {
    where: EffectWhereUniqueInput
    create: XOR<EffectCreateWithoutCharacterInput, EffectUncheckedCreateWithoutCharacterInput>
  }

  export type EffectCreateManyCharacterInputEnvelope = {
    data: EffectCreateManyCharacterInput | EffectCreateManyCharacterInput[]
  }

  export type AttributesUpsertWithoutCharacterInput = {
    update: XOR<AttributesUpdateWithoutCharacterInput, AttributesUncheckedUpdateWithoutCharacterInput>
    create: XOR<AttributesCreateWithoutCharacterInput, AttributesUncheckedCreateWithoutCharacterInput>
    where?: AttributesWhereInput
  }

  export type AttributesUpdateToOneWithWhereWithoutCharacterInput = {
    where?: AttributesWhereInput
    data: XOR<AttributesUpdateWithoutCharacterInput, AttributesUncheckedUpdateWithoutCharacterInput>
  }

  export type AttributesUpdateWithoutCharacterInput = {
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    constitution?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    wisdom?: IntFieldUpdateOperationsInput | number
    charisma?: IntFieldUpdateOperationsInput | number
  }

  export type AttributesUncheckedUpdateWithoutCharacterInput = {
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    constitution?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    wisdom?: IntFieldUpdateOperationsInput | number
    charisma?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterUpsertWithWhereUniqueWithoutCharacterInput = {
    where: ExpertiseCharacterWhereUniqueInput
    update: XOR<ExpertiseCharacterUpdateWithoutCharacterInput, ExpertiseCharacterUncheckedUpdateWithoutCharacterInput>
    create: XOR<ExpertiseCharacterCreateWithoutCharacterInput, ExpertiseCharacterUncheckedCreateWithoutCharacterInput>
  }

  export type ExpertiseCharacterUpdateWithWhereUniqueWithoutCharacterInput = {
    where: ExpertiseCharacterWhereUniqueInput
    data: XOR<ExpertiseCharacterUpdateWithoutCharacterInput, ExpertiseCharacterUncheckedUpdateWithoutCharacterInput>
  }

  export type ExpertiseCharacterUpdateManyWithWhereWithoutCharacterInput = {
    where: ExpertiseCharacterScalarWhereInput
    data: XOR<ExpertiseCharacterUpdateManyMutationInput, ExpertiseCharacterUncheckedUpdateManyWithoutCharacterInput>
  }

  export type ExpertiseCharacterScalarWhereInput = {
    AND?: ExpertiseCharacterScalarWhereInput | ExpertiseCharacterScalarWhereInput[]
    OR?: ExpertiseCharacterScalarWhereInput[]
    NOT?: ExpertiseCharacterScalarWhereInput | ExpertiseCharacterScalarWhereInput[]
    id?: IntFilter<"ExpertiseCharacter"> | number
    characterId?: IntFilter<"ExpertiseCharacter"> | number
    expertiseId?: IntFilter<"ExpertiseCharacter"> | number
    trained?: BoolFilter<"ExpertiseCharacter"> | boolean
    trainBonus?: IntFilter<"ExpertiseCharacter"> | number
  }

  export type InventoryUpsertWithoutCharacterInput = {
    update: XOR<InventoryUpdateWithoutCharacterInput, InventoryUncheckedUpdateWithoutCharacterInput>
    create: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutCharacterInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutCharacterInput, InventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type InventoryUpdateWithoutCharacterInput = {
    load?: JsonNullValueInput | InputJsonValue
    tibares?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutCharacterInput = {
    load?: JsonNullValueInput | InputJsonValue
    tibares?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type AbilityUpsertWithWhereUniqueWithoutCharacterInput = {
    where: AbilityWhereUniqueInput
    update: XOR<AbilityUpdateWithoutCharacterInput, AbilityUncheckedUpdateWithoutCharacterInput>
    create: XOR<AbilityCreateWithoutCharacterInput, AbilityUncheckedCreateWithoutCharacterInput>
  }

  export type AbilityUpdateWithWhereUniqueWithoutCharacterInput = {
    where: AbilityWhereUniqueInput
    data: XOR<AbilityUpdateWithoutCharacterInput, AbilityUncheckedUpdateWithoutCharacterInput>
  }

  export type AbilityUpdateManyWithWhereWithoutCharacterInput = {
    where: AbilityScalarWhereInput
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyWithoutCharacterInput>
  }

  export type AbilityScalarWhereInput = {
    AND?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
    OR?: AbilityScalarWhereInput[]
    NOT?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
    characterId?: IntFilter<"Ability"> | number
    type?: StringFilter<"Ability"> | string
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    passive?: BoolFilter<"Ability"> | boolean
    manaCost?: IntFilter<"Ability"> | number
    attacks?: JsonFilter<"Ability">
    modifiers?: JsonFilter<"Ability">
  }

  export type EffectUpsertWithWhereUniqueWithoutCharacterInput = {
    where: EffectWhereUniqueInput
    update: XOR<EffectUpdateWithoutCharacterInput, EffectUncheckedUpdateWithoutCharacterInput>
    create: XOR<EffectCreateWithoutCharacterInput, EffectUncheckedCreateWithoutCharacterInput>
  }

  export type EffectUpdateWithWhereUniqueWithoutCharacterInput = {
    where: EffectWhereUniqueInput
    data: XOR<EffectUpdateWithoutCharacterInput, EffectUncheckedUpdateWithoutCharacterInput>
  }

  export type EffectUpdateManyWithWhereWithoutCharacterInput = {
    where: EffectScalarWhereInput
    data: XOR<EffectUpdateManyMutationInput, EffectUncheckedUpdateManyWithoutCharacterInput>
  }

  export type EffectScalarWhereInput = {
    AND?: EffectScalarWhereInput | EffectScalarWhereInput[]
    OR?: EffectScalarWhereInput[]
    NOT?: EffectScalarWhereInput | EffectScalarWhereInput[]
    characterId?: IntFilter<"Effect"> | number
    sourceType?: StringFilter<"Effect"> | string
    sourceId?: IntNullableFilter<"Effect"> | number | null
    sourceName?: StringFilter<"Effect"> | string
    active?: BoolFilter<"Effect"> | boolean
    duration?: JsonFilter<"Effect">
    stacks?: IntFilter<"Effect"> | number
    modifiers?: JsonFilter<"Effect">
    startedAt?: DateTimeFilter<"Effect"> | Date | string
  }

  export type CharacterCreateWithoutAttributesInput = {
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expertisies?: ExpertiseCharacterCreateNestedManyWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    abilities?: AbilityCreateNestedManyWithoutCharacterInput
    effects?: EffectCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutAttributesInput = {
    id?: number
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expertisies?: ExpertiseCharacterUncheckedCreateNestedManyWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    abilities?: AbilityUncheckedCreateNestedManyWithoutCharacterInput
    effects?: EffectUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutAttributesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutAttributesInput, CharacterUncheckedCreateWithoutAttributesInput>
  }

  export type CharacterUpsertWithoutAttributesInput = {
    update: XOR<CharacterUpdateWithoutAttributesInput, CharacterUncheckedUpdateWithoutAttributesInput>
    create: XOR<CharacterCreateWithoutAttributesInput, CharacterUncheckedCreateWithoutAttributesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutAttributesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutAttributesInput, CharacterUncheckedUpdateWithoutAttributesInput>
  }

  export type CharacterUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expertisies?: ExpertiseCharacterUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUpdateManyWithoutCharacterNestedInput
    effects?: EffectUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUncheckedUpdateManyWithoutCharacterNestedInput
    effects?: EffectUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type ExpertiseCharacterCreateWithoutExpertiseInput = {
    trained?: boolean
    trainBonus?: number
    character: CharacterCreateNestedOneWithoutExpertisiesInput
  }

  export type ExpertiseCharacterUncheckedCreateWithoutExpertiseInput = {
    id?: number
    characterId: number
    trained?: boolean
    trainBonus?: number
  }

  export type ExpertiseCharacterCreateOrConnectWithoutExpertiseInput = {
    where: ExpertiseCharacterWhereUniqueInput
    create: XOR<ExpertiseCharacterCreateWithoutExpertiseInput, ExpertiseCharacterUncheckedCreateWithoutExpertiseInput>
  }

  export type ExpertiseCharacterCreateManyExpertiseInputEnvelope = {
    data: ExpertiseCharacterCreateManyExpertiseInput | ExpertiseCharacterCreateManyExpertiseInput[]
  }

  export type ExpertiseCharacterUpsertWithWhereUniqueWithoutExpertiseInput = {
    where: ExpertiseCharacterWhereUniqueInput
    update: XOR<ExpertiseCharacterUpdateWithoutExpertiseInput, ExpertiseCharacterUncheckedUpdateWithoutExpertiseInput>
    create: XOR<ExpertiseCharacterCreateWithoutExpertiseInput, ExpertiseCharacterUncheckedCreateWithoutExpertiseInput>
  }

  export type ExpertiseCharacterUpdateWithWhereUniqueWithoutExpertiseInput = {
    where: ExpertiseCharacterWhereUniqueInput
    data: XOR<ExpertiseCharacterUpdateWithoutExpertiseInput, ExpertiseCharacterUncheckedUpdateWithoutExpertiseInput>
  }

  export type ExpertiseCharacterUpdateManyWithWhereWithoutExpertiseInput = {
    where: ExpertiseCharacterScalarWhereInput
    data: XOR<ExpertiseCharacterUpdateManyMutationInput, ExpertiseCharacterUncheckedUpdateManyWithoutExpertiseInput>
  }

  export type CharacterCreateWithoutExpertisiesInput = {
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesCreateNestedOneWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    abilities?: AbilityCreateNestedManyWithoutCharacterInput
    effects?: EffectCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutExpertisiesInput = {
    id?: number
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesUncheckedCreateNestedOneWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    abilities?: AbilityUncheckedCreateNestedManyWithoutCharacterInput
    effects?: EffectUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutExpertisiesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutExpertisiesInput, CharacterUncheckedCreateWithoutExpertisiesInput>
  }

  export type ExpertiseCreateWithoutCharacterLinkInput = {
    name: string
    attribute: string
  }

  export type ExpertiseUncheckedCreateWithoutCharacterLinkInput = {
    id?: number
    name: string
    attribute: string
  }

  export type ExpertiseCreateOrConnectWithoutCharacterLinkInput = {
    where: ExpertiseWhereUniqueInput
    create: XOR<ExpertiseCreateWithoutCharacterLinkInput, ExpertiseUncheckedCreateWithoutCharacterLinkInput>
  }

  export type CharacterUpsertWithoutExpertisiesInput = {
    update: XOR<CharacterUpdateWithoutExpertisiesInput, CharacterUncheckedUpdateWithoutExpertisiesInput>
    create: XOR<CharacterCreateWithoutExpertisiesInput, CharacterUncheckedCreateWithoutExpertisiesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutExpertisiesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutExpertisiesInput, CharacterUncheckedUpdateWithoutExpertisiesInput>
  }

  export type CharacterUpdateWithoutExpertisiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUpdateManyWithoutCharacterNestedInput
    effects?: EffectUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutExpertisiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUncheckedUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUncheckedUpdateManyWithoutCharacterNestedInput
    effects?: EffectUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type ExpertiseUpsertWithoutCharacterLinkInput = {
    update: XOR<ExpertiseUpdateWithoutCharacterLinkInput, ExpertiseUncheckedUpdateWithoutCharacterLinkInput>
    create: XOR<ExpertiseCreateWithoutCharacterLinkInput, ExpertiseUncheckedCreateWithoutCharacterLinkInput>
    where?: ExpertiseWhereInput
  }

  export type ExpertiseUpdateToOneWithWhereWithoutCharacterLinkInput = {
    where?: ExpertiseWhereInput
    data: XOR<ExpertiseUpdateWithoutCharacterLinkInput, ExpertiseUncheckedUpdateWithoutCharacterLinkInput>
  }

  export type ExpertiseUpdateWithoutCharacterLinkInput = {
    name?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertiseUncheckedUpdateWithoutCharacterLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryItemCreateWithoutInventoryInput = {
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUncheckedCreateWithoutInventoryInput = {
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemCreateOrConnectWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemCreateManyInventoryInputEnvelope = {
    data: InventoryItemCreateManyInventoryInput | InventoryItemCreateManyInventoryInput[]
  }

  export type CharacterCreateWithoutInventoryInput = {
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesCreateNestedOneWithoutCharacterInput
    expertisies?: ExpertiseCharacterCreateNestedManyWithoutCharacterInput
    abilities?: AbilityCreateNestedManyWithoutCharacterInput
    effects?: EffectCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutInventoryInput = {
    id?: number
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesUncheckedCreateNestedOneWithoutCharacterInput
    expertisies?: ExpertiseCharacterUncheckedCreateNestedManyWithoutCharacterInput
    abilities?: AbilityUncheckedCreateNestedManyWithoutCharacterInput
    effects?: EffectUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutInventoryInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutInventoryInput, CharacterUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutInventoryInput, InventoryItemUncheckedUpdateWithoutInventoryInput>
    create: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutInventoryInput, InventoryItemUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutInventoryInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutInventoryInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    inventoryId?: IntFilter<"InventoryItem"> | number
    type?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    description?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    slot?: IntFilter<"InventoryItem"> | number
    isEquippable?: BoolFilter<"InventoryItem"> | boolean
    equipped?: BoolFilter<"InventoryItem"> | boolean
    passive?: BoolFilter<"InventoryItem"> | boolean
    attacks?: JsonFilter<"InventoryItem">
    modifiers?: JsonFilter<"InventoryItem">
  }

  export type CharacterUpsertWithoutInventoryInput = {
    update: XOR<CharacterUpdateWithoutInventoryInput, CharacterUncheckedUpdateWithoutInventoryInput>
    create: XOR<CharacterCreateWithoutInventoryInput, CharacterUncheckedCreateWithoutInventoryInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutInventoryInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutInventoryInput, CharacterUncheckedUpdateWithoutInventoryInput>
  }

  export type CharacterUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUpdateManyWithoutCharacterNestedInput
    abilities?: AbilityUpdateManyWithoutCharacterNestedInput
    effects?: EffectUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUncheckedUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    abilities?: AbilityUncheckedUpdateManyWithoutCharacterNestedInput
    effects?: EffectUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type InventoryCreateWithoutItemsInput = {
    load: JsonNullValueInput | InputJsonValue
    tibares: number
    character: CharacterCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutItemsInput = {
    characterId: number
    load: JsonNullValueInput | InputJsonValue
    tibares: number
  }

  export type InventoryCreateOrConnectWithoutItemsInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
  }

  export type InventoryUpsertWithoutItemsInput = {
    update: XOR<InventoryUpdateWithoutItemsInput, InventoryUncheckedUpdateWithoutItemsInput>
    create: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutItemsInput, InventoryUncheckedUpdateWithoutItemsInput>
  }

  export type InventoryUpdateWithoutItemsInput = {
    load?: JsonNullValueInput | InputJsonValue
    tibares?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutItemsInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    load?: JsonNullValueInput | InputJsonValue
    tibares?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterCreateWithoutAbilitiesInput = {
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesCreateNestedOneWithoutCharacterInput
    expertisies?: ExpertiseCharacterCreateNestedManyWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    effects?: EffectCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutAbilitiesInput = {
    id?: number
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesUncheckedCreateNestedOneWithoutCharacterInput
    expertisies?: ExpertiseCharacterUncheckedCreateNestedManyWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    effects?: EffectUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutAbilitiesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
  }

  export type CharacterUpsertWithoutAbilitiesInput = {
    update: XOR<CharacterUpdateWithoutAbilitiesInput, CharacterUncheckedUpdateWithoutAbilitiesInput>
    create: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutAbilitiesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutAbilitiesInput, CharacterUncheckedUpdateWithoutAbilitiesInput>
  }

  export type CharacterUpdateWithoutAbilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    effects?: EffectUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutAbilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUncheckedUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    effects?: EffectUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateWithoutEffectsInput = {
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesCreateNestedOneWithoutCharacterInput
    expertisies?: ExpertiseCharacterCreateNestedManyWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    abilities?: AbilityCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutEffectsInput = {
    id?: number
    name: string
    player: string
    origin: string
    races: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    divinity?: string | null
    description?: string
    notes?: string
    level?: number
    experience?: number
    size?: string
    movement?: number
    defense?: number
    magicResistence?: number
    hp?: number
    hpMax?: number
    mp?: number
    mpMax?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributesUncheckedCreateNestedOneWithoutCharacterInput
    expertisies?: ExpertiseCharacterUncheckedCreateNestedManyWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    abilities?: AbilityUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutEffectsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutEffectsInput, CharacterUncheckedCreateWithoutEffectsInput>
  }

  export type CharacterUpsertWithoutEffectsInput = {
    update: XOR<CharacterUpdateWithoutEffectsInput, CharacterUncheckedUpdateWithoutEffectsInput>
    create: XOR<CharacterCreateWithoutEffectsInput, CharacterUncheckedCreateWithoutEffectsInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutEffectsInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutEffectsInput, CharacterUncheckedUpdateWithoutEffectsInput>
  }

  export type CharacterUpdateWithoutEffectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutEffectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    races?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    divinity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    movement?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    magicResistence?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    hpMax?: IntFieldUpdateOperationsInput | number
    mp?: IntFieldUpdateOperationsInput | number
    mpMax?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUncheckedUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type ExpertiseCharacterCreateManyCharacterInput = {
    id?: number
    expertiseId: number
    trained?: boolean
    trainBonus?: number
  }

  export type AbilityCreateManyCharacterInput = {
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type EffectCreateManyCharacterInput = {
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    modifiers: JsonNullValueInput | InputJsonValue
    startedAt: Date | string
  }

  export type ExpertiseCharacterUpdateWithoutCharacterInput = {
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
    expertise?: ExpertiseUpdateOneRequiredWithoutCharacterLinkNestedInput
  }

  export type ExpertiseCharacterUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    expertiseId?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterUncheckedUpdateManyWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    expertiseId?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityUpdateWithoutCharacterInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type AbilityUncheckedUpdateWithoutCharacterInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type AbilityUncheckedUpdateManyWithoutCharacterInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type EffectUpdateWithoutCharacterInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    modifiers?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EffectUncheckedUpdateWithoutCharacterInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    modifiers?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EffectUncheckedUpdateManyWithoutCharacterInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    modifiers?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseCharacterCreateManyExpertiseInput = {
    id?: number
    characterId: number
    trained?: boolean
    trainBonus?: number
  }

  export type ExpertiseCharacterUpdateWithoutExpertiseInput = {
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutExpertisiesNestedInput
  }

  export type ExpertiseCharacterUncheckedUpdateWithoutExpertiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterUncheckedUpdateManyWithoutExpertiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateManyInventoryInput = {
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks: JsonNullValueInput | InputJsonValue
    modifiers: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUpdateWithoutInventoryInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUncheckedUpdateWithoutInventoryInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUncheckedUpdateManyWithoutInventoryInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: JsonNullValueInput | InputJsonValue
    modifiers?: JsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}