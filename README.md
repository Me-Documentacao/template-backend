# Backend Template

Project structure and standards based on `PROJECT_STANDARDS.md`.

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm test`: Run tests
- `npm run prepare`: Install Husky hooks

## Architecture

Follows Clean Architecture:
- `src/controllers`: Entry points
- `src/services`: Business logic
- `src/repositories`: Data access
- `src/domain`: Entities and types
