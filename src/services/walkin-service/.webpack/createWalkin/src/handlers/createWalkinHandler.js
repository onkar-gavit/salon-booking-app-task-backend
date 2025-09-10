/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 253:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parsedType = void 0;
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const parsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "nombro";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "tabelo";
            }
            if (data === null) {
                return "senvalora";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
exports.parsedType = parsedType;
const error = () => {
    const Sizable = {
        string: { unit: "karaktrojn", verb: "havi" },
        file: { unit: "bajtojn", verb: "havi" },
        array: { unit: "elementojn", verb: "havi" },
        set: { unit: "elementojn", verb: "havi" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "enigo",
        email: "retadreso",
        url: "URL",
        emoji: "emoĝio",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datotempo",
        date: "ISO-dato",
        time: "ISO-tempo",
        duration: "ISO-daŭro",
        ipv4: "IPv4-adreso",
        ipv6: "IPv6-adreso",
        cidrv4: "IPv4-rango",
        cidrv6: "IPv6-rango",
        base64: "64-ume kodita karaktraro",
        base64url: "URL-64-ume kodita karaktraro",
        json_string: "JSON-karaktraro",
        e164: "E.164-nombro",
        jwt: "JWT",
        template_literal: "enigo",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Nevalida enigo: atendiĝis ${issue.expected}, riceviĝis ${(0, exports.parsedType)(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Nevalida enigo: atendiĝis ${util.stringifyPrimitive(issue.values[0])}`;
                return `Nevalida opcio: atendiĝis unu el ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
                return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Tro malgranda: atendiĝis ke ${issue.origin} havu ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Tro malgranda: atendiĝis ke ${issue.origin} estu ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Nevalida karaktraro: devas komenciĝi per "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Nevalida karaktraro: devas finiĝi per "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
                return `Nevalida ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Nevalida nombro: devas esti oblo de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Nekonata${issue.keys.length > 1 ? "j" : ""} ŝlosilo${issue.keys.length > 1 ? "j" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Nevalida ŝlosilo en ${issue.origin}`;
            case "invalid_union":
                return "Nevalida enigo";
            case "invalid_element":
                return `Nevalida valoro en ${issue.origin}`;
            default:
                return `Nevalida enigo`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}


/***/ }),

/***/ 435:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.coerce = exports.iso = exports.ZodISODuration = exports.ZodISOTime = exports.ZodISODate = exports.ZodISODateTime = exports.locales = exports.NEVER = exports.util = exports.TimePrecision = exports.toJSONSchema = exports.flattenError = exports.formatError = exports.prettifyError = exports.treeifyError = exports.regexes = exports.clone = exports.$brand = exports.$input = exports.$output = exports.config = exports.registry = exports.globalRegistry = exports.core = void 0;
exports.core = __importStar(__webpack_require__(6405));
__exportStar(__webpack_require__(6870), exports);
__exportStar(__webpack_require__(9945), exports);
__exportStar(__webpack_require__(5887), exports);
__exportStar(__webpack_require__(7647), exports);
__exportStar(__webpack_require__(9148), exports);
// zod-specified
const index_js_1 = __webpack_require__(6405);
const en_js_1 = __importDefault(__webpack_require__(3108));
(0, index_js_1.config)((0, en_js_1.default)());
var index_js_2 = __webpack_require__(6405);
Object.defineProperty(exports, "globalRegistry", ({ enumerable: true, get: function () { return index_js_2.globalRegistry; } }));
Object.defineProperty(exports, "registry", ({ enumerable: true, get: function () { return index_js_2.registry; } }));
Object.defineProperty(exports, "config", ({ enumerable: true, get: function () { return index_js_2.config; } }));
Object.defineProperty(exports, "$output", ({ enumerable: true, get: function () { return index_js_2.$output; } }));
Object.defineProperty(exports, "$input", ({ enumerable: true, get: function () { return index_js_2.$input; } }));
Object.defineProperty(exports, "$brand", ({ enumerable: true, get: function () { return index_js_2.$brand; } }));
Object.defineProperty(exports, "clone", ({ enumerable: true, get: function () { return index_js_2.clone; } }));
Object.defineProperty(exports, "regexes", ({ enumerable: true, get: function () { return index_js_2.regexes; } }));
Object.defineProperty(exports, "treeifyError", ({ enumerable: true, get: function () { return index_js_2.treeifyError; } }));
Object.defineProperty(exports, "prettifyError", ({ enumerable: true, get: function () { return index_js_2.prettifyError; } }));
Object.defineProperty(exports, "formatError", ({ enumerable: true, get: function () { return index_js_2.formatError; } }));
Object.defineProperty(exports, "flattenError", ({ enumerable: true, get: function () { return index_js_2.flattenError; } }));
Object.defineProperty(exports, "toJSONSchema", ({ enumerable: true, get: function () { return index_js_2.toJSONSchema; } }));
Object.defineProperty(exports, "TimePrecision", ({ enumerable: true, get: function () { return index_js_2.TimePrecision; } }));
Object.defineProperty(exports, "util", ({ enumerable: true, get: function () { return index_js_2.util; } }));
Object.defineProperty(exports, "NEVER", ({ enumerable: true, get: function () { return index_js_2.NEVER; } }));
exports.locales = __importStar(__webpack_require__(3859));
// iso
// must be exported from top-level
// https://github.com/colinhacks/zod/issues/4491
var iso_js_1 = __webpack_require__(1553);
Object.defineProperty(exports, "ZodISODateTime", ({ enumerable: true, get: function () { return iso_js_1.ZodISODateTime; } }));
Object.defineProperty(exports, "ZodISODate", ({ enumerable: true, get: function () { return iso_js_1.ZodISODate; } }));
Object.defineProperty(exports, "ZodISOTime", ({ enumerable: true, get: function () { return iso_js_1.ZodISOTime; } }));
Object.defineProperty(exports, "ZodISODuration", ({ enumerable: true, get: function () { return iso_js_1.ZodISODuration; } }));
exports.iso = __importStar(__webpack_require__(1553));
exports.coerce = __importStar(__webpack_require__(6597));


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "tegn", verb: "å ha" },
        file: { unit: "bytes", verb: "å ha" },
        array: { unit: "elementer", verb: "å inneholde" },
        set: { unit: "elementer", verb: "å inneholde" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "tall";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "liste";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-postadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslett",
        date: "ISO-dato",
        time: "ISO-klokkeslett",
        duration: "ISO-varighet",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spekter",
        cidrv6: "IPv6-spekter",
        base64: "base64-enkodet streng",
        base64url: "base64url-enkodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ugyldig input: forventet ${issue.expected}, fikk ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ugyldig verdi: forventet ${util.stringifyPrimitive(issue.values[0])}`;
                return `Ugyldig valg: forventet en av ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementer"}`;
                return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ugyldig streng: må starte med "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Ugyldig streng: må ende med "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ugyldig streng: må inneholde "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ugyldig streng: må matche mønsteret ${_issue.pattern}`;
                return `Ugyldig ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ugyldig tall: må være et multiplum av ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig nøkkel i ${issue.origin}`;
            case "invalid_union":
                return "Ugyldig input";
            case "invalid_element":
                return `Ugyldig verdi i ${issue.origin}`;
            default:
                return `Ugyldig input`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const crypto_1 = __webpack_require__(6982);
exports["default"] = { randomUUID: crypto_1.randomUUID };


/***/ }),

/***/ 840:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;


/***/ }),

/***/ 873:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimePrecision = void 0;
exports._string = _string;
exports._coercedString = _coercedString;
exports._email = _email;
exports._guid = _guid;
exports._uuid = _uuid;
exports._uuidv4 = _uuidv4;
exports._uuidv6 = _uuidv6;
exports._uuidv7 = _uuidv7;
exports._url = _url;
exports._emoji = _emoji;
exports._nanoid = _nanoid;
exports._cuid = _cuid;
exports._cuid2 = _cuid2;
exports._ulid = _ulid;
exports._xid = _xid;
exports._ksuid = _ksuid;
exports._ipv4 = _ipv4;
exports._ipv6 = _ipv6;
exports._cidrv4 = _cidrv4;
exports._cidrv6 = _cidrv6;
exports._base64 = _base64;
exports._base64url = _base64url;
exports._e164 = _e164;
exports._jwt = _jwt;
exports._isoDateTime = _isoDateTime;
exports._isoDate = _isoDate;
exports._isoTime = _isoTime;
exports._isoDuration = _isoDuration;
exports._number = _number;
exports._coercedNumber = _coercedNumber;
exports._int = _int;
exports._float32 = _float32;
exports._float64 = _float64;
exports._int32 = _int32;
exports._uint32 = _uint32;
exports._boolean = _boolean;
exports._coercedBoolean = _coercedBoolean;
exports._bigint = _bigint;
exports._coercedBigint = _coercedBigint;
exports._int64 = _int64;
exports._uint64 = _uint64;
exports._symbol = _symbol;
exports._undefined = _undefined;
exports._null = _null;
exports._any = _any;
exports._unknown = _unknown;
exports._never = _never;
exports._void = _void;
exports._date = _date;
exports._coercedDate = _coercedDate;
exports._nan = _nan;
exports._lt = _lt;
exports._lte = _lte;
exports._max = _lte;
exports._lte = _lte;
exports._max = _lte;
exports._gt = _gt;
exports._gte = _gte;
exports._min = _gte;
exports._gte = _gte;
exports._min = _gte;
exports._positive = _positive;
exports._negative = _negative;
exports._nonpositive = _nonpositive;
exports._nonnegative = _nonnegative;
exports._multipleOf = _multipleOf;
exports._maxSize = _maxSize;
exports._minSize = _minSize;
exports._size = _size;
exports._maxLength = _maxLength;
exports._minLength = _minLength;
exports._length = _length;
exports._regex = _regex;
exports._lowercase = _lowercase;
exports._uppercase = _uppercase;
exports._includes = _includes;
exports._startsWith = _startsWith;
exports._endsWith = _endsWith;
exports._property = _property;
exports._mime = _mime;
exports._overwrite = _overwrite;
exports._normalize = _normalize;
exports._trim = _trim;
exports._toLowerCase = _toLowerCase;
exports._toUpperCase = _toUpperCase;
exports._array = _array;
exports._union = _union;
exports._discriminatedUnion = _discriminatedUnion;
exports._intersection = _intersection;
exports._tuple = _tuple;
exports._record = _record;
exports._map = _map;
exports._set = _set;
exports._enum = _enum;
exports._nativeEnum = _nativeEnum;
exports._literal = _literal;
exports._file = _file;
exports._transform = _transform;
exports._optional = _optional;
exports._nullable = _nullable;
exports._default = _default;
exports._nonoptional = _nonoptional;
exports._success = _success;
exports._catch = _catch;
exports._pipe = _pipe;
exports._readonly = _readonly;
exports._templateLiteral = _templateLiteral;
exports._lazy = _lazy;
exports._promise = _promise;
exports._custom = _custom;
exports._refine = _refine;
exports._superRefine = _superRefine;
exports._check = _check;
exports._stringbool = _stringbool;
exports._stringFormat = _stringFormat;
const checks = __importStar(__webpack_require__(6648));
const schemas = __importStar(__webpack_require__(5585));
const util = __importStar(__webpack_require__(2879));
function _string(Class, params) {
    return new Class({
        type: "string",
        ...util.normalizeParams(params),
    });
}
function _coercedString(Class, params) {
    return new Class({
        type: "string",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
function _email(Class, params) {
    return new Class({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _guid(Class, params) {
    return new Class({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _uuid(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _uuidv4(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...util.normalizeParams(params),
    });
}
function _uuidv6(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...util.normalizeParams(params),
    });
}
function _uuidv7(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...util.normalizeParams(params),
    });
}
function _url(Class, params) {
    return new Class({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _emoji(Class, params) {
    return new Class({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _nanoid(Class, params) {
    return new Class({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _cuid(Class, params) {
    return new Class({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _cuid2(Class, params) {
    return new Class({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _ulid(Class, params) {
    return new Class({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _xid(Class, params) {
    return new Class({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _ksuid(Class, params) {
    return new Class({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _ipv4(Class, params) {
    return new Class({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _ipv6(Class, params) {
    return new Class({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _cidrv4(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _cidrv6(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _base64(Class, params) {
    return new Class({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _base64url(Class, params) {
    return new Class({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _e164(Class, params) {
    return new Class({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _jwt(Class, params) {
    return new Class({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
exports.TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6,
};
function _isoDateTime(Class, params) {
    return new Class({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ...util.normalizeParams(params),
    });
}
function _isoDate(Class, params) {
    return new Class({
        type: "string",
        format: "date",
        check: "string_format",
        ...util.normalizeParams(params),
    });
}
function _isoTime(Class, params) {
    return new Class({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...util.normalizeParams(params),
    });
}
function _isoDuration(Class, params) {
    return new Class({
        type: "string",
        format: "duration",
        check: "string_format",
        ...util.normalizeParams(params),
    });
}
function _number(Class, params) {
    return new Class({
        type: "number",
        checks: [],
        ...util.normalizeParams(params),
    });
}
function _coercedNumber(Class, params) {
    return new Class({
        type: "number",
        coerce: true,
        checks: [],
        ...util.normalizeParams(params),
    });
}
function _int(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...util.normalizeParams(params),
    });
}
function _float32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float32",
        ...util.normalizeParams(params),
    });
}
function _float64(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float64",
        ...util.normalizeParams(params),
    });
}
function _int32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ...util.normalizeParams(params),
    });
}
function _uint32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "uint32",
        ...util.normalizeParams(params),
    });
}
function _boolean(Class, params) {
    return new Class({
        type: "boolean",
        ...util.normalizeParams(params),
    });
}
function _coercedBoolean(Class, params) {
    return new Class({
        type: "boolean",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
function _bigint(Class, params) {
    return new Class({
        type: "bigint",
        ...util.normalizeParams(params),
    });
}
function _coercedBigint(Class, params) {
    return new Class({
        type: "bigint",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
function _int64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "int64",
        ...util.normalizeParams(params),
    });
}
function _uint64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "uint64",
        ...util.normalizeParams(params),
    });
}
function _symbol(Class, params) {
    return new Class({
        type: "symbol",
        ...util.normalizeParams(params),
    });
}
function _undefined(Class, params) {
    return new Class({
        type: "undefined",
        ...util.normalizeParams(params),
    });
}
function _null(Class, params) {
    return new Class({
        type: "null",
        ...util.normalizeParams(params),
    });
}
function _any(Class) {
    return new Class({
        type: "any",
    });
}
function _unknown(Class) {
    return new Class({
        type: "unknown",
    });
}
function _never(Class, params) {
    return new Class({
        type: "never",
        ...util.normalizeParams(params),
    });
}
function _void(Class, params) {
    return new Class({
        type: "void",
        ...util.normalizeParams(params),
    });
}
function _date(Class, params) {
    return new Class({
        type: "date",
        ...util.normalizeParams(params),
    });
}
function _coercedDate(Class, params) {
    return new Class({
        type: "date",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
function _nan(Class, params) {
    return new Class({
        type: "nan",
        ...util.normalizeParams(params),
    });
}
function _lt(value, params) {
    return new checks.$ZodCheckLessThan({
        check: "less_than",
        ...util.normalizeParams(params),
        value,
        inclusive: false,
    });
}
function _lte(value, params) {
    return new checks.$ZodCheckLessThan({
        check: "less_than",
        ...util.normalizeParams(params),
        value,
        inclusive: true,
    });
}
function _gt(value, params) {
    return new checks.$ZodCheckGreaterThan({
        check: "greater_than",
        ...util.normalizeParams(params),
        value,
        inclusive: false,
    });
}
function _gte(value, params) {
    return new checks.$ZodCheckGreaterThan({
        check: "greater_than",
        ...util.normalizeParams(params),
        value,
        inclusive: true,
    });
}
function _positive(params) {
    return _gt(0, params);
}
// negative
function _negative(params) {
    return _lt(0, params);
}
// nonpositive
function _nonpositive(params) {
    return _lte(0, params);
}
// nonnegative
function _nonnegative(params) {
    return _gte(0, params);
}
function _multipleOf(value, params) {
    return new checks.$ZodCheckMultipleOf({
        check: "multiple_of",
        ...util.normalizeParams(params),
        value,
    });
}
function _maxSize(maximum, params) {
    return new checks.$ZodCheckMaxSize({
        check: "max_size",
        ...util.normalizeParams(params),
        maximum,
    });
}
function _minSize(minimum, params) {
    return new checks.$ZodCheckMinSize({
        check: "min_size",
        ...util.normalizeParams(params),
        minimum,
    });
}
function _size(size, params) {
    return new checks.$ZodCheckSizeEquals({
        check: "size_equals",
        ...util.normalizeParams(params),
        size,
    });
}
function _maxLength(maximum, params) {
    const ch = new checks.$ZodCheckMaxLength({
        check: "max_length",
        ...util.normalizeParams(params),
        maximum,
    });
    return ch;
}
function _minLength(minimum, params) {
    return new checks.$ZodCheckMinLength({
        check: "min_length",
        ...util.normalizeParams(params),
        minimum,
    });
}
function _length(length, params) {
    return new checks.$ZodCheckLengthEquals({
        check: "length_equals",
        ...util.normalizeParams(params),
        length,
    });
}
function _regex(pattern, params) {
    return new checks.$ZodCheckRegex({
        check: "string_format",
        format: "regex",
        ...util.normalizeParams(params),
        pattern,
    });
}
function _lowercase(params) {
    return new checks.$ZodCheckLowerCase({
        check: "string_format",
        format: "lowercase",
        ...util.normalizeParams(params),
    });
}
function _uppercase(params) {
    return new checks.$ZodCheckUpperCase({
        check: "string_format",
        format: "uppercase",
        ...util.normalizeParams(params),
    });
}
function _includes(includes, params) {
    return new checks.$ZodCheckIncludes({
        check: "string_format",
        format: "includes",
        ...util.normalizeParams(params),
        includes,
    });
}
function _startsWith(prefix, params) {
    return new checks.$ZodCheckStartsWith({
        check: "string_format",
        format: "starts_with",
        ...util.normalizeParams(params),
        prefix,
    });
}
function _endsWith(suffix, params) {
    return new checks.$ZodCheckEndsWith({
        check: "string_format",
        format: "ends_with",
        ...util.normalizeParams(params),
        suffix,
    });
}
function _property(property, schema, params) {
    return new checks.$ZodCheckProperty({
        check: "property",
        property,
        schema,
        ...util.normalizeParams(params),
    });
}
function _mime(types, params) {
    return new checks.$ZodCheckMimeType({
        check: "mime_type",
        mime: types,
        ...util.normalizeParams(params),
    });
}
function _overwrite(tx) {
    return new checks.$ZodCheckOverwrite({
        check: "overwrite",
        tx,
    });
}
// normalize
function _normalize(form) {
    return _overwrite((input) => input.normalize(form));
}
// trim
function _trim() {
    return _overwrite((input) => input.trim());
}
// toLowerCase
function _toLowerCase() {
    return _overwrite((input) => input.toLowerCase());
}
// toUpperCase
function _toUpperCase() {
    return _overwrite((input) => input.toUpperCase());
}
function _array(Class, element, params) {
    return new Class({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ...util.normalizeParams(params),
    });
}
function _union(Class, options, params) {
    return new Class({
        type: "union",
        options,
        ...util.normalizeParams(params),
    });
}
function _discriminatedUnion(Class, discriminator, options, params) {
    return new Class({
        type: "union",
        options,
        discriminator,
        ...util.normalizeParams(params),
    });
}
function _intersection(Class, left, right) {
    return new Class({
        type: "intersection",
        left,
        right,
    });
}
// export function _tuple(
//   Class: util.SchemaClass<schemas.$ZodTuple>,
//   items: [],
//   params?: string | $ZodTupleParams
// ): schemas.$ZodTuple<[], null>;
function _tuple(Class, items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof schemas.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new Class({
        type: "tuple",
        items,
        rest,
        ...util.normalizeParams(params),
    });
}
function _record(Class, keyType, valueType, params) {
    return new Class({
        type: "record",
        keyType,
        valueType,
        ...util.normalizeParams(params),
    });
}
function _map(Class, keyType, valueType, params) {
    return new Class({
        type: "map",
        keyType,
        valueType,
        ...util.normalizeParams(params),
    });
}
function _set(Class, valueType, params) {
    return new Class({
        type: "set",
        valueType,
        ...util.normalizeParams(params),
    });
}
function _enum(Class, values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    // if (Array.isArray(values)) {
    //   for (const value of values) {
    //     entries[value] = value;
    //   }
    // } else {
    //   Object.assign(entries, values);
    // }
    // const entries: util.EnumLike = {};
    // for (const val of values) {
    //   entries[val] = val;
    // }
    return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
function _nativeEnum(Class, entries, params) {
    return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
function _literal(Class, value, params) {
    return new Class({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...util.normalizeParams(params),
    });
}
function _file(Class, params) {
    return new Class({
        type: "file",
        ...util.normalizeParams(params),
    });
}
function _transform(Class, fn) {
    return new Class({
        type: "transform",
        transform: fn,
    });
}
function _optional(Class, innerType) {
    return new Class({
        type: "optional",
        innerType,
    });
}
function _nullable(Class, innerType) {
    return new Class({
        type: "nullable",
        innerType,
    });
}
function _default(Class, innerType, defaultValue) {
    return new Class({
        type: "default",
        innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : util.shallowClone(defaultValue);
        },
    });
}
function _nonoptional(Class, innerType, params) {
    return new Class({
        type: "nonoptional",
        innerType,
        ...util.normalizeParams(params),
    });
}
function _success(Class, innerType) {
    return new Class({
        type: "success",
        innerType,
    });
}
function _catch(Class, innerType, catchValue) {
    return new Class({
        type: "catch",
        innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue),
    });
}
function _pipe(Class, in_, out) {
    return new Class({
        type: "pipe",
        in: in_,
        out,
    });
}
function _readonly(Class, innerType) {
    return new Class({
        type: "readonly",
        innerType,
    });
}
function _templateLiteral(Class, parts, params) {
    return new Class({
        type: "template_literal",
        parts,
        ...util.normalizeParams(params),
    });
}
function _lazy(Class, getter) {
    return new Class({
        type: "lazy",
        getter,
    });
}
function _promise(Class, innerType) {
    return new Class({
        type: "promise",
        innerType,
    });
}
function _custom(Class, fn, _params) {
    const norm = util.normalizeParams(_params);
    norm.abort ?? (norm.abort = true); // default to abort:false
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...norm,
    });
    return schema;
}
// same as _custom but defaults to abort:false
function _refine(Class, fn, _params) {
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...util.normalizeParams(_params),
    });
    return schema;
}
function _superRefine(fn) {
    const ch = _check((payload) => {
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(util.issue(issue, payload.value, ch._zod.def));
            }
            else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal)
                    _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                _issue.input ?? (_issue.input = payload.value);
                _issue.inst ?? (_issue.inst = ch);
                _issue.continue ?? (_issue.continue = !ch._zod.def.abort); // abort is always undefined, so this is always true...
                payload.issues.push(util.issue(_issue));
            }
        };
        return fn(payload.value, payload);
    });
    return ch;
}
function _check(fn, params) {
    const ch = new checks.$ZodCheck({
        check: "custom",
        ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
function _stringbool(Classes, _params) {
    const params = util.normalizeParams(_params);
    let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
    let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
    if (params.case !== "sensitive") {
        truthyArray = truthyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
        falsyArray = falsyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
    }
    const truthySet = new Set(truthyArray);
    const falsySet = new Set(falsyArray);
    const _Codec = Classes.Codec ?? schemas.$ZodCodec;
    const _Boolean = Classes.Boolean ?? schemas.$ZodBoolean;
    const _String = Classes.String ?? schemas.$ZodString;
    const stringSchema = new _String({ type: "string", error: params.error });
    const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
    const codec = new _Codec({
        type: "pipe",
        in: stringSchema,
        out: booleanSchema,
        transform: ((input, payload) => {
            let data = input;
            if (params.case !== "sensitive")
                data = data.toLowerCase();
            if (truthySet.has(data)) {
                return true;
            }
            else if (falsySet.has(data)) {
                return false;
            }
            else {
                payload.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [...truthySet, ...falsySet],
                    input: payload.value,
                    inst: codec,
                    continue: false,
                });
                return {};
            }
        }),
        reverseTransform: ((input, _payload) => {
            if (input === true) {
                return truthyArray[0] || "true";
            }
            else {
                return falsyArray[0] || "false";
            }
        }),
        error: params.error,
    });
    return codec;
}
function _stringFormat(Class, format, fnOrRegex, _params = {}) {
    const params = util.normalizeParams(_params);
    const def = {
        ...util.normalizeParams(_params),
        check: "string_format",
        type: "string",
        format,
        fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
        ...params,
    };
    if (fnOrRegex instanceof RegExp) {
        def.pattern = fnOrRegex;
    }
    const inst = new Class(def);
    return inst;
}


/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "حروف", verb: "ہونا" },
        file: { unit: "بائٹس", verb: "ہونا" },
        array: { unit: "آئٹمز", verb: "ہونا" },
        set: { unit: "آئٹمز", verb: "ہونا" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "نمبر";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "آرے";
                }
                if (data === null) {
                    return "نل";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ان پٹ",
        email: "ای میل ایڈریس",
        url: "یو آر ایل",
        emoji: "ایموجی",
        uuid: "یو یو آئی ڈی",
        uuidv4: "یو یو آئی ڈی وی 4",
        uuidv6: "یو یو آئی ڈی وی 6",
        nanoid: "نینو آئی ڈی",
        guid: "جی یو آئی ڈی",
        cuid: "سی یو آئی ڈی",
        cuid2: "سی یو آئی ڈی 2",
        ulid: "یو ایل آئی ڈی",
        xid: "ایکس آئی ڈی",
        ksuid: "کے ایس یو آئی ڈی",
        datetime: "آئی ایس او ڈیٹ ٹائم",
        date: "آئی ایس او تاریخ",
        time: "آئی ایس او وقت",
        duration: "آئی ایس او مدت",
        ipv4: "آئی پی وی 4 ایڈریس",
        ipv6: "آئی پی وی 6 ایڈریس",
        cidrv4: "آئی پی وی 4 رینج",
        cidrv6: "آئی پی وی 6 رینج",
        base64: "بیس 64 ان کوڈڈ سٹرنگ",
        base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
        json_string: "جے ایس او این سٹرنگ",
        e164: "ای 164 نمبر",
        jwt: "جے ڈبلیو ٹی",
        template_literal: "ان پٹ",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `غلط ان پٹ: ${issue.expected} متوقع تھا، ${parsedType(issue.input)} موصول ہوا`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `غلط ان پٹ: ${util.stringifyPrimitive(issue.values[0])} متوقع تھا`;
                return `غلط آپشن: ${util.joinValues(issue.values, "|")} میں سے ایک متوقع تھا`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `بہت بڑا: ${issue.origin ?? "ویلیو"} کے ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عناصر"} ہونے متوقع تھے`;
                return `بہت بڑا: ${issue.origin ?? "ویلیو"} کا ${adj}${issue.maximum.toString()} ہونا متوقع تھا`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `بہت چھوٹا: ${issue.origin} کے ${adj}${issue.minimum.toString()} ${sizing.unit} ہونے متوقع تھے`;
                }
                return `بہت چھوٹا: ${issue.origin} کا ${adj}${issue.minimum.toString()} ہونا متوقع تھا`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `غلط سٹرنگ: "${_issue.prefix}" سے شروع ہونا چاہیے`;
                }
                if (_issue.format === "ends_with")
                    return `غلط سٹرنگ: "${_issue.suffix}" پر ختم ہونا چاہیے`;
                if (_issue.format === "includes")
                    return `غلط سٹرنگ: "${_issue.includes}" شامل ہونا چاہیے`;
                if (_issue.format === "regex")
                    return `غلط سٹرنگ: پیٹرن ${_issue.pattern} سے میچ ہونا چاہیے`;
                return `غلط ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `غلط نمبر: ${issue.divisor} کا مضاعف ہونا چاہیے`;
            case "unrecognized_keys":
                return `غیر تسلیم شدہ کی${issue.keys.length > 1 ? "ز" : ""}: ${util.joinValues(issue.keys, "، ")}`;
            case "invalid_key":
                return `${issue.origin} میں غلط کی`;
            case "invalid_union":
                return "غلط ان پٹ";
            case "invalid_element":
                return `${issue.origin} میں غلط ویلیو`;
            default:
                return `غلط ان پٹ`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "znaków", verb: "mieć" },
        file: { unit: "bajtów", verb: "mieć" },
        array: { unit: "elementów", verb: "mieć" },
        set: { unit: "elementów", verb: "mieć" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "liczba";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tablica";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "wyrażenie",
        email: "adres email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i godzina w formacie ISO",
        date: "data w formacie ISO",
        time: "godzina w formacie ISO",
        duration: "czas trwania ISO",
        ipv4: "adres IPv4",
        ipv6: "adres IPv6",
        cidrv4: "zakres IPv4",
        cidrv6: "zakres IPv6",
        base64: "ciąg znaków zakodowany w formacie base64",
        base64url: "ciąg znaków zakodowany w formacie base64url",
        json_string: "ciąg znaków w formacie JSON",
        e164: "liczba E.164",
        jwt: "JWT",
        template_literal: "wejście",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Nieprawidłowe dane wejściowe: oczekiwano ${issue.expected}, otrzymano ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Nieprawidłowe dane wejściowe: oczekiwano ${util.stringifyPrimitive(issue.values[0])}`;
                return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Za duża wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementów"}`;
                }
                return `Zbyt duż(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Za mała wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.minimum.toString()} ${sizing.unit ?? "elementów"}`;
                }
                return `Zbyt mał(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Nieprawidłowy ciąg znaków: musi kończyć się na "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Nieprawidłowy ciąg znaków: musi zawierać "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_issue.pattern}`;
                return `Nieprawidłow(y/a/e) ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Nieprawidłowa liczba: musi być wielokrotnością ${issue.divisor}`;
            case "unrecognized_keys":
                return `Nierozpoznane klucze${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Nieprawidłowy klucz w ${issue.origin}`;
            case "invalid_union":
                return "Nieprawidłowe dane wejściowe";
            case "invalid_element":
                return `Nieprawidłowa wartość w ${issue.origin}`;
            default:
                return `Nieprawidłowe dane wejściowe`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "ตัวอักษร", verb: "ควรมี" },
        file: { unit: "ไบต์", verb: "ควรมี" },
        array: { unit: "รายการ", verb: "ควรมี" },
        set: { unit: "รายการ", verb: "ควรมี" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "อาร์เรย์ (Array)";
                }
                if (data === null) {
                    return "ไม่มีค่า (null)";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ข้อมูลที่ป้อน",
        email: "ที่อยู่อีเมล",
        url: "URL",
        emoji: "อิโมจิ",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "วันที่เวลาแบบ ISO",
        date: "วันที่แบบ ISO",
        time: "เวลาแบบ ISO",
        duration: "ช่วงเวลาแบบ ISO",
        ipv4: "ที่อยู่ IPv4",
        ipv6: "ที่อยู่ IPv6",
        cidrv4: "ช่วง IP แบบ IPv4",
        cidrv6: "ช่วง IP แบบ IPv6",
        base64: "ข้อความแบบ Base64",
        base64url: "ข้อความแบบ Base64 สำหรับ URL",
        json_string: "ข้อความแบบ JSON",
        e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
        jwt: "โทเคน JWT",
        template_literal: "ข้อมูลที่ป้อน",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${issue.expected} แต่ได้รับ ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `ค่าไม่ถูกต้อง: ควรเป็น ${util.stringifyPrimitive(issue.values[0])}`;
                return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "ไม่เกิน" : "น้อยกว่า";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `เกินกำหนด: ${issue.origin ?? "ค่า"} ควรมี${adj} ${issue.maximum.toString()} ${sizing.unit ?? "รายการ"}`;
                return `เกินกำหนด: ${issue.origin ?? "ค่า"} ควรมี${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "อย่างน้อย" : "มากกว่า";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `น้อยกว่ากำหนด: ${issue.origin} ควรมี${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `น้อยกว่ากำหนด: ${issue.origin} ควรมี${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_issue.includes}" อยู่ในข้อความ`;
                if (_issue.format === "regex")
                    return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_issue.pattern}`;
                return `รูปแบบไม่ถูกต้อง: ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${issue.divisor} ได้ลงตัว`;
            case "unrecognized_keys":
                return `พบคีย์ที่ไม่รู้จัก: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `คีย์ไม่ถูกต้องใน ${issue.origin}`;
            case "invalid_union":
                return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
            case "invalid_element":
                return `ข้อมูลไม่ถูกต้องใน ${issue.origin}`;
            default:
                return `ข้อมูลไม่ถูกต้อง`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 1122:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.URL = exports.DNS = void 0;
const sha1_js_1 = __webpack_require__(8386);
const v35_js_1 = __webpack_require__(8609);
var v35_js_2 = __webpack_require__(8609);
Object.defineProperty(exports, "DNS", ({ enumerable: true, get: function () { return v35_js_2.DNS; } }));
Object.defineProperty(exports, "URL", ({ enumerable: true, get: function () { return v35_js_2.URL; } }));
function v5(value, namespace, buf, offset) {
    return (0, v35_js_1.default)(0x50, sha1_js_1.default, value, namespace, buf, offset);
}
v5.DNS = v35_js_1.DNS;
v5.URL = v35_js_1.URL;
exports["default"] = v5;


/***/ }),

/***/ 1175:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const parse_js_1 = __webpack_require__(8744);
const stringify_js_1 = __webpack_require__(7382);
function v1ToV6(uuid) {
    const v1Bytes = typeof uuid === 'string' ? (0, parse_js_1.default)(uuid) : uuid;
    const v6Bytes = _v1ToV6(v1Bytes);
    return typeof uuid === 'string' ? (0, stringify_js_1.unsafeStringify)(v6Bytes) : v6Bytes;
}
exports["default"] = v1ToV6;
function _v1ToV6(v1Bytes) {
    return Uint8Array.of(((v1Bytes[6] & 0x0f) << 4) | ((v1Bytes[7] >> 4) & 0x0f), ((v1Bytes[7] & 0x0f) << 4) | ((v1Bytes[4] & 0xf0) >> 4), ((v1Bytes[4] & 0x0f) << 4) | ((v1Bytes[5] & 0xf0) >> 4), ((v1Bytes[5] & 0x0f) << 4) | ((v1Bytes[0] & 0xf0) >> 4), ((v1Bytes[0] & 0x0f) << 4) | ((v1Bytes[1] & 0xf0) >> 4), ((v1Bytes[1] & 0x0f) << 4) | ((v1Bytes[2] & 0xf0) >> 4), 0x60 | (v1Bytes[2] & 0x0f), v1Bytes[3], v1Bytes[8], v1Bytes[9], v1Bytes[10], v1Bytes[11], v1Bytes[12], v1Bytes[13], v1Bytes[14], v1Bytes[15]);
}


/***/ }),

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "字元", verb: "擁有" },
        file: { unit: "位元組", verb: "擁有" },
        array: { unit: "項目", verb: "擁有" },
        set: { unit: "項目", verb: "擁有" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "輸入",
        email: "郵件地址",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 日期時間",
        date: "ISO 日期",
        time: "ISO 時間",
        duration: "ISO 期間",
        ipv4: "IPv4 位址",
        ipv6: "IPv6 位址",
        cidrv4: "IPv4 範圍",
        cidrv6: "IPv6 範圍",
        base64: "base64 編碼字串",
        base64url: "base64url 編碼字串",
        json_string: "JSON 字串",
        e164: "E.164 數值",
        jwt: "JWT",
        template_literal: "輸入",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `無效的輸入值：預期為 ${issue.expected}，但收到 ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `無效的輸入值：預期為 ${util.stringifyPrimitive(issue.values[0])}`;
                return `無效的選項：預期為以下其中之一 ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()} ${sizing.unit ?? "個元素"}`;
                return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `無效的字串：必須以 "${_issue.prefix}" 開頭`;
                }
                if (_issue.format === "ends_with")
                    return `無效的字串：必須以 "${_issue.suffix}" 結尾`;
                if (_issue.format === "includes")
                    return `無效的字串：必須包含 "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `無效的字串：必須符合格式 ${_issue.pattern}`;
                return `無效的 ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `無效的數字：必須為 ${issue.divisor} 的倍數`;
            case "unrecognized_keys":
                return `無法識別的鍵值${issue.keys.length > 1 ? "們" : ""}：${util.joinValues(issue.keys, "、")}`;
            case "invalid_key":
                return `${issue.origin} 中有無效的鍵值`;
            case "invalid_union":
                return "無效的輸入值";
            case "invalid_element":
                return `${issue.origin} 中有無效的值`;
            default:
                return `無效的輸入值`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "字符", verb: "包含" },
        file: { unit: "字节", verb: "包含" },
        array: { unit: "项", verb: "包含" },
        set: { unit: "项", verb: "包含" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "非数字(NaN)" : "数字";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "数组";
                }
                if (data === null) {
                    return "空值(null)";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "输入",
        email: "电子邮件",
        url: "URL",
        emoji: "表情符号",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日期时间",
        date: "ISO日期",
        time: "ISO时间",
        duration: "ISO时长",
        ipv4: "IPv4地址",
        ipv6: "IPv6地址",
        cidrv4: "IPv4网段",
        cidrv6: "IPv6网段",
        base64: "base64编码字符串",
        base64url: "base64url编码字符串",
        json_string: "JSON字符串",
        e164: "E.164号码",
        jwt: "JWT",
        template_literal: "输入",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `无效输入：期望 ${issue.expected}，实际接收 ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `无效输入：期望 ${util.stringifyPrimitive(issue.values[0])}`;
                return `无效选项：期望以下之一 ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `数值过大：期望 ${issue.origin ?? "值"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "个元素"}`;
                return `数值过大：期望 ${issue.origin ?? "值"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `数值过小：期望 ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `数值过小：期望 ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `无效字符串：必须以 "${_issue.prefix}" 开头`;
                if (_issue.format === "ends_with")
                    return `无效字符串：必须以 "${_issue.suffix}" 结尾`;
                if (_issue.format === "includes")
                    return `无效字符串：必须包含 "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `无效字符串：必须满足正则表达式 ${_issue.pattern}`;
                return `无效${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `无效数字：必须是 ${issue.divisor} 的倍数`;
            case "unrecognized_keys":
                return `出现未知的键(key): ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} 中的键(key)无效`;
            case "invalid_union":
                return "无效输入";
            case "invalid_element":
                return `${issue.origin} 中包含无效值(value)`;
            default:
                return `无效输入`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 1421:
/***/ ((module) => {

"use strict";
module.exports = require("node:child_process");

/***/ }),

/***/ 1455:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ 1553:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZodISODuration = exports.ZodISOTime = exports.ZodISODate = exports.ZodISODateTime = void 0;
exports.datetime = datetime;
exports.date = date;
exports.time = time;
exports.duration = duration;
const core = __importStar(__webpack_require__(6405));
const schemas = __importStar(__webpack_require__(6870));
exports.ZodISODateTime = core.$constructor("ZodISODateTime", (inst, def) => {
    core.$ZodISODateTime.init(inst, def);
    schemas.ZodStringFormat.init(inst, def);
});
function datetime(params) {
    return core._isoDateTime(exports.ZodISODateTime, params);
}
exports.ZodISODate = core.$constructor("ZodISODate", (inst, def) => {
    core.$ZodISODate.init(inst, def);
    schemas.ZodStringFormat.init(inst, def);
});
function date(params) {
    return core._isoDate(exports.ZodISODate, params);
}
exports.ZodISOTime = core.$constructor("ZodISOTime", (inst, def) => {
    core.$ZodISOTime.init(inst, def);
    schemas.ZodStringFormat.init(inst, def);
});
function time(params) {
    return core._isoTime(exports.ZodISOTime, params);
}
exports.ZodISODuration = core.$constructor("ZodISODuration", (inst, def) => {
    core.$ZodISODuration.init(inst, def);
    schemas.ZodStringFormat.init(inst, def);
});
function duration(params) {
    return core._isoDuration(exports.ZodISODuration, params);
}


/***/ }),

/***/ 1708:
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ 1870:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.globalConfig = exports.$ZodEncodeError = exports.$ZodAsyncError = exports.$brand = exports.NEVER = void 0;
exports.$constructor = $constructor;
exports.config = config;
/** A special constant with type `never` */
exports.NEVER = Object.freeze({
    status: "aborted",
});
function $constructor(name, initializer, params) {
    function init(inst, def) {
        var _a;
        Object.defineProperty(inst, "_zod", {
            value: inst._zod ?? {},
            enumerable: false,
        });
        (_a = inst._zod).traits ?? (_a.traits = new Set());
        inst._zod.traits.add(name);
        initializer(inst, def);
        // support prototype modifications
        for (const k in _.prototype) {
            if (!(k in inst))
                Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
        }
        inst._zod.constr = _;
        inst._zod.def = def;
    }
    // doesn't work if Parent has a constructor with arguments
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", { value: name });
    function _(def) {
        var _a;
        const inst = params?.Parent ? new Definition() : this;
        init(inst, def);
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        for (const fn of inst._zod.deferred) {
            fn();
        }
        return inst;
    }
    Object.defineProperty(_, "init", { value: init });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst) => {
            if (params?.Parent && inst instanceof params.Parent)
                return true;
            return inst?._zod?.traits?.has(name);
        },
    });
    Object.defineProperty(_, "name", { value: name });
    return _;
}
//////////////////////////////   UTILITIES   ///////////////////////////////////////
exports.$brand = Symbol("zod_brand");
class $ZodAsyncError extends Error {
    constructor() {
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
}
exports.$ZodAsyncError = $ZodAsyncError;
class $ZodEncodeError extends Error {
    constructor(name) {
        super(`Encountered unidirectional transform during encode: ${name}`);
        this.name = "ZodEncodeError";
    }
}
exports.$ZodEncodeError = $ZodEncodeError;
exports.globalConfig = {};
function config(newConfig) {
    if (newConfig)
        Object.assign(exports.globalConfig, newConfig);
    return exports.globalConfig;
}


/***/ }),

/***/ 2048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.safeDecodeAsync = exports._safeDecodeAsync = exports.safeEncodeAsync = exports._safeEncodeAsync = exports.safeDecode = exports._safeDecode = exports.safeEncode = exports._safeEncode = exports.decodeAsync = exports._decodeAsync = exports.encodeAsync = exports._encodeAsync = exports.decode = exports._decode = exports.encode = exports._encode = exports.safeParseAsync = exports._safeParseAsync = exports.safeParse = exports._safeParse = exports.parseAsync = exports._parseAsync = exports.parse = exports._parse = void 0;
const core = __importStar(__webpack_require__(1870));
const errors = __importStar(__webpack_require__(9958));
const util = __importStar(__webpack_require__(2879));
const _parse = (_Err) => (schema, value, _ctx, _params) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
        throw new core.$ZodAsyncError();
    }
    if (result.issues.length) {
        const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())));
        util.captureStackTrace(e, _params?.callee);
        throw e;
    }
    return result.value;
};
exports._parse = _parse;
exports.parse = (0, exports._parse)(errors.$ZodRealError);
const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
        result = await result;
    if (result.issues.length) {
        const e = new (params?.Err ?? _Err)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())));
        util.captureStackTrace(e, params?.callee);
        throw e;
    }
    return result.value;
};
exports._parseAsync = _parseAsync;
exports.parseAsync = (0, exports._parseAsync)(errors.$ZodRealError);
const _safeParse = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
        throw new core.$ZodAsyncError();
    }
    return result.issues.length
        ? {
            success: false,
            error: new (_Err ?? errors.$ZodError)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))),
        }
        : { success: true, data: result.value };
};
exports._safeParse = _safeParse;
exports.safeParse = (0, exports._safeParse)(errors.$ZodRealError);
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
        result = await result;
    return result.issues.length
        ? {
            success: false,
            error: new _Err(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))),
        }
        : { success: true, data: result.value };
};
exports._safeParseAsync = _safeParseAsync;
exports.safeParseAsync = (0, exports._safeParseAsync)(errors.$ZodRealError);
const _encode = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
    return (0, exports._parse)(_Err)(schema, value, ctx);
};
exports._encode = _encode;
exports.encode = (0, exports._encode)(errors.$ZodRealError);
const _decode = (_Err) => (schema, value, _ctx) => {
    return (0, exports._parse)(_Err)(schema, value, _ctx);
};
exports._decode = _decode;
exports.decode = (0, exports._decode)(errors.$ZodRealError);
const _encodeAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
    return (0, exports._parseAsync)(_Err)(schema, value, ctx);
};
exports._encodeAsync = _encodeAsync;
exports.encodeAsync = (0, exports._encodeAsync)(errors.$ZodRealError);
const _decodeAsync = (_Err) => async (schema, value, _ctx) => {
    return (0, exports._parseAsync)(_Err)(schema, value, _ctx);
};
exports._decodeAsync = _decodeAsync;
exports.decodeAsync = (0, exports._decodeAsync)(errors.$ZodRealError);
const _safeEncode = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
    return (0, exports._safeParse)(_Err)(schema, value, ctx);
};
exports._safeEncode = _safeEncode;
exports.safeEncode = (0, exports._safeEncode)(errors.$ZodRealError);
const _safeDecode = (_Err) => (schema, value, _ctx) => {
    return (0, exports._safeParse)(_Err)(schema, value, _ctx);
};
exports._safeDecode = _safeDecode;
exports.safeDecode = (0, exports._safeDecode)(errors.$ZodRealError);
const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
    return (0, exports._safeParseAsync)(_Err)(schema, value, ctx);
};
exports._safeEncodeAsync = _safeEncodeAsync;
exports.safeEncodeAsync = (0, exports._safeEncodeAsync)(errors.$ZodRealError);
const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
    return (0, exports._safeParseAsync)(_Err)(schema, value, _ctx);
};
exports._safeDecodeAsync = _safeDecodeAsync;
exports.safeDecodeAsync = (0, exports._safeDecodeAsync)(errors.$ZodRealError);


/***/ }),

/***/ 2085:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = 'ffffffff-ffff-ffff-ffff-ffffffffffff';


/***/ }),

/***/ 2246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "àmi", verb: "ní" },
        file: { unit: "bytes", verb: "ní" },
        array: { unit: "nkan", verb: "ní" },
        set: { unit: "nkan", verb: "ní" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "nọ́mbà";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "akopọ";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ẹ̀rọ ìbáwọlé",
        email: "àdírẹ́sì ìmẹ́lì",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "àkókò ISO",
        date: "ọjọ́ ISO",
        time: "àkókò ISO",
        duration: "àkókò tó pé ISO",
        ipv4: "àdírẹ́sì IPv4",
        ipv6: "àdírẹ́sì IPv6",
        cidrv4: "àgbègbè IPv4",
        cidrv6: "àgbègbè IPv6",
        base64: "ọ̀rọ̀ tí a kọ́ ní base64",
        base64url: "ọ̀rọ̀ base64url",
        json_string: "ọ̀rọ̀ JSON",
        e164: "nọ́mbà E.164",
        jwt: "JWT",
        template_literal: "ẹ̀rọ ìbáwọlé",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ìbáwọlé aṣìṣe: a ní láti fi ${issue.expected}, àmọ̀ a rí ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ìbáwọlé aṣìṣe: a ní láti fi ${util.stringifyPrimitive(issue.values[0])}`;
                return `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Tó pọ̀ jù: a ní láti jẹ́ pé ${issue.origin ?? "iye"} ${sizing.verb} ${adj}${issue.maximum} ${sizing.unit}`;
                return `Tó pọ̀ jù: a ní láti jẹ́ ${adj}${issue.maximum}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Kéré ju: a ní láti jẹ́ pé ${issue.origin} ${sizing.verb} ${adj}${issue.minimum} ${sizing.unit}`;
                return `Kéré ju: a ní láti jẹ́ ${adj}${issue.minimum}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${_issue.pattern}`;
                return `Aṣìṣe: ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${issue.divisor}`;
            case "unrecognized_keys":
                return `Bọtìnì àìmọ̀: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Bọtìnì aṣìṣe nínú ${issue.origin}`;
            case "invalid_union":
                return "Ìbáwọlé aṣìṣe";
            case "invalid_element":
                return `Iye aṣìṣe nínú ${issue.origin}`;
            default:
                return "Ìbáwọlé aṣìṣe";
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 2266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "توکي", verb: "ولري" },
        file: { unit: "بایټس", verb: "ولري" },
        array: { unit: "توکي", verb: "ولري" },
        set: { unit: "توکي", verb: "ولري" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "عدد";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "ارې";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ورودي",
        email: "بریښنالیک",
        url: "یو آر ال",
        emoji: "ایموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "نیټه او وخت",
        date: "نېټه",
        time: "وخت",
        duration: "موده",
        ipv4: "د IPv4 پته",
        ipv6: "د IPv6 پته",
        cidrv4: "د IPv4 ساحه",
        cidrv6: "د IPv6 ساحه",
        base64: "base64-encoded متن",
        base64url: "base64url-encoded متن",
        json_string: "JSON متن",
        e164: "د E.164 شمېره",
        jwt: "JWT",
        template_literal: "ورودي",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ناسم ورودي: باید ${issue.expected} وای, مګر ${parsedType(issue.input)} ترلاسه شو`;
            case "invalid_value":
                if (issue.values.length === 1) {
                    return `ناسم ورودي: باید ${util.stringifyPrimitive(issue.values[0])} وای`;
                }
                return `ناسم انتخاب: باید یو له ${util.joinValues(issue.values, "|")} څخه وای`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `ډیر لوی: ${issue.origin ?? "ارزښت"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصرونه"} ولري`;
                }
                return `ډیر لوی: ${issue.origin ?? "ارزښت"} باید ${adj}${issue.maximum.toString()} وي`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `ډیر کوچنی: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} ولري`;
                }
                return `ډیر کوچنی: ${issue.origin} باید ${adj}${issue.minimum.toString()} وي`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `ناسم متن: باید د "${_issue.prefix}" سره پیل شي`;
                }
                if (_issue.format === "ends_with") {
                    return `ناسم متن: باید د "${_issue.suffix}" سره پای ته ورسيږي`;
                }
                if (_issue.format === "includes") {
                    return `ناسم متن: باید "${_issue.includes}" ولري`;
                }
                if (_issue.format === "regex") {
                    return `ناسم متن: باید د ${_issue.pattern} سره مطابقت ولري`;
                }
                return `${Nouns[_issue.format] ?? issue.format} ناسم دی`;
            }
            case "not_multiple_of":
                return `ناسم عدد: باید د ${issue.divisor} مضرب وي`;
            case "unrecognized_keys":
                return `ناسم ${issue.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `ناسم کلیډ په ${issue.origin} کې`;
            case "invalid_union":
                return `ناسمه ورودي`;
            case "invalid_element":
                return `ناسم عنصر په ${issue.origin} کې`;
            default:
                return `ناسمه ورودي`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 2369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JSONSchemaGenerator = void 0;
exports.toJSONSchema = toJSONSchema;
const registries_js_1 = __webpack_require__(9766);
const util_js_1 = __webpack_require__(2879);
class JSONSchemaGenerator {
    constructor(params) {
        this.counter = 0;
        this.metadataRegistry = params?.metadata ?? registries_js_1.globalRegistry;
        this.target = params?.target ?? "draft-2020-12";
        this.unrepresentable = params?.unrepresentable ?? "throw";
        this.override = params?.override ?? (() => { });
        this.io = params?.io ?? "output";
        this.seen = new Map();
    }
    process(schema, _params = { path: [], schemaPath: [] }) {
        var _a;
        const def = schema._zod.def;
        const formatMap = {
            guid: "uuid",
            url: "uri",
            datetime: "date-time",
            json_string: "json-string",
            regex: "", // do not set
        };
        // check for schema in seens
        const seen = this.seen.get(schema);
        if (seen) {
            seen.count++;
            // check if cycle
            const isCycle = _params.schemaPath.includes(schema);
            if (isCycle) {
                seen.cycle = _params.path;
            }
            return seen.schema;
        }
        // initialize
        const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
        this.seen.set(schema, result);
        // custom method overrides default behavior
        const overrideSchema = schema._zod.toJSONSchema?.();
        if (overrideSchema) {
            result.schema = overrideSchema;
        }
        else {
            const params = {
                ..._params,
                schemaPath: [..._params.schemaPath, schema],
                path: _params.path,
            };
            const parent = schema._zod.parent;
            if (parent) {
                // schema was cloned from another schema
                result.ref = parent;
                this.process(parent, params);
                this.seen.get(parent).isParent = true;
            }
            else {
                const _json = result.schema;
                switch (def.type) {
                    case "string": {
                        const json = _json;
                        json.type = "string";
                        const { minimum, maximum, format, patterns, contentEncoding } = schema._zod
                            .bag;
                        if (typeof minimum === "number")
                            json.minLength = minimum;
                        if (typeof maximum === "number")
                            json.maxLength = maximum;
                        // custom pattern overrides format
                        if (format) {
                            json.format = formatMap[format] ?? format;
                            if (json.format === "")
                                delete json.format; // empty format is not valid
                        }
                        if (contentEncoding)
                            json.contentEncoding = contentEncoding;
                        if (patterns && patterns.size > 0) {
                            const regexes = [...patterns];
                            if (regexes.length === 1)
                                json.pattern = regexes[0].source;
                            else if (regexes.length > 1) {
                                result.schema.allOf = [
                                    ...regexes.map((regex) => ({
                                        ...(this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0"
                                            ? { type: "string" }
                                            : {}),
                                        pattern: regex.source,
                                    })),
                                ];
                            }
                        }
                        break;
                    }
                    case "number": {
                        const json = _json;
                        const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
                        if (typeof format === "string" && format.includes("int"))
                            json.type = "integer";
                        else
                            json.type = "number";
                        if (typeof exclusiveMinimum === "number") {
                            if (this.target === "draft-4" || this.target === "openapi-3.0") {
                                json.minimum = exclusiveMinimum;
                                json.exclusiveMinimum = true;
                            }
                            else {
                                json.exclusiveMinimum = exclusiveMinimum;
                            }
                        }
                        if (typeof minimum === "number") {
                            json.minimum = minimum;
                            if (typeof exclusiveMinimum === "number" && this.target !== "draft-4") {
                                if (exclusiveMinimum >= minimum)
                                    delete json.minimum;
                                else
                                    delete json.exclusiveMinimum;
                            }
                        }
                        if (typeof exclusiveMaximum === "number") {
                            if (this.target === "draft-4" || this.target === "openapi-3.0") {
                                json.maximum = exclusiveMaximum;
                                json.exclusiveMaximum = true;
                            }
                            else {
                                json.exclusiveMaximum = exclusiveMaximum;
                            }
                        }
                        if (typeof maximum === "number") {
                            json.maximum = maximum;
                            if (typeof exclusiveMaximum === "number" && this.target !== "draft-4") {
                                if (exclusiveMaximum <= maximum)
                                    delete json.maximum;
                                else
                                    delete json.exclusiveMaximum;
                            }
                        }
                        if (typeof multipleOf === "number")
                            json.multipleOf = multipleOf;
                        break;
                    }
                    case "boolean": {
                        const json = _json;
                        json.type = "boolean";
                        break;
                    }
                    case "bigint": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("BigInt cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "symbol": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Symbols cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "null": {
                        if (this.target === "openapi-3.0") {
                            _json.type = "string";
                            _json.nullable = true;
                            _json.enum = [null];
                        }
                        else
                            _json.type = "null";
                        break;
                    }
                    case "any": {
                        break;
                    }
                    case "unknown": {
                        break;
                    }
                    case "undefined": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Undefined cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "void": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Void cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "never": {
                        _json.not = {};
                        break;
                    }
                    case "date": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Date cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "array": {
                        const json = _json;
                        const { minimum, maximum } = schema._zod.bag;
                        if (typeof minimum === "number")
                            json.minItems = minimum;
                        if (typeof maximum === "number")
                            json.maxItems = maximum;
                        json.type = "array";
                        json.items = this.process(def.element, { ...params, path: [...params.path, "items"] });
                        break;
                    }
                    case "object": {
                        const json = _json;
                        json.type = "object";
                        json.properties = {};
                        const shape = def.shape; // params.shapeCache.get(schema)!;
                        for (const key in shape) {
                            json.properties[key] = this.process(shape[key], {
                                ...params,
                                path: [...params.path, "properties", key],
                            });
                        }
                        // required keys
                        const allKeys = new Set(Object.keys(shape));
                        // const optionalKeys = new Set(def.optional);
                        const requiredKeys = new Set([...allKeys].filter((key) => {
                            const v = def.shape[key]._zod;
                            if (this.io === "input") {
                                return v.optin === undefined;
                            }
                            else {
                                return v.optout === undefined;
                            }
                        }));
                        if (requiredKeys.size > 0) {
                            json.required = Array.from(requiredKeys);
                        }
                        // catchall
                        if (def.catchall?._zod.def.type === "never") {
                            // strict
                            json.additionalProperties = false;
                        }
                        else if (!def.catchall) {
                            // regular
                            if (this.io === "output")
                                json.additionalProperties = false;
                        }
                        else if (def.catchall) {
                            json.additionalProperties = this.process(def.catchall, {
                                ...params,
                                path: [...params.path, "additionalProperties"],
                            });
                        }
                        break;
                    }
                    case "union": {
                        const json = _json;
                        const options = def.options.map((x, i) => this.process(x, {
                            ...params,
                            path: [...params.path, "anyOf", i],
                        }));
                        json.anyOf = options;
                        break;
                    }
                    case "intersection": {
                        const json = _json;
                        const a = this.process(def.left, {
                            ...params,
                            path: [...params.path, "allOf", 0],
                        });
                        const b = this.process(def.right, {
                            ...params,
                            path: [...params.path, "allOf", 1],
                        });
                        const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
                        const allOf = [
                            ...(isSimpleIntersection(a) ? a.allOf : [a]),
                            ...(isSimpleIntersection(b) ? b.allOf : [b]),
                        ];
                        json.allOf = allOf;
                        break;
                    }
                    case "tuple": {
                        const json = _json;
                        json.type = "array";
                        const prefixPath = this.target === "draft-2020-12" ? "prefixItems" : "items";
                        const restPath = this.target === "draft-2020-12" ? "items" : this.target === "openapi-3.0" ? "items" : "additionalItems";
                        const prefixItems = def.items.map((x, i) => this.process(x, {
                            ...params,
                            path: [...params.path, prefixPath, i],
                        }));
                        const rest = def.rest
                            ? this.process(def.rest, {
                                ...params,
                                path: [...params.path, restPath, ...(this.target === "openapi-3.0" ? [def.items.length] : [])],
                            })
                            : null;
                        if (this.target === "draft-2020-12") {
                            json.prefixItems = prefixItems;
                            if (rest) {
                                json.items = rest;
                            }
                        }
                        else if (this.target === "openapi-3.0") {
                            json.items = {
                                anyOf: prefixItems,
                            };
                            if (rest) {
                                json.items.anyOf.push(rest);
                            }
                            json.minItems = prefixItems.length;
                            if (!rest) {
                                json.maxItems = prefixItems.length;
                            }
                        }
                        else {
                            json.items = prefixItems;
                            if (rest) {
                                json.additionalItems = rest;
                            }
                        }
                        // length
                        const { minimum, maximum } = schema._zod.bag;
                        if (typeof minimum === "number")
                            json.minItems = minimum;
                        if (typeof maximum === "number")
                            json.maxItems = maximum;
                        break;
                    }
                    case "record": {
                        const json = _json;
                        json.type = "object";
                        if (this.target === "draft-7" || this.target === "draft-2020-12") {
                            json.propertyNames = this.process(def.keyType, {
                                ...params,
                                path: [...params.path, "propertyNames"],
                            });
                        }
                        json.additionalProperties = this.process(def.valueType, {
                            ...params,
                            path: [...params.path, "additionalProperties"],
                        });
                        break;
                    }
                    case "map": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Map cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "set": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Set cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "enum": {
                        const json = _json;
                        const values = (0, util_js_1.getEnumValues)(def.entries);
                        // Number enums can have both string and number values
                        if (values.every((v) => typeof v === "number"))
                            json.type = "number";
                        if (values.every((v) => typeof v === "string"))
                            json.type = "string";
                        json.enum = values;
                        break;
                    }
                    case "literal": {
                        const json = _json;
                        const vals = [];
                        for (const val of def.values) {
                            if (val === undefined) {
                                if (this.unrepresentable === "throw") {
                                    throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                                }
                                else {
                                    // do not add to vals
                                }
                            }
                            else if (typeof val === "bigint") {
                                if (this.unrepresentable === "throw") {
                                    throw new Error("BigInt literals cannot be represented in JSON Schema");
                                }
                                else {
                                    vals.push(Number(val));
                                }
                            }
                            else {
                                vals.push(val);
                            }
                        }
                        if (vals.length === 0) {
                            // do nothing (an undefined literal was stripped)
                        }
                        else if (vals.length === 1) {
                            const val = vals[0];
                            json.type = val === null ? "null" : typeof val;
                            if (this.target === "draft-4" || this.target === "openapi-3.0") {
                                json.enum = [val];
                            }
                            else {
                                json.const = val;
                            }
                        }
                        else {
                            if (vals.every((v) => typeof v === "number"))
                                json.type = "number";
                            if (vals.every((v) => typeof v === "string"))
                                json.type = "string";
                            if (vals.every((v) => typeof v === "boolean"))
                                json.type = "string";
                            if (vals.every((v) => v === null))
                                json.type = "null";
                            json.enum = vals;
                        }
                        break;
                    }
                    case "file": {
                        const json = _json;
                        const file = {
                            type: "string",
                            format: "binary",
                            contentEncoding: "binary",
                        };
                        const { minimum, maximum, mime } = schema._zod.bag;
                        if (minimum !== undefined)
                            file.minLength = minimum;
                        if (maximum !== undefined)
                            file.maxLength = maximum;
                        if (mime) {
                            if (mime.length === 1) {
                                file.contentMediaType = mime[0];
                                Object.assign(json, file);
                            }
                            else {
                                json.anyOf = mime.map((m) => {
                                    const mFile = { ...file, contentMediaType: m };
                                    return mFile;
                                });
                            }
                        }
                        else {
                            Object.assign(json, file);
                        }
                        // if (this.unrepresentable === "throw") {
                        //   throw new Error("File cannot be represented in JSON Schema");
                        // }
                        break;
                    }
                    case "transform": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Transforms cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "nullable": {
                        const inner = this.process(def.innerType, params);
                        if (this.target === "openapi-3.0") {
                            result.ref = def.innerType;
                            _json.nullable = true;
                        }
                        else {
                            _json.anyOf = [inner, { type: "null" }];
                        }
                        break;
                    }
                    case "nonoptional": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        break;
                    }
                    case "success": {
                        const json = _json;
                        json.type = "boolean";
                        break;
                    }
                    case "default": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        _json.default = JSON.parse(JSON.stringify(def.defaultValue));
                        break;
                    }
                    case "prefault": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        if (this.io === "input")
                            _json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
                        break;
                    }
                    case "catch": {
                        // use conditionals
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        let catchValue;
                        try {
                            catchValue = def.catchValue(undefined);
                        }
                        catch {
                            throw new Error("Dynamic catch values are not supported in JSON Schema");
                        }
                        _json.default = catchValue;
                        break;
                    }
                    case "nan": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("NaN cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "template_literal": {
                        const json = _json;
                        const pattern = schema._zod.pattern;
                        if (!pattern)
                            throw new Error("Pattern not found in template literal");
                        json.type = "string";
                        json.pattern = pattern.source;
                        break;
                    }
                    case "pipe": {
                        const innerType = this.io === "input" ? (def.in._zod.def.type === "transform" ? def.out : def.in) : def.out;
                        this.process(innerType, params);
                        result.ref = innerType;
                        break;
                    }
                    case "readonly": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        _json.readOnly = true;
                        break;
                    }
                    // passthrough types
                    case "promise": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        break;
                    }
                    case "optional": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        break;
                    }
                    case "lazy": {
                        const innerType = schema._zod.innerType;
                        this.process(innerType, params);
                        result.ref = innerType;
                        break;
                    }
                    case "custom": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Custom types cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "function": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Function types cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    default: {
                        def;
                    }
                }
            }
        }
        // metadata
        const meta = this.metadataRegistry.get(schema);
        if (meta)
            Object.assign(result.schema, meta);
        if (this.io === "input" && isTransforming(schema)) {
            // examples/defaults only apply to output type of pipe
            delete result.schema.examples;
            delete result.schema.default;
        }
        // set prefault as default
        if (this.io === "input" && result.schema._prefault)
            (_a = result.schema).default ?? (_a.default = result.schema._prefault);
        delete result.schema._prefault;
        // pulling fresh from this.seen in case it was overwritten
        const _result = this.seen.get(schema);
        return _result.schema;
    }
    emit(schema, _params) {
        const params = {
            cycles: _params?.cycles ?? "ref",
            reused: _params?.reused ?? "inline",
            // unrepresentable: _params?.unrepresentable ?? "throw",
            // uri: _params?.uri ?? ((id) => `${id}`),
            external: _params?.external ?? undefined,
        };
        // iterate over seen map;
        const root = this.seen.get(schema);
        if (!root)
            throw new Error("Unprocessed schema. This is a bug in Zod.");
        // initialize result with root schema fields
        // Object.assign(result, seen.cached);
        // returns a ref to the schema
        // defId will be empty if the ref points to an external schema (or #)
        const makeURI = (entry) => {
            // comparing the seen objects because sometimes
            // multiple schemas map to the same seen object.
            // e.g. lazy
            // external is configured
            const defsSegment = this.target === "draft-2020-12" ? "$defs" : "definitions";
            if (params.external) {
                const externalId = params.external.registry.get(entry[0])?.id; // ?? "__shared";// `__schema${this.counter++}`;
                // check if schema is in the external registry
                const uriGenerator = params.external.uri ?? ((id) => id);
                if (externalId) {
                    return { ref: uriGenerator(externalId) };
                }
                // otherwise, add to __shared
                const id = entry[1].defId ?? entry[1].schema.id ?? `schema${this.counter++}`;
                entry[1].defId = id; // set defId so it will be reused if needed
                return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
            }
            if (entry[1] === root) {
                return { ref: "#" };
            }
            // self-contained schema
            const uriPrefix = `#`;
            const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
            const defId = entry[1].schema.id ?? `__schema${this.counter++}`;
            return { defId, ref: defUriPrefix + defId };
        };
        // stored cached version in `def` property
        // remove all properties, set $ref
        const extractToDef = (entry) => {
            // if the schema is already a reference, do not extract it
            if (entry[1].schema.$ref) {
                return;
            }
            const seen = entry[1];
            const { ref, defId } = makeURI(entry);
            seen.def = { ...seen.schema };
            // defId won't be set if the schema is a reference to an external schema
            if (defId)
                seen.defId = defId;
            // wipe away all properties except $ref
            const schema = seen.schema;
            for (const key in schema) {
                delete schema[key];
            }
            schema.$ref = ref;
        };
        // throw on cycles
        // break cycles
        if (params.cycles === "throw") {
            for (const entry of this.seen.entries()) {
                const seen = entry[1];
                if (seen.cycle) {
                    throw new Error("Cycle detected: " +
                        `#/${seen.cycle?.join("/")}/<root>` +
                        '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
                }
            }
        }
        // extract schemas into $defs
        for (const entry of this.seen.entries()) {
            const seen = entry[1];
            // convert root schema to # $ref
            if (schema === entry[0]) {
                extractToDef(entry); // this has special handling for the root schema
                continue;
            }
            // extract schemas that are in the external registry
            if (params.external) {
                const ext = params.external.registry.get(entry[0])?.id;
                if (schema !== entry[0] && ext) {
                    extractToDef(entry);
                    continue;
                }
            }
            // extract schemas with `id` meta
            const id = this.metadataRegistry.get(entry[0])?.id;
            if (id) {
                extractToDef(entry);
                continue;
            }
            // break cycles
            if (seen.cycle) {
                // any
                extractToDef(entry);
                continue;
            }
            // extract reused schemas
            if (seen.count > 1) {
                if (params.reused === "ref") {
                    extractToDef(entry);
                    // biome-ignore lint:
                    continue;
                }
            }
        }
        // flatten _refs
        const flattenRef = (zodSchema, params) => {
            const seen = this.seen.get(zodSchema);
            const schema = seen.def ?? seen.schema;
            const _cached = { ...schema };
            // already seen
            if (seen.ref === null) {
                return;
            }
            // flatten ref if defined
            const ref = seen.ref;
            seen.ref = null; // prevent recursion
            if (ref) {
                flattenRef(ref, params);
                // merge referenced schema into current
                const refSchema = this.seen.get(ref).schema;
                if (refSchema.$ref &&
                    (params.target === "draft-7" || params.target === "draft-4" || params.target === "openapi-3.0")) {
                    schema.allOf = schema.allOf ?? [];
                    schema.allOf.push(refSchema);
                }
                else {
                    Object.assign(schema, refSchema);
                    Object.assign(schema, _cached); // prevent overwriting any fields in the original schema
                }
            }
            // execute overrides
            if (!seen.isParent)
                this.override({
                    zodSchema: zodSchema,
                    jsonSchema: schema,
                    path: seen.path ?? [],
                });
        };
        for (const entry of [...this.seen.entries()].reverse()) {
            flattenRef(entry[0], { target: this.target });
        }
        const result = {};
        if (this.target === "draft-2020-12") {
            result.$schema = "https://json-schema.org/draft/2020-12/schema";
        }
        else if (this.target === "draft-7") {
            result.$schema = "http://json-schema.org/draft-07/schema#";
        }
        else if (this.target === "draft-4") {
            result.$schema = "http://json-schema.org/draft-04/schema#";
        }
        else if (this.target === "openapi-3.0") {
            // OpenAPI 3.0 schema objects should not include a $schema property
        }
        else {
            // @ts-ignore
            console.warn(`Invalid target: ${this.target}`);
        }
        if (params.external?.uri) {
            const id = params.external.registry.get(schema)?.id;
            if (!id)
                throw new Error("Schema is missing an `id` property");
            result.$id = params.external.uri(id);
        }
        Object.assign(result, root.def);
        // build defs object
        const defs = params.external?.defs ?? {};
        for (const entry of this.seen.entries()) {
            const seen = entry[1];
            if (seen.def && seen.defId) {
                defs[seen.defId] = seen.def;
            }
        }
        // set definitions in result
        if (params.external) {
        }
        else {
            if (Object.keys(defs).length > 0) {
                if (this.target === "draft-2020-12") {
                    result.$defs = defs;
                }
                else {
                    result.definitions = defs;
                }
            }
        }
        try {
            // this "finalizes" this schema and ensures all cycles are removed
            // each call to .emit() is functionally independent
            // though the seen map is shared
            return JSON.parse(JSON.stringify(result));
        }
        catch (_err) {
            throw new Error("Error converting schema to JSON.");
        }
    }
}
exports.JSONSchemaGenerator = JSONSchemaGenerator;
function toJSONSchema(input, _params) {
    if (input instanceof registries_js_1.$ZodRegistry) {
        const gen = new JSONSchemaGenerator(_params);
        const defs = {};
        for (const entry of input._idmap.entries()) {
            const [_, schema] = entry;
            gen.process(schema);
        }
        const schemas = {};
        const external = {
            registry: input,
            uri: _params?.uri,
            defs,
        };
        for (const entry of input._idmap.entries()) {
            const [key, schema] = entry;
            schemas[key] = gen.emit(schema, {
                ..._params,
                external,
            });
        }
        if (Object.keys(defs).length > 0) {
            const defsSegment = gen.target === "draft-2020-12" ? "$defs" : "definitions";
            schemas.__shared = {
                [defsSegment]: defs,
            };
        }
        return { schemas };
    }
    const gen = new JSONSchemaGenerator(_params);
    gen.process(input);
    return gen.emit(input, _params);
}
function isTransforming(_schema, _ctx) {
    const ctx = _ctx ?? { seen: new Set() };
    if (ctx.seen.has(_schema))
        return false;
    ctx.seen.add(_schema);
    const schema = _schema;
    const def = schema._zod.def;
    switch (def.type) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "date":
        case "symbol":
        case "undefined":
        case "null":
        case "any":
        case "unknown":
        case "never":
        case "void":
        case "literal":
        case "enum":
        case "nan":
        case "file":
        case "template_literal":
            return false;
        case "array": {
            return isTransforming(def.element, ctx);
        }
        case "object": {
            for (const key in def.shape) {
                if (isTransforming(def.shape[key], ctx))
                    return true;
            }
            return false;
        }
        case "union": {
            for (const option of def.options) {
                if (isTransforming(option, ctx))
                    return true;
            }
            return false;
        }
        case "intersection": {
            return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
        }
        case "tuple": {
            for (const item of def.items) {
                if (isTransforming(item, ctx))
                    return true;
            }
            if (def.rest && isTransforming(def.rest, ctx))
                return true;
            return false;
        }
        case "record": {
            return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
        }
        case "map": {
            return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
        }
        case "set": {
            return isTransforming(def.valueType, ctx);
        }
        // inner types
        case "promise":
        case "optional":
        case "nonoptional":
        case "nullable":
        case "readonly":
            return isTransforming(def.innerType, ctx);
        case "lazy":
            return isTransforming(def.getter(), ctx);
        case "default": {
            return isTransforming(def.innerType, ctx);
        }
        case "prefault": {
            return isTransforming(def.innerType, ctx);
        }
        case "custom": {
            return false;
        }
        case "transform": {
            return true;
        }
        case "pipe": {
            return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
        }
        case "success": {
            return false;
        }
        case "catch": {
            return false;
        }
        case "function": {
            return false;
        }
        default:
            def;
    }
    throw new Error(`Unknown schema type: ${def.type}`);
}


/***/ }),

/***/ 2446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "merkkiä", subject: "merkkijonon" },
        file: { unit: "tavua", subject: "tiedoston" },
        array: { unit: "alkiota", subject: "listan" },
        set: { unit: "alkiota", subject: "joukon" },
        number: { unit: "", subject: "luvun" },
        bigint: { unit: "", subject: "suuren kokonaisluvun" },
        int: { unit: "", subject: "kokonaisluvun" },
        date: { unit: "", subject: "päivämäärän" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "säännöllinen lauseke",
        email: "sähköpostiosoite",
        url: "URL-osoite",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-aikaleima",
        date: "ISO-päivämäärä",
        time: "ISO-aika",
        duration: "ISO-kesto",
        ipv4: "IPv4-osoite",
        ipv6: "IPv6-osoite",
        cidrv4: "IPv4-alue",
        cidrv6: "IPv6-alue",
        base64: "base64-koodattu merkkijono",
        base64url: "base64url-koodattu merkkijono",
        json_string: "JSON-merkkijono",
        e164: "E.164-luku",
        jwt: "JWT",
        template_literal: "templaattimerkkijono",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Virheellinen tyyppi: odotettiin ${issue.expected}, oli ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Virheellinen syöte: täytyy olla ${util.stringifyPrimitive(issue.values[0])}`;
                return `Virheellinen valinta: täytyy olla yksi seuraavista: ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Liian suuri: ${sizing.subject} täytyy olla ${adj}${issue.maximum.toString()} ${sizing.unit}`.trim();
                }
                return `Liian suuri: arvon täytyy olla ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Liian pieni: ${sizing.subject} täytyy olla ${adj}${issue.minimum.toString()} ${sizing.unit}`.trim();
                }
                return `Liian pieni: arvon täytyy olla ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Virheellinen syöte: täytyy alkaa "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Virheellinen syöte: täytyy loppua "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Virheellinen syöte: täytyy sisältää "${_issue.includes}"`;
                if (_issue.format === "regex") {
                    return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_issue.pattern}`;
                }
                return `Virheellinen ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Virheellinen luku: täytyy olla luvun ${issue.divisor} monikerta`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return "Virheellinen avain tietueessa";
            case "invalid_union":
                return "Virheellinen unioni";
            case "invalid_element":
                return "Virheellinen arvo joukossa";
            default:
                return `Virheellinen syöte`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 2577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "aksara", verb: "mempunyai" },
        file: { unit: "bait", verb: "mempunyai" },
        array: { unit: "elemen", verb: "mempunyai" },
        set: { unit: "elemen", verb: "mempunyai" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "nombor";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "alamat e-mel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tarikh masa ISO",
        date: "tarikh ISO",
        time: "masa ISO",
        duration: "tempoh ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "julat IPv4",
        cidrv6: "julat IPv6",
        base64: "string dikodkan base64",
        base64url: "string dikodkan base64url",
        json_string: "string JSON",
        e164: "nombor E.164",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Input tidak sah: dijangka ${issue.expected}, diterima ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Input tidak sah: dijangka ${util.stringifyPrimitive(issue.values[0])}`;
                return `Pilihan tidak sah: dijangka salah satu daripada ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Terlalu besar: dijangka ${issue.origin ?? "nilai"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elemen"}`;
                return `Terlalu besar: dijangka ${issue.origin ?? "nilai"} adalah ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Terlalu kecil: dijangka ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Terlalu kecil: dijangka ${issue.origin} adalah ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} tidak sah`;
            }
            case "not_multiple_of":
                return `Nombor tidak sah: perlu gandaan ${issue.divisor}`;
            case "unrecognized_keys":
                return `Kunci tidak dikenali: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Kunci tidak sah dalam ${issue.origin}`;
            case "invalid_union":
                return "Input tidak sah";
            case "invalid_element":
                return `Nilai tidak sah dalam ${issue.origin}`;
            default:
                return `Input tidak sah`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 2621:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const regex_js_1 = __webpack_require__(840);
function validate(uuid) {
    return typeof uuid === 'string' && regex_js_1.default.test(uuid);
}
exports["default"] = validate;


/***/ }),

/***/ 2791:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createWalkinSchema = void 0;
const zod_1 = __webpack_require__(5884);
exports.createWalkinSchema = zod_1.z.object({
    locationId: zod_1.z.string().uuid('Location ID must be a valid UUID'),
    customerId: zod_1.z.string().uuid('Customer ID must be a valid UUID'),
    serviceId: zod_1.z.string().uuid('Service ID must be a valid UUID'),
    notes: zod_1.z.string().optional(),
});


/***/ }),

/***/ 2794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BOOKINGS_TABLE = exports.WALKINS_TABLE = exports.docClient = void 0;
const client_dynamodb_1 = __webpack_require__(4671);
const lib_dynamodb_1 = __webpack_require__(3489);
const client = new client_dynamodb_1.DynamoDBClient({ region: process.env.CUSTOM_AWS_REGION });
exports.docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
exports.WALKINS_TABLE = process.env.DYNAMODB_WALKINS_TABLE;
exports.BOOKINGS_TABLE = process.env.DYNAMODB_BOOKINGS_TABLE;


/***/ }),

/***/ 2847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "문자", verb: "to have" },
        file: { unit: "바이트", verb: "to have" },
        array: { unit: "개", verb: "to have" },
        set: { unit: "개", verb: "to have" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "입력",
        email: "이메일 주소",
        url: "URL",
        emoji: "이모지",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 날짜시간",
        date: "ISO 날짜",
        time: "ISO 시간",
        duration: "ISO 기간",
        ipv4: "IPv4 주소",
        ipv6: "IPv6 주소",
        cidrv4: "IPv4 범위",
        cidrv6: "IPv6 범위",
        base64: "base64 인코딩 문자열",
        base64url: "base64url 인코딩 문자열",
        json_string: "JSON 문자열",
        e164: "E.164 번호",
        jwt: "JWT",
        template_literal: "입력",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `잘못된 입력: 예상 타입은 ${issue.expected}, 받은 타입은 ${parsedType(issue.input)}입니다`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `잘못된 입력: 값은 ${util.stringifyPrimitive(issue.values[0])} 이어야 합니다`;
                return `잘못된 옵션: ${util.joinValues(issue.values, "또는 ")} 중 하나여야 합니다`;
            case "too_big": {
                const adj = issue.inclusive ? "이하" : "미만";
                const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
                const sizing = getSizing(issue.origin);
                const unit = sizing?.unit ?? "요소";
                if (sizing)
                    return `${issue.origin ?? "값"}이 너무 큽니다: ${issue.maximum.toString()}${unit} ${adj}${suffix}`;
                return `${issue.origin ?? "값"}이 너무 큽니다: ${issue.maximum.toString()} ${adj}${suffix}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "이상" : "초과";
                const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
                const sizing = getSizing(issue.origin);
                const unit = sizing?.unit ?? "요소";
                if (sizing) {
                    return `${issue.origin ?? "값"}이 너무 작습니다: ${issue.minimum.toString()}${unit} ${adj}${suffix}`;
                }
                return `${issue.origin ?? "값"}이 너무 작습니다: ${issue.minimum.toString()} ${adj}${suffix}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `잘못된 문자열: "${_issue.prefix}"(으)로 시작해야 합니다`;
                }
                if (_issue.format === "ends_with")
                    return `잘못된 문자열: "${_issue.suffix}"(으)로 끝나야 합니다`;
                if (_issue.format === "includes")
                    return `잘못된 문자열: "${_issue.includes}"을(를) 포함해야 합니다`;
                if (_issue.format === "regex")
                    return `잘못된 문자열: 정규식 ${_issue.pattern} 패턴과 일치해야 합니다`;
                return `잘못된 ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `잘못된 숫자: ${issue.divisor}의 배수여야 합니다`;
            case "unrecognized_keys":
                return `인식할 수 없는 키: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `잘못된 키: ${issue.origin}`;
            case "invalid_union":
                return `잘못된 입력`;
            case "invalid_element":
                return `잘못된 값: ${issue.origin}`;
            default:
                return `잘못된 입력`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 2879:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Class = exports.BIGINT_FORMAT_RANGES = exports.NUMBER_FORMAT_RANGES = exports.primitiveTypes = exports.propertyKeyTypes = exports.getParsedType = exports.allowsEval = exports.captureStackTrace = void 0;
exports.assertEqual = assertEqual;
exports.assertNotEqual = assertNotEqual;
exports.assertIs = assertIs;
exports.assertNever = assertNever;
exports.assert = assert;
exports.getEnumValues = getEnumValues;
exports.joinValues = joinValues;
exports.jsonStringifyReplacer = jsonStringifyReplacer;
exports.cached = cached;
exports.nullish = nullish;
exports.cleanRegex = cleanRegex;
exports.floatSafeRemainder = floatSafeRemainder;
exports.defineLazy = defineLazy;
exports.objectClone = objectClone;
exports.assignProp = assignProp;
exports.mergeDefs = mergeDefs;
exports.cloneDef = cloneDef;
exports.getElementAtPath = getElementAtPath;
exports.promiseAllObject = promiseAllObject;
exports.randomString = randomString;
exports.esc = esc;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.shallowClone = shallowClone;
exports.numKeys = numKeys;
exports.escapeRegex = escapeRegex;
exports.clone = clone;
exports.normalizeParams = normalizeParams;
exports.createTransparentProxy = createTransparentProxy;
exports.stringifyPrimitive = stringifyPrimitive;
exports.optionalKeys = optionalKeys;
exports.pick = pick;
exports.omit = omit;
exports.extend = extend;
exports.safeExtend = safeExtend;
exports.merge = merge;
exports.partial = partial;
exports.required = required;
exports.aborted = aborted;
exports.prefixIssues = prefixIssues;
exports.unwrapMessage = unwrapMessage;
exports.finalizeIssue = finalizeIssue;
exports.getSizableOrigin = getSizableOrigin;
exports.getLengthableOrigin = getLengthableOrigin;
exports.issue = issue;
exports.cleanEnum = cleanEnum;
exports.base64ToUint8Array = base64ToUint8Array;
exports.uint8ArrayToBase64 = uint8ArrayToBase64;
exports.base64urlToUint8Array = base64urlToUint8Array;
exports.uint8ArrayToBase64url = uint8ArrayToBase64url;
exports.hexToUint8Array = hexToUint8Array;
exports.uint8ArrayToHex = uint8ArrayToHex;
// functions
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function assertIs(_arg) { }
function assertNever(_x) {
    throw new Error();
}
function assert(_) { }
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v) => typeof v === "number");
    const values = Object.entries(entries)
        .filter(([k, _]) => numericValues.indexOf(+k) === -1)
        .map(([_, v]) => v);
    return values;
}
function joinValues(array, separator = "|") {
    return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint")
        return value.toString();
    return value;
}
function cached(getter) {
    const set = false;
    return {
        get value() {
            if (!set) {
                const value = getter();
                Object.defineProperty(this, "value", { value });
                return value;
            }
            throw new Error("cached value already set");
        },
    };
}
function nullish(input) {
    return input === null || input === undefined;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepString = step.toString();
    let stepDecCount = (stepString.split(".")[1] || "").length;
    if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
        const match = stepString.match(/\d?e-(\d?)/);
        if (match?.[1]) {
            stepDecCount = Number.parseInt(match[1]);
        }
    }
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / 10 ** decCount;
}
const EVALUATING = Symbol("evaluating");
function defineLazy(object, key, getter) {
    let value = undefined;
    Object.defineProperty(object, key, {
        get() {
            if (value === EVALUATING) {
                // Circular reference detected, return undefined to break the cycle
                return undefined;
            }
            if (value === undefined) {
                value = EVALUATING;
                value = getter();
            }
            return value;
        },
        set(v) {
            Object.defineProperty(object, key, {
                value: v,
                // configurable: true,
            });
            // object[key] = v;
        },
        configurable: true,
    });
}
function objectClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
    });
}
function mergeDefs(...defs) {
    const mergedDescriptors = {};
    for (const def of defs) {
        const descriptors = Object.getOwnPropertyDescriptors(def);
        Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
    return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
    if (!path)
        return obj;
    return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key) => promisesObj[key]);
    return Promise.all(promises).then((results) => {
        const resolvedObj = {};
        for (let i = 0; i < keys.length; i++) {
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
exports.captureStackTrace = ("captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => { });
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
exports.allowsEval = cached(() => {
    // @ts-ignore
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    }
    catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (isObject(o) === false)
        return false;
    // modified constructor
    const ctor = o.constructor;
    if (ctor === undefined)
        return true;
    // modified prototype
    const prot = ctor.prototype;
    if (isObject(prot) === false)
        return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function shallowClone(o) {
    if (isPlainObject(o))
        return { ...o };
    return o;
}
function numKeys(data) {
    let keyCount = 0;
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            // @ts-ignore
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error(`Unknown data type: ${t}`);
    }
};
exports.getParsedType = getParsedType;
exports.propertyKeyTypes = new Set(["string", "number", "symbol"]);
exports.primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// zod-specific utils
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent)
        cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params)
        return {};
    if (typeof params === "string")
        return { error: () => params };
    if (params?.message !== undefined) {
        if (params?.error !== undefined)
            throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string")
        return { ...params, error: () => params.error };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get(_, prop, receiver) {
            target ?? (target = getter());
            return Reflect.get(target, prop, receiver);
        },
        set(_, prop, value, receiver) {
            target ?? (target = getter());
            return Reflect.set(target, prop, value, receiver);
        },
        has(_, prop) {
            target ?? (target = getter());
            return Reflect.has(target, prop);
        },
        deleteProperty(_, prop) {
            target ?? (target = getter());
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys(_) {
            target ?? (target = getter());
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor(_, prop) {
            target ?? (target = getter());
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty(_, prop, descriptor) {
            target ?? (target = getter());
            return Reflect.defineProperty(target, prop, descriptor);
        },
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint")
        return value.toString() + "n";
    if (typeof value === "string")
        return `"${value}"`;
    return `${value}`;
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k) => {
        return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
    });
}
exports.NUMBER_FORMAT_RANGES = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-3.4028234663852886e38, 3.4028234663852886e38],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
};
exports.BIGINT_FORMAT_RANGES = {
    int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
    uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")],
};
function pick(schema, mask) {
    const currDef = schema._zod.def;
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const newShape = {};
            for (const key in mask) {
                if (!(key in currDef.shape)) {
                    throw new Error(`Unrecognized key: "${key}"`);
                }
                if (!mask[key])
                    continue;
                newShape[key] = currDef.shape[key];
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: [],
    });
    return clone(schema, def);
}
function omit(schema, mask) {
    const currDef = schema._zod.def;
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const newShape = { ...schema._zod.def.shape };
            for (const key in mask) {
                if (!(key in currDef.shape)) {
                    throw new Error(`Unrecognized key: "${key}"`);
                }
                if (!mask[key])
                    continue;
                delete newShape[key];
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: [],
    });
    return clone(schema, def);
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const checks = schema._zod.def.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const _shape = { ...schema._zod.def.shape, ...shape };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        checks: [],
    });
    return clone(schema, def);
}
function safeExtend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to safeExtend: expected a plain object");
    }
    const def = {
        ...schema._zod.def,
        get shape() {
            const _shape = { ...schema._zod.def.shape, ...shape };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        checks: schema._zod.def.checks,
    };
    return clone(schema, def);
}
function merge(a, b) {
    const def = mergeDefs(a._zod.def, {
        get shape() {
            const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        get catchall() {
            return b._zod.def.catchall;
        },
        checks: [], // delete existing checks
    });
    return clone(a, def);
}
function partial(Class, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const oldShape = schema._zod.def.shape;
            const shape = { ...oldShape };
            if (mask) {
                for (const key in mask) {
                    if (!(key in oldShape)) {
                        throw new Error(`Unrecognized key: "${key}"`);
                    }
                    if (!mask[key])
                        continue;
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class
                        ? new Class({
                            type: "optional",
                            innerType: oldShape[key],
                        })
                        : oldShape[key];
                }
            }
            else {
                for (const key in oldShape) {
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class
                        ? new Class({
                            type: "optional",
                            innerType: oldShape[key],
                        })
                        : oldShape[key];
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
        checks: [],
    });
    return clone(schema, def);
}
function required(Class, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const oldShape = schema._zod.def.shape;
            const shape = { ...oldShape };
            if (mask) {
                for (const key in mask) {
                    if (!(key in shape)) {
                        throw new Error(`Unrecognized key: "${key}"`);
                    }
                    if (!mask[key])
                        continue;
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key],
                    });
                }
            }
            else {
                for (const key in oldShape) {
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key],
                    });
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
        checks: [],
    });
    return clone(schema, def);
}
// invalid_type | too_big | too_small | invalid_format | not_multiple_of | unrecognized_keys | invalid_union | invalid_key | invalid_element | invalid_value | custom
function aborted(x, startIndex = 0) {
    if (x.aborted === true)
        return true;
    for (let i = startIndex; i < x.issues.length; i++) {
        if (x.issues[i]?.continue !== true) {
            return true;
        }
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss) => {
        var _a;
        (_a = iss).path ?? (_a.path = []);
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config) {
    const full = { ...iss, path: iss.path ?? [] };
    // for backwards compatibility
    if (!iss.message) {
        const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ??
            unwrapMessage(ctx?.error?.(iss)) ??
            unwrapMessage(config.customError?.(iss)) ??
            unwrapMessage(config.localeError?.(iss)) ??
            "Invalid input";
        full.message = message;
    }
    // delete (full as any).def;
    delete full.inst;
    delete full.continue;
    if (!ctx?.reportInput) {
        delete full.input;
    }
    return full;
}
function getSizableOrigin(input) {
    if (input instanceof Set)
        return "set";
    if (input instanceof Map)
        return "map";
    // @ts-ignore
    if (input instanceof File)
        return "file";
    return "unknown";
}
function getLengthableOrigin(input) {
    if (Array.isArray(input))
        return "array";
    if (typeof input === "string")
        return "string";
    return "unknown";
}
function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst,
        };
    }
    return { ...iss };
}
function cleanEnum(obj) {
    return Object.entries(obj)
        .filter(([k, _]) => {
        // return true if NaN, meaning it's not a number, thus a string key
        return Number.isNaN(Number.parseInt(k, 10));
    })
        .map((el) => el[1]);
}
// Codec utility functions
function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
function uint8ArrayToBase64(bytes) {
    let binaryString = "";
    for (let i = 0; i < bytes.length; i++) {
        binaryString += String.fromCharCode(bytes[i]);
    }
    return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
    const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - (base64.length % 4)) % 4);
    return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
    return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
    const cleanHex = hex.replace(/^0x/, "");
    if (cleanHex.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for (let i = 0; i < cleanHex.length; i += 2) {
        bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
    }
    return bytes;
}
function uint8ArrayToHex(bytes) {
    return Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}
// instanceof
class Class {
    constructor(..._args) { }
}
exports.Class = Class;


/***/ }),

/***/ 2926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "ký tự", verb: "có" },
        file: { unit: "byte", verb: "có" },
        array: { unit: "phần tử", verb: "có" },
        set: { unit: "phần tử", verb: "có" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "số";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "mảng";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "đầu vào",
        email: "địa chỉ email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ngày giờ ISO",
        date: "ngày ISO",
        time: "giờ ISO",
        duration: "khoảng thời gian ISO",
        ipv4: "địa chỉ IPv4",
        ipv6: "địa chỉ IPv6",
        cidrv4: "dải IPv4",
        cidrv6: "dải IPv6",
        base64: "chuỗi mã hóa base64",
        base64url: "chuỗi mã hóa base64url",
        json_string: "chuỗi JSON",
        e164: "số E.164",
        jwt: "JWT",
        template_literal: "đầu vào",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Đầu vào không hợp lệ: mong đợi ${issue.expected}, nhận được ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Đầu vào không hợp lệ: mong đợi ${util.stringifyPrimitive(issue.values[0])}`;
                return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Quá lớn: mong đợi ${issue.origin ?? "giá trị"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "phần tử"}`;
                return `Quá lớn: mong đợi ${issue.origin ?? "giá trị"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Quá nhỏ: mong đợi ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Quá nhỏ: mong đợi ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Chuỗi không hợp lệ: phải bắt đầu bằng "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Chuỗi không hợp lệ: phải kết thúc bằng "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Chuỗi không hợp lệ: phải bao gồm "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Chuỗi không hợp lệ: phải khớp với mẫu ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} không hợp lệ`;
            }
            case "not_multiple_of":
                return `Số không hợp lệ: phải là bội số của ${issue.divisor}`;
            case "unrecognized_keys":
                return `Khóa không được nhận dạng: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Khóa không hợp lệ trong ${issue.origin}`;
            case "invalid_union":
                return "Đầu vào không hợp lệ";
            case "invalid_element":
                return `Giá trị không hợp lệ trong ${issue.origin}`;
            default:
                return `Đầu vào không hợp lệ`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 3024:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 3108:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parsedType = void 0;
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const parsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
exports.parsedType = parsedType;
const error = () => {
    const Sizable = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Invalid input: expected ${issue.expected}, received ${(0, exports.parsedType)(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Invalid input: expected ${util.stringifyPrimitive(issue.values[0])}`;
                return `Invalid option: expected one of ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
                return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Invalid string: must start with "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Invalid string: must end with "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Invalid string: must include "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Invalid string: must match pattern ${_issue.pattern}`;
                return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Invalid number: must be a multiple of ${issue.divisor}`;
            case "unrecognized_keys":
                return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Invalid key in ${issue.origin}`;
            case "invalid_union":
                return "Invalid input";
            case "invalid_element":
                return `Invalid value in ${issue.origin}`;
            default:
                return `Invalid input`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}


/***/ }),

/***/ 3170:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatResponse = void 0;
const formatResponse = (statusCode, body, headers = {}) => {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            ...headers,
        },
        body: JSON.stringify(body),
    };
};
exports.formatResponse = formatResponse;


/***/ }),

/***/ 3172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "simvol", verb: "olmalıdır" },
        file: { unit: "bayt", verb: "olmalıdır" },
        array: { unit: "element", verb: "olmalıdır" },
        set: { unit: "element", verb: "olmalıdır" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Yanlış dəyər: gözlənilən ${issue.expected}, daxil olan ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Yanlış dəyər: gözlənilən ${util.stringifyPrimitive(issue.values[0])}`;
                return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çox böyük: gözlənilən ${issue.origin ?? "dəyər"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
                return `Çox böyük: gözlənilən ${issue.origin ?? "dəyər"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çox kiçik: gözlənilən ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                return `Çox kiçik: gözlənilən ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Yanlış mətn: "${_issue.prefix}" ilə başlamalıdır`;
                if (_issue.format === "ends_with")
                    return `Yanlış mətn: "${_issue.suffix}" ilə bitməlidir`;
                if (_issue.format === "includes")
                    return `Yanlış mətn: "${_issue.includes}" daxil olmalıdır`;
                if (_issue.format === "regex")
                    return `Yanlış mətn: ${_issue.pattern} şablonuna uyğun olmalıdır`;
                return `Yanlış ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Yanlış ədəd: ${issue.divisor} ilə bölünə bilən olmalıdır`;
            case "unrecognized_keys":
                return `Tanınmayan açar${issue.keys.length > 1 ? "lar" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} daxilində yanlış açar`;
            case "invalid_union":
                return "Yanlış dəyər";
            case "invalid_element":
                return `${issue.origin} daxilində yanlış dəyər`;
            default:
                return `Yanlış dəyər`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 3308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "karakter", verb: "legyen" },
        file: { unit: "byte", verb: "legyen" },
        array: { unit: "elem", verb: "legyen" },
        set: { unit: "elem", verb: "legyen" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "szám";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tömb";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "bemenet",
        email: "email cím",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO időbélyeg",
        date: "ISO dátum",
        time: "ISO idő",
        duration: "ISO időintervallum",
        ipv4: "IPv4 cím",
        ipv6: "IPv6 cím",
        cidrv4: "IPv4 tartomány",
        cidrv6: "IPv6 tartomány",
        base64: "base64-kódolt string",
        base64url: "base64url-kódolt string",
        json_string: "JSON string",
        e164: "E.164 szám",
        jwt: "JWT",
        template_literal: "bemenet",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Érvénytelen bemenet: a várt érték ${issue.expected}, a kapott érték ${parsedType(issue.input)}`;
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Érvénytelen bemenet: a várt érték ${util.stringifyPrimitive(issue.values[0])}`;
                return `Érvénytelen opció: valamelyik érték várt ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Túl nagy: ${issue.origin ?? "érték"} mérete túl nagy ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elem"}`;
                return `Túl nagy: a bemeneti érték ${issue.origin ?? "érték"} túl nagy: ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Túl kicsi: a bemeneti érték ${issue.origin} mérete túl kicsi ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Túl kicsi: a bemeneti érték ${issue.origin} túl kicsi ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Érvénytelen string: "${_issue.prefix}" értékkel kell kezdődnie`;
                if (_issue.format === "ends_with")
                    return `Érvénytelen string: "${_issue.suffix}" értékkel kell végződnie`;
                if (_issue.format === "includes")
                    return `Érvénytelen string: "${_issue.includes}" értéket kell tartalmaznia`;
                if (_issue.format === "regex")
                    return `Érvénytelen string: ${_issue.pattern} mintának kell megfelelnie`;
                return `Érvénytelen ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Érvénytelen szám: ${issue.divisor} többszörösének kell lennie`;
            case "unrecognized_keys":
                return `Ismeretlen kulcs${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Érvénytelen kulcs ${issue.origin}`;
            case "invalid_union":
                return "Érvénytelen bemenet";
            case "invalid_element":
                return `Érvénytelen érték: ${issue.origin}`;
            default:
                return `Érvénytelen bemenet`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 3341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "caracteres", verb: "ter" },
        file: { unit: "bytes", verb: "ter" },
        array: { unit: "itens", verb: "ter" },
        set: { unit: "itens", verb: "ter" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "número";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "nulo";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "padrão",
        email: "endereço de e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "duração ISO",
        ipv4: "endereço IPv4",
        ipv6: "endereço IPv6",
        cidrv4: "faixa de IPv4",
        cidrv6: "faixa de IPv6",
        base64: "texto codificado em base64",
        base64url: "URL codificada em base64",
        json_string: "texto JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Tipo inválido: esperado ${issue.expected}, recebido ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrada inválida: esperado ${util.stringifyPrimitive(issue.values[0])}`;
                return `Opção inválida: esperada uma das ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Muito grande: esperado que ${issue.origin ?? "valor"} tivesse ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
                return `Muito grande: esperado que ${issue.origin ?? "valor"} fosse ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Muito pequeno: esperado que ${issue.origin} tivesse ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Muito pequeno: esperado que ${issue.origin} fosse ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Texto inválido: deve começar com "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Texto inválido: deve terminar com "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Texto inválido: deve incluir "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Texto inválido: deve corresponder ao padrão ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} inválido`;
            }
            case "not_multiple_of":
                return `Número inválido: deve ser múltiplo de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Chave${issue.keys.length > 1 ? "s" : ""} desconhecida${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Chave inválida em ${issue.origin}`;
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return `Valor inválido em ${issue.origin}`;
            default:
                return `Campo inválido`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 3489:
/***/ ((module) => {

"use strict";
module.exports = require("@aws-sdk/lib-dynamodb");

/***/ }),

/***/ 3546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "文字", verb: "である" },
        file: { unit: "バイト", verb: "である" },
        array: { unit: "要素", verb: "である" },
        set: { unit: "要素", verb: "である" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "数値";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "配列";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "入力値",
        email: "メールアドレス",
        url: "URL",
        emoji: "絵文字",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日時",
        date: "ISO日付",
        time: "ISO時刻",
        duration: "ISO期間",
        ipv4: "IPv4アドレス",
        ipv6: "IPv6アドレス",
        cidrv4: "IPv4範囲",
        cidrv6: "IPv6範囲",
        base64: "base64エンコード文字列",
        base64url: "base64urlエンコード文字列",
        json_string: "JSON文字列",
        e164: "E.164番号",
        jwt: "JWT",
        template_literal: "入力値",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `無効な入力: ${issue.expected}が期待されましたが、${parsedType(issue.input)}が入力されました`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `無効な入力: ${util.stringifyPrimitive(issue.values[0])}が期待されました`;
                return `無効な選択: ${util.joinValues(issue.values, "、")}のいずれかである必要があります`;
            case "too_big": {
                const adj = issue.inclusive ? "以下である" : "より小さい";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `大きすぎる値: ${issue.origin ?? "値"}は${issue.maximum.toString()}${sizing.unit ?? "要素"}${adj}必要があります`;
                return `大きすぎる値: ${issue.origin ?? "値"}は${issue.maximum.toString()}${adj}必要があります`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "以上である" : "より大きい";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `小さすぎる値: ${issue.origin}は${issue.minimum.toString()}${sizing.unit}${adj}必要があります`;
                return `小さすぎる値: ${issue.origin}は${issue.minimum.toString()}${adj}必要があります`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `無効な文字列: "${_issue.prefix}"で始まる必要があります`;
                if (_issue.format === "ends_with")
                    return `無効な文字列: "${_issue.suffix}"で終わる必要があります`;
                if (_issue.format === "includes")
                    return `無効な文字列: "${_issue.includes}"を含む必要があります`;
                if (_issue.format === "regex")
                    return `無効な文字列: パターン${_issue.pattern}に一致する必要があります`;
                return `無効な${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `無効な数値: ${issue.divisor}の倍数である必要があります`;
            case "unrecognized_keys":
                return `認識されていないキー${issue.keys.length > 1 ? "群" : ""}: ${util.joinValues(issue.keys, "、")}`;
            case "invalid_key":
                return `${issue.origin}内の無効なキー`;
            case "invalid_union":
                return "無効な入力";
            case "invalid_element":
                return `${issue.origin}内の無効な値`;
            default:
                return `無効な入力`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 3606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "کاراکتر", verb: "داشته باشد" },
        file: { unit: "بایت", verb: "داشته باشد" },
        array: { unit: "آیتم", verb: "داشته باشد" },
        set: { unit: "آیتم", verb: "داشته باشد" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "عدد";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "آرایه";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ورودی",
        email: "آدرس ایمیل",
        url: "URL",
        emoji: "ایموجی",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاریخ و زمان ایزو",
        date: "تاریخ ایزو",
        time: "زمان ایزو",
        duration: "مدت زمان ایزو",
        ipv4: "IPv4 آدرس",
        ipv6: "IPv6 آدرس",
        cidrv4: "IPv4 دامنه",
        cidrv6: "IPv6 دامنه",
        base64: "base64-encoded رشته",
        base64url: "base64url-encoded رشته",
        json_string: "JSON رشته",
        e164: "E.164 عدد",
        jwt: "JWT",
        template_literal: "ورودی",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ورودی نامعتبر: می‌بایست ${issue.expected} می‌بود، ${parsedType(issue.input)} دریافت شد`;
            case "invalid_value":
                if (issue.values.length === 1) {
                    return `ورودی نامعتبر: می‌بایست ${util.stringifyPrimitive(issue.values[0])} می‌بود`;
                }
                return `گزینه نامعتبر: می‌بایست یکی از ${util.joinValues(issue.values, "|")} می‌بود`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصر"} باشد`;
                }
                return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} باشد`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} باشد`;
                }
                return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} باشد`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `رشته نامعتبر: باید با "${_issue.prefix}" شروع شود`;
                }
                if (_issue.format === "ends_with") {
                    return `رشته نامعتبر: باید با "${_issue.suffix}" تمام شود`;
                }
                if (_issue.format === "includes") {
                    return `رشته نامعتبر: باید شامل "${_issue.includes}" باشد`;
                }
                if (_issue.format === "regex") {
                    return `رشته نامعتبر: باید با الگوی ${_issue.pattern} مطابقت داشته باشد`;
                }
                return `${Nouns[_issue.format] ?? issue.format} نامعتبر`;
            }
            case "not_multiple_of":
                return `عدد نامعتبر: باید مضرب ${issue.divisor} باشد`;
            case "unrecognized_keys":
                return `کلید${issue.keys.length > 1 ? "های" : ""} ناشناس: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `کلید ناشناس در ${issue.origin}`;
            case "invalid_union":
                return `ورودی نامعتبر`;
            case "invalid_element":
                return `مقدار نامعتبر در ${issue.origin}`;
            default:
                return `ورودی نامعتبر`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 3684:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.URL = exports.DNS = void 0;
const md5_js_1 = __webpack_require__(6535);
const v35_js_1 = __webpack_require__(8609);
var v35_js_2 = __webpack_require__(8609);
Object.defineProperty(exports, "DNS", ({ enumerable: true, get: function () { return v35_js_2.DNS; } }));
Object.defineProperty(exports, "URL", ({ enumerable: true, get: function () { return v35_js_2.URL; } }));
function v3(value, namespace, buf, offset) {
    return (0, v35_js_1.default)(0x30, md5_js_1.default, value, namespace, buf, offset);
}
v3.DNS = v35_js_1.DNS;
v3.URL = v35_js_1.URL;
exports["default"] = v3;


/***/ }),

/***/ 3838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "tecken", verb: "att ha" },
        file: { unit: "bytes", verb: "att ha" },
        array: { unit: "objekt", verb: "att innehålla" },
        set: { unit: "objekt", verb: "att innehålla" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "antal";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "lista";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "reguljärt uttryck",
        email: "e-postadress",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datum och tid",
        date: "ISO-datum",
        time: "ISO-tid",
        duration: "ISO-varaktighet",
        ipv4: "IPv4-intervall",
        ipv6: "IPv6-intervall",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodad sträng",
        base64url: "base64url-kodad sträng",
        json_string: "JSON-sträng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "mall-literal",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ogiltig inmatning: förväntat ${issue.expected}, fick ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ogiltig inmatning: förväntat ${util.stringifyPrimitive(issue.values[0])}`;
                return `Ogiltigt val: förväntade en av ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `För stor(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
                }
                return `För stor(t): förväntat ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Ogiltig sträng: måste börja med "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Ogiltig sträng: måste sluta med "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ogiltig sträng: måste innehålla "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ogiltig sträng: måste matcha mönstret "${_issue.pattern}"`;
                return `Ogiltig(t) ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ogiltigt tal: måste vara en multipel av ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ogiltig nyckel i ${issue.origin ?? "värdet"}`;
            case "invalid_union":
                return "Ogiltig input";
            case "invalid_element":
                return `Ogiltigt värde i ${issue.origin ?? "värdet"}`;
            default:
                return `Ogiltig input`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 3844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "znakov", verb: "imeti" },
        file: { unit: "bajtov", verb: "imeti" },
        array: { unit: "elementov", verb: "imeti" },
        set: { unit: "elementov", verb: "imeti" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "število";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tabela";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "vnos",
        email: "e-poštni naslov",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum in čas",
        date: "ISO datum",
        time: "ISO čas",
        duration: "ISO trajanje",
        ipv4: "IPv4 naslov",
        ipv6: "IPv6 naslov",
        cidrv4: "obseg IPv4",
        cidrv6: "obseg IPv6",
        base64: "base64 kodiran niz",
        base64url: "base64url kodiran niz",
        json_string: "JSON niz",
        e164: "E.164 številka",
        jwt: "JWT",
        template_literal: "vnos",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Neveljaven vnos: pričakovano ${issue.expected}, prejeto ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Neveljaven vnos: pričakovano ${util.stringifyPrimitive(issue.values[0])}`;
                return `Neveljavna možnost: pričakovano eno izmed ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Preveliko: pričakovano, da bo ${issue.origin ?? "vrednost"} imelo ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementov"}`;
                return `Preveliko: pričakovano, da bo ${issue.origin ?? "vrednost"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Premajhno: pričakovano, da bo ${issue.origin} imelo ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Premajhno: pričakovano, da bo ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Neveljaven niz: mora se začeti z "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Neveljaven niz: mora se končati z "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
                return `Neveljaven ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Neveljavno število: mora biti večkratnik ${issue.divisor}`;
            case "unrecognized_keys":
                return `Neprepoznan${issue.keys.length > 1 ? "i ključi" : " ključ"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Neveljaven ključ v ${issue.origin}`;
            case "invalid_union":
                return "Neveljaven vnos";
            case "invalid_element":
                return `Neveljavna vrednost v ${issue.origin}`;
            default:
                return "Neveljaven vnos";
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 3859:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.yo = exports.zhTW = exports.zhCN = exports.vi = exports.ur = exports.ua = exports.tr = exports.th = exports.ta = exports.sv = exports.sl = exports.ru = exports.pt = exports.pl = exports.ps = exports.ota = exports.no = exports.nl = exports.ms = exports.mk = exports.ko = exports.kh = exports.ja = exports.it = exports.is = exports.id = exports.hu = exports.he = exports.frCA = exports.fr = exports.fi = exports.fa = exports.es = exports.eo = exports.en = exports.de = exports.da = exports.cs = exports.ca = exports.be = exports.az = exports.ar = void 0;
var ar_js_1 = __webpack_require__(5468);
Object.defineProperty(exports, "ar", ({ enumerable: true, get: function () { return __importDefault(ar_js_1).default; } }));
var az_js_1 = __webpack_require__(3172);
Object.defineProperty(exports, "az", ({ enumerable: true, get: function () { return __importDefault(az_js_1).default; } }));
var be_js_1 = __webpack_require__(4190);
Object.defineProperty(exports, "be", ({ enumerable: true, get: function () { return __importDefault(be_js_1).default; } }));
var ca_js_1 = __webpack_require__(9193);
Object.defineProperty(exports, "ca", ({ enumerable: true, get: function () { return __importDefault(ca_js_1).default; } }));
var cs_js_1 = __webpack_require__(7459);
Object.defineProperty(exports, "cs", ({ enumerable: true, get: function () { return __importDefault(cs_js_1).default; } }));
var da_js_1 = __webpack_require__(8348);
Object.defineProperty(exports, "da", ({ enumerable: true, get: function () { return __importDefault(da_js_1).default; } }));
var de_js_1 = __webpack_require__(4528);
Object.defineProperty(exports, "de", ({ enumerable: true, get: function () { return __importDefault(de_js_1).default; } }));
var en_js_1 = __webpack_require__(3108);
Object.defineProperty(exports, "en", ({ enumerable: true, get: function () { return __importDefault(en_js_1).default; } }));
var eo_js_1 = __webpack_require__(253);
Object.defineProperty(exports, "eo", ({ enumerable: true, get: function () { return __importDefault(eo_js_1).default; } }));
var es_js_1 = __webpack_require__(6441);
Object.defineProperty(exports, "es", ({ enumerable: true, get: function () { return __importDefault(es_js_1).default; } }));
var fa_js_1 = __webpack_require__(3606);
Object.defineProperty(exports, "fa", ({ enumerable: true, get: function () { return __importDefault(fa_js_1).default; } }));
var fi_js_1 = __webpack_require__(2446);
Object.defineProperty(exports, "fi", ({ enumerable: true, get: function () { return __importDefault(fi_js_1).default; } }));
var fr_js_1 = __webpack_require__(9837);
Object.defineProperty(exports, "fr", ({ enumerable: true, get: function () { return __importDefault(fr_js_1).default; } }));
var fr_CA_js_1 = __webpack_require__(6878);
Object.defineProperty(exports, "frCA", ({ enumerable: true, get: function () { return __importDefault(fr_CA_js_1).default; } }));
var he_js_1 = __webpack_require__(4124);
Object.defineProperty(exports, "he", ({ enumerable: true, get: function () { return __importDefault(he_js_1).default; } }));
var hu_js_1 = __webpack_require__(3308);
Object.defineProperty(exports, "hu", ({ enumerable: true, get: function () { return __importDefault(hu_js_1).default; } }));
var id_js_1 = __webpack_require__(9690);
Object.defineProperty(exports, "id", ({ enumerable: true, get: function () { return __importDefault(id_js_1).default; } }));
var is_js_1 = __webpack_require__(5501);
Object.defineProperty(exports, "is", ({ enumerable: true, get: function () { return __importDefault(is_js_1).default; } }));
var it_js_1 = __webpack_require__(4778);
Object.defineProperty(exports, "it", ({ enumerable: true, get: function () { return __importDefault(it_js_1).default; } }));
var ja_js_1 = __webpack_require__(3546);
Object.defineProperty(exports, "ja", ({ enumerable: true, get: function () { return __importDefault(ja_js_1).default; } }));
var kh_js_1 = __webpack_require__(4128);
Object.defineProperty(exports, "kh", ({ enumerable: true, get: function () { return __importDefault(kh_js_1).default; } }));
var ko_js_1 = __webpack_require__(2847);
Object.defineProperty(exports, "ko", ({ enumerable: true, get: function () { return __importDefault(ko_js_1).default; } }));
var mk_js_1 = __webpack_require__(9865);
Object.defineProperty(exports, "mk", ({ enumerable: true, get: function () { return __importDefault(mk_js_1).default; } }));
var ms_js_1 = __webpack_require__(2577);
Object.defineProperty(exports, "ms", ({ enumerable: true, get: function () { return __importDefault(ms_js_1).default; } }));
var nl_js_1 = __webpack_require__(8555);
Object.defineProperty(exports, "nl", ({ enumerable: true, get: function () { return __importDefault(nl_js_1).default; } }));
var no_js_1 = __webpack_require__(520);
Object.defineProperty(exports, "no", ({ enumerable: true, get: function () { return __importDefault(no_js_1).default; } }));
var ota_js_1 = __webpack_require__(7209);
Object.defineProperty(exports, "ota", ({ enumerable: true, get: function () { return __importDefault(ota_js_1).default; } }));
var ps_js_1 = __webpack_require__(2266);
Object.defineProperty(exports, "ps", ({ enumerable: true, get: function () { return __importDefault(ps_js_1).default; } }));
var pl_js_1 = __webpack_require__(917);
Object.defineProperty(exports, "pl", ({ enumerable: true, get: function () { return __importDefault(pl_js_1).default; } }));
var pt_js_1 = __webpack_require__(3341);
Object.defineProperty(exports, "pt", ({ enumerable: true, get: function () { return __importDefault(pt_js_1).default; } }));
var ru_js_1 = __webpack_require__(7950);
Object.defineProperty(exports, "ru", ({ enumerable: true, get: function () { return __importDefault(ru_js_1).default; } }));
var sl_js_1 = __webpack_require__(3844);
Object.defineProperty(exports, "sl", ({ enumerable: true, get: function () { return __importDefault(sl_js_1).default; } }));
var sv_js_1 = __webpack_require__(3838);
Object.defineProperty(exports, "sv", ({ enumerable: true, get: function () { return __importDefault(sv_js_1).default; } }));
var ta_js_1 = __webpack_require__(6476);
Object.defineProperty(exports, "ta", ({ enumerable: true, get: function () { return __importDefault(ta_js_1).default; } }));
var th_js_1 = __webpack_require__(973);
Object.defineProperty(exports, "th", ({ enumerable: true, get: function () { return __importDefault(th_js_1).default; } }));
var tr_js_1 = __webpack_require__(9231);
Object.defineProperty(exports, "tr", ({ enumerable: true, get: function () { return __importDefault(tr_js_1).default; } }));
var ua_js_1 = __webpack_require__(7811);
Object.defineProperty(exports, "ua", ({ enumerable: true, get: function () { return __importDefault(ua_js_1).default; } }));
var ur_js_1 = __webpack_require__(880);
Object.defineProperty(exports, "ur", ({ enumerable: true, get: function () { return __importDefault(ur_js_1).default; } }));
var vi_js_1 = __webpack_require__(2926);
Object.defineProperty(exports, "vi", ({ enumerable: true, get: function () { return __importDefault(vi_js_1).default; } }));
var zh_CN_js_1 = __webpack_require__(1331);
Object.defineProperty(exports, "zhCN", ({ enumerable: true, get: function () { return __importDefault(zh_CN_js_1).default; } }));
var zh_TW_js_1 = __webpack_require__(1239);
Object.defineProperty(exports, "zhTW", ({ enumerable: true, get: function () { return __importDefault(zh_TW_js_1).default; } }));
var yo_js_1 = __webpack_require__(2246);
Object.defineProperty(exports, "yo", ({ enumerable: true, get: function () { return __importDefault(yo_js_1).default; } }));


/***/ }),

/***/ 4104:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = '00000000-0000-0000-0000-000000000000';


/***/ }),

/***/ 4124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "אותיות", verb: "לכלול" },
        file: { unit: "בייטים", verb: "לכלול" },
        array: { unit: "פריטים", verb: "לכלול" },
        set: { unit: "פריטים", verb: "לכלול" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "קלט",
        email: "כתובת אימייל",
        url: "כתובת רשת",
        emoji: "אימוג'י",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "תאריך וזמן ISO",
        date: "תאריך ISO",
        time: "זמן ISO",
        duration: "משך זמן ISO",
        ipv4: "כתובת IPv4",
        ipv6: "כתובת IPv6",
        cidrv4: "טווח IPv4",
        cidrv6: "טווח IPv6",
        base64: "מחרוזת בבסיס 64",
        base64url: "מחרוזת בבסיס 64 לכתובות רשת",
        json_string: "מחרוזת JSON",
        e164: "מספר E.164",
        jwt: "JWT",
        template_literal: "קלט",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `קלט לא תקין: צריך ${issue.expected}, התקבל ${parsedType(issue.input)}`;
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `קלט לא תקין: צריך ${util.stringifyPrimitive(issue.values[0])}`;
                return `קלט לא תקין: צריך אחת מהאפשרויות  ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `גדול מדי: ${issue.origin ?? "value"} צריך להיות ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
                return `גדול מדי: ${issue.origin ?? "value"} צריך להיות ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `קטן מדי: ${issue.origin} צריך להיות ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `קטן מדי: ${issue.origin} צריך להיות ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `מחרוזת לא תקינה: חייבת להתחיל ב"${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `מחרוזת לא תקינה: חייבת להסתיים ב "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `מחרוזת לא תקינה: חייבת לכלול "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} לא תקין`;
            }
            case "not_multiple_of":
                return `מספר לא תקין: חייב להיות מכפלה של ${issue.divisor}`;
            case "unrecognized_keys":
                return `מפתח${issue.keys.length > 1 ? "ות" : ""} לא מזוה${issue.keys.length > 1 ? "ים" : "ה"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `מפתח לא תקין ב${issue.origin}`;
            case "invalid_union":
                return "קלט לא תקין";
            case "invalid_element":
                return `ערך לא תקין ב${issue.origin}`;
            default:
                return `קלט לא תקין`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 4128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "តួអក្សរ", verb: "គួរមាន" },
        file: { unit: "បៃ", verb: "គួរមាន" },
        array: { unit: "ធាតុ", verb: "គួរមាន" },
        set: { unit: "ធាតុ", verb: "គួរមាន" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "អារេ (Array)";
                }
                if (data === null) {
                    return "គ្មានតម្លៃ (null)";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ទិន្នន័យបញ្ចូល",
        email: "អាសយដ្ឋានអ៊ីមែល",
        url: "URL",
        emoji: "សញ្ញាអារម្មណ៍",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
        date: "កាលបរិច្ឆេទ ISO",
        time: "ម៉ោង ISO",
        duration: "រយៈពេល ISO",
        ipv4: "អាសយដ្ឋាន IPv4",
        ipv6: "អាសយដ្ឋាន IPv6",
        cidrv4: "ដែនអាសយដ្ឋាន IPv4",
        cidrv6: "ដែនអាសយដ្ឋាន IPv6",
        base64: "ខ្សែអក្សរអ៊ិកូដ base64",
        base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
        json_string: "ខ្សែអក្សរ JSON",
        e164: "លេខ E.164",
        jwt: "JWT",
        template_literal: "ទិន្នន័យបញ្ចូល",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${issue.expected} ប៉ុន្តែទទួលបាន ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${util.stringifyPrimitive(issue.values[0])}`;
                return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `ធំពេក៖ ត្រូវការ ${issue.origin ?? "តម្លៃ"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "ធាតុ"}`;
                return `ធំពេក៖ ត្រូវការ ${issue.origin ?? "តម្លៃ"} ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `តូចពេក៖ ត្រូវការ ${issue.origin} ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `តូចពេក៖ ត្រូវការ ${issue.origin} ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_issue.pattern}`;
                return `មិនត្រឹមត្រូវ៖ ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${issue.divisor}`;
            case "unrecognized_keys":
                return `រកឃើញសោមិនស្គាល់៖ ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${issue.origin}`;
            case "invalid_union":
                return `ទិន្នន័យមិនត្រឹមត្រូវ`;
            case "invalid_element":
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${issue.origin}`;
            default:
                return `ទិន្នន័យមិនត្រឹមត្រូវ`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 4187:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doc = void 0;
class Doc {
    constructor(args = []) {
        this.content = [];
        this.indent = 0;
        if (this)
            this.args = args;
    }
    indented(fn) {
        this.indent += 1;
        fn(this);
        this.indent -= 1;
    }
    write(arg) {
        if (typeof arg === "function") {
            arg(this, { execution: "sync" });
            arg(this, { execution: "async" });
            return;
        }
        const content = arg;
        const lines = content.split("\n").filter((x) => x);
        const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
        const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
        for (const line of dedented) {
            this.content.push(line);
        }
    }
    compile() {
        const F = Function;
        const args = this?.args;
        const content = this?.content ?? [``];
        const lines = [...content.map((x) => `  ${x}`)];
        // console.log(lines.join("\n"));
        return new F(...args, lines.join("\n"));
    }
}
exports.Doc = Doc;


/***/ }),

/***/ 4190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
function getBelarusianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    return many;
}
const error = () => {
    const Sizable = {
        string: {
            unit: {
                one: "сімвал",
                few: "сімвалы",
                many: "сімвалаў",
            },
            verb: "мець",
        },
        array: {
            unit: {
                one: "элемент",
                few: "элементы",
                many: "элементаў",
            },
            verb: "мець",
        },
        set: {
            unit: {
                one: "элемент",
                few: "элементы",
                many: "элементаў",
            },
            verb: "мець",
        },
        file: {
            unit: {
                one: "байт",
                few: "байты",
                many: "байтаў",
            },
            verb: "мець",
        },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "лік";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "масіў";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "увод",
        email: "email адрас",
        url: "URL",
        emoji: "эмодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата і час",
        date: "ISO дата",
        time: "ISO час",
        duration: "ISO працягласць",
        ipv4: "IPv4 адрас",
        ipv6: "IPv6 адрас",
        cidrv4: "IPv4 дыяпазон",
        cidrv6: "IPv6 дыяпазон",
        base64: "радок у фармаце base64",
        base64url: "радок у фармаце base64url",
        json_string: "JSON радок",
        e164: "нумар E.164",
        jwt: "JWT",
        template_literal: "увод",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Няправільны ўвод: чакаўся ${issue.expected}, атрымана ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Няправільны ўвод: чакалася ${util.stringifyPrimitive(issue.values[0])}`;
                return `Няправільны варыянт: чакаўся адзін з ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    const maxValue = Number(issue.maximum);
                    const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                    return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна ${sizing.verb} ${adj}${issue.maximum.toString()} ${unit}`;
                }
                return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна быць ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    const minValue = Number(issue.minimum);
                    const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                    return `Занадта малы: чакалася, што ${issue.origin} павінна ${sizing.verb} ${adj}${issue.minimum.toString()} ${unit}`;
                }
                return `Занадта малы: чакалася, што ${issue.origin} павінна быць ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Няправільны радок: павінен пачынацца з "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Няправільны радок: павінен заканчвацца на "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Няправільны радок: павінен змяшчаць "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Няправільны радок: павінен адпавядаць шаблону ${_issue.pattern}`;
                return `Няправільны ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Няправільны лік: павінен быць кратным ${issue.divisor}`;
            case "unrecognized_keys":
                return `Нераспазнаны ${issue.keys.length > 1 ? "ключы" : "ключ"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Няправільны ключ у ${issue.origin}`;
            case "invalid_union":
                return "Няправільны ўвод";
            case "invalid_element":
                return `Няправільнае значэнне ў ${issue.origin}`;
            default:
                return `Няправільны ўвод`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 4528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "Zeichen", verb: "zu haben" },
        file: { unit: "Bytes", verb: "zu haben" },
        array: { unit: "Elemente", verb: "zu haben" },
        set: { unit: "Elemente", verb: "zu haben" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "Zahl";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "Array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "Eingabe",
        email: "E-Mail-Adresse",
        url: "URL",
        emoji: "Emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-Datum und -Uhrzeit",
        date: "ISO-Datum",
        time: "ISO-Uhrzeit",
        duration: "ISO-Dauer",
        ipv4: "IPv4-Adresse",
        ipv6: "IPv6-Adresse",
        cidrv4: "IPv4-Bereich",
        cidrv6: "IPv6-Bereich",
        base64: "Base64-codierter String",
        base64url: "Base64-URL-codierter String",
        json_string: "JSON-String",
        e164: "E.164-Nummer",
        jwt: "JWT",
        template_literal: "Eingabe",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ungültige Eingabe: erwartet ${issue.expected}, erhalten ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ungültige Eingabe: erwartet ${util.stringifyPrimitive(issue.values[0])}`;
                return `Ungültige Option: erwartet eine von ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Zu groß: erwartet, dass ${issue.origin ?? "Wert"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
                return `Zu groß: erwartet, dass ${issue.origin ?? "Wert"} ${adj}${issue.maximum.toString()} ist`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Zu klein: erwartet, dass ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} hat`;
                }
                return `Zu klein: erwartet, dass ${issue.origin} ${adj}${issue.minimum.toString()} ist`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ungültiger String: muss mit "${_issue.prefix}" beginnen`;
                if (_issue.format === "ends_with")
                    return `Ungültiger String: muss mit "${_issue.suffix}" enden`;
                if (_issue.format === "includes")
                    return `Ungültiger String: muss "${_issue.includes}" enthalten`;
                if (_issue.format === "regex")
                    return `Ungültiger String: muss dem Muster ${_issue.pattern} entsprechen`;
                return `Ungültig: ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ungültige Zahl: muss ein Vielfaches von ${issue.divisor} sein`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ungültiger Schlüssel in ${issue.origin}`;
            case "invalid_union":
                return "Ungültige Eingabe";
            case "invalid_element":
                return `Ungültiger Wert in ${issue.origin}`;
            default:
                return `Ungültige Eingabe`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 4671:
/***/ ((module) => {

"use strict";
module.exports = require("@aws-sdk/client-dynamodb");

/***/ }),

/***/ 4778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "caratteri", verb: "avere" },
        file: { unit: "byte", verb: "avere" },
        array: { unit: "elementi", verb: "avere" },
        set: { unit: "elementi", verb: "avere" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "numero";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "vettore";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "indirizzo email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e ora ISO",
        date: "data ISO",
        time: "ora ISO",
        duration: "durata ISO",
        ipv4: "indirizzo IPv4",
        ipv6: "indirizzo IPv6",
        cidrv4: "intervallo IPv4",
        cidrv6: "intervallo IPv6",
        base64: "stringa codificata in base64",
        base64url: "URL codificata in base64",
        json_string: "stringa JSON",
        e164: "numero E.164",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Input non valido: atteso ${issue.expected}, ricevuto ${parsedType(issue.input)}`;
            // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Input non valido: atteso ${util.stringifyPrimitive(issue.values[0])}`;
                return `Opzione non valida: atteso uno tra ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Troppo grande: ${issue.origin ?? "valore"} deve avere ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementi"}`;
                return `Troppo grande: ${issue.origin ?? "valore"} deve essere ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Troppo piccolo: ${issue.origin} deve avere ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Troppo piccolo: ${issue.origin} deve essere ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Stringa non valida: deve includere "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
                return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Numero non valido: deve essere un multiplo di ${issue.divisor}`;
            case "unrecognized_keys":
                return `Chiav${issue.keys.length > 1 ? "i" : "e"} non riconosciut${issue.keys.length > 1 ? "e" : "a"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Chiave non valida in ${issue.origin}`;
            case "invalid_union":
                return "Input non valido";
            case "invalid_element":
                return `Valore non valido in ${issue.origin}`;
            default:
                return `Input non valido`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 5468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "حرف", verb: "أن يحوي" },
        file: { unit: "بايت", verb: "أن يحوي" },
        array: { unit: "عنصر", verb: "أن يحوي" },
        set: { unit: "عنصر", verb: "أن يحوي" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "مدخل",
        email: "بريد إلكتروني",
        url: "رابط",
        emoji: "إيموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاريخ ووقت بمعيار ISO",
        date: "تاريخ بمعيار ISO",
        time: "وقت بمعيار ISO",
        duration: "مدة بمعيار ISO",
        ipv4: "عنوان IPv4",
        ipv6: "عنوان IPv6",
        cidrv4: "مدى عناوين بصيغة IPv4",
        cidrv6: "مدى عناوين بصيغة IPv6",
        base64: "نَص بترميز base64-encoded",
        base64url: "نَص بترميز base64url-encoded",
        json_string: "نَص على هيئة JSON",
        e164: "رقم هاتف بمعيار E.164",
        jwt: "JWT",
        template_literal: "مدخل",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `مدخلات غير مقبولة: يفترض إدخال ${issue.expected}، ولكن تم إدخال ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `مدخلات غير مقبولة: يفترض إدخال ${util.stringifyPrimitive(issue.values[0])}`;
                return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return ` أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "عنصر"}`;
                return `أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `نَص غير مقبول: يجب أن يبدأ بـ "${issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `نَص غير مقبول: يجب أن ينتهي بـ "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `نَص غير مقبول: يجب أن يتضمَّن "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `نَص غير مقبول: يجب أن يطابق النمط ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} غير مقبول`;
            }
            case "not_multiple_of":
                return `رقم غير مقبول: يجب أن يكون من مضاعفات ${issue.divisor}`;
            case "unrecognized_keys":
                return `معرف${issue.keys.length > 1 ? "ات" : ""} غريب${issue.keys.length > 1 ? "ة" : ""}: ${util.joinValues(issue.keys, "، ")}`;
            case "invalid_key":
                return `معرف غير مقبول في ${issue.origin}`;
            case "invalid_union":
                return "مدخل غير مقبول";
            case "invalid_element":
                return `مدخل غير مقبول في ${issue.origin}`;
            default:
                return "مدخل غير مقبول";
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 5501:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parsedType = void 0;
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const parsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "númer";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "fylki";
            }
            if (data === null) {
                return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
exports.parsedType = parsedType;
const error = () => {
    const Sizable = {
        string: { unit: "stafi", verb: "að hafa" },
        file: { unit: "bæti", verb: "að hafa" },
        array: { unit: "hluti", verb: "að hafa" },
        set: { unit: "hluti", verb: "að hafa" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "gildi",
        email: "netfang",
        url: "vefslóð",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dagsetning og tími",
        date: "ISO dagsetning",
        time: "ISO tími",
        duration: "ISO tímalengd",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded strengur",
        base64url: "base64url-encoded strengur",
        json_string: "JSON strengur",
        e164: "E.164 tölugildi",
        jwt: "JWT",
        template_literal: "gildi",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Rangt gildi: Þú slóst inn ${(0, exports.parsedType)(issue.input)} þar sem á að vera ${issue.expected}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Rangt gildi: gert ráð fyrir ${util.stringifyPrimitive(issue.values[0])}`;
                return `Ógilt val: má vera eitt af eftirfarandi ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Of stórt: gert er ráð fyrir að ${issue.origin ?? "gildi"} hafi ${adj}${issue.maximum.toString()} ${sizing.unit ?? "hluti"}`;
                return `Of stórt: gert er ráð fyrir að ${issue.origin ?? "gildi"} sé ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Of lítið: gert er ráð fyrir að ${issue.origin} hafi ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Of lítið: gert er ráð fyrir að ${issue.origin} sé ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Ógildur strengur: verður að byrja á "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Ógildur strengur: verður að enda á "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ógildur strengur: verður að innihalda "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ógildur strengur: verður að fylgja mynstri ${_issue.pattern}`;
                return `Rangt ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Röng tala: verður að vera margfeldi af ${issue.divisor}`;
            case "unrecognized_keys":
                return `Óþekkt ${issue.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Rangur lykill í ${issue.origin}`;
            case "invalid_union":
                return "Rangt gildi";
            case "invalid_element":
                return `Rangt gildi í ${issue.origin}`;
            default:
                return `Rangt gildi`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}


/***/ }),

/***/ 5521:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConflictError = exports.NotFoundError = exports.ValidationError = exports.WalkinServiceError = void 0;
class WalkinServiceError extends Error {
    constructor(message, statusCode = 500, code = 'WALKIN_SERVICE_ERROR') {
        super(message);
        this.name = 'WalkinServiceError';
        this.statusCode = statusCode;
        this.code = code;
    }
}
exports.WalkinServiceError = WalkinServiceError;
class ValidationError extends WalkinServiceError {
    constructor(message) {
        super(message, 400, 'VALIDATION_ERROR');
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
class NotFoundError extends WalkinServiceError {
    constructor(resource) {
        super(`${resource} not found`, 404, 'NOT_FOUND');
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends WalkinServiceError {
    constructor(message) {
        super(message, 409, 'CONFLICT_ERROR');
        this.name = 'ConflictError';
    }
}
exports.ConflictError = ConflictError;


/***/ }),

/***/ 5585:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$ZodMap = exports.$ZodRecord = exports.$ZodTuple = exports.$ZodIntersection = exports.$ZodDiscriminatedUnion = exports.$ZodUnion = exports.$ZodObjectJIT = exports.$ZodObject = exports.$ZodArray = exports.$ZodDate = exports.$ZodVoid = exports.$ZodNever = exports.$ZodUnknown = exports.$ZodAny = exports.$ZodNull = exports.$ZodUndefined = exports.$ZodSymbol = exports.$ZodBigIntFormat = exports.$ZodBigInt = exports.$ZodBoolean = exports.$ZodNumberFormat = exports.$ZodNumber = exports.$ZodCustomStringFormat = exports.$ZodJWT = exports.$ZodE164 = exports.$ZodBase64URL = exports.$ZodBase64 = exports.$ZodCIDRv6 = exports.$ZodCIDRv4 = exports.$ZodIPv6 = exports.$ZodIPv4 = exports.$ZodISODuration = exports.$ZodISOTime = exports.$ZodISODate = exports.$ZodISODateTime = exports.$ZodKSUID = exports.$ZodXID = exports.$ZodULID = exports.$ZodCUID2 = exports.$ZodCUID = exports.$ZodNanoID = exports.$ZodEmoji = exports.$ZodURL = exports.$ZodEmail = exports.$ZodUUID = exports.$ZodGUID = exports.$ZodStringFormat = exports.$ZodString = exports.clone = exports.$ZodType = void 0;
exports.$ZodCustom = exports.$ZodLazy = exports.$ZodPromise = exports.$ZodFunction = exports.$ZodTemplateLiteral = exports.$ZodReadonly = exports.$ZodCodec = exports.$ZodPipe = exports.$ZodNaN = exports.$ZodCatch = exports.$ZodSuccess = exports.$ZodNonOptional = exports.$ZodPrefault = exports.$ZodDefault = exports.$ZodNullable = exports.$ZodOptional = exports.$ZodTransform = exports.$ZodFile = exports.$ZodLiteral = exports.$ZodEnum = exports.$ZodSet = void 0;
exports.isValidBase64 = isValidBase64;
exports.isValidBase64URL = isValidBase64URL;
exports.isValidJWT = isValidJWT;
const checks = __importStar(__webpack_require__(6648));
const core = __importStar(__webpack_require__(1870));
const doc_js_1 = __webpack_require__(4187);
const parse_js_1 = __webpack_require__(2048);
const regexes = __importStar(__webpack_require__(6296));
const util = __importStar(__webpack_require__(2879));
const versions_js_1 = __webpack_require__(7696);
exports.$ZodType = core.$constructor("$ZodType", (inst, def) => {
    var _a;
    inst ?? (inst = {});
    inst._zod.def = def; // set _def property
    inst._zod.bag = inst._zod.bag || {}; // initialize _bag object
    inst._zod.version = versions_js_1.version;
    const checks = [...(inst._zod.def.checks ?? [])];
    // if inst is itself a checks.$ZodCheck, run it as a check
    if (inst._zod.traits.has("$ZodCheck")) {
        checks.unshift(inst);
    }
    for (const ch of checks) {
        for (const fn of ch._zod.onattach) {
            fn(inst);
        }
    }
    if (checks.length === 0) {
        // deferred initializer
        // inst._zod.parse is not yet defined
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred?.push(() => {
            inst._zod.run = inst._zod.parse;
        });
    }
    else {
        const runChecks = (payload, checks, ctx) => {
            let isAborted = util.aborted(payload);
            let asyncResult;
            for (const ch of checks) {
                if (ch._zod.def.when) {
                    const shouldRun = ch._zod.def.when(payload);
                    if (!shouldRun)
                        continue;
                }
                else if (isAborted) {
                    continue;
                }
                const currLen = payload.issues.length;
                const _ = ch._zod.check(payload);
                if (_ instanceof Promise && ctx?.async === false) {
                    throw new core.$ZodAsyncError();
                }
                if (asyncResult || _ instanceof Promise) {
                    asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
                        await _;
                        const nextLen = payload.issues.length;
                        if (nextLen === currLen)
                            return;
                        if (!isAborted)
                            isAborted = util.aborted(payload, currLen);
                    });
                }
                else {
                    const nextLen = payload.issues.length;
                    if (nextLen === currLen)
                        continue;
                    if (!isAborted)
                        isAborted = util.aborted(payload, currLen);
                }
            }
            if (asyncResult) {
                return asyncResult.then(() => {
                    return payload;
                });
            }
            return payload;
        };
        // const handleChecksResult = (
        //   checkResult: ParsePayload,
        //   originalResult: ParsePayload,
        //   ctx: ParseContextInternal
        // ): util.MaybeAsync<ParsePayload> => {
        //   // if the checks mutated the value && there are no issues, re-parse the result
        //   if (checkResult.value !== originalResult.value && !checkResult.issues.length)
        //     return inst._zod.parse(checkResult, ctx);
        //   return originalResult;
        // };
        const handleCanaryResult = (canary, payload, ctx) => {
            // abort if the canary is aborted
            if (util.aborted(canary)) {
                canary.aborted = true;
                return canary;
            }
            // run checks first, then
            const checkResult = runChecks(payload, checks, ctx);
            if (checkResult instanceof Promise) {
                if (ctx.async === false)
                    throw new core.$ZodAsyncError();
                return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
            }
            return inst._zod.parse(checkResult, ctx);
        };
        inst._zod.run = (payload, ctx) => {
            if (ctx.skipChecks) {
                return inst._zod.parse(payload, ctx);
            }
            if (ctx.direction === "backward") {
                // run canary
                // initial pass (no checks)
                const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
                if (canary instanceof Promise) {
                    return canary.then((canary) => {
                        return handleCanaryResult(canary, payload, ctx);
                    });
                }
                return handleCanaryResult(canary, payload, ctx);
            }
            // forward
            const result = inst._zod.parse(payload, ctx);
            if (result instanceof Promise) {
                if (ctx.async === false)
                    throw new core.$ZodAsyncError();
                return result.then((result) => runChecks(result, checks, ctx));
            }
            return runChecks(result, checks, ctx);
        };
    }
    inst["~standard"] = {
        validate: (value) => {
            try {
                const r = (0, parse_js_1.safeParse)(inst, value);
                return r.success ? { value: r.data } : { issues: r.error?.issues };
            }
            catch (_) {
                return (0, parse_js_1.safeParseAsync)(inst, value).then((r) => (r.success ? { value: r.data } : { issues: r.error?.issues }));
            }
        },
        vendor: "zod",
        version: 1,
    };
});
var util_js_1 = __webpack_require__(2879);
Object.defineProperty(exports, "clone", ({ enumerable: true, get: function () { return util_js_1.clone; } }));
exports.$ZodString = core.$constructor("$ZodString", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.pattern = [...(inst?._zod.bag?.patterns ?? [])].pop() ?? regexes.string(inst._zod.bag);
    inst._zod.parse = (payload, _) => {
        if (def.coerce)
            try {
                payload.value = String(payload.value);
            }
            catch (_) { }
        if (typeof payload.value === "string")
            return payload;
        payload.issues.push({
            expected: "string",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
exports.$ZodStringFormat = core.$constructor("$ZodStringFormat", (inst, def) => {
    // check initialization must come first
    checks.$ZodCheckStringFormat.init(inst, def);
    exports.$ZodString.init(inst, def);
});
exports.$ZodGUID = core.$constructor("$ZodGUID", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.guid);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodUUID = core.$constructor("$ZodUUID", (inst, def) => {
    if (def.version) {
        const versionMap = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8,
        };
        const v = versionMap[def.version];
        if (v === undefined)
            throw new Error(`Invalid UUID version: "${def.version}"`);
        def.pattern ?? (def.pattern = regexes.uuid(v));
    }
    else
        def.pattern ?? (def.pattern = regexes.uuid());
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodEmail = core.$constructor("$ZodEmail", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.email);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodURL = core.$constructor("$ZodURL", (inst, def) => {
    exports.$ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        try {
            // Trim whitespace from input
            const trimmed = payload.value.trim();
            // @ts-ignore
            const url = new URL(trimmed);
            if (def.hostname) {
                def.hostname.lastIndex = 0;
                if (!def.hostname.test(url.hostname)) {
                    payload.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid hostname",
                        pattern: regexes.hostname.source,
                        input: payload.value,
                        inst,
                        continue: !def.abort,
                    });
                }
            }
            if (def.protocol) {
                def.protocol.lastIndex = 0;
                if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
                    payload.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: def.protocol.source,
                        input: payload.value,
                        inst,
                        continue: !def.abort,
                    });
                }
            }
            // Set the output value based on normalize flag
            if (def.normalize) {
                // Use normalized URL
                payload.value = url.href;
            }
            else {
                // Preserve the original input (trimmed)
                payload.value = trimmed;
            }
            return;
        }
        catch (_) {
            payload.issues.push({
                code: "invalid_format",
                format: "url",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
exports.$ZodEmoji = core.$constructor("$ZodEmoji", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.emoji());
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodNanoID = core.$constructor("$ZodNanoID", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.nanoid);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodCUID = core.$constructor("$ZodCUID", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.cuid);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodCUID2 = core.$constructor("$ZodCUID2", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.cuid2);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodULID = core.$constructor("$ZodULID", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.ulid);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodXID = core.$constructor("$ZodXID", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.xid);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodKSUID = core.$constructor("$ZodKSUID", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.ksuid);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodISODateTime = core.$constructor("$ZodISODateTime", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.datetime(def));
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodISODate = core.$constructor("$ZodISODate", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.date);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodISOTime = core.$constructor("$ZodISOTime", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.time(def));
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodISODuration = core.$constructor("$ZodISODuration", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.duration);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodIPv4 = core.$constructor("$ZodIPv4", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.ipv4);
    exports.$ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.format = `ipv4`;
    });
});
exports.$ZodIPv6 = core.$constructor("$ZodIPv6", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.ipv6);
    exports.$ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.format = `ipv6`;
    });
    inst._zod.check = (payload) => {
        try {
            // @ts-ignore
            new URL(`http://[${payload.value}]`);
            // return;
        }
        catch {
            payload.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
exports.$ZodCIDRv4 = core.$constructor("$ZodCIDRv4", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.cidrv4);
    exports.$ZodStringFormat.init(inst, def);
});
exports.$ZodCIDRv6 = core.$constructor("$ZodCIDRv6", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.cidrv6); // not used for validation
    exports.$ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        const [address, prefix] = payload.value.split("/");
        try {
            if (!prefix)
                throw new Error();
            const prefixNum = Number(prefix);
            if (`${prefixNum}` !== prefix)
                throw new Error();
            if (prefixNum < 0 || prefixNum > 128)
                throw new Error();
            // @ts-ignore
            new URL(`http://[${address}]`);
        }
        catch {
            payload.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
//////////////////////////////   ZodBase64   //////////////////////////////
function isValidBase64(data) {
    if (data === "")
        return true;
    if (data.length % 4 !== 0)
        return false;
    try {
        // @ts-ignore
        atob(data);
        return true;
    }
    catch {
        return false;
    }
}
exports.$ZodBase64 = core.$constructor("$ZodBase64", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.base64);
    exports.$ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst) => {
        inst._zod.bag.contentEncoding = "base64";
    });
    inst._zod.check = (payload) => {
        if (isValidBase64(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
//////////////////////////////   ZodBase64   //////////////////////////////
function isValidBase64URL(data) {
    if (!regexes.base64url.test(data))
        return false;
    const base64 = data.replace(/[-_]/g, (c) => (c === "-" ? "+" : "/"));
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    return isValidBase64(padded);
}
exports.$ZodBase64URL = core.$constructor("$ZodBase64URL", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.base64url);
    exports.$ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst) => {
        inst._zod.bag.contentEncoding = "base64url";
    });
    inst._zod.check = (payload) => {
        if (isValidBase64URL(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodE164 = core.$constructor("$ZodE164", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.e164);
    exports.$ZodStringFormat.init(inst, def);
});
//////////////////////////////   ZodJWT   //////////////////////////////
function isValidJWT(token, algorithm = null) {
    try {
        const tokensParts = token.split(".");
        if (tokensParts.length !== 3)
            return false;
        const [header] = tokensParts;
        if (!header)
            return false;
        // @ts-ignore
        const parsedHeader = JSON.parse(atob(header));
        if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
            return false;
        if (!parsedHeader.alg)
            return false;
        if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
            return false;
        return true;
    }
    catch {
        return false;
    }
}
exports.$ZodJWT = core.$constructor("$ZodJWT", (inst, def) => {
    exports.$ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (isValidJWT(payload.value, def.alg))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCustomStringFormat = core.$constructor("$ZodCustomStringFormat", (inst, def) => {
    exports.$ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (def.fn(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodNumber = core.$constructor("$ZodNumber", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.pattern = inst._zod.bag.pattern ?? regexes.number;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = Number(payload.value);
            }
            catch (_) { }
        const input = payload.value;
        if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
            return payload;
        }
        const received = typeof input === "number"
            ? Number.isNaN(input)
                ? "NaN"
                : !Number.isFinite(input)
                    ? "Infinity"
                    : undefined
            : undefined;
        payload.issues.push({
            expected: "number",
            code: "invalid_type",
            input,
            inst,
            ...(received ? { received } : {}),
        });
        return payload;
    };
});
exports.$ZodNumberFormat = core.$constructor("$ZodNumber", (inst, def) => {
    checks.$ZodCheckNumberFormat.init(inst, def);
    exports.$ZodNumber.init(inst, def); // no format checksp
});
exports.$ZodBoolean = core.$constructor("$ZodBoolean", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.pattern = regexes.boolean;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = Boolean(payload.value);
            }
            catch (_) { }
        const input = payload.value;
        if (typeof input === "boolean")
            return payload;
        payload.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
exports.$ZodBigInt = core.$constructor("$ZodBigInt", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.pattern = regexes.bigint;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = BigInt(payload.value);
            }
            catch (_) { }
        if (typeof payload.value === "bigint")
            return payload;
        payload.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
exports.$ZodBigIntFormat = core.$constructor("$ZodBigInt", (inst, def) => {
    checks.$ZodCheckBigIntFormat.init(inst, def);
    exports.$ZodBigInt.init(inst, def); // no format checks
});
exports.$ZodSymbol = core.$constructor("$ZodSymbol", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "symbol")
            return payload;
        payload.issues.push({
            expected: "symbol",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
exports.$ZodUndefined = core.$constructor("$ZodUndefined", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.pattern = regexes.undefined;
    inst._zod.values = new Set([undefined]);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
            return payload;
        payload.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
exports.$ZodNull = core.$constructor("$ZodNull", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.pattern = regexes.null;
    inst._zod.values = new Set([null]);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (input === null)
            return payload;
        payload.issues.push({
            expected: "null",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
exports.$ZodAny = core.$constructor("$ZodAny", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
});
exports.$ZodUnknown = core.$constructor("$ZodUnknown", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
});
exports.$ZodNever = core.$constructor("$ZodNever", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        payload.issues.push({
            expected: "never",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
exports.$ZodVoid = core.$constructor("$ZodVoid", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
            return payload;
        payload.issues.push({
            expected: "void",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
exports.$ZodDate = core.$constructor("$ZodDate", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce) {
            try {
                payload.value = new Date(payload.value);
            }
            catch (_err) { }
        }
        const input = payload.value;
        const isDate = input instanceof Date;
        const isValidDate = isDate && !Number.isNaN(input.getTime());
        if (isValidDate)
            return payload;
        payload.issues.push({
            expected: "date",
            code: "invalid_type",
            input,
            ...(isDate ? { received: "Invalid Date" } : {}),
            inst,
        });
        return payload;
    };
});
function handleArrayResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...util.prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
}
exports.$ZodArray = core.$constructor("$ZodArray", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                expected: "array",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        payload.value = Array(input.length);
        const proms = [];
        for (let i = 0; i < input.length; i++) {
            const item = input[i];
            const result = def.element._zod.run({
                value: item,
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result) => handleArrayResult(result, payload, i)));
            }
            else {
                handleArrayResult(result, payload, i);
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(() => payload);
        }
        return payload; //handleArrayResultsAsync(parseResults, final);
    };
});
function handlePropertyResult(result, final, key, input) {
    if (result.issues.length) {
        final.issues.push(...util.prefixIssues(key, result.issues));
    }
    if (result.value === undefined) {
        if (key in input) {
            final.value[key] = undefined;
        }
    }
    else {
        final.value[key] = result.value;
    }
}
function normalizeDef(def) {
    const keys = Object.keys(def.shape);
    for (const k of keys) {
        if (!def.shape[k]._zod.traits.has("$ZodType")) {
            throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
        }
    }
    const okeys = util.optionalKeys(def.shape);
    return {
        ...def,
        keys,
        keySet: new Set(keys),
        numKeys: keys.length,
        optionalKeys: new Set(okeys),
    };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
    const unrecognized = [];
    // iterate over input keys
    const keySet = def.keySet;
    const _catchall = def.catchall._zod;
    const t = _catchall.def.type;
    for (const key of Object.keys(input)) {
        if (keySet.has(key))
            continue;
        if (t === "never") {
            unrecognized.push(key);
            continue;
        }
        const r = _catchall.run({ value: input[key], issues: [] }, ctx);
        if (r instanceof Promise) {
            proms.push(r.then((r) => handlePropertyResult(r, payload, key, input)));
        }
        else {
            handlePropertyResult(r, payload, key, input);
        }
    }
    if (unrecognized.length) {
        payload.issues.push({
            code: "unrecognized_keys",
            keys: unrecognized,
            input,
            inst,
        });
    }
    if (!proms.length)
        return payload;
    return Promise.all(proms).then(() => {
        return payload;
    });
}
exports.$ZodObject = core.$constructor("$ZodObject", (inst, def) => {
    // requires cast because technically $ZodObject doesn't extend
    exports.$ZodType.init(inst, def);
    const _normalized = util.cached(() => normalizeDef(def));
    util.defineLazy(inst._zod, "propValues", () => {
        const shape = def.shape;
        const propValues = {};
        for (const key in shape) {
            const field = shape[key]._zod;
            if (field.values) {
                propValues[key] ?? (propValues[key] = new Set());
                for (const v of field.values)
                    propValues[key].add(v);
            }
        }
        return propValues;
    });
    const isObject = util.isObject;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        payload.value = {};
        const proms = [];
        const shape = value.shape;
        for (const key of value.keys) {
            const el = shape[key];
            const r = el._zod.run({ value: input[key], issues: [] }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((r) => handlePropertyResult(r, payload, key, input)));
            }
            else {
                handlePropertyResult(r, payload, key, input);
            }
        }
        if (!catchall) {
            return proms.length ? Promise.all(proms).then(() => payload) : payload;
        }
        return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
    };
});
exports.$ZodObjectJIT = core.$constructor("$ZodObjectJIT", (inst, def) => {
    // requires cast because technically $ZodObject doesn't extend
    exports.$ZodObject.init(inst, def);
    const superParse = inst._zod.parse;
    const _normalized = util.cached(() => normalizeDef(def));
    const generateFastpass = (shape) => {
        const doc = new doc_js_1.Doc(["shape", "payload", "ctx"]);
        const normalized = _normalized.value;
        const parseStr = (key) => {
            const k = util.esc(key);
            return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        };
        doc.write(`const input = payload.value;`);
        const ids = Object.create(null);
        let counter = 0;
        for (const key of normalized.keys) {
            ids[key] = `key_${counter++}`;
        }
        // A: preserve key order {
        doc.write(`const newResult = {}`);
        for (const key of normalized.keys) {
            const id = ids[key];
            const k = util.esc(key);
            doc.write(`const ${id} = ${parseStr(key)};`);
            doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
      `);
        }
        doc.write(`payload.value = newResult;`);
        doc.write(`return payload;`);
        const fn = doc.compile();
        return (payload, ctx) => fn(shape, payload, ctx);
    };
    let fastpass;
    const isObject = util.isObject;
    const jit = !core.globalConfig.jitless;
    const allowsEval = util.allowsEval;
    const fastEnabled = jit && allowsEval.value; // && !def.catchall;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
            // always synchronous
            if (!fastpass)
                fastpass = generateFastpass(def.shape);
            payload = fastpass(payload, ctx);
            if (!catchall)
                return payload;
            return handleCatchall([], input, payload, ctx, value, inst);
        }
        return superParse(payload, ctx);
    };
});
function handleUnionResults(results, final, inst, ctx) {
    for (const result of results) {
        if (result.issues.length === 0) {
            final.value = result.value;
            return final;
        }
    }
    const nonaborted = results.filter((r) => !util.aborted(r));
    if (nonaborted.length === 1) {
        final.value = nonaborted[0].value;
        return nonaborted[0];
    }
    final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result) => result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))),
    });
    return final;
}
exports.$ZodUnion = core.$constructor("$ZodUnion", (inst, def) => {
    exports.$ZodType.init(inst, def);
    util.defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : undefined);
    util.defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
    util.defineLazy(inst._zod, "values", () => {
        if (def.options.every((o) => o._zod.values)) {
            return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
        }
        return undefined;
    });
    util.defineLazy(inst._zod, "pattern", () => {
        if (def.options.every((o) => o._zod.pattern)) {
            const patterns = def.options.map((o) => o._zod.pattern);
            return new RegExp(`^(${patterns.map((p) => util.cleanRegex(p.source)).join("|")})$`);
        }
        return undefined;
    });
    const single = def.options.length === 1;
    const first = def.options[0]._zod.run;
    inst._zod.parse = (payload, ctx) => {
        if (single) {
            return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options) {
            const result = option._zod.run({
                value: payload.value,
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            }
            else {
                if (result.issues.length === 0)
                    return result;
                results.push(result);
            }
        }
        if (!async)
            return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results) => {
            return handleUnionResults(results, payload, inst, ctx);
        });
    };
});
exports.$ZodDiscriminatedUnion = 
/*@__PURE__*/
core.$constructor("$ZodDiscriminatedUnion", (inst, def) => {
    exports.$ZodUnion.init(inst, def);
    const _super = inst._zod.parse;
    util.defineLazy(inst._zod, "propValues", () => {
        const propValues = {};
        for (const option of def.options) {
            const pv = option._zod.propValues;
            if (!pv || Object.keys(pv).length === 0)
                throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
            for (const [k, v] of Object.entries(pv)) {
                if (!propValues[k])
                    propValues[k] = new Set();
                for (const val of v) {
                    propValues[k].add(val);
                }
            }
        }
        return propValues;
    });
    const disc = util.cached(() => {
        const opts = def.options;
        const map = new Map();
        for (const o of opts) {
            const values = o._zod.propValues?.[def.discriminator];
            if (!values || values.size === 0)
                throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
            for (const v of values) {
                if (map.has(v)) {
                    throw new Error(`Duplicate discriminator value "${String(v)}"`);
                }
                map.set(v, o);
            }
        }
        return map;
    });
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!util.isObject(input)) {
            payload.issues.push({
                code: "invalid_type",
                expected: "object",
                input,
                inst,
            });
            return payload;
        }
        const opt = disc.value.get(input?.[def.discriminator]);
        if (opt) {
            return opt._zod.run(payload, ctx);
        }
        if (def.unionFallback) {
            return _super(payload, ctx);
        }
        // no matching discriminator
        payload.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            discriminator: def.discriminator,
            input,
            path: [def.discriminator],
            inst,
        });
        return payload;
    };
});
exports.$ZodIntersection = core.$constructor("$ZodIntersection", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        const left = def.left._zod.run({ value: input, issues: [] }, ctx);
        const right = def.right._zod.run({ value: input, issues: [] }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
            return Promise.all([left, right]).then(([left, right]) => {
                return handleIntersectionResults(payload, left, right);
            });
        }
        return handleIntersectionResults(payload, left, right);
    };
});
function mergeValues(a, b) {
    // const aType = parse.t(a);
    // const bType = parse.t(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    if (a instanceof Date && b instanceof Date && +a === +b) {
        return { valid: true, data: a };
    }
    if (util.isPlainObject(a) && util.isPlainObject(b)) {
        const bKeys = Object.keys(b);
        const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [key, ...sharedValue.mergeErrorPath],
                };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return { valid: false, mergeErrorPath: [] };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [index, ...sharedValue.mergeErrorPath],
                };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
    if (left.issues.length) {
        result.issues.push(...left.issues);
    }
    if (right.issues.length) {
        result.issues.push(...right.issues);
    }
    if (util.aborted(result))
        return result;
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
        throw new Error(`Unmergable intersection. Error path: ` + `${JSON.stringify(merged.mergeErrorPath)}`);
    }
    result.value = merged.data;
    return result;
}
exports.$ZodTuple = core.$constructor("$ZodTuple", (inst, def) => {
    exports.$ZodType.init(inst, def);
    const items = def.items;
    const optStart = items.length - [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                input,
                inst,
                expected: "tuple",
                code: "invalid_type",
            });
            return payload;
        }
        payload.value = [];
        const proms = [];
        if (!def.rest) {
            const tooBig = input.length > items.length;
            const tooSmall = input.length < optStart - 1;
            if (tooBig || tooSmall) {
                payload.issues.push({
                    ...(tooBig ? { code: "too_big", maximum: items.length } : { code: "too_small", minimum: items.length }),
                    input,
                    inst,
                    origin: "array",
                });
                return payload;
            }
        }
        let i = -1;
        for (const item of items) {
            i++;
            if (i >= input.length)
                if (i >= optStart)
                    continue;
            const result = item._zod.run({
                value: input[i],
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result) => handleTupleResult(result, payload, i)));
            }
            else {
                handleTupleResult(result, payload, i);
            }
        }
        if (def.rest) {
            const rest = input.slice(items.length);
            for (const el of rest) {
                i++;
                const result = def.rest._zod.run({
                    value: el,
                    issues: [],
                }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result) => handleTupleResult(result, payload, i)));
                }
                else {
                    handleTupleResult(result, payload, i);
                }
            }
        }
        if (proms.length)
            return Promise.all(proms).then(() => payload);
        return payload;
    };
});
function handleTupleResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...util.prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
}
exports.$ZodRecord = core.$constructor("$ZodRecord", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!util.isPlainObject(input)) {
            payload.issues.push({
                expected: "record",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        const proms = [];
        if (def.keyType._zod.values) {
            const values = def.keyType._zod.values;
            payload.value = {};
            for (const key of values) {
                if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
                    const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
                    if (result instanceof Promise) {
                        proms.push(result.then((result) => {
                            if (result.issues.length) {
                                payload.issues.push(...util.prefixIssues(key, result.issues));
                            }
                            payload.value[key] = result.value;
                        }));
                    }
                    else {
                        if (result.issues.length) {
                            payload.issues.push(...util.prefixIssues(key, result.issues));
                        }
                        payload.value[key] = result.value;
                    }
                }
            }
            let unrecognized;
            for (const key in input) {
                if (!values.has(key)) {
                    unrecognized = unrecognized ?? [];
                    unrecognized.push(key);
                }
            }
            if (unrecognized && unrecognized.length > 0) {
                payload.issues.push({
                    code: "unrecognized_keys",
                    input,
                    inst,
                    keys: unrecognized,
                });
            }
        }
        else {
            payload.value = {};
            for (const key of Reflect.ownKeys(input)) {
                if (key === "__proto__")
                    continue;
                const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
                if (keyResult instanceof Promise) {
                    throw new Error("Async schemas not supported in object keys currently");
                }
                if (keyResult.issues.length) {
                    payload.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: keyResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
                        input: key,
                        path: [key],
                        inst,
                    });
                    payload.value[keyResult.value] = keyResult.value;
                    continue;
                }
                const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result) => {
                        if (result.issues.length) {
                            payload.issues.push(...util.prefixIssues(key, result.issues));
                        }
                        payload.value[keyResult.value] = result.value;
                    }));
                }
                else {
                    if (result.issues.length) {
                        payload.issues.push(...util.prefixIssues(key, result.issues));
                    }
                    payload.value[keyResult.value] = result.value;
                }
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(() => payload);
        }
        return payload;
    };
});
exports.$ZodMap = core.$constructor("$ZodMap", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Map)) {
            payload.issues.push({
                expected: "map",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        const proms = [];
        payload.value = new Map();
        for (const [key, value] of input) {
            const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
            const valueResult = def.valueType._zod.run({ value: value, issues: [] }, ctx);
            if (keyResult instanceof Promise || valueResult instanceof Promise) {
                proms.push(Promise.all([keyResult, valueResult]).then(([keyResult, valueResult]) => {
                    handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
                }));
            }
            else {
                handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
            }
        }
        if (proms.length)
            return Promise.all(proms).then(() => payload);
        return payload;
    };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
    if (keyResult.issues.length) {
        if (util.propertyKeyTypes.has(typeof key)) {
            final.issues.push(...util.prefixIssues(key, keyResult.issues));
        }
        else {
            final.issues.push({
                code: "invalid_key",
                origin: "map",
                input,
                inst,
                issues: keyResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
            });
        }
    }
    if (valueResult.issues.length) {
        if (util.propertyKeyTypes.has(typeof key)) {
            final.issues.push(...util.prefixIssues(key, valueResult.issues));
        }
        else {
            final.issues.push({
                origin: "map",
                code: "invalid_element",
                input,
                inst,
                key: key,
                issues: valueResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
            });
        }
    }
    final.value.set(keyResult.value, valueResult.value);
}
exports.$ZodSet = core.$constructor("$ZodSet", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Set)) {
            payload.issues.push({
                input,
                inst,
                expected: "set",
                code: "invalid_type",
            });
            return payload;
        }
        const proms = [];
        payload.value = new Set();
        for (const item of input) {
            const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result) => handleSetResult(result, payload)));
            }
            else
                handleSetResult(result, payload);
        }
        if (proms.length)
            return Promise.all(proms).then(() => payload);
        return payload;
    };
});
function handleSetResult(result, final) {
    if (result.issues.length) {
        final.issues.push(...result.issues);
    }
    final.value.add(result.value);
}
exports.$ZodEnum = core.$constructor("$ZodEnum", (inst, def) => {
    exports.$ZodType.init(inst, def);
    const values = util.getEnumValues(def.entries);
    const valuesSet = new Set(values);
    inst._zod.values = valuesSet;
    inst._zod.pattern = new RegExp(`^(${values
        .filter((k) => util.propertyKeyTypes.has(typeof k))
        .map((o) => (typeof o === "string" ? util.escapeRegex(o) : o.toString()))
        .join("|")})$`);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (valuesSet.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values,
            input,
            inst,
        });
        return payload;
    };
});
exports.$ZodLiteral = core.$constructor("$ZodLiteral", (inst, def) => {
    exports.$ZodType.init(inst, def);
    if (def.values.length === 0) {
        throw new Error("Cannot create literal schema with no valid values");
    }
    inst._zod.values = new Set(def.values);
    inst._zod.pattern = new RegExp(`^(${def.values
        .map((o) => (typeof o === "string" ? util.escapeRegex(o) : o ? util.escapeRegex(o.toString()) : String(o)))
        .join("|")})$`);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (inst._zod.values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values: def.values,
            input,
            inst,
        });
        return payload;
    };
});
exports.$ZodFile = core.$constructor("$ZodFile", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        // @ts-ignore
        if (input instanceof File)
            return payload;
        payload.issues.push({
            expected: "file",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
exports.$ZodTransform = core.$constructor("$ZodTransform", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            throw new core.$ZodEncodeError(inst.constructor.name);
        }
        const _out = def.transform(payload.value, payload);
        if (ctx.async) {
            const output = _out instanceof Promise ? _out : Promise.resolve(_out);
            return output.then((output) => {
                payload.value = output;
                return payload;
            });
        }
        if (_out instanceof Promise) {
            throw new core.$ZodAsyncError();
        }
        payload.value = _out;
        return payload;
    };
});
function handleOptionalResult(result, input) {
    if (result.issues.length && input === undefined) {
        return { issues: [], value: undefined };
    }
    return result;
}
exports.$ZodOptional = core.$constructor("$ZodOptional", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    util.defineLazy(inst._zod, "values", () => {
        return def.innerType._zod.values ? new Set([...def.innerType._zod.values, undefined]) : undefined;
    });
    util.defineLazy(inst._zod, "pattern", () => {
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${util.cleanRegex(pattern.source)})?$`) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        if (def.innerType._zod.optin === "optional") {
            const result = def.innerType._zod.run(payload, ctx);
            if (result instanceof Promise)
                return result.then((r) => handleOptionalResult(r, payload.value));
            return handleOptionalResult(result, payload.value);
        }
        if (payload.value === undefined) {
            return payload;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
exports.$ZodNullable = core.$constructor("$ZodNullable", (inst, def) => {
    exports.$ZodType.init(inst, def);
    util.defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    util.defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    util.defineLazy(inst._zod, "pattern", () => {
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${util.cleanRegex(pattern.source)}|null)$`) : undefined;
    });
    util.defineLazy(inst._zod, "values", () => {
        return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        // Forward direction (decode): allow null to pass through
        if (payload.value === null)
            return payload;
        return def.innerType._zod.run(payload, ctx);
    };
});
exports.$ZodDefault = core.$constructor("$ZodDefault", (inst, def) => {
    exports.$ZodType.init(inst, def);
    // inst._zod.qin = "true";
    inst._zod.optin = "optional";
    util.defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply defaults for undefined input
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
            /**
             * $ZodDefault returns the default value immediately in forward direction.
             * It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
            return payload;
        }
        // Forward direction: continue with default handling
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => handleDefaultResult(result, def));
        }
        return handleDefaultResult(result, def);
    };
});
function handleDefaultResult(payload, def) {
    if (payload.value === undefined) {
        payload.value = def.defaultValue;
    }
    return payload;
}
exports.$ZodPrefault = core.$constructor("$ZodPrefault", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.optin = "optional";
    util.defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply prefault for undefined input
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
exports.$ZodNonOptional = core.$constructor("$ZodNonOptional", (inst, def) => {
    exports.$ZodType.init(inst, def);
    util.defineLazy(inst._zod, "values", () => {
        const v = def.innerType._zod.values;
        return v ? new Set([...v].filter((x) => x !== undefined)) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => handleNonOptionalResult(result, inst));
        }
        return handleNonOptionalResult(result, inst);
    };
});
function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === undefined) {
        payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: payload.value,
            inst,
        });
    }
    return payload;
}
exports.$ZodSuccess = core.$constructor("$ZodSuccess", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            throw new core.$ZodEncodeError("ZodSuccess");
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => {
                payload.value = result.issues.length === 0;
                return payload;
            });
        }
        payload.value = result.issues.length === 0;
        return payload;
    };
});
exports.$ZodCatch = core.$constructor("$ZodCatch", (inst, def) => {
    exports.$ZodType.init(inst, def);
    util.defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    util.defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    util.defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply catch logic
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => {
                payload.value = result.value;
                if (result.issues.length) {
                    payload.value = def.catchValue({
                        ...payload,
                        error: {
                            issues: result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
                        },
                        input: payload.value,
                    });
                    payload.issues = [];
                }
                return payload;
            });
        }
        payload.value = result.value;
        if (result.issues.length) {
            payload.value = def.catchValue({
                ...payload,
                error: {
                    issues: result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
                },
                input: payload.value,
            });
            payload.issues = [];
        }
        return payload;
    };
});
exports.$ZodNaN = core.$constructor("$ZodNaN", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "nan",
                code: "invalid_type",
            });
            return payload;
        }
        return payload;
    };
});
exports.$ZodPipe = core.$constructor("$ZodPipe", (inst, def) => {
    exports.$ZodType.init(inst, def);
    util.defineLazy(inst._zod, "values", () => def.in._zod.values);
    util.defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    util.defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    util.defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            const right = def.out._zod.run(payload, ctx);
            if (right instanceof Promise) {
                return right.then((right) => handlePipeResult(right, def.in, ctx));
            }
            return handlePipeResult(right, def.in, ctx);
        }
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
            return left.then((left) => handlePipeResult(left, def.out, ctx));
        }
        return handlePipeResult(left, def.out, ctx);
    };
});
function handlePipeResult(left, next, ctx) {
    if (left.issues.length) {
        // prevent further checks
        left.aborted = true;
        return left;
    }
    return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
exports.$ZodCodec = core.$constructor("$ZodCodec", (inst, def) => {
    exports.$ZodType.init(inst, def);
    util.defineLazy(inst._zod, "values", () => def.in._zod.values);
    util.defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    util.defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    util.defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
        const direction = ctx.direction || "forward";
        if (direction === "forward") {
            const left = def.in._zod.run(payload, ctx);
            if (left instanceof Promise) {
                return left.then((left) => handleCodecAResult(left, def, ctx));
            }
            return handleCodecAResult(left, def, ctx);
        }
        else {
            const right = def.out._zod.run(payload, ctx);
            if (right instanceof Promise) {
                return right.then((right) => handleCodecAResult(right, def, ctx));
            }
            return handleCodecAResult(right, def, ctx);
        }
    };
});
function handleCodecAResult(result, def, ctx) {
    if (result.issues.length) {
        // prevent further checks
        result.aborted = true;
        return result;
    }
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
        const transformed = def.transform(result.value, result);
        if (transformed instanceof Promise) {
            return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
        }
        return handleCodecTxResult(result, transformed, def.out, ctx);
    }
    else {
        const transformed = def.reverseTransform(result.value, result);
        if (transformed instanceof Promise) {
            return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
        }
        return handleCodecTxResult(result, transformed, def.in, ctx);
    }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
    // Check if transform added any issues
    if (left.issues.length) {
        left.aborted = true;
        return left;
    }
    return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
exports.$ZodReadonly = core.$constructor("$ZodReadonly", (inst, def) => {
    exports.$ZodType.init(inst, def);
    util.defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
    util.defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    util.defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    util.defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
    };
});
function handleReadonlyResult(payload) {
    payload.value = Object.freeze(payload.value);
    return payload;
}
exports.$ZodTemplateLiteral = core.$constructor("$ZodTemplateLiteral", (inst, def) => {
    exports.$ZodType.init(inst, def);
    const regexParts = [];
    for (const part of def.parts) {
        if (typeof part === "object" && part !== null) {
            // is Zod schema
            if (!part._zod.pattern) {
                // if (!source)
                throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
            }
            const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
            if (!source)
                throw new Error(`Invalid template literal part: ${part._zod.traits}`);
            const start = source.startsWith("^") ? 1 : 0;
            const end = source.endsWith("$") ? source.length - 1 : source.length;
            regexParts.push(source.slice(start, end));
        }
        else if (part === null || util.primitiveTypes.has(typeof part)) {
            regexParts.push(util.escapeRegex(`${part}`));
        }
        else {
            throw new Error(`Invalid template literal part: ${part}`);
        }
    }
    inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "string") {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "template_literal",
                code: "invalid_type",
            });
            return payload;
        }
        inst._zod.pattern.lastIndex = 0;
        if (!inst._zod.pattern.test(payload.value)) {
            payload.issues.push({
                input: payload.value,
                inst,
                code: "invalid_format",
                format: def.format ?? "template_literal",
                pattern: inst._zod.pattern.source,
            });
            return payload;
        }
        return payload;
    };
});
exports.$ZodFunction = core.$constructor("$ZodFunction", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._def = def;
    inst._zod.def = def;
    inst.implement = (func) => {
        if (typeof func !== "function") {
            throw new Error("implement() must be called with a function");
        }
        return function (...args) {
            const parsedArgs = inst._def.input ? (0, parse_js_1.parse)(inst._def.input, args) : args;
            const result = Reflect.apply(func, this, parsedArgs);
            if (inst._def.output) {
                return (0, parse_js_1.parse)(inst._def.output, result);
            }
            return result;
        };
    };
    inst.implementAsync = (func) => {
        if (typeof func !== "function") {
            throw new Error("implementAsync() must be called with a function");
        }
        return async function (...args) {
            const parsedArgs = inst._def.input ? await (0, parse_js_1.parseAsync)(inst._def.input, args) : args;
            const result = await Reflect.apply(func, this, parsedArgs);
            if (inst._def.output) {
                return await (0, parse_js_1.parseAsync)(inst._def.output, result);
            }
            return result;
        };
    };
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "function") {
            payload.issues.push({
                code: "invalid_type",
                expected: "function",
                input: payload.value,
                inst,
            });
            return payload;
        }
        // Check if output is a promise type to determine if we should use async implementation
        const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
        if (hasPromiseOutput) {
            payload.value = inst.implementAsync(payload.value);
        }
        else {
            payload.value = inst.implement(payload.value);
        }
        return payload;
    };
    inst.input = (...args) => {
        const F = inst.constructor;
        if (Array.isArray(args[0])) {
            return new F({
                type: "function",
                input: new exports.$ZodTuple({
                    type: "tuple",
                    items: args[0],
                    rest: args[1],
                }),
                output: inst._def.output,
            });
        }
        return new F({
            type: "function",
            input: args[0],
            output: inst._def.output,
        });
    };
    inst.output = (output) => {
        const F = inst.constructor;
        return new F({
            type: "function",
            input: inst._def.input,
            output,
        });
    };
    return inst;
});
exports.$ZodPromise = core.$constructor("$ZodPromise", (inst, def) => {
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
    };
});
exports.$ZodLazy = core.$constructor("$ZodLazy", (inst, def) => {
    exports.$ZodType.init(inst, def);
    // let _innerType!: any;
    // util.defineLazy(def, "getter", () => {
    //   if (!_innerType) {
    //     _innerType = def.getter();
    //   }
    //   return () => _innerType;
    // });
    util.defineLazy(inst._zod, "innerType", () => def.getter());
    util.defineLazy(inst._zod, "pattern", () => inst._zod.innerType._zod.pattern);
    util.defineLazy(inst._zod, "propValues", () => inst._zod.innerType._zod.propValues);
    util.defineLazy(inst._zod, "optin", () => inst._zod.innerType._zod.optin ?? undefined);
    util.defineLazy(inst._zod, "optout", () => inst._zod.innerType._zod.optout ?? undefined);
    inst._zod.parse = (payload, ctx) => {
        const inner = inst._zod.innerType;
        return inner._zod.run(payload, ctx);
    };
});
exports.$ZodCustom = core.$constructor("$ZodCustom", (inst, def) => {
    checks.$ZodCheck.init(inst, def);
    exports.$ZodType.init(inst, def);
    inst._zod.parse = (payload, _) => {
        return payload;
    };
    inst._zod.check = (payload) => {
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
            return r.then((r) => handleRefineResult(r, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
    };
});
function handleRefineResult(result, payload, input, inst) {
    if (!result) {
        const _iss = {
            code: "custom",
            input,
            inst, // incorporates params.error into issue reporting
            path: [...(inst._zod.def.path ?? [])], // incorporates params.error into issue reporting
            continue: !inst._zod.def.abort,
            // params: inst._zod.def.params,
        };
        if (inst._zod.def.params)
            _iss.params = inst._zod.def.params;
        payload.issues.push(util.issue(_iss));
    }
}


/***/ }),

/***/ 5614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateV1State = void 0;
const rng_js_1 = __webpack_require__(9018);
const stringify_js_1 = __webpack_require__(7382);
const _state = {};
function v1(options, buf, offset) {
    let bytes;
    const isV6 = options?._v6 ?? false;
    if (options) {
        const optionsKeys = Object.keys(options);
        if (optionsKeys.length === 1 && optionsKeys[0] === '_v6') {
            options = undefined;
        }
    }
    if (options) {
        bytes = v1Bytes(options.random ?? options.rng?.() ?? (0, rng_js_1.default)(), options.msecs, options.nsecs, options.clockseq, options.node, buf, offset);
    }
    else {
        const now = Date.now();
        const rnds = (0, rng_js_1.default)();
        updateV1State(_state, now, rnds);
        bytes = v1Bytes(rnds, _state.msecs, _state.nsecs, isV6 ? undefined : _state.clockseq, isV6 ? undefined : _state.node, buf, offset);
    }
    return buf ?? (0, stringify_js_1.unsafeStringify)(bytes);
}
function updateV1State(state, now, rnds) {
    state.msecs ??= -Infinity;
    state.nsecs ??= 0;
    if (now === state.msecs) {
        state.nsecs++;
        if (state.nsecs >= 10000) {
            state.node = undefined;
            state.nsecs = 0;
        }
    }
    else if (now > state.msecs) {
        state.nsecs = 0;
    }
    else if (now < state.msecs) {
        state.node = undefined;
    }
    if (!state.node) {
        state.node = rnds.slice(10, 16);
        state.node[0] |= 0x01;
        state.clockseq = ((rnds[8] << 8) | rnds[9]) & 0x3fff;
    }
    state.msecs = now;
    return state;
}
exports.updateV1State = updateV1State;
function v1Bytes(rnds, msecs, nsecs, clockseq, node, buf, offset = 0) {
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    if (!buf) {
        buf = new Uint8Array(16);
        offset = 0;
    }
    else {
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
    }
    msecs ??= Date.now();
    nsecs ??= 0;
    clockseq ??= ((rnds[8] << 8) | rnds[9]) & 0x3fff;
    node ??= rnds.slice(10, 16);
    msecs += 12219292800000;
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    buf[offset++] = (tl >>> 24) & 0xff;
    buf[offset++] = (tl >>> 16) & 0xff;
    buf[offset++] = (tl >>> 8) & 0xff;
    buf[offset++] = tl & 0xff;
    const tmh = ((msecs / 0x100000000) * 10000) & 0xfffffff;
    buf[offset++] = (tmh >>> 8) & 0xff;
    buf[offset++] = tmh & 0xff;
    buf[offset++] = ((tmh >>> 24) & 0xf) | 0x10;
    buf[offset++] = (tmh >>> 16) & 0xff;
    buf[offset++] = (clockseq >>> 8) | 0x80;
    buf[offset++] = clockseq & 0xff;
    for (let n = 0; n < 6; ++n) {
        buf[offset++] = node[n];
    }
    return buf;
}
exports["default"] = v1;


/***/ }),

/***/ 5832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateV7State = void 0;
const rng_js_1 = __webpack_require__(9018);
const stringify_js_1 = __webpack_require__(7382);
const _state = {};
function v7(options, buf, offset) {
    let bytes;
    if (options) {
        bytes = v7Bytes(options.random ?? options.rng?.() ?? (0, rng_js_1.default)(), options.msecs, options.seq, buf, offset);
    }
    else {
        const now = Date.now();
        const rnds = (0, rng_js_1.default)();
        updateV7State(_state, now, rnds);
        bytes = v7Bytes(rnds, _state.msecs, _state.seq, buf, offset);
    }
    return buf ?? (0, stringify_js_1.unsafeStringify)(bytes);
}
function updateV7State(state, now, rnds) {
    state.msecs ??= -Infinity;
    state.seq ??= 0;
    if (now > state.msecs) {
        state.seq = (rnds[6] << 23) | (rnds[7] << 16) | (rnds[8] << 8) | rnds[9];
        state.msecs = now;
    }
    else {
        state.seq = (state.seq + 1) | 0;
        if (state.seq === 0) {
            state.msecs++;
        }
    }
    return state;
}
exports.updateV7State = updateV7State;
function v7Bytes(rnds, msecs, seq, buf, offset = 0) {
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    if (!buf) {
        buf = new Uint8Array(16);
        offset = 0;
    }
    else {
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
    }
    msecs ??= Date.now();
    seq ??= ((rnds[6] * 0x7f) << 24) | (rnds[7] << 16) | (rnds[8] << 8) | rnds[9];
    buf[offset++] = (msecs / 0x10000000000) & 0xff;
    buf[offset++] = (msecs / 0x100000000) & 0xff;
    buf[offset++] = (msecs / 0x1000000) & 0xff;
    buf[offset++] = (msecs / 0x10000) & 0xff;
    buf[offset++] = (msecs / 0x100) & 0xff;
    buf[offset++] = msecs & 0xff;
    buf[offset++] = 0x70 | ((seq >>> 28) & 0x0f);
    buf[offset++] = (seq >>> 20) & 0xff;
    buf[offset++] = 0x80 | ((seq >>> 14) & 0x3f);
    buf[offset++] = (seq >>> 6) & 0xff;
    buf[offset++] = ((seq << 2) & 0xff) | (rnds[10] & 0x03);
    buf[offset++] = rnds[11];
    buf[offset++] = rnds[12];
    buf[offset++] = rnds[13];
    buf[offset++] = rnds[14];
    buf[offset++] = rnds[15];
    return buf;
}
exports["default"] = v7;


/***/ }),

/***/ 5884:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.z = void 0;
const z = __importStar(__webpack_require__(435));
exports.z = z;
__exportStar(__webpack_require__(435), exports);
exports["default"] = z;


/***/ }),

/***/ 5887:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZodRealError = exports.ZodError = void 0;
const core = __importStar(__webpack_require__(6405));
const index_js_1 = __webpack_require__(6405);
const util = __importStar(__webpack_require__(2879));
const initializer = (inst, issues) => {
    index_js_1.$ZodError.init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
        format: {
            value: (mapper) => core.formatError(inst, mapper),
            // enumerable: false,
        },
        flatten: {
            value: (mapper) => core.flattenError(inst, mapper),
            // enumerable: false,
        },
        addIssue: {
            value: (issue) => {
                inst.issues.push(issue);
                inst.message = JSON.stringify(inst.issues, util.jsonStringifyReplacer, 2);
            },
            // enumerable: false,
        },
        addIssues: {
            value: (issues) => {
                inst.issues.push(...issues);
                inst.message = JSON.stringify(inst.issues, util.jsonStringifyReplacer, 2);
            },
            // enumerable: false,
        },
        isEmpty: {
            get() {
                return inst.issues.length === 0;
            },
            // enumerable: false,
        },
    });
    // Object.defineProperty(inst, "isEmpty", {
    //   get() {
    //     return inst.issues.length === 0;
    //   },
    // });
};
exports.ZodError = core.$constructor("ZodError", initializer);
exports.ZodRealError = core.$constructor("ZodError", initializer, {
    Parent: Error,
});
// /** @deprecated Use `z.core.$ZodErrorMapCtx` instead. */
// export type ErrorMapCtx = core.$ZodErrorMapCtx;


/***/ }),

/***/ 6296:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha384_base64 = exports.sha384_hex = exports.sha256_base64url = exports.sha256_base64 = exports.sha256_hex = exports.sha1_base64url = exports.sha1_base64 = exports.sha1_hex = exports.md5_base64url = exports.md5_base64 = exports.md5_hex = exports.hex = exports.uppercase = exports.lowercase = exports.undefined = exports["null"] = exports.boolean = exports.number = exports.integer = exports.bigint = exports.string = exports.date = exports.e164 = exports.domain = exports.hostname = exports.base64url = exports.base64 = exports.cidrv6 = exports.cidrv4 = exports.ipv6 = exports.ipv4 = exports.browserEmail = exports.idnEmail = exports.unicodeEmail = exports.rfc5322Email = exports.html5Email = exports.email = exports.uuid7 = exports.uuid6 = exports.uuid4 = exports.uuid = exports.guid = exports.extendedDuration = exports.duration = exports.nanoid = exports.ksuid = exports.xid = exports.ulid = exports.cuid2 = exports.cuid = void 0;
exports.sha512_base64url = exports.sha512_base64 = exports.sha512_hex = exports.sha384_base64url = void 0;
exports.emoji = emoji;
exports.time = time;
exports.datetime = datetime;
exports.cuid = /^[cC][^\s-]{8,}$/;
exports.cuid2 = /^[0-9a-z]+$/;
exports.ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
exports.xid = /^[0-9a-vA-V]{20}$/;
exports.ksuid = /^[A-Za-z0-9]{27}$/;
exports.nanoid = /^[a-zA-Z0-9_-]{21}$/;
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
exports.duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** Implements ISO 8601-2 extensions like explicit +- prefixes, mixing weeks with other units, and fractional/negative components. */
exports.extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
exports.guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
 *
 * @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
const uuid = (version) => {
    if (!version)
        return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
exports.uuid = uuid;
exports.uuid4 = (0, exports.uuid)(4);
exports.uuid6 = (0, exports.uuid)(6);
exports.uuid7 = (0, exports.uuid)(7);
/** Practical email validation */
exports.email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
/** Equivalent to the HTML5 input[type=email] validation implemented by browsers. Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email */
exports.html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/** The classic emailregex.com regex for RFC 5322-compliant emails */
exports.rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/** A loose regex that allows Unicode characters, enforces length limits, and that's about it. */
exports.unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
exports.idnEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
exports.browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
    return new RegExp(_emoji, "u");
}
exports.ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
exports.ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
exports.cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
exports.cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
exports.base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
exports.base64url = /^[A-Za-z0-9_-]*$/;
// based on https://stackoverflow.com/questions/106179/regular-expression-to-match-dns-hostname-or-ip-address
// export const hostname: RegExp = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
exports.hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
exports.domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
// https://blog.stevenlevithan.com/archives/validate-phone-number#r4-3 (regex sans spaces)
exports.e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
// const dateSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
exports.date = new RegExp(`^${dateSource}$`);
function timeSource(args) {
    const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
    const regex = typeof args.precision === "number"
        ? args.precision === -1
            ? `${hhmm}`
            : args.precision === 0
                ? `${hhmm}:[0-5]\\d`
                : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}`
        : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    return regex;
}
function time(args) {
    return new RegExp(`^${timeSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetime(args) {
    const time = timeSource({ precision: args.precision });
    const opts = ["Z"];
    if (args.local)
        opts.push("");
    // if (args.offset) opts.push(`([+-]\\d{2}:\\d{2})`);
    if (args.offset)
        opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
    const timeRegex = `${time}(?:${opts.join("|")})`;
    return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
const string = (params) => {
    const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
};
exports.string = string;
exports.bigint = /^\d+n?$/;
exports.integer = /^\d+$/;
exports.number = /^-?\d+(?:\.\d+)?/i;
exports.boolean = /true|false/i;
const _null = /null/i;
exports["null"] = _null;
const _undefined = /undefined/i;
exports.undefined = _undefined;
// regex for string with no uppercase letters
exports.lowercase = /^[^A-Z]*$/;
// regex for string with no lowercase letters
exports.uppercase = /^[^a-z]*$/;
// regex for hexadecimal strings (any length)
exports.hex = /^[0-9a-fA-F]*$/;
// Hash regexes for different algorithms and encodings
// Helper function to create base64 regex with exact length and padding
function fixedBase64(bodyLength, padding) {
    return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
// Helper function to create base64url regex with exact length (no padding)
function fixedBase64url(length) {
    return new RegExp(`^[A-Za-z0-9-_]{${length}}$`);
}
// MD5 (16 bytes): base64 = 24 chars total (22 + "==")
exports.md5_hex = /^[0-9a-fA-F]{32}$/;
exports.md5_base64 = fixedBase64(22, "==");
exports.md5_base64url = fixedBase64url(22);
// SHA1 (20 bytes): base64 = 28 chars total (27 + "=")
exports.sha1_hex = /^[0-9a-fA-F]{40}$/;
exports.sha1_base64 = fixedBase64(27, "=");
exports.sha1_base64url = fixedBase64url(27);
// SHA256 (32 bytes): base64 = 44 chars total (43 + "=")
exports.sha256_hex = /^[0-9a-fA-F]{64}$/;
exports.sha256_base64 = fixedBase64(43, "=");
exports.sha256_base64url = fixedBase64url(43);
// SHA384 (48 bytes): base64 = 64 chars total (no padding)
exports.sha384_hex = /^[0-9a-fA-F]{96}$/;
exports.sha384_base64 = fixedBase64(64, "");
exports.sha384_base64url = fixedBase64url(64);
// SHA512 (64 bytes): base64 = 88 chars total (86 + "==")
exports.sha512_hex = /^[0-9a-fA-F]{128}$/;
exports.sha512_base64 = fixedBase64(86, "==");
exports.sha512_base64url = fixedBase64url(86);


/***/ }),

/***/ 6405:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JSONSchema = exports.locales = exports.regexes = exports.util = void 0;
__exportStar(__webpack_require__(1870), exports);
__exportStar(__webpack_require__(2048), exports);
__exportStar(__webpack_require__(9958), exports);
__exportStar(__webpack_require__(5585), exports);
__exportStar(__webpack_require__(6648), exports);
__exportStar(__webpack_require__(7696), exports);
exports.util = __importStar(__webpack_require__(2879));
exports.regexes = __importStar(__webpack_require__(6296));
exports.locales = __importStar(__webpack_require__(3859));
__exportStar(__webpack_require__(9766), exports);
__exportStar(__webpack_require__(4187), exports);
__exportStar(__webpack_require__(873), exports);
__exportStar(__webpack_require__(2369), exports);
exports.JSONSchema = __importStar(__webpack_require__(6883));


/***/ }),

/***/ 6441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "número";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "arreglo";
                }
                if (data === null) {
                    return "nulo";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "dirección de correo electrónico",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duración ISO",
        ipv4: "dirección IPv4",
        ipv6: "dirección IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Entrada inválida: se esperaba ${issue.expected}, recibido ${parsedType(issue.input)}`;
            // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrada inválida: se esperaba ${util.stringifyPrimitive(issue.values[0])}`;
                return `Opción inválida: se esperaba una de ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Demasiado grande: se esperaba que ${issue.origin ?? "valor"} tuviera ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
                return `Demasiado grande: se esperaba que ${issue.origin ?? "valor"} fuera ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Demasiado pequeño: se esperaba que ${issue.origin} tuviera ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Demasiado pequeño: se esperaba que ${issue.origin} fuera ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Cadena inválida: debe incluir "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
                return `Inválido ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Número inválido: debe ser múltiplo de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Llave${issue.keys.length > 1 ? "s" : ""} desconocida${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Llave inválida en ${issue.origin}`;
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return `Valor inválido en ${issue.origin}`;
            default:
                return `Entrada inválida`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 6476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
        file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
        array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
        set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "எண் அல்லாதது" : "எண்";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "அணி";
                }
                if (data === null) {
                    return "வெறுமை";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "உள்ளீடு",
        email: "மின்னஞ்சல் முகவரி",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO தேதி நேரம்",
        date: "ISO தேதி",
        time: "ISO நேரம்",
        duration: "ISO கால அளவு",
        ipv4: "IPv4 முகவரி",
        ipv6: "IPv6 முகவரி",
        cidrv4: "IPv4 வரம்பு",
        cidrv6: "IPv6 வரம்பு",
        base64: "base64-encoded சரம்",
        base64url: "base64url-encoded சரம்",
        json_string: "JSON சரம்",
        e164: "E.164 எண்",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${issue.expected}, பெறப்பட்டது ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${util.stringifyPrimitive(issue.values[0])}`;
                return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${util.joinValues(issue.values, "|")} இல் ஒன்று`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
                }
                return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} ஆக இருக்க வேண்டும்`; //
                }
                return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `தவறான சரம்: "${_issue.prefix}" இல் தொடங்க வேண்டும்`;
                if (_issue.format === "ends_with")
                    return `தவறான சரம்: "${_issue.suffix}" இல் முடிவடைய வேண்டும்`;
                if (_issue.format === "includes")
                    return `தவறான சரம்: "${_issue.includes}" ஐ உள்ளடக்க வேண்டும்`;
                if (_issue.format === "regex")
                    return `தவறான சரம்: ${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                return `தவறான ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `தவறான எண்: ${issue.divisor} இன் பலமாக இருக்க வேண்டும்`;
            case "unrecognized_keys":
                return `அடையாளம் தெரியாத விசை${issue.keys.length > 1 ? "கள்" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} இல் தவறான விசை`;
            case "invalid_union":
                return "தவறான உள்ளீடு";
            case "invalid_element":
                return `${issue.origin} இல் தவறான மதிப்பு`;
            default:
                return `தவறான உள்ளீடு`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 6519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalkinService = void 0;
const lib_dynamodb_1 = __webpack_require__(3489);
const dynamodb_1 = __webpack_require__(2794);
const client_1 = __webpack_require__(7632);
const walkin_models_1 = __webpack_require__(8227);
const errors_1 = __webpack_require__(5521);
const uuid_1 = __webpack_require__(8991);
const prisma = new client_1.PrismaClient();
class WalkinService {
    async createWalkin(request, businessId) {
        // Validate that the service, customer, and location exist and belong to the business
        await this.validateWalkinRequest(request, businessId);
        // Get service duration for wait time calculation
        const service = await prisma.service.findFirst({
            where: {
                id: request.serviceId,
                businessId: businessId,
                isActive: true
            }
        });
        if (!service) {
            throw new errors_1.NotFoundError('Service');
        }
        // Calculate estimated wait time
        const estimatedWaitTime = await this.calculateEstimatedWaitTime(request.locationId);
        // Create walkin record
        const walkin = {
            id: (0, uuid_1.v4)(),
            locationId: request.locationId,
            customerId: request.customerId,
            serviceId: request.serviceId,
            businessId: businessId,
            requestedTime: new Date().toISOString(),
            estimatedWaitTime: estimatedWaitTime,
            status: walkin_models_1.WalkinStatus.REQUESTED,
            notes: request.notes,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        // Save to DynamoDB
        await dynamodb_1.docClient.send(new lib_dynamodb_1.PutCommand({
            TableName: dynamodb_1.WALKINS_TABLE,
            Item: walkin
        }));
        return {
            walkin,
            estimatedWaitTime
        };
    }
    async validateWalkinRequest(request, businessId) {
        // Validate customer exists and belongs to business
        const customer = await prisma.customer.findFirst({
            where: {
                id: request.customerId,
                businessId: businessId
            }
        });
        if (!customer) {
            throw new errors_1.NotFoundError('Customer');
        }
        // Validate location exists and belongs to business
        const location = await prisma.location.findFirst({
            where: {
                id: request.locationId,
                businessId: businessId,
                isActive: true
            }
        });
        if (!location) {
            throw new errors_1.NotFoundError('Location');
        }
        // Validate service exists and belongs to business
        const service = await prisma.service.findFirst({
            where: {
                id: request.serviceId,
                businessId: businessId,
                isActive: true
            }
        });
        if (!service) {
            throw new errors_1.NotFoundError('Service');
        }
    }
    async calculateEstimatedWaitTime(locationId) {
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toISOString();
        // Get all pending bookings for today at this location
        const pendingBookings = await dynamodb_1.docClient.send(new lib_dynamodb_1.QueryCommand({
            TableName: dynamodb_1.BOOKINGS_TABLE,
            IndexName: 'LocationTimeIndex',
            KeyConditionExpression: 'locationId = :locationId AND startTime BETWEEN :startOfDay AND :endOfDay',
            FilterExpression: '#status IN (:requested, :confirmed)',
            ExpressionAttributeNames: {
                '#status': 'status'
            },
            ExpressionAttributeValues: {
                ':locationId': locationId,
                ':startOfDay': startOfDay,
                ':endOfDay': endOfDay,
                ':requested': 'REQUESTED',
                ':confirmed': 'CONFIRMED'
            }
        }));
        // Get all pending walk-ins for today at this location
        const pendingWalkins = await dynamodb_1.docClient.send(new lib_dynamodb_1.QueryCommand({
            TableName: dynamodb_1.WALKINS_TABLE,
            IndexName: 'LocationTimeIndex',
            KeyConditionExpression: 'locationId = :locationId AND requestedTime BETWEEN :startOfDay AND :endOfDay',
            FilterExpression: '#status IN (:requested, :inProgress)',
            ExpressionAttributeNames: {
                '#status': 'status'
            },
            ExpressionAttributeValues: {
                ':locationId': locationId,
                ':startOfDay': startOfDay,
                ':endOfDay': endOfDay,
                ':requested': 'REQUESTED',
                ':inProgress': 'IN_PROGRESS'
            }
        }));
        // Calculate total pending duration
        let totalPendingDuration = 0;
        // Add booking durations
        if (pendingBookings.Items) {
            for (const booking of pendingBookings.Items) {
                totalPendingDuration += booking.duration || 0;
            }
        }
        // Add walk-in durations by looking up service durations
        if (pendingWalkins.Items) {
            const serviceIds = [...new Set(pendingWalkins.Items.map((walkin) => walkin.serviceId))];
            if (serviceIds.length > 0) {
                const services = await prisma.service.findMany({
                    where: {
                        id: { in: serviceIds }
                    },
                    select: {
                        id: true,
                        duration: true
                    }
                });
                const serviceDurationMap = new Map(services.map(s => [s.id, s.duration]));
                for (const walkin of pendingWalkins.Items) {
                    const duration = serviceDurationMap.get(walkin.serviceId) || 0;
                    totalPendingDuration += Number(duration);
                }
            }
        }
        return totalPendingDuration;
    }
}
exports.WalkinService = WalkinService;


/***/ }),

/***/ 6535:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const crypto_1 = __webpack_require__(6982);
function md5(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    }
    else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return (0, crypto_1.createHash)('md5').update(bytes).digest();
}
exports["default"] = md5;


/***/ }),

/***/ 6597:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.string = string;
exports.number = number;
exports.boolean = boolean;
exports.bigint = bigint;
exports.date = date;
const core = __importStar(__webpack_require__(6405));
const schemas = __importStar(__webpack_require__(6870));
function string(params) {
    return core._coercedString(schemas.ZodString, params);
}
function number(params) {
    return core._coercedNumber(schemas.ZodNumber, params);
}
function boolean(params) {
    return core._coercedBoolean(schemas.ZodBoolean, params);
}
function bigint(params) {
    return core._coercedBigint(schemas.ZodBigInt, params);
}
function date(params) {
    return core._coercedDate(schemas.ZodDate, params);
}


/***/ }),

/***/ 6648:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// import { $ZodType } from "./schemas.js";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$ZodCheckOverwrite = exports.$ZodCheckMimeType = exports.$ZodCheckProperty = exports.$ZodCheckEndsWith = exports.$ZodCheckStartsWith = exports.$ZodCheckIncludes = exports.$ZodCheckUpperCase = exports.$ZodCheckLowerCase = exports.$ZodCheckRegex = exports.$ZodCheckStringFormat = exports.$ZodCheckLengthEquals = exports.$ZodCheckMinLength = exports.$ZodCheckMaxLength = exports.$ZodCheckSizeEquals = exports.$ZodCheckMinSize = exports.$ZodCheckMaxSize = exports.$ZodCheckBigIntFormat = exports.$ZodCheckNumberFormat = exports.$ZodCheckMultipleOf = exports.$ZodCheckGreaterThan = exports.$ZodCheckLessThan = exports.$ZodCheck = void 0;
const core = __importStar(__webpack_require__(1870));
const regexes = __importStar(__webpack_require__(6296));
const util = __importStar(__webpack_require__(2879));
exports.$ZodCheck = core.$constructor("$ZodCheck", (inst, def) => {
    var _a;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a = inst._zod).onattach ?? (_a.onattach = []);
});
const numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date",
};
exports.$ZodCheckLessThan = core.$constructor("$ZodCheckLessThan", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        if (def.value < curr) {
            if (def.inclusive)
                bag.maximum = def.value;
            else
                bag.exclusiveMaximum = def.value;
        }
    });
    inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
            return;
        }
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckGreaterThan = core.$constructor("$ZodCheckGreaterThan", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        if (def.value > curr) {
            if (def.inclusive)
                bag.minimum = def.value;
            else
                bag.exclusiveMinimum = def.value;
        }
    });
    inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
            return;
        }
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckMultipleOf = 
/*@__PURE__*/ core.$constructor("$ZodCheckMultipleOf", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst) => {
        var _a;
        (_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
    });
    inst._zod.check = (payload) => {
        if (typeof payload.value !== typeof def.value)
            throw new Error("Cannot mix number and bigint in multiple_of check.");
        const isMultiple = typeof payload.value === "bigint"
            ? payload.value % def.value === BigInt(0)
            : util.floatSafeRemainder(payload.value, def.value) === 0;
        if (isMultiple)
            return;
        payload.issues.push({
            origin: typeof payload.value,
            code: "not_multiple_of",
            divisor: def.value,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckNumberFormat = core.$constructor("$ZodCheckNumberFormat", (inst, def) => {
    exports.$ZodCheck.init(inst, def); // no format checks
    def.format = def.format || "float64";
    const isInt = def.format?.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = util.NUMBER_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
        if (isInt)
            bag.pattern = regexes.integer;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        if (isInt) {
            if (!Number.isInteger(input)) {
                // invalid_format issue
                // payload.issues.push({
                //   expected: def.format,
                //   format: def.format,
                //   code: "invalid_format",
                //   input,
                //   inst,
                // });
                // invalid_type issue
                payload.issues.push({
                    expected: origin,
                    format: def.format,
                    code: "invalid_type",
                    continue: false,
                    input,
                    inst,
                });
                return;
                // not_multiple_of issue
                // payload.issues.push({
                //   code: "not_multiple_of",
                //   origin: "number",
                //   input,
                //   inst,
                //   divisor: 1,
                // });
            }
            if (!Number.isSafeInteger(input)) {
                if (input > 0) {
                    // too_big
                    payload.issues.push({
                        input,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        continue: !def.abort,
                    });
                }
                else {
                    // too_small
                    payload.issues.push({
                        input,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        continue: !def.abort,
                    });
                }
                return;
            }
        }
        if (input < minimum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_small",
                minimum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_big",
                maximum,
                inst,
            });
        }
    };
});
exports.$ZodCheckBigIntFormat = core.$constructor("$ZodCheckBigIntFormat", (inst, def) => {
    exports.$ZodCheck.init(inst, def); // no format checks
    const [minimum, maximum] = util.BIGINT_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        if (input < minimum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_small",
                minimum: minimum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_big",
                maximum,
                inst,
            });
        }
    };
});
exports.$ZodCheckMaxSize = core.$constructor("$ZodCheckMaxSize", (inst, def) => {
    var _a;
    exports.$ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.size !== undefined;
    });
    inst._zod.onattach.push((inst) => {
        const curr = (inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY);
        if (def.maximum < curr)
            inst._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size <= def.maximum)
            return;
        payload.issues.push({
            origin: util.getSizableOrigin(input),
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckMinSize = core.$constructor("$ZodCheckMinSize", (inst, def) => {
    var _a;
    exports.$ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.size !== undefined;
    });
    inst._zod.onattach.push((inst) => {
        const curr = (inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY);
        if (def.minimum > curr)
            inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size >= def.minimum)
            return;
        payload.issues.push({
            origin: util.getSizableOrigin(input),
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckSizeEquals = core.$constructor("$ZodCheckSizeEquals", (inst, def) => {
    var _a;
    exports.$ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.size !== undefined;
    });
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.minimum = def.size;
        bag.maximum = def.size;
        bag.size = def.size;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size === def.size)
            return;
        const tooBig = size > def.size;
        payload.issues.push({
            origin: util.getSizableOrigin(input),
            ...(tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size }),
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckMaxLength = core.$constructor("$ZodCheckMaxLength", (inst, def) => {
    var _a;
    exports.$ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.length !== undefined;
    });
    inst._zod.onattach.push((inst) => {
        const curr = (inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY);
        if (def.maximum < curr)
            inst._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length <= def.maximum)
            return;
        const origin = util.getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckMinLength = core.$constructor("$ZodCheckMinLength", (inst, def) => {
    var _a;
    exports.$ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.length !== undefined;
    });
    inst._zod.onattach.push((inst) => {
        const curr = (inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY);
        if (def.minimum > curr)
            inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length >= def.minimum)
            return;
        const origin = util.getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckLengthEquals = core.$constructor("$ZodCheckLengthEquals", (inst, def) => {
    var _a;
    exports.$ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.length !== undefined;
    });
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.minimum = def.length;
        bag.maximum = def.length;
        bag.length = def.length;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length === def.length)
            return;
        const origin = util.getLengthableOrigin(input);
        const tooBig = length > def.length;
        payload.issues.push({
            origin,
            ...(tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length }),
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckStringFormat = core.$constructor("$ZodCheckStringFormat", (inst, def) => {
    var _a, _b;
    exports.$ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.format = def.format;
        if (def.pattern) {
            bag.patterns ?? (bag.patterns = new Set());
            bag.patterns.add(def.pattern);
        }
    });
    if (def.pattern)
        (_a = inst._zod).check ?? (_a.check = (payload) => {
            def.pattern.lastIndex = 0;
            if (def.pattern.test(payload.value))
                return;
            payload.issues.push({
                origin: "string",
                code: "invalid_format",
                format: def.format,
                input: payload.value,
                ...(def.pattern ? { pattern: def.pattern.toString() } : {}),
                inst,
                continue: !def.abort,
            });
        });
    else
        (_b = inst._zod).check ?? (_b.check = () => { });
});
exports.$ZodCheckRegex = core.$constructor("$ZodCheckRegex", (inst, def) => {
    exports.$ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: payload.value,
            pattern: def.pattern.toString(),
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckLowerCase = core.$constructor("$ZodCheckLowerCase", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.lowercase);
    exports.$ZodCheckStringFormat.init(inst, def);
});
exports.$ZodCheckUpperCase = core.$constructor("$ZodCheckUpperCase", (inst, def) => {
    def.pattern ?? (def.pattern = regexes.uppercase);
    exports.$ZodCheckStringFormat.init(inst, def);
});
exports.$ZodCheckIncludes = core.$constructor("$ZodCheckIncludes", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    const escapedRegex = util.escapeRegex(def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
        if (payload.value.includes(def.includes, def.position))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: def.includes,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckStartsWith = core.$constructor("$ZodCheckStartsWith", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${util.escapeRegex(def.prefix)}.*`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
        if (payload.value.startsWith(def.prefix))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: def.prefix,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckEndsWith = core.$constructor("$ZodCheckEndsWith", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${util.escapeRegex(def.suffix)}$`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
        if (payload.value.endsWith(def.suffix))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: def.suffix,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
///////////////////////////////////
/////    $ZodCheckProperty    /////
///////////////////////////////////
function handleCheckPropertyResult(result, payload, property) {
    if (result.issues.length) {
        payload.issues.push(...util.prefixIssues(property, result.issues));
    }
}
exports.$ZodCheckProperty = core.$constructor("$ZodCheckProperty", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
        const result = def.schema._zod.run({
            value: payload.value[def.property],
            issues: [],
        }, {});
        if (result instanceof Promise) {
            return result.then((result) => handleCheckPropertyResult(result, payload, def.property));
        }
        handleCheckPropertyResult(result, payload, def.property);
        return;
    };
});
exports.$ZodCheckMimeType = core.$constructor("$ZodCheckMimeType", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    const mimeSet = new Set(def.mime);
    inst._zod.onattach.push((inst) => {
        inst._zod.bag.mime = def.mime;
    });
    inst._zod.check = (payload) => {
        if (mimeSet.has(payload.value.type))
            return;
        payload.issues.push({
            code: "invalid_value",
            values: def.mime,
            input: payload.value.type,
            inst,
            continue: !def.abort,
        });
    };
});
exports.$ZodCheckOverwrite = core.$constructor("$ZodCheckOverwrite", (inst, def) => {
    exports.$ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
        payload.value = def.tx(payload.value);
    };
});


/***/ }),

/***/ 6698:
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ 6760:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 6870:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZodTransform = exports.ZodFile = exports.ZodLiteral = exports.ZodEnum = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodDate = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodBigIntFormat = exports.ZodBigInt = exports.ZodBoolean = exports.ZodNumberFormat = exports.ZodNumber = exports.ZodCustomStringFormat = exports.ZodJWT = exports.ZodE164 = exports.ZodBase64URL = exports.ZodBase64 = exports.ZodCIDRv6 = exports.ZodCIDRv4 = exports.ZodIPv6 = exports.ZodIPv4 = exports.ZodKSUID = exports.ZodXID = exports.ZodULID = exports.ZodCUID2 = exports.ZodCUID = exports.ZodNanoID = exports.ZodEmoji = exports.ZodURL = exports.ZodUUID = exports.ZodGUID = exports.ZodEmail = exports.ZodStringFormat = exports.ZodString = exports._ZodString = exports.ZodType = void 0;
exports.stringbool = exports.ZodCustom = exports.ZodFunction = exports.ZodPromise = exports.ZodLazy = exports.ZodTemplateLiteral = exports.ZodReadonly = exports.ZodCodec = exports.ZodPipe = exports.ZodNaN = exports.ZodCatch = exports.ZodSuccess = exports.ZodNonOptional = exports.ZodPrefault = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = void 0;
exports.string = string;
exports.email = email;
exports.guid = guid;
exports.uuid = uuid;
exports.uuidv4 = uuidv4;
exports.uuidv6 = uuidv6;
exports.uuidv7 = uuidv7;
exports.url = url;
exports.httpUrl = httpUrl;
exports.emoji = emoji;
exports.nanoid = nanoid;
exports.cuid = cuid;
exports.cuid2 = cuid2;
exports.ulid = ulid;
exports.xid = xid;
exports.ksuid = ksuid;
exports.ipv4 = ipv4;
exports.ipv6 = ipv6;
exports.cidrv4 = cidrv4;
exports.cidrv6 = cidrv6;
exports.base64 = base64;
exports.base64url = base64url;
exports.e164 = e164;
exports.jwt = jwt;
exports.stringFormat = stringFormat;
exports.hostname = hostname;
exports.hex = hex;
exports.hash = hash;
exports.number = number;
exports.int = int;
exports.float32 = float32;
exports.float64 = float64;
exports.int32 = int32;
exports.uint32 = uint32;
exports.boolean = boolean;
exports.bigint = bigint;
exports.int64 = int64;
exports.uint64 = uint64;
exports.symbol = symbol;
exports.undefined = _undefined;
exports["null"] = _null;
exports.any = any;
exports.unknown = unknown;
exports.never = never;
exports["void"] = _void;
exports.date = date;
exports.array = array;
exports.keyof = keyof;
exports.object = object;
exports.strictObject = strictObject;
exports.looseObject = looseObject;
exports.union = union;
exports.discriminatedUnion = discriminatedUnion;
exports.intersection = intersection;
exports.tuple = tuple;
exports.record = record;
exports.partialRecord = partialRecord;
exports.map = map;
exports.set = set;
exports["enum"] = _enum;
exports.nativeEnum = nativeEnum;
exports.literal = literal;
exports.file = file;
exports.transform = transform;
exports.optional = optional;
exports.nullable = nullable;
exports.nullish = nullish;
exports._default = _default;
exports.prefault = prefault;
exports.nonoptional = nonoptional;
exports.success = success;
exports["catch"] = _catch;
exports.nan = nan;
exports.pipe = pipe;
exports.codec = codec;
exports.readonly = readonly;
exports.templateLiteral = templateLiteral;
exports.lazy = lazy;
exports.promise = promise;
exports._function = _function;
exports["function"] = _function;
exports._function = _function;
exports["function"] = _function;
exports.check = check;
exports.custom = custom;
exports.refine = refine;
exports.superRefine = superRefine;
exports["instanceof"] = _instanceof;
exports.json = json;
exports.preprocess = preprocess;
const core = __importStar(__webpack_require__(6405));
const index_js_1 = __webpack_require__(6405);
const checks = __importStar(__webpack_require__(9945));
const iso = __importStar(__webpack_require__(1553));
const parse = __importStar(__webpack_require__(7647));
exports.ZodType = core.$constructor("ZodType", (inst, def) => {
    core.$ZodType.init(inst, def);
    inst.def = def;
    inst.type = def.type;
    Object.defineProperty(inst, "_def", { value: def });
    // base methods
    inst.check = (...checks) => {
        return inst.clone({
            ...def,
            checks: [
                ...(def.checks ?? []),
                ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch),
            ],
        }
        // { parent: true }
        );
    };
    inst.clone = (def, params) => core.clone(inst, def, params);
    inst.brand = () => inst;
    inst.register = ((reg, meta) => {
        reg.add(inst, meta);
        return inst;
    });
    // parsing
    inst.parse = (data, params) => parse.parse(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => parse.safeParse(inst, data, params);
    inst.parseAsync = async (data, params) => parse.parseAsync(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => parse.safeParseAsync(inst, data, params);
    inst.spa = inst.safeParseAsync;
    // encoding/decoding
    inst.encode = (data, params) => parse.encode(inst, data, params);
    inst.decode = (data, params) => parse.decode(inst, data, params);
    inst.encodeAsync = async (data, params) => parse.encodeAsync(inst, data, params);
    inst.decodeAsync = async (data, params) => parse.decodeAsync(inst, data, params);
    inst.safeEncode = (data, params) => parse.safeEncode(inst, data, params);
    inst.safeDecode = (data, params) => parse.safeDecode(inst, data, params);
    inst.safeEncodeAsync = async (data, params) => parse.safeEncodeAsync(inst, data, params);
    inst.safeDecodeAsync = async (data, params) => parse.safeDecodeAsync(inst, data, params);
    // refinements
    inst.refine = (check, params) => inst.check(refine(check, params));
    inst.superRefine = (refinement) => inst.check(superRefine(refinement));
    inst.overwrite = (fn) => inst.check(checks.overwrite(fn));
    // wrappers
    inst.optional = () => optional(inst);
    inst.nullable = () => nullable(inst);
    inst.nullish = () => optional(nullable(inst));
    inst.nonoptional = (params) => nonoptional(inst, params);
    inst.array = () => array(inst);
    inst.or = (arg) => union([inst, arg]);
    inst.and = (arg) => intersection(inst, arg);
    inst.transform = (tx) => pipe(inst, transform(tx));
    inst.default = (def) => _default(inst, def);
    inst.prefault = (def) => prefault(inst, def);
    // inst.coalesce = (def, params) => coalesce(inst, def, params);
    inst.catch = (params) => _catch(inst, params);
    inst.pipe = (target) => pipe(inst, target);
    inst.readonly = () => readonly(inst);
    // meta
    inst.describe = (description) => {
        const cl = inst.clone();
        core.globalRegistry.add(cl, { description });
        return cl;
    };
    Object.defineProperty(inst, "description", {
        get() {
            return core.globalRegistry.get(inst)?.description;
        },
        configurable: true,
    });
    inst.meta = (...args) => {
        if (args.length === 0) {
            return core.globalRegistry.get(inst);
        }
        const cl = inst.clone();
        core.globalRegistry.add(cl, args[0]);
        return cl;
    };
    // helpers
    inst.isOptional = () => inst.safeParse(undefined).success;
    inst.isNullable = () => inst.safeParse(null).success;
    return inst;
});
/** @internal */
exports._ZodString = core.$constructor("_ZodString", (inst, def) => {
    core.$ZodString.init(inst, def);
    exports.ZodType.init(inst, def);
    const bag = inst._zod.bag;
    inst.format = bag.format ?? null;
    inst.minLength = bag.minimum ?? null;
    inst.maxLength = bag.maximum ?? null;
    // validations
    inst.regex = (...args) => inst.check(checks.regex(...args));
    inst.includes = (...args) => inst.check(checks.includes(...args));
    inst.startsWith = (...args) => inst.check(checks.startsWith(...args));
    inst.endsWith = (...args) => inst.check(checks.endsWith(...args));
    inst.min = (...args) => inst.check(checks.minLength(...args));
    inst.max = (...args) => inst.check(checks.maxLength(...args));
    inst.length = (...args) => inst.check(checks.length(...args));
    inst.nonempty = (...args) => inst.check(checks.minLength(1, ...args));
    inst.lowercase = (params) => inst.check(checks.lowercase(params));
    inst.uppercase = (params) => inst.check(checks.uppercase(params));
    // transforms
    inst.trim = () => inst.check(checks.trim());
    inst.normalize = (...args) => inst.check(checks.normalize(...args));
    inst.toLowerCase = () => inst.check(checks.toLowerCase());
    inst.toUpperCase = () => inst.check(checks.toUpperCase());
});
exports.ZodString = core.$constructor("ZodString", (inst, def) => {
    core.$ZodString.init(inst, def);
    exports._ZodString.init(inst, def);
    inst.email = (params) => inst.check(core._email(exports.ZodEmail, params));
    inst.url = (params) => inst.check(core._url(exports.ZodURL, params));
    inst.jwt = (params) => inst.check(core._jwt(exports.ZodJWT, params));
    inst.emoji = (params) => inst.check(core._emoji(exports.ZodEmoji, params));
    inst.guid = (params) => inst.check(core._guid(exports.ZodGUID, params));
    inst.uuid = (params) => inst.check(core._uuid(exports.ZodUUID, params));
    inst.uuidv4 = (params) => inst.check(core._uuidv4(exports.ZodUUID, params));
    inst.uuidv6 = (params) => inst.check(core._uuidv6(exports.ZodUUID, params));
    inst.uuidv7 = (params) => inst.check(core._uuidv7(exports.ZodUUID, params));
    inst.nanoid = (params) => inst.check(core._nanoid(exports.ZodNanoID, params));
    inst.guid = (params) => inst.check(core._guid(exports.ZodGUID, params));
    inst.cuid = (params) => inst.check(core._cuid(exports.ZodCUID, params));
    inst.cuid2 = (params) => inst.check(core._cuid2(exports.ZodCUID2, params));
    inst.ulid = (params) => inst.check(core._ulid(exports.ZodULID, params));
    inst.base64 = (params) => inst.check(core._base64(exports.ZodBase64, params));
    inst.base64url = (params) => inst.check(core._base64url(exports.ZodBase64URL, params));
    inst.xid = (params) => inst.check(core._xid(exports.ZodXID, params));
    inst.ksuid = (params) => inst.check(core._ksuid(exports.ZodKSUID, params));
    inst.ipv4 = (params) => inst.check(core._ipv4(exports.ZodIPv4, params));
    inst.ipv6 = (params) => inst.check(core._ipv6(exports.ZodIPv6, params));
    inst.cidrv4 = (params) => inst.check(core._cidrv4(exports.ZodCIDRv4, params));
    inst.cidrv6 = (params) => inst.check(core._cidrv6(exports.ZodCIDRv6, params));
    inst.e164 = (params) => inst.check(core._e164(exports.ZodE164, params));
    // iso
    inst.datetime = (params) => inst.check(iso.datetime(params));
    inst.date = (params) => inst.check(iso.date(params));
    inst.time = (params) => inst.check(iso.time(params));
    inst.duration = (params) => inst.check(iso.duration(params));
});
function string(params) {
    return core._string(exports.ZodString, params);
}
exports.ZodStringFormat = core.$constructor("ZodStringFormat", (inst, def) => {
    core.$ZodStringFormat.init(inst, def);
    exports._ZodString.init(inst, def);
});
exports.ZodEmail = core.$constructor("ZodEmail", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodEmail.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function email(params) {
    return core._email(exports.ZodEmail, params);
}
exports.ZodGUID = core.$constructor("ZodGUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodGUID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function guid(params) {
    return core._guid(exports.ZodGUID, params);
}
exports.ZodUUID = core.$constructor("ZodUUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodUUID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function uuid(params) {
    return core._uuid(exports.ZodUUID, params);
}
function uuidv4(params) {
    return core._uuidv4(exports.ZodUUID, params);
}
// ZodUUIDv6
function uuidv6(params) {
    return core._uuidv6(exports.ZodUUID, params);
}
// ZodUUIDv7
function uuidv7(params) {
    return core._uuidv7(exports.ZodUUID, params);
}
exports.ZodURL = core.$constructor("ZodURL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodURL.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function url(params) {
    return core._url(exports.ZodURL, params);
}
function httpUrl(params) {
    return core._url(exports.ZodURL, {
        protocol: /^https?$/,
        hostname: core.regexes.domain,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodEmoji = core.$constructor("ZodEmoji", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodEmoji.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function emoji(params) {
    return core._emoji(exports.ZodEmoji, params);
}
exports.ZodNanoID = core.$constructor("ZodNanoID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodNanoID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function nanoid(params) {
    return core._nanoid(exports.ZodNanoID, params);
}
exports.ZodCUID = core.$constructor("ZodCUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCUID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function cuid(params) {
    return core._cuid(exports.ZodCUID, params);
}
exports.ZodCUID2 = core.$constructor("ZodCUID2", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCUID2.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function cuid2(params) {
    return core._cuid2(exports.ZodCUID2, params);
}
exports.ZodULID = core.$constructor("ZodULID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodULID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function ulid(params) {
    return core._ulid(exports.ZodULID, params);
}
exports.ZodXID = core.$constructor("ZodXID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodXID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function xid(params) {
    return core._xid(exports.ZodXID, params);
}
exports.ZodKSUID = core.$constructor("ZodKSUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodKSUID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function ksuid(params) {
    return core._ksuid(exports.ZodKSUID, params);
}
exports.ZodIPv4 = core.$constructor("ZodIPv4", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodIPv4.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function ipv4(params) {
    return core._ipv4(exports.ZodIPv4, params);
}
exports.ZodIPv6 = core.$constructor("ZodIPv6", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodIPv6.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function ipv6(params) {
    return core._ipv6(exports.ZodIPv6, params);
}
exports.ZodCIDRv4 = core.$constructor("ZodCIDRv4", (inst, def) => {
    core.$ZodCIDRv4.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function cidrv4(params) {
    return core._cidrv4(exports.ZodCIDRv4, params);
}
exports.ZodCIDRv6 = core.$constructor("ZodCIDRv6", (inst, def) => {
    core.$ZodCIDRv6.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function cidrv6(params) {
    return core._cidrv6(exports.ZodCIDRv6, params);
}
exports.ZodBase64 = core.$constructor("ZodBase64", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodBase64.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function base64(params) {
    return core._base64(exports.ZodBase64, params);
}
exports.ZodBase64URL = core.$constructor("ZodBase64URL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodBase64URL.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function base64url(params) {
    return core._base64url(exports.ZodBase64URL, params);
}
exports.ZodE164 = core.$constructor("ZodE164", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodE164.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function e164(params) {
    return core._e164(exports.ZodE164, params);
}
exports.ZodJWT = core.$constructor("ZodJWT", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodJWT.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function jwt(params) {
    return core._jwt(exports.ZodJWT, params);
}
exports.ZodCustomStringFormat = core.$constructor("ZodCustomStringFormat", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCustomStringFormat.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
    return core._stringFormat(exports.ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname(_params) {
    return core._stringFormat(exports.ZodCustomStringFormat, "hostname", core.regexes.hostname, _params);
}
function hex(_params) {
    return core._stringFormat(exports.ZodCustomStringFormat, "hex", core.regexes.hex, _params);
}
function hash(alg, params) {
    const enc = params?.enc ?? "hex";
    const format = `${alg}_${enc}`;
    const regex = core.regexes[format];
    if (!regex)
        throw new Error(`Unrecognized hash format: ${format}`);
    return core._stringFormat(exports.ZodCustomStringFormat, format, regex, params);
}
exports.ZodNumber = core.$constructor("ZodNumber", (inst, def) => {
    core.$ZodNumber.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.gt = (value, params) => inst.check(checks.gt(value, params));
    inst.gte = (value, params) => inst.check(checks.gte(value, params));
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.lt = (value, params) => inst.check(checks.lt(value, params));
    inst.lte = (value, params) => inst.check(checks.lte(value, params));
    inst.max = (value, params) => inst.check(checks.lte(value, params));
    inst.int = (params) => inst.check(int(params));
    inst.safe = (params) => inst.check(int(params));
    inst.positive = (params) => inst.check(checks.gt(0, params));
    inst.nonnegative = (params) => inst.check(checks.gte(0, params));
    inst.negative = (params) => inst.check(checks.lt(0, params));
    inst.nonpositive = (params) => inst.check(checks.lte(0, params));
    inst.multipleOf = (value, params) => inst.check(checks.multipleOf(value, params));
    inst.step = (value, params) => inst.check(checks.multipleOf(value, params));
    // inst.finite = (params) => inst.check(core.finite(params));
    inst.finite = () => inst;
    const bag = inst._zod.bag;
    inst.minValue =
        Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
    inst.maxValue =
        Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
    inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
    inst.isFinite = true;
    inst.format = bag.format ?? null;
});
function number(params) {
    return core._number(exports.ZodNumber, params);
}
exports.ZodNumberFormat = core.$constructor("ZodNumberFormat", (inst, def) => {
    core.$ZodNumberFormat.init(inst, def);
    exports.ZodNumber.init(inst, def);
});
function int(params) {
    return core._int(exports.ZodNumberFormat, params);
}
function float32(params) {
    return core._float32(exports.ZodNumberFormat, params);
}
function float64(params) {
    return core._float64(exports.ZodNumberFormat, params);
}
function int32(params) {
    return core._int32(exports.ZodNumberFormat, params);
}
function uint32(params) {
    return core._uint32(exports.ZodNumberFormat, params);
}
exports.ZodBoolean = core.$constructor("ZodBoolean", (inst, def) => {
    core.$ZodBoolean.init(inst, def);
    exports.ZodType.init(inst, def);
});
function boolean(params) {
    return core._boolean(exports.ZodBoolean, params);
}
exports.ZodBigInt = core.$constructor("ZodBigInt", (inst, def) => {
    core.$ZodBigInt.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.gte = (value, params) => inst.check(checks.gte(value, params));
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.gt = (value, params) => inst.check(checks.gt(value, params));
    inst.gte = (value, params) => inst.check(checks.gte(value, params));
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.lt = (value, params) => inst.check(checks.lt(value, params));
    inst.lte = (value, params) => inst.check(checks.lte(value, params));
    inst.max = (value, params) => inst.check(checks.lte(value, params));
    inst.positive = (params) => inst.check(checks.gt(BigInt(0), params));
    inst.negative = (params) => inst.check(checks.lt(BigInt(0), params));
    inst.nonpositive = (params) => inst.check(checks.lte(BigInt(0), params));
    inst.nonnegative = (params) => inst.check(checks.gte(BigInt(0), params));
    inst.multipleOf = (value, params) => inst.check(checks.multipleOf(value, params));
    const bag = inst._zod.bag;
    inst.minValue = bag.minimum ?? null;
    inst.maxValue = bag.maximum ?? null;
    inst.format = bag.format ?? null;
});
function bigint(params) {
    return core._bigint(exports.ZodBigInt, params);
}
exports.ZodBigIntFormat = core.$constructor("ZodBigIntFormat", (inst, def) => {
    core.$ZodBigIntFormat.init(inst, def);
    exports.ZodBigInt.init(inst, def);
});
// int64
function int64(params) {
    return core._int64(exports.ZodBigIntFormat, params);
}
// uint64
function uint64(params) {
    return core._uint64(exports.ZodBigIntFormat, params);
}
exports.ZodSymbol = core.$constructor("ZodSymbol", (inst, def) => {
    core.$ZodSymbol.init(inst, def);
    exports.ZodType.init(inst, def);
});
function symbol(params) {
    return core._symbol(exports.ZodSymbol, params);
}
exports.ZodUndefined = core.$constructor("ZodUndefined", (inst, def) => {
    core.$ZodUndefined.init(inst, def);
    exports.ZodType.init(inst, def);
});
function _undefined(params) {
    return core._undefined(exports.ZodUndefined, params);
}
exports.ZodNull = core.$constructor("ZodNull", (inst, def) => {
    core.$ZodNull.init(inst, def);
    exports.ZodType.init(inst, def);
});
function _null(params) {
    return core._null(exports.ZodNull, params);
}
exports.ZodAny = core.$constructor("ZodAny", (inst, def) => {
    core.$ZodAny.init(inst, def);
    exports.ZodType.init(inst, def);
});
function any() {
    return core._any(exports.ZodAny);
}
exports.ZodUnknown = core.$constructor("ZodUnknown", (inst, def) => {
    core.$ZodUnknown.init(inst, def);
    exports.ZodType.init(inst, def);
});
function unknown() {
    return core._unknown(exports.ZodUnknown);
}
exports.ZodNever = core.$constructor("ZodNever", (inst, def) => {
    core.$ZodNever.init(inst, def);
    exports.ZodType.init(inst, def);
});
function never(params) {
    return core._never(exports.ZodNever, params);
}
exports.ZodVoid = core.$constructor("ZodVoid", (inst, def) => {
    core.$ZodVoid.init(inst, def);
    exports.ZodType.init(inst, def);
});
function _void(params) {
    return core._void(exports.ZodVoid, params);
}
exports.ZodDate = core.$constructor("ZodDate", (inst, def) => {
    core.$ZodDate.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.max = (value, params) => inst.check(checks.lte(value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date(params) {
    return core._date(exports.ZodDate, params);
}
exports.ZodArray = core.$constructor("ZodArray", (inst, def) => {
    core.$ZodArray.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params) => inst.check(checks.minLength(minLength, params));
    inst.nonempty = (params) => inst.check(checks.minLength(1, params));
    inst.max = (maxLength, params) => inst.check(checks.maxLength(maxLength, params));
    inst.length = (len, params) => inst.check(checks.length(len, params));
    inst.unwrap = () => inst.element;
});
function array(element, params) {
    return core._array(exports.ZodArray, element, params);
}
// .keyof
function keyof(schema) {
    const shape = schema._zod.def.shape;
    return _enum(Object.keys(shape));
}
exports.ZodObject = core.$constructor("ZodObject", (inst, def) => {
    core.$ZodObjectJIT.init(inst, def);
    exports.ZodType.init(inst, def);
    index_js_1.util.defineLazy(inst, "shape", () => def.shape);
    inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall: catchall });
    inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
    inst.strip = () => inst.clone({ ...inst._zod.def, catchall: undefined });
    inst.extend = (incoming) => {
        return index_js_1.util.extend(inst, incoming);
    };
    inst.safeExtend = (incoming) => {
        return index_js_1.util.safeExtend(inst, incoming);
    };
    inst.merge = (other) => index_js_1.util.merge(inst, other);
    inst.pick = (mask) => index_js_1.util.pick(inst, mask);
    inst.omit = (mask) => index_js_1.util.omit(inst, mask);
    inst.partial = (...args) => index_js_1.util.partial(exports.ZodOptional, inst, args[0]);
    inst.required = (...args) => index_js_1.util.required(exports.ZodNonOptional, inst, args[0]);
});
function object(shape, params) {
    const def = {
        type: "object",
        get shape() {
            index_js_1.util.assignProp(this, "shape", shape ? index_js_1.util.objectClone(shape) : {});
            return this.shape;
        },
        ...index_js_1.util.normalizeParams(params),
    };
    return new exports.ZodObject(def);
}
// strictObject
function strictObject(shape, params) {
    return new exports.ZodObject({
        type: "object",
        get shape() {
            index_js_1.util.assignProp(this, "shape", index_js_1.util.objectClone(shape));
            return this.shape;
        },
        catchall: never(),
        ...index_js_1.util.normalizeParams(params),
    });
}
// looseObject
function looseObject(shape, params) {
    return new exports.ZodObject({
        type: "object",
        get shape() {
            index_js_1.util.assignProp(this, "shape", index_js_1.util.objectClone(shape));
            return this.shape;
        },
        catchall: unknown(),
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodUnion = core.$constructor("ZodUnion", (inst, def) => {
    core.$ZodUnion.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.options = def.options;
});
function union(options, params) {
    return new exports.ZodUnion({
        type: "union",
        options: options,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodDiscriminatedUnion = core.$constructor("ZodDiscriminatedUnion", (inst, def) => {
    exports.ZodUnion.init(inst, def);
    core.$ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
    // const [options, params] = args;
    return new exports.ZodDiscriminatedUnion({
        type: "union",
        options,
        discriminator,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodIntersection = core.$constructor("ZodIntersection", (inst, def) => {
    core.$ZodIntersection.init(inst, def);
    exports.ZodType.init(inst, def);
});
function intersection(left, right) {
    return new exports.ZodIntersection({
        type: "intersection",
        left: left,
        right: right,
    });
}
exports.ZodTuple = core.$constructor("ZodTuple", (inst, def) => {
    core.$ZodTuple.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.rest = (rest) => inst.clone({
        ...inst._zod.def,
        rest: rest,
    });
});
function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof core.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new exports.ZodTuple({
        type: "tuple",
        items: items,
        rest,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodRecord = core.$constructor("ZodRecord", (inst, def) => {
    core.$ZodRecord.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
    return new exports.ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ...index_js_1.util.normalizeParams(params),
    });
}
// type alksjf = core.output<core.$ZodRecordKey>;
function partialRecord(keyType, valueType, params) {
    const k = core.clone(keyType);
    k._zod.values = undefined;
    return new exports.ZodRecord({
        type: "record",
        keyType: k,
        valueType: valueType,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodMap = core.$constructor("ZodMap", (inst, def) => {
    core.$ZodMap.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function map(keyType, valueType, params) {
    return new exports.ZodMap({
        type: "map",
        keyType: keyType,
        valueType: valueType,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodSet = core.$constructor("ZodSet", (inst, def) => {
    core.$ZodSet.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.min = (...args) => inst.check(core._minSize(...args));
    inst.nonempty = (params) => inst.check(core._minSize(1, params));
    inst.max = (...args) => inst.check(core._maxSize(...args));
    inst.size = (...args) => inst.check(core._size(...args));
});
function set(valueType, params) {
    return new exports.ZodSet({
        type: "set",
        valueType: valueType,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodEnum = core.$constructor("ZodEnum", (inst, def) => {
    core.$ZodEnum.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params) => {
        const newEntries = {};
        for (const value of values) {
            if (keys.has(value)) {
                newEntries[value] = def.entries[value];
            }
            else
                throw new Error(`Key ${value} not found in enum`);
        }
        return new exports.ZodEnum({
            ...def,
            checks: [],
            ...index_js_1.util.normalizeParams(params),
            entries: newEntries,
        });
    };
    inst.exclude = (values, params) => {
        const newEntries = { ...def.entries };
        for (const value of values) {
            if (keys.has(value)) {
                delete newEntries[value];
            }
            else
                throw new Error(`Key ${value} not found in enum`);
        }
        return new exports.ZodEnum({
            ...def,
            checks: [],
            ...index_js_1.util.normalizeParams(params),
            entries: newEntries,
        });
    };
});
function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new exports.ZodEnum({
        type: "enum",
        entries,
        ...index_js_1.util.normalizeParams(params),
    });
}
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
function nativeEnum(entries, params) {
    return new exports.ZodEnum({
        type: "enum",
        entries,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodLiteral = core.$constructor("ZodLiteral", (inst, def) => {
    core.$ZodLiteral.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
        get() {
            if (def.values.length > 1) {
                throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            }
            return def.values[0];
        },
    });
});
function literal(value, params) {
    return new exports.ZodLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodFile = core.$constructor("ZodFile", (inst, def) => {
    core.$ZodFile.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.min = (size, params) => inst.check(core._minSize(size, params));
    inst.max = (size, params) => inst.check(core._maxSize(size, params));
    inst.mime = (types, params) => inst.check(core._mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
    return core._file(exports.ZodFile, params);
}
exports.ZodTransform = core.$constructor("ZodTransform", (inst, def) => {
    core.$ZodTransform.init(inst, def);
    exports.ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        if (_ctx.direction === "backward") {
            throw new core.$ZodEncodeError(inst.constructor.name);
        }
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(index_js_1.util.issue(issue, payload.value, def));
            }
            else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal)
                    _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                _issue.input ?? (_issue.input = payload.value);
                _issue.inst ?? (_issue.inst = inst);
                // _issue.continue ??= true;
                payload.issues.push(index_js_1.util.issue(_issue));
            }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
            return output.then((output) => {
                payload.value = output;
                return payload;
            });
        }
        payload.value = output;
        return payload;
    };
});
function transform(fn) {
    return new exports.ZodTransform({
        type: "transform",
        transform: fn,
    });
}
exports.ZodOptional = core.$constructor("ZodOptional", (inst, def) => {
    core.$ZodOptional.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
    return new exports.ZodOptional({
        type: "optional",
        innerType: innerType,
    });
}
exports.ZodNullable = core.$constructor("ZodNullable", (inst, def) => {
    core.$ZodNullable.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
    return new exports.ZodNullable({
        type: "nullable",
        innerType: innerType,
    });
}
// nullish
function nullish(innerType) {
    return optional(nullable(innerType));
}
exports.ZodDefault = core.$constructor("ZodDefault", (inst, def) => {
    core.$ZodDefault.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
    return new exports.ZodDefault({
        type: "default",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : index_js_1.util.shallowClone(defaultValue);
        },
    });
}
exports.ZodPrefault = core.$constructor("ZodPrefault", (inst, def) => {
    core.$ZodPrefault.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
    return new exports.ZodPrefault({
        type: "prefault",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : index_js_1.util.shallowClone(defaultValue);
        },
    });
}
exports.ZodNonOptional = core.$constructor("ZodNonOptional", (inst, def) => {
    core.$ZodNonOptional.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
    return new exports.ZodNonOptional({
        type: "nonoptional",
        innerType: innerType,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodSuccess = core.$constructor("ZodSuccess", (inst, def) => {
    core.$ZodSuccess.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
    return new exports.ZodSuccess({
        type: "success",
        innerType: innerType,
    });
}
exports.ZodCatch = core.$constructor("ZodCatch", (inst, def) => {
    core.$ZodCatch.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
    return new exports.ZodCatch({
        type: "catch",
        innerType: innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue),
    });
}
exports.ZodNaN = core.$constructor("ZodNaN", (inst, def) => {
    core.$ZodNaN.init(inst, def);
    exports.ZodType.init(inst, def);
});
function nan(params) {
    return core._nan(exports.ZodNaN, params);
}
exports.ZodPipe = core.$constructor("ZodPipe", (inst, def) => {
    core.$ZodPipe.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
});
function pipe(in_, out) {
    return new exports.ZodPipe({
        type: "pipe",
        in: in_,
        out: out,
        // ...util.normalizeParams(params),
    });
}
exports.ZodCodec = core.$constructor("ZodCodec", (inst, def) => {
    exports.ZodPipe.init(inst, def);
    core.$ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
    return new exports.ZodCodec({
        type: "pipe",
        in: in_,
        out: out,
        transform: params.decode,
        reverseTransform: params.encode,
    });
}
exports.ZodReadonly = core.$constructor("ZodReadonly", (inst, def) => {
    core.$ZodReadonly.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
    return new exports.ZodReadonly({
        type: "readonly",
        innerType: innerType,
    });
}
exports.ZodTemplateLiteral = core.$constructor("ZodTemplateLiteral", (inst, def) => {
    core.$ZodTemplateLiteral.init(inst, def);
    exports.ZodType.init(inst, def);
});
function templateLiteral(parts, params) {
    return new exports.ZodTemplateLiteral({
        type: "template_literal",
        parts,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodLazy = core.$constructor("ZodLazy", (inst, def) => {
    core.$ZodLazy.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
    return new exports.ZodLazy({
        type: "lazy",
        getter: getter,
    });
}
exports.ZodPromise = core.$constructor("ZodPromise", (inst, def) => {
    core.$ZodPromise.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
    return new exports.ZodPromise({
        type: "promise",
        innerType: innerType,
    });
}
exports.ZodFunction = core.$constructor("ZodFunction", (inst, def) => {
    core.$ZodFunction.init(inst, def);
    exports.ZodType.init(inst, def);
});
function _function(params) {
    return new exports.ZodFunction({
        type: "function",
        input: Array.isArray(params?.input) ? tuple(params?.input) : (params?.input ?? array(unknown())),
        output: params?.output ?? unknown(),
    });
}
exports.ZodCustom = core.$constructor("ZodCustom", (inst, def) => {
    core.$ZodCustom.init(inst, def);
    exports.ZodType.init(inst, def);
});
// custom checks
function check(fn) {
    const ch = new core.$ZodCheck({
        check: "custom",
        // ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
function custom(fn, _params) {
    return core._custom(exports.ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
    return core._refine(exports.ZodCustom, fn, _params);
}
// superRefine
function superRefine(fn) {
    return core._superRefine(fn);
}
function _instanceof(cls, params = {
    error: `Input not instance of ${cls.name}`,
}) {
    const inst = new exports.ZodCustom({
        type: "custom",
        check: "custom",
        fn: (data) => data instanceof cls,
        abort: true,
        ...index_js_1.util.normalizeParams(params),
    });
    inst._zod.bag.Class = cls;
    return inst;
}
// stringbool
const stringbool = (...args) => core._stringbool({
    Codec: exports.ZodCodec,
    Boolean: exports.ZodBoolean,
    String: exports.ZodString,
}, ...args);
exports.stringbool = stringbool;
function json(params) {
    const jsonSchema = lazy(() => {
        return union([string(params), number(), boolean(), _null(), array(jsonSchema), record(string(), jsonSchema)]);
    });
    return jsonSchema;
}
// preprocess
// /** @deprecated Use `z.pipe()` and `z.transform()` instead. */
function preprocess(fn, schema) {
    return pipe(transform(fn), schema);
}


/***/ }),

/***/ 6878:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrée",
        email: "adresse courriel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date-heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Entrée invalide : attendu ${issue.expected}, reçu ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrée invalide : attendu ${util.stringifyPrimitive(issue.values[0])}`;
                return `Option invalide : attendu l'une des valeurs suivantes ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "≤" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Trop grand : attendu que ${issue.origin ?? "la valeur"} ait ${adj}${issue.maximum.toString()} ${sizing.unit}`;
                return `Trop grand : attendu que ${issue.origin ?? "la valeur"} soit ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "≥" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Trop petit : attendu que ${issue.origin} ait ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Trop petit : attendu que ${issue.origin} soit ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Chaîne invalide : doit inclure "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Chaîne invalide : doit correspondre au motif ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} invalide`;
            }
            case "not_multiple_of":
                return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Clé invalide dans ${issue.origin}`;
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return `Valeur invalide dans ${issue.origin}`;
            default:
                return `Entrée invalide`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 6883:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("node:tty");

/***/ }),

/***/ 7209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "harf", verb: "olmalıdır" },
        file: { unit: "bayt", verb: "olmalıdır" },
        array: { unit: "unsur", verb: "olmalıdır" },
        set: { unit: "unsur", verb: "olmalıdır" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "numara";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "saf";
                }
                if (data === null) {
                    return "gayb";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "giren",
        email: "epostagâh",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO hengâmı",
        date: "ISO tarihi",
        time: "ISO zamanı",
        duration: "ISO müddeti",
        ipv4: "IPv4 nişânı",
        ipv6: "IPv6 nişânı",
        cidrv4: "IPv4 menzili",
        cidrv6: "IPv6 menzili",
        base64: "base64-şifreli metin",
        base64url: "base64url-şifreli metin",
        json_string: "JSON metin",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "giren",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Fâsit giren: umulan ${issue.expected}, alınan ${parsedType(issue.input)}`;
            // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Fâsit giren: umulan ${util.stringifyPrimitive(issue.values[0])}`;
                return `Fâsit tercih: mûteberler ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Fazla büyük: ${issue.origin ?? "value"}, ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmalıydı.`;
                return `Fazla büyük: ${issue.origin ?? "value"}, ${adj}${issue.maximum.toString()} olmalıydı.`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Fazla küçük: ${issue.origin}, ${adj}${issue.minimum.toString()} ${sizing.unit} sahip olmalıydı.`;
                }
                return `Fazla küçük: ${issue.origin}, ${adj}${issue.minimum.toString()} olmalıydı.`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Fâsit metin: "${_issue.prefix}" ile başlamalı.`;
                if (_issue.format === "ends_with")
                    return `Fâsit metin: "${_issue.suffix}" ile bitmeli.`;
                if (_issue.format === "includes")
                    return `Fâsit metin: "${_issue.includes}" ihtivâ etmeli.`;
                if (_issue.format === "regex")
                    return `Fâsit metin: ${_issue.pattern} nakşına uymalı.`;
                return `Fâsit ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Fâsit sayı: ${issue.divisor} katı olmalıydı.`;
            case "unrecognized_keys":
                return `Tanınmayan anahtar ${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} için tanınmayan anahtar var.`;
            case "invalid_union":
                return "Giren tanınamadı.";
            case "invalid_element":
                return `${issue.origin} için tanınmayan kıymet var.`;
            default:
                return `Kıymet tanınamadı.`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 7251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const parse_js_1 = __webpack_require__(8744);
const stringify_js_1 = __webpack_require__(7382);
function v6ToV1(uuid) {
    const v6Bytes = typeof uuid === 'string' ? (0, parse_js_1.default)(uuid) : uuid;
    const v1Bytes = _v6ToV1(v6Bytes);
    return typeof uuid === 'string' ? (0, stringify_js_1.unsafeStringify)(v1Bytes) : v1Bytes;
}
exports["default"] = v6ToV1;
function _v6ToV1(v6Bytes) {
    return Uint8Array.of(((v6Bytes[3] & 0x0f) << 4) | ((v6Bytes[4] >> 4) & 0x0f), ((v6Bytes[4] & 0x0f) << 4) | ((v6Bytes[5] & 0xf0) >> 4), ((v6Bytes[5] & 0x0f) << 4) | (v6Bytes[6] & 0x0f), v6Bytes[7], ((v6Bytes[1] & 0x0f) << 4) | ((v6Bytes[2] & 0xf0) >> 4), ((v6Bytes[2] & 0x0f) << 4) | ((v6Bytes[3] & 0xf0) >> 4), 0x10 | ((v6Bytes[0] & 0xf0) >> 4), ((v6Bytes[0] & 0x0f) << 4) | ((v6Bytes[1] & 0xf0) >> 4), v6Bytes[8], v6Bytes[9], v6Bytes[10], v6Bytes[11], v6Bytes[12], v6Bytes[13], v6Bytes[14], v6Bytes[15]);
}


/***/ }),

/***/ 7382:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unsafeStringify = void 0;
const validate_js_1 = __webpack_require__(2621);
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
exports.unsafeStringify = unsafeStringify;
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, validate_js_1.default)(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
exports["default"] = stringify;


/***/ }),

/***/ 7459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "znaků", verb: "mít" },
        file: { unit: "bajtů", verb: "mít" },
        array: { unit: "prvků", verb: "mít" },
        set: { unit: "prvků", verb: "mít" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "číslo";
            }
            case "string": {
                return "řetězec";
            }
            case "boolean": {
                return "boolean";
            }
            case "bigint": {
                return "bigint";
            }
            case "function": {
                return "funkce";
            }
            case "symbol": {
                return "symbol";
            }
            case "undefined": {
                return "undefined";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "pole";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "regulární výraz",
        email: "e-mailová adresa",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "datum a čas ve formátu ISO",
        date: "datum ve formátu ISO",
        time: "čas ve formátu ISO",
        duration: "doba trvání ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "řetězec zakódovaný ve formátu base64",
        base64url: "řetězec zakódovaný ve formátu base64url",
        json_string: "řetězec ve formátu JSON",
        e164: "číslo E.164",
        jwt: "JWT",
        template_literal: "vstup",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Neplatný vstup: očekáváno ${issue.expected}, obdrženo ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Neplatný vstup: očekáváno ${util.stringifyPrimitive(issue.values[0])}`;
                return `Neplatná možnost: očekávána jedna z hodnot ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.maximum.toString()} ${sizing.unit ?? "prvků"}`;
                }
                return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.minimum.toString()} ${sizing.unit ?? "prvků"}`;
                }
                return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Neplatný řetězec: musí začínat na "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Neplatný řetězec: musí končit na "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Neplatný řetězec: musí obsahovat "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Neplatný řetězec: musí odpovídat vzoru ${_issue.pattern}`;
                return `Neplatný formát ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Neplatné číslo: musí být násobkem ${issue.divisor}`;
            case "unrecognized_keys":
                return `Neznámé klíče: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Neplatný klíč v ${issue.origin}`;
            case "invalid_union":
                return "Neplatný vstup";
            case "invalid_element":
                return `Neplatná hodnota v ${issue.origin}`;
            default:
                return `Neplatný vstup`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 7598:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 7615:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validate_js_1 = __webpack_require__(2621);
function version(uuid) {
    if (!(0, validate_js_1.default)(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.slice(14, 15), 16);
}
exports["default"] = version;


/***/ }),

/***/ 7632:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", ({ value: true }));

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = __webpack_require__(8420)


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.15.0
 * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
 */
Prisma.prismaVersion = {
  client: "6.15.0",
  engine: "85179d7826409ee107a6ba334b5e305ae3fba9fb"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = __webpack_require__(6928)

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  firebaseUid: 'firebaseUid',
  email: 'email',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BusinessScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  name: 'name',
  description: 'description',
  phone: 'phone',
  email: 'email',
  address: 'address',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  businessId: 'businessId',
  name: 'name',
  address: 'address',
  phone: 'phone',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  businessId: 'businessId',
  phone: 'phone',
  name: 'name',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  businessId: 'businessId',
  name: 'name',
  description: 'description',
  duration: 'duration',
  price: 'price',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Business: 'Business',
  Location: 'Location',
  Customer: 'Customer',
  Service: 'Service'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Asus\\Desktop\\Assignment project\\salon-app-Backend\\libs\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Asus\\Desktop\\Assignment project\\salon-app-Backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.15.0",
  "engineVersion": "85179d7826409ee107a6ba334b5e305ae3fba9fb",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  binaryTargets = [\"native\", \"rhel-openssl-1.0.x\", \"rhel-openssl-3.0.x\"]\n  output        = \"../libs/generated/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id          String     @id @default(uuid())\n  firebaseUid String     @unique\n  email       String     @unique\n  name        String\n  createdAt   DateTime   @default(now())\n  updatedAt   DateTime   @updatedAt\n  businesses  Business[]\n}\n\nmodel Business {\n  id          String   @id @default(uuid())\n  ownerId     String\n  name        String\n  description String?\n  phone       String?\n  email       String?\n  address     String?\n  isActive    Boolean  @default(true)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  owner     User       @relation(fields: [ownerId], references: [id], onDelete: Cascade)\n  locations Location[]\n  customers Customer[]\n  services  Service[]\n\n  @@index([ownerId])\n}\n\nmodel Location {\n  id         String   @id @default(uuid())\n  businessId String\n  name       String\n  address    String\n  phone      String?\n  isActive   Boolean  @default(true)\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  business Business @relation(fields: [businessId], references: [id], onDelete: Cascade)\n\n  @@index([businessId])\n}\n\nmodel Customer {\n  id         String   @id @default(uuid())\n  businessId String\n  phone      String\n  name       String\n  email      String?\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  business Business @relation(fields: [businessId], references: [id], onDelete: Cascade)\n\n  @@unique([businessId, phone], name: \"unique_phone_per_business\")\n  @@index([businessId])\n}\n\nmodel Service {\n  id          String   @id @default(uuid())\n  businessId  String\n  name        String\n  description String?\n  duration    Int // Duration in minutes\n  price       Decimal  @db.Decimal(10, 2)\n  isActive    Boolean  @default(true)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  business Business @relation(fields: [businessId], references: [id], onDelete: Cascade)\n\n  @@index([businessId])\n}\n",
  "inlineSchemaHash": "399add3065325479d24459c0f0842f9360b0b59ffd73407871a8e2c562d0b8ac",
  "copyEngine": true
}

const fs = __webpack_require__(9896)

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "libs/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firebaseUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"businesses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Business\",\"nativeType\":null,\"relationName\":\"BusinessToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Business\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"BusinessToUser\",\"relationFromFields\":[\"ownerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"nativeType\":null,\"relationName\":\"BusinessToLocation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"nativeType\":null,\"relationName\":\"BusinessToCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"services\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"BusinessToService\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Location\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"businessId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Business\",\"nativeType\":null,\"relationName\":\"BusinessToLocation\",\"relationFromFields\":[\"businessId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Customer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"businessId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Business\",\"nativeType\":null,\"relationName\":\"BusinessToCustomer\",\"relationFromFields\":[\"businessId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"businessId\",\"phone\"]],\"uniqueIndexes\":[{\"name\":\"unique_phone_per_business\",\"fields\":[\"businessId\",\"phone\"]}],\"isGenerated\":false},\"Service\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"businessId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Business\",\"nativeType\":null,\"relationName\":\"BusinessToService\",\"relationFromFields\":[\"businessId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = __webpack_require__(8420)

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "libs/generated/client/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-1.0.x.so.node");
path.join(process.cwd(), "libs/generated/client/libquery_engine-rhel-openssl-1.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
path.join(process.cwd(), "libs/generated/client/libquery_engine-rhel-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "libs/generated/client/schema.prisma")


/***/ }),

/***/ 7647:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.safeDecodeAsync = exports.safeEncodeAsync = exports.safeDecode = exports.safeEncode = exports.decodeAsync = exports.encodeAsync = exports.decode = exports.encode = exports.safeParseAsync = exports.safeParse = exports.parseAsync = exports.parse = void 0;
const core = __importStar(__webpack_require__(6405));
const errors_js_1 = __webpack_require__(5887);
exports.parse = core._parse(errors_js_1.ZodRealError);
exports.parseAsync = core._parseAsync(errors_js_1.ZodRealError);
exports.safeParse = core._safeParse(errors_js_1.ZodRealError);
exports.safeParseAsync = core._safeParseAsync(errors_js_1.ZodRealError);
// Codec functions
exports.encode = core._encode(errors_js_1.ZodRealError);
exports.decode = core._decode(errors_js_1.ZodRealError);
exports.encodeAsync = core._encodeAsync(errors_js_1.ZodRealError);
exports.decodeAsync = core._decodeAsync(errors_js_1.ZodRealError);
exports.safeEncode = core._safeEncode(errors_js_1.ZodRealError);
exports.safeDecode = core._safeDecode(errors_js_1.ZodRealError);
exports.safeEncodeAsync = core._safeEncodeAsync(errors_js_1.ZodRealError);
exports.safeDecodeAsync = core._safeDecodeAsync(errors_js_1.ZodRealError);


/***/ }),

/***/ 7696:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.version = void 0;
exports.version = {
    major: 4,
    minor: 1,
    patch: 5,
};


/***/ }),

/***/ 7811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "символів", verb: "матиме" },
        file: { unit: "байтів", verb: "матиме" },
        array: { unit: "елементів", verb: "матиме" },
        set: { unit: "елементів", verb: "матиме" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "число";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "масив";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "вхідні дані",
        email: "адреса електронної пошти",
        url: "URL",
        emoji: "емодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "дата та час ISO",
        date: "дата ISO",
        time: "час ISO",
        duration: "тривалість ISO",
        ipv4: "адреса IPv4",
        ipv6: "адреса IPv6",
        cidrv4: "діапазон IPv4",
        cidrv6: "діапазон IPv6",
        base64: "рядок у кодуванні base64",
        base64url: "рядок у кодуванні base64url",
        json_string: "рядок JSON",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "вхідні дані",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${parsedType(issue.input)}`;
            // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Неправильні вхідні дані: очікується ${util.stringifyPrimitive(issue.values[0])}`;
                return `Неправильна опція: очікується одне з ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Занадто велике: очікується, що ${issue.origin ?? "значення"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елементів"}`;
                return `Занадто велике: очікується, що ${issue.origin ?? "значення"} буде ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Занадто мале: очікується, що ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Занадто мале: очікується, що ${issue.origin} буде ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Неправильний рядок: повинен починатися з "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Неправильний рядок: повинен закінчуватися на "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Неправильний рядок: повинен містити "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Неправильний рядок: повинен відповідати шаблону ${_issue.pattern}`;
                return `Неправильний ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Неправильне число: повинно бути кратним ${issue.divisor}`;
            case "unrecognized_keys":
                return `Нерозпізнаний ключ${issue.keys.length > 1 ? "і" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Неправильний ключ у ${issue.origin}`;
            case "invalid_union":
                return "Неправильні вхідні дані";
            case "invalid_element":
                return `Неправильне значення у ${issue.origin}`;
            default:
                return `Неправильні вхідні дані`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 7919:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const stringify_js_1 = __webpack_require__(7382);
const v1_js_1 = __webpack_require__(5614);
const v1ToV6_js_1 = __webpack_require__(1175);
function v6(options, buf, offset) {
    options ??= {};
    offset ??= 0;
    let bytes = (0, v1_js_1.default)({ ...options, _v6: true }, new Uint8Array(16));
    bytes = (0, v1ToV6_js_1.default)(bytes);
    if (buf) {
        for (let i = 0; i < 16; i++) {
            buf[offset + i] = bytes[i];
        }
        return buf;
    }
    return (0, stringify_js_1.unsafeStringify)(bytes);
}
exports["default"] = v6;


/***/ }),

/***/ 7950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
function getRussianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    return many;
}
const error = () => {
    const Sizable = {
        string: {
            unit: {
                one: "символ",
                few: "символа",
                many: "символов",
            },
            verb: "иметь",
        },
        file: {
            unit: {
                one: "байт",
                few: "байта",
                many: "байт",
            },
            verb: "иметь",
        },
        array: {
            unit: {
                one: "элемент",
                few: "элемента",
                many: "элементов",
            },
            verb: "иметь",
        },
        set: {
            unit: {
                one: "элемент",
                few: "элемента",
                many: "элементов",
            },
            verb: "иметь",
        },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "число";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "массив";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ввод",
        email: "email адрес",
        url: "URL",
        emoji: "эмодзи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата и время",
        date: "ISO дата",
        time: "ISO время",
        duration: "ISO длительность",
        ipv4: "IPv4 адрес",
        ipv6: "IPv6 адрес",
        cidrv4: "IPv4 диапазон",
        cidrv6: "IPv6 диапазон",
        base64: "строка в формате base64",
        base64url: "строка в формате base64url",
        json_string: "JSON строка",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "ввод",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Неверный ввод: ожидалось ${issue.expected}, получено ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Неверный ввод: ожидалось ${util.stringifyPrimitive(issue.values[0])}`;
                return `Неверный вариант: ожидалось одно из ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    const maxValue = Number(issue.maximum);
                    const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                    return `Слишком большое значение: ожидалось, что ${issue.origin ?? "значение"} будет иметь ${adj}${issue.maximum.toString()} ${unit}`;
                }
                return `Слишком большое значение: ожидалось, что ${issue.origin ?? "значение"} будет ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    const minValue = Number(issue.minimum);
                    const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                    return `Слишком маленькое значение: ожидалось, что ${issue.origin} будет иметь ${adj}${issue.minimum.toString()} ${unit}`;
                }
                return `Слишком маленькое значение: ожидалось, что ${issue.origin} будет ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Неверная строка: должна начинаться с "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Неверная строка: должна заканчиваться на "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Неверная строка: должна содержать "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Неверная строка: должна соответствовать шаблону ${_issue.pattern}`;
                return `Неверный ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Неверное число: должно быть кратным ${issue.divisor}`;
            case "unrecognized_keys":
                return `Нераспознанн${issue.keys.length > 1 ? "ые" : "ый"} ключ${issue.keys.length > 1 ? "и" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Неверный ключ в ${issue.origin}`;
            case "invalid_union":
                return "Неверные входные данные";
            case "invalid_element":
                return `Неверное значение в ${issue.origin}`;
            default:
                return `Неверные входные данные`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 7975:
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ 8161:
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ 8227:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalkinStatus = void 0;
var WalkinStatus;
(function (WalkinStatus) {
    WalkinStatus["REQUESTED"] = "REQUESTED";
    WalkinStatus["IN_PROGRESS"] = "IN_PROGRESS";
    WalkinStatus["COMPLETED"] = "COMPLETED";
    WalkinStatus["CANCELLED"] = "CANCELLED";
})(WalkinStatus || (exports.WalkinStatus = WalkinStatus = {}));


/***/ }),

/***/ 8348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "tegn", verb: "havde" },
        file: { unit: "bytes", verb: "havde" },
        array: { unit: "elementer", verb: "indeholdt" },
        set: { unit: "elementer", verb: "indeholdt" },
    };
    const TypeNames = {
        string: "streng",
        number: "tal",
        boolean: "boolean",
        array: "liste",
        object: "objekt",
        set: "sæt",
        file: "fil",
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    function getTypeName(type) {
        return TypeNames[type] ?? type;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "tal";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "liste";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
                return "objekt";
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-mailadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslæt",
        date: "ISO-dato",
        time: "ISO-klokkeslæt",
        duration: "ISO-varighed",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodet streng",
        base64url: "base64url-kodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ugyldigt input: forventede ${getTypeName(issue.expected)}, fik ${getTypeName(parsedType(issue.input))}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ugyldig værdi: forventede ${util.stringifyPrimitive(issue.values[0])}`;
                return `Ugyldigt valg: forventede en af følgende ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                const origin = getTypeName(issue.origin);
                if (sizing)
                    return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "elementer"}`;
                return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                const origin = getTypeName(issue.origin);
                if (sizing) {
                    return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `For lille: forventede ${origin} havde ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ugyldig streng: skal matche mønsteret ${_issue.pattern}`;
                return `Ugyldig ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ugyldigt tal: skal være deleligt med ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig nøgle i ${issue.origin}`;
            case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
                return `Ugyldig værdi i ${issue.origin}`;
            default:
                return `Ugyldigt input`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 8380:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleError = void 0;
const errors_1 = __webpack_require__(5521);
const handleError = (error) => {
    console.error('Error occurred:', error);
    if (error instanceof errors_1.ValidationError) {
        return {
            statusCode: error.statusCode,
            message: error.message,
            details: error.code,
        };
    }
    if (error instanceof errors_1.NotFoundError) {
        return {
            statusCode: error.statusCode,
            message: error.message,
            details: error.code,
        };
    }
    if (error instanceof errors_1.ConflictError) {
        return {
            statusCode: error.statusCode,
            message: error.message,
            details: error.code,
        };
    }
    if (error instanceof errors_1.WalkinServiceError) {
        return {
            statusCode: error.statusCode,
            message: error.message,
            details: error.code,
        };
    }
    // Handle Zod validation errors
    if (error && typeof error === 'object' && 'issues' in error) {
        return {
            statusCode: 400,
            message: 'Validation failed',
            details: error,
        };
    }
    // Handle Prisma errors
    if (error && typeof error === 'object' && 'code' in error) {
        const prismaError = error;
        if (prismaError.code === 'P2002') {
            return {
                statusCode: 409,
                message: 'Resource already exists',
                details: 'DUPLICATE_ENTRY',
            };
        }
        if (prismaError.code === 'P2025') {
            return {
                statusCode: 404,
                message: 'Resource not found',
                details: 'NOT_FOUND',
            };
        }
    }
    // Generic error
    return {
        statusCode: 500,
        message: 'Internal server error',
        details: 'INTERNAL_ERROR',
    };
};
exports.handleError = handleError;


/***/ }),

/***/ 8386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const crypto_1 = __webpack_require__(6982);
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    }
    else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return (0, crypto_1.createHash)('sha1').update(bytes).digest();
}
exports["default"] = sha1;


/***/ }),

/***/ 8420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */
var xu=Object.create;var Vt=Object.defineProperty;var vu=Object.getOwnPropertyDescriptor;var Pu=Object.getOwnPropertyNames;var Tu=Object.getPrototypeOf,Su=Object.prototype.hasOwnProperty;var Oo=(e,r)=>()=>(e&&(r=e(e=0)),r);var ne=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),tr=(e,r)=>{for(var t in r)Vt(e,t,{get:r[t],enumerable:!0})},ko=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Pu(r))!Su.call(e,i)&&i!==t&&Vt(e,i,{get:()=>r[i],enumerable:!(n=vu(r,i))||n.enumerable});return e};var A=(e,r,t)=>(t=e!=null?xu(Tu(e)):{},ko(r||!e||!e.__esModule?Vt(t,"default",{value:e,enumerable:!0}):t,e)),Ru=e=>ko(Vt({},"__esModule",{value:!0}),e);var hi=ne((Mg,os)=>{"use strict";os.exports=(e,r=process.argv)=>{let t=e.startsWith("-")?"":e.length===1?"-":"--",n=r.indexOf(t+e),i=r.indexOf("--");return n!==-1&&(i===-1||n<i)}});var ls=ne(($g,as)=>{"use strict";var Vc=__webpack_require__(8161),ss=__webpack_require__(7066),de=hi(),{env:G}=process,Qe;de("no-color")||de("no-colors")||de("color=false")||de("color=never")?Qe=0:(de("color")||de("colors")||de("color=true")||de("color=always"))&&(Qe=1);"FORCE_COLOR"in G&&(G.FORCE_COLOR==="true"?Qe=1:G.FORCE_COLOR==="false"?Qe=0:Qe=G.FORCE_COLOR.length===0?1:Math.min(parseInt(G.FORCE_COLOR,10),3));function yi(e){return e===0?!1:{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function bi(e,r){if(Qe===0)return 0;if(de("color=16m")||de("color=full")||de("color=truecolor"))return 3;if(de("color=256"))return 2;if(e&&!r&&Qe===void 0)return 0;let t=Qe||0;if(G.TERM==="dumb")return t;if(process.platform==="win32"){let n=Vc.release().split(".");return Number(n[0])>=10&&Number(n[2])>=10586?Number(n[2])>=14931?3:2:1}if("CI"in G)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE"].some(n=>n in G)||G.CI_NAME==="codeship"?1:t;if("TEAMCITY_VERSION"in G)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(G.TEAMCITY_VERSION)?1:0;if(G.COLORTERM==="truecolor")return 3;if("TERM_PROGRAM"in G){let n=parseInt((G.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(G.TERM_PROGRAM){case"iTerm.app":return n>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(G.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(G.TERM)||"COLORTERM"in G?1:t}function jc(e){let r=bi(e,e&&e.isTTY);return yi(r)}as.exports={supportsColor:jc,stdout:yi(bi(!0,ss.isatty(1))),stderr:yi(bi(!0,ss.isatty(2)))}});var ps=ne((qg,cs)=>{"use strict";var Bc=ls(),br=hi();function us(e){if(/^\d{3,4}$/.test(e)){let t=/(\d{1,2})(\d{2})/.exec(e)||[];return{major:0,minor:parseInt(t[1],10),patch:parseInt(t[2],10)}}let r=(e||"").split(".").map(t=>parseInt(t,10));return{major:r[0],minor:r[1],patch:r[2]}}function Ei(e){let{CI:r,FORCE_HYPERLINK:t,NETLIFY:n,TEAMCITY_VERSION:i,TERM_PROGRAM:o,TERM_PROGRAM_VERSION:s,VTE_VERSION:a,TERM:l}=process.env;if(t)return!(t.length>0&&parseInt(t,10)===0);if(br("no-hyperlink")||br("no-hyperlinks")||br("hyperlink=false")||br("hyperlink=never"))return!1;if(br("hyperlink=true")||br("hyperlink=always")||n)return!0;if(!Bc.supportsColor(e)||e&&!e.isTTY)return!1;if("WT_SESSION"in process.env)return!0;if(process.platform==="win32"||r||i)return!1;if(o){let u=us(s||"");switch(o){case"iTerm.app":return u.major===3?u.minor>=1:u.major>3;case"WezTerm":return u.major>=20200620;case"vscode":return u.major>1||u.major===1&&u.minor>=72;case"ghostty":return!0}}if(a){if(a==="0.50.0")return!1;let u=us(a);return u.major>0||u.minor>=50}switch(l){case"alacritty":return!0}return!1}cs.exports={supportsHyperlink:Ei,stdout:Ei(process.stdout),stderr:Ei(process.stderr)}});var ds=ne((Zg,Uc)=>{Uc.exports={name:"@prisma/internals",version:"6.15.0",description:"This package is intended for Prisma's internal use",main:"dist/index.js",types:"dist/index.d.ts",repository:{type:"git",url:"https://github.com/prisma/prisma.git",directory:"packages/internals"},homepage:"https://www.prisma.io",author:"Tim Suchanek <suchanek@prisma.io>",bugs:"https://github.com/prisma/prisma/issues",license:"Apache-2.0",scripts:{dev:"DEV=true tsx helpers/build.ts",build:"tsx helpers/build.ts",test:"dotenv -e ../../.db.env -- jest --silent",prepublishOnly:"pnpm run build"},files:["README.md","dist","!**/libquery_engine*","!dist/get-generators/engines/*","scripts"],devDependencies:{"@babel/helper-validator-identifier":"7.25.9","@opentelemetry/api":"1.9.0","@swc/core":"1.11.5","@swc/jest":"0.2.37","@types/babel__helper-validator-identifier":"7.15.2","@types/jest":"29.5.14","@types/node":"18.19.76","@types/resolve":"1.20.6",archiver:"6.0.2","checkpoint-client":"1.1.33","cli-truncate":"4.0.0",dotenv:"16.5.0",empathic:"2.0.0",esbuild:"0.25.5","escape-string-regexp":"5.0.0",execa:"5.1.1","fast-glob":"3.3.3","find-up":"7.0.0","fp-ts":"2.16.9","fs-extra":"11.3.0","fs-jetpack":"5.1.0","global-dirs":"4.0.0",globby:"11.1.0","identifier-regex":"1.0.0","indent-string":"4.0.0","is-windows":"1.0.2","is-wsl":"3.1.0",jest:"29.7.0","jest-junit":"16.0.0",kleur:"4.1.5","mock-stdin":"1.0.0","new-github-issue-url":"0.2.1","node-fetch":"3.3.2","npm-packlist":"5.1.3",open:"7.4.2","p-map":"4.0.0",resolve:"1.22.10","string-width":"7.2.0","strip-ansi":"6.0.1","strip-indent":"4.0.0","temp-dir":"2.0.0",tempy:"1.0.1","terminal-link":"4.0.0",tmp:"0.2.3","ts-node":"10.9.2","ts-pattern":"5.6.2","ts-toolbelt":"9.6.0",typescript:"5.4.5",yarn:"1.22.22"},dependencies:{"@prisma/config":"workspace:*","@prisma/debug":"workspace:*","@prisma/dmmf":"workspace:*","@prisma/driver-adapter-utils":"workspace:*","@prisma/engines":"workspace:*","@prisma/fetch-engine":"workspace:*","@prisma/generator":"workspace:*","@prisma/generator-helper":"workspace:*","@prisma/get-platform":"workspace:*","@prisma/prisma-schema-wasm":"6.15.0-5.85179d7826409ee107a6ba334b5e305ae3fba9fb","@prisma/schema-engine-wasm":"6.15.0-5.85179d7826409ee107a6ba334b5e305ae3fba9fb","@prisma/schema-files-loader":"workspace:*",arg:"5.0.2",prompts:"2.4.2"},peerDependencies:{typescript:">=5.1.0"},peerDependenciesMeta:{typescript:{optional:!0}},sideEffects:!1}});var Ti=ne((Eh,Hc)=>{Hc.exports={name:"@prisma/engines-version",version:"6.15.0-5.85179d7826409ee107a6ba334b5e305ae3fba9fb",main:"index.js",types:"index.d.ts",license:"Apache-2.0",author:"Tim Suchanek <suchanek@prisma.io>",prisma:{enginesVersion:"85179d7826409ee107a6ba334b5e305ae3fba9fb"},repository:{type:"git",url:"https://github.com/prisma/engines-wrapper.git",directory:"packages/engines-version"},devDependencies:{"@types/node":"18.19.76",typescript:"4.9.5"},files:["index.js","index.d.ts"],scripts:{build:"tsc -d"}}});var nn=ne(tn=>{"use strict";Object.defineProperty(tn,"__esModule",{value:!0});tn.enginesVersion=void 0;tn.enginesVersion=Ti().prisma.enginesVersion});var ys=ne((_h,hs)=>{"use strict";hs.exports=e=>{let r=e.match(/^[ \t]*(?=\S)/gm);return r?r.reduce((t,n)=>Math.min(t,n.length),1/0):0}});var Di=ne((Fh,ws)=>{"use strict";ws.exports=(e,r=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},typeof e!="string")throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if(typeof r!="number")throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);if(typeof t.indent!="string")throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(r===0)return e;let n=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,t.indent.repeat(r))}});var Ts=ne((qh,Ps)=>{"use strict";Ps.exports=({onlyFirst:e=!1}={})=>{let r=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(r,e?void 0:"g")}});var Ni=ne((Vh,Ss)=>{"use strict";var op=Ts();Ss.exports=e=>typeof e=="string"?e.replace(op(),""):e});var Rs=ne((Gh,sp)=>{sp.exports={name:"dotenv",version:"16.5.0",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard",pretest:"npm run lint && npm run dts-check",test:"tap run --allow-empty-coverage --disable-coverage --timeout=60000","test:coverage":"tap run --show-full-coverage --timeout=60000 --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},homepage:"https://github.com/motdotla/dotenv#readme",funding:"https://dotenvx.com",keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@types/node":"^18.11.3",decache:"^4.6.2",sinon:"^14.0.1",standard:"^17.0.0","standard-version":"^9.5.0",tap:"^19.2.0",typescript:"^4.8.4"},engines:{node:">=12"},browser:{fs:!1}}});var Os=ne((Qh,_e)=>{"use strict";var Fi=__webpack_require__(3024),Mi=__webpack_require__(6760),ap=__webpack_require__(8161),lp=__webpack_require__(7598),up=Rs(),Cs=up.version,cp=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function pp(e){let r={},t=e.toString();t=t.replace(/\r\n?/mg,`
`);let n;for(;(n=cp.exec(t))!=null;){let i=n[1],o=n[2]||"";o=o.trim();let s=o[0];o=o.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),s==='"'&&(o=o.replace(/\\n/g,`
`),o=o.replace(/\\r/g,"\r")),r[i]=o}return r}function dp(e){let r=Ds(e),t=B.configDotenv({path:r});if(!t.parsed){let s=new Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);throw s.code="MISSING_DATA",s}let n=Is(e).split(","),i=n.length,o;for(let s=0;s<i;s++)try{let a=n[s].trim(),l=fp(t,a);o=B.decrypt(l.ciphertext,l.key);break}catch(a){if(s+1>=i)throw a}return B.parse(o)}function mp(e){console.log(`[dotenv@${Cs}][WARN] ${e}`)}function it(e){console.log(`[dotenv@${Cs}][DEBUG] ${e}`)}function Is(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function fp(e,r){let t;try{t=new URL(r)}catch(a){if(a.code==="ERR_INVALID_URL"){let l=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw l.code="INVALID_DOTENV_KEY",l}throw a}let n=t.password;if(!n){let a=new Error("INVALID_DOTENV_KEY: Missing key part");throw a.code="INVALID_DOTENV_KEY",a}let i=t.searchParams.get("environment");if(!i){let a=new Error("INVALID_DOTENV_KEY: Missing environment part");throw a.code="INVALID_DOTENV_KEY",a}let o=`DOTENV_VAULT_${i.toUpperCase()}`,s=e.parsed[o];if(!s){let a=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);throw a.code="NOT_FOUND_DOTENV_ENVIRONMENT",a}return{ciphertext:s,key:n}}function Ds(e){let r=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(let t of e.path)Fi.existsSync(t)&&(r=t.endsWith(".vault")?t:`${t}.vault`);else r=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else r=Mi.resolve(process.cwd(),".env.vault");return Fi.existsSync(r)?r:null}function As(e){return e[0]==="~"?Mi.join(ap.homedir(),e.slice(1)):e}function gp(e){!!(e&&e.debug)&&it("Loading env from encrypted .env.vault");let t=B._parseVault(e),n=process.env;return e&&e.processEnv!=null&&(n=e.processEnv),B.populate(n,t,e),{parsed:t}}function hp(e){let r=Mi.resolve(process.cwd(),".env"),t="utf8",n=!!(e&&e.debug);e&&e.encoding?t=e.encoding:n&&it("No encoding is specified. UTF-8 is used by default");let i=[r];if(e&&e.path)if(!Array.isArray(e.path))i=[As(e.path)];else{i=[];for(let l of e.path)i.push(As(l))}let o,s={};for(let l of i)try{let u=B.parse(Fi.readFileSync(l,{encoding:t}));B.populate(s,u,e)}catch(u){n&&it(`Failed to load ${l} ${u.message}`),o=u}let a=process.env;return e&&e.processEnv!=null&&(a=e.processEnv),B.populate(a,s,e),o?{parsed:s,error:o}:{parsed:s}}function yp(e){if(Is(e).length===0)return B.configDotenv(e);let r=Ds(e);return r?B._configVault(e):(mp(`You set DOTENV_KEY but you are missing a .env.vault file at ${r}. Did you forget to build it?`),B.configDotenv(e))}function bp(e,r){let t=Buffer.from(r.slice(-64),"hex"),n=Buffer.from(e,"base64"),i=n.subarray(0,12),o=n.subarray(-16);n=n.subarray(12,-16);try{let s=lp.createDecipheriv("aes-256-gcm",t,i);return s.setAuthTag(o),`${s.update(n)}${s.final()}`}catch(s){let a=s instanceof RangeError,l=s.message==="Invalid key length",u=s.message==="Unsupported state or unable to authenticate data";if(a||l){let c=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw c.code="INVALID_DOTENV_KEY",c}else if(u){let c=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw c.code="DECRYPTION_FAILED",c}else throw s}}function Ep(e,r,t={}){let n=!!(t&&t.debug),i=!!(t&&t.override);if(typeof r!="object"){let o=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw o.code="OBJECT_REQUIRED",o}for(let o of Object.keys(r))Object.prototype.hasOwnProperty.call(e,o)?(i===!0&&(e[o]=r[o]),n&&it(i===!0?`"${o}" is already defined and WAS overwritten`:`"${o}" is already defined and was NOT overwritten`)):e[o]=r[o]}var B={configDotenv:hp,_configVault:gp,_parseVault:dp,config:yp,decrypt:bp,parse:pp,populate:Ep};_e.exports.configDotenv=B.configDotenv;_e.exports._configVault=B._configVault;_e.exports._parseVault=B._parseVault;_e.exports.config=B.config;_e.exports.decrypt=B.decrypt;_e.exports.parse=B.parse;_e.exports.populate=B.populate;_e.exports=B});var Ls=ne((zh,un)=>{"use strict";un.exports=(e={})=>{let r;if(e.repoUrl)r=e.repoUrl;else if(e.user&&e.repo)r=`https://github.com/${e.user}/${e.repo}`;else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");let t=new URL(`${r}/issues/new`),n=["body","title","labels","template","milestone","assignee","projects"];for(let i of n){let o=e[i];if(o!==void 0){if(i==="labels"||i==="projects"){if(!Array.isArray(o))throw new TypeError(`The \`${i}\` option should be an array`);o=o.join(",")}t.searchParams.set(i,o)}}return t.toString()};un.exports.default=un.exports});var Ki=ne((Sb,ia)=>{"use strict";ia.exports=function(){function e(r,t,n,i,o){return r<t||n<t?r>n?n+1:r+1:i===o?t:t+1}return function(r,t){if(r===t)return 0;if(r.length>t.length){var n=r;r=t,t=n}for(var i=r.length,o=t.length;i>0&&r.charCodeAt(i-1)===t.charCodeAt(o-1);)i--,o--;for(var s=0;s<i&&r.charCodeAt(s)===t.charCodeAt(s);)s++;if(i-=s,o-=s,i===0||o<3)return o;var a=0,l,u,c,p,d,f,h,g,D,T,S,b,O=[];for(l=0;l<i;l++)O.push(l+1),O.push(r.charCodeAt(s+l));for(var me=O.length-1;a<o-3;)for(D=t.charCodeAt(s+(u=a)),T=t.charCodeAt(s+(c=a+1)),S=t.charCodeAt(s+(p=a+2)),b=t.charCodeAt(s+(d=a+3)),f=a+=4,l=0;l<me;l+=2)h=O[l],g=O[l+1],u=e(h,u,c,D,g),c=e(u,c,p,T,g),p=e(c,p,d,S,g),f=e(p,d,f,b,g),O[l]=f,d=p,p=c,c=u,u=h;for(;a<o;)for(D=t.charCodeAt(s+(u=a)),f=++a,l=0;l<me;l+=2)h=O[l],O[l]=f=e(h,u,f,D,O[l+1]),u=h;return f}}()});var ua=Oo(()=>{"use strict"});var ca=Oo(()=>{"use strict"});var Qf={};tr(Qf,{DMMF:()=>ut,Debug:()=>N,Decimal:()=>Fe,Extensions:()=>ni,MetricsClient:()=>Nr,PrismaClientInitializationError:()=>P,PrismaClientKnownRequestError:()=>z,PrismaClientRustPanicError:()=>le,PrismaClientUnknownRequestError:()=>V,PrismaClientValidationError:()=>Z,Public:()=>ii,Sql:()=>oe,createParam:()=>Ra,defineDmmfProperty:()=>ka,deserializeJsonResponse:()=>qr,deserializeRawResult:()=>Xn,dmmfToRuntimeDataModel:()=>$s,empty:()=>La,getPrismaClient:()=>bu,getRuntime:()=>Gn,join:()=>Na,makeStrictEnum:()=>Eu,makeTypedQueryFactory:()=>_a,objectEnumValues:()=>Dn,raw:()=>no,serializeJsonQuery:()=>Mn,skip:()=>Fn,sqltag:()=>io,warnEnvConflicts:()=>wu,warnOnce:()=>st});module.exports=Ru(Qf);var ni={};tr(ni,{defineExtension:()=>_o,getExtensionContext:()=>No});function _o(e){return typeof e=="function"?e:r=>r.$extends(e)}function No(e){return e}var ii={};tr(ii,{validator:()=>Lo});function Lo(...e){return r=>r}var jt={};tr(jt,{$:()=>Vo,bgBlack:()=>Fu,bgBlue:()=>Vu,bgCyan:()=>Bu,bgGreen:()=>$u,bgMagenta:()=>ju,bgRed:()=>Mu,bgWhite:()=>Uu,bgYellow:()=>qu,black:()=>ku,blue:()=>nr,bold:()=>W,cyan:()=>De,dim:()=>Ce,gray:()=>Kr,green:()=>qe,grey:()=>Lu,hidden:()=>Du,inverse:()=>Iu,italic:()=>Cu,magenta:()=>_u,red:()=>ce,reset:()=>Au,strikethrough:()=>Ou,underline:()=>Y,white:()=>Nu,yellow:()=>Ie});var oi,Fo,Mo,$o,qo=!0;typeof process<"u"&&({FORCE_COLOR:oi,NODE_DISABLE_COLORS:Fo,NO_COLOR:Mo,TERM:$o}=process.env||{},qo=process.stdout&&process.stdout.isTTY);var Vo={enabled:!Fo&&Mo==null&&$o!=="dumb"&&(oi!=null&&oi!=="0"||qo)};function F(e,r){let t=new RegExp(`\\x1b\\[${r}m`,"g"),n=`\x1B[${e}m`,i=`\x1B[${r}m`;return function(o){return!Vo.enabled||o==null?o:n+(~(""+o).indexOf(i)?o.replace(t,i+n):o)+i}}var Au=F(0,0),W=F(1,22),Ce=F(2,22),Cu=F(3,23),Y=F(4,24),Iu=F(7,27),Du=F(8,28),Ou=F(9,29),ku=F(30,39),ce=F(31,39),qe=F(32,39),Ie=F(33,39),nr=F(34,39),_u=F(35,39),De=F(36,39),Nu=F(37,39),Kr=F(90,39),Lu=F(90,39),Fu=F(40,49),Mu=F(41,49),$u=F(42,49),qu=F(43,49),Vu=F(44,49),ju=F(45,49),Bu=F(46,49),Uu=F(47,49);var Gu=100,jo=["green","yellow","blue","magenta","cyan","red"],Hr=[],Bo=Date.now(),Qu=0,si=typeof process<"u"?process.env:{};globalThis.DEBUG??=si.DEBUG??"";globalThis.DEBUG_COLORS??=si.DEBUG_COLORS?si.DEBUG_COLORS==="true":!0;var Yr={enable(e){typeof e=="string"&&(globalThis.DEBUG=e)},disable(){let e=globalThis.DEBUG;return globalThis.DEBUG="",e},enabled(e){let r=globalThis.DEBUG.split(",").map(i=>i.replace(/[.+?^${}()|[\]\\]/g,"\\$&")),t=r.some(i=>i===""||i[0]==="-"?!1:e.match(RegExp(i.split("*").join(".*")+"$"))),n=r.some(i=>i===""||i[0]!=="-"?!1:e.match(RegExp(i.slice(1).split("*").join(".*")+"$")));return t&&!n},log:(...e)=>{let[r,t,...n]=e;(console.warn??console.log)(`${r} ${t}`,...n)},formatters:{}};function Wu(e){let r={color:jo[Qu++%jo.length],enabled:Yr.enabled(e),namespace:e,log:Yr.log,extend:()=>{}},t=(...n)=>{let{enabled:i,namespace:o,color:s,log:a}=r;if(n.length!==0&&Hr.push([o,...n]),Hr.length>Gu&&Hr.shift(),Yr.enabled(o)||i){let l=n.map(c=>typeof c=="string"?c:Ju(c)),u=`+${Date.now()-Bo}ms`;Bo=Date.now(),globalThis.DEBUG_COLORS?a(jt[s](W(o)),...l,jt[s](u)):a(o,...l,u)}};return new Proxy(t,{get:(n,i)=>r[i],set:(n,i,o)=>r[i]=o})}var N=new Proxy(Wu,{get:(e,r)=>Yr[r],set:(e,r,t)=>Yr[r]=t});function Ju(e,r=2){let t=new Set;return JSON.stringify(e,(n,i)=>{if(typeof i=="object"&&i!==null){if(t.has(i))return"[Circular *]";t.add(i)}else if(typeof i=="bigint")return i.toString();return i},r)}function Uo(e=7500){let r=Hr.map(([t,...n])=>`${t} ${n.map(i=>typeof i=="string"?i:JSON.stringify(i)).join(" ")}`).join(`
`);return r.length<e?r:r.slice(-e)}function Go(){Hr.length=0}var gr=N;var Qo=A(__webpack_require__(3024));function ai(){let e=process.env.PRISMA_QUERY_ENGINE_LIBRARY;if(!(e&&Qo.default.existsSync(e))&&process.arch==="ia32")throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)')}var li=["darwin","darwin-arm64","debian-openssl-1.0.x","debian-openssl-1.1.x","debian-openssl-3.0.x","rhel-openssl-1.0.x","rhel-openssl-1.1.x","rhel-openssl-3.0.x","linux-arm64-openssl-1.1.x","linux-arm64-openssl-1.0.x","linux-arm64-openssl-3.0.x","linux-arm-openssl-1.1.x","linux-arm-openssl-1.0.x","linux-arm-openssl-3.0.x","linux-musl","linux-musl-openssl-3.0.x","linux-musl-arm64-openssl-1.1.x","linux-musl-arm64-openssl-3.0.x","linux-nixos","linux-static-x64","linux-static-arm64","windows","freebsd11","freebsd12","freebsd13","freebsd14","freebsd15","openbsd","netbsd","arm"];var Bt="libquery_engine";function Ut(e,r){let t=r==="url";return e.includes("windows")?t?"query_engine.dll.node":`query_engine-${e}.dll.node`:e.includes("darwin")?t?`${Bt}.dylib.node`:`${Bt}-${e}.dylib.node`:t?`${Bt}.so.node`:`${Bt}-${e}.so.node`}var Ho=A(__webpack_require__(1421)),mi=A(__webpack_require__(1455)),Kt=A(__webpack_require__(8161));var Oe=Symbol.for("@ts-pattern/matcher"),Ku=Symbol.for("@ts-pattern/isVariadic"),Qt="@ts-pattern/anonymous-select-key",ui=e=>!!(e&&typeof e=="object"),Gt=e=>e&&!!e[Oe],Ee=(e,r,t)=>{if(Gt(e)){let n=e[Oe](),{matched:i,selections:o}=n.match(r);return i&&o&&Object.keys(o).forEach(s=>t(s,o[s])),i}if(ui(e)){if(!ui(r))return!1;if(Array.isArray(e)){if(!Array.isArray(r))return!1;let n=[],i=[],o=[];for(let s of e.keys()){let a=e[s];Gt(a)&&a[Ku]?o.push(a):o.length?i.push(a):n.push(a)}if(o.length){if(o.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(r.length<n.length+i.length)return!1;let s=r.slice(0,n.length),a=i.length===0?[]:r.slice(-i.length),l=r.slice(n.length,i.length===0?1/0:-i.length);return n.every((u,c)=>Ee(u,s[c],t))&&i.every((u,c)=>Ee(u,a[c],t))&&(o.length===0||Ee(o[0],l,t))}return e.length===r.length&&e.every((s,a)=>Ee(s,r[a],t))}return Reflect.ownKeys(e).every(n=>{let i=e[n];return(n in r||Gt(o=i)&&o[Oe]().matcherType==="optional")&&Ee(i,r[n],t);// removed by dead control flow
 var o; })}return Object.is(r,e)},Ge=e=>{var r,t,n;return ui(e)?Gt(e)?(r=(t=(n=e[Oe]()).getSelectionKeys)==null?void 0:t.call(n))!=null?r:[]:Array.isArray(e)?zr(e,Ge):zr(Object.values(e),Ge):[]},zr=(e,r)=>e.reduce((t,n)=>t.concat(r(n)),[]);function pe(e){return Object.assign(e,{optional:()=>Hu(e),and:r=>q(e,r),or:r=>Yu(e,r),select:r=>r===void 0?Wo(e):Wo(r,e)})}function Hu(e){return pe({[Oe]:()=>({match:r=>{let t={},n=(i,o)=>{t[i]=o};return r===void 0?(Ge(e).forEach(i=>n(i,void 0)),{matched:!0,selections:t}):{matched:Ee(e,r,n),selections:t}},getSelectionKeys:()=>Ge(e),matcherType:"optional"})})}function q(...e){return pe({[Oe]:()=>({match:r=>{let t={},n=(i,o)=>{t[i]=o};return{matched:e.every(i=>Ee(i,r,n)),selections:t}},getSelectionKeys:()=>zr(e,Ge),matcherType:"and"})})}function Yu(...e){return pe({[Oe]:()=>({match:r=>{let t={},n=(i,o)=>{t[i]=o};return zr(e,Ge).forEach(i=>n(i,void 0)),{matched:e.some(i=>Ee(i,r,n)),selections:t}},getSelectionKeys:()=>zr(e,Ge),matcherType:"or"})})}function C(e){return{[Oe]:()=>({match:r=>({matched:!!e(r)})})}}function Wo(...e){let r=typeof e[0]=="string"?e[0]:void 0,t=e.length===2?e[1]:typeof e[0]=="string"?void 0:e[0];return pe({[Oe]:()=>({match:n=>{let i={[r??Qt]:n};return{matched:t===void 0||Ee(t,n,(o,s)=>{i[o]=s}),selections:i}},getSelectionKeys:()=>[r??Qt].concat(t===void 0?[]:Ge(t))})})}function ye(e){return typeof e=="number"}function Ve(e){return typeof e=="string"}function je(e){return typeof e=="bigint"}var ig=pe(C(function(e){return!0}));var Be=e=>Object.assign(pe(e),{startsWith:r=>{return Be(q(e,(t=r,C(n=>Ve(n)&&n.startsWith(t)))));// removed by dead control flow
 var t; },endsWith:r=>{return Be(q(e,(t=r,C(n=>Ve(n)&&n.endsWith(t)))));// removed by dead control flow
 var t; },minLength:r=>Be(q(e,(t=>C(n=>Ve(n)&&n.length>=t))(r))),length:r=>Be(q(e,(t=>C(n=>Ve(n)&&n.length===t))(r))),maxLength:r=>Be(q(e,(t=>C(n=>Ve(n)&&n.length<=t))(r))),includes:r=>{return Be(q(e,(t=r,C(n=>Ve(n)&&n.includes(t)))));// removed by dead control flow
 var t; },regex:r=>{return Be(q(e,(t=r,C(n=>Ve(n)&&!!n.match(t)))));// removed by dead control flow
 var t; }}),og=Be(C(Ve)),be=e=>Object.assign(pe(e),{between:(r,t)=>be(q(e,((n,i)=>C(o=>ye(o)&&n<=o&&i>=o))(r,t))),lt:r=>be(q(e,(t=>C(n=>ye(n)&&n<t))(r))),gt:r=>be(q(e,(t=>C(n=>ye(n)&&n>t))(r))),lte:r=>be(q(e,(t=>C(n=>ye(n)&&n<=t))(r))),gte:r=>be(q(e,(t=>C(n=>ye(n)&&n>=t))(r))),int:()=>be(q(e,C(r=>ye(r)&&Number.isInteger(r)))),finite:()=>be(q(e,C(r=>ye(r)&&Number.isFinite(r)))),positive:()=>be(q(e,C(r=>ye(r)&&r>0))),negative:()=>be(q(e,C(r=>ye(r)&&r<0)))}),sg=be(C(ye)),Ue=e=>Object.assign(pe(e),{between:(r,t)=>Ue(q(e,((n,i)=>C(o=>je(o)&&n<=o&&i>=o))(r,t))),lt:r=>Ue(q(e,(t=>C(n=>je(n)&&n<t))(r))),gt:r=>Ue(q(e,(t=>C(n=>je(n)&&n>t))(r))),lte:r=>Ue(q(e,(t=>C(n=>je(n)&&n<=t))(r))),gte:r=>Ue(q(e,(t=>C(n=>je(n)&&n>=t))(r))),positive:()=>Ue(q(e,C(r=>je(r)&&r>0))),negative:()=>Ue(q(e,C(r=>je(r)&&r<0)))}),ag=Ue(C(je)),lg=pe(C(function(e){return typeof e=="boolean"})),ug=pe(C(function(e){return typeof e=="symbol"})),cg=pe(C(function(e){return e==null})),pg=pe(C(function(e){return e!=null}));var ci=class extends Error{constructor(r){let t;try{t=JSON.stringify(r)}catch{t=r}super(`Pattern matching error: no pattern matches value ${t}`),this.input=void 0,this.input=r}},pi={matched:!1,value:void 0};function hr(e){return new di(e,pi)}var di=class e{constructor(r,t){this.input=void 0,this.state=void 0,this.input=r,this.state=t}with(...r){if(this.state.matched)return this;let t=r[r.length-1],n=[r[0]],i;r.length===3&&typeof r[1]=="function"?i=r[1]:r.length>2&&n.push(...r.slice(1,r.length-1));let o=!1,s={},a=(u,c)=>{o=!0,s[u]=c},l=!n.some(u=>Ee(u,this.input,a))||i&&!i(this.input)?pi:{matched:!0,value:t(o?Qt in s?s[Qt]:s:this.input,this.input)};return new e(this.input,l)}when(r,t){if(this.state.matched)return this;let n=!!r(this.input);return new e(this.input,n?{matched:!0,value:t(this.input,this.input)}:pi)}otherwise(r){return this.state.matched?this.state.value:r(this.input)}exhaustive(){if(this.state.matched)return this.state.value;throw new ci(this.input)}run(){return this.exhaustive()}returnType(){return this}};var Yo=__webpack_require__(7975);var zu={warn:Ie("prisma:warn")},Zu={warn:()=>!process.env.PRISMA_DISABLE_WARNINGS};function Wt(e,...r){Zu.warn()&&console.warn(`${zu.warn} ${e}`,...r)}var Xu=(0,Yo.promisify)(Ho.default.exec),ee=gr("prisma:get-platform"),ec=["1.0.x","1.1.x","3.0.x"];async function zo(){let e=Kt.default.platform(),r=process.arch;if(e==="freebsd"){let s=await Ht("freebsd-version");if(s&&s.trim().length>0){let l=/^(\d+)\.?/.exec(s);if(l)return{platform:"freebsd",targetDistro:`freebsd${l[1]}`,arch:r}}}if(e!=="linux")return{platform:e,arch:r};let t=await tc(),n=await cc(),i=ic({arch:r,archFromUname:n,familyDistro:t.familyDistro}),{libssl:o}=await oc(i);return{platform:"linux",libssl:o,arch:r,archFromUname:n,...t}}function rc(e){let r=/^ID="?([^"\n]*)"?$/im,t=/^ID_LIKE="?([^"\n]*)"?$/im,n=r.exec(e),i=n&&n[1]&&n[1].toLowerCase()||"",o=t.exec(e),s=o&&o[1]&&o[1].toLowerCase()||"",a=hr({id:i,idLike:s}).with({id:"alpine"},({id:l})=>({targetDistro:"musl",familyDistro:l,originalDistro:l})).with({id:"raspbian"},({id:l})=>({targetDistro:"arm",familyDistro:"debian",originalDistro:l})).with({id:"nixos"},({id:l})=>({targetDistro:"nixos",originalDistro:l,familyDistro:"nixos"})).with({id:"debian"},{id:"ubuntu"},({id:l})=>({targetDistro:"debian",familyDistro:"debian",originalDistro:l})).with({id:"rhel"},{id:"centos"},{id:"fedora"},({id:l})=>({targetDistro:"rhel",familyDistro:"rhel",originalDistro:l})).when(({idLike:l})=>l.includes("debian")||l.includes("ubuntu"),({id:l})=>({targetDistro:"debian",familyDistro:"debian",originalDistro:l})).when(({idLike:l})=>i==="arch"||l.includes("arch"),({id:l})=>({targetDistro:"debian",familyDistro:"arch",originalDistro:l})).when(({idLike:l})=>l.includes("centos")||l.includes("fedora")||l.includes("rhel")||l.includes("suse"),({id:l})=>({targetDistro:"rhel",familyDistro:"rhel",originalDistro:l})).otherwise(({id:l})=>({targetDistro:void 0,familyDistro:void 0,originalDistro:l}));return ee(`Found distro info:
${JSON.stringify(a,null,2)}`),a}async function tc(){let e="/etc/os-release";try{let r=await mi.default.readFile(e,{encoding:"utf-8"});return rc(r)}catch{return{targetDistro:void 0,familyDistro:void 0,originalDistro:void 0}}}function nc(e){let r=/^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);if(r){let t=`${r[1]}.x`;return Zo(t)}}function Jo(e){let r=/libssl\.so\.(\d)(\.\d)?/.exec(e);if(r){let t=`${r[1]}${r[2]??".0"}.x`;return Zo(t)}}function Zo(e){let r=(()=>{if(es(e))return e;let t=e.split(".");return t[1]="0",t.join(".")})();if(ec.includes(r))return r}function ic(e){return hr(e).with({familyDistro:"musl"},()=>(ee('Trying platform-specific paths for "alpine"'),["/lib","/usr/lib"])).with({familyDistro:"debian"},({archFromUname:r})=>(ee('Trying platform-specific paths for "debian" (and "ubuntu")'),[`/usr/lib/${r}-linux-gnu`,`/lib/${r}-linux-gnu`])).with({familyDistro:"rhel"},()=>(ee('Trying platform-specific paths for "rhel"'),["/lib64","/usr/lib64"])).otherwise(({familyDistro:r,arch:t,archFromUname:n})=>(ee(`Don't know any platform-specific paths for "${r}" on ${t} (${n})`),[]))}async function oc(e){let r='grep -v "libssl.so.0"',t=await Ko(e);if(t){ee(`Found libssl.so file using platform-specific paths: ${t}`);let o=Jo(t);if(ee(`The parsed libssl version is: ${o}`),o)return{libssl:o,strategy:"libssl-specific-path"}}ee('Falling back to "ldconfig" and other generic paths');let n=await Ht(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${r}`);if(n||(n=await Ko(["/lib64","/usr/lib64","/lib","/usr/lib"])),n){ee(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);let o=Jo(n);if(ee(`The parsed libssl version is: ${o}`),o)return{libssl:o,strategy:"ldconfig"}}let i=await Ht("openssl version -v");if(i){ee(`Found openssl binary with version: ${i}`);let o=nc(i);if(ee(`The parsed openssl version is: ${o}`),o)return{libssl:o,strategy:"openssl-binary"}}return ee("Couldn't find any version of libssl or OpenSSL in the system"),{}}async function Ko(e){for(let r of e){let t=await sc(r);if(t)return t}}async function sc(e){try{return(await mi.default.readdir(e)).find(t=>t.startsWith("libssl.so.")&&!t.startsWith("libssl.so.0"))}catch(r){if(r.code==="ENOENT")return;throw r}}async function ir(){let{binaryTarget:e}=await Xo();return e}function ac(e){return e.binaryTarget!==void 0}async function fi(){let{memoized:e,...r}=await Xo();return r}var Jt={};async function Xo(){if(ac(Jt))return Promise.resolve({...Jt,memoized:!0});let e=await zo(),r=lc(e);return Jt={...e,binaryTarget:r},{...Jt,memoized:!1}}function lc(e){let{platform:r,arch:t,archFromUname:n,libssl:i,targetDistro:o,familyDistro:s,originalDistro:a}=e;r==="linux"&&!["x64","arm64"].includes(t)&&Wt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${t}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);let l="1.1.x";if(r==="linux"&&i===void 0){let c=hr({familyDistro:s}).with({familyDistro:"debian"},()=>"Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(()=>"Please manually install OpenSSL and try installing Prisma again.");Wt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`)}let u="debian";if(r==="linux"&&o===void 0&&ee(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`),r==="darwin"&&t==="arm64")return"darwin-arm64";if(r==="darwin")return"darwin";if(r==="win32")return"windows";if(r==="freebsd")return o;if(r==="openbsd")return"openbsd";if(r==="netbsd")return"netbsd";if(r==="linux"&&o==="nixos")return"linux-nixos";if(r==="linux"&&t==="arm64")return`${o==="musl"?"linux-musl-arm64":"linux-arm64"}-openssl-${i||l}`;if(r==="linux"&&t==="arm")return`linux-arm-openssl-${i||l}`;if(r==="linux"&&o==="musl"){let c="linux-musl";return!i||es(i)?c:`${c}-openssl-${i}`}return r==="linux"&&o&&i?`${o}-openssl-${i}`:(r!=="linux"&&Wt(`Prisma detected unknown OS "${r}" and may not work as expected. Defaulting to "linux".`),i?`${u}-openssl-${i}`:o?`${o}-openssl-${l}`:`${u}-openssl-${l}`)}async function uc(e){try{return await e()}catch{return}}function Ht(e){return uc(async()=>{let r=await Xu(e);return ee(`Command "${e}" successfully returned "${r.stdout}"`),r.stdout})}async function cc(){return typeof Kt.default.machine=="function"?Kt.default.machine():(await Ht("uname -m"))?.trim()}function es(e){return e.startsWith("1.")}var Zt={};tr(Zt,{beep:()=>Fc,clearScreen:()=>kc,clearTerminal:()=>_c,cursorBackward:()=>yc,cursorDown:()=>gc,cursorForward:()=>hc,cursorGetPosition:()=>wc,cursorHide:()=>Pc,cursorLeft:()=>ns,cursorMove:()=>fc,cursorNextLine:()=>xc,cursorPrevLine:()=>vc,cursorRestorePosition:()=>Ec,cursorSavePosition:()=>bc,cursorShow:()=>Tc,cursorTo:()=>mc,cursorUp:()=>ts,enterAlternativeScreen:()=>Nc,eraseDown:()=>Cc,eraseEndLine:()=>Rc,eraseLine:()=>is,eraseLines:()=>Sc,eraseScreen:()=>gi,eraseStartLine:()=>Ac,eraseUp:()=>Ic,exitAlternativeScreen:()=>Lc,iTerm:()=>qc,image:()=>$c,link:()=>Mc,scrollDown:()=>Oc,scrollUp:()=>Dc});var zt=A(__webpack_require__(1708),1);var Yt=globalThis.window?.document!==void 0,Eg=globalThis.process?.versions?.node!==void 0,wg=globalThis.process?.versions?.bun!==void 0,xg=globalThis.Deno?.version?.deno!==void 0,vg=globalThis.process?.versions?.electron!==void 0,Pg=globalThis.navigator?.userAgent?.includes("jsdom")===!0,Tg=typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope,Sg=typeof DedicatedWorkerGlobalScope<"u"&&globalThis instanceof DedicatedWorkerGlobalScope,Rg=typeof SharedWorkerGlobalScope<"u"&&globalThis instanceof SharedWorkerGlobalScope,Ag=typeof ServiceWorkerGlobalScope<"u"&&globalThis instanceof ServiceWorkerGlobalScope,Zr=globalThis.navigator?.userAgentData?.platform,Cg=Zr==="macOS"||globalThis.navigator?.platform==="MacIntel"||globalThis.navigator?.userAgent?.includes(" Mac ")===!0||globalThis.process?.platform==="darwin",Ig=Zr==="Windows"||globalThis.navigator?.platform==="Win32"||globalThis.process?.platform==="win32",Dg=Zr==="Linux"||globalThis.navigator?.platform?.startsWith("Linux")===!0||globalThis.navigator?.userAgent?.includes(" Linux ")===!0||globalThis.process?.platform==="linux",Og=Zr==="iOS"||globalThis.navigator?.platform==="MacIntel"&&globalThis.navigator?.maxTouchPoints>1||/iPad|iPhone|iPod/.test(globalThis.navigator?.platform),kg=Zr==="Android"||globalThis.navigator?.platform==="Android"||globalThis.navigator?.userAgent?.includes(" Android ")===!0||globalThis.process?.platform==="android";var I="\x1B[",et="\x1B]",yr="\x07",Xr=";",rs=!Yt&&zt.default.env.TERM_PROGRAM==="Apple_Terminal",pc=!Yt&&zt.default.platform==="win32",dc=Yt?()=>{throw new Error("`process.cwd()` only works in Node.js, not the browser.")}:zt.default.cwd,mc=(e,r)=>{if(typeof e!="number")throw new TypeError("The `x` argument is required");return typeof r!="number"?I+(e+1)+"G":I+(r+1)+Xr+(e+1)+"H"},fc=(e,r)=>{if(typeof e!="number")throw new TypeError("The `x` argument is required");let t="";return e<0?t+=I+-e+"D":e>0&&(t+=I+e+"C"),r<0?t+=I+-r+"A":r>0&&(t+=I+r+"B"),t},ts=(e=1)=>I+e+"A",gc=(e=1)=>I+e+"B",hc=(e=1)=>I+e+"C",yc=(e=1)=>I+e+"D",ns=I+"G",bc=rs?"\x1B7":I+"s",Ec=rs?"\x1B8":I+"u",wc=I+"6n",xc=I+"E",vc=I+"F",Pc=I+"?25l",Tc=I+"?25h",Sc=e=>{let r="";for(let t=0;t<e;t++)r+=is+(t<e-1?ts():"");return e&&(r+=ns),r},Rc=I+"K",Ac=I+"1K",is=I+"2K",Cc=I+"J",Ic=I+"1J",gi=I+"2J",Dc=I+"S",Oc=I+"T",kc="\x1Bc",_c=pc?`${gi}${I}0f`:`${gi}${I}3J${I}H`,Nc=I+"?1049h",Lc=I+"?1049l",Fc=yr,Mc=(e,r)=>[et,"8",Xr,Xr,r,yr,e,et,"8",Xr,Xr,yr].join(""),$c=(e,r={})=>{let t=`${et}1337;File=inline=1`;return r.width&&(t+=`;width=${r.width}`),r.height&&(t+=`;height=${r.height}`),r.preserveAspectRatio===!1&&(t+=";preserveAspectRatio=0"),t+":"+Buffer.from(e).toString("base64")+yr},qc={setCwd:(e=dc())=>`${et}50;CurrentDir=${e}${yr}`,annotation(e,r={}){let t=`${et}1337;`,n=r.x!==void 0,i=r.y!==void 0;if((n||i)&&!(n&&i&&r.length!==void 0))throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");return e=e.replaceAll("|",""),t+=r.isHidden?"AddHiddenAnnotation=":"AddAnnotation=",r.length>0?t+=(n?[e,r.length,r.x,r.y]:[r.length,e]).join("|"):t+=e,t+yr}};var Xt=A(ps(),1);function or(e,r,{target:t="stdout",...n}={}){return Xt.default[t]?Zt.link(e,r):n.fallback===!1?e:typeof n.fallback=="function"?n.fallback(e,r):`${e} (\u200B${r}\u200B)`}or.isSupported=Xt.default.stdout;or.stderr=(e,r,t={})=>or(e,r,{target:"stderr",...t});or.stderr.isSupported=Xt.default.stderr;function wi(e){return or(e,e,{fallback:Y})}var Gc=ds(),xi=Gc.version;function Er(e){let r=Qc();return r||(e?.config.engineType==="library"?"library":e?.config.engineType==="binary"?"binary":e?.config.engineType==="client"?"client":Wc(e))}function Qc(){let e=process.env.PRISMA_CLIENT_ENGINE_TYPE;return e==="library"?"library":e==="binary"?"binary":e==="client"?"client":void 0}function Wc(e){return e?.previewFeatures.includes("queryCompiler")?"client":"library"}function vi(e){return e.name==="DriverAdapterError"&&typeof e.cause=="object"}function en(e){return{ok:!0,value:e,map(r){return en(r(e))},flatMap(r){return r(e)}}}function sr(e){return{ok:!1,error:e,map(){return sr(e)},flatMap(){return sr(e)}}}var ms=N("driver-adapter-utils"),Pi=class{registeredErrors=[];consumeError(r){return this.registeredErrors[r]}registerNewError(r){let t=0;for(;this.registeredErrors[t]!==void 0;)t++;return this.registeredErrors[t]={error:r},t}};var rn=(e,r=new Pi)=>{let t={adapterName:e.adapterName,errorRegistry:r,queryRaw:ke(r,e.queryRaw.bind(e)),executeRaw:ke(r,e.executeRaw.bind(e)),executeScript:ke(r,e.executeScript.bind(e)),dispose:ke(r,e.dispose.bind(e)),provider:e.provider,startTransaction:async(...n)=>(await ke(r,e.startTransaction.bind(e))(...n)).map(o=>Jc(r,o))};return e.getConnectionInfo&&(t.getConnectionInfo=Kc(r,e.getConnectionInfo.bind(e))),t},Jc=(e,r)=>({adapterName:r.adapterName,provider:r.provider,options:r.options,queryRaw:ke(e,r.queryRaw.bind(r)),executeRaw:ke(e,r.executeRaw.bind(r)),commit:ke(e,r.commit.bind(r)),rollback:ke(e,r.rollback.bind(r))});function ke(e,r){return async(...t)=>{try{return en(await r(...t))}catch(n){if(ms("[error@wrapAsync]",n),vi(n))return sr(n.cause);let i=e.registerNewError(n);return sr({kind:"GenericJs",id:i})}}}function Kc(e,r){return(...t)=>{try{return en(r(...t))}catch(n){if(ms("[error@wrapSync]",n),vi(n))return sr(n.cause);let i=e.registerNewError(n);return sr({kind:"GenericJs",id:i})}}}var Yc=A(nn());var M=A(__webpack_require__(6760)),zc=A(nn()),Th=N("prisma:engines");function fs(){return M.default.join(__dirname,"../")}var Sh="libquery-engine";M.default.join(__dirname,"../query-engine-darwin");M.default.join(__dirname,"../query-engine-darwin-arm64");M.default.join(__dirname,"../query-engine-debian-openssl-1.0.x");M.default.join(__dirname,"../query-engine-debian-openssl-1.1.x");M.default.join(__dirname,"../query-engine-debian-openssl-3.0.x");M.default.join(__dirname,"../query-engine-linux-static-x64");M.default.join(__dirname,"../query-engine-linux-static-arm64");M.default.join(__dirname,"../query-engine-rhel-openssl-1.0.x");M.default.join(__dirname,"../query-engine-rhel-openssl-1.1.x");M.default.join(__dirname,"../query-engine-rhel-openssl-3.0.x");M.default.join(__dirname,"../libquery_engine-darwin.dylib.node");M.default.join(__dirname,"../libquery_engine-darwin-arm64.dylib.node");M.default.join(__dirname,"../libquery_engine-debian-openssl-1.0.x.so.node");M.default.join(__dirname,"../libquery_engine-debian-openssl-1.1.x.so.node");M.default.join(__dirname,"../libquery_engine-debian-openssl-3.0.x.so.node");M.default.join(__dirname,"../libquery_engine-linux-arm64-openssl-1.0.x.so.node");M.default.join(__dirname,"../libquery_engine-linux-arm64-openssl-1.1.x.so.node");M.default.join(__dirname,"../libquery_engine-linux-arm64-openssl-3.0.x.so.node");M.default.join(__dirname,"../libquery_engine-linux-musl.so.node");M.default.join(__dirname,"../libquery_engine-linux-musl-openssl-3.0.x.so.node");M.default.join(__dirname,"../libquery_engine-rhel-openssl-1.0.x.so.node");M.default.join(__dirname,"../libquery_engine-rhel-openssl-1.1.x.so.node");M.default.join(__dirname,"../libquery_engine-rhel-openssl-3.0.x.so.node");M.default.join(__dirname,"../query_engine-windows.dll.node");var Si=A(__webpack_require__(3024)),gs=gr("chmodPlusX");function Ri(e){if(process.platform==="win32")return;let r=Si.default.statSync(e),t=r.mode|64|8|1;if(r.mode===t){gs(`Execution permissions of ${e} are fine`);return}let n=t.toString(8).slice(-3);gs(`Have to call chmodPlusX on ${e}`),Si.default.chmodSync(e,n)}function Ai(e){let r=e.e,t=a=>`Prisma cannot find the required \`${a}\` system library in your system`,n=r.message.includes("cannot open shared object file"),i=`Please refer to the documentation about Prisma's system requirements: ${wi("https://pris.ly/d/system-requirements")}`,o=`Unable to require(\`${Ce(e.id)}\`).`,s=hr({message:r.message,code:r.code}).with({code:"ENOENT"},()=>"File does not exist.").when(({message:a})=>n&&a.includes("libz"),()=>`${t("libz")}. Please install it and try again.`).when(({message:a})=>n&&a.includes("libgcc_s"),()=>`${t("libgcc_s")}. Please install it and try again.`).when(({message:a})=>n&&a.includes("libssl"),()=>{let a=e.platformInfo.libssl?`openssl-${e.platformInfo.libssl}`:"openssl";return`${t("libssl")}. Please install ${a} and try again.`}).when(({message:a})=>a.includes("GLIBC"),()=>`Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({message:a})=>e.platformInfo.platform==="linux"&&a.includes("symbol not found"),()=>`The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(()=>`The Prisma engines do not seem to be compatible with your system. ${i}`);return`${o}
${s}

Details: ${r.message}`}var bs=A(ys(),1);function Ci(e){let r=(0,bs.default)(e);if(r===0)return e;let t=new RegExp(`^[ \\t]{${r}}`,"gm");return e.replace(t,"")}var Es="prisma+postgres",on=`${Es}:`;function sn(e){return e?.toString().startsWith(`${on}//`)??!1}function Ii(e){if(!sn(e))return!1;let{host:r}=new URL(e);return r.includes("localhost")||r.includes("127.0.0.1")||r.includes("[::1]")}var xs=A(Di());function ki(e){return String(new Oi(e))}var Oi=class{constructor(r){this.config=r}toString(){let{config:r}=this,t=r.provider.fromEnvVar?`env("${r.provider.fromEnvVar}")`:r.provider.value,n=JSON.parse(JSON.stringify({provider:t,binaryTargets:Zc(r.binaryTargets)}));return`generator ${r.name} {
${(0,xs.default)(Xc(n),2)}
}`}};function Zc(e){let r;if(e.length>0){let t=e.find(n=>n.fromEnvVar!==null);t?r=`env("${t.fromEnvVar}")`:r=e.map(n=>n.native?"native":n.value)}else r=void 0;return r}function Xc(e){let r=Object.keys(e).reduce((t,n)=>Math.max(t,n.length),0);return Object.entries(e).map(([t,n])=>`${t.padEnd(r)} = ${ep(n)}`).join(`
`)}function ep(e){return JSON.parse(JSON.stringify(e,(r,t)=>Array.isArray(t)?`[${t.map(n=>JSON.stringify(n)).join(", ")}]`:JSON.stringify(t)))}var tt={};tr(tt,{error:()=>np,info:()=>tp,log:()=>rp,query:()=>ip,should:()=>vs,tags:()=>rt,warn:()=>_i});var rt={error:ce("prisma:error"),warn:Ie("prisma:warn"),info:De("prisma:info"),query:nr("prisma:query")},vs={warn:()=>!process.env.PRISMA_DISABLE_WARNINGS};function rp(...e){console.log(...e)}function _i(e,...r){vs.warn()&&console.warn(`${rt.warn} ${e}`,...r)}function tp(e,...r){console.info(`${rt.info} ${e}`,...r)}function np(e,...r){console.error(`${rt.error} ${e}`,...r)}function ip(e,...r){console.log(`${rt.query} ${e}`,...r)}function an(e,r){if(!e)throw new Error(`${r}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`)}function ar(e,r){throw new Error(r)}var nt=A(__webpack_require__(6760));function Li(e){return nt.default.sep===nt.default.posix.sep?e:e.split(nt.default.sep).join(nt.default.posix.sep)}var qi=A(Os()),ln=A(__webpack_require__(3024));var wr=A(__webpack_require__(6760));function ks(e){let r=e.ignoreProcessEnv?{}:process.env,t=n=>n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o,s){let a=/(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);if(!a)return o;let l=a[1],u,c;if(l==="\\")c=a[0],u=c.replace("\\$","$");else{let p=a[2];c=a[0].substring(l.length),u=Object.hasOwnProperty.call(r,p)?r[p]:e.parsed[p]||"",u=t(u)}return o.replace(c,u)},n)??n;for(let n in e.parsed){let i=Object.hasOwnProperty.call(r,n)?r[n]:e.parsed[n];e.parsed[n]=t(i)}for(let n in e.parsed)r[n]=e.parsed[n];return e}var $i=gr("prisma:tryLoadEnv");function ot({rootEnvPath:e,schemaEnvPath:r},t={conflictCheck:"none"}){let n=_s(e);t.conflictCheck!=="none"&&wp(n,r,t.conflictCheck);let i=null;return Ns(n?.path,r)||(i=_s(r)),!n&&!i&&$i("No Environment variables loaded"),i?.dotenvResult.error?console.error(ce(W("Schema Env Error: "))+i.dotenvResult.error):{message:[n?.message,i?.message].filter(Boolean).join(`
`),parsed:{...n?.dotenvResult?.parsed,...i?.dotenvResult?.parsed}}}function wp(e,r,t){let n=e?.dotenvResult.parsed,i=!Ns(e?.path,r);if(n&&r&&i&&ln.default.existsSync(r)){let o=qi.default.parse(ln.default.readFileSync(r)),s=[];for(let a in o)n[a]===o[a]&&s.push(a);if(s.length>0){let a=wr.default.relative(process.cwd(),e.path),l=wr.default.relative(process.cwd(),r);if(t==="error"){let u=`There is a conflict between env var${s.length>1?"s":""} in ${Y(a)} and ${Y(l)}
Conflicting env vars:
${s.map(c=>`  ${W(c)}`).join(`
`)}

We suggest to move the contents of ${Y(l)} to ${Y(a)} to consolidate your env vars.
`;throw new Error(u)}else if(t==="warn"){let u=`Conflict for env var${s.length>1?"s":""} ${s.map(c=>W(c)).join(", ")} in ${Y(a)} and ${Y(l)}
Env vars from ${Y(l)} overwrite the ones from ${Y(a)}
      `;console.warn(`${Ie("warn(prisma)")} ${u}`)}}}}function _s(e){if(xp(e)){$i(`Environment variables loaded from ${e}`);let r=qi.default.config({path:e,debug:process.env.DOTENV_CONFIG_DEBUG?!0:void 0});return{dotenvResult:ks(r),message:Ce(`Environment variables loaded from ${wr.default.relative(process.cwd(),e)}`),path:e}}else $i(`Environment variables not found at ${e}`);return null}function Ns(e,r){return e&&r&&wr.default.resolve(e)===wr.default.resolve(r)}function xp(e){return!!(e&&ln.default.existsSync(e))}function Vi(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function cn(e,r){let t={};for(let n of Object.keys(e))t[n]=r(e[n],n);return t}function ji(e,r){if(e.length===0)return;let t=e[0];for(let n=1;n<e.length;n++)r(t,e[n])<0&&(t=e[n]);return t}function x(e,r){Object.defineProperty(e,"name",{value:r,configurable:!0})}var Fs=new Set,st=(e,r,...t)=>{Fs.has(e)||(Fs.add(e),_i(r,...t))};var P=class e extends Error{clientVersion;errorCode;retryable;constructor(r,t,n){super(r),this.name="PrismaClientInitializationError",this.clientVersion=t,this.errorCode=n,Error.captureStackTrace(e)}get[Symbol.toStringTag](){return"PrismaClientInitializationError"}};x(P,"PrismaClientInitializationError");var z=class extends Error{code;meta;clientVersion;batchRequestIdx;constructor(r,{code:t,clientVersion:n,meta:i,batchRequestIdx:o}){super(r),this.name="PrismaClientKnownRequestError",this.code=t,this.clientVersion=n,this.meta=i,Object.defineProperty(this,"batchRequestIdx",{value:o,enumerable:!1,writable:!0})}get[Symbol.toStringTag](){return"PrismaClientKnownRequestError"}};x(z,"PrismaClientKnownRequestError");var le=class extends Error{clientVersion;constructor(r,t){super(r),this.name="PrismaClientRustPanicError",this.clientVersion=t}get[Symbol.toStringTag](){return"PrismaClientRustPanicError"}};x(le,"PrismaClientRustPanicError");var V=class extends Error{clientVersion;batchRequestIdx;constructor(r,{clientVersion:t,batchRequestIdx:n}){super(r),this.name="PrismaClientUnknownRequestError",this.clientVersion=t,Object.defineProperty(this,"batchRequestIdx",{value:n,writable:!0,enumerable:!1})}get[Symbol.toStringTag](){return"PrismaClientUnknownRequestError"}};x(V,"PrismaClientUnknownRequestError");var Z=class extends Error{name="PrismaClientValidationError";clientVersion;constructor(r,{clientVersion:t}){super(r),this.clientVersion=t}get[Symbol.toStringTag](){return"PrismaClientValidationError"}};x(Z,"PrismaClientValidationError");var we=class{_map=new Map;get(r){return this._map.get(r)?.value}set(r,t){this._map.set(r,{value:t})}getOrCreate(r,t){let n=this._map.get(r);if(n)return n.value;let i=t();return this.set(r,i),i}};function We(e){return e.substring(0,1).toLowerCase()+e.substring(1)}function Ms(e,r){let t={};for(let n of e){let i=n[r];t[i]=n}return t}function at(e){let r;return{get(){return r||(r={value:e()}),r.value}}}function $s(e){return{models:Bi(e.models),enums:Bi(e.enums),types:Bi(e.types)}}function Bi(e){let r={};for(let{name:t,...n}of e)r[t]=n;return r}function xr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function dn(e){return e.toString()!=="Invalid Date"}var vr=9e15,Ye=1e9,Ui="0123456789abcdef",gn="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",hn="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Gi={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-vr,maxE:vr,crypto:!1},Bs,Ne,w=!0,bn="[DecimalError] ",He=bn+"Invalid argument: ",Us=bn+"Precision limit exceeded",Gs=bn+"crypto unavailable",Qs="[object Decimal]",X=Math.floor,U=Math.pow,vp=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Pp=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Tp=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Ws=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,fe=1e7,E=7,Sp=9007199254740991,Rp=gn.length-1,Qi=hn.length-1,m={toStringTag:Qs};m.absoluteValue=m.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),y(e)};m.ceil=function(){return y(new this.constructor(this),this.e+1,2)};m.clampedTo=m.clamp=function(e,r){var t,n=this,i=n.constructor;if(e=new i(e),r=new i(r),!e.s||!r.s)return new i(NaN);if(e.gt(r))throw Error(He+r);return t=n.cmp(e),t<0?e:n.cmp(r)>0?r:new i(n)};m.comparedTo=m.cmp=function(e){var r,t,n,i,o=this,s=o.d,a=(e=new o.constructor(e)).d,l=o.s,u=e.s;if(!s||!a)return!l||!u?NaN:l!==u?l:s===a?0:!s^l<0?1:-1;if(!s[0]||!a[0])return s[0]?l:a[0]?-u:0;if(l!==u)return l;if(o.e!==e.e)return o.e>e.e^l<0?1:-1;for(n=s.length,i=a.length,r=0,t=n<i?n:i;r<t;++r)if(s[r]!==a[r])return s[r]>a[r]^l<0?1:-1;return n===i?0:n>i^l<0?1:-1};m.cosine=m.cos=function(){var e,r,t=this,n=t.constructor;return t.d?t.d[0]?(e=n.precision,r=n.rounding,n.precision=e+Math.max(t.e,t.sd())+E,n.rounding=1,t=Ap(n,zs(n,t)),n.precision=e,n.rounding=r,y(Ne==2||Ne==3?t.neg():t,e,r,!0)):new n(1):new n(NaN)};m.cubeRoot=m.cbrt=function(){var e,r,t,n,i,o,s,a,l,u,c=this,p=c.constructor;if(!c.isFinite()||c.isZero())return new p(c);for(w=!1,o=c.s*U(c.s*c,1/3),!o||Math.abs(o)==1/0?(t=J(c.d),e=c.e,(o=(e-t.length+1)%3)&&(t+=o==1||o==-2?"0":"00"),o=U(t,1/3),e=X((e+1)/3)-(e%3==(e<0?-1:2)),o==1/0?t="5e"+e:(t=o.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new p(t),n.s=c.s):n=new p(o.toString()),s=(e=p.precision)+3;;)if(a=n,l=a.times(a).times(a),u=l.plus(c),n=L(u.plus(c).times(a),u.plus(l),s+2,1),J(a.d).slice(0,s)===(t=J(n.d)).slice(0,s))if(t=t.slice(s-3,s+1),t=="9999"||!i&&t=="4999"){if(!i&&(y(a,e+1,0),a.times(a).times(a).eq(c))){n=a;break}s+=4,i=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(y(n,e+1,1),r=!n.times(n).times(n).eq(c));break}return w=!0,y(n,e,p.rounding,r)};m.decimalPlaces=m.dp=function(){var e,r=this.d,t=NaN;if(r){if(e=r.length-1,t=(e-X(this.e/E))*E,e=r[e],e)for(;e%10==0;e/=10)t--;t<0&&(t=0)}return t};m.dividedBy=m.div=function(e){return L(this,new this.constructor(e))};m.dividedToIntegerBy=m.divToInt=function(e){var r=this,t=r.constructor;return y(L(r,new t(e),0,1,1),t.precision,t.rounding)};m.equals=m.eq=function(e){return this.cmp(e)===0};m.floor=function(){return y(new this.constructor(this),this.e+1,3)};m.greaterThan=m.gt=function(e){return this.cmp(e)>0};m.greaterThanOrEqualTo=m.gte=function(e){var r=this.cmp(e);return r==1||r===0};m.hyperbolicCosine=m.cosh=function(){var e,r,t,n,i,o=this,s=o.constructor,a=new s(1);if(!o.isFinite())return new s(o.s?1/0:NaN);if(o.isZero())return a;t=s.precision,n=s.rounding,s.precision=t+Math.max(o.e,o.sd())+4,s.rounding=1,i=o.d.length,i<32?(e=Math.ceil(i/3),r=(1/wn(4,e)).toString()):(e=16,r="2.3283064365386962890625e-10"),o=Pr(s,1,o.times(r),new s(1),!0);for(var l,u=e,c=new s(8);u--;)l=o.times(o),o=a.minus(l.times(c.minus(l.times(c))));return y(o,s.precision=t,s.rounding=n,!0)};m.hyperbolicSine=m.sinh=function(){var e,r,t,n,i=this,o=i.constructor;if(!i.isFinite()||i.isZero())return new o(i);if(r=o.precision,t=o.rounding,o.precision=r+Math.max(i.e,i.sd())+4,o.rounding=1,n=i.d.length,n<3)i=Pr(o,2,i,i,!0);else{e=1.4*Math.sqrt(n),e=e>16?16:e|0,i=i.times(1/wn(5,e)),i=Pr(o,2,i,i,!0);for(var s,a=new o(5),l=new o(16),u=new o(20);e--;)s=i.times(i),i=i.times(a.plus(s.times(l.times(s).plus(u))))}return o.precision=r,o.rounding=t,y(i,r,t,!0)};m.hyperbolicTangent=m.tanh=function(){var e,r,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(e=n.precision,r=n.rounding,n.precision=e+7,n.rounding=1,L(t.sinh(),t.cosh(),n.precision=e,n.rounding=r)):new n(t.s)};m.inverseCosine=m.acos=function(){var e=this,r=e.constructor,t=e.abs().cmp(1),n=r.precision,i=r.rounding;return t!==-1?t===0?e.isNeg()?xe(r,n,i):new r(0):new r(NaN):e.isZero()?xe(r,n+4,i).times(.5):(r.precision=n+6,r.rounding=1,e=new r(1).minus(e).div(e.plus(1)).sqrt().atan(),r.precision=n,r.rounding=i,e.times(2))};m.inverseHyperbolicCosine=m.acosh=function(){var e,r,t=this,n=t.constructor;return t.lte(1)?new n(t.eq(1)?0:NaN):t.isFinite()?(e=n.precision,r=n.rounding,n.precision=e+Math.max(Math.abs(t.e),t.sd())+4,n.rounding=1,w=!1,t=t.times(t).minus(1).sqrt().plus(t),w=!0,n.precision=e,n.rounding=r,t.ln()):new n(t)};m.inverseHyperbolicSine=m.asinh=function(){var e,r,t=this,n=t.constructor;return!t.isFinite()||t.isZero()?new n(t):(e=n.precision,r=n.rounding,n.precision=e+2*Math.max(Math.abs(t.e),t.sd())+6,n.rounding=1,w=!1,t=t.times(t).plus(1).sqrt().plus(t),w=!0,n.precision=e,n.rounding=r,t.ln())};m.inverseHyperbolicTangent=m.atanh=function(){var e,r,t,n,i=this,o=i.constructor;return i.isFinite()?i.e>=0?new o(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(e=o.precision,r=o.rounding,n=i.sd(),Math.max(n,e)<2*-i.e-1?y(new o(i),e,r,!0):(o.precision=t=n-i.e,i=L(i.plus(1),new o(1).minus(i),t+e,1),o.precision=e+4,o.rounding=1,i=i.ln(),o.precision=e,o.rounding=r,i.times(.5))):new o(NaN)};m.inverseSine=m.asin=function(){var e,r,t,n,i=this,o=i.constructor;return i.isZero()?new o(i):(r=i.abs().cmp(1),t=o.precision,n=o.rounding,r!==-1?r===0?(e=xe(o,t+4,n).times(.5),e.s=i.s,e):new o(NaN):(o.precision=t+6,o.rounding=1,i=i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(),o.precision=t,o.rounding=n,i.times(2)))};m.inverseTangent=m.atan=function(){var e,r,t,n,i,o,s,a,l,u=this,c=u.constructor,p=c.precision,d=c.rounding;if(u.isFinite()){if(u.isZero())return new c(u);if(u.abs().eq(1)&&p+4<=Qi)return s=xe(c,p+4,d).times(.25),s.s=u.s,s}else{if(!u.s)return new c(NaN);if(p+4<=Qi)return s=xe(c,p+4,d).times(.5),s.s=u.s,s}for(c.precision=a=p+10,c.rounding=1,t=Math.min(28,a/E+2|0),e=t;e;--e)u=u.div(u.times(u).plus(1).sqrt().plus(1));for(w=!1,r=Math.ceil(a/E),n=1,l=u.times(u),s=new c(u),i=u;e!==-1;)if(i=i.times(l),o=s.minus(i.div(n+=2)),i=i.times(l),s=o.plus(i.div(n+=2)),s.d[r]!==void 0)for(e=r;s.d[e]===o.d[e]&&e--;);return t&&(s=s.times(2<<t-1)),w=!0,y(s,c.precision=p,c.rounding=d,!0)};m.isFinite=function(){return!!this.d};m.isInteger=m.isInt=function(){return!!this.d&&X(this.e/E)>this.d.length-2};m.isNaN=function(){return!this.s};m.isNegative=m.isNeg=function(){return this.s<0};m.isPositive=m.isPos=function(){return this.s>0};m.isZero=function(){return!!this.d&&this.d[0]===0};m.lessThan=m.lt=function(e){return this.cmp(e)<0};m.lessThanOrEqualTo=m.lte=function(e){return this.cmp(e)<1};m.logarithm=m.log=function(e){var r,t,n,i,o,s,a,l,u=this,c=u.constructor,p=c.precision,d=c.rounding,f=5;if(e==null)e=new c(10),r=!0;else{if(e=new c(e),t=e.d,e.s<0||!t||!t[0]||e.eq(1))return new c(NaN);r=e.eq(10)}if(t=u.d,u.s<0||!t||!t[0]||u.eq(1))return new c(t&&!t[0]?-1/0:u.s!=1?NaN:t?0:1/0);if(r)if(t.length>1)o=!0;else{for(i=t[0];i%10===0;)i/=10;o=i!==1}if(w=!1,a=p+f,s=Ke(u,a),n=r?yn(c,a+10):Ke(e,a),l=L(s,n,a,1),lt(l.d,i=p,d))do if(a+=10,s=Ke(u,a),n=r?yn(c,a+10):Ke(e,a),l=L(s,n,a,1),!o){+J(l.d).slice(i+1,i+15)+1==1e14&&(l=y(l,p+1,0));break}while(lt(l.d,i+=10,d));return w=!0,y(l,p,d)};m.minus=m.sub=function(e){var r,t,n,i,o,s,a,l,u,c,p,d,f=this,h=f.constructor;if(e=new h(e),!f.d||!e.d)return!f.s||!e.s?e=new h(NaN):f.d?e.s=-e.s:e=new h(e.d||f.s!==e.s?f:NaN),e;if(f.s!=e.s)return e.s=-e.s,f.plus(e);if(u=f.d,d=e.d,a=h.precision,l=h.rounding,!u[0]||!d[0]){if(d[0])e.s=-e.s;else if(u[0])e=new h(f);else return new h(l===3?-0:0);return w?y(e,a,l):e}if(t=X(e.e/E),c=X(f.e/E),u=u.slice(),o=c-t,o){for(p=o<0,p?(r=u,o=-o,s=d.length):(r=d,t=c,s=u.length),n=Math.max(Math.ceil(a/E),s)+2,o>n&&(o=n,r.length=1),r.reverse(),n=o;n--;)r.push(0);r.reverse()}else{for(n=u.length,s=d.length,p=n<s,p&&(s=n),n=0;n<s;n++)if(u[n]!=d[n]){p=u[n]<d[n];break}o=0}for(p&&(r=u,u=d,d=r,e.s=-e.s),s=u.length,n=d.length-s;n>0;--n)u[s++]=0;for(n=d.length;n>o;){if(u[--n]<d[n]){for(i=n;i&&u[--i]===0;)u[i]=fe-1;--u[i],u[n]+=fe}u[n]-=d[n]}for(;u[--s]===0;)u.pop();for(;u[0]===0;u.shift())--t;return u[0]?(e.d=u,e.e=En(u,t),w?y(e,a,l):e):new h(l===3?-0:0)};m.modulo=m.mod=function(e){var r,t=this,n=t.constructor;return e=new n(e),!t.d||!e.s||e.d&&!e.d[0]?new n(NaN):!e.d||t.d&&!t.d[0]?y(new n(t),n.precision,n.rounding):(w=!1,n.modulo==9?(r=L(t,e.abs(),0,3,1),r.s*=e.s):r=L(t,e,0,n.modulo,1),r=r.times(e),w=!0,t.minus(r))};m.naturalExponential=m.exp=function(){return Wi(this)};m.naturalLogarithm=m.ln=function(){return Ke(this)};m.negated=m.neg=function(){var e=new this.constructor(this);return e.s=-e.s,y(e)};m.plus=m.add=function(e){var r,t,n,i,o,s,a,l,u,c,p=this,d=p.constructor;if(e=new d(e),!p.d||!e.d)return!p.s||!e.s?e=new d(NaN):p.d||(e=new d(e.d||p.s===e.s?p:NaN)),e;if(p.s!=e.s)return e.s=-e.s,p.minus(e);if(u=p.d,c=e.d,a=d.precision,l=d.rounding,!u[0]||!c[0])return c[0]||(e=new d(p)),w?y(e,a,l):e;if(o=X(p.e/E),n=X(e.e/E),u=u.slice(),i=o-n,i){for(i<0?(t=u,i=-i,s=c.length):(t=c,n=o,s=u.length),o=Math.ceil(a/E),s=o>s?o+1:s+1,i>s&&(i=s,t.length=1),t.reverse();i--;)t.push(0);t.reverse()}for(s=u.length,i=c.length,s-i<0&&(i=s,t=c,c=u,u=t),r=0;i;)r=(u[--i]=u[i]+c[i]+r)/fe|0,u[i]%=fe;for(r&&(u.unshift(r),++n),s=u.length;u[--s]==0;)u.pop();return e.d=u,e.e=En(u,n),w?y(e,a,l):e};m.precision=m.sd=function(e){var r,t=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(He+e);return t.d?(r=Js(t.d),e&&t.e+1>r&&(r=t.e+1)):r=NaN,r};m.round=function(){var e=this,r=e.constructor;return y(new r(e),e.e+1,r.rounding)};m.sine=m.sin=function(){var e,r,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(e=n.precision,r=n.rounding,n.precision=e+Math.max(t.e,t.sd())+E,n.rounding=1,t=Ip(n,zs(n,t)),n.precision=e,n.rounding=r,y(Ne>2?t.neg():t,e,r,!0)):new n(NaN)};m.squareRoot=m.sqrt=function(){var e,r,t,n,i,o,s=this,a=s.d,l=s.e,u=s.s,c=s.constructor;if(u!==1||!a||!a[0])return new c(!u||u<0&&(!a||a[0])?NaN:a?s:1/0);for(w=!1,u=Math.sqrt(+s),u==0||u==1/0?(r=J(a),(r.length+l)%2==0&&(r+="0"),u=Math.sqrt(r),l=X((l+1)/2)-(l<0||l%2),u==1/0?r="5e"+l:(r=u.toExponential(),r=r.slice(0,r.indexOf("e")+1)+l),n=new c(r)):n=new c(u.toString()),t=(l=c.precision)+3;;)if(o=n,n=o.plus(L(s,o,t+2,1)).times(.5),J(o.d).slice(0,t)===(r=J(n.d)).slice(0,t))if(r=r.slice(t-3,t+1),r=="9999"||!i&&r=="4999"){if(!i&&(y(o,l+1,0),o.times(o).eq(s))){n=o;break}t+=4,i=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(y(n,l+1,1),e=!n.times(n).eq(s));break}return w=!0,y(n,l,c.rounding,e)};m.tangent=m.tan=function(){var e,r,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(e=n.precision,r=n.rounding,n.precision=e+10,n.rounding=1,t=t.sin(),t.s=1,t=L(t,new n(1).minus(t.times(t)).sqrt(),e+10,0),n.precision=e,n.rounding=r,y(Ne==2||Ne==4?t.neg():t,e,r,!0)):new n(NaN)};m.times=m.mul=function(e){var r,t,n,i,o,s,a,l,u,c=this,p=c.constructor,d=c.d,f=(e=new p(e)).d;if(e.s*=c.s,!d||!d[0]||!f||!f[0])return new p(!e.s||d&&!d[0]&&!f||f&&!f[0]&&!d?NaN:!d||!f?e.s/0:e.s*0);for(t=X(c.e/E)+X(e.e/E),l=d.length,u=f.length,l<u&&(o=d,d=f,f=o,s=l,l=u,u=s),o=[],s=l+u,n=s;n--;)o.push(0);for(n=u;--n>=0;){for(r=0,i=l+n;i>n;)a=o[i]+f[n]*d[i-n-1]+r,o[i--]=a%fe|0,r=a/fe|0;o[i]=(o[i]+r)%fe|0}for(;!o[--s];)o.pop();return r?++t:o.shift(),e.d=o,e.e=En(o,t),w?y(e,p.precision,p.rounding):e};m.toBinary=function(e,r){return Ji(this,2,e,r)};m.toDecimalPlaces=m.toDP=function(e,r){var t=this,n=t.constructor;return t=new n(t),e===void 0?t:(ie(e,0,Ye),r===void 0?r=n.rounding:ie(r,0,8),y(t,e+t.e+1,r))};m.toExponential=function(e,r){var t,n=this,i=n.constructor;return e===void 0?t=ve(n,!0):(ie(e,0,Ye),r===void 0?r=i.rounding:ie(r,0,8),n=y(new i(n),e+1,r),t=ve(n,!0,e+1)),n.isNeg()&&!n.isZero()?"-"+t:t};m.toFixed=function(e,r){var t,n,i=this,o=i.constructor;return e===void 0?t=ve(i):(ie(e,0,Ye),r===void 0?r=o.rounding:ie(r,0,8),n=y(new o(i),e+i.e+1,r),t=ve(n,!1,e+n.e+1)),i.isNeg()&&!i.isZero()?"-"+t:t};m.toFraction=function(e){var r,t,n,i,o,s,a,l,u,c,p,d,f=this,h=f.d,g=f.constructor;if(!h)return new g(f);if(u=t=new g(1),n=l=new g(0),r=new g(n),o=r.e=Js(h)-f.e-1,s=o%E,r.d[0]=U(10,s<0?E+s:s),e==null)e=o>0?r:u;else{if(a=new g(e),!a.isInt()||a.lt(u))throw Error(He+a);e=a.gt(r)?o>0?r:u:a}for(w=!1,a=new g(J(h)),c=g.precision,g.precision=o=h.length*E*2;p=L(a,r,0,1,1),i=t.plus(p.times(n)),i.cmp(e)!=1;)t=n,n=i,i=u,u=l.plus(p.times(i)),l=i,i=r,r=a.minus(p.times(i)),a=i;return i=L(e.minus(t),n,0,1,1),l=l.plus(i.times(u)),t=t.plus(i.times(n)),l.s=u.s=f.s,d=L(u,n,o,1).minus(f).abs().cmp(L(l,t,o,1).minus(f).abs())<1?[u,n]:[l,t],g.precision=c,w=!0,d};m.toHexadecimal=m.toHex=function(e,r){return Ji(this,16,e,r)};m.toNearest=function(e,r){var t=this,n=t.constructor;if(t=new n(t),e==null){if(!t.d)return t;e=new n(1),r=n.rounding}else{if(e=new n(e),r===void 0?r=n.rounding:ie(r,0,8),!t.d)return e.s?t:e;if(!e.d)return e.s&&(e.s=t.s),e}return e.d[0]?(w=!1,t=L(t,e,0,r,1).times(e),w=!0,y(t)):(e.s=t.s,t=e),t};m.toNumber=function(){return+this};m.toOctal=function(e,r){return Ji(this,8,e,r)};m.toPower=m.pow=function(e){var r,t,n,i,o,s,a=this,l=a.constructor,u=+(e=new l(e));if(!a.d||!e.d||!a.d[0]||!e.d[0])return new l(U(+a,u));if(a=new l(a),a.eq(1))return a;if(n=l.precision,o=l.rounding,e.eq(1))return y(a,n,o);if(r=X(e.e/E),r>=e.d.length-1&&(t=u<0?-u:u)<=Sp)return i=Ks(l,a,t,n),e.s<0?new l(1).div(i):y(i,n,o);if(s=a.s,s<0){if(r<e.d.length-1)return new l(NaN);if((e.d[r]&1)==0&&(s=1),a.e==0&&a.d[0]==1&&a.d.length==1)return a.s=s,a}return t=U(+a,u),r=t==0||!isFinite(t)?X(u*(Math.log("0."+J(a.d))/Math.LN10+a.e+1)):new l(t+"").e,r>l.maxE+1||r<l.minE-1?new l(r>0?s/0:0):(w=!1,l.rounding=a.s=1,t=Math.min(12,(r+"").length),i=Wi(e.times(Ke(a,n+t)),n),i.d&&(i=y(i,n+5,1),lt(i.d,n,o)&&(r=n+10,i=y(Wi(e.times(Ke(a,r+t)),r),r+5,1),+J(i.d).slice(n+1,n+15)+1==1e14&&(i=y(i,n+1,0)))),i.s=s,w=!0,l.rounding=o,y(i,n,o))};m.toPrecision=function(e,r){var t,n=this,i=n.constructor;return e===void 0?t=ve(n,n.e<=i.toExpNeg||n.e>=i.toExpPos):(ie(e,1,Ye),r===void 0?r=i.rounding:ie(r,0,8),n=y(new i(n),e,r),t=ve(n,e<=n.e||n.e<=i.toExpNeg,e)),n.isNeg()&&!n.isZero()?"-"+t:t};m.toSignificantDigits=m.toSD=function(e,r){var t=this,n=t.constructor;return e===void 0?(e=n.precision,r=n.rounding):(ie(e,1,Ye),r===void 0?r=n.rounding:ie(r,0,8)),y(new n(t),e,r)};m.toString=function(){var e=this,r=e.constructor,t=ve(e,e.e<=r.toExpNeg||e.e>=r.toExpPos);return e.isNeg()&&!e.isZero()?"-"+t:t};m.truncated=m.trunc=function(){return y(new this.constructor(this),this.e+1,1)};m.valueOf=m.toJSON=function(){var e=this,r=e.constructor,t=ve(e,e.e<=r.toExpNeg||e.e>=r.toExpPos);return e.isNeg()?"-"+t:t};function J(e){var r,t,n,i=e.length-1,o="",s=e[0];if(i>0){for(o+=s,r=1;r<i;r++)n=e[r]+"",t=E-n.length,t&&(o+=Je(t)),o+=n;s=e[r],n=s+"",t=E-n.length,t&&(o+=Je(t))}else if(s===0)return"0";for(;s%10===0;)s/=10;return o+s}function ie(e,r,t){if(e!==~~e||e<r||e>t)throw Error(He+e)}function lt(e,r,t,n){var i,o,s,a;for(o=e[0];o>=10;o/=10)--r;return--r<0?(r+=E,i=0):(i=Math.ceil((r+1)/E),r%=E),o=U(10,E-r),a=e[i]%o|0,n==null?r<3?(r==0?a=a/100|0:r==1&&(a=a/10|0),s=t<4&&a==99999||t>3&&a==49999||a==5e4||a==0):s=(t<4&&a+1==o||t>3&&a+1==o/2)&&(e[i+1]/o/100|0)==U(10,r-2)-1||(a==o/2||a==0)&&(e[i+1]/o/100|0)==0:r<4?(r==0?a=a/1e3|0:r==1?a=a/100|0:r==2&&(a=a/10|0),s=(n||t<4)&&a==9999||!n&&t>3&&a==4999):s=((n||t<4)&&a+1==o||!n&&t>3&&a+1==o/2)&&(e[i+1]/o/1e3|0)==U(10,r-3)-1,s}function mn(e,r,t){for(var n,i=[0],o,s=0,a=e.length;s<a;){for(o=i.length;o--;)i[o]*=r;for(i[0]+=Ui.indexOf(e.charAt(s++)),n=0;n<i.length;n++)i[n]>t-1&&(i[n+1]===void 0&&(i[n+1]=0),i[n+1]+=i[n]/t|0,i[n]%=t)}return i.reverse()}function Ap(e,r){var t,n,i;if(r.isZero())return r;n=r.d.length,n<32?(t=Math.ceil(n/3),i=(1/wn(4,t)).toString()):(t=16,i="2.3283064365386962890625e-10"),e.precision+=t,r=Pr(e,1,r.times(i),new e(1));for(var o=t;o--;){var s=r.times(r);r=s.times(s).minus(s).times(8).plus(1)}return e.precision-=t,r}var L=function(){function e(n,i,o){var s,a=0,l=n.length;for(n=n.slice();l--;)s=n[l]*i+a,n[l]=s%o|0,a=s/o|0;return a&&n.unshift(a),n}function r(n,i,o,s){var a,l;if(o!=s)l=o>s?1:-1;else for(a=l=0;a<o;a++)if(n[a]!=i[a]){l=n[a]>i[a]?1:-1;break}return l}function t(n,i,o,s){for(var a=0;o--;)n[o]-=a,a=n[o]<i[o]?1:0,n[o]=a*s+n[o]-i[o];for(;!n[0]&&n.length>1;)n.shift()}return function(n,i,o,s,a,l){var u,c,p,d,f,h,g,D,T,S,b,O,me,ae,Jr,j,te,Ae,K,fr,qt=n.constructor,ti=n.s==i.s?1:-1,H=n.d,_=i.d;if(!H||!H[0]||!_||!_[0])return new qt(!n.s||!i.s||(H?_&&H[0]==_[0]:!_)?NaN:H&&H[0]==0||!_?ti*0:ti/0);for(l?(f=1,c=n.e-i.e):(l=fe,f=E,c=X(n.e/f)-X(i.e/f)),K=_.length,te=H.length,T=new qt(ti),S=T.d=[],p=0;_[p]==(H[p]||0);p++);if(_[p]>(H[p]||0)&&c--,o==null?(ae=o=qt.precision,s=qt.rounding):a?ae=o+(n.e-i.e)+1:ae=o,ae<0)S.push(1),h=!0;else{if(ae=ae/f+2|0,p=0,K==1){for(d=0,_=_[0],ae++;(p<te||d)&&ae--;p++)Jr=d*l+(H[p]||0),S[p]=Jr/_|0,d=Jr%_|0;h=d||p<te}else{for(d=l/(_[0]+1)|0,d>1&&(_=e(_,d,l),H=e(H,d,l),K=_.length,te=H.length),j=K,b=H.slice(0,K),O=b.length;O<K;)b[O++]=0;fr=_.slice(),fr.unshift(0),Ae=_[0],_[1]>=l/2&&++Ae;do d=0,u=r(_,b,K,O),u<0?(me=b[0],K!=O&&(me=me*l+(b[1]||0)),d=me/Ae|0,d>1?(d>=l&&(d=l-1),g=e(_,d,l),D=g.length,O=b.length,u=r(g,b,D,O),u==1&&(d--,t(g,K<D?fr:_,D,l))):(d==0&&(u=d=1),g=_.slice()),D=g.length,D<O&&g.unshift(0),t(b,g,O,l),u==-1&&(O=b.length,u=r(_,b,K,O),u<1&&(d++,t(b,K<O?fr:_,O,l))),O=b.length):u===0&&(d++,b=[0]),S[p++]=d,u&&b[0]?b[O++]=H[j]||0:(b=[H[j]],O=1);while((j++<te||b[0]!==void 0)&&ae--);h=b[0]!==void 0}S[0]||S.shift()}if(f==1)T.e=c,Bs=h;else{for(p=1,d=S[0];d>=10;d/=10)p++;T.e=p+c*f-1,y(T,a?o+T.e+1:o,s,h)}return T}}();function y(e,r,t,n){var i,o,s,a,l,u,c,p,d,f=e.constructor;e:if(r!=null){if(p=e.d,!p)return e;for(i=1,a=p[0];a>=10;a/=10)i++;if(o=r-i,o<0)o+=E,s=r,c=p[d=0],l=c/U(10,i-s-1)%10|0;else if(d=Math.ceil((o+1)/E),a=p.length,d>=a)if(n){for(;a++<=d;)p.push(0);c=l=0,i=1,o%=E,s=o-E+1}else break e;else{for(c=a=p[d],i=1;a>=10;a/=10)i++;o%=E,s=o-E+i,l=s<0?0:c/U(10,i-s-1)%10|0}if(n=n||r<0||p[d+1]!==void 0||(s<0?c:c%U(10,i-s-1)),u=t<4?(l||n)&&(t==0||t==(e.s<0?3:2)):l>5||l==5&&(t==4||n||t==6&&(o>0?s>0?c/U(10,i-s):0:p[d-1])%10&1||t==(e.s<0?8:7)),r<1||!p[0])return p.length=0,u?(r-=e.e+1,p[0]=U(10,(E-r%E)%E),e.e=-r||0):p[0]=e.e=0,e;if(o==0?(p.length=d,a=1,d--):(p.length=d+1,a=U(10,E-o),p[d]=s>0?(c/U(10,i-s)%U(10,s)|0)*a:0),u)for(;;)if(d==0){for(o=1,s=p[0];s>=10;s/=10)o++;for(s=p[0]+=a,a=1;s>=10;s/=10)a++;o!=a&&(e.e++,p[0]==fe&&(p[0]=1));break}else{if(p[d]+=a,p[d]!=fe)break;p[d--]=0,a=1}for(o=p.length;p[--o]===0;)p.pop()}return w&&(e.e>f.maxE?(e.d=null,e.e=NaN):e.e<f.minE&&(e.e=0,e.d=[0])),e}function ve(e,r,t){if(!e.isFinite())return Ys(e);var n,i=e.e,o=J(e.d),s=o.length;return r?(t&&(n=t-s)>0?o=o.charAt(0)+"."+o.slice(1)+Je(n):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(e.e<0?"e":"e+")+e.e):i<0?(o="0."+Je(-i-1)+o,t&&(n=t-s)>0&&(o+=Je(n))):i>=s?(o+=Je(i+1-s),t&&(n=t-i-1)>0&&(o=o+"."+Je(n))):((n=i+1)<s&&(o=o.slice(0,n)+"."+o.slice(n)),t&&(n=t-s)>0&&(i+1===s&&(o+="."),o+=Je(n))),o}function En(e,r){var t=e[0];for(r*=E;t>=10;t/=10)r++;return r}function yn(e,r,t){if(r>Rp)throw w=!0,t&&(e.precision=t),Error(Us);return y(new e(gn),r,1,!0)}function xe(e,r,t){if(r>Qi)throw Error(Us);return y(new e(hn),r,t,!0)}function Js(e){var r=e.length-1,t=r*E+1;if(r=e[r],r){for(;r%10==0;r/=10)t--;for(r=e[0];r>=10;r/=10)t++}return t}function Je(e){for(var r="";e--;)r+="0";return r}function Ks(e,r,t,n){var i,o=new e(1),s=Math.ceil(n/E+4);for(w=!1;;){if(t%2&&(o=o.times(r),Vs(o.d,s)&&(i=!0)),t=X(t/2),t===0){t=o.d.length-1,i&&o.d[t]===0&&++o.d[t];break}r=r.times(r),Vs(r.d,s)}return w=!0,o}function qs(e){return e.d[e.d.length-1]&1}function Hs(e,r,t){for(var n,i,o=new e(r[0]),s=0;++s<r.length;){if(i=new e(r[s]),!i.s){o=i;break}n=o.cmp(i),(n===t||n===0&&o.s===t)&&(o=i)}return o}function Wi(e,r){var t,n,i,o,s,a,l,u=0,c=0,p=0,d=e.constructor,f=d.rounding,h=d.precision;if(!e.d||!e.d[0]||e.e>17)return new d(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:NaN);for(r==null?(w=!1,l=h):l=r,a=new d(.03125);e.e>-2;)e=e.times(a),p+=5;for(n=Math.log(U(2,p))/Math.LN10*2+5|0,l+=n,t=o=s=new d(1),d.precision=l;;){if(o=y(o.times(e),l,1),t=t.times(++c),a=s.plus(L(o,t,l,1)),J(a.d).slice(0,l)===J(s.d).slice(0,l)){for(i=p;i--;)s=y(s.times(s),l,1);if(r==null)if(u<3&&lt(s.d,l-n,f,u))d.precision=l+=10,t=o=a=new d(1),c=0,u++;else return y(s,d.precision=h,f,w=!0);else return d.precision=h,s}s=a}}function Ke(e,r){var t,n,i,o,s,a,l,u,c,p,d,f=1,h=10,g=e,D=g.d,T=g.constructor,S=T.rounding,b=T.precision;if(g.s<0||!D||!D[0]||!g.e&&D[0]==1&&D.length==1)return new T(D&&!D[0]?-1/0:g.s!=1?NaN:D?0:g);if(r==null?(w=!1,c=b):c=r,T.precision=c+=h,t=J(D),n=t.charAt(0),Math.abs(o=g.e)<15e14){for(;n<7&&n!=1||n==1&&t.charAt(1)>3;)g=g.times(e),t=J(g.d),n=t.charAt(0),f++;o=g.e,n>1?(g=new T("0."+t),o++):g=new T(n+"."+t.slice(1))}else return u=yn(T,c+2,b).times(o+""),g=Ke(new T(n+"."+t.slice(1)),c-h).plus(u),T.precision=b,r==null?y(g,b,S,w=!0):g;for(p=g,l=s=g=L(g.minus(1),g.plus(1),c,1),d=y(g.times(g),c,1),i=3;;){if(s=y(s.times(d),c,1),u=l.plus(L(s,new T(i),c,1)),J(u.d).slice(0,c)===J(l.d).slice(0,c))if(l=l.times(2),o!==0&&(l=l.plus(yn(T,c+2,b).times(o+""))),l=L(l,new T(f),c,1),r==null)if(lt(l.d,c-h,S,a))T.precision=c+=h,u=s=g=L(p.minus(1),p.plus(1),c,1),d=y(g.times(g),c,1),i=a=1;else return y(l,T.precision=b,S,w=!0);else return T.precision=b,l;l=u,i+=2}}function Ys(e){return String(e.s*e.s/0)}function fn(e,r){var t,n,i;for((t=r.indexOf("."))>-1&&(r=r.replace(".","")),(n=r.search(/e/i))>0?(t<0&&(t=n),t+=+r.slice(n+1),r=r.substring(0,n)):t<0&&(t=r.length),n=0;r.charCodeAt(n)===48;n++);for(i=r.length;r.charCodeAt(i-1)===48;--i);if(r=r.slice(n,i),r){if(i-=n,e.e=t=t-n-1,e.d=[],n=(t+1)%E,t<0&&(n+=E),n<i){for(n&&e.d.push(+r.slice(0,n)),i-=E;n<i;)e.d.push(+r.slice(n,n+=E));r=r.slice(n),n=E-r.length}else n-=i;for(;n--;)r+="0";e.d.push(+r),w&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function Cp(e,r){var t,n,i,o,s,a,l,u,c;if(r.indexOf("_")>-1){if(r=r.replace(/(\d)_(?=\d)/g,"$1"),Ws.test(r))return fn(e,r)}else if(r==="Infinity"||r==="NaN")return+r||(e.s=NaN),e.e=NaN,e.d=null,e;if(Pp.test(r))t=16,r=r.toLowerCase();else if(vp.test(r))t=2;else if(Tp.test(r))t=8;else throw Error(He+r);for(o=r.search(/p/i),o>0?(l=+r.slice(o+1),r=r.substring(2,o)):r=r.slice(2),o=r.indexOf("."),s=o>=0,n=e.constructor,s&&(r=r.replace(".",""),a=r.length,o=a-o,i=Ks(n,new n(t),o,o*2)),u=mn(r,t,fe),c=u.length-1,o=c;u[o]===0;--o)u.pop();return o<0?new n(e.s*0):(e.e=En(u,c),e.d=u,w=!1,s&&(e=L(e,i,a*4)),l&&(e=e.times(Math.abs(l)<54?U(2,l):Le.pow(2,l))),w=!0,e)}function Ip(e,r){var t,n=r.d.length;if(n<3)return r.isZero()?r:Pr(e,2,r,r);t=1.4*Math.sqrt(n),t=t>16?16:t|0,r=r.times(1/wn(5,t)),r=Pr(e,2,r,r);for(var i,o=new e(5),s=new e(16),a=new e(20);t--;)i=r.times(r),r=r.times(o.plus(i.times(s.times(i).minus(a))));return r}function Pr(e,r,t,n,i){var o,s,a,l,u=1,c=e.precision,p=Math.ceil(c/E);for(w=!1,l=t.times(t),a=new e(n);;){if(s=L(a.times(l),new e(r++*r++),c,1),a=i?n.plus(s):n.minus(s),n=L(s.times(l),new e(r++*r++),c,1),s=a.plus(n),s.d[p]!==void 0){for(o=p;s.d[o]===a.d[o]&&o--;);if(o==-1)break}o=a,a=n,n=s,s=o,u++}return w=!0,s.d.length=p+1,s}function wn(e,r){for(var t=e;--r;)t*=e;return t}function zs(e,r){var t,n=r.s<0,i=xe(e,e.precision,1),o=i.times(.5);if(r=r.abs(),r.lte(o))return Ne=n?4:1,r;if(t=r.divToInt(i),t.isZero())Ne=n?3:2;else{if(r=r.minus(t.times(i)),r.lte(o))return Ne=qs(t)?n?2:3:n?4:1,r;Ne=qs(t)?n?1:4:n?3:2}return r.minus(i).abs()}function Ji(e,r,t,n){var i,o,s,a,l,u,c,p,d,f=e.constructor,h=t!==void 0;if(h?(ie(t,1,Ye),n===void 0?n=f.rounding:ie(n,0,8)):(t=f.precision,n=f.rounding),!e.isFinite())c=Ys(e);else{for(c=ve(e),s=c.indexOf("."),h?(i=2,r==16?t=t*4-3:r==8&&(t=t*3-2)):i=r,s>=0&&(c=c.replace(".",""),d=new f(1),d.e=c.length-s,d.d=mn(ve(d),10,i),d.e=d.d.length),p=mn(c,10,i),o=l=p.length;p[--l]==0;)p.pop();if(!p[0])c=h?"0p+0":"0";else{if(s<0?o--:(e=new f(e),e.d=p,e.e=o,e=L(e,d,t,n,0,i),p=e.d,o=e.e,u=Bs),s=p[t],a=i/2,u=u||p[t+1]!==void 0,u=n<4?(s!==void 0||u)&&(n===0||n===(e.s<0?3:2)):s>a||s===a&&(n===4||u||n===6&&p[t-1]&1||n===(e.s<0?8:7)),p.length=t,u)for(;++p[--t]>i-1;)p[t]=0,t||(++o,p.unshift(1));for(l=p.length;!p[l-1];--l);for(s=0,c="";s<l;s++)c+=Ui.charAt(p[s]);if(h){if(l>1)if(r==16||r==8){for(s=r==16?4:3,--l;l%s;l++)c+="0";for(p=mn(c,i,r),l=p.length;!p[l-1];--l);for(s=1,c="1.";s<l;s++)c+=Ui.charAt(p[s])}else c=c.charAt(0)+"."+c.slice(1);c=c+(o<0?"p":"p+")+o}else if(o<0){for(;++o;)c="0"+c;c="0."+c}else if(++o>l)for(o-=l;o--;)c+="0";else o<l&&(c=c.slice(0,o)+"."+c.slice(o))}c=(r==16?"0x":r==2?"0b":r==8?"0o":"")+c}return e.s<0?"-"+c:c}function Vs(e,r){if(e.length>r)return e.length=r,!0}function Dp(e){return new this(e).abs()}function Op(e){return new this(e).acos()}function kp(e){return new this(e).acosh()}function _p(e,r){return new this(e).plus(r)}function Np(e){return new this(e).asin()}function Lp(e){return new this(e).asinh()}function Fp(e){return new this(e).atan()}function Mp(e){return new this(e).atanh()}function $p(e,r){e=new this(e),r=new this(r);var t,n=this.precision,i=this.rounding,o=n+4;return!e.s||!r.s?t=new this(NaN):!e.d&&!r.d?(t=xe(this,o,1).times(r.s>0?.25:.75),t.s=e.s):!r.d||e.isZero()?(t=r.s<0?xe(this,n,i):new this(0),t.s=e.s):!e.d||r.isZero()?(t=xe(this,o,1).times(.5),t.s=e.s):r.s<0?(this.precision=o,this.rounding=1,t=this.atan(L(e,r,o,1)),r=xe(this,o,1),this.precision=n,this.rounding=i,t=e.s<0?t.minus(r):t.plus(r)):t=this.atan(L(e,r,o,1)),t}function qp(e){return new this(e).cbrt()}function Vp(e){return y(e=new this(e),e.e+1,2)}function jp(e,r,t){return new this(e).clamp(r,t)}function Bp(e){if(!e||typeof e!="object")throw Error(bn+"Object expected");var r,t,n,i=e.defaults===!0,o=["precision",1,Ye,"rounding",0,8,"toExpNeg",-vr,0,"toExpPos",0,vr,"maxE",0,vr,"minE",-vr,0,"modulo",0,9];for(r=0;r<o.length;r+=3)if(t=o[r],i&&(this[t]=Gi[t]),(n=e[t])!==void 0)if(X(n)===n&&n>=o[r+1]&&n<=o[r+2])this[t]=n;else throw Error(He+t+": "+n);if(t="crypto",i&&(this[t]=Gi[t]),(n=e[t])!==void 0)if(n===!0||n===!1||n===0||n===1)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Gs);else this[t]=!1;else throw Error(He+t+": "+n);return this}function Up(e){return new this(e).cos()}function Gp(e){return new this(e).cosh()}function Zs(e){var r,t,n;function i(o){var s,a,l,u=this;if(!(u instanceof i))return new i(o);if(u.constructor=i,js(o)){u.s=o.s,w?!o.d||o.e>i.maxE?(u.e=NaN,u.d=null):o.e<i.minE?(u.e=0,u.d=[0]):(u.e=o.e,u.d=o.d.slice()):(u.e=o.e,u.d=o.d?o.d.slice():o.d);return}if(l=typeof o,l==="number"){if(o===0){u.s=1/o<0?-1:1,u.e=0,u.d=[0];return}if(o<0?(o=-o,u.s=-1):u.s=1,o===~~o&&o<1e7){for(s=0,a=o;a>=10;a/=10)s++;w?s>i.maxE?(u.e=NaN,u.d=null):s<i.minE?(u.e=0,u.d=[0]):(u.e=s,u.d=[o]):(u.e=s,u.d=[o]);return}if(o*0!==0){o||(u.s=NaN),u.e=NaN,u.d=null;return}return fn(u,o.toString())}if(l==="string")return(a=o.charCodeAt(0))===45?(o=o.slice(1),u.s=-1):(a===43&&(o=o.slice(1)),u.s=1),Ws.test(o)?fn(u,o):Cp(u,o);if(l==="bigint")return o<0?(o=-o,u.s=-1):u.s=1,fn(u,o.toString());throw Error(He+o)}if(i.prototype=m,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.EUCLID=9,i.config=i.set=Bp,i.clone=Zs,i.isDecimal=js,i.abs=Dp,i.acos=Op,i.acosh=kp,i.add=_p,i.asin=Np,i.asinh=Lp,i.atan=Fp,i.atanh=Mp,i.atan2=$p,i.cbrt=qp,i.ceil=Vp,i.clamp=jp,i.cos=Up,i.cosh=Gp,i.div=Qp,i.exp=Wp,i.floor=Jp,i.hypot=Kp,i.ln=Hp,i.log=Yp,i.log10=Zp,i.log2=zp,i.max=Xp,i.min=ed,i.mod=rd,i.mul=td,i.pow=nd,i.random=id,i.round=od,i.sign=sd,i.sin=ad,i.sinh=ld,i.sqrt=ud,i.sub=cd,i.sum=pd,i.tan=dd,i.tanh=md,i.trunc=fd,e===void 0&&(e={}),e&&e.defaults!==!0)for(n=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],r=0;r<n.length;)e.hasOwnProperty(t=n[r++])||(e[t]=this[t]);return i.config(e),i}function Qp(e,r){return new this(e).div(r)}function Wp(e){return new this(e).exp()}function Jp(e){return y(e=new this(e),e.e+1,3)}function Kp(){var e,r,t=new this(0);for(w=!1,e=0;e<arguments.length;)if(r=new this(arguments[e++]),r.d)t.d&&(t=t.plus(r.times(r)));else{if(r.s)return w=!0,new this(1/0);t=r}return w=!0,t.sqrt()}function js(e){return e instanceof Le||e&&e.toStringTag===Qs||!1}function Hp(e){return new this(e).ln()}function Yp(e,r){return new this(e).log(r)}function zp(e){return new this(e).log(2)}function Zp(e){return new this(e).log(10)}function Xp(){return Hs(this,arguments,-1)}function ed(){return Hs(this,arguments,1)}function rd(e,r){return new this(e).mod(r)}function td(e,r){return new this(e).mul(r)}function nd(e,r){return new this(e).pow(r)}function id(e){var r,t,n,i,o=0,s=new this(1),a=[];if(e===void 0?e=this.precision:ie(e,1,Ye),n=Math.ceil(e/E),this.crypto)if(crypto.getRandomValues)for(r=crypto.getRandomValues(new Uint32Array(n));o<n;)i=r[o],i>=429e7?r[o]=crypto.getRandomValues(new Uint32Array(1))[0]:a[o++]=i%1e7;else if(crypto.randomBytes){for(r=crypto.randomBytes(n*=4);o<n;)i=r[o]+(r[o+1]<<8)+(r[o+2]<<16)+((r[o+3]&127)<<24),i>=214e7?crypto.randomBytes(4).copy(r,o):(a.push(i%1e7),o+=4);o=n/4}else throw Error(Gs);else for(;o<n;)a[o++]=Math.random()*1e7|0;for(n=a[--o],e%=E,n&&e&&(i=U(10,E-e),a[o]=(n/i|0)*i);a[o]===0;o--)a.pop();if(o<0)t=0,a=[0];else{for(t=-1;a[0]===0;t-=E)a.shift();for(n=1,i=a[0];i>=10;i/=10)n++;n<E&&(t-=E-n)}return s.e=t,s.d=a,s}function od(e){return y(e=new this(e),e.e+1,this.rounding)}function sd(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function ad(e){return new this(e).sin()}function ld(e){return new this(e).sinh()}function ud(e){return new this(e).sqrt()}function cd(e,r){return new this(e).sub(r)}function pd(){var e=0,r=arguments,t=new this(r[e]);for(w=!1;t.s&&++e<r.length;)t=t.plus(r[e]);return w=!0,y(t,this.precision,this.rounding)}function dd(e){return new this(e).tan()}function md(e){return new this(e).tanh()}function fd(e){return y(e=new this(e),e.e+1,1)}m[Symbol.for("nodejs.util.inspect.custom")]=m.toString;m[Symbol.toStringTag]="Decimal";var Le=m.constructor=Zs(Gi);gn=new Le(gn);hn=new Le(hn);var Fe=Le;function Tr(e){return Le.isDecimal(e)?!0:e!==null&&typeof e=="object"&&typeof e.s=="number"&&typeof e.e=="number"&&typeof e.toFixed=="function"&&Array.isArray(e.d)}var ut={};tr(ut,{ModelAction:()=>Sr,datamodelEnumToSchemaEnum:()=>gd});function gd(e){return{name:e.name,values:e.values.map(r=>r.name)}}var Sr=(b=>(b.findUnique="findUnique",b.findUniqueOrThrow="findUniqueOrThrow",b.findFirst="findFirst",b.findFirstOrThrow="findFirstOrThrow",b.findMany="findMany",b.create="create",b.createMany="createMany",b.createManyAndReturn="createManyAndReturn",b.update="update",b.updateMany="updateMany",b.updateManyAndReturn="updateManyAndReturn",b.upsert="upsert",b.delete="delete",b.deleteMany="deleteMany",b.groupBy="groupBy",b.count="count",b.aggregate="aggregate",b.findRaw="findRaw",b.aggregateRaw="aggregateRaw",b))(Sr||{});var na=A(Di());var ta=A(__webpack_require__(3024));var Xs={keyword:De,entity:De,value:e=>W(nr(e)),punctuation:nr,directive:De,function:De,variable:e=>W(nr(e)),string:e=>W(qe(e)),boolean:Ie,number:De,comment:Kr};var hd=e=>e,xn={},yd=0,v={manual:xn.Prism&&xn.Prism.manual,disableWorkerMessageHandler:xn.Prism&&xn.Prism.disableWorkerMessageHandler,util:{encode:function(e){if(e instanceof ge){let r=e;return new ge(r.type,v.util.encode(r.content),r.alias)}else return Array.isArray(e)?e.map(v.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++yd}),e.__id},clone:function e(r,t){let n,i,o=v.util.type(r);switch(t=t||{},o){case"Object":if(i=v.util.objId(r),t[i])return t[i];n={},t[i]=n;for(let s in r)r.hasOwnProperty(s)&&(n[s]=e(r[s],t));return n;case"Array":return i=v.util.objId(r),t[i]?t[i]:(n=[],t[i]=n,r.forEach(function(s,a){n[a]=e(s,t)}),n);default:return r}}},languages:{extend:function(e,r){let t=v.util.clone(v.languages[e]);for(let n in r)t[n]=r[n];return t},insertBefore:function(e,r,t,n){n=n||v.languages;let i=n[e],o={};for(let a in i)if(i.hasOwnProperty(a)){if(a==r)for(let l in t)t.hasOwnProperty(l)&&(o[l]=t[l]);t.hasOwnProperty(a)||(o[a]=i[a])}let s=n[e];return n[e]=o,v.languages.DFS(v.languages,function(a,l){l===s&&a!=e&&(this[a]=o)}),o},DFS:function e(r,t,n,i){i=i||{};let o=v.util.objId;for(let s in r)if(r.hasOwnProperty(s)){t.call(r,s,r[s],n||s);let a=r[s],l=v.util.type(a);l==="Object"&&!i[o(a)]?(i[o(a)]=!0,e(a,t,null,i)):l==="Array"&&!i[o(a)]&&(i[o(a)]=!0,e(a,t,s,i))}}},plugins:{},highlight:function(e,r,t){let n={code:e,grammar:r,language:t};return v.hooks.run("before-tokenize",n),n.tokens=v.tokenize(n.code,n.grammar),v.hooks.run("after-tokenize",n),ge.stringify(v.util.encode(n.tokens),n.language)},matchGrammar:function(e,r,t,n,i,o,s){for(let g in t){if(!t.hasOwnProperty(g)||!t[g])continue;if(g==s)return;let D=t[g];D=v.util.type(D)==="Array"?D:[D];for(let T=0;T<D.length;++T){let S=D[T],b=S.inside,O=!!S.lookbehind,me=!!S.greedy,ae=0,Jr=S.alias;if(me&&!S.pattern.global){let j=S.pattern.toString().match(/[imuy]*$/)[0];S.pattern=RegExp(S.pattern.source,j+"g")}S=S.pattern||S;for(let j=n,te=i;j<r.length;te+=r[j].length,++j){let Ae=r[j];if(r.length>e.length)return;if(Ae instanceof ge)continue;if(me&&j!=r.length-1){S.lastIndex=te;var p=S.exec(e);if(!p)break;var c=p.index+(O?p[1].length:0),d=p.index+p[0].length,a=j,l=te;for(let _=r.length;a<_&&(l<d||!r[a].type&&!r[a-1].greedy);++a)l+=r[a].length,c>=l&&(++j,te=l);if(r[j]instanceof ge)continue;u=a-j,Ae=e.slice(te,l),p.index-=te}else{S.lastIndex=0;var p=S.exec(Ae),u=1}if(!p){if(o)break;continue}O&&(ae=p[1]?p[1].length:0);var c=p.index+ae,p=p[0].slice(ae),d=c+p.length,f=Ae.slice(0,c),h=Ae.slice(d);let K=[j,u];f&&(++j,te+=f.length,K.push(f));let fr=new ge(g,b?v.tokenize(p,b):p,Jr,p,me);if(K.push(fr),h&&K.push(h),Array.prototype.splice.apply(r,K),u!=1&&v.matchGrammar(e,r,t,j,te,!0,g),o)break}}}},tokenize:function(e,r){let t=[e],n=r.rest;if(n){for(let i in n)r[i]=n[i];delete r.rest}return v.matchGrammar(e,t,r,0,0,!1),t},hooks:{all:{},add:function(e,r){let t=v.hooks.all;t[e]=t[e]||[],t[e].push(r)},run:function(e,r){let t=v.hooks.all[e];if(!(!t||!t.length))for(var n=0,i;i=t[n++];)i(r)}},Token:ge};v.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};v.languages.javascript=v.languages.extend("clike",{"class-name":[v.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});v.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;v.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:v.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:v.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:v.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:v.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});v.languages.markup&&v.languages.markup.tag.addInlined("script","javascript");v.languages.js=v.languages.javascript;v.languages.typescript=v.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/});v.languages.ts=v.languages.typescript;function ge(e,r,t,n,i){this.type=e,this.content=r,this.alias=t,this.length=(n||"").length|0,this.greedy=!!i}ge.stringify=function(e,r){return typeof e=="string"?e:Array.isArray(e)?e.map(function(t){return ge.stringify(t,r)}).join(""):bd(e.type)(e.content)};function bd(e){return Xs[e]||hd}function ea(e){return Ed(e,v.languages.javascript)}function Ed(e,r){return v.tokenize(e,r).map(n=>ge.stringify(n)).join("")}function ra(e){return Ci(e)}var vn=class e{firstLineNumber;lines;static read(r){let t;try{t=ta.default.readFileSync(r,"utf-8")}catch{return null}return e.fromContent(t)}static fromContent(r){let t=r.split(/\r?\n/);return new e(1,t)}constructor(r,t){this.firstLineNumber=r,this.lines=t}get lastLineNumber(){return this.firstLineNumber+this.lines.length-1}mapLineAt(r,t){if(r<this.firstLineNumber||r>this.lines.length+this.firstLineNumber)return this;let n=r-this.firstLineNumber,i=[...this.lines];return i[n]=t(i[n]),new e(this.firstLineNumber,i)}mapLines(r){return new e(this.firstLineNumber,this.lines.map((t,n)=>r(t,this.firstLineNumber+n)))}lineAt(r){return this.lines[r-this.firstLineNumber]}prependSymbolAt(r,t){return this.mapLines((n,i)=>i===r?`${t} ${n}`:`  ${n}`)}slice(r,t){let n=this.lines.slice(r-1,t).join(`
`);return new e(r,ra(n).split(`
`))}highlight(){let r=ea(this.toString());return new e(this.firstLineNumber,r.split(`
`))}toString(){return this.lines.join(`
`)}};var wd={red:ce,gray:Kr,dim:Ce,bold:W,underline:Y,highlightSource:e=>e.highlight()},xd={red:e=>e,gray:e=>e,dim:e=>e,bold:e=>e,underline:e=>e,highlightSource:e=>e};function vd({message:e,originalMethod:r,isPanic:t,callArguments:n}){return{functionName:`prisma.${r}()`,message:e,isPanic:t??!1,callArguments:n}}function Pd({callsite:e,message:r,originalMethod:t,isPanic:n,callArguments:i},o){let s=vd({message:r,originalMethod:t,isPanic:n,callArguments:i});if(!e||typeof window<"u"||"production"==="production")return s;// removed by dead control flow
// removed by dead control flow
// removed by dead control flow
// removed by dead control flow
// removed by dead control flow
}function Td(e){let r=Object.keys(Sr).join("|"),n=new RegExp(String.raw`\.(${r})\(`).exec(e);if(n){let i=n.index+n[0].length,o=e.lastIndexOf(" ",n.index)+1;return{code:e.slice(o,i),openingBraceIndex:i}}return null}function Sd(e){let r=0;for(let t=0;t<e.length;t++){if(e.charAt(t)!==" ")return r;r++}return r}function Rd({functionName:e,location:r,message:t,isPanic:n,contextLines:i,callArguments:o},s){let a=[""],l=r?" in":":";if(n?(a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)),a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))):a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),r&&a.push(s.underline(Ad(r))),i){a.push("");let u=[i.toString()];o&&(u.push(o),u.push(s.dim(")"))),a.push(u.join("")),o&&a.push("")}else a.push(""),o&&a.push(o),a.push("");return a.push(t),a.join(`
`)}function Ad(e){let r=[e.fileName];return e.lineNumber&&r.push(String(e.lineNumber)),e.columnNumber&&r.push(String(e.columnNumber)),r.join(":")}function Pn(e){let r=e.showColors?wd:xd,t;return t=Pd(e,r),Rd(t,r)}var da=A(Ki());function aa(e,r,t){let n=la(e),i=Cd(n),o=Dd(i);o?Tn(o,r,t):r.addErrorMessage(()=>"Unknown error")}function la(e){return e.errors.flatMap(r=>r.kind==="Union"?la(r):[r])}function Cd(e){let r=new Map,t=[];for(let n of e){if(n.kind!=="InvalidArgumentType"){t.push(n);continue}let i=`${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,o=r.get(i);o?r.set(i,{...n,argument:{...n.argument,typeNames:Id(o.argument.typeNames,n.argument.typeNames)}}):r.set(i,n)}return t.push(...r.values()),t}function Id(e,r){return[...new Set(e.concat(r))]}function Dd(e){return ji(e,(r,t)=>{let n=oa(r),i=oa(t);return n!==i?n-i:sa(r)-sa(t)})}function oa(e){let r=0;return Array.isArray(e.selectionPath)&&(r+=e.selectionPath.length),Array.isArray(e.argumentPath)&&(r+=e.argumentPath.length),r}function sa(e){switch(e.kind){case"InvalidArgumentValue":case"ValueTooLarge":return 20;case"InvalidArgumentType":return 10;case"RequiredArgumentMissing":return-10;default:return 0}}var ue=class{constructor(r,t){this.name=r;this.value=t}isRequired=!1;makeRequired(){return this.isRequired=!0,this}write(r){let{colors:{green:t}}=r.context;r.addMarginSymbol(t(this.isRequired?"+":"?")),r.write(t(this.name)),this.isRequired||r.write(t("?")),r.write(t(": ")),typeof this.value=="string"?r.write(t(this.value)):r.write(this.value)}};ca();var Rr=class{constructor(r=0,t){this.context=t;this.currentIndent=r}lines=[];currentLine="";currentIndent=0;marginSymbol;afterNextNewLineCallback;write(r){return typeof r=="string"?this.currentLine+=r:r.write(this),this}writeJoined(r,t,n=(i,o)=>o.write(i)){let i=t.length-1;for(let o=0;o<t.length;o++)n(t[o],this),o!==i&&this.write(r);return this}writeLine(r){return this.write(r).newLine()}newLine(){this.lines.push(this.indentedCurrentLine()),this.currentLine="",this.marginSymbol=void 0;let r=this.afterNextNewLineCallback;return this.afterNextNewLineCallback=void 0,r?.(),this}withIndent(r){return this.indent(),r(this),this.unindent(),this}afterNextNewline(r){return this.afterNextNewLineCallback=r,this}indent(){return this.currentIndent++,this}unindent(){return this.currentIndent>0&&this.currentIndent--,this}addMarginSymbol(r){return this.marginSymbol=r,this}toString(){return this.lines.concat(this.indentedCurrentLine()).join(`
`)}getCurrentLineLength(){return this.currentLine.length}indentedCurrentLine(){let r=this.currentLine.padStart(this.currentLine.length+2*this.currentIndent);return this.marginSymbol?this.marginSymbol+r.slice(1):r}};ua();var Sn=class{constructor(r){this.value=r}write(r){r.write(this.value)}markAsError(){this.value.markAsError()}};var Rn=e=>e,An={bold:Rn,red:Rn,green:Rn,dim:Rn,enabled:!1},pa={bold:W,red:ce,green:qe,dim:Ce,enabled:!0},Ar={write(e){e.writeLine(",")}};var Pe=class{constructor(r){this.contents=r}isUnderlined=!1;color=r=>r;underline(){return this.isUnderlined=!0,this}setColor(r){return this.color=r,this}write(r){let t=r.getCurrentLineLength();r.write(this.color(this.contents)),this.isUnderlined&&r.afterNextNewline(()=>{r.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)))})}};var ze=class{hasError=!1;markAsError(){return this.hasError=!0,this}};var Cr=class extends ze{items=[];addItem(r){return this.items.push(new Sn(r)),this}getField(r){return this.items[r]}getPrintWidth(){return this.items.length===0?2:Math.max(...this.items.map(t=>t.value.getPrintWidth()))+2}write(r){if(this.items.length===0){this.writeEmpty(r);return}this.writeWithItems(r)}writeEmpty(r){let t=new Pe("[]");this.hasError&&t.setColor(r.context.colors.red).underline(),r.write(t)}writeWithItems(r){let{colors:t}=r.context;r.writeLine("[").withIndent(()=>r.writeJoined(Ar,this.items).newLine()).write("]"),this.hasError&&r.afterNextNewline(()=>{r.writeLine(t.red("~".repeat(this.getPrintWidth())))})}asObject(){}};var Ir=class e extends ze{fields={};suggestions=[];addField(r){this.fields[r.name]=r}addSuggestion(r){this.suggestions.push(r)}getField(r){return this.fields[r]}getDeepField(r){let[t,...n]=r,i=this.getField(t);if(!i)return;let o=i;for(let s of n){let a;if(o.value instanceof e?a=o.value.getField(s):o.value instanceof Cr&&(a=o.value.getField(Number(s))),!a)return;o=a}return o}getDeepFieldValue(r){return r.length===0?this:this.getDeepField(r)?.value}hasField(r){return!!this.getField(r)}removeAllFields(){this.fields={}}removeField(r){delete this.fields[r]}getFields(){return this.fields}isEmpty(){return Object.keys(this.fields).length===0}getFieldValue(r){return this.getField(r)?.value}getDeepSubSelectionValue(r){let t=this;for(let n of r){if(!(t instanceof e))return;let i=t.getSubSelectionValue(n);if(!i)return;t=i}return t}getDeepSelectionParent(r){let t=this.getSelectionParent();if(!t)return;let n=t;for(let i of r){let o=n.value.getFieldValue(i);if(!o||!(o instanceof e))return;let s=o.getSelectionParent();if(!s)return;n=s}return n}getSelectionParent(){let r=this.getField("select")?.value.asObject();if(r)return{kind:"select",value:r};let t=this.getField("include")?.value.asObject();if(t)return{kind:"include",value:t}}getSubSelectionValue(r){return this.getSelectionParent()?.value.fields[r].value}getPrintWidth(){let r=Object.values(this.fields);return r.length==0?2:Math.max(...r.map(n=>n.getPrintWidth()))+2}write(r){let t=Object.values(this.fields);if(t.length===0&&this.suggestions.length===0){this.writeEmpty(r);return}this.writeWithContents(r,t)}asObject(){return this}writeEmpty(r){let t=new Pe("{}");this.hasError&&t.setColor(r.context.colors.red).underline(),r.write(t)}writeWithContents(r,t){r.writeLine("{").withIndent(()=>{r.writeJoined(Ar,[...t,...this.suggestions]).newLine()}),r.write("}"),this.hasError&&r.afterNextNewline(()=>{r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())))})}};var Q=class extends ze{constructor(t){super();this.text=t}getPrintWidth(){return this.text.length}write(t){let n=new Pe(this.text);this.hasError&&n.underline().setColor(t.context.colors.red),t.write(n)}asObject(){}};var ct=class{fields=[];addField(r,t){return this.fields.push({write(n){let{green:i,dim:o}=n.context.colors;n.write(i(o(`${r}: ${t}`))).addMarginSymbol(i(o("+")))}}),this}write(r){let{colors:{green:t}}=r.context;r.writeLine(t("{")).withIndent(()=>{r.writeJoined(Ar,this.fields).newLine()}).write(t("}")).addMarginSymbol(t("+"))}};function Tn(e,r,t){switch(e.kind){case"MutuallyExclusiveFields":Od(e,r);break;case"IncludeOnScalar":kd(e,r);break;case"EmptySelection":_d(e,r,t);break;case"UnknownSelectionField":Md(e,r);break;case"InvalidSelectionValue":$d(e,r);break;case"UnknownArgument":qd(e,r);break;case"UnknownInputField":Vd(e,r);break;case"RequiredArgumentMissing":jd(e,r);break;case"InvalidArgumentType":Bd(e,r);break;case"InvalidArgumentValue":Ud(e,r);break;case"ValueTooLarge":Gd(e,r);break;case"SomeFieldsMissing":Qd(e,r);break;case"TooManyFieldsGiven":Wd(e,r);break;case"Union":aa(e,r,t);break;default:throw new Error("not implemented: "+e.kind)}}function Od(e,r){let t=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();t&&(t.getField(e.firstField)?.markAsError(),t.getField(e.secondField)?.markAsError()),r.addErrorMessage(n=>`Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`)}function kd(e,r){let[t,n]=Dr(e.selectionPath),i=e.outputType,o=r.arguments.getDeepSelectionParent(t)?.value;if(o&&(o.getField(n)?.markAsError(),i))for(let s of i.fields)s.isRelation&&o.addSuggestion(new ue(s.name,"true"));r.addErrorMessage(s=>{let a=`Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;return i?a+=` on model ${s.bold(i.name)}. ${pt(s)}`:a+=".",a+=`
Note that ${s.bold("include")} statements only accept relation fields.`,a})}function _d(e,r,t){let n=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(n){let i=n.getField("omit")?.value.asObject();if(i){Nd(e,r,i);return}if(n.hasField("select")){Ld(e,r);return}}if(t?.[We(e.outputType.name)]){Fd(e,r);return}r.addErrorMessage(()=>`Unknown field at "${e.selectionPath.join(".")} selection"`)}function Nd(e,r,t){t.removeAllFields();for(let n of e.outputType.fields)t.addSuggestion(new ue(n.name,"false"));r.addErrorMessage(n=>`The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`)}function Ld(e,r){let t=e.outputType,n=r.arguments.getDeepSelectionParent(e.selectionPath)?.value,i=n?.isEmpty()??!1;n&&(n.removeAllFields(),ga(n,t)),r.addErrorMessage(o=>i?`The ${o.red("`select`")} statement for type ${o.bold(t.name)} must not be empty. ${pt(o)}`:`The ${o.red("`select`")} statement for type ${o.bold(t.name)} needs ${o.bold("at least one truthy value")}.`)}function Fd(e,r){let t=new ct;for(let i of e.outputType.fields)i.isRelation||t.addField(i.name,"false");let n=new ue("omit",t).makeRequired();if(e.selectionPath.length===0)r.arguments.addSuggestion(n);else{let[i,o]=Dr(e.selectionPath),a=r.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);if(a){let l=a?.value.asObject()??new Ir;l.addSuggestion(n),a.value=l}}r.addErrorMessage(i=>`The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`)}function Md(e,r){let t=ha(e.selectionPath,r);if(t.parentKind!=="unknown"){t.field.markAsError();let n=t.parent;switch(t.parentKind){case"select":ga(n,e.outputType);break;case"include":Jd(n,e.outputType);break;case"omit":Kd(n,e.outputType);break}}r.addErrorMessage(n=>{let i=[`Unknown field ${n.red(`\`${t.fieldName}\``)}`];return t.parentKind!=="unknown"&&i.push(`for ${n.bold(t.parentKind)} statement`),i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`),i.push(pt(n)),i.join(" ")})}function $d(e,r){let t=ha(e.selectionPath,r);t.parentKind!=="unknown"&&t.field.value.markAsError(),r.addErrorMessage(n=>`Invalid value for selection field \`${n.red(t.fieldName)}\`: ${e.underlyingError}`)}function qd(e,r){let t=e.argumentPath[0],n=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&(n.getField(t)?.markAsError(),Hd(n,e.arguments)),r.addErrorMessage(i=>ma(i,t,e.arguments.map(o=>o.name)))}function Vd(e,r){let[t,n]=Dr(e.argumentPath),i=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(i){i.getDeepField(e.argumentPath)?.markAsError();let o=i.getDeepFieldValue(t)?.asObject();o&&ya(o,e.inputType)}r.addErrorMessage(o=>ma(o,n,e.inputType.fields.map(s=>s.name)))}function ma(e,r,t){let n=[`Unknown argument \`${e.red(r)}\`.`],i=zd(r,t);return i&&n.push(`Did you mean \`${e.green(i)}\`?`),t.length>0&&n.push(pt(e)),n.join(" ")}function jd(e,r){let t;r.addErrorMessage(l=>t?.value instanceof Q&&t.value.text==="null"?`Argument \`${l.green(o)}\` must not be ${l.red("null")}.`:`Argument \`${l.green(o)}\` is missing.`);let n=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(!n)return;let[i,o]=Dr(e.argumentPath),s=new ct,a=n.getDeepFieldValue(i)?.asObject();if(a){if(t=a.getField(o),t&&a.removeField(o),e.inputTypes.length===1&&e.inputTypes[0].kind==="object"){for(let l of e.inputTypes[0].fields)s.addField(l.name,l.typeNames.join(" | "));a.addSuggestion(new ue(o,s).makeRequired())}else{let l=e.inputTypes.map(fa).join(" | ");a.addSuggestion(new ue(o,l).makeRequired())}if(e.dependentArgumentPath){n.getDeepField(e.dependentArgumentPath)?.markAsError();let[,l]=Dr(e.dependentArgumentPath);r.addErrorMessage(u=>`Argument \`${u.green(o)}\` is required because argument \`${u.green(l)}\` was provided.`)}}}function fa(e){return e.kind==="list"?`${fa(e.elementType)}[]`:e.name}function Bd(e,r){let t=e.argument.name,n=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&n.getDeepFieldValue(e.argumentPath)?.markAsError(),r.addErrorMessage(i=>{let o=Cn("or",e.argument.typeNames.map(s=>i.green(s)));return`Argument \`${i.bold(t)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`})}function Ud(e,r){let t=e.argument.name,n=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&n.getDeepFieldValue(e.argumentPath)?.markAsError(),r.addErrorMessage(i=>{let o=[`Invalid value for argument \`${i.bold(t)}\``];if(e.underlyingError&&o.push(`: ${e.underlyingError}`),o.push("."),e.argument.typeNames.length>0){let s=Cn("or",e.argument.typeNames.map(a=>i.green(a)));o.push(` Expected ${s}.`)}return o.join("")})}function Gd(e,r){let t=e.argument.name,n=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),i;if(n){let s=n.getDeepField(e.argumentPath)?.value;s?.markAsError(),s instanceof Q&&(i=s.text)}r.addErrorMessage(o=>{let s=["Unable to fit value"];return i&&s.push(o.red(i)),s.push(`into a 64-bit signed integer for field \`${o.bold(t)}\``),s.join(" ")})}function Qd(e,r){let t=e.argumentPath[e.argumentPath.length-1],n=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(n){let i=n.getDeepFieldValue(e.argumentPath)?.asObject();i&&ya(i,e.inputType)}r.addErrorMessage(i=>{let o=[`Argument \`${i.bold(t)}\` of type ${i.bold(e.inputType.name)} needs`];return e.constraints.minFieldCount===1?e.constraints.requiredFields?o.push(`${i.green("at least one of")} ${Cn("or",e.constraints.requiredFields.map(s=>`\`${i.bold(s)}\``))} arguments.`):o.push(`${i.green("at least one")} argument.`):o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`),o.push(pt(i)),o.join(" ")})}function Wd(e,r){let t=e.argumentPath[e.argumentPath.length-1],n=r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),i=[];if(n){let o=n.getDeepFieldValue(e.argumentPath)?.asObject();o&&(o.markAsError(),i=Object.keys(o.getFields()))}r.addErrorMessage(o=>{let s=[`Argument \`${o.bold(t)}\` of type ${o.bold(e.inputType.name)} needs`];return e.constraints.minFieldCount===1&&e.constraints.maxFieldCount==1?s.push(`${o.green("exactly one")} argument,`):e.constraints.maxFieldCount==1?s.push(`${o.green("at most one")} argument,`):s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`),s.push(`but you provided ${Cn("and",i.map(a=>o.red(a)))}. Please choose`),e.constraints.maxFieldCount===1?s.push("one."):s.push(`${e.constraints.maxFieldCount}.`),s.join(" ")})}function ga(e,r){for(let t of r.fields)e.hasField(t.name)||e.addSuggestion(new ue(t.name,"true"))}function Jd(e,r){for(let t of r.fields)t.isRelation&&!e.hasField(t.name)&&e.addSuggestion(new ue(t.name,"true"))}function Kd(e,r){for(let t of r.fields)!e.hasField(t.name)&&!t.isRelation&&e.addSuggestion(new ue(t.name,"true"))}function Hd(e,r){for(let t of r)e.hasField(t.name)||e.addSuggestion(new ue(t.name,t.typeNames.join(" | ")))}function ha(e,r){let[t,n]=Dr(e),i=r.arguments.getDeepSubSelectionValue(t)?.asObject();if(!i)return{parentKind:"unknown",fieldName:n};let o=i.getFieldValue("select")?.asObject(),s=i.getFieldValue("include")?.asObject(),a=i.getFieldValue("omit")?.asObject(),l=o?.getField(n);return o&&l?{parentKind:"select",parent:o,field:l,fieldName:n}:(l=s?.getField(n),s&&l?{parentKind:"include",field:l,parent:s,fieldName:n}:(l=a?.getField(n),a&&l?{parentKind:"omit",field:l,parent:a,fieldName:n}:{parentKind:"unknown",fieldName:n}))}function ya(e,r){if(r.kind==="object")for(let t of r.fields)e.hasField(t.name)||e.addSuggestion(new ue(t.name,t.typeNames.join(" | ")))}function Dr(e){let r=[...e],t=r.pop();if(!t)throw new Error("unexpected empty path");return[r,t]}function pt({green:e,enabled:r}){return"Available options are "+(r?`listed in ${e("green")}`:"marked with ?")+"."}function Cn(e,r){if(r.length===1)return r[0];let t=[...r],n=t.pop();return`${t.join(", ")} ${e} ${n}`}var Yd=3;function zd(e,r){let t=1/0,n;for(let i of r){let o=(0,da.default)(e,i);o>Yd||o<t&&(t=o,n=i)}return n}var dt=class{modelName;name;typeName;isList;isEnum;constructor(r,t,n,i,o){this.modelName=r,this.name=t,this.typeName=n,this.isList=i,this.isEnum=o}_toGraphQLInputType(){let r=this.isList?"List":"",t=this.isEnum?"Enum":"";return`${r}${t}${this.typeName}FieldRefInput<${this.modelName}>`}};function Or(e){return e instanceof dt}var In=Symbol(),Yi=new WeakMap,Me=class{constructor(r){r===In?Yi.set(this,`Prisma.${this._getName()}`):Yi.set(this,`new Prisma.${this._getNamespace()}.${this._getName()}()`)}_getName(){return this.constructor.name}toString(){return Yi.get(this)}},mt=class extends Me{_getNamespace(){return"NullTypes"}},ft=class extends mt{#e};zi(ft,"DbNull");var gt=class extends mt{#e};zi(gt,"JsonNull");var ht=class extends mt{#e};zi(ht,"AnyNull");var Dn={classes:{DbNull:ft,JsonNull:gt,AnyNull:ht},instances:{DbNull:new ft(In),JsonNull:new gt(In),AnyNull:new ht(In)}};function zi(e,r){Object.defineProperty(e,"name",{value:r,configurable:!0})}var ba=": ",On=class{constructor(r,t){this.name=r;this.value=t}hasError=!1;markAsError(){this.hasError=!0}getPrintWidth(){return this.name.length+this.value.getPrintWidth()+ba.length}write(r){let t=new Pe(this.name);this.hasError&&t.underline().setColor(r.context.colors.red),r.write(t).write(ba).write(this.value)}};var Zi=class{arguments;errorMessages=[];constructor(r){this.arguments=r}write(r){r.write(this.arguments)}addErrorMessage(r){this.errorMessages.push(r)}renderAllMessages(r){return this.errorMessages.map(t=>t(r)).join(`
`)}};function kr(e){return new Zi(Ea(e))}function Ea(e){let r=new Ir;for(let[t,n]of Object.entries(e)){let i=new On(t,wa(n));r.addField(i)}return r}function wa(e){if(typeof e=="string")return new Q(JSON.stringify(e));if(typeof e=="number"||typeof e=="boolean")return new Q(String(e));if(typeof e=="bigint")return new Q(`${e}n`);if(e===null)return new Q("null");if(e===void 0)return new Q("undefined");if(Tr(e))return new Q(`new Prisma.Decimal("${e.toFixed()}")`);if(e instanceof Uint8Array)return Buffer.isBuffer(e)?new Q(`Buffer.alloc(${e.byteLength})`):new Q(`new Uint8Array(${e.byteLength})`);if(e instanceof Date){let r=dn(e)?e.toISOString():"Invalid Date";return new Q(`new Date("${r}")`)}return e instanceof Me?new Q(`Prisma.${e._getName()}`):Or(e)?new Q(`prisma.${We(e.modelName)}.$fields.${e.name}`):Array.isArray(e)?Zd(e):typeof e=="object"?Ea(e):new Q(Object.prototype.toString.call(e))}function Zd(e){let r=new Cr;for(let t of e)r.addItem(wa(t));return r}function kn(e,r){let t=r==="pretty"?pa:An,n=e.renderAllMessages(t),i=new Rr(0,{colors:t}).write(e).toString();return{message:n,args:i}}function _n({args:e,errors:r,errorFormat:t,callsite:n,originalMethod:i,clientVersion:o,globalOmit:s}){let a=kr(e);for(let p of r)Tn(p,a,s);let{message:l,args:u}=kn(a,t),c=Pn({message:l,callsite:n,originalMethod:i,showColors:t==="pretty",callArguments:u});throw new Z(c,{clientVersion:o})}function Te(e){return e.replace(/^./,r=>r.toLowerCase())}function va(e,r,t){let n=Te(t);return!r.result||!(r.result.$allModels||r.result[n])?e:Xd({...e,...xa(r.name,e,r.result.$allModels),...xa(r.name,e,r.result[n])})}function Xd(e){let r=new we,t=(n,i)=>r.getOrCreate(n,()=>i.has(n)?[n]:(i.add(n),e[n]?e[n].needs.flatMap(o=>t(o,i)):[n]));return cn(e,n=>({...n,needs:t(n.name,new Set)}))}function xa(e,r,t){return t?cn(t,({needs:n,compute:i},o)=>({name:o,needs:n?Object.keys(n).filter(s=>n[s]):[],compute:em(r,o,i)})):{}}function em(e,r,t){let n=e?.[r]?.compute;return n?i=>t({...i,[r]:n(i)}):t}function Pa(e,r){if(!r)return e;let t={...e};for(let n of Object.values(r))if(e[n.name])for(let i of n.needs)t[i]=!0;return t}function Ta(e,r){if(!r)return e;let t={...e};for(let n of Object.values(r))if(!e[n.name])for(let i of n.needs)delete t[i];return t}var Nn=class{constructor(r,t){this.extension=r;this.previous=t}computedFieldsCache=new we;modelExtensionsCache=new we;queryCallbacksCache=new we;clientExtensions=at(()=>this.extension.client?{...this.previous?.getAllClientExtensions(),...this.extension.client}:this.previous?.getAllClientExtensions());batchCallbacks=at(()=>{let r=this.previous?.getAllBatchQueryCallbacks()??[],t=this.extension.query?.$__internalBatch;return t?r.concat(t):r});getAllComputedFields(r){return this.computedFieldsCache.getOrCreate(r,()=>va(this.previous?.getAllComputedFields(r),this.extension,r))}getAllClientExtensions(){return this.clientExtensions.get()}getAllModelExtensions(r){return this.modelExtensionsCache.getOrCreate(r,()=>{let t=Te(r);return!this.extension.model||!(this.extension.model[t]||this.extension.model.$allModels)?this.previous?.getAllModelExtensions(r):{...this.previous?.getAllModelExtensions(r),...this.extension.model.$allModels,...this.extension.model[t]}})}getAllQueryCallbacks(r,t){return this.queryCallbacksCache.getOrCreate(`${r}:${t}`,()=>{let n=this.previous?.getAllQueryCallbacks(r,t)??[],i=[],o=this.extension.query;return!o||!(o[r]||o.$allModels||o[t]||o.$allOperations)?n:(o[r]!==void 0&&(o[r][t]!==void 0&&i.push(o[r][t]),o[r].$allOperations!==void 0&&i.push(o[r].$allOperations)),r!=="$none"&&o.$allModels!==void 0&&(o.$allModels[t]!==void 0&&i.push(o.$allModels[t]),o.$allModels.$allOperations!==void 0&&i.push(o.$allModels.$allOperations)),o[t]!==void 0&&i.push(o[t]),o.$allOperations!==void 0&&i.push(o.$allOperations),n.concat(i))})}getAllBatchQueryCallbacks(){return this.batchCallbacks.get()}},_r=class e{constructor(r){this.head=r}static empty(){return new e}static single(r){return new e(new Nn(r))}isEmpty(){return this.head===void 0}append(r){return new e(new Nn(r,this.head))}getAllComputedFields(r){return this.head?.getAllComputedFields(r)}getAllClientExtensions(){return this.head?.getAllClientExtensions()}getAllModelExtensions(r){return this.head?.getAllModelExtensions(r)}getAllQueryCallbacks(r,t){return this.head?.getAllQueryCallbacks(r,t)??[]}getAllBatchQueryCallbacks(){return this.head?.getAllBatchQueryCallbacks()??[]}};var Ln=class{constructor(r){this.name=r}};function Sa(e){return e instanceof Ln}function Ra(e){return new Ln(e)}var Aa=Symbol(),yt=class{constructor(r){if(r!==Aa)throw new Error("Skip instance can not be constructed directly")}ifUndefined(r){return r===void 0?Fn:r}},Fn=new yt(Aa);function Se(e){return e instanceof yt}var rm={findUnique:"findUnique",findUniqueOrThrow:"findUniqueOrThrow",findFirst:"findFirst",findFirstOrThrow:"findFirstOrThrow",findMany:"findMany",count:"aggregate",create:"createOne",createMany:"createMany",createManyAndReturn:"createManyAndReturn",update:"updateOne",updateMany:"updateMany",updateManyAndReturn:"updateManyAndReturn",upsert:"upsertOne",delete:"deleteOne",deleteMany:"deleteMany",executeRaw:"executeRaw",queryRaw:"queryRaw",aggregate:"aggregate",groupBy:"groupBy",runCommandRaw:"runCommandRaw",findRaw:"findRaw",aggregateRaw:"aggregateRaw"},Ca="explicitly `undefined` values are not allowed";function Mn({modelName:e,action:r,args:t,runtimeDataModel:n,extensions:i=_r.empty(),callsite:o,clientMethod:s,errorFormat:a,clientVersion:l,previewFeatures:u,globalOmit:c}){let p=new Xi({runtimeDataModel:n,modelName:e,action:r,rootArgs:t,callsite:o,extensions:i,selectionPath:[],argumentPath:[],originalMethod:s,errorFormat:a,clientVersion:l,previewFeatures:u,globalOmit:c});return{modelName:e,action:rm[r],query:bt(t,p)}}function bt({select:e,include:r,...t}={},n){let i=t.omit;return delete t.omit,{arguments:Da(t,n),selection:tm(e,r,i,n)}}function tm(e,r,t,n){return e?(r?n.throwValidationError({kind:"MutuallyExclusiveFields",firstField:"include",secondField:"select",selectionPath:n.getSelectionPath()}):t&&n.throwValidationError({kind:"MutuallyExclusiveFields",firstField:"omit",secondField:"select",selectionPath:n.getSelectionPath()}),sm(e,n)):nm(n,r,t)}function nm(e,r,t){let n={};return e.modelOrType&&!e.isRawAction()&&(n.$composites=!0,n.$scalars=!0),r&&im(n,r,e),om(n,t,e),n}function im(e,r,t){for(let[n,i]of Object.entries(r)){if(Se(i))continue;let o=t.nestSelection(n);if(eo(i,o),i===!1||i===void 0){e[n]=!1;continue}let s=t.findField(n);if(s&&s.kind!=="object"&&t.throwValidationError({kind:"IncludeOnScalar",selectionPath:t.getSelectionPath().concat(n),outputType:t.getOutputTypeDescription()}),s){e[n]=bt(i===!0?{}:i,o);continue}if(i===!0){e[n]=!0;continue}e[n]=bt(i,o)}}function om(e,r,t){let n=t.getComputedFields(),i={...t.getGlobalOmit(),...r},o=Ta(i,n);for(let[s,a]of Object.entries(o)){if(Se(a))continue;eo(a,t.nestSelection(s));let l=t.findField(s);n?.[s]&&!l||(e[s]=!a)}}function sm(e,r){let t={},n=r.getComputedFields(),i=Pa(e,n);for(let[o,s]of Object.entries(i)){if(Se(s))continue;let a=r.nestSelection(o);eo(s,a);let l=r.findField(o);if(!(n?.[o]&&!l)){if(s===!1||s===void 0||Se(s)){t[o]=!1;continue}if(s===!0){l?.kind==="object"?t[o]=bt({},a):t[o]=!0;continue}t[o]=bt(s,a)}}return t}function Ia(e,r){if(e===null)return null;if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return e;if(typeof e=="bigint")return{$type:"BigInt",value:String(e)};if(xr(e)){if(dn(e))return{$type:"DateTime",value:e.toISOString()};r.throwValidationError({kind:"InvalidArgumentValue",selectionPath:r.getSelectionPath(),argumentPath:r.getArgumentPath(),argument:{name:r.getArgumentName(),typeNames:["Date"]},underlyingError:"Provided Date object is invalid"})}if(Sa(e))return{$type:"Param",value:e.name};if(Or(e))return{$type:"FieldRef",value:{_ref:e.name,_container:e.modelName}};if(Array.isArray(e))return am(e,r);if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:n,byteLength:i}=e;return{$type:"Bytes",value:Buffer.from(t,n,i).toString("base64")}}if(lm(e))return e.values;if(Tr(e))return{$type:"Decimal",value:e.toFixed()};if(e instanceof Me){if(e!==Dn.instances[e._getName()])throw new Error("Invalid ObjectEnumValue");return{$type:"Enum",value:e._getName()}}if(um(e))return e.toJSON();if(typeof e=="object")return Da(e,r);r.throwValidationError({kind:"InvalidArgumentValue",selectionPath:r.getSelectionPath(),argumentPath:r.getArgumentPath(),argument:{name:r.getArgumentName(),typeNames:[]},underlyingError:`We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`})}function Da(e,r){if(e.$type)return{$type:"Raw",value:e};let t={};for(let n in e){let i=e[n],o=r.nestArgument(n);Se(i)||(i!==void 0?t[n]=Ia(i,o):r.isPreviewFeatureOn("strictUndefinedChecks")&&r.throwValidationError({kind:"InvalidArgumentValue",argumentPath:o.getArgumentPath(),selectionPath:r.getSelectionPath(),argument:{name:r.getArgumentName(),typeNames:[]},underlyingError:Ca}))}return t}function am(e,r){let t=[];for(let n=0;n<e.length;n++){let i=r.nestArgument(String(n)),o=e[n];if(o===void 0||Se(o)){let s=o===void 0?"undefined":"Prisma.skip";r.throwValidationError({kind:"InvalidArgumentValue",selectionPath:i.getSelectionPath(),argumentPath:i.getArgumentPath(),argument:{name:`${r.getArgumentName()}[${n}]`,typeNames:[]},underlyingError:`Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`})}t.push(Ia(o,i))}return t}function lm(e){return typeof e=="object"&&e!==null&&e.__prismaRawParameters__===!0}function um(e){return typeof e=="object"&&e!==null&&typeof e.toJSON=="function"}function eo(e,r){e===void 0&&r.isPreviewFeatureOn("strictUndefinedChecks")&&r.throwValidationError({kind:"InvalidSelectionValue",selectionPath:r.getSelectionPath(),underlyingError:Ca})}var Xi=class e{constructor(r){this.params=r;this.params.modelName&&(this.modelOrType=this.params.runtimeDataModel.models[this.params.modelName]??this.params.runtimeDataModel.types[this.params.modelName])}modelOrType;throwValidationError(r){_n({errors:[r],originalMethod:this.params.originalMethod,args:this.params.rootArgs??{},callsite:this.params.callsite,errorFormat:this.params.errorFormat,clientVersion:this.params.clientVersion,globalOmit:this.params.globalOmit})}getSelectionPath(){return this.params.selectionPath}getArgumentPath(){return this.params.argumentPath}getArgumentName(){return this.params.argumentPath[this.params.argumentPath.length-1]}getOutputTypeDescription(){if(!(!this.params.modelName||!this.modelOrType))return{name:this.params.modelName,fields:this.modelOrType.fields.map(r=>({name:r.name,typeName:"boolean",isRelation:r.kind==="object"}))}}isRawAction(){return["executeRaw","queryRaw","runCommandRaw","findRaw","aggregateRaw"].includes(this.params.action)}isPreviewFeatureOn(r){return this.params.previewFeatures.includes(r)}getComputedFields(){if(this.params.modelName)return this.params.extensions.getAllComputedFields(this.params.modelName)}findField(r){return this.modelOrType?.fields.find(t=>t.name===r)}nestSelection(r){let t=this.findField(r),n=t?.kind==="object"?t.type:void 0;return new e({...this.params,modelName:n,selectionPath:this.params.selectionPath.concat(r)})}getGlobalOmit(){return this.params.modelName&&this.shouldApplyGlobalOmit()?this.params.globalOmit?.[We(this.params.modelName)]??{}:{}}shouldApplyGlobalOmit(){switch(this.params.action){case"findFirst":case"findFirstOrThrow":case"findUniqueOrThrow":case"findMany":case"upsert":case"findUnique":case"createManyAndReturn":case"create":case"update":case"updateManyAndReturn":case"delete":return!0;case"executeRaw":case"aggregateRaw":case"runCommandRaw":case"findRaw":case"createMany":case"deleteMany":case"groupBy":case"updateMany":case"count":case"aggregate":case"queryRaw":return!1;default:ar(this.params.action,"Unknown action")}}nestArgument(r){return new e({...this.params,argumentPath:this.params.argumentPath.concat(r)})}};function Oa(e){if(!e._hasPreviewFlag("metrics"))throw new Z("`metrics` preview feature must be enabled in order to access metrics API",{clientVersion:e._clientVersion})}var Nr=class{_client;constructor(r){this._client=r}prometheus(r){return Oa(this._client),this._client._engine.metrics({format:"prometheus",...r})}json(r){return Oa(this._client),this._client._engine.metrics({format:"json",...r})}};function ka(e,r){let t=at(()=>cm(r));Object.defineProperty(e,"dmmf",{get:()=>t.get()})}function cm(e){return{datamodel:{models:ro(e.models),enums:ro(e.enums),types:ro(e.types)}}}function ro(e){return Object.entries(e).map(([r,t])=>({name:r,...t}))}var to=new WeakMap,$n="$$PrismaTypedSql",Et=class{constructor(r,t){to.set(this,{sql:r,values:t}),Object.defineProperty(this,$n,{value:$n})}get sql(){return to.get(this).sql}get values(){return to.get(this).values}};function _a(e){return(...r)=>new Et(e,r)}function qn(e){return e!=null&&e[$n]===$n}var fu=A(Ti());var gu=__webpack_require__(6698),hu=__webpack_require__(8474),yu=A(__webpack_require__(3024)),ri=A(__webpack_require__(6760));var oe=class e{constructor(r,t){if(r.length-1!==t.length)throw r.length===0?new TypeError("Expected at least 1 string"):new TypeError(`Expected ${r.length} strings to have ${r.length-1} values`);let n=t.reduce((s,a)=>s+(a instanceof e?a.values.length:1),0);this.values=new Array(n),this.strings=new Array(n+1),this.strings[0]=r[0];let i=0,o=0;for(;i<t.length;){let s=t[i++],a=r[i];if(s instanceof e){this.strings[o]+=s.strings[0];let l=0;for(;l<s.values.length;)this.values[o++]=s.values[l++],this.strings[o]=s.strings[l];this.strings[o]+=a}else this.values[o++]=s,this.strings[o]=a}}get sql(){let r=this.strings.length,t=1,n=this.strings[0];for(;t<r;)n+=`?${this.strings[t++]}`;return n}get statement(){let r=this.strings.length,t=1,n=this.strings[0];for(;t<r;)n+=`:${t}${this.strings[t++]}`;return n}get text(){let r=this.strings.length,t=1,n=this.strings[0];for(;t<r;)n+=`$${t}${this.strings[t++]}`;return n}inspect(){return{sql:this.sql,statement:this.statement,text:this.text,values:this.values}}};function Na(e,r=",",t="",n=""){if(e.length===0)throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");return new oe([t,...Array(e.length-1).fill(r),n],e)}function no(e){return new oe([e],[])}var La=no("");function io(e,...r){return new oe(e,r)}function wt(e){return{getKeys(){return Object.keys(e)},getPropertyValue(r){return e[r]}}}function re(e,r){return{getKeys(){return[e]},getPropertyValue(){return r()}}}function lr(e){let r=new we;return{getKeys(){return e.getKeys()},getPropertyValue(t){return r.getOrCreate(t,()=>e.getPropertyValue(t))},getPropertyDescriptor(t){return e.getPropertyDescriptor?.(t)}}}var Vn={enumerable:!0,configurable:!0,writable:!0};function jn(e){let r=new Set(e);return{getPrototypeOf:()=>Object.prototype,getOwnPropertyDescriptor:()=>Vn,has:(t,n)=>r.has(n),set:(t,n,i)=>r.add(n)&&Reflect.set(t,n,i),ownKeys:()=>[...r]}}var Fa=Symbol.for("nodejs.util.inspect.custom");function he(e,r){let t=pm(r),n=new Set,i=new Proxy(e,{get(o,s){if(n.has(s))return o[s];let a=t.get(s);return a?a.getPropertyValue(s):o[s]},has(o,s){if(n.has(s))return!0;let a=t.get(s);return a?a.has?.(s)??!0:Reflect.has(o,s)},ownKeys(o){let s=Ma(Reflect.ownKeys(o),t),a=Ma(Array.from(t.keys()),t);return[...new Set([...s,...a,...n])]},set(o,s,a){return t.get(s)?.getPropertyDescriptor?.(s)?.writable===!1?!1:(n.add(s),Reflect.set(o,s,a))},getOwnPropertyDescriptor(o,s){let a=Reflect.getOwnPropertyDescriptor(o,s);if(a&&!a.configurable)return a;let l=t.get(s);return l?l.getPropertyDescriptor?{...Vn,...l?.getPropertyDescriptor(s)}:Vn:a},defineProperty(o,s,a){return n.add(s),Reflect.defineProperty(o,s,a)},getPrototypeOf:()=>Object.prototype});return i[Fa]=function(){let o={...this};return delete o[Fa],o},i}function pm(e){let r=new Map;for(let t of e){let n=t.getKeys();for(let i of n)r.set(i,t)}return r}function Ma(e,r){return e.filter(t=>r.get(t)?.has?.(t)??!0)}function Lr(e){return{getKeys(){return e},has(){return!1},getPropertyValue(){}}}function Fr(e,r){return{batch:e,transaction:r?.kind==="batch"?{isolationLevel:r.options.isolationLevel}:void 0}}function $a(e){if(e===void 0)return"";let r=kr(e);return new Rr(0,{colors:An}).write(r).toString()}var dm="P2037";function Mr({error:e,user_facing_error:r},t,n){return r.error_code?new z(mm(r,n),{code:r.error_code,clientVersion:t,meta:r.meta,batchRequestIdx:r.batch_request_idx}):new V(e,{clientVersion:t,batchRequestIdx:r.batch_request_idx})}function mm(e,r){let t=e.message;return(r==="postgresql"||r==="postgres"||r==="mysql")&&e.error_code===dm&&(t+=`
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),t}var xt="<unknown>";function qa(e){var r=e.split(`
`);return r.reduce(function(t,n){var i=hm(n)||bm(n)||xm(n)||Sm(n)||Pm(n);return i&&t.push(i),t},[])}var fm=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,gm=/\((\S*)(?::(\d+))(?::(\d+))\)/;function hm(e){var r=fm.exec(e);if(!r)return null;var t=r[2]&&r[2].indexOf("native")===0,n=r[2]&&r[2].indexOf("eval")===0,i=gm.exec(r[2]);return n&&i!=null&&(r[2]=i[1],r[3]=i[2],r[4]=i[3]),{file:t?null:r[2],methodName:r[1]||xt,arguments:t?[r[2]]:[],lineNumber:r[3]?+r[3]:null,column:r[4]?+r[4]:null}}var ym=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;function bm(e){var r=ym.exec(e);return r?{file:r[2],methodName:r[1]||xt,arguments:[],lineNumber:+r[3],column:r[4]?+r[4]:null}:null}var Em=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,wm=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i;function xm(e){var r=Em.exec(e);if(!r)return null;var t=r[3]&&r[3].indexOf(" > eval")>-1,n=wm.exec(r[3]);return t&&n!=null&&(r[3]=n[1],r[4]=n[2],r[5]=null),{file:r[3],methodName:r[1]||xt,arguments:r[2]?r[2].split(","):[],lineNumber:r[4]?+r[4]:null,column:r[5]?+r[5]:null}}var vm=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;function Pm(e){var r=vm.exec(e);return r?{file:r[3],methodName:r[1]||xt,arguments:[],lineNumber:+r[4],column:r[5]?+r[5]:null}:null}var Tm=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;function Sm(e){var r=Tm.exec(e);return r?{file:r[2],methodName:r[1]||xt,arguments:[],lineNumber:+r[3],column:r[4]?+r[4]:null}:null}var oo=class{getLocation(){return null}},so=class{_error;constructor(){this._error=new Error}getLocation(){let r=this._error.stack;if(!r)return null;let n=qa(r).find(i=>{if(!i.file)return!1;let o=Li(i.file);return o!=="<anonymous>"&&!o.includes("@prisma")&&!o.includes("/packages/client/src/runtime/")&&!o.endsWith("/runtime/binary.js")&&!o.endsWith("/runtime/library.js")&&!o.endsWith("/runtime/edge.js")&&!o.endsWith("/runtime/edge-esm.js")&&!o.startsWith("internal/")&&!i.methodName.includes("new ")&&!i.methodName.includes("getCallSite")&&!i.methodName.includes("Proxy.")&&i.methodName.split(".").length<4});return!n||!n.file?null:{fileName:n.file,lineNumber:n.lineNumber,columnNumber:n.column}}};function Ze(e){return e==="minimal"?typeof $EnabledCallSite=="function"&&e!=="minimal"?new $EnabledCallSite:new oo:new so}var Va={_avg:!0,_count:!0,_sum:!0,_min:!0,_max:!0};function $r(e={}){let r=Am(e);return Object.entries(r).reduce((n,[i,o])=>(Va[i]!==void 0?n.select[i]={select:o}:n[i]=o,n),{select:{}})}function Am(e={}){return typeof e._count=="boolean"?{...e,_count:{_all:e._count}}:e}function Bn(e={}){return r=>(typeof e._count=="boolean"&&(r._count=r._count._all),r)}function ja(e,r){let t=Bn(e);return r({action:"aggregate",unpacker:t,argsMapper:$r})(e)}function Cm(e={}){let{select:r,...t}=e;return typeof r=="object"?$r({...t,_count:r}):$r({...t,_count:{_all:!0}})}function Im(e={}){return typeof e.select=="object"?r=>Bn(e)(r)._count:r=>Bn(e)(r)._count._all}function Ba(e,r){return r({action:"count",unpacker:Im(e),argsMapper:Cm})(e)}function Dm(e={}){let r=$r(e);if(Array.isArray(r.by))for(let t of r.by)typeof t=="string"&&(r.select[t]=!0);else typeof r.by=="string"&&(r.select[r.by]=!0);return r}function Om(e={}){return r=>(typeof e?._count=="boolean"&&r.forEach(t=>{t._count=t._count._all}),r)}function Ua(e,r){return r({action:"groupBy",unpacker:Om(e),argsMapper:Dm})(e)}function Ga(e,r,t){if(r==="aggregate")return n=>ja(n,t);if(r==="count")return n=>Ba(n,t);if(r==="groupBy")return n=>Ua(n,t)}function Qa(e,r){let t=r.fields.filter(i=>!i.relationName),n=Ms(t,"name");return new Proxy({},{get(i,o){if(o in i||typeof o=="symbol")return i[o];let s=n[o];if(s)return new dt(e,o,s.type,s.isList,s.kind==="enum")},...jn(Object.keys(n))})}var Wa=e=>Array.isArray(e)?e:e.split("."),ao=(e,r)=>Wa(r).reduce((t,n)=>t&&t[n],e),Ja=(e,r,t)=>Wa(r).reduceRight((n,i,o,s)=>Object.assign({},ao(e,s.slice(0,o)),{[i]:n}),t);function km(e,r){return e===void 0||r===void 0?[]:[...r,"select",e]}function _m(e,r,t){return r===void 0?e??{}:Ja(r,t,e||!0)}function lo(e,r,t,n,i,o){let a=e._runtimeDataModel.models[r].fields.reduce((l,u)=>({...l,[u.name]:u}),{});return l=>{let u=Ze(e._errorFormat),c=km(n,i),p=_m(l,o,c),d=t({dataPath:c,callsite:u})(p),f=Nm(e,r);return new Proxy(d,{get(h,g){if(!f.includes(g))return h[g];let T=[a[g].type,t,g],S=[c,p];return lo(e,...T,...S)},...jn([...f,...Object.getOwnPropertyNames(d)])})}}function Nm(e,r){return e._runtimeDataModel.models[r].fields.filter(t=>t.kind==="object").map(t=>t.name)}var Lm=["findUnique","findUniqueOrThrow","findFirst","findFirstOrThrow","create","update","upsert","delete"],Fm=["aggregate","count","groupBy"];function uo(e,r){let t=e._extensions.getAllModelExtensions(r)??{},n=[Mm(e,r),qm(e,r),wt(t),re("name",()=>r),re("$name",()=>r),re("$parent",()=>e._appliedParent)];return he({},n)}function Mm(e,r){let t=Te(r),n=Object.keys(Sr).concat("count");return{getKeys(){return n},getPropertyValue(i){let o=i,s=a=>l=>{let u=Ze(e._errorFormat);return e._createPrismaPromise(c=>{let p={args:l,dataPath:[],action:o,model:r,clientMethod:`${t}.${i}`,jsModelName:t,transaction:c,callsite:u};return e._request({...p,...a})},{action:o,args:l,model:r})};return Lm.includes(o)?lo(e,r,s):$m(i)?Ga(e,i,s):s({})}}}function $m(e){return Fm.includes(e)}function qm(e,r){return lr(re("fields",()=>{let t=e._runtimeDataModel.models[r];return Qa(r,t)}))}function Ka(e){return e.replace(/^./,r=>r.toUpperCase())}var co=Symbol();function vt(e){let r=[Vm(e),jm(e),re(co,()=>e),re("$parent",()=>e._appliedParent)],t=e._extensions.getAllClientExtensions();return t&&r.push(wt(t)),he(e,r)}function Vm(e){let r=Object.getPrototypeOf(e._originalClient),t=[...new Set(Object.getOwnPropertyNames(r))];return{getKeys(){return t},getPropertyValue(n){return e[n]}}}function jm(e){let r=Object.keys(e._runtimeDataModel.models),t=r.map(Te),n=[...new Set(r.concat(t))];return lr({getKeys(){return n},getPropertyValue(i){let o=Ka(i);if(e._runtimeDataModel.models[o]!==void 0)return uo(e,o);if(e._runtimeDataModel.models[i]!==void 0)return uo(e,i)},getPropertyDescriptor(i){if(!t.includes(i))return{enumerable:!1}}})}function Ha(e){return e[co]?e[co]:e}function Ya(e){if(typeof e=="function")return e(this);if(e.client?.__AccelerateEngine){let t=e.client.__AccelerateEngine;this._originalClient._engine=new t(this._originalClient._accelerateEngineConfig)}let r=Object.create(this._originalClient,{_extensions:{value:this._extensions.append(e)},_appliedParent:{value:this,configurable:!0},$on:{value:void 0}});return vt(r)}function za({result:e,modelName:r,select:t,omit:n,extensions:i}){let o=i.getAllComputedFields(r);if(!o)return e;let s=[],a=[];for(let l of Object.values(o)){if(n){if(n[l.name])continue;let u=l.needs.filter(c=>n[c]);u.length>0&&a.push(Lr(u))}else if(t){if(!t[l.name])continue;let u=l.needs.filter(c=>!t[c]);u.length>0&&a.push(Lr(u))}Bm(e,l.needs)&&s.push(Um(l,he(e,s)))}return s.length>0||a.length>0?he(e,[...s,...a]):e}function Bm(e,r){return r.every(t=>Vi(e,t))}function Um(e,r){return lr(re(e.name,()=>e.compute(r)))}function Un({visitor:e,result:r,args:t,runtimeDataModel:n,modelName:i}){if(Array.isArray(r)){for(let s=0;s<r.length;s++)r[s]=Un({result:r[s],args:t,modelName:i,runtimeDataModel:n,visitor:e});return r}let o=e(r,i,t)??r;return t.include&&Za({includeOrSelect:t.include,result:o,parentModelName:i,runtimeDataModel:n,visitor:e}),t.select&&Za({includeOrSelect:t.select,result:o,parentModelName:i,runtimeDataModel:n,visitor:e}),o}function Za({includeOrSelect:e,result:r,parentModelName:t,runtimeDataModel:n,visitor:i}){for(let[o,s]of Object.entries(e)){if(!s||r[o]==null||Se(s))continue;let l=n.models[t].fields.find(c=>c.name===o);if(!l||l.kind!=="object"||!l.relationName)continue;let u=typeof s=="object"?s:{};r[o]=Un({visitor:i,result:r[o],args:u,modelName:l.type,runtimeDataModel:n})}}function Xa({result:e,modelName:r,args:t,extensions:n,runtimeDataModel:i,globalOmit:o}){return n.isEmpty()||e==null||typeof e!="object"||!i.models[r]?e:Un({result:e,args:t??{},modelName:r,runtimeDataModel:i,visitor:(a,l,u)=>{let c=Te(l);return za({result:a,modelName:c,select:u.select,omit:u.select?void 0:{...o?.[c],...u.omit},extensions:n})}})}var Gm=["$connect","$disconnect","$on","$transaction","$extends"],el=Gm;function rl(e){if(e instanceof oe)return Qm(e);if(qn(e))return Wm(e);if(Array.isArray(e)){let t=[e[0]];for(let n=1;n<e.length;n++)t[n]=Pt(e[n]);return t}let r={};for(let t in e)r[t]=Pt(e[t]);return r}function Qm(e){return new oe(e.strings,e.values)}function Wm(e){return new Et(e.sql,e.values)}function Pt(e){if(typeof e!="object"||e==null||e instanceof Me||Or(e))return e;if(Tr(e))return new Fe(e.toFixed());if(xr(e))return new Date(+e);if(ArrayBuffer.isView(e))return e.slice(0);if(Array.isArray(e)){let r=e.length,t;for(t=Array(r);r--;)t[r]=Pt(e[r]);return t}if(typeof e=="object"){let r={};for(let t in e)t==="__proto__"?Object.defineProperty(r,t,{value:Pt(e[t]),configurable:!0,enumerable:!0,writable:!0}):r[t]=Pt(e[t]);return r}ar(e,"Unknown value")}function nl(e,r,t,n=0){return e._createPrismaPromise(i=>{let o=r.customDataProxyFetch;return"transaction"in r&&i!==void 0&&(r.transaction?.kind==="batch"&&r.transaction.lock.then(),r.transaction=i),n===t.length?e._executeRequest(r):t[n]({model:r.model,operation:r.model?r.action:r.clientMethod,args:rl(r.args??{}),__internalParams:r,query:(s,a=r)=>{let l=a.customDataProxyFetch;return a.customDataProxyFetch=al(o,l),a.args=s,nl(e,a,t,n+1)}})})}function il(e,r){let{jsModelName:t,action:n,clientMethod:i}=r,o=t?n:i;if(e._extensions.isEmpty())return e._executeRequest(r);let s=e._extensions.getAllQueryCallbacks(t??"$none",o);return nl(e,r,s)}function ol(e){return r=>{let t={requests:r},n=r[0].extensions.getAllBatchQueryCallbacks();return n.length?sl(t,n,0,e):e(t)}}function sl(e,r,t,n){if(t===r.length)return n(e);let i=e.customDataProxyFetch,o=e.requests[0].transaction;return r[t]({args:{queries:e.requests.map(s=>({model:s.modelName,operation:s.action,args:s.args})),transaction:o?{isolationLevel:o.kind==="batch"?o.isolationLevel:void 0}:void 0},__internalParams:e,query(s,a=e){let l=a.customDataProxyFetch;return a.customDataProxyFetch=al(i,l),sl(a,r,t+1,n)}})}var tl=e=>e;function al(e=tl,r=tl){return t=>e(r(t))}var ll=N("prisma:client"),ul={Vercel:"vercel","Netlify CI":"netlify"};function cl({postinstall:e,ciName:r,clientVersion:t}){if(ll("checkPlatformCaching:postinstall",e),ll("checkPlatformCaching:ciName",r),e===!0&&r&&r in ul){let n=`Prisma has detected that this project was built on ${r}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ul[r]}-build`;throw console.error(n),new P(n,t)}}function pl(e,r){return e?e.datasources?e.datasources:e.datasourceUrl?{[r[0]]:{url:e.datasourceUrl}}:{}:{}}var Jm=()=>globalThis.process?.release?.name==="node",Km=()=>!!globalThis.Bun||!!globalThis.process?.versions?.bun,Hm=()=>!!globalThis.Deno,Ym=()=>typeof globalThis.Netlify=="object",zm=()=>typeof globalThis.EdgeRuntime=="object",Zm=()=>globalThis.navigator?.userAgent==="Cloudflare-Workers";function Xm(){return[[Ym,"netlify"],[zm,"edge-light"],[Zm,"workerd"],[Hm,"deno"],[Km,"bun"],[Jm,"node"]].flatMap(t=>t[0]()?[t[1]]:[]).at(0)??""}var ef={node:"Node.js",workerd:"Cloudflare Workers",deno:"Deno and Deno Deploy",netlify:"Netlify Edge Functions","edge-light":"Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"};function Gn(){let e=Xm();return{id:e,prettyName:ef[e]||e,isEdge:["workerd","deno","netlify","edge-light"].includes(e)}}var hl=A(__webpack_require__(3024)),Tt=A(__webpack_require__(6760));function Qn(e){let{runtimeBinaryTarget:r}=e;return`Add "${r}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${rf(e)}`}function rf(e){let{generator:r,generatorBinaryTargets:t,runtimeBinaryTarget:n}=e,i={fromEnvVar:null,value:n},o=[...t,i];return ki({...r,binaryTargets:o})}function Xe(e){let{runtimeBinaryTarget:r}=e;return`Prisma Client could not locate the Query Engine for runtime "${r}".`}function er(e){let{searchedLocations:r}=e;return`The following locations have been searched:
${[...new Set(r)].map(i=>`  ${i}`).join(`
`)}`}function dl(e){let{runtimeBinaryTarget:r}=e;return`${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${r}".
${Qn(e)}

${er(e)}`}function Wn(e){return`We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`}function Jn(e){let{errorStack:r}=e;return r?.match(/\/\.next|\/next@|\/next\//)?`

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.`:""}function ml(e){let{queryEngineName:r}=e;return`${Xe(e)}${Jn(e)}

This is likely caused by a bundler that has not copied "${r}" next to the resulting bundle.
Ensure that "${r}" has been copied next to the bundle or in "${e.expectedLocation}".

${Wn("engine-not-found-bundler-investigation")}

${er(e)}`}function fl(e){let{runtimeBinaryTarget:r,generatorBinaryTargets:t}=e,n=t.find(i=>i.native);return`${Xe(e)}

This happened because Prisma Client was generated for "${n?.value??"unknown"}", but the actual deployment required "${r}".
${Qn(e)}

${er(e)}`}function gl(e){let{queryEngineName:r}=e;return`${Xe(e)}${Jn(e)}

This is likely caused by tooling that has not copied "${r}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${r}" has been copied to "${e.expectedLocation}".

${Wn("engine-not-found-tooling-investigation")}

${er(e)}`}var tf=N("prisma:client:engines:resolveEnginePath"),nf=()=>new RegExp("runtime[\\\\/]library\\.m?js$");async function yl(e,r){let t={binary:process.env.PRISMA_QUERY_ENGINE_BINARY,library:process.env.PRISMA_QUERY_ENGINE_LIBRARY}[e]??r.prismaPath;if(t!==void 0)return t;let{enginePath:n,searchedLocations:i}=await of(e,r);if(tf("enginePath",n),n!==void 0&&e==="binary"&&Ri(n),n!==void 0)return r.prismaPath=n;let o=await ir(),s=r.generator?.binaryTargets??[],a=s.some(d=>d.native),l=!s.some(d=>d.value===o),u=__filename.match(nf())===null,c={searchedLocations:i,generatorBinaryTargets:s,generator:r.generator,runtimeBinaryTarget:o,queryEngineName:bl(e,o),expectedLocation:Tt.default.relative(process.cwd(),r.dirname),errorStack:new Error().stack},p;throw a&&l?p=fl(c):l?p=dl(c):u?p=ml(c):p=gl(c),new P(p,r.clientVersion)}async function of(e,r){let t=await ir(),n=[],i=[r.dirname,Tt.default.resolve(__dirname,".."),r.generator?.output?.value??__dirname,Tt.default.resolve(__dirname,"../../../.prisma/client"),"/tmp/prisma-engines",r.cwd];__filename.includes("resolveEnginePath")&&i.push(fs());for(let o of i){let s=bl(e,t),a=Tt.default.join(o,s);if(n.push(o),hl.default.existsSync(a))return{enginePath:a,searchedLocations:n}}return{enginePath:void 0,searchedLocations:n}}function bl(e,r){return e==="library"?Ut(r,"fs"):`query-engine-${r}${r==="windows"?".exe":""}`}var po=A(Ni());function El(e){return e?e.replace(/".*"/g,'"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g,r=>`${r[0]}5`):""}function wl(e){return e.split(`
`).map(r=>r.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,"").replace(/\+\d+\s*ms$/,"")).join(`
`)}var xl=A(Ls());function vl({title:e,user:r="prisma",repo:t="prisma",template:n="bug_report.yml",body:i}){return(0,xl.default)({user:r,repo:t,template:n,title:e,body:i})}function Pl({version:e,binaryTarget:r,title:t,description:n,engineVersion:i,database:o,query:s}){let a=Uo(6e3-(s?.length??0)),l=wl((0,po.default)(a)),u=n?`# Description
\`\`\`
${n}
\`\`\``:"",c=(0,po.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${r?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s?El(s):""}
\`\`\`
`),p=vl({title:t,body:c});return`${t}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Y(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`}function Tl(e,r){throw new Error(r)}function sf(e){return e!==null&&typeof e=="object"&&typeof e.$type=="string"}function af(e,r){let t={};for(let n of Object.keys(e))t[n]=r(e[n],n);return t}function qr(e){return e===null?e:Array.isArray(e)?e.map(qr):typeof e=="object"?sf(e)?lf(e):e.constructor!==null&&e.constructor.name!=="Object"?e:af(e,qr):e}function lf({$type:e,value:r}){switch(e){case"BigInt":return BigInt(r);case"Bytes":{let{buffer:t,byteOffset:n,byteLength:i}=Buffer.from(r,"base64");return new Uint8Array(t,n,i)}case"DateTime":return new Date(r);case"Decimal":return new Le(r);case"Json":return JSON.parse(r);default:Tl(r,"Unknown tagged value")}}var Sl="6.15.0";function Vr({inlineDatasources:e,overrideDatasources:r,env:t,clientVersion:n}){let i,o=Object.keys(e)[0],s=e[o]?.url,a=r[o]?.url;if(o===void 0?i=void 0:a?i=a:s?.value?i=s.value:s?.fromEnvVar&&(i=t[s.fromEnvVar]),s?.fromEnvVar!==void 0&&i===void 0)throw new P(`error: Environment variable not found: ${s.fromEnvVar}.`,n);if(i===void 0)throw new P("error: Missing URL environment variable, value, or override.",n);return i}var Kn=class extends Error{clientVersion;cause;constructor(r,t){super(r),this.clientVersion=t.clientVersion,this.cause=t.cause}get[Symbol.toStringTag](){return this.name}};var se=class extends Kn{isRetryable;constructor(r,t){super(r,t),this.isRetryable=t.isRetryable??!0}};function R(e,r){return{...e,isRetryable:r}}var ur=class extends se{name="InvalidDatasourceError";code="P6001";constructor(r,t){super(r,R(t,!1))}};x(ur,"InvalidDatasourceError");function Rl(e){let r={clientVersion:e.clientVersion},t=Object.keys(e.inlineDatasources)[0],n=Vr({inlineDatasources:e.inlineDatasources,overrideDatasources:e.overrideDatasources,clientVersion:e.clientVersion,env:{...e.env,...typeof process<"u"?process.env:{}}}),i;try{i=new URL(n)}catch{throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``,r)}let{protocol:o,searchParams:s}=i;if(o!=="prisma:"&&o!==on)throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``,r);let a=s.get("api_key");if(a===null||a.length<1)throw new ur(`Error validating datasource \`${t}\`: the URL must contain a valid API key`,r);let l=Ii(i)?"http:":"https:",u=new URL(i.href.replace(o,l));return{apiKey:a,url:u}}var Al=A(nn()),Hn=class{apiKey;tracingHelper;logLevel;logQueries;engineHash;constructor({apiKey:r,tracingHelper:t,logLevel:n,logQueries:i,engineHash:o}){this.apiKey=r,this.tracingHelper=t,this.logLevel=n,this.logQueries=i,this.engineHash=o}build({traceparent:r,transactionId:t}={}){let n={Accept:"application/json",Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json","Prisma-Engine-Hash":this.engineHash,"Prisma-Engine-Version":Al.enginesVersion};this.tracingHelper.isEnabled()&&(n.traceparent=r??this.tracingHelper.getTraceParent()),t&&(n["X-Transaction-Id"]=t);let i=this.#e();return i.length>0&&(n["X-Capture-Telemetry"]=i.join(", ")),n}#e(){let r=[];return this.tracingHelper.isEnabled()&&r.push("tracing"),this.logLevel&&r.push(this.logLevel),this.logQueries&&r.push("query"),r}};function cf(e){return e[0]*1e3+e[1]/1e6}function mo(e){return new Date(cf(e))}var jr=class extends se{name="ForcedRetryError";code="P5001";constructor(r){super("This request must be retried",R(r,!0))}};x(jr,"ForcedRetryError");var cr=class extends se{name="NotImplementedYetError";code="P5004";constructor(r,t){super(r,R(t,!1))}};x(cr,"NotImplementedYetError");var $=class extends se{response;constructor(r,t){super(r,t),this.response=t.response;let n=this.response.headers.get("prisma-request-id");if(n){let i=`(The request id was: ${n})`;this.message=this.message+" "+i}}};var pr=class extends ${name="SchemaMissingError";code="P5005";constructor(r){super("Schema needs to be uploaded",R(r,!0))}};x(pr,"SchemaMissingError");var fo="This request could not be understood by the server",St=class extends ${name="BadRequestError";code="P5000";constructor(r,t,n){super(t||fo,R(r,!1)),n&&(this.code=n)}};x(St,"BadRequestError");var Rt=class extends ${name="HealthcheckTimeoutError";code="P5013";logs;constructor(r,t){super("Engine not started: healthcheck timeout",R(r,!0)),this.logs=t}};x(Rt,"HealthcheckTimeoutError");var At=class extends ${name="EngineStartupError";code="P5014";logs;constructor(r,t,n){super(t,R(r,!0)),this.logs=n}};x(At,"EngineStartupError");var Ct=class extends ${name="EngineVersionNotSupportedError";code="P5012";constructor(r){super("Engine version is not supported",R(r,!1))}};x(Ct,"EngineVersionNotSupportedError");var go="Request timed out",It=class extends ${name="GatewayTimeoutError";code="P5009";constructor(r,t=go){super(t,R(r,!1))}};x(It,"GatewayTimeoutError");var pf="Interactive transaction error",Dt=class extends ${name="InteractiveTransactionError";code="P5015";constructor(r,t=pf){super(t,R(r,!1))}};x(Dt,"InteractiveTransactionError");var df="Request parameters are invalid",Ot=class extends ${name="InvalidRequestError";code="P5011";constructor(r,t=df){super(t,R(r,!1))}};x(Ot,"InvalidRequestError");var ho="Requested resource does not exist",kt=class extends ${name="NotFoundError";code="P5003";constructor(r,t=ho){super(t,R(r,!1))}};x(kt,"NotFoundError");var yo="Unknown server error",Br=class extends ${name="ServerError";code="P5006";logs;constructor(r,t,n){super(t||yo,R(r,!0)),this.logs=n}};x(Br,"ServerError");var bo="Unauthorized, check your connection string",_t=class extends ${name="UnauthorizedError";code="P5007";constructor(r,t=bo){super(t,R(r,!1))}};x(_t,"UnauthorizedError");var Eo="Usage exceeded, retry again later",Nt=class extends ${name="UsageExceededError";code="P5008";constructor(r,t=Eo){super(t,R(r,!0))}};x(Nt,"UsageExceededError");async function mf(e){let r;try{r=await e.text()}catch{return{type:"EmptyError"}}try{let t=JSON.parse(r);if(typeof t=="string")switch(t){case"InternalDataProxyError":return{type:"DataProxyError",body:t};default:return{type:"UnknownTextError",body:t}}if(typeof t=="object"&&t!==null){if("is_panic"in t&&"message"in t&&"error_code"in t)return{type:"QueryEngineError",body:t};if("EngineNotStarted"in t||"InteractiveTransactionMisrouted"in t||"InvalidRequestError"in t){let n=Object.values(t)[0].reason;return typeof n=="string"&&!["SchemaMissing","EngineVersionNotSupported"].includes(n)?{type:"UnknownJsonError",body:t}:{type:"DataProxyError",body:t}}}return{type:"UnknownJsonError",body:t}}catch{return r===""?{type:"EmptyError"}:{type:"UnknownTextError",body:r}}}async function Lt(e,r){if(e.ok)return;let t={clientVersion:r,response:e},n=await mf(e);if(n.type==="QueryEngineError")throw new z(n.body.message,{code:n.body.error_code,clientVersion:r});if(n.type==="DataProxyError"){if(n.body==="InternalDataProxyError")throw new Br(t,"Internal Data Proxy error");if("EngineNotStarted"in n.body){if(n.body.EngineNotStarted.reason==="SchemaMissing")return new pr(t);if(n.body.EngineNotStarted.reason==="EngineVersionNotSupported")throw new Ct(t);if("EngineStartupError"in n.body.EngineNotStarted.reason){let{msg:i,logs:o}=n.body.EngineNotStarted.reason.EngineStartupError;throw new At(t,i,o)}if("KnownEngineStartupError"in n.body.EngineNotStarted.reason){let{msg:i,error_code:o}=n.body.EngineNotStarted.reason.KnownEngineStartupError;throw new P(i,r,o)}if("HealthcheckTimeout"in n.body.EngineNotStarted.reason){let{logs:i}=n.body.EngineNotStarted.reason.HealthcheckTimeout;throw new Rt(t,i)}}if("InteractiveTransactionMisrouted"in n.body){let i={IDParseError:"Could not parse interactive transaction ID",NoQueryEngineFoundError:"Could not find Query Engine for the specified host and transaction ID",TransactionStartError:"Could not start interactive transaction"};throw new Dt(t,i[n.body.InteractiveTransactionMisrouted.reason])}if("InvalidRequestError"in n.body)throw new Ot(t,n.body.InvalidRequestError.reason)}if(e.status===401||e.status===403)throw new _t(t,Ur(bo,n));if(e.status===404)return new kt(t,Ur(ho,n));if(e.status===429)throw new Nt(t,Ur(Eo,n));if(e.status===504)throw new It(t,Ur(go,n));if(e.status>=500)throw new Br(t,Ur(yo,n));if(e.status>=400)throw new St(t,Ur(fo,n))}function Ur(e,r){return r.type==="EmptyError"?e:`${e}: ${JSON.stringify(r)}`}function Cl(e){let r=Math.pow(2,e)*50,t=Math.ceil(Math.random()*r)-Math.ceil(r/2),n=r+t;return new Promise(i=>setTimeout(()=>i(n),n))}var $e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Il(e){let r=new TextEncoder().encode(e),t="",n=r.byteLength,i=n%3,o=n-i,s,a,l,u,c;for(let p=0;p<o;p=p+3)c=r[p]<<16|r[p+1]<<8|r[p+2],s=(c&16515072)>>18,a=(c&258048)>>12,l=(c&4032)>>6,u=c&63,t+=$e[s]+$e[a]+$e[l]+$e[u];return i==1?(c=r[o],s=(c&252)>>2,a=(c&3)<<4,t+=$e[s]+$e[a]+"=="):i==2&&(c=r[o]<<8|r[o+1],s=(c&64512)>>10,a=(c&1008)>>4,l=(c&15)<<2,t+=$e[s]+$e[a]+$e[l]+"="),t}function Dl(e){if(!!e.generator?.previewFeatures.some(t=>t.toLowerCase().includes("metrics")))throw new P("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",e.clientVersion)}var Ol={"@prisma/debug":"workspace:*","@prisma/engines-version":"6.15.0-5.85179d7826409ee107a6ba334b5e305ae3fba9fb","@prisma/fetch-engine":"workspace:*","@prisma/get-platform":"workspace:*"};var Ft=class extends se{name="RequestError";code="P5010";constructor(r,t){super(`Cannot fetch data from service:
${r}`,R(t,!0))}};x(Ft,"RequestError");async function dr(e,r,t=n=>n){let{clientVersion:n,...i}=r,o=t(fetch);try{return await o(e,i)}catch(s){let a=s.message??"Unknown error";throw new Ft(a,{clientVersion:n,cause:s})}}var gf=/^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,kl=N("prisma:client:dataproxyEngine");async function hf(e,r){let t=Ol["@prisma/engines-version"],n=r.clientVersion??"unknown";if(process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION||globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION||globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;if(e.includes("accelerate")&&n!=="0.0.0"&&n!=="in-memory")return n;let[i,o]=n?.split("-")??[];if(o===void 0&&gf.test(i))return i;if(o!==void 0||n==="0.0.0"||n==="in-memory"){let[s]=t.split("-")??[],[a,l,u]=s.split("."),c=yf(`<=${a}.${l}.${u}`),p=await dr(c,{clientVersion:n});if(!p.ok)throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text()||"<empty body>"}`);let d=await p.text();kl("length of body fetched from unpkg.com",d.length);let f;try{f=JSON.parse(d)}catch(h){throw console.error("JSON.parse error: body fetched from unpkg.com: ",d),h}return f.version}throw new cr("Only `major.minor.patch` versions are supported by Accelerate.",{clientVersion:n})}async function _l(e,r){let t=await hf(e,r);return kl("version",t),t}function yf(e){return encodeURI(`https://unpkg.com/prisma@${e}/package.json`)}var Nl=3,Mt=N("prisma:client:dataproxyEngine"),$t=class{name="DataProxyEngine";inlineSchema;inlineSchemaHash;inlineDatasources;config;logEmitter;env;clientVersion;engineHash;tracingHelper;remoteClientVersion;host;headerBuilder;startPromise;protocol;constructor(r){Dl(r),this.config=r,this.env=r.env,this.inlineSchema=Il(r.inlineSchema),this.inlineDatasources=r.inlineDatasources,this.inlineSchemaHash=r.inlineSchemaHash,this.clientVersion=r.clientVersion,this.engineHash=r.engineVersion,this.logEmitter=r.logEmitter,this.tracingHelper=r.tracingHelper}apiKey(){return this.headerBuilder.apiKey}version(){return this.engineHash}async start(){this.startPromise!==void 0&&await this.startPromise,this.startPromise=(async()=>{let{apiKey:r,url:t}=this.getURLAndAPIKey();this.host=t.host,this.protocol=t.protocol,this.headerBuilder=new Hn({apiKey:r,tracingHelper:this.tracingHelper,logLevel:this.config.logLevel??"error",logQueries:this.config.logQueries,engineHash:this.engineHash}),this.remoteClientVersion=await _l(this.host,this.config),Mt("host",this.host),Mt("protocol",this.protocol)})(),await this.startPromise}async stop(){}propagateResponseExtensions(r){r?.logs?.length&&r.logs.forEach(t=>{switch(t.level){case"debug":case"trace":Mt(t);break;case"error":case"warn":case"info":{this.logEmitter.emit(t.level,{timestamp:mo(t.timestamp),message:t.attributes.message??"",target:t.target});break}case"query":{this.logEmitter.emit("query",{query:t.attributes.query??"",timestamp:mo(t.timestamp),duration:t.attributes.duration_ms??0,params:t.attributes.params??"",target:t.target});break}default:t.level}}),r?.traces?.length&&this.tracingHelper.dispatchEngineSpans(r.traces)}onBeforeExit(){throw new Error('"beforeExit" hook is not applicable to the remote query engine')}async url(r){return await this.start(),`${this.protocol}//${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`}async uploadSchema(){let r={name:"schemaUpload",internal:!0};return this.tracingHelper.runInChildSpan(r,async()=>{let t=await dr(await this.url("schema"),{method:"PUT",headers:this.headerBuilder.build(),body:this.inlineSchema,clientVersion:this.clientVersion});t.ok||Mt("schema response status",t.status);let n=await Lt(t,this.clientVersion);if(n)throw this.logEmitter.emit("warn",{message:`Error while uploading schema: ${n.message}`,timestamp:new Date,target:""}),n;this.logEmitter.emit("info",{message:`Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,timestamp:new Date,target:""})})}request(r,{traceparent:t,interactiveTransaction:n,customDataProxyFetch:i}){return this.requestInternal({body:r,traceparent:t,interactiveTransaction:n,customDataProxyFetch:i})}async requestBatch(r,{traceparent:t,transaction:n,customDataProxyFetch:i}){let o=n?.kind==="itx"?n.options:void 0,s=Fr(r,n);return(await this.requestInternal({body:s,customDataProxyFetch:i,interactiveTransaction:o,traceparent:t})).map(l=>(l.extensions&&this.propagateResponseExtensions(l.extensions),"errors"in l?this.convertProtocolErrorsToClientError(l.errors):l))}requestInternal({body:r,traceparent:t,customDataProxyFetch:n,interactiveTransaction:i}){return this.withRetry({actionGerund:"querying",callback:async({logHttpCall:o})=>{let s=i?`${i.payload.endpoint}/graphql`:await this.url("graphql");o(s);let a=await dr(s,{method:"POST",headers:this.headerBuilder.build({traceparent:t,transactionId:i?.id}),body:JSON.stringify(r),clientVersion:this.clientVersion},n);a.ok||Mt("graphql response status",a.status),await this.handleError(await Lt(a,this.clientVersion));let l=await a.json();if(l.extensions&&this.propagateResponseExtensions(l.extensions),"errors"in l)throw this.convertProtocolErrorsToClientError(l.errors);return"batchResult"in l?l.batchResult:l}})}async transaction(r,t,n){let i={start:"starting",commit:"committing",rollback:"rolling back"};return this.withRetry({actionGerund:`${i[r]} transaction`,callback:async({logHttpCall:o})=>{if(r==="start"){let s=JSON.stringify({max_wait:n.maxWait,timeout:n.timeout,isolation_level:n.isolationLevel}),a=await this.url("transaction/start");o(a);let l=await dr(a,{method:"POST",headers:this.headerBuilder.build({traceparent:t.traceparent}),body:s,clientVersion:this.clientVersion});await this.handleError(await Lt(l,this.clientVersion));let u=await l.json(),{extensions:c}=u;c&&this.propagateResponseExtensions(c);let p=u.id,d=u["data-proxy"].endpoint;return{id:p,payload:{endpoint:d}}}else{let s=`${n.payload.endpoint}/${r}`;o(s);let a=await dr(s,{method:"POST",headers:this.headerBuilder.build({traceparent:t.traceparent}),clientVersion:this.clientVersion});await this.handleError(await Lt(a,this.clientVersion));let l=await a.json(),{extensions:u}=l;u&&this.propagateResponseExtensions(u);return}}})}getURLAndAPIKey(){return Rl({clientVersion:this.clientVersion,env:this.env,inlineDatasources:this.inlineDatasources,overrideDatasources:this.config.overrideDatasources})}metrics(){throw new cr("Metrics are not yet supported for Accelerate",{clientVersion:this.clientVersion})}async withRetry(r){for(let t=0;;t++){let n=i=>{this.logEmitter.emit("info",{message:`Calling ${i} (n=${t})`,timestamp:new Date,target:""})};try{return await r.callback({logHttpCall:n})}catch(i){if(!(i instanceof se)||!i.isRetryable)throw i;if(t>=Nl)throw i instanceof jr?i.cause:i;this.logEmitter.emit("warn",{message:`Attempt ${t+1}/${Nl} failed for ${r.actionGerund}: ${i.message??"(unknown)"}`,timestamp:new Date,target:""});let o=await Cl(t);this.logEmitter.emit("warn",{message:`Retrying after ${o}ms`,timestamp:new Date,target:""})}}}async handleError(r){if(r instanceof pr)throw await this.uploadSchema(),new jr({clientVersion:this.clientVersion,cause:r});if(r)throw r}convertProtocolErrorsToClientError(r){return r.length===1?Mr(r[0],this.config.clientVersion,this.config.activeProvider):new V(JSON.stringify(r),{clientVersion:this.config.clientVersion})}applyPendingMigrations(){throw new Error("Method not implemented.")}};function Ll(e){if(e?.kind==="itx")return e.options.id}var xo=A(__webpack_require__(8161)),Fl=A(__webpack_require__(6760));var wo=Symbol("PrismaLibraryEngineCache");function bf(){let e=globalThis;return e[wo]===void 0&&(e[wo]={}),e[wo]}function Ef(e){let r=bf();if(r[e]!==void 0)return r[e];let t=Fl.default.toNamespacedPath(e),n={exports:{}},i=0;return process.platform!=="win32"&&(i=xo.default.constants.dlopen.RTLD_LAZY|xo.default.constants.dlopen.RTLD_DEEPBIND),process.dlopen(n,t,i),r[e]=n.exports,n.exports}var Ml={async loadLibrary(e){let r=await fi(),t=await yl("library",e);try{return e.tracingHelper.runInChildSpan({name:"loadLibrary",internal:!0},()=>Ef(t))}catch(n){let i=Ai({e:n,platformInfo:r,id:t});throw new P(i,e.clientVersion)}}};var vo,$l={async loadLibrary(e){let{clientVersion:r,adapter:t,engineWasm:n}=e;if(t===void 0)throw new P(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Gn().prettyName})`,r);if(n===void 0)throw new P("WASM engine was unexpectedly `undefined`",r);vo===void 0&&(vo=(async()=>{let o=await n.getRuntime(),s=await n.getQueryEngineWasmModule();if(s==null)throw new P("The loaded wasm module was unexpectedly `undefined` or `null` once loaded",r);let a={"./query_engine_bg.js":o},l=new WebAssembly.Instance(s,a),u=l.exports.__wbindgen_start;return o.__wbg_set_wasm(l.exports),u(),o.QueryEngine})());let i=await vo;return{debugPanic(){return Promise.reject("{}")},dmmf(){return Promise.resolve("{}")},version(){return{commit:"unknown",version:"unknown"}},QueryEngine:i}}};var wf="P2036",Re=N("prisma:client:libraryEngine");function xf(e){return e.item_type==="query"&&"query"in e}function vf(e){return"level"in e?e.level==="error"&&e.message==="PANIC":!1}var ql=[...li,"native"],Pf=0xffffffffffffffffn,Po=1n;function Tf(){let e=Po++;return Po>Pf&&(Po=1n),e}var Gr=class{name="LibraryEngine";engine;libraryInstantiationPromise;libraryStartingPromise;libraryStoppingPromise;libraryStarted;executingQueryPromise;config;QueryEngineConstructor;libraryLoader;library;logEmitter;libQueryEnginePath;binaryTarget;datasourceOverrides;datamodel;logQueries;logLevel;lastQuery;loggerRustPanic;tracingHelper;adapterPromise;versionInfo;constructor(r,t){this.libraryLoader=t??Ml,r.engineWasm!==void 0&&(this.libraryLoader=t??$l),this.config=r,this.libraryStarted=!1,this.logQueries=r.logQueries??!1,this.logLevel=r.logLevel??"error",this.logEmitter=r.logEmitter,this.datamodel=r.inlineSchema,this.tracingHelper=r.tracingHelper,r.enableDebugLogs&&(this.logLevel="debug");let n=Object.keys(r.overrideDatasources)[0],i=r.overrideDatasources[n]?.url;n!==void 0&&i!==void 0&&(this.datasourceOverrides={[n]:i}),this.libraryInstantiationPromise=this.instantiateLibrary()}wrapEngine(r){return{applyPendingMigrations:r.applyPendingMigrations?.bind(r),commitTransaction:this.withRequestId(r.commitTransaction.bind(r)),connect:this.withRequestId(r.connect.bind(r)),disconnect:this.withRequestId(r.disconnect.bind(r)),metrics:r.metrics?.bind(r),query:this.withRequestId(r.query.bind(r)),rollbackTransaction:this.withRequestId(r.rollbackTransaction.bind(r)),sdlSchema:r.sdlSchema?.bind(r),startTransaction:this.withRequestId(r.startTransaction.bind(r)),trace:r.trace.bind(r),free:r.free?.bind(r)}}withRequestId(r){return async(...t)=>{let n=Tf().toString();try{return await r(...t,n)}finally{if(this.tracingHelper.isEnabled()){let i=await this.engine?.trace(n);if(i){let o=JSON.parse(i);this.tracingHelper.dispatchEngineSpans(o.spans)}}}}}async applyPendingMigrations(){throw new Error("Cannot call this method from this type of engine instance")}async transaction(r,t,n){await this.start();let i=await this.adapterPromise,o=JSON.stringify(t),s;if(r==="start"){let l=JSON.stringify({max_wait:n.maxWait,timeout:n.timeout,isolation_level:n.isolationLevel});s=await this.engine?.startTransaction(l,o)}else r==="commit"?s=await this.engine?.commitTransaction(n.id,o):r==="rollback"&&(s=await this.engine?.rollbackTransaction(n.id,o));let a=this.parseEngineResponse(s);if(Sf(a)){let l=this.getExternalAdapterError(a,i?.errorRegistry);throw l?l.error:new z(a.message,{code:a.error_code,clientVersion:this.config.clientVersion,meta:a.meta})}else if(typeof a.message=="string")throw new V(a.message,{clientVersion:this.config.clientVersion});return a}async instantiateLibrary(){if(Re("internalSetup"),this.libraryInstantiationPromise)return this.libraryInstantiationPromise;ai(),this.binaryTarget=await this.getCurrentBinaryTarget(),await this.tracingHelper.runInChildSpan("load_engine",()=>this.loadEngine()),this.version()}async getCurrentBinaryTarget(){{if(this.binaryTarget)return this.binaryTarget;let r=await this.tracingHelper.runInChildSpan("detect_platform",()=>ir());if(!ql.includes(r))throw new P(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(W(r))}. Possible binaryTargets: ${qe(ql.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`,this.config.clientVersion);return r}}parseEngineResponse(r){if(!r)throw new V("Response from the Engine was empty",{clientVersion:this.config.clientVersion});try{return JSON.parse(r)}catch{throw new V("Unable to JSON.parse response from engine",{clientVersion:this.config.clientVersion})}}async loadEngine(){if(!this.engine){this.QueryEngineConstructor||(this.library=await this.libraryLoader.loadLibrary(this.config),this.QueryEngineConstructor=this.library.QueryEngine);try{let r=new WeakRef(this);this.adapterPromise||(this.adapterPromise=this.config.adapter?.connect()?.then(rn));let t=await this.adapterPromise;t&&Re("Using driver adapter: %O",t),this.engine=this.wrapEngine(new this.QueryEngineConstructor({datamodel:this.datamodel,env:process.env,logQueries:this.config.logQueries??!1,ignoreEnvVarErrors:!0,datasourceOverrides:this.datasourceOverrides??{},logLevel:this.logLevel,configDir:this.config.cwd,engineProtocol:"json",enableTracing:this.tracingHelper.isEnabled()},n=>{r.deref()?.logger(n)},t))}catch(r){let t=r,n=this.parseInitError(t.message);throw typeof n=="string"?t:new P(n.message,this.config.clientVersion,n.error_code)}}}logger(r){let t=this.parseEngineResponse(r);t&&(t.level=t?.level.toLowerCase()??"unknown",xf(t)?this.logEmitter.emit("query",{timestamp:new Date,query:t.query,params:t.params,duration:Number(t.duration_ms),target:t.module_path}):vf(t)?this.loggerRustPanic=new le(To(this,`${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`),this.config.clientVersion):this.logEmitter.emit(t.level,{timestamp:new Date,message:t.message,target:t.module_path}))}parseInitError(r){try{return JSON.parse(r)}catch{}return r}parseRequestError(r){try{return JSON.parse(r)}catch{}return r}onBeforeExit(){throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.')}async start(){if(this.libraryInstantiationPromise||(this.libraryInstantiationPromise=this.instantiateLibrary()),await this.libraryInstantiationPromise,await this.libraryStoppingPromise,this.libraryStartingPromise)return Re(`library already starting, this.libraryStarted: ${this.libraryStarted}`),this.libraryStartingPromise;if(this.libraryStarted)return;let r=async()=>{Re("library starting");try{let t={traceparent:this.tracingHelper.getTraceParent()};await this.engine?.connect(JSON.stringify(t)),this.libraryStarted=!0,this.adapterPromise||(this.adapterPromise=this.config.adapter?.connect()?.then(rn)),await this.adapterPromise,Re("library started")}catch(t){let n=this.parseInitError(t.message);throw typeof n=="string"?t:new P(n.message,this.config.clientVersion,n.error_code)}finally{this.libraryStartingPromise=void 0}};return this.libraryStartingPromise=this.tracingHelper.runInChildSpan("connect",r),this.libraryStartingPromise}async stop(){if(await this.libraryInstantiationPromise,await this.libraryStartingPromise,await this.executingQueryPromise,this.libraryStoppingPromise)return Re("library is already stopping"),this.libraryStoppingPromise;if(!this.libraryStarted){await(await this.adapterPromise)?.dispose(),this.adapterPromise=void 0;return}let r=async()=>{await new Promise(n=>setImmediate(n)),Re("library stopping");let t={traceparent:this.tracingHelper.getTraceParent()};await this.engine?.disconnect(JSON.stringify(t)),this.engine?.free&&this.engine.free(),this.engine=void 0,this.libraryStarted=!1,this.libraryStoppingPromise=void 0,this.libraryInstantiationPromise=void 0,await(await this.adapterPromise)?.dispose(),this.adapterPromise=void 0,Re("library stopped")};return this.libraryStoppingPromise=this.tracingHelper.runInChildSpan("disconnect",r),this.libraryStoppingPromise}version(){return this.versionInfo=this.library?.version(),this.versionInfo?.version??"unknown"}debugPanic(r){return this.library?.debugPanic(r)}async request(r,{traceparent:t,interactiveTransaction:n}){Re(`sending request, this.libraryStarted: ${this.libraryStarted}`);let i=JSON.stringify({traceparent:t}),o=JSON.stringify(r);try{await this.start();let s=await this.adapterPromise;this.executingQueryPromise=this.engine?.query(o,i,n?.id),this.lastQuery=o;let a=this.parseEngineResponse(await this.executingQueryPromise);if(a.errors)throw a.errors.length===1?this.buildQueryError(a.errors[0],s?.errorRegistry):new V(JSON.stringify(a.errors),{clientVersion:this.config.clientVersion});if(this.loggerRustPanic)throw this.loggerRustPanic;return{data:a}}catch(s){if(s instanceof P)throw s;if(s.code==="GenericFailure"&&s.message?.startsWith("PANIC:"))throw new le(To(this,s.message),this.config.clientVersion);let a=this.parseRequestError(s.message);throw typeof a=="string"?s:new V(`${a.message}
${a.backtrace}`,{clientVersion:this.config.clientVersion})}}async requestBatch(r,{transaction:t,traceparent:n}){Re("requestBatch");let i=Fr(r,t);await this.start();let o=await this.adapterPromise;this.lastQuery=JSON.stringify(i),this.executingQueryPromise=this.engine?.query(this.lastQuery,JSON.stringify({traceparent:n}),Ll(t));let s=await this.executingQueryPromise,a=this.parseEngineResponse(s);if(a.errors)throw a.errors.length===1?this.buildQueryError(a.errors[0],o?.errorRegistry):new V(JSON.stringify(a.errors),{clientVersion:this.config.clientVersion});let{batchResult:l,errors:u}=a;if(Array.isArray(l))return l.map(c=>c.errors&&c.errors.length>0?this.loggerRustPanic??this.buildQueryError(c.errors[0],o?.errorRegistry):{data:c});throw u&&u.length===1?new Error(u[0].error):new Error(JSON.stringify(a))}buildQueryError(r,t){if(r.user_facing_error.is_panic)return new le(To(this,r.user_facing_error.message),this.config.clientVersion);let n=this.getExternalAdapterError(r.user_facing_error,t);return n?n.error:Mr(r,this.config.clientVersion,this.config.activeProvider)}getExternalAdapterError(r,t){if(r.error_code===wf&&t){let n=r.meta?.id;an(typeof n=="number","Malformed external JS error received from the engine");let i=t.consumeError(n);return an(i,"External error with reported id was not registered"),i}}async metrics(r){await this.start();let t=await this.engine.metrics(JSON.stringify(r));return r.format==="prometheus"?t:this.parseEngineResponse(t)}};function Sf(e){return typeof e=="object"&&e!==null&&e.error_code!==void 0}function To(e,r){return Pl({binaryTarget:e.binaryTarget,title:r,version:e.config.clientVersion,engineVersion:e.versionInfo?.commit,database:e.config.activeProvider,query:e.lastQuery})}function Vl({url:e,adapter:r,copyEngine:t,targetBuildType:n}){let i=[],o=[],s=g=>{i.push({_tag:"warning",value:g})},a=g=>{let D=g.join(`
`);o.push({_tag:"error",value:D})},l=!!e?.startsWith("prisma://"),u=sn(e),c=!!r,p=l||u;!c&&t&&p&&s(["recommend--no-engine","In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"]);let d=p||!t;c&&(d||n==="edge")&&(n==="edge"?a(["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.","Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."]):t?l&&a(["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.","Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."]):a(["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.","Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."]));let f={accelerate:d,ppg:u,driverAdapters:c};function h(g){return g.length>0}return h(o)?{ok:!1,diagnostics:{warnings:i,errors:o},isUsing:f}:{ok:!0,diagnostics:{warnings:i},isUsing:f}}function jl({copyEngine:e=!0},r){let t;try{t=Vr({inlineDatasources:r.inlineDatasources,overrideDatasources:r.overrideDatasources,env:{...r.env,...process.env},clientVersion:r.clientVersion})}catch{}let{ok:n,isUsing:i,diagnostics:o}=Vl({url:t,adapter:r.adapter,copyEngine:e,targetBuildType:"library"});for(let p of o.warnings)st(...p.value);if(!n){let p=o.errors[0];throw new Z(p.value,{clientVersion:r.clientVersion})}let s=Er(r.generator),a=s==="library",l=s==="binary",u=s==="client",c=(i.accelerate||i.ppg)&&!i.driverAdapters;return i.accelerate?new $t(r):(i.driverAdapters,a?new Gr(r):(i.accelerate,new Gr(r)))}function Yn({generator:e}){return e?.previewFeatures??[]}var Bl=e=>({command:e});var Ul=e=>e.strings.reduce((r,t,n)=>`${r}@P${n}${t}`);function Qr(e){try{return Gl(e,"fast")}catch{return Gl(e,"slow")}}function Gl(e,r){return JSON.stringify(e.map(t=>Wl(t,r)))}function Wl(e,r){if(Array.isArray(e))return e.map(t=>Wl(t,r));if(typeof e=="bigint")return{prisma__type:"bigint",prisma__value:e.toString()};if(xr(e))return{prisma__type:"date",prisma__value:e.toJSON()};if(Fe.isDecimal(e))return{prisma__type:"decimal",prisma__value:e.toJSON()};if(Buffer.isBuffer(e))return{prisma__type:"bytes",prisma__value:e.toString("base64")};if(Rf(e))return{prisma__type:"bytes",prisma__value:Buffer.from(e).toString("base64")};if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:n,byteLength:i}=e;return{prisma__type:"bytes",prisma__value:Buffer.from(t,n,i).toString("base64")}}return typeof e=="object"&&r==="slow"?Jl(e):e}function Rf(e){return e instanceof ArrayBuffer||e instanceof SharedArrayBuffer?!0:typeof e=="object"&&e!==null?e[Symbol.toStringTag]==="ArrayBuffer"||e[Symbol.toStringTag]==="SharedArrayBuffer":!1}function Jl(e){if(typeof e!="object"||e===null)return e;if(typeof e.toJSON=="function")return e.toJSON();if(Array.isArray(e))return e.map(Ql);let r={};for(let t of Object.keys(e))r[t]=Ql(e[t]);return r}function Ql(e){return typeof e=="bigint"?e.toString():Jl(e)}var Af=/^(\s*alter\s)/i,Kl=N("prisma:client");function So(e,r,t,n){if(!(e!=="postgresql"&&e!=="cockroachdb")&&t.length>0&&Af.exec(r))throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)}var Ro=({clientMethod:e,activeProvider:r})=>t=>{let n="",i;if(qn(t))n=t.sql,i={values:Qr(t.values),__prismaRawParameters__:!0};else if(Array.isArray(t)){let[o,...s]=t;n=o,i={values:Qr(s||[]),__prismaRawParameters__:!0}}else switch(r){case"sqlite":case"mysql":{n=t.sql,i={values:Qr(t.values),__prismaRawParameters__:!0};break}case"cockroachdb":case"postgresql":case"postgres":{n=t.text,i={values:Qr(t.values),__prismaRawParameters__:!0};break}case"sqlserver":{n=Ul(t),i={values:Qr(t.values),__prismaRawParameters__:!0};break}default:throw new Error(`The ${r} provider does not support ${e}`)}return i?.values?Kl(`prisma.${e}(${n}, ${i.values})`):Kl(`prisma.${e}(${n})`),{query:n,parameters:i}},Hl={requestArgsToMiddlewareArgs(e){return[e.strings,...e.values]},middlewareArgsToRequestArgs(e){let[r,...t]=e;return new oe(r,t)}},Yl={requestArgsToMiddlewareArgs(e){return[e]},middlewareArgsToRequestArgs(e){return e[0]}};function Ao(e){return function(t,n){let i,o=(s=e)=>{try{return s===void 0||s?.kind==="itx"?i??=zl(t(s)):zl(t(s))}catch(a){return Promise.reject(a)}};return{get spec(){return n},then(s,a){return o().then(s,a)},catch(s){return o().catch(s)},finally(s){return o().finally(s)},requestTransaction(s){let a=o(s);return a.requestTransaction?a.requestTransaction(s):a},[Symbol.toStringTag]:"PrismaPromise"}}}function zl(e){return typeof e.then=="function"?e:Promise.resolve(e)}var Cf=xi.split(".")[0],If={isEnabled(){return!1},getTraceParent(){return"00-10-10-00"},dispatchEngineSpans(){},getActiveContext(){},runInChildSpan(e,r){return r()}},Co=class{isEnabled(){return this.getGlobalTracingHelper().isEnabled()}getTraceParent(r){return this.getGlobalTracingHelper().getTraceParent(r)}dispatchEngineSpans(r){return this.getGlobalTracingHelper().dispatchEngineSpans(r)}getActiveContext(){return this.getGlobalTracingHelper().getActiveContext()}runInChildSpan(r,t){return this.getGlobalTracingHelper().runInChildSpan(r,t)}getGlobalTracingHelper(){let r=globalThis[`V${Cf}_PRISMA_INSTRUMENTATION`],t=globalThis.PRISMA_INSTRUMENTATION;return r?.helper??t?.helper??If}};function Zl(){return new Co}function Xl(e,r=()=>{}){let t,n=new Promise(i=>t=i);return{then(i){return--e===0&&t(r()),i?.(n)}}}function eu(e){return typeof e=="string"?e:e.reduce((r,t)=>{let n=typeof t=="string"?t:t.level;return n==="query"?r:r&&(t==="info"||r==="info")?"info":n},void 0)}var tu=A(Ni());function zn(e){return typeof e.batchRequestIdx=="number"}function ru(e){if(e.action!=="findUnique"&&e.action!=="findUniqueOrThrow")return;let r=[];return e.modelName&&r.push(e.modelName),e.query.arguments&&r.push(Io(e.query.arguments)),r.push(Io(e.query.selection)),r.join("")}function Io(e){return`(${Object.keys(e).sort().map(t=>{let n=e[t];return typeof n=="object"&&n!==null?`(${t} ${Io(n)})`:t}).join(" ")})`}var Df={aggregate:!1,aggregateRaw:!1,createMany:!0,createManyAndReturn:!0,createOne:!0,deleteMany:!0,deleteOne:!0,executeRaw:!0,findFirst:!1,findFirstOrThrow:!1,findMany:!1,findRaw:!1,findUnique:!1,findUniqueOrThrow:!1,groupBy:!1,queryRaw:!1,runCommandRaw:!0,updateMany:!0,updateManyAndReturn:!0,updateOne:!0,upsertOne:!0};function Do(e){return Df[e]}var Zn=class{constructor(r){this.options=r;this.batches={}}batches;tickActive=!1;request(r){let t=this.options.batchBy(r);return t?(this.batches[t]||(this.batches[t]=[],this.tickActive||(this.tickActive=!0,process.nextTick(()=>{this.dispatchBatches(),this.tickActive=!1}))),new Promise((n,i)=>{this.batches[t].push({request:r,resolve:n,reject:i})})):this.options.singleLoader(r)}dispatchBatches(){for(let r in this.batches){let t=this.batches[r];delete this.batches[r],t.length===1?this.options.singleLoader(t[0].request).then(n=>{n instanceof Error?t[0].reject(n):t[0].resolve(n)}).catch(n=>{t[0].reject(n)}):(t.sort((n,i)=>this.options.batchOrder(n.request,i.request)),this.options.batchLoader(t.map(n=>n.request)).then(n=>{if(n instanceof Error)for(let i=0;i<t.length;i++)t[i].reject(n);else for(let i=0;i<t.length;i++){let o=n[i];o instanceof Error?t[i].reject(o):t[i].resolve(o)}}).catch(n=>{for(let i=0;i<t.length;i++)t[i].reject(n)}))}}get[Symbol.toStringTag](){return"DataLoader"}};function mr(e,r){if(r===null)return r;switch(e){case"bigint":return BigInt(r);case"bytes":{let{buffer:t,byteOffset:n,byteLength:i}=Buffer.from(r,"base64");return new Uint8Array(t,n,i)}case"decimal":return new Fe(r);case"datetime":case"date":return new Date(r);case"time":return new Date(`1970-01-01T${r}Z`);case"bigint-array":return r.map(t=>mr("bigint",t));case"bytes-array":return r.map(t=>mr("bytes",t));case"decimal-array":return r.map(t=>mr("decimal",t));case"datetime-array":return r.map(t=>mr("datetime",t));case"date-array":return r.map(t=>mr("date",t));case"time-array":return r.map(t=>mr("time",t));default:return r}}function Xn(e){let r=[],t=Of(e);for(let n=0;n<e.rows.length;n++){let i=e.rows[n],o={...t};for(let s=0;s<i.length;s++)o[e.columns[s]]=mr(e.types[s],i[s]);r.push(o)}return r}function Of(e){let r={};for(let t=0;t<e.columns.length;t++)r[e.columns[t]]=null;return r}var kf=N("prisma:client:request_handler"),ei=class{client;dataloader;logEmitter;constructor(r,t){this.logEmitter=t,this.client=r,this.dataloader=new Zn({batchLoader:ol(async({requests:n,customDataProxyFetch:i})=>{let{transaction:o,otelParentCtx:s}=n[0],a=n.map(p=>p.protocolQuery),l=this.client._tracingHelper.getTraceParent(s),u=n.some(p=>Do(p.protocolQuery.action));return(await this.client._engine.requestBatch(a,{traceparent:l,transaction:_f(o),containsWrite:u,customDataProxyFetch:i})).map((p,d)=>{if(p instanceof Error)return p;try{return this.mapQueryEngineResult(n[d],p)}catch(f){return f}})}),singleLoader:async n=>{let i=n.transaction?.kind==="itx"?nu(n.transaction):void 0,o=await this.client._engine.request(n.protocolQuery,{traceparent:this.client._tracingHelper.getTraceParent(),interactiveTransaction:i,isWrite:Do(n.protocolQuery.action),customDataProxyFetch:n.customDataProxyFetch});return this.mapQueryEngineResult(n,o)},batchBy:n=>n.transaction?.id?`transaction-${n.transaction.id}`:ru(n.protocolQuery),batchOrder(n,i){return n.transaction?.kind==="batch"&&i.transaction?.kind==="batch"?n.transaction.index-i.transaction.index:0}})}async request(r){try{return await this.dataloader.request(r)}catch(t){let{clientMethod:n,callsite:i,transaction:o,args:s,modelName:a}=r;this.handleAndLogRequestError({error:t,clientMethod:n,callsite:i,transaction:o,args:s,modelName:a,globalOmit:r.globalOmit})}}mapQueryEngineResult({dataPath:r,unpacker:t},n){let i=n?.data,o=this.unpack(i,r,t);return process.env.PRISMA_CLIENT_GET_TIME?{data:o}:o}handleAndLogRequestError(r){try{this.handleRequestError(r)}catch(t){throw this.logEmitter&&this.logEmitter.emit("error",{message:t.message,target:r.clientMethod,timestamp:new Date}),t}}handleRequestError({error:r,clientMethod:t,callsite:n,transaction:i,args:o,modelName:s,globalOmit:a}){if(kf(r),Nf(r,i))throw r;if(r instanceof z&&Lf(r)){let u=iu(r.meta);_n({args:o,errors:[u],callsite:n,errorFormat:this.client._errorFormat,originalMethod:t,clientVersion:this.client._clientVersion,globalOmit:a})}let l=r.message;if(n&&(l=Pn({callsite:n,originalMethod:t,isPanic:r.isPanic,showColors:this.client._errorFormat==="pretty",message:l})),l=this.sanitizeMessage(l),r.code){let u=s?{modelName:s,...r.meta}:r.meta;throw new z(l,{code:r.code,clientVersion:this.client._clientVersion,meta:u,batchRequestIdx:r.batchRequestIdx})}else{if(r.isPanic)throw new le(l,this.client._clientVersion);if(r instanceof V)throw new V(l,{clientVersion:this.client._clientVersion,batchRequestIdx:r.batchRequestIdx});if(r instanceof P)throw new P(l,this.client._clientVersion);if(r instanceof le)throw new le(l,this.client._clientVersion)}throw r.clientVersion=this.client._clientVersion,r}sanitizeMessage(r){return this.client._errorFormat&&this.client._errorFormat!=="pretty"?(0,tu.default)(r):r}unpack(r,t,n){if(!r||(r.data&&(r=r.data),!r))return r;let i=Object.keys(r)[0],o=Object.values(r)[0],s=t.filter(u=>u!=="select"&&u!=="include"),a=ao(o,s),l=i==="queryRaw"?Xn(a):qr(a);return n?n(l):l}get[Symbol.toStringTag](){return"RequestHandler"}};function _f(e){if(e){if(e.kind==="batch")return{kind:"batch",options:{isolationLevel:e.isolationLevel}};if(e.kind==="itx")return{kind:"itx",options:nu(e)};ar(e,"Unknown transaction kind")}}function nu(e){return{id:e.id,payload:e.payload}}function Nf(e,r){return zn(e)&&r?.kind==="batch"&&e.batchRequestIdx!==r.index}function Lf(e){return e.code==="P2009"||e.code==="P2012"}function iu(e){if(e.kind==="Union")return{kind:"Union",errors:e.errors.map(iu)};if(Array.isArray(e.selectionPath)){let[,...r]=e.selectionPath;return{...e,selectionPath:r}}return e}var ou=Sl;var cu=A(Ki());var k=class extends Error{constructor(r){super(r+`
Read more at https://pris.ly/d/client-constructor`),this.name="PrismaClientConstructorValidationError"}get[Symbol.toStringTag](){return"PrismaClientConstructorValidationError"}};x(k,"PrismaClientConstructorValidationError");var su=["datasources","datasourceUrl","errorFormat","adapter","log","transactionOptions","omit","__internal"],au=["pretty","colorless","minimal"],lu=["info","query","warn","error"],Ff={datasources:(e,{datasourceNames:r})=>{if(e){if(typeof e!="object"||Array.isArray(e))throw new k(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);for(let[t,n]of Object.entries(e)){if(!r.includes(t)){let i=Wr(t,r)||` Available datasources: ${r.join(", ")}`;throw new k(`Unknown datasource ${t} provided to PrismaClient constructor.${i}`)}if(typeof n!="object"||Array.isArray(n))throw new k(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);if(n&&typeof n=="object")for(let[i,o]of Object.entries(n)){if(i!=="url")throw new k(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);if(typeof o!="string")throw new k(`Invalid value ${JSON.stringify(o)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)}}}},adapter:(e,r)=>{if(!e&&Er(r.generator)==="client")throw new k('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');if(e===null)return;if(e===void 0)throw new k('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');if(!Yn(r).includes("driverAdapters"))throw new k('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');if(Er(r.generator)==="binary")throw new k('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.')},datasourceUrl:e=>{if(typeof e<"u"&&typeof e!="string")throw new k(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`)},errorFormat:e=>{if(e){if(typeof e!="string")throw new k(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);if(!au.includes(e)){let r=Wr(e,au);throw new k(`Invalid errorFormat ${e} provided to PrismaClient constructor.${r}`)}}},log:e=>{if(!e)return;if(!Array.isArray(e))throw new k(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);function r(t){if(typeof t=="string"&&!lu.includes(t)){let n=Wr(t,lu);throw new k(`Invalid log level "${t}" provided to PrismaClient constructor.${n}`)}}for(let t of e){r(t);let n={level:r,emit:i=>{let o=["stdout","event"];if(!o.includes(i)){let s=Wr(i,o);throw new k(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`)}}};if(t&&typeof t=="object")for(let[i,o]of Object.entries(t))if(n[i])n[i](o);else throw new k(`Invalid property ${i} for "log" provided to PrismaClient constructor`)}},transactionOptions:e=>{if(!e)return;let r=e.maxWait;if(r!=null&&r<=0)throw new k(`Invalid value ${r} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);let t=e.timeout;if(t!=null&&t<=0)throw new k(`Invalid value ${t} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`)},omit:(e,r)=>{if(typeof e!="object")throw new k('"omit" option is expected to be an object.');if(e===null)throw new k('"omit" option can not be `null`');let t=[];for(let[n,i]of Object.entries(e)){let o=$f(n,r.runtimeDataModel);if(!o){t.push({kind:"UnknownModel",modelKey:n});continue}for(let[s,a]of Object.entries(i)){let l=o.fields.find(u=>u.name===s);if(!l){t.push({kind:"UnknownField",modelKey:n,fieldName:s});continue}if(l.relationName){t.push({kind:"RelationInOmit",modelKey:n,fieldName:s});continue}typeof a!="boolean"&&t.push({kind:"InvalidFieldValue",modelKey:n,fieldName:s})}}if(t.length>0)throw new k(qf(e,t))},__internal:e=>{if(!e)return;let r=["debug","engine","configOverride"];if(typeof e!="object")throw new k(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);for(let[t]of Object.entries(e))if(!r.includes(t)){let n=Wr(t,r);throw new k(`Invalid property ${JSON.stringify(t)} for "__internal" provided to PrismaClient constructor.${n}`)}}};function pu(e,r){for(let[t,n]of Object.entries(e)){if(!su.includes(t)){let i=Wr(t,su);throw new k(`Unknown property ${t} provided to PrismaClient constructor.${i}`)}Ff[t](n,r)}if(e.datasourceUrl&&e.datasources)throw new k('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them')}function Wr(e,r){if(r.length===0||typeof e!="string")return"";let t=Mf(e,r);return t?` Did you mean "${t}"?`:""}function Mf(e,r){if(r.length===0)return null;let t=r.map(i=>({value:i,distance:(0,cu.default)(e,i)}));t.sort((i,o)=>i.distance<o.distance?-1:1);let n=t[0];return n.distance<3?n.value:null}function $f(e,r){return uu(r.models,e)??uu(r.types,e)}function uu(e,r){let t=Object.keys(e).find(n=>We(n)===r);if(t)return e[t]}function qf(e,r){let t=kr(e);for(let o of r)switch(o.kind){case"UnknownModel":t.arguments.getField(o.modelKey)?.markAsError(),t.addErrorMessage(()=>`Unknown model name: ${o.modelKey}.`);break;case"UnknownField":t.arguments.getDeepField([o.modelKey,o.fieldName])?.markAsError(),t.addErrorMessage(()=>`Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);break;case"RelationInOmit":t.arguments.getDeepField([o.modelKey,o.fieldName])?.markAsError(),t.addErrorMessage(()=>'Relations are already excluded by default and can not be specified in "omit".');break;case"InvalidFieldValue":t.arguments.getDeepFieldValue([o.modelKey,o.fieldName])?.markAsError(),t.addErrorMessage(()=>"Omit field option value must be a boolean.");break}let{message:n,args:i}=kn(t,"colorless");return`Error validating "omit" option:

${i}

${n}`}function du(e){return e.length===0?Promise.resolve([]):new Promise((r,t)=>{let n=new Array(e.length),i=null,o=!1,s=0,a=()=>{o||(s++,s===e.length&&(o=!0,i?t(i):r(n)))},l=u=>{o||(o=!0,t(u))};for(let u=0;u<e.length;u++)e[u].then(c=>{n[u]=c,a()},c=>{if(!zn(c)){l(c);return}c.batchRequestIdx===u?l(c):(i||(i=c),a())})})}var rr=N("prisma:client");typeof globalThis=="object"&&(globalThis.NODE_CLIENT=!0);var Vf={requestArgsToMiddlewareArgs:e=>e,middlewareArgsToRequestArgs:e=>e},jf=Symbol.for("prisma.client.transaction.id"),Bf={id:0,nextId(){return++this.id}};function bu(e){class r{_originalClient=this;_runtimeDataModel;_requestHandler;_connectionPromise;_disconnectionPromise;_engineConfig;_accelerateEngineConfig;_clientVersion;_errorFormat;_tracingHelper;_previewFeatures;_activeProvider;_globalOmit;_extensions;_engine;_appliedParent;_createPrismaPromise=Ao();constructor(n){e=n?.__internal?.configOverride?.(e)??e,cl(e),n&&pu(n,e);let i=new hu.EventEmitter().on("error",()=>{});this._extensions=_r.empty(),this._previewFeatures=Yn(e),this._clientVersion=e.clientVersion??ou,this._activeProvider=e.activeProvider,this._globalOmit=n?.omit,this._tracingHelper=Zl();let o=e.relativeEnvPaths&&{rootEnvPath:e.relativeEnvPaths.rootEnvPath&&ri.default.resolve(e.dirname,e.relativeEnvPaths.rootEnvPath),schemaEnvPath:e.relativeEnvPaths.schemaEnvPath&&ri.default.resolve(e.dirname,e.relativeEnvPaths.schemaEnvPath)},s;if(n?.adapter){s=n.adapter;let l=e.activeProvider==="postgresql"||e.activeProvider==="cockroachdb"?"postgres":e.activeProvider;if(s.provider!==l)throw new P(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`,this._clientVersion);if(n.datasources||n.datasourceUrl!==void 0)throw new P("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.",this._clientVersion)}let a=!s&&o&&ot(o,{conflictCheck:"none"})||e.injectableEdgeEnv?.();try{let l=n??{},u=l.__internal??{},c=u.debug===!0;c&&N.enable("prisma:client");let p=ri.default.resolve(e.dirname,e.relativePath);yu.default.existsSync(p)||(p=e.dirname),rr("dirname",e.dirname),rr("relativePath",e.relativePath),rr("cwd",p);let d=u.engine||{};if(l.errorFormat?this._errorFormat=l.errorFormat: true?this._errorFormat="minimal":0,this._runtimeDataModel=e.runtimeDataModel,this._engineConfig={cwd:p,dirname:e.dirname,enableDebugLogs:c,allowTriggerPanic:d.allowTriggerPanic,prismaPath:d.binaryPath??void 0,engineEndpoint:d.endpoint,generator:e.generator,showColors:this._errorFormat==="pretty",logLevel:l.log&&eu(l.log),logQueries:l.log&&!!(typeof l.log=="string"?l.log==="query":l.log.find(f=>typeof f=="string"?f==="query":f.level==="query")),env:a?.parsed??{},flags:[],engineWasm:e.engineWasm,compilerWasm:e.compilerWasm,clientVersion:e.clientVersion,engineVersion:e.engineVersion,previewFeatures:this._previewFeatures,activeProvider:e.activeProvider,inlineSchema:e.inlineSchema,overrideDatasources:pl(l,e.datasourceNames),inlineDatasources:e.inlineDatasources,inlineSchemaHash:e.inlineSchemaHash,tracingHelper:this._tracingHelper,transactionOptions:{maxWait:l.transactionOptions?.maxWait??2e3,timeout:l.transactionOptions?.timeout??5e3,isolationLevel:l.transactionOptions?.isolationLevel},logEmitter:i,isBundled:e.isBundled,adapter:s},this._accelerateEngineConfig={...this._engineConfig,accelerateUtils:{resolveDatasourceUrl:Vr,getBatchRequestPayload:Fr,prismaGraphQLToJSError:Mr,PrismaClientUnknownRequestError:V,PrismaClientInitializationError:P,PrismaClientKnownRequestError:z,debug:N("prisma:client:accelerateEngine"),engineVersion:fu.version,clientVersion:e.clientVersion}},rr("clientVersion",e.clientVersion),this._engine=jl(e,this._engineConfig),this._requestHandler=new ei(this,i),l.log)for(let f of l.log){let h=typeof f=="string"?f:f.emit==="stdout"?f.level:null;h&&this.$on(h,g=>{tt.log(`${tt.tags[h]??""}`,g.message||g.query)})}}catch(l){throw l.clientVersion=this._clientVersion,l}return this._appliedParent=vt(this)}get[Symbol.toStringTag](){return"PrismaClient"}$on(n,i){return n==="beforeExit"?this._engine.onBeforeExit(i):n&&this._engineConfig.logEmitter.on(n,i),this}$connect(){try{return this._engine.start()}catch(n){throw n.clientVersion=this._clientVersion,n}}async $disconnect(){try{await this._engine.stop()}catch(n){throw n.clientVersion=this._clientVersion,n}finally{Go()}}$executeRawInternal(n,i,o,s){let a=this._activeProvider;return this._request({action:"executeRaw",args:o,transaction:n,clientMethod:i,argsMapper:Ro({clientMethod:i,activeProvider:a}),callsite:Ze(this._errorFormat),dataPath:[],middlewareArgsMapper:s})}$executeRaw(n,...i){return this._createPrismaPromise(o=>{if(n.raw!==void 0||n.sql!==void 0){let[s,a]=mu(n,i);return So(this._activeProvider,s.text,s.values,Array.isArray(n)?"prisma.$executeRaw`<SQL>`":"prisma.$executeRaw(sql`<SQL>`)"),this.$executeRawInternal(o,"$executeRaw",s,a)}throw new Z("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",{clientVersion:this._clientVersion})})}$executeRawUnsafe(n,...i){return this._createPrismaPromise(o=>(So(this._activeProvider,n,i,"prisma.$executeRawUnsafe(<SQL>, [...values])"),this.$executeRawInternal(o,"$executeRawUnsafe",[n,...i])))}$runCommandRaw(n){if(e.activeProvider!=="mongodb")throw new Z(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,{clientVersion:this._clientVersion});return this._createPrismaPromise(i=>this._request({args:n,clientMethod:"$runCommandRaw",dataPath:[],action:"runCommandRaw",argsMapper:Bl,callsite:Ze(this._errorFormat),transaction:i}))}async $queryRawInternal(n,i,o,s){let a=this._activeProvider;return this._request({action:"queryRaw",args:o,transaction:n,clientMethod:i,argsMapper:Ro({clientMethod:i,activeProvider:a}),callsite:Ze(this._errorFormat),dataPath:[],middlewareArgsMapper:s})}$queryRaw(n,...i){return this._createPrismaPromise(o=>{if(n.raw!==void 0||n.sql!==void 0)return this.$queryRawInternal(o,"$queryRaw",...mu(n,i));throw new Z("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",{clientVersion:this._clientVersion})})}$queryRawTyped(n){return this._createPrismaPromise(i=>{if(!this._hasPreviewFlag("typedSql"))throw new Z("`typedSql` preview feature must be enabled in order to access $queryRawTyped API",{clientVersion:this._clientVersion});return this.$queryRawInternal(i,"$queryRawTyped",n)})}$queryRawUnsafe(n,...i){return this._createPrismaPromise(o=>this.$queryRawInternal(o,"$queryRawUnsafe",[n,...i]))}_transactionWithArray({promises:n,options:i}){let o=Bf.nextId(),s=Xl(n.length),a=n.map((l,u)=>{if(l?.[Symbol.toStringTag]!=="PrismaPromise")throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");let c=i?.isolationLevel??this._engineConfig.transactionOptions.isolationLevel,p={kind:"batch",id:o,index:u,isolationLevel:c,lock:s};return l.requestTransaction?.(p)??l});return du(a)}async _transactionWithCallback({callback:n,options:i}){let o={traceparent:this._tracingHelper.getTraceParent()},s={maxWait:i?.maxWait??this._engineConfig.transactionOptions.maxWait,timeout:i?.timeout??this._engineConfig.transactionOptions.timeout,isolationLevel:i?.isolationLevel??this._engineConfig.transactionOptions.isolationLevel},a=await this._engine.transaction("start",o,s),l;try{let u={kind:"itx",...a};l=await n(this._createItxClient(u)),await this._engine.transaction("commit",o,a)}catch(u){throw await this._engine.transaction("rollback",o,a).catch(()=>{}),u}return l}_createItxClient(n){return he(vt(he(Ha(this),[re("_appliedParent",()=>this._appliedParent._createItxClient(n)),re("_createPrismaPromise",()=>Ao(n)),re(jf,()=>n.id)])),[Lr(el)])}$transaction(n,i){let o;typeof n=="function"?this._engineConfig.adapter?.adapterName==="@prisma/adapter-d1"?o=()=>{throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.")}:o=()=>this._transactionWithCallback({callback:n,options:i}):o=()=>this._transactionWithArray({promises:n,options:i});let s={name:"transaction",attributes:{method:"$transaction"}};return this._tracingHelper.runInChildSpan(s,o)}_request(n){n.otelParentCtx=this._tracingHelper.getActiveContext();let i=n.middlewareArgsMapper??Vf,o={args:i.requestArgsToMiddlewareArgs(n.args),dataPath:n.dataPath,runInTransaction:!!n.transaction,action:n.action,model:n.model},s={operation:{name:"operation",attributes:{method:o.action,model:o.model,name:o.model?`${o.model}.${o.action}`:o.action}}},a=async l=>{let{runInTransaction:u,args:c,...p}=l,d={...n,...p};c&&(d.args=i.middlewareArgsToRequestArgs(c)),n.transaction!==void 0&&u===!1&&delete d.transaction;let f=await il(this,d);return d.model?Xa({result:f,modelName:d.model,args:d.args,extensions:this._extensions,runtimeDataModel:this._runtimeDataModel,globalOmit:this._globalOmit}):f};return this._tracingHelper.runInChildSpan(s.operation,()=>new gu.AsyncResource("prisma-client-request").runInAsyncScope(()=>a(o)))}async _executeRequest({args:n,clientMethod:i,dataPath:o,callsite:s,action:a,model:l,argsMapper:u,transaction:c,unpacker:p,otelParentCtx:d,customDataProxyFetch:f}){try{n=u?u(n):n;let h={name:"serialize"},g=this._tracingHelper.runInChildSpan(h,()=>Mn({modelName:l,runtimeDataModel:this._runtimeDataModel,action:a,args:n,clientMethod:i,callsite:s,extensions:this._extensions,errorFormat:this._errorFormat,clientVersion:this._clientVersion,previewFeatures:this._previewFeatures,globalOmit:this._globalOmit}));return N.enabled("prisma:client")&&(rr("Prisma Client call:"),rr(`prisma.${i}(${$a(n)})`),rr("Generated request:"),rr(JSON.stringify(g,null,2)+`
`)),c?.kind==="batch"&&await c.lock,this._requestHandler.request({protocolQuery:g,modelName:l,action:a,clientMethod:i,dataPath:o,callsite:s,args:n,extensions:this._extensions,transaction:c,unpacker:p,otelParentCtx:d,otelChildCtx:this._tracingHelper.getActiveContext(),globalOmit:this._globalOmit,customDataProxyFetch:f})}catch(h){throw h.clientVersion=this._clientVersion,h}}$metrics=new Nr(this);_hasPreviewFlag(n){return!!this._engineConfig.previewFeatures?.includes(n)}$applyPendingMigrations(){return this._engine.applyPendingMigrations()}$extends=Ya}return r}function mu(e,r){return Uf(e)?[new oe(e,r),Hl]:[e,Yl]}function Uf(e){return Array.isArray(e)&&Array.isArray(e.raw)}var Gf=new Set(["toJSON","$$typeof","asymmetricMatch",Symbol.iterator,Symbol.toStringTag,Symbol.isConcatSpreadable,Symbol.toPrimitive]);function Eu(e){return new Proxy(e,{get(r,t){if(t in r)return r[t];if(!Gf.has(t))throw new TypeError(`Invalid enum value: ${String(t)}`)}})}function wu(e){ot(e,{conflictCheck:"warn"})}0&&(0);
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
//# sourceMappingURL=library.js.map


/***/ }),

/***/ 8474:
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ 8555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "tekens" },
        file: { unit: "bytes" },
        array: { unit: "elementen" },
        set: { unit: "elementen" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "getal";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "invoer",
        email: "emailadres",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum en tijd",
        date: "ISO datum",
        time: "ISO tijd",
        duration: "ISO duur",
        ipv4: "IPv4-adres",
        ipv6: "IPv6-adres",
        cidrv4: "IPv4-bereik",
        cidrv6: "IPv6-bereik",
        base64: "base64-gecodeerde tekst",
        base64url: "base64 URL-gecodeerde tekst",
        json_string: "JSON string",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "invoer",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ongeldige invoer: verwacht ${issue.expected}, ontving ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ongeldige invoer: verwacht ${util.stringifyPrimitive(issue.values[0])}`;
                return `Ongeldige optie: verwacht één van ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Te lang: verwacht dat ${issue.origin ?? "waarde"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementen"} bevat`;
                return `Te lang: verwacht dat ${issue.origin ?? "waarde"} ${adj}${issue.maximum.toString()} is`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Te kort: verwacht dat ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} bevat`;
                }
                return `Te kort: verwacht dat ${issue.origin} ${adj}${issue.minimum.toString()} is`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
                }
                if (_issue.format === "ends_with")
                    return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
                if (_issue.format === "includes")
                    return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
                if (_issue.format === "regex")
                    return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
                return `Ongeldig: ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ongeldig getal: moet een veelvoud van ${issue.divisor} zijn`;
            case "unrecognized_keys":
                return `Onbekende key${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ongeldige key in ${issue.origin}`;
            case "invalid_union":
                return "Ongeldige invoer";
            case "invalid_element":
                return `Ongeldige waarde in ${issue.origin}`;
            default:
                return `Ongeldige invoer`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 8609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.URL = exports.DNS = exports.stringToBytes = void 0;
const parse_js_1 = __webpack_require__(8744);
const stringify_js_1 = __webpack_require__(7382);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str));
    const bytes = new Uint8Array(str.length);
    for (let i = 0; i < str.length; ++i) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes;
}
exports.stringToBytes = stringToBytes;
exports.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(version, hash, value, namespace, buf, offset) {
    const valueBytes = typeof value === 'string' ? stringToBytes(value) : value;
    const namespaceBytes = typeof namespace === 'string' ? (0, parse_js_1.default)(namespace) : namespace;
    if (typeof namespace === 'string') {
        namespace = (0, parse_js_1.default)(namespace);
    }
    if (namespace?.length !== 16) {
        throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    }
    let bytes = new Uint8Array(16 + valueBytes.length);
    bytes.set(namespaceBytes);
    bytes.set(valueBytes, namespaceBytes.length);
    bytes = hash(bytes);
    bytes[6] = (bytes[6] & 0x0f) | version;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
        }
        return buf;
    }
    return (0, stringify_js_1.unsafeStringify)(bytes);
}
exports["default"] = v35;


/***/ }),

/***/ 8744:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validate_js_1 = __webpack_require__(2621);
function parse(uuid) {
    if (!(0, validate_js_1.default)(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    return Uint8Array.of((v = parseInt(uuid.slice(0, 8), 16)) >>> 24, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff, (v = parseInt(uuid.slice(9, 13), 16)) >>> 8, v & 0xff, (v = parseInt(uuid.slice(14, 18), 16)) >>> 8, v & 0xff, (v = parseInt(uuid.slice(19, 23), 16)) >>> 8, v & 0xff, ((v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000) & 0xff, (v / 0x100000000) & 0xff, (v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff);
}
exports["default"] = parse;


/***/ }),

/***/ 8753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const native_js_1 = __webpack_require__(572);
const rng_js_1 = __webpack_require__(9018);
const stringify_js_1 = __webpack_require__(7382);
function v4(options, buf, offset) {
    if (native_js_1.default.randomUUID && !buf && !options) {
        return native_js_1.default.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, rng_js_1.default)();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, stringify_js_1.unsafeStringify)(rnds);
}
exports["default"] = v4;


/***/ }),

/***/ 8991:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.version = exports.validate = exports.v7 = exports.v6ToV1 = exports.v6 = exports.v5 = exports.v4 = exports.v3 = exports.v1ToV6 = exports.v1 = exports.stringify = exports.parse = exports.NIL = exports.MAX = void 0;
var max_js_1 = __webpack_require__(2085);
Object.defineProperty(exports, "MAX", ({ enumerable: true, get: function () { return max_js_1.default; } }));
var nil_js_1 = __webpack_require__(4104);
Object.defineProperty(exports, "NIL", ({ enumerable: true, get: function () { return nil_js_1.default; } }));
var parse_js_1 = __webpack_require__(8744);
Object.defineProperty(exports, "parse", ({ enumerable: true, get: function () { return parse_js_1.default; } }));
var stringify_js_1 = __webpack_require__(7382);
Object.defineProperty(exports, "stringify", ({ enumerable: true, get: function () { return stringify_js_1.default; } }));
var v1_js_1 = __webpack_require__(5614);
Object.defineProperty(exports, "v1", ({ enumerable: true, get: function () { return v1_js_1.default; } }));
var v1ToV6_js_1 = __webpack_require__(1175);
Object.defineProperty(exports, "v1ToV6", ({ enumerable: true, get: function () { return v1ToV6_js_1.default; } }));
var v3_js_1 = __webpack_require__(3684);
Object.defineProperty(exports, "v3", ({ enumerable: true, get: function () { return v3_js_1.default; } }));
var v4_js_1 = __webpack_require__(8753);
Object.defineProperty(exports, "v4", ({ enumerable: true, get: function () { return v4_js_1.default; } }));
var v5_js_1 = __webpack_require__(1122);
Object.defineProperty(exports, "v5", ({ enumerable: true, get: function () { return v5_js_1.default; } }));
var v6_js_1 = __webpack_require__(7919);
Object.defineProperty(exports, "v6", ({ enumerable: true, get: function () { return v6_js_1.default; } }));
var v6ToV1_js_1 = __webpack_require__(7251);
Object.defineProperty(exports, "v6ToV1", ({ enumerable: true, get: function () { return v6ToV1_js_1.default; } }));
var v7_js_1 = __webpack_require__(5832);
Object.defineProperty(exports, "v7", ({ enumerable: true, get: function () { return v7_js_1.default; } }));
var validate_js_1 = __webpack_require__(2621);
Object.defineProperty(exports, "validate", ({ enumerable: true, get: function () { return validate_js_1.default; } }));
var version_js_1 = __webpack_require__(7615);
Object.defineProperty(exports, "version", ({ enumerable: true, get: function () { return version_js_1.default; } }));


/***/ }),

/***/ 9018:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const crypto_1 = __webpack_require__(6982);
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        (0, crypto_1.randomFillSync)(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, (poolPtr += 16));
}
exports["default"] = rng;


/***/ }),

/***/ 9148:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Zod 3 compat layer
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZodFirstPartyTypeKind = exports.config = exports.$brand = exports.ZodIssueCode = void 0;
exports.setErrorMap = setErrorMap;
exports.getErrorMap = getErrorMap;
const core = __importStar(__webpack_require__(6405));
/** @deprecated Use the raw string literal codes instead, e.g. "invalid_type". */
exports.ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
};
var index_js_1 = __webpack_require__(6405);
Object.defineProperty(exports, "$brand", ({ enumerable: true, get: function () { return index_js_1.$brand; } }));
Object.defineProperty(exports, "config", ({ enumerable: true, get: function () { return index_js_1.config; } }));
/** @deprecated Use `z.config(params)` instead. */
function setErrorMap(map) {
    core.config({
        customError: map,
    });
}
/** @deprecated Use `z.config()` instead. */
function getErrorMap() {
    return core.config().customError;
}
/** @deprecated Do not use. Stub definition, only included for zod-to-json-schema compatibility. */
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
})(ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = ZodFirstPartyTypeKind = {}));


/***/ }),

/***/ 9193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "caràcters", verb: "contenir" },
        file: { unit: "bytes", verb: "contenir" },
        array: { unit: "elements", verb: "contenir" },
        set: { unit: "elements", verb: "contenir" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "adreça electrònica",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "durada ISO",
        ipv4: "adreça IPv4",
        ipv6: "adreça IPv6",
        cidrv4: "rang IPv4",
        cidrv6: "rang IPv6",
        base64: "cadena codificada en base64",
        base64url: "cadena codificada en base64url",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${parsedType(issue.input)}`;
            // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Valor invàlid: s'esperava ${util.stringifyPrimitive(issue.values[0])}`;
                return `Opció invàlida: s'esperava una de ${util.joinValues(issue.values, " o ")}`;
            case "too_big": {
                const adj = issue.inclusive ? "com a màxim" : "menys de";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Massa gran: s'esperava que ${issue.origin ?? "el valor"} contingués ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
                return `Massa gran: s'esperava que ${issue.origin ?? "el valor"} fos ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "com a mínim" : "més de";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Massa petit: s'esperava que ${issue.origin} contingués ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Massa petit: s'esperava que ${issue.origin} fos ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Format invàlid: ha de començar amb "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Format invàlid: ha d'acabar amb "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Format invàlid: ha d'incloure "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Format invàlid: ha de coincidir amb el patró ${_issue.pattern}`;
                return `Format invàlid per a ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Número invàlid: ha de ser múltiple de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Clau${issue.keys.length > 1 ? "s" : ""} no reconeguda${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Clau invàlida a ${issue.origin}`;
            case "invalid_union":
                return "Entrada invàlida"; // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
            case "invalid_element":
                return `Element invàlid a ${issue.origin}`;
            default:
                return `Entrada invàlida`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 9231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parsedType = void 0;
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const parsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
exports.parsedType = parsedType;
const error = () => {
    const Sizable = {
        string: { unit: "karakter", verb: "olmalı" },
        file: { unit: "bayt", verb: "olmalı" },
        array: { unit: "öğe", verb: "olmalı" },
        set: { unit: "öğe", verb: "olmalı" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "girdi",
        email: "e-posta adresi",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO tarih ve saat",
        date: "ISO tarih",
        time: "ISO saat",
        duration: "ISO süre",
        ipv4: "IPv4 adresi",
        ipv6: "IPv6 adresi",
        cidrv4: "IPv4 aralığı",
        cidrv6: "IPv6 aralığı",
        base64: "base64 ile şifrelenmiş metin",
        base64url: "base64url ile şifrelenmiş metin",
        json_string: "JSON dizesi",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "Şablon dizesi",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Geçersiz değer: beklenen ${issue.expected}, alınan ${(0, exports.parsedType)(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Geçersiz değer: beklenen ${util.stringifyPrimitive(issue.values[0])}`;
                return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "öğe"}`;
                return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Geçersiz metin: "${_issue.prefix}" ile başlamalı`;
                if (_issue.format === "ends_with")
                    return `Geçersiz metin: "${_issue.suffix}" ile bitmeli`;
                if (_issue.format === "includes")
                    return `Geçersiz metin: "${_issue.includes}" içermeli`;
                if (_issue.format === "regex")
                    return `Geçersiz metin: ${_issue.pattern} desenine uymalı`;
                return `Geçersiz ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Geçersiz sayı: ${issue.divisor} ile tam bölünebilmeli`;
            case "unrecognized_keys":
                return `Tanınmayan anahtar${issue.keys.length > 1 ? "lar" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} içinde geçersiz anahtar`;
            case "invalid_union":
                return "Geçersiz değer";
            case "invalid_element":
                return `${issue.origin} içinde geçersiz değer`;
            default:
                return `Geçersiz değer`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}


/***/ }),

/***/ 9690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "karakter", verb: "memiliki" },
        file: { unit: "byte", verb: "memiliki" },
        array: { unit: "item", verb: "memiliki" },
        set: { unit: "item", verb: "memiliki" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "alamat email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tanggal dan waktu format ISO",
        date: "tanggal format ISO",
        time: "jam format ISO",
        duration: "durasi format ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "rentang alamat IPv4",
        cidrv6: "rentang alamat IPv6",
        base64: "string dengan enkode base64",
        base64url: "string dengan enkode base64url",
        json_string: "string JSON",
        e164: "angka E.164",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Input tidak valid: diharapkan ${issue.expected}, diterima ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Input tidak valid: diharapkan ${util.stringifyPrimitive(issue.values[0])}`;
                return `Pilihan tidak valid: diharapkan salah satu dari ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Terlalu besar: diharapkan ${issue.origin ?? "value"} memiliki ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elemen"}`;
                return `Terlalu besar: diharapkan ${issue.origin ?? "value"} menjadi ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Terlalu kecil: diharapkan ${issue.origin} memiliki ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Terlalu kecil: diharapkan ${issue.origin} menjadi ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `String tidak valid: harus menyertakan "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} tidak valid`;
            }
            case "not_multiple_of":
                return `Angka tidak valid: harus kelipatan dari ${issue.divisor}`;
            case "unrecognized_keys":
                return `Kunci tidak dikenali ${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Kunci tidak valid di ${issue.origin}`;
            case "invalid_union":
                return "Input tidak valid";
            case "invalid_element":
                return `Nilai tidak valid di ${issue.origin}`;
            default:
                return `Input tidak valid`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 9766:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.globalRegistry = exports.$ZodRegistry = exports.$input = exports.$output = void 0;
exports.registry = registry;
exports.$output = Symbol("ZodOutput");
exports.$input = Symbol("ZodInput");
class $ZodRegistry {
    constructor() {
        this._map = new Map();
        this._idmap = new Map();
    }
    add(schema, ..._meta) {
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            if (this._idmap.has(meta.id)) {
                throw new Error(`ID ${meta.id} already exists in the registry`);
            }
            this._idmap.set(meta.id, schema);
        }
        return this;
    }
    clear() {
        this._map = new Map();
        this._idmap = new Map();
        return this;
    }
    remove(schema) {
        const meta = this._map.get(schema);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.delete(meta.id);
        }
        this._map.delete(schema);
        return this;
    }
    get(schema) {
        // return this._map.get(schema) as any;
        // inherit metadata
        const p = schema._zod.parent;
        if (p) {
            const pm = { ...(this.get(p) ?? {}) };
            delete pm.id; // do not inherit id
            const f = { ...pm, ...this._map.get(schema) };
            return Object.keys(f).length ? f : undefined;
        }
        return this._map.get(schema);
    }
    has(schema) {
        return this._map.has(schema);
    }
}
exports.$ZodRegistry = $ZodRegistry;
// registries
function registry() {
    return new $ZodRegistry();
}
exports.globalRegistry = registry();


/***/ }),

/***/ 9837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "nombre";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tableau";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrée",
        email: "adresse e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date et heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Entrée invalide : ${issue.expected} attendu, ${parsedType(issue.input)} reçu`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrée invalide : ${util.stringifyPrimitive(issue.values[0])} attendu`;
                return `Option invalide : une valeur parmi ${util.joinValues(issue.values, "|")} attendue`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Trop grand : ${issue.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "élément(s)"}`;
                return `Trop grand : ${issue.origin ?? "valeur"} doit être ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Trop petit : ${issue.origin} doit ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Trop petit : ${issue.origin} doit être ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Chaîne invalide : doit inclure "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Chaîne invalide : doit correspondre au modèle ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} invalide`;
            }
            case "not_multiple_of":
                return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Clé invalide dans ${issue.origin}`;
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return `Valeur invalide dans ${issue.origin}`;
            default:
                return `Entrée invalide`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 9865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = default_1;
const util = __importStar(__webpack_require__(2879));
const error = () => {
    const Sizable = {
        string: { unit: "знаци", verb: "да имаат" },
        file: { unit: "бајти", verb: "да имаат" },
        array: { unit: "ставки", verb: "да имаат" },
        set: { unit: "ставки", verb: "да имаат" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "број";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "низа";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "внес",
        email: "адреса на е-пошта",
        url: "URL",
        emoji: "емоџи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO датум и време",
        date: "ISO датум",
        time: "ISO време",
        duration: "ISO времетраење",
        ipv4: "IPv4 адреса",
        ipv6: "IPv6 адреса",
        cidrv4: "IPv4 опсег",
        cidrv6: "IPv6 опсег",
        base64: "base64-енкодирана низа",
        base64url: "base64url-енкодирана низа",
        json_string: "JSON низа",
        e164: "E.164 број",
        jwt: "JWT",
        template_literal: "внес",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Грешен внес: се очекува ${issue.expected}, примено ${parsedType(issue.input)}`;
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Invalid input: expected ${util.stringifyPrimitive(issue.values[0])}`;
                return `Грешана опција: се очекува една ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Премногу голем: се очекува ${issue.origin ?? "вредноста"} да има ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елементи"}`;
                return `Премногу голем: се очекува ${issue.origin ?? "вредноста"} да биде ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Премногу мал: се очекува ${issue.origin} да има ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Премногу мал: се очекува ${issue.origin} да биде ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Неважечка низа: мора да започнува со "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Неважечка низа: мора да завршува со "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Неважечка низа: мора да вклучува "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Неважечка низа: мора да одгоара на патернот ${_issue.pattern}`;
                return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Грешен број: мора да биде делив со ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Грешен клуч во ${issue.origin}`;
            case "invalid_union":
                return "Грешен внес";
            case "invalid_element":
                return `Грешна вредност во ${issue.origin}`;
            default:
                return `Грешен внес`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
module.exports = exports.default;


/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 9945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toUpperCase = exports.toLowerCase = exports.trim = exports.normalize = exports.overwrite = exports.mime = exports.property = exports.endsWith = exports.startsWith = exports.includes = exports.uppercase = exports.lowercase = exports.regex = exports.length = exports.minLength = exports.maxLength = exports.size = exports.minSize = exports.maxSize = exports.multipleOf = exports.nonnegative = exports.nonpositive = exports.negative = exports.positive = exports.gte = exports.gt = exports.lte = exports.lt = void 0;
var index_js_1 = __webpack_require__(6405);
Object.defineProperty(exports, "lt", ({ enumerable: true, get: function () { return index_js_1._lt; } }));
Object.defineProperty(exports, "lte", ({ enumerable: true, get: function () { return index_js_1._lte; } }));
Object.defineProperty(exports, "gt", ({ enumerable: true, get: function () { return index_js_1._gt; } }));
Object.defineProperty(exports, "gte", ({ enumerable: true, get: function () { return index_js_1._gte; } }));
Object.defineProperty(exports, "positive", ({ enumerable: true, get: function () { return index_js_1._positive; } }));
Object.defineProperty(exports, "negative", ({ enumerable: true, get: function () { return index_js_1._negative; } }));
Object.defineProperty(exports, "nonpositive", ({ enumerable: true, get: function () { return index_js_1._nonpositive; } }));
Object.defineProperty(exports, "nonnegative", ({ enumerable: true, get: function () { return index_js_1._nonnegative; } }));
Object.defineProperty(exports, "multipleOf", ({ enumerable: true, get: function () { return index_js_1._multipleOf; } }));
Object.defineProperty(exports, "maxSize", ({ enumerable: true, get: function () { return index_js_1._maxSize; } }));
Object.defineProperty(exports, "minSize", ({ enumerable: true, get: function () { return index_js_1._minSize; } }));
Object.defineProperty(exports, "size", ({ enumerable: true, get: function () { return index_js_1._size; } }));
Object.defineProperty(exports, "maxLength", ({ enumerable: true, get: function () { return index_js_1._maxLength; } }));
Object.defineProperty(exports, "minLength", ({ enumerable: true, get: function () { return index_js_1._minLength; } }));
Object.defineProperty(exports, "length", ({ enumerable: true, get: function () { return index_js_1._length; } }));
Object.defineProperty(exports, "regex", ({ enumerable: true, get: function () { return index_js_1._regex; } }));
Object.defineProperty(exports, "lowercase", ({ enumerable: true, get: function () { return index_js_1._lowercase; } }));
Object.defineProperty(exports, "uppercase", ({ enumerable: true, get: function () { return index_js_1._uppercase; } }));
Object.defineProperty(exports, "includes", ({ enumerable: true, get: function () { return index_js_1._includes; } }));
Object.defineProperty(exports, "startsWith", ({ enumerable: true, get: function () { return index_js_1._startsWith; } }));
Object.defineProperty(exports, "endsWith", ({ enumerable: true, get: function () { return index_js_1._endsWith; } }));
Object.defineProperty(exports, "property", ({ enumerable: true, get: function () { return index_js_1._property; } }));
Object.defineProperty(exports, "mime", ({ enumerable: true, get: function () { return index_js_1._mime; } }));
Object.defineProperty(exports, "overwrite", ({ enumerable: true, get: function () { return index_js_1._overwrite; } }));
Object.defineProperty(exports, "normalize", ({ enumerable: true, get: function () { return index_js_1._normalize; } }));
Object.defineProperty(exports, "trim", ({ enumerable: true, get: function () { return index_js_1._trim; } }));
Object.defineProperty(exports, "toLowerCase", ({ enumerable: true, get: function () { return index_js_1._toLowerCase; } }));
Object.defineProperty(exports, "toUpperCase", ({ enumerable: true, get: function () { return index_js_1._toUpperCase; } }));


/***/ }),

/***/ 9958:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$ZodRealError = exports.$ZodError = void 0;
exports.flattenError = flattenError;
exports.formatError = formatError;
exports.treeifyError = treeifyError;
exports.toDotPath = toDotPath;
exports.prettifyError = prettifyError;
const core_js_1 = __webpack_require__(1870);
const util = __importStar(__webpack_require__(2879));
const initializer = (inst, def) => {
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
        value: inst._zod,
        enumerable: false,
    });
    Object.defineProperty(inst, "issues", {
        value: def,
        enumerable: false,
    });
    inst.message = JSON.stringify(def, util.jsonStringifyReplacer, 2);
    Object.defineProperty(inst, "toString", {
        value: () => inst.message,
        enumerable: false,
    });
};
exports.$ZodError = (0, core_js_1.$constructor)("$ZodError", initializer);
exports.$ZodRealError = (0, core_js_1.$constructor)("$ZodError", initializer, { Parent: Error });
function flattenError(error, mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues) {
        if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
        }
        else {
            formErrors.push(mapper(sub));
        }
    }
    return { formErrors, fieldErrors };
}
function formatError(error, _mapper) {
    const mapper = _mapper ||
        function (issue) {
            return issue.message;
        };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
        for (const issue of error.issues) {
            if (issue.code === "invalid_union" && issue.errors.length) {
                issue.errors.map((issues) => processError({ issues }));
            }
            else if (issue.code === "invalid_key") {
                processError({ issues: issue.issues });
            }
            else if (issue.code === "invalid_element") {
                processError({ issues: issue.issues });
            }
            else if (issue.path.length === 0) {
                fieldErrors._errors.push(mapper(issue));
            }
            else {
                let curr = fieldErrors;
                let i = 0;
                while (i < issue.path.length) {
                    const el = issue.path[i];
                    const terminal = i === issue.path.length - 1;
                    if (!terminal) {
                        curr[el] = curr[el] || { _errors: [] };
                    }
                    else {
                        curr[el] = curr[el] || { _errors: [] };
                        curr[el]._errors.push(mapper(issue));
                    }
                    curr = curr[el];
                    i++;
                }
            }
        }
    };
    processError(error);
    return fieldErrors;
}
function treeifyError(error, _mapper) {
    const mapper = _mapper ||
        function (issue) {
            return issue.message;
        };
    const result = { errors: [] };
    const processError = (error, path = []) => {
        var _a, _b;
        for (const issue of error.issues) {
            if (issue.code === "invalid_union" && issue.errors.length) {
                // regular union error
                issue.errors.map((issues) => processError({ issues }, issue.path));
            }
            else if (issue.code === "invalid_key") {
                processError({ issues: issue.issues }, issue.path);
            }
            else if (issue.code === "invalid_element") {
                processError({ issues: issue.issues }, issue.path);
            }
            else {
                const fullpath = [...path, ...issue.path];
                if (fullpath.length === 0) {
                    result.errors.push(mapper(issue));
                    continue;
                }
                let curr = result;
                let i = 0;
                while (i < fullpath.length) {
                    const el = fullpath[i];
                    const terminal = i === fullpath.length - 1;
                    if (typeof el === "string") {
                        curr.properties ?? (curr.properties = {});
                        (_a = curr.properties)[el] ?? (_a[el] = { errors: [] });
                        curr = curr.properties[el];
                    }
                    else {
                        curr.items ?? (curr.items = []);
                        (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
                        curr = curr.items[el];
                    }
                    if (terminal) {
                        curr.errors.push(mapper(issue));
                    }
                    i++;
                }
            }
        }
    };
    processError(error);
    return result;
}
/** Format a ZodError as a human-readable string in the following form.
 *
 * From
 *
 * ```ts
 * ZodError {
 *   issues: [
 *     {
 *       expected: 'string',
 *       code: 'invalid_type',
 *       path: [ 'username' ],
 *       message: 'Invalid input: expected string'
 *     },
 *     {
 *       expected: 'number',
 *       code: 'invalid_type',
 *       path: [ 'favoriteNumbers', 1 ],
 *       message: 'Invalid input: expected number'
 *     }
 *   ];
 * }
 * ```
 *
 * to
 *
 * ```
 * username
 *   ✖ Expected number, received string at "username
 * favoriteNumbers[0]
 *   ✖ Invalid input: expected number
 * ```
 */
function toDotPath(_path) {
    const segs = [];
    const path = _path.map((seg) => (typeof seg === "object" ? seg.key : seg));
    for (const seg of path) {
        if (typeof seg === "number")
            segs.push(`[${seg}]`);
        else if (typeof seg === "symbol")
            segs.push(`[${JSON.stringify(String(seg))}]`);
        else if (/[^\w$]/.test(seg))
            segs.push(`[${JSON.stringify(seg)}]`);
        else {
            if (segs.length)
                segs.push(".");
            segs.push(seg);
        }
    }
    return segs.join("");
}
function prettifyError(error) {
    const lines = [];
    // sort by path length
    const issues = [...error.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
    // Process each issue
    for (const issue of issues) {
        lines.push(`✖ ${issue.message}`);
        if (issue.path?.length)
            lines.push(`  → at ${toDotPath(issue.path)}`);
    }
    // Convert Map to formatted string
    return lines.join("\n");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
const walkin_schema_1 = __webpack_require__(2791);
const walkinService_1 = __webpack_require__(6519);
const responseFormat_1 = __webpack_require__(3170);
const errorHandler_1 = __webpack_require__(8380);
const walkinService = new walkinService_1.WalkinService();
const handler = async (event) => {
    try {
        // Parse request body
        const requestBody = JSON.parse(event.body || '{}');
        // Validate input using Zod schema
        const validatedData = walkin_schema_1.createWalkinSchema.parse(requestBody);
        // For now, use a mock businessId - in production this would come from JWT token
        const businessId = event.headers['businessId'] || event.headers['BusinessId'] || 'mock-business-id';
        // Create walk-in
        const result = await walkinService.createWalkin(validatedData, businessId);
        return (0, responseFormat_1.formatResponse)(201, {
            message: "Walk-in requested successfully",
            data: result,
        });
    }
    catch (error) {
        const { statusCode, message, details } = (0, errorHandler_1.handleError)(error);
        return (0, responseFormat_1.formatResponse)(statusCode, { message, details });
    }
};
exports.handler = handler;

})();

module.exports = __webpack_exports__;
/******/ })()
;