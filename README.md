# Troubled Life Clothing Web Application

This web application is developed using Node.js, Express, React, and Sequelize. It is a clothing brand website for Troubled Life.

## Inspiration

The inspiration for this application is to create a modern and responsive online platform for the Troubled Life clothing brand. The website aims to showcase the brand's unique and fashionable clothing and provide a seamless shopping experience for customers.

## Milestone-project-3 Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/DCaldwell13/Milestone-Projects-3.git
   ```

2. Install dependencies for both the front-end and back-end:

   ```bash
   cd troubled-life
   npm install
   cd client
   npm install
   ```

3. Set up the database:

   - Install PostgreSQL.
   - Create a new database for the application.

4. Set up environment variables:

   - create a `.env` file.
   - Update the `.env` file with your database connection details.

5. Migrate and seed the database:

   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

6. Start the development server:

   ```bash
   cd troubled-life
   npm run dev
   ```

## Open your web browser and navigate to `http://localhost:3000` to view the Troubled Life clothing web application.

## Technologies Used

- Node.js
- Express.js
- React
- Sequelize
- PostgreSQL or MySQL

## Bugs and Unfinished Functionality

At the moment, there are no known bugs or unfinished functionality in the Troubled Life clothing web application. However, as with any software development project, it is possible to encounter issues or find areas that can be improved. If you come across any bugs or have suggestions for enhancements, feel free to open an issue on the GitHub repository. We appreciate your feedback and contributions to make this application even better.