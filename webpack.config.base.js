const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENTRY = path.join(__dirname, "source");
const OUTPUT = path.join(__dirname, "build");
const STATIC = path.join(__dirname, "static");

module.exports = {
	entry: path.join(ENTRY, "index.tsx"),
	output: {
		filename: "js/index.js",
		path: OUTPUT,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		modules: [ENTRY, "node_modules"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(STATIC, "index.html"),
			path: OUTPUT,
			filename: "index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.[j|t]s[x]?$/,
				exclude: /node_modules/,
				use: "awesome-typescript-loader",
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif|mp3|eot|woff|woff2|ttf)([\\?]?.*)$/,
				loader: "file-loader",
				options: {
					name: "assets/[hash:5].[ext]",
				},
			},
		],
	},
};
