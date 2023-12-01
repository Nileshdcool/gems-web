import {
  Button,
  index_modern_default
} from "/build/_shared/chunk-AO5ZBG5V.js";
import {
  useUser
} from "/build/_shared/chunk-7PPFV3VI.js";
import {
  content_default,
  hex_default,
  store_default,
  useSubscribe
} from "/build/_shared/chunk-VF2ZEHT7.js";
import {
  getEventHash,
  nip19_exports
} from "/build/_shared/chunk-XFYNK4ZR.js";
import {
  require_session
} from "/build/_shared/chunk-ZQW7CLJ5.js";
import {
  IconAttached,
  IconBell,
  IconBellx,
  IconChart,
  IconChat,
  IconCircleX,
  IconDoNotDisturb,
  IconDollor,
  IconEyex,
  IconFeed,
  IconFollow,
  IconGIF,
  IconHeart,
  IconHeartFilled,
  IconIdle,
  IconInvisible,
  IconItalic,
  IconLink,
  IconListOl,
  IconListUl,
  IconOnline,
  IconPlanet,
  IconRelay,
  IconRelayed,
  IconReplyBlock,
  IconReport,
  IconSetting,
  IconShares,
  IconSmallWallet,
  IconSmile,
  IconThreeDot,
  IconUploadImage,
  IconUserSetting,
  IconX,
  gem_default
} from "/build/_shared/chunk-6LNMZJIT.js";
import {
  Form,
  Link,
  NavLink,
  useLoaderData,
  useLocation,
  useNavigate,
  useTransition
} from "/build/_shared/chunk-PBW5ITDT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __commonJS,
  __require,
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// node_modules/moment/moment.js
var require_moment = __commonJS({
  "node_modules/moment/moment.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
    })(exports, function() {
      "use strict";
      var hookCallback;
      function hooks() {
        return hookCallback.apply(null, arguments);
      }
      function setHookCallback(callback) {
        hookCallback = callback;
      }
      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
      }
      function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
      }
      function hasOwnProp(a5, b4) {
        return Object.prototype.hasOwnProperty.call(a5, b4);
      }
      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k2;
          for (k2 in obj) {
            if (hasOwnProp(obj, k2)) {
              return false;
            }
          }
          return true;
        }
      }
      function isUndefined(input) {
        return input === void 0;
      }
      function isNumber(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
      }
      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
      }
      function map(arr, fn) {
        var res = [], i6, arrLen = arr.length;
        for (i6 = 0; i6 < arrLen; ++i6) {
          res.push(fn(arr[i6], i6));
        }
        return res;
      }
      function extend(a5, b4) {
        for (var i6 in b4) {
          if (hasOwnProp(b4, i6)) {
            a5[i6] = b4[i6];
          }
        }
        if (hasOwnProp(b4, "toString")) {
          a5.toString = b4.toString;
        }
        if (hasOwnProp(b4, "valueOf")) {
          a5.valueOf = b4.valueOf;
        }
        return a5;
      }
      function createUTC(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, true).utc();
      }
      function defaultParsingFlags() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }
      function getParsingFlags(m5) {
        if (m5._pf == null) {
          m5._pf = defaultParsingFlags();
        }
        return m5._pf;
      }
      var some;
      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function(fun) {
          var t9 = Object(this), len = t9.length >>> 0, i6;
          for (i6 = 0; i6 < len; i6++) {
            if (i6 in t9 && fun.call(this, t9[i6], i6, t9)) {
              return true;
            }
          }
          return false;
        };
      }
      function isValid(m5) {
        if (m5._isValid == null) {
          var flags = getParsingFlags(m5), parsedParts = some.call(flags.parsedDateParts, function(i6) {
            return i6 != null;
          }), isNowValid = !isNaN(m5._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
          if (m5._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
          }
          if (Object.isFrozen == null || !Object.isFrozen(m5)) {
            m5._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }
        return m5._isValid;
      }
      function createInvalid(flags) {
        var m5 = createUTC(NaN);
        if (flags != null) {
          extend(getParsingFlags(m5), flags);
        } else {
          getParsingFlags(m5).userInvalidated = true;
        }
        return m5;
      }
      var momentProperties = hooks.momentProperties = [], updateInProgress = false;
      function copyConfig(to2, from2) {
        var i6, prop, val, momentPropertiesLen = momentProperties.length;
        if (!isUndefined(from2._isAMomentObject)) {
          to2._isAMomentObject = from2._isAMomentObject;
        }
        if (!isUndefined(from2._i)) {
          to2._i = from2._i;
        }
        if (!isUndefined(from2._f)) {
          to2._f = from2._f;
        }
        if (!isUndefined(from2._l)) {
          to2._l = from2._l;
        }
        if (!isUndefined(from2._strict)) {
          to2._strict = from2._strict;
        }
        if (!isUndefined(from2._tzm)) {
          to2._tzm = from2._tzm;
        }
        if (!isUndefined(from2._isUTC)) {
          to2._isUTC = from2._isUTC;
        }
        if (!isUndefined(from2._offset)) {
          to2._offset = from2._offset;
        }
        if (!isUndefined(from2._pf)) {
          to2._pf = getParsingFlags(from2);
        }
        if (!isUndefined(from2._locale)) {
          to2._locale = from2._locale;
        }
        if (momentPropertiesLen > 0) {
          for (i6 = 0; i6 < momentPropertiesLen; i6++) {
            prop = momentProperties[i6];
            val = from2[prop];
            if (!isUndefined(val)) {
              to2[prop] = val;
            }
          }
        }
        return to2;
      }
      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = /* @__PURE__ */ new Date(NaN);
        }
        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }
      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }
      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + msg);
        }
      }
      function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [], arg, i6, key, argLen = arguments.length;
            for (i6 = 0; i6 < argLen; i6++) {
              arg = "";
              if (typeof arguments[i6] === "object") {
                arg += "\n[" + i6 + "] ";
                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ": " + arguments[0][key] + ", ";
                  }
                }
                arg = arg.slice(0, -2);
              } else {
                arg = arguments[i6];
              }
              args.push(arg);
            }
            warn(
              msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
            );
            firstTime = false;
          }
          return fn.apply(this, arguments);
        }, fn);
      }
      var deprecations = {};
      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }
      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;
      function isFunction(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      function set(config) {
        var prop, i6;
        for (i6 in config) {
          if (hasOwnProp(config, i6)) {
            prop = config[i6];
            if (isFunction(prop)) {
              this[i6] = prop;
            } else {
              this["_" + i6] = prop;
            }
          }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
        );
      }
      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            res[prop] = extend({}, res[prop]);
          }
        }
        return res;
      }
      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }
      var keys;
      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function(obj) {
          var i6, res = [];
          for (i6 in obj) {
            if (hasOwnProp(obj, i6)) {
              res.push(i6);
            }
          }
          return res;
        };
      }
      var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function calendar(key, mom, now2) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now2) : output;
      }
      function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
        return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }
      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
      function addFormatToken(token2, padded, ordinal2, callback) {
        var func = callback;
        if (typeof callback === "string") {
          func = function() {
            return this[callback]();
          };
        }
        if (token2) {
          formatTokenFunctions[token2] = func;
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal2) {
          formatTokenFunctions[ordinal2] = function() {
            return this.localeData().ordinal(
              func.apply(this, arguments),
              token2
            );
          };
        }
      }
      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
      }
      function makeFormatFunction(format2) {
        var array = format2.match(formattingTokens), i6, length;
        for (i6 = 0, length = array.length; i6 < length; i6++) {
          if (formatTokenFunctions[array[i6]]) {
            array[i6] = formatTokenFunctions[array[i6]];
          } else {
            array[i6] = removeFormattingTokens(array[i6]);
          }
        }
        return function(mom) {
          var output = "", i7;
          for (i7 = 0; i7 < length; i7++) {
            output += isFunction(array[i7]) ? array[i7].call(mom, format2) : array[i7];
          }
          return output;
        };
      }
      function formatMoment(m5, format2) {
        if (!m5.isValid()) {
          return m5.localeData().invalidDate();
        }
        format2 = expandFormat(format2, m5.localeData());
        formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
        return formatFunctions[format2](m5);
      }
      function expandFormat(format2, locale2) {
        var i6 = 5;
        function replaceLongDateFormatTokens(input) {
          return locale2.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i6 >= 0 && localFormattingTokens.test(format2)) {
          format2 = format2.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
          );
          localFormattingTokens.lastIndex = 0;
          i6 -= 1;
        }
        return format2;
      }
      var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function longDateFormat(key) {
        var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format2 || !formatUpper) {
          return format2;
        }
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
          if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
            return tok.slice(1);
          }
          return tok;
        }).join("");
        return this._longDateFormat[key];
      }
      var defaultInvalidDate = "Invalid date";
      function invalidDate() {
        return this._invalidDate;
      }
      var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
      function ordinal(number) {
        return this._ordinal.replace("%d", number);
      }
      var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }
      function pastFuture(diff2, output) {
        var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
        return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
      }
      var aliases = {};
      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
      }
      function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
      }
      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }
        return normalizedInput;
      }
      var priorities = {};
      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }
      function getPrioritizedUnits(unitsObj) {
        var units = [], u5;
        for (u5 in unitsObj) {
          if (hasOwnProp(unitsObj, u5)) {
            units.push({ unit: u5, priority: priorities[u5] });
          }
        }
        units.sort(function(a5, b4) {
          return a5.priority - b4.priority;
        });
        return units;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
      function absFloor(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }
        return value;
      }
      function makeGetSet(unit, keepTime) {
        return function(value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }
      function get(mom, unit) {
        return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
      }
      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            value = toInt(value);
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
              value,
              mom.month(),
              daysInMonth(value, mom.month())
            );
          } else {
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
          }
        }
      }
      function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units]();
        }
        return this;
      }
      function stringSet(units, value) {
        if (typeof units === "object") {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units), i6, prioritizedLen = prioritized.length;
          for (i6 = 0; i6 < prioritizedLen; i6++) {
            this[prioritized[i6].unit](units[prioritized[i6].unit]);
          }
        } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units](value);
          }
        }
        return this;
      }
      var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
      regexes = {};
      function addRegexToken(token2, regex, strictRegex) {
        regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }
      function getParseRegexForToken(token2, config) {
        if (!hasOwnProp(regexes, token2)) {
          return new RegExp(unescapeFormat(token2));
        }
        return regexes[token2](config._strict, config._locale);
      }
      function unescapeFormat(s7) {
        return regexEscape(
          s7.replace("\\", "").replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function(matched, p1, p22, p32, p4) {
              return p1 || p22 || p32 || p4;
            }
          )
        );
      }
      function regexEscape(s7) {
        return s7.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      var tokens = {};
      function addParseToken(token2, callback) {
        var i6, func = callback, tokenLen;
        if (typeof token2 === "string") {
          token2 = [token2];
        }
        if (isNumber(callback)) {
          func = function(input, array) {
            array[callback] = toInt(input);
          };
        }
        tokenLen = token2.length;
        for (i6 = 0; i6 < tokenLen; i6++) {
          tokens[token2[i6]] = func;
        }
      }
      function addWeekParseToken(token2, callback) {
        addParseToken(token2, function(input, array, config, token3) {
          config._w = config._w || {};
          callback(input, config._w, config, token3);
        });
      }
      function addTimeToArrayFromToken(token2, input, config) {
        if (input != null && hasOwnProp(tokens, token2)) {
          tokens[token2](input, config._a, config, token2);
        }
      }
      var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
      function mod(n5, x6) {
        return (n5 % x6 + x6) % x6;
      }
      var indexOf;
      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function(o12) {
          var i6;
          for (i6 = 0; i6 < this.length; ++i6) {
            if (this[i6] === o12) {
              return i6;
            }
          }
          return -1;
        };
      }
      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }
      addFormatToken("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      });
      addFormatToken("MMM", 0, 0, function(format2) {
        return this.localeData().monthsShort(this, format2);
      });
      addFormatToken("MMMM", 0, 0, function(format2) {
        return this.localeData().months(this, format2);
      });
      addUnitAlias("month", "M");
      addUnitPriority("month", 8);
      addRegexToken("M", match1to2);
      addRegexToken("MM", match1to2, match2);
      addRegexToken("MMM", function(isStrict, locale2) {
        return locale2.monthsShortRegex(isStrict);
      });
      addRegexToken("MMMM", function(isStrict, locale2) {
        return locale2.monthsRegex(isStrict);
      });
      addParseToken(["M", "MM"], function(input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
        var month = config._locale.monthsParse(input, token2, config._strict);
        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      });
      var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
      function localeMonths(m5, format2) {
        if (!m5) {
          return isArray(this._months) ? this._months : this._months["standalone"];
        }
        return isArray(this._months) ? this._months[m5.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m5.month()];
      }
      function localeMonthsShort(m5, format2) {
        if (!m5) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m5.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m5.month()];
      }
      function handleStrictParse(monthName, format2, strict) {
        var i6, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i6 = 0; i6 < 12; ++i6) {
            mom = createUTC([2e3, i6]);
            this._shortMonthsParse[i6] = this.monthsShort(
              mom,
              ""
            ).toLocaleLowerCase();
            this._longMonthsParse[i6] = this.months(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeMonthsParse(monthName, format2, strict) {
        var i6, mom, regex;
        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format2, strict);
        }
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }
        for (i6 = 0; i6 < 12; i6++) {
          mom = createUTC([2e3, i6]);
          if (strict && !this._longMonthsParse[i6]) {
            this._longMonthsParse[i6] = new RegExp(
              "^" + this.months(mom, "").replace(".", "") + "$",
              "i"
            );
            this._shortMonthsParse[i6] = new RegExp(
              "^" + this.monthsShort(mom, "").replace(".", "") + "$",
              "i"
            );
          }
          if (!strict && !this._monthsParse[i6]) {
            regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
            this._monthsParse[i6] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "MMMM" && this._longMonthsParse[i6].test(monthName)) {
            return i6;
          } else if (strict && format2 === "MMM" && this._shortMonthsParse[i6].test(monthName)) {
            return i6;
          } else if (!strict && this._monthsParse[i6].test(monthName)) {
            return i6;
          }
        }
      }
      function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) {
          return mom;
        }
        if (typeof value === "string") {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value);
            if (!isNumber(value)) {
              return mom;
            }
          }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom;
      }
      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, "Month");
        }
      }
      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }
      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsShortRegex")) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }
      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsRegex")) {
            this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }
      function computeMonthsParse() {
        function cmpLenRev(a5, b4) {
          return b4.length - a5.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i6, mom;
        for (i6 = 0; i6 < 12; i6++) {
          mom = createUTC([2e3, i6]);
          shortPieces.push(this.monthsShort(mom, ""));
          longPieces.push(this.months(mom, ""));
          mixedPieces.push(this.months(mom, ""));
          mixedPieces.push(this.monthsShort(mom, ""));
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i6 = 0; i6 < 12; i6++) {
          shortPieces[i6] = regexEscape(shortPieces[i6]);
          longPieces[i6] = regexEscape(longPieces[i6]);
        }
        for (i6 = 0; i6 < 24; i6++) {
          mixedPieces[i6] = regexEscape(mixedPieces[i6]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
          "^(" + longPieces.join("|") + ")",
          "i"
        );
        this._monthsShortStrictRegex = new RegExp(
          "^(" + shortPieces.join("|") + ")",
          "i"
        );
      }
      addFormatToken("Y", 0, 0, function() {
        var y6 = this.year();
        return y6 <= 9999 ? zeroFill(y6, 4) : "+" + y6;
      });
      addFormatToken(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      });
      addFormatToken(0, ["YYYY", 4], 0, "year");
      addFormatToken(0, ["YYYYY", 5], 0, "year");
      addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
      addUnitAlias("year", "y");
      addUnitPriority("year", 1);
      addRegexToken("Y", matchSigned);
      addRegexToken("YY", match1to2, match2);
      addRegexToken("YYYY", match1to4, match4);
      addRegexToken("YYYYY", match1to6, match6);
      addRegexToken("YYYYYY", match1to6, match6);
      addParseToken(["YYYYY", "YYYYYY"], YEAR);
      addParseToken("YYYY", function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken("YY", function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken("Y", function(input, array) {
        array[YEAR] = parseInt(input, 10);
      });
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
      };
      var getSetYear = makeGetSet("FullYear", true);
      function getIsLeapYear() {
        return isLeapYear(this.year());
      }
      function createDate(y6, m5, d8, h4, M4, s7, ms) {
        var date;
        if (y6 < 100 && y6 >= 0) {
          date = new Date(y6 + 400, m5, d8, h4, M4, s7, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y6);
          }
        } else {
          date = new Date(y6, m5, d8, h4, M4, s7, ms);
        }
        return date;
      }
      function createUTCDate(y6) {
        var date, args;
        if (y6 < 100 && y6 >= 0) {
          args = Array.prototype.slice.call(arguments);
          args[0] = y6 + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y6);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
      }
      function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      }
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }
        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }
      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }
        return {
          week: resWeek,
          year: resYear
        };
      }
      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }
      addFormatToken("w", ["ww", 2], "wo", "week");
      addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
      addUnitAlias("week", "w");
      addUnitAlias("isoWeek", "W");
      addUnitPriority("week", 5);
      addUnitPriority("isoWeek", 5);
      addRegexToken("w", match1to2);
      addRegexToken("ww", match1to2, match2);
      addRegexToken("W", match1to2);
      addRegexToken("WW", match1to2, match2);
      addWeekParseToken(
        ["w", "ww", "W", "WW"],
        function(input, week, config, token2) {
          week[token2.substr(0, 1)] = toInt(input);
        }
      );
      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }
      var defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6
        // The week that contains Jan 6th is the first week of the year.
      };
      function localeFirstDayOfWeek() {
        return this._week.dow;
      }
      function localeFirstDayOfYear() {
        return this._week.doy;
      }
      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      addFormatToken("d", 0, "do", "day");
      addFormatToken("dd", 0, 0, function(format2) {
        return this.localeData().weekdaysMin(this, format2);
      });
      addFormatToken("ddd", 0, 0, function(format2) {
        return this.localeData().weekdaysShort(this, format2);
      });
      addFormatToken("dddd", 0, 0, function(format2) {
        return this.localeData().weekdays(this, format2);
      });
      addFormatToken("e", 0, 0, "weekday");
      addFormatToken("E", 0, 0, "isoWeekday");
      addUnitAlias("day", "d");
      addUnitAlias("weekday", "e");
      addUnitAlias("isoWeekday", "E");
      addUnitPriority("day", 11);
      addUnitPriority("weekday", 11);
      addUnitPriority("isoWeekday", 11);
      addRegexToken("d", match1to2);
      addRegexToken("e", match1to2);
      addRegexToken("E", match1to2);
      addRegexToken("dd", function(isStrict, locale2) {
        return locale2.weekdaysMinRegex(isStrict);
      });
      addRegexToken("ddd", function(isStrict, locale2) {
        return locale2.weekdaysShortRegex(isStrict);
      });
      addRegexToken("dddd", function(isStrict, locale2) {
        return locale2.weekdaysRegex(isStrict);
      });
      addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
        var weekday = config._locale.weekdaysParse(input, token2, config._strict);
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
        week[token2] = toInt(input);
      });
      function parseWeekday(input, locale2) {
        if (typeof input !== "string") {
          return input;
        }
        if (!isNaN(input)) {
          return parseInt(input, 10);
        }
        input = locale2.weekdaysParse(input);
        if (typeof input === "number") {
          return input;
        }
        return null;
      }
      function parseIsoWeekday(input, locale2) {
        if (typeof input === "string") {
          return locale2.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }
      function shiftWeekdays(ws, n5) {
        return ws.slice(n5, 7).concat(ws.slice(0, n5));
      }
      var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
      function localeWeekdays(m5, format2) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m5 && m5 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
        return m5 === true ? shiftWeekdays(weekdays, this._week.dow) : m5 ? weekdays[m5.day()] : weekdays;
      }
      function localeWeekdaysShort(m5) {
        return m5 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m5 ? this._weekdaysShort[m5.day()] : this._weekdaysShort;
      }
      function localeWeekdaysMin(m5) {
        return m5 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m5 ? this._weekdaysMin[m5.day()] : this._weekdaysMin;
      }
      function handleStrictParse$1(weekdayName, format2, strict) {
        var i6, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];
          for (i6 = 0; i6 < 7; ++i6) {
            mom = createUTC([2e3, 1]).day(i6);
            this._minWeekdaysParse[i6] = this.weekdaysMin(
              mom,
              ""
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i6] = this.weekdaysShort(
              mom,
              ""
            ).toLocaleLowerCase();
            this._weekdaysParse[i6] = this.weekdays(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeWeekdaysParse(weekdayName, format2, strict) {
        var i6, mom, regex;
        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format2, strict);
        }
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }
        for (i6 = 0; i6 < 7; i6++) {
          mom = createUTC([2e3, 1]).day(i6);
          if (strict && !this._fullWeekdaysParse[i6]) {
            this._fullWeekdaysParse[i6] = new RegExp(
              "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
            this._shortWeekdaysParse[i6] = new RegExp(
              "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
            this._minWeekdaysParse[i6] = new RegExp(
              "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
          }
          if (!this._weekdaysParse[i6]) {
            regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
            this._weekdaysParse[i6] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "dddd" && this._fullWeekdaysParse[i6].test(weekdayName)) {
            return i6;
          } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i6].test(weekdayName)) {
            return i6;
          } else if (strict && format2 === "dd" && this._minWeekdaysParse[i6].test(weekdayName)) {
            return i6;
          } else if (!strict && this._weekdaysParse[i6].test(weekdayName)) {
            return i6;
          }
        }
      }
      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, "d");
        } else {
          return day;
        }
      }
      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
      }
      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }
      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }
      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }
      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }
      function computeWeekdaysParse() {
        function cmpLenRev(a5, b4) {
          return b4.length - a5.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i6, mom, minp, shortp, longp;
        for (i6 = 0; i6 < 7; i6++) {
          mom = createUTC([2e3, 1]).day(i6);
          minp = regexEscape(this.weekdaysMin(mom, ""));
          shortp = regexEscape(this.weekdaysShort(mom, ""));
          longp = regexEscape(this.weekdays(mom, ""));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp(
          "^(" + longPieces.join("|") + ")",
          "i"
        );
        this._weekdaysShortStrictRegex = new RegExp(
          "^(" + shortPieces.join("|") + ")",
          "i"
        );
        this._weekdaysMinStrictRegex = new RegExp(
          "^(" + minPieces.join("|") + ")",
          "i"
        );
      }
      function hFormat() {
        return this.hours() % 12 || 12;
      }
      function kFormat() {
        return this.hours() || 24;
      }
      addFormatToken("H", ["HH", 2], 0, "hour");
      addFormatToken("h", ["hh", 2], 0, hFormat);
      addFormatToken("k", ["kk", 2], 0, kFormat);
      addFormatToken("hmm", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken("hmmss", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken("Hmm", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken("Hmmss", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      function meridiem(token2, lowercase) {
        addFormatToken(token2, 0, 0, function() {
          return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
          );
        });
      }
      meridiem("a", true);
      meridiem("A", false);
      addUnitAlias("hour", "h");
      addUnitPriority("hour", 13);
      function matchMeridiem(isStrict, locale2) {
        return locale2._meridiemParse;
      }
      addRegexToken("a", matchMeridiem);
      addRegexToken("A", matchMeridiem);
      addRegexToken("H", match1to2);
      addRegexToken("h", match1to2);
      addRegexToken("k", match1to2);
      addRegexToken("HH", match1to2, match2);
      addRegexToken("hh", match1to2, match2);
      addRegexToken("kk", match1to2, match2);
      addRegexToken("hmm", match3to4);
      addRegexToken("hmmss", match5to6);
      addRegexToken("Hmm", match3to4);
      addRegexToken("Hmmss", match5to6);
      addParseToken(["H", "HH"], HOUR);
      addParseToken(["k", "kk"], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(["a", "A"], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(["h", "hh"], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("Hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken("Hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      });
      function localeIsPM(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
      }
      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
      function localeMeridiem(hours2, minutes2, isLower) {
        if (hours2 > 11) {
          return isLower ? "pm" : "PM";
        } else {
          return isLower ? "am" : "AM";
        }
      }
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      };
      var locales = {}, localeFamilies = {}, globalLocale;
      function commonPrefix(arr1, arr2) {
        var i6, minl = Math.min(arr1.length, arr2.length);
        for (i6 = 0; i6 < minl; i6 += 1) {
          if (arr1[i6] !== arr2[i6]) {
            return i6;
          }
        }
        return minl;
      }
      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
      }
      function chooseLocale(names) {
        var i6 = 0, j2, next, locale2, split;
        while (i6 < names.length) {
          split = normalizeLocale(names[i6]).split("-");
          j2 = split.length;
          next = normalizeLocale(names[i6 + 1]);
          next = next ? next.split("-") : null;
          while (j2 > 0) {
            locale2 = loadLocale(split.slice(0, j2).join("-"));
            if (locale2) {
              return locale2;
            }
            if (next && next.length >= j2 && commonPrefix(split, next) >= j2 - 1) {
              break;
            }
            j2--;
          }
          i6++;
        }
        return globalLocale;
      }
      function isLocaleNameSane(name) {
        return name.match("^[^/\\\\]*$") != null;
      }
      function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = __require;
            aliasedRequire("./locale/" + name);
            getSetGlobalLocale(oldLocale);
          } catch (e4) {
            locales[name] = null;
          }
        }
        return locales[name];
      }
      function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }
          if (data) {
            globalLocale = data;
          } else {
            if (typeof console !== "undefined" && console.warn) {
              console.warn(
                "Locale " + key + " not found. Did you forget to load it?"
              );
            }
          }
        }
        return globalLocale._abbr;
      }
      function defineLocale(name, config) {
        if (config !== null) {
          var locale2, parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
            deprecateSimple(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            );
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale2 = loadLocale(config.parentLocale);
              if (locale2 != null) {
                parentConfig = locale2._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name,
                  config
                });
                return null;
              }
            }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));
          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function(x6) {
              defineLocale(x6.name, x6.config);
            });
          }
          getSetGlobalLocale(name);
          return locales[name];
        } else {
          delete locales[name];
          return null;
        }
      }
      function updateLocale(name, config) {
        if (config != null) {
          var locale2, tmpLocale, parentConfig = baseConfig;
          if (locales[name] != null && locales[name].parentLocale != null) {
            locales[name].set(mergeConfigs(locales[name]._config, config));
          } else {
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            if (tmpLocale == null) {
              config.abbr = name;
            }
            locale2 = new Locale(config);
            locale2.parentLocale = locales[name];
            locales[name] = locale2;
          }
          getSetGlobalLocale(name);
        } else {
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name);
              }
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }
        return locales[name];
      }
      function getLocale(key) {
        var locale2;
        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }
        if (!key) {
          return globalLocale;
        }
        if (!isArray(key)) {
          locale2 = loadLocale(key);
          if (locale2) {
            return locale2;
          }
          key = [key];
        }
        return chooseLocale(key);
      }
      function listLocales() {
        return keys(locales);
      }
      function checkOverflow(m5) {
        var overflow, a5 = m5._a;
        if (a5 && getParsingFlags(m5).overflow === -2) {
          overflow = a5[MONTH] < 0 || a5[MONTH] > 11 ? MONTH : a5[DATE] < 1 || a5[DATE] > daysInMonth(a5[YEAR], a5[MONTH]) ? DATE : a5[HOUR] < 0 || a5[HOUR] > 24 || a5[HOUR] === 24 && (a5[MINUTE] !== 0 || a5[SECOND] !== 0 || a5[MILLISECOND] !== 0) ? HOUR : a5[MINUTE] < 0 || a5[MINUTE] > 59 ? MINUTE : a5[SECOND] < 0 || a5[SECOND] > 59 ? SECOND : a5[MILLISECOND] < 0 || a5[MILLISECOND] > 999 ? MILLISECOND : -1;
          if (getParsingFlags(m5)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }
          if (getParsingFlags(m5)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }
          if (getParsingFlags(m5)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }
          getParsingFlags(m5).overflow = overflow;
        }
        return m5;
      }
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, false],
        ["YYYY", /\d{4}/, false]
      ], isoTimes = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function configFromISO(config) {
        var i6, l8, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
        if (match) {
          getParsingFlags(config).iso = true;
          for (i6 = 0, l8 = isoDatesLen; i6 < l8; i6++) {
            if (isoDates[i6][1].exec(match[1])) {
              dateFormat = isoDates[i6][0];
              allowTime = isoDates[i6][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i6 = 0, l8 = isoTimesLen; i6 < l8; i6++) {
              if (isoTimes[i6][1].exec(match[3])) {
                timeFormat = (match[2] || " ") + isoTimes[i6][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = "Z";
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }
      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
          untruncateYear(yearStr),
          defaultLocaleMonthsShort.indexOf(monthStr),
          parseInt(dayStr, 10),
          parseInt(hourStr, 10),
          parseInt(minuteStr, 10)
        ];
        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }
        return result;
      }
      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
          return 2e3 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }
        return year;
      }
      function preprocessRFC2822(s7) {
        return s7.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
            parsedInput[0],
            parsedInput[1],
            parsedInput[2]
          ).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }
      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          return 0;
        } else {
          var hm = parseInt(numOffset, 10), m5 = hm % 100, h4 = (hm - m5) / 100;
          return h4 * 60 + m5;
        }
      }
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
          parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
          );
          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }
          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
          config._d = /* @__PURE__ */ new Date(+matched[1]);
          return;
        }
        configFromISO(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        if (config._strict) {
          config._isValid = false;
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      hooks.createFromInputFallback = deprecate(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(config) {
          config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
        }
      );
      function defaults(a5, b4, c8) {
        if (a5 != null) {
          return a5;
        }
        if (b4 != null) {
          return b4;
        }
        return c8;
      }
      function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
          return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate()
          ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }
      function configFromArray(config) {
        var i6, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
          return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }
          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        }
        for (i6 = 0; i6 < 3 && config._a[i6] == null; ++i6) {
          config._a[i6] = input[i6] = currentDate[i6];
        }
        for (; i6 < 7; i6++) {
          config._a[i6] = input[i6] = config._a[i6] == null ? i6 === 2 ? 1 : 0 : config._a[i6];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(
          null,
          input
        );
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
          config._a[HOUR] = 24;
        }
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }
      function dayOfYearFromWeekInfo(config) {
        var w5, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w5 = config._w;
        if (w5.GG != null || w5.W != null || w5.E != null) {
          dow = 1;
          doy = 4;
          weekYear = defaults(
            w5.GG,
            config._a[YEAR],
            weekOfYear(createLocal(), 1, 4).year
          );
          week = defaults(w5.W, 1);
          weekday = defaults(w5.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w5.gg, config._a[YEAR], curWeek.year);
          week = defaults(w5.w, curWeek.week);
          if (w5.d != null) {
            weekday = w5.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w5.e != null) {
            weekday = w5.e + dow;
            if (w5.e < 0 || w5.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            weekday = dow;
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }
      hooks.ISO_8601 = function() {
      };
      hooks.RFC_2822 = function() {
      };
      function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = "" + config._i, i6, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
        tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens2.length;
        for (i6 = 0; i6 < tokenLen; i6++) {
          token2 = tokens2[i6];
          parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(
              string.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
          }
          if (formatTokenFunctions[token2]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token2);
            }
            addTimeToArrayFromToken(token2, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token2);
          }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = void 0;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(
          config._locale,
          config._a[HOUR],
          config._meridiem
        );
        era = getParsingFlags(config).era;
        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }
        configFromArray(config);
        checkOverflow(config);
      }
      function meridiemFixWrap(locale2, hour, meridiem2) {
        var isPm;
        if (meridiem2 == null) {
          return hour;
        }
        if (locale2.meridiemHour != null) {
          return locale2.meridiemHour(hour, meridiem2);
        } else if (locale2.isPM != null) {
          isPm = locale2.isPM(meridiem2);
          if (isPm && hour < 12) {
            hour += 12;
          }
          if (!isPm && hour === 12) {
            hour = 0;
          }
          return hour;
        } else {
          return hour;
        }
      }
      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i6, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
        if (configfLen === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = /* @__PURE__ */ new Date(NaN);
          return;
        }
        for (i6 = 0; i6 < configfLen; i6++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i6];
          configFromStringAndFormat(tempConfig);
          if (isValid(tempConfig)) {
            validFormatFound = true;
          }
          currentScore += getParsingFlags(tempConfig).charsLeftOver;
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;
          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }
        extend(config, bestMoment || tempConfig);
      }
      function configFromObject(config) {
        if (config._d) {
          return;
        }
        var i6 = normalizeObjectUnits(config._i), dayOrDate = i6.day === void 0 ? i6.date : i6.day;
        config._a = map(
          [i6.year, i6.month, dayOrDate, i6.hour, i6.minute, i6.second, i6.millisecond],
          function(obj) {
            return obj && parseInt(obj, 10);
          }
        );
        configFromArray(config);
      }
      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
          res.add(1, "d");
          res._nextDay = void 0;
        }
        return res;
      }
      function prepareConfig(config) {
        var input = config._i, format2 = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format2 === void 0 && input === "") {
          return createInvalid({ nullInput: true });
        }
        if (typeof input === "string") {
          config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format2)) {
          configFromStringAndArray(config);
        } else if (format2) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }
        if (!isValid(config)) {
          config._d = null;
        }
        return config;
      }
      function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function(obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
        var c8 = {};
        if (format2 === true || format2 === false) {
          strict = format2;
          format2 = void 0;
        }
        if (locale2 === true || locale2 === false) {
          strict = locale2;
          locale2 = void 0;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = void 0;
        }
        c8._isAMomentObject = true;
        c8._useUTC = c8._isUTC = isUTC;
        c8._l = locale2;
        c8._i = input;
        c8._f = format2;
        c8._strict = strict;
        return createFromConfig(c8);
      }
      function createLocal(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, false);
      }
      var prototypeMin = deprecate(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
          } else {
            return createInvalid();
          }
        }
      ), prototypeMax = deprecate(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        }
      );
      function pickBy(fn, moments) {
        var res, i6;
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal();
        }
        res = moments[0];
        for (i6 = 1; i6 < moments.length; ++i6) {
          if (!moments[i6].isValid() || moments[i6][fn](res)) {
            res = moments[i6];
          }
        }
        return res;
      }
      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
      }
      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
      }
      var now = function() {
        return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
      };
      var ordering = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
      ];
      function isDurationValid(m5) {
        var key, unitHasDecimal = false, i6, orderLen = ordering.length;
        for (key in m5) {
          if (hasOwnProp(m5, key) && !(indexOf.call(ordering, key) !== -1 && (m5[key] == null || !isNaN(m5[key])))) {
            return false;
          }
        }
        for (i6 = 0; i6 < orderLen; ++i6) {
          if (m5[ordering[i6]]) {
            if (unitHasDecimal) {
              return false;
            }
            if (parseFloat(m5[ordering[i6]]) !== toInt(m5[ordering[i6]])) {
              unitHasDecimal = true;
            }
          }
        }
        return true;
      }
      function isValid$1() {
        return this._isValid;
      }
      function createInvalid$1() {
        return createDuration(NaN);
      }
      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
        minutes2 * 6e4 + // 1000 * 60
        hours2 * 1e3 * 60 * 60;
        this._days = +days2 + weeks2 * 7;
        this._months = +months2 + quarters * 3 + years2 * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
      }
      function isDuration(obj) {
        return obj instanceof Duration;
      }
      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }
      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i6;
        for (i6 = 0; i6 < len; i6++) {
          if (dontConvert && array1[i6] !== array2[i6] || !dontConvert && toInt(array1[i6]) !== toInt(array2[i6])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }
      function offset(token2, separator) {
        addFormatToken(token2, 0, 0, function() {
          var offset2 = this.utcOffset(), sign2 = "+";
          if (offset2 < 0) {
            offset2 = -offset2;
            sign2 = "-";
          }
          return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
        });
      }
      offset("Z", ":");
      offset("ZZ", "");
      addRegexToken("Z", matchShortOffset);
      addRegexToken("ZZ", matchShortOffset);
      addParseToken(["Z", "ZZ"], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      });
      var chunkOffset = /([\+\-]|\d\d)/gi;
      function offsetFromString(matcher, string) {
        var matches = (string || "").match(matcher), chunk, parts, minutes2;
        if (matches === null) {
          return null;
        }
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
        minutes2 = +(parts[1] * 60) + toInt(parts[2]);
        return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
      }
      function cloneWithOffset(input, model) {
        var res, diff2;
        if (model._isUTC) {
          res = model.clone();
          diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          res._d.setTime(res._d.valueOf() + diff2);
          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }
      function getDateOffset(m5) {
        return -Math.round(m5._d.getTimezoneOffset());
      }
      hooks.updateOffset = function() {
      };
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset2 = this._offset || 0, localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === "string") {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, "m");
          }
          if (offset2 !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(
                this,
                createDuration(input - offset2, "m"),
                1,
                false
              );
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset2 : getDateOffset(this);
        }
      }
      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== "string") {
            input = -input;
          }
          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }
      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }
      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.subtract(getDateOffset(this), "m");
          }
        }
        return this;
      }
      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }
      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }
      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }
        var c8 = {}, other;
        copyConfig(c8, this);
        c8 = prepareConfig(c8);
        if (c8._a) {
          other = c8._isUTC ? createUTC(c8._a) : createLocal(c8._a);
          this._isDSTShifted = this.isValid() && compareArrays(c8._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }
        return this._isDSTShifted;
      }
      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }
      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }
      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function createDuration(input, key) {
        var duration = input, match = null, sign2, ret, diffRes;
        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};
          if (key) {
            duration[key] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign2 = match[1] === "-" ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign2,
            h: toInt(match[HOUR]) * sign2,
            m: toInt(match[MINUTE]) * sign2,
            s: toInt(match[SECOND]) * sign2,
            ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
            // the millisecond decimal point is included in the match
          };
        } else if (match = isoRegex.exec(input)) {
          sign2 = match[1] === "-" ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign2),
            M: parseIso(match[3], sign2),
            w: parseIso(match[4], sign2),
            d: parseIso(match[5], sign2),
            h: parseIso(match[6], sign2),
            m: parseIso(match[7], sign2),
            s: parseIso(match[8], sign2)
          };
        } else if (duration == null) {
          duration = {};
        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
          diffRes = momentsDifference(
            createLocal(duration.from),
            createLocal(duration.to)
          );
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) {
          ret._locale = input._locale;
        }
        if (isDuration(input) && hasOwnProp(input, "_isValid")) {
          ret._isValid = input._isValid;
        }
        return ret;
      }
      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;
      function parseIso(inp, sign2) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign2;
      }
      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
          --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
      }
      function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return { milliseconds: 0, months: 0 };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }
        return res;
      }
      function createAdder(direction, name) {
        return function(val, period) {
          var dur, tmp;
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(
              name,
              "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            );
            tmp = val;
            val = period;
            period = tmp;
          }
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }
      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
        if (!mom.isValid()) {
          return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months2) {
          setMonth(mom, get(mom, "Month") + months2 * isAdding);
        }
        if (days2) {
          set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
        }
        if (milliseconds2) {
          mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days2 || months2);
        }
      }
      var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
      function isString(input) {
        return typeof input === "string" || input instanceof String;
      }
      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
      }
      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms"
        ], i6, property, propertyLen = properties.length;
        for (i6 = 0; i6 < propertyLen; i6 += 1) {
          property = properties[i6];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) {
          dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
          }).length === 0;
        }
        return arrayTest && dataTypeTest;
      }
      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], i6, property;
        for (i6 = 0; i6 < properties.length; i6 += 1) {
          property = properties[i6];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function getCalendarFormat(myMoment, now2) {
        var diff2 = myMoment.diff(now2, "days", true);
        return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
      }
      function calendar$1(time, formats) {
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = void 0;
            formats = void 0;
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0];
            formats = void 0;
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0];
            time = void 0;
          }
        }
        var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
        return this.format(
          output || this.localeData().calendar(format2, this, createLocal(now2))
        );
      }
      function clone() {
        return new Moment(this);
      }
      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }
      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }
      function isBetween(from2, to2, units, inclusivity) {
        var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }
      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }
      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }
      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }
      function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
          return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
          return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch (units) {
          case "year":
            output = monthDiff(this, that) / 12;
            break;
          case "month":
            output = monthDiff(this, that);
            break;
          case "quarter":
            output = monthDiff(this, that) / 3;
            break;
          case "second":
            output = (this - that) / 1e3;
            break;
          case "minute":
            output = (this - that) / 6e4;
            break;
          case "hour":
            output = (this - that) / 36e5;
            break;
          case "day":
            output = (this - that - zoneDelta) / 864e5;
            break;
          case "week":
            output = (this - that - zoneDelta) / 6048e5;
            break;
          default:
            output = this - that;
        }
        return asFloat ? output : absFloor(output);
      }
      function monthDiff(a5, b4) {
        if (a5.date() < b4.date()) {
          return -monthDiff(b4, a5);
        }
        var wholeMonthDiff = (b4.year() - a5.year()) * 12 + (b4.month() - a5.month()), anchor = a5.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b4 - anchor < 0) {
          anchor2 = a5.clone().add(wholeMonthDiff - 1, "months");
          adjust = (b4 - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a5.clone().add(wholeMonthDiff + 1, "months");
          adjust = (b4 - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
      }
      hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
      hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc = keepOffset !== true, m5 = utc ? this.clone().utc() : this;
        if (m5.year() < 0 || m5.year() > 9999) {
          return formatMoment(
            m5,
            utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        if (isFunction(Date.prototype.toISOString)) {
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m5, "Z"));
          }
        }
        return formatMoment(
          m5,
          utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      function inspect() {
        if (!this.isValid()) {
          return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment", zone = "", prefix, year, datetime, suffix;
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
          zone = "Z";
        }
        prefix = "[" + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }
      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }
      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }
      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      }
      function locale(key) {
        var newLocaleData;
        if (key === void 0) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }
      var lang = deprecate(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function(key) {
          if (key === void 0) {
            return this.localeData();
          } else {
            return this.locale(key);
          }
        }
      );
      function localeData() {
        return this._locale;
      }
      var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }
      function localStartOfDate(y6, m5, d8) {
        if (y6 < 100 && y6 >= 0) {
          return new Date(y6 + 400, m5, d8) - MS_PER_400_YEARS;
        } else {
          return new Date(y6, m5, d8).valueOf();
        }
      }
      function utcStartOfDate(y6, m5, d8) {
        if (y6 < 100 && y6 >= 0) {
          return Date.UTC(y6 + 400, m5, d8) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y6, m5, d8);
        }
      }
      function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time = startOfDate(this.year(), 0, 1);
            break;
          case "quarter":
            time = startOfDate(
              this.year(),
              this.month() - this.month() % 3,
              1
            );
            break;
          case "month":
            time = startOfDate(this.year(), this.month(), 1);
            break;
          case "week":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday()
            );
            break;
          case "isoWeek":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date());
            break;
          case "hour":
            time = this._d.valueOf();
            time -= mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            );
            break;
          case "minute":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;
          case "second":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            time = startOfDate(
              this.year(),
              this.month() - this.month() % 3 + 3,
              1
            ) - 1;
            break;
          case "month":
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday() + 7
            ) - 1;
            break;
          case "isoWeek":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            ) - 1;
            break;
          case "minute":
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;
          case "second":
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function unix() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function toDate() {
        return new Date(this.valueOf());
      }
      function toArray() {
        var m5 = this;
        return [
          m5.year(),
          m5.month(),
          m5.date(),
          m5.hour(),
          m5.minute(),
          m5.second(),
          m5.millisecond()
        ];
      }
      function toObject() {
        var m5 = this;
        return {
          years: m5.year(),
          months: m5.month(),
          date: m5.date(),
          hours: m5.hours(),
          minutes: m5.minutes(),
          seconds: m5.seconds(),
          milliseconds: m5.milliseconds()
        };
      }
      function toJSON() {
        return this.isValid() ? this.toISOString() : null;
      }
      function isValid$2() {
        return isValid(this);
      }
      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }
      function invalidAt() {
        return getParsingFlags(this).overflow;
      }
      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      addFormatToken("N", 0, 0, "eraAbbr");
      addFormatToken("NN", 0, 0, "eraAbbr");
      addFormatToken("NNN", 0, 0, "eraAbbr");
      addFormatToken("NNNN", 0, 0, "eraName");
      addFormatToken("NNNNN", 0, 0, "eraNarrow");
      addFormatToken("y", ["y", 1], "yo", "eraYear");
      addFormatToken("y", ["yy", 2], 0, "eraYear");
      addFormatToken("y", ["yyy", 3], 0, "eraYear");
      addFormatToken("y", ["yyyy", 4], 0, "eraYear");
      addRegexToken("N", matchEraAbbr);
      addRegexToken("NN", matchEraAbbr);
      addRegexToken("NNN", matchEraAbbr);
      addRegexToken("NNNN", matchEraName);
      addRegexToken("NNNNN", matchEraNarrow);
      addParseToken(
        ["N", "NN", "NNN", "NNNN", "NNNNN"],
        function(input, array, config, token2) {
          var era = config._locale.erasParse(input, token2, config._strict);
          if (era) {
            getParsingFlags(config).era = era;
          } else {
            getParsingFlags(config).invalidEra = input;
          }
        }
      );
      addRegexToken("y", matchUnsigned);
      addRegexToken("yy", matchUnsigned);
      addRegexToken("yyy", matchUnsigned);
      addRegexToken("yyyy", matchUnsigned);
      addRegexToken("yo", matchEraYearOrdinal);
      addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
      addParseToken(["yo"], function(input, array, config, token2) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }
        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      });
      function localeEras(m5, format2) {
        var i6, l8, date, eras = this._eras || getLocale("en")._eras;
        for (i6 = 0, l8 = eras.length; i6 < l8; ++i6) {
          switch (typeof eras[i6].since) {
            case "string":
              date = hooks(eras[i6].since).startOf("day");
              eras[i6].since = date.valueOf();
              break;
          }
          switch (typeof eras[i6].until) {
            case "undefined":
              eras[i6].until = Infinity;
              break;
            case "string":
              date = hooks(eras[i6].until).startOf("day").valueOf();
              eras[i6].until = date.valueOf();
              break;
          }
        }
        return eras;
      }
      function localeErasParse(eraName, format2, strict) {
        var i6, l8, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for (i6 = 0, l8 = eras.length; i6 < l8; ++i6) {
          name = eras[i6].name.toUpperCase();
          abbr = eras[i6].abbr.toUpperCase();
          narrow = eras[i6].narrow.toUpperCase();
          if (strict) {
            switch (format2) {
              case "N":
              case "NN":
              case "NNN":
                if (abbr === eraName) {
                  return eras[i6];
                }
                break;
              case "NNNN":
                if (name === eraName) {
                  return eras[i6];
                }
                break;
              case "NNNNN":
                if (narrow === eraName) {
                  return eras[i6];
                }
                break;
            }
          } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i6];
          }
        }
      }
      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === void 0) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }
      function getEraName() {
        var i6, l8, val, eras = this.localeData().eras();
        for (i6 = 0, l8 = eras.length; i6 < l8; ++i6) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i6].since <= val && val <= eras[i6].until) {
            return eras[i6].name;
          }
          if (eras[i6].until <= val && val <= eras[i6].since) {
            return eras[i6].name;
          }
        }
        return "";
      }
      function getEraNarrow() {
        var i6, l8, val, eras = this.localeData().eras();
        for (i6 = 0, l8 = eras.length; i6 < l8; ++i6) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i6].since <= val && val <= eras[i6].until) {
            return eras[i6].narrow;
          }
          if (eras[i6].until <= val && val <= eras[i6].since) {
            return eras[i6].narrow;
          }
        }
        return "";
      }
      function getEraAbbr() {
        var i6, l8, val, eras = this.localeData().eras();
        for (i6 = 0, l8 = eras.length; i6 < l8; ++i6) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i6].since <= val && val <= eras[i6].until) {
            return eras[i6].abbr;
          }
          if (eras[i6].until <= val && val <= eras[i6].since) {
            return eras[i6].abbr;
          }
        }
        return "";
      }
      function getEraYear() {
        var i6, l8, dir, val, eras = this.localeData().eras();
        for (i6 = 0, l8 = eras.length; i6 < l8; ++i6) {
          dir = eras[i6].since <= eras[i6].until ? 1 : -1;
          val = this.clone().startOf("day").valueOf();
          if (eras[i6].since <= val && val <= eras[i6].until || eras[i6].until <= val && val <= eras[i6].since) {
            return (this.year() - hooks(eras[i6].since).year()) * dir + eras[i6].offset;
          }
        }
        return this.year();
      }
      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNameRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
      }
      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, "_erasAbbrRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }
      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNarrowRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }
      function matchEraAbbr(isStrict, locale2) {
        return locale2.erasAbbrRegex(isStrict);
      }
      function matchEraName(isStrict, locale2) {
        return locale2.erasNameRegex(isStrict);
      }
      function matchEraNarrow(isStrict, locale2) {
        return locale2.erasNarrowRegex(isStrict);
      }
      function matchEraYearOrdinal(isStrict, locale2) {
        return locale2._eraYearOrdinalRegex || matchUnsigned;
      }
      function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i6, l8, eras = this.eras();
        for (i6 = 0, l8 = eras.length; i6 < l8; ++i6) {
          namePieces.push(regexEscape(eras[i6].name));
          abbrPieces.push(regexEscape(eras[i6].abbr));
          narrowPieces.push(regexEscape(eras[i6].narrow));
          mixedPieces.push(regexEscape(eras[i6].name));
          mixedPieces.push(regexEscape(eras[i6].abbr));
          mixedPieces.push(regexEscape(eras[i6].narrow));
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp(
          "^(" + narrowPieces.join("|") + ")",
          "i"
        );
      }
      addFormatToken(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function addWeekYearFormatToken(token2, getter) {
        addFormatToken(0, [token2, token2.length], 0, getter);
      }
      addWeekYearFormatToken("gggg", "weekYear");
      addWeekYearFormatToken("ggggg", "weekYear");
      addWeekYearFormatToken("GGGG", "isoWeekYear");
      addWeekYearFormatToken("GGGGG", "isoWeekYear");
      addUnitAlias("weekYear", "gg");
      addUnitAlias("isoWeekYear", "GG");
      addUnitPriority("weekYear", 1);
      addUnitPriority("isoWeekYear", 1);
      addRegexToken("G", matchSigned);
      addRegexToken("g", matchSigned);
      addRegexToken("GG", match1to2, match2);
      addRegexToken("gg", match1to2, match2);
      addRegexToken("GGGG", match1to4, match4);
      addRegexToken("gggg", match1to4, match4);
      addRegexToken("GGGGG", match1to6, match6);
      addRegexToken("ggggg", match1to6, match6);
      addWeekParseToken(
        ["gggg", "ggggg", "GGGG", "GGGGG"],
        function(input, week, config, token2) {
          week[token2.substr(0, 2)] = toInt(input);
        }
      );
      addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
        week[token2] = hooks.parseTwoDigitYear(input);
      });
      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }
      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.isoWeek(),
          this.isoWeekday(),
          1,
          4
        );
      }
      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }
      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }
      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }
      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }
      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
            week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }
      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }
      addFormatToken("Q", 0, "Qo", "quarter");
      addUnitAlias("quarter", "Q");
      addUnitPriority("quarter", 7);
      addRegexToken("Q", match1);
      addParseToken("Q", function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      });
      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }
      addFormatToken("D", ["DD", 2], "Do", "date");
      addUnitAlias("date", "D");
      addUnitPriority("date", 9);
      addRegexToken("D", match1to2);
      addRegexToken("DD", match1to2, match2);
      addRegexToken("Do", function(isStrict, locale2) {
        return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(["D", "DD"], DATE);
      addParseToken("Do", function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      });
      var getSetDayOfMonth = makeGetSet("Date", true);
      addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
      addUnitAlias("dayOfYear", "DDD");
      addUnitPriority("dayOfYear", 4);
      addRegexToken("DDD", match1to3);
      addRegexToken("DDDD", match3);
      addParseToken(["DDD", "DDDD"], function(input, array, config) {
        config._dayOfYear = toInt(input);
      });
      function getSetDayOfYear(input) {
        var dayOfYear = Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
      }
      addFormatToken("m", ["mm", 2], 0, "minute");
      addUnitAlias("minute", "m");
      addUnitPriority("minute", 14);
      addRegexToken("m", match1to2);
      addRegexToken("mm", match1to2, match2);
      addParseToken(["m", "mm"], MINUTE);
      var getSetMinute = makeGetSet("Minutes", false);
      addFormatToken("s", ["ss", 2], 0, "second");
      addUnitAlias("second", "s");
      addUnitPriority("second", 15);
      addRegexToken("s", match1to2);
      addRegexToken("ss", match1to2, match2);
      addParseToken(["s", "ss"], SECOND);
      var getSetSecond = makeGetSet("Seconds", false);
      addFormatToken("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ["SSS", 3], 0, "millisecond");
      addFormatToken(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      });
      addFormatToken(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      });
      addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      });
      addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      });
      addUnitAlias("millisecond", "ms");
      addUnitPriority("millisecond", 16);
      addRegexToken("S", match1to3, match1);
      addRegexToken("SS", match1to3, match2);
      addRegexToken("SSS", match1to3, match3);
      var token, getSetMillisecond;
      for (token = "SSSS"; token.length <= 9; token += "S") {
        addRegexToken(token, matchUnsigned);
      }
      function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1e3);
      }
      for (token = "S"; token.length <= 9; token += "S") {
        addParseToken(token, parseMs);
      }
      getSetMillisecond = makeGetSet("Milliseconds", false);
      addFormatToken("z", 0, 0, "zoneAbbr");
      addFormatToken("zz", 0, 0, "zoneName");
      function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
      }
      function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== "undefined" && Symbol.for != null) {
        proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate(
        "dates accessor is deprecated. Use date instead.",
        getSetDayOfMonth
      );
      proto.months = deprecate(
        "months accessor is deprecated. Use month instead",
        getSetMonth
      );
      proto.years = deprecate(
        "years accessor is deprecated. Use year instead",
        getSetYear
      );
      proto.zone = deprecate(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        getSetZone
      );
      proto.isDSTShifted = deprecate(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        isDaylightSavingTimeShifted
      );
      function createUnix(input) {
        return createLocal(input * 1e3);
      }
      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }
      function preParsePostFormat(string) {
        return string;
      }
      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;
      function get$1(format2, index, field, setter) {
        var locale2 = getLocale(), utc = createUTC().set(setter, index);
        return locale2[field](utc, format2);
      }
      function listMonthsImpl(format2, index, field) {
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
        if (index != null) {
          return get$1(format2, index, field, "month");
        }
        var i6, out = [];
        for (i6 = 0; i6 < 12; i6++) {
          out[i6] = get$1(format2, i6, field, "month");
        }
        return out;
      }
      function listWeekdaysImpl(localeSorted, format2, index, field) {
        if (typeof localeSorted === "boolean") {
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        } else {
          format2 = localeSorted;
          index = format2;
          localeSorted = false;
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        }
        var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i6, out = [];
        if (index != null) {
          return get$1(format2, (index + shift) % 7, field, "day");
        }
        for (i6 = 0; i6 < 7; i6++) {
          out[i6] = get$1(format2, (i6 + shift) % 7, field, "day");
        }
        return out;
      }
      function listMonths(format2, index) {
        return listMonthsImpl(format2, index, "months");
      }
      function listMonthsShort(format2, index) {
        return listMonthsImpl(format2, index, "monthsShort");
      }
      function listWeekdays(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
      }
      function listWeekdaysShort(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
      }
      function listWeekdaysMin(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
      }
      getSetGlobalLocale("en", {
        eras: [
          {
            since: "0001-01-01",
            until: Infinity,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
          },
          {
            since: "0000-12-31",
            until: -Infinity,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b4 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b4 === 1 ? "st" : b4 === 2 ? "nd" : b4 === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.lang = deprecate(
        "moment.lang is deprecated. Use moment.locale instead.",
        getSetGlobalLocale
      );
      hooks.langData = deprecate(
        "moment.langData is deprecated. Use moment.localeData instead.",
        getLocale
      );
      var mathAbs = Math.abs;
      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }
      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      }
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      }
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }
      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }
      function bubble() {
        var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
        if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
          milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
          days2 = 0;
          months2 = 0;
        }
        data.milliseconds = milliseconds2 % 1e3;
        seconds2 = absFloor(milliseconds2 / 1e3);
        data.seconds = seconds2 % 60;
        minutes2 = absFloor(seconds2 / 60);
        data.minutes = minutes2 % 60;
        hours2 = absFloor(minutes2 / 60);
        data.hours = hours2 % 24;
        days2 += absFloor(hours2 / 24);
        monthsFromDays = absFloor(daysToMonths(days2));
        months2 += monthsFromDays;
        days2 -= absCeil(monthsToDays(monthsFromDays));
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        data.days = days2;
        data.months = months2;
        data.years = years2;
        return this;
      }
      function daysToMonths(days2) {
        return days2 * 4800 / 146097;
      }
      function monthsToDays(months2) {
        return months2 * 146097 / 4800;
      }
      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }
        var days2, months2, milliseconds2 = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "quarter" || units === "year") {
          days2 = this._days + milliseconds2 / 864e5;
          months2 = this._months + daysToMonths(days2);
          switch (units) {
            case "month":
              return months2;
            case "quarter":
              return months2 / 3;
            case "year":
              return months2 / 12;
          }
        } else {
          days2 = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
            case "week":
              return days2 / 7 + milliseconds2 / 6048e5;
            case "day":
              return days2 + milliseconds2 / 864e5;
            case "hour":
              return days2 * 24 + milliseconds2 / 36e5;
            case "minute":
              return days2 * 1440 + milliseconds2 / 6e4;
            case "second":
              return days2 * 86400 + milliseconds2 / 1e3;
            case "millisecond":
              return Math.floor(days2 * 864e5) + milliseconds2;
            default:
              throw new Error("Unknown unit " + units);
          }
        }
      }
      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }
      function makeAs(alias) {
        return function() {
          return this.as(alias);
        };
      }
      var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
      function clone$1() {
        return createDuration(this);
      }
      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
      }
      function makeGetter(name) {
        return function() {
          return this.isValid() ? this._data[name] : NaN;
        };
      }
      var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
      function weeks() {
        return absFloor(this.days() / 7);
      }
      var round = Math.round, thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month/week
        w: null,
        // weeks to month
        M: 11
        // months to year
      };
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
        return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }
      function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
        var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a5 = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
        if (thresholds2.w != null) {
          a5 = a5 || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
        }
        a5 = a5 || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
        a5[2] = withoutSuffix;
        a5[3] = +posNegDuration > 0;
        a5[4] = locale2;
        return substituteTimeAgo.apply(null, a5);
      }
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === void 0) {
          return round;
        }
        if (typeof roundingFunction === "function") {
          round = roundingFunction;
          return true;
        }
        return false;
      }
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === void 0) {
          return false;
        }
        if (limit === void 0) {
          return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === "s") {
          thresholds.ss = limit - 1;
        }
        return true;
      }
      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var withSuffix = false, th = thresholds, locale2, output;
        if (typeof argWithSuffix === "object") {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") {
          withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === "object") {
          th = Object.assign({}, thresholds, argThresholds);
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }
        locale2 = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale2);
        if (withSuffix) {
          output = locale2.pastFuture(+this, output);
        }
        return locale2.postformat(output);
      }
      var abs$1 = Math.abs;
      function sign(x6) {
        return (x6 > 0) - (x6 < 0) || +x6;
      }
      function toISOString$1() {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s7, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) {
          return "P0D";
        }
        minutes2 = absFloor(seconds2 / 60);
        hours2 = absFloor(minutes2 / 60);
        seconds2 %= 60;
        minutes2 %= 60;
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        s7 = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign(this._months) !== sign(total) ? "-" : "";
        daysSign = sign(this._days) !== sign(total) ? "-" : "";
        hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
        return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s7 + "S" : "");
      }
      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        toISOString$1
      );
      proto$2.lang = lang;
      addFormatToken("X", 0, 0, "unix");
      addFormatToken("x", 0, 0, "valueOf");
      addRegexToken("x", matchSigned);
      addRegexToken("X", matchTimestamp);
      addParseToken("X", function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1e3);
      });
      addParseToken("x", function(input, array, config) {
        config._d = new Date(toInt(input));
      });
      hooks.version = "2.29.4";
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        // <input type="datetime-local" step="0.001" />
        DATE: "YYYY-MM-DD",
        // <input type="date" />
        TIME: "HH:mm",
        // <input type="time" />
        TIME_SECONDS: "HH:mm:ss",
        // <input type="time" step="1" />
        TIME_MS: "HH:mm:ss.SSS",
        // <input type="time" step="0.001" />
        WEEK: "GGGG-[W]WW",
        // <input type="week" />
        MONTH: "YYYY-MM"
        // <input type="month" />
      };
      return hooks;
    });
  }
});

