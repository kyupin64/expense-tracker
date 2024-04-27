export default function Menu({ setShowMenu }) {
    const listPlaceholder = [
        {id: "item1", value: "item1"},
        {id: "item2", value: "item2"},
        {id: "item3", value: "item3"},
    ];

    return (
        <div className="px-6 pb-6 h-full w-full flex justify-center items-center">
            <div className="p-10 h-full w-full flex flex-col border-4 border-red-500 rounded-lg">
                <label htmlFor="menu-list">Have a list</label>
                <select id="menu-list" name="menu-list">
                    {listPlaceholder.map((item) => <option key={item.id} value={item} onClick={() => setShowMenu(false)}>{item.value}</option>)}
                </select>
            </div>
        </div>
    );
};