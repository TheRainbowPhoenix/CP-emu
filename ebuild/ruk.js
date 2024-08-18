var si = Object.defineProperty;
var ci = (i, l, n) => l in i ? si(i, l, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[l] = n;
var H2 = (i, l, n) => ci(i, typeof l != "symbol" ? l + "" : l, n);
(function() {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload"))
    return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    a(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const c of s.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && a(c);
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
function m() {
}
function di(i, l) {
  for (const n in l) i[n] = l[n];
  return (
    /** @type {T & S} */
    i
  );
}
function ti(i) {
  return i();
}
function V2() {
  return /* @__PURE__ */ Object.create(null);
}
function il(i) {
  i.forEach(ti);
}
function ei(i) {
  return typeof i == "function";
}
function L(i, l) {
  return i != i ? l == l : i !== l || i && typeof i == "object" || typeof i == "function";
}
function fi(i) {
  return Object.keys(i).length === 0;
}
function ri(i, ...l) {
  if (i == null) {
    for (const a of l)
      a(void 0);
    return m;
  }
  const n = i.subscribe(...l);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function pi(i) {
  let l;
  return ri(i, (n) => l = n)(), l;
}
function Ar(i, l, n) {
  i.$$.on_destroy.push(ri(l, n));
}
function hi(i, l, n, a) {
  if (i) {
    const o = li(i, l, n, a);
    return i[0](o);
  }
}
function li(i, l, n, a) {
  return i[1] && a ? di(n.ctx.slice(), i[1](a(l))) : n.ctx;
}
function ui(i, l, n, a) {
  if (i[2] && a) {
    const o = i[2](a(n));
    if (l.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const s = [], c = Math.max(l.dirty.length, o.length);
      for (let d = 0; d < c; d += 1)
        s[d] = l.dirty[d] | o[d];
      return s;
    }
    return l.dirty | o;
  }
  return l.dirty;
}
function gi(i, l, n, a, o, s) {
  if (o) {
    const c = li(l, n, a, s);
    i.p(c, o);
  }
}
function vi(i) {
  if (i.ctx.length > 32) {
    const l = [], n = i.ctx.length / 32;
    for (let a = 0; a < n; a++)
      l[a] = -1;
    return l;
  }
  return -1;
}
function e(i, l) {
  i.appendChild(l);
}
function z(i, l, n) {
  i.insertBefore(l, n || null);
}
function U(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function yi(i, l) {
  for (let n = 0; n < i.length; n += 1)
    i[n] && i[n].d(l);
}
function w(i) {
  return document.createElement(i);
}
function r(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function $t(i) {
  return document.createTextNode(i);
}
function M() {
  return $t(" ");
}
function E2() {
  return $t("");
}
function Bt(i, l, n, a) {
  return i.addEventListener(l, n, a), () => i.removeEventListener(l, n, a);
}
function xi(i) {
  return function(l) {
    return l.preventDefault(), i.call(this, l);
  };
}
function t(i, l, n) {
  n == null ? i.removeAttribute(l) : i.getAttribute(l) !== n && i.setAttribute(l, n);
}
function h(i, l, n) {
  i.setAttributeNS("http://www.w3.org/1999/xlink", l, n);
}
function mi(i) {
  return Array.from(i.childNodes);
}
function D2(i, l) {
  l = "" + l, i.data !== l && (i.data = /** @type {string} */
  l);
}
function v(i, l, n, a) {
  n == null ? i.style.removeProperty(l) : i.style.setProperty(l, n, "");
}
function O2(i, l, n) {
  i.classList.toggle(l, !!n);
}
function bi(i, l, { bubbles: n = !1, cancelable: a = !1 } = {}) {
  return new CustomEvent(i, { detail: l, bubbles: n, cancelable: a });
}
let Vn;
function An(i) {
  Vn = i;
}
function K2() {
  if (!Vn) throw new Error("Function called outside component initialization");
  return Vn;
}
function P2(i) {
  K2().$$.on_mount.push(i);
}
function qi(i) {
  K2().$$.on_destroy.push(i);
}
function ni() {
  const i = K2();
  return (l, n, { cancelable: a = !1 } = {}) => {
    const o = i.$$.callbacks[l];
    if (o) {
      const s = bi(
        /** @type {string} */
        l,
        n,
        { cancelable: a }
      );
      return o.slice().forEach((c) => {
        c.call(i, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function ki(i, l) {
  const n = i.$$.callbacks[l.type];
  n && n.slice().forEach((a) => a.call(this, l));
}
const Yl = [], Fn = [];
let Al = [];
const F2 = [], wi = /* @__PURE__ */ Promise.resolve();
let Q2 = !1;
function Gi() {
  Q2 || (Q2 = !0, wi.then(ii));
}
function B2(i) {
  Al.push(i);
}
const R2 = /* @__PURE__ */ new Set();
let Kl = 0;
function ii() {
  if (Kl !== 0)
    return;
  const i = Vn;
  do {
    try {
      for (; Kl < Yl.length; ) {
        const l = Yl[Kl];
        Kl++, An(l), _i(l.$$);
      }
    } catch (l) {
      throw Yl.length = 0, Kl = 0, l;
    }
    for (An(null), Yl.length = 0, Kl = 0; Fn.length; ) Fn.pop()();
    for (let l = 0; l < Al.length; l += 1) {
      const n = Al[l];
      R2.has(n) || (R2.add(n), n());
    }
    Al.length = 0;
  } while (Yl.length);
  for (; F2.length; )
    F2.pop()();
  Q2 = !1, R2.clear(), An(i);
}
function _i(i) {
  if (i.fragment !== null) {
    i.update(), il(i.before_update);
    const l = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, l), i.after_update.forEach(B2);
  }
}
function Ui(i) {
  const l = [], n = [];
  Al.forEach((a) => i.indexOf(a) === -1 ? l.push(a) : n.push(a)), n.forEach((a) => a()), Al = l;
}
const $2 = /* @__PURE__ */ new Set();
let nl;
function zi() {
  nl = {
    r: 0,
    c: [],
    p: nl
    // parent group
  };
}
function Si() {
  nl.r || il(nl.c), nl = nl.p;
}
function C(i, l) {
  i && i.i && ($2.delete(i), i.i(l));
}
function E(i, l, n, a) {
  if (i && i.o) {
    if ($2.has(i)) return;
    $2.add(i), nl.c.push(() => {
      $2.delete(i), a && (n && i.d(1), a());
    }), i.o(l);
  } else a && a();
}
function T2(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function B(i) {
  i && i.c();
}
function R(i, l, n) {
  const { fragment: a, after_update: o } = i.$$;
  a && a.m(l, n), B2(() => {
    const s = i.$$.on_mount.map(ti).filter(ei);
    i.$$.on_destroy ? i.$$.on_destroy.push(...s) : il(s), i.$$.on_mount = [];
  }), o.forEach(B2);
}
function D(i, l) {
  const n = i.$$;
  n.fragment !== null && (Ui(n.after_update), il(n.on_destroy), n.fragment && n.fragment.d(l), n.on_destroy = n.fragment = null, n.ctx = []);
}
function $i(i, l) {
  i.$$.dirty[0] === -1 && (Yl.push(i), Gi(), i.$$.dirty.fill(0)), i.$$.dirty[l / 31 | 0] |= 1 << l % 31;
}
function Y(i, l, n, a, o, s, c = null, d = [-1]) {
  const p = Vn;
  An(i);
  const f = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: m,
    not_equal: o,
    bound: V2(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(l.context || (p ? p.$$.context : [])),
    // everything else
    callbacks: V2(),
    dirty: d,
    skip_bound: !1,
    root: l.target || p.$$.root
  };
  c && c(f.root);
  let G = !1;
  if (f.ctx = n ? n(i, l.props || {}, (y, S, ..._) => {
    const x = _.length ? _[0] : S;
    return f.ctx && o(f.ctx[y], f.ctx[y] = x) && (!f.skip_bound && f.bound[y] && f.bound[y](x), G && $i(i, y)), S;
  }) : [], f.update(), G = !0, il(f.before_update), f.fragment = a ? a(f.ctx) : !1, l.target) {
    if (l.hydrate) {
      const y = mi(l.target);
      f.fragment && f.fragment.l(y), y.forEach(U);
    } else
      f.fragment && f.fragment.c();
    l.intro && C(i.$$.fragment), R(i, l.target, l.anchor), ii();
  }
  An(p);
}
class A {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    H2(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    H2(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    D(this, 1), this.$destroy = m;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(l, n) {
    if (!ei(n))
      return m;
    const a = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return a.push(n), () => {
      const o = a.indexOf(n);
      o !== -1 && a.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(l) {
    this.$$set && !fi(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
}
const Oi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Oi);
const Mi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3clinearGradient%20id='g'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.1'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='h'%3e%3cstop%20offset='0'%20stop-color='%23eb5e06'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.3'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='.2'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.3'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%3e%3cstop%20offset='0'%20stop-color='%23eb8403'/%3e%3cstop%20offset='1'%20stop-color='%23eb8403'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23a'%20id='i'%20x1='12'%20x2='18.8'%20y1='4'%20y2='15.8'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23b'%20id='j'%20x1='20.6'%20x2='14'%20y1='12.3'%20y2='16'%20gradientTransform='rotate(180%2012%20526.2)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23c'%20id='l'%20x1='7'%20x2='11.3'%20y1='1038'%20y2='1042.2'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23d'%20id='k'%20x1='18'%20x2='14.8'%20y1='1039.3'%20y2='1039.3'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='n'%20x1='6'%20x2='10.2'%20y1='1038'%20y2='1042.1'%20gradientTransform='rotate(180%2012%201040.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23f'%20id='m'%20x1='7.5'%20x2='18.2'%20y1='8.8'%20y2='11.7'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23g'%20id='o'%20x1='7.5'%20x2='21.2'%20y1='8.8'%20y2='12.5'%20gradientTransform='translate(0%201028.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23h'%20id='p'%20x1='6.6'%20x2='15.9'%20y1='1038.8'%20y2='1044.5'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='q'%20x1='31.4'%20x2='59.3'%20y1='1037.7'%20y2='1037.7'%20gradientUnits='userSpaceOnUse'/%3e%3c/defs%3e%3cpath%20fill='%23fe9e01'%20d='M2%2012c0-1.4%203.8-8%205-8.7a24%2024%200%200%201%2010%200c1.2.7%205%207.3%205%208.7%200%201.4-3.8%208-5%208.7a24%2024%200%200%201-10%200C5.8%2020%202%2013.4%202%2012z'/%3e%3cpath%20fill='none'%20d='M18%2012a15%2015%200%200%201-3%205.2c-.7.4-5.3.4-6%200A15%2015%200%200%201%206%2012a15%2015%200%200%201%203-5.2c.7-.4%205.3-.4%206%200%20.7.4%203%204.4%203%205.2z'/%3e%3cpath%20fill='url(%23i)'%20fill-rule='evenodd'%20d='M12%202.8a19.6%2019.6%200%200%200-3.7.3c1.7.1%204.3%201%205.5%202A30.3%2030.3%200%200%201%2018%2012c0%201-2.2%204.8-3%205.3l2%203.4a24%2024%200%200%200%205-8.6c0-1.4-3.8-8-5-8.7-.6-.3-2.8-.5-5-.5z'/%3e%3cpath%20fill='url(%23j)'%20fill-rule='evenodd'%20d='M12%201049.6a19.6%2019.6%200%200%200%203.7-.4c-1.7%200-4.3-1-5.5-2a30.3%2030.3%200%200%201-4.2-6.8c0-.9%202.2-4.7%203-5.2l-2-3.5a24%2024%200%200%200-5%208.7c0%201.4%203.8%208%205%208.6.6.4%202.8.6%205%20.6z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23k)'%20d='M18%201040.4a16%2016%200%200%201-3%205.2c-.7.4-5.3.4-6%200a16%2016%200%200%201-3-5.2c0-.9%202.3-4.8%203-5.2.7-.5%205.3-.5%206%200%20.7.4%203%204.3%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23l)'%20d='M9%201035.2c-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23m)'%20d='M9%206.8c-.8.5-3%204.4-3%205.2a30.3%2030.3%200%200%200%202.2%204.3c.7%201.1%201.4%202%202%202.5%201.2%201.1%203.8%202%205.5%202h1l.3-.1c1.2-.7%205-7.3%205-8.7l-4-.1v.1a15%2015%200%200%201-3%205.2%2015%2015%200%200%201-3-5.2%2015%2015%200%200%200-3-5.2z'/%3e%3cpath%20fill='url(%23n)'%20d='M15%201045.6c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23o)'%20stroke='url(%23p)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-opacity='.3'%20stroke-width='.1'%20d='M18%201040.2h0v.2a16%2016%200%200%201-3%205.2%2016%2016%200%200%201-3-5.2c0-.9-2.3-4.8-3-5.2h0s0%200%200%200c-.8.5-3%204.3-3%205.2a30.3%2030.3%200%200%200%202.2%204.3s0%200%200%200%200%200%200%200c.7%201%201.4%202%202%202.5%201.2%201%203.8%202%205.5%202h1l.3-.2'%20transform='translate(0%20-1028.4)'/%3e%3cg%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20fill='%23252127'%20d='M38.5%201038.7q0%20.7-.4%201.3l-.5.7-.7.5-.6.4%202.7%205.4h-2.6l-2.4-5.3h-2.6v5.3H29v-13.4h6.3q1%200%201.6.5l.7.6.5.6q.4.6.4%201.4v2zm-2.3%200v-2.1q-.4-.7-.8-.8h-4v3.7h4l.4-.3.4-.5z'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3cpath%20fill='url(%23q)'%20fill-rule='evenodd'%20d='M31.4%201035.8v3.7h25.9l2-3.7h-28z'%20transform='translate(0%20-1028.4)'/%3e%3cg%20fill='%23252127'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20d='M50.3%201047H48l-.1-.5q-1%20.6-1.4.6h-1.7q-1%200-1.7-.4-.6-.5-1-1.1-.4-.6-.4-1.4v-6.9H44v7l.8.7h1.7l.6-.3.7-.6v-6.8h2.3v7.7l.2%202z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20d='M63.2%201047h-2.9l-4.7-5.6h-.2v5.6H53v-13.4h2.4v5.6h.2l2.4-2.8q1.5-2%202.3-2.8h2.9l-5.6%206.7%202.5%203%203.1%203.7z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3c/svg%3e";
function Ci(i) {
  let l;
  return {
    c() {
      l = w("div"), l.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" class="svelte-rvpkcl"><defs><filter id="blur"><feGaussianBlur stdDeviation="12"></feGaussianBlur></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad" class="svelte-rvpkcl"><stop stop-color="hsl(105, 69%, 40%)" stop-opacity="1" offset="0%" class="svelte-rvpkcl"></stop><stop stop-color="hsl(105, 69%, 60%)" stop-opacity="1" offset="100%" class="svelte-rvpkcl"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round" filter="url(#blur)"><path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="1.00"></path><path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.96"></path><path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.92"></path><path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.89"></path><path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.85"></path><path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.81"></path><path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.77"></path><path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.73"></path><path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.70"></path><path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.66"></path><path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.62"></path><path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.58"></path><path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.54"></path><path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.51"></path><path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.47"></path><path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.43"></path><path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.39"></path><path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.35"></path><path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.32"></path><path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.28"></path><path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.24"></path><path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.20"></path><path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.16"></path><path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.13"></path><path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.09"></path></g></svg>', t(l, "class", "bg-img svelte-rvpkcl");
    },
    m(n, a) {
      z(n, l, a);
    },
    p: m,
    i: m,
    o: m,
    d(n) {
      n && U(l);
    }
  };
}
class Ei extends A {
  constructor(l) {
    super(), Y(this, l, null, Ci, L, {});
  }
}
function ji() {
  var i = document.createElement("script");
  i.setAttribute("async", ""), i.setAttribute("type", "text/javascript"), i.setAttribute("src", "calcemu.js"), document.body.appendChild(i);
}
function Hi(i) {
  let l;
  return {
    c() {
      l = w("div"), l.innerHTML = "", t(l, "id", "buttons");
    },
    m(n, a) {
      z(n, l, a);
    },
    p: m,
    i: m,
    o: m,
    d(n) {
      n && U(l);
    }
  };
}
class Ri extends A {
  constructor(l) {
    super(), Y(this, l, null, Hi, L, {});
  }
}
const Pl = [];
function D0(i, l = m) {
  let n;
  const a = /* @__PURE__ */ new Set();
  function o(d) {
    if (L(i, d) && (i = d, n)) {
      const p = !Pl.length;
      for (const f of a)
        f[1](), Pl.push(f, i);
      if (p) {
        for (let f = 0; f < Pl.length; f += 2)
          Pl[f][0](Pl[f + 1]);
        Pl.length = 0;
      }
    }
  }
  function s(d) {
    o(d(i));
  }
  function c(d, p = m) {
    const f = [d, p];
    return a.add(f), a.size === 1 && (n = l(o, s) || m), d(i), () => {
      a.delete(f), a.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: s, subscribe: c };
}
const Yr = D0("empty"), I2 = D0(null), Di = D0(!1), M2 = D0(""), ai = D0(!1), Vl = D0(!1), C2 = D0(null), L2 = D0(null);
function Qi(i) {
  let l, n, a;
  return {
    c() {
      l = r("svg"), n = r("path"), a = r("path"), t(n, "fill", "currentColor"), t(n, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      z(o, l, s), e(l, n), e(l, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && U(l);
    }
  };
}
class Bi extends A {
  constructor(l) {
    super(), Y(this, l, null, Qi, L, {});
  }
}
function N2(i) {
  let l, n, a, o, s, c, d = (
    /*$traceback*/
    i[2].name + ""
  ), p, f, G, y = (
    /*$traceback*/
    i[2].message + ""
  ), S, _, x;
  return n = new Bi({}), {
    c() {
      l = w("div"), B(n.$$.fragment), a = M(), o = w("pre"), s = $t("            "), c = w("code"), p = $t(d), f = $t(`\r
            `), G = w("code"), S = $t(y), _ = $t(`\r
        `), t(c, "class", "name svelte-s5x38s"), t(G, "class", "message svelte-s5x38s"), t(o, "class", "svelte-s5x38s"), t(l, "class", "bsod svelte-s5x38s");
    },
    m(q, b) {
      z(q, l, b), R(n, l, null), e(l, a), e(l, o), e(o, s), e(o, c), e(c, p), e(o, f), e(o, G), e(G, S), e(o, _), x = !0;
    },
    p(q, b) {
      (!x || b & /*$traceback*/
      4) && d !== (d = /*$traceback*/
      q[2].name + "") && D2(p, d), (!x || b & /*$traceback*/
      4) && y !== (y = /*$traceback*/
      q[2].message + "") && D2(S, y);
    },
    i(q) {
      x || (C(n.$$.fragment, q), x = !0);
    },
    o(q) {
      E(n.$$.fragment, q), x = !1;
    },
    d(q) {
      q && U(l), D(n);
    }
  };
}
function Li(i) {
  let l, n, a, o, s, c, d = (
    /*crashed*/
    i[1] && N2(i)
  );
  return {
    c() {
      l = w("canvas"), n = M(), d && d.c(), a = E2(), t(l, "class", "emscripten svelte-s5x38s"), t(l, "id", "canvas"), t(l, "tabindex", "-1");
    },
    m(p, f) {
      z(p, l, f), i[5](l), z(p, n, f), d && d.m(p, f), z(p, a, f), o = !0, s || (c = Bt(l, "contextmenu", xi(
        /*contextmenu_handler*/
        i[4]
      )), s = !0);
    },
    p(p, [f]) {
      /*crashed*/
      p[1] ? d ? (d.p(p, f), f & /*crashed*/
      2 && C(d, 1)) : (d = N2(p), d.c(), C(d, 1), d.m(a.parentNode, a)) : d && (zi(), E(d, 1, 1, () => {
        d = null;
      }), Si());
    },
    i(p) {
      o || (C(d), o = !0);
    },
    o(p) {
      E(d), o = !1;
    },
    d(p) {
      p && (U(l), U(n), U(a)), i[5](null), d && d.d(p), s = !1, c();
    }
  };
}
function Ki(i, l, n) {
  let a, o, s;
  Ar(i, Yr, (f) => n(3, o = f)), Ar(i, M2, (f) => n(2, s = f));
  let c;
  P2(() => {
    window.Module.canvas = c, c.addEventListener(
      "webglcontextlost",
      (f) => {
        alert("WebGL context lost. You will need to reload the page."), f.preventDefault();
      },
      !1
    );
  });
  function d(f) {
    ki.call(this, i, f);
  }
  function p(f) {
    Fn[f ? "unshift" : "push"](() => {
      c = f, n(0, c);
    });
  }
  return i.$$.update = () => {
    i.$$.dirty & /*$state*/
    8 && n(1, a = o === "crashed");
  }, [c, a, s, o, d, p];
}
class Pi extends A {
  constructor(l) {
    super(), Y(this, l, Ki, Li, L, {});
  }
}
function Yi(i) {
  let l, n, a, o, s, c, d;
  return {
    c() {
      l = w("figure"), l.innerHTML = '<div class="spinner"></div><center style="margin-top:0.5em"><strong>emscripten</strong></center>', n = M(), a = w("div"), a.textContent = "Downloading...", o = M(), s = w("div"), s.innerHTML = '<progress value="0" max="100" id="progress" hidden=""></progress>', c = M(), d = w("textarea"), v(l, "overflow", "visible"), t(l, "id", "spinner"), t(a, "class", "emscripten"), t(a, "id", "status"), t(s, "class", "emscripten"), t(d, "class", "emscripten"), t(d, "id", "output"), t(d, "rows", "8");
    },
    m(p, f) {
      z(p, l, f), z(p, n, f), z(p, a, f), z(p, o, f), z(p, s, f), z(p, c, f), z(p, d, f);
    },
    p: m,
    i: m,
    o: m,
    d(p) {
      p && (U(l), U(n), U(a), U(o), U(s), U(c), U(d));
    }
  };
}
class Ai extends A {
  constructor(l) {
    super(), Y(this, l, null, Yi, L, {});
  }
}
function Vi(i) {
  let l, n, a;
  return {
    c() {
      l = r("svg"), n = r("path"), a = r("path"), t(n, "fill", "currentColor"), t(n, "fill-rule", "evenodd"), t(n, "d", "M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22"), t(n, "clip-rule", "evenodd"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      z(o, l, s), e(l, n), e(l, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && U(l);
    }
  };
}
class Fi extends A {
  constructor(l) {
    super(), Y(this, l, null, Vi, L, {});
  }
}
function Ti(i) {
  let l, n, a, o;
  return {
    c() {
      l = r("svg"), n = r("path"), a = r("path"), o = r("path"), t(n, "fill", "currentColor"), t(n, "d", "M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"), t(a, "clip-rule", "evenodd"), t(o, "fill", "currentColor"), t(o, "d", "m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859"), t(o, "opacity", "0.4"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(s, c) {
      z(s, l, c), e(l, n), e(l, a), e(l, o);
    },
    p: m,
    i: m,
    o: m,
    d(s) {
      s && U(l);
    }
  };
}
class Ii extends A {
  constructor(l) {
    super(), Y(this, l, null, Ti, L, {});
  }
}
function Ni(i) {
  let l, n, a;
  return {
    c() {
      l = r("svg"), n = r("path"), a = r("path"), t(n, "fill", "currentColor"), t(n, "d", "M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06"), t(a, "clip-rule", "evenodd"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      z(o, l, s), e(l, n), e(l, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && U(l);
    }
  };
}
class Zi extends A {
  constructor(l) {
    super(), Y(this, l, null, Ni, L, {});
  }
}
function Xi(i) {
  let l, n, a, o, s;
  return {
    c() {
      l = r("svg"), n = r("path"), a = r("path"), o = r("path"), s = r("path"), t(n, "fill", "currentColor"), t(n, "fill-rule", "evenodd"), t(n, "d", "M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938"), t(n, "clip-rule", "evenodd"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06q.333.684.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a4 4 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"), t(o, "fill", "currentColor"), t(o, "d", "M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z"), t(o, "opacity", "0.5"), t(s, "fill", "currentColor"), t(s, "fill-rule", "evenodd"), t(s, "d", "M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75"), t(s, "clip-rule", "evenodd"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24"), t(l, "class", "svelte-1v14ixl"), O2(
        l,
        "active",
        /*active*/
        i[0]
      );
    },
    m(c, d) {
      z(c, l, d), e(l, n), e(l, a), e(l, o), e(l, s);
    },
    p(c, [d]) {
      d & /*active*/
      1 && O2(
        l,
        "active",
        /*active*/
        c[0]
      );
    },
    i: m,
    o: m,
    d(c) {
      c && U(l);
    }
  };
}
function Wi(i, l, n) {
  let { active: a = !1 } = l;
  return i.$$set = (o) => {
    "active" in o && n(0, a = o.active);
  }, [a];
}
class Ji extends A {
  constructor(l) {
    super(), Y(this, l, Wi, Xi, L, { active: 0 });
  }
}
function ta(i) {
  let l, n, a, o, s, c;
  return {
    c() {
      l = r("svg"), n = r("g"), a = r("path"), o = r("path"), s = r("path"), c = r("path"), t(a, "d", "M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"), t(a, "opacity", "0.5"), t(o, "stroke-linecap", "round"), t(o, "stroke-linejoin", "round"), t(o, "d", "M12.429 10L11 12h2l-1.429 2"), t(s, "d", "M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"), t(c, "stroke-linecap", "round"), t(c, "d", "M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"), t(c, "opacity", "0.5"), t(n, "fill", "none"), t(n, "stroke", "currentColor"), t(n, "stroke-width", "1.5"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(d, p) {
      z(d, l, p), e(l, n), e(n, a), e(n, o), e(n, s), e(n, c);
    },
    p: m,
    i: m,
    o: m,
    d(d) {
      d && U(l);
    }
  };
}
class ea extends A {
  constructor(l) {
    super(), Y(this, l, null, ta, L, {});
  }
}
function ra(i) {
  let l, n, a;
  return {
    c() {
      l = r("svg"), n = r("path"), a = r("path"), t(n, "fill", "currentColor"), t(n, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0"), t(a, "clip-rule", "evenodd"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      z(o, l, s), e(l, n), e(l, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && U(l);
    }
  };
}
class la extends A {
  constructor(l) {
    super(), Y(this, l, null, ra, L, {});
  }
}
function na(i) {
  let l, n, a;
  return {
    c() {
      l = r("svg"), n = r("path"), a = r("path"), t(n, "fill", "currentColor"), t(n, "fill-rule", "evenodd"), t(n, "d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"), t(n, "clip-rule", "evenodd"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      z(o, l, s), e(l, n), e(l, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && U(l);
    }
  };
}
class ia extends A {
  constructor(l) {
    super(), Y(this, l, null, na, L, {});
  }
}
function aa(i) {
  let l, n, a, o, s;
  const c = (
    /*#slots*/
    i[4].default
  ), d = hi(
    c,
    i,
    /*$$scope*/
    i[3],
    null
  );
  return {
    c() {
      l = w("div"), n = w("div"), a = M(), d && d.c(), t(n, "class", "tip svelte-hgj5m"), t(l, "class", o = "popover " + /*visible*/
      (i[0] ? "visible" : "") + " svelte-hgj5m"), v(
        l,
        "--x",
        /*position*/
        i[2].x + "px"
      ), v(
        l,
        "--y",
        /*position*/
        i[2].y + "px"
      );
    },
    m(p, f) {
      z(p, l, f), e(l, n), e(l, a), d && d.m(l, null), i[5](l), s = !0;
    },
    p(p, [f]) {
      d && d.p && (!s || f & /*$$scope*/
      8) && gi(
        d,
        c,
        p,
        /*$$scope*/
        p[3],
        s ? ui(
          c,
          /*$$scope*/
          p[3],
          f,
          null
        ) : vi(
          /*$$scope*/
          p[3]
        ),
        null
      ), (!s || f & /*visible*/
      1 && o !== (o = "popover " + /*visible*/
      (p[0] ? "visible" : "") + " svelte-hgj5m")) && t(l, "class", o), (!s || f & /*position*/
      4) && v(
        l,
        "--x",
        /*position*/
        p[2].x + "px"
      ), (!s || f & /*position*/
      4) && v(
        l,
        "--y",
        /*position*/
        p[2].y + "px"
      );
    },
    i(p) {
      s || (C(d, p), s = !0);
    },
    o(p) {
      E(d, p), s = !1;
    },
    d(p) {
      p && U(l), d && d.d(p), i[5](null);
    }
  };
}
function oa(i, l, n) {
  let { $$slots: a = {}, $$scope: o } = l, s, { visible: c = !1 } = l, d, p = { x: 0, y: 0 };
  P2(() => {
    if (s = d.parentElement, s) {
      const G = s.getBoundingClientRect(), y = d.getBoundingClientRect();
      n(2, p = {
        x: G.left + window.scrollX,
        y: G.top + window.scrollY
        // + (rect.height - popoverRect.height) / 2
      }), p.x + y.width > window.innerWidth ? n(2, p.x -= y.width, p) : n(2, p.x += G.width, p);
    }
  });
  function f(G) {
    Fn[G ? "unshift" : "push"](() => {
      d = G, n(1, d);
    });
  }
  return i.$$set = (G) => {
    "visible" in G && n(0, c = G.visible), "$$scope" in G && n(3, o = G.$$scope);
  }, [c, d, p, o, a, f];
}
class S2 extends A {
  constructor(l) {
    super(), Y(this, l, oa, aa, L, { visible: 0 });
  }
}
function sa(i) {
  let l;
  return {
    c() {
      l = $t("Start by picking a BIN program");
    },
    m(n, a) {
      z(n, l, a);
    },
    d(n) {
      n && U(l);
    }
  };
}
function ca(i) {
  let l;
  return {
    c() {
      l = $t(
        /*$copyScreenFeedback*/
        i[5]
      );
    },
    m(n, a) {
      z(n, l, a);
    },
    p(n, a) {
      a & /*$copyScreenFeedback*/
      32 && D2(
        l,
        /*$copyScreenFeedback*/
        n[5]
      );
    },
    d(n) {
      n && U(l);
    }
  };
}
function da(i) {
  let l;
  return {
    c() {
      l = $t("Check why it crashed here");
    },
    m(n, a) {
      z(n, l, a);
    },
    d(n) {
      n && U(l);
    }
  };
}
function fa(i) {
  let l;
  return {
    c() {
      l = $t("Now let's start the program");
    },
    m(n, a) {
      z(n, l, a);
    },
    d(n) {
      n && U(l);
    }
  };
}
function pa(i) {
  let l, n, a, o, s, c, d, p, f, G, y, S, _, x, q, b, Q, K, j, V, O, g, $, Ot, P, Mt, Q0, Lt, ae, Vr, I, Z, Vt, Kt, oe, B0, Pt, Ft, X, Yt, Ct, Fr, Tr;
  return a = new S2({
    props: {
      visible: (
        /*loadHint*/
        i[4]
      ),
      $$slots: { default: [sa] },
      $$scope: { ctx: i }
    }
  }), s = new Fi({}), S = new S2({
    props: {
      visible: (
        /*$copyScreenFeedback*/
        i[5] !== null
      ),
      $$slots: { default: [ca] },
      $$scope: { ctx: i }
    }
  }), x = new Ii({}), Q = new Zi({}), g = new Ji({ props: { active: (
    /*$debugging*/
    i[6]
  ) } }), Mt = new S2({
    props: {
      visible: (
        /*crashedHint*/
        i[1] && !/*$tracing*/
        i[7]
      ),
      $$slots: { default: [da] },
      $$scope: { ctx: i }
    }
  }), Lt = new ea({}), Z = new S2({
    props: {
      visible: (
        /*loaded*/
        i[3]
      ),
      $$slots: { default: [fa] },
      $$scope: { ctx: i }
    }
  }), Kt = new ia({}), Yt = new la({}), {
    c() {
      l = w("div"), n = w("button"), B(a.$$.fragment), o = M(), B(s.$$.fragment), c = M(), d = w("input"), p = M(), f = w("div"), G = M(), y = w("button"), B(S.$$.fragment), _ = M(), B(x.$$.fragment), q = M(), b = w("button"), B(Q.$$.fragment), K = M(), j = w("div"), V = M(), O = w("button"), B(g.$$.fragment), Ot = M(), P = w("button"), B(Mt.$$.fragment), Q0 = M(), B(Lt.$$.fragment), Vr = M(), I = w("button"), B(Z.$$.fragment), Vt = M(), B(Kt.$$.fragment), B0 = M(), Pt = w("div"), Ft = M(), X = w("button"), B(Yt.$$.fragment), t(d, "type", "file"), t(d, "id", "fileInput"), v(d, "display", "none"), t(n, "class", "toolbar-action"), t(n, "type", "button"), t(n, "tabindex", "0"), t(n, "id", "btn_pickFile"), t(f, "class", "separator"), t(f, "role", "separator"), t(f, "data-orientation", "horizontal"), t(f, "aria-orientation", "horizontal"), t(y, "class", "toolbar-action"), t(y, "type", "button"), t(y, "tabindex", "0"), t(y, "id", "btn_copyScreen"), t(b, "class", "toolbar-action"), t(b, "type", "button"), t(b, "tabindex", "0"), t(b, "id", "btn_saveScreen"), t(j, "class", "separator"), t(j, "role", "separator"), t(j, "data-orientation", "horizontal"), t(j, "aria-orientation", "horizontal"), t(O, "class", "toolbar-action"), t(O, "type", "button"), t(O, "tabindex", "0"), t(O, "id", "btn_debug"), O.disabled = $ = !/*loaded*/
      i[3], t(P, "class", "toolbar-action"), t(P, "type", "button"), t(P, "tabindex", "0"), t(P, "id", "btn_dump"), P.disabled = ae = !1, t(I, "class", "toolbar-action"), t(I, "type", "button"), t(I, "tabindex", "0"), t(I, "id", "btn_run"), I.disabled = oe = !/*loaded*/
      i[3], t(Pt, "class", "separator"), t(Pt, "role", "separator"), t(Pt, "data-orientation", "horizontal"), t(Pt, "aria-orientation", "horizontal"), t(X, "class", "toolbar-action"), t(X, "type", "button"), t(X, "tabindex", "0"), t(X, "id", "btn_fullscreen"), t(l, "class", "toolbar");
    },
    m(k, H) {
      z(k, l, H), e(l, n), R(a, n, null), e(n, o), R(s, n, null), e(n, c), e(n, d), i[17](d), e(l, p), e(l, f), e(l, G), e(l, y), R(S, y, null), e(y, _), R(x, y, null), e(l, q), e(l, b), R(Q, b, null), e(l, K), e(l, j), e(l, V), e(l, O), R(g, O, null), e(l, Ot), e(l, P), R(Mt, P, null), e(P, Q0), R(Lt, P, null), e(l, Vr), e(l, I), R(Z, I, null), e(I, Vt), R(Kt, I, null), e(l, B0), e(l, Pt), e(l, Ft), e(l, X), R(Yt, X, null), Ct = !0, Fr || (Tr = [
        Bt(
          d,
          "change",
          /*handleFile*/
          i[9]
        ),
        Bt(
          n,
          "click",
          /*pickFile*/
          i[8]
        ),
        Bt(
          y,
          "click",
          /*doCopyScreen*/
          i[10]
        ),
        Bt(
          b,
          "click",
          /*doSaveScreen*/
          i[11]
        ),
        Bt(
          O,
          "click",
          /*doDebug*/
          i[15]
        ),
        Bt(
          P,
          "click",
          /*doDump*/
          i[14]
        ),
        Bt(
          I,
          "click",
          /*doRun*/
          i[12]
        ),
        Bt(
          X,
          "click",
          /*doFullscreen*/
          i[13]
        )
      ], Fr = !0);
    },
    p(k, [H]) {
      const se = {};
      H & /*loadHint*/
      16 && (se.visible = /*loadHint*/
      k[4]), H & /*$$scope*/
      1048576 && (se.$$scope = { dirty: H, ctx: k }), a.$set(se);
      const Ir = {};
      H & /*$copyScreenFeedback*/
      32 && (Ir.visible = /*$copyScreenFeedback*/
      k[5] !== null), H & /*$$scope, $copyScreenFeedback*/
      1048608 && (Ir.$$scope = { dirty: H, ctx: k }), S.$set(Ir);
      const L0 = {};
      H & /*$debugging*/
      64 && (L0.active = /*$debugging*/
      k[6]), g.$set(L0), (!Ct || H & /*loaded*/
      8 && $ !== ($ = !/*loaded*/
      k[3])) && (O.disabled = $);
      const ce = {};
      H & /*crashedHint, $tracing*/
      130 && (ce.visible = /*crashedHint*/
      k[1] && !/*$tracing*/
      k[7]), H & /*$$scope*/
      1048576 && (ce.$$scope = { dirty: H, ctx: k }), Mt.$set(ce), (!Ct || H & /*loaded, crashed*/
      9 && ae !== (ae = !1)) && (P.disabled = ae);
      const Nr = {};
      H & /*loaded*/
      8 && (Nr.visible = /*loaded*/
      k[3]), H & /*$$scope*/
      1048576 && (Nr.$$scope = { dirty: H, ctx: k }), Z.$set(Nr), (!Ct || H & /*loaded*/
      8 && oe !== (oe = !/*loaded*/
      k[3])) && (I.disabled = oe);
    },
    i(k) {
      Ct || (C(a.$$.fragment, k), C(s.$$.fragment, k), C(S.$$.fragment, k), C(x.$$.fragment, k), C(Q.$$.fragment, k), C(g.$$.fragment, k), C(Mt.$$.fragment, k), C(Lt.$$.fragment, k), C(Z.$$.fragment, k), C(Kt.$$.fragment, k), C(Yt.$$.fragment, k), Ct = !0);
    },
    o(k) {
      E(a.$$.fragment, k), E(s.$$.fragment, k), E(S.$$.fragment, k), E(x.$$.fragment, k), E(Q.$$.fragment, k), E(g.$$.fragment, k), E(Mt.$$.fragment, k), E(Lt.$$.fragment, k), E(Z.$$.fragment, k), E(Kt.$$.fragment, k), E(Yt.$$.fragment, k), Ct = !1;
    },
    d(k) {
      k && U(l), D(a), D(s), i[17](null), D(S), D(x), D(Q), D(g), D(Mt), D(Lt), D(Z), D(Kt), D(Yt), Fr = !1, il(Tr);
    }
  };
}
function ha(i, l, n) {
  let a, o, s, c, d, p, f;
  Ar(i, Yr, (g) => n(16, c = g)), Ar(i, L2, (g) => n(5, d = g)), Ar(i, ai, (g) => n(6, p = g)), Ar(i, Vl, (g) => n(7, f = g));
  const G = () => {
    S.click();
  };
  let y = !1, S;
  const _ = ni(), x = (g) => {
    _("romChanged", g);
  }, q = (g) => {
    _("doCopyScreen", g);
  }, b = (g) => {
    _("doSaveScreen", g);
  }, Q = (g) => {
    _("doRun", g);
  }, K = (g) => {
    _("doFullscreen", g);
  }, j = (g) => {
    _("doDump", g);
  }, V = (g) => {
    _("doDebug", g);
  };
  function O(g) {
    Fn[g ? "unshift" : "push"](() => {
      S = g, n(2, S);
    });
  }
  return i.$$.update = () => {
    i.$$.dirty & /*$state*/
    65536 && n(4, a = c === "empty"), i.$$.dirty & /*$state*/
    65536 && n(3, o = c === "loaded"), i.$$.dirty & /*$state*/
    65536 && n(0, s = c === "crashed"), i.$$.dirty & /*crashed*/
    1 && s && (n(1, y = !0), setTimeout(
      () => {
        n(1, y = !1);
      },
      4e3
    )), i.$$.dirty & /*$state*/
    65536;
  }, [
    s,
    y,
    S,
    o,
    a,
    d,
    p,
    f,
    G,
    x,
    q,
    b,
    Q,
    K,
    j,
    V,
    c,
    O
  ];
}
class ua extends A {
  constructor(l) {
    super(), Y(this, l, ha, pa, L, {});
  }
}
function ga(i) {
  let l, n, a, o;
  return {
    c() {
      l = r("svg"), n = r("g"), a = r("path"), o = r("path"), t(a, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"), t(a, "opacity", "0.5"), t(o, "stroke-linecap", "round"), t(o, "d", "m14.5 9.5l-5 5m0-5l5 5"), t(n, "fill", "none"), t(n, "stroke", "currentColor"), t(n, "stroke-width", "1.5"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(s, c) {
      z(s, l, c), e(l, n), e(n, a), e(n, o);
    },
    p: m,
    i: m,
    o: m,
    d(s) {
      s && U(l);
    }
  };
}
class va extends A {
  constructor(l) {
    super(), Y(this, l, null, ga, L, {});
  }
}
function ya(i) {
  let l, n, a;
  return {
    c() {
      l = r("svg"), n = r("path"), a = r("path"), t(n, "fill", "currentColor"), t(n, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), t(n, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M12.01 5.25a6.59 6.59 0 0 0-6.55 5.833H5a.75.75 0 0 0-.53 1.281l1.168 1.167a.75.75 0 0 0 1.06 0l1.169-1.167a.75.75 0 0 0-.53-1.28h-.364A5.09 5.09 0 0 1 12.01 6.75a5.08 5.08 0 0 1 3.838 1.743a.75.75 0 1 0 1.13-.986A6.58 6.58 0 0 0 12.01 5.25m6.352 5.22a.75.75 0 0 0-1.06 0l-1.168 1.166a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-3.839-1.743a.75.75 0 0 0-1.13.987a6.58 6.58 0 0 0 4.969 2.256a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      z(o, l, s), e(l, n), e(l, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && U(l);
    }
  };
}
class xa extends A {
  constructor(l) {
    super(), Y(this, l, null, ya, L, {});
  }
}
function ma(i) {
  let l, n, a;
  return {
    c() {
      l = r("g"), n = r("path"), a = r("path"), t(n, "d", "M22 5.814v.69c0 1.038 0 1.557-.26 1.987s-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281s-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69"), t(a, "d", "M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815"), t(a, "opacity", "0.5"), t(l, "fill", "none"), t(l, "stroke", "currentColor"), t(l, "stroke-width", "1.5");
    },
    m(o, s) {
      z(o, l, s), e(l, n), e(l, a);
    },
    d(o) {
      o && U(l);
    }
  };
}
function ba(i) {
  let l, n;
  return {
    c() {
      l = r("path"), n = r("path"), t(l, "fill", "currentColor"), t(l, "fill-rule", "evenodd"), t(l, "d", "M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3"), t(l, "clip-rule", "evenodd"), t(n, "fill", "currentColor"), t(n, "d", "M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988"), t(n, "opacity", "0.5");
    },
    m(a, o) {
      z(a, l, o), z(a, n, o);
    },
    d(a) {
      a && (U(l), U(n));
    }
  };
}
function qa(i) {
  let l;
  function n(s, c) {
    return (
      /*on*/
      s[0] ? ba : ma
    );
  }
  let a = n(i), o = a(i);
  return {
    c() {
      l = r("svg"), o.c(), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "width", "1em"), t(l, "height", "1em"), t(l, "viewBox", "0 0 24 24");
    },
    m(s, c) {
      z(s, l, c), o.m(l, null);
    },
    p(s, [c]) {
      a !== (a = n(s)) && (o.d(1), o = a(s), o && (o.c(), o.m(l, null)));
    },
    i: m,
    o: m,
    d(s) {
      s && U(l), o.d();
    }
  };
}
function ka(i, l, n) {
  let { on: a = !1 } = l;
  return i.$$set = (o) => {
    "on" in o && n(0, a = o.on);
  }, [a];
}
class wa extends A {
  constructor(l) {
    super(), Y(this, l, ka, qa, L, { on: 0 });
  }
}
function Z2(i, l, n) {
  const a = i.slice();
  a[11] = l[n], a[14] = n;
  const o = (
    /*registers_names*/
    a[3][
      /*i*/
      a[14]
    ] || "r" + /*i*/
    a[14].toString(16)
  );
  return a[12] = o, a;
}
function Ga(i) {
  let l;
  return {
    c() {
      l = w("p"), l.textContent = "Loading ...";
    },
    m(n, a) {
      z(n, l, a);
    },
    p: m,
    d(n) {
      n && U(l);
    }
  };
}
function _a(i) {
  let l = (
    /*filtered*/
    i[1]
  ), n, a = J2(i);
  return {
    c() {
      a.c(), n = E2();
    },
    m(o, s) {
      a.m(o, s), z(o, n, s);
    },
    p(o, s) {
      s & /*filtered*/
      2 && L(l, l = /*filtered*/
      o[1]) ? (a.d(1), a = J2(o), a.c(), a.m(n.parentNode, n)) : a.p(o, s);
    },
    d(o) {
      o && U(n), a.d(o);
    }
  };
}
function X2(i) {
  let l, n, a = (
    /*label*/
    i[12] + ""
  ), o, s, c, d, p;
  return {
    c() {
      l = w("div"), n = w("label"), o = $t(a), s = M(), c = w("input"), p = M(), t(n, "for", "reg_" + /*i*/
      i[14]), t(
        n,
        "title",
        /*label*/
        i[12]
      ), t(n, "class", "svelte-dimq2z"), t(c, "type", "text"), t(c, "name", "reg_" + /*i*/
      i[14]), c.value = d = /*reg*/
      i[11].toString(16).toUpperCase(), c.readOnly = !0, t(c, "class", "svelte-dimq2z"), t(l, "class", "row svelte-dimq2z");
    },
    m(f, G) {
      z(f, l, G), e(l, n), e(n, o), e(l, s), e(l, c), e(l, p);
    },
    p(f, G) {
      G & /*dump*/
      1 && d !== (d = /*reg*/
      f[11].toString(16).toUpperCase()) && c.value !== d && (c.value = d);
    },
    d(f) {
      f && U(l);
    }
  };
}
function W2(i) {
  let l = !/*filtered*/
  i[1] || /*filtered_names*/
  i[4].includes(
    /*label*/
    i[12]
  ), n, a = l && X2(i);
  return {
    c() {
      a && a.c(), n = E2();
    },
    m(o, s) {
      a && a.m(o, s), z(o, n, s);
    },
    p(o, s) {
      s & /*filtered*/
      2 && (l = !/*filtered*/
      o[1] || /*filtered_names*/
      o[4].includes(
        /*label*/
        o[12]
      )), l ? a ? a.p(o, s) : (a = X2(o), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
    },
    d(o) {
      o && U(n), a && a.d(o);
    }
  };
}
function J2(i) {
  let l, n = T2(
    /*dump*/
    i[0].registers
  ), a = [];
  for (let o = 0; o < n.length; o += 1)
    a[o] = W2(Z2(i, n, o));
  return {
    c() {
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      l = E2();
    },
    m(o, s) {
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(o, s);
      z(o, l, s);
    },
    p(o, s) {
      if (s & /*dump, registers_names, filtered, filtered_names*/
      27) {
        n = T2(
          /*dump*/
          o[0].registers
        );
        let c;
        for (c = 0; c < n.length; c += 1) {
          const d = Z2(o, n, c);
          a[c] ? a[c].p(d, s) : (a[c] = W2(d), a[c].c(), a[c].m(l.parentNode, l));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = n.length;
      }
    },
    d(o) {
      o && U(l), yi(a, o);
    }
  };
}
function Ua(i) {
  let l, n, a, o, s, c, d, p, f, G, y, S, _, x, q, b, Q, K;
  c = new wa({ props: { on: (
    /*filtered*/
    i[1]
  ) } }), f = new xa({}), S = new va({});
  function j(g, $) {
    return (
      /*dump*/
      g[0] ? _a : Ga
    );
  }
  let V = j(i), O = V(i);
  return {
    c() {
      l = w("div"), n = w("div"), a = w("h4"), a.textContent = "Registers", o = M(), s = w("button"), B(c.$$.fragment), d = M(), p = w("button"), B(f.$$.fragment), G = M(), y = w("button"), B(S.$$.fragment), _ = M(), x = w("div"), q = w("div"), O.c(), t(a, "class", "header svelte-dimq2z"), t(s, "class", "toolbar-action"), t(s, "type", "button"), t(s, "tabindex", "0"), t(s, "id", "btn_filter_trace"), t(p, "class", "toolbar-action"), t(p, "type", "button"), t(p, "tabindex", "0"), t(p, "id", "btn_refresh_trace"), t(y, "class", "toolbar-action"), t(y, "type", "button"), t(y, "tabindex", "0"), t(y, "id", "btn_close_trace"), t(n, "class", "titlebar"), t(q, "class", "registers svelte-dimq2z"), t(x, "class", "content-panel svelte-dimq2z"), t(l, "class", "tracing-panel svelte-dimq2z"), O2(
        l,
        "visible",
        /*$tracing*/
        i[2]
      );
    },
    m(g, $) {
      z(g, l, $), e(l, n), e(n, a), e(n, o), e(n, s), R(c, s, null), e(n, d), e(n, p), R(f, p, null), e(n, G), e(n, y), R(S, y, null), e(l, _), e(l, x), e(x, q), O.m(q, null), b = !0, Q || (K = [
        Bt(
          s,
          "click",
          /*doFilter*/
          i[5]
        ),
        Bt(
          p,
          "click",
          /*doRefresh*/
          i[6]
        ),
        Bt(
          y,
          "click",
          /*doClose*/
          i[7]
        )
      ], Q = !0);
    },
    p(g, [$]) {
      const Ot = {};
      $ & /*filtered*/
      2 && (Ot.on = /*filtered*/
      g[1]), c.$set(Ot), V === (V = j(g)) && O ? O.p(g, $) : (O.d(1), O = V(g), O && (O.c(), O.m(q, null))), (!b || $ & /*$tracing*/
      4) && O2(
        l,
        "visible",
        /*$tracing*/
        g[2]
      );
    },
    i(g) {
      b || (C(c.$$.fragment, g), C(f.$$.fragment, g), C(S.$$.fragment, g), b = !0);
    },
    o(g) {
      E(c.$$.fragment, g), E(f.$$.fragment, g), E(S.$$.fragment, g), b = !1;
    },
    d(g) {
      g && U(l), D(c), D(f), D(S), O.d(), Q = !1, il(K);
    }
  };
}
function za(i, l, n) {
  let a;
  Ar(i, Vl, (_) => n(2, a = _)), Array.from({ length: 23 }, (_, x) => ({
    label: `Label are very long now ${x + 1}`,
    value: `${x.toString(16).padStart(8, "0")}`
  }));
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
  ], c = null;
  const d = C2.subscribe((_) => {
    n(0, c = _);
  });
  qi(() => {
    d();
  });
  let p = !0;
  const f = (_) => {
    n(1, p = !p);
  }, G = ni();
  return [
    c,
    p,
    a,
    o,
    s,
    f,
    (_) => {
      G("doRefresh", _);
    },
    (_) => {
      G("doClose", _), Vl.set(!1);
    }
  ];
}
class Sa extends A {
  constructor(l) {
    super(), Y(this, l, za, Ua, L, {});
  }
}
function $a(i, l, n) {
  var a = new FileReader();
  a.onload = function(o) {
    if (o.target && o.target.result) {
      var s = new Uint8Array(o.target.result);
      window.Module.FS.analyzePath(l).exists && window.Module.FS.unlink(l), window.Module.FS.createDataFile("/", l, s, !0, !0), console.log(`${l} loaded into the Emscripten filesystem.`), n(null);
    } else
      n("target is empty");
  }, a.onerror = function(o) {
    n(o);
  }, a.readAsArrayBuffer(i);
}
function Oa(i, l) {
  return new Promise((n, a) => {
    $a(i, l, (o) => {
      o ? a(o) : n(() => {
      });
    });
  });
}
function Ma(i) {
  let l, n, a, o, s, c, d, p, f, G, y, S, _, x, q, b, Q, K, j, V, O, g, $, Ot, P, Mt, Q0, Lt, ae, Vr, I, Z, Vt, Kt, oe, B0, Pt, Ft, X, Yt, Ct, Fr, Tr, k, H, se, Ir, L0, ce, Nr, Tn, Fl, In, Tl, al, Il, Nl, Zl, ol, Xl, Wl, Jl, K0, Nn, Zn, Xn, Wn, Zr, Jn, t2, e2, r2, l2, tn, n2, en, P0, i2, a2, o2, rn, sl, s2, ln, nn, cl, c2, an, on, sn, d2, cn, dn, f2, fn, dl, p2, pn, h2, Tt, u2, g2, v2, y2, x2, m2, b2, de, fe, pe, he, ue, ge, ve, ye, xe, me, be, qe, ke, we, Ge, _e, Ue, ze, Se, $e, Oe, Me, Ce, Ee, je, He, Re, De, Qe, Be, Le, Ke, Pe, Ye, Ae, Ve, Fe, Te, Ie, Ne, Ze, Xe, We, Je, t1, e1, r1, l1, n1, i1, a1, o1, s1, c1, d1, f1, p1, h1, u1, g1, v1, y1, x1, m1, It, Nt, Zt, b1, q1, k1, w1, G1, _1, U1, z1, S1, $1, O1, M1, C1, E1, j1, H1, R1, D1, Q1, B1, L1, K1, P1, Y1, A1, V1, F1, T1, I1, N1, Z1, X1, W1, J1, Et, Y0, hn, un, tr, N, fl, gn, pl, A0, jt, Ht, Rt, Dt, Xt, Wt, Jt, Xr, W, er, vn, q2, k2, w2, Wr, G2, u, yn, xn, mn, hl, ul, V0, J, rr, bn, Jr, tt, lr, qn, t0, et, nr, kn, e0, rt, ir, wn, r0, lt, ar, Gn, l0, nt, or, _n, n0, it, sr, Un, i0, at, cr, zn, a0, ot, dr, Sn, o0, st, fr, $n, s0, ct, pr, On, c0, dt, hr, Mn, d0, ft, ur, Cn, f0, pt, gr, En, p0, ht, vr, jn, h0, ut, yr, Hn, u0, gt, xr, Rn, _2, U2, z2, mr, br, qr, kr, Qt, te, ee, re, Dn, F0, vt, wr, T0, yt, Gr, I0, xt, _r, N0, mt, Ur, Z0, bt, zr, X0, qt, Sr, W0, kt, $r, J0, wt, Or, le, tl, Gt, Mr, el, _t, Cr, rl, Ut, Er, ll, zt, jr, gl, g0, vl, Hr, St, v0, Y2, A2, yl, y0, xl, x0, ml, m0, bl, b0, ql, q0, kl, k0, wl, w0, Gl, G0, _l, _0, Ul, Rr, Qn, At, zl, Dr, Sl, U0, $l, z0, Ol, S0, Ml, Qr, Cl, Br, El, Lr, jl, $0, Hl, O0, Rl, M0, Dl, C0, Ql, E0, Bl, j0, H0, Kr, R0, Pr, F, T, Ll, Bn, Ln, ne, Kn, Pn, Yn, ie;
  return {
    c() {
      l = r("svg"), n = r("defs"), a = r("linearGradient"), o = r("stop"), s = r("stop"), c = r("stop"), d = r("stop"), p = r("linearGradient"), f = r("stop"), G = r("stop"), y = r("stop"), S = r("stop"), _ = r("stop"), x = r("linearGradient"), q = r("stop"), b = r("stop"), Q = r("stop"), K = r("stop"), j = r("linearGradient"), V = r("stop"), O = r("stop"), g = r("stop"), $ = r("stop"), Ot = r("stop"), P = r("linearGradient"), Mt = r("stop"), Q0 = r("stop"), Lt = r("stop"), ae = r("stop"), Vr = r("linearGradient"), I = r("stop"), Z = r("stop"), Vt = r("linearGradient"), Kt = r("stop"), oe = r("stop"), B0 = r("stop"), Pt = r("stop"), Ft = r("linearGradient"), X = r("stop"), Yt = r("stop"), Ct = r("stop"), Fr = r("stop"), Tr = r("linearGradient"), k = r("stop"), H = r("stop"), se = r("linearGradient"), Ir = r("stop"), L0 = r("stop"), ce = r("linearGradient"), Nr = r("stop"), Tn = r("stop"), Fl = r("linearGradient"), In = r("stop"), Tl = r("stop"), al = r("linearGradient"), Il = r("stop"), Nl = r("stop"), Zl = r("stop"), ol = r("linearGradient"), Xl = r("stop"), Wl = r("stop"), Jl = r("stop"), K0 = r("linearGradient"), Nn = r("stop"), Zn = r("stop"), Xn = r("stop"), Wn = r("stop"), Zr = r("linearGradient"), Jn = r("stop"), t2 = r("stop"), e2 = r("stop"), r2 = r("stop"), l2 = r("stop"), tn = r("linearGradient"), n2 = r("stop"), en = r("stop"), P0 = r("linearGradient"), i2 = r("stop"), a2 = r("stop"), o2 = r("stop"), rn = r("stop"), sl = r("linearGradient"), s2 = r("stop"), ln = r("stop"), nn = r("stop"), cl = r("linearGradient"), c2 = r("stop"), an = r("stop"), on = r("stop"), sn = r("linearGradient"), d2 = r("stop"), cn = r("stop"), dn = r("linearGradient"), f2 = r("stop"), fn = r("stop"), dl = r("linearGradient"), p2 = r("stop"), pn = r("stop"), h2 = r("stop"), Tt = r("linearGradient"), u2 = r("stop"), g2 = r("stop"), v2 = r("stop"), y2 = r("stop"), x2 = r("stop"), m2 = r("stop"), b2 = r("stop"), de = r("linearGradient"), fe = r("linearGradient"), pe = r("linearGradient"), he = r("linearGradient"), ue = r("linearGradient"), ge = r("linearGradient"), ve = r("linearGradient"), ye = r("linearGradient"), xe = r("linearGradient"), me = r("linearGradient"), be = r("linearGradient"), qe = r("linearGradient"), ke = r("linearGradient"), we = r("linearGradient"), Ge = r("linearGradient"), _e = r("linearGradient"), Ue = r("linearGradient"), ze = r("linearGradient"), Se = r("linearGradient"), $e = r("linearGradient"), Oe = r("linearGradient"), Me = r("linearGradient"), Ce = r("linearGradient"), Ee = r("linearGradient"), je = r("linearGradient"), He = r("linearGradient"), Re = r("linearGradient"), De = r("linearGradient"), Qe = r("linearGradient"), Be = r("linearGradient"), Le = r("linearGradient"), Ke = r("linearGradient"), Pe = r("linearGradient"), Ye = r("linearGradient"), Ae = r("linearGradient"), Ve = r("linearGradient"), Fe = r("linearGradient"), Te = r("linearGradient"), Ie = r("linearGradient"), Ne = r("linearGradient"), Ze = r("linearGradient"), Xe = r("linearGradient"), We = r("linearGradient"), Je = r("linearGradient"), t1 = r("linearGradient"), e1 = r("linearGradient"), r1 = r("linearGradient"), l1 = r("linearGradient"), n1 = r("linearGradient"), i1 = r("linearGradient"), a1 = r("linearGradient"), o1 = r("linearGradient"), s1 = r("linearGradient"), c1 = r("linearGradient"), d1 = r("linearGradient"), f1 = r("linearGradient"), p1 = r("linearGradient"), h1 = r("linearGradient"), u1 = r("linearGradient"), g1 = r("linearGradient"), v1 = r("linearGradient"), y1 = r("linearGradient"), x1 = r("linearGradient"), m1 = r("linearGradient"), It = r("linearGradient"), Nt = r("linearGradient"), Zt = r("linearGradient"), b1 = r("linearGradient"), q1 = r("linearGradient"), k1 = r("linearGradient"), w1 = r("linearGradient"), G1 = r("linearGradient"), _1 = r("linearGradient"), U1 = r("linearGradient"), z1 = r("linearGradient"), S1 = r("linearGradient"), $1 = r("linearGradient"), O1 = r("linearGradient"), M1 = r("linearGradient"), C1 = r("linearGradient"), E1 = r("linearGradient"), j1 = r("linearGradient"), H1 = r("linearGradient"), R1 = r("linearGradient"), D1 = r("linearGradient"), Q1 = r("linearGradient"), B1 = r("linearGradient"), L1 = r("linearGradient"), K1 = r("linearGradient"), P1 = r("linearGradient"), Y1 = r("linearGradient"), A1 = r("linearGradient"), V1 = r("linearGradient"), F1 = r("linearGradient"), T1 = r("linearGradient"), I1 = r("linearGradient"), N1 = r("linearGradient"), Z1 = r("linearGradient"), X1 = r("linearGradient"), W1 = r("linearGradient"), J1 = r("linearGradient"), Et = r("pattern"), Y0 = r("rect"), hn = r("path"), un = r("path"), tr = r("linearGradient"), N = r("g"), fl = r("path"), gn = r("path"), pl = r("path"), A0 = r("path"), jt = r("rect"), Ht = r("rect"), Rt = r("rect"), Dt = r("rect"), Xt = r("rect"), Wt = r("rect"), Jt = r("rect"), Xr = r("g"), W = r("rect"), er = r("rect"), vn = r("path"), q2 = r("mask"), k2 = r("path"), w2 = r("g"), Wr = r("foreignObject"), G2 = w("div"), G2.innerHTML = '<canvas width="320" height="528" style="width: 320px; height: 528px"></canvas>', u = r("g"), yn = r("path"), xn = r("path"), mn = r("path"), hl = r("path"), ul = r("path"), V0 = r("g"), J = r("rect"), rr = r("rect"), bn = r("path"), Jr = r("g"), tt = r("rect"), lr = r("rect"), qn = r("path"), t0 = r("g"), et = r("rect"), nr = r("rect"), kn = r("path"), e0 = r("g"), rt = r("rect"), ir = r("rect"), wn = r("path"), r0 = r("g"), lt = r("rect"), ar = r("rect"), Gn = r("path"), l0 = r("g"), nt = r("rect"), or = r("rect"), _n = r("path"), n0 = r("g"), it = r("rect"), sr = r("rect"), Un = r("path"), i0 = r("g"), at = r("rect"), cr = r("rect"), zn = r("path"), a0 = r("g"), ot = r("rect"), dr = r("rect"), Sn = r("path"), o0 = r("g"), st = r("rect"), fr = r("rect"), $n = r("path"), s0 = r("g"), ct = r("rect"), pr = r("rect"), On = r("path"), c0 = r("g"), dt = r("rect"), hr = r("rect"), Mn = r("path"), d0 = r("g"), ft = r("rect"), ur = r("rect"), Cn = r("path"), f0 = r("g"), pt = r("rect"), gr = r("rect"), En = r("path"), p0 = r("g"), ht = r("rect"), vr = r("rect"), jn = r("path"), h0 = r("g"), ut = r("rect"), yr = r("rect"), Hn = r("path"), u0 = r("g"), gt = r("rect"), xr = r("rect"), Rn = r("path"), _2 = r("path"), U2 = r("path"), z2 = r("path"), mr = r("rect"), br = r("rect"), qr = r("rect"), kr = r("path"), Qt = r("rect"), te = r("path"), ee = r("path"), re = r("path"), Dn = r("path"), F0 = r("g"), vt = r("rect"), wr = r("rect"), T0 = r("g"), yt = r("rect"), Gr = r("rect"), I0 = r("g"), xt = r("rect"), _r = r("rect"), N0 = r("g"), mt = r("rect"), Ur = r("rect"), Z0 = r("g"), bt = r("rect"), zr = r("rect"), X0 = r("g"), qt = r("rect"), Sr = r("rect"), W0 = r("g"), kt = r("rect"), $r = r("rect"), J0 = r("g"), wt = r("rect"), Or = r("rect"), le = r("rect"), tl = r("g"), Gt = r("rect"), Mr = r("rect"), el = r("g"), _t = r("rect"), Cr = r("rect"), rl = r("g"), Ut = r("rect"), Er = r("rect"), ll = r("g"), zt = r("rect"), jr = r("rect"), gl = r("g"), g0 = r("path"), vl = r("g"), Hr = r("path"), St = r("text"), v0 = r("tspan"), Y2 = $t("xyz"), A2 = M(), yl = r("g"), y0 = r("path"), xl = r("g"), x0 = r("path"), ml = r("g"), m0 = r("path"), bl = r("g"), b0 = r("path"), ql = r("g"), q0 = r("path"), kl = r("g"), k0 = r("path"), wl = r("g"), w0 = r("path"), Gl = r("g"), G0 = r("path"), _l = r("g"), _0 = r("path"), Ul = r("g"), Rr = r("path"), Qn = r("path"), At = r("path"), zl = r("g"), Dr = r("path"), Sl = r("g"), U0 = r("path"), $l = r("g"), z0 = r("path"), Ol = r("g"), S0 = r("path"), Ml = r("g"), Qr = r("path"), Cl = r("g"), Br = r("path"), El = r("g"), Lr = r("path"), jl = r("g"), $0 = r("path"), Hl = r("g"), O0 = r("path"), Rl = r("g"), M0 = r("path"), Dl = r("g"), C0 = r("path"), Ql = r("g"), E0 = r("path"), Bl = r("g"), j0 = r("path"), H0 = r("g"), Kr = r("path"), R0 = r("g"), Pr = r("path"), F = r("path"), T = r("path"), Ll = r("path"), Bn = r("path"), Ln = r("path"), ne = r("rect"), Kn = r("path"), Pn = r("path"), Yn = r("path"), ie = r("rect"), t(o, "offset", "0"), t(o, "stop-color", "#3b3b3b"), t(s, "offset", ".1"), t(s, "stop-color", "#282828"), t(c, "offset", ".2"), t(c, "stop-color", "#282828"), t(d, "offset", "1"), t(d, "stop-color", "#272727"), t(a, "id", "x"), t(f, "offset", "0"), t(f, "stop-color", "#99b0df"), t(G, "offset", ".1"), t(G, "stop-color", "#7396de"), t(y, "offset", ".3"), t(y, "stop-color", "#4171d2"), t(S, "offset", ".9"), t(S, "stop-color", "#1f3d79"), t(_, "offset", "1"), t(_, "stop-color", "#173166"), t(p, "id", "l"), t(q, "offset", "0"), t(q, "stop-color", "#2b60cd"), t(b, "offset", ".5"), t(b, "stop-color", "#295fcc"), t(Q, "offset", ".8"), t(Q, "stop-color", "#3c73e3"), t(K, "offset", "1"), t(K, "stop-color", "#4279e8"), t(x, "id", "m"), t(V, "offset", "0"), t(V, "stop-color", "#ececec"), t(O, "offset", ".1"), t(O, "stop-color", "#ededed"), t(g, "offset", ".3"), t(g, "stop-color", "#ddd"), t($, "offset", ".9"), t($, "stop-color", "#b0b0b0"), t(Ot, "offset", "1"), t(Ot, "stop-color", "#9c9c9c"), t(j, "id", "v"), t(Mt, "offset", "0"), t(Mt, "stop-color", "#e7e7e7"), t(Q0, "offset", ".5"), t(Q0, "stop-color", "#f8f8f8"), t(Lt, "offset", ".8"), t(Lt, "stop-color", "#fff"), t(ae, "offset", "1"), t(ae, "stop-color", "#fbfbfb"), t(P, "id", "w"), t(I, "offset", "0"), t(I, "stop-color", "#cdcdcd"), t(I, "stop-opacity", ".4"), t(Z, "offset", "1"), t(Z, "stop-color", "#cdcdcd"), t(Z, "stop-opacity", "0"), t(Vr, "id", "u"), t(Kt, "offset", "0"), t(Kt, "stop-color", "#d1d1d1"), t(oe, "offset", ".4"), t(oe, "stop-color", "#c2c2c2"), t(B0, "offset", ".7"), t(B0, "stop-color", "#6b6b6b"), t(Pt, "offset", "1"), t(Pt, "stop-color", "#616161"), t(Vt, "id", "t"), t(X, "offset", "0"), t(X, "stop-color", "#a8a8a8"), t(Yt, "offset", ".3"), t(Yt, "stop-color", "#b2b2b2"), t(Ct, "offset", ".8"), t(Ct, "stop-color", "#dadada"), t(Fr, "offset", "1"), t(Fr, "stop-color", "#ccc"), t(Ft, "id", "s"), t(k, "offset", "0"), t(k, "stop-color", "#252525"), t(H, "offset", "1"), t(H, "stop-color", "#363636"), t(Tr, "id", "r"), t(Ir, "offset", "0"), t(Ir, "stop-color", "#f7f7f7"), t(L0, "offset", "1"), t(L0, "stop-color", "#535353"), t(se, "id", "q"), t(Nr, "offset", "0"), t(Nr, "stop-color", "#909090"), t(Tn, "offset", "1"), t(Tn, "stop-color", "#2d2d2d"), t(ce, "id", "p"), t(In, "offset", "0"), t(In, "stop-color", "#313131"), t(Tl, "offset", "1"), t(Tl, "stop-color", "#3a3a3a"), t(Tl, "stop-opacity", "0"), t(Fl, "id", "o"), t(Il, "offset", "0"), t(Il, "stop-color", "#c6c6c6"), t(Il, "stop-opacity", ".4"), t(Nl, "offset", ".4"), t(Nl, "stop-color", "#a2a2a2"), t(Nl, "stop-opacity", ".1"), t(Zl, "offset", "1"), t(Zl, "stop-color", "#a2a2a2"), t(Zl, "stop-opacity", "0"), t(al, "id", "n"), t(Xl, "offset", "0"), t(Xl, "stop-color", "#c6c6c6"), t(Xl, "stop-opacity", ".4"), t(Wl, "offset", ".7"), t(Wl, "stop-color", "#a2a2a2"), t(Wl, "stop-opacity", ".1"), t(Jl, "offset", "1"), t(Jl, "stop-color", "#a2a2a2"), t(Jl, "stop-opacity", "0"), t(ol, "id", "k"), t(Nn, "offset", "0"), t(Nn, "stop-color", "#2e2e2e"), t(Zn, "offset", ".5"), t(Zn, "stop-color", "#2d2d2d"), t(Xn, "offset", ".8"), t(Xn, "stop-color", "#393939"), t(Wn, "offset", "1"), t(Wn, "stop-color", "#3d3d3d"), t(K0, "id", "j"), t(Jn, "offset", "0"), t(Jn, "stop-color", "#464646"), t(t2, "offset", ".1"), t(t2, "stop-color", "#393939"), t(e2, "offset", ".3"), t(e2, "stop-color", "#2c2c2c"), t(r2, "offset", ".9"), t(r2, "stop-color", "#202020"), t(l2, "offset", "1"), t(l2, "stop-color", "#242424"), t(Zr, "id", "i"), t(n2, "offset", "0"), t(n2, "stop-color", "#1e7999"), t(en, "offset", "1"), t(en, "stop-color", "#1d7998"), t(en, "stop-opacity", "0"), t(tn, "id", "h"), t(i2, "offset", "0"), t(i2, "stop-color", "#3a3a3a"), t(a2, "offset", ".3"), t(a2, "stop-color", "#414141"), t(o2, "offset", ".6"), t(o2, "stop-color", "#464646"), t(rn, "offset", "1"), t(rn, "stop-color", "#4b4b4b"), t(rn, "stop-opacity", "0"), t(P0, "id", "g"), t(s2, "offset", "0"), t(s2, "stop-color", "#313131"), t(ln, "offset", ".4"), t(ln, "stop-color", "#3a3a3a"), t(ln, "stop-opacity", ".6"), t(nn, "offset", "1"), t(nn, "stop-color", "#3a3a3a"), t(nn, "stop-opacity", "0"), t(sl, "id", "f"), t(c2, "offset", "0"), t(c2, "stop-color", "#3a3a3a"), t(an, "offset", ".4"), t(an, "stop-color", "#3a3a3a"), t(an, "stop-opacity", ".6"), t(on, "offset", "1"), t(on, "stop-color", "#3a3a3a"), t(on, "stop-opacity", "0"), t(cl, "id", "e"), t(d2, "offset", "0"), t(d2, "stop-color", "#4e4e4e"), t(cn, "offset", "1"), t(cn, "stop-color", "#4e4e4e"), t(cn, "stop-opacity", "0"), t(sn, "id", "d"), t(f2, "offset", "0"), t(f2, "stop-color", "#555"), t(fn, "offset", "1"), t(fn, "stop-color", "#424242"), t(fn, "stop-opacity", "0"), t(dn, "id", "c"), t(p2, "offset", "0"), t(p2, "stop-color", "#9c9c9c"), t(pn, "offset", ".8"), t(pn, "stop-color", "#b0b0b0"), t(pn, "stop-opacity", ".1"), t(h2, "offset", "1"), t(h2, "stop-color", "#f5f5f5"), t(dl, "id", "b"), t(u2, "offset", "0"), t(u2, "stop-color", "#b6b6b6"), t(g2, "offset", "0"), t(g2, "stop-color", "#fefefe"), t(v2, "offset", ".1"), t(v2, "stop-color", "#e7e7e7"), t(y2, "offset", ".8"), t(y2, "stop-color", "#e8e8e8"), t(x2, "offset", ".9"), t(x2, "stop-color", "#e6e6e6"), t(m2, "offset", "1"), t(m2, "stop-color", "#e1e1e1"), t(b2, "offset", "1"), t(b2, "stop-color", "#b2b2b2"), t(Tt, "id", "a"), h(de, "xlink:href", "#a"), t(de, "id", "y"), t(de, "x1", "6.5"), t(de, "x2", "641.5"), t(de, "y1", "320.4"), t(de, "y2", "320.4"), t(de, "gradientUnits", "userSpaceOnUse"), h(fe, "xlink:href", "#b"), t(fe, "id", "z"), t(fe, "x1", "9.3"), t(fe, "x2", "634"), t(fe, "y1", "-300.4"), t(fe, "y2", "1004.4"), t(fe, "gradientUnits", "userSpaceOnUse"), h(pe, "xlink:href", "#c"), t(pe, "id", "B"), t(pe, "x1", "570"), t(pe, "x2", "94.5"), t(pe, "y1", "560.4"), t(pe, "y2", "-263.2"), t(pe, "gradientUnits", "userSpaceOnUse"), h(he, "xlink:href", "#d"), t(he, "id", "C"), t(he, "x1", "570"), t(he, "x2", "498.4"), t(he, "y1", "560.4"), t(he, "y2", "293"), t(he, "gradientUnits", "userSpaceOnUse"), h(ue, "xlink:href", "#e"), t(ue, "id", "J"), t(ue, "x1", "91.3"), t(ue, "x2", "71.6"), t(ue, "y1", "978.6"), t(ue, "y2", "958.9"), t(ue, "gradientUnits", "userSpaceOnUse"), h(ge, "xlink:href", "#f"), t(ge, "id", "I"), t(ge, "x1", "504"), t(ge, "x2", "504"), t(ge, "y1", "978"), t(ge, "y2", "215.2"), t(ge, "gradientUnits", "userSpaceOnUse"), h(ve, "xlink:href", "#g"), t(ve, "id", "K"), t(ve, "x1", "544"), t(ve, "x2", "582"), t(ve, "y1", "980"), t(ve, "y2", "942"), t(ve, "gradientUnits", "userSpaceOnUse"), h(ye, "xlink:href", "#h"), t(ye, "id", "L"), t(ye, "x1", "300"), t(ye, "x2", "300"), t(ye, "y1", "44"), t(ye, "y2", "1124"), t(ye, "gradientUnits", "userSpaceOnUse"), h(xe, "xlink:href", "#i"), t(xe, "id", "M"), t(xe, "x1", "514.8"), t(xe, "x2", "583.9"), t(xe, "y1", "711.8"), t(xe, "y2", "751.7"), t(xe, "gradientUnits", "userSpaceOnUse"), h(me, "xlink:href", "#j"), t(me, "id", "N"), t(me, "x1", "549"), t(me, "x2", "549"), t(me, "y1", "713.4"), t(me, "y2", "748.4"), t(me, "gradientUnits", "userSpaceOnUse"), h(be, "xlink:href", "#k"), t(be, "id", "O"), t(be, "x1", "515"), t(be, "x2", "536.3"), t(be, "y1", "1125"), t(be, "y2", "1146.3"), t(be, "gradientUnits", "userSpaceOnUse"), h(qe, "xlink:href", "#k"), t(qe, "id", "H"), t(qe, "x1", "515"), t(qe, "x2", "536.3"), t(qe, "y1", "1125"), t(qe, "y2", "1146.3"), t(qe, "gradientUnits", "userSpaceOnUse"), h(ke, "xlink:href", "#i"), t(ke, "id", "F"), t(ke, "x1", "514.8"), t(ke, "x2", "583.9"), t(ke, "y1", "711.8"), t(ke, "y2", "751.7"), t(ke, "gradientUnits", "userSpaceOnUse"), h(we, "xlink:href", "#j"), t(we, "id", "G"), t(we, "x1", "549"), t(we, "x2", "549"), t(we, "y1", "713.4"), t(we, "y2", "748.4"), t(we, "gradientUnits", "userSpaceOnUse"), h(Ge, "xlink:href", "#k"), t(Ge, "id", "R"), t(Ge, "x1", "515"), t(Ge, "x2", "536.3"), t(Ge, "y1", "1125"), t(Ge, "y2", "1146.3"), t(Ge, "gradientUnits", "userSpaceOnUse"), h(_e, "xlink:href", "#i"), t(_e, "id", "P"), t(_e, "x1", "514.8"), t(_e, "x2", "583.9"), t(_e, "y1", "711.8"), t(_e, "y2", "751.7"), t(_e, "gradientUnits", "userSpaceOnUse"), h(Ue, "xlink:href", "#j"), t(Ue, "id", "Q"), t(Ue, "x1", "549"), t(Ue, "x2", "549"), t(Ue, "y1", "713.4"), t(Ue, "y2", "748.4"), t(Ue, "gradientUnits", "userSpaceOnUse"), h(ze, "xlink:href", "#k"), t(ze, "id", "U"), t(ze, "x1", "515"), t(ze, "x2", "536.3"), t(ze, "y1", "1125"), t(ze, "y2", "1146.3"), t(ze, "gradientUnits", "userSpaceOnUse"), h(Se, "xlink:href", "#i"), t(Se, "id", "S"), t(Se, "x1", "514.8"), t(Se, "x2", "583.9"), t(Se, "y1", "711.8"), t(Se, "y2", "751.7"), t(Se, "gradientUnits", "userSpaceOnUse"), h($e, "xlink:href", "#j"), t($e, "id", "T"), t($e, "x1", "549"), t($e, "x2", "549"), t($e, "y1", "713.4"), t($e, "y2", "748.4"), t($e, "gradientUnits", "userSpaceOnUse"), h(Oe, "xlink:href", "#k"), t(Oe, "id", "X"), t(Oe, "x1", "515"), t(Oe, "x2", "536.3"), t(Oe, "y1", "1125"), t(Oe, "y2", "1146.3"), t(Oe, "gradientUnits", "userSpaceOnUse"), h(Me, "xlink:href", "#l"), t(Me, "id", "V"), t(Me, "x1", "514.8"), t(Me, "x2", "583.9"), t(Me, "y1", "711.8"), t(Me, "y2", "751.7"), t(Me, "gradientUnits", "userSpaceOnUse"), h(Ce, "xlink:href", "#m"), t(Ce, "id", "W"), t(Ce, "x1", "549"), t(Ce, "x2", "549"), t(Ce, "y1", "713.4"), t(Ce, "y2", "748.4"), t(Ce, "gradientUnits", "userSpaceOnUse"), h(Ee, "xlink:href", "#k"), t(Ee, "id", "aa"), t(Ee, "x1", "515"), t(Ee, "x2", "536.3"), t(Ee, "y1", "1125"), t(Ee, "y2", "1146.3"), t(Ee, "gradientUnits", "userSpaceOnUse"), h(je, "xlink:href", "#i"), t(je, "id", "Y"), t(je, "x1", "514.8"), t(je, "x2", "583.9"), t(je, "y1", "711.8"), t(je, "y2", "751.7"), t(je, "gradientUnits", "userSpaceOnUse"), h(He, "xlink:href", "#j"), t(He, "id", "Z"), t(He, "x1", "549"), t(He, "x2", "549"), t(He, "y1", "713.4"), t(He, "y2", "748.4"), t(He, "gradientUnits", "userSpaceOnUse"), h(Re, "xlink:href", "#k"), t(Re, "id", "ad"), t(Re, "x1", "515"), t(Re, "x2", "536.3"), t(Re, "y1", "1125"), t(Re, "y2", "1146.3"), t(Re, "gradientUnits", "userSpaceOnUse"), h(De, "xlink:href", "#i"), t(De, "id", "ab"), t(De, "x1", "514.8"), t(De, "x2", "583.9"), t(De, "y1", "711.8"), t(De, "y2", "751.7"), t(De, "gradientUnits", "userSpaceOnUse"), h(Qe, "xlink:href", "#j"), t(Qe, "id", "ac"), t(Qe, "x1", "549"), t(Qe, "x2", "549"), t(Qe, "y1", "713.4"), t(Qe, "y2", "748.4"), t(Qe, "gradientUnits", "userSpaceOnUse"), h(Be, "xlink:href", "#k"), t(Be, "id", "ag"), t(Be, "x1", "515"), t(Be, "x2", "536.3"), t(Be, "y1", "1125"), t(Be, "y2", "1146.3"), t(Be, "gradientUnits", "userSpaceOnUse"), h(Le, "xlink:href", "#i"), t(Le, "id", "ae"), t(Le, "x1", "514.8"), t(Le, "x2", "583.9"), t(Le, "y1", "711.8"), t(Le, "y2", "751.7"), t(Le, "gradientUnits", "userSpaceOnUse"), h(Ke, "xlink:href", "#j"), t(Ke, "id", "af"), t(Ke, "x1", "549"), t(Ke, "x2", "549"), t(Ke, "y1", "713.4"), t(Ke, "y2", "748.4"), t(Ke, "gradientUnits", "userSpaceOnUse"), h(Pe, "xlink:href", "#k"), t(Pe, "id", "aj"), t(Pe, "x1", "515"), t(Pe, "x2", "536.3"), t(Pe, "y1", "1125"), t(Pe, "y2", "1146.3"), t(Pe, "gradientUnits", "userSpaceOnUse"), h(Ye, "xlink:href", "#i"), t(Ye, "id", "ah"), t(Ye, "x1", "514.8"), t(Ye, "x2", "583.9"), t(Ye, "y1", "711.8"), t(Ye, "y2", "751.7"), t(Ye, "gradientUnits", "userSpaceOnUse"), h(Ae, "xlink:href", "#j"), t(Ae, "id", "ai"), t(Ae, "x1", "549"), t(Ae, "x2", "549"), t(Ae, "y1", "713.4"), t(Ae, "y2", "748.4"), t(Ae, "gradientUnits", "userSpaceOnUse"), h(Ve, "xlink:href", "#k"), t(Ve, "id", "ay"), t(Ve, "x1", "515"), t(Ve, "x2", "536.3"), t(Ve, "y1", "1125"), t(Ve, "y2", "1146.3"), t(Ve, "gradientUnits", "userSpaceOnUse"), h(Fe, "xlink:href", "#i"), t(Fe, "id", "at"), t(Fe, "x1", "514.8"), t(Fe, "x2", "583.9"), t(Fe, "y1", "711.8"), t(Fe, "y2", "751.7"), t(Fe, "gradientUnits", "userSpaceOnUse"), h(Te, "xlink:href", "#j"), t(Te, "id", "au"), t(Te, "x1", "549"), t(Te, "x2", "549"), t(Te, "y1", "713.4"), t(Te, "y2", "748.4"), t(Te, "gradientUnits", "userSpaceOnUse"), h(Ie, "xlink:href", "#k"), t(Ie, "id", "av"), t(Ie, "x1", "515"), t(Ie, "x2", "536.3"), t(Ie, "y1", "1125"), t(Ie, "y2", "1146.3"), t(Ie, "gradientUnits", "userSpaceOnUse"), h(Ne, "xlink:href", "#i"), t(Ne, "id", "aq"), t(Ne, "x1", "514.8"), t(Ne, "x2", "583.9"), t(Ne, "y1", "711.8"), t(Ne, "y2", "751.7"), t(Ne, "gradientUnits", "userSpaceOnUse"), h(Ze, "xlink:href", "#j"), t(Ze, "id", "ar"), t(Ze, "x1", "549"), t(Ze, "x2", "549"), t(Ze, "y1", "713.4"), t(Ze, "y2", "748.4"), t(Ze, "gradientUnits", "userSpaceOnUse"), h(Xe, "xlink:href", "#k"), t(Xe, "id", "as"), t(Xe, "x1", "515"), t(Xe, "x2", "536.3"), t(Xe, "y1", "1125"), t(Xe, "y2", "1146.3"), t(Xe, "gradientUnits", "userSpaceOnUse"), h(We, "xlink:href", "#k"), t(We, "id", "ap"), t(We, "x1", "515"), t(We, "x2", "536.3"), t(We, "y1", "1125"), t(We, "y2", "1146.3"), t(We, "gradientUnits", "userSpaceOnUse"), h(Je, "xlink:href", "#i"), t(Je, "id", "ak"), t(Je, "x1", "514.8"), t(Je, "x2", "583.9"), t(Je, "y1", "711.8"), t(Je, "y2", "751.7"), t(Je, "gradientUnits", "userSpaceOnUse"), h(t1, "xlink:href", "#j"), t(t1, "id", "al"), t(t1, "x1", "549"), t(t1, "x2", "549"), t(t1, "y1", "713.4"), t(t1, "y2", "748.4"), t(t1, "gradientUnits", "userSpaceOnUse"), h(e1, "xlink:href", "#k"), t(e1, "id", "am"), t(e1, "x1", "515"), t(e1, "x2", "536.3"), t(e1, "y1", "1125"), t(e1, "y2", "1146.3"), t(e1, "gradientUnits", "userSpaceOnUse"), h(r1, "xlink:href", "#i"), t(r1, "id", "an"), t(r1, "x1", "514.8"), t(r1, "x2", "583.9"), t(r1, "y1", "711.8"), t(r1, "y2", "751.7"), t(r1, "gradientUnits", "userSpaceOnUse"), h(l1, "xlink:href", "#j"), t(l1, "id", "ao"), t(l1, "x1", "549"), t(l1, "x2", "549"), t(l1, "y1", "713.4"), t(l1, "y2", "748.4"), t(l1, "gradientUnits", "userSpaceOnUse"), h(n1, "xlink:href", "#i"), t(n1, "id", "aw"), t(n1, "x1", "514.8"), t(n1, "x2", "583.9"), t(n1, "y1", "711.8"), t(n1, "y2", "751.7"), t(n1, "gradientUnits", "userSpaceOnUse"), h(i1, "xlink:href", "#j"), t(i1, "id", "ax"), t(i1, "x1", "549"), t(i1, "x2", "549"), t(i1, "y1", "713.4"), t(i1, "y2", "748.4"), t(i1, "gradientUnits", "userSpaceOnUse"), h(a1, "xlink:href", "#n"), t(a1, "id", "aB"), t(a1, "x1", "520"), t(a1, "x2", "528.5"), t(a1, "y1", "1122"), t(a1, "y2", "1152"), t(a1, "gradientUnits", "userSpaceOnUse"), h(o1, "xlink:href", "#i"), t(o1, "id", "az"), t(o1, "x1", "514.8"), t(o1, "x2", "624"), t(o1, "y1", "711.8"), t(o1, "y2", "743.4"), t(o1, "gradientUnits", "userSpaceOnUse"), h(s1, "xlink:href", "#j"), t(s1, "id", "aA"), t(s1, "x1", "549"), t(s1, "x2", "549"), t(s1, "y1", "713.4"), t(s1, "y2", "748.4"), t(s1, "gradientUnits", "userSpaceOnUse"), h(c1, "xlink:href", "#i"), t(c1, "id", "aC"), t(c1, "x1", "514.8"), t(c1, "x2", "624"), t(c1, "y1", "711.8"), t(c1, "y2", "743.4"), t(c1, "gradientUnits", "userSpaceOnUse"), h(d1, "xlink:href", "#n"), t(d1, "id", "aE"), t(d1, "x1", "520"), t(d1, "x2", "528.5"), t(d1, "y1", "1122"), t(d1, "y2", "1152"), t(d1, "gradientUnits", "userSpaceOnUse"), h(f1, "xlink:href", "#j"), t(f1, "id", "aD"), t(f1, "x1", "549"), t(f1, "x2", "549"), t(f1, "y1", "713.4"), t(f1, "y2", "748.4"), t(f1, "gradientUnits", "userSpaceOnUse"), h(p1, "xlink:href", "#i"), t(p1, "id", "aI"), t(p1, "x1", "514.8"), t(p1, "x2", "624"), t(p1, "y1", "711.8"), t(p1, "y2", "743.4"), t(p1, "gradientUnits", "userSpaceOnUse"), h(h1, "xlink:href", "#n"), t(h1, "id", "aK"), t(h1, "x1", "520"), t(h1, "x2", "528.5"), t(h1, "y1", "1122"), t(h1, "y2", "1152"), t(h1, "gradientUnits", "userSpaceOnUse"), h(u1, "xlink:href", "#i"), t(u1, "id", "aF"), t(u1, "x1", "514.8"), t(u1, "x2", "624"), t(u1, "y1", "711.8"), t(u1, "y2", "743.4"), t(u1, "gradientUnits", "userSpaceOnUse"), h(g1, "xlink:href", "#j"), t(g1, "id", "aG"), t(g1, "x1", "549"), t(g1, "x2", "549"), t(g1, "y1", "713.4"), t(g1, "y2", "748.4"), t(g1, "gradientUnits", "userSpaceOnUse"), h(v1, "xlink:href", "#n"), t(v1, "id", "aH"), t(v1, "x1", "520"), t(v1, "x2", "528.5"), t(v1, "y1", "1122"), t(v1, "y2", "1152"), t(v1, "gradientUnits", "userSpaceOnUse"), h(y1, "xlink:href", "#j"), t(y1, "id", "aJ"), t(y1, "x1", "549"), t(y1, "x2", "549"), t(y1, "y1", "713.4"), t(y1, "y2", "748.4"), t(y1, "gradientUnits", "userSpaceOnUse"), h(x1, "xlink:href", "#c"), t(x1, "id", "D"), t(x1, "x1", "575.8"), t(x1, "x2", "543.8"), t(x1, "y1", "691.7"), t(x1, "y2", "572.4"), t(x1, "gradientUnits", "userSpaceOnUse"), h(m1, "xlink:href", "#d"), t(m1, "id", "E"), t(m1, "x1", "562"), t(m1, "x2", "537.9"), t(m1, "y1", "686.2"), t(m1, "y2", "596.4"), t(m1, "gradientUnits", "userSpaceOnUse"), h(It, "xlink:href", "#o"), t(It, "id", "aL"), t(It, "x1", "504"), t(It, "x2", "504"), t(It, "y1", "978"), t(It, "y2", "876.8"), t(It, "gradientTransform", "translate(0 -285.6)"), t(It, "gradientUnits", "userSpaceOnUse"), h(Nt, "xlink:href", "#e"), t(Nt, "id", "aM"), t(Nt, "x1", "91.3"), t(Nt, "x2", "71.6"), t(Nt, "y1", "978.6"), t(Nt, "y2", "958.9"), t(Nt, "gradientTransform", "translate(0 -285.6)"), t(Nt, "gradientUnits", "userSpaceOnUse"), h(Zt, "xlink:href", "#g"), t(Zt, "id", "aN"), t(Zt, "x1", "544"), t(Zt, "x2", "575.4"), t(Zt, "y1", "980"), t(Zt, "y2", "948.6"), t(Zt, "gradientTransform", "translate(0 -285.6)"), t(Zt, "gradientUnits", "userSpaceOnUse"), h(b1, "xlink:href", "#p"), t(b1, "id", "aO"), t(b1, "x1", "327.1"), t(b1, "x2", "327.1"), t(b1, "y1", "580.4"), t(b1, "y2", "694.4"), t(b1, "gradientUnits", "userSpaceOnUse"), h(q1, "xlink:href", "#q"), t(q1, "id", "aP"), t(q1, "x1", "330.1"), t(q1, "x2", "330.1"), t(q1, "y1", "582.4"), t(q1, "y2", "694.4"), t(q1, "gradientUnits", "userSpaceOnUse"), h(k1, "xlink:href", "#r"), t(k1, "id", "aQ"), t(k1, "x1", "264.5"), t(k1, "x2", "350.3"), t(k1, "y1", "600.6"), t(k1, "y2", "686.4"), t(k1, "gradientUnits", "userSpaceOnUse"), h(w1, "xlink:href", "#s"), t(w1, "id", "aS"), t(w1, "x1", "274"), t(w1, "x2", "367.4"), t(w1, "y1", "632.4"), t(w1, "y2", "644.4"), t(w1, "gradientUnits", "userSpaceOnUse"), h(G1, "xlink:href", "#t"), t(G1, "id", "aT"), t(G1, "x1", "311.9"), t(G1, "x2", "313.6"), t(G1, "y1", "632.4"), t(G1, "y2", "644.4"), t(G1, "gradientUnits", "userSpaceOnUse"), h(_1, "xlink:href", "#t"), t(_1, "id", "aV"), t(_1, "x1", "251"), t(_1, "x2", "262.3"), t(_1, "y1", "645.1"), t(_1, "y2", "638.6"), t(_1, "gradientUnits", "userSpaceOnUse"), h(U1, "xlink:href", "#t"), t(U1, "id", "aU"), t(U1, "x1", "-329.7"), t(U1, "x2", "-320.5"), t(U1, "y1", "-677.4"), t(U1, "y2", "-667.2"), t(U1, "gradientUnits", "userSpaceOnUse"), h(z1, "xlink:href", "#t"), t(z1, "id", "aW"), t(z1, "x1", "251.4"), t(z1, "x2", "261.3"), t(z1, "y1", "633.6"), t(z1, "y2", "639.3"), t(z1, "gradientUnits", "userSpaceOnUse"), h(S1, "xlink:href", "#t"), t(S1, "id", "aR"), t(S1, "x1", "325"), t(S1, "x2", "325"), t(S1, "y1", "612.4"), t(S1, "y2", "606.9"), t(S1, "gradientUnits", "userSpaceOnUse"), h($1, "xlink:href", "#u"), t($1, "id", "aX"), t($1, "x1", "328.8"), t($1, "x2", "328.8"), t($1, "y1", "1099"), t($1, "y2", "1108"), t($1, "gradientUnits", "userSpaceOnUse"), h(O1, "xlink:href", "#v"), t(O1, "id", "aY"), t(O1, "x1", "559.3"), t(O1, "x2", "583.9"), t(O1, "y1", "709.1"), t(O1, "y2", "751.7"), t(O1, "gradientUnits", "userSpaceOnUse"), h(M1, "xlink:href", "#w"), t(M1, "id", "aZ"), t(M1, "x1", "549"), t(M1, "x2", "549"), t(M1, "y1", "713.4"), t(M1, "y2", "748.4"), t(M1, "gradientUnits", "userSpaceOnUse"), h(C1, "xlink:href", "#v"), t(C1, "id", "ba"), t(C1, "x1", "559.3"), t(C1, "x2", "583.9"), t(C1, "y1", "709.1"), t(C1, "y2", "751.7"), t(C1, "gradientUnits", "userSpaceOnUse"), h(E1, "xlink:href", "#w"), t(E1, "id", "bb"), t(E1, "x1", "549"), t(E1, "x2", "549"), t(E1, "y1", "713.4"), t(E1, "y2", "748.4"), t(E1, "gradientUnits", "userSpaceOnUse"), h(j1, "xlink:href", "#v"), t(j1, "id", "bc"), t(j1, "x1", "559.3"), t(j1, "x2", "583.9"), t(j1, "y1", "709.1"), t(j1, "y2", "751.7"), t(j1, "gradientUnits", "userSpaceOnUse"), h(H1, "xlink:href", "#w"), t(H1, "id", "bd"), t(H1, "x1", "549"), t(H1, "x2", "549"), t(H1, "y1", "713.4"), t(H1, "y2", "748.4"), t(H1, "gradientUnits", "userSpaceOnUse"), h(R1, "xlink:href", "#v"), t(R1, "id", "be"), t(R1, "x1", "559.3"), t(R1, "x2", "583.9"), t(R1, "y1", "709.1"), t(R1, "y2", "751.7"), t(R1, "gradientUnits", "userSpaceOnUse"), h(D1, "xlink:href", "#w"), t(D1, "id", "bf"), t(D1, "x1", "549"), t(D1, "x2", "549"), t(D1, "y1", "713.4"), t(D1, "y2", "748.4"), t(D1, "gradientUnits", "userSpaceOnUse"), h(Q1, "xlink:href", "#v"), t(Q1, "id", "bg"), t(Q1, "x1", "559.3"), t(Q1, "x2", "583.9"), t(Q1, "y1", "709.1"), t(Q1, "y2", "751.7"), t(Q1, "gradientUnits", "userSpaceOnUse"), h(B1, "xlink:href", "#w"), t(B1, "id", "bh"), t(B1, "x1", "549"), t(B1, "x2", "549"), t(B1, "y1", "713.4"), t(B1, "y2", "748.4"), t(B1, "gradientUnits", "userSpaceOnUse"), h(L1, "xlink:href", "#v"), t(L1, "id", "bi"), t(L1, "x1", "559.3"), t(L1, "x2", "583.9"), t(L1, "y1", "709.1"), t(L1, "y2", "751.7"), t(L1, "gradientUnits", "userSpaceOnUse"), h(K1, "xlink:href", "#w"), t(K1, "id", "bj"), t(K1, "x1", "549"), t(K1, "x2", "549"), t(K1, "y1", "713.4"), t(K1, "y2", "748.4"), t(K1, "gradientUnits", "userSpaceOnUse"), h(P1, "xlink:href", "#v"), t(P1, "id", "bk"), t(P1, "x1", "559.3"), t(P1, "x2", "583.9"), t(P1, "y1", "709.1"), t(P1, "y2", "751.7"), t(P1, "gradientUnits", "userSpaceOnUse"), h(Y1, "xlink:href", "#w"), t(Y1, "id", "bl"), t(Y1, "x1", "549"), t(Y1, "x2", "549"), t(Y1, "y1", "713.4"), t(Y1, "y2", "748.4"), t(Y1, "gradientUnits", "userSpaceOnUse"), h(A1, "xlink:href", "#v"), t(A1, "id", "bm"), t(A1, "x1", "559.3"), t(A1, "x2", "583.9"), t(A1, "y1", "709.1"), t(A1, "y2", "751.7"), t(A1, "gradientUnits", "userSpaceOnUse"), h(V1, "xlink:href", "#w"), t(V1, "id", "bn"), t(V1, "x1", "549"), t(V1, "x2", "549"), t(V1, "y1", "713.4"), t(V1, "y2", "748.4"), t(V1, "gradientUnits", "userSpaceOnUse"), h(F1, "xlink:href", "#v"), t(F1, "id", "bo"), t(F1, "x1", "559.3"), t(F1, "x2", "583.9"), t(F1, "y1", "709.1"), t(F1, "y2", "751.7"), t(F1, "gradientUnits", "userSpaceOnUse"), h(T1, "xlink:href", "#w"), t(T1, "id", "bp"), t(T1, "x1", "549"), t(T1, "x2", "549"), t(T1, "y1", "713.4"), t(T1, "y2", "748.4"), t(T1, "gradientUnits", "userSpaceOnUse"), h(I1, "xlink:href", "#v"), t(I1, "id", "bq"), t(I1, "x1", "559.3"), t(I1, "x2", "583.9"), t(I1, "y1", "709.1"), t(I1, "y2", "751.7"), t(I1, "gradientUnits", "userSpaceOnUse"), h(N1, "xlink:href", "#w"), t(N1, "id", "br"), t(N1, "x1", "549"), t(N1, "x2", "549"), t(N1, "y1", "713.4"), t(N1, "y2", "748.4"), t(N1, "gradientUnits", "userSpaceOnUse"), h(Z1, "xlink:href", "#v"), t(Z1, "id", "bs"), t(Z1, "x1", "559.3"), t(Z1, "x2", "583.9"), t(Z1, "y1", "709.1"), t(Z1, "y2", "751.7"), t(Z1, "gradientUnits", "userSpaceOnUse"), h(X1, "xlink:href", "#w"), t(X1, "id", "bt"), t(X1, "x1", "549"), t(X1, "x2", "549"), t(X1, "y1", "713.4"), t(X1, "y2", "748.4"), t(X1, "gradientUnits", "userSpaceOnUse"), h(W1, "xlink:href", "#v"), t(W1, "id", "bu"), t(W1, "x1", "559.3"), t(W1, "x2", "583.9"), t(W1, "y1", "709.1"), t(W1, "y2", "751.7"), t(W1, "gradientUnits", "userSpaceOnUse"), h(J1, "xlink:href", "#w"), t(J1, "id", "bv"), t(J1, "x1", "549"), t(J1, "x2", "549"), t(J1, "y1", "713.4"), t(J1, "y2", "748.4"), t(J1, "gradientUnits", "userSpaceOnUse"), t(Y0, "y", "0"), t(Y0, "x", "0"), t(Y0, "height", "18"), t(Y0, "width", "20"), t(Y0, "fill", "#272727"), t(hn, "fill", "#222"), t(hn, "fill-rule", "evenodd"), t(hn, "d", "M9.99 0 5 3v6l-5 3v6l10-6V0h-.01zm10 0L15 3v6l5-3V0h-.01z"), t(un, "fill", "#1c1c1c"), t(un, "fill-rule", "evenodd"), t(un, "d", "M0 0v6l5 3V3L.01 0H0zm10 0v12l10 6v-6l-5-3V3l-4.99-3H10z"), t(Et, "id", "pattern1"), t(Et, "x", "0"), t(Et, "y", "0"), t(Et, "width", "20"), t(Et, "height", "18"), t(Et, "patternUnits", "userSpaceOnUse"), t(Et, "class", "svelte-py5gbp"), h(tr, "xlink:href", "#x"), t(tr, "id", "A"), t(tr, "x1", "295"), t(tr, "x2", "295"), t(tr, "y1", "1004.4"), t(tr, "y2", "-357.6"), t(tr, "gradientUnits", "userSpaceOnUse"), t(fl, "fill", "url(#y)"), t(fl, "fill-rule", "evenodd"), t(fl, "stroke", "#696a69"), t(fl, "d", "M119 1046.4c-33-.4-94-23-105-42-1-7-7-94-7-162v-1075c0-13 3.5-103 5-130 8-13.9 56-33.8 68-37 12-3.3 25-6 36-6h416c11 0 24 2.7 36 6 12 3.2 60 23.1 68 37 1.5 27 5 117 5 130v1075c0 68-6 155-7 162-11 19-72 41.6-105 42H365z"), t(gn, "fill", "url(#z)"), t(gn, "fill-rule", "evenodd"), t(gn, "d", "M120 1022.4c-60 0-102-25-102-135v-1135c0-75 17-133 117-133h378c100 0 117 58 117 133v1135c0 110-42 135-102 135H365z"), t(pl, "fill", "#269dc5"), t(pl, "fill-rule", "evenodd"), t(pl, "stroke", "#6ac1df"), t(pl, "d", "M120 1015.4c-55 0-96-23-96-128v-1135c0-75 16-128 111-128h378c95 0 111 53 111 128v1135c0 105-41 128-96 128H365z"), t(A0, "id", "pattern-bg"), t(A0, "fill", "url(#pattern1)"), t(A0, "fill-rule", "evenodd"), t(A0, "stroke", "#000"), t(A0, "d", "M120 1007.4c-45.4 0-90-15-90-120v-1127c0-75 15-128 105-128h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H365z"), t(jt, "width", "516"), t(jt, "height", "894"), t(jt, "x", "66"), t(jt, "y", "-321.6"), t(jt, "fill", "#0d0d0d"), t(jt, "stroke", "url(#B)"), t(jt, "stroke-linecap", "round"), t(jt, "stroke-linejoin", "round"), t(jt, "rx", "22"), t(jt, "ry", "22"), t(Ht, "width", "493"), t(Ht, "height", "871"), t(Ht, "x", "77"), t(Ht, "y", "-310.6"), t(Ht, "fill", "#0d0d0d"), t(Ht, "stroke", "url(#C)"), t(Ht, "stroke-linecap", "round"), t(Ht, "stroke-linejoin", "round"), t(Ht, "rx", "10"), t(Ht, "ry", "10"), t(Rt, "width", "516"), t(Rt, "height", "120"), t(Rt, "x", "66"), t(Rt, "y", "578.4"), t(Rt, "fill", "#0d0d0d"), t(Rt, "stroke", "url(#D)"), t(Rt, "stroke-linecap", "round"), t(Rt, "stroke-linejoin", "round"), t(Rt, "rx", "22"), t(Rt, "ry", "22"), t(Dt, "width", "493"), t(Dt, "height", "96"), t(Dt, "x", "77"), t(Dt, "y", "590.4"), t(Dt, "fill", "#0d0d0d"), t(Dt, "stroke", "url(#E)"), t(Dt, "stroke-linecap", "round"), t(Dt, "stroke-linejoin", "round"), t(Dt, "rx", "10"), t(Dt, "ry", "10"), t(Xt, "width", "116"), t(Xt, "height", "36"), t(Xt, "x", "86"), t(Xt, "y", "644.4"), t(Xt, "fill", "#00ec3a"), t(Xt, "fill-opacity", ".2"), t(Xt, "rx", "7"), t(Xt, "ry", "7"), t(Wt, "width", "116"), t(Wt, "height", "36"), t(Wt, "x", "446"), t(Wt, "y", "596.4"), t(Wt, "fill", "#00ec3a"), t(Wt, "fill-opacity", ".2"), t(Wt, "rx", "7"), t(Wt, "ry", "7"), t(Jt, "width", "116"), t(Jt, "height", "36"), t(Jt, "x", "446"), t(Jt, "y", "644.4"), t(Jt, "fill", "#00ec3a"), t(Jt, "fill-opacity", ".2"), t(Jt, "rx", "7"), t(Jt, "ry", "7"), t(W, "width", "76"), t(W, "height", "44"), t(W, "x", "511"), t(W, "y", "709.4"), t(W, "fill", "url(#F)"), t(W, "stroke", "var(--btn-border-stroke)"), t(W, "stroke-linecap", "round"), t(W, "stroke-linejoin", "round"), t(W, "stroke-width", "2"), t(W, "rx", "8"), t(W, "ry", "8"), t(er, "width", "68"), t(er, "height", "35"), t(er, "x", "515"), t(er, "y", "713.4"), t(er, "fill", "url(#G)"), t(er, "rx", "4"), t(er, "ry", "4"), t(vn, "fill", "url(#H)"), t(vn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(vn, "transform", "translate(0 -411.6)"), t(Xr, "transform", "translate(0 54)"), t(Xr, "class", "cp-button"), t(Xr, "data-cp", "KEYCODE_TIMES"), t(k2, "fill", "#fff"), t(k2, "d", "M84-303.6h480v792H84z"), t(q2, "id", "uid_3418"), t(N, "transform", "translate(0 411.6)"), t(G2, "class", "cp-wrapper svelte-py5gbp"), t(Wr, "x", "0"), t(Wr, "y", "0"), t(Wr, "width", "480"), t(Wr, "height", "792"), t(Wr, "overflow", "hidden"), t(w2, "transform", "translate(85 109)"), t(yn, "fill", "url(#I)"), t(yn, "d", "M387.7 90a22 22 0 0 0-19 11H560a10 10 0 0 1 10 10v851a10 10 0 0 1-10 10H365.7v12H560a22 22 0 0 0 22-22V112a22 22 0 0 0-22-22H387.7z"), t(yn, "transform", "translate(0 -411.6)"), t(xn, "fill", "url(#J)"), t(xn, "d", "M66 904v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(xn, "transform", "translate(0 -411.6)"), t(mn, "fill", "url(#K)"), t(mn, "d", "M570 900v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62h-12z"), t(mn, "transform", "translate(0 -411.6)"), t(hl, "fill", "url(#L)"), t(hl, "fill-rule", "evenodd"), t(hl, "d", "M136.9 40C42.9 40 27 93 27 168v1135c0 44.7 7.4 74.6 20 94.1 17.3 23 43 29.9 73 29.9h408c30 0 55.7-6.8 73-29.9 12.6-19.5 20-49.4 20-94.1V168c0-75-15.8-128-109.9-128H137zm-1.9 4h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H120c-45.4 0-90-15-90-120V172C30 97 45 44 135 44z"), t(hl, "transform", "translate(0 -411.6)"), t(ul, "fill", "#1f7e9e"), t(ul, "fill-opacity", ".3"), t(ul, "fill-rule", "evenodd"), t(ul, "d", "M-638 1019.4c-54.4 0-95-23-95-128v-1135c0-75 15.8-128 109.9-128H-249c94 0 109.9 53 109.9 128v1135c0 105-40.6 128-95 128h-161.4z"), t(J, "width", "76"), t(J, "height", "44"), t(J, "x", "511"), t(J, "y", "709.4"), t(J, "fill", "url(#M)"), t(J, "stroke", "var(--btn-border-stroke)"), t(J, "stroke-linecap", "round"), t(J, "stroke-linejoin", "round"), t(J, "stroke-width", "2"), t(J, "rx", "8"), t(J, "ry", "8"), t(rr, "width", "68"), t(rr, "height", "35"), t(rr, "x", "515"), t(rr, "y", "713.4"), t(rr, "fill", "url(#N)"), t(rr, "rx", "4"), t(rr, "ry", "4"), t(bn, "fill", "url(#O)"), t(bn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(bn, "transform", "translate(0 -411.6)"), t(V0, "class", "cp-button"), t(V0, "data-cp", "KEYCODE_DIVIDE"), t(tt, "width", "76"), t(tt, "height", "44"), t(tt, "x", "511"), t(tt, "y", "709.4"), t(tt, "fill", "url(#P)"), t(tt, "stroke", "var(--btn-border-stroke)"), t(tt, "stroke-linecap", "round"), t(tt, "stroke-linejoin", "round"), t(tt, "stroke-width", "2"), t(tt, "rx", "8"), t(tt, "ry", "8"), t(lr, "width", "68"), t(lr, "height", "35"), t(lr, "x", "515"), t(lr, "y", "713.4"), t(lr, "fill", "url(#Q)"), t(lr, "rx", "4"), t(lr, "ry", "4"), t(qn, "fill", "url(#R)"), t(qn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(qn, "transform", "translate(0 -411.6)"), t(Jr, "transform", "translate(0 108)"), t(Jr, "class", "cp-button"), t(Jr, "data-cp", "KEYCODE_MINUS"), t(et, "width", "76"), t(et, "height", "44"), t(et, "x", "511"), t(et, "y", "709.4"), t(et, "fill", "url(#S)"), t(et, "stroke", "var(--btn-border-stroke)"), t(et, "stroke-linecap", "round"), t(et, "stroke-linejoin", "round"), t(et, "stroke-width", "2"), t(et, "rx", "8"), t(et, "ry", "8"), t(nr, "width", "68"), t(nr, "height", "35"), t(nr, "x", "515"), t(nr, "y", "713.4"), t(nr, "fill", "url(#T)"), t(nr, "rx", "4"), t(nr, "ry", "4"), t(kn, "fill", "url(#U)"), t(kn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(kn, "transform", "translate(0 -411.6)"), t(t0, "transform", "translate(0 162)"), t(t0, "class", "cp-button"), t(t0, "data-cp", "KEYCODE_PLUS"), t(rt, "width", "76"), t(rt, "height", "44"), t(rt, "x", "511"), t(rt, "y", "709.4"), t(rt, "fill", "url(#V)"), t(rt, "stroke", "var(--btn-border-stroke)"), t(rt, "stroke-linecap", "round"), t(rt, "stroke-linejoin", "round"), t(rt, "stroke-width", "2"), t(rt, "rx", "8"), t(rt, "ry", "8"), t(ir, "width", "68"), t(ir, "height", "35"), t(ir, "x", "515"), t(ir, "y", "713.4"), t(ir, "fill", "url(#W)"), t(ir, "rx", "4"), t(ir, "ry", "4"), t(wn, "fill", "url(#X)"), t(wn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(wn, "transform", "translate(0 -411.6)"), t(e0, "transform", "translate(0 216)"), t(e0, "class", "cp-button"), t(e0, "data-cp", "KEYCODE_EXE"), t(lt, "width", "76"), t(lt, "height", "44"), t(lt, "x", "511"), t(lt, "y", "709.4"), t(lt, "fill", "url(#Y)"), t(lt, "stroke", "var(--btn-border-stroke)"), t(lt, "stroke-linecap", "round"), t(lt, "stroke-linejoin", "round"), t(lt, "stroke-width", "2"), t(lt, "rx", "8"), t(lt, "ry", "8"), t(ar, "width", "68"), t(ar, "height", "35"), t(ar, "x", "515"), t(ar, "y", "713.4"), t(ar, "fill", "url(#Z)"), t(ar, "rx", "4"), t(ar, "ry", "4"), t(Gn, "fill", "url(#aa)"), t(Gn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Gn, "transform", "translate(0 -411.6)"), t(r0, "transform", "translate(-90)"), t(r0, "class", "cp-button"), t(r0, "data-cp", "KEYCODE_POWER"), t(nt, "width", "76"), t(nt, "height", "44"), t(nt, "x", "511"), t(nt, "y", "709.4"), t(nt, "fill", "url(#ab)"), t(nt, "stroke", "var(--btn-border-stroke)"), t(nt, "stroke-linecap", "round"), t(nt, "stroke-linejoin", "round"), t(nt, "stroke-width", "2"), t(nt, "rx", "8"), t(nt, "ry", "8"), t(or, "width", "68"), t(or, "height", "35"), t(or, "x", "515"), t(or, "y", "713.4"), t(or, "fill", "url(#ac)"), t(or, "rx", "4"), t(or, "ry", "4"), t(_n, "fill", "url(#ad)"), t(_n, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(_n, "transform", "translate(0 -411.6)"), t(l0, "transform", "translate(-180)"), t(l0, "class", "cp-button"), t(l0, "data-cp", "KEYCODE_Z"), t(it, "width", "76"), t(it, "height", "44"), t(it, "x", "511"), t(it, "y", "709.4"), t(it, "fill", "url(#ae)"), t(it, "stroke", "var(--btn-border-stroke)"), t(it, "stroke-linecap", "round"), t(it, "stroke-linejoin", "round"), t(it, "stroke-width", "2"), t(it, "rx", "8"), t(it, "ry", "8"), t(sr, "width", "68"), t(sr, "height", "35"), t(sr, "x", "515"), t(sr, "y", "713.4"), t(sr, "fill", "url(#af)"), t(sr, "rx", "4"), t(sr, "ry", "4"), t(Un, "fill", "url(#ag)"), t(Un, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Un, "transform", "translate(0 -411.6)"), t(n0, "transform", "translate(-270)"), t(n0, "class", "cp-button"), t(n0, "data-cp", "KEYCODE_Y"), t(at, "width", "76"), t(at, "height", "44"), t(at, "x", "511"), t(at, "y", "709.4"), t(at, "fill", "url(#ah)"), t(at, "stroke", "var(--btn-border-stroke)"), t(at, "stroke-linecap", "round"), t(at, "stroke-linejoin", "round"), t(at, "stroke-width", "2"), t(at, "rx", "8"), t(at, "ry", "8"), t(cr, "width", "68"), t(cr, "height", "35"), t(cr, "x", "515"), t(cr, "y", "713.4"), t(cr, "fill", "url(#ai)"), t(cr, "rx", "4"), t(cr, "ry", "4"), t(zn, "fill", "url(#aj)"), t(zn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(zn, "transform", "translate(0 -411.6)"), t(i0, "transform", "translate(-360)"), t(i0, "class", "cp-button"), t(i0, "data-cp", "KEYCODE_X"), t(ot, "width", "76"), t(ot, "height", "44"), t(ot, "x", "511"), t(ot, "y", "709.4"), t(ot, "fill", "url(#ak)"), t(ot, "stroke", "var(--btn-border-stroke)"), t(ot, "stroke-linecap", "round"), t(ot, "stroke-linejoin", "round"), t(ot, "stroke-width", "2"), t(ot, "rx", "8"), t(ot, "ry", "8"), t(dr, "width", "68"), t(dr, "height", "35"), t(dr, "x", "515"), t(dr, "y", "713.4"), t(dr, "fill", "url(#al)"), t(dr, "rx", "4"), t(dr, "ry", "4"), t(Sn, "fill", "url(#am)"), t(Sn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Sn, "transform", "translate(0 -411.6)"), t(a0, "transform", "translate(-450 54)"), t(a0, "class", "cp-button"), t(a0, "data-cp", "KEYCODE_OPEN_PARENTHESIS"), t(st, "width", "76"), t(st, "height", "44"), t(st, "x", "511"), t(st, "y", "709.4"), t(st, "fill", "url(#an)"), t(st, "stroke", "var(--btn-border-stroke)"), t(st, "stroke-linecap", "round"), t(st, "stroke-linejoin", "round"), t(st, "stroke-width", "2"), t(st, "rx", "8"), t(st, "ry", "8"), t(fr, "width", "68"), t(fr, "height", "35"), t(fr, "x", "515"), t(fr, "y", "713.4"), t(fr, "fill", "url(#ao)"), t(fr, "rx", "4"), t(fr, "ry", "4"), t($n, "fill", "url(#ap)"), t($n, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t($n, "transform", "translate(0 -411.6)"), t(o0, "transform", "translate(-450)"), t(o0, "class", "cp-button"), t(o0, "data-cp", "KEYCODE_EQUALS"), t(ct, "width", "76"), t(ct, "height", "44"), t(ct, "x", "511"), t(ct, "y", "709.4"), t(ct, "fill", "url(#aq)"), t(ct, "stroke", "var(--btn-border-stroke)"), t(ct, "stroke-linecap", "round"), t(ct, "stroke-linejoin", "round"), t(ct, "stroke-width", "2"), t(ct, "rx", "8"), t(ct, "ry", "8"), t(pr, "width", "68"), t(pr, "height", "35"), t(pr, "x", "515"), t(pr, "y", "713.4"), t(pr, "fill", "url(#ar)"), t(pr, "rx", "4"), t(pr, "ry", "4"), t(On, "fill", "url(#as)"), t(On, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(On, "transform", "translate(0 -411.6)"), t(s0, "transform", "translate(-450 108)"), t(s0, "class", "cp-button"), t(s0, "data-cp", "KEYCODE_CLOSE_PARENTHESIS"), t(dt, "width", "76"), t(dt, "height", "44"), t(dt, "x", "511"), t(dt, "y", "709.4"), t(dt, "fill", "url(#at)"), t(dt, "stroke", "var(--btn-border-stroke)"), t(dt, "stroke-linecap", "round"), t(dt, "stroke-linejoin", "round"), t(dt, "stroke-width", "2"), t(dt, "rx", "8"), t(dt, "ry", "8"), t(hr, "width", "68"), t(hr, "height", "35"), t(hr, "x", "515"), t(hr, "y", "713.4"), t(hr, "fill", "url(#au)"), t(hr, "rx", "4"), t(hr, "ry", "4"), t(Mn, "fill", "url(#av)"), t(Mn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Mn, "transform", "translate(0 -411.6)"), t(c0, "transform", "translate(-450 162)"), t(c0, "class", "cp-button"), t(c0, "data-cp", "KEYCODE_COMMA"), t(ft, "width", "76"), t(ft, "height", "44"), t(ft, "x", "511"), t(ft, "y", "709.4"), t(ft, "fill", "url(#aw)"), t(ft, "stroke", "var(--btn-border-stroke)"), t(ft, "stroke-linecap", "round"), t(ft, "stroke-linejoin", "round"), t(ft, "stroke-width", "2"), t(ft, "rx", "8"), t(ft, "ry", "8"), t(ur, "width", "68"), t(ur, "height", "35"), t(ur, "x", "515"), t(ur, "y", "713.4"), t(ur, "fill", "url(#ax)"), t(ur, "rx", "4"), t(ur, "ry", "4"), t(Cn, "fill", "url(#ay)"), t(Cn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Cn, "transform", "translate(0 -411.6)"), t(d0, "transform", "translate(-450 216)"), t(d0, "class", "cp-button"), t(d0, "data-cp", "KEYCODE_NEGATIVE"), t(pt, "width", "116"), t(pt, "height", "36"), t(pt, "x", "511"), t(pt, "y", "709.4"), t(pt, "fill", "url(#az)"), t(pt, "stroke", "var(--btn-border-stroke)"), t(pt, "stroke-linecap", "round"), t(pt, "stroke-linejoin", "round"), t(pt, "stroke-width", "2"), t(pt, "rx", "8"), t(pt, "ry", "8"), t(gr, "width", "107"), t(gr, "height", "27"), t(gr, "x", "515"), t(gr, "y", "713.4"), t(gr, "fill", "url(#aA)"), t(gr, "rx", "4"), t(gr, "ry", "4"), t(En, "fill", "url(#aB)"), t(En, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(En, "transform", "translate(0 -411.6)"), t(f0, "transform", "translate(-425 -113)"), t(f0, "class", "cp-button"), t(f0, "data-cp", "KEYCODE_KEYBOARD"), t(ht, "width", "116"), t(ht, "height", "36"), t(ht, "x", "511"), t(ht, "y", "709.4"), t(ht, "fill", "url(#aC)"), t(ht, "stroke", "var(--btn-border-stroke)"), t(ht, "stroke-linecap", "round"), t(ht, "stroke-linejoin", "round"), t(ht, "stroke-width", "2"), t(ht, "rx", "8"), t(ht, "ry", "8"), t(vr, "width", "107"), t(vr, "height", "27"), t(vr, "x", "515"), t(vr, "y", "713.4"), t(vr, "fill", "url(#aD)"), t(vr, "rx", "4"), t(vr, "ry", "4"), t(jn, "fill", "url(#aE)"), t(jn, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(jn, "transform", "translate(0 -411.6)"), t(p0, "transform", "translate(-425 -65)"), t(p0, "class", "cp-button"), t(p0, "data-cp", "KEYCODE_SHIFT"), t(ut, "width", "116"), t(ut, "height", "36"), t(ut, "x", "511"), t(ut, "y", "709.4"), t(ut, "fill", "url(#aF)"), t(ut, "stroke", "var(--btn-border-stroke)"), t(ut, "stroke-linecap", "round"), t(ut, "stroke-linejoin", "round"), t(ut, "stroke-width", "2"), t(ut, "rx", "8"), t(ut, "ry", "8"), t(yr, "width", "107"), t(yr, "height", "27"), t(yr, "x", "515"), t(yr, "y", "713.4"), t(yr, "fill", "url(#aG)"), t(yr, "rx", "4"), t(yr, "ry", "4"), t(Hn, "fill", "url(#aH)"), t(Hn, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Hn, "transform", "translate(0 -411.6)"), t(h0, "transform", "translate(-65 -113)"), t(h0, "class", "cp-button"), t(h0, "data-cp", "KEYCODE_BACKSPACE"), t(gt, "width", "116"), t(gt, "height", "36"), t(gt, "x", "511"), t(gt, "y", "709.4"), t(gt, "fill", "url(#aI)"), t(gt, "stroke", "var(--btn-border-stroke)"), t(gt, "stroke-linecap", "round"), t(gt, "stroke-linejoin", "round"), t(gt, "stroke-width", "2"), t(gt, "rx", "8"), t(gt, "ry", "8"), t(xr, "width", "107"), t(xr, "height", "27"), t(xr, "x", "515"), t(xr, "y", "713.4"), t(xr, "fill", "url(#aJ)"), t(xr, "rx", "4"), t(xr, "ry", "4"), t(Rn, "fill", "url(#aK)"), t(Rn, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Rn, "transform", "translate(0 -411.6)"), t(u0, "transform", "translate(-65 -65)"), t(u0, "class", "cp-button"), t(u0, "data-cp", "KEYCODE_CLEAR"), t(_2, "fill", "url(#aL)"), t(_2, "d", "M560 589.4s10 4.4 10 10v77a10 10 0 0 1-10 10H365.7v12H560c13.2 0 22-9.3 22-28v-70c0-12.2-22-22-22-22z"), t(U2, "fill", "url(#aM)"), t(U2, "d", "M66 618.4v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(z2, "fill", "url(#aN)"), t(z2, "d", "M570 614.4v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62z"), t(mr, "width", "204"), t(mr, "height", "116"), t(mr, "x", "221"), t(mr, "y", "580.4"), t(mr, "fill", "url(#aO)"), t(mr, "rx", "25"), t(mr, "ry", "58"), t(br, "width", "200"), t(br, "height", "112"), t(br, "x", "223"), t(br, "y", "582.4"), t(br, "fill", "url(#aP)"), t(br, "rx", "23"), t(br, "ry", "55.9"), t(qr, "width", "185"), t(qr, "height", "98"), t(qr, "x", "231"), t(qr, "y", "589.4"), t(qr, "fill", "url(#aQ)"), t(qr, "rx", "16"), t(qr, "ry", "47.5"), t(kr, "class", "cp-button cp-button-arrow"), t(kr, "data-cp", "KEYCODE_UP"), t(kr, "fill", "#7f7f7f"), t(kr, "stroke", "url(#aR)"), t(kr, "stroke-linecap", "round"), t(kr, "stroke-linejoin", "round"), t(kr, "d", "M330.2 611.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(Qt, "width", "104"), t(Qt, "height", "12"), t(Qt, "x", "272"), t(Qt, "y", "632.4"), t(Qt, "fill", "url(#aS)"), t(Qt, "stroke", "url(#aT)"), t(Qt, "stroke-linecap", "round"), t(Qt, "stroke-linejoin", "round"), t(Qt, "rx", "2"), t(Qt, "ry", "2"), t(te, "class", "cp-button cp-button-arrow"), t(te, "data-cp", "KEYCODE_DOWN"), t(te, "fill", "#7f7f7f"), t(te, "stroke", "url(#aU)"), t(te, "stroke-linecap", "round"), t(te, "stroke-linejoin", "round"), t(te, "d", "M-317.8-665.2c-.4.8-5.3.8-6.2.8-.9 0-5.8 0-6.2-.8-.5-.7 2-5 2.4-5.8.4-.8 3-5 3.8-5 .9 0 3.4 4.2 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(te, "transform", "scale(-1)"), t(ee, "class", "cp-button cp-button-arrow"), t(ee, "data-cp", "KEYCODE_LEFT"), t(ee, "fill", "#7f7f7f"), t(ee, "stroke", "url(#aV)"), t(ee, "stroke-linecap", "round"), t(ee, "stroke-linejoin", "round"), t(ee, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(ee, "transform", "rotate(-90 255.8 641.5)"), t(re, "class", "cp-button cp-button-arrow"), t(re, "data-cp", "KEYCODE_RIGHT"), t(re, "fill", "#7f7f7f"), t(re, "stroke", "url(#aW)"), t(re, "stroke-linecap", "round"), t(re, "stroke-linejoin", "round"), t(re, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(re, "transform", "matrix(0 -1 -1 0 1033.7 897.4)"), t(Dn, "fill", "url(#aX)"), t(Dn, "d", "m245 1098.7-2.5 6.7c1.1.4 2.3.6 3.5.6h154c2 0 3.8-.6 5.6-1.7l-4-5.6c-.5.2-1 .3-1.6.3H247l-2-.3z"), t(Dn, "transform", "translate(0 -411.6)"), t(vt, "width", "102"), t(vt, "height", "44"), t(vt, "x", "511"), t(vt, "y", "709.4"), t(vt, "fill", "url(#aY)"), t(vt, "stroke", "var(--btn-border-stroke)"), t(vt, "stroke-linecap", "round"), t(vt, "stroke-linejoin", "round"), t(vt, "stroke-width", "2"), t(vt, "rx", "8"), t(vt, "ry", "8"), t(wr, "width", "94"), t(wr, "height", "35"), t(wr, "x", "515"), t(wr, "y", "713.4"), t(wr, "fill", "url(#aZ)"), t(wr, "rx", "4"), t(wr, "ry", "4"), t(F0, "transform", "translate(-117 216)"), t(F0, "class", "cp-button"), t(F0, "data-cp", "KEYCODE_EXP"), t(yt, "width", "102"), t(yt, "height", "44"), t(yt, "x", "511"), t(yt, "y", "709.4"), t(yt, "fill", "url(#ba)"), t(yt, "stroke", "var(--btn-border-stroke)"), t(yt, "stroke-linecap", "round"), t(yt, "stroke-linejoin", "round"), t(yt, "stroke-width", "2"), t(yt, "rx", "8"), t(yt, "ry", "8"), t(Gr, "width", "94"), t(Gr, "height", "35"), t(Gr, "x", "515"), t(Gr, "y", "713.4"), t(Gr, "fill", "url(#bb)"), t(Gr, "rx", "4"), t(Gr, "ry", "4"), t(T0, "transform", "translate(-117 162)"), t(T0, "class", "cp-button"), t(T0, "data-cp", "KEYCODE_3"), t(xt, "width", "102"), t(xt, "height", "44"), t(xt, "x", "511"), t(xt, "y", "709.4"), t(xt, "fill", "url(#bc)"), t(xt, "stroke", "var(--btn-border-stroke)"), t(xt, "stroke-linecap", "round"), t(xt, "stroke-linejoin", "round"), t(xt, "stroke-width", "2"), t(xt, "rx", "8"), t(xt, "ry", "8"), t(_r, "width", "94"), t(_r, "height", "35"), t(_r, "x", "515"), t(_r, "y", "713.4"), t(_r, "fill", "url(#bd)"), t(_r, "rx", "4"), t(_r, "ry", "4"), t(I0, "transform", "translate(-117 108)"), t(I0, "class", "cp-button"), t(I0, "data-cp", "KEYCODE_6"), t(mt, "width", "102"), t(mt, "height", "44"), t(mt, "x", "511"), t(mt, "y", "709.4"), t(mt, "fill", "url(#be)"), t(mt, "stroke", "var(--btn-border-stroke)"), t(mt, "stroke-linecap", "round"), t(mt, "stroke-linejoin", "round"), t(mt, "stroke-width", "2"), t(mt, "rx", "8"), t(mt, "ry", "8"), t(Ur, "width", "94"), t(Ur, "height", "35"), t(Ur, "x", "515"), t(Ur, "y", "713.4"), t(Ur, "fill", "url(#bf)"), t(Ur, "rx", "4"), t(Ur, "ry", "4"), t(N0, "transform", "translate(-117 54)"), t(N0, "class", "cp-button"), t(N0, "data-cp", "KEYCODE_9"), t(bt, "width", "102"), t(bt, "height", "44"), t(bt, "x", "511"), t(bt, "y", "709.4"), t(bt, "fill", "url(#bg)"), t(bt, "stroke", "var(--btn-border-stroke)"), t(bt, "stroke-linecap", "round"), t(bt, "stroke-linejoin", "round"), t(bt, "stroke-width", "2"), t(bt, "rx", "8"), t(bt, "ry", "8"), t(zr, "width", "94"), t(zr, "height", "35"), t(zr, "x", "515"), t(zr, "y", "713.4"), t(zr, "fill", "url(#bh)"), t(zr, "rx", "4"), t(zr, "ry", "4"), t(Z0, "transform", "translate(-238 216)"), t(Z0, "class", "cp-button"), t(Z0, "data-cp", "KEYCODE_DOT"), t(qt, "width", "102"), t(qt, "height", "44"), t(qt, "x", "511"), t(qt, "y", "709.4"), t(qt, "fill", "url(#bi)"), t(qt, "stroke", "var(--btn-border-stroke)"), t(qt, "stroke-linecap", "round"), t(qt, "stroke-linejoin", "round"), t(qt, "stroke-width", "2"), t(qt, "rx", "8"), t(qt, "ry", "8"), t(Sr, "width", "94"), t(Sr, "height", "35"), t(Sr, "x", "515"), t(Sr, "y", "713.4"), t(Sr, "fill", "url(#bj)"), t(Sr, "rx", "4"), t(Sr, "ry", "4"), t(X0, "transform", "translate(-238 162)"), t(X0, "class", "cp-button"), t(X0, "data-cp", "KEYCODE_2"), t(kt, "width", "102"), t(kt, "height", "44"), t(kt, "x", "511"), t(kt, "y", "709.4"), t(kt, "fill", "url(#bk)"), t(kt, "stroke", "var(--btn-border-stroke)"), t(kt, "stroke-linecap", "round"), t(kt, "stroke-linejoin", "round"), t(kt, "stroke-width", "2"), t(kt, "rx", "8"), t(kt, "ry", "8"), t($r, "width", "94"), t($r, "height", "35"), t($r, "x", "515"), t($r, "y", "713.4"), t($r, "fill", "url(#bl)"), t($r, "rx", "4"), t($r, "ry", "4"), t(W0, "transform", "translate(-238 108)"), t(W0, "class", "cp-button"), t(W0, "data-cp", "KEYCODE_5"), t(wt, "width", "102"), t(wt, "height", "44"), t(wt, "x", "511"), t(wt, "y", "709.4"), t(wt, "fill", "url(#bm)"), t(wt, "stroke", "var(--btn-border-stroke)"), t(wt, "stroke-linecap", "round"), t(wt, "stroke-linejoin", "round"), t(wt, "stroke-width", "2"), t(wt, "rx", "8"), t(wt, "ry", "8"), t(Or, "width", "94"), t(Or, "height", "35"), t(Or, "x", "515"), t(Or, "y", "713.4"), t(Or, "fill", "url(#bn)"), t(Or, "rx", "4"), t(Or, "ry", "4"), t(J0, "transform", "translate(-238 54)"), t(J0, "class", "cp-button"), t(J0, "data-cp", "KEYCODE_8"), t(le, "width", "76"), t(le, "height", "44"), t(le, "x", "511"), t(le, "y", "1085.4"), t(le, "fill", "#15d81e"), t(le, "fill-opacity", ".2"), t(le, "rx", "8"), t(le, "ry", "8"), t(Gt, "width", "102"), t(Gt, "height", "44"), t(Gt, "x", "511"), t(Gt, "y", "709.4"), t(Gt, "fill", "url(#bo)"), t(Gt, "stroke", "var(--btn-border-stroke)"), t(Gt, "stroke-linecap", "round"), t(Gt, "stroke-linejoin", "round"), t(Gt, "stroke-width", "2"), t(Gt, "rx", "8"), t(Gt, "ry", "8"), t(Mr, "width", "94"), t(Mr, "height", "35"), t(Mr, "x", "515"), t(Mr, "y", "713.4"), t(Mr, "fill", "url(#bp)"), t(Mr, "rx", "4"), t(Mr, "ry", "4"), t(tl, "transform", "translate(-359 216)"), t(tl, "class", "cp-button"), t(tl, "data-cp", "KEYCODE_0"), t(_t, "width", "102"), t(_t, "height", "44"), t(_t, "x", "511"), t(_t, "y", "709.4"), t(_t, "fill", "url(#bq)"), t(_t, "stroke", "var(--btn-border-stroke)"), t(_t, "stroke-linecap", "round"), t(_t, "stroke-linejoin", "round"), t(_t, "stroke-width", "2"), t(_t, "rx", "8"), t(_t, "ry", "8"), t(Cr, "width", "94"), t(Cr, "height", "35"), t(Cr, "x", "515"), t(Cr, "y", "713.4"), t(Cr, "fill", "url(#br)"), t(Cr, "rx", "4"), t(Cr, "ry", "4"), t(el, "transform", "translate(-359 162)"), t(el, "class", "cp-button"), t(el, "data-cp", "KEYCODE_1"), t(Ut, "width", "102"), t(Ut, "height", "44"), t(Ut, "x", "511"), t(Ut, "y", "709.4"), t(Ut, "fill", "url(#bs)"), t(Ut, "stroke", "var(--btn-border-stroke)"), t(Ut, "stroke-linecap", "round"), t(Ut, "stroke-linejoin", "round"), t(Ut, "stroke-width", "2"), t(Ut, "rx", "8"), t(Ut, "ry", "8"), t(Er, "width", "94"), t(Er, "height", "35"), t(Er, "x", "515"), t(Er, "y", "713.4"), t(Er, "fill", "url(#bt)"), t(Er, "rx", "4"), t(Er, "ry", "4"), t(rl, "transform", "translate(-359 108)"), t(rl, "class", "cp-button"), t(rl, "data-cp", "KEYCODE_4"), t(zt, "width", "102"), t(zt, "height", "44"), t(zt, "x", "511"), t(zt, "y", "709.4"), t(zt, "fill", "url(#bu)"), t(zt, "stroke", "var(--btn-border-stroke)"), t(zt, "stroke-linecap", "round"), t(zt, "stroke-linejoin", "round"), t(zt, "stroke-width", "2"), t(zt, "rx", "8"), t(zt, "ry", "8"), t(jr, "width", "94"), t(jr, "height", "35"), t(jr, "x", "515"), t(jr, "y", "713.4"), t(jr, "fill", "url(#bv)"), t(jr, "rx", "4"), t(jr, "ry", "4"), t(ll, "transform", "translate(-359 54)"), t(ll, "class", "cp-button"), t(ll, "data-cp", "KEYCODE_7"), t(g0, "fill", "#3d3d3d"), t(g0, "d", "M201.5 795.5h-2.4q-.7 0-.3-.6l7.5-18.7h-8.8q-.6 0-.6-.7v-1.9q0-.6.6-.6h11.8q.7 0 .7.6v2.2q0 .5-.4 1.5l-7.1 17.7q-.2.5-1 .5z"), t(g0, "font-family", "Rajdhani"), t(g0, "font-size", "35"), t(g0, "font-weight", "600"), t(g0, "letter-spacing", "0"), t(gl, "word-spacing", "0"), t(gl, "class", "cp-button-label"), v(gl, "line-height", "125%"), t(Hr, "fill", "#fff"), t(Hr, "d", "M199.3 723.3q-3.8 4-8 8l1.9 4.3 1.1 2.5q.4.8.8 1.2l.7.5 1.1.3-.2 1h-4.9l-2.7-8-1.2 1.2-1.5 1.6-1 1.3-.4.9-.1.8q0 .5.3.8.3.3 1 .4l-.3 1h-5.5l-.4-1q4.3-4.6 8.4-8.5l-1.8-4.3-1-2q-.3-.8-.6-1.1l-.8-.6-1.2-.3.2-1h5l2.5 7.4 1.8-1.8 1.2-1.5q.4-.5.5-1 .2-.4.2-.9 0-1-1.3-1.2l.2-1h5.6l.4 1z"), t(Hr, "font-family", "Cambria"), t(Hr, "font-size", "40"), t(Hr, "font-style", "italic"), t(Hr, "font-weight", "400"), t(Hr, "letter-spacing", "0"), t(vl, "word-spacing", "0"), t(vl, "class", "cp-button-label"), v(vl, "line-height", "125%"), t(v0, "x", "1714.4"), t(v0, "y", "880.6"), t(v0, "font-family", "Lucida Calligraphy"), t(v0, "font-style", "italic"), t(v0, "font-weight", "400"), t(St, "xml:space", "preserve"), t(St, "x", "1714.4"), t(St, "y", "880.6"), t(St, "font-family", "Script MT Bold"), t(St, "font-size", "40"), t(St, "font-weight", "700"), t(St, "letter-spacing", "0"), t(St, "word-spacing", "0"), v(St, "line-height", "125%"), t(y0, "fill", "#3d3d3d"), t(y0, "d", "M322.2 792.6h2.7q1.3 0 2-.6.6-.6.6-2v-1.8q0-2.6-2.6-2.6h-2.7q-2.5 0-2.5 2.6v1.9q0 1.3.6 1.9.6.6 1.9.6zm0-9.8h2.7q2.6 0 2.6-2.6v-1.7q0-1.3-.7-2-.6-.5-1.9-.5h-2.7q-1.3 0-2 .6-.5.6-.5 1.9v1.7q0 2.6 2.5 2.6zm3.2 12.7h-3.7q-2.6 0-4-1.3t-1.4-3.9v-1.9q0-3.2 2.4-4.2-2.4-1-2.4-4.2v-1.8q0-2.5 1.4-3.8 1.4-1.4 4-1.4h3.7q2.6 0 4 1.4 1.5 1.3 1.5 3.8v1.8q0 1.6-.7 2.7-.6 1.1-1.7 1.5 2.4 1 2.4 4.3v1.8q0 2.6-1.5 3.9-1.4 1.3-4 1.3z"), t(y0, "font-family", "Rajdhani"), t(y0, "font-size", "35"), t(y0, "font-weight", "600"), t(y0, "letter-spacing", "0"), t(yl, "word-spacing", "0"), t(yl, "class", "cp-button-label"), v(yl, "line-height", "125%"), t(x0, "fill", "#3d3d3d"), t(x0, "d", "M441.9 784.1h4.9v-5.5q0-2.6-2.6-2.6H442q-2.5 0-2.5 2.6v3q0 2.5 2.5 2.5zm2.8 11.4h-7q-.7 0-.7-.6v-1.8q0-.5.6-.5h6.6q2.6 0 2.6-2.6v-3h-5.4q-2.6 0-4-1.4-1.5-1.4-1.5-4v-3.3q0-2.5 1.4-4 1.5-1.4 4-1.4h3.4q2.6 0 4 1.5 1.5 1.4 1.5 4V790q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(x0, "font-family", "Rajdhani"), t(x0, "font-size", "35"), t(x0, "font-weight", "600"), t(x0, "letter-spacing", "0"), t(xl, "word-spacing", "0"), t(xl, "class", "cp-button-label"), v(xl, "line-height", "125%"), t(m0, "fill", "#3d3d3d"), t(m0, "d", "M204 842.2V830l-7 12.3h7zm2.6 7.3h-2q-.7 0-.7-.6v-3.6h-9.2q-1 0-1-1v-1.1q0-.8.3-1.4l7.8-13.9.5-.7q.3-.2.8-.2h3q1 0 1 1v14.2h2.6q.6 0 .6.6v1.8q0 .7-.6.7h-2.5v3.6q0 .6-.6.6z"), t(m0, "font-family", "Rajdhani"), t(m0, "font-size", "35"), t(m0, "font-weight", "600"), t(m0, "letter-spacing", "0"), t(ml, "word-spacing", "0"), t(ml, "class", "cp-button-label"), v(ml, "line-height", "125%"), t(b0, "fill", "#3d3d3d"), t(b0, "d", "M323.9 837.6h-2.2q-.6 0-1.1.3-.4.2-.6.5-.3.8-.9.8h-2.2q-.6 0-.6-.6v-11q0-.6.6-.6h11.9q.6 0 .6.6v2q0 .6-.6.6h-9v6.4q.5-1.7 2.9-1.7h2q2.6 0 3.9 1.3 1.3 1.3 1.3 3.8v4.1q0 2.6-1.4 4-1.5 1.4-4 1.4h-3q-2.6 0-4-1.4t-1.4-4v-1q0-.5.6-.5h2.2q.6 0 .6.6v.9q0 2.5 2.5 2.5h2q2.6 0 2.6-2.5v-3.6q0-1.5-.6-2.2-.6-.7-2.1-.7z"), t(b0, "font-family", "Rajdhani"), t(b0, "font-size", "35"), t(b0, "font-weight", "600"), t(b0, "letter-spacing", "0"), t(bl, "word-spacing", "0"), t(bl, "class", "cp-button-label"), v(bl, "line-height", "125%"), t(q0, "fill", "#3d3d3d"), t(q0, "d", "M442 846.6h2.5q2.5 0 2.5-2.6v-2.8q0-2.6-2.5-2.6h-5v5.4q0 2.6 2.6 2.6zm3 3h-3.4q-2.6 0-4-1.5-1.5-1.4-1.5-4v-11.7q0-2.5 1.5-4 1.4-1.4 4-1.4h7q.5 0 .5.6v1.8q0 .6-.6.6h-6.4q-2.5 0-2.5 2.6v3h5.3q2.6 0 4 1.4 1.5 1.4 1.5 4v3.1q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(q0, "font-family", "Rajdhani"), t(q0, "font-size", "35"), t(q0, "font-weight", "600"), t(q0, "letter-spacing", "0"), t(ql, "word-spacing", "0"), t(ql, "class", "cp-button-label"), v(ql, "line-height", "125%"), t(k0, "fill", "#3d3d3d"), t(k0, "d", "M197.2 886.5v-2q0-.6.5-.9l3.6-2.2q.7-.4 1.2-.4h2q.7 0 .7.6V903q0 .6-.6.6h-2.3q-.6 0-.6-.6v-18.2l-3.8 2.2q-.7.3-.7-.4z"), t(k0, "font-family", "Rajdhani"), t(k0, "font-size", "35"), t(k0, "font-weight", "600"), t(k0, "letter-spacing", "0"), t(kl, "word-spacing", "0"), t(kl, "class", "cp-button-label"), v(kl, "line-height", "125%"), t(w0, "fill", "#3d3d3d"), t(w0, "d", "M316 903v-3.3q0-2.2 2-3.6l6.5-5.4q1.7-1.3 1.7-3.1v-1.2q0-2.5-2.6-2.5h-1.7q-1.4 0-2 .6-.6.6-.6 2v1.2q0 .7-.6.7h-2.2q-.6 0-.6-.7v-1.3q0-2.6 1.4-4 1.5-1.4 4-1.4h2.8q2.6 0 4 1.4t1.4 4v1.4q0 2.7-2.1 4.5l-6.7 5.5q-.8.7-.8 1.6v1h9q.7 0 .7.7v1.8q0 .6-.6.6h-12.3q-.6 0-.6-.6z"), t(w0, "font-family", "Rajdhani"), t(w0, "font-size", "35"), t(w0, "font-weight", "600"), t(w0, "letter-spacing", "0"), t(wl, "word-spacing", "0"), t(wl, "class", "cp-button-label"), v(wl, "line-height", "125%"), t(G0, "fill", "#3d3d3d"), t(G0, "d", "M442 890.8h1.9q2.6 0 2.6-2.5v-1.9q0-2.5-2.6-2.5h-2q-1.4 0-2 .6-.6.6-.6 2v1q0 .6-.6.6h-2.2q-.6 0-.6-.6v-1.1q0-2.6 1.4-4t4-1.4h3q2.7 0 4.1 1.4 1.4 1.4 1.4 4v1.9q0 3-2.8 4 2.8.6 2.8 3.8v2q0 2.6-1.4 4t-4 1.4h-3q-2.7 0-4-1.4-1.5-1.4-1.5-4V897q0-.6.6-.6h2.2q.6 0 .6.6v1.2q0 1.3.6 2 .6.5 2 .5h2q2.6 0 2.6-2.5v-2q0-2.5-2.6-2.5h-2q-.5 0-.5-.6v-1.5q0-.7.6-.7z"), t(G0, "font-family", "Rajdhani"), t(G0, "font-size", "35"), t(G0, "font-weight", "600"), t(G0, "letter-spacing", "0"), t(Gl, "word-spacing", "0"), t(Gl, "class", "cp-button-label"), v(Gl, "line-height", "125%"), t(_0, "fill", "#3d3d3d"), t(_0, "d", "M204.2 954.6h2.5q2.6 0 2.6-2.6v-11.4q0-2.6-2.6-2.6h-2.5q-2.5 0-2.5 2.6V952q0 2.6 2.5 2.6zm3 3h-3.5q-2.6 0-4-1.5-1.4-1.4-1.4-4v-11.7q0-2.5 1.4-4 1.4-1.4 4-1.4h3.5q2.6 0 4 1.5 1.4 1.4 1.4 4V952q0 2.6-1.4 4t-4 1.4z"), t(_0, "font-family", "Rajdhani"), t(_0, "font-size", "35"), t(_0, "font-weight", "600"), t(_0, "letter-spacing", "0"), t(_l, "word-spacing", "0"), t(_l, "class", "cp-button-label"), v(_l, "line-height", "125%"), t(Rr, "fill", "#3d3d3d"), t(Rr, "d", "M387 1061.8h-10q-.5 0-.5-.5V1042q0-.5.5-.5h10q.6 0 .6.5v1.6q0 .6-.5.6h-7.2q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.5.6h-6.1q-.4 0-.4.3v5.6q0 .3.4.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.3-.1q-.1-.2 0-.4l5.2-10-5-9.2v-.3q.1-.2.4-.2h2.2q.6 0 .9.5l3.6 7.3h.1l3.7-7.3q.2-.5.8-.5h2.3q.3 0 .3.2.2.2 0 .4l-5 9.1 5.2 10q.2.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7-4 7.7q-.2.5-.7.5zm17.8 0h-2q-.6 0-.6-.5V1042q0-.5.6-.5h7.5q2.3 0 3.6 1.3 1.2 1.2 1.2 3.6v3.2q0 2.3-1.2 3.6-1.3 1.3-3.6 1.3h-4.6q-.4 0-.4.3v6.4q0 .5-.5.5zm.8-9.9h4.2q2.3 0 2.3-2.3v-3q0-2.3-2.3-2.3h-4.2q-.3 0-.3.3v7q0 .3.3.3z"), t(Rr, "font-family", "Rajdhani"), t(Rr, "font-size", "31.5"), t(Rr, "font-weight", "600"), t(Rr, "letter-spacing", "0"), t(Rr, "transform", "scale(1.1 .9)"), t(Ul, "word-spacing", "0"), t(Ul, "class", "cp-button-label"), v(Ul, "line-height", "125%"), t(Qn, "fill", "#3d3d3d"), t(Qn, "d", "M327 946.4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z"), t(Qn, "class", "cp-button-label"), t(At, "fill", "#fff"), t(At, "d", "m273.8 721.7-.3 1.7h.5c.4 0 .6.2.7.2l.3.4.2 1.5 1.4 10.6-1.4 1.8-1.1 1.2-.9.6-.5.3h-1l-.2-.5v-.5h-2l-.8 3.5.4.2 1 .2a5.6 5.6 0 0 0 2.5-.1c.5-.1 1-.4 1.5-.7a9 9 0 0 0 1.6-1.3 109.4 109.4 0 0 0 6.7-8.7l3-4.7 2-4.3v-.2l-.6-1.2h-4.5l-.3 1.7h.6c.4 0 .6.2.7.2v.6c0 1.4-1.4 4.3-4 8l-1-10.5h-4.6z"), t(At, "font-family", "Script MT Bold"), t(At, "font-size", "29.8"), t(At, "font-weight", "700"), t(At, "letter-spacing", "0"), t(At, "word-spacing", "0"), t(At, "class", "cp-button-label"), v(At, "line-height", "125%"), t(Dr, "fill", "#fff"), t(Dr, "d", "m375.3 734.5-1.1 5.5H360l-.4-1 10.7-12.2 3.3-3.7v-.2H369q-1 0-1.5.2-.5.1-1 .5l-1 1q-.5.6-1.2 1.9h-1.7l1.1-5.1h14l.3 1-14 16h6.3q.6-.2 1.1-.6.5-.3 1-1t1.2-2.3h1.7z"), t(Dr, "font-family", "Cambria"), t(Dr, "font-size", "40"), t(Dr, "font-style", "italic"), t(Dr, "font-weight", "400"), t(Dr, "letter-spacing", "0"), t(zl, "word-spacing", "0"), t(zl, "class", "cp-button-label"), v(zl, "line-height", "125%"), t(U0, "fill", "#fff"), t(U0, "d", "m102 795-2.6 2.5-1-1-1.3-1.3-2.6-2.6q-.6-1-.6-2v-10.8q0-1 .6-2l2.3-2.5 1.1-1 1.5-1.4 2.6 2.5-1.3 1.2-2.2 2.1q-1 1-1 1.2v10.6q0 .3 1.9 2l2.7 2.5z"), t(U0, "font-family", "Blender Pro"), t(U0, "font-size", "35"), t(U0, "font-weight", "700"), t(U0, "letter-spacing", "0"), t(Sl, "word-spacing", "0"), t(Sl, "class", "cp-button-label"), v(Sl, "line-height", "125%"), t(z0, "fill", "#fff"), t(z0, "d", "M102 844.6q0 1.1-.6 2-.6.8-2.6 2.6l-2.4 2.3-2.6-2.6q1-.7 2.7-2.3 1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2.1-2l-1.3-1.3 2.5-2.5 1 1 1.7 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(z0, "font-family", "Blender Pro"), t(z0, "font-size", "35"), t(z0, "font-weight", "700"), t(z0, "letter-spacing", "0"), t($l, "word-spacing", "0"), t($l, "class", "cp-button-label"), v($l, "line-height", "125%"), t(S0, "fill", "#fff"), t(S0, "d", "M108 728.7H85.6V723H108v5.6zm0 9H85.6V732H108v5.6z"), t(S0, "font-family", "Blender Pro"), t(S0, "font-size", "60"), t(S0, "font-weight", "700"), t(S0, "letter-spacing", "0"), t(Ol, "word-spacing", "0"), t(Ol, "class", "cp-button-label"), v(Ol, "line-height", "125%"), t(Qr, "fill", "#fff"), t(Qr, "d", "M98 1300.2c-1 0-2 .2-2.6.8a4 4 0 0 0-.9 2.7c0 1 .2 1.9.8 2.5.4.4 1 .7 1.7.8-.3.7-.7 1.3-1.5 1.8l-.2.1v3.1l.6-.2a7.8 7.8 0 0 0 4.2-2.7 8 8 0 0 0 1.4-4.9c0-1.2-.3-2.3-.9-3-.6-.7-1.5-1-2.6-1z"), t(Qr, "font-family", "Britannic Bold"), t(Qr, "font-size", "35"), t(Qr, "font-weight", "400"), t(Qr, "letter-spacing", "0"), t(Qr, "transform", "translate(0 -411.6)"), t(Ml, "word-spacing", "0"), t(Ml, "class", "cp-button-label"), v(Ml, "line-height", "125%"), t(Br, "fill", "#fff"), t(Br, "d", "m808.1 955-2.6 2.5-1.1-1-1.3-1.3q-2-1.9-2.5-2.6-.6-1-.6-2v-10.8q0-1 .6-2 .6-.9 2.3-2.5l1-1 1.6-1.4 2.6 2.5-1.4 1.2-2.1 2.1q-1 1-1 1.2v10.6q0 .3 1.8 2l2.7 2.5zm17.4-8h-13.6v-3.3h13.6v3.3zm10.6 3.6q0 1.1-.5 2-.6.8-2.5 2.6l-2.5 2.3-2.5-2.6 2.6-2.3q1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2-2l-1.4-1.3 2.5-2.5 1.1 1 1.6 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(Br, "font-family", "Blender Pro"), t(Br, "font-size", "35"), t(Br, "font-weight", "700"), t(Br, "letter-spacing", "0"), t(Br, "transform", "translate(-720)"), t(Cl, "word-spacing", "0"), t(Cl, "class", "cp-button-label"), v(Cl, "line-height", "125%"), t(Lr, "fill", "#fff"), t(Lr, "d", "M482.4 1061.8h-10q-.6 0-.6-.5V1042q0-.5.6-.5h10q.5 0 .5.5v1.6q0 .6-.5.6h-7.1q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.4.3h7.1q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.4-.1v-.4l5.3-10-5-9.2v-.3q0-.2.3-.2h2.3q.6 0 .9.5l3.6 7.3h.1l3.6-7.3q.3-.5.8-.5h2.4q.2 0 .3.2.1.2 0 .4l-5 9.1 5.2 10q.1.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7h-.1l-3.9 7.7q-.2.5-.7.5zm25.8 0h-10q-.6 0-.6-.5V1042q0-.5.5-.5h10.1q.5 0 .5.5v1.6q0 .6-.5.6H507q-.3 0-.3.3v5.3q0 .3.3.3h6.1q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.3.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5z"), t(Lr, "font-family", "Rajdhani"), t(Lr, "font-size", "31.5"), t(Lr, "font-weight", "600"), t(Lr, "letter-spacing", "0"), t(Lr, "transform", "scale(1.1 .9)"), t(El, "word-spacing", "0"), t(El, "class", "cp-button-label"), v(El, "line-height", "125%"), t($0, "fill", "#fff"), t($0, "d", "M552.6 889.9h8.5q1.2 0 1.2 1.2v2.5q0 1.2-1.2 1.2h-8.5v8.7q0 1.2-1.2 1.2h-2.7q-1.2 0-1.2-1.2v-8.7H539q-1.2 0-1.2-1.2v-2.5q0-1.2 1.2-1.2h8.6v-8.6q0-1.2 1.2-1.2h2.7q1.2 0 1.2 1.2v8.6z"), t($0, "font-family", "Rajdhani"), t($0, "font-size", "60"), t($0, "font-weight", "600"), t($0, "letter-spacing", "0"), t(jl, "word-spacing", "0"), t(jl, "class", "cp-button-label"), v(jl, "line-height", "125%"), t(O0, "fill", "#fff"), t(O0, "d", "M559.3 840H539q-1 0-1-1v-1.3q0-1 1-1h20.3q1 0 1 1v1.3q0 1-1 1z"), t(O0, "font-family", "Rajdhani"), t(O0, "font-size", "60"), t(O0, "font-weight", "600"), t(O0, "letter-spacing", "0"), t(Hl, "word-spacing", "0"), t(Hl, "class", "cp-button-label"), v(Hl, "line-height", "125%"), t(M0, "fill", "#fff"), t(M0, "d", "m552.6 784 6.3 6.4q.8.7 0 1.6l-2 1.9q-.7.9-1.6 0l-6.3-6.3-6.3 6.4q-.9.8-1.6-.1l-2-2q-.8-.8 0-1.5l6.3-6.4-6.3-6.2q-.8-.9 0-1.7l2-2q.8-.8 1.6 0l6.3 6.3 6.3-6.2q.8-.9 1.6 0l2 2q.7.7 0 1.6l-6.3 6.2z"), t(M0, "font-family", "Rajdhani"), t(M0, "font-size", "60"), t(M0, "font-weight", "600"), t(M0, "letter-spacing", "0"), t(Rl, "word-spacing", "0"), t(Rl, "class", "cp-button-label"), v(Rl, "line-height", "125%"), t(C0, "fill", "#fff"), t(C0, "d", "M547 740.3v-3.2q0-1 1-1 h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1zm11.1-7.9H540q-1.1 0-1.1-1v-2q0-1 1-1h18.2q1 0 1 1v2q0 1-1 1zm-11.1-8.8v-3.1q0-1.1 1-1.1h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1z"), t(C0, "font-family", "Rajdhani"), t(C0, "font-size", "60"), t(C0, "font-weight", "600"), t(C0, "letter-spacing", "0"), t(Dl, "word-spacing", "0"), t(Dl, "class", "cp-button-label"), v(Dl, "line-height", "125%"), t(E0, "fill", "#fff"), t(E0, "d", "M450.5 738.4H447q-1.3 0-.7-1.1l7.4-14.2q.5-1 .9-1.2.4-.3 1.3-.3h4.2q.9 0 1.3.3t.9 1.2l7.4 14.2q.6 1-.7 1h-3.4q-1 0-1.4-1l-6.2-12-6.2 12q-.6 1-1.4 1z"), t(E0, "font-family", "Rajdhani"), t(E0, "font-size", "60"), t(E0, "font-weight", "600"), t(E0, "letter-spacing", "0"), t(Ql, "word-spacing", "0"), t(Ql, "class", "cp-button-label"), v(Ql, "line-height", "125%"), t(j0, "fill", "#fff"), t(j0, "d", "M101.6 619.1h-1.5q-.4 0-.4-.3v-12.2q0-.4.4-.4h1.5q.4 0 .4.4v6.3h.1l.6-1 4.5-5.3q.3-.4.8-.4h1.7q.5 0 .2.4l-4.6 5.3 5.2 6.8q.2.4-.3.4h-1.3q-.7 0-1-.3l-4-5.5-1.9 1.9v3.6q0 .3-.4.3zm19.4 0h-5.2q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.7 0 2.7.8 1 .8 1 2.3v2.5q0 .4-.5.4h-6.3q-.2 0-.2.2v.9q0 1.4 1.7 1.4h4.7q.4 0 .4.4v1q0 .3-.4.3zm-6.3-5.6h4.2q.3 0 .3-.2v-1.2q0-.8-.4-1.1-.4-.4-1.3-.4h-1.3q-1 0-1.3.4-.4.3-.4 1v1.3q0 .2.2.2zm10.7 8.9h-1.2q-.4 0-.4-.4v-1q0-.4.4-.4h.5q1.5 0 2-.5.6-.4 1-1.5h-1q-.4 0-.5-.4l-3.1-9q-.1-.3.3-.3h1.6q.3 0 .4.3l2.6 7.9 2.7-7.9q0-.3.4-.3h1.5q.5 0 .4.3l-3.2 9.7q-.6 1.7-1.5 2.6-1 .9-2.9.9zm12.1-5h3q1.7 0 1.7-1.5v-4q0-1.4-1.7-1.4h-1.3q-2 0-2 1.7v5q0 .2.3.2zm-2.5 1.4v-13.4q0-.4.4-.4h1.5q.4 0 .4.4v4.5q.7-1 2.5-1h1q1.7 0 2.7.7 1 .8 1 2.3v4.1q0 1.5-1 2.3-1 .8-2.7.8h-5.4q-.4 0-.4-.3zm17.7.3h-2.1q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.8 0 2.8.8 1 .8 1 2.3v4q0 1.5-1 2.3-1 .8-2.7.8zm-1.8-1.7h1.5q1.7 0 1.7-1.5v-3.8q0-1.5-1.7-1.5h-1.5q-.9 0-1.3.4-.4.3-.4 1v4q0 .7.4 1 .4.4 1.3.4zm12.5 1.7h-1q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h5.2q.5 0 .5.3v9.6q0 .3-.5.3h-1.4q-.4 0-.4-.3v-.8h-.1q-.6 1.1-2.4 1.1zm2.5-3.4v-5l-.3-.1h-2.8q-1.7 0-1.7 1.5v3.8q0 1.5 1.7 1.5h1.1q2 0 2-1.7zm7.1 3.4h-1.5q-.4 0-.4-.3v-9.6q0-.3.4-.3h1.5q.4 0 .4.3v.8q.3-.5 1-.8.6-.3 1.5-.3h.8q.4 0 .4.3v1q0 .5-.4.4h-1.4q-2 0-2 1.8v6.4q0 .3-.3.3zm10.5 0h-1.2q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3.9-.8 2.6-.8h1.2q1.8 0 2.3 1h.1v-4.5q0-.4.4-.4h1.5q.4 0 .4.4v13.4q0 .3-.4.3h-1.5q-.4 0-.4-.3v-.8q-.6 1.1-2.4 1.1zm2.4-3.4v-3.4q0-1.7-2-1.7h-1.2q-1.6 0-1.6 1.5v3.8q0 1.5 1.6 1.5h1.3q2 0 2-1.7z"), t(j0, "font-family", "Rajdhani"), t(j0, "font-size", "25"), t(j0, "font-weight", "600"), t(j0, "letter-spacing", "0"), t(Bl, "word-spacing", "0"), t(Bl, "class", "cp-button-label"), v(Bl, "line-height", "125%"), t(Kr, "fill", "#42caf7"), t(Kr, "d", "M118.6 667.2v-.6q0-.4.4-.4h1.6q.4 0 .4.4v.4q0 1.1.5 1.6.4.4 1.5.4h1.7q1.1 0 1.6-.5t.5-1.6v-.5q0-.8-.7-1.3-.6-.5-1.5-.6l-2-.4-2-.6q-.8-.3-1.4-1.2-.6-.9-.6-2.3v-1q0-1.9 1-2.9t2.9-1h2.6q1.9 0 2.9 1t1 2.9v.5q0 .4-.4.4H127q-.4 0-.4-.4v-.3q0-1-.5-1.5-.4-.5-1.5-.5H123q-1 0-1.5.5t-.5 1.6v.8q0 1.1 1.6 1.5l1.6.3 1.8.4 1.6.7q.7.4 1.1 1.2.5.9.5 2v1q0 1.9-1 3-1.1 1-3 1h-2.7q-1.8 0-2.9-1-1-1.1-1-3zm15.7 3.9h-1.6q-.4 0-.4-.4V654q0-.4.4-.4h1.6q.4 0 .4.4v5.7h.1q.6-1.3 2.6-1.3h1q1.9 0 2.9 1t1 2.9v8.4q0 .4-.5.4h-1.6q-.4 0-.4-.4v-8.3q0-1.9-1.8-1.9h-1.2q-2 0-2 2.1v8.1q0 .4-.5.4zm11.1-14.8V654q0-.4.4-.4h1.6q.4 0 .4.4v2.3q0 .4-.4.4h-1.6q-.4 0-.4-.4zm0 14.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v12.3h-2q-.4 0-.4-.4zm9.6-12.3h2q.5 0 .5.4v1.3q0 .4-.5.4h-2q-.3 0-.3.3v10q0 .3-.5.3h-1.6q-.4 0-.4-.4v-10q0-.2-.3-.2h-1.3q-.4 0-.4-.4v-1.6l.4-.1h1.3q.3 0 .3-.3v-.7q0-1.8 1-2.8 1-1 2.7-1h1.1q.5 0 .5.4v1.3q0 .4-.5.4h-.7q-.9 0-1.3.4-.3.5-.3 1.4v.6q0 .3.2.3zm4.8 2.1h-1.5v-1.8q0-.4.3-.4h1.2q.3 0 .3-.3v-2q0-.4.4-.4h1.6q.4 0 .4.4v2.2q0 .3.3.3h2.3q.5 0 .5.4v1.3q0 .4-.5.4h-2.3q-.3 0-.3.3v6.4q0 1.8 2 1.8h.9q.4 0 .4.4v1.3q0 .4-.4.4H164q-1.8 0-2.9-1-1-1-1-2.8v-6.5q0-.3-.3-.3z"), t(Kr, "font-family", "Rajdhani"), t(Kr, "font-size", "25"), t(Kr, "font-weight", "600"), t(Kr, "letter-spacing", "0"), v(Kr, "text-align", "center"), t(H0, "text-anchor", "middle"), t(H0, "word-spacing", "0"), t(H0, "class", "cp-button-label"), v(H0, "line-height", "125%"), v(H0, "text-align", "center"), t(Pr, "fill", "#fff"), t(Pr, "d", "M503.8 671.1H501q-1.8 0-2.9-1-1-1-1-2.8v-8.4q0-1.8 1-2.8 1-1 3-1h2.8q1.8 0 2.9 1 1 1 1 2.8v1.2q0 .5-.5.5h-1.5q-.5 0-.5-.5v-1q0-1.9-1.8-1.9h-2.1q-1.8 0-1.8 1.8v8.2q0 1.8 1.8 1.8h2.1q1.8 0 1.8-1.8V666q0-.5.5-.5h1.5q.5 0 .5.5v1.2q0 1.8-1 2.8-1 1-2.9 1zm8.8 0h-1.5q-.5 0-.5-.4V654q0-.4.5-.4h1.5q.5 0 .5.4v16.7q0 .4-.5.4zm12.8 0H520q-1.9 0-3-1-1-1-1-2.8v-5q0-1.9 1-2.9 1.1-1 3-1h2q1.9 0 2.9 1t1 2.9v3.1q0 .5-.4.5h-6.7q-.3 0-.3.2v1.1q0 1.8 1.8 1.8h5q.5 0 .5.5v1.2q0 .4-.4.4zm-6.6-6.9h4.4q.3 0 .3-.3v-1.6q0-.9-.4-1.3-.5-.5-1.4-.5h-1.4q-1 0-1.4.5-.4.4-.4 1.3v1.6q0 .3.3.3zm14.4 6.9h-1q-1.8 0-2.8-1-1-1-1-2.8v-5q0-1.9 1-2.9t2.9-1h5.6q.4 0 .4.4v12q0 .3-.4.3h-1.6q-.4 0-.4-.4v-.9h-.1q-.6 1.3-2.6 1.3zm2.7-4.2v-6.1q0-.3-.3-.3h-3q-1.8 0-1.8 1.9v4.8q0 1.8 1.8 1.8h1.2q2 0 2-2.1zm7.5 4.2h-1.6q-.4 0-.4-.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v1h.1q.3-.7 1-1 .7-.4 1.6-.4h1q.3 0 .3.4v1.3q0 .5-.4.4H546q-2 0-2 2.3v8q0 .3-.5.3z"), t(Pr, "font-family", "Rajdhani"), t(Pr, "font-size", "25"), t(Pr, "font-weight", "600"), t(Pr, "letter-spacing", "0"), v(Pr, "text-align", "center"), t(R0, "text-anchor", "middle"), t(R0, "word-spacing", "0"), t(R0, "class", "cp-button-label"), v(R0, "line-height", "125%"), v(R0, "text-align", "center"), t(F, "fill", "#42caf7"), t(F, "d", "M473.6 656.2a1.5 1.5 0 0 0-1 2.6 6.5 6.5 0 1 1-9.2 0 1.5 1.5 0 1 0-2.1-2.2 9.5 9.5 0 1 0 13.4 0 1.5 1.5 0 0 0-1-.4z"), t(F, "color", "#000"), t(F, "font-family", "sans-serif"), t(F, "font-weight", "400"), t(F, "overflow", "visible"), t(F, "class", "cp-button-label"), v(F, "line-height", "normal"), v(F, "text-indent", "0px"), v(F, "text-align", "start"), v(F, "text-decoration-line", "none"), v(F, "text-decoration-style", "solid"), v(F, "text-decoration-color", "rgb(0, 0, 0)"), v(F, "text-transform", "none"), v(F, "white-space", "normal"), v(F, "isolation", "auto"), v(F, "mix-blend-mode", "normal"), t(T, "fill", "#42caf7"), t(T, "d", "M468 652.4c-.8 0-1.5.6-1.5 1.5v10c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10c0-.9-.7-1.5-1.5-1.5z"), t(T, "color", "#000"), t(T, "font-family", "sans-serif"), t(T, "font-weight", "400"), t(T, "overflow", "visible"), t(T, "class", "cp-button-label"), v(T, "line-height", "normal"), v(T, "text-indent", "0px"), v(T, "text-align", "start"), v(T, "text-decoration-line", "none"), v(T, "text-decoration-style", "solid"), v(T, "text-decoration-color", "rgb(0, 0, 0)"), v(T, "text-transform", "none"), v(T, "white-space", "normal"), v(T, "isolation", "auto"), v(T, "mix-blend-mode", "normal"), t(Ll, "fill", "#fff"), t(Ll, "fill-rule", "evenodd"), t(Ll, "d", "m500 607.4-12 6.9 12.2 7v-4H520v-6h-20z"), t(Ll, "class", "cp-button-label"), t(Bn, "fill", "#222"), t(Bn, "fill-rule", "evenodd"), t(Bn, "d", "m1210-959.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(Ln, "fill", "#1c1c1c"), t(Ln, "fill-rule", "evenodd"), t(Ln, "d", "M1210-959.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(ne, "width", "20"), t(ne, "height", "18"), t(ne, "x", "1200"), t(ne, "y", "-941.6"), t(ne, "fill", "#7e7e7e"), t(ne, "fill-opacity", ".2"), t(ne, "rx", "0"), t(ne, "ry", "0"), t(Kn, "fill", "#272727"), t(Kn, "fill-rule", "evenodd"), t(Kn, "d", "m1275-897.6-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3z"), t(Pn, "fill", "#222"), t(Pn, "fill-rule", "evenodd"), t(Pn, "d", "m1275-909.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(Yn, "fill", "#1c1c1c"), t(Yn, "fill-rule", "evenodd"), t(Yn, "d", "M1275-909.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(ie, "width", "20"), t(ie, "height", "18"), t(ie, "x", "1265"), t(ie, "y", "-891.6"), t(ie, "fill", "#7e7e7e"), t(ie, "fill-opacity", ".2"), t(ie, "rx", "0"), t(ie, "ry", "0"), t(u, "transform", "translate(0 411.6)"), t(l, "xmlns", "http://www.w3.org/2000/svg"), t(l, "xmlns:xlink", "http://www.w3.org/1999/xlink"), t(l, "viewBox", "0 0 648 1464");
    },
    m(j2, oi) {
      z(j2, l, oi), e(l, n), e(n, a), e(a, o), e(a, s), e(a, c), e(a, d), e(n, p), e(p, f), e(p, G), e(p, y), e(p, S), e(p, _), e(n, x), e(x, q), e(x, b), e(x, Q), e(x, K), e(n, j), e(j, V), e(j, O), e(j, g), e(j, $), e(j, Ot), e(n, P), e(P, Mt), e(P, Q0), e(P, Lt), e(P, ae), e(n, Vr), e(Vr, I), e(Vr, Z), e(n, Vt), e(Vt, Kt), e(Vt, oe), e(Vt, B0), e(Vt, Pt), e(n, Ft), e(Ft, X), e(Ft, Yt), e(Ft, Ct), e(Ft, Fr), e(n, Tr), e(Tr, k), e(Tr, H), e(n, se), e(se, Ir), e(se, L0), e(n, ce), e(ce, Nr), e(ce, Tn), e(n, Fl), e(Fl, In), e(Fl, Tl), e(n, al), e(al, Il), e(al, Nl), e(al, Zl), e(n, ol), e(ol, Xl), e(ol, Wl), e(ol, Jl), e(n, K0), e(K0, Nn), e(K0, Zn), e(K0, Xn), e(K0, Wn), e(n, Zr), e(Zr, Jn), e(Zr, t2), e(Zr, e2), e(Zr, r2), e(Zr, l2), e(n, tn), e(tn, n2), e(tn, en), e(n, P0), e(P0, i2), e(P0, a2), e(P0, o2), e(P0, rn), e(n, sl), e(sl, s2), e(sl, ln), e(sl, nn), e(n, cl), e(cl, c2), e(cl, an), e(cl, on), e(n, sn), e(sn, d2), e(sn, cn), e(n, dn), e(dn, f2), e(dn, fn), e(n, dl), e(dl, p2), e(dl, pn), e(dl, h2), e(n, Tt), e(Tt, u2), e(Tt, g2), e(Tt, v2), e(Tt, y2), e(Tt, x2), e(Tt, m2), e(Tt, b2), e(n, de), e(n, fe), e(n, pe), e(n, he), e(n, ue), e(n, ge), e(n, ve), e(n, ye), e(n, xe), e(n, me), e(n, be), e(n, qe), e(n, ke), e(n, we), e(n, Ge), e(n, _e), e(n, Ue), e(n, ze), e(n, Se), e(n, $e), e(n, Oe), e(n, Me), e(n, Ce), e(n, Ee), e(n, je), e(n, He), e(n, Re), e(n, De), e(n, Qe), e(n, Be), e(n, Le), e(n, Ke), e(n, Pe), e(n, Ye), e(n, Ae), e(n, Ve), e(n, Fe), e(n, Te), e(n, Ie), e(n, Ne), e(n, Ze), e(n, Xe), e(n, We), e(n, Je), e(n, t1), e(n, e1), e(n, r1), e(n, l1), e(n, n1), e(n, i1), e(n, a1), e(n, o1), e(n, s1), e(n, c1), e(n, d1), e(n, f1), e(n, p1), e(n, h1), e(n, u1), e(n, g1), e(n, v1), e(n, y1), e(n, x1), e(n, m1), e(n, It), e(n, Nt), e(n, Zt), e(n, b1), e(n, q1), e(n, k1), e(n, w1), e(n, G1), e(n, _1), e(n, U1), e(n, z1), e(n, S1), e(n, $1), e(n, O1), e(n, M1), e(n, C1), e(n, E1), e(n, j1), e(n, H1), e(n, R1), e(n, D1), e(n, Q1), e(n, B1), e(n, L1), e(n, K1), e(n, P1), e(n, Y1), e(n, A1), e(n, V1), e(n, F1), e(n, T1), e(n, I1), e(n, N1), e(n, Z1), e(n, X1), e(n, W1), e(n, J1), e(n, Et), e(Et, Y0), e(Et, hn), e(Et, un), e(n, tr), e(l, N), e(N, fl), e(N, gn), e(N, pl), e(N, A0), e(N, jt), e(N, Ht), e(N, Rt), e(N, Dt), e(N, Xt), e(N, Wt), e(N, Jt), e(N, Xr), e(Xr, W), e(Xr, er), e(Xr, vn), e(N, q2), e(q2, k2), e(l, w2), e(w2, Wr), e(Wr, G2), e(l, u), e(u, yn), e(u, xn), e(u, mn), e(u, hl), e(u, ul), e(u, V0), e(V0, J), e(V0, rr), e(V0, bn), e(u, Jr), e(Jr, tt), e(Jr, lr), e(Jr, qn), e(u, t0), e(t0, et), e(t0, nr), e(t0, kn), e(u, e0), e(e0, rt), e(e0, ir), e(e0, wn), e(u, r0), e(r0, lt), e(r0, ar), e(r0, Gn), e(u, l0), e(l0, nt), e(l0, or), e(l0, _n), e(u, n0), e(n0, it), e(n0, sr), e(n0, Un), e(u, i0), e(i0, at), e(i0, cr), e(i0, zn), e(u, a0), e(a0, ot), e(a0, dr), e(a0, Sn), e(u, o0), e(o0, st), e(o0, fr), e(o0, $n), e(u, s0), e(s0, ct), e(s0, pr), e(s0, On), e(u, c0), e(c0, dt), e(c0, hr), e(c0, Mn), e(u, d0), e(d0, ft), e(d0, ur), e(d0, Cn), e(u, f0), e(f0, pt), e(f0, gr), e(f0, En), e(u, p0), e(p0, ht), e(p0, vr), e(p0, jn), e(u, h0), e(h0, ut), e(h0, yr), e(h0, Hn), e(u, u0), e(u0, gt), e(u0, xr), e(u0, Rn), e(u, _2), e(u, U2), e(u, z2), e(u, mr), e(u, br), e(u, qr), e(u, kr), e(u, Qt), e(u, te), e(u, ee), e(u, re), e(u, Dn), e(u, F0), e(F0, vt), e(F0, wr), e(u, T0), e(T0, yt), e(T0, Gr), e(u, I0), e(I0, xt), e(I0, _r), e(u, N0), e(N0, mt), e(N0, Ur), e(u, Z0), e(Z0, bt), e(Z0, zr), e(u, X0), e(X0, qt), e(X0, Sr), e(u, W0), e(W0, kt), e(W0, $r), e(u, J0), e(J0, wt), e(J0, Or), e(u, le), e(u, tl), e(tl, Gt), e(tl, Mr), e(u, el), e(el, _t), e(el, Cr), e(u, rl), e(rl, Ut), e(rl, Er), e(u, ll), e(ll, zt), e(ll, jr), e(u, gl), e(gl, g0), e(u, vl), e(vl, Hr), e(u, St), e(St, v0), e(v0, Y2), e(St, A2), e(u, yl), e(yl, y0), e(u, xl), e(xl, x0), e(u, ml), e(ml, m0), e(u, bl), e(bl, b0), e(u, ql), e(ql, q0), e(u, kl), e(kl, k0), e(u, wl), e(wl, w0), e(u, Gl), e(Gl, G0), e(u, _l), e(_l, _0), e(u, Ul), e(Ul, Rr), e(u, Qn), e(u, At), e(u, zl), e(zl, Dr), e(u, Sl), e(Sl, U0), e(u, $l), e($l, z0), e(u, Ol), e(Ol, S0), e(u, Ml), e(Ml, Qr), e(u, Cl), e(Cl, Br), e(u, El), e(El, Lr), e(u, jl), e(jl, $0), e(u, Hl), e(Hl, O0), e(u, Rl), e(Rl, M0), e(u, Dl), e(Dl, C0), e(u, Ql), e(Ql, E0), e(u, Bl), e(Bl, j0), e(u, H0), e(H0, Kr), e(u, R0), e(R0, Pr), e(u, F), e(u, T), e(u, Ll), e(u, Bn), e(u, Ln), e(u, ne), e(u, Kn), e(u, Pn), e(u, Yn), e(u, ie);
    },
    p: m,
    i: m,
    o: m,
    d(j2) {
      j2 && U(l);
    }
  };
}
class Ca extends A {
  constructor(l) {
    super(), Y(this, l, null, Ma, L, {});
  }
}
const Ea = (i) => {
  console.log("emu:main recv:", i.detail.state);
}, ja = (i) => {
  console.error("cpu_crash recv:", i.detail), Yr.set("crashed");
  let l = i.detail.name, n = (i.detail.address >>> 0).toString(16).padStart(8, "0"), a = (i.detail.pc >>> 0).toString(16).padStart(8, "0");
  M2.set({
    name: l,
    message: `@ 0x${n} 	
 PC:${a}
`
  });
}, Ha = (i) => {
  let l = i.detail.regs.map((o) => o >>> 0);
  const n = i.detail.pc >>> 0, a = i.detail.instr >>> 0;
  console.debug("cpu_dump recv:", i.detail), console.debug(`cpu:dump: INSTR ${a.toString(16).padStart(4, "0")} 	 - PC: 0x${n.toString(16).padStart(8, "0")}`), console.debug(l.map((o) => o.toString(16).toUpperCase())), C2.set({
    instr: a,
    pc: n,
    registers: l
  });
};
function Ra() {
  document.addEventListener("emu:main", Ea), document.addEventListener("cpu:dump", Ha), document.addEventListener("cpu:crash", ja);
}
function Da(i) {
  let l, n, a, o, s, c, d, p, f, G, y, S, _, x, q, b, Q, K, j, V, O, g;
  return n = new Ei({}), f = new Ca({}), y = new Pi({}), _ = new Ri({}), b = new ua({}), b.$on(
    "romChanged",
    /*doRomLoad*/
    i[7]
  ), b.$on(
    "doRun",
    /*doRun*/
    i[6]
  ), b.$on(
    "doDump",
    /*doDump*/
    i[3]
  ), b.$on(
    "doDebug",
    /*doDebug*/
    i[5]
  ), b.$on(
    "doFullscreen",
    /*doFullscreen*/
    i[0]
  ), b.$on(
    "doCopyScreen",
    /*doCopyScreen*/
    i[1]
  ), b.$on(
    "doSaveScreen",
    /*doSaveScreen*/
    i[2]
  ), K = new Sa({}), K.$on(
    "doRefresh",
    /*doRefresh*/
    i[4]
  ), O = new Ai({}), {
    c() {
      l = w("main"), B(n.$$.fragment), a = M(), o = w("div"), s = w("div"), s.innerHTML = `<img src="${Mi}" alt="RuK Logo" class="svelte-767zds"/> <span class="svelte-767zds">RuK UI</span>`, c = M(), d = w("div"), p = w("div"), B(f.$$.fragment), G = M(), B(y.$$.fragment), S = M(), B(_.$$.fragment), x = M(), q = w("div"), B(b.$$.fragment), Q = M(), B(K.$$.fragment), j = M(), V = w("div"), B(O.$$.fragment), t(s, "class", "logo svelte-767zds"), t(p, "id", "classpad"), v(p, "--zoomFactor", "1.5"), t(p, "class", "svelte-767zds"), t(d, "class", "calc-container svelte-767zds"), t(q, "class", "tools-container svelte-767zds"), v(V, "display", "none"), t(o, "class", "container svelte-767zds");
    },
    m($, Ot) {
      z($, l, Ot), R(n, l, null), e(l, a), e(l, o), e(o, s), e(o, c), e(o, d), e(d, p), R(f, p, null), e(d, G), R(y, d, null), e(d, S), R(_, d, null), e(o, x), e(o, q), R(b, q, null), e(q, Q), R(K, q, null), e(o, j), e(o, V), R(O, V, null), g = !0;
    },
    p: m,
    i($) {
      g || (C(n.$$.fragment, $), C(f.$$.fragment, $), C(y.$$.fragment, $), C(_.$$.fragment, $), C(b.$$.fragment, $), C(K.$$.fragment, $), C(O.$$.fragment, $), g = !0);
    },
    o($) {
      E(n.$$.fragment, $), E(f.$$.fragment, $), E(y.$$.fragment, $), E(_.$$.fragment, $), E(b.$$.fragment, $), E(K.$$.fragment, $), E(O.$$.fragment, $), g = !1;
    },
    d($) {
      $ && U(l), D(n), D(f), D(y), D(_), D(b), D(K), D(O);
    }
  };
}
function Qa(i, l, n) {
  let a, o;
  Ar(i, Di, (x) => n(9, a = x)), Ar(i, Vl, (x) => n(10, o = x)), P2(async () => {
    Ra(), Yr.subscribe((x) => {
      console.log(x);
    }), ji();
  });
  const s = (x) => {
    window.Module.requestFullscreen(!0, !1);
  }, c = (x) => {
    const q = document.getElementById("canvas");
    q && q.toBlob(function(b) {
      const Q = new ClipboardItem({ "image/png": b });
      navigator.clipboard.write([Q]).then(() => {
        L2.set("Copied to clipboard !"), setTimeout(
          () => {
            L2.set(null);
          },
          4e3
        );
      }).catch(() => {
      });
    });
  }, d = (x) => {
    const q = document.getElementById("canvas");
    if (q) {
      const b = document.createElement("a");
      b.href = q.toDataURL("image/png"), b.download = "ClassPad_Screen.png", b.click();
    }
  }, p = (x) => {
    o || (Vl.set(!0), C2.set(null), window.Module.ccall("dumpOneFrame", null, [], []));
  }, f = (x) => {
    console.log("doRefresh !!"), o || Vl.set(!0), C2.set(null), window.Module.ccall("dumpOneFrame", null, [], []);
  }, G = (x) => {
    ai.set(!0);
  }, y = async (x) => {
    let q = pi(I2);
    if (q) {
      Yr.set("running");
      try {
        window.Module.ccall("startInterpreter", null, ["string"], [q]);
      } catch (b) {
        M2.set(b), Yr.set("crashed");
      }
    } else
      Yr.set("crashed"), M2.set({
        name: "INVALID_FILE_NAME",
        message: "fileName is empty"
      });
  }, S = async (x) => {
    console.log(x.detail), Yr.set("loading");
    var q = x.detail.target.files[0];
    q && Oa(q, q.name).then(() => {
      console.log(q.name), I2.set(q.name), a ? y() : Yr.set("loaded");
    }).catch((b) => {
      console.error("Error loading file:", b);
    });
  };
  let { ide: _ = !0 } = l;
  return i.$$set = (x) => {
    "ide" in x && n(8, _ = x.ide);
  }, [
    s,
    c,
    d,
    p,
    f,
    G,
    y,
    S,
    _
  ];
}
class Ba extends A {
  constructor(l) {
    super(), Y(this, l, Qa, Da, L, { ide: 8 });
  }
}
window.Module = window.Module || {};
new Ba({
  target: document.getElementById("app"),
  props: {
    ide: !1
  }
});
//# sourceMappingURL=ruk.js.map
