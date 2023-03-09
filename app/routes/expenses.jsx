import { Outlet } from "@remix-run/react";

import expensesStyles from "~/styles/expenses.css";

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

export default function ExpensesPage() {
  return (
    <main>
      <p>Expenses Layout</p>
      <Outlet />
    </main>
  );
}
