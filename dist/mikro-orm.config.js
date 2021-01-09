"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microConfig = void 0;
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
exports.microConfig = {
    entities: [Post_1.Post],
    dbName: "lireddit",
    type: "postgresql",
    debug: !constants_1.__prod__,
};
exports.default = exports.microConfig;
//# sourceMappingURL=mikro-orm.config.js.map