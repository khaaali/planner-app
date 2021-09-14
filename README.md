# Getting Started with Create React Planner App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

## Step 1

### `json-server --watch db.json`

This will create JSON server instance for the application
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `API Endpoint for the resources`

[http://localhost:3000/trips](http://localhost:3000/trips)

[http://localhost:3000/items](http://localhost:3000/items)

**Note: db.json is the schema, used to persist the data for the application!**

## Step 2

### `yarn start`

This will start react app in the development mode.\
Open [http://localhost:8001](http://localhost:8001) to view it in the browser.

### `Dependencies`

- Bootstrap
- Redux
- Immer
- Axios
- rsuite

### Known issues

- Datepicker tends to fail, when alert() in DOM is triggered, needs a page refersh
- Datepicker libirary CSS class conflicts with bootstrap, quick fix in /rsuite/dist/styles/resuite-default.css
  .fade.in {
  opacity: 1 !important;
  pointer-events: unset;
  }

### Project Overview

The purpose of the application is to provide a checklist of items that need to be packed for a trip.
The system maintains an inventory of the user’s possessions, as well as a list of trips that the user in planning to take. Every trip can then be associated with a subset of the items in the inventory.

### Requirements

## Items:

- [x] Each item has a name, consisting of a random string: e.g. ‘phone charger’, ‘blue shirt’, ‘passport’, etc.
- [x] Multiple items can have the same name because the user may own multiple identical items.

## Trips:

- [x] A trip has a name, a start date, and an end date. - [x] Multiple trips may have the same name. - [x] A trip’s end date must not precede its start date. - [x] The user can only be on one trip at a time, i.e. the start/end period of one trip must not overlap with another trip.

## Planning:

- [x] Every item can be associated with any number of trips. For example, the user may take his phone charger on every trip. - [x] An item can only be added to each trip once. For example, it’s not possible to take the phone charger twice on the same trip. - [x] If multiple items have the same name, each represents a separate item. For example, the user can take two phone chargers, if two items in the inventory are named ‘phone charger’.

### Features:

## Inventory Management:

- [x] List all items in the inventory, ordered alphabetically - [x] Add a new item to the inventory - [x] Remove an item from the inventory

## Trip Management

- [x] List all trips, ordered by their start date - [x] Add a new trip - [x] Remove an existing trip

## Planning

- [x] List all items that have been included in the trip - [x] Include an item from the inventory to the trip - [x] Exclude a previously included item from the trip

## Miscellaneous

There is no need to go beyond the specification. In particular, it is not necessary to

- [] allow the user to check off the items included in a trip, like in a TODO-list,
- [] support multiple users with different data, or shared access to the same data,
- [] limit the user to legal actions in the frontend, e.g. by disabling parts of the user interface – displaying a generic error message is sufficient when the user does something illegal, such as adding an item to a trip twice
- [] implement a test suite
