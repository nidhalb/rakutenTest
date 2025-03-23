export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"], 
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1", 
    },
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
    },
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  };