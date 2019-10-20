describe('Test integration of csv routes', () => {
  describe('POST /v1/csv', () => {
    it('Must perform a req and return a status Code = 200', async () => {
      const filePath = `${__dirname}/../auxiliaryFiles/file.csv`;
      return request
        .post('/v1/csv')
        .field('templateName', 'LeftQRCodeList')
        .attach('file', filePath)
        .expect(200);
    });

    it('Must perform a req and return a status Code = 500', async () => {
      const filePath = `${__dirname}/../auxiliaryFiles/file.csv`;
      return request
        .post('/v1/csv')
        .attach('file', filePath)
        .expect(500);
    });

    it('Must perform a req and return a status Code = 500', async () => request
      .post('/v1/csv')
      .field('templateName', 'list')
      .attach('file', null)
      .expect(500));
  });
});
