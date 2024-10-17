"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_URL = exports.PRIVATE_KEY_SECRET = exports.JWT_SECRET = exports.NODE_ENV = exports.DB_USER = exports.DB_TEST_NAME = exports.DB_DEV_NAME = exports.DB_PASSWORD = exports.DB_HOST = exports.DB_PORT = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 3001;
exports.DB_PORT = process.env.DB_PORT || 3306;
exports.DB_HOST = process.env.DB_HOST || 'localhost';
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_DEV_NAME = process.env.DB_DEV_NAME;
exports.DB_TEST_NAME = process.env.DB_TEST_NAME;
exports.DB_USER = process.env.DB_USER;
exports.NODE_ENV = process.env.NODE_ENV;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.PRIVATE_KEY_SECRET = process.env.PRIVATE_KEY_SECRET;
exports.PUBLIC_URL = process.env.PUBLIC_URL;
