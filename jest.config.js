const
    merge = require('merge'),
    path = require('path'),
    angularPreset = require('jest-preset-angular/jest-preset');

/**
 * @see https://jestjs.io/docs/en/configuration.html
 */
const config = merge.recursive(angularPreset, {
    // preset: 'jest-preset-angular',

    globals: {
        'ts-jest': {
            tsConfigFile: './tsconfig.spec.json',
        },
        '__TRANSFORM_HTML__': true
    },

    verbose: true,

    setupTestFrameworkScriptFile: path.join(__dirname, 'config/test/setupJest.ts'),

    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/attractor/ui/app/**/*.ts',
        '!<rootDir>/attractor/ui/app/**/*module.ts',
        '<rootDir>/attractor/rest-api/**/*.ts',
        '<rootDir>/attractor/core/**/*.ts',
        '!**/vendor/**'
    ]
});

module.exports = config;
