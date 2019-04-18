module.exports = {
    testMatch: ["**/test/**/*Test.ts"],
    moduleNameMapper: {
        "\\.(css|less|scss|png)$": "identity-obj-proxy"
    },
    reporters: ["default", "jest-junit"],
    preset:"ts-jest"
    // transform: {
    //     '^.+\\.tsx?$': 'ts-jest',
    // },
    // globals: {
    //     'ts-jest': {
    //         tsConfigFile: 'tsconfig.jest.json',
    //     },
    // },
};
