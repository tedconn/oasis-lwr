module.exports = {
    projectDir: __dirname,
    buildDir: 'dist',
    moduleDir: 'src/modules',
    watch: true,
    app: {
        defaultTemplate: 'src/index.html',
    },
    server: {
        port: +process.env.PORT || 3001,
        basePath: '',
        contentSecurityPolicy: {
            directives: {
                scriptSrc: ['cdn.evgnet.com']
            },
            loose: true,
        }
    }
};
