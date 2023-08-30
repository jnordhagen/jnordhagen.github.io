import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ projectTitle, projectDesc, projectUrl }) => {
  return (
    <Card
      sx={{
        height: "80vh",
        width: "50vw",
        borderRadius: 10
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Typography component="div" variant="h5">
            {projectTitle}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          fontSize={20}
        >
          {projectDesc}
        </Typography>
        <Link href={projectUrl}>see project here</Link>
      </Box>
    </Card>
  );
};

export default ProjectCard;