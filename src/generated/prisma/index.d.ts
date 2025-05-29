
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model compra
 * 
 */
export type compra = $Result.DefaultSelection<Prisma.$compraPayload>
/**
 * Model pagamento
 * 
 */
export type pagamento = $Result.DefaultSelection<Prisma.$pagamentoPayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model paymentitem
 * 
 */
export type paymentitem = $Result.DefaultSelection<Prisma.$paymentitemPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model produto
 * 
 */
export type produto = $Result.DefaultSelection<Prisma.$produtoPayload>
/**
 * Model testimonial
 * 
 */
export type testimonial = $Result.DefaultSelection<Prisma.$testimonialPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Compras
 * const compras = await prisma.compra.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Compras
   * const compras = await prisma.compra.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.compra`: Exposes CRUD operations for the **compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.compraDelegate<ExtArgs>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.pagamentoDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs>;

  /**
   * `prisma.paymentitem`: Exposes CRUD operations for the **paymentitem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paymentitems
    * const paymentitems = await prisma.paymentitem.findMany()
    * ```
    */
  get paymentitem(): Prisma.paymentitemDelegate<ExtArgs>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.produtoDelegate<ExtArgs>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.testimonialDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    compra: 'compra',
    pagamento: 'pagamento',
    payment: 'payment',
    paymentitem: 'paymentitem',
    pedido: 'pedido',
    products: 'products',
    produto: 'produto',
    testimonial: 'testimonial',
    user: 'user',
    categoria: 'categoria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "compra" | "pagamento" | "payment" | "paymentitem" | "pedido" | "products" | "produto" | "testimonial" | "user" | "categoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      compra: {
        payload: Prisma.$compraPayload<ExtArgs>
        fields: Prisma.compraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.compraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.compraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload>
          }
          findFirst: {
            args: Prisma.compraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.compraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload>
          }
          findMany: {
            args: Prisma.compraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload>[]
          }
          create: {
            args: Prisma.compraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload>
          }
          createMany: {
            args: Prisma.compraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.compraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload>
          }
          update: {
            args: Prisma.compraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload>
          }
          deleteMany: {
            args: Prisma.compraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.compraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.compraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compraPayload>
          }
          aggregate: {
            args: Prisma.CompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompra>
          }
          groupBy: {
            args: Prisma.compraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.compraCountArgs<ExtArgs>
            result: $Utils.Optional<CompraCountAggregateOutputType> | number
          }
        }
      }
      pagamento: {
        payload: Prisma.$pagamentoPayload<ExtArgs>
        fields: Prisma.pagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          findFirst: {
            args: Prisma.pagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          findMany: {
            args: Prisma.pagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>[]
          }
          create: {
            args: Prisma.pagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          createMany: {
            args: Prisma.pagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          update: {
            args: Prisma.pagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          deleteMany: {
            args: Prisma.pagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.pagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      paymentitem: {
        payload: Prisma.$paymentitemPayload<ExtArgs>
        fields: Prisma.paymentitemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentitemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentitemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload>
          }
          findFirst: {
            args: Prisma.paymentitemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentitemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload>
          }
          findMany: {
            args: Prisma.paymentitemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload>[]
          }
          create: {
            args: Prisma.paymentitemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload>
          }
          createMany: {
            args: Prisma.paymentitemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentitemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload>
          }
          update: {
            args: Prisma.paymentitemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload>
          }
          deleteMany: {
            args: Prisma.paymentitemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentitemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentitemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentitemPayload>
          }
          aggregate: {
            args: Prisma.PaymentitemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentitem>
          }
          groupBy: {
            args: Prisma.paymentitemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentitemGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentitemCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentitemCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      produto: {
        payload: Prisma.$produtoPayload<ExtArgs>
        fields: Prisma.produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findFirst: {
            args: Prisma.produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findMany: {
            args: Prisma.produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          create: {
            args: Prisma.produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          createMany: {
            args: Prisma.produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          update: {
            args: Prisma.produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          deleteMany: {
            args: Prisma.produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      testimonial: {
        payload: Prisma.$testimonialPayload<ExtArgs>
        fields: Prisma.testimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          findFirst: {
            args: Prisma.testimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          findMany: {
            args: Prisma.testimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>[]
          }
          create: {
            args: Prisma.testimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          createMany: {
            args: Prisma.testimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.testimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          update: {
            args: Prisma.testimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          deleteMany: {
            args: Prisma.testimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.testimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.testimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.testimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    paymentitem: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentitem?: boolean | PaymentCountOutputTypeCountPaymentitemArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountPaymentitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentitemWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    pagamento: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | PedidoCountOutputTypeCountPagamentoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    paymentitem: number
    testimonial: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentitem?: boolean | ProductsCountOutputTypeCountPaymentitemArgs
    testimonial?: boolean | ProductsCountOutputTypeCountTestimonialArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountPaymentitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentitemWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountTestimonialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testimonialWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    pedido: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | ProdutoCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pagamento: number
    payment: number
    pedido: number
    produto: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | UserCountOutputTypeCountPagamentoArgs
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
    pedido?: boolean | UserCountOutputTypeCountPedidoArgs
    produto?: boolean | UserCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    produtos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | CategoriaCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model compra
   */

  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type CompraSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type CompraMinAggregateOutputType = {
    id: number | null
    produto: string | null
    comprador: string | null
    preco: number | null
    timestamp: Date | null
  }

  export type CompraMaxAggregateOutputType = {
    id: number | null
    produto: string | null
    comprador: string | null
    preco: number | null
    timestamp: Date | null
  }

  export type CompraCountAggregateOutputType = {
    id: number
    produto: number
    comprador: number
    preco: number
    timestamp: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type CompraSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type CompraMinAggregateInputType = {
    id?: true
    produto?: true
    comprador?: true
    preco?: true
    timestamp?: true
  }

  export type CompraMaxAggregateInputType = {
    id?: true
    produto?: true
    comprador?: true
    preco?: true
    timestamp?: true
  }

  export type CompraCountAggregateInputType = {
    id?: true
    produto?: true
    comprador?: true
    preco?: true
    timestamp?: true
    _all?: true
  }

  export type CompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compra to aggregate.
     */
    where?: compraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compras to fetch.
     */
    orderBy?: compraOrderByWithRelationInput | compraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: compraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type compraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: compraWhereInput
    orderBy?: compraOrderByWithAggregationInput | compraOrderByWithAggregationInput[]
    by: CompraScalarFieldEnum[] | CompraScalarFieldEnum
    having?: compraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }

  export type CompraGroupByOutputType = {
    id: number
    produto: string
    comprador: string
    preco: number
    timestamp: Date
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends compraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type compraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto?: boolean
    comprador?: boolean
    preco?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["compra"]>


  export type compraSelectScalar = {
    id?: boolean
    produto?: boolean
    comprador?: boolean
    preco?: boolean
    timestamp?: boolean
  }


  export type $compraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "compra"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produto: string
      comprador: string
      preco: number
      timestamp: Date
    }, ExtArgs["result"]["compra"]>
    composites: {}
  }

  type compraGetPayload<S extends boolean | null | undefined | compraDefaultArgs> = $Result.GetResult<Prisma.$compraPayload, S>

  type compraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<compraFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompraCountAggregateInputType | true
    }

  export interface compraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['compra'], meta: { name: 'compra' } }
    /**
     * Find zero or one Compra that matches the filter.
     * @param {compraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends compraFindUniqueArgs>(args: SelectSubset<T, compraFindUniqueArgs<ExtArgs>>): Prisma__compraClient<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {compraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends compraFindUniqueOrThrowArgs>(args: SelectSubset<T, compraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__compraClient<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends compraFindFirstArgs>(args?: SelectSubset<T, compraFindFirstArgs<ExtArgs>>): Prisma__compraClient<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends compraFindFirstOrThrowArgs>(args?: SelectSubset<T, compraFindFirstOrThrowArgs<ExtArgs>>): Prisma__compraClient<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compraWithIdOnly = await prisma.compra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends compraFindManyArgs>(args?: SelectSubset<T, compraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Compra.
     * @param {compraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
     */
    create<T extends compraCreateArgs>(args: SelectSubset<T, compraCreateArgs<ExtArgs>>): Prisma__compraClient<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Compras.
     * @param {compraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends compraCreateManyArgs>(args?: SelectSubset<T, compraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Compra.
     * @param {compraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
     */
    delete<T extends compraDeleteArgs>(args: SelectSubset<T, compraDeleteArgs<ExtArgs>>): Prisma__compraClient<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Compra.
     * @param {compraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends compraUpdateArgs>(args: SelectSubset<T, compraUpdateArgs<ExtArgs>>): Prisma__compraClient<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Compras.
     * @param {compraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends compraDeleteManyArgs>(args?: SelectSubset<T, compraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends compraUpdateManyArgs>(args: SelectSubset<T, compraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compra.
     * @param {compraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends compraUpsertArgs>(args: SelectSubset<T, compraUpsertArgs<ExtArgs>>): Prisma__compraClient<$Result.GetResult<Prisma.$compraPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends compraCountArgs>(
      args?: Subset<T, compraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compraGroupByArgs} args - Group by arguments.
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
      T extends compraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: compraGroupByArgs['orderBy'] }
        : { orderBy?: compraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, compraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the compra model
   */
  readonly fields: compraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__compraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the compra model
   */ 
  interface compraFieldRefs {
    readonly id: FieldRef<"compra", 'Int'>
    readonly produto: FieldRef<"compra", 'String'>
    readonly comprador: FieldRef<"compra", 'String'>
    readonly preco: FieldRef<"compra", 'Float'>
    readonly timestamp: FieldRef<"compra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * compra findUnique
   */
  export type compraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * Filter, which compra to fetch.
     */
    where: compraWhereUniqueInput
  }

  /**
   * compra findUniqueOrThrow
   */
  export type compraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * Filter, which compra to fetch.
     */
    where: compraWhereUniqueInput
  }

  /**
   * compra findFirst
   */
  export type compraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * Filter, which compra to fetch.
     */
    where?: compraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compras to fetch.
     */
    orderBy?: compraOrderByWithRelationInput | compraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compras.
     */
    cursor?: compraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * compra findFirstOrThrow
   */
  export type compraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * Filter, which compra to fetch.
     */
    where?: compraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compras to fetch.
     */
    orderBy?: compraOrderByWithRelationInput | compraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compras.
     */
    cursor?: compraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * compra findMany
   */
  export type compraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * Filter, which compras to fetch.
     */
    where?: compraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compras to fetch.
     */
    orderBy?: compraOrderByWithRelationInput | compraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing compras.
     */
    cursor?: compraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compras.
     */
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * compra create
   */
  export type compraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * The data needed to create a compra.
     */
    data: XOR<compraCreateInput, compraUncheckedCreateInput>
  }

  /**
   * compra createMany
   */
  export type compraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many compras.
     */
    data: compraCreateManyInput | compraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * compra update
   */
  export type compraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * The data needed to update a compra.
     */
    data: XOR<compraUpdateInput, compraUncheckedUpdateInput>
    /**
     * Choose, which compra to update.
     */
    where: compraWhereUniqueInput
  }

  /**
   * compra updateMany
   */
  export type compraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update compras.
     */
    data: XOR<compraUpdateManyMutationInput, compraUncheckedUpdateManyInput>
    /**
     * Filter which compras to update
     */
    where?: compraWhereInput
  }

  /**
   * compra upsert
   */
  export type compraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * The filter to search for the compra to update in case it exists.
     */
    where: compraWhereUniqueInput
    /**
     * In case the compra found by the `where` argument doesn't exist, create a new compra with this data.
     */
    create: XOR<compraCreateInput, compraUncheckedCreateInput>
    /**
     * In case the compra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<compraUpdateInput, compraUncheckedUpdateInput>
  }

  /**
   * compra delete
   */
  export type compraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
    /**
     * Filter which compra to delete.
     */
    where: compraWhereUniqueInput
  }

  /**
   * compra deleteMany
   */
  export type compraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compras to delete
     */
    where?: compraWhereInput
  }

  /**
   * compra without action
   */
  export type compraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compra
     */
    select?: compraSelect<ExtArgs> | null
  }


  /**
   * Model pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    valor: number | null
    userId: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    valor: number | null
    userId: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    valor: number | null
    metodo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    valor: number | null
    metodo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type PagamentoCountAggregateOutputType = {
    id: number
    pedidoId: number
    valor: number
    metodo: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    valor?: true
    userId?: true
  }

  export type PagamentoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    valor?: true
    userId?: true
  }

  export type PagamentoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    valor?: true
    metodo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    valor?: true
    metodo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PagamentoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    valor?: true
    metodo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamento to aggregate.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type pagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithAggregationInput | pagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: pagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id: number
    pedidoId: number
    valor: number
    metodo: string
    status: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends pagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type pagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    valor?: boolean
    metodo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>


  export type pagamentoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    valor?: boolean
    metodo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type pagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $pagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagamento"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      valor: number
      metodo: string
      status: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type pagamentoGetPayload<S extends boolean | null | undefined | pagamentoDefaultArgs> = $Result.GetResult<Prisma.$pagamentoPayload, S>

  type pagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pagamentoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface pagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagamento'], meta: { name: 'pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {pagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagamentoFindUniqueArgs>(args: SelectSubset<T, pagamentoFindUniqueArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, pagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagamentoFindFirstArgs>(args?: SelectSubset<T, pagamentoFindFirstArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, pagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pagamentoFindManyArgs>(args?: SelectSubset<T, pagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pagamento.
     * @param {pagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends pagamentoCreateArgs>(args: SelectSubset<T, pagamentoCreateArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pagamentos.
     * @param {pagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagamentoCreateManyArgs>(args?: SelectSubset<T, pagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagamento.
     * @param {pagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends pagamentoDeleteArgs>(args: SelectSubset<T, pagamentoDeleteArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pagamento.
     * @param {pagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagamentoUpdateArgs>(args: SelectSubset<T, pagamentoUpdateArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pagamentos.
     * @param {pagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagamentoDeleteManyArgs>(args?: SelectSubset<T, pagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagamentoUpdateManyArgs>(args: SelectSubset<T, pagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagamento.
     * @param {pagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends pagamentoUpsertArgs>(args: SelectSubset<T, pagamentoUpsertArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends pagamentoCountArgs>(
      args?: Subset<T, pagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoGroupByArgs} args - Group by arguments.
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
      T extends pagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagamentoGroupByArgs['orderBy'] }
        : { orderBy?: pagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagamento model
   */
  readonly fields: pagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the pagamento model
   */ 
  interface pagamentoFieldRefs {
    readonly id: FieldRef<"pagamento", 'Int'>
    readonly pedidoId: FieldRef<"pagamento", 'Int'>
    readonly valor: FieldRef<"pagamento", 'Float'>
    readonly metodo: FieldRef<"pagamento", 'String'>
    readonly status: FieldRef<"pagamento", 'String'>
    readonly createdAt: FieldRef<"pagamento", 'DateTime'>
    readonly updatedAt: FieldRef<"pagamento", 'DateTime'>
    readonly userId: FieldRef<"pagamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pagamento findUnique
   */
  export type pagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento findUniqueOrThrow
   */
  export type pagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento findFirst
   */
  export type pagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento findFirstOrThrow
   */
  export type pagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento findMany
   */
  export type pagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento create
   */
  export type pagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a pagamento.
     */
    data: XOR<pagamentoCreateInput, pagamentoUncheckedCreateInput>
  }

  /**
   * pagamento createMany
   */
  export type pagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagamentos.
     */
    data: pagamentoCreateManyInput | pagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagamento update
   */
  export type pagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a pagamento.
     */
    data: XOR<pagamentoUpdateInput, pagamentoUncheckedUpdateInput>
    /**
     * Choose, which pagamento to update.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento updateMany
   */
  export type pagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagamentos.
     */
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyInput>
    /**
     * Filter which pagamentos to update
     */
    where?: pagamentoWhereInput
  }

  /**
   * pagamento upsert
   */
  export type pagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the pagamento to update in case it exists.
     */
    where: pagamentoWhereUniqueInput
    /**
     * In case the pagamento found by the `where` argument doesn't exist, create a new pagamento with this data.
     */
    create: XOR<pagamentoCreateInput, pagamentoUncheckedCreateInput>
    /**
     * In case the pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagamentoUpdateInput, pagamentoUncheckedUpdateInput>
  }

  /**
   * pagamento delete
   */
  export type pagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter which pagamento to delete.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento deleteMany
   */
  export type pagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamentos to delete
     */
    where?: pagamentoWhereInput
  }

  /**
   * pagamento without action
   */
  export type pagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    transactionCode: string | null
    status: string | null
    amount: number | null
    reference: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    transactionCode: string | null
    status: string | null
    amount: number | null
    reference: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    transactionCode: number
    status: number
    amount: number
    reference: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    transactionCode?: true
    status?: true
    amount?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    transactionCode?: true
    status?: true
    amount?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    transactionCode?: true
    status?: true
    amount?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionCode?: boolean
    status?: boolean
    amount?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    paymentitem?: boolean | payment$paymentitemArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>


  export type paymentSelectScalar = {
    id?: boolean
    transactionCode?: boolean
    status?: boolean
    amount?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    paymentitem?: boolean | payment$paymentitemArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      paymentitem: Prisma.$paymentitemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transactionCode: string
      status: string
      amount: number
      reference: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    paymentitem<T extends payment$paymentitemArgs<ExtArgs> = {}>(args?: Subset<T, payment$paymentitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the payment model
   */ 
  interface paymentFieldRefs {
    readonly id: FieldRef<"payment", 'Int'>
    readonly transactionCode: FieldRef<"payment", 'String'>
    readonly status: FieldRef<"payment", 'String'>
    readonly amount: FieldRef<"payment", 'Float'>
    readonly reference: FieldRef<"payment", 'String'>
    readonly createdAt: FieldRef<"payment", 'DateTime'>
    readonly updatedAt: FieldRef<"payment", 'DateTime'>
    readonly userId: FieldRef<"payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
  }

  /**
   * payment.paymentitem
   */
  export type payment$paymentitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    where?: paymentitemWhereInput
    orderBy?: paymentitemOrderByWithRelationInput | paymentitemOrderByWithRelationInput[]
    cursor?: paymentitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentitemScalarFieldEnum | PaymentitemScalarFieldEnum[]
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model paymentitem
   */

  export type AggregatePaymentitem = {
    _count: PaymentitemCountAggregateOutputType | null
    _avg: PaymentitemAvgAggregateOutputType | null
    _sum: PaymentitemSumAggregateOutputType | null
    _min: PaymentitemMinAggregateOutputType | null
    _max: PaymentitemMaxAggregateOutputType | null
  }

  export type PaymentitemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    paymentId: number | null
    productId: number | null
  }

  export type PaymentitemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    paymentId: number | null
    productId: number | null
  }

  export type PaymentitemMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
    productId: number | null
  }

  export type PaymentitemMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
    productId: number | null
  }

  export type PaymentitemCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    createdAt: number
    updatedAt: number
    paymentId: number
    productId: number
    _all: number
  }


  export type PaymentitemAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    paymentId?: true
    productId?: true
  }

  export type PaymentitemSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    paymentId?: true
    productId?: true
  }

  export type PaymentitemMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
    productId?: true
  }

  export type PaymentitemMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
    productId?: true
  }

  export type PaymentitemCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
    productId?: true
    _all?: true
  }

  export type PaymentitemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentitem to aggregate.
     */
    where?: paymentitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentitems to fetch.
     */
    orderBy?: paymentitemOrderByWithRelationInput | paymentitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paymentitems
    **/
    _count?: true | PaymentitemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentitemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentitemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentitemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentitemMaxAggregateInputType
  }

  export type GetPaymentitemAggregateType<T extends PaymentitemAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentitem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentitem[P]>
      : GetScalarType<T[P], AggregatePaymentitem[P]>
  }




  export type paymentitemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentitemWhereInput
    orderBy?: paymentitemOrderByWithAggregationInput | paymentitemOrderByWithAggregationInput[]
    by: PaymentitemScalarFieldEnum[] | PaymentitemScalarFieldEnum
    having?: paymentitemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentitemCountAggregateInputType | true
    _avg?: PaymentitemAvgAggregateInputType
    _sum?: PaymentitemSumAggregateInputType
    _min?: PaymentitemMinAggregateInputType
    _max?: PaymentitemMaxAggregateInputType
  }

  export type PaymentitemGroupByOutputType = {
    id: number
    quantity: number
    price: number
    createdAt: Date
    updatedAt: Date
    paymentId: number
    productId: number
    _count: PaymentitemCountAggregateOutputType | null
    _avg: PaymentitemAvgAggregateOutputType | null
    _sum: PaymentitemSumAggregateOutputType | null
    _min: PaymentitemMinAggregateOutputType | null
    _max: PaymentitemMaxAggregateOutputType | null
  }

  type GetPaymentitemGroupByPayload<T extends paymentitemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentitemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentitemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentitemGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentitemGroupByOutputType[P]>
        }
      >
    >


  export type paymentitemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    productId?: boolean
    payment?: boolean | paymentDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentitem"]>


  export type paymentitemSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    productId?: boolean
  }

  export type paymentitemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | paymentDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $paymentitemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paymentitem"
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      price: number
      createdAt: Date
      updatedAt: Date
      paymentId: number
      productId: number
    }, ExtArgs["result"]["paymentitem"]>
    composites: {}
  }

  type paymentitemGetPayload<S extends boolean | null | undefined | paymentitemDefaultArgs> = $Result.GetResult<Prisma.$paymentitemPayload, S>

  type paymentitemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<paymentitemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentitemCountAggregateInputType | true
    }

  export interface paymentitemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paymentitem'], meta: { name: 'paymentitem' } }
    /**
     * Find zero or one Paymentitem that matches the filter.
     * @param {paymentitemFindUniqueArgs} args - Arguments to find a Paymentitem
     * @example
     * // Get one Paymentitem
     * const paymentitem = await prisma.paymentitem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentitemFindUniqueArgs>(args: SelectSubset<T, paymentitemFindUniqueArgs<ExtArgs>>): Prisma__paymentitemClient<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Paymentitem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {paymentitemFindUniqueOrThrowArgs} args - Arguments to find a Paymentitem
     * @example
     * // Get one Paymentitem
     * const paymentitem = await prisma.paymentitem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentitemFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentitemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentitemClient<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Paymentitem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentitemFindFirstArgs} args - Arguments to find a Paymentitem
     * @example
     * // Get one Paymentitem
     * const paymentitem = await prisma.paymentitem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentitemFindFirstArgs>(args?: SelectSubset<T, paymentitemFindFirstArgs<ExtArgs>>): Prisma__paymentitemClient<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Paymentitem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentitemFindFirstOrThrowArgs} args - Arguments to find a Paymentitem
     * @example
     * // Get one Paymentitem
     * const paymentitem = await prisma.paymentitem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentitemFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentitemFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentitemClient<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Paymentitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentitemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paymentitems
     * const paymentitems = await prisma.paymentitem.findMany()
     * 
     * // Get first 10 Paymentitems
     * const paymentitems = await prisma.paymentitem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentitemWithIdOnly = await prisma.paymentitem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentitemFindManyArgs>(args?: SelectSubset<T, paymentitemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Paymentitem.
     * @param {paymentitemCreateArgs} args - Arguments to create a Paymentitem.
     * @example
     * // Create one Paymentitem
     * const Paymentitem = await prisma.paymentitem.create({
     *   data: {
     *     // ... data to create a Paymentitem
     *   }
     * })
     * 
     */
    create<T extends paymentitemCreateArgs>(args: SelectSubset<T, paymentitemCreateArgs<ExtArgs>>): Prisma__paymentitemClient<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Paymentitems.
     * @param {paymentitemCreateManyArgs} args - Arguments to create many Paymentitems.
     * @example
     * // Create many Paymentitems
     * const paymentitem = await prisma.paymentitem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentitemCreateManyArgs>(args?: SelectSubset<T, paymentitemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paymentitem.
     * @param {paymentitemDeleteArgs} args - Arguments to delete one Paymentitem.
     * @example
     * // Delete one Paymentitem
     * const Paymentitem = await prisma.paymentitem.delete({
     *   where: {
     *     // ... filter to delete one Paymentitem
     *   }
     * })
     * 
     */
    delete<T extends paymentitemDeleteArgs>(args: SelectSubset<T, paymentitemDeleteArgs<ExtArgs>>): Prisma__paymentitemClient<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Paymentitem.
     * @param {paymentitemUpdateArgs} args - Arguments to update one Paymentitem.
     * @example
     * // Update one Paymentitem
     * const paymentitem = await prisma.paymentitem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentitemUpdateArgs>(args: SelectSubset<T, paymentitemUpdateArgs<ExtArgs>>): Prisma__paymentitemClient<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Paymentitems.
     * @param {paymentitemDeleteManyArgs} args - Arguments to filter Paymentitems to delete.
     * @example
     * // Delete a few Paymentitems
     * const { count } = await prisma.paymentitem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentitemDeleteManyArgs>(args?: SelectSubset<T, paymentitemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paymentitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentitemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paymentitems
     * const paymentitem = await prisma.paymentitem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentitemUpdateManyArgs>(args: SelectSubset<T, paymentitemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paymentitem.
     * @param {paymentitemUpsertArgs} args - Arguments to update or create a Paymentitem.
     * @example
     * // Update or create a Paymentitem
     * const paymentitem = await prisma.paymentitem.upsert({
     *   create: {
     *     // ... data to create a Paymentitem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paymentitem we want to update
     *   }
     * })
     */
    upsert<T extends paymentitemUpsertArgs>(args: SelectSubset<T, paymentitemUpsertArgs<ExtArgs>>): Prisma__paymentitemClient<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Paymentitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentitemCountArgs} args - Arguments to filter Paymentitems to count.
     * @example
     * // Count the number of Paymentitems
     * const count = await prisma.paymentitem.count({
     *   where: {
     *     // ... the filter for the Paymentitems we want to count
     *   }
     * })
    **/
    count<T extends paymentitemCountArgs>(
      args?: Subset<T, paymentitemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentitemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paymentitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentitemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentitemAggregateArgs>(args: Subset<T, PaymentitemAggregateArgs>): Prisma.PrismaPromise<GetPaymentitemAggregateType<T>>

    /**
     * Group by Paymentitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentitemGroupByArgs} args - Group by arguments.
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
      T extends paymentitemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentitemGroupByArgs['orderBy'] }
        : { orderBy?: paymentitemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentitemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentitemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paymentitem model
   */
  readonly fields: paymentitemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paymentitem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentitemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends paymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paymentDefaultArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the paymentitem model
   */ 
  interface paymentitemFieldRefs {
    readonly id: FieldRef<"paymentitem", 'Int'>
    readonly quantity: FieldRef<"paymentitem", 'Int'>
    readonly price: FieldRef<"paymentitem", 'Float'>
    readonly createdAt: FieldRef<"paymentitem", 'DateTime'>
    readonly updatedAt: FieldRef<"paymentitem", 'DateTime'>
    readonly paymentId: FieldRef<"paymentitem", 'Int'>
    readonly productId: FieldRef<"paymentitem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * paymentitem findUnique
   */
  export type paymentitemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * Filter, which paymentitem to fetch.
     */
    where: paymentitemWhereUniqueInput
  }

  /**
   * paymentitem findUniqueOrThrow
   */
  export type paymentitemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * Filter, which paymentitem to fetch.
     */
    where: paymentitemWhereUniqueInput
  }

  /**
   * paymentitem findFirst
   */
  export type paymentitemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * Filter, which paymentitem to fetch.
     */
    where?: paymentitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentitems to fetch.
     */
    orderBy?: paymentitemOrderByWithRelationInput | paymentitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentitems.
     */
    cursor?: paymentitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentitems.
     */
    distinct?: PaymentitemScalarFieldEnum | PaymentitemScalarFieldEnum[]
  }

  /**
   * paymentitem findFirstOrThrow
   */
  export type paymentitemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * Filter, which paymentitem to fetch.
     */
    where?: paymentitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentitems to fetch.
     */
    orderBy?: paymentitemOrderByWithRelationInput | paymentitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentitems.
     */
    cursor?: paymentitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentitems.
     */
    distinct?: PaymentitemScalarFieldEnum | PaymentitemScalarFieldEnum[]
  }

  /**
   * paymentitem findMany
   */
  export type paymentitemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * Filter, which paymentitems to fetch.
     */
    where?: paymentitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentitems to fetch.
     */
    orderBy?: paymentitemOrderByWithRelationInput | paymentitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paymentitems.
     */
    cursor?: paymentitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentitems.
     */
    skip?: number
    distinct?: PaymentitemScalarFieldEnum | PaymentitemScalarFieldEnum[]
  }

  /**
   * paymentitem create
   */
  export type paymentitemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * The data needed to create a paymentitem.
     */
    data: XOR<paymentitemCreateInput, paymentitemUncheckedCreateInput>
  }

  /**
   * paymentitem createMany
   */
  export type paymentitemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paymentitems.
     */
    data: paymentitemCreateManyInput | paymentitemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paymentitem update
   */
  export type paymentitemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * The data needed to update a paymentitem.
     */
    data: XOR<paymentitemUpdateInput, paymentitemUncheckedUpdateInput>
    /**
     * Choose, which paymentitem to update.
     */
    where: paymentitemWhereUniqueInput
  }

  /**
   * paymentitem updateMany
   */
  export type paymentitemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paymentitems.
     */
    data: XOR<paymentitemUpdateManyMutationInput, paymentitemUncheckedUpdateManyInput>
    /**
     * Filter which paymentitems to update
     */
    where?: paymentitemWhereInput
  }

  /**
   * paymentitem upsert
   */
  export type paymentitemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * The filter to search for the paymentitem to update in case it exists.
     */
    where: paymentitemWhereUniqueInput
    /**
     * In case the paymentitem found by the `where` argument doesn't exist, create a new paymentitem with this data.
     */
    create: XOR<paymentitemCreateInput, paymentitemUncheckedCreateInput>
    /**
     * In case the paymentitem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentitemUpdateInput, paymentitemUncheckedUpdateInput>
  }

  /**
   * paymentitem delete
   */
  export type paymentitemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    /**
     * Filter which paymentitem to delete.
     */
    where: paymentitemWhereUniqueInput
  }

  /**
   * paymentitem deleteMany
   */
  export type paymentitemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentitems to delete
     */
    where?: paymentitemWhereInput
  }

  /**
   * paymentitem without action
   */
  export type paymentitemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    produtoId: number | null
    quantidade: number | null
    userId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    produtoId: number | null
    quantidade: number | null
    userId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    produtoId: number | null
    quantidade: number | null
    endereco: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    produtoId: number | null
    quantidade: number | null
    endereco: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    produtoId: number
    quantidade: number
    endereco: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    produtoId?: true
    quantidade?: true
    userId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    produtoId?: true
    quantidade?: true
    userId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    produtoId?: true
    quantidade?: true
    endereco?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    produtoId?: true
    quantidade?: true
    endereco?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    produtoId?: true
    quantidade?: true
    endereco?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    produtoId: number
    quantidade: number
    endereco: string
    status: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    quantidade?: boolean
    endereco?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    pagamento?: boolean | pedido$pagamentoArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>


  export type pedidoSelectScalar = {
    id?: boolean
    produtoId?: boolean
    quantidade?: boolean
    endereco?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | pedido$pagamentoArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      pagamento: Prisma.$pagamentoPayload<ExtArgs>[]
      produto: Prisma.$produtoPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produtoId: number
      quantidade: number
      endereco: string
      status: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
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
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamento<T extends pedido$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$pagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany"> | Null>
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the pedido model
   */ 
  interface pedidoFieldRefs {
    readonly id: FieldRef<"pedido", 'Int'>
    readonly produtoId: FieldRef<"pedido", 'Int'>
    readonly quantidade: FieldRef<"pedido", 'Int'>
    readonly endereco: FieldRef<"pedido", 'String'>
    readonly status: FieldRef<"pedido", 'String'>
    readonly createdAt: FieldRef<"pedido", 'DateTime'>
    readonly updatedAt: FieldRef<"pedido", 'DateTime'>
    readonly userId: FieldRef<"pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
  }

  /**
   * pedido.pagamento
   */
  export type pedido$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    cursor?: pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    imagem: string | null
    categoria: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    imagem: string | null
    categoria: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco: number
    imagem: number
    categoria: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagem?: true
    categoria?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagem?: true
    categoria?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagem?: true
    categoria?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagem?: boolean
    categoria?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentitem?: boolean | products$paymentitemArgs<ExtArgs>
    testimonial?: boolean | products$testimonialArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>


  export type productsSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagem?: boolean
    categoria?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentitem?: boolean | products$paymentitemArgs<ExtArgs>
    testimonial?: boolean | products$testimonialArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      paymentitem: Prisma.$paymentitemPayload<ExtArgs>[]
      testimonial: Prisma.$testimonialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      preco: number
      imagem: string
      categoria: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentitem<T extends products$paymentitemArgs<ExtArgs> = {}>(args?: Subset<T, products$paymentitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentitemPayload<ExtArgs>, T, "findMany"> | Null>
    testimonial<T extends products$testimonialArgs<ExtArgs> = {}>(args?: Subset<T, products$testimonialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the products model
   */ 
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly nome: FieldRef<"products", 'String'>
    readonly descricao: FieldRef<"products", 'String'>
    readonly preco: FieldRef<"products", 'Float'>
    readonly imagem: FieldRef<"products", 'String'>
    readonly categoria: FieldRef<"products", 'String'>
    readonly status: FieldRef<"products", 'String'>
    readonly createdAt: FieldRef<"products", 'DateTime'>
    readonly updatedAt: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }

  /**
   * products.paymentitem
   */
  export type products$paymentitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentitem
     */
    select?: paymentitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentitemInclude<ExtArgs> | null
    where?: paymentitemWhereInput
    orderBy?: paymentitemOrderByWithRelationInput | paymentitemOrderByWithRelationInput[]
    cursor?: paymentitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentitemScalarFieldEnum | PaymentitemScalarFieldEnum[]
  }

  /**
   * products.testimonial
   */
  export type products$testimonialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    where?: testimonialWhereInput
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    cursor?: testimonialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
    preco1d: number | null
    preco7d: number | null
    preco30d: number | null
    precoLifetime: number | null
    estoque: number | null
    userId: number | null
    categoriaId: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco: number | null
    preco1d: number | null
    preco7d: number | null
    preco30d: number | null
    precoLifetime: number | null
    estoque: number | null
    userId: number | null
    categoriaId: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    preco1d: number | null
    preco7d: number | null
    preco30d: number | null
    precoLifetime: number | null
    tipoUso: string | null
    estoque: number | null
    imagem: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    categoriaId: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    preco1d: number | null
    preco7d: number | null
    preco30d: number | null
    precoLifetime: number | null
    tipoUso: string | null
    estoque: number | null
    imagem: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    categoriaId: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: number
    estoque: number
    imagem: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    categoriaId: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco?: true
    preco1d?: true
    preco7d?: true
    preco30d?: true
    precoLifetime?: true
    estoque?: true
    userId?: true
    categoriaId?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco?: true
    preco1d?: true
    preco7d?: true
    preco30d?: true
    precoLifetime?: true
    estoque?: true
    userId?: true
    categoriaId?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    preco1d?: true
    preco7d?: true
    preco30d?: true
    precoLifetime?: true
    tipoUso?: true
    estoque?: true
    imagem?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoriaId?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    preco1d?: true
    preco7d?: true
    preco30d?: true
    precoLifetime?: true
    tipoUso?: true
    estoque?: true
    imagem?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoriaId?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    preco1d?: true
    preco7d?: true
    preco30d?: true
    precoLifetime?: true
    tipoUso?: true
    estoque?: true
    imagem?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoriaId?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto to aggregate.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithAggregationInput | produtoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque: number
    imagem: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    userId: number
    categoriaId: number | null
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    preco1d?: boolean
    preco7d?: boolean
    preco30d?: boolean
    precoLifetime?: boolean
    tipoUso?: boolean
    estoque?: boolean
    imagem?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoriaId?: boolean
    pedido?: boolean | produto$pedidoArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    categoria?: boolean | produto$categoriaArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>


  export type produtoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    preco1d?: boolean
    preco7d?: boolean
    preco30d?: boolean
    precoLifetime?: boolean
    tipoUso?: boolean
    estoque?: boolean
    imagem?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoriaId?: boolean
  }

  export type produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | produto$pedidoArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    categoria?: boolean | produto$categoriaArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      preco: number
      preco1d: number
      preco7d: number
      preco30d: number
      precoLifetime: number
      tipoUso: string
      estoque: number
      imagem: string | null
      status: string
      createdAt: Date
      updatedAt: Date
      userId: number
      categoriaId: number | null
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type produtoGetPayload<S extends boolean | null | undefined | produtoDefaultArgs> = $Result.GetResult<Prisma.$produtoPayload, S>

  type produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<produtoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto'], meta: { name: 'produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {produtoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtoFindUniqueArgs>(args: SelectSubset<T, produtoFindUniqueArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {produtoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtoFindFirstArgs>(args?: SelectSubset<T, produtoFindFirstArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produtoFindManyArgs>(args?: SelectSubset<T, produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Produto.
     * @param {produtoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends produtoCreateArgs>(args: SelectSubset<T, produtoCreateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Produtos.
     * @param {produtoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtoCreateManyArgs>(args?: SelectSubset<T, produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {produtoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends produtoDeleteArgs>(args: SelectSubset<T, produtoDeleteArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Produto.
     * @param {produtoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtoUpdateArgs>(args: SelectSubset<T, produtoUpdateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Produtos.
     * @param {produtoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtoDeleteManyArgs>(args?: SelectSubset<T, produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtoUpdateManyArgs>(args: SelectSubset<T, produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {produtoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends produtoUpsertArgs>(args: SelectSubset<T, produtoUpsertArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtoCountArgs>(
      args?: Subset<T, produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoGroupByArgs} args - Group by arguments.
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
      T extends produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtoGroupByArgs['orderBy'] }
        : { orderBy?: produtoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto model
   */
  readonly fields: produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends produto$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, produto$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    categoria<T extends produto$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, produto$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the produto model
   */ 
  interface produtoFieldRefs {
    readonly id: FieldRef<"produto", 'Int'>
    readonly nome: FieldRef<"produto", 'String'>
    readonly descricao: FieldRef<"produto", 'String'>
    readonly preco: FieldRef<"produto", 'Float'>
    readonly preco1d: FieldRef<"produto", 'Float'>
    readonly preco7d: FieldRef<"produto", 'Float'>
    readonly preco30d: FieldRef<"produto", 'Float'>
    readonly precoLifetime: FieldRef<"produto", 'Float'>
    readonly tipoUso: FieldRef<"produto", 'String'>
    readonly estoque: FieldRef<"produto", 'Int'>
    readonly imagem: FieldRef<"produto", 'String'>
    readonly status: FieldRef<"produto", 'String'>
    readonly createdAt: FieldRef<"produto", 'DateTime'>
    readonly updatedAt: FieldRef<"produto", 'DateTime'>
    readonly userId: FieldRef<"produto", 'Int'>
    readonly categoriaId: FieldRef<"produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produto findUnique
   */
  export type produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findUniqueOrThrow
   */
  export type produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findFirst
   */
  export type produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findFirstOrThrow
   */
  export type produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findMany
   */
  export type produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto create
   */
  export type produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a produto.
     */
    data: XOR<produtoCreateInput, produtoUncheckedCreateInput>
  }

  /**
   * produto createMany
   */
  export type produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtoCreateManyInput | produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto update
   */
  export type produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a produto.
     */
    data: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
    /**
     * Choose, which produto to update.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto updateMany
   */
  export type produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtoWhereInput
  }

  /**
   * produto upsert
   */
  export type produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the produto to update in case it exists.
     */
    where: produtoWhereUniqueInput
    /**
     * In case the produto found by the `where` argument doesn't exist, create a new produto with this data.
     */
    create: XOR<produtoCreateInput, produtoUncheckedCreateInput>
    /**
     * In case the produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
  }

  /**
   * produto delete
   */
  export type produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter which produto to delete.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto deleteMany
   */
  export type produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtoWhereInput
  }

  /**
   * produto.pedido
   */
  export type produto$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * produto.categoria
   */
  export type produto$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }

  /**
   * produto without action
   */
  export type produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
  }


  /**
   * Model testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    productId: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    id: number | null
    rating: number | null
    productId: number | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: number | null
    content: string | null
    author: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: number | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: number | null
    content: string | null
    author: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: number | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    content: number
    author: number
    rating: number
    createdAt: number
    updatedAt: number
    productId: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    id?: true
    rating?: true
    productId?: true
  }

  export type TestimonialSumAggregateInputType = {
    id?: true
    rating?: true
    productId?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    content?: true
    author?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    content?: true
    author?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    content?: true
    author?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testimonial to aggregate.
     */
    where?: testimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type testimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testimonialWhereInput
    orderBy?: testimonialOrderByWithAggregationInput | testimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: testimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: number
    content: string
    author: string
    rating: number
    createdAt: Date
    updatedAt: Date
    productId: number
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends testimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type testimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    author?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testimonial"]>


  export type testimonialSelectScalar = {
    id?: boolean
    content?: boolean
    author?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
  }

  export type testimonialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $testimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testimonial"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      author: string
      rating: number
      createdAt: Date
      updatedAt: Date
      productId: number
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type testimonialGetPayload<S extends boolean | null | undefined | testimonialDefaultArgs> = $Result.GetResult<Prisma.$testimonialPayload, S>

  type testimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<testimonialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface testimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testimonial'], meta: { name: 'testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {testimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testimonialFindUniqueArgs>(args: SelectSubset<T, testimonialFindUniqueArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {testimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, testimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testimonialFindFirstArgs>(args?: SelectSubset<T, testimonialFindFirstArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, testimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends testimonialFindManyArgs>(args?: SelectSubset<T, testimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Testimonial.
     * @param {testimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends testimonialCreateArgs>(args: SelectSubset<T, testimonialCreateArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Testimonials.
     * @param {testimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testimonialCreateManyArgs>(args?: SelectSubset<T, testimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testimonial.
     * @param {testimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends testimonialDeleteArgs>(args: SelectSubset<T, testimonialDeleteArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Testimonial.
     * @param {testimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testimonialUpdateArgs>(args: SelectSubset<T, testimonialUpdateArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Testimonials.
     * @param {testimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testimonialDeleteManyArgs>(args?: SelectSubset<T, testimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testimonialUpdateManyArgs>(args: SelectSubset<T, testimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testimonial.
     * @param {testimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends testimonialUpsertArgs>(args: SelectSubset<T, testimonialUpsertArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends testimonialCountArgs>(
      args?: Subset<T, testimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialGroupByArgs} args - Group by arguments.
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
      T extends testimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testimonialGroupByArgs['orderBy'] }
        : { orderBy?: testimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testimonial model
   */
  readonly fields: testimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the testimonial model
   */ 
  interface testimonialFieldRefs {
    readonly id: FieldRef<"testimonial", 'Int'>
    readonly content: FieldRef<"testimonial", 'String'>
    readonly author: FieldRef<"testimonial", 'String'>
    readonly rating: FieldRef<"testimonial", 'Int'>
    readonly createdAt: FieldRef<"testimonial", 'DateTime'>
    readonly updatedAt: FieldRef<"testimonial", 'DateTime'>
    readonly productId: FieldRef<"testimonial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * testimonial findUnique
   */
  export type testimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * Filter, which testimonial to fetch.
     */
    where: testimonialWhereUniqueInput
  }

  /**
   * testimonial findUniqueOrThrow
   */
  export type testimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * Filter, which testimonial to fetch.
     */
    where: testimonialWhereUniqueInput
  }

  /**
   * testimonial findFirst
   */
  export type testimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * Filter, which testimonial to fetch.
     */
    where?: testimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testimonials.
     */
    cursor?: testimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * testimonial findFirstOrThrow
   */
  export type testimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * Filter, which testimonial to fetch.
     */
    where?: testimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testimonials.
     */
    cursor?: testimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * testimonial findMany
   */
  export type testimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where?: testimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testimonials.
     */
    cursor?: testimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * testimonial create
   */
  export type testimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * The data needed to create a testimonial.
     */
    data: XOR<testimonialCreateInput, testimonialUncheckedCreateInput>
  }

  /**
   * testimonial createMany
   */
  export type testimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testimonials.
     */
    data: testimonialCreateManyInput | testimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testimonial update
   */
  export type testimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * The data needed to update a testimonial.
     */
    data: XOR<testimonialUpdateInput, testimonialUncheckedUpdateInput>
    /**
     * Choose, which testimonial to update.
     */
    where: testimonialWhereUniqueInput
  }

  /**
   * testimonial updateMany
   */
  export type testimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testimonials.
     */
    data: XOR<testimonialUpdateManyMutationInput, testimonialUncheckedUpdateManyInput>
    /**
     * Filter which testimonials to update
     */
    where?: testimonialWhereInput
  }

  /**
   * testimonial upsert
   */
  export type testimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * The filter to search for the testimonial to update in case it exists.
     */
    where: testimonialWhereUniqueInput
    /**
     * In case the testimonial found by the `where` argument doesn't exist, create a new testimonial with this data.
     */
    create: XOR<testimonialCreateInput, testimonialUncheckedCreateInput>
    /**
     * In case the testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testimonialUpdateInput, testimonialUncheckedUpdateInput>
  }

  /**
   * testimonial delete
   */
  export type testimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
    /**
     * Filter which testimonial to delete.
     */
    where: testimonialWhereUniqueInput
  }

  /**
   * testimonial deleteMany
   */
  export type testimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testimonials to delete
     */
    where?: testimonialWhereInput
  }

  /**
   * testimonial without action
   */
  export type testimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testimonialInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pagamento?: boolean | user$pagamentoArgs<ExtArgs>
    payment?: boolean | user$paymentArgs<ExtArgs>
    pedido?: boolean | user$pedidoArgs<ExtArgs>
    produto?: boolean | user$produtoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | user$pagamentoArgs<ExtArgs>
    payment?: boolean | user$paymentArgs<ExtArgs>
    pedido?: boolean | user$pedidoArgs<ExtArgs>
    produto?: boolean | user$produtoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      pagamento: Prisma.$pagamentoPayload<ExtArgs>[]
      payment: Prisma.$paymentPayload<ExtArgs>[]
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
      produto: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamento<T extends user$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, user$pagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany"> | Null>
    payment<T extends user$paymentArgs<ExtArgs> = {}>(args?: Subset<T, user$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany"> | Null>
    pedido<T extends user$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, user$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany"> | Null>
    produto<T extends user$produtoArgs<ExtArgs> = {}>(args?: Subset<T, user$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly isAdmin: FieldRef<"user", 'Boolean'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user.pagamento
   */
  export type user$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    cursor?: pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * user.payment
   */
  export type user$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * user.pedido
   */
  export type user$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * user.produto
   */
  export type user$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    produtos?: boolean | categoria$produtosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>


  export type categoriaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | categoria$produtosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      produtos: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
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
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtos<T extends categoria$produtosArgs<ExtArgs> = {}>(args?: Subset<T, categoria$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the categoria model
   */ 
  interface categoriaFieldRefs {
    readonly id: FieldRef<"categoria", 'Int'>
    readonly nome: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
  }

  /**
   * categoria.produtos
   */
  export type categoria$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompraScalarFieldEnum: {
    id: 'id',
    produto: 'produto',
    comprador: 'comprador',
    preco: 'preco',
    timestamp: 'timestamp'
  };

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    valor: 'valor',
    metodo: 'metodo',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    transactionCode: 'transactionCode',
    status: 'status',
    amount: 'amount',
    reference: 'reference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PaymentitemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paymentId: 'paymentId',
    productId: 'productId'
  };

  export type PaymentitemScalarFieldEnum = (typeof PaymentitemScalarFieldEnum)[keyof typeof PaymentitemScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    produtoId: 'produtoId',
    quantidade: 'quantidade',
    endereco: 'endereco',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    imagem: 'imagem',
    categoria: 'categoria',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    preco1d: 'preco1d',
    preco7d: 'preco7d',
    preco30d: 'preco30d',
    precoLifetime: 'precoLifetime',
    tipoUso: 'tipoUso',
    estoque: 'estoque',
    imagem: 'imagem',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoriaId: 'categoriaId'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    content: 'content',
    author: 'author',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    productId: 'productId'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type compraWhereInput = {
    AND?: compraWhereInput | compraWhereInput[]
    OR?: compraWhereInput[]
    NOT?: compraWhereInput | compraWhereInput[]
    id?: IntFilter<"compra"> | number
    produto?: StringFilter<"compra"> | string
    comprador?: StringFilter<"compra"> | string
    preco?: FloatFilter<"compra"> | number
    timestamp?: DateTimeFilter<"compra"> | Date | string
  }

  export type compraOrderByWithRelationInput = {
    id?: SortOrder
    produto?: SortOrder
    comprador?: SortOrder
    preco?: SortOrder
    timestamp?: SortOrder
  }

  export type compraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: compraWhereInput | compraWhereInput[]
    OR?: compraWhereInput[]
    NOT?: compraWhereInput | compraWhereInput[]
    produto?: StringFilter<"compra"> | string
    comprador?: StringFilter<"compra"> | string
    preco?: FloatFilter<"compra"> | number
    timestamp?: DateTimeFilter<"compra"> | Date | string
  }, "id">

  export type compraOrderByWithAggregationInput = {
    id?: SortOrder
    produto?: SortOrder
    comprador?: SortOrder
    preco?: SortOrder
    timestamp?: SortOrder
    _count?: compraCountOrderByAggregateInput
    _avg?: compraAvgOrderByAggregateInput
    _max?: compraMaxOrderByAggregateInput
    _min?: compraMinOrderByAggregateInput
    _sum?: compraSumOrderByAggregateInput
  }

  export type compraScalarWhereWithAggregatesInput = {
    AND?: compraScalarWhereWithAggregatesInput | compraScalarWhereWithAggregatesInput[]
    OR?: compraScalarWhereWithAggregatesInput[]
    NOT?: compraScalarWhereWithAggregatesInput | compraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"compra"> | number
    produto?: StringWithAggregatesFilter<"compra"> | string
    comprador?: StringWithAggregatesFilter<"compra"> | string
    preco?: FloatWithAggregatesFilter<"compra"> | number
    timestamp?: DateTimeWithAggregatesFilter<"compra"> | Date | string
  }

  export type pagamentoWhereInput = {
    AND?: pagamentoWhereInput | pagamentoWhereInput[]
    OR?: pagamentoWhereInput[]
    NOT?: pagamentoWhereInput | pagamentoWhereInput[]
    id?: IntFilter<"pagamento"> | number
    pedidoId?: IntFilter<"pagamento"> | number
    valor?: FloatFilter<"pagamento"> | number
    metodo?: StringFilter<"pagamento"> | string
    status?: StringFilter<"pagamento"> | string
    createdAt?: DateTimeFilter<"pagamento"> | Date | string
    updatedAt?: DateTimeFilter<"pagamento"> | Date | string
    userId?: IntFilter<"pagamento"> | number
    pedido?: XOR<PedidoRelationFilter, pedidoWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type pagamentoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type pagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pagamentoWhereInput | pagamentoWhereInput[]
    OR?: pagamentoWhereInput[]
    NOT?: pagamentoWhereInput | pagamentoWhereInput[]
    pedidoId?: IntFilter<"pagamento"> | number
    valor?: FloatFilter<"pagamento"> | number
    metodo?: StringFilter<"pagamento"> | string
    status?: StringFilter<"pagamento"> | string
    createdAt?: DateTimeFilter<"pagamento"> | Date | string
    updatedAt?: DateTimeFilter<"pagamento"> | Date | string
    userId?: IntFilter<"pagamento"> | number
    pedido?: XOR<PedidoRelationFilter, pedidoWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type pagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: pagamentoCountOrderByAggregateInput
    _avg?: pagamentoAvgOrderByAggregateInput
    _max?: pagamentoMaxOrderByAggregateInput
    _min?: pagamentoMinOrderByAggregateInput
    _sum?: pagamentoSumOrderByAggregateInput
  }

  export type pagamentoScalarWhereWithAggregatesInput = {
    AND?: pagamentoScalarWhereWithAggregatesInput | pagamentoScalarWhereWithAggregatesInput[]
    OR?: pagamentoScalarWhereWithAggregatesInput[]
    NOT?: pagamentoScalarWhereWithAggregatesInput | pagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pagamento"> | number
    pedidoId?: IntWithAggregatesFilter<"pagamento"> | number
    valor?: FloatWithAggregatesFilter<"pagamento"> | number
    metodo?: StringWithAggregatesFilter<"pagamento"> | string
    status?: StringWithAggregatesFilter<"pagamento"> | string
    createdAt?: DateTimeWithAggregatesFilter<"pagamento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"pagamento"> | Date | string
    userId?: IntWithAggregatesFilter<"pagamento"> | number
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    id?: IntFilter<"payment"> | number
    transactionCode?: StringFilter<"payment"> | string
    status?: StringFilter<"payment"> | string
    amount?: FloatFilter<"payment"> | number
    reference?: StringFilter<"payment"> | string
    createdAt?: DateTimeFilter<"payment"> | Date | string
    updatedAt?: DateTimeFilter<"payment"> | Date | string
    userId?: IntFilter<"payment"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    paymentitem?: PaymentitemListRelationFilter
  }

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder
    transactionCode?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: userOrderByWithRelationInput
    paymentitem?: paymentitemOrderByRelationAggregateInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transactionCode?: string
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    status?: StringFilter<"payment"> | string
    amount?: FloatFilter<"payment"> | number
    reference?: StringFilter<"payment"> | string
    createdAt?: DateTimeFilter<"payment"> | Date | string
    updatedAt?: DateTimeFilter<"payment"> | Date | string
    userId?: IntFilter<"payment"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    paymentitem?: PaymentitemListRelationFilter
  }, "id" | "transactionCode">

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder
    transactionCode?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payment"> | number
    transactionCode?: StringWithAggregatesFilter<"payment"> | string
    status?: StringWithAggregatesFilter<"payment"> | string
    amount?: FloatWithAggregatesFilter<"payment"> | number
    reference?: StringWithAggregatesFilter<"payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"payment"> | Date | string
    userId?: IntWithAggregatesFilter<"payment"> | number
  }

  export type paymentitemWhereInput = {
    AND?: paymentitemWhereInput | paymentitemWhereInput[]
    OR?: paymentitemWhereInput[]
    NOT?: paymentitemWhereInput | paymentitemWhereInput[]
    id?: IntFilter<"paymentitem"> | number
    quantity?: IntFilter<"paymentitem"> | number
    price?: FloatFilter<"paymentitem"> | number
    createdAt?: DateTimeFilter<"paymentitem"> | Date | string
    updatedAt?: DateTimeFilter<"paymentitem"> | Date | string
    paymentId?: IntFilter<"paymentitem"> | number
    productId?: IntFilter<"paymentitem"> | number
    payment?: XOR<PaymentRelationFilter, paymentWhereInput>
    products?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type paymentitemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    productId?: SortOrder
    payment?: paymentOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type paymentitemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentitemWhereInput | paymentitemWhereInput[]
    OR?: paymentitemWhereInput[]
    NOT?: paymentitemWhereInput | paymentitemWhereInput[]
    quantity?: IntFilter<"paymentitem"> | number
    price?: FloatFilter<"paymentitem"> | number
    createdAt?: DateTimeFilter<"paymentitem"> | Date | string
    updatedAt?: DateTimeFilter<"paymentitem"> | Date | string
    paymentId?: IntFilter<"paymentitem"> | number
    productId?: IntFilter<"paymentitem"> | number
    payment?: XOR<PaymentRelationFilter, paymentWhereInput>
    products?: XOR<ProductsRelationFilter, productsWhereInput>
  }, "id">

  export type paymentitemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    productId?: SortOrder
    _count?: paymentitemCountOrderByAggregateInput
    _avg?: paymentitemAvgOrderByAggregateInput
    _max?: paymentitemMaxOrderByAggregateInput
    _min?: paymentitemMinOrderByAggregateInput
    _sum?: paymentitemSumOrderByAggregateInput
  }

  export type paymentitemScalarWhereWithAggregatesInput = {
    AND?: paymentitemScalarWhereWithAggregatesInput | paymentitemScalarWhereWithAggregatesInput[]
    OR?: paymentitemScalarWhereWithAggregatesInput[]
    NOT?: paymentitemScalarWhereWithAggregatesInput | paymentitemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paymentitem"> | number
    quantity?: IntWithAggregatesFilter<"paymentitem"> | number
    price?: FloatWithAggregatesFilter<"paymentitem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"paymentitem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"paymentitem"> | Date | string
    paymentId?: IntWithAggregatesFilter<"paymentitem"> | number
    productId?: IntWithAggregatesFilter<"paymentitem"> | number
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id?: IntFilter<"pedido"> | number
    produtoId?: IntFilter<"pedido"> | number
    quantidade?: IntFilter<"pedido"> | number
    endereco?: StringFilter<"pedido"> | string
    status?: StringFilter<"pedido"> | string
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
    userId?: IntFilter<"pedido"> | number
    pagamento?: PagamentoListRelationFilter
    produto?: XOR<ProdutoRelationFilter, produtoWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type pedidoOrderByWithRelationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    endereco?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    pagamento?: pagamentoOrderByRelationAggregateInput
    produto?: produtoOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    produtoId?: IntFilter<"pedido"> | number
    quantidade?: IntFilter<"pedido"> | number
    endereco?: StringFilter<"pedido"> | string
    status?: StringFilter<"pedido"> | string
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
    userId?: IntFilter<"pedido"> | number
    pagamento?: PagamentoListRelationFilter
    produto?: XOR<ProdutoRelationFilter, produtoWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type pedidoOrderByWithAggregationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    endereco?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido"> | number
    produtoId?: IntWithAggregatesFilter<"pedido"> | number
    quantidade?: IntWithAggregatesFilter<"pedido"> | number
    endereco?: StringWithAggregatesFilter<"pedido"> | string
    status?: StringWithAggregatesFilter<"pedido"> | string
    createdAt?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    userId?: IntWithAggregatesFilter<"pedido"> | number
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    nome?: StringFilter<"products"> | string
    descricao?: StringFilter<"products"> | string
    preco?: FloatFilter<"products"> | number
    imagem?: StringFilter<"products"> | string
    categoria?: StringFilter<"products"> | string
    status?: StringFilter<"products"> | string
    createdAt?: DateTimeFilter<"products"> | Date | string
    updatedAt?: DateTimeFilter<"products"> | Date | string
    paymentitem?: PaymentitemListRelationFilter
    testimonial?: TestimonialListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentitem?: paymentitemOrderByRelationAggregateInput
    testimonial?: testimonialOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    nome?: StringFilter<"products"> | string
    descricao?: StringFilter<"products"> | string
    preco?: FloatFilter<"products"> | number
    imagem?: StringFilter<"products"> | string
    categoria?: StringFilter<"products"> | string
    status?: StringFilter<"products"> | string
    createdAt?: DateTimeFilter<"products"> | Date | string
    updatedAt?: DateTimeFilter<"products"> | Date | string
    paymentitem?: PaymentitemListRelationFilter
    testimonial?: TestimonialListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    nome?: StringWithAggregatesFilter<"products"> | string
    descricao?: StringWithAggregatesFilter<"products"> | string
    preco?: FloatWithAggregatesFilter<"products"> | number
    imagem?: StringWithAggregatesFilter<"products"> | string
    categoria?: StringWithAggregatesFilter<"products"> | string
    status?: StringWithAggregatesFilter<"products"> | string
    createdAt?: DateTimeWithAggregatesFilter<"products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"products"> | Date | string
  }

  export type produtoWhereInput = {
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    id?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    preco?: FloatFilter<"produto"> | number
    preco1d?: FloatFilter<"produto"> | number
    preco7d?: FloatFilter<"produto"> | number
    preco30d?: FloatFilter<"produto"> | number
    precoLifetime?: FloatFilter<"produto"> | number
    tipoUso?: StringFilter<"produto"> | string
    estoque?: IntFilter<"produto"> | number
    imagem?: StringNullableFilter<"produto"> | string | null
    status?: StringFilter<"produto"> | string
    createdAt?: DateTimeFilter<"produto"> | Date | string
    updatedAt?: DateTimeFilter<"produto"> | Date | string
    userId?: IntFilter<"produto"> | number
    categoriaId?: IntNullableFilter<"produto"> | number | null
    pedido?: PedidoListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
  }

  export type produtoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    preco1d?: SortOrder
    preco7d?: SortOrder
    preco30d?: SortOrder
    precoLifetime?: SortOrder
    tipoUso?: SortOrder
    estoque?: SortOrder
    imagem?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    pedido?: pedidoOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    categoria?: categoriaOrderByWithRelationInput
  }

  export type produtoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    preco?: FloatFilter<"produto"> | number
    preco1d?: FloatFilter<"produto"> | number
    preco7d?: FloatFilter<"produto"> | number
    preco30d?: FloatFilter<"produto"> | number
    precoLifetime?: FloatFilter<"produto"> | number
    tipoUso?: StringFilter<"produto"> | string
    estoque?: IntFilter<"produto"> | number
    imagem?: StringNullableFilter<"produto"> | string | null
    status?: StringFilter<"produto"> | string
    createdAt?: DateTimeFilter<"produto"> | Date | string
    updatedAt?: DateTimeFilter<"produto"> | Date | string
    userId?: IntFilter<"produto"> | number
    categoriaId?: IntNullableFilter<"produto"> | number | null
    pedido?: PedidoListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
  }, "id">

  export type produtoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    preco1d?: SortOrder
    preco7d?: SortOrder
    preco30d?: SortOrder
    precoLifetime?: SortOrder
    tipoUso?: SortOrder
    estoque?: SortOrder
    imagem?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    _count?: produtoCountOrderByAggregateInput
    _avg?: produtoAvgOrderByAggregateInput
    _max?: produtoMaxOrderByAggregateInput
    _min?: produtoMinOrderByAggregateInput
    _sum?: produtoSumOrderByAggregateInput
  }

  export type produtoScalarWhereWithAggregatesInput = {
    AND?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    OR?: produtoScalarWhereWithAggregatesInput[]
    NOT?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produto"> | number
    nome?: StringWithAggregatesFilter<"produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"produto"> | string | null
    preco?: FloatWithAggregatesFilter<"produto"> | number
    preco1d?: FloatWithAggregatesFilter<"produto"> | number
    preco7d?: FloatWithAggregatesFilter<"produto"> | number
    preco30d?: FloatWithAggregatesFilter<"produto"> | number
    precoLifetime?: FloatWithAggregatesFilter<"produto"> | number
    tipoUso?: StringWithAggregatesFilter<"produto"> | string
    estoque?: IntWithAggregatesFilter<"produto"> | number
    imagem?: StringNullableWithAggregatesFilter<"produto"> | string | null
    status?: StringWithAggregatesFilter<"produto"> | string
    createdAt?: DateTimeWithAggregatesFilter<"produto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"produto"> | Date | string
    userId?: IntWithAggregatesFilter<"produto"> | number
    categoriaId?: IntNullableWithAggregatesFilter<"produto"> | number | null
  }

  export type testimonialWhereInput = {
    AND?: testimonialWhereInput | testimonialWhereInput[]
    OR?: testimonialWhereInput[]
    NOT?: testimonialWhereInput | testimonialWhereInput[]
    id?: IntFilter<"testimonial"> | number
    content?: StringFilter<"testimonial"> | string
    author?: StringFilter<"testimonial"> | string
    rating?: IntFilter<"testimonial"> | number
    createdAt?: DateTimeFilter<"testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"testimonial"> | Date | string
    productId?: IntFilter<"testimonial"> | number
    products?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type testimonialOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type testimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: testimonialWhereInput | testimonialWhereInput[]
    OR?: testimonialWhereInput[]
    NOT?: testimonialWhereInput | testimonialWhereInput[]
    content?: StringFilter<"testimonial"> | string
    author?: StringFilter<"testimonial"> | string
    rating?: IntFilter<"testimonial"> | number
    createdAt?: DateTimeFilter<"testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"testimonial"> | Date | string
    productId?: IntFilter<"testimonial"> | number
    products?: XOR<ProductsRelationFilter, productsWhereInput>
  }, "id">

  export type testimonialOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    _count?: testimonialCountOrderByAggregateInput
    _avg?: testimonialAvgOrderByAggregateInput
    _max?: testimonialMaxOrderByAggregateInput
    _min?: testimonialMinOrderByAggregateInput
    _sum?: testimonialSumOrderByAggregateInput
  }

  export type testimonialScalarWhereWithAggregatesInput = {
    AND?: testimonialScalarWhereWithAggregatesInput | testimonialScalarWhereWithAggregatesInput[]
    OR?: testimonialScalarWhereWithAggregatesInput[]
    NOT?: testimonialScalarWhereWithAggregatesInput | testimonialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"testimonial"> | number
    content?: StringWithAggregatesFilter<"testimonial"> | string
    author?: StringWithAggregatesFilter<"testimonial"> | string
    rating?: IntWithAggregatesFilter<"testimonial"> | number
    createdAt?: DateTimeWithAggregatesFilter<"testimonial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"testimonial"> | Date | string
    productId?: IntWithAggregatesFilter<"testimonial"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    isAdmin?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    pagamento?: PagamentoListRelationFilter
    payment?: PaymentListRelationFilter
    pedido?: PedidoListRelationFilter
    produto?: ProdutoListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pagamento?: pagamentoOrderByRelationAggregateInput
    payment?: paymentOrderByRelationAggregateInput
    pedido?: pedidoOrderByRelationAggregateInput
    produto?: produtoOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    isAdmin?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    pagamento?: PagamentoListRelationFilter
    payment?: PaymentListRelationFilter
    pedido?: PedidoListRelationFilter
    produto?: ProdutoListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    isAdmin?: BoolWithAggregatesFilter<"user"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id?: IntFilter<"categoria"> | number
    nome?: StringFilter<"categoria"> | string
    produtos?: ProdutoListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    produtos?: produtoOrderByRelationAggregateInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    produtos?: ProdutoListRelationFilter
  }, "id" | "nome">

  export type categoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categoria"> | number
    nome?: StringWithAggregatesFilter<"categoria"> | string
  }

  export type compraCreateInput = {
    produto: string
    comprador: string
    preco: number
    timestamp?: Date | string
  }

  export type compraUncheckedCreateInput = {
    id?: number
    produto: string
    comprador: string
    preco: number
    timestamp?: Date | string
  }

  export type compraUpdateInput = {
    produto?: StringFieldUpdateOperationsInput | string
    comprador?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type compraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto?: StringFieldUpdateOperationsInput | string
    comprador?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type compraCreateManyInput = {
    id?: number
    produto: string
    comprador: string
    preco: number
    timestamp?: Date | string
  }

  export type compraUpdateManyMutationInput = {
    produto?: StringFieldUpdateOperationsInput | string
    comprador?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type compraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto?: StringFieldUpdateOperationsInput | string
    comprador?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagamentoCreateInput = {
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    pedido: pedidoCreateNestedOneWithoutPagamentoInput
    user: userCreateNestedOneWithoutPagamentoInput
  }

  export type pagamentoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type pagamentoUpdateInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutPagamentoNestedInput
    user?: userUpdateOneRequiredWithoutPagamentoNestedInput
  }

  export type pagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentoCreateManyInput = {
    id?: number
    pedidoId: number
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type pagamentoUpdateManyMutationInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type paymentCreateInput = {
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutPaymentInput
    paymentitem?: paymentitemCreateNestedManyWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    id?: number
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
    paymentitem?: paymentitemUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type paymentUpdateInput = {
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPaymentNestedInput
    paymentitem?: paymentitemUpdateManyWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    paymentitem?: paymentitemUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type paymentCreateManyInput = {
    id?: number
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type paymentUpdateManyMutationInput = {
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type paymentitemCreateInput = {
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    payment: paymentCreateNestedOneWithoutPaymentitemInput
    products: productsCreateNestedOneWithoutPaymentitemInput
  }

  export type paymentitemUncheckedCreateInput = {
    id?: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    paymentId: number
    productId: number
  }

  export type paymentitemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateOneRequiredWithoutPaymentitemNestedInput
    products?: productsUpdateOneRequiredWithoutPaymentitemNestedInput
  }

  export type paymentitemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type paymentitemCreateManyInput = {
    id?: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    paymentId: number
    productId: number
  }

  export type paymentitemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentitemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoCreateInput = {
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoCreateNestedManyWithoutPedidoInput
    produto: produtoCreateNestedOneWithoutPedidoInput
    user: userCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    id?: number
    produtoId: number
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUpdateManyWithoutPedidoNestedInput
    produto?: produtoUpdateOneRequiredWithoutPedidoNestedInput
    user?: userUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    pagamento?: pagamentoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    id?: number
    produtoId: number
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type pedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type productsCreateInput = {
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    paymentitem?: paymentitemCreateNestedManyWithoutProductsInput
    testimonial?: testimonialCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    paymentitem?: paymentitemUncheckedCreateNestedManyWithoutProductsInput
    testimonial?: testimonialUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentitem?: paymentitemUpdateManyWithoutProductsNestedInput
    testimonial?: testimonialUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentitem?: paymentitemUncheckedUpdateManyWithoutProductsNestedInput
    testimonial?: testimonialUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type productsUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type produtoCreateInput = {
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedido?: pedidoCreateNestedManyWithoutProdutoInput
    user: userCreateNestedOneWithoutProdutoInput
    categoria?: categoriaCreateNestedOneWithoutProdutosInput
  }

  export type produtoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoriaId?: number | null
    pedido?: pedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateManyWithoutProdutoNestedInput
    user?: userUpdateOneRequiredWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneWithoutProdutosNestedInput
  }

  export type produtoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    pedido?: pedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoriaId?: number | null
  }

  export type produtoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type produtoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type testimonialCreateInput = {
    content: string
    author: string
    rating: number
    createdAt?: Date | string
    updatedAt: Date | string
    products: productsCreateNestedOneWithoutTestimonialInput
  }

  export type testimonialUncheckedCreateInput = {
    id?: number
    content: string
    author: string
    rating: number
    createdAt?: Date | string
    updatedAt: Date | string
    productId: number
  }

  export type testimonialUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateOneRequiredWithoutTestimonialNestedInput
  }

  export type testimonialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type testimonialCreateManyInput = {
    id?: number
    content: string
    author: string
    rating: number
    createdAt?: Date | string
    updatedAt: Date | string
    productId: number
  }

  export type testimonialUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testimonialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoCreateNestedManyWithoutUserInput
    payment?: paymentCreateNestedManyWithoutUserInput
    pedido?: pedidoCreateNestedManyWithoutUserInput
    produto?: produtoCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutUserInput
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUserInput
    produto?: produtoUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUpdateManyWithoutUserNestedInput
    payment?: paymentUpdateManyWithoutUserNestedInput
    pedido?: pedidoUpdateManyWithoutUserNestedInput
    produto?: produtoUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUncheckedUpdateManyWithoutUserNestedInput
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUserNestedInput
    produto?: produtoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriaCreateInput = {
    nome: string
    produtos?: produtoCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id?: number
    nome: string
    produtos?: produtoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    produtos?: produtoUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    produtos?: produtoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id?: number
    nome: string
  }

  export type categoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type compraCountOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    comprador?: SortOrder
    preco?: SortOrder
    timestamp?: SortOrder
  }

  export type compraAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type compraMaxOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    comprador?: SortOrder
    preco?: SortOrder
    timestamp?: SortOrder
  }

  export type compraMinOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    comprador?: SortOrder
    preco?: SortOrder
    timestamp?: SortOrder
  }

  export type compraSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type PedidoRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type pagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type pagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    userId?: SortOrder
  }

  export type pagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type pagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type pagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    userId?: SortOrder
  }

  export type PaymentitemListRelationFilter = {
    every?: paymentitemWhereInput
    some?: paymentitemWhereInput
    none?: paymentitemWhereInput
  }

  export type paymentitemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder
    transactionCode?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionCode?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder
    transactionCode?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type PaymentRelationFilter = {
    is?: paymentWhereInput
    isNot?: paymentWhereInput
  }

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type paymentitemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    productId?: SortOrder
  }

  export type paymentitemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    productId?: SortOrder
  }

  export type paymentitemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    productId?: SortOrder
  }

  export type paymentitemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    productId?: SortOrder
  }

  export type paymentitemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    productId?: SortOrder
  }

  export type PagamentoListRelationFilter = {
    every?: pagamentoWhereInput
    some?: pagamentoWhereInput
    none?: pagamentoWhereInput
  }

  export type ProdutoRelationFilter = {
    is?: produtoWhereInput
    isNot?: produtoWhereInput
  }

  export type pagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoCountOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    endereco?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    userId?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    endereco?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    endereco?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    userId?: SortOrder
  }

  export type TestimonialListRelationFilter = {
    every?: testimonialWhereInput
    some?: testimonialWhereInput
    none?: testimonialWhereInput
  }

  export type testimonialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
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

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type CategoriaNullableRelationFilter = {
    is?: categoriaWhereInput | null
    isNot?: categoriaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produtoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    preco1d?: SortOrder
    preco7d?: SortOrder
    preco30d?: SortOrder
    precoLifetime?: SortOrder
    tipoUso?: SortOrder
    estoque?: SortOrder
    imagem?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
  }

  export type produtoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    preco1d?: SortOrder
    preco7d?: SortOrder
    preco30d?: SortOrder
    precoLifetime?: SortOrder
    estoque?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
  }

  export type produtoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    preco1d?: SortOrder
    preco7d?: SortOrder
    preco30d?: SortOrder
    precoLifetime?: SortOrder
    tipoUso?: SortOrder
    estoque?: SortOrder
    imagem?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
  }

  export type produtoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    preco1d?: SortOrder
    preco7d?: SortOrder
    preco30d?: SortOrder
    precoLifetime?: SortOrder
    tipoUso?: SortOrder
    estoque?: SortOrder
    imagem?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
  }

  export type produtoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    preco1d?: SortOrder
    preco7d?: SortOrder
    preco30d?: SortOrder
    precoLifetime?: SortOrder
    estoque?: SortOrder
    userId?: SortOrder
    categoriaId?: SortOrder
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

  export type testimonialCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
  }

  export type testimonialAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    productId?: SortOrder
  }

  export type testimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
  }

  export type testimonialMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
  }

  export type testimonialSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    productId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: produtoWhereInput
    some?: produtoWhereInput
    none?: produtoWhereInput
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type categoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pedidoCreateNestedOneWithoutPagamentoInput = {
    create?: XOR<pedidoCreateWithoutPagamentoInput, pedidoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutPagamentoInput
    connect?: pedidoWhereUniqueInput
  }

  export type userCreateNestedOneWithoutPagamentoInput = {
    create?: XOR<userCreateWithoutPagamentoInput, userUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: userCreateOrConnectWithoutPagamentoInput
    connect?: userWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutPagamentoNestedInput = {
    create?: XOR<pedidoCreateWithoutPagamentoInput, pedidoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutPagamentoInput
    upsert?: pedidoUpsertWithoutPagamentoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutPagamentoInput, pedidoUpdateWithoutPagamentoInput>, pedidoUncheckedUpdateWithoutPagamentoInput>
  }

  export type userUpdateOneRequiredWithoutPagamentoNestedInput = {
    create?: XOR<userCreateWithoutPagamentoInput, userUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: userCreateOrConnectWithoutPagamentoInput
    upsert?: userUpsertWithoutPagamentoInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPagamentoInput, userUpdateWithoutPagamentoInput>, userUncheckedUpdateWithoutPagamentoInput>
  }

  export type userCreateNestedOneWithoutPaymentInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput
    connect?: userWhereUniqueInput
  }

  export type paymentitemCreateNestedManyWithoutPaymentInput = {
    create?: XOR<paymentitemCreateWithoutPaymentInput, paymentitemUncheckedCreateWithoutPaymentInput> | paymentitemCreateWithoutPaymentInput[] | paymentitemUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: paymentitemCreateOrConnectWithoutPaymentInput | paymentitemCreateOrConnectWithoutPaymentInput[]
    createMany?: paymentitemCreateManyPaymentInputEnvelope
    connect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
  }

  export type paymentitemUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<paymentitemCreateWithoutPaymentInput, paymentitemUncheckedCreateWithoutPaymentInput> | paymentitemCreateWithoutPaymentInput[] | paymentitemUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: paymentitemCreateOrConnectWithoutPaymentInput | paymentitemCreateOrConnectWithoutPaymentInput[]
    createMany?: paymentitemCreateManyPaymentInputEnvelope
    connect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput
    upsert?: userUpsertWithoutPaymentInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPaymentInput, userUpdateWithoutPaymentInput>, userUncheckedUpdateWithoutPaymentInput>
  }

  export type paymentitemUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<paymentitemCreateWithoutPaymentInput, paymentitemUncheckedCreateWithoutPaymentInput> | paymentitemCreateWithoutPaymentInput[] | paymentitemUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: paymentitemCreateOrConnectWithoutPaymentInput | paymentitemCreateOrConnectWithoutPaymentInput[]
    upsert?: paymentitemUpsertWithWhereUniqueWithoutPaymentInput | paymentitemUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: paymentitemCreateManyPaymentInputEnvelope
    set?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    disconnect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    delete?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    connect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    update?: paymentitemUpdateWithWhereUniqueWithoutPaymentInput | paymentitemUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: paymentitemUpdateManyWithWhereWithoutPaymentInput | paymentitemUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: paymentitemScalarWhereInput | paymentitemScalarWhereInput[]
  }

  export type paymentitemUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<paymentitemCreateWithoutPaymentInput, paymentitemUncheckedCreateWithoutPaymentInput> | paymentitemCreateWithoutPaymentInput[] | paymentitemUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: paymentitemCreateOrConnectWithoutPaymentInput | paymentitemCreateOrConnectWithoutPaymentInput[]
    upsert?: paymentitemUpsertWithWhereUniqueWithoutPaymentInput | paymentitemUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: paymentitemCreateManyPaymentInputEnvelope
    set?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    disconnect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    delete?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    connect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    update?: paymentitemUpdateWithWhereUniqueWithoutPaymentInput | paymentitemUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: paymentitemUpdateManyWithWhereWithoutPaymentInput | paymentitemUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: paymentitemScalarWhereInput | paymentitemScalarWhereInput[]
  }

  export type paymentCreateNestedOneWithoutPaymentitemInput = {
    create?: XOR<paymentCreateWithoutPaymentitemInput, paymentUncheckedCreateWithoutPaymentitemInput>
    connectOrCreate?: paymentCreateOrConnectWithoutPaymentitemInput
    connect?: paymentWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutPaymentitemInput = {
    create?: XOR<productsCreateWithoutPaymentitemInput, productsUncheckedCreateWithoutPaymentitemInput>
    connectOrCreate?: productsCreateOrConnectWithoutPaymentitemInput
    connect?: productsWhereUniqueInput
  }

  export type paymentUpdateOneRequiredWithoutPaymentitemNestedInput = {
    create?: XOR<paymentCreateWithoutPaymentitemInput, paymentUncheckedCreateWithoutPaymentitemInput>
    connectOrCreate?: paymentCreateOrConnectWithoutPaymentitemInput
    upsert?: paymentUpsertWithoutPaymentitemInput
    connect?: paymentWhereUniqueInput
    update?: XOR<XOR<paymentUpdateToOneWithWhereWithoutPaymentitemInput, paymentUpdateWithoutPaymentitemInput>, paymentUncheckedUpdateWithoutPaymentitemInput>
  }

  export type productsUpdateOneRequiredWithoutPaymentitemNestedInput = {
    create?: XOR<productsCreateWithoutPaymentitemInput, productsUncheckedCreateWithoutPaymentitemInput>
    connectOrCreate?: productsCreateOrConnectWithoutPaymentitemInput
    upsert?: productsUpsertWithoutPaymentitemInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutPaymentitemInput, productsUpdateWithoutPaymentitemInput>, productsUncheckedUpdateWithoutPaymentitemInput>
  }

  export type pagamentoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pagamentoCreateWithoutPedidoInput, pagamentoUncheckedCreateWithoutPedidoInput> | pagamentoCreateWithoutPedidoInput[] | pagamentoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutPedidoInput | pagamentoCreateOrConnectWithoutPedidoInput[]
    createMany?: pagamentoCreateManyPedidoInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type produtoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutPedidoInput
    connect?: produtoWhereUniqueInput
  }

  export type userCreateNestedOneWithoutPedidoInput = {
    create?: XOR<userCreateWithoutPedidoInput, userUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: userCreateOrConnectWithoutPedidoInput
    connect?: userWhereUniqueInput
  }

  export type pagamentoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pagamentoCreateWithoutPedidoInput, pagamentoUncheckedCreateWithoutPedidoInput> | pagamentoCreateWithoutPedidoInput[] | pagamentoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutPedidoInput | pagamentoCreateOrConnectWithoutPedidoInput[]
    createMany?: pagamentoCreateManyPedidoInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type pagamentoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pagamentoCreateWithoutPedidoInput, pagamentoUncheckedCreateWithoutPedidoInput> | pagamentoCreateWithoutPedidoInput[] | pagamentoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutPedidoInput | pagamentoCreateOrConnectWithoutPedidoInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutPedidoInput | pagamentoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pagamentoCreateManyPedidoInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutPedidoInput | pagamentoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutPedidoInput | pagamentoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type produtoUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutPedidoInput
    upsert?: produtoUpsertWithoutPedidoInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutPedidoInput, produtoUpdateWithoutPedidoInput>, produtoUncheckedUpdateWithoutPedidoInput>
  }

  export type userUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<userCreateWithoutPedidoInput, userUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: userCreateOrConnectWithoutPedidoInput
    upsert?: userUpsertWithoutPedidoInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPedidoInput, userUpdateWithoutPedidoInput>, userUncheckedUpdateWithoutPedidoInput>
  }

  export type pagamentoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pagamentoCreateWithoutPedidoInput, pagamentoUncheckedCreateWithoutPedidoInput> | pagamentoCreateWithoutPedidoInput[] | pagamentoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutPedidoInput | pagamentoCreateOrConnectWithoutPedidoInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutPedidoInput | pagamentoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pagamentoCreateManyPedidoInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutPedidoInput | pagamentoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutPedidoInput | pagamentoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type paymentitemCreateNestedManyWithoutProductsInput = {
    create?: XOR<paymentitemCreateWithoutProductsInput, paymentitemUncheckedCreateWithoutProductsInput> | paymentitemCreateWithoutProductsInput[] | paymentitemUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: paymentitemCreateOrConnectWithoutProductsInput | paymentitemCreateOrConnectWithoutProductsInput[]
    createMany?: paymentitemCreateManyProductsInputEnvelope
    connect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
  }

  export type testimonialCreateNestedManyWithoutProductsInput = {
    create?: XOR<testimonialCreateWithoutProductsInput, testimonialUncheckedCreateWithoutProductsInput> | testimonialCreateWithoutProductsInput[] | testimonialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: testimonialCreateOrConnectWithoutProductsInput | testimonialCreateOrConnectWithoutProductsInput[]
    createMany?: testimonialCreateManyProductsInputEnvelope
    connect?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
  }

  export type paymentitemUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<paymentitemCreateWithoutProductsInput, paymentitemUncheckedCreateWithoutProductsInput> | paymentitemCreateWithoutProductsInput[] | paymentitemUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: paymentitemCreateOrConnectWithoutProductsInput | paymentitemCreateOrConnectWithoutProductsInput[]
    createMany?: paymentitemCreateManyProductsInputEnvelope
    connect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
  }

  export type testimonialUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<testimonialCreateWithoutProductsInput, testimonialUncheckedCreateWithoutProductsInput> | testimonialCreateWithoutProductsInput[] | testimonialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: testimonialCreateOrConnectWithoutProductsInput | testimonialCreateOrConnectWithoutProductsInput[]
    createMany?: testimonialCreateManyProductsInputEnvelope
    connect?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
  }

  export type paymentitemUpdateManyWithoutProductsNestedInput = {
    create?: XOR<paymentitemCreateWithoutProductsInput, paymentitemUncheckedCreateWithoutProductsInput> | paymentitemCreateWithoutProductsInput[] | paymentitemUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: paymentitemCreateOrConnectWithoutProductsInput | paymentitemCreateOrConnectWithoutProductsInput[]
    upsert?: paymentitemUpsertWithWhereUniqueWithoutProductsInput | paymentitemUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: paymentitemCreateManyProductsInputEnvelope
    set?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    disconnect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    delete?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    connect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    update?: paymentitemUpdateWithWhereUniqueWithoutProductsInput | paymentitemUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: paymentitemUpdateManyWithWhereWithoutProductsInput | paymentitemUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: paymentitemScalarWhereInput | paymentitemScalarWhereInput[]
  }

  export type testimonialUpdateManyWithoutProductsNestedInput = {
    create?: XOR<testimonialCreateWithoutProductsInput, testimonialUncheckedCreateWithoutProductsInput> | testimonialCreateWithoutProductsInput[] | testimonialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: testimonialCreateOrConnectWithoutProductsInput | testimonialCreateOrConnectWithoutProductsInput[]
    upsert?: testimonialUpsertWithWhereUniqueWithoutProductsInput | testimonialUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: testimonialCreateManyProductsInputEnvelope
    set?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
    disconnect?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
    delete?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
    connect?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
    update?: testimonialUpdateWithWhereUniqueWithoutProductsInput | testimonialUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: testimonialUpdateManyWithWhereWithoutProductsInput | testimonialUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: testimonialScalarWhereInput | testimonialScalarWhereInput[]
  }

  export type paymentitemUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<paymentitemCreateWithoutProductsInput, paymentitemUncheckedCreateWithoutProductsInput> | paymentitemCreateWithoutProductsInput[] | paymentitemUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: paymentitemCreateOrConnectWithoutProductsInput | paymentitemCreateOrConnectWithoutProductsInput[]
    upsert?: paymentitemUpsertWithWhereUniqueWithoutProductsInput | paymentitemUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: paymentitemCreateManyProductsInputEnvelope
    set?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    disconnect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    delete?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    connect?: paymentitemWhereUniqueInput | paymentitemWhereUniqueInput[]
    update?: paymentitemUpdateWithWhereUniqueWithoutProductsInput | paymentitemUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: paymentitemUpdateManyWithWhereWithoutProductsInput | paymentitemUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: paymentitemScalarWhereInput | paymentitemScalarWhereInput[]
  }

  export type testimonialUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<testimonialCreateWithoutProductsInput, testimonialUncheckedCreateWithoutProductsInput> | testimonialCreateWithoutProductsInput[] | testimonialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: testimonialCreateOrConnectWithoutProductsInput | testimonialCreateOrConnectWithoutProductsInput[]
    upsert?: testimonialUpsertWithWhereUniqueWithoutProductsInput | testimonialUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: testimonialCreateManyProductsInputEnvelope
    set?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
    disconnect?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
    delete?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
    connect?: testimonialWhereUniqueInput | testimonialWhereUniqueInput[]
    update?: testimonialUpdateWithWhereUniqueWithoutProductsInput | testimonialUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: testimonialUpdateManyWithWhereWithoutProductsInput | testimonialUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: testimonialScalarWhereInput | testimonialScalarWhereInput[]
  }

  export type pedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput> | pedidoCreateWithoutProdutoInput[] | pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutProdutoInput | pedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: pedidoCreateManyProdutoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutProdutoInput = {
    create?: XOR<userCreateWithoutProdutoInput, userUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: userCreateOrConnectWithoutProdutoInput
    connect?: userWhereUniqueInput
  }

  export type categoriaCreateNestedOneWithoutProdutosInput = {
    create?: XOR<categoriaCreateWithoutProdutosInput, categoriaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutProdutosInput
    connect?: categoriaWhereUniqueInput
  }

  export type pedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput> | pedidoCreateWithoutProdutoInput[] | pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutProdutoInput | pedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: pedidoCreateManyProdutoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type pedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput> | pedidoCreateWithoutProdutoInput[] | pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutProdutoInput | pedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutProdutoInput | pedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: pedidoCreateManyProdutoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutProdutoInput | pedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutProdutoInput | pedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<userCreateWithoutProdutoInput, userUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: userCreateOrConnectWithoutProdutoInput
    upsert?: userUpsertWithoutProdutoInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProdutoInput, userUpdateWithoutProdutoInput>, userUncheckedUpdateWithoutProdutoInput>
  }

  export type categoriaUpdateOneWithoutProdutosNestedInput = {
    create?: XOR<categoriaCreateWithoutProdutosInput, categoriaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutProdutosInput
    upsert?: categoriaUpsertWithoutProdutosInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutProdutosInput, categoriaUpdateWithoutProdutosInput>, categoriaUncheckedUpdateWithoutProdutosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput> | pedidoCreateWithoutProdutoInput[] | pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutProdutoInput | pedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutProdutoInput | pedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: pedidoCreateManyProdutoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutProdutoInput | pedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutProdutoInput | pedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutTestimonialInput = {
    create?: XOR<productsCreateWithoutTestimonialInput, productsUncheckedCreateWithoutTestimonialInput>
    connectOrCreate?: productsCreateOrConnectWithoutTestimonialInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutTestimonialNestedInput = {
    create?: XOR<productsCreateWithoutTestimonialInput, productsUncheckedCreateWithoutTestimonialInput>
    connectOrCreate?: productsCreateOrConnectWithoutTestimonialInput
    upsert?: productsUpsertWithoutTestimonialInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutTestimonialInput, productsUpdateWithoutTestimonialInput>, productsUncheckedUpdateWithoutTestimonialInput>
  }

  export type pagamentoCreateNestedManyWithoutUserInput = {
    create?: XOR<pagamentoCreateWithoutUserInput, pagamentoUncheckedCreateWithoutUserInput> | pagamentoCreateWithoutUserInput[] | pagamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutUserInput | pagamentoCreateOrConnectWithoutUserInput[]
    createMany?: pagamentoCreateManyUserInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type paymentCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type pedidoCreateNestedManyWithoutUserInput = {
    create?: XOR<pedidoCreateWithoutUserInput, pedidoUncheckedCreateWithoutUserInput> | pedidoCreateWithoutUserInput[] | pedidoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUserInput | pedidoCreateOrConnectWithoutUserInput[]
    createMany?: pedidoCreateManyUserInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type produtoCreateNestedManyWithoutUserInput = {
    create?: XOR<produtoCreateWithoutUserInput, produtoUncheckedCreateWithoutUserInput> | produtoCreateWithoutUserInput[] | produtoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUserInput | produtoCreateOrConnectWithoutUserInput[]
    createMany?: produtoCreateManyUserInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type pagamentoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<pagamentoCreateWithoutUserInput, pagamentoUncheckedCreateWithoutUserInput> | pagamentoCreateWithoutUserInput[] | pagamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutUserInput | pagamentoCreateOrConnectWithoutUserInput[]
    createMany?: pagamentoCreateManyUserInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<pedidoCreateWithoutUserInput, pedidoUncheckedCreateWithoutUserInput> | pedidoCreateWithoutUserInput[] | pedidoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUserInput | pedidoCreateOrConnectWithoutUserInput[]
    createMany?: pedidoCreateManyUserInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<produtoCreateWithoutUserInput, produtoUncheckedCreateWithoutUserInput> | produtoCreateWithoutUserInput[] | produtoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUserInput | produtoCreateOrConnectWithoutUserInput[]
    createMany?: produtoCreateManyUserInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type pagamentoUpdateManyWithoutUserNestedInput = {
    create?: XOR<pagamentoCreateWithoutUserInput, pagamentoUncheckedCreateWithoutUserInput> | pagamentoCreateWithoutUserInput[] | pagamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutUserInput | pagamentoCreateOrConnectWithoutUserInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutUserInput | pagamentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pagamentoCreateManyUserInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutUserInput | pagamentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutUserInput | pagamentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type paymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type pedidoUpdateManyWithoutUserNestedInput = {
    create?: XOR<pedidoCreateWithoutUserInput, pedidoUncheckedCreateWithoutUserInput> | pedidoCreateWithoutUserInput[] | pedidoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUserInput | pedidoCreateOrConnectWithoutUserInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutUserInput | pedidoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pedidoCreateManyUserInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutUserInput | pedidoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutUserInput | pedidoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type produtoUpdateManyWithoutUserNestedInput = {
    create?: XOR<produtoCreateWithoutUserInput, produtoUncheckedCreateWithoutUserInput> | produtoCreateWithoutUserInput[] | produtoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUserInput | produtoCreateOrConnectWithoutUserInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutUserInput | produtoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: produtoCreateManyUserInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutUserInput | produtoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutUserInput | produtoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type pagamentoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<pagamentoCreateWithoutUserInput, pagamentoUncheckedCreateWithoutUserInput> | pagamentoCreateWithoutUserInput[] | pagamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutUserInput | pagamentoCreateOrConnectWithoutUserInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutUserInput | pagamentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pagamentoCreateManyUserInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutUserInput | pagamentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutUserInput | pagamentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<pedidoCreateWithoutUserInput, pedidoUncheckedCreateWithoutUserInput> | pedidoCreateWithoutUserInput[] | pedidoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUserInput | pedidoCreateOrConnectWithoutUserInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutUserInput | pedidoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pedidoCreateManyUserInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutUserInput | pedidoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutUserInput | pedidoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<produtoCreateWithoutUserInput, produtoUncheckedCreateWithoutUserInput> | produtoCreateWithoutUserInput[] | produtoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutUserInput | produtoCreateOrConnectWithoutUserInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutUserInput | produtoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: produtoCreateManyUserInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutUserInput | produtoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutUserInput | produtoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type produtoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type produtoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutCategoriaInput | produtoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutCategoriaInput | produtoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutCategoriaInput | produtoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutCategoriaInput | produtoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutCategoriaInput | produtoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutCategoriaInput | produtoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type pedidoCreateWithoutPagamentoInput = {
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    produto: produtoCreateNestedOneWithoutPedidoInput
    user: userCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutPagamentoInput = {
    id?: number
    produtoId: number
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type pedidoCreateOrConnectWithoutPagamentoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutPagamentoInput, pedidoUncheckedCreateWithoutPagamentoInput>
  }

  export type userCreateWithoutPagamentoInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    payment?: paymentCreateNestedManyWithoutUserInput
    pedido?: pedidoCreateNestedManyWithoutUserInput
    produto?: produtoCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPagamentoInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUserInput
    produto?: produtoUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPagamentoInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPagamentoInput, userUncheckedCreateWithoutPagamentoInput>
  }

  export type pedidoUpsertWithoutPagamentoInput = {
    update: XOR<pedidoUpdateWithoutPagamentoInput, pedidoUncheckedUpdateWithoutPagamentoInput>
    create: XOR<pedidoCreateWithoutPagamentoInput, pedidoUncheckedCreateWithoutPagamentoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutPagamentoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutPagamentoInput, pedidoUncheckedUpdateWithoutPagamentoInput>
  }

  export type pedidoUpdateWithoutPagamentoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: produtoUpdateOneRequiredWithoutPedidoNestedInput
    user?: userUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutPagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type userUpsertWithoutPagamentoInput = {
    update: XOR<userUpdateWithoutPagamentoInput, userUncheckedUpdateWithoutPagamentoInput>
    create: XOR<userCreateWithoutPagamentoInput, userUncheckedCreateWithoutPagamentoInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPagamentoInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPagamentoInput, userUncheckedUpdateWithoutPagamentoInput>
  }

  export type userUpdateWithoutPagamentoInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateManyWithoutUserNestedInput
    pedido?: pedidoUpdateManyWithoutUserNestedInput
    produto?: produtoUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUserNestedInput
    produto?: produtoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutPaymentInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoCreateNestedManyWithoutUserInput
    pedido?: pedidoCreateNestedManyWithoutUserInput
    produto?: produtoCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPaymentInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutUserInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUserInput
    produto?: produtoUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPaymentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>
  }

  export type paymentitemCreateWithoutPaymentInput = {
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    products: productsCreateNestedOneWithoutPaymentitemInput
  }

  export type paymentitemUncheckedCreateWithoutPaymentInput = {
    id?: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    productId: number
  }

  export type paymentitemCreateOrConnectWithoutPaymentInput = {
    where: paymentitemWhereUniqueInput
    create: XOR<paymentitemCreateWithoutPaymentInput, paymentitemUncheckedCreateWithoutPaymentInput>
  }

  export type paymentitemCreateManyPaymentInputEnvelope = {
    data: paymentitemCreateManyPaymentInput | paymentitemCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutPaymentInput = {
    update: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPaymentInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>
  }

  export type userUpdateWithoutPaymentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUpdateManyWithoutUserNestedInput
    pedido?: pedidoUpdateManyWithoutUserNestedInput
    produto?: produtoUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUncheckedUpdateManyWithoutUserNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUserNestedInput
    produto?: produtoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type paymentitemUpsertWithWhereUniqueWithoutPaymentInput = {
    where: paymentitemWhereUniqueInput
    update: XOR<paymentitemUpdateWithoutPaymentInput, paymentitemUncheckedUpdateWithoutPaymentInput>
    create: XOR<paymentitemCreateWithoutPaymentInput, paymentitemUncheckedCreateWithoutPaymentInput>
  }

  export type paymentitemUpdateWithWhereUniqueWithoutPaymentInput = {
    where: paymentitemWhereUniqueInput
    data: XOR<paymentitemUpdateWithoutPaymentInput, paymentitemUncheckedUpdateWithoutPaymentInput>
  }

  export type paymentitemUpdateManyWithWhereWithoutPaymentInput = {
    where: paymentitemScalarWhereInput
    data: XOR<paymentitemUpdateManyMutationInput, paymentitemUncheckedUpdateManyWithoutPaymentInput>
  }

  export type paymentitemScalarWhereInput = {
    AND?: paymentitemScalarWhereInput | paymentitemScalarWhereInput[]
    OR?: paymentitemScalarWhereInput[]
    NOT?: paymentitemScalarWhereInput | paymentitemScalarWhereInput[]
    id?: IntFilter<"paymentitem"> | number
    quantity?: IntFilter<"paymentitem"> | number
    price?: FloatFilter<"paymentitem"> | number
    createdAt?: DateTimeFilter<"paymentitem"> | Date | string
    updatedAt?: DateTimeFilter<"paymentitem"> | Date | string
    paymentId?: IntFilter<"paymentitem"> | number
    productId?: IntFilter<"paymentitem"> | number
  }

  export type paymentCreateWithoutPaymentitemInput = {
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutPaymentitemInput = {
    id?: number
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type paymentCreateOrConnectWithoutPaymentitemInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutPaymentitemInput, paymentUncheckedCreateWithoutPaymentitemInput>
  }

  export type productsCreateWithoutPaymentitemInput = {
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    testimonial?: testimonialCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutPaymentitemInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    testimonial?: testimonialUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutPaymentitemInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutPaymentitemInput, productsUncheckedCreateWithoutPaymentitemInput>
  }

  export type paymentUpsertWithoutPaymentitemInput = {
    update: XOR<paymentUpdateWithoutPaymentitemInput, paymentUncheckedUpdateWithoutPaymentitemInput>
    create: XOR<paymentCreateWithoutPaymentitemInput, paymentUncheckedCreateWithoutPaymentitemInput>
    where?: paymentWhereInput
  }

  export type paymentUpdateToOneWithWhereWithoutPaymentitemInput = {
    where?: paymentWhereInput
    data: XOR<paymentUpdateWithoutPaymentitemInput, paymentUncheckedUpdateWithoutPaymentitemInput>
  }

  export type paymentUpdateWithoutPaymentitemInput = {
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutPaymentitemInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type productsUpsertWithoutPaymentitemInput = {
    update: XOR<productsUpdateWithoutPaymentitemInput, productsUncheckedUpdateWithoutPaymentitemInput>
    create: XOR<productsCreateWithoutPaymentitemInput, productsUncheckedCreateWithoutPaymentitemInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutPaymentitemInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutPaymentitemInput, productsUncheckedUpdateWithoutPaymentitemInput>
  }

  export type productsUpdateWithoutPaymentitemInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testimonial?: testimonialUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutPaymentitemInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testimonial?: testimonialUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type pagamentoCreateWithoutPedidoInput = {
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutPagamentoInput
  }

  export type pagamentoUncheckedCreateWithoutPedidoInput = {
    id?: number
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type pagamentoCreateOrConnectWithoutPedidoInput = {
    where: pagamentoWhereUniqueInput
    create: XOR<pagamentoCreateWithoutPedidoInput, pagamentoUncheckedCreateWithoutPedidoInput>
  }

  export type pagamentoCreateManyPedidoInputEnvelope = {
    data: pagamentoCreateManyPedidoInput | pagamentoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type produtoCreateWithoutPedidoInput = {
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProdutoInput
    categoria?: categoriaCreateNestedOneWithoutProdutosInput
  }

  export type produtoUncheckedCreateWithoutPedidoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoriaId?: number | null
  }

  export type produtoCreateOrConnectWithoutPedidoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput>
  }

  export type userCreateWithoutPedidoInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoCreateNestedManyWithoutUserInput
    payment?: paymentCreateNestedManyWithoutUserInput
    produto?: produtoCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPedidoInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutUserInput
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    produto?: produtoUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPedidoInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPedidoInput, userUncheckedCreateWithoutPedidoInput>
  }

  export type pagamentoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: pagamentoWhereUniqueInput
    update: XOR<pagamentoUpdateWithoutPedidoInput, pagamentoUncheckedUpdateWithoutPedidoInput>
    create: XOR<pagamentoCreateWithoutPedidoInput, pagamentoUncheckedCreateWithoutPedidoInput>
  }

  export type pagamentoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: pagamentoWhereUniqueInput
    data: XOR<pagamentoUpdateWithoutPedidoInput, pagamentoUncheckedUpdateWithoutPedidoInput>
  }

  export type pagamentoUpdateManyWithWhereWithoutPedidoInput = {
    where: pagamentoScalarWhereInput
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type pagamentoScalarWhereInput = {
    AND?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
    OR?: pagamentoScalarWhereInput[]
    NOT?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
    id?: IntFilter<"pagamento"> | number
    pedidoId?: IntFilter<"pagamento"> | number
    valor?: FloatFilter<"pagamento"> | number
    metodo?: StringFilter<"pagamento"> | string
    status?: StringFilter<"pagamento"> | string
    createdAt?: DateTimeFilter<"pagamento"> | Date | string
    updatedAt?: DateTimeFilter<"pagamento"> | Date | string
    userId?: IntFilter<"pagamento"> | number
  }

  export type produtoUpsertWithoutPedidoInput = {
    update: XOR<produtoUpdateWithoutPedidoInput, produtoUncheckedUpdateWithoutPedidoInput>
    create: XOR<produtoCreateWithoutPedidoInput, produtoUncheckedCreateWithoutPedidoInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutPedidoInput, produtoUncheckedUpdateWithoutPedidoInput>
  }

  export type produtoUpdateWithoutPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneWithoutProdutosNestedInput
  }

  export type produtoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userUpsertWithoutPedidoInput = {
    update: XOR<userUpdateWithoutPedidoInput, userUncheckedUpdateWithoutPedidoInput>
    create: XOR<userCreateWithoutPedidoInput, userUncheckedCreateWithoutPedidoInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPedidoInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPedidoInput, userUncheckedUpdateWithoutPedidoInput>
  }

  export type userUpdateWithoutPedidoInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUpdateManyWithoutUserNestedInput
    payment?: paymentUpdateManyWithoutUserNestedInput
    produto?: produtoUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUncheckedUpdateManyWithoutUserNestedInput
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    produto?: produtoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type paymentitemCreateWithoutProductsInput = {
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    payment: paymentCreateNestedOneWithoutPaymentitemInput
  }

  export type paymentitemUncheckedCreateWithoutProductsInput = {
    id?: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    paymentId: number
  }

  export type paymentitemCreateOrConnectWithoutProductsInput = {
    where: paymentitemWhereUniqueInput
    create: XOR<paymentitemCreateWithoutProductsInput, paymentitemUncheckedCreateWithoutProductsInput>
  }

  export type paymentitemCreateManyProductsInputEnvelope = {
    data: paymentitemCreateManyProductsInput | paymentitemCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type testimonialCreateWithoutProductsInput = {
    content: string
    author: string
    rating: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type testimonialUncheckedCreateWithoutProductsInput = {
    id?: number
    content: string
    author: string
    rating: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type testimonialCreateOrConnectWithoutProductsInput = {
    where: testimonialWhereUniqueInput
    create: XOR<testimonialCreateWithoutProductsInput, testimonialUncheckedCreateWithoutProductsInput>
  }

  export type testimonialCreateManyProductsInputEnvelope = {
    data: testimonialCreateManyProductsInput | testimonialCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type paymentitemUpsertWithWhereUniqueWithoutProductsInput = {
    where: paymentitemWhereUniqueInput
    update: XOR<paymentitemUpdateWithoutProductsInput, paymentitemUncheckedUpdateWithoutProductsInput>
    create: XOR<paymentitemCreateWithoutProductsInput, paymentitemUncheckedCreateWithoutProductsInput>
  }

  export type paymentitemUpdateWithWhereUniqueWithoutProductsInput = {
    where: paymentitemWhereUniqueInput
    data: XOR<paymentitemUpdateWithoutProductsInput, paymentitemUncheckedUpdateWithoutProductsInput>
  }

  export type paymentitemUpdateManyWithWhereWithoutProductsInput = {
    where: paymentitemScalarWhereInput
    data: XOR<paymentitemUpdateManyMutationInput, paymentitemUncheckedUpdateManyWithoutProductsInput>
  }

  export type testimonialUpsertWithWhereUniqueWithoutProductsInput = {
    where: testimonialWhereUniqueInput
    update: XOR<testimonialUpdateWithoutProductsInput, testimonialUncheckedUpdateWithoutProductsInput>
    create: XOR<testimonialCreateWithoutProductsInput, testimonialUncheckedCreateWithoutProductsInput>
  }

  export type testimonialUpdateWithWhereUniqueWithoutProductsInput = {
    where: testimonialWhereUniqueInput
    data: XOR<testimonialUpdateWithoutProductsInput, testimonialUncheckedUpdateWithoutProductsInput>
  }

  export type testimonialUpdateManyWithWhereWithoutProductsInput = {
    where: testimonialScalarWhereInput
    data: XOR<testimonialUpdateManyMutationInput, testimonialUncheckedUpdateManyWithoutProductsInput>
  }

  export type testimonialScalarWhereInput = {
    AND?: testimonialScalarWhereInput | testimonialScalarWhereInput[]
    OR?: testimonialScalarWhereInput[]
    NOT?: testimonialScalarWhereInput | testimonialScalarWhereInput[]
    id?: IntFilter<"testimonial"> | number
    content?: StringFilter<"testimonial"> | string
    author?: StringFilter<"testimonial"> | string
    rating?: IntFilter<"testimonial"> | number
    createdAt?: DateTimeFilter<"testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"testimonial"> | Date | string
    productId?: IntFilter<"testimonial"> | number
  }

  export type pedidoCreateWithoutProdutoInput = {
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoCreateNestedManyWithoutPedidoInput
    user: userCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutProdutoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput>
  }

  export type pedidoCreateManyProdutoInputEnvelope = {
    data: pedidoCreateManyProdutoInput | pedidoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutProdutoInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoCreateNestedManyWithoutUserInput
    payment?: paymentCreateNestedManyWithoutUserInput
    pedido?: pedidoCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProdutoInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutUserInput
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProdutoInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProdutoInput, userUncheckedCreateWithoutProdutoInput>
  }

  export type categoriaCreateWithoutProdutosInput = {
    nome: string
  }

  export type categoriaUncheckedCreateWithoutProdutosInput = {
    id?: number
    nome: string
  }

  export type categoriaCreateOrConnectWithoutProdutosInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutProdutosInput, categoriaUncheckedCreateWithoutProdutosInput>
  }

  export type pedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutProdutoInput, pedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<pedidoCreateWithoutProdutoInput, pedidoUncheckedCreateWithoutProdutoInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutProdutoInput, pedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type pedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    id?: IntFilter<"pedido"> | number
    produtoId?: IntFilter<"pedido"> | number
    quantidade?: IntFilter<"pedido"> | number
    endereco?: StringFilter<"pedido"> | string
    status?: StringFilter<"pedido"> | string
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
    userId?: IntFilter<"pedido"> | number
  }

  export type userUpsertWithoutProdutoInput = {
    update: XOR<userUpdateWithoutProdutoInput, userUncheckedUpdateWithoutProdutoInput>
    create: XOR<userCreateWithoutProdutoInput, userUncheckedCreateWithoutProdutoInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProdutoInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProdutoInput, userUncheckedUpdateWithoutProdutoInput>
  }

  export type userUpdateWithoutProdutoInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUpdateManyWithoutUserNestedInput
    payment?: paymentUpdateManyWithoutUserNestedInput
    pedido?: pedidoUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUncheckedUpdateManyWithoutUserNestedInput
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type categoriaUpsertWithoutProdutosInput = {
    update: XOR<categoriaUpdateWithoutProdutosInput, categoriaUncheckedUpdateWithoutProdutosInput>
    create: XOR<categoriaCreateWithoutProdutosInput, categoriaUncheckedCreateWithoutProdutosInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutProdutosInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutProdutosInput, categoriaUncheckedUpdateWithoutProdutosInput>
  }

  export type categoriaUpdateWithoutProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateWithoutTestimonialInput = {
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    paymentitem?: paymentitemCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutTestimonialInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    paymentitem?: paymentitemUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutTestimonialInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutTestimonialInput, productsUncheckedCreateWithoutTestimonialInput>
  }

  export type productsUpsertWithoutTestimonialInput = {
    update: XOR<productsUpdateWithoutTestimonialInput, productsUncheckedUpdateWithoutTestimonialInput>
    create: XOR<productsCreateWithoutTestimonialInput, productsUncheckedCreateWithoutTestimonialInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutTestimonialInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutTestimonialInput, productsUncheckedUpdateWithoutTestimonialInput>
  }

  export type productsUpdateWithoutTestimonialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentitem?: paymentitemUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutTestimonialInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagem?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentitem?: paymentitemUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type pagamentoCreateWithoutUserInput = {
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    pedido: pedidoCreateNestedOneWithoutPagamentoInput
  }

  export type pagamentoUncheckedCreateWithoutUserInput = {
    id?: number
    pedidoId: number
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type pagamentoCreateOrConnectWithoutUserInput = {
    where: pagamentoWhereUniqueInput
    create: XOR<pagamentoCreateWithoutUserInput, pagamentoUncheckedCreateWithoutUserInput>
  }

  export type pagamentoCreateManyUserInputEnvelope = {
    data: pagamentoCreateManyUserInput | pagamentoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type paymentCreateWithoutUserInput = {
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt?: Date | string
    updatedAt: Date | string
    paymentitem?: paymentitemCreateNestedManyWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutUserInput = {
    id?: number
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt?: Date | string
    updatedAt: Date | string
    paymentitem?: paymentitemUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type paymentCreateOrConnectWithoutUserInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
  }

  export type paymentCreateManyUserInputEnvelope = {
    data: paymentCreateManyUserInput | paymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type pedidoCreateWithoutUserInput = {
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoCreateNestedManyWithoutPedidoInput
    produto: produtoCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutUserInput = {
    id?: number
    produtoId: number
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    pagamento?: pagamentoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutUserInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutUserInput, pedidoUncheckedCreateWithoutUserInput>
  }

  export type pedidoCreateManyUserInputEnvelope = {
    data: pedidoCreateManyUserInput | pedidoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type produtoCreateWithoutUserInput = {
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedido?: pedidoCreateNestedManyWithoutProdutoInput
    categoria?: categoriaCreateNestedOneWithoutProdutosInput
  }

  export type produtoUncheckedCreateWithoutUserInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId?: number | null
    pedido?: pedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutUserInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutUserInput, produtoUncheckedCreateWithoutUserInput>
  }

  export type produtoCreateManyUserInputEnvelope = {
    data: produtoCreateManyUserInput | produtoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type pagamentoUpsertWithWhereUniqueWithoutUserInput = {
    where: pagamentoWhereUniqueInput
    update: XOR<pagamentoUpdateWithoutUserInput, pagamentoUncheckedUpdateWithoutUserInput>
    create: XOR<pagamentoCreateWithoutUserInput, pagamentoUncheckedCreateWithoutUserInput>
  }

  export type pagamentoUpdateWithWhereUniqueWithoutUserInput = {
    where: pagamentoWhereUniqueInput
    data: XOR<pagamentoUpdateWithoutUserInput, pagamentoUncheckedUpdateWithoutUserInput>
  }

  export type pagamentoUpdateManyWithWhereWithoutUserInput = {
    where: pagamentoScalarWhereInput
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyWithoutUserInput>
  }

  export type paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>
  }

  export type paymentUpdateManyWithWhereWithoutUserInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutUserInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    id?: IntFilter<"payment"> | number
    transactionCode?: StringFilter<"payment"> | string
    status?: StringFilter<"payment"> | string
    amount?: FloatFilter<"payment"> | number
    reference?: StringFilter<"payment"> | string
    createdAt?: DateTimeFilter<"payment"> | Date | string
    updatedAt?: DateTimeFilter<"payment"> | Date | string
    userId?: IntFilter<"payment"> | number
  }

  export type pedidoUpsertWithWhereUniqueWithoutUserInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutUserInput, pedidoUncheckedUpdateWithoutUserInput>
    create: XOR<pedidoCreateWithoutUserInput, pedidoUncheckedCreateWithoutUserInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutUserInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutUserInput, pedidoUncheckedUpdateWithoutUserInput>
  }

  export type pedidoUpdateManyWithWhereWithoutUserInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutUserInput>
  }

  export type produtoUpsertWithWhereUniqueWithoutUserInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutUserInput, produtoUncheckedUpdateWithoutUserInput>
    create: XOR<produtoCreateWithoutUserInput, produtoUncheckedCreateWithoutUserInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutUserInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutUserInput, produtoUncheckedUpdateWithoutUserInput>
  }

  export type produtoUpdateManyWithWhereWithoutUserInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutUserInput>
  }

  export type produtoScalarWhereInput = {
    AND?: produtoScalarWhereInput | produtoScalarWhereInput[]
    OR?: produtoScalarWhereInput[]
    NOT?: produtoScalarWhereInput | produtoScalarWhereInput[]
    id?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    preco?: FloatFilter<"produto"> | number
    preco1d?: FloatFilter<"produto"> | number
    preco7d?: FloatFilter<"produto"> | number
    preco30d?: FloatFilter<"produto"> | number
    precoLifetime?: FloatFilter<"produto"> | number
    tipoUso?: StringFilter<"produto"> | string
    estoque?: IntFilter<"produto"> | number
    imagem?: StringNullableFilter<"produto"> | string | null
    status?: StringFilter<"produto"> | string
    createdAt?: DateTimeFilter<"produto"> | Date | string
    updatedAt?: DateTimeFilter<"produto"> | Date | string
    userId?: IntFilter<"produto"> | number
    categoriaId?: IntNullableFilter<"produto"> | number | null
  }

  export type produtoCreateWithoutCategoriaInput = {
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedido?: pedidoCreateNestedManyWithoutProdutoInput
    user: userCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    pedido?: pedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput>
  }

  export type produtoCreateManyCategoriaInputEnvelope = {
    data: produtoCreateManyCategoriaInput | produtoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type produtoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutCategoriaInput, produtoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutCategoriaInput, produtoUncheckedUpdateWithoutCategoriaInput>
  }

  export type produtoUpdateManyWithWhereWithoutCategoriaInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type paymentitemCreateManyPaymentInput = {
    id?: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    productId: number
  }

  export type paymentitemUpdateWithoutPaymentInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateOneRequiredWithoutPaymentitemNestedInput
  }

  export type paymentitemUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type paymentitemUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentoCreateManyPedidoInput = {
    id?: number
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type pagamentoUpdateWithoutPedidoInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPagamentoNestedInput
  }

  export type pagamentoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type paymentitemCreateManyProductsInput = {
    id?: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    paymentId: number
  }

  export type testimonialCreateManyProductsInput = {
    id?: number
    content: string
    author: string
    rating: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type paymentitemUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateOneRequiredWithoutPaymentitemNestedInput
  }

  export type paymentitemUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
  }

  export type paymentitemUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
  }

  export type testimonialUpdateWithoutProductsInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testimonialUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testimonialUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoCreateManyProdutoInput = {
    id?: number
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: number
  }

  export type pedidoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUpdateManyWithoutPedidoNestedInput
    user?: userUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    pagamento?: pagamentoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentoCreateManyUserInput = {
    id?: number
    pedidoId: number
    valor: number
    metodo: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type paymentCreateManyUserInput = {
    id?: number
    transactionCode: string
    status: string
    amount: number
    reference: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type pedidoCreateManyUserInput = {
    id?: number
    produtoId: number
    quantidade: number
    endereco: string
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type produtoCreateManyUserInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId?: number | null
  }

  export type pagamentoUpdateWithoutUserInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutPagamentoNestedInput
  }

  export type pagamentoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagamentoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUpdateWithoutUserInput = {
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentitem?: paymentitemUpdateManyWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentitem?: paymentitemUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUpdateWithoutUserInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUpdateManyWithoutPedidoNestedInput
    produto?: produtoUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: pagamentoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type produtoUpdateWithoutUserInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneWithoutProdutosNestedInput
  }

  export type produtoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    pedido?: pedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type produtoCreateManyCategoriaInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    preco1d: number
    preco7d: number
    preco30d: number
    precoLifetime: number
    tipoUso: string
    estoque?: number
    imagem?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type produtoUpdateWithoutCategoriaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateManyWithoutProdutoNestedInput
    user?: userUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    pedido?: pedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    preco1d?: FloatFieldUpdateOperationsInput | number
    preco7d?: FloatFieldUpdateOperationsInput | number
    preco30d?: FloatFieldUpdateOperationsInput | number
    precoLifetime?: FloatFieldUpdateOperationsInput | number
    tipoUso?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PaymentCountOutputTypeDefaultArgs instead
     */
    export type PaymentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PedidoCountOutputTypeDefaultArgs instead
     */
    export type PedidoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PedidoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsCountOutputTypeDefaultArgs instead
     */
    export type ProductsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProdutoCountOutputTypeDefaultArgs instead
     */
    export type ProdutoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProdutoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaCountOutputTypeDefaultArgs instead
     */
    export type CategoriaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use compraDefaultArgs instead
     */
    export type compraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = compraDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pagamentoDefaultArgs instead
     */
    export type pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pagamentoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use paymentDefaultArgs instead
     */
    export type paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = paymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use paymentitemDefaultArgs instead
     */
    export type paymentitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = paymentitemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pedidoDefaultArgs instead
     */
    export type pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pedidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productsDefaultArgs instead
     */
    export type productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use produtoDefaultArgs instead
     */
    export type produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = produtoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use testimonialDefaultArgs instead
     */
    export type testimonialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = testimonialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoriaDefaultArgs instead
     */
    export type categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoriaDefaultArgs<ExtArgs>

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