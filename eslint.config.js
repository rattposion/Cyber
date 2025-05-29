import pkg from 'eslint-config-next';
const { next } = pkg;

export default [
  next(),
  {
    ignores: [
      'src/generated/prisma/**',
    ],
  },
]; 