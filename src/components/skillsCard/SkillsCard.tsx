import { Card, Grid, Icon, Tooltip } from "@mui/material";

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
  const titles: string[] = ["Python", "C++", "TypeScript", "Swift", "React", "MongoDB", "Jupyter Notebooks", "PyTorch", "TensorFlow"];  

  return (
    <Card sx={{padding: 5, borderRadius: 5}}>
      <Grid container columnSpacing={5}>
        {logos.map((logo, i) => (
          <Grid item key={i}>
            <Tooltip title={titles[i]}>
              <Icon sx={{height: "inherit", width: "inherit"}} className="icon">
                <img src={logo} alt="logo"/>
              </Icon>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default SkillsCard;
