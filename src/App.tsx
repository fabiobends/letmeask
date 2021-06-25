import { Home } from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NewHome } from "./pages/NewRoom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewHome} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
