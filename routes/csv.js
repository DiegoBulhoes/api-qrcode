
import multer from 'multer';
import report from '../controller/report.controller';

export default (app, logger) => {
  const upload = multer({
    dest: process.env.FIELD_DEST || 'tmp/',
    fieldSize: process.env.FIELD_SIZE_UPLOAD || 100,
  });

  app.post('/v1/csv', upload.single('file'), async (req, res, next) => {
    report.qrcodesBasicReport(req, res, next, logger, req.body.templateName);
  });
};
