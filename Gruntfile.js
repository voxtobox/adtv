module.exports = function(grunt){

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    'cacheLocation' : 'sass/.sass-cache'
                },
                files: {
                    'css/style.css' : 'sass/adtv-styles.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['sass/**/*.scss' ],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');


    grunt.registerTask('default',['sass']);

};