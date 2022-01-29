const BodyParser = (req) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let body = {};

    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(chunks).toString();
      const parsedDataArray = parsedData.split('&');
      parsedDataArray.map(data=>{
            data = data.split('=');
            body[data[0]] = data[1];
      });
      resolve(body);
    });

    req.on('error',(error)=>{
        reject(error.message);
    })
  });
};

module.exports = BodyParser;
