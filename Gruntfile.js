module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    compress: {
      js_gz: {
        options: {
          mode: "gzip",
          level: 9,
        },
        expand: true,
        cwd: "out/",
        dest: "out/",
        extDot: "last",
        src: ["**/*.js"],
        ext: ".js.gz",
      },
      css_gz: {
        options: {
          mode: "gzip",
          level: 9,
        },
        expand: true,
        cwd: "out/",
        dest: "out/",
        extDot: "last",
        src: ["**/*.css"],
        ext: ".css.gz",
      },
      html_gz: {
        options: {
          mode: "gzip",
          level: 9,
        },
        expand: true,
        cwd: "out/",
        dest: "out/",
        extDot: "last",
        src: ["**/*.html"],
        ext: ".html.gz",
      },
      ico_gz: {
        options: {
          mode: "gzip",
          level: 9,
        },
        expand: true,
        cwd: "out/",
        dest: "out/",
        extDot: "last",
        src: ["**/*.ico"],
        ext: ".ico.gz",
      },
      js_br: {
        options: {
          mode: "brotli",
          brotli: {
            quality: 11,
          },
        },
        expand: true,
        cwd: "out/",
        dest: "out/",
        extDot: "last",
        src: ["**/*.js"],
        ext: ".js.br",
      },
      css_br: {
        options: {
          mode: "brotli",
          brotli: {
            quality: 11,
          },
        },
        expand: true,
        cwd: "out/",
        dest: "out/",
        extDot: "last",
        src: ["**/*.css"],
        ext: ".css.br",
      },
      html_br: {
        options: {
          mode: "brotli",
          brotli: {
            quality: 11,
          },
        },
        expand: true,
        cwd: "out/",
        dest: "out/",
        extDot: "last",
        src: ["**/*.html"],
        ext: ".html.br",
      },
      ico_br: {
        options: {
          mode: "brotli",
          brotli: {
            quality: 11,
          },
        },
        expand: true,
        cwd: "out/",
        dest: "out/",
        extDot: "last",
        src: ["**/*.ico"],
        ext: ".ico.br",
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.registerTask("default", [
    "compress:js_gz",
    "compress:css_gz",
    "compress:html_gz",
    "compress:ico_gz",
    "compress:js_br",
    "compress:css_br",
    "compress:html_br",
    "compress:ico_br",
  ]);
};
