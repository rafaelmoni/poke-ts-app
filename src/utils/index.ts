export const getNumber = (url: string) =>
  url.replace(/https:\/\/pokeapi.co\/api\/v2\/pokemon|\//gim, "");
