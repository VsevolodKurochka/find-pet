import {Route, Switch} from 'react-router-dom';
import NotFound from './pages/not-found';
import Home from './pages/home';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import PrivateRoute from './PrivateRoute';
import ProfileAddAnimalPage from './pages/profile/add';
import ProfileAnimalsPage from './pages/profile/animals';
import AboutPage from './pages/about';
import ContactsPage from './pages/contacts';
import BlogPage from './pages/blog';
import SingleAnimalPage from './pages/animals/SingleAnimalPage';

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />} />
            <Route path="/register" component={RegisterPage} />} />
            <Route path="/about" component={AboutPage} />} />
            <Route path="/contacts" component={ContactsPage} />} />
            <Route path="/blog" component={BlogPage} />} />
            <Route path="/animals/:id" component={SingleAnimalPage} exact />} />
            <PrivateRoute path="/profile" component={ProfilePage} redirectPath={'/'} exact />
            <PrivateRoute path="/profile/animals" component={ProfileAnimalsPage} redirectPath={'/'} exact />
            <PrivateRoute path="/profile/add" component={ProfileAddAnimalPage} redirectPath={'/'} exact />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}