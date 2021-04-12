import slugify from "slugify";

export function slugger(url: string): string {
  return slugify(url, "-");
}

export function sluggerWithUnderscores(url: string): string {
  return slugify(url, "_");
}
