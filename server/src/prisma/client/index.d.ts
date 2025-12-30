
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
 * Model ItemModifier
 * 
 */
export type ItemModifier = $Result.DefaultSelection<Prisma.$ItemModifierPayload>
/**
 * Model ItemAttack
 * 
 */
export type ItemAttack = $Result.DefaultSelection<Prisma.$ItemAttackPayload>
/**
 * Model Ability
 * 
 */
export type Ability = $Result.DefaultSelection<Prisma.$AbilityPayload>
/**
 * Model AbilityModifier
 * 
 */
export type AbilityModifier = $Result.DefaultSelection<Prisma.$AbilityModifierPayload>
/**
 * Model AbilityAttack
 * 
 */
export type AbilityAttack = $Result.DefaultSelection<Prisma.$AbilityAttackPayload>
/**
 * Model Effect
 * 
 */
export type Effect = $Result.DefaultSelection<Prisma.$EffectPayload>
/**
 * Model EffectModifier
 * 
 */
export type EffectModifier = $Result.DefaultSelection<Prisma.$EffectModifierPayload>
/**
 * Model Modifier
 * 
 */
export type Modifier = $Result.DefaultSelection<Prisma.$ModifierPayload>
/**
 * Model Attack
 * 
 */
export type Attack = $Result.DefaultSelection<Prisma.$AttackPayload>

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
   * `prisma.itemModifier`: Exposes CRUD operations for the **ItemModifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemModifiers
    * const itemModifiers = await prisma.itemModifier.findMany()
    * ```
    */
  get itemModifier(): Prisma.ItemModifierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemAttack`: Exposes CRUD operations for the **ItemAttack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemAttacks
    * const itemAttacks = await prisma.itemAttack.findMany()
    * ```
    */
  get itemAttack(): Prisma.ItemAttackDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.abilityModifier`: Exposes CRUD operations for the **AbilityModifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AbilityModifiers
    * const abilityModifiers = await prisma.abilityModifier.findMany()
    * ```
    */
  get abilityModifier(): Prisma.AbilityModifierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.abilityAttack`: Exposes CRUD operations for the **AbilityAttack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AbilityAttacks
    * const abilityAttacks = await prisma.abilityAttack.findMany()
    * ```
    */
  get abilityAttack(): Prisma.AbilityAttackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.effect`: Exposes CRUD operations for the **Effect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Effects
    * const effects = await prisma.effect.findMany()
    * ```
    */
  get effect(): Prisma.EffectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.effectModifier`: Exposes CRUD operations for the **EffectModifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EffectModifiers
    * const effectModifiers = await prisma.effectModifier.findMany()
    * ```
    */
  get effectModifier(): Prisma.EffectModifierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modifier`: Exposes CRUD operations for the **Modifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modifiers
    * const modifiers = await prisma.modifier.findMany()
    * ```
    */
  get modifier(): Prisma.ModifierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attack`: Exposes CRUD operations for the **Attack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attacks
    * const attacks = await prisma.attack.findMany()
    * ```
    */
  get attack(): Prisma.AttackDelegate<ExtArgs, ClientOptions>;
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
    ItemModifier: 'ItemModifier',
    ItemAttack: 'ItemAttack',
    Ability: 'Ability',
    AbilityModifier: 'AbilityModifier',
    AbilityAttack: 'AbilityAttack',
    Effect: 'Effect',
    EffectModifier: 'EffectModifier',
    Modifier: 'Modifier',
    Attack: 'Attack'
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
      modelProps: "character" | "attributes" | "expertise" | "expertiseCharacter" | "inventory" | "inventoryItem" | "itemModifier" | "itemAttack" | "ability" | "abilityModifier" | "abilityAttack" | "effect" | "effectModifier" | "modifier" | "attack"
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
      ItemModifier: {
        payload: Prisma.$ItemModifierPayload<ExtArgs>
        fields: Prisma.ItemModifierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemModifierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemModifierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>
          }
          findFirst: {
            args: Prisma.ItemModifierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemModifierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>
          }
          findMany: {
            args: Prisma.ItemModifierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>[]
          }
          create: {
            args: Prisma.ItemModifierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>
          }
          createMany: {
            args: Prisma.ItemModifierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemModifierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>[]
          }
          delete: {
            args: Prisma.ItemModifierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>
          }
          update: {
            args: Prisma.ItemModifierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>
          }
          deleteMany: {
            args: Prisma.ItemModifierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemModifierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemModifierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>[]
          }
          upsert: {
            args: Prisma.ItemModifierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemModifierPayload>
          }
          aggregate: {
            args: Prisma.ItemModifierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemModifier>
          }
          groupBy: {
            args: Prisma.ItemModifierGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemModifierCountArgs<ExtArgs>
            result: $Utils.Optional<ItemModifierCountAggregateOutputType> | number
          }
        }
      }
      ItemAttack: {
        payload: Prisma.$ItemAttackPayload<ExtArgs>
        fields: Prisma.ItemAttackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemAttackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemAttackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>
          }
          findFirst: {
            args: Prisma.ItemAttackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemAttackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>
          }
          findMany: {
            args: Prisma.ItemAttackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>[]
          }
          create: {
            args: Prisma.ItemAttackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>
          }
          createMany: {
            args: Prisma.ItemAttackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemAttackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>[]
          }
          delete: {
            args: Prisma.ItemAttackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>
          }
          update: {
            args: Prisma.ItemAttackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>
          }
          deleteMany: {
            args: Prisma.ItemAttackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemAttackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemAttackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>[]
          }
          upsert: {
            args: Prisma.ItemAttackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemAttackPayload>
          }
          aggregate: {
            args: Prisma.ItemAttackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemAttack>
          }
          groupBy: {
            args: Prisma.ItemAttackGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemAttackGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemAttackCountArgs<ExtArgs>
            result: $Utils.Optional<ItemAttackCountAggregateOutputType> | number
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
      AbilityModifier: {
        payload: Prisma.$AbilityModifierPayload<ExtArgs>
        fields: Prisma.AbilityModifierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbilityModifierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbilityModifierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>
          }
          findFirst: {
            args: Prisma.AbilityModifierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbilityModifierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>
          }
          findMany: {
            args: Prisma.AbilityModifierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>[]
          }
          create: {
            args: Prisma.AbilityModifierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>
          }
          createMany: {
            args: Prisma.AbilityModifierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbilityModifierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>[]
          }
          delete: {
            args: Prisma.AbilityModifierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>
          }
          update: {
            args: Prisma.AbilityModifierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>
          }
          deleteMany: {
            args: Prisma.AbilityModifierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbilityModifierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbilityModifierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>[]
          }
          upsert: {
            args: Prisma.AbilityModifierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityModifierPayload>
          }
          aggregate: {
            args: Prisma.AbilityModifierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbilityModifier>
          }
          groupBy: {
            args: Prisma.AbilityModifierGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbilityModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbilityModifierCountArgs<ExtArgs>
            result: $Utils.Optional<AbilityModifierCountAggregateOutputType> | number
          }
        }
      }
      AbilityAttack: {
        payload: Prisma.$AbilityAttackPayload<ExtArgs>
        fields: Prisma.AbilityAttackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbilityAttackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbilityAttackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>
          }
          findFirst: {
            args: Prisma.AbilityAttackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbilityAttackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>
          }
          findMany: {
            args: Prisma.AbilityAttackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>[]
          }
          create: {
            args: Prisma.AbilityAttackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>
          }
          createMany: {
            args: Prisma.AbilityAttackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbilityAttackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>[]
          }
          delete: {
            args: Prisma.AbilityAttackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>
          }
          update: {
            args: Prisma.AbilityAttackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>
          }
          deleteMany: {
            args: Prisma.AbilityAttackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbilityAttackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbilityAttackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>[]
          }
          upsert: {
            args: Prisma.AbilityAttackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityAttackPayload>
          }
          aggregate: {
            args: Prisma.AbilityAttackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbilityAttack>
          }
          groupBy: {
            args: Prisma.AbilityAttackGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbilityAttackGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbilityAttackCountArgs<ExtArgs>
            result: $Utils.Optional<AbilityAttackCountAggregateOutputType> | number
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
      EffectModifier: {
        payload: Prisma.$EffectModifierPayload<ExtArgs>
        fields: Prisma.EffectModifierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EffectModifierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EffectModifierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>
          }
          findFirst: {
            args: Prisma.EffectModifierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EffectModifierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>
          }
          findMany: {
            args: Prisma.EffectModifierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>[]
          }
          create: {
            args: Prisma.EffectModifierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>
          }
          createMany: {
            args: Prisma.EffectModifierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EffectModifierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>[]
          }
          delete: {
            args: Prisma.EffectModifierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>
          }
          update: {
            args: Prisma.EffectModifierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>
          }
          deleteMany: {
            args: Prisma.EffectModifierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EffectModifierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EffectModifierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>[]
          }
          upsert: {
            args: Prisma.EffectModifierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EffectModifierPayload>
          }
          aggregate: {
            args: Prisma.EffectModifierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEffectModifier>
          }
          groupBy: {
            args: Prisma.EffectModifierGroupByArgs<ExtArgs>
            result: $Utils.Optional<EffectModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.EffectModifierCountArgs<ExtArgs>
            result: $Utils.Optional<EffectModifierCountAggregateOutputType> | number
          }
        }
      }
      Modifier: {
        payload: Prisma.$ModifierPayload<ExtArgs>
        fields: Prisma.ModifierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModifierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModifierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          findFirst: {
            args: Prisma.ModifierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModifierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          findMany: {
            args: Prisma.ModifierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>[]
          }
          create: {
            args: Prisma.ModifierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          createMany: {
            args: Prisma.ModifierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModifierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>[]
          }
          delete: {
            args: Prisma.ModifierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          update: {
            args: Prisma.ModifierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          deleteMany: {
            args: Prisma.ModifierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModifierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModifierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>[]
          }
          upsert: {
            args: Prisma.ModifierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          aggregate: {
            args: Prisma.ModifierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModifier>
          }
          groupBy: {
            args: Prisma.ModifierGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModifierCountArgs<ExtArgs>
            result: $Utils.Optional<ModifierCountAggregateOutputType> | number
          }
        }
      }
      Attack: {
        payload: Prisma.$AttackPayload<ExtArgs>
        fields: Prisma.AttackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          findFirst: {
            args: Prisma.AttackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          findMany: {
            args: Prisma.AttackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>[]
          }
          create: {
            args: Prisma.AttackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          createMany: {
            args: Prisma.AttackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>[]
          }
          delete: {
            args: Prisma.AttackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          update: {
            args: Prisma.AttackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          deleteMany: {
            args: Prisma.AttackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>[]
          }
          upsert: {
            args: Prisma.AttackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          aggregate: {
            args: Prisma.AttackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttack>
          }
          groupBy: {
            args: Prisma.AttackGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttackGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttackCountArgs<ExtArgs>
            result: $Utils.Optional<AttackCountAggregateOutputType> | number
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
    itemModifier?: ItemModifierOmit
    itemAttack?: ItemAttackOmit
    ability?: AbilityOmit
    abilityModifier?: AbilityModifierOmit
    abilityAttack?: AbilityAttackOmit
    effect?: EffectOmit
    effectModifier?: EffectModifierOmit
    modifier?: ModifierOmit
    attack?: AttackOmit
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
   * Count Type InventoryItemCountOutputType
   */

  export type InventoryItemCountOutputType = {
    modifiers: number
    attacks: number
  }

  export type InventoryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modifiers?: boolean | InventoryItemCountOutputTypeCountModifiersArgs
    attacks?: boolean | InventoryItemCountOutputTypeCountAttacksArgs
  }

  // Custom InputTypes
  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItemCountOutputType
     */
    select?: InventoryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemModifierWhereInput
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountAttacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemAttackWhereInput
  }


  /**
   * Count Type AbilityCountOutputType
   */

  export type AbilityCountOutputType = {
    modifiers: number
    attacks: number
  }

  export type AbilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modifiers?: boolean | AbilityCountOutputTypeCountModifiersArgs
    attacks?: boolean | AbilityCountOutputTypeCountAttacksArgs
  }

  // Custom InputTypes
  /**
   * AbilityCountOutputType without action
   */
  export type AbilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityCountOutputType
     */
    select?: AbilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AbilityCountOutputType without action
   */
  export type AbilityCountOutputTypeCountModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityModifierWhereInput
  }

  /**
   * AbilityCountOutputType without action
   */
  export type AbilityCountOutputTypeCountAttacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityAttackWhereInput
  }


  /**
   * Count Type EffectCountOutputType
   */

  export type EffectCountOutputType = {
    modifiers: number
  }

  export type EffectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modifiers?: boolean | EffectCountOutputTypeCountModifiersArgs
  }

  // Custom InputTypes
  /**
   * EffectCountOutputType without action
   */
  export type EffectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectCountOutputType
     */
    select?: EffectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EffectCountOutputType without action
   */
  export type EffectCountOutputTypeCountModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EffectModifierWhereInput
  }


  /**
   * Count Type ModifierCountOutputType
   */

  export type ModifierCountOutputType = {
    effects: number
    abilities: number
    items: number
  }

  export type ModifierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    effects?: boolean | ModifierCountOutputTypeCountEffectsArgs
    abilities?: boolean | ModifierCountOutputTypeCountAbilitiesArgs
    items?: boolean | ModifierCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ModifierCountOutputType without action
   */
  export type ModifierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierCountOutputType
     */
    select?: ModifierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModifierCountOutputType without action
   */
  export type ModifierCountOutputTypeCountEffectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EffectModifierWhereInput
  }

  /**
   * ModifierCountOutputType without action
   */
  export type ModifierCountOutputTypeCountAbilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityModifierWhereInput
  }

  /**
   * ModifierCountOutputType without action
   */
  export type ModifierCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemModifierWhereInput
  }


  /**
   * Count Type AttackCountOutputType
   */

  export type AttackCountOutputType = {
    items: number
    ability: number
  }

  export type AttackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | AttackCountOutputTypeCountItemsArgs
    ability?: boolean | AttackCountOutputTypeCountAbilityArgs
  }

  // Custom InputTypes
  /**
   * AttackCountOutputType without action
   */
  export type AttackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackCountOutputType
     */
    select?: AttackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttackCountOutputType without action
   */
  export type AttackCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemAttackWhereInput
  }

  /**
   * AttackCountOutputType without action
   */
  export type AttackCountOutputTypeCountAbilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityAttackWhereInput
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
    condition: string | null
    disable: boolean | null
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
    condition: string | null
    disable: boolean | null
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
    condition: number
    disable: number
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
    condition?: true
    disable?: true
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
    condition?: true
    disable?: true
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
    condition?: true
    disable?: true
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
    condition: string
    disable: boolean
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
    condition?: boolean
    disable?: boolean
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
    condition?: boolean
    disable?: boolean
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
    condition?: boolean
    disable?: boolean
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
    condition?: boolean
    disable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "player" | "origin" | "races" | "classes" | "divinity" | "description" | "notes" | "level" | "experience" | "size" | "movement" | "defense" | "magicResistence" | "hp" | "hpMax" | "mp" | "mpMax" | "condition" | "disable" | "createdAt" | "updatedAt", ExtArgs["result"]["character"]>
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
      condition: string
      disable: boolean
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
    readonly condition: FieldRef<"Character", 'String'>
    readonly disable: FieldRef<"Character", 'Boolean'>
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
    characterId: number | null
    expertiseId: number | null
    value: number | null
    trainBonus: number | null
  }

  export type ExpertiseCharacterSumAggregateOutputType = {
    characterId: number | null
    expertiseId: number | null
    value: number | null
    trainBonus: number | null
  }

  export type ExpertiseCharacterMinAggregateOutputType = {
    characterId: number | null
    expertiseId: number | null
    value: number | null
    trained: boolean | null
    trainBonus: number | null
  }

  export type ExpertiseCharacterMaxAggregateOutputType = {
    characterId: number | null
    expertiseId: number | null
    value: number | null
    trained: boolean | null
    trainBonus: number | null
  }

  export type ExpertiseCharacterCountAggregateOutputType = {
    characterId: number
    expertiseId: number
    value: number
    trained: number
    trainBonus: number
    _all: number
  }


  export type ExpertiseCharacterAvgAggregateInputType = {
    characterId?: true
    expertiseId?: true
    value?: true
    trainBonus?: true
  }

  export type ExpertiseCharacterSumAggregateInputType = {
    characterId?: true
    expertiseId?: true
    value?: true
    trainBonus?: true
  }

  export type ExpertiseCharacterMinAggregateInputType = {
    characterId?: true
    expertiseId?: true
    value?: true
    trained?: true
    trainBonus?: true
  }

  export type ExpertiseCharacterMaxAggregateInputType = {
    characterId?: true
    expertiseId?: true
    value?: true
    trained?: true
    trainBonus?: true
  }

  export type ExpertiseCharacterCountAggregateInputType = {
    characterId?: true
    expertiseId?: true
    value?: true
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
    characterId: number
    expertiseId: number
    value: number
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
    characterId?: boolean
    expertiseId?: boolean
    value?: boolean
    trained?: boolean
    trainBonus?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertiseCharacter"]>

  export type ExpertiseCharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    expertiseId?: boolean
    value?: boolean
    trained?: boolean
    trainBonus?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertiseCharacter"]>

  export type ExpertiseCharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    expertiseId?: boolean
    value?: boolean
    trained?: boolean
    trainBonus?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    expertise?: boolean | ExpertiseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertiseCharacter"]>

  export type ExpertiseCharacterSelectScalar = {
    characterId?: boolean
    expertiseId?: boolean
    value?: boolean
    trained?: boolean
    trainBonus?: boolean
  }

  export type ExpertiseCharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"characterId" | "expertiseId" | "value" | "trained" | "trainBonus", ExtArgs["result"]["expertiseCharacter"]>
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
      characterId: number
      expertiseId: number
      value: number
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
     * // Only select the `characterId`
     * const expertiseCharacterWithCharacterIdOnly = await prisma.expertiseCharacter.findMany({ select: { characterId: true } })
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
     * // Create many ExpertiseCharacters and only return the `characterId`
     * const expertiseCharacterWithCharacterIdOnly = await prisma.expertiseCharacter.createManyAndReturn({
     *   select: { characterId: true },
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
     * // Update zero or more ExpertiseCharacters and only return the `characterId`
     * const expertiseCharacterWithCharacterIdOnly = await prisma.expertiseCharacter.updateManyAndReturn({
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
    readonly characterId: FieldRef<"ExpertiseCharacter", 'Int'>
    readonly expertiseId: FieldRef<"ExpertiseCharacter", 'Int'>
    readonly value: FieldRef<"ExpertiseCharacter", 'Int'>
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
    limit: number | null
    tibares: number | null
  }

  export type InventorySumAggregateOutputType = {
    characterId: number | null
    limit: number | null
    tibares: number | null
  }

  export type InventoryMinAggregateOutputType = {
    characterId: number | null
    limit: number | null
    tibares: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    characterId: number | null
    limit: number | null
    tibares: number | null
  }

  export type InventoryCountAggregateOutputType = {
    characterId: number
    limit: number
    tibares: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    characterId?: true
    limit?: true
    tibares?: true
  }

  export type InventorySumAggregateInputType = {
    characterId?: true
    limit?: true
    tibares?: true
  }

  export type InventoryMinAggregateInputType = {
    characterId?: true
    limit?: true
    tibares?: true
  }

  export type InventoryMaxAggregateInputType = {
    characterId?: true
    limit?: true
    tibares?: true
  }

  export type InventoryCountAggregateInputType = {
    characterId?: true
    limit?: true
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
    limit: number
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
    limit?: boolean
    tibares?: boolean
    items?: boolean | Inventory$itemsArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    limit?: boolean
    tibares?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    limit?: boolean
    tibares?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    characterId?: boolean
    limit?: boolean
    tibares?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"characterId" | "limit" | "tibares", ExtArgs["result"]["inventory"]>
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
      limit: number
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
    readonly limit: FieldRef<"Inventory", 'Int'>
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
    id: number | null
    inventoryId: number | null
    quantity: number | null
    slot: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    id: number | null
    inventoryId: number | null
    quantity: number | null
    slot: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: number | null
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
    id: number | null
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
    id: number
    inventoryId: number
    type: number
    name: number
    description: number
    quantity: number
    slot: number
    isEquippable: number
    equipped: number
    passive: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    id?: true
    inventoryId?: true
    quantity?: true
    slot?: true
  }

  export type InventoryItemSumAggregateInputType = {
    id?: true
    inventoryId?: true
    quantity?: true
    slot?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
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
    id?: true
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
    id?: true
    inventoryId?: true
    type?: true
    name?: true
    description?: true
    quantity?: true
    slot?: true
    isEquippable?: true
    equipped?: true
    passive?: true
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
    id: number
    inventoryId: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
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
    id?: boolean
    inventoryId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    slot?: boolean
    isEquippable?: boolean
    equipped?: boolean
    passive?: boolean
    modifiers?: boolean | InventoryItem$modifiersArgs<ExtArgs>
    attacks?: boolean | InventoryItem$attacksArgs<ExtArgs>
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    slot?: boolean
    isEquippable?: boolean
    equipped?: boolean
    passive?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    slot?: boolean
    isEquippable?: boolean
    equipped?: boolean
    passive?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    inventoryId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    slot?: boolean
    isEquippable?: boolean
    equipped?: boolean
    passive?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryId" | "type" | "name" | "description" | "quantity" | "slot" | "isEquippable" | "equipped" | "passive", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modifiers?: boolean | InventoryItem$modifiersArgs<ExtArgs>
    attacks?: boolean | InventoryItem$attacksArgs<ExtArgs>
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
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
      modifiers: Prisma.$ItemModifierPayload<ExtArgs>[]
      attacks: Prisma.$ItemAttackPayload<ExtArgs>[]
      inventory: Prisma.$InventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inventoryId: number
      type: string
      name: string
      description: string
      quantity: number
      slot: number
      isEquippable: boolean
      equipped: boolean
      passive: boolean
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
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
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
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.updateManyAndReturn({
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
    modifiers<T extends InventoryItem$modifiersArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$modifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attacks<T extends InventoryItem$attacksArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$attacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"InventoryItem", 'Int'>
    readonly inventoryId: FieldRef<"InventoryItem", 'Int'>
    readonly type: FieldRef<"InventoryItem", 'String'>
    readonly name: FieldRef<"InventoryItem", 'String'>
    readonly description: FieldRef<"InventoryItem", 'String'>
    readonly quantity: FieldRef<"InventoryItem", 'Int'>
    readonly slot: FieldRef<"InventoryItem", 'Int'>
    readonly isEquippable: FieldRef<"InventoryItem", 'Boolean'>
    readonly equipped: FieldRef<"InventoryItem", 'Boolean'>
    readonly passive: FieldRef<"InventoryItem", 'Boolean'>
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
   * InventoryItem.modifiers
   */
  export type InventoryItem$modifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    where?: ItemModifierWhereInput
    orderBy?: ItemModifierOrderByWithRelationInput | ItemModifierOrderByWithRelationInput[]
    cursor?: ItemModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemModifierScalarFieldEnum | ItemModifierScalarFieldEnum[]
  }

  /**
   * InventoryItem.attacks
   */
  export type InventoryItem$attacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    where?: ItemAttackWhereInput
    orderBy?: ItemAttackOrderByWithRelationInput | ItemAttackOrderByWithRelationInput[]
    cursor?: ItemAttackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemAttackScalarFieldEnum | ItemAttackScalarFieldEnum[]
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
   * Model ItemModifier
   */

  export type AggregateItemModifier = {
    _count: ItemModifierCountAggregateOutputType | null
    _avg: ItemModifierAvgAggregateOutputType | null
    _sum: ItemModifierSumAggregateOutputType | null
    _min: ItemModifierMinAggregateOutputType | null
    _max: ItemModifierMaxAggregateOutputType | null
  }

  export type ItemModifierAvgAggregateOutputType = {
    itemId: number | null
    modifierId: number | null
  }

  export type ItemModifierSumAggregateOutputType = {
    itemId: number | null
    modifierId: number | null
  }

  export type ItemModifierMinAggregateOutputType = {
    itemId: number | null
    modifierId: number | null
  }

  export type ItemModifierMaxAggregateOutputType = {
    itemId: number | null
    modifierId: number | null
  }

  export type ItemModifierCountAggregateOutputType = {
    itemId: number
    modifierId: number
    _all: number
  }


  export type ItemModifierAvgAggregateInputType = {
    itemId?: true
    modifierId?: true
  }

  export type ItemModifierSumAggregateInputType = {
    itemId?: true
    modifierId?: true
  }

  export type ItemModifierMinAggregateInputType = {
    itemId?: true
    modifierId?: true
  }

  export type ItemModifierMaxAggregateInputType = {
    itemId?: true
    modifierId?: true
  }

  export type ItemModifierCountAggregateInputType = {
    itemId?: true
    modifierId?: true
    _all?: true
  }

  export type ItemModifierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemModifier to aggregate.
     */
    where?: ItemModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemModifiers to fetch.
     */
    orderBy?: ItemModifierOrderByWithRelationInput | ItemModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemModifiers
    **/
    _count?: true | ItemModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemModifierMaxAggregateInputType
  }

  export type GetItemModifierAggregateType<T extends ItemModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateItemModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemModifier[P]>
      : GetScalarType<T[P], AggregateItemModifier[P]>
  }




  export type ItemModifierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemModifierWhereInput
    orderBy?: ItemModifierOrderByWithAggregationInput | ItemModifierOrderByWithAggregationInput[]
    by: ItemModifierScalarFieldEnum[] | ItemModifierScalarFieldEnum
    having?: ItemModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemModifierCountAggregateInputType | true
    _avg?: ItemModifierAvgAggregateInputType
    _sum?: ItemModifierSumAggregateInputType
    _min?: ItemModifierMinAggregateInputType
    _max?: ItemModifierMaxAggregateInputType
  }

  export type ItemModifierGroupByOutputType = {
    itemId: number
    modifierId: number
    _count: ItemModifierCountAggregateOutputType | null
    _avg: ItemModifierAvgAggregateOutputType | null
    _sum: ItemModifierSumAggregateOutputType | null
    _min: ItemModifierMinAggregateOutputType | null
    _max: ItemModifierMaxAggregateOutputType | null
  }

  type GetItemModifierGroupByPayload<T extends ItemModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemModifierGroupByOutputType[P]>
            : GetScalarType<T[P], ItemModifierGroupByOutputType[P]>
        }
      >
    >


  export type ItemModifierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    modifierId?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemModifier"]>

  export type ItemModifierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    modifierId?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemModifier"]>

  export type ItemModifierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    modifierId?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemModifier"]>

  export type ItemModifierSelectScalar = {
    itemId?: boolean
    modifierId?: boolean
  }

  export type ItemModifierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemId" | "modifierId", ExtArgs["result"]["itemModifier"]>
  export type ItemModifierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }
  export type ItemModifierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }
  export type ItemModifierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }

  export type $ItemModifierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemModifier"
    objects: {
      item: Prisma.$InventoryItemPayload<ExtArgs>
      modifier: Prisma.$ModifierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: number
      modifierId: number
    }, ExtArgs["result"]["itemModifier"]>
    composites: {}
  }

  type ItemModifierGetPayload<S extends boolean | null | undefined | ItemModifierDefaultArgs> = $Result.GetResult<Prisma.$ItemModifierPayload, S>

  type ItemModifierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemModifierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemModifierCountAggregateInputType | true
    }

  export interface ItemModifierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemModifier'], meta: { name: 'ItemModifier' } }
    /**
     * Find zero or one ItemModifier that matches the filter.
     * @param {ItemModifierFindUniqueArgs} args - Arguments to find a ItemModifier
     * @example
     * // Get one ItemModifier
     * const itemModifier = await prisma.itemModifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemModifierFindUniqueArgs>(args: SelectSubset<T, ItemModifierFindUniqueArgs<ExtArgs>>): Prisma__ItemModifierClient<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemModifier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemModifierFindUniqueOrThrowArgs} args - Arguments to find a ItemModifier
     * @example
     * // Get one ItemModifier
     * const itemModifier = await prisma.itemModifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemModifierFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemModifierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemModifierClient<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemModifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemModifierFindFirstArgs} args - Arguments to find a ItemModifier
     * @example
     * // Get one ItemModifier
     * const itemModifier = await prisma.itemModifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemModifierFindFirstArgs>(args?: SelectSubset<T, ItemModifierFindFirstArgs<ExtArgs>>): Prisma__ItemModifierClient<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemModifier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemModifierFindFirstOrThrowArgs} args - Arguments to find a ItemModifier
     * @example
     * // Get one ItemModifier
     * const itemModifier = await prisma.itemModifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemModifierFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemModifierFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemModifierClient<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemModifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemModifierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemModifiers
     * const itemModifiers = await prisma.itemModifier.findMany()
     * 
     * // Get first 10 ItemModifiers
     * const itemModifiers = await prisma.itemModifier.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemModifierWithItemIdOnly = await prisma.itemModifier.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends ItemModifierFindManyArgs>(args?: SelectSubset<T, ItemModifierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemModifier.
     * @param {ItemModifierCreateArgs} args - Arguments to create a ItemModifier.
     * @example
     * // Create one ItemModifier
     * const ItemModifier = await prisma.itemModifier.create({
     *   data: {
     *     // ... data to create a ItemModifier
     *   }
     * })
     * 
     */
    create<T extends ItemModifierCreateArgs>(args: SelectSubset<T, ItemModifierCreateArgs<ExtArgs>>): Prisma__ItemModifierClient<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemModifiers.
     * @param {ItemModifierCreateManyArgs} args - Arguments to create many ItemModifiers.
     * @example
     * // Create many ItemModifiers
     * const itemModifier = await prisma.itemModifier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemModifierCreateManyArgs>(args?: SelectSubset<T, ItemModifierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemModifiers and returns the data saved in the database.
     * @param {ItemModifierCreateManyAndReturnArgs} args - Arguments to create many ItemModifiers.
     * @example
     * // Create many ItemModifiers
     * const itemModifier = await prisma.itemModifier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemModifiers and only return the `itemId`
     * const itemModifierWithItemIdOnly = await prisma.itemModifier.createManyAndReturn({
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemModifierCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemModifierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemModifier.
     * @param {ItemModifierDeleteArgs} args - Arguments to delete one ItemModifier.
     * @example
     * // Delete one ItemModifier
     * const ItemModifier = await prisma.itemModifier.delete({
     *   where: {
     *     // ... filter to delete one ItemModifier
     *   }
     * })
     * 
     */
    delete<T extends ItemModifierDeleteArgs>(args: SelectSubset<T, ItemModifierDeleteArgs<ExtArgs>>): Prisma__ItemModifierClient<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemModifier.
     * @param {ItemModifierUpdateArgs} args - Arguments to update one ItemModifier.
     * @example
     * // Update one ItemModifier
     * const itemModifier = await prisma.itemModifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemModifierUpdateArgs>(args: SelectSubset<T, ItemModifierUpdateArgs<ExtArgs>>): Prisma__ItemModifierClient<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemModifiers.
     * @param {ItemModifierDeleteManyArgs} args - Arguments to filter ItemModifiers to delete.
     * @example
     * // Delete a few ItemModifiers
     * const { count } = await prisma.itemModifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemModifierDeleteManyArgs>(args?: SelectSubset<T, ItemModifierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemModifiers
     * const itemModifier = await prisma.itemModifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemModifierUpdateManyArgs>(args: SelectSubset<T, ItemModifierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemModifiers and returns the data updated in the database.
     * @param {ItemModifierUpdateManyAndReturnArgs} args - Arguments to update many ItemModifiers.
     * @example
     * // Update many ItemModifiers
     * const itemModifier = await prisma.itemModifier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemModifiers and only return the `itemId`
     * const itemModifierWithItemIdOnly = await prisma.itemModifier.updateManyAndReturn({
     *   select: { itemId: true },
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
    updateManyAndReturn<T extends ItemModifierUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemModifierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemModifier.
     * @param {ItemModifierUpsertArgs} args - Arguments to update or create a ItemModifier.
     * @example
     * // Update or create a ItemModifier
     * const itemModifier = await prisma.itemModifier.upsert({
     *   create: {
     *     // ... data to create a ItemModifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemModifier we want to update
     *   }
     * })
     */
    upsert<T extends ItemModifierUpsertArgs>(args: SelectSubset<T, ItemModifierUpsertArgs<ExtArgs>>): Prisma__ItemModifierClient<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemModifierCountArgs} args - Arguments to filter ItemModifiers to count.
     * @example
     * // Count the number of ItemModifiers
     * const count = await prisma.itemModifier.count({
     *   where: {
     *     // ... the filter for the ItemModifiers we want to count
     *   }
     * })
    **/
    count<T extends ItemModifierCountArgs>(
      args?: Subset<T, ItemModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemModifierAggregateArgs>(args: Subset<T, ItemModifierAggregateArgs>): Prisma.PrismaPromise<GetItemModifierAggregateType<T>>

    /**
     * Group by ItemModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemModifierGroupByArgs} args - Group by arguments.
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
      T extends ItemModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemModifierGroupByArgs['orderBy'] }
        : { orderBy?: ItemModifierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemModifier model
   */
  readonly fields: ItemModifierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemModifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemModifierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modifier<T extends ModifierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModifierDefaultArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemModifier model
   */
  interface ItemModifierFieldRefs {
    readonly itemId: FieldRef<"ItemModifier", 'Int'>
    readonly modifierId: FieldRef<"ItemModifier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemModifier findUnique
   */
  export type ItemModifierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which ItemModifier to fetch.
     */
    where: ItemModifierWhereUniqueInput
  }

  /**
   * ItemModifier findUniqueOrThrow
   */
  export type ItemModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which ItemModifier to fetch.
     */
    where: ItemModifierWhereUniqueInput
  }

  /**
   * ItemModifier findFirst
   */
  export type ItemModifierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which ItemModifier to fetch.
     */
    where?: ItemModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemModifiers to fetch.
     */
    orderBy?: ItemModifierOrderByWithRelationInput | ItemModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemModifiers.
     */
    cursor?: ItemModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemModifiers.
     */
    distinct?: ItemModifierScalarFieldEnum | ItemModifierScalarFieldEnum[]
  }

  /**
   * ItemModifier findFirstOrThrow
   */
  export type ItemModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which ItemModifier to fetch.
     */
    where?: ItemModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemModifiers to fetch.
     */
    orderBy?: ItemModifierOrderByWithRelationInput | ItemModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemModifiers.
     */
    cursor?: ItemModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemModifiers.
     */
    distinct?: ItemModifierScalarFieldEnum | ItemModifierScalarFieldEnum[]
  }

  /**
   * ItemModifier findMany
   */
  export type ItemModifierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which ItemModifiers to fetch.
     */
    where?: ItemModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemModifiers to fetch.
     */
    orderBy?: ItemModifierOrderByWithRelationInput | ItemModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemModifiers.
     */
    cursor?: ItemModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemModifiers.
     */
    skip?: number
    distinct?: ItemModifierScalarFieldEnum | ItemModifierScalarFieldEnum[]
  }

  /**
   * ItemModifier create
   */
  export type ItemModifierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemModifier.
     */
    data: XOR<ItemModifierCreateInput, ItemModifierUncheckedCreateInput>
  }

  /**
   * ItemModifier createMany
   */
  export type ItemModifierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemModifiers.
     */
    data: ItemModifierCreateManyInput | ItemModifierCreateManyInput[]
  }

  /**
   * ItemModifier createManyAndReturn
   */
  export type ItemModifierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * The data used to create many ItemModifiers.
     */
    data: ItemModifierCreateManyInput | ItemModifierCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemModifier update
   */
  export type ItemModifierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemModifier.
     */
    data: XOR<ItemModifierUpdateInput, ItemModifierUncheckedUpdateInput>
    /**
     * Choose, which ItemModifier to update.
     */
    where: ItemModifierWhereUniqueInput
  }

  /**
   * ItemModifier updateMany
   */
  export type ItemModifierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemModifiers.
     */
    data: XOR<ItemModifierUpdateManyMutationInput, ItemModifierUncheckedUpdateManyInput>
    /**
     * Filter which ItemModifiers to update
     */
    where?: ItemModifierWhereInput
    /**
     * Limit how many ItemModifiers to update.
     */
    limit?: number
  }

  /**
   * ItemModifier updateManyAndReturn
   */
  export type ItemModifierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * The data used to update ItemModifiers.
     */
    data: XOR<ItemModifierUpdateManyMutationInput, ItemModifierUncheckedUpdateManyInput>
    /**
     * Filter which ItemModifiers to update
     */
    where?: ItemModifierWhereInput
    /**
     * Limit how many ItemModifiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemModifier upsert
   */
  export type ItemModifierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemModifier to update in case it exists.
     */
    where: ItemModifierWhereUniqueInput
    /**
     * In case the ItemModifier found by the `where` argument doesn't exist, create a new ItemModifier with this data.
     */
    create: XOR<ItemModifierCreateInput, ItemModifierUncheckedCreateInput>
    /**
     * In case the ItemModifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemModifierUpdateInput, ItemModifierUncheckedUpdateInput>
  }

  /**
   * ItemModifier delete
   */
  export type ItemModifierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    /**
     * Filter which ItemModifier to delete.
     */
    where: ItemModifierWhereUniqueInput
  }

  /**
   * ItemModifier deleteMany
   */
  export type ItemModifierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemModifiers to delete
     */
    where?: ItemModifierWhereInput
    /**
     * Limit how many ItemModifiers to delete.
     */
    limit?: number
  }

  /**
   * ItemModifier without action
   */
  export type ItemModifierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
  }


  /**
   * Model ItemAttack
   */

  export type AggregateItemAttack = {
    _count: ItemAttackCountAggregateOutputType | null
    _avg: ItemAttackAvgAggregateOutputType | null
    _sum: ItemAttackSumAggregateOutputType | null
    _min: ItemAttackMinAggregateOutputType | null
    _max: ItemAttackMaxAggregateOutputType | null
  }

  export type ItemAttackAvgAggregateOutputType = {
    itemId: number | null
    attackId: number | null
  }

  export type ItemAttackSumAggregateOutputType = {
    itemId: number | null
    attackId: number | null
  }

  export type ItemAttackMinAggregateOutputType = {
    itemId: number | null
    attackId: number | null
  }

  export type ItemAttackMaxAggregateOutputType = {
    itemId: number | null
    attackId: number | null
  }

  export type ItemAttackCountAggregateOutputType = {
    itemId: number
    attackId: number
    _all: number
  }


  export type ItemAttackAvgAggregateInputType = {
    itemId?: true
    attackId?: true
  }

  export type ItemAttackSumAggregateInputType = {
    itemId?: true
    attackId?: true
  }

  export type ItemAttackMinAggregateInputType = {
    itemId?: true
    attackId?: true
  }

  export type ItemAttackMaxAggregateInputType = {
    itemId?: true
    attackId?: true
  }

  export type ItemAttackCountAggregateInputType = {
    itemId?: true
    attackId?: true
    _all?: true
  }

  export type ItemAttackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemAttack to aggregate.
     */
    where?: ItemAttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemAttacks to fetch.
     */
    orderBy?: ItemAttackOrderByWithRelationInput | ItemAttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemAttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemAttacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemAttacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemAttacks
    **/
    _count?: true | ItemAttackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAttackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemAttackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemAttackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemAttackMaxAggregateInputType
  }

  export type GetItemAttackAggregateType<T extends ItemAttackAggregateArgs> = {
        [P in keyof T & keyof AggregateItemAttack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemAttack[P]>
      : GetScalarType<T[P], AggregateItemAttack[P]>
  }




  export type ItemAttackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemAttackWhereInput
    orderBy?: ItemAttackOrderByWithAggregationInput | ItemAttackOrderByWithAggregationInput[]
    by: ItemAttackScalarFieldEnum[] | ItemAttackScalarFieldEnum
    having?: ItemAttackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemAttackCountAggregateInputType | true
    _avg?: ItemAttackAvgAggregateInputType
    _sum?: ItemAttackSumAggregateInputType
    _min?: ItemAttackMinAggregateInputType
    _max?: ItemAttackMaxAggregateInputType
  }

  export type ItemAttackGroupByOutputType = {
    itemId: number
    attackId: number
    _count: ItemAttackCountAggregateOutputType | null
    _avg: ItemAttackAvgAggregateOutputType | null
    _sum: ItemAttackSumAggregateOutputType | null
    _min: ItemAttackMinAggregateOutputType | null
    _max: ItemAttackMaxAggregateOutputType | null
  }

  type GetItemAttackGroupByPayload<T extends ItemAttackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemAttackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemAttackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemAttackGroupByOutputType[P]>
            : GetScalarType<T[P], ItemAttackGroupByOutputType[P]>
        }
      >
    >


  export type ItemAttackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    attackId?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemAttack"]>

  export type ItemAttackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    attackId?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemAttack"]>

  export type ItemAttackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    attackId?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemAttack"]>

  export type ItemAttackSelectScalar = {
    itemId?: boolean
    attackId?: boolean
  }

  export type ItemAttackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemId" | "attackId", ExtArgs["result"]["itemAttack"]>
  export type ItemAttackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }
  export type ItemAttackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }
  export type ItemAttackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }

  export type $ItemAttackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemAttack"
    objects: {
      item: Prisma.$InventoryItemPayload<ExtArgs>
      attack: Prisma.$AttackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: number
      attackId: number
    }, ExtArgs["result"]["itemAttack"]>
    composites: {}
  }

  type ItemAttackGetPayload<S extends boolean | null | undefined | ItemAttackDefaultArgs> = $Result.GetResult<Prisma.$ItemAttackPayload, S>

  type ItemAttackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemAttackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemAttackCountAggregateInputType | true
    }

  export interface ItemAttackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemAttack'], meta: { name: 'ItemAttack' } }
    /**
     * Find zero or one ItemAttack that matches the filter.
     * @param {ItemAttackFindUniqueArgs} args - Arguments to find a ItemAttack
     * @example
     * // Get one ItemAttack
     * const itemAttack = await prisma.itemAttack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemAttackFindUniqueArgs>(args: SelectSubset<T, ItemAttackFindUniqueArgs<ExtArgs>>): Prisma__ItemAttackClient<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemAttack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemAttackFindUniqueOrThrowArgs} args - Arguments to find a ItemAttack
     * @example
     * // Get one ItemAttack
     * const itemAttack = await prisma.itemAttack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemAttackFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemAttackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemAttackClient<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemAttack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAttackFindFirstArgs} args - Arguments to find a ItemAttack
     * @example
     * // Get one ItemAttack
     * const itemAttack = await prisma.itemAttack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemAttackFindFirstArgs>(args?: SelectSubset<T, ItemAttackFindFirstArgs<ExtArgs>>): Prisma__ItemAttackClient<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemAttack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAttackFindFirstOrThrowArgs} args - Arguments to find a ItemAttack
     * @example
     * // Get one ItemAttack
     * const itemAttack = await prisma.itemAttack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemAttackFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemAttackFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemAttackClient<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemAttacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAttackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemAttacks
     * const itemAttacks = await prisma.itemAttack.findMany()
     * 
     * // Get first 10 ItemAttacks
     * const itemAttacks = await prisma.itemAttack.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemAttackWithItemIdOnly = await prisma.itemAttack.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends ItemAttackFindManyArgs>(args?: SelectSubset<T, ItemAttackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemAttack.
     * @param {ItemAttackCreateArgs} args - Arguments to create a ItemAttack.
     * @example
     * // Create one ItemAttack
     * const ItemAttack = await prisma.itemAttack.create({
     *   data: {
     *     // ... data to create a ItemAttack
     *   }
     * })
     * 
     */
    create<T extends ItemAttackCreateArgs>(args: SelectSubset<T, ItemAttackCreateArgs<ExtArgs>>): Prisma__ItemAttackClient<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemAttacks.
     * @param {ItemAttackCreateManyArgs} args - Arguments to create many ItemAttacks.
     * @example
     * // Create many ItemAttacks
     * const itemAttack = await prisma.itemAttack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemAttackCreateManyArgs>(args?: SelectSubset<T, ItemAttackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemAttacks and returns the data saved in the database.
     * @param {ItemAttackCreateManyAndReturnArgs} args - Arguments to create many ItemAttacks.
     * @example
     * // Create many ItemAttacks
     * const itemAttack = await prisma.itemAttack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemAttacks and only return the `itemId`
     * const itemAttackWithItemIdOnly = await prisma.itemAttack.createManyAndReturn({
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemAttackCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemAttackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemAttack.
     * @param {ItemAttackDeleteArgs} args - Arguments to delete one ItemAttack.
     * @example
     * // Delete one ItemAttack
     * const ItemAttack = await prisma.itemAttack.delete({
     *   where: {
     *     // ... filter to delete one ItemAttack
     *   }
     * })
     * 
     */
    delete<T extends ItemAttackDeleteArgs>(args: SelectSubset<T, ItemAttackDeleteArgs<ExtArgs>>): Prisma__ItemAttackClient<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemAttack.
     * @param {ItemAttackUpdateArgs} args - Arguments to update one ItemAttack.
     * @example
     * // Update one ItemAttack
     * const itemAttack = await prisma.itemAttack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemAttackUpdateArgs>(args: SelectSubset<T, ItemAttackUpdateArgs<ExtArgs>>): Prisma__ItemAttackClient<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemAttacks.
     * @param {ItemAttackDeleteManyArgs} args - Arguments to filter ItemAttacks to delete.
     * @example
     * // Delete a few ItemAttacks
     * const { count } = await prisma.itemAttack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemAttackDeleteManyArgs>(args?: SelectSubset<T, ItemAttackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemAttacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAttackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemAttacks
     * const itemAttack = await prisma.itemAttack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemAttackUpdateManyArgs>(args: SelectSubset<T, ItemAttackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemAttacks and returns the data updated in the database.
     * @param {ItemAttackUpdateManyAndReturnArgs} args - Arguments to update many ItemAttacks.
     * @example
     * // Update many ItemAttacks
     * const itemAttack = await prisma.itemAttack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemAttacks and only return the `itemId`
     * const itemAttackWithItemIdOnly = await prisma.itemAttack.updateManyAndReturn({
     *   select: { itemId: true },
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
    updateManyAndReturn<T extends ItemAttackUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemAttackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemAttack.
     * @param {ItemAttackUpsertArgs} args - Arguments to update or create a ItemAttack.
     * @example
     * // Update or create a ItemAttack
     * const itemAttack = await prisma.itemAttack.upsert({
     *   create: {
     *     // ... data to create a ItemAttack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemAttack we want to update
     *   }
     * })
     */
    upsert<T extends ItemAttackUpsertArgs>(args: SelectSubset<T, ItemAttackUpsertArgs<ExtArgs>>): Prisma__ItemAttackClient<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemAttacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAttackCountArgs} args - Arguments to filter ItemAttacks to count.
     * @example
     * // Count the number of ItemAttacks
     * const count = await prisma.itemAttack.count({
     *   where: {
     *     // ... the filter for the ItemAttacks we want to count
     *   }
     * })
    **/
    count<T extends ItemAttackCountArgs>(
      args?: Subset<T, ItemAttackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemAttackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemAttack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAttackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAttackAggregateArgs>(args: Subset<T, ItemAttackAggregateArgs>): Prisma.PrismaPromise<GetItemAttackAggregateType<T>>

    /**
     * Group by ItemAttack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAttackGroupByArgs} args - Group by arguments.
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
      T extends ItemAttackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemAttackGroupByArgs['orderBy'] }
        : { orderBy?: ItemAttackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemAttackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemAttackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemAttack model
   */
  readonly fields: ItemAttackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemAttack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemAttackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attack<T extends AttackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttackDefaultArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemAttack model
   */
  interface ItemAttackFieldRefs {
    readonly itemId: FieldRef<"ItemAttack", 'Int'>
    readonly attackId: FieldRef<"ItemAttack", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemAttack findUnique
   */
  export type ItemAttackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * Filter, which ItemAttack to fetch.
     */
    where: ItemAttackWhereUniqueInput
  }

  /**
   * ItemAttack findUniqueOrThrow
   */
  export type ItemAttackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * Filter, which ItemAttack to fetch.
     */
    where: ItemAttackWhereUniqueInput
  }

  /**
   * ItemAttack findFirst
   */
  export type ItemAttackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * Filter, which ItemAttack to fetch.
     */
    where?: ItemAttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemAttacks to fetch.
     */
    orderBy?: ItemAttackOrderByWithRelationInput | ItemAttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemAttacks.
     */
    cursor?: ItemAttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemAttacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemAttacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemAttacks.
     */
    distinct?: ItemAttackScalarFieldEnum | ItemAttackScalarFieldEnum[]
  }

  /**
   * ItemAttack findFirstOrThrow
   */
  export type ItemAttackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * Filter, which ItemAttack to fetch.
     */
    where?: ItemAttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemAttacks to fetch.
     */
    orderBy?: ItemAttackOrderByWithRelationInput | ItemAttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemAttacks.
     */
    cursor?: ItemAttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemAttacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemAttacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemAttacks.
     */
    distinct?: ItemAttackScalarFieldEnum | ItemAttackScalarFieldEnum[]
  }

  /**
   * ItemAttack findMany
   */
  export type ItemAttackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * Filter, which ItemAttacks to fetch.
     */
    where?: ItemAttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemAttacks to fetch.
     */
    orderBy?: ItemAttackOrderByWithRelationInput | ItemAttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemAttacks.
     */
    cursor?: ItemAttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemAttacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemAttacks.
     */
    skip?: number
    distinct?: ItemAttackScalarFieldEnum | ItemAttackScalarFieldEnum[]
  }

  /**
   * ItemAttack create
   */
  export type ItemAttackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemAttack.
     */
    data: XOR<ItemAttackCreateInput, ItemAttackUncheckedCreateInput>
  }

  /**
   * ItemAttack createMany
   */
  export type ItemAttackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemAttacks.
     */
    data: ItemAttackCreateManyInput | ItemAttackCreateManyInput[]
  }

  /**
   * ItemAttack createManyAndReturn
   */
  export type ItemAttackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * The data used to create many ItemAttacks.
     */
    data: ItemAttackCreateManyInput | ItemAttackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemAttack update
   */
  export type ItemAttackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemAttack.
     */
    data: XOR<ItemAttackUpdateInput, ItemAttackUncheckedUpdateInput>
    /**
     * Choose, which ItemAttack to update.
     */
    where: ItemAttackWhereUniqueInput
  }

  /**
   * ItemAttack updateMany
   */
  export type ItemAttackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemAttacks.
     */
    data: XOR<ItemAttackUpdateManyMutationInput, ItemAttackUncheckedUpdateManyInput>
    /**
     * Filter which ItemAttacks to update
     */
    where?: ItemAttackWhereInput
    /**
     * Limit how many ItemAttacks to update.
     */
    limit?: number
  }

  /**
   * ItemAttack updateManyAndReturn
   */
  export type ItemAttackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * The data used to update ItemAttacks.
     */
    data: XOR<ItemAttackUpdateManyMutationInput, ItemAttackUncheckedUpdateManyInput>
    /**
     * Filter which ItemAttacks to update
     */
    where?: ItemAttackWhereInput
    /**
     * Limit how many ItemAttacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemAttack upsert
   */
  export type ItemAttackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemAttack to update in case it exists.
     */
    where: ItemAttackWhereUniqueInput
    /**
     * In case the ItemAttack found by the `where` argument doesn't exist, create a new ItemAttack with this data.
     */
    create: XOR<ItemAttackCreateInput, ItemAttackUncheckedCreateInput>
    /**
     * In case the ItemAttack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemAttackUpdateInput, ItemAttackUncheckedUpdateInput>
  }

  /**
   * ItemAttack delete
   */
  export type ItemAttackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    /**
     * Filter which ItemAttack to delete.
     */
    where: ItemAttackWhereUniqueInput
  }

  /**
   * ItemAttack deleteMany
   */
  export type ItemAttackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemAttacks to delete
     */
    where?: ItemAttackWhereInput
    /**
     * Limit how many ItemAttacks to delete.
     */
    limit?: number
  }

  /**
   * ItemAttack without action
   */
  export type ItemAttackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
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
    id: number | null
    characterId: number | null
    manaCost: number | null
  }

  export type AbilitySumAggregateOutputType = {
    id: number | null
    characterId: number | null
    manaCost: number | null
  }

  export type AbilityMinAggregateOutputType = {
    id: number | null
    characterId: number | null
    type: string | null
    name: string | null
    description: string | null
    passive: boolean | null
    manaCost: number | null
  }

  export type AbilityMaxAggregateOutputType = {
    id: number | null
    characterId: number | null
    type: string | null
    name: string | null
    description: string | null
    passive: boolean | null
    manaCost: number | null
  }

  export type AbilityCountAggregateOutputType = {
    id: number
    characterId: number
    type: number
    name: number
    description: number
    passive: number
    manaCost: number
    _all: number
  }


  export type AbilityAvgAggregateInputType = {
    id?: true
    characterId?: true
    manaCost?: true
  }

  export type AbilitySumAggregateInputType = {
    id?: true
    characterId?: true
    manaCost?: true
  }

  export type AbilityMinAggregateInputType = {
    id?: true
    characterId?: true
    type?: true
    name?: true
    description?: true
    passive?: true
    manaCost?: true
  }

  export type AbilityMaxAggregateInputType = {
    id?: true
    characterId?: true
    type?: true
    name?: true
    description?: true
    passive?: true
    manaCost?: true
  }

  export type AbilityCountAggregateInputType = {
    id?: true
    characterId?: true
    type?: true
    name?: true
    description?: true
    passive?: true
    manaCost?: true
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
    id: number
    characterId: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
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
    id?: boolean
    characterId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    passive?: boolean
    manaCost?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    modifiers?: boolean | Ability$modifiersArgs<ExtArgs>
    attacks?: boolean | Ability$attacksArgs<ExtArgs>
    _count?: boolean | AbilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    passive?: boolean
    manaCost?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    passive?: boolean
    manaCost?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectScalar = {
    id?: boolean
    characterId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    passive?: boolean
    manaCost?: boolean
  }

  export type AbilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "type" | "name" | "description" | "passive" | "manaCost", ExtArgs["result"]["ability"]>
  export type AbilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    modifiers?: boolean | Ability$modifiersArgs<ExtArgs>
    attacks?: boolean | Ability$attacksArgs<ExtArgs>
    _count?: boolean | AbilityCountOutputTypeDefaultArgs<ExtArgs>
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
      modifiers: Prisma.$AbilityModifierPayload<ExtArgs>[]
      attacks: Prisma.$AbilityAttackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterId: number
      type: string
      name: string
      description: string
      passive: boolean
      manaCost: number
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
     * // Only select the `id`
     * const abilityWithIdOnly = await prisma.ability.findMany({ select: { id: true } })
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
     * // Create many Abilities and only return the `id`
     * const abilityWithIdOnly = await prisma.ability.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Abilities and only return the `id`
     * const abilityWithIdOnly = await prisma.ability.updateManyAndReturn({
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
    modifiers<T extends Ability$modifiersArgs<ExtArgs> = {}>(args?: Subset<T, Ability$modifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attacks<T extends Ability$attacksArgs<ExtArgs> = {}>(args?: Subset<T, Ability$attacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Ability", 'Int'>
    readonly characterId: FieldRef<"Ability", 'Int'>
    readonly type: FieldRef<"Ability", 'String'>
    readonly name: FieldRef<"Ability", 'String'>
    readonly description: FieldRef<"Ability", 'String'>
    readonly passive: FieldRef<"Ability", 'Boolean'>
    readonly manaCost: FieldRef<"Ability", 'Int'>
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
   * Ability.modifiers
   */
  export type Ability$modifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    where?: AbilityModifierWhereInput
    orderBy?: AbilityModifierOrderByWithRelationInput | AbilityModifierOrderByWithRelationInput[]
    cursor?: AbilityModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilityModifierScalarFieldEnum | AbilityModifierScalarFieldEnum[]
  }

  /**
   * Ability.attacks
   */
  export type Ability$attacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    where?: AbilityAttackWhereInput
    orderBy?: AbilityAttackOrderByWithRelationInput | AbilityAttackOrderByWithRelationInput[]
    cursor?: AbilityAttackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilityAttackScalarFieldEnum | AbilityAttackScalarFieldEnum[]
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
   * Model AbilityModifier
   */

  export type AggregateAbilityModifier = {
    _count: AbilityModifierCountAggregateOutputType | null
    _avg: AbilityModifierAvgAggregateOutputType | null
    _sum: AbilityModifierSumAggregateOutputType | null
    _min: AbilityModifierMinAggregateOutputType | null
    _max: AbilityModifierMaxAggregateOutputType | null
  }

  export type AbilityModifierAvgAggregateOutputType = {
    abilityId: number | null
    modifierId: number | null
  }

  export type AbilityModifierSumAggregateOutputType = {
    abilityId: number | null
    modifierId: number | null
  }

  export type AbilityModifierMinAggregateOutputType = {
    abilityId: number | null
    modifierId: number | null
  }

  export type AbilityModifierMaxAggregateOutputType = {
    abilityId: number | null
    modifierId: number | null
  }

  export type AbilityModifierCountAggregateOutputType = {
    abilityId: number
    modifierId: number
    _all: number
  }


  export type AbilityModifierAvgAggregateInputType = {
    abilityId?: true
    modifierId?: true
  }

  export type AbilityModifierSumAggregateInputType = {
    abilityId?: true
    modifierId?: true
  }

  export type AbilityModifierMinAggregateInputType = {
    abilityId?: true
    modifierId?: true
  }

  export type AbilityModifierMaxAggregateInputType = {
    abilityId?: true
    modifierId?: true
  }

  export type AbilityModifierCountAggregateInputType = {
    abilityId?: true
    modifierId?: true
    _all?: true
  }

  export type AbilityModifierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbilityModifier to aggregate.
     */
    where?: AbilityModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbilityModifiers to fetch.
     */
    orderBy?: AbilityModifierOrderByWithRelationInput | AbilityModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbilityModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbilityModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbilityModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AbilityModifiers
    **/
    _count?: true | AbilityModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbilityModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbilityModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbilityModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbilityModifierMaxAggregateInputType
  }

  export type GetAbilityModifierAggregateType<T extends AbilityModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateAbilityModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbilityModifier[P]>
      : GetScalarType<T[P], AggregateAbilityModifier[P]>
  }




  export type AbilityModifierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityModifierWhereInput
    orderBy?: AbilityModifierOrderByWithAggregationInput | AbilityModifierOrderByWithAggregationInput[]
    by: AbilityModifierScalarFieldEnum[] | AbilityModifierScalarFieldEnum
    having?: AbilityModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbilityModifierCountAggregateInputType | true
    _avg?: AbilityModifierAvgAggregateInputType
    _sum?: AbilityModifierSumAggregateInputType
    _min?: AbilityModifierMinAggregateInputType
    _max?: AbilityModifierMaxAggregateInputType
  }

  export type AbilityModifierGroupByOutputType = {
    abilityId: number
    modifierId: number
    _count: AbilityModifierCountAggregateOutputType | null
    _avg: AbilityModifierAvgAggregateOutputType | null
    _sum: AbilityModifierSumAggregateOutputType | null
    _min: AbilityModifierMinAggregateOutputType | null
    _max: AbilityModifierMaxAggregateOutputType | null
  }

  type GetAbilityModifierGroupByPayload<T extends AbilityModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbilityModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbilityModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbilityModifierGroupByOutputType[P]>
            : GetScalarType<T[P], AbilityModifierGroupByOutputType[P]>
        }
      >
    >


  export type AbilityModifierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abilityId?: boolean
    modifierId?: boolean
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abilityModifier"]>

  export type AbilityModifierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abilityId?: boolean
    modifierId?: boolean
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abilityModifier"]>

  export type AbilityModifierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abilityId?: boolean
    modifierId?: boolean
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abilityModifier"]>

  export type AbilityModifierSelectScalar = {
    abilityId?: boolean
    modifierId?: boolean
  }

  export type AbilityModifierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"abilityId" | "modifierId", ExtArgs["result"]["abilityModifier"]>
  export type AbilityModifierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }
  export type AbilityModifierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }
  export type AbilityModifierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }

  export type $AbilityModifierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AbilityModifier"
    objects: {
      ability: Prisma.$AbilityPayload<ExtArgs>
      modifier: Prisma.$ModifierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      abilityId: number
      modifierId: number
    }, ExtArgs["result"]["abilityModifier"]>
    composites: {}
  }

  type AbilityModifierGetPayload<S extends boolean | null | undefined | AbilityModifierDefaultArgs> = $Result.GetResult<Prisma.$AbilityModifierPayload, S>

  type AbilityModifierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbilityModifierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbilityModifierCountAggregateInputType | true
    }

  export interface AbilityModifierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AbilityModifier'], meta: { name: 'AbilityModifier' } }
    /**
     * Find zero or one AbilityModifier that matches the filter.
     * @param {AbilityModifierFindUniqueArgs} args - Arguments to find a AbilityModifier
     * @example
     * // Get one AbilityModifier
     * const abilityModifier = await prisma.abilityModifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbilityModifierFindUniqueArgs>(args: SelectSubset<T, AbilityModifierFindUniqueArgs<ExtArgs>>): Prisma__AbilityModifierClient<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AbilityModifier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbilityModifierFindUniqueOrThrowArgs} args - Arguments to find a AbilityModifier
     * @example
     * // Get one AbilityModifier
     * const abilityModifier = await prisma.abilityModifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbilityModifierFindUniqueOrThrowArgs>(args: SelectSubset<T, AbilityModifierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbilityModifierClient<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbilityModifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityModifierFindFirstArgs} args - Arguments to find a AbilityModifier
     * @example
     * // Get one AbilityModifier
     * const abilityModifier = await prisma.abilityModifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbilityModifierFindFirstArgs>(args?: SelectSubset<T, AbilityModifierFindFirstArgs<ExtArgs>>): Prisma__AbilityModifierClient<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbilityModifier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityModifierFindFirstOrThrowArgs} args - Arguments to find a AbilityModifier
     * @example
     * // Get one AbilityModifier
     * const abilityModifier = await prisma.abilityModifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbilityModifierFindFirstOrThrowArgs>(args?: SelectSubset<T, AbilityModifierFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbilityModifierClient<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AbilityModifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityModifierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbilityModifiers
     * const abilityModifiers = await prisma.abilityModifier.findMany()
     * 
     * // Get first 10 AbilityModifiers
     * const abilityModifiers = await prisma.abilityModifier.findMany({ take: 10 })
     * 
     * // Only select the `abilityId`
     * const abilityModifierWithAbilityIdOnly = await prisma.abilityModifier.findMany({ select: { abilityId: true } })
     * 
     */
    findMany<T extends AbilityModifierFindManyArgs>(args?: SelectSubset<T, AbilityModifierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AbilityModifier.
     * @param {AbilityModifierCreateArgs} args - Arguments to create a AbilityModifier.
     * @example
     * // Create one AbilityModifier
     * const AbilityModifier = await prisma.abilityModifier.create({
     *   data: {
     *     // ... data to create a AbilityModifier
     *   }
     * })
     * 
     */
    create<T extends AbilityModifierCreateArgs>(args: SelectSubset<T, AbilityModifierCreateArgs<ExtArgs>>): Prisma__AbilityModifierClient<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AbilityModifiers.
     * @param {AbilityModifierCreateManyArgs} args - Arguments to create many AbilityModifiers.
     * @example
     * // Create many AbilityModifiers
     * const abilityModifier = await prisma.abilityModifier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbilityModifierCreateManyArgs>(args?: SelectSubset<T, AbilityModifierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AbilityModifiers and returns the data saved in the database.
     * @param {AbilityModifierCreateManyAndReturnArgs} args - Arguments to create many AbilityModifiers.
     * @example
     * // Create many AbilityModifiers
     * const abilityModifier = await prisma.abilityModifier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AbilityModifiers and only return the `abilityId`
     * const abilityModifierWithAbilityIdOnly = await prisma.abilityModifier.createManyAndReturn({
     *   select: { abilityId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbilityModifierCreateManyAndReturnArgs>(args?: SelectSubset<T, AbilityModifierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AbilityModifier.
     * @param {AbilityModifierDeleteArgs} args - Arguments to delete one AbilityModifier.
     * @example
     * // Delete one AbilityModifier
     * const AbilityModifier = await prisma.abilityModifier.delete({
     *   where: {
     *     // ... filter to delete one AbilityModifier
     *   }
     * })
     * 
     */
    delete<T extends AbilityModifierDeleteArgs>(args: SelectSubset<T, AbilityModifierDeleteArgs<ExtArgs>>): Prisma__AbilityModifierClient<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AbilityModifier.
     * @param {AbilityModifierUpdateArgs} args - Arguments to update one AbilityModifier.
     * @example
     * // Update one AbilityModifier
     * const abilityModifier = await prisma.abilityModifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbilityModifierUpdateArgs>(args: SelectSubset<T, AbilityModifierUpdateArgs<ExtArgs>>): Prisma__AbilityModifierClient<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AbilityModifiers.
     * @param {AbilityModifierDeleteManyArgs} args - Arguments to filter AbilityModifiers to delete.
     * @example
     * // Delete a few AbilityModifiers
     * const { count } = await prisma.abilityModifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbilityModifierDeleteManyArgs>(args?: SelectSubset<T, AbilityModifierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbilityModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbilityModifiers
     * const abilityModifier = await prisma.abilityModifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbilityModifierUpdateManyArgs>(args: SelectSubset<T, AbilityModifierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbilityModifiers and returns the data updated in the database.
     * @param {AbilityModifierUpdateManyAndReturnArgs} args - Arguments to update many AbilityModifiers.
     * @example
     * // Update many AbilityModifiers
     * const abilityModifier = await prisma.abilityModifier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AbilityModifiers and only return the `abilityId`
     * const abilityModifierWithAbilityIdOnly = await prisma.abilityModifier.updateManyAndReturn({
     *   select: { abilityId: true },
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
    updateManyAndReturn<T extends AbilityModifierUpdateManyAndReturnArgs>(args: SelectSubset<T, AbilityModifierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AbilityModifier.
     * @param {AbilityModifierUpsertArgs} args - Arguments to update or create a AbilityModifier.
     * @example
     * // Update or create a AbilityModifier
     * const abilityModifier = await prisma.abilityModifier.upsert({
     *   create: {
     *     // ... data to create a AbilityModifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbilityModifier we want to update
     *   }
     * })
     */
    upsert<T extends AbilityModifierUpsertArgs>(args: SelectSubset<T, AbilityModifierUpsertArgs<ExtArgs>>): Prisma__AbilityModifierClient<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AbilityModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityModifierCountArgs} args - Arguments to filter AbilityModifiers to count.
     * @example
     * // Count the number of AbilityModifiers
     * const count = await prisma.abilityModifier.count({
     *   where: {
     *     // ... the filter for the AbilityModifiers we want to count
     *   }
     * })
    **/
    count<T extends AbilityModifierCountArgs>(
      args?: Subset<T, AbilityModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbilityModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AbilityModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbilityModifierAggregateArgs>(args: Subset<T, AbilityModifierAggregateArgs>): Prisma.PrismaPromise<GetAbilityModifierAggregateType<T>>

    /**
     * Group by AbilityModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityModifierGroupByArgs} args - Group by arguments.
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
      T extends AbilityModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbilityModifierGroupByArgs['orderBy'] }
        : { orderBy?: AbilityModifierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AbilityModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbilityModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AbilityModifier model
   */
  readonly fields: AbilityModifierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbilityModifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbilityModifierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ability<T extends AbilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AbilityDefaultArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modifier<T extends ModifierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModifierDefaultArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AbilityModifier model
   */
  interface AbilityModifierFieldRefs {
    readonly abilityId: FieldRef<"AbilityModifier", 'Int'>
    readonly modifierId: FieldRef<"AbilityModifier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AbilityModifier findUnique
   */
  export type AbilityModifierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * Filter, which AbilityModifier to fetch.
     */
    where: AbilityModifierWhereUniqueInput
  }

  /**
   * AbilityModifier findUniqueOrThrow
   */
  export type AbilityModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * Filter, which AbilityModifier to fetch.
     */
    where: AbilityModifierWhereUniqueInput
  }

  /**
   * AbilityModifier findFirst
   */
  export type AbilityModifierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * Filter, which AbilityModifier to fetch.
     */
    where?: AbilityModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbilityModifiers to fetch.
     */
    orderBy?: AbilityModifierOrderByWithRelationInput | AbilityModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbilityModifiers.
     */
    cursor?: AbilityModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbilityModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbilityModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbilityModifiers.
     */
    distinct?: AbilityModifierScalarFieldEnum | AbilityModifierScalarFieldEnum[]
  }

  /**
   * AbilityModifier findFirstOrThrow
   */
  export type AbilityModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * Filter, which AbilityModifier to fetch.
     */
    where?: AbilityModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbilityModifiers to fetch.
     */
    orderBy?: AbilityModifierOrderByWithRelationInput | AbilityModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbilityModifiers.
     */
    cursor?: AbilityModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbilityModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbilityModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbilityModifiers.
     */
    distinct?: AbilityModifierScalarFieldEnum | AbilityModifierScalarFieldEnum[]
  }

  /**
   * AbilityModifier findMany
   */
  export type AbilityModifierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * Filter, which AbilityModifiers to fetch.
     */
    where?: AbilityModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbilityModifiers to fetch.
     */
    orderBy?: AbilityModifierOrderByWithRelationInput | AbilityModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AbilityModifiers.
     */
    cursor?: AbilityModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbilityModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbilityModifiers.
     */
    skip?: number
    distinct?: AbilityModifierScalarFieldEnum | AbilityModifierScalarFieldEnum[]
  }

  /**
   * AbilityModifier create
   */
  export type AbilityModifierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a AbilityModifier.
     */
    data: XOR<AbilityModifierCreateInput, AbilityModifierUncheckedCreateInput>
  }

  /**
   * AbilityModifier createMany
   */
  export type AbilityModifierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AbilityModifiers.
     */
    data: AbilityModifierCreateManyInput | AbilityModifierCreateManyInput[]
  }

  /**
   * AbilityModifier createManyAndReturn
   */
  export type AbilityModifierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * The data used to create many AbilityModifiers.
     */
    data: AbilityModifierCreateManyInput | AbilityModifierCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbilityModifier update
   */
  export type AbilityModifierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a AbilityModifier.
     */
    data: XOR<AbilityModifierUpdateInput, AbilityModifierUncheckedUpdateInput>
    /**
     * Choose, which AbilityModifier to update.
     */
    where: AbilityModifierWhereUniqueInput
  }

  /**
   * AbilityModifier updateMany
   */
  export type AbilityModifierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AbilityModifiers.
     */
    data: XOR<AbilityModifierUpdateManyMutationInput, AbilityModifierUncheckedUpdateManyInput>
    /**
     * Filter which AbilityModifiers to update
     */
    where?: AbilityModifierWhereInput
    /**
     * Limit how many AbilityModifiers to update.
     */
    limit?: number
  }

  /**
   * AbilityModifier updateManyAndReturn
   */
  export type AbilityModifierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * The data used to update AbilityModifiers.
     */
    data: XOR<AbilityModifierUpdateManyMutationInput, AbilityModifierUncheckedUpdateManyInput>
    /**
     * Filter which AbilityModifiers to update
     */
    where?: AbilityModifierWhereInput
    /**
     * Limit how many AbilityModifiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbilityModifier upsert
   */
  export type AbilityModifierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the AbilityModifier to update in case it exists.
     */
    where: AbilityModifierWhereUniqueInput
    /**
     * In case the AbilityModifier found by the `where` argument doesn't exist, create a new AbilityModifier with this data.
     */
    create: XOR<AbilityModifierCreateInput, AbilityModifierUncheckedCreateInput>
    /**
     * In case the AbilityModifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbilityModifierUpdateInput, AbilityModifierUncheckedUpdateInput>
  }

  /**
   * AbilityModifier delete
   */
  export type AbilityModifierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    /**
     * Filter which AbilityModifier to delete.
     */
    where: AbilityModifierWhereUniqueInput
  }

  /**
   * AbilityModifier deleteMany
   */
  export type AbilityModifierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbilityModifiers to delete
     */
    where?: AbilityModifierWhereInput
    /**
     * Limit how many AbilityModifiers to delete.
     */
    limit?: number
  }

  /**
   * AbilityModifier without action
   */
  export type AbilityModifierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
  }


  /**
   * Model AbilityAttack
   */

  export type AggregateAbilityAttack = {
    _count: AbilityAttackCountAggregateOutputType | null
    _avg: AbilityAttackAvgAggregateOutputType | null
    _sum: AbilityAttackSumAggregateOutputType | null
    _min: AbilityAttackMinAggregateOutputType | null
    _max: AbilityAttackMaxAggregateOutputType | null
  }

  export type AbilityAttackAvgAggregateOutputType = {
    abilityId: number | null
    attackId: number | null
  }

  export type AbilityAttackSumAggregateOutputType = {
    abilityId: number | null
    attackId: number | null
  }

  export type AbilityAttackMinAggregateOutputType = {
    abilityId: number | null
    attackId: number | null
  }

  export type AbilityAttackMaxAggregateOutputType = {
    abilityId: number | null
    attackId: number | null
  }

  export type AbilityAttackCountAggregateOutputType = {
    abilityId: number
    attackId: number
    _all: number
  }


  export type AbilityAttackAvgAggregateInputType = {
    abilityId?: true
    attackId?: true
  }

  export type AbilityAttackSumAggregateInputType = {
    abilityId?: true
    attackId?: true
  }

  export type AbilityAttackMinAggregateInputType = {
    abilityId?: true
    attackId?: true
  }

  export type AbilityAttackMaxAggregateInputType = {
    abilityId?: true
    attackId?: true
  }

  export type AbilityAttackCountAggregateInputType = {
    abilityId?: true
    attackId?: true
    _all?: true
  }

  export type AbilityAttackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbilityAttack to aggregate.
     */
    where?: AbilityAttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbilityAttacks to fetch.
     */
    orderBy?: AbilityAttackOrderByWithRelationInput | AbilityAttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbilityAttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbilityAttacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbilityAttacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AbilityAttacks
    **/
    _count?: true | AbilityAttackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbilityAttackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbilityAttackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbilityAttackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbilityAttackMaxAggregateInputType
  }

  export type GetAbilityAttackAggregateType<T extends AbilityAttackAggregateArgs> = {
        [P in keyof T & keyof AggregateAbilityAttack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbilityAttack[P]>
      : GetScalarType<T[P], AggregateAbilityAttack[P]>
  }




  export type AbilityAttackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityAttackWhereInput
    orderBy?: AbilityAttackOrderByWithAggregationInput | AbilityAttackOrderByWithAggregationInput[]
    by: AbilityAttackScalarFieldEnum[] | AbilityAttackScalarFieldEnum
    having?: AbilityAttackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbilityAttackCountAggregateInputType | true
    _avg?: AbilityAttackAvgAggregateInputType
    _sum?: AbilityAttackSumAggregateInputType
    _min?: AbilityAttackMinAggregateInputType
    _max?: AbilityAttackMaxAggregateInputType
  }

  export type AbilityAttackGroupByOutputType = {
    abilityId: number
    attackId: number
    _count: AbilityAttackCountAggregateOutputType | null
    _avg: AbilityAttackAvgAggregateOutputType | null
    _sum: AbilityAttackSumAggregateOutputType | null
    _min: AbilityAttackMinAggregateOutputType | null
    _max: AbilityAttackMaxAggregateOutputType | null
  }

  type GetAbilityAttackGroupByPayload<T extends AbilityAttackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbilityAttackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbilityAttackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbilityAttackGroupByOutputType[P]>
            : GetScalarType<T[P], AbilityAttackGroupByOutputType[P]>
        }
      >
    >


  export type AbilityAttackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abilityId?: boolean
    attackId?: boolean
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abilityAttack"]>

  export type AbilityAttackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abilityId?: boolean
    attackId?: boolean
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abilityAttack"]>

  export type AbilityAttackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abilityId?: boolean
    attackId?: boolean
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abilityAttack"]>

  export type AbilityAttackSelectScalar = {
    abilityId?: boolean
    attackId?: boolean
  }

  export type AbilityAttackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"abilityId" | "attackId", ExtArgs["result"]["abilityAttack"]>
  export type AbilityAttackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }
  export type AbilityAttackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }
  export type AbilityAttackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ability?: boolean | AbilityDefaultArgs<ExtArgs>
    attack?: boolean | AttackDefaultArgs<ExtArgs>
  }

  export type $AbilityAttackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AbilityAttack"
    objects: {
      ability: Prisma.$AbilityPayload<ExtArgs>
      attack: Prisma.$AttackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      abilityId: number
      attackId: number
    }, ExtArgs["result"]["abilityAttack"]>
    composites: {}
  }

  type AbilityAttackGetPayload<S extends boolean | null | undefined | AbilityAttackDefaultArgs> = $Result.GetResult<Prisma.$AbilityAttackPayload, S>

  type AbilityAttackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbilityAttackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbilityAttackCountAggregateInputType | true
    }

  export interface AbilityAttackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AbilityAttack'], meta: { name: 'AbilityAttack' } }
    /**
     * Find zero or one AbilityAttack that matches the filter.
     * @param {AbilityAttackFindUniqueArgs} args - Arguments to find a AbilityAttack
     * @example
     * // Get one AbilityAttack
     * const abilityAttack = await prisma.abilityAttack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbilityAttackFindUniqueArgs>(args: SelectSubset<T, AbilityAttackFindUniqueArgs<ExtArgs>>): Prisma__AbilityAttackClient<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AbilityAttack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbilityAttackFindUniqueOrThrowArgs} args - Arguments to find a AbilityAttack
     * @example
     * // Get one AbilityAttack
     * const abilityAttack = await prisma.abilityAttack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbilityAttackFindUniqueOrThrowArgs>(args: SelectSubset<T, AbilityAttackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbilityAttackClient<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbilityAttack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAttackFindFirstArgs} args - Arguments to find a AbilityAttack
     * @example
     * // Get one AbilityAttack
     * const abilityAttack = await prisma.abilityAttack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbilityAttackFindFirstArgs>(args?: SelectSubset<T, AbilityAttackFindFirstArgs<ExtArgs>>): Prisma__AbilityAttackClient<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbilityAttack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAttackFindFirstOrThrowArgs} args - Arguments to find a AbilityAttack
     * @example
     * // Get one AbilityAttack
     * const abilityAttack = await prisma.abilityAttack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbilityAttackFindFirstOrThrowArgs>(args?: SelectSubset<T, AbilityAttackFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbilityAttackClient<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AbilityAttacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAttackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbilityAttacks
     * const abilityAttacks = await prisma.abilityAttack.findMany()
     * 
     * // Get first 10 AbilityAttacks
     * const abilityAttacks = await prisma.abilityAttack.findMany({ take: 10 })
     * 
     * // Only select the `abilityId`
     * const abilityAttackWithAbilityIdOnly = await prisma.abilityAttack.findMany({ select: { abilityId: true } })
     * 
     */
    findMany<T extends AbilityAttackFindManyArgs>(args?: SelectSubset<T, AbilityAttackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AbilityAttack.
     * @param {AbilityAttackCreateArgs} args - Arguments to create a AbilityAttack.
     * @example
     * // Create one AbilityAttack
     * const AbilityAttack = await prisma.abilityAttack.create({
     *   data: {
     *     // ... data to create a AbilityAttack
     *   }
     * })
     * 
     */
    create<T extends AbilityAttackCreateArgs>(args: SelectSubset<T, AbilityAttackCreateArgs<ExtArgs>>): Prisma__AbilityAttackClient<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AbilityAttacks.
     * @param {AbilityAttackCreateManyArgs} args - Arguments to create many AbilityAttacks.
     * @example
     * // Create many AbilityAttacks
     * const abilityAttack = await prisma.abilityAttack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbilityAttackCreateManyArgs>(args?: SelectSubset<T, AbilityAttackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AbilityAttacks and returns the data saved in the database.
     * @param {AbilityAttackCreateManyAndReturnArgs} args - Arguments to create many AbilityAttacks.
     * @example
     * // Create many AbilityAttacks
     * const abilityAttack = await prisma.abilityAttack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AbilityAttacks and only return the `abilityId`
     * const abilityAttackWithAbilityIdOnly = await prisma.abilityAttack.createManyAndReturn({
     *   select: { abilityId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbilityAttackCreateManyAndReturnArgs>(args?: SelectSubset<T, AbilityAttackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AbilityAttack.
     * @param {AbilityAttackDeleteArgs} args - Arguments to delete one AbilityAttack.
     * @example
     * // Delete one AbilityAttack
     * const AbilityAttack = await prisma.abilityAttack.delete({
     *   where: {
     *     // ... filter to delete one AbilityAttack
     *   }
     * })
     * 
     */
    delete<T extends AbilityAttackDeleteArgs>(args: SelectSubset<T, AbilityAttackDeleteArgs<ExtArgs>>): Prisma__AbilityAttackClient<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AbilityAttack.
     * @param {AbilityAttackUpdateArgs} args - Arguments to update one AbilityAttack.
     * @example
     * // Update one AbilityAttack
     * const abilityAttack = await prisma.abilityAttack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbilityAttackUpdateArgs>(args: SelectSubset<T, AbilityAttackUpdateArgs<ExtArgs>>): Prisma__AbilityAttackClient<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AbilityAttacks.
     * @param {AbilityAttackDeleteManyArgs} args - Arguments to filter AbilityAttacks to delete.
     * @example
     * // Delete a few AbilityAttacks
     * const { count } = await prisma.abilityAttack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbilityAttackDeleteManyArgs>(args?: SelectSubset<T, AbilityAttackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbilityAttacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAttackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbilityAttacks
     * const abilityAttack = await prisma.abilityAttack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbilityAttackUpdateManyArgs>(args: SelectSubset<T, AbilityAttackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbilityAttacks and returns the data updated in the database.
     * @param {AbilityAttackUpdateManyAndReturnArgs} args - Arguments to update many AbilityAttacks.
     * @example
     * // Update many AbilityAttacks
     * const abilityAttack = await prisma.abilityAttack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AbilityAttacks and only return the `abilityId`
     * const abilityAttackWithAbilityIdOnly = await prisma.abilityAttack.updateManyAndReturn({
     *   select: { abilityId: true },
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
    updateManyAndReturn<T extends AbilityAttackUpdateManyAndReturnArgs>(args: SelectSubset<T, AbilityAttackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AbilityAttack.
     * @param {AbilityAttackUpsertArgs} args - Arguments to update or create a AbilityAttack.
     * @example
     * // Update or create a AbilityAttack
     * const abilityAttack = await prisma.abilityAttack.upsert({
     *   create: {
     *     // ... data to create a AbilityAttack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbilityAttack we want to update
     *   }
     * })
     */
    upsert<T extends AbilityAttackUpsertArgs>(args: SelectSubset<T, AbilityAttackUpsertArgs<ExtArgs>>): Prisma__AbilityAttackClient<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AbilityAttacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAttackCountArgs} args - Arguments to filter AbilityAttacks to count.
     * @example
     * // Count the number of AbilityAttacks
     * const count = await prisma.abilityAttack.count({
     *   where: {
     *     // ... the filter for the AbilityAttacks we want to count
     *   }
     * })
    **/
    count<T extends AbilityAttackCountArgs>(
      args?: Subset<T, AbilityAttackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbilityAttackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AbilityAttack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAttackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbilityAttackAggregateArgs>(args: Subset<T, AbilityAttackAggregateArgs>): Prisma.PrismaPromise<GetAbilityAttackAggregateType<T>>

    /**
     * Group by AbilityAttack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAttackGroupByArgs} args - Group by arguments.
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
      T extends AbilityAttackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbilityAttackGroupByArgs['orderBy'] }
        : { orderBy?: AbilityAttackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AbilityAttackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbilityAttackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AbilityAttack model
   */
  readonly fields: AbilityAttackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbilityAttack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbilityAttackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ability<T extends AbilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AbilityDefaultArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attack<T extends AttackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttackDefaultArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AbilityAttack model
   */
  interface AbilityAttackFieldRefs {
    readonly abilityId: FieldRef<"AbilityAttack", 'Int'>
    readonly attackId: FieldRef<"AbilityAttack", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AbilityAttack findUnique
   */
  export type AbilityAttackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * Filter, which AbilityAttack to fetch.
     */
    where: AbilityAttackWhereUniqueInput
  }

  /**
   * AbilityAttack findUniqueOrThrow
   */
  export type AbilityAttackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * Filter, which AbilityAttack to fetch.
     */
    where: AbilityAttackWhereUniqueInput
  }

  /**
   * AbilityAttack findFirst
   */
  export type AbilityAttackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * Filter, which AbilityAttack to fetch.
     */
    where?: AbilityAttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbilityAttacks to fetch.
     */
    orderBy?: AbilityAttackOrderByWithRelationInput | AbilityAttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbilityAttacks.
     */
    cursor?: AbilityAttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbilityAttacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbilityAttacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbilityAttacks.
     */
    distinct?: AbilityAttackScalarFieldEnum | AbilityAttackScalarFieldEnum[]
  }

  /**
   * AbilityAttack findFirstOrThrow
   */
  export type AbilityAttackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * Filter, which AbilityAttack to fetch.
     */
    where?: AbilityAttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbilityAttacks to fetch.
     */
    orderBy?: AbilityAttackOrderByWithRelationInput | AbilityAttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbilityAttacks.
     */
    cursor?: AbilityAttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbilityAttacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbilityAttacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbilityAttacks.
     */
    distinct?: AbilityAttackScalarFieldEnum | AbilityAttackScalarFieldEnum[]
  }

  /**
   * AbilityAttack findMany
   */
  export type AbilityAttackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * Filter, which AbilityAttacks to fetch.
     */
    where?: AbilityAttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbilityAttacks to fetch.
     */
    orderBy?: AbilityAttackOrderByWithRelationInput | AbilityAttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AbilityAttacks.
     */
    cursor?: AbilityAttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbilityAttacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbilityAttacks.
     */
    skip?: number
    distinct?: AbilityAttackScalarFieldEnum | AbilityAttackScalarFieldEnum[]
  }

  /**
   * AbilityAttack create
   */
  export type AbilityAttackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * The data needed to create a AbilityAttack.
     */
    data: XOR<AbilityAttackCreateInput, AbilityAttackUncheckedCreateInput>
  }

  /**
   * AbilityAttack createMany
   */
  export type AbilityAttackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AbilityAttacks.
     */
    data: AbilityAttackCreateManyInput | AbilityAttackCreateManyInput[]
  }

  /**
   * AbilityAttack createManyAndReturn
   */
  export type AbilityAttackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * The data used to create many AbilityAttacks.
     */
    data: AbilityAttackCreateManyInput | AbilityAttackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbilityAttack update
   */
  export type AbilityAttackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * The data needed to update a AbilityAttack.
     */
    data: XOR<AbilityAttackUpdateInput, AbilityAttackUncheckedUpdateInput>
    /**
     * Choose, which AbilityAttack to update.
     */
    where: AbilityAttackWhereUniqueInput
  }

  /**
   * AbilityAttack updateMany
   */
  export type AbilityAttackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AbilityAttacks.
     */
    data: XOR<AbilityAttackUpdateManyMutationInput, AbilityAttackUncheckedUpdateManyInput>
    /**
     * Filter which AbilityAttacks to update
     */
    where?: AbilityAttackWhereInput
    /**
     * Limit how many AbilityAttacks to update.
     */
    limit?: number
  }

  /**
   * AbilityAttack updateManyAndReturn
   */
  export type AbilityAttackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * The data used to update AbilityAttacks.
     */
    data: XOR<AbilityAttackUpdateManyMutationInput, AbilityAttackUncheckedUpdateManyInput>
    /**
     * Filter which AbilityAttacks to update
     */
    where?: AbilityAttackWhereInput
    /**
     * Limit how many AbilityAttacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbilityAttack upsert
   */
  export type AbilityAttackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * The filter to search for the AbilityAttack to update in case it exists.
     */
    where: AbilityAttackWhereUniqueInput
    /**
     * In case the AbilityAttack found by the `where` argument doesn't exist, create a new AbilityAttack with this data.
     */
    create: XOR<AbilityAttackCreateInput, AbilityAttackUncheckedCreateInput>
    /**
     * In case the AbilityAttack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbilityAttackUpdateInput, AbilityAttackUncheckedUpdateInput>
  }

  /**
   * AbilityAttack delete
   */
  export type AbilityAttackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    /**
     * Filter which AbilityAttack to delete.
     */
    where: AbilityAttackWhereUniqueInput
  }

  /**
   * AbilityAttack deleteMany
   */
  export type AbilityAttackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbilityAttacks to delete
     */
    where?: AbilityAttackWhereInput
    /**
     * Limit how many AbilityAttacks to delete.
     */
    limit?: number
  }

  /**
   * AbilityAttack without action
   */
  export type AbilityAttackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
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
    id: number | null
    characterId: number | null
    sourceId: number | null
    stacks: number | null
  }

  export type EffectSumAggregateOutputType = {
    id: number | null
    characterId: number | null
    sourceId: number | null
    stacks: number | null
  }

  export type EffectMinAggregateOutputType = {
    id: number | null
    characterId: number | null
    sourceType: string | null
    sourceId: number | null
    sourceName: string | null
    active: boolean | null
    stacks: number | null
    startedAt: Date | null
  }

  export type EffectMaxAggregateOutputType = {
    id: number | null
    characterId: number | null
    sourceType: string | null
    sourceId: number | null
    sourceName: string | null
    active: boolean | null
    stacks: number | null
    startedAt: Date | null
  }

  export type EffectCountAggregateOutputType = {
    id: number
    characterId: number
    sourceType: number
    sourceId: number
    sourceName: number
    active: number
    duration: number
    stacks: number
    startedAt: number
    _all: number
  }


  export type EffectAvgAggregateInputType = {
    id?: true
    characterId?: true
    sourceId?: true
    stacks?: true
  }

  export type EffectSumAggregateInputType = {
    id?: true
    characterId?: true
    sourceId?: true
    stacks?: true
  }

  export type EffectMinAggregateInputType = {
    id?: true
    characterId?: true
    sourceType?: true
    sourceId?: true
    sourceName?: true
    active?: true
    stacks?: true
    startedAt?: true
  }

  export type EffectMaxAggregateInputType = {
    id?: true
    characterId?: true
    sourceType?: true
    sourceId?: true
    sourceName?: true
    active?: true
    stacks?: true
    startedAt?: true
  }

  export type EffectCountAggregateInputType = {
    id?: true
    characterId?: true
    sourceType?: true
    sourceId?: true
    sourceName?: true
    active?: true
    duration?: true
    stacks?: true
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
    id: number
    characterId: number
    sourceType: string
    sourceId: number | null
    sourceName: string
    active: boolean
    duration: JsonValue
    stacks: number
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
    id?: boolean
    characterId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceName?: boolean
    active?: boolean
    duration?: boolean
    stacks?: boolean
    startedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    modifiers?: boolean | Effect$modifiersArgs<ExtArgs>
    _count?: boolean | EffectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effect"]>

  export type EffectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceName?: boolean
    active?: boolean
    duration?: boolean
    stacks?: boolean
    startedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effect"]>

  export type EffectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceName?: boolean
    active?: boolean
    duration?: boolean
    stacks?: boolean
    startedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effect"]>

  export type EffectSelectScalar = {
    id?: boolean
    characterId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceName?: boolean
    active?: boolean
    duration?: boolean
    stacks?: boolean
    startedAt?: boolean
  }

  export type EffectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "sourceType" | "sourceId" | "sourceName" | "active" | "duration" | "stacks" | "startedAt", ExtArgs["result"]["effect"]>
  export type EffectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    modifiers?: boolean | Effect$modifiersArgs<ExtArgs>
    _count?: boolean | EffectCountOutputTypeDefaultArgs<ExtArgs>
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
      modifiers: Prisma.$EffectModifierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterId: number
      sourceType: string
      sourceId: number | null
      sourceName: string
      active: boolean
      duration: Prisma.JsonValue
      stacks: number
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
     * // Only select the `id`
     * const effectWithIdOnly = await prisma.effect.findMany({ select: { id: true } })
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
     * // Create many Effects and only return the `id`
     * const effectWithIdOnly = await prisma.effect.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Effects and only return the `id`
     * const effectWithIdOnly = await prisma.effect.updateManyAndReturn({
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
    modifiers<T extends Effect$modifiersArgs<ExtArgs> = {}>(args?: Subset<T, Effect$modifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Effect", 'Int'>
    readonly characterId: FieldRef<"Effect", 'Int'>
    readonly sourceType: FieldRef<"Effect", 'String'>
    readonly sourceId: FieldRef<"Effect", 'Int'>
    readonly sourceName: FieldRef<"Effect", 'String'>
    readonly active: FieldRef<"Effect", 'Boolean'>
    readonly duration: FieldRef<"Effect", 'Json'>
    readonly stacks: FieldRef<"Effect", 'Int'>
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
   * Effect.modifiers
   */
  export type Effect$modifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    where?: EffectModifierWhereInput
    orderBy?: EffectModifierOrderByWithRelationInput | EffectModifierOrderByWithRelationInput[]
    cursor?: EffectModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EffectModifierScalarFieldEnum | EffectModifierScalarFieldEnum[]
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
   * Model EffectModifier
   */

  export type AggregateEffectModifier = {
    _count: EffectModifierCountAggregateOutputType | null
    _avg: EffectModifierAvgAggregateOutputType | null
    _sum: EffectModifierSumAggregateOutputType | null
    _min: EffectModifierMinAggregateOutputType | null
    _max: EffectModifierMaxAggregateOutputType | null
  }

  export type EffectModifierAvgAggregateOutputType = {
    effectId: number | null
    modifierId: number | null
  }

  export type EffectModifierSumAggregateOutputType = {
    effectId: number | null
    modifierId: number | null
  }

  export type EffectModifierMinAggregateOutputType = {
    effectId: number | null
    modifierId: number | null
  }

  export type EffectModifierMaxAggregateOutputType = {
    effectId: number | null
    modifierId: number | null
  }

  export type EffectModifierCountAggregateOutputType = {
    effectId: number
    modifierId: number
    _all: number
  }


  export type EffectModifierAvgAggregateInputType = {
    effectId?: true
    modifierId?: true
  }

  export type EffectModifierSumAggregateInputType = {
    effectId?: true
    modifierId?: true
  }

  export type EffectModifierMinAggregateInputType = {
    effectId?: true
    modifierId?: true
  }

  export type EffectModifierMaxAggregateInputType = {
    effectId?: true
    modifierId?: true
  }

  export type EffectModifierCountAggregateInputType = {
    effectId?: true
    modifierId?: true
    _all?: true
  }

  export type EffectModifierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EffectModifier to aggregate.
     */
    where?: EffectModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EffectModifiers to fetch.
     */
    orderBy?: EffectModifierOrderByWithRelationInput | EffectModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EffectModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EffectModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EffectModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EffectModifiers
    **/
    _count?: true | EffectModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EffectModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EffectModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EffectModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EffectModifierMaxAggregateInputType
  }

  export type GetEffectModifierAggregateType<T extends EffectModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateEffectModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEffectModifier[P]>
      : GetScalarType<T[P], AggregateEffectModifier[P]>
  }




  export type EffectModifierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EffectModifierWhereInput
    orderBy?: EffectModifierOrderByWithAggregationInput | EffectModifierOrderByWithAggregationInput[]
    by: EffectModifierScalarFieldEnum[] | EffectModifierScalarFieldEnum
    having?: EffectModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EffectModifierCountAggregateInputType | true
    _avg?: EffectModifierAvgAggregateInputType
    _sum?: EffectModifierSumAggregateInputType
    _min?: EffectModifierMinAggregateInputType
    _max?: EffectModifierMaxAggregateInputType
  }

  export type EffectModifierGroupByOutputType = {
    effectId: number
    modifierId: number
    _count: EffectModifierCountAggregateOutputType | null
    _avg: EffectModifierAvgAggregateOutputType | null
    _sum: EffectModifierSumAggregateOutputType | null
    _min: EffectModifierMinAggregateOutputType | null
    _max: EffectModifierMaxAggregateOutputType | null
  }

  type GetEffectModifierGroupByPayload<T extends EffectModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EffectModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EffectModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EffectModifierGroupByOutputType[P]>
            : GetScalarType<T[P], EffectModifierGroupByOutputType[P]>
        }
      >
    >


  export type EffectModifierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    effectId?: boolean
    modifierId?: boolean
    effect?: boolean | EffectDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effectModifier"]>

  export type EffectModifierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    effectId?: boolean
    modifierId?: boolean
    effect?: boolean | EffectDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effectModifier"]>

  export type EffectModifierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    effectId?: boolean
    modifierId?: boolean
    effect?: boolean | EffectDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["effectModifier"]>

  export type EffectModifierSelectScalar = {
    effectId?: boolean
    modifierId?: boolean
  }

  export type EffectModifierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"effectId" | "modifierId", ExtArgs["result"]["effectModifier"]>
  export type EffectModifierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    effect?: boolean | EffectDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }
  export type EffectModifierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    effect?: boolean | EffectDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }
  export type EffectModifierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    effect?: boolean | EffectDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }

  export type $EffectModifierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EffectModifier"
    objects: {
      effect: Prisma.$EffectPayload<ExtArgs>
      modifier: Prisma.$ModifierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      effectId: number
      modifierId: number
    }, ExtArgs["result"]["effectModifier"]>
    composites: {}
  }

  type EffectModifierGetPayload<S extends boolean | null | undefined | EffectModifierDefaultArgs> = $Result.GetResult<Prisma.$EffectModifierPayload, S>

  type EffectModifierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EffectModifierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EffectModifierCountAggregateInputType | true
    }

  export interface EffectModifierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EffectModifier'], meta: { name: 'EffectModifier' } }
    /**
     * Find zero or one EffectModifier that matches the filter.
     * @param {EffectModifierFindUniqueArgs} args - Arguments to find a EffectModifier
     * @example
     * // Get one EffectModifier
     * const effectModifier = await prisma.effectModifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EffectModifierFindUniqueArgs>(args: SelectSubset<T, EffectModifierFindUniqueArgs<ExtArgs>>): Prisma__EffectModifierClient<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EffectModifier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EffectModifierFindUniqueOrThrowArgs} args - Arguments to find a EffectModifier
     * @example
     * // Get one EffectModifier
     * const effectModifier = await prisma.effectModifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EffectModifierFindUniqueOrThrowArgs>(args: SelectSubset<T, EffectModifierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EffectModifierClient<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EffectModifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectModifierFindFirstArgs} args - Arguments to find a EffectModifier
     * @example
     * // Get one EffectModifier
     * const effectModifier = await prisma.effectModifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EffectModifierFindFirstArgs>(args?: SelectSubset<T, EffectModifierFindFirstArgs<ExtArgs>>): Prisma__EffectModifierClient<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EffectModifier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectModifierFindFirstOrThrowArgs} args - Arguments to find a EffectModifier
     * @example
     * // Get one EffectModifier
     * const effectModifier = await prisma.effectModifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EffectModifierFindFirstOrThrowArgs>(args?: SelectSubset<T, EffectModifierFindFirstOrThrowArgs<ExtArgs>>): Prisma__EffectModifierClient<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EffectModifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectModifierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EffectModifiers
     * const effectModifiers = await prisma.effectModifier.findMany()
     * 
     * // Get first 10 EffectModifiers
     * const effectModifiers = await prisma.effectModifier.findMany({ take: 10 })
     * 
     * // Only select the `effectId`
     * const effectModifierWithEffectIdOnly = await prisma.effectModifier.findMany({ select: { effectId: true } })
     * 
     */
    findMany<T extends EffectModifierFindManyArgs>(args?: SelectSubset<T, EffectModifierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EffectModifier.
     * @param {EffectModifierCreateArgs} args - Arguments to create a EffectModifier.
     * @example
     * // Create one EffectModifier
     * const EffectModifier = await prisma.effectModifier.create({
     *   data: {
     *     // ... data to create a EffectModifier
     *   }
     * })
     * 
     */
    create<T extends EffectModifierCreateArgs>(args: SelectSubset<T, EffectModifierCreateArgs<ExtArgs>>): Prisma__EffectModifierClient<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EffectModifiers.
     * @param {EffectModifierCreateManyArgs} args - Arguments to create many EffectModifiers.
     * @example
     * // Create many EffectModifiers
     * const effectModifier = await prisma.effectModifier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EffectModifierCreateManyArgs>(args?: SelectSubset<T, EffectModifierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EffectModifiers and returns the data saved in the database.
     * @param {EffectModifierCreateManyAndReturnArgs} args - Arguments to create many EffectModifiers.
     * @example
     * // Create many EffectModifiers
     * const effectModifier = await prisma.effectModifier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EffectModifiers and only return the `effectId`
     * const effectModifierWithEffectIdOnly = await prisma.effectModifier.createManyAndReturn({
     *   select: { effectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EffectModifierCreateManyAndReturnArgs>(args?: SelectSubset<T, EffectModifierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EffectModifier.
     * @param {EffectModifierDeleteArgs} args - Arguments to delete one EffectModifier.
     * @example
     * // Delete one EffectModifier
     * const EffectModifier = await prisma.effectModifier.delete({
     *   where: {
     *     // ... filter to delete one EffectModifier
     *   }
     * })
     * 
     */
    delete<T extends EffectModifierDeleteArgs>(args: SelectSubset<T, EffectModifierDeleteArgs<ExtArgs>>): Prisma__EffectModifierClient<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EffectModifier.
     * @param {EffectModifierUpdateArgs} args - Arguments to update one EffectModifier.
     * @example
     * // Update one EffectModifier
     * const effectModifier = await prisma.effectModifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EffectModifierUpdateArgs>(args: SelectSubset<T, EffectModifierUpdateArgs<ExtArgs>>): Prisma__EffectModifierClient<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EffectModifiers.
     * @param {EffectModifierDeleteManyArgs} args - Arguments to filter EffectModifiers to delete.
     * @example
     * // Delete a few EffectModifiers
     * const { count } = await prisma.effectModifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EffectModifierDeleteManyArgs>(args?: SelectSubset<T, EffectModifierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EffectModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EffectModifiers
     * const effectModifier = await prisma.effectModifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EffectModifierUpdateManyArgs>(args: SelectSubset<T, EffectModifierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EffectModifiers and returns the data updated in the database.
     * @param {EffectModifierUpdateManyAndReturnArgs} args - Arguments to update many EffectModifiers.
     * @example
     * // Update many EffectModifiers
     * const effectModifier = await prisma.effectModifier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EffectModifiers and only return the `effectId`
     * const effectModifierWithEffectIdOnly = await prisma.effectModifier.updateManyAndReturn({
     *   select: { effectId: true },
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
    updateManyAndReturn<T extends EffectModifierUpdateManyAndReturnArgs>(args: SelectSubset<T, EffectModifierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EffectModifier.
     * @param {EffectModifierUpsertArgs} args - Arguments to update or create a EffectModifier.
     * @example
     * // Update or create a EffectModifier
     * const effectModifier = await prisma.effectModifier.upsert({
     *   create: {
     *     // ... data to create a EffectModifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EffectModifier we want to update
     *   }
     * })
     */
    upsert<T extends EffectModifierUpsertArgs>(args: SelectSubset<T, EffectModifierUpsertArgs<ExtArgs>>): Prisma__EffectModifierClient<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EffectModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectModifierCountArgs} args - Arguments to filter EffectModifiers to count.
     * @example
     * // Count the number of EffectModifiers
     * const count = await prisma.effectModifier.count({
     *   where: {
     *     // ... the filter for the EffectModifiers we want to count
     *   }
     * })
    **/
    count<T extends EffectModifierCountArgs>(
      args?: Subset<T, EffectModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EffectModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EffectModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EffectModifierAggregateArgs>(args: Subset<T, EffectModifierAggregateArgs>): Prisma.PrismaPromise<GetEffectModifierAggregateType<T>>

    /**
     * Group by EffectModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EffectModifierGroupByArgs} args - Group by arguments.
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
      T extends EffectModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EffectModifierGroupByArgs['orderBy'] }
        : { orderBy?: EffectModifierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EffectModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEffectModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EffectModifier model
   */
  readonly fields: EffectModifierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EffectModifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EffectModifierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    effect<T extends EffectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EffectDefaultArgs<ExtArgs>>): Prisma__EffectClient<$Result.GetResult<Prisma.$EffectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modifier<T extends ModifierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModifierDefaultArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EffectModifier model
   */
  interface EffectModifierFieldRefs {
    readonly effectId: FieldRef<"EffectModifier", 'Int'>
    readonly modifierId: FieldRef<"EffectModifier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EffectModifier findUnique
   */
  export type EffectModifierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * Filter, which EffectModifier to fetch.
     */
    where: EffectModifierWhereUniqueInput
  }

  /**
   * EffectModifier findUniqueOrThrow
   */
  export type EffectModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * Filter, which EffectModifier to fetch.
     */
    where: EffectModifierWhereUniqueInput
  }

  /**
   * EffectModifier findFirst
   */
  export type EffectModifierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * Filter, which EffectModifier to fetch.
     */
    where?: EffectModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EffectModifiers to fetch.
     */
    orderBy?: EffectModifierOrderByWithRelationInput | EffectModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EffectModifiers.
     */
    cursor?: EffectModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EffectModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EffectModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EffectModifiers.
     */
    distinct?: EffectModifierScalarFieldEnum | EffectModifierScalarFieldEnum[]
  }

  /**
   * EffectModifier findFirstOrThrow
   */
  export type EffectModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * Filter, which EffectModifier to fetch.
     */
    where?: EffectModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EffectModifiers to fetch.
     */
    orderBy?: EffectModifierOrderByWithRelationInput | EffectModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EffectModifiers.
     */
    cursor?: EffectModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EffectModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EffectModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EffectModifiers.
     */
    distinct?: EffectModifierScalarFieldEnum | EffectModifierScalarFieldEnum[]
  }

  /**
   * EffectModifier findMany
   */
  export type EffectModifierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * Filter, which EffectModifiers to fetch.
     */
    where?: EffectModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EffectModifiers to fetch.
     */
    orderBy?: EffectModifierOrderByWithRelationInput | EffectModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EffectModifiers.
     */
    cursor?: EffectModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EffectModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EffectModifiers.
     */
    skip?: number
    distinct?: EffectModifierScalarFieldEnum | EffectModifierScalarFieldEnum[]
  }

  /**
   * EffectModifier create
   */
  export type EffectModifierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a EffectModifier.
     */
    data: XOR<EffectModifierCreateInput, EffectModifierUncheckedCreateInput>
  }

  /**
   * EffectModifier createMany
   */
  export type EffectModifierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EffectModifiers.
     */
    data: EffectModifierCreateManyInput | EffectModifierCreateManyInput[]
  }

  /**
   * EffectModifier createManyAndReturn
   */
  export type EffectModifierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * The data used to create many EffectModifiers.
     */
    data: EffectModifierCreateManyInput | EffectModifierCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EffectModifier update
   */
  export type EffectModifierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a EffectModifier.
     */
    data: XOR<EffectModifierUpdateInput, EffectModifierUncheckedUpdateInput>
    /**
     * Choose, which EffectModifier to update.
     */
    where: EffectModifierWhereUniqueInput
  }

  /**
   * EffectModifier updateMany
   */
  export type EffectModifierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EffectModifiers.
     */
    data: XOR<EffectModifierUpdateManyMutationInput, EffectModifierUncheckedUpdateManyInput>
    /**
     * Filter which EffectModifiers to update
     */
    where?: EffectModifierWhereInput
    /**
     * Limit how many EffectModifiers to update.
     */
    limit?: number
  }

  /**
   * EffectModifier updateManyAndReturn
   */
  export type EffectModifierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * The data used to update EffectModifiers.
     */
    data: XOR<EffectModifierUpdateManyMutationInput, EffectModifierUncheckedUpdateManyInput>
    /**
     * Filter which EffectModifiers to update
     */
    where?: EffectModifierWhereInput
    /**
     * Limit how many EffectModifiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EffectModifier upsert
   */
  export type EffectModifierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the EffectModifier to update in case it exists.
     */
    where: EffectModifierWhereUniqueInput
    /**
     * In case the EffectModifier found by the `where` argument doesn't exist, create a new EffectModifier with this data.
     */
    create: XOR<EffectModifierCreateInput, EffectModifierUncheckedCreateInput>
    /**
     * In case the EffectModifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EffectModifierUpdateInput, EffectModifierUncheckedUpdateInput>
  }

  /**
   * EffectModifier delete
   */
  export type EffectModifierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    /**
     * Filter which EffectModifier to delete.
     */
    where: EffectModifierWhereUniqueInput
  }

  /**
   * EffectModifier deleteMany
   */
  export type EffectModifierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EffectModifiers to delete
     */
    where?: EffectModifierWhereInput
    /**
     * Limit how many EffectModifiers to delete.
     */
    limit?: number
  }

  /**
   * EffectModifier without action
   */
  export type EffectModifierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
  }


  /**
   * Model Modifier
   */

  export type AggregateModifier = {
    _count: ModifierCountAggregateOutputType | null
    _avg: ModifierAvgAggregateOutputType | null
    _sum: ModifierSumAggregateOutputType | null
    _min: ModifierMinAggregateOutputType | null
    _max: ModifierMaxAggregateOutputType | null
  }

  export type ModifierAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type ModifierSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type ModifierMinAggregateOutputType = {
    id: number | null
    value: number | null
    type: string | null
  }

  export type ModifierMaxAggregateOutputType = {
    id: number | null
    value: number | null
    type: string | null
  }

  export type ModifierCountAggregateOutputType = {
    id: number
    target: number
    value: number
    type: number
    _all: number
  }


  export type ModifierAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type ModifierSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type ModifierMinAggregateInputType = {
    id?: true
    value?: true
    type?: true
  }

  export type ModifierMaxAggregateInputType = {
    id?: true
    value?: true
    type?: true
  }

  export type ModifierCountAggregateInputType = {
    id?: true
    target?: true
    value?: true
    type?: true
    _all?: true
  }

  export type ModifierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modifier to aggregate.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modifiers
    **/
    _count?: true | ModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModifierMaxAggregateInputType
  }

  export type GetModifierAggregateType<T extends ModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModifier[P]>
      : GetScalarType<T[P], AggregateModifier[P]>
  }




  export type ModifierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierWhereInput
    orderBy?: ModifierOrderByWithAggregationInput | ModifierOrderByWithAggregationInput[]
    by: ModifierScalarFieldEnum[] | ModifierScalarFieldEnum
    having?: ModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModifierCountAggregateInputType | true
    _avg?: ModifierAvgAggregateInputType
    _sum?: ModifierSumAggregateInputType
    _min?: ModifierMinAggregateInputType
    _max?: ModifierMaxAggregateInputType
  }

  export type ModifierGroupByOutputType = {
    id: number
    target: JsonValue
    value: number
    type: string
    _count: ModifierCountAggregateOutputType | null
    _avg: ModifierAvgAggregateOutputType | null
    _sum: ModifierSumAggregateOutputType | null
    _min: ModifierMinAggregateOutputType | null
    _max: ModifierMaxAggregateOutputType | null
  }

  type GetModifierGroupByPayload<T extends ModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModifierGroupByOutputType[P]>
            : GetScalarType<T[P], ModifierGroupByOutputType[P]>
        }
      >
    >


  export type ModifierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    target?: boolean
    value?: boolean
    type?: boolean
    effects?: boolean | Modifier$effectsArgs<ExtArgs>
    abilities?: boolean | Modifier$abilitiesArgs<ExtArgs>
    items?: boolean | Modifier$itemsArgs<ExtArgs>
    _count?: boolean | ModifierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modifier"]>

  export type ModifierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    target?: boolean
    value?: boolean
    type?: boolean
  }, ExtArgs["result"]["modifier"]>

  export type ModifierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    target?: boolean
    value?: boolean
    type?: boolean
  }, ExtArgs["result"]["modifier"]>

  export type ModifierSelectScalar = {
    id?: boolean
    target?: boolean
    value?: boolean
    type?: boolean
  }

  export type ModifierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "target" | "value" | "type", ExtArgs["result"]["modifier"]>
  export type ModifierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    effects?: boolean | Modifier$effectsArgs<ExtArgs>
    abilities?: boolean | Modifier$abilitiesArgs<ExtArgs>
    items?: boolean | Modifier$itemsArgs<ExtArgs>
    _count?: boolean | ModifierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModifierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModifierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModifierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modifier"
    objects: {
      effects: Prisma.$EffectModifierPayload<ExtArgs>[]
      abilities: Prisma.$AbilityModifierPayload<ExtArgs>[]
      items: Prisma.$ItemModifierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      target: Prisma.JsonValue
      value: number
      type: string
    }, ExtArgs["result"]["modifier"]>
    composites: {}
  }

  type ModifierGetPayload<S extends boolean | null | undefined | ModifierDefaultArgs> = $Result.GetResult<Prisma.$ModifierPayload, S>

  type ModifierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModifierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModifierCountAggregateInputType | true
    }

  export interface ModifierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modifier'], meta: { name: 'Modifier' } }
    /**
     * Find zero or one Modifier that matches the filter.
     * @param {ModifierFindUniqueArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModifierFindUniqueArgs>(args: SelectSubset<T, ModifierFindUniqueArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modifier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModifierFindUniqueOrThrowArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModifierFindUniqueOrThrowArgs>(args: SelectSubset<T, ModifierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindFirstArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModifierFindFirstArgs>(args?: SelectSubset<T, ModifierFindFirstArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modifier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindFirstOrThrowArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModifierFindFirstOrThrowArgs>(args?: SelectSubset<T, ModifierFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modifiers
     * const modifiers = await prisma.modifier.findMany()
     * 
     * // Get first 10 Modifiers
     * const modifiers = await prisma.modifier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modifierWithIdOnly = await prisma.modifier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModifierFindManyArgs>(args?: SelectSubset<T, ModifierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modifier.
     * @param {ModifierCreateArgs} args - Arguments to create a Modifier.
     * @example
     * // Create one Modifier
     * const Modifier = await prisma.modifier.create({
     *   data: {
     *     // ... data to create a Modifier
     *   }
     * })
     * 
     */
    create<T extends ModifierCreateArgs>(args: SelectSubset<T, ModifierCreateArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modifiers.
     * @param {ModifierCreateManyArgs} args - Arguments to create many Modifiers.
     * @example
     * // Create many Modifiers
     * const modifier = await prisma.modifier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModifierCreateManyArgs>(args?: SelectSubset<T, ModifierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modifiers and returns the data saved in the database.
     * @param {ModifierCreateManyAndReturnArgs} args - Arguments to create many Modifiers.
     * @example
     * // Create many Modifiers
     * const modifier = await prisma.modifier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modifiers and only return the `id`
     * const modifierWithIdOnly = await prisma.modifier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModifierCreateManyAndReturnArgs>(args?: SelectSubset<T, ModifierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modifier.
     * @param {ModifierDeleteArgs} args - Arguments to delete one Modifier.
     * @example
     * // Delete one Modifier
     * const Modifier = await prisma.modifier.delete({
     *   where: {
     *     // ... filter to delete one Modifier
     *   }
     * })
     * 
     */
    delete<T extends ModifierDeleteArgs>(args: SelectSubset<T, ModifierDeleteArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modifier.
     * @param {ModifierUpdateArgs} args - Arguments to update one Modifier.
     * @example
     * // Update one Modifier
     * const modifier = await prisma.modifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModifierUpdateArgs>(args: SelectSubset<T, ModifierUpdateArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modifiers.
     * @param {ModifierDeleteManyArgs} args - Arguments to filter Modifiers to delete.
     * @example
     * // Delete a few Modifiers
     * const { count } = await prisma.modifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModifierDeleteManyArgs>(args?: SelectSubset<T, ModifierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modifiers
     * const modifier = await prisma.modifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModifierUpdateManyArgs>(args: SelectSubset<T, ModifierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modifiers and returns the data updated in the database.
     * @param {ModifierUpdateManyAndReturnArgs} args - Arguments to update many Modifiers.
     * @example
     * // Update many Modifiers
     * const modifier = await prisma.modifier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modifiers and only return the `id`
     * const modifierWithIdOnly = await prisma.modifier.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModifierUpdateManyAndReturnArgs>(args: SelectSubset<T, ModifierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modifier.
     * @param {ModifierUpsertArgs} args - Arguments to update or create a Modifier.
     * @example
     * // Update or create a Modifier
     * const modifier = await prisma.modifier.upsert({
     *   create: {
     *     // ... data to create a Modifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modifier we want to update
     *   }
     * })
     */
    upsert<T extends ModifierUpsertArgs>(args: SelectSubset<T, ModifierUpsertArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierCountArgs} args - Arguments to filter Modifiers to count.
     * @example
     * // Count the number of Modifiers
     * const count = await prisma.modifier.count({
     *   where: {
     *     // ... the filter for the Modifiers we want to count
     *   }
     * })
    **/
    count<T extends ModifierCountArgs>(
      args?: Subset<T, ModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModifierAggregateArgs>(args: Subset<T, ModifierAggregateArgs>): Prisma.PrismaPromise<GetModifierAggregateType<T>>

    /**
     * Group by Modifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupByArgs} args - Group by arguments.
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
      T extends ModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModifierGroupByArgs['orderBy'] }
        : { orderBy?: ModifierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modifier model
   */
  readonly fields: ModifierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModifierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    effects<T extends Modifier$effectsArgs<ExtArgs> = {}>(args?: Subset<T, Modifier$effectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EffectModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    abilities<T extends Modifier$abilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Modifier$abilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends Modifier$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Modifier$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemModifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Modifier model
   */
  interface ModifierFieldRefs {
    readonly id: FieldRef<"Modifier", 'Int'>
    readonly target: FieldRef<"Modifier", 'Json'>
    readonly value: FieldRef<"Modifier", 'Int'>
    readonly type: FieldRef<"Modifier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Modifier findUnique
   */
  export type ModifierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifier to fetch.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier findUniqueOrThrow
   */
  export type ModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifier to fetch.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier findFirst
   */
  export type ModifierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifier to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modifiers.
     */
    distinct?: ModifierScalarFieldEnum | ModifierScalarFieldEnum[]
  }

  /**
   * Modifier findFirstOrThrow
   */
  export type ModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifier to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modifiers.
     */
    distinct?: ModifierScalarFieldEnum | ModifierScalarFieldEnum[]
  }

  /**
   * Modifier findMany
   */
  export type ModifierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifiers to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    distinct?: ModifierScalarFieldEnum | ModifierScalarFieldEnum[]
  }

  /**
   * Modifier create
   */
  export type ModifierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a Modifier.
     */
    data: XOR<ModifierCreateInput, ModifierUncheckedCreateInput>
  }

  /**
   * Modifier createMany
   */
  export type ModifierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modifiers.
     */
    data: ModifierCreateManyInput | ModifierCreateManyInput[]
  }

  /**
   * Modifier createManyAndReturn
   */
  export type ModifierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * The data used to create many Modifiers.
     */
    data: ModifierCreateManyInput | ModifierCreateManyInput[]
  }

  /**
   * Modifier update
   */
  export type ModifierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a Modifier.
     */
    data: XOR<ModifierUpdateInput, ModifierUncheckedUpdateInput>
    /**
     * Choose, which Modifier to update.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier updateMany
   */
  export type ModifierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modifiers.
     */
    data: XOR<ModifierUpdateManyMutationInput, ModifierUncheckedUpdateManyInput>
    /**
     * Filter which Modifiers to update
     */
    where?: ModifierWhereInput
    /**
     * Limit how many Modifiers to update.
     */
    limit?: number
  }

  /**
   * Modifier updateManyAndReturn
   */
  export type ModifierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * The data used to update Modifiers.
     */
    data: XOR<ModifierUpdateManyMutationInput, ModifierUncheckedUpdateManyInput>
    /**
     * Filter which Modifiers to update
     */
    where?: ModifierWhereInput
    /**
     * Limit how many Modifiers to update.
     */
    limit?: number
  }

  /**
   * Modifier upsert
   */
  export type ModifierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the Modifier to update in case it exists.
     */
    where: ModifierWhereUniqueInput
    /**
     * In case the Modifier found by the `where` argument doesn't exist, create a new Modifier with this data.
     */
    create: XOR<ModifierCreateInput, ModifierUncheckedCreateInput>
    /**
     * In case the Modifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModifierUpdateInput, ModifierUncheckedUpdateInput>
  }

  /**
   * Modifier delete
   */
  export type ModifierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter which Modifier to delete.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier deleteMany
   */
  export type ModifierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modifiers to delete
     */
    where?: ModifierWhereInput
    /**
     * Limit how many Modifiers to delete.
     */
    limit?: number
  }

  /**
   * Modifier.effects
   */
  export type Modifier$effectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EffectModifier
     */
    select?: EffectModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EffectModifier
     */
    omit?: EffectModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EffectModifierInclude<ExtArgs> | null
    where?: EffectModifierWhereInput
    orderBy?: EffectModifierOrderByWithRelationInput | EffectModifierOrderByWithRelationInput[]
    cursor?: EffectModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EffectModifierScalarFieldEnum | EffectModifierScalarFieldEnum[]
  }

  /**
   * Modifier.abilities
   */
  export type Modifier$abilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityModifier
     */
    select?: AbilityModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityModifier
     */
    omit?: AbilityModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityModifierInclude<ExtArgs> | null
    where?: AbilityModifierWhereInput
    orderBy?: AbilityModifierOrderByWithRelationInput | AbilityModifierOrderByWithRelationInput[]
    cursor?: AbilityModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilityModifierScalarFieldEnum | AbilityModifierScalarFieldEnum[]
  }

  /**
   * Modifier.items
   */
  export type Modifier$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemModifier
     */
    select?: ItemModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemModifier
     */
    omit?: ItemModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemModifierInclude<ExtArgs> | null
    where?: ItemModifierWhereInput
    orderBy?: ItemModifierOrderByWithRelationInput | ItemModifierOrderByWithRelationInput[]
    cursor?: ItemModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemModifierScalarFieldEnum | ItemModifierScalarFieldEnum[]
  }

  /**
   * Modifier without action
   */
  export type ModifierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modifier
     */
    omit?: ModifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
  }


  /**
   * Model Attack
   */

  export type AggregateAttack = {
    _count: AttackCountAggregateOutputType | null
    _avg: AttackAvgAggregateOutputType | null
    _sum: AttackSumAggregateOutputType | null
    _min: AttackMinAggregateOutputType | null
    _max: AttackMaxAggregateOutputType | null
  }

  export type AttackAvgAggregateOutputType = {
    id: number | null
  }

  export type AttackSumAggregateOutputType = {
    id: number | null
  }

  export type AttackMinAggregateOutputType = {
    id: number | null
    category: string | null
  }

  export type AttackMaxAggregateOutputType = {
    id: number | null
    category: string | null
  }

  export type AttackCountAggregateOutputType = {
    id: number
    category: number
    attackRoll: number
    damage: number
    critical: number
    _all: number
  }


  export type AttackAvgAggregateInputType = {
    id?: true
  }

  export type AttackSumAggregateInputType = {
    id?: true
  }

  export type AttackMinAggregateInputType = {
    id?: true
    category?: true
  }

  export type AttackMaxAggregateInputType = {
    id?: true
    category?: true
  }

  export type AttackCountAggregateInputType = {
    id?: true
    category?: true
    attackRoll?: true
    damage?: true
    critical?: true
    _all?: true
  }

  export type AttackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attack to aggregate.
     */
    where?: AttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attacks to fetch.
     */
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attacks
    **/
    _count?: true | AttackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttackMaxAggregateInputType
  }

  export type GetAttackAggregateType<T extends AttackAggregateArgs> = {
        [P in keyof T & keyof AggregateAttack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttack[P]>
      : GetScalarType<T[P], AggregateAttack[P]>
  }




  export type AttackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttackWhereInput
    orderBy?: AttackOrderByWithAggregationInput | AttackOrderByWithAggregationInput[]
    by: AttackScalarFieldEnum[] | AttackScalarFieldEnum
    having?: AttackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttackCountAggregateInputType | true
    _avg?: AttackAvgAggregateInputType
    _sum?: AttackSumAggregateInputType
    _min?: AttackMinAggregateInputType
    _max?: AttackMaxAggregateInputType
  }

  export type AttackGroupByOutputType = {
    id: number
    category: string
    attackRoll: JsonValue
    damage: JsonValue
    critical: JsonValue
    _count: AttackCountAggregateOutputType | null
    _avg: AttackAvgAggregateOutputType | null
    _sum: AttackSumAggregateOutputType | null
    _min: AttackMinAggregateOutputType | null
    _max: AttackMaxAggregateOutputType | null
  }

  type GetAttackGroupByPayload<T extends AttackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttackGroupByOutputType[P]>
            : GetScalarType<T[P], AttackGroupByOutputType[P]>
        }
      >
    >


  export type AttackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    attackRoll?: boolean
    damage?: boolean
    critical?: boolean
    items?: boolean | Attack$itemsArgs<ExtArgs>
    ability?: boolean | Attack$abilityArgs<ExtArgs>
    _count?: boolean | AttackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attack"]>

  export type AttackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    attackRoll?: boolean
    damage?: boolean
    critical?: boolean
  }, ExtArgs["result"]["attack"]>

  export type AttackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    attackRoll?: boolean
    damage?: boolean
    critical?: boolean
  }, ExtArgs["result"]["attack"]>

  export type AttackSelectScalar = {
    id?: boolean
    category?: boolean
    attackRoll?: boolean
    damage?: boolean
    critical?: boolean
  }

  export type AttackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "attackRoll" | "damage" | "critical", ExtArgs["result"]["attack"]>
  export type AttackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Attack$itemsArgs<ExtArgs>
    ability?: boolean | Attack$abilityArgs<ExtArgs>
    _count?: boolean | AttackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attack"
    objects: {
      items: Prisma.$ItemAttackPayload<ExtArgs>[]
      ability: Prisma.$AbilityAttackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      attackRoll: Prisma.JsonValue
      damage: Prisma.JsonValue
      critical: Prisma.JsonValue
    }, ExtArgs["result"]["attack"]>
    composites: {}
  }

  type AttackGetPayload<S extends boolean | null | undefined | AttackDefaultArgs> = $Result.GetResult<Prisma.$AttackPayload, S>

  type AttackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttackCountAggregateInputType | true
    }

  export interface AttackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attack'], meta: { name: 'Attack' } }
    /**
     * Find zero or one Attack that matches the filter.
     * @param {AttackFindUniqueArgs} args - Arguments to find a Attack
     * @example
     * // Get one Attack
     * const attack = await prisma.attack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttackFindUniqueArgs>(args: SelectSubset<T, AttackFindUniqueArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttackFindUniqueOrThrowArgs} args - Arguments to find a Attack
     * @example
     * // Get one Attack
     * const attack = await prisma.attack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttackFindUniqueOrThrowArgs>(args: SelectSubset<T, AttackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackFindFirstArgs} args - Arguments to find a Attack
     * @example
     * // Get one Attack
     * const attack = await prisma.attack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttackFindFirstArgs>(args?: SelectSubset<T, AttackFindFirstArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackFindFirstOrThrowArgs} args - Arguments to find a Attack
     * @example
     * // Get one Attack
     * const attack = await prisma.attack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttackFindFirstOrThrowArgs>(args?: SelectSubset<T, AttackFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attacks
     * const attacks = await prisma.attack.findMany()
     * 
     * // Get first 10 Attacks
     * const attacks = await prisma.attack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attackWithIdOnly = await prisma.attack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttackFindManyArgs>(args?: SelectSubset<T, AttackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attack.
     * @param {AttackCreateArgs} args - Arguments to create a Attack.
     * @example
     * // Create one Attack
     * const Attack = await prisma.attack.create({
     *   data: {
     *     // ... data to create a Attack
     *   }
     * })
     * 
     */
    create<T extends AttackCreateArgs>(args: SelectSubset<T, AttackCreateArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attacks.
     * @param {AttackCreateManyArgs} args - Arguments to create many Attacks.
     * @example
     * // Create many Attacks
     * const attack = await prisma.attack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttackCreateManyArgs>(args?: SelectSubset<T, AttackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attacks and returns the data saved in the database.
     * @param {AttackCreateManyAndReturnArgs} args - Arguments to create many Attacks.
     * @example
     * // Create many Attacks
     * const attack = await prisma.attack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attacks and only return the `id`
     * const attackWithIdOnly = await prisma.attack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttackCreateManyAndReturnArgs>(args?: SelectSubset<T, AttackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attack.
     * @param {AttackDeleteArgs} args - Arguments to delete one Attack.
     * @example
     * // Delete one Attack
     * const Attack = await prisma.attack.delete({
     *   where: {
     *     // ... filter to delete one Attack
     *   }
     * })
     * 
     */
    delete<T extends AttackDeleteArgs>(args: SelectSubset<T, AttackDeleteArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attack.
     * @param {AttackUpdateArgs} args - Arguments to update one Attack.
     * @example
     * // Update one Attack
     * const attack = await prisma.attack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttackUpdateArgs>(args: SelectSubset<T, AttackUpdateArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attacks.
     * @param {AttackDeleteManyArgs} args - Arguments to filter Attacks to delete.
     * @example
     * // Delete a few Attacks
     * const { count } = await prisma.attack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttackDeleteManyArgs>(args?: SelectSubset<T, AttackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attacks
     * const attack = await prisma.attack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttackUpdateManyArgs>(args: SelectSubset<T, AttackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attacks and returns the data updated in the database.
     * @param {AttackUpdateManyAndReturnArgs} args - Arguments to update many Attacks.
     * @example
     * // Update many Attacks
     * const attack = await prisma.attack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attacks and only return the `id`
     * const attackWithIdOnly = await prisma.attack.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttackUpdateManyAndReturnArgs>(args: SelectSubset<T, AttackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attack.
     * @param {AttackUpsertArgs} args - Arguments to update or create a Attack.
     * @example
     * // Update or create a Attack
     * const attack = await prisma.attack.upsert({
     *   create: {
     *     // ... data to create a Attack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attack we want to update
     *   }
     * })
     */
    upsert<T extends AttackUpsertArgs>(args: SelectSubset<T, AttackUpsertArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackCountArgs} args - Arguments to filter Attacks to count.
     * @example
     * // Count the number of Attacks
     * const count = await prisma.attack.count({
     *   where: {
     *     // ... the filter for the Attacks we want to count
     *   }
     * })
    **/
    count<T extends AttackCountArgs>(
      args?: Subset<T, AttackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttackAggregateArgs>(args: Subset<T, AttackAggregateArgs>): Prisma.PrismaPromise<GetAttackAggregateType<T>>

    /**
     * Group by Attack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackGroupByArgs} args - Group by arguments.
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
      T extends AttackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttackGroupByArgs['orderBy'] }
        : { orderBy?: AttackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attack model
   */
  readonly fields: AttackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Attack$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Attack$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemAttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ability<T extends Attack$abilityArgs<ExtArgs> = {}>(args?: Subset<T, Attack$abilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityAttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Attack model
   */
  interface AttackFieldRefs {
    readonly id: FieldRef<"Attack", 'Int'>
    readonly category: FieldRef<"Attack", 'String'>
    readonly attackRoll: FieldRef<"Attack", 'Json'>
    readonly damage: FieldRef<"Attack", 'Json'>
    readonly critical: FieldRef<"Attack", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Attack findUnique
   */
  export type AttackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attack to fetch.
     */
    where: AttackWhereUniqueInput
  }

  /**
   * Attack findUniqueOrThrow
   */
  export type AttackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attack to fetch.
     */
    where: AttackWhereUniqueInput
  }

  /**
   * Attack findFirst
   */
  export type AttackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attack to fetch.
     */
    where?: AttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attacks to fetch.
     */
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attacks.
     */
    cursor?: AttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attacks.
     */
    distinct?: AttackScalarFieldEnum | AttackScalarFieldEnum[]
  }

  /**
   * Attack findFirstOrThrow
   */
  export type AttackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attack to fetch.
     */
    where?: AttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attacks to fetch.
     */
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attacks.
     */
    cursor?: AttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attacks.
     */
    distinct?: AttackScalarFieldEnum | AttackScalarFieldEnum[]
  }

  /**
   * Attack findMany
   */
  export type AttackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attacks to fetch.
     */
    where?: AttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attacks to fetch.
     */
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attacks.
     */
    cursor?: AttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attacks.
     */
    skip?: number
    distinct?: AttackScalarFieldEnum | AttackScalarFieldEnum[]
  }

  /**
   * Attack create
   */
  export type AttackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * The data needed to create a Attack.
     */
    data: XOR<AttackCreateInput, AttackUncheckedCreateInput>
  }

  /**
   * Attack createMany
   */
  export type AttackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attacks.
     */
    data: AttackCreateManyInput | AttackCreateManyInput[]
  }

  /**
   * Attack createManyAndReturn
   */
  export type AttackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * The data used to create many Attacks.
     */
    data: AttackCreateManyInput | AttackCreateManyInput[]
  }

  /**
   * Attack update
   */
  export type AttackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * The data needed to update a Attack.
     */
    data: XOR<AttackUpdateInput, AttackUncheckedUpdateInput>
    /**
     * Choose, which Attack to update.
     */
    where: AttackWhereUniqueInput
  }

  /**
   * Attack updateMany
   */
  export type AttackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attacks.
     */
    data: XOR<AttackUpdateManyMutationInput, AttackUncheckedUpdateManyInput>
    /**
     * Filter which Attacks to update
     */
    where?: AttackWhereInput
    /**
     * Limit how many Attacks to update.
     */
    limit?: number
  }

  /**
   * Attack updateManyAndReturn
   */
  export type AttackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * The data used to update Attacks.
     */
    data: XOR<AttackUpdateManyMutationInput, AttackUncheckedUpdateManyInput>
    /**
     * Filter which Attacks to update
     */
    where?: AttackWhereInput
    /**
     * Limit how many Attacks to update.
     */
    limit?: number
  }

  /**
   * Attack upsert
   */
  export type AttackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * The filter to search for the Attack to update in case it exists.
     */
    where: AttackWhereUniqueInput
    /**
     * In case the Attack found by the `where` argument doesn't exist, create a new Attack with this data.
     */
    create: XOR<AttackCreateInput, AttackUncheckedCreateInput>
    /**
     * In case the Attack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttackUpdateInput, AttackUncheckedUpdateInput>
  }

  /**
   * Attack delete
   */
  export type AttackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter which Attack to delete.
     */
    where: AttackWhereUniqueInput
  }

  /**
   * Attack deleteMany
   */
  export type AttackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attacks to delete
     */
    where?: AttackWhereInput
    /**
     * Limit how many Attacks to delete.
     */
    limit?: number
  }

  /**
   * Attack.items
   */
  export type Attack$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemAttack
     */
    select?: ItemAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemAttack
     */
    omit?: ItemAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemAttackInclude<ExtArgs> | null
    where?: ItemAttackWhereInput
    orderBy?: ItemAttackOrderByWithRelationInput | ItemAttackOrderByWithRelationInput[]
    cursor?: ItemAttackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemAttackScalarFieldEnum | ItemAttackScalarFieldEnum[]
  }

  /**
   * Attack.ability
   */
  export type Attack$abilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityAttack
     */
    select?: AbilityAttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbilityAttack
     */
    omit?: AbilityAttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityAttackInclude<ExtArgs> | null
    where?: AbilityAttackWhereInput
    orderBy?: AbilityAttackOrderByWithRelationInput | AbilityAttackOrderByWithRelationInput[]
    cursor?: AbilityAttackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilityAttackScalarFieldEnum | AbilityAttackScalarFieldEnum[]
  }

  /**
   * Attack without action
   */
  export type AttackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
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
    condition: 'condition',
    disable: 'disable',
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
    characterId: 'characterId',
    expertiseId: 'expertiseId',
    value: 'value',
    trained: 'trained',
    trainBonus: 'trainBonus'
  };

  export type ExpertiseCharacterScalarFieldEnum = (typeof ExpertiseCharacterScalarFieldEnum)[keyof typeof ExpertiseCharacterScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    characterId: 'characterId',
    limit: 'limit',
    tibares: 'tibares'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    inventoryId: 'inventoryId',
    type: 'type',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    slot: 'slot',
    isEquippable: 'isEquippable',
    equipped: 'equipped',
    passive: 'passive'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const ItemModifierScalarFieldEnum: {
    itemId: 'itemId',
    modifierId: 'modifierId'
  };

  export type ItemModifierScalarFieldEnum = (typeof ItemModifierScalarFieldEnum)[keyof typeof ItemModifierScalarFieldEnum]


  export const ItemAttackScalarFieldEnum: {
    itemId: 'itemId',
    attackId: 'attackId'
  };

  export type ItemAttackScalarFieldEnum = (typeof ItemAttackScalarFieldEnum)[keyof typeof ItemAttackScalarFieldEnum]


  export const AbilityScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    type: 'type',
    name: 'name',
    description: 'description',
    passive: 'passive',
    manaCost: 'manaCost'
  };

  export type AbilityScalarFieldEnum = (typeof AbilityScalarFieldEnum)[keyof typeof AbilityScalarFieldEnum]


  export const AbilityModifierScalarFieldEnum: {
    abilityId: 'abilityId',
    modifierId: 'modifierId'
  };

  export type AbilityModifierScalarFieldEnum = (typeof AbilityModifierScalarFieldEnum)[keyof typeof AbilityModifierScalarFieldEnum]


  export const AbilityAttackScalarFieldEnum: {
    abilityId: 'abilityId',
    attackId: 'attackId'
  };

  export type AbilityAttackScalarFieldEnum = (typeof AbilityAttackScalarFieldEnum)[keyof typeof AbilityAttackScalarFieldEnum]


  export const EffectScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    sourceName: 'sourceName',
    active: 'active',
    duration: 'duration',
    stacks: 'stacks',
    startedAt: 'startedAt'
  };

  export type EffectScalarFieldEnum = (typeof EffectScalarFieldEnum)[keyof typeof EffectScalarFieldEnum]


  export const EffectModifierScalarFieldEnum: {
    effectId: 'effectId',
    modifierId: 'modifierId'
  };

  export type EffectModifierScalarFieldEnum = (typeof EffectModifierScalarFieldEnum)[keyof typeof EffectModifierScalarFieldEnum]


  export const ModifierScalarFieldEnum: {
    id: 'id',
    target: 'target',
    value: 'value',
    type: 'type'
  };

  export type ModifierScalarFieldEnum = (typeof ModifierScalarFieldEnum)[keyof typeof ModifierScalarFieldEnum]


  export const AttackScalarFieldEnum: {
    id: 'id',
    category: 'category',
    attackRoll: 'attackRoll',
    damage: 'damage',
    critical: 'critical'
  };

  export type AttackScalarFieldEnum = (typeof AttackScalarFieldEnum)[keyof typeof AttackScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


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
    condition?: StringFilter<"Character"> | string
    disable?: BoolFilter<"Character"> | boolean
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
    condition?: SortOrder
    disable?: SortOrder
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
    condition?: StringFilter<"Character"> | string
    disable?: BoolFilter<"Character"> | boolean
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
    condition?: SortOrder
    disable?: SortOrder
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
    condition?: StringWithAggregatesFilter<"Character"> | string
    disable?: BoolWithAggregatesFilter<"Character"> | boolean
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
    characterId?: IntFilter<"ExpertiseCharacter"> | number
    expertiseId?: IntFilter<"ExpertiseCharacter"> | number
    value?: IntFilter<"ExpertiseCharacter"> | number
    trained?: BoolFilter<"ExpertiseCharacter"> | boolean
    trainBonus?: IntFilter<"ExpertiseCharacter"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    expertise?: XOR<ExpertiseScalarRelationFilter, ExpertiseWhereInput>
  }

  export type ExpertiseCharacterOrderByWithRelationInput = {
    characterId?: SortOrder
    expertiseId?: SortOrder
    value?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
    character?: CharacterOrderByWithRelationInput
    expertise?: ExpertiseOrderByWithRelationInput
  }

  export type ExpertiseCharacterWhereUniqueInput = Prisma.AtLeast<{
    characterId_expertiseId?: ExpertiseCharacterCharacterIdExpertiseIdCompoundUniqueInput
    AND?: ExpertiseCharacterWhereInput | ExpertiseCharacterWhereInput[]
    OR?: ExpertiseCharacterWhereInput[]
    NOT?: ExpertiseCharacterWhereInput | ExpertiseCharacterWhereInput[]
    characterId?: IntFilter<"ExpertiseCharacter"> | number
    expertiseId?: IntFilter<"ExpertiseCharacter"> | number
    value?: IntFilter<"ExpertiseCharacter"> | number
    trained?: BoolFilter<"ExpertiseCharacter"> | boolean
    trainBonus?: IntFilter<"ExpertiseCharacter"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    expertise?: XOR<ExpertiseScalarRelationFilter, ExpertiseWhereInput>
  }, "characterId_expertiseId">

  export type ExpertiseCharacterOrderByWithAggregationInput = {
    characterId?: SortOrder
    expertiseId?: SortOrder
    value?: SortOrder
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
    characterId?: IntWithAggregatesFilter<"ExpertiseCharacter"> | number
    expertiseId?: IntWithAggregatesFilter<"ExpertiseCharacter"> | number
    value?: IntWithAggregatesFilter<"ExpertiseCharacter"> | number
    trained?: BoolWithAggregatesFilter<"ExpertiseCharacter"> | boolean
    trainBonus?: IntWithAggregatesFilter<"ExpertiseCharacter"> | number
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    characterId?: IntFilter<"Inventory"> | number
    limit?: IntFilter<"Inventory"> | number
    tibares?: IntFilter<"Inventory"> | number
    items?: InventoryItemListRelationFilter
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    characterId?: SortOrder
    limit?: SortOrder
    tibares?: SortOrder
    items?: InventoryItemOrderByRelationAggregateInput
    character?: CharacterOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    limit?: IntFilter<"Inventory"> | number
    tibares?: IntFilter<"Inventory"> | number
    items?: InventoryItemListRelationFilter
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }, "characterId">

  export type InventoryOrderByWithAggregationInput = {
    characterId?: SortOrder
    limit?: SortOrder
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
    limit?: IntWithAggregatesFilter<"Inventory"> | number
    tibares?: IntWithAggregatesFilter<"Inventory"> | number
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: IntFilter<"InventoryItem"> | number
    inventoryId?: IntFilter<"InventoryItem"> | number
    type?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    description?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    slot?: IntFilter<"InventoryItem"> | number
    isEquippable?: BoolFilter<"InventoryItem"> | boolean
    equipped?: BoolFilter<"InventoryItem"> | boolean
    passive?: BoolFilter<"InventoryItem"> | boolean
    modifiers?: ItemModifierListRelationFilter
    attacks?: ItemAttackListRelationFilter
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
    isEquippable?: SortOrder
    equipped?: SortOrder
    passive?: SortOrder
    modifiers?: ItemModifierOrderByRelationAggregateInput
    attacks?: ItemAttackOrderByRelationAggregateInput
    inventory?: InventoryOrderByWithRelationInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
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
    modifiers?: ItemModifierListRelationFilter
    attacks?: ItemAttackListRelationFilter
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }, "id">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
    isEquippable?: SortOrder
    equipped?: SortOrder
    passive?: SortOrder
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
    id?: IntWithAggregatesFilter<"InventoryItem"> | number
    inventoryId?: IntWithAggregatesFilter<"InventoryItem"> | number
    type?: StringWithAggregatesFilter<"InventoryItem"> | string
    name?: StringWithAggregatesFilter<"InventoryItem"> | string
    description?: StringWithAggregatesFilter<"InventoryItem"> | string
    quantity?: IntWithAggregatesFilter<"InventoryItem"> | number
    slot?: IntWithAggregatesFilter<"InventoryItem"> | number
    isEquippable?: BoolWithAggregatesFilter<"InventoryItem"> | boolean
    equipped?: BoolWithAggregatesFilter<"InventoryItem"> | boolean
    passive?: BoolWithAggregatesFilter<"InventoryItem"> | boolean
  }

  export type ItemModifierWhereInput = {
    AND?: ItemModifierWhereInput | ItemModifierWhereInput[]
    OR?: ItemModifierWhereInput[]
    NOT?: ItemModifierWhereInput | ItemModifierWhereInput[]
    itemId?: IntFilter<"ItemModifier"> | number
    modifierId?: IntFilter<"ItemModifier"> | number
    item?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
    modifier?: XOR<ModifierScalarRelationFilter, ModifierWhereInput>
  }

  export type ItemModifierOrderByWithRelationInput = {
    itemId?: SortOrder
    modifierId?: SortOrder
    item?: InventoryItemOrderByWithRelationInput
    modifier?: ModifierOrderByWithRelationInput
  }

  export type ItemModifierWhereUniqueInput = Prisma.AtLeast<{
    itemId_modifierId?: ItemModifierItemIdModifierIdCompoundUniqueInput
    AND?: ItemModifierWhereInput | ItemModifierWhereInput[]
    OR?: ItemModifierWhereInput[]
    NOT?: ItemModifierWhereInput | ItemModifierWhereInput[]
    itemId?: IntFilter<"ItemModifier"> | number
    modifierId?: IntFilter<"ItemModifier"> | number
    item?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
    modifier?: XOR<ModifierScalarRelationFilter, ModifierWhereInput>
  }, "itemId_modifierId">

  export type ItemModifierOrderByWithAggregationInput = {
    itemId?: SortOrder
    modifierId?: SortOrder
    _count?: ItemModifierCountOrderByAggregateInput
    _avg?: ItemModifierAvgOrderByAggregateInput
    _max?: ItemModifierMaxOrderByAggregateInput
    _min?: ItemModifierMinOrderByAggregateInput
    _sum?: ItemModifierSumOrderByAggregateInput
  }

  export type ItemModifierScalarWhereWithAggregatesInput = {
    AND?: ItemModifierScalarWhereWithAggregatesInput | ItemModifierScalarWhereWithAggregatesInput[]
    OR?: ItemModifierScalarWhereWithAggregatesInput[]
    NOT?: ItemModifierScalarWhereWithAggregatesInput | ItemModifierScalarWhereWithAggregatesInput[]
    itemId?: IntWithAggregatesFilter<"ItemModifier"> | number
    modifierId?: IntWithAggregatesFilter<"ItemModifier"> | number
  }

  export type ItemAttackWhereInput = {
    AND?: ItemAttackWhereInput | ItemAttackWhereInput[]
    OR?: ItemAttackWhereInput[]
    NOT?: ItemAttackWhereInput | ItemAttackWhereInput[]
    itemId?: IntFilter<"ItemAttack"> | number
    attackId?: IntFilter<"ItemAttack"> | number
    item?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
    attack?: XOR<AttackScalarRelationFilter, AttackWhereInput>
  }

  export type ItemAttackOrderByWithRelationInput = {
    itemId?: SortOrder
    attackId?: SortOrder
    item?: InventoryItemOrderByWithRelationInput
    attack?: AttackOrderByWithRelationInput
  }

  export type ItemAttackWhereUniqueInput = Prisma.AtLeast<{
    itemId_attackId?: ItemAttackItemIdAttackIdCompoundUniqueInput
    AND?: ItemAttackWhereInput | ItemAttackWhereInput[]
    OR?: ItemAttackWhereInput[]
    NOT?: ItemAttackWhereInput | ItemAttackWhereInput[]
    itemId?: IntFilter<"ItemAttack"> | number
    attackId?: IntFilter<"ItemAttack"> | number
    item?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
    attack?: XOR<AttackScalarRelationFilter, AttackWhereInput>
  }, "itemId_attackId">

  export type ItemAttackOrderByWithAggregationInput = {
    itemId?: SortOrder
    attackId?: SortOrder
    _count?: ItemAttackCountOrderByAggregateInput
    _avg?: ItemAttackAvgOrderByAggregateInput
    _max?: ItemAttackMaxOrderByAggregateInput
    _min?: ItemAttackMinOrderByAggregateInput
    _sum?: ItemAttackSumOrderByAggregateInput
  }

  export type ItemAttackScalarWhereWithAggregatesInput = {
    AND?: ItemAttackScalarWhereWithAggregatesInput | ItemAttackScalarWhereWithAggregatesInput[]
    OR?: ItemAttackScalarWhereWithAggregatesInput[]
    NOT?: ItemAttackScalarWhereWithAggregatesInput | ItemAttackScalarWhereWithAggregatesInput[]
    itemId?: IntWithAggregatesFilter<"ItemAttack"> | number
    attackId?: IntWithAggregatesFilter<"ItemAttack"> | number
  }

  export type AbilityWhereInput = {
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    id?: IntFilter<"Ability"> | number
    characterId?: IntFilter<"Ability"> | number
    type?: StringFilter<"Ability"> | string
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    passive?: BoolFilter<"Ability"> | boolean
    manaCost?: IntFilter<"Ability"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    modifiers?: AbilityModifierListRelationFilter
    attacks?: AbilityAttackListRelationFilter
  }

  export type AbilityOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
    character?: CharacterOrderByWithRelationInput
    modifiers?: AbilityModifierOrderByRelationAggregateInput
    attacks?: AbilityAttackOrderByRelationAggregateInput
  }

  export type AbilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    characterId?: IntFilter<"Ability"> | number
    type?: StringFilter<"Ability"> | string
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    passive?: BoolFilter<"Ability"> | boolean
    manaCost?: IntFilter<"Ability"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    modifiers?: AbilityModifierListRelationFilter
    attacks?: AbilityAttackListRelationFilter
  }, "id">

  export type AbilityOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
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
    id?: IntWithAggregatesFilter<"Ability"> | number
    characterId?: IntWithAggregatesFilter<"Ability"> | number
    type?: StringWithAggregatesFilter<"Ability"> | string
    name?: StringWithAggregatesFilter<"Ability"> | string
    description?: StringWithAggregatesFilter<"Ability"> | string
    passive?: BoolWithAggregatesFilter<"Ability"> | boolean
    manaCost?: IntWithAggregatesFilter<"Ability"> | number
  }

  export type AbilityModifierWhereInput = {
    AND?: AbilityModifierWhereInput | AbilityModifierWhereInput[]
    OR?: AbilityModifierWhereInput[]
    NOT?: AbilityModifierWhereInput | AbilityModifierWhereInput[]
    abilityId?: IntFilter<"AbilityModifier"> | number
    modifierId?: IntFilter<"AbilityModifier"> | number
    ability?: XOR<AbilityScalarRelationFilter, AbilityWhereInput>
    modifier?: XOR<ModifierScalarRelationFilter, ModifierWhereInput>
  }

  export type AbilityModifierOrderByWithRelationInput = {
    abilityId?: SortOrder
    modifierId?: SortOrder
    ability?: AbilityOrderByWithRelationInput
    modifier?: ModifierOrderByWithRelationInput
  }

  export type AbilityModifierWhereUniqueInput = Prisma.AtLeast<{
    abilityId_modifierId?: AbilityModifierAbilityIdModifierIdCompoundUniqueInput
    AND?: AbilityModifierWhereInput | AbilityModifierWhereInput[]
    OR?: AbilityModifierWhereInput[]
    NOT?: AbilityModifierWhereInput | AbilityModifierWhereInput[]
    abilityId?: IntFilter<"AbilityModifier"> | number
    modifierId?: IntFilter<"AbilityModifier"> | number
    ability?: XOR<AbilityScalarRelationFilter, AbilityWhereInput>
    modifier?: XOR<ModifierScalarRelationFilter, ModifierWhereInput>
  }, "abilityId_modifierId">

  export type AbilityModifierOrderByWithAggregationInput = {
    abilityId?: SortOrder
    modifierId?: SortOrder
    _count?: AbilityModifierCountOrderByAggregateInput
    _avg?: AbilityModifierAvgOrderByAggregateInput
    _max?: AbilityModifierMaxOrderByAggregateInput
    _min?: AbilityModifierMinOrderByAggregateInput
    _sum?: AbilityModifierSumOrderByAggregateInput
  }

  export type AbilityModifierScalarWhereWithAggregatesInput = {
    AND?: AbilityModifierScalarWhereWithAggregatesInput | AbilityModifierScalarWhereWithAggregatesInput[]
    OR?: AbilityModifierScalarWhereWithAggregatesInput[]
    NOT?: AbilityModifierScalarWhereWithAggregatesInput | AbilityModifierScalarWhereWithAggregatesInput[]
    abilityId?: IntWithAggregatesFilter<"AbilityModifier"> | number
    modifierId?: IntWithAggregatesFilter<"AbilityModifier"> | number
  }

  export type AbilityAttackWhereInput = {
    AND?: AbilityAttackWhereInput | AbilityAttackWhereInput[]
    OR?: AbilityAttackWhereInput[]
    NOT?: AbilityAttackWhereInput | AbilityAttackWhereInput[]
    abilityId?: IntFilter<"AbilityAttack"> | number
    attackId?: IntFilter<"AbilityAttack"> | number
    ability?: XOR<AbilityScalarRelationFilter, AbilityWhereInput>
    attack?: XOR<AttackScalarRelationFilter, AttackWhereInput>
  }

  export type AbilityAttackOrderByWithRelationInput = {
    abilityId?: SortOrder
    attackId?: SortOrder
    ability?: AbilityOrderByWithRelationInput
    attack?: AttackOrderByWithRelationInput
  }

  export type AbilityAttackWhereUniqueInput = Prisma.AtLeast<{
    abilityId_attackId?: AbilityAttackAbilityIdAttackIdCompoundUniqueInput
    AND?: AbilityAttackWhereInput | AbilityAttackWhereInput[]
    OR?: AbilityAttackWhereInput[]
    NOT?: AbilityAttackWhereInput | AbilityAttackWhereInput[]
    abilityId?: IntFilter<"AbilityAttack"> | number
    attackId?: IntFilter<"AbilityAttack"> | number
    ability?: XOR<AbilityScalarRelationFilter, AbilityWhereInput>
    attack?: XOR<AttackScalarRelationFilter, AttackWhereInput>
  }, "abilityId_attackId">

  export type AbilityAttackOrderByWithAggregationInput = {
    abilityId?: SortOrder
    attackId?: SortOrder
    _count?: AbilityAttackCountOrderByAggregateInput
    _avg?: AbilityAttackAvgOrderByAggregateInput
    _max?: AbilityAttackMaxOrderByAggregateInput
    _min?: AbilityAttackMinOrderByAggregateInput
    _sum?: AbilityAttackSumOrderByAggregateInput
  }

  export type AbilityAttackScalarWhereWithAggregatesInput = {
    AND?: AbilityAttackScalarWhereWithAggregatesInput | AbilityAttackScalarWhereWithAggregatesInput[]
    OR?: AbilityAttackScalarWhereWithAggregatesInput[]
    NOT?: AbilityAttackScalarWhereWithAggregatesInput | AbilityAttackScalarWhereWithAggregatesInput[]
    abilityId?: IntWithAggregatesFilter<"AbilityAttack"> | number
    attackId?: IntWithAggregatesFilter<"AbilityAttack"> | number
  }

  export type EffectWhereInput = {
    AND?: EffectWhereInput | EffectWhereInput[]
    OR?: EffectWhereInput[]
    NOT?: EffectWhereInput | EffectWhereInput[]
    id?: IntFilter<"Effect"> | number
    characterId?: IntFilter<"Effect"> | number
    sourceType?: StringFilter<"Effect"> | string
    sourceId?: IntNullableFilter<"Effect"> | number | null
    sourceName?: StringFilter<"Effect"> | string
    active?: BoolFilter<"Effect"> | boolean
    duration?: JsonFilter<"Effect">
    stacks?: IntFilter<"Effect"> | number
    startedAt?: DateTimeFilter<"Effect"> | Date | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    modifiers?: EffectModifierListRelationFilter
  }

  export type EffectOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    duration?: SortOrder
    stacks?: SortOrder
    startedAt?: SortOrder
    character?: CharacterOrderByWithRelationInput
    modifiers?: EffectModifierOrderByRelationAggregateInput
  }

  export type EffectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
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
    startedAt?: DateTimeFilter<"Effect"> | Date | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    modifiers?: EffectModifierListRelationFilter
  }, "id">

  export type EffectOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    duration?: SortOrder
    stacks?: SortOrder
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
    id?: IntWithAggregatesFilter<"Effect"> | number
    characterId?: IntWithAggregatesFilter<"Effect"> | number
    sourceType?: StringWithAggregatesFilter<"Effect"> | string
    sourceId?: IntNullableWithAggregatesFilter<"Effect"> | number | null
    sourceName?: StringWithAggregatesFilter<"Effect"> | string
    active?: BoolWithAggregatesFilter<"Effect"> | boolean
    duration?: JsonWithAggregatesFilter<"Effect">
    stacks?: IntWithAggregatesFilter<"Effect"> | number
    startedAt?: DateTimeWithAggregatesFilter<"Effect"> | Date | string
  }

  export type EffectModifierWhereInput = {
    AND?: EffectModifierWhereInput | EffectModifierWhereInput[]
    OR?: EffectModifierWhereInput[]
    NOT?: EffectModifierWhereInput | EffectModifierWhereInput[]
    effectId?: IntFilter<"EffectModifier"> | number
    modifierId?: IntFilter<"EffectModifier"> | number
    effect?: XOR<EffectScalarRelationFilter, EffectWhereInput>
    modifier?: XOR<ModifierScalarRelationFilter, ModifierWhereInput>
  }

  export type EffectModifierOrderByWithRelationInput = {
    effectId?: SortOrder
    modifierId?: SortOrder
    effect?: EffectOrderByWithRelationInput
    modifier?: ModifierOrderByWithRelationInput
  }

  export type EffectModifierWhereUniqueInput = Prisma.AtLeast<{
    effectId_modifierId?: EffectModifierEffectIdModifierIdCompoundUniqueInput
    AND?: EffectModifierWhereInput | EffectModifierWhereInput[]
    OR?: EffectModifierWhereInput[]
    NOT?: EffectModifierWhereInput | EffectModifierWhereInput[]
    effectId?: IntFilter<"EffectModifier"> | number
    modifierId?: IntFilter<"EffectModifier"> | number
    effect?: XOR<EffectScalarRelationFilter, EffectWhereInput>
    modifier?: XOR<ModifierScalarRelationFilter, ModifierWhereInput>
  }, "effectId_modifierId">

  export type EffectModifierOrderByWithAggregationInput = {
    effectId?: SortOrder
    modifierId?: SortOrder
    _count?: EffectModifierCountOrderByAggregateInput
    _avg?: EffectModifierAvgOrderByAggregateInput
    _max?: EffectModifierMaxOrderByAggregateInput
    _min?: EffectModifierMinOrderByAggregateInput
    _sum?: EffectModifierSumOrderByAggregateInput
  }

  export type EffectModifierScalarWhereWithAggregatesInput = {
    AND?: EffectModifierScalarWhereWithAggregatesInput | EffectModifierScalarWhereWithAggregatesInput[]
    OR?: EffectModifierScalarWhereWithAggregatesInput[]
    NOT?: EffectModifierScalarWhereWithAggregatesInput | EffectModifierScalarWhereWithAggregatesInput[]
    effectId?: IntWithAggregatesFilter<"EffectModifier"> | number
    modifierId?: IntWithAggregatesFilter<"EffectModifier"> | number
  }

  export type ModifierWhereInput = {
    AND?: ModifierWhereInput | ModifierWhereInput[]
    OR?: ModifierWhereInput[]
    NOT?: ModifierWhereInput | ModifierWhereInput[]
    id?: IntFilter<"Modifier"> | number
    target?: JsonFilter<"Modifier">
    value?: IntFilter<"Modifier"> | number
    type?: StringFilter<"Modifier"> | string
    effects?: EffectModifierListRelationFilter
    abilities?: AbilityModifierListRelationFilter
    items?: ItemModifierListRelationFilter
  }

  export type ModifierOrderByWithRelationInput = {
    id?: SortOrder
    target?: SortOrder
    value?: SortOrder
    type?: SortOrder
    effects?: EffectModifierOrderByRelationAggregateInput
    abilities?: AbilityModifierOrderByRelationAggregateInput
    items?: ItemModifierOrderByRelationAggregateInput
  }

  export type ModifierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModifierWhereInput | ModifierWhereInput[]
    OR?: ModifierWhereInput[]
    NOT?: ModifierWhereInput | ModifierWhereInput[]
    target?: JsonFilter<"Modifier">
    value?: IntFilter<"Modifier"> | number
    type?: StringFilter<"Modifier"> | string
    effects?: EffectModifierListRelationFilter
    abilities?: AbilityModifierListRelationFilter
    items?: ItemModifierListRelationFilter
  }, "id">

  export type ModifierOrderByWithAggregationInput = {
    id?: SortOrder
    target?: SortOrder
    value?: SortOrder
    type?: SortOrder
    _count?: ModifierCountOrderByAggregateInput
    _avg?: ModifierAvgOrderByAggregateInput
    _max?: ModifierMaxOrderByAggregateInput
    _min?: ModifierMinOrderByAggregateInput
    _sum?: ModifierSumOrderByAggregateInput
  }

  export type ModifierScalarWhereWithAggregatesInput = {
    AND?: ModifierScalarWhereWithAggregatesInput | ModifierScalarWhereWithAggregatesInput[]
    OR?: ModifierScalarWhereWithAggregatesInput[]
    NOT?: ModifierScalarWhereWithAggregatesInput | ModifierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Modifier"> | number
    target?: JsonWithAggregatesFilter<"Modifier">
    value?: IntWithAggregatesFilter<"Modifier"> | number
    type?: StringWithAggregatesFilter<"Modifier"> | string
  }

  export type AttackWhereInput = {
    AND?: AttackWhereInput | AttackWhereInput[]
    OR?: AttackWhereInput[]
    NOT?: AttackWhereInput | AttackWhereInput[]
    id?: IntFilter<"Attack"> | number
    category?: StringFilter<"Attack"> | string
    attackRoll?: JsonFilter<"Attack">
    damage?: JsonFilter<"Attack">
    critical?: JsonFilter<"Attack">
    items?: ItemAttackListRelationFilter
    ability?: AbilityAttackListRelationFilter
  }

  export type AttackOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    attackRoll?: SortOrder
    damage?: SortOrder
    critical?: SortOrder
    items?: ItemAttackOrderByRelationAggregateInput
    ability?: AbilityAttackOrderByRelationAggregateInput
  }

  export type AttackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttackWhereInput | AttackWhereInput[]
    OR?: AttackWhereInput[]
    NOT?: AttackWhereInput | AttackWhereInput[]
    category?: StringFilter<"Attack"> | string
    attackRoll?: JsonFilter<"Attack">
    damage?: JsonFilter<"Attack">
    critical?: JsonFilter<"Attack">
    items?: ItemAttackListRelationFilter
    ability?: AbilityAttackListRelationFilter
  }, "id">

  export type AttackOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    attackRoll?: SortOrder
    damage?: SortOrder
    critical?: SortOrder
    _count?: AttackCountOrderByAggregateInput
    _avg?: AttackAvgOrderByAggregateInput
    _max?: AttackMaxOrderByAggregateInput
    _min?: AttackMinOrderByAggregateInput
    _sum?: AttackSumOrderByAggregateInput
  }

  export type AttackScalarWhereWithAggregatesInput = {
    AND?: AttackScalarWhereWithAggregatesInput | AttackScalarWhereWithAggregatesInput[]
    OR?: AttackScalarWhereWithAggregatesInput[]
    NOT?: AttackScalarWhereWithAggregatesInput | AttackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attack"> | number
    category?: StringWithAggregatesFilter<"Attack"> | string
    attackRoll?: JsonWithAggregatesFilter<"Attack">
    damage?: JsonWithAggregatesFilter<"Attack">
    critical?: JsonWithAggregatesFilter<"Attack">
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
    condition?: string
    disable?: boolean
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
    condition?: string
    disable?: boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    condition?: string
    disable?: boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributesCreateInput = {
    strength?: number
    dexterity?: number
    constitution?: number
    intelligence?: number
    wisdom?: number
    charisma?: number
    character: CharacterCreateNestedOneWithoutAttributesInput
  }

  export type AttributesUncheckedCreateInput = {
    characterId: number
    strength?: number
    dexterity?: number
    constitution?: number
    intelligence?: number
    wisdom?: number
    charisma?: number
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
    strength?: number
    dexterity?: number
    constitution?: number
    intelligence?: number
    wisdom?: number
    charisma?: number
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
    value?: number
    trained?: boolean
    trainBonus?: number
    character: CharacterCreateNestedOneWithoutExpertisiesInput
    expertise: ExpertiseCreateNestedOneWithoutCharacterLinkInput
  }

  export type ExpertiseCharacterUncheckedCreateInput = {
    characterId: number
    expertiseId: number
    value?: number
    trained?: boolean
    trainBonus?: number
  }

  export type ExpertiseCharacterUpdateInput = {
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutExpertisiesNestedInput
    expertise?: ExpertiseUpdateOneRequiredWithoutCharacterLinkNestedInput
  }

  export type ExpertiseCharacterUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    expertiseId?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterCreateManyInput = {
    characterId: number
    expertiseId: number
    value?: number
    trained?: boolean
    trainBonus?: number
  }

  export type ExpertiseCharacterUpdateManyMutationInput = {
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    expertiseId?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryCreateInput = {
    limit?: number
    tibares?: number
    items?: InventoryItemCreateNestedManyWithoutInventoryInput
    character: CharacterCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    characterId: number
    limit?: number
    tibares?: number
    items?: InventoryItemUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    limit?: IntFieldUpdateOperationsInput | number
    tibares?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUpdateManyWithoutInventoryNestedInput
    character?: CharacterUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    limit?: IntFieldUpdateOperationsInput | number
    tibares?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    characterId: number
    limit?: number
    tibares?: number
  }

  export type InventoryUpdateManyMutationInput = {
    limit?: IntFieldUpdateOperationsInput | number
    tibares?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    limit?: IntFieldUpdateOperationsInput | number
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
    modifiers?: ItemModifierCreateNestedManyWithoutItemInput
    attacks?: ItemAttackCreateNestedManyWithoutItemInput
    inventory: InventoryCreateNestedOneWithoutItemsInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: number
    inventoryId: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    modifiers?: ItemModifierUncheckedCreateNestedManyWithoutItemInput
    attacks?: ItemAttackUncheckedCreateNestedManyWithoutItemInput
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
    modifiers?: ItemModifierUpdateManyWithoutItemNestedInput
    attacks?: ItemAttackUpdateManyWithoutItemNestedInput
    inventory?: InventoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    modifiers?: ItemModifierUncheckedUpdateManyWithoutItemNestedInput
    attacks?: ItemAttackUncheckedUpdateManyWithoutItemNestedInput
  }

  export type InventoryItemCreateManyInput = {
    id?: number
    inventoryId: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
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
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemModifierCreateInput = {
    item: InventoryItemCreateNestedOneWithoutModifiersInput
    modifier: ModifierCreateNestedOneWithoutItemsInput
  }

  export type ItemModifierUncheckedCreateInput = {
    itemId: number
    modifierId: number
  }

  export type ItemModifierUpdateInput = {
    item?: InventoryItemUpdateOneRequiredWithoutModifiersNestedInput
    modifier?: ModifierUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemModifierUncheckedUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemModifierCreateManyInput = {
    itemId: number
    modifierId: number
  }

  export type ItemModifierUpdateManyMutationInput = {

  }

  export type ItemModifierUncheckedUpdateManyInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemAttackCreateInput = {
    item: InventoryItemCreateNestedOneWithoutAttacksInput
    attack: AttackCreateNestedOneWithoutItemsInput
  }

  export type ItemAttackUncheckedCreateInput = {
    itemId: number
    attackId: number
  }

  export type ItemAttackUpdateInput = {
    item?: InventoryItemUpdateOneRequiredWithoutAttacksNestedInput
    attack?: AttackUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemAttackUncheckedUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    attackId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemAttackCreateManyInput = {
    itemId: number
    attackId: number
  }

  export type ItemAttackUpdateManyMutationInput = {

  }

  export type ItemAttackUncheckedUpdateManyInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    attackId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityCreateInput = {
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    character: CharacterCreateNestedOneWithoutAbilitiesInput
    modifiers?: AbilityModifierCreateNestedManyWithoutAbilityInput
    attacks?: AbilityAttackCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateInput = {
    id?: number
    characterId: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    modifiers?: AbilityModifierUncheckedCreateNestedManyWithoutAbilityInput
    attacks?: AbilityAttackUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutAbilitiesNestedInput
    modifiers?: AbilityModifierUpdateManyWithoutAbilityNestedInput
    attacks?: AbilityAttackUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    modifiers?: AbilityModifierUncheckedUpdateManyWithoutAbilityNestedInput
    attacks?: AbilityAttackUncheckedUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityCreateManyInput = {
    id?: number
    characterId: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
  }

  export type AbilityUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityModifierCreateInput = {
    ability: AbilityCreateNestedOneWithoutModifiersInput
    modifier: ModifierCreateNestedOneWithoutAbilitiesInput
  }

  export type AbilityModifierUncheckedCreateInput = {
    abilityId: number
    modifierId: number
  }

  export type AbilityModifierUpdateInput = {
    ability?: AbilityUpdateOneRequiredWithoutModifiersNestedInput
    modifier?: ModifierUpdateOneRequiredWithoutAbilitiesNestedInput
  }

  export type AbilityModifierUncheckedUpdateInput = {
    abilityId?: IntFieldUpdateOperationsInput | number
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityModifierCreateManyInput = {
    abilityId: number
    modifierId: number
  }

  export type AbilityModifierUpdateManyMutationInput = {

  }

  export type AbilityModifierUncheckedUpdateManyInput = {
    abilityId?: IntFieldUpdateOperationsInput | number
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityAttackCreateInput = {
    ability: AbilityCreateNestedOneWithoutAttacksInput
    attack: AttackCreateNestedOneWithoutAbilityInput
  }

  export type AbilityAttackUncheckedCreateInput = {
    abilityId: number
    attackId: number
  }

  export type AbilityAttackUpdateInput = {
    ability?: AbilityUpdateOneRequiredWithoutAttacksNestedInput
    attack?: AttackUpdateOneRequiredWithoutAbilityNestedInput
  }

  export type AbilityAttackUncheckedUpdateInput = {
    abilityId?: IntFieldUpdateOperationsInput | number
    attackId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityAttackCreateManyInput = {
    abilityId: number
    attackId: number
  }

  export type AbilityAttackUpdateManyMutationInput = {

  }

  export type AbilityAttackUncheckedUpdateManyInput = {
    abilityId?: IntFieldUpdateOperationsInput | number
    attackId?: IntFieldUpdateOperationsInput | number
  }

  export type EffectCreateInput = {
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    startedAt: Date | string
    character: CharacterCreateNestedOneWithoutEffectsInput
    modifiers?: EffectModifierCreateNestedManyWithoutEffectInput
  }

  export type EffectUncheckedCreateInput = {
    id?: number
    characterId: number
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    startedAt: Date | string
    modifiers?: EffectModifierUncheckedCreateNestedManyWithoutEffectInput
  }

  export type EffectUpdateInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharacterUpdateOneRequiredWithoutEffectsNestedInput
    modifiers?: EffectModifierUpdateManyWithoutEffectNestedInput
  }

  export type EffectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiers?: EffectModifierUncheckedUpdateManyWithoutEffectNestedInput
  }

  export type EffectCreateManyInput = {
    id?: number
    characterId: number
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    startedAt: Date | string
  }

  export type EffectUpdateManyMutationInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EffectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EffectModifierCreateInput = {
    effect: EffectCreateNestedOneWithoutModifiersInput
    modifier: ModifierCreateNestedOneWithoutEffectsInput
  }

  export type EffectModifierUncheckedCreateInput = {
    effectId: number
    modifierId: number
  }

  export type EffectModifierUpdateInput = {
    effect?: EffectUpdateOneRequiredWithoutModifiersNestedInput
    modifier?: ModifierUpdateOneRequiredWithoutEffectsNestedInput
  }

  export type EffectModifierUncheckedUpdateInput = {
    effectId?: IntFieldUpdateOperationsInput | number
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type EffectModifierCreateManyInput = {
    effectId: number
    modifierId: number
  }

  export type EffectModifierUpdateManyMutationInput = {

  }

  export type EffectModifierUncheckedUpdateManyInput = {
    effectId?: IntFieldUpdateOperationsInput | number
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type ModifierCreateInput = {
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
    effects?: EffectModifierCreateNestedManyWithoutModifierInput
    abilities?: AbilityModifierCreateNestedManyWithoutModifierInput
    items?: ItemModifierCreateNestedManyWithoutModifierInput
  }

  export type ModifierUncheckedCreateInput = {
    id?: number
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
    effects?: EffectModifierUncheckedCreateNestedManyWithoutModifierInput
    abilities?: AbilityModifierUncheckedCreateNestedManyWithoutModifierInput
    items?: ItemModifierUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ModifierUpdateInput = {
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effects?: EffectModifierUpdateManyWithoutModifierNestedInput
    abilities?: AbilityModifierUpdateManyWithoutModifierNestedInput
    items?: ItemModifierUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effects?: EffectModifierUncheckedUpdateManyWithoutModifierNestedInput
    abilities?: AbilityModifierUncheckedUpdateManyWithoutModifierNestedInput
    items?: ItemModifierUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type ModifierCreateManyInput = {
    id?: number
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
  }

  export type ModifierUpdateManyMutationInput = {
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ModifierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AttackCreateInput = {
    category: string
    attackRoll: JsonNullValueInput | InputJsonValue
    damage: JsonNullValueInput | InputJsonValue
    critical: JsonNullValueInput | InputJsonValue
    items?: ItemAttackCreateNestedManyWithoutAttackInput
    ability?: AbilityAttackCreateNestedManyWithoutAttackInput
  }

  export type AttackUncheckedCreateInput = {
    id?: number
    category: string
    attackRoll: JsonNullValueInput | InputJsonValue
    damage: JsonNullValueInput | InputJsonValue
    critical: JsonNullValueInput | InputJsonValue
    items?: ItemAttackUncheckedCreateNestedManyWithoutAttackInput
    ability?: AbilityAttackUncheckedCreateNestedManyWithoutAttackInput
  }

  export type AttackUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    attackRoll?: JsonNullValueInput | InputJsonValue
    damage?: JsonNullValueInput | InputJsonValue
    critical?: JsonNullValueInput | InputJsonValue
    items?: ItemAttackUpdateManyWithoutAttackNestedInput
    ability?: AbilityAttackUpdateManyWithoutAttackNestedInput
  }

  export type AttackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    attackRoll?: JsonNullValueInput | InputJsonValue
    damage?: JsonNullValueInput | InputJsonValue
    critical?: JsonNullValueInput | InputJsonValue
    items?: ItemAttackUncheckedUpdateManyWithoutAttackNestedInput
    ability?: AbilityAttackUncheckedUpdateManyWithoutAttackNestedInput
  }

  export type AttackCreateManyInput = {
    id?: number
    category: string
    attackRoll: JsonNullValueInput | InputJsonValue
    damage: JsonNullValueInput | InputJsonValue
    critical: JsonNullValueInput | InputJsonValue
  }

  export type AttackUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    attackRoll?: JsonNullValueInput | InputJsonValue
    damage?: JsonNullValueInput | InputJsonValue
    critical?: JsonNullValueInput | InputJsonValue
  }

  export type AttackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    attackRoll?: JsonNullValueInput | InputJsonValue
    damage?: JsonNullValueInput | InputJsonValue
    critical?: JsonNullValueInput | InputJsonValue
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    condition?: SortOrder
    disable?: SortOrder
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
    condition?: SortOrder
    disable?: SortOrder
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
    condition?: SortOrder
    disable?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ExpertiseScalarRelationFilter = {
    is?: ExpertiseWhereInput
    isNot?: ExpertiseWhereInput
  }

  export type ExpertiseCharacterCharacterIdExpertiseIdCompoundUniqueInput = {
    characterId: number
    expertiseId: number
  }

  export type ExpertiseCharacterCountOrderByAggregateInput = {
    characterId?: SortOrder
    expertiseId?: SortOrder
    value?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
  }

  export type ExpertiseCharacterAvgOrderByAggregateInput = {
    characterId?: SortOrder
    expertiseId?: SortOrder
    value?: SortOrder
    trainBonus?: SortOrder
  }

  export type ExpertiseCharacterMaxOrderByAggregateInput = {
    characterId?: SortOrder
    expertiseId?: SortOrder
    value?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
  }

  export type ExpertiseCharacterMinOrderByAggregateInput = {
    characterId?: SortOrder
    expertiseId?: SortOrder
    value?: SortOrder
    trained?: SortOrder
    trainBonus?: SortOrder
  }

  export type ExpertiseCharacterSumOrderByAggregateInput = {
    characterId?: SortOrder
    expertiseId?: SortOrder
    value?: SortOrder
    trainBonus?: SortOrder
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
    limit?: SortOrder
    tibares?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    characterId?: SortOrder
    limit?: SortOrder
    tibares?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    characterId?: SortOrder
    limit?: SortOrder
    tibares?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    characterId?: SortOrder
    limit?: SortOrder
    tibares?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    characterId?: SortOrder
    limit?: SortOrder
    tibares?: SortOrder
  }

  export type ItemModifierListRelationFilter = {
    every?: ItemModifierWhereInput
    some?: ItemModifierWhereInput
    none?: ItemModifierWhereInput
  }

  export type ItemAttackListRelationFilter = {
    every?: ItemAttackWhereInput
    some?: ItemAttackWhereInput
    none?: ItemAttackWhereInput
  }

  export type InventoryScalarRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type ItemModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemAttackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
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

  export type InventoryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
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
    id?: SortOrder
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
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    slot?: SortOrder
  }

  export type InventoryItemScalarRelationFilter = {
    is?: InventoryItemWhereInput
    isNot?: InventoryItemWhereInput
  }

  export type ModifierScalarRelationFilter = {
    is?: ModifierWhereInput
    isNot?: ModifierWhereInput
  }

  export type ItemModifierItemIdModifierIdCompoundUniqueInput = {
    itemId: number
    modifierId: number
  }

  export type ItemModifierCountOrderByAggregateInput = {
    itemId?: SortOrder
    modifierId?: SortOrder
  }

  export type ItemModifierAvgOrderByAggregateInput = {
    itemId?: SortOrder
    modifierId?: SortOrder
  }

  export type ItemModifierMaxOrderByAggregateInput = {
    itemId?: SortOrder
    modifierId?: SortOrder
  }

  export type ItemModifierMinOrderByAggregateInput = {
    itemId?: SortOrder
    modifierId?: SortOrder
  }

  export type ItemModifierSumOrderByAggregateInput = {
    itemId?: SortOrder
    modifierId?: SortOrder
  }

  export type AttackScalarRelationFilter = {
    is?: AttackWhereInput
    isNot?: AttackWhereInput
  }

  export type ItemAttackItemIdAttackIdCompoundUniqueInput = {
    itemId: number
    attackId: number
  }

  export type ItemAttackCountOrderByAggregateInput = {
    itemId?: SortOrder
    attackId?: SortOrder
  }

  export type ItemAttackAvgOrderByAggregateInput = {
    itemId?: SortOrder
    attackId?: SortOrder
  }

  export type ItemAttackMaxOrderByAggregateInput = {
    itemId?: SortOrder
    attackId?: SortOrder
  }

  export type ItemAttackMinOrderByAggregateInput = {
    itemId?: SortOrder
    attackId?: SortOrder
  }

  export type ItemAttackSumOrderByAggregateInput = {
    itemId?: SortOrder
    attackId?: SortOrder
  }

  export type AbilityModifierListRelationFilter = {
    every?: AbilityModifierWhereInput
    some?: AbilityModifierWhereInput
    none?: AbilityModifierWhereInput
  }

  export type AbilityAttackListRelationFilter = {
    every?: AbilityAttackWhereInput
    some?: AbilityAttackWhereInput
    none?: AbilityAttackWhereInput
  }

  export type AbilityModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbilityAttackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbilityCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
  }

  export type AbilityAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    manaCost?: SortOrder
  }

  export type AbilityMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
  }

  export type AbilityMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    passive?: SortOrder
    manaCost?: SortOrder
  }

  export type AbilitySumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    manaCost?: SortOrder
  }

  export type AbilityScalarRelationFilter = {
    is?: AbilityWhereInput
    isNot?: AbilityWhereInput
  }

  export type AbilityModifierAbilityIdModifierIdCompoundUniqueInput = {
    abilityId: number
    modifierId: number
  }

  export type AbilityModifierCountOrderByAggregateInput = {
    abilityId?: SortOrder
    modifierId?: SortOrder
  }

  export type AbilityModifierAvgOrderByAggregateInput = {
    abilityId?: SortOrder
    modifierId?: SortOrder
  }

  export type AbilityModifierMaxOrderByAggregateInput = {
    abilityId?: SortOrder
    modifierId?: SortOrder
  }

  export type AbilityModifierMinOrderByAggregateInput = {
    abilityId?: SortOrder
    modifierId?: SortOrder
  }

  export type AbilityModifierSumOrderByAggregateInput = {
    abilityId?: SortOrder
    modifierId?: SortOrder
  }

  export type AbilityAttackAbilityIdAttackIdCompoundUniqueInput = {
    abilityId: number
    attackId: number
  }

  export type AbilityAttackCountOrderByAggregateInput = {
    abilityId?: SortOrder
    attackId?: SortOrder
  }

  export type AbilityAttackAvgOrderByAggregateInput = {
    abilityId?: SortOrder
    attackId?: SortOrder
  }

  export type AbilityAttackMaxOrderByAggregateInput = {
    abilityId?: SortOrder
    attackId?: SortOrder
  }

  export type AbilityAttackMinOrderByAggregateInput = {
    abilityId?: SortOrder
    attackId?: SortOrder
  }

  export type AbilityAttackSumOrderByAggregateInput = {
    abilityId?: SortOrder
    attackId?: SortOrder
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

  export type EffectModifierListRelationFilter = {
    every?: EffectModifierWhereInput
    some?: EffectModifierWhereInput
    none?: EffectModifierWhereInput
  }

  export type EffectModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EffectCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    duration?: SortOrder
    stacks?: SortOrder
    startedAt?: SortOrder
  }

  export type EffectAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    sourceId?: SortOrder
    stacks?: SortOrder
  }

  export type EffectMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    stacks?: SortOrder
    startedAt?: SortOrder
  }

  export type EffectMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceName?: SortOrder
    active?: SortOrder
    stacks?: SortOrder
    startedAt?: SortOrder
  }

  export type EffectSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EffectScalarRelationFilter = {
    is?: EffectWhereInput
    isNot?: EffectWhereInput
  }

  export type EffectModifierEffectIdModifierIdCompoundUniqueInput = {
    effectId: number
    modifierId: number
  }

  export type EffectModifierCountOrderByAggregateInput = {
    effectId?: SortOrder
    modifierId?: SortOrder
  }

  export type EffectModifierAvgOrderByAggregateInput = {
    effectId?: SortOrder
    modifierId?: SortOrder
  }

  export type EffectModifierMaxOrderByAggregateInput = {
    effectId?: SortOrder
    modifierId?: SortOrder
  }

  export type EffectModifierMinOrderByAggregateInput = {
    effectId?: SortOrder
    modifierId?: SortOrder
  }

  export type EffectModifierSumOrderByAggregateInput = {
    effectId?: SortOrder
    modifierId?: SortOrder
  }

  export type ModifierCountOrderByAggregateInput = {
    id?: SortOrder
    target?: SortOrder
    value?: SortOrder
    type?: SortOrder
  }

  export type ModifierAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type ModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    type?: SortOrder
  }

  export type ModifierMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    type?: SortOrder
  }

  export type ModifierSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type AttackCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    attackRoll?: SortOrder
    damage?: SortOrder
    critical?: SortOrder
  }

  export type AttackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttackMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type AttackMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type AttackSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type ItemModifierCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemModifierCreateWithoutItemInput, ItemModifierUncheckedCreateWithoutItemInput> | ItemModifierCreateWithoutItemInput[] | ItemModifierUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemModifierCreateOrConnectWithoutItemInput | ItemModifierCreateOrConnectWithoutItemInput[]
    createMany?: ItemModifierCreateManyItemInputEnvelope
    connect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
  }

  export type ItemAttackCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemAttackCreateWithoutItemInput, ItemAttackUncheckedCreateWithoutItemInput> | ItemAttackCreateWithoutItemInput[] | ItemAttackUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemAttackCreateOrConnectWithoutItemInput | ItemAttackCreateOrConnectWithoutItemInput[]
    createMany?: ItemAttackCreateManyItemInputEnvelope
    connect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
  }

  export type InventoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemsInput
    connect?: InventoryWhereUniqueInput
  }

  export type ItemModifierUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemModifierCreateWithoutItemInput, ItemModifierUncheckedCreateWithoutItemInput> | ItemModifierCreateWithoutItemInput[] | ItemModifierUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemModifierCreateOrConnectWithoutItemInput | ItemModifierCreateOrConnectWithoutItemInput[]
    createMany?: ItemModifierCreateManyItemInputEnvelope
    connect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
  }

  export type ItemAttackUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemAttackCreateWithoutItemInput, ItemAttackUncheckedCreateWithoutItemInput> | ItemAttackCreateWithoutItemInput[] | ItemAttackUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemAttackCreateOrConnectWithoutItemInput | ItemAttackCreateOrConnectWithoutItemInput[]
    createMany?: ItemAttackCreateManyItemInputEnvelope
    connect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
  }

  export type ItemModifierUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemModifierCreateWithoutItemInput, ItemModifierUncheckedCreateWithoutItemInput> | ItemModifierCreateWithoutItemInput[] | ItemModifierUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemModifierCreateOrConnectWithoutItemInput | ItemModifierCreateOrConnectWithoutItemInput[]
    upsert?: ItemModifierUpsertWithWhereUniqueWithoutItemInput | ItemModifierUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemModifierCreateManyItemInputEnvelope
    set?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    disconnect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    delete?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    connect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    update?: ItemModifierUpdateWithWhereUniqueWithoutItemInput | ItemModifierUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemModifierUpdateManyWithWhereWithoutItemInput | ItemModifierUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemModifierScalarWhereInput | ItemModifierScalarWhereInput[]
  }

  export type ItemAttackUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemAttackCreateWithoutItemInput, ItemAttackUncheckedCreateWithoutItemInput> | ItemAttackCreateWithoutItemInput[] | ItemAttackUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemAttackCreateOrConnectWithoutItemInput | ItemAttackCreateOrConnectWithoutItemInput[]
    upsert?: ItemAttackUpsertWithWhereUniqueWithoutItemInput | ItemAttackUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemAttackCreateManyItemInputEnvelope
    set?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    disconnect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    delete?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    connect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    update?: ItemAttackUpdateWithWhereUniqueWithoutItemInput | ItemAttackUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemAttackUpdateManyWithWhereWithoutItemInput | ItemAttackUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemAttackScalarWhereInput | ItemAttackScalarWhereInput[]
  }

  export type InventoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemsInput
    upsert?: InventoryUpsertWithoutItemsInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutItemsInput, InventoryUpdateWithoutItemsInput>, InventoryUncheckedUpdateWithoutItemsInput>
  }

  export type ItemModifierUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemModifierCreateWithoutItemInput, ItemModifierUncheckedCreateWithoutItemInput> | ItemModifierCreateWithoutItemInput[] | ItemModifierUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemModifierCreateOrConnectWithoutItemInput | ItemModifierCreateOrConnectWithoutItemInput[]
    upsert?: ItemModifierUpsertWithWhereUniqueWithoutItemInput | ItemModifierUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemModifierCreateManyItemInputEnvelope
    set?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    disconnect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    delete?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    connect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    update?: ItemModifierUpdateWithWhereUniqueWithoutItemInput | ItemModifierUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemModifierUpdateManyWithWhereWithoutItemInput | ItemModifierUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemModifierScalarWhereInput | ItemModifierScalarWhereInput[]
  }

  export type ItemAttackUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemAttackCreateWithoutItemInput, ItemAttackUncheckedCreateWithoutItemInput> | ItemAttackCreateWithoutItemInput[] | ItemAttackUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemAttackCreateOrConnectWithoutItemInput | ItemAttackCreateOrConnectWithoutItemInput[]
    upsert?: ItemAttackUpsertWithWhereUniqueWithoutItemInput | ItemAttackUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemAttackCreateManyItemInputEnvelope
    set?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    disconnect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    delete?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    connect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    update?: ItemAttackUpdateWithWhereUniqueWithoutItemInput | ItemAttackUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemAttackUpdateManyWithWhereWithoutItemInput | ItemAttackUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemAttackScalarWhereInput | ItemAttackScalarWhereInput[]
  }

  export type InventoryItemCreateNestedOneWithoutModifiersInput = {
    create?: XOR<InventoryItemCreateWithoutModifiersInput, InventoryItemUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutModifiersInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type ModifierCreateNestedOneWithoutItemsInput = {
    create?: XOR<ModifierCreateWithoutItemsInput, ModifierUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutItemsInput
    connect?: ModifierWhereUniqueInput
  }

  export type InventoryItemUpdateOneRequiredWithoutModifiersNestedInput = {
    create?: XOR<InventoryItemCreateWithoutModifiersInput, InventoryItemUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutModifiersInput
    upsert?: InventoryItemUpsertWithoutModifiersInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutModifiersInput, InventoryItemUpdateWithoutModifiersInput>, InventoryItemUncheckedUpdateWithoutModifiersInput>
  }

  export type ModifierUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ModifierCreateWithoutItemsInput, ModifierUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutItemsInput
    upsert?: ModifierUpsertWithoutItemsInput
    connect?: ModifierWhereUniqueInput
    update?: XOR<XOR<ModifierUpdateToOneWithWhereWithoutItemsInput, ModifierUpdateWithoutItemsInput>, ModifierUncheckedUpdateWithoutItemsInput>
  }

  export type InventoryItemCreateNestedOneWithoutAttacksInput = {
    create?: XOR<InventoryItemCreateWithoutAttacksInput, InventoryItemUncheckedCreateWithoutAttacksInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutAttacksInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type AttackCreateNestedOneWithoutItemsInput = {
    create?: XOR<AttackCreateWithoutItemsInput, AttackUncheckedCreateWithoutItemsInput>
    connectOrCreate?: AttackCreateOrConnectWithoutItemsInput
    connect?: AttackWhereUniqueInput
  }

  export type InventoryItemUpdateOneRequiredWithoutAttacksNestedInput = {
    create?: XOR<InventoryItemCreateWithoutAttacksInput, InventoryItemUncheckedCreateWithoutAttacksInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutAttacksInput
    upsert?: InventoryItemUpsertWithoutAttacksInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutAttacksInput, InventoryItemUpdateWithoutAttacksInput>, InventoryItemUncheckedUpdateWithoutAttacksInput>
  }

  export type AttackUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<AttackCreateWithoutItemsInput, AttackUncheckedCreateWithoutItemsInput>
    connectOrCreate?: AttackCreateOrConnectWithoutItemsInput
    upsert?: AttackUpsertWithoutItemsInput
    connect?: AttackWhereUniqueInput
    update?: XOR<XOR<AttackUpdateToOneWithWhereWithoutItemsInput, AttackUpdateWithoutItemsInput>, AttackUncheckedUpdateWithoutItemsInput>
  }

  export type CharacterCreateNestedOneWithoutAbilitiesInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput
    connect?: CharacterWhereUniqueInput
  }

  export type AbilityModifierCreateNestedManyWithoutAbilityInput = {
    create?: XOR<AbilityModifierCreateWithoutAbilityInput, AbilityModifierUncheckedCreateWithoutAbilityInput> | AbilityModifierCreateWithoutAbilityInput[] | AbilityModifierUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: AbilityModifierCreateOrConnectWithoutAbilityInput | AbilityModifierCreateOrConnectWithoutAbilityInput[]
    createMany?: AbilityModifierCreateManyAbilityInputEnvelope
    connect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
  }

  export type AbilityAttackCreateNestedManyWithoutAbilityInput = {
    create?: XOR<AbilityAttackCreateWithoutAbilityInput, AbilityAttackUncheckedCreateWithoutAbilityInput> | AbilityAttackCreateWithoutAbilityInput[] | AbilityAttackUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: AbilityAttackCreateOrConnectWithoutAbilityInput | AbilityAttackCreateOrConnectWithoutAbilityInput[]
    createMany?: AbilityAttackCreateManyAbilityInputEnvelope
    connect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
  }

  export type AbilityModifierUncheckedCreateNestedManyWithoutAbilityInput = {
    create?: XOR<AbilityModifierCreateWithoutAbilityInput, AbilityModifierUncheckedCreateWithoutAbilityInput> | AbilityModifierCreateWithoutAbilityInput[] | AbilityModifierUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: AbilityModifierCreateOrConnectWithoutAbilityInput | AbilityModifierCreateOrConnectWithoutAbilityInput[]
    createMany?: AbilityModifierCreateManyAbilityInputEnvelope
    connect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
  }

  export type AbilityAttackUncheckedCreateNestedManyWithoutAbilityInput = {
    create?: XOR<AbilityAttackCreateWithoutAbilityInput, AbilityAttackUncheckedCreateWithoutAbilityInput> | AbilityAttackCreateWithoutAbilityInput[] | AbilityAttackUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: AbilityAttackCreateOrConnectWithoutAbilityInput | AbilityAttackCreateOrConnectWithoutAbilityInput[]
    createMany?: AbilityAttackCreateManyAbilityInputEnvelope
    connect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
  }

  export type CharacterUpdateOneRequiredWithoutAbilitiesNestedInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput
    upsert?: CharacterUpsertWithoutAbilitiesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutAbilitiesInput, CharacterUpdateWithoutAbilitiesInput>, CharacterUncheckedUpdateWithoutAbilitiesInput>
  }

  export type AbilityModifierUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<AbilityModifierCreateWithoutAbilityInput, AbilityModifierUncheckedCreateWithoutAbilityInput> | AbilityModifierCreateWithoutAbilityInput[] | AbilityModifierUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: AbilityModifierCreateOrConnectWithoutAbilityInput | AbilityModifierCreateOrConnectWithoutAbilityInput[]
    upsert?: AbilityModifierUpsertWithWhereUniqueWithoutAbilityInput | AbilityModifierUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: AbilityModifierCreateManyAbilityInputEnvelope
    set?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    disconnect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    delete?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    connect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    update?: AbilityModifierUpdateWithWhereUniqueWithoutAbilityInput | AbilityModifierUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: AbilityModifierUpdateManyWithWhereWithoutAbilityInput | AbilityModifierUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: AbilityModifierScalarWhereInput | AbilityModifierScalarWhereInput[]
  }

  export type AbilityAttackUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<AbilityAttackCreateWithoutAbilityInput, AbilityAttackUncheckedCreateWithoutAbilityInput> | AbilityAttackCreateWithoutAbilityInput[] | AbilityAttackUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: AbilityAttackCreateOrConnectWithoutAbilityInput | AbilityAttackCreateOrConnectWithoutAbilityInput[]
    upsert?: AbilityAttackUpsertWithWhereUniqueWithoutAbilityInput | AbilityAttackUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: AbilityAttackCreateManyAbilityInputEnvelope
    set?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    disconnect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    delete?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    connect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    update?: AbilityAttackUpdateWithWhereUniqueWithoutAbilityInput | AbilityAttackUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: AbilityAttackUpdateManyWithWhereWithoutAbilityInput | AbilityAttackUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: AbilityAttackScalarWhereInput | AbilityAttackScalarWhereInput[]
  }

  export type AbilityModifierUncheckedUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<AbilityModifierCreateWithoutAbilityInput, AbilityModifierUncheckedCreateWithoutAbilityInput> | AbilityModifierCreateWithoutAbilityInput[] | AbilityModifierUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: AbilityModifierCreateOrConnectWithoutAbilityInput | AbilityModifierCreateOrConnectWithoutAbilityInput[]
    upsert?: AbilityModifierUpsertWithWhereUniqueWithoutAbilityInput | AbilityModifierUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: AbilityModifierCreateManyAbilityInputEnvelope
    set?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    disconnect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    delete?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    connect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    update?: AbilityModifierUpdateWithWhereUniqueWithoutAbilityInput | AbilityModifierUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: AbilityModifierUpdateManyWithWhereWithoutAbilityInput | AbilityModifierUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: AbilityModifierScalarWhereInput | AbilityModifierScalarWhereInput[]
  }

  export type AbilityAttackUncheckedUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<AbilityAttackCreateWithoutAbilityInput, AbilityAttackUncheckedCreateWithoutAbilityInput> | AbilityAttackCreateWithoutAbilityInput[] | AbilityAttackUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: AbilityAttackCreateOrConnectWithoutAbilityInput | AbilityAttackCreateOrConnectWithoutAbilityInput[]
    upsert?: AbilityAttackUpsertWithWhereUniqueWithoutAbilityInput | AbilityAttackUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: AbilityAttackCreateManyAbilityInputEnvelope
    set?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    disconnect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    delete?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    connect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    update?: AbilityAttackUpdateWithWhereUniqueWithoutAbilityInput | AbilityAttackUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: AbilityAttackUpdateManyWithWhereWithoutAbilityInput | AbilityAttackUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: AbilityAttackScalarWhereInput | AbilityAttackScalarWhereInput[]
  }

  export type AbilityCreateNestedOneWithoutModifiersInput = {
    create?: XOR<AbilityCreateWithoutModifiersInput, AbilityUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutModifiersInput
    connect?: AbilityWhereUniqueInput
  }

  export type ModifierCreateNestedOneWithoutAbilitiesInput = {
    create?: XOR<ModifierCreateWithoutAbilitiesInput, ModifierUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutAbilitiesInput
    connect?: ModifierWhereUniqueInput
  }

  export type AbilityUpdateOneRequiredWithoutModifiersNestedInput = {
    create?: XOR<AbilityCreateWithoutModifiersInput, AbilityUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutModifiersInput
    upsert?: AbilityUpsertWithoutModifiersInput
    connect?: AbilityWhereUniqueInput
    update?: XOR<XOR<AbilityUpdateToOneWithWhereWithoutModifiersInput, AbilityUpdateWithoutModifiersInput>, AbilityUncheckedUpdateWithoutModifiersInput>
  }

  export type ModifierUpdateOneRequiredWithoutAbilitiesNestedInput = {
    create?: XOR<ModifierCreateWithoutAbilitiesInput, ModifierUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutAbilitiesInput
    upsert?: ModifierUpsertWithoutAbilitiesInput
    connect?: ModifierWhereUniqueInput
    update?: XOR<XOR<ModifierUpdateToOneWithWhereWithoutAbilitiesInput, ModifierUpdateWithoutAbilitiesInput>, ModifierUncheckedUpdateWithoutAbilitiesInput>
  }

  export type AbilityCreateNestedOneWithoutAttacksInput = {
    create?: XOR<AbilityCreateWithoutAttacksInput, AbilityUncheckedCreateWithoutAttacksInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutAttacksInput
    connect?: AbilityWhereUniqueInput
  }

  export type AttackCreateNestedOneWithoutAbilityInput = {
    create?: XOR<AttackCreateWithoutAbilityInput, AttackUncheckedCreateWithoutAbilityInput>
    connectOrCreate?: AttackCreateOrConnectWithoutAbilityInput
    connect?: AttackWhereUniqueInput
  }

  export type AbilityUpdateOneRequiredWithoutAttacksNestedInput = {
    create?: XOR<AbilityCreateWithoutAttacksInput, AbilityUncheckedCreateWithoutAttacksInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutAttacksInput
    upsert?: AbilityUpsertWithoutAttacksInput
    connect?: AbilityWhereUniqueInput
    update?: XOR<XOR<AbilityUpdateToOneWithWhereWithoutAttacksInput, AbilityUpdateWithoutAttacksInput>, AbilityUncheckedUpdateWithoutAttacksInput>
  }

  export type AttackUpdateOneRequiredWithoutAbilityNestedInput = {
    create?: XOR<AttackCreateWithoutAbilityInput, AttackUncheckedCreateWithoutAbilityInput>
    connectOrCreate?: AttackCreateOrConnectWithoutAbilityInput
    upsert?: AttackUpsertWithoutAbilityInput
    connect?: AttackWhereUniqueInput
    update?: XOR<XOR<AttackUpdateToOneWithWhereWithoutAbilityInput, AttackUpdateWithoutAbilityInput>, AttackUncheckedUpdateWithoutAbilityInput>
  }

  export type CharacterCreateNestedOneWithoutEffectsInput = {
    create?: XOR<CharacterCreateWithoutEffectsInput, CharacterUncheckedCreateWithoutEffectsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutEffectsInput
    connect?: CharacterWhereUniqueInput
  }

  export type EffectModifierCreateNestedManyWithoutEffectInput = {
    create?: XOR<EffectModifierCreateWithoutEffectInput, EffectModifierUncheckedCreateWithoutEffectInput> | EffectModifierCreateWithoutEffectInput[] | EffectModifierUncheckedCreateWithoutEffectInput[]
    connectOrCreate?: EffectModifierCreateOrConnectWithoutEffectInput | EffectModifierCreateOrConnectWithoutEffectInput[]
    createMany?: EffectModifierCreateManyEffectInputEnvelope
    connect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
  }

  export type EffectModifierUncheckedCreateNestedManyWithoutEffectInput = {
    create?: XOR<EffectModifierCreateWithoutEffectInput, EffectModifierUncheckedCreateWithoutEffectInput> | EffectModifierCreateWithoutEffectInput[] | EffectModifierUncheckedCreateWithoutEffectInput[]
    connectOrCreate?: EffectModifierCreateOrConnectWithoutEffectInput | EffectModifierCreateOrConnectWithoutEffectInput[]
    createMany?: EffectModifierCreateManyEffectInputEnvelope
    connect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
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

  export type EffectModifierUpdateManyWithoutEffectNestedInput = {
    create?: XOR<EffectModifierCreateWithoutEffectInput, EffectModifierUncheckedCreateWithoutEffectInput> | EffectModifierCreateWithoutEffectInput[] | EffectModifierUncheckedCreateWithoutEffectInput[]
    connectOrCreate?: EffectModifierCreateOrConnectWithoutEffectInput | EffectModifierCreateOrConnectWithoutEffectInput[]
    upsert?: EffectModifierUpsertWithWhereUniqueWithoutEffectInput | EffectModifierUpsertWithWhereUniqueWithoutEffectInput[]
    createMany?: EffectModifierCreateManyEffectInputEnvelope
    set?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    disconnect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    delete?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    connect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    update?: EffectModifierUpdateWithWhereUniqueWithoutEffectInput | EffectModifierUpdateWithWhereUniqueWithoutEffectInput[]
    updateMany?: EffectModifierUpdateManyWithWhereWithoutEffectInput | EffectModifierUpdateManyWithWhereWithoutEffectInput[]
    deleteMany?: EffectModifierScalarWhereInput | EffectModifierScalarWhereInput[]
  }

  export type EffectModifierUncheckedUpdateManyWithoutEffectNestedInput = {
    create?: XOR<EffectModifierCreateWithoutEffectInput, EffectModifierUncheckedCreateWithoutEffectInput> | EffectModifierCreateWithoutEffectInput[] | EffectModifierUncheckedCreateWithoutEffectInput[]
    connectOrCreate?: EffectModifierCreateOrConnectWithoutEffectInput | EffectModifierCreateOrConnectWithoutEffectInput[]
    upsert?: EffectModifierUpsertWithWhereUniqueWithoutEffectInput | EffectModifierUpsertWithWhereUniqueWithoutEffectInput[]
    createMany?: EffectModifierCreateManyEffectInputEnvelope
    set?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    disconnect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    delete?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    connect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    update?: EffectModifierUpdateWithWhereUniqueWithoutEffectInput | EffectModifierUpdateWithWhereUniqueWithoutEffectInput[]
    updateMany?: EffectModifierUpdateManyWithWhereWithoutEffectInput | EffectModifierUpdateManyWithWhereWithoutEffectInput[]
    deleteMany?: EffectModifierScalarWhereInput | EffectModifierScalarWhereInput[]
  }

  export type EffectCreateNestedOneWithoutModifiersInput = {
    create?: XOR<EffectCreateWithoutModifiersInput, EffectUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: EffectCreateOrConnectWithoutModifiersInput
    connect?: EffectWhereUniqueInput
  }

  export type ModifierCreateNestedOneWithoutEffectsInput = {
    create?: XOR<ModifierCreateWithoutEffectsInput, ModifierUncheckedCreateWithoutEffectsInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutEffectsInput
    connect?: ModifierWhereUniqueInput
  }

  export type EffectUpdateOneRequiredWithoutModifiersNestedInput = {
    create?: XOR<EffectCreateWithoutModifiersInput, EffectUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: EffectCreateOrConnectWithoutModifiersInput
    upsert?: EffectUpsertWithoutModifiersInput
    connect?: EffectWhereUniqueInput
    update?: XOR<XOR<EffectUpdateToOneWithWhereWithoutModifiersInput, EffectUpdateWithoutModifiersInput>, EffectUncheckedUpdateWithoutModifiersInput>
  }

  export type ModifierUpdateOneRequiredWithoutEffectsNestedInput = {
    create?: XOR<ModifierCreateWithoutEffectsInput, ModifierUncheckedCreateWithoutEffectsInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutEffectsInput
    upsert?: ModifierUpsertWithoutEffectsInput
    connect?: ModifierWhereUniqueInput
    update?: XOR<XOR<ModifierUpdateToOneWithWhereWithoutEffectsInput, ModifierUpdateWithoutEffectsInput>, ModifierUncheckedUpdateWithoutEffectsInput>
  }

  export type EffectModifierCreateNestedManyWithoutModifierInput = {
    create?: XOR<EffectModifierCreateWithoutModifierInput, EffectModifierUncheckedCreateWithoutModifierInput> | EffectModifierCreateWithoutModifierInput[] | EffectModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: EffectModifierCreateOrConnectWithoutModifierInput | EffectModifierCreateOrConnectWithoutModifierInput[]
    createMany?: EffectModifierCreateManyModifierInputEnvelope
    connect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
  }

  export type AbilityModifierCreateNestedManyWithoutModifierInput = {
    create?: XOR<AbilityModifierCreateWithoutModifierInput, AbilityModifierUncheckedCreateWithoutModifierInput> | AbilityModifierCreateWithoutModifierInput[] | AbilityModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: AbilityModifierCreateOrConnectWithoutModifierInput | AbilityModifierCreateOrConnectWithoutModifierInput[]
    createMany?: AbilityModifierCreateManyModifierInputEnvelope
    connect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
  }

  export type ItemModifierCreateNestedManyWithoutModifierInput = {
    create?: XOR<ItemModifierCreateWithoutModifierInput, ItemModifierUncheckedCreateWithoutModifierInput> | ItemModifierCreateWithoutModifierInput[] | ItemModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: ItemModifierCreateOrConnectWithoutModifierInput | ItemModifierCreateOrConnectWithoutModifierInput[]
    createMany?: ItemModifierCreateManyModifierInputEnvelope
    connect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
  }

  export type EffectModifierUncheckedCreateNestedManyWithoutModifierInput = {
    create?: XOR<EffectModifierCreateWithoutModifierInput, EffectModifierUncheckedCreateWithoutModifierInput> | EffectModifierCreateWithoutModifierInput[] | EffectModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: EffectModifierCreateOrConnectWithoutModifierInput | EffectModifierCreateOrConnectWithoutModifierInput[]
    createMany?: EffectModifierCreateManyModifierInputEnvelope
    connect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
  }

  export type AbilityModifierUncheckedCreateNestedManyWithoutModifierInput = {
    create?: XOR<AbilityModifierCreateWithoutModifierInput, AbilityModifierUncheckedCreateWithoutModifierInput> | AbilityModifierCreateWithoutModifierInput[] | AbilityModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: AbilityModifierCreateOrConnectWithoutModifierInput | AbilityModifierCreateOrConnectWithoutModifierInput[]
    createMany?: AbilityModifierCreateManyModifierInputEnvelope
    connect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
  }

  export type ItemModifierUncheckedCreateNestedManyWithoutModifierInput = {
    create?: XOR<ItemModifierCreateWithoutModifierInput, ItemModifierUncheckedCreateWithoutModifierInput> | ItemModifierCreateWithoutModifierInput[] | ItemModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: ItemModifierCreateOrConnectWithoutModifierInput | ItemModifierCreateOrConnectWithoutModifierInput[]
    createMany?: ItemModifierCreateManyModifierInputEnvelope
    connect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
  }

  export type EffectModifierUpdateManyWithoutModifierNestedInput = {
    create?: XOR<EffectModifierCreateWithoutModifierInput, EffectModifierUncheckedCreateWithoutModifierInput> | EffectModifierCreateWithoutModifierInput[] | EffectModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: EffectModifierCreateOrConnectWithoutModifierInput | EffectModifierCreateOrConnectWithoutModifierInput[]
    upsert?: EffectModifierUpsertWithWhereUniqueWithoutModifierInput | EffectModifierUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: EffectModifierCreateManyModifierInputEnvelope
    set?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    disconnect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    delete?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    connect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    update?: EffectModifierUpdateWithWhereUniqueWithoutModifierInput | EffectModifierUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: EffectModifierUpdateManyWithWhereWithoutModifierInput | EffectModifierUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: EffectModifierScalarWhereInput | EffectModifierScalarWhereInput[]
  }

  export type AbilityModifierUpdateManyWithoutModifierNestedInput = {
    create?: XOR<AbilityModifierCreateWithoutModifierInput, AbilityModifierUncheckedCreateWithoutModifierInput> | AbilityModifierCreateWithoutModifierInput[] | AbilityModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: AbilityModifierCreateOrConnectWithoutModifierInput | AbilityModifierCreateOrConnectWithoutModifierInput[]
    upsert?: AbilityModifierUpsertWithWhereUniqueWithoutModifierInput | AbilityModifierUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: AbilityModifierCreateManyModifierInputEnvelope
    set?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    disconnect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    delete?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    connect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    update?: AbilityModifierUpdateWithWhereUniqueWithoutModifierInput | AbilityModifierUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: AbilityModifierUpdateManyWithWhereWithoutModifierInput | AbilityModifierUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: AbilityModifierScalarWhereInput | AbilityModifierScalarWhereInput[]
  }

  export type ItemModifierUpdateManyWithoutModifierNestedInput = {
    create?: XOR<ItemModifierCreateWithoutModifierInput, ItemModifierUncheckedCreateWithoutModifierInput> | ItemModifierCreateWithoutModifierInput[] | ItemModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: ItemModifierCreateOrConnectWithoutModifierInput | ItemModifierCreateOrConnectWithoutModifierInput[]
    upsert?: ItemModifierUpsertWithWhereUniqueWithoutModifierInput | ItemModifierUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: ItemModifierCreateManyModifierInputEnvelope
    set?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    disconnect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    delete?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    connect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    update?: ItemModifierUpdateWithWhereUniqueWithoutModifierInput | ItemModifierUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: ItemModifierUpdateManyWithWhereWithoutModifierInput | ItemModifierUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: ItemModifierScalarWhereInput | ItemModifierScalarWhereInput[]
  }

  export type EffectModifierUncheckedUpdateManyWithoutModifierNestedInput = {
    create?: XOR<EffectModifierCreateWithoutModifierInput, EffectModifierUncheckedCreateWithoutModifierInput> | EffectModifierCreateWithoutModifierInput[] | EffectModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: EffectModifierCreateOrConnectWithoutModifierInput | EffectModifierCreateOrConnectWithoutModifierInput[]
    upsert?: EffectModifierUpsertWithWhereUniqueWithoutModifierInput | EffectModifierUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: EffectModifierCreateManyModifierInputEnvelope
    set?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    disconnect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    delete?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    connect?: EffectModifierWhereUniqueInput | EffectModifierWhereUniqueInput[]
    update?: EffectModifierUpdateWithWhereUniqueWithoutModifierInput | EffectModifierUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: EffectModifierUpdateManyWithWhereWithoutModifierInput | EffectModifierUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: EffectModifierScalarWhereInput | EffectModifierScalarWhereInput[]
  }

  export type AbilityModifierUncheckedUpdateManyWithoutModifierNestedInput = {
    create?: XOR<AbilityModifierCreateWithoutModifierInput, AbilityModifierUncheckedCreateWithoutModifierInput> | AbilityModifierCreateWithoutModifierInput[] | AbilityModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: AbilityModifierCreateOrConnectWithoutModifierInput | AbilityModifierCreateOrConnectWithoutModifierInput[]
    upsert?: AbilityModifierUpsertWithWhereUniqueWithoutModifierInput | AbilityModifierUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: AbilityModifierCreateManyModifierInputEnvelope
    set?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    disconnect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    delete?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    connect?: AbilityModifierWhereUniqueInput | AbilityModifierWhereUniqueInput[]
    update?: AbilityModifierUpdateWithWhereUniqueWithoutModifierInput | AbilityModifierUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: AbilityModifierUpdateManyWithWhereWithoutModifierInput | AbilityModifierUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: AbilityModifierScalarWhereInput | AbilityModifierScalarWhereInput[]
  }

  export type ItemModifierUncheckedUpdateManyWithoutModifierNestedInput = {
    create?: XOR<ItemModifierCreateWithoutModifierInput, ItemModifierUncheckedCreateWithoutModifierInput> | ItemModifierCreateWithoutModifierInput[] | ItemModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: ItemModifierCreateOrConnectWithoutModifierInput | ItemModifierCreateOrConnectWithoutModifierInput[]
    upsert?: ItemModifierUpsertWithWhereUniqueWithoutModifierInput | ItemModifierUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: ItemModifierCreateManyModifierInputEnvelope
    set?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    disconnect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    delete?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    connect?: ItemModifierWhereUniqueInput | ItemModifierWhereUniqueInput[]
    update?: ItemModifierUpdateWithWhereUniqueWithoutModifierInput | ItemModifierUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: ItemModifierUpdateManyWithWhereWithoutModifierInput | ItemModifierUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: ItemModifierScalarWhereInput | ItemModifierScalarWhereInput[]
  }

  export type ItemAttackCreateNestedManyWithoutAttackInput = {
    create?: XOR<ItemAttackCreateWithoutAttackInput, ItemAttackUncheckedCreateWithoutAttackInput> | ItemAttackCreateWithoutAttackInput[] | ItemAttackUncheckedCreateWithoutAttackInput[]
    connectOrCreate?: ItemAttackCreateOrConnectWithoutAttackInput | ItemAttackCreateOrConnectWithoutAttackInput[]
    createMany?: ItemAttackCreateManyAttackInputEnvelope
    connect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
  }

  export type AbilityAttackCreateNestedManyWithoutAttackInput = {
    create?: XOR<AbilityAttackCreateWithoutAttackInput, AbilityAttackUncheckedCreateWithoutAttackInput> | AbilityAttackCreateWithoutAttackInput[] | AbilityAttackUncheckedCreateWithoutAttackInput[]
    connectOrCreate?: AbilityAttackCreateOrConnectWithoutAttackInput | AbilityAttackCreateOrConnectWithoutAttackInput[]
    createMany?: AbilityAttackCreateManyAttackInputEnvelope
    connect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
  }

  export type ItemAttackUncheckedCreateNestedManyWithoutAttackInput = {
    create?: XOR<ItemAttackCreateWithoutAttackInput, ItemAttackUncheckedCreateWithoutAttackInput> | ItemAttackCreateWithoutAttackInput[] | ItemAttackUncheckedCreateWithoutAttackInput[]
    connectOrCreate?: ItemAttackCreateOrConnectWithoutAttackInput | ItemAttackCreateOrConnectWithoutAttackInput[]
    createMany?: ItemAttackCreateManyAttackInputEnvelope
    connect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
  }

  export type AbilityAttackUncheckedCreateNestedManyWithoutAttackInput = {
    create?: XOR<AbilityAttackCreateWithoutAttackInput, AbilityAttackUncheckedCreateWithoutAttackInput> | AbilityAttackCreateWithoutAttackInput[] | AbilityAttackUncheckedCreateWithoutAttackInput[]
    connectOrCreate?: AbilityAttackCreateOrConnectWithoutAttackInput | AbilityAttackCreateOrConnectWithoutAttackInput[]
    createMany?: AbilityAttackCreateManyAttackInputEnvelope
    connect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
  }

  export type ItemAttackUpdateManyWithoutAttackNestedInput = {
    create?: XOR<ItemAttackCreateWithoutAttackInput, ItemAttackUncheckedCreateWithoutAttackInput> | ItemAttackCreateWithoutAttackInput[] | ItemAttackUncheckedCreateWithoutAttackInput[]
    connectOrCreate?: ItemAttackCreateOrConnectWithoutAttackInput | ItemAttackCreateOrConnectWithoutAttackInput[]
    upsert?: ItemAttackUpsertWithWhereUniqueWithoutAttackInput | ItemAttackUpsertWithWhereUniqueWithoutAttackInput[]
    createMany?: ItemAttackCreateManyAttackInputEnvelope
    set?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    disconnect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    delete?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    connect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    update?: ItemAttackUpdateWithWhereUniqueWithoutAttackInput | ItemAttackUpdateWithWhereUniqueWithoutAttackInput[]
    updateMany?: ItemAttackUpdateManyWithWhereWithoutAttackInput | ItemAttackUpdateManyWithWhereWithoutAttackInput[]
    deleteMany?: ItemAttackScalarWhereInput | ItemAttackScalarWhereInput[]
  }

  export type AbilityAttackUpdateManyWithoutAttackNestedInput = {
    create?: XOR<AbilityAttackCreateWithoutAttackInput, AbilityAttackUncheckedCreateWithoutAttackInput> | AbilityAttackCreateWithoutAttackInput[] | AbilityAttackUncheckedCreateWithoutAttackInput[]
    connectOrCreate?: AbilityAttackCreateOrConnectWithoutAttackInput | AbilityAttackCreateOrConnectWithoutAttackInput[]
    upsert?: AbilityAttackUpsertWithWhereUniqueWithoutAttackInput | AbilityAttackUpsertWithWhereUniqueWithoutAttackInput[]
    createMany?: AbilityAttackCreateManyAttackInputEnvelope
    set?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    disconnect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    delete?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    connect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    update?: AbilityAttackUpdateWithWhereUniqueWithoutAttackInput | AbilityAttackUpdateWithWhereUniqueWithoutAttackInput[]
    updateMany?: AbilityAttackUpdateManyWithWhereWithoutAttackInput | AbilityAttackUpdateManyWithWhereWithoutAttackInput[]
    deleteMany?: AbilityAttackScalarWhereInput | AbilityAttackScalarWhereInput[]
  }

  export type ItemAttackUncheckedUpdateManyWithoutAttackNestedInput = {
    create?: XOR<ItemAttackCreateWithoutAttackInput, ItemAttackUncheckedCreateWithoutAttackInput> | ItemAttackCreateWithoutAttackInput[] | ItemAttackUncheckedCreateWithoutAttackInput[]
    connectOrCreate?: ItemAttackCreateOrConnectWithoutAttackInput | ItemAttackCreateOrConnectWithoutAttackInput[]
    upsert?: ItemAttackUpsertWithWhereUniqueWithoutAttackInput | ItemAttackUpsertWithWhereUniqueWithoutAttackInput[]
    createMany?: ItemAttackCreateManyAttackInputEnvelope
    set?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    disconnect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    delete?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    connect?: ItemAttackWhereUniqueInput | ItemAttackWhereUniqueInput[]
    update?: ItemAttackUpdateWithWhereUniqueWithoutAttackInput | ItemAttackUpdateWithWhereUniqueWithoutAttackInput[]
    updateMany?: ItemAttackUpdateManyWithWhereWithoutAttackInput | ItemAttackUpdateManyWithWhereWithoutAttackInput[]
    deleteMany?: ItemAttackScalarWhereInput | ItemAttackScalarWhereInput[]
  }

  export type AbilityAttackUncheckedUpdateManyWithoutAttackNestedInput = {
    create?: XOR<AbilityAttackCreateWithoutAttackInput, AbilityAttackUncheckedCreateWithoutAttackInput> | AbilityAttackCreateWithoutAttackInput[] | AbilityAttackUncheckedCreateWithoutAttackInput[]
    connectOrCreate?: AbilityAttackCreateOrConnectWithoutAttackInput | AbilityAttackCreateOrConnectWithoutAttackInput[]
    upsert?: AbilityAttackUpsertWithWhereUniqueWithoutAttackInput | AbilityAttackUpsertWithWhereUniqueWithoutAttackInput[]
    createMany?: AbilityAttackCreateManyAttackInputEnvelope
    set?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    disconnect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    delete?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    connect?: AbilityAttackWhereUniqueInput | AbilityAttackWhereUniqueInput[]
    update?: AbilityAttackUpdateWithWhereUniqueWithoutAttackInput | AbilityAttackUpdateWithWhereUniqueWithoutAttackInput[]
    updateMany?: AbilityAttackUpdateManyWithWhereWithoutAttackInput | AbilityAttackUpdateManyWithWhereWithoutAttackInput[]
    deleteMany?: AbilityAttackScalarWhereInput | AbilityAttackScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    strength?: number
    dexterity?: number
    constitution?: number
    intelligence?: number
    wisdom?: number
    charisma?: number
  }

  export type AttributesUncheckedCreateWithoutCharacterInput = {
    strength?: number
    dexterity?: number
    constitution?: number
    intelligence?: number
    wisdom?: number
    charisma?: number
  }

  export type AttributesCreateOrConnectWithoutCharacterInput = {
    where: AttributesWhereUniqueInput
    create: XOR<AttributesCreateWithoutCharacterInput, AttributesUncheckedCreateWithoutCharacterInput>
  }

  export type ExpertiseCharacterCreateWithoutCharacterInput = {
    value?: number
    trained?: boolean
    trainBonus?: number
    expertise: ExpertiseCreateNestedOneWithoutCharacterLinkInput
  }

  export type ExpertiseCharacterUncheckedCreateWithoutCharacterInput = {
    expertiseId: number
    value?: number
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
    limit?: number
    tibares?: number
    items?: InventoryItemCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutCharacterInput = {
    limit?: number
    tibares?: number
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
    modifiers?: AbilityModifierCreateNestedManyWithoutAbilityInput
    attacks?: AbilityAttackCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateWithoutCharacterInput = {
    id?: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    modifiers?: AbilityModifierUncheckedCreateNestedManyWithoutAbilityInput
    attacks?: AbilityAttackUncheckedCreateNestedManyWithoutAbilityInput
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
    startedAt: Date | string
    modifiers?: EffectModifierCreateNestedManyWithoutEffectInput
  }

  export type EffectUncheckedCreateWithoutCharacterInput = {
    id?: number
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    startedAt: Date | string
    modifiers?: EffectModifierUncheckedCreateNestedManyWithoutEffectInput
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
    characterId?: IntFilter<"ExpertiseCharacter"> | number
    expertiseId?: IntFilter<"ExpertiseCharacter"> | number
    value?: IntFilter<"ExpertiseCharacter"> | number
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
    limit?: IntFieldUpdateOperationsInput | number
    tibares?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutCharacterInput = {
    limit?: IntFieldUpdateOperationsInput | number
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
    id?: IntFilter<"Ability"> | number
    characterId?: IntFilter<"Ability"> | number
    type?: StringFilter<"Ability"> | string
    name?: StringFilter<"Ability"> | string
    description?: StringFilter<"Ability"> | string
    passive?: BoolFilter<"Ability"> | boolean
    manaCost?: IntFilter<"Ability"> | number
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
    id?: IntFilter<"Effect"> | number
    characterId?: IntFilter<"Effect"> | number
    sourceType?: StringFilter<"Effect"> | string
    sourceId?: IntNullableFilter<"Effect"> | number | null
    sourceName?: StringFilter<"Effect"> | string
    active?: BoolFilter<"Effect"> | boolean
    duration?: JsonFilter<"Effect">
    stacks?: IntFilter<"Effect"> | number
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
    condition?: string
    disable?: boolean
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
    condition?: string
    disable?: boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUncheckedUpdateManyWithoutCharacterNestedInput
    effects?: EffectUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type ExpertiseCharacterCreateWithoutExpertiseInput = {
    value?: number
    trained?: boolean
    trainBonus?: number
    character: CharacterCreateNestedOneWithoutExpertisiesInput
  }

  export type ExpertiseCharacterUncheckedCreateWithoutExpertiseInput = {
    characterId: number
    value?: number
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
    condition?: string
    disable?: boolean
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
    condition?: string
    disable?: boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    modifiers?: ItemModifierCreateNestedManyWithoutItemInput
    attacks?: ItemAttackCreateNestedManyWithoutItemInput
  }

  export type InventoryItemUncheckedCreateWithoutInventoryInput = {
    id?: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    modifiers?: ItemModifierUncheckedCreateNestedManyWithoutItemInput
    attacks?: ItemAttackUncheckedCreateNestedManyWithoutItemInput
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
    condition?: string
    disable?: boolean
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
    condition?: string
    disable?: boolean
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
    id?: IntFilter<"InventoryItem"> | number
    inventoryId?: IntFilter<"InventoryItem"> | number
    type?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    description?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    slot?: IntFilter<"InventoryItem"> | number
    isEquippable?: BoolFilter<"InventoryItem"> | boolean
    equipped?: BoolFilter<"InventoryItem"> | boolean
    passive?: BoolFilter<"InventoryItem"> | boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUncheckedUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    abilities?: AbilityUncheckedUpdateManyWithoutCharacterNestedInput
    effects?: EffectUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type ItemModifierCreateWithoutItemInput = {
    modifier: ModifierCreateNestedOneWithoutItemsInput
  }

  export type ItemModifierUncheckedCreateWithoutItemInput = {
    modifierId: number
  }

  export type ItemModifierCreateOrConnectWithoutItemInput = {
    where: ItemModifierWhereUniqueInput
    create: XOR<ItemModifierCreateWithoutItemInput, ItemModifierUncheckedCreateWithoutItemInput>
  }

  export type ItemModifierCreateManyItemInputEnvelope = {
    data: ItemModifierCreateManyItemInput | ItemModifierCreateManyItemInput[]
  }

  export type ItemAttackCreateWithoutItemInput = {
    attack: AttackCreateNestedOneWithoutItemsInput
  }

  export type ItemAttackUncheckedCreateWithoutItemInput = {
    attackId: number
  }

  export type ItemAttackCreateOrConnectWithoutItemInput = {
    where: ItemAttackWhereUniqueInput
    create: XOR<ItemAttackCreateWithoutItemInput, ItemAttackUncheckedCreateWithoutItemInput>
  }

  export type ItemAttackCreateManyItemInputEnvelope = {
    data: ItemAttackCreateManyItemInput | ItemAttackCreateManyItemInput[]
  }

  export type InventoryCreateWithoutItemsInput = {
    limit?: number
    tibares?: number
    character: CharacterCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutItemsInput = {
    characterId: number
    limit?: number
    tibares?: number
  }

  export type InventoryCreateOrConnectWithoutItemsInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
  }

  export type ItemModifierUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemModifierWhereUniqueInput
    update: XOR<ItemModifierUpdateWithoutItemInput, ItemModifierUncheckedUpdateWithoutItemInput>
    create: XOR<ItemModifierCreateWithoutItemInput, ItemModifierUncheckedCreateWithoutItemInput>
  }

  export type ItemModifierUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemModifierWhereUniqueInput
    data: XOR<ItemModifierUpdateWithoutItemInput, ItemModifierUncheckedUpdateWithoutItemInput>
  }

  export type ItemModifierUpdateManyWithWhereWithoutItemInput = {
    where: ItemModifierScalarWhereInput
    data: XOR<ItemModifierUpdateManyMutationInput, ItemModifierUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemModifierScalarWhereInput = {
    AND?: ItemModifierScalarWhereInput | ItemModifierScalarWhereInput[]
    OR?: ItemModifierScalarWhereInput[]
    NOT?: ItemModifierScalarWhereInput | ItemModifierScalarWhereInput[]
    itemId?: IntFilter<"ItemModifier"> | number
    modifierId?: IntFilter<"ItemModifier"> | number
  }

  export type ItemAttackUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemAttackWhereUniqueInput
    update: XOR<ItemAttackUpdateWithoutItemInput, ItemAttackUncheckedUpdateWithoutItemInput>
    create: XOR<ItemAttackCreateWithoutItemInput, ItemAttackUncheckedCreateWithoutItemInput>
  }

  export type ItemAttackUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemAttackWhereUniqueInput
    data: XOR<ItemAttackUpdateWithoutItemInput, ItemAttackUncheckedUpdateWithoutItemInput>
  }

  export type ItemAttackUpdateManyWithWhereWithoutItemInput = {
    where: ItemAttackScalarWhereInput
    data: XOR<ItemAttackUpdateManyMutationInput, ItemAttackUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemAttackScalarWhereInput = {
    AND?: ItemAttackScalarWhereInput | ItemAttackScalarWhereInput[]
    OR?: ItemAttackScalarWhereInput[]
    NOT?: ItemAttackScalarWhereInput | ItemAttackScalarWhereInput[]
    itemId?: IntFilter<"ItemAttack"> | number
    attackId?: IntFilter<"ItemAttack"> | number
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
    limit?: IntFieldUpdateOperationsInput | number
    tibares?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutItemsInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    limit?: IntFieldUpdateOperationsInput | number
    tibares?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateWithoutModifiersInput = {
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks?: ItemAttackCreateNestedManyWithoutItemInput
    inventory: InventoryCreateNestedOneWithoutItemsInput
  }

  export type InventoryItemUncheckedCreateWithoutModifiersInput = {
    id?: number
    inventoryId: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    attacks?: ItemAttackUncheckedCreateNestedManyWithoutItemInput
  }

  export type InventoryItemCreateOrConnectWithoutModifiersInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutModifiersInput, InventoryItemUncheckedCreateWithoutModifiersInput>
  }

  export type ModifierCreateWithoutItemsInput = {
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
    effects?: EffectModifierCreateNestedManyWithoutModifierInput
    abilities?: AbilityModifierCreateNestedManyWithoutModifierInput
  }

  export type ModifierUncheckedCreateWithoutItemsInput = {
    id?: number
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
    effects?: EffectModifierUncheckedCreateNestedManyWithoutModifierInput
    abilities?: AbilityModifierUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ModifierCreateOrConnectWithoutItemsInput = {
    where: ModifierWhereUniqueInput
    create: XOR<ModifierCreateWithoutItemsInput, ModifierUncheckedCreateWithoutItemsInput>
  }

  export type InventoryItemUpsertWithoutModifiersInput = {
    update: XOR<InventoryItemUpdateWithoutModifiersInput, InventoryItemUncheckedUpdateWithoutModifiersInput>
    create: XOR<InventoryItemCreateWithoutModifiersInput, InventoryItemUncheckedCreateWithoutModifiersInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutModifiersInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutModifiersInput, InventoryItemUncheckedUpdateWithoutModifiersInput>
  }

  export type InventoryItemUpdateWithoutModifiersInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: ItemAttackUpdateManyWithoutItemNestedInput
    inventory?: InventoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    attacks?: ItemAttackUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ModifierUpsertWithoutItemsInput = {
    update: XOR<ModifierUpdateWithoutItemsInput, ModifierUncheckedUpdateWithoutItemsInput>
    create: XOR<ModifierCreateWithoutItemsInput, ModifierUncheckedCreateWithoutItemsInput>
    where?: ModifierWhereInput
  }

  export type ModifierUpdateToOneWithWhereWithoutItemsInput = {
    where?: ModifierWhereInput
    data: XOR<ModifierUpdateWithoutItemsInput, ModifierUncheckedUpdateWithoutItemsInput>
  }

  export type ModifierUpdateWithoutItemsInput = {
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effects?: EffectModifierUpdateManyWithoutModifierNestedInput
    abilities?: AbilityModifierUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effects?: EffectModifierUncheckedUpdateManyWithoutModifierNestedInput
    abilities?: AbilityModifierUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type InventoryItemCreateWithoutAttacksInput = {
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    modifiers?: ItemModifierCreateNestedManyWithoutItemInput
    inventory: InventoryCreateNestedOneWithoutItemsInput
  }

  export type InventoryItemUncheckedCreateWithoutAttacksInput = {
    id?: number
    inventoryId: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
    modifiers?: ItemModifierUncheckedCreateNestedManyWithoutItemInput
  }

  export type InventoryItemCreateOrConnectWithoutAttacksInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutAttacksInput, InventoryItemUncheckedCreateWithoutAttacksInput>
  }

  export type AttackCreateWithoutItemsInput = {
    category: string
    attackRoll: JsonNullValueInput | InputJsonValue
    damage: JsonNullValueInput | InputJsonValue
    critical: JsonNullValueInput | InputJsonValue
    ability?: AbilityAttackCreateNestedManyWithoutAttackInput
  }

  export type AttackUncheckedCreateWithoutItemsInput = {
    id?: number
    category: string
    attackRoll: JsonNullValueInput | InputJsonValue
    damage: JsonNullValueInput | InputJsonValue
    critical: JsonNullValueInput | InputJsonValue
    ability?: AbilityAttackUncheckedCreateNestedManyWithoutAttackInput
  }

  export type AttackCreateOrConnectWithoutItemsInput = {
    where: AttackWhereUniqueInput
    create: XOR<AttackCreateWithoutItemsInput, AttackUncheckedCreateWithoutItemsInput>
  }

  export type InventoryItemUpsertWithoutAttacksInput = {
    update: XOR<InventoryItemUpdateWithoutAttacksInput, InventoryItemUncheckedUpdateWithoutAttacksInput>
    create: XOR<InventoryItemCreateWithoutAttacksInput, InventoryItemUncheckedCreateWithoutAttacksInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutAttacksInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutAttacksInput, InventoryItemUncheckedUpdateWithoutAttacksInput>
  }

  export type InventoryItemUpdateWithoutAttacksInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    modifiers?: ItemModifierUpdateManyWithoutItemNestedInput
    inventory?: InventoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutAttacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    modifiers?: ItemModifierUncheckedUpdateManyWithoutItemNestedInput
  }

  export type AttackUpsertWithoutItemsInput = {
    update: XOR<AttackUpdateWithoutItemsInput, AttackUncheckedUpdateWithoutItemsInput>
    create: XOR<AttackCreateWithoutItemsInput, AttackUncheckedCreateWithoutItemsInput>
    where?: AttackWhereInput
  }

  export type AttackUpdateToOneWithWhereWithoutItemsInput = {
    where?: AttackWhereInput
    data: XOR<AttackUpdateWithoutItemsInput, AttackUncheckedUpdateWithoutItemsInput>
  }

  export type AttackUpdateWithoutItemsInput = {
    category?: StringFieldUpdateOperationsInput | string
    attackRoll?: JsonNullValueInput | InputJsonValue
    damage?: JsonNullValueInput | InputJsonValue
    critical?: JsonNullValueInput | InputJsonValue
    ability?: AbilityAttackUpdateManyWithoutAttackNestedInput
  }

  export type AttackUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    attackRoll?: JsonNullValueInput | InputJsonValue
    damage?: JsonNullValueInput | InputJsonValue
    critical?: JsonNullValueInput | InputJsonValue
    ability?: AbilityAttackUncheckedUpdateManyWithoutAttackNestedInput
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
    condition?: string
    disable?: boolean
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
    condition?: string
    disable?: boolean
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

  export type AbilityModifierCreateWithoutAbilityInput = {
    modifier: ModifierCreateNestedOneWithoutAbilitiesInput
  }

  export type AbilityModifierUncheckedCreateWithoutAbilityInput = {
    modifierId: number
  }

  export type AbilityModifierCreateOrConnectWithoutAbilityInput = {
    where: AbilityModifierWhereUniqueInput
    create: XOR<AbilityModifierCreateWithoutAbilityInput, AbilityModifierUncheckedCreateWithoutAbilityInput>
  }

  export type AbilityModifierCreateManyAbilityInputEnvelope = {
    data: AbilityModifierCreateManyAbilityInput | AbilityModifierCreateManyAbilityInput[]
  }

  export type AbilityAttackCreateWithoutAbilityInput = {
    attack: AttackCreateNestedOneWithoutAbilityInput
  }

  export type AbilityAttackUncheckedCreateWithoutAbilityInput = {
    attackId: number
  }

  export type AbilityAttackCreateOrConnectWithoutAbilityInput = {
    where: AbilityAttackWhereUniqueInput
    create: XOR<AbilityAttackCreateWithoutAbilityInput, AbilityAttackUncheckedCreateWithoutAbilityInput>
  }

  export type AbilityAttackCreateManyAbilityInputEnvelope = {
    data: AbilityAttackCreateManyAbilityInput | AbilityAttackCreateManyAbilityInput[]
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUncheckedUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    effects?: EffectUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type AbilityModifierUpsertWithWhereUniqueWithoutAbilityInput = {
    where: AbilityModifierWhereUniqueInput
    update: XOR<AbilityModifierUpdateWithoutAbilityInput, AbilityModifierUncheckedUpdateWithoutAbilityInput>
    create: XOR<AbilityModifierCreateWithoutAbilityInput, AbilityModifierUncheckedCreateWithoutAbilityInput>
  }

  export type AbilityModifierUpdateWithWhereUniqueWithoutAbilityInput = {
    where: AbilityModifierWhereUniqueInput
    data: XOR<AbilityModifierUpdateWithoutAbilityInput, AbilityModifierUncheckedUpdateWithoutAbilityInput>
  }

  export type AbilityModifierUpdateManyWithWhereWithoutAbilityInput = {
    where: AbilityModifierScalarWhereInput
    data: XOR<AbilityModifierUpdateManyMutationInput, AbilityModifierUncheckedUpdateManyWithoutAbilityInput>
  }

  export type AbilityModifierScalarWhereInput = {
    AND?: AbilityModifierScalarWhereInput | AbilityModifierScalarWhereInput[]
    OR?: AbilityModifierScalarWhereInput[]
    NOT?: AbilityModifierScalarWhereInput | AbilityModifierScalarWhereInput[]
    abilityId?: IntFilter<"AbilityModifier"> | number
    modifierId?: IntFilter<"AbilityModifier"> | number
  }

  export type AbilityAttackUpsertWithWhereUniqueWithoutAbilityInput = {
    where: AbilityAttackWhereUniqueInput
    update: XOR<AbilityAttackUpdateWithoutAbilityInput, AbilityAttackUncheckedUpdateWithoutAbilityInput>
    create: XOR<AbilityAttackCreateWithoutAbilityInput, AbilityAttackUncheckedCreateWithoutAbilityInput>
  }

  export type AbilityAttackUpdateWithWhereUniqueWithoutAbilityInput = {
    where: AbilityAttackWhereUniqueInput
    data: XOR<AbilityAttackUpdateWithoutAbilityInput, AbilityAttackUncheckedUpdateWithoutAbilityInput>
  }

  export type AbilityAttackUpdateManyWithWhereWithoutAbilityInput = {
    where: AbilityAttackScalarWhereInput
    data: XOR<AbilityAttackUpdateManyMutationInput, AbilityAttackUncheckedUpdateManyWithoutAbilityInput>
  }

  export type AbilityAttackScalarWhereInput = {
    AND?: AbilityAttackScalarWhereInput | AbilityAttackScalarWhereInput[]
    OR?: AbilityAttackScalarWhereInput[]
    NOT?: AbilityAttackScalarWhereInput | AbilityAttackScalarWhereInput[]
    abilityId?: IntFilter<"AbilityAttack"> | number
    attackId?: IntFilter<"AbilityAttack"> | number
  }

  export type AbilityCreateWithoutModifiersInput = {
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    character: CharacterCreateNestedOneWithoutAbilitiesInput
    attacks?: AbilityAttackCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateWithoutModifiersInput = {
    id?: number
    characterId: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    attacks?: AbilityAttackUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityCreateOrConnectWithoutModifiersInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutModifiersInput, AbilityUncheckedCreateWithoutModifiersInput>
  }

  export type ModifierCreateWithoutAbilitiesInput = {
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
    effects?: EffectModifierCreateNestedManyWithoutModifierInput
    items?: ItemModifierCreateNestedManyWithoutModifierInput
  }

  export type ModifierUncheckedCreateWithoutAbilitiesInput = {
    id?: number
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
    effects?: EffectModifierUncheckedCreateNestedManyWithoutModifierInput
    items?: ItemModifierUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ModifierCreateOrConnectWithoutAbilitiesInput = {
    where: ModifierWhereUniqueInput
    create: XOR<ModifierCreateWithoutAbilitiesInput, ModifierUncheckedCreateWithoutAbilitiesInput>
  }

  export type AbilityUpsertWithoutModifiersInput = {
    update: XOR<AbilityUpdateWithoutModifiersInput, AbilityUncheckedUpdateWithoutModifiersInput>
    create: XOR<AbilityCreateWithoutModifiersInput, AbilityUncheckedCreateWithoutModifiersInput>
    where?: AbilityWhereInput
  }

  export type AbilityUpdateToOneWithWhereWithoutModifiersInput = {
    where?: AbilityWhereInput
    data: XOR<AbilityUpdateWithoutModifiersInput, AbilityUncheckedUpdateWithoutModifiersInput>
  }

  export type AbilityUpdateWithoutModifiersInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutAbilitiesNestedInput
    attacks?: AbilityAttackUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateWithoutModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    attacks?: AbilityAttackUncheckedUpdateManyWithoutAbilityNestedInput
  }

  export type ModifierUpsertWithoutAbilitiesInput = {
    update: XOR<ModifierUpdateWithoutAbilitiesInput, ModifierUncheckedUpdateWithoutAbilitiesInput>
    create: XOR<ModifierCreateWithoutAbilitiesInput, ModifierUncheckedCreateWithoutAbilitiesInput>
    where?: ModifierWhereInput
  }

  export type ModifierUpdateToOneWithWhereWithoutAbilitiesInput = {
    where?: ModifierWhereInput
    data: XOR<ModifierUpdateWithoutAbilitiesInput, ModifierUncheckedUpdateWithoutAbilitiesInput>
  }

  export type ModifierUpdateWithoutAbilitiesInput = {
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effects?: EffectModifierUpdateManyWithoutModifierNestedInput
    items?: ItemModifierUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateWithoutAbilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effects?: EffectModifierUncheckedUpdateManyWithoutModifierNestedInput
    items?: ItemModifierUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type AbilityCreateWithoutAttacksInput = {
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    character: CharacterCreateNestedOneWithoutAbilitiesInput
    modifiers?: AbilityModifierCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateWithoutAttacksInput = {
    id?: number
    characterId: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
    modifiers?: AbilityModifierUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityCreateOrConnectWithoutAttacksInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutAttacksInput, AbilityUncheckedCreateWithoutAttacksInput>
  }

  export type AttackCreateWithoutAbilityInput = {
    category: string
    attackRoll: JsonNullValueInput | InputJsonValue
    damage: JsonNullValueInput | InputJsonValue
    critical: JsonNullValueInput | InputJsonValue
    items?: ItemAttackCreateNestedManyWithoutAttackInput
  }

  export type AttackUncheckedCreateWithoutAbilityInput = {
    id?: number
    category: string
    attackRoll: JsonNullValueInput | InputJsonValue
    damage: JsonNullValueInput | InputJsonValue
    critical: JsonNullValueInput | InputJsonValue
    items?: ItemAttackUncheckedCreateNestedManyWithoutAttackInput
  }

  export type AttackCreateOrConnectWithoutAbilityInput = {
    where: AttackWhereUniqueInput
    create: XOR<AttackCreateWithoutAbilityInput, AttackUncheckedCreateWithoutAbilityInput>
  }

  export type AbilityUpsertWithoutAttacksInput = {
    update: XOR<AbilityUpdateWithoutAttacksInput, AbilityUncheckedUpdateWithoutAttacksInput>
    create: XOR<AbilityCreateWithoutAttacksInput, AbilityUncheckedCreateWithoutAttacksInput>
    where?: AbilityWhereInput
  }

  export type AbilityUpdateToOneWithWhereWithoutAttacksInput = {
    where?: AbilityWhereInput
    data: XOR<AbilityUpdateWithoutAttacksInput, AbilityUncheckedUpdateWithoutAttacksInput>
  }

  export type AbilityUpdateWithoutAttacksInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutAbilitiesNestedInput
    modifiers?: AbilityModifierUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateWithoutAttacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    modifiers?: AbilityModifierUncheckedUpdateManyWithoutAbilityNestedInput
  }

  export type AttackUpsertWithoutAbilityInput = {
    update: XOR<AttackUpdateWithoutAbilityInput, AttackUncheckedUpdateWithoutAbilityInput>
    create: XOR<AttackCreateWithoutAbilityInput, AttackUncheckedCreateWithoutAbilityInput>
    where?: AttackWhereInput
  }

  export type AttackUpdateToOneWithWhereWithoutAbilityInput = {
    where?: AttackWhereInput
    data: XOR<AttackUpdateWithoutAbilityInput, AttackUncheckedUpdateWithoutAbilityInput>
  }

  export type AttackUpdateWithoutAbilityInput = {
    category?: StringFieldUpdateOperationsInput | string
    attackRoll?: JsonNullValueInput | InputJsonValue
    damage?: JsonNullValueInput | InputJsonValue
    critical?: JsonNullValueInput | InputJsonValue
    items?: ItemAttackUpdateManyWithoutAttackNestedInput
  }

  export type AttackUncheckedUpdateWithoutAbilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    attackRoll?: JsonNullValueInput | InputJsonValue
    damage?: JsonNullValueInput | InputJsonValue
    critical?: JsonNullValueInput | InputJsonValue
    items?: ItemAttackUncheckedUpdateManyWithoutAttackNestedInput
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
    condition?: string
    disable?: boolean
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
    condition?: string
    disable?: boolean
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

  export type EffectModifierCreateWithoutEffectInput = {
    modifier: ModifierCreateNestedOneWithoutEffectsInput
  }

  export type EffectModifierUncheckedCreateWithoutEffectInput = {
    modifierId: number
  }

  export type EffectModifierCreateOrConnectWithoutEffectInput = {
    where: EffectModifierWhereUniqueInput
    create: XOR<EffectModifierCreateWithoutEffectInput, EffectModifierUncheckedCreateWithoutEffectInput>
  }

  export type EffectModifierCreateManyEffectInputEnvelope = {
    data: EffectModifierCreateManyEffectInput | EffectModifierCreateManyEffectInput[]
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
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
    condition?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributesUncheckedUpdateOneWithoutCharacterNestedInput
    expertisies?: ExpertiseCharacterUncheckedUpdateManyWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    abilities?: AbilityUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type EffectModifierUpsertWithWhereUniqueWithoutEffectInput = {
    where: EffectModifierWhereUniqueInput
    update: XOR<EffectModifierUpdateWithoutEffectInput, EffectModifierUncheckedUpdateWithoutEffectInput>
    create: XOR<EffectModifierCreateWithoutEffectInput, EffectModifierUncheckedCreateWithoutEffectInput>
  }

  export type EffectModifierUpdateWithWhereUniqueWithoutEffectInput = {
    where: EffectModifierWhereUniqueInput
    data: XOR<EffectModifierUpdateWithoutEffectInput, EffectModifierUncheckedUpdateWithoutEffectInput>
  }

  export type EffectModifierUpdateManyWithWhereWithoutEffectInput = {
    where: EffectModifierScalarWhereInput
    data: XOR<EffectModifierUpdateManyMutationInput, EffectModifierUncheckedUpdateManyWithoutEffectInput>
  }

  export type EffectModifierScalarWhereInput = {
    AND?: EffectModifierScalarWhereInput | EffectModifierScalarWhereInput[]
    OR?: EffectModifierScalarWhereInput[]
    NOT?: EffectModifierScalarWhereInput | EffectModifierScalarWhereInput[]
    effectId?: IntFilter<"EffectModifier"> | number
    modifierId?: IntFilter<"EffectModifier"> | number
  }

  export type EffectCreateWithoutModifiersInput = {
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    startedAt: Date | string
    character: CharacterCreateNestedOneWithoutEffectsInput
  }

  export type EffectUncheckedCreateWithoutModifiersInput = {
    id?: number
    characterId: number
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    startedAt: Date | string
  }

  export type EffectCreateOrConnectWithoutModifiersInput = {
    where: EffectWhereUniqueInput
    create: XOR<EffectCreateWithoutModifiersInput, EffectUncheckedCreateWithoutModifiersInput>
  }

  export type ModifierCreateWithoutEffectsInput = {
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
    abilities?: AbilityModifierCreateNestedManyWithoutModifierInput
    items?: ItemModifierCreateNestedManyWithoutModifierInput
  }

  export type ModifierUncheckedCreateWithoutEffectsInput = {
    id?: number
    target: JsonNullValueInput | InputJsonValue
    value: number
    type: string
    abilities?: AbilityModifierUncheckedCreateNestedManyWithoutModifierInput
    items?: ItemModifierUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ModifierCreateOrConnectWithoutEffectsInput = {
    where: ModifierWhereUniqueInput
    create: XOR<ModifierCreateWithoutEffectsInput, ModifierUncheckedCreateWithoutEffectsInput>
  }

  export type EffectUpsertWithoutModifiersInput = {
    update: XOR<EffectUpdateWithoutModifiersInput, EffectUncheckedUpdateWithoutModifiersInput>
    create: XOR<EffectCreateWithoutModifiersInput, EffectUncheckedCreateWithoutModifiersInput>
    where?: EffectWhereInput
  }

  export type EffectUpdateToOneWithWhereWithoutModifiersInput = {
    where?: EffectWhereInput
    data: XOR<EffectUpdateWithoutModifiersInput, EffectUncheckedUpdateWithoutModifiersInput>
  }

  export type EffectUpdateWithoutModifiersInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharacterUpdateOneRequiredWithoutEffectsNestedInput
  }

  export type EffectUncheckedUpdateWithoutModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModifierUpsertWithoutEffectsInput = {
    update: XOR<ModifierUpdateWithoutEffectsInput, ModifierUncheckedUpdateWithoutEffectsInput>
    create: XOR<ModifierCreateWithoutEffectsInput, ModifierUncheckedCreateWithoutEffectsInput>
    where?: ModifierWhereInput
  }

  export type ModifierUpdateToOneWithWhereWithoutEffectsInput = {
    where?: ModifierWhereInput
    data: XOR<ModifierUpdateWithoutEffectsInput, ModifierUncheckedUpdateWithoutEffectsInput>
  }

  export type ModifierUpdateWithoutEffectsInput = {
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    abilities?: AbilityModifierUpdateManyWithoutModifierNestedInput
    items?: ItemModifierUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateWithoutEffectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: JsonNullValueInput | InputJsonValue
    value?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    abilities?: AbilityModifierUncheckedUpdateManyWithoutModifierNestedInput
    items?: ItemModifierUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type EffectModifierCreateWithoutModifierInput = {
    effect: EffectCreateNestedOneWithoutModifiersInput
  }

  export type EffectModifierUncheckedCreateWithoutModifierInput = {
    effectId: number
  }

  export type EffectModifierCreateOrConnectWithoutModifierInput = {
    where: EffectModifierWhereUniqueInput
    create: XOR<EffectModifierCreateWithoutModifierInput, EffectModifierUncheckedCreateWithoutModifierInput>
  }

  export type EffectModifierCreateManyModifierInputEnvelope = {
    data: EffectModifierCreateManyModifierInput | EffectModifierCreateManyModifierInput[]
  }

  export type AbilityModifierCreateWithoutModifierInput = {
    ability: AbilityCreateNestedOneWithoutModifiersInput
  }

  export type AbilityModifierUncheckedCreateWithoutModifierInput = {
    abilityId: number
  }

  export type AbilityModifierCreateOrConnectWithoutModifierInput = {
    where: AbilityModifierWhereUniqueInput
    create: XOR<AbilityModifierCreateWithoutModifierInput, AbilityModifierUncheckedCreateWithoutModifierInput>
  }

  export type AbilityModifierCreateManyModifierInputEnvelope = {
    data: AbilityModifierCreateManyModifierInput | AbilityModifierCreateManyModifierInput[]
  }

  export type ItemModifierCreateWithoutModifierInput = {
    item: InventoryItemCreateNestedOneWithoutModifiersInput
  }

  export type ItemModifierUncheckedCreateWithoutModifierInput = {
    itemId: number
  }

  export type ItemModifierCreateOrConnectWithoutModifierInput = {
    where: ItemModifierWhereUniqueInput
    create: XOR<ItemModifierCreateWithoutModifierInput, ItemModifierUncheckedCreateWithoutModifierInput>
  }

  export type ItemModifierCreateManyModifierInputEnvelope = {
    data: ItemModifierCreateManyModifierInput | ItemModifierCreateManyModifierInput[]
  }

  export type EffectModifierUpsertWithWhereUniqueWithoutModifierInput = {
    where: EffectModifierWhereUniqueInput
    update: XOR<EffectModifierUpdateWithoutModifierInput, EffectModifierUncheckedUpdateWithoutModifierInput>
    create: XOR<EffectModifierCreateWithoutModifierInput, EffectModifierUncheckedCreateWithoutModifierInput>
  }

  export type EffectModifierUpdateWithWhereUniqueWithoutModifierInput = {
    where: EffectModifierWhereUniqueInput
    data: XOR<EffectModifierUpdateWithoutModifierInput, EffectModifierUncheckedUpdateWithoutModifierInput>
  }

  export type EffectModifierUpdateManyWithWhereWithoutModifierInput = {
    where: EffectModifierScalarWhereInput
    data: XOR<EffectModifierUpdateManyMutationInput, EffectModifierUncheckedUpdateManyWithoutModifierInput>
  }

  export type AbilityModifierUpsertWithWhereUniqueWithoutModifierInput = {
    where: AbilityModifierWhereUniqueInput
    update: XOR<AbilityModifierUpdateWithoutModifierInput, AbilityModifierUncheckedUpdateWithoutModifierInput>
    create: XOR<AbilityModifierCreateWithoutModifierInput, AbilityModifierUncheckedCreateWithoutModifierInput>
  }

  export type AbilityModifierUpdateWithWhereUniqueWithoutModifierInput = {
    where: AbilityModifierWhereUniqueInput
    data: XOR<AbilityModifierUpdateWithoutModifierInput, AbilityModifierUncheckedUpdateWithoutModifierInput>
  }

  export type AbilityModifierUpdateManyWithWhereWithoutModifierInput = {
    where: AbilityModifierScalarWhereInput
    data: XOR<AbilityModifierUpdateManyMutationInput, AbilityModifierUncheckedUpdateManyWithoutModifierInput>
  }

  export type ItemModifierUpsertWithWhereUniqueWithoutModifierInput = {
    where: ItemModifierWhereUniqueInput
    update: XOR<ItemModifierUpdateWithoutModifierInput, ItemModifierUncheckedUpdateWithoutModifierInput>
    create: XOR<ItemModifierCreateWithoutModifierInput, ItemModifierUncheckedCreateWithoutModifierInput>
  }

  export type ItemModifierUpdateWithWhereUniqueWithoutModifierInput = {
    where: ItemModifierWhereUniqueInput
    data: XOR<ItemModifierUpdateWithoutModifierInput, ItemModifierUncheckedUpdateWithoutModifierInput>
  }

  export type ItemModifierUpdateManyWithWhereWithoutModifierInput = {
    where: ItemModifierScalarWhereInput
    data: XOR<ItemModifierUpdateManyMutationInput, ItemModifierUncheckedUpdateManyWithoutModifierInput>
  }

  export type ItemAttackCreateWithoutAttackInput = {
    item: InventoryItemCreateNestedOneWithoutAttacksInput
  }

  export type ItemAttackUncheckedCreateWithoutAttackInput = {
    itemId: number
  }

  export type ItemAttackCreateOrConnectWithoutAttackInput = {
    where: ItemAttackWhereUniqueInput
    create: XOR<ItemAttackCreateWithoutAttackInput, ItemAttackUncheckedCreateWithoutAttackInput>
  }

  export type ItemAttackCreateManyAttackInputEnvelope = {
    data: ItemAttackCreateManyAttackInput | ItemAttackCreateManyAttackInput[]
  }

  export type AbilityAttackCreateWithoutAttackInput = {
    ability: AbilityCreateNestedOneWithoutAttacksInput
  }

  export type AbilityAttackUncheckedCreateWithoutAttackInput = {
    abilityId: number
  }

  export type AbilityAttackCreateOrConnectWithoutAttackInput = {
    where: AbilityAttackWhereUniqueInput
    create: XOR<AbilityAttackCreateWithoutAttackInput, AbilityAttackUncheckedCreateWithoutAttackInput>
  }

  export type AbilityAttackCreateManyAttackInputEnvelope = {
    data: AbilityAttackCreateManyAttackInput | AbilityAttackCreateManyAttackInput[]
  }

  export type ItemAttackUpsertWithWhereUniqueWithoutAttackInput = {
    where: ItemAttackWhereUniqueInput
    update: XOR<ItemAttackUpdateWithoutAttackInput, ItemAttackUncheckedUpdateWithoutAttackInput>
    create: XOR<ItemAttackCreateWithoutAttackInput, ItemAttackUncheckedCreateWithoutAttackInput>
  }

  export type ItemAttackUpdateWithWhereUniqueWithoutAttackInput = {
    where: ItemAttackWhereUniqueInput
    data: XOR<ItemAttackUpdateWithoutAttackInput, ItemAttackUncheckedUpdateWithoutAttackInput>
  }

  export type ItemAttackUpdateManyWithWhereWithoutAttackInput = {
    where: ItemAttackScalarWhereInput
    data: XOR<ItemAttackUpdateManyMutationInput, ItemAttackUncheckedUpdateManyWithoutAttackInput>
  }

  export type AbilityAttackUpsertWithWhereUniqueWithoutAttackInput = {
    where: AbilityAttackWhereUniqueInput
    update: XOR<AbilityAttackUpdateWithoutAttackInput, AbilityAttackUncheckedUpdateWithoutAttackInput>
    create: XOR<AbilityAttackCreateWithoutAttackInput, AbilityAttackUncheckedCreateWithoutAttackInput>
  }

  export type AbilityAttackUpdateWithWhereUniqueWithoutAttackInput = {
    where: AbilityAttackWhereUniqueInput
    data: XOR<AbilityAttackUpdateWithoutAttackInput, AbilityAttackUncheckedUpdateWithoutAttackInput>
  }

  export type AbilityAttackUpdateManyWithWhereWithoutAttackInput = {
    where: AbilityAttackScalarWhereInput
    data: XOR<AbilityAttackUpdateManyMutationInput, AbilityAttackUncheckedUpdateManyWithoutAttackInput>
  }

  export type ExpertiseCharacterCreateManyCharacterInput = {
    expertiseId: number
    value?: number
    trained?: boolean
    trainBonus?: number
  }

  export type AbilityCreateManyCharacterInput = {
    id?: number
    type: string
    name: string
    description: string
    passive: boolean
    manaCost: number
  }

  export type EffectCreateManyCharacterInput = {
    id?: number
    sourceType: string
    sourceId?: number | null
    sourceName: string
    active: boolean
    duration: JsonNullValueInput | InputJsonValue
    stacks: number
    startedAt: Date | string
  }

  export type ExpertiseCharacterUpdateWithoutCharacterInput = {
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
    expertise?: ExpertiseUpdateOneRequiredWithoutCharacterLinkNestedInput
  }

  export type ExpertiseCharacterUncheckedUpdateWithoutCharacterInput = {
    expertiseId?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterUncheckedUpdateManyWithoutCharacterInput = {
    expertiseId?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityUpdateWithoutCharacterInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    modifiers?: AbilityModifierUpdateManyWithoutAbilityNestedInput
    attacks?: AbilityAttackUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
    modifiers?: AbilityModifierUncheckedUpdateManyWithoutAbilityNestedInput
    attacks?: AbilityAttackUncheckedUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateManyWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passive?: BoolFieldUpdateOperationsInput | boolean
    manaCost?: IntFieldUpdateOperationsInput | number
  }

  export type EffectUpdateWithoutCharacterInput = {
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiers?: EffectModifierUpdateManyWithoutEffectNestedInput
  }

  export type EffectUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiers?: EffectModifierUncheckedUpdateManyWithoutEffectNestedInput
  }

  export type EffectUncheckedUpdateManyWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    sourceName?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    duration?: JsonNullValueInput | InputJsonValue
    stacks?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseCharacterCreateManyExpertiseInput = {
    characterId: number
    value?: number
    trained?: boolean
    trainBonus?: number
  }

  export type ExpertiseCharacterUpdateWithoutExpertiseInput = {
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutExpertisiesNestedInput
  }

  export type ExpertiseCharacterUncheckedUpdateWithoutExpertiseInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCharacterUncheckedUpdateManyWithoutExpertiseInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    trained?: BoolFieldUpdateOperationsInput | boolean
    trainBonus?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateManyInventoryInput = {
    id?: number
    type: string
    name: string
    description: string
    quantity: number
    slot: number
    isEquippable: boolean
    equipped: boolean
    passive: boolean
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
    modifiers?: ItemModifierUpdateManyWithoutItemNestedInput
    attacks?: ItemAttackUpdateManyWithoutItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
    modifiers?: ItemModifierUncheckedUpdateManyWithoutItemNestedInput
    attacks?: ItemAttackUncheckedUpdateManyWithoutItemNestedInput
  }

  export type InventoryItemUncheckedUpdateManyWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    isEquippable?: BoolFieldUpdateOperationsInput | boolean
    equipped?: BoolFieldUpdateOperationsInput | boolean
    passive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemModifierCreateManyItemInput = {
    modifierId: number
  }

  export type ItemAttackCreateManyItemInput = {
    attackId: number
  }

  export type ItemModifierUpdateWithoutItemInput = {
    modifier?: ModifierUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemModifierUncheckedUpdateWithoutItemInput = {
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemModifierUncheckedUpdateManyWithoutItemInput = {
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemAttackUpdateWithoutItemInput = {
    attack?: AttackUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemAttackUncheckedUpdateWithoutItemInput = {
    attackId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemAttackUncheckedUpdateManyWithoutItemInput = {
    attackId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityModifierCreateManyAbilityInput = {
    modifierId: number
  }

  export type AbilityAttackCreateManyAbilityInput = {
    attackId: number
  }

  export type AbilityModifierUpdateWithoutAbilityInput = {
    modifier?: ModifierUpdateOneRequiredWithoutAbilitiesNestedInput
  }

  export type AbilityModifierUncheckedUpdateWithoutAbilityInput = {
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityModifierUncheckedUpdateManyWithoutAbilityInput = {
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityAttackUpdateWithoutAbilityInput = {
    attack?: AttackUpdateOneRequiredWithoutAbilityNestedInput
  }

  export type AbilityAttackUncheckedUpdateWithoutAbilityInput = {
    attackId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityAttackUncheckedUpdateManyWithoutAbilityInput = {
    attackId?: IntFieldUpdateOperationsInput | number
  }

  export type EffectModifierCreateManyEffectInput = {
    modifierId: number
  }

  export type EffectModifierUpdateWithoutEffectInput = {
    modifier?: ModifierUpdateOneRequiredWithoutEffectsNestedInput
  }

  export type EffectModifierUncheckedUpdateWithoutEffectInput = {
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type EffectModifierUncheckedUpdateManyWithoutEffectInput = {
    modifierId?: IntFieldUpdateOperationsInput | number
  }

  export type EffectModifierCreateManyModifierInput = {
    effectId: number
  }

  export type AbilityModifierCreateManyModifierInput = {
    abilityId: number
  }

  export type ItemModifierCreateManyModifierInput = {
    itemId: number
  }

  export type EffectModifierUpdateWithoutModifierInput = {
    effect?: EffectUpdateOneRequiredWithoutModifiersNestedInput
  }

  export type EffectModifierUncheckedUpdateWithoutModifierInput = {
    effectId?: IntFieldUpdateOperationsInput | number
  }

  export type EffectModifierUncheckedUpdateManyWithoutModifierInput = {
    effectId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityModifierUpdateWithoutModifierInput = {
    ability?: AbilityUpdateOneRequiredWithoutModifiersNestedInput
  }

  export type AbilityModifierUncheckedUpdateWithoutModifierInput = {
    abilityId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityModifierUncheckedUpdateManyWithoutModifierInput = {
    abilityId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemModifierUpdateWithoutModifierInput = {
    item?: InventoryItemUpdateOneRequiredWithoutModifiersNestedInput
  }

  export type ItemModifierUncheckedUpdateWithoutModifierInput = {
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemModifierUncheckedUpdateManyWithoutModifierInput = {
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemAttackCreateManyAttackInput = {
    itemId: number
  }

  export type AbilityAttackCreateManyAttackInput = {
    abilityId: number
  }

  export type ItemAttackUpdateWithoutAttackInput = {
    item?: InventoryItemUpdateOneRequiredWithoutAttacksNestedInput
  }

  export type ItemAttackUncheckedUpdateWithoutAttackInput = {
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemAttackUncheckedUpdateManyWithoutAttackInput = {
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityAttackUpdateWithoutAttackInput = {
    ability?: AbilityUpdateOneRequiredWithoutAttacksNestedInput
  }

  export type AbilityAttackUncheckedUpdateWithoutAttackInput = {
    abilityId?: IntFieldUpdateOperationsInput | number
  }

  export type AbilityAttackUncheckedUpdateManyWithoutAttackInput = {
    abilityId?: IntFieldUpdateOperationsInput | number
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