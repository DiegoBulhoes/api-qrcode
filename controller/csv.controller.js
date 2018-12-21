import csvJson from 'csvtojson';
import qrcode from 'qrcode';

exports.createJson = (filename, logger, pathCSV) => new Promise(async (resolve, reject) => {
  try {
    const objCsv = [];
    await csvJson()
      .fromFile(pathCSV)
      .subscribe(json => qrcode.toDataURL((JSON.stringify(json)))
        .then((url) => {
          const data = json;
          data.qrcode = url;
          objCsv.push(data);
        }))
      .then(() => {
        logger.info(`It was to create the file template ${filename}`);
        resolve(objCsv);
      });
  } catch (error) {
    reject(Error('Error creating json'));
  }
});
