import { useState } from "react";

const useFirebase = () => {
  const [theme, setTheme] = useState(true);
  // home page states begin
  const [bannerInfo, setBannerInfo] = useState({});
  const [aboutInfo, setAboutInfo] = useState({});
  const [skillInfo, setSkillInfo] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  // home page states end

  // about page states begin
  const [aboutPageAboutInfo, setAboutPageAboutInfo] = useState({});
  const [aboutPageUpcommingInfo, setAboutPageUpcommingInfo] = useState({});
  // about page states end
  return {
    bannerInfo,
    setBannerInfo,
    aboutInfo,
    setAboutInfo,
    skillInfo,
    setSkillInfo,
    theme,
    setTheme,
    contactInfo,
    setContactInfo,
    aboutPageAboutInfo,
    setAboutPageAboutInfo,
    aboutPageUpcommingInfo, setAboutPageUpcommingInfo
  };
};

export default useFirebase;
