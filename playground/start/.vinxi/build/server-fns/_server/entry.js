import { provideRequestEvent } from "solid-js/web/storage";
import { toWebRequest, getRequestIP, eventHandler, getHeader, getRequestURL, readFormData, readBody, setHeader } from "h3";
var C = ((i2) => (i2[i2.AggregateError = 1] = "AggregateError", i2[i2.ArrowFunction = 2] = "ArrowFunction", i2[i2.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i2[i2.ObjectAssign = 8] = "ObjectAssign", i2[i2.BigIntTypedArray = 16] = "BigIntTypedArray", i2))(C || {});
function f$1(n2, e) {
  if (!n2)
    throw e;
}
function nr(n2) {
  switch (n2) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function d$1(n2) {
  let e = "", r = 0, t;
  for (let s = 0, i2 = n2.length; s < i2; s++)
    t = nr(n2[s]), t && (e += n2.slice(r, s) + t, r = s + 1);
  return r === 0 ? e = n2 : e += n2.slice(r), e;
}
function sr(n2) {
  switch (n2) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return n2;
  }
}
function S$1(n2) {
  return n2.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, sr);
}
var x$1 = "__SEROVAL_REFS__", K$1 = "$R";
var Ie = /* @__PURE__ */ new Map(), A$1 = /* @__PURE__ */ new Map();
function Z$1(n2) {
  return Ie.has(n2);
}
function ar(n2) {
  return A$1.has(n2);
}
function Ce(n2) {
  return f$1(Z$1(n2), new Error("Missing reference id")), Ie.get(n2);
}
function Oe(n2) {
  return f$1(ar(n2), new Error("Missing reference for id:" + n2)), A$1.get(n2);
}
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, x$1, { value: A$1, configurable: true, writable: false, enumerable: false }) : typeof window != "undefined" ? Object.defineProperty(window, x$1, { value: A$1, configurable: true, writable: false, enumerable: false }) : typeof self != "undefined" ? Object.defineProperty(self, x$1, { value: A$1, configurable: true, writable: false, enumerable: false }) : typeof global != "undefined" && Object.defineProperty(global, x$1, { value: A$1, configurable: true, writable: false, enumerable: false });
function wr(n2) {
  return n2;
}
function ze(n2, e) {
  for (let r = 0, t = e.length; r < t; r++) {
    let s = e[r];
    n2.has(s) || (n2.add(s), s.extends && ze(n2, s.extends));
  }
}
function c(n2) {
  if (n2) {
    let e = /* @__PURE__ */ new Set();
    return ze(e, n2), [...e];
  }
}
var { toString: lr } = Object.prototype, p$1 = class p extends Error {
  constructor(r) {
    super('Unsupported type "' + lr.call(r) + '"');
    this.value = r;
  }
};
var ke = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" }, L$1 = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 }, Te = { 0: Symbol.asyncIterator, 1: Symbol.hasInstance, 2: Symbol.isConcatSpreadable, 3: Symbol.iterator, 4: Symbol.match, 5: Symbol.matchAll, 6: Symbol.replace, 7: Symbol.search, 8: Symbol.species, 9: Symbol.split, 10: Symbol.toPrimitive, 11: Symbol.toStringTag, 12: Symbol.unscopables }, Fe = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" }, Ve = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN };
var X$1 = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" }, De = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError };
function y(n2) {
  return { t: 2, i: void 0, s: n2, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
var v = y(2), N = y(3), Q$1 = y(1), ee$1 = y(0), Be = y(4), je = y(5), Me = y(6), _e = y(7);
function re(n2) {
  return n2 instanceof EvalError ? 1 : n2 instanceof RangeError ? 2 : n2 instanceof ReferenceError ? 3 : n2 instanceof SyntaxError ? 4 : n2 instanceof TypeError ? 5 : n2 instanceof URIError ? 6 : 0;
}
function ur(n2) {
  let e = X$1[re(n2)];
  return n2.name !== e ? { name: n2.name } : n2.constructor.name !== e ? { name: n2.constructor.name } : {};
}
function O$1(n2, e) {
  let r = ur(n2), t = Object.getOwnPropertyNames(n2);
  for (let s = 0, i2 = t.length, o2; s < i2; s++)
    o2 = t[s], o2 !== "name" && o2 !== "message" && (o2 === "stack" ? e & 4 && (r = r || {}, r[o2] = n2[o2]) : (r = r || {}, r[o2] = n2[o2]));
  return r;
}
function te$1(n2) {
  return Object.isFrozen(n2) ? 3 : Object.isSealed(n2) ? 2 : Object.isExtensible(n2) ? 0 : 1;
}
function ne(n2) {
  switch (n2) {
    case 1 / 0:
      return je;
    case -1 / 0:
      return Me;
  }
  return n2 !== n2 ? _e : Object.is(n2, -0) ? Be : { t: 0, i: void 0, s: n2, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function b(n2) {
  return { t: 1, i: void 0, s: d$1(n2), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function se(n2) {
  return { t: 3, i: void 0, s: "" + n2, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function We(n2) {
  return { t: 4, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ie(n2, e) {
  return { t: 5, i: n2, s: e.toISOString(), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, f: void 0, a: void 0, b: void 0, o: void 0 };
}
function oe(n2, e) {
  return { t: 6, i: n2, s: void 0, l: void 0, c: d$1(e.source), m: e.flags, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ae$1(n2, e) {
  let r = new Uint8Array(e), t = r.length, s = new Array(t);
  for (let i2 = 0; i2 < t; i2++)
    s[i2] = r[i2];
  return { t: 19, i: n2, s, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Ke(n2, e) {
  return f$1(e in L$1, new Error("Only well-known symbols are supported.")), { t: 17, i: n2, s: L$1[e], l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Ee(n2, e) {
  return { t: 18, i: n2, s: d$1(Ce(e)), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function z$1(n2, e, r) {
  return { t: 25, i: n2, s: r, l: void 0, c: d$1(e), m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function le(n2, e, r) {
  return { t: 9, i: n2, s: void 0, l: e.length, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: void 0, b: void 0, o: te$1(e) };
}
function ue(n2, e) {
  return { t: 21, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function de(n2, e, r) {
  return { t: 15, i: n2, s: void 0, l: e.length, c: e.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function ce(n2, e, r) {
  return { t: 16, i: n2, s: void 0, l: e.length, c: e.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function fe(n2, e, r) {
  return { t: 20, i: n2, s: void 0, l: e.byteLength, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function pe(n2, e, r) {
  return { t: 13, i: n2, s: re(e), l: void 0, c: void 0, m: d$1(e.message), p: r, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function me(n2, e, r) {
  return { t: 14, i: n2, s: re(e), l: void 0, c: void 0, m: d$1(e.message), p: r, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ge(n2, e, r) {
  return { t: 7, i: n2, s: void 0, l: e, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: void 0, b: void 0, o: void 0 };
}
function k(n2, e) {
  return { t: 28, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [n2, e], f: void 0, b: void 0, o: void 0 };
}
function T(n2, e) {
  return { t: 30, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [n2, e], f: void 0, b: void 0, o: void 0 };
}
function F$1(n2, e, r) {
  return { t: 31, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: e, b: void 0, o: void 0 };
}
function Se(n2, e) {
  return { t: 32, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function he(n2, e) {
  return { t: 33, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function ye(n2, e) {
  return { t: 34, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function V$1(n2) {
  let e = [], r = -1, t = -1, s = n2[Symbol.iterator]();
  for (; ; )
    try {
      let i2 = s.next();
      if (e.push(i2.value), i2.done) {
        t = e.length - 1;
        break;
      }
    } catch (i2) {
      r = e.length, e.push(i2);
    }
  return { v: e, t: r, d: t };
}
function Le(n2) {
  return () => {
    let e = 0;
    return { [Symbol.iterator]() {
      return this;
    }, next() {
      if (e > n2.d)
        return { done: true, value: void 0 };
      let r = e++, t = n2.v[r];
      if (r === n2.t)
        throw t;
      return { done: r === n2.d, value: t };
    } };
  };
}
var Je = {}, Ye = {};
var Ge = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
var D = class {
  constructor(e) {
    this.marked = /* @__PURE__ */ new Set();
    this.plugins = e.plugins, this.features = 31 ^ (e.disabledFeatures || 0), this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  getIndexedValue(e) {
    let r = this.refs.get(e);
    if (r != null)
      return this.markRef(r), { type: 1, value: We(r) };
    let t = this.refs.size;
    return this.refs.set(e, t), { type: 0, value: t };
  }
  getReference(e) {
    let r = this.getIndexedValue(e);
    return r.type === 1 ? r : Z$1(e) ? { type: 2, value: Ee(r.value, e) } : r;
  }
  getStrictReference(e) {
    f$1(Z$1(e), new Error("Cannot serialize " + typeof e + " without reference ID."));
    let r = this.getIndexedValue(e);
    return r.type === 1 ? r.value : Ee(r.value, e);
  }
  parseFunction(e) {
    return this.getStrictReference(e);
  }
  parseWellKnownSymbol(e) {
    let r = this.getReference(e);
    return r.type !== 0 ? r.value : (f$1(e in L$1, new Error("Cannot serialized unsupported symbol.")), Ke(r.value, e));
  }
  parseSpecialReference(e) {
    let r = this.getIndexedValue(Ge[e]);
    return r.type === 1 ? r.value : { t: 26, i: r.value, s: e, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
  }
  parseIteratorFactory() {
    let e = this.getIndexedValue(Je);
    return e.type === 1 ? e.value : { t: 27, i: e.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseWellKnownSymbol(Symbol.iterator), b: void 0, o: void 0 };
  }
  parseAsyncIteratorFactory() {
    let e = this.getIndexedValue(Ye);
    return e.type === 1 ? e.value : { t: 29, i: e.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], f: void 0, b: void 0, o: void 0 };
  }
  createObjectNode(e, r, t, s) {
    return { t: t ? 11 : 10, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: s, e: void 0, a: void 0, f: void 0, b: void 0, o: te$1(r) };
  }
  createMapNode(e, r, t, s) {
    return { t: 8, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: { k: r, v: t, s }, a: void 0, f: this.parseSpecialReference(0), b: void 0, o: void 0 };
  }
};
function J() {
  let n2, e;
  return { promise: new Promise((r, t) => {
    n2 = r, e = t;
  }), resolve(r) {
    n2(r);
  }, reject(r) {
    e(r);
  } };
}
function Ne(n2) {
  return "__SEROVAL_STREAM__" in n2;
}
function B$1() {
  let n2 = /* @__PURE__ */ new Set(), e = [], r = true, t = false;
  function s(a) {
    for (let l2 of n2.keys())
      l2.next(a);
  }
  function i2(a) {
    for (let l2 of n2.keys())
      l2.throw(a);
  }
  function o2(a) {
    for (let l2 of n2.keys())
      l2.return(a);
  }
  return { __SEROVAL_STREAM__: true, on(a) {
    r && n2.add(a);
    for (let l2 = 0, u2 = e.length; l2 < u2; l2++) {
      let g2 = e[l2];
      l2 === u2 - 1 ? t ? a.return(g2) : a.throw(g2) : a.next(g2);
    }
    return () => {
      r && n2.delete(a);
    };
  }, next(a) {
    r && (e.push(a), s(a));
  }, throw(a) {
    r && (e.push(a), i2(a), r = false, t = false, n2.clear());
  }, return(a) {
    r && (e.push(a), o2(a), r = false, t = true, n2.clear());
  } };
}
function be(n2) {
  let e = B$1(), r = n2[Symbol.asyncIterator]();
  async function t() {
    try {
      let s = await r.next();
      s.done ? e.return(s.value) : (e.next(s.value), await t());
    } catch (s) {
      e.throw(s);
    }
  }
  return t().catch(() => {
  }), e;
}
function He(n2) {
  return () => {
    let e = [], r = [], t = 0, s = -1, i2 = false;
    function o2() {
      for (let l2 = 0, u2 = r.length; l2 < u2; l2++)
        r[l2].resolve({ done: true, value: void 0 });
    }
    n2.on({ next(l2) {
      let u2 = r.shift();
      u2 && u2.resolve({ done: false, value: l2 }), e.push(l2);
    }, throw(l2) {
      let u2 = r.shift();
      u2 && u2.reject(l2), o2(), s = e.length, e.push(l2), i2 = true;
    }, return(l2) {
      let u2 = r.shift();
      u2 && u2.resolve({ done: true, value: l2 }), o2(), s = e.length, e.push(l2);
    } });
    function a() {
      let l2 = t++, u2 = e[l2];
      if (l2 !== s)
        return { done: false, value: u2 };
      if (i2)
        throw u2;
      return { done: true, value: u2 };
    }
    return { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      if (s === -1) {
        let l2 = t++;
        if (l2 >= e.length) {
          let u2 = J();
          return r.push(u2), await u2.promise;
        }
        return { done: false, value: e[l2] };
      }
      return t > s ? { done: true, value: void 0 } : a();
    } };
  };
}
function $e(n2) {
  switch (n2) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new Error(`Unknown TypedArray "${n2}"`);
  }
}
function qe(n2, e) {
  switch (e) {
    case 3:
      return Object.freeze(n2);
    case 1:
      return Object.preventExtensions(n2);
    case 2:
      return Object.seal(n2);
    default:
      return n2;
  }
}
var E$1 = class E {
  constructor(e) {
    this.plugins = e.plugins, this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  deserializeReference(e) {
    return this.assignIndexedValue(e.i, Oe(S$1(e.s)));
  }
  deserializeArray(e) {
    let r = e.l, t = this.assignIndexedValue(e.i, new Array(r)), s;
    for (let i2 = 0; i2 < r; i2++)
      s = e.a[i2], s && (t[i2] = this.deserialize(s));
    return qe(t, e.o), t;
  }
  deserializeProperties(e, r) {
    let t = e.s;
    if (t) {
      let s = e.k, i2 = e.v;
      for (let o2 = 0, a; o2 < t; o2++)
        a = s[o2], typeof a == "string" ? r[S$1(a)] = this.deserialize(i2[o2]) : r[this.deserialize(a)] = this.deserialize(i2[o2]);
    }
    return r;
  }
  deserializeObject(e) {
    let r = this.assignIndexedValue(e.i, e.t === 10 ? {} : /* @__PURE__ */ Object.create(null));
    return this.deserializeProperties(e.p, r), qe(r, e.o), r;
  }
  deserializeDate(e) {
    return this.assignIndexedValue(e.i, new Date(e.s));
  }
  deserializeRegExp(e) {
    return this.assignIndexedValue(e.i, new RegExp(S$1(e.c), e.m));
  }
  deserializeSet(e) {
    let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Set()), t = e.a;
    for (let s = 0, i2 = e.l; s < i2; s++)
      r.add(this.deserialize(t[s]));
    return r;
  }
  deserializeMap(e) {
    let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Map()), t = e.e.k, s = e.e.v;
    for (let i2 = 0, o2 = e.e.s; i2 < o2; i2++)
      r.set(this.deserialize(t[i2]), this.deserialize(s[i2]));
    return r;
  }
  deserializeArrayBuffer(e) {
    let r = new Uint8Array(e.s);
    return this.assignIndexedValue(e.i, r.buffer);
  }
  deserializeTypedArray(e) {
    let r = $e(e.c), t = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new r(t, e.b, e.l));
  }
  deserializeDataView(e) {
    let r = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new DataView(r, e.b, e.l));
  }
  deserializeDictionary(e, r) {
    if (e.p) {
      let t = this.deserializeProperties(e.p, {});
      Object.assign(r, t);
    }
    return r;
  }
  deserializeAggregateError(e) {
    let r = this.assignIndexedValue(e.i, new AggregateError([], S$1(e.m)));
    return this.deserializeDictionary(e, r);
  }
  deserializeError(e) {
    let r = De[e.s], t = this.assignIndexedValue(e.i, new r(S$1(e.m)));
    return this.deserializeDictionary(e, t);
  }
  deserializePromise(e) {
    let r = J(), t = this.assignIndexedValue(e.i, r), s = this.deserialize(e.f);
    return e.s ? r.resolve(s) : r.reject(s), t.promise;
  }
  deserializeBoxed(e) {
    return this.assignIndexedValue(e.i, Object(this.deserialize(e.f)));
  }
  deserializePlugin(e) {
    let r = this.plugins;
    if (r) {
      let t = S$1(e.c);
      for (let s = 0, i2 = r.length; s < i2; s++) {
        let o2 = r[s];
        if (o2.tag === t)
          return this.assignIndexedValue(e.i, o2.deserialize(e.s, this, { id: e.i }));
      }
    }
    throw new Error('Missing plugin for tag "' + e.c + '".');
  }
  deserializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, J()).promise;
  }
  deserializePromiseResolve(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Promise instance.")), r.resolve(this.deserialize(e.a[1]));
  }
  deserializePromiseReject(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Promise instance.")), r.reject(this.deserialize(e.a[1]));
  }
  deserializeIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let r = this.deserialize(e.a[1]);
    return Le(r);
  }
  deserializeAsyncIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let r = this.deserialize(e.a[1]);
    return He(r);
  }
  deserializeStreamConstructor(e) {
    let r = this.assignIndexedValue(e.i, B$1()), t = e.a.length;
    if (t)
      for (let s = 0; s < t; s++)
        this.deserialize(e.a[s]);
    return r;
  }
  deserializeStreamNext(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Stream instance.")), r.next(this.deserialize(e.f));
  }
  deserializeStreamThrow(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Stream instance.")), r.throw(this.deserialize(e.f));
  }
  deserializeStreamReturn(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Stream instance.")), r.return(this.deserialize(e.f));
  }
  deserializeIteratorFactory(e) {
    this.deserialize(e.f);
  }
  deserializeAsyncIteratorFactory(e) {
    this.deserialize(e.a[1]);
  }
  deserialize(e) {
    switch (e.t) {
      case 2:
        return Ve[e.s];
      case 0:
        return e.s;
      case 1:
        return S$1(e.s);
      case 3:
        return BigInt(e.s);
      case 4:
        return this.refs.get(e.i);
      case 18:
        return this.deserializeReference(e);
      case 9:
        return this.deserializeArray(e);
      case 10:
      case 11:
        return this.deserializeObject(e);
      case 5:
        return this.deserializeDate(e);
      case 6:
        return this.deserializeRegExp(e);
      case 7:
        return this.deserializeSet(e);
      case 8:
        return this.deserializeMap(e);
      case 19:
        return this.deserializeArrayBuffer(e);
      case 16:
      case 15:
        return this.deserializeTypedArray(e);
      case 20:
        return this.deserializeDataView(e);
      case 14:
        return this.deserializeAggregateError(e);
      case 13:
        return this.deserializeError(e);
      case 12:
        return this.deserializePromise(e);
      case 17:
        return Te[e.s];
      case 21:
        return this.deserializeBoxed(e);
      case 25:
        return this.deserializePlugin(e);
      case 22:
        return this.deserializePromiseConstructor(e);
      case 23:
        return this.deserializePromiseResolve(e);
      case 24:
        return this.deserializePromiseReject(e);
      case 28:
        return this.deserializeIteratorFactoryInstance(e);
      case 30:
        return this.deserializeAsyncIteratorFactoryInstance(e);
      case 31:
        return this.deserializeStreamConstructor(e);
      case 32:
        return this.deserializeStreamNext(e);
      case 33:
        return this.deserializeStreamThrow(e);
      case 34:
        return this.deserializeStreamReturn(e);
      case 27:
        return this.deserializeIteratorFactory(e);
      case 29:
        return this.deserializeAsyncIteratorFactory(e);
      default:
        throw new Error("invariant");
    }
  }
};
var Y = class extends E$1 {
  constructor(r) {
    super(r);
    this.mode = "vanilla";
    this.marked = new Set(r.markedRefs);
  }
  assignIndexedValue(r, t) {
    return this.marked.has(r) && this.refs.set(r, t), t;
  }
};
var cr = /^[$A-Z_][0-9A-Z_$]*$/i;
function we(n2) {
  let e = n2[0];
  return (e === "$" || e === "_" || e >= "A" && e <= "Z" || e >= "a" && e <= "z") && cr.test(n2);
}
function G$1(n2) {
  switch (n2.t) {
    case "index":
      return n2.s + "=" + n2.v;
    case "set":
      return n2.s + ".set(" + n2.k + "," + n2.v + ")";
    case "add":
      return n2.s + ".add(" + n2.v + ")";
    case "delete":
      return n2.s + ".delete(" + n2.k + ")";
    default:
      return "";
  }
}
function fr(n2) {
  let e = [], r = n2[0];
  for (let t = 1, s = n2.length, i2, o2 = r; t < s; t++)
    i2 = n2[t], i2.t === "index" && i2.v === o2.v ? r = { t: "index", s: i2.s, k: void 0, v: G$1(r) } : i2.t === "set" && i2.s === o2.s ? r = { t: "set", s: G$1(r), k: i2.k, v: i2.v } : i2.t === "add" && i2.s === o2.s ? r = { t: "add", s: G$1(r), k: void 0, v: i2.v } : i2.t === "delete" && i2.s === o2.s ? r = { t: "delete", s: G$1(r), k: i2.k, v: void 0 } : (e.push(r), r = i2), o2 = i2;
  return e.push(r), e;
}
function Ze(n2) {
  if (n2.length) {
    let e = "", r = fr(n2);
    for (let t = 0, s = r.length; t < s; t++)
      e += G$1(r[t]) + ",";
    return e;
  }
}
var pr = "Object.create(null)", mr = "new Set", gr = "new Map", Sr = "Promise.resolve", hr = "Promise.reject", yr = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: void 0 }, R = class {
  constructor(e) {
    this.stack = [];
    this.flags = [];
    this.assignments = [];
    this.plugins = e.plugins, this.features = e.features, this.marked = new Set(e.markedRefs);
  }
  createFunction(e, r) {
    return this.features & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + r : "function(" + e.join(",") + "){return " + r + "}";
  }
  createEffectfulFunction(e, r) {
    return this.features & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  pushObjectFlag(e, r) {
    e !== 0 && (this.markRef(r), this.flags.push({ type: e, value: this.getRefParam(r) }));
  }
  resolveFlags() {
    let e = "";
    for (let r = 0, t = this.flags, s = t.length; r < s; r++) {
      let i2 = t[r];
      e += yr[i2.type] + "(" + i2.value + "),";
    }
    return e;
  }
  resolvePatches() {
    let e = Ze(this.assignments), r = this.resolveFlags();
    return e ? r ? e + r : e : r;
  }
  createAssignment(e, r) {
    this.assignments.push({ t: "index", s: e, k: void 0, v: r });
  }
  createAddAssignment(e, r) {
    this.assignments.push({ t: "add", s: this.getRefParam(e), k: void 0, v: r });
  }
  createSetAssignment(e, r, t) {
    this.assignments.push({ t: "set", s: this.getRefParam(e), k: r, v: t });
  }
  createDeleteAssignment(e, r) {
    this.assignments.push({ t: "delete", s: this.getRefParam(e), k: r, v: void 0 });
  }
  createArrayAssign(e, r, t) {
    this.createAssignment(this.getRefParam(e) + "[" + r + "]", t);
  }
  createObjectAssign(e, r, t) {
    this.createAssignment(this.getRefParam(e) + "." + r, t);
  }
  isIndexedValueInStack(e) {
    return e.t === 4 && this.stack.includes(e.i);
  }
  serializeReference(e) {
    return this.assignIndexedValue(e.i, x$1 + '.get("' + e.s + '")');
  }
  serializeArrayItem(e, r, t) {
    return r ? this.isIndexedValueInStack(r) ? (this.markRef(e), this.createArrayAssign(e, t, this.getRefParam(r.i)), "") : this.serialize(r) : "";
  }
  serializeArray(e) {
    let r = e.i;
    if (e.l) {
      this.stack.push(r);
      let t = e.a, s = this.serializeArrayItem(r, t[0], 0), i2 = s === "";
      for (let o2 = 1, a = e.l, l2; o2 < a; o2++)
        l2 = this.serializeArrayItem(r, t[o2], o2), s += "," + l2, i2 = l2 === "";
      return this.stack.pop(), this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(r, "[" + s + (i2 ? ",]" : "]"));
    }
    return this.assignIndexedValue(r, "[]");
  }
  serializeProperty(e, r, t) {
    if (typeof r == "string") {
      let s = Number(r), i2 = s >= 0 || we(r);
      if (this.isIndexedValueInStack(t)) {
        let o2 = this.getRefParam(t.i);
        return this.markRef(e.i), i2 && s !== s ? this.createObjectAssign(e.i, r, o2) : this.createArrayAssign(e.i, i2 ? r : '"' + r + '"', o2), "";
      }
      return (i2 ? r : '"' + r + '"') + ":" + this.serialize(t);
    }
    return "[" + this.serialize(r) + "]:" + this.serialize(t);
  }
  serializeProperties(e, r) {
    let t = r.s;
    if (t) {
      this.stack.push(e.i);
      let s = r.k, i2 = r.v, o2 = this.serializeProperty(e, s[0], i2[0]);
      for (let a = 1, l2 = o2; a < t; a++)
        l2 = this.serializeProperty(e, s[a], i2[a]), o2 += (l2 && o2 && ",") + l2;
      return this.stack.pop(), "{" + o2 + "}";
    }
    return "{}";
  }
  serializeObject(e) {
    return this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(e.i, this.serializeProperties(e, e.p));
  }
  serializeWithObjectAssign(e, r, t) {
    let s = this.serializeProperties(e, r);
    return s !== "{}" ? "Object.assign(" + t + "," + s + ")" : t;
  }
  serializeStringKeyAssignment(e, r, t, s) {
    let i2 = this.serialize(s), o2 = Number(t), a = o2 >= 0 || we(t);
    if (this.isIndexedValueInStack(s))
      a && o2 !== o2 ? this.createObjectAssign(e.i, t, i2) : this.createArrayAssign(e.i, a ? t : '"' + t + '"', i2);
    else {
      let l2 = this.assignments;
      this.assignments = r, a ? this.createObjectAssign(e.i, t, i2) : this.createArrayAssign(e.i, a ? t : '"' + t + '"', i2), this.assignments = l2;
    }
  }
  serializeAssignment(e, r, t, s) {
    if (typeof t == "string")
      this.serializeStringKeyAssignment(e, r, t, s);
    else {
      let i2 = this.stack;
      this.stack = [];
      let o2 = this.serialize(s);
      this.stack = i2;
      let a = this.assignments;
      this.assignments = r, this.createArrayAssign(e.i, this.serialize(t), o2), this.assignments = a;
    }
  }
  serializeAssignments(e, r) {
    let t = r.s;
    if (t) {
      this.stack.push(e.i);
      let s = [], i2 = r.k, o2 = r.v;
      for (let a = 0; a < t; a++)
        this.serializeAssignment(e, s, i2[a], o2[a]);
      return this.stack.pop(), Ze(s);
    }
  }
  serializeDictionary(e, r) {
    if (e.p)
      if (this.features & 8)
        r = this.serializeWithObjectAssign(e, e.p, r);
      else {
        this.markRef(e.i);
        let t = this.serializeAssignments(e, e.p);
        if (t)
          return "(" + this.assignIndexedValue(e.i, r) + "," + t + this.getRefParam(e.i) + ")";
      }
    return this.assignIndexedValue(e.i, r);
  }
  serializeNullConstructor(e) {
    return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, pr);
  }
  serializeDate(e) {
    return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
  }
  serializeRegExp(e) {
    return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
  }
  serializeSetItem(e, r) {
    return this.isIndexedValueInStack(r) ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(r.i)), "") : this.serialize(r);
  }
  serializeSet(e) {
    let r = mr, t = e.l, s = e.i;
    if (t) {
      let i2 = e.a;
      this.stack.push(s);
      let o2 = this.serializeSetItem(s, i2[0]);
      for (let a = 1, l2 = o2; a < t; a++)
        l2 = this.serializeSetItem(s, i2[a]), o2 += (l2 && o2 && ",") + l2;
      this.stack.pop(), o2 && (r += "([" + o2 + "])");
    }
    return this.assignIndexedValue(s, r);
  }
  serializeMapEntry(e, r, t, s) {
    if (this.isIndexedValueInStack(r)) {
      let i2 = this.getRefParam(r.i);
      if (this.markRef(e), this.isIndexedValueInStack(t)) {
        let a = this.getRefParam(t.i);
        return this.createSetAssignment(e, i2, a), "";
      }
      if (t.t !== 4 && t.i != null && this.isMarked(t.i)) {
        let a = "(" + this.serialize(t) + ",[" + s + "," + s + "])";
        return this.createSetAssignment(e, i2, this.getRefParam(t.i)), this.createDeleteAssignment(e, s), a;
      }
      let o2 = this.stack;
      return this.stack = [], this.createSetAssignment(e, i2, this.serialize(t)), this.stack = o2, "";
    }
    if (this.isIndexedValueInStack(t)) {
      let i2 = this.getRefParam(t.i);
      if (this.markRef(e), r.t !== 4 && r.i != null && this.isMarked(r.i)) {
        let a = "(" + this.serialize(r) + ",[" + s + "," + s + "])";
        return this.createSetAssignment(e, this.getRefParam(r.i), i2), this.createDeleteAssignment(e, s), a;
      }
      let o2 = this.stack;
      return this.stack = [], this.createSetAssignment(e, this.serialize(r), i2), this.stack = o2, "";
    }
    return "[" + this.serialize(r) + "," + this.serialize(t) + "]";
  }
  serializeMap(e) {
    let r = gr, t = e.e.s, s = e.i, i2 = e.f, o2 = this.getRefParam(i2.i);
    if (t) {
      let a = e.e.k, l2 = e.e.v;
      this.stack.push(s);
      let u2 = this.serializeMapEntry(s, a[0], l2[0], o2);
      for (let g2 = 1, Ae = u2; g2 < t; g2++)
        Ae = this.serializeMapEntry(s, a[g2], l2[g2], o2), u2 += (Ae && u2 && ",") + Ae;
      this.stack.pop(), u2 && (r += "([" + u2 + "])");
    }
    return i2.t === 26 && (this.markRef(i2.i), r = "(" + this.serialize(i2) + "," + r + ")"), this.assignIndexedValue(s, r);
  }
  serializeArrayBuffer(e) {
    let r = "new Uint8Array(", t = e.s, s = t.length;
    if (s) {
      r += "[" + t[0];
      for (let i2 = 1; i2 < s; i2++)
        r += "," + t[i2];
      r += "]";
    }
    return this.assignIndexedValue(e.i, r + ").buffer");
  }
  serializeTypedArray(e) {
    return this.assignIndexedValue(e.i, "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeDataView(e) {
    return this.assignIndexedValue(e.i, "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeAggregateError(e) {
    let r = e.i;
    this.stack.push(r);
    let t = 'new AggregateError([],"' + e.m + '")';
    return this.stack.pop(), this.serializeDictionary(e, t);
  }
  serializeError(e) {
    return this.serializeDictionary(e, "new " + X$1[e.s] + '("' + e.m + '")');
  }
  serializePromise(e) {
    let r, t = e.f, s = e.i, i2 = e.s ? Sr : hr;
    if (this.isIndexedValueInStack(t)) {
      let o2 = this.getRefParam(t.i);
      r = i2 + (e.s ? "().then(" + this.createFunction([], o2) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + o2) + ")");
    } else {
      this.stack.push(s);
      let o2 = this.serialize(t);
      this.stack.pop(), r = i2 + "(" + o2 + ")";
    }
    return this.assignIndexedValue(s, r);
  }
  serializeWellKnownSymbol(e) {
    return this.assignIndexedValue(e.i, ke[e.s]);
  }
  serializeFormDataEntry(e, r, t) {
    return this.getRefParam(e) + '.append("' + r + '",' + this.serialize(t) + ")";
  }
  serializeBoxed(e) {
    return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
  }
  serializePlugin(e) {
    let r = this.plugins;
    if (r)
      for (let t = 0, s = r.length; t < s; t++) {
        let i2 = r[t];
        if (i2.tag === e.c)
          return this.assignIndexedValue(e.i, i2.serialize(e.s, this, { id: e.i }));
      }
    throw new Error('Missing plugin for tag "' + e.c + '".');
  }
  getConstructor(e) {
    let r = this.serialize(e);
    return r === this.getRefParam(e.i) ? r : "(" + r + ")";
  }
  serializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()");
  }
  serializePromiseResolve(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializePromiseReject(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializeSpecialReferenceValue(e) {
    switch (e) {
      case 0:
        return "[]";
      case 1:
        return this.createFunction(["s", "f", "p"], "((p=new Promise(" + this.createEffectfulFunction(["a", "b"], "s=a,f=b") + ")).s=s,p.f=f,p)");
      case 2:
        return this.createEffectfulFunction(["p", "d"], 'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');
      case 3:
        return this.createEffectfulFunction(["p", "d"], 'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');
      case 4:
        return this.createFunction(["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],s=0,f=" + this.createEffectfulFunction(["v", "m", "x"], "for(x=0;x<s;x++)l[x]&&l[x][m](v)") + ",n=" + this.createEffectfulFunction(["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],x===z-1?o[s?"return":"throw"](c):o.next(c))') + ",e=" + this.createFunction(["o", "t"], "(a&&(l[t=p++]=o),n(o)," + this.createEffectfulFunction([], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + this.createFunction(["o"], "e(o)") + ",next:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
      default:
        return "";
    }
  }
  serializeSpecialReference(e) {
    return this.assignIndexedValue(e.i, this.serializeSpecialReferenceValue(e.s));
  }
  serializeIteratorFactory(e) {
    let r = "", t = false;
    return e.f.t !== 4 && (this.markRef(e.f.i), r = "(" + this.serialize(e.f) + ",", t = true), r += this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), t && (r += ")"), r;
  }
  serializeIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeAsyncIteratorFactory(e) {
    let r = e.a[0], t = e.a[1], s = "";
    r.t !== 4 && (this.markRef(r.i), s += "(" + this.serialize(r)), t.t !== 4 && (this.markRef(t.i), s += (s ? "," : "(") + this.serialize(t)), s && (s += ",");
    let i2 = this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(t.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(r.i) + "()),t):{done:!0,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
    return s ? s + i2 + ")" : i2;
  }
  serializeAsyncIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeStreamConstructor(e) {
    let r = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"), t = e.a.length;
    if (t) {
      let s = this.serialize(e.a[0]);
      for (let i2 = 1; i2 < t; i2++)
        s += "," + this.serialize(e.a[i2]);
      return "(" + r + "," + s + "," + this.getRefParam(e.i) + ")";
    }
    return r;
  }
  serializeStreamNext(e) {
    return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
  }
  serializeStreamThrow(e) {
    return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
  }
  serializeStreamReturn(e) {
    return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
  }
  serialize(e) {
    switch (e.t) {
      case 2:
        return Fe[e.s];
      case 0:
        return "" + e.s;
      case 1:
        return '"' + e.s + '"';
      case 3:
        return e.s + "n";
      case 4:
        return this.getRefParam(e.i);
      case 18:
        return this.serializeReference(e);
      case 9:
        return this.serializeArray(e);
      case 10:
        return this.serializeObject(e);
      case 11:
        return this.serializeNullConstructor(e);
      case 5:
        return this.serializeDate(e);
      case 6:
        return this.serializeRegExp(e);
      case 7:
        return this.serializeSet(e);
      case 8:
        return this.serializeMap(e);
      case 19:
        return this.serializeArrayBuffer(e);
      case 16:
      case 15:
        return this.serializeTypedArray(e);
      case 20:
        return this.serializeDataView(e);
      case 14:
        return this.serializeAggregateError(e);
      case 13:
        return this.serializeError(e);
      case 12:
        return this.serializePromise(e);
      case 17:
        return this.serializeWellKnownSymbol(e);
      case 21:
        return this.serializeBoxed(e);
      case 22:
        return this.serializePromiseConstructor(e);
      case 23:
        return this.serializePromiseResolve(e);
      case 24:
        return this.serializePromiseReject(e);
      case 25:
        return this.serializePlugin(e);
      case 26:
        return this.serializeSpecialReference(e);
      case 27:
        return this.serializeIteratorFactory(e);
      case 28:
        return this.serializeIteratorFactoryInstance(e);
      case 29:
        return this.serializeAsyncIteratorFactory(e);
      case 30:
        return this.serializeAsyncIteratorFactoryInstance(e);
      case 31:
        return this.serializeStreamConstructor(e);
      case 32:
        return this.serializeStreamNext(e);
      case 33:
        return this.serializeStreamThrow(e);
      case 34:
        return this.serializeStreamReturn(e);
      default:
        throw new Error("invariant");
    }
  }
};
var m$1 = class m extends D {
  parseItems(e) {
    let r = [];
    for (let t = 0, s = e.length; t < s; t++)
      t in e && (r[t] = this.parse(e[t]));
    return r;
  }
  parseArray(e, r) {
    return le(e, r, this.parseItems(r));
  }
  parseProperties(e) {
    let r = Object.entries(e), t = [], s = [];
    for (let o2 = 0, a = r.length; o2 < a; o2++)
      t.push(d$1(r[o2][0])), s.push(this.parse(r[o2][1]));
    let i2 = Symbol.iterator;
    return i2 in e && (t.push(this.parseWellKnownSymbol(i2)), s.push(k(this.parseIteratorFactory(), this.parse(V$1(e))))), i2 = Symbol.asyncIterator, i2 in e && (t.push(this.parseWellKnownSymbol(i2)), s.push(T(this.parseAsyncIteratorFactory(), this.parse(B$1())))), i2 = Symbol.toStringTag, i2 in e && (t.push(this.parseWellKnownSymbol(i2)), s.push(b(e[i2]))), i2 = Symbol.isConcatSpreadable, i2 in e && (t.push(this.parseWellKnownSymbol(i2)), s.push(e[i2] ? v : N)), { k: t, v: s, s: t.length };
  }
  parsePlainObject(e, r, t) {
    return this.createObjectNode(e, r, t, this.parseProperties(r));
  }
  parseBoxed(e, r) {
    return ue(e, this.parse(r.valueOf()));
  }
  parseTypedArray(e, r) {
    return de(e, r, this.parse(r.buffer));
  }
  parseBigIntTypedArray(e, r) {
    return ce(e, r, this.parse(r.buffer));
  }
  parseDataView(e, r) {
    return fe(e, r, this.parse(r.buffer));
  }
  parseError(e, r) {
    let t = O$1(r, this.features);
    return pe(e, r, t ? this.parseProperties(t) : void 0);
  }
  parseAggregateError(e, r) {
    let t = O$1(r, this.features);
    return me(e, r, t ? this.parseProperties(t) : void 0);
  }
  parseMap(e, r) {
    let t = [], s = [];
    for (let [i2, o2] of r.entries())
      t.push(this.parse(i2)), s.push(this.parse(o2));
    return this.createMapNode(e, t, s, r.size);
  }
  parseSet(e, r) {
    let t = [];
    for (let s of r.keys())
      t.push(this.parse(s));
    return ge(e, r.size, t);
  }
  parsePlugin(e, r) {
    let t = this.plugins;
    if (t)
      for (let s = 0, i2 = t.length; s < i2; s++) {
        let o2 = t[s];
        if (o2.parse.sync && o2.test(r))
          return z$1(e, o2.tag, o2.parse.sync(r, this, { id: e }));
      }
  }
  parseStream(e, r) {
    return F$1(e, this.parseSpecialReference(4), []);
  }
  parsePromise(e, r) {
    return { t: 22, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
  }
  parseObject(e, r) {
    if (Array.isArray(r))
      return this.parseArray(e, r);
    if (Ne(r))
      return this.parseStream(e, r);
    let t = this.parsePlugin(e, r);
    if (t)
      return t;
    let s = r.constructor;
    switch (s) {
      case Object:
        return this.parsePlainObject(e, r, false);
      case void 0:
        return this.parsePlainObject(e, r, true);
      case Date:
        return ie(e, r);
      case RegExp:
        return oe(e, r);
      case Error:
      case EvalError:
      case RangeError:
      case ReferenceError:
      case SyntaxError:
      case TypeError:
      case URIError:
        return this.parseError(e, r);
      case Number:
      case Boolean:
      case String:
      case BigInt:
        return this.parseBoxed(e, r);
      case ArrayBuffer:
        return ae$1(e, r);
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Uint8Array:
      case Uint16Array:
      case Uint32Array:
      case Uint8ClampedArray:
      case Float32Array:
      case Float64Array:
        return this.parseTypedArray(e, r);
      case DataView:
        return this.parseDataView(e, r);
      case Map:
        return this.parseMap(e, r);
      case Set:
        return this.parseSet(e, r);
    }
    if (s === Promise || r instanceof Promise)
      return this.parsePromise(e, r);
    let i2 = this.features;
    if (i2 & 16)
      switch (s) {
        case BigInt64Array:
        case BigUint64Array:
          return this.parseBigIntTypedArray(e, r);
      }
    if (i2 & 1 && typeof AggregateError != "undefined" && (s === AggregateError || r instanceof AggregateError))
      return this.parseAggregateError(e, r);
    if (r instanceof Error)
      return this.parseError(e, r);
    if (Symbol.iterator in r || Symbol.asyncIterator in r)
      return this.parsePlainObject(e, r, !!s);
    throw new p$1(r);
  }
  parse(e) {
    switch (typeof e) {
      case "boolean":
        return e ? v : N;
      case "undefined":
        return Q$1;
      case "string":
        return b(e);
      case "number":
        return ne(e);
      case "bigint":
        return se(e);
      case "object": {
        if (e) {
          let r = this.getReference(e);
          return r.type === 0 ? this.parseObject(r.value, e) : r.value;
        }
        return ee$1;
      }
      case "symbol":
        return this.parseWellKnownSymbol(e);
      case "function":
        return this.parseFunction(e);
      default:
        throw new p$1(e);
    }
  }
};
function vn(n2, e = {}) {
  let r = c(e.plugins);
  return new Y({ plugins: r, markedRefs: n2.m }).deserialize(n2.t);
}
var P = class extends R {
  constructor(r) {
    super(r);
    this.mode = "cross";
    this.scopeId = r.scopeId;
  }
  getRefParam(r) {
    return K$1 + "[" + r + "]";
  }
  assignIndexedValue(r, t) {
    return this.getRefParam(r) + "=" + t;
  }
  serializeTop(r) {
    let t = this.serialize(r), s = r.i;
    if (s == null)
      return t;
    let i2 = this.resolvePatches(), o2 = this.getRefParam(s), a = this.scopeId == null ? "" : K$1, l2 = i2 ? t + "," + i2 + o2 : t;
    if (a === "")
      return i2 ? "(" + l2 + ")" : l2;
    let u2 = this.scopeId == null ? "()" : "(" + K$1 + '["' + d$1(this.scopeId) + '"])';
    return "(" + this.createFunction([a], l2) + ")" + u2;
  }
};
var $ = class extends m$1 {
  constructor(r) {
    super(r);
    this.alive = true;
    this.pending = 0;
    this.initial = true;
    this.buffer = [];
    this.onParseCallback = r.onParse, this.onErrorCallback = r.onError, this.onDoneCallback = r.onDone;
  }
  onParseInternal(r, t) {
    try {
      this.onParseCallback(r, t);
    } catch (s) {
      this.onError(s);
    }
  }
  flush() {
    for (let r = 0, t = this.buffer.length; r < t; r++)
      this.onParseInternal(this.buffer[r], false);
  }
  onParse(r) {
    this.initial ? this.buffer.push(r) : this.onParseInternal(r, false);
  }
  onError(r) {
    if (this.onErrorCallback)
      this.onErrorCallback(r);
    else
      throw r;
  }
  onDone() {
    this.onDoneCallback && this.onDoneCallback();
  }
  pushPendingState() {
    this.pending++;
  }
  popPendingState() {
    --this.pending <= 0 && this.onDone();
  }
  parseProperties(r) {
    let t = Object.entries(r), s = [], i2 = [];
    for (let a = 0, l2 = t.length; a < l2; a++)
      s.push(d$1(t[a][0])), i2.push(this.parse(t[a][1]));
    let o2 = Symbol.iterator;
    return o2 in r && (s.push(this.parseWellKnownSymbol(o2)), i2.push(k(this.parseIteratorFactory(), this.parse(V$1(r))))), o2 = Symbol.asyncIterator, o2 in r && (s.push(this.parseWellKnownSymbol(o2)), i2.push(T(this.parseAsyncIteratorFactory(), this.parse(be(r))))), o2 = Symbol.toStringTag, o2 in r && (s.push(this.parseWellKnownSymbol(o2)), i2.push(b(r[o2]))), o2 = Symbol.isConcatSpreadable, o2 in r && (s.push(this.parseWellKnownSymbol(o2)), i2.push(r[o2] ? v : N)), { k: s, v: i2, s: s.length };
  }
  parsePromise(r, t) {
    return t.then((s) => {
      let i2 = this.parseWithError(s);
      i2 && this.onParse({ t: 23, i: r, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(2), i2], f: void 0, b: void 0, o: void 0 }), this.popPendingState();
    }, (s) => {
      if (this.alive) {
        let i2 = this.parseWithError(s);
        i2 && this.onParse({ t: 24, i: r, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(3), i2], f: void 0, b: void 0, o: void 0 });
      }
      this.popPendingState();
    }), this.pushPendingState(), { t: 22, i: r, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
  }
  parsePlugin(r, t) {
    let s = this.plugins;
    if (s)
      for (let i2 = 0, o2 = s.length; i2 < o2; i2++) {
        let a = s[i2];
        if (a.parse.stream && a.test(t))
          return z$1(r, a.tag, a.parse.stream(t, this, { id: r }));
      }
  }
  parseStream(r, t) {
    let s = F$1(r, this.parseSpecialReference(4), []);
    return this.pushPendingState(), t.on({ next: (i2) => {
      if (this.alive) {
        let o2 = this.parseWithError(i2);
        o2 && this.onParse(Se(r, o2));
      }
    }, throw: (i2) => {
      if (this.alive) {
        let o2 = this.parseWithError(i2);
        o2 && this.onParse(he(r, o2));
      }
      this.popPendingState();
    }, return: (i2) => {
      if (this.alive) {
        let o2 = this.parseWithError(i2);
        o2 && this.onParse(ye(r, o2));
      }
      this.popPendingState();
    } }), s;
  }
  parseWithError(r) {
    try {
      return this.parse(r);
    } catch (t) {
      this.onError(t);
      return;
    }
  }
  start(r) {
    let t = this.parseWithError(r);
    t && (this.onParseInternal(t, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
  }
  destroy() {
    this.alive && (this.onDone(), this.alive = false);
  }
  isAlive() {
    return this.alive;
  }
};
var U = class extends $ {
  constructor() {
    super(...arguments);
    this.mode = "cross";
  }
};
function tr(n2, e) {
  let r = c(e.plugins), t = new U({ plugins: r, refs: e.refs, disabledFeatures: e.disabledFeatures, onParse(s, i2) {
    let o2 = new P({ plugins: r, features: t.features, scopeId: e.scopeId, markedRefs: t.marked }), a;
    try {
      a = o2.serializeTop(s);
    } catch (l2) {
      e.onError && e.onError(l2);
      return;
    }
    e.onSerialize(a, i2);
  }, onError: e.onError, onDone: e.onDone });
  return t.start(n2), () => {
    t.destroy();
  };
}
function p2(e) {
  return { detail: e.detail, bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
var E2 = wr({ tag: "seroval-plugins/web/CustomEvent", test(e) {
  return typeof CustomEvent == "undefined" ? false : e instanceof CustomEvent;
}, parse: { sync(e, r) {
  return { type: r.parse(e.type), options: r.parse(p2(e)) };
}, async async(e, r) {
  return { type: await r.parse(e.type), options: await r.parse(p2(e)) };
}, stream(e, r) {
  return { type: r.parse(e.type), options: r.parse(p2(e)) };
} }, serialize(e, r) {
  return "new CustomEvent(" + r.serialize(e.type) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new CustomEvent(r.deserialize(e.type), r.deserialize(e.options));
} }), F = E2;
var I = wr({ tag: "seroval-plugins/web/DOMException", test(e) {
  return typeof DOMException == "undefined" ? false : e instanceof DOMException;
}, parse: { sync(e, r) {
  return { name: r.parse(e.name), message: r.parse(e.message) };
}, async async(e, r) {
  return { name: await r.parse(e.name), message: await r.parse(e.message) };
}, stream(e, r) {
  return { name: r.parse(e.name), message: r.parse(e.message) };
} }, serialize(e, r) {
  return "new DOMException(" + r.serialize(e.message) + "," + r.serialize(e.name) + ")";
}, deserialize(e, r) {
  return new DOMException(r.deserialize(e.message), r.deserialize(e.name));
} }), B = I;
function u(e) {
  return { bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
var L = wr({ tag: "seroval-plugins/web/Event", test(e) {
  return typeof Event == "undefined" ? false : e instanceof Event;
}, parse: { sync(e, r) {
  return { type: r.parse(e.type), options: r.parse(u(e)) };
}, async async(e, r) {
  return { type: await r.parse(e.type), options: await r.parse(u(e)) };
}, stream(e, r) {
  return { type: r.parse(e.type), options: r.parse(u(e)) };
} }, serialize(e, r) {
  return "new Event(" + r.serialize(e.type) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new Event(r.deserialize(e.type), r.deserialize(e.options));
} }), O = L;
var q = wr({ tag: "seroval-plugins/web/File", test(e) {
  return typeof File == "undefined" ? false : e instanceof File;
}, parse: { async async(e, r) {
  return { name: await r.parse(e.name), options: await r.parse({ type: e.type, lastModified: e.lastModified }), buffer: await r.parse(await e.arrayBuffer()) };
} }, serialize(e, r) {
  return "new File([" + r.serialize(e.buffer) + "]," + r.serialize(e.name) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new File([r.deserialize(e.buffer)], r.deserialize(e.name), r.deserialize(e.options));
} }), d = q;
function f(e) {
  let r = [];
  return e.forEach((s, a) => {
    r.push([a, s]);
  }), r;
}
var n = {}, H = wr({ tag: "seroval-plugins/web/FormDataFactory", test(e) {
  return e === n;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(e, r) {
  return r.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f");
}, deserialize() {
  return n;
} }), M = wr({ tag: "seroval-plugins/web/FormData", extends: [d, H], test(e) {
  return typeof FormData == "undefined" ? false : e instanceof FormData;
}, parse: { sync(e, r) {
  return { factory: r.parse(n), entries: r.parse(f(e)) };
}, async async(e, r) {
  return { factory: await r.parse(n), entries: await r.parse(f(e)) };
}, stream(e, r) {
  return { factory: r.parse(n), entries: r.parse(f(e)) };
} }, serialize(e, r) {
  return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.entries) + ")";
}, deserialize(e, r) {
  let s = new FormData(), a = r.deserialize(e.entries);
  for (let t = 0, b2 = a.length; t < b2; t++) {
    let c2 = a[t];
    s.append(c2[0], c2[1]);
  }
  return s;
} }), A = M;
function m2(e) {
  let r = [];
  return e.forEach((s, a) => {
    r.push([a, s]);
  }), r;
}
var _ = wr({ tag: "seroval-plugins/web/Headers", test(e) {
  return typeof Headers == "undefined" ? false : e instanceof Headers;
}, parse: { sync(e, r) {
  return r.parse(m2(e));
}, async async(e, r) {
  return await r.parse(m2(e));
}, stream(e, r) {
  return r.parse(m2(e));
} }, serialize(e, r) {
  return "new Headers(" + r.serialize(e) + ")";
}, deserialize(e, r) {
  return new Headers(r.deserialize(e));
} }), i = _;
var o = {}, V = wr({ tag: "seroval-plugins/web/ReadableStreamFactory", test(e) {
  return e === o;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(e, r) {
  return r.createFunction(["d"], "new ReadableStream({start:" + r.createEffectfulFunction(["c"], "d.on({next:" + r.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + r.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + r.createEffectfulFunction([], "c.close()") + "})") + "})");
}, deserialize() {
  return o;
} });
function g(e) {
  let r = B$1(), s = e.getReader();
  async function a() {
    try {
      let t = await s.read();
      t.done ? r.return(t.value) : (r.next(t.value), await a());
    } catch (t) {
      r.throw(t);
    }
  }
  return a().catch(() => {
  }), r;
}
var G = wr({ tag: "seroval/plugins/web/ReadableStream", extends: [V], test(e) {
  return typeof ReadableStream == "undefined" ? false : e instanceof ReadableStream;
}, parse: { sync(e, r) {
  return { factory: r.parse(o), stream: r.parse(B$1()) };
}, async async(e, r) {
  return { factory: await r.parse(o), stream: await r.parse(g(e)) };
}, stream(e, r) {
  return { factory: r.parse(o), stream: r.parse(g(e)) };
} }, serialize(e, r) {
  return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.stream) + ")";
}, deserialize(e, r) {
  let s = r.deserialize(e.stream);
  return new ReadableStream({ start(a) {
    s.on({ next(t) {
      a.enqueue(t);
    }, throw(t) {
      a.error(t);
    }, return() {
      a.close();
    } });
  } });
} }), l = G;
function z(e, r) {
  return { body: r, cache: e.cache, credentials: e.credentials, headers: e.headers, integrity: e.integrity, keepalive: e.keepalive, method: e.method, mode: e.mode, redirect: e.redirect, referrer: e.referrer, referrerPolicy: e.referrerPolicy };
}
var K = wr({ tag: "seroval-plugins/web/Request", extends: [l, i], test(e) {
  return typeof Request == "undefined" ? false : e instanceof Request;
}, parse: { async async(e, r) {
  return { url: await r.parse(e.url), options: await r.parse(z(e, e.body ? await e.clone().arrayBuffer() : null)) };
}, stream(e, r) {
  return { url: r.parse(e.url), options: r.parse(z(e, e.clone().body)) };
} }, serialize(e, r) {
  return "new Request(" + r.serialize(e.url) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new Request(r.deserialize(e.url), r.deserialize(e.options));
} }), Q = K;
function S(e) {
  return { headers: e.headers, status: e.status, statusText: e.statusText };
}
var X = wr({ tag: "seroval-plugins/web/Response", extends: [l, i], test(e) {
  return typeof Response == "undefined" ? false : e instanceof Response;
}, parse: { async async(e, r) {
  return { body: await r.parse(e.body ? await e.clone().arrayBuffer() : null), options: await r.parse(S(e)) };
}, stream(e, r) {
  return { body: r.parse(e.clone().body), options: r.parse(S(e)) };
} }, serialize(e, r) {
  return "new Response(" + r.serialize(e.body) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new Response(r.deserialize(e.body), r.deserialize(e.options));
} }), Z = X;
var x = wr({ tag: "seroval-plugins/web/URLSearchParams", test(e) {
  return typeof URLSearchParams == "undefined" ? false : e instanceof URLSearchParams;
}, parse: { sync(e, r) {
  return r.parse(e.toString());
}, async async(e, r) {
  return await r.parse(e.toString());
}, stream(e, r) {
  return r.parse(e.toString());
} }, serialize(e, r) {
  return "new URLSearchParams(" + r.serialize(e) + ")";
}, deserialize(e, r) {
  return new URLSearchParams(r.deserialize(e));
} }), ee = x;
var ae = wr({ tag: "seroval-plugins/web/URL", test(e) {
  return typeof URL == "undefined" ? false : e instanceof URL;
}, parse: { sync(e, r) {
  return r.parse(e.href);
}, async async(e, r) {
  return await r.parse(e.href);
}, stream(e, r) {
  return r.parse(e.href);
} }, serialize(e, r) {
  return "new URL(" + r.serialize(e) + ")";
}, deserialize(e, r) {
  return new URL(r.deserialize(e));
} }), te = ae;
const genericMessage = "Invariant Violation";
const {
  setPrototypeOf = function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }
} = Object;
class InvariantError extends Error {
  framesToPop = 1;
  name = genericMessage;
  constructor(message = genericMessage) {
    super(typeof message === "number" ? `${genericMessage}: ${message} (see https://github.com/apollographql/invariant-packages)` : message);
    setPrototypeOf(this, InvariantError.prototype);
  }
}
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
const h3EventSymbol = Symbol("h3Event");
const fetchEventSymbol = Symbol("fetchEvent");
const eventTraps = {
  get(target, prop) {
    if (prop === fetchEventSymbol)
      return target;
    return target[prop] ?? target[h3EventSymbol][prop];
  }
};
function createFetchEvent(event) {
  return new Proxy({
    request: toWebRequest(event),
    clientAddress: getRequestIP(event),
    locals: {},
    // @ts-ignore
    [h3EventSymbol]: event
  }, eventTraps);
}
function getFetchEvent(h3Event) {
  if (!h3Event[fetchEventSymbol]) {
    const fetchEvent = createFetchEvent(h3Event);
    h3Event[fetchEventSymbol] = fetchEvent;
  }
  return h3Event[fetchEventSymbol];
}
function serializeToStream(id, value) {
  return new ReadableStream({
    start(controller) {
      tr(value, {
        scopeId: id,
        plugins: [F, B, O, A, i, l, Q, Z, ee, te],
        onSerialize(data, initial) {
          const result = initial ? `($R["${id}"]=[],${data})` : data;
          controller.enqueue(new TextEncoder().encode(`${result};
`));
        },
        onDone() {
          controller.close();
        },
        onError(error) {
          controller.error(error);
        }
      });
    }
  });
}
async function handleServerFunction(event) {
  invariant(event.method === "POST", `Invalid method ${event.method}. Expected POST.`);
  const serverReference = getHeader(event, "x-server-id");
  const instance = getHeader(event, "x-server-instance");
  const url = getRequestURL(event);
  let filepath, name;
  if (serverReference) {
    invariant(typeof serverReference === "string", "Invalid server function");
    [filepath, name] = serverReference.split("#");
  } else {
    filepath = url.searchParams.get("id");
    name = url.searchParams.get("name");
    if (!filepath || !name)
      throw new Error("Invalid request");
  }
  const action = (await globalThis.MANIFEST["server-fns"].chunks[filepath].import())[name];
  let parsed = [];
  if (!instance) {
    const args = url.searchParams.get("args");
    if (args)
      JSON.parse(args).forEach((arg) => parsed.push(arg));
  }
  const contentType = getHeader(event, "content-type");
  if (contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed.push(await readFormData(event));
  } else {
    parsed = vn(await readBody(event), {
      plugins: [F, B, O, A, i, l, Q, Z, ee, te]
    });
  }
  try {
    const result = await provideRequestEvent(getFetchEvent(event), () => action(...parsed));
    if (!instance) {
      const isError = result instanceof Error;
      const refererUrl = new URL(getHeader(event, "referer"));
      return new Response(null, {
        status: 302,
        headers: {
          Location: refererUrl.toString(),
          ...result ? {
            "Set-Cookie": `flash=${JSON.stringify({
              url: url.pathname + encodeURIComponent(url.search),
              result: isError ? result.message : result,
              error: isError,
              input: [...parsed.slice(0, -1), [...parsed[parsed.length - 1].entries()]]
            })}; Secure; HttpOnly;`
          } : {}
        }
      });
    }
    setHeader(event, "content-type", "text/javascript");
    return serializeToStream(instance, result);
  } catch (x2) {
    if (x2 instanceof Response && x2.status === 302) {
      return new Response(null, {
        status: instance ? 204 : 302,
        headers: {
          Location: x2.headers.get("Location")
        }
      });
    }
    return new Response(serializeToStream(instance, x2), {
      status: 500,
      headers: {
        "Content-Type": "text/javascript"
      }
    });
  }
}
const handler = eventHandler(handleServerFunction);
export {
  handler as default
};
