var bi = Object.defineProperty;
var wi = (i, e, r) => e in i ? bi(i, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[e] = r;
var F2 = (i, e, r) => wi(i, typeof e != "symbol" ? e + "" : e, r);
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
  function r(o) {
    const s = {};
    return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function a(o) {
    if (o.ep)
      return;
    o.ep = !0;
    const s = r(o);
    fetch(o.href, s);
  }
})();
function _() {
}
function pe(i, e) {
  for (const r in e) i[r] = e[r];
  return (
    /** @type {T & S} */
    i
  );
}
function fi(i) {
  return i();
}
function J2() {
  return /* @__PURE__ */ Object.create(null);
}
function Zr(i) {
  i.forEach(fi);
}
function pi(i) {
  return typeof i == "function";
}
function A(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function ki(i) {
  return Object.keys(i).length === 0;
}
function hi(i, ...e) {
  if (i == null) {
    for (const a of e)
      a(void 0);
    return _;
  }
  const r = i.subscribe(...e);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function qi(i) {
  let e;
  return hi(i, (r) => e = r)(), e;
}
function et(i, e, r) {
  i.$$.on_destroy.push(hi(e, r));
}
function _i(i, e, r, a) {
  if (i) {
    const o = ui(i, e, r, a);
    return i[0](o);
  }
}
function ui(i, e, r, a) {
  return i[1] && a ? pe(r.ctx.slice(), i[1](a(e))) : r.ctx;
}
function Gi(i, e, r, a) {
  if (i[2] && a) {
    const o = i[2](a(r));
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
function Ui(i, e, r, a, o, s) {
  if (o) {
    const d = ui(e, r, a, s);
    i.p(d, o);
  }
}
function zi(i) {
  if (i.ctx.length > 32) {
    const e = [], r = i.ctx.length / 32;
    for (let a = 0; a < r; a++)
      e[a] = -1;
    return e;
  }
  return -1;
}
function Nl(i) {
  const e = {};
  for (const r in i) r[0] !== "$" && (e[r] = i[r]);
  return e;
}
function n(i, e) {
  i.appendChild(e);
}
function S(i, e, r) {
  i.insertBefore(e, r || null);
}
function U(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function Si(i, e) {
  for (let r = 0; r < i.length; r += 1)
    i[r] && i[r].d(e);
}
function k(i) {
  return document.createElement(i);
}
function l(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Z(i) {
  return document.createTextNode(i);
}
function E() {
  return Z(" ");
}
function Q2() {
  return Z("");
}
function tt(i, e, r, a) {
  return i.addEventListener(e, r, a), () => i.removeEventListener(e, r, a);
}
function $i(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function t(i, e, r) {
  r == null ? i.removeAttribute(e) : i.getAttribute(e) !== r && i.setAttribute(e, r);
}
function Zl(i, e) {
  for (const r in e)
    t(i, r, e[r]);
}
function u(i, e, r) {
  i.setAttributeNS("http://www.w3.org/1999/xlink", e, r);
}
function Mi(i) {
  return Array.from(i.childNodes);
}
function N0(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function G(i, e, r, a) {
  r == null ? i.style.removeProperty(e) : i.style.setProperty(e, r, "");
}
function he(i, e, r) {
  i.classList.toggle(e, !!r);
}
function Oi(i, e, { bubbles: r = !1, cancelable: a = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: r, cancelable: a });
}
let Z0;
function T0(i) {
  Z0 = i;
}
function I2() {
  if (!Z0) throw new Error("Function called outside component initialization");
  return Z0;
}
function P2(i) {
  I2().$$.on_mount.push(i);
}
function Ci(i) {
  I2().$$.on_destroy.push(i);
}
function T2() {
  const i = I2();
  return (e, r, { cancelable: a = !1 } = {}) => {
    const o = i.$$.callbacks[e];
    if (o) {
      const s = Oi(
        /** @type {string} */
        e,
        r,
        { cancelable: a }
      );
      return o.slice().forEach((d) => {
        d.call(i, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function Ei(i, e) {
  const r = i.$$.callbacks[e.type];
  r && r.slice().forEach((a) => a.call(this, e));
}
const Il = [], X0 = [];
let Tl = [];
const ti = [], ji = /* @__PURE__ */ Promise.resolve();
let A2 = !1;
function Hi() {
  A2 || (A2 = !0, ji.then(gi));
}
function Y2(i) {
  Tl.push(i);
}
const K2 = /* @__PURE__ */ new Set();
let Yl = 0;
function gi() {
  if (Yl !== 0)
    return;
  const i = Z0;
  do {
    try {
      for (; Yl < Il.length; ) {
        const e = Il[Yl];
        Yl++, T0(e), Di(e.$$);
      }
    } catch (e) {
      throw Il.length = 0, Yl = 0, e;
    }
    for (T0(null), Il.length = 0, Yl = 0; X0.length; ) X0.pop()();
    for (let e = 0; e < Tl.length; e += 1) {
      const r = Tl[e];
      K2.has(r) || (K2.add(r), r());
    }
    Tl.length = 0;
  } while (Il.length);
  for (; ti.length; )
    ti.pop()();
  A2 = !1, K2.clear(), T0(i);
}
function Di(i) {
  if (i.fragment !== null) {
    i.update(), Zr(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(Y2);
  }
}
function Ri(i) {
  const e = [], r = [];
  Tl.forEach((a) => i.indexOf(a) === -1 ? e.push(a) : r.push(a)), r.forEach((a) => a()), Tl = e;
}
const j2 = /* @__PURE__ */ new Set();
let sl;
function Bi() {
  sl = {
    r: 0,
    c: [],
    p: sl
    // parent group
  };
}
function Qi() {
  sl.r || Zr(sl.c), sl = sl.p;
}
function B(i, e) {
  i && i.i && (j2.delete(i), i.i(e));
}
function Q(i, e, r, a) {
  if (i && i.o) {
    if (j2.has(i)) return;
    j2.add(i), sl.c.push(() => {
      j2.delete(i), a && (r && i.d(1), a());
    }), i.o(e);
  } else a && a();
}
function H2(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Pi(i, e) {
  i.d(1), e.delete(i.key);
}
function Li(i, e, r, a, o, s, d, c, f, p, b, g) {
  let w = i.length, x = s.length, z = w;
  const q = {};
  for (; z--; ) q[i[z].key] = z;
  const m = [], y = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), C = [];
  for (z = x; z--; ) {
    const M = g(o, s, z), h = r(M);
    let H = d.get(h);
    H ? C.push(() => H.p(M, e)) : (H = p(h, M), H.c()), y.set(h, m[z] = H), h in q && j.set(h, Math.abs(z - q[h]));
  }
  const P = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function $(M) {
    B(M, 1), M.m(c, b), d.set(M.key, M), b = M.first, x--;
  }
  for (; w && x; ) {
    const M = m[x - 1], h = i[w - 1], H = M.key, T = h.key;
    M === h ? (b = M.first, w--, x--) : y.has(T) ? !d.has(H) || P.has(H) ? $(M) : D.has(T) ? w-- : j.get(H) > j.get(T) ? (D.add(H), $(M)) : (P.add(T), w--) : (f(h, d), w--);
  }
  for (; w--; ) {
    const M = i[w];
    y.has(M.key) || f(M, d);
  }
  for (; x; ) $(m[x - 1]);
  return Zr(C), m;
}
function N2(i, e) {
  const r = {}, a = {}, o = { $$scope: 1 };
  let s = i.length;
  for (; s--; ) {
    const d = i[s], c = e[s];
    if (c) {
      for (const f in d)
        f in c || (a[f] = 1);
      for (const f in c)
        o[f] || (r[f] = c[f], o[f] = 1);
      i[s] = c;
    } else
      for (const f in d)
        o[f] = 1;
  }
  for (const d in a)
    d in r || (r[d] = void 0);
  return r;
}
function K(i) {
  i && i.c();
}
function L(i, e, r) {
  const { fragment: a, after_update: o } = i.$$;
  a && a.m(e, r), Y2(() => {
    const s = i.$$.on_mount.map(fi).filter(pi);
    i.$$.on_destroy ? i.$$.on_destroy.push(...s) : Zr(s), i.$$.on_mount = [];
  }), o.forEach(Y2);
}
function F(i, e) {
  const r = i.$$;
  r.fragment !== null && (Ri(r.after_update), Zr(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Fi(i, e) {
  i.$$.dirty[0] === -1 && (Il.push(i), Hi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(i, e, r, a, o, s, d = null, c = [-1]) {
  const f = Z0;
  T0(i);
  const p = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: _,
    not_equal: o,
    bound: J2(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: J2(),
    dirty: c,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  d && d(p.root);
  let b = !1;
  if (p.ctx = r ? r(i, e.props || {}, (g, w, ...x) => {
    const z = x.length ? x[0] : w;
    return p.ctx && o(p.ctx[g], p.ctx[g] = z) && (!p.skip_bound && p.bound[g] && p.bound[g](z), b && Fi(i, g)), w;
  }) : [], p.update(), b = !0, Zr(p.before_update), p.fragment = a ? a(p.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = Mi(e.target);
      p.fragment && p.fragment.l(g), g.forEach(U);
    } else
      p.fragment && p.fragment.c();
    e.intro && B(i.$$.fragment), L(i, e.target, e.anchor), gi();
  }
  T0(f);
}
class V {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    F2(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    F2(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    F(this, 1), this.$destroy = _;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!pi(r))
      return _;
    const a = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return a.push(r), () => {
      const o = a.indexOf(r);
      o !== -1 && a.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ki(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ki = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ki);
const Ai = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3clinearGradient%20id='g'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.1'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='h'%3e%3cstop%20offset='0'%20stop-color='%23eb5e06'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.3'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='.2'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.3'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%3e%3cstop%20offset='0'%20stop-color='%23eb8403'/%3e%3cstop%20offset='1'%20stop-color='%23eb8403'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23a'%20id='i'%20x1='12'%20x2='18.8'%20y1='4'%20y2='15.8'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23b'%20id='j'%20x1='20.6'%20x2='14'%20y1='12.3'%20y2='16'%20gradientTransform='rotate(180%2012%20526.2)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23c'%20id='l'%20x1='7'%20x2='11.3'%20y1='1038'%20y2='1042.2'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23d'%20id='k'%20x1='18'%20x2='14.8'%20y1='1039.3'%20y2='1039.3'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='n'%20x1='6'%20x2='10.2'%20y1='1038'%20y2='1042.1'%20gradientTransform='rotate(180%2012%201040.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23f'%20id='m'%20x1='7.5'%20x2='18.2'%20y1='8.8'%20y2='11.7'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23g'%20id='o'%20x1='7.5'%20x2='21.2'%20y1='8.8'%20y2='12.5'%20gradientTransform='translate(0%201028.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23h'%20id='p'%20x1='6.6'%20x2='15.9'%20y1='1038.8'%20y2='1044.5'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='q'%20x1='31.4'%20x2='59.3'%20y1='1037.7'%20y2='1037.7'%20gradientUnits='userSpaceOnUse'/%3e%3c/defs%3e%3cpath%20fill='%23fe9e01'%20d='M2%2012c0-1.4%203.8-8%205-8.7a24%2024%200%200%201%2010%200c1.2.7%205%207.3%205%208.7%200%201.4-3.8%208-5%208.7a24%2024%200%200%201-10%200C5.8%2020%202%2013.4%202%2012z'/%3e%3cpath%20fill='none'%20d='M18%2012a15%2015%200%200%201-3%205.2c-.7.4-5.3.4-6%200A15%2015%200%200%201%206%2012a15%2015%200%200%201%203-5.2c.7-.4%205.3-.4%206%200%20.7.4%203%204.4%203%205.2z'/%3e%3cpath%20fill='url(%23i)'%20fill-rule='evenodd'%20d='M12%202.8a19.6%2019.6%200%200%200-3.7.3c1.7.1%204.3%201%205.5%202A30.3%2030.3%200%200%201%2018%2012c0%201-2.2%204.8-3%205.3l2%203.4a24%2024%200%200%200%205-8.6c0-1.4-3.8-8-5-8.7-.6-.3-2.8-.5-5-.5z'/%3e%3cpath%20fill='url(%23j)'%20fill-rule='evenodd'%20d='M12%201049.6a19.6%2019.6%200%200%200%203.7-.4c-1.7%200-4.3-1-5.5-2a30.3%2030.3%200%200%201-4.2-6.8c0-.9%202.2-4.7%203-5.2l-2-3.5a24%2024%200%200%200-5%208.7c0%201.4%203.8%208%205%208.6.6.4%202.8.6%205%20.6z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23k)'%20d='M18%201040.4a16%2016%200%200%201-3%205.2c-.7.4-5.3.4-6%200a16%2016%200%200%201-3-5.2c0-.9%202.3-4.8%203-5.2.7-.5%205.3-.5%206%200%20.7.4%203%204.3%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23l)'%20d='M9%201035.2c-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23m)'%20d='M9%206.8c-.8.5-3%204.4-3%205.2a30.3%2030.3%200%200%200%202.2%204.3c.7%201.1%201.4%202%202%202.5%201.2%201.1%203.8%202%205.5%202h1l.3-.1c1.2-.7%205-7.3%205-8.7l-4-.1v.1a15%2015%200%200%201-3%205.2%2015%2015%200%200%201-3-5.2%2015%2015%200%200%200-3-5.2z'/%3e%3cpath%20fill='url(%23n)'%20d='M15%201045.6c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23o)'%20stroke='url(%23p)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-opacity='.3'%20stroke-width='.1'%20d='M18%201040.2h0v.2a16%2016%200%200%201-3%205.2%2016%2016%200%200%201-3-5.2c0-.9-2.3-4.8-3-5.2h0s0%200%200%200c-.8.5-3%204.3-3%205.2a30.3%2030.3%200%200%200%202.2%204.3s0%200%200%200%200%200%200%200c.7%201%201.4%202%202%202.5%201.2%201%203.8%202%205.5%202h1l.3-.2'%20transform='translate(0%20-1028.4)'/%3e%3cg%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20fill='%23252127'%20d='M38.5%201038.7q0%20.7-.4%201.3l-.5.7-.7.5-.6.4%202.7%205.4h-2.6l-2.4-5.3h-2.6v5.3H29v-13.4h6.3q1%200%201.6.5l.7.6.5.6q.4.6.4%201.4v2zm-2.3%200v-2.1q-.4-.7-.8-.8h-4v3.7h4l.4-.3.4-.5z'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3cpath%20fill='url(%23q)'%20fill-rule='evenodd'%20d='M31.4%201035.8v3.7h25.9l2-3.7h-28z'%20transform='translate(0%20-1028.4)'/%3e%3cg%20fill='%23252127'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20d='M50.3%201047H48l-.1-.5q-1%20.6-1.4.6h-1.7q-1%200-1.7-.4-.6-.5-1-1.1-.4-.6-.4-1.4v-6.9H44v7l.8.7h1.7l.6-.3.7-.6v-6.8h2.3v7.7l.2%202z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20d='M63.2%201047h-2.9l-4.7-5.6h-.2v5.6H53v-13.4h2.4v5.6h.2l2.4-2.8q1.5-2%202.3-2.8h2.9l-5.6%206.7%202.5%203%203.1%203.7z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3c/svg%3e";
function Yi(i) {
  let e;
  return {
    c() {
      e = k("div"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" class="svelte-rvpkcl"><defs><filter id="blur"><feGaussianBlur stdDeviation="12"></feGaussianBlur></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad" class="svelte-rvpkcl"><stop stop-color="hsl(105, 69%, 40%)" stop-opacity="1" offset="0%" class="svelte-rvpkcl"></stop><stop stop-color="hsl(105, 69%, 60%)" stop-opacity="1" offset="100%" class="svelte-rvpkcl"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round" filter="url(#blur)"><path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="1.00"></path><path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.96"></path><path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.92"></path><path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.89"></path><path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.85"></path><path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.81"></path><path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.77"></path><path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.73"></path><path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.70"></path><path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.66"></path><path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.62"></path><path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.58"></path><path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.54"></path><path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.51"></path><path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.47"></path><path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.43"></path><path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.39"></path><path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.35"></path><path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.32"></path><path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.28"></path><path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.24"></path><path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.20"></path><path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.16"></path><path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.13"></path><path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.09"></path></g></svg>', t(e, "class", "bg-img svelte-rvpkcl");
    },
    m(r, a) {
      S(r, e, a);
    },
    p: _,
    i: _,
    o: _,
    d(r) {
      r && U(e);
    }
  };
}
class Vi extends V {
  constructor(e) {
    super(), Y(this, e, null, Yi, A, {});
  }
}
function Ii() {
  var i = document.createElement("script");
  i.setAttribute("async", ""), i.setAttribute("type", "text/javascript"), i.setAttribute("src", "calcemu.js"), document.body.appendChild(i);
}
function Ti(i) {
  let e;
  return {
    c() {
      e = k("div"), e.innerHTML = "", t(e, "id", "buttons");
    },
    m(r, a) {
      S(r, e, a);
    },
    p: _,
    i: _,
    o: _,
    d(r) {
      r && U(e);
    }
  };
}
class Ni extends V {
  constructor(e) {
    super(), Y(this, e, null, Ti, A, {});
  }
}
const Vl = [];
function Yt(i, e = _) {
  let r;
  const a = /* @__PURE__ */ new Set();
  function o(c) {
    if (A(i, c) && (i = c, r)) {
      const f = !Vl.length;
      for (const p of a)
        p[1](), Vl.push(p, i);
      if (f) {
        for (let p = 0; p < Vl.length; p += 2)
          Vl[p][0](Vl[p + 1]);
        Vl.length = 0;
      }
    }
  }
  function s(c) {
    o(c(i));
  }
  function d(c, f = _) {
    const p = [c, f];
    return a.add(p), a.size === 1 && (r = e(o, s) || _), c(i), () => {
      a.delete(p), a.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: s, subscribe: d };
}
const Zt = Yt("empty"), ei = Yt(null), Zi = Yt(!1), D2 = Yt(""), ri = Yt(0), vi = Yt(), mi = Yt(), Z2 = Yt(!1), R2 = Yt(!1), cl = Yt(!1), B2 = Yt(null), V2 = Yt(null);
function Xi(i) {
  let e, r, a;
  return {
    c() {
      e = l("svg"), r = l("path"), a = l("path"), t(r, "fill", "currentColor"), t(r, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), t(r, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, e, s), n(e, r), n(e, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(e);
    }
  };
}
class Wi extends V {
  constructor(e) {
    super(), Y(this, e, null, Xi, A, {});
  }
}
function ni(i) {
  let e, r, a, o, s, d, c = (
    /*$traceback*/
    i[2].name + ""
  ), f, p, b, g = (
    /*$traceback*/
    i[2].message + ""
  ), w, x, z, q;
  r = new Wi({});
  let m = (
    /*$traceback*/
    i[2].hint && li(i)
  );
  return {
    c() {
      e = k("div"), K(r.$$.fragment), a = E(), o = k("pre"), s = Z("            "), d = k("code"), f = Z(c), p = Z(`\r
            `), b = k("code"), w = Z(g), x = Z(`\r
            `), m && m.c(), z = Z(`\r
        `), t(d, "class", "name svelte-s5x38s"), t(b, "class", "message svelte-s5x38s"), t(o, "class", "svelte-s5x38s"), t(e, "class", "bsod svelte-s5x38s");
    },
    m(y, j) {
      S(y, e, j), L(r, e, null), n(e, a), n(e, o), n(o, s), n(o, d), n(d, f), n(o, p), n(o, b), n(b, w), n(o, x), m && m.m(o, null), n(o, z), q = !0;
    },
    p(y, j) {
      (!q || j & /*$traceback*/
      4) && c !== (c = /*$traceback*/
      y[2].name + "") && N0(f, c), (!q || j & /*$traceback*/
      4) && g !== (g = /*$traceback*/
      y[2].message + "") && N0(w, g), /*$traceback*/
      y[2].hint ? m ? m.p(y, j) : (m = li(y), m.c(), m.m(o, z)) : m && (m.d(1), m = null);
    },
    i(y) {
      q || (B(r.$$.fragment, y), q = !0);
    },
    o(y) {
      Q(r.$$.fragment, y), q = !1;
    },
    d(y) {
      y && U(e), F(r), m && m.d();
    }
  };
}
function li(i) {
  let e, r, a;
  return {
    c() {
      e = k("a"), r = Z("Hint"), t(e, "href", a = /*$traceback*/
      i[2].hint), t(e, "target", "_blank");
    },
    m(o, s) {
      S(o, e, s), n(e, r);
    },
    p(o, s) {
      s & /*$traceback*/
      4 && a !== (a = /*$traceback*/
      o[2].hint) && t(e, "href", a);
    },
    d(o) {
      o && U(e);
    }
  };
}
function Ji(i) {
  let e, r, a, o, s, d, c = (
    /*crashed*/
    i[1] && ni(i)
  );
  return {
    c() {
      e = k("canvas"), r = E(), c && c.c(), a = Q2(), t(e, "class", "emscripten svelte-s5x38s"), t(e, "id", "canvas"), t(e, "tabindex", "-1");
    },
    m(f, p) {
      S(f, e, p), i[5](e), S(f, r, p), c && c.m(f, p), S(f, a, p), o = !0, s || (d = tt(e, "contextmenu", $i(
        /*contextmenu_handler*/
        i[4]
      )), s = !0);
    },
    p(f, [p]) {
      /*crashed*/
      f[1] ? c ? (c.p(f, p), p & /*crashed*/
      2 && B(c, 1)) : (c = ni(f), c.c(), B(c, 1), c.m(a.parentNode, a)) : c && (Bi(), Q(c, 1, 1, () => {
        c = null;
      }), Qi());
    },
    i(f) {
      o || (B(c), o = !0);
    },
    o(f) {
      Q(c), o = !1;
    },
    d(f) {
      f && (U(e), U(r), U(a)), i[5](null), c && c.d(f), s = !1, d();
    }
  };
}
function ta(i, e, r) {
  let a, o, s;
  et(i, Zt, (p) => r(3, o = p)), et(i, D2, (p) => r(2, s = p));
  let d;
  P2(() => {
    window.Module.canvas = d, d.addEventListener(
      "webglcontextlost",
      (p) => {
        alert("WebGL context lost. You will need to reload the page."), p.preventDefault();
      },
      !1
    );
  });
  function c(p) {
    Ei.call(this, i, p);
  }
  function f(p) {
    X0[p ? "unshift" : "push"](() => {
      d = p, r(0, d);
    });
  }
  return i.$$.update = () => {
    i.$$.dirty & /*$state*/
    8 && r(1, a = o === "crashed");
  }, [d, a, s, o, c, f];
}
class ea extends V {
  constructor(e) {
    super(), Y(this, e, ta, Ji, A, {});
  }
}
function ra(i) {
  let e, r, a, o, s, d, c;
  return {
    c() {
      e = k("figure"), e.innerHTML = '<div class="spinner"></div><center style="margin-top:0.5em"><strong>emscripten</strong></center>', r = E(), a = k("div"), a.textContent = "Downloading...", o = E(), s = k("div"), s.innerHTML = '<progress value="0" max="100" id="progress" hidden=""></progress>', d = E(), c = k("textarea"), G(e, "overflow", "visible"), t(e, "id", "spinner"), t(a, "class", "emscripten"), t(a, "id", "status"), t(s, "class", "emscripten"), t(c, "class", "emscripten"), t(c, "id", "output"), t(c, "rows", "8");
    },
    m(f, p) {
      S(f, e, p), S(f, r, p), S(f, a, p), S(f, o, p), S(f, s, p), S(f, d, p), S(f, c, p);
    },
    p: _,
    i: _,
    o: _,
    d(f) {
      f && (U(e), U(r), U(a), U(o), U(s), U(d), U(c));
    }
  };
}
class na extends V {
  constructor(e) {
    super(), Y(this, e, null, ra, A, {});
  }
}
function la(i) {
  let e, r, a;
  return {
    c() {
      e = l("svg"), r = l("path"), a = l("path"), t(r, "fill", "currentColor"), t(r, "fill-rule", "evenodd"), t(r, "d", "M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22"), t(r, "clip-rule", "evenodd"), t(r, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, e, s), n(e, r), n(e, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(e);
    }
  };
}
class ia extends V {
  constructor(e) {
    super(), Y(this, e, null, la, A, {});
  }
}
function aa(i) {
  let e, r, a, o;
  return {
    c() {
      e = l("svg"), r = l("path"), a = l("path"), o = l("path"), t(r, "fill", "currentColor"), t(r, "d", "M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"), t(a, "clip-rule", "evenodd"), t(o, "fill", "currentColor"), t(o, "d", "m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859"), t(o, "opacity", "0.4"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      S(s, e, d), n(e, r), n(e, a), n(e, o);
    },
    p: _,
    i: _,
    o: _,
    d(s) {
      s && U(e);
    }
  };
}
class oa extends V {
  constructor(e) {
    super(), Y(this, e, null, aa, A, {});
  }
}
function sa(i) {
  let e, r, a;
  return {
    c() {
      e = l("svg"), r = l("path"), a = l("path"), t(r, "fill", "currentColor"), t(r, "d", "M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"), t(r, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06"), t(a, "clip-rule", "evenodd"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, e, s), n(e, r), n(e, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(e);
    }
  };
}
class ca extends V {
  constructor(e) {
    super(), Y(this, e, null, sa, A, {});
  }
}
function da(i) {
  let e, r, a, o, s;
  return {
    c() {
      e = l("svg"), r = l("path"), a = l("path"), o = l("path"), s = l("path"), t(r, "fill", "currentColor"), t(r, "fill-rule", "evenodd"), t(r, "d", "M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938"), t(r, "clip-rule", "evenodd"), t(r, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06q.333.684.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a4 4 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"), t(o, "fill", "currentColor"), t(o, "d", "M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z"), t(o, "opacity", "0.5"), t(s, "fill", "currentColor"), t(s, "fill-rule", "evenodd"), t(s, "d", "M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75"), t(s, "clip-rule", "evenodd"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24"), t(e, "class", "svelte-1v14ixl"), he(
        e,
        "active",
        /*active*/
        i[0]
      );
    },
    m(d, c) {
      S(d, e, c), n(e, r), n(e, a), n(e, o), n(e, s);
    },
    p(d, [c]) {
      c & /*active*/
      1 && he(
        e,
        "active",
        /*active*/
        d[0]
      );
    },
    i: _,
    o: _,
    d(d) {
      d && U(e);
    }
  };
}
function fa(i, e, r) {
  let { active: a = !1 } = e;
  return i.$$set = (o) => {
    "active" in o && r(0, a = o.active);
  }, [a];
}
let pa = class extends V {
  constructor(e) {
    super(), Y(this, e, fa, da, A, { active: 0 });
  }
};
function ha(i) {
  let e, r, a, o, s, d;
  return {
    c() {
      e = l("svg"), r = l("g"), a = l("path"), o = l("path"), s = l("path"), d = l("path"), t(a, "d", "M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"), t(a, "opacity", "0.5"), t(o, "stroke-linecap", "round"), t(o, "stroke-linejoin", "round"), t(o, "d", "M12.429 10L11 12h2l-1.429 2"), t(s, "d", "M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"), t(d, "stroke-linecap", "round"), t(d, "d", "M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"), t(d, "opacity", "0.5"), t(r, "fill", "none"), t(r, "stroke", "currentColor"), t(r, "stroke-width", "1.5"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(c, f) {
      S(c, e, f), n(e, r), n(r, a), n(r, o), n(r, s), n(r, d);
    },
    p: _,
    i: _,
    o: _,
    d(c) {
      c && U(e);
    }
  };
}
class ua extends V {
  constructor(e) {
    super(), Y(this, e, null, ha, A, {});
  }
}
function ga(i) {
  let e, r, a;
  return {
    c() {
      e = l("svg"), r = l("path"), a = l("path"), t(r, "fill", "currentColor"), t(r, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"), t(r, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0"), t(a, "clip-rule", "evenodd"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, e, s), n(e, r), n(e, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(e);
    }
  };
}
class va extends V {
  constructor(e) {
    super(), Y(this, e, null, ga, A, {});
  }
}
function ma(i) {
  let e, r, a;
  return {
    c() {
      e = l("svg"), r = l("path"), a = l("path"), t(r, "fill", "currentColor"), t(r, "fill-rule", "evenodd"), t(r, "d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"), t(r, "clip-rule", "evenodd"), t(r, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, e, s), n(e, r), n(e, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(e);
    }
  };
}
class ya extends V {
  constructor(e) {
    super(), Y(this, e, null, ma, A, {});
  }
}
function xa(i) {
  let e, r, a, o, s;
  const d = (
    /*#slots*/
    i[4].default
  ), c = _i(
    d,
    i,
    /*$$scope*/
    i[3],
    null
  );
  return {
    c() {
      e = k("div"), r = k("div"), a = E(), c && c.c(), t(r, "class", "tip svelte-hgj5m"), t(e, "class", o = "popover " + /*visible*/
      (i[0] ? "visible" : "") + " svelte-hgj5m"), G(
        e,
        "--x",
        /*position*/
        i[2].x + "px"
      ), G(
        e,
        "--y",
        /*position*/
        i[2].y + "px"
      );
    },
    m(f, p) {
      S(f, e, p), n(e, r), n(e, a), c && c.m(e, null), i[5](e), s = !0;
    },
    p(f, [p]) {
      c && c.p && (!s || p & /*$$scope*/
      8) && Ui(
        c,
        d,
        f,
        /*$$scope*/
        f[3],
        s ? Gi(
          d,
          /*$$scope*/
          f[3],
          p,
          null
        ) : zi(
          /*$$scope*/
          f[3]
        ),
        null
      ), (!s || p & /*visible*/
      1 && o !== (o = "popover " + /*visible*/
      (f[0] ? "visible" : "") + " svelte-hgj5m")) && t(e, "class", o), (!s || p & /*position*/
      4) && G(
        e,
        "--x",
        /*position*/
        f[2].x + "px"
      ), (!s || p & /*position*/
      4) && G(
        e,
        "--y",
        /*position*/
        f[2].y + "px"
      );
    },
    i(f) {
      s || (B(c, f), s = !0);
    },
    o(f) {
      Q(c, f), s = !1;
    },
    d(f) {
      f && U(e), c && c.d(f), i[5](null);
    }
  };
}
function ba(i, e, r) {
  let { $$slots: a = {}, $$scope: o } = e, s, { visible: d = !1 } = e, c, f = { x: 0, y: 0 };
  P2(() => {
    if (s = c.parentElement, s) {
      const b = s.getBoundingClientRect(), g = c.getBoundingClientRect();
      r(2, f = {
        x: b.left + window.scrollX,
        y: b.top + window.scrollY
        // + (rect.height - popoverRect.height) / 2
      }), f.x + g.width > window.innerWidth ? r(2, f.x -= g.width, f) : r(2, f.x += b.width, f);
    }
  });
  function p(b) {
    X0[b ? "unshift" : "push"](() => {
      c = b, r(1, c);
    });
  }
  return i.$$set = (b) => {
    "visible" in b && r(0, d = b.visible), "$$scope" in b && r(3, o = b.$$scope);
  }, [d, c, f, o, a, p];
}
class E2 extends V {
  constructor(e) {
    super(), Y(this, e, ba, xa, A, { visible: 0 });
  }
}
function wa(i) {
  let e;
  return {
    c() {
      e = Z("Start by picking a BIN program");
    },
    m(r, a) {
      S(r, e, a);
    },
    d(r) {
      r && U(e);
    }
  };
}
function ka(i) {
  let e;
  return {
    c() {
      e = Z(
        /*$copyScreenFeedback*/
        i[8]
      );
    },
    m(r, a) {
      S(r, e, a);
    },
    p(r, a) {
      a & /*$copyScreenFeedback*/
      256 && N0(
        e,
        /*$copyScreenFeedback*/
        r[8]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function qa(i) {
  let e;
  return {
    c() {
      e = Z("Check why it crashed here");
    },
    m(r, a) {
      S(r, e, a);
    },
    d(r) {
      r && U(e);
    }
  };
}
function _a(i) {
  let e;
  return {
    c() {
      e = Z("Now let's start the program");
    },
    m(r, a) {
      S(r, e, a);
    },
    d(r) {
      r && U(e);
    }
  };
}
function Ga(i) {
  let e, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, j, C, P, D, $, M, h, H, T, Rt, N, R, nt, J, lt, Xt, Vt, ue, Kn, It, Wt, it, Tt, Bt, Xr, Wr;
  return a = new E2({
    props: {
      visible: (
        /*loadHint*/
        i[7]
      ),
      $$slots: { default: [wa] },
      $$scope: { ctx: i }
    }
  }), s = new ia({}), w = new E2({
    props: {
      visible: (
        /*$copyScreenFeedback*/
        i[8] !== null
      ),
      $$slots: { default: [ka] },
      $$scope: { ctx: i }
    }
  }), z = new oa({}), y = new ca({}), $ = new pa({ props: { active: (
    /*$debugging*/
    i[1]
  ) } }), T = new E2({
    props: {
      visible: (
        /*crashedHint*/
        i[2] && !/*$tracing*/
        i[9]
      ),
      $$slots: { default: [qa] },
      $$scope: { ctx: i }
    }
  }), N = new ua({}), lt = new E2({
    props: {
      visible: (
        /*loaded*/
        i[6] && !/*$debugging*/
        i[1]
      ),
      $$slots: { default: [_a] },
      $$scope: { ctx: i }
    }
  }), Vt = new ya({}), Tt = new va({}), {
    c() {
      e = k("div"), r = k("button"), K(a.$$.fragment), o = E(), K(s.$$.fragment), d = E(), c = k("input"), f = E(), p = k("div"), b = E(), g = k("button"), K(w.$$.fragment), x = E(), K(z.$$.fragment), q = E(), m = k("button"), K(y.$$.fragment), j = E(), C = k("div"), P = E(), D = k("button"), K($.$$.fragment), h = E(), H = k("button"), K(T.$$.fragment), Rt = E(), K(N.$$.fragment), nt = E(), J = k("button"), K(lt.$$.fragment), Xt = E(), K(Vt.$$.fragment), Kn = E(), It = k("div"), Wt = E(), it = k("button"), K(Tt.$$.fragment), t(c, "type", "file"), t(c, "id", "fileInput"), G(c, "display", "none"), t(r, "class", "toolbar-action"), t(r, "type", "button"), t(r, "tabindex", "0"), t(r, "id", "btn_pickFile"), t(p, "class", "separator"), t(p, "role", "separator"), t(p, "data-orientation", "horizontal"), t(p, "aria-orientation", "horizontal"), t(g, "class", "toolbar-action"), t(g, "type", "button"), t(g, "tabindex", "0"), t(g, "id", "btn_copyScreen"), t(m, "class", "toolbar-action"), t(m, "type", "button"), t(m, "tabindex", "0"), t(m, "id", "btn_saveScreen"), t(C, "class", "separator"), t(C, "role", "separator"), t(C, "data-orientation", "horizontal"), t(C, "aria-orientation", "horizontal"), t(D, "class", "toolbar-action"), t(D, "type", "button"), t(D, "tabindex", "0"), t(D, "id", "btn_debug"), D.disabled = M = !/*loaded*/
      i[6] && /*running*/
      i[5] && !/*isDebug*/
      i[4], t(H, "class", "toolbar-action"), t(H, "type", "button"), t(H, "tabindex", "0"), t(H, "id", "btn_dump"), H.disabled = R = !/*loaded*/
      i[6] && !/*crashed*/
      i[0] && !/*running*/
      i[5], t(J, "class", "toolbar-action"), t(J, "type", "button"), t(J, "tabindex", "0"), t(J, "id", "btn_run"), J.disabled = ue = !/*loaded*/
      i[6], t(It, "class", "separator"), t(It, "role", "separator"), t(It, "data-orientation", "horizontal"), t(It, "aria-orientation", "horizontal"), t(it, "class", "toolbar-action"), t(it, "type", "button"), t(it, "tabindex", "0"), t(it, "id", "btn_fullscreen"), t(e, "class", "toolbar");
    },
    m(O, I) {
      S(O, e, I), n(e, r), L(a, r, null), n(r, o), L(s, r, null), n(r, d), n(r, c), i[19](c), n(e, f), n(e, p), n(e, b), n(e, g), L(w, g, null), n(g, x), L(z, g, null), n(e, q), n(e, m), L(y, m, null), n(e, j), n(e, C), n(e, P), n(e, D), L($, D, null), n(e, h), n(e, H), L(T, H, null), n(H, Rt), L(N, H, null), n(e, nt), n(e, J), L(lt, J, null), n(J, Xt), L(Vt, J, null), n(e, Kn), n(e, It), n(e, Wt), n(e, it), L(Tt, it, null), Bt = !0, Xr || (Wr = [
        tt(
          c,
          "change",
          /*handleFile*/
          i[11]
        ),
        tt(
          r,
          "click",
          /*pickFile*/
          i[10]
        ),
        tt(
          g,
          "click",
          /*doCopyScreen*/
          i[12]
        ),
        tt(
          m,
          "click",
          /*doSaveScreen*/
          i[13]
        ),
        tt(
          D,
          "click",
          /*doDebug*/
          i[17]
        ),
        tt(
          H,
          "click",
          /*doDump*/
          i[16]
        ),
        tt(
          J,
          "click",
          /*doRun*/
          i[14]
        ),
        tt(
          it,
          "click",
          /*doFullscreen*/
          i[15]
        )
      ], Xr = !0);
    },
    p(O, [I]) {
      const ge = {};
      I & /*loadHint*/
      128 && (ge.visible = /*loadHint*/
      O[7]), I & /*$$scope*/
      4194304 && (ge.$$scope = { dirty: I, ctx: O }), a.$set(ge);
      const Jr = {};
      I & /*$copyScreenFeedback*/
      256 && (Jr.visible = /*$copyScreenFeedback*/
      O[8] !== null), I & /*$$scope, $copyScreenFeedback*/
      4194560 && (Jr.$$scope = { dirty: I, ctx: O }), w.$set(Jr);
      const An = {};
      I & /*$debugging*/
      2 && (An.active = /*$debugging*/
      O[1]), $.$set(An), (!Bt || I & /*loaded, running, isDebug*/
      112 && M !== (M = !/*loaded*/
      O[6] && /*running*/
      O[5] && !/*isDebug*/
      O[4])) && (D.disabled = M);
      const ve = {};
      I & /*crashedHint, $tracing*/
      516 && (ve.visible = /*crashedHint*/
      O[2] && !/*$tracing*/
      O[9]), I & /*$$scope*/
      4194304 && (ve.$$scope = { dirty: I, ctx: O }), T.$set(ve), (!Bt || I & /*loaded, crashed, running*/
      97 && R !== (R = !/*loaded*/
      O[6] && !/*crashed*/
      O[0] && !/*running*/
      O[5])) && (H.disabled = R);
      const tn = {};
      I & /*loaded, $debugging*/
      66 && (tn.visible = /*loaded*/
      O[6] && !/*$debugging*/
      O[1]), I & /*$$scope*/
      4194304 && (tn.$$scope = { dirty: I, ctx: O }), lt.$set(tn), (!Bt || I & /*loaded*/
      64 && ue !== (ue = !/*loaded*/
      O[6])) && (J.disabled = ue);
    },
    i(O) {
      Bt || (B(a.$$.fragment, O), B(s.$$.fragment, O), B(w.$$.fragment, O), B(z.$$.fragment, O), B(y.$$.fragment, O), B($.$$.fragment, O), B(T.$$.fragment, O), B(N.$$.fragment, O), B(lt.$$.fragment, O), B(Vt.$$.fragment, O), B(Tt.$$.fragment, O), Bt = !0);
    },
    o(O) {
      Q(a.$$.fragment, O), Q(s.$$.fragment, O), Q(w.$$.fragment, O), Q(z.$$.fragment, O), Q(y.$$.fragment, O), Q($.$$.fragment, O), Q(T.$$.fragment, O), Q(N.$$.fragment, O), Q(lt.$$.fragment, O), Q(Vt.$$.fragment, O), Q(Tt.$$.fragment, O), Bt = !1;
    },
    d(O) {
      O && U(e), F(a), F(s), i[19](null), F(w), F(z), F(y), F($), F(T), F(N), F(lt), F(Vt), F(Tt), Xr = !1, Zr(Wr);
    }
  };
}
function Ua(i, e, r) {
  let a, o, s, d, c, f, p, b, g;
  et(i, Z2, (h) => r(1, f = h)), et(i, Zt, (h) => r(18, p = h)), et(i, V2, (h) => r(8, b = h)), et(i, cl, (h) => r(9, g = h));
  const w = () => {
    z.click();
  };
  let x = !1, z;
  const q = T2(), m = (h) => {
    q("romChanged", h);
  }, y = (h) => {
    q("doCopyScreen", h);
  }, j = (h) => {
    q("doSaveScreen", h);
  }, C = (h) => {
    q("doRun", h);
  }, P = (h) => {
    q("doFullscreen", h);
  }, D = (h) => {
    q("doDump", h);
  }, $ = (h) => {
    q("doDebug", h);
  };
  function M(h) {
    X0[h ? "unshift" : "push"](() => {
      z = h, r(3, z);
    });
  }
  return i.$$.update = () => {
    i.$$.dirty & /*$state*/
    262144 && r(7, a = p === "empty"), i.$$.dirty & /*$state*/
    262144 && r(6, o = p === "loaded"), i.$$.dirty & /*$state*/
    262144 && r(0, s = p === "crashed"), i.$$.dirty & /*$state*/
    262144 && r(5, d = p === "running"), i.$$.dirty & /*crashed*/
    1 && s && (r(2, x = !0), setTimeout(
      () => {
        r(2, x = !1);
      },
      4e3
    )), i.$$.dirty & /*$state*/
    262144, i.$$.dirty & /*$debugging*/
    2 && r(4, c = f);
  }, [
    s,
    f,
    x,
    z,
    c,
    d,
    o,
    a,
    b,
    g,
    w,
    m,
    y,
    j,
    C,
    P,
    D,
    $,
    p,
    M
  ];
}
class za extends V {
  constructor(e) {
    super(), Y(this, e, Ua, Ga, A, {});
  }
}
function Sa(i) {
  let e, r, a, o;
  return {
    c() {
      e = l("svg"), r = l("g"), a = l("path"), o = l("path"), t(a, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"), t(a, "opacity", "0.5"), t(o, "stroke-linecap", "round"), t(o, "d", "m14.5 9.5l-5 5m0-5l5 5"), t(r, "fill", "none"), t(r, "stroke", "currentColor"), t(r, "stroke-width", "1.5"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      S(s, e, d), n(e, r), n(r, a), n(r, o);
    },
    p: _,
    i: _,
    o: _,
    d(s) {
      s && U(e);
    }
  };
}
class yi extends V {
  constructor(e) {
    super(), Y(this, e, null, Sa, A, {});
  }
}
function $a(i) {
  let e, r, a;
  return {
    c() {
      e = l("svg"), r = l("path"), a = l("path"), t(r, "fill", "currentColor"), t(r, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), t(r, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M12.01 5.25a6.59 6.59 0 0 0-6.55 5.833H5a.75.75 0 0 0-.53 1.281l1.168 1.167a.75.75 0 0 0 1.06 0l1.169-1.167a.75.75 0 0 0-.53-1.28h-.364A5.09 5.09 0 0 1 12.01 6.75a5.08 5.08 0 0 1 3.838 1.743a.75.75 0 1 0 1.13-.986A6.58 6.58 0 0 0 12.01 5.25m6.352 5.22a.75.75 0 0 0-1.06 0l-1.168 1.166a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-3.839-1.743a.75.75 0 0 0-1.13.987a6.58 6.58 0 0 0 4.969 2.256a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, e, s), n(e, r), n(e, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(e);
    }
  };
}
class Ma extends V {
  constructor(e) {
    super(), Y(this, e, null, $a, A, {});
  }
}
function Oa(i) {
  let e, r, a;
  return {
    c() {
      e = l("g"), r = l("path"), a = l("path"), t(r, "d", "M22 5.814v.69c0 1.038 0 1.557-.26 1.987s-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281s-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69"), t(a, "d", "M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815"), t(a, "opacity", "0.5"), t(e, "fill", "none"), t(e, "stroke", "currentColor"), t(e, "stroke-width", "1.5");
    },
    m(o, s) {
      S(o, e, s), n(e, r), n(e, a);
    },
    d(o) {
      o && U(e);
    }
  };
}
function Ca(i) {
  let e, r;
  return {
    c() {
      e = l("path"), r = l("path"), t(e, "fill", "currentColor"), t(e, "fill-rule", "evenodd"), t(e, "d", "M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3"), t(e, "clip-rule", "evenodd"), t(r, "fill", "currentColor"), t(r, "d", "M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988"), t(r, "opacity", "0.5");
    },
    m(a, o) {
      S(a, e, o), S(a, r, o);
    },
    d(a) {
      a && (U(e), U(r));
    }
  };
}
function Ea(i) {
  let e;
  function r(s, d) {
    return (
      /*on*/
      s[0] ? Ca : Oa
    );
  }
  let a = r(i), o = a(i);
  return {
    c() {
      e = l("svg"), o.c(), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      S(s, e, d), o.m(e, null);
    },
    p(s, [d]) {
      a !== (a = r(s)) && (o.d(1), o = a(s), o && (o.c(), o.m(e, null)));
    },
    i: _,
    o: _,
    d(s) {
      s && U(e), o.d();
    }
  };
}
function ja(i, e, r) {
  let { on: a = !1 } = e;
  return i.$$set = (o) => {
    "on" in o && r(0, a = o.on);
  }, [a];
}
class Ha extends V {
  constructor(e) {
    super(), Y(this, e, ja, Ea, A, { on: 0 });
  }
}
function ii(i, e, r) {
  const a = i.slice();
  a[10] = e[r], a[13] = r;
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
function Da(i) {
  let e;
  return {
    c() {
      e = k("p"), e.textContent = "Loading ...";
    },
    m(r, a) {
      S(r, e, a);
    },
    p: _,
    d(r) {
      r && U(e);
    }
  };
}
function Ra(i) {
  let e = (
    /*filtered*/
    i[1]
  ), r, a = si(i);
  return {
    c() {
      a.c(), r = Q2();
    },
    m(o, s) {
      a.m(o, s), S(o, r, s);
    },
    p(o, s) {
      s & /*filtered*/
      2 && A(e, e = /*filtered*/
      o[1]) ? (a.d(1), a = si(o), a.c(), a.m(r.parentNode, r)) : a.p(o, s);
    },
    d(o) {
      o && U(r), a.d(o);
    }
  };
}
function ai(i) {
  let e, r, a = (
    /*label*/
    i[11] + ""
  ), o, s, d, c, f;
  return {
    c() {
      e = k("div"), r = k("label"), o = Z(a), s = E(), d = k("input"), f = E(), t(r, "for", "reg_" + /*i*/
      i[13]), t(
        r,
        "title",
        /*label*/
        i[11]
      ), t(r, "class", "svelte-1l9tfs5"), t(d, "type", "text"), t(d, "name", "reg_" + /*i*/
      i[13]), d.value = c = /*reg*/
      i[10].toString(16).toUpperCase(), d.readOnly = !0, t(d, "class", "svelte-1l9tfs5"), t(e, "class", "row svelte-1l9tfs5");
    },
    m(p, b) {
      S(p, e, b), n(e, r), n(r, o), n(e, s), n(e, d), n(e, f);
    },
    p(p, b) {
      b & /*dump*/
      1 && c !== (c = /*reg*/
      p[10].toString(16).toUpperCase()) && d.value !== c && (d.value = c);
    },
    d(p) {
      p && U(e);
    }
  };
}
function oi(i) {
  let e = !/*filtered*/
  i[1] || /*filtered_names*/
  i[4].includes(
    /*label*/
    i[11]
  ), r, a = e && ai(i);
  return {
    c() {
      a && a.c(), r = Q2();
    },
    m(o, s) {
      a && a.m(o, s), S(o, r, s);
    },
    p(o, s) {
      s & /*filtered*/
      2 && (e = !/*filtered*/
      o[1] || /*filtered_names*/
      o[4].includes(
        /*label*/
        o[11]
      )), e ? a ? a.p(o, s) : (a = ai(o), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null);
    },
    d(o) {
      o && U(r), a && a.d(o);
    }
  };
}
function si(i) {
  let e, r = H2(
    /*dump*/
    i[0].registers
  ), a = [];
  for (let o = 0; o < r.length; o += 1)
    a[o] = oi(ii(i, r, o));
  return {
    c() {
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      e = Q2();
    },
    m(o, s) {
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(o, s);
      S(o, e, s);
    },
    p(o, s) {
      if (s & /*dump, registers_names, filtered, filtered_names*/
      27) {
        r = H2(
          /*dump*/
          o[0].registers
        );
        let d;
        for (d = 0; d < r.length; d += 1) {
          const c = ii(o, r, d);
          a[d] ? a[d].p(c, s) : (a[d] = oi(c), a[d].c(), a[d].m(e.parentNode, e));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = r.length;
      }
    },
    d(o) {
      o && U(e), Si(a, o);
    }
  };
}
function Ba(i) {
  let e, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, j;
  d = new Ha({ props: { on: (
    /*filtered*/
    i[1]
  ) } }), p = new Ma({}), w = new yi({});
  function C($, M) {
    return (
      /*dump*/
      $[0] ? Ra : Da
    );
  }
  let P = C(i), D = P(i);
  return {
    c() {
      e = k("div"), r = k("div"), a = k("h4"), a.textContent = "Registers", o = E(), s = k("button"), K(d.$$.fragment), c = E(), f = k("button"), K(p.$$.fragment), b = E(), g = k("button"), K(w.$$.fragment), x = E(), z = k("div"), q = k("div"), D.c(), t(a, "class", "header"), t(s, "class", "toolbar-action"), t(s, "type", "button"), t(s, "tabindex", "0"), t(s, "id", "btn_filter_trace"), t(f, "class", "toolbar-action"), t(f, "type", "button"), t(f, "tabindex", "0"), t(f, "id", "btn_refresh_trace"), t(g, "class", "toolbar-action"), t(g, "type", "button"), t(g, "tabindex", "0"), t(g, "id", "btn_close_trace"), t(r, "class", "titlebar"), t(q, "class", "registers svelte-1l9tfs5"), t(z, "class", "contents svelte-1l9tfs5"), t(e, "class", "tracing-panel view-panel svelte-1l9tfs5"), he(
        e,
        "visible",
        /*$tracing*/
        i[2]
      );
    },
    m($, M) {
      S($, e, M), n(e, r), n(r, a), n(r, o), n(r, s), L(d, s, null), n(r, c), n(r, f), L(p, f, null), n(r, b), n(r, g), L(w, g, null), n(e, x), n(e, z), n(z, q), D.m(q, null), m = !0, y || (j = [
        tt(
          s,
          "click",
          /*doFilter*/
          i[5]
        ),
        tt(
          f,
          "click",
          /*doRefresh*/
          i[6]
        ),
        tt(
          g,
          "click",
          /*doClose*/
          i[7]
        )
      ], y = !0);
    },
    p($, [M]) {
      const h = {};
      M & /*filtered*/
      2 && (h.on = /*filtered*/
      $[1]), d.$set(h), P === (P = C($)) && D ? D.p($, M) : (D.d(1), D = P($), D && (D.c(), D.m(q, null))), (!m || M & /*$tracing*/
      4) && he(
        e,
        "visible",
        /*$tracing*/
        $[2]
      );
    },
    i($) {
      m || (B(d.$$.fragment, $), B(p.$$.fragment, $), B(w.$$.fragment, $), m = !0);
    },
    o($) {
      Q(d.$$.fragment, $), Q(p.$$.fragment, $), Q(w.$$.fragment, $), m = !1;
    },
    d($) {
      $ && U(e), F(d), F(p), F(w), D.d(), y = !1, Zr(j);
    }
  };
}
function Qa(i, e, r) {
  let a;
  et(i, cl, (x) => r(2, a = x));
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
    "SR",
    "PC"
  ], d = null;
  const c = B2.subscribe((x) => {
    r(0, d = x);
  });
  Ci(() => {
    c();
  });
  let f = !0;
  const p = (x) => {
    r(1, f = !f);
  }, b = T2();
  return [
    d,
    f,
    a,
    o,
    s,
    p,
    (x) => {
      b("doRefresh", x);
    },
    (x) => {
      b("doClose", x), cl.set(!1);
    }
  ];
}
class Pa extends V {
  constructor(e) {
    super(), Y(this, e, Qa, Ba, A, {});
  }
}
function La(i, e, r) {
  var a = new FileReader();
  a.onload = function(o) {
    if (o.target && o.target.result) {
      var s = new Uint8Array(o.target.result);
      window.Module.FS.analyzePath(e).exists && window.Module.FS.unlink(e), window.Module.FS.createDataFile("/", e, s, !0, !0), console.log(`${e} loaded into the Emscripten filesystem.`), r(null);
    } else
      r("target is empty");
  }, a.onerror = function(o) {
    r(o);
  }, a.readAsArrayBuffer(i);
}
function Fa(i, e) {
  return new Promise((r, a) => {
    La(i, e, (o) => {
      o ? a(o) : r(() => {
      });
    });
  });
}
function Ka(i) {
  let e, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, j, C, P, D, $, M, h, H, T, Rt, N, R, nt, J, lt, Xt, Vt, ue, Kn, It, Wt, it, Tt, Bt, Xr, Wr, O, I, ge, Jr, An, ve, tn, W0, Xl, J0, Wl, dl, Jl, t0, e0, fl, r0, n0, l0, Yn, t2, e2, r2, n2, en, l2, i2, a2, o2, s2, i0, c2, a0, Vn, d2, f2, p2, o0, pl, h2, s0, c0, hl, u2, d0, f0, p0, g2, h0, u0, v2, g0, ul, m2, v0, y2, Jt, x2, b2, w2, k2, q2, _2, G2, me, ye, xe, be, we, ke, qe, _e, Ge, Ue, ze, Se, $e, Me, Oe, Ce, Ee, je, He, De, Re, Be, Qe, Pe, Le, Fe, Ke, Ae, Ye, Ve, Ie, Te, Ne, Ze, Xe, We, Je, t1, e1, r1, n1, l1, i1, a1, o1, s1, c1, d1, f1, p1, h1, u1, g1, v1, m1, y1, x1, b1, w1, k1, q1, _1, G1, U1, te, ee, re, z1, S1, $1, M1, O1, C1, E1, j1, H1, D1, R1, B1, Q1, P1, L1, F1, K1, A1, Y1, V1, I1, T1, N1, Z1, X1, W1, J1, tr, er, rr, nr, lr, ir, ar, Qt, In, m0, y0, or, rt, gl, x0, vl, Tn, Pt, Lt, Ft, Kt, ne, le, ie, rn, at, sr, b0, U2, z2, S2, nn, $2, v, w0, k0, q0, ml, yl, Nn, ot, cr, _0, ln, st, dr, G0, an, ct, fr, U0, on, dt, pr, z0, sn, ft, hr, S0, cn, pt, ur, $0, dn, ht, gr, M0, fn, ut, vr, O0, pn, gt, mr, C0, hn, vt, yr, E0, un, mt, xr, j0, gn, yt, br, H0, vn, xt, wr, D0, mn, bt, kr, R0, yn, wt, qr, B0, xn, kt, _r, Q0, bn, qt, Gr, P0, M2, O2, C2, Ur, zr, Sr, $r, At, ae, oe, se, L0, Zn, _t, Mr, Xn, Gt, Or, Wn, Ut, Cr, Jn, zt, Er, tl, St, jr, el, $t, Hr, rl, Mt, Dr, nl, Ot, Rr, ce, ll, Ct, Br, il, Et, Qr, al, jt, Pr, ol, Ht, Lr, xl, wn, bl, Fr, Dt, kn, X2, W2, wl, qn, kl, _n, ql, Gn, _l, Un, Gl, zn, Ul, Sn, zl, $n, Sl, Mn, $l, On, Ml, Kr, F0, Nt, Ol, Ar, Cl, Cn, El, En, jl, jn, Hl, Yr, Dl, Vr, Rl, Ir, Bl, Hn, Ql, Dn, Pl, Rn, Ll, Bn, Fl, Qn, Kl, Pn, Ln, Tr, Fn, Nr, X, W, Al, K0, A0, de, Y0, V0, I0, fe;
  return {
    c() {
      e = l("svg"), r = l("defs"), a = l("linearGradient"), o = l("stop"), s = l("stop"), d = l("stop"), c = l("stop"), f = l("linearGradient"), p = l("stop"), b = l("stop"), g = l("stop"), w = l("stop"), x = l("stop"), z = l("linearGradient"), q = l("stop"), m = l("stop"), y = l("stop"), j = l("stop"), C = l("linearGradient"), P = l("stop"), D = l("stop"), $ = l("stop"), M = l("stop"), h = l("stop"), H = l("linearGradient"), T = l("stop"), Rt = l("stop"), N = l("stop"), R = l("stop"), nt = l("linearGradient"), J = l("stop"), lt = l("stop"), Xt = l("linearGradient"), Vt = l("stop"), ue = l("stop"), Kn = l("stop"), It = l("stop"), Wt = l("linearGradient"), it = l("stop"), Tt = l("stop"), Bt = l("stop"), Xr = l("stop"), Wr = l("linearGradient"), O = l("stop"), I = l("stop"), ge = l("linearGradient"), Jr = l("stop"), An = l("stop"), ve = l("linearGradient"), tn = l("stop"), W0 = l("stop"), Xl = l("linearGradient"), J0 = l("stop"), Wl = l("stop"), dl = l("linearGradient"), Jl = l("stop"), t0 = l("stop"), e0 = l("stop"), fl = l("linearGradient"), r0 = l("stop"), n0 = l("stop"), l0 = l("stop"), Yn = l("linearGradient"), t2 = l("stop"), e2 = l("stop"), r2 = l("stop"), n2 = l("stop"), en = l("linearGradient"), l2 = l("stop"), i2 = l("stop"), a2 = l("stop"), o2 = l("stop"), s2 = l("stop"), i0 = l("linearGradient"), c2 = l("stop"), a0 = l("stop"), Vn = l("linearGradient"), d2 = l("stop"), f2 = l("stop"), p2 = l("stop"), o0 = l("stop"), pl = l("linearGradient"), h2 = l("stop"), s0 = l("stop"), c0 = l("stop"), hl = l("linearGradient"), u2 = l("stop"), d0 = l("stop"), f0 = l("stop"), p0 = l("linearGradient"), g2 = l("stop"), h0 = l("stop"), u0 = l("linearGradient"), v2 = l("stop"), g0 = l("stop"), ul = l("linearGradient"), m2 = l("stop"), v0 = l("stop"), y2 = l("stop"), Jt = l("linearGradient"), x2 = l("stop"), b2 = l("stop"), w2 = l("stop"), k2 = l("stop"), q2 = l("stop"), _2 = l("stop"), G2 = l("stop"), me = l("linearGradient"), ye = l("linearGradient"), xe = l("linearGradient"), be = l("linearGradient"), we = l("linearGradient"), ke = l("linearGradient"), qe = l("linearGradient"), _e = l("linearGradient"), Ge = l("linearGradient"), Ue = l("linearGradient"), ze = l("linearGradient"), Se = l("linearGradient"), $e = l("linearGradient"), Me = l("linearGradient"), Oe = l("linearGradient"), Ce = l("linearGradient"), Ee = l("linearGradient"), je = l("linearGradient"), He = l("linearGradient"), De = l("linearGradient"), Re = l("linearGradient"), Be = l("linearGradient"), Qe = l("linearGradient"), Pe = l("linearGradient"), Le = l("linearGradient"), Fe = l("linearGradient"), Ke = l("linearGradient"), Ae = l("linearGradient"), Ye = l("linearGradient"), Ve = l("linearGradient"), Ie = l("linearGradient"), Te = l("linearGradient"), Ne = l("linearGradient"), Ze = l("linearGradient"), Xe = l("linearGradient"), We = l("linearGradient"), Je = l("linearGradient"), t1 = l("linearGradient"), e1 = l("linearGradient"), r1 = l("linearGradient"), n1 = l("linearGradient"), l1 = l("linearGradient"), i1 = l("linearGradient"), a1 = l("linearGradient"), o1 = l("linearGradient"), s1 = l("linearGradient"), c1 = l("linearGradient"), d1 = l("linearGradient"), f1 = l("linearGradient"), p1 = l("linearGradient"), h1 = l("linearGradient"), u1 = l("linearGradient"), g1 = l("linearGradient"), v1 = l("linearGradient"), m1 = l("linearGradient"), y1 = l("linearGradient"), x1 = l("linearGradient"), b1 = l("linearGradient"), w1 = l("linearGradient"), k1 = l("linearGradient"), q1 = l("linearGradient"), _1 = l("linearGradient"), G1 = l("linearGradient"), U1 = l("linearGradient"), te = l("linearGradient"), ee = l("linearGradient"), re = l("linearGradient"), z1 = l("linearGradient"), S1 = l("linearGradient"), $1 = l("linearGradient"), M1 = l("linearGradient"), O1 = l("linearGradient"), C1 = l("linearGradient"), E1 = l("linearGradient"), j1 = l("linearGradient"), H1 = l("linearGradient"), D1 = l("linearGradient"), R1 = l("linearGradient"), B1 = l("linearGradient"), Q1 = l("linearGradient"), P1 = l("linearGradient"), L1 = l("linearGradient"), F1 = l("linearGradient"), K1 = l("linearGradient"), A1 = l("linearGradient"), Y1 = l("linearGradient"), V1 = l("linearGradient"), I1 = l("linearGradient"), T1 = l("linearGradient"), N1 = l("linearGradient"), Z1 = l("linearGradient"), X1 = l("linearGradient"), W1 = l("linearGradient"), J1 = l("linearGradient"), tr = l("linearGradient"), er = l("linearGradient"), rr = l("linearGradient"), nr = l("linearGradient"), lr = l("linearGradient"), ir = l("linearGradient"), ar = l("linearGradient"), Qt = l("pattern"), In = l("rect"), m0 = l("path"), y0 = l("path"), or = l("linearGradient"), rt = l("g"), gl = l("path"), x0 = l("path"), vl = l("path"), Tn = l("path"), Pt = l("rect"), Lt = l("rect"), Ft = l("rect"), Kt = l("rect"), ne = l("rect"), le = l("rect"), ie = l("rect"), rn = l("g"), at = l("rect"), sr = l("rect"), b0 = l("path"), U2 = l("mask"), z2 = l("path"), S2 = l("g"), nn = l("foreignObject"), $2 = k("div"), $2.innerHTML = '<canvas width="320" height="528" style="width: 320px; height: 528px"></canvas>', v = l("g"), w0 = l("path"), k0 = l("path"), q0 = l("path"), ml = l("path"), yl = l("path"), Nn = l("g"), ot = l("rect"), cr = l("rect"), _0 = l("path"), ln = l("g"), st = l("rect"), dr = l("rect"), G0 = l("path"), an = l("g"), ct = l("rect"), fr = l("rect"), U0 = l("path"), on = l("g"), dt = l("rect"), pr = l("rect"), z0 = l("path"), sn = l("g"), ft = l("rect"), hr = l("rect"), S0 = l("path"), cn = l("g"), pt = l("rect"), ur = l("rect"), $0 = l("path"), dn = l("g"), ht = l("rect"), gr = l("rect"), M0 = l("path"), fn = l("g"), ut = l("rect"), vr = l("rect"), O0 = l("path"), pn = l("g"), gt = l("rect"), mr = l("rect"), C0 = l("path"), hn = l("g"), vt = l("rect"), yr = l("rect"), E0 = l("path"), un = l("g"), mt = l("rect"), xr = l("rect"), j0 = l("path"), gn = l("g"), yt = l("rect"), br = l("rect"), H0 = l("path"), vn = l("g"), xt = l("rect"), wr = l("rect"), D0 = l("path"), mn = l("g"), bt = l("rect"), kr = l("rect"), R0 = l("path"), yn = l("g"), wt = l("rect"), qr = l("rect"), B0 = l("path"), xn = l("g"), kt = l("rect"), _r = l("rect"), Q0 = l("path"), bn = l("g"), qt = l("rect"), Gr = l("rect"), P0 = l("path"), M2 = l("path"), O2 = l("path"), C2 = l("path"), Ur = l("rect"), zr = l("rect"), Sr = l("rect"), $r = l("path"), At = l("rect"), ae = l("path"), oe = l("path"), se = l("path"), L0 = l("path"), Zn = l("g"), _t = l("rect"), Mr = l("rect"), Xn = l("g"), Gt = l("rect"), Or = l("rect"), Wn = l("g"), Ut = l("rect"), Cr = l("rect"), Jn = l("g"), zt = l("rect"), Er = l("rect"), tl = l("g"), St = l("rect"), jr = l("rect"), el = l("g"), $t = l("rect"), Hr = l("rect"), rl = l("g"), Mt = l("rect"), Dr = l("rect"), nl = l("g"), Ot = l("rect"), Rr = l("rect"), ce = l("rect"), ll = l("g"), Ct = l("rect"), Br = l("rect"), il = l("g"), Et = l("rect"), Qr = l("rect"), al = l("g"), jt = l("rect"), Pr = l("rect"), ol = l("g"), Ht = l("rect"), Lr = l("rect"), xl = l("g"), wn = l("path"), bl = l("g"), Fr = l("path"), Dt = l("text"), kn = l("tspan"), X2 = Z("xyz"), W2 = E(), wl = l("g"), qn = l("path"), kl = l("g"), _n = l("path"), ql = l("g"), Gn = l("path"), _l = l("g"), Un = l("path"), Gl = l("g"), zn = l("path"), Ul = l("g"), Sn = l("path"), zl = l("g"), $n = l("path"), Sl = l("g"), Mn = l("path"), $l = l("g"), On = l("path"), Ml = l("g"), Kr = l("path"), F0 = l("path"), Nt = l("path"), Ol = l("g"), Ar = l("path"), Cl = l("g"), Cn = l("path"), El = l("g"), En = l("path"), jl = l("g"), jn = l("path"), Hl = l("g"), Yr = l("path"), Dl = l("g"), Vr = l("path"), Rl = l("g"), Ir = l("path"), Bl = l("g"), Hn = l("path"), Ql = l("g"), Dn = l("path"), Pl = l("g"), Rn = l("path"), Ll = l("g"), Bn = l("path"), Fl = l("g"), Qn = l("path"), Kl = l("g"), Pn = l("path"), Ln = l("g"), Tr = l("path"), Fn = l("g"), Nr = l("path"), X = l("path"), W = l("path"), Al = l("path"), K0 = l("path"), A0 = l("path"), de = l("rect"), Y0 = l("path"), V0 = l("path"), I0 = l("path"), fe = l("rect"), t(o, "offset", "0"), t(o, "stop-color", "#3b3b3b"), t(s, "offset", ".1"), t(s, "stop-color", "#282828"), t(d, "offset", ".2"), t(d, "stop-color", "#282828"), t(c, "offset", "1"), t(c, "stop-color", "#272727"), t(a, "id", "x"), t(p, "offset", "0"), t(p, "stop-color", "#99b0df"), t(b, "offset", ".1"), t(b, "stop-color", "#7396de"), t(g, "offset", ".3"), t(g, "stop-color", "#4171d2"), t(w, "offset", ".9"), t(w, "stop-color", "#1f3d79"), t(x, "offset", "1"), t(x, "stop-color", "#173166"), t(f, "id", "l"), t(q, "offset", "0"), t(q, "stop-color", "#2b60cd"), t(m, "offset", ".5"), t(m, "stop-color", "#295fcc"), t(y, "offset", ".8"), t(y, "stop-color", "#3c73e3"), t(j, "offset", "1"), t(j, "stop-color", "#4279e8"), t(z, "id", "m"), t(P, "offset", "0"), t(P, "stop-color", "#ececec"), t(D, "offset", ".1"), t(D, "stop-color", "#ededed"), t($, "offset", ".3"), t($, "stop-color", "#ddd"), t(M, "offset", ".9"), t(M, "stop-color", "#b0b0b0"), t(h, "offset", "1"), t(h, "stop-color", "#9c9c9c"), t(C, "id", "v"), t(T, "offset", "0"), t(T, "stop-color", "#e7e7e7"), t(Rt, "offset", ".5"), t(Rt, "stop-color", "#f8f8f8"), t(N, "offset", ".8"), t(N, "stop-color", "#fff"), t(R, "offset", "1"), t(R, "stop-color", "#fbfbfb"), t(H, "id", "w"), t(J, "offset", "0"), t(J, "stop-color", "#cdcdcd"), t(J, "stop-opacity", ".4"), t(lt, "offset", "1"), t(lt, "stop-color", "#cdcdcd"), t(lt, "stop-opacity", "0"), t(nt, "id", "u"), t(Vt, "offset", "0"), t(Vt, "stop-color", "#d1d1d1"), t(ue, "offset", ".4"), t(ue, "stop-color", "#c2c2c2"), t(Kn, "offset", ".7"), t(Kn, "stop-color", "#6b6b6b"), t(It, "offset", "1"), t(It, "stop-color", "#616161"), t(Xt, "id", "t"), t(it, "offset", "0"), t(it, "stop-color", "#a8a8a8"), t(Tt, "offset", ".3"), t(Tt, "stop-color", "#b2b2b2"), t(Bt, "offset", ".8"), t(Bt, "stop-color", "#dadada"), t(Xr, "offset", "1"), t(Xr, "stop-color", "#ccc"), t(Wt, "id", "s"), t(O, "offset", "0"), t(O, "stop-color", "#252525"), t(I, "offset", "1"), t(I, "stop-color", "#363636"), t(Wr, "id", "r"), t(Jr, "offset", "0"), t(Jr, "stop-color", "#f7f7f7"), t(An, "offset", "1"), t(An, "stop-color", "#535353"), t(ge, "id", "q"), t(tn, "offset", "0"), t(tn, "stop-color", "#909090"), t(W0, "offset", "1"), t(W0, "stop-color", "#2d2d2d"), t(ve, "id", "p"), t(J0, "offset", "0"), t(J0, "stop-color", "#313131"), t(Wl, "offset", "1"), t(Wl, "stop-color", "#3a3a3a"), t(Wl, "stop-opacity", "0"), t(Xl, "id", "o"), t(Jl, "offset", "0"), t(Jl, "stop-color", "#c6c6c6"), t(Jl, "stop-opacity", ".4"), t(t0, "offset", ".4"), t(t0, "stop-color", "#a2a2a2"), t(t0, "stop-opacity", ".1"), t(e0, "offset", "1"), t(e0, "stop-color", "#a2a2a2"), t(e0, "stop-opacity", "0"), t(dl, "id", "n"), t(r0, "offset", "0"), t(r0, "stop-color", "#c6c6c6"), t(r0, "stop-opacity", ".4"), t(n0, "offset", ".7"), t(n0, "stop-color", "#a2a2a2"), t(n0, "stop-opacity", ".1"), t(l0, "offset", "1"), t(l0, "stop-color", "#a2a2a2"), t(l0, "stop-opacity", "0"), t(fl, "id", "k"), t(t2, "offset", "0"), t(t2, "stop-color", "#2e2e2e"), t(e2, "offset", ".5"), t(e2, "stop-color", "#2d2d2d"), t(r2, "offset", ".8"), t(r2, "stop-color", "#393939"), t(n2, "offset", "1"), t(n2, "stop-color", "#3d3d3d"), t(Yn, "id", "j"), t(l2, "offset", "0"), t(l2, "stop-color", "#464646"), t(i2, "offset", ".1"), t(i2, "stop-color", "#393939"), t(a2, "offset", ".3"), t(a2, "stop-color", "#2c2c2c"), t(o2, "offset", ".9"), t(o2, "stop-color", "#202020"), t(s2, "offset", "1"), t(s2, "stop-color", "#242424"), t(en, "id", "i"), t(c2, "offset", "0"), t(c2, "stop-color", "#1e7999"), t(a0, "offset", "1"), t(a0, "stop-color", "#1d7998"), t(a0, "stop-opacity", "0"), t(i0, "id", "h"), t(d2, "offset", "0"), t(d2, "stop-color", "#3a3a3a"), t(f2, "offset", ".3"), t(f2, "stop-color", "#414141"), t(p2, "offset", ".6"), t(p2, "stop-color", "#464646"), t(o0, "offset", "1"), t(o0, "stop-color", "#4b4b4b"), t(o0, "stop-opacity", "0"), t(Vn, "id", "g"), t(h2, "offset", "0"), t(h2, "stop-color", "#313131"), t(s0, "offset", ".4"), t(s0, "stop-color", "#3a3a3a"), t(s0, "stop-opacity", ".6"), t(c0, "offset", "1"), t(c0, "stop-color", "#3a3a3a"), t(c0, "stop-opacity", "0"), t(pl, "id", "f"), t(u2, "offset", "0"), t(u2, "stop-color", "#3a3a3a"), t(d0, "offset", ".4"), t(d0, "stop-color", "#3a3a3a"), t(d0, "stop-opacity", ".6"), t(f0, "offset", "1"), t(f0, "stop-color", "#3a3a3a"), t(f0, "stop-opacity", "0"), t(hl, "id", "e"), t(g2, "offset", "0"), t(g2, "stop-color", "#4e4e4e"), t(h0, "offset", "1"), t(h0, "stop-color", "#4e4e4e"), t(h0, "stop-opacity", "0"), t(p0, "id", "d"), t(v2, "offset", "0"), t(v2, "stop-color", "#555"), t(g0, "offset", "1"), t(g0, "stop-color", "#424242"), t(g0, "stop-opacity", "0"), t(u0, "id", "c"), t(m2, "offset", "0"), t(m2, "stop-color", "#9c9c9c"), t(v0, "offset", ".8"), t(v0, "stop-color", "#b0b0b0"), t(v0, "stop-opacity", ".1"), t(y2, "offset", "1"), t(y2, "stop-color", "#f5f5f5"), t(ul, "id", "b"), t(x2, "offset", "0"), t(x2, "stop-color", "#b6b6b6"), t(b2, "offset", "0"), t(b2, "stop-color", "#fefefe"), t(w2, "offset", ".1"), t(w2, "stop-color", "#e7e7e7"), t(k2, "offset", ".8"), t(k2, "stop-color", "#e8e8e8"), t(q2, "offset", ".9"), t(q2, "stop-color", "#e6e6e6"), t(_2, "offset", "1"), t(_2, "stop-color", "#e1e1e1"), t(G2, "offset", "1"), t(G2, "stop-color", "#b2b2b2"), t(Jt, "id", "a"), u(me, "xlink:href", "#a"), t(me, "id", "y"), t(me, "x1", "6.5"), t(me, "x2", "641.5"), t(me, "y1", "320.4"), t(me, "y2", "320.4"), t(me, "gradientUnits", "userSpaceOnUse"), u(ye, "xlink:href", "#b"), t(ye, "id", "z"), t(ye, "x1", "9.3"), t(ye, "x2", "634"), t(ye, "y1", "-300.4"), t(ye, "y2", "1004.4"), t(ye, "gradientUnits", "userSpaceOnUse"), u(xe, "xlink:href", "#c"), t(xe, "id", "B"), t(xe, "x1", "570"), t(xe, "x2", "94.5"), t(xe, "y1", "560.4"), t(xe, "y2", "-263.2"), t(xe, "gradientUnits", "userSpaceOnUse"), u(be, "xlink:href", "#d"), t(be, "id", "C"), t(be, "x1", "570"), t(be, "x2", "498.4"), t(be, "y1", "560.4"), t(be, "y2", "293"), t(be, "gradientUnits", "userSpaceOnUse"), u(we, "xlink:href", "#e"), t(we, "id", "J"), t(we, "x1", "91.3"), t(we, "x2", "71.6"), t(we, "y1", "978.6"), t(we, "y2", "958.9"), t(we, "gradientUnits", "userSpaceOnUse"), u(ke, "xlink:href", "#f"), t(ke, "id", "I"), t(ke, "x1", "504"), t(ke, "x2", "504"), t(ke, "y1", "978"), t(ke, "y2", "215.2"), t(ke, "gradientUnits", "userSpaceOnUse"), u(qe, "xlink:href", "#g"), t(qe, "id", "K"), t(qe, "x1", "544"), t(qe, "x2", "582"), t(qe, "y1", "980"), t(qe, "y2", "942"), t(qe, "gradientUnits", "userSpaceOnUse"), u(_e, "xlink:href", "#h"), t(_e, "id", "L"), t(_e, "x1", "300"), t(_e, "x2", "300"), t(_e, "y1", "44"), t(_e, "y2", "1124"), t(_e, "gradientUnits", "userSpaceOnUse"), u(Ge, "xlink:href", "#i"), t(Ge, "id", "M"), t(Ge, "x1", "514.8"), t(Ge, "x2", "583.9"), t(Ge, "y1", "711.8"), t(Ge, "y2", "751.7"), t(Ge, "gradientUnits", "userSpaceOnUse"), u(Ue, "xlink:href", "#j"), t(Ue, "id", "N"), t(Ue, "x1", "549"), t(Ue, "x2", "549"), t(Ue, "y1", "713.4"), t(Ue, "y2", "748.4"), t(Ue, "gradientUnits", "userSpaceOnUse"), u(ze, "xlink:href", "#k"), t(ze, "id", "O"), t(ze, "x1", "515"), t(ze, "x2", "536.3"), t(ze, "y1", "1125"), t(ze, "y2", "1146.3"), t(ze, "gradientUnits", "userSpaceOnUse"), u(Se, "xlink:href", "#k"), t(Se, "id", "H"), t(Se, "x1", "515"), t(Se, "x2", "536.3"), t(Se, "y1", "1125"), t(Se, "y2", "1146.3"), t(Se, "gradientUnits", "userSpaceOnUse"), u($e, "xlink:href", "#i"), t($e, "id", "F"), t($e, "x1", "514.8"), t($e, "x2", "583.9"), t($e, "y1", "711.8"), t($e, "y2", "751.7"), t($e, "gradientUnits", "userSpaceOnUse"), u(Me, "xlink:href", "#j"), t(Me, "id", "G"), t(Me, "x1", "549"), t(Me, "x2", "549"), t(Me, "y1", "713.4"), t(Me, "y2", "748.4"), t(Me, "gradientUnits", "userSpaceOnUse"), u(Oe, "xlink:href", "#k"), t(Oe, "id", "R"), t(Oe, "x1", "515"), t(Oe, "x2", "536.3"), t(Oe, "y1", "1125"), t(Oe, "y2", "1146.3"), t(Oe, "gradientUnits", "userSpaceOnUse"), u(Ce, "xlink:href", "#i"), t(Ce, "id", "P"), t(Ce, "x1", "514.8"), t(Ce, "x2", "583.9"), t(Ce, "y1", "711.8"), t(Ce, "y2", "751.7"), t(Ce, "gradientUnits", "userSpaceOnUse"), u(Ee, "xlink:href", "#j"), t(Ee, "id", "Q"), t(Ee, "x1", "549"), t(Ee, "x2", "549"), t(Ee, "y1", "713.4"), t(Ee, "y2", "748.4"), t(Ee, "gradientUnits", "userSpaceOnUse"), u(je, "xlink:href", "#k"), t(je, "id", "U"), t(je, "x1", "515"), t(je, "x2", "536.3"), t(je, "y1", "1125"), t(je, "y2", "1146.3"), t(je, "gradientUnits", "userSpaceOnUse"), u(He, "xlink:href", "#i"), t(He, "id", "S"), t(He, "x1", "514.8"), t(He, "x2", "583.9"), t(He, "y1", "711.8"), t(He, "y2", "751.7"), t(He, "gradientUnits", "userSpaceOnUse"), u(De, "xlink:href", "#j"), t(De, "id", "T"), t(De, "x1", "549"), t(De, "x2", "549"), t(De, "y1", "713.4"), t(De, "y2", "748.4"), t(De, "gradientUnits", "userSpaceOnUse"), u(Re, "xlink:href", "#k"), t(Re, "id", "X"), t(Re, "x1", "515"), t(Re, "x2", "536.3"), t(Re, "y1", "1125"), t(Re, "y2", "1146.3"), t(Re, "gradientUnits", "userSpaceOnUse"), u(Be, "xlink:href", "#l"), t(Be, "id", "V"), t(Be, "x1", "514.8"), t(Be, "x2", "583.9"), t(Be, "y1", "711.8"), t(Be, "y2", "751.7"), t(Be, "gradientUnits", "userSpaceOnUse"), u(Qe, "xlink:href", "#m"), t(Qe, "id", "W"), t(Qe, "x1", "549"), t(Qe, "x2", "549"), t(Qe, "y1", "713.4"), t(Qe, "y2", "748.4"), t(Qe, "gradientUnits", "userSpaceOnUse"), u(Pe, "xlink:href", "#k"), t(Pe, "id", "aa"), t(Pe, "x1", "515"), t(Pe, "x2", "536.3"), t(Pe, "y1", "1125"), t(Pe, "y2", "1146.3"), t(Pe, "gradientUnits", "userSpaceOnUse"), u(Le, "xlink:href", "#i"), t(Le, "id", "Y"), t(Le, "x1", "514.8"), t(Le, "x2", "583.9"), t(Le, "y1", "711.8"), t(Le, "y2", "751.7"), t(Le, "gradientUnits", "userSpaceOnUse"), u(Fe, "xlink:href", "#j"), t(Fe, "id", "Z"), t(Fe, "x1", "549"), t(Fe, "x2", "549"), t(Fe, "y1", "713.4"), t(Fe, "y2", "748.4"), t(Fe, "gradientUnits", "userSpaceOnUse"), u(Ke, "xlink:href", "#k"), t(Ke, "id", "ad"), t(Ke, "x1", "515"), t(Ke, "x2", "536.3"), t(Ke, "y1", "1125"), t(Ke, "y2", "1146.3"), t(Ke, "gradientUnits", "userSpaceOnUse"), u(Ae, "xlink:href", "#i"), t(Ae, "id", "ab"), t(Ae, "x1", "514.8"), t(Ae, "x2", "583.9"), t(Ae, "y1", "711.8"), t(Ae, "y2", "751.7"), t(Ae, "gradientUnits", "userSpaceOnUse"), u(Ye, "xlink:href", "#j"), t(Ye, "id", "ac"), t(Ye, "x1", "549"), t(Ye, "x2", "549"), t(Ye, "y1", "713.4"), t(Ye, "y2", "748.4"), t(Ye, "gradientUnits", "userSpaceOnUse"), u(Ve, "xlink:href", "#k"), t(Ve, "id", "ag"), t(Ve, "x1", "515"), t(Ve, "x2", "536.3"), t(Ve, "y1", "1125"), t(Ve, "y2", "1146.3"), t(Ve, "gradientUnits", "userSpaceOnUse"), u(Ie, "xlink:href", "#i"), t(Ie, "id", "ae"), t(Ie, "x1", "514.8"), t(Ie, "x2", "583.9"), t(Ie, "y1", "711.8"), t(Ie, "y2", "751.7"), t(Ie, "gradientUnits", "userSpaceOnUse"), u(Te, "xlink:href", "#j"), t(Te, "id", "af"), t(Te, "x1", "549"), t(Te, "x2", "549"), t(Te, "y1", "713.4"), t(Te, "y2", "748.4"), t(Te, "gradientUnits", "userSpaceOnUse"), u(Ne, "xlink:href", "#k"), t(Ne, "id", "aj"), t(Ne, "x1", "515"), t(Ne, "x2", "536.3"), t(Ne, "y1", "1125"), t(Ne, "y2", "1146.3"), t(Ne, "gradientUnits", "userSpaceOnUse"), u(Ze, "xlink:href", "#i"), t(Ze, "id", "ah"), t(Ze, "x1", "514.8"), t(Ze, "x2", "583.9"), t(Ze, "y1", "711.8"), t(Ze, "y2", "751.7"), t(Ze, "gradientUnits", "userSpaceOnUse"), u(Xe, "xlink:href", "#j"), t(Xe, "id", "ai"), t(Xe, "x1", "549"), t(Xe, "x2", "549"), t(Xe, "y1", "713.4"), t(Xe, "y2", "748.4"), t(Xe, "gradientUnits", "userSpaceOnUse"), u(We, "xlink:href", "#k"), t(We, "id", "ay"), t(We, "x1", "515"), t(We, "x2", "536.3"), t(We, "y1", "1125"), t(We, "y2", "1146.3"), t(We, "gradientUnits", "userSpaceOnUse"), u(Je, "xlink:href", "#i"), t(Je, "id", "at"), t(Je, "x1", "514.8"), t(Je, "x2", "583.9"), t(Je, "y1", "711.8"), t(Je, "y2", "751.7"), t(Je, "gradientUnits", "userSpaceOnUse"), u(t1, "xlink:href", "#j"), t(t1, "id", "au"), t(t1, "x1", "549"), t(t1, "x2", "549"), t(t1, "y1", "713.4"), t(t1, "y2", "748.4"), t(t1, "gradientUnits", "userSpaceOnUse"), u(e1, "xlink:href", "#k"), t(e1, "id", "av"), t(e1, "x1", "515"), t(e1, "x2", "536.3"), t(e1, "y1", "1125"), t(e1, "y2", "1146.3"), t(e1, "gradientUnits", "userSpaceOnUse"), u(r1, "xlink:href", "#i"), t(r1, "id", "aq"), t(r1, "x1", "514.8"), t(r1, "x2", "583.9"), t(r1, "y1", "711.8"), t(r1, "y2", "751.7"), t(r1, "gradientUnits", "userSpaceOnUse"), u(n1, "xlink:href", "#j"), t(n1, "id", "ar"), t(n1, "x1", "549"), t(n1, "x2", "549"), t(n1, "y1", "713.4"), t(n1, "y2", "748.4"), t(n1, "gradientUnits", "userSpaceOnUse"), u(l1, "xlink:href", "#k"), t(l1, "id", "as"), t(l1, "x1", "515"), t(l1, "x2", "536.3"), t(l1, "y1", "1125"), t(l1, "y2", "1146.3"), t(l1, "gradientUnits", "userSpaceOnUse"), u(i1, "xlink:href", "#k"), t(i1, "id", "ap"), t(i1, "x1", "515"), t(i1, "x2", "536.3"), t(i1, "y1", "1125"), t(i1, "y2", "1146.3"), t(i1, "gradientUnits", "userSpaceOnUse"), u(a1, "xlink:href", "#i"), t(a1, "id", "ak"), t(a1, "x1", "514.8"), t(a1, "x2", "583.9"), t(a1, "y1", "711.8"), t(a1, "y2", "751.7"), t(a1, "gradientUnits", "userSpaceOnUse"), u(o1, "xlink:href", "#j"), t(o1, "id", "al"), t(o1, "x1", "549"), t(o1, "x2", "549"), t(o1, "y1", "713.4"), t(o1, "y2", "748.4"), t(o1, "gradientUnits", "userSpaceOnUse"), u(s1, "xlink:href", "#k"), t(s1, "id", "am"), t(s1, "x1", "515"), t(s1, "x2", "536.3"), t(s1, "y1", "1125"), t(s1, "y2", "1146.3"), t(s1, "gradientUnits", "userSpaceOnUse"), u(c1, "xlink:href", "#i"), t(c1, "id", "an"), t(c1, "x1", "514.8"), t(c1, "x2", "583.9"), t(c1, "y1", "711.8"), t(c1, "y2", "751.7"), t(c1, "gradientUnits", "userSpaceOnUse"), u(d1, "xlink:href", "#j"), t(d1, "id", "ao"), t(d1, "x1", "549"), t(d1, "x2", "549"), t(d1, "y1", "713.4"), t(d1, "y2", "748.4"), t(d1, "gradientUnits", "userSpaceOnUse"), u(f1, "xlink:href", "#i"), t(f1, "id", "aw"), t(f1, "x1", "514.8"), t(f1, "x2", "583.9"), t(f1, "y1", "711.8"), t(f1, "y2", "751.7"), t(f1, "gradientUnits", "userSpaceOnUse"), u(p1, "xlink:href", "#j"), t(p1, "id", "ax"), t(p1, "x1", "549"), t(p1, "x2", "549"), t(p1, "y1", "713.4"), t(p1, "y2", "748.4"), t(p1, "gradientUnits", "userSpaceOnUse"), u(h1, "xlink:href", "#n"), t(h1, "id", "aB"), t(h1, "x1", "520"), t(h1, "x2", "528.5"), t(h1, "y1", "1122"), t(h1, "y2", "1152"), t(h1, "gradientUnits", "userSpaceOnUse"), u(u1, "xlink:href", "#i"), t(u1, "id", "az"), t(u1, "x1", "514.8"), t(u1, "x2", "624"), t(u1, "y1", "711.8"), t(u1, "y2", "743.4"), t(u1, "gradientUnits", "userSpaceOnUse"), u(g1, "xlink:href", "#j"), t(g1, "id", "aA"), t(g1, "x1", "549"), t(g1, "x2", "549"), t(g1, "y1", "713.4"), t(g1, "y2", "748.4"), t(g1, "gradientUnits", "userSpaceOnUse"), u(v1, "xlink:href", "#i"), t(v1, "id", "aC"), t(v1, "x1", "514.8"), t(v1, "x2", "624"), t(v1, "y1", "711.8"), t(v1, "y2", "743.4"), t(v1, "gradientUnits", "userSpaceOnUse"), u(m1, "xlink:href", "#n"), t(m1, "id", "aE"), t(m1, "x1", "520"), t(m1, "x2", "528.5"), t(m1, "y1", "1122"), t(m1, "y2", "1152"), t(m1, "gradientUnits", "userSpaceOnUse"), u(y1, "xlink:href", "#j"), t(y1, "id", "aD"), t(y1, "x1", "549"), t(y1, "x2", "549"), t(y1, "y1", "713.4"), t(y1, "y2", "748.4"), t(y1, "gradientUnits", "userSpaceOnUse"), u(x1, "xlink:href", "#i"), t(x1, "id", "aI"), t(x1, "x1", "514.8"), t(x1, "x2", "624"), t(x1, "y1", "711.8"), t(x1, "y2", "743.4"), t(x1, "gradientUnits", "userSpaceOnUse"), u(b1, "xlink:href", "#n"), t(b1, "id", "aK"), t(b1, "x1", "520"), t(b1, "x2", "528.5"), t(b1, "y1", "1122"), t(b1, "y2", "1152"), t(b1, "gradientUnits", "userSpaceOnUse"), u(w1, "xlink:href", "#i"), t(w1, "id", "aF"), t(w1, "x1", "514.8"), t(w1, "x2", "624"), t(w1, "y1", "711.8"), t(w1, "y2", "743.4"), t(w1, "gradientUnits", "userSpaceOnUse"), u(k1, "xlink:href", "#j"), t(k1, "id", "aG"), t(k1, "x1", "549"), t(k1, "x2", "549"), t(k1, "y1", "713.4"), t(k1, "y2", "748.4"), t(k1, "gradientUnits", "userSpaceOnUse"), u(q1, "xlink:href", "#n"), t(q1, "id", "aH"), t(q1, "x1", "520"), t(q1, "x2", "528.5"), t(q1, "y1", "1122"), t(q1, "y2", "1152"), t(q1, "gradientUnits", "userSpaceOnUse"), u(_1, "xlink:href", "#j"), t(_1, "id", "aJ"), t(_1, "x1", "549"), t(_1, "x2", "549"), t(_1, "y1", "713.4"), t(_1, "y2", "748.4"), t(_1, "gradientUnits", "userSpaceOnUse"), u(G1, "xlink:href", "#c"), t(G1, "id", "D"), t(G1, "x1", "575.8"), t(G1, "x2", "543.8"), t(G1, "y1", "691.7"), t(G1, "y2", "572.4"), t(G1, "gradientUnits", "userSpaceOnUse"), u(U1, "xlink:href", "#d"), t(U1, "id", "E"), t(U1, "x1", "562"), t(U1, "x2", "537.9"), t(U1, "y1", "686.2"), t(U1, "y2", "596.4"), t(U1, "gradientUnits", "userSpaceOnUse"), u(te, "xlink:href", "#o"), t(te, "id", "aL"), t(te, "x1", "504"), t(te, "x2", "504"), t(te, "y1", "978"), t(te, "y2", "876.8"), t(te, "gradientTransform", "translate(0 -285.6)"), t(te, "gradientUnits", "userSpaceOnUse"), u(ee, "xlink:href", "#e"), t(ee, "id", "aM"), t(ee, "x1", "91.3"), t(ee, "x2", "71.6"), t(ee, "y1", "978.6"), t(ee, "y2", "958.9"), t(ee, "gradientTransform", "translate(0 -285.6)"), t(ee, "gradientUnits", "userSpaceOnUse"), u(re, "xlink:href", "#g"), t(re, "id", "aN"), t(re, "x1", "544"), t(re, "x2", "575.4"), t(re, "y1", "980"), t(re, "y2", "948.6"), t(re, "gradientTransform", "translate(0 -285.6)"), t(re, "gradientUnits", "userSpaceOnUse"), u(z1, "xlink:href", "#p"), t(z1, "id", "aO"), t(z1, "x1", "327.1"), t(z1, "x2", "327.1"), t(z1, "y1", "580.4"), t(z1, "y2", "694.4"), t(z1, "gradientUnits", "userSpaceOnUse"), u(S1, "xlink:href", "#q"), t(S1, "id", "aP"), t(S1, "x1", "330.1"), t(S1, "x2", "330.1"), t(S1, "y1", "582.4"), t(S1, "y2", "694.4"), t(S1, "gradientUnits", "userSpaceOnUse"), u($1, "xlink:href", "#r"), t($1, "id", "aQ"), t($1, "x1", "264.5"), t($1, "x2", "350.3"), t($1, "y1", "600.6"), t($1, "y2", "686.4"), t($1, "gradientUnits", "userSpaceOnUse"), u(M1, "xlink:href", "#s"), t(M1, "id", "aS"), t(M1, "x1", "274"), t(M1, "x2", "367.4"), t(M1, "y1", "632.4"), t(M1, "y2", "644.4"), t(M1, "gradientUnits", "userSpaceOnUse"), u(O1, "xlink:href", "#t"), t(O1, "id", "aT"), t(O1, "x1", "311.9"), t(O1, "x2", "313.6"), t(O1, "y1", "632.4"), t(O1, "y2", "644.4"), t(O1, "gradientUnits", "userSpaceOnUse"), u(C1, "xlink:href", "#t"), t(C1, "id", "aV"), t(C1, "x1", "251"), t(C1, "x2", "262.3"), t(C1, "y1", "645.1"), t(C1, "y2", "638.6"), t(C1, "gradientUnits", "userSpaceOnUse"), u(E1, "xlink:href", "#t"), t(E1, "id", "aU"), t(E1, "x1", "-329.7"), t(E1, "x2", "-320.5"), t(E1, "y1", "-677.4"), t(E1, "y2", "-667.2"), t(E1, "gradientUnits", "userSpaceOnUse"), u(j1, "xlink:href", "#t"), t(j1, "id", "aW"), t(j1, "x1", "251.4"), t(j1, "x2", "261.3"), t(j1, "y1", "633.6"), t(j1, "y2", "639.3"), t(j1, "gradientUnits", "userSpaceOnUse"), u(H1, "xlink:href", "#t"), t(H1, "id", "aR"), t(H1, "x1", "325"), t(H1, "x2", "325"), t(H1, "y1", "612.4"), t(H1, "y2", "606.9"), t(H1, "gradientUnits", "userSpaceOnUse"), u(D1, "xlink:href", "#u"), t(D1, "id", "aX"), t(D1, "x1", "328.8"), t(D1, "x2", "328.8"), t(D1, "y1", "1099"), t(D1, "y2", "1108"), t(D1, "gradientUnits", "userSpaceOnUse"), u(R1, "xlink:href", "#v"), t(R1, "id", "aY"), t(R1, "x1", "559.3"), t(R1, "x2", "583.9"), t(R1, "y1", "709.1"), t(R1, "y2", "751.7"), t(R1, "gradientUnits", "userSpaceOnUse"), u(B1, "xlink:href", "#w"), t(B1, "id", "aZ"), t(B1, "x1", "549"), t(B1, "x2", "549"), t(B1, "y1", "713.4"), t(B1, "y2", "748.4"), t(B1, "gradientUnits", "userSpaceOnUse"), u(Q1, "xlink:href", "#v"), t(Q1, "id", "ba"), t(Q1, "x1", "559.3"), t(Q1, "x2", "583.9"), t(Q1, "y1", "709.1"), t(Q1, "y2", "751.7"), t(Q1, "gradientUnits", "userSpaceOnUse"), u(P1, "xlink:href", "#w"), t(P1, "id", "bb"), t(P1, "x1", "549"), t(P1, "x2", "549"), t(P1, "y1", "713.4"), t(P1, "y2", "748.4"), t(P1, "gradientUnits", "userSpaceOnUse"), u(L1, "xlink:href", "#v"), t(L1, "id", "bc"), t(L1, "x1", "559.3"), t(L1, "x2", "583.9"), t(L1, "y1", "709.1"), t(L1, "y2", "751.7"), t(L1, "gradientUnits", "userSpaceOnUse"), u(F1, "xlink:href", "#w"), t(F1, "id", "bd"), t(F1, "x1", "549"), t(F1, "x2", "549"), t(F1, "y1", "713.4"), t(F1, "y2", "748.4"), t(F1, "gradientUnits", "userSpaceOnUse"), u(K1, "xlink:href", "#v"), t(K1, "id", "be"), t(K1, "x1", "559.3"), t(K1, "x2", "583.9"), t(K1, "y1", "709.1"), t(K1, "y2", "751.7"), t(K1, "gradientUnits", "userSpaceOnUse"), u(A1, "xlink:href", "#w"), t(A1, "id", "bf"), t(A1, "x1", "549"), t(A1, "x2", "549"), t(A1, "y1", "713.4"), t(A1, "y2", "748.4"), t(A1, "gradientUnits", "userSpaceOnUse"), u(Y1, "xlink:href", "#v"), t(Y1, "id", "bg"), t(Y1, "x1", "559.3"), t(Y1, "x2", "583.9"), t(Y1, "y1", "709.1"), t(Y1, "y2", "751.7"), t(Y1, "gradientUnits", "userSpaceOnUse"), u(V1, "xlink:href", "#w"), t(V1, "id", "bh"), t(V1, "x1", "549"), t(V1, "x2", "549"), t(V1, "y1", "713.4"), t(V1, "y2", "748.4"), t(V1, "gradientUnits", "userSpaceOnUse"), u(I1, "xlink:href", "#v"), t(I1, "id", "bi"), t(I1, "x1", "559.3"), t(I1, "x2", "583.9"), t(I1, "y1", "709.1"), t(I1, "y2", "751.7"), t(I1, "gradientUnits", "userSpaceOnUse"), u(T1, "xlink:href", "#w"), t(T1, "id", "bj"), t(T1, "x1", "549"), t(T1, "x2", "549"), t(T1, "y1", "713.4"), t(T1, "y2", "748.4"), t(T1, "gradientUnits", "userSpaceOnUse"), u(N1, "xlink:href", "#v"), t(N1, "id", "bk"), t(N1, "x1", "559.3"), t(N1, "x2", "583.9"), t(N1, "y1", "709.1"), t(N1, "y2", "751.7"), t(N1, "gradientUnits", "userSpaceOnUse"), u(Z1, "xlink:href", "#w"), t(Z1, "id", "bl"), t(Z1, "x1", "549"), t(Z1, "x2", "549"), t(Z1, "y1", "713.4"), t(Z1, "y2", "748.4"), t(Z1, "gradientUnits", "userSpaceOnUse"), u(X1, "xlink:href", "#v"), t(X1, "id", "bm"), t(X1, "x1", "559.3"), t(X1, "x2", "583.9"), t(X1, "y1", "709.1"), t(X1, "y2", "751.7"), t(X1, "gradientUnits", "userSpaceOnUse"), u(W1, "xlink:href", "#w"), t(W1, "id", "bn"), t(W1, "x1", "549"), t(W1, "x2", "549"), t(W1, "y1", "713.4"), t(W1, "y2", "748.4"), t(W1, "gradientUnits", "userSpaceOnUse"), u(J1, "xlink:href", "#v"), t(J1, "id", "bo"), t(J1, "x1", "559.3"), t(J1, "x2", "583.9"), t(J1, "y1", "709.1"), t(J1, "y2", "751.7"), t(J1, "gradientUnits", "userSpaceOnUse"), u(tr, "xlink:href", "#w"), t(tr, "id", "bp"), t(tr, "x1", "549"), t(tr, "x2", "549"), t(tr, "y1", "713.4"), t(tr, "y2", "748.4"), t(tr, "gradientUnits", "userSpaceOnUse"), u(er, "xlink:href", "#v"), t(er, "id", "bq"), t(er, "x1", "559.3"), t(er, "x2", "583.9"), t(er, "y1", "709.1"), t(er, "y2", "751.7"), t(er, "gradientUnits", "userSpaceOnUse"), u(rr, "xlink:href", "#w"), t(rr, "id", "br"), t(rr, "x1", "549"), t(rr, "x2", "549"), t(rr, "y1", "713.4"), t(rr, "y2", "748.4"), t(rr, "gradientUnits", "userSpaceOnUse"), u(nr, "xlink:href", "#v"), t(nr, "id", "bs"), t(nr, "x1", "559.3"), t(nr, "x2", "583.9"), t(nr, "y1", "709.1"), t(nr, "y2", "751.7"), t(nr, "gradientUnits", "userSpaceOnUse"), u(lr, "xlink:href", "#w"), t(lr, "id", "bt"), t(lr, "x1", "549"), t(lr, "x2", "549"), t(lr, "y1", "713.4"), t(lr, "y2", "748.4"), t(lr, "gradientUnits", "userSpaceOnUse"), u(ir, "xlink:href", "#v"), t(ir, "id", "bu"), t(ir, "x1", "559.3"), t(ir, "x2", "583.9"), t(ir, "y1", "709.1"), t(ir, "y2", "751.7"), t(ir, "gradientUnits", "userSpaceOnUse"), u(ar, "xlink:href", "#w"), t(ar, "id", "bv"), t(ar, "x1", "549"), t(ar, "x2", "549"), t(ar, "y1", "713.4"), t(ar, "y2", "748.4"), t(ar, "gradientUnits", "userSpaceOnUse"), t(In, "y", "0"), t(In, "x", "0"), t(In, "height", "18"), t(In, "width", "20"), t(In, "fill", "#272727"), t(m0, "fill", "#222"), t(m0, "fill-rule", "evenodd"), t(m0, "d", "M9.99 0 5 3v6l-5 3v6l10-6V0h-.01zm10 0L15 3v6l5-3V0h-.01z"), t(y0, "fill", "#1c1c1c"), t(y0, "fill-rule", "evenodd"), t(y0, "d", "M0 0v6l5 3V3L.01 0H0zm10 0v12l10 6v-6l-5-3V3l-4.99-3H10z"), t(Qt, "id", "pattern1"), t(Qt, "x", "0"), t(Qt, "y", "0"), t(Qt, "width", "20"), t(Qt, "height", "18"), t(Qt, "patternUnits", "userSpaceOnUse"), t(Qt, "class", "svelte-py5gbp"), u(or, "xlink:href", "#x"), t(or, "id", "A"), t(or, "x1", "295"), t(or, "x2", "295"), t(or, "y1", "1004.4"), t(or, "y2", "-357.6"), t(or, "gradientUnits", "userSpaceOnUse"), t(gl, "fill", "url(#y)"), t(gl, "fill-rule", "evenodd"), t(gl, "stroke", "#696a69"), t(gl, "d", "M119 1046.4c-33-.4-94-23-105-42-1-7-7-94-7-162v-1075c0-13 3.5-103 5-130 8-13.9 56-33.8 68-37 12-3.3 25-6 36-6h416c11 0 24 2.7 36 6 12 3.2 60 23.1 68 37 1.5 27 5 117 5 130v1075c0 68-6 155-7 162-11 19-72 41.6-105 42H365z"), t(x0, "fill", "url(#z)"), t(x0, "fill-rule", "evenodd"), t(x0, "d", "M120 1022.4c-60 0-102-25-102-135v-1135c0-75 17-133 117-133h378c100 0 117 58 117 133v1135c0 110-42 135-102 135H365z"), t(vl, "fill", "#269dc5"), t(vl, "fill-rule", "evenodd"), t(vl, "stroke", "#6ac1df"), t(vl, "d", "M120 1015.4c-55 0-96-23-96-128v-1135c0-75 16-128 111-128h378c95 0 111 53 111 128v1135c0 105-41 128-96 128H365z"), t(Tn, "id", "pattern-bg"), t(Tn, "fill", "url(#pattern1)"), t(Tn, "fill-rule", "evenodd"), t(Tn, "stroke", "#000"), t(Tn, "d", "M120 1007.4c-45.4 0-90-15-90-120v-1127c0-75 15-128 105-128h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H365z"), t(Pt, "width", "516"), t(Pt, "height", "894"), t(Pt, "x", "66"), t(Pt, "y", "-321.6"), t(Pt, "fill", "#0d0d0d"), t(Pt, "stroke", "url(#B)"), t(Pt, "stroke-linecap", "round"), t(Pt, "stroke-linejoin", "round"), t(Pt, "rx", "22"), t(Pt, "ry", "22"), t(Lt, "width", "493"), t(Lt, "height", "871"), t(Lt, "x", "77"), t(Lt, "y", "-310.6"), t(Lt, "fill", "#0d0d0d"), t(Lt, "stroke", "url(#C)"), t(Lt, "stroke-linecap", "round"), t(Lt, "stroke-linejoin", "round"), t(Lt, "rx", "10"), t(Lt, "ry", "10"), t(Ft, "width", "516"), t(Ft, "height", "120"), t(Ft, "x", "66"), t(Ft, "y", "578.4"), t(Ft, "fill", "#0d0d0d"), t(Ft, "stroke", "url(#D)"), t(Ft, "stroke-linecap", "round"), t(Ft, "stroke-linejoin", "round"), t(Ft, "rx", "22"), t(Ft, "ry", "22"), t(Kt, "width", "493"), t(Kt, "height", "96"), t(Kt, "x", "77"), t(Kt, "y", "590.4"), t(Kt, "fill", "#0d0d0d"), t(Kt, "stroke", "url(#E)"), t(Kt, "stroke-linecap", "round"), t(Kt, "stroke-linejoin", "round"), t(Kt, "rx", "10"), t(Kt, "ry", "10"), t(ne, "width", "116"), t(ne, "height", "36"), t(ne, "x", "86"), t(ne, "y", "644.4"), t(ne, "fill", "#00ec3a"), t(ne, "fill-opacity", ".2"), t(ne, "rx", "7"), t(ne, "ry", "7"), t(le, "width", "116"), t(le, "height", "36"), t(le, "x", "446"), t(le, "y", "596.4"), t(le, "fill", "#00ec3a"), t(le, "fill-opacity", ".2"), t(le, "rx", "7"), t(le, "ry", "7"), t(ie, "width", "116"), t(ie, "height", "36"), t(ie, "x", "446"), t(ie, "y", "644.4"), t(ie, "fill", "#00ec3a"), t(ie, "fill-opacity", ".2"), t(ie, "rx", "7"), t(ie, "ry", "7"), t(at, "width", "76"), t(at, "height", "44"), t(at, "x", "511"), t(at, "y", "709.4"), t(at, "fill", "url(#F)"), t(at, "stroke", "var(--btn-border-stroke)"), t(at, "stroke-linecap", "round"), t(at, "stroke-linejoin", "round"), t(at, "stroke-width", "2"), t(at, "rx", "8"), t(at, "ry", "8"), t(sr, "width", "68"), t(sr, "height", "35"), t(sr, "x", "515"), t(sr, "y", "713.4"), t(sr, "fill", "url(#G)"), t(sr, "rx", "4"), t(sr, "ry", "4"), t(b0, "fill", "url(#H)"), t(b0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(b0, "transform", "translate(0 -411.6)"), t(rn, "transform", "translate(0 54)"), t(rn, "class", "cp-button"), t(rn, "data-cp", "KEYCODE_TIMES"), t(z2, "fill", "#fff"), t(z2, "d", "M84-303.6h480v792H84z"), t(U2, "id", "uid_3418"), t(rt, "transform", "translate(0 411.6)"), t($2, "class", "cp-wrapper svelte-py5gbp"), t(nn, "x", "0"), t(nn, "y", "0"), t(nn, "width", "480"), t(nn, "height", "792"), t(nn, "overflow", "hidden"), t(S2, "transform", "translate(85 109)"), t(w0, "fill", "url(#I)"), t(w0, "d", "M387.7 90a22 22 0 0 0-19 11H560a10 10 0 0 1 10 10v851a10 10 0 0 1-10 10H365.7v12H560a22 22 0 0 0 22-22V112a22 22 0 0 0-22-22H387.7z"), t(w0, "transform", "translate(0 -411.6)"), t(k0, "fill", "url(#J)"), t(k0, "d", "M66 904v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(k0, "transform", "translate(0 -411.6)"), t(q0, "fill", "url(#K)"), t(q0, "d", "M570 900v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62h-12z"), t(q0, "transform", "translate(0 -411.6)"), t(ml, "fill", "url(#L)"), t(ml, "fill-rule", "evenodd"), t(ml, "d", "M136.9 40C42.9 40 27 93 27 168v1135c0 44.7 7.4 74.6 20 94.1 17.3 23 43 29.9 73 29.9h408c30 0 55.7-6.8 73-29.9 12.6-19.5 20-49.4 20-94.1V168c0-75-15.8-128-109.9-128H137zm-1.9 4h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H120c-45.4 0-90-15-90-120V172C30 97 45 44 135 44z"), t(ml, "transform", "translate(0 -411.6)"), t(yl, "fill", "#1f7e9e"), t(yl, "fill-opacity", ".3"), t(yl, "fill-rule", "evenodd"), t(yl, "d", "M-638 1019.4c-54.4 0-95-23-95-128v-1135c0-75 15.8-128 109.9-128H-249c94 0 109.9 53 109.9 128v1135c0 105-40.6 128-95 128h-161.4z"), t(ot, "width", "76"), t(ot, "height", "44"), t(ot, "x", "511"), t(ot, "y", "709.4"), t(ot, "fill", "url(#M)"), t(ot, "stroke", "var(--btn-border-stroke)"), t(ot, "stroke-linecap", "round"), t(ot, "stroke-linejoin", "round"), t(ot, "stroke-width", "2"), t(ot, "rx", "8"), t(ot, "ry", "8"), t(cr, "width", "68"), t(cr, "height", "35"), t(cr, "x", "515"), t(cr, "y", "713.4"), t(cr, "fill", "url(#N)"), t(cr, "rx", "4"), t(cr, "ry", "4"), t(_0, "fill", "url(#O)"), t(_0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(_0, "transform", "translate(0 -411.6)"), t(Nn, "class", "cp-button"), t(Nn, "data-cp", "KEYCODE_DIVIDE"), t(st, "width", "76"), t(st, "height", "44"), t(st, "x", "511"), t(st, "y", "709.4"), t(st, "fill", "url(#P)"), t(st, "stroke", "var(--btn-border-stroke)"), t(st, "stroke-linecap", "round"), t(st, "stroke-linejoin", "round"), t(st, "stroke-width", "2"), t(st, "rx", "8"), t(st, "ry", "8"), t(dr, "width", "68"), t(dr, "height", "35"), t(dr, "x", "515"), t(dr, "y", "713.4"), t(dr, "fill", "url(#Q)"), t(dr, "rx", "4"), t(dr, "ry", "4"), t(G0, "fill", "url(#R)"), t(G0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(G0, "transform", "translate(0 -411.6)"), t(ln, "transform", "translate(0 108)"), t(ln, "class", "cp-button"), t(ln, "data-cp", "KEYCODE_MINUS"), t(ct, "width", "76"), t(ct, "height", "44"), t(ct, "x", "511"), t(ct, "y", "709.4"), t(ct, "fill", "url(#S)"), t(ct, "stroke", "var(--btn-border-stroke)"), t(ct, "stroke-linecap", "round"), t(ct, "stroke-linejoin", "round"), t(ct, "stroke-width", "2"), t(ct, "rx", "8"), t(ct, "ry", "8"), t(fr, "width", "68"), t(fr, "height", "35"), t(fr, "x", "515"), t(fr, "y", "713.4"), t(fr, "fill", "url(#T)"), t(fr, "rx", "4"), t(fr, "ry", "4"), t(U0, "fill", "url(#U)"), t(U0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(U0, "transform", "translate(0 -411.6)"), t(an, "transform", "translate(0 162)"), t(an, "class", "cp-button"), t(an, "data-cp", "KEYCODE_PLUS"), t(dt, "width", "76"), t(dt, "height", "44"), t(dt, "x", "511"), t(dt, "y", "709.4"), t(dt, "fill", "url(#V)"), t(dt, "stroke", "var(--btn-border-stroke)"), t(dt, "stroke-linecap", "round"), t(dt, "stroke-linejoin", "round"), t(dt, "stroke-width", "2"), t(dt, "rx", "8"), t(dt, "ry", "8"), t(pr, "width", "68"), t(pr, "height", "35"), t(pr, "x", "515"), t(pr, "y", "713.4"), t(pr, "fill", "url(#W)"), t(pr, "rx", "4"), t(pr, "ry", "4"), t(z0, "fill", "url(#X)"), t(z0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(z0, "transform", "translate(0 -411.6)"), t(on, "transform", "translate(0 216)"), t(on, "class", "cp-button"), t(on, "data-cp", "KEYCODE_EXE"), t(ft, "width", "76"), t(ft, "height", "44"), t(ft, "x", "511"), t(ft, "y", "709.4"), t(ft, "fill", "url(#Y)"), t(ft, "stroke", "var(--btn-border-stroke)"), t(ft, "stroke-linecap", "round"), t(ft, "stroke-linejoin", "round"), t(ft, "stroke-width", "2"), t(ft, "rx", "8"), t(ft, "ry", "8"), t(hr, "width", "68"), t(hr, "height", "35"), t(hr, "x", "515"), t(hr, "y", "713.4"), t(hr, "fill", "url(#Z)"), t(hr, "rx", "4"), t(hr, "ry", "4"), t(S0, "fill", "url(#aa)"), t(S0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(S0, "transform", "translate(0 -411.6)"), t(sn, "transform", "translate(-90)"), t(sn, "class", "cp-button"), t(sn, "data-cp", "KEYCODE_POWER"), t(pt, "width", "76"), t(pt, "height", "44"), t(pt, "x", "511"), t(pt, "y", "709.4"), t(pt, "fill", "url(#ab)"), t(pt, "stroke", "var(--btn-border-stroke)"), t(pt, "stroke-linecap", "round"), t(pt, "stroke-linejoin", "round"), t(pt, "stroke-width", "2"), t(pt, "rx", "8"), t(pt, "ry", "8"), t(ur, "width", "68"), t(ur, "height", "35"), t(ur, "x", "515"), t(ur, "y", "713.4"), t(ur, "fill", "url(#ac)"), t(ur, "rx", "4"), t(ur, "ry", "4"), t($0, "fill", "url(#ad)"), t($0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t($0, "transform", "translate(0 -411.6)"), t(cn, "transform", "translate(-180)"), t(cn, "class", "cp-button"), t(cn, "data-cp", "KEYCODE_Z"), t(ht, "width", "76"), t(ht, "height", "44"), t(ht, "x", "511"), t(ht, "y", "709.4"), t(ht, "fill", "url(#ae)"), t(ht, "stroke", "var(--btn-border-stroke)"), t(ht, "stroke-linecap", "round"), t(ht, "stroke-linejoin", "round"), t(ht, "stroke-width", "2"), t(ht, "rx", "8"), t(ht, "ry", "8"), t(gr, "width", "68"), t(gr, "height", "35"), t(gr, "x", "515"), t(gr, "y", "713.4"), t(gr, "fill", "url(#af)"), t(gr, "rx", "4"), t(gr, "ry", "4"), t(M0, "fill", "url(#ag)"), t(M0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(M0, "transform", "translate(0 -411.6)"), t(dn, "transform", "translate(-270)"), t(dn, "class", "cp-button"), t(dn, "data-cp", "KEYCODE_Y"), t(ut, "width", "76"), t(ut, "height", "44"), t(ut, "x", "511"), t(ut, "y", "709.4"), t(ut, "fill", "url(#ah)"), t(ut, "stroke", "var(--btn-border-stroke)"), t(ut, "stroke-linecap", "round"), t(ut, "stroke-linejoin", "round"), t(ut, "stroke-width", "2"), t(ut, "rx", "8"), t(ut, "ry", "8"), t(vr, "width", "68"), t(vr, "height", "35"), t(vr, "x", "515"), t(vr, "y", "713.4"), t(vr, "fill", "url(#ai)"), t(vr, "rx", "4"), t(vr, "ry", "4"), t(O0, "fill", "url(#aj)"), t(O0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(O0, "transform", "translate(0 -411.6)"), t(fn, "transform", "translate(-360)"), t(fn, "class", "cp-button"), t(fn, "data-cp", "KEYCODE_X"), t(gt, "width", "76"), t(gt, "height", "44"), t(gt, "x", "511"), t(gt, "y", "709.4"), t(gt, "fill", "url(#ak)"), t(gt, "stroke", "var(--btn-border-stroke)"), t(gt, "stroke-linecap", "round"), t(gt, "stroke-linejoin", "round"), t(gt, "stroke-width", "2"), t(gt, "rx", "8"), t(gt, "ry", "8"), t(mr, "width", "68"), t(mr, "height", "35"), t(mr, "x", "515"), t(mr, "y", "713.4"), t(mr, "fill", "url(#al)"), t(mr, "rx", "4"), t(mr, "ry", "4"), t(C0, "fill", "url(#am)"), t(C0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(C0, "transform", "translate(0 -411.6)"), t(pn, "transform", "translate(-450 54)"), t(pn, "class", "cp-button"), t(pn, "data-cp", "KEYCODE_OPEN_PARENTHESIS"), t(vt, "width", "76"), t(vt, "height", "44"), t(vt, "x", "511"), t(vt, "y", "709.4"), t(vt, "fill", "url(#an)"), t(vt, "stroke", "var(--btn-border-stroke)"), t(vt, "stroke-linecap", "round"), t(vt, "stroke-linejoin", "round"), t(vt, "stroke-width", "2"), t(vt, "rx", "8"), t(vt, "ry", "8"), t(yr, "width", "68"), t(yr, "height", "35"), t(yr, "x", "515"), t(yr, "y", "713.4"), t(yr, "fill", "url(#ao)"), t(yr, "rx", "4"), t(yr, "ry", "4"), t(E0, "fill", "url(#ap)"), t(E0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(E0, "transform", "translate(0 -411.6)"), t(hn, "transform", "translate(-450)"), t(hn, "class", "cp-button"), t(hn, "data-cp", "KEYCODE_EQUALS"), t(mt, "width", "76"), t(mt, "height", "44"), t(mt, "x", "511"), t(mt, "y", "709.4"), t(mt, "fill", "url(#aq)"), t(mt, "stroke", "var(--btn-border-stroke)"), t(mt, "stroke-linecap", "round"), t(mt, "stroke-linejoin", "round"), t(mt, "stroke-width", "2"), t(mt, "rx", "8"), t(mt, "ry", "8"), t(xr, "width", "68"), t(xr, "height", "35"), t(xr, "x", "515"), t(xr, "y", "713.4"), t(xr, "fill", "url(#ar)"), t(xr, "rx", "4"), t(xr, "ry", "4"), t(j0, "fill", "url(#as)"), t(j0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(j0, "transform", "translate(0 -411.6)"), t(un, "transform", "translate(-450 108)"), t(un, "class", "cp-button"), t(un, "data-cp", "KEYCODE_CLOSE_PARENTHESIS"), t(yt, "width", "76"), t(yt, "height", "44"), t(yt, "x", "511"), t(yt, "y", "709.4"), t(yt, "fill", "url(#at)"), t(yt, "stroke", "var(--btn-border-stroke)"), t(yt, "stroke-linecap", "round"), t(yt, "stroke-linejoin", "round"), t(yt, "stroke-width", "2"), t(yt, "rx", "8"), t(yt, "ry", "8"), t(br, "width", "68"), t(br, "height", "35"), t(br, "x", "515"), t(br, "y", "713.4"), t(br, "fill", "url(#au)"), t(br, "rx", "4"), t(br, "ry", "4"), t(H0, "fill", "url(#av)"), t(H0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(H0, "transform", "translate(0 -411.6)"), t(gn, "transform", "translate(-450 162)"), t(gn, "class", "cp-button"), t(gn, "data-cp", "KEYCODE_COMMA"), t(xt, "width", "76"), t(xt, "height", "44"), t(xt, "x", "511"), t(xt, "y", "709.4"), t(xt, "fill", "url(#aw)"), t(xt, "stroke", "var(--btn-border-stroke)"), t(xt, "stroke-linecap", "round"), t(xt, "stroke-linejoin", "round"), t(xt, "stroke-width", "2"), t(xt, "rx", "8"), t(xt, "ry", "8"), t(wr, "width", "68"), t(wr, "height", "35"), t(wr, "x", "515"), t(wr, "y", "713.4"), t(wr, "fill", "url(#ax)"), t(wr, "rx", "4"), t(wr, "ry", "4"), t(D0, "fill", "url(#ay)"), t(D0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(D0, "transform", "translate(0 -411.6)"), t(vn, "transform", "translate(-450 216)"), t(vn, "class", "cp-button"), t(vn, "data-cp", "KEYCODE_NEGATIVE"), t(bt, "width", "116"), t(bt, "height", "36"), t(bt, "x", "511"), t(bt, "y", "709.4"), t(bt, "fill", "url(#az)"), t(bt, "stroke", "var(--btn-border-stroke)"), t(bt, "stroke-linecap", "round"), t(bt, "stroke-linejoin", "round"), t(bt, "stroke-width", "2"), t(bt, "rx", "8"), t(bt, "ry", "8"), t(kr, "width", "107"), t(kr, "height", "27"), t(kr, "x", "515"), t(kr, "y", "713.4"), t(kr, "fill", "url(#aA)"), t(kr, "rx", "4"), t(kr, "ry", "4"), t(R0, "fill", "url(#aB)"), t(R0, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(R0, "transform", "translate(0 -411.6)"), t(mn, "transform", "translate(-425 -113)"), t(mn, "class", "cp-button"), t(mn, "data-cp", "KEYCODE_KEYBOARD"), t(wt, "width", "116"), t(wt, "height", "36"), t(wt, "x", "511"), t(wt, "y", "709.4"), t(wt, "fill", "url(#aC)"), t(wt, "stroke", "var(--btn-border-stroke)"), t(wt, "stroke-linecap", "round"), t(wt, "stroke-linejoin", "round"), t(wt, "stroke-width", "2"), t(wt, "rx", "8"), t(wt, "ry", "8"), t(qr, "width", "107"), t(qr, "height", "27"), t(qr, "x", "515"), t(qr, "y", "713.4"), t(qr, "fill", "url(#aD)"), t(qr, "rx", "4"), t(qr, "ry", "4"), t(B0, "fill", "url(#aE)"), t(B0, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(B0, "transform", "translate(0 -411.6)"), t(yn, "transform", "translate(-425 -65)"), t(yn, "class", "cp-button"), t(yn, "data-cp", "KEYCODE_SHIFT"), t(kt, "width", "116"), t(kt, "height", "36"), t(kt, "x", "511"), t(kt, "y", "709.4"), t(kt, "fill", "url(#aF)"), t(kt, "stroke", "var(--btn-border-stroke)"), t(kt, "stroke-linecap", "round"), t(kt, "stroke-linejoin", "round"), t(kt, "stroke-width", "2"), t(kt, "rx", "8"), t(kt, "ry", "8"), t(_r, "width", "107"), t(_r, "height", "27"), t(_r, "x", "515"), t(_r, "y", "713.4"), t(_r, "fill", "url(#aG)"), t(_r, "rx", "4"), t(_r, "ry", "4"), t(Q0, "fill", "url(#aH)"), t(Q0, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Q0, "transform", "translate(0 -411.6)"), t(xn, "transform", "translate(-65 -113)"), t(xn, "class", "cp-button"), t(xn, "data-cp", "KEYCODE_BACKSPACE"), t(qt, "width", "116"), t(qt, "height", "36"), t(qt, "x", "511"), t(qt, "y", "709.4"), t(qt, "fill", "url(#aI)"), t(qt, "stroke", "var(--btn-border-stroke)"), t(qt, "stroke-linecap", "round"), t(qt, "stroke-linejoin", "round"), t(qt, "stroke-width", "2"), t(qt, "rx", "8"), t(qt, "ry", "8"), t(Gr, "width", "107"), t(Gr, "height", "27"), t(Gr, "x", "515"), t(Gr, "y", "713.4"), t(Gr, "fill", "url(#aJ)"), t(Gr, "rx", "4"), t(Gr, "ry", "4"), t(P0, "fill", "url(#aK)"), t(P0, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(P0, "transform", "translate(0 -411.6)"), t(bn, "transform", "translate(-65 -65)"), t(bn, "class", "cp-button"), t(bn, "data-cp", "KEYCODE_CLEAR"), t(M2, "fill", "url(#aL)"), t(M2, "d", "M560 589.4s10 4.4 10 10v77a10 10 0 0 1-10 10H365.7v12H560c13.2 0 22-9.3 22-28v-70c0-12.2-22-22-22-22z"), t(O2, "fill", "url(#aM)"), t(O2, "d", "M66 618.4v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(C2, "fill", "url(#aN)"), t(C2, "d", "M570 614.4v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62z"), t(Ur, "width", "204"), t(Ur, "height", "116"), t(Ur, "x", "221"), t(Ur, "y", "580.4"), t(Ur, "fill", "url(#aO)"), t(Ur, "rx", "25"), t(Ur, "ry", "58"), t(zr, "width", "200"), t(zr, "height", "112"), t(zr, "x", "223"), t(zr, "y", "582.4"), t(zr, "fill", "url(#aP)"), t(zr, "rx", "23"), t(zr, "ry", "55.9"), t(Sr, "width", "185"), t(Sr, "height", "98"), t(Sr, "x", "231"), t(Sr, "y", "589.4"), t(Sr, "fill", "url(#aQ)"), t(Sr, "rx", "16"), t(Sr, "ry", "47.5"), t($r, "class", "cp-button cp-button-arrow"), t($r, "data-cp", "KEYCODE_UP"), t($r, "fill", "#7f7f7f"), t($r, "stroke", "url(#aR)"), t($r, "stroke-linecap", "round"), t($r, "stroke-linejoin", "round"), t($r, "d", "M330.2 611.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(At, "width", "104"), t(At, "height", "12"), t(At, "x", "272"), t(At, "y", "632.4"), t(At, "fill", "url(#aS)"), t(At, "stroke", "url(#aT)"), t(At, "stroke-linecap", "round"), t(At, "stroke-linejoin", "round"), t(At, "rx", "2"), t(At, "ry", "2"), t(ae, "class", "cp-button cp-button-arrow"), t(ae, "data-cp", "KEYCODE_DOWN"), t(ae, "fill", "#7f7f7f"), t(ae, "stroke", "url(#aU)"), t(ae, "stroke-linecap", "round"), t(ae, "stroke-linejoin", "round"), t(ae, "d", "M-317.8-665.2c-.4.8-5.3.8-6.2.8-.9 0-5.8 0-6.2-.8-.5-.7 2-5 2.4-5.8.4-.8 3-5 3.8-5 .9 0 3.4 4.2 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(ae, "transform", "scale(-1)"), t(oe, "class", "cp-button cp-button-arrow"), t(oe, "data-cp", "KEYCODE_LEFT"), t(oe, "fill", "#7f7f7f"), t(oe, "stroke", "url(#aV)"), t(oe, "stroke-linecap", "round"), t(oe, "stroke-linejoin", "round"), t(oe, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(oe, "transform", "rotate(-90 255.8 641.5)"), t(se, "class", "cp-button cp-button-arrow"), t(se, "data-cp", "KEYCODE_RIGHT"), t(se, "fill", "#7f7f7f"), t(se, "stroke", "url(#aW)"), t(se, "stroke-linecap", "round"), t(se, "stroke-linejoin", "round"), t(se, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(se, "transform", "matrix(0 -1 -1 0 1033.7 897.4)"), t(L0, "fill", "url(#aX)"), t(L0, "d", "m245 1098.7-2.5 6.7c1.1.4 2.3.6 3.5.6h154c2 0 3.8-.6 5.6-1.7l-4-5.6c-.5.2-1 .3-1.6.3H247l-2-.3z"), t(L0, "transform", "translate(0 -411.6)"), t(_t, "width", "102"), t(_t, "height", "44"), t(_t, "x", "511"), t(_t, "y", "709.4"), t(_t, "fill", "url(#aY)"), t(_t, "stroke", "var(--btn-border-stroke)"), t(_t, "stroke-linecap", "round"), t(_t, "stroke-linejoin", "round"), t(_t, "stroke-width", "2"), t(_t, "rx", "8"), t(_t, "ry", "8"), t(Mr, "width", "94"), t(Mr, "height", "35"), t(Mr, "x", "515"), t(Mr, "y", "713.4"), t(Mr, "fill", "url(#aZ)"), t(Mr, "rx", "4"), t(Mr, "ry", "4"), t(Zn, "transform", "translate(-117 216)"), t(Zn, "class", "cp-button"), t(Zn, "data-cp", "KEYCODE_EXP"), t(Gt, "width", "102"), t(Gt, "height", "44"), t(Gt, "x", "511"), t(Gt, "y", "709.4"), t(Gt, "fill", "url(#ba)"), t(Gt, "stroke", "var(--btn-border-stroke)"), t(Gt, "stroke-linecap", "round"), t(Gt, "stroke-linejoin", "round"), t(Gt, "stroke-width", "2"), t(Gt, "rx", "8"), t(Gt, "ry", "8"), t(Or, "width", "94"), t(Or, "height", "35"), t(Or, "x", "515"), t(Or, "y", "713.4"), t(Or, "fill", "url(#bb)"), t(Or, "rx", "4"), t(Or, "ry", "4"), t(Xn, "transform", "translate(-117 162)"), t(Xn, "class", "cp-button"), t(Xn, "data-cp", "KEYCODE_3"), t(Ut, "width", "102"), t(Ut, "height", "44"), t(Ut, "x", "511"), t(Ut, "y", "709.4"), t(Ut, "fill", "url(#bc)"), t(Ut, "stroke", "var(--btn-border-stroke)"), t(Ut, "stroke-linecap", "round"), t(Ut, "stroke-linejoin", "round"), t(Ut, "stroke-width", "2"), t(Ut, "rx", "8"), t(Ut, "ry", "8"), t(Cr, "width", "94"), t(Cr, "height", "35"), t(Cr, "x", "515"), t(Cr, "y", "713.4"), t(Cr, "fill", "url(#bd)"), t(Cr, "rx", "4"), t(Cr, "ry", "4"), t(Wn, "transform", "translate(-117 108)"), t(Wn, "class", "cp-button"), t(Wn, "data-cp", "KEYCODE_6"), t(zt, "width", "102"), t(zt, "height", "44"), t(zt, "x", "511"), t(zt, "y", "709.4"), t(zt, "fill", "url(#be)"), t(zt, "stroke", "var(--btn-border-stroke)"), t(zt, "stroke-linecap", "round"), t(zt, "stroke-linejoin", "round"), t(zt, "stroke-width", "2"), t(zt, "rx", "8"), t(zt, "ry", "8"), t(Er, "width", "94"), t(Er, "height", "35"), t(Er, "x", "515"), t(Er, "y", "713.4"), t(Er, "fill", "url(#bf)"), t(Er, "rx", "4"), t(Er, "ry", "4"), t(Jn, "transform", "translate(-117 54)"), t(Jn, "class", "cp-button"), t(Jn, "data-cp", "KEYCODE_9"), t(St, "width", "102"), t(St, "height", "44"), t(St, "x", "511"), t(St, "y", "709.4"), t(St, "fill", "url(#bg)"), t(St, "stroke", "var(--btn-border-stroke)"), t(St, "stroke-linecap", "round"), t(St, "stroke-linejoin", "round"), t(St, "stroke-width", "2"), t(St, "rx", "8"), t(St, "ry", "8"), t(jr, "width", "94"), t(jr, "height", "35"), t(jr, "x", "515"), t(jr, "y", "713.4"), t(jr, "fill", "url(#bh)"), t(jr, "rx", "4"), t(jr, "ry", "4"), t(tl, "transform", "translate(-238 216)"), t(tl, "class", "cp-button"), t(tl, "data-cp", "KEYCODE_DOT"), t($t, "width", "102"), t($t, "height", "44"), t($t, "x", "511"), t($t, "y", "709.4"), t($t, "fill", "url(#bi)"), t($t, "stroke", "var(--btn-border-stroke)"), t($t, "stroke-linecap", "round"), t($t, "stroke-linejoin", "round"), t($t, "stroke-width", "2"), t($t, "rx", "8"), t($t, "ry", "8"), t(Hr, "width", "94"), t(Hr, "height", "35"), t(Hr, "x", "515"), t(Hr, "y", "713.4"), t(Hr, "fill", "url(#bj)"), t(Hr, "rx", "4"), t(Hr, "ry", "4"), t(el, "transform", "translate(-238 162)"), t(el, "class", "cp-button"), t(el, "data-cp", "KEYCODE_2"), t(Mt, "width", "102"), t(Mt, "height", "44"), t(Mt, "x", "511"), t(Mt, "y", "709.4"), t(Mt, "fill", "url(#bk)"), t(Mt, "stroke", "var(--btn-border-stroke)"), t(Mt, "stroke-linecap", "round"), t(Mt, "stroke-linejoin", "round"), t(Mt, "stroke-width", "2"), t(Mt, "rx", "8"), t(Mt, "ry", "8"), t(Dr, "width", "94"), t(Dr, "height", "35"), t(Dr, "x", "515"), t(Dr, "y", "713.4"), t(Dr, "fill", "url(#bl)"), t(Dr, "rx", "4"), t(Dr, "ry", "4"), t(rl, "transform", "translate(-238 108)"), t(rl, "class", "cp-button"), t(rl, "data-cp", "KEYCODE_5"), t(Ot, "width", "102"), t(Ot, "height", "44"), t(Ot, "x", "511"), t(Ot, "y", "709.4"), t(Ot, "fill", "url(#bm)"), t(Ot, "stroke", "var(--btn-border-stroke)"), t(Ot, "stroke-linecap", "round"), t(Ot, "stroke-linejoin", "round"), t(Ot, "stroke-width", "2"), t(Ot, "rx", "8"), t(Ot, "ry", "8"), t(Rr, "width", "94"), t(Rr, "height", "35"), t(Rr, "x", "515"), t(Rr, "y", "713.4"), t(Rr, "fill", "url(#bn)"), t(Rr, "rx", "4"), t(Rr, "ry", "4"), t(nl, "transform", "translate(-238 54)"), t(nl, "class", "cp-button"), t(nl, "data-cp", "KEYCODE_8"), t(ce, "width", "76"), t(ce, "height", "44"), t(ce, "x", "511"), t(ce, "y", "1085.4"), t(ce, "fill", "#15d81e"), t(ce, "fill-opacity", ".2"), t(ce, "rx", "8"), t(ce, "ry", "8"), t(Ct, "width", "102"), t(Ct, "height", "44"), t(Ct, "x", "511"), t(Ct, "y", "709.4"), t(Ct, "fill", "url(#bo)"), t(Ct, "stroke", "var(--btn-border-stroke)"), t(Ct, "stroke-linecap", "round"), t(Ct, "stroke-linejoin", "round"), t(Ct, "stroke-width", "2"), t(Ct, "rx", "8"), t(Ct, "ry", "8"), t(Br, "width", "94"), t(Br, "height", "35"), t(Br, "x", "515"), t(Br, "y", "713.4"), t(Br, "fill", "url(#bp)"), t(Br, "rx", "4"), t(Br, "ry", "4"), t(ll, "transform", "translate(-359 216)"), t(ll, "class", "cp-button"), t(ll, "data-cp", "KEYCODE_0"), t(Et, "width", "102"), t(Et, "height", "44"), t(Et, "x", "511"), t(Et, "y", "709.4"), t(Et, "fill", "url(#bq)"), t(Et, "stroke", "var(--btn-border-stroke)"), t(Et, "stroke-linecap", "round"), t(Et, "stroke-linejoin", "round"), t(Et, "stroke-width", "2"), t(Et, "rx", "8"), t(Et, "ry", "8"), t(Qr, "width", "94"), t(Qr, "height", "35"), t(Qr, "x", "515"), t(Qr, "y", "713.4"), t(Qr, "fill", "url(#br)"), t(Qr, "rx", "4"), t(Qr, "ry", "4"), t(il, "transform", "translate(-359 162)"), t(il, "class", "cp-button"), t(il, "data-cp", "KEYCODE_1"), t(jt, "width", "102"), t(jt, "height", "44"), t(jt, "x", "511"), t(jt, "y", "709.4"), t(jt, "fill", "url(#bs)"), t(jt, "stroke", "var(--btn-border-stroke)"), t(jt, "stroke-linecap", "round"), t(jt, "stroke-linejoin", "round"), t(jt, "stroke-width", "2"), t(jt, "rx", "8"), t(jt, "ry", "8"), t(Pr, "width", "94"), t(Pr, "height", "35"), t(Pr, "x", "515"), t(Pr, "y", "713.4"), t(Pr, "fill", "url(#bt)"), t(Pr, "rx", "4"), t(Pr, "ry", "4"), t(al, "transform", "translate(-359 108)"), t(al, "class", "cp-button"), t(al, "data-cp", "KEYCODE_4"), t(Ht, "width", "102"), t(Ht, "height", "44"), t(Ht, "x", "511"), t(Ht, "y", "709.4"), t(Ht, "fill", "url(#bu)"), t(Ht, "stroke", "var(--btn-border-stroke)"), t(Ht, "stroke-linecap", "round"), t(Ht, "stroke-linejoin", "round"), t(Ht, "stroke-width", "2"), t(Ht, "rx", "8"), t(Ht, "ry", "8"), t(Lr, "width", "94"), t(Lr, "height", "35"), t(Lr, "x", "515"), t(Lr, "y", "713.4"), t(Lr, "fill", "url(#bv)"), t(Lr, "rx", "4"), t(Lr, "ry", "4"), t(ol, "transform", "translate(-359 54)"), t(ol, "class", "cp-button"), t(ol, "data-cp", "KEYCODE_7"), t(wn, "fill", "#3d3d3d"), t(wn, "d", "M201.5 795.5h-2.4q-.7 0-.3-.6l7.5-18.7h-8.8q-.6 0-.6-.7v-1.9q0-.6.6-.6h11.8q.7 0 .7.6v2.2q0 .5-.4 1.5l-7.1 17.7q-.2.5-1 .5z"), t(wn, "font-family", "Rajdhani"), t(wn, "font-size", "35"), t(wn, "font-weight", "600"), t(wn, "letter-spacing", "0"), t(xl, "word-spacing", "0"), t(xl, "class", "cp-button-label"), G(xl, "line-height", "125%"), t(Fr, "fill", "#fff"), t(Fr, "d", "M199.3 723.3q-3.8 4-8 8l1.9 4.3 1.1 2.5q.4.8.8 1.2l.7.5 1.1.3-.2 1h-4.9l-2.7-8-1.2 1.2-1.5 1.6-1 1.3-.4.9-.1.8q0 .5.3.8.3.3 1 .4l-.3 1h-5.5l-.4-1q4.3-4.6 8.4-8.5l-1.8-4.3-1-2q-.3-.8-.6-1.1l-.8-.6-1.2-.3.2-1h5l2.5 7.4 1.8-1.8 1.2-1.5q.4-.5.5-1 .2-.4.2-.9 0-1-1.3-1.2l.2-1h5.6l.4 1z"), t(Fr, "font-family", "Cambria"), t(Fr, "font-size", "40"), t(Fr, "font-style", "italic"), t(Fr, "font-weight", "400"), t(Fr, "letter-spacing", "0"), t(bl, "word-spacing", "0"), t(bl, "class", "cp-button-label"), G(bl, "line-height", "125%"), t(kn, "x", "1714.4"), t(kn, "y", "880.6"), t(kn, "font-family", "Lucida Calligraphy"), t(kn, "font-style", "italic"), t(kn, "font-weight", "400"), t(Dt, "xml:space", "preserve"), t(Dt, "x", "1714.4"), t(Dt, "y", "880.6"), t(Dt, "font-family", "Script MT Bold"), t(Dt, "font-size", "40"), t(Dt, "font-weight", "700"), t(Dt, "letter-spacing", "0"), t(Dt, "word-spacing", "0"), G(Dt, "line-height", "125%"), t(qn, "fill", "#3d3d3d"), t(qn, "d", "M322.2 792.6h2.7q1.3 0 2-.6.6-.6.6-2v-1.8q0-2.6-2.6-2.6h-2.7q-2.5 0-2.5 2.6v1.9q0 1.3.6 1.9.6.6 1.9.6zm0-9.8h2.7q2.6 0 2.6-2.6v-1.7q0-1.3-.7-2-.6-.5-1.9-.5h-2.7q-1.3 0-2 .6-.5.6-.5 1.9v1.7q0 2.6 2.5 2.6zm3.2 12.7h-3.7q-2.6 0-4-1.3t-1.4-3.9v-1.9q0-3.2 2.4-4.2-2.4-1-2.4-4.2v-1.8q0-2.5 1.4-3.8 1.4-1.4 4-1.4h3.7q2.6 0 4 1.4 1.5 1.3 1.5 3.8v1.8q0 1.6-.7 2.7-.6 1.1-1.7 1.5 2.4 1 2.4 4.3v1.8q0 2.6-1.5 3.9-1.4 1.3-4 1.3z"), t(qn, "font-family", "Rajdhani"), t(qn, "font-size", "35"), t(qn, "font-weight", "600"), t(qn, "letter-spacing", "0"), t(wl, "word-spacing", "0"), t(wl, "class", "cp-button-label"), G(wl, "line-height", "125%"), t(_n, "fill", "#3d3d3d"), t(_n, "d", "M441.9 784.1h4.9v-5.5q0-2.6-2.6-2.6H442q-2.5 0-2.5 2.6v3q0 2.5 2.5 2.5zm2.8 11.4h-7q-.7 0-.7-.6v-1.8q0-.5.6-.5h6.6q2.6 0 2.6-2.6v-3h-5.4q-2.6 0-4-1.4-1.5-1.4-1.5-4v-3.3q0-2.5 1.4-4 1.5-1.4 4-1.4h3.4q2.6 0 4 1.5 1.5 1.4 1.5 4V790q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(_n, "font-family", "Rajdhani"), t(_n, "font-size", "35"), t(_n, "font-weight", "600"), t(_n, "letter-spacing", "0"), t(kl, "word-spacing", "0"), t(kl, "class", "cp-button-label"), G(kl, "line-height", "125%"), t(Gn, "fill", "#3d3d3d"), t(Gn, "d", "M204 842.2V830l-7 12.3h7zm2.6 7.3h-2q-.7 0-.7-.6v-3.6h-9.2q-1 0-1-1v-1.1q0-.8.3-1.4l7.8-13.9.5-.7q.3-.2.8-.2h3q1 0 1 1v14.2h2.6q.6 0 .6.6v1.8q0 .7-.6.7h-2.5v3.6q0 .6-.6.6z"), t(Gn, "font-family", "Rajdhani"), t(Gn, "font-size", "35"), t(Gn, "font-weight", "600"), t(Gn, "letter-spacing", "0"), t(ql, "word-spacing", "0"), t(ql, "class", "cp-button-label"), G(ql, "line-height", "125%"), t(Un, "fill", "#3d3d3d"), t(Un, "d", "M323.9 837.6h-2.2q-.6 0-1.1.3-.4.2-.6.5-.3.8-.9.8h-2.2q-.6 0-.6-.6v-11q0-.6.6-.6h11.9q.6 0 .6.6v2q0 .6-.6.6h-9v6.4q.5-1.7 2.9-1.7h2q2.6 0 3.9 1.3 1.3 1.3 1.3 3.8v4.1q0 2.6-1.4 4-1.5 1.4-4 1.4h-3q-2.6 0-4-1.4t-1.4-4v-1q0-.5.6-.5h2.2q.6 0 .6.6v.9q0 2.5 2.5 2.5h2q2.6 0 2.6-2.5v-3.6q0-1.5-.6-2.2-.6-.7-2.1-.7z"), t(Un, "font-family", "Rajdhani"), t(Un, "font-size", "35"), t(Un, "font-weight", "600"), t(Un, "letter-spacing", "0"), t(_l, "word-spacing", "0"), t(_l, "class", "cp-button-label"), G(_l, "line-height", "125%"), t(zn, "fill", "#3d3d3d"), t(zn, "d", "M442 846.6h2.5q2.5 0 2.5-2.6v-2.8q0-2.6-2.5-2.6h-5v5.4q0 2.6 2.6 2.6zm3 3h-3.4q-2.6 0-4-1.5-1.5-1.4-1.5-4v-11.7q0-2.5 1.5-4 1.4-1.4 4-1.4h7q.5 0 .5.6v1.8q0 .6-.6.6h-6.4q-2.5 0-2.5 2.6v3h5.3q2.6 0 4 1.4 1.5 1.4 1.5 4v3.1q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(zn, "font-family", "Rajdhani"), t(zn, "font-size", "35"), t(zn, "font-weight", "600"), t(zn, "letter-spacing", "0"), t(Gl, "word-spacing", "0"), t(Gl, "class", "cp-button-label"), G(Gl, "line-height", "125%"), t(Sn, "fill", "#3d3d3d"), t(Sn, "d", "M197.2 886.5v-2q0-.6.5-.9l3.6-2.2q.7-.4 1.2-.4h2q.7 0 .7.6V903q0 .6-.6.6h-2.3q-.6 0-.6-.6v-18.2l-3.8 2.2q-.7.3-.7-.4z"), t(Sn, "font-family", "Rajdhani"), t(Sn, "font-size", "35"), t(Sn, "font-weight", "600"), t(Sn, "letter-spacing", "0"), t(Ul, "word-spacing", "0"), t(Ul, "class", "cp-button-label"), G(Ul, "line-height", "125%"), t($n, "fill", "#3d3d3d"), t($n, "d", "M316 903v-3.3q0-2.2 2-3.6l6.5-5.4q1.7-1.3 1.7-3.1v-1.2q0-2.5-2.6-2.5h-1.7q-1.4 0-2 .6-.6.6-.6 2v1.2q0 .7-.6.7h-2.2q-.6 0-.6-.7v-1.3q0-2.6 1.4-4 1.5-1.4 4-1.4h2.8q2.6 0 4 1.4t1.4 4v1.4q0 2.7-2.1 4.5l-6.7 5.5q-.8.7-.8 1.6v1h9q.7 0 .7.7v1.8q0 .6-.6.6h-12.3q-.6 0-.6-.6z"), t($n, "font-family", "Rajdhani"), t($n, "font-size", "35"), t($n, "font-weight", "600"), t($n, "letter-spacing", "0"), t(zl, "word-spacing", "0"), t(zl, "class", "cp-button-label"), G(zl, "line-height", "125%"), t(Mn, "fill", "#3d3d3d"), t(Mn, "d", "M442 890.8h1.9q2.6 0 2.6-2.5v-1.9q0-2.5-2.6-2.5h-2q-1.4 0-2 .6-.6.6-.6 2v1q0 .6-.6.6h-2.2q-.6 0-.6-.6v-1.1q0-2.6 1.4-4t4-1.4h3q2.7 0 4.1 1.4 1.4 1.4 1.4 4v1.9q0 3-2.8 4 2.8.6 2.8 3.8v2q0 2.6-1.4 4t-4 1.4h-3q-2.7 0-4-1.4-1.5-1.4-1.5-4V897q0-.6.6-.6h2.2q.6 0 .6.6v1.2q0 1.3.6 2 .6.5 2 .5h2q2.6 0 2.6-2.5v-2q0-2.5-2.6-2.5h-2q-.5 0-.5-.6v-1.5q0-.7.6-.7z"), t(Mn, "font-family", "Rajdhani"), t(Mn, "font-size", "35"), t(Mn, "font-weight", "600"), t(Mn, "letter-spacing", "0"), t(Sl, "word-spacing", "0"), t(Sl, "class", "cp-button-label"), G(Sl, "line-height", "125%"), t(On, "fill", "#3d3d3d"), t(On, "d", "M204.2 954.6h2.5q2.6 0 2.6-2.6v-11.4q0-2.6-2.6-2.6h-2.5q-2.5 0-2.5 2.6V952q0 2.6 2.5 2.6zm3 3h-3.5q-2.6 0-4-1.5-1.4-1.4-1.4-4v-11.7q0-2.5 1.4-4 1.4-1.4 4-1.4h3.5q2.6 0 4 1.5 1.4 1.4 1.4 4V952q0 2.6-1.4 4t-4 1.4z"), t(On, "font-family", "Rajdhani"), t(On, "font-size", "35"), t(On, "font-weight", "600"), t(On, "letter-spacing", "0"), t($l, "word-spacing", "0"), t($l, "class", "cp-button-label"), G($l, "line-height", "125%"), t(Kr, "fill", "#3d3d3d"), t(Kr, "d", "M387 1061.8h-10q-.5 0-.5-.5V1042q0-.5.5-.5h10q.6 0 .6.5v1.6q0 .6-.5.6h-7.2q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.5.6h-6.1q-.4 0-.4.3v5.6q0 .3.4.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.3-.1q-.1-.2 0-.4l5.2-10-5-9.2v-.3q.1-.2.4-.2h2.2q.6 0 .9.5l3.6 7.3h.1l3.7-7.3q.2-.5.8-.5h2.3q.3 0 .3.2.2.2 0 .4l-5 9.1 5.2 10q.2.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7-4 7.7q-.2.5-.7.5zm17.8 0h-2q-.6 0-.6-.5V1042q0-.5.6-.5h7.5q2.3 0 3.6 1.3 1.2 1.2 1.2 3.6v3.2q0 2.3-1.2 3.6-1.3 1.3-3.6 1.3h-4.6q-.4 0-.4.3v6.4q0 .5-.5.5zm.8-9.9h4.2q2.3 0 2.3-2.3v-3q0-2.3-2.3-2.3h-4.2q-.3 0-.3.3v7q0 .3.3.3z"), t(Kr, "font-family", "Rajdhani"), t(Kr, "font-size", "31.5"), t(Kr, "font-weight", "600"), t(Kr, "letter-spacing", "0"), t(Kr, "transform", "scale(1.1 .9)"), t(Ml, "word-spacing", "0"), t(Ml, "class", "cp-button-label"), G(Ml, "line-height", "125%"), t(F0, "fill", "#3d3d3d"), t(F0, "d", "M327 946.4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z"), t(F0, "class", "cp-button-label"), t(Nt, "fill", "#fff"), t(Nt, "d", "m273.8 721.7-.3 1.7h.5c.4 0 .6.2.7.2l.3.4.2 1.5 1.4 10.6-1.4 1.8-1.1 1.2-.9.6-.5.3h-1l-.2-.5v-.5h-2l-.8 3.5.4.2 1 .2a5.6 5.6 0 0 0 2.5-.1c.5-.1 1-.4 1.5-.7a9 9 0 0 0 1.6-1.3 109.4 109.4 0 0 0 6.7-8.7l3-4.7 2-4.3v-.2l-.6-1.2h-4.5l-.3 1.7h.6c.4 0 .6.2.7.2v.6c0 1.4-1.4 4.3-4 8l-1-10.5h-4.6z"), t(Nt, "font-family", "Script MT Bold"), t(Nt, "font-size", "29.8"), t(Nt, "font-weight", "700"), t(Nt, "letter-spacing", "0"), t(Nt, "word-spacing", "0"), t(Nt, "class", "cp-button-label"), G(Nt, "line-height", "125%"), t(Ar, "fill", "#fff"), t(Ar, "d", "m375.3 734.5-1.1 5.5H360l-.4-1 10.7-12.2 3.3-3.7v-.2H369q-1 0-1.5.2-.5.1-1 .5l-1 1q-.5.6-1.2 1.9h-1.7l1.1-5.1h14l.3 1-14 16h6.3q.6-.2 1.1-.6.5-.3 1-1t1.2-2.3h1.7z"), t(Ar, "font-family", "Cambria"), t(Ar, "font-size", "40"), t(Ar, "font-style", "italic"), t(Ar, "font-weight", "400"), t(Ar, "letter-spacing", "0"), t(Ol, "word-spacing", "0"), t(Ol, "class", "cp-button-label"), G(Ol, "line-height", "125%"), t(Cn, "fill", "#fff"), t(Cn, "d", "m102 795-2.6 2.5-1-1-1.3-1.3-2.6-2.6q-.6-1-.6-2v-10.8q0-1 .6-2l2.3-2.5 1.1-1 1.5-1.4 2.6 2.5-1.3 1.2-2.2 2.1q-1 1-1 1.2v10.6q0 .3 1.9 2l2.7 2.5z"), t(Cn, "font-family", "Blender Pro"), t(Cn, "font-size", "35"), t(Cn, "font-weight", "700"), t(Cn, "letter-spacing", "0"), t(Cl, "word-spacing", "0"), t(Cl, "class", "cp-button-label"), G(Cl, "line-height", "125%"), t(En, "fill", "#fff"), t(En, "d", "M102 844.6q0 1.1-.6 2-.6.8-2.6 2.6l-2.4 2.3-2.6-2.6q1-.7 2.7-2.3 1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2.1-2l-1.3-1.3 2.5-2.5 1 1 1.7 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(En, "font-family", "Blender Pro"), t(En, "font-size", "35"), t(En, "font-weight", "700"), t(En, "letter-spacing", "0"), t(El, "word-spacing", "0"), t(El, "class", "cp-button-label"), G(El, "line-height", "125%"), t(jn, "fill", "#fff"), t(jn, "d", "M108 728.7H85.6V723H108v5.6zm0 9H85.6V732H108v5.6z"), t(jn, "font-family", "Blender Pro"), t(jn, "font-size", "60"), t(jn, "font-weight", "700"), t(jn, "letter-spacing", "0"), t(jl, "word-spacing", "0"), t(jl, "class", "cp-button-label"), G(jl, "line-height", "125%"), t(Yr, "fill", "#fff"), t(Yr, "d", "M98 1300.2c-1 0-2 .2-2.6.8a4 4 0 0 0-.9 2.7c0 1 .2 1.9.8 2.5.4.4 1 .7 1.7.8-.3.7-.7 1.3-1.5 1.8l-.2.1v3.1l.6-.2a7.8 7.8 0 0 0 4.2-2.7 8 8 0 0 0 1.4-4.9c0-1.2-.3-2.3-.9-3-.6-.7-1.5-1-2.6-1z"), t(Yr, "font-family", "Britannic Bold"), t(Yr, "font-size", "35"), t(Yr, "font-weight", "400"), t(Yr, "letter-spacing", "0"), t(Yr, "transform", "translate(0 -411.6)"), t(Hl, "word-spacing", "0"), t(Hl, "class", "cp-button-label"), G(Hl, "line-height", "125%"), t(Vr, "fill", "#fff"), t(Vr, "d", "m808.1 955-2.6 2.5-1.1-1-1.3-1.3q-2-1.9-2.5-2.6-.6-1-.6-2v-10.8q0-1 .6-2 .6-.9 2.3-2.5l1-1 1.6-1.4 2.6 2.5-1.4 1.2-2.1 2.1q-1 1-1 1.2v10.6q0 .3 1.8 2l2.7 2.5zm17.4-8h-13.6v-3.3h13.6v3.3zm10.6 3.6q0 1.1-.5 2-.6.8-2.5 2.6l-2.5 2.3-2.5-2.6 2.6-2.3q1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2-2l-1.4-1.3 2.5-2.5 1.1 1 1.6 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(Vr, "font-family", "Blender Pro"), t(Vr, "font-size", "35"), t(Vr, "font-weight", "700"), t(Vr, "letter-spacing", "0"), t(Vr, "transform", "translate(-720)"), t(Dl, "word-spacing", "0"), t(Dl, "class", "cp-button-label"), G(Dl, "line-height", "125%"), t(Ir, "fill", "#fff"), t(Ir, "d", "M482.4 1061.8h-10q-.6 0-.6-.5V1042q0-.5.6-.5h10q.5 0 .5.5v1.6q0 .6-.5.6h-7.1q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.4.3h7.1q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.4-.1v-.4l5.3-10-5-9.2v-.3q0-.2.3-.2h2.3q.6 0 .9.5l3.6 7.3h.1l3.6-7.3q.3-.5.8-.5h2.4q.2 0 .3.2.1.2 0 .4l-5 9.1 5.2 10q.1.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7h-.1l-3.9 7.7q-.2.5-.7.5zm25.8 0h-10q-.6 0-.6-.5V1042q0-.5.5-.5h10.1q.5 0 .5.5v1.6q0 .6-.5.6H507q-.3 0-.3.3v5.3q0 .3.3.3h6.1q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.3.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5z"), t(Ir, "font-family", "Rajdhani"), t(Ir, "font-size", "31.5"), t(Ir, "font-weight", "600"), t(Ir, "letter-spacing", "0"), t(Ir, "transform", "scale(1.1 .9)"), t(Rl, "word-spacing", "0"), t(Rl, "class", "cp-button-label"), G(Rl, "line-height", "125%"), t(Hn, "fill", "#fff"), t(Hn, "d", "M552.6 889.9h8.5q1.2 0 1.2 1.2v2.5q0 1.2-1.2 1.2h-8.5v8.7q0 1.2-1.2 1.2h-2.7q-1.2 0-1.2-1.2v-8.7H539q-1.2 0-1.2-1.2v-2.5q0-1.2 1.2-1.2h8.6v-8.6q0-1.2 1.2-1.2h2.7q1.2 0 1.2 1.2v8.6z"), t(Hn, "font-family", "Rajdhani"), t(Hn, "font-size", "60"), t(Hn, "font-weight", "600"), t(Hn, "letter-spacing", "0"), t(Bl, "word-spacing", "0"), t(Bl, "class", "cp-button-label"), G(Bl, "line-height", "125%"), t(Dn, "fill", "#fff"), t(Dn, "d", "M559.3 840H539q-1 0-1-1v-1.3q0-1 1-1h20.3q1 0 1 1v1.3q0 1-1 1z"), t(Dn, "font-family", "Rajdhani"), t(Dn, "font-size", "60"), t(Dn, "font-weight", "600"), t(Dn, "letter-spacing", "0"), t(Ql, "word-spacing", "0"), t(Ql, "class", "cp-button-label"), G(Ql, "line-height", "125%"), t(Rn, "fill", "#fff"), t(Rn, "d", "m552.6 784 6.3 6.4q.8.7 0 1.6l-2 1.9q-.7.9-1.6 0l-6.3-6.3-6.3 6.4q-.9.8-1.6-.1l-2-2q-.8-.8 0-1.5l6.3-6.4-6.3-6.2q-.8-.9 0-1.7l2-2q.8-.8 1.6 0l6.3 6.3 6.3-6.2q.8-.9 1.6 0l2 2q.7.7 0 1.6l-6.3 6.2z"), t(Rn, "font-family", "Rajdhani"), t(Rn, "font-size", "60"), t(Rn, "font-weight", "600"), t(Rn, "letter-spacing", "0"), t(Pl, "word-spacing", "0"), t(Pl, "class", "cp-button-label"), G(Pl, "line-height", "125%"), t(Bn, "fill", "#fff"), t(Bn, "d", "M547 740.3v-3.2q0-1 1-1 h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1zm11.1-7.9H540q-1.1 0-1.1-1v-2q0-1 1-1h18.2q1 0 1 1v2q0 1-1 1zm-11.1-8.8v-3.1q0-1.1 1-1.1h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1z"), t(Bn, "font-family", "Rajdhani"), t(Bn, "font-size", "60"), t(Bn, "font-weight", "600"), t(Bn, "letter-spacing", "0"), t(Ll, "word-spacing", "0"), t(Ll, "class", "cp-button-label"), G(Ll, "line-height", "125%"), t(Qn, "fill", "#fff"), t(Qn, "d", "M450.5 738.4H447q-1.3 0-.7-1.1l7.4-14.2q.5-1 .9-1.2.4-.3 1.3-.3h4.2q.9 0 1.3.3t.9 1.2l7.4 14.2q.6 1-.7 1h-3.4q-1 0-1.4-1l-6.2-12-6.2 12q-.6 1-1.4 1z"), t(Qn, "font-family", "Rajdhani"), t(Qn, "font-size", "60"), t(Qn, "font-weight", "600"), t(Qn, "letter-spacing", "0"), t(Fl, "word-spacing", "0"), t(Fl, "class", "cp-button-label"), G(Fl, "line-height", "125%"), t(Pn, "fill", "#fff"), t(Pn, "d", "M101.6 619.1h-1.5q-.4 0-.4-.3v-12.2q0-.4.4-.4h1.5q.4 0 .4.4v6.3h.1l.6-1 4.5-5.3q.3-.4.8-.4h1.7q.5 0 .2.4l-4.6 5.3 5.2 6.8q.2.4-.3.4h-1.3q-.7 0-1-.3l-4-5.5-1.9 1.9v3.6q0 .3-.4.3zm19.4 0h-5.2q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.7 0 2.7.8 1 .8 1 2.3v2.5q0 .4-.5.4h-6.3q-.2 0-.2.2v.9q0 1.4 1.7 1.4h4.7q.4 0 .4.4v1q0 .3-.4.3zm-6.3-5.6h4.2q.3 0 .3-.2v-1.2q0-.8-.4-1.1-.4-.4-1.3-.4h-1.3q-1 0-1.3.4-.4.3-.4 1v1.3q0 .2.2.2zm10.7 8.9h-1.2q-.4 0-.4-.4v-1q0-.4.4-.4h.5q1.5 0 2-.5.6-.4 1-1.5h-1q-.4 0-.5-.4l-3.1-9q-.1-.3.3-.3h1.6q.3 0 .4.3l2.6 7.9 2.7-7.9q0-.3.4-.3h1.5q.5 0 .4.3l-3.2 9.7q-.6 1.7-1.5 2.6-1 .9-2.9.9zm12.1-5h3q1.7 0 1.7-1.5v-4q0-1.4-1.7-1.4h-1.3q-2 0-2 1.7v5q0 .2.3.2zm-2.5 1.4v-13.4q0-.4.4-.4h1.5q.4 0 .4.4v4.5q.7-1 2.5-1h1q1.7 0 2.7.7 1 .8 1 2.3v4.1q0 1.5-1 2.3-1 .8-2.7.8h-5.4q-.4 0-.4-.3zm17.7.3h-2.1q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.8 0 2.8.8 1 .8 1 2.3v4q0 1.5-1 2.3-1 .8-2.7.8zm-1.8-1.7h1.5q1.7 0 1.7-1.5v-3.8q0-1.5-1.7-1.5h-1.5q-.9 0-1.3.4-.4.3-.4 1v4q0 .7.4 1 .4.4 1.3.4zm12.5 1.7h-1q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h5.2q.5 0 .5.3v9.6q0 .3-.5.3h-1.4q-.4 0-.4-.3v-.8h-.1q-.6 1.1-2.4 1.1zm2.5-3.4v-5l-.3-.1h-2.8q-1.7 0-1.7 1.5v3.8q0 1.5 1.7 1.5h1.1q2 0 2-1.7zm7.1 3.4h-1.5q-.4 0-.4-.3v-9.6q0-.3.4-.3h1.5q.4 0 .4.3v.8q.3-.5 1-.8.6-.3 1.5-.3h.8q.4 0 .4.3v1q0 .5-.4.4h-1.4q-2 0-2 1.8v6.4q0 .3-.3.3zm10.5 0h-1.2q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3.9-.8 2.6-.8h1.2q1.8 0 2.3 1h.1v-4.5q0-.4.4-.4h1.5q.4 0 .4.4v13.4q0 .3-.4.3h-1.5q-.4 0-.4-.3v-.8q-.6 1.1-2.4 1.1zm2.4-3.4v-3.4q0-1.7-2-1.7h-1.2q-1.6 0-1.6 1.5v3.8q0 1.5 1.6 1.5h1.3q2 0 2-1.7z"), t(Pn, "font-family", "Rajdhani"), t(Pn, "font-size", "25"), t(Pn, "font-weight", "600"), t(Pn, "letter-spacing", "0"), t(Kl, "word-spacing", "0"), t(Kl, "class", "cp-button-label"), G(Kl, "line-height", "125%"), t(Tr, "fill", "#42caf7"), t(Tr, "d", "M118.6 667.2v-.6q0-.4.4-.4h1.6q.4 0 .4.4v.4q0 1.1.5 1.6.4.4 1.5.4h1.7q1.1 0 1.6-.5t.5-1.6v-.5q0-.8-.7-1.3-.6-.5-1.5-.6l-2-.4-2-.6q-.8-.3-1.4-1.2-.6-.9-.6-2.3v-1q0-1.9 1-2.9t2.9-1h2.6q1.9 0 2.9 1t1 2.9v.5q0 .4-.4.4H127q-.4 0-.4-.4v-.3q0-1-.5-1.5-.4-.5-1.5-.5H123q-1 0-1.5.5t-.5 1.6v.8q0 1.1 1.6 1.5l1.6.3 1.8.4 1.6.7q.7.4 1.1 1.2.5.9.5 2v1q0 1.9-1 3-1.1 1-3 1h-2.7q-1.8 0-2.9-1-1-1.1-1-3zm15.7 3.9h-1.6q-.4 0-.4-.4V654q0-.4.4-.4h1.6q.4 0 .4.4v5.7h.1q.6-1.3 2.6-1.3h1q1.9 0 2.9 1t1 2.9v8.4q0 .4-.5.4h-1.6q-.4 0-.4-.4v-8.3q0-1.9-1.8-1.9h-1.2q-2 0-2 2.1v8.1q0 .4-.5.4zm11.1-14.8V654q0-.4.4-.4h1.6q.4 0 .4.4v2.3q0 .4-.4.4h-1.6q-.4 0-.4-.4zm0 14.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v12.3h-2q-.4 0-.4-.4zm9.6-12.3h2q.5 0 .5.4v1.3q0 .4-.5.4h-2q-.3 0-.3.3v10q0 .3-.5.3h-1.6q-.4 0-.4-.4v-10q0-.2-.3-.2h-1.3q-.4 0-.4-.4v-1.6l.4-.1h1.3q.3 0 .3-.3v-.7q0-1.8 1-2.8 1-1 2.7-1h1.1q.5 0 .5.4v1.3q0 .4-.5.4h-.7q-.9 0-1.3.4-.3.5-.3 1.4v.6q0 .3.2.3zm4.8 2.1h-1.5v-1.8q0-.4.3-.4h1.2q.3 0 .3-.3v-2q0-.4.4-.4h1.6q.4 0 .4.4v2.2q0 .3.3.3h2.3q.5 0 .5.4v1.3q0 .4-.5.4h-2.3q-.3 0-.3.3v6.4q0 1.8 2 1.8h.9q.4 0 .4.4v1.3q0 .4-.4.4H164q-1.8 0-2.9-1-1-1-1-2.8v-6.5q0-.3-.3-.3z"), t(Tr, "font-family", "Rajdhani"), t(Tr, "font-size", "25"), t(Tr, "font-weight", "600"), t(Tr, "letter-spacing", "0"), G(Tr, "text-align", "center"), t(Ln, "text-anchor", "middle"), t(Ln, "word-spacing", "0"), t(Ln, "class", "cp-button-label"), G(Ln, "line-height", "125%"), G(Ln, "text-align", "center"), t(Nr, "fill", "#fff"), t(Nr, "d", "M503.8 671.1H501q-1.8 0-2.9-1-1-1-1-2.8v-8.4q0-1.8 1-2.8 1-1 3-1h2.8q1.8 0 2.9 1 1 1 1 2.8v1.2q0 .5-.5.5h-1.5q-.5 0-.5-.5v-1q0-1.9-1.8-1.9h-2.1q-1.8 0-1.8 1.8v8.2q0 1.8 1.8 1.8h2.1q1.8 0 1.8-1.8V666q0-.5.5-.5h1.5q.5 0 .5.5v1.2q0 1.8-1 2.8-1 1-2.9 1zm8.8 0h-1.5q-.5 0-.5-.4V654q0-.4.5-.4h1.5q.5 0 .5.4v16.7q0 .4-.5.4zm12.8 0H520q-1.9 0-3-1-1-1-1-2.8v-5q0-1.9 1-2.9 1.1-1 3-1h2q1.9 0 2.9 1t1 2.9v3.1q0 .5-.4.5h-6.7q-.3 0-.3.2v1.1q0 1.8 1.8 1.8h5q.5 0 .5.5v1.2q0 .4-.4.4zm-6.6-6.9h4.4q.3 0 .3-.3v-1.6q0-.9-.4-1.3-.5-.5-1.4-.5h-1.4q-1 0-1.4.5-.4.4-.4 1.3v1.6q0 .3.3.3zm14.4 6.9h-1q-1.8 0-2.8-1-1-1-1-2.8v-5q0-1.9 1-2.9t2.9-1h5.6q.4 0 .4.4v12q0 .3-.4.3h-1.6q-.4 0-.4-.4v-.9h-.1q-.6 1.3-2.6 1.3zm2.7-4.2v-6.1q0-.3-.3-.3h-3q-1.8 0-1.8 1.9v4.8q0 1.8 1.8 1.8h1.2q2 0 2-2.1zm7.5 4.2h-1.6q-.4 0-.4-.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v1h.1q.3-.7 1-1 .7-.4 1.6-.4h1q.3 0 .3.4v1.3q0 .5-.4.4H546q-2 0-2 2.3v8q0 .3-.5.3z"), t(Nr, "font-family", "Rajdhani"), t(Nr, "font-size", "25"), t(Nr, "font-weight", "600"), t(Nr, "letter-spacing", "0"), G(Nr, "text-align", "center"), t(Fn, "text-anchor", "middle"), t(Fn, "word-spacing", "0"), t(Fn, "class", "cp-button-label"), G(Fn, "line-height", "125%"), G(Fn, "text-align", "center"), t(X, "fill", "#42caf7"), t(X, "d", "M473.6 656.2a1.5 1.5 0 0 0-1 2.6 6.5 6.5 0 1 1-9.2 0 1.5 1.5 0 1 0-2.1-2.2 9.5 9.5 0 1 0 13.4 0 1.5 1.5 0 0 0-1-.4z"), t(X, "color", "#000"), t(X, "font-family", "sans-serif"), t(X, "font-weight", "400"), t(X, "overflow", "visible"), t(X, "class", "cp-button-label"), G(X, "line-height", "normal"), G(X, "text-indent", "0px"), G(X, "text-align", "start"), G(X, "text-decoration-line", "none"), G(X, "text-decoration-style", "solid"), G(X, "text-decoration-color", "rgb(0, 0, 0)"), G(X, "text-transform", "none"), G(X, "white-space", "normal"), G(X, "isolation", "auto"), G(X, "mix-blend-mode", "normal"), t(W, "fill", "#42caf7"), t(W, "d", "M468 652.4c-.8 0-1.5.6-1.5 1.5v10c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10c0-.9-.7-1.5-1.5-1.5z"), t(W, "color", "#000"), t(W, "font-family", "sans-serif"), t(W, "font-weight", "400"), t(W, "overflow", "visible"), t(W, "class", "cp-button-label"), G(W, "line-height", "normal"), G(W, "text-indent", "0px"), G(W, "text-align", "start"), G(W, "text-decoration-line", "none"), G(W, "text-decoration-style", "solid"), G(W, "text-decoration-color", "rgb(0, 0, 0)"), G(W, "text-transform", "none"), G(W, "white-space", "normal"), G(W, "isolation", "auto"), G(W, "mix-blend-mode", "normal"), t(Al, "fill", "#fff"), t(Al, "fill-rule", "evenodd"), t(Al, "d", "m500 607.4-12 6.9 12.2 7v-4H520v-6h-20z"), t(Al, "class", "cp-button-label"), t(K0, "fill", "#222"), t(K0, "fill-rule", "evenodd"), t(K0, "d", "m1210-959.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(A0, "fill", "#1c1c1c"), t(A0, "fill-rule", "evenodd"), t(A0, "d", "M1210-959.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(de, "width", "20"), t(de, "height", "18"), t(de, "x", "1200"), t(de, "y", "-941.6"), t(de, "fill", "#7e7e7e"), t(de, "fill-opacity", ".2"), t(de, "rx", "0"), t(de, "ry", "0"), t(Y0, "fill", "#272727"), t(Y0, "fill-rule", "evenodd"), t(Y0, "d", "m1275-897.6-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3z"), t(V0, "fill", "#222"), t(V0, "fill-rule", "evenodd"), t(V0, "d", "m1275-909.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(I0, "fill", "#1c1c1c"), t(I0, "fill-rule", "evenodd"), t(I0, "d", "M1275-909.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(fe, "width", "20"), t(fe, "height", "18"), t(fe, "x", "1265"), t(fe, "y", "-891.6"), t(fe, "fill", "#7e7e7e"), t(fe, "fill-opacity", ".2"), t(fe, "rx", "0"), t(fe, "ry", "0"), t(v, "transform", "translate(0 411.6)"), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), t(e, "viewBox", "0 0 648 1464");
    },
    m(L2, xi) {
      S(L2, e, xi), n(e, r), n(r, a), n(a, o), n(a, s), n(a, d), n(a, c), n(r, f), n(f, p), n(f, b), n(f, g), n(f, w), n(f, x), n(r, z), n(z, q), n(z, m), n(z, y), n(z, j), n(r, C), n(C, P), n(C, D), n(C, $), n(C, M), n(C, h), n(r, H), n(H, T), n(H, Rt), n(H, N), n(H, R), n(r, nt), n(nt, J), n(nt, lt), n(r, Xt), n(Xt, Vt), n(Xt, ue), n(Xt, Kn), n(Xt, It), n(r, Wt), n(Wt, it), n(Wt, Tt), n(Wt, Bt), n(Wt, Xr), n(r, Wr), n(Wr, O), n(Wr, I), n(r, ge), n(ge, Jr), n(ge, An), n(r, ve), n(ve, tn), n(ve, W0), n(r, Xl), n(Xl, J0), n(Xl, Wl), n(r, dl), n(dl, Jl), n(dl, t0), n(dl, e0), n(r, fl), n(fl, r0), n(fl, n0), n(fl, l0), n(r, Yn), n(Yn, t2), n(Yn, e2), n(Yn, r2), n(Yn, n2), n(r, en), n(en, l2), n(en, i2), n(en, a2), n(en, o2), n(en, s2), n(r, i0), n(i0, c2), n(i0, a0), n(r, Vn), n(Vn, d2), n(Vn, f2), n(Vn, p2), n(Vn, o0), n(r, pl), n(pl, h2), n(pl, s0), n(pl, c0), n(r, hl), n(hl, u2), n(hl, d0), n(hl, f0), n(r, p0), n(p0, g2), n(p0, h0), n(r, u0), n(u0, v2), n(u0, g0), n(r, ul), n(ul, m2), n(ul, v0), n(ul, y2), n(r, Jt), n(Jt, x2), n(Jt, b2), n(Jt, w2), n(Jt, k2), n(Jt, q2), n(Jt, _2), n(Jt, G2), n(r, me), n(r, ye), n(r, xe), n(r, be), n(r, we), n(r, ke), n(r, qe), n(r, _e), n(r, Ge), n(r, Ue), n(r, ze), n(r, Se), n(r, $e), n(r, Me), n(r, Oe), n(r, Ce), n(r, Ee), n(r, je), n(r, He), n(r, De), n(r, Re), n(r, Be), n(r, Qe), n(r, Pe), n(r, Le), n(r, Fe), n(r, Ke), n(r, Ae), n(r, Ye), n(r, Ve), n(r, Ie), n(r, Te), n(r, Ne), n(r, Ze), n(r, Xe), n(r, We), n(r, Je), n(r, t1), n(r, e1), n(r, r1), n(r, n1), n(r, l1), n(r, i1), n(r, a1), n(r, o1), n(r, s1), n(r, c1), n(r, d1), n(r, f1), n(r, p1), n(r, h1), n(r, u1), n(r, g1), n(r, v1), n(r, m1), n(r, y1), n(r, x1), n(r, b1), n(r, w1), n(r, k1), n(r, q1), n(r, _1), n(r, G1), n(r, U1), n(r, te), n(r, ee), n(r, re), n(r, z1), n(r, S1), n(r, $1), n(r, M1), n(r, O1), n(r, C1), n(r, E1), n(r, j1), n(r, H1), n(r, D1), n(r, R1), n(r, B1), n(r, Q1), n(r, P1), n(r, L1), n(r, F1), n(r, K1), n(r, A1), n(r, Y1), n(r, V1), n(r, I1), n(r, T1), n(r, N1), n(r, Z1), n(r, X1), n(r, W1), n(r, J1), n(r, tr), n(r, er), n(r, rr), n(r, nr), n(r, lr), n(r, ir), n(r, ar), n(r, Qt), n(Qt, In), n(Qt, m0), n(Qt, y0), n(r, or), n(e, rt), n(rt, gl), n(rt, x0), n(rt, vl), n(rt, Tn), n(rt, Pt), n(rt, Lt), n(rt, Ft), n(rt, Kt), n(rt, ne), n(rt, le), n(rt, ie), n(rt, rn), n(rn, at), n(rn, sr), n(rn, b0), n(rt, U2), n(U2, z2), n(e, S2), n(S2, nn), n(nn, $2), n(e, v), n(v, w0), n(v, k0), n(v, q0), n(v, ml), n(v, yl), n(v, Nn), n(Nn, ot), n(Nn, cr), n(Nn, _0), n(v, ln), n(ln, st), n(ln, dr), n(ln, G0), n(v, an), n(an, ct), n(an, fr), n(an, U0), n(v, on), n(on, dt), n(on, pr), n(on, z0), n(v, sn), n(sn, ft), n(sn, hr), n(sn, S0), n(v, cn), n(cn, pt), n(cn, ur), n(cn, $0), n(v, dn), n(dn, ht), n(dn, gr), n(dn, M0), n(v, fn), n(fn, ut), n(fn, vr), n(fn, O0), n(v, pn), n(pn, gt), n(pn, mr), n(pn, C0), n(v, hn), n(hn, vt), n(hn, yr), n(hn, E0), n(v, un), n(un, mt), n(un, xr), n(un, j0), n(v, gn), n(gn, yt), n(gn, br), n(gn, H0), n(v, vn), n(vn, xt), n(vn, wr), n(vn, D0), n(v, mn), n(mn, bt), n(mn, kr), n(mn, R0), n(v, yn), n(yn, wt), n(yn, qr), n(yn, B0), n(v, xn), n(xn, kt), n(xn, _r), n(xn, Q0), n(v, bn), n(bn, qt), n(bn, Gr), n(bn, P0), n(v, M2), n(v, O2), n(v, C2), n(v, Ur), n(v, zr), n(v, Sr), n(v, $r), n(v, At), n(v, ae), n(v, oe), n(v, se), n(v, L0), n(v, Zn), n(Zn, _t), n(Zn, Mr), n(v, Xn), n(Xn, Gt), n(Xn, Or), n(v, Wn), n(Wn, Ut), n(Wn, Cr), n(v, Jn), n(Jn, zt), n(Jn, Er), n(v, tl), n(tl, St), n(tl, jr), n(v, el), n(el, $t), n(el, Hr), n(v, rl), n(rl, Mt), n(rl, Dr), n(v, nl), n(nl, Ot), n(nl, Rr), n(v, ce), n(v, ll), n(ll, Ct), n(ll, Br), n(v, il), n(il, Et), n(il, Qr), n(v, al), n(al, jt), n(al, Pr), n(v, ol), n(ol, Ht), n(ol, Lr), n(v, xl), n(xl, wn), n(v, bl), n(bl, Fr), n(v, Dt), n(Dt, kn), n(kn, X2), n(Dt, W2), n(v, wl), n(wl, qn), n(v, kl), n(kl, _n), n(v, ql), n(ql, Gn), n(v, _l), n(_l, Un), n(v, Gl), n(Gl, zn), n(v, Ul), n(Ul, Sn), n(v, zl), n(zl, $n), n(v, Sl), n(Sl, Mn), n(v, $l), n($l, On), n(v, Ml), n(Ml, Kr), n(v, F0), n(v, Nt), n(v, Ol), n(Ol, Ar), n(v, Cl), n(Cl, Cn), n(v, El), n(El, En), n(v, jl), n(jl, jn), n(v, Hl), n(Hl, Yr), n(v, Dl), n(Dl, Vr), n(v, Rl), n(Rl, Ir), n(v, Bl), n(Bl, Hn), n(v, Ql), n(Ql, Dn), n(v, Pl), n(Pl, Rn), n(v, Ll), n(Ll, Bn), n(v, Fl), n(Fl, Qn), n(v, Kl), n(Kl, Pn), n(v, Ln), n(Ln, Tr), n(v, Fn), n(Fn, Nr), n(v, X), n(v, W), n(v, Al), n(v, K0), n(v, A0), n(v, de), n(v, Y0), n(v, V0), n(v, I0), n(v, fe);
    },
    p: _,
    i: _,
    o: _,
    d(L2) {
      L2 && U(e);
    }
  };
}
class Aa extends V {
  constructor(e) {
    super(), Y(this, e, null, Ka, A, {});
  }
}
const Ya = (i) => {
  console.log("emu:main recv:", i.detail.state), vi.set(window.Module.cwrap("getPC", "number", [])), mi.set(window.Module.cwrap("readMemory2Quick", "number", ["number"]));
}, Va = (i) => {
  console.error("cpu_crash recv:", i.detail), Zt.set("crashed");
  let e = i.detail.name, r = (i.detail.address >>> 0).toString(16).padStart(8, "0"), a = (i.detail.pc >>> 0).toString(16).padStart(8, "0");
  D2.set({
    name: e,
    message: `@ 0x${r} 	
 PC:${a}
`,
    hint: `https://github.com/search?q=repo%3AClasspadDev%2Fhollyhock-3%20${a.substring(0, 6)}&type=code`
  });
}, Ia = (i) => {
  let e = i.detail.regs.map((o) => o >>> 0);
  const r = i.detail.pc >>> 0, a = i.detail.instr >>> 0;
  console.debug("cpu_dump recv:", i.detail), console.debug(`cpu:dump: INSTR ${a.toString(16).padStart(4, "0")} 	 - PC: 0x${r.toString(16).padStart(8, "0")}`), console.debug(e.map((o) => o.toString(16).toUpperCase())), B2.set({
    instr: a,
    pc: r,
    registers: e
  });
};
function Ta() {
  document.addEventListener("emu:main", Ya), document.addEventListener("cpu:dump", Ia), document.addEventListener("cpu:crash", Va);
}
function Na(i) {
  let e, r, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = pe(d, s[c]);
  return {
    c() {
      e = l("svg"), r = l("g"), a = l("path"), o = l("path"), t(a, "stroke-linejoin", "round"), t(a, "d", "m14.5 7l5 5l-5 5"), t(o, "d", "M19.5 12h-10c-1.667 0-5 1-5 5"), t(o, "opacity", "0.5"), t(r, "fill", "none"), t(r, "stroke", "currentColor"), t(r, "stroke-linecap", "round"), t(r, "stroke-width", "1.5"), Zl(e, d);
    },
    m(c, f) {
      S(c, e, f), n(e, r), n(r, a), n(r, o);
    },
    p(c, [f]) {
      Zl(e, d = N2(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: _,
    o: _,
    d(c) {
      c && U(e);
    }
  };
}
function Za(i, e, r) {
  return i.$$set = (a) => {
    r(0, e = pe(pe({}, e), Nl(a)));
  }, e = Nl(e), [e];
}
class Xa extends V {
  constructor(e) {
    super(), Y(this, e, Za, Na, A, {});
  }
}
function Wa(i) {
  let e, r, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = pe(d, s[c]);
  return {
    c() {
      e = l("svg"), r = l("g"), a = l("path"), o = l("path"), t(a, "stroke-linejoin", "round"), t(a, "d", "m17 14.5l-5 5l-5-5"), t(o, "d", "M12 19.5v-10c0-1.667-1-5-5-5"), t(o, "opacity", "0.5"), t(r, "fill", "none"), t(r, "stroke", "currentColor"), t(r, "stroke-linecap", "round"), t(r, "stroke-width", "1.5"), Zl(e, d);
    },
    m(c, f) {
      S(c, e, f), n(e, r), n(r, a), n(r, o);
    },
    p(c, [f]) {
      Zl(e, d = N2(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: _,
    o: _,
    d(c) {
      c && U(e);
    }
  };
}
function Ja(i, e, r) {
  return i.$$set = (a) => {
    r(0, e = pe(pe({}, e), Nl(a)));
  }, e = Nl(e), [e];
}
class to extends V {
  constructor(e) {
    super(), Y(this, e, Ja, Wa, A, {});
  }
}
function eo(i) {
  let e, r, a;
  return {
    c() {
      e = l("g"), r = l("path"), a = l("path"), t(r, "d", "m11 8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232"), t(r, "opacity", "0.5"), t(a, "d", "M21.079 10.147c1.228.807 1.228 2.899 0 3.706L13.66 18.73c-1.194.785-2.661-.237-2.661-1.853V7.123c0-1.616 1.467-2.638 2.661-1.853z"), t(e, "fill", "none"), t(e, "stroke", "currentColor"), t(e, "stroke-width", "1.5");
    },
    m(o, s) {
      S(o, e, s), n(e, r), n(e, a);
    },
    d(o) {
      o && U(e);
    }
  };
}
function ro(i) {
  let e, r, a;
  return {
    c() {
      e = l("path"), r = l("path"), a = Z(">"), t(e, "fill", "currentColor"), t(e, "fill-rule", "evenodd"), t(e, "d", "M2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232V8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426"), t(e, "clip-rule", "evenodd"), t(e, "opacity", "0.5"), t(r, "fill", "currentColor"), t(r, "d", "M11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706L13.66 5.27C12.467 4.485 11 5.507 11 7.123");
    },
    m(o, s) {
      S(o, e, s), S(o, r, s), S(o, a, s);
    },
    d(o) {
      o && (U(e), U(r), U(a));
    }
  };
}
function no(i) {
  let e;
  function r(s, d) {
    return (
      /*on*/
      s[0] ? ro : eo
    );
  }
  let a = r(i), o = a(i);
  return {
    c() {
      e = l("svg"), o.c(), t(e, "xmlns", "http://www.w3.org/2000/svg"), t(e, "width", "1em"), t(e, "height", "1em"), t(e, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      S(s, e, d), o.m(e, null);
    },
    p(s, [d]) {
      a !== (a = r(s)) && (o.d(1), o = a(s), o && (o.c(), o.m(e, null)));
    },
    i: _,
    o: _,
    d(s) {
      s && U(e), o.d();
    }
  };
}
function lo(i, e, r) {
  let { on: a = !1 } = e;
  return i.$$set = (o) => {
    "on" in o && r(0, a = o.on);
  }, [a];
}
class io extends V {
  constructor(e) {
    super(), Y(this, e, lo, no, A, { on: 0 });
  }
}
function ao(i) {
  let e, r, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = pe(d, s[c]);
  return {
    c() {
      e = l("svg"), r = l("g"), a = l("path"), o = l("path"), t(a, "stroke-linecap", "round"), t(a, "d", "m18.5 5.5l-13 13"), t(a, "opacity", "0.5"), t(o, "d", "M22 10.849v2.302c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848Z"), t(r, "fill", "none"), t(r, "stroke", "currentColor"), t(r, "stroke-width", "1.5"), Zl(e, d);
    },
    m(c, f) {
      S(c, e, f), n(e, r), n(r, a), n(r, o);
    },
    p(c, [f]) {
      Zl(e, d = N2(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: _,
    o: _,
    d(c) {
      c && U(e);
    }
  };
}
function oo(i, e, r) {
  return i.$$set = (a) => {
    r(0, e = pe(pe({}, e), Nl(a)));
  }, e = Nl(e), [e];
}
class so extends V {
  constructor(e) {
    super(), Y(this, e, oo, ao, A, {});
  }
}
const co = {
  // Ayu
  "#~gui.background": "#202020",
  // default is #25282b but I like darker
  "ec comment": "#95e6cb",
  "ec cmp": "#50d0e0",
  "ec input": "#808080",
  "ec jmp": "#c2d94c",
  "ec math": "#50d0e0",
  "ec mov": "#d9d8d7",
  "ec nop": "#a37acc",
  "ec num": "#f28779",
  "ec offset": "#ed9366",
  "ec other": "#808080",
  "ec pop": "#50d0e0",
  "ec push": "#50d0e0",
  "ec reg": "#e6e1cf",
  "ec ret": "#d06060",
  "ec swi": "#d06060",
  "ec trap": "#d06060",
  "ec call": "#ff7733",
  "ec ucall": "#5ccfe6",
  "ec ujmp": "#c2d94c",
  "ec usrcmt": "#fa6e32",
  "ec flow": "#c2d94c",
  "#~highlightPC": "#571a07",
  "#~lineHighlight": "#2B2B2B"
  // '#1B1B1B', if you want darker
};
function ci(i, e, r) {
  const a = i.slice();
  return a[21] = e[r], a[23] = r, a;
}
function fo(i) {
  let e;
  return {
    c() {
      e = k("p"), e.textContent = "Debugger state KO", t(e, "class", "skeleton svelte-hcz1no");
    },
    m(r, a) {
      S(r, e, a);
    },
    p: _,
    d(r) {
      r && U(e);
    }
  };
}
function po(i) {
  let e, r, a = (
    /*local_pc*/
    (i[0] >>> 0).toString(16).padStart(8, "0") + ""
  ), o, s, d, c = [], f = /* @__PURE__ */ new Map(), p = H2(
    /*instructions*/
    i[9]
  );
  const b = (g) => (
    /*instr*/
    g[21].pc
  );
  for (let g = 0; g < p.length; g += 1) {
    let w = ci(i, p, g), x = b(w);
    f.set(x, c[g] = di(x, w));
  }
  return {
    c() {
      e = k("div"), r = Z("Current PC: "), o = Z(a), s = E(), d = k("div");
      for (let g = 0; g < c.length; g += 1)
        c[g].c();
      t(d, "class", "disassembly svelte-hcz1no"), t(
        d,
        "style",
        /*styles*/
        i[10]
      );
    },
    m(g, w) {
      S(g, e, w), n(e, r), n(e, o), S(g, s, w), S(g, d, w);
      for (let x = 0; x < c.length; x += 1)
        c[x] && c[x].m(d, null);
    },
    p(g, w) {
      w & /*local_pc*/
      1 && a !== (a = /*local_pc*/
      (g[0] >>> 0).toString(16).padStart(8, "0") + "") && N0(o, a), w & /*local_pc, instructions*/
      513 && (p = H2(
        /*instructions*/
        g[9]
      ), c = Li(c, w, b, 1, g, p, f, d, Pi, di, null, ci));
    },
    d(g) {
      g && (U(e), U(s), U(d));
      for (let w = 0; w < c.length; w += 1)
        c[w].d();
    }
  };
}
function ho(i) {
  let e;
  return {
    c() {
      e = k("p"), e.textContent = "Fetching data ...", t(e, "class", "skeleton svelte-hcz1no");
    },
    m(r, a) {
      S(r, e, a);
    },
    p: _,
    d(r) {
      r && U(e);
    }
  };
}
function uo(i) {
  let e;
  return {
    c() {
      e = k("p"), e.textContent = "Loading ...", t(e, "class", "skeleton svelte-hcz1no");
    },
    m(r, a) {
      S(r, e, a);
    },
    p: _,
    d(r) {
      r && U(e);
    }
  };
}
function di(i, e) {
  let r, a, o, s, d, c, f, p, b, g, w;
  return {
    key: i,
    first: null,
    c() {
      r = k("div"), a = k("div"), a.textContent = "-", o = E(), s = k("div"), s.textContent = `${/*instr*/
      e[21].pc.toString(16).padStart(8, "0")}`, d = E(), c = k("div"), c.textContent = `${"OP_" + /*instr*/
      e[21].value}`, f = E(), p = k("div"), p.textContent = "-", b = E(), g = k("div"), g.textContent = `; ${/*instr*/
      e[21].value.toString(16).padStart(4, "0")}`, w = E(), t(a, "class", "svelte-hcz1no"), t(s, "class", "svelte-hcz1no"), t(c, "class", "svelte-hcz1no"), t(p, "class", "svelte-hcz1no"), t(g, "class", "svelte-hcz1no"), t(r, "class", "line svelte-hcz1no"), he(
        r,
        "current",
        /*local_pc*/
        e[0] >>> 0 == /*instr*/
        e[21].pc >>> 0
      ), this.first = r;
    },
    m(x, z) {
      S(x, r, z), n(r, a), n(r, o), n(r, s), n(r, d), n(r, c), n(r, f), n(r, p), n(r, b), n(r, g), n(r, w);
    },
    p(x, z) {
      e = x, z & /*local_pc, instructions*/
      513 && he(
        r,
        "current",
        /*local_pc*/
        e[0] >>> 0 == /*instr*/
        e[21].pc >>> 0
      );
    },
    d(x) {
      x && U(r);
    }
  };
}
function go(i) {
  let e, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, j, C, P, D, $, M, h, H;
  f = new io({}), g = new Xa({}), z = new to({}), y = new so({}), P = new yi({});
  function T(R, nt) {
    return (
      /*debugger_state*/
      R[2] === 0 ? uo : (
        /*debugger_state*/
        R[2] === 1 ? ho : (
          /*debugger_state*/
          R[2] === 10 ? po : fo
        )
      )
    );
  }
  let Rt = T(i), N = Rt(i);
  return {
    c() {
      e = k("div"), r = k("div"), a = k("h4"), o = Z("Debugger - "), s = Z(
        /*$state*/
        i[1]
      ), d = E(), c = k("button"), K(f.$$.fragment), p = E(), b = k("button"), K(g.$$.fragment), w = E(), x = k("button"), K(z.$$.fragment), q = E(), m = k("button"), K(y.$$.fragment), j = E(), C = k("button"), K(P.$$.fragment), D = E(), $ = k("div"), N.c(), t(a, "class", "header"), t(c, "class", "toolbar-action"), t(c, "type", "button"), t(c, "title", "Run until"), t(c, "tabindex", "0"), t(c, "id", "btn_forwards_debug"), t(b, "class", "toolbar-action"), t(b, "type", "button"), t(b, "title", "step over"), t(b, "tabindex", "0"), t(b, "id", "btn_step_over_debug"), t(x, "class", "toolbar-action"), t(x, "type", "button"), t(x, "title", "step in"), t(x, "tabindex", "0"), t(x, "id", "btn_step_in_debug"), t(m, "class", "toolbar-action"), t(m, "type", "button"), t(m, "title", "halt"), t(m, "tabindex", "0"), t(m, "id", "btn_close_debug"), t(C, "class", "toolbar-action"), t(C, "type", "button"), t(C, "title", "close"), t(C, "tabindex", "0"), t(C, "id", "btn_close_debug"), t(r, "class", "titlebar"), t($, "class", "contents"), t(e, "class", "debugging-panel view-panel svelte-hcz1no"), he(
        e,
        "visible",
        /*$debugPane*/
        i[3]
      );
    },
    m(R, nt) {
      S(R, e, nt), n(e, r), n(r, a), n(a, o), n(a, s), n(r, d), n(r, c), L(f, c, null), n(r, p), n(r, b), L(g, b, null), n(r, w), n(r, x), L(z, x, null), n(r, q), n(r, m), L(y, m, null), n(r, j), n(r, C), L(P, C, null), n(e, D), n(e, $), N.m($, null), M = !0, h || (H = [
        tt(
          c,
          "click",
          /*doFastForwards*/
          i[7]
        ),
        tt(
          b,
          "click",
          /*doStepOver*/
          i[5]
        ),
        tt(
          x,
          "click",
          /*doStepIn*/
          i[6]
        ),
        tt(
          m,
          "click",
          /*doHalt*/
          i[8]
        ),
        tt(
          C,
          "click",
          /*doClose*/
          i[4]
        )
      ], h = !0);
    },
    p(R, [nt]) {
      (!M || nt & /*$state*/
      2) && N0(
        s,
        /*$state*/
        R[1]
      ), Rt === (Rt = T(R)) && N ? N.p(R, nt) : (N.d(1), N = Rt(R), N && (N.c(), N.m($, null))), (!M || nt & /*$debugPane*/
      8) && he(
        e,
        "visible",
        /*$debugPane*/
        R[3]
      );
    },
    i(R) {
      M || (B(f.$$.fragment, R), B(g.$$.fragment, R), B(z.$$.fragment, R), B(y.$$.fragment, R), B(P.$$.fragment, R), M = !0);
    },
    o(R) {
      Q(f.$$.fragment, R), Q(g.$$.fragment, R), Q(z.$$.fragment, R), Q(y.$$.fragment, R), Q(P.$$.fragment, R), M = !1;
    },
    d(R) {
      R && U(e), F(f), F(g), F(z), F(y), F(P), N.d(), h = !1, Zr(H);
    }
  };
}
function vo(i, e, r) {
  let a, o, s, d, c, f;
  et(i, Zt, (h) => r(1, a = h)), et(i, Z2, (h) => r(13, o = h)), et(i, mi, (h) => r(14, s = h)), et(i, vi, (h) => r(15, d = h)), et(i, cl, (h) => r(16, c = h)), et(i, R2, (h) => r(3, f = h));
  const p = T2(), b = (h) => {
    p("doClose", h), R2.set(!1);
  }, g = (h) => {
    const H = $();
    try {
      c && window.Module.ccall("dumpOneFrame", null, [], []), window.Module.ccall("runOneFrame", null, ["number"], [1]), console.debug("runOneFrame OK - ", H);
    } catch (T) {
      return console.error(T), !1;
    }
    p("doStepOver", h);
  }, w = (h) => {
    p("doStepIn", h);
  }, x = (h) => {
    window.Module.ccall("runFrame", null, [], []), p("doFastForwards", h);
  }, z = (h) => {
    p("doHalt", h);
  };
  let q = null, m = null, y, j = 0, C = [];
  const P = () => {
    if (m && q) {
      r(0, y = q());
      for (let h = 0; h < 30; h++) {
        let H = m(y + h * 2);
        C.push({
          pc: (y >>> 0) + h * 2,
          value: H
        });
      }
      return !0;
    }
    return !1;
  }, D = () => {
    P() ? (console.log(C), r(2, j = 10)) : (console.error("Can't load instructions ..."), r(2, j = -1));
  }, $ = () => m && q ? (r(0, y = q()), ri.set(y), m(y)) : null, M = Object.entries(co).map((h) => `--${h[0].replaceAll(" ", "-").replaceAll(/[^a-zA-Z-]/g, "")}: ${h[1]}`).join("; ");
  return P2(() => {
  }), i.$$.update = () => {
    if (i.$$.dirty & /*$getPC, localGetPC, local_pc*/
    34817 && d !== void 0 && (r(11, q = d), r(0, y = q() >>> 0), ri.set(y)), i.$$.dirty & /*$readMemory2Quick*/
    16384 && s !== void 0 && r(12, m = s), i.$$.dirty & /*localReadMem, localGetPC, $debugging, $state, local_pc*/
    14339 && m && q && o && a === "running") {
      console.log("Ready to ready memory !");
      try {
        r(0, y = q());
        let h = m(y);
        r(2, j = 1), D();
      } catch {
      }
    }
  }, [
    y,
    a,
    j,
    f,
    b,
    g,
    w,
    x,
    z,
    C,
    M,
    q,
    m,
    o,
    s,
    d
  ];
}
class mo extends V {
  constructor(e) {
    super(), Y(this, e, vo, go, A, {});
  }
}
function yo(i) {
  let e, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, j, C, P, D, $, M;
  return r = new Vi({}), p = new Aa({}), g = new ea({}), x = new Ni({}), q = new za({}), q.$on(
    "romChanged",
    /*doRomLoad*/
    i[8]
  ), q.$on(
    "doRun",
    /*doRun*/
    i[7]
  ), q.$on(
    "doDump",
    /*doDump*/
    i[4]
  ), q.$on(
    "doDebug",
    /*doDebug*/
    i[6]
  ), q.$on(
    "doFullscreen",
    /*doFullscreen*/
    i[1]
  ), q.$on(
    "doCopyScreen",
    /*doCopyScreen*/
    i[2]
  ), q.$on(
    "doSaveScreen",
    /*doSaveScreen*/
    i[3]
  ), y = new mo({}), C = new Pa({}), C.$on(
    "doRefresh",
    /*doRefresh*/
    i[5]
  ), $ = new na({}), {
    c() {
      e = k("main"), K(r.$$.fragment), a = E(), o = k("div"), s = k("div"), s.innerHTML = `<img src="${Ai}" alt="RuK Logo" class="svelte-15gznnu"/> <span class="svelte-15gznnu">RuK UI</span>`, d = E(), c = k("div"), f = k("div"), K(p.$$.fragment), b = E(), K(g.$$.fragment), w = E(), K(x.$$.fragment), z = E(), K(q.$$.fragment), m = E(), K(y.$$.fragment), j = E(), K(C.$$.fragment), P = E(), D = k("div"), K($.$$.fragment), t(s, "class", "logo svelte-15gznnu"), he(
        s,
        "compact",
        /*$debugPane*/
        i[0]
      ), t(f, "id", "classpad"), G(f, "--zoomFactor", "1.5"), t(f, "class", "svelte-15gznnu"), t(c, "class", "calc-container svelte-15gznnu"), G(D, "display", "none"), t(o, "class", "container svelte-15gznnu");
    },
    m(h, H) {
      S(h, e, H), L(r, e, null), n(e, a), n(e, o), n(o, s), n(o, d), n(o, c), n(c, f), L(p, f, null), n(c, b), L(g, c, null), n(c, w), L(x, c, null), n(o, z), L(q, o, null), n(o, m), L(y, o, null), n(o, j), L(C, o, null), n(o, P), n(o, D), L($, D, null), M = !0;
    },
    p(h, [H]) {
      (!M || H & /*$debugPane*/
      1) && he(
        s,
        "compact",
        /*$debugPane*/
        h[0]
      );
    },
    i(h) {
      M || (B(r.$$.fragment, h), B(p.$$.fragment, h), B(g.$$.fragment, h), B(x.$$.fragment, h), B(q.$$.fragment, h), B(y.$$.fragment, h), B(C.$$.fragment, h), B($.$$.fragment, h), M = !0);
    },
    o(h) {
      Q(r.$$.fragment, h), Q(p.$$.fragment, h), Q(g.$$.fragment, h), Q(x.$$.fragment, h), Q(q.$$.fragment, h), Q(y.$$.fragment, h), Q(C.$$.fragment, h), Q($.$$.fragment, h), M = !1;
    },
    d(h) {
      h && U(e), F(r), F(p), F(g), F(x), F(q), F(y), F(C), F($);
    }
  };
}
function xo(i, e, r) {
  let a, o, s, d;
  et(i, Zi, (m) => r(10, a = m)), et(i, R2, (m) => r(0, o = m)), et(i, Zt, (m) => r(11, s = m)), et(i, cl, (m) => r(12, d = m)), P2(async () => {
    Ta(), Zt.subscribe((m) => {
      console.log(m);
    }), Ii();
  });
  const c = (m) => {
    window.Module.requestFullscreen(!0, !1);
  }, f = (m) => {
    const y = document.getElementById("canvas");
    y && y.toBlob(function(j) {
      const C = new ClipboardItem({ "image/png": j });
      navigator.clipboard.write([C]).then(() => {
        V2.set("Copied to clipboard !"), setTimeout(
          () => {
            V2.set(null);
          },
          4e3
        );
      }).catch(() => {
      });
    });
  }, p = (m) => {
    const y = document.getElementById("canvas");
    if (y) {
      const j = document.createElement("a");
      j.href = y.toDataURL("image/png"), j.download = "ClassPad_Screen.png", j.click();
    }
  }, b = (m) => {
    d || (cl.set(!0), B2.set(null), window.Module.ccall("dumpOneFrame", null, [], []));
  }, g = (m) => {
    console.log("doRefresh !!"), d || cl.set(!0), B2.set(null), window.Module.ccall("dumpOneFrame", null, [], []);
  }, w = (m) => {
    (s === "loaded" || s === "ready") && (Z2.set(!0), window.Module.ccall("setTrace", null, ["number"], [1]), x()), o || R2.set(!0);
  }, x = async (m) => {
    let y = qi(ei);
    if (y) {
      Zt.set("running");
      try {
        window.Module.ccall("startInterpreter", null, ["string"], [y]);
      } catch (j) {
        D2.set(j), Zt.set("crashed");
      }
    } else
      Zt.set("crashed"), D2.set({
        name: "INVALID_FILE_NAME",
        message: "fileName is empty"
      });
  }, z = async (m) => {
    console.log(m.detail), Zt.set("loading");
    var y = m.detail.target.files[0];
    y && Fa(y, y.name).then(() => {
      console.log(y.name), ei.set(y.name), a ? x() : Zt.set("loaded");
    }).catch((j) => {
      console.error("Error loading file:", j);
    });
  };
  let { ide: q = !0 } = e;
  return i.$$set = (m) => {
    "ide" in m && r(9, q = m.ide);
  }, [
    o,
    c,
    f,
    p,
    b,
    g,
    w,
    x,
    z,
    q
  ];
}
class bo extends V {
  constructor(e) {
    super(), Y(this, e, xo, yo, A, { ide: 9 });
  }
}
window.Module = window.Module || {};
new bo({
  target: document.getElementById("app"),
  props: {
    ide: !1
  }
});
//# sourceMappingURL=ruk.js.map
