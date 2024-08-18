var ui = Object.defineProperty;
var gi = (i, e, n) => e in i ? ui(i, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[e] = n;
var Q2 = (i, e, n) => gi(i, typeof e != "symbol" ? e + "" : e, n);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    a(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const d of s.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function a(o) {
    if (o.ep)
      return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function x() {
}
function se(i, e) {
  for (const n in e) i[n] = e[n];
  return (
    /** @type {T & S} */
    i
  );
}
function ai(i) {
  return i();
}
function X2() {
  return /* @__PURE__ */ Object.create(null);
}
function Pn(i) {
  i.forEach(ai);
}
function oi(i) {
  return typeof i == "function";
}
function P(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function vi(i) {
  return Object.keys(i).length === 0;
}
function si(i, ...e) {
  if (i == null) {
    for (const a of e)
      a(void 0);
    return x;
  }
  const n = i.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function mi(i) {
  let e;
  return si(i, (n) => e = n)(), e;
}
function Lt(i, e, n) {
  i.$$.on_destroy.push(si(e, n));
}
function yi(i, e, n, a) {
  if (i) {
    const o = ci(i, e, n, a);
    return i[0](o);
  }
}
function ci(i, e, n, a) {
  return i[1] && a ? se(n.ctx.slice(), i[1](a(e))) : n.ctx;
}
function xi(i, e, n, a) {
  if (i[2] && a) {
    const o = i[2](a(n));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const s = [], d = Math.max(e.dirty.length, o.length);
      for (let c = 0; c < d; c += 1)
        s[c] = e.dirty[c] | o[c];
      return s;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function bi(i, e, n, a, o, s) {
  if (o) {
    const d = ci(e, n, a, s);
    i.p(d, o);
  }
}
function wi(i) {
  if (i.ctx.length > 32) {
    const e = [], n = i.ctx.length / 32;
    for (let a = 0; a < n; a++)
      e[a] = -1;
    return e;
  }
  return -1;
}
function N0(i) {
  const e = {};
  for (const n in i) n[0] !== "$" && (e[n] = i[n]);
  return e;
}
function r(i, e) {
  i.appendChild(e);
}
function G(i, e, n) {
  i.insertBefore(e, n || null);
}
function k(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function qi(i, e) {
  for (let n = 0; n < i.length; n += 1)
    i[n] && i[n].d(e);
}
function w(i) {
  return document.createElement(i);
}
function l(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function W(i) {
  return document.createTextNode(i);
}
function M() {
  return W(" ");
}
function R2() {
  return W("");
}
function Z(i, e, n, a) {
  return i.addEventListener(e, n, a), () => i.removeEventListener(e, n, a);
}
function ki(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function t(i, e, n) {
  n == null ? i.removeAttribute(e) : i.getAttribute(e) !== n && i.setAttribute(e, n);
}
function Z0(i, e) {
  for (const n in e)
    t(i, n, e[n]);
}
function h(i, e, n) {
  i.setAttributeNS("http://www.w3.org/1999/xlink", e, n);
}
function _i(i) {
  return Array.from(i.childNodes);
}
function P2(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function m(i, e, n, a) {
  n == null ? i.style.removeProperty(e) : i.style.setProperty(e, n, "");
}
function Ln(i, e, n) {
  i.classList.toggle(e, !!n);
}
function Gi(i, e, { bubbles: n = !1, cancelable: a = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: n, cancelable: a });
}
let Nl;
function Il(i) {
  Nl = i;
}
function V2() {
  if (!Nl) throw new Error("Function called outside component initialization");
  return Nl;
}
function A2(i) {
  V2().$$.on_mount.push(i);
}
function Ui(i) {
  V2().$$.on_destroy.push(i);
}
function T2() {
  const i = V2();
  return (e, n, { cancelable: a = !1 } = {}) => {
    const o = i.$$.callbacks[e];
    if (o) {
      const s = Gi(
        /** @type {string} */
        e,
        n,
        { cancelable: a }
      );
      return o.slice().forEach((d) => {
        d.call(i, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function $i(i, e) {
  const n = i.$$.callbacks[e.type];
  n && n.slice().forEach((a) => a.call(this, e));
}
const A0 = [], Zl = [];
let T0 = [];
const W2 = [], zi = /* @__PURE__ */ Promise.resolve();
let K2 = !1;
function Si() {
  K2 || (K2 = !0, zi.then(di));
}
function F2(i) {
  T0.push(i);
}
const L2 = /* @__PURE__ */ new Set();
let Y0 = 0;
function di() {
  if (Y0 !== 0)
    return;
  const i = Nl;
  do {
    try {
      for (; Y0 < A0.length; ) {
        const e = A0[Y0];
        Y0++, Il(e), Oi(e.$$);
      }
    } catch (e) {
      throw A0.length = 0, Y0 = 0, e;
    }
    for (Il(null), A0.length = 0, Y0 = 0; Zl.length; ) Zl.pop()();
    for (let e = 0; e < T0.length; e += 1) {
      const n = T0[e];
      L2.has(n) || (L2.add(n), n());
    }
    T0.length = 0;
  } while (A0.length);
  for (; W2.length; )
    W2.pop()();
  K2 = !1, L2.clear(), Il(i);
}
function Oi(i) {
  if (i.fragment !== null) {
    i.update(), Pn(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(F2);
  }
}
function Mi(i) {
  const e = [], n = [];
  T0.forEach((a) => i.indexOf(a) === -1 ? e.push(a) : n.push(a)), n.forEach((a) => a()), T0 = e;
}
const E2 = /* @__PURE__ */ new Set();
let s0;
function Ci() {
  s0 = {
    r: 0,
    c: [],
    p: s0
    // parent group
  };
}
function Ei() {
  s0.r || Pn(s0.c), s0 = s0.p;
}
function j(i, e) {
  i && i.i && (E2.delete(i), i.i(e));
}
function D(i, e, n, a) {
  if (i && i.o) {
    if (E2.has(i)) return;
    E2.add(i), s0.c.push(() => {
      E2.delete(i), a && (n && i.d(1), a());
    }), i.o(e);
  } else a && a();
}
function J2(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function I2(i, e) {
  const n = {}, a = {}, o = { $$scope: 1 };
  let s = i.length;
  for (; s--; ) {
    const d = i[s], c = e[s];
    if (c) {
      for (const f in d)
        f in c || (a[f] = 1);
      for (const f in c)
        o[f] || (n[f] = c[f], o[f] = 1);
      i[s] = c;
    } else
      for (const f in d)
        o[f] = 1;
  }
  for (const d in a)
    d in n || (n[d] = void 0);
  return n;
}
function L(i) {
  i && i.c();
}
function R(i, e, n) {
  const { fragment: a, after_update: o } = i.$$;
  a && a.m(e, n), F2(() => {
    const s = i.$$.on_mount.map(ai).filter(oi);
    i.$$.on_destroy ? i.$$.on_destroy.push(...s) : Pn(s), i.$$.on_mount = [];
  }), o.forEach(F2);
}
function B(i, e) {
  const n = i.$$;
  n.fragment !== null && (Mi(n.after_update), Pn(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ji(i, e) {
  i.$$.dirty[0] === -1 && (A0.push(i), Si(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function F(i, e, n, a, o, s, d = null, c = [-1]) {
  const f = Nl;
  Il(i);
  const p = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: x,
    not_equal: o,
    bound: X2(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: X2(),
    dirty: c,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  d && d(p.root);
  let y = !1;
  if (p.ctx = n ? n(i, e.props || {}, (v, O, ...z) => {
    const S = z.length ? z[0] : O;
    return p.ctx && o(p.ctx[v], p.ctx[v] = S) && (!p.skip_bound && p.bound[v] && p.bound[v](S), y && ji(i, v)), O;
  }) : [], p.update(), y = !0, Pn(p.before_update), p.fragment = a ? a(p.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = _i(e.target);
      p.fragment && p.fragment.l(v), v.forEach(k);
    } else
      p.fragment && p.fragment.c();
    e.intro && j(i.$$.fragment), R(i, e.target, e.anchor), di();
  }
  Il(f);
}
class Y {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Q2(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Q2(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    B(this, 1), this.$destroy = x;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!oi(n))
      return x;
    const a = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return a.push(n), () => {
      const o = a.indexOf(n);
      o !== -1 && a.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !vi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Hi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Hi);
const Di = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3clinearGradient%20id='g'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.1'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='h'%3e%3cstop%20offset='0'%20stop-color='%23eb5e06'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.3'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='.2'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.3'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%3e%3cstop%20offset='0'%20stop-color='%23eb8403'/%3e%3cstop%20offset='1'%20stop-color='%23eb8403'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23a'%20id='i'%20x1='12'%20x2='18.8'%20y1='4'%20y2='15.8'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23b'%20id='j'%20x1='20.6'%20x2='14'%20y1='12.3'%20y2='16'%20gradientTransform='rotate(180%2012%20526.2)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23c'%20id='l'%20x1='7'%20x2='11.3'%20y1='1038'%20y2='1042.2'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23d'%20id='k'%20x1='18'%20x2='14.8'%20y1='1039.3'%20y2='1039.3'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='n'%20x1='6'%20x2='10.2'%20y1='1038'%20y2='1042.1'%20gradientTransform='rotate(180%2012%201040.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23f'%20id='m'%20x1='7.5'%20x2='18.2'%20y1='8.8'%20y2='11.7'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23g'%20id='o'%20x1='7.5'%20x2='21.2'%20y1='8.8'%20y2='12.5'%20gradientTransform='translate(0%201028.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23h'%20id='p'%20x1='6.6'%20x2='15.9'%20y1='1038.8'%20y2='1044.5'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='q'%20x1='31.4'%20x2='59.3'%20y1='1037.7'%20y2='1037.7'%20gradientUnits='userSpaceOnUse'/%3e%3c/defs%3e%3cpath%20fill='%23fe9e01'%20d='M2%2012c0-1.4%203.8-8%205-8.7a24%2024%200%200%201%2010%200c1.2.7%205%207.3%205%208.7%200%201.4-3.8%208-5%208.7a24%2024%200%200%201-10%200C5.8%2020%202%2013.4%202%2012z'/%3e%3cpath%20fill='none'%20d='M18%2012a15%2015%200%200%201-3%205.2c-.7.4-5.3.4-6%200A15%2015%200%200%201%206%2012a15%2015%200%200%201%203-5.2c.7-.4%205.3-.4%206%200%20.7.4%203%204.4%203%205.2z'/%3e%3cpath%20fill='url(%23i)'%20fill-rule='evenodd'%20d='M12%202.8a19.6%2019.6%200%200%200-3.7.3c1.7.1%204.3%201%205.5%202A30.3%2030.3%200%200%201%2018%2012c0%201-2.2%204.8-3%205.3l2%203.4a24%2024%200%200%200%205-8.6c0-1.4-3.8-8-5-8.7-.6-.3-2.8-.5-5-.5z'/%3e%3cpath%20fill='url(%23j)'%20fill-rule='evenodd'%20d='M12%201049.6a19.6%2019.6%200%200%200%203.7-.4c-1.7%200-4.3-1-5.5-2a30.3%2030.3%200%200%201-4.2-6.8c0-.9%202.2-4.7%203-5.2l-2-3.5a24%2024%200%200%200-5%208.7c0%201.4%203.8%208%205%208.6.6.4%202.8.6%205%20.6z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23k)'%20d='M18%201040.4a16%2016%200%200%201-3%205.2c-.7.4-5.3.4-6%200a16%2016%200%200%201-3-5.2c0-.9%202.3-4.8%203-5.2.7-.5%205.3-.5%206%200%20.7.4%203%204.3%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23l)'%20d='M9%201035.2c-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23m)'%20d='M9%206.8c-.8.5-3%204.4-3%205.2a30.3%2030.3%200%200%200%202.2%204.3c.7%201.1%201.4%202%202%202.5%201.2%201.1%203.8%202%205.5%202h1l.3-.1c1.2-.7%205-7.3%205-8.7l-4-.1v.1a15%2015%200%200%201-3%205.2%2015%2015%200%200%201-3-5.2%2015%2015%200%200%200-3-5.2z'/%3e%3cpath%20fill='url(%23n)'%20d='M15%201045.6c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23o)'%20stroke='url(%23p)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-opacity='.3'%20stroke-width='.1'%20d='M18%201040.2h0v.2a16%2016%200%200%201-3%205.2%2016%2016%200%200%201-3-5.2c0-.9-2.3-4.8-3-5.2h0s0%200%200%200c-.8.5-3%204.3-3%205.2a30.3%2030.3%200%200%200%202.2%204.3s0%200%200%200%200%200%200%200c.7%201%201.4%202%202%202.5%201.2%201%203.8%202%205.5%202h1l.3-.2'%20transform='translate(0%20-1028.4)'/%3e%3cg%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20fill='%23252127'%20d='M38.5%201038.7q0%20.7-.4%201.3l-.5.7-.7.5-.6.4%202.7%205.4h-2.6l-2.4-5.3h-2.6v5.3H29v-13.4h6.3q1%200%201.6.5l.7.6.5.6q.4.6.4%201.4v2zm-2.3%200v-2.1q-.4-.7-.8-.8h-4v3.7h4l.4-.3.4-.5z'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3cpath%20fill='url(%23q)'%20fill-rule='evenodd'%20d='M31.4%201035.8v3.7h25.9l2-3.7h-28z'%20transform='translate(0%20-1028.4)'/%3e%3cg%20fill='%23252127'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20d='M50.3%201047H48l-.1-.5q-1%20.6-1.4.6h-1.7q-1%200-1.7-.4-.6-.5-1-1.1-.4-.6-.4-1.4v-6.9H44v7l.8.7h1.7l.6-.3.7-.6v-6.8h2.3v7.7l.2%202z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20d='M63.2%201047h-2.9l-4.7-5.6h-.2v5.6H53v-13.4h2.4v5.6h.2l2.4-2.8q1.5-2%202.3-2.8h2.9l-5.6%206.7%202.5%203%203.1%203.7z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3c/svg%3e";
function Ri(i) {
  let e;
  return {
    c() {
      e = w("div"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" class="svelte-rvpkcl"><defs><filter id="blur"><feGaussianBlur stdDeviation="12"></feGaussianBlur></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad" class="svelte-rvpkcl"><stop stop-color="hsl(105, 69%, 40%)" stop-opacity="1" offset="0%" class="svelte-rvpkcl"></stop><stop stop-color="hsl(105, 69%, 60%)" stop-opacity="1" offset="100%" class="svelte-rvpkcl"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round" filter="url(#blur)"><path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="1.00"></path><path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.96"></path><path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.92"></path><path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.89"></path><path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.85"></path><path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.81"></path><path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.77"></path><path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.73"></path><path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.70"></path><path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.66"></path><path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.62"></path><path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.58"></path><path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.54"></path><path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.51"></path><path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.47"></path><path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.43"></path><path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.39"></path><path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.35"></path><path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.32"></path><path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.28"></path><path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.24"></path><path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.20"></path><path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.16"></path><path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.13"></path><path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.09"></path></g></svg>', t(e, "class", "bg-img svelte-rvpkcl");
    },
    m(n, a) {
      G(n, e, a);
    },
    p: x,
    i: x,
    o: x,
    d(n) {
      n && k(e);
    }
  };
}
class Bi extends Y {
  constructor(e) {
    super(), F(this, e, null, Ri, P, {});
  }
}
function Qi() {
  var i = document.createElement("script");
  i.setAttribute("async", ""), i.setAttribute("type", "text/javascript"), i.setAttribute("src", "calcemu.js"), document.body.appendChild(i);
}
function Li(i) {
  let e;
  return {
    c() {
      e = w("div"), e.innerHTML = "", t(e, "id", "buttons");
    },
    m(n, a) {
      G(n, e, a);
    },
    p: x,
    i: x,
    o: x,
    d(n) {
      n && k(e);
    }
  };
}
class Pi extends Y {
  constructor(e) {
    super(), F(this, e, null, Li, P, {});
  }
}
const V0 = [];
function Ar(i, e = x) {
  let n;
  const a = /* @__PURE__ */ new Set();
  function o(c) {
    if (P(i, c) && (i = c, n)) {
      const f = !V0.length;
      for (const p of a)
        p[1](), V0.push(p, i);
      if (f) {
        for (let p = 0; p < V0.length; p += 2)
          V0[p][0](V0[p + 1]);
        V0.length = 0;
      }
    }
  }
  function s(c) {
    o(c(i));
  }
  function d(c, f = x) {
    const p = [c, f];
    return a.add(p), a.size === 1 && (n = e(o, s) || x), c(i), () => {
      a.delete(p), a.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: s, subscribe: d };
}
const oe = Ar("empty"), ti = Ar(null), Ki = Ar(!1), j2 = Ar(""), fi = Ar(!1), H2 = Ar(!1), I0 = Ar(!1), D2 = Ar(null), Y2 = Ar(null);
function Fi(i) {
  let e, n, a;
  return {
    c() {
      e = l("svg"), n = l("path"), a = l("path"), t(n, "fill", "currentColor"), t(n, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      G(o, e, s), r(e, n), r(e, a);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && k(e);
    }
  };
}
class Yi extends Y {
  constructor(e) {
    super(), F(this, e, null, Fi, P, {});
  }
}
function ei(i) {
  let e, n, a, o, s, d, c = (
    /*$traceback*/
    i[2].name + ""
  ), f, p, y, v = (
    /*$traceback*/
    i[2].message + ""
  ), O, z, S;
  return n = new Yi({}), {
    c() {
      e = w("div"), L(n.$$.fragment), a = M(), o = w("pre"), s = W("            "), d = w("code"), f = W(c), p = W(`\r
            `), y = w("code"), O = W(v), z = W(`\r
        `), t(d, "class", "name svelte-s5x38s"), t(y, "class", "message svelte-s5x38s"), t(o, "class", "svelte-s5x38s"), t(e, "class", "bsod svelte-s5x38s");
    },
    m(_, b) {
      G(_, e, b), R(n, e, null), r(e, a), r(e, o), r(o, s), r(o, d), r(d, f), r(o, p), r(o, y), r(y, O), r(o, z), S = !0;
    },
    p(_, b) {
      (!S || b & /*$traceback*/
      4) && c !== (c = /*$traceback*/
      _[2].name + "") && P2(f, c), (!S || b & /*$traceback*/
      4) && v !== (v = /*$traceback*/
      _[2].message + "") && P2(O, v);
    },
    i(_) {
      S || (j(n.$$.fragment, _), S = !0);
    },
    o(_) {
      D(n.$$.fragment, _), S = !1;
    },
    d(_) {
      _ && k(e), B(n);
    }
  };
}
function Vi(i) {
  let e, n, a, o, s, d, c = (
    /*crashed*/
    i[1] && ei(i)
  );
  return {
    c() {
      e = w("canvas"), n = M(), c && c.c(), a = R2(), t(e, "class", "emscripten svelte-s5x38s"), t(e, "id", "canvas"), t(e, "tabindex", "-1");
    },
    m(f, p) {
      G(f, e, p), i[5](e), G(f, n, p), c && c.m(f, p), G(f, a, p), o = !0, s || (d = Z(e, "contextmenu", ki(
        /*contextmenu_handler*/
        i[4]
      )), s = !0);
    },
    p(f, [p]) {
      /*crashed*/
      f[1] ? c ? (c.p(f, p), p & /*crashed*/
      2 && j(c, 1)) : (c = ei(f), c.c(), j(c, 1), c.m(a.parentNode, a)) : c && (Ci(), D(c, 1, 1, () => {
        c = null;
      }), Ei());
    },
    i(f) {
      o || (j(c), o = !0);
    },
    o(f) {
      D(c), o = !1;
    },
    d(f) {
      f && (k(e), k(n), k(a)), i[5](null), c && c.d(f), s = !1, d();
    }
  };
}
function Ai(i, e, n) {
  let a, o, s;
  Lt(i, oe, (p) => n(3, o = p)), Lt(i, j2, (p) => n(2, s = p));
  let d;
  A2(() => {
    window.Module.canvas = d, d.addEventListener(
      "webglcontextlost",
      (p) => {
        alert("WebGL context lost. You will need to reload the page."), p.preventDefault();
      },
      !1
    );
  });
  function c(p) {
    $i.call(this, i, p);
  }
  function f(p) {
    Zl[p ? "unshift" : "push"](() => {
      d = p, n(0, d);
    });
  }
  return i.$$.update = () => {
    i.$$.dirty & /*$state*/
    8 && n(1, a = o === "crashed");
  }, [d, a, s, o, c, f];
}
class Ti extends Y {
  constructor(e) {
    super(), F(this, e, Ai, Vi, P, {});
  }
}
function Ii(i) {
  let e, n, a, o, s, d, c;
  return {
    c() {
      e = w("figure"), e.innerHTML = '<div class="spinner"></div><center style="margin-top:0.5em"><strong>emscripten</strong></center>', n = M(), a = w("div"), a.textContent = "Downloading...", o = M(), s = w("div"), s.innerHTML = '<progress value="0" max="100" id="progress" hidden=""></progress>', d = M(), c = w("textarea"), m(e, "overflow", "visible"), t(e, "id", "spinner"), t(a, "class", "emscripten"), t(a, "id", "status"), t(s, "class", "emscripten"), t(c, "class", "emscripten"), t(c, "id", "output"), t(c, "rows", "8");
    },
    m(f, p) {
      G(f, e, p), G(f, n, p), G(f, a, p), G(f, o, p), G(f, s, p), G(f, d, p), G(f, c, p);
    },
    p: x,
    i: x,
    o: x,
    d(f) {
      f && (k(e), k(n), k(a), k(o), k(s), k(d), k(c));
    }
  };
}
class Ni extends Y {
  constructor(e) {
    super(), F(this, e, null, Ii, P, {});
  }
}
function Zi(i) {
  let e, n, a;
  return {
    c() {
      e = l("svg"), n = l("path"), a = l("path"), t(n, "fill", "currentColor"), t(n, "fill-rule", "evenodd"), t(n, "d", "M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22"), t(n, "clip-rule", "evenodd"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      G(o, e, s), r(e, n), r(e, a);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && k(e);
    }
  };
}
class Xi extends Y {
  constructor(e) {
    super(), F(this, e, null, Zi, P, {});
  }
}
function Wi(i) {
  let e, n, a, o;
  return {
    c() {
      e = l("svg"), n = l("path"), a = l("path"), o = l("path"), t(n, "fill", "currentColor"), t(n, "d", "M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"), t(a, "clip-rule", "evenodd"), t(o, "fill", "currentColor"), t(o, "d", "m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859"), t(o, "opacity", "0.4"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      G(s, e, d), r(e, n), r(e, a), r(e, o);
    },
    p: x,
    i: x,
    o: x,
    d(s) {
      s && k(e);
    }
  };
}
class Ji extends Y {
  constructor(e) {
    super(), F(this, e, null, Wi, P, {});
  }
}
function ta(i) {
  let e, n, a;
  return {
    c() {
      e = l("svg"), n = l("path"), a = l("path"), t(n, "fill", "currentColor"), t(n, "d", "M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06"), t(a, "clip-rule", "evenodd"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      G(o, e, s), r(e, n), r(e, a);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && k(e);
    }
  };
}
class ea extends Y {
  constructor(e) {
    super(), F(this, e, null, ta, P, {});
  }
}
function ra(i) {
  let e, n, a, o, s;
  return {
    c() {
      e = l("svg"), n = l("path"), a = l("path"), o = l("path"), s = l("path"), t(n, "fill", "currentColor"), t(n, "fill-rule", "evenodd"), t(n, "d", "M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938"), t(n, "clip-rule", "evenodd"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06q.333.684.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a4 4 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"), t(o, "fill", "currentColor"), t(o, "d", "M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z"), t(o, "opacity", "0.5"), t(s, "fill", "currentColor"), t(s, "fill-rule", "evenodd"), t(s, "d", "M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75"), t(s, "clip-rule", "evenodd"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24"), t(e, "class", "svelte-1v14ixl"), Ln(
        e,
        "active",
        /*active*/
        i[0]
      );
    },
    m(d, c) {
      G(d, e, c), r(e, n), r(e, a), r(e, o), r(e, s);
    },
    p(d, [c]) {
      c & /*active*/
      1 && Ln(
        e,
        "active",
        /*active*/
        d[0]
      );
    },
    i: x,
    o: x,
    d(d) {
      d && k(e);
    }
  };
}
function na(i, e, n) {
  let { active: a = !1 } = e;
  return i.$$set = (o) => {
    "active" in o && n(0, a = o.active);
  }, [a];
}
let la = class extends Y {
  constructor(e) {
    super(), F(this, e, na, ra, P, { active: 0 });
  }
};
function ia(i) {
  let e, n, a, o, s, d;
  return {
    c() {
      e = l("svg"), n = l("g"), a = l("path"), o = l("path"), s = l("path"), d = l("path"), t(a, "d", "M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"), t(a, "opacity", "0.5"), t(o, "stroke-linecap", "round"), t(o, "stroke-linejoin", "round"), t(o, "d", "M12.429 10L11 12h2l-1.429 2"), t(s, "d", "M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"), t(d, "stroke-linecap", "round"), t(d, "d", "M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"), t(d, "opacity", "0.5"), t(n, "fill", "none"), t(n, "stroke", "currentColor"), t(n, "stroke-width", "1.5"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(c, f) {
      G(c, e, f), r(e, n), r(n, a), r(n, o), r(n, s), r(n, d);
    },
    p: x,
    i: x,
    o: x,
    d(c) {
      c && k(e);
    }
  };
}
class aa extends Y {
  constructor(e) {
    super(), F(this, e, null, ia, P, {});
  }
}
function oa(i) {
  let e, n, a;
  return {
    c() {
      e = l("svg"), n = l("path"), a = l("path"), t(n, "fill", "currentColor"), t(n, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0"), t(a, "clip-rule", "evenodd"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      G(o, e, s), r(e, n), r(e, a);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && k(e);
    }
  };
}
class sa extends Y {
  constructor(e) {
    super(), F(this, e, null, oa, P, {});
  }
}
function ca(i) {
  let e, n, a;
  return {
    c() {
      e = l("svg"), n = l("path"), a = l("path"), t(n, "fill", "currentColor"), t(n, "fill-rule", "evenodd"), t(n, "d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"), t(n, "clip-rule", "evenodd"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      G(o, e, s), r(e, n), r(e, a);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && k(e);
    }
  };
}
class da extends Y {
  constructor(e) {
    super(), F(this, e, null, ca, P, {});
  }
}
function fa(i) {
  let e, n, a, o, s;
  const d = (
    /*#slots*/
    i[4].default
  ), c = yi(
    d,
    i,
    /*$$scope*/
    i[3],
    null
  );
  return {
    c() {
      e = w("div"), n = w("div"), a = M(), c && c.c(), t(n, "class", "tip svelte-hgj5m"), t(e, "class", o = "popover " + /*visible*/
      (i[0] ? "visible" : "") + " svelte-hgj5m"), m(
        e,
        "--x",
        /*position*/
        i[2].x + "px"
      ), m(
        e,
        "--y",
        /*position*/
        i[2].y + "px"
      );
    },
    m(f, p) {
      G(f, e, p), r(e, n), r(e, a), c && c.m(e, null), i[5](e), s = !0;
    },
    p(f, [p]) {
      c && c.p && (!s || p & /*$$scope*/
      8) && bi(
        c,
        d,
        f,
        /*$$scope*/
        f[3],
        s ? xi(
          d,
          /*$$scope*/
          f[3],
          p,
          null
        ) : wi(
          /*$$scope*/
          f[3]
        ),
        null
      ), (!s || p & /*visible*/
      1 && o !== (o = "popover " + /*visible*/
      (f[0] ? "visible" : "") + " svelte-hgj5m")) && t(e, "class", o), (!s || p & /*position*/
      4) && m(
        e,
        "--x",
        /*position*/
        f[2].x + "px"
      ), (!s || p & /*position*/
      4) && m(
        e,
        "--y",
        /*position*/
        f[2].y + "px"
      );
    },
    i(f) {
      s || (j(c, f), s = !0);
    },
    o(f) {
      D(c, f), s = !1;
    },
    d(f) {
      f && k(e), c && c.d(f), i[5](null);
    }
  };
}
function pa(i, e, n) {
  let { $$slots: a = {}, $$scope: o } = e, s, { visible: d = !1 } = e, c, f = { x: 0, y: 0 };
  A2(() => {
    if (s = c.parentElement, s) {
      const y = s.getBoundingClientRect(), v = c.getBoundingClientRect();
      n(2, f = {
        x: y.left + window.scrollX,
        y: y.top + window.scrollY
        // + (rect.height - popoverRect.height) / 2
      }), f.x + v.width > window.innerWidth ? n(2, f.x -= v.width, f) : n(2, f.x += y.width, f);
    }
  });
  function p(y) {
    Zl[y ? "unshift" : "push"](() => {
      c = y, n(1, c);
    });
  }
  return i.$$set = (y) => {
    "visible" in y && n(0, d = y.visible), "$$scope" in y && n(3, o = y.$$scope);
  }, [d, c, f, o, a, p];
}
class C2 extends Y {
  constructor(e) {
    super(), F(this, e, pa, fa, P, { visible: 0 });
  }
}
function ha(i) {
  let e;
  return {
    c() {
      e = W("Start by picking a BIN program");
    },
    m(n, a) {
      G(n, e, a);
    },
    d(n) {
      n && k(e);
    }
  };
}
function ua(i) {
  let e;
  return {
    c() {
      e = W(
        /*$copyScreenFeedback*/
        i[5]
      );
    },
    m(n, a) {
      G(n, e, a);
    },
    p(n, a) {
      a & /*$copyScreenFeedback*/
      32 && P2(
        e,
        /*$copyScreenFeedback*/
        n[5]
      );
    },
    d(n) {
      n && k(e);
    }
  };
}
function ga(i) {
  let e;
  return {
    c() {
      e = W("Check why it crashed here");
    },
    m(n, a) {
      G(n, e, a);
    },
    d(n) {
      n && k(e);
    }
  };
}
function va(i) {
  let e;
  return {
    c() {
      e = W("Now let's start the program");
    },
    m(n, a) {
      G(n, e, a);
    },
    d(n) {
      n && k(e);
    }
  };
}
function ma(i) {
  let e, n, a, o, s, d, c, f, p, y, v, O, z, S, _, b, U, H, E, A, C, g, K, q, Q, Ct, Kn, Pt, ce, Tr, N, J, At, Kt, de, Fn, Ft, Tt, tt, Yt, Et, Ir, Nr;
  return a = new C2({
    props: {
      visible: (
        /*loadHint*/
        i[4]
      ),
      $$slots: { default: [ha] },
      $$scope: { ctx: i }
    }
  }), s = new Xi({}), O = new C2({
    props: {
      visible: (
        /*$copyScreenFeedback*/
        i[5] !== null
      ),
      $$slots: { default: [ua] },
      $$scope: { ctx: i }
    }
  }), S = new Ji({}), U = new ea({}), g = new la({ props: { active: (
    /*$debugging*/
    i[6]
  ) } }), Ct = new C2({
    props: {
      visible: (
        /*crashedHint*/
        i[1] && !/*$tracing*/
        i[7]
      ),
      $$slots: { default: [ga] },
      $$scope: { ctx: i }
    }
  }), Pt = new aa({}), J = new C2({
    props: {
      visible: (
        /*loaded*/
        i[3]
      ),
      $$slots: { default: [va] },
      $$scope: { ctx: i }
    }
  }), Kt = new da({}), Yt = new sa({}), {
    c() {
      e = w("div"), n = w("button"), L(a.$$.fragment), o = M(), L(s.$$.fragment), d = M(), c = w("input"), f = M(), p = w("div"), y = M(), v = w("button"), L(O.$$.fragment), z = M(), L(S.$$.fragment), _ = M(), b = w("button"), L(U.$$.fragment), H = M(), E = w("div"), A = M(), C = w("button"), L(g.$$.fragment), q = M(), Q = w("button"), L(Ct.$$.fragment), Kn = M(), L(Pt.$$.fragment), Tr = M(), N = w("button"), L(J.$$.fragment), At = M(), L(Kt.$$.fragment), Fn = M(), Ft = w("div"), Tt = M(), tt = w("button"), L(Yt.$$.fragment), t(c, "type", "file"), t(c, "id", "fileInput"), m(c, "display", "none"), t(n, "class", "toolbar-action"), t(n, "type", "button"), t(n, "tabindex", "0"), t(n, "id", "btn_pickFile"), t(p, "class", "separator"), t(p, "role", "separator"), t(p, "data-orientation", "horizontal"), t(p, "aria-orientation", "horizontal"), t(v, "class", "toolbar-action"), t(v, "type", "button"), t(v, "tabindex", "0"), t(v, "id", "btn_copyScreen"), t(b, "class", "toolbar-action"), t(b, "type", "button"), t(b, "tabindex", "0"), t(b, "id", "btn_saveScreen"), t(E, "class", "separator"), t(E, "role", "separator"), t(E, "data-orientation", "horizontal"), t(E, "aria-orientation", "horizontal"), t(C, "class", "toolbar-action"), t(C, "type", "button"), t(C, "tabindex", "0"), t(C, "id", "btn_debug"), C.disabled = K = !/*loaded*/
      i[3], t(Q, "class", "toolbar-action"), t(Q, "type", "button"), t(Q, "tabindex", "0"), t(Q, "id", "btn_dump"), Q.disabled = ce = !/*loaded*/
      i[3] && !/*crashed*/
      i[0], t(N, "class", "toolbar-action"), t(N, "type", "button"), t(N, "tabindex", "0"), t(N, "id", "btn_run"), N.disabled = de = !/*loaded*/
      i[3], t(Ft, "class", "separator"), t(Ft, "role", "separator"), t(Ft, "data-orientation", "horizontal"), t(Ft, "aria-orientation", "horizontal"), t(tt, "class", "toolbar-action"), t(tt, "type", "button"), t(tt, "tabindex", "0"), t(tt, "id", "btn_fullscreen"), t(e, "class", "toolbar");
    },
    m($, V) {
      G($, e, V), r(e, n), R(a, n, null), r(n, o), R(s, n, null), r(n, d), r(n, c), i[17](c), r(e, f), r(e, p), r(e, y), r(e, v), R(O, v, null), r(v, z), R(S, v, null), r(e, _), r(e, b), R(U, b, null), r(e, H), r(e, E), r(e, A), r(e, C), R(g, C, null), r(e, q), r(e, Q), R(Ct, Q, null), r(Q, Kn), R(Pt, Q, null), r(e, Tr), r(e, N), R(J, N, null), r(N, At), R(Kt, N, null), r(e, Fn), r(e, Ft), r(e, Tt), r(e, tt), R(Yt, tt, null), Et = !0, Ir || (Nr = [
        Z(
          c,
          "change",
          /*handleFile*/
          i[9]
        ),
        Z(
          n,
          "click",
          /*pickFile*/
          i[8]
        ),
        Z(
          v,
          "click",
          /*doCopyScreen*/
          i[10]
        ),
        Z(
          b,
          "click",
          /*doSaveScreen*/
          i[11]
        ),
        Z(
          C,
          "click",
          /*doDebug*/
          i[15]
        ),
        Z(
          Q,
          "click",
          /*doDump*/
          i[14]
        ),
        Z(
          N,
          "click",
          /*doRun*/
          i[12]
        ),
        Z(
          tt,
          "click",
          /*doFullscreen*/
          i[13]
        )
      ], Ir = !0);
    },
    p($, [V]) {
      const fe = {};
      V & /*loadHint*/
      16 && (fe.visible = /*loadHint*/
      $[4]), V & /*$$scope*/
      1048576 && (fe.$$scope = { dirty: V, ctx: $ }), a.$set(fe);
      const Zr = {};
      V & /*$copyScreenFeedback*/
      32 && (Zr.visible = /*$copyScreenFeedback*/
      $[5] !== null), V & /*$$scope, $copyScreenFeedback*/
      1048608 && (Zr.$$scope = { dirty: V, ctx: $ }), O.$set(Zr);
      const Yn = {};
      V & /*$debugging*/
      64 && (Yn.active = /*$debugging*/
      $[6]), g.$set(Yn), (!Et || V & /*loaded*/
      8 && K !== (K = !/*loaded*/
      $[3])) && (C.disabled = K);
      const pe = {};
      V & /*crashedHint, $tracing*/
      130 && (pe.visible = /*crashedHint*/
      $[1] && !/*$tracing*/
      $[7]), V & /*$$scope*/
      1048576 && (pe.$$scope = { dirty: V, ctx: $ }), Ct.$set(pe), (!Et || V & /*loaded, crashed*/
      9 && ce !== (ce = !/*loaded*/
      $[3] && !/*crashed*/
      $[0])) && (Q.disabled = ce);
      const Xr = {};
      V & /*loaded*/
      8 && (Xr.visible = /*loaded*/
      $[3]), V & /*$$scope*/
      1048576 && (Xr.$$scope = { dirty: V, ctx: $ }), J.$set(Xr), (!Et || V & /*loaded*/
      8 && de !== (de = !/*loaded*/
      $[3])) && (N.disabled = de);
    },
    i($) {
      Et || (j(a.$$.fragment, $), j(s.$$.fragment, $), j(O.$$.fragment, $), j(S.$$.fragment, $), j(U.$$.fragment, $), j(g.$$.fragment, $), j(Ct.$$.fragment, $), j(Pt.$$.fragment, $), j(J.$$.fragment, $), j(Kt.$$.fragment, $), j(Yt.$$.fragment, $), Et = !0);
    },
    o($) {
      D(a.$$.fragment, $), D(s.$$.fragment, $), D(O.$$.fragment, $), D(S.$$.fragment, $), D(U.$$.fragment, $), D(g.$$.fragment, $), D(Ct.$$.fragment, $), D(Pt.$$.fragment, $), D(J.$$.fragment, $), D(Kt.$$.fragment, $), D(Yt.$$.fragment, $), Et = !1;
    },
    d($) {
      $ && k(e), B(a), B(s), i[17](null), B(O), B(S), B(U), B(g), B(Ct), B(Pt), B(J), B(Kt), B(Yt), Ir = !1, Pn(Nr);
    }
  };
}
function ya(i, e, n) {
  let a, o, s, d, c, f, p;
  Lt(i, oe, (g) => n(16, d = g)), Lt(i, Y2, (g) => n(5, c = g)), Lt(i, fi, (g) => n(6, f = g)), Lt(i, I0, (g) => n(7, p = g));
  const y = () => {
    O.click();
  };
  let v = !1, O;
  const z = T2(), S = (g) => {
    z("romChanged", g);
  }, _ = (g) => {
    z("doCopyScreen", g);
  }, b = (g) => {
    z("doSaveScreen", g);
  }, U = (g) => {
    z("doRun", g);
  }, H = (g) => {
    z("doFullscreen", g);
  }, E = (g) => {
    z("doDump", g);
  }, A = (g) => {
    z("doDebug", g);
  };
  function C(g) {
    Zl[g ? "unshift" : "push"](() => {
      O = g, n(2, O);
    });
  }
  return i.$$.update = () => {
    i.$$.dirty & /*$state*/
    65536 && n(4, a = d === "empty"), i.$$.dirty & /*$state*/
    65536 && n(3, o = d === "loaded"), i.$$.dirty & /*$state*/
    65536 && n(0, s = d === "crashed"), i.$$.dirty & /*crashed*/
    1 && s && (n(1, v = !0), setTimeout(
      () => {
        n(1, v = !1);
      },
      4e3
    )), i.$$.dirty & /*$state*/
    65536;
  }, [
    s,
    v,
    O,
    o,
    a,
    c,
    f,
    p,
    y,
    S,
    _,
    b,
    U,
    H,
    E,
    A,
    d,
    C
  ];
}
class xa extends Y {
  constructor(e) {
    super(), F(this, e, ya, ma, P, {});
  }
}
function ba(i) {
  let e, n, a, o;
  return {
    c() {
      e = l("svg"), n = l("g"), a = l("path"), o = l("path"), t(a, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"), t(a, "opacity", "0.5"), t(o, "stroke-linecap", "round"), t(o, "d", "m14.5 9.5l-5 5m0-5l5 5"), t(n, "fill", "none"), t(n, "stroke", "currentColor"), t(n, "stroke-width", "1.5"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      G(s, e, d), r(e, n), r(n, a), r(n, o);
    },
    p: x,
    i: x,
    o: x,
    d(s) {
      s && k(e);
    }
  };
}
class pi extends Y {
  constructor(e) {
    super(), F(this, e, null, ba, P, {});
  }
}
function wa(i) {
  let e, n, a;
  return {
    c() {
      e = l("svg"), n = l("path"), a = l("path"), t(n, "fill", "currentColor"), t(n, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M12.01 5.25a6.59 6.59 0 0 0-6.55 5.833H5a.75.75 0 0 0-.53 1.281l1.168 1.167a.75.75 0 0 0 1.06 0l1.169-1.167a.75.75 0 0 0-.53-1.28h-.364A5.09 5.09 0 0 1 12.01 6.75a5.08 5.08 0 0 1 3.838 1.743a.75.75 0 1 0 1.13-.986A6.58 6.58 0 0 0 12.01 5.25m6.352 5.22a.75.75 0 0 0-1.06 0l-1.168 1.166a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-3.839-1.743a.75.75 0 0 0-1.13.987a6.58 6.58 0 0 0 4.969 2.256a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      G(o, e, s), r(e, n), r(e, a);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && k(e);
    }
  };
}
class qa extends Y {
  constructor(e) {
    super(), F(this, e, null, wa, P, {});
  }
}
function ka(i) {
  let e, n, a;
  return {
    c() {
      e = l("g"), n = l("path"), a = l("path"), t(n, "d", "M22 5.814v.69c0 1.038 0 1.557-.26 1.987s-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281s-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69"), t(a, "d", "M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815"), t(a, "opacity", "0.5"), t(e, "fill", "none"), t(e, "stroke", "currentColor"), t(e, "stroke-width", "1.5");
    },
    m(o, s) {
      G(o, e, s), r(e, n), r(e, a);
    },
    d(o) {
      o && k(e);
    }
  };
}
function _a(i) {
  let e, n;
  return {
    c() {
      e = l("path"), n = l("path"), t(e, "fill", "currentColor"), t(e, "fill-rule", "evenodd"), t(e, "d", "M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3"), t(e, "clip-rule", "evenodd"), t(n, "fill", "currentColor"), t(n, "d", "M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988"), t(n, "opacity", "0.5");
    },
    m(a, o) {
      G(a, e, o), G(a, n, o);
    },
    d(a) {
      a && (k(e), k(n));
    }
  };
}
function Ga(i) {
  let e;
  function n(s, d) {
    return (
      /*on*/
      s[0] ? _a : ka
    );
  }
  let a = n(i), o = a(i);
  return {
    c() {
      e = l("svg"), o.c(), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      G(s, e, d), o.m(e, null);
    },
    p(s, [d]) {
      a !== (a = n(s)) && (o.d(1), o = a(s), o && (o.c(), o.m(e, null)));
    },
    i: x,
    o: x,
    d(s) {
      s && k(e), o.d();
    }
  };
}
function Ua(i, e, n) {
  let { on: a = !1 } = e;
  return i.$$set = (o) => {
    "on" in o && n(0, a = o.on);
  }, [a];
}
class $a extends Y {
  constructor(e) {
    super(), F(this, e, Ua, Ga, P, { on: 0 });
  }
}
function ri(i, e, n) {
  const a = i.slice();
  a[10] = e[n], a[13] = n;
  const o = (
    /*registers_names*/
    a[3][
      /*i*/
      a[13]
    ] || "r" + /*i*/
    a[13].toString(16)
  );
  return a[11] = o, a;
}
function za(i) {
  let e;
  return {
    c() {
      e = w("p"), e.textContent = "Loading ...";
    },
    m(n, a) {
      G(n, e, a);
    },
    p: x,
    d(n) {
      n && k(e);
    }
  };
}
function Sa(i) {
  let e = (
    /*filtered*/
    i[1]
  ), n, a = ii(i);
  return {
    c() {
      a.c(), n = R2();
    },
    m(o, s) {
      a.m(o, s), G(o, n, s);
    },
    p(o, s) {
      s & /*filtered*/
      2 && P(e, e = /*filtered*/
      o[1]) ? (a.d(1), a = ii(o), a.c(), a.m(n.parentNode, n)) : a.p(o, s);
    },
    d(o) {
      o && k(n), a.d(o);
    }
  };
}
function ni(i) {
  let e, n, a = (
    /*label*/
    i[11] + ""
  ), o, s, d, c, f;
  return {
    c() {
      e = w("div"), n = w("label"), o = W(a), s = M(), d = w("input"), f = M(), t(n, "for", "reg_" + /*i*/
      i[13]), t(
        n,
        "title",
        /*label*/
        i[11]
      ), t(n, "class", "svelte-1l9tfs5"), t(d, "type", "text"), t(d, "name", "reg_" + /*i*/
      i[13]), d.value = c = /*reg*/
      i[10].toString(16).toUpperCase(), d.readOnly = !0, t(d, "class", "svelte-1l9tfs5"), t(e, "class", "row svelte-1l9tfs5");
    },
    m(p, y) {
      G(p, e, y), r(e, n), r(n, o), r(e, s), r(e, d), r(e, f);
    },
    p(p, y) {
      y & /*dump*/
      1 && c !== (c = /*reg*/
      p[10].toString(16).toUpperCase()) && d.value !== c && (d.value = c);
    },
    d(p) {
      p && k(e);
    }
  };
}
function li(i) {
  let e = !/*filtered*/
  i[1] || /*filtered_names*/
  i[4].includes(
    /*label*/
    i[11]
  ), n, a = e && ni(i);
  return {
    c() {
      a && a.c(), n = R2();
    },
    m(o, s) {
      a && a.m(o, s), G(o, n, s);
    },
    p(o, s) {
      s & /*filtered*/
      2 && (e = !/*filtered*/
      o[1] || /*filtered_names*/
      o[4].includes(
        /*label*/
        o[11]
      )), e ? a ? a.p(o, s) : (a = ni(o), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
    },
    d(o) {
      o && k(n), a && a.d(o);
    }
  };
}
function ii(i) {
  let e, n = J2(
    /*dump*/
    i[0].registers
  ), a = [];
  for (let o = 0; o < n.length; o += 1)
    a[o] = li(ri(i, n, o));
  return {
    c() {
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      e = R2();
    },
    m(o, s) {
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(o, s);
      G(o, e, s);
    },
    p(o, s) {
      if (s & /*dump, registers_names, filtered, filtered_names*/
      27) {
        n = J2(
          /*dump*/
          o[0].registers
        );
        let d;
        for (d = 0; d < n.length; d += 1) {
          const c = ri(o, n, d);
          a[d] ? a[d].p(c, s) : (a[d] = li(c), a[d].c(), a[d].m(e.parentNode, e));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = n.length;
      }
    },
    d(o) {
      o && k(e), qi(a, o);
    }
  };
}
function Oa(i) {
  let e, n, a, o, s, d, c, f, p, y, v, O, z, S, _, b, U, H;
  d = new $a({ props: { on: (
    /*filtered*/
    i[1]
  ) } }), p = new qa({}), O = new pi({});
  function E(g, K) {
    return (
      /*dump*/
      g[0] ? Sa : za
    );
  }
  let A = E(i), C = A(i);
  return {
    c() {
      e = w("div"), n = w("div"), a = w("h4"), a.textContent = "Registers", o = M(), s = w("button"), L(d.$$.fragment), c = M(), f = w("button"), L(p.$$.fragment), y = M(), v = w("button"), L(O.$$.fragment), z = M(), S = w("div"), _ = w("div"), C.c(), t(a, "class", "header"), t(s, "class", "toolbar-action"), t(s, "type", "button"), t(s, "tabindex", "0"), t(s, "id", "btn_filter_trace"), t(f, "class", "toolbar-action"), t(f, "type", "button"), t(f, "tabindex", "0"), t(f, "id", "btn_refresh_trace"), t(v, "class", "toolbar-action"), t(v, "type", "button"), t(v, "tabindex", "0"), t(v, "id", "btn_close_trace"), t(n, "class", "titlebar"), t(_, "class", "registers svelte-1l9tfs5"), t(S, "class", "contents svelte-1l9tfs5"), t(e, "class", "tracing-panel view-panel svelte-1l9tfs5"), Ln(
        e,
        "visible",
        /*$tracing*/
        i[2]
      );
    },
    m(g, K) {
      G(g, e, K), r(e, n), r(n, a), r(n, o), r(n, s), R(d, s, null), r(n, c), r(n, f), R(p, f, null), r(n, y), r(n, v), R(O, v, null), r(e, z), r(e, S), r(S, _), C.m(_, null), b = !0, U || (H = [
        Z(
          s,
          "click",
          /*doFilter*/
          i[5]
        ),
        Z(
          f,
          "click",
          /*doRefresh*/
          i[6]
        ),
        Z(
          v,
          "click",
          /*doClose*/
          i[7]
        )
      ], U = !0);
    },
    p(g, [K]) {
      const q = {};
      K & /*filtered*/
      2 && (q.on = /*filtered*/
      g[1]), d.$set(q), A === (A = E(g)) && C ? C.p(g, K) : (C.d(1), C = A(g), C && (C.c(), C.m(_, null))), (!b || K & /*$tracing*/
      4) && Ln(
        e,
        "visible",
        /*$tracing*/
        g[2]
      );
    },
    i(g) {
      b || (j(d.$$.fragment, g), j(p.$$.fragment, g), j(O.$$.fragment, g), b = !0);
    },
    o(g) {
      D(d.$$.fragment, g), D(p.$$.fragment, g), D(O.$$.fragment, g), b = !1;
    },
    d(g) {
      g && k(e), B(d), B(p), B(O), C.d(), U = !1, Pn(H);
    }
  };
}
function Ma(i, e, n) {
  let a;
  Lt(i, I0, (z) => n(2, a = z));
  const o = [
    "r0",
    "r1",
    "r2",
    "r3",
    "r4",
    "r5",
    "r6",
    "r7",
    "r8",
    "r9",
    "r10",
    "r11",
    "r12",
    "r13",
    "r14",
    "r15",
    "r0_banked",
    "r1_banked",
    "r2_banked",
    "r3_banked",
    "r4_banked",
    "r5_banked",
    "r6_banked",
    "r7_banked",
    "PC",
    "PR",
    "SR",
    "GBR",
    "VBR",
    "MACH",
    "MACL",
    "SSR",
    "SPC",
    "SGR",
    "DBR",
    "TEA",
    "EXPEVT",
    "TRA",
    "RS",
    "RE",
    "RC",
    "x0",
    "x1",
    "y0",
    "y1",
    "a0",
    "a0g",
    "a1",
    "a1g",
    "m0",
    "m1"
  ];
  let s = [
    "r0",
    "r1",
    "r2",
    "r3",
    "r4",
    "r5",
    "r6",
    "r7",
    "r8",
    "r9",
    "r10",
    "r11",
    "r12",
    "r13",
    "r14",
    "r15",
    "PR",
    "T",
    "SR"
  ], d = null;
  const c = D2.subscribe((z) => {
    n(0, d = z);
  });
  Ui(() => {
    c();
  });
  let f = !0;
  const p = (z) => {
    n(1, f = !f);
  }, y = T2();
  return [
    d,
    f,
    a,
    o,
    s,
    p,
    (z) => {
      y("doRefresh", z);
    },
    (z) => {
      y("doClose", z), I0.set(!1);
    }
  ];
}
class Ca extends Y {
  constructor(e) {
    super(), F(this, e, Ma, Oa, P, {});
  }
}
function Ea(i, e, n) {
  var a = new FileReader();
  a.onload = function(o) {
    if (o.target && o.target.result) {
      var s = new Uint8Array(o.target.result);
      window.Module.FS.analyzePath(e).exists && window.Module.FS.unlink(e), window.Module.FS.createDataFile("/", e, s, !0, !0), console.log(`${e} loaded into the Emscripten filesystem.`), n(null);
    } else
      n("target is empty");
  }, a.onerror = function(o) {
    n(o);
  }, a.readAsArrayBuffer(i);
}
function ja(i, e) {
  return new Promise((n, a) => {
    Ea(i, e, (o) => {
      o ? a(o) : n(() => {
      });
    });
  });
}
function Ha(i) {
  let e, n, a, o, s, d, c, f, p, y, v, O, z, S, _, b, U, H, E, A, C, g, K, q, Q, Ct, Kn, Pt, ce, Tr, N, J, At, Kt, de, Fn, Ft, Tt, tt, Yt, Et, Ir, Nr, $, V, fe, Zr, Yn, pe, Xr, Xl, X0, Wl, W0, c0, J0, tl, el, d0, rl, nl, ll, Vn, Jl, t2, e2, r2, Wr, n2, l2, i2, a2, o2, il, s2, al, An, c2, d2, f2, ol, f0, p2, sl, cl, p0, h2, dl, fl, pl, u2, hl, ul, g2, gl, h0, v2, vl, m2, It, y2, x2, b2, w2, q2, k2, _2, he, ue, ge, ve, me, ye, xe, be, we, qe, ke, _e, Ge, Ue, $e, ze, Se, Oe, Me, Ce, Ee, je, He, De, Re, Be, Qe, Le, Pe, Ke, Fe, Ye, Ve, Ae, Te, Ie, Ne, Ze, Xe, We, Je, t1, e1, r1, n1, l1, i1, a1, o1, s1, c1, d1, f1, p1, h1, u1, g1, v1, m1, y1, x1, b1, w1, q1, Nt, Zt, Xt, k1, _1, G1, U1, $1, z1, S1, O1, M1, C1, E1, j1, H1, D1, R1, B1, Q1, L1, P1, K1, F1, Y1, V1, A1, T1, I1, N1, Z1, X1, W1, J1, tr, er, rr, jt, Tn, ml, yl, nr, X, u0, xl, g0, In, Ht, Dt, Rt, Bt, Wt, Jt, te, Jr, et, lr, bl, G2, U2, $2, tn, z2, u, wl, ql, kl, v0, m0, Nn, rt, ir, _l, en, nt, ar, Gl, rn, lt, or, Ul, nn, it, sr, $l, ln, at, cr, zl, an, ot, dr, Sl, on, st, fr, Ol, sn, ct, pr, Ml, cn, dt, hr, Cl, dn, ft, ur, El, fn, pt, gr, jl, pn, ht, vr, Hl, hn, ut, mr, Dl, un, gt, yr, Rl, gn, vt, xr, Bl, vn, mt, br, Ql, mn, yt, wr, Ll, S2, O2, M2, qr, kr, _r, Gr, Qt, ee, re, ne, Pl, Zn, xt, Ur, Xn, bt, $r, Wn, wt, zr, Jn, qt, Sr, t0, kt, Or, e0, _t, Mr, r0, Gt, Cr, n0, Ut, Er, le, l0, $t, jr, i0, zt, Hr, a0, St, Dr, o0, Ot, Rr, y0, yn, x0, Br, Mt, xn, N2, Z2, b0, bn, w0, wn, q0, qn, k0, kn, _0, _n, G0, Gn, U0, Un, $0, $n, z0, zn, S0, Qr, Kl, Vt, O0, Lr, M0, Sn, C0, On, E0, Mn, j0, Pr, H0, Kr, D0, Fr, R0, Cn, B0, En, Q0, jn, L0, Hn, P0, Dn, K0, Rn, Bn, Yr, Qn, Vr, T, I, F0, Fl, Yl, ie, Vl, Al, Tl, ae;
  return {
    c() {
      e = l("svg"), n = l("defs"), a = l("linearGradient"), o = l("stop"), s = l("stop"), d = l("stop"), c = l("stop"), f = l("linearGradient"), p = l("stop"), y = l("stop"), v = l("stop"), O = l("stop"), z = l("stop"), S = l("linearGradient"), _ = l("stop"), b = l("stop"), U = l("stop"), H = l("stop"), E = l("linearGradient"), A = l("stop"), C = l("stop"), g = l("stop"), K = l("stop"), q = l("stop"), Q = l("linearGradient"), Ct = l("stop"), Kn = l("stop"), Pt = l("stop"), ce = l("stop"), Tr = l("linearGradient"), N = l("stop"), J = l("stop"), At = l("linearGradient"), Kt = l("stop"), de = l("stop"), Fn = l("stop"), Ft = l("stop"), Tt = l("linearGradient"), tt = l("stop"), Yt = l("stop"), Et = l("stop"), Ir = l("stop"), Nr = l("linearGradient"), $ = l("stop"), V = l("stop"), fe = l("linearGradient"), Zr = l("stop"), Yn = l("stop"), pe = l("linearGradient"), Xr = l("stop"), Xl = l("stop"), X0 = l("linearGradient"), Wl = l("stop"), W0 = l("stop"), c0 = l("linearGradient"), J0 = l("stop"), tl = l("stop"), el = l("stop"), d0 = l("linearGradient"), rl = l("stop"), nl = l("stop"), ll = l("stop"), Vn = l("linearGradient"), Jl = l("stop"), t2 = l("stop"), e2 = l("stop"), r2 = l("stop"), Wr = l("linearGradient"), n2 = l("stop"), l2 = l("stop"), i2 = l("stop"), a2 = l("stop"), o2 = l("stop"), il = l("linearGradient"), s2 = l("stop"), al = l("stop"), An = l("linearGradient"), c2 = l("stop"), d2 = l("stop"), f2 = l("stop"), ol = l("stop"), f0 = l("linearGradient"), p2 = l("stop"), sl = l("stop"), cl = l("stop"), p0 = l("linearGradient"), h2 = l("stop"), dl = l("stop"), fl = l("stop"), pl = l("linearGradient"), u2 = l("stop"), hl = l("stop"), ul = l("linearGradient"), g2 = l("stop"), gl = l("stop"), h0 = l("linearGradient"), v2 = l("stop"), vl = l("stop"), m2 = l("stop"), It = l("linearGradient"), y2 = l("stop"), x2 = l("stop"), b2 = l("stop"), w2 = l("stop"), q2 = l("stop"), k2 = l("stop"), _2 = l("stop"), he = l("linearGradient"), ue = l("linearGradient"), ge = l("linearGradient"), ve = l("linearGradient"), me = l("linearGradient"), ye = l("linearGradient"), xe = l("linearGradient"), be = l("linearGradient"), we = l("linearGradient"), qe = l("linearGradient"), ke = l("linearGradient"), _e = l("linearGradient"), Ge = l("linearGradient"), Ue = l("linearGradient"), $e = l("linearGradient"), ze = l("linearGradient"), Se = l("linearGradient"), Oe = l("linearGradient"), Me = l("linearGradient"), Ce = l("linearGradient"), Ee = l("linearGradient"), je = l("linearGradient"), He = l("linearGradient"), De = l("linearGradient"), Re = l("linearGradient"), Be = l("linearGradient"), Qe = l("linearGradient"), Le = l("linearGradient"), Pe = l("linearGradient"), Ke = l("linearGradient"), Fe = l("linearGradient"), Ye = l("linearGradient"), Ve = l("linearGradient"), Ae = l("linearGradient"), Te = l("linearGradient"), Ie = l("linearGradient"), Ne = l("linearGradient"), Ze = l("linearGradient"), Xe = l("linearGradient"), We = l("linearGradient"), Je = l("linearGradient"), t1 = l("linearGradient"), e1 = l("linearGradient"), r1 = l("linearGradient"), n1 = l("linearGradient"), l1 = l("linearGradient"), i1 = l("linearGradient"), a1 = l("linearGradient"), o1 = l("linearGradient"), s1 = l("linearGradient"), c1 = l("linearGradient"), d1 = l("linearGradient"), f1 = l("linearGradient"), p1 = l("linearGradient"), h1 = l("linearGradient"), u1 = l("linearGradient"), g1 = l("linearGradient"), v1 = l("linearGradient"), m1 = l("linearGradient"), y1 = l("linearGradient"), x1 = l("linearGradient"), b1 = l("linearGradient"), w1 = l("linearGradient"), q1 = l("linearGradient"), Nt = l("linearGradient"), Zt = l("linearGradient"), Xt = l("linearGradient"), k1 = l("linearGradient"), _1 = l("linearGradient"), G1 = l("linearGradient"), U1 = l("linearGradient"), $1 = l("linearGradient"), z1 = l("linearGradient"), S1 = l("linearGradient"), O1 = l("linearGradient"), M1 = l("linearGradient"), C1 = l("linearGradient"), E1 = l("linearGradient"), j1 = l("linearGradient"), H1 = l("linearGradient"), D1 = l("linearGradient"), R1 = l("linearGradient"), B1 = l("linearGradient"), Q1 = l("linearGradient"), L1 = l("linearGradient"), P1 = l("linearGradient"), K1 = l("linearGradient"), F1 = l("linearGradient"), Y1 = l("linearGradient"), V1 = l("linearGradient"), A1 = l("linearGradient"), T1 = l("linearGradient"), I1 = l("linearGradient"), N1 = l("linearGradient"), Z1 = l("linearGradient"), X1 = l("linearGradient"), W1 = l("linearGradient"), J1 = l("linearGradient"), tr = l("linearGradient"), er = l("linearGradient"), rr = l("linearGradient"), jt = l("pattern"), Tn = l("rect"), ml = l("path"), yl = l("path"), nr = l("linearGradient"), X = l("g"), u0 = l("path"), xl = l("path"), g0 = l("path"), In = l("path"), Ht = l("rect"), Dt = l("rect"), Rt = l("rect"), Bt = l("rect"), Wt = l("rect"), Jt = l("rect"), te = l("rect"), Jr = l("g"), et = l("rect"), lr = l("rect"), bl = l("path"), G2 = l("mask"), U2 = l("path"), $2 = l("g"), tn = l("foreignObject"), z2 = w("div"), z2.innerHTML = '<canvas width="320" height="528" style="width: 320px; height: 528px"></canvas>', u = l("g"), wl = l("path"), ql = l("path"), kl = l("path"), v0 = l("path"), m0 = l("path"), Nn = l("g"), rt = l("rect"), ir = l("rect"), _l = l("path"), en = l("g"), nt = l("rect"), ar = l("rect"), Gl = l("path"), rn = l("g"), lt = l("rect"), or = l("rect"), Ul = l("path"), nn = l("g"), it = l("rect"), sr = l("rect"), $l = l("path"), ln = l("g"), at = l("rect"), cr = l("rect"), zl = l("path"), an = l("g"), ot = l("rect"), dr = l("rect"), Sl = l("path"), on = l("g"), st = l("rect"), fr = l("rect"), Ol = l("path"), sn = l("g"), ct = l("rect"), pr = l("rect"), Ml = l("path"), cn = l("g"), dt = l("rect"), hr = l("rect"), Cl = l("path"), dn = l("g"), ft = l("rect"), ur = l("rect"), El = l("path"), fn = l("g"), pt = l("rect"), gr = l("rect"), jl = l("path"), pn = l("g"), ht = l("rect"), vr = l("rect"), Hl = l("path"), hn = l("g"), ut = l("rect"), mr = l("rect"), Dl = l("path"), un = l("g"), gt = l("rect"), yr = l("rect"), Rl = l("path"), gn = l("g"), vt = l("rect"), xr = l("rect"), Bl = l("path"), vn = l("g"), mt = l("rect"), br = l("rect"), Ql = l("path"), mn = l("g"), yt = l("rect"), wr = l("rect"), Ll = l("path"), S2 = l("path"), O2 = l("path"), M2 = l("path"), qr = l("rect"), kr = l("rect"), _r = l("rect"), Gr = l("path"), Qt = l("rect"), ee = l("path"), re = l("path"), ne = l("path"), Pl = l("path"), Zn = l("g"), xt = l("rect"), Ur = l("rect"), Xn = l("g"), bt = l("rect"), $r = l("rect"), Wn = l("g"), wt = l("rect"), zr = l("rect"), Jn = l("g"), qt = l("rect"), Sr = l("rect"), t0 = l("g"), kt = l("rect"), Or = l("rect"), e0 = l("g"), _t = l("rect"), Mr = l("rect"), r0 = l("g"), Gt = l("rect"), Cr = l("rect"), n0 = l("g"), Ut = l("rect"), Er = l("rect"), le = l("rect"), l0 = l("g"), $t = l("rect"), jr = l("rect"), i0 = l("g"), zt = l("rect"), Hr = l("rect"), a0 = l("g"), St = l("rect"), Dr = l("rect"), o0 = l("g"), Ot = l("rect"), Rr = l("rect"), y0 = l("g"), yn = l("path"), x0 = l("g"), Br = l("path"), Mt = l("text"), xn = l("tspan"), N2 = W("xyz"), Z2 = M(), b0 = l("g"), bn = l("path"), w0 = l("g"), wn = l("path"), q0 = l("g"), qn = l("path"), k0 = l("g"), kn = l("path"), _0 = l("g"), _n = l("path"), G0 = l("g"), Gn = l("path"), U0 = l("g"), Un = l("path"), $0 = l("g"), $n = l("path"), z0 = l("g"), zn = l("path"), S0 = l("g"), Qr = l("path"), Kl = l("path"), Vt = l("path"), O0 = l("g"), Lr = l("path"), M0 = l("g"), Sn = l("path"), C0 = l("g"), On = l("path"), E0 = l("g"), Mn = l("path"), j0 = l("g"), Pr = l("path"), H0 = l("g"), Kr = l("path"), D0 = l("g"), Fr = l("path"), R0 = l("g"), Cn = l("path"), B0 = l("g"), En = l("path"), Q0 = l("g"), jn = l("path"), L0 = l("g"), Hn = l("path"), P0 = l("g"), Dn = l("path"), K0 = l("g"), Rn = l("path"), Bn = l("g"), Yr = l("path"), Qn = l("g"), Vr = l("path"), T = l("path"), I = l("path"), F0 = l("path"), Fl = l("path"), Yl = l("path"), ie = l("rect"), Vl = l("path"), Al = l("path"), Tl = l("path"), ae = l("rect"), t(o, "offset", "0"), t(o, "stop-color", "#3b3b3b"), t(s, "offset", ".1"), t(s, "stop-color", "#282828"), t(d, "offset", ".2"), t(d, "stop-color", "#282828"), t(c, "offset", "1"), t(c, "stop-color", "#272727"), t(a, "id", "x"), t(p, "offset", "0"), t(p, "stop-color", "#99b0df"), t(y, "offset", ".1"), t(y, "stop-color", "#7396de"), t(v, "offset", ".3"), t(v, "stop-color", "#4171d2"), t(O, "offset", ".9"), t(O, "stop-color", "#1f3d79"), t(z, "offset", "1"), t(z, "stop-color", "#173166"), t(f, "id", "l"), t(_, "offset", "0"), t(_, "stop-color", "#2b60cd"), t(b, "offset", ".5"), t(b, "stop-color", "#295fcc"), t(U, "offset", ".8"), t(U, "stop-color", "#3c73e3"), t(H, "offset", "1"), t(H, "stop-color", "#4279e8"), t(S, "id", "m"), t(A, "offset", "0"), t(A, "stop-color", "#ececec"), t(C, "offset", ".1"), t(C, "stop-color", "#ededed"), t(g, "offset", ".3"), t(g, "stop-color", "#ddd"), t(K, "offset", ".9"), t(K, "stop-color", "#b0b0b0"), t(q, "offset", "1"), t(q, "stop-color", "#9c9c9c"), t(E, "id", "v"), t(Ct, "offset", "0"), t(Ct, "stop-color", "#e7e7e7"), t(Kn, "offset", ".5"), t(Kn, "stop-color", "#f8f8f8"), t(Pt, "offset", ".8"), t(Pt, "stop-color", "#fff"), t(ce, "offset", "1"), t(ce, "stop-color", "#fbfbfb"), t(Q, "id", "w"), t(N, "offset", "0"), t(N, "stop-color", "#cdcdcd"), t(N, "stop-opacity", ".4"), t(J, "offset", "1"), t(J, "stop-color", "#cdcdcd"), t(J, "stop-opacity", "0"), t(Tr, "id", "u"), t(Kt, "offset", "0"), t(Kt, "stop-color", "#d1d1d1"), t(de, "offset", ".4"), t(de, "stop-color", "#c2c2c2"), t(Fn, "offset", ".7"), t(Fn, "stop-color", "#6b6b6b"), t(Ft, "offset", "1"), t(Ft, "stop-color", "#616161"), t(At, "id", "t"), t(tt, "offset", "0"), t(tt, "stop-color", "#a8a8a8"), t(Yt, "offset", ".3"), t(Yt, "stop-color", "#b2b2b2"), t(Et, "offset", ".8"), t(Et, "stop-color", "#dadada"), t(Ir, "offset", "1"), t(Ir, "stop-color", "#ccc"), t(Tt, "id", "s"), t($, "offset", "0"), t($, "stop-color", "#252525"), t(V, "offset", "1"), t(V, "stop-color", "#363636"), t(Nr, "id", "r"), t(Zr, "offset", "0"), t(Zr, "stop-color", "#f7f7f7"), t(Yn, "offset", "1"), t(Yn, "stop-color", "#535353"), t(fe, "id", "q"), t(Xr, "offset", "0"), t(Xr, "stop-color", "#909090"), t(Xl, "offset", "1"), t(Xl, "stop-color", "#2d2d2d"), t(pe, "id", "p"), t(Wl, "offset", "0"), t(Wl, "stop-color", "#313131"), t(W0, "offset", "1"), t(W0, "stop-color", "#3a3a3a"), t(W0, "stop-opacity", "0"), t(X0, "id", "o"), t(J0, "offset", "0"), t(J0, "stop-color", "#c6c6c6"), t(J0, "stop-opacity", ".4"), t(tl, "offset", ".4"), t(tl, "stop-color", "#a2a2a2"), t(tl, "stop-opacity", ".1"), t(el, "offset", "1"), t(el, "stop-color", "#a2a2a2"), t(el, "stop-opacity", "0"), t(c0, "id", "n"), t(rl, "offset", "0"), t(rl, "stop-color", "#c6c6c6"), t(rl, "stop-opacity", ".4"), t(nl, "offset", ".7"), t(nl, "stop-color", "#a2a2a2"), t(nl, "stop-opacity", ".1"), t(ll, "offset", "1"), t(ll, "stop-color", "#a2a2a2"), t(ll, "stop-opacity", "0"), t(d0, "id", "k"), t(Jl, "offset", "0"), t(Jl, "stop-color", "#2e2e2e"), t(t2, "offset", ".5"), t(t2, "stop-color", "#2d2d2d"), t(e2, "offset", ".8"), t(e2, "stop-color", "#393939"), t(r2, "offset", "1"), t(r2, "stop-color", "#3d3d3d"), t(Vn, "id", "j"), t(n2, "offset", "0"), t(n2, "stop-color", "#464646"), t(l2, "offset", ".1"), t(l2, "stop-color", "#393939"), t(i2, "offset", ".3"), t(i2, "stop-color", "#2c2c2c"), t(a2, "offset", ".9"), t(a2, "stop-color", "#202020"), t(o2, "offset", "1"), t(o2, "stop-color", "#242424"), t(Wr, "id", "i"), t(s2, "offset", "0"), t(s2, "stop-color", "#1e7999"), t(al, "offset", "1"), t(al, "stop-color", "#1d7998"), t(al, "stop-opacity", "0"), t(il, "id", "h"), t(c2, "offset", "0"), t(c2, "stop-color", "#3a3a3a"), t(d2, "offset", ".3"), t(d2, "stop-color", "#414141"), t(f2, "offset", ".6"), t(f2, "stop-color", "#464646"), t(ol, "offset", "1"), t(ol, "stop-color", "#4b4b4b"), t(ol, "stop-opacity", "0"), t(An, "id", "g"), t(p2, "offset", "0"), t(p2, "stop-color", "#313131"), t(sl, "offset", ".4"), t(sl, "stop-color", "#3a3a3a"), t(sl, "stop-opacity", ".6"), t(cl, "offset", "1"), t(cl, "stop-color", "#3a3a3a"), t(cl, "stop-opacity", "0"), t(f0, "id", "f"), t(h2, "offset", "0"), t(h2, "stop-color", "#3a3a3a"), t(dl, "offset", ".4"), t(dl, "stop-color", "#3a3a3a"), t(dl, "stop-opacity", ".6"), t(fl, "offset", "1"), t(fl, "stop-color", "#3a3a3a"), t(fl, "stop-opacity", "0"), t(p0, "id", "e"), t(u2, "offset", "0"), t(u2, "stop-color", "#4e4e4e"), t(hl, "offset", "1"), t(hl, "stop-color", "#4e4e4e"), t(hl, "stop-opacity", "0"), t(pl, "id", "d"), t(g2, "offset", "0"), t(g2, "stop-color", "#555"), t(gl, "offset", "1"), t(gl, "stop-color", "#424242"), t(gl, "stop-opacity", "0"), t(ul, "id", "c"), t(v2, "offset", "0"), t(v2, "stop-color", "#9c9c9c"), t(vl, "offset", ".8"), t(vl, "stop-color", "#b0b0b0"), t(vl, "stop-opacity", ".1"), t(m2, "offset", "1"), t(m2, "stop-color", "#f5f5f5"), t(h0, "id", "b"), t(y2, "offset", "0"), t(y2, "stop-color", "#b6b6b6"), t(x2, "offset", "0"), t(x2, "stop-color", "#fefefe"), t(b2, "offset", ".1"), t(b2, "stop-color", "#e7e7e7"), t(w2, "offset", ".8"), t(w2, "stop-color", "#e8e8e8"), t(q2, "offset", ".9"), t(q2, "stop-color", "#e6e6e6"), t(k2, "offset", "1"), t(k2, "stop-color", "#e1e1e1"), t(_2, "offset", "1"), t(_2, "stop-color", "#b2b2b2"), t(It, "id", "a"), h(he, "xlink:href", "#a"), t(he, "id", "y"), t(he, "x1", "6.5"), t(he, "x2", "641.5"), t(he, "y1", "320.4"), t(he, "y2", "320.4"), t(he, "gradientUnits", "userSpaceOnUse"), h(ue, "xlink:href", "#b"), t(ue, "id", "z"), t(ue, "x1", "9.3"), t(ue, "x2", "634"), t(ue, "y1", "-300.4"), t(ue, "y2", "1004.4"), t(ue, "gradientUnits", "userSpaceOnUse"), h(ge, "xlink:href", "#c"), t(ge, "id", "B"), t(ge, "x1", "570"), t(ge, "x2", "94.5"), t(ge, "y1", "560.4"), t(ge, "y2", "-263.2"), t(ge, "gradientUnits", "userSpaceOnUse"), h(ve, "xlink:href", "#d"), t(ve, "id", "C"), t(ve, "x1", "570"), t(ve, "x2", "498.4"), t(ve, "y1", "560.4"), t(ve, "y2", "293"), t(ve, "gradientUnits", "userSpaceOnUse"), h(me, "xlink:href", "#e"), t(me, "id", "J"), t(me, "x1", "91.3"), t(me, "x2", "71.6"), t(me, "y1", "978.6"), t(me, "y2", "958.9"), t(me, "gradientUnits", "userSpaceOnUse"), h(ye, "xlink:href", "#f"), t(ye, "id", "I"), t(ye, "x1", "504"), t(ye, "x2", "504"), t(ye, "y1", "978"), t(ye, "y2", "215.2"), t(ye, "gradientUnits", "userSpaceOnUse"), h(xe, "xlink:href", "#g"), t(xe, "id", "K"), t(xe, "x1", "544"), t(xe, "x2", "582"), t(xe, "y1", "980"), t(xe, "y2", "942"), t(xe, "gradientUnits", "userSpaceOnUse"), h(be, "xlink:href", "#h"), t(be, "id", "L"), t(be, "x1", "300"), t(be, "x2", "300"), t(be, "y1", "44"), t(be, "y2", "1124"), t(be, "gradientUnits", "userSpaceOnUse"), h(we, "xlink:href", "#i"), t(we, "id", "M"), t(we, "x1", "514.8"), t(we, "x2", "583.9"), t(we, "y1", "711.8"), t(we, "y2", "751.7"), t(we, "gradientUnits", "userSpaceOnUse"), h(qe, "xlink:href", "#j"), t(qe, "id", "N"), t(qe, "x1", "549"), t(qe, "x2", "549"), t(qe, "y1", "713.4"), t(qe, "y2", "748.4"), t(qe, "gradientUnits", "userSpaceOnUse"), h(ke, "xlink:href", "#k"), t(ke, "id", "O"), t(ke, "x1", "515"), t(ke, "x2", "536.3"), t(ke, "y1", "1125"), t(ke, "y2", "1146.3"), t(ke, "gradientUnits", "userSpaceOnUse"), h(_e, "xlink:href", "#k"), t(_e, "id", "H"), t(_e, "x1", "515"), t(_e, "x2", "536.3"), t(_e, "y1", "1125"), t(_e, "y2", "1146.3"), t(_e, "gradientUnits", "userSpaceOnUse"), h(Ge, "xlink:href", "#i"), t(Ge, "id", "F"), t(Ge, "x1", "514.8"), t(Ge, "x2", "583.9"), t(Ge, "y1", "711.8"), t(Ge, "y2", "751.7"), t(Ge, "gradientUnits", "userSpaceOnUse"), h(Ue, "xlink:href", "#j"), t(Ue, "id", "G"), t(Ue, "x1", "549"), t(Ue, "x2", "549"), t(Ue, "y1", "713.4"), t(Ue, "y2", "748.4"), t(Ue, "gradientUnits", "userSpaceOnUse"), h($e, "xlink:href", "#k"), t($e, "id", "R"), t($e, "x1", "515"), t($e, "x2", "536.3"), t($e, "y1", "1125"), t($e, "y2", "1146.3"), t($e, "gradientUnits", "userSpaceOnUse"), h(ze, "xlink:href", "#i"), t(ze, "id", "P"), t(ze, "x1", "514.8"), t(ze, "x2", "583.9"), t(ze, "y1", "711.8"), t(ze, "y2", "751.7"), t(ze, "gradientUnits", "userSpaceOnUse"), h(Se, "xlink:href", "#j"), t(Se, "id", "Q"), t(Se, "x1", "549"), t(Se, "x2", "549"), t(Se, "y1", "713.4"), t(Se, "y2", "748.4"), t(Se, "gradientUnits", "userSpaceOnUse"), h(Oe, "xlink:href", "#k"), t(Oe, "id", "U"), t(Oe, "x1", "515"), t(Oe, "x2", "536.3"), t(Oe, "y1", "1125"), t(Oe, "y2", "1146.3"), t(Oe, "gradientUnits", "userSpaceOnUse"), h(Me, "xlink:href", "#i"), t(Me, "id", "S"), t(Me, "x1", "514.8"), t(Me, "x2", "583.9"), t(Me, "y1", "711.8"), t(Me, "y2", "751.7"), t(Me, "gradientUnits", "userSpaceOnUse"), h(Ce, "xlink:href", "#j"), t(Ce, "id", "T"), t(Ce, "x1", "549"), t(Ce, "x2", "549"), t(Ce, "y1", "713.4"), t(Ce, "y2", "748.4"), t(Ce, "gradientUnits", "userSpaceOnUse"), h(Ee, "xlink:href", "#k"), t(Ee, "id", "X"), t(Ee, "x1", "515"), t(Ee, "x2", "536.3"), t(Ee, "y1", "1125"), t(Ee, "y2", "1146.3"), t(Ee, "gradientUnits", "userSpaceOnUse"), h(je, "xlink:href", "#l"), t(je, "id", "V"), t(je, "x1", "514.8"), t(je, "x2", "583.9"), t(je, "y1", "711.8"), t(je, "y2", "751.7"), t(je, "gradientUnits", "userSpaceOnUse"), h(He, "xlink:href", "#m"), t(He, "id", "W"), t(He, "x1", "549"), t(He, "x2", "549"), t(He, "y1", "713.4"), t(He, "y2", "748.4"), t(He, "gradientUnits", "userSpaceOnUse"), h(De, "xlink:href", "#k"), t(De, "id", "aa"), t(De, "x1", "515"), t(De, "x2", "536.3"), t(De, "y1", "1125"), t(De, "y2", "1146.3"), t(De, "gradientUnits", "userSpaceOnUse"), h(Re, "xlink:href", "#i"), t(Re, "id", "Y"), t(Re, "x1", "514.8"), t(Re, "x2", "583.9"), t(Re, "y1", "711.8"), t(Re, "y2", "751.7"), t(Re, "gradientUnits", "userSpaceOnUse"), h(Be, "xlink:href", "#j"), t(Be, "id", "Z"), t(Be, "x1", "549"), t(Be, "x2", "549"), t(Be, "y1", "713.4"), t(Be, "y2", "748.4"), t(Be, "gradientUnits", "userSpaceOnUse"), h(Qe, "xlink:href", "#k"), t(Qe, "id", "ad"), t(Qe, "x1", "515"), t(Qe, "x2", "536.3"), t(Qe, "y1", "1125"), t(Qe, "y2", "1146.3"), t(Qe, "gradientUnits", "userSpaceOnUse"), h(Le, "xlink:href", "#i"), t(Le, "id", "ab"), t(Le, "x1", "514.8"), t(Le, "x2", "583.9"), t(Le, "y1", "711.8"), t(Le, "y2", "751.7"), t(Le, "gradientUnits", "userSpaceOnUse"), h(Pe, "xlink:href", "#j"), t(Pe, "id", "ac"), t(Pe, "x1", "549"), t(Pe, "x2", "549"), t(Pe, "y1", "713.4"), t(Pe, "y2", "748.4"), t(Pe, "gradientUnits", "userSpaceOnUse"), h(Ke, "xlink:href", "#k"), t(Ke, "id", "ag"), t(Ke, "x1", "515"), t(Ke, "x2", "536.3"), t(Ke, "y1", "1125"), t(Ke, "y2", "1146.3"), t(Ke, "gradientUnits", "userSpaceOnUse"), h(Fe, "xlink:href", "#i"), t(Fe, "id", "ae"), t(Fe, "x1", "514.8"), t(Fe, "x2", "583.9"), t(Fe, "y1", "711.8"), t(Fe, "y2", "751.7"), t(Fe, "gradientUnits", "userSpaceOnUse"), h(Ye, "xlink:href", "#j"), t(Ye, "id", "af"), t(Ye, "x1", "549"), t(Ye, "x2", "549"), t(Ye, "y1", "713.4"), t(Ye, "y2", "748.4"), t(Ye, "gradientUnits", "userSpaceOnUse"), h(Ve, "xlink:href", "#k"), t(Ve, "id", "aj"), t(Ve, "x1", "515"), t(Ve, "x2", "536.3"), t(Ve, "y1", "1125"), t(Ve, "y2", "1146.3"), t(Ve, "gradientUnits", "userSpaceOnUse"), h(Ae, "xlink:href", "#i"), t(Ae, "id", "ah"), t(Ae, "x1", "514.8"), t(Ae, "x2", "583.9"), t(Ae, "y1", "711.8"), t(Ae, "y2", "751.7"), t(Ae, "gradientUnits", "userSpaceOnUse"), h(Te, "xlink:href", "#j"), t(Te, "id", "ai"), t(Te, "x1", "549"), t(Te, "x2", "549"), t(Te, "y1", "713.4"), t(Te, "y2", "748.4"), t(Te, "gradientUnits", "userSpaceOnUse"), h(Ie, "xlink:href", "#k"), t(Ie, "id", "ay"), t(Ie, "x1", "515"), t(Ie, "x2", "536.3"), t(Ie, "y1", "1125"), t(Ie, "y2", "1146.3"), t(Ie, "gradientUnits", "userSpaceOnUse"), h(Ne, "xlink:href", "#i"), t(Ne, "id", "at"), t(Ne, "x1", "514.8"), t(Ne, "x2", "583.9"), t(Ne, "y1", "711.8"), t(Ne, "y2", "751.7"), t(Ne, "gradientUnits", "userSpaceOnUse"), h(Ze, "xlink:href", "#j"), t(Ze, "id", "au"), t(Ze, "x1", "549"), t(Ze, "x2", "549"), t(Ze, "y1", "713.4"), t(Ze, "y2", "748.4"), t(Ze, "gradientUnits", "userSpaceOnUse"), h(Xe, "xlink:href", "#k"), t(Xe, "id", "av"), t(Xe, "x1", "515"), t(Xe, "x2", "536.3"), t(Xe, "y1", "1125"), t(Xe, "y2", "1146.3"), t(Xe, "gradientUnits", "userSpaceOnUse"), h(We, "xlink:href", "#i"), t(We, "id", "aq"), t(We, "x1", "514.8"), t(We, "x2", "583.9"), t(We, "y1", "711.8"), t(We, "y2", "751.7"), t(We, "gradientUnits", "userSpaceOnUse"), h(Je, "xlink:href", "#j"), t(Je, "id", "ar"), t(Je, "x1", "549"), t(Je, "x2", "549"), t(Je, "y1", "713.4"), t(Je, "y2", "748.4"), t(Je, "gradientUnits", "userSpaceOnUse"), h(t1, "xlink:href", "#k"), t(t1, "id", "as"), t(t1, "x1", "515"), t(t1, "x2", "536.3"), t(t1, "y1", "1125"), t(t1, "y2", "1146.3"), t(t1, "gradientUnits", "userSpaceOnUse"), h(e1, "xlink:href", "#k"), t(e1, "id", "ap"), t(e1, "x1", "515"), t(e1, "x2", "536.3"), t(e1, "y1", "1125"), t(e1, "y2", "1146.3"), t(e1, "gradientUnits", "userSpaceOnUse"), h(r1, "xlink:href", "#i"), t(r1, "id", "ak"), t(r1, "x1", "514.8"), t(r1, "x2", "583.9"), t(r1, "y1", "711.8"), t(r1, "y2", "751.7"), t(r1, "gradientUnits", "userSpaceOnUse"), h(n1, "xlink:href", "#j"), t(n1, "id", "al"), t(n1, "x1", "549"), t(n1, "x2", "549"), t(n1, "y1", "713.4"), t(n1, "y2", "748.4"), t(n1, "gradientUnits", "userSpaceOnUse"), h(l1, "xlink:href", "#k"), t(l1, "id", "am"), t(l1, "x1", "515"), t(l1, "x2", "536.3"), t(l1, "y1", "1125"), t(l1, "y2", "1146.3"), t(l1, "gradientUnits", "userSpaceOnUse"), h(i1, "xlink:href", "#i"), t(i1, "id", "an"), t(i1, "x1", "514.8"), t(i1, "x2", "583.9"), t(i1, "y1", "711.8"), t(i1, "y2", "751.7"), t(i1, "gradientUnits", "userSpaceOnUse"), h(a1, "xlink:href", "#j"), t(a1, "id", "ao"), t(a1, "x1", "549"), t(a1, "x2", "549"), t(a1, "y1", "713.4"), t(a1, "y2", "748.4"), t(a1, "gradientUnits", "userSpaceOnUse"), h(o1, "xlink:href", "#i"), t(o1, "id", "aw"), t(o1, "x1", "514.8"), t(o1, "x2", "583.9"), t(o1, "y1", "711.8"), t(o1, "y2", "751.7"), t(o1, "gradientUnits", "userSpaceOnUse"), h(s1, "xlink:href", "#j"), t(s1, "id", "ax"), t(s1, "x1", "549"), t(s1, "x2", "549"), t(s1, "y1", "713.4"), t(s1, "y2", "748.4"), t(s1, "gradientUnits", "userSpaceOnUse"), h(c1, "xlink:href", "#n"), t(c1, "id", "aB"), t(c1, "x1", "520"), t(c1, "x2", "528.5"), t(c1, "y1", "1122"), t(c1, "y2", "1152"), t(c1, "gradientUnits", "userSpaceOnUse"), h(d1, "xlink:href", "#i"), t(d1, "id", "az"), t(d1, "x1", "514.8"), t(d1, "x2", "624"), t(d1, "y1", "711.8"), t(d1, "y2", "743.4"), t(d1, "gradientUnits", "userSpaceOnUse"), h(f1, "xlink:href", "#j"), t(f1, "id", "aA"), t(f1, "x1", "549"), t(f1, "x2", "549"), t(f1, "y1", "713.4"), t(f1, "y2", "748.4"), t(f1, "gradientUnits", "userSpaceOnUse"), h(p1, "xlink:href", "#i"), t(p1, "id", "aC"), t(p1, "x1", "514.8"), t(p1, "x2", "624"), t(p1, "y1", "711.8"), t(p1, "y2", "743.4"), t(p1, "gradientUnits", "userSpaceOnUse"), h(h1, "xlink:href", "#n"), t(h1, "id", "aE"), t(h1, "x1", "520"), t(h1, "x2", "528.5"), t(h1, "y1", "1122"), t(h1, "y2", "1152"), t(h1, "gradientUnits", "userSpaceOnUse"), h(u1, "xlink:href", "#j"), t(u1, "id", "aD"), t(u1, "x1", "549"), t(u1, "x2", "549"), t(u1, "y1", "713.4"), t(u1, "y2", "748.4"), t(u1, "gradientUnits", "userSpaceOnUse"), h(g1, "xlink:href", "#i"), t(g1, "id", "aI"), t(g1, "x1", "514.8"), t(g1, "x2", "624"), t(g1, "y1", "711.8"), t(g1, "y2", "743.4"), t(g1, "gradientUnits", "userSpaceOnUse"), h(v1, "xlink:href", "#n"), t(v1, "id", "aK"), t(v1, "x1", "520"), t(v1, "x2", "528.5"), t(v1, "y1", "1122"), t(v1, "y2", "1152"), t(v1, "gradientUnits", "userSpaceOnUse"), h(m1, "xlink:href", "#i"), t(m1, "id", "aF"), t(m1, "x1", "514.8"), t(m1, "x2", "624"), t(m1, "y1", "711.8"), t(m1, "y2", "743.4"), t(m1, "gradientUnits", "userSpaceOnUse"), h(y1, "xlink:href", "#j"), t(y1, "id", "aG"), t(y1, "x1", "549"), t(y1, "x2", "549"), t(y1, "y1", "713.4"), t(y1, "y2", "748.4"), t(y1, "gradientUnits", "userSpaceOnUse"), h(x1, "xlink:href", "#n"), t(x1, "id", "aH"), t(x1, "x1", "520"), t(x1, "x2", "528.5"), t(x1, "y1", "1122"), t(x1, "y2", "1152"), t(x1, "gradientUnits", "userSpaceOnUse"), h(b1, "xlink:href", "#j"), t(b1, "id", "aJ"), t(b1, "x1", "549"), t(b1, "x2", "549"), t(b1, "y1", "713.4"), t(b1, "y2", "748.4"), t(b1, "gradientUnits", "userSpaceOnUse"), h(w1, "xlink:href", "#c"), t(w1, "id", "D"), t(w1, "x1", "575.8"), t(w1, "x2", "543.8"), t(w1, "y1", "691.7"), t(w1, "y2", "572.4"), t(w1, "gradientUnits", "userSpaceOnUse"), h(q1, "xlink:href", "#d"), t(q1, "id", "E"), t(q1, "x1", "562"), t(q1, "x2", "537.9"), t(q1, "y1", "686.2"), t(q1, "y2", "596.4"), t(q1, "gradientUnits", "userSpaceOnUse"), h(Nt, "xlink:href", "#o"), t(Nt, "id", "aL"), t(Nt, "x1", "504"), t(Nt, "x2", "504"), t(Nt, "y1", "978"), t(Nt, "y2", "876.8"), t(Nt, "gradientTransform", "translate(0 -285.6)"), t(Nt, "gradientUnits", "userSpaceOnUse"), h(Zt, "xlink:href", "#e"), t(Zt, "id", "aM"), t(Zt, "x1", "91.3"), t(Zt, "x2", "71.6"), t(Zt, "y1", "978.6"), t(Zt, "y2", "958.9"), t(Zt, "gradientTransform", "translate(0 -285.6)"), t(Zt, "gradientUnits", "userSpaceOnUse"), h(Xt, "xlink:href", "#g"), t(Xt, "id", "aN"), t(Xt, "x1", "544"), t(Xt, "x2", "575.4"), t(Xt, "y1", "980"), t(Xt, "y2", "948.6"), t(Xt, "gradientTransform", "translate(0 -285.6)"), t(Xt, "gradientUnits", "userSpaceOnUse"), h(k1, "xlink:href", "#p"), t(k1, "id", "aO"), t(k1, "x1", "327.1"), t(k1, "x2", "327.1"), t(k1, "y1", "580.4"), t(k1, "y2", "694.4"), t(k1, "gradientUnits", "userSpaceOnUse"), h(_1, "xlink:href", "#q"), t(_1, "id", "aP"), t(_1, "x1", "330.1"), t(_1, "x2", "330.1"), t(_1, "y1", "582.4"), t(_1, "y2", "694.4"), t(_1, "gradientUnits", "userSpaceOnUse"), h(G1, "xlink:href", "#r"), t(G1, "id", "aQ"), t(G1, "x1", "264.5"), t(G1, "x2", "350.3"), t(G1, "y1", "600.6"), t(G1, "y2", "686.4"), t(G1, "gradientUnits", "userSpaceOnUse"), h(U1, "xlink:href", "#s"), t(U1, "id", "aS"), t(U1, "x1", "274"), t(U1, "x2", "367.4"), t(U1, "y1", "632.4"), t(U1, "y2", "644.4"), t(U1, "gradientUnits", "userSpaceOnUse"), h($1, "xlink:href", "#t"), t($1, "id", "aT"), t($1, "x1", "311.9"), t($1, "x2", "313.6"), t($1, "y1", "632.4"), t($1, "y2", "644.4"), t($1, "gradientUnits", "userSpaceOnUse"), h(z1, "xlink:href", "#t"), t(z1, "id", "aV"), t(z1, "x1", "251"), t(z1, "x2", "262.3"), t(z1, "y1", "645.1"), t(z1, "y2", "638.6"), t(z1, "gradientUnits", "userSpaceOnUse"), h(S1, "xlink:href", "#t"), t(S1, "id", "aU"), t(S1, "x1", "-329.7"), t(S1, "x2", "-320.5"), t(S1, "y1", "-677.4"), t(S1, "y2", "-667.2"), t(S1, "gradientUnits", "userSpaceOnUse"), h(O1, "xlink:href", "#t"), t(O1, "id", "aW"), t(O1, "x1", "251.4"), t(O1, "x2", "261.3"), t(O1, "y1", "633.6"), t(O1, "y2", "639.3"), t(O1, "gradientUnits", "userSpaceOnUse"), h(M1, "xlink:href", "#t"), t(M1, "id", "aR"), t(M1, "x1", "325"), t(M1, "x2", "325"), t(M1, "y1", "612.4"), t(M1, "y2", "606.9"), t(M1, "gradientUnits", "userSpaceOnUse"), h(C1, "xlink:href", "#u"), t(C1, "id", "aX"), t(C1, "x1", "328.8"), t(C1, "x2", "328.8"), t(C1, "y1", "1099"), t(C1, "y2", "1108"), t(C1, "gradientUnits", "userSpaceOnUse"), h(E1, "xlink:href", "#v"), t(E1, "id", "aY"), t(E1, "x1", "559.3"), t(E1, "x2", "583.9"), t(E1, "y1", "709.1"), t(E1, "y2", "751.7"), t(E1, "gradientUnits", "userSpaceOnUse"), h(j1, "xlink:href", "#w"), t(j1, "id", "aZ"), t(j1, "x1", "549"), t(j1, "x2", "549"), t(j1, "y1", "713.4"), t(j1, "y2", "748.4"), t(j1, "gradientUnits", "userSpaceOnUse"), h(H1, "xlink:href", "#v"), t(H1, "id", "ba"), t(H1, "x1", "559.3"), t(H1, "x2", "583.9"), t(H1, "y1", "709.1"), t(H1, "y2", "751.7"), t(H1, "gradientUnits", "userSpaceOnUse"), h(D1, "xlink:href", "#w"), t(D1, "id", "bb"), t(D1, "x1", "549"), t(D1, "x2", "549"), t(D1, "y1", "713.4"), t(D1, "y2", "748.4"), t(D1, "gradientUnits", "userSpaceOnUse"), h(R1, "xlink:href", "#v"), t(R1, "id", "bc"), t(R1, "x1", "559.3"), t(R1, "x2", "583.9"), t(R1, "y1", "709.1"), t(R1, "y2", "751.7"), t(R1, "gradientUnits", "userSpaceOnUse"), h(B1, "xlink:href", "#w"), t(B1, "id", "bd"), t(B1, "x1", "549"), t(B1, "x2", "549"), t(B1, "y1", "713.4"), t(B1, "y2", "748.4"), t(B1, "gradientUnits", "userSpaceOnUse"), h(Q1, "xlink:href", "#v"), t(Q1, "id", "be"), t(Q1, "x1", "559.3"), t(Q1, "x2", "583.9"), t(Q1, "y1", "709.1"), t(Q1, "y2", "751.7"), t(Q1, "gradientUnits", "userSpaceOnUse"), h(L1, "xlink:href", "#w"), t(L1, "id", "bf"), t(L1, "x1", "549"), t(L1, "x2", "549"), t(L1, "y1", "713.4"), t(L1, "y2", "748.4"), t(L1, "gradientUnits", "userSpaceOnUse"), h(P1, "xlink:href", "#v"), t(P1, "id", "bg"), t(P1, "x1", "559.3"), t(P1, "x2", "583.9"), t(P1, "y1", "709.1"), t(P1, "y2", "751.7"), t(P1, "gradientUnits", "userSpaceOnUse"), h(K1, "xlink:href", "#w"), t(K1, "id", "bh"), t(K1, "x1", "549"), t(K1, "x2", "549"), t(K1, "y1", "713.4"), t(K1, "y2", "748.4"), t(K1, "gradientUnits", "userSpaceOnUse"), h(F1, "xlink:href", "#v"), t(F1, "id", "bi"), t(F1, "x1", "559.3"), t(F1, "x2", "583.9"), t(F1, "y1", "709.1"), t(F1, "y2", "751.7"), t(F1, "gradientUnits", "userSpaceOnUse"), h(Y1, "xlink:href", "#w"), t(Y1, "id", "bj"), t(Y1, "x1", "549"), t(Y1, "x2", "549"), t(Y1, "y1", "713.4"), t(Y1, "y2", "748.4"), t(Y1, "gradientUnits", "userSpaceOnUse"), h(V1, "xlink:href", "#v"), t(V1, "id", "bk"), t(V1, "x1", "559.3"), t(V1, "x2", "583.9"), t(V1, "y1", "709.1"), t(V1, "y2", "751.7"), t(V1, "gradientUnits", "userSpaceOnUse"), h(A1, "xlink:href", "#w"), t(A1, "id", "bl"), t(A1, "x1", "549"), t(A1, "x2", "549"), t(A1, "y1", "713.4"), t(A1, "y2", "748.4"), t(A1, "gradientUnits", "userSpaceOnUse"), h(T1, "xlink:href", "#v"), t(T1, "id", "bm"), t(T1, "x1", "559.3"), t(T1, "x2", "583.9"), t(T1, "y1", "709.1"), t(T1, "y2", "751.7"), t(T1, "gradientUnits", "userSpaceOnUse"), h(I1, "xlink:href", "#w"), t(I1, "id", "bn"), t(I1, "x1", "549"), t(I1, "x2", "549"), t(I1, "y1", "713.4"), t(I1, "y2", "748.4"), t(I1, "gradientUnits", "userSpaceOnUse"), h(N1, "xlink:href", "#v"), t(N1, "id", "bo"), t(N1, "x1", "559.3"), t(N1, "x2", "583.9"), t(N1, "y1", "709.1"), t(N1, "y2", "751.7"), t(N1, "gradientUnits", "userSpaceOnUse"), h(Z1, "xlink:href", "#w"), t(Z1, "id", "bp"), t(Z1, "x1", "549"), t(Z1, "x2", "549"), t(Z1, "y1", "713.4"), t(Z1, "y2", "748.4"), t(Z1, "gradientUnits", "userSpaceOnUse"), h(X1, "xlink:href", "#v"), t(X1, "id", "bq"), t(X1, "x1", "559.3"), t(X1, "x2", "583.9"), t(X1, "y1", "709.1"), t(X1, "y2", "751.7"), t(X1, "gradientUnits", "userSpaceOnUse"), h(W1, "xlink:href", "#w"), t(W1, "id", "br"), t(W1, "x1", "549"), t(W1, "x2", "549"), t(W1, "y1", "713.4"), t(W1, "y2", "748.4"), t(W1, "gradientUnits", "userSpaceOnUse"), h(J1, "xlink:href", "#v"), t(J1, "id", "bs"), t(J1, "x1", "559.3"), t(J1, "x2", "583.9"), t(J1, "y1", "709.1"), t(J1, "y2", "751.7"), t(J1, "gradientUnits", "userSpaceOnUse"), h(tr, "xlink:href", "#w"), t(tr, "id", "bt"), t(tr, "x1", "549"), t(tr, "x2", "549"), t(tr, "y1", "713.4"), t(tr, "y2", "748.4"), t(tr, "gradientUnits", "userSpaceOnUse"), h(er, "xlink:href", "#v"), t(er, "id", "bu"), t(er, "x1", "559.3"), t(er, "x2", "583.9"), t(er, "y1", "709.1"), t(er, "y2", "751.7"), t(er, "gradientUnits", "userSpaceOnUse"), h(rr, "xlink:href", "#w"), t(rr, "id", "bv"), t(rr, "x1", "549"), t(rr, "x2", "549"), t(rr, "y1", "713.4"), t(rr, "y2", "748.4"), t(rr, "gradientUnits", "userSpaceOnUse"), t(Tn, "y", "0"), t(Tn, "x", "0"), t(Tn, "height", "18"), t(Tn, "width", "20"), t(Tn, "fill", "#272727"), t(ml, "fill", "#222"), t(ml, "fill-rule", "evenodd"), t(ml, "d", "M9.99 0 5 3v6l-5 3v6l10-6V0h-.01zm10 0L15 3v6l5-3V0h-.01z"), t(yl, "fill", "#1c1c1c"), t(yl, "fill-rule", "evenodd"), t(yl, "d", "M0 0v6l5 3V3L.01 0H0zm10 0v12l10 6v-6l-5-3V3l-4.99-3H10z"), t(jt, "id", "pattern1"), t(jt, "x", "0"), t(jt, "y", "0"), t(jt, "width", "20"), t(jt, "height", "18"), t(jt, "patternUnits", "userSpaceOnUse"), t(jt, "class", "svelte-py5gbp"), h(nr, "xlink:href", "#x"), t(nr, "id", "A"), t(nr, "x1", "295"), t(nr, "x2", "295"), t(nr, "y1", "1004.4"), t(nr, "y2", "-357.6"), t(nr, "gradientUnits", "userSpaceOnUse"), t(u0, "fill", "url(#y)"), t(u0, "fill-rule", "evenodd"), t(u0, "stroke", "#696a69"), t(u0, "d", "M119 1046.4c-33-.4-94-23-105-42-1-7-7-94-7-162v-1075c0-13 3.5-103 5-130 8-13.9 56-33.8 68-37 12-3.3 25-6 36-6h416c11 0 24 2.7 36 6 12 3.2 60 23.1 68 37 1.5 27 5 117 5 130v1075c0 68-6 155-7 162-11 19-72 41.6-105 42H365z"), t(xl, "fill", "url(#z)"), t(xl, "fill-rule", "evenodd"), t(xl, "d", "M120 1022.4c-60 0-102-25-102-135v-1135c0-75 17-133 117-133h378c100 0 117 58 117 133v1135c0 110-42 135-102 135H365z"), t(g0, "fill", "#269dc5"), t(g0, "fill-rule", "evenodd"), t(g0, "stroke", "#6ac1df"), t(g0, "d", "M120 1015.4c-55 0-96-23-96-128v-1135c0-75 16-128 111-128h378c95 0 111 53 111 128v1135c0 105-41 128-96 128H365z"), t(In, "id", "pattern-bg"), t(In, "fill", "url(#pattern1)"), t(In, "fill-rule", "evenodd"), t(In, "stroke", "#000"), t(In, "d", "M120 1007.4c-45.4 0-90-15-90-120v-1127c0-75 15-128 105-128h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H365z"), t(Ht, "width", "516"), t(Ht, "height", "894"), t(Ht, "x", "66"), t(Ht, "y", "-321.6"), t(Ht, "fill", "#0d0d0d"), t(Ht, "stroke", "url(#B)"), t(Ht, "stroke-linecap", "round"), t(Ht, "stroke-linejoin", "round"), t(Ht, "rx", "22"), t(Ht, "ry", "22"), t(Dt, "width", "493"), t(Dt, "height", "871"), t(Dt, "x", "77"), t(Dt, "y", "-310.6"), t(Dt, "fill", "#0d0d0d"), t(Dt, "stroke", "url(#C)"), t(Dt, "stroke-linecap", "round"), t(Dt, "stroke-linejoin", "round"), t(Dt, "rx", "10"), t(Dt, "ry", "10"), t(Rt, "width", "516"), t(Rt, "height", "120"), t(Rt, "x", "66"), t(Rt, "y", "578.4"), t(Rt, "fill", "#0d0d0d"), t(Rt, "stroke", "url(#D)"), t(Rt, "stroke-linecap", "round"), t(Rt, "stroke-linejoin", "round"), t(Rt, "rx", "22"), t(Rt, "ry", "22"), t(Bt, "width", "493"), t(Bt, "height", "96"), t(Bt, "x", "77"), t(Bt, "y", "590.4"), t(Bt, "fill", "#0d0d0d"), t(Bt, "stroke", "url(#E)"), t(Bt, "stroke-linecap", "round"), t(Bt, "stroke-linejoin", "round"), t(Bt, "rx", "10"), t(Bt, "ry", "10"), t(Wt, "width", "116"), t(Wt, "height", "36"), t(Wt, "x", "86"), t(Wt, "y", "644.4"), t(Wt, "fill", "#00ec3a"), t(Wt, "fill-opacity", ".2"), t(Wt, "rx", "7"), t(Wt, "ry", "7"), t(Jt, "width", "116"), t(Jt, "height", "36"), t(Jt, "x", "446"), t(Jt, "y", "596.4"), t(Jt, "fill", "#00ec3a"), t(Jt, "fill-opacity", ".2"), t(Jt, "rx", "7"), t(Jt, "ry", "7"), t(te, "width", "116"), t(te, "height", "36"), t(te, "x", "446"), t(te, "y", "644.4"), t(te, "fill", "#00ec3a"), t(te, "fill-opacity", ".2"), t(te, "rx", "7"), t(te, "ry", "7"), t(et, "width", "76"), t(et, "height", "44"), t(et, "x", "511"), t(et, "y", "709.4"), t(et, "fill", "url(#F)"), t(et, "stroke", "var(--btn-border-stroke)"), t(et, "stroke-linecap", "round"), t(et, "stroke-linejoin", "round"), t(et, "stroke-width", "2"), t(et, "rx", "8"), t(et, "ry", "8"), t(lr, "width", "68"), t(lr, "height", "35"), t(lr, "x", "515"), t(lr, "y", "713.4"), t(lr, "fill", "url(#G)"), t(lr, "rx", "4"), t(lr, "ry", "4"), t(bl, "fill", "url(#H)"), t(bl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(bl, "transform", "translate(0 -411.6)"), t(Jr, "transform", "translate(0 54)"), t(Jr, "class", "cp-button"), t(Jr, "data-cp", "KEYCODE_TIMES"), t(U2, "fill", "#fff"), t(U2, "d", "M84-303.6h480v792H84z"), t(G2, "id", "uid_3418"), t(X, "transform", "translate(0 411.6)"), t(z2, "class", "cp-wrapper svelte-py5gbp"), t(tn, "x", "0"), t(tn, "y", "0"), t(tn, "width", "480"), t(tn, "height", "792"), t(tn, "overflow", "hidden"), t($2, "transform", "translate(85 109)"), t(wl, "fill", "url(#I)"), t(wl, "d", "M387.7 90a22 22 0 0 0-19 11H560a10 10 0 0 1 10 10v851a10 10 0 0 1-10 10H365.7v12H560a22 22 0 0 0 22-22V112a22 22 0 0 0-22-22H387.7z"), t(wl, "transform", "translate(0 -411.6)"), t(ql, "fill", "url(#J)"), t(ql, "d", "M66 904v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(ql, "transform", "translate(0 -411.6)"), t(kl, "fill", "url(#K)"), t(kl, "d", "M570 900v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62h-12z"), t(kl, "transform", "translate(0 -411.6)"), t(v0, "fill", "url(#L)"), t(v0, "fill-rule", "evenodd"), t(v0, "d", "M136.9 40C42.9 40 27 93 27 168v1135c0 44.7 7.4 74.6 20 94.1 17.3 23 43 29.9 73 29.9h408c30 0 55.7-6.8 73-29.9 12.6-19.5 20-49.4 20-94.1V168c0-75-15.8-128-109.9-128H137zm-1.9 4h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H120c-45.4 0-90-15-90-120V172C30 97 45 44 135 44z"), t(v0, "transform", "translate(0 -411.6)"), t(m0, "fill", "#1f7e9e"), t(m0, "fill-opacity", ".3"), t(m0, "fill-rule", "evenodd"), t(m0, "d", "M-638 1019.4c-54.4 0-95-23-95-128v-1135c0-75 15.8-128 109.9-128H-249c94 0 109.9 53 109.9 128v1135c0 105-40.6 128-95 128h-161.4z"), t(rt, "width", "76"), t(rt, "height", "44"), t(rt, "x", "511"), t(rt, "y", "709.4"), t(rt, "fill", "url(#M)"), t(rt, "stroke", "var(--btn-border-stroke)"), t(rt, "stroke-linecap", "round"), t(rt, "stroke-linejoin", "round"), t(rt, "stroke-width", "2"), t(rt, "rx", "8"), t(rt, "ry", "8"), t(ir, "width", "68"), t(ir, "height", "35"), t(ir, "x", "515"), t(ir, "y", "713.4"), t(ir, "fill", "url(#N)"), t(ir, "rx", "4"), t(ir, "ry", "4"), t(_l, "fill", "url(#O)"), t(_l, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(_l, "transform", "translate(0 -411.6)"), t(Nn, "class", "cp-button"), t(Nn, "data-cp", "KEYCODE_DIVIDE"), t(nt, "width", "76"), t(nt, "height", "44"), t(nt, "x", "511"), t(nt, "y", "709.4"), t(nt, "fill", "url(#P)"), t(nt, "stroke", "var(--btn-border-stroke)"), t(nt, "stroke-linecap", "round"), t(nt, "stroke-linejoin", "round"), t(nt, "stroke-width", "2"), t(nt, "rx", "8"), t(nt, "ry", "8"), t(ar, "width", "68"), t(ar, "height", "35"), t(ar, "x", "515"), t(ar, "y", "713.4"), t(ar, "fill", "url(#Q)"), t(ar, "rx", "4"), t(ar, "ry", "4"), t(Gl, "fill", "url(#R)"), t(Gl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Gl, "transform", "translate(0 -411.6)"), t(en, "transform", "translate(0 108)"), t(en, "class", "cp-button"), t(en, "data-cp", "KEYCODE_MINUS"), t(lt, "width", "76"), t(lt, "height", "44"), t(lt, "x", "511"), t(lt, "y", "709.4"), t(lt, "fill", "url(#S)"), t(lt, "stroke", "var(--btn-border-stroke)"), t(lt, "stroke-linecap", "round"), t(lt, "stroke-linejoin", "round"), t(lt, "stroke-width", "2"), t(lt, "rx", "8"), t(lt, "ry", "8"), t(or, "width", "68"), t(or, "height", "35"), t(or, "x", "515"), t(or, "y", "713.4"), t(or, "fill", "url(#T)"), t(or, "rx", "4"), t(or, "ry", "4"), t(Ul, "fill", "url(#U)"), t(Ul, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Ul, "transform", "translate(0 -411.6)"), t(rn, "transform", "translate(0 162)"), t(rn, "class", "cp-button"), t(rn, "data-cp", "KEYCODE_PLUS"), t(it, "width", "76"), t(it, "height", "44"), t(it, "x", "511"), t(it, "y", "709.4"), t(it, "fill", "url(#V)"), t(it, "stroke", "var(--btn-border-stroke)"), t(it, "stroke-linecap", "round"), t(it, "stroke-linejoin", "round"), t(it, "stroke-width", "2"), t(it, "rx", "8"), t(it, "ry", "8"), t(sr, "width", "68"), t(sr, "height", "35"), t(sr, "x", "515"), t(sr, "y", "713.4"), t(sr, "fill", "url(#W)"), t(sr, "rx", "4"), t(sr, "ry", "4"), t($l, "fill", "url(#X)"), t($l, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t($l, "transform", "translate(0 -411.6)"), t(nn, "transform", "translate(0 216)"), t(nn, "class", "cp-button"), t(nn, "data-cp", "KEYCODE_EXE"), t(at, "width", "76"), t(at, "height", "44"), t(at, "x", "511"), t(at, "y", "709.4"), t(at, "fill", "url(#Y)"), t(at, "stroke", "var(--btn-border-stroke)"), t(at, "stroke-linecap", "round"), t(at, "stroke-linejoin", "round"), t(at, "stroke-width", "2"), t(at, "rx", "8"), t(at, "ry", "8"), t(cr, "width", "68"), t(cr, "height", "35"), t(cr, "x", "515"), t(cr, "y", "713.4"), t(cr, "fill", "url(#Z)"), t(cr, "rx", "4"), t(cr, "ry", "4"), t(zl, "fill", "url(#aa)"), t(zl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(zl, "transform", "translate(0 -411.6)"), t(ln, "transform", "translate(-90)"), t(ln, "class", "cp-button"), t(ln, "data-cp", "KEYCODE_POWER"), t(ot, "width", "76"), t(ot, "height", "44"), t(ot, "x", "511"), t(ot, "y", "709.4"), t(ot, "fill", "url(#ab)"), t(ot, "stroke", "var(--btn-border-stroke)"), t(ot, "stroke-linecap", "round"), t(ot, "stroke-linejoin", "round"), t(ot, "stroke-width", "2"), t(ot, "rx", "8"), t(ot, "ry", "8"), t(dr, "width", "68"), t(dr, "height", "35"), t(dr, "x", "515"), t(dr, "y", "713.4"), t(dr, "fill", "url(#ac)"), t(dr, "rx", "4"), t(dr, "ry", "4"), t(Sl, "fill", "url(#ad)"), t(Sl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Sl, "transform", "translate(0 -411.6)"), t(an, "transform", "translate(-180)"), t(an, "class", "cp-button"), t(an, "data-cp", "KEYCODE_Z"), t(st, "width", "76"), t(st, "height", "44"), t(st, "x", "511"), t(st, "y", "709.4"), t(st, "fill", "url(#ae)"), t(st, "stroke", "var(--btn-border-stroke)"), t(st, "stroke-linecap", "round"), t(st, "stroke-linejoin", "round"), t(st, "stroke-width", "2"), t(st, "rx", "8"), t(st, "ry", "8"), t(fr, "width", "68"), t(fr, "height", "35"), t(fr, "x", "515"), t(fr, "y", "713.4"), t(fr, "fill", "url(#af)"), t(fr, "rx", "4"), t(fr, "ry", "4"), t(Ol, "fill", "url(#ag)"), t(Ol, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Ol, "transform", "translate(0 -411.6)"), t(on, "transform", "translate(-270)"), t(on, "class", "cp-button"), t(on, "data-cp", "KEYCODE_Y"), t(ct, "width", "76"), t(ct, "height", "44"), t(ct, "x", "511"), t(ct, "y", "709.4"), t(ct, "fill", "url(#ah)"), t(ct, "stroke", "var(--btn-border-stroke)"), t(ct, "stroke-linecap", "round"), t(ct, "stroke-linejoin", "round"), t(ct, "stroke-width", "2"), t(ct, "rx", "8"), t(ct, "ry", "8"), t(pr, "width", "68"), t(pr, "height", "35"), t(pr, "x", "515"), t(pr, "y", "713.4"), t(pr, "fill", "url(#ai)"), t(pr, "rx", "4"), t(pr, "ry", "4"), t(Ml, "fill", "url(#aj)"), t(Ml, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Ml, "transform", "translate(0 -411.6)"), t(sn, "transform", "translate(-360)"), t(sn, "class", "cp-button"), t(sn, "data-cp", "KEYCODE_X"), t(dt, "width", "76"), t(dt, "height", "44"), t(dt, "x", "511"), t(dt, "y", "709.4"), t(dt, "fill", "url(#ak)"), t(dt, "stroke", "var(--btn-border-stroke)"), t(dt, "stroke-linecap", "round"), t(dt, "stroke-linejoin", "round"), t(dt, "stroke-width", "2"), t(dt, "rx", "8"), t(dt, "ry", "8"), t(hr, "width", "68"), t(hr, "height", "35"), t(hr, "x", "515"), t(hr, "y", "713.4"), t(hr, "fill", "url(#al)"), t(hr, "rx", "4"), t(hr, "ry", "4"), t(Cl, "fill", "url(#am)"), t(Cl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Cl, "transform", "translate(0 -411.6)"), t(cn, "transform", "translate(-450 54)"), t(cn, "class", "cp-button"), t(cn, "data-cp", "KEYCODE_OPEN_PARENTHESIS"), t(ft, "width", "76"), t(ft, "height", "44"), t(ft, "x", "511"), t(ft, "y", "709.4"), t(ft, "fill", "url(#an)"), t(ft, "stroke", "var(--btn-border-stroke)"), t(ft, "stroke-linecap", "round"), t(ft, "stroke-linejoin", "round"), t(ft, "stroke-width", "2"), t(ft, "rx", "8"), t(ft, "ry", "8"), t(ur, "width", "68"), t(ur, "height", "35"), t(ur, "x", "515"), t(ur, "y", "713.4"), t(ur, "fill", "url(#ao)"), t(ur, "rx", "4"), t(ur, "ry", "4"), t(El, "fill", "url(#ap)"), t(El, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(El, "transform", "translate(0 -411.6)"), t(dn, "transform", "translate(-450)"), t(dn, "class", "cp-button"), t(dn, "data-cp", "KEYCODE_EQUALS"), t(pt, "width", "76"), t(pt, "height", "44"), t(pt, "x", "511"), t(pt, "y", "709.4"), t(pt, "fill", "url(#aq)"), t(pt, "stroke", "var(--btn-border-stroke)"), t(pt, "stroke-linecap", "round"), t(pt, "stroke-linejoin", "round"), t(pt, "stroke-width", "2"), t(pt, "rx", "8"), t(pt, "ry", "8"), t(gr, "width", "68"), t(gr, "height", "35"), t(gr, "x", "515"), t(gr, "y", "713.4"), t(gr, "fill", "url(#ar)"), t(gr, "rx", "4"), t(gr, "ry", "4"), t(jl, "fill", "url(#as)"), t(jl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(jl, "transform", "translate(0 -411.6)"), t(fn, "transform", "translate(-450 108)"), t(fn, "class", "cp-button"), t(fn, "data-cp", "KEYCODE_CLOSE_PARENTHESIS"), t(ht, "width", "76"), t(ht, "height", "44"), t(ht, "x", "511"), t(ht, "y", "709.4"), t(ht, "fill", "url(#at)"), t(ht, "stroke", "var(--btn-border-stroke)"), t(ht, "stroke-linecap", "round"), t(ht, "stroke-linejoin", "round"), t(ht, "stroke-width", "2"), t(ht, "rx", "8"), t(ht, "ry", "8"), t(vr, "width", "68"), t(vr, "height", "35"), t(vr, "x", "515"), t(vr, "y", "713.4"), t(vr, "fill", "url(#au)"), t(vr, "rx", "4"), t(vr, "ry", "4"), t(Hl, "fill", "url(#av)"), t(Hl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Hl, "transform", "translate(0 -411.6)"), t(pn, "transform", "translate(-450 162)"), t(pn, "class", "cp-button"), t(pn, "data-cp", "KEYCODE_COMMA"), t(ut, "width", "76"), t(ut, "height", "44"), t(ut, "x", "511"), t(ut, "y", "709.4"), t(ut, "fill", "url(#aw)"), t(ut, "stroke", "var(--btn-border-stroke)"), t(ut, "stroke-linecap", "round"), t(ut, "stroke-linejoin", "round"), t(ut, "stroke-width", "2"), t(ut, "rx", "8"), t(ut, "ry", "8"), t(mr, "width", "68"), t(mr, "height", "35"), t(mr, "x", "515"), t(mr, "y", "713.4"), t(mr, "fill", "url(#ax)"), t(mr, "rx", "4"), t(mr, "ry", "4"), t(Dl, "fill", "url(#ay)"), t(Dl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Dl, "transform", "translate(0 -411.6)"), t(hn, "transform", "translate(-450 216)"), t(hn, "class", "cp-button"), t(hn, "data-cp", "KEYCODE_NEGATIVE"), t(gt, "width", "116"), t(gt, "height", "36"), t(gt, "x", "511"), t(gt, "y", "709.4"), t(gt, "fill", "url(#az)"), t(gt, "stroke", "var(--btn-border-stroke)"), t(gt, "stroke-linecap", "round"), t(gt, "stroke-linejoin", "round"), t(gt, "stroke-width", "2"), t(gt, "rx", "8"), t(gt, "ry", "8"), t(yr, "width", "107"), t(yr, "height", "27"), t(yr, "x", "515"), t(yr, "y", "713.4"), t(yr, "fill", "url(#aA)"), t(yr, "rx", "4"), t(yr, "ry", "4"), t(Rl, "fill", "url(#aB)"), t(Rl, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Rl, "transform", "translate(0 -411.6)"), t(un, "transform", "translate(-425 -113)"), t(un, "class", "cp-button"), t(un, "data-cp", "KEYCODE_KEYBOARD"), t(vt, "width", "116"), t(vt, "height", "36"), t(vt, "x", "511"), t(vt, "y", "709.4"), t(vt, "fill", "url(#aC)"), t(vt, "stroke", "var(--btn-border-stroke)"), t(vt, "stroke-linecap", "round"), t(vt, "stroke-linejoin", "round"), t(vt, "stroke-width", "2"), t(vt, "rx", "8"), t(vt, "ry", "8"), t(xr, "width", "107"), t(xr, "height", "27"), t(xr, "x", "515"), t(xr, "y", "713.4"), t(xr, "fill", "url(#aD)"), t(xr, "rx", "4"), t(xr, "ry", "4"), t(Bl, "fill", "url(#aE)"), t(Bl, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Bl, "transform", "translate(0 -411.6)"), t(gn, "transform", "translate(-425 -65)"), t(gn, "class", "cp-button"), t(gn, "data-cp", "KEYCODE_SHIFT"), t(mt, "width", "116"), t(mt, "height", "36"), t(mt, "x", "511"), t(mt, "y", "709.4"), t(mt, "fill", "url(#aF)"), t(mt, "stroke", "var(--btn-border-stroke)"), t(mt, "stroke-linecap", "round"), t(mt, "stroke-linejoin", "round"), t(mt, "stroke-width", "2"), t(mt, "rx", "8"), t(mt, "ry", "8"), t(br, "width", "107"), t(br, "height", "27"), t(br, "x", "515"), t(br, "y", "713.4"), t(br, "fill", "url(#aG)"), t(br, "rx", "4"), t(br, "ry", "4"), t(Ql, "fill", "url(#aH)"), t(Ql, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Ql, "transform", "translate(0 -411.6)"), t(vn, "transform", "translate(-65 -113)"), t(vn, "class", "cp-button"), t(vn, "data-cp", "KEYCODE_BACKSPACE"), t(yt, "width", "116"), t(yt, "height", "36"), t(yt, "x", "511"), t(yt, "y", "709.4"), t(yt, "fill", "url(#aI)"), t(yt, "stroke", "var(--btn-border-stroke)"), t(yt, "stroke-linecap", "round"), t(yt, "stroke-linejoin", "round"), t(yt, "stroke-width", "2"), t(yt, "rx", "8"), t(yt, "ry", "8"), t(wr, "width", "107"), t(wr, "height", "27"), t(wr, "x", "515"), t(wr, "y", "713.4"), t(wr, "fill", "url(#aJ)"), t(wr, "rx", "4"), t(wr, "ry", "4"), t(Ll, "fill", "url(#aK)"), t(Ll, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Ll, "transform", "translate(0 -411.6)"), t(mn, "transform", "translate(-65 -65)"), t(mn, "class", "cp-button"), t(mn, "data-cp", "KEYCODE_CLEAR"), t(S2, "fill", "url(#aL)"), t(S2, "d", "M560 589.4s10 4.4 10 10v77a10 10 0 0 1-10 10H365.7v12H560c13.2 0 22-9.3 22-28v-70c0-12.2-22-22-22-22z"), t(O2, "fill", "url(#aM)"), t(O2, "d", "M66 618.4v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(M2, "fill", "url(#aN)"), t(M2, "d", "M570 614.4v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62z"), t(qr, "width", "204"), t(qr, "height", "116"), t(qr, "x", "221"), t(qr, "y", "580.4"), t(qr, "fill", "url(#aO)"), t(qr, "rx", "25"), t(qr, "ry", "58"), t(kr, "width", "200"), t(kr, "height", "112"), t(kr, "x", "223"), t(kr, "y", "582.4"), t(kr, "fill", "url(#aP)"), t(kr, "rx", "23"), t(kr, "ry", "55.9"), t(_r, "width", "185"), t(_r, "height", "98"), t(_r, "x", "231"), t(_r, "y", "589.4"), t(_r, "fill", "url(#aQ)"), t(_r, "rx", "16"), t(_r, "ry", "47.5"), t(Gr, "class", "cp-button cp-button-arrow"), t(Gr, "data-cp", "KEYCODE_UP"), t(Gr, "fill", "#7f7f7f"), t(Gr, "stroke", "url(#aR)"), t(Gr, "stroke-linecap", "round"), t(Gr, "stroke-linejoin", "round"), t(Gr, "d", "M330.2 611.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(Qt, "width", "104"), t(Qt, "height", "12"), t(Qt, "x", "272"), t(Qt, "y", "632.4"), t(Qt, "fill", "url(#aS)"), t(Qt, "stroke", "url(#aT)"), t(Qt, "stroke-linecap", "round"), t(Qt, "stroke-linejoin", "round"), t(Qt, "rx", "2"), t(Qt, "ry", "2"), t(ee, "class", "cp-button cp-button-arrow"), t(ee, "data-cp", "KEYCODE_DOWN"), t(ee, "fill", "#7f7f7f"), t(ee, "stroke", "url(#aU)"), t(ee, "stroke-linecap", "round"), t(ee, "stroke-linejoin", "round"), t(ee, "d", "M-317.8-665.2c-.4.8-5.3.8-6.2.8-.9 0-5.8 0-6.2-.8-.5-.7 2-5 2.4-5.8.4-.8 3-5 3.8-5 .9 0 3.4 4.2 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(ee, "transform", "scale(-1)"), t(re, "class", "cp-button cp-button-arrow"), t(re, "data-cp", "KEYCODE_LEFT"), t(re, "fill", "#7f7f7f"), t(re, "stroke", "url(#aV)"), t(re, "stroke-linecap", "round"), t(re, "stroke-linejoin", "round"), t(re, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(re, "transform", "rotate(-90 255.8 641.5)"), t(ne, "class", "cp-button cp-button-arrow"), t(ne, "data-cp", "KEYCODE_RIGHT"), t(ne, "fill", "#7f7f7f"), t(ne, "stroke", "url(#aW)"), t(ne, "stroke-linecap", "round"), t(ne, "stroke-linejoin", "round"), t(ne, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(ne, "transform", "matrix(0 -1 -1 0 1033.7 897.4)"), t(Pl, "fill", "url(#aX)"), t(Pl, "d", "m245 1098.7-2.5 6.7c1.1.4 2.3.6 3.5.6h154c2 0 3.8-.6 5.6-1.7l-4-5.6c-.5.2-1 .3-1.6.3H247l-2-.3z"), t(Pl, "transform", "translate(0 -411.6)"), t(xt, "width", "102"), t(xt, "height", "44"), t(xt, "x", "511"), t(xt, "y", "709.4"), t(xt, "fill", "url(#aY)"), t(xt, "stroke", "var(--btn-border-stroke)"), t(xt, "stroke-linecap", "round"), t(xt, "stroke-linejoin", "round"), t(xt, "stroke-width", "2"), t(xt, "rx", "8"), t(xt, "ry", "8"), t(Ur, "width", "94"), t(Ur, "height", "35"), t(Ur, "x", "515"), t(Ur, "y", "713.4"), t(Ur, "fill", "url(#aZ)"), t(Ur, "rx", "4"), t(Ur, "ry", "4"), t(Zn, "transform", "translate(-117 216)"), t(Zn, "class", "cp-button"), t(Zn, "data-cp", "KEYCODE_EXP"), t(bt, "width", "102"), t(bt, "height", "44"), t(bt, "x", "511"), t(bt, "y", "709.4"), t(bt, "fill", "url(#ba)"), t(bt, "stroke", "var(--btn-border-stroke)"), t(bt, "stroke-linecap", "round"), t(bt, "stroke-linejoin", "round"), t(bt, "stroke-width", "2"), t(bt, "rx", "8"), t(bt, "ry", "8"), t($r, "width", "94"), t($r, "height", "35"), t($r, "x", "515"), t($r, "y", "713.4"), t($r, "fill", "url(#bb)"), t($r, "rx", "4"), t($r, "ry", "4"), t(Xn, "transform", "translate(-117 162)"), t(Xn, "class", "cp-button"), t(Xn, "data-cp", "KEYCODE_3"), t(wt, "width", "102"), t(wt, "height", "44"), t(wt, "x", "511"), t(wt, "y", "709.4"), t(wt, "fill", "url(#bc)"), t(wt, "stroke", "var(--btn-border-stroke)"), t(wt, "stroke-linecap", "round"), t(wt, "stroke-linejoin", "round"), t(wt, "stroke-width", "2"), t(wt, "rx", "8"), t(wt, "ry", "8"), t(zr, "width", "94"), t(zr, "height", "35"), t(zr, "x", "515"), t(zr, "y", "713.4"), t(zr, "fill", "url(#bd)"), t(zr, "rx", "4"), t(zr, "ry", "4"), t(Wn, "transform", "translate(-117 108)"), t(Wn, "class", "cp-button"), t(Wn, "data-cp", "KEYCODE_6"), t(qt, "width", "102"), t(qt, "height", "44"), t(qt, "x", "511"), t(qt, "y", "709.4"), t(qt, "fill", "url(#be)"), t(qt, "stroke", "var(--btn-border-stroke)"), t(qt, "stroke-linecap", "round"), t(qt, "stroke-linejoin", "round"), t(qt, "stroke-width", "2"), t(qt, "rx", "8"), t(qt, "ry", "8"), t(Sr, "width", "94"), t(Sr, "height", "35"), t(Sr, "x", "515"), t(Sr, "y", "713.4"), t(Sr, "fill", "url(#bf)"), t(Sr, "rx", "4"), t(Sr, "ry", "4"), t(Jn, "transform", "translate(-117 54)"), t(Jn, "class", "cp-button"), t(Jn, "data-cp", "KEYCODE_9"), t(kt, "width", "102"), t(kt, "height", "44"), t(kt, "x", "511"), t(kt, "y", "709.4"), t(kt, "fill", "url(#bg)"), t(kt, "stroke", "var(--btn-border-stroke)"), t(kt, "stroke-linecap", "round"), t(kt, "stroke-linejoin", "round"), t(kt, "stroke-width", "2"), t(kt, "rx", "8"), t(kt, "ry", "8"), t(Or, "width", "94"), t(Or, "height", "35"), t(Or, "x", "515"), t(Or, "y", "713.4"), t(Or, "fill", "url(#bh)"), t(Or, "rx", "4"), t(Or, "ry", "4"), t(t0, "transform", "translate(-238 216)"), t(t0, "class", "cp-button"), t(t0, "data-cp", "KEYCODE_DOT"), t(_t, "width", "102"), t(_t, "height", "44"), t(_t, "x", "511"), t(_t, "y", "709.4"), t(_t, "fill", "url(#bi)"), t(_t, "stroke", "var(--btn-border-stroke)"), t(_t, "stroke-linecap", "round"), t(_t, "stroke-linejoin", "round"), t(_t, "stroke-width", "2"), t(_t, "rx", "8"), t(_t, "ry", "8"), t(Mr, "width", "94"), t(Mr, "height", "35"), t(Mr, "x", "515"), t(Mr, "y", "713.4"), t(Mr, "fill", "url(#bj)"), t(Mr, "rx", "4"), t(Mr, "ry", "4"), t(e0, "transform", "translate(-238 162)"), t(e0, "class", "cp-button"), t(e0, "data-cp", "KEYCODE_2"), t(Gt, "width", "102"), t(Gt, "height", "44"), t(Gt, "x", "511"), t(Gt, "y", "709.4"), t(Gt, "fill", "url(#bk)"), t(Gt, "stroke", "var(--btn-border-stroke)"), t(Gt, "stroke-linecap", "round"), t(Gt, "stroke-linejoin", "round"), t(Gt, "stroke-width", "2"), t(Gt, "rx", "8"), t(Gt, "ry", "8"), t(Cr, "width", "94"), t(Cr, "height", "35"), t(Cr, "x", "515"), t(Cr, "y", "713.4"), t(Cr, "fill", "url(#bl)"), t(Cr, "rx", "4"), t(Cr, "ry", "4"), t(r0, "transform", "translate(-238 108)"), t(r0, "class", "cp-button"), t(r0, "data-cp", "KEYCODE_5"), t(Ut, "width", "102"), t(Ut, "height", "44"), t(Ut, "x", "511"), t(Ut, "y", "709.4"), t(Ut, "fill", "url(#bm)"), t(Ut, "stroke", "var(--btn-border-stroke)"), t(Ut, "stroke-linecap", "round"), t(Ut, "stroke-linejoin", "round"), t(Ut, "stroke-width", "2"), t(Ut, "rx", "8"), t(Ut, "ry", "8"), t(Er, "width", "94"), t(Er, "height", "35"), t(Er, "x", "515"), t(Er, "y", "713.4"), t(Er, "fill", "url(#bn)"), t(Er, "rx", "4"), t(Er, "ry", "4"), t(n0, "transform", "translate(-238 54)"), t(n0, "class", "cp-button"), t(n0, "data-cp", "KEYCODE_8"), t(le, "width", "76"), t(le, "height", "44"), t(le, "x", "511"), t(le, "y", "1085.4"), t(le, "fill", "#15d81e"), t(le, "fill-opacity", ".2"), t(le, "rx", "8"), t(le, "ry", "8"), t($t, "width", "102"), t($t, "height", "44"), t($t, "x", "511"), t($t, "y", "709.4"), t($t, "fill", "url(#bo)"), t($t, "stroke", "var(--btn-border-stroke)"), t($t, "stroke-linecap", "round"), t($t, "stroke-linejoin", "round"), t($t, "stroke-width", "2"), t($t, "rx", "8"), t($t, "ry", "8"), t(jr, "width", "94"), t(jr, "height", "35"), t(jr, "x", "515"), t(jr, "y", "713.4"), t(jr, "fill", "url(#bp)"), t(jr, "rx", "4"), t(jr, "ry", "4"), t(l0, "transform", "translate(-359 216)"), t(l0, "class", "cp-button"), t(l0, "data-cp", "KEYCODE_0"), t(zt, "width", "102"), t(zt, "height", "44"), t(zt, "x", "511"), t(zt, "y", "709.4"), t(zt, "fill", "url(#bq)"), t(zt, "stroke", "var(--btn-border-stroke)"), t(zt, "stroke-linecap", "round"), t(zt, "stroke-linejoin", "round"), t(zt, "stroke-width", "2"), t(zt, "rx", "8"), t(zt, "ry", "8"), t(Hr, "width", "94"), t(Hr, "height", "35"), t(Hr, "x", "515"), t(Hr, "y", "713.4"), t(Hr, "fill", "url(#br)"), t(Hr, "rx", "4"), t(Hr, "ry", "4"), t(i0, "transform", "translate(-359 162)"), t(i0, "class", "cp-button"), t(i0, "data-cp", "KEYCODE_1"), t(St, "width", "102"), t(St, "height", "44"), t(St, "x", "511"), t(St, "y", "709.4"), t(St, "fill", "url(#bs)"), t(St, "stroke", "var(--btn-border-stroke)"), t(St, "stroke-linecap", "round"), t(St, "stroke-linejoin", "round"), t(St, "stroke-width", "2"), t(St, "rx", "8"), t(St, "ry", "8"), t(Dr, "width", "94"), t(Dr, "height", "35"), t(Dr, "x", "515"), t(Dr, "y", "713.4"), t(Dr, "fill", "url(#bt)"), t(Dr, "rx", "4"), t(Dr, "ry", "4"), t(a0, "transform", "translate(-359 108)"), t(a0, "class", "cp-button"), t(a0, "data-cp", "KEYCODE_4"), t(Ot, "width", "102"), t(Ot, "height", "44"), t(Ot, "x", "511"), t(Ot, "y", "709.4"), t(Ot, "fill", "url(#bu)"), t(Ot, "stroke", "var(--btn-border-stroke)"), t(Ot, "stroke-linecap", "round"), t(Ot, "stroke-linejoin", "round"), t(Ot, "stroke-width", "2"), t(Ot, "rx", "8"), t(Ot, "ry", "8"), t(Rr, "width", "94"), t(Rr, "height", "35"), t(Rr, "x", "515"), t(Rr, "y", "713.4"), t(Rr, "fill", "url(#bv)"), t(Rr, "rx", "4"), t(Rr, "ry", "4"), t(o0, "transform", "translate(-359 54)"), t(o0, "class", "cp-button"), t(o0, "data-cp", "KEYCODE_7"), t(yn, "fill", "#3d3d3d"), t(yn, "d", "M201.5 795.5h-2.4q-.7 0-.3-.6l7.5-18.7h-8.8q-.6 0-.6-.7v-1.9q0-.6.6-.6h11.8q.7 0 .7.6v2.2q0 .5-.4 1.5l-7.1 17.7q-.2.5-1 .5z"), t(yn, "font-family", "Rajdhani"), t(yn, "font-size", "35"), t(yn, "font-weight", "600"), t(yn, "letter-spacing", "0"), t(y0, "word-spacing", "0"), t(y0, "class", "cp-button-label"), m(y0, "line-height", "125%"), t(Br, "fill", "#fff"), t(Br, "d", "M199.3 723.3q-3.8 4-8 8l1.9 4.3 1.1 2.5q.4.8.8 1.2l.7.5 1.1.3-.2 1h-4.9l-2.7-8-1.2 1.2-1.5 1.6-1 1.3-.4.9-.1.8q0 .5.3.8.3.3 1 .4l-.3 1h-5.5l-.4-1q4.3-4.6 8.4-8.5l-1.8-4.3-1-2q-.3-.8-.6-1.1l-.8-.6-1.2-.3.2-1h5l2.5 7.4 1.8-1.8 1.2-1.5q.4-.5.5-1 .2-.4.2-.9 0-1-1.3-1.2l.2-1h5.6l.4 1z"), t(Br, "font-family", "Cambria"), t(Br, "font-size", "40"), t(Br, "font-style", "italic"), t(Br, "font-weight", "400"), t(Br, "letter-spacing", "0"), t(x0, "word-spacing", "0"), t(x0, "class", "cp-button-label"), m(x0, "line-height", "125%"), t(xn, "x", "1714.4"), t(xn, "y", "880.6"), t(xn, "font-family", "Lucida Calligraphy"), t(xn, "font-style", "italic"), t(xn, "font-weight", "400"), t(Mt, "xml:space", "preserve"), t(Mt, "x", "1714.4"), t(Mt, "y", "880.6"), t(Mt, "font-family", "Script MT Bold"), t(Mt, "font-size", "40"), t(Mt, "font-weight", "700"), t(Mt, "letter-spacing", "0"), t(Mt, "word-spacing", "0"), m(Mt, "line-height", "125%"), t(bn, "fill", "#3d3d3d"), t(bn, "d", "M322.2 792.6h2.7q1.3 0 2-.6.6-.6.6-2v-1.8q0-2.6-2.6-2.6h-2.7q-2.5 0-2.5 2.6v1.9q0 1.3.6 1.9.6.6 1.9.6zm0-9.8h2.7q2.6 0 2.6-2.6v-1.7q0-1.3-.7-2-.6-.5-1.9-.5h-2.7q-1.3 0-2 .6-.5.6-.5 1.9v1.7q0 2.6 2.5 2.6zm3.2 12.7h-3.7q-2.6 0-4-1.3t-1.4-3.9v-1.9q0-3.2 2.4-4.2-2.4-1-2.4-4.2v-1.8q0-2.5 1.4-3.8 1.4-1.4 4-1.4h3.7q2.6 0 4 1.4 1.5 1.3 1.5 3.8v1.8q0 1.6-.7 2.7-.6 1.1-1.7 1.5 2.4 1 2.4 4.3v1.8q0 2.6-1.5 3.9-1.4 1.3-4 1.3z"), t(bn, "font-family", "Rajdhani"), t(bn, "font-size", "35"), t(bn, "font-weight", "600"), t(bn, "letter-spacing", "0"), t(b0, "word-spacing", "0"), t(b0, "class", "cp-button-label"), m(b0, "line-height", "125%"), t(wn, "fill", "#3d3d3d"), t(wn, "d", "M441.9 784.1h4.9v-5.5q0-2.6-2.6-2.6H442q-2.5 0-2.5 2.6v3q0 2.5 2.5 2.5zm2.8 11.4h-7q-.7 0-.7-.6v-1.8q0-.5.6-.5h6.6q2.6 0 2.6-2.6v-3h-5.4q-2.6 0-4-1.4-1.5-1.4-1.5-4v-3.3q0-2.5 1.4-4 1.5-1.4 4-1.4h3.4q2.6 0 4 1.5 1.5 1.4 1.5 4V790q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(wn, "font-family", "Rajdhani"), t(wn, "font-size", "35"), t(wn, "font-weight", "600"), t(wn, "letter-spacing", "0"), t(w0, "word-spacing", "0"), t(w0, "class", "cp-button-label"), m(w0, "line-height", "125%"), t(qn, "fill", "#3d3d3d"), t(qn, "d", "M204 842.2V830l-7 12.3h7zm2.6 7.3h-2q-.7 0-.7-.6v-3.6h-9.2q-1 0-1-1v-1.1q0-.8.3-1.4l7.8-13.9.5-.7q.3-.2.8-.2h3q1 0 1 1v14.2h2.6q.6 0 .6.6v1.8q0 .7-.6.7h-2.5v3.6q0 .6-.6.6z"), t(qn, "font-family", "Rajdhani"), t(qn, "font-size", "35"), t(qn, "font-weight", "600"), t(qn, "letter-spacing", "0"), t(q0, "word-spacing", "0"), t(q0, "class", "cp-button-label"), m(q0, "line-height", "125%"), t(kn, "fill", "#3d3d3d"), t(kn, "d", "M323.9 837.6h-2.2q-.6 0-1.1.3-.4.2-.6.5-.3.8-.9.8h-2.2q-.6 0-.6-.6v-11q0-.6.6-.6h11.9q.6 0 .6.6v2q0 .6-.6.6h-9v6.4q.5-1.7 2.9-1.7h2q2.6 0 3.9 1.3 1.3 1.3 1.3 3.8v4.1q0 2.6-1.4 4-1.5 1.4-4 1.4h-3q-2.6 0-4-1.4t-1.4-4v-1q0-.5.6-.5h2.2q.6 0 .6.6v.9q0 2.5 2.5 2.5h2q2.6 0 2.6-2.5v-3.6q0-1.5-.6-2.2-.6-.7-2.1-.7z"), t(kn, "font-family", "Rajdhani"), t(kn, "font-size", "35"), t(kn, "font-weight", "600"), t(kn, "letter-spacing", "0"), t(k0, "word-spacing", "0"), t(k0, "class", "cp-button-label"), m(k0, "line-height", "125%"), t(_n, "fill", "#3d3d3d"), t(_n, "d", "M442 846.6h2.5q2.5 0 2.5-2.6v-2.8q0-2.6-2.5-2.6h-5v5.4q0 2.6 2.6 2.6zm3 3h-3.4q-2.6 0-4-1.5-1.5-1.4-1.5-4v-11.7q0-2.5 1.5-4 1.4-1.4 4-1.4h7q.5 0 .5.6v1.8q0 .6-.6.6h-6.4q-2.5 0-2.5 2.6v3h5.3q2.6 0 4 1.4 1.5 1.4 1.5 4v3.1q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(_n, "font-family", "Rajdhani"), t(_n, "font-size", "35"), t(_n, "font-weight", "600"), t(_n, "letter-spacing", "0"), t(_0, "word-spacing", "0"), t(_0, "class", "cp-button-label"), m(_0, "line-height", "125%"), t(Gn, "fill", "#3d3d3d"), t(Gn, "d", "M197.2 886.5v-2q0-.6.5-.9l3.6-2.2q.7-.4 1.2-.4h2q.7 0 .7.6V903q0 .6-.6.6h-2.3q-.6 0-.6-.6v-18.2l-3.8 2.2q-.7.3-.7-.4z"), t(Gn, "font-family", "Rajdhani"), t(Gn, "font-size", "35"), t(Gn, "font-weight", "600"), t(Gn, "letter-spacing", "0"), t(G0, "word-spacing", "0"), t(G0, "class", "cp-button-label"), m(G0, "line-height", "125%"), t(Un, "fill", "#3d3d3d"), t(Un, "d", "M316 903v-3.3q0-2.2 2-3.6l6.5-5.4q1.7-1.3 1.7-3.1v-1.2q0-2.5-2.6-2.5h-1.7q-1.4 0-2 .6-.6.6-.6 2v1.2q0 .7-.6.7h-2.2q-.6 0-.6-.7v-1.3q0-2.6 1.4-4 1.5-1.4 4-1.4h2.8q2.6 0 4 1.4t1.4 4v1.4q0 2.7-2.1 4.5l-6.7 5.5q-.8.7-.8 1.6v1h9q.7 0 .7.7v1.8q0 .6-.6.6h-12.3q-.6 0-.6-.6z"), t(Un, "font-family", "Rajdhani"), t(Un, "font-size", "35"), t(Un, "font-weight", "600"), t(Un, "letter-spacing", "0"), t(U0, "word-spacing", "0"), t(U0, "class", "cp-button-label"), m(U0, "line-height", "125%"), t($n, "fill", "#3d3d3d"), t($n, "d", "M442 890.8h1.9q2.6 0 2.6-2.5v-1.9q0-2.5-2.6-2.5h-2q-1.4 0-2 .6-.6.6-.6 2v1q0 .6-.6.6h-2.2q-.6 0-.6-.6v-1.1q0-2.6 1.4-4t4-1.4h3q2.7 0 4.1 1.4 1.4 1.4 1.4 4v1.9q0 3-2.8 4 2.8.6 2.8 3.8v2q0 2.6-1.4 4t-4 1.4h-3q-2.7 0-4-1.4-1.5-1.4-1.5-4V897q0-.6.6-.6h2.2q.6 0 .6.6v1.2q0 1.3.6 2 .6.5 2 .5h2q2.6 0 2.6-2.5v-2q0-2.5-2.6-2.5h-2q-.5 0-.5-.6v-1.5q0-.7.6-.7z"), t($n, "font-family", "Rajdhani"), t($n, "font-size", "35"), t($n, "font-weight", "600"), t($n, "letter-spacing", "0"), t($0, "word-spacing", "0"), t($0, "class", "cp-button-label"), m($0, "line-height", "125%"), t(zn, "fill", "#3d3d3d"), t(zn, "d", "M204.2 954.6h2.5q2.6 0 2.6-2.6v-11.4q0-2.6-2.6-2.6h-2.5q-2.5 0-2.5 2.6V952q0 2.6 2.5 2.6zm3 3h-3.5q-2.6 0-4-1.5-1.4-1.4-1.4-4v-11.7q0-2.5 1.4-4 1.4-1.4 4-1.4h3.5q2.6 0 4 1.5 1.4 1.4 1.4 4V952q0 2.6-1.4 4t-4 1.4z"), t(zn, "font-family", "Rajdhani"), t(zn, "font-size", "35"), t(zn, "font-weight", "600"), t(zn, "letter-spacing", "0"), t(z0, "word-spacing", "0"), t(z0, "class", "cp-button-label"), m(z0, "line-height", "125%"), t(Qr, "fill", "#3d3d3d"), t(Qr, "d", "M387 1061.8h-10q-.5 0-.5-.5V1042q0-.5.5-.5h10q.6 0 .6.5v1.6q0 .6-.5.6h-7.2q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.5.6h-6.1q-.4 0-.4.3v5.6q0 .3.4.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.3-.1q-.1-.2 0-.4l5.2-10-5-9.2v-.3q.1-.2.4-.2h2.2q.6 0 .9.5l3.6 7.3h.1l3.7-7.3q.2-.5.8-.5h2.3q.3 0 .3.2.2.2 0 .4l-5 9.1 5.2 10q.2.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7-4 7.7q-.2.5-.7.5zm17.8 0h-2q-.6 0-.6-.5V1042q0-.5.6-.5h7.5q2.3 0 3.6 1.3 1.2 1.2 1.2 3.6v3.2q0 2.3-1.2 3.6-1.3 1.3-3.6 1.3h-4.6q-.4 0-.4.3v6.4q0 .5-.5.5zm.8-9.9h4.2q2.3 0 2.3-2.3v-3q0-2.3-2.3-2.3h-4.2q-.3 0-.3.3v7q0 .3.3.3z"), t(Qr, "font-family", "Rajdhani"), t(Qr, "font-size", "31.5"), t(Qr, "font-weight", "600"), t(Qr, "letter-spacing", "0"), t(Qr, "transform", "scale(1.1 .9)"), t(S0, "word-spacing", "0"), t(S0, "class", "cp-button-label"), m(S0, "line-height", "125%"), t(Kl, "fill", "#3d3d3d"), t(Kl, "d", "M327 946.4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z"), t(Kl, "class", "cp-button-label"), t(Vt, "fill", "#fff"), t(Vt, "d", "m273.8 721.7-.3 1.7h.5c.4 0 .6.2.7.2l.3.4.2 1.5 1.4 10.6-1.4 1.8-1.1 1.2-.9.6-.5.3h-1l-.2-.5v-.5h-2l-.8 3.5.4.2 1 .2a5.6 5.6 0 0 0 2.5-.1c.5-.1 1-.4 1.5-.7a9 9 0 0 0 1.6-1.3 109.4 109.4 0 0 0 6.7-8.7l3-4.7 2-4.3v-.2l-.6-1.2h-4.5l-.3 1.7h.6c.4 0 .6.2.7.2v.6c0 1.4-1.4 4.3-4 8l-1-10.5h-4.6z"), t(Vt, "font-family", "Script MT Bold"), t(Vt, "font-size", "29.8"), t(Vt, "font-weight", "700"), t(Vt, "letter-spacing", "0"), t(Vt, "word-spacing", "0"), t(Vt, "class", "cp-button-label"), m(Vt, "line-height", "125%"), t(Lr, "fill", "#fff"), t(Lr, "d", "m375.3 734.5-1.1 5.5H360l-.4-1 10.7-12.2 3.3-3.7v-.2H369q-1 0-1.5.2-.5.1-1 .5l-1 1q-.5.6-1.2 1.9h-1.7l1.1-5.1h14l.3 1-14 16h6.3q.6-.2 1.1-.6.5-.3 1-1t1.2-2.3h1.7z"), t(Lr, "font-family", "Cambria"), t(Lr, "font-size", "40"), t(Lr, "font-style", "italic"), t(Lr, "font-weight", "400"), t(Lr, "letter-spacing", "0"), t(O0, "word-spacing", "0"), t(O0, "class", "cp-button-label"), m(O0, "line-height", "125%"), t(Sn, "fill", "#fff"), t(Sn, "d", "m102 795-2.6 2.5-1-1-1.3-1.3-2.6-2.6q-.6-1-.6-2v-10.8q0-1 .6-2l2.3-2.5 1.1-1 1.5-1.4 2.6 2.5-1.3 1.2-2.2 2.1q-1 1-1 1.2v10.6q0 .3 1.9 2l2.7 2.5z"), t(Sn, "font-family", "Blender Pro"), t(Sn, "font-size", "35"), t(Sn, "font-weight", "700"), t(Sn, "letter-spacing", "0"), t(M0, "word-spacing", "0"), t(M0, "class", "cp-button-label"), m(M0, "line-height", "125%"), t(On, "fill", "#fff"), t(On, "d", "M102 844.6q0 1.1-.6 2-.6.8-2.6 2.6l-2.4 2.3-2.6-2.6q1-.7 2.7-2.3 1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2.1-2l-1.3-1.3 2.5-2.5 1 1 1.7 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(On, "font-family", "Blender Pro"), t(On, "font-size", "35"), t(On, "font-weight", "700"), t(On, "letter-spacing", "0"), t(C0, "word-spacing", "0"), t(C0, "class", "cp-button-label"), m(C0, "line-height", "125%"), t(Mn, "fill", "#fff"), t(Mn, "d", "M108 728.7H85.6V723H108v5.6zm0 9H85.6V732H108v5.6z"), t(Mn, "font-family", "Blender Pro"), t(Mn, "font-size", "60"), t(Mn, "font-weight", "700"), t(Mn, "letter-spacing", "0"), t(E0, "word-spacing", "0"), t(E0, "class", "cp-button-label"), m(E0, "line-height", "125%"), t(Pr, "fill", "#fff"), t(Pr, "d", "M98 1300.2c-1 0-2 .2-2.6.8a4 4 0 0 0-.9 2.7c0 1 .2 1.9.8 2.5.4.4 1 .7 1.7.8-.3.7-.7 1.3-1.5 1.8l-.2.1v3.1l.6-.2a7.8 7.8 0 0 0 4.2-2.7 8 8 0 0 0 1.4-4.9c0-1.2-.3-2.3-.9-3-.6-.7-1.5-1-2.6-1z"), t(Pr, "font-family", "Britannic Bold"), t(Pr, "font-size", "35"), t(Pr, "font-weight", "400"), t(Pr, "letter-spacing", "0"), t(Pr, "transform", "translate(0 -411.6)"), t(j0, "word-spacing", "0"), t(j0, "class", "cp-button-label"), m(j0, "line-height", "125%"), t(Kr, "fill", "#fff"), t(Kr, "d", "m808.1 955-2.6 2.5-1.1-1-1.3-1.3q-2-1.9-2.5-2.6-.6-1-.6-2v-10.8q0-1 .6-2 .6-.9 2.3-2.5l1-1 1.6-1.4 2.6 2.5-1.4 1.2-2.1 2.1q-1 1-1 1.2v10.6q0 .3 1.8 2l2.7 2.5zm17.4-8h-13.6v-3.3h13.6v3.3zm10.6 3.6q0 1.1-.5 2-.6.8-2.5 2.6l-2.5 2.3-2.5-2.6 2.6-2.3q1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2-2l-1.4-1.3 2.5-2.5 1.1 1 1.6 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(Kr, "font-family", "Blender Pro"), t(Kr, "font-size", "35"), t(Kr, "font-weight", "700"), t(Kr, "letter-spacing", "0"), t(Kr, "transform", "translate(-720)"), t(H0, "word-spacing", "0"), t(H0, "class", "cp-button-label"), m(H0, "line-height", "125%"), t(Fr, "fill", "#fff"), t(Fr, "d", "M482.4 1061.8h-10q-.6 0-.6-.5V1042q0-.5.6-.5h10q.5 0 .5.5v1.6q0 .6-.5.6h-7.1q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.4.3h7.1q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.4-.1v-.4l5.3-10-5-9.2v-.3q0-.2.3-.2h2.3q.6 0 .9.5l3.6 7.3h.1l3.6-7.3q.3-.5.8-.5h2.4q.2 0 .3.2.1.2 0 .4l-5 9.1 5.2 10q.1.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7h-.1l-3.9 7.7q-.2.5-.7.5zm25.8 0h-10q-.6 0-.6-.5V1042q0-.5.5-.5h10.1q.5 0 .5.5v1.6q0 .6-.5.6H507q-.3 0-.3.3v5.3q0 .3.3.3h6.1q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.3.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5z"), t(Fr, "font-family", "Rajdhani"), t(Fr, "font-size", "31.5"), t(Fr, "font-weight", "600"), t(Fr, "letter-spacing", "0"), t(Fr, "transform", "scale(1.1 .9)"), t(D0, "word-spacing", "0"), t(D0, "class", "cp-button-label"), m(D0, "line-height", "125%"), t(Cn, "fill", "#fff"), t(Cn, "d", "M552.6 889.9h8.5q1.2 0 1.2 1.2v2.5q0 1.2-1.2 1.2h-8.5v8.7q0 1.2-1.2 1.2h-2.7q-1.2 0-1.2-1.2v-8.7H539q-1.2 0-1.2-1.2v-2.5q0-1.2 1.2-1.2h8.6v-8.6q0-1.2 1.2-1.2h2.7q1.2 0 1.2 1.2v8.6z"), t(Cn, "font-family", "Rajdhani"), t(Cn, "font-size", "60"), t(Cn, "font-weight", "600"), t(Cn, "letter-spacing", "0"), t(R0, "word-spacing", "0"), t(R0, "class", "cp-button-label"), m(R0, "line-height", "125%"), t(En, "fill", "#fff"), t(En, "d", "M559.3 840H539q-1 0-1-1v-1.3q0-1 1-1h20.3q1 0 1 1v1.3q0 1-1 1z"), t(En, "font-family", "Rajdhani"), t(En, "font-size", "60"), t(En, "font-weight", "600"), t(En, "letter-spacing", "0"), t(B0, "word-spacing", "0"), t(B0, "class", "cp-button-label"), m(B0, "line-height", "125%"), t(jn, "fill", "#fff"), t(jn, "d", "m552.6 784 6.3 6.4q.8.7 0 1.6l-2 1.9q-.7.9-1.6 0l-6.3-6.3-6.3 6.4q-.9.8-1.6-.1l-2-2q-.8-.8 0-1.5l6.3-6.4-6.3-6.2q-.8-.9 0-1.7l2-2q.8-.8 1.6 0l6.3 6.3 6.3-6.2q.8-.9 1.6 0l2 2q.7.7 0 1.6l-6.3 6.2z"), t(jn, "font-family", "Rajdhani"), t(jn, "font-size", "60"), t(jn, "font-weight", "600"), t(jn, "letter-spacing", "0"), t(Q0, "word-spacing", "0"), t(Q0, "class", "cp-button-label"), m(Q0, "line-height", "125%"), t(Hn, "fill", "#fff"), t(Hn, "d", "M547 740.3v-3.2q0-1 1-1 h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1zm11.1-7.9H540q-1.1 0-1.1-1v-2q0-1 1-1h18.2q1 0 1 1v2q0 1-1 1zm-11.1-8.8v-3.1q0-1.1 1-1.1h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1z"), t(Hn, "font-family", "Rajdhani"), t(Hn, "font-size", "60"), t(Hn, "font-weight", "600"), t(Hn, "letter-spacing", "0"), t(L0, "word-spacing", "0"), t(L0, "class", "cp-button-label"), m(L0, "line-height", "125%"), t(Dn, "fill", "#fff"), t(Dn, "d", "M450.5 738.4H447q-1.3 0-.7-1.1l7.4-14.2q.5-1 .9-1.2.4-.3 1.3-.3h4.2q.9 0 1.3.3t.9 1.2l7.4 14.2q.6 1-.7 1h-3.4q-1 0-1.4-1l-6.2-12-6.2 12q-.6 1-1.4 1z"), t(Dn, "font-family", "Rajdhani"), t(Dn, "font-size", "60"), t(Dn, "font-weight", "600"), t(Dn, "letter-spacing", "0"), t(P0, "word-spacing", "0"), t(P0, "class", "cp-button-label"), m(P0, "line-height", "125%"), t(Rn, "fill", "#fff"), t(Rn, "d", "M101.6 619.1h-1.5q-.4 0-.4-.3v-12.2q0-.4.4-.4h1.5q.4 0 .4.4v6.3h.1l.6-1 4.5-5.3q.3-.4.8-.4h1.7q.5 0 .2.4l-4.6 5.3 5.2 6.8q.2.4-.3.4h-1.3q-.7 0-1-.3l-4-5.5-1.9 1.9v3.6q0 .3-.4.3zm19.4 0h-5.2q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.7 0 2.7.8 1 .8 1 2.3v2.5q0 .4-.5.4h-6.3q-.2 0-.2.2v.9q0 1.4 1.7 1.4h4.7q.4 0 .4.4v1q0 .3-.4.3zm-6.3-5.6h4.2q.3 0 .3-.2v-1.2q0-.8-.4-1.1-.4-.4-1.3-.4h-1.3q-1 0-1.3.4-.4.3-.4 1v1.3q0 .2.2.2zm10.7 8.9h-1.2q-.4 0-.4-.4v-1q0-.4.4-.4h.5q1.5 0 2-.5.6-.4 1-1.5h-1q-.4 0-.5-.4l-3.1-9q-.1-.3.3-.3h1.6q.3 0 .4.3l2.6 7.9 2.7-7.9q0-.3.4-.3h1.5q.5 0 .4.3l-3.2 9.7q-.6 1.7-1.5 2.6-1 .9-2.9.9zm12.1-5h3q1.7 0 1.7-1.5v-4q0-1.4-1.7-1.4h-1.3q-2 0-2 1.7v5q0 .2.3.2zm-2.5 1.4v-13.4q0-.4.4-.4h1.5q.4 0 .4.4v4.5q.7-1 2.5-1h1q1.7 0 2.7.7 1 .8 1 2.3v4.1q0 1.5-1 2.3-1 .8-2.7.8h-5.4q-.4 0-.4-.3zm17.7.3h-2.1q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.8 0 2.8.8 1 .8 1 2.3v4q0 1.5-1 2.3-1 .8-2.7.8zm-1.8-1.7h1.5q1.7 0 1.7-1.5v-3.8q0-1.5-1.7-1.5h-1.5q-.9 0-1.3.4-.4.3-.4 1v4q0 .7.4 1 .4.4 1.3.4zm12.5 1.7h-1q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h5.2q.5 0 .5.3v9.6q0 .3-.5.3h-1.4q-.4 0-.4-.3v-.8h-.1q-.6 1.1-2.4 1.1zm2.5-3.4v-5l-.3-.1h-2.8q-1.7 0-1.7 1.5v3.8q0 1.5 1.7 1.5h1.1q2 0 2-1.7zm7.1 3.4h-1.5q-.4 0-.4-.3v-9.6q0-.3.4-.3h1.5q.4 0 .4.3v.8q.3-.5 1-.8.6-.3 1.5-.3h.8q.4 0 .4.3v1q0 .5-.4.4h-1.4q-2 0-2 1.8v6.4q0 .3-.3.3zm10.5 0h-1.2q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3.9-.8 2.6-.8h1.2q1.8 0 2.3 1h.1v-4.5q0-.4.4-.4h1.5q.4 0 .4.4v13.4q0 .3-.4.3h-1.5q-.4 0-.4-.3v-.8q-.6 1.1-2.4 1.1zm2.4-3.4v-3.4q0-1.7-2-1.7h-1.2q-1.6 0-1.6 1.5v3.8q0 1.5 1.6 1.5h1.3q2 0 2-1.7z"), t(Rn, "font-family", "Rajdhani"), t(Rn, "font-size", "25"), t(Rn, "font-weight", "600"), t(Rn, "letter-spacing", "0"), t(K0, "word-spacing", "0"), t(K0, "class", "cp-button-label"), m(K0, "line-height", "125%"), t(Yr, "fill", "#42caf7"), t(Yr, "d", "M118.6 667.2v-.6q0-.4.4-.4h1.6q.4 0 .4.4v.4q0 1.1.5 1.6.4.4 1.5.4h1.7q1.1 0 1.6-.5t.5-1.6v-.5q0-.8-.7-1.3-.6-.5-1.5-.6l-2-.4-2-.6q-.8-.3-1.4-1.2-.6-.9-.6-2.3v-1q0-1.9 1-2.9t2.9-1h2.6q1.9 0 2.9 1t1 2.9v.5q0 .4-.4.4H127q-.4 0-.4-.4v-.3q0-1-.5-1.5-.4-.5-1.5-.5H123q-1 0-1.5.5t-.5 1.6v.8q0 1.1 1.6 1.5l1.6.3 1.8.4 1.6.7q.7.4 1.1 1.2.5.9.5 2v1q0 1.9-1 3-1.1 1-3 1h-2.7q-1.8 0-2.9-1-1-1.1-1-3zm15.7 3.9h-1.6q-.4 0-.4-.4V654q0-.4.4-.4h1.6q.4 0 .4.4v5.7h.1q.6-1.3 2.6-1.3h1q1.9 0 2.9 1t1 2.9v8.4q0 .4-.5.4h-1.6q-.4 0-.4-.4v-8.3q0-1.9-1.8-1.9h-1.2q-2 0-2 2.1v8.1q0 .4-.5.4zm11.1-14.8V654q0-.4.4-.4h1.6q.4 0 .4.4v2.3q0 .4-.4.4h-1.6q-.4 0-.4-.4zm0 14.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v12.3h-2q-.4 0-.4-.4zm9.6-12.3h2q.5 0 .5.4v1.3q0 .4-.5.4h-2q-.3 0-.3.3v10q0 .3-.5.3h-1.6q-.4 0-.4-.4v-10q0-.2-.3-.2h-1.3q-.4 0-.4-.4v-1.6l.4-.1h1.3q.3 0 .3-.3v-.7q0-1.8 1-2.8 1-1 2.7-1h1.1q.5 0 .5.4v1.3q0 .4-.5.4h-.7q-.9 0-1.3.4-.3.5-.3 1.4v.6q0 .3.2.3zm4.8 2.1h-1.5v-1.8q0-.4.3-.4h1.2q.3 0 .3-.3v-2q0-.4.4-.4h1.6q.4 0 .4.4v2.2q0 .3.3.3h2.3q.5 0 .5.4v1.3q0 .4-.5.4h-2.3q-.3 0-.3.3v6.4q0 1.8 2 1.8h.9q.4 0 .4.4v1.3q0 .4-.4.4H164q-1.8 0-2.9-1-1-1-1-2.8v-6.5q0-.3-.3-.3z"), t(Yr, "font-family", "Rajdhani"), t(Yr, "font-size", "25"), t(Yr, "font-weight", "600"), t(Yr, "letter-spacing", "0"), m(Yr, "text-align", "center"), t(Bn, "text-anchor", "middle"), t(Bn, "word-spacing", "0"), t(Bn, "class", "cp-button-label"), m(Bn, "line-height", "125%"), m(Bn, "text-align", "center"), t(Vr, "fill", "#fff"), t(Vr, "d", "M503.8 671.1H501q-1.8 0-2.9-1-1-1-1-2.8v-8.4q0-1.8 1-2.8 1-1 3-1h2.8q1.8 0 2.9 1 1 1 1 2.8v1.2q0 .5-.5.5h-1.5q-.5 0-.5-.5v-1q0-1.9-1.8-1.9h-2.1q-1.8 0-1.8 1.8v8.2q0 1.8 1.8 1.8h2.1q1.8 0 1.8-1.8V666q0-.5.5-.5h1.5q.5 0 .5.5v1.2q0 1.8-1 2.8-1 1-2.9 1zm8.8 0h-1.5q-.5 0-.5-.4V654q0-.4.5-.4h1.5q.5 0 .5.4v16.7q0 .4-.5.4zm12.8 0H520q-1.9 0-3-1-1-1-1-2.8v-5q0-1.9 1-2.9 1.1-1 3-1h2q1.9 0 2.9 1t1 2.9v3.1q0 .5-.4.5h-6.7q-.3 0-.3.2v1.1q0 1.8 1.8 1.8h5q.5 0 .5.5v1.2q0 .4-.4.4zm-6.6-6.9h4.4q.3 0 .3-.3v-1.6q0-.9-.4-1.3-.5-.5-1.4-.5h-1.4q-1 0-1.4.5-.4.4-.4 1.3v1.6q0 .3.3.3zm14.4 6.9h-1q-1.8 0-2.8-1-1-1-1-2.8v-5q0-1.9 1-2.9t2.9-1h5.6q.4 0 .4.4v12q0 .3-.4.3h-1.6q-.4 0-.4-.4v-.9h-.1q-.6 1.3-2.6 1.3zm2.7-4.2v-6.1q0-.3-.3-.3h-3q-1.8 0-1.8 1.9v4.8q0 1.8 1.8 1.8h1.2q2 0 2-2.1zm7.5 4.2h-1.6q-.4 0-.4-.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v1h.1q.3-.7 1-1 .7-.4 1.6-.4h1q.3 0 .3.4v1.3q0 .5-.4.4H546q-2 0-2 2.3v8q0 .3-.5.3z"), t(Vr, "font-family", "Rajdhani"), t(Vr, "font-size", "25"), t(Vr, "font-weight", "600"), t(Vr, "letter-spacing", "0"), m(Vr, "text-align", "center"), t(Qn, "text-anchor", "middle"), t(Qn, "word-spacing", "0"), t(Qn, "class", "cp-button-label"), m(Qn, "line-height", "125%"), m(Qn, "text-align", "center"), t(T, "fill", "#42caf7"), t(T, "d", "M473.6 656.2a1.5 1.5 0 0 0-1 2.6 6.5 6.5 0 1 1-9.2 0 1.5 1.5 0 1 0-2.1-2.2 9.5 9.5 0 1 0 13.4 0 1.5 1.5 0 0 0-1-.4z"), t(T, "color", "#000"), t(T, "font-family", "sans-serif"), t(T, "font-weight", "400"), t(T, "overflow", "visible"), t(T, "class", "cp-button-label"), m(T, "line-height", "normal"), m(T, "text-indent", "0px"), m(T, "text-align", "start"), m(T, "text-decoration-line", "none"), m(T, "text-decoration-style", "solid"), m(T, "text-decoration-color", "rgb(0, 0, 0)"), m(T, "text-transform", "none"), m(T, "white-space", "normal"), m(T, "isolation", "auto"), m(T, "mix-blend-mode", "normal"), t(I, "fill", "#42caf7"), t(I, "d", "M468 652.4c-.8 0-1.5.6-1.5 1.5v10c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10c0-.9-.7-1.5-1.5-1.5z"), t(I, "color", "#000"), t(I, "font-family", "sans-serif"), t(I, "font-weight", "400"), t(I, "overflow", "visible"), t(I, "class", "cp-button-label"), m(I, "line-height", "normal"), m(I, "text-indent", "0px"), m(I, "text-align", "start"), m(I, "text-decoration-line", "none"), m(I, "text-decoration-style", "solid"), m(I, "text-decoration-color", "rgb(0, 0, 0)"), m(I, "text-transform", "none"), m(I, "white-space", "normal"), m(I, "isolation", "auto"), m(I, "mix-blend-mode", "normal"), t(F0, "fill", "#fff"), t(F0, "fill-rule", "evenodd"), t(F0, "d", "m500 607.4-12 6.9 12.2 7v-4H520v-6h-20z"), t(F0, "class", "cp-button-label"), t(Fl, "fill", "#222"), t(Fl, "fill-rule", "evenodd"), t(Fl, "d", "m1210-959.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(Yl, "fill", "#1c1c1c"), t(Yl, "fill-rule", "evenodd"), t(Yl, "d", "M1210-959.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(ie, "width", "20"), t(ie, "height", "18"), t(ie, "x", "1200"), t(ie, "y", "-941.6"), t(ie, "fill", "#7e7e7e"), t(ie, "fill-opacity", ".2"), t(ie, "rx", "0"), t(ie, "ry", "0"), t(Vl, "fill", "#272727"), t(Vl, "fill-rule", "evenodd"), t(Vl, "d", "m1275-897.6-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3z"), t(Al, "fill", "#222"), t(Al, "fill-rule", "evenodd"), t(Al, "d", "m1275-909.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(Tl, "fill", "#1c1c1c"), t(Tl, "fill-rule", "evenodd"), t(Tl, "d", "M1275-909.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(ae, "width", "20"), t(ae, "height", "18"), t(ae, "x", "1265"), t(ae, "y", "-891.6"), t(ae, "fill", "#7e7e7e"), t(ae, "fill-opacity", ".2"), t(ae, "rx", "0"), t(ae, "ry", "0"), t(u, "transform", "translate(0 411.6)"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), t(e, "viewBox", "0 0 648 1464");
    },
    m(B2, hi) {
      G(B2, e, hi), r(e, n), r(n, a), r(a, o), r(a, s), r(a, d), r(a, c), r(n, f), r(f, p), r(f, y), r(f, v), r(f, O), r(f, z), r(n, S), r(S, _), r(S, b), r(S, U), r(S, H), r(n, E), r(E, A), r(E, C), r(E, g), r(E, K), r(E, q), r(n, Q), r(Q, Ct), r(Q, Kn), r(Q, Pt), r(Q, ce), r(n, Tr), r(Tr, N), r(Tr, J), r(n, At), r(At, Kt), r(At, de), r(At, Fn), r(At, Ft), r(n, Tt), r(Tt, tt), r(Tt, Yt), r(Tt, Et), r(Tt, Ir), r(n, Nr), r(Nr, $), r(Nr, V), r(n, fe), r(fe, Zr), r(fe, Yn), r(n, pe), r(pe, Xr), r(pe, Xl), r(n, X0), r(X0, Wl), r(X0, W0), r(n, c0), r(c0, J0), r(c0, tl), r(c0, el), r(n, d0), r(d0, rl), r(d0, nl), r(d0, ll), r(n, Vn), r(Vn, Jl), r(Vn, t2), r(Vn, e2), r(Vn, r2), r(n, Wr), r(Wr, n2), r(Wr, l2), r(Wr, i2), r(Wr, a2), r(Wr, o2), r(n, il), r(il, s2), r(il, al), r(n, An), r(An, c2), r(An, d2), r(An, f2), r(An, ol), r(n, f0), r(f0, p2), r(f0, sl), r(f0, cl), r(n, p0), r(p0, h2), r(p0, dl), r(p0, fl), r(n, pl), r(pl, u2), r(pl, hl), r(n, ul), r(ul, g2), r(ul, gl), r(n, h0), r(h0, v2), r(h0, vl), r(h0, m2), r(n, It), r(It, y2), r(It, x2), r(It, b2), r(It, w2), r(It, q2), r(It, k2), r(It, _2), r(n, he), r(n, ue), r(n, ge), r(n, ve), r(n, me), r(n, ye), r(n, xe), r(n, be), r(n, we), r(n, qe), r(n, ke), r(n, _e), r(n, Ge), r(n, Ue), r(n, $e), r(n, ze), r(n, Se), r(n, Oe), r(n, Me), r(n, Ce), r(n, Ee), r(n, je), r(n, He), r(n, De), r(n, Re), r(n, Be), r(n, Qe), r(n, Le), r(n, Pe), r(n, Ke), r(n, Fe), r(n, Ye), r(n, Ve), r(n, Ae), r(n, Te), r(n, Ie), r(n, Ne), r(n, Ze), r(n, Xe), r(n, We), r(n, Je), r(n, t1), r(n, e1), r(n, r1), r(n, n1), r(n, l1), r(n, i1), r(n, a1), r(n, o1), r(n, s1), r(n, c1), r(n, d1), r(n, f1), r(n, p1), r(n, h1), r(n, u1), r(n, g1), r(n, v1), r(n, m1), r(n, y1), r(n, x1), r(n, b1), r(n, w1), r(n, q1), r(n, Nt), r(n, Zt), r(n, Xt), r(n, k1), r(n, _1), r(n, G1), r(n, U1), r(n, $1), r(n, z1), r(n, S1), r(n, O1), r(n, M1), r(n, C1), r(n, E1), r(n, j1), r(n, H1), r(n, D1), r(n, R1), r(n, B1), r(n, Q1), r(n, L1), r(n, P1), r(n, K1), r(n, F1), r(n, Y1), r(n, V1), r(n, A1), r(n, T1), r(n, I1), r(n, N1), r(n, Z1), r(n, X1), r(n, W1), r(n, J1), r(n, tr), r(n, er), r(n, rr), r(n, jt), r(jt, Tn), r(jt, ml), r(jt, yl), r(n, nr), r(e, X), r(X, u0), r(X, xl), r(X, g0), r(X, In), r(X, Ht), r(X, Dt), r(X, Rt), r(X, Bt), r(X, Wt), r(X, Jt), r(X, te), r(X, Jr), r(Jr, et), r(Jr, lr), r(Jr, bl), r(X, G2), r(G2, U2), r(e, $2), r($2, tn), r(tn, z2), r(e, u), r(u, wl), r(u, ql), r(u, kl), r(u, v0), r(u, m0), r(u, Nn), r(Nn, rt), r(Nn, ir), r(Nn, _l), r(u, en), r(en, nt), r(en, ar), r(en, Gl), r(u, rn), r(rn, lt), r(rn, or), r(rn, Ul), r(u, nn), r(nn, it), r(nn, sr), r(nn, $l), r(u, ln), r(ln, at), r(ln, cr), r(ln, zl), r(u, an), r(an, ot), r(an, dr), r(an, Sl), r(u, on), r(on, st), r(on, fr), r(on, Ol), r(u, sn), r(sn, ct), r(sn, pr), r(sn, Ml), r(u, cn), r(cn, dt), r(cn, hr), r(cn, Cl), r(u, dn), r(dn, ft), r(dn, ur), r(dn, El), r(u, fn), r(fn, pt), r(fn, gr), r(fn, jl), r(u, pn), r(pn, ht), r(pn, vr), r(pn, Hl), r(u, hn), r(hn, ut), r(hn, mr), r(hn, Dl), r(u, un), r(un, gt), r(un, yr), r(un, Rl), r(u, gn), r(gn, vt), r(gn, xr), r(gn, Bl), r(u, vn), r(vn, mt), r(vn, br), r(vn, Ql), r(u, mn), r(mn, yt), r(mn, wr), r(mn, Ll), r(u, S2), r(u, O2), r(u, M2), r(u, qr), r(u, kr), r(u, _r), r(u, Gr), r(u, Qt), r(u, ee), r(u, re), r(u, ne), r(u, Pl), r(u, Zn), r(Zn, xt), r(Zn, Ur), r(u, Xn), r(Xn, bt), r(Xn, $r), r(u, Wn), r(Wn, wt), r(Wn, zr), r(u, Jn), r(Jn, qt), r(Jn, Sr), r(u, t0), r(t0, kt), r(t0, Or), r(u, e0), r(e0, _t), r(e0, Mr), r(u, r0), r(r0, Gt), r(r0, Cr), r(u, n0), r(n0, Ut), r(n0, Er), r(u, le), r(u, l0), r(l0, $t), r(l0, jr), r(u, i0), r(i0, zt), r(i0, Hr), r(u, a0), r(a0, St), r(a0, Dr), r(u, o0), r(o0, Ot), r(o0, Rr), r(u, y0), r(y0, yn), r(u, x0), r(x0, Br), r(u, Mt), r(Mt, xn), r(xn, N2), r(Mt, Z2), r(u, b0), r(b0, bn), r(u, w0), r(w0, wn), r(u, q0), r(q0, qn), r(u, k0), r(k0, kn), r(u, _0), r(_0, _n), r(u, G0), r(G0, Gn), r(u, U0), r(U0, Un), r(u, $0), r($0, $n), r(u, z0), r(z0, zn), r(u, S0), r(S0, Qr), r(u, Kl), r(u, Vt), r(u, O0), r(O0, Lr), r(u, M0), r(M0, Sn), r(u, C0), r(C0, On), r(u, E0), r(E0, Mn), r(u, j0), r(j0, Pr), r(u, H0), r(H0, Kr), r(u, D0), r(D0, Fr), r(u, R0), r(R0, Cn), r(u, B0), r(B0, En), r(u, Q0), r(Q0, jn), r(u, L0), r(L0, Hn), r(u, P0), r(P0, Dn), r(u, K0), r(K0, Rn), r(u, Bn), r(Bn, Yr), r(u, Qn), r(Qn, Vr), r(u, T), r(u, I), r(u, F0), r(u, Fl), r(u, Yl), r(u, ie), r(u, Vl), r(u, Al), r(u, Tl), r(u, ae);
    },
    p: x,
    i: x,
    o: x,
    d(B2) {
      B2 && k(e);
    }
  };
}
class Da extends Y {
  constructor(e) {
    super(), F(this, e, null, Ha, P, {});
  }
}
const Ra = (i) => {
  console.log("emu:main recv:", i.detail.state);
}, Ba = (i) => {
  console.error("cpu_crash recv:", i.detail), oe.set("crashed");
  let e = i.detail.name, n = (i.detail.address >>> 0).toString(16).padStart(8, "0"), a = (i.detail.pc >>> 0).toString(16).padStart(8, "0");
  j2.set({
    name: e,
    message: `@ 0x${n} 	
 PC:${a}
`
  });
}, Qa = (i) => {
  let e = i.detail.regs.map((o) => o >>> 0);
  const n = i.detail.pc >>> 0, a = i.detail.instr >>> 0;
  console.debug("cpu_dump recv:", i.detail), console.debug(`cpu:dump: INSTR ${a.toString(16).padStart(4, "0")} 	 - PC: 0x${n.toString(16).padStart(8, "0")}`), console.debug(e.map((o) => o.toString(16).toUpperCase())), D2.set({
    instr: a,
    pc: n,
    registers: e
  });
};
function La() {
  document.addEventListener("emu:main", Ra), document.addEventListener("cpu:dump", Qa), document.addEventListener("cpu:crash", Ba);
}
function Pa(i) {
  let e, n, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = se(d, s[c]);
  return {
    c() {
      e = l("svg"), n = l("g"), a = l("path"), o = l("path"), t(a, "stroke-linejoin", "round"), t(a, "d", "m14.5 7l5 5l-5 5"), t(o, "d", "M19.5 12h-10c-1.667 0-5 1-5 5"), t(o, "opacity", "0.5"), t(n, "fill", "none"), t(n, "stroke", "currentColor"), t(n, "stroke-linecap", "round"), t(n, "stroke-width", "1.5"), Z0(e, d);
    },
    m(c, f) {
      G(c, e, f), r(e, n), r(n, a), r(n, o);
    },
    p(c, [f]) {
      Z0(e, d = I2(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: x,
    o: x,
    d(c) {
      c && k(e);
    }
  };
}
function Ka(i, e, n) {
  return i.$$set = (a) => {
    n(0, e = se(se({}, e), N0(a)));
  }, e = N0(e), [e];
}
class Fa extends Y {
  constructor(e) {
    super(), F(this, e, Ka, Pa, P, {});
  }
}
function Ya(i) {
  let e, n, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = se(d, s[c]);
  return {
    c() {
      e = l("svg"), n = l("g"), a = l("path"), o = l("path"), t(a, "stroke-linejoin", "round"), t(a, "d", "m17 14.5l-5 5l-5-5"), t(o, "d", "M12 19.5v-10c0-1.667-1-5-5-5"), t(o, "opacity", "0.5"), t(n, "fill", "none"), t(n, "stroke", "currentColor"), t(n, "stroke-linecap", "round"), t(n, "stroke-width", "1.5"), Z0(e, d);
    },
    m(c, f) {
      G(c, e, f), r(e, n), r(n, a), r(n, o);
    },
    p(c, [f]) {
      Z0(e, d = I2(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: x,
    o: x,
    d(c) {
      c && k(e);
    }
  };
}
function Va(i, e, n) {
  return i.$$set = (a) => {
    n(0, e = se(se({}, e), N0(a)));
  }, e = N0(e), [e];
}
class Aa extends Y {
  constructor(e) {
    super(), F(this, e, Va, Ya, P, {});
  }
}
function Ta(i) {
  let e, n, a;
  return {
    c() {
      e = l("g"), n = l("path"), a = l("path"), t(n, "d", "m11 8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232"), t(n, "opacity", "0.5"), t(a, "d", "M21.079 10.147c1.228.807 1.228 2.899 0 3.706L13.66 18.73c-1.194.785-2.661-.237-2.661-1.853V7.123c0-1.616 1.467-2.638 2.661-1.853z"), t(e, "fill", "none"), t(e, "stroke", "currentColor"), t(e, "stroke-width", "1.5");
    },
    m(o, s) {
      G(o, e, s), r(e, n), r(e, a);
    },
    d(o) {
      o && k(e);
    }
  };
}
function Ia(i) {
  let e, n, a;
  return {
    c() {
      e = l("path"), n = l("path"), a = W(">"), t(e, "fill", "currentColor"), t(e, "fill-rule", "evenodd"), t(e, "d", "M2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232V8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426"), t(e, "clip-rule", "evenodd"), t(e, "opacity", "0.5"), t(n, "fill", "currentColor"), t(n, "d", "M11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706L13.66 5.27C12.467 4.485 11 5.507 11 7.123");
    },
    m(o, s) {
      G(o, e, s), G(o, n, s), G(o, a, s);
    },
    d(o) {
      o && (k(e), k(n), k(a));
    }
  };
}
function Na(i) {
  let e;
  function n(s, d) {
    return (
      /*on*/
      s[0] ? Ia : Ta
    );
  }
  let a = n(i), o = a(i);
  return {
    c() {
      e = l("svg"), o.c(), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      G(s, e, d), o.m(e, null);
    },
    p(s, [d]) {
      a !== (a = n(s)) && (o.d(1), o = a(s), o && (o.c(), o.m(e, null)));
    },
    i: x,
    o: x,
    d(s) {
      s && k(e), o.d();
    }
  };
}
function Za(i, e, n) {
  let { on: a = !1 } = e;
  return i.$$set = (o) => {
    "on" in o && n(0, a = o.on);
  }, [a];
}
class Xa extends Y {
  constructor(e) {
    super(), F(this, e, Za, Na, P, { on: 0 });
  }
}
function Wa(i) {
  let e, n, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = se(d, s[c]);
  return {
    c() {
      e = l("svg"), n = l("g"), a = l("path"), o = l("path"), t(a, "stroke-linecap", "round"), t(a, "d", "m18.5 5.5l-13 13"), t(a, "opacity", "0.5"), t(o, "d", "M22 10.849v2.302c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848Z"), t(n, "fill", "none"), t(n, "stroke", "currentColor"), t(n, "stroke-width", "1.5"), Z0(e, d);
    },
    m(c, f) {
      G(c, e, f), r(e, n), r(n, a), r(n, o);
    },
    p(c, [f]) {
      Z0(e, d = I2(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: x,
    o: x,
    d(c) {
      c && k(e);
    }
  };
}
function Ja(i, e, n) {
  return i.$$set = (a) => {
    n(0, e = se(se({}, e), N0(a)));
  }, e = N0(e), [e];
}
class to extends Y {
  constructor(e) {
    super(), F(this, e, Ja, Wa, P, {});
  }
}
function eo(i) {
  let e, n, a, o, s, d, c, f, p, y, v, O, z, S, _, b, U, H, E, A, C, g, K;
  return d = new Xa({}), p = new Fa({}), O = new Aa({}), _ = new to({}), H = new pi({}), {
    c() {
      e = w("div"), n = w("div"), a = w("h4"), a.textContent = "Debugger", o = M(), s = w("button"), L(d.$$.fragment), c = M(), f = w("button"), L(p.$$.fragment), y = M(), v = w("button"), L(O.$$.fragment), z = M(), S = w("button"), L(_.$$.fragment), b = M(), U = w("button"), L(H.$$.fragment), E = M(), A = w("div"), A.innerHTML = "<p>TODO</p>", t(a, "class", "header"), t(s, "class", "toolbar-action"), t(s, "type", "button"), t(s, "title", "Run until"), t(s, "tabindex", "0"), t(s, "id", "btn_forwards_debug"), t(f, "class", "toolbar-action"), t(f, "type", "button"), t(f, "title", "step over"), t(f, "tabindex", "0"), t(f, "id", "btn_step_over_debug"), t(v, "class", "toolbar-action"), t(v, "type", "button"), t(v, "title", "step in"), t(v, "tabindex", "0"), t(v, "id", "btn_step_in_debug"), t(S, "class", "toolbar-action"), t(S, "type", "button"), t(S, "title", "halt"), t(S, "tabindex", "0"), t(S, "id", "btn_close_debug"), t(U, "class", "toolbar-action"), t(U, "type", "button"), t(U, "title", "close"), t(U, "tabindex", "0"), t(U, "id", "btn_close_debug"), t(n, "class", "titlebar"), t(A, "class", "contents"), t(e, "class", "debugging-panel view-panel svelte-13s7174"), Ln(
        e,
        "visible",
        /*$debugPane*/
        i[0]
      );
    },
    m(q, Q) {
      G(q, e, Q), r(e, n), r(n, a), r(n, o), r(n, s), R(d, s, null), r(n, c), r(n, f), R(p, f, null), r(n, y), r(n, v), R(O, v, null), r(n, z), r(n, S), R(_, S, null), r(n, b), r(n, U), R(H, U, null), r(e, E), r(e, A), C = !0, g || (K = [
        Z(
          s,
          "click",
          /*doFastForwards*/
          i[4]
        ),
        Z(
          f,
          "click",
          /*doStepOver*/
          i[2]
        ),
        Z(
          v,
          "click",
          /*doStepIn*/
          i[3]
        ),
        Z(
          S,
          "click",
          /*doHalt*/
          i[5]
        ),
        Z(
          U,
          "click",
          /*doClose*/
          i[1]
        )
      ], g = !0);
    },
    p(q, [Q]) {
      (!C || Q & /*$debugPane*/
      1) && Ln(
        e,
        "visible",
        /*$debugPane*/
        q[0]
      );
    },
    i(q) {
      C || (j(d.$$.fragment, q), j(p.$$.fragment, q), j(O.$$.fragment, q), j(_.$$.fragment, q), j(H.$$.fragment, q), C = !0);
    },
    o(q) {
      D(d.$$.fragment, q), D(p.$$.fragment, q), D(O.$$.fragment, q), D(_.$$.fragment, q), D(H.$$.fragment, q), C = !1;
    },
    d(q) {
      q && k(e), B(d), B(p), B(O), B(_), B(H), g = !1, Pn(K);
    }
  };
}
function ro(i, e, n) {
  let a;
  Lt(i, H2, (y) => n(0, a = y));
  const o = T2();
  return [a, (y) => {
    o("doClose", y), H2.set(!1);
  }, (y) => {
    o("doStepOver", y);
  }, (y) => {
    o("doStepIn", y);
  }, (y) => {
    o("doFastForwards", y);
  }, (y) => {
    o("doHalt", y);
  }];
}
class no extends Y {
  constructor(e) {
    super(), F(this, e, ro, eo, P, {});
  }
}
function lo(i) {
  let e, n, a, o, s, d, c, f, p, y, v, O, z, S, _, b, U, H, E, A, C, g, K;
  return n = new Bi({}), p = new Da({}), v = new Ti({}), z = new Pi({}), _ = new xa({}), _.$on(
    "romChanged",
    /*doRomLoad*/
    i[8]
  ), _.$on(
    "doRun",
    /*doRun*/
    i[7]
  ), _.$on(
    "doDump",
    /*doDump*/
    i[4]
  ), _.$on(
    "doDebug",
    /*doDebug*/
    i[6]
  ), _.$on(
    "doFullscreen",
    /*doFullscreen*/
    i[1]
  ), _.$on(
    "doCopyScreen",
    /*doCopyScreen*/
    i[2]
  ), _.$on(
    "doSaveScreen",
    /*doSaveScreen*/
    i[3]
  ), U = new no({}), E = new Ca({}), E.$on(
    "doRefresh",
    /*doRefresh*/
    i[5]
  ), g = new Ni({}), {
    c() {
      e = w("main"), L(n.$$.fragment), a = M(), o = w("div"), s = w("div"), s.innerHTML = `<img src="${Di}" alt="RuK Logo" class="svelte-15gznnu"/> <span class="svelte-15gznnu">RuK UI</span>`, d = M(), c = w("div"), f = w("div"), L(p.$$.fragment), y = M(), L(v.$$.fragment), O = M(), L(z.$$.fragment), S = M(), L(_.$$.fragment), b = M(), L(U.$$.fragment), H = M(), L(E.$$.fragment), A = M(), C = w("div"), L(g.$$.fragment), t(s, "class", "logo svelte-15gznnu"), Ln(
        s,
        "compact",
        /*$debugPane*/
        i[0]
      ), t(f, "id", "classpad"), m(f, "--zoomFactor", "1.5"), t(f, "class", "svelte-15gznnu"), t(c, "class", "calc-container svelte-15gznnu"), m(C, "display", "none"), t(o, "class", "container svelte-15gznnu");
    },
    m(q, Q) {
      G(q, e, Q), R(n, e, null), r(e, a), r(e, o), r(o, s), r(o, d), r(o, c), r(c, f), R(p, f, null), r(c, y), R(v, c, null), r(c, O), R(z, c, null), r(o, S), R(_, o, null), r(o, b), R(U, o, null), r(o, H), R(E, o, null), r(o, A), r(o, C), R(g, C, null), K = !0;
    },
    p(q, [Q]) {
      (!K || Q & /*$debugPane*/
      1) && Ln(
        s,
        "compact",
        /*$debugPane*/
        q[0]
      );
    },
    i(q) {
      K || (j(n.$$.fragment, q), j(p.$$.fragment, q), j(v.$$.fragment, q), j(z.$$.fragment, q), j(_.$$.fragment, q), j(U.$$.fragment, q), j(E.$$.fragment, q), j(g.$$.fragment, q), K = !0);
    },
    o(q) {
      D(n.$$.fragment, q), D(p.$$.fragment, q), D(v.$$.fragment, q), D(z.$$.fragment, q), D(_.$$.fragment, q), D(U.$$.fragment, q), D(E.$$.fragment, q), D(g.$$.fragment, q), K = !1;
    },
    d(q) {
      q && k(e), B(n), B(p), B(v), B(z), B(_), B(U), B(E), B(g);
    }
  };
}
function io(i, e, n) {
  let a, o, s, d;
  Lt(i, Ki, (b) => n(10, a = b)), Lt(i, H2, (b) => n(0, o = b)), Lt(i, oe, (b) => n(11, s = b)), Lt(i, I0, (b) => n(12, d = b)), A2(async () => {
    La(), oe.subscribe((b) => {
      console.log(b);
    }), Qi();
  });
  const c = (b) => {
    window.Module.requestFullscreen(!0, !1);
  }, f = (b) => {
    const U = document.getElementById("canvas");
    U && U.toBlob(function(H) {
      const E = new ClipboardItem({ "image/png": H });
      navigator.clipboard.write([E]).then(() => {
        Y2.set("Copied to clipboard !"), setTimeout(
          () => {
            Y2.set(null);
          },
          4e3
        );
      }).catch(() => {
      });
    });
  }, p = (b) => {
    const U = document.getElementById("canvas");
    if (U) {
      const H = document.createElement("a");
      H.href = U.toDataURL("image/png"), H.download = "ClassPad_Screen.png", H.click();
    }
  }, y = (b) => {
    d || (I0.set(!0), D2.set(null), window.Module.ccall("dumpOneFrame", null, [], []));
  }, v = (b) => {
    console.log("doRefresh !!"), d || I0.set(!0), D2.set(null), window.Module.ccall("dumpOneFrame", null, [], []);
  }, O = (b) => {
    (s === "loaded" || s === "ready") && fi.set(!0), o || H2.set(!0);
  }, z = async (b) => {
    let U = mi(ti);
    if (U) {
      oe.set("running");
      try {
        window.Module.ccall("startInterpreter", null, ["string"], [U]);
      } catch (H) {
        j2.set(H), oe.set("crashed");
      }
    } else
      oe.set("crashed"), j2.set({
        name: "INVALID_FILE_NAME",
        message: "fileName is empty"
      });
  }, S = async (b) => {
    console.log(b.detail), oe.set("loading");
    var U = b.detail.target.files[0];
    U && ja(U, U.name).then(() => {
      console.log(U.name), ti.set(U.name), a ? z() : oe.set("loaded");
    }).catch((H) => {
      console.error("Error loading file:", H);
    });
  };
  let { ide: _ = !0 } = e;
  return i.$$set = (b) => {
    "ide" in b && n(9, _ = b.ide);
  }, [
    o,
    c,
    f,
    p,
    y,
    v,
    O,
    z,
    S,
    _
  ];
}
class ao extends Y {
  constructor(e) {
    super(), F(this, e, io, lo, P, { ide: 9 });
  }
}
window.Module = window.Module || {};
new ao({
  target: document.getElementById("app"),
  props: {
    ide: !1
  }
});
//# sourceMappingURL=ruk.js.map
