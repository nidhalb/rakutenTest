export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"], // Add custom matchers
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1", // Map aliases (if you use them in Vite)
    },
    transform: {
      "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files
    },
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Match test files
  };