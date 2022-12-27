# Bun HTTP Framework Benchmark

Compare throughput benchmarks from various Bun HTTP framework

Library/framework:

-   bagel
-   baojs
-   buchta
-   bun
-   bun-bakery
-   elysia ~~(previously kingworld)~~
-   express
-   express-node
-   fastify-node
-   hapi-node
-   hono
-   hyperbun
-   koa-node
-   nbit
-   nest-node
-   zarf

Test method:
Throughput

1. Get (/)
    - [GET] `/`
    - Return `hi` in plain text
2. Params, query & header
    - [GET] `/id/:id`
    - Extract path params, query and header.
    - For this benchmark, the request URL will be send as: `/id/1?name=bun`
    - Set `x-powered-by` to `benchmark`
    - Expected response: **"1 bun"** (`${id} ${query}`)
3. Post JSON
    - [POST] `/json`
    - Mirror body to response
    - For the benchmark, the request body will be sent as: `{ "hello": "world" }`
    - Expected response: `{ "hello": "world" }`

# Prerequistes

-   [bombardier](https://github.com/codesenberg/bombardier)
-   Nodejs
-   Bun

# Run Test

```typescript
bun run benchmark
```

Dump result will be available at `results/[benchmark-name].txt`

## Benchmark Condition

This benchmark is tested under the following condition:

-   MacBook Pro
-   Apple M1 Pro, RAM 16GB
-   macOS Version 13.1 (22C65)
-   Bun 0.4.0
-   Node 18.12.1

Tested on 27 Dec 14:21 (GMT+1)

## Results

For results suffix with `-node` means that the framework is run in Node, otherwise is using Bun.

These results are measured in req/s:

| Framework    | Get (/)    | Params, query & header | Post JSON  |
| ------------ | ---------- | ---------------------- | ---------- |
| bagel        | 59,556.57  | 43,316.68              | 47,077.89  |
| baojs        | 81,533.1   | 74,087.02              | 73,336.95  |
| buchta       | 102,672.99 | 87,997.54              | 70,711.26  |
| bun          | 129,743.5  | 106,216.81             | 84,521.52  |
| bun-bakery   | 103,740.19 | 81,701.17              | 73,586.78  |
| elysia       | 136,188.37 | 123,245.22             | 121,139.75 |
| express      | 22,543.9   | 22,188.23              | 21,040.99  |
| express-node | 16,739.6   | 15,907.42              | 15,345.18  |
| fastify-node | 57,746.68  | 53,615.48              | 28,862.46  |
| hapi-node    | 55,375.68  | 53,211.08              | 29,043.33  |
| hono         | 55,019.8   | 51,971.88              | 28,659.93  |
| hyperbun     | 55,895.1   | 53,026.57              | 28,895.04  |
| koa-node     | 55,301.7   | 52,432.67              | 28,788.16  |
| nbit         | 54,538.64  | 53,354.18              | 28,518.2   |
| nest-node    | 56,491.68  | 51,938.78              | 29,225.19  |
| zarf         | 54,298.25  | 53,421.6               | 29,372.14  |

## Notice

I highly recommended testing this benchmark on your machine yourself.
