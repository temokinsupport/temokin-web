import React from "react";
import { Redirect } from "react-router-dom";

export const redirectRoutes = [
  {
    path: "/",
    exact: true,
    // handle redirect case: / -> /myurl/
    render: () => <Redirect to={`/about-temokin`} />
  }
]