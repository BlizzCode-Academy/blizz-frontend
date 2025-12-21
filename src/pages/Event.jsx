import React from "react";
import { Navigate } from "react-router-dom";

export default function Event() {
  // Redirect event page to training programs
  return <Navigate to="/programs/training-programs" replace />;
}
