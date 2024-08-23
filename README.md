# @burmajs/frontmatter

Extract YAML data from a markdown file

## Install

`npm`

```bash
npm i @burma/frontmatter
```

`pnpm`

```bash
pnpm i @burma/frontmatter
```

`deno`

```bash
deno add @burma/frontmatter
```

## Usage

`Node.js`

example.md

```md
---
type: "post"
title: "Hello World"
---
## Hello
```

index.ts

```ts
import Frontmatter from "@burma/frontmatter";
import fs from "node:fs";
type MyType = {
  type: string;
  title: string;
};
const mdcontent = fs.readFileSync("a.md", "utf-8");
const foo = new Frontmatter<MyType>(mdcontent);

console.log(foo.json); // { data: { type: 'post', title: 'Hello World' }, content: '\n\n## Hello\n'}
console.log(foo.data); // { type: 'post', title: 'Hello World' }
console.log(foo.content); // ## Hello
``` 

`DENO`


