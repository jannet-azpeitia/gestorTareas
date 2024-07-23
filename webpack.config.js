const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de tu aplicacion 
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida 
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida 
    },
    module: {
        rules: [
            {
                text: /\.css$/, // Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, // Regex para identificar archivo JS
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use:{
                    loader: 'babel-loader', // Loader para transpilar JS moderno a JScompatible con mas navegadores
                    options: {
                        presets: ['@babel/preset-env'], // Preset de Babel para convertir JS moderno a versiones mas antiguas 
                    }
                }
            }
        ]
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuracion
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta donde mostramos los archivos al usuarios
        compress: true, // Habilitando comprecion gzip
        port:9000, // Puerto del servidor de desrrollo
    }
}