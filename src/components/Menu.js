export default function Menu({ setShowMenu }) {
    const listPlaceholder = ["item1", "item2", "item3"];

    return (
        <div className="px-6 pb-6 h-full w-full flex justify-center items-center">
            <div className="p-10 h-full w-full flex flex-col border-4 border-red-500 rounded-lg">
                <label for="menu-list">Have a list</label>
                <select id="menu-list" name="menu-list">
                    {listPlaceholder.map((item) => <option value={item} onClick={() => setShowMenu(false)}>{item}</option>)}
                </select>
            </div>
        </div>
    );
};