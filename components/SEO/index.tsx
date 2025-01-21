import Head from "next/head";

export interface SEOProps {
    url: string,
    title: string,
    description: string,
    image: string;
}

export function SEO({ url, title, description, image, }: SEOProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={image} />
        </Head>
    )
}