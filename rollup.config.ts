import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
import clear from 'rollup-plugin-clear'; // 清除打包文件
import { terser } from 'rollup-plugin-terser';

const outputFile = 'lib/index.min.js';
const outputESMFile = 'lib/index.esm.js';

const basePlygins = [
  clear({
    targets: ['lib'],
  }),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  resolve({
    // 将自定义选项传递给解析插件
    customResolveOptions: {
      moduleDirectory: 'node_modules',
    },
  }),
  babel({
    extensions: ['.js'],
    runtimeHelpers: true,
    exclude: ['node_modules/**'],
  }),
  commonjs({
    include: 'node_modules/**',
  }),
  terser(),
];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: outputFile,
        format: 'umd',
        name: 'file',
      },
      {
        file: outputESMFile,
        format: 'esm',
      },
    ],
    plugins: [...basePlygins],
  },
];
