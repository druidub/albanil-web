import { readdirSync, readFileSync, writeFileSync } from "fs";
import matter from "gray-matter";

const obras = readdirSync("src/data/obras").map(f => {
  const { data } = matter(readFileSync(`src/data/obras/${f}`));
  return data;                         // {title,image,tags,date}
});

writeFileSync("src/data/portfolio.json",
              JSON.stringify(obras, null, 2));
console.log("√ portfolio.json actualizado");
