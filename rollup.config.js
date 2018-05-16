export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ngc-float-button.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.floatbutton',
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/index' : 'Rx'
    }
  }
