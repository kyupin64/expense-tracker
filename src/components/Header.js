import Menu from "./Menu";

export default function Header({ showMenu, setShowMenu, setIsHome }) {
  return (
    <>
      <nav className="flex justify-between items-center w-full py-7 px-10">
        <h1><a href="#" onClick={() => {setIsHome(true); setShowMenu(false);}}>Expense Tracker</a></h1>
        <button className="px-2 py-1" onClick={() => setShowMenu(!showMenu)}>{showMenu ? "Close Menu" : "Open Menu"}</button>
      </nav>

      {showMenu ? <Menu setShowMenu={setShowMenu} setIsHome={setIsHome}/> : null}

      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
}