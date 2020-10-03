module.exports = function format(string) {
    if (typeof string === "string"){
        return string.replace(/\s/g, "");
    }
    else throw new TypeError("format wants a string!");
  };