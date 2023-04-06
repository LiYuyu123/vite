module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true, //单引号
				semi: false, //不以分号结尾
				endOfLine: 'auto', //不检查结尾换行符
				// eslint 规则在此定义,后续根据需要进行添加或修改原有规则
			},
		],
	},
}
