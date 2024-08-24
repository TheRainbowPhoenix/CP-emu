var zi = Object.defineProperty;
var Oi = (l, t, n) => t in l ? zi(l, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[t] = n;
var D2 = (l, t, n) => Oi(l, typeof t != "symbol" ? t + "" : t, n);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    a(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const d of o.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function a(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function y() {
}
function N(l, t) {
  for (const n in t) l[n] = t[n];
  return (
    /** @type {T & S} */
    l
  );
}
function Ri(l) {
  return l();
}
function li() {
  return /* @__PURE__ */ Object.create(null);
}
function xt(l) {
  l.forEach(Ri);
}
function ki(l) {
  return typeof l == "function";
}
function I(l, t) {
  return l != l ? t == t : l !== t || l && typeof l == "object" || typeof l == "function";
}
function Ei(l) {
  return Object.keys(l).length === 0;
}
function _i(l, ...t) {
  if (l == null) {
    for (const a of t)
      a(void 0);
    return y;
  }
  const n = l.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Bi(l) {
  let t;
  return _i(l, (n) => t = n)(), t;
}
function re(l, t, n) {
  l.$$.on_destroy.push(_i(t, n));
}
function Hi(l, t, n, a) {
  if (l) {
    const s = qi(l, t, n, a);
    return l[0](s);
  }
}
function qi(l, t, n, a) {
  return l[1] && a ? N(n.ctx.slice(), l[1](a(t))) : n.ctx;
}
function Pi(l, t, n, a) {
  if (l[2] && a) {
    const s = l[2](a(n));
    if (t.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const o = [], d = Math.max(t.dirty.length, s.length);
      for (let c = 0; c < d; c += 1)
        o[c] = t.dirty[c] | s[c];
      return o;
    }
    return t.dirty | s;
  }
  return t.dirty;
}
function ji(l, t, n, a, s, o) {
  if (s) {
    const d = qi(t, n, a, o);
    l.p(d, s);
  }
}
function Ti(l) {
  if (l.ctx.length > 32) {
    const t = [], n = l.ctx.length / 32;
    for (let a = 0; a < n; a++)
      t[a] = -1;
    return t;
  }
  return -1;
}
function ie(l) {
  const t = {};
  for (const n in l) n[0] !== "$" && (t[n] = l[n]);
  return t;
}
function ii(l) {
  return l ?? "";
}
function r(l, t) {
  l.appendChild(t);
}
function z(l, t, n) {
  l.insertBefore(t, n || null);
}
function $(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function Si(l, t) {
  for (let n = 0; n < l.length; n += 1)
    l[n] && l[n].d(t);
}
function _(l) {
  return document.createElement(l);
}
function i(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function Y(l) {
  return document.createTextNode(l);
}
function B() {
  return Y(" ");
}
function l2() {
  return Y("");
}
function ee(l, t, n, a) {
  return l.addEventListener(t, n, a), () => l.removeEventListener(t, n, a);
}
function Di(l) {
  return function(t) {
    return t.preventDefault(), l.call(this, t);
  };
}
function e(l, t, n) {
  n == null ? l.removeAttribute(t) : l.getAttribute(t) !== n && l.setAttribute(t, n);
}
function ae(l, t) {
  for (const n in t)
    e(l, n, t[n]);
}
function m(l, t, n) {
  l.setAttributeNS("http://www.w3.org/1999/xlink", t, n);
}
function Fi(l) {
  return Array.from(l.childNodes);
}
function t0(l, t) {
  t = "" + t, l.data !== t && (l.data = /** @type {string} */
  t);
}
function E(l, t, n, a) {
  n == null ? l.style.removeProperty(t) : l.style.setProperty(t, n, "");
}
function Je(l, t, n) {
  l.classList.toggle(t, !!n);
}
function Ai(l, t, { bubbles: n = !1, cancelable: a = !1 } = {}) {
  return new CustomEvent(l, { detail: t, bubbles: n, cancelable: a });
}
let n2;
function e2(l) {
  n2 = l;
}
function J2() {
  if (!n2) throw new Error("Function called outside component initialization");
  return n2;
}
function rl(l) {
  J2().$$.on_mount.push(l);
}
function Li(l) {
  J2().$$.on_destroy.push(l);
}
function V2() {
  const l = J2();
  return (t, n, { cancelable: a = !1 } = {}) => {
    const s = l.$$.callbacks[t];
    if (s) {
      const o = Ai(
        /** @type {string} */
        t,
        n,
        { cancelable: a }
      );
      return s.slice().forEach((d) => {
        d.call(l, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function Qi(l, t) {
  const n = l.$$.callbacks[t.type];
  n && n.slice().forEach((a) => a.call(this, t));
}
const el = [], r2 = [];
let tl = [];
const ai = [], Ii = /* @__PURE__ */ Promise.resolve();
let Y2 = !1;
function Vi() {
  Y2 || (Y2 = !0, Ii.then(Gi));
}
function W2(l) {
  tl.push(l);
}
const N2 = /* @__PURE__ */ new Set();
let Xr = 0;
function Gi() {
  if (Xr !== 0)
    return;
  const l = n2;
  do {
    try {
      for (; Xr < el.length; ) {
        const t = el[Xr];
        Xr++, e2(t), Ki(t.$$);
      }
    } catch (t) {
      throw el.length = 0, Xr = 0, t;
    }
    for (e2(null), el.length = 0, Xr = 0; r2.length; ) r2.pop()();
    for (let t = 0; t < tl.length; t += 1) {
      const n = tl[t];
      N2.has(n) || (N2.add(n), n());
    }
    tl.length = 0;
  } while (el.length);
  for (; ai.length; )
    ai.pop()();
  Y2 = !1, N2.clear(), e2(l);
}
function Ki(l) {
  if (l.fragment !== null) {
    l.update(), xt(l.before_update);
    const t = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, t), l.after_update.forEach(W2);
  }
}
function Ni(l) {
  const t = [], n = [];
  tl.forEach((a) => l.indexOf(a) === -1 ? t.push(a) : n.push(a)), n.forEach((a) => a()), tl = t;
}
const A2 = /* @__PURE__ */ new Set();
let mr;
function i2() {
  mr = {
    r: 0,
    c: [],
    p: mr
    // parent group
  };
}
function a2() {
  mr.r || xt(mr.c), mr = mr.p;
}
function P(l, t) {
  l && l.i && (A2.delete(l), l.i(t));
}
function j(l, t, n, a) {
  if (l && l.o) {
    if (A2.has(l)) return;
    A2.add(l), mr.c.push(() => {
      A2.delete(l), a && (n && l.d(1), a());
    }), l.o(t);
  } else a && a();
}
function nl(l) {
  return (l == null ? void 0 : l.length) !== void 0 ? l : Array.from(l);
}
function Yi(l, t) {
  l.d(1), t.delete(l.key);
}
function Wi(l, t, n, a, s, o, d, c, f, h, p, g) {
  let w = l.length, G = o.length, k = w;
  const v = {};
  for (; k--; ) v[l[k].key] = k;
  const S = [], R = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), U = [];
  for (k = G; k--; ) {
    const u = g(s, o, k), C = n(u);
    let M = d.get(C);
    M ? U.push(() => M.p(u, t)) : (M = h(C, u), M.c()), R.set(C, S[k] = M), C in v && O.set(C, Math.abs(k - v[C]));
  }
  const q = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
  function x(u) {
    P(u, 1), u.m(c, p), d.set(u.key, u), p = u.first, G--;
  }
  for (; w && G; ) {
    const u = S[G - 1], C = l[w - 1], M = u.key, W = C.key;
    u === C ? (p = u.first, w--, G--) : R.has(W) ? !d.has(M) || q.has(M) ? x(u) : T.has(W) ? w-- : O.get(M) > O.get(W) ? (T.add(M), x(u)) : (q.add(W), w--) : (f(C, d), w--);
  }
  for (; w--; ) {
    const u = l[w];
    R.has(u.key) || f(u, d);
  }
  for (; G; ) x(S[G - 1]);
  return xt(U), S;
}
function n0(l, t) {
  const n = {}, a = {}, s = { $$scope: 1 };
  let o = l.length;
  for (; o--; ) {
    const d = l[o], c = t[o];
    if (c) {
      for (const f in d)
        f in c || (a[f] = 1);
      for (const f in c)
        s[f] || (n[f] = c[f], s[f] = 1);
      l[o] = c;
    } else
      for (const f in d)
        s[f] = 1;
  }
  for (const d in a)
    d in n || (n[d] = void 0);
  return n;
}
function L(l) {
  l && l.c();
}
function F(l, t, n) {
  const { fragment: a, after_update: s } = l.$$;
  a && a.m(t, n), W2(() => {
    const o = l.$$.on_mount.map(Ri).filter(ki);
    l.$$.on_destroy ? l.$$.on_destroy.push(...o) : xt(o), l.$$.on_mount = [];
  }), s.forEach(W2);
}
function A(l, t) {
  const n = l.$$;
  n.fragment !== null && (Ni(n.after_update), xt(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Zi(l, t) {
  l.$$.dirty[0] === -1 && (el.push(l), Vi(), l.$$.dirty.fill(0)), l.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function V(l, t, n, a, s, o, d = null, c = [-1]) {
  const f = n2;
  e2(l);
  const h = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: y,
    not_equal: s,
    bound: li(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: li(),
    dirty: c,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  d && d(h.root);
  let p = !1;
  if (h.ctx = n ? n(l, t.props || {}, (g, w, ...G) => {
    const k = G.length ? G[0] : w;
    return h.ctx && s(h.ctx[g], h.ctx[g] = k) && (!h.skip_bound && h.bound[g] && h.bound[g](k), p && Zi(l, g)), w;
  }) : [], h.update(), p = !0, xt(h.before_update), h.fragment = a ? a(h.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = Fi(t.target);
      h.fragment && h.fragment.l(g), g.forEach($);
    } else
      h.fragment && h.fragment.c();
    t.intro && P(l.$$.fragment), F(l, t.target, t.anchor), Gi();
  }
  e2(f);
}
class K {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    D2(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    D2(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    A(this, 1), this.$destroy = y;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!ki(n))
      return y;
    const a = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return a.push(n), () => {
      const s = a.indexOf(n);
      s !== -1 && a.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Ei(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Xi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Xi);
const Ji = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3clinearGradient%20id='g'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.1'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='h'%3e%3cstop%20offset='0'%20stop-color='%23eb5e06'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.3'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='.2'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.3'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%3e%3cstop%20offset='0'%20stop-color='%23eb8403'/%3e%3cstop%20offset='1'%20stop-color='%23eb8403'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23a'%20id='i'%20x1='12'%20x2='18.8'%20y1='4'%20y2='15.8'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23b'%20id='j'%20x1='20.6'%20x2='14'%20y1='12.3'%20y2='16'%20gradientTransform='rotate(180%2012%20526.2)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23c'%20id='l'%20x1='7'%20x2='11.3'%20y1='1038'%20y2='1042.2'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23d'%20id='k'%20x1='18'%20x2='14.8'%20y1='1039.3'%20y2='1039.3'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='n'%20x1='6'%20x2='10.2'%20y1='1038'%20y2='1042.1'%20gradientTransform='rotate(180%2012%201040.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23f'%20id='m'%20x1='7.5'%20x2='18.2'%20y1='8.8'%20y2='11.7'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23g'%20id='o'%20x1='7.5'%20x2='21.2'%20y1='8.8'%20y2='12.5'%20gradientTransform='translate(0%201028.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23h'%20id='p'%20x1='6.6'%20x2='15.9'%20y1='1038.8'%20y2='1044.5'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='q'%20x1='31.4'%20x2='59.3'%20y1='1037.7'%20y2='1037.7'%20gradientUnits='userSpaceOnUse'/%3e%3c/defs%3e%3cpath%20fill='%23fe9e01'%20d='M2%2012c0-1.4%203.8-8%205-8.7a24%2024%200%200%201%2010%200c1.2.7%205%207.3%205%208.7%200%201.4-3.8%208-5%208.7a24%2024%200%200%201-10%200C5.8%2020%202%2013.4%202%2012z'/%3e%3cpath%20fill='none'%20d='M18%2012a15%2015%200%200%201-3%205.2c-.7.4-5.3.4-6%200A15%2015%200%200%201%206%2012a15%2015%200%200%201%203-5.2c.7-.4%205.3-.4%206%200%20.7.4%203%204.4%203%205.2z'/%3e%3cpath%20fill='url(%23i)'%20fill-rule='evenodd'%20d='M12%202.8a19.6%2019.6%200%200%200-3.7.3c1.7.1%204.3%201%205.5%202A30.3%2030.3%200%200%201%2018%2012c0%201-2.2%204.8-3%205.3l2%203.4a24%2024%200%200%200%205-8.6c0-1.4-3.8-8-5-8.7-.6-.3-2.8-.5-5-.5z'/%3e%3cpath%20fill='url(%23j)'%20fill-rule='evenodd'%20d='M12%201049.6a19.6%2019.6%200%200%200%203.7-.4c-1.7%200-4.3-1-5.5-2a30.3%2030.3%200%200%201-4.2-6.8c0-.9%202.2-4.7%203-5.2l-2-3.5a24%2024%200%200%200-5%208.7c0%201.4%203.8%208%205%208.6.6.4%202.8.6%205%20.6z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23k)'%20d='M18%201040.4a16%2016%200%200%201-3%205.2c-.7.4-5.3.4-6%200a16%2016%200%200%201-3-5.2c0-.9%202.3-4.8%203-5.2.7-.5%205.3-.5%206%200%20.7.4%203%204.3%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23l)'%20d='M9%201035.2c-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23m)'%20d='M9%206.8c-.8.5-3%204.4-3%205.2a30.3%2030.3%200%200%200%202.2%204.3c.7%201.1%201.4%202%202%202.5%201.2%201.1%203.8%202%205.5%202h1l.3-.1c1.2-.7%205-7.3%205-8.7l-4-.1v.1a15%2015%200%200%201-3%205.2%2015%2015%200%200%201-3-5.2%2015%2015%200%200%200-3-5.2z'/%3e%3cpath%20fill='url(%23n)'%20d='M15%201045.6c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23o)'%20stroke='url(%23p)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-opacity='.3'%20stroke-width='.1'%20d='M18%201040.2h0v.2a16%2016%200%200%201-3%205.2%2016%2016%200%200%201-3-5.2c0-.9-2.3-4.8-3-5.2h0s0%200%200%200c-.8.5-3%204.3-3%205.2a30.3%2030.3%200%200%200%202.2%204.3s0%200%200%200%200%200%200%200c.7%201%201.4%202%202%202.5%201.2%201%203.8%202%205.5%202h1l.3-.2'%20transform='translate(0%20-1028.4)'/%3e%3cg%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20fill='%23252127'%20d='M38.5%201038.7q0%20.7-.4%201.3l-.5.7-.7.5-.6.4%202.7%205.4h-2.6l-2.4-5.3h-2.6v5.3H29v-13.4h6.3q1%200%201.6.5l.7.6.5.6q.4.6.4%201.4v2zm-2.3%200v-2.1q-.4-.7-.8-.8h-4v3.7h4l.4-.3.4-.5z'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3cpath%20fill='url(%23q)'%20fill-rule='evenodd'%20d='M31.4%201035.8v3.7h25.9l2-3.7h-28z'%20transform='translate(0%20-1028.4)'/%3e%3cg%20fill='%23252127'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20d='M50.3%201047H48l-.1-.5q-1%20.6-1.4.6h-1.7q-1%200-1.7-.4-.6-.5-1-1.1-.4-.6-.4-1.4v-6.9H44v7l.8.7h1.7l.6-.3.7-.6v-6.8h2.3v7.7l.2%202z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20d='M63.2%201047h-2.9l-4.7-5.6h-.2v5.6H53v-13.4h2.4v5.6h.2l2.4-2.8q1.5-2%202.3-2.8h2.9l-5.6%206.7%202.5%203%203.1%203.7z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3c/svg%3e";
function ea(l) {
  let t;
  return {
    c() {
      t = _("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" class="svelte-rvpkcl"><defs><filter id="blur"><feGaussianBlur stdDeviation="12"></feGaussianBlur></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad" class="svelte-rvpkcl"><stop stop-color="hsl(105, 69%, 40%)" stop-opacity="1" offset="0%" class="svelte-rvpkcl"></stop><stop stop-color="hsl(105, 69%, 60%)" stop-opacity="1" offset="100%" class="svelte-rvpkcl"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round" filter="url(#blur)"><path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="1.00"></path><path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.96"></path><path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.92"></path><path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.89"></path><path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.85"></path><path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.81"></path><path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.77"></path><path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.73"></path><path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.70"></path><path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.66"></path><path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.62"></path><path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.58"></path><path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.54"></path><path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.51"></path><path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.47"></path><path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.43"></path><path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.39"></path><path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.35"></path><path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.32"></path><path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.28"></path><path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.24"></path><path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.20"></path><path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.16"></path><path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.13"></path><path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.09"></path></g></svg>', e(t, "class", "bg-img svelte-rvpkcl");
    },
    m(n, a) {
      z(n, t, a);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && $(t);
    }
  };
}
class ta extends K {
  constructor(t) {
    super(), V(this, t, null, ea, I, {});
  }
}
function na() {
  var l = document.createElement("script");
  l.setAttribute("async", ""), l.setAttribute("type", "text/javascript"), l.setAttribute("src", "calcemu.js"), document.body.appendChild(l);
}
function ra(l) {
  let t;
  return {
    c() {
      t = _("div"), t.innerHTML = "", e(t, "id", "buttons");
    },
    m(n, a) {
      z(n, t, a);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && $(t);
    }
  };
}
class la extends K {
  constructor(t) {
    super(), V(this, t, null, ra, I, {});
  }
}
const Jr = [];
function Ae(l, t = y) {
  let n;
  const a = /* @__PURE__ */ new Set();
  function s(c) {
    if (I(l, c) && (l = c, n)) {
      const f = !Jr.length;
      for (const h of a)
        h[1](), Jr.push(h, l);
      if (f) {
        for (let h = 0; h < Jr.length; h += 2)
          Jr[h][0](Jr[h + 1]);
        Jr.length = 0;
      }
    }
  }
  function o(c) {
    s(c(l));
  }
  function d(c, f = y) {
    const h = [c, f];
    return a.add(h), a.size === 1 && (n = t(s, o) || y), c(l), () => {
      a.delete(h), a.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: o, subscribe: d };
}
const lt = Ae("empty"), si = Ae(null), ia = Ae(!1), L2 = Ae(""), oi = Ae(0), Ci = Ae(), Mi = Ae(), t2 = Ae(!1), ei = Ae(!1), Q2 = Ae(!1), gr = Ae(!1), I2 = Ae(null), Z2 = Ae(null);
function aa(l) {
  let t, n, a;
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, o) {
      z(s, t, o), r(t, n), r(t, a);
    },
    p: y,
    i: y,
    o: y,
    d(s) {
      s && $(t);
    }
  };
}
class sa extends K {
  constructor(t) {
    super(), V(this, t, null, aa, I, {});
  }
}
function di(l) {
  let t, n, a, s, o, d, c = (
    /*$traceback*/
    l[2].name + ""
  ), f, h, p, g = (
    /*$traceback*/
    l[2].message + ""
  ), w, G, k, v;
  n = new sa({});
  let S = (
    /*$traceback*/
    l[2].hint && ci(l)
  );
  return {
    c() {
      t = _("div"), L(n.$$.fragment), a = B(), s = _("pre"), o = Y("            "), d = _("code"), f = Y(c), h = Y(`\r
            `), p = _("code"), w = Y(g), G = Y(`\r
            `), S && S.c(), k = Y(`\r
        `), e(d, "class", "name svelte-s5x38s"), e(p, "class", "message svelte-s5x38s"), e(s, "class", "svelte-s5x38s"), e(t, "class", "bsod svelte-s5x38s");
    },
    m(R, O) {
      z(R, t, O), F(n, t, null), r(t, a), r(t, s), r(s, o), r(s, d), r(d, f), r(s, h), r(s, p), r(p, w), r(s, G), S && S.m(s, null), r(s, k), v = !0;
    },
    p(R, O) {
      (!v || O & /*$traceback*/
      4) && c !== (c = /*$traceback*/
      R[2].name + "") && t0(f, c), (!v || O & /*$traceback*/
      4) && g !== (g = /*$traceback*/
      R[2].message + "") && t0(w, g), /*$traceback*/
      R[2].hint ? S ? S.p(R, O) : (S = ci(R), S.c(), S.m(s, k)) : S && (S.d(1), S = null);
    },
    i(R) {
      v || (P(n.$$.fragment, R), v = !0);
    },
    o(R) {
      j(n.$$.fragment, R), v = !1;
    },
    d(R) {
      R && $(t), A(n), S && S.d();
    }
  };
}
function ci(l) {
  let t, n, a;
  return {
    c() {
      t = _("a"), n = Y("Hint"), e(t, "href", a = /*$traceback*/
      l[2].hint), e(t, "target", "_blank");
    },
    m(s, o) {
      z(s, t, o), r(t, n);
    },
    p(s, o) {
      o & /*$traceback*/
      4 && a !== (a = /*$traceback*/
      s[2].hint) && e(t, "href", a);
    },
    d(s) {
      s && $(t);
    }
  };
}
function oa(l) {
  let t, n, a, s, o, d, c = (
    /*crashed*/
    l[1] && di(l)
  );
  return {
    c() {
      t = _("canvas"), n = B(), c && c.c(), a = l2(), e(t, "class", "emscripten svelte-s5x38s"), e(t, "id", "canvas"), e(t, "tabindex", "-1");
    },
    m(f, h) {
      z(f, t, h), l[5](t), z(f, n, h), c && c.m(f, h), z(f, a, h), s = !0, o || (d = ee(t, "contextmenu", Di(
        /*contextmenu_handler*/
        l[4]
      )), o = !0);
    },
    p(f, [h]) {
      /*crashed*/
      f[1] ? c ? (c.p(f, h), h & /*crashed*/
      2 && P(c, 1)) : (c = di(f), c.c(), P(c, 1), c.m(a.parentNode, a)) : c && (i2(), j(c, 1, 1, () => {
        c = null;
      }), a2());
    },
    i(f) {
      s || (P(c), s = !0);
    },
    o(f) {
      j(c), s = !1;
    },
    d(f) {
      f && ($(t), $(n), $(a)), l[5](null), c && c.d(f), o = !1, d();
    }
  };
}
function da(l, t, n) {
  let a, s, o;
  re(l, lt, (h) => n(3, s = h)), re(l, L2, (h) => n(2, o = h));
  let d;
  rl(() => {
    window.Module.canvas = d, d.addEventListener(
      "webglcontextlost",
      (h) => {
        alert("WebGL context lost. You will need to reload the page."), h.preventDefault();
      },
      !1
    );
  });
  function c(h) {
    Qi.call(this, l, h);
  }
  function f(h) {
    r2[h ? "unshift" : "push"](() => {
      d = h, n(0, d);
    });
  }
  return l.$$.update = () => {
    l.$$.dirty & /*$state*/
    8 && n(1, a = s === "crashed");
  }, [d, a, o, s, c, f];
}
class ca extends K {
  constructor(t) {
    super(), V(this, t, da, oa, I, {});
  }
}
function fa(l) {
  let t, n, a, s, o, d, c;
  return {
    c() {
      t = _("figure"), t.innerHTML = '<div class="spinner"></div><center style="margin-top:0.5em"><strong>emscripten</strong></center>', n = B(), a = _("div"), a.textContent = "Downloading...", s = B(), o = _("div"), o.innerHTML = '<progress value="0" max="100" id="progress" hidden=""></progress>', d = B(), c = _("textarea"), E(t, "overflow", "visible"), e(t, "id", "spinner"), e(a, "class", "emscripten"), e(a, "id", "status"), e(o, "class", "emscripten"), e(c, "class", "emscripten"), e(c, "id", "output"), e(c, "rows", "8");
    },
    m(f, h) {
      z(f, t, h), z(f, n, h), z(f, a, h), z(f, s, h), z(f, o, h), z(f, d, h), z(f, c, h);
    },
    p: y,
    i: y,
    o: y,
    d(f) {
      f && ($(t), $(n), $(a), $(s), $(o), $(d), $(c));
    }
  };
}
class ha extends K {
  constructor(t) {
    super(), V(this, t, null, fa, I, {});
  }
}
function pa(l) {
  let t, n, a;
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "fill-rule", "evenodd"), e(n, "d", "M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22"), e(n, "clip-rule", "evenodd"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, o) {
      z(s, t, o), r(t, n), r(t, a);
    },
    p: y,
    i: y,
    o: y,
    d(s) {
      s && $(t);
    }
  };
}
class ua extends K {
  constructor(t) {
    super(), V(this, t, null, pa, I, {});
  }
}
function ma(l) {
  let t, n, a, s;
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), s = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"), e(a, "fill", "currentColor"), e(a, "fill-rule", "evenodd"), e(a, "d", "M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"), e(a, "clip-rule", "evenodd"), e(s, "fill", "currentColor"), e(s, "d", "m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859"), e(s, "opacity", "0.4"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, d) {
      z(o, t, d), r(t, n), r(t, a), r(t, s);
    },
    p: y,
    i: y,
    o: y,
    d(o) {
      o && $(t);
    }
  };
}
class ga extends K {
  constructor(t) {
    super(), V(this, t, null, ma, I, {});
  }
}
function va(l) {
  let t, n, a;
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "fill-rule", "evenodd"), e(a, "d", "M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06"), e(a, "clip-rule", "evenodd"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, o) {
      z(s, t, o), r(t, n), r(t, a);
    },
    p: y,
    i: y,
    o: y,
    d(s) {
      s && $(t);
    }
  };
}
class xa extends K {
  constructor(t) {
    super(), V(this, t, null, va, I, {});
  }
}
function ba(l) {
  let t, n, a, s, o;
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), s = i("path"), o = i("path"), e(n, "fill", "currentColor"), e(n, "fill-rule", "evenodd"), e(n, "d", "M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938"), e(n, "clip-rule", "evenodd"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06q.333.684.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a4 4 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"), e(s, "fill", "currentColor"), e(s, "d", "M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z"), e(s, "opacity", "0.5"), e(o, "fill", "currentColor"), e(o, "fill-rule", "evenodd"), e(o, "d", "M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75"), e(o, "clip-rule", "evenodd"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24"), e(t, "class", "svelte-1v14ixl"), Je(
        t,
        "active",
        /*active*/
        l[0]
      );
    },
    m(d, c) {
      z(d, t, c), r(t, n), r(t, a), r(t, s), r(t, o);
    },
    p(d, [c]) {
      c & /*active*/
      1 && Je(
        t,
        "active",
        /*active*/
        d[0]
      );
    },
    i: y,
    o: y,
    d(d) {
      d && $(t);
    }
  };
}
function ya(l, t, n) {
  let { active: a = !1 } = t;
  return l.$$set = (s) => {
    "active" in s && n(0, a = s.active);
  }, [a];
}
let wa = class extends K {
  constructor(t) {
    super(), V(this, t, ya, ba, I, { active: 0 });
  }
};
function Ra(l) {
  let t, n, a, s, o, d;
  return {
    c() {
      t = i("svg"), n = i("g"), a = i("path"), s = i("path"), o = i("path"), d = i("path"), e(a, "d", "M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"), e(a, "opacity", "0.5"), e(s, "stroke-linecap", "round"), e(s, "stroke-linejoin", "round"), e(s, "d", "M12.429 10L11 12h2l-1.429 2"), e(o, "d", "M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"), e(d, "stroke-linecap", "round"), e(d, "d", "M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"), e(d, "opacity", "0.5"), e(n, "fill", "none"), e(n, "stroke", "currentColor"), e(n, "stroke-width", "1.5"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(c, f) {
      z(c, t, f), r(t, n), r(n, a), r(n, s), r(n, o), r(n, d);
    },
    p: y,
    i: y,
    o: y,
    d(c) {
      c && $(t);
    }
  };
}
class ka extends K {
  constructor(t) {
    super(), V(this, t, null, Ra, I, {});
  }
}
function _a(l) {
  let t, n, a;
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "fill-rule", "evenodd"), e(a, "d", "M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0"), e(a, "clip-rule", "evenodd"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, o) {
      z(s, t, o), r(t, n), r(t, a);
    },
    p: y,
    i: y,
    o: y,
    d(s) {
      s && $(t);
    }
  };
}
class qa extends K {
  constructor(t) {
    super(), V(this, t, null, _a, I, {});
  }
}
function Sa(l) {
  let t, n, a;
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "fill-rule", "evenodd"), e(n, "d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"), e(n, "clip-rule", "evenodd"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, o) {
      z(s, t, o), r(t, n), r(t, a);
    },
    p: y,
    i: y,
    o: y,
    d(s) {
      s && $(t);
    }
  };
}
class Ga extends K {
  constructor(t) {
    super(), V(this, t, null, Sa, I, {});
  }
}
function Ca(l) {
  let t, n, a, s, o, d;
  const c = (
    /*#slots*/
    l[4].default
  ), f = Hi(
    c,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      t = _("div"), n = _("div"), a = _("div"), s = B(), f && f.c(), e(a, "class", "tip svelte-vvbv4g"), e(n, "class", o = "popover " + /*visible*/
      (l[0] ? "visible" : "") + " svelte-vvbv4g"), e(t, "class", "popover-root svelte-vvbv4g"), E(
        t,
        "--x",
        /*position*/
        l[2].x + "px"
      ), E(
        t,
        "--y",
        /*position*/
        l[2].y + "px"
      );
    },
    m(h, p) {
      z(h, t, p), r(t, n), r(n, a), r(n, s), f && f.m(n, null), l[5](t), d = !0;
    },
    p(h, [p]) {
      f && f.p && (!d || p & /*$$scope*/
      8) && ji(
        f,
        c,
        h,
        /*$$scope*/
        h[3],
        d ? Pi(
          c,
          /*$$scope*/
          h[3],
          p,
          null
        ) : Ti(
          /*$$scope*/
          h[3]
        ),
        null
      ), (!d || p & /*visible*/
      1 && o !== (o = "popover " + /*visible*/
      (h[0] ? "visible" : "") + " svelte-vvbv4g")) && e(n, "class", o), (!d || p & /*position*/
      4) && E(
        t,
        "--x",
        /*position*/
        h[2].x + "px"
      ), (!d || p & /*position*/
      4) && E(
        t,
        "--y",
        /*position*/
        h[2].y + "px"
      );
    },
    i(h) {
      d || (P(f, h), d = !0);
    },
    o(h) {
      j(f, h), d = !1;
    },
    d(h) {
      h && $(t), f && f.d(h), l[5](null);
    }
  };
}
function Ma(l, t, n) {
  let { $$slots: a = {}, $$scope: s } = t, o, { visible: d = !1 } = t, c, f = { x: 0, y: 0 };
  rl(() => {
    if (o = c.parentElement, o) {
      const p = o.getBoundingClientRect(), g = c.getBoundingClientRect();
      n(2, f = {
        x: p.left + window.scrollX,
        y: p.top + window.scrollY
        // + (rect.height - popoverRect.height) / 2
      }), f.x + g.width > window.innerWidth ? n(2, f.x -= g.width, f) : n(2, f.x += p.width, f);
    }
  });
  function h(p) {
    r2[p ? "unshift" : "push"](() => {
      c = p, n(1, c);
    });
  }
  return l.$$set = (p) => {
    "visible" in p && n(0, d = p.visible), "$$scope" in p && n(3, s = p.$$scope);
  }, [d, c, f, s, a, h];
}
class F2 extends K {
  constructor(t) {
    super(), V(this, t, Ma, Ca, I, { visible: 0 });
  }
}
function Ua(l) {
  let t, n, a, s, o = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], d = {};
  for (let c = 0; c < o.length; c += 1)
    d = N(d, o[c]);
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), s = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"), e(s, "fill", "currentColor"), e(s, "fill-rule", "evenodd"), e(s, "d", "M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"), e(s, "clip-rule", "evenodd"), ae(t, d);
    },
    m(c, f) {
      z(c, t, f), r(t, n), r(t, a), r(t, s);
    },
    p(c, [f]) {
      ae(t, d = n0(o, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: y,
    o: y,
    d(c) {
      c && $(t);
    }
  };
}
function $a(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class za extends K {
  constructor(t) {
    super(), V(this, t, $a, Ua, I, {});
  }
}
function Oa(l) {
  let t;
  return {
    c() {
      t = Y("Start by picking a BIN program");
    },
    m(n, a) {
      z(n, t, a);
    },
    d(n) {
      n && $(t);
    }
  };
}
function Ea(l) {
  let t;
  return {
    c() {
      t = Y(
        /*$copyScreenFeedback*/
        l[8]
      );
    },
    m(n, a) {
      z(n, t, a);
    },
    p(n, a) {
      a & /*$copyScreenFeedback*/
      256 && t0(
        t,
        /*$copyScreenFeedback*/
        n[8]
      );
    },
    d(n) {
      n && $(t);
    }
  };
}
function Ba(l) {
  let t;
  return {
    c() {
      t = Y("Check why it crashed here");
    },
    m(n, a) {
      z(n, t, a);
    },
    d(n) {
      n && $(t);
    }
  };
}
function Ha(l) {
  let t;
  return {
    c() {
      t = Y("Now let's start the program");
    },
    m(n, a) {
      z(n, t, a);
    },
    d(n) {
      n && $(t);
    }
  };
}
function Pa(l) {
  let t, n, a, s, o, d, c, f, h, p, g, w, G, k, v, S, R, O, U, q, T, x, u, C, M, W, Q, Z, J, et, D, le, de, se, Le, N0, tt, Qe, Y0, nt, W0, ce, Ie, Ve, r0, l0;
  return a = new F2({
    props: {
      visible: (
        /*loadHint*/
        l[7]
      ),
      $$slots: { default: [Oa] },
      $$scope: { ctx: l }
    }
  }), o = new ua({}), p = new za({}), v = new F2({
    props: {
      visible: (
        /*$copyScreenFeedback*/
        l[8] !== null
      ),
      $$slots: { default: [Ea] },
      $$scope: { ctx: l }
    }
  }), R = new ga({}), q = new xa({}), M = new wa({ props: { active: (
    /*$debugging*/
    l[1]
  ) } }), J = new F2({
    props: {
      visible: (
        /*crashedHint*/
        l[2] && !/*$tracing*/
        l[9]
      ),
      $$slots: { default: [Ba] },
      $$scope: { ctx: l }
    }
  }), D = new ka({}), Le = new F2({
    props: {
      visible: (
        /*loaded*/
        l[6] && !/*$debugging*/
        l[1]
      ),
      $$slots: { default: [Ha] },
      $$scope: { ctx: l }
    }
  }), tt = new Ga({}), Ie = new qa({}), {
    c() {
      t = _("div"), n = _("button"), L(a.$$.fragment), s = B(), L(o.$$.fragment), d = B(), c = _("input"), f = B(), h = _("button"), L(p.$$.fragment), g = B(), w = _("div"), G = B(), k = _("button"), L(v.$$.fragment), S = B(), L(R.$$.fragment), O = B(), U = _("button"), L(q.$$.fragment), T = B(), x = _("div"), u = B(), C = _("button"), L(M.$$.fragment), Q = B(), Z = _("button"), L(J.$$.fragment), et = B(), L(D.$$.fragment), de = B(), se = _("button"), L(Le.$$.fragment), N0 = B(), L(tt.$$.fragment), Y0 = B(), nt = _("div"), W0 = B(), ce = _("button"), L(Ie.$$.fragment), e(c, "type", "file"), e(c, "id", "fileInput"), E(c, "display", "none"), e(n, "class", "toolbar-action"), e(n, "type", "button"), e(n, "tabindex", "0"), e(n, "id", "btn_pickFile"), e(h, "class", "toolbar-action"), e(h, "type", "button"), e(h, "tabindex", "0"), e(h, "id", "btn_browseFiles"), e(w, "class", "separator"), e(w, "role", "separator"), e(w, "data-orientation", "horizontal"), e(w, "aria-orientation", "horizontal"), e(k, "class", "toolbar-action"), e(k, "type", "button"), e(k, "tabindex", "0"), e(k, "id", "btn_copyScreen"), e(U, "class", "toolbar-action"), e(U, "type", "button"), e(U, "tabindex", "0"), e(U, "id", "btn_saveScreen"), e(x, "class", "separator"), e(x, "role", "separator"), e(x, "data-orientation", "horizontal"), e(x, "aria-orientation", "horizontal"), e(C, "class", "toolbar-action"), e(C, "type", "button"), e(C, "tabindex", "0"), e(C, "id", "btn_debug"), C.disabled = W = !/*loaded*/
      l[6] && /*running*/
      l[5] && !/*isDebug*/
      l[4], e(Z, "class", "toolbar-action"), e(Z, "type", "button"), e(Z, "tabindex", "0"), e(Z, "id", "btn_dump"), Z.disabled = le = !/*loaded*/
      l[6] && !/*crashed*/
      l[0] && !/*running*/
      l[5], e(se, "class", "toolbar-action"), e(se, "type", "button"), e(se, "tabindex", "0"), e(se, "id", "btn_run"), se.disabled = Qe = !/*loaded*/
      l[6], e(nt, "class", "separator"), e(nt, "role", "separator"), e(nt, "data-orientation", "horizontal"), e(nt, "aria-orientation", "horizontal"), e(ce, "class", "toolbar-action"), e(ce, "type", "button"), e(ce, "tabindex", "0"), e(ce, "id", "btn_fullscreen"), e(t, "class", "toolbar");
    },
    m(H, X) {
      z(H, t, X), r(t, n), F(a, n, null), r(n, s), F(o, n, null), r(n, d), r(n, c), l[20](c), r(t, f), r(t, h), F(p, h, null), r(t, g), r(t, w), r(t, G), r(t, k), F(v, k, null), r(k, S), F(R, k, null), r(t, O), r(t, U), F(q, U, null), r(t, T), r(t, x), r(t, u), r(t, C), F(M, C, null), r(t, Q), r(t, Z), F(J, Z, null), r(Z, et), F(D, Z, null), r(t, de), r(t, se), F(Le, se, null), r(se, N0), F(tt, se, null), r(t, Y0), r(t, nt), r(t, W0), r(t, ce), F(Ie, ce, null), Ve = !0, r0 || (l0 = [
        ee(
          c,
          "change",
          /*handleFile*/
          l[11]
        ),
        ee(
          n,
          "click",
          /*pickFile*/
          l[10]
        ),
        ee(
          h,
          "click",
          /*doBrowseFiles*/
          l[12]
        ),
        ee(
          k,
          "click",
          /*doCopyScreen*/
          l[13]
        ),
        ee(
          U,
          "click",
          /*doSaveScreen*/
          l[14]
        ),
        ee(
          C,
          "click",
          /*doDebug*/
          l[18]
        ),
        ee(
          Z,
          "click",
          /*doDump*/
          l[17]
        ),
        ee(
          se,
          "click",
          /*doRun*/
          l[15]
        ),
        ee(
          ce,
          "click",
          /*doFullscreen*/
          l[16]
        )
      ], r0 = !0);
    },
    p(H, [X]) {
      const bt = {};
      X & /*loadHint*/
      128 && (bt.visible = /*loadHint*/
      H[7]), X & /*$$scope*/
      8388608 && (bt.$$scope = { dirty: X, ctx: H }), a.$set(bt);
      const i0 = {};
      X & /*$copyScreenFeedback*/
      256 && (i0.visible = /*$copyScreenFeedback*/
      H[8] !== null), X & /*$$scope, $copyScreenFeedback*/
      8388864 && (i0.$$scope = { dirty: X, ctx: H }), v.$set(i0);
      const Z0 = {};
      X & /*$debugging*/
      2 && (Z0.active = /*$debugging*/
      H[1]), M.$set(Z0), (!Ve || X & /*loaded, running, isDebug*/
      112 && W !== (W = !/*loaded*/
      H[6] && /*running*/
      H[5] && !/*isDebug*/
      H[4])) && (C.disabled = W);
      const yt = {};
      X & /*crashedHint, $tracing*/
      516 && (yt.visible = /*crashedHint*/
      H[2] && !/*$tracing*/
      H[9]), X & /*$$scope*/
      8388608 && (yt.$$scope = { dirty: X, ctx: H }), J.$set(yt), (!Ve || X & /*loaded, crashed, running*/
      97 && le !== (le = !/*loaded*/
      H[6] && !/*crashed*/
      H[0] && !/*running*/
      H[5])) && (Z.disabled = le);
      const a0 = {};
      X & /*loaded, $debugging*/
      66 && (a0.visible = /*loaded*/
      H[6] && !/*$debugging*/
      H[1]), X & /*$$scope*/
      8388608 && (a0.$$scope = { dirty: X, ctx: H }), Le.$set(a0), (!Ve || X & /*loaded*/
      64 && Qe !== (Qe = !/*loaded*/
      H[6])) && (se.disabled = Qe);
    },
    i(H) {
      Ve || (P(a.$$.fragment, H), P(o.$$.fragment, H), P(p.$$.fragment, H), P(v.$$.fragment, H), P(R.$$.fragment, H), P(q.$$.fragment, H), P(M.$$.fragment, H), P(J.$$.fragment, H), P(D.$$.fragment, H), P(Le.$$.fragment, H), P(tt.$$.fragment, H), P(Ie.$$.fragment, H), Ve = !0);
    },
    o(H) {
      j(a.$$.fragment, H), j(o.$$.fragment, H), j(p.$$.fragment, H), j(v.$$.fragment, H), j(R.$$.fragment, H), j(q.$$.fragment, H), j(M.$$.fragment, H), j(J.$$.fragment, H), j(D.$$.fragment, H), j(Le.$$.fragment, H), j(tt.$$.fragment, H), j(Ie.$$.fragment, H), Ve = !1;
    },
    d(H) {
      H && $(t), A(a), A(o), l[20](null), A(p), A(v), A(R), A(q), A(M), A(J), A(D), A(Le), A(tt), A(Ie), r0 = !1, xt(l0);
    }
  };
}
function ja(l, t, n) {
  let a, s, o, d, c, f, h, p, g;
  re(l, ei, (M) => n(1, f = M)), re(l, lt, (M) => n(19, h = M)), re(l, Z2, (M) => n(8, p = M)), re(l, gr, (M) => n(9, g = M));
  const w = () => {
    k.click();
  };
  let G = !1, k;
  const v = V2(), S = (M) => {
    v("romChanged", M);
  }, R = (M) => {
    v("doBrowseFiles", M);
  }, O = (M) => {
    v("doCopyScreen", M);
  }, U = (M) => {
    v("doSaveScreen", M);
  }, q = (M) => {
    v("doRun", M);
  }, T = (M) => {
    v("doFullscreen", M);
  }, x = (M) => {
    v("doDump", M);
  }, u = (M) => {
    v("doDebug", M);
  };
  function C(M) {
    r2[M ? "unshift" : "push"](() => {
      k = M, n(3, k);
    });
  }
  return l.$$.update = () => {
    l.$$.dirty & /*$state*/
    524288 && n(7, a = h === "empty"), l.$$.dirty & /*$state*/
    524288 && n(6, s = h === "loaded"), l.$$.dirty & /*$state*/
    524288 && n(0, o = h === "crashed"), l.$$.dirty & /*$state*/
    524288 && n(5, d = h === "running"), l.$$.dirty & /*crashed*/
    1 && o && (n(2, G = !0), setTimeout(
      () => {
        n(2, G = !1);
      },
      4e3
    )), l.$$.dirty & /*$state*/
    524288, l.$$.dirty & /*$debugging*/
    2 && n(4, c = f);
  }, [
    o,
    f,
    G,
    k,
    c,
    d,
    s,
    a,
    p,
    g,
    w,
    S,
    R,
    O,
    U,
    q,
    T,
    x,
    u,
    h,
    C
  ];
}
class Ta extends K {
  constructor(t) {
    super(), V(this, t, ja, Pa, I, {});
  }
}
function Da(l) {
  let t, n, a, s;
  return {
    c() {
      t = i("svg"), n = i("g"), a = i("path"), s = i("path"), e(a, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"), e(a, "opacity", "0.5"), e(s, "stroke-linecap", "round"), e(s, "d", "m14.5 9.5l-5 5m0-5l5 5"), e(n, "fill", "none"), e(n, "stroke", "currentColor"), e(n, "stroke-width", "1.5"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, d) {
      z(o, t, d), r(t, n), r(n, a), r(n, s);
    },
    p: y,
    i: y,
    o: y,
    d(o) {
      o && $(t);
    }
  };
}
class ti extends K {
  constructor(t) {
    super(), V(this, t, null, Da, I, {});
  }
}
function Fa(l) {
  let t, n, a;
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M12.01 5.25a6.59 6.59 0 0 0-6.55 5.833H5a.75.75 0 0 0-.53 1.281l1.168 1.167a.75.75 0 0 0 1.06 0l1.169-1.167a.75.75 0 0 0-.53-1.28h-.364A5.09 5.09 0 0 1 12.01 6.75a5.08 5.08 0 0 1 3.838 1.743a.75.75 0 1 0 1.13-.986A6.58 6.58 0 0 0 12.01 5.25m6.352 5.22a.75.75 0 0 0-1.06 0l-1.168 1.166a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-3.839-1.743a.75.75 0 0 0-1.13.987a6.58 6.58 0 0 0 4.969 2.256a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(s, o) {
      z(s, t, o), r(t, n), r(t, a);
    },
    p: y,
    i: y,
    o: y,
    d(s) {
      s && $(t);
    }
  };
}
class Aa extends K {
  constructor(t) {
    super(), V(this, t, null, Fa, I, {});
  }
}
function La(l) {
  let t, n, a;
  return {
    c() {
      t = i("g"), n = i("path"), a = i("path"), e(n, "d", "M22 5.814v.69c0 1.038 0 1.557-.26 1.987s-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281s-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69"), e(a, "d", "M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815"), e(a, "opacity", "0.5"), e(t, "fill", "none"), e(t, "stroke", "currentColor"), e(t, "stroke-width", "1.5");
    },
    m(s, o) {
      z(s, t, o), r(t, n), r(t, a);
    },
    d(s) {
      s && $(t);
    }
  };
}
function Qa(l) {
  let t, n;
  return {
    c() {
      t = i("path"), n = i("path"), e(t, "fill", "currentColor"), e(t, "fill-rule", "evenodd"), e(t, "d", "M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3"), e(t, "clip-rule", "evenodd"), e(n, "fill", "currentColor"), e(n, "d", "M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988"), e(n, "opacity", "0.5");
    },
    m(a, s) {
      z(a, t, s), z(a, n, s);
    },
    d(a) {
      a && ($(t), $(n));
    }
  };
}
function Ia(l) {
  let t;
  function n(o, d) {
    return (
      /*on*/
      o[0] ? Qa : La
    );
  }
  let a = n(l), s = a(l);
  return {
    c() {
      t = i("svg"), s.c(), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, d) {
      z(o, t, d), s.m(t, null);
    },
    p(o, [d]) {
      a !== (a = n(o)) && (s.d(1), s = a(o), s && (s.c(), s.m(t, null)));
    },
    i: y,
    o: y,
    d(o) {
      o && $(t), s.d();
    }
  };
}
function Va(l, t, n) {
  let { on: a = !1 } = t;
  return l.$$set = (s) => {
    "on" in s && n(0, a = s.on);
  }, [a];
}
class Ka extends K {
  constructor(t) {
    super(), V(this, t, Va, Ia, I, { on: 0 });
  }
}
function fi(l, t, n) {
  const a = l.slice();
  a[10] = t[n], a[13] = n;
  const s = (
    /*registers_names*/
    a[3][
      /*i*/
      a[13]
    ] || "r" + /*i*/
    a[13].toString(16)
  );
  return a[11] = s, a;
}
function Na(l) {
  let t;
  return {
    c() {
      t = _("p"), t.textContent = "Loading ...";
    },
    m(n, a) {
      z(n, t, a);
    },
    p: y,
    d(n) {
      n && $(t);
    }
  };
}
function Ya(l) {
  let t = (
    /*filtered*/
    l[1]
  ), n, a = ui(l);
  return {
    c() {
      a.c(), n = l2();
    },
    m(s, o) {
      a.m(s, o), z(s, n, o);
    },
    p(s, o) {
      o & /*filtered*/
      2 && I(t, t = /*filtered*/
      s[1]) ? (a.d(1), a = ui(s), a.c(), a.m(n.parentNode, n)) : a.p(s, o);
    },
    d(s) {
      s && $(n), a.d(s);
    }
  };
}
function hi(l) {
  let t, n, a = (
    /*label*/
    l[11] + ""
  ), s, o, d, c, f;
  return {
    c() {
      t = _("div"), n = _("label"), s = Y(a), o = B(), d = _("input"), f = B(), e(n, "for", "reg_" + /*i*/
      l[13]), e(
        n,
        "title",
        /*label*/
        l[11]
      ), e(n, "class", "svelte-11ce0t0"), e(d, "type", "text"), e(d, "name", "reg_" + /*i*/
      l[13]), d.value = c = /*reg*/
      l[10].toString(16).toUpperCase(), d.readOnly = !0, e(d, "class", "svelte-11ce0t0"), e(t, "class", "row svelte-11ce0t0");
    },
    m(h, p) {
      z(h, t, p), r(t, n), r(n, s), r(t, o), r(t, d), r(t, f);
    },
    p(h, p) {
      p & /*dump*/
      1 && c !== (c = /*reg*/
      h[10].toString(16).toUpperCase()) && d.value !== c && (d.value = c);
    },
    d(h) {
      h && $(t);
    }
  };
}
function pi(l) {
  let t = !/*filtered*/
  l[1] || /*filtered_names*/
  l[4].includes(
    /*label*/
    l[11]
  ), n, a = t && hi(l);
  return {
    c() {
      a && a.c(), n = l2();
    },
    m(s, o) {
      a && a.m(s, o), z(s, n, o);
    },
    p(s, o) {
      o & /*filtered*/
      2 && (t = !/*filtered*/
      s[1] || /*filtered_names*/
      s[4].includes(
        /*label*/
        s[11]
      )), t ? a ? a.p(s, o) : (a = hi(s), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
    },
    d(s) {
      s && $(n), a && a.d(s);
    }
  };
}
function ui(l) {
  let t, n = nl(
    /*dump*/
    l[0].registers
  ), a = [];
  for (let s = 0; s < n.length; s += 1)
    a[s] = pi(fi(l, n, s));
  return {
    c() {
      for (let s = 0; s < a.length; s += 1)
        a[s].c();
      t = l2();
    },
    m(s, o) {
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(s, o);
      z(s, t, o);
    },
    p(s, o) {
      if (o & /*dump, registers_names, filtered, filtered_names*/
      27) {
        n = nl(
          /*dump*/
          s[0].registers
        );
        let d;
        for (d = 0; d < n.length; d += 1) {
          const c = fi(s, n, d);
          a[d] ? a[d].p(c, o) : (a[d] = pi(c), a[d].c(), a[d].m(t.parentNode, t));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = n.length;
      }
    },
    d(s) {
      s && $(t), Si(a, s);
    }
  };
}
function Wa(l) {
  let t, n, a, s, o, d, c, f, h, p, g, w, G, k, v, S, R, O;
  d = new Ka({ props: { on: (
    /*filtered*/
    l[1]
  ) } }), h = new Aa({}), w = new ti({});
  function U(x, u) {
    return (
      /*dump*/
      x[0] ? Ya : Na
    );
  }
  let q = U(l), T = q(l);
  return {
    c() {
      t = _("div"), n = _("div"), a = _("h4"), a.textContent = "Registers", s = B(), o = _("button"), L(d.$$.fragment), c = B(), f = _("button"), L(h.$$.fragment), p = B(), g = _("button"), L(w.$$.fragment), G = B(), k = _("div"), v = _("div"), T.c(), e(a, "class", "header"), e(o, "class", "toolbar-action"), e(o, "type", "button"), e(o, "tabindex", "0"), e(o, "id", "btn_filter_trace"), e(f, "class", "toolbar-action"), e(f, "type", "button"), e(f, "tabindex", "0"), e(f, "id", "btn_refresh_trace"), e(g, "class", "toolbar-action"), e(g, "type", "button"), e(g, "tabindex", "0"), e(g, "id", "btn_close_trace"), e(n, "class", "titlebar"), e(v, "class", "registers svelte-11ce0t0"), e(k, "class", "contents svelte-11ce0t0"), e(t, "class", "tracing-panel view-panel svelte-11ce0t0"), Je(
        t,
        "visible",
        /*$tracing*/
        l[2]
      );
    },
    m(x, u) {
      z(x, t, u), r(t, n), r(n, a), r(n, s), r(n, o), F(d, o, null), r(n, c), r(n, f), F(h, f, null), r(n, p), r(n, g), F(w, g, null), r(t, G), r(t, k), r(k, v), T.m(v, null), S = !0, R || (O = [
        ee(
          o,
          "click",
          /*doFilter*/
          l[5]
        ),
        ee(
          f,
          "click",
          /*doRefresh*/
          l[6]
        ),
        ee(
          g,
          "click",
          /*doClose*/
          l[7]
        )
      ], R = !0);
    },
    p(x, [u]) {
      const C = {};
      u & /*filtered*/
      2 && (C.on = /*filtered*/
      x[1]), d.$set(C), q === (q = U(x)) && T ? T.p(x, u) : (T.d(1), T = q(x), T && (T.c(), T.m(v, null))), (!S || u & /*$tracing*/
      4) && Je(
        t,
        "visible",
        /*$tracing*/
        x[2]
      );
    },
    i(x) {
      S || (P(d.$$.fragment, x), P(h.$$.fragment, x), P(w.$$.fragment, x), S = !0);
    },
    o(x) {
      j(d.$$.fragment, x), j(h.$$.fragment, x), j(w.$$.fragment, x), S = !1;
    },
    d(x) {
      x && $(t), A(d), A(h), A(w), T.d(), R = !1, xt(O);
    }
  };
}
function Za(l, t, n) {
  let a;
  re(l, gr, (G) => n(2, a = G));
  const s = [
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
  let o = [
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
  const c = I2.subscribe((G) => {
    n(0, d = G);
  });
  Li(() => {
    c();
  });
  let f = !0;
  const h = (G) => {
    n(1, f = !f);
  }, p = V2();
  return [
    d,
    f,
    a,
    s,
    o,
    h,
    (G) => {
      p("doRefresh", G);
    },
    (G) => {
      p("doClose", G), gr.set(!1);
    }
  ];
}
class Xa extends K {
  constructor(t) {
    super(), V(this, t, Za, Wa, I, {});
  }
}
function Ja(l, t, n) {
  var a = new FileReader();
  a.onload = function(s) {
    if (s.target && s.target.result) {
      var o = new Uint8Array(s.target.result);
      window.Module.FS.analyzePath(t).exists && window.Module.FS.unlink(t), window.Module.FS.createDataFile("/", t, o, !0, !0), console.log(`${t} loaded into the Emscripten filesystem.`), n(null);
    } else
      n("target is empty");
  }, a.onerror = function(s) {
    n(s);
  }, a.readAsArrayBuffer(l);
}
function es(l, t) {
  return new Promise((n, a) => {
    t.startsWith("/fls0") || (t = `/fls0/${t}`), Ja(l, t, (s) => {
      s ? a(s) : n(() => {
      });
    });
  });
}
function ts(l) {
  let t, n, a, s, o, d, c, f, h, p, g, w, G, k, v, S, R, O, U, q, T, x, u, C, M, W, Q, Z, J, et, D, le, de, se, Le, N0, tt, Qe, Y0, nt, W0, ce, Ie, Ve, r0, l0, H, X, bt, i0, Z0, yt, a0, ll, vr, il, al, sl, xr, ol, dl, cl, X0, s2, o2, d2, c2, s0, f2, h2, p2, u2, m2, fl, g2, hl, J0, v2, x2, b2, pl, br, y2, ul, ml, yr, w2, gl, vl, xl, R2, bl, yl, k2, wl, wr, _2, Rl, q2, it, S2, G2, C2, M2, U2, $2, z2, wt, Rt, kt, _t, qt, St, Gt, Ct, Mt, Ut, $t, zt, Ot, Et, Bt, Ht, Pt, jt, Tt, Dt, Ft, At, Lt, Qt, It, Vt, Kt, Nt, Yt, Wt, Zt, Xt, Jt, e1, t1, n1, r1, l1, i1, a1, s1, o1, d1, c1, f1, h1, p1, u1, m1, g1, v1, x1, b1, y1, w1, R1, k1, _1, q1, S1, G1, C1, M1, U1, at, st, ot, $1, z1, O1, E1, B1, H1, P1, j1, T1, D1, F1, A1, L1, Q1, I1, V1, K1, N1, Y1, W1, Z1, X1, J1, en, tn, nn, rn, ln, an, sn, on, dn, cn, fn, Ke, er, kl, _l, hn, oe, Rr, ql, kr, tr, Ne, Ye, We, Ze, dt, ct, ft, o0, fe, pn, Sl, O2, E2, B2, d0, H2, b, Gl, Cl, Ml, _r, qr, nr, he, un, Ul, c0, pe, mn, $l, f0, ue, gn, zl, h0, me, vn, Ol, p0, ge, xn, El, u0, ve, bn, Bl, m0, xe, yn, Hl, g0, be, wn, Pl, v0, ye, Rn, jl, x0, we, kn, Tl, b0, Re, _n, Dl, y0, ke, qn, Fl, w0, _e, Sn, Al, R0, qe, Gn, Ll, k0, Se, Cn, Ql, _0, Ge, Mn, Il, q0, Ce, Un, Vl, P2, j2, T2, $n, zn, On, En, Xe, ht, pt, ut, Kl, rr, Me, Bn, lr, Ue, Hn, ir, $e, Pn, ar, ze, jn, sr, Oe, Tn, or, Ee, Dn, dr, Be, Fn, cr, He, An, mt, fr, Pe, Ln, hr, je, Qn, pr, Te, In, ur, De, Vn, Sr, S0, Gr, Kn, Fe, G0, ni, ri, Cr, C0, Mr, M0, Ur, U0, $r, $0, zr, z0, Or, O0, Er, E0, Br, B0, Hr, H0, Pr, Nn, Nl, rt, jr, Yn, Tr, P0, Dr, j0, Fr, T0, Ar, Wn, Lr, Zn, Qr, Xn, Ir, D0, Vr, F0, Kr, A0, Nr, L0, Yr, Q0, Wr, I0, V0, Jn, K0, e0, te, ne, Zr, Yl, Wl, gt, Zl, Xl, Jl, vt;
  return {
    c() {
      t = i("svg"), n = i("defs"), a = i("linearGradient"), s = i("stop"), o = i("stop"), d = i("stop"), c = i("stop"), f = i("linearGradient"), h = i("stop"), p = i("stop"), g = i("stop"), w = i("stop"), G = i("stop"), k = i("linearGradient"), v = i("stop"), S = i("stop"), R = i("stop"), O = i("stop"), U = i("linearGradient"), q = i("stop"), T = i("stop"), x = i("stop"), u = i("stop"), C = i("stop"), M = i("linearGradient"), W = i("stop"), Q = i("stop"), Z = i("stop"), J = i("stop"), et = i("linearGradient"), D = i("stop"), le = i("stop"), de = i("linearGradient"), se = i("stop"), Le = i("stop"), N0 = i("stop"), tt = i("stop"), Qe = i("linearGradient"), Y0 = i("stop"), nt = i("stop"), W0 = i("stop"), ce = i("stop"), Ie = i("linearGradient"), Ve = i("stop"), r0 = i("stop"), l0 = i("linearGradient"), H = i("stop"), X = i("stop"), bt = i("linearGradient"), i0 = i("stop"), Z0 = i("stop"), yt = i("linearGradient"), a0 = i("stop"), ll = i("stop"), vr = i("linearGradient"), il = i("stop"), al = i("stop"), sl = i("stop"), xr = i("linearGradient"), ol = i("stop"), dl = i("stop"), cl = i("stop"), X0 = i("linearGradient"), s2 = i("stop"), o2 = i("stop"), d2 = i("stop"), c2 = i("stop"), s0 = i("linearGradient"), f2 = i("stop"), h2 = i("stop"), p2 = i("stop"), u2 = i("stop"), m2 = i("stop"), fl = i("linearGradient"), g2 = i("stop"), hl = i("stop"), J0 = i("linearGradient"), v2 = i("stop"), x2 = i("stop"), b2 = i("stop"), pl = i("stop"), br = i("linearGradient"), y2 = i("stop"), ul = i("stop"), ml = i("stop"), yr = i("linearGradient"), w2 = i("stop"), gl = i("stop"), vl = i("stop"), xl = i("linearGradient"), R2 = i("stop"), bl = i("stop"), yl = i("linearGradient"), k2 = i("stop"), wl = i("stop"), wr = i("linearGradient"), _2 = i("stop"), Rl = i("stop"), q2 = i("stop"), it = i("linearGradient"), S2 = i("stop"), G2 = i("stop"), C2 = i("stop"), M2 = i("stop"), U2 = i("stop"), $2 = i("stop"), z2 = i("stop"), wt = i("linearGradient"), Rt = i("linearGradient"), kt = i("linearGradient"), _t = i("linearGradient"), qt = i("linearGradient"), St = i("linearGradient"), Gt = i("linearGradient"), Ct = i("linearGradient"), Mt = i("linearGradient"), Ut = i("linearGradient"), $t = i("linearGradient"), zt = i("linearGradient"), Ot = i("linearGradient"), Et = i("linearGradient"), Bt = i("linearGradient"), Ht = i("linearGradient"), Pt = i("linearGradient"), jt = i("linearGradient"), Tt = i("linearGradient"), Dt = i("linearGradient"), Ft = i("linearGradient"), At = i("linearGradient"), Lt = i("linearGradient"), Qt = i("linearGradient"), It = i("linearGradient"), Vt = i("linearGradient"), Kt = i("linearGradient"), Nt = i("linearGradient"), Yt = i("linearGradient"), Wt = i("linearGradient"), Zt = i("linearGradient"), Xt = i("linearGradient"), Jt = i("linearGradient"), e1 = i("linearGradient"), t1 = i("linearGradient"), n1 = i("linearGradient"), r1 = i("linearGradient"), l1 = i("linearGradient"), i1 = i("linearGradient"), a1 = i("linearGradient"), s1 = i("linearGradient"), o1 = i("linearGradient"), d1 = i("linearGradient"), c1 = i("linearGradient"), f1 = i("linearGradient"), h1 = i("linearGradient"), p1 = i("linearGradient"), u1 = i("linearGradient"), m1 = i("linearGradient"), g1 = i("linearGradient"), v1 = i("linearGradient"), x1 = i("linearGradient"), b1 = i("linearGradient"), y1 = i("linearGradient"), w1 = i("linearGradient"), R1 = i("linearGradient"), k1 = i("linearGradient"), _1 = i("linearGradient"), q1 = i("linearGradient"), S1 = i("linearGradient"), G1 = i("linearGradient"), C1 = i("linearGradient"), M1 = i("linearGradient"), U1 = i("linearGradient"), at = i("linearGradient"), st = i("linearGradient"), ot = i("linearGradient"), $1 = i("linearGradient"), z1 = i("linearGradient"), O1 = i("linearGradient"), E1 = i("linearGradient"), B1 = i("linearGradient"), H1 = i("linearGradient"), P1 = i("linearGradient"), j1 = i("linearGradient"), T1 = i("linearGradient"), D1 = i("linearGradient"), F1 = i("linearGradient"), A1 = i("linearGradient"), L1 = i("linearGradient"), Q1 = i("linearGradient"), I1 = i("linearGradient"), V1 = i("linearGradient"), K1 = i("linearGradient"), N1 = i("linearGradient"), Y1 = i("linearGradient"), W1 = i("linearGradient"), Z1 = i("linearGradient"), X1 = i("linearGradient"), J1 = i("linearGradient"), en = i("linearGradient"), tn = i("linearGradient"), nn = i("linearGradient"), rn = i("linearGradient"), ln = i("linearGradient"), an = i("linearGradient"), sn = i("linearGradient"), on = i("linearGradient"), dn = i("linearGradient"), cn = i("linearGradient"), fn = i("linearGradient"), Ke = i("pattern"), er = i("rect"), kl = i("path"), _l = i("path"), hn = i("linearGradient"), oe = i("g"), Rr = i("path"), ql = i("path"), kr = i("path"), tr = i("path"), Ne = i("rect"), Ye = i("rect"), We = i("rect"), Ze = i("rect"), dt = i("rect"), ct = i("rect"), ft = i("rect"), o0 = i("g"), fe = i("rect"), pn = i("rect"), Sl = i("path"), O2 = i("mask"), E2 = i("path"), B2 = i("g"), d0 = i("foreignObject"), H2 = _("div"), H2.innerHTML = '<canvas width="320" height="528" style="width: 320px; height: 528px"></canvas>', b = i("g"), Gl = i("path"), Cl = i("path"), Ml = i("path"), _r = i("path"), qr = i("path"), nr = i("g"), he = i("rect"), un = i("rect"), Ul = i("path"), c0 = i("g"), pe = i("rect"), mn = i("rect"), $l = i("path"), f0 = i("g"), ue = i("rect"), gn = i("rect"), zl = i("path"), h0 = i("g"), me = i("rect"), vn = i("rect"), Ol = i("path"), p0 = i("g"), ge = i("rect"), xn = i("rect"), El = i("path"), u0 = i("g"), ve = i("rect"), bn = i("rect"), Bl = i("path"), m0 = i("g"), xe = i("rect"), yn = i("rect"), Hl = i("path"), g0 = i("g"), be = i("rect"), wn = i("rect"), Pl = i("path"), v0 = i("g"), ye = i("rect"), Rn = i("rect"), jl = i("path"), x0 = i("g"), we = i("rect"), kn = i("rect"), Tl = i("path"), b0 = i("g"), Re = i("rect"), _n = i("rect"), Dl = i("path"), y0 = i("g"), ke = i("rect"), qn = i("rect"), Fl = i("path"), w0 = i("g"), _e = i("rect"), Sn = i("rect"), Al = i("path"), R0 = i("g"), qe = i("rect"), Gn = i("rect"), Ll = i("path"), k0 = i("g"), Se = i("rect"), Cn = i("rect"), Ql = i("path"), _0 = i("g"), Ge = i("rect"), Mn = i("rect"), Il = i("path"), q0 = i("g"), Ce = i("rect"), Un = i("rect"), Vl = i("path"), P2 = i("path"), j2 = i("path"), T2 = i("path"), $n = i("rect"), zn = i("rect"), On = i("rect"), En = i("path"), Xe = i("rect"), ht = i("path"), pt = i("path"), ut = i("path"), Kl = i("path"), rr = i("g"), Me = i("rect"), Bn = i("rect"), lr = i("g"), Ue = i("rect"), Hn = i("rect"), ir = i("g"), $e = i("rect"), Pn = i("rect"), ar = i("g"), ze = i("rect"), jn = i("rect"), sr = i("g"), Oe = i("rect"), Tn = i("rect"), or = i("g"), Ee = i("rect"), Dn = i("rect"), dr = i("g"), Be = i("rect"), Fn = i("rect"), cr = i("g"), He = i("rect"), An = i("rect"), mt = i("rect"), fr = i("g"), Pe = i("rect"), Ln = i("rect"), hr = i("g"), je = i("rect"), Qn = i("rect"), pr = i("g"), Te = i("rect"), In = i("rect"), ur = i("g"), De = i("rect"), Vn = i("rect"), Sr = i("g"), S0 = i("path"), Gr = i("g"), Kn = i("path"), Fe = i("text"), G0 = i("tspan"), ni = Y("xyz"), ri = B(), Cr = i("g"), C0 = i("path"), Mr = i("g"), M0 = i("path"), Ur = i("g"), U0 = i("path"), $r = i("g"), $0 = i("path"), zr = i("g"), z0 = i("path"), Or = i("g"), O0 = i("path"), Er = i("g"), E0 = i("path"), Br = i("g"), B0 = i("path"), Hr = i("g"), H0 = i("path"), Pr = i("g"), Nn = i("path"), Nl = i("path"), rt = i("path"), jr = i("g"), Yn = i("path"), Tr = i("g"), P0 = i("path"), Dr = i("g"), j0 = i("path"), Fr = i("g"), T0 = i("path"), Ar = i("g"), Wn = i("path"), Lr = i("g"), Zn = i("path"), Qr = i("g"), Xn = i("path"), Ir = i("g"), D0 = i("path"), Vr = i("g"), F0 = i("path"), Kr = i("g"), A0 = i("path"), Nr = i("g"), L0 = i("path"), Yr = i("g"), Q0 = i("path"), Wr = i("g"), I0 = i("path"), V0 = i("g"), Jn = i("path"), K0 = i("g"), e0 = i("path"), te = i("path"), ne = i("path"), Zr = i("path"), Yl = i("path"), Wl = i("path"), gt = i("rect"), Zl = i("path"), Xl = i("path"), Jl = i("path"), vt = i("rect"), e(s, "offset", "0"), e(s, "stop-color", "#3b3b3b"), e(o, "offset", ".1"), e(o, "stop-color", "#282828"), e(d, "offset", ".2"), e(d, "stop-color", "#282828"), e(c, "offset", "1"), e(c, "stop-color", "#272727"), e(a, "id", "x"), e(h, "offset", "0"), e(h, "stop-color", "#99b0df"), e(p, "offset", ".1"), e(p, "stop-color", "#7396de"), e(g, "offset", ".3"), e(g, "stop-color", "#4171d2"), e(w, "offset", ".9"), e(w, "stop-color", "#1f3d79"), e(G, "offset", "1"), e(G, "stop-color", "#173166"), e(f, "id", "l"), e(v, "offset", "0"), e(v, "stop-color", "#2b60cd"), e(S, "offset", ".5"), e(S, "stop-color", "#295fcc"), e(R, "offset", ".8"), e(R, "stop-color", "#3c73e3"), e(O, "offset", "1"), e(O, "stop-color", "#4279e8"), e(k, "id", "m"), e(q, "offset", "0"), e(q, "stop-color", "#ececec"), e(T, "offset", ".1"), e(T, "stop-color", "#ededed"), e(x, "offset", ".3"), e(x, "stop-color", "#ddd"), e(u, "offset", ".9"), e(u, "stop-color", "#b0b0b0"), e(C, "offset", "1"), e(C, "stop-color", "#9c9c9c"), e(U, "id", "v"), e(W, "offset", "0"), e(W, "stop-color", "#e7e7e7"), e(Q, "offset", ".5"), e(Q, "stop-color", "#f8f8f8"), e(Z, "offset", ".8"), e(Z, "stop-color", "#fff"), e(J, "offset", "1"), e(J, "stop-color", "#fbfbfb"), e(M, "id", "w"), e(D, "offset", "0"), e(D, "stop-color", "#cdcdcd"), e(D, "stop-opacity", ".4"), e(le, "offset", "1"), e(le, "stop-color", "#cdcdcd"), e(le, "stop-opacity", "0"), e(et, "id", "u"), e(se, "offset", "0"), e(se, "stop-color", "#d1d1d1"), e(Le, "offset", ".4"), e(Le, "stop-color", "#c2c2c2"), e(N0, "offset", ".7"), e(N0, "stop-color", "#6b6b6b"), e(tt, "offset", "1"), e(tt, "stop-color", "#616161"), e(de, "id", "t"), e(Y0, "offset", "0"), e(Y0, "stop-color", "#a8a8a8"), e(nt, "offset", ".3"), e(nt, "stop-color", "#b2b2b2"), e(W0, "offset", ".8"), e(W0, "stop-color", "#dadada"), e(ce, "offset", "1"), e(ce, "stop-color", "#ccc"), e(Qe, "id", "s"), e(Ve, "offset", "0"), e(Ve, "stop-color", "#252525"), e(r0, "offset", "1"), e(r0, "stop-color", "#363636"), e(Ie, "id", "r"), e(H, "offset", "0"), e(H, "stop-color", "#f7f7f7"), e(X, "offset", "1"), e(X, "stop-color", "#535353"), e(l0, "id", "q"), e(i0, "offset", "0"), e(i0, "stop-color", "#909090"), e(Z0, "offset", "1"), e(Z0, "stop-color", "#2d2d2d"), e(bt, "id", "p"), e(a0, "offset", "0"), e(a0, "stop-color", "#313131"), e(ll, "offset", "1"), e(ll, "stop-color", "#3a3a3a"), e(ll, "stop-opacity", "0"), e(yt, "id", "o"), e(il, "offset", "0"), e(il, "stop-color", "#c6c6c6"), e(il, "stop-opacity", ".4"), e(al, "offset", ".4"), e(al, "stop-color", "#a2a2a2"), e(al, "stop-opacity", ".1"), e(sl, "offset", "1"), e(sl, "stop-color", "#a2a2a2"), e(sl, "stop-opacity", "0"), e(vr, "id", "n"), e(ol, "offset", "0"), e(ol, "stop-color", "#c6c6c6"), e(ol, "stop-opacity", ".4"), e(dl, "offset", ".7"), e(dl, "stop-color", "#a2a2a2"), e(dl, "stop-opacity", ".1"), e(cl, "offset", "1"), e(cl, "stop-color", "#a2a2a2"), e(cl, "stop-opacity", "0"), e(xr, "id", "k"), e(s2, "offset", "0"), e(s2, "stop-color", "#2e2e2e"), e(o2, "offset", ".5"), e(o2, "stop-color", "#2d2d2d"), e(d2, "offset", ".8"), e(d2, "stop-color", "#393939"), e(c2, "offset", "1"), e(c2, "stop-color", "#3d3d3d"), e(X0, "id", "j"), e(f2, "offset", "0"), e(f2, "stop-color", "#464646"), e(h2, "offset", ".1"), e(h2, "stop-color", "#393939"), e(p2, "offset", ".3"), e(p2, "stop-color", "#2c2c2c"), e(u2, "offset", ".9"), e(u2, "stop-color", "#202020"), e(m2, "offset", "1"), e(m2, "stop-color", "#242424"), e(s0, "id", "i"), e(g2, "offset", "0"), e(g2, "stop-color", "#1e7999"), e(hl, "offset", "1"), e(hl, "stop-color", "#1d7998"), e(hl, "stop-opacity", "0"), e(fl, "id", "h"), e(v2, "offset", "0"), e(v2, "stop-color", "#3a3a3a"), e(x2, "offset", ".3"), e(x2, "stop-color", "#414141"), e(b2, "offset", ".6"), e(b2, "stop-color", "#464646"), e(pl, "offset", "1"), e(pl, "stop-color", "#4b4b4b"), e(pl, "stop-opacity", "0"), e(J0, "id", "g"), e(y2, "offset", "0"), e(y2, "stop-color", "#313131"), e(ul, "offset", ".4"), e(ul, "stop-color", "#3a3a3a"), e(ul, "stop-opacity", ".6"), e(ml, "offset", "1"), e(ml, "stop-color", "#3a3a3a"), e(ml, "stop-opacity", "0"), e(br, "id", "f"), e(w2, "offset", "0"), e(w2, "stop-color", "#3a3a3a"), e(gl, "offset", ".4"), e(gl, "stop-color", "#3a3a3a"), e(gl, "stop-opacity", ".6"), e(vl, "offset", "1"), e(vl, "stop-color", "#3a3a3a"), e(vl, "stop-opacity", "0"), e(yr, "id", "e"), e(R2, "offset", "0"), e(R2, "stop-color", "#4e4e4e"), e(bl, "offset", "1"), e(bl, "stop-color", "#4e4e4e"), e(bl, "stop-opacity", "0"), e(xl, "id", "d"), e(k2, "offset", "0"), e(k2, "stop-color", "#555"), e(wl, "offset", "1"), e(wl, "stop-color", "#424242"), e(wl, "stop-opacity", "0"), e(yl, "id", "c"), e(_2, "offset", "0"), e(_2, "stop-color", "#9c9c9c"), e(Rl, "offset", ".8"), e(Rl, "stop-color", "#b0b0b0"), e(Rl, "stop-opacity", ".1"), e(q2, "offset", "1"), e(q2, "stop-color", "#f5f5f5"), e(wr, "id", "b"), e(S2, "offset", "0"), e(S2, "stop-color", "#b6b6b6"), e(G2, "offset", "0"), e(G2, "stop-color", "#fefefe"), e(C2, "offset", ".1"), e(C2, "stop-color", "#e7e7e7"), e(M2, "offset", ".8"), e(M2, "stop-color", "#e8e8e8"), e(U2, "offset", ".9"), e(U2, "stop-color", "#e6e6e6"), e($2, "offset", "1"), e($2, "stop-color", "#e1e1e1"), e(z2, "offset", "1"), e(z2, "stop-color", "#b2b2b2"), e(it, "id", "a"), m(wt, "xlink:href", "#a"), e(wt, "id", "y"), e(wt, "x1", "6.5"), e(wt, "x2", "641.5"), e(wt, "y1", "320.4"), e(wt, "y2", "320.4"), e(wt, "gradientUnits", "userSpaceOnUse"), m(Rt, "xlink:href", "#b"), e(Rt, "id", "z"), e(Rt, "x1", "9.3"), e(Rt, "x2", "634"), e(Rt, "y1", "-300.4"), e(Rt, "y2", "1004.4"), e(Rt, "gradientUnits", "userSpaceOnUse"), m(kt, "xlink:href", "#c"), e(kt, "id", "B"), e(kt, "x1", "570"), e(kt, "x2", "94.5"), e(kt, "y1", "560.4"), e(kt, "y2", "-263.2"), e(kt, "gradientUnits", "userSpaceOnUse"), m(_t, "xlink:href", "#d"), e(_t, "id", "C"), e(_t, "x1", "570"), e(_t, "x2", "498.4"), e(_t, "y1", "560.4"), e(_t, "y2", "293"), e(_t, "gradientUnits", "userSpaceOnUse"), m(qt, "xlink:href", "#e"), e(qt, "id", "J"), e(qt, "x1", "91.3"), e(qt, "x2", "71.6"), e(qt, "y1", "978.6"), e(qt, "y2", "958.9"), e(qt, "gradientUnits", "userSpaceOnUse"), m(St, "xlink:href", "#f"), e(St, "id", "I"), e(St, "x1", "504"), e(St, "x2", "504"), e(St, "y1", "978"), e(St, "y2", "215.2"), e(St, "gradientUnits", "userSpaceOnUse"), m(Gt, "xlink:href", "#g"), e(Gt, "id", "K"), e(Gt, "x1", "544"), e(Gt, "x2", "582"), e(Gt, "y1", "980"), e(Gt, "y2", "942"), e(Gt, "gradientUnits", "userSpaceOnUse"), m(Ct, "xlink:href", "#h"), e(Ct, "id", "L"), e(Ct, "x1", "300"), e(Ct, "x2", "300"), e(Ct, "y1", "44"), e(Ct, "y2", "1124"), e(Ct, "gradientUnits", "userSpaceOnUse"), m(Mt, "xlink:href", "#i"), e(Mt, "id", "M"), e(Mt, "x1", "514.8"), e(Mt, "x2", "583.9"), e(Mt, "y1", "711.8"), e(Mt, "y2", "751.7"), e(Mt, "gradientUnits", "userSpaceOnUse"), m(Ut, "xlink:href", "#j"), e(Ut, "id", "N"), e(Ut, "x1", "549"), e(Ut, "x2", "549"), e(Ut, "y1", "713.4"), e(Ut, "y2", "748.4"), e(Ut, "gradientUnits", "userSpaceOnUse"), m($t, "xlink:href", "#k"), e($t, "id", "O"), e($t, "x1", "515"), e($t, "x2", "536.3"), e($t, "y1", "1125"), e($t, "y2", "1146.3"), e($t, "gradientUnits", "userSpaceOnUse"), m(zt, "xlink:href", "#k"), e(zt, "id", "H"), e(zt, "x1", "515"), e(zt, "x2", "536.3"), e(zt, "y1", "1125"), e(zt, "y2", "1146.3"), e(zt, "gradientUnits", "userSpaceOnUse"), m(Ot, "xlink:href", "#i"), e(Ot, "id", "F"), e(Ot, "x1", "514.8"), e(Ot, "x2", "583.9"), e(Ot, "y1", "711.8"), e(Ot, "y2", "751.7"), e(Ot, "gradientUnits", "userSpaceOnUse"), m(Et, "xlink:href", "#j"), e(Et, "id", "G"), e(Et, "x1", "549"), e(Et, "x2", "549"), e(Et, "y1", "713.4"), e(Et, "y2", "748.4"), e(Et, "gradientUnits", "userSpaceOnUse"), m(Bt, "xlink:href", "#k"), e(Bt, "id", "R"), e(Bt, "x1", "515"), e(Bt, "x2", "536.3"), e(Bt, "y1", "1125"), e(Bt, "y2", "1146.3"), e(Bt, "gradientUnits", "userSpaceOnUse"), m(Ht, "xlink:href", "#i"), e(Ht, "id", "P"), e(Ht, "x1", "514.8"), e(Ht, "x2", "583.9"), e(Ht, "y1", "711.8"), e(Ht, "y2", "751.7"), e(Ht, "gradientUnits", "userSpaceOnUse"), m(Pt, "xlink:href", "#j"), e(Pt, "id", "Q"), e(Pt, "x1", "549"), e(Pt, "x2", "549"), e(Pt, "y1", "713.4"), e(Pt, "y2", "748.4"), e(Pt, "gradientUnits", "userSpaceOnUse"), m(jt, "xlink:href", "#k"), e(jt, "id", "U"), e(jt, "x1", "515"), e(jt, "x2", "536.3"), e(jt, "y1", "1125"), e(jt, "y2", "1146.3"), e(jt, "gradientUnits", "userSpaceOnUse"), m(Tt, "xlink:href", "#i"), e(Tt, "id", "S"), e(Tt, "x1", "514.8"), e(Tt, "x2", "583.9"), e(Tt, "y1", "711.8"), e(Tt, "y2", "751.7"), e(Tt, "gradientUnits", "userSpaceOnUse"), m(Dt, "xlink:href", "#j"), e(Dt, "id", "T"), e(Dt, "x1", "549"), e(Dt, "x2", "549"), e(Dt, "y1", "713.4"), e(Dt, "y2", "748.4"), e(Dt, "gradientUnits", "userSpaceOnUse"), m(Ft, "xlink:href", "#k"), e(Ft, "id", "X"), e(Ft, "x1", "515"), e(Ft, "x2", "536.3"), e(Ft, "y1", "1125"), e(Ft, "y2", "1146.3"), e(Ft, "gradientUnits", "userSpaceOnUse"), m(At, "xlink:href", "#l"), e(At, "id", "V"), e(At, "x1", "514.8"), e(At, "x2", "583.9"), e(At, "y1", "711.8"), e(At, "y2", "751.7"), e(At, "gradientUnits", "userSpaceOnUse"), m(Lt, "xlink:href", "#m"), e(Lt, "id", "W"), e(Lt, "x1", "549"), e(Lt, "x2", "549"), e(Lt, "y1", "713.4"), e(Lt, "y2", "748.4"), e(Lt, "gradientUnits", "userSpaceOnUse"), m(Qt, "xlink:href", "#k"), e(Qt, "id", "aa"), e(Qt, "x1", "515"), e(Qt, "x2", "536.3"), e(Qt, "y1", "1125"), e(Qt, "y2", "1146.3"), e(Qt, "gradientUnits", "userSpaceOnUse"), m(It, "xlink:href", "#i"), e(It, "id", "Y"), e(It, "x1", "514.8"), e(It, "x2", "583.9"), e(It, "y1", "711.8"), e(It, "y2", "751.7"), e(It, "gradientUnits", "userSpaceOnUse"), m(Vt, "xlink:href", "#j"), e(Vt, "id", "Z"), e(Vt, "x1", "549"), e(Vt, "x2", "549"), e(Vt, "y1", "713.4"), e(Vt, "y2", "748.4"), e(Vt, "gradientUnits", "userSpaceOnUse"), m(Kt, "xlink:href", "#k"), e(Kt, "id", "ad"), e(Kt, "x1", "515"), e(Kt, "x2", "536.3"), e(Kt, "y1", "1125"), e(Kt, "y2", "1146.3"), e(Kt, "gradientUnits", "userSpaceOnUse"), m(Nt, "xlink:href", "#i"), e(Nt, "id", "ab"), e(Nt, "x1", "514.8"), e(Nt, "x2", "583.9"), e(Nt, "y1", "711.8"), e(Nt, "y2", "751.7"), e(Nt, "gradientUnits", "userSpaceOnUse"), m(Yt, "xlink:href", "#j"), e(Yt, "id", "ac"), e(Yt, "x1", "549"), e(Yt, "x2", "549"), e(Yt, "y1", "713.4"), e(Yt, "y2", "748.4"), e(Yt, "gradientUnits", "userSpaceOnUse"), m(Wt, "xlink:href", "#k"), e(Wt, "id", "ag"), e(Wt, "x1", "515"), e(Wt, "x2", "536.3"), e(Wt, "y1", "1125"), e(Wt, "y2", "1146.3"), e(Wt, "gradientUnits", "userSpaceOnUse"), m(Zt, "xlink:href", "#i"), e(Zt, "id", "ae"), e(Zt, "x1", "514.8"), e(Zt, "x2", "583.9"), e(Zt, "y1", "711.8"), e(Zt, "y2", "751.7"), e(Zt, "gradientUnits", "userSpaceOnUse"), m(Xt, "xlink:href", "#j"), e(Xt, "id", "af"), e(Xt, "x1", "549"), e(Xt, "x2", "549"), e(Xt, "y1", "713.4"), e(Xt, "y2", "748.4"), e(Xt, "gradientUnits", "userSpaceOnUse"), m(Jt, "xlink:href", "#k"), e(Jt, "id", "aj"), e(Jt, "x1", "515"), e(Jt, "x2", "536.3"), e(Jt, "y1", "1125"), e(Jt, "y2", "1146.3"), e(Jt, "gradientUnits", "userSpaceOnUse"), m(e1, "xlink:href", "#i"), e(e1, "id", "ah"), e(e1, "x1", "514.8"), e(e1, "x2", "583.9"), e(e1, "y1", "711.8"), e(e1, "y2", "751.7"), e(e1, "gradientUnits", "userSpaceOnUse"), m(t1, "xlink:href", "#j"), e(t1, "id", "ai"), e(t1, "x1", "549"), e(t1, "x2", "549"), e(t1, "y1", "713.4"), e(t1, "y2", "748.4"), e(t1, "gradientUnits", "userSpaceOnUse"), m(n1, "xlink:href", "#k"), e(n1, "id", "ay"), e(n1, "x1", "515"), e(n1, "x2", "536.3"), e(n1, "y1", "1125"), e(n1, "y2", "1146.3"), e(n1, "gradientUnits", "userSpaceOnUse"), m(r1, "xlink:href", "#i"), e(r1, "id", "at"), e(r1, "x1", "514.8"), e(r1, "x2", "583.9"), e(r1, "y1", "711.8"), e(r1, "y2", "751.7"), e(r1, "gradientUnits", "userSpaceOnUse"), m(l1, "xlink:href", "#j"), e(l1, "id", "au"), e(l1, "x1", "549"), e(l1, "x2", "549"), e(l1, "y1", "713.4"), e(l1, "y2", "748.4"), e(l1, "gradientUnits", "userSpaceOnUse"), m(i1, "xlink:href", "#k"), e(i1, "id", "av"), e(i1, "x1", "515"), e(i1, "x2", "536.3"), e(i1, "y1", "1125"), e(i1, "y2", "1146.3"), e(i1, "gradientUnits", "userSpaceOnUse"), m(a1, "xlink:href", "#i"), e(a1, "id", "aq"), e(a1, "x1", "514.8"), e(a1, "x2", "583.9"), e(a1, "y1", "711.8"), e(a1, "y2", "751.7"), e(a1, "gradientUnits", "userSpaceOnUse"), m(s1, "xlink:href", "#j"), e(s1, "id", "ar"), e(s1, "x1", "549"), e(s1, "x2", "549"), e(s1, "y1", "713.4"), e(s1, "y2", "748.4"), e(s1, "gradientUnits", "userSpaceOnUse"), m(o1, "xlink:href", "#k"), e(o1, "id", "as"), e(o1, "x1", "515"), e(o1, "x2", "536.3"), e(o1, "y1", "1125"), e(o1, "y2", "1146.3"), e(o1, "gradientUnits", "userSpaceOnUse"), m(d1, "xlink:href", "#k"), e(d1, "id", "ap"), e(d1, "x1", "515"), e(d1, "x2", "536.3"), e(d1, "y1", "1125"), e(d1, "y2", "1146.3"), e(d1, "gradientUnits", "userSpaceOnUse"), m(c1, "xlink:href", "#i"), e(c1, "id", "ak"), e(c1, "x1", "514.8"), e(c1, "x2", "583.9"), e(c1, "y1", "711.8"), e(c1, "y2", "751.7"), e(c1, "gradientUnits", "userSpaceOnUse"), m(f1, "xlink:href", "#j"), e(f1, "id", "al"), e(f1, "x1", "549"), e(f1, "x2", "549"), e(f1, "y1", "713.4"), e(f1, "y2", "748.4"), e(f1, "gradientUnits", "userSpaceOnUse"), m(h1, "xlink:href", "#k"), e(h1, "id", "am"), e(h1, "x1", "515"), e(h1, "x2", "536.3"), e(h1, "y1", "1125"), e(h1, "y2", "1146.3"), e(h1, "gradientUnits", "userSpaceOnUse"), m(p1, "xlink:href", "#i"), e(p1, "id", "an"), e(p1, "x1", "514.8"), e(p1, "x2", "583.9"), e(p1, "y1", "711.8"), e(p1, "y2", "751.7"), e(p1, "gradientUnits", "userSpaceOnUse"), m(u1, "xlink:href", "#j"), e(u1, "id", "ao"), e(u1, "x1", "549"), e(u1, "x2", "549"), e(u1, "y1", "713.4"), e(u1, "y2", "748.4"), e(u1, "gradientUnits", "userSpaceOnUse"), m(m1, "xlink:href", "#i"), e(m1, "id", "aw"), e(m1, "x1", "514.8"), e(m1, "x2", "583.9"), e(m1, "y1", "711.8"), e(m1, "y2", "751.7"), e(m1, "gradientUnits", "userSpaceOnUse"), m(g1, "xlink:href", "#j"), e(g1, "id", "ax"), e(g1, "x1", "549"), e(g1, "x2", "549"), e(g1, "y1", "713.4"), e(g1, "y2", "748.4"), e(g1, "gradientUnits", "userSpaceOnUse"), m(v1, "xlink:href", "#n"), e(v1, "id", "aB"), e(v1, "x1", "520"), e(v1, "x2", "528.5"), e(v1, "y1", "1122"), e(v1, "y2", "1152"), e(v1, "gradientUnits", "userSpaceOnUse"), m(x1, "xlink:href", "#i"), e(x1, "id", "az"), e(x1, "x1", "514.8"), e(x1, "x2", "624"), e(x1, "y1", "711.8"), e(x1, "y2", "743.4"), e(x1, "gradientUnits", "userSpaceOnUse"), m(b1, "xlink:href", "#j"), e(b1, "id", "aA"), e(b1, "x1", "549"), e(b1, "x2", "549"), e(b1, "y1", "713.4"), e(b1, "y2", "748.4"), e(b1, "gradientUnits", "userSpaceOnUse"), m(y1, "xlink:href", "#i"), e(y1, "id", "aC"), e(y1, "x1", "514.8"), e(y1, "x2", "624"), e(y1, "y1", "711.8"), e(y1, "y2", "743.4"), e(y1, "gradientUnits", "userSpaceOnUse"), m(w1, "xlink:href", "#n"), e(w1, "id", "aE"), e(w1, "x1", "520"), e(w1, "x2", "528.5"), e(w1, "y1", "1122"), e(w1, "y2", "1152"), e(w1, "gradientUnits", "userSpaceOnUse"), m(R1, "xlink:href", "#j"), e(R1, "id", "aD"), e(R1, "x1", "549"), e(R1, "x2", "549"), e(R1, "y1", "713.4"), e(R1, "y2", "748.4"), e(R1, "gradientUnits", "userSpaceOnUse"), m(k1, "xlink:href", "#i"), e(k1, "id", "aI"), e(k1, "x1", "514.8"), e(k1, "x2", "624"), e(k1, "y1", "711.8"), e(k1, "y2", "743.4"), e(k1, "gradientUnits", "userSpaceOnUse"), m(_1, "xlink:href", "#n"), e(_1, "id", "aK"), e(_1, "x1", "520"), e(_1, "x2", "528.5"), e(_1, "y1", "1122"), e(_1, "y2", "1152"), e(_1, "gradientUnits", "userSpaceOnUse"), m(q1, "xlink:href", "#i"), e(q1, "id", "aF"), e(q1, "x1", "514.8"), e(q1, "x2", "624"), e(q1, "y1", "711.8"), e(q1, "y2", "743.4"), e(q1, "gradientUnits", "userSpaceOnUse"), m(S1, "xlink:href", "#j"), e(S1, "id", "aG"), e(S1, "x1", "549"), e(S1, "x2", "549"), e(S1, "y1", "713.4"), e(S1, "y2", "748.4"), e(S1, "gradientUnits", "userSpaceOnUse"), m(G1, "xlink:href", "#n"), e(G1, "id", "aH"), e(G1, "x1", "520"), e(G1, "x2", "528.5"), e(G1, "y1", "1122"), e(G1, "y2", "1152"), e(G1, "gradientUnits", "userSpaceOnUse"), m(C1, "xlink:href", "#j"), e(C1, "id", "aJ"), e(C1, "x1", "549"), e(C1, "x2", "549"), e(C1, "y1", "713.4"), e(C1, "y2", "748.4"), e(C1, "gradientUnits", "userSpaceOnUse"), m(M1, "xlink:href", "#c"), e(M1, "id", "D"), e(M1, "x1", "575.8"), e(M1, "x2", "543.8"), e(M1, "y1", "691.7"), e(M1, "y2", "572.4"), e(M1, "gradientUnits", "userSpaceOnUse"), m(U1, "xlink:href", "#d"), e(U1, "id", "E"), e(U1, "x1", "562"), e(U1, "x2", "537.9"), e(U1, "y1", "686.2"), e(U1, "y2", "596.4"), e(U1, "gradientUnits", "userSpaceOnUse"), m(at, "xlink:href", "#o"), e(at, "id", "aL"), e(at, "x1", "504"), e(at, "x2", "504"), e(at, "y1", "978"), e(at, "y2", "876.8"), e(at, "gradientTransform", "translate(0 -285.6)"), e(at, "gradientUnits", "userSpaceOnUse"), m(st, "xlink:href", "#e"), e(st, "id", "aM"), e(st, "x1", "91.3"), e(st, "x2", "71.6"), e(st, "y1", "978.6"), e(st, "y2", "958.9"), e(st, "gradientTransform", "translate(0 -285.6)"), e(st, "gradientUnits", "userSpaceOnUse"), m(ot, "xlink:href", "#g"), e(ot, "id", "aN"), e(ot, "x1", "544"), e(ot, "x2", "575.4"), e(ot, "y1", "980"), e(ot, "y2", "948.6"), e(ot, "gradientTransform", "translate(0 -285.6)"), e(ot, "gradientUnits", "userSpaceOnUse"), m($1, "xlink:href", "#p"), e($1, "id", "aO"), e($1, "x1", "327.1"), e($1, "x2", "327.1"), e($1, "y1", "580.4"), e($1, "y2", "694.4"), e($1, "gradientUnits", "userSpaceOnUse"), m(z1, "xlink:href", "#q"), e(z1, "id", "aP"), e(z1, "x1", "330.1"), e(z1, "x2", "330.1"), e(z1, "y1", "582.4"), e(z1, "y2", "694.4"), e(z1, "gradientUnits", "userSpaceOnUse"), m(O1, "xlink:href", "#r"), e(O1, "id", "aQ"), e(O1, "x1", "264.5"), e(O1, "x2", "350.3"), e(O1, "y1", "600.6"), e(O1, "y2", "686.4"), e(O1, "gradientUnits", "userSpaceOnUse"), m(E1, "xlink:href", "#s"), e(E1, "id", "aS"), e(E1, "x1", "274"), e(E1, "x2", "367.4"), e(E1, "y1", "632.4"), e(E1, "y2", "644.4"), e(E1, "gradientUnits", "userSpaceOnUse"), m(B1, "xlink:href", "#t"), e(B1, "id", "aT"), e(B1, "x1", "311.9"), e(B1, "x2", "313.6"), e(B1, "y1", "632.4"), e(B1, "y2", "644.4"), e(B1, "gradientUnits", "userSpaceOnUse"), m(H1, "xlink:href", "#t"), e(H1, "id", "aV"), e(H1, "x1", "251"), e(H1, "x2", "262.3"), e(H1, "y1", "645.1"), e(H1, "y2", "638.6"), e(H1, "gradientUnits", "userSpaceOnUse"), m(P1, "xlink:href", "#t"), e(P1, "id", "aU"), e(P1, "x1", "-329.7"), e(P1, "x2", "-320.5"), e(P1, "y1", "-677.4"), e(P1, "y2", "-667.2"), e(P1, "gradientUnits", "userSpaceOnUse"), m(j1, "xlink:href", "#t"), e(j1, "id", "aW"), e(j1, "x1", "251.4"), e(j1, "x2", "261.3"), e(j1, "y1", "633.6"), e(j1, "y2", "639.3"), e(j1, "gradientUnits", "userSpaceOnUse"), m(T1, "xlink:href", "#t"), e(T1, "id", "aR"), e(T1, "x1", "325"), e(T1, "x2", "325"), e(T1, "y1", "612.4"), e(T1, "y2", "606.9"), e(T1, "gradientUnits", "userSpaceOnUse"), m(D1, "xlink:href", "#u"), e(D1, "id", "aX"), e(D1, "x1", "328.8"), e(D1, "x2", "328.8"), e(D1, "y1", "1099"), e(D1, "y2", "1108"), e(D1, "gradientUnits", "userSpaceOnUse"), m(F1, "xlink:href", "#v"), e(F1, "id", "aY"), e(F1, "x1", "559.3"), e(F1, "x2", "583.9"), e(F1, "y1", "709.1"), e(F1, "y2", "751.7"), e(F1, "gradientUnits", "userSpaceOnUse"), m(A1, "xlink:href", "#w"), e(A1, "id", "aZ"), e(A1, "x1", "549"), e(A1, "x2", "549"), e(A1, "y1", "713.4"), e(A1, "y2", "748.4"), e(A1, "gradientUnits", "userSpaceOnUse"), m(L1, "xlink:href", "#v"), e(L1, "id", "ba"), e(L1, "x1", "559.3"), e(L1, "x2", "583.9"), e(L1, "y1", "709.1"), e(L1, "y2", "751.7"), e(L1, "gradientUnits", "userSpaceOnUse"), m(Q1, "xlink:href", "#w"), e(Q1, "id", "bb"), e(Q1, "x1", "549"), e(Q1, "x2", "549"), e(Q1, "y1", "713.4"), e(Q1, "y2", "748.4"), e(Q1, "gradientUnits", "userSpaceOnUse"), m(I1, "xlink:href", "#v"), e(I1, "id", "bc"), e(I1, "x1", "559.3"), e(I1, "x2", "583.9"), e(I1, "y1", "709.1"), e(I1, "y2", "751.7"), e(I1, "gradientUnits", "userSpaceOnUse"), m(V1, "xlink:href", "#w"), e(V1, "id", "bd"), e(V1, "x1", "549"), e(V1, "x2", "549"), e(V1, "y1", "713.4"), e(V1, "y2", "748.4"), e(V1, "gradientUnits", "userSpaceOnUse"), m(K1, "xlink:href", "#v"), e(K1, "id", "be"), e(K1, "x1", "559.3"), e(K1, "x2", "583.9"), e(K1, "y1", "709.1"), e(K1, "y2", "751.7"), e(K1, "gradientUnits", "userSpaceOnUse"), m(N1, "xlink:href", "#w"), e(N1, "id", "bf"), e(N1, "x1", "549"), e(N1, "x2", "549"), e(N1, "y1", "713.4"), e(N1, "y2", "748.4"), e(N1, "gradientUnits", "userSpaceOnUse"), m(Y1, "xlink:href", "#v"), e(Y1, "id", "bg"), e(Y1, "x1", "559.3"), e(Y1, "x2", "583.9"), e(Y1, "y1", "709.1"), e(Y1, "y2", "751.7"), e(Y1, "gradientUnits", "userSpaceOnUse"), m(W1, "xlink:href", "#w"), e(W1, "id", "bh"), e(W1, "x1", "549"), e(W1, "x2", "549"), e(W1, "y1", "713.4"), e(W1, "y2", "748.4"), e(W1, "gradientUnits", "userSpaceOnUse"), m(Z1, "xlink:href", "#v"), e(Z1, "id", "bi"), e(Z1, "x1", "559.3"), e(Z1, "x2", "583.9"), e(Z1, "y1", "709.1"), e(Z1, "y2", "751.7"), e(Z1, "gradientUnits", "userSpaceOnUse"), m(X1, "xlink:href", "#w"), e(X1, "id", "bj"), e(X1, "x1", "549"), e(X1, "x2", "549"), e(X1, "y1", "713.4"), e(X1, "y2", "748.4"), e(X1, "gradientUnits", "userSpaceOnUse"), m(J1, "xlink:href", "#v"), e(J1, "id", "bk"), e(J1, "x1", "559.3"), e(J1, "x2", "583.9"), e(J1, "y1", "709.1"), e(J1, "y2", "751.7"), e(J1, "gradientUnits", "userSpaceOnUse"), m(en, "xlink:href", "#w"), e(en, "id", "bl"), e(en, "x1", "549"), e(en, "x2", "549"), e(en, "y1", "713.4"), e(en, "y2", "748.4"), e(en, "gradientUnits", "userSpaceOnUse"), m(tn, "xlink:href", "#v"), e(tn, "id", "bm"), e(tn, "x1", "559.3"), e(tn, "x2", "583.9"), e(tn, "y1", "709.1"), e(tn, "y2", "751.7"), e(tn, "gradientUnits", "userSpaceOnUse"), m(nn, "xlink:href", "#w"), e(nn, "id", "bn"), e(nn, "x1", "549"), e(nn, "x2", "549"), e(nn, "y1", "713.4"), e(nn, "y2", "748.4"), e(nn, "gradientUnits", "userSpaceOnUse"), m(rn, "xlink:href", "#v"), e(rn, "id", "bo"), e(rn, "x1", "559.3"), e(rn, "x2", "583.9"), e(rn, "y1", "709.1"), e(rn, "y2", "751.7"), e(rn, "gradientUnits", "userSpaceOnUse"), m(ln, "xlink:href", "#w"), e(ln, "id", "bp"), e(ln, "x1", "549"), e(ln, "x2", "549"), e(ln, "y1", "713.4"), e(ln, "y2", "748.4"), e(ln, "gradientUnits", "userSpaceOnUse"), m(an, "xlink:href", "#v"), e(an, "id", "bq"), e(an, "x1", "559.3"), e(an, "x2", "583.9"), e(an, "y1", "709.1"), e(an, "y2", "751.7"), e(an, "gradientUnits", "userSpaceOnUse"), m(sn, "xlink:href", "#w"), e(sn, "id", "br"), e(sn, "x1", "549"), e(sn, "x2", "549"), e(sn, "y1", "713.4"), e(sn, "y2", "748.4"), e(sn, "gradientUnits", "userSpaceOnUse"), m(on, "xlink:href", "#v"), e(on, "id", "bs"), e(on, "x1", "559.3"), e(on, "x2", "583.9"), e(on, "y1", "709.1"), e(on, "y2", "751.7"), e(on, "gradientUnits", "userSpaceOnUse"), m(dn, "xlink:href", "#w"), e(dn, "id", "bt"), e(dn, "x1", "549"), e(dn, "x2", "549"), e(dn, "y1", "713.4"), e(dn, "y2", "748.4"), e(dn, "gradientUnits", "userSpaceOnUse"), m(cn, "xlink:href", "#v"), e(cn, "id", "bu"), e(cn, "x1", "559.3"), e(cn, "x2", "583.9"), e(cn, "y1", "709.1"), e(cn, "y2", "751.7"), e(cn, "gradientUnits", "userSpaceOnUse"), m(fn, "xlink:href", "#w"), e(fn, "id", "bv"), e(fn, "x1", "549"), e(fn, "x2", "549"), e(fn, "y1", "713.4"), e(fn, "y2", "748.4"), e(fn, "gradientUnits", "userSpaceOnUse"), e(er, "y", "0"), e(er, "x", "0"), e(er, "height", "18"), e(er, "width", "20"), e(er, "fill", "#272727"), e(kl, "fill", "#222"), e(kl, "fill-rule", "evenodd"), e(kl, "d", "M9.99 0 5 3v6l-5 3v6l10-6V0h-.01zm10 0L15 3v6l5-3V0h-.01z"), e(_l, "fill", "#1c1c1c"), e(_l, "fill-rule", "evenodd"), e(_l, "d", "M0 0v6l5 3V3L.01 0H0zm10 0v12l10 6v-6l-5-3V3l-4.99-3H10z"), e(Ke, "id", "pattern1"), e(Ke, "x", "0"), e(Ke, "y", "0"), e(Ke, "width", "20"), e(Ke, "height", "18"), e(Ke, "patternUnits", "userSpaceOnUse"), e(Ke, "class", "svelte-py5gbp"), m(hn, "xlink:href", "#x"), e(hn, "id", "A"), e(hn, "x1", "295"), e(hn, "x2", "295"), e(hn, "y1", "1004.4"), e(hn, "y2", "-357.6"), e(hn, "gradientUnits", "userSpaceOnUse"), e(Rr, "fill", "url(#y)"), e(Rr, "fill-rule", "evenodd"), e(Rr, "stroke", "#696a69"), e(Rr, "d", "M119 1046.4c-33-.4-94-23-105-42-1-7-7-94-7-162v-1075c0-13 3.5-103 5-130 8-13.9 56-33.8 68-37 12-3.3 25-6 36-6h416c11 0 24 2.7 36 6 12 3.2 60 23.1 68 37 1.5 27 5 117 5 130v1075c0 68-6 155-7 162-11 19-72 41.6-105 42H365z"), e(ql, "fill", "url(#z)"), e(ql, "fill-rule", "evenodd"), e(ql, "d", "M120 1022.4c-60 0-102-25-102-135v-1135c0-75 17-133 117-133h378c100 0 117 58 117 133v1135c0 110-42 135-102 135H365z"), e(kr, "fill", "#269dc5"), e(kr, "fill-rule", "evenodd"), e(kr, "stroke", "#6ac1df"), e(kr, "d", "M120 1015.4c-55 0-96-23-96-128v-1135c0-75 16-128 111-128h378c95 0 111 53 111 128v1135c0 105-41 128-96 128H365z"), e(tr, "id", "pattern-bg"), e(tr, "fill", "url(#pattern1)"), e(tr, "fill-rule", "evenodd"), e(tr, "stroke", "#000"), e(tr, "d", "M120 1007.4c-45.4 0-90-15-90-120v-1127c0-75 15-128 105-128h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H365z"), e(Ne, "width", "516"), e(Ne, "height", "894"), e(Ne, "x", "66"), e(Ne, "y", "-321.6"), e(Ne, "fill", "#0d0d0d"), e(Ne, "stroke", "url(#B)"), e(Ne, "stroke-linecap", "round"), e(Ne, "stroke-linejoin", "round"), e(Ne, "rx", "22"), e(Ne, "ry", "22"), e(Ye, "width", "493"), e(Ye, "height", "871"), e(Ye, "x", "77"), e(Ye, "y", "-310.6"), e(Ye, "fill", "#0d0d0d"), e(Ye, "stroke", "url(#C)"), e(Ye, "stroke-linecap", "round"), e(Ye, "stroke-linejoin", "round"), e(Ye, "rx", "10"), e(Ye, "ry", "10"), e(We, "width", "516"), e(We, "height", "120"), e(We, "x", "66"), e(We, "y", "578.4"), e(We, "fill", "#0d0d0d"), e(We, "stroke", "url(#D)"), e(We, "stroke-linecap", "round"), e(We, "stroke-linejoin", "round"), e(We, "rx", "22"), e(We, "ry", "22"), e(Ze, "width", "493"), e(Ze, "height", "96"), e(Ze, "x", "77"), e(Ze, "y", "590.4"), e(Ze, "fill", "#0d0d0d"), e(Ze, "stroke", "url(#E)"), e(Ze, "stroke-linecap", "round"), e(Ze, "stroke-linejoin", "round"), e(Ze, "rx", "10"), e(Ze, "ry", "10"), e(dt, "width", "116"), e(dt, "height", "36"), e(dt, "x", "86"), e(dt, "y", "644.4"), e(dt, "fill", "#00ec3a"), e(dt, "fill-opacity", ".2"), e(dt, "rx", "7"), e(dt, "ry", "7"), e(ct, "width", "116"), e(ct, "height", "36"), e(ct, "x", "446"), e(ct, "y", "596.4"), e(ct, "fill", "#00ec3a"), e(ct, "fill-opacity", ".2"), e(ct, "rx", "7"), e(ct, "ry", "7"), e(ft, "width", "116"), e(ft, "height", "36"), e(ft, "x", "446"), e(ft, "y", "644.4"), e(ft, "fill", "#00ec3a"), e(ft, "fill-opacity", ".2"), e(ft, "rx", "7"), e(ft, "ry", "7"), e(fe, "width", "76"), e(fe, "height", "44"), e(fe, "x", "511"), e(fe, "y", "709.4"), e(fe, "fill", "url(#F)"), e(fe, "stroke", "var(--btn-border-stroke)"), e(fe, "stroke-linecap", "round"), e(fe, "stroke-linejoin", "round"), e(fe, "stroke-width", "2"), e(fe, "rx", "8"), e(fe, "ry", "8"), e(pn, "width", "68"), e(pn, "height", "35"), e(pn, "x", "515"), e(pn, "y", "713.4"), e(pn, "fill", "url(#G)"), e(pn, "rx", "4"), e(pn, "ry", "4"), e(Sl, "fill", "url(#H)"), e(Sl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Sl, "transform", "translate(0 -411.6)"), e(o0, "transform", "translate(0 54)"), e(o0, "class", "cp-button"), e(o0, "data-cp", "KEYCODE_TIMES"), e(E2, "fill", "#fff"), e(E2, "d", "M84-303.6h480v792H84z"), e(O2, "id", "uid_3418"), e(oe, "transform", "translate(0 411.6)"), e(H2, "class", "cp-wrapper svelte-py5gbp"), e(d0, "x", "0"), e(d0, "y", "0"), e(d0, "width", "480"), e(d0, "height", "792"), e(d0, "overflow", "hidden"), e(B2, "transform", "translate(85 109)"), e(Gl, "fill", "url(#I)"), e(Gl, "d", "M387.7 90a22 22 0 0 0-19 11H560a10 10 0 0 1 10 10v851a10 10 0 0 1-10 10H365.7v12H560a22 22 0 0 0 22-22V112a22 22 0 0 0-22-22H387.7z"), e(Gl, "transform", "translate(0 -411.6)"), e(Cl, "fill", "url(#J)"), e(Cl, "d", "M66 904v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), e(Cl, "transform", "translate(0 -411.6)"), e(Ml, "fill", "url(#K)"), e(Ml, "d", "M570 900v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62h-12z"), e(Ml, "transform", "translate(0 -411.6)"), e(_r, "fill", "url(#L)"), e(_r, "fill-rule", "evenodd"), e(_r, "d", "M136.9 40C42.9 40 27 93 27 168v1135c0 44.7 7.4 74.6 20 94.1 17.3 23 43 29.9 73 29.9h408c30 0 55.7-6.8 73-29.9 12.6-19.5 20-49.4 20-94.1V168c0-75-15.8-128-109.9-128H137zm-1.9 4h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H120c-45.4 0-90-15-90-120V172C30 97 45 44 135 44z"), e(_r, "transform", "translate(0 -411.6)"), e(qr, "fill", "#1f7e9e"), e(qr, "fill-opacity", ".3"), e(qr, "fill-rule", "evenodd"), e(qr, "d", "M-638 1019.4c-54.4 0-95-23-95-128v-1135c0-75 15.8-128 109.9-128H-249c94 0 109.9 53 109.9 128v1135c0 105-40.6 128-95 128h-161.4z"), e(he, "width", "76"), e(he, "height", "44"), e(he, "x", "511"), e(he, "y", "709.4"), e(he, "fill", "url(#M)"), e(he, "stroke", "var(--btn-border-stroke)"), e(he, "stroke-linecap", "round"), e(he, "stroke-linejoin", "round"), e(he, "stroke-width", "2"), e(he, "rx", "8"), e(he, "ry", "8"), e(un, "width", "68"), e(un, "height", "35"), e(un, "x", "515"), e(un, "y", "713.4"), e(un, "fill", "url(#N)"), e(un, "rx", "4"), e(un, "ry", "4"), e(Ul, "fill", "url(#O)"), e(Ul, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Ul, "transform", "translate(0 -411.6)"), e(nr, "class", "cp-button"), e(nr, "data-cp", "KEYCODE_DIVIDE"), e(pe, "width", "76"), e(pe, "height", "44"), e(pe, "x", "511"), e(pe, "y", "709.4"), e(pe, "fill", "url(#P)"), e(pe, "stroke", "var(--btn-border-stroke)"), e(pe, "stroke-linecap", "round"), e(pe, "stroke-linejoin", "round"), e(pe, "stroke-width", "2"), e(pe, "rx", "8"), e(pe, "ry", "8"), e(mn, "width", "68"), e(mn, "height", "35"), e(mn, "x", "515"), e(mn, "y", "713.4"), e(mn, "fill", "url(#Q)"), e(mn, "rx", "4"), e(mn, "ry", "4"), e($l, "fill", "url(#R)"), e($l, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e($l, "transform", "translate(0 -411.6)"), e(c0, "transform", "translate(0 108)"), e(c0, "class", "cp-button"), e(c0, "data-cp", "KEYCODE_MINUS"), e(ue, "width", "76"), e(ue, "height", "44"), e(ue, "x", "511"), e(ue, "y", "709.4"), e(ue, "fill", "url(#S)"), e(ue, "stroke", "var(--btn-border-stroke)"), e(ue, "stroke-linecap", "round"), e(ue, "stroke-linejoin", "round"), e(ue, "stroke-width", "2"), e(ue, "rx", "8"), e(ue, "ry", "8"), e(gn, "width", "68"), e(gn, "height", "35"), e(gn, "x", "515"), e(gn, "y", "713.4"), e(gn, "fill", "url(#T)"), e(gn, "rx", "4"), e(gn, "ry", "4"), e(zl, "fill", "url(#U)"), e(zl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(zl, "transform", "translate(0 -411.6)"), e(f0, "transform", "translate(0 162)"), e(f0, "class", "cp-button"), e(f0, "data-cp", "KEYCODE_PLUS"), e(me, "width", "76"), e(me, "height", "44"), e(me, "x", "511"), e(me, "y", "709.4"), e(me, "fill", "url(#V)"), e(me, "stroke", "var(--btn-border-stroke)"), e(me, "stroke-linecap", "round"), e(me, "stroke-linejoin", "round"), e(me, "stroke-width", "2"), e(me, "rx", "8"), e(me, "ry", "8"), e(vn, "width", "68"), e(vn, "height", "35"), e(vn, "x", "515"), e(vn, "y", "713.4"), e(vn, "fill", "url(#W)"), e(vn, "rx", "4"), e(vn, "ry", "4"), e(Ol, "fill", "url(#X)"), e(Ol, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Ol, "transform", "translate(0 -411.6)"), e(h0, "transform", "translate(0 216)"), e(h0, "class", "cp-button"), e(h0, "data-cp", "KEYCODE_EXE"), e(ge, "width", "76"), e(ge, "height", "44"), e(ge, "x", "511"), e(ge, "y", "709.4"), e(ge, "fill", "url(#Y)"), e(ge, "stroke", "var(--btn-border-stroke)"), e(ge, "stroke-linecap", "round"), e(ge, "stroke-linejoin", "round"), e(ge, "stroke-width", "2"), e(ge, "rx", "8"), e(ge, "ry", "8"), e(xn, "width", "68"), e(xn, "height", "35"), e(xn, "x", "515"), e(xn, "y", "713.4"), e(xn, "fill", "url(#Z)"), e(xn, "rx", "4"), e(xn, "ry", "4"), e(El, "fill", "url(#aa)"), e(El, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(El, "transform", "translate(0 -411.6)"), e(p0, "transform", "translate(-90)"), e(p0, "class", "cp-button"), e(p0, "data-cp", "KEYCODE_POWER"), e(ve, "width", "76"), e(ve, "height", "44"), e(ve, "x", "511"), e(ve, "y", "709.4"), e(ve, "fill", "url(#ab)"), e(ve, "stroke", "var(--btn-border-stroke)"), e(ve, "stroke-linecap", "round"), e(ve, "stroke-linejoin", "round"), e(ve, "stroke-width", "2"), e(ve, "rx", "8"), e(ve, "ry", "8"), e(bn, "width", "68"), e(bn, "height", "35"), e(bn, "x", "515"), e(bn, "y", "713.4"), e(bn, "fill", "url(#ac)"), e(bn, "rx", "4"), e(bn, "ry", "4"), e(Bl, "fill", "url(#ad)"), e(Bl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Bl, "transform", "translate(0 -411.6)"), e(u0, "transform", "translate(-180)"), e(u0, "class", "cp-button"), e(u0, "data-cp", "KEYCODE_Z"), e(xe, "width", "76"), e(xe, "height", "44"), e(xe, "x", "511"), e(xe, "y", "709.4"), e(xe, "fill", "url(#ae)"), e(xe, "stroke", "var(--btn-border-stroke)"), e(xe, "stroke-linecap", "round"), e(xe, "stroke-linejoin", "round"), e(xe, "stroke-width", "2"), e(xe, "rx", "8"), e(xe, "ry", "8"), e(yn, "width", "68"), e(yn, "height", "35"), e(yn, "x", "515"), e(yn, "y", "713.4"), e(yn, "fill", "url(#af)"), e(yn, "rx", "4"), e(yn, "ry", "4"), e(Hl, "fill", "url(#ag)"), e(Hl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Hl, "transform", "translate(0 -411.6)"), e(m0, "transform", "translate(-270)"), e(m0, "class", "cp-button"), e(m0, "data-cp", "KEYCODE_Y"), e(be, "width", "76"), e(be, "height", "44"), e(be, "x", "511"), e(be, "y", "709.4"), e(be, "fill", "url(#ah)"), e(be, "stroke", "var(--btn-border-stroke)"), e(be, "stroke-linecap", "round"), e(be, "stroke-linejoin", "round"), e(be, "stroke-width", "2"), e(be, "rx", "8"), e(be, "ry", "8"), e(wn, "width", "68"), e(wn, "height", "35"), e(wn, "x", "515"), e(wn, "y", "713.4"), e(wn, "fill", "url(#ai)"), e(wn, "rx", "4"), e(wn, "ry", "4"), e(Pl, "fill", "url(#aj)"), e(Pl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Pl, "transform", "translate(0 -411.6)"), e(g0, "transform", "translate(-360)"), e(g0, "class", "cp-button"), e(g0, "data-cp", "KEYCODE_X"), e(ye, "width", "76"), e(ye, "height", "44"), e(ye, "x", "511"), e(ye, "y", "709.4"), e(ye, "fill", "url(#ak)"), e(ye, "stroke", "var(--btn-border-stroke)"), e(ye, "stroke-linecap", "round"), e(ye, "stroke-linejoin", "round"), e(ye, "stroke-width", "2"), e(ye, "rx", "8"), e(ye, "ry", "8"), e(Rn, "width", "68"), e(Rn, "height", "35"), e(Rn, "x", "515"), e(Rn, "y", "713.4"), e(Rn, "fill", "url(#al)"), e(Rn, "rx", "4"), e(Rn, "ry", "4"), e(jl, "fill", "url(#am)"), e(jl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(jl, "transform", "translate(0 -411.6)"), e(v0, "transform", "translate(-450 54)"), e(v0, "class", "cp-button"), e(v0, "data-cp", "KEYCODE_OPEN_PARENTHESIS"), e(we, "width", "76"), e(we, "height", "44"), e(we, "x", "511"), e(we, "y", "709.4"), e(we, "fill", "url(#an)"), e(we, "stroke", "var(--btn-border-stroke)"), e(we, "stroke-linecap", "round"), e(we, "stroke-linejoin", "round"), e(we, "stroke-width", "2"), e(we, "rx", "8"), e(we, "ry", "8"), e(kn, "width", "68"), e(kn, "height", "35"), e(kn, "x", "515"), e(kn, "y", "713.4"), e(kn, "fill", "url(#ao)"), e(kn, "rx", "4"), e(kn, "ry", "4"), e(Tl, "fill", "url(#ap)"), e(Tl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Tl, "transform", "translate(0 -411.6)"), e(x0, "transform", "translate(-450)"), e(x0, "class", "cp-button"), e(x0, "data-cp", "KEYCODE_EQUALS"), e(Re, "width", "76"), e(Re, "height", "44"), e(Re, "x", "511"), e(Re, "y", "709.4"), e(Re, "fill", "url(#aq)"), e(Re, "stroke", "var(--btn-border-stroke)"), e(Re, "stroke-linecap", "round"), e(Re, "stroke-linejoin", "round"), e(Re, "stroke-width", "2"), e(Re, "rx", "8"), e(Re, "ry", "8"), e(_n, "width", "68"), e(_n, "height", "35"), e(_n, "x", "515"), e(_n, "y", "713.4"), e(_n, "fill", "url(#ar)"), e(_n, "rx", "4"), e(_n, "ry", "4"), e(Dl, "fill", "url(#as)"), e(Dl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Dl, "transform", "translate(0 -411.6)"), e(b0, "transform", "translate(-450 108)"), e(b0, "class", "cp-button"), e(b0, "data-cp", "KEYCODE_CLOSE_PARENTHESIS"), e(ke, "width", "76"), e(ke, "height", "44"), e(ke, "x", "511"), e(ke, "y", "709.4"), e(ke, "fill", "url(#at)"), e(ke, "stroke", "var(--btn-border-stroke)"), e(ke, "stroke-linecap", "round"), e(ke, "stroke-linejoin", "round"), e(ke, "stroke-width", "2"), e(ke, "rx", "8"), e(ke, "ry", "8"), e(qn, "width", "68"), e(qn, "height", "35"), e(qn, "x", "515"), e(qn, "y", "713.4"), e(qn, "fill", "url(#au)"), e(qn, "rx", "4"), e(qn, "ry", "4"), e(Fl, "fill", "url(#av)"), e(Fl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Fl, "transform", "translate(0 -411.6)"), e(y0, "transform", "translate(-450 162)"), e(y0, "class", "cp-button"), e(y0, "data-cp", "KEYCODE_COMMA"), e(_e, "width", "76"), e(_e, "height", "44"), e(_e, "x", "511"), e(_e, "y", "709.4"), e(_e, "fill", "url(#aw)"), e(_e, "stroke", "var(--btn-border-stroke)"), e(_e, "stroke-linecap", "round"), e(_e, "stroke-linejoin", "round"), e(_e, "stroke-width", "2"), e(_e, "rx", "8"), e(_e, "ry", "8"), e(Sn, "width", "68"), e(Sn, "height", "35"), e(Sn, "x", "515"), e(Sn, "y", "713.4"), e(Sn, "fill", "url(#ax)"), e(Sn, "rx", "4"), e(Sn, "ry", "4"), e(Al, "fill", "url(#ay)"), e(Al, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), e(Al, "transform", "translate(0 -411.6)"), e(w0, "transform", "translate(-450 216)"), e(w0, "class", "cp-button"), e(w0, "data-cp", "KEYCODE_NEGATIVE"), e(qe, "width", "116"), e(qe, "height", "36"), e(qe, "x", "511"), e(qe, "y", "709.4"), e(qe, "fill", "url(#az)"), e(qe, "stroke", "var(--btn-border-stroke)"), e(qe, "stroke-linecap", "round"), e(qe, "stroke-linejoin", "round"), e(qe, "stroke-width", "2"), e(qe, "rx", "8"), e(qe, "ry", "8"), e(Gn, "width", "107"), e(Gn, "height", "27"), e(Gn, "x", "515"), e(Gn, "y", "713.4"), e(Gn, "fill", "url(#aA)"), e(Gn, "rx", "4"), e(Gn, "ry", "4"), e(Ll, "fill", "url(#aB)"), e(Ll, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), e(Ll, "transform", "translate(0 -411.6)"), e(R0, "transform", "translate(-425 -113)"), e(R0, "class", "cp-button"), e(R0, "data-cp", "KEYCODE_KEYBOARD"), e(Se, "width", "116"), e(Se, "height", "36"), e(Se, "x", "511"), e(Se, "y", "709.4"), e(Se, "fill", "url(#aC)"), e(Se, "stroke", "var(--btn-border-stroke)"), e(Se, "stroke-linecap", "round"), e(Se, "stroke-linejoin", "round"), e(Se, "stroke-width", "2"), e(Se, "rx", "8"), e(Se, "ry", "8"), e(Cn, "width", "107"), e(Cn, "height", "27"), e(Cn, "x", "515"), e(Cn, "y", "713.4"), e(Cn, "fill", "url(#aD)"), e(Cn, "rx", "4"), e(Cn, "ry", "4"), e(Ql, "fill", "url(#aE)"), e(Ql, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), e(Ql, "transform", "translate(0 -411.6)"), e(k0, "transform", "translate(-425 -65)"), e(k0, "class", "cp-button"), e(k0, "data-cp", "KEYCODE_SHIFT"), e(Ge, "width", "116"), e(Ge, "height", "36"), e(Ge, "x", "511"), e(Ge, "y", "709.4"), e(Ge, "fill", "url(#aF)"), e(Ge, "stroke", "var(--btn-border-stroke)"), e(Ge, "stroke-linecap", "round"), e(Ge, "stroke-linejoin", "round"), e(Ge, "stroke-width", "2"), e(Ge, "rx", "8"), e(Ge, "ry", "8"), e(Mn, "width", "107"), e(Mn, "height", "27"), e(Mn, "x", "515"), e(Mn, "y", "713.4"), e(Mn, "fill", "url(#aG)"), e(Mn, "rx", "4"), e(Mn, "ry", "4"), e(Il, "fill", "url(#aH)"), e(Il, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), e(Il, "transform", "translate(0 -411.6)"), e(_0, "transform", "translate(-65 -113)"), e(_0, "class", "cp-button"), e(_0, "data-cp", "KEYCODE_BACKSPACE"), e(Ce, "width", "116"), e(Ce, "height", "36"), e(Ce, "x", "511"), e(Ce, "y", "709.4"), e(Ce, "fill", "url(#aI)"), e(Ce, "stroke", "var(--btn-border-stroke)"), e(Ce, "stroke-linecap", "round"), e(Ce, "stroke-linejoin", "round"), e(Ce, "stroke-width", "2"), e(Ce, "rx", "8"), e(Ce, "ry", "8"), e(Un, "width", "107"), e(Un, "height", "27"), e(Un, "x", "515"), e(Un, "y", "713.4"), e(Un, "fill", "url(#aJ)"), e(Un, "rx", "4"), e(Un, "ry", "4"), e(Vl, "fill", "url(#aK)"), e(Vl, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), e(Vl, "transform", "translate(0 -411.6)"), e(q0, "transform", "translate(-65 -65)"), e(q0, "class", "cp-button"), e(q0, "data-cp", "KEYCODE_CLEAR"), e(P2, "fill", "url(#aL)"), e(P2, "d", "M560 589.4s10 4.4 10 10v77a10 10 0 0 1-10 10H365.7v12H560c13.2 0 22-9.3 22-28v-70c0-12.2-22-22-22-22z"), e(j2, "fill", "url(#aM)"), e(j2, "d", "M66 618.4v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), e(T2, "fill", "url(#aN)"), e(T2, "d", "M570 614.4v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62z"), e($n, "width", "204"), e($n, "height", "116"), e($n, "x", "221"), e($n, "y", "580.4"), e($n, "fill", "url(#aO)"), e($n, "rx", "25"), e($n, "ry", "58"), e(zn, "width", "200"), e(zn, "height", "112"), e(zn, "x", "223"), e(zn, "y", "582.4"), e(zn, "fill", "url(#aP)"), e(zn, "rx", "23"), e(zn, "ry", "55.9"), e(On, "width", "185"), e(On, "height", "98"), e(On, "x", "231"), e(On, "y", "589.4"), e(On, "fill", "url(#aQ)"), e(On, "rx", "16"), e(On, "ry", "47.5"), e(En, "class", "cp-button cp-button-arrow"), e(En, "data-cp", "KEYCODE_UP"), e(En, "fill", "#7f7f7f"), e(En, "stroke", "url(#aR)"), e(En, "stroke-linecap", "round"), e(En, "stroke-linejoin", "round"), e(En, "d", "M330.2 611.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), e(Xe, "width", "104"), e(Xe, "height", "12"), e(Xe, "x", "272"), e(Xe, "y", "632.4"), e(Xe, "fill", "url(#aS)"), e(Xe, "stroke", "url(#aT)"), e(Xe, "stroke-linecap", "round"), e(Xe, "stroke-linejoin", "round"), e(Xe, "rx", "2"), e(Xe, "ry", "2"), e(ht, "class", "cp-button cp-button-arrow"), e(ht, "data-cp", "KEYCODE_DOWN"), e(ht, "fill", "#7f7f7f"), e(ht, "stroke", "url(#aU)"), e(ht, "stroke-linecap", "round"), e(ht, "stroke-linejoin", "round"), e(ht, "d", "M-317.8-665.2c-.4.8-5.3.8-6.2.8-.9 0-5.8 0-6.2-.8-.5-.7 2-5 2.4-5.8.4-.8 3-5 3.8-5 .9 0 3.4 4.2 3.8 5 .5.8 2.9 5 2.4 5.8z"), e(ht, "transform", "scale(-1)"), e(pt, "class", "cp-button cp-button-arrow"), e(pt, "data-cp", "KEYCODE_LEFT"), e(pt, "fill", "#7f7f7f"), e(pt, "stroke", "url(#aV)"), e(pt, "stroke-linecap", "round"), e(pt, "stroke-linejoin", "round"), e(pt, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), e(pt, "transform", "rotate(-90 255.8 641.5)"), e(ut, "class", "cp-button cp-button-arrow"), e(ut, "data-cp", "KEYCODE_RIGHT"), e(ut, "fill", "#7f7f7f"), e(ut, "stroke", "url(#aW)"), e(ut, "stroke-linecap", "round"), e(ut, "stroke-linejoin", "round"), e(ut, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), e(ut, "transform", "matrix(0 -1 -1 0 1033.7 897.4)"), e(Kl, "fill", "url(#aX)"), e(Kl, "d", "m245 1098.7-2.5 6.7c1.1.4 2.3.6 3.5.6h154c2 0 3.8-.6 5.6-1.7l-4-5.6c-.5.2-1 .3-1.6.3H247l-2-.3z"), e(Kl, "transform", "translate(0 -411.6)"), e(Me, "width", "102"), e(Me, "height", "44"), e(Me, "x", "511"), e(Me, "y", "709.4"), e(Me, "fill", "url(#aY)"), e(Me, "stroke", "var(--btn-border-stroke)"), e(Me, "stroke-linecap", "round"), e(Me, "stroke-linejoin", "round"), e(Me, "stroke-width", "2"), e(Me, "rx", "8"), e(Me, "ry", "8"), e(Bn, "width", "94"), e(Bn, "height", "35"), e(Bn, "x", "515"), e(Bn, "y", "713.4"), e(Bn, "fill", "url(#aZ)"), e(Bn, "rx", "4"), e(Bn, "ry", "4"), e(rr, "transform", "translate(-117 216)"), e(rr, "class", "cp-button"), e(rr, "data-cp", "KEYCODE_EXP"), e(Ue, "width", "102"), e(Ue, "height", "44"), e(Ue, "x", "511"), e(Ue, "y", "709.4"), e(Ue, "fill", "url(#ba)"), e(Ue, "stroke", "var(--btn-border-stroke)"), e(Ue, "stroke-linecap", "round"), e(Ue, "stroke-linejoin", "round"), e(Ue, "stroke-width", "2"), e(Ue, "rx", "8"), e(Ue, "ry", "8"), e(Hn, "width", "94"), e(Hn, "height", "35"), e(Hn, "x", "515"), e(Hn, "y", "713.4"), e(Hn, "fill", "url(#bb)"), e(Hn, "rx", "4"), e(Hn, "ry", "4"), e(lr, "transform", "translate(-117 162)"), e(lr, "class", "cp-button"), e(lr, "data-cp", "KEYCODE_3"), e($e, "width", "102"), e($e, "height", "44"), e($e, "x", "511"), e($e, "y", "709.4"), e($e, "fill", "url(#bc)"), e($e, "stroke", "var(--btn-border-stroke)"), e($e, "stroke-linecap", "round"), e($e, "stroke-linejoin", "round"), e($e, "stroke-width", "2"), e($e, "rx", "8"), e($e, "ry", "8"), e(Pn, "width", "94"), e(Pn, "height", "35"), e(Pn, "x", "515"), e(Pn, "y", "713.4"), e(Pn, "fill", "url(#bd)"), e(Pn, "rx", "4"), e(Pn, "ry", "4"), e(ir, "transform", "translate(-117 108)"), e(ir, "class", "cp-button"), e(ir, "data-cp", "KEYCODE_6"), e(ze, "width", "102"), e(ze, "height", "44"), e(ze, "x", "511"), e(ze, "y", "709.4"), e(ze, "fill", "url(#be)"), e(ze, "stroke", "var(--btn-border-stroke)"), e(ze, "stroke-linecap", "round"), e(ze, "stroke-linejoin", "round"), e(ze, "stroke-width", "2"), e(ze, "rx", "8"), e(ze, "ry", "8"), e(jn, "width", "94"), e(jn, "height", "35"), e(jn, "x", "515"), e(jn, "y", "713.4"), e(jn, "fill", "url(#bf)"), e(jn, "rx", "4"), e(jn, "ry", "4"), e(ar, "transform", "translate(-117 54)"), e(ar, "class", "cp-button"), e(ar, "data-cp", "KEYCODE_9"), e(Oe, "width", "102"), e(Oe, "height", "44"), e(Oe, "x", "511"), e(Oe, "y", "709.4"), e(Oe, "fill", "url(#bg)"), e(Oe, "stroke", "var(--btn-border-stroke)"), e(Oe, "stroke-linecap", "round"), e(Oe, "stroke-linejoin", "round"), e(Oe, "stroke-width", "2"), e(Oe, "rx", "8"), e(Oe, "ry", "8"), e(Tn, "width", "94"), e(Tn, "height", "35"), e(Tn, "x", "515"), e(Tn, "y", "713.4"), e(Tn, "fill", "url(#bh)"), e(Tn, "rx", "4"), e(Tn, "ry", "4"), e(sr, "transform", "translate(-238 216)"), e(sr, "class", "cp-button"), e(sr, "data-cp", "KEYCODE_DOT"), e(Ee, "width", "102"), e(Ee, "height", "44"), e(Ee, "x", "511"), e(Ee, "y", "709.4"), e(Ee, "fill", "url(#bi)"), e(Ee, "stroke", "var(--btn-border-stroke)"), e(Ee, "stroke-linecap", "round"), e(Ee, "stroke-linejoin", "round"), e(Ee, "stroke-width", "2"), e(Ee, "rx", "8"), e(Ee, "ry", "8"), e(Dn, "width", "94"), e(Dn, "height", "35"), e(Dn, "x", "515"), e(Dn, "y", "713.4"), e(Dn, "fill", "url(#bj)"), e(Dn, "rx", "4"), e(Dn, "ry", "4"), e(or, "transform", "translate(-238 162)"), e(or, "class", "cp-button"), e(or, "data-cp", "KEYCODE_2"), e(Be, "width", "102"), e(Be, "height", "44"), e(Be, "x", "511"), e(Be, "y", "709.4"), e(Be, "fill", "url(#bk)"), e(Be, "stroke", "var(--btn-border-stroke)"), e(Be, "stroke-linecap", "round"), e(Be, "stroke-linejoin", "round"), e(Be, "stroke-width", "2"), e(Be, "rx", "8"), e(Be, "ry", "8"), e(Fn, "width", "94"), e(Fn, "height", "35"), e(Fn, "x", "515"), e(Fn, "y", "713.4"), e(Fn, "fill", "url(#bl)"), e(Fn, "rx", "4"), e(Fn, "ry", "4"), e(dr, "transform", "translate(-238 108)"), e(dr, "class", "cp-button"), e(dr, "data-cp", "KEYCODE_5"), e(He, "width", "102"), e(He, "height", "44"), e(He, "x", "511"), e(He, "y", "709.4"), e(He, "fill", "url(#bm)"), e(He, "stroke", "var(--btn-border-stroke)"), e(He, "stroke-linecap", "round"), e(He, "stroke-linejoin", "round"), e(He, "stroke-width", "2"), e(He, "rx", "8"), e(He, "ry", "8"), e(An, "width", "94"), e(An, "height", "35"), e(An, "x", "515"), e(An, "y", "713.4"), e(An, "fill", "url(#bn)"), e(An, "rx", "4"), e(An, "ry", "4"), e(cr, "transform", "translate(-238 54)"), e(cr, "class", "cp-button"), e(cr, "data-cp", "KEYCODE_8"), e(mt, "width", "76"), e(mt, "height", "44"), e(mt, "x", "511"), e(mt, "y", "1085.4"), e(mt, "fill", "#15d81e"), e(mt, "fill-opacity", ".2"), e(mt, "rx", "8"), e(mt, "ry", "8"), e(Pe, "width", "102"), e(Pe, "height", "44"), e(Pe, "x", "511"), e(Pe, "y", "709.4"), e(Pe, "fill", "url(#bo)"), e(Pe, "stroke", "var(--btn-border-stroke)"), e(Pe, "stroke-linecap", "round"), e(Pe, "stroke-linejoin", "round"), e(Pe, "stroke-width", "2"), e(Pe, "rx", "8"), e(Pe, "ry", "8"), e(Ln, "width", "94"), e(Ln, "height", "35"), e(Ln, "x", "515"), e(Ln, "y", "713.4"), e(Ln, "fill", "url(#bp)"), e(Ln, "rx", "4"), e(Ln, "ry", "4"), e(fr, "transform", "translate(-359 216)"), e(fr, "class", "cp-button"), e(fr, "data-cp", "KEYCODE_0"), e(je, "width", "102"), e(je, "height", "44"), e(je, "x", "511"), e(je, "y", "709.4"), e(je, "fill", "url(#bq)"), e(je, "stroke", "var(--btn-border-stroke)"), e(je, "stroke-linecap", "round"), e(je, "stroke-linejoin", "round"), e(je, "stroke-width", "2"), e(je, "rx", "8"), e(je, "ry", "8"), e(Qn, "width", "94"), e(Qn, "height", "35"), e(Qn, "x", "515"), e(Qn, "y", "713.4"), e(Qn, "fill", "url(#br)"), e(Qn, "rx", "4"), e(Qn, "ry", "4"), e(hr, "transform", "translate(-359 162)"), e(hr, "class", "cp-button"), e(hr, "data-cp", "KEYCODE_1"), e(Te, "width", "102"), e(Te, "height", "44"), e(Te, "x", "511"), e(Te, "y", "709.4"), e(Te, "fill", "url(#bs)"), e(Te, "stroke", "var(--btn-border-stroke)"), e(Te, "stroke-linecap", "round"), e(Te, "stroke-linejoin", "round"), e(Te, "stroke-width", "2"), e(Te, "rx", "8"), e(Te, "ry", "8"), e(In, "width", "94"), e(In, "height", "35"), e(In, "x", "515"), e(In, "y", "713.4"), e(In, "fill", "url(#bt)"), e(In, "rx", "4"), e(In, "ry", "4"), e(pr, "transform", "translate(-359 108)"), e(pr, "class", "cp-button"), e(pr, "data-cp", "KEYCODE_4"), e(De, "width", "102"), e(De, "height", "44"), e(De, "x", "511"), e(De, "y", "709.4"), e(De, "fill", "url(#bu)"), e(De, "stroke", "var(--btn-border-stroke)"), e(De, "stroke-linecap", "round"), e(De, "stroke-linejoin", "round"), e(De, "stroke-width", "2"), e(De, "rx", "8"), e(De, "ry", "8"), e(Vn, "width", "94"), e(Vn, "height", "35"), e(Vn, "x", "515"), e(Vn, "y", "713.4"), e(Vn, "fill", "url(#bv)"), e(Vn, "rx", "4"), e(Vn, "ry", "4"), e(ur, "transform", "translate(-359 54)"), e(ur, "class", "cp-button"), e(ur, "data-cp", "KEYCODE_7"), e(S0, "fill", "#3d3d3d"), e(S0, "d", "M201.5 795.5h-2.4q-.7 0-.3-.6l7.5-18.7h-8.8q-.6 0-.6-.7v-1.9q0-.6.6-.6h11.8q.7 0 .7.6v2.2q0 .5-.4 1.5l-7.1 17.7q-.2.5-1 .5z"), e(S0, "font-family", "Rajdhani"), e(S0, "font-size", "35"), e(S0, "font-weight", "600"), e(S0, "letter-spacing", "0"), e(Sr, "word-spacing", "0"), e(Sr, "class", "cp-button-label"), E(Sr, "line-height", "125%"), e(Kn, "fill", "#fff"), e(Kn, "d", "M199.3 723.3q-3.8 4-8 8l1.9 4.3 1.1 2.5q.4.8.8 1.2l.7.5 1.1.3-.2 1h-4.9l-2.7-8-1.2 1.2-1.5 1.6-1 1.3-.4.9-.1.8q0 .5.3.8.3.3 1 .4l-.3 1h-5.5l-.4-1q4.3-4.6 8.4-8.5l-1.8-4.3-1-2q-.3-.8-.6-1.1l-.8-.6-1.2-.3.2-1h5l2.5 7.4 1.8-1.8 1.2-1.5q.4-.5.5-1 .2-.4.2-.9 0-1-1.3-1.2l.2-1h5.6l.4 1z"), e(Kn, "font-family", "Cambria"), e(Kn, "font-size", "40"), e(Kn, "font-style", "italic"), e(Kn, "font-weight", "400"), e(Kn, "letter-spacing", "0"), e(Gr, "word-spacing", "0"), e(Gr, "class", "cp-button-label"), E(Gr, "line-height", "125%"), e(G0, "x", "1714.4"), e(G0, "y", "880.6"), e(G0, "font-family", "Lucida Calligraphy"), e(G0, "font-style", "italic"), e(G0, "font-weight", "400"), e(Fe, "xml:space", "preserve"), e(Fe, "x", "1714.4"), e(Fe, "y", "880.6"), e(Fe, "font-family", "Script MT Bold"), e(Fe, "font-size", "40"), e(Fe, "font-weight", "700"), e(Fe, "letter-spacing", "0"), e(Fe, "word-spacing", "0"), E(Fe, "line-height", "125%"), e(C0, "fill", "#3d3d3d"), e(C0, "d", "M322.2 792.6h2.7q1.3 0 2-.6.6-.6.6-2v-1.8q0-2.6-2.6-2.6h-2.7q-2.5 0-2.5 2.6v1.9q0 1.3.6 1.9.6.6 1.9.6zm0-9.8h2.7q2.6 0 2.6-2.6v-1.7q0-1.3-.7-2-.6-.5-1.9-.5h-2.7q-1.3 0-2 .6-.5.6-.5 1.9v1.7q0 2.6 2.5 2.6zm3.2 12.7h-3.7q-2.6 0-4-1.3t-1.4-3.9v-1.9q0-3.2 2.4-4.2-2.4-1-2.4-4.2v-1.8q0-2.5 1.4-3.8 1.4-1.4 4-1.4h3.7q2.6 0 4 1.4 1.5 1.3 1.5 3.8v1.8q0 1.6-.7 2.7-.6 1.1-1.7 1.5 2.4 1 2.4 4.3v1.8q0 2.6-1.5 3.9-1.4 1.3-4 1.3z"), e(C0, "font-family", "Rajdhani"), e(C0, "font-size", "35"), e(C0, "font-weight", "600"), e(C0, "letter-spacing", "0"), e(Cr, "word-spacing", "0"), e(Cr, "class", "cp-button-label"), E(Cr, "line-height", "125%"), e(M0, "fill", "#3d3d3d"), e(M0, "d", "M441.9 784.1h4.9v-5.5q0-2.6-2.6-2.6H442q-2.5 0-2.5 2.6v3q0 2.5 2.5 2.5zm2.8 11.4h-7q-.7 0-.7-.6v-1.8q0-.5.6-.5h6.6q2.6 0 2.6-2.6v-3h-5.4q-2.6 0-4-1.4-1.5-1.4-1.5-4v-3.3q0-2.5 1.4-4 1.5-1.4 4-1.4h3.4q2.6 0 4 1.5 1.5 1.4 1.5 4V790q0 2.6-1.4 4-1.5 1.4-4 1.4z"), e(M0, "font-family", "Rajdhani"), e(M0, "font-size", "35"), e(M0, "font-weight", "600"), e(M0, "letter-spacing", "0"), e(Mr, "word-spacing", "0"), e(Mr, "class", "cp-button-label"), E(Mr, "line-height", "125%"), e(U0, "fill", "#3d3d3d"), e(U0, "d", "M204 842.2V830l-7 12.3h7zm2.6 7.3h-2q-.7 0-.7-.6v-3.6h-9.2q-1 0-1-1v-1.1q0-.8.3-1.4l7.8-13.9.5-.7q.3-.2.8-.2h3q1 0 1 1v14.2h2.6q.6 0 .6.6v1.8q0 .7-.6.7h-2.5v3.6q0 .6-.6.6z"), e(U0, "font-family", "Rajdhani"), e(U0, "font-size", "35"), e(U0, "font-weight", "600"), e(U0, "letter-spacing", "0"), e(Ur, "word-spacing", "0"), e(Ur, "class", "cp-button-label"), E(Ur, "line-height", "125%"), e($0, "fill", "#3d3d3d"), e($0, "d", "M323.9 837.6h-2.2q-.6 0-1.1.3-.4.2-.6.5-.3.8-.9.8h-2.2q-.6 0-.6-.6v-11q0-.6.6-.6h11.9q.6 0 .6.6v2q0 .6-.6.6h-9v6.4q.5-1.7 2.9-1.7h2q2.6 0 3.9 1.3 1.3 1.3 1.3 3.8v4.1q0 2.6-1.4 4-1.5 1.4-4 1.4h-3q-2.6 0-4-1.4t-1.4-4v-1q0-.5.6-.5h2.2q.6 0 .6.6v.9q0 2.5 2.5 2.5h2q2.6 0 2.6-2.5v-3.6q0-1.5-.6-2.2-.6-.7-2.1-.7z"), e($0, "font-family", "Rajdhani"), e($0, "font-size", "35"), e($0, "font-weight", "600"), e($0, "letter-spacing", "0"), e($r, "word-spacing", "0"), e($r, "class", "cp-button-label"), E($r, "line-height", "125%"), e(z0, "fill", "#3d3d3d"), e(z0, "d", "M442 846.6h2.5q2.5 0 2.5-2.6v-2.8q0-2.6-2.5-2.6h-5v5.4q0 2.6 2.6 2.6zm3 3h-3.4q-2.6 0-4-1.5-1.5-1.4-1.5-4v-11.7q0-2.5 1.5-4 1.4-1.4 4-1.4h7q.5 0 .5.6v1.8q0 .6-.6.6h-6.4q-2.5 0-2.5 2.6v3h5.3q2.6 0 4 1.4 1.5 1.4 1.5 4v3.1q0 2.6-1.4 4-1.5 1.4-4 1.4z"), e(z0, "font-family", "Rajdhani"), e(z0, "font-size", "35"), e(z0, "font-weight", "600"), e(z0, "letter-spacing", "0"), e(zr, "word-spacing", "0"), e(zr, "class", "cp-button-label"), E(zr, "line-height", "125%"), e(O0, "fill", "#3d3d3d"), e(O0, "d", "M197.2 886.5v-2q0-.6.5-.9l3.6-2.2q.7-.4 1.2-.4h2q.7 0 .7.6V903q0 .6-.6.6h-2.3q-.6 0-.6-.6v-18.2l-3.8 2.2q-.7.3-.7-.4z"), e(O0, "font-family", "Rajdhani"), e(O0, "font-size", "35"), e(O0, "font-weight", "600"), e(O0, "letter-spacing", "0"), e(Or, "word-spacing", "0"), e(Or, "class", "cp-button-label"), E(Or, "line-height", "125%"), e(E0, "fill", "#3d3d3d"), e(E0, "d", "M316 903v-3.3q0-2.2 2-3.6l6.5-5.4q1.7-1.3 1.7-3.1v-1.2q0-2.5-2.6-2.5h-1.7q-1.4 0-2 .6-.6.6-.6 2v1.2q0 .7-.6.7h-2.2q-.6 0-.6-.7v-1.3q0-2.6 1.4-4 1.5-1.4 4-1.4h2.8q2.6 0 4 1.4t1.4 4v1.4q0 2.7-2.1 4.5l-6.7 5.5q-.8.7-.8 1.6v1h9q.7 0 .7.7v1.8q0 .6-.6.6h-12.3q-.6 0-.6-.6z"), e(E0, "font-family", "Rajdhani"), e(E0, "font-size", "35"), e(E0, "font-weight", "600"), e(E0, "letter-spacing", "0"), e(Er, "word-spacing", "0"), e(Er, "class", "cp-button-label"), E(Er, "line-height", "125%"), e(B0, "fill", "#3d3d3d"), e(B0, "d", "M442 890.8h1.9q2.6 0 2.6-2.5v-1.9q0-2.5-2.6-2.5h-2q-1.4 0-2 .6-.6.6-.6 2v1q0 .6-.6.6h-2.2q-.6 0-.6-.6v-1.1q0-2.6 1.4-4t4-1.4h3q2.7 0 4.1 1.4 1.4 1.4 1.4 4v1.9q0 3-2.8 4 2.8.6 2.8 3.8v2q0 2.6-1.4 4t-4 1.4h-3q-2.7 0-4-1.4-1.5-1.4-1.5-4V897q0-.6.6-.6h2.2q.6 0 .6.6v1.2q0 1.3.6 2 .6.5 2 .5h2q2.6 0 2.6-2.5v-2q0-2.5-2.6-2.5h-2q-.5 0-.5-.6v-1.5q0-.7.6-.7z"), e(B0, "font-family", "Rajdhani"), e(B0, "font-size", "35"), e(B0, "font-weight", "600"), e(B0, "letter-spacing", "0"), e(Br, "word-spacing", "0"), e(Br, "class", "cp-button-label"), E(Br, "line-height", "125%"), e(H0, "fill", "#3d3d3d"), e(H0, "d", "M204.2 954.6h2.5q2.6 0 2.6-2.6v-11.4q0-2.6-2.6-2.6h-2.5q-2.5 0-2.5 2.6V952q0 2.6 2.5 2.6zm3 3h-3.5q-2.6 0-4-1.5-1.4-1.4-1.4-4v-11.7q0-2.5 1.4-4 1.4-1.4 4-1.4h3.5q2.6 0 4 1.5 1.4 1.4 1.4 4V952q0 2.6-1.4 4t-4 1.4z"), e(H0, "font-family", "Rajdhani"), e(H0, "font-size", "35"), e(H0, "font-weight", "600"), e(H0, "letter-spacing", "0"), e(Hr, "word-spacing", "0"), e(Hr, "class", "cp-button-label"), E(Hr, "line-height", "125%"), e(Nn, "fill", "#3d3d3d"), e(Nn, "d", "M387 1061.8h-10q-.5 0-.5-.5V1042q0-.5.5-.5h10q.6 0 .6.5v1.6q0 .6-.5.6h-7.2q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.5.6h-6.1q-.4 0-.4.3v5.6q0 .3.4.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.3-.1q-.1-.2 0-.4l5.2-10-5-9.2v-.3q.1-.2.4-.2h2.2q.6 0 .9.5l3.6 7.3h.1l3.7-7.3q.2-.5.8-.5h2.3q.3 0 .3.2.2.2 0 .4l-5 9.1 5.2 10q.2.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7-4 7.7q-.2.5-.7.5zm17.8 0h-2q-.6 0-.6-.5V1042q0-.5.6-.5h7.5q2.3 0 3.6 1.3 1.2 1.2 1.2 3.6v3.2q0 2.3-1.2 3.6-1.3 1.3-3.6 1.3h-4.6q-.4 0-.4.3v6.4q0 .5-.5.5zm.8-9.9h4.2q2.3 0 2.3-2.3v-3q0-2.3-2.3-2.3h-4.2q-.3 0-.3.3v7q0 .3.3.3z"), e(Nn, "font-family", "Rajdhani"), e(Nn, "font-size", "31.5"), e(Nn, "font-weight", "600"), e(Nn, "letter-spacing", "0"), e(Nn, "transform", "scale(1.1 .9)"), e(Pr, "word-spacing", "0"), e(Pr, "class", "cp-button-label"), E(Pr, "line-height", "125%"), e(Nl, "fill", "#3d3d3d"), e(Nl, "d", "M327 946.4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z"), e(Nl, "class", "cp-button-label"), e(rt, "fill", "#fff"), e(rt, "d", "m273.8 721.7-.3 1.7h.5c.4 0 .6.2.7.2l.3.4.2 1.5 1.4 10.6-1.4 1.8-1.1 1.2-.9.6-.5.3h-1l-.2-.5v-.5h-2l-.8 3.5.4.2 1 .2a5.6 5.6 0 0 0 2.5-.1c.5-.1 1-.4 1.5-.7a9 9 0 0 0 1.6-1.3 109.4 109.4 0 0 0 6.7-8.7l3-4.7 2-4.3v-.2l-.6-1.2h-4.5l-.3 1.7h.6c.4 0 .6.2.7.2v.6c0 1.4-1.4 4.3-4 8l-1-10.5h-4.6z"), e(rt, "font-family", "Script MT Bold"), e(rt, "font-size", "29.8"), e(rt, "font-weight", "700"), e(rt, "letter-spacing", "0"), e(rt, "word-spacing", "0"), e(rt, "class", "cp-button-label"), E(rt, "line-height", "125%"), e(Yn, "fill", "#fff"), e(Yn, "d", "m375.3 734.5-1.1 5.5H360l-.4-1 10.7-12.2 3.3-3.7v-.2H369q-1 0-1.5.2-.5.1-1 .5l-1 1q-.5.6-1.2 1.9h-1.7l1.1-5.1h14l.3 1-14 16h6.3q.6-.2 1.1-.6.5-.3 1-1t1.2-2.3h1.7z"), e(Yn, "font-family", "Cambria"), e(Yn, "font-size", "40"), e(Yn, "font-style", "italic"), e(Yn, "font-weight", "400"), e(Yn, "letter-spacing", "0"), e(jr, "word-spacing", "0"), e(jr, "class", "cp-button-label"), E(jr, "line-height", "125%"), e(P0, "fill", "#fff"), e(P0, "d", "m102 795-2.6 2.5-1-1-1.3-1.3-2.6-2.6q-.6-1-.6-2v-10.8q0-1 .6-2l2.3-2.5 1.1-1 1.5-1.4 2.6 2.5-1.3 1.2-2.2 2.1q-1 1-1 1.2v10.6q0 .3 1.9 2l2.7 2.5z"), e(P0, "font-family", "Blender Pro"), e(P0, "font-size", "35"), e(P0, "font-weight", "700"), e(P0, "letter-spacing", "0"), e(Tr, "word-spacing", "0"), e(Tr, "class", "cp-button-label"), E(Tr, "line-height", "125%"), e(j0, "fill", "#fff"), e(j0, "d", "M102 844.6q0 1.1-.6 2-.6.8-2.6 2.6l-2.4 2.3-2.6-2.6q1-.7 2.7-2.3 1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2.1-2l-1.3-1.3 2.5-2.5 1 1 1.7 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), e(j0, "font-family", "Blender Pro"), e(j0, "font-size", "35"), e(j0, "font-weight", "700"), e(j0, "letter-spacing", "0"), e(Dr, "word-spacing", "0"), e(Dr, "class", "cp-button-label"), E(Dr, "line-height", "125%"), e(T0, "fill", "#fff"), e(T0, "d", "M108 728.7H85.6V723H108v5.6zm0 9H85.6V732H108v5.6z"), e(T0, "font-family", "Blender Pro"), e(T0, "font-size", "60"), e(T0, "font-weight", "700"), e(T0, "letter-spacing", "0"), e(Fr, "word-spacing", "0"), e(Fr, "class", "cp-button-label"), E(Fr, "line-height", "125%"), e(Wn, "fill", "#fff"), e(Wn, "d", "M98 1300.2c-1 0-2 .2-2.6.8a4 4 0 0 0-.9 2.7c0 1 .2 1.9.8 2.5.4.4 1 .7 1.7.8-.3.7-.7 1.3-1.5 1.8l-.2.1v3.1l.6-.2a7.8 7.8 0 0 0 4.2-2.7 8 8 0 0 0 1.4-4.9c0-1.2-.3-2.3-.9-3-.6-.7-1.5-1-2.6-1z"), e(Wn, "font-family", "Britannic Bold"), e(Wn, "font-size", "35"), e(Wn, "font-weight", "400"), e(Wn, "letter-spacing", "0"), e(Wn, "transform", "translate(0 -411.6)"), e(Ar, "word-spacing", "0"), e(Ar, "class", "cp-button-label"), E(Ar, "line-height", "125%"), e(Zn, "fill", "#fff"), e(Zn, "d", "m808.1 955-2.6 2.5-1.1-1-1.3-1.3q-2-1.9-2.5-2.6-.6-1-.6-2v-10.8q0-1 .6-2 .6-.9 2.3-2.5l1-1 1.6-1.4 2.6 2.5-1.4 1.2-2.1 2.1q-1 1-1 1.2v10.6q0 .3 1.8 2l2.7 2.5zm17.4-8h-13.6v-3.3h13.6v3.3zm10.6 3.6q0 1.1-.5 2-.6.8-2.5 2.6l-2.5 2.3-2.5-2.6 2.6-2.3q1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2-2l-1.4-1.3 2.5-2.5 1.1 1 1.6 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), e(Zn, "font-family", "Blender Pro"), e(Zn, "font-size", "35"), e(Zn, "font-weight", "700"), e(Zn, "letter-spacing", "0"), e(Zn, "transform", "translate(-720)"), e(Lr, "word-spacing", "0"), e(Lr, "class", "cp-button-label"), E(Lr, "line-height", "125%"), e(Xn, "fill", "#fff"), e(Xn, "d", "M482.4 1061.8h-10q-.6 0-.6-.5V1042q0-.5.6-.5h10q.5 0 .5.5v1.6q0 .6-.5.6h-7.1q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.4.3h7.1q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.4-.1v-.4l5.3-10-5-9.2v-.3q0-.2.3-.2h2.3q.6 0 .9.5l3.6 7.3h.1l3.6-7.3q.3-.5.8-.5h2.4q.2 0 .3.2.1.2 0 .4l-5 9.1 5.2 10q.1.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7h-.1l-3.9 7.7q-.2.5-.7.5zm25.8 0h-10q-.6 0-.6-.5V1042q0-.5.5-.5h10.1q.5 0 .5.5v1.6q0 .6-.5.6H507q-.3 0-.3.3v5.3q0 .3.3.3h6.1q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.3.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5z"), e(Xn, "font-family", "Rajdhani"), e(Xn, "font-size", "31.5"), e(Xn, "font-weight", "600"), e(Xn, "letter-spacing", "0"), e(Xn, "transform", "scale(1.1 .9)"), e(Qr, "word-spacing", "0"), e(Qr, "class", "cp-button-label"), E(Qr, "line-height", "125%"), e(D0, "fill", "#fff"), e(D0, "d", "M552.6 889.9h8.5q1.2 0 1.2 1.2v2.5q0 1.2-1.2 1.2h-8.5v8.7q0 1.2-1.2 1.2h-2.7q-1.2 0-1.2-1.2v-8.7H539q-1.2 0-1.2-1.2v-2.5q0-1.2 1.2-1.2h8.6v-8.6q0-1.2 1.2-1.2h2.7q1.2 0 1.2 1.2v8.6z"), e(D0, "font-family", "Rajdhani"), e(D0, "font-size", "60"), e(D0, "font-weight", "600"), e(D0, "letter-spacing", "0"), e(Ir, "word-spacing", "0"), e(Ir, "class", "cp-button-label"), E(Ir, "line-height", "125%"), e(F0, "fill", "#fff"), e(F0, "d", "M559.3 840H539q-1 0-1-1v-1.3q0-1 1-1h20.3q1 0 1 1v1.3q0 1-1 1z"), e(F0, "font-family", "Rajdhani"), e(F0, "font-size", "60"), e(F0, "font-weight", "600"), e(F0, "letter-spacing", "0"), e(Vr, "word-spacing", "0"), e(Vr, "class", "cp-button-label"), E(Vr, "line-height", "125%"), e(A0, "fill", "#fff"), e(A0, "d", "m552.6 784 6.3 6.4q.8.7 0 1.6l-2 1.9q-.7.9-1.6 0l-6.3-6.3-6.3 6.4q-.9.8-1.6-.1l-2-2q-.8-.8 0-1.5l6.3-6.4-6.3-6.2q-.8-.9 0-1.7l2-2q.8-.8 1.6 0l6.3 6.3 6.3-6.2q.8-.9 1.6 0l2 2q.7.7 0 1.6l-6.3 6.2z"), e(A0, "font-family", "Rajdhani"), e(A0, "font-size", "60"), e(A0, "font-weight", "600"), e(A0, "letter-spacing", "0"), e(Kr, "word-spacing", "0"), e(Kr, "class", "cp-button-label"), E(Kr, "line-height", "125%"), e(L0, "fill", "#fff"), e(L0, "d", "M547 740.3v-3.2q0-1 1-1 h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1zm11.1-7.9H540q-1.1 0-1.1-1v-2q0-1 1-1h18.2q1 0 1 1v2q0 1-1 1zm-11.1-8.8v-3.1q0-1.1 1-1.1h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1z"), e(L0, "font-family", "Rajdhani"), e(L0, "font-size", "60"), e(L0, "font-weight", "600"), e(L0, "letter-spacing", "0"), e(Nr, "word-spacing", "0"), e(Nr, "class", "cp-button-label"), E(Nr, "line-height", "125%"), e(Q0, "fill", "#fff"), e(Q0, "d", "M450.5 738.4H447q-1.3 0-.7-1.1l7.4-14.2q.5-1 .9-1.2.4-.3 1.3-.3h4.2q.9 0 1.3.3t.9 1.2l7.4 14.2q.6 1-.7 1h-3.4q-1 0-1.4-1l-6.2-12-6.2 12q-.6 1-1.4 1z"), e(Q0, "font-family", "Rajdhani"), e(Q0, "font-size", "60"), e(Q0, "font-weight", "600"), e(Q0, "letter-spacing", "0"), e(Yr, "word-spacing", "0"), e(Yr, "class", "cp-button-label"), E(Yr, "line-height", "125%"), e(I0, "fill", "#fff"), e(I0, "d", "M101.6 619.1h-1.5q-.4 0-.4-.3v-12.2q0-.4.4-.4h1.5q.4 0 .4.4v6.3h.1l.6-1 4.5-5.3q.3-.4.8-.4h1.7q.5 0 .2.4l-4.6 5.3 5.2 6.8q.2.4-.3.4h-1.3q-.7 0-1-.3l-4-5.5-1.9 1.9v3.6q0 .3-.4.3zm19.4 0h-5.2q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.7 0 2.7.8 1 .8 1 2.3v2.5q0 .4-.5.4h-6.3q-.2 0-.2.2v.9q0 1.4 1.7 1.4h4.7q.4 0 .4.4v1q0 .3-.4.3zm-6.3-5.6h4.2q.3 0 .3-.2v-1.2q0-.8-.4-1.1-.4-.4-1.3-.4h-1.3q-1 0-1.3.4-.4.3-.4 1v1.3q0 .2.2.2zm10.7 8.9h-1.2q-.4 0-.4-.4v-1q0-.4.4-.4h.5q1.5 0 2-.5.6-.4 1-1.5h-1q-.4 0-.5-.4l-3.1-9q-.1-.3.3-.3h1.6q.3 0 .4.3l2.6 7.9 2.7-7.9q0-.3.4-.3h1.5q.5 0 .4.3l-3.2 9.7q-.6 1.7-1.5 2.6-1 .9-2.9.9zm12.1-5h3q1.7 0 1.7-1.5v-4q0-1.4-1.7-1.4h-1.3q-2 0-2 1.7v5q0 .2.3.2zm-2.5 1.4v-13.4q0-.4.4-.4h1.5q.4 0 .4.4v4.5q.7-1 2.5-1h1q1.7 0 2.7.7 1 .8 1 2.3v4.1q0 1.5-1 2.3-1 .8-2.7.8h-5.4q-.4 0-.4-.3zm17.7.3h-2.1q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.8 0 2.8.8 1 .8 1 2.3v4q0 1.5-1 2.3-1 .8-2.7.8zm-1.8-1.7h1.5q1.7 0 1.7-1.5v-3.8q0-1.5-1.7-1.5h-1.5q-.9 0-1.3.4-.4.3-.4 1v4q0 .7.4 1 .4.4 1.3.4zm12.5 1.7h-1q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h5.2q.5 0 .5.3v9.6q0 .3-.5.3h-1.4q-.4 0-.4-.3v-.8h-.1q-.6 1.1-2.4 1.1zm2.5-3.4v-5l-.3-.1h-2.8q-1.7 0-1.7 1.5v3.8q0 1.5 1.7 1.5h1.1q2 0 2-1.7zm7.1 3.4h-1.5q-.4 0-.4-.3v-9.6q0-.3.4-.3h1.5q.4 0 .4.3v.8q.3-.5 1-.8.6-.3 1.5-.3h.8q.4 0 .4.3v1q0 .5-.4.4h-1.4q-2 0-2 1.8v6.4q0 .3-.3.3zm10.5 0h-1.2q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3.9-.8 2.6-.8h1.2q1.8 0 2.3 1h.1v-4.5q0-.4.4-.4h1.5q.4 0 .4.4v13.4q0 .3-.4.3h-1.5q-.4 0-.4-.3v-.8q-.6 1.1-2.4 1.1zm2.4-3.4v-3.4q0-1.7-2-1.7h-1.2q-1.6 0-1.6 1.5v3.8q0 1.5 1.6 1.5h1.3q2 0 2-1.7z"), e(I0, "font-family", "Rajdhani"), e(I0, "font-size", "25"), e(I0, "font-weight", "600"), e(I0, "letter-spacing", "0"), e(Wr, "word-spacing", "0"), e(Wr, "class", "cp-button-label"), E(Wr, "line-height", "125%"), e(Jn, "fill", "#42caf7"), e(Jn, "d", "M118.6 667.2v-.6q0-.4.4-.4h1.6q.4 0 .4.4v.4q0 1.1.5 1.6.4.4 1.5.4h1.7q1.1 0 1.6-.5t.5-1.6v-.5q0-.8-.7-1.3-.6-.5-1.5-.6l-2-.4-2-.6q-.8-.3-1.4-1.2-.6-.9-.6-2.3v-1q0-1.9 1-2.9t2.9-1h2.6q1.9 0 2.9 1t1 2.9v.5q0 .4-.4.4H127q-.4 0-.4-.4v-.3q0-1-.5-1.5-.4-.5-1.5-.5H123q-1 0-1.5.5t-.5 1.6v.8q0 1.1 1.6 1.5l1.6.3 1.8.4 1.6.7q.7.4 1.1 1.2.5.9.5 2v1q0 1.9-1 3-1.1 1-3 1h-2.7q-1.8 0-2.9-1-1-1.1-1-3zm15.7 3.9h-1.6q-.4 0-.4-.4V654q0-.4.4-.4h1.6q.4 0 .4.4v5.7h.1q.6-1.3 2.6-1.3h1q1.9 0 2.9 1t1 2.9v8.4q0 .4-.5.4h-1.6q-.4 0-.4-.4v-8.3q0-1.9-1.8-1.9h-1.2q-2 0-2 2.1v8.1q0 .4-.5.4zm11.1-14.8V654q0-.4.4-.4h1.6q.4 0 .4.4v2.3q0 .4-.4.4h-1.6q-.4 0-.4-.4zm0 14.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v12.3h-2q-.4 0-.4-.4zm9.6-12.3h2q.5 0 .5.4v1.3q0 .4-.5.4h-2q-.3 0-.3.3v10q0 .3-.5.3h-1.6q-.4 0-.4-.4v-10q0-.2-.3-.2h-1.3q-.4 0-.4-.4v-1.6l.4-.1h1.3q.3 0 .3-.3v-.7q0-1.8 1-2.8 1-1 2.7-1h1.1q.5 0 .5.4v1.3q0 .4-.5.4h-.7q-.9 0-1.3.4-.3.5-.3 1.4v.6q0 .3.2.3zm4.8 2.1h-1.5v-1.8q0-.4.3-.4h1.2q.3 0 .3-.3v-2q0-.4.4-.4h1.6q.4 0 .4.4v2.2q0 .3.3.3h2.3q.5 0 .5.4v1.3q0 .4-.5.4h-2.3q-.3 0-.3.3v6.4q0 1.8 2 1.8h.9q.4 0 .4.4v1.3q0 .4-.4.4H164q-1.8 0-2.9-1-1-1-1-2.8v-6.5q0-.3-.3-.3z"), e(Jn, "font-family", "Rajdhani"), e(Jn, "font-size", "25"), e(Jn, "font-weight", "600"), e(Jn, "letter-spacing", "0"), E(Jn, "text-align", "center"), e(V0, "text-anchor", "middle"), e(V0, "word-spacing", "0"), e(V0, "class", "cp-button-label"), E(V0, "line-height", "125%"), E(V0, "text-align", "center"), e(e0, "fill", "#fff"), e(e0, "d", "M503.8 671.1H501q-1.8 0-2.9-1-1-1-1-2.8v-8.4q0-1.8 1-2.8 1-1 3-1h2.8q1.8 0 2.9 1 1 1 1 2.8v1.2q0 .5-.5.5h-1.5q-.5 0-.5-.5v-1q0-1.9-1.8-1.9h-2.1q-1.8 0-1.8 1.8v8.2q0 1.8 1.8 1.8h2.1q1.8 0 1.8-1.8V666q0-.5.5-.5h1.5q.5 0 .5.5v1.2q0 1.8-1 2.8-1 1-2.9 1zm8.8 0h-1.5q-.5 0-.5-.4V654q0-.4.5-.4h1.5q.5 0 .5.4v16.7q0 .4-.5.4zm12.8 0H520q-1.9 0-3-1-1-1-1-2.8v-5q0-1.9 1-2.9 1.1-1 3-1h2q1.9 0 2.9 1t1 2.9v3.1q0 .5-.4.5h-6.7q-.3 0-.3.2v1.1q0 1.8 1.8 1.8h5q.5 0 .5.5v1.2q0 .4-.4.4zm-6.6-6.9h4.4q.3 0 .3-.3v-1.6q0-.9-.4-1.3-.5-.5-1.4-.5h-1.4q-1 0-1.4.5-.4.4-.4 1.3v1.6q0 .3.3.3zm14.4 6.9h-1q-1.8 0-2.8-1-1-1-1-2.8v-5q0-1.9 1-2.9t2.9-1h5.6q.4 0 .4.4v12q0 .3-.4.3h-1.6q-.4 0-.4-.4v-.9h-.1q-.6 1.3-2.6 1.3zm2.7-4.2v-6.1q0-.3-.3-.3h-3q-1.8 0-1.8 1.9v4.8q0 1.8 1.8 1.8h1.2q2 0 2-2.1zm7.5 4.2h-1.6q-.4 0-.4-.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v1h.1q.3-.7 1-1 .7-.4 1.6-.4h1q.3 0 .3.4v1.3q0 .5-.4.4H546q-2 0-2 2.3v8q0 .3-.5.3z"), e(e0, "font-family", "Rajdhani"), e(e0, "font-size", "25"), e(e0, "font-weight", "600"), e(e0, "letter-spacing", "0"), E(e0, "text-align", "center"), e(K0, "text-anchor", "middle"), e(K0, "word-spacing", "0"), e(K0, "class", "cp-button-label"), E(K0, "line-height", "125%"), E(K0, "text-align", "center"), e(te, "fill", "#42caf7"), e(te, "d", "M473.6 656.2a1.5 1.5 0 0 0-1 2.6 6.5 6.5 0 1 1-9.2 0 1.5 1.5 0 1 0-2.1-2.2 9.5 9.5 0 1 0 13.4 0 1.5 1.5 0 0 0-1-.4z"), e(te, "color", "#000"), e(te, "font-family", "sans-serif"), e(te, "font-weight", "400"), e(te, "overflow", "visible"), e(te, "class", "cp-button-label"), E(te, "line-height", "normal"), E(te, "text-indent", "0px"), E(te, "text-align", "start"), E(te, "text-decoration-line", "none"), E(te, "text-decoration-style", "solid"), E(te, "text-decoration-color", "rgb(0, 0, 0)"), E(te, "text-transform", "none"), E(te, "white-space", "normal"), E(te, "isolation", "auto"), E(te, "mix-blend-mode", "normal"), e(ne, "fill", "#42caf7"), e(ne, "d", "M468 652.4c-.8 0-1.5.6-1.5 1.5v10c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10c0-.9-.7-1.5-1.5-1.5z"), e(ne, "color", "#000"), e(ne, "font-family", "sans-serif"), e(ne, "font-weight", "400"), e(ne, "overflow", "visible"), e(ne, "class", "cp-button-label"), E(ne, "line-height", "normal"), E(ne, "text-indent", "0px"), E(ne, "text-align", "start"), E(ne, "text-decoration-line", "none"), E(ne, "text-decoration-style", "solid"), E(ne, "text-decoration-color", "rgb(0, 0, 0)"), E(ne, "text-transform", "none"), E(ne, "white-space", "normal"), E(ne, "isolation", "auto"), E(ne, "mix-blend-mode", "normal"), e(Zr, "fill", "#fff"), e(Zr, "fill-rule", "evenodd"), e(Zr, "d", "m500 607.4-12 6.9 12.2 7v-4H520v-6h-20z"), e(Zr, "class", "cp-button-label"), e(Yl, "fill", "#222"), e(Yl, "fill-rule", "evenodd"), e(Yl, "d", "m1210-959.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), e(Wl, "fill", "#1c1c1c"), e(Wl, "fill-rule", "evenodd"), e(Wl, "d", "M1210-959.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), e(gt, "width", "20"), e(gt, "height", "18"), e(gt, "x", "1200"), e(gt, "y", "-941.6"), e(gt, "fill", "#7e7e7e"), e(gt, "fill-opacity", ".2"), e(gt, "rx", "0"), e(gt, "ry", "0"), e(Zl, "fill", "#272727"), e(Zl, "fill-rule", "evenodd"), e(Zl, "d", "m1275-897.6-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3z"), e(Xl, "fill", "#222"), e(Xl, "fill-rule", "evenodd"), e(Xl, "d", "m1275-909.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), e(Jl, "fill", "#1c1c1c"), e(Jl, "fill-rule", "evenodd"), e(Jl, "d", "M1275-909.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), e(vt, "width", "20"), e(vt, "height", "18"), e(vt, "x", "1265"), e(vt, "y", "-891.6"), e(vt, "fill", "#7e7e7e"), e(vt, "fill-opacity", ".2"), e(vt, "rx", "0"), e(vt, "ry", "0"), e(b, "transform", "translate(0 411.6)"), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), e(t, "viewBox", "0 0 648 1464");
    },
    m(K2, $i) {
      z(K2, t, $i), r(t, n), r(n, a), r(a, s), r(a, o), r(a, d), r(a, c), r(n, f), r(f, h), r(f, p), r(f, g), r(f, w), r(f, G), r(n, k), r(k, v), r(k, S), r(k, R), r(k, O), r(n, U), r(U, q), r(U, T), r(U, x), r(U, u), r(U, C), r(n, M), r(M, W), r(M, Q), r(M, Z), r(M, J), r(n, et), r(et, D), r(et, le), r(n, de), r(de, se), r(de, Le), r(de, N0), r(de, tt), r(n, Qe), r(Qe, Y0), r(Qe, nt), r(Qe, W0), r(Qe, ce), r(n, Ie), r(Ie, Ve), r(Ie, r0), r(n, l0), r(l0, H), r(l0, X), r(n, bt), r(bt, i0), r(bt, Z0), r(n, yt), r(yt, a0), r(yt, ll), r(n, vr), r(vr, il), r(vr, al), r(vr, sl), r(n, xr), r(xr, ol), r(xr, dl), r(xr, cl), r(n, X0), r(X0, s2), r(X0, o2), r(X0, d2), r(X0, c2), r(n, s0), r(s0, f2), r(s0, h2), r(s0, p2), r(s0, u2), r(s0, m2), r(n, fl), r(fl, g2), r(fl, hl), r(n, J0), r(J0, v2), r(J0, x2), r(J0, b2), r(J0, pl), r(n, br), r(br, y2), r(br, ul), r(br, ml), r(n, yr), r(yr, w2), r(yr, gl), r(yr, vl), r(n, xl), r(xl, R2), r(xl, bl), r(n, yl), r(yl, k2), r(yl, wl), r(n, wr), r(wr, _2), r(wr, Rl), r(wr, q2), r(n, it), r(it, S2), r(it, G2), r(it, C2), r(it, M2), r(it, U2), r(it, $2), r(it, z2), r(n, wt), r(n, Rt), r(n, kt), r(n, _t), r(n, qt), r(n, St), r(n, Gt), r(n, Ct), r(n, Mt), r(n, Ut), r(n, $t), r(n, zt), r(n, Ot), r(n, Et), r(n, Bt), r(n, Ht), r(n, Pt), r(n, jt), r(n, Tt), r(n, Dt), r(n, Ft), r(n, At), r(n, Lt), r(n, Qt), r(n, It), r(n, Vt), r(n, Kt), r(n, Nt), r(n, Yt), r(n, Wt), r(n, Zt), r(n, Xt), r(n, Jt), r(n, e1), r(n, t1), r(n, n1), r(n, r1), r(n, l1), r(n, i1), r(n, a1), r(n, s1), r(n, o1), r(n, d1), r(n, c1), r(n, f1), r(n, h1), r(n, p1), r(n, u1), r(n, m1), r(n, g1), r(n, v1), r(n, x1), r(n, b1), r(n, y1), r(n, w1), r(n, R1), r(n, k1), r(n, _1), r(n, q1), r(n, S1), r(n, G1), r(n, C1), r(n, M1), r(n, U1), r(n, at), r(n, st), r(n, ot), r(n, $1), r(n, z1), r(n, O1), r(n, E1), r(n, B1), r(n, H1), r(n, P1), r(n, j1), r(n, T1), r(n, D1), r(n, F1), r(n, A1), r(n, L1), r(n, Q1), r(n, I1), r(n, V1), r(n, K1), r(n, N1), r(n, Y1), r(n, W1), r(n, Z1), r(n, X1), r(n, J1), r(n, en), r(n, tn), r(n, nn), r(n, rn), r(n, ln), r(n, an), r(n, sn), r(n, on), r(n, dn), r(n, cn), r(n, fn), r(n, Ke), r(Ke, er), r(Ke, kl), r(Ke, _l), r(n, hn), r(t, oe), r(oe, Rr), r(oe, ql), r(oe, kr), r(oe, tr), r(oe, Ne), r(oe, Ye), r(oe, We), r(oe, Ze), r(oe, dt), r(oe, ct), r(oe, ft), r(oe, o0), r(o0, fe), r(o0, pn), r(o0, Sl), r(oe, O2), r(O2, E2), r(t, B2), r(B2, d0), r(d0, H2), r(t, b), r(b, Gl), r(b, Cl), r(b, Ml), r(b, _r), r(b, qr), r(b, nr), r(nr, he), r(nr, un), r(nr, Ul), r(b, c0), r(c0, pe), r(c0, mn), r(c0, $l), r(b, f0), r(f0, ue), r(f0, gn), r(f0, zl), r(b, h0), r(h0, me), r(h0, vn), r(h0, Ol), r(b, p0), r(p0, ge), r(p0, xn), r(p0, El), r(b, u0), r(u0, ve), r(u0, bn), r(u0, Bl), r(b, m0), r(m0, xe), r(m0, yn), r(m0, Hl), r(b, g0), r(g0, be), r(g0, wn), r(g0, Pl), r(b, v0), r(v0, ye), r(v0, Rn), r(v0, jl), r(b, x0), r(x0, we), r(x0, kn), r(x0, Tl), r(b, b0), r(b0, Re), r(b0, _n), r(b0, Dl), r(b, y0), r(y0, ke), r(y0, qn), r(y0, Fl), r(b, w0), r(w0, _e), r(w0, Sn), r(w0, Al), r(b, R0), r(R0, qe), r(R0, Gn), r(R0, Ll), r(b, k0), r(k0, Se), r(k0, Cn), r(k0, Ql), r(b, _0), r(_0, Ge), r(_0, Mn), r(_0, Il), r(b, q0), r(q0, Ce), r(q0, Un), r(q0, Vl), r(b, P2), r(b, j2), r(b, T2), r(b, $n), r(b, zn), r(b, On), r(b, En), r(b, Xe), r(b, ht), r(b, pt), r(b, ut), r(b, Kl), r(b, rr), r(rr, Me), r(rr, Bn), r(b, lr), r(lr, Ue), r(lr, Hn), r(b, ir), r(ir, $e), r(ir, Pn), r(b, ar), r(ar, ze), r(ar, jn), r(b, sr), r(sr, Oe), r(sr, Tn), r(b, or), r(or, Ee), r(or, Dn), r(b, dr), r(dr, Be), r(dr, Fn), r(b, cr), r(cr, He), r(cr, An), r(b, mt), r(b, fr), r(fr, Pe), r(fr, Ln), r(b, hr), r(hr, je), r(hr, Qn), r(b, pr), r(pr, Te), r(pr, In), r(b, ur), r(ur, De), r(ur, Vn), r(b, Sr), r(Sr, S0), r(b, Gr), r(Gr, Kn), r(b, Fe), r(Fe, G0), r(G0, ni), r(Fe, ri), r(b, Cr), r(Cr, C0), r(b, Mr), r(Mr, M0), r(b, Ur), r(Ur, U0), r(b, $r), r($r, $0), r(b, zr), r(zr, z0), r(b, Or), r(Or, O0), r(b, Er), r(Er, E0), r(b, Br), r(Br, B0), r(b, Hr), r(Hr, H0), r(b, Pr), r(Pr, Nn), r(b, Nl), r(b, rt), r(b, jr), r(jr, Yn), r(b, Tr), r(Tr, P0), r(b, Dr), r(Dr, j0), r(b, Fr), r(Fr, T0), r(b, Ar), r(Ar, Wn), r(b, Lr), r(Lr, Zn), r(b, Qr), r(Qr, Xn), r(b, Ir), r(Ir, D0), r(b, Vr), r(Vr, F0), r(b, Kr), r(Kr, A0), r(b, Nr), r(Nr, L0), r(b, Yr), r(Yr, Q0), r(b, Wr), r(Wr, I0), r(b, V0), r(V0, Jn), r(b, K0), r(K0, e0), r(b, te), r(b, ne), r(b, Zr), r(b, Yl), r(b, Wl), r(b, gt), r(b, Zl), r(b, Xl), r(b, Jl), r(b, vt);
    },
    p: y,
    i: y,
    o: y,
    d(K2) {
      K2 && $(t);
    }
  };
}
class ns extends K {
  constructor(t) {
    super(), V(this, t, null, ts, I, {});
  }
}
const rs = (l) => {
  console.log("emu:main recv:", l.detail.state), Ci.set(window.Module.cwrap("getPC", "number", [])), Mi.set(window.Module.cwrap("readMemory2Quick", "number", ["number"]));
}, ls = (l) => {
  console.error("cpu_crash recv:", l.detail), lt.set("crashed");
  let t = l.detail.name, n = (l.detail.address >>> 0).toString(16).padStart(8, "0"), a = (l.detail.pc >>> 0).toString(16).padStart(8, "0");
  L2.set({
    name: t,
    message: `@ 0x${n} 	
 PC:${a}
`,
    hint: `https://github.com/search?q=repo%3AClasspadDev%2Fhollyhock-3%20${a.substring(0, 6)}&type=code`
  });
}, is = (l) => {
  let t = l.detail.regs.map((s) => s >>> 0);
  const n = l.detail.pc >>> 0, a = l.detail.instr >>> 0;
  console.debug("cpu_dump recv:", l.detail), console.debug(`cpu:dump: INSTR ${a.toString(16).padStart(4, "0")} 	 - PC: 0x${n.toString(16).padStart(8, "0")}`), console.debug(t.map((s) => s.toString(16).toUpperCase())), I2.set({
    instr: a,
    pc: n,
    registers: t
  });
};
function as() {
  document.addEventListener("emu:main", rs), document.addEventListener("cpu:dump", is), document.addEventListener("cpu:crash", ls);
}
function ss(l) {
  let t, n, a, s, o = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], d = {};
  for (let c = 0; c < o.length; c += 1)
    d = N(d, o[c]);
  return {
    c() {
      t = i("svg"), n = i("g"), a = i("path"), s = i("path"), e(a, "stroke-linejoin", "round"), e(a, "d", "m14.5 7l5 5l-5 5"), e(s, "d", "M19.5 12h-10c-1.667 0-5 1-5 5"), e(s, "opacity", "0.5"), e(n, "fill", "none"), e(n, "stroke", "currentColor"), e(n, "stroke-linecap", "round"), e(n, "stroke-width", "1.5"), ae(t, d);
    },
    m(c, f) {
      z(c, t, f), r(t, n), r(n, a), r(n, s);
    },
    p(c, [f]) {
      ae(t, d = n0(o, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: y,
    o: y,
    d(c) {
      c && $(t);
    }
  };
}
function os(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class ds extends K {
  constructor(t) {
    super(), V(this, t, os, ss, I, {});
  }
}
function cs(l) {
  let t, n, a, s, o = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], d = {};
  for (let c = 0; c < o.length; c += 1)
    d = N(d, o[c]);
  return {
    c() {
      t = i("svg"), n = i("g"), a = i("path"), s = i("path"), e(a, "stroke-linejoin", "round"), e(a, "d", "m17 14.5l-5 5l-5-5"), e(s, "d", "M12 19.5v-10c0-1.667-1-5-5-5"), e(s, "opacity", "0.5"), e(n, "fill", "none"), e(n, "stroke", "currentColor"), e(n, "stroke-linecap", "round"), e(n, "stroke-width", "1.5"), ae(t, d);
    },
    m(c, f) {
      z(c, t, f), r(t, n), r(n, a), r(n, s);
    },
    p(c, [f]) {
      ae(t, d = n0(o, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: y,
    o: y,
    d(c) {
      c && $(t);
    }
  };
}
function fs(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class hs extends K {
  constructor(t) {
    super(), V(this, t, fs, cs, I, {});
  }
}
function ps(l) {
  let t, n, a;
  return {
    c() {
      t = i("g"), n = i("path"), a = i("path"), e(n, "d", "m11 8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232"), e(n, "opacity", "0.5"), e(a, "d", "M21.079 10.147c1.228.807 1.228 2.899 0 3.706L13.66 18.73c-1.194.785-2.661-.237-2.661-1.853V7.123c0-1.616 1.467-2.638 2.661-1.853z"), e(t, "fill", "none"), e(t, "stroke", "currentColor"), e(t, "stroke-width", "1.5");
    },
    m(s, o) {
      z(s, t, o), r(t, n), r(t, a);
    },
    d(s) {
      s && $(t);
    }
  };
}
function us(l) {
  let t, n, a;
  return {
    c() {
      t = i("path"), n = i("path"), a = Y(">"), e(t, "fill", "currentColor"), e(t, "fill-rule", "evenodd"), e(t, "d", "M2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232V8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426"), e(t, "clip-rule", "evenodd"), e(t, "opacity", "0.5"), e(n, "fill", "currentColor"), e(n, "d", "M11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706L13.66 5.27C12.467 4.485 11 5.507 11 7.123");
    },
    m(s, o) {
      z(s, t, o), z(s, n, o), z(s, a, o);
    },
    d(s) {
      s && ($(t), $(n), $(a));
    }
  };
}
function ms(l) {
  let t;
  function n(o, d) {
    return (
      /*on*/
      o[0] ? us : ps
    );
  }
  let a = n(l), s = a(l);
  return {
    c() {
      t = i("svg"), s.c(), e(t, "xmlns", "http://www.w3.org/2000/svg"), e(t, "width", "1em"), e(t, "height", "1em"), e(t, "viewBox", "0 0 24 24");
    },
    m(o, d) {
      z(o, t, d), s.m(t, null);
    },
    p(o, [d]) {
      a !== (a = n(o)) && (s.d(1), s = a(o), s && (s.c(), s.m(t, null)));
    },
    i: y,
    o: y,
    d(o) {
      o && $(t), s.d();
    }
  };
}
function gs(l, t, n) {
  let { on: a = !1 } = t;
  return l.$$set = (s) => {
    "on" in s && n(0, a = s.on);
  }, [a];
}
class vs extends K {
  constructor(t) {
    super(), V(this, t, gs, ms, I, { on: 0 });
  }
}
function xs(l) {
  let t, n, a, s, o = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], d = {};
  for (let c = 0; c < o.length; c += 1)
    d = N(d, o[c]);
  return {
    c() {
      t = i("svg"), n = i("g"), a = i("path"), s = i("path"), e(a, "stroke-linecap", "round"), e(a, "d", "m18.5 5.5l-13 13"), e(a, "opacity", "0.5"), e(s, "d", "M22 10.849v2.302c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848Z"), e(n, "fill", "none"), e(n, "stroke", "currentColor"), e(n, "stroke-width", "1.5"), ae(t, d);
    },
    m(c, f) {
      z(c, t, f), r(t, n), r(n, a), r(n, s);
    },
    p(c, [f]) {
      ae(t, d = n0(o, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        f & /*$$props*/
        1 && /*$$props*/
        c[0]
      ]));
    },
    i: y,
    o: y,
    d(c) {
      c && $(t);
    }
  };
}
function bs(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class ys extends K {
  constructor(t) {
    super(), V(this, t, bs, xs, I, {});
  }
}
function Ui(l, t) {
  return `${l}`.replace(/\{(\w+):(\w+)\}/g, (n, a, s) => {
    const o = t[a];
    if (o === void 0)
      throw new Error(`Key '${a}' not found in provided values.`);
    switch (s) {
      case "d":
        return o.toString();
      case "02x":
        return o.toString(16).padStart(2, "0");
      case "04x":
        return o.toString(16).padStart(4, "0");
      case "08x":
        return o.toString(16).padStart(8, "0");
      default:
        throw new Error(`Unsupported format specifier '${s}'`);
    }
  });
}
const ws = [
  // (id, name:str, mask:int, code:int, args: dict{name:str, mask:int}
  [
    0,
    "mov r{m:d}, r{n:d}",
    61455,
    24579,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    1,
    "mov 0x{i:04x}, r{n:d}",
    61440,
    57344,
    {
      n: 3840,
      // n
      i: 255
      // i
    }
  ],
  [
    4,
    "mova @(0x{d:02x}, PC), R0",
    65280,
    50944,
    {
      d: 255
      // d
    }
  ],
  [
    5,
    "mov.w @(0x{d:02x}, PC), r{n:d}",
    61440,
    36864,
    {
      n: 3840,
      // n
      d: 255
      // d
    }
  ],
  [
    6,
    "mov.l @(0x{d:02x}, PC), r{n:d}",
    61440,
    53248,
    {
      n: 3840,
      // n
      d: 255
      // d
    }
  ],
  [
    7,
    "mov.b @r{m:d}, r{n:d}",
    61455,
    24576,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    8,
    "mov.w @r{m:d}, r{n:d}",
    61455,
    24577,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    9,
    "mov.l @r{m:d}, r{n:d}",
    61455,
    24578,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    10,
    "mov.b r{m:d}, @r{n:d}",
    61455,
    8192,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    11,
    "mov.w r{m:d}, @r{n:d}",
    61455,
    8193,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    12,
    "mov.l r{m:d}, @r{n:d}",
    61455,
    8194,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    13,
    "mov.b @r{m:d}+, r{n:d}",
    61455,
    24580,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    14,
    "mov.w @r{m:d}+, r{n:d}",
    61455,
    24581,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    15,
    "mov.l @r{m:d}+, r{n:d}",
    61455,
    24582,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    16,
    "mov.b r{m:d}, @-r{n:d}",
    61455,
    8196,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    17,
    "mov.w r{m:d}, @-r{n:d}",
    61455,
    8197,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    18,
    "mov.l r{m:d}, @-r{n:d}",
    61455,
    8198,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    25,
    "mov.b @(0x{d:02x}, r{m:d}), R0",
    65280,
    33792,
    {
      m: 240,
      // m
      d: 15
      // d
    }
  ],
  [
    28,
    "mov.w @(0x{d:02x}, r{m:d}), R0",
    65280,
    34048,
    {
      m: 240,
      // m
      d: 15
      // d
    }
  ],
  [
    31,
    "mov.l @(0x{d:02x}, r{m:d}), r{n:d}",
    61440,
    20480,
    {
      n: 3840,
      // n
      m: 240,
      // m
      d: 15
      // d
    }
  ],
  [
    33,
    "mov.b R0, @(0x{d:02x}, r{n:d})",
    65280,
    32768,
    {
      n: 240,
      // n
      d: 15
      // d
    }
  ],
  [
    35,
    "mov.w R0, @(0x{d:02x}, r{n:d})",
    65280,
    33024,
    {
      n: 240,
      // n
      d: 15
      // d
    }
  ],
  [
    37,
    "mov.l r{m:d}, @(0x{d:02x}, r{n:d})",
    61440,
    4096,
    {
      n: 3840,
      // n
      m: 240,
      // m
      d: 15
      // d
    }
  ],
  [
    39,
    "mov.b @(R0, r{m:d}), r{n:d}",
    61455,
    12,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    40,
    "mov.w @(R0, r{m:d}), r{n:d}",
    61455,
    13,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    41,
    "mov.l @(R0, r{m:d}), r{n:d}",
    61455,
    14,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    42,
    "mov.b r{m:d}, @(R0, r{n:d})",
    61455,
    4,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    43,
    "mov.w r{m:d}, @(R0, r{n:d})",
    61455,
    5,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    44,
    "mov.l r{m:d}, @(R0, r{n:d})",
    61455,
    6,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    45,
    "mov.b @(0x{d:02x}, GBR), R0",
    65280,
    50176,
    {
      d: 255
      // d
    }
  ],
  [
    46,
    "mov.w @(0x{d:02x}, GBR), R0",
    65280,
    50432,
    {
      d: 255
      // d
    }
  ],
  [
    47,
    "mov.l @(0x{d:02x}, GBR), R0",
    65280,
    50688,
    {
      d: 255
      // d
    }
  ],
  [
    48,
    "mov.b R0, @(0x{d:02x}, GBR)",
    65280,
    49152,
    {
      d: 255
      // d
    }
  ],
  [
    49,
    "mov.w R0, @(0x{d:02x}, GBR)",
    65280,
    49408,
    {
      d: 255
      // d
    }
  ],
  [
    50,
    "mov.l R0, @(0x{d:02x}, GBR)",
    65280,
    49664,
    {
      d: 255
      // d
    }
  ],
  [
    60,
    "movt r{n:d}",
    61695,
    41,
    {
      n: 3840
      // n
    }
  ],
  [
    62,
    "swap.b r{m:d}, r{n:d}",
    61455,
    24584,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    63,
    "swap.w r{m:d}, r{n:d}",
    61455,
    24585,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    64,
    "xtrct r{m:d}, r{n:d}",
    61455,
    8205,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    79,
    "add r{m:d}, r{n:d}",
    61455,
    12300,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    80,
    "add 0x{i:04x}, r{n:d}",
    61440,
    28672,
    {
      n: 3840,
      // n
      i: 255
      // i
    }
  ],
  [
    81,
    "addc r{m:d}, r{n:d}",
    61455,
    12302,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    82,
    "addv r{m:d}, r{n:d}",
    61455,
    12303,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    83,
    "cmp/eq 0x{i:04x}, R0",
    65280,
    34816,
    {
      i: 255
      // i
    }
  ],
  [
    84,
    "cmp/eq r{m:d}, r{n:d}",
    61455,
    12288,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    85,
    "cmp/hs r{m:d}, r{n:d}",
    61455,
    12290,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    86,
    "cmp/ge r{m:d}, r{n:d}",
    61455,
    12291,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    87,
    "cmp/hi r{m:d}, r{n:d}",
    61455,
    12294,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    88,
    "cmp/gt r{m:d}, r{n:d}",
    61455,
    12295,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    89,
    "cmp/pl r{n:d}",
    61695,
    16405,
    {
      n: 3840
      // n
    }
  ],
  [
    90,
    "cmp/pz r{n:d}",
    61695,
    16401,
    {
      n: 3840
      // n
    }
  ],
  [
    91,
    "cmp/str r{m:d}, r{n:d}",
    61455,
    8204,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    96,
    "div0s r{m:d}, r{n:d}",
    61455,
    8199,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    97,
    "div0u",
    65535,
    25,
    {}
  ],
  [
    98,
    "div1 r{m:d}, r{n:d}",
    61455,
    12292,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    101,
    "dmuls.l r{m:d}, r{n:d}",
    61455,
    12301,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    102,
    "dmulu.l r{m:d}, r{n:d}",
    61455,
    12293,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    103,
    "dt r{n:d}",
    61695,
    16400,
    {
      n: 3840
      // n
    }
  ],
  [
    104,
    "exts.b r{m:d}, r{n:d}",
    61455,
    24590,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    105,
    "exts.w r{m:d}, r{n:d}",
    61455,
    24591,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    106,
    "extu.b r{m:d}, r{n:d}",
    61455,
    24588,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    107,
    "extu.w r{m:d}, r{n:d}",
    61455,
    24589,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    108,
    "mac.l @r{m:d}+, @r{n:d}+",
    61455,
    15,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    109,
    "mac.w @r{m:d}+, @r{n:d}+",
    61455,
    16399,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    110,
    "mul.l r{m:d}, r{n:d}",
    61455,
    7,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    112,
    "muls.w r{m:d}, r{n:d}",
    61455,
    8207,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    113,
    "mulu.w r{m:d}, r{n:d}",
    61455,
    8206,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    114,
    "neg r{m:d}, r{n:d}",
    61455,
    24587,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    115,
    "negc r{m:d}, r{n:d}",
    61455,
    24586,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    116,
    "sub r{m:d}, r{n:d}",
    61455,
    12296,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    117,
    "subc r{m:d}, r{n:d}",
    61455,
    12298,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    118,
    "subv r{m:d}, r{n:d}",
    61455,
    12299,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    119,
    "and r{m:d}, r{n:d}",
    61455,
    8201,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    120,
    "and 0x{i:04x}, R0",
    65280,
    51456,
    {
      i: 255
      // i
    }
  ],
  [
    121,
    "and.b 0x{i:04x}, @(R0, GBR)",
    65280,
    52480,
    {
      i: 255
      // i
    }
  ],
  [
    122,
    "not r{m:d}, r{n:d}",
    61455,
    24583,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    123,
    "or r{m:d}, r{n:d}",
    61455,
    8203,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    124,
    "or 0x{i:04x}, R0",
    65280,
    51968,
    {
      i: 255
      // i
    }
  ],
  [
    125,
    "or.b 0x{i:04x}, @(R0, GBR)",
    65280,
    52992,
    {
      i: 255
      // i
    }
  ],
  [
    126,
    "tas.b @r{n:d}",
    61695,
    16411,
    {
      n: 3840
      // n
    }
  ],
  [
    127,
    "tst r{m:d}, r{n:d}",
    61455,
    8200,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    128,
    "tst 0x{i:04x}, R0",
    65280,
    51200,
    {
      i: 255
      // i
    }
  ],
  [
    129,
    "tst.b 0x{i:04x}, @(R0, GBR)",
    65280,
    52224,
    {
      i: 255
      // i
    }
  ],
  [
    130,
    "xor r{m:d}, r{n:d}",
    61455,
    8202,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    131,
    "xor 0x{i:04x}, R0",
    65280,
    51712,
    {
      i: 255
      // i
    }
  ],
  [
    132,
    "xor.b 0x{i:04x}, @(R0, GBR)",
    65280,
    52736,
    {
      i: 255
      // i
    }
  ],
  [
    133,
    "rotcl r{n:d}",
    61695,
    16420,
    {
      n: 3840
      // n
    }
  ],
  [
    134,
    "rotcr r{n:d}",
    61695,
    16421,
    {
      n: 3840
      // n
    }
  ],
  [
    135,
    "rotl r{n:d}",
    61695,
    16388,
    {
      n: 3840
      // n
    }
  ],
  [
    136,
    "rotr r{n:d}",
    61695,
    16389,
    {
      n: 3840
      // n
    }
  ],
  [
    137,
    "shad r{m:d}, r{n:d}",
    61455,
    16396,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    138,
    "shal r{n:d}",
    61695,
    16416,
    {
      n: 3840
      // n
    }
  ],
  [
    139,
    "shar r{n:d}",
    61695,
    16417,
    {
      n: 3840
      // n
    }
  ],
  [
    140,
    "shld r{m:d}, r{n:d}",
    61455,
    16397,
    {
      n: 3840,
      // n
      m: 240
      // m
    }
  ],
  [
    141,
    "shll r{n:d}",
    61695,
    16384,
    {
      n: 3840
      // n
    }
  ],
  [
    142,
    "shll2 r{n:d}",
    61695,
    16392,
    {
      n: 3840
      // n
    }
  ],
  [
    143,
    "shll8 r{n:d}",
    61695,
    16408,
    {
      n: 3840
      // n
    }
  ],
  [
    144,
    "shll16 r{n:d}",
    61695,
    16424,
    {
      n: 3840
      // n
    }
  ],
  [
    145,
    "shlr r{n:d}",
    61695,
    16385,
    {
      n: 3840
      // n
    }
  ],
  [
    146,
    "shlr2 r{n:d}",
    61695,
    16393,
    {
      n: 3840
      // n
    }
  ],
  [
    147,
    "shlr8 r{n:d}",
    61695,
    16409,
    {
      n: 3840
      // n
    }
  ],
  [
    148,
    "shlr16 r{n:d}",
    61695,
    16425,
    {
      n: 3840
      // n
    }
  ],
  [
    149,
    "bf 0x{d:04x}",
    65280,
    35584,
    {
      d: 255
      // d
    }
  ],
  [
    150,
    "bf.s 0x{d:04x}",
    65280,
    36608,
    {
      d: 255
      // d
    }
  ],
  [
    151,
    "bt 0x{d:04x}",
    65280,
    35072,
    {
      d: 255
      // d
    }
  ],
  [
    152,
    "bt.s 0x{d:04x}",
    65280,
    36096,
    {
      d: 255
      // d
    }
  ],
  [
    153,
    "bra 0x{d:04x}",
    61440,
    40960,
    {
      d: 4095
      // d
    }
  ],
  [
    154,
    "braf r{m:d}",
    61695,
    35,
    {
      m: 3840
      // m
    }
  ],
  [
    155,
    "bsr 0x{d:04x}",
    61440,
    45056,
    {
      d: 4095
      // d
    }
  ],
  [
    156,
    "bsrf r{m:d}",
    61695,
    3,
    {
      m: 3840
      // m
    }
  ],
  [
    157,
    "jmp @r{m:d}",
    61695,
    16427,
    {
      m: 3840
      // m
    }
  ],
  [
    158,
    "jsr @r{m:d}",
    61695,
    16395,
    {
      m: 3840
      // m
    }
  ],
  [
    161,
    "rts",
    65535,
    11,
    {}
  ],
  [
    164,
    "clrmac",
    65535,
    40,
    {}
  ],
  [
    165,
    "clrs",
    65535,
    72,
    {}
  ],
  [
    166,
    "clrt",
    65535,
    8,
    {}
  ],
  [
    169,
    "ldc r{m:d}, SR",
    61695,
    16398,
    {
      m: 3840
      // m
    }
  ],
  [
    170,
    "ldc.l @r{m:d}+, SR",
    61695,
    16391,
    {
      m: 3840
      // m
    }
  ],
  [
    172,
    "ldc r{m:d}, GBR",
    61695,
    16414,
    {
      m: 3840
      // m
    }
  ],
  [
    173,
    "ldc.l @r{m:d}+, GBR",
    61695,
    16407,
    {
      m: 3840
      // m
    }
  ],
  [
    174,
    "ldc r{m:d}, VBR",
    61695,
    16430,
    {
      m: 3840
      // m
    }
  ],
  [
    175,
    "ldc.l @r{m:d}+, VBR",
    61695,
    16423,
    {
      m: 3840
      // m
    }
  ],
  [
    184,
    "ldc r{m:d}, SSR",
    61695,
    16446,
    {
      m: 3840
      // m
    }
  ],
  [
    185,
    "ldc.l @r{m:d}+, SSR",
    61695,
    16439,
    {
      m: 3840
      // m
    }
  ],
  [
    186,
    "ldc r{m:d}, SPC",
    61695,
    16462,
    {
      m: 3840
      // m
    }
  ],
  [
    187,
    "ldc.l @r{m:d}+, SPC",
    61695,
    16455,
    {
      m: 3840
      // m
    }
  ],
  [
    188,
    "ldc r{m:d}, DBR",
    61695,
    16634,
    {
      m: 3840
      // m
    }
  ],
  [
    189,
    "ldc.l @r{m:d}+, DBR",
    61695,
    16630,
    {
      m: 3840
      // m
    }
  ],
  [
    190,
    "ldc r{m:d}, r{n:d}_BANK",
    61583,
    16526,
    {
      n: 112,
      // n
      m: 3840
      // m
    }
  ],
  [
    191,
    "ldc.l @r{m:d}+, r{n:d}_BANK",
    61583,
    16519,
    {
      n: 112,
      // n
      m: 3840
      // m
    }
  ],
  [
    194,
    "lds r{m:d}, MACH",
    61695,
    16394,
    {
      m: 3840
      // m
    }
  ],
  [
    195,
    "lds.l @r{m:d}+, MACH",
    61695,
    16390,
    {
      m: 3840
      // m
    }
  ],
  [
    196,
    "lds r{m:d}, MACL",
    61695,
    16410,
    {
      m: 3840
      // m
    }
  ],
  [
    197,
    "lds.l @r{m:d}+, MACL",
    61695,
    16406,
    {
      m: 3840
      // m
    }
  ],
  [
    198,
    "lds r{m:d}, PR",
    61695,
    16426,
    {
      m: 3840
      // m
    }
  ],
  [
    199,
    "lds.l @r{m:d}+, PR",
    61695,
    16422,
    {
      m: 3840
      // m
    }
  ],
  [
    212,
    "ldtlb",
    65535,
    56,
    {}
  ],
  [
    213,
    "movca.l R0, @r{n:d}",
    61695,
    195,
    {
      n: 3840
      // n
    }
  ],
  [
    214,
    "nop",
    65535,
    9,
    {}
  ],
  [
    215,
    "ocbi @r{n:d}",
    61695,
    147,
    {
      n: 3840
      // n
    }
  ],
  [
    216,
    "ocbp @r{n:d}",
    61695,
    163,
    {
      n: 3840
      // n
    }
  ],
  [
    217,
    "ocbwb @r{n:d}",
    61695,
    179,
    {
      n: 3840
      // n
    }
  ],
  [
    218,
    "pref @r{n:d}",
    61695,
    131,
    {
      n: 3840
      // n
    }
  ],
  [
    221,
    "rte",
    65535,
    43,
    {}
  ],
  [
    224,
    "sets",
    65535,
    88,
    {}
  ],
  [
    225,
    "sett",
    65535,
    24,
    {}
  ],
  [
    226,
    "sleep",
    65535,
    27,
    {}
  ],
  [
    228,
    "stc SR, r{n:d}",
    61695,
    2,
    {
      n: 3840
      // n
    }
  ],
  [
    229,
    "stc.l SR, @-r{n:d}",
    61695,
    16387,
    {
      n: 3840
      // n
    }
  ],
  [
    231,
    "stc GBR, r{n:d}",
    61695,
    18,
    {
      n: 3840
      // n
    }
  ],
  [
    232,
    "stc.l GBR, @-r{n:d}",
    61695,
    16403,
    {
      n: 3840
      // n
    }
  ],
  [
    233,
    "stc VBR, r{n:d}",
    61695,
    34,
    {
      n: 3840
      // n
    }
  ],
  [
    234,
    "stc.l VBR, @-r{n:d}",
    61695,
    16419,
    {
      n: 3840
      // n
    }
  ],
  [
    241,
    "stc SGR, r{n:d}",
    61695,
    58,
    {
      n: 3840
      // n
    }
  ],
  [
    242,
    "stc.l SGR, @-r{n:d}",
    61695,
    16434,
    {
      n: 3840
      // n
    }
  ],
  [
    243,
    "stc SSR, r{n:d}",
    61695,
    50,
    {
      n: 3840
      // n
    }
  ],
  [
    244,
    "stc.l SSR, @-r{n:d}",
    61695,
    16435,
    {
      n: 3840
      // n
    }
  ],
  [
    245,
    "stc SPC, r{n:d}",
    61695,
    66,
    {
      n: 3840
      // n
    }
  ],
  [
    246,
    "stc.l SPC, @-r{n:d}",
    61695,
    16451,
    {
      n: 3840
      // n
    }
  ],
  [
    247,
    "stc DBR, r{n:d}",
    61695,
    250,
    {
      n: 3840
      // n
    }
  ],
  [
    248,
    "stc.l DBR, @-r{n:d}",
    61695,
    16626,
    {
      n: 3840
      // n
    }
  ],
  [
    249,
    "stc r{m:d}_BANK, r{n:d}",
    61583,
    130,
    {
      n: 3840,
      // n
      m: 112
      // m
    }
  ],
  [
    250,
    "stc.l r{m:d}_BANK, @-r{n:d}",
    61583,
    16515,
    {
      n: 3840,
      // n
      m: 112
      // m
    }
  ],
  [
    251,
    "sts MACH, r{n:d}",
    61695,
    10,
    {
      n: 3840
      // n
    }
  ],
  [
    252,
    "sts.l MACH, @-r{n:d}",
    61695,
    16386,
    {
      n: 3840
      // n
    }
  ],
  [
    253,
    "sts MACL, r{n:d}",
    61695,
    26,
    {
      n: 3840
      // n
    }
  ],
  [
    254,
    "sts.l MACL, @-r{n:d}",
    61695,
    16402,
    {
      n: 3840
      // n
    }
  ],
  [
    255,
    "sts PR, r{n:d}",
    61695,
    42,
    {
      n: 3840
      // n
    }
  ],
  [
    256,
    "sts.l PR, @-r{n:d}",
    61695,
    16418,
    {
      n: 3840
      // n
    }
  ],
  [
    270,
    "trapa 0x{i:04x}",
    65280,
    49920,
    {
      i: 255
      // i
    }
  ]
], Rs = {
  0: "R{m:d} -> R{n:d}",
  1: "h'{i:04x} -> sign extension -> R{n:d}",
  4: "(R{d:d}*4) + (PC & 0xFFFFFFFC) + 4 -> R0",
  5: "(R{d:d}*2 + PC + 4) -> sign extension -> R{n:d}",
  6: "(R{d:d}*4 + (PC & 0xFFFFFFFC) + 4) -> sign extension -> R{n:d}",
  7: "(R{m:d}) -> sign extension -> R{n:d}",
  8: "(R{m:d}) -> sign extension -> R{n:d}",
  9: "(R{m:d}) -> R{n:d}",
  10: "R{m:d} -> (R{n:d})",
  11: "R{m:d} -> (R{n:d})",
  12: "R{m:d} -> (R{n:d})",
  13: "(R{m:d}) -> sign extension -> R{n:d}, R{m:d}+1 -> R{m:d}",
  14: "(R{m:d}) -> sign extension -> R{n:d}, R{m:d}+2 -> R{m:d}",
  15: "(R{m:d}) -> R{n:d}, R{m:d}+4 -> R{m:d}",
  16: "R{n:d}-1 -> R{n:d}, R{m:d} -> (R{n:d})",
  17: "R{n:d}-2 -> R{n:d}, R{m:d} -> (R{n:d})",
  18: "R{n:d}-4 -> R{n:d}, R{m:d} -> (R{n:d})",
  25: "(R{d:d} + R{m:d}) -> sign extension -> R0",
  28: "(R{d:d}*2 + R{m:d}) -> sign extension -> R0",
  31: "(R{d:d}*4 + R{m:d}) -> R{n:d}",
  33: "R0 -> (R{d:d} + R{n:d})",
  35: "R0 -> (R{d:d}*2 + R{n:d})",
  37: "R{m:d} -> (R{d:d}*4 + R{n:d})",
  39: "(R0 + R{m:d}) -> sign extension -> R{n:d}",
  40: "(R0 + R{m:d}) -> sign extension -> R{n:d}",
  41: "(R0 + R{m:d}) -> R{n:d}",
  42: "R{m:d} -> (R0 + R{n:d})",
  43: "R{m:d} -> (R0 + R{n:d})",
  44: "R{m:d} -> (R0 + R{n:d})",
  45: "(R{d:d} + GBR) -> sign extension -> R0",
  46: "(R{d:d}*2 + GBR) -> sign extension -> R0",
  47: "(R{d:d}*4 + GBR) -> R0",
  48: "R0 -> (R{d:d} + GBR)",
  49: "R0 -> (R{d:d}*2 + GBR)",
  50: "R0 -> (R{d:d}*4 + GBR)",
  60: "T -> R{n:d}",
  62: "R{m:d} -> swap lower 2 bytes -> R{n:d}",
  63: "R{m:d} -> swap upper/lower words -> R{n:d}",
  64: "R{m:d}:R{n:d} middle 32 bits -> R{n:d}",
  79: "R{n:d} + R{m:d} -> R{n:d}",
  80: "R{n:d} + (sign extension)h'{i:04x}",
  81: "R{n:d} + R{m:d} + T -> R{n:d}, carry -> T",
  82: "R{n:d} + R{m:d} -> R{n:d}, overflow -> T",
  83: "If R0 = (sign extension)h'{i:04x}: 1 -> T Else: 0 -> T",
  84: "If R{n:d} = R{m:d}: 1 -> T Else: 0 -> T",
  85: "If R{n:d} >= R{m:d} (unsigned): 1 -> T Else: 0 -> T",
  86: "If R{n:d} >= R{m:d} (signed): 1 -> T Else: 0 -> T",
  87: "If R{n:d} > R{m:d} (unsigned): 1 -> T Else: 0 -> T",
  88: "If R{n:d} > R{m:d} (signed): 1 -> T Else: 0 -> T",
  89: "If R{n:d} > 0 (signed): 1 -> T Else: 0 -> T",
  90: "If R{n:d} >= 0 (signed): 1 -> T Else: 0 -> T",
  91: "If R{n:d} and R{m:d} have an equal byte: 1 -> T Else: 0 -> T",
  96: "MSB of R{n:d} -> Q, MSB of R{m:d} -> M, M ^ Q -> T",
  97: "0 -> M, 0 -> Q, 0 -> T",
  98: "1-step division (R{n:d} / R{m:d})",
  101: "Signed, R{n:d} * R{m:d} -> MACH:MACL 32 * 32 -> 64 bits",
  102: "Unsigned, R{n:d} * R{m:d} -> MACH:MACL 32 * 32 -> 64 bits",
  103: "R{n:d}-1 -> R{n:d} If R{n:d} = 0: 1 -> T Else: 0 -> T",
  104: "R{m:d} sign-extended from byte -> R{n:d}",
  105: "R{m:d} sign-extended from word -> R{n:d}",
  106: "R{m:d} zero-extended from byte -> R{n:d}",
  107: "R{m:d} zero-extended from word -> R{n:d}",
  108: "Signed, (R{n:d}) * (R{m:d}) + MAC -> MAC 32 * 32 + 64 -> 64 bits",
  109: "Signed, (R{n:d}) * (R{m:d}) + MAC -> MAC SH1: 16 * 16 + 42 -> 42 bits Other: 16 * 16 + 64 -> 64 bits",
  110: "R{n:d} * R{m:d} -> MACL 32 * 32 -> 32 bits",
  112: "Signed, R{n:d} * R{m:d} -> MACL 16 * 16 -> 32 bits",
  113: "Unsigned, R{n:d} * R{m:d} -> MACL 16 * 16 -> 32 bits",
  114: "0 - R{m:d} -> R{n:d}",
  115: "0 - R{m:d} - T -> R{n:d}, borrow -> T",
  116: "R{n:d} - R{m:d} -> R{n:d}",
  117: "R{n:d} - R{m:d} - T -> R{n:d}, borrow -> T",
  118: "R{n:d} - R{m:d} -> R{n:d}, underflow -> T",
  119: "R{n:d} & R{m:d} -> R{n:d}",
  120: "R0 & (zero extend)h'{i:04x} -> R0",
  121: "(R0 + GBR) & (zero extend)h'{i:04x} -> (R0 + GBR)",
  122: "~R{m:d} -> R{n:d}",
  123: "R{n:d} | R{m:d} -> R{n:d}",
  124: "R0 | (zero extend)h'{i:04x} -> R0",
  125: "(R0 + GBR) | (zero extend)h'{i:04x} -> (R0 + GBR)",
  126: "If (R{n:d}) = 0: 1 -> T Else: 0 -> T 1 -> MSB of (R{n:d})",
  127: "If R{n:d} & R{m:d} = 0: 1 -> T Else: 0 -> T",
  128: "If R0 & (zero extend)h'{i:04x} = 0: 1 -> T Else: 0 -> T",
  129: "If (R0 + GBR) & (zero extend)h'{i:04x} = 0: 1 -> T Else 0: -> T",
  130: "R{n:d} ^ R{m:d} -> R{n:d}",
  131: "R0 ^ (zero extend)h'{i:04x} -> R0",
  132: "(R0 + GBR) ^ (zero extend)h'{i:04x} -> (R0 + GBR)",
  133: "T << R{n:d} << T",
  134: "T >> R{n:d} >> T",
  135: "T << R{n:d} << MSB",
  136: "LSB >> R{n:d} >> T",
  137: "If R{m:d} >= 0: R{n:d} << R{m:d} -> R{n:d} If R{m:d} < 0: R{n:d} >> |R{m:d}| -> [MSB -> R{n:d}]",
  138: "T << R{n:d} << 0",
  139: "MSB >> R{n:d} >> T",
  140: "If R{m:d} >= 0: R{n:d} << R{m:d} -> R{n:d} If R{m:d} < 0: R{n:d} >> |R{m:d}| -> [0 -> R{n:d}]",
  141: "T << R{n:d} << 0",
  142: "R{n:d} << 2 -> R{n:d}",
  143: "R{n:d} << 8 -> R{n:d}",
  144: "R{n:d} << 16 -> R{n:d}",
  145: "0 >> R{n:d} >> T",
  146: "R{n:d} >> 2 -> [0 -> R{n:d}]",
  147: "R{n:d} >> 8 -> [0 -> R{n:d}]",
  148: "R{n:d} >> 16 -> [0 -> R{n:d}]",
  149: "If T = 0: R{d:d}*2 + PC + 4 -> PC Else: nop",
  150: "If T = 0: R{d:d}*2 + PC + 4 -> PC Else: nop (Delayed branch)",
  151: "If T = 1: R{d:d}*2 + PC + 4 -> PC Else: nop",
  152: "If T = 1: R{d:d}*2 + PC + 4 -> PC Else: nop (Delayed branch)",
  153: "R{d:d}*2 + PC + 4 -> PC (Delayed branch)",
  154: "R{m:d} + PC + 4 -> PC (Delayed branch)",
  155: "PC + 4 -> PR, R{d:d}*2 + PC + 4 -> PC (Delayed branch)",
  156: "PC + 4 -> PR, R{m:d} + PC + 4 -> PC (Delayed branch)",
  157: "R{m:d} -> PC (Delayed branch)",
  158: "PC + 4 -> PR, R{m:d} -> PC (Delayed branch)",
  161: "PR -> PC Delayed branch",
  164: "0 -> MACH, 0 -> MACL",
  165: "0 -> S",
  166: "0 -> T",
  169: "R{m:d} -> SR",
  170: "(R{m:d}) -> SR, R{m:d}+4 -> R{m:d}",
  172: "R{m:d} -> GBR",
  173: "(R{m:d}) -> GBR, R{m:d}+4 -> R{m:d}",
  174: "R{m:d} -> VBR",
  175: "(R{m:d}) -> VBR, R{m:d}+4 -> R{m:d}",
  184: "R{m:d} -> SSR",
  185: "(R{m:d}) -> SSR, R{m:d}+4 -> R{m:d}",
  186: "R{m:d} -> SPC",
  187: "(R{m:d}) -> SPC, R{m:d}+4 -> R{m:d}",
  188: "R{m:d} -> DBR",
  189: "(R{m:d}) -> DBR, R{m:d}+4 -> R{m:d}",
  190: "R{m:d} -> R{n:d}_BANK (n = 0-7)",
  191: "(R{m:d}) -> R{n:d}_BANK, R{m:d}+4 -> R{m:d}",
  194: "R{m:d} -> MACH",
  195: "(R{m:d}) -> MACH, R{m:d}+4 -> R{m:d}",
  196: "R{m:d} -> MACL",
  197: "(R{m:d}) -> MACL, R{m:d}+4 -> R{m:d}",
  198: "R{m:d} -> PR",
  199: "(R{m:d}) -> PR, R{m:d}+4 -> R{m:d}",
  212: "PTEH/PTEL -> TLB",
  213: "R0 -> (R{n:d}) (without fetching cache block)",
  214: "No operation",
  215: "Invalidate operand cache block",
  216: "Write back and invalidate operand cache block",
  217: "Write back operand cache block",
  218: "(R{n:d}) -> operand cache",
  221: "Delayed branch SH1*,SH2*: stack area -> PC/SR SH3*,SH4*: SSR/SPC -> SR/PC",
  224: "1 -> S",
  225: "1 -> T",
  226: "Sleep or standby",
  228: "SR -> R{n:d}",
  229: "R{n:d}-4 -> R{n:d}, SR -> (R{n:d})",
  231: "GBR -> R{n:d}",
  232: "R{n:d}-4 -> R{n:d}, GBR -> (R{n:d})",
  233: "VBR -> R{n:d}",
  234: "R{n:d}-4 -> R{n:d}, VBR -> (R{n:d})",
  241: "SGR -> R{n:d}",
  242: "R{n:d}-4 -> R{n:d}, SGR -> (R{n:d})",
  243: "SSR -> R{n:d}",
  244: "R{n:d}-4 -> R{n:d}, SSR -> (R{n:d})",
  245: "SPC -> R{n:d}",
  246: "R{n:d}-4 -> R{n:d}, SPC -> (R{n:d})",
  247: "DBR -> R{n:d}",
  248: "R{n:d}-4 -> R{n:d}, DBR -> (R{n:d})",
  249: "R{m:d}_BANK -> R{n:d} (m = 0-7)",
  250: "R{n:d}-4 -> R{n:d}, R{m:d}_BANK -> (R{n:d}) (m = 0-7)",
  251: "MACH -> R{n:d}",
  252: "R{n:d}-4 -> R{n:d}, MACH -> (R{n:d})",
  253: "MACL -> R{n:d}",
  254: "R{n:d}-4 -> R{n:d}, MACL -> (R{n:d})",
  255: "PR -> R{n:d}",
  256: "R{n:d}-4 -> R{n:d}, PR -> (R{n:d})",
  270: "SH1*,SH2*: PC/SR -> stack area, (h'{i:04x}*4 + VBR) -> PC SH3*,SH4*: PC/SR -> SPC/SSR, h'{i:04x}*4 -> TRA, 0x160 -> EXPEVT, VBR + 0x0100 -> PC"
}, ks = ws, _s = Rs;
class qs {
  constructor(t = !1) {
    D2(this, "debug");
    this.debug = t;
  }
  disasm(t, n = !1) {
    for (const a of ks) {
      const [s, o, d, c, f] = a, h = {};
      if ((t & d) === c) {
        for (const g in f) {
          const w = f[g];
          if (!(w & 255)) {
            h[g] = (t & w) >> 8;
            continue;
          }
          if (!(w & 3855)) {
            h[g] = (t & w) >> 4;
            continue;
          }
          if (!(w & 3840)) {
            h[g] = t & w;
            continue;
          }
          if (!(w & 61440)) {
            h[g] = t & w;
            continue;
          }
          if (!(w & 4080)) {
            h[g] = t & w;
            continue;
          }
          if (!(w & 3983)) {
            h[g] = t & w;
            continue;
          }
        }
        if (n)
          return [o, h];
        const p = { ...h };
        if ("d" in p && (p.d *= 4), console.log(o.replace(/{(\w+)}/g, (g, w) => p[w].toString())), this.debug) {
          const g = _s[s];
          g && console.log(Ui(g, p));
        }
        return [s, h];
      }
    }
    if (n)
      return [".word 0x{w:08x}", {
        w: (t & 61440) << 12 | (t & 3840) << 8 | (t & 240) << 4 | t & 15
      }];
    throw new Error(`Unknown OPCode : ${t.toString(16).toUpperCase()}`);
  }
}
const Ss = {
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
function mi(l) {
  return l.startsWith("mov") ? "mov" : l === "nop" ? "nop" : ["bf", "bra", "bt", "bf.s", "bt.s", "jmp"].includes(l) ? "jmp" : l === "rts" ? "ret" : l.startsWith("cmp") ? "cmp" : l.startsWith("bsr") ? "call" : l.startsWith("add") || l.startsWith("mul") || l.startsWith("mac") || l.startsWith("neg") || l.startsWith("sub") || l.startsWith("not") ? "math" : l.startsWith(".") ? "trap" : "";
}
function gi(l) {
  return l.replace(/(0x[0-9a-fA-F]+)/g, '<span class="num">$1</span>').replace(/[(),+]/g, (t) => `<span class="math">${t}</span>`);
}
function vi(l, t, n) {
  const a = l.slice();
  a[4] = t[n], a[9] = n;
  const s = Ui(.../*disassembler*/
  a[3].disasm(
    /*instr*/
    a[4].value,
    !0
  ));
  a[5] = s;
  const o = (
    /*opcode_string*/
    a[5].split(" ")[0]
  );
  a[6] = o;
  const d = (
    /*opcode_string*/
    a[5].split(" ").slice(1).join(" ")
  );
  return a[7] = d, a;
}
function xi(l, t) {
  let n, a, s, o, d = (
    /*instr*/
    t[4].pc.toString(16).padStart(8, "0") + ""
  ), c, f, h, p = (
    /*opcode_op*/
    t[6] + ""
  ), g, w, G, k, v = gi(
    /*opcode_args*/
    t[7]
  ) + "", S, R, O, U = (
    /*instr*/
    t[4].value.toString(16).padStart(4, "0") + ""
  ), q, T;
  return {
    key: l,
    first: null,
    c() {
      n = _("div"), a = _("div"), a.textContent = "-", s = B(), o = _("div"), c = Y(d), f = B(), h = _("div"), g = Y(p), G = B(), k = _("div"), S = B(), R = _("div"), O = Y("; "), q = Y(U), T = B(), e(a, "class", "svelte-eqympm"), e(o, "class", "svelte-eqympm"), e(h, "class", w = ii(mi(
        /*opcode_op*/
        t[6]
      )) + " svelte-eqympm"), e(k, "class", "svelte-eqympm"), e(R, "class", "svelte-eqympm"), e(n, "class", "line svelte-eqympm"), Je(
        n,
        "current",
        /*local_pc*/
        t[0] >>> 0 == /*instr*/
        t[4].pc >>> 0
      ), this.first = n;
    },
    m(x, u) {
      z(x, n, u), r(n, a), r(n, s), r(n, o), r(o, c), r(n, f), r(n, h), r(h, g), r(n, G), r(n, k), k.innerHTML = v, r(n, S), r(n, R), r(R, O), r(R, q), r(n, T);
    },
    p(x, u) {
      t = x, u & /*instructions*/
      2 && d !== (d = /*instr*/
      t[4].pc.toString(16).padStart(8, "0") + "") && t0(c, d), u & /*instructions*/
      2 && p !== (p = /*opcode_op*/
      t[6] + "") && t0(g, p), u & /*instructions*/
      2 && w !== (w = ii(mi(
        /*opcode_op*/
        t[6]
      )) + " svelte-eqympm") && e(h, "class", w), u & /*instructions*/
      2 && v !== (v = gi(
        /*opcode_args*/
        t[7]
      ) + "") && (k.innerHTML = v), u & /*instructions*/
      2 && U !== (U = /*instr*/
      t[4].value.toString(16).padStart(4, "0") + "") && t0(q, U), u & /*local_pc, instructions*/
      3 && Je(
        n,
        "current",
        /*local_pc*/
        t[0] >>> 0 == /*instr*/
        t[4].pc >>> 0
      );
    },
    d(x) {
      x && $(n);
    }
  };
}
function Gs(l) {
  let t, n = [], a = /* @__PURE__ */ new Map(), s = nl(
    /*instructions*/
    l[1]
  );
  const o = (d) => (
    /*instr*/
    d[4].pc
  );
  for (let d = 0; d < s.length; d += 1) {
    let c = vi(l, s, d), f = o(c);
    a.set(f, n[d] = xi(f, c));
  }
  return {
    c() {
      t = _("div");
      for (let d = 0; d < n.length; d += 1)
        n[d].c();
      e(t, "class", "disassembly svelte-eqympm"), e(
        t,
        "style",
        /*styles*/
        l[2]
      );
    },
    m(d, c) {
      z(d, t, c);
      for (let f = 0; f < n.length; f += 1)
        n[f] && n[f].m(t, null);
    },
    p(d, [c]) {
      c & /*local_pc, instructions, disassembler*/
      11 && (s = nl(
        /*instructions*/
        d[1]
      ), n = Wi(n, c, o, 1, d, s, a, t, Yi, xi, null, vi));
    },
    i: y,
    o: y,
    d(d) {
      d && $(t);
      for (let c = 0; c < n.length; c += 1)
        n[c].d();
    }
  };
}
function Cs(l, t, n) {
  let { local_pc: a } = t, { instructions: s = [] } = t;
  const o = Object.entries(Ss).map((c) => `--${c[0].replaceAll(" ", "-").replaceAll(/[^a-zA-Z-]/g, "")}: ${c[1]}`).join("; ");
  let d = new qs(!0);
  return rl(() => {
  }), l.$$set = (c) => {
    "local_pc" in c && n(0, a = c.local_pc), "instructions" in c && n(1, s = c.instructions);
  }, [a, s, o, d];
}
class Ms extends K {
  constructor(t) {
    super(), V(this, t, Cs, Gs, I, { local_pc: 0, instructions: 1 });
  }
}
function Us(l) {
  let t;
  return {
    c() {
      t = _("p"), t.textContent = "Debugger state KO", e(t, "class", "skeleton svelte-hcbstf");
    },
    m(n, a) {
      z(n, t, a);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && $(t);
    }
  };
}
function $s(l) {
  let t, n, a = (
    /*local_pc*/
    (l[0] >>> 0).toString(16).padStart(8, "0") + ""
  ), s, o, d, c;
  return d = new Ms({
    props: {
      instructions: (
        /*instructions*/
        l[9]
      ),
      local_pc: (
        /*local_pc*/
        l[0]
      )
    }
  }), {
    c() {
      t = _("div"), n = Y("Current PC: "), s = Y(a), o = B(), L(d.$$.fragment);
    },
    m(f, h) {
      z(f, t, h), r(t, n), r(t, s), z(f, o, h), F(d, f, h), c = !0;
    },
    p(f, h) {
      (!c || h & /*local_pc*/
      1) && a !== (a = /*local_pc*/
      (f[0] >>> 0).toString(16).padStart(8, "0") + "") && t0(s, a);
      const p = {};
      h & /*local_pc*/
      1 && (p.local_pc = /*local_pc*/
      f[0]), d.$set(p);
    },
    i(f) {
      c || (P(d.$$.fragment, f), c = !0);
    },
    o(f) {
      j(d.$$.fragment, f), c = !1;
    },
    d(f) {
      f && ($(t), $(o)), A(d, f);
    }
  };
}
function zs(l) {
  let t;
  return {
    c() {
      t = _("p"), t.textContent = "Fetching data ...", e(t, "class", "skeleton svelte-hcbstf");
    },
    m(n, a) {
      z(n, t, a);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && $(t);
    }
  };
}
function Os(l) {
  let t;
  return {
    c() {
      t = _("p"), t.textContent = "Loading ...", e(t, "class", "skeleton svelte-hcbstf");
    },
    m(n, a) {
      z(n, t, a);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && $(t);
    }
  };
}
function Es(l) {
  let t, n, a, s, o, d, c, f, h, p, g, w, G, k, v, S, R, O, U, q, T, x, u, C, M, W, Q;
  f = new vs({}), g = new ds({}), k = new hs({}), R = new ys({}), q = new ti({});
  const Z = [Os, zs, $s, Us], J = [];
  function et(D, le) {
    return (
      /*debugger_state*/
      D[2] === 0 ? 0 : (
        /*debugger_state*/
        D[2] === 1 ? 1 : (
          /*debugger_state*/
          D[2] === 10 ? 2 : 3
        )
      )
    );
  }
  return u = et(l), C = J[u] = Z[u](l), {
    c() {
      t = _("div"), n = _("div"), a = _("h4"), s = Y("Debugger - "), o = Y(
        /*$state*/
        l[1]
      ), d = B(), c = _("button"), L(f.$$.fragment), h = B(), p = _("button"), L(g.$$.fragment), w = B(), G = _("button"), L(k.$$.fragment), v = B(), S = _("button"), L(R.$$.fragment), O = B(), U = _("button"), L(q.$$.fragment), T = B(), x = _("div"), C.c(), e(a, "class", "header"), e(c, "class", "toolbar-action"), e(c, "type", "button"), e(c, "title", "Run until"), e(c, "tabindex", "0"), e(c, "id", "btn_forwards_debug"), e(p, "class", "toolbar-action"), e(p, "type", "button"), e(p, "title", "step over"), e(p, "tabindex", "0"), e(p, "id", "btn_step_over_debug"), e(G, "class", "toolbar-action"), e(G, "type", "button"), e(G, "title", "step in"), e(G, "tabindex", "0"), e(G, "id", "btn_step_in_debug"), e(S, "class", "toolbar-action"), e(S, "type", "button"), e(S, "title", "halt"), e(S, "tabindex", "0"), e(S, "id", "btn_close_debug"), e(U, "class", "toolbar-action"), e(U, "type", "button"), e(U, "title", "close"), e(U, "tabindex", "0"), e(U, "id", "btn_close_debug"), e(n, "class", "titlebar"), e(x, "class", "contents"), e(t, "class", "debugging-panel view-panel svelte-hcbstf"), Je(
        t,
        "visible",
        /*$debugPane*/
        l[3]
      );
    },
    m(D, le) {
      z(D, t, le), r(t, n), r(n, a), r(a, s), r(a, o), r(n, d), r(n, c), F(f, c, null), r(n, h), r(n, p), F(g, p, null), r(n, w), r(n, G), F(k, G, null), r(n, v), r(n, S), F(R, S, null), r(n, O), r(n, U), F(q, U, null), r(t, T), r(t, x), J[u].m(x, null), M = !0, W || (Q = [
        ee(
          c,
          "click",
          /*doFastForwards*/
          l[7]
        ),
        ee(
          p,
          "click",
          /*doStepOver*/
          l[5]
        ),
        ee(
          G,
          "click",
          /*doStepIn*/
          l[6]
        ),
        ee(
          S,
          "click",
          /*doHalt*/
          l[8]
        ),
        ee(
          U,
          "click",
          /*doClose*/
          l[4]
        )
      ], W = !0);
    },
    p(D, [le]) {
      (!M || le & /*$state*/
      2) && t0(
        o,
        /*$state*/
        D[1]
      );
      let de = u;
      u = et(D), u === de ? J[u].p(D, le) : (i2(), j(J[de], 1, 1, () => {
        J[de] = null;
      }), a2(), C = J[u], C ? C.p(D, le) : (C = J[u] = Z[u](D), C.c()), P(C, 1), C.m(x, null)), (!M || le & /*$debugPane*/
      8) && Je(
        t,
        "visible",
        /*$debugPane*/
        D[3]
      );
    },
    i(D) {
      M || (P(f.$$.fragment, D), P(g.$$.fragment, D), P(k.$$.fragment, D), P(R.$$.fragment, D), P(q.$$.fragment, D), P(C), M = !0);
    },
    o(D) {
      j(f.$$.fragment, D), j(g.$$.fragment, D), j(k.$$.fragment, D), j(R.$$.fragment, D), j(q.$$.fragment, D), j(C), M = !1;
    },
    d(D) {
      D && $(t), A(f), A(g), A(k), A(R), A(q), J[u].d(), W = !1, xt(Q);
    }
  };
}
function Bs(l, t, n) {
  let a, s, o, d, c, f;
  re(l, lt, (u) => n(1, a = u)), re(l, ei, (u) => n(12, s = u)), re(l, Mi, (u) => n(13, o = u)), re(l, Ci, (u) => n(14, d = u)), re(l, gr, (u) => n(15, c = u)), re(l, Q2, (u) => n(3, f = u));
  const h = V2(), p = (u) => {
    h("doClose", u), Q2.set(!1);
  }, g = (u) => {
    const C = x();
    try {
      c && window.Module.ccall("dumpOneFrame", null, [], []), window.Module.ccall("runOneFrame", null, ["number"], [1]), console.debug("runOneFrame OK - ", C), n(0, R += 2);
    } catch (M) {
      return console.error(M), !1;
    }
    h("doStepOver", u);
  }, w = (u) => {
    const C = x();
    try {
      c && window.Module.ccall("dumpOneFrame", null, [], []), window.Module.ccall("runOneFrame", null, ["number"], [1]), console.debug("runOneFrame OK - ", C), n(0, R += 2);
    } catch (M) {
      return console.error(M), !1;
    }
    h("doStepIn", u);
  }, G = (u) => {
    window.Module.ccall("runFrame", null, [], []), h("doFastForwards", u);
  }, k = (u) => {
    h("doHalt", u);
  };
  let v = null, S = null, R, O = 0, U = [];
  const q = () => {
    if (S && v) {
      n(0, R = v());
      for (let u = 0; u < 30; u++) {
        let C = S(R + u * 2);
        U.push({
          pc: (R >>> 0) + u * 2,
          value: C
        });
      }
      return !0;
    }
    return !1;
  }, T = () => {
    q() ? (console.log(U), n(2, O = 10)) : (console.error("Can't load instructions ..."), n(2, O = -1));
  }, x = () => S && v ? (n(0, R = v()), oi.set(R), S(R)) : null;
  return rl(() => {
  }), l.$$.update = () => {
    if (l.$$.dirty & /*$getPC, localGetPC, local_pc*/
    17409 && d !== void 0 && (n(10, v = d), n(0, R = v() >>> 0), oi.set(R)), l.$$.dirty & /*$readMemory2Quick*/
    8192 && o !== void 0 && n(11, S = o), l.$$.dirty & /*localReadMem, localGetPC, $debugging, $state, local_pc*/
    7171 && S && v && s && a === "running") {
      console.log("Ready to ready memory !");
      try {
        n(0, R = v());
        let u = S(R);
        n(2, O = 1), T();
      } catch {
      }
    }
  }, [
    R,
    a,
    O,
    f,
    p,
    g,
    w,
    G,
    k,
    U,
    v,
    S,
    s,
    o,
    d
  ];
}
class Hs extends K {
  constructor(t) {
    super(), V(this, t, Bs, Es, I, {});
  }
}
function Ps(l) {
  let t, n, a, s, o, d = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], c = {};
  for (let f = 0; f < d.length; f += 1)
    c = N(c, d[f]);
  return {
    c() {
      t = i("svg"), n = i("g"), a = i("path"), s = i("path"), o = i("path"), e(a, "stroke-linecap", "round"), e(a, "stroke-linejoin", "round"), e(a, "d", "M12 21v-9m0 0l3 3.333M12 12l-3 3.333"), e(s, "stroke-linecap", "round"), e(s, "d", "M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7"), e(s, "opacity", "0.5"), e(o, "d", "M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"), e(n, "fill", "none"), e(n, "stroke", "currentColor"), e(n, "stroke-width", "1.5"), ae(t, c);
    },
    m(f, h) {
      z(f, t, h), r(t, n), r(n, a), r(n, s), r(n, o);
    },
    p(f, [h]) {
      ae(t, c = n0(d, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        h & /*$$props*/
        1 && /*$$props*/
        f[0]
      ]));
    },
    i: y,
    o: y,
    d(f) {
      f && $(t);
    }
  };
}
function js(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class Ts extends K {
  constructor(t) {
    super(), V(this, t, js, Ps, I, {});
  }
}
function Ds(l) {
  let t, n, a, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], o = {};
  for (let d = 0; d < s.length; d += 1)
    o = N(o, s[d]);
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M22 13.75v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225c-.855-.769-2.172-.769-4.804-.769h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352c-.488-.271-.896-.68-1.712-1.495l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903c-.186-.017-.38-.017-.766-.017c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.007C2 5.376 2 5.818 2 6.7v7.05c0 3.771 0 5.657 1.172 6.828S6.229 21.75 10 21.75h4c3.771 0 5.657 0 6.828-1.172S22 17.521 22 13.75"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M12 11a.75.75 0 0 1 .75.75V13H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0V14.5H10a.75.75 0 0 1 0-1.5h1.25v-1.25A.75.75 0 0 1 12 11"), ae(t, o);
    },
    m(d, c) {
      z(d, t, c), r(t, n), r(t, a);
    },
    p(d, [c]) {
      ae(t, o = n0(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        c & /*$$props*/
        1 && /*$$props*/
        d[0]
      ]));
    },
    i: y,
    o: y,
    d(d) {
      d && $(t);
    }
  };
}
function Fs(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class As extends K {
  constructor(t) {
    super(), V(this, t, Fs, Ds, I, {});
  }
}
function Ls(l) {
  let t, n, a, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], o = {};
  for (let d = 0; d < s.length; d += 1)
    o = N(o, s[d]);
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"), ae(t, o);
    },
    m(d, c) {
      z(d, t, c), r(t, n), r(t, a);
    },
    p(d, [c]) {
      ae(t, o = n0(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        c & /*$$props*/
        1 && /*$$props*/
        d[0]
      ]));
    },
    i: y,
    o: y,
    d(d) {
      d && $(t);
    }
  };
}
function Qs(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class Is extends K {
  constructor(t) {
    super(), V(this, t, Qs, Ls, I, {});
  }
}
function Vs(l) {
  let t, n, a, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], o = {};
  for (let d = 0; d < s.length; d += 1)
    o = N(o, s[d]);
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "M6.424 9.52a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"), ae(t, o);
    },
    m(d, c) {
      z(d, t, c), r(t, n), r(t, a);
    },
    p(d, [c]) {
      ae(t, o = n0(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        c & /*$$props*/
        1 && /*$$props*/
        d[0]
      ]));
    },
    i: y,
    o: y,
    d(d) {
      d && $(t);
    }
  };
}
function Ks(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class Ns extends K {
  constructor(t) {
    super(), V(this, t, Ks, Vs, I, {});
  }
}
function Ys(l) {
  let t, n, a, s = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "1em" },
    { height: "1em" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    l[0]
  ], o = {};
  for (let d = 0; d < s.length; d += 1)
    o = N(o, s[d]);
  return {
    c() {
      t = i("svg"), n = i("path"), a = i("path"), e(n, "fill", "currentColor"), e(n, "fill-rule", "evenodd"), e(n, "d", "M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22"), e(n, "clip-rule", "evenodd"), e(n, "opacity", "0.5"), e(a, "fill", "currentColor"), e(a, "d", "m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"), ae(t, o);
    },
    m(d, c) {
      z(d, t, c), r(t, n), r(t, a);
    },
    p(d, [c]) {
      ae(t, o = n0(s, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "1em" },
        { height: "1em" },
        { viewBox: "0 0 24 24" },
        c & /*$$props*/
        1 && /*$$props*/
        d[0]
      ]));
    },
    i: y,
    o: y,
    d(d) {
      d && $(t);
    }
  };
}
function Ws(l, t, n) {
  return l.$$set = (a) => {
    n(0, t = N(N({}, t), ie(a)));
  }, t = ie(t), [t];
}
class Zs extends K {
  constructor(t) {
    super(), V(this, t, Ws, Ys, I, {});
  }
}
function bi(l, t, n) {
  const a = l.slice();
  return a[7] = t[n], a;
}
function Xs(l) {
  let t, n, a, s, o;
  const d = [to, eo], c = [];
  function f(h, p) {
    return p & /*files_view*/
    1 && (t = null), t == null && (t = !!/*file*/
    h[7].name.endsWith(".bin")), t ? 0 : 1;
  }
  return n = f(l, -1), a = c[n] = d[n](l), {
    c() {
      a.c(), s = l2();
    },
    m(h, p) {
      c[n].m(h, p), z(h, s, p), o = !0;
    },
    p(h, p) {
      let g = n;
      n = f(h, p), n !== g && (i2(), j(c[g], 1, 1, () => {
        c[g] = null;
      }), a2(), a = c[n], a || (a = c[n] = d[n](h), a.c()), P(a, 1), a.m(s.parentNode, s));
    },
    i(h) {
      o || (P(a), o = !0);
    },
    o(h) {
      j(a), o = !1;
    },
    d(h) {
      h && $(s), c[n].d(h);
    }
  };
}
function Js(l) {
  let t, n;
  return t = new Is({}), {
    c() {
      L(t.$$.fragment);
    },
    m(a, s) {
      F(t, a, s), n = !0;
    },
    p: y,
    i(a) {
      n || (P(t.$$.fragment, a), n = !0);
    },
    o(a) {
      j(t.$$.fragment, a), n = !1;
    },
    d(a) {
      A(t, a);
    }
  };
}
function eo(l) {
  let t, n;
  return t = new Zs({}), {
    c() {
      L(t.$$.fragment);
    },
    m(a, s) {
      F(t, a, s), n = !0;
    },
    i(a) {
      n || (P(t.$$.fragment, a), n = !0);
    },
    o(a) {
      j(t.$$.fragment, a), n = !1;
    },
    d(a) {
      A(t, a);
    }
  };
}
function to(l) {
  let t, n;
  return t = new Ns({}), {
    c() {
      L(t.$$.fragment);
    },
    m(a, s) {
      F(t, a, s), n = !0;
    },
    i(a) {
      n || (P(t.$$.fragment, a), n = !0);
    },
    o(a) {
      j(t.$$.fragment, a), n = !1;
    },
    d(a) {
      A(t, a);
    }
  };
}
function yi(l) {
  let t, n, a, s, o, d, c = (
    /*file*/
    l[7].name + ""
  ), f, h, p, g;
  const w = [Js, Xs], G = [];
  function k(v, S) {
    return (
      /*file*/
      v[7].type === "dir" ? 0 : (
        /*file*/
        v[7].type === "file" ? 1 : -1
      )
    );
  }
  return ~(a = k(l)) && (s = G[a] = w[a](l)), {
    c() {
      t = _("div"), n = _("div"), s && s.c(), o = B(), d = _("p"), f = Y(c), h = B(), e(n, "class", "icon svelte-1kbt5v3"), e(d, "class", "name svelte-1kbt5v3"), e(t, "class", "file svelte-1kbt5v3"), e(t, "title", p = /*file*/
      l[7].name);
    },
    m(v, S) {
      z(v, t, S), r(t, n), ~a && G[a].m(n, null), r(t, o), r(t, d), r(d, f), r(t, h), g = !0;
    },
    p(v, S) {
      let R = a;
      a = k(v), a === R ? ~a && G[a].p(v, S) : (s && (i2(), j(G[R], 1, 1, () => {
        G[R] = null;
      }), a2()), ~a ? (s = G[a], s ? s.p(v, S) : (s = G[a] = w[a](v), s.c()), P(s, 1), s.m(n, null)) : s = null), (!g || S & /*files_view*/
      1) && c !== (c = /*file*/
      v[7].name + "") && t0(f, c), (!g || S & /*files_view*/
      1 && p !== (p = /*file*/
      v[7].name)) && e(t, "title", p);
    },
    i(v) {
      g || (P(s), g = !0);
    },
    o(v) {
      j(s), g = !1;
    },
    d(v) {
      v && $(t), ~a && G[a].d();
    }
  };
}
function no(l) {
  let t, n, a, s, o, d, c, f, h, p, g, w, G, k, v, S, R, O;
  d = new Ts({}), h = new As({}), w = new ti({});
  let U = nl(
    /*files_view*/
    l[0]
  ), q = [];
  for (let x = 0; x < U.length; x += 1)
    q[x] = yi(bi(l, U, x));
  const T = (x) => j(q[x], 1, 1, () => {
    q[x] = null;
  });
  return {
    c() {
      t = _("div"), n = _("div"), a = _("h4"), a.textContent = `${X2}`, s = B(), o = _("button"), L(d.$$.fragment), c = B(), f = _("button"), L(h.$$.fragment), p = B(), g = _("button"), L(w.$$.fragment), G = B(), k = _("div"), v = _("div");
      for (let x = 0; x < q.length; x += 1)
        q[x].c();
      e(a, "class", "header"), e(o, "class", "toolbar-action"), e(o, "type", "button"), e(o, "title", "Send file from computer"), e(o, "tabindex", "0"), e(o, "id", "btn_send_files"), e(f, "class", "toolbar-action"), e(f, "type", "button"), e(f, "title", "New folder"), e(f, "tabindex", "0"), e(f, "id", "btn_new_folder_files"), e(g, "class", "toolbar-action"), e(g, "type", "button"), e(g, "title", "close"), e(g, "tabindex", "0"), e(g, "id", "btn_close_trace"), e(n, "class", "titlebar"), e(v, "class", "files svelte-1kbt5v3"), e(k, "class", "contents svelte-1kbt5v3"), e(t, "class", "files-panel view-panel svelte-1kbt5v3"), Je(
        t,
        "visible",
        /*$filesPane*/
        l[1]
      );
    },
    m(x, u) {
      z(x, t, u), r(t, n), r(n, a), r(n, s), r(n, o), F(d, o, null), r(n, c), r(n, f), F(h, f, null), r(n, p), r(n, g), F(w, g, null), r(t, G), r(t, k), r(k, v);
      for (let C = 0; C < q.length; C += 1)
        q[C] && q[C].m(v, null);
      S = !0, R || (O = [
        ee(
          o,
          "click",
          /*doSendFile*/
          l[2]
        ),
        ee(
          f,
          "click",
          /*doNewFolder*/
          l[3]
        ),
        ee(
          g,
          "click",
          /*doClose*/
          l[4]
        )
      ], R = !0);
    },
    p(x, [u]) {
      if (u & /*files_view*/
      1) {
        U = nl(
          /*files_view*/
          x[0]
        );
        let C;
        for (C = 0; C < U.length; C += 1) {
          const M = bi(x, U, C);
          q[C] ? (q[C].p(M, u), P(q[C], 1)) : (q[C] = yi(M), q[C].c(), P(q[C], 1), q[C].m(v, null));
        }
        for (i2(), C = U.length; C < q.length; C += 1)
          T(C);
        a2();
      }
      (!S || u & /*$filesPane*/
      2) && Je(
        t,
        "visible",
        /*$filesPane*/
        x[1]
      );
    },
    i(x) {
      if (!S) {
        P(d.$$.fragment, x), P(h.$$.fragment, x), P(w.$$.fragment, x);
        for (let u = 0; u < U.length; u += 1)
          P(q[u]);
        S = !0;
      }
    },
    o(x) {
      j(d.$$.fragment, x), j(h.$$.fragment, x), j(w.$$.fragment, x), q = q.filter(Boolean);
      for (let u = 0; u < q.length; u += 1)
        j(q[u]);
      S = !1;
    },
    d(x) {
      x && $(t), A(d), A(h), A(w), Si(q, x), R = !1, xt(O);
    }
  };
}
let X2 = "/fls0";
function ro(l, t, n) {
  let a;
  re(l, t2, (p) => n(1, a = p));
  const s = V2();
  let o = [];
  function d() {
    let p = [];
    try {
      const g = window.Module.FS.readdir(X2);
      for (const w of g) {
        const G = `${X2}/${w}`, k = window.Module.FS.stat(G);
        window.Module.FS.isFile(k.mode) ? p.push({
          type: "file",
          name: w,
          size: k.size,
          stats: k
        }) : window.Module.FS.isDir(k.mode) && p.push({
          type: "dir",
          name: w,
          size: k.size,
          stats: k
        });
      }
    } catch (g) {
      console.error("Error reading directory:", g);
    }
    n(0, o = p);
  }
  const c = (p) => {
    s("doSendFile", p);
  }, f = (p) => {
    s("doNewFolder", p);
  }, h = (p) => {
    s("doClose", p), t2.set(!1);
  };
  return t2.subscribe((p) => {
    window.Module && window.Module.FS && d();
  }), rl(async () => {
    window.Module && window.Module.FS && d();
  }), [o, a, c, f, h];
}
class lo extends K {
  constructor(t) {
    super(), V(this, t, ro, no, I, {});
  }
}
function io(l) {
  let t, n, a, s, o, d, c, f, h, p, g, w, G, k, v, S, R, O, U, q, T, x, u, C, M, W;
  return n = new ta({}), h = new ns({}), g = new ca({}), G = new la({}), v = new Ta({}), v.$on(
    "romChanged",
    /*doRomLoad*/
    l[9]
  ), v.$on(
    "doBrowseFiles",
    /*doBrowseFiles*/
    l[1]
  ), v.$on(
    "doRun",
    /*doRun*/
    l[8]
  ), v.$on(
    "doDump",
    /*doDump*/
    l[5]
  ), v.$on(
    "doDebug",
    /*doDebug*/
    l[7]
  ), v.$on(
    "doFullscreen",
    /*doFullscreen*/
    l[2]
  ), v.$on(
    "doCopyScreen",
    /*doCopyScreen*/
    l[3]
  ), v.$on(
    "doSaveScreen",
    /*doSaveScreen*/
    l[4]
  ), R = new Hs({}), q = new Xa({}), q.$on(
    "doRefresh",
    /*doRefresh*/
    l[6]
  ), x = new lo({}), x.$on("doSendFile", ao), x.$on("doNewFolder", so), M = new ha({}), {
    c() {
      t = _("main"), L(n.$$.fragment), a = B(), s = _("div"), o = _("div"), o.innerHTML = `<img src="${Ji}" alt="RuK Logo" class="svelte-mpypct"/> <span class="svelte-mpypct">RuK UI</span>`, d = B(), c = _("div"), f = _("div"), L(h.$$.fragment), p = B(), L(g.$$.fragment), w = B(), L(G.$$.fragment), k = B(), L(v.$$.fragment), S = B(), L(R.$$.fragment), O = B(), U = _("div"), L(q.$$.fragment), T = B(), L(x.$$.fragment), u = B(), C = _("div"), L(M.$$.fragment), e(o, "class", "logo svelte-mpypct"), Je(
        o,
        "compact",
        /*$debugPane*/
        l[0]
      ), e(f, "id", "classpad"), E(f, "--zoomFactor", "1.5"), e(f, "class", "svelte-mpypct"), e(c, "class", "calc-container svelte-mpypct"), e(U, "class", "small-widgets svelte-mpypct"), E(C, "display", "none"), e(s, "class", "container svelte-mpypct");
    },
    m(Q, Z) {
      z(Q, t, Z), F(n, t, null), r(t, a), r(t, s), r(s, o), r(s, d), r(s, c), r(c, f), F(h, f, null), r(c, p), F(g, c, null), r(c, w), F(G, c, null), r(s, k), F(v, s, null), r(s, S), F(R, s, null), r(s, O), r(s, U), F(q, U, null), r(U, T), F(x, U, null), r(s, u), r(s, C), F(M, C, null), W = !0;
    },
    p(Q, [Z]) {
      (!W || Z & /*$debugPane*/
      1) && Je(
        o,
        "compact",
        /*$debugPane*/
        Q[0]
      );
    },
    i(Q) {
      W || (P(n.$$.fragment, Q), P(h.$$.fragment, Q), P(g.$$.fragment, Q), P(G.$$.fragment, Q), P(v.$$.fragment, Q), P(R.$$.fragment, Q), P(q.$$.fragment, Q), P(x.$$.fragment, Q), P(M.$$.fragment, Q), W = !0);
    },
    o(Q) {
      j(n.$$.fragment, Q), j(h.$$.fragment, Q), j(g.$$.fragment, Q), j(G.$$.fragment, Q), j(v.$$.fragment, Q), j(R.$$.fragment, Q), j(q.$$.fragment, Q), j(x.$$.fragment, Q), j(M.$$.fragment, Q), W = !1;
    },
    d(Q) {
      Q && $(t), A(n), A(h), A(g), A(G), A(v), A(R), A(q), A(x), A(M);
    }
  };
}
const ao = () => {
}, so = () => {
};
function oo(l, t, n) {
  let a, s, o, d, c;
  re(l, ia, (O) => n(11, a = O)), re(l, Q2, (O) => n(0, s = O)), re(l, lt, (O) => n(12, o = O)), re(l, gr, (O) => n(13, d = O)), re(l, t2, (O) => n(14, c = O)), rl(async () => {
    as(), lt.subscribe((O) => {
      console.log(O);
    }), na();
  });
  const f = (O) => {
    t2.set(!c);
  }, h = (O) => {
    window.Module.requestFullscreen(!0, !1);
  }, p = (O) => {
    const U = document.getElementById("canvas");
    U && U.toBlob(function(q) {
      const T = new ClipboardItem({ "image/png": q });
      navigator.clipboard.write([T]).then(() => {
        Z2.set("Copied to clipboard !"), setTimeout(
          () => {
            Z2.set(null);
          },
          4e3
        );
      }).catch(() => {
      });
    });
  }, g = (O) => {
    const U = document.getElementById("canvas");
    if (U) {
      const q = document.createElement("a");
      q.href = U.toDataURL("image/png"), q.download = "ClassPad_Screen.png", q.click();
    }
  }, w = (O) => {
    d || (gr.set(!0), I2.set(null), window.Module.ccall("dumpOneFrame", null, [], []));
  }, G = (O) => {
    console.log("doRefresh !!"), d || gr.set(!0), I2.set(null), window.Module.ccall("dumpOneFrame", null, [], []);
  }, k = (O) => {
    (o === "loaded" || o === "ready") && (ei.set(!0), window.Module.ccall("setTrace", null, ["number"], [1]), v()), s || Q2.set(!0);
  }, v = async (O) => {
    let U = Bi(si);
    if (U) {
      lt.set("running");
      try {
        window.Module.ccall("startInterpreter", null, ["string"], [U]);
      } catch (q) {
        L2.set(q), lt.set("crashed");
      }
    } else
      lt.set("crashed"), L2.set({
        name: "INVALID_FILE_NAME",
        message: "fileName is empty"
      });
  }, S = async (O) => {
    console.log(O.detail), lt.set("loading");
    var U = O.detail.target.files[0];
    if (U) {
      let q = `/fls0/${U.name}`;
      es(U, q).then(() => {
        console.log(q), si.set(q), a ? v() : lt.set("loaded");
      }).catch((T) => {
        console.error("Error loading file:", T);
      });
    }
  };
  let { ide: R = !0 } = t;
  return l.$$set = (O) => {
    "ide" in O && n(10, R = O.ide);
  }, [
    s,
    f,
    h,
    p,
    g,
    w,
    G,
    k,
    v,
    S,
    R
  ];
}
class co extends K {
  constructor(t) {
    super(), V(this, t, oo, io, I, { ide: 10 });
  }
}
window.sdk_call = (l, t, n) => {
  let a = (l >>> 0).toString(16).padStart(8, "0"), s = (t >>> 0).toString(16).padStart(8, "0");
  console.log(`[SDK.JS] - (slow SysCall emulator) - GOT PC: ${a} - To PR ${s}. Check it here: https://github.com/search?q=repo%3AClasspadDev%2Fhollyhock-3+${a}&type=code`), console.debug("-- Registers : "), console.debug(n.map((d) => (d >>> 0).toString(16).toUpperCase()));
  let o = l >>> 0;
  debugger;
  if (wi[o] != null)
    return wi[o](l, n);
  debugger;
  return t >>> 0;
};
const fo = (l, t) => t[4], wi = {
  80057854: fo
};
window.Module = window.Module || {};
new co({
  target: document.getElementById("app"),
  props: {
    ide: !1
  }
});
//# sourceMappingURL=ruk.js.map
