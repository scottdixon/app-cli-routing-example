import { Heading, Page } from "@shopify/polaris";
import Link from 'next/link';

const Index = () => (
  <Page>
    <Heading>Index</Heading>
    <Link href="/example"><a>Link to example</a></Link>
  </Page>
);

export default Index;
