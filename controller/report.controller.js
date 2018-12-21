import csv from './csv.controller';
import file from './file.controller';

exports.qrcodesBasicReport = async (req, res, next, logger, templateName) => {
  try {
    const templatePath = `${__dirname}/../template/${templateName}.ejs`;
    const pathCsv = `${__dirname}/../${req.file.path}`;

    const objCsv = await csv.createJson(req.file.filename, logger, pathCsv);
    const html = await file.createHtmlFile(req.file.filename, logger, objCsv, templatePath);

    file.createSendPdfFile(res, pathCsv, html, 'A4');
  } catch (error) {
    next('Error while receiving file');
  }
};
