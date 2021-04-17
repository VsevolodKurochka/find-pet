import {Route, Switch} from 'react-router-dom';
import NotFound from './pages/not-found';
import Home from './pages/home';

export const useRoutes = (isAuthenticated) => {
    return (
        <Switch>
            {/*<Route path="/login" render={() => <LoginPage isAuthenticated={isAuthenticated} />} />
            <Route path="/register" render={() => <RegisterPage isAuthenticated={isAuthenticated} />} />*/}
            {/*<PrivateRoute isAuthenticated={isAuthenticated} path="/admin" redirectPath="/login" component={AdminPage} />*/}
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}