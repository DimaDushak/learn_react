module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/**/__tests__/**'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    moduleNameMapper: {
        '\\.(css)': 'identity-obj-proxy',
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    verbose: true,
};
