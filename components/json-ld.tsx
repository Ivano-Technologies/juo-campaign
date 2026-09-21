type JsonLdPrimitive = string | number | boolean | null;

type JsonLdData = {
  readonly [key: string]:
    | JsonLdPrimitive
    | readonly JsonLdPrimitive[]
    | readonly JsonLdData[]
    | JsonLdData;
};

type JsonLdProps = {
  data: JsonLdData;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
