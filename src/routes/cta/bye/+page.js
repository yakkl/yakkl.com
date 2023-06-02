/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
  // let lang = url.searchParams.get('lang');
  let userName = url.searchParams.get('userName');
  return { userName };
}
