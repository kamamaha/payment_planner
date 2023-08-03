import React, { useState } from "react";
import LogInView from "./views/LogInView";
import TableView from "./views/TableView";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <LogInView />
  }
  
  return (
    <TableView />
  )
}

export default App;
