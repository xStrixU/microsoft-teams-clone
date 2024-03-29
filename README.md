# Microsoft Teams Clone

Clone of the Microsoft Teams platform.

## Live preview
You can try live preview here: https://microsoft-teams-clone.projectcode.pl <br /><br />
Credentials:
|          Email         |     Password     |
| :--------------------: | :--------------: |
| live.preview@gmail.com | CshRWR7IfyCiP71K |

## Technology stack
Technology stack used to create this application:
|   Technology    |              Usage               | 
| :-------------: | :------------------------------: |
|   TypeScript    |       Programming languge        |
|      React      |      User Interface Library      |
|     Next.js     |         Framework & SSR          |
|   TailwindCSS   |          CSS Framework           |
|    Storybook    |     UI Component Development     |
| TanStack Query  | Data Fetching & State Management |
| React Hook Form |          Forms Handling          |
|    Socket.IO    |     Real-time communication      |
|      NestJS     |        Backend framework         |
|     Prisma      |           Database ORM           |
|   PostgreSQL    |       Relational Database        |
|      Redis      |       In-memory data store       |
|     Docker      |    Containerization Platform     | 
|     Vitest      |        Testing Framework         |
|    Supertest    |     E2E API testing library      |

## Installation and usage
### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/xStrixU/microsoft-teams-clone.git
   ```
2. Navigate to the project directory:
   ```sh
   cd microsoft-teams-clone
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```
### Usage
1. Go to the `openapi-types` package:
   ```sh
   cd packages/openapi-types
   ```
2. Copy the `.env.example` file to the `.env` file:
   ```sh
   cp .env.example .env
   ```
3. Go back to the root directory:
   ```sh
   cd ../..
   ```
4. Build all packages:
   ```sh
   pnpm turbo run build --filter="./packages/*"
   ```
5. Go to the `Web` app:
   ```sh
   cd apps/web
   ```
6. Copy the `.env.local.example` file to the `.env.local` file:
   ```sh
   cp .env.local.example .env.local
   ```
7. Go to the `API` app:
   ```sh
   cd ../api
   ```
8. Copy the `.env.example` file to the `.env` file:
   ```sh
   cp .env.example .env
   ```

Usage is different depending on the selected mode: *development* or *production*.
#### Development mode:
1. Go to the root directory and run apps in development mode:
   ```sh
   pnpm dev
   ```
#### Production mode:
1. Go to the root directory and build apps:
   ```sh
   pnpm build
   ```
2. Go to the `API` app root directory and run it:
   ```sh
   pnpm start:prod
   ```
   and go to the `Web` app root directory and run it:
   ```sh
   pnpm start
   ```
   

## Preview
![image](https://github.com/xStrixU/microsoft-teams-clone/assets/41890821/9c8cf2aa-c41f-40e9-845d-35e58b7eaa71)

Join or create a team:
![image](https://github.com/xStrixU/microsoft-teams-clone/assets/41890821/839124af-f567-462a-9b12-350c445147f2)

Chat with other people:
![image](https://github.com/xStrixU/microsoft-teams-clone/assets/41890821/27c0e21c-9aa6-4050-8969-36eba1c93ca3)



## License
MIT License, see [LICENSE](LICENSE).
