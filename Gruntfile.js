module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            app: {
                options: {
                    compress: true,
                    relativeUrls: true
                },
                files: [
                    {
                        expand: true,
                        src: 'client/assets/css/*.less',
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            client: {
                files: ['client/assets/css/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server/server.js',
                    node_env: 'development',
                    background: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('default', ['less']);
    grunt.registerTask('serve', ['express:dev']);
};