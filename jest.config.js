module.exports = {
    testMatch: ["**/test/**/*Test.ts", "**/test/**/*Test.tsx"],
    moduleNameMapper: {
        '\\.(scss|css|less)$': 'identity-obj-proxy'
    },
    reporters: ["default", "jest-junit"],
    preset:"ts-jest"
};
