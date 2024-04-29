import { Metadata } from "next";
import qs from "qs";
import { CONFIG } from "@/config/env";
import { renderComponent } from "@/utils/renderComponent";

export default async function Page({ params }: { params: { slug: string } }) {
  const page_content = await getPageContent(params.slug);

  return (
    <main className="">
      {page_content.map((component: any) => renderComponent(component))}
    </main>
  );
}

async function getPageContent(slug: string) {
  try {
    const query = {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        page_content: {
          populate: "*",
        },
      },
    };

    const res = await fetch(
      `${CONFIG.BACKEND_URL}/pages?${qs.stringify(query)}`,
      { cache: "no-cache" },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return (await res.json()).data[0].attributes.page_content;
  } catch (err) {
    console.log(err);
  }
}

export async function generateMetadata(slug: string): Promise<Metadata> {
  const query = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: "meta_information",
  };

  // fetch data
  const data = await fetch(
    `${CONFIG.BACKEND_URL}/pages?${qs.stringify(query)}`,
  ).then((res) => res.json());

  const { title, description } = data.data[0].attributes.meta_information;

  return {
    title: title,
    description: description,
  };
}
