import React from "react";
import { Stack, Typography } from "@mui/material";

import ProfileCard from "../components/profileCard/ProfileCard";
import ProjectSlideshow from "../components/projectSlideshow/ProjectSlideshow";
import SkillsCard from "../components/skillsCard/SkillsCard";
// import TopBar from "../components/topBar/TopBar";
import theme from "../theme";

const Home = () => {

  return (
    <Stack
      sx={{
        padding: 10,
        display: "flex",
        alignItems: "center",
        gap: 4,
        backgroundColor: theme.palette.background.default
      }}
    >
      {/* <TopBar /> */}
      <ProfileCard />

      <Typography variant="h4" fontWeight={600}>
        Projects
      </Typography>
      <ProjectSlideshow />

      <Typography variant="h4" fontWeight={600}>
        Skills
      </Typography>
      <SkillsCard />

      <Typography variant="h4" fontWeight={600}>
        Contact
      </Typography>

    </Stack>
  );
};

export default Home;
