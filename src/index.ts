import type { Linter } from 'eslint';
import { createConfig } from './config.js';

const config: Linter.Config[] = await createConfig();

export default config;
