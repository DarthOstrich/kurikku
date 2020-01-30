import React from 'react';
import '../styles/styles.sass';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const { pathname, query } = useRouter();
  const isLoading = true;
  const isAuthenticated = false;

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
          <div className="navbar-menu navbar-end is-active">
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
            <div className="navbar-item">
              <Link href="/account">
                <a>Account</a>
              </Link>
            </div>
            <div className="navbar-item">
              {!isLoading &&
                (isAuthenticated ? (
                  <button
                    className="button"
                    onClick={() =>
                      logout({ returnTo: 'http://localhost:3000' })
                    }>
                    Log out
                  </button>
                ) : (
                  <button className="button" onClick={() => {}}>
                    Log in
                  </button>
                ))}
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
