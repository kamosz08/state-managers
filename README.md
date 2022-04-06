# State managers comparison

This repository was created for experimental and learning purposes. I wanted to compare libraries for global state management, what are the benefits of migrating from redux to zustand etc. I also used turborepo for monorepo management. I wanted to create one UI components and use them across every app that uses different state management. For now I have created example for zustand, mobx and redux (with redux toolkit).

# App description

Every small app located in `apps` diretory is the same. It has some basic state management like storing user info and displaying different navigation menu based on features enabled in settings.

# Structure

- `/apps` - contains small app that can be started with `yarn start`
- `/packages` - contains some shared configurations like eslint, tsconfig. Also `ui` package is here

## Demo

This repo is not deployed anywhere. I have focused on developer experience with these tools. This small apps has no cool logic to show.

