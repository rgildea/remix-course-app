import { Link, NavLink, useLoaderData } from "@remix-run/react";

import Logo from "../util/Logo";

function ExpensesHeader() {
  const userId = useLoaderData();
  console.log("gooey");
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expenses" end>
              Manage Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses/analysis">Analyze Expenses</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            {userId && (
              <form method="post" action="/logout" id="logout-form">
                <button className="cta-alt">GOoble Logout</button>
              </form>
            )}
            {!userId && (
              <Link to="/auth" className="cta">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ExpensesHeader;