// node_modules/bech32/dist/index.js
var require_dist = __commonJS({
  "node_modules/bech32/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bech32m = exports.bech32 = void 0;
    var ALPHABET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
    var ALPHABET_MAP = {};
    for (let z4 = 0; z4 < ALPHABET.length; z4++) {
      const x6 = ALPHABET.charAt(z4);
      ALPHABET_MAP[x6] = z4;
    }
    function polymodStep(pre) {
      const b4 = pre >> 25;
      return (pre & 33554431) << 5 ^ -(b4 >> 0 & 1) & 996825010 ^ -(b4 >> 1 & 1) & 642813549 ^ -(b4 >> 2 & 1) & 513874426 ^ -(b4 >> 3 & 1) & 1027748829 ^ -(b4 >> 4 & 1) & 705979059;
    }
    function prefixChk(prefix) {
      let chk = 1;
      for (let i6 = 0; i6 < prefix.length; ++i6) {
        const c8 = prefix.charCodeAt(i6);
        if (c8 < 33 || c8 > 126)
          return "Invalid prefix (" + prefix + ")";
        chk = polymodStep(chk) ^ c8 >> 5;
      }
      chk = polymodStep(chk);
      for (let i6 = 0; i6 < prefix.length; ++i6) {
        const v3 = prefix.charCodeAt(i6);
        chk = polymodStep(chk) ^ v3 & 31;
      }
      return chk;
    }
    function convert(data, inBits, outBits, pad) {
      let value = 0;
      let bits = 0;
      const maxV = (1 << outBits) - 1;
      const result = [];
      for (let i6 = 0; i6 < data.length; ++i6) {
        value = value << inBits | data[i6];
        bits += inBits;
        while (bits >= outBits) {
          bits -= outBits;
          result.push(value >> bits & maxV);
        }
      }
      if (pad) {
        if (bits > 0) {
          result.push(value << outBits - bits & maxV);
        }
      } else {
        if (bits >= inBits)
          return "Excess padding";
        if (value << outBits - bits & maxV)
          return "Non-zero padding";
      }
      return result;
    }
    function toWords(bytes) {
      return convert(bytes, 8, 5, true);
    }
    function fromWordsUnsafe(words) {
      const res = convert(words, 5, 8, false);
      if (Array.isArray(res))
        return res;
    }
    function fromWords(words) {
      const res = convert(words, 5, 8, false);
      if (Array.isArray(res))
        return res;
      throw new Error(res);
    }
    function getLibraryFromEncoding(encoding) {
      let ENCODING_CONST;
      if (encoding === "bech32") {
        ENCODING_CONST = 1;
      } else {
        ENCODING_CONST = 734539939;
      }
      function encode(prefix, words, LIMIT) {
        LIMIT = LIMIT || 90;
        if (prefix.length + 7 + words.length > LIMIT)
          throw new TypeError("Exceeds length limit");
        prefix = prefix.toLowerCase();
        let chk = prefixChk(prefix);
        if (typeof chk === "string")
          throw new Error(chk);
        let result = prefix + "1";
        for (let i6 = 0; i6 < words.length; ++i6) {
          const x6 = words[i6];
          if (x6 >> 5 !== 0)
            throw new Error("Non 5-bit word");
          chk = polymodStep(chk) ^ x6;
          result += ALPHABET.charAt(x6);
        }
        for (let i6 = 0; i6 < 6; ++i6) {
          chk = polymodStep(chk);
        }
        chk ^= ENCODING_CONST;
        for (let i6 = 0; i6 < 6; ++i6) {
          const v3 = chk >> (5 - i6) * 5 & 31;
          result += ALPHABET.charAt(v3);
        }
        return result;
      }
      function __decode(str, LIMIT) {
        LIMIT = LIMIT || 90;
        if (str.length < 8)
          return str + " too short";
        if (str.length > LIMIT)
          return "Exceeds length limit";
        const lowered = str.toLowerCase();
        const uppered = str.toUpperCase();
        if (str !== lowered && str !== uppered)
          return "Mixed-case string " + str;
        str = lowered;
        const split = str.lastIndexOf("1");
        if (split === -1)
          return "No separator character for " + str;
        if (split === 0)
          return "Missing prefix for " + str;
        const prefix = str.slice(0, split);
        const wordChars = str.slice(split + 1);
        if (wordChars.length < 6)
          return "Data too short";
        let chk = prefixChk(prefix);
        if (typeof chk === "string")
          return chk;
        const words = [];
        for (let i6 = 0; i6 < wordChars.length; ++i6) {
          const c8 = wordChars.charAt(i6);
          const v3 = ALPHABET_MAP[c8];
          if (v3 === void 0)
            return "Unknown character " + c8;
          chk = polymodStep(chk) ^ v3;
          if (i6 + 6 >= wordChars.length)
            continue;
          words.push(v3);
        }
        if (chk !== ENCODING_CONST)
          return "Invalid checksum for " + str;
        return { prefix, words };
      }
      function decodeUnsafe(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === "object")
          return res;
      }
      function decode(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === "object")
          return res;
        throw new Error(res);
      }
      return {
        decodeUnsafe,
        decode,
        encode,
        toWords,
        fromWordsUnsafe,
        fromWords
      };
    }
    exports.bech32 = getLibraryFromEncoding("bech32");
    exports.bech32m = getLibraryFromEncoding("bech32m");
  }
});

