"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
describe('Hello', function () {
    test('renders', function () {
        var getByText = react_1.render(react_2.default.createElement(_1.default, { name: "Jane" })).getByText;
        expect(getByText('Hello Jane')).toBeInTheDocument();
    });
    test('fails to find incorrect text', function () {
        var findByText = react_1.render(react_2.default.createElement(_1.default, { name: "Jane" })).findByText;
        return findByText('Hi Jane').catch(function (error) { return expect(error).not.toBeNull(); });
    });
});
//# sourceMappingURL=Hello.test.js.map

//# sourceMappingURL={"version":3,"file":"Hello.test.js","sourceRoot":"","sources":["Hello.test.tsx"],"names":[],"mappings":";;;;;AAAA,gDAAgD;AAChD,gDAA0B;AAC1B,uCAAsB;AAEtB,QAAQ,CAAC,OAAO,EAAE;IAChB,IAAI,CAAC,SAAS,EAAE;QACN,IAAA,iGAAS,CAAmC;QACpD,MAAM,CAAC,SAAS,CAAC,YAAY,CAAC,CAAC,CAAC,iBAAiB,EAAE,CAAC;IACtD,CAAC,CAAC,CAAC;IACH,IAAI,CAAC,8BAA8B,EAAE;QAC3B,IAAA,mGAAU,CAAmC;QACrD,OAAO,UAAU,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,UAAA,KAAK,IAAI,OAAA,MAAM,CAAC,KAAK,CAAC,CAAC,GAAG,CAAC,QAAQ,EAAE,EAA5B,CAA4B,CAAC,CAAC;IAC5E,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC"}