# walletApp
A sample Central Wallet System (CWS)

Frontend - React Typescript, build using Vite, TailwindCSS
Backend - Go language, GORM, GIN-GONIC
Additional tools needed - Docker, Any database tool (workbench, dbeaver etc.), Git


Frontend detailed guide: -------------------------------------------------------

All of the reusable components e.g. button, text-input, modal, toaster etc. are located on the "components" folder.

"Layout" folder is where our main structure is stored such as sidebar, topbar and footer. It is also depends on how the website is created.

The pages that the system contain would be located in the "contents" folder. It is structured per route so it can be maintain, modify and locate easier. 

Our "services" folder is where the API endpoints are stored (per module).

All of the API related part of this system is in the "redux" folder. 

While the "page-redux" is for global state in each pages / route so it's way easier to manipulate 

The "hooks" on the root folder of the "frontend" is where you get a state from our state management which in our case is the "Redux Store"

Our hooks cannot be retrieve without the existent of our "store.ts" or the Redux store where the reducers are combined and viewable in "Redux devtools" in any browser extension. Additionally, the "sagas.ts" is where the "redux saga's api response redirect it from.

Whereas our "interfaces" folder is where we contain our payload interfaces and API response interfaces so it can be reusable at any part and any point of the project.

The "utils" folder is for utilities or any repeatedly used function so it can prevent redundancy of the code structure.

Additionally, since we are using tailwindcss, the "tailwind.config.js" is where you can enable tailwind utilities, define any customization or override a styling.

Lastly for the frontend, the ".eslintrc.cjs" file is where we set our eslint rules to implement rules and set coding standards.

End of Frontend detailed guide: -------------------------------------------------


Backend detailed guide: -------------------------------------------------------

On our "main.go" on the root folder of the "backend" folder, the routes (or group of API endpoints) are organized there per module. Though it can be place on a different folder but the goal in this backend structure is to make it simpler because the backend code itself, the structure, database schema, table connections are the complex stuff that we should need to be focus on.

The "models" folder is where the "structs" are placed. And in our case, we're also placing our "func" for querying and retrieving records from our database.

The "handlers" folder or it can be also name "controllers" are func that are responsible for the APIs, how the endpoint should accept a query params, request body etc. and also how the endpoint would return a response and in our case we always have a return of "JSON" so it can be easier to manipulate and handle on the frontend.

In  our case, the "handlers/controllers" and "models" are the folders needed mostly on backend development.

You can build an image using Docker Desktop and the details can be check out in our "docker-compose.yaml". With the "init_wallet.sql" that can be utilized for local database set up for development purposes.

End of Backend detailed guide: -------------------------------------------------