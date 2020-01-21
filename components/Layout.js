import React from 'react';
import '../styles/styles.sass';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from 'use-auth0-hooks';

const Layout = ({ children }) => {
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  return (
    <div>
      <header>
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
          </div>
          <div className="navbar-menu is-active">
            <div className="navbar-item">
              {!isLoading &&
                (isAuthenticated ? (
                  <button
                    onClick={() =>
                      logout({ returnTo: 'http://localhost:3000' })
                    }>
                    Log out
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      login({ appState: { returnTo: { pathname, query } } })
                    }>
                    Log in
                  </button>
                ))}
            </div>
            <div className="navbar-item">
              <Link href="/campaigns">
                <a>Campaigns</a>
              </Link>
            </div>
            <div className="navbar-item">
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">{children}</main>
      <footer className="footer">
        <div className="content">
          <p>Kurikku</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
