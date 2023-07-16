/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const getFiles = async () => {
  return {
    src: {
      directory: {
        'main.js': {
          file: {
            contents: `
            export * from 'three';
          `,
          },
        },
      },
    },
    dist: {
      directory: {
        //
      },
    },
    'rollup.config.js': {
      file: {
        contents: `
      import resolve from '@rollup/plugin-node-resolve';
      import commonjs from '@rollup/plugin-commonjs';
      import pkg from './package.json';

      let first = Object.keys(pkg.dependencies)[0];
      export default [
        // {
        //   input: 'src/main.js',
        //   output: [
        //     { file: pkg.module, format: 'esm' },
        //     { file: pkg.main, format: 'cjs' },
        //   ],
        //   plugins: [
        //     resolve(),
        //   ]
        // },

        {
          input: 'src/main.js',
          output: [
            { file: pkg.browser, format: 'umd', name: first },
          ],
          plugins: [
            resolve(),
            commonjs()
          ]
        }
      ];
      `,
      },
    },
    'package.json': {
      file: {
        contents: `
      {
        "name": "react",
        "version": "1.0.0",
        "main": "dist/bundled.cjs.js",
        "module": "dist/bundled.esm.js",
        "browser": "dist/bundled.umd.js",
        "dependencies": {
          "three": "latest"
        },
        "devDependencies": {
          "@rollup/plugin-commonjs": "^11.0.1",
          "@rollup/plugin-node-resolve": "^7.0.0",
          "rollup": "^1.29.0"
        },
        "scripts": {
          "build": "rollup -c",
          "dev": "rollup -c -w"
        },
        "files": [
          "dist"
        ]
      }`,
      },
    },
  }
}
