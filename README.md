# SportSee

This repo contains all the source code to run the frontend for the sports analytics dashboard SportSee React App.

## 1. Project Status

This project is currently in development.
The "Profil" page has been implemented.
A temporary logging form on Home page allows to log two users.

## 2. Project Overview

### 2.1 Usage

SportSee is a sports analytics dashboard application developed with React.
It allows users to monitor their sports activities, through 4 charts developed with Recharts :

- A BarChart displaying daily kilograms and calories data,
- A LineChart displaying average sessions length,
- A RadarChart diplaying user performance,
- A RadialBarChart displaying their daily score

### 2.2 Design

The interface is currently optimized for desktop screens (1024x780 pixels or larger).
The project uss Sass.

## 3. Installation and Setup instructions

### 3.1 Prerequisites

- [NodeJS](https://nodejs.org/en/) or higher (developed with version 20.18.0)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 3.2 Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to launch the project.

### 3.3 Launching the micro API in a local environment

Go to https://github.com/OpenClassrooms-Student-Center/SportSee and follow the README.md instructions.

## 4. Files structure

- **src/assets/**: theme colors, data (mock), images, style
- **src/components/**: Reusable React components
- **src/context/**: React contexts
- **src/hooks/**: React hooks
- **src/layout/**: Layout React components
- **src/models/**: Constructor Patterns
- **src/pages/**: Main application pages
- **src/router/**: React Dom BrowserRouter
- **src/services/**: API calls and Mock management

## 5. Data Management

### 5.1 Data Source

The data source can be set on temporary homepage through the form.
The chosen source is set in a React Context and provided to componenets through a Context Provider.

### 5.2 Mock

The mock file is in src/assets/data/data.js

### 5.3 API

The base URL for API can be set in src/services/fetchUserData.js
The API calls are sent with Axios.

## 6. Contributors

- Anne Fleutot - Open ClassRoom student (JavaScript React)
