import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routers from "@/router";
import ErrorBoundary from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import store from "store";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <HashRouter>
          <AppHeader />
          {renderRoutes(routers)}
          <AppFooter />
        </HashRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
