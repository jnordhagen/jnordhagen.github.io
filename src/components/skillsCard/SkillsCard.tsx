import { Card, Grid, Icon } from "@mui/material";

import ReactLogo from "../../assets/react.svg"
import MongoLogo from "../../assets/mongodb.svg"
import TypescriptLogo from "../../assets/typescript.svg"
import CppLogo from "../../assets/cpp.svg"
import JupyterLogo from "../../assets/jupyter.svg"
import PythonLogo from "../../assets/python.svg"
import PytorchLogo from "../../assets/pytorch.svg"
import SwiftLogo from "../../assets/swift.svg"
import TensorflowLogo from "../../assets/tensorflow.svg"
import './SkillsCard.css';


const SkillsCard = () => {

  const logos: string[] = [PythonLogo, CppLogo, TypescriptLogo, SwiftLogo, ReactLogo, MongoLogo, JupyterLogo, PytorchLogo, TensorflowLogo];

  return (
    <Card sx={{padding: 5, borderRadius: 10}}>
      <Grid container columnSpacing={5}>
        {logos.map((logo) => (
          <Grid item key={logo}>
            <Icon sx={{height: "inherit", width: "inherit"}} className="icon">
              <img src={logo} alt="logo"/>
            </Icon>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default SkillsCard;
