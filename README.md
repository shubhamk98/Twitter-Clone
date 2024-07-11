# Twitter Clone

A Twitter Clone that allows users to create and post tweets, follow other users, and view their own profiles and the profiles of other users.

## Tech Stack

- **Node.js**: Backend environment running the GraphQL server.
- **GraphQL**: API for flexible and efficient data queries and mutations.
- **Prisma ORM**: Type-safe and easy-to-use interface for interacting with the PostgreSQL database.
- **PostgreSQL**: Powerful and reliable relational database system.
- **Supabase**: Hosting and managing cloud PostgreSQL database.
- **Redis**: Query caching on the server side to increase query speeds.
- **Google OAuth**: Sign in with Google for authentication.
- **JSON Web Tokens (JWT)**: Authentication.
- **Next.js**: Frontend framework for building React applications with server-side rendering and optimized performance.
- **TailwindCSS**: Styling and reusable components.
- **Codegen**: Typesafe GraphQL queries and mutations.
- **GraphQL-Request**: API client for client-server communication.
- **React-Query**: Client-side data caching and query caching.
- **TypeScript**: Maintain code quality and write type-safe code.
- **Amazon Web Services (AWS)**: Storage and deployments.

## Setup Locally

### Frontend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shubhamk98/Twitter-Clone
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Twitter-Clone
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a `.env.local` file** and add the following environment variables:
   ```plaintext
   NEXT_PUBLIC_GOOGLE_LOGIN_CLIENT_ID=""
   NEXT_PUBLIC_GoogleAILink=""
   NEXT_PUBLIC_BACKEND_URL=""
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

### Backend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shubhamk98/Twitter-backend
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Twitter-backend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a `.env` file** and add the following environment variables:
   ```plaintext
   DATABASE_URL=""
   S3_Access_Key=""
   AWS_Secret_access_key=""
   REDIS_STRING=""
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

## Demo Video

[Watch the demo video of the app](#) (Add link to demo video here)
