import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import imageUrl from "../../assets/profilepic.jpg"
// import Resume from "../../assets/jakobnordhagen-resume-1.pdf"

const ProfileCard = () => {
  return (
    <Stack sx={{ alignItems: "center", padding: 10 }}>
      <Typography component="div" variant="h1" sx={{ fontWeight: 600 }}>
        Jakob Nordhagen
      </Typography>
      <Typography variant="h3" color="text.secondary" paddingBottom={5}>
        aspiring software engineer
      </Typography>
    </Stack>
  );
};

export default ProfileCard;
