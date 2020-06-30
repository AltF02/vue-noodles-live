"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
exports.default = {
    getUser() {
        return axios_1.default.get('/api/user')
            .then(response => {
            return response.data;
        });
    }
};
//# sourceMappingURL=user.js.map