// node_modules/react-linkify/dist/decorators/defaultComponentDecorator.js
var require_defaultComponentDecorator = __commonJS({
  "node_modules/react-linkify/dist/decorators/defaultComponentDecorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _react = require_react();
    var React = _interopRequireWildcard(_react);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    exports.default = function(decoratedHref, decoratedText, key) {
      return React.createElement(
        "a",
        { href: decoratedHref, key },
        decoratedText
      );
    };
  }
});

// node_modules/react-linkify/dist/decorators/defaultHrefDecorator.js
var require_defaultHrefDecorator = __commonJS({
  "node_modules/react-linkify/dist/decorators/defaultHrefDecorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function(href) {
      return href;
    };
  }
});

// node_modules/uc.micro/properties/Any/regex.js
var require_regex = __commonJS({
  "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
    module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  }
});

// node_modules/uc.micro/categories/Cc/regex.js
var require_regex2 = __commonJS({
  "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
    module.exports = /[\0-\x1F\x7F-\x9F]/;
  }
});

// node_modules/uc.micro/categories/Z/regex.js
var require_regex3 = __commonJS({
  "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
    module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  }
});

// node_modules/uc.micro/categories/P/regex.js
var require_regex4 = __commonJS({
  "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
    module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  }
});

// node_modules/linkify-it/lib/re.js
var require_re = __commonJS({
  "node_modules/linkify-it/lib/re.js"(exports, module) {
    "use strict";
    module.exports = function(opts) {
      var re2 = {};
      re2.src_Any = require_regex().source;
      re2.src_Cc = require_regex2().source;
      re2.src_Z = require_regex3().source;
      re2.src_P = require_regex4().source;
      re2.src_ZPCc = [re2.src_Z, re2.src_P, re2.src_Cc].join("|");
      re2.src_ZCc = [re2.src_Z, re2.src_Cc].join("|");
      var text_separators = "[><\uFF5C]";
      re2.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re2.src_ZPCc + ")" + re2.src_Any + ")";
      re2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
      re2.src_auth = "(?:(?:(?!" + re2.src_ZCc + "|[@/\\[\\]()]).)+@)?";
      re2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
      re2.src_host_terminator = "(?=$|" + text_separators + "|" + re2.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re2.src_ZPCc + "))";
      re2.src_path = "(?:[/?#](?:(?!" + re2.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + re2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re2.src_ZCc + "|[']).)+\\'|\\'(?=" + re2.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + re2.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + re2.src_ZCc + ").|\\!(?!" + re2.src_ZCc + "|[!]).|\\?(?!" + re2.src_ZCc + "|[?]).)+|\\/)?";
      re2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
      re2.src_xn = "xn--[a-z0-9\\-]{1,59}";
      re2.src_domain_root = // Allow letters & digits (http://test1)
      "(?:" + re2.src_xn + "|" + re2.src_pseudo_letter + "{1,63})";
      re2.src_domain = "(?:" + re2.src_xn + "|(?:" + re2.src_pseudo_letter + ")|(?:" + re2.src_pseudo_letter + "(?:-|" + re2.src_pseudo_letter + "){0,61}" + re2.src_pseudo_letter + "))";
      re2.src_host = "(?:(?:(?:(?:" + re2.src_domain + ")\\.)*" + re2.src_domain + "))";
      re2.tpl_host_fuzzy = "(?:" + re2.src_ip4 + "|(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%)))";
      re2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%))";
      re2.src_host_strict = re2.src_host + re2.src_host_terminator;
      re2.tpl_host_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_host_terminator;
      re2.src_host_port_strict = re2.src_host + re2.src_port + re2.src_host_terminator;
      re2.tpl_host_port_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_port + re2.src_host_terminator;
      re2.tpl_host_port_no_ip_fuzzy_strict = re2.tpl_host_no_ip_fuzzy + re2.src_port + re2.src_host_terminator;
      re2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re2.src_ZPCc + "|>|$))";
      re2.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re2.src_ZCc + ")(" + re2.src_email_name + "@" + re2.tpl_host_fuzzy_strict + ")";
      re2.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re2.tpl_host_port_fuzzy_strict + re2.src_path + ")";
      re2.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re2.tpl_host_port_no_ip_fuzzy_strict + re2.src_path + ")";
      return re2;
    };
  }
});

// node_modules/linkify-it/index.js
var require_linkify_it = __commonJS({
  "node_modules/linkify-it/index.js"(exports, module) {
    "use strict";
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    function isObject(obj) {
      return _class(obj) === "[object Object]";
    }
    function isRegExp(obj) {
      return _class(obj) === "[object RegExp]";
    }
    function isFunction(obj) {
      return _class(obj) === "[object Function]";
    }
    function escapeRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }
    var defaultOptions = {
      fuzzyLink: true,
      fuzzyEmail: true,
      fuzzyIP: false
    };
    function isOptionsObj(obj) {
      return Object.keys(obj || {}).reduce(function(acc, k2) {
        return acc || defaultOptions.hasOwnProperty(k2);
      }, false);
    }
    var defaultSchemas = {
      "http:": {
        validate: function(text, pos, self) {
          var tail = text.slice(pos);
          if (!self.re.http) {
            self.re.http = new RegExp(
              "^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path,
              "i"
            );
          }
          if (self.re.http.test(tail)) {
            return tail.match(self.re.http)[0].length;
          }
          return 0;
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function(text, pos, self) {
          var tail = text.slice(pos);
          if (!self.re.no_http) {
            self.re.no_http = new RegExp(
              "^" + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
              // with code comments
              "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path,
              "i"
            );
          }
          if (self.re.no_http.test(tail)) {
            if (pos >= 3 && text[pos - 3] === ":") {
              return 0;
            }
            if (pos >= 3 && text[pos - 3] === "/") {
              return 0;
            }
            return tail.match(self.re.no_http)[0].length;
          }
          return 0;
        }
      },
      "mailto:": {
        validate: function(text, pos, self) {
          var tail = text.slice(pos);
          if (!self.re.mailto) {
            self.re.mailto = new RegExp(
              "^" + self.re.src_email_name + "@" + self.re.src_host_strict,
              "i"
            );
          }
          if (self.re.mailto.test(tail)) {
            return tail.match(self.re.mailto)[0].length;
          }
          return 0;
        }
      }
    };
    var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
    var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
    function resetScanCache(self) {
      self.__index__ = -1;
      self.__text_cache__ = "";
    }
    function createValidator(re2) {
      return function(text, pos) {
        var tail = text.slice(pos);
        if (re2.test(tail)) {
          return tail.match(re2)[0].length;
        }
        return 0;
      };
    }
    function createNormalizer() {
      return function(match, self) {
        self.normalize(match);
      };
    }
    function compile(self) {
      var re2 = self.re = require_re()(self.__opts__);
      var tlds = self.__tlds__.slice();
      self.onCompile();
      if (!self.__tlds_replaced__) {
        tlds.push(tlds_2ch_src_re);
      }
      tlds.push(re2.src_xn);
      re2.src_tlds = tlds.join("|");
      function untpl(tpl) {
        return tpl.replace("%TLDS%", re2.src_tlds);
      }
      re2.email_fuzzy = RegExp(untpl(re2.tpl_email_fuzzy), "i");
      re2.link_fuzzy = RegExp(untpl(re2.tpl_link_fuzzy), "i");
      re2.link_no_ip_fuzzy = RegExp(untpl(re2.tpl_link_no_ip_fuzzy), "i");
      re2.host_fuzzy_test = RegExp(untpl(re2.tpl_host_fuzzy_test), "i");
      var aliases = [];
      self.__compiled__ = {};
      function schemaError(name, val) {
        throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
      }
      Object.keys(self.__schemas__).forEach(function(name) {
        var val = self.__schemas__[name];
        if (val === null) {
          return;
        }
        var compiled = { validate: null, link: null };
        self.__compiled__[name] = compiled;
        if (isObject(val)) {
          if (isRegExp(val.validate)) {
            compiled.validate = createValidator(val.validate);
          } else if (isFunction(val.validate)) {
            compiled.validate = val.validate;
          } else {
            schemaError(name, val);
          }
          if (isFunction(val.normalize)) {
            compiled.normalize = val.normalize;
          } else if (!val.normalize) {
            compiled.normalize = createNormalizer();
          } else {
            schemaError(name, val);
          }
          return;
        }
        if (isString(val)) {
          aliases.push(name);
          return;
        }
        schemaError(name, val);
      });
      aliases.forEach(function(alias) {
        if (!self.__compiled__[self.__schemas__[alias]]) {
          return;
        }
        self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
        self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
      });
      self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
      var slist = Object.keys(self.__compiled__).filter(function(name) {
        return name.length > 0 && self.__compiled__[name];
      }).map(escapeRE).join("|");
      self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re2.src_ZPCc + "))(" + slist + ")", "i");
      self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re2.src_ZPCc + "))(" + slist + ")", "ig");
      self.re.pretest = RegExp(
        "(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@",
        "i"
      );
      resetScanCache(self);
    }
    function Match(self, shift) {
      var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
      this.schema = self.__schema__.toLowerCase();
      this.index = start + shift;
      this.lastIndex = end + shift;
      this.raw = text;
      this.text = text;
      this.url = text;
    }
    function createMatch(self, shift) {
      var match = new Match(self, shift);
      self.__compiled__[match.schema].normalize(match, self);
      return match;
    }
    function LinkifyIt(schemas, options) {
      if (!(this instanceof LinkifyIt)) {
        return new LinkifyIt(schemas, options);
      }
      if (!options) {
        if (isOptionsObj(schemas)) {
          options = schemas;
          schemas = {};
        }
      }
      this.__opts__ = assign({}, defaultOptions, options);
      this.__index__ = -1;
      this.__last_index__ = -1;
      this.__schema__ = "";
      this.__text_cache__ = "";
      this.__schemas__ = assign({}, defaultSchemas, schemas);
      this.__compiled__ = {};
      this.__tlds__ = tlds_default;
      this.__tlds_replaced__ = false;
      this.re = {};
      compile(this);
    }
    LinkifyIt.prototype.add = function add(schema, definition) {
      this.__schemas__[schema] = definition;
      compile(this);
      return this;
    };
    LinkifyIt.prototype.set = function set(options) {
      this.__opts__ = assign(this.__opts__, options);
      return this;
    };
    LinkifyIt.prototype.test = function test(text) {
      this.__text_cache__ = text;
      this.__index__ = -1;
      if (!text.length) {
        return false;
      }
      var m5, ml, me2, len, shift, next, re2, tld_pos, at_pos;
      if (this.re.schema_test.test(text)) {
        re2 = this.re.schema_search;
        re2.lastIndex = 0;
        while ((m5 = re2.exec(text)) !== null) {
          len = this.testSchemaAt(text, m5[2], re2.lastIndex);
          if (len) {
            this.__schema__ = m5[2];
            this.__index__ = m5.index + m5[1].length;
            this.__last_index__ = m5.index + m5[0].length + len;
            break;
          }
        }
      }
      if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
        tld_pos = text.search(this.re.host_fuzzy_test);
        if (tld_pos >= 0) {
          if (this.__index__ < 0 || tld_pos < this.__index__) {
            if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
              shift = ml.index + ml[1].length;
              if (this.__index__ < 0 || shift < this.__index__) {
                this.__schema__ = "";
                this.__index__ = shift;
                this.__last_index__ = ml.index + ml[0].length;
              }
            }
          }
        }
      }
      if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
        at_pos = text.indexOf("@");
        if (at_pos >= 0) {
          if ((me2 = text.match(this.re.email_fuzzy)) !== null) {
            shift = me2.index + me2[1].length;
            next = me2.index + me2[0].length;
            if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
              this.__schema__ = "mailto:";
              this.__index__ = shift;
              this.__last_index__ = next;
            }
          }
        }
      }
      return this.__index__ >= 0;
    };
    LinkifyIt.prototype.pretest = function pretest(text) {
      return this.re.pretest.test(text);
    };
    LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
      if (!this.__compiled__[schema.toLowerCase()]) {
        return 0;
      }
      return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
    };
    LinkifyIt.prototype.match = function match(text) {
      var shift = 0, result = [];
      if (this.__index__ >= 0 && this.__text_cache__ === text) {
        result.push(createMatch(this, shift));
        shift = this.__last_index__;
      }
      var tail = shift ? text.slice(shift) : text;
      while (this.test(tail)) {
        result.push(createMatch(this, shift));
        tail = tail.slice(this.__last_index__);
        shift += this.__last_index__;
      }
      if (result.length) {
        return result;
      }
      return null;
    };
    LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
      list = Array.isArray(list) ? list : [list];
      if (!keepOld) {
        this.__tlds__ = list.slice();
        this.__tlds_replaced__ = true;
        compile(this);
        return this;
      }
      this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
        return el !== arr[idx - 1];
      }).reverse();
      compile(this);
      return this;
    };
    LinkifyIt.prototype.normalize = function normalize(match) {
      if (!match.schema) {
        match.url = "http://" + match.url;
      }
      if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
        match.url = "mailto:" + match.url;
      }
    };
    LinkifyIt.prototype.onCompile = function onCompile() {
    };
    module.exports = LinkifyIt;
  }
});

// node_modules/tlds/index.json
var require_tlds = __commonJS({
  "node_modules/tlds/index.json"(exports, module) {
    module.exports = [
      "aaa",
      "aarp",
      "abb",
      "abbott",
      "abbvie",
      "abc",
      "able",
      "abogado",
      "abudhabi",
      "ac",
      "academy",
      "accenture",
      "accountant",
      "accountants",
      "aco",
      "actor",
      "ad",
      "ads",
      "adult",
      "ae",
      "aeg",
      "aero",
      "aetna",
      "af",
      "afl",
      "africa",
      "ag",
      "agakhan",
      "agency",
      "ai",
      "aig",
      "airbus",
      "airforce",
      "airtel",
      "akdn",
      "al",
      "alibaba",
      "alipay",
      "allfinanz",
      "allstate",
      "ally",
      "alsace",
      "alstom",
      "am",
      "amazon",
      "americanexpress",
      "americanfamily",
      "amex",
      "amfam",
      "amica",
      "amsterdam",
      "analytics",
      "android",
      "anquan",
      "anz",
      "ao",
      "aol",
      "apartments",
      "app",
      "apple",
      "aq",
      "aquarelle",
      "ar",
      "arab",
      "aramco",
      "archi",
      "army",
      "arpa",
      "art",
      "arte",
      "as",
      "asda",
      "asia",
      "associates",
      "at",
      "athleta",
      "attorney",
      "au",
      "auction",
      "audi",
      "audible",
      "audio",
      "auspost",
      "author",
      "auto",
      "autos",
      "avianca",
      "aw",
      "aws",
      "ax",
      "axa",
      "az",
      "azure",
      "ba",
      "baby",
      "baidu",
      "banamex",
      "bananarepublic",
      "band",
      "bank",
      "bar",
      "barcelona",
      "barclaycard",
      "barclays",
      "barefoot",
      "bargains",
      "baseball",
      "basketball",
      "bauhaus",
      "bayern",
      "bb",
      "bbc",
      "bbt",
      "bbva",
      "bcg",
      "bcn",
      "bd",
      "be",
      "beats",
      "beauty",
      "beer",
      "bentley",
      "berlin",
      "best",
      "bestbuy",
      "bet",
      "bf",
      "bg",
      "bh",
      "bharti",
      "bi",
      "bible",
      "bid",
      "bike",
      "bing",
      "bingo",
      "bio",
      "biz",
      "bj",
      "black",
      "blackfriday",
      "blockbuster",
      "blog",
      "bloomberg",
      "blue",
      "bm",
      "bms",
      "bmw",
      "bn",
      "bnpparibas",
      "bo",
      "boats",
      "boehringer",
      "bofa",
      "bom",
      "bond",
      "boo",
      "book",
      "booking",
      "bosch",
      "bostik",
      "boston",
      "bot",
      "boutique",
      "box",
      "br",
      "bradesco",
      "bridgestone",
      "broadway",
      "broker",
      "brother",
      "brussels",
      "bs",
      "bt",
      "build",
      "builders",
      "business",
      "buy",
      "buzz",
      "bv",
      "bw",
      "by",
      "bz",
      "bzh",
      "ca",
      "cab",
      "cafe",
      "cal",
      "call",
      "calvinklein",
      "cam",
      "camera",
      "camp",
      "canon",
      "capetown",
      "capital",
      "capitalone",
      "car",
      "caravan",
      "cards",
      "care",
      "career",
      "careers",
      "cars",
      "casa",
      "case",
      "cash",
      "casino",
      "cat",
      "catering",
      "catholic",
      "cba",
      "cbn",
      "cbre",
      "cbs",
      "cc",
      "cd",
      "center",
      "ceo",
      "cern",
      "cf",
      "cfa",
      "cfd",
      "cg",
      "ch",
      "chanel",
      "channel",
      "charity",
      "chase",
      "chat",
      "cheap",
      "chintai",
      "christmas",
      "chrome",
      "church",
      "ci",
      "cipriani",
      "circle",
      "cisco",
      "citadel",
      "citi",
      "citic",
      "city",
      "cityeats",
      "ck",
      "cl",
      "claims",
      "cleaning",
      "click",
      "clinic",
      "clinique",
      "clothing",
      "cloud",
      "club",
      "clubmed",
      "cm",
      "cn",
      "co",
      "coach",
      "codes",
      "coffee",
      "college",
      "cologne",
      "com",
      "comcast",
      "commbank",
      "community",
      "company",
      "compare",
      "computer",
      "comsec",
      "condos",
      "construction",
      "consulting",
      "contact",
      "contractors",
      "cooking",
      "cool",
      "coop",
      "corsica",
      "country",
      "coupon",
      "coupons",
      "courses",
      "cpa",
      "cr",
      "credit",
      "creditcard",
      "creditunion",
      "cricket",
      "crown",
      "crs",
      "cruise",
      "cruises",
      "cu",
      "cuisinella",
      "cv",
      "cw",
      "cx",
      "cy",
      "cymru",
      "cyou",
      "cz",
      "dabur",
      "dad",
      "dance",
      "data",
      "date",
      "dating",
      "datsun",
      "day",
      "dclk",
      "dds",
      "de",
      "deal",
      "dealer",
      "deals",
      "degree",
      "delivery",
      "dell",
      "deloitte",
      "delta",
      "democrat",
      "dental",
      "dentist",
      "desi",
      "design",
      "dev",
      "dhl",
      "diamonds",
      "diet",
      "digital",
      "direct",
      "directory",
      "discount",
      "discover",
      "dish",
      "diy",
      "dj",
      "dk",
      "dm",
      "dnp",
      "do",
      "docs",
      "doctor",
      "dog",
      "domains",
      "dot",
      "download",
      "drive",
      "dtv",
      "dubai",
      "dunlop",
      "dupont",
      "durban",
      "dvag",
      "dvr",
      "dz",
      "earth",
      "eat",
      "ec",
      "eco",
      "edeka",
      "edu",
      "education",
      "ee",
      "eg",
      "email",
      "emerck",
      "energy",
      "engineer",
      "engineering",
      "enterprises",
      "epson",
      "equipment",
      "er",
      "ericsson",
      "erni",
      "es",
      "esq",
      "estate",
      "et",
      "etisalat",
      "eu",
      "eurovision",
      "eus",
      "events",
      "exchange",
      "expert",
      "exposed",
      "express",
      "extraspace",
      "fage",
      "fail",
      "fairwinds",
      "faith",
      "family",
      "fan",
      "fans",
      "farm",
      "farmers",
      "fashion",
      "fast",
      "fedex",
      "feedback",
      "ferrari",
      "ferrero",
      "fi",
      "fidelity",
      "fido",
      "film",
      "final",
      "finance",
      "financial",
      "fire",
      "firestone",
      "firmdale",
      "fish",
      "fishing",
      "fit",
      "fitness",
      "fj",
      "fk",
      "flickr",
      "flights",
      "flir",
      "florist",
      "flowers",
      "fly",
      "fm",
      "fo",
      "foo",
      "food",
      "football",
      "ford",
      "forex",
      "forsale",
      "forum",
      "foundation",
      "fox",
      "fr",
      "free",
      "fresenius",
      "frl",
      "frogans",
      "frontdoor",
      "frontier",
      "ftr",
      "fujitsu",
      "fun",
      "fund",
      "furniture",
      "futbol",
      "fyi",
      "ga",
      "gal",
      "gallery",
      "gallo",
      "gallup",
      "game",
      "games",
      "gap",
      "garden",
      "gay",
      "gb",
      "gbiz",
      "gd",
      "gdn",
      "ge",
      "gea",
      "gent",
      "genting",
      "george",
      "gf",
      "gg",
      "ggee",
      "gh",
      "gi",
      "gift",
      "gifts",
      "gives",
      "giving",
      "gl",
      "glass",
      "gle",
      "global",
      "globo",
      "gm",
      "gmail",
      "gmbh",
      "gmo",
      "gmx",
      "gn",
      "godaddy",
      "gold",
      "goldpoint",
      "golf",
      "goo",
      "goodyear",
      "goog",
      "google",
      "gop",
      "got",
      "gov",
      "gp",
      "gq",
      "gr",
      "grainger",
      "graphics",
      "gratis",
      "green",
      "gripe",
      "grocery",
      "group",
      "gs",
      "gt",
      "gu",
      "guardian",
      "gucci",
      "guge",
      "guide",
      "guitars",
      "guru",
      "gw",
      "gy",
      "hair",
      "hamburg",
      "hangout",
      "haus",
      "hbo",
      "hdfc",
      "hdfcbank",
      "health",
      "healthcare",
      "help",
      "helsinki",
      "here",
      "hermes",
      "hiphop",
      "hisamitsu",
      "hitachi",
      "hiv",
      "hk",
      "hkt",
      "hm",
      "hn",
      "hockey",
      "holdings",
      "holiday",
      "homedepot",
      "homegoods",
      "homes",
      "homesense",
      "honda",
      "horse",
      "hospital",
      "host",
      "hosting",
      "hot",
      "hoteles",
      "hotels",
      "hotmail",
      "house",
      "how",
      "hr",
      "hsbc",
      "ht",
      "hu",
      "hughes",
      "hyatt",
      "hyundai",
      "ibm",
      "icbc",
      "ice",
      "icu",
      "id",
      "ie",
      "ieee",
      "ifm",
      "ikano",
      "il",
      "im",
      "imamat",
      "imdb",
      "immo",
      "immobilien",
      "in",
      "inc",
      "industries",
      "infiniti",
      "info",
      "ing",
      "ink",
      "institute",
      "insurance",
      "insure",
      "int",
      "international",
      "intuit",
      "investments",
      "io",
      "ipiranga",
      "iq",
      "ir",
      "irish",
      "is",
      "ismaili",
      "ist",
      "istanbul",
      "it",
      "itau",
      "itv",
      "jaguar",
      "java",
      "jcb",
      "je",
      "jeep",
      "jetzt",
      "jewelry",
      "jio",
      "jll",
      "jm",
      "jmp",
      "jnj",
      "jo",
      "jobs",
      "joburg",
      "jot",
      "joy",
      "jp",
      "jpmorgan",
      "jprs",
      "juegos",
      "juniper",
      "kaufen",
      "kddi",
      "ke",
      "kerryhotels",
      "kerrylogistics",
      "kerryproperties",
      "kfh",
      "kg",
      "kh",
      "ki",
      "kia",
      "kids",
      "kim",
      "kinder",
      "kindle",
      "kitchen",
      "kiwi",
      "km",
      "kn",
      "koeln",
      "komatsu",
      "kosher",
      "kp",
      "kpmg",
      "kpn",
      "kr",
      "krd",
      "kred",
      "kuokgroup",
      "kw",
      "ky",
      "kyoto",
      "kz",
      "la",
      "lacaixa",
      "lamborghini",
      "lamer",
      "lancaster",
      "land",
      "landrover",
      "lanxess",
      "lasalle",
      "lat",
      "latino",
      "latrobe",
      "law",
      "lawyer",
      "lb",
      "lc",
      "lds",
      "lease",
      "leclerc",
      "lefrak",
      "legal",
      "lego",
      "lexus",
      "lgbt",
      "li",
      "lidl",
      "life",
      "lifeinsurance",
      "lifestyle",
      "lighting",
      "like",
      "lilly",
      "limited",
      "limo",
      "lincoln",
      "link",
      "lipsy",
      "live",
      "living",
      "lk",
      "llc",
      "llp",
      "loan",
      "loans",
      "locker",
      "locus",
      "lol",
      "london",
      "lotte",
      "lotto",
      "love",
      "lpl",
      "lplfinancial",
      "lr",
      "ls",
      "lt",
      "ltd",
      "ltda",
      "lu",
      "lundbeck",
      "luxe",
      "luxury",
      "lv",
      "ly",
      "ma",
      "madrid",
      "maif",
      "maison",
      "makeup",
      "man",
      "management",
      "mango",
      "map",
      "market",
      "marketing",
      "markets",
      "marriott",
      "marshalls",
      "mattel",
      "mba",
      "mc",
      "mckinsey",
      "md",
      "me",
      "med",
      "media",
      "meet",
      "melbourne",
      "meme",
      "memorial",
      "men",
      "menu",
      "merckmsd",
      "mg",
      "mh",
      "miami",
      "microsoft",
      "mil",
      "mini",
      "mint",
      "mit",
      "mitsubishi",
      "mk",
      "ml",
      "mlb",
      "mls",
      "mm",
      "mma",
      "mn",
      "mo",
      "mobi",
      "mobile",
      "moda",
      "moe",
      "moi",
      "mom",
      "monash",
      "money",
      "monster",
      "mormon",
      "mortgage",
      "moscow",
      "moto",
      "motorcycles",
      "mov",
      "movie",
      "mp",
      "mq",
      "mr",
      "ms",
      "msd",
      "mt",
      "mtn",
      "mtr",
      "mu",
      "museum",
      "music",
      "mutual",
      "mv",
      "mw",
      "mx",
      "my",
      "mz",
      "na",
      "nab",
      "nagoya",
      "name",
      "natura",
      "navy",
      "nba",
      "nc",
      "ne",
      "nec",
      "net",
      "netbank",
      "netflix",
      "network",
      "neustar",
      "new",
      "news",
      "next",
      "nextdirect",
      "nexus",
      "nf",
      "nfl",
      "ng",
      "ngo",
      "nhk",
      "ni",
      "nico",
      "nike",
      "nikon",
      "ninja",
      "nissan",
      "nissay",
      "nl",
      "no",
      "nokia",
      "northwesternmutual",
      "norton",
      "now",
      "nowruz",
      "nowtv",
      "np",
      "nr",
      "nra",
      "nrw",
      "ntt",
      "nu",
      "nyc",
      "nz",
      "obi",
      "observer",
      "office",
      "okinawa",
      "olayan",
      "olayangroup",
      "oldnavy",
      "ollo",
      "om",
      "omega",
      "one",
      "ong",
      "onl",
      "online",
      "ooo",
      "open",
      "oracle",
      "orange",
      "org",
      "organic",
      "origins",
      "osaka",
      "otsuka",
      "ott",
      "ovh",
      "pa",
      "page",
      "panasonic",
      "paris",
      "pars",
      "partners",
      "parts",
      "party",
      "passagens",
      "pay",
      "pccw",
      "pe",
      "pet",
      "pf",
      "pfizer",
      "pg",
      "ph",
      "pharmacy",
      "phd",
      "philips",
      "phone",
      "photo",
      "photography",
      "photos",
      "physio",
      "pics",
      "pictet",
      "pictures",
      "pid",
      "pin",
      "ping",
      "pink",
      "pioneer",
      "pizza",
      "pk",
      "pl",
      "place",
      "play",
      "playstation",
      "plumbing",
      "plus",
      "pm",
      "pn",
      "pnc",
      "pohl",
      "poker",
      "politie",
      "porn",
      "post",
      "pr",
      "pramerica",
      "praxi",
      "press",
      "prime",
      "pro",
      "prod",
      "productions",
      "prof",
      "progressive",
      "promo",
      "properties",
      "property",
      "protection",
      "pru",
      "prudential",
      "ps",
      "pt",
      "pub",
      "pw",
      "pwc",
      "py",
      "qa",
      "qpon",
      "quebec",
      "quest",
      "racing",
      "radio",
      "re",
      "read",
      "realestate",
      "realtor",
      "realty",
      "recipes",
      "red",
      "redstone",
      "redumbrella",
      "rehab",
      "reise",
      "reisen",
      "reit",
      "reliance",
      "ren",
      "rent",
      "rentals",
      "repair",
      "report",
      "republican",
      "rest",
      "restaurant",
      "review",
      "reviews",
      "rexroth",
      "rich",
      "richardli",
      "ricoh",
      "ril",
      "rio",
      "rip",
      "ro",
      "rocher",
      "rocks",
      "rodeo",
      "rogers",
      "room",
      "rs",
      "rsvp",
      "ru",
      "rugby",
      "ruhr",
      "run",
      "rw",
      "rwe",
      "ryukyu",
      "sa",
      "saarland",
      "safe",
      "safety",
      "sakura",
      "sale",
      "salon",
      "samsclub",
      "samsung",
      "sandvik",
      "sandvikcoromant",
      "sanofi",
      "sap",
      "sarl",
      "sas",
      "save",
      "saxo",
      "sb",
      "sbi",
      "sbs",
      "sc",
      "sca",
      "scb",
      "schaeffler",
      "schmidt",
      "scholarships",
      "school",
      "schule",
      "schwarz",
      "science",
      "scot",
      "sd",
      "se",
      "search",
      "seat",
      "secure",
      "security",
      "seek",
      "select",
      "sener",
      "services",
      "seven",
      "sew",
      "sex",
      "sexy",
      "sfr",
      "sg",
      "sh",
      "shangrila",
      "sharp",
      "shaw",
      "shell",
      "shia",
      "shiksha",
      "shoes",
      "shop",
      "shopping",
      "shouji",
      "show",
      "showtime",
      "si",
      "silk",
      "sina",
      "singles",
      "site",
      "sj",
      "sk",
      "ski",
      "skin",
      "sky",
      "skype",
      "sl",
      "sling",
      "sm",
      "smart",
      "smile",
      "sn",
      "sncf",
      "so",
      "soccer",
      "social",
      "softbank",
      "software",
      "sohu",
      "solar",
      "solutions",
      "song",
      "sony",
      "soy",
      "spa",
      "space",
      "sport",
      "spot",
      "sr",
      "srl",
      "ss",
      "st",
      "stada",
      "staples",
      "star",
      "statebank",
      "statefarm",
      "stc",
      "stcgroup",
      "stockholm",
      "storage",
      "store",
      "stream",
      "studio",
      "study",
      "style",
      "su",
      "sucks",
      "supplies",
      "supply",
      "support",
      "surf",
      "surgery",
      "suzuki",
      "sv",
      "swatch",
      "swiss",
      "sx",
      "sy",
      "sydney",
      "systems",
      "sz",
      "tab",
      "taipei",
      "talk",
      "taobao",
      "target",
      "tatamotors",
      "tatar",
      "tattoo",
      "tax",
      "taxi",
      "tc",
      "tci",
      "td",
      "tdk",
      "team",
      "tech",
      "technology",
      "tel",
      "temasek",
      "tennis",
      "teva",
      "tf",
      "tg",
      "th",
      "thd",
      "theater",
      "theatre",
      "tiaa",
      "tickets",
      "tienda",
      "tiffany",
      "tips",
      "tires",
      "tirol",
      "tj",
      "tjmaxx",
      "tjx",
      "tk",
      "tkmaxx",
      "tl",
      "tm",
      "tmall",
      "tn",
      "to",
      "today",
      "tokyo",
      "tools",
      "top",
      "toray",
      "toshiba",
      "total",
      "tours",
      "town",
      "toyota",
      "toys",
      "tr",
      "trade",
      "trading",
      "training",
      "travel",
      "travelers",
      "travelersinsurance",
      "trust",
      "trv",
      "tt",
      "tube",
      "tui",
      "tunes",
      "tushu",
      "tv",
      "tvs",
      "tw",
      "tz",
      "ua",
      "ubank",
      "ubs",
      "ug",
      "uk",
      "unicom",
      "university",
      "uno",
      "uol",
      "ups",
      "us",
      "uy",
      "uz",
      "va",
      "vacations",
      "vana",
      "vanguard",
      "vc",
      "ve",
      "vegas",
      "ventures",
      "verisign",
      "verm\xF6gensberater",
      "verm\xF6gensberatung",
      "versicherung",
      "vet",
      "vg",
      "vi",
      "viajes",
      "video",
      "vig",
      "viking",
      "villas",
      "vin",
      "vip",
      "virgin",
      "visa",
      "vision",
      "viva",
      "vivo",
      "vlaanderen",
      "vn",
      "vodka",
      "volkswagen",
      "volvo",
      "vote",
      "voting",
      "voto",
      "voyage",
      "vu",
      "vuelos",
      "wales",
      "walmart",
      "walter",
      "wang",
      "wanggou",
      "watch",
      "watches",
      "weather",
      "weatherchannel",
      "webcam",
      "weber",
      "website",
      "wed",
      "wedding",
      "weibo",
      "weir",
      "wf",
      "whoswho",
      "wien",
      "wiki",
      "williamhill",
      "win",
      "windows",
      "wine",
      "winners",
      "wme",
      "wolterskluwer",
      "woodside",
      "work",
      "works",
      "world",
      "wow",
      "ws",
      "wtc",
      "wtf",
      "xbox",
      "xerox",
      "xfinity",
      "xihuan",
      "xin",
      "xxx",
      "xyz",
      "yachts",
      "yahoo",
      "yamaxun",
      "yandex",
      "ye",
      "yodobashi",
      "yoga",
      "yokohama",
      "you",
      "youtube",
      "yt",
      "yun",
      "za",
      "zappos",
      "zara",
      "zero",
      "zip",
      "zm",
      "zone",
      "zuerich",
      "zw",
      "\u03B5\u03BB",
      "\u03B5\u03C5",
      "\u0431\u0433",
      "\u0431\u0435\u043B",
      "\u0434\u0435\u0442\u0438",
      "\u0435\u044E",
      "\u043A\u0430\u0442\u043E\u043B\u0438\u043A",
      "\u043A\u043E\u043C",
      "\u043C\u043A\u0434",
      "\u043C\u043E\u043D",
      "\u043C\u043E\u0441\u043A\u0432\u0430",
      "\u043E\u043D\u043B\u0430\u0439\u043D",
      "\u043E\u0440\u0433",
      "\u0440\u0443\u0441",
      "\u0440\u0444",
      "\u0441\u0430\u0439\u0442",
      "\u0441\u0440\u0431",
      "\u0443\u043A\u0440",
      "\u049B\u0430\u0437",
      "\u0570\u0561\u0575",
      "\u05D9\u05E9\u05E8\u05D0\u05DC",
      "\u05E7\u05D5\u05DD",
      "\u0627\u0628\u0648\u0638\u0628\u064A",
      "\u0627\u062A\u0635\u0627\u0644\u0627\u062A",
      "\u0627\u0631\u0627\u0645\u0643\u0648",
      "\u0627\u0644\u0627\u0631\u062F\u0646",
      "\u0627\u0644\u0628\u062D\u0631\u064A\u0646",
      "\u0627\u0644\u062C\u0632\u0627\u0626\u0631",
      "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
      "\u0627\u0644\u0639\u0644\u064A\u0627\u0646",
      "\u0627\u0644\u0645\u063A\u0631\u0628",
      "\u0627\u0645\u0627\u0631\u0627\u062A",
      "\u0627\u06CC\u0631\u0627\u0646",
      "\u0628\u0627\u0631\u062A",
      "\u0628\u0627\u0632\u0627\u0631",
      "\u0628\u064A\u062A\u0643",
      "\u0628\u06BE\u0627\u0631\u062A",
      "\u062A\u0648\u0646\u0633",
      "\u0633\u0648\u062F\u0627\u0646",
      "\u0633\u0648\u0631\u064A\u0629",
      "\u0634\u0628\u0643\u0629",
      "\u0639\u0631\u0627\u0642",
      "\u0639\u0631\u0628",
      "\u0639\u0645\u0627\u0646",
      "\u0641\u0644\u0633\u0637\u064A\u0646",
      "\u0642\u0637\u0631",
      "\u0643\u0627\u062B\u0648\u0644\u064A\u0643",
      "\u0643\u0648\u0645",
      "\u0645\u0635\u0631",
      "\u0645\u0644\u064A\u0633\u064A\u0627",
      "\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627",
      "\u0645\u0648\u0642\u0639",
      "\u0647\u0645\u0631\u0627\u0647",
      "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646",
      "\u0680\u0627\u0631\u062A",
      "\u0915\u0949\u092E",
      "\u0928\u0947\u091F",
      "\u092D\u093E\u0930\u0924",
      "\u092D\u093E\u0930\u0924\u092E\u094D",
      "\u092D\u093E\u0930\u094B\u0924",
      "\u0938\u0902\u0917\u0920\u0928",
      "\u09AC\u09BE\u0982\u09B2\u09BE",
      "\u09AD\u09BE\u09B0\u09A4",
      "\u09AD\u09BE\u09F0\u09A4",
      "\u0A2D\u0A3E\u0A30\u0A24",
      "\u0AAD\u0ABE\u0AB0\u0AA4",
      "\u0B2D\u0B3E\u0B30\u0B24",
      "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE",
      "\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8",
      "\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD",
      "\u0C2D\u0C3E\u0C30\u0C24\u0C4D",
      "\u0CAD\u0CBE\u0CB0\u0CA4",
      "\u0D2D\u0D3E\u0D30\u0D24\u0D02",
      "\u0DBD\u0D82\u0D9A\u0DCF",
      "\u0E04\u0E2D\u0E21",
      "\u0E44\u0E17\u0E22",
      "\u0EA5\u0EB2\u0EA7",
      "\u10D2\u10D4",
      "\u307F\u3093\u306A",
      "\u30A2\u30DE\u30BE\u30F3",
      "\u30AF\u30E9\u30A6\u30C9",
      "\u30B0\u30FC\u30B0\u30EB",
      "\u30B3\u30E0",
      "\u30B9\u30C8\u30A2",
      "\u30BB\u30FC\u30EB",
      "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3",
      "\u30DD\u30A4\u30F3\u30C8",
      "\u4E16\u754C",
      "\u4E2D\u4FE1",
      "\u4E2D\u56FD",
      "\u4E2D\u570B",
      "\u4E2D\u6587\u7F51",
      "\u4E9A\u9A6C\u900A",
      "\u4F01\u4E1A",
      "\u4F5B\u5C71",
      "\u4FE1\u606F",
      "\u5065\u5EB7",
      "\u516B\u5366",
      "\u516C\u53F8",
      "\u516C\u76CA",
      "\u53F0\u6E7E",
      "\u53F0\u7063",
      "\u5546\u57CE",
      "\u5546\u5E97",
      "\u5546\u6807",
      "\u5609\u91CC",
      "\u5609\u91CC\u5927\u9152\u5E97",
      "\u5728\u7EBF",
      "\u5927\u62FF",
      "\u5929\u4E3B\u6559",
      "\u5A31\u4E50",
      "\u5BB6\u96FB",
      "\u5E7F\u4E1C",
      "\u5FAE\u535A",
      "\u6148\u5584",
      "\u6211\u7231\u4F60",
      "\u624B\u673A",
      "\u62DB\u8058",
      "\u653F\u52A1",
      "\u653F\u5E9C",
      "\u65B0\u52A0\u5761",
      "\u65B0\u95FB",
      "\u65F6\u5C1A",
      "\u66F8\u7C4D",
      "\u673A\u6784",
      "\u6DE1\u9A6C\u9521",
      "\u6E38\u620F",
      "\u6FB3\u9580",
      "\u70B9\u770B",
      "\u79FB\u52A8",
      "\u7EC4\u7EC7\u673A\u6784",
      "\u7F51\u5740",
      "\u7F51\u5E97",
      "\u7F51\u7AD9",
      "\u7F51\u7EDC",
      "\u8054\u901A",
      "\u8C37\u6B4C",
      "\u8D2D\u7269",
      "\u901A\u8CA9",
      "\u96C6\u56E2",
      "\u96FB\u8A0A\u76C8\u79D1",
      "\u98DE\u5229\u6D66",
      "\u98DF\u54C1",
      "\u9910\u5385",
      "\u9999\u683C\u91CC\u62C9",
      "\u9999\u6E2F",
      "\uB2F7\uB137",
      "\uB2F7\uCEF4",
      "\uC0BC\uC131",
      "\uD55C\uAD6D"
    ];
  }
});

