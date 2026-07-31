import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  
  // ⚠️ ESLint와 Prettier의 규칙 충돌을 완전히 막아주는 필수 설정
  eslintConfigPrettier 
);