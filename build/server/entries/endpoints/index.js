import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "kmzqjgmb",
  dataset: "production",
  apiVersion: "2022-05-20",
  useCdn: false
});
async function get() {
  const data = await client.fetch(`*[_type == "sektionstekst"]`);
  if (data) {
    return {
      status: 200,
      body: {
        sektionstekst: data
      }
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
export { get };
