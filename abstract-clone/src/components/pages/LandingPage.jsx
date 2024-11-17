import React from "react";
import theme from "../../utils/theme";
import Hero from "../common/Hero";
import Layout from "../layout/Layout";

function LandingPage() {
  return (
    <Layout
      heroContent={
        <div>
          <h1>How can we help</h1>
          <p>Search</p>
        </div>
      }
      pageContent={<p>Coming Soon</p>}
    />
  );
}

export default LandingPage;