// node_modules/react-linkify/dist/decorators/defaultMatchDecorator.js
var require_defaultMatchDecorator = __commonJS({
  "node_modules/react-linkify/dist/decorators/defaultMatchDecorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _linkifyIt = require_linkify_it();
    var _linkifyIt2 = _interopRequireDefault(_linkifyIt);
    var _tlds = require_tlds();
    var _tlds2 = _interopRequireDefault(_tlds);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var linkify = new _linkifyIt2.default();
    linkify.tlds(_tlds2.default);
    exports.default = function(text) {
      return linkify.match(text);
    };
  }
});

// node_modules/react-linkify/dist/decorators/defaultTextDecorator.js
var require_defaultTextDecorator = __commonJS({
  "node_modules/react-linkify/dist/decorators/defaultTextDecorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function(text) {
      return text;
    };
  }
});

// node_modules/react-linkify/dist/components/Linkify.js
var require_Linkify = __commonJS({
  "node_modules/react-linkify/dist/components/Linkify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i6 = 0; i6 < props.length; i6++) {
          var descriptor = props[i6];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var React = _interopRequireWildcard(_react);
    var _defaultComponentDecorator = require_defaultComponentDecorator();
    var _defaultComponentDecorator2 = _interopRequireDefault(_defaultComponentDecorator);
    var _defaultHrefDecorator = require_defaultHrefDecorator();
    var _defaultHrefDecorator2 = _interopRequireDefault(_defaultHrefDecorator);
    var _defaultMatchDecorator = require_defaultMatchDecorator();
    var _defaultMatchDecorator2 = _interopRequireDefault(_defaultMatchDecorator);
    var _defaultTextDecorator = require_defaultTextDecorator();
    var _defaultTextDecorator2 = _interopRequireDefault(_defaultTextDecorator);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Linkify2 = function(_React$Component) {
      _inherits(Linkify3, _React$Component);
      function Linkify3() {
        _classCallCheck(this, Linkify3);
        return _possibleConstructorReturn(this, (Linkify3.__proto__ || Object.getPrototypeOf(Linkify3)).apply(this, arguments));
      }
      _createClass(Linkify3, [{
        key: "parseString",
        value: function parseString(string) {
          var _this2 = this;
          if (string === "") {
            return string;
          }
          var matches = this.props.matchDecorator(string);
          if (!matches) {
            return string;
          }
          var elements = [];
          var lastIndex = 0;
          matches.forEach(function(match, i6) {
            if (match.index > lastIndex) {
              elements.push(string.substring(lastIndex, match.index));
            }
            var decoratedHref = _this2.props.hrefDecorator(match.url);
            var decoratedText = _this2.props.textDecorator(match.text);
            var decoratedComponent = _this2.props.componentDecorator(decoratedHref, decoratedText, i6);
            elements.push(decoratedComponent);
            lastIndex = match.lastIndex;
          });
          if (string.length > lastIndex) {
            elements.push(string.substring(lastIndex));
          }
          return elements.length === 1 ? elements[0] : elements;
        }
      }, {
        key: "parse",
        value: function parse(children) {
          var _this3 = this;
          var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          if (typeof children === "string") {
            return this.parseString(children);
          } else if (React.isValidElement(children) && children.type !== "a" && children.type !== "button") {
            return React.cloneElement(children, { key }, this.parse(children.props.children));
          } else if (Array.isArray(children)) {
            return children.map(function(child, i6) {
              return _this3.parse(child, i6);
            });
          }
          return children;
        }
      }, {
        key: "render",
        value: function render() {
          return React.createElement(
            React.Fragment,
            null,
            this.parse(this.props.children)
          );
        }
      }]);
      return Linkify3;
    }(React.Component);
    Linkify2.defaultProps = {
      componentDecorator: _defaultComponentDecorator2.default,
      hrefDecorator: _defaultHrefDecorator2.default,
      matchDecorator: _defaultMatchDecorator2.default,
      textDecorator: _defaultTextDecorator2.default
    };
    exports.default = Linkify2;
  }
});

// node_modules/react-linkify/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/react-linkify/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _Linkify = require_Linkify();
    var _Linkify2 = _interopRequireDefault(_Linkify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _Linkify2.default;
  }
});

