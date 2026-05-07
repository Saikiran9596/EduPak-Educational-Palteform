import { readFile } from "node:fs/promises";
import path from "node:path";

const DESIGN_ROOT = path.join(
  process.cwd(),
  "..",
  "stitch_edupak_tutoring_platform_ui_ux",
);

function stripTagBlock(input: string, tagName: string) {
  const expression = new RegExp(`<${tagName}[\\s\\S]*?<\\/${tagName}>`, "gi");
  return input.replace(expression, "");
}

function extractBody(input: string) {
  const bodyMatch = input.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : input;
}

function extractMain(input: string) {
  const mainMatch = input.match(/<main[^>]*>[\s\S]*<\/main>/i);
  return mainMatch ? mainMatch[0] : input;
}

export async function getPageHtml(sourceFolder: string) {
  const filePath = path.join(DESIGN_ROOT, sourceFolder, "code.html");
  const rawHtml = await readFile(filePath, "utf8");
  const bodyHtml = extractBody(rawHtml);
  const cleaned = stripTagBlock(stripTagBlock(bodyHtml, "nav"), "footer");
  const mainHtml = extractMain(cleaned);

  return mainHtml
    .replaceAll('href="#"', 'href="/"')
    .replaceAll("font-manrope", "font-sans")
    .trim();
}
