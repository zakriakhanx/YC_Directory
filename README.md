# YC Directory - Startup Pitching Platform

YC Directory is a full-stack web application that allows users to pitch their startups, browse other innovative ideas, and connect with fellow entrepreneurs. It's built with Next.js, Sanity, and NextAuth, providing a seamless and interactive experience for showcasing and discovering new ventures.

## Features

-   **User Authentication:** Secure sign-up and login functionality using NextAuth.js.
-   **Create & Share Pitches:** Authenticated users can create detailed startup pitches using a Markdown editor.
-   **Browse & Discover:** View a directory of all submitted startups.
-   **Search Functionality:** Easily search for specific startups or categories.
-   **Headless CMS:** Content is managed through Sanity.io, with a built-in studio at `/studio`.
-   **Error Monitoring:** Integrated with Sentry for real-time error tracking.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (v15)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **CMS:** [Sanity.io](https://www.sanity.io/)
-   **Authentication:** [NextAuth.js](https://next-auth.js.org/) (v5)
-   **Error Monitoring:** [Sentry](https://sentry.io/)

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v20 or later)
-   A package manager like `npm` or `yarn`

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/yc_directory.git
    cd yc_directory
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the following environment variables. You can get these values from your Sanity project dashboard and your chosen OAuth provider (e.g., GitHub, Google).

    ```env
    # Sanity
    NEXT_PUBLIC_SANITY_PROJECT_ID=""
    NEXT_PUBLIC_SANITY_DATASET=""
    NEXT_PUBLIC_SANITY_API_VERSION=""
    SANITY_API_READ_TOKEN=""
    SANITY_API_WRITE_TOKEN=""

    # NextAuth
    AUTH_SECRET=""
    AUTH_GITHUB_ID=""
    AUTH_GITHUB_SECRET=""
    ```

4.  **Generate Sanity types:**

    Before running the development server, you need to generate TypeScript types from your Sanity schema.

    ```bash
    npm run typegen
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sanity Studio

This project includes a built-in Sanity Studio for content management. To access the studio:

1.  Make sure your development server is running.
2.  Navigate to [http://localhost:3000/studio](http://localhost:3000/studio).

From the studio, you can manage users, startups, and other content types defined in the schema.

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new).

-   Push your code to a Git repository (GitHub, GitLab, Bitbucket).
-   Import the project into Vercel.
-   Vercel will automatically detect that you are using Next.js and will handle the build process.
-   **Important:** Remember to add your environment variables to the Vercel project settings.
