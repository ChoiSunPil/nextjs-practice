const path = require('path');

module.exports = {
	entry: './public/nextjs-web-component.js',

	output: {
		path: path.resolve(__dirname, 'public'), // 번들 파일의 출력 경로
	    filename: 'bundle.js' // 출력 파일 이름
    },
    
    module: {
	    rules: [
		    {
			    test: /\.(js|jsx|tsx)$/, // .js,.jsx, .tsx 파일에 대한 처리
			    exclude: /node_modules/,
			    use: {
				    loader: 'babel-loader', // babel-loader를 사용하여 트랜스파일
				    options: {
					    presets: ['@babel/preset-env', '@babel/preset-react'] 
					    // ECMAScript 2015+와 React 코드를 변환하기 위한 프리셋
					    }
				    }
		    }
	    ]
    },

resolve: {
	extensions: ['.js', '.jsx','.tsx'] // 확장자를 생략하고 모듈을 불러올 수 있게 함
}
};