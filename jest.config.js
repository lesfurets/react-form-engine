module.exports = {
    testMatch: ["/**/*.test.ts", "/**/*.test.tsx"],
    moduleNameMapper: {
        '\\.(scss|css|less)$': 'identity-obj-proxy'
    },
    reporters: ["default", "jest-junit"],
    preset:"ts-jest"
};
