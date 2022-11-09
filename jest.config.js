
const setup = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    
    // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy"
    }
}

export default setup;