module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader', 
        },
      ],
    }      
  }
};

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/, 
          loader: 'vue-svg-loader', 
        },
      ],
    }      
  }
};