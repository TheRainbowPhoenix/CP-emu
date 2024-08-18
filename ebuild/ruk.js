var wi = Object.defineProperty;
var ki = (i, t, r) => t in i ? wi(i, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[t] = r;
var F2 = (i, t, r) => ki(i, typeof t != "symbol" ? t + "" : t, r);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
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
function pt(i, t) {
  for (const r in t) i[r] = t[r];
  return (
    /** @type {T & S} */
    i
  );
}
function pi(i) {
  return i();
}
function J2() {
  return /* @__PURE__ */ Object.create(null);
}
function Zr(i) {
  i.forEach(pi);
}
function hi(i) {
  return typeof i == "function";
}
function A(i, t) {
  return i != i ? t == t : i !== t || i && typeof i == "object" || typeof i == "function";
}
function qi(i) {
  return Object.keys(i).length === 0;
}
function ui(i, ...t) {
  if (i == null) {
    for (const a of t)
      a(void 0);
    return _;
  }
  const r = i.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function _i(i) {
  let t;
  return ui(i, (r) => t = r)(), t;
}
function te(i, t, r) {
  i.$$.on_destroy.push(ui(t, r));
}
function Gi(i, t, r, a) {
  if (i) {
    const o = gi(i, t, r, a);
    return i[0](o);
  }
}
function gi(i, t, r, a) {
  return i[1] && a ? pt(r.ctx.slice(), i[1](a(t))) : r.ctx;
}
function Ui(i, t, r, a) {
  if (i[2] && a) {
    const o = i[2](a(r));
    if (t.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const s = [], d = Math.max(t.dirty.length, o.length);
      for (let c = 0; c < d; c += 1)
        s[c] = t.dirty[c] | o[c];
      return s;
    }
    return t.dirty | o;
  }
  return t.dirty;
}
function zi(i, t, r, a, o, s) {
  if (o) {
    const d = gi(t, r, a, s);
    i.p(d, o);
  }
}
function Si(i) {
  if (i.ctx.length > 32) {
    const t = [], r = i.ctx.length / 32;
    for (let a = 0; a < r; a++)
      t[a] = -1;
    return t;
  }
  return -1;
}
function Nl(i) {
  const t = {};
  for (const r in i) r[0] !== "$" && (t[r] = i[r]);
  return t;
}
function n(i, t) {
  i.appendChild(t);
}
function S(i, t, r) {
  i.insertBefore(t, r || null);
}
function U(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function $i(i, t) {
  for (let r = 0; r < i.length; r += 1)
    i[r] && i[r].d(t);
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
function ee(i, t, r, a) {
  return i.addEventListener(t, r, a), () => i.removeEventListener(t, r, a);
}
function Mi(i) {
  return function(t) {
    return t.preventDefault(), i.call(this, t);
  };
}
function e(i, t, r) {
  r == null ? i.removeAttribute(t) : i.getAttribute(t) !== r && i.setAttribute(t, r);
}
function Zl(i, t) {
  for (const r in t)
    e(i, r, t[r]);
}
function u(i, t, r) {
  i.setAttributeNS("http://www.w3.org/1999/xlink", t, r);
}
function Oi(i) {
  return Array.from(i.childNodes);
}
function N0(i, t) {
  t = "" + t, i.data !== t && (i.data = /** @type {string} */
  t);
}
function G(i, t, r, a) {
  r == null ? i.style.removeProperty(t) : i.style.setProperty(t, r, "");
}
function ht(i, t, r) {
  i.classList.toggle(t, !!r);
}
function Ci(i, t, { bubbles: r = !1, cancelable: a = !1 } = {}) {
  return new CustomEvent(i, { detail: t, bubbles: r, cancelable: a });
}
let Z0;
function I0(i) {
  Z0 = i;
}
function T2() {
  if (!Z0) throw new Error("Function called outside component initialization");
  return Z0;
}
function P2(i) {
  T2().$$.on_mount.push(i);
}
function Ei(i) {
  T2().$$.on_destroy.push(i);
}
function I2() {
  const i = T2();
  return (t, r, { cancelable: a = !1 } = {}) => {
    const o = i.$$.callbacks[t];
    if (o) {
      const s = Ci(
        /** @type {string} */
        t,
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
function ji(i, t) {
  const r = i.$$.callbacks[t.type];
  r && r.slice().forEach((a) => a.call(this, t));
}
const Tl = [], X0 = [];
let Il = [];
const ei = [], Hi = /* @__PURE__ */ Promise.resolve();
let A2 = !1;
function Di() {
  A2 || (A2 = !0, Hi.then(vi));
}
function Y2(i) {
  Il.push(i);
}
const K2 = /* @__PURE__ */ new Set();
let Yl = 0;
function vi() {
  if (Yl !== 0)
    return;
  const i = Z0;
  do {
    try {
      for (; Yl < Tl.length; ) {
        const t = Tl[Yl];
        Yl++, I0(t), Ri(t.$$);
      }
    } catch (t) {
      throw Tl.length = 0, Yl = 0, t;
    }
    for (I0(null), Tl.length = 0, Yl = 0; X0.length; ) X0.pop()();
    for (let t = 0; t < Il.length; t += 1) {
      const r = Il[t];
      K2.has(r) || (K2.add(r), r());
    }
    Il.length = 0;
  } while (Tl.length);
  for (; ei.length; )
    ei.pop()();
  A2 = !1, K2.clear(), I0(i);
}
function Ri(i) {
  if (i.fragment !== null) {
    i.update(), Zr(i.before_update);
    const t = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, t), i.after_update.forEach(Y2);
  }
}
function Bi(i) {
  const t = [], r = [];
  Il.forEach((a) => i.indexOf(a) === -1 ? t.push(a) : r.push(a)), r.forEach((a) => a()), Il = t;
}
const j2 = /* @__PURE__ */ new Set();
let sl;
function Qi() {
  sl = {
    r: 0,
    c: [],
    p: sl
    // parent group
  };
}
function Pi() {
  sl.r || Zr(sl.c), sl = sl.p;
}
function B(i, t) {
  i && i.i && (j2.delete(i), i.i(t));
}
function Q(i, t, r, a) {
  if (i && i.o) {
    if (j2.has(i)) return;
    j2.add(i), sl.c.push(() => {
      j2.delete(i), a && (r && i.d(1), a());
    }), i.o(t);
  } else a && a();
}
function H2(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Li(i, t) {
  i.d(1), t.delete(i.key);
}
function Fi(i, t, r, a, o, s, d, c, f, p, b, g) {
  let w = i.length, x = s.length, z = w;
  const q = {};
  for (; z--; ) q[i[z].key] = z;
  const m = [], y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), C = [];
  for (z = x; z--; ) {
    const M = g(o, s, z), h = r(M);
    let j = d.get(h);
    j ? C.push(() => j.p(M, t)) : (j = p(h, M), j.c()), y.set(h, m[z] = j), h in q && H.set(h, Math.abs(z - q[h]));
  }
  const P = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function $(M) {
    B(M, 1), M.m(c, b), d.set(M.key, M), b = M.first, x--;
  }
  for (; w && x; ) {
    const M = m[x - 1], h = i[w - 1], j = M.key, T = h.key;
    M === h ? (b = M.first, w--, x--) : y.has(T) ? !d.has(j) || P.has(j) ? $(M) : D.has(T) ? w-- : H.get(j) > H.get(T) ? (D.add(j), $(M)) : (P.add(T), w--) : (f(h, d), w--);
  }
  for (; w--; ) {
    const M = i[w];
    y.has(M.key) || f(M, d);
  }
  for (; x; ) $(m[x - 1]);
  return Zr(C), m;
}
function N2(i, t) {
  const r = {}, a = {}, o = { $$scope: 1 };
  let s = i.length;
  for (; s--; ) {
    const d = i[s], c = t[s];
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
function L(i, t, r) {
  const { fragment: a, after_update: o } = i.$$;
  a && a.m(t, r), Y2(() => {
    const s = i.$$.on_mount.map(pi).filter(hi);
    i.$$.on_destroy ? i.$$.on_destroy.push(...s) : Zr(s), i.$$.on_mount = [];
  }), o.forEach(Y2);
}
function F(i, t) {
  const r = i.$$;
  r.fragment !== null && (Bi(r.after_update), Zr(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ki(i, t) {
  i.$$.dirty[0] === -1 && (Tl.push(i), Di(), i.$$.dirty.fill(0)), i.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Y(i, t, r, a, o, s, d = null, c = [-1]) {
  const f = Z0;
  I0(i);
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
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: J2(),
    dirty: c,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  d && d(p.root);
  let b = !1;
  if (p.ctx = r ? r(i, t.props || {}, (g, w, ...x) => {
    const z = x.length ? x[0] : w;
    return p.ctx && o(p.ctx[g], p.ctx[g] = z) && (!p.skip_bound && p.bound[g] && p.bound[g](z), b && Ki(i, g)), w;
  }) : [], p.update(), b = !0, Zr(p.before_update), p.fragment = a ? a(p.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = Oi(t.target);
      p.fragment && p.fragment.l(g), g.forEach(U);
    } else
      p.fragment && p.fragment.c();
    t.intro && B(i.$$.fragment), L(i, t.target, t.anchor), vi();
  }
  I0(f);
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
  $on(t, r) {
    if (!hi(r))
      return _;
    const a = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return a.push(r), () => {
      const o = a.indexOf(r);
      o !== -1 && a.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !qi(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ai = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ai);
const Yi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3clinearGradient%20id='g'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.1'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='h'%3e%3cstop%20offset='0'%20stop-color='%23eb5e06'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.3'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='.2'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.3'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%3e%3cstop%20offset='0'%20stop-color='%23eb8403'/%3e%3cstop%20offset='1'%20stop-color='%23eb8403'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23a'%20id='i'%20x1='12'%20x2='18.8'%20y1='4'%20y2='15.8'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23b'%20id='j'%20x1='20.6'%20x2='14'%20y1='12.3'%20y2='16'%20gradientTransform='rotate(180%2012%20526.2)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23c'%20id='l'%20x1='7'%20x2='11.3'%20y1='1038'%20y2='1042.2'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23d'%20id='k'%20x1='18'%20x2='14.8'%20y1='1039.3'%20y2='1039.3'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='n'%20x1='6'%20x2='10.2'%20y1='1038'%20y2='1042.1'%20gradientTransform='rotate(180%2012%201040.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23f'%20id='m'%20x1='7.5'%20x2='18.2'%20y1='8.8'%20y2='11.7'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23g'%20id='o'%20x1='7.5'%20x2='21.2'%20y1='8.8'%20y2='12.5'%20gradientTransform='translate(0%201028.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23h'%20id='p'%20x1='6.6'%20x2='15.9'%20y1='1038.8'%20y2='1044.5'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='q'%20x1='31.4'%20x2='59.3'%20y1='1037.7'%20y2='1037.7'%20gradientUnits='userSpaceOnUse'/%3e%3c/defs%3e%3cpath%20fill='%23fe9e01'%20d='M2%2012c0-1.4%203.8-8%205-8.7a24%2024%200%200%201%2010%200c1.2.7%205%207.3%205%208.7%200%201.4-3.8%208-5%208.7a24%2024%200%200%201-10%200C5.8%2020%202%2013.4%202%2012z'/%3e%3cpath%20fill='none'%20d='M18%2012a15%2015%200%200%201-3%205.2c-.7.4-5.3.4-6%200A15%2015%200%200%201%206%2012a15%2015%200%200%201%203-5.2c.7-.4%205.3-.4%206%200%20.7.4%203%204.4%203%205.2z'/%3e%3cpath%20fill='url(%23i)'%20fill-rule='evenodd'%20d='M12%202.8a19.6%2019.6%200%200%200-3.7.3c1.7.1%204.3%201%205.5%202A30.3%2030.3%200%200%201%2018%2012c0%201-2.2%204.8-3%205.3l2%203.4a24%2024%200%200%200%205-8.6c0-1.4-3.8-8-5-8.7-.6-.3-2.8-.5-5-.5z'/%3e%3cpath%20fill='url(%23j)'%20fill-rule='evenodd'%20d='M12%201049.6a19.6%2019.6%200%200%200%203.7-.4c-1.7%200-4.3-1-5.5-2a30.3%2030.3%200%200%201-4.2-6.8c0-.9%202.2-4.7%203-5.2l-2-3.5a24%2024%200%200%200-5%208.7c0%201.4%203.8%208%205%208.6.6.4%202.8.6%205%20.6z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23k)'%20d='M18%201040.4a16%2016%200%200%201-3%205.2c-.7.4-5.3.4-6%200a16%2016%200%200%201-3-5.2c0-.9%202.3-4.8%203-5.2.7-.5%205.3-.5%206%200%20.7.4%203%204.3%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23l)'%20d='M9%201035.2c-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23m)'%20d='M9%206.8c-.8.5-3%204.4-3%205.2a30.3%2030.3%200%200%200%202.2%204.3c.7%201.1%201.4%202%202%202.5%201.2%201.1%203.8%202%205.5%202h1l.3-.1c1.2-.7%205-7.3%205-8.7l-4-.1v.1a15%2015%200%200%201-3%205.2%2015%2015%200%200%201-3-5.2%2015%2015%200%200%200-3-5.2z'/%3e%3cpath%20fill='url(%23n)'%20d='M15%201045.6c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23o)'%20stroke='url(%23p)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-opacity='.3'%20stroke-width='.1'%20d='M18%201040.2h0v.2a16%2016%200%200%201-3%205.2%2016%2016%200%200%201-3-5.2c0-.9-2.3-4.8-3-5.2h0s0%200%200%200c-.8.5-3%204.3-3%205.2a30.3%2030.3%200%200%200%202.2%204.3s0%200%200%200%200%200%200%200c.7%201%201.4%202%202%202.5%201.2%201%203.8%202%205.5%202h1l.3-.2'%20transform='translate(0%20-1028.4)'/%3e%3cg%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20fill='%23252127'%20d='M38.5%201038.7q0%20.7-.4%201.3l-.5.7-.7.5-.6.4%202.7%205.4h-2.6l-2.4-5.3h-2.6v5.3H29v-13.4h6.3q1%200%201.6.5l.7.6.5.6q.4.6.4%201.4v2zm-2.3%200v-2.1q-.4-.7-.8-.8h-4v3.7h4l.4-.3.4-.5z'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3cpath%20fill='url(%23q)'%20fill-rule='evenodd'%20d='M31.4%201035.8v3.7h25.9l2-3.7h-28z'%20transform='translate(0%20-1028.4)'/%3e%3cg%20fill='%23252127'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20d='M50.3%201047H48l-.1-.5q-1%20.6-1.4.6h-1.7q-1%200-1.7-.4-.6-.5-1-1.1-.4-.6-.4-1.4v-6.9H44v7l.8.7h1.7l.6-.3.7-.6v-6.8h2.3v7.7l.2%202z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20d='M63.2%201047h-2.9l-4.7-5.6h-.2v5.6H53v-13.4h2.4v5.6h.2l2.4-2.8q1.5-2%202.3-2.8h2.9l-5.6%206.7%202.5%203%203.1%203.7z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3c/svg%3e";
function Vi(i) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" class="svelte-rvpkcl"><defs><filter id="blur"><feGaussianBlur stdDeviation="12"></feGaussianBlur></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad" class="svelte-rvpkcl"><stop stop-color="hsl(105, 69%, 40%)" stop-opacity="1" offset="0%" class="svelte-rvpkcl"></stop><stop stop-color="hsl(105, 69%, 60%)" stop-opacity="1" offset="100%" class="svelte-rvpkcl"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round" filter="url(#blur)"><path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="1.00"></path><path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.96"></path><path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.92"></path><path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.89"></path><path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.85"></path><path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.81"></path><path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.77"></path><path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.73"></path><path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.70"></path><path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.66"></path><path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.62"></path><path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.58"></path><path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.54"></path><path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.51"></path><path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.47"></path><path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.43"></path><path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.39"></path><path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.35"></path><path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.32"></path><path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.28"></path><path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.24"></path><path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.20"></path><path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.16"></path><path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.13"></path><path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.09"></path></g></svg>', e(t, "class", "bg-img svelte-rvpkcl");
    },
    m(r, a) {
      S(r, t, a);
    },
    p: _,
    i: _,
    o: _,
    d(r) {
      r && U(t);
    }
  };
}
class Ti extends V {
  constructor(t) {
    super(), Y(this, t, null, Vi, A, {});
  }
}
function Ii() {
  var i = document.createElement("script");
  i.setAttribute("async", ""), i.setAttribute("type", "text/javascript"), i.setAttribute("src", "calcemu.js"), document.body.appendChild(i);
}
function Ni(i) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = "", e(t, "id", "buttons");
    },
    m(r, a) {
      S(r, t, a);
    },
    p: _,
    i: _,
    o: _,
    d(r) {
      r && U(t);
    }
  };
}
class Zi extends V {
  constructor(t) {
    super(), Y(this, t, null, Ni, A, {});
  }
}
const Vl = [];
function Ye(i, t = _) {
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
    return a.add(p), a.size === 1 && (r = t(o, s) || _), c(i), () => {
      a.delete(p), a.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: s, subscribe: d };
}
const Ze = Ye("empty"), ti = Ye(null), Xi = Ye(!1), D2 = Ye(""), ri = Ye(0), mi = Ye(), yi = Ye(), Z2 = Ye(!1), R2 = Ye(!1), cl = Ye(!1), B2 = Ye(null), V2 = Ye(null);
function Wi(i) {
  let t, r, a;
  return {
    c() {
      t = l("svg"), r = l("path"), a = l("path"), e(r, "fill", "currentColor"), e(r, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), e(r, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, t, s), n(t, r), n(t, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(t);
    }
  };
}
class Ji extends V {
  constructor(t) {
    super(), Y(this, t, null, Wi, A, {});
  }
}
function ni(i) {
  let t, r, a, o, s, d, c = (
    /*$traceback*/
    i[2].name + ""
  ), f, p, b, g = (
    /*$traceback*/
    i[2].message + ""
  ), w, x, z, q;
  r = new Ji({});
  let m = (
    /*$traceback*/
    i[2].hint && li(i)
  );
  return {
    c() {
      t = k("div"), K(r.$$.fragment), a = E(), o = k("pre"), s = Z("            "), d = k("code"), f = Z(c), p = Z(`\r
            `), b = k("code"), w = Z(g), x = Z(`\r
            `), m && m.c(), z = Z(`\r
        `), e(d, "class", "name svelte-s5x38s"), e(b, "class", "message svelte-s5x38s"), e(o, "class", "svelte-s5x38s"), e(t, "class", "bsod svelte-s5x38s");
    },
    m(y, H) {
      S(y, t, H), L(r, t, null), n(t, a), n(t, o), n(o, s), n(o, d), n(d, f), n(o, p), n(o, b), n(b, w), n(o, x), m && m.m(o, null), n(o, z), q = !0;
    },
    p(y, H) {
      (!q || H & /*$traceback*/
      4) && c !== (c = /*$traceback*/
      y[2].name + "") && N0(f, c), (!q || H & /*$traceback*/
      4) && g !== (g = /*$traceback*/
      y[2].message + "") && N0(w, g), /*$traceback*/
      y[2].hint ? m ? m.p(y, H) : (m = li(y), m.c(), m.m(o, z)) : m && (m.d(1), m = null);
    },
    i(y) {
      q || (B(r.$$.fragment, y), q = !0);
    },
    o(y) {
      Q(r.$$.fragment, y), q = !1;
    },
    d(y) {
      y && U(t), F(r), m && m.d();
    }
  };
}
function li(i) {
  let t, r, a;
  return {
    c() {
      t = k("a"), r = Z("Hint"), e(t, "href", a = /*$traceback*/
      i[2].hint), e(t, "target", "_blank");
    },
    m(o, s) {
      S(o, t, s), n(t, r);
    },
    p(o, s) {
      s & /*$traceback*/
      4 && a !== (a = /*$traceback*/
      o[2].hint) && e(t, "href", a);
    },
    d(o) {
      o && U(t);
    }
  };
}
function ea(i) {
  let t, r, a, o, s, d, c = (
    /*crashed*/
    i[1] && ni(i)
  );
  return {
    c() {
      t = k("canvas"), r = E(), c && c.c(), a = Q2(), e(t, "class", "emscripten svelte-s5x38s"), e(t, "id", "canvas"), e(t, "tabindex", "-1");
    },
    m(f, p) {
      S(f, t, p), i[5](t), S(f, r, p), c && c.m(f, p), S(f, a, p), o = !0, s || (d = ee(t, "contextmenu", Mi(
        /*contextmenu_handler*/
        i[4]
      )), s = !0);
    },
    p(f, [p]) {
      /*crashed*/
      f[1] ? c ? (c.p(f, p), p & /*crashed*/
      2 && B(c, 1)) : (c = ni(f), c.c(), B(c, 1), c.m(a.parentNode, a)) : c && (Qi(), Q(c, 1, 1, () => {
        c = null;
      }), Pi());
    },
    i(f) {
      o || (B(c), o = !0);
    },
    o(f) {
      Q(c), o = !1;
    },
    d(f) {
      f && (U(t), U(r), U(a)), i[5](null), c && c.d(f), s = !1, d();
    }
  };
}
function ta(i, t, r) {
  let a, o, s;
  te(i, Ze, (p) => r(3, o = p)), te(i, D2, (p) => r(2, s = p));
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
    ji.call(this, i, p);
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
class ra extends V {
  constructor(t) {
    super(), Y(this, t, ta, ea, A, {});
  }
}
function na(i) {
  let t, r, a, o, s, d, c;
  return {
    c() {
      t = k("figure"), t.innerHTML = '<div class="spinner"></div><center style="margin-top:0.5em"><strong>emscripten</strong></center>', r = E(), a = k("div"), a.textContent = "Downloading...", o = E(), s = k("div"), s.innerHTML = '<progress value="0" max="100" id="progress" hidden=""></progress>', d = E(), c = k("textarea"), G(t, "overflow", "visible"), e(t, "id", "spinner"), e(a, "class", "emscripten"), e(a, "id", "status"), e(s, "class", "emscripten"), e(c, "class", "emscripten"), e(c, "id", "output"), e(c, "rows", "8");
    },
    m(f, p) {
      S(f, t, p), S(f, r, p), S(f, a, p), S(f, o, p), S(f, s, p), S(f, d, p), S(f, c, p);
    },
    p: _,
    i: _,
    o: _,
    d(f) {
      f && (U(t), U(r), U(a), U(o), U(s), U(d), U(c));
    }
  };
}
class la extends V {
  constructor(t) {
    super(), Y(this, t, null, na, A, {});
  }
}
function ia(i) {
  let t, r, a;
  return {
    c() {
      t = l("svg"), r = l("path"), a = l("path"), e(r, "fill", "currentColor"), e(r, "fill-rule", "evenodd"), e(r, "d", "M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22"), e(r, "clip-rule", "evenodd"), e(r, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, t, s), n(t, r), n(t, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(t);
    }
  };
}
class aa extends V {
  constructor(t) {
    super(), Y(this, t, null, ia, A, {});
  }
}
function oa(i) {
  let t, r, a, o;
  return {
    c() {
      t = l("svg"), r = l("path"), a = l("path"), o = l("path"), e(r, "fill", "currentColor"), e(r, "d", "M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"), e(a, "fill", "currentColor"), e(a, "fill-rule", "evenodd"), e(a, "d", "M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"), e(a, "clip-rule", "evenodd"), e(o, "fill", "currentColor"), e(o, "d", "m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859"), e(o, "opacity", "0.4"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      S(s, t, d), n(t, r), n(t, a), n(t, o);
    },
    p: _,
    i: _,
    o: _,
    d(s) {
      s && U(t);
    }
  };
}
class sa extends V {
  constructor(t) {
    super(), Y(this, t, null, oa, A, {});
  }
}
function ca(i) {
  let t, r, a;
  return {
    c() {
      t = l("svg"), r = l("path"), a = l("path"), e(r, "fill", "currentColor"), e(r, "d", "M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"), e(r, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "fill-rule", "evenodd"), e(a, "d", "M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06"), e(a, "clip-rule", "evenodd"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, t, s), n(t, r), n(t, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(t);
    }
  };
}
class da extends V {
  constructor(t) {
    super(), Y(this, t, null, ca, A, {});
  }
}
function fa(i) {
  let t, r, a, o, s;
  return {
    c() {
      t = l("svg"), r = l("path"), a = l("path"), o = l("path"), s = l("path"), e(r, "fill", "currentColor"), e(r, "fill-rule", "evenodd"), e(r, "d", "M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938"), e(r, "clip-rule", "evenodd"), e(r, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06q.333.684.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a4 4 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"), e(o, "fill", "currentColor"), e(o, "d", "M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z"), e(o, "opacity", "0.5"), e(s, "fill", "currentColor"), e(s, "fill-rule", "evenodd"), e(s, "d", "M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75"), e(s, "clip-rule", "evenodd"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24"), e(t, "class", "svelte-1v14ixl"), ht(
        t,
        "active",
        /*active*/
        i[0]
      );
    },
    m(d, c) {
      S(d, t, c), n(t, r), n(t, a), n(t, o), n(t, s);
    },
    p(d, [c]) {
      c & /*active*/
      1 && ht(
        t,
        "active",
        /*active*/
        d[0]
      );
    },
    i: _,
    o: _,
    d(d) {
      d && U(t);
    }
  };
}
function pa(i, t, r) {
  let { active: a = !1 } = t;
  return i.$$set = (o) => {
    "active" in o && r(0, a = o.active);
  }, [a];
}
let ha = class extends V {
  constructor(t) {
    super(), Y(this, t, pa, fa, A, { active: 0 });
  }
};
function ua(i) {
  let t, r, a, o, s, d;
  return {
    c() {
      t = l("svg"), r = l("g"), a = l("path"), o = l("path"), s = l("path"), d = l("path"), e(a, "d", "M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"), e(a, "opacity", "0.5"), e(o, "stroke-linecap", "round"), e(o, "stroke-linejoin", "round"), e(o, "d", "M12.429 10L11 12h2l-1.429 2"), e(s, "d", "M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"), e(d, "stroke-linecap", "round"), e(d, "d", "M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"), e(d, "opacity", "0.5"), e(r, "fill", "none"), e(r, "stroke", "currentColor"), e(r, "stroke-width", "1.5"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(c, f) {
      S(c, t, f), n(t, r), n(r, a), n(r, o), n(r, s), n(r, d);
    },
    p: _,
    i: _,
    o: _,
    d(c) {
      c && U(t);
    }
  };
}
class ga extends V {
  constructor(t) {
    super(), Y(this, t, null, ua, A, {});
  }
}
function va(i) {
  let t, r, a;
  return {
    c() {
      t = l("svg"), r = l("path"), a = l("path"), e(r, "fill", "currentColor"), e(r, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"), e(r, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "fill-rule", "evenodd"), e(a, "d", "M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0"), e(a, "clip-rule", "evenodd"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, t, s), n(t, r), n(t, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(t);
    }
  };
}
class ma extends V {
  constructor(t) {
    super(), Y(this, t, null, va, A, {});
  }
}
function ya(i) {
  let t, r, a;
  return {
    c() {
      t = l("svg"), r = l("path"), a = l("path"), e(r, "fill", "currentColor"), e(r, "fill-rule", "evenodd"), e(r, "d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"), e(r, "clip-rule", "evenodd"), e(r, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, t, s), n(t, r), n(t, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(t);
    }
  };
}
class xa extends V {
  constructor(t) {
    super(), Y(this, t, null, ya, A, {});
  }
}
function ba(i) {
  let t, r, a, o, s;
  const d = (
    /*#slots*/
    i[4].default
  ), c = Gi(
    d,
    i,
    /*$$scope*/
    i[3],
    null
  );
  return {
    c() {
      t = k("div"), r = k("div"), a = E(), c && c.c(), e(r, "class", "tip svelte-hgj5m"), e(t, "class", o = "popover " + /*visible*/
      (i[0] ? "visible" : "") + " svelte-hgj5m"), G(
        t,
        "--x",
        /*position*/
        i[2].x + "px"
      ), G(
        t,
        "--y",
        /*position*/
        i[2].y + "px"
      );
    },
    m(f, p) {
      S(f, t, p), n(t, r), n(t, a), c && c.m(t, null), i[5](t), s = !0;
    },
    p(f, [p]) {
      c && c.p && (!s || p & /*$$scope*/
      8) && zi(
        c,
        d,
        f,
        /*$$scope*/
        f[3],
        s ? Ui(
          d,
          /*$$scope*/
          f[3],
          p,
          null
        ) : Si(
          /*$$scope*/
          f[3]
        ),
        null
      ), (!s || p & /*visible*/
      1 && o !== (o = "popover " + /*visible*/
      (f[0] ? "visible" : "") + " svelte-hgj5m")) && e(t, "class", o), (!s || p & /*position*/
      4) && G(
        t,
        "--x",
        /*position*/
        f[2].x + "px"
      ), (!s || p & /*position*/
      4) && G(
        t,
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
      f && U(t), c && c.d(f), i[5](null);
    }
  };
}
function wa(i, t, r) {
  let { $$slots: a = {}, $$scope: o } = t, s, { visible: d = !1 } = t, c, f = { x: 0, y: 0 };
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
  constructor(t) {
    super(), Y(this, t, wa, ba, A, { visible: 0 });
  }
}
function ka(i) {
  let t;
  return {
    c() {
      t = Z("Start by picking a BIN program");
    },
    m(r, a) {
      S(r, t, a);
    },
    d(r) {
      r && U(t);
    }
  };
}
function qa(i) {
  let t;
  return {
    c() {
      t = Z(
        /*$copyScreenFeedback*/
        i[8]
      );
    },
    m(r, a) {
      S(r, t, a);
    },
    p(r, a) {
      a & /*$copyScreenFeedback*/
      256 && N0(
        t,
        /*$copyScreenFeedback*/
        r[8]
      );
    },
    d(r) {
      r && U(t);
    }
  };
}
function _a(i) {
  let t;
  return {
    c() {
      t = Z("Check why it crashed here");
    },
    m(r, a) {
      S(r, t, a);
    },
    d(r) {
      r && U(t);
    }
  };
}
function Ga(i) {
  let t;
  return {
    c() {
      t = Z("Now let's start the program");
    },
    m(r, a) {
      S(r, t, a);
    },
    d(r) {
      r && U(t);
    }
  };
}
function Ua(i) {
  let t, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, H, C, P, D, $, M, h, j, T, Re, N, R, ne, J, le, Xe, Ve, ut, Kn, Te, We, ie, Ie, Be, Xr, Wr;
  return a = new E2({
    props: {
      visible: (
        /*loadHint*/
        i[7]
      ),
      $$slots: { default: [ka] },
      $$scope: { ctx: i }
    }
  }), s = new aa({}), w = new E2({
    props: {
      visible: (
        /*$copyScreenFeedback*/
        i[8] !== null
      ),
      $$slots: { default: [qa] },
      $$scope: { ctx: i }
    }
  }), z = new sa({}), y = new da({}), $ = new ha({ props: { active: (
    /*$debugging*/
    i[1]
  ) } }), T = new E2({
    props: {
      visible: (
        /*crashedHint*/
        i[2] && !/*$tracing*/
        i[9]
      ),
      $$slots: { default: [_a] },
      $$scope: { ctx: i }
    }
  }), N = new ga({}), le = new E2({
    props: {
      visible: (
        /*loaded*/
        i[6] && !/*$debugging*/
        i[1]
      ),
      $$slots: { default: [Ga] },
      $$scope: { ctx: i }
    }
  }), Ve = new xa({}), Ie = new ma({}), {
    c() {
      t = k("div"), r = k("button"), K(a.$$.fragment), o = E(), K(s.$$.fragment), d = E(), c = k("input"), f = E(), p = k("div"), b = E(), g = k("button"), K(w.$$.fragment), x = E(), K(z.$$.fragment), q = E(), m = k("button"), K(y.$$.fragment), H = E(), C = k("div"), P = E(), D = k("button"), K($.$$.fragment), h = E(), j = k("button"), K(T.$$.fragment), Re = E(), K(N.$$.fragment), ne = E(), J = k("button"), K(le.$$.fragment), Xe = E(), K(Ve.$$.fragment), Kn = E(), Te = k("div"), We = E(), ie = k("button"), K(Ie.$$.fragment), e(c, "type", "file"), e(c, "id", "fileInput"), G(c, "display", "none"), e(r, "class", "toolbar-action"), e(r, "type", "button"), e(r, "tabindex", "0"), e(r, "id", "btn_pickFile"), e(p, "class", "separator"), e(p, "role", "separator"), e(p, "data-orientation", "horizontal"), e(p, "aria-orientation", "horizontal"), e(g, "class", "toolbar-action"), e(g, "type", "button"), e(g, "tabindex", "0"), e(g, "id", "btn_copyScreen"), e(m, "class", "toolbar-action"), e(m, "type", "button"), e(m, "tabindex", "0"), e(m, "id", "btn_saveScreen"), e(C, "class", "separator"), e(C, "role", "separator"), e(C, "data-orientation", "horizontal"), e(C, "aria-orientation", "horizontal"), e(D, "class", "toolbar-action"), e(D, "type", "button"), e(D, "tabindex", "0"), e(D, "id", "btn_debug"), D.disabled = M = !/*loaded*/
      i[6] && /*running*/
      i[5] && !/*isDebug*/
      i[4], e(j, "class", "toolbar-action"), e(j, "type", "button"), e(j, "tabindex", "0"), e(j, "id", "btn_dump"), j.disabled = R = !/*loaded*/
      i[6] && !/*crashed*/
      i[0] && !/*running*/
      i[5], e(J, "class", "toolbar-action"), e(J, "type", "button"), e(J, "tabindex", "0"), e(J, "id", "btn_run"), J.disabled = ut = !/*loaded*/
      i[6], e(Te, "class", "separator"), e(Te, "role", "separator"), e(Te, "data-orientation", "horizontal"), e(Te, "aria-orientation", "horizontal"), e(ie, "class", "toolbar-action"), e(ie, "type", "button"), e(ie, "tabindex", "0"), e(ie, "id", "btn_fullscreen"), e(t, "class", "toolbar");
    },
    m(O, I) {
      S(O, t, I), n(t, r), L(a, r, null), n(r, o), L(s, r, null), n(r, d), n(r, c), i[19](c), n(t, f), n(t, p), n(t, b), n(t, g), L(w, g, null), n(g, x), L(z, g, null), n(t, q), n(t, m), L(y, m, null), n(t, H), n(t, C), n(t, P), n(t, D), L($, D, null), n(t, h), n(t, j), L(T, j, null), n(j, Re), L(N, j, null), n(t, ne), n(t, J), L(le, J, null), n(J, Xe), L(Ve, J, null), n(t, Kn), n(t, Te), n(t, We), n(t, ie), L(Ie, ie, null), Be = !0, Xr || (Wr = [
        ee(
          c,
          "change",
          /*handleFile*/
          i[11]
        ),
        ee(
          r,
          "click",
          /*pickFile*/
          i[10]
        ),
        ee(
          g,
          "click",
          /*doCopyScreen*/
          i[12]
        ),
        ee(
          m,
          "click",
          /*doSaveScreen*/
          i[13]
        ),
        ee(
          D,
          "click",
          /*doDebug*/
          i[17]
        ),
        ee(
          j,
          "click",
          /*doDump*/
          i[16]
        ),
        ee(
          J,
          "click",
          /*doRun*/
          i[14]
        ),
        ee(
          ie,
          "click",
          /*doFullscreen*/
          i[15]
        )
      ], Xr = !0);
    },
    p(O, [I]) {
      const gt = {};
      I & /*loadHint*/
      128 && (gt.visible = /*loadHint*/
      O[7]), I & /*$$scope*/
      4194304 && (gt.$$scope = { dirty: I, ctx: O }), a.$set(gt);
      const Jr = {};
      I & /*$copyScreenFeedback*/
      256 && (Jr.visible = /*$copyScreenFeedback*/
      O[8] !== null), I & /*$$scope, $copyScreenFeedback*/
      4194560 && (Jr.$$scope = { dirty: I, ctx: O }), w.$set(Jr);
      const An = {};
      I & /*$debugging*/
      2 && (An.active = /*$debugging*/
      O[1]), $.$set(An), (!Be || I & /*loaded, running, isDebug*/
      112 && M !== (M = !/*loaded*/
      O[6] && /*running*/
      O[5] && !/*isDebug*/
      O[4])) && (D.disabled = M);
      const vt = {};
      I & /*crashedHint, $tracing*/
      516 && (vt.visible = /*crashedHint*/
      O[2] && !/*$tracing*/
      O[9]), I & /*$$scope*/
      4194304 && (vt.$$scope = { dirty: I, ctx: O }), T.$set(vt), (!Be || I & /*loaded, crashed, running*/
      97 && R !== (R = !/*loaded*/
      O[6] && !/*crashed*/
      O[0] && !/*running*/
      O[5])) && (j.disabled = R);
      const en = {};
      I & /*loaded, $debugging*/
      66 && (en.visible = /*loaded*/
      O[6] && !/*$debugging*/
      O[1]), I & /*$$scope*/
      4194304 && (en.$$scope = { dirty: I, ctx: O }), le.$set(en), (!Be || I & /*loaded*/
      64 && ut !== (ut = !/*loaded*/
      O[6])) && (J.disabled = ut);
    },
    i(O) {
      Be || (B(a.$$.fragment, O), B(s.$$.fragment, O), B(w.$$.fragment, O), B(z.$$.fragment, O), B(y.$$.fragment, O), B($.$$.fragment, O), B(T.$$.fragment, O), B(N.$$.fragment, O), B(le.$$.fragment, O), B(Ve.$$.fragment, O), B(Ie.$$.fragment, O), Be = !0);
    },
    o(O) {
      Q(a.$$.fragment, O), Q(s.$$.fragment, O), Q(w.$$.fragment, O), Q(z.$$.fragment, O), Q(y.$$.fragment, O), Q($.$$.fragment, O), Q(T.$$.fragment, O), Q(N.$$.fragment, O), Q(le.$$.fragment, O), Q(Ve.$$.fragment, O), Q(Ie.$$.fragment, O), Be = !1;
    },
    d(O) {
      O && U(t), F(a), F(s), i[19](null), F(w), F(z), F(y), F($), F(T), F(N), F(le), F(Ve), F(Ie), Xr = !1, Zr(Wr);
    }
  };
}
function za(i, t, r) {
  let a, o, s, d, c, f, p, b, g;
  te(i, Z2, (h) => r(1, f = h)), te(i, Ze, (h) => r(18, p = h)), te(i, V2, (h) => r(8, b = h)), te(i, cl, (h) => r(9, g = h));
  const w = () => {
    z.click();
  };
  let x = !1, z;
  const q = I2(), m = (h) => {
    q("romChanged", h);
  }, y = (h) => {
    q("doCopyScreen", h);
  }, H = (h) => {
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
    H,
    C,
    P,
    D,
    $,
    p,
    M
  ];
}
class Sa extends V {
  constructor(t) {
    super(), Y(this, t, za, Ua, A, {});
  }
}
function $a(i) {
  let t, r, a, o;
  return {
    c() {
      t = l("svg"), r = l("g"), a = l("path"), o = l("path"), e(a, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"), e(a, "opacity", "0.5"), e(o, "stroke-linecap", "round"), e(o, "d", "m14.5 9.5l-5 5m0-5l5 5"), e(r, "fill", "none"), e(r, "stroke", "currentColor"), e(r, "stroke-width", "1.5"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      S(s, t, d), n(t, r), n(r, a), n(r, o);
    },
    p: _,
    i: _,
    o: _,
    d(s) {
      s && U(t);
    }
  };
}
class xi extends V {
  constructor(t) {
    super(), Y(this, t, null, $a, A, {});
  }
}
function Ma(i) {
  let t, r, a;
  return {
    c() {
      t = l("svg"), r = l("path"), a = l("path"), e(r, "fill", "currentColor"), e(r, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), e(r, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M12.01 5.25a6.59 6.59 0 0 0-6.55 5.833H5a.75.75 0 0 0-.53 1.281l1.168 1.167a.75.75 0 0 0 1.06 0l1.169-1.167a.75.75 0 0 0-.53-1.28h-.364A5.09 5.09 0 0 1 12.01 6.75a5.08 5.08 0 0 1 3.838 1.743a.75.75 0 1 0 1.13-.986A6.58 6.58 0 0 0 12.01 5.25m6.352 5.22a.75.75 0 0 0-1.06 0l-1.168 1.166a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-3.839-1.743a.75.75 0 0 0-1.13.987a6.58 6.58 0 0 0 4.969 2.256a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      S(o, t, s), n(t, r), n(t, a);
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && U(t);
    }
  };
}
class Oa extends V {
  constructor(t) {
    super(), Y(this, t, null, Ma, A, {});
  }
}
function Ca(i) {
  let t, r, a;
  return {
    c() {
      t = l("g"), r = l("path"), a = l("path"), e(r, "d", "M22 5.814v.69c0 1.038 0 1.557-.26 1.987s-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281s-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69"), e(a, "d", "M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815"), e(a, "opacity", "0.5"), e(t, "fill", "none"), e(t, "stroke", "currentColor"), e(t, "stroke-width", "1.5");
    },
    m(o, s) {
      S(o, t, s), n(t, r), n(t, a);
    },
    d(o) {
      o && U(t);
    }
  };
}
function Ea(i) {
  let t, r;
  return {
    c() {
      t = l("path"), r = l("path"), e(t, "fill", "currentColor"), e(t, "fill-rule", "evenodd"), e(t, "d", "M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3"), e(t, "clip-rule", "evenodd"), e(r, "fill", "currentColor"), e(r, "d", "M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988"), e(r, "opacity", "0.5");
    },
    m(a, o) {
      S(a, t, o), S(a, r, o);
    },
    d(a) {
      a && (U(t), U(r));
    }
  };
}
function ja(i) {
  let t;
  function r(s, d) {
    return (
      /*on*/
      s[0] ? Ea : Ca
    );
  }
  let a = r(i), o = a(i);
  return {
    c() {
      t = l("svg"), o.c(), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      S(s, t, d), o.m(t, null);
    },
    p(s, [d]) {
      a !== (a = r(s)) && (o.d(1), o = a(s), o && (o.c(), o.m(t, null)));
    },
    i: _,
    o: _,
    d(s) {
      s && U(t), o.d();
    }
  };
}
function Ha(i, t, r) {
  let { on: a = !1 } = t;
  return i.$$set = (o) => {
    "on" in o && r(0, a = o.on);
  }, [a];
}
class Da extends V {
  constructor(t) {
    super(), Y(this, t, Ha, ja, A, { on: 0 });
  }
}
function ii(i, t, r) {
  const a = i.slice();
  a[10] = t[r], a[13] = r;
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
function Ra(i) {
  let t;
  return {
    c() {
      t = k("p"), t.textContent = "Loading ...";
    },
    m(r, a) {
      S(r, t, a);
    },
    p: _,
    d(r) {
      r && U(t);
    }
  };
}
function Ba(i) {
  let t = (
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
      2 && A(t, t = /*filtered*/
      o[1]) ? (a.d(1), a = si(o), a.c(), a.m(r.parentNode, r)) : a.p(o, s);
    },
    d(o) {
      o && U(r), a.d(o);
    }
  };
}
function ai(i) {
  let t, r, a = (
    /*label*/
    i[11] + ""
  ), o, s, d, c, f;
  return {
    c() {
      t = k("div"), r = k("label"), o = Z(a), s = E(), d = k("input"), f = E(), e(r, "for", "reg_" + /*i*/
      i[13]), e(
        r,
        "title",
        /*label*/
        i[11]
      ), e(r, "class", "svelte-1l9tfs5"), e(d, "type", "text"), e(d, "name", "reg_" + /*i*/
      i[13]), d.value = c = /*reg*/
      i[10].toString(16).toUpperCase(), d.readOnly = !0, e(d, "class", "svelte-1l9tfs5"), e(t, "class", "row svelte-1l9tfs5");
    },
    m(p, b) {
      S(p, t, b), n(t, r), n(r, o), n(t, s), n(t, d), n(t, f);
    },
    p(p, b) {
      b & /*dump*/
      1 && c !== (c = /*reg*/
      p[10].toString(16).toUpperCase()) && d.value !== c && (d.value = c);
    },
    d(p) {
      p && U(t);
    }
  };
}
function oi(i) {
  let t = !/*filtered*/
  i[1] || /*filtered_names*/
  i[4].includes(
    /*label*/
    i[11]
  ), r, a = t && ai(i);
  return {
    c() {
      a && a.c(), r = Q2();
    },
    m(o, s) {
      a && a.m(o, s), S(o, r, s);
    },
    p(o, s) {
      s & /*filtered*/
      2 && (t = !/*filtered*/
      o[1] || /*filtered_names*/
      o[4].includes(
        /*label*/
        o[11]
      )), t ? a ? a.p(o, s) : (a = ai(o), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null);
    },
    d(o) {
      o && U(r), a && a.d(o);
    }
  };
}
function si(i) {
  let t, r = H2(
    /*dump*/
    i[0].registers
  ), a = [];
  for (let o = 0; o < r.length; o += 1)
    a[o] = oi(ii(i, r, o));
  return {
    c() {
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      t = Q2();
    },
    m(o, s) {
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(o, s);
      S(o, t, s);
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
          a[d] ? a[d].p(c, s) : (a[d] = oi(c), a[d].c(), a[d].m(t.parentNode, t));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = r.length;
      }
    },
    d(o) {
      o && U(t), $i(a, o);
    }
  };
}
function Qa(i) {
  let t, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, H;
  d = new Da({ props: { on: (
    /*filtered*/
    i[1]
  ) } }), p = new Oa({}), w = new xi({});
  function C($, M) {
    return (
      /*dump*/
      $[0] ? Ba : Ra
    );
  }
  let P = C(i), D = P(i);
  return {
    c() {
      t = k("div"), r = k("div"), a = k("h4"), a.textContent = "Registers", o = E(), s = k("button"), K(d.$$.fragment), c = E(), f = k("button"), K(p.$$.fragment), b = E(), g = k("button"), K(w.$$.fragment), x = E(), z = k("div"), q = k("div"), D.c(), e(a, "class", "header"), e(s, "class", "toolbar-action"), e(s, "type", "button"), e(s, "tabindex", "0"), e(s, "id", "btn_filter_trace"), e(f, "class", "toolbar-action"), e(f, "type", "button"), e(f, "tabindex", "0"), e(f, "id", "btn_refresh_trace"), e(g, "class", "toolbar-action"), e(g, "type", "button"), e(g, "tabindex", "0"), e(g, "id", "btn_close_trace"), e(r, "class", "titlebar"), e(q, "class", "registers svelte-1l9tfs5"), e(z, "class", "contents svelte-1l9tfs5"), e(t, "class", "tracing-panel view-panel svelte-1l9tfs5"), ht(
        t,
        "visible",
        /*$tracing*/
        i[2]
      );
    },
    m($, M) {
      S($, t, M), n(t, r), n(r, a), n(r, o), n(r, s), L(d, s, null), n(r, c), n(r, f), L(p, f, null), n(r, b), n(r, g), L(w, g, null), n(t, x), n(t, z), n(z, q), D.m(q, null), m = !0, y || (H = [
        ee(
          s,
          "click",
          /*doFilter*/
          i[5]
        ),
        ee(
          f,
          "click",
          /*doRefresh*/
          i[6]
        ),
        ee(
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
      4) && ht(
        t,
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
      $ && U(t), F(d), F(p), F(w), D.d(), y = !1, Zr(H);
    }
  };
}
function Pa(i, t, r) {
  let a;
  te(i, cl, (x) => r(2, a = x));
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
  Ei(() => {
    c();
  });
  let f = !0;
  const p = (x) => {
    r(1, f = !f);
  }, b = I2();
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
class La extends V {
  constructor(t) {
    super(), Y(this, t, Pa, Qa, A, {});
  }
}
function Fa(i, t, r) {
  var a = new FileReader();
  a.onload = function(o) {
    if (o.target && o.target.result) {
      var s = new Uint8Array(o.target.result);
      window.Module.FS.analyzePath(t).exists && window.Module.FS.unlink(t), window.Module.FS.createDataFile("/", t, s, !0, !0), console.log(`${t} loaded into the Emscripten filesystem.`), r(null);
    } else
      r("target is empty");
  }, a.onerror = function(o) {
    r(o);
  }, a.readAsArrayBuffer(i);
}
function Ka(i, t) {
  return new Promise((r, a) => {
    Fa(i, t, (o) => {
      o ? a(o) : r(() => {
      });
    });
  });
}
function Aa(i) {
  let t, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, H, C, P, D, $, M, h, j, T, Re, N, R, ne, J, le, Xe, Ve, ut, Kn, Te, We, ie, Ie, Be, Xr, Wr, O, I, gt, Jr, An, vt, en, W0, Xl, J0, Wl, dl, Jl, e0, t0, fl, r0, n0, l0, Yn, e2, t2, r2, n2, tn, l2, i2, a2, o2, s2, i0, c2, a0, Vn, d2, f2, p2, o0, pl, h2, s0, c0, hl, u2, d0, f0, p0, g2, h0, u0, v2, g0, ul, m2, v0, y2, Je, x2, b2, w2, k2, q2, _2, G2, mt, yt, xt, bt, wt, kt, qt, _t, Gt, Ut, zt, St, $t, Mt, Ot, Ct, Et, jt, Ht, Dt, Rt, Bt, Qt, Pt, Lt, Ft, Kt, At, Yt, Vt, Tt, It, Nt, Zt, Xt, Wt, Jt, e1, t1, r1, n1, l1, i1, a1, o1, s1, c1, d1, f1, p1, h1, u1, g1, v1, m1, y1, x1, b1, w1, k1, q1, _1, G1, U1, et, tt, rt, z1, S1, $1, M1, O1, C1, E1, j1, H1, D1, R1, B1, Q1, P1, L1, F1, K1, A1, Y1, V1, T1, I1, N1, Z1, X1, W1, J1, er, tr, rr, nr, lr, ir, ar, Qe, Tn, m0, y0, or, re, gl, x0, vl, In, Pe, Le, Fe, Ke, nt, lt, it, rn, ae, sr, b0, U2, z2, S2, nn, $2, v, w0, k0, q0, ml, yl, Nn, oe, cr, _0, ln, se, dr, G0, an, ce, fr, U0, on, de, pr, z0, sn, fe, hr, S0, cn, pe, ur, $0, dn, he, gr, M0, fn, ue, vr, O0, pn, ge, mr, C0, hn, ve, yr, E0, un, me, xr, j0, gn, ye, br, H0, vn, xe, wr, D0, mn, be, kr, R0, yn, we, qr, B0, xn, ke, _r, Q0, bn, qe, Gr, P0, M2, O2, C2, Ur, zr, Sr, $r, Ae, at, ot, st, L0, Zn, _e, Mr, Xn, Ge, Or, Wn, Ue, Cr, Jn, ze, Er, el, Se, jr, tl, $e, Hr, rl, Me, Dr, nl, Oe, Rr, ct, ll, Ce, Br, il, Ee, Qr, al, je, Pr, ol, He, Lr, xl, wn, bl, Fr, De, kn, X2, W2, wl, qn, kl, _n, ql, Gn, _l, Un, Gl, zn, Ul, Sn, zl, $n, Sl, Mn, $l, On, Ml, Kr, F0, Ne, Ol, Ar, Cl, Cn, El, En, jl, jn, Hl, Yr, Dl, Vr, Rl, Tr, Bl, Hn, Ql, Dn, Pl, Rn, Ll, Bn, Fl, Qn, Kl, Pn, Ln, Ir, Fn, Nr, X, W, Al, K0, A0, dt, Y0, V0, T0, ft;
  return {
    c() {
      t = l("svg"), r = l("defs"), a = l("linearGradient"), o = l("stop"), s = l("stop"), d = l("stop"), c = l("stop"), f = l("linearGradient"), p = l("stop"), b = l("stop"), g = l("stop"), w = l("stop"), x = l("stop"), z = l("linearGradient"), q = l("stop"), m = l("stop"), y = l("stop"), H = l("stop"), C = l("linearGradient"), P = l("stop"), D = l("stop"), $ = l("stop"), M = l("stop"), h = l("stop"), j = l("linearGradient"), T = l("stop"), Re = l("stop"), N = l("stop"), R = l("stop"), ne = l("linearGradient"), J = l("stop"), le = l("stop"), Xe = l("linearGradient"), Ve = l("stop"), ut = l("stop"), Kn = l("stop"), Te = l("stop"), We = l("linearGradient"), ie = l("stop"), Ie = l("stop"), Be = l("stop"), Xr = l("stop"), Wr = l("linearGradient"), O = l("stop"), I = l("stop"), gt = l("linearGradient"), Jr = l("stop"), An = l("stop"), vt = l("linearGradient"), en = l("stop"), W0 = l("stop"), Xl = l("linearGradient"), J0 = l("stop"), Wl = l("stop"), dl = l("linearGradient"), Jl = l("stop"), e0 = l("stop"), t0 = l("stop"), fl = l("linearGradient"), r0 = l("stop"), n0 = l("stop"), l0 = l("stop"), Yn = l("linearGradient"), e2 = l("stop"), t2 = l("stop"), r2 = l("stop"), n2 = l("stop"), tn = l("linearGradient"), l2 = l("stop"), i2 = l("stop"), a2 = l("stop"), o2 = l("stop"), s2 = l("stop"), i0 = l("linearGradient"), c2 = l("stop"), a0 = l("stop"), Vn = l("linearGradient"), d2 = l("stop"), f2 = l("stop"), p2 = l("stop"), o0 = l("stop"), pl = l("linearGradient"), h2 = l("stop"), s0 = l("stop"), c0 = l("stop"), hl = l("linearGradient"), u2 = l("stop"), d0 = l("stop"), f0 = l("stop"), p0 = l("linearGradient"), g2 = l("stop"), h0 = l("stop"), u0 = l("linearGradient"), v2 = l("stop"), g0 = l("stop"), ul = l("linearGradient"), m2 = l("stop"), v0 = l("stop"), y2 = l("stop"), Je = l("linearGradient"), x2 = l("stop"), b2 = l("stop"), w2 = l("stop"), k2 = l("stop"), q2 = l("stop"), _2 = l("stop"), G2 = l("stop"), mt = l("linearGradient"), yt = l("linearGradient"), xt = l("linearGradient"), bt = l("linearGradient"), wt = l("linearGradient"), kt = l("linearGradient"), qt = l("linearGradient"), _t = l("linearGradient"), Gt = l("linearGradient"), Ut = l("linearGradient"), zt = l("linearGradient"), St = l("linearGradient"), $t = l("linearGradient"), Mt = l("linearGradient"), Ot = l("linearGradient"), Ct = l("linearGradient"), Et = l("linearGradient"), jt = l("linearGradient"), Ht = l("linearGradient"), Dt = l("linearGradient"), Rt = l("linearGradient"), Bt = l("linearGradient"), Qt = l("linearGradient"), Pt = l("linearGradient"), Lt = l("linearGradient"), Ft = l("linearGradient"), Kt = l("linearGradient"), At = l("linearGradient"), Yt = l("linearGradient"), Vt = l("linearGradient"), Tt = l("linearGradient"), It = l("linearGradient"), Nt = l("linearGradient"), Zt = l("linearGradient"), Xt = l("linearGradient"), Wt = l("linearGradient"), Jt = l("linearGradient"), e1 = l("linearGradient"), t1 = l("linearGradient"), r1 = l("linearGradient"), n1 = l("linearGradient"), l1 = l("linearGradient"), i1 = l("linearGradient"), a1 = l("linearGradient"), o1 = l("linearGradient"), s1 = l("linearGradient"), c1 = l("linearGradient"), d1 = l("linearGradient"), f1 = l("linearGradient"), p1 = l("linearGradient"), h1 = l("linearGradient"), u1 = l("linearGradient"), g1 = l("linearGradient"), v1 = l("linearGradient"), m1 = l("linearGradient"), y1 = l("linearGradient"), x1 = l("linearGradient"), b1 = l("linearGradient"), w1 = l("linearGradient"), k1 = l("linearGradient"), q1 = l("linearGradient"), _1 = l("linearGradient"), G1 = l("linearGradient"), U1 = l("linearGradient"), et = l("linearGradient"), tt = l("linearGradient"), rt = l("linearGradient"), z1 = l("linearGradient"), S1 = l("linearGradient"), $1 = l("linearGradient"), M1 = l("linearGradient"), O1 = l("linearGradient"), C1 = l("linearGradient"), E1 = l("linearGradient"), j1 = l("linearGradient"), H1 = l("linearGradient"), D1 = l("linearGradient"), R1 = l("linearGradient"), B1 = l("linearGradient"), Q1 = l("linearGradient"), P1 = l("linearGradient"), L1 = l("linearGradient"), F1 = l("linearGradient"), K1 = l("linearGradient"), A1 = l("linearGradient"), Y1 = l("linearGradient"), V1 = l("linearGradient"), T1 = l("linearGradient"), I1 = l("linearGradient"), N1 = l("linearGradient"), Z1 = l("linearGradient"), X1 = l("linearGradient"), W1 = l("linearGradient"), J1 = l("linearGradient"), er = l("linearGradient"), tr = l("linearGradient"), rr = l("linearGradient"), nr = l("linearGradient"), lr = l("linearGradient"), ir = l("linearGradient"), ar = l("linearGradient"), Qe = l("pattern"), Tn = l("rect"), m0 = l("path"), y0 = l("path"), or = l("linearGradient"), re = l("g"), gl = l("path"), x0 = l("path"), vl = l("path"), In = l("path"), Pe = l("rect"), Le = l("rect"), Fe = l("rect"), Ke = l("rect"), nt = l("rect"), lt = l("rect"), it = l("rect"), rn = l("g"), ae = l("rect"), sr = l("rect"), b0 = l("path"), U2 = l("mask"), z2 = l("path"), S2 = l("g"), nn = l("foreignObject"), $2 = k("div"), $2.innerHTML = '<canvas width="320" height="528" style="width: 320px; height: 528px"></canvas>', v = l("g"), w0 = l("path"), k0 = l("path"), q0 = l("path"), ml = l("path"), yl = l("path"), Nn = l("g"), oe = l("rect"), cr = l("rect"), _0 = l("path"), ln = l("g"), se = l("rect"), dr = l("rect"), G0 = l("path"), an = l("g"), ce = l("rect"), fr = l("rect"), U0 = l("path"), on = l("g"), de = l("rect"), pr = l("rect"), z0 = l("path"), sn = l("g"), fe = l("rect"), hr = l("rect"), S0 = l("path"), cn = l("g"), pe = l("rect"), ur = l("rect"), $0 = l("path"), dn = l("g"), he = l("rect"), gr = l("rect"), M0 = l("path"), fn = l("g"), ue = l("rect"), vr = l("rect"), O0 = l("path"), pn = l("g"), ge = l("rect"), mr = l("rect"), C0 = l("path"), hn = l("g"), ve = l("rect"), yr = l("rect"), E0 = l("path"), un = l("g"), me = l("rect"), xr = l("rect"), j0 = l("path"), gn = l("g"), ye = l("rect"), br = l("rect"), H0 = l("path"), vn = l("g"), xe = l("rect"), wr = l("rect"), D0 = l("path"), mn = l("g"), be = l("rect"), kr = l("rect"), R0 = l("path"), yn = l("g"), we = l("rect"), qr = l("rect"), B0 = l("path"), xn = l("g"), ke = l("rect"), _r = l("rect"), Q0 = l("path"), bn = l("g"), qe = l("rect"), Gr = l("rect"), P0 = l("path"), M2 = l("path"), O2 = l("path"), C2 = l("path"), Ur = l("rect"), zr = l("rect"), Sr = l("rect"), $r = l("path"), Ae = l("rect"), at = l("path"), ot = l("path"), st = l("path"), L0 = l("path"), Zn = l("g"), _e = l("rect"), Mr = l("rect"), Xn = l("g"), Ge = l("rect"), Or = l("rect"), Wn = l("g"), Ue = l("rect"), Cr = l("rect"), Jn = l("g"), ze = l("rect"), Er = l("rect"), el = l("g"), Se = l("rect"), jr = l("rect"), tl = l("g"), $e = l("rect"), Hr = l("rect"), rl = l("g"), Me = l("rect"), Dr = l("rect"), nl = l("g"), Oe = l("rect"), Rr = l("rect"), ct = l("rect"), ll = l("g"), Ce = l("rect"), Br = l("rect"), il = l("g"), Ee = l("rect"), Qr = l("rect"), al = l("g"), je = l("rect"), Pr = l("rect"), ol = l("g"), He = l("rect"), Lr = l("rect"), xl = l("g"), wn = l("path"), bl = l("g"), Fr = l("path"), De = l("text"), kn = l("tspan"), X2 = Z("xyz"), W2 = E(), wl = l("g"), qn = l("path"), kl = l("g"), _n = l("path"), ql = l("g"), Gn = l("path"), _l = l("g"), Un = l("path"), Gl = l("g"), zn = l("path"), Ul = l("g"), Sn = l("path"), zl = l("g"), $n = l("path"), Sl = l("g"), Mn = l("path"), $l = l("g"), On = l("path"), Ml = l("g"), Kr = l("path"), F0 = l("path"), Ne = l("path"), Ol = l("g"), Ar = l("path"), Cl = l("g"), Cn = l("path"), El = l("g"), En = l("path"), jl = l("g"), jn = l("path"), Hl = l("g"), Yr = l("path"), Dl = l("g"), Vr = l("path"), Rl = l("g"), Tr = l("path"), Bl = l("g"), Hn = l("path"), Ql = l("g"), Dn = l("path"), Pl = l("g"), Rn = l("path"), Ll = l("g"), Bn = l("path"), Fl = l("g"), Qn = l("path"), Kl = l("g"), Pn = l("path"), Ln = l("g"), Ir = l("path"), Fn = l("g"), Nr = l("path"), X = l("path"), W = l("path"), Al = l("path"), K0 = l("path"), A0 = l("path"), dt = l("rect"), Y0 = l("path"), V0 = l("path"), T0 = l("path"), ft = l("rect"), e(o, "offset", "0"), e(o, "stop-color", "#3b3b3b"), e(s, "offset", ".1"), e(s, "stop-color", "#282828"), e(d, "offset", ".2"), e(d, "stop-color", "#282828"), e(c, "offset", "1"), e(c, "stop-color", "#272727"), e(a, "id", "x"), e(p, "offset", "0"), e(p, "stop-color", "#99b0df"), e(b, "offset", ".1"), e(b, "stop-color", "#7396de"), e(g, "offset", ".3"), e(g, "stop-color", "#4171d2"), e(w, "offset", ".9"), e(w, "stop-color", "#1f3d79"), e(x, "offset", "1"), e(x, "stop-color", "#173166"), e(f, "id", "l"), e(q, "offset", "0"), e(q, "stop-color", "#2b60cd"), e(m, "offset", ".5"), e(m, "stop-color", "#295fcc"), e(y, "offset", ".8"), e(y, "stop-color", "#3c73e3"), e(H, "offset", "1"), e(H, "stop-color", "#4279e8"), e(z, "id", "m"), e(P, "offset", "0"), e(P, "stop-color", "#ececec"), e(D, "offset", ".1"), e(D, "stop-color", "#ededed"), e($, "offset", ".3"), e($, "stop-color", "#ddd"), e(M, "offset", ".9"), e(M, "stop-color", "#b0b0b0"), e(h, "offset", "1"), e(h, "stop-color", "#9c9c9c"), e(C, "id", "v"), e(T, "offset", "0"), e(T, "stop-color", "#e7e7e7"), e(Re, "offset", ".5"), e(Re, "stop-color", "#f8f8f8"), e(N, "offset", ".8"), e(N, "stop-color", "#fff"), e(R, "offset", "1"), e(R, "stop-color", "#fbfbfb"), e(j, "id", "w"), e(J, "offset", "0"), e(J, "stop-color", "#cdcdcd"), e(J, "stop-opacity", ".4"), e(le, "offset", "1"), e(le, "stop-color", "#cdcdcd"), e(le, "stop-opacity", "0"), e(ne, "id", "u"), e(Ve, "offset", "0"), e(Ve, "stop-color", "#d1d1d1"), e(ut, "offset", ".4"), e(ut, "stop-color", "#c2c2c2"), e(Kn, "offset", ".7"), e(Kn, "stop-color", "#6b6b6b"), e(Te, "offset", "1"), e(Te, "stop-color", "#616161"), e(Xe, "id", "t"), e(ie, "offset", "0"), e(ie, "stop-color", "#a8a8a8"), e(Ie, "offset", ".3"), e(Ie, "stop-color", "#b2b2b2"), e(Be, "offset", ".8"), e(Be, "stop-color", "#dadada"), e(Xr, "offset", "1"), e(Xr, "stop-color", "#ccc"), e(We, "id", "s"), e(O, "offset", "0"), e(O, "stop-color", "#252525"), e(I, "offset", "1"), e(I, "stop-color", "#363636"), e(Wr, "id", "r"), e(Jr, "offset", "0"), e(Jr, "stop-color", "#f7f7f7"), e(An, "offset", "1"), e(An, "stop-color", "#535353"), e(gt, "id", "q"), e(en, "offset", "0"), e(en, "stop-color", "#909090"), e(W0, "offset", "1"), e(W0, "stop-color", "#2d2d2d"), e(vt, "id", "p"), e(J0, "offset", "0"), e(J0, "stop-color", "#313131"), e(Wl, "offset", "1"), e(Wl, "stop-color", "#3a3a3a"), e(Wl, "stop-opacity", "0"), e(Xl, "id", "o"), e(Jl, "offset", "0"), e(Jl, "stop-color", "#c6c6c6"), e(Jl, "stop-opacity", ".4"), e(e0, "offset", ".4"), e(e0, "stop-color", "#a2a2a2"), e(e0, "stop-opacity", ".1"), e(t0, "offset", "1"), e(t0, "stop-color", "#a2a2a2"), e(t0, "stop-opacity", "0"), e(dl, "id", "n"), e(r0, "offset", "0"), e(r0, "stop-color", "#c6c6c6"), e(r0, "stop-opacity", ".4"), e(n0, "offset", ".7"), e(n0, "stop-color", "#a2a2a2"), e(n0, "stop-opacity", ".1"), e(l0, "offset", "1"), e(l0, "stop-color", "#a2a2a2"), e(l0, "stop-opacity", "0"), e(fl, "id", "k"), e(e2, "offset", "0"), e(e2, "stop-color", "#2e2e2e"), e(t2, "offset", ".5"), e(t2, "stop-color", "#2d2d2d"), e(r2, "offset", ".8"), e(r2, "stop-color", "#393939"), e(n2, "offset", "1"), e(n2, "stop-color", "#3d3d3d"), e(Yn, "id", "j"), e(l2, "offset", "0"), e(l2, "stop-color", "#464646"), e(i2, "offset", ".1"), e(i2, "stop-color", "#393939"), e(a2, "offset", ".3"), e(a2, "stop-color", "#2c2c2c"), e(o2, "offset", ".9"), e(o2, "stop-color", "#202020"), e(s2, "offset", "1"), e(s2, "stop-color", "#242424"), e(tn, "id", "i"), e(c2, "offset", "0"), e(c2, "stop-color", "#1e7999"), e(a0, "offset", "1"), e(a0, "stop-color", "#1d7998"), e(a0, "stop-opacity", "0"), e(i0, "id", "h"), e(d2, "offset", "0"), e(d2, "stop-color", "#3a3a3a"), e(f2, "offset", ".3"), e(f2, "stop-color", "#414141"), e(p2, "offset", ".6"), e(p2, "stop-color", "#464646"), e(o0, "offset", "1"), e(o0, "stop-color", "#4b4b4b"), e(o0, "stop-opacity", "0"), e(Vn, "id", "g"), e(h2, "offset", "0"), e(h2, "stop-color", "#313131"), e(s0, "offset", ".4"), e(s0, "stop-color", "#3a3a3a"), e(s0, "stop-opacity", ".6"), e(c0, "offset", "1"), e(c0, "stop-color", "#3a3a3a"), e(c0, "stop-opacity", "0"), e(pl, "id", "f"), e(u2, "offset", "0"), e(u2, "stop-color", "#3a3a3a"), e(d0, "offset", ".4"), e(d0, "stop-color", "#3a3a3a"), e(d0, "stop-opacity", ".6"), e(f0, "offset", "1"), e(f0, "stop-color", "#3a3a3a"), e(f0, "stop-opacity", "0"), e(hl, "id", "e"), e(g2, "offset", "0"), e(g2, "stop-color", "#4e4e4e"), e(h0, "offset", "1"), e(h0, "stop-color", "#4e4e4e"), e(h0, "stop-opacity", "0"), e(p0, "id", "d"), e(v2, "offset", "0"), e(v2, "stop-color", "#555"), e(g0, "offset", "1"), e(g0, "stop-color", "#424242"), e(g0, "stop-opacity", "0"), e(u0, "id", "c"), e(m2, "offset", "0"), e(m2, "stop-color", "#9c9c9c"), e(v0, "offset", ".8"), e(v0, "stop-color", "#b0b0b0"), e(v0, "stop-opacity", ".1"), e(y2, "offset", "1"), e(y2, "stop-color", "#f5f5f5"), e(ul, "id", "b"), e(x2, "offset", "0"), e(x2, "stop-color", "#b6b6b6"), e(b2, "offset", "0"), e(b2, "stop-color", "#fefefe"), e(w2, "offset", ".1"), e(w2, "stop-color", "#e7e7e7"), e(k2, "offset", ".8"), e(k2, "stop-color", "#e8e8e8"), e(q2, "offset", ".9"), e(q2, "stop-color", "#e6e6e6"), e(_2, "offset", "1"), e(_2, "stop-color", "#e1e1e1"), e(G2, "offset", "1"), e(G2, "stop-color", "#b2b2b2"), e(Je, "id", "a"), u(mt, "xlink:href", "#a"), e(mt, "id", "y"), e(mt, "x1", "6.5"), e(mt, "x2", "641.5"), e(mt, "y1", "320.4"), e(mt, "y2", "320.4"), e(mt, "gradientUnits", "userSpaceOnUse"), u(yt, "xlink:href", "#b"), e(yt, "id", "z"), e(yt, "x1", "9.3"), e(yt, "x2", "634"), e(yt, "y1", "-300.4"), e(yt, "y2", "1004.4"), e(yt, "gradientUnits", "userSpaceOnUse"), u(xt, "xlink:href", "#c"), e(xt, "id", "B"), e(xt, "x1", "570"), e(xt, "x2", "94.5"), e(xt, "y1", "560.4"), e(xt, "y2", "-263.2"), e(xt, "gradientUnits", "userSpaceOnUse"), u(bt, "xlink:href", "#d"), e(bt, "id", "C"), e(bt, "x1", "570"), e(bt, "x2", "498.4"), e(bt, "y1", "560.4"), e(bt, "y2", "293"), e(bt, "gradientUnits", "userSpaceOnUse"), u(wt, "xlink:href", "#e"), e(wt, "id", "J"), e(wt, "x1", "91.3"), e(wt, "x2", "71.6"), e(wt, "y1", "978.6"), e(wt, "y2", "958.9"), e(wt, "gradientUnits", "userSpaceOnUse"), u(kt, "xlink:href", "#f"), e(kt, "id", "I"), e(kt, "x1", "504"), e(kt, "x2", "504"), e(kt, "y1", "978"), e(kt, "y2", "215.2"), e(kt, "gradientUnits", "userSpaceOnUse"), u(qt, "xlink:href", "#g"), e(qt, "id", "K"), e(qt, "x1", "544"), e(qt, "x2", "582"), e(qt, "y1", "980"), e(qt, "y2", "942"), e(qt, "gradientUnits", "userSpaceOnUse"), u(_t, "xlink:href", "#h"), e(_t, "id", "L"), e(_t, "x1", "300"), e(_t, "x2", "300"), e(_t, "y1", "44"), e(_t, "y2", "1124"), e(_t, "gradientUnits", "userSpaceOnUse"), u(Gt, "xlink:href", "#i"), e(Gt, "id", "M"), e(Gt, "x1", "514.8"), e(Gt, "x2", "583.9"), e(Gt, "y1", "711.8"), e(Gt, "y2", "751.7"), e(Gt, "gradientUnits", "userSpaceOnUse"), u(Ut, "xlink:href", "#j"), e(Ut, "id", "N"), e(Ut, "x1", "549"), e(Ut, "x2", "549"), e(Ut, "y1", "713.4"), e(Ut, "y2", "748.4"), e(Ut, "gradientUnits", "userSpaceOnUse"), u(zt, "xlink:href", "#k"), e(zt, "id", "O"), e(zt, "x1", "515"), e(zt, "x2", "536.3"), e(zt, "y1", "1125"), e(zt, "y2", "1146.3"), e(zt, "gradientUnits", "userSpaceOnUse"), u(St, "xlink:href", "#k"), e(St, "id", "H"), e(St, "x1", "515"), e(St, "x2", "536.3"), e(St, "y1", "1125"), e(St, "y2", "1146.3"), e(St, "gradientUnits", "userSpaceOnUse"), u($t, "xlink:href", "#i"), e($t, "id", "F"), e($t, "x1", "514.8"), e($t, "x2", "583.9"), e($t, "y1", "711.8"), e($t, "y2", "751.7"), e($t, "gradientUnits", "userSpaceOnUse"), u(Mt, "xlink:href", "#j"), e(Mt, "id", "G"), e(Mt, "x1", "549"), e(Mt, "x2", "549"), e(Mt, "y1", "713.4"), e(Mt, "y2", "748.4"), e(Mt, "gradientUnits", "userSpaceOnUse"), u(Ot, "xlink:href", "#k"), e(Ot, "id", "R"), e(Ot, "x1", "515"), e(Ot, "x2", "536.3"), e(Ot, "y1", "1125"), e(Ot, "y2", "1146.3"), e(Ot, "gradientUnits", "userSpaceOnUse"), u(Ct, "xlink:href", "#i"), e(Ct, "id", "P"), e(Ct, "x1", "514.8"), e(Ct, "x2", "583.9"), e(Ct, "y1", "711.8"), e(Ct, "y2", "751.7"), e(Ct, "gradientUnits", "userSpaceOnUse"), u(Et, "xlink:href", "#j"), e(Et, "id", "Q"), e(Et, "x1", "549"), e(Et, "x2", "549"), e(Et, "y1", "713.4"), e(Et, "y2", "748.4"), e(Et, "gradientUnits", "userSpaceOnUse"), u(jt, "xlink:href", "#k"), e(jt, "id", "U"), e(jt, "x1", "515"), e(jt, "x2", "536.3"), e(jt, "y1", "1125"), e(jt, "y2", "1146.3"), e(jt, "gradientUnits", "userSpaceOnUse"), u(Ht, "xlink:href", "#i"), e(Ht, "id", "S"), e(Ht, "x1", "514.8"), e(Ht, "x2", "583.9"), e(Ht, "y1", "711.8"), e(Ht, "y2", "751.7"), e(Ht, "gradientUnits", "userSpaceOnUse"), u(Dt, "xlink:href", "#j"), e(Dt, "id", "T"), e(Dt, "x1", "549"), e(Dt, "x2", "549"), e(Dt, "y1", "713.4"), e(Dt, "y2", "748.4"), e(Dt, "gradientUnits", "userSpaceOnUse"), u(Rt, "xlink:href", "#k"), e(Rt, "id", "X"), e(Rt, "x1", "515"), e(Rt, "x2", "536.3"), e(Rt, "y1", "1125"), e(Rt, "y2", "1146.3"), e(Rt, "gradientUnits", "userSpaceOnUse"), u(Bt, "xlink:href", "#l"), e(Bt, "id", "V"), e(Bt, "x1", "514.8"), e(Bt, "x2", "583.9"), e(Bt, "y1", "711.8"), e(Bt, "y2", "751.7"), e(Bt, "gradientUnits", "userSpaceOnUse"), u(Qt, "xlink:href", "#m"), e(Qt, "id", "W"), e(Qt, "x1", "549"), e(Qt, "x2", "549"), e(Qt, "y1", "713.4"), e(Qt, "y2", "748.4"), e(Qt, "gradientUnits", "userSpaceOnUse"), u(Pt, "xlink:href", "#k"), e(Pt, "id", "aa"), e(Pt, "x1", "515"), e(Pt, "x2", "536.3"), e(Pt, "y1", "1125"), e(Pt, "y2", "1146.3"), e(Pt, "gradientUnits", "userSpaceOnUse"), u(Lt, "xlink:href", "#i"), e(Lt, "id", "Y"), e(Lt, "x1", "514.8"), e(Lt, "x2", "583.9"), e(Lt, "y1", "711.8"), e(Lt, "y2", "751.7"), e(Lt, "gradientUnits", "userSpaceOnUse"), u(Ft, "xlink:href", "#j"), e(Ft, "id", "Z"), e(Ft, "x1", "549"), e(Ft, "x2", "549"), e(Ft, "y1", "713.4"), e(Ft, "y2", "748.4"), e(Ft, "gradientUnits", "userSpaceOnUse"), u(Kt, "xlink:href", "#k"), e(Kt, "id", "ad"), e(Kt, "x1", "515"), e(Kt, "x2", "536.3"), e(Kt, "y1", "1125"), e(Kt, "y2", "1146.3"), e(Kt, "gradientUnits", "userSpaceOnUse"), u(At, "xlink:href", "#i"), e(At, "id", "ab"), e(At, "x1", "514.8"), e(At, "x2", "583.9"), e(At, "y1", "711.8"), e(At, "y2", "751.7"), e(At, "gradientUnits", "userSpaceOnUse"), u(Yt, "xlink:href", "#j"), e(Yt, "id", "ac"), e(Yt, "x1", "549"), e(Yt, "x2", "549"), e(Yt, "y1", "713.4"), e(Yt, "y2", "748.4"), e(Yt, "gradientUnits", "userSpaceOnUse"), u(Vt, "xlink:href", "#k"), e(Vt, "id", "ag"), e(Vt, "x1", "515"), e(Vt, "x2", "536.3"), e(Vt, "y1", "1125"), e(Vt, "y2", "1146.3"), e(Vt, "gradientUnits", "userSpaceOnUse"), u(Tt, "xlink:href", "#i"), e(Tt, "id", "ae"), e(Tt, "x1", "514.8"), e(Tt, "x2", "583.9"), e(Tt, "y1", "711.8"), e(Tt, "y2", "751.7"), e(Tt, "gradientUnits", "userSpaceOnUse"), u(It, "xlink:href", "#j"), e(It, "id", "af"), e(It, "x1", "549"), e(It, "x2", "549"), e(It, "y1", "713.4"), e(It, "y2", "748.4"), e(It, "gradientUnits", "userSpaceOnUse"), u(Nt, "xlink:href", "#k"), e(Nt, "id", "aj"), e(Nt, "x1", "515"), e(Nt, "x2", "536.3"), e(Nt, "y1", "1125"), e(Nt, "y2", "1146.3"), e(Nt, "gradientUnits", "userSpaceOnUse"), u(Zt, "xlink:href", "#i"), e(Zt, "id", "ah"), e(Zt, "x1", "514.8"), e(Zt, "x2", "583.9"), e(Zt, "y1", "711.8"), e(Zt, "y2", "751.7"), e(Zt, "gradientUnits", "userSpaceOnUse"), u(Xt, "xlink:href", "#j"), e(Xt, "id", "ai"), e(Xt, "x1", "549"), e(Xt, "x2", "549"), e(Xt, "y1", "713.4"), e(Xt, "y2", "748.4"), e(Xt, "gradientUnits", "userSpaceOnUse"), u(Wt, "xlink:href", "#k"), e(Wt, "id", "ay"), e(Wt, "x1", "515"), e(Wt, "x2", "536.3"), e(Wt, "y1", "1125"), e(Wt, "y2", "1146.3"), e(Wt, "gradientUnits", "userSpaceOnUse"), u(Jt, "xlink:href", "#i"), e(Jt, "id", "at"), e(Jt, "x1", "514.8"), e(Jt, "x2", "583.9"), e(Jt, "y1", "711.8"), e(Jt, "y2", "751.7"), e(Jt, "gradientUnits", "userSpaceOnUse"), u(e1, "xlink:href", "#j"), e(e1, "id", "au"), e(e1, "x1", "549"), e(e1, "x2", "549"), e(e1, "y1", "713.4"), e(e1, "y2", "748.4"), e(e1, "gradientUnits", "userSpaceOnUse"), u(t1, "xlink:href", "#k"), e(t1, "id", "av"), e(t1, "x1", "515"), e(t1, "x2", "536.3"), e(t1, "y1", "1125"), e(t1, "y2", "1146.3"), e(t1, "gradientUnits", "userSpaceOnUse"), u(r1, "xlink:href", "#i"), e(r1, "id", "aq"), e(r1, "x1", "514.8"), e(r1, "x2", "583.9"), e(r1, "y1", "711.8"), e(r1, "y2", "751.7"), e(r1, "gradientUnits", "userSpaceOnUse"), u(n1, "xlink:href", "#j"), e(n1, "id", "ar"), e(n1, "x1", "549"), e(n1, "x2", "549"), e(n1, "y1", "713.4"), e(n1, "y2", "748.4"), e(n1, "gradientUnits", "userSpaceOnUse"), u(l1, "xlink:href", "#k"), e(l1, "id", "as"), e(l1, "x1", "515"), e(l1, "x2", "536.3"), e(l1, "y1", "1125"), e(l1, "y2", "1146.3"), e(l1, "gradientUnits", "userSpaceOnUse"), u(i1, "xlink:href", "#k"), e(i1, "id", "ap"), e(i1, "x1", "515"), e(i1, "x2", "536.3"), e(i1, "y1", "1125"), e(i1, "y2", "1146.3"), e(i1, "gradientUnits", "userSpaceOnUse"), u(a1, "xlink:href", "#i"), e(a1, "id", "ak"), e(a1, "x1", "514.8"), e(a1, "x2", "583.9"), e(a1, "y1", "711.8"), e(a1, "y2", "751.7"), e(a1, "gradientUnits", "userSpaceOnUse"), u(o1, "xlink:href", "#j"), e(o1, "id", "al"), e(o1, "x1", "549"), e(o1, "x2", "549"), e(o1, "y1", "713.4"), e(o1, "y2", "748.4"), e(o1, "gradientUnits", "userSpaceOnUse"), u(s1, "xlink:href", "#k"), e(s1, "id", "am"), e(s1, "x1", "515"), e(s1, "x2", "536.3"), e(s1, "y1", "1125"), e(s1, "y2", "1146.3"), e(s1, "gradientUnits", "userSpaceOnUse"), u(c1, "xlink:href", "#i"), e(c1, "id", "an"), e(c1, "x1", "514.8"), e(c1, "x2", "583.9"), e(c1, "y1", "711.8"), e(c1, "y2", "751.7"), e(c1, "gradientUnits", "userSpaceOnUse"), u(d1, "xlink:href", "#j"), e(d1, "id", "ao"), e(d1, "x1", "549"), e(d1, "x2", "549"), e(d1, "y1", "713.4"), e(d1, "y2", "748.4"), e(d1, "gradientUnits", "userSpaceOnUse"), u(f1, "xlink:href", "#i"), e(f1, "id", "aw"), e(f1, "x1", "514.8"), e(f1, "x2", "583.9"), e(f1, "y1", "711.8"), e(f1, "y2", "751.7"), e(f1, "gradientUnits", "userSpaceOnUse"), u(p1, "xlink:href", "#j"), e(p1, "id", "ax"), e(p1, "x1", "549"), e(p1, "x2", "549"), e(p1, "y1", "713.4"), e(p1, "y2", "748.4"), e(p1, "gradientUnits", "userSpaceOnUse"), u(h1, "xlink:href", "#n"), e(h1, "id", "aB"), e(h1, "x1", "520"), e(h1, "x2", "528.5"), e(h1, "y1", "1122"), e(h1, "y2", "1152"), e(h1, "gradientUnits", "userSpaceOnUse"), u(u1, "xlink:href", "#i"), e(u1, "id", "az"), e(u1, "x1", "514.8"), e(u1, "x2", "624"), e(u1, "y1", "711.8"), e(u1, "y2", "743.4"), e(u1, "gradientUnits", "userSpaceOnUse"), u(g1, "xlink:href", "#j"), e(g1, "id", "aA"), e(g1, "x1", "549"), e(g1, "x2", "549"), e(g1, "y1", "713.4"), e(g1, "y2", "748.4"), e(g1, "gradientUnits", "userSpaceOnUse"), u(v1, "xlink:href", "#i"), e(v1, "id", "aC"), e(v1, "x1", "514.8"), e(v1, "x2", "624"), e(v1, "y1", "711.8"), e(v1, "y2", "743.4"), e(v1, "gradientUnits", "userSpaceOnUse"), u(m1, "xlink:href", "#n"), e(m1, "id", "aE"), e(m1, "x1", "520"), e(m1, "x2", "528.5"), e(m1, "y1", "1122"), e(m1, "y2", "1152"), e(m1, "gradientUnits", "userSpaceOnUse"), u(y1, "xlink:href", "#j"), e(y1, "id", "aD"), e(y1, "x1", "549"), e(y1, "x2", "549"), e(y1, "y1", "713.4"), e(y1, "y2", "748.4"), e(y1, "gradientUnits", "userSpaceOnUse"), u(x1, "xlink:href", "#i"), e(x1, "id", "aI"), e(x1, "x1", "514.8"), e(x1, "x2", "624"), e(x1, "y1", "711.8"), e(x1, "y2", "743.4"), e(x1, "gradientUnits", "userSpaceOnUse"), u(b1, "xlink:href", "#n"), e(b1, "id", "aK"), e(b1, "x1", "520"), e(b1, "x2", "528.5"), e(b1, "y1", "1122"), e(b1, "y2", "1152"), e(b1, "gradientUnits", "userSpaceOnUse"), u(w1, "xlink:href", "#i"), e(w1, "id", "aF"), e(w1, "x1", "514.8"), e(w1, "x2", "624"), e(w1, "y1", "711.8"), e(w1, "y2", "743.4"), e(w1, "gradientUnits", "userSpaceOnUse"), u(k1, "xlink:href", "#j"), e(k1, "id", "aG"), e(k1, "x1", "549"), e(k1, "x2", "549"), e(k1, "y1", "713.4"), e(k1, "y2", "748.4"), e(k1, "gradientUnits", "userSpaceOnUse"), u(q1, "xlink:href", "#n"), e(q1, "id", "aH"), e(q1, "x1", "520"), e(q1, "x2", "528.5"), e(q1, "y1", "1122"), e(q1, "y2", "1152"), e(q1, "gradientUnits", "userSpaceOnUse"), u(_1, "xlink:href", "#j"), e(_1, "id", "aJ"), e(_1, "x1", "549"), e(_1, "x2", "549"), e(_1, "y1", "713.4"), e(_1, "y2", "748.4"), e(_1, "gradientUnits", "userSpaceOnUse"), u(G1, "xlink:href", "#c"), e(G1, "id", "D"), e(G1, "x1", "575.8"), e(G1, "x2", "543.8"), e(G1, "y1", "691.7"), e(G1, "y2", "572.4"), e(G1, "gradientUnits", "userSpaceOnUse"), u(U1, "xlink:href", "#d"), e(U1, "id", "E"), e(U1, "x1", "562"), e(U1, "x2", "537.9"), e(U1, "y1", "686.2"), e(U1, "y2", "596.4"), e(U1, "gradientUnits", "userSpaceOnUse"), u(et, "xlink:href", "#o"), e(et, "id", "aL"), e(et, "x1", "504"), e(et, "x2", "504"), e(et, "y1", "978"), e(et, "y2", "876.8"), e(et, "gradientTransform", "translate(0 -285.6)"), e(et, "gradientUnits", "userSpaceOnUse"), u(tt, "xlink:href", "#e"), e(tt, "id", "aM"), e(tt, "x1", "91.3"), e(tt, "x2", "71.6"), e(tt, "y1", "978.6"), e(tt, "y2", "958.9"), e(tt, "gradientTransform", "translate(0 -285.6)"), e(tt, "gradientUnits", "userSpaceOnUse"), u(rt, "xlink:href", "#g"), e(rt, "id", "aN"), e(rt, "x1", "544"), e(rt, "x2", "575.4"), e(rt, "y1", "980"), e(rt, "y2", "948.6"), e(rt, "gradientTransform", "translate(0 -285.6)"), e(rt, "gradientUnits", "userSpaceOnUse"), u(z1, "xlink:href", "#p"), e(z1, "id", "aO"), e(z1, "x1", "327.1"), e(z1, "x2", "327.1"), e(z1, "y1", "580.4"), e(z1, "y2", "694.4"), e(z1, "gradientUnits", "userSpaceOnUse"), u(S1, "xlink:href", "#q"), e(S1, "id", "aP"), e(S1, "x1", "330.1"), e(S1, "x2", "330.1"), e(S1, "y1", "582.4"), e(S1, "y2", "694.4"), e(S1, "gradientUnits", "userSpaceOnUse"), u($1, "xlink:href", "#r"), e($1, "id", "aQ"), e($1, "x1", "264.5"), e($1, "x2", "350.3"), e($1, "y1", "600.6"), e($1, "y2", "686.4"), e($1, "gradientUnits", "userSpaceOnUse"), u(M1, "xlink:href", "#s"), e(M1, "id", "aS"), e(M1, "x1", "274"), e(M1, "x2", "367.4"), e(M1, "y1", "632.4"), e(M1, "y2", "644.4"), e(M1, "gradientUnits", "userSpaceOnUse"), u(O1, "xlink:href", "#t"), e(O1, "id", "aT"), e(O1, "x1", "311.9"), e(O1, "x2", "313.6"), e(O1, "y1", "632.4"), e(O1, "y2", "644.4"), e(O1, "gradientUnits", "userSpaceOnUse"), u(C1, "xlink:href", "#t"), e(C1, "id", "aV"), e(C1, "x1", "251"), e(C1, "x2", "262.3"), e(C1, "y1", "645.1"), e(C1, "y2", "638.6"), e(C1, "gradientUnits", "userSpaceOnUse"), u(E1, "xlink:href", "#t"), e(E1, "id", "aU"), e(E1, "x1", "-329.7"), e(E1, "x2", "-320.5"), e(E1, "y1", "-677.4"), e(E1, "y2", "-667.2"), e(E1, "gradientUnits", "userSpaceOnUse"), u(j1, "xlink:href", "#t"), e(j1, "id", "aW"), e(j1, "x1", "251.4"), e(j1, "x2", "261.3"), e(j1, "y1", "633.6"), e(j1, "y2", "639.3"), e(j1, "gradientUnits", "userSpaceOnUse"), u(H1, "xlink:href", "#t"), e(H1, "id", "aR"), e(H1, "x1", "325"), e(H1, "x2", "325"), e(H1, "y1", "612.4"), e(H1, "y2", "606.9"), e(H1, "gradientUnits", "userSpaceOnUse"), u(D1, "xlink:href", "#u"), e(D1, "id", "aX"), e(D1, "x1", "328.8"), e(D1, "x2", "328.8"), e(D1, "y1", "1099"), e(D1, "y2", "1108"), e(D1, "gradientUnits", "userSpaceOnUse"), u(R1, "xlink:href", "#v"), e(R1, "id", "aY"), e(R1, "x1", "559.3"), e(R1, "x2", "583.9"), e(R1, "y1", "709.1"), e(R1, "y2", "751.7"), e(R1, "gradientUnits", "userSpaceOnUse"), u(B1, "xlink:href", "#w"), e(B1, "id", "aZ"), e(B1, "x1", "549"), e(B1, "x2", "549"), e(B1, "y1", "713.4"), e(B1, "y2", "748.4"), e(B1, "gradientUnits", "userSpaceOnUse"), u(Q1, "xlink:href", "#v"), e(Q1, "id", "ba"), e(Q1, "x1", "559.3"), e(Q1, "x2", "583.9"), e(Q1, "y1", "709.1"), e(Q1, "y2", "751.7"), e(Q1, "gradientUnits", "userSpaceOnUse"), u(P1, "xlink:href", "#w"), e(P1, "id", "bb"), e(P1, "x1", "549"), e(P1, "x2", "549"), e(P1, "y1", "713.4"), e(P1, "y2", "748.4"), e(P1, "gradientUnits", "userSpaceOnUse"), u(L1, "xlink:href", "#v"), e(L1, "id", "bc"), e(L1, "x1", "559.3"), e(L1, "x2", "583.9"), e(L1, "y1", "709.1"), e(L1, "y2", "751.7"), e(L1, "gradientUnits", "userSpaceOnUse"), u(F1, "xlink:href", "#w"), e(F1, "id", "bd"), e(F1, "x1", "549"), e(F1, "x2", "549"), e(F1, "y1", "713.4"), e(F1, "y2", "748.4"), e(F1, "gradientUnits", "userSpaceOnUse"), u(K1, "xlink:href", "#v"), e(K1, "id", "be"), e(K1, "x1", "559.3"), e(K1, "x2", "583.9"), e(K1, "y1", "709.1"), e(K1, "y2", "751.7"), e(K1, "gradientUnits", "userSpaceOnUse"), u(A1, "xlink:href", "#w"), e(A1, "id", "bf"), e(A1, "x1", "549"), e(A1, "x2", "549"), e(A1, "y1", "713.4"), e(A1, "y2", "748.4"), e(A1, "gradientUnits", "userSpaceOnUse"), u(Y1, "xlink:href", "#v"), e(Y1, "id", "bg"), e(Y1, "x1", "559.3"), e(Y1, "x2", "583.9"), e(Y1, "y1", "709.1"), e(Y1, "y2", "751.7"), e(Y1, "gradientUnits", "userSpaceOnUse"), u(V1, "xlink:href", "#w"), e(V1, "id", "bh"), e(V1, "x1", "549"), e(V1, "x2", "549"), e(V1, "y1", "713.4"), e(V1, "y2", "748.4"), e(V1, "gradientUnits", "userSpaceOnUse"), u(T1, "xlink:href", "#v"), e(T1, "id", "bi"), e(T1, "x1", "559.3"), e(T1, "x2", "583.9"), e(T1, "y1", "709.1"), e(T1, "y2", "751.7"), e(T1, "gradientUnits", "userSpaceOnUse"), u(I1, "xlink:href", "#w"), e(I1, "id", "bj"), e(I1, "x1", "549"), e(I1, "x2", "549"), e(I1, "y1", "713.4"), e(I1, "y2", "748.4"), e(I1, "gradientUnits", "userSpaceOnUse"), u(N1, "xlink:href", "#v"), e(N1, "id", "bk"), e(N1, "x1", "559.3"), e(N1, "x2", "583.9"), e(N1, "y1", "709.1"), e(N1, "y2", "751.7"), e(N1, "gradientUnits", "userSpaceOnUse"), u(Z1, "xlink:href", "#w"), e(Z1, "id", "bl"), e(Z1, "x1", "549"), e(Z1, "x2", "549"), e(Z1, "y1", "713.4"), e(Z1, "y2", "748.4"), e(Z1, "gradientUnits", "userSpaceOnUse"), u(X1, "xlink:href", "#v"), e(X1, "id", "bm"), e(X1, "x1", "559.3"), e(X1, "x2", "583.9"), e(X1, "y1", "709.1"), e(X1, "y2", "751.7"), e(X1, "gradientUnits", "userSpaceOnUse"), u(W1, "xlink:href", "#w"), e(W1, "id", "bn"), e(W1, "x1", "549"), e(W1, "x2", "549"), e(W1, "y1", "713.4"), e(W1, "y2", "748.4"), e(W1, "gradientUnits", "userSpaceOnUse"), u(J1, "xlink:href", "#v"), e(J1, "id", "bo"), e(J1, "x1", "559.3"), e(J1, "x2", "583.9"), e(J1, "y1", "709.1"), e(J1, "y2", "751.7"), e(J1, "gradientUnits", "userSpaceOnUse"), u(er, "xlink:href", "#w"), e(er, "id", "bp"), e(er, "x1", "549"), e(er, "x2", "549"), e(er, "y1", "713.4"), e(er, "y2", "748.4"), e(er, "gradientUnits", "userSpaceOnUse"), u(tr, "xlink:href", "#v"), e(tr, "id", "bq"), e(tr, "x1", "559.3"), e(tr, "x2", "583.9"), e(tr, "y1", "709.1"), e(tr, "y2", "751.7"), e(tr, "gradientUnits", "userSpaceOnUse"), u(rr, "xlink:href", "#w"), e(rr, "id", "br"), e(rr, "x1", "549"), e(rr, "x2", "549"), e(rr, "y1", "713.4"), e(rr, "y2", "748.4"), e(rr, "gradientUnits", "userSpaceOnUse"), u(nr, "xlink:href", "#v"), e(nr, "id", "bs"), e(nr, "x1", "559.3"), e(nr, "x2", "583.9"), e(nr, "y1", "709.1"), e(nr, "y2", "751.7"), e(nr, "gradientUnits", "userSpaceOnUse"), u(lr, "xlink:href", "#w"), e(lr, "id", "bt"), e(lr, "x1", "549"), e(lr, "x2", "549"), e(lr, "y1", "713.4"), e(lr, "y2", "748.4"), e(lr, "gradientUnits", "userSpaceOnUse"), u(ir, "xlink:href", "#v"), e(ir, "id", "bu"), e(ir, "x1", "559.3"), e(ir, "x2", "583.9"), e(ir, "y1", "709.1"), e(ir, "y2", "751.7"), e(ir, "gradientUnits", "userSpaceOnUse"), u(ar, "xlink:href", "#w"), e(ar, "id", "bv"), e(ar, "x1", "549"), e(ar, "x2", "549"), e(ar, "y1", "713.4"), e(ar, "y2", "748.4"), e(ar, "gradientUnits", "userSpaceOnUse"), e(Tn, "y", "0"), e(Tn, "x", "0"), e(Tn, "height", "18"), e(Tn, "width", "20"), e(Tn, "fill", "#272727"), e(m0, "fill", "#222"), e(m0, "fill-rule", "evenodd"), e(m0, "d", "M9.99 0 5 3v6l-5 3v6l10-6V0h-.01zm10 0L15 3v6l5-3V0h-.01z"), e(y0, "fill", "#1c1c1c"), e(y0, "fill-rule", "evenodd"), e(y0, "d", "M0 0v6l5 3V3L.01 0H0zm10 0v12l10 6v-6l-5-3V3l-4.99-3H10z"), e(Qe, "id", "pattern1"), e(Qe, "x", "0"), e(Qe, "y", "0"), e(Qe, "width", "20"), e(Qe, "height", "18"), e(Qe, "patternUnits", "userSpaceOnUse"), e(Qe, "class", "svelte-py5gbp"), u(or, "xlink:href", "#x"), e(or, "id", "A"), e(or, "x1", "295"), e(or, "x2", "295"), e(or, "y1", "1004.4"), e(or, "y2", "-357.6"), e(or, "gradientUnits", "userSpaceOnUse"), e(gl, "fill", "url(#y)"), e(gl, "fill-rule", "evenodd"), e(gl, "stroke", "#696a69"), e(gl, "d", "M119 1046.4c-33-.4-94-23-105-42-1-7-7-94-7-162v-1075c0-13 3.5-103 5-130 8-13.9 56-33.8 68-37 12-3.3 25-6 36-6h416c11 0 24 2.7 36 6 12 3.2 60 23.1 68 37 1.5 27 5 117 5 130v1075c0 68-6 155-7 162-11 19-72 41.6-105 42H365z"), e(x0, "fill", "url(#z)"), e(x0, "fill-rule", "evenodd"), e(x0, "d", "M120 1022.4c-60 0-102-25-102-135v-1135c0-75 17-133 117-133h378c100 0 117 58 117 133v1135c0 110-42 135-102 135H365z"), e(vl, "fill", "#269dc5"), e(vl, "fill-rule", "evenodd"), e(vl, "stroke", "#6ac1df"), e(vl, "d", "M120 1015.4c-55 0-96-23-96-128v-1135c0-75 16-128 111-128h378c95 0 111 53 111 128v1135c0 105-41 128-96 128H365z"), e(In, "id", "pattern-bg"), e(In, "fill", "url(#pattern1)"), e(In, "fill-rule", "evenodd"), e(In, "stroke", "#000"), e(In, "d", "M120 1007.4c-45.4 0-90-15-90-120v-1127c0-75 15-128 105-128h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H365z"), e(Pe, "width", "516"), e(Pe, "height", "894"), e(Pe, "x", "66"), e(Pe, "y", "-321.6"), e(Pe, "fill", "#0d0d0d"), e(Pe, "stroke", "url(#B)"), e(Pe, "stroke-linecap", "round"), e(Pe, "stroke-linejoin", "round"), e(Pe, "rx", "22"), e(Pe, "ry", "22"), e(Le, "width", "493"), e(Le, "height", "871"), e(Le, "x", "77"), e(Le, "y", "-310.6"), e(Le, "fill", "#0d0d0d"), e(Le, "stroke", "url(#C)"), e(Le, "stroke-linecap", "round"), e(Le, "stroke-linejoin", "round"), e(Le, "rx", "10"), e(Le, "ry", "10"), e(Fe, "width", "516"), e(Fe, "height", "120"), e(Fe, "x", "66"), e(Fe, "y", "578.4"), e(Fe, "fill", "#0d0d0d"), e(Fe, "stroke", "url(#D)"), e(Fe, "stroke-linecap", "round"), e(Fe, "stroke-linejoin", "round"), e(Fe, "rx", "22"), e(Fe, "ry", "22"), e(Ke, "width", "493"), e(Ke, "height", "96"), e(Ke, "x", "77"), e(Ke, "y", "590.4"), e(Ke, "fill", "#0d0d0d"), e(Ke, "stroke", "url(#E)"), e(Ke, "stroke-linecap", "round"), e(Ke, "stroke-linejoin", "round"), e(Ke, "rx", "10"), e(Ke, "ry", "10"), e(nt, "width", "116"), e(nt, "height", "36"), e(nt, "x", "86"), e(nt, "y", "644.4"), e(nt, "fill", "#00ec3a"), e(nt, "fill-opacity", ".2"), e(nt, "rx", "7"), e(nt, "ry", "7"), e(lt, "width", "116"), e(lt, "height", "36"), e(lt, "x", "446"), e(lt, "y", "596.4"), e(lt, "fill", "#00ec3a"), e(lt, "fill-opacity", ".2"), e(lt, "rx", "7"), e(lt, "ry", "7"), e(it, "width", "116"), e(it, "height", "36"), e(it, "x", "446"), e(it, "y", "644.4"), e(it, "fill", "#00ec3a"), e(it, "fill-opacity", ".2"), e(it, "rx", "7"), e(it, "ry", "7"), e(ae, "width", "76"), e(ae, "height", "44"), e(ae, "x", "511"), e(ae, "y", "709.4"), e(ae, "fill", "url(#F)"), e(ae, "stroke", "var(--btn-border-stroke)"), e(ae, "stroke-linecap", "round"), e(ae, "stroke-linejoin", "round"), e(ae, "stroke-width", "2"), e(ae, "rx", "8"), e(ae, "ry", "8"), e(sr, "width", "68"), e(sr, "height", "35"), e(sr, "x", "515"), e(sr, "y", "713.4"), e(sr, "fill", "url(#G)"), e(sr, "rx", "4"), e(sr, "ry", "4"), e(b0, "fill", "url(#H)"), e(b0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(b0, "transform", "translate(0 -411.6)"), e(rn, "transform", "translate(0 54)"), e(rn, "class", "cp-button"), e(rn, "data-cp", "KEYCODE_TIMES"), e(z2, "fill", "#fff"), e(z2, "d", "M84-303.6h480v792H84z"), e(U2, "id", "uid_3418"), e(re, "transform", "translate(0 411.6)"), e($2, "class", "cp-wrapper svelte-py5gbp"), e(nn, "x", "0"), e(nn, "y", "0"), e(nn, "width", "480"), e(nn, "height", "792"), e(nn, "overflow", "hidden"), e(S2, "transform", "translate(85 109)"), e(w0, "fill", "url(#I)"), e(w0, "d", "M387.7 90a22 22 0 0 0-19 11H560a10 10 0 0 1 10 10v851a10 10 0 0 1-10 10H365.7v12H560a22 22 0 0 0 22-22V112a22 22 0 0 0-22-22H387.7z"), e(w0, "transform", "translate(0 -411.6)"), e(k0, "fill", "url(#J)"), e(k0, "d", "M66 904v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), e(k0, "transform", "translate(0 -411.6)"), e(q0, "fill", "url(#K)"), e(q0, "d", "M570 900v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62h-12z"), e(q0, "transform", "translate(0 -411.6)"), e(ml, "fill", "url(#L)"), e(ml, "fill-rule", "evenodd"), e(ml, "d", "M136.9 40C42.9 40 27 93 27 168v1135c0 44.7 7.4 74.6 20 94.1 17.3 23 43 29.9 73 29.9h408c30 0 55.7-6.8 73-29.9 12.6-19.5 20-49.4 20-94.1V168c0-75-15.8-128-109.9-128H137zm-1.9 4h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H120c-45.4 0-90-15-90-120V172C30 97 45 44 135 44z"), e(ml, "transform", "translate(0 -411.6)"), e(yl, "fill", "#1f7e9e"), e(yl, "fill-opacity", ".3"), e(yl, "fill-rule", "evenodd"), e(yl, "d", "M-638 1019.4c-54.4 0-95-23-95-128v-1135c0-75 15.8-128 109.9-128H-249c94 0 109.9 53 109.9 128v1135c0 105-40.6 128-95 128h-161.4z"), e(oe, "width", "76"), e(oe, "height", "44"), e(oe, "x", "511"), e(oe, "y", "709.4"), e(oe, "fill", "url(#M)"), e(oe, "stroke", "var(--btn-border-stroke)"), e(oe, "stroke-linecap", "round"), e(oe, "stroke-linejoin", "round"), e(oe, "stroke-width", "2"), e(oe, "rx", "8"), e(oe, "ry", "8"), e(cr, "width", "68"), e(cr, "height", "35"), e(cr, "x", "515"), e(cr, "y", "713.4"), e(cr, "fill", "url(#N)"), e(cr, "rx", "4"), e(cr, "ry", "4"), e(_0, "fill", "url(#O)"), e(_0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(_0, "transform", "translate(0 -411.6)"), e(Nn, "class", "cp-button"), e(Nn, "data-cp", "KEYCODE_DIVIDE"), e(se, "width", "76"), e(se, "height", "44"), e(se, "x", "511"), e(se, "y", "709.4"), e(se, "fill", "url(#P)"), e(se, "stroke", "var(--btn-border-stroke)"), e(se, "stroke-linecap", "round"), e(se, "stroke-linejoin", "round"), e(se, "stroke-width", "2"), e(se, "rx", "8"), e(se, "ry", "8"), e(dr, "width", "68"), e(dr, "height", "35"), e(dr, "x", "515"), e(dr, "y", "713.4"), e(dr, "fill", "url(#Q)"), e(dr, "rx", "4"), e(dr, "ry", "4"), e(G0, "fill", "url(#R)"), e(G0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(G0, "transform", "translate(0 -411.6)"), e(ln, "transform", "translate(0 108)"), e(ln, "class", "cp-button"), e(ln, "data-cp", "KEYCODE_MINUS"), e(ce, "width", "76"), e(ce, "height", "44"), e(ce, "x", "511"), e(ce, "y", "709.4"), e(ce, "fill", "url(#S)"), e(ce, "stroke", "var(--btn-border-stroke)"), e(ce, "stroke-linecap", "round"), e(ce, "stroke-linejoin", "round"), e(ce, "stroke-width", "2"), e(ce, "rx", "8"), e(ce, "ry", "8"), e(fr, "width", "68"), e(fr, "height", "35"), e(fr, "x", "515"), e(fr, "y", "713.4"), e(fr, "fill", "url(#T)"), e(fr, "rx", "4"), e(fr, "ry", "4"), e(U0, "fill", "url(#U)"), e(U0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(U0, "transform", "translate(0 -411.6)"), e(an, "transform", "translate(0 162)"), e(an, "class", "cp-button"), e(an, "data-cp", "KEYCODE_PLUS"), e(de, "width", "76"), e(de, "height", "44"), e(de, "x", "511"), e(de, "y", "709.4"), e(de, "fill", "url(#V)"), e(de, "stroke", "var(--btn-border-stroke)"), e(de, "stroke-linecap", "round"), e(de, "stroke-linejoin", "round"), e(de, "stroke-width", "2"), e(de, "rx", "8"), e(de, "ry", "8"), e(pr, "width", "68"), e(pr, "height", "35"), e(pr, "x", "515"), e(pr, "y", "713.4"), e(pr, "fill", "url(#W)"), e(pr, "rx", "4"), e(pr, "ry", "4"), e(z0, "fill", "url(#X)"), e(z0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(z0, "transform", "translate(0 -411.6)"), e(on, "transform", "translate(0 216)"), e(on, "class", "cp-button"), e(on, "data-cp", "KEYCODE_EXE"), e(fe, "width", "76"), e(fe, "height", "44"), e(fe, "x", "511"), e(fe, "y", "709.4"), e(fe, "fill", "url(#Y)"), e(fe, "stroke", "var(--btn-border-stroke)"), e(fe, "stroke-linecap", "round"), e(fe, "stroke-linejoin", "round"), e(fe, "stroke-width", "2"), e(fe, "rx", "8"), e(fe, "ry", "8"), e(hr, "width", "68"), e(hr, "height", "35"), e(hr, "x", "515"), e(hr, "y", "713.4"), e(hr, "fill", "url(#Z)"), e(hr, "rx", "4"), e(hr, "ry", "4"), e(S0, "fill", "url(#aa)"), e(S0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(S0, "transform", "translate(0 -411.6)"), e(sn, "transform", "translate(-90)"), e(sn, "class", "cp-button"), e(sn, "data-cp", "KEYCODE_POWER"), e(pe, "width", "76"), e(pe, "height", "44"), e(pe, "x", "511"), e(pe, "y", "709.4"), e(pe, "fill", "url(#ab)"), e(pe, "stroke", "var(--btn-border-stroke)"), e(pe, "stroke-linecap", "round"), e(pe, "stroke-linejoin", "round"), e(pe, "stroke-width", "2"), e(pe, "rx", "8"), e(pe, "ry", "8"), e(ur, "width", "68"), e(ur, "height", "35"), e(ur, "x", "515"), e(ur, "y", "713.4"), e(ur, "fill", "url(#ac)"), e(ur, "rx", "4"), e(ur, "ry", "4"), e($0, "fill", "url(#ad)"), e($0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e($0, "transform", "translate(0 -411.6)"), e(cn, "transform", "translate(-180)"), e(cn, "class", "cp-button"), e(cn, "data-cp", "KEYCODE_Z"), e(he, "width", "76"), e(he, "height", "44"), e(he, "x", "511"), e(he, "y", "709.4"), e(he, "fill", "url(#ae)"), e(he, "stroke", "var(--btn-border-stroke)"), e(he, "stroke-linecap", "round"), e(he, "stroke-linejoin", "round"), e(he, "stroke-width", "2"), e(he, "rx", "8"), e(he, "ry", "8"), e(gr, "width", "68"), e(gr, "height", "35"), e(gr, "x", "515"), e(gr, "y", "713.4"), e(gr, "fill", "url(#af)"), e(gr, "rx", "4"), e(gr, "ry", "4"), e(M0, "fill", "url(#ag)"), e(M0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(M0, "transform", "translate(0 -411.6)"), e(dn, "transform", "translate(-270)"), e(dn, "class", "cp-button"), e(dn, "data-cp", "KEYCODE_Y"), e(ue, "width", "76"), e(ue, "height", "44"), e(ue, "x", "511"), e(ue, "y", "709.4"), e(ue, "fill", "url(#ah)"), e(ue, "stroke", "var(--btn-border-stroke)"), e(ue, "stroke-linecap", "round"), e(ue, "stroke-linejoin", "round"), e(ue, "stroke-width", "2"), e(ue, "rx", "8"), e(ue, "ry", "8"), e(vr, "width", "68"), e(vr, "height", "35"), e(vr, "x", "515"), e(vr, "y", "713.4"), e(vr, "fill", "url(#ai)"), e(vr, "rx", "4"), e(vr, "ry", "4"), e(O0, "fill", "url(#aj)"), e(O0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(O0, "transform", "translate(0 -411.6)"), e(fn, "transform", "translate(-360)"), e(fn, "class", "cp-button"), e(fn, "data-cp", "KEYCODE_X"), e(ge, "width", "76"), e(ge, "height", "44"), e(ge, "x", "511"), e(ge, "y", "709.4"), e(ge, "fill", "url(#ak)"), e(ge, "stroke", "var(--btn-border-stroke)"), e(ge, "stroke-linecap", "round"), e(ge, "stroke-linejoin", "round"), e(ge, "stroke-width", "2"), e(ge, "rx", "8"), e(ge, "ry", "8"), e(mr, "width", "68"), e(mr, "height", "35"), e(mr, "x", "515"), e(mr, "y", "713.4"), e(mr, "fill", "url(#al)"), e(mr, "rx", "4"), e(mr, "ry", "4"), e(C0, "fill", "url(#am)"), e(C0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(C0, "transform", "translate(0 -411.6)"), e(pn, "transform", "translate(-450 54)"), e(pn, "class", "cp-button"), e(pn, "data-cp", "KEYCODE_OPEN_PARENTHESIS"), e(ve, "width", "76"), e(ve, "height", "44"), e(ve, "x", "511"), e(ve, "y", "709.4"), e(ve, "fill", "url(#an)"), e(ve, "stroke", "var(--btn-border-stroke)"), e(ve, "stroke-linecap", "round"), e(ve, "stroke-linejoin", "round"), e(ve, "stroke-width", "2"), e(ve, "rx", "8"), e(ve, "ry", "8"), e(yr, "width", "68"), e(yr, "height", "35"), e(yr, "x", "515"), e(yr, "y", "713.4"), e(yr, "fill", "url(#ao)"), e(yr, "rx", "4"), e(yr, "ry", "4"), e(E0, "fill", "url(#ap)"), e(E0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(E0, "transform", "translate(0 -411.6)"), e(hn, "transform", "translate(-450)"), e(hn, "class", "cp-button"), e(hn, "data-cp", "KEYCODE_EQUALS"), e(me, "width", "76"), e(me, "height", "44"), e(me, "x", "511"), e(me, "y", "709.4"), e(me, "fill", "url(#aq)"), e(me, "stroke", "var(--btn-border-stroke)"), e(me, "stroke-linecap", "round"), e(me, "stroke-linejoin", "round"), e(me, "stroke-width", "2"), e(me, "rx", "8"), e(me, "ry", "8"), e(xr, "width", "68"), e(xr, "height", "35"), e(xr, "x", "515"), e(xr, "y", "713.4"), e(xr, "fill", "url(#ar)"), e(xr, "rx", "4"), e(xr, "ry", "4"), e(j0, "fill", "url(#as)"), e(j0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(j0, "transform", "translate(0 -411.6)"), e(un, "transform", "translate(-450 108)"), e(un, "class", "cp-button"), e(un, "data-cp", "KEYCODE_CLOSE_PARENTHESIS"), e(ye, "width", "76"), e(ye, "height", "44"), e(ye, "x", "511"), e(ye, "y", "709.4"), e(ye, "fill", "url(#at)"), e(ye, "stroke", "var(--btn-border-stroke)"), e(ye, "stroke-linecap", "round"), e(ye, "stroke-linejoin", "round"), e(ye, "stroke-width", "2"), e(ye, "rx", "8"), e(ye, "ry", "8"), e(br, "width", "68"), e(br, "height", "35"), e(br, "x", "515"), e(br, "y", "713.4"), e(br, "fill", "url(#au)"), e(br, "rx", "4"), e(br, "ry", "4"), e(H0, "fill", "url(#av)"), e(H0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(H0, "transform", "translate(0 -411.6)"), e(gn, "transform", "translate(-450 162)"), e(gn, "class", "cp-button"), e(gn, "data-cp", "KEYCODE_COMMA"), e(xe, "width", "76"), e(xe, "height", "44"), e(xe, "x", "511"), e(xe, "y", "709.4"), e(xe, "fill", "url(#aw)"), e(xe, "stroke", "var(--btn-border-stroke)"), e(xe, "stroke-linecap", "round"), e(xe, "stroke-linejoin", "round"), e(xe, "stroke-width", "2"), e(xe, "rx", "8"), e(xe, "ry", "8"), e(wr, "width", "68"), e(wr, "height", "35"), e(wr, "x", "515"), e(wr, "y", "713.4"), e(wr, "fill", "url(#ax)"), e(wr, "rx", "4"), e(wr, "ry", "4"), e(D0, "fill", "url(#ay)"), e(D0, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(D0, "transform", "translate(0 -411.6)"), e(vn, "transform", "translate(-450 216)"), e(vn, "class", "cp-button"), e(vn, "data-cp", "KEYCODE_NEGATIVE"), e(be, "width", "116"), e(be, "height", "36"), e(be, "x", "511"), e(be, "y", "709.4"), e(be, "fill", "url(#az)"), e(be, "stroke", "var(--btn-border-stroke)"), e(be, "stroke-linecap", "round"), e(be, "stroke-linejoin", "round"), e(be, "stroke-width", "2"), e(be, "rx", "8"), e(be, "ry", "8"), e(kr, "width", "107"), e(kr, "height", "27"), e(kr, "x", "515"), e(kr, "y", "713.4"), e(kr, "fill", "url(#aA)"), e(kr, "rx", "4"), e(kr, "ry", "4"), e(R0, "fill", "url(#aB)"), e(R0, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), e(R0, "transform", "translate(0 -411.6)"), e(mn, "transform", "translate(-425 -113)"), e(mn, "class", "cp-button"), e(mn, "data-cp", "KEYCODE_KEYBOARD"), e(we, "width", "116"), e(we, "height", "36"), e(we, "x", "511"), e(we, "y", "709.4"), e(we, "fill", "url(#aC)"), e(we, "stroke", "var(--btn-border-stroke)"), e(we, "stroke-linecap", "round"), e(we, "stroke-linejoin", "round"), e(we, "stroke-width", "2"), e(we, "rx", "8"), e(we, "ry", "8"), e(qr, "width", "107"), e(qr, "height", "27"), e(qr, "x", "515"), e(qr, "y", "713.4"), e(qr, "fill", "url(#aD)"), e(qr, "rx", "4"), e(qr, "ry", "4"), e(B0, "fill", "url(#aE)"), e(B0, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), e(B0, "transform", "translate(0 -411.6)"), e(yn, "transform", "translate(-425 -65)"), e(yn, "class", "cp-button"), e(yn, "data-cp", "KEYCODE_SHIFT"), e(ke, "width", "116"), e(ke, "height", "36"), e(ke, "x", "511"), e(ke, "y", "709.4"), e(ke, "fill", "url(#aF)"), e(ke, "stroke", "var(--btn-border-stroke)"), e(ke, "stroke-linecap", "round"), e(ke, "stroke-linejoin", "round"), e(ke, "stroke-width", "2"), e(ke, "rx", "8"), e(ke, "ry", "8"), e(_r, "width", "107"), e(_r, "height", "27"), e(_r, "x", "515"), e(_r, "y", "713.4"), e(_r, "fill", "url(#aG)"), e(_r, "rx", "4"), e(_r, "ry", "4"), e(Q0, "fill", "url(#aH)"), e(Q0, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), e(Q0, "transform", "translate(0 -411.6)"), e(xn, "transform", "translate(-65 -113)"), e(xn, "class", "cp-button"), e(xn, "data-cp", "KEYCODE_BACKSPACE"), e(qe, "width", "116"), e(qe, "height", "36"), e(qe, "x", "511"), e(qe, "y", "709.4"), e(qe, "fill", "url(#aI)"), e(qe, "stroke", "var(--btn-border-stroke)"), e(qe, "stroke-linecap", "round"), e(qe, "stroke-linejoin", "round"), e(qe, "stroke-width", "2"), e(qe, "rx", "8"), e(qe, "ry", "8"), e(Gr, "width", "107"), e(Gr, "height", "27"), e(Gr, "x", "515"), e(Gr, "y", "713.4"), e(Gr, "fill", "url(#aJ)"), e(Gr, "rx", "4"), e(Gr, "ry", "4"), e(P0, "fill", "url(#aK)"), e(P0, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), e(P0, "transform", "translate(0 -411.6)"), e(bn, "transform", "translate(-65 -65)"), e(bn, "class", "cp-button"), e(bn, "data-cp", "KEYCODE_CLEAR"), e(M2, "fill", "url(#aL)"), e(M2, "d", "M560 589.4s10 4.4 10 10v77a10 10 0 0 1-10 10H365.7v12H560c13.2 0 22-9.3 22-28v-70c0-12.2-22-22-22-22z"), e(O2, "fill", "url(#aM)"), e(O2, "d", "M66 618.4v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), e(C2, "fill", "url(#aN)"), e(C2, "d", "M570 614.4v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62z"), e(Ur, "width", "204"), e(Ur, "height", "116"), e(Ur, "x", "221"), e(Ur, "y", "580.4"), e(Ur, "fill", "url(#aO)"), e(Ur, "rx", "25"), e(Ur, "ry", "58"), e(zr, "width", "200"), e(zr, "height", "112"), e(zr, "x", "223"), e(zr, "y", "582.4"), e(zr, "fill", "url(#aP)"), e(zr, "rx", "23"), e(zr, "ry", "55.9"), e(Sr, "width", "185"), e(Sr, "height", "98"), e(Sr, "x", "231"), e(Sr, "y", "589.4"), e(Sr, "fill", "url(#aQ)"), e(Sr, "rx", "16"), e(Sr, "ry", "47.5"), e($r, "class", "cp-button cp-button-arrow"), e($r, "data-cp", "KEYCODE_UP"), e($r, "fill", "#7f7f7f"), e($r, "stroke", "url(#aR)"), e($r, "stroke-linecap", "round"), e($r, "stroke-linejoin", "round"), e($r, "d", "M330.2 611.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), e(Ae, "width", "104"), e(Ae, "height", "12"), e(Ae, "x", "272"), e(Ae, "y", "632.4"), e(Ae, "fill", "url(#aS)"), e(Ae, "stroke", "url(#aT)"), e(Ae, "stroke-linecap", "round"), e(Ae, "stroke-linejoin", "round"), e(Ae, "rx", "2"), e(Ae, "ry", "2"), e(at, "class", "cp-button cp-button-arrow"), e(at, "data-cp", "KEYCODE_DOWN"), e(at, "fill", "#7f7f7f"), e(at, "stroke", "url(#aU)"), e(at, "stroke-linecap", "round"), e(at, "stroke-linejoin", "round"), e(at, "d", "M-317.8-665.2c-.4.8-5.3.8-6.2.8-.9 0-5.8 0-6.2-.8-.5-.7 2-5 2.4-5.8.4-.8 3-5 3.8-5 .9 0 3.4 4.2 3.8 5 .5.8 2.9 5 2.4 5.8z"), e(at, "transform", "scale(-1)"), e(ot, "class", "cp-button cp-button-arrow"), e(ot, "data-cp", "KEYCODE_LEFT"), e(ot, "fill", "#7f7f7f"), e(ot, "stroke", "url(#aV)"), e(ot, "stroke-linecap", "round"), e(ot, "stroke-linejoin", "round"), e(ot, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), e(ot, "transform", "rotate(-90 255.8 641.5)"), e(st, "class", "cp-button cp-button-arrow"), e(st, "data-cp", "KEYCODE_RIGHT"), e(st, "fill", "#7f7f7f"), e(st, "stroke", "url(#aW)"), e(st, "stroke-linecap", "round"), e(st, "stroke-linejoin", "round"), e(st, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), e(st, "transform", "matrix(0 -1 -1 0 1033.7 897.4)"), e(L0, "fill", "url(#aX)"), e(L0, "d", "m245 1098.7-2.5 6.7c1.1.4 2.3.6 3.5.6h154c2 0 3.8-.6 5.6-1.7l-4-5.6c-.5.2-1 .3-1.6.3H247l-2-.3z"), e(L0, "transform", "translate(0 -411.6)"), e(_e, "width", "102"), e(_e, "height", "44"), e(_e, "x", "511"), e(_e, "y", "709.4"), e(_e, "fill", "url(#aY)"), e(_e, "stroke", "var(--btn-border-stroke)"), e(_e, "stroke-linecap", "round"), e(_e, "stroke-linejoin", "round"), e(_e, "stroke-width", "2"), e(_e, "rx", "8"), e(_e, "ry", "8"), e(Mr, "width", "94"), e(Mr, "height", "35"), e(Mr, "x", "515"), e(Mr, "y", "713.4"), e(Mr, "fill", "url(#aZ)"), e(Mr, "rx", "4"), e(Mr, "ry", "4"), e(Zn, "transform", "translate(-117 216)"), e(Zn, "class", "cp-button"), e(Zn, "data-cp", "KEYCODE_EXP"), e(Ge, "width", "102"), e(Ge, "height", "44"), e(Ge, "x", "511"), e(Ge, "y", "709.4"), e(Ge, "fill", "url(#ba)"), e(Ge, "stroke", "var(--btn-border-stroke)"), e(Ge, "stroke-linecap", "round"), e(Ge, "stroke-linejoin", "round"), e(Ge, "stroke-width", "2"), e(Ge, "rx", "8"), e(Ge, "ry", "8"), e(Or, "width", "94"), e(Or, "height", "35"), e(Or, "x", "515"), e(Or, "y", "713.4"), e(Or, "fill", "url(#bb)"), e(Or, "rx", "4"), e(Or, "ry", "4"), e(Xn, "transform", "translate(-117 162)"), e(Xn, "class", "cp-button"), e(Xn, "data-cp", "KEYCODE_3"), e(Ue, "width", "102"), e(Ue, "height", "44"), e(Ue, "x", "511"), e(Ue, "y", "709.4"), e(Ue, "fill", "url(#bc)"), e(Ue, "stroke", "var(--btn-border-stroke)"), e(Ue, "stroke-linecap", "round"), e(Ue, "stroke-linejoin", "round"), e(Ue, "stroke-width", "2"), e(Ue, "rx", "8"), e(Ue, "ry", "8"), e(Cr, "width", "94"), e(Cr, "height", "35"), e(Cr, "x", "515"), e(Cr, "y", "713.4"), e(Cr, "fill", "url(#bd)"), e(Cr, "rx", "4"), e(Cr, "ry", "4"), e(Wn, "transform", "translate(-117 108)"), e(Wn, "class", "cp-button"), e(Wn, "data-cp", "KEYCODE_6"), e(ze, "width", "102"), e(ze, "height", "44"), e(ze, "x", "511"), e(ze, "y", "709.4"), e(ze, "fill", "url(#be)"), e(ze, "stroke", "var(--btn-border-stroke)"), e(ze, "stroke-linecap", "round"), e(ze, "stroke-linejoin", "round"), e(ze, "stroke-width", "2"), e(ze, "rx", "8"), e(ze, "ry", "8"), e(Er, "width", "94"), e(Er, "height", "35"), e(Er, "x", "515"), e(Er, "y", "713.4"), e(Er, "fill", "url(#bf)"), e(Er, "rx", "4"), e(Er, "ry", "4"), e(Jn, "transform", "translate(-117 54)"), e(Jn, "class", "cp-button"), e(Jn, "data-cp", "KEYCODE_9"), e(Se, "width", "102"), e(Se, "height", "44"), e(Se, "x", "511"), e(Se, "y", "709.4"), e(Se, "fill", "url(#bg)"), e(Se, "stroke", "var(--btn-border-stroke)"), e(Se, "stroke-linecap", "round"), e(Se, "stroke-linejoin", "round"), e(Se, "stroke-width", "2"), e(Se, "rx", "8"), e(Se, "ry", "8"), e(jr, "width", "94"), e(jr, "height", "35"), e(jr, "x", "515"), e(jr, "y", "713.4"), e(jr, "fill", "url(#bh)"), e(jr, "rx", "4"), e(jr, "ry", "4"), e(el, "transform", "translate(-238 216)"), e(el, "class", "cp-button"), e(el, "data-cp", "KEYCODE_DOT"), e($e, "width", "102"), e($e, "height", "44"), e($e, "x", "511"), e($e, "y", "709.4"), e($e, "fill", "url(#bi)"), e($e, "stroke", "var(--btn-border-stroke)"), e($e, "stroke-linecap", "round"), e($e, "stroke-linejoin", "round"), e($e, "stroke-width", "2"), e($e, "rx", "8"), e($e, "ry", "8"), e(Hr, "width", "94"), e(Hr, "height", "35"), e(Hr, "x", "515"), e(Hr, "y", "713.4"), e(Hr, "fill", "url(#bj)"), e(Hr, "rx", "4"), e(Hr, "ry", "4"), e(tl, "transform", "translate(-238 162)"), e(tl, "class", "cp-button"), e(tl, "data-cp", "KEYCODE_2"), e(Me, "width", "102"), e(Me, "height", "44"), e(Me, "x", "511"), e(Me, "y", "709.4"), e(Me, "fill", "url(#bk)"), e(Me, "stroke", "var(--btn-border-stroke)"), e(Me, "stroke-linecap", "round"), e(Me, "stroke-linejoin", "round"), e(Me, "stroke-width", "2"), e(Me, "rx", "8"), e(Me, "ry", "8"), e(Dr, "width", "94"), e(Dr, "height", "35"), e(Dr, "x", "515"), e(Dr, "y", "713.4"), e(Dr, "fill", "url(#bl)"), e(Dr, "rx", "4"), e(Dr, "ry", "4"), e(rl, "transform", "translate(-238 108)"), e(rl, "class", "cp-button"), e(rl, "data-cp", "KEYCODE_5"), e(Oe, "width", "102"), e(Oe, "height", "44"), e(Oe, "x", "511"), e(Oe, "y", "709.4"), e(Oe, "fill", "url(#bm)"), e(Oe, "stroke", "var(--btn-border-stroke)"), e(Oe, "stroke-linecap", "round"), e(Oe, "stroke-linejoin", "round"), e(Oe, "stroke-width", "2"), e(Oe, "rx", "8"), e(Oe, "ry", "8"), e(Rr, "width", "94"), e(Rr, "height", "35"), e(Rr, "x", "515"), e(Rr, "y", "713.4"), e(Rr, "fill", "url(#bn)"), e(Rr, "rx", "4"), e(Rr, "ry", "4"), e(nl, "transform", "translate(-238 54)"), e(nl, "class", "cp-button"), e(nl, "data-cp", "KEYCODE_8"), e(ct, "width", "76"), e(ct, "height", "44"), e(ct, "x", "511"), e(ct, "y", "1085.4"), e(ct, "fill", "#15d81e"), e(ct, "fill-opacity", ".2"), e(ct, "rx", "8"), e(ct, "ry", "8"), e(Ce, "width", "102"), e(Ce, "height", "44"), e(Ce, "x", "511"), e(Ce, "y", "709.4"), e(Ce, "fill", "url(#bo)"), e(Ce, "stroke", "var(--btn-border-stroke)"), e(Ce, "stroke-linecap", "round"), e(Ce, "stroke-linejoin", "round"), e(Ce, "stroke-width", "2"), e(Ce, "rx", "8"), e(Ce, "ry", "8"), e(Br, "width", "94"), e(Br, "height", "35"), e(Br, "x", "515"), e(Br, "y", "713.4"), e(Br, "fill", "url(#bp)"), e(Br, "rx", "4"), e(Br, "ry", "4"), e(ll, "transform", "translate(-359 216)"), e(ll, "class", "cp-button"), e(ll, "data-cp", "KEYCODE_0"), e(Ee, "width", "102"), e(Ee, "height", "44"), e(Ee, "x", "511"), e(Ee, "y", "709.4"), e(Ee, "fill", "url(#bq)"), e(Ee, "stroke", "var(--btn-border-stroke)"), e(Ee, "stroke-linecap", "round"), e(Ee, "stroke-linejoin", "round"), e(Ee, "stroke-width", "2"), e(Ee, "rx", "8"), e(Ee, "ry", "8"), e(Qr, "width", "94"), e(Qr, "height", "35"), e(Qr, "x", "515"), e(Qr, "y", "713.4"), e(Qr, "fill", "url(#br)"), e(Qr, "rx", "4"), e(Qr, "ry", "4"), e(il, "transform", "translate(-359 162)"), e(il, "class", "cp-button"), e(il, "data-cp", "KEYCODE_1"), e(je, "width", "102"), e(je, "height", "44"), e(je, "x", "511"), e(je, "y", "709.4"), e(je, "fill", "url(#bs)"), e(je, "stroke", "var(--btn-border-stroke)"), e(je, "stroke-linecap", "round"), e(je, "stroke-linejoin", "round"), e(je, "stroke-width", "2"), e(je, "rx", "8"), e(je, "ry", "8"), e(Pr, "width", "94"), e(Pr, "height", "35"), e(Pr, "x", "515"), e(Pr, "y", "713.4"), e(Pr, "fill", "url(#bt)"), e(Pr, "rx", "4"), e(Pr, "ry", "4"), e(al, "transform", "translate(-359 108)"), e(al, "class", "cp-button"), e(al, "data-cp", "KEYCODE_4"), e(He, "width", "102"), e(He, "height", "44"), e(He, "x", "511"), e(He, "y", "709.4"), e(He, "fill", "url(#bu)"), e(He, "stroke", "var(--btn-border-stroke)"), e(He, "stroke-linecap", "round"), e(He, "stroke-linejoin", "round"), e(He, "stroke-width", "2"), e(He, "rx", "8"), e(He, "ry", "8"), e(Lr, "width", "94"), e(Lr, "height", "35"), e(Lr, "x", "515"), e(Lr, "y", "713.4"), e(Lr, "fill", "url(#bv)"), e(Lr, "rx", "4"), e(Lr, "ry", "4"), e(ol, "transform", "translate(-359 54)"), e(ol, "class", "cp-button"), e(ol, "data-cp", "KEYCODE_7"), e(wn, "fill", "#3d3d3d"), e(wn, "d", "M201.5 795.5h-2.4q-.7 0-.3-.6l7.5-18.7h-8.8q-.6 0-.6-.7v-1.9q0-.6.6-.6h11.8q.7 0 .7.6v2.2q0 .5-.4 1.5l-7.1 17.7q-.2.5-1 .5z"), e(wn, "font-family", "Rajdhani"), e(wn, "font-size", "35"), e(wn, "font-weight", "600"), e(wn, "letter-spacing", "0"), e(xl, "word-spacing", "0"), e(xl, "class", "cp-button-label"), G(xl, "line-height", "125%"), e(Fr, "fill", "#fff"), e(Fr, "d", "M199.3 723.3q-3.8 4-8 8l1.9 4.3 1.1 2.5q.4.8.8 1.2l.7.5 1.1.3-.2 1h-4.9l-2.7-8-1.2 1.2-1.5 1.6-1 1.3-.4.9-.1.8q0 .5.3.8.3.3 1 .4l-.3 1h-5.5l-.4-1q4.3-4.6 8.4-8.5l-1.8-4.3-1-2q-.3-.8-.6-1.1l-.8-.6-1.2-.3.2-1h5l2.5 7.4 1.8-1.8 1.2-1.5q.4-.5.5-1 .2-.4.2-.9 0-1-1.3-1.2l.2-1h5.6l.4 1z"), e(Fr, "font-family", "Cambria"), e(Fr, "font-size", "40"), e(Fr, "font-style", "italic"), e(Fr, "font-weight", "400"), e(Fr, "letter-spacing", "0"), e(bl, "word-spacing", "0"), e(bl, "class", "cp-button-label"), G(bl, "line-height", "125%"), e(kn, "x", "1714.4"), e(kn, "y", "880.6"), e(kn, "font-family", "Lucida Calligraphy"), e(kn, "font-style", "italic"), e(kn, "font-weight", "400"), e(De, "xml:space", "preserve"), e(De, "x", "1714.4"), e(De, "y", "880.6"), e(De, "font-family", "Script MT Bold"), e(De, "font-size", "40"), e(De, "font-weight", "700"), e(De, "letter-spacing", "0"), e(De, "word-spacing", "0"), G(De, "line-height", "125%"), e(qn, "fill", "#3d3d3d"), e(qn, "d", "M322.2 792.6h2.7q1.3 0 2-.6.6-.6.6-2v-1.8q0-2.6-2.6-2.6h-2.7q-2.5 0-2.5 2.6v1.9q0 1.3.6 1.9.6.6 1.9.6zm0-9.8h2.7q2.6 0 2.6-2.6v-1.7q0-1.3-.7-2-.6-.5-1.9-.5h-2.7q-1.3 0-2 .6-.5.6-.5 1.9v1.7q0 2.6 2.5 2.6zm3.2 12.7h-3.7q-2.6 0-4-1.3t-1.4-3.9v-1.9q0-3.2 2.4-4.2-2.4-1-2.4-4.2v-1.8q0-2.5 1.4-3.8 1.4-1.4 4-1.4h3.7q2.6 0 4 1.4 1.5 1.3 1.5 3.8v1.8q0 1.6-.7 2.7-.6 1.1-1.7 1.5 2.4 1 2.4 4.3v1.8q0 2.6-1.5 3.9-1.4 1.3-4 1.3z"), e(qn, "font-family", "Rajdhani"), e(qn, "font-size", "35"), e(qn, "font-weight", "600"), e(qn, "letter-spacing", "0"), e(wl, "word-spacing", "0"), e(wl, "class", "cp-button-label"), G(wl, "line-height", "125%"), e(_n, "fill", "#3d3d3d"), e(_n, "d", "M441.9 784.1h4.9v-5.5q0-2.6-2.6-2.6H442q-2.5 0-2.5 2.6v3q0 2.5 2.5 2.5zm2.8 11.4h-7q-.7 0-.7-.6v-1.8q0-.5.6-.5h6.6q2.6 0 2.6-2.6v-3h-5.4q-2.6 0-4-1.4-1.5-1.4-1.5-4v-3.3q0-2.5 1.4-4 1.5-1.4 4-1.4h3.4q2.6 0 4 1.5 1.5 1.4 1.5 4V790q0 2.6-1.4 4-1.5 1.4-4 1.4z"), e(_n, "font-family", "Rajdhani"), e(_n, "font-size", "35"), e(_n, "font-weight", "600"), e(_n, "letter-spacing", "0"), e(kl, "word-spacing", "0"), e(kl, "class", "cp-button-label"), G(kl, "line-height", "125%"), e(Gn, "fill", "#3d3d3d"), e(Gn, "d", "M204 842.2V830l-7 12.3h7zm2.6 7.3h-2q-.7 0-.7-.6v-3.6h-9.2q-1 0-1-1v-1.1q0-.8.3-1.4l7.8-13.9.5-.7q.3-.2.8-.2h3q1 0 1 1v14.2h2.6q.6 0 .6.6v1.8q0 .7-.6.7h-2.5v3.6q0 .6-.6.6z"), e(Gn, "font-family", "Rajdhani"), e(Gn, "font-size", "35"), e(Gn, "font-weight", "600"), e(Gn, "letter-spacing", "0"), e(ql, "word-spacing", "0"), e(ql, "class", "cp-button-label"), G(ql, "line-height", "125%"), e(Un, "fill", "#3d3d3d"), e(Un, "d", "M323.9 837.6h-2.2q-.6 0-1.1.3-.4.2-.6.5-.3.8-.9.8h-2.2q-.6 0-.6-.6v-11q0-.6.6-.6h11.9q.6 0 .6.6v2q0 .6-.6.6h-9v6.4q.5-1.7 2.9-1.7h2q2.6 0 3.9 1.3 1.3 1.3 1.3 3.8v4.1q0 2.6-1.4 4-1.5 1.4-4 1.4h-3q-2.6 0-4-1.4t-1.4-4v-1q0-.5.6-.5h2.2q.6 0 .6.6v.9q0 2.5 2.5 2.5h2q2.6 0 2.6-2.5v-3.6q0-1.5-.6-2.2-.6-.7-2.1-.7z"), e(Un, "font-family", "Rajdhani"), e(Un, "font-size", "35"), e(Un, "font-weight", "600"), e(Un, "letter-spacing", "0"), e(_l, "word-spacing", "0"), e(_l, "class", "cp-button-label"), G(_l, "line-height", "125%"), e(zn, "fill", "#3d3d3d"), e(zn, "d", "M442 846.6h2.5q2.5 0 2.5-2.6v-2.8q0-2.6-2.5-2.6h-5v5.4q0 2.6 2.6 2.6zm3 3h-3.4q-2.6 0-4-1.5-1.5-1.4-1.5-4v-11.7q0-2.5 1.5-4 1.4-1.4 4-1.4h7q.5 0 .5.6v1.8q0 .6-.6.6h-6.4q-2.5 0-2.5 2.6v3h5.3q2.6 0 4 1.4 1.5 1.4 1.5 4v3.1q0 2.6-1.4 4-1.5 1.4-4 1.4z"), e(zn, "font-family", "Rajdhani"), e(zn, "font-size", "35"), e(zn, "font-weight", "600"), e(zn, "letter-spacing", "0"), e(Gl, "word-spacing", "0"), e(Gl, "class", "cp-button-label"), G(Gl, "line-height", "125%"), e(Sn, "fill", "#3d3d3d"), e(Sn, "d", "M197.2 886.5v-2q0-.6.5-.9l3.6-2.2q.7-.4 1.2-.4h2q.7 0 .7.6V903q0 .6-.6.6h-2.3q-.6 0-.6-.6v-18.2l-3.8 2.2q-.7.3-.7-.4z"), e(Sn, "font-family", "Rajdhani"), e(Sn, "font-size", "35"), e(Sn, "font-weight", "600"), e(Sn, "letter-spacing", "0"), e(Ul, "word-spacing", "0"), e(Ul, "class", "cp-button-label"), G(Ul, "line-height", "125%"), e($n, "fill", "#3d3d3d"), e($n, "d", "M316 903v-3.3q0-2.2 2-3.6l6.5-5.4q1.7-1.3 1.7-3.1v-1.2q0-2.5-2.6-2.5h-1.7q-1.4 0-2 .6-.6.6-.6 2v1.2q0 .7-.6.7h-2.2q-.6 0-.6-.7v-1.3q0-2.6 1.4-4 1.5-1.4 4-1.4h2.8q2.6 0 4 1.4t1.4 4v1.4q0 2.7-2.1 4.5l-6.7 5.5q-.8.7-.8 1.6v1h9q.7 0 .7.7v1.8q0 .6-.6.6h-12.3q-.6 0-.6-.6z"), e($n, "font-family", "Rajdhani"), e($n, "font-size", "35"), e($n, "font-weight", "600"), e($n, "letter-spacing", "0"), e(zl, "word-spacing", "0"), e(zl, "class", "cp-button-label"), G(zl, "line-height", "125%"), e(Mn, "fill", "#3d3d3d"), e(Mn, "d", "M442 890.8h1.9q2.6 0 2.6-2.5v-1.9q0-2.5-2.6-2.5h-2q-1.4 0-2 .6-.6.6-.6 2v1q0 .6-.6.6h-2.2q-.6 0-.6-.6v-1.1q0-2.6 1.4-4t4-1.4h3q2.7 0 4.1 1.4 1.4 1.4 1.4 4v1.9q0 3-2.8 4 2.8.6 2.8 3.8v2q0 2.6-1.4 4t-4 1.4h-3q-2.7 0-4-1.4-1.5-1.4-1.5-4V897q0-.6.6-.6h2.2q.6 0 .6.6v1.2q0 1.3.6 2 .6.5 2 .5h2q2.6 0 2.6-2.5v-2q0-2.5-2.6-2.5h-2q-.5 0-.5-.6v-1.5q0-.7.6-.7z"), e(Mn, "font-family", "Rajdhani"), e(Mn, "font-size", "35"), e(Mn, "font-weight", "600"), e(Mn, "letter-spacing", "0"), e(Sl, "word-spacing", "0"), e(Sl, "class", "cp-button-label"), G(Sl, "line-height", "125%"), e(On, "fill", "#3d3d3d"), e(On, "d", "M204.2 954.6h2.5q2.6 0 2.6-2.6v-11.4q0-2.6-2.6-2.6h-2.5q-2.5 0-2.5 2.6V952q0 2.6 2.5 2.6zm3 3h-3.5q-2.6 0-4-1.5-1.4-1.4-1.4-4v-11.7q0-2.5 1.4-4 1.4-1.4 4-1.4h3.5q2.6 0 4 1.5 1.4 1.4 1.4 4V952q0 2.6-1.4 4t-4 1.4z"), e(On, "font-family", "Rajdhani"), e(On, "font-size", "35"), e(On, "font-weight", "600"), e(On, "letter-spacing", "0"), e($l, "word-spacing", "0"), e($l, "class", "cp-button-label"), G($l, "line-height", "125%"), e(Kr, "fill", "#3d3d3d"), e(Kr, "d", "M387 1061.8h-10q-.5 0-.5-.5V1042q0-.5.5-.5h10q.6 0 .6.5v1.6q0 .6-.5.6h-7.2q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.5.6h-6.1q-.4 0-.4.3v5.6q0 .3.4.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.3-.1q-.1-.2 0-.4l5.2-10-5-9.2v-.3q.1-.2.4-.2h2.2q.6 0 .9.5l3.6 7.3h.1l3.7-7.3q.2-.5.8-.5h2.3q.3 0 .3.2.2.2 0 .4l-5 9.1 5.2 10q.2.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7-4 7.7q-.2.5-.7.5zm17.8 0h-2q-.6 0-.6-.5V1042q0-.5.6-.5h7.5q2.3 0 3.6 1.3 1.2 1.2 1.2 3.6v3.2q0 2.3-1.2 3.6-1.3 1.3-3.6 1.3h-4.6q-.4 0-.4.3v6.4q0 .5-.5.5zm.8-9.9h4.2q2.3 0 2.3-2.3v-3q0-2.3-2.3-2.3h-4.2q-.3 0-.3.3v7q0 .3.3.3z"), e(Kr, "font-family", "Rajdhani"), e(Kr, "font-size", "31.5"), e(Kr, "font-weight", "600"), e(Kr, "letter-spacing", "0"), e(Kr, "transform", "scale(1.1 .9)"), e(Ml, "word-spacing", "0"), e(Ml, "class", "cp-button-label"), G(Ml, "line-height", "125%"), e(F0, "fill", "#3d3d3d"), e(F0, "d", "M327 946.4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z"), e(F0, "class", "cp-button-label"), e(Ne, "fill", "#fff"), e(Ne, "d", "m273.8 721.7-.3 1.7h.5c.4 0 .6.2.7.2l.3.4.2 1.5 1.4 10.6-1.4 1.8-1.1 1.2-.9.6-.5.3h-1l-.2-.5v-.5h-2l-.8 3.5.4.2 1 .2a5.6 5.6 0 0 0 2.5-.1c.5-.1 1-.4 1.5-.7a9 9 0 0 0 1.6-1.3 109.4 109.4 0 0 0 6.7-8.7l3-4.7 2-4.3v-.2l-.6-1.2h-4.5l-.3 1.7h.6c.4 0 .6.2.7.2v.6c0 1.4-1.4 4.3-4 8l-1-10.5h-4.6z"), e(Ne, "font-family", "Script MT Bold"), e(Ne, "font-size", "29.8"), e(Ne, "font-weight", "700"), e(Ne, "letter-spacing", "0"), e(Ne, "word-spacing", "0"), e(Ne, "class", "cp-button-label"), G(Ne, "line-height", "125%"), e(Ar, "fill", "#fff"), e(Ar, "d", "m375.3 734.5-1.1 5.5H360l-.4-1 10.7-12.2 3.3-3.7v-.2H369q-1 0-1.5.2-.5.1-1 .5l-1 1q-.5.6-1.2 1.9h-1.7l1.1-5.1h14l.3 1-14 16h6.3q.6-.2 1.1-.6.5-.3 1-1t1.2-2.3h1.7z"), e(Ar, "font-family", "Cambria"), e(Ar, "font-size", "40"), e(Ar, "font-style", "italic"), e(Ar, "font-weight", "400"), e(Ar, "letter-spacing", "0"), e(Ol, "word-spacing", "0"), e(Ol, "class", "cp-button-label"), G(Ol, "line-height", "125%"), e(Cn, "fill", "#fff"), e(Cn, "d", "m102 795-2.6 2.5-1-1-1.3-1.3-2.6-2.6q-.6-1-.6-2v-10.8q0-1 .6-2l2.3-2.5 1.1-1 1.5-1.4 2.6 2.5-1.3 1.2-2.2 2.1q-1 1-1 1.2v10.6q0 .3 1.9 2l2.7 2.5z"), e(Cn, "font-family", "Blender Pro"), e(Cn, "font-size", "35"), e(Cn, "font-weight", "700"), e(Cn, "letter-spacing", "0"), e(Cl, "word-spacing", "0"), e(Cl, "class", "cp-button-label"), G(Cl, "line-height", "125%"), e(En, "fill", "#fff"), e(En, "d", "M102 844.6q0 1.1-.6 2-.6.8-2.6 2.6l-2.4 2.3-2.6-2.6q1-.7 2.7-2.3 1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2.1-2l-1.3-1.3 2.5-2.5 1 1 1.7 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), e(En, "font-family", "Blender Pro"), e(En, "font-size", "35"), e(En, "font-weight", "700"), e(En, "letter-spacing", "0"), e(El, "word-spacing", "0"), e(El, "class", "cp-button-label"), G(El, "line-height", "125%"), e(jn, "fill", "#fff"), e(jn, "d", "M108 728.7H85.6V723H108v5.6zm0 9H85.6V732H108v5.6z"), e(jn, "font-family", "Blender Pro"), e(jn, "font-size", "60"), e(jn, "font-weight", "700"), e(jn, "letter-spacing", "0"), e(jl, "word-spacing", "0"), e(jl, "class", "cp-button-label"), G(jl, "line-height", "125%"), e(Yr, "fill", "#fff"), e(Yr, "d", "M98 1300.2c-1 0-2 .2-2.6.8a4 4 0 0 0-.9 2.7c0 1 .2 1.9.8 2.5.4.4 1 .7 1.7.8-.3.7-.7 1.3-1.5 1.8l-.2.1v3.1l.6-.2a7.8 7.8 0 0 0 4.2-2.7 8 8 0 0 0 1.4-4.9c0-1.2-.3-2.3-.9-3-.6-.7-1.5-1-2.6-1z"), e(Yr, "font-family", "Britannic Bold"), e(Yr, "font-size", "35"), e(Yr, "font-weight", "400"), e(Yr, "letter-spacing", "0"), e(Yr, "transform", "translate(0 -411.6)"), e(Hl, "word-spacing", "0"), e(Hl, "class", "cp-button-label"), G(Hl, "line-height", "125%"), e(Vr, "fill", "#fff"), e(Vr, "d", "m808.1 955-2.6 2.5-1.1-1-1.3-1.3q-2-1.9-2.5-2.6-.6-1-.6-2v-10.8q0-1 .6-2 .6-.9 2.3-2.5l1-1 1.6-1.4 2.6 2.5-1.4 1.2-2.1 2.1q-1 1-1 1.2v10.6q0 .3 1.8 2l2.7 2.5zm17.4-8h-13.6v-3.3h13.6v3.3zm10.6 3.6q0 1.1-.5 2-.6.8-2.5 2.6l-2.5 2.3-2.5-2.6 2.6-2.3q1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2-2l-1.4-1.3 2.5-2.5 1.1 1 1.6 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), e(Vr, "font-family", "Blender Pro"), e(Vr, "font-size", "35"), e(Vr, "font-weight", "700"), e(Vr, "letter-spacing", "0"), e(Vr, "transform", "translate(-720)"), e(Dl, "word-spacing", "0"), e(Dl, "class", "cp-button-label"), G(Dl, "line-height", "125%"), e(Tr, "fill", "#fff"), e(Tr, "d", "M482.4 1061.8h-10q-.6 0-.6-.5V1042q0-.5.6-.5h10q.5 0 .5.5v1.6q0 .6-.5.6h-7.1q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.4.3h7.1q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.4-.1v-.4l5.3-10-5-9.2v-.3q0-.2.3-.2h2.3q.6 0 .9.5l3.6 7.3h.1l3.6-7.3q.3-.5.8-.5h2.4q.2 0 .3.2.1.2 0 .4l-5 9.1 5.2 10q.1.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7h-.1l-3.9 7.7q-.2.5-.7.5zm25.8 0h-10q-.6 0-.6-.5V1042q0-.5.5-.5h10.1q.5 0 .5.5v1.6q0 .6-.5.6H507q-.3 0-.3.3v5.3q0 .3.3.3h6.1q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.3.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5z"), e(Tr, "font-family", "Rajdhani"), e(Tr, "font-size", "31.5"), e(Tr, "font-weight", "600"), e(Tr, "letter-spacing", "0"), e(Tr, "transform", "scale(1.1 .9)"), e(Rl, "word-spacing", "0"), e(Rl, "class", "cp-button-label"), G(Rl, "line-height", "125%"), e(Hn, "fill", "#fff"), e(Hn, "d", "M552.6 889.9h8.5q1.2 0 1.2 1.2v2.5q0 1.2-1.2 1.2h-8.5v8.7q0 1.2-1.2 1.2h-2.7q-1.2 0-1.2-1.2v-8.7H539q-1.2 0-1.2-1.2v-2.5q0-1.2 1.2-1.2h8.6v-8.6q0-1.2 1.2-1.2h2.7q1.2 0 1.2 1.2v8.6z"), e(Hn, "font-family", "Rajdhani"), e(Hn, "font-size", "60"), e(Hn, "font-weight", "600"), e(Hn, "letter-spacing", "0"), e(Bl, "word-spacing", "0"), e(Bl, "class", "cp-button-label"), G(Bl, "line-height", "125%"), e(Dn, "fill", "#fff"), e(Dn, "d", "M559.3 840H539q-1 0-1-1v-1.3q0-1 1-1h20.3q1 0 1 1v1.3q0 1-1 1z"), e(Dn, "font-family", "Rajdhani"), e(Dn, "font-size", "60"), e(Dn, "font-weight", "600"), e(Dn, "letter-spacing", "0"), e(Ql, "word-spacing", "0"), e(Ql, "class", "cp-button-label"), G(Ql, "line-height", "125%"), e(Rn, "fill", "#fff"), e(Rn, "d", "m552.6 784 6.3 6.4q.8.7 0 1.6l-2 1.9q-.7.9-1.6 0l-6.3-6.3-6.3 6.4q-.9.8-1.6-.1l-2-2q-.8-.8 0-1.5l6.3-6.4-6.3-6.2q-.8-.9 0-1.7l2-2q.8-.8 1.6 0l6.3 6.3 6.3-6.2q.8-.9 1.6 0l2 2q.7.7 0 1.6l-6.3 6.2z"), e(Rn, "font-family", "Rajdhani"), e(Rn, "font-size", "60"), e(Rn, "font-weight", "600"), e(Rn, "letter-spacing", "0"), e(Pl, "word-spacing", "0"), e(Pl, "class", "cp-button-label"), G(Pl, "line-height", "125%"), e(Bn, "fill", "#fff"), e(Bn, "d", "M547 740.3v-3.2q0-1 1-1 h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1zm11.1-7.9H540q-1.1 0-1.1-1v-2q0-1 1-1h18.2q1 0 1 1v2q0 1-1 1zm-11.1-8.8v-3.1q0-1.1 1-1.1h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1z"), e(Bn, "font-family", "Rajdhani"), e(Bn, "font-size", "60"), e(Bn, "font-weight", "600"), e(Bn, "letter-spacing", "0"), e(Ll, "word-spacing", "0"), e(Ll, "class", "cp-button-label"), G(Ll, "line-height", "125%"), e(Qn, "fill", "#fff"), e(Qn, "d", "M450.5 738.4H447q-1.3 0-.7-1.1l7.4-14.2q.5-1 .9-1.2.4-.3 1.3-.3h4.2q.9 0 1.3.3t.9 1.2l7.4 14.2q.6 1-.7 1h-3.4q-1 0-1.4-1l-6.2-12-6.2 12q-.6 1-1.4 1z"), e(Qn, "font-family", "Rajdhani"), e(Qn, "font-size", "60"), e(Qn, "font-weight", "600"), e(Qn, "letter-spacing", "0"), e(Fl, "word-spacing", "0"), e(Fl, "class", "cp-button-label"), G(Fl, "line-height", "125%"), e(Pn, "fill", "#fff"), e(Pn, "d", "M101.6 619.1h-1.5q-.4 0-.4-.3v-12.2q0-.4.4-.4h1.5q.4 0 .4.4v6.3h.1l.6-1 4.5-5.3q.3-.4.8-.4h1.7q.5 0 .2.4l-4.6 5.3 5.2 6.8q.2.4-.3.4h-1.3q-.7 0-1-.3l-4-5.5-1.9 1.9v3.6q0 .3-.4.3zm19.4 0h-5.2q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.7 0 2.7.8 1 .8 1 2.3v2.5q0 .4-.5.4h-6.3q-.2 0-.2.2v.9q0 1.4 1.7 1.4h4.7q.4 0 .4.4v1q0 .3-.4.3zm-6.3-5.6h4.2q.3 0 .3-.2v-1.2q0-.8-.4-1.1-.4-.4-1.3-.4h-1.3q-1 0-1.3.4-.4.3-.4 1v1.3q0 .2.2.2zm10.7 8.9h-1.2q-.4 0-.4-.4v-1q0-.4.4-.4h.5q1.5 0 2-.5.6-.4 1-1.5h-1q-.4 0-.5-.4l-3.1-9q-.1-.3.3-.3h1.6q.3 0 .4.3l2.6 7.9 2.7-7.9q0-.3.4-.3h1.5q.5 0 .4.3l-3.2 9.7q-.6 1.7-1.5 2.6-1 .9-2.9.9zm12.1-5h3q1.7 0 1.7-1.5v-4q0-1.4-1.7-1.4h-1.3q-2 0-2 1.7v5q0 .2.3.2zm-2.5 1.4v-13.4q0-.4.4-.4h1.5q.4 0 .4.4v4.5q.7-1 2.5-1h1q1.7 0 2.7.7 1 .8 1 2.3v4.1q0 1.5-1 2.3-1 .8-2.7.8h-5.4q-.4 0-.4-.3zm17.7.3h-2.1q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.8 0 2.8.8 1 .8 1 2.3v4q0 1.5-1 2.3-1 .8-2.7.8zm-1.8-1.7h1.5q1.7 0 1.7-1.5v-3.8q0-1.5-1.7-1.5h-1.5q-.9 0-1.3.4-.4.3-.4 1v4q0 .7.4 1 .4.4 1.3.4zm12.5 1.7h-1q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h5.2q.5 0 .5.3v9.6q0 .3-.5.3h-1.4q-.4 0-.4-.3v-.8h-.1q-.6 1.1-2.4 1.1zm2.5-3.4v-5l-.3-.1h-2.8q-1.7 0-1.7 1.5v3.8q0 1.5 1.7 1.5h1.1q2 0 2-1.7zm7.1 3.4h-1.5q-.4 0-.4-.3v-9.6q0-.3.4-.3h1.5q.4 0 .4.3v.8q.3-.5 1-.8.6-.3 1.5-.3h.8q.4 0 .4.3v1q0 .5-.4.4h-1.4q-2 0-2 1.8v6.4q0 .3-.3.3zm10.5 0h-1.2q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3.9-.8 2.6-.8h1.2q1.8 0 2.3 1h.1v-4.5q0-.4.4-.4h1.5q.4 0 .4.4v13.4q0 .3-.4.3h-1.5q-.4 0-.4-.3v-.8q-.6 1.1-2.4 1.1zm2.4-3.4v-3.4q0-1.7-2-1.7h-1.2q-1.6 0-1.6 1.5v3.8q0 1.5 1.6 1.5h1.3q2 0 2-1.7z"), e(Pn, "font-family", "Rajdhani"), e(Pn, "font-size", "25"), e(Pn, "font-weight", "600"), e(Pn, "letter-spacing", "0"), e(Kl, "word-spacing", "0"), e(Kl, "class", "cp-button-label"), G(Kl, "line-height", "125%"), e(Ir, "fill", "#42caf7"), e(Ir, "d", "M118.6 667.2v-.6q0-.4.4-.4h1.6q.4 0 .4.4v.4q0 1.1.5 1.6.4.4 1.5.4h1.7q1.1 0 1.6-.5t.5-1.6v-.5q0-.8-.7-1.3-.6-.5-1.5-.6l-2-.4-2-.6q-.8-.3-1.4-1.2-.6-.9-.6-2.3v-1q0-1.9 1-2.9t2.9-1h2.6q1.9 0 2.9 1t1 2.9v.5q0 .4-.4.4H127q-.4 0-.4-.4v-.3q0-1-.5-1.5-.4-.5-1.5-.5H123q-1 0-1.5.5t-.5 1.6v.8q0 1.1 1.6 1.5l1.6.3 1.8.4 1.6.7q.7.4 1.1 1.2.5.9.5 2v1q0 1.9-1 3-1.1 1-3 1h-2.7q-1.8 0-2.9-1-1-1.1-1-3zm15.7 3.9h-1.6q-.4 0-.4-.4V654q0-.4.4-.4h1.6q.4 0 .4.4v5.7h.1q.6-1.3 2.6-1.3h1q1.9 0 2.9 1t1 2.9v8.4q0 .4-.5.4h-1.6q-.4 0-.4-.4v-8.3q0-1.9-1.8-1.9h-1.2q-2 0-2 2.1v8.1q0 .4-.5.4zm11.1-14.8V654q0-.4.4-.4h1.6q.4 0 .4.4v2.3q0 .4-.4.4h-1.6q-.4 0-.4-.4zm0 14.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v12.3h-2q-.4 0-.4-.4zm9.6-12.3h2q.5 0 .5.4v1.3q0 .4-.5.4h-2q-.3 0-.3.3v10q0 .3-.5.3h-1.6q-.4 0-.4-.4v-10q0-.2-.3-.2h-1.3q-.4 0-.4-.4v-1.6l.4-.1h1.3q.3 0 .3-.3v-.7q0-1.8 1-2.8 1-1 2.7-1h1.1q.5 0 .5.4v1.3q0 .4-.5.4h-.7q-.9 0-1.3.4-.3.5-.3 1.4v.6q0 .3.2.3zm4.8 2.1h-1.5v-1.8q0-.4.3-.4h1.2q.3 0 .3-.3v-2q0-.4.4-.4h1.6q.4 0 .4.4v2.2q0 .3.3.3h2.3q.5 0 .5.4v1.3q0 .4-.5.4h-2.3q-.3 0-.3.3v6.4q0 1.8 2 1.8h.9q.4 0 .4.4v1.3q0 .4-.4.4H164q-1.8 0-2.9-1-1-1-1-2.8v-6.5q0-.3-.3-.3z"), e(Ir, "font-family", "Rajdhani"), e(Ir, "font-size", "25"), e(Ir, "font-weight", "600"), e(Ir, "letter-spacing", "0"), G(Ir, "text-align", "center"), e(Ln, "text-anchor", "middle"), e(Ln, "word-spacing", "0"), e(Ln, "class", "cp-button-label"), G(Ln, "line-height", "125%"), G(Ln, "text-align", "center"), e(Nr, "fill", "#fff"), e(Nr, "d", "M503.8 671.1H501q-1.8 0-2.9-1-1-1-1-2.8v-8.4q0-1.8 1-2.8 1-1 3-1h2.8q1.8 0 2.9 1 1 1 1 2.8v1.2q0 .5-.5.5h-1.5q-.5 0-.5-.5v-1q0-1.9-1.8-1.9h-2.1q-1.8 0-1.8 1.8v8.2q0 1.8 1.8 1.8h2.1q1.8 0 1.8-1.8V666q0-.5.5-.5h1.5q.5 0 .5.5v1.2q0 1.8-1 2.8-1 1-2.9 1zm8.8 0h-1.5q-.5 0-.5-.4V654q0-.4.5-.4h1.5q.5 0 .5.4v16.7q0 .4-.5.4zm12.8 0H520q-1.9 0-3-1-1-1-1-2.8v-5q0-1.9 1-2.9 1.1-1 3-1h2q1.9 0 2.9 1t1 2.9v3.1q0 .5-.4.5h-6.7q-.3 0-.3.2v1.1q0 1.8 1.8 1.8h5q.5 0 .5.5v1.2q0 .4-.4.4zm-6.6-6.9h4.4q.3 0 .3-.3v-1.6q0-.9-.4-1.3-.5-.5-1.4-.5h-1.4q-1 0-1.4.5-.4.4-.4 1.3v1.6q0 .3.3.3zm14.4 6.9h-1q-1.8 0-2.8-1-1-1-1-2.8v-5q0-1.9 1-2.9t2.9-1h5.6q.4 0 .4.4v12q0 .3-.4.3h-1.6q-.4 0-.4-.4v-.9h-.1q-.6 1.3-2.6 1.3zm2.7-4.2v-6.1q0-.3-.3-.3h-3q-1.8 0-1.8 1.9v4.8q0 1.8 1.8 1.8h1.2q2 0 2-2.1zm7.5 4.2h-1.6q-.4 0-.4-.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v1h.1q.3-.7 1-1 .7-.4 1.6-.4h1q.3 0 .3.4v1.3q0 .5-.4.4H546q-2 0-2 2.3v8q0 .3-.5.3z"), e(Nr, "font-family", "Rajdhani"), e(Nr, "font-size", "25"), e(Nr, "font-weight", "600"), e(Nr, "letter-spacing", "0"), G(Nr, "text-align", "center"), e(Fn, "text-anchor", "middle"), e(Fn, "word-spacing", "0"), e(Fn, "class", "cp-button-label"), G(Fn, "line-height", "125%"), G(Fn, "text-align", "center"), e(X, "fill", "#42caf7"), e(X, "d", "M473.6 656.2a1.5 1.5 0 0 0-1 2.6 6.5 6.5 0 1 1-9.2 0 1.5 1.5 0 1 0-2.1-2.2 9.5 9.5 0 1 0 13.4 0 1.5 1.5 0 0 0-1-.4z"), e(X, "color", "#000"), e(X, "font-family", "sans-serif"), e(X, "font-weight", "400"), e(X, "overflow", "visible"), e(X, "class", "cp-button-label"), G(X, "line-height", "normal"), G(X, "text-indent", "0px"), G(X, "text-align", "start"), G(X, "text-decoration-line", "none"), G(X, "text-decoration-style", "solid"), G(X, "text-decoration-color", "rgb(0, 0, 0)"), G(X, "text-transform", "none"), G(X, "white-space", "normal"), G(X, "isolation", "auto"), G(X, "mix-blend-mode", "normal"), e(W, "fill", "#42caf7"), e(W, "d", "M468 652.4c-.8 0-1.5.6-1.5 1.5v10c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10c0-.9-.7-1.5-1.5-1.5z"), e(W, "color", "#000"), e(W, "font-family", "sans-serif"), e(W, "font-weight", "400"), e(W, "overflow", "visible"), e(W, "class", "cp-button-label"), G(W, "line-height", "normal"), G(W, "text-indent", "0px"), G(W, "text-align", "start"), G(W, "text-decoration-line", "none"), G(W, "text-decoration-style", "solid"), G(W, "text-decoration-color", "rgb(0, 0, 0)"), G(W, "text-transform", "none"), G(W, "white-space", "normal"), G(W, "isolation", "auto"), G(W, "mix-blend-mode", "normal"), e(Al, "fill", "#fff"), e(Al, "fill-rule", "evenodd"), e(Al, "d", "m500 607.4-12 6.9 12.2 7v-4H520v-6h-20z"), e(Al, "class", "cp-button-label"), e(K0, "fill", "#222"), e(K0, "fill-rule", "evenodd"), e(K0, "d", "m1210-959.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), e(A0, "fill", "#1c1c1c"), e(A0, "fill-rule", "evenodd"), e(A0, "d", "M1210-959.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), e(dt, "width", "20"), e(dt, "height", "18"), e(dt, "x", "1200"), e(dt, "y", "-941.6"), e(dt, "fill", "#7e7e7e"), e(dt, "fill-opacity", ".2"), e(dt, "rx", "0"), e(dt, "ry", "0"), e(Y0, "fill", "#272727"), e(Y0, "fill-rule", "evenodd"), e(Y0, "d", "m1275-897.6-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3z"), e(V0, "fill", "#222"), e(V0, "fill-rule", "evenodd"), e(V0, "d", "m1275-909.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), e(T0, "fill", "#1c1c1c"), e(T0, "fill-rule", "evenodd"), e(T0, "d", "M1275-909.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), e(ft, "width", "20"), e(ft, "height", "18"), e(ft, "x", "1265"), e(ft, "y", "-891.6"), e(ft, "fill", "#7e7e7e"), e(ft, "fill-opacity", ".2"), e(ft, "rx", "0"), e(ft, "ry", "0"), e(v, "transform", "translate(0 411.6)"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), e(t, "viewBox", "0 0 648 1464");
    },
    m(L2, bi) {
      S(L2, t, bi), n(t, r), n(r, a), n(a, o), n(a, s), n(a, d), n(a, c), n(r, f), n(f, p), n(f, b), n(f, g), n(f, w), n(f, x), n(r, z), n(z, q), n(z, m), n(z, y), n(z, H), n(r, C), n(C, P), n(C, D), n(C, $), n(C, M), n(C, h), n(r, j), n(j, T), n(j, Re), n(j, N), n(j, R), n(r, ne), n(ne, J), n(ne, le), n(r, Xe), n(Xe, Ve), n(Xe, ut), n(Xe, Kn), n(Xe, Te), n(r, We), n(We, ie), n(We, Ie), n(We, Be), n(We, Xr), n(r, Wr), n(Wr, O), n(Wr, I), n(r, gt), n(gt, Jr), n(gt, An), n(r, vt), n(vt, en), n(vt, W0), n(r, Xl), n(Xl, J0), n(Xl, Wl), n(r, dl), n(dl, Jl), n(dl, e0), n(dl, t0), n(r, fl), n(fl, r0), n(fl, n0), n(fl, l0), n(r, Yn), n(Yn, e2), n(Yn, t2), n(Yn, r2), n(Yn, n2), n(r, tn), n(tn, l2), n(tn, i2), n(tn, a2), n(tn, o2), n(tn, s2), n(r, i0), n(i0, c2), n(i0, a0), n(r, Vn), n(Vn, d2), n(Vn, f2), n(Vn, p2), n(Vn, o0), n(r, pl), n(pl, h2), n(pl, s0), n(pl, c0), n(r, hl), n(hl, u2), n(hl, d0), n(hl, f0), n(r, p0), n(p0, g2), n(p0, h0), n(r, u0), n(u0, v2), n(u0, g0), n(r, ul), n(ul, m2), n(ul, v0), n(ul, y2), n(r, Je), n(Je, x2), n(Je, b2), n(Je, w2), n(Je, k2), n(Je, q2), n(Je, _2), n(Je, G2), n(r, mt), n(r, yt), n(r, xt), n(r, bt), n(r, wt), n(r, kt), n(r, qt), n(r, _t), n(r, Gt), n(r, Ut), n(r, zt), n(r, St), n(r, $t), n(r, Mt), n(r, Ot), n(r, Ct), n(r, Et), n(r, jt), n(r, Ht), n(r, Dt), n(r, Rt), n(r, Bt), n(r, Qt), n(r, Pt), n(r, Lt), n(r, Ft), n(r, Kt), n(r, At), n(r, Yt), n(r, Vt), n(r, Tt), n(r, It), n(r, Nt), n(r, Zt), n(r, Xt), n(r, Wt), n(r, Jt), n(r, e1), n(r, t1), n(r, r1), n(r, n1), n(r, l1), n(r, i1), n(r, a1), n(r, o1), n(r, s1), n(r, c1), n(r, d1), n(r, f1), n(r, p1), n(r, h1), n(r, u1), n(r, g1), n(r, v1), n(r, m1), n(r, y1), n(r, x1), n(r, b1), n(r, w1), n(r, k1), n(r, q1), n(r, _1), n(r, G1), n(r, U1), n(r, et), n(r, tt), n(r, rt), n(r, z1), n(r, S1), n(r, $1), n(r, M1), n(r, O1), n(r, C1), n(r, E1), n(r, j1), n(r, H1), n(r, D1), n(r, R1), n(r, B1), n(r, Q1), n(r, P1), n(r, L1), n(r, F1), n(r, K1), n(r, A1), n(r, Y1), n(r, V1), n(r, T1), n(r, I1), n(r, N1), n(r, Z1), n(r, X1), n(r, W1), n(r, J1), n(r, er), n(r, tr), n(r, rr), n(r, nr), n(r, lr), n(r, ir), n(r, ar), n(r, Qe), n(Qe, Tn), n(Qe, m0), n(Qe, y0), n(r, or), n(t, re), n(re, gl), n(re, x0), n(re, vl), n(re, In), n(re, Pe), n(re, Le), n(re, Fe), n(re, Ke), n(re, nt), n(re, lt), n(re, it), n(re, rn), n(rn, ae), n(rn, sr), n(rn, b0), n(re, U2), n(U2, z2), n(t, S2), n(S2, nn), n(nn, $2), n(t, v), n(v, w0), n(v, k0), n(v, q0), n(v, ml), n(v, yl), n(v, Nn), n(Nn, oe), n(Nn, cr), n(Nn, _0), n(v, ln), n(ln, se), n(ln, dr), n(ln, G0), n(v, an), n(an, ce), n(an, fr), n(an, U0), n(v, on), n(on, de), n(on, pr), n(on, z0), n(v, sn), n(sn, fe), n(sn, hr), n(sn, S0), n(v, cn), n(cn, pe), n(cn, ur), n(cn, $0), n(v, dn), n(dn, he), n(dn, gr), n(dn, M0), n(v, fn), n(fn, ue), n(fn, vr), n(fn, O0), n(v, pn), n(pn, ge), n(pn, mr), n(pn, C0), n(v, hn), n(hn, ve), n(hn, yr), n(hn, E0), n(v, un), n(un, me), n(un, xr), n(un, j0), n(v, gn), n(gn, ye), n(gn, br), n(gn, H0), n(v, vn), n(vn, xe), n(vn, wr), n(vn, D0), n(v, mn), n(mn, be), n(mn, kr), n(mn, R0), n(v, yn), n(yn, we), n(yn, qr), n(yn, B0), n(v, xn), n(xn, ke), n(xn, _r), n(xn, Q0), n(v, bn), n(bn, qe), n(bn, Gr), n(bn, P0), n(v, M2), n(v, O2), n(v, C2), n(v, Ur), n(v, zr), n(v, Sr), n(v, $r), n(v, Ae), n(v, at), n(v, ot), n(v, st), n(v, L0), n(v, Zn), n(Zn, _e), n(Zn, Mr), n(v, Xn), n(Xn, Ge), n(Xn, Or), n(v, Wn), n(Wn, Ue), n(Wn, Cr), n(v, Jn), n(Jn, ze), n(Jn, Er), n(v, el), n(el, Se), n(el, jr), n(v, tl), n(tl, $e), n(tl, Hr), n(v, rl), n(rl, Me), n(rl, Dr), n(v, nl), n(nl, Oe), n(nl, Rr), n(v, ct), n(v, ll), n(ll, Ce), n(ll, Br), n(v, il), n(il, Ee), n(il, Qr), n(v, al), n(al, je), n(al, Pr), n(v, ol), n(ol, He), n(ol, Lr), n(v, xl), n(xl, wn), n(v, bl), n(bl, Fr), n(v, De), n(De, kn), n(kn, X2), n(De, W2), n(v, wl), n(wl, qn), n(v, kl), n(kl, _n), n(v, ql), n(ql, Gn), n(v, _l), n(_l, Un), n(v, Gl), n(Gl, zn), n(v, Ul), n(Ul, Sn), n(v, zl), n(zl, $n), n(v, Sl), n(Sl, Mn), n(v, $l), n($l, On), n(v, Ml), n(Ml, Kr), n(v, F0), n(v, Ne), n(v, Ol), n(Ol, Ar), n(v, Cl), n(Cl, Cn), n(v, El), n(El, En), n(v, jl), n(jl, jn), n(v, Hl), n(Hl, Yr), n(v, Dl), n(Dl, Vr), n(v, Rl), n(Rl, Tr), n(v, Bl), n(Bl, Hn), n(v, Ql), n(Ql, Dn), n(v, Pl), n(Pl, Rn), n(v, Ll), n(Ll, Bn), n(v, Fl), n(Fl, Qn), n(v, Kl), n(Kl, Pn), n(v, Ln), n(Ln, Ir), n(v, Fn), n(Fn, Nr), n(v, X), n(v, W), n(v, Al), n(v, K0), n(v, A0), n(v, dt), n(v, Y0), n(v, V0), n(v, T0), n(v, ft);
    },
    p: _,
    i: _,
    o: _,
    d(L2) {
      L2 && U(t);
    }
  };
}
class Ya extends V {
  constructor(t) {
    super(), Y(this, t, null, Aa, A, {});
  }
}
const Va = (i) => {
  console.log("emu:main recv:", i.detail.state), mi.set(window.Module.cwrap("getPC", "number", [])), yi.set(window.Module.cwrap("readMemory2Quick", "number", ["number"]));
}, Ta = (i) => {
  console.error("cpu_crash recv:", i.detail), Ze.set("crashed");
  let t = i.detail.name, r = (i.detail.address >>> 0).toString(16).padStart(8, "0"), a = (i.detail.pc >>> 0).toString(16).padStart(8, "0");
  D2.set({
    name: t,
    message: `@ 0x${r} 	
 PC:${a}
`,
    hint: `https://github.com/search?q=repo%3AClasspadDev%2Fhollyhock-3%20${a.substring(0, 6)}&type=code`
  });
}, Ia = (i) => {
  let t = i.detail.regs.map((o) => o >>> 0);
  const r = i.detail.pc >>> 0, a = i.detail.instr >>> 0;
  console.debug("cpu_dump recv:", i.detail), console.debug(`cpu:dump: INSTR ${a.toString(16).padStart(4, "0")} 	 - PC: 0x${r.toString(16).padStart(8, "0")}`), console.debug(t.map((o) => o.toString(16).toUpperCase())), B2.set({
    instr: a,
    pc: r,
    registers: t
  });
};
function Na() {
  document.addEventListener("emu:main", Va), document.addEventListener("cpu:dump", Ia), document.addEventListener("cpu:crash", Ta);
}
function Za(i) {
  let t, r, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = pt(d, s[c]);
  return {
    c() {
      t = l("svg"), r = l("g"), a = l("path"), o = l("path"), e(a, "stroke-linejoin", "round"), e(a, "d", "m14.5 7l5 5l-5 5"), e(o, "d", "M19.5 12h-10c-1.667 0-5 1-5 5"), e(o, "opacity", "0.5"), e(r, "fill", "none"), e(r, "stroke", "currentColor"), e(r, "stroke-linecap", "round"), e(r, "stroke-width", "1.5"), Zl(t, d);
    },
    m(c, f) {
      S(c, t, f), n(t, r), n(r, a), n(r, o);
    },
    p(c, [f]) {
      Zl(t, d = N2(s, [
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
      c && U(t);
    }
  };
}
function Xa(i, t, r) {
  return i.$$set = (a) => {
    r(0, t = pt(pt({}, t), Nl(a)));
  }, t = Nl(t), [t];
}
class Wa extends V {
  constructor(t) {
    super(), Y(this, t, Xa, Za, A, {});
  }
}
function Ja(i) {
  let t, r, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = pt(d, s[c]);
  return {
    c() {
      t = l("svg"), r = l("g"), a = l("path"), o = l("path"), e(a, "stroke-linejoin", "round"), e(a, "d", "m17 14.5l-5 5l-5-5"), e(o, "d", "M12 19.5v-10c0-1.667-1-5-5-5"), e(o, "opacity", "0.5"), e(r, "fill", "none"), e(r, "stroke", "currentColor"), e(r, "stroke-linecap", "round"), e(r, "stroke-width", "1.5"), Zl(t, d);
    },
    m(c, f) {
      S(c, t, f), n(t, r), n(r, a), n(r, o);
    },
    p(c, [f]) {
      Zl(t, d = N2(s, [
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
      c && U(t);
    }
  };
}
function eo(i, t, r) {
  return i.$$set = (a) => {
    r(0, t = pt(pt({}, t), Nl(a)));
  }, t = Nl(t), [t];
}
class to extends V {
  constructor(t) {
    super(), Y(this, t, eo, Ja, A, {});
  }
}
function ro(i) {
  let t, r, a;
  return {
    c() {
      t = l("g"), r = l("path"), a = l("path"), e(r, "d", "m11 8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232"), e(r, "opacity", "0.5"), e(a, "d", "M21.079 10.147c1.228.807 1.228 2.899 0 3.706L13.66 18.73c-1.194.785-2.661-.237-2.661-1.853V7.123c0-1.616 1.467-2.638 2.661-1.853z"), e(t, "fill", "none"), e(t, "stroke", "currentColor"), e(t, "stroke-width", "1.5");
    },
    m(o, s) {
      S(o, t, s), n(t, r), n(t, a);
    },
    d(o) {
      o && U(t);
    }
  };
}
function no(i) {
  let t, r, a;
  return {
    c() {
      t = l("path"), r = l("path"), a = Z(">"), e(t, "fill", "currentColor"), e(t, "fill-rule", "evenodd"), e(t, "d", "M2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232V8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426"), e(t, "clip-rule", "evenodd"), e(t, "opacity", "0.5"), e(r, "fill", "currentColor"), e(r, "d", "M11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706L13.66 5.27C12.467 4.485 11 5.507 11 7.123");
    },
    m(o, s) {
      S(o, t, s), S(o, r, s), S(o, a, s);
    },
    d(o) {
      o && (U(t), U(r), U(a));
    }
  };
}
function lo(i) {
  let t;
  function r(s, d) {
    return (
      /*on*/
      s[0] ? no : ro
    );
  }
  let a = r(i), o = a(i);
  return {
    c() {
      t = l("svg"), o.c(), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, d) {
      S(s, t, d), o.m(t, null);
    },
    p(s, [d]) {
      a !== (a = r(s)) && (o.d(1), o = a(s), o && (o.c(), o.m(t, null)));
    },
    i: _,
    o: _,
    d(s) {
      s && U(t), o.d();
    }
  };
}
function io(i, t, r) {
  let { on: a = !1 } = t;
  return i.$$set = (o) => {
    "on" in o && r(0, a = o.on);
  }, [a];
}
class ao extends V {
  constructor(t) {
    super(), Y(this, t, io, lo, A, { on: 0 });
  }
}
function oo(i) {
  let t, r, a, o, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    i[0]
  ], d = {};
  for (let c = 0; c < s.length; c += 1)
    d = pt(d, s[c]);
  return {
    c() {
      t = l("svg"), r = l("g"), a = l("path"), o = l("path"), e(a, "stroke-linecap", "round"), e(a, "d", "m18.5 5.5l-13 13"), e(a, "opacity", "0.5"), e(o, "d", "M22 10.849v2.302c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848Z"), e(r, "fill", "none"), e(r, "stroke", "currentColor"), e(r, "stroke-width", "1.5"), Zl(t, d);
    },
    m(c, f) {
      S(c, t, f), n(t, r), n(r, a), n(r, o);
    },
    p(c, [f]) {
      Zl(t, d = N2(s, [
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
      c && U(t);
    }
  };
}
function so(i, t, r) {
  return i.$$set = (a) => {
    r(0, t = pt(pt({}, t), Nl(a)));
  }, t = Nl(t), [t];
}
class co extends V {
  constructor(t) {
    super(), Y(this, t, so, oo, A, {});
  }
}
const fo = {
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
function ci(i, t, r) {
  const a = i.slice();
  return a[21] = t[r], a[23] = r, a;
}
function po(i) {
  let t;
  return {
    c() {
      t = k("p"), t.textContent = "Debugger state KO", e(t, "class", "skeleton svelte-hcz1no");
    },
    m(r, a) {
      S(r, t, a);
    },
    p: _,
    d(r) {
      r && U(t);
    }
  };
}
function ho(i) {
  let t, r, a = (
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
      t = k("div"), r = Z("Current PC: "), o = Z(a), s = E(), d = k("div");
      for (let g = 0; g < c.length; g += 1)
        c[g].c();
      e(d, "class", "disassembly svelte-hcz1no"), e(
        d,
        "style",
        /*styles*/
        i[10]
      );
    },
    m(g, w) {
      S(g, t, w), n(t, r), n(t, o), S(g, s, w), S(g, d, w);
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
      ), c = Fi(c, w, b, 1, g, p, f, d, Li, di, null, ci));
    },
    d(g) {
      g && (U(t), U(s), U(d));
      for (let w = 0; w < c.length; w += 1)
        c[w].d();
    }
  };
}
function uo(i) {
  let t;
  return {
    c() {
      t = k("p"), t.textContent = "Fetching data ...", e(t, "class", "skeleton svelte-hcz1no");
    },
    m(r, a) {
      S(r, t, a);
    },
    p: _,
    d(r) {
      r && U(t);
    }
  };
}
function go(i) {
  let t;
  return {
    c() {
      t = k("p"), t.textContent = "Loading ...", e(t, "class", "skeleton svelte-hcz1no");
    },
    m(r, a) {
      S(r, t, a);
    },
    p: _,
    d(r) {
      r && U(t);
    }
  };
}
function di(i, t) {
  let r, a, o, s, d, c, f, p, b, g, w;
  return {
    key: i,
    first: null,
    c() {
      r = k("div"), a = k("div"), a.textContent = "-", o = E(), s = k("div"), s.textContent = `${/*instr*/
      t[21].pc.toString(16).padStart(8, "0")}`, d = E(), c = k("div"), c.textContent = `${"OP_" + /*instr*/
      t[21].value}`, f = E(), p = k("div"), p.textContent = "-", b = E(), g = k("div"), g.textContent = `; ${/*instr*/
      t[21].value.toString(16).padStart(4, "0")}`, w = E(), e(a, "class", "svelte-hcz1no"), e(s, "class", "svelte-hcz1no"), e(c, "class", "svelte-hcz1no"), e(p, "class", "svelte-hcz1no"), e(g, "class", "svelte-hcz1no"), e(r, "class", "line svelte-hcz1no"), ht(
        r,
        "current",
        /*local_pc*/
        t[0] >>> 0 == /*instr*/
        t[21].pc >>> 0
      ), this.first = r;
    },
    m(x, z) {
      S(x, r, z), n(r, a), n(r, o), n(r, s), n(r, d), n(r, c), n(r, f), n(r, p), n(r, b), n(r, g), n(r, w);
    },
    p(x, z) {
      t = x, z & /*local_pc, instructions*/
      513 && ht(
        r,
        "current",
        /*local_pc*/
        t[0] >>> 0 == /*instr*/
        t[21].pc >>> 0
      );
    },
    d(x) {
      x && U(r);
    }
  };
}
function vo(i) {
  let t, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, H, C, P, D, $, M, h, j;
  f = new ao({}), g = new Wa({}), z = new to({}), y = new co({}), P = new xi({});
  function T(R, ne) {
    return (
      /*debugger_state*/
      R[2] === 0 ? go : (
        /*debugger_state*/
        R[2] === 1 ? uo : (
          /*debugger_state*/
          R[2] === 10 ? ho : po
        )
      )
    );
  }
  let Re = T(i), N = Re(i);
  return {
    c() {
      t = k("div"), r = k("div"), a = k("h4"), o = Z("Debugger - "), s = Z(
        /*$state*/
        i[1]
      ), d = E(), c = k("button"), K(f.$$.fragment), p = E(), b = k("button"), K(g.$$.fragment), w = E(), x = k("button"), K(z.$$.fragment), q = E(), m = k("button"), K(y.$$.fragment), H = E(), C = k("button"), K(P.$$.fragment), D = E(), $ = k("div"), N.c(), e(a, "class", "header"), e(c, "class", "toolbar-action"), e(c, "type", "button"), e(c, "title", "Run until"), e(c, "tabindex", "0"), e(c, "id", "btn_forwards_debug"), e(b, "class", "toolbar-action"), e(b, "type", "button"), e(b, "title", "step over"), e(b, "tabindex", "0"), e(b, "id", "btn_step_over_debug"), e(x, "class", "toolbar-action"), e(x, "type", "button"), e(x, "title", "step in"), e(x, "tabindex", "0"), e(x, "id", "btn_step_in_debug"), e(m, "class", "toolbar-action"), e(m, "type", "button"), e(m, "title", "halt"), e(m, "tabindex", "0"), e(m, "id", "btn_close_debug"), e(C, "class", "toolbar-action"), e(C, "type", "button"), e(C, "title", "close"), e(C, "tabindex", "0"), e(C, "id", "btn_close_debug"), e(r, "class", "titlebar"), e($, "class", "contents"), e(t, "class", "debugging-panel view-panel svelte-hcz1no"), ht(
        t,
        "visible",
        /*$debugPane*/
        i[3]
      );
    },
    m(R, ne) {
      S(R, t, ne), n(t, r), n(r, a), n(a, o), n(a, s), n(r, d), n(r, c), L(f, c, null), n(r, p), n(r, b), L(g, b, null), n(r, w), n(r, x), L(z, x, null), n(r, q), n(r, m), L(y, m, null), n(r, H), n(r, C), L(P, C, null), n(t, D), n(t, $), N.m($, null), M = !0, h || (j = [
        ee(
          c,
          "click",
          /*doFastForwards*/
          i[7]
        ),
        ee(
          b,
          "click",
          /*doStepOver*/
          i[5]
        ),
        ee(
          x,
          "click",
          /*doStepIn*/
          i[6]
        ),
        ee(
          m,
          "click",
          /*doHalt*/
          i[8]
        ),
        ee(
          C,
          "click",
          /*doClose*/
          i[4]
        )
      ], h = !0);
    },
    p(R, [ne]) {
      (!M || ne & /*$state*/
      2) && N0(
        s,
        /*$state*/
        R[1]
      ), Re === (Re = T(R)) && N ? N.p(R, ne) : (N.d(1), N = Re(R), N && (N.c(), N.m($, null))), (!M || ne & /*$debugPane*/
      8) && ht(
        t,
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
      R && U(t), F(f), F(g), F(z), F(y), F(P), N.d(), h = !1, Zr(j);
    }
  };
}
function mo(i, t, r) {
  let a, o, s, d, c, f;
  te(i, Ze, (h) => r(1, a = h)), te(i, Z2, (h) => r(13, o = h)), te(i, yi, (h) => r(14, s = h)), te(i, mi, (h) => r(15, d = h)), te(i, cl, (h) => r(16, c = h)), te(i, R2, (h) => r(3, f = h));
  const p = I2(), b = (h) => {
    p("doClose", h), R2.set(!1);
  }, g = (h) => {
    const j = $();
    try {
      c && window.Module.ccall("dumpOneFrame", null, [], []), window.Module.ccall("runOneFrame", null, ["number"], [1]), console.debug("runOneFrame OK - ", j);
    } catch (T) {
      return console.error(T), !1;
    }
    p("doStepOver", h);
  }, w = (h) => {
    const j = $();
    try {
      c && window.Module.ccall("dumpOneFrame", null, [], []), window.Module.ccall("runOneFrame", null, ["number"], [1]), console.debug("runOneFrame OK - ", j);
    } catch (T) {
      return console.error(T), !1;
    }
    p("doStepIn", h);
  }, x = (h) => {
    window.Module.ccall("runFrame", null, [], []), p("doFastForwards", h);
  }, z = (h) => {
    p("doHalt", h);
  };
  let q = null, m = null, y, H = 0, C = [];
  const P = () => {
    if (m && q) {
      r(0, y = q());
      for (let h = 0; h < 30; h++) {
        let j = m(y + h * 2);
        C.push({
          pc: (y >>> 0) + h * 2,
          value: j
        });
      }
      return !0;
    }
    return !1;
  }, D = () => {
    P() ? (console.log(C), r(2, H = 10)) : (console.error("Can't load instructions ..."), r(2, H = -1));
  }, $ = () => m && q ? (r(0, y = q()), ri.set(y), m(y)) : null, M = Object.entries(fo).map((h) => `--${h[0].replaceAll(" ", "-").replaceAll(/[^a-zA-Z-]/g, "")}: ${h[1]}`).join("; ");
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
        r(2, H = 1), D();
      } catch {
      }
    }
  }, [
    y,
    a,
    H,
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
class yo extends V {
  constructor(t) {
    super(), Y(this, t, mo, vo, A, {});
  }
}
function xo(i) {
  let t, r, a, o, s, d, c, f, p, b, g, w, x, z, q, m, y, H, C, P, D, $, M;
  return r = new Ti({}), p = new Ya({}), g = new ra({}), x = new Zi({}), q = new Sa({}), q.$on(
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
  ), y = new yo({}), C = new La({}), C.$on(
    "doRefresh",
    /*doRefresh*/
    i[5]
  ), $ = new la({}), {
    c() {
      t = k("main"), K(r.$$.fragment), a = E(), o = k("div"), s = k("div"), s.innerHTML = `<img src="${Yi}" alt="RuK Logo" class="svelte-15gznnu"/> <span class="svelte-15gznnu">RuK UI</span>`, d = E(), c = k("div"), f = k("div"), K(p.$$.fragment), b = E(), K(g.$$.fragment), w = E(), K(x.$$.fragment), z = E(), K(q.$$.fragment), m = E(), K(y.$$.fragment), H = E(), K(C.$$.fragment), P = E(), D = k("div"), K($.$$.fragment), e(s, "class", "logo svelte-15gznnu"), ht(
        s,
        "compact",
        /*$debugPane*/
        i[0]
      ), e(f, "id", "classpad"), G(f, "--zoomFactor", "1.5"), e(f, "class", "svelte-15gznnu"), e(c, "class", "calc-container svelte-15gznnu"), G(D, "display", "none"), e(o, "class", "container svelte-15gznnu");
    },
    m(h, j) {
      S(h, t, j), L(r, t, null), n(t, a), n(t, o), n(o, s), n(o, d), n(o, c), n(c, f), L(p, f, null), n(c, b), L(g, c, null), n(c, w), L(x, c, null), n(o, z), L(q, o, null), n(o, m), L(y, o, null), n(o, H), L(C, o, null), n(o, P), n(o, D), L($, D, null), M = !0;
    },
    p(h, [j]) {
      (!M || j & /*$debugPane*/
      1) && ht(
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
      h && U(t), F(r), F(p), F(g), F(x), F(q), F(y), F(C), F($);
    }
  };
}
function bo(i, t, r) {
  let a, o, s, d;
  te(i, Xi, (m) => r(10, a = m)), te(i, R2, (m) => r(0, o = m)), te(i, Ze, (m) => r(11, s = m)), te(i, cl, (m) => r(12, d = m)), P2(async () => {
    Na(), Ze.subscribe((m) => {
      console.log(m);
    }), Ii();
  });
  const c = (m) => {
    window.Module.requestFullscreen(!0, !1);
  }, f = (m) => {
    const y = document.getElementById("canvas");
    y && y.toBlob(function(H) {
      const C = new ClipboardItem({ "image/png": H });
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
      const H = document.createElement("a");
      H.href = y.toDataURL("image/png"), H.download = "ClassPad_Screen.png", H.click();
    }
  }, b = (m) => {
    d || (cl.set(!0), B2.set(null), window.Module.ccall("dumpOneFrame", null, [], []));
  }, g = (m) => {
    console.log("doRefresh !!"), d || cl.set(!0), B2.set(null), window.Module.ccall("dumpOneFrame", null, [], []);
  }, w = (m) => {
    (s === "loaded" || s === "ready") && (Z2.set(!0), window.Module.ccall("setTrace", null, ["number"], [1]), x()), o || R2.set(!0);
  }, x = async (m) => {
    let y = _i(ti);
    if (y) {
      Ze.set("running");
      try {
        window.Module.ccall("startInterpreter", null, ["string"], [y]);
      } catch (H) {
        D2.set(H), Ze.set("crashed");
      }
    } else
      Ze.set("crashed"), D2.set({
        name: "INVALID_FILE_NAME",
        message: "fileName is empty"
      });
  }, z = async (m) => {
    console.log(m.detail), Ze.set("loading");
    var y = m.detail.target.files[0];
    y && Ka(y, y.name).then(() => {
      console.log(y.name), ti.set(y.name), a ? x() : Ze.set("loaded");
    }).catch((H) => {
      console.error("Error loading file:", H);
    });
  };
  let { ide: q = !0 } = t;
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
class wo extends V {
  constructor(t) {
    super(), Y(this, t, bo, xo, A, { ide: 9 });
  }
}
window.sdk_call = (i, t) => {
  let r = (i >>> 0).toString(16).padStart(8, "0");
  console.log(`[SDK.JS] - (slow SysCall emulator) - GOT PC: ${r}. Check it here: https://github.com/search?q=repo%3AClasspadDev%2Fhollyhock-3+${r}&type=code`), console.debug("-- Registers : "), console.debug(t.map((o) => (o >>> 0).toString(16).toUpperCase()));
  let a = i >>> 0;
  debugger;
  if (fi[a] != null)
    return fi[a](i, t);
  debugger;
  return i >>> 0;
};
const ko = (i, t) => t[4], fi = {
  80057854: ko
};
window.Module = window.Module || {};
new wo({
  target: document.getElementById("app"),
  props: {
    ide: !1
  }
});
//# sourceMappingURL=ruk.js.map
