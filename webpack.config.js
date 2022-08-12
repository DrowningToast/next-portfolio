module.exports = {
  resolve: {
    alias: {
      // Forward all three imports to our exports file
      three$: path.resolve("./three-exports.js"),
    },
  },
};
