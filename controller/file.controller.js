import fs from 'fs-extra';
import ejs from 'ejs';
import pdf from 'html-pdf';

exports.createHtmlFile = (filename, logger, json, templatePath) => {
  return new Promise(async (resolve, reject) => {
    try {
      const html = await ejs.render(fs.readFileSync(templatePath, 'utf8'), {
        users: json,
      });
      logger.info(`The template for the este.csv file was created ${filename} `);
      resolve(html);
    } catch (error) {
      reject(Error('Fatal error while creating template'));
    }
  });
};

exports.createSendPdfFile = (res, pathCsv, html, fileFormat) => pdf
  .create(html, {
    format: fileFormat,
    border: 10,
  })
  .toStream((err, stream) => {
    stream
      .pipe(res)
      .on('finish', () => fs.remove(pathCsv));
  });
