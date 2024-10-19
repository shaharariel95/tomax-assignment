# ToDo List Web Application

This project is a home assignment for Tomax. It's a ToDo list website built using Vue.js and tailwind for the frontend and Fastify on Node.js for the backend. The application is responsive and works on both desktop and mobile devices.

## Project Structure

The project is organized into two main folders:

- `backend`: Contains the server-side code
- `tomax-front`: Contains the client-side code

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Git

## Installation

1. Clone the repository:

   ```
   git clone [YOUR_REPOSITORY_LINK_HERE]
   ```

2. Set up the backend:

   - Navigate to the backend folder:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file in the backend folder and add your S3 credentials:
     ```
     ACCESS_KEY_ID=your_access_key_id
     SECRET_ACCESS_KEY=your_secret_access_key
     BUCKET_NAME=your_bucket_name
     ITEM_KEY=your_item_key
     PORT=5001
     ```

3. Set up the frontend:
   - Navigate to the frontend folder:
     ```
     cd ../tomax-front
     ```
   - Install dependencies:
     ```
     npm install
     ```

## Running the Application

### With S3 Integration

1. Start the backend server:

   ```
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend development server:

   ```
   cd tomax-front
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

### Local Version (without S3)

1. In the file `backend/routes/todoRoutes.js`:

   - Uncomment the local imports
   - Comment out the S3 imports

2. Follow the same steps as above to start the backend and frontend servers.

## Enjoy Your ToDo List!

You can now use your ToDo list application to manage your tasks efficiently.

## Note

This project is a home assignment and is not intended for production use without further development and security considerations.
