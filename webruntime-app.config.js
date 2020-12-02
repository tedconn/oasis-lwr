module.exports = {
    projectDir: __dirname,
    buildDir: 'dist',
    moduleDir: 'src/modules',
    watch: false,
    app: {
        defaultTemplate: 'src/index.html',
        nativeShadow: true
    },
    server: {
        port: +process.env.PORT || 3001, // this isn't even respected, sigh
        basePath: '',
        contentSecurityPolicy: {
            directives: {
                scriptSrc: ['cdn.pendo.io', 'data.pendo.io', 'app.pendo.io']
            }
        }
    },
    defaultMode: process.env.MODE || "dev"
};
