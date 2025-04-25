# DashboardTask

## Setup Instructions

This project implements a simple dashboard UI based on the [Figma design](https://www.figma.com/design/o7dITCwAUha7QA977u1GYY/Simple-Dashboard-Ui--Community-?node-id=1-2&p=f&t=MBx21Lrfb2289iow-0). It uses `json-server` to simulate a backend and Angular for the frontend. Follow the steps below to set up and run the project.

### Steps to Run the Server
1. Install `json-server` if not already installed:
  ```bash
  npm install -g json-server
  ```
2. Start the server on port 3100:
  ```bash
  json-server --watch db.json --port 3100
  ```

### Steps to Run the Angular Project
1. Ensure you have Angular CLI installed globally:
  ```bash
  npm install -g @angular/cli
  ```
2. Navigate to the Angular project directory:
  ```bash
  cd path-to-angular-project
  ```
3. Install the project dependencies:
  ```bash
  npm install
  ```
4. Start the Angular development server:
  ```bash
  ng serve
  ```
5. Open your browser and navigate to `http://localhost:4200`.

### Notes
- Ensure that `db.json` exists in the root directory of the project for the `json-server` to work.
- The `json-server` will be accessible at `http://localhost:3100`.
- The Angular application will be accessible at `http://localhost:4200`.
- Make sure both the backend and frontend servers are running simultaneously for the project to function correctly.
- The UI design is inspired by the [Simple Dashboard UI](https://www.figma.com/design/o7dITCwAUha7QA977u1GYY/Simple-Dashboard-Ui--Community-?node-id=1-2&p=f&t=MBx21Lrfb2289iow-0) from Figma.
