import {Route, Switch} from 'react-router-dom';
import NotFound from './pages/not-found';
import Home from './pages/home';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import PrivateRoute from './PrivateRoute';
import ProfileAddAnimalPage from './pages/profile/ProfileAddAnimalPage';

export const useRoutes = () => {
    return (
        <Switch>
            {/*<Route path="/login" render={() => <LoginPage isAuthenticated={isAuthenticated} />} />
            <Route path="/register" render={() => <RegisterPage isAuthenticated={isAuthenticated} />} />*/}
            {/*<PrivateRoute isAuthenticated={isAuthenticated} path="/admin" redirectPath="/login" component={AdminPage} />*/}
            <Route path="/login" component={LoginPage} />} />
            <Route path="/register" component={RegisterPage} />} />
            <PrivateRoute path="/profile" component={ProfilePage} redirectPath={'/'} exact />
            <PrivateRoute path="/profile/animals" component={ProfilePage} redirectPath={'/'} exact />
            <PrivateRoute path="/profile/add" component={ProfileAddAnimalPage} redirectPath={'/'} exact />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}