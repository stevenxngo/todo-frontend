# Steven Ngo's Report

## Task 1: Fix the app routing so that users can visit available routes.

Viewing the current code, I noticed that all routes are going to the list because the only route is the wildcard route, which directs to `TodoList`. Thus, to fix this, I removed the one existing route and added the three distinct routes as specified in the instructions, importing the necessary components and setting the paths accordingly.

## Task 2: Create a Header Component for the Application

In making the header component, I decided to use a similar color scheme to the footer by using the same tailwind classes. I also decided to make it fixed to the top of the page like a navbar. As a result, I had to add a margin to the top of the body to offset it. 

For the app name and two action items, I used the `Link` component from `react-router-dom` to navigate to appropriate routes, styling the action items as buttons. 

The header is responsive and maintains a good layout on both desktop and mobile devices. Once the screen size is small enough the horizontal padding and font size decrease to fit the screen. I thought about making it transform into a hamburger menu, but I decided against it as the header is simple enough to not need it. However, had I implemented it, I would have used the `useState` hook to toggle a class that would hide the links and show a dropdown menu which is something I have experience implementing.

## Task 3: Delete functionality is broken.

The issue with the delete functionality is that the delete handler `handleDelete` is sending a `POST` request to the nonexistent POST endpoint `todos/${id}`. To fix this I changed the method to `DELETE` in the handler which now sends a correct `DELETE` request to the endpoint. This will now correctly delete the todo item from the list.

## Bonus

To implement the edit functionality, I decided to reuse the existing `ToDoForm` component, as creating another form would be redundant. 

I created a new route `/edit/:id` that would map to the `ToDoForm` component, similar to the `/add` route. With `useParams` from `react-router-dom`, I was able to retrieve an id if present in the URL, which would determine if the component was being used to add or edit an item. If no id is provided in the url as per the `/add` route, the form will be in add mode, sending a PUT request upon submission. If an id is provided, the form will be in edit mode and the todo item will be prepopulated with the todo item's data, sending a POST request. I noticed the existing edit button in the `ToDoList`, so I uncommented it.

If a ToDo item with a given id is not found, the form will be redirect to the `/` route, with the appropriate error being logged to the console. Another option would be to display an a message that the item was not found, similar to the `TodoDetails` component.

I also added a checkbox to represent completion status that would only be present in edit mode. Like the other fields, the checkbox would be prepopulated with the todo item's completion status and would be sent in the request body upon submission.

## Other changes

Upon creation or update of a ToDo item, I redirected the user back to the list page, instead of keeping them on the form page. This is to provide a better user experience and to show the user that the action was successful.

I noticed that when there were no ToDos and a user is on the `/list` route, pressing the add button would redirect them to `/list/add` instead of `/add`. This is because the button was navigating to `add` instead of `/add`, which I fixed, resolving the issue.

## Technical Difficulties

I added prettier and prettier-plugin-tailwind to format the code, but was running into issues starting the development server.

```bash
% yarn start
yarn run v1.22.19
$ parcel src/index.html --port 5001
libc++abi: terminating due to uncaught exception of type std::__1::system_error: mutex lock failed: Invalid argument
error Command failed with signal "SIGABRT".
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

I attemped to delete `node_modules` and reinstall dependencies, as well as clearing the parcel cache and reloading the window, but the issue persisted. As a result, I uninstalled prettier and prettier-plugin-tailwind prior to submission, making sure that the server was running correctly.

I also realized after the fact that using prettier and prettier-plugin-tailwind would cause issues in the git history, as the formatting would be different from the original code, especially the ordering of tailwind classes. As a result, I attempted only to format the code that I had written. Apolologies for the oversight.

Occasionally, issues would occur where CORS would block the frontend from accessing the backend. However, by restarting the backend server, the issue was resolved. Alternatively, I tested the application by using incognito mode to bypass the issue.
