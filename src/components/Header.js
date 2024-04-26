import Menu from "./Menu";

export default function Header({ showMenu, setShowMenu }) {
  return (
    <>
      <nav className="flex justify-between items-center w-full py-7 px-10">
        <h1><a href="#">Expense Tracker</a></h1>
        <button className="px-2 py-1" onClick={() => setShowMenu(!showMenu)}>{showMenu ? "Close Menu" : "Open Menu"}</button>
      </nav>

      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}

      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
}