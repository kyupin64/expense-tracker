# Expense Tracker

Git Log: [log.txt](log.txt)

On the home page, type in a name for your new expense tracker and click "Submit" to create it. You can access 
all of the expense tracker lists you've created by clicking the button in the top right, "Open Menu." There 
will be a dropdown containing the names of each list, click on one to navigate to it. Inside the expense tracker, 
add a name/description for a transaction and an amount (negative numbers are calculated as expenses while positive 
numbers are income), then press "Submit" to add your new transaction. You can edit or delete a transaction by 
hovering over it in the list of transactions and pressing either the "X" button to delete or the "Edit" button 
to edit. Once you've added at least one transaction, the Balance, Income, and Expense fields right under the title 
will update accordingly.

This site was made using <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>, 
a React framework. I used the built-in Next router function to create separate dynamic pages and a navigation 
system. Both the Link element and the useRouter hook included in Next were needed to create the navigation system.
There are different components for different things, such as the list of transactions and edit and delete buttons. 
I used context and reducers for complex state data, particularly in ListsContext, and used simple state in some 
of the components to handle changes and other state data. I also used effects for things like saving localStorage 
and handling potential errors. I used custom hooks in the context files to export the useContext methods and a 
useRef in ListsContext to make sure it didn't save things to localStorage before it could retrieve the previously 
saved lists object.

One major flaw in my design is that you have to be currently hovering over a transaction in order to edit or delete 
it and the field disappears when you stop hovering over it, but this was the best way I could find to implement the 
buttons and fields. I might try to fix it in the future.