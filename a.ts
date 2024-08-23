import Frontmatter from "./src/index.js";
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
