<div style="text-align: center;">
    <img width="300" height="200" src="https://imagedelivery.net/6bSk6wUa9UOwEesJAZQuoA/fd130e46-3c41-4624-6d08-47d7dfb98900/public">
</div>

# Extract YAML data from a markdown file

**API Docs : [![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/@burmajs/frontmatter)**

## Install

`npm`

```bash
npm i @burmajs/frontmatter
```

`pnpm`

```bash
pnpm i @burmajs/frontmatter
```

`deno`

```bash
deno add @burmajs/frontmatter
```

## Usage

example.md

```md
---
type: "post"
title: "Hello World"
---

## Hello
```

`NODE-JS`

index.ts

```ts
import Frontmatter from "@burmajs/frontmatter";
import fs from "node:fs";
type MyType = {
  type: string;
  title: string;
};
const mdcontent = fs.readFileSync("example.md", "utf-8");
const foo = new Frontmatter<MyType>(mdcontent);

console.log(foo.json); // { data: { type: 'post', title: 'Hello World' }, content: '\n\n## Hello\n'}
console.log(foo.data); // { type: 'post', title: 'Hello World' }
console.log(foo.content); // ## Hello
```

`DENO`

mod.ts

```ts
import { FrontMatter } from "@burmajs/frontmatter";

type MyType = {
  type: string;
  title: string;
};

const mdcontent = Deno.readTextFileSync("example.md");
const foo = new Frontmatter<MyType>(mdcontent);

console.log(foo.json); // { data: { type: 'post', title: 'Hello World' }, content: '\n\n## Hello\n'}
console.log(foo.data); // { type: 'post', title: 'Hello World' }
console.log(foo.content); // ## Hello
```
