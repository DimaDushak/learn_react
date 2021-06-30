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
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css)': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    verbose: true,
};
