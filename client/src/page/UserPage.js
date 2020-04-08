import React from "react";
import PropTypes from "prop-types";
import HeaderOtherPage from "../components/HeaderSection/HeaderOtherPage";
import SectionUserStats from "../components/Main/SectionUserStats/SectionUserStats";
import FooterOtherPage from "../components/FooterSection/FooterOtherPage";

const UserStatsPage = (history) => {
  return (
    <>
      <HeaderOtherPage />
      <SectionUserStats route={history} />
      <FooterOtherPage />
    </>
  );
};

UserStatsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default UserStatsPage;
