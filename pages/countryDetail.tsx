import type { NextPage } from "next";
import SpecificCountryDetail from "../src/modules/countryDetail";
import { Layout } from "../src/components/layout";

const CountryDetail: NextPage = () => {
  return (
    <Layout>
      <SpecificCountryDetail />
    </Layout>
  );
};

export default CountryDetail;
