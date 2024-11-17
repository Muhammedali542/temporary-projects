import React from "react";
import Hero from "../common/Hero";

function Layout(props) {
  const { heroContent, pageContent } = props;

  return (
    <div>
      <Hero childern={heroContent} />
      {pageContent}
    </div>
  );
}

export default Layout;
