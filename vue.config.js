module.expotrs = {
    //settings for adding scss  files to our app
    css: {
        loaderOptions: {
            sass:{
                prependData: '@import "@/assets/scss/styles.scss"; '
            }
        }
    },
}