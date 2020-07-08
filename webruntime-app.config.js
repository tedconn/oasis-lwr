module.exports = {
    projectDir: __dirname,
    buildDir: 'dist',
    moduleDir: 'src/modules',
    watch: true,
    app: {
        defaultTemplate: 'src/index.html',
    },
    server: {
        port: 3000,
        basePath: '',
        contentSecurityPolicy: {
            directives: {
                scriptSrc: ['cdn.evgnet.com']
            },
            loose: true,
        }
    }
};
