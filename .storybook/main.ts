import type { StorybookConfig } from '@storybook/react-webpack5';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mjs)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack" // Add this for better CSS support
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // Ensure config structure exists
    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];
    config.resolve = config.resolve || {};

    // Remove conflicting CSS rules
    config.module.rules = config.module.rules.filter(
      (rule) => !(
        rule &&
        typeof rule === 'object' &&
        rule.test instanceof RegExp &&
        rule.test.test('.css')
      )
    );

    // Add Tailwind CSS support
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'postcss-loader'
      ],
      include: path.resolve(__dirname, '../src'),
    });

    // Add path resolution
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
      'node_modules'
    ];

    return config;
  },
};

export default config;