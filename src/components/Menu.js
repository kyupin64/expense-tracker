import { useSetCurrentList } from "@/contexts/CurrentListContext";
import { useLists } from "@/contexts/ListsContext";

export default function Menu({ setShowMenu, setIsHome }) {
    const setCurrentList = useSetCurrentList();
    const lists = useLists();

    const handleChange = (e) => {
        setCurrentList(e.target.childNodes[e.target.selectedIndex].id);
        setIsHome(false);
        setShowMenu(false);
    };

    const listOptions = Object.keys(lists).map((key) => {
        return <option key={lists[key].id} id={lists[key].id} value={lists[key].name}>{lists[key].name}</option>;
    });

    return (
        <div className="px-6 pb-6 h-full w-full flex justify-center items-center">
            <div className="p-10 h-full w-full flex flex-col border-4 border-red-500 rounded-lg">
                <label htmlFor="menu-list">Have a list</label>
                <select id="menu-list" name="menu-list" onChange={handleChange}>
                    <option>Select a list:</option>
                    {listOptions}
                </select>
            </div>
        </div>
    );
};