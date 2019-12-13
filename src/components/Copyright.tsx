import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import React from "react";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://github.com/vitaly-d-osinit">
        vitaly-d-osinit
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
