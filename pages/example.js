import { Heading, Page } from "@shopify/polaris";
import Link from 'next/link';

const Example = () => (
  <Page>
    <Heading>Example</Heading>
    <Link href="/"><a>Link to index</a></Link>
  </Page>
);

export default Example;
