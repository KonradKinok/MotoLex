type PageMetadataProps = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

const SITE_URL = "https://pojazdlex.pl/";

export function PageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataProps) {
  const canonicalUrl = new URL(path, SITE_URL).toString();

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      {!noIndex && <link rel="canonical" href={canonicalUrl} />}

      {noIndex && <meta name="robots" content="noindex" />}
    </>
  );
}
