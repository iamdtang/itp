module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'itp',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
