import log4js from 'log4js';
import csvController from '../../../controller/csv.controller';

describe('Controllers: csv', () => {
  const logger = log4js.getLogger('testUnit');
  log4js.configure(`${__dirname}/../../../config/log4js.json`);

  describe('Convert file.csv to an object: createJson()', () => {
    const filename = 'testeUnit.csv';

    it('Should return a json', async () => {
      const pathCsv = `${__dirname}/../../auxiliaryFiles/file.csv`;
      const response = await csvController.createJson(filename, logger, pathCsv);

      const expectedResponse = [{
        name: 'name1',
        email: 'name1@teste.com',
        qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATkSURBVO3BQY4cSRIEQdNA/f/Lujz6KYBEejWbsyaCf6RqyUnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXok5eA/CQ1E5BJzQRkUnMDZFLzBpAbNTdAfpKaN06qFp1ULTqpWvTJMjWbgDwB5AkgbwCZ1ExqboBMam7UbAKy6aRq0UnVopOqRZ98GZAn1DyhZgJyA2STmieAbALyhJpvOqladFK16KRq0Sf/OCCTmhsgk5oJyATkRs0E5Ak1/yUnVYtOqhadVC365B+nZgLyhpoJyA2QSc0E5P/JSdWik6pFJ1WLPvkyNX+TmjfU3ACZgExqJiATkEnNE2p+k5OqRSdVi06qFn2yDMhPAjKpmYBMaiYgk5oJyKTmRs0EZFIzAXkCyG92UrXopGrRSdWiT15S85upeUPNE0AmNW+o+ZecVC06qVp0UrXok5eATGomIDdqJiBPqJmA3Kh5AsikZlIzAXlCzQ2QSc0NkEnNBORGzRsnVYtOqhadVC36ZBmQSc0NkEnNE0AmNROQCcikZgIyqbkBMqmZgGwCcqPmbzqpWnRSteikatEnL6mZgExAbtRMQG7UTGqeUPOT1DwBZFLzBJAn1Gw6qVp0UrXopGrRJ7+Mmhsgk5o3gNwA2QRkUnMD5Ak1f9NJ1aKTqkUnVYs+WaZmE5BNQCY1E5A3gExqJjVPqHkDyKRmAjKpeeOkatFJ1aKTqkWffBmQSc0E5EbNBGQCcqPmJ6m5ATKpuQEyqbkBMqn5SSdVi06qFp1ULcI/8gKQGzUTkDfU3AC5UTMBeULNDZA31ExAbtQ8AeRGzRsnVYtOqhadVC365CU1E5BNaiYgk5pJzQRkAnKjZgIyAblRMwGZ1ExAbtTcALlR85NOqhadVC06qVqEf+SLgExqJiBvqNkE5EbNE0CeUHMD5EbN33RSteikatFJ1aJPlgGZ1NyomYBMam6ATGomIDdqbtRMQCY1N2pugLyh5jc5qVp0UrXopGrRJy8BmdQ8AWRSMwG5UTMBuVHzk4BMam6ATGomNTdAJjUTkEnNppOqRSdVi06qFuEf+UWATGpugExqJiA3am6ATGomIE+oeQLIpGYCMqmZgDyh5o2TqkUnVYtOqhbhH1kE5Ak1N0CeUPMEkEnNBGRScwPkN1PzTSdVi06qFp1ULfpkmZpNam6APAHkBsgTQJ5QMwGZ1DwBZFLzBJBJzRsnVYtOqhadVC365CUgP0nNE0AmNROQSc0TaiYgN0CeADKpeQPIpGbTSdWik6pFJ1WLPlmmZhOQJ4DcALkBcqNmAjKpmYBMaiYgN2qeADKpmdR800nVopOqRSdViz75MiBPqHlCzQRkUrMJyKRmAjKpeQLIJiBPqHnjpGrRSdWik6pFn/zjgDwB5EbNBGRSMwF5Q80TQG7UPAFk00nVopOqRSdViz75j1EzAblR84aaGyA3at5QMwG5UfNNJ1WLTqoWnVQt+uTL1HyTmgnIjZon1ExAJjU3am6ATGomIJOaGzU3QCY1m06qFp1ULTqpWvTJMiA/CcikZgJyA2RSc6NmAjKp2aRmAjKp+U1OqhadVC06qVqEf6RqyUnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXofymKRECXIR0JAAAAAElFTkSuQmCC',
      }];
      expect(response).to.be.eql(expectedResponse);
    });

    it('Should return a json, because file.csv does not exist', async () => {
      csvController.createJson(filename, logger, null).catch((err) => {
        expect(err.message).to.be.eql('Error creating json');
      });
    });
  });
});
