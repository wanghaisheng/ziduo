/* eslint-disable unicorn/prefer-module */
'use strict';

const runtimeVersion = require('@babel/runtime/package.json').version;

module.exports = ({ env }) => ({
  targets: env('test') ? { node: 'current' } : {},
  assumptions: {
    arrayLikeIsIterable: true,
    constantReexports: true,
    constantSuper: true,
    enumerableModuleMeta: true,
    ignoreFunctionLength: true,
    ignoreToPrimitiveHint: true,
    iterableIsArray: true,
    mutableTemplateObject: true,
    noClassCalls: true,
    noDocumentAll: true,
    noNewArrows: true,
    objectRestNoSymbols: true,
    privateFieldsAsProperties: true,
    pureGetters: true,
    setClassMethods: true,
    setComputedProperties: true,
    setPublicClassFields: true,
    setSpreadProperties: true,
    skipForOfIteratorClosing: true,
    superIsCallableConstructor: true,
  },
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: 'commonjs',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: false,
        version: runtimeVersion,
      },
    ],
    /* Wechat devtools do not support the following syntax */
    '@babel/plugin-transform-numeric-separator',
    '@babel/plugin-transform-optional-chaining',
    '@babel/plugin-transform-nullish-coalescing-operator',
    /*******************************************************/
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
    'autocomplete-index',
  ],
});
