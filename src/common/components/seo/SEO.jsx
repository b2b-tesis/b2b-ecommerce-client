import React from "react";
import Head from "next/head";

const SEO = ({ title, description, sitename = "Bazaar B2B" }) => {
  return (
    <Head>
      <title>
        {title} | {sitename}
      </title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
