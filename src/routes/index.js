
  import sanityClient from "@sanity/client";

  const client = sanityClient({
	projectId: "kmzqjgmb",
	dataset: "production",
	apiVersion: "2022-05-14",
	useCdn: false
  });

  export async function get() {
	const data = await client.fetch(`*[_type == "forloeb"]`);

	if (data) {
		return {
		status: 200,
		body: {
			forloeb: data
		}
		};
	}
	return {
		status: 500,
		body: new Error("Internal Server Error")
	};
	}