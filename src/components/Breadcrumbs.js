import React from 'react';
import { Route, Link } from 'react-router-dom';

const routes = {
  '': '404',
  '/': 'Home',
  '/settings': 'Settings',
  '/settings/a': 'A',
  '/settings/a/b': 'B'
};

const findRouteName = url => routes[url];

const getPaths = pathname => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });

  return paths;
};

const BreadcrumbsItem = ({ match, ...rest }) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return match.isExact ? (
      <li class="breadcrumb-item active" aria-current="page">
        {routeName}
      </li>
    ) : (
      <li class="breadcrumb-item">
        <Link to={match.url || ''}>{routeName}</Link>
      </li>
    );
  }
  return null;
};

const Breadcrumbs = ({ location: { pathname }, match, ...rest }) => {
  const paths = getPaths(pathname);
  return <li className="breadcrumb-item" />;
};

export default props => (
  <div>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </div>
);
