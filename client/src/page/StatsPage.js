import React from "react";
import PropTypes from "prop-types";

import HeaderOtherPage from "../components/HeaderSection/HeaderOtherPage";
import SectionStats from "../components/Main/SectionStats/SectionStats";
import FooterOtherPage from "../components/FooterSection/FooterOtherPage";

const StatsPage = history => {
  return (
    <>
      <HeaderOtherPage />
      <SectionStats route={history} />
      <FooterOtherPage />
    </>
  );
};
StatsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
export default StatsPage;
