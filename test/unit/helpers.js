import chai from 'chai';
import supertest from 'supertest';
import app from '../../app';

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
global.should = chai.should();
