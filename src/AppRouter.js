import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Menu
    from "./routes/Menu";
const AppRouter = () => {
    const [isHome, setIsHome] = useState(false);
    return (
        <Router>
            <Switch>
                {isHome ? (
                    <Route exact path="/">
                        <Home />
                    </Route>
                ) : (
                        <Route exact path="/">
                            <Auth />
                        </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;