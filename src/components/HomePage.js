export default function HomePage({ showMenu, setIsHome }) {
    const showOrHide = showMenu ? "hidden" : "flex";

    return (
        <>
            <form id="new-expense-tracker-form" className={`${showOrHide} flex-col gap-5 pt-10`}>
                <h1>Create a new budget</h1>
                <label htmlFor="name">Name your expense tracker:</label>
                <input id="name"></input>
                <button className="px-2 py-1" onClick={() => setIsHome(false)}>Submit</button>
            </form>
        </>
    );
};