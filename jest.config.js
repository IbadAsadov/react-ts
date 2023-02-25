module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["./jest.setup.ts"],
};
