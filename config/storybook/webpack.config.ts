import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { rules } from '../../.eslintrc';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};
	config?.resolve?.modules?.push(paths.src);
	config?.resolve?.extensions?.push('.ts', '.tsx');

	if (config.module?.rules) {
		config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | '...') => {
			if (rule !== '...' && /svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i };
			}

			return rule;
		});
	}
	config.module?.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});

	config.module?.rules?.push(buildCssLoaders(true));

	return config;
};
