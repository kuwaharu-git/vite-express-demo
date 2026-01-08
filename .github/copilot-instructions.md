# AI Coding Agent Instructions for vite-express-demo

## Project Overview
This project is a full-stack application built with Vite for the client-side and Express.js for the server-side. The project structure is divided into `client` and `server` directories under the `src` folder, with the following key components:

- **Client**: A React application using TypeScript, located in `src/client/`. It includes the main entry point (`main.tsx`), the root component (`App.tsx`), and supporting assets and styles.
- **Server**: An Express.js server written in TypeScript, located in `src/server/`. The entry point is `main.ts`.

## Architecture and Data Flow
- The client communicates with the server via HTTP requests. The server handles these requests and serves data or performs actions as needed.
- Static assets are served from the `public` directory.
- The `vite.config.ts` file configures the Vite development server and build process.

## Developer Workflows
### Build and Run
- **Development**: Run `npm run dev` from the `vite-express-project` directory to start both the Vite development server and the Express server.
- **Build**: Run `npm run build` to build the client and server for production.
- **Start**: Run `npm start` to start the production server.

### Testing
- No specific testing framework is set up in the current codebase. Add your preferred testing tools as needed.

### Debugging
- Use the Vite development server for hot module replacement (HMR) during client development.
- Debug the server using Node.js debugging tools.

## Project-Specific Conventions
- **TypeScript**: Both client and server use TypeScript. Ensure type safety and avoid `any` where possible.
- **File Structure**: Keep client-side code in `src/client/` and server-side code in `src/server/`.
- **Assets**: Place static assets in `src/client/assets/`.

## Key Files and Directories
- `src/client/main.tsx`: Client entry point.
- `src/server/main.ts`: Server entry point.
- `vite.config.ts`: Vite configuration.
- `tsconfig.json`: TypeScript configuration.
- `public/`: Static assets served by the server.

## External Dependencies
- **Vite**: Development server and build tool for the client.
- **Express.js**: Web server framework for the backend.
- **React**: Frontend library for building user interfaces.

## Examples
### Adding a New API Endpoint
1. Create a new route in `src/server/main.ts`:
   ```typescript
   app.get('/api/example', (req, res) => {
       res.json({ message: 'Hello, world!' });
   });
   ```
2. Call the endpoint from the client using `fetch` or a library like Axios.

### Adding a New React Component
1. Create a new file in `src/client/` (e.g., `NewComponent.tsx`).
2. Import and use the component in `App.tsx`.

---

For further details, refer to the `README.md` file or the source code.