// app/components/loader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FeedLoader = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[660px] rounded-md  p-3 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 6,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[150px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 9,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-4 h-[7px] w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 10,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 8,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 h-2 rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 14,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 h-2 rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 15,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/loader.tsx",
            lineNumber: 13,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 17,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 18,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 21,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 7,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-[680px] bg-c-shadegray" }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-1 w-[660px]  rounded-md p-3 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[150px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-4 h-[7px] w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 h-2 rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 h-2 rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 42,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/loader.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 45,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-[680px] bg-c-shadegray" }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-1 w-[660px]  rounded-md p-3 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[150px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-4 h-[7px] w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 h-2 rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 h-2 rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/loader.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-[680px] bg-c-shadegray" }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-1 w-[660px]  rounded-md p-3 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[150px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-4 h-[7px] w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 h-2 rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 h-2 rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/loader.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/loader.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
};
var SuggestedLoader = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[220px] rounded-md  p-4 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[40px] w-[40px] rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[70px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-8 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[70px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[120px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[90px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[220px] rounded-md  p-4 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[40px] w-[40px] rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 134,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[70px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-8 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[70px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[120px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[90px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[220px] rounded-md  p-4 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[40px] w-[40px] rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[70px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-8 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[70px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 157,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[120px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 158,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[90px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 159,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 149,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[220px] rounded-md  p-4 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[40px] w-[40px] rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[70px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-8 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[70px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[120px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[90px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 165,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/loader.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
};
var PostLoader = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-ml-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " mx-auto w-[660px]  rounded-md p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 rounded-md bg-c-lightgray" }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 288,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[150px] rounded bg-c-lightgray" }, void 0, false, {
          fileName: "app/components/loader.tsx",
          lineNumber: 291,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-4 h-[7px] w-5 rounded bg-c-lightgray" }, void 0, false, {
          fileName: "app/components/loader.tsx",
          lineNumber: 292,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 290,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 296,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 h-2 rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 297,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 295,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
          fileName: "app/components/loader.tsx",
          lineNumber: 299,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 rounded bg-c-lightgray" }, void 0, false, {
          fileName: "app/components/loader.tsx",
          lineNumber: 300,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 294,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
          fileName: "app/components/loader.tsx",
          lineNumber: 303,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
          fileName: "app/components/loader.tsx",
          lineNumber: 304,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-20 h-2 w-5 rounded bg-c-lightgray" }, void 0, false, {
          fileName: "app/components/loader.tsx",
          lineNumber: 305,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 302,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 289,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/loader.tsx",
    lineNumber: 287,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/loader.tsx",
    lineNumber: 286,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/loader.tsx",
    lineNumber: 285,
    columnNumber: 5
  }, this);
};
var SearchLoader = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[400px] rounded-md  p-4 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[40px] w-[40px] rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 319,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 323,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 324,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/loader.tsx",
            lineNumber: 322,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[10px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 327,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 326,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 321,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 332,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 333,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 334,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 331,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 320,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 318,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 317,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[400px] rounded-md  p-4 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[40px] w-[40px] rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 341,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 345,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 346,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/loader.tsx",
            lineNumber: 344,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[10px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 349,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 348,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 343,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 354,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 355,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 356,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 353,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 342,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 340,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 339,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[400px] rounded-md  p-4 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[40px] w-[40px] rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 363,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 367,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 368,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/loader.tsx",
            lineNumber: 366,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[10px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 371,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 370,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 365,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 376,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 377,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 378,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 375,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 364,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 362,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 361,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-[400px] rounded-md  p-4 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[40px] w-[40px] rounded-md bg-c-lightgray" }, void 0, false, {
        fileName: "app/components/loader.tsx",
        lineNumber: 385,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 389,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
              fileName: "app/components/loader.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/loader.tsx",
            lineNumber: 388,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[10px] w-[50px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 393,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 392,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 387,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 398,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 399,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 h-[7px] w-[320px] rounded bg-c-lightgray" }, void 0, false, {
            fileName: "app/components/loader.tsx",
            lineNumber: 400,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/loader.tsx",
          lineNumber: 397,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/loader.tsx",
        lineNumber: 386,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/loader.tsx",
      lineNumber: 384,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 383,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/loader.tsx",
    lineNumber: 316,
    columnNumber: 5
  }, this);
};
var PostButtonLoader = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-5 rounded-md shadow flex justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2 mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[10px] w-[10px] rounded-md bg-c-lightgray" }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 423,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 422,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2 mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[10px] w-[10px] rounded-md bg-c-lightgray" }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 426,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 425,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex animate-pulse space-x-2 mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[10px] w-[10px] rounded-md bg-c-lightgray" }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 429,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/loader.tsx",
      lineNumber: 428,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/loader.tsx",
    lineNumber: 421,
    columnNumber: 5
  }, this);
};

// app/components/feed/post.tsx
var import_moment3 = __toESM(require_moment());

// app/utils/pubkey.ts
var import_bech32 = __toESM(require_dist());

// node_modules/react-toastify/dist/react-toastify.esm.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/clsx/dist/clsx.m.js
function r(e4) {
  var t9, f6, n5 = "";
  if ("string" == typeof e4 || "number" == typeof e4)
    n5 += e4;
  else if ("object" == typeof e4)
    if (Array.isArray(e4))
      for (t9 = 0; t9 < e4.length; t9++)
        e4[t9] && (f6 = r(e4[t9])) && (n5 && (n5 += " "), n5 += f6);
    else
      for (t9 in e4)
        e4[t9] && (n5 && (n5 += " "), n5 += t9);
  return n5;
}
function clsx() {
  for (var e4, t9, f6 = 0, n5 = ""; f6 < arguments.length; )
    (e4 = arguments[f6++]) && (t9 = r(e4)) && (n5 && (n5 += " "), n5 += t9);
  return n5;
}
var clsx_m_default = clsx;

// node_modules/react-toastify/dist/react-toastify.esm.mjs
"use client";
var u = (t9) => "number" == typeof t9 && !isNaN(t9);
var d = (t9) => "string" == typeof t9;
var p = (t9) => "function" == typeof t9;
var m = (t9) => d(t9) || p(t9) ? t9 : null;
var f = (t9) => (0, import_react.isValidElement)(t9) || d(t9) || p(t9) || u(t9);
function g(t9, e4, n5) {
  void 0 === n5 && (n5 = 300);
  const { scrollHeight: o12, style: s7 } = t9;
  requestAnimationFrame(() => {
    s7.minHeight = "initial", s7.height = o12 + "px", s7.transition = `all ${n5}ms`, requestAnimationFrame(() => {
      s7.height = "0", s7.padding = "0", s7.margin = "0", setTimeout(e4, n5);
    });
  });
}
function h(e4) {
  let { enter: a5, exit: r7, appendPosition: i6 = false, collapse: l8 = true, collapseDuration: c8 = 300 } = e4;
  return function(e5) {
    let { children: u5, position: d8, preventExitTransition: p4, done: m5, nodeRef: f6, isIn: h4 } = e5;
    const y6 = i6 ? `${a5}--${d8}` : a5, v3 = i6 ? `${r7}--${d8}` : r7, T4 = (0, import_react.useRef)(0);
    return (0, import_react.useLayoutEffect)(() => {
      const t9 = f6.current, e6 = y6.split(" "), n5 = (o12) => {
        o12.target === f6.current && (t9.dispatchEvent(new Event("d")), t9.removeEventListener("animationend", n5), t9.removeEventListener("animationcancel", n5), 0 === T4.current && "animationcancel" !== o12.type && t9.classList.remove(...e6));
      };
      t9.classList.add(...e6), t9.addEventListener("animationend", n5), t9.addEventListener("animationcancel", n5);
    }, []), (0, import_react.useEffect)(() => {
      const t9 = f6.current, e6 = () => {
        t9.removeEventListener("animationend", e6), l8 ? g(t9, m5, c8) : m5();
      };
      h4 || (p4 ? e6() : (T4.current = 1, t9.className += ` ${v3}`, t9.addEventListener("animationend", e6)));
    }, [h4]), import_react.default.createElement(import_react.default.Fragment, null, u5);
  };
}
function y(t9, e4) {
  return null != t9 ? { content: t9.content, containerId: t9.props.containerId, id: t9.props.toastId, theme: t9.props.theme, type: t9.props.type, data: t9.props.data || {}, isLoading: t9.props.isLoading, icon: t9.props.icon, status: e4 } : {};
}
var v = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(t9, e4) {
  return this.list.has(t9) || this.list.set(t9, []), this.list.get(t9).push(e4), this;
}, off(t9, e4) {
  if (e4) {
    const n5 = this.list.get(t9).filter((t10) => t10 !== e4);
    return this.list.set(t9, n5), this;
  }
  return this.list.delete(t9), this;
}, cancelEmit(t9) {
  const e4 = this.emitQueue.get(t9);
  return e4 && (e4.forEach(clearTimeout), this.emitQueue.delete(t9)), this;
}, emit(t9) {
  this.list.has(t9) && this.list.get(t9).forEach((e4) => {
    const n5 = setTimeout(() => {
      e4(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(t9) || this.emitQueue.set(t9, []), this.emitQueue.get(t9).push(n5);
  });
} };
var T = (e4) => {
  let { theme: n5, type: o12, ...s7 } = e4;
  return import_react.default.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: "colored" === n5 ? "currentColor" : `var(--toastify-icon-color-${o12})`, ...s7 });
};
var E = { info: function(e4) {
  return import_react.default.createElement(T, { ...e4 }, import_react.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e4) {
  return import_react.default.createElement(T, { ...e4 }, import_react.default.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e4) {
  return import_react.default.createElement(T, { ...e4 }, import_react.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e4) {
  return import_react.default.createElement(T, { ...e4 }, import_react.default.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return import_react.default.createElement("div", { className: "Toastify__spinner" });
} };
function C(t9) {
  const [, o12] = (0, import_react.useReducer)((t10) => t10 + 1, 0), [l8, c8] = (0, import_react.useState)([]), g4 = (0, import_react.useRef)(null), h4 = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current, T4 = (t10) => -1 !== l8.indexOf(t10), C3 = (0, import_react.useRef)({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t9, containerId: null, isToastActive: T4, getToast: (t10) => h4.get(t10) }).current;
  function b4(t10) {
    let { containerId: e4 } = t10;
    const { limit: n5 } = C3.props;
    !n5 || e4 && C3.containerId !== e4 || (C3.count -= C3.queue.length, C3.queue = []);
  }
  function I5(t10) {
    c8((e4) => null == t10 ? [] : e4.filter((e5) => e5 !== t10));
  }
  function _4() {
    const { toastContent: t10, toastProps: e4, staleId: n5 } = C3.queue.shift();
    O4(t10, e4, n5);
  }
  function L2(t10, n5) {
    let { delay: s7, staleId: r7, ...i6 } = n5;
    if (!f(t10) || function(t11) {
      return !g4.current || C3.props.enableMultiContainer && t11.containerId !== C3.props.containerId || h4.has(t11.toastId) && null == t11.updateId;
    }(i6))
      return;
    const { toastId: l9, updateId: c9, data: T5 } = i6, { props: b5 } = C3, L3 = () => I5(l9), N5 = null == c9;
    N5 && C3.count++;
    const M4 = { ...b5, style: b5.toastStyle, key: C3.toastKey++, ...Object.fromEntries(Object.entries(i6).filter((t11) => {
      let [e4, n6] = t11;
      return null != n6;
    })), toastId: l9, updateId: c9, data: T5, closeToast: L3, isIn: false, className: m(i6.className || b5.toastClassName), bodyClassName: m(i6.bodyClassName || b5.bodyClassName), progressClassName: m(i6.progressClassName || b5.progressClassName), autoClose: !i6.isLoading && (R3 = i6.autoClose, w5 = b5.autoClose, false === R3 || u(R3) && R3 > 0 ? R3 : w5), deleteToast() {
      const t11 = y(h4.get(l9), "removed");
      h4.delete(l9), v.emit(4, t11);
      const e4 = C3.queue.length;
      if (C3.count = null == l9 ? C3.count - C3.displayedToast : C3.count - 1, C3.count < 0 && (C3.count = 0), e4 > 0) {
        const t12 = null == l9 ? C3.props.limit : 1;
        if (1 === e4 || 1 === t12)
          C3.displayedToast++, _4();
        else {
          const n6 = t12 > e4 ? e4 : t12;
          C3.displayedToast = n6;
          for (let t13 = 0; t13 < n6; t13++)
            _4();
        }
      } else
        o12();
    } };
    var R3, w5;
    M4.iconOut = function(t11) {
      let { theme: n6, type: o13, isLoading: s8, icon: r8 } = t11, i7 = null;
      const l10 = { theme: n6, type: o13 };
      return false === r8 || (p(r8) ? i7 = r8(l10) : (0, import_react.isValidElement)(r8) ? i7 = (0, import_react.cloneElement)(r8, l10) : d(r8) || u(r8) ? i7 = r8 : s8 ? i7 = E.spinner() : ((t12) => t12 in E)(o13) && (i7 = E[o13](l10))), i7;
    }(M4), p(i6.onOpen) && (M4.onOpen = i6.onOpen), p(i6.onClose) && (M4.onClose = i6.onClose), M4.closeButton = b5.closeButton, false === i6.closeButton || f(i6.closeButton) ? M4.closeButton = i6.closeButton : true === i6.closeButton && (M4.closeButton = !f(b5.closeButton) || b5.closeButton);
    let x6 = t10;
    (0, import_react.isValidElement)(t10) && !d(t10.type) ? x6 = (0, import_react.cloneElement)(t10, { closeToast: L3, toastProps: M4, data: T5 }) : p(t10) && (x6 = t10({ closeToast: L3, toastProps: M4, data: T5 })), b5.limit && b5.limit > 0 && C3.count > b5.limit && N5 ? C3.queue.push({ toastContent: x6, toastProps: M4, staleId: r7 }) : u(s7) ? setTimeout(() => {
      O4(x6, M4, r7);
    }, s7) : O4(x6, M4, r7);
  }
  function O4(t10, e4, n5) {
    const { toastId: o13 } = e4;
    n5 && h4.delete(n5);
    const s7 = { content: t10, props: e4 };
    h4.set(o13, s7), c8((t11) => [...t11, o13].filter((t12) => t12 !== n5)), v.emit(4, y(s7, null == s7.props.updateId ? "added" : "updated"));
  }
  return (0, import_react.useEffect)(() => (C3.containerId = t9.containerId, v.cancelEmit(3).on(0, L2).on(1, (t10) => g4.current && I5(t10)).on(5, b4).emit(2, C3), () => {
    h4.clear(), v.emit(3, C3);
  }), []), (0, import_react.useEffect)(() => {
    C3.props = t9, C3.isToastActive = T4, C3.displayedToast = l8.length;
  }), { getToastToRender: function(e4) {
    const n5 = /* @__PURE__ */ new Map(), o13 = Array.from(h4.values());
    return t9.newestOnTop && o13.reverse(), o13.forEach((t10) => {
      const { position: e5 } = t10.props;
      n5.has(e5) || n5.set(e5, []), n5.get(e5).push(t10);
    }), Array.from(n5, (t10) => e4(t10[0], t10[1]));
  }, containerRef: g4, isToastActive: T4 };
}
function b(t9) {
  return t9.targetTouches && t9.targetTouches.length >= 1 ? t9.targetTouches[0].clientX : t9.clientX;
}
function I(t9) {
  return t9.targetTouches && t9.targetTouches.length >= 1 ? t9.targetTouches[0].clientY : t9.clientY;
}
function _(t9) {
  const [o12, a5] = (0, import_react.useState)(false), [r7, l8] = (0, import_react.useState)(false), c8 = (0, import_react.useRef)(null), u5 = (0, import_react.useRef)({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, boundingRect: null, didMove: false }).current, d8 = (0, import_react.useRef)(t9), { autoClose: m5, pauseOnHover: f6, closeToast: g4, onClick: h4, closeOnClick: y6 } = t9;
  function v3(e4) {
    if (t9.draggable) {
      "touchstart" === e4.nativeEvent.type && e4.nativeEvent.preventDefault(), u5.didMove = false, document.addEventListener("mousemove", _4), document.addEventListener("mouseup", L2), document.addEventListener("touchmove", _4), document.addEventListener("touchend", L2);
      const n5 = c8.current;
      u5.canCloseOnClick = true, u5.canDrag = true, u5.boundingRect = n5.getBoundingClientRect(), n5.style.transition = "", u5.x = b(e4.nativeEvent), u5.y = I(e4.nativeEvent), "x" === t9.draggableDirection ? (u5.start = u5.x, u5.removalDistance = n5.offsetWidth * (t9.draggablePercent / 100)) : (u5.start = u5.y, u5.removalDistance = n5.offsetHeight * (80 === t9.draggablePercent ? 1.5 * t9.draggablePercent : t9.draggablePercent / 100));
    }
  }
  function T4(e4) {
    if (u5.boundingRect) {
      const { top: n5, bottom: o13, left: s7, right: a6 } = u5.boundingRect;
      "touchend" !== e4.nativeEvent.type && t9.pauseOnHover && u5.x >= s7 && u5.x <= a6 && u5.y >= n5 && u5.y <= o13 ? C3() : E4();
    }
  }
  function E4() {
    a5(true);
  }
  function C3() {
    a5(false);
  }
  function _4(e4) {
    const n5 = c8.current;
    u5.canDrag && n5 && (u5.didMove = true, o12 && C3(), u5.x = b(e4), u5.y = I(e4), u5.delta = "x" === t9.draggableDirection ? u5.x - u5.start : u5.y - u5.start, u5.start !== u5.x && (u5.canCloseOnClick = false), n5.style.transform = `translate${t9.draggableDirection}(${u5.delta}px)`, n5.style.opacity = "" + (1 - Math.abs(u5.delta / u5.removalDistance)));
  }
  function L2() {
    document.removeEventListener("mousemove", _4), document.removeEventListener("mouseup", L2), document.removeEventListener("touchmove", _4), document.removeEventListener("touchend", L2);
    const e4 = c8.current;
    if (u5.canDrag && u5.didMove && e4) {
      if (u5.canDrag = false, Math.abs(u5.delta) > u5.removalDistance)
        return l8(true), void t9.closeToast();
      e4.style.transition = "transform 0.2s, opacity 0.2s", e4.style.transform = `translate${t9.draggableDirection}(0)`, e4.style.opacity = "1";
    }
  }
  (0, import_react.useEffect)(() => {
    d8.current = t9;
  }), (0, import_react.useEffect)(() => (c8.current && c8.current.addEventListener("d", E4, { once: true }), p(t9.onOpen) && t9.onOpen((0, import_react.isValidElement)(t9.children) && t9.children.props), () => {
    const t10 = d8.current;
    p(t10.onClose) && t10.onClose((0, import_react.isValidElement)(t10.children) && t10.children.props);
  }), []), (0, import_react.useEffect)(() => (t9.pauseOnFocusLoss && (document.hasFocus() || C3(), window.addEventListener("focus", E4), window.addEventListener("blur", C3)), () => {
    t9.pauseOnFocusLoss && (window.removeEventListener("focus", E4), window.removeEventListener("blur", C3));
  }), [t9.pauseOnFocusLoss]);
  const O4 = { onMouseDown: v3, onTouchStart: v3, onMouseUp: T4, onTouchEnd: T4 };
  return m5 && f6 && (O4.onMouseEnter = C3, O4.onMouseLeave = E4), y6 && (O4.onClick = (t10) => {
    h4 && h4(t10), u5.canCloseOnClick && g4();
  }), { playToast: E4, pauseToast: C3, isRunning: o12, preventExitTransition: r7, toastRef: c8, eventHandlers: O4 };
}
function L(e4) {
  let { closeToast: n5, theme: o12, ariaLabel: s7 = "close" } = e4;
  return import_react.default.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o12}`, type: "button", onClick: (t9) => {
    t9.stopPropagation(), n5(t9);
  }, "aria-label": s7 }, import_react.default.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, import_react.default.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function O(e4) {
  let { delay: n5, isRunning: o12, closeToast: s7, type: a5 = "default", hide: r7, className: i6, style: l8, controlledProgress: u5, progress: d8, rtl: m5, isIn: f6, theme: g4 } = e4;
  const h4 = r7 || u5 && 0 === d8, y6 = { ...l8, animationDuration: `${n5}ms`, animationPlayState: o12 ? "running" : "paused", opacity: h4 ? 0 : 1 };
  u5 && (y6.transform = `scaleX(${d8})`);
  const v3 = clsx_m_default("Toastify__progress-bar", u5 ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g4}`, `Toastify__progress-bar--${a5}`, { "Toastify__progress-bar--rtl": m5 }), T4 = p(i6) ? i6({ rtl: m5, type: a5, defaultClassName: v3 }) : clsx_m_default(v3, i6);
  return import_react.default.createElement("div", { role: "progressbar", "aria-hidden": h4 ? "true" : "false", "aria-label": "notification timer", className: T4, style: y6, [u5 && d8 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u5 && d8 < 1 ? null : () => {
    f6 && s7();
  } });
}
var N = (n5) => {
  const { isRunning: o12, preventExitTransition: s7, toastRef: r7, eventHandlers: i6 } = _(n5), { closeButton: l8, children: u5, autoClose: d8, onClick: m5, type: f6, hideProgressBar: g4, closeToast: h4, transition: y6, position: v3, className: T4, style: E4, bodyClassName: C3, bodyStyle: b4, progressClassName: I5, progressStyle: N5, updateId: M4, role: R3, progress: w5, rtl: x6, toastId: $3, deleteToast: k2, isIn: P2, isLoading: B2, iconOut: D5, closeOnClick: A2, theme: z4 } = n5, F5 = clsx_m_default("Toastify__toast", `Toastify__toast-theme--${z4}`, `Toastify__toast--${f6}`, { "Toastify__toast--rtl": x6 }, { "Toastify__toast--close-on-click": A2 }), H5 = p(T4) ? T4({ rtl: x6, position: v3, type: f6, defaultClassName: F5 }) : clsx_m_default(F5, T4), S4 = !!w5 || !d8, q3 = { closeToast: h4, type: f6, theme: z4 };
  let Q3 = null;
  return false === l8 || (Q3 = p(l8) ? l8(q3) : (0, import_react.isValidElement)(l8) ? (0, import_react.cloneElement)(l8, q3) : L(q3)), import_react.default.createElement(y6, { isIn: P2, done: k2, position: v3, preventExitTransition: s7, nodeRef: r7 }, import_react.default.createElement("div", { id: $3, onClick: m5, className: H5, ...i6, style: E4, ref: r7 }, import_react.default.createElement("div", { ...P2 && { role: R3 }, className: p(C3) ? C3({ type: f6 }) : clsx_m_default("Toastify__toast-body", C3), style: b4 }, null != D5 && import_react.default.createElement("div", { className: clsx_m_default("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !B2 }) }, D5), import_react.default.createElement("div", null, u5)), Q3, import_react.default.createElement(O, { ...M4 && !S4 ? { key: `pb-${M4}` } : {}, rtl: x6, theme: z4, delay: d8, isRunning: o12, isIn: P2, closeToast: h4, hide: g4, type: f6, style: N5, className: I5, controlledProgress: S4, progress: w5 || 0 })));
};
var M = function(t9, e4) {
  return void 0 === e4 && (e4 = false), { enter: `Toastify--animate Toastify__${t9}-enter`, exit: `Toastify--animate Toastify__${t9}-exit`, appendPosition: e4 };
};
var R = h(M("bounce", true));
var w = h(M("slide", true));
var x = h(M("zoom"));
var $ = h(M("flip"));
var k = (0, import_react.forwardRef)((e4, n5) => {
  const { getToastToRender: o12, containerRef: a5, isToastActive: r7 } = C(e4), { className: i6, style: l8, rtl: u5, containerId: d8 } = e4;
  function f6(t9) {
    const e5 = clsx_m_default("Toastify__toast-container", `Toastify__toast-container--${t9}`, { "Toastify__toast-container--rtl": u5 });
    return p(i6) ? i6({ position: t9, rtl: u5, defaultClassName: e5 }) : clsx_m_default(e5, m(i6));
  }
  return (0, import_react.useEffect)(() => {
    n5 && (n5.current = a5.current);
  }, []), import_react.default.createElement("div", { ref: a5, className: "Toastify", id: d8 }, o12((e5, n6) => {
    const o13 = n6.length ? { ...l8 } : { ...l8, pointerEvents: "none" };
    return import_react.default.createElement("div", { className: f6(e5), style: o13, key: `container-${e5}` }, n6.map((e6, o14) => {
      let { content: s7, props: a6 } = e6;
      return import_react.default.createElement(N, { ...a6, isIn: r7(a6.toastId), style: { ...a6.style, "--nth": o14 + 1, "--len": n6.length }, key: `toast-${a6.key}` }, s7);
    }));
  }));
});
k.displayName = "ToastContainer", k.defaultProps = { position: "top-right", transition: R, autoClose: 5e3, closeButton: L, pauseOnHover: true, pauseOnFocusLoss: true, closeOnClick: true, draggable: true, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
var P;
var B = /* @__PURE__ */ new Map();
var D = [];
var A = 1;
function z() {
  return "" + A++;
}
function F(t9) {
  return t9 && (d(t9.toastId) || u(t9.toastId)) ? t9.toastId : z();
}
function H(t9, e4) {
  return B.size > 0 ? v.emit(0, t9, e4) : D.push({ content: t9, options: e4 }), e4.toastId;
}
function S(t9, e4) {
  return { ...e4, type: e4 && e4.type || t9, toastId: F(e4) };
}
function q(t9) {
  return (e4, n5) => H(e4, S(t9, n5));
}
function Q(t9, e4) {
  return H(t9, S("default", e4));
}
Q.loading = (t9, e4) => H(t9, S("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...e4 })), Q.promise = function(t9, e4, n5) {
  let o12, { pending: s7, error: a5, success: r7 } = e4;
  s7 && (o12 = d(s7) ? Q.loading(s7, n5) : Q.loading(s7.render, { ...n5, ...s7 }));
  const i6 = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l8 = (t10, e5, s8) => {
    if (null == e5)
      return void Q.dismiss(o12);
    const a6 = { type: t10, ...i6, ...n5, data: s8 }, r8 = d(e5) ? { render: e5 } : e5;
    return o12 ? Q.update(o12, { ...a6, ...r8 }) : Q(r8.render, { ...a6, ...r8 }), s8;
  }, c8 = p(t9) ? t9() : t9;
  return c8.then((t10) => l8("success", r7, t10)).catch((t10) => l8("error", a5, t10)), c8;
}, Q.success = q("success"), Q.info = q("info"), Q.error = q("error"), Q.warning = q("warning"), Q.warn = Q.warning, Q.dark = (t9, e4) => H(t9, S("default", { theme: "dark", ...e4 })), Q.dismiss = (t9) => {
  B.size > 0 ? v.emit(1, t9) : D = D.filter((e4) => null != t9 && e4.options.toastId !== t9);
}, Q.clearWaitingQueue = function(t9) {
  return void 0 === t9 && (t9 = {}), v.emit(5, t9);
}, Q.isActive = (t9) => {
  let e4 = false;
  return B.forEach((n5) => {
    n5.isToastActive && n5.isToastActive(t9) && (e4 = true);
  }), e4;
}, Q.update = function(t9, e4) {
  void 0 === e4 && (e4 = {}), setTimeout(() => {
    const n5 = function(t10, e5) {
      let { containerId: n6 } = e5;
      const o12 = B.get(n6 || P);
      return o12 && o12.getToast(t10);
    }(t9, e4);
    if (n5) {
      const { props: o12, content: s7 } = n5, a5 = { delay: 100, ...o12, ...e4, toastId: e4.toastId || t9, updateId: z() };
      a5.toastId !== t9 && (a5.staleId = t9);
      const r7 = a5.render || s7;
      delete a5.render, H(r7, a5);
    }
  }, 0);
}, Q.done = (t9) => {
  Q.update(t9, { progress: 1 });
}, Q.onChange = (t9) => (v.on(4, t9), () => {
  v.off(4, t9);
}), Q.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, Q.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, v.on(2, (t9) => {
  P = t9.containerId || t9, B.set(P, t9), D.forEach((t10) => {
    v.emit(0, t10.content, t10.options);
  }), D = [];
}).on(3, (t9) => {
  B.delete(t9.containerId || t9), 0 === B.size && v.off(0).off(1).off(5);
});

// app/utils/pubkey.ts
function mask(pubkey) {
  return pubkey.slice(0, 4) + "..." + pubkey.slice(-4);
}
function avatar(pubkey) {
  return `https://api.dicebear.com/5.x/bottts/svg?seed=${pubkey}`;
}
function isNpubBech32(input) {
  try {
    const decoded = import_bech32.bech32.decode(input);
    return decoded.prefix === "npub";
  } catch (err) {
    return false;
  }
}
function convertBech32ToHex(bech32Str) {
  if (isNpubBech32(bech32Str)) {
    const decoded = import_bech32.bech32.decode(bech32Str);
    const uint8Array = new Uint8Array(import_bech32.bech32.fromWords(decoded.words));
    const hexStr = Array.from(uint8Array).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return hexStr;
  }
  return null;
}
var copyPubkey = (pubkey) => {
  navigator.clipboard.writeText(pubkey);
  Q.success("Public key copied!", {
    position: Q.POSITION.TOP_CENTER
  });
};

// app/components/feed/post-action.tsx
var import_react29 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i2 = Object.defineProperty;
var d2 = (t9, e4, n5) => e4 in t9 ? i2(t9, e4, { enumerable: true, configurable: true, writable: true, value: n5 }) : t9[e4] = n5;
var r3 = (t9, e4, n5) => (d2(t9, typeof e4 != "symbol" ? e4 + "" : e4, n5), n5);
var o2 = class {
  constructor() {
    r3(this, "current", this.detect());
    r3(this, "handoffState", "pending");
    r3(this, "currentId", 0);
  }
  set(e4) {
    this.current !== e4 && (this.handoffState = "pending", this.currentId = 0, this.current = e4);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s2 = new o2();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l2 = (e4, f6) => {
  s2.isServer ? (0, import_react2.useEffect)(e4, f6) : (0, import_react2.useLayoutEffect)(e4, f6);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);
function s3(e4) {
  let r7 = (0, import_react3.useRef)(e4);
  return l2(() => {
    r7.current = e4;
  }, [e4]), r7;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t4(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o12) => setTimeout(() => {
    throw o12;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o3() {
  let n5 = [], r7 = { addEventListener(e4, t9, s7, a5) {
    return e4.addEventListener(t9, s7, a5), r7.add(() => e4.removeEventListener(t9, s7, a5));
  }, requestAnimationFrame(...e4) {
    let t9 = requestAnimationFrame(...e4);
    return r7.add(() => cancelAnimationFrame(t9));
  }, nextFrame(...e4) {
    return r7.requestAnimationFrame(() => r7.requestAnimationFrame(...e4));
  }, setTimeout(...e4) {
    let t9 = setTimeout(...e4);
    return r7.add(() => clearTimeout(t9));
  }, microTask(...e4) {
    let t9 = { current: true };
    return t4(() => {
      t9.current && e4[0]();
    }), r7.add(() => {
      t9.current = false;
    });
  }, style(e4, t9, s7) {
    let a5 = e4.style.getPropertyValue(t9);
    return Object.assign(e4.style, { [t9]: s7 }), this.add(() => {
      Object.assign(e4.style, { [t9]: a5 });
    });
  }, group(e4) {
    let t9 = o3();
    return e4(t9), this.add(() => t9.dispose());
  }, add(e4) {
    return n5.push(e4), () => {
      let t9 = n5.indexOf(e4);
      if (t9 >= 0)
        for (let s7 of n5.splice(t9, 1))
          s7();
    };
  }, dispose() {
    for (let e4 of n5.splice(0))
      e4();
  } };
  return r7;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p2() {
  let [e4] = (0, import_react4.useState)(o3);
  return (0, import_react4.useEffect)(() => () => e4.dispose(), [e4]), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react5 = __toESM(require_react(), 1);
var o5 = function(t9) {
  let e4 = s3(t9);
  return import_react5.default.useCallback((...r7) => e4.current(...r7), [e4]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l3() {
  let [e4, f6] = (0, import_react6.useState)(s2.isHandoffComplete);
  return e4 && s2.isHandoffComplete === false && f6(false), (0, import_react6.useEffect)(() => {
    e4 !== true && f6(true);
  }, [e4]), (0, import_react6.useEffect)(() => s2.handoff(), []), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o7;
var I2 = (o7 = import_react7.default.useId) != null ? o7 : function() {
  let n5 = l3(), [e4, u5] = import_react7.default.useState(n5 ? () => s2.nextId() : null);
  return l2(() => {
    e4 === null && u5(s2.nextId());
  }, [e4]), e4 != null ? "" + e4 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r7, n5, ...a5) {
  if (r7 in n5) {
    let e4 = n5[r7];
    return typeof e4 == "function" ? e4(...a5) : e4;
  }
  let t9 = new Error(`Tried to handle "${r7}" but there is no handler defined. Only defined handlers are: ${Object.keys(n5).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t9, u2), t9;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e2(r7) {
  return s2.isServer ? null : r7 instanceof Node ? r7.ownerDocument : r7 != null && r7.hasOwnProperty("current") && r7.current instanceof Node ? r7.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var M2 = ((n5) => (n5[n5.First = 1] = "First", n5[n5.Previous = 2] = "Previous", n5[n5.Next = 4] = "Next", n5[n5.Last = 8] = "Last", n5[n5.WrapAround = 16] = "WrapAround", n5[n5.NoScroll = 32] = "NoScroll", n5))(M2 || {});
var N2 = ((o12) => (o12[o12.Error = 0] = "Error", o12[o12.Overflow = 1] = "Overflow", o12[o12.Success = 2] = "Success", o12[o12.Underflow = 3] = "Underflow", o12))(N2 || {});
var F2 = ((t9) => (t9[t9.Previous = -1] = "Previous", t9[t9.Next = 1] = "Next", t9))(F2 || {});
function f2(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(c2)).sort((r7, t9) => Math.sign((r7.tabIndex || Number.MAX_SAFE_INTEGER) - (t9.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T2 = ((t9) => (t9[t9.Strict = 0] = "Strict", t9[t9.Loose = 1] = "Loose", t9))(T2 || {});
function h2(e4, r7 = 0) {
  var t9;
  return e4 === ((t9 = e2(e4)) == null ? void 0 : t9.body) ? false : u2(r7, { [0]() {
    return e4.matches(c2);
  }, [1]() {
    let l8 = e4;
    for (; l8 !== null; ) {
      if (l8.matches(c2))
        return true;
      l8 = l8.parentElement;
    }
    return false;
  } });
}
function D2(e4) {
  let r7 = e2(e4);
  o3().nextFrame(() => {
    r7 && !h2(r7.activeElement, 0) && y2(e4);
  });
}
var w2 = ((t9) => (t9[t9.Keyboard = 0] = "Keyboard", t9[t9.Mouse = 1] = "Mouse", t9))(w2 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e4) => {
  e4.metaKey || e4.altKey || e4.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e4) => {
  e4.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e4.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e4) {
  e4 == null || e4.focus({ preventScroll: true });
}
var S2 = ["textarea", "input"].join(",");
function H2(e4) {
  var r7, t9;
  return (t9 = (r7 = e4 == null ? void 0 : e4.matches) == null ? void 0 : r7.call(e4, S2)) != null ? t9 : false;
}
function I3(e4, r7 = (t9) => t9) {
  return e4.slice().sort((t9, l8) => {
    let o12 = r7(t9), i6 = r7(l8);
    if (o12 === null || i6 === null)
      return 0;
    let n5 = o12.compareDocumentPosition(i6);
    return n5 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n5 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _2(e4, r7) {
  return O2(f2(), r7, { relativeTo: e4 });
}
function O2(e4, r7, { sorted: t9 = true, relativeTo: l8 = null, skipElements: o12 = [] } = {}) {
  let i6 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4.ownerDocument, n5 = Array.isArray(e4) ? t9 ? I3(e4) : e4 : f2(e4);
  o12.length > 0 && n5.length > 1 && (n5 = n5.filter((s7) => !o12.includes(s7))), l8 = l8 != null ? l8 : i6.activeElement;
  let E4 = (() => {
    if (r7 & 5)
      return 1;
    if (r7 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r7 & 1)
      return 0;
    if (r7 & 2)
      return Math.max(0, n5.indexOf(l8)) - 1;
    if (r7 & 4)
      return Math.max(0, n5.indexOf(l8)) + 1;
    if (r7 & 8)
      return n5.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p4 = r7 & 32 ? { preventScroll: true } : {}, d8 = 0, a5 = n5.length, u5;
  do {
    if (d8 >= a5 || d8 + a5 <= 0)
      return 0;
    let s7 = x6 + d8;
    if (r7 & 16)
      s7 = (s7 + a5) % a5;
    else {
      if (s7 < 0)
        return 3;
      if (s7 >= a5)
        return 1;
    }
    u5 = n5[s7], u5 == null || u5.focus(p4), d8 += E4;
  } while (u5 !== i6.activeElement);
  return r7 & 6 && H2(u5) && u5.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react8 = __toESM(require_react(), 1);
function d3(e4, r7, n5) {
  let o12 = s3(r7);
  (0, import_react8.useEffect)(() => {
    function t9(u5) {
      o12.current(u5);
    }
    return document.addEventListener(e4, t9, n5), () => document.removeEventListener(e4, t9, n5);
  }, [e4, n5]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react9 = __toESM(require_react(), 1);
function s5(e4, r7, n5) {
  let o12 = s3(r7);
  (0, import_react9.useEffect)(() => {
    function t9(i6) {
      o12.current(i6);
    }
    return window.addEventListener(e4, t9, n5), () => window.removeEventListener(e4, t9, n5);
  }, [e4, n5]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function H3(s7, m5, i6 = true) {
  let l8 = (0, import_react10.useRef)(false);
  (0, import_react10.useEffect)(() => {
    requestAnimationFrame(() => {
      l8.current = i6;
    });
  }, [i6]);
  function a5(e4, o12) {
    if (!l8.current || e4.defaultPrevented)
      return;
    let n5 = o12(e4);
    if (n5 === null || !n5.getRootNode().contains(n5))
      return;
    let E4 = function r7(t9) {
      return typeof t9 == "function" ? r7(t9()) : Array.isArray(t9) || t9 instanceof Set ? t9 : [t9];
    }(s7);
    for (let r7 of E4) {
      if (r7 === null)
        continue;
      let t9 = r7 instanceof HTMLElement ? r7 : r7.current;
      if (t9 != null && t9.contains(n5) || e4.composed && e4.composedPath().includes(t9))
        return;
    }
    return !h2(n5, T2.Loose) && n5.tabIndex !== -1 && e4.preventDefault(), m5(e4, n5);
  }
  let u5 = (0, import_react10.useRef)(null);
  d3("mousedown", (e4) => {
    var o12, n5;
    l8.current && (u5.current = ((n5 = (o12 = e4.composedPath) == null ? void 0 : o12.call(e4)) == null ? void 0 : n5[0]) || e4.target);
  }, true), d3("click", (e4) => {
    u5.current && (a5(e4, () => u5.current), u5.current = null);
  }, true), s5("blur", (e4) => a5(e4, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react11 = __toESM(require_react(), 1);
function i3(t9) {
  var n5;
  if (t9.type)
    return t9.type;
  let e4 = (n5 = t9.as) != null ? n5 : "button";
  if (typeof e4 == "string" && e4.toLowerCase() === "button")
    return "button";
}
function s6(t9, e4) {
  let [n5, u5] = (0, import_react11.useState)(() => i3(t9));
  return l2(() => {
    u5(i3(t9));
  }, [t9.type, t9.as]), l2(() => {
    n5 || e4.current && e4.current instanceof HTMLButtonElement && !e4.current.hasAttribute("type") && u5("button");
  }, [n5, e4]), n5;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react12 = __toESM(require_react(), 1);
var u3 = Symbol();
function y3(...t9) {
  let n5 = (0, import_react12.useRef)(t9);
  (0, import_react12.useEffect)(() => {
    n5.current = t9;
  }, [t9]);
  let c8 = o5((e4) => {
    for (let o12 of n5.current)
      o12 != null && (typeof o12 == "function" ? o12(e4) : o12.current = e4);
  });
  return t9.every((e4) => e4 == null || (e4 == null ? void 0 : e4[u3])) ? void 0 : c8;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react13 = __toESM(require_react(), 1);
function F3({ container: e4, accept: t9, walk: r7, enabled: c8 = true }) {
  let o12 = (0, import_react13.useRef)(t9), l8 = (0, import_react13.useRef)(r7);
  (0, import_react13.useEffect)(() => {
    o12.current = t9, l8.current = r7;
  }, [t9, r7]), l2(() => {
    if (!e4 || !c8)
      return;
    let n5 = e2(e4);
    if (!n5)
      return;
    let f6 = o12.current, p4 = l8.current, d8 = Object.assign((i6) => f6(i6), { acceptNode: f6 }), u5 = n5.createTreeWalker(e4, NodeFilter.SHOW_ELEMENT, d8, false);
    for (; u5.nextNode(); )
      p4(u5.currentNode);
  }, [e4, c8, o12, l8]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f3(r7) {
  throw new Error("Unexpected object: " + r7);
}
var a3 = ((e4) => (e4[e4.First = 0] = "First", e4[e4.Previous = 1] = "Previous", e4[e4.Next = 2] = "Next", e4[e4.Last = 3] = "Last", e4[e4.Specific = 4] = "Specific", e4[e4.Nothing = 5] = "Nothing", e4))(a3 || {});
function x2(r7, n5) {
  let t9 = n5.resolveItems();
  if (t9.length <= 0)
    return null;
  let l8 = n5.resolveActiveIndex(), s7 = l8 != null ? l8 : -1, d8 = (() => {
    switch (r7.focus) {
      case 0:
        return t9.findIndex((e4) => !n5.resolveDisabled(e4));
      case 1: {
        let e4 = t9.slice().reverse().findIndex((i6, c8, u5) => s7 !== -1 && u5.length - c8 - 1 >= s7 ? false : !n5.resolveDisabled(i6));
        return e4 === -1 ? e4 : t9.length - 1 - e4;
      }
      case 2:
        return t9.findIndex((e4, i6) => i6 <= s7 ? false : !n5.resolveDisabled(e4));
      case 3: {
        let e4 = t9.slice().reverse().findIndex((i6) => !n5.resolveDisabled(i6));
        return e4 === -1 ? e4 : t9.length - 1 - e4;
      }
      case 4:
        return t9.findIndex((e4) => n5.resolveId(e4) === r7.id);
      case 5:
        return null;
      default:
        f3(r7);
    }
  })();
  return d8 === -1 ? l8 : d8;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e3(...n5) {
  return n5.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S3 = ((a5) => (a5[a5.None = 0] = "None", a5[a5.RenderStrategy = 1] = "RenderStrategy", a5[a5.Static = 2] = "Static", a5))(S3 || {});
var j = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(j || {});
function X({ ourProps: r7, theirProps: t9, slot: e4, defaultTag: a5, features: s7, visible: n5 = true, name: f6 }) {
  let o12 = N3(t9, r7);
  if (n5)
    return c4(o12, e4, a5, f6);
  let u5 = s7 != null ? s7 : 0;
  if (u5 & 2) {
    let { static: l8 = false, ...p4 } = o12;
    if (l8)
      return c4(p4, e4, a5, f6);
  }
  if (u5 & 1) {
    let { unmount: l8 = true, ...p4 } = o12;
    return u2(l8 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c4({ ...p4, hidden: true, style: { display: "none" } }, e4, a5, f6);
    } });
  }
  return c4(o12, e4, a5, f6);
}
function c4(r7, t9 = {}, e4, a5) {
  let { as: s7 = e4, children: n5, refName: f6 = "ref", ...o12 } = g2(r7, ["unmount", "static"]), u5 = r7.ref !== void 0 ? { [f6]: r7.ref } : {}, l8 = typeof n5 == "function" ? n5(t9) : n5;
  "className" in o12 && o12.className && typeof o12.className == "function" && (o12.className = o12.className(t9));
  let p4 = {};
  if (t9) {
    let i6 = false, m5 = [];
    for (let [y6, d8] of Object.entries(t9))
      typeof d8 == "boolean" && (i6 = true), d8 === true && m5.push(y6);
    i6 && (p4["data-headlessui-state"] = m5.join(" "));
  }
  if (s7 === import_react14.Fragment && Object.keys(R2(o12)).length > 0) {
    if (!(0, import_react14.isValidElement)(l8) || Array.isArray(l8) && l8.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a5} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o12).map((d8) => `  - ${d8}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d8) => `  - ${d8}`).join(`
`)].join(`
`));
    let i6 = l8.props, m5 = typeof (i6 == null ? void 0 : i6.className) == "function" ? (...d8) => e3(i6 == null ? void 0 : i6.className(...d8), o12.className) : e3(i6 == null ? void 0 : i6.className, o12.className), y6 = m5 ? { className: m5 } : {};
    return (0, import_react14.cloneElement)(l8, Object.assign({}, N3(l8.props, R2(g2(o12, ["ref"]))), p4, u5, w3(l8.ref, u5.ref), y6));
  }
  return (0, import_react14.createElement)(s7, Object.assign({}, g2(o12, ["ref"]), s7 !== import_react14.Fragment && u5, s7 !== import_react14.Fragment && p4), l8);
}
function w3(...r7) {
  return { ref: r7.every((t9) => t9 == null) ? void 0 : (t9) => {
    for (let e4 of r7)
      e4 != null && (typeof e4 == "function" ? e4(t9) : e4.current = t9);
  } };
}
function N3(...r7) {
  var a5;
  if (r7.length === 0)
    return {};
  if (r7.length === 1)
    return r7[0];
  let t9 = {}, e4 = {};
  for (let s7 of r7)
    for (let n5 in s7)
      n5.startsWith("on") && typeof s7[n5] == "function" ? ((a5 = e4[n5]) != null || (e4[n5] = []), e4[n5].push(s7[n5])) : t9[n5] = s7[n5];
  if (t9.disabled || t9["aria-disabled"])
    return Object.assign(t9, Object.fromEntries(Object.keys(e4).map((s7) => [s7, void 0])));
  for (let s7 in e4)
    Object.assign(t9, { [s7](n5, ...f6) {
      let o12 = e4[s7];
      for (let u5 of o12) {
        if ((n5 instanceof Event || (n5 == null ? void 0 : n5.nativeEvent) instanceof Event) && n5.defaultPrevented)
          return;
        u5(n5, ...f6);
      }
    } });
  return t9;
}
function D3(r7) {
  var t9;
  return Object.assign((0, import_react14.forwardRef)(r7), { displayName: (t9 = r7.displayName) != null ? t9 : r7.name });
}
function R2(r7) {
  let t9 = Object.assign({}, r7);
  for (let e4 in t9)
    t9[e4] === void 0 && delete t9[e4];
  return t9;
}
function g2(r7, t9 = []) {
  let e4 = Object.assign({}, r7);
  for (let a5 of t9)
    a5 in e4 && delete e4[a5];
  return e4;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r5(n5) {
  let e4 = n5.parentElement, l8 = null;
  for (; e4 && !(e4 instanceof HTMLFieldSetElement); )
    e4 instanceof HTMLLegendElement && (l8 = e4), e4 = e4.parentElement;
  let t9 = (e4 == null ? void 0 : e4.getAttribute("disabled")) === "";
  return t9 && i5(l8) ? false : t9;
}
function i5(n5) {
  if (!n5)
    return false;
  let e4 = n5.previousElementSibling;
  for (; e4 !== null; ) {
    if (e4 instanceof HTMLLegendElement)
      return false;
    e4 = e4.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react15 = __toESM(require_react(), 1);
var n2 = (0, import_react15.createContext)(null);
n2.displayName = "OpenClosedContext";
var d6 = ((e4) => (e4[e4.Open = 1] = "Open", e4[e4.Closed = 2] = "Closed", e4[e4.Closing = 4] = "Closing", e4[e4.Opening = 8] = "Opening", e4))(d6 || {});
function C2() {
  return (0, import_react15.useContext)(n2);
}
function c5({ value: o12, children: r7 }) {
  return import_react15.default.createElement(n2.Provider, { value: o12 }, r7);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o9 = ((r7) => (r7.Space = " ", r7.Enter = "Enter", r7.Escape = "Escape", r7.Backspace = "Backspace", r7.Delete = "Delete", r7.ArrowLeft = "ArrowLeft", r7.ArrowUp = "ArrowUp", r7.ArrowRight = "ArrowRight", r7.ArrowDown = "ArrowDown", r7.Home = "Home", r7.End = "End", r7.PageUp = "PageUp", r7.PageDown = "PageDown", r7.Tab = "Tab", r7))(o9 || {});

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react16 = __toESM(require_react(), 1);
function t7(e4) {
  return [e4.screenX, e4.screenY];
}
function u4() {
  let e4 = (0, import_react16.useRef)([-1, -1]);
  return { wasMoved(r7) {
    let n5 = t7(r7);
    return e4.current[0] === n5[0] && e4.current[1] === n5[1] ? false : (e4.current = n5, true);
  }, update(r7) {
    e4.current = t7(r7);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react17 = __toESM(require_react(), 1);
function f4() {
  let e4 = (0, import_react17.useRef)(false);
  return l2(() => (e4.current = true, () => {
    e4.current = false;
  }), []), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react18 = __toESM(require_react(), 1);
function n3(...e4) {
  return (0, import_react18.useMemo)(() => e2(...e4), [...e4]);
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react19 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a4 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o11(e4) {
  var r7, i6;
  let n5 = (r7 = e4.innerText) != null ? r7 : "", t9 = e4.cloneNode(true);
  if (!(t9 instanceof HTMLElement))
    return n5;
  let u5 = false;
  for (let f6 of t9.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f6.remove(), u5 = true;
  let l8 = u5 ? (i6 = t9.innerText) != null ? i6 : "" : n5;
  return a4.test(l8) && (l8 = l8.replace(a4, "")), l8;
}
function g3(e4) {
  let n5 = e4.getAttribute("aria-label");
  if (typeof n5 == "string")
    return n5.trim();
  let t9 = e4.getAttribute("aria-labelledby");
  if (t9) {
    let u5 = t9.split(" ").map((l8) => {
      let r7 = document.getElementById(l8);
      if (r7) {
        let i6 = r7.getAttribute("aria-label");
        return typeof i6 == "string" ? i6.trim() : o11(r7).trim();
      }
      return null;
    }).filter(Boolean);
    if (u5.length > 0)
      return u5.join(", ");
  }
  return o11(e4).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b3(c8) {
  let t9 = (0, import_react19.useRef)(""), r7 = (0, import_react19.useRef)("");
  return o5(() => {
    let e4 = c8.current;
    if (!e4)
      return "";
    let u5 = e4.innerText;
    if (t9.current === u5)
      return r7.current;
    let n5 = g3(e4).trim().toLowerCase();
    return t9.current = u5, r7.current = n5, n5;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react20 = __toESM(require_react(), 1);
var me = ((r7) => (r7[r7.Open = 0] = "Open", r7[r7.Closed = 1] = "Closed", r7))(me || {});
var de = ((r7) => (r7[r7.Pointer = 0] = "Pointer", r7[r7.Other = 1] = "Other", r7))(de || {});
var fe = ((a5) => (a5[a5.OpenMenu = 0] = "OpenMenu", a5[a5.CloseMenu = 1] = "CloseMenu", a5[a5.GoToItem = 2] = "GoToItem", a5[a5.Search = 3] = "Search", a5[a5.ClearSearch = 4] = "ClearSearch", a5[a5.RegisterItem = 5] = "RegisterItem", a5[a5.UnregisterItem = 6] = "UnregisterItem", a5))(fe || {});
function w4(e4, u5 = (r7) => r7) {
  let r7 = e4.activeItemIndex !== null ? e4.items[e4.activeItemIndex] : null, i6 = I3(u5(e4.items.slice()), (t9) => t9.dataRef.current.domRef.current), s7 = r7 ? i6.indexOf(r7) : null;
  return s7 === -1 && (s7 = null), { items: i6, activeItemIndex: s7 };
}
var Te = { [1](e4) {
  return e4.menuState === 1 ? e4 : { ...e4, activeItemIndex: null, menuState: 1 };
}, [0](e4) {
  return e4.menuState === 0 ? e4 : { ...e4, __demoMode: false, menuState: 0 };
}, [2]: (e4, u5) => {
  var s7;
  let r7 = w4(e4), i6 = x2(u5, { resolveItems: () => r7.items, resolveActiveIndex: () => r7.activeItemIndex, resolveId: (t9) => t9.id, resolveDisabled: (t9) => t9.dataRef.current.disabled });
  return { ...e4, ...r7, searchQuery: "", activeItemIndex: i6, activationTrigger: (s7 = u5.trigger) != null ? s7 : 1 };
}, [3]: (e4, u5) => {
  let i6 = e4.searchQuery !== "" ? 0 : 1, s7 = e4.searchQuery + u5.value.toLowerCase(), o12 = (e4.activeItemIndex !== null ? e4.items.slice(e4.activeItemIndex + i6).concat(e4.items.slice(0, e4.activeItemIndex + i6)) : e4.items).find((l8) => {
    var m5;
    return ((m5 = l8.dataRef.current.textValue) == null ? void 0 : m5.startsWith(s7)) && !l8.dataRef.current.disabled;
  }), a5 = o12 ? e4.items.indexOf(o12) : -1;
  return a5 === -1 || a5 === e4.activeItemIndex ? { ...e4, searchQuery: s7 } : { ...e4, searchQuery: s7, activeItemIndex: a5, activationTrigger: 1 };
}, [4](e4) {
  return e4.searchQuery === "" ? e4 : { ...e4, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e4, u5) => {
  let r7 = w4(e4, (i6) => [...i6, { id: u5.id, dataRef: u5.dataRef }]);
  return { ...e4, ...r7 };
}, [6]: (e4, u5) => {
  let r7 = w4(e4, (i6) => {
    let s7 = i6.findIndex((t9) => t9.id === u5.id);
    return s7 !== -1 && i6.splice(s7, 1), i6;
  });
  return { ...e4, ...r7, activationTrigger: 1 };
} };
var U = (0, import_react20.createContext)(null);
U.displayName = "MenuContext";
function O3(e4) {
  let u5 = (0, import_react20.useContext)(U);
  if (u5 === null) {
    let r7 = new Error(`<${e4} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r7, O3), r7;
  }
  return u5;
}
function ye(e4, u5) {
  return u2(u5.type, Te, e4, u5);
}
var Ie = import_react20.Fragment;
function Me(e4, u5) {
  let { __demoMode: r7 = false, ...i6 } = e4, s7 = (0, import_react20.useReducer)(ye, { __demoMode: r7, menuState: r7 ? 0 : 1, buttonRef: (0, import_react20.createRef)(), itemsRef: (0, import_react20.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t9, itemsRef: o12, buttonRef: a5 }, l8] = s7, m5 = y3(u5);
  H3([a5, o12], (g4, R3) => {
    var p4;
    l8({ type: 1 }), h2(R3, T2.Loose) || (g4.preventDefault(), (p4 = a5.current) == null || p4.focus());
  }, t9 === 0);
  let I5 = o5(() => {
    l8({ type: 1 });
  }), A2 = (0, import_react20.useMemo)(() => ({ open: t9 === 0, close: I5 }), [t9, I5]), f6 = { ref: m5 };
  return import_react20.default.createElement(U.Provider, { value: s7 }, import_react20.default.createElement(c5, { value: u2(t9, { [0]: d6.Open, [1]: d6.Closed }) }, X({ ourProps: f6, theirProps: i6, slot: A2, defaultTag: Ie, name: "Menu" })));
}
var ge = "button";
function Re(e4, u5) {
  var R3;
  let r7 = I2(), { id: i6 = `headlessui-menu-button-${r7}`, ...s7 } = e4, [t9, o12] = O3("Menu.Button"), a5 = y3(t9.buttonRef, u5), l8 = p2(), m5 = o5((p4) => {
    switch (p4.key) {
      case o9.Space:
      case o9.Enter:
      case o9.ArrowDown:
        p4.preventDefault(), p4.stopPropagation(), o12({ type: 0 }), l8.nextFrame(() => o12({ type: 2, focus: a3.First }));
        break;
      case o9.ArrowUp:
        p4.preventDefault(), p4.stopPropagation(), o12({ type: 0 }), l8.nextFrame(() => o12({ type: 2, focus: a3.Last }));
        break;
    }
  }), I5 = o5((p4) => {
    switch (p4.key) {
      case o9.Space:
        p4.preventDefault();
        break;
    }
  }), A2 = o5((p4) => {
    if (r5(p4.currentTarget))
      return p4.preventDefault();
    e4.disabled || (t9.menuState === 0 ? (o12({ type: 1 }), l8.nextFrame(() => {
      var M4;
      return (M4 = t9.buttonRef.current) == null ? void 0 : M4.focus({ preventScroll: true });
    })) : (p4.preventDefault(), o12({ type: 0 })));
  }), f6 = (0, import_react20.useMemo)(() => ({ open: t9.menuState === 0 }), [t9]), g4 = { ref: a5, id: i6, type: s6(e4, t9.buttonRef), "aria-haspopup": "menu", "aria-controls": (R3 = t9.itemsRef.current) == null ? void 0 : R3.id, "aria-expanded": e4.disabled ? void 0 : t9.menuState === 0, onKeyDown: m5, onKeyUp: I5, onClick: A2 };
  return X({ ourProps: g4, theirProps: s7, slot: f6, defaultTag: ge, name: "Menu.Button" });
}
var Ae = "div";
var be = S3.RenderStrategy | S3.Static;
function Ee(e4, u5) {
  var M4, b4;
  let r7 = I2(), { id: i6 = `headlessui-menu-items-${r7}`, ...s7 } = e4, [t9, o12] = O3("Menu.Items"), a5 = y3(t9.itemsRef, u5), l8 = n3(t9.itemsRef), m5 = p2(), I5 = C2(), A2 = (() => I5 !== null ? (I5 & d6.Open) === d6.Open : t9.menuState === 0)();
  (0, import_react20.useEffect)(() => {
    let n5 = t9.itemsRef.current;
    n5 && t9.menuState === 0 && n5 !== (l8 == null ? void 0 : l8.activeElement) && n5.focus({ preventScroll: true });
  }, [t9.menuState, t9.itemsRef, l8]), F3({ container: t9.itemsRef.current, enabled: t9.menuState === 0, accept(n5) {
    return n5.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n5.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n5) {
    n5.setAttribute("role", "none");
  } });
  let f6 = o5((n5) => {
    var E4, P2;
    switch (m5.dispose(), n5.key) {
      case o9.Space:
        if (t9.searchQuery !== "")
          return n5.preventDefault(), n5.stopPropagation(), o12({ type: 3, value: n5.key });
      case o9.Enter:
        if (n5.preventDefault(), n5.stopPropagation(), o12({ type: 1 }), t9.activeItemIndex !== null) {
          let { dataRef: S4 } = t9.items[t9.activeItemIndex];
          (P2 = (E4 = S4.current) == null ? void 0 : E4.domRef.current) == null || P2.click();
        }
        D2(t9.buttonRef.current);
        break;
      case o9.ArrowDown:
        return n5.preventDefault(), n5.stopPropagation(), o12({ type: 2, focus: a3.Next });
      case o9.ArrowUp:
        return n5.preventDefault(), n5.stopPropagation(), o12({ type: 2, focus: a3.Previous });
      case o9.Home:
      case o9.PageUp:
        return n5.preventDefault(), n5.stopPropagation(), o12({ type: 2, focus: a3.First });
      case o9.End:
      case o9.PageDown:
        return n5.preventDefault(), n5.stopPropagation(), o12({ type: 2, focus: a3.Last });
      case o9.Escape:
        n5.preventDefault(), n5.stopPropagation(), o12({ type: 1 }), o3().nextFrame(() => {
          var S4;
          return (S4 = t9.buttonRef.current) == null ? void 0 : S4.focus({ preventScroll: true });
        });
        break;
      case o9.Tab:
        n5.preventDefault(), n5.stopPropagation(), o12({ type: 1 }), o3().nextFrame(() => {
          _2(t9.buttonRef.current, n5.shiftKey ? M2.Previous : M2.Next);
        });
        break;
      default:
        n5.key.length === 1 && (o12({ type: 3, value: n5.key }), m5.setTimeout(() => o12({ type: 4 }), 350));
        break;
    }
  }), g4 = o5((n5) => {
    switch (n5.key) {
      case o9.Space:
        n5.preventDefault();
        break;
    }
  }), R3 = (0, import_react20.useMemo)(() => ({ open: t9.menuState === 0 }), [t9]), p4 = { "aria-activedescendant": t9.activeItemIndex === null || (M4 = t9.items[t9.activeItemIndex]) == null ? void 0 : M4.id, "aria-labelledby": (b4 = t9.buttonRef.current) == null ? void 0 : b4.id, id: i6, onKeyDown: f6, onKeyUp: g4, role: "menu", tabIndex: 0, ref: a5 };
  return X({ ourProps: p4, theirProps: s7, slot: R3, defaultTag: Ae, features: be, visible: A2, name: "Menu.Items" });
}
var Se = import_react20.Fragment;
function Pe(e4, u5) {
  let r7 = I2(), { id: i6 = `headlessui-menu-item-${r7}`, disabled: s7 = false, ...t9 } = e4, [o12, a5] = O3("Menu.Item"), l8 = o12.activeItemIndex !== null ? o12.items[o12.activeItemIndex].id === i6 : false, m5 = (0, import_react20.useRef)(null), I5 = y3(u5, m5);
  l2(() => {
    if (o12.__demoMode || o12.menuState !== 0 || !l8 || o12.activationTrigger === 0)
      return;
    let T4 = o3();
    return T4.requestAnimationFrame(() => {
      var v3, B2;
      (B2 = (v3 = m5.current) == null ? void 0 : v3.scrollIntoView) == null || B2.call(v3, { block: "nearest" });
    }), T4.dispose;
  }, [o12.__demoMode, m5, l8, o12.menuState, o12.activationTrigger, o12.activeItemIndex]);
  let A2 = b3(m5), f6 = (0, import_react20.useRef)({ disabled: s7, domRef: m5, get textValue() {
    return A2();
  } });
  l2(() => {
    f6.current.disabled = s7;
  }, [f6, s7]), l2(() => (a5({ type: 5, id: i6, dataRef: f6 }), () => a5({ type: 6, id: i6 })), [f6, i6]);
  let g4 = o5(() => {
    a5({ type: 1 });
  }), R3 = o5((T4) => {
    if (s7)
      return T4.preventDefault();
    a5({ type: 1 }), D2(o12.buttonRef.current);
  }), p4 = o5(() => {
    if (s7)
      return a5({ type: 2, focus: a3.Nothing });
    a5({ type: 2, focus: a3.Specific, id: i6 });
  }), M4 = u4(), b4 = o5((T4) => M4.update(T4)), n5 = o5((T4) => {
    M4.wasMoved(T4) && (s7 || l8 || a5({ type: 2, focus: a3.Specific, id: i6, trigger: 0 }));
  }), E4 = o5((T4) => {
    M4.wasMoved(T4) && (s7 || l8 && a5({ type: 2, focus: a3.Nothing }));
  }), P2 = (0, import_react20.useMemo)(() => ({ active: l8, disabled: s7, close: g4 }), [l8, s7, g4]);
  return X({ ourProps: { id: i6, ref: I5, role: "menuitem", tabIndex: s7 === true ? void 0 : -1, "aria-disabled": s7 === true ? true : void 0, disabled: void 0, onClick: R3, onFocus: p4, onPointerEnter: b4, onMouseEnter: b4, onPointerMove: n5, onMouseMove: n5, onPointerLeave: E4, onMouseLeave: E4 }, theirProps: t9, slot: P2, defaultTag: Se, name: "Menu.Item" });
}
var ve = D3(Me);
var xe = D3(Re);
var he = D3(Ee);
var De = D3(Pe);
var it = Object.assign(ve, { Button: xe, Items: he, Item: De });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react21 = __toESM(require_react(), 1);
function c6(a5 = 0) {
  let [l8, r7] = (0, import_react21.useState)(a5), t9 = f4(), o12 = (0, import_react21.useCallback)((e4) => {
    t9.current && r7((u5) => u5 | e4);
  }, [l8, t9]), m5 = (0, import_react21.useCallback)((e4) => Boolean(l8 & e4), [l8]), s7 = (0, import_react21.useCallback)((e4) => {
    t9.current && r7((u5) => u5 & ~e4);
  }, [r7, t9]), g4 = (0, import_react21.useCallback)((e4) => {
    t9.current && r7((u5) => u5 ^ e4);
  }, [r7]);
  return { flags: l8, addFlag: o12, hasFlag: m5, removeFlag: s7, toggleFlag: g4 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react22 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l7(r7) {
  let e4 = { called: false };
  return (...t9) => {
    if (!e4.called)
      return e4.called = true, r7(...t9);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d7(t9, ...e4) {
  t9 && e4.length > 0 && t9.classList.add(...e4);
}
function v2(t9, ...e4) {
  t9 && e4.length > 0 && t9.classList.remove(...e4);
}
function F4(t9, e4) {
  let n5 = o3();
  if (!t9)
    return n5.dispose;
  let { transitionDuration: m5, transitionDelay: o12 } = getComputedStyle(t9), [u5, p4] = [m5, o12].map((a5) => {
    let [r7 = 0] = a5.split(",").filter(Boolean).map((i6) => i6.includes("ms") ? parseFloat(i6) : parseFloat(i6) * 1e3).sort((i6, f6) => f6 - i6);
    return r7;
  }), l8 = u5 + p4;
  if (l8 !== 0) {
    n5.group((r7) => {
      r7.setTimeout(() => {
        e4(), r7.dispose();
      }, l8), r7.addEventListener(t9, "transitionrun", (i6) => {
        i6.target === i6.currentTarget && r7.dispose();
      });
    });
    let a5 = n5.addEventListener(t9, "transitionend", (r7) => {
      r7.target === r7.currentTarget && (e4(), a5());
    });
  } else
    e4();
  return n5.add(() => e4()), n5.dispose;
}
function y4(t9, e4, n5, m5) {
  let o12 = n5 ? "enter" : "leave", u5 = o3(), p4 = m5 !== void 0 ? l7(m5) : () => {
  };
  o12 === "enter" && (t9.removeAttribute("hidden"), t9.style.display = "");
  let l8 = u2(o12, { enter: () => e4.enter, leave: () => e4.leave }), a5 = u2(o12, { enter: () => e4.enterTo, leave: () => e4.leaveTo }), r7 = u2(o12, { enter: () => e4.enterFrom, leave: () => e4.leaveFrom });
  return v2(t9, ...e4.enter, ...e4.enterTo, ...e4.enterFrom, ...e4.leave, ...e4.leaveFrom, ...e4.leaveTo, ...e4.entered), d7(t9, ...l8, ...r7), u5.nextFrame(() => {
    v2(t9, ...r7), d7(t9, ...a5), F4(t9, () => (v2(t9, ...l8), d7(t9, ...e4.entered), p4()));
  }), u5.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D4({ container: i6, direction: t9, classes: o12, onStart: s7, onStop: u5 }) {
  let a5 = f4(), c8 = p2(), r7 = s3(t9);
  l2(() => {
    let e4 = o3();
    c8.add(e4.dispose);
    let n5 = i6.current;
    if (n5 && r7.current !== "idle" && a5.current)
      return e4.dispose(), s7.current(r7.current), e4.add(y4(n5, o12.current, r7.current === "enter", () => {
        e4.dispose(), u5.current(r7.current);
      })), e4.dispose;
  }, [t9]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x5(t9 = "") {
  return t9.split(" ").filter((n5) => n5.trim().length > 1);
}
var I4 = (0, import_react22.createContext)(null);
I4.displayName = "TransitionContext";
var Ce = ((r7) => (r7.Visible = "visible", r7.Hidden = "hidden", r7))(Ce || {});
function Ee2() {
  let t9 = (0, import_react22.useContext)(I4);
  if (t9 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t9;
}
function be2() {
  let t9 = (0, import_react22.useContext)(_3);
  if (t9 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t9;
}
var _3 = (0, import_react22.createContext)(null);
_3.displayName = "NestingContext";
function M3(t9) {
  return "children" in t9 ? M3(t9.children) : t9.current.filter(({ el: n5 }) => n5.current !== null).filter(({ state: n5 }) => n5 === "visible").length > 0;
}
function re(t9, n5) {
  let r7 = s3(t9), o12 = (0, import_react22.useRef)([]), N5 = f4(), H5 = p2(), p4 = o5((s7, e4 = j.Hidden) => {
    let a5 = o12.current.findIndex(({ el: i6 }) => i6 === s7);
    a5 !== -1 && (u2(e4, { [j.Unmount]() {
      o12.current.splice(a5, 1);
    }, [j.Hidden]() {
      o12.current[a5].state = "hidden";
    } }), H5.microTask(() => {
      var i6;
      !M3(o12) && N5.current && ((i6 = r7.current) == null || i6.call(r7));
    }));
  }), P2 = o5((s7) => {
    let e4 = o12.current.find(({ el: a5 }) => a5 === s7);
    return e4 ? e4.state !== "visible" && (e4.state = "visible") : o12.current.push({ el: s7, state: "visible" }), () => p4(s7, j.Unmount);
  }), h4 = (0, import_react22.useRef)([]), v3 = (0, import_react22.useRef)(Promise.resolve()), T4 = (0, import_react22.useRef)({ enter: [], leave: [], idle: [] }), g4 = o5((s7, e4, a5) => {
    h4.current.splice(0), n5 && (n5.chains.current[e4] = n5.chains.current[e4].filter(([i6]) => i6 !== s7)), n5 == null || n5.chains.current[e4].push([s7, new Promise((i6) => {
      h4.current.push(i6);
    })]), n5 == null || n5.chains.current[e4].push([s7, new Promise((i6) => {
      Promise.all(T4.current[e4].map(([l8, R3]) => R3)).then(() => i6());
    })]), e4 === "enter" ? v3.current = v3.current.then(() => n5 == null ? void 0 : n5.wait.current).then(() => a5(e4)) : a5(e4);
  }), f6 = o5((s7, e4, a5) => {
    Promise.all(T4.current[e4].splice(0).map(([i6, l8]) => l8)).then(() => {
      var i6;
      (i6 = h4.current.shift()) == null || i6();
    }).then(() => a5(e4));
  });
  return (0, import_react22.useMemo)(() => ({ children: o12, register: P2, unregister: p4, onStart: g4, onStop: f6, wait: v3, chains: T4 }), [P2, p4, o12, g4, f6, T4, v3]);
}
function Se2() {
}
var xe2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie(t9) {
  var r7;
  let n5 = {};
  for (let o12 of xe2)
    n5[o12] = (r7 = t9[o12]) != null ? r7 : Se2;
  return n5;
}
function Pe2(t9) {
  let n5 = (0, import_react22.useRef)(ie(t9));
  return (0, import_react22.useEffect)(() => {
    n5.current = ie(t9);
  }, [t9]), n5;
}
var Re2 = "div";
var oe = S3.RenderStrategy;
function ye2(t9, n5) {
  let { beforeEnter: r7, afterEnter: o12, beforeLeave: N5, afterLeave: H5, enter: p4, enterFrom: P2, enterTo: h4, entered: v3, leave: T4, leaveFrom: g4, leaveTo: f6, ...s7 } = t9, e4 = (0, import_react22.useRef)(null), a5 = y3(e4, n5), i6 = s7.unmount ? j.Unmount : j.Hidden, { show: l8, appear: R3, initial: d8 } = Ee2(), [u5, U2] = (0, import_react22.useState)(l8 ? "visible" : "hidden"), K2 = be2(), { register: L2, unregister: w5 } = K2, j2 = (0, import_react22.useRef)(null);
  (0, import_react22.useEffect)(() => L2(e4), [L2, e4]), (0, import_react22.useEffect)(() => {
    if (i6 === j.Hidden && e4.current) {
      if (l8 && u5 !== "visible") {
        U2("visible");
        return;
      }
      return u2(u5, { ["hidden"]: () => w5(e4), ["visible"]: () => L2(e4) });
    }
  }, [u5, e4, L2, w5, l8, i6]);
  let k2 = s3({ enter: x5(p4), enterFrom: x5(P2), enterTo: x5(h4), entered: x5(v3), leave: x5(T4), leaveFrom: x5(g4), leaveTo: x5(f6) }), O4 = Pe2({ beforeEnter: r7, afterEnter: o12, beforeLeave: N5, afterLeave: H5 }), G2 = l3();
  (0, import_react22.useEffect)(() => {
    if (G2 && u5 === "visible" && e4.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e4, u5, G2]);
  let B2 = d8 && !R3, ae = (() => !G2 || B2 || j2.current === l8 ? "idle" : l8 ? "enter" : "leave")(), D5 = c6(0), le = o5((C3) => u2(C3, { enter: () => {
    D5.addFlag(d6.Opening), O4.current.beforeEnter();
  }, leave: () => {
    D5.addFlag(d6.Closing), O4.current.beforeLeave();
  }, idle: () => {
  } })), ue = o5((C3) => u2(C3, { enter: () => {
    D5.removeFlag(d6.Opening), O4.current.afterEnter();
  }, leave: () => {
    D5.removeFlag(d6.Closing), O4.current.afterLeave();
  }, idle: () => {
  } })), V = re(() => {
    U2("hidden"), w5(e4);
  }, K2);
  D4({ container: e4, classes: k2, direction: ae, onStart: s3((C3) => {
    V.onStart(e4, C3, le);
  }), onStop: s3((C3) => {
    V.onStop(e4, C3, ue), C3 === "leave" && !M3(V) && (U2("hidden"), w5(e4));
  }) }), (0, import_react22.useEffect)(() => {
    B2 && (i6 === j.Hidden ? j2.current = null : j2.current = l8);
  }, [l8, B2, u5]);
  let J = s7, Te2 = { ref: a5 };
  return R3 && l8 && d8 && (J = { ...J, className: e3(s7.className, ...k2.current.enter, ...k2.current.enterFrom) }), import_react22.default.createElement(_3.Provider, { value: V }, import_react22.default.createElement(c5, { value: u2(u5, { ["visible"]: d6.Open, ["hidden"]: d6.Closed }) | D5.flags }, X({ ourProps: Te2, theirProps: J, defaultTag: Re2, features: oe, visible: u5 === "visible", name: "Transition.Child" })));
}
function Ne(t9, n5) {
  let { show: r7, appear: o12 = false, unmount: N5, ...H5 } = t9, p4 = (0, import_react22.useRef)(null), P2 = y3(p4, n5);
  l3();
  let h4 = C2();
  if (r7 === void 0 && h4 !== null && (r7 = (h4 & d6.Open) === d6.Open), ![true, false].includes(r7))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, T4] = (0, import_react22.useState)(r7 ? "visible" : "hidden"), g4 = re(() => {
    T4("hidden");
  }), [f6, s7] = (0, import_react22.useState)(true), e4 = (0, import_react22.useRef)([r7]);
  l2(() => {
    f6 !== false && e4.current[e4.current.length - 1] !== r7 && (e4.current.push(r7), s7(false));
  }, [e4, r7]);
  let a5 = (0, import_react22.useMemo)(() => ({ show: r7, appear: o12, initial: f6 }), [r7, o12, f6]);
  (0, import_react22.useEffect)(() => {
    if (r7)
      T4("visible");
    else if (!M3(g4))
      T4("hidden");
    else {
      let d8 = p4.current;
      if (!d8)
        return;
      let u5 = d8.getBoundingClientRect();
      u5.x === 0 && u5.y === 0 && u5.width === 0 && u5.height === 0 && T4("hidden");
    }
  }, [r7, g4]);
  let i6 = { unmount: N5 }, l8 = o5(() => {
    var d8;
    f6 && s7(false), (d8 = t9.beforeEnter) == null || d8.call(t9);
  }), R3 = o5(() => {
    var d8;
    f6 && s7(false), (d8 = t9.beforeLeave) == null || d8.call(t9);
  });
  return import_react22.default.createElement(_3.Provider, { value: g4 }, import_react22.default.createElement(I4.Provider, { value: a5 }, X({ ourProps: { ...i6, as: import_react22.Fragment, children: import_react22.default.createElement(se, { ref: P2, ...i6, ...H5, beforeEnter: l8, beforeLeave: R3 }) }, theirProps: {}, defaultTag: import_react22.Fragment, features: oe, visible: v3 === "visible", name: "Transition" })));
}
function He(t9, n5) {
  let r7 = (0, import_react22.useContext)(I4) !== null, o12 = C2() !== null;
  return import_react22.default.createElement(import_react22.default.Fragment, null, !r7 && o12 ? import_react22.default.createElement(z3, { ref: n5, ...t9 }) : import_react22.default.createElement(se, { ref: n5, ...t9 }));
}
var z3 = D3(Ne);
var se = D3(ye2);
var De2 = D3(He);
var $e = Object.assign(z3, { Child: De2, Root: z3 });

// app/services/nostr/profile.ts
var import_react24 = __toESM(require_react());

// app/services/nostr/core.ts
var import_react23 = __toESM(require_react());

// app/services/nostr/utils.ts
var uniqBy = (arr, key) => {
  return Object.values(
    arr.reduce(
      (map, item) => ({
        ...map,
        [`${item[key]}`]: item
      }),
      {}
    )
  );
};

// app/services/nostr/core.ts
var NostrContext = (0, import_react23.createContext)({
  isLoading: true,
  connectedRelays: [],
  onConnect: () => null,
  onDisconnect: () => null,
  publish: () => null
});
function useNostr() {
  return (0, import_react23.useContext)(NostrContext);
}
function useNostrEvents({
  filter,
  enabled = true
}) {
  const {
    isLoading: isLoadingProvider,
    onConnect,
    debug,
    connectedRelays
  } = useNostr();
  const [isLoading, setIsLoading] = (0, import_react23.useState)(true);
  const [events, setEvents] = (0, import_react23.useState)([]);
  const [otherMeta, setOtherMeta] = (0, import_react23.useState)({});
  const metadataFetched = (0, import_react23.useRef)({});
  const [eventsLatest, setEventsLatest] = (0, import_react23.useState)([]);
  const [unsubscribe, setUnsubscribe] = (0, import_react23.useState)(() => {
    return;
  });
  let onEventCallback = null;
  let onSubscribeCallback = null;
  let onDoneCallback = null;
  const filterBase64 = typeof window !== "undefined" ? window.btoa(JSON.stringify(filter)) : null;
  const _unsubscribe = (sub, relay) => {
    return sub.unsub();
  };
  const subscribe = (0, import_react23.useCallback)((relay, filter2) => {
    const sub = relay.sub([filter2]);
    setIsLoading(true);
    const unsubscribeFunc = () => {
      _unsubscribe(sub, relay);
    };
    setUnsubscribe(() => unsubscribeFunc);
    sub.on("event", (event) => {
      onEventCallback == null ? void 0 : onEventCallback(event);
      setEvents((_events) => {
        return [event, ..._events];
      });
    });
    sub.on("event", (event) => {
      const pubkeysToFetch = events.filter((event2) => metadataFetched.current[event2.pubkey] !== true).map((event2) => event2.pubkey);
      pubkeysToFetch.forEach(
        (pubkey) => metadataFetched.current[pubkey] = true
      );
      const metadata = JSON.parse(event.content);
      setOtherMeta((cur) => ({
        ...cur,
        [event.pubkey]: metadata
      }));
    });
    sub.on("event", (event) => {
      onEventCallback == null ? void 0 : onEventCallback(event);
      setEventsLatest((_events) => {
        return [event, ..._events];
      });
    });
    sub.on("eose", () => {
      setIsLoading(false);
      onDoneCallback == null ? void 0 : onDoneCallback();
    });
    return sub;
  }, []);
  (0, import_react23.useEffect)(() => {
    if (!enabled)
      return;
    const relaySubs = connectedRelays.map((relay) => {
      const sub = subscribe(relay, filter);
      onSubscribeCallback == null ? void 0 : onSubscribeCallback(sub, relay);
      return {
        sub,
        relay
      };
    });
    return () => {
      relaySubs.forEach(({ sub, relay }) => {
        _unsubscribe(sub, relay);
      });
    };
  }, [connectedRelays, filterBase64, enabled]);
  const uniqEvents = events.length > 0 ? uniqBy(events, "id") : [];
  const sortedEvents = uniqEvents.sort((a5, b4) => b4.created_at - a5.created_at);
  return {
    isLoading: isLoading || isLoadingProvider,
    events: sortedEvents,
    eventsLatest: sortedEvents,
    otherMeta,
    onConnect,
    connectedRelays,
    unsubscribe,
    onSubscribe: (_onSubscribeCallback) => {
      if (_onSubscribeCallback) {
        onSubscribeCallback = _onSubscribeCallback;
      }
    },
    onEvent: (_onEventCallback) => {
      if (_onEventCallback) {
        onEventCallback = _onEventCallback;
      }
    },
    onDone: (_onDoneCallback) => {
      if (_onDoneCallback) {
        onDoneCallback = _onDoneCallback;
      }
    }
  };
}

// app/services/nostr/profile.ts
function useProfile({
  pubkey,
  enabled: _enabled = true
}) {
  const [profile, setProfile] = (0, import_react24.useState)();
  const [cache, setCache] = (0, import_react24.useState)({});
  const { onEvent, isLoading } = useNostrEvents({
    filter: {
      kinds: [0],
      authors: [pubkey]
    },
    enabled: _enabled
  });
  (0, import_react24.useEffect)(() => {
    if (cache[pubkey]) {
      setProfile(cache[pubkey]);
    } else {
      const cachedProfile = localStorage.getItem(pubkey);
      if (cachedProfile) {
        const cachedProfileJSON = JSON.parse(cachedProfile);
        setProfile(cachedProfileJSON);
        setCache((oldCache) => ({ ...oldCache, [pubkey]: cachedProfileJSON }));
      } else {
        onEvent((rawMetadata) => {
          try {
            const metadata = JSON.parse(rawMetadata.content);
            const metaPubkey = rawMetadata.pubkey;
            if (metadata && metaPubkey === pubkey) {
              setProfile(metadata);
              setCache((oldCache) => ({ ...oldCache, [pubkey]: metadata }));
              localStorage.setItem(metaPubkey, JSON.stringify(metadata));
            }
          } catch (err) {
            console.error(err, rawMetadata);
          }
        });
      }
    }
  }, [pubkey, onEvent, cache]);
  const npub = nip19_exports.npubEncode(pubkey);
  return {
    isLoading,
    data: profile ? {
      ...profile,
      npub
    } : void 0
  };
}

// app/components/modals/quote-relay.tsx
var import_react26 = __toESM(require_react());

// app/components/feed/quote-content.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Content({ content }) {
  function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const match = content.match(urlRegex);
  const imageUrl = match ? match[0] : "";
  const textWithLinks = content.replace(urlRegex, (url) => "");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-regular -mt-7 ml-[55px] max-h-[300px] min-h-[240px] w-[450px] overflow-y-auto break-words pr-3 font-Roboto text-sm text-c-lightgray transition duration-500 scrollbar-hide", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: textWithLinks } }, void 0, false, {
      fileName: "app/components/feed/quote-content.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "a",
      {
        href: imageUrl,
        className: "mt-5 text-c-lightgray underline underline-offset-8 visited:text-gray-400 hover:text-c-cyan",
        target: "_blank",
        rel: "noopener noreferrer",
        children: imageUrl
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/quote-content.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    ),
    isImage(imageUrl) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: imageUrl,
        alt: "image",
        className: "mt-2 flex w-max rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/quote-content.tsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ) : null
  ] }, void 0, true, {
    fileName: "app/components/feed/quote-content.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/modals/quote-relay.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Quote({ close, pubkey, content }) {
  const transition = useTransition();
  const isLoading = transition.state === "loading";
  const [displ, setDispl] = (0, import_react26.useState)(false);
  (0, import_react26.useEffect)(() => {
    isLoading ? setDispl(false) : setDispl(true);
  }, [isLoading, displ]);
  const { state } = useLocation();
  const { data: userData } = useProfile({
    pubkey
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0 flex items-center  justify-center bg-black bg-opacity-30 backdrop-blur-sm ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-h-[540px] min-h-[240px] w-[550px] rounded-lg bg-c-gray  px-5 py-2 font-Roboto text-xl text-c-lightgray ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-2 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-c-lightgray", children: "Quote Relay" }, void 0, false, {
        fileName: "app/components/modals/quote-relay.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "cursor-pointer", onClick: close, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconCircleX, {}, void 0, false, {
        fileName: "app/components/modals/quote-relay.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/modals/quote-relay.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/modals/quote-relay.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " mb-2 h-[60px] w-[520px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "form",
      {
        action: "#",
        className: " rounded-lg border border-black bg-c-shadegray",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "focus-within:ring-c-cyan overflow-hidden rounded-b-lg rounded-t-lg border border-transparent shadow-sm focus-within:border-c-cyan focus-within:ring-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "text", className: "sr-only" }, void 0, false, {
              fileName: "app/components/modals/quote-relay.tsx",
              lineNumber: 53,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "textarea",
              {
                name: "text",
                id: "text",
                className: "block h-[32px] w-full resize-none border-0 bg-c-brown px-2 py-1 text-c-lightgray focus:ring-0 sm:text-sm",
                defaultValue: ""
              },
              void 0,
              false,
              {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 54,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/modals/quote-relay.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-[28px] px-5 py-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-c-lightbrown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconAttached, { className: "mr-3" }, void 0, false, {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 64,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 63,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-5 text-c-lightbrown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconGIF, { className: "mr-3" }, void 0, false, {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 70,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 69,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-5 text-c-lightbrown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconSmile, { className: "mr-3 text-transparent" }, void 0, false, {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 73,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 72,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-5 text-c-lightbrown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconChart, { className: "mr-3" }, void 0, false, {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 76,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/modals/quote-relay.tsx",
                lineNumber: 75,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/modals/quote-relay.tsx",
              lineNumber: 62,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-c-lightbrown", children: "Aa" }, void 0, false, {
              fileName: "app/components/modals/quote-relay.tsx",
              lineNumber: 89,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/modals/quote-relay.tsx",
              lineNumber: 88,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/modals/quote-relay.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/modals/quote-relay.tsx",
        lineNumber: 48,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/modals/quote-relay.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/modals/quote-relay.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 flex w-full text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "", children: (userData == null ? void 0 : userData.picture) == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "img",
        {
          src: avatar(pubkey),
          alt: "",
          className: "ml-2 h-[35px]  w-[35px] rounded-md border  border-gray-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/modals/quote-relay.tsx",
          lineNumber: 98,
          columnNumber: 17
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "img",
        {
          src: userData == null ? void 0 : userData.picture,
          alt: "",
          className: "ml-2 h-[35px]  w-[35px] rounded-md border  border-gray-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/modals/quote-relay.tsx",
          lineNumber: 104,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/modals/quote-relay.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " ml-3 flex flex-col justify-start text-start text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-sm font-semibold", children: [
        " ",
        (userData == null ? void 0 : userData.name) ? userData == null ? void 0 : userData.name : mask(pubkey)
      ] }, void 0, true, {
        fileName: "app/components/modals/quote-relay.tsx",
        lineNumber: 112,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/modals/quote-relay.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/modals/quote-relay.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Content, { content }, void 0, false, {
      fileName: "app/components/modals/quote-relay.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/modals/quote-relay.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/modals/quote-relay.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/modals/quote-relay.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/modals/quote-relay.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// public/assets/images/icons/search.svg
var search_default = "/build/_assets/search-IBMRWJEH.svg";

// public/assets/images/sample/gemmy8.png
var gemmy8_default = "/build/_assets/gemmy8-N4WNO3WH.png";

// public/assets/images/sample/gemmy9.png
var gemmy9_default = "/build/_assets/gemmy9-KU5XLQNK.png";

// public/assets/images/sample/gemmy10.avif
var gemmy10_default = "/build/_assets/gemmy10-3VUYCLRX.avif";

// public/assets/images/sample/gemmy11.png
var gemmy11_default = "/build/_assets/gemmy11-VTSYESDS.png";

// public/assets/images/sample/gemmy12.avif
var gemmy12_default = "/build/_assets/gemmy12-QKMW5P7I.avif";

// public/assets/images/sample/gemmy13.png
var gemmy13_default = "/build/_assets/gemmy13-YB7ZBWH3.png";

// app/components/modals/send-in-chat.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var SendinChat = ({ close }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute inset-0 flex items-center  justify-center bg-black bg-opacity-30 backdrop-blur-sm ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-[460px] w-[320px] rounded-lg bg-c-gray px-3  py-2 text-xl text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: " font-regular mt-3 font-Roboto text-sm text-c-lightgray", children: "Send in Chat to:" }, void 0, false, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 26,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cursor-pointer", onClick: close, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconCircleX, { className: "cursor-pointer" }, void 0, false, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/modals/send-in-chat.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "form",
      {
        action: "search",
        className: "flex rounded-lg border border-c-shadergray pr-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "text",
              name: "",
              autoComplete: "on",
              "aria-label": "Search",
              placeholder: "",
              className: "fornt-regular h-[32px] w-[296px] rounded-md border-none bg-c-brown px-2 py-2 font-Roboto text-sm text-c-lightgray placeholder-gray-500"
            },
            void 0,
            false,
            {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 38,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: search_default, alt: "", className: "-ml-6 w-4" }, void 0, false, {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 34,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/modals/send-in-chat.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " h-[250px] w-[300px] overflow-y-auto px-2 py-2 transition duration-500 scrollbar-hide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "img",
          {
            src: gemmy8_default,
            alt: "",
            className: "h-[40px] w-[40px] rounded-full"
          },
          void 0,
          false,
          {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 51,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite", children: "Chat Name" }, void 0, false, {
          fileName: "app/components/modals/send-in-chat.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 50,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "img",
          {
            src: gemmy9_default,
            alt: "",
            className: "h-[40px] w-[40px] rounded-full"
          },
          void 0,
          false,
          {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 61,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite", children: "Chat Name" }, void 0, false, {
          fileName: "app/components/modals/send-in-chat.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "img",
          {
            src: gemmy10_default,
            alt: "",
            className: "h-[40px] w-[40px] rounded-full"
          },
          void 0,
          false,
          {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 71,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite", children: "Chat Name" }, void 0, false, {
          fileName: "app/components/modals/send-in-chat.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "img",
          {
            src: gemmy11_default,
            alt: "",
            className: "h-[40px] w-[40px] rounded-full"
          },
          void 0,
          false,
          {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 81,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite", children: "Chat Name" }, void 0, false, {
          fileName: "app/components/modals/send-in-chat.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "img",
          {
            src: gemmy12_default,
            alt: "",
            className: "h-[40px] w-[40px] rounded-full"
          },
          void 0,
          false,
          {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 92,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite", children: "Chat Name" }, void 0, false, {
          fileName: "app/components/modals/send-in-chat.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 91,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "img",
          {
            src: gemmy13_default,
            alt: "",
            className: "h-[40px] w-[40px] rounded-full"
          },
          void 0,
          false,
          {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 102,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite", children: "Folder Name" }, void 0, false, {
          fileName: "app/components/modals/send-in-chat.tsx",
          lineNumber: 107,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 101,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/modals/send-in-chat.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " mb-2 h-[60px] w-[520px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "form",
      {
        action: "#",
        className: " rounded-lg border border-black bg-c-shadegray",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "focus-within:ring-c-cyan overflow-hidden rounded-b-lg rounded-t-lg border border-transparent shadow-sm focus-within:border-c-cyan focus-within:ring-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "text", className: "sr-only" }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 119,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "textarea",
              {
                name: "text",
                id: "text",
                className: "block h-[32px] w-full resize border-0 bg-c-brown px-2 py-1 text-c-lightgray focus:ring-0 sm:text-sm",
                defaultValue: ""
              },
              void 0,
              false,
              {
                fileName: "app/components/modals/send-in-chat.tsx",
                lineNumber: 120,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 118,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-[28px] px-5 py-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "flex items-center font-bold text-c-gray", children: "B" }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 130,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 129,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-5 flex items-center text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconItalic, { className: "mr-3" }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 135,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 134,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-5 flex items-center text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconDollor, { className: "mr-3" }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 138,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 137,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-5 flex items-center text-black", children: "|" }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 140,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-5 text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconListUl, { className: "mr-3" }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 142,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 141,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-5 text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconListOl, { className: "mr-3" }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 145,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/modals/send-in-chat.tsx",
              lineNumber: 144,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 128,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/modals/send-in-chat.tsx",
            lineNumber: 127,
            columnNumber: 19
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/modals/send-in-chat.tsx",
        lineNumber: 114,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/modals/send-in-chat.tsx",
      lineNumber: 113,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/modals/send-in-chat.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "font-regular rounded-md border border-c-lighterbrown px-2  py-2 font-Roboto text-base text-c-lightergray ", children: "Send without comment" }, void 0, false, {
      fileName: "app/components/modals/send-in-chat.tsx",
      lineNumber: 153,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/modals/send-in-chat.tsx",
      lineNumber: 152,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/modals/send-in-chat.tsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/modals/send-in-chat.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/modals/send-in-chat.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/modals/send-in-chat.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};
var send_in_chat_default = SendinChat;

// app/components/feed/post-reply.tsx
var import_react27 = __toESM(require_react());
var import_moment = __toESM(require_moment());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function ReplyTextArea({ closed, keyId, pub }) {
  var _a, _b, _c;
  const [mes, setMessage] = (0, import_react27.useState)("");
  const { publish } = useNostr();
  const [close, setClose] = (0, import_react27.useState)(false);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const profile = useLoaderData();
  const userpubkey = (_a = profile == null ? void 0 : profile.user) == null ? void 0 : _a.publicKey;
  const pubkey = pub;
  const postToRelayAndDb = async () => {
    const message = mes;
    if (!message) {
      alert("No message provided!");
      return;
    }
    const event = {
      content: message,
      kind: 1,
      tags: [
        ["e", "reply", keyId],
        ["p", pub]
      ],
      created_at: (0, import_moment.default)().unix(),
      pubkey: userpubkey
    };
    event.id = getEventHash(event);
    const signatureOrEvent = await window.nostr.signEvent(event);
    switch (typeof signatureOrEvent) {
      case "string":
        event.sig = signatureOrEvent;
        break;
      case "object":
        event.sig = signatureOrEvent.sig;
        break;
      default:
        throw new Error("Failed to sign with Nostr extension.");
    }
    publish(event);
    setMessage("");
    Q.success("Reply sent!");
  };
  function atPost() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        onClick: postToRelayAndDb,
        className: "rounded-md bg-c-cyan px-2 py-1 font-Roboto text-c-whitee",
        children: "Send"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/post-reply.tsx",
        lineNumber: 77,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed/post-reply.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this);
  }
  const { data: userData } = useProfile({
    pubkey
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${close ? "h-130  " : "h-[60px] duration-300   "}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-2 flex  px-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: !((_b = profile == null ? void 0 : profile.user) == null ? void 0 : _b.avatar) ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: `https://robohash.org/${userpubkey}/?set=set3`,
        alt: "",
        className: "h-12 w-12 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/post-reply.tsx",
        lineNumber: 95,
        columnNumber: 15
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: (_c = profile == null ? void 0 : profile.user) == null ? void 0 : _c.avatar,
        alt: "",
        className: "h-12 w-12 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/post-reply.tsx",
        lineNumber: 101,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed/post-reply.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ml-3 flex justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " mb-2 w-full ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "p",
          {
            className: `ml-3 text-sm text-c-lightgray duration-300 ${!close && "scale-0"}`,
            children: [
              "Replying to",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-c-cyan", children: [
                "@",
                (userData == null ? void 0 : userData.name) ? userData == null ? void 0 : userData.name : mask(pubkey)
              ] }, void 0, true, {
                fileName: "app/components/feed/post-reply.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/feed/post-reply.tsx",
            lineNumber: 111,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "  flex min-h-[20px] justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "textarea",
            {
              placeholder: "Relay your reply",
              className: "max-h-[200px] min-h-[50px] w-full resize border-none bg-transparent font-Roboto text-sm text-c-lightbrown focus-within:ring-0",
              onChange: handleChange,
              value: mes,
              id: "message",
              name: "message",
              onClick: () => setClose(!close)
            },
            void 0,
            false,
            {
              fileName: "app/components/feed/post-reply.tsx",
              lineNumber: 122,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " mt-2 flex h-[30px] justify-end", children: atPost() }, void 0, false, {
            fileName: "app/components/feed/post-reply.tsx",
            lineNumber: 131,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/feed/post-reply.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/feed/post-reply.tsx",
        lineNumber: 110,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-[550px] " }, void 0, false, {
        fileName: "app/components/feed/post-reply.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/feed/post-reply.tsx",
        lineNumber: 136,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "div",
        {
          className: `text-centerduration-300 flex items-center justify-between ${!close && "scale-0"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-[28px] px-5 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " text-c-lightbrown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IconUploadImage, { className: "mr-3" }, void 0, false, {
            fileName: "app/components/feed/post-reply.tsx",
            lineNumber: 146,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/feed/post-reply.tsx",
            lineNumber: 145,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/feed/post-reply.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/feed/post-reply.tsx",
          lineNumber: 139,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/feed/post-reply.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/feed/post-reply.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/post-reply.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post-reply.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post-reply.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/components/feed/post-action.tsx
var import_moment2 = __toESM(require_moment());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function PostAction({
  keyId,
  content,
  user,
  tags,
  createdAt,
  liked = false,
  relayed = false,
  pub
}) {
  const [reply, setReply] = (0, import_react29.useState)(false);
  const [quote, setQuote] = (0, import_react29.useState)(false);
  const [sendto, setSendto] = (0, import_react29.useState)(false);
  const [heart, setHeart] = (0, import_react29.useState)(liked);
  const [doRelayed, setDoRelayed] = (0, import_react29.useState)(relayed);
  const { publish } = useNostr();
  const loggedInUser = useUser();
  function classNames2(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const pubkey = pub;
  const handleFavorite = async () => {
    const event = {
      content: "",
      kind: 1,
      tags: [
        ["e", "like", keyId],
        ["p", user.pubkey]
      ],
      created_at: (0, import_moment2.default)().unix(),
      pubkey: user.pubkey
    };
    event.id = getEventHash(event);
    let signatureOrEvent = await window.nostr.signEvent(event);
    switch (typeof signatureOrEvent) {
      case "string":
        event.sig = signatureOrEvent;
        break;
      case "object":
        event.sig = signatureOrEvent.sig;
        break;
      default:
        throw new Error("Failed to sign with Nostr extension.");
    }
    await createFavorite({
      eventId: keyId,
      author: user.pubkey,
      content,
      tags,
      createdAt
    });
    publish(event);
    Q.success("Liked!");
    setHeart(true);
  };
  const handleClicked = () => {
    setQuote(true);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "font-regular ml-[60px] mt-2 flex font-Roboto text-base text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it, { as: "div", className: " text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        it.Button,
        {
          className: "flex w-full items-center justify-center text-sm text-c-gray ",
          onClick: () => {
            setReply(true);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconReplyBlock, {}, void 0, false, {
            fileName: "app/components/feed/post-action.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 108,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 107,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "font-regular mt-2 flex font-Roboto text-base text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it, { as: "div", className: " text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it.Button, { className: "ml-6 flex w-full items-center justify-center text-sm text-c-gray", children: doRelayed ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconRelayed, {}, void 0, false, {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 124,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 123,
          columnNumber: 19
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconRelay, { className: "" }, void 0, false, {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 128,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 127,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          $e,
          {
            as: import_react29.Fragment,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative inline-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it.Items, { className: "absolute w-36 origin-top-right cursor-pointer divide-y divide-gray-100 rounded-md border border-c-shadergray bg-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "py-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  className: classNames2(
                    active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                    "group flex items-center px-4 py-2 text-sm"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconRelay, {}, void 0, false, {
                      fileName: "app/components/feed/post-action.tsx",
                      lineNumber: 154,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "ml-2", children: "Relay" }, void 0, false, {
                      fileName: "app/components/feed/post-action.tsx",
                      lineNumber: 155,
                      columnNumber: 29
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/feed/post-action.tsx",
                  lineNumber: 146,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/feed/post-action.tsx",
                lineNumber: 144,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  className: classNames2(
                    active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                    "group flex items-center px-4 py-2 text-sm"
                  ),
                  onClick: () => {
                    handleClicked();
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "svg",
                      {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "path",
                          {
                            d: "M11.0362 7.4381V7.43694L11.1155 7.31349C11.5149 6.69147 12.1054 6.21589 12.7983 5.95824C13.4912 5.70058 14.2489 5.67477 14.9577 5.88468C15.6665 6.09459 16.288 6.52888 16.7289 7.12228C17.1695 7.71538 17.4058 8.4354 17.4023 9.17423C17.4017 9.78588 17.237 10.3862 16.9254 10.9125C16.6135 11.4391 16.1659 11.8723 15.6294 12.1669C15.0929 12.4614 14.4872 12.6065 13.8755 12.5869C13.7244 12.5821 13.5743 12.5672 13.4262 12.5427C13.6169 12.8299 13.8522 13.124 14.1395 13.4213L11.0362 7.4381ZM11.0362 7.4381C10.759 7.8777 10.5357 8.39659 10.3964 8.97071C10.3598 8.30389 10.1282 7.66077 9.72812 7.12228C9.28729 6.52888 8.66578 6.09459 7.95699 5.88468C7.2482 5.67477 6.49042 5.70058 5.79756 5.95824C5.10469 6.21589 4.51418 6.69147 4.11475 7.31349L4.03548 7.43694V7.4381C2.90627 9.22878 2.67134 12.3351 5.3693 15.1311L5.36961 15.1314C5.59639 15.366 5.90707 15.5009 6.23331 15.5065C6.55956 15.512 6.87463 15.3877 7.10923 15.1609C7.34383 14.9341 7.47873 14.6235 7.48426 14.2972C7.48979 13.971 7.36549 13.6559 7.13872 13.4213C6.85141 13.124 6.61618 12.8299 6.42542 12.5427C6.57356 12.5672 6.72363 12.5821 6.87472 12.5869C7.48644 12.6065 8.09219 12.4614 8.62869 12.1669C9.16519 11.8723 9.61275 11.4391 9.92461 10.9125C10.0556 10.6913 10.1606 10.4571 10.2384 10.2145C10.213 11.741 10.786 13.4895 12.3701 15.1311L12.3704 15.1314C12.5971 15.366 12.9078 15.5009 13.2341 15.5065C13.5603 15.512 13.8754 15.3877 14.11 15.1609C14.3446 14.9341 14.4795 14.6235 14.485 14.2972C14.4905 13.971 14.3663 13.656 14.1395 13.4214L11.0362 7.4381ZM10.3513 9.17309L10.4016 9.17312C10.4016 9.17349 10.4016 9.17386 10.4016 9.17423C10.4016 9.17459 10.4016 9.17496 10.4015 9.17533L10.3509 9.17508C10.3511 9.17442 10.3512 9.17375 10.3513 9.17309ZM10.3513 9.17309L9.90156 9.17282L10.3513 9.17309ZM6.08571 11.9469C5.85227 11.8714 5.62826 11.7663 5.41933 11.6336C5.49812 11.8676 5.60027 12.1069 5.72897 12.3499L6.08571 11.9469Z",
                            fill: "#D1D5DB",
                            stroke: "#4B5563"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/feed/post-action.tsx",
                            lineNumber: 180,
                            columnNumber: 33
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/feed/post-action.tsx",
                        lineNumber: 173,
                        columnNumber: 31
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "ml-2", children: "Quote Relay" }, void 0, false, {
                      fileName: "app/components/feed/post-action.tsx",
                      lineNumber: 186,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/feed/post-action.tsx",
                    lineNumber: 172,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/feed/post-action.tsx",
                  lineNumber: 161,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/feed/post-action.tsx",
                lineNumber: 159,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/feed/post-action.tsx",
              lineNumber: 143,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/feed/post-action.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/feed/post-action.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/post-action.tsx",
            lineNumber: 132,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "font-regular ml-[60px] mt-2 flex font-Roboto text-base text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it, { as: "div", className: " text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        it.Button,
        {
          className: "flex w-full items-center justify-center text-sm  ",
          onClick: handleFavorite,
          children: heart ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconHeartFilled, {}, void 0, false, {
            fileName: "app/components/feed/post-action.tsx",
            lineNumber: 206,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/feed/post-action.tsx",
            lineNumber: 205,
            columnNumber: 21
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconHeart, { className: "" }, void 0, false, {
            fileName: "app/components/feed/post-action.tsx",
            lineNumber: 210,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/feed/post-action.tsx",
            lineNumber: 209,
            columnNumber: 21
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 200,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 199,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 197,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "font-regular  mt-2 flex font-Roboto text-base text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it, { as: "div", className: " text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it.Button, { className: "ml-6 flex w-full items-center justify-center text-sm text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconShares, {}, void 0, false, {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 220,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/feed/post-action.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          $e,
          {
            as: import_react29.Fragment,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative inline-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it.Items, { className: "absolute w-36 origin-top-right cursor-pointer divide-y divide-gray-100 rounded-md border border-c-shadergray bg-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "py-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  className: classNames2(
                    active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                    "group flex items-center px-4 py-2 text-sm"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "div",
                    {
                      className: "flex",
                      onClick: () => setSendto(true),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconRelay, {}, void 0, false, {
                          fileName: "app/components/feed/post-action.tsx",
                          lineNumber: 248,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "ml-2", children: "Send in Chat" }, void 0, false, {
                          fileName: "app/components/feed/post-action.tsx",
                          lineNumber: 249,
                          columnNumber: 31
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/feed/post-action.tsx",
                      lineNumber: 244,
                      columnNumber: 29
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/feed/post-action.tsx",
                  lineNumber: 236,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/feed/post-action.tsx",
                lineNumber: 234,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  className: classNames2(
                    active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                    "group flex items-center px-4 py-2 text-sm"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconLink, {}, void 0, false, {
                      fileName: "app/components/feed/post-action.tsx",
                      lineNumber: 264,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "ml-2", children: "Copy Link" }, void 0, false, {
                      fileName: "app/components/feed/post-action.tsx",
                      lineNumber: 265,
                      columnNumber: 29
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/feed/post-action.tsx",
                  lineNumber: 256,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/feed/post-action.tsx",
                lineNumber: 254,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/feed/post-action.tsx",
              lineNumber: 233,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/feed/post-action.tsx",
              lineNumber: 232,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/feed/post-action.tsx",
              lineNumber: 231,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/post-action.tsx",
            lineNumber: 222,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/feed/post-action.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/feed/post-action.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    reply && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      ReplyTextArea,
      {
        closed: () => setReply(false),
        keyId,
        pub: pubkey
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 278,
        columnNumber: 9
      },
      this
    ),
    quote && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      Quote,
      {
        close: () => setQuote(false),
        content,
        pubkey
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/post-action.tsx",
        lineNumber: 285,
        columnNumber: 9
      },
      this
    ),
    sendto && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(send_in_chat_default, { close: () => setSendto(false) }, void 0, false, {
      fileName: "app/components/feed/post-action.tsx",
      lineNumber: 291,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/post-action.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}

// app/components/feed/post-option.tsx
var import_react31 = __toESM(require_react());

// app/utils/note.ts
var showNoteLinkCopied = (eventId) => {
  navigator.clipboard.writeText(eventId);
  Q.success("Copied!", {
    position: Q.POSITION.TOP_CENTER
  });
};

// app/components/feed/post-option.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function PostOption({ event }) {
  const [hover, setHover] = (0, import_react31.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-7 flex justify-center rounded-lg bg-c-brown  px-4 text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: " show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(it, { as: "div", className: " relative text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-1 text-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(it.Button, { className: "flex w-full justify-center text-sm text-c-gray ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(IconThreeDot, { className: "w-6" }, void 0, false, {
      fileName: "app/components/feed/post-option.tsx",
      lineNumber: 26,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/feed/post-option.tsx",
      lineNumber: 25,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/feed/post-option.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      $e,
      {
        as: import_react31.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(it.Items, { className: "absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-c-shadergray bg-c-gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "py-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              className: classNames(
                active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                "group flex items-center px-4 py-2 text-sm"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(IconFollow, {}, void 0, false, {
                  fileName: "app/components/feed/post-option.tsx",
                  lineNumber: 50,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-2", children: "Follow user" }, void 0, false, {
                  fileName: "app/components/feed/post-option.tsx",
                  lineNumber: 51,
                  columnNumber: 25
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/feed/post-option.tsx",
              lineNumber: 42,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/feed/post-option.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              className: classNames(
                active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                "group flex items-center px-4 py-2 text-sm"
              ),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "div",
                {
                  className: "flex w-full items-center",
                  onMouseEnter: () => setHover("mute"),
                  onMouseLeave: () => setHover(""),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(IconBellx, {}, void 0, false, {
                      fileName: "app/components/feed/post-option.tsx",
                      lineNumber: 70,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-2", children: [
                      " ",
                      hover === "mute" ? "Coming Soon" : "Mute user's post"
                    ] }, void 0, true, {
                      fileName: "app/components/feed/post-option.tsx",
                      lineNumber: 71,
                      columnNumber: 27
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/feed/post-option.tsx",
                  lineNumber: 65,
                  columnNumber: 25
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/feed/post-option.tsx",
              lineNumber: 57,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/feed/post-option.tsx",
            lineNumber: 55,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              className: classNames(
                active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                "group flex items-center px-4 py-2 text-sm"
              ),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "div",
                {
                  className: "flex w-full items-center",
                  onMouseEnter: () => setHover("hide"),
                  onMouseLeave: () => setHover(""),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(IconEyex, {}, void 0, false, {
                      fileName: "app/components/feed/post-option.tsx",
                      lineNumber: 96,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-2", children: hover === "hide" ? "Coming Soon " : "Hide user's post" }, void 0, false, {
                      fileName: "app/components/feed/post-option.tsx",
                      lineNumber: 97,
                      columnNumber: 27
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/feed/post-option.tsx",
                  lineNumber: 91,
                  columnNumber: 25
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/feed/post-option.tsx",
              lineNumber: 83,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/feed/post-option.tsx",
            lineNumber: 81,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              onClick: () => showNoteLinkCopied(event.id),
              className: classNames(
                active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                "group flex items-center px-4 py-2 text-sm"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(IconLink, {}, void 0, false, {
                  fileName: "app/components/feed/post-option.tsx",
                  lineNumber: 117,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-2", children: " Copy link" }, void 0, false, {
                  fileName: "app/components/feed/post-option.tsx",
                  lineNumber: 118,
                  columnNumber: 25
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/feed/post-option.tsx",
              lineNumber: 108,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/feed/post-option.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              className: classNames(
                active ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray" : "text-c-lightgray",
                "group flex items-center px-4 py-2 text-sm"
              ),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "div",
                {
                  className: "flex w-full items-center",
                  onMouseEnter: () => setHover("report"),
                  onMouseLeave: () => setHover(""),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(IconReport, {}, void 0, false, {
                      fileName: "app/components/feed/post-option.tsx",
                      lineNumber: 137,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-2", children: [
                      " ",
                      hover === "report" ? "Coming Soon " : "Report Post "
                    ] }, void 0, true, {
                      fileName: "app/components/feed/post-option.tsx",
                      lineNumber: 138,
                      columnNumber: 27
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/feed/post-option.tsx",
                  lineNumber: 132,
                  columnNumber: 25
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/feed/post-option.tsx",
              lineNumber: 124,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/feed/post-option.tsx",
            lineNumber: 122,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/feed/post-option.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/feed/post-option.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/post-option.tsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/feed/post-option.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post-option.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post-option.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post-option.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/feed/content.tsx
var import_react_linkify = __toESM(require_dist2());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function Content2({ content }) {
  const isImage = (url) => /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const match = content.match(urlRegex);
  const imageUrl = match ? match[0] : "";
  const textWithLinks = content.replace(urlRegex, "");
  const handleError = (e4) => {
    const target = e4.target;
    target.src = "https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_60-1024.png";
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "font-regular -mt-7 ml-[70px] w-[580px] break-words pr-3 font-Roboto text-base text-c-lightgray", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_linkify.default, { children: textWithLinks }, void 0, false, {
      fileName: "app/components/feed/content.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    imageUrl && isImage(imageUrl) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: imageUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "img",
      {
        src: imageUrl,
        alt: "post",
        className: "mt-2 flex w-max rounded-lg",
        onError: handleError
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/content.tsx",
        lineNumber: 28,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed/content.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/content.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/components/avatar.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var AvatarImage = ({
  pubkey,
  userData,
  className
}) => {
  const defaultImage = avatar(pubkey);
  const handleError = (e4) => {
    const target = e4.target;
    if (target.src !== defaultImage) {
      target.src = defaultImage;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "img",
    {
      src: (userData == null ? void 0 : userData.picture) ? userData.picture : defaultImage,
      alt: "",
      className,
      onError: handleError
    },
    void 0,
    false,
    {
      fileName: "app/components/avatar.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
};
var avatar_default = AvatarImage;

// app/services/nostr/events/posts.ts
var usePostEvent = (postId) => {
  const relays = store_default((store) => store.relays);
  const { events: postEvents, eose: postEose } = useSubscribe({
    relays,
    filters: postId ? [{ ids: [postId] }] : [],
    options: { enabled: !!postId }
  });
  const isFetching = !postEose && !postEvents.length;
  const isPostsEmpty = postEose && !postEvents.length;
  const createdAt = postEvents.length ? new Date(postEvents[0].created_at * 1e3) : 0;
  const nip19NoteId = postEvents.length ? nip19_exports.noteEncode(postEvents[0].id) : "";
  return {
    postEvent: postEvents[0],
    postEose,
    isFetching,
    isPostsEmpty,
    createdAt,
    nip19NoteId
  };
};
var posts_default = usePostEvent;

// app/components/feed/post.tsx
var import_react34 = __toESM(require_react());
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function Post({ postId }) {
  const { postEvent, createdAt } = posts_default(postId);
  const { displayName, name, picture, about } = content_default(
    (postEvent == null ? void 0 : postEvent.pubkey) || ""
  );
  const [showModal, setShowModal] = (0, import_react34.useState)(false);
  if (!postEvent) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(PostLoader, {}, void 0, false, {
      fileName: "app/components/feed/post.tsx",
      lineNumber: 27,
      columnNumber: 12
    }, this);
  }
  const handleHover = () => {
    setShowModal(true);
  };
  const handleLeave = () => {
    setShowModal(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " w-4/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "show py-1 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-full py-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-2/3 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            Link,
            {
              to: `/p/${postEvent.pubkey}`,
              state: { othersPubkey: postEvent.pubkey },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                avatar_default,
                {
                  pubkey: postEvent.pubkey,
                  userData: { picture },
                  className: "h-12 w-14  rounded-md border border-gray-700"
                },
                void 0,
                false,
                {
                  fileName: "app/components/feed/post.tsx",
                  lineNumber: 49,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/feed/post.tsx",
                lineNumber: 48,
                columnNumber: 21
              }, this)
            },
            postEvent.pubkey,
            false,
            {
              fileName: "app/components/feed/post.tsx",
              lineNumber: 43,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " ml-3 flex  w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-5/6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                Link,
                {
                  to: `/p/${postEvent.pubkey}`,
                  state: { othersPubkey: postEvent.pubkey },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " flex flex-col", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                      "h1",
                      {
                        className: "ml-3 text-base font-bold text-c-lightgray hover:text-c-cyan",
                        onMouseEnter: handleHover,
                        onMouseLeave: handleLeave,
                        children: displayName != null ? displayName : mask(postEvent.pubkey)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/feed/post.tsx",
                        lineNumber: 64,
                        columnNumber: 27
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                      "div",
                      {
                        className: "relative inline-block ",
                        onMouseEnter: handleHover,
                        onMouseLeave: handleLeave,
                        children: showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " h-min-[100px] absolute w-[250px] rounded-lg border bg-c-gray py-4  shadow-lg", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " mt-1 flex px-2", children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                              avatar_default,
                              {
                                pubkey: postEvent.pubkey,
                                userData: { picture },
                                className: "h-12 w-14  rounded-md border border-gray-500"
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/feed/post.tsx",
                                lineNumber: 79,
                                columnNumber: 35
                              },
                              this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "-mt-7 ml-3", children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "ml-1 mt-7 text-sm text-c-whitee", children: displayName != null ? displayName : mask(postEvent.pubkey) }, void 0, false, {
                                fileName: "app/components/feed/post.tsx",
                                lineNumber: 85,
                                columnNumber: 37
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "ml-1 text-xs text-c-gray", children: [
                                "@",
                                name,
                                " "
                              ] }, void 0, true, {
                                fileName: "app/components/feed/post.tsx",
                                lineNumber: 88,
                                columnNumber: 37
                              }, this)
                            ] }, void 0, true, {
                              fileName: "app/components/feed/post.tsx",
                              lineNumber: 84,
                              columnNumber: 35
                            }, this)
                          ] }, void 0, true, {
                            fileName: "app/components/feed/post.tsx",
                            lineNumber: 78,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "w-full break-words px-4 font-Roboto text-sm text-c-lightgray", children: about }, void 0, false, {
                            fileName: "app/components/feed/post.tsx",
                            lineNumber: 94,
                            columnNumber: 35
                          }, this) }, void 0, false, {
                            fileName: "app/components/feed/post.tsx",
                            lineNumber: 93,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-4 flex items-center justify-between px-5 font-Roboto text-sm text-c-gray", children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: [
                              "Follower :",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "", children: "20" }, void 0, false, {
                                fileName: "app/components/feed/post.tsx",
                                lineNumber: 101,
                                columnNumber: 47
                              }, this)
                            ] }, void 0, true, {
                              fileName: "app/components/feed/post.tsx",
                              lineNumber: 100,
                              columnNumber: 35
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: [
                              "Following :",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "", children: "100" }, void 0, false, {
                                fileName: "app/components/feed/post.tsx",
                                lineNumber: 104,
                                columnNumber: 48
                              }, this)
                            ] }, void 0, true, {
                              fileName: "app/components/feed/post.tsx",
                              lineNumber: 103,
                              columnNumber: 35
                            }, this)
                          ] }, void 0, true, {
                            fileName: "app/components/feed/post.tsx",
                            lineNumber: 99,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                            Button,
                            {
                              size: "small",
                              color: "slate",
                              className: "ml-3 mt-3 px-5 text-black",
                              name: "_action",
                              value: "FOLLOW",
                              children: "Follow"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/feed/post.tsx",
                              lineNumber: 108,
                              columnNumber: 35
                            },
                            this
                          ) }, void 0, false, {
                            fileName: "app/components/feed/post.tsx",
                            lineNumber: 107,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/components/feed/post.tsx",
                          lineNumber: 77,
                          columnNumber: 31
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/feed/post.tsx",
                        lineNumber: 71,
                        columnNumber: 27
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/components/feed/post.tsx",
                    lineNumber: 63,
                    columnNumber: 25
                  }, this)
                },
                postEvent.pubkey,
                false,
                {
                  fileName: "app/components/feed/post.tsx",
                  lineNumber: 58,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "h2",
                {
                  className: displayName ? "ml-3 text-base text-c-lightgray  " : "hidden",
                  children: displayName ? null : mask(postEvent.pubkey)
                },
                void 0,
                false,
                {
                  fileName: "app/components/feed/post.tsx",
                  lineNumber: 123,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "p",
                {
                  className: displayName ? "ml-3 text-base text-c-gray" : "hidden",
                  children: [
                    "@",
                    name
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/feed/post.tsx",
                  lineNumber: 132,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/feed/post.tsx",
              lineNumber: 57,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mt-1 flex w-1/6 justify-end text-xs text-c-gray", children: (0, import_moment3.default)(
              import_moment3.default.unix(postEvent.created_at).format("MM/DD/YYYY h:mm A")
            ).fromNow(true) }, void 0, false, {
              fileName: "app/components/feed/post.tsx",
              lineNumber: 140,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/feed/post.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/feed/post.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "hidee w-1/3  cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(PostOption, {}, void 0, false, {
          fileName: "app/components/feed/post.tsx",
          lineNumber: 150,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/feed/post.tsx",
          lineNumber: 149,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/feed/post.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/feed/post.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Link,
        {
          to: `/p/thread/${postEvent.id}`,
          state: {
            author: postEvent.pubkey,
            content: postEvent.content,
            postId: postEvent.id
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Content2, { content: postEvent.content }, void 0, false, {
            fileName: "app/components/feed/post.tsx",
            lineNumber: 163,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/feed/post.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/feed/post.tsx",
          lineNumber: 154,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/feed/post.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      PostAction,
      {
        content: postEvent.content,
        user: {
          pubkey: postEvent.pubkey,
          name: mask(displayName != null ? displayName : postEvent.pubkey),
          image: ""
        },
        keyId: postEvent.pubkey,
        createdAt,
        tags: postEvent.tags,
        pub: postEvent.pubkey
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/post.tsx",
        lineNumber: 167,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/feed/post.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/components/feed/post-container.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var PostContainer = ({ key, children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex hover:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-4/5 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "show flex flex-row ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-c-white", children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-3 h-[1px] w-full bg-c-shadegray " }, void 0, false, {
      fileName: "app/components/feed/post-container.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/post-container.tsx",
    lineNumber: 11,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post-container.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/post-container.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, key, false, {
    fileName: "app/components/feed/post-container.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};

// app/components/feed/user-posts-list.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function Posts({ events }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col ", children: events.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PostContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Post, { postId: event.id }, void 0, false, {
    fileName: "app/components/feed/user-posts-list.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, event.id, false, {
    fileName: "app/components/feed/user-posts-list.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/feed/user-posts-list.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/layout/container.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function MainContainer({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex  justify-center", children }, void 0, false, {
    fileName: "app/components/layout/container.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
function TabContainer({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-[680px] rounded-t-md border border-c-gray bg-c-darkgray text-white ", children }, void 0, false, {
    fileName: "app/components/layout/container.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/services/nostr/profiles/contacts.ts
var import_react35 = __toESM(require_react());
var useProfileContacts = (profileAddress) => {
  const [latestContactEvent, setLatestContactEvent] = (0, import_react35.useState)(void 0);
  const [userRelays, setUserRelays] = (0, import_react35.useState)({});
  const profileHex = hex_default(profileAddress);
  const defaultRelays = store_default((store) => store.relays);
  const { events: contactEvents, eose: contactEose } = useSubscribe({
    relays: defaultRelays,
    filters: profileHex ? [{ authors: [profileHex], kinds: [3] }] : [],
    options: {
      enabled: !!profileHex,
      cacheRefresh: true,
      closeAfterEose: false
    }
  });
  const isFetchingContacts = !contactEose && !contactEvents.length;
  const isContactsEmpty = contactEose && !contactEvents.length;
  const latest = (0, import_react35.useMemo)(
    () => contactEvents == null ? void 0 : contactEvents.reduce((prev, curr) => {
      if (!prev)
        return curr;
      if (curr.created_at > prev.created_at)
        return curr;
      return prev;
    }, null),
    [contactEvents]
  );
  if (latest && (!latestContactEvent || latestContactEvent.created_at < latest.created_at)) {
    setLatestContactEvent(latest);
    try {
      setUserRelays(JSON.parse(latest.content || "{}"));
    } catch (e4) {
      console.error(e4);
    }
  }
  const defaultRelaysObj = (0, import_react35.useMemo)(
    () => defaultRelays.reduce((prev, curr) => {
      prev[curr] = { read: true, write: true };
      return prev;
    }, {}),
    [defaultRelays]
  );
  const relaysOrDefaults = Object.keys(userRelays).length ? userRelays : defaultRelaysObj;
  return {
    isFetchingContacts,
    isContactsEmpty,
    latestContactEvent,
    contactEose,
    relays: userRelays,
    relaysOrDefaults
  };
};
var contacts_default = useProfileContacts;

// app/components/feed/suggested-follows.tsx
var import_moment4 = __toESM(require_moment());
var import_session2 = __toESM(require_session());
var import_react37 = __toESM(require_react());
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function SuggestedFollows({ suggestedFollows }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: suggestedFollows.map((suggestion) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SuggestedProfiles, { pubkey: suggestion }, suggestion, false, {
      fileName: "app/components/feed/suggested-follows.tsx",
      lineNumber: 24,
      columnNumber: 16
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/feed/suggested-follows.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function SuggestedProfiles({ pubkey }) {
  const { publish } = useNostr();
  const { user } = useLoaderData();
  const userPubkey = user.publicKey;
  const [followButton, setFollowButton] = (0, import_react37.useState)("Follow");
  const { displayName, picture, name, about } = content_default(pubkey);
  const follow = async (e4) => {
    const followings = [];
    const tags = followings.map((following) => ["p", following]);
    tags.push(["p", pubkey]);
    const event = {
      content: "",
      kind: 3,
      created_at: (0, import_moment4.default)().unix(),
      pubkey: userPubkey,
      tags
    };
    event.id = getEventHash(event);
    const signatureOrEvent = await window.nostr.signEvent(event);
    switch (typeof signatureOrEvent) {
      case "string":
        event.sig = signatureOrEvent;
        break;
      case "object":
        event.sig = signatureOrEvent.sig;
        break;
      default:
        throw new Error("Failed to sign with Nostr extension.");
    }
    publish(event);
    setFollowButton("Followed");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "py-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      avatar_default,
      {
        pubkey,
        userData: { picture },
        className: "h-11 w-11 rounded-md border border-gray-500"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/suggested-follows.tsx",
        lineNumber: 71,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed/suggested-follows.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "ml-3 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: " flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "font-regular font-Roboto text-sm text-c-lightgray", children: [
          displayName,
          " @",
          name
        ] }, void 0, true, {
          fileName: "app/components/feed/suggested-follows.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            name: "follow",
            onClick: follow,
            className: "rounded-md bg-c-lightergray px-2 py-1 text-sm",
            children: followButton
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/suggested-follows.tsx",
            lineNumber: 82,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/feed/suggested-follows.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-sm text-c-lightgray", children: mask(pubkey) }, void 0, false, {
        fileName: "app/components/feed/suggested-follows.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1 w-[160px] text-xs text-c-lightgray", children: about }, void 0, false, {
        fileName: "app/components/feed/suggested-follows.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/feed/suggested-follows.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/suggested-follows.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/suggested-follows.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/feed/suggested-follows.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/components/feed/right-pane.tsx
var import_react39 = __toESM(require_react());
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function RightPane({ authors }) {
  const pubkey = authors[1];
  const [suggestions, setSuggestions] = (0, import_react39.useState)([]);
  const { latestContactEvent, contactEose } = contacts_default(pubkey);
  (0, import_react39.useEffect)(() => {
    var _a;
    if (latestContactEvent) {
      const newAuthorsList = ((_a = latestContactEvent.tags) == null ? void 0 : _a.filter((tag) => tag[0] === "p" && !authors.includes(tag[1])).map((tag) => tag[1])) || [];
      const uniqueAuthors = Array.from(new Set(newAuthorsList));
      setSuggestions(uniqueAuthors.slice(0, 10));
    }
  }, [latestContactEvent, pubkey, authors]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col", children: authors ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: " ml-1 h-[480px] w-[250px] rounded-md border border-c-gray bg-c-darkgray", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-3 h-[1px] w-[220px] bg-c-shadegray " }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ml-3 mt-2 font-Roboto text-c-whitee", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: " ", children: "Suggested Follows :" }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-3 h-[1px] w-[220px] bg-c-shadegray " }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-2 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "h-[380px] overflow-y-auto transition duration-500 scrollbar-hide", children: !contactEose || suggestions.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SuggestedLoader, {}, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SuggestedFollows, { suggestedFollows: suggestions }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Link, { to: "./suggested-user", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ml-4 mt-1 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "text-sm text-c-cyan", children: "SHOW MORE" }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 47,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/feed/right-pane.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/right-pane.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SuggestedLoader, {}, void 0, false, {
    fileName: "app/components/feed/right-pane.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/right-pane.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/components/layout/menu.tsx
var import_react43 = __toESM(require_react());

// app/components/search-modal.tsx
var import_react40 = __toESM(require_react());
var import_moment5 = __toESM(require_moment());
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function SearchModal({ query, close }) {
  const [convertedQuery, setConvertedQuery] = (0, import_react40.useState)("");
  (0, import_react40.useEffect)(() => {
    if (isValidHex(query)) {
      setConvertedQuery(query);
    } else {
      const bech32ConvertedQuery = convertBech32ToHex(query);
      if (bech32ConvertedQuery) {
        setConvertedQuery(bech32ConvertedQuery);
      }
    }
  }, [query]);
  function isValidHex(input) {
    const hexRegex = /^([0-9A-Fa-f]{2})+$/;
    return hexRegex.test(input);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SearchModalWrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        className: "flex cursor-pointer justify-end px-3 text-c-whitee",
        onClick: close,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(IconX, {}, void 0, false, {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/search-modal.tsx",
        lineNumber: 41,
        columnNumber: 7
      },
      this
    ),
    convertedQuery.length === 64 ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      SearchResult,
      {
        pubkey: convertedQuery,
        close,
        query
      },
      query,
      false,
      {
        fileName: "app/components/search-modal.tsx",
        lineNumber: 48,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SearchLoader, {}, void 0, false, {
      fileName: "app/components/search-modal.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/search-modal.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function RecentSearchModal({ close }) {
  const searches = [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SearchModalWrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        className: "flex cursor-pointer justify-end px-3 text-c-whitee",
        onClick: close,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(IconX, {}, void 0, false, {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/search-modal.tsx",
        lineNumber: 66,
        columnNumber: 7
      },
      this
    ),
    (searches == null ? void 0 : searches.length) === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SearchLoader, {}, void 0, false, {
      fileName: "app/components/search-modal.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) : searches == null ? void 0 : searches.map((search) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SearchResult, { pubkey: search, close }, search, false, {
      fileName: "app/components/search-modal.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/search-modal.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
function SearchResult({ pubkey, close }) {
  const navigate = useNavigate();
  const { data: userData } = useProfile({ pubkey });
  const { publish } = useNostr();
  const [followButton, setFollowButton] = (0, import_react40.useState)("Follow");
  const user = useUser();
  const [progress, setProgress] = (0, import_react40.useState)(0);
  const saveToRecent = async () => {
  };
  const follow = async () => {
    const event = {
      content: "",
      kind: 3,
      tags: [["p", pubkey]],
      created_at: (0, import_moment5.default)().unix(),
      pubkey: user.pubkey
    };
    event.id = getEventHash(event);
    const signatureOrEvent = await window.nostr.signEvent(event);
    switch (typeof signatureOrEvent) {
      case "string":
        event.sig = signatureOrEvent;
        break;
      case "object":
        event.sig = signatureOrEvent.sig;
        break;
      default:
        throw new Error("Failed to sign with Nostr extension.");
    }
    publish(event);
    setFollowButton("Followed");
  };
  const handleClick = () => {
    navigate(`/platform/feed/${pubkey}`, { state: { othersPubkey: pubkey } });
    saveToRecent();
    close();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      index_modern_default,
      {
        color: "#00AFAF",
        height: 6,
        progress,
        onLoaderFinished: () => setProgress(0)
      },
      void 0,
      false,
      {
        fileName: "app/components/search-modal.tsx",
        lineNumber: 130,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-full cursor-pointer", onClick: handleClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: " flex rounded-lg px-2 py-3 hover:bg-gray-800", children: [
      (userData == null ? void 0 : userData.picture) == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "img",
        {
          src: avatar(pubkey),
          alt: "",
          className: "ml-2 h-12  w-12 rounded-md border border-gray-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 139,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "img",
        {
          src: userData == null ? void 0 : userData.picture,
          alt: "",
          className: "ml-2 h-12  w-12 rounded-md border border-gray-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 145,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "ml-3 flex w-full flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: " flex items-center justify-between ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "font-regular font-Roboto text-sm text-c-lightgray", children: (userData == null ? void 0 : userData.name) ? userData == null ? void 0 : userData.name : mask(pubkey) }, void 0, false, {
            fileName: "app/components/search-modal.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "button",
            {
              name: "follow",
              value: followButton,
              className: "rounded-md bg-c-lightergray px-2 py-1 text-sm",
              onClick: (e4) => follow(),
              children: followButton
            },
            void 0,
            false,
            {
              fileName: "app/components/search-modal.tsx",
              lineNumber: 156,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-sm text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "ml-1 text-xs text-c-gray", children: mask(pubkey) }, void 0, false, {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "max-h-[100px] min-h-[50px] overflow-y-auto transition duration-500 scrollbar-hide ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "mt-1 text-xs text-c-lightgray", children: userData == null ? void 0 : userData.about }, void 0, false, {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/search-modal.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/search-modal.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/search-modal.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/search-modal.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/search-modal.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}
function SearchModalWrapper({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute max-h-[400px] min-h-[200px] w-[400px] rounded-lg border bg-c-gray py-4 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "h-[380px] overflow-y-auto transition duration-500 scrollbar-hide", children }, void 0, false, {
    fileName: "app/components/search-modal.tsx",
    lineNumber: 186,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/search-modal.tsx",
    lineNumber: 185,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/search-modal.tsx",
    lineNumber: 184,
    columnNumber: 5
  }, this);
}

// app/components/layout/menu.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function getSections() {
  const sections = [
    // {
    //   path: "/feed",
    //   name: "Feed",
    //   icon: IconFeed.name,
    //   children: [{ id: 2, name: "Others", pathname: "$eventpubkey" }],
    // },
    // {
    //   path: "/chat",
    //   name: "Chat",
    //   icon: IconChat.name,
    //   children: [
    //     { id: 1, name: "Config", pathname: "config" },
    //     { id: 2, name: "User", pathname: "@me" },
    //   ],
    // },
  ];
  return sections;
}
function Menu() {
  const location = useLocation();
  const renderIcon = (icon) => {
    const icons = {
      IconFeed: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconFeed, {}, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      IconPlanet: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconPlanet, {}, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 68,
        columnNumber: 19
      }, this),
      IconChat: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconChat, {}, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      IconBell: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconBell, {}, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    };
    const SelectedIcon = icons[icon];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mr-2 mt-1 flex", children: SelectedIcon }, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 74,
      columnNumber: 12
    }, this);
  };
  function classNames2(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { user } = useLoaderData();
  const { picture } = content_default(user == null ? void 0 : user.pubkey);
  const sections = getSections();
  const [searchPlaceholder, setSearchPlaceholder] = (0, import_react43.useState)(
    "Find user by nostr public key"
  );
  const [searchQuery, setSearchQuery] = (0, import_react43.useState)("");
  const [showSearch, setShowSearch] = (0, import_react43.useState)(false);
  const [searchModal, setSearchModal] = (0, import_react43.useState)("recent");
  const [ShowBell, setShowBellModal] = (0, import_react43.useState)(false);
  const [hover, setHover] = (0, import_react43.useState)("");
  const handleHover = () => {
    setShowBellModal(true);
  };
  const handleLeave = () => {
    setShowBellModal(false);
  };
  const handleSearch = (type, event) => {
    const query = event.target.value;
    setShowSearch(true);
    setSearchModal(type);
    setSearchQuery(query);
  };
  const searchBarRef = (0, import_react43.useRef)(null);
  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
  };
  (0, import_react43.useEffect)(() => {
    const handleClick = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowSearch(false);
        setSearchPlaceholder("Find user by nostr public key");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  const statusOptions = [
    { id: "online", label: "Online", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconOnline, {}, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 136,
      columnNumber: 44
    }, this) },
    { id: "idle", label: "Idle", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconIdle, {}, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 137,
      columnNumber: 40
    }, this) },
    { id: "dnd", label: "Do not disturb", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconDoNotDisturb, {}, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 138,
      columnNumber: 49
    }, this) },
    { id: "invisible", label: "Invisible", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconInvisible, {}, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 139,
      columnNumber: 50
    }, this) }
  ];
  const [selectedStatus, setSelectedStatus] = (0, import_react43.useState)(statusOptions[0]);
  function handleStatusChange(statusOption) {
    setSelectedStatus(statusOption);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "bg mb-2 flex justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "ml-[45px] mt-[16px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { src: gem_default, alt: "", width: "51", height: "51", className: "" }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 154,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "textcolor text-2xl font-bold", children: "GEMS" }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 159,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { ref: searchBarRef, className: "-mt-[11px] ml-5 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("form", { action: "", className: "mr-9 flex py-8 font-Roboto text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "input",
            {
              type: "text",
              onClick: (e4) => handleSearch("recent", e4),
              onChange: (e4) => handleSearch("current", e4),
              onFocus: () => setSearchPlaceholder(""),
              name: "search-input",
              autoComplete: "off",
              "aria-label": "Search",
              placeholder: searchPlaceholder,
              className: "fornt-Roboto mt-1 h-[35px] w-[330px] rounded-[4px] border-none bg-c-brown bg-transparent px-2 text-sm text-white placeholder-gray-500 ring-1 ring-gray-400 focus:ring-1 focus:ring-gray-500"
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/menu.tsx",
              lineNumber: 164,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { src: search_default, alt: "", className: "-ml-7 w-5" }, void 0, false, {
            fileName: "app/components/layout/menu.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/menu.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "absolute top-20", children: [
          showSearch && searchModal == "recent" ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            RecentSearchModal,
            {
              close: () => setShowSearch(false),
              pubkey: ""
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/menu.tsx",
              lineNumber: 179,
              columnNumber: 17
            },
            this
          ) : null,
          showSearch && searchModal == "current" ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            SearchModal,
            {
              query: searchQuery,
              close: () => setShowSearch(false),
              pubkey: ""
            },
            void 0,
            false,
            {
              fileName: "app/components/layout/menu.tsx",
              lineNumber: 185,
              columnNumber: 17
            },
            this
          ) : null
        ] }, void 0, true, {
          fileName: "app/components/layout/menu.tsx",
          lineNumber: 177,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "-ml-[300px] flex py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { className: "flex", children: sections.map(({ path, name, icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      NavLink,
      {
        to: path,
        className: ({ isActive }) => `trapezoids ml-10 mr-5 flex px-9 text-c-gray ${isActive ? "trapezoid ml-10 mr-5 flex px-9 text-c-gray" : ""}`,
        isActive: () => location.pathname === path,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "item w-[30px] cursor-pointer py-1", children: renderIcon(icon) }, void 0, false, {
            fileName: "app/components/layout/menu.tsx",
            lineNumber: 209,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col" }, void 0, false, {
            fileName: "app/components/layout/menu.tsx",
            lineNumber: 212,
            columnNumber: 20
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 198,
        columnNumber: 17
      },
      this
    ) }, path, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 197,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 195,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mr-7 mt-4 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it, { as: "div", className: "relative inline-block text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Button, { className: "inline-flex w-full justify-center text-sm text-c-dirtwhite  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        avatar_default,
        {
          pubkey: user == null ? void 0 : user.pubkey,
          userData: { picture },
          className: " mr-3 w-12 cursor-pointer rounded-full"
        },
        void 0,
        false,
        {
          fileName: "app/components/layout/menu.tsx",
          lineNumber: 242,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 241,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 240,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/layout/menu.tsx",
        lineNumber: 239,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        $e,
        {
          as: import_react43.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Items, { className: "absolute right-7 h-[220px] rounded-md  border border-c-gray bg-c-gray ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it, { as: "div", className: "inline-block text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Button, { className: " w-[220px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "div",
                {
                  className: classNames2(
                    active ? "bg-c-graylight text-c-lightgray" : "group flex items-center text-c-lightgray",
                    "group flex cursor-pointer items-center px-4 py-2 text-sm"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center", children: [
                    selectedStatus.icon,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "ml-2 cursor-pointer text-sm text-c-lightgray", children: selectedStatus.label }, void 0, false, {
                      fileName: "app/components/layout/menu.tsx",
                      lineNumber: 275,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/layout/menu.tsx",
                    lineNumber: 273,
                    columnNumber: 31
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/layout/menu.tsx",
                  lineNumber: 265,
                  columnNumber: 29
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/layout/menu.tsx",
                lineNumber: 263,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                $e,
                {
                  as: import_react43.Fragment,
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Items, { className: "absolute  h-[150px] w-[150px]  rounded-md border border-c-shadergray bg-c-gray", children: statusOptions.map((statusOption) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    "div",
                    {
                      onClick: () => handleStatusChange(statusOption),
                      className: classNames2(
                        active ? "bg-c-graylight text-c-lightgray" : "group flex items-center text-c-lightgray",
                        "group flex cursor-pointer items-center px-4 py-2 text-sm"
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center", children: [
                        statusOption.icon,
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "ml-2 cursor-pointer text-sm text-c-lightgray", children: statusOption.label }, void 0, false, {
                          fileName: "app/components/layout/menu.tsx",
                          lineNumber: 308,
                          columnNumber: 39
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/layout/menu.tsx",
                        lineNumber: 306,
                        columnNumber: 37
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/layout/menu.tsx",
                      lineNumber: 295,
                      columnNumber: 35
                    },
                    this
                  ) }, statusOption.id, false, {
                    fileName: "app/components/layout/menu.tsx",
                    lineNumber: 293,
                    columnNumber: 31
                  }, this)) }, void 0, false, {
                    fileName: "app/components/layout/menu.tsx",
                    lineNumber: 291,
                    columnNumber: 27
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/layout/menu.tsx",
                  lineNumber: 282,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/layout/menu.tsx",
              lineNumber: 262,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/layout/menu.tsx",
              lineNumber: 261,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/layout/menu.tsx",
              lineNumber: 260,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "border-y border-c-shadergray py-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Link, { to: "/profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "div",
                {
                  className: classNames2(
                    active ? "bg-c-graylight text-c-lightgray" : " flex items-center text-c-lightgray",
                    "group flex items-center px-4 py-2 text-sm"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: " flex cursor-pointer items-center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconUserSetting, {}, void 0, false, {
                      fileName: "app/components/layout/menu.tsx",
                      lineNumber: 334,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "ml-1 mt-1 text-sm text-c-lightgray", children: "Profile" }, void 0, false, {
                      fileName: "app/components/layout/menu.tsx",
                      lineNumber: 335,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/layout/menu.tsx",
                    lineNumber: 333,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/layout/menu.tsx",
                  lineNumber: 325,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/layout/menu.tsx",
                lineNumber: 323,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/layout/menu.tsx",
                lineNumber: 322,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "div",
                {
                  className: classNames2(
                    active ? "bg-c-graylight text-c-lightgray" : " flex items-center text-c-lightgray",
                    "group flex items-center px-4 py-2 text-sm"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    "div",
                    {
                      className: " flex w-full cursor-pointer items-center",
                      onMouseEnter: () => setHover("wallet"),
                      onMouseLeave: () => setHover(""),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconSmallWallet, {}, void 0, false, {
                          fileName: "app/components/layout/menu.tsx",
                          lineNumber: 358,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "ml-1 mt-1 text-sm text-c-lightgray", children: hover === "wallet" ? "Coming Soon " : "Wallet" }, void 0, false, {
                          fileName: "app/components/layout/menu.tsx",
                          lineNumber: 359,
                          columnNumber: 29
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/layout/menu.tsx",
                      lineNumber: 353,
                      columnNumber: 27
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/layout/menu.tsx",
                  lineNumber: 345,
                  columnNumber: 25
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/layout/menu.tsx",
                lineNumber: 343,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "div",
                {
                  className: classNames2(
                    active ? "bg-c-graylight text-c-lightgray" : " flex items-center text-c-lightgray",
                    "group flex items-center px-4 py-2 text-sm"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    "div",
                    {
                      className: " flex w-full items-center",
                      onMouseEnter: () => setHover("privacy"),
                      onMouseLeave: () => setHover(""),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IconSetting, {}, void 0, false, {
                          fileName: "app/components/layout/menu.tsx",
                          lineNumber: 381,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "ml-2 text-sm text-c-lightgray", children: hover === "privacy" ? "Coming Soon " : "Privacy & Safety" }, void 0, false, {
                          fileName: "app/components/layout/menu.tsx",
                          lineNumber: 382,
                          columnNumber: 29
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/layout/menu.tsx",
                      lineNumber: 376,
                      columnNumber: 27
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/layout/menu.tsx",
                  lineNumber: 368,
                  columnNumber: 25
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/layout/menu.tsx",
                lineNumber: 366,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/layout/menu.tsx",
              lineNumber: 321,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              Form,
              {
                action: "/logout",
                method: "post",
                className: "rounded-b-md hover:bg-c-graylight",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    className: "py-3 text-c-lightgray",
                    onClick: clearStorage,
                    children: "Logout"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/layout/menu.tsx",
                    lineNumber: 398,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/layout/menu.tsx",
                  lineNumber: 397,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/layout/menu.tsx",
                lineNumber: 392,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/layout/menu.tsx",
            lineNumber: 259,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/layout/menu.tsx",
          lineNumber: 250,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 238,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 237,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layout/menu.tsx",
      lineNumber: 236,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/menu.tsx",
    lineNumber: 150,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/menu.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}

export {
  require_moment,
  Q,
  mask,
  copyPubkey,
  useNostr,
  avatar_default,
  FeedLoader,
  PostButtonLoader,
  Posts,
  MainContainer,
  TabContainer,
  contacts_default,
  RightPane,
  Menu
};
/*! Bundled license information:

moment/moment.js:
  (*! moment.js *)
  (*! version : 2.29.4 *)
  (*! authors : Tim Wood, Iskren Chernev, Moment.js contributors *)
  (*! license : MIT *)
  (*! momentjs.com *)
*/
//# sourceMappingURL=/build/_shared/chunk-TBTM2GPZ.js.map
