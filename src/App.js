import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routers from "@/router";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routers)}
        <AppFooter />
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
