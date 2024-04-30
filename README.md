ThemesContext:
    use context to pass reducer info to button in header to switch between themes and to change each component's appearance
    use reducer to determine which theme to use and update the state

ExpenseListsContext:
    use context to display list and pass reducer down
    use reducer to handle adding, changing, and removing income and expenses
    object which stores each list object containing incomes and expenses
    use state to switch between which list is active
        when menu option is selected to traverse to a different list, set that list as the new active list in state

use effect to add and remove event listeners for dynamic buttons?
