/**
 * @id5io/id5-api.js
 * @version v1.0.22
 * @link https://id5.io/
 * @license Apache-2.0
 */
!(function (n) {
    var i = {};
    function r(e) {
      if (i[e]) return i[e].exports;
      var t = (i[e] = { i: e, l: !1, exports: {} });
      return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
    }
    (r.m = n),
      (r.c = i),
      (r.d = function (e, t, n) {
        r.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
          });
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 8));
  })([
    function (e, t, n) {
      "use strict";
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                i = arguments[t];
              for (n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      (t.b = function (e, t) {
        var n = !0;
        return (
          k(e, function (e) {
            return (n = n && t(e));
          }),
          n
        );
      }),
        (t.s = b),
        (t.t = function (e) {
          for (
            var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          y(console.warn, e, "WARNING", n);
        }),
        (t.r = m),
        (t.w = function (e) {
          g = !!e;
        }),
        (t.m = I),
        (t.n = function () {
          return p;
        }),
        (t.h = C),
        (t.l = _),
        (t.q = S),
        (t.i = w),
        (t.o = function (e) {
          return C(e, o);
        }),
        (t.p = function (e) {
          return C(e, c);
        }),
        (t.j = function (e) {
          return C(e, d);
        }),
        (t.k = function (e) {
          return void 0 !== e;
        }),
        (t.g = function (e) {
          e = window.document.cookie.match(
            "(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)"
          );
          return e ? decodeURIComponent(e[2]) : null;
        }),
        (t.v = function (e, t, n) {
          document.cookie = ""
            .concat(e, "=")
            .concat(encodeURIComponent(t))
            .concat("" !== n ? "; expires=".concat(n) : "", "; path=/");
        }),
        (t.a = function (e, t, n) {
          var i,
            r =
              3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
          try {
            var a = r.method || (n ? "POST" : "GET");
            document.createElement("a").href = e;
            var o,
              c =
                "object" === l(t) && null !== t
                  ? t
                  : {
                      success: function () {
                        b("ajax", "xhr success");
                      },
                      error: function (e) {
                        m("ajax", "xhr error", null, e);
                      }
                    };
            "function" == typeof t && (c.success = t),
              ((i = new window.XMLHttpRequest()).onreadystatechange = function () {
                var e;
                i.readyState === j &&
                  ((200 <= (e = i.status) && e < 300) || 304 === e
                    ? c.success(i.responseText, i)
                    : c.error(i.statusText, i));
              }),
              (i.ontimeout = function () {
                m("ajax", "xhr timeout after ", i.timeout, "ms");
              }),
              "GET" === a &&
                n &&
                (s(
                  (o = (function (e, t) {
                    var n = document.createElement("a");
                    t && "noDecodeWholeURL" in t && t.noDecodeWholeURL
                      ? (n.href = e)
                      : (n.href = decodeURIComponent(e));
                    t =
                      t && "decodeSearchAsString" in t && t.decodeSearchAsString;
                    return {
                      href: n.href,
                      protocol: (n.protocol || "").replace(/:$/, ""),
                      hostname: n.hostname,
                      port: +n.port,
                      pathname: n.pathname.replace(/^(?!\/)/, "/"),
                      search: t
                        ? n.search
                        : (function (e) {
                            return e
                              ? e
                                  .replace(/^\?/, "")
                                  .split("&")
                                  .reduce(function (e, t) {
                                    var n = t.split("="),
                                      n =
                                        ((t = 2),
                                        (function (e) {
                                          if (Array.isArray(e)) return e;
                                        })((n = n)) ||
                                          (function (e, t) {
                                            var n =
                                              e &&
                                              (("undefined" != typeof Symbol &&
                                                e[Symbol.iterator]) ||
                                                e["@@iterator"]);
                                            if (null != n) {
                                              var i,
                                                r,
                                                a = [],
                                                o = !0,
                                                c = !1;
                                              try {
                                                for (
                                                  n = n.call(e);
                                                  !(o = (i = n.next()).done) &&
                                                  (a.push(i.value),
                                                  !t || a.length !== t);
                                                  o = !0
                                                );
                                              } catch (e) {
                                                (c = !0), (r = e);
                                              } finally {
                                                try {
                                                  o ||
                                                    null == n.return ||
                                                    n.return();
                                                } finally {
                                                  if (c) throw r;
                                                }
                                              }
                                              return a;
                                            }
                                          })(n, t) ||
                                          (function (e, t) {
                                            if (e) {
                                              if ("string" == typeof e)
                                                return u(e, t);
                                              var n = Object.prototype.toString
                                                .call(e)
                                                .slice(8, -1);
                                              return "Map" ===
                                                (n =
                                                  "Object" === n && e.constructor
                                                    ? e.constructor.name
                                                    : n) || "Set" === n
                                                ? Array.from(e)
                                                : "Arguments" === n ||
                                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                    n
                                                  )
                                                ? u(e, t)
                                                : void 0;
                                            }
                                          })(n, t) ||
                                          (function () {
                                            throw new TypeError(
                                              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                            );
                                          })()),
                                      t = n[0],
                                      n = n[1];
                                    return (
                                      /\[\]$/.test(t)
                                        ? ((e[(t = t.replace("[]", ""))] =
                                            e[t] || []),
                                          e[t].push(n))
                                        : (e[t] = n || ""),
                                      e
                                    );
                                  }, {})
                              : {};
                          })(n.search || ""),
                      hash: (n.hash || "").replace(/^#/, ""),
                      host: n.host || window.location.host
                    };
                  })(e, r)).search,
                  n
                ),
                (e = (function (e) {
                  return (
                    (e.protocol || "http") +
                    "://" +
                    (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) +
                    (e.pathname || "") +
                    (e.search
                      ? "?".concat(
                          (function (e) {
                            return Object.keys(e)
                              .map(function (t) {
                                return Array.isArray(e[t])
                                  ? e[t]
                                      .map(function (e) {
                                        return "".concat(t, "[]=").concat(e);
                                      })
                                      .join("&")
                                  : "".concat(t, "=").concat(e[t]);
                              })
                              .join("&");
                          })(e.search || "")
                        )
                      : "") +
                    (e.hash ? "#".concat(e.hash) : "")
                  );
                })(o))),
              i.open(a, e, !0),
              r.withCredentials && (i.withCredentials = !0),
              k(r.customHeaders, function (e, t) {
                i.setRequestHeader(t, e);
              }),
              r.preflight &&
                i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              i.setRequestHeader("Content-Type", r.contentType || "text/plain"),
              "POST" === a && n ? i.send(n) : i.send();
          } catch (e) {
            m("ajax", "xhr construction", e);
          }
        }),
        (t.d = function (e, t, n) {
          "loading" !== document.readyState
            ? D(e, t, n)
            : document.addEventListener("DOMContentLoaded", function () {
                D(e, t, n);
              });
        }),
        (t.c = function (e) {
          for (
            var t,
              n =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i = function (e, t) {
                if (_(Math.imul)) return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return 4290772992 & e && (n += ((4290772992 & e) * t) | 0), 0 | n;
              },
              r = 3735928559 ^ n,
              a = 1103547991 ^ n,
              o = 0;
            o < e.length;
            o++
          )
            (t = e.charCodeAt(o)),
              (r = i(r ^ t, 2654435761)),
              (a = i(a ^ t, 1597334677));
          return (
            (r = i(r ^ (r >>> 16), 2246822507) ^ i(a ^ (a >>> 13), 3266489909)),
            (
              4294967296 *
                (2097151 &
                  (a =
                    i(a ^ (a >>> 16), 2246822507) ^
                    i(r ^ (r >>> 13), 3266489909))) +
              (r >>> 0)
            ).toString()
          );
        }),
        (t.f = function (e) {
          var t = /[()-.:;=?_/]/g;
          w(e.brands) &&
            (e.brands = T(e.brands, function (e) {
              return S(e.brand) && e.brand.search(t) < 0;
            }));
          w(e.fullVersionList) &&
            (e.fullVersionList = T(e.fullVersionList, function (e) {
              return S(e.brand) && e.brand.search(t) < 0;
            }));
          return e;
        }),
        (t.e = function (e, t, n, i, r) {
          for (t = t.split ? t.split(".") : t, i = 0; i < t.length; i++)
            e = e ? e[t[i]] : r;
          return e === r ? n : e;
        }),
        (t.u = function (e) {
          var t = Object.keys(e),
            n = t.length,
            i = new Array(n);
          for (; n--; ) i[n] = [t[n], e[t[n]]];
          return i;
        });
      var i = "Array",
        r = "String",
        a = "Function",
        o = "Number",
        c = "Object",
        d = "Boolean",
        f = Object.prototype.toString,
        h = "TRUE" === O("id5_debug").toUpperCase(),
        p = "TRACE" === O("id5_debug").toUpperCase(),
        v = Boolean(window.console),
        g = !1;
      function b(e) {
        for (
          var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        y(console.info, e, "INFO", n);
      }
      function m(e) {
        for (
          var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        y(console.error, e, "ERROR", n);
      }
      function y(e, t, n, i) {
        I() &&
          v &&
          e &&
          e.apply(
            console,
            [
              "%cID5 - #".concat(t),
              "color: #fff; background: #1c307e; padding: 1px 4px; border-radius: 3px;",
              n
            ].concat(i)
          );
      }
      function I() {
        return h || p || g;
      }
      function O(e) {
        e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
        return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "));
      }
      function C(e, t) {
        return f.call(e) === "[object " + t + "]";
      }
      function _(e) {
        return C(e, a);
      }
      function S(e) {
        return C(e, r);
      }
      function w(e) {
        return C(e, i);
      }
      function k(e, t) {
        if (
          !(function (e) {
            if (!e) return 1;
            if (w(e) || S(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return;
            return 1;
          })(e)
        ) {
          if (_(e.forEach)) return e.forEach(t, this);
          var n = 0,
            i = e.length;
          if (0 < i) for (; n < i; n++) t(e[n], n, e);
          else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
        }
      }
      var j = 4;
      function D(e, t, n) {
        var i = new Image();
        (i.src = e),
          _(t) && t(),
          _(n) && (i.complete ? n() : i.addEventListener("load", n));
      }
      function T(e, t) {
        var n = [];
        return (
          k(e, function (e) {
            t(e) && n.push(e);
          }),
          n
        );
      }
    },
    function (e, t) {
      e.exports = {
        STORAGE_CONFIG: {
          ID5: { name: "id5id", expiresDays: 90 },
          LAST: { name: "id5id_last", expiresDays: 90 },
          CONSENT_DATA: { name: "id5id_cached_consent_data", expiresDays: 30 },
          PD: { name: "id5id_cached_pd", expiresDays: 30 },
          SEGMENTS: { name: "id5id_cached_segments", expiresDays: 30 },
          PRIVACY: { name: "id5id_privacy", expiresDays: 30 },
          LIVE_INTENT: { name: "id5li", expiresDays: 90 }
        },
        LEGACY_COOKIE_NAMES: ["id5.1st", "id5id.1st"],
        PRIVACY: { JURISDICTIONS: { gdpr: !0, ccpa: !1, lgpd: !0, other: !1 } },
        ID5_EIDS_SOURCE: "id5-sync.com",
        LIVE_INTENT_POLL_INTERVAL_MS: 500
      };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      }),
        n.d(t, "b", function () {
          return u;
        });
      var d = n(0),
        t = n(1),
        i = n.n(t),
        r = (n(3), ["vendorData", "ccpaString"]);
      function a() {
        return (a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                i = arguments[t];
              for (n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), 0 <= t.indexOf(n) || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols)
          for (var r = Object.getOwnPropertySymbols(e), a = 0; a < r.length; a++)
            (n = r[a]),
              0 <= t.indexOf(n) ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        return i;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function l(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var h = {
          tcfv1: {
            objName: "__cmpCall",
            objKeys: ["command", "parameter"],
            returnObjName: "__cmpReturn"
          },
          tcfv2: {
            objName: "__tcfapiCall",
            objKeys: ["command", "version"],
            returnObjName: "__tcfapiReturn"
          },
          uspv1: {
            objName: "__uspapiCall",
            objKeys: ["command", "version"],
            returnObjName: "__uspapiReturn"
          }
        },
        p = Object.freeze({
          NONE: "none",
          TCF_V1: "TCFv1",
          TCF_V2: "TCFv2",
          USP_V1: "USPv1",
          ID5_ALLOWED_VENDORS: "ID5"
        }),
        v = Object.freeze({
          FORCE_ALLOWED_BY_CONFIG: "force_allowed_by_config",
          ID5_CONSENT: "id5_consent",
          PROVISIONAL: "provisional",
          JURISDICTION: "jurisdiction",
          CONSENT_API: "consent_api"
        }),
        g = (function () {
          function i(e, t, n) {
            c(this, i),
              f(this, "allowed", !1),
              f(this, "grantType", v.NONE),
              f(this, "api", p.NONE),
              (this.allowed = e),
              (this.grantType = t),
              (this.api = n);
          }
          return (
            l(i, [
              {
                key: "isDefinitivelyAllowed",
                value: function () {
                  return this.allowed && this.grantType !== v.PROVISIONAL;
                }
              }
            ]),
            i
          );
        })(),
        b = (function () {
          function e() {
            c(this, e),
              f(this, "api", p.NONE),
              f(this, "consentString", void 0),
              f(this, "gdprApplies", !1),
              f(this, "vendorData", {}),
              f(this, "allowedVendors", void 0),
              f(this, "hasCcpaString", !1),
              f(this, "ccpaString", "");
          }
          return (
            l(e, [
              {
                key: "localStorageGrant",
                value: function () {
                  return new g(this.isGranted(), v.CONSENT_API, this.api);
                }
              },
              {
                key: "isGranted",
                value: function () {
                  switch (this.api) {
                    case p.NONE:
                      return !0;
                    case p.TCF_V1:
                      return (
                        !this.gdprApplies ||
                        !0 === Object(d.e)(this, "vendorData.purposeConsents.1")
                      );
                    case p.TCF_V2:
                      return (
                        !this.gdprApplies ||
                        !0 === Object(d.e)(this, "vendorData.purpose.consents.1")
                      );
                    case p.ID5_ALLOWED_VENDORS:
                      return this.allowedVendors.includes("131");
                    case p.USP_V1:
                      return !0;
                  }
                }
              },
              {
                key: "hashCode",
                value: function () {
                  this.vendorData, this.ccpaString;
                  var e = o(this, r);
                  return Object(d.c)(JSON.stringify(e));
                }
              }
            ]),
            e
          );
        })(),
        u = (function () {
          function u(e, t, n) {
            c(this, u),
              f(this, "invocationId", void 0),
              f(this, "consentData", void 0),
              f(this, "storedPrivacyData", void 0),
              f(this, "localStorage", void 0),
              f(this, "_consentRequested", !1),
              (this.invocationId = e),
              (this.localStorage = t),
              (this.storageConfig = n),
              this.resetConsentData();
          }
          return (
            l(
              u,
              [
                {
                  key: "requestConsent",
                  value: function (e, t, n, i) {
                    if (e)
                      (this.consentData = new b()),
                        Object(d.t)(
                          this.invocationId,
                          "cmpApi: ID5 is operating in forced consent mode and will not retrieve any consent signals from the CMP"
                        ),
                        i(this.consentData);
                    else if (this._consentRequested) i(this.consentData);
                    else
                      switch (
                        ((this.consentData = new b()),
                        (this._consentRequested = !0),
                        t)
                      ) {
                        case "static":
                          this.parseStaticConsentData(n, i);
                          break;
                        case "iab":
                          this.lookupIabConsent(i);
                          break;
                        default:
                          Object(d.r)(
                            this.invocationId,
                            "cmpApi: Unknown consent API: ".concat(t)
                          ),
                            this.resetConsentData(),
                            i(this.consentData);
                      }
                  }
                },
                {
                  key: "getOrCreateConsentData",
                  value: function () {
                    return (
                      this.consentData || (this.consentData = new b()),
                      this.consentData
                    );
                  }
                },
                {
                  key: "parseStaticConsentData",
                  value: function (e, t) {
                    e = e || {};
                    var n = {};
                    Object(d.p)(e.getConsentData)
                      ? (n = u.parseTcfData(e, 1))
                      : Object(d.p)(e.getTCData)
                      ? (n = u.parseTcfData(e.getTCData, 2))
                      : Object(d.i)(e.allowedVendors)
                      ? (n = {
                          api: p.ID5_ALLOWED_VENDORS,
                          allowedVendors: e.allowedVendors.map(function (e) {
                            return String(e);
                          }),
                          gdprApplies: !0
                        })
                      : Object(d.p)(e.getUSPData)
                      ? (n = u.parseUspData(e.getUSPData))
                      : Object(d.t)(
                          this.invocationId,
                          "cmpApi: No static consent data detected! Using defaults."
                        ),
                      a(this.consentData, n),
                      Object(d.s)(
                        this.invocationId,
                        "cmpApi: Detected API '".concat(
                          this.consentData.api,
                          "' from static consent data"
                        ),
                        e
                      ),
                      t(this.consentData);
                  }
                },
                {
                  key: "lookupIabConsent",
                  value: function (n) {
                    var i = this,
                      r = [],
                      e = function (t) {
                        return (
                          (r[t] = !1),
                          function (e) {
                            r[t] ||
                              ((r[t] = !0),
                              e && a(i.consentData, e),
                              r.every(function (e) {
                                return e;
                              }) && n(i.consentData));
                          }
                        );
                      },
                      t = e(0),
                      e = e(1);
                    this.lookupTcf(t), this.lookupUsp(e);
                  }
                },
                {
                  key: "lookupUsp",
                  value: function (n) {
                    var i = this,
                      e = u.findUsp(),
                      t = e.uspapiFrame,
                      e = e.uspapiFunction;
                    if (!t)
                      return (
                        Object(d.t)(
                          this.invocationId,
                          "cmpApi: USP not found! Using defaults for CCPA."
                        ),
                        void n()
                      );
                    (Object(d.l)(e)
                      ? (Object(d.s)(
                          this.invocationId,
                          "cmpApi: Detected USP is directly accessible, calling it now."
                        ),
                        e)
                      : (Object(d.s)(
                          this.invocationId,
                          "cmpApi: Detected USP is outside the current iframe. Using message passing."
                        ),
                        u.buildCmpSurrogate("uspv1", t)))(
                      "getUSPData",
                      1,
                      function (e, t) {
                        t
                          ? n(u.parseUspData(e))
                          : (Object(d.r)(
                              i.invocationId,
                              "cmpApi: USP callback not succesful. Using defaults for CCPA."
                            ),
                            n());
                      }
                    );
                  }
                },
                {
                  key: "lookupTcf",
                  value: function (e) {
                    var t = u.findTCF(),
                      n = t.cmpVersion,
                      i = t.cmpFrame,
                      t = t.cmpFunction;
                    if (!i)
                      return (
                        Object(d.t)(
                          this.invocationId,
                          "cmpApi: TCF not found! Using defaults for GDPR."
                        ),
                        void e()
                      );
                    Object(d.l)(t)
                      ? this.lookupDirectTcf(n, t, e)
                      : (Object(d.s)(
                          this.invocationId,
                          "cmpApi: Detected TCF is outside the current iframe. Using message passing."
                        ),
                        this.lookupMessageTcf(n, i, e));
                  }
                },
                {
                  key: "lookupMessageTcf",
                  value: function (e, t, n) {
                    t = u.buildCmpSurrogate(1 === e ? "tcfv1" : "tcfv2", t);
                    this.lookupDirectTcf(e, t, n);
                  }
                },
                {
                  key: "lookupDirectTcf",
                  value: function (e, t, i) {
                    function r(e, t, n) {
                      Object(d.s)(
                        o.invocationId,
                        "cmpApi: TCFv"
                          .concat(e, " - Received a call back: ")
                          .concat(t),
                        n
                      );
                    }
                    function a(e, t) {
                      Object(d.r)(
                        o.invocationId,
                        "cmpApi: TCFv"
                          .concat(e, " - Received insuccess: ")
                          .concat(
                            t,
                            ". Please check your CMP setup. Using defaults for GDPR."
                          )
                      );
                    }
                    var n,
                      o = this,
                      c = {},
                      s = {},
                      l = function (n) {
                        return (
                          (s[n] = !1),
                          function (e, t) {
                            (s[n] = !0),
                              t ? (r(1, n, e), (c[n] = e)) : a(1, n),
                              Object.values(s).every(function (e) {
                                return e;
                              }) && i(u.parseTcfData(c, 1));
                          }
                        );
                      };
                    1 === e
                      ? ((n = l("getConsentData")),
                        (l = l("getVendorConsents")),
                        t("getConsentData", null, n),
                        t("getVendorConsents", null, l))
                      : 2 === e &&
                        t("addEventListener", e, function (e, t) {
                          if ((r(2, "event", e), !t))
                            return a(2, "addEventListener"), void i();
                          !e ||
                            (!1 !== e.gdprApplies &&
                              "tcloaded" !== e.eventStatus &&
                              "useractioncomplete" !== e.eventStatus) ||
                            i(u.parseTcfData(e, 2));
                        });
                  }
                },
                {
                  key: "resetConsentData",
                  value: function () {
                    (this.consentData = void 0),
                      (this.storedPrivacyData = void 0),
                      (this._consentRequested = !1);
                  }
                },
                {
                  key: "localStorageGrant",
                  value: function (e, t) {
                    if (!0 === e || !0 === t)
                      return (
                        Object(d.t)(
                          this.invocationId,
                          "cmpApi: Local storage access granted by configuration override, consent will not be checked"
                        ),
                        new g(!0, v.FORCE_ALLOWED_BY_CONFIG, p.NONE)
                      );
                    if (this.consentData && this.consentData.api !== p.NONE)
                      return this.consentData.localStorageGrant();
                    if (
                      (Object(d.p)(this.storedPrivacyData) ||
                        ((n = this.localStorage.getItemWithExpiration(
                          this.storageConfig.PRIVACY
                        )),
                        (this.storedPrivacyData = n && JSON.parse(n)),
                        Object(d.s)(
                          this.invocationId,
                          "cmpApi: Loaded stored privacy data from local storage",
                          this.storedPrivacyData
                        )),
                      this.storedPrivacyData &&
                        !0 === this.storedPrivacyData.id5_consent)
                    )
                      return new g(!0, v.ID5_CONSENT, p.NONE);
                    if (
                      !this.storedPrivacyData ||
                      !Object(d.k)(this.storedPrivacyData.jurisdiction)
                    )
                      return new g(!0, v.PROVISIONAL, p.NONE);
                    var n = this.storedPrivacyData.jurisdiction,
                      n =
                        n in i.a.PRIVACY.JURISDICTIONS &&
                        i.a.PRIVACY.JURISDICTIONS[n];
                    return new g(!1 === n, v.JURISDICTION, p.NONE);
                  }
                },
                {
                  key: "setStoredPrivacy",
                  value: function (e) {
                    try {
                      Object(d.p)(e)
                        ? ((this.storedPrivacyData = e),
                          this.localStorage.setItemWithExpiration(
                            this.storageConfig.PRIVACY,
                            JSON.stringify(e)
                          ))
                        : Object(d.r)(
                            this.invocationId,
                            "cmpApi: Cannot store privacy data if it is not an object",
                            e
                          );
                    } catch (e) {
                      Object(d.r)(
                        this.invocationId,
                        "cmpApi: Error while storing privacy data",
                        e
                      );
                    }
                  }
                }
              ],
              [
                {
                  key: "buildCmpSurrogate",
                  value: function (c, s) {
                    return function (e, t, n) {
                      var i = Math.random() + "",
                        r = h[c],
                        a = {},
                        o = {};
                      (o[r.objKeys[0]] = e),
                        (o[r.objKeys[1]] = t),
                        (o.callId = i),
                        (a[r.objName] = o);
                      o = function e(t) {
                        t = Object(d.e)(t, "data.".concat(r.returnObjName));
                        t &&
                          t.callId === i &&
                          (window.removeEventListener("message", e),
                          n(t.returnValue, t.success));
                      };
                      window.addEventListener("message", o, !1),
                        s.postMessage(a, "*");
                    };
                  }
                },
                {
                  key: "parseUspData",
                  value: function (e) {
                    if (Object(d.p)(e) && Object(d.q)(e.uspString))
                      return {
                        api: p.USP_V1,
                        hasCcpaString: !0,
                        ccpaString: e.uspString
                      };
                    Object(d.r)(
                      this.invocationId,
                      "cmpApi: No or malformed USP data. Using defaults for CCPA."
                    );
                  }
                },
                {
                  key: "parseTcfData",
                  value: function (e, t) {
                    var n, i;
                    if (1 === t)
                      (n = u.isValidV1ConsentObject), (i = u.normalizeV1Data);
                    else {
                      if (2 !== t)
                        return void Object(d.r)(
                          this.invocationId,
                          "cmpApi: No or malformed CMP data. Using defaults for GDPR."
                        );
                      (n = u.isValidV2ConsentObject), (i = u.normalizeV2Data);
                    }
                    if (n(e)) return i(e);
                    Object(d.r)(
                      this.invocationId,
                      "cmpApi: Invalid CMP data. Using defaults for GDPR.",
                      e
                    );
                  }
                },
                {
                  key: "isValidV1ConsentObject",
                  value: function (e) {
                    var t = Object(d.e)(e, "getConsentData.gdprApplies");
                    return (
                      !!Object(d.j)(t) &&
                      (!1 === t ||
                        (Object(d.q)(e.getConsentData.consentData) &&
                          Object(d.p)(e.getVendorConsents) &&
                          1 < Object.keys(e.getVendorConsents).length))
                    );
                  }
                },
                {
                  key: "isValidV2ConsentObject",
                  value: function (e) {
                    var t = e && e.gdprApplies,
                      e = e && e.tcString;
                    return !!Object(d.j)(t) && (!1 === t || Object(d.q)(e));
                  }
                },
                {
                  key: "normalizeV1Data",
                  value: function (e) {
                    return {
                      consentString: e.getConsentData.consentData,
                      vendorData: e.getVendorConsents,
                      gdprApplies: e.getConsentData.gdprApplies,
                      api: p.TCF_V1
                    };
                  }
                },
                {
                  key: "normalizeV2Data",
                  value: function (e) {
                    return {
                      consentString: e.tcString,
                      vendorData: e,
                      gdprApplies: e.gdprApplies,
                      api: p.TCF_V2
                    };
                  }
                },
                {
                  key: "findTCF",
                  value: function () {
                    for (var e, t, n = 0, i = window; !e; ) {
                      try {
                        if (
                          "function" == typeof i.__tcfapi ||
                          "function" == typeof i.__cmp
                        ) {
                          (t =
                            "function" == typeof i.__tcfapi
                              ? ((n = 2), i.__tcfapi)
                              : ((n = 1), i.__cmp)),
                            (e = i);
                          break;
                        }
                      } catch (e) {}
                      try {
                        if (i.frames.__tcfapiLocator) {
                          (n = 2), (e = i);
                          break;
                        }
                      } catch (e) {}
                      try {
                        if (i.frames.__cmpLocator) {
                          (n = 1), (e = i);
                          break;
                        }
                      } catch (e) {}
                      if (i === window.top) break;
                      i = i.parent;
                    }
                    return { cmpVersion: n, cmpFrame: e, cmpFunction: t };
                  }
                },
                {
                  key: "findUsp",
                  value: function () {
                    for (var e, t, n = window; !e; ) {
                      try {
                        if ("function" == typeof n.__uspapi) {
                          (t = n.__uspapi), (e = n);
                          break;
                        }
                      } catch (e) {}
                      try {
                        if (n.frames.__uspapiLocator) {
                          e = n;
                          break;
                        }
                      } catch (e) {}
                      if (n === window.top) break;
                      n = n.parent;
                    }
                    return { uspapiFrame: e, uspapiFunction: t };
                  }
                }
              ]
            ),
            u
          );
        })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, "a", function () {
        return i;
      });
      var o = "_exp",
        i = (function () {
          function n(e) {
            var t =
              !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
              a(this, "available", !1),
              a(this, "win", void 0),
              a(this, "writingEnabled", void 0),
              (this.win = e),
              (this.writingEnabled = t);
            t = "__id5test";
            try {
              this.writingEnabled && this.win.localStorage.setItem(t, t),
                this.win.localStorage.removeItem(t),
                (this.available = !0);
            } catch (e) {}
          }
          var e, t, i;
          return (
            (e = n),
            (t = [
              {
                key: "isAvailable",
                value: function () {
                  return this.available;
                }
              },
              {
                key: "getItem",
                value: function (e) {
                  if (this.available) return this.win.localStorage.getItem(e);
                }
              },
              {
                key: "setItem",
                value: function (e, t) {
                  this.available &&
                    this.writingEnabled &&
                    this.win.localStorage.setItem(e, t);
                }
              },
              {
                key: "removeItem",
                value: function (e) {
                  this.available && this.win.localStorage.removeItem(e);
                }
              },
              {
                key: "getItemWithExpiration",
                value: function (e) {
                  var t = e.name,
                    e = this.getItem(t + o);
                  return !e || new Date(e).getTime() - Date.now() <= 0
                    ? (this.removeItemWithExpiration({ name: t }), null)
                    : this.getItem(t);
                }
              },
              {
                key: "setItemWithExpiration",
                value: function (e, t) {
                  var n = e.name,
                    e = e.expiresDays,
                    e = Date.now() + 864e5 * e,
                    e = new Date(e).toUTCString();
                  this.setItem(n + o, e), this.setItem(n, t);
                }
              },
              {
                key: "removeItemWithExpiration",
                value: function (e) {
                  e = e.name;
                  this.removeItem(e), this.removeItem(e + o);
                }
              }
            ]) && r(e.prototype, t),
            i && r(e, i),
            n
          );
        })();
    },
    function (e, t) {
      var n = (function () {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n(0),
        t = n(1),
        a = n.n(t),
        o = n(2);
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var r = (function () {
        function r(e, t, n, i) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            s(this, "invocationId", void 0),
            s(this, "localStorageGrantChecker", void 0),
            s(this, "localStorage", void 0),
            (this.invocationId = e),
            (this.localStorageGrantChecker = t),
            (this.localStorage = n),
            (this.storageConfig = i);
        }
        var e, t, n;
        return (
          (e = r),
          (n = [
            {
              key: "makeStoredHash",
              value: function (e) {
                return Object(i.c)("string" == typeof e ? e : "");
              }
            },
            {
              key: "storedDataMatchesCurrentData",
              value: function (e, t) {
                return null == e || e === t;
              }
            }
          ]),
          (t = [
            {
              key: "get",
              value: function (e) {
                try {
                  var t = this.localStorageGrant();
                  if (t.isDefinitivelyAllowed())
                    return this.localStorage.getItemWithExpiration(e);
                  Object(i.t)(
                    this.invocationId,
                    "clientStore.get() has been called without definitive grant",
                    t
                  );
                } catch (e) {
                  Object(i.r)(this.invocationId, e);
                }
              }
            },
            {
              key: "clear",
              value: function (e) {
                try {
                  this.localStorage.removeItemWithExpiration(e);
                } catch (e) {
                  Object(i.r)(this.invocationId, e);
                }
              }
            },
            {
              key: "put",
              value: function (e, t) {
                try {
                  var n = this.localStorageGrant();
                  n.isDefinitivelyAllowed()
                    ? this.localStorage.setItemWithExpiration(e, t)
                    : Object(i.t)(
                        this.invocationId,
                        "clientStore.put() has been called without definitive grant",
                        n
                      );
                } catch (e) {
                  Object(i.r)(this.invocationId, e);
                }
              }
            },
            {
              key: "localStorageGrant",
              value: function () {
                return this.localStorageGrantChecker();
              }
            },
            {
              key: "isLocalStorageAvailable",
              value: function () {
                return this.localStorage.isAvailable();
              }
            },
            {
              key: "getResponseFromLegacyCookie",
              value: function () {
                var t;
                return (
                  a.a.LEGACY_COOKIE_NAMES.forEach(function (e) {
                    Object(i.g)(e) && (t = Object(i.g)(e));
                  }),
                  t ? JSON.parse(t) : null
                );
              }
            },
            {
              key: "getResponse",
              value: function () {
                var e = this.get(this.storageConfig.ID5);
                return e && JSON.parse(decodeURIComponent(e));
              }
            },
            {
              key: "clearResponse",
              value: function () {
                this.clear(this.storageConfig.ID5);
              }
            },
            {
              key: "putResponse",
              value: function (e) {
                this.put(this.storageConfig.ID5, encodeURIComponent(e));
              }
            },
            {
              key: "getHashedConsentData",
              value: function () {
                return this.get(this.storageConfig.CONSENT_DATA);
              }
            },
            {
              key: "clearHashedConsentData",
              value: function () {
                this.clear(this.storageConfig.CONSENT_DATA);
              }
            },
            {
              key: "putHashedConsentData",
              value: function (e) {
                e !== new o.a() &&
                  this.put(this.storageConfig.CONSENT_DATA, e.hashCode());
              }
            },
            {
              key: "getHashedPd",
              value: function (e) {
                return this.get(this.pdCacheConfig(e));
              }
            },
            {
              key: "storedPdMatchesPd",
              value: function (e, t) {
                return r.storedDataMatchesCurrentData(
                  this.getHashedPd(e),
                  r.makeStoredHash(t)
                );
              }
            },
            {
              key: "clearHashedPd",
              value: function (e) {
                this.clear(this.pdCacheConfig(e));
              }
            },
            {
              key: "putHashedPd",
              value: function (e, t) {
                this.put(this.pdCacheConfig(e), r.makeStoredHash(t));
              }
            },
            {
              key: "getHashedSegments",
              value: function (e) {
                return this.get(this.segmentsCacheConfig(e));
              }
            },
            {
              key: "putHashedSegments",
              value: function (e, t) {
                this.put(
                  this.segmentsCacheConfig(e),
                  r.makeStoredHash(JSON.stringify(t))
                );
              }
            },
            {
              key: "storedSegmentsMatchesSegments",
              value: function (e, t) {
                return r.storedDataMatchesCurrentData(
                  this.getHashedSegments(e),
                  r.makeStoredHash(JSON.stringify(t))
                );
              }
            },
            {
              key: "clearHashedSegments",
              value: function (e) {
                this.clear(this.segmentsCacheConfig(e));
              }
            },
            {
              key: "getDateTime",
              value: function () {
                return new Date(this.get(this.storageConfig.LAST)).getTime();
              }
            },
            {
              key: "clearDateTime",
              value: function () {
                this.clear(this.storageConfig.LAST);
              }
            },
            {
              key: "setDateTime",
              value: function (e) {
                this.put(this.storageConfig.LAST, e);
              }
            },
            {
              key: "getNb",
              value: function (e) {
                e = this.get(this.nbCacheConfig(e));
                return e ? parseInt(e) : 0;
              }
            },
            {
              key: "clearNb",
              value: function (e) {
                this.clear(this.nbCacheConfig(e));
              }
            },
            {
              key: "setNb",
              value: function (e, t) {
                this.put(this.nbCacheConfig(e), t);
              }
            },
            {
              key: "incNb",
              value: function (e, t) {
                return this.setNb(e, ++t), t;
              }
            },
            {
              key: "pdCacheConfig",
              value: function (e) {
                return this.storageConfig.PD.withNameSuffixed(e);
              }
            },
            {
              key: "nbCacheConfig",
              value: function (e) {
                return this.storageConfig.ID5.withNameSuffixed(e, "nb");
              }
            },
            {
              key: "segmentsCacheConfig",
              value: function (e) {
                return this.storageConfig.SEGMENTS.withNameSuffixed(e);
              }
            },
            {
              key: "clearAll",
              value: function (e) {
                this.clearResponse(),
                  this.clearDateTime(),
                  this.clearNb(e),
                  this.clearHashedPd(e),
                  this.clearHashedSegments(e),
                  this.clearHashedConsentData();
              }
            },
            {
              key: "removeLegacyCookies",
              value: function (t) {
                var n = new Date(Date.now() - 1e3).toUTCString();
                a.a.LEGACY_COOKIE_NAMES.forEach(function (e) {
                  Object(i.v)("".concat(e), "", n),
                    Object(i.v)("".concat(e, "_nb"), "", n),
                    Object(i.v)("".concat(e, "_").concat(t, "_nb"), "", n),
                    Object(i.v)("".concat(e, "_last"), "", n),
                    Object(i.v)("".concat(e, ".cached_pd"), "", n),
                    Object(i.v)("".concat(e, ".cached_consent_data"), "", n);
                });
              }
            },
            {
              key: "storedConsentDataMatchesConsentData",
              value: function (e) {
                return r.storedDataMatchesCurrentData(
                  this.getHashedConsentData(),
                  e.hashCode()
                );
              }
            }
          ]) && c(e.prototype, t),
          n && c(e, n),
          r
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var s = n(0),
        r = n(1);
      n.n(r);
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function l(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
      }
      var c = (function () {
          function c(e, t) {
            a(this, c), (this.name = e), (this.expiresDays = t);
          }
          return (
            l(c, [
              {
                key: "withNameSuffixed",
                value: function () {
                  for (
                    var e = this.name,
                      t = arguments.length,
                      n = new Array(t),
                      i = 0;
                    i < t;
                    i++
                  )
                    n[i] = arguments[i];
                  for (var r = 0, a = n; r < a.length; r++) {
                    var o = a[r];
                    e += "_".concat(o);
                  }
                  return new c(e, this.expiresDays);
                }
              }
            ]),
            c
          );
        })(),
        u = function e() {
          var n =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : void 0;
          a(this, e);
          function t(e) {
            var t = void 0 !== n ? Math.max(1, n) : e.expiresDays;
            return new c(e.name, t);
          }
          var i = r.STORAGE_CONFIG;
          (this.ID5 = t(i.ID5)),
            (this.LAST = t(i.LAST)),
            (this.CONSENT_DATA = t(i.CONSENT_DATA)),
            (this.PD = t(i.PD)),
            (this.PRIVACY = t(i.PRIVACY)),
            (this.SEGMENTS = t(i.SEGMENTS)),
            (this.LIVE_INTENT = t(i.LIVE_INTENT));
        },
        d = (function () {
          function c(e, t) {
            if (
              (a(this, c),
              i(this, "invocationId", void 0),
              i(this, "options", void 0),
              i(this, "providedOptions", void 0),
              i(this, "invalidSegments", void 0),
              (this.invocationId = e),
              (this.options = {
                debugBypassConsent: !1,
                allowLocalStorageWithoutConsentApi: !1,
                cmpApi: "iab",
                consentData: {
                  getConsentData: { consentData: void 0, gdprApplies: void 0 },
                  getVendorConsents: {}
                },
                refreshInSeconds: 7200,
                partnerId: void 0,
                partnerUserId: void 0,
                callbackOnAvailable: void 0,
                callbackOnUpdates: void 0,
                callbackTimeoutInMs: void 0,
                pd: void 0,
                abTesting: { enabled: !1, controlGroupPct: 0 },
                provider: void 0,
                maxCascades: 8,
                applyCreativeRestrictions: !1,
                segments: void 0,
                disableUaHints: !1,
                disableLiveIntentIntegration: !1,
                storageExpirationDays: void 0
              }),
              (this.providedOptions = {}),
              !t.partnerId || "number" != typeof t.partnerId)
            )
              throw new Error("partnerId is required and must be a number");
            (this.invalidSegments = 0),
              this.updOptions(t),
              (this.storageConfig = new u(t.storageExpirationDays));
          }
          return (
            l(c, [
              {
                key: "getOptions",
                value: function () {
                  return this.options;
                }
              },
              {
                key: "getProvidedOptions",
                value: function () {
                  return this.providedOptions;
                }
              },
              {
                key: "getInvalidSegments",
                value: function () {
                  return this.invalidSegments;
                }
              },
              {
                key: "updOptions",
                value: function (r) {
                  var n = this,
                    a = this;
                  if (Object(s.p)(r)) {
                    if (
                      Object(s.o)(this.options.partnerId) &&
                      Object(s.o)(r.partnerId) &&
                      r.partnerId !== this.options.partnerId
                    )
                      throw new Error(
                        "Cannot update config with a different partnerId"
                      );
                    var o = function (e, t) {
                      (n.options[e] = t), (n.providedOptions[e] = t);
                    };
                    Object.keys(r).forEach(function (e) {
                      var n, t, i;
                      "segments" === e
                        ? ((i = r[e]),
                          (n = []),
                          Object(s.i)(i)
                            ? (i.forEach(function (e, t) {
                                t = "segments[".concat(t, "]");
                                return Object(s.i)(e.ids) &&
                                  Object(s.b)(e.ids, s.q)
                                  ? e.ids.length < 1
                                    ? (Object(s.r)(
                                        a.invocationId,
                                        "Config option ".concat(
                                          t,
                                          ".ids should contain at least one segment ID"
                                        )
                                      ),
                                      void (a.invalidSegments += 1))
                                    : Object(s.q)(e.destination)
                                    ? void n.push(e)
                                    : (f(
                                        a.invocationId,
                                        "".concat(t, ".destination"),
                                        "String",
                                        e.destination
                                      ),
                                      void (a.invalidSegments += 1))
                                  : (f(
                                      a.invocationId,
                                      "".concat(t, ".ids"),
                                      "Array of String",
                                      e.ids
                                    ),
                                    void (a.invalidSegments += 1));
                              }),
                              o(e, n))
                            : f(a.invocationId, e, "Array", i))
                        : ((t = c.configTypes[e]),
                          (i = r[e]),
                          Object(s.h)(i, t)
                            ? o(e, i)
                            : f(a.invocationId, e, t, i));
                    });
                  } else
                    Object(s.r)(
                      this.invocationId,
                      "Config options must be an object"
                    );
                }
              }
            ]),
            c
          );
        })();
      function f(e, t, n, i) {
        Object(s.r)(
          e,
          "Config option "
            .concat(t, " must be of type ")
            .concat(n, " but was ")
            .concat(toString.call(i), ". Ignoring...")
        );
      }
      i(d, "configTypes", {
        debugBypassConsent: "Boolean",
        allowLocalStorageWithoutConsentApi: "Boolean",
        cmpApi: "String",
        consentData: "Object",
        refreshInSeconds: "Number",
        partnerId: "Number",
        partnerUserId: "String",
        callbackOnAvailable: "Function",
        callbackOnUpdates: "Function",
        callbackTimeoutInMs: "Number",
        pd: "String",
        abTesting: "Object",
        provider: "String",
        maxCascades: "Number",
        applyCreativeRestrictions: "Boolean",
        disableUaHints: "Boolean",
        disableLiveIntentIntegration: "Boolean",
        storageExpirationDays: "Number"
      });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var t = n(1),
        s = n.n(t),
        l = n(0);
      n(3);
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var r = (function () {
        function c(e, t, n, i, r) {
          var a = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, c),
            u(this, "isEnabled", void 0),
            u(this, "invocationId", void 0),
            u(this, "localStorage", void 0),
            u(this, "storageConfig", void 0),
            u(this, "_windowObj", void 0),
            u(this, "_handler", void 0),
            u(this, "_hasLiveIntentId", !1),
            u(this, "_liveIntentId", void 0),
            u(this, "_liveIntentIdTimestamp", void 0);
          var o = this;
          (this._windowObj = e),
            (this.isEnabled = t),
            (this.invocationId = n),
            (this.localStorage = i),
            (this.storageConfig = r),
            t &&
              (this._checkLocalStorage(),
              Object(l.s)(
                this.invocationId,
                "Starting polling detection of LiveIntent API"
              ),
              (this._handler = setInterval(function () {
                Object(l.e)(a._windowObj, "liQ.ready") &&
                  (Object(l.s)(
                    a.invocationId,
                    "Stopping polling detection of LiveIntent API: found"
                  ),
                  clearInterval(o._handler),
                  o._onDetected());
              }, s.a.LIVE_INTENT_POLL_INTERVAL_MS)));
        }
        var e, t, n;
        return (
          (e = c),
          (t = [
            {
              key: "_checkLocalStorage",
              value: function () {
                var e;
                this.localStorage.isAvailable() &&
                  ((e = this.localStorage.getItemWithExpiration(
                    this.storageConfig.LIVE_INTENT
                  )),
                  (e = Object(l.q)(e) ? JSON.parse(e) : void 0),
                  Object(l.p)(e) &&
                    (Object(l.s)(
                      this.invocationId,
                      "Retrieved LiveIntent ID from local storage"
                    ),
                    this._setLiveIntentId(e)));
              }
            },
            {
              key: "_onDetected",
              value: function () {
                var t = this;
                Object(l.s)(
                  this.invocationId,
                  "Detected LiveIntent API on the page! Requesting their ID."
                );
                var e = Object(l.e)(this._windowObj, "liQ.resolve");
                if (Object(l.l)(e))
                  try {
                    e(function (e) {
                      Object(l.s)(
                        t.invocationId,
                        "Received LiveIntent API `resolve` lookup response",
                        e
                      ),
                        e.unifiedId &&
                          t._setLiveIntentIdFromResponse(e.unifiedId, Date.now());
                    });
                  } catch (e) {
                    Object(l.r)(
                      "Error caught while calling resolve() on LiveIntent API",
                      e
                    );
                  }
              }
            },
            {
              key: "_setLiveIntentIdFromResponse",
              value: function (e, t) {
                t = { liveIntentId: e, timestamp: t };
                this.localStorage.setItemWithExpiration(
                  this.storageConfig.LIVE_INTENT,
                  JSON.stringify(t)
                ),
                  this._setLiveIntentId(t);
              }
            },
            {
              key: "_setLiveIntentId",
              value: function (e) {
                Object(l.s)(self.invocationId, "Received LiveIntent ID", e),
                  (this._liveIntentId = e.liveIntentId),
                  (this._liveIntentIdTimestamp = e.timestamp),
                  (this._hasLiveIntentId = !0);
              }
            },
            {
              key: "getLiveIntentId",
              value: function () {
                return this.isEnabled ? this._liveIntentId : void 0;
              }
            },
            {
              key: "hasLiveIntentId",
              value: function () {
                return this.isEnabled && this._hasLiveIntentId;
              }
            }
          ]) && i(e.prototype, t),
          n && i(e, n),
          c
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      n = n(9);
      window.ID5 || (window.ID5 = n.a);
    },
    function (e, t, n) {
      "use strict";
      var v = n(0),
        r = n(10),
        l = n(5),
        u = n(2),
        d = n(11),
        a = n(12),
        f = n(3),
        h = n(6),
        p = n(7),
        g = n(13);
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              e &&
              (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"]);
            if (null != n) {
              var i,
                r,
                a = [],
                o = !0,
                c = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (i = n.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  o = !0
                );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (c) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return i(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Map" ===
                (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
                "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? i(e, t)
                : void 0;
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var b = "https://id5-sync.com",
        n = new ((function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              s(this, "loaded", !1),
              s(this, "_isUsingCdn", !1),
              s(this, "_referer", !1),
              s(this, "_version", a.a),
              s(this, "versions", {}),
              s(this, "invocationId", 0),
              (this.loaded = !0),
              (this._isUsingCdn = !!(
                document &&
                document.currentScript &&
                document.currentScript.src &&
                0 ===
                  document.currentScript.src.indexOf("https://cdn.id5-sync.com")
              )),
              (this._referer = Object(r.a)()),
              (this.versions[a.a] = !0);
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: "debug",
                get: function () {
                  return Object(v.m)();
                },
                set: function (e) {
                  Object(v.w)(e);
                }
              },
              {
                key: "init",
                value: function (e) {
                  var t = this.invocationId;
                  this.invocationId += 1;
                  try {
                    Object(v.s)(
                      t,
                      "ID5 API version ".concat(
                        this._version,
                        ". Invoking init()"
                      ),
                      e
                    );
                    var n = new h.a(t, e),
                      i = n.getOptions(),
                      r = new f.a(window.top, !i.applyCreativeRestrictions),
                      a = new p.a(
                        window,
                        !i.disableLiveIntentIntegration,
                        t,
                        r,
                        n.storageConfig
                      ),
                      o = new u.b(t, r, n.storageConfig),
                      c = new l.a(
                        t,
                        function () {
                          return o.localStorageGrant(
                            i.allowLocalStorageWithoutConsentApi,
                            i.debugBypassConsent
                          );
                        },
                        r,
                        n.storageConfig
                      ),
                      s = new d.a(t, n, c, o, a);
                    return (
                      this.getId(s, !1),
                      Object(v.s)(
                        t,
                        "ID5 initialized for partner "
                          .concat(i.partnerId, " with referer ")
                          .concat(this._referer.referer, " and options"),
                        e
                      ),
                      s
                    );
                  } catch (e) {
                    Object(v.r)(t, "Exception caught during init()", e);
                  }
                }
              },
              {
                key: "refreshId",
                value: function (t) {
                  var e =
                      1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  if (!Object(v.j)(e))
                    throw new Error(
                      "Invalid signature for refreshId(): second parameter must be a boolean"
                    );
                  try {
                    Object(v.s)(
                      t.invocationId,
                      "Invoking refreshId()",
                      arguments
                    ),
                      t.startRefresh(e),
                      t.updateOptions(n),
                      t.consentManagement.resetConsentData(),
                      this.getId(t, e);
                  } catch (e) {
                    Object(v.r)(
                      t.invocationId,
                      "Exception caught from refreshId()",
                      e
                    );
                  }
                  return t;
                }
              },
              {
                key: "getId",
                value: function (t) {
                  var n = this,
                    i =
                      1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  Object(v.k)(window.navigator.userAgentData) &&
                  !t.getOptions().disableUaHints
                    ? this.gatherUaHints()
                        .then(function (e) {
                          return n.getIdWithUaHints(t, Object(v.f)(e), i);
                        })
                        .catch(function (e) {
                          Object(v.r)(
                            "Error while calling navigator.userAgentData.getHighEntropyValues()",
                            e
                          ),
                            n.getIdWithUaHints(t, void 0, i);
                        })
                    : this.getIdWithUaHints(t, void 0, i);
                }
              },
              {
                key: "getIdWithUaHints",
                value: function (r, a, o) {
                  var c,
                    e,
                    s = this,
                    l = r.getOptions(),
                    u = 0,
                    d = !1,
                    f = !1,
                    h = !1,
                    p = !1,
                    t = r.localStorageGrant();
                  t.isDefinitivelyAllowed() &&
                    (Object(v.s)(
                      r.invocationId,
                      "Using local storage for cached ID",
                      t
                    ),
                    (c = r.clientStore.getResponse()),
                    (e = r.clientStore.getDateTime()),
                    (d = e <= 0 || Date.now() - e > 1e3 * l.refreshInSeconds),
                    (u = r.clientStore.getNb(l.partnerId)),
                    (f = !r.clientStore.storedPdMatchesPd(l.partnerId, l.pd)),
                    (h = !r.clientStore.storedSegmentsMatchesSegments(
                      l.partnerId,
                      l.segments
                    ))),
                    c ||
                      (Object(v.s)(r.invocationId, "No cached ID found"),
                      (c = r.clientStore.getResponseFromLegacyCookie()),
                      (d = !0)),
                    c && c.universal_uid && !f && !h
                      ? (Object(v.s)(
                          r.invocationId,
                          "ID5 User ID available from cache:",
                          {
                            storedResponse: c,
                            storedDateTime: e,
                            refreshNeeded: d
                          }
                        ),
                        e <= 0 ||
                          12096e5 < Date.now() - e ||
                          (r.setUserId(c, !0),
                          (u = r.clientStore.incNb(l.partnerId, u)),
                          (p = !0)))
                      : c && c.universal_uid && f
                      ? Object(v.s)(
                          r.invocationId,
                          "PD value has changed, so ignoring User ID from cache"
                        )
                      : c && c.universal_uid && h
                      ? Object(v.s)(
                          r.invocationId,
                          "Segments have changed, so ignoring User ID from cache"
                        )
                      : c && !c.universal_uid
                      ? Object(v.r)(
                          r.invocationId,
                          "Invalid stored response: ",
                          c
                        )
                      : Object(v.s)(
                          r.invocationId,
                          "No ID5 User ID available from cache"
                        ),
                    r.consentManagement.requestConsent(
                      l.debugBypassConsent,
                      l.cmpApi,
                      l.consentData,
                      function (t) {
                        var e,
                          n,
                          i = r.localStorageGrant();
                        Object(v.s)(r.invocationId, "Local storage grant", i),
                          i.allowed
                            ? ((c =
                                r.clientStore.getResponse() ||
                                r.clientStore.getResponseFromLegacyCookie()),
                              (e = !r.clientStore.storedConsentDataMatchesConsentData(
                                t
                              )),
                              r.clientStore.putHashedConsentData(t),
                              r.clientStore.putHashedPd(l.partnerId, l.pd),
                              r.clientStore.putHashedSegments(
                                l.partnerId,
                                l.segments
                              ),
                              ((i = !c || !c.universal_uid || !c.signature) ||
                                d ||
                                e ||
                                f ||
                                h ||
                                o) &&
                                (Object(v.s)(
                                  r.invocationId,
                                  "Decided to fetch a fresh ID5 ID",
                                  {
                                    missingStoredData: i,
                                    refreshInSecondsHasElapsed: d,
                                    consentHasChanged: e,
                                    pdHasChanged: f,
                                    segmentsHaveChanged: h,
                                    forceFetch: o
                                  }
                                ),
                                (n = s.gatherData(l, r, u, t, c, a)),
                                g.a.gather(r.invocationId).then(function (e) {
                                  (n.extensions = e),
                                    s.fetchFreshID5ID(n, l, t, r, o, p);
                                })))
                            : Object(v.s)(
                                r.invocationId,
                                "No legal basis to use ID5",
                                t
                              );
                      }
                    );
                }
              },
              {
                key: "gatherData",
                value: function (n, e, t, i, r, a) {
                  var o = {
                      partner: n.partnerId,
                      v: this._version,
                      o: "api",
                      gdpr: i.gdprApplies ? 1 : 0,
                      rf: this._referer.referer,
                      u: this._referer.stack[0] || window.location.href,
                      top: this._referer.reachedTop ? 1 : 0,
                      localStorage: e.clientStore.isLocalStorageAvailable()
                        ? 1
                        : 0,
                      nbPage: t,
                      id5cdn: this._isUsingCdn,
                      ua: window.navigator.userAgent
                    },
                    t = i.gdprApplies ? i.consentString : void 0;
                  Object(v.k)(t) && (o.gdpr_consent = t),
                    Object(v.k)(i.allowedVendors) &&
                      (o.allowed_vendors = i.allowedVendors);
                  r = r && r.signature ? r.signature : void 0;
                  return (
                    Object(v.k)(r) && (o.s = r),
                    Object(v.k)(a) && (o.ua_hints = a),
                    i.hasCcpaString && (o.us_privacy = i.ccpaString),
                    e.liveIntentApi.hasLiveIntentId() &&
                      (o.li = e.liveIntentApi.getLiveIntentId()),
                    Object(v.u)({
                      pd: "pd",
                      partnerUserId: "puid",
                      provider: "provider",
                      segments: "segments"
                    }).forEach(function (e) {
                      var t = c(e, 2),
                        e = t[0],
                        t = t[1];
                      Object(v.k)(n[e]) && (o[t] = n[e]);
                    }),
                    !0 === n.abTesting.enabled &&
                      (o.ab_testing = {
                        enabled: !0,
                        control_group_pct: e.getOptions().abTesting
                          .controlGroupPct
                      }),
                    0 < e.getInvalidSegments() &&
                      (o._invalid_segments = e.getInvalidSegments()),
                    Object(v.n)() && (o._trace = !0),
                    o
                  );
                }
              },
              {
                key: "fetchFreshID5ID",
                value: function (e, t, n, i, r, a) {
                  var o = "".concat(b, "/g/v2/").concat(t.partnerId, ".json");
                  Object(v.s)(
                    i.invocationId,
                    "Fetching ID5 ID (forceFetch:".concat(r, ") from:"),
                    o,
                    e
                  ),
                    Object(v.a)(
                      o,
                      {
                        success: this.handleSuccessfulFetchResponse(i, t, a, n),
                        error: function (e) {
                          Object(v.r)(
                            i.invocationId,
                            "Error during AJAX request to ID5 server",
                            e
                          );
                        }
                      },
                      JSON.stringify(e),
                      { method: "POST", withCredentials: !0 }
                    );
                }
              },
              {
                key: "handleSuccessfulFetchResponse",
                value: function (o, c, s, l) {
                  var u = this;
                  return function (e) {
                    var t = u.validateResponseIsCorrectJson(e, o, "fetch");
                    if (t)
                      if (Object(v.q)(t.universal_uid)) {
                        Object(v.s)(
                          o.invocationId,
                          "Valid json response from ID5 received",
                          t
                        );
                        try {
                          o.setUserId(t, !1),
                            o.consentManagement.setStoredPrivacy(t.privacy);
                          var n,
                            i,
                            r,
                            a = o.localStorageGrant();
                          a.isDefinitivelyAllowed()
                            ? (Object(v.s)(o.invocationId, "Storing ID in cache"),
                              o.clientStore.putResponse(e),
                              o.clientStore.setDateTime(new Date().toUTCString()),
                              o.clientStore.setNb(c.partnerId, s ? 0 : 1))
                            : (Object(v.s)(
                                o.invocationId,
                                "Cannot use local storage to cache ID",
                                a
                              ),
                              o.clientStore.clearAll(c.partnerId)),
                            o.clientStore.removeLegacyCookies(c.partnerId),
                            !0 === t.cascade_needed &&
                              a.isDefinitivelyAllowed() &&
                              0 <= c.maxCascades &&
                              !c.applyCreativeRestrictions &&
                              ((n =
                                c.partnerUserId && 0 < c.partnerUserId.length),
                              (i = l.gdprApplies ? l.consentString : void 0),
                              (r = ""
                                .concat(b, "/")
                                .concat(n ? "s" : "i", "/")
                                .concat(c.partnerId, "/")
                                .concat(c.maxCascades, ".gif?id5id=")
                                .concat(o._userId, "&o=api&")
                                .concat(
                                  n ? "puid=" + c.partnerUserId + "&" : "",
                                  "gdpr_consent="
                                )
                                .concat(i, "&gdpr=")
                                .concat(l.gdprApplies)),
                              Object(v.s)(
                                o.invocationId,
                                "Opportunities to cascade available",
                                r
                              ),
                              Object(v.d)(r));
                        } catch (e) {
                          Object(v.r)(
                            o.invocationId,
                            "Error during processing of valid ID5 server response",
                            t,
                            e
                          );
                        }
                      } else
                        Object(v.r)(
                          o.invocationId,
                          "Server response failed to validate",
                          t
                        );
                  };
                }
              },
              {
                key: "validateResponseIsCorrectJson",
                value: function (t, n, i) {
                  if (!t || !Object(v.q)(t) || t.length < 1)
                    Object(v.r)(
                      n.invocationId,
                      "Empty "
                        .concat(i, ' response from ID5 servers: "')
                        .concat(t, '"')
                    );
                  else
                    try {
                      return JSON.parse(t);
                    } catch (e) {
                      Object(v.r)(
                        n.invocationId,
                        "Cannot parse the JSON server ".concat(i, " response"),
                        t
                      );
                    }
                  return null;
                }
              },
              {
                key: "gatherUaHints",
                value: function () {
                  return window.navigator.userAgentData.getHighEntropyValues([
                    "architecture",
                    "fullVersionList",
                    "model",
                    "platformVersion"
                  ]);
                }
              }
            ]) && o(t.prototype, n),
            i && o(t, i),
            e
          );
        })())();
      t.a = n;
    },
    function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                i = arguments[t];
              for (n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, "a", function () {
        return i;
      });
      var a,
        i =
          ((a = window),
          function () {
            try {
              var e,
                t = o(),
                n = t.length - 1,
                i =
                  null !== t[n].location || (0 < n && null !== t[n - 1].referrer),
                r = (function (e) {
                  for (
                    var t,
                      n = [],
                      i = null,
                      r = null,
                      a = null,
                      o = null,
                      c = null,
                      s = e.length - 1;
                    0 <= s;
                    s--
                  ) {
                    try {
                      r = e[s].location;
                    } catch (e) {}
                    if (r) n.push(r), (c = c || r);
                    else if (0 !== s) {
                      t = e[s - 1];
                      try {
                        (a = t.referrer), (o = t.ancestor);
                      } catch (e) {}
                      a
                        ? (n.push(a), (c = c || a))
                        : o
                        ? (n.push(o), (c = c || o))
                        : n.push(i);
                    } else n.push(i);
                  }
                  return { stack: n, detectedRefererUrl: c };
                })(t);
              return (
                t[t.length - 1].canonicalUrl &&
                  (e = t[t.length - 1].canonicalUrl),
                {
                  referer: r.detectedRefererUrl,
                  reachedTop: i,
                  numIframes: n,
                  stack: r.stack,
                  canonicalUrl: e
                }
              );
            } catch (e) {}
          });
      function o() {
        var e = (function () {
            var t,
              n = [];
            do {
              try {
                t = t ? t.parent : a;
                try {
                  var e = t === a.top,
                    i = {
                      referrer: t.document.referrer || null,
                      location: t.location.href || null,
                      isTop: e
                    };
                  e &&
                    (i = r(i, {
                      canonicalUrl: (function (e) {
                        try {
                          var t = e.querySelector("link[rel='canonical']");
                          if (null !== t) return t.href;
                        } catch (e) {}
                        return null;
                      })(t.document)
                    })),
                    n.push(i);
                } catch (e) {
                  n.push({ referrer: null, location: null, isTop: t === a.top });
                }
              } catch (e) {
                return n.push({ referrer: null, location: null, isTop: !1 }), n;
              }
            } while (t !== a.top);
            return n;
          })(),
          t = (function () {
            try {
              return a.location.ancestorOrigins
                ? a.location.ancestorOrigins
                : void 0;
            } catch (e) {}
          })();
        if (t) for (var n = 0, i = t.length; n < i; n++) e[n].ancestor = t[n];
        return e;
      }
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var t = n(1),
        i = n.n(t),
        o = n(0);
      n(6), n(5), n(2), n(7);
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var a = (function () {
        function a(e, t, n, i, r) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, a),
            c(this, "_availableCallbackTimerId", void 0),
            c(this, "_availableCallbackFired", !1),
            c(this, "_availableCallback", void 0),
            c(this, "_updateCallback", void 0),
            c(this, "_refreshCallbackTimerId", void 0),
            c(this, "_refreshCallbackFired", !1),
            c(this, "_refreshCallback", void 0),
            c(this, "_isExposed", void 0),
            c(this, "_fromCache", void 0),
            c(this, "_isRefreshing", !1),
            c(this, "_isRefreshingWithFetch", !1),
            c(this, "_userId", void 0),
            c(this, "_linkType", void 0),
            c(this, "_userIdAvailable", !1),
            c(this, "invocationId", void 0),
            c(this, "config", void 0),
            c(this, "clientStore", void 0),
            c(this, "consentManagement", void 0),
            c(this, "liveIntentApi", void 0),
            (this.invocationId = e),
            (this.config = t),
            (this.clientStore = n),
            (this.consentManagement = i),
            (this.liveIntentApi = r);
        }
        var e, t, n;
        return (
          (e = a),
          (n = [
            {
              key: "doFireOnAvailableCallBack",
              value: function (e) {
                Object(o.s)(
                  e.invocationId,
                  "Id5Status.doFireOnAvailableCallBack"
                ),
                  (e._availableCallbackFired = !0),
                  (e._availableCallbackTimerId = void 0),
                  e._availableCallback(e);
              }
            },
            {
              key: "doFireOnUpdateCallBack",
              value: function (e) {
                Object(o.s)(e.invocationId, "Id5Status.doFireOnUpdateCallBack"),
                  e._updateCallback(e);
              }
            },
            {
              key: "doFireOnRefreshCallBack",
              value: function (e) {
                Object(o.s)(e.invocationId, "Id5Status.doFireOnRefreshCallBack"),
                  (e._refreshCallbackFired = !0),
                  (e._refreshCallbackTimerId = void 0),
                  (e._isRefreshing = !1),
                  (e._isRefreshingWithFetch = !1),
                  e._refreshCallback(e);
              }
            }
          ]),
          (t = [
            {
              key: "getOptions",
              value: function () {
                return this.config.getOptions();
              }
            },
            {
              key: "getInvalidSegments",
              value: function () {
                return this.config.getInvalidSegments();
              }
            },
            {
              key: "updateOptions",
              value: function (e) {
                return this.config.updOptions(e);
              }
            },
            {
              key: "startRefresh",
              value: function (e) {
                (this._isRefreshing = !0), (this._isRefreshingWithFetch = e);
              }
            },
            {
              key: "setUserId",
              value: function (e, t) {
                var n = this,
                  i = e.universal_uid,
                  r = e.link_type || 0;
                if (((this._isExposed = !0), Object(o.p)(e.ab_testing)))
                  switch (e.ab_testing.result) {
                    case "normal":
                      break;
                    default:
                    case "error":
                      Object(o.r)(
                        this.invocationId,
                        "Id5Status: There was an error with A/B Testing. Make sure controlGroupRatio is a number >= 0 and <= 1"
                      );
                      break;
                    case "control":
                      (this._isExposed = !1),
                        this.info("User is in control group!");
                  }
                e = this._userId !== i || this._linkType !== r;
                (this._userIdAvailable = !0),
                  (this._userId = i),
                  (this._linkType = r),
                  (this._fromCache = t),
                  this.info(
                    "User id updated, hasChanged: "
                      .concat(e, ", fromCache: ")
                      .concat(t)
                  ),
                  Object(o.l)(this._availableCallback) &&
                    !1 === this._availableCallbackFired &&
                    (this._availableCallbackTimerId &&
                      (this.info(
                        "Cancelling pending onAvailableCallback watchdog"
                      ),
                      clearTimeout(this._availableCallbackTimerId),
                      (this._availableCallbackTimerId = void 0)),
                    (this._availableCallbackTimerId = setTimeout(function () {
                      return a.doFireOnAvailableCallBack(n);
                    }, 0))),
                  this._isRefreshing &&
                    Object(o.l)(this._refreshCallback) &&
                    !1 === this._refreshCallbackFired &&
                    ((!1 !== t && !1 !== this._isRefreshingWithFetch) ||
                      (this._refreshCallbackTimerId &&
                        (this.info(
                          "Cancelling pending onRefreshCallback watchdog"
                        ),
                        clearTimeout(this._refreshCallbackTimerId),
                        (this._refreshCallbackTimerId = void 0)),
                      (this._refreshCallbackTimerId = setTimeout(function () {
                        return a.doFireOnRefreshCallBack(n);
                      }, 0)))),
                  e &&
                    Object(o.l)(this._updateCallback) &&
                    setTimeout(function () {
                      return a.doFireOnUpdateCallBack(n);
                    }, 0);
              }
            },
            {
              key: "getUserId",
              value: function () {
                return !1 === this._isExposed ? "0" : this._userId;
              }
            },
            {
              key: "getLinkType",
              value: function () {
                return !1 === this._isExposed ? 0 : this._linkType;
              }
            },
            {
              key: "isFromCache",
              value: function () {
                return this._fromCache;
              }
            },
            {
              key: "exposeUserId",
              value: function () {
                return this._isExposed;
              }
            },
            {
              key: "getUserIdAsEid",
              value: function () {
                return {
                  source: i.a.ID5_EIDS_SOURCE,
                  uids: [
                    {
                      atype: 1,
                      id: this.getUserId(),
                      ext: {
                        linkType: this.getLinkType(),
                        abTestingControlGroup: !this.exposeUserId()
                      }
                    }
                  ]
                };
              }
            },
            {
              key: "onAvailable",
              value: function (e, t) {
                if (!Object(o.l)(e))
                  throw new Error("onAvailable expect a function");
                var n;
                return (
                  Object(o.l)(this._availableCallback)
                    ? this.info("onAvailable was already called, ignoring")
                    : ((this._availableCallback = e),
                      (n = this)._userIdAvailable
                        ? (this.info(
                            "User id already available firing callback immediately"
                          ),
                          (this._availableCallbackTimerId = setTimeout(
                            function () {
                              return a.doFireOnAvailableCallBack(n);
                            },
                            0
                          )))
                        : 0 < t &&
                          (this._availableCallbackTimerId = setTimeout(
                            function () {
                              return a.doFireOnAvailableCallBack(n);
                            },
                            t
                          ))),
                  this
                );
              }
            },
            {
              key: "onUpdate",
              value: function (e) {
                if (!Object(o.l)(e))
                  throw new Error("onUpdate expect a function");
                this._updateCallback = e;
                var t = this;
                return (
                  this._userIdAvailable &&
                    setTimeout(function () {
                      return a.doFireOnUpdateCallBack(t);
                    }, 0),
                  this
                );
              }
            },
            {
              key: "onRefresh",
              value: function (e, t) {
                if (!Object(o.l)(e))
                  throw new Error("onRefresh expect a function");
                this._refreshCallbackTimerId &&
                  (clearTimeout(this._refreshCallbackTimerId),
                  (this._refreshCallbackTimerId = void 0)),
                  (this._refreshCallback = e);
                var n = this;
                return (
                  !0 === this._isRefreshing &&
                  !1 === this._isRefreshingWithFetch &&
                  this._userIdAvailable
                    ? (this._refreshCallbackTimerId = setTimeout(function () {
                        return a.doFireOnRefreshCallBack(n);
                      }, 0))
                    : 0 < t &&
                      (this._refreshCallbackTimerId = setTimeout(function () {
                        return a.doFireOnRefreshCallBack(n);
                      }, t)),
                  this
                );
              }
            },
            {
              key: "localStorageGrant",
              value: function () {
                return this.clientStore.localStorageGrant();
              }
            },
            {
              key: "info",
              value: function (e) {
                Object(o.s)(this.invocationId, "Id5Status: " + e);
              }
            }
          ]) && r(e.prototype, t),
          n && r(e, n),
          a
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = "1.0.22";
    },
    function (e, t, n) {
      "use strict";
      var o = n(0),
        c = n(14);
      function a(t, e) {
        var n,
          i = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(t)),
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            i.push.apply(i, n)),
          i
        );
      }
      function s(i) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(r), !0).forEach(function (e) {
                var t, n;
                (t = i),
                  (e = r[(n = e)]),
                  n in t
                    ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (t[n] = e);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  i,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return i;
      }
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      n = new ((function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "gather",
              value: function (r) {
                function e(n, i) {
                  return new c.a(function (t) {
                    Object(o.a)(
                      n,
                      {
                        success: function (e) {
                          e = (function (t, n) {
                            try {
                              return JSON.parse(n);
                            } catch (e) {
                              return (
                                Object(o.r)(
                                  r,
                                  "Cannot parse the JSON  response from: ".concat(
                                    t
                                  ),
                                  n
                                ),
                                a
                              );
                            }
                          })(n, e);
                          t(e);
                        },
                        error: function (e) {
                          Object(o.t)(
                            i,
                            "Got error from ".concat(n, " endpoint"),
                            e
                          ),
                            t(a);
                        }
                      },
                      null
                    );
                  });
                }
                var a = { lbCDN: "%%LB_CDN%%" };
                return c.a
                  .allSettled([
                    e("https://lb.eu-1-id5-sync.com/lb/v1", r),
                    e("https://lbs.eu-1-id5-sync.com/lbs/v1", r)
                  ])
                  .then(function (e) {
                    var t = a;
                    return (
                      e.forEach(function (e) {
                        e.value && (t = s(s({}, t), e.value));
                      }),
                      t
                    );
                  })
                  .catch(function (e) {
                    return (
                      Object(o.r)(
                        r,
                        "Got error ".concat(e, " when gathering extensions data")
                      ),
                      a
                    );
                  });
              }
            }
          ]) && r(t.prototype, n),
          i && r(t, i),
          e
        );
      })())();
      t.a = n;
    },
    function (e, r, a) {
      "use strict";
      !function (e) {
        var t = a(15);
        var n,
          i =
            void 0 !== (n = void 0 !== e ? e : window) && void 0 !== n.Promise
              ? n.Promise
              : t.a;
        r.a = i;
      }.call(r, a(4));
    },
    function (e, h, p) {
      "use strict";
      !function (t) {
        var e = p(19),
          n = p(20),
          i = setTimeout;
        function s(e) {
          return Boolean(e && void 0 !== e.length);
        }
        function r() {}
        function a(e) {
          if (!(this instanceof a))
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            f(e, this);
        }
        function o(n, i) {
          for (; 3 === n._state; ) n = n._value;
          0 !== n._state
            ? ((n._handled = !0),
              a._immediateFn(function () {
                var e,
                  t = 1 === n._state ? i.onFulfilled : i.onRejected;
                if (null !== t) {
                  try {
                    e = t(n._value);
                  } catch (e) {
                    return void l(i.promise, e);
                  }
                  c(i.promise, e);
                } else (1 === n._state ? c : l)(i.promise, n._value);
              }))
            : n._deferreds.push(i);
        }
        function c(t, e) {
          try {
            if (e === t)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var n = e.then;
              if (e instanceof a)
                return (t._state = 3), (t._value = e), void u(t);
              if ("function" == typeof n)
                return void f(
                  ((i = n),
                  (r = e),
                  function () {
                    i.apply(r, arguments);
                  }),
                  t
                );
            }
            (t._state = 1), (t._value = e), u(t);
          } catch (e) {
            l(t, e);
          }
          var i, r;
        }
        function l(e, t) {
          (e._state = 2), (e._value = t), u(e);
        }
        function u(e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            a._immediateFn(function () {
              e._handled || a._unhandledRejectionFn(e._value);
            });
          for (var t = 0, n = e._deferreds.length; t < n; t++)
            o(e, e._deferreds[t]);
          e._deferreds = null;
        }
        function d(e, t, n) {
          (this.onFulfilled = "function" == typeof e ? e : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.promise = n);
        }
        function f(e, t) {
          var n = !1;
          try {
            e(
              function (e) {
                n || ((n = !0), c(t, e));
              },
              function (e) {
                n || ((n = !0), l(t, e));
              }
            );
          } catch (e) {
            if (n) return;
            (n = !0), l(t, e);
          }
        }
        (a.prototype.catch = function (e) {
          return this.then(null, e);
        }),
          (a.prototype.then = function (e, t) {
            var n = new this.constructor(r);
            return o(this, new d(e, t, n)), n;
          }),
          (a.prototype.finally = e.a),
          (a.all = function (t) {
            return new a(function (r, a) {
              if (!s(t)) return a(new TypeError("Promise.all accepts an array"));
              var o = Array.prototype.slice.call(t);
              if (0 === o.length) return r([]);
              var c = o.length;
              for (var e = 0; e < o.length; e++)
                !(function t(n, e) {
                  try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                      var i = e.then;
                      if ("function" == typeof i)
                        return void i.call(
                          e,
                          function (e) {
                            t(n, e);
                          },
                          a
                        );
                    }
                    (o[n] = e), 0 == --c && r(o);
                  } catch (e) {
                    a(e);
                  }
                })(e, o[e]);
            });
          }),
          (a.allSettled = n.a),
          (a.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === a
              ? t
              : new a(function (e) {
                  e(t);
                });
          }),
          (a.reject = function (n) {
            return new a(function (e, t) {
              t(n);
            });
          }),
          (a.race = function (r) {
            return new a(function (e, t) {
              if (!s(r)) return t(new TypeError("Promise.race accepts an array"));
              for (var n = 0, i = r.length; n < i; n++)
                a.resolve(r[n]).then(e, t);
            });
          }),
          (a._immediateFn =
            "function" == typeof t
              ? function (e) {
                  t(e);
                }
              : function (e) {
                  i(e, 0);
                }),
          (a._unhandledRejectionFn = function (e) {
            "undefined" != typeof console &&
              console &&
              console.warn("Possible Unhandled Promise Rejection:", e);
          }),
          (h.a = a);
      }.call(h, p(16).setImmediate);
    },
    function (e, r, a) {
      !function (e) {
        var t =
            (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
          n = Function.prototype.apply;
        function i(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (r.setTimeout = function () {
          return new i(n.call(setTimeout, t, arguments), clearTimeout);
        }),
          (r.setInterval = function () {
            return new i(n.call(setInterval, t, arguments), clearInterval);
          }),
          (r.clearTimeout = r.clearInterval = function (e) {
            e && e.close();
          }),
          (i.prototype.unref = i.prototype.ref = function () {}),
          (i.prototype.close = function () {
            this._clearFn.call(t, this._id);
          }),
          (r.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (r.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (r._unrefActive = r.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            0 <= t &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
          a(17),
          (r.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (r.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(r, a(4));
    },
    function (e, t, n) {
      !function (e, h) {
        !(function (n, i) {
          "use strict";
          var r, a, o, c, s, l, t, e;
          function u(e) {
            delete a[e];
          }
          function d(e) {
            if (o) setTimeout(d, 0, e);
            else {
              var t = a[e];
              if (t) {
                o = !0;
                try {
                  !(function (e) {
                    var t = e.callback,
                      n = e.args;
                    switch (n.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(n[0]);
                        break;
                      case 2:
                        t(n[0], n[1]);
                        break;
                      case 3:
                        t(n[0], n[1], n[2]);
                        break;
                      default:
                        t.apply(i, n);
                    }
                  })(t);
                } finally {
                  u(e), (o = !1);
                }
              }
            }
          }
          function f() {
            function e(e) {
              e.source === n &&
                "string" == typeof e.data &&
                0 === e.data.indexOf(t) &&
                d(+e.data.slice(t.length));
            }
            var t = "setImmediate$" + Math.random() + "$";
            n.addEventListener
              ? n.addEventListener("message", e, !1)
              : n.attachEvent("onmessage", e),
              (s = function (e) {
                n.postMessage(t + e, "*");
              });
          }
          n.setImmediate ||
            ((r = 1),
            (o = !(a = {})),
            (c = n.document),
            (e =
              (e = Object.getPrototypeOf && Object.getPrototypeOf(n)) &&
              e.setTimeout
                ? e
                : n),
            "[object process]" === {}.toString.call(n.process)
              ? (s = function (e) {
                  h.nextTick(function () {
                    d(e);
                  });
                })
              : !(function () {
                  if (n.postMessage && !n.importScripts) {
                    var e = !0,
                      t = n.onmessage;
                    return (
                      (n.onmessage = function () {
                        e = !1;
                      }),
                      n.postMessage("", "*"),
                      (n.onmessage = t),
                      e
                    );
                  }
                })()
              ? (s = n.MessageChannel
                  ? (((t = new MessageChannel()).port1.onmessage = function (e) {
                      d(e.data);
                    }),
                    function (e) {
                      t.port2.postMessage(e);
                    })
                  : c && "onreadystatechange" in c.createElement("script")
                  ? ((l = c.documentElement),
                    function (e) {
                      var t = c.createElement("script");
                      (t.onreadystatechange = function () {
                        d(e),
                          (t.onreadystatechange = null),
                          l.removeChild(t),
                          (t = null);
                      }),
                        l.appendChild(t);
                    })
                  : function (e) {
                      setTimeout(d, 0, e);
                    })
              : f(),
            (e.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              return (a[r] = { callback: e, args: t }), s(r), r++;
            }),
            (e.clearImmediate = u));
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(t, n(4), n(18));
    },
    function (e, t) {
      var n,
        i,
        e = (e.exports = {});
      function r() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === r || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : r;
        } catch (e) {
          n = r;
        }
        try {
          i = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          i = a;
        }
      })();
      var c,
        s = [],
        l = !1,
        u = -1;
      function d() {
        l &&
          c &&
          ((l = !1), c.length ? (s = c.concat(s)) : (u = -1), s.length && f());
      }
      function f() {
        if (!l) {
          var e = o(d);
          l = !0;
          for (var t = s.length; t; ) {
            for (c = s, s = []; ++u < t; ) c && c[u].run();
            (u = -1), (t = s.length);
          }
          (c = null),
            (l = !1),
            (function (t) {
              if (i === clearTimeout) return clearTimeout(t);
              if ((i === a || !i) && clearTimeout)
                return (i = clearTimeout), clearTimeout(t);
              try {
                i(t);
              } catch (e) {
                try {
                  return i.call(null, t);
                } catch (e) {
                  return i.call(this, t);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function p() {}
      (e.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new h(e, t)), 1 !== s.length || l || o(f);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (e.title = "browser"),
        (e.browser = !0),
        (e.env = {}),
        (e.argv = []),
        (e.version = ""),
        (e.versions = {}),
        (e.on = p),
        (e.addListener = p),
        (e.once = p),
        (e.off = p),
        (e.removeListener = p),
        (e.removeAllListeners = p),
        (e.emit = p),
        (e.prependListener = p),
        (e.prependOnceListener = p),
        (e.listeners = function (e) {
          return [];
        }),
        (e.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (e.cwd = function () {
          return "/";
        }),
        (e.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (e.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      t.a = function (t) {
        var n = this.constructor;
        return this.then(
          function (e) {
            return n.resolve(t()).then(function () {
              return e;
            });
          },
          function (e) {
            return n.resolve(t()).then(function () {
              return n.reject(e);
            });
          }
        );
      };
    },
    function (e, t, n) {
      "use strict";
      t.a = function (n) {
        return new this(function (r, e) {
          if (!n || void 0 === n.length)
            return e(
              new TypeError(
                typeof n +
                  " " +
                  n +
                  " is not iterable(cannot read property Symbol(Symbol.iterator))"
              )
            );
          var a = Array.prototype.slice.call(n);
          if (0 === a.length) return r([]);
          var o = a.length;
          for (var t = 0; t < a.length; t++)
            !(function t(n, e) {
              if (e && ("object" == typeof e || "function" == typeof e)) {
                var i = e.then;
                if ("function" == typeof i)
                  return void i.call(
                    e,
                    function (e) {
                      t(n, e);
                    },
                    function (e) {
                      (a[n] = { status: "rejected", reason: e }),
                        0 == --o && r(a);
                    }
                  );
              }
              (a[n] = { status: "fulfilled", value: e }), 0 == --o && r(a);
            })(t, a[t]);
        });
      };
    }
  ]);
  