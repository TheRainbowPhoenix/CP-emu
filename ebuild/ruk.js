var J2 = Object.defineProperty;
var ti = (i, n, l) => n in i ? J2(i, n, { enumerable: !0, configurable: !0, writable: !0, value: l }) : i[n] = l;
var M2 = (i, n, l) => ti(i, typeof n != "symbol" ? n + "" : n, l);
(function() {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload"))
    return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    a(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const u of s.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && a(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(o) {
    const s = {};
    return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function a(o) {
    if (o.ep)
      return;
    o.ep = !0;
    const s = l(o);
    fetch(o.href, s);
  }
})();
function m() {
}
function ei(i, n) {
  for (const l in n) i[l] = n[l];
  return (
    /** @type {T & S} */
    i
  );
}
function A2(i) {
  return i();
}
function K2() {
  return /* @__PURE__ */ Object.create(null);
}
function Vl(i) {
  i.forEach(A2);
}
function F2(i) {
  return typeof i == "function";
}
function P(i, n) {
  return i != i ? n == n : i !== n || i && typeof i == "object" || typeof i == "function";
}
function ri(i) {
  return Object.keys(i).length === 0;
}
function I2(i, ...n) {
  if (i == null) {
    for (const a of n)
      a(void 0);
    return m;
  }
  const l = i.subscribe(...n);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function li(i) {
  let n;
  return I2(i, (l) => n = l)(), n;
}
function Yl(i, n, l) {
  i.$$.on_destroy.push(I2(n, l));
}
function ni(i, n, l, a) {
  if (i) {
    const o = T2(i, n, l, a);
    return i[0](o);
  }
}
function T2(i, n, l, a) {
  return i[1] && a ? ei(l.ctx.slice(), i[1](a(n))) : l.ctx;
}
function ii(i, n, l, a) {
  if (i[2] && a) {
    const o = i[2](a(l));
    if (n.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const s = [], u = Math.max(n.dirty.length, o.length);
      for (let d = 0; d < u; d += 1)
        s[d] = n.dirty[d] | o[d];
      return s;
    }
    return n.dirty | o;
  }
  return n.dirty;
}
function ai(i, n, l, a, o, s) {
  if (o) {
    const u = T2(n, l, a, s);
    i.p(u, o);
  }
}
function oi(i) {
  if (i.ctx.length > 32) {
    const n = [], l = i.ctx.length / 32;
    for (let a = 0; a < l; a++)
      n[a] = -1;
    return n;
  }
  return -1;
}
function e(i, n) {
  i.appendChild(n);
}
function _(i, n, l) {
  i.insertBefore(n, l || null);
}
function z(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function U(i) {
  return document.createElement(i);
}
function r(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Qt(i) {
  return document.createTextNode(i);
}
function S() {
  return Qt(" ");
}
function si() {
  return Qt("");
}
function K0(i, n, l, a) {
  return i.addEventListener(n, l, a), () => i.removeEventListener(n, l, a);
}
function ci(i) {
  return function(n) {
    return n.preventDefault(), i.call(this, n);
  };
}
function t(i, n, l) {
  l == null ? i.removeAttribute(n) : i.getAttribute(n) !== l && i.setAttribute(n, l);
}
function c(i, n, l) {
  i.setAttributeNS("http://www.w3.org/1999/xlink", n, l);
}
function di(i) {
  return Array.from(i.childNodes);
}
function C2(i, n) {
  n = "" + n, i.data !== n && (i.data = /** @type {string} */
  n);
}
function g(i, n, l, a) {
  l == null ? i.style.removeProperty(n) : i.style.setProperty(n, l, "");
}
function L2(i, n, l) {
  i.classList.toggle(n, !!l);
}
function fi(i, n, { bubbles: l = !1, cancelable: a = !1 } = {}) {
  return new CustomEvent(i, { detail: n, bubbles: l, cancelable: a });
}
let An;
function Vn(i) {
  An = i;
}
function N2() {
  if (!An) throw new Error("Function called outside component initialization");
  return An;
}
function Q2(i) {
  N2().$$.on_mount.push(i);
}
function pi() {
  const i = N2();
  return (n, l, { cancelable: a = !1 } = {}) => {
    const o = i.$$.callbacks[n];
    if (o) {
      const s = fi(
        /** @type {string} */
        n,
        l,
        { cancelable: a }
      );
      return o.slice().forEach((u) => {
        u.call(i, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function hi(i, n) {
  const l = i.$$.callbacks[n.type];
  l && l.slice().forEach((a) => a.call(this, n));
}
const Ll = [], Fn = [];
let Pl = [];
const Y2 = [], ui = /* @__PURE__ */ Promise.resolve();
let j2 = !1;
function gi() {
  j2 || (j2 = !0, ui.then(Z2));
}
function H2(i) {
  Pl.push(i);
}
const E2 = /* @__PURE__ */ new Set();
let Rl = 0;
function Z2() {
  if (Rl !== 0)
    return;
  const i = An;
  do {
    try {
      for (; Rl < Ll.length; ) {
        const n = Ll[Rl];
        Rl++, Vn(n), vi(n.$$);
      }
    } catch (n) {
      throw Ll.length = 0, Rl = 0, n;
    }
    for (Vn(null), Ll.length = 0, Rl = 0; Fn.length; ) Fn.pop()();
    for (let n = 0; n < Pl.length; n += 1) {
      const l = Pl[n];
      E2.has(l) || (E2.add(l), l());
    }
    Pl.length = 0;
  } while (Ll.length);
  for (; Y2.length; )
    Y2.pop()();
  j2 = !1, E2.clear(), Vn(i);
}
function vi(i) {
  if (i.fragment !== null) {
    i.update(), Vl(i.before_update);
    const n = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, n), i.after_update.forEach(H2);
  }
}
function xi(i) {
  const n = [], l = [];
  Pl.forEach((a) => i.indexOf(a) === -1 ? n.push(a) : l.push(a)), l.forEach((a) => a()), Pl = n;
}
const S2 = /* @__PURE__ */ new Set();
let ll;
function yi() {
  ll = {
    r: 0,
    c: [],
    p: ll
    // parent group
  };
}
function mi() {
  ll.r || Vl(ll.c), ll = ll.p;
}
function $(i, n) {
  i && i.i && (S2.delete(i), i.i(n));
}
function M(i, n, l, a) {
  if (i && i.o) {
    if (S2.has(i)) return;
    S2.add(i), ll.c.push(() => {
      S2.delete(i), a && (l && i.d(1), a());
    }), i.o(n);
  } else a && a();
}
function K(i) {
  i && i.c();
}
function D(i, n, l) {
  const { fragment: a, after_update: o } = i.$$;
  a && a.m(n, l), H2(() => {
    const s = i.$$.on_mount.map(A2).filter(F2);
    i.$$.on_destroy ? i.$$.on_destroy.push(...s) : Vl(s), i.$$.on_mount = [];
  }), o.forEach(H2);
}
function Q(i, n) {
  const l = i.$$;
  l.fragment !== null && (xi(l.after_update), Vl(l.on_destroy), l.fragment && l.fragment.d(n), l.on_destroy = l.fragment = null, l.ctx = []);
}
function qi(i, n) {
  i.$$.dirty[0] === -1 && (Ll.push(i), gi(), i.$$.dirty.fill(0)), i.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function A(i, n, l, a, o, s, u = null, d = [-1]) {
  const f = An;
  Vn(i);
  const h = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: m,
    not_equal: o,
    bound: K2(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: K2(),
    dirty: d,
    skip_bound: !1,
    root: n.target || f.$$.root
  };
  u && u(h.root);
  let w = !1;
  if (h.ctx = l ? l(i, n.props || {}, (q, y, ...b) => {
    const G = b.length ? b[0] : y;
    return h.ctx && o(h.ctx[q], h.ctx[q] = G) && (!h.skip_bound && h.bound[q] && h.bound[q](G), w && qi(i, q)), y;
  }) : [], h.update(), w = !0, Vl(h.before_update), h.fragment = a ? a(h.ctx) : !1, n.target) {
    if (n.hydrate) {
      const q = di(n.target);
      h.fragment && h.fragment.l(q), q.forEach(z);
    } else
      h.fragment && h.fragment.c();
    n.intro && $(i.$$.fragment), D(i, n.target, n.anchor), Z2();
  }
  Vn(f);
}
class F {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    M2(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    M2(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Q(this, 1), this.$destroy = m;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, l) {
    if (!F2(l))
      return m;
    const a = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return a.push(l), () => {
      const o = a.indexOf(l);
      o !== -1 && a.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(n) {
    this.$$set && !ri(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const bi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(bi);
const wi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3clinearGradient%20id='g'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.1'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='h'%3e%3cstop%20offset='0'%20stop-color='%23eb5e06'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.3'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='.2'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.3'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%3e%3cstop%20offset='0'%20stop-color='%23eb8403'/%3e%3cstop%20offset='1'%20stop-color='%23eb8403'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23a'%20id='i'%20x1='12'%20x2='18.8'%20y1='4'%20y2='15.8'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23b'%20id='j'%20x1='20.6'%20x2='14'%20y1='12.3'%20y2='16'%20gradientTransform='rotate(180%2012%20526.2)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23c'%20id='l'%20x1='7'%20x2='11.3'%20y1='1038'%20y2='1042.2'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23d'%20id='k'%20x1='18'%20x2='14.8'%20y1='1039.3'%20y2='1039.3'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='n'%20x1='6'%20x2='10.2'%20y1='1038'%20y2='1042.1'%20gradientTransform='rotate(180%2012%201040.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23f'%20id='m'%20x1='7.5'%20x2='18.2'%20y1='8.8'%20y2='11.7'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23g'%20id='o'%20x1='7.5'%20x2='21.2'%20y1='8.8'%20y2='12.5'%20gradientTransform='translate(0%201028.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23h'%20id='p'%20x1='6.6'%20x2='15.9'%20y1='1038.8'%20y2='1044.5'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='q'%20x1='31.4'%20x2='59.3'%20y1='1037.7'%20y2='1037.7'%20gradientUnits='userSpaceOnUse'/%3e%3c/defs%3e%3cpath%20fill='%23fe9e01'%20d='M2%2012c0-1.4%203.8-8%205-8.7a24%2024%200%200%201%2010%200c1.2.7%205%207.3%205%208.7%200%201.4-3.8%208-5%208.7a24%2024%200%200%201-10%200C5.8%2020%202%2013.4%202%2012z'/%3e%3cpath%20fill='none'%20d='M18%2012a15%2015%200%200%201-3%205.2c-.7.4-5.3.4-6%200A15%2015%200%200%201%206%2012a15%2015%200%200%201%203-5.2c.7-.4%205.3-.4%206%200%20.7.4%203%204.4%203%205.2z'/%3e%3cpath%20fill='url(%23i)'%20fill-rule='evenodd'%20d='M12%202.8a19.6%2019.6%200%200%200-3.7.3c1.7.1%204.3%201%205.5%202A30.3%2030.3%200%200%201%2018%2012c0%201-2.2%204.8-3%205.3l2%203.4a24%2024%200%200%200%205-8.6c0-1.4-3.8-8-5-8.7-.6-.3-2.8-.5-5-.5z'/%3e%3cpath%20fill='url(%23j)'%20fill-rule='evenodd'%20d='M12%201049.6a19.6%2019.6%200%200%200%203.7-.4c-1.7%200-4.3-1-5.5-2a30.3%2030.3%200%200%201-4.2-6.8c0-.9%202.2-4.7%203-5.2l-2-3.5a24%2024%200%200%200-5%208.7c0%201.4%203.8%208%205%208.6.6.4%202.8.6%205%20.6z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23k)'%20d='M18%201040.4a16%2016%200%200%201-3%205.2c-.7.4-5.3.4-6%200a16%2016%200%200%201-3-5.2c0-.9%202.3-4.8%203-5.2.7-.5%205.3-.5%206%200%20.7.4%203%204.3%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23l)'%20d='M9%201035.2c-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23m)'%20d='M9%206.8c-.8.5-3%204.4-3%205.2a30.3%2030.3%200%200%200%202.2%204.3c.7%201.1%201.4%202%202%202.5%201.2%201.1%203.8%202%205.5%202h1l.3-.1c1.2-.7%205-7.3%205-8.7l-4-.1v.1a15%2015%200%200%201-3%205.2%2015%2015%200%200%201-3-5.2%2015%2015%200%200%200-3-5.2z'/%3e%3cpath%20fill='url(%23n)'%20d='M15%201045.6c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23o)'%20stroke='url(%23p)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-opacity='.3'%20stroke-width='.1'%20d='M18%201040.2h0v.2a16%2016%200%200%201-3%205.2%2016%2016%200%200%201-3-5.2c0-.9-2.3-4.8-3-5.2h0s0%200%200%200c-.8.5-3%204.3-3%205.2a30.3%2030.3%200%200%200%202.2%204.3s0%200%200%200%200%200%200%200c.7%201%201.4%202%202%202.5%201.2%201%203.8%202%205.5%202h1l.3-.2'%20transform='translate(0%20-1028.4)'/%3e%3cg%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20fill='%23252127'%20d='M38.5%201038.7q0%20.7-.4%201.3l-.5.7-.7.5-.6.4%202.7%205.4h-2.6l-2.4-5.3h-2.6v5.3H29v-13.4h6.3q1%200%201.6.5l.7.6.5.6q.4.6.4%201.4v2zm-2.3%200v-2.1q-.4-.7-.8-.8h-4v3.7h4l.4-.3.4-.5z'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3cpath%20fill='url(%23q)'%20fill-rule='evenodd'%20d='M31.4%201035.8v3.7h25.9l2-3.7h-28z'%20transform='translate(0%20-1028.4)'/%3e%3cg%20fill='%23252127'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20d='M50.3%201047H48l-.1-.5q-1%20.6-1.4.6h-1.7q-1%200-1.7-.4-.6-.5-1-1.1-.4-.6-.4-1.4v-6.9H44v7l.8.7h1.7l.6-.3.7-.6v-6.8h2.3v7.7l.2%202z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20d='M63.2%201047h-2.9l-4.7-5.6h-.2v5.6H53v-13.4h2.4v5.6h.2l2.4-2.8q1.5-2%202.3-2.8h2.9l-5.6%206.7%202.5%203%203.1%203.7z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3c/svg%3e";
function ki(i) {
  let n;
  return {
    c() {
      n = U("div"), n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" class="svelte-rvpkcl"><defs><filter id="blur"><feGaussianBlur stdDeviation="12"></feGaussianBlur></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad" class="svelte-rvpkcl"><stop stop-color="hsl(105, 69%, 40%)" stop-opacity="1" offset="0%" class="svelte-rvpkcl"></stop><stop stop-color="hsl(105, 69%, 60%)" stop-opacity="1" offset="100%" class="svelte-rvpkcl"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round" filter="url(#blur)"><path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="1.00"></path><path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.96"></path><path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.92"></path><path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.89"></path><path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.85"></path><path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.81"></path><path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.77"></path><path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.73"></path><path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.70"></path><path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.66"></path><path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.62"></path><path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.58"></path><path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.54"></path><path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.51"></path><path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.47"></path><path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.43"></path><path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.39"></path><path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.35"></path><path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.32"></path><path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.28"></path><path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.24"></path><path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.20"></path><path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.16"></path><path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.13"></path><path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.09"></path></g></svg>', t(n, "class", "bg-img svelte-rvpkcl");
    },
    m(l, a) {
      _(l, n, a);
    },
    p: m,
    i: m,
    o: m,
    d(l) {
      l && z(n);
    }
  };
}
class Gi extends F {
  constructor(n) {
    super(), A(this, n, null, ki, P, {});
  }
}
function Ui() {
  var i = document.createElement("script");
  i.setAttribute("async", ""), i.setAttribute("type", "text/javascript"), i.setAttribute("src", "calcemu.js"), document.body.appendChild(i);
}
function zi(i) {
  let n;
  return {
    c() {
      n = U("div"), n.innerHTML = "", t(n, "id", "buttons");
    },
    m(l, a) {
      _(l, n, a);
    },
    p: m,
    i: m,
    o: m,
    d(l) {
      l && z(n);
    }
  };
}
class _i extends F {
  constructor(n) {
    super(), A(this, n, null, zi, P, {});
  }
}
const Kl = [];
function Al(i, n = m) {
  let l;
  const a = /* @__PURE__ */ new Set();
  function o(d) {
    if (P(i, d) && (i = d, l)) {
      const f = !Kl.length;
      for (const h of a)
        h[1](), Kl.push(h, i);
      if (f) {
        for (let h = 0; h < Kl.length; h += 2)
          Kl[h][0](Kl[h + 1]);
        Kl.length = 0;
      }
    }
  }
  function s(d) {
    o(d(i));
  }
  function u(d, f = m) {
    const h = [d, f];
    return a.add(h), a.size === 1 && (l = n(o, s) || m), d(i), () => {
      a.delete(h), a.size === 0 && l && (l(), l = null);
    };
  }
  return { set: o, update: s, subscribe: u };
}
const L0 = Al("empty"), P2 = Al(null), Si = Al(!1), O2 = Al(""), W2 = Al(!1), D2 = Al(null);
function Oi(i) {
  let n, l, a;
  return {
    c() {
      n = r("svg"), l = r("path"), a = r("path"), t(l, "fill", "currentColor"), t(l, "d", "M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"), t(l, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      _(o, n, s), e(n, l), e(n, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && z(n);
    }
  };
}
class $i extends F {
  constructor(n) {
    super(), A(this, n, null, Oi, P, {});
  }
}
function V2(i) {
  let n, l, a, o, s, u, d = (
    /*$traceback*/
    i[2].name + ""
  ), f, h, w, q = (
    /*$traceback*/
    i[2].message + ""
  ), y, b, G;
  return l = new $i({}), {
    c() {
      n = U("div"), K(l.$$.fragment), a = S(), o = U("pre"), s = Qt("            "), u = U("code"), f = Qt(d), h = Qt(`\r
            `), w = U("code"), y = Qt(q), b = Qt(`\r
        `), t(u, "class", "name svelte-1j0tt53"), t(w, "class", "message svelte-1j0tt53"), t(o, "class", "svelte-1j0tt53"), t(n, "class", "bsod svelte-1j0tt53");
    },
    m(k, L) {
      _(k, n, L), D(l, n, null), e(n, a), e(n, o), e(o, s), e(o, u), e(u, f), e(o, h), e(o, w), e(w, y), e(o, b), G = !0;
    },
    p(k, L) {
      (!G || L & /*$traceback*/
      4) && d !== (d = /*$traceback*/
      k[2].name + "") && C2(f, d), (!G || L & /*$traceback*/
      4) && q !== (q = /*$traceback*/
      k[2].message + "") && C2(y, q);
    },
    i(k) {
      G || ($(l.$$.fragment, k), G = !0);
    },
    o(k) {
      M(l.$$.fragment, k), G = !1;
    },
    d(k) {
      k && z(n), Q(l);
    }
  };
}
function Mi(i) {
  let n, l, a, o, s, u, d = (
    /*crashed*/
    i[1] && V2(i)
  );
  return {
    c() {
      n = U("canvas"), l = S(), d && d.c(), a = si(), t(n, "class", "emscripten svelte-1j0tt53"), t(n, "id", "canvas"), t(n, "tabindex", "-1");
    },
    m(f, h) {
      _(f, n, h), i[5](n), _(f, l, h), d && d.m(f, h), _(f, a, h), o = !0, s || (u = K0(n, "contextmenu", ci(
        /*contextmenu_handler*/
        i[4]
      )), s = !0);
    },
    p(f, [h]) {
      /*crashed*/
      f[1] ? d ? (d.p(f, h), h & /*crashed*/
      2 && $(d, 1)) : (d = V2(f), d.c(), $(d, 1), d.m(a.parentNode, a)) : d && (yi(), M(d, 1, 1, () => {
        d = null;
      }), mi());
    },
    i(f) {
      o || ($(d), o = !0);
    },
    o(f) {
      M(d), o = !1;
    },
    d(f) {
      f && (z(n), z(l), z(a)), i[5](null), d && d.d(f), s = !1, u();
    }
  };
}
function Ei(i, n, l) {
  let a, o, s;
  Yl(i, L0, (h) => l(3, o = h)), Yl(i, O2, (h) => l(2, s = h));
  let u;
  Q2(() => {
    window.Module.canvas = u, u.addEventListener(
      "webglcontextlost",
      (h) => {
        alert("WebGL context lost. You will need to reload the page."), h.preventDefault();
      },
      !1
    );
  });
  function d(h) {
    hi.call(this, i, h);
  }
  function f(h) {
    Fn[h ? "unshift" : "push"](() => {
      u = h, l(0, u);
    });
  }
  return i.$$.update = () => {
    i.$$.dirty & /*$state*/
    8 && l(1, a = o === "crashed");
  }, [u, a, s, o, d, f];
}
class Ci extends F {
  constructor(n) {
    super(), A(this, n, Ei, Mi, P, {});
  }
}
function ji(i) {
  let n, l, a, o, s, u, d;
  return {
    c() {
      n = U("figure"), n.innerHTML = '<div class="spinner"></div><center style="margin-top:0.5em"><strong>emscripten</strong></center>', l = S(), a = U("div"), a.textContent = "Downloading...", o = S(), s = U("div"), s.innerHTML = '<progress value="0" max="100" id="progress" hidden=""></progress>', u = S(), d = U("textarea"), g(n, "overflow", "visible"), t(n, "id", "spinner"), t(a, "class", "emscripten"), t(a, "id", "status"), t(s, "class", "emscripten"), t(d, "class", "emscripten"), t(d, "id", "output"), t(d, "rows", "8");
    },
    m(f, h) {
      _(f, n, h), _(f, l, h), _(f, a, h), _(f, o, h), _(f, s, h), _(f, u, h), _(f, d, h);
    },
    p: m,
    i: m,
    o: m,
    d(f) {
      f && (z(n), z(l), z(a), z(o), z(s), z(u), z(d));
    }
  };
}
class Hi extends F {
  constructor(n) {
    super(), A(this, n, null, ji, P, {});
  }
}
function Di(i) {
  let n, l, a;
  return {
    c() {
      n = r("svg"), l = r("path"), a = r("path"), t(l, "fill", "currentColor"), t(l, "fill-rule", "evenodd"), t(l, "d", "M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22"), t(l, "clip-rule", "evenodd"), t(l, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      _(o, n, s), e(n, l), e(n, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && z(n);
    }
  };
}
class Qi extends F {
  constructor(n) {
    super(), A(this, n, null, Di, P, {});
  }
}
function Bi(i) {
  let n, l, a, o;
  return {
    c() {
      n = r("svg"), l = r("path"), a = r("path"), o = r("path"), t(l, "fill", "currentColor"), t(l, "d", "M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"), t(a, "clip-rule", "evenodd"), t(o, "fill", "currentColor"), t(o, "d", "m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859"), t(o, "opacity", "0.4"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(s, u) {
      _(s, n, u), e(n, l), e(n, a), e(n, o);
    },
    p: m,
    i: m,
    o: m,
    d(s) {
      s && z(n);
    }
  };
}
class Ri extends F {
  constructor(n) {
    super(), A(this, n, null, Bi, P, {});
  }
}
function Ki(i) {
  let n, l, a;
  return {
    c() {
      n = r("svg"), l = r("path"), a = r("path"), t(l, "fill", "currentColor"), t(l, "d", "M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"), t(l, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06"), t(a, "clip-rule", "evenodd"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      _(o, n, s), e(n, l), e(n, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && z(n);
    }
  };
}
class Li extends F {
  constructor(n) {
    super(), A(this, n, null, Ki, P, {});
  }
}
function Yi(i) {
  let n, l, a, o, s;
  return {
    c() {
      n = r("svg"), l = r("path"), a = r("path"), o = r("path"), s = r("path"), t(l, "fill", "currentColor"), t(l, "fill-rule", "evenodd"), t(l, "d", "M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938"), t(l, "clip-rule", "evenodd"), t(l, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06q.333.684.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a4 4 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"), t(o, "fill", "currentColor"), t(o, "d", "M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z"), t(o, "opacity", "0.5"), t(s, "fill", "currentColor"), t(s, "fill-rule", "evenodd"), t(s, "d", "M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75"), t(s, "clip-rule", "evenodd"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24"), t(n, "class", "svelte-1v14ixl"), L2(
        n,
        "active",
        /*active*/
        i[0]
      );
    },
    m(u, d) {
      _(u, n, d), e(n, l), e(n, a), e(n, o), e(n, s);
    },
    p(u, [d]) {
      d & /*active*/
      1 && L2(
        n,
        "active",
        /*active*/
        u[0]
      );
    },
    i: m,
    o: m,
    d(u) {
      u && z(n);
    }
  };
}
function Pi(i, n, l) {
  let { active: a = !1 } = n;
  return i.$$set = (o) => {
    "active" in o && l(0, a = o.active);
  }, [a];
}
class Vi extends F {
  constructor(n) {
    super(), A(this, n, Pi, Yi, P, { active: 0 });
  }
}
function Ai(i) {
  let n, l, a, o, s, u;
  return {
    c() {
      n = r("svg"), l = r("g"), a = r("path"), o = r("path"), s = r("path"), u = r("path"), t(a, "d", "M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"), t(a, "opacity", "0.5"), t(o, "stroke-linecap", "round"), t(o, "stroke-linejoin", "round"), t(o, "d", "M12.429 10L11 12h2l-1.429 2"), t(s, "d", "M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"), t(u, "stroke-linecap", "round"), t(u, "d", "M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"), t(u, "opacity", "0.5"), t(l, "fill", "none"), t(l, "stroke", "currentColor"), t(l, "stroke-width", "1.5"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(d, f) {
      _(d, n, f), e(n, l), e(l, a), e(l, o), e(l, s), e(l, u);
    },
    p: m,
    i: m,
    o: m,
    d(d) {
      d && z(n);
    }
  };
}
class Fi extends F {
  constructor(n) {
    super(), A(this, n, null, Ai, P, {});
  }
}
function Ii(i) {
  let n, l, a;
  return {
    c() {
      n = r("svg"), l = r("path"), a = r("path"), t(l, "fill", "currentColor"), t(l, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"), t(l, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "fill-rule", "evenodd"), t(a, "d", "M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0"), t(a, "clip-rule", "evenodd"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      _(o, n, s), e(n, l), e(n, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && z(n);
    }
  };
}
class Ti extends F {
  constructor(n) {
    super(), A(this, n, null, Ii, P, {});
  }
}
function Ni(i) {
  let n, l, a;
  return {
    c() {
      n = r("svg"), l = r("path"), a = r("path"), t(l, "fill", "currentColor"), t(l, "fill-rule", "evenodd"), t(l, "d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"), t(l, "clip-rule", "evenodd"), t(l, "opacity", "0.5"), t(a, "fill", "currentColor"), t(a, "d", "m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, s) {
      _(o, n, s), e(n, l), e(n, a);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && z(n);
    }
  };
}
class Zi extends F {
  constructor(n) {
    super(), A(this, n, null, Ni, P, {});
  }
}
function Wi(i) {
  let n, l, a, o, s;
  const u = (
    /*#slots*/
    i[4].default
  ), d = ni(
    u,
    i,
    /*$$scope*/
    i[3],
    null
  );
  return {
    c() {
      n = U("div"), l = U("div"), a = S(), d && d.c(), t(l, "class", "tip svelte-1vnxyu8"), t(n, "class", o = "popover " + /*visible*/
      (i[0] ? "visible" : "") + " svelte-1vnxyu8"), g(
        n,
        "--x",
        /*position*/
        i[2].x + "px"
      ), g(
        n,
        "--y",
        /*position*/
        i[2].y + "px"
      );
    },
    m(f, h) {
      _(f, n, h), e(n, l), e(n, a), d && d.m(n, null), i[5](n), s = !0;
    },
    p(f, [h]) {
      d && d.p && (!s || h & /*$$scope*/
      8) && ai(
        d,
        u,
        f,
        /*$$scope*/
        f[3],
        s ? ii(
          u,
          /*$$scope*/
          f[3],
          h,
          null
        ) : oi(
          /*$$scope*/
          f[3]
        ),
        null
      ), (!s || h & /*visible*/
      1 && o !== (o = "popover " + /*visible*/
      (f[0] ? "visible" : "") + " svelte-1vnxyu8")) && t(n, "class", o), (!s || h & /*position*/
      4) && g(
        n,
        "--x",
        /*position*/
        f[2].x + "px"
      ), (!s || h & /*position*/
      4) && g(
        n,
        "--y",
        /*position*/
        f[2].y + "px"
      );
    },
    i(f) {
      s || ($(d, f), s = !0);
    },
    o(f) {
      M(d, f), s = !1;
    },
    d(f) {
      f && z(n), d && d.d(f), i[5](null);
    }
  };
}
function Xi(i, n, l) {
  let { $$slots: a = {}, $$scope: o } = n, s, { visible: u = !1 } = n, d, f = { x: 0, y: 0 };
  Q2(() => {
    if (s = d.parentElement, s) {
      const w = s.getBoundingClientRect(), q = d.getBoundingClientRect();
      l(2, f = {
        x: w.left + window.scrollX,
        y: w.top + window.scrollY
        // + (rect.height - popoverRect.height) / 2
      }), f.x + q.width > window.innerWidth ? l(2, f.x -= q.width, f) : l(2, f.x += w.width, f);
    }
  });
  function h(w) {
    Fn[w ? "unshift" : "push"](() => {
      d = w, l(1, d);
    });
  }
  return i.$$set = (w) => {
    "visible" in w && l(0, u = w.visible), "$$scope" in w && l(3, o = w.$$scope);
  }, [u, d, f, o, a, h];
}
class _2 extends F {
  constructor(n) {
    super(), A(this, n, Xi, Wi, P, { visible: 0 });
  }
}
function Ji(i) {
  let n;
  return {
    c() {
      n = Qt("Start by picking a BIN program");
    },
    m(l, a) {
      _(l, n, a);
    },
    d(l) {
      l && z(n);
    }
  };
}
function ta(i) {
  let n;
  return {
    c() {
      n = Qt(
        /*$copyScreenFeedback*/
        i[4]
      );
    },
    m(l, a) {
      _(l, n, a);
    },
    p(l, a) {
      a & /*$copyScreenFeedback*/
      16 && C2(
        n,
        /*$copyScreenFeedback*/
        l[4]
      );
    },
    d(l) {
      l && z(n);
    }
  };
}
function ea(i) {
  let n;
  return {
    c() {
      n = Qt("Check why it crashed here");
    },
    m(l, a) {
      _(l, n, a);
    },
    d(l) {
      l && z(n);
    }
  };
}
function ra(i) {
  let n;
  return {
    c() {
      n = Qt("Now let's start the program");
    },
    m(l, a) {
      _(l, n, a);
    },
    d(l) {
      l && z(n);
    }
  };
}
function la(i) {
  let n, l, a, o, s, u, d, f, h, w, q, y, b, G, k, L, E, C, B, v, le, I, St, ne, Yt, Y, Ot, Hr, Bt, Pt, Y0, R, T, Dr, Rt, ie, Qr, N, Br, Z, Kt, $t, ae, Rr;
  return o = new _2({
    props: {
      visible: (
        /*loadHint*/
        i[3]
      ),
      $$slots: { default: [Ji] },
      $$scope: { ctx: i }
    }
  }), u = new Qi({}), b = new _2({
    props: {
      visible: (
        /*$copyScreenFeedback*/
        i[4] !== null
      ),
      $$slots: { default: [ta] },
      $$scope: { ctx: i }
    }
  }), k = new Ri({}), C = new Li({}), St = new Vi({ props: { active: (
    /*$debugging*/
    i[5]
  ) } }), Ot = new _2({
    props: {
      visible: (
        /*crashed*/
        i[1]
      ),
      $$slots: { default: [ea] },
      $$scope: { ctx: i }
    }
  }), Bt = new Fi({}), T = new _2({
    props: {
      visible: (
        /*loaded*/
        i[2]
      ),
      $$slots: { default: [ra] },
      $$scope: { ctx: i }
    }
  }), Rt = new Zi({}), Kt = new Ti({}), {
    c() {
      n = U("div"), l = U("div"), a = U("button"), K(o.$$.fragment), s = S(), K(u.$$.fragment), d = S(), f = U("input"), h = S(), w = U("div"), q = S(), y = U("button"), K(b.$$.fragment), G = S(), K(k.$$.fragment), L = S(), E = U("button"), K(C.$$.fragment), B = S(), v = U("div"), le = S(), I = U("button"), K(St.$$.fragment), Yt = S(), Y = U("button"), K(Ot.$$.fragment), Hr = S(), K(Bt.$$.fragment), Y0 = S(), R = U("button"), K(T.$$.fragment), Dr = S(), K(Rt.$$.fragment), Qr = S(), N = U("div"), Br = S(), Z = U("button"), K(Kt.$$.fragment), t(f, "type", "file"), t(f, "id", "fileInput"), g(f, "display", "none"), t(a, "class", "toolbar-tool svelte-i0olxm"), t(a, "type", "button"), t(a, "tabindex", "0"), t(a, "id", "btn_pickFile"), t(w, "class", "separator svelte-i0olxm"), t(w, "role", "separator"), t(w, "data-orientation", "horizontal"), t(w, "aria-orientation", "horizontal"), t(y, "class", "toolbar-tool svelte-i0olxm"), t(y, "type", "button"), t(y, "tabindex", "0"), t(y, "id", "btn_copyScreen"), t(E, "class", "toolbar-tool svelte-i0olxm"), t(E, "type", "button"), t(E, "tabindex", "0"), t(E, "id", "btn_saveScreen"), t(v, "class", "separator svelte-i0olxm"), t(v, "role", "separator"), t(v, "data-orientation", "horizontal"), t(v, "aria-orientation", "horizontal"), t(I, "class", "toolbar-tool svelte-i0olxm"), t(I, "type", "button"), t(I, "tabindex", "0"), t(I, "id", "btn_debug"), I.disabled = ne = !/*loaded*/
      i[2], t(Y, "class", "toolbar-tool svelte-i0olxm"), t(Y, "type", "button"), t(Y, "tabindex", "0"), t(Y, "id", "btn_dump"), Y.disabled = Pt = !/*loaded*/
      i[2] && !/*crashed*/
      i[1], t(R, "class", "toolbar-tool svelte-i0olxm"), t(R, "type", "button"), t(R, "tabindex", "0"), t(R, "id", "btn_run"), R.disabled = ie = !/*loaded*/
      i[2], t(N, "class", "separator svelte-i0olxm"), t(N, "role", "separator"), t(N, "data-orientation", "horizontal"), t(N, "aria-orientation", "horizontal"), t(Z, "class", "toolbar-tool svelte-i0olxm"), t(Z, "type", "button"), t(Z, "tabindex", "0"), t(Z, "id", "btn_fullscreen"), t(l, "class", "toolbar svelte-i0olxm"), t(n, "class", "tools-container svelte-i0olxm");
    },
    m(x, O) {
      _(x, n, O), e(n, l), e(l, a), D(o, a, null), e(a, s), D(u, a, null), e(a, d), e(a, f), i[15](f), e(l, h), e(l, w), e(l, q), e(l, y), D(b, y, null), e(y, G), D(k, y, null), e(l, L), e(l, E), D(C, E, null), e(l, B), e(l, v), e(l, le), e(l, I), D(St, I, null), e(l, Yt), e(l, Y), D(Ot, Y, null), e(Y, Hr), D(Bt, Y, null), e(l, Y0), e(l, R), D(T, R, null), e(R, Dr), D(Rt, R, null), e(l, Qr), e(l, N), e(l, Br), e(l, Z), D(Kt, Z, null), $t = !0, ae || (Rr = [
        K0(
          f,
          "change",
          /*handleFile*/
          i[7]
        ),
        K0(
          a,
          "click",
          /*pickFile*/
          i[6]
        ),
        K0(
          y,
          "click",
          /*doCopyScreen*/
          i[8]
        ),
        K0(
          E,
          "click",
          /*doSaveScreen*/
          i[9]
        ),
        K0(
          I,
          "click",
          /*doDebug*/
          i[13]
        ),
        K0(
          Y,
          "click",
          /*doDump*/
          i[12]
        ),
        K0(
          R,
          "click",
          /*doRun*/
          i[10]
        ),
        K0(
          Z,
          "click",
          /*doFullscreen*/
          i[11]
        )
      ], ae = !0);
    },
    p(x, [O]) {
      const P0 = {};
      O & /*loadHint*/
      8 && (P0.visible = /*loadHint*/
      x[3]), O & /*$$scope*/
      262144 && (P0.$$scope = { dirty: O, ctx: x }), o.$set(P0);
      const V0 = {};
      O & /*$copyScreenFeedback*/
      16 && (V0.visible = /*$copyScreenFeedback*/
      x[4] !== null), O & /*$$scope, $copyScreenFeedback*/
      262160 && (V0.$$scope = { dirty: O, ctx: x }), b.$set(V0);
      const A0 = {};
      O & /*$debugging*/
      32 && (A0.active = /*$debugging*/
      x[5]), St.$set(A0), (!$t || O & /*loaded*/
      4 && ne !== (ne = !/*loaded*/
      x[2])) && (I.disabled = ne);
      const F0 = {};
      O & /*crashed*/
      2 && (F0.visible = /*crashed*/
      x[1]), O & /*$$scope*/
      262144 && (F0.$$scope = { dirty: O, ctx: x }), Ot.$set(F0), (!$t || O & /*loaded, crashed*/
      6 && Pt !== (Pt = !/*loaded*/
      x[2] && !/*crashed*/
      x[1])) && (Y.disabled = Pt);
      const I0 = {};
      O & /*loaded*/
      4 && (I0.visible = /*loaded*/
      x[2]), O & /*$$scope*/
      262144 && (I0.$$scope = { dirty: O, ctx: x }), T.$set(I0), (!$t || O & /*loaded*/
      4 && ie !== (ie = !/*loaded*/
      x[2])) && (R.disabled = ie);
    },
    i(x) {
      $t || ($(o.$$.fragment, x), $(u.$$.fragment, x), $(b.$$.fragment, x), $(k.$$.fragment, x), $(C.$$.fragment, x), $(St.$$.fragment, x), $(Ot.$$.fragment, x), $(Bt.$$.fragment, x), $(T.$$.fragment, x), $(Rt.$$.fragment, x), $(Kt.$$.fragment, x), $t = !0);
    },
    o(x) {
      M(o.$$.fragment, x), M(u.$$.fragment, x), M(b.$$.fragment, x), M(k.$$.fragment, x), M(C.$$.fragment, x), M(St.$$.fragment, x), M(Ot.$$.fragment, x), M(Bt.$$.fragment, x), M(T.$$.fragment, x), M(Rt.$$.fragment, x), M(Kt.$$.fragment, x), $t = !1;
    },
    d(x) {
      x && z(n), Q(o), Q(u), i[15](null), Q(b), Q(k), Q(C), Q(St), Q(Ot), Q(Bt), Q(T), Q(Rt), Q(Kt), ae = !1, Vl(Rr);
    }
  };
}
function na(i, n, l) {
  let a, o, s, u, d, f;
  Yl(i, L0, (v) => l(14, u = v)), Yl(i, D2, (v) => l(4, d = v)), Yl(i, W2, (v) => l(5, f = v));
  const h = () => {
    w.click();
  };
  let w;
  const q = pi(), y = (v) => {
    q("romChanged", v);
  }, b = (v) => {
    q("doCopyScreen", v);
  }, G = (v) => {
    q("doSaveScreen", v);
  }, k = (v) => {
    q("doRun", v);
  }, L = (v) => {
    q("doFullscreen", v);
  }, E = (v) => {
    q("doDump", v);
  }, C = (v) => {
    q("doDebug", v);
  };
  function B(v) {
    Fn[v ? "unshift" : "push"](() => {
      w = v, l(0, w);
    });
  }
  return i.$$.update = () => {
    i.$$.dirty & /*$state*/
    16384 && l(3, a = u === "empty"), i.$$.dirty & /*$state*/
    16384 && l(2, o = u === "loaded"), i.$$.dirty & /*$state*/
    16384 && l(1, s = u === "crashed"), i.$$.dirty & /*$state*/
    16384;
  }, [
    w,
    s,
    o,
    a,
    d,
    f,
    h,
    y,
    b,
    G,
    k,
    L,
    E,
    C,
    u,
    B
  ];
}
class ia extends F {
  constructor(n) {
    super(), A(this, n, na, la, P, {});
  }
}
function aa(i, n, l) {
  var a = new FileReader();
  a.onload = function(o) {
    if (o.target && o.target.result) {
      var s = new Uint8Array(o.target.result);
      window.Module.FS.analyzePath(n).exists && window.Module.FS.unlink(n), window.Module.FS.createDataFile("/", n, s, !0, !0), console.log(`${n} loaded into the Emscripten filesystem.`), l(null);
    } else
      l("target is empty");
  }, a.onerror = function(o) {
    l(o);
  }, a.readAsArrayBuffer(i);
}
function oa(i, n) {
  return new Promise((l, a) => {
    aa(i, n, (o) => {
      o ? a(o) : l(() => {
      });
    });
  });
}
function sa(i) {
  let n, l, a, o, s, u, d, f, h, w, q, y, b, G, k, L, E, C, B, v, le, I, St, ne, Yt, Y, Ot, Hr, Bt, Pt, Y0, R, T, Dr, Rt, ie, Qr, N, Br, Z, Kt, $t, ae, Rr, x, O, P0, V0, A0, F0, I0, Fl, In, Il, nl, Tl, Nl, Zl, il, Wl, Xl, Jl, Kr, Tn, Nn, Zn, Wn, T0, Xn, Jn, t2, e2, r2, tn, l2, en, Lr, n2, i2, a2, rn, al, o2, ln, nn, ol, s2, an, on, sn, c2, cn, dn, d2, fn, sl, f2, pn, p2, Vt, h2, u2, g2, v2, x2, y2, m2, oe, se, ce, de, fe, pe, he, ue, ge, ve, xe, ye, me, qe, be, we, ke, Ge, Ue, ze, _e, Se, Oe, $e, Me, Ee, Ce, je, He, De, Qe, Be, Re, Ke, Le, Ye, Pe, Ve, Ae, Fe, Ie, Te, Ne, Ze, We, Xe, Je, t1, e1, r1, l1, n1, i1, a1, o1, s1, c1, d1, f1, p1, h1, u1, g1, v1, At, Ft, It, x1, y1, m1, q1, b1, w1, k1, G1, U1, z1, _1, S1, O1, $1, M1, E1, C1, j1, H1, D1, Q1, B1, R1, K1, L1, Y1, P1, V1, A1, F1, I1, T1, N1, Z1, Mt, Yr, hn, un, W1, V, cl, gn, dl, Pr, Et, Ct, jt, Ht, Tt, Nt, Zt, N0, W, X1, vn, q2, b2, w2, Z0, k2, p, xn, yn, mn, fl, pl, Vr, X, J1, qn, W0, J, t0, bn, X0, tt, e0, wn, J0, et, r0, kn, tr, rt, l0, Gn, er, lt, n0, Un, rr, nt, i0, zn, lr, it, a0, _n, nr, at, o0, Sn, ir, ot, s0, On, ar, st, c0, $n, or, ct, d0, Mn, sr, dt, f0, En, cr, ft, p0, Cn, dr, pt, h0, jn, fr, ht, u0, Hn, pr, ut, g0, Dn, G2, U2, z2, v0, x0, y0, m0, Dt, Wt, Xt, Jt, Qn, Ar, gt, q0, Fr, vt, b0, Ir, xt, w0, Tr, yt, k0, Nr, mt, G0, Zr, qt, U0, Wr, bt, z0, Xr, wt, _0, te, Jr, kt, S0, tl, Gt, O0, el, Ut, $0, rl, zt, M0, hl, hr, ul, E0, _t, ur, B2, R2, gl, gr, vl, vr, xl, xr, yl, yr, ml, mr, ql, qr, bl, br, wl, wr, kl, kr, Gl, C0, Bn, Lt, Ul, j0, zl, Gr, _l, Ur, Sl, zr, Ol, H0, $l, D0, Ml, Q0, El, _r, Cl, Sr, jl, Or, Hl, $r, Dl, Mr, Ql, Er, Cr, B0, jr, R0, j, H, Bl, Rn, Kn, ee, Ln, Yn, Pn, re;
  return {
    c() {
      n = r("svg"), l = r("defs"), a = r("linearGradient"), o = r("stop"), s = r("stop"), u = r("stop"), d = r("stop"), f = r("linearGradient"), h = r("stop"), w = r("stop"), q = r("stop"), y = r("stop"), b = r("stop"), G = r("linearGradient"), k = r("stop"), L = r("stop"), E = r("stop"), C = r("stop"), B = r("linearGradient"), v = r("stop"), le = r("stop"), I = r("stop"), St = r("stop"), ne = r("stop"), Yt = r("linearGradient"), Y = r("stop"), Ot = r("stop"), Hr = r("stop"), Bt = r("stop"), Pt = r("linearGradient"), Y0 = r("stop"), R = r("stop"), T = r("linearGradient"), Dr = r("stop"), Rt = r("stop"), ie = r("stop"), Qr = r("stop"), N = r("linearGradient"), Br = r("stop"), Z = r("stop"), Kt = r("stop"), $t = r("stop"), ae = r("linearGradient"), Rr = r("stop"), x = r("stop"), O = r("linearGradient"), P0 = r("stop"), V0 = r("stop"), A0 = r("linearGradient"), F0 = r("stop"), I0 = r("stop"), Fl = r("linearGradient"), In = r("stop"), Il = r("stop"), nl = r("linearGradient"), Tl = r("stop"), Nl = r("stop"), Zl = r("stop"), il = r("linearGradient"), Wl = r("stop"), Xl = r("stop"), Jl = r("stop"), Kr = r("linearGradient"), Tn = r("stop"), Nn = r("stop"), Zn = r("stop"), Wn = r("stop"), T0 = r("linearGradient"), Xn = r("stop"), Jn = r("stop"), t2 = r("stop"), e2 = r("stop"), r2 = r("stop"), tn = r("linearGradient"), l2 = r("stop"), en = r("stop"), Lr = r("linearGradient"), n2 = r("stop"), i2 = r("stop"), a2 = r("stop"), rn = r("stop"), al = r("linearGradient"), o2 = r("stop"), ln = r("stop"), nn = r("stop"), ol = r("linearGradient"), s2 = r("stop"), an = r("stop"), on = r("stop"), sn = r("linearGradient"), c2 = r("stop"), cn = r("stop"), dn = r("linearGradient"), d2 = r("stop"), fn = r("stop"), sl = r("linearGradient"), f2 = r("stop"), pn = r("stop"), p2 = r("stop"), Vt = r("linearGradient"), h2 = r("stop"), u2 = r("stop"), g2 = r("stop"), v2 = r("stop"), x2 = r("stop"), y2 = r("stop"), m2 = r("stop"), oe = r("linearGradient"), se = r("linearGradient"), ce = r("linearGradient"), de = r("linearGradient"), fe = r("linearGradient"), pe = r("linearGradient"), he = r("linearGradient"), ue = r("linearGradient"), ge = r("linearGradient"), ve = r("linearGradient"), xe = r("linearGradient"), ye = r("linearGradient"), me = r("linearGradient"), qe = r("linearGradient"), be = r("linearGradient"), we = r("linearGradient"), ke = r("linearGradient"), Ge = r("linearGradient"), Ue = r("linearGradient"), ze = r("linearGradient"), _e = r("linearGradient"), Se = r("linearGradient"), Oe = r("linearGradient"), $e = r("linearGradient"), Me = r("linearGradient"), Ee = r("linearGradient"), Ce = r("linearGradient"), je = r("linearGradient"), He = r("linearGradient"), De = r("linearGradient"), Qe = r("linearGradient"), Be = r("linearGradient"), Re = r("linearGradient"), Ke = r("linearGradient"), Le = r("linearGradient"), Ye = r("linearGradient"), Pe = r("linearGradient"), Ve = r("linearGradient"), Ae = r("linearGradient"), Fe = r("linearGradient"), Ie = r("linearGradient"), Te = r("linearGradient"), Ne = r("linearGradient"), Ze = r("linearGradient"), We = r("linearGradient"), Xe = r("linearGradient"), Je = r("linearGradient"), t1 = r("linearGradient"), e1 = r("linearGradient"), r1 = r("linearGradient"), l1 = r("linearGradient"), n1 = r("linearGradient"), i1 = r("linearGradient"), a1 = r("linearGradient"), o1 = r("linearGradient"), s1 = r("linearGradient"), c1 = r("linearGradient"), d1 = r("linearGradient"), f1 = r("linearGradient"), p1 = r("linearGradient"), h1 = r("linearGradient"), u1 = r("linearGradient"), g1 = r("linearGradient"), v1 = r("linearGradient"), At = r("linearGradient"), Ft = r("linearGradient"), It = r("linearGradient"), x1 = r("linearGradient"), y1 = r("linearGradient"), m1 = r("linearGradient"), q1 = r("linearGradient"), b1 = r("linearGradient"), w1 = r("linearGradient"), k1 = r("linearGradient"), G1 = r("linearGradient"), U1 = r("linearGradient"), z1 = r("linearGradient"), _1 = r("linearGradient"), S1 = r("linearGradient"), O1 = r("linearGradient"), $1 = r("linearGradient"), M1 = r("linearGradient"), E1 = r("linearGradient"), C1 = r("linearGradient"), j1 = r("linearGradient"), H1 = r("linearGradient"), D1 = r("linearGradient"), Q1 = r("linearGradient"), B1 = r("linearGradient"), R1 = r("linearGradient"), K1 = r("linearGradient"), L1 = r("linearGradient"), Y1 = r("linearGradient"), P1 = r("linearGradient"), V1 = r("linearGradient"), A1 = r("linearGradient"), F1 = r("linearGradient"), I1 = r("linearGradient"), T1 = r("linearGradient"), N1 = r("linearGradient"), Z1 = r("linearGradient"), Mt = r("pattern"), Yr = r("rect"), hn = r("path"), un = r("path"), W1 = r("linearGradient"), V = r("g"), cl = r("path"), gn = r("path"), dl = r("path"), Pr = r("path"), Et = r("rect"), Ct = r("rect"), jt = r("rect"), Ht = r("rect"), Tt = r("rect"), Nt = r("rect"), Zt = r("rect"), N0 = r("g"), W = r("rect"), X1 = r("rect"), vn = r("path"), q2 = r("mask"), b2 = r("path"), w2 = r("g"), Z0 = r("foreignObject"), k2 = U("div"), k2.innerHTML = '<canvas width="320" height="528" style="width: 320px; height: 528px"></canvas>', p = r("g"), xn = r("path"), yn = r("path"), mn = r("path"), fl = r("path"), pl = r("path"), Vr = r("g"), X = r("rect"), J1 = r("rect"), qn = r("path"), W0 = r("g"), J = r("rect"), t0 = r("rect"), bn = r("path"), X0 = r("g"), tt = r("rect"), e0 = r("rect"), wn = r("path"), J0 = r("g"), et = r("rect"), r0 = r("rect"), kn = r("path"), tr = r("g"), rt = r("rect"), l0 = r("rect"), Gn = r("path"), er = r("g"), lt = r("rect"), n0 = r("rect"), Un = r("path"), rr = r("g"), nt = r("rect"), i0 = r("rect"), zn = r("path"), lr = r("g"), it = r("rect"), a0 = r("rect"), _n = r("path"), nr = r("g"), at = r("rect"), o0 = r("rect"), Sn = r("path"), ir = r("g"), ot = r("rect"), s0 = r("rect"), On = r("path"), ar = r("g"), st = r("rect"), c0 = r("rect"), $n = r("path"), or = r("g"), ct = r("rect"), d0 = r("rect"), Mn = r("path"), sr = r("g"), dt = r("rect"), f0 = r("rect"), En = r("path"), cr = r("g"), ft = r("rect"), p0 = r("rect"), Cn = r("path"), dr = r("g"), pt = r("rect"), h0 = r("rect"), jn = r("path"), fr = r("g"), ht = r("rect"), u0 = r("rect"), Hn = r("path"), pr = r("g"), ut = r("rect"), g0 = r("rect"), Dn = r("path"), G2 = r("path"), U2 = r("path"), z2 = r("path"), v0 = r("rect"), x0 = r("rect"), y0 = r("rect"), m0 = r("path"), Dt = r("rect"), Wt = r("path"), Xt = r("path"), Jt = r("path"), Qn = r("path"), Ar = r("g"), gt = r("rect"), q0 = r("rect"), Fr = r("g"), vt = r("rect"), b0 = r("rect"), Ir = r("g"), xt = r("rect"), w0 = r("rect"), Tr = r("g"), yt = r("rect"), k0 = r("rect"), Nr = r("g"), mt = r("rect"), G0 = r("rect"), Zr = r("g"), qt = r("rect"), U0 = r("rect"), Wr = r("g"), bt = r("rect"), z0 = r("rect"), Xr = r("g"), wt = r("rect"), _0 = r("rect"), te = r("rect"), Jr = r("g"), kt = r("rect"), S0 = r("rect"), tl = r("g"), Gt = r("rect"), O0 = r("rect"), el = r("g"), Ut = r("rect"), $0 = r("rect"), rl = r("g"), zt = r("rect"), M0 = r("rect"), hl = r("g"), hr = r("path"), ul = r("g"), E0 = r("path"), _t = r("text"), ur = r("tspan"), B2 = Qt("xyz"), R2 = S(), gl = r("g"), gr = r("path"), vl = r("g"), vr = r("path"), xl = r("g"), xr = r("path"), yl = r("g"), yr = r("path"), ml = r("g"), mr = r("path"), ql = r("g"), qr = r("path"), bl = r("g"), br = r("path"), wl = r("g"), wr = r("path"), kl = r("g"), kr = r("path"), Gl = r("g"), C0 = r("path"), Bn = r("path"), Lt = r("path"), Ul = r("g"), j0 = r("path"), zl = r("g"), Gr = r("path"), _l = r("g"), Ur = r("path"), Sl = r("g"), zr = r("path"), Ol = r("g"), H0 = r("path"), $l = r("g"), D0 = r("path"), Ml = r("g"), Q0 = r("path"), El = r("g"), _r = r("path"), Cl = r("g"), Sr = r("path"), jl = r("g"), Or = r("path"), Hl = r("g"), $r = r("path"), Dl = r("g"), Mr = r("path"), Ql = r("g"), Er = r("path"), Cr = r("g"), B0 = r("path"), jr = r("g"), R0 = r("path"), j = r("path"), H = r("path"), Bl = r("path"), Rn = r("path"), Kn = r("path"), ee = r("rect"), Ln = r("path"), Yn = r("path"), Pn = r("path"), re = r("rect"), t(o, "offset", "0"), t(o, "stop-color", "#3b3b3b"), t(s, "offset", ".1"), t(s, "stop-color", "#282828"), t(u, "offset", ".2"), t(u, "stop-color", "#282828"), t(d, "offset", "1"), t(d, "stop-color", "#272727"), t(a, "id", "x"), t(h, "offset", "0"), t(h, "stop-color", "#99b0df"), t(w, "offset", ".1"), t(w, "stop-color", "#7396de"), t(q, "offset", ".3"), t(q, "stop-color", "#4171d2"), t(y, "offset", ".9"), t(y, "stop-color", "#1f3d79"), t(b, "offset", "1"), t(b, "stop-color", "#173166"), t(f, "id", "l"), t(k, "offset", "0"), t(k, "stop-color", "#2b60cd"), t(L, "offset", ".5"), t(L, "stop-color", "#295fcc"), t(E, "offset", ".8"), t(E, "stop-color", "#3c73e3"), t(C, "offset", "1"), t(C, "stop-color", "#4279e8"), t(G, "id", "m"), t(v, "offset", "0"), t(v, "stop-color", "#ececec"), t(le, "offset", ".1"), t(le, "stop-color", "#ededed"), t(I, "offset", ".3"), t(I, "stop-color", "#ddd"), t(St, "offset", ".9"), t(St, "stop-color", "#b0b0b0"), t(ne, "offset", "1"), t(ne, "stop-color", "#9c9c9c"), t(B, "id", "v"), t(Y, "offset", "0"), t(Y, "stop-color", "#e7e7e7"), t(Ot, "offset", ".5"), t(Ot, "stop-color", "#f8f8f8"), t(Hr, "offset", ".8"), t(Hr, "stop-color", "#fff"), t(Bt, "offset", "1"), t(Bt, "stop-color", "#fbfbfb"), t(Yt, "id", "w"), t(Y0, "offset", "0"), t(Y0, "stop-color", "#cdcdcd"), t(Y0, "stop-opacity", ".4"), t(R, "offset", "1"), t(R, "stop-color", "#cdcdcd"), t(R, "stop-opacity", "0"), t(Pt, "id", "u"), t(Dr, "offset", "0"), t(Dr, "stop-color", "#d1d1d1"), t(Rt, "offset", ".4"), t(Rt, "stop-color", "#c2c2c2"), t(ie, "offset", ".7"), t(ie, "stop-color", "#6b6b6b"), t(Qr, "offset", "1"), t(Qr, "stop-color", "#616161"), t(T, "id", "t"), t(Br, "offset", "0"), t(Br, "stop-color", "#a8a8a8"), t(Z, "offset", ".3"), t(Z, "stop-color", "#b2b2b2"), t(Kt, "offset", ".8"), t(Kt, "stop-color", "#dadada"), t($t, "offset", "1"), t($t, "stop-color", "#ccc"), t(N, "id", "s"), t(Rr, "offset", "0"), t(Rr, "stop-color", "#252525"), t(x, "offset", "1"), t(x, "stop-color", "#363636"), t(ae, "id", "r"), t(P0, "offset", "0"), t(P0, "stop-color", "#f7f7f7"), t(V0, "offset", "1"), t(V0, "stop-color", "#535353"), t(O, "id", "q"), t(F0, "offset", "0"), t(F0, "stop-color", "#909090"), t(I0, "offset", "1"), t(I0, "stop-color", "#2d2d2d"), t(A0, "id", "p"), t(In, "offset", "0"), t(In, "stop-color", "#313131"), t(Il, "offset", "1"), t(Il, "stop-color", "#3a3a3a"), t(Il, "stop-opacity", "0"), t(Fl, "id", "o"), t(Tl, "offset", "0"), t(Tl, "stop-color", "#c6c6c6"), t(Tl, "stop-opacity", ".4"), t(Nl, "offset", ".4"), t(Nl, "stop-color", "#a2a2a2"), t(Nl, "stop-opacity", ".1"), t(Zl, "offset", "1"), t(Zl, "stop-color", "#a2a2a2"), t(Zl, "stop-opacity", "0"), t(nl, "id", "n"), t(Wl, "offset", "0"), t(Wl, "stop-color", "#c6c6c6"), t(Wl, "stop-opacity", ".4"), t(Xl, "offset", ".7"), t(Xl, "stop-color", "#a2a2a2"), t(Xl, "stop-opacity", ".1"), t(Jl, "offset", "1"), t(Jl, "stop-color", "#a2a2a2"), t(Jl, "stop-opacity", "0"), t(il, "id", "k"), t(Tn, "offset", "0"), t(Tn, "stop-color", "#2e2e2e"), t(Nn, "offset", ".5"), t(Nn, "stop-color", "#2d2d2d"), t(Zn, "offset", ".8"), t(Zn, "stop-color", "#393939"), t(Wn, "offset", "1"), t(Wn, "stop-color", "#3d3d3d"), t(Kr, "id", "j"), t(Xn, "offset", "0"), t(Xn, "stop-color", "#464646"), t(Jn, "offset", ".1"), t(Jn, "stop-color", "#393939"), t(t2, "offset", ".3"), t(t2, "stop-color", "#2c2c2c"), t(e2, "offset", ".9"), t(e2, "stop-color", "#202020"), t(r2, "offset", "1"), t(r2, "stop-color", "#242424"), t(T0, "id", "i"), t(l2, "offset", "0"), t(l2, "stop-color", "#1e7999"), t(en, "offset", "1"), t(en, "stop-color", "#1d7998"), t(en, "stop-opacity", "0"), t(tn, "id", "h"), t(n2, "offset", "0"), t(n2, "stop-color", "#3a3a3a"), t(i2, "offset", ".3"), t(i2, "stop-color", "#414141"), t(a2, "offset", ".6"), t(a2, "stop-color", "#464646"), t(rn, "offset", "1"), t(rn, "stop-color", "#4b4b4b"), t(rn, "stop-opacity", "0"), t(Lr, "id", "g"), t(o2, "offset", "0"), t(o2, "stop-color", "#313131"), t(ln, "offset", ".4"), t(ln, "stop-color", "#3a3a3a"), t(ln, "stop-opacity", ".6"), t(nn, "offset", "1"), t(nn, "stop-color", "#3a3a3a"), t(nn, "stop-opacity", "0"), t(al, "id", "f"), t(s2, "offset", "0"), t(s2, "stop-color", "#3a3a3a"), t(an, "offset", ".4"), t(an, "stop-color", "#3a3a3a"), t(an, "stop-opacity", ".6"), t(on, "offset", "1"), t(on, "stop-color", "#3a3a3a"), t(on, "stop-opacity", "0"), t(ol, "id", "e"), t(c2, "offset", "0"), t(c2, "stop-color", "#4e4e4e"), t(cn, "offset", "1"), t(cn, "stop-color", "#4e4e4e"), t(cn, "stop-opacity", "0"), t(sn, "id", "d"), t(d2, "offset", "0"), t(d2, "stop-color", "#555"), t(fn, "offset", "1"), t(fn, "stop-color", "#424242"), t(fn, "stop-opacity", "0"), t(dn, "id", "c"), t(f2, "offset", "0"), t(f2, "stop-color", "#9c9c9c"), t(pn, "offset", ".8"), t(pn, "stop-color", "#b0b0b0"), t(pn, "stop-opacity", ".1"), t(p2, "offset", "1"), t(p2, "stop-color", "#f5f5f5"), t(sl, "id", "b"), t(h2, "offset", "0"), t(h2, "stop-color", "#b6b6b6"), t(u2, "offset", "0"), t(u2, "stop-color", "#fefefe"), t(g2, "offset", ".1"), t(g2, "stop-color", "#e7e7e7"), t(v2, "offset", ".8"), t(v2, "stop-color", "#e8e8e8"), t(x2, "offset", ".9"), t(x2, "stop-color", "#e6e6e6"), t(y2, "offset", "1"), t(y2, "stop-color", "#e1e1e1"), t(m2, "offset", "1"), t(m2, "stop-color", "#b2b2b2"), t(Vt, "id", "a"), c(oe, "xlink:href", "#a"), t(oe, "id", "y"), t(oe, "x1", "6.5"), t(oe, "x2", "641.5"), t(oe, "y1", "320.4"), t(oe, "y2", "320.4"), t(oe, "gradientUnits", "userSpaceOnUse"), c(se, "xlink:href", "#b"), t(se, "id", "z"), t(se, "x1", "9.3"), t(se, "x2", "634"), t(se, "y1", "-300.4"), t(se, "y2", "1004.4"), t(se, "gradientUnits", "userSpaceOnUse"), c(ce, "xlink:href", "#c"), t(ce, "id", "B"), t(ce, "x1", "570"), t(ce, "x2", "94.5"), t(ce, "y1", "560.4"), t(ce, "y2", "-263.2"), t(ce, "gradientUnits", "userSpaceOnUse"), c(de, "xlink:href", "#d"), t(de, "id", "C"), t(de, "x1", "570"), t(de, "x2", "498.4"), t(de, "y1", "560.4"), t(de, "y2", "293"), t(de, "gradientUnits", "userSpaceOnUse"), c(fe, "xlink:href", "#e"), t(fe, "id", "J"), t(fe, "x1", "91.3"), t(fe, "x2", "71.6"), t(fe, "y1", "978.6"), t(fe, "y2", "958.9"), t(fe, "gradientUnits", "userSpaceOnUse"), c(pe, "xlink:href", "#f"), t(pe, "id", "I"), t(pe, "x1", "504"), t(pe, "x2", "504"), t(pe, "y1", "978"), t(pe, "y2", "215.2"), t(pe, "gradientUnits", "userSpaceOnUse"), c(he, "xlink:href", "#g"), t(he, "id", "K"), t(he, "x1", "544"), t(he, "x2", "582"), t(he, "y1", "980"), t(he, "y2", "942"), t(he, "gradientUnits", "userSpaceOnUse"), c(ue, "xlink:href", "#h"), t(ue, "id", "L"), t(ue, "x1", "300"), t(ue, "x2", "300"), t(ue, "y1", "44"), t(ue, "y2", "1124"), t(ue, "gradientUnits", "userSpaceOnUse"), c(ge, "xlink:href", "#i"), t(ge, "id", "M"), t(ge, "x1", "514.8"), t(ge, "x2", "583.9"), t(ge, "y1", "711.8"), t(ge, "y2", "751.7"), t(ge, "gradientUnits", "userSpaceOnUse"), c(ve, "xlink:href", "#j"), t(ve, "id", "N"), t(ve, "x1", "549"), t(ve, "x2", "549"), t(ve, "y1", "713.4"), t(ve, "y2", "748.4"), t(ve, "gradientUnits", "userSpaceOnUse"), c(xe, "xlink:href", "#k"), t(xe, "id", "O"), t(xe, "x1", "515"), t(xe, "x2", "536.3"), t(xe, "y1", "1125"), t(xe, "y2", "1146.3"), t(xe, "gradientUnits", "userSpaceOnUse"), c(ye, "xlink:href", "#k"), t(ye, "id", "H"), t(ye, "x1", "515"), t(ye, "x2", "536.3"), t(ye, "y1", "1125"), t(ye, "y2", "1146.3"), t(ye, "gradientUnits", "userSpaceOnUse"), c(me, "xlink:href", "#i"), t(me, "id", "F"), t(me, "x1", "514.8"), t(me, "x2", "583.9"), t(me, "y1", "711.8"), t(me, "y2", "751.7"), t(me, "gradientUnits", "userSpaceOnUse"), c(qe, "xlink:href", "#j"), t(qe, "id", "G"), t(qe, "x1", "549"), t(qe, "x2", "549"), t(qe, "y1", "713.4"), t(qe, "y2", "748.4"), t(qe, "gradientUnits", "userSpaceOnUse"), c(be, "xlink:href", "#k"), t(be, "id", "R"), t(be, "x1", "515"), t(be, "x2", "536.3"), t(be, "y1", "1125"), t(be, "y2", "1146.3"), t(be, "gradientUnits", "userSpaceOnUse"), c(we, "xlink:href", "#i"), t(we, "id", "P"), t(we, "x1", "514.8"), t(we, "x2", "583.9"), t(we, "y1", "711.8"), t(we, "y2", "751.7"), t(we, "gradientUnits", "userSpaceOnUse"), c(ke, "xlink:href", "#j"), t(ke, "id", "Q"), t(ke, "x1", "549"), t(ke, "x2", "549"), t(ke, "y1", "713.4"), t(ke, "y2", "748.4"), t(ke, "gradientUnits", "userSpaceOnUse"), c(Ge, "xlink:href", "#k"), t(Ge, "id", "U"), t(Ge, "x1", "515"), t(Ge, "x2", "536.3"), t(Ge, "y1", "1125"), t(Ge, "y2", "1146.3"), t(Ge, "gradientUnits", "userSpaceOnUse"), c(Ue, "xlink:href", "#i"), t(Ue, "id", "S"), t(Ue, "x1", "514.8"), t(Ue, "x2", "583.9"), t(Ue, "y1", "711.8"), t(Ue, "y2", "751.7"), t(Ue, "gradientUnits", "userSpaceOnUse"), c(ze, "xlink:href", "#j"), t(ze, "id", "T"), t(ze, "x1", "549"), t(ze, "x2", "549"), t(ze, "y1", "713.4"), t(ze, "y2", "748.4"), t(ze, "gradientUnits", "userSpaceOnUse"), c(_e, "xlink:href", "#k"), t(_e, "id", "X"), t(_e, "x1", "515"), t(_e, "x2", "536.3"), t(_e, "y1", "1125"), t(_e, "y2", "1146.3"), t(_e, "gradientUnits", "userSpaceOnUse"), c(Se, "xlink:href", "#l"), t(Se, "id", "V"), t(Se, "x1", "514.8"), t(Se, "x2", "583.9"), t(Se, "y1", "711.8"), t(Se, "y2", "751.7"), t(Se, "gradientUnits", "userSpaceOnUse"), c(Oe, "xlink:href", "#m"), t(Oe, "id", "W"), t(Oe, "x1", "549"), t(Oe, "x2", "549"), t(Oe, "y1", "713.4"), t(Oe, "y2", "748.4"), t(Oe, "gradientUnits", "userSpaceOnUse"), c($e, "xlink:href", "#k"), t($e, "id", "aa"), t($e, "x1", "515"), t($e, "x2", "536.3"), t($e, "y1", "1125"), t($e, "y2", "1146.3"), t($e, "gradientUnits", "userSpaceOnUse"), c(Me, "xlink:href", "#i"), t(Me, "id", "Y"), t(Me, "x1", "514.8"), t(Me, "x2", "583.9"), t(Me, "y1", "711.8"), t(Me, "y2", "751.7"), t(Me, "gradientUnits", "userSpaceOnUse"), c(Ee, "xlink:href", "#j"), t(Ee, "id", "Z"), t(Ee, "x1", "549"), t(Ee, "x2", "549"), t(Ee, "y1", "713.4"), t(Ee, "y2", "748.4"), t(Ee, "gradientUnits", "userSpaceOnUse"), c(Ce, "xlink:href", "#k"), t(Ce, "id", "ad"), t(Ce, "x1", "515"), t(Ce, "x2", "536.3"), t(Ce, "y1", "1125"), t(Ce, "y2", "1146.3"), t(Ce, "gradientUnits", "userSpaceOnUse"), c(je, "xlink:href", "#i"), t(je, "id", "ab"), t(je, "x1", "514.8"), t(je, "x2", "583.9"), t(je, "y1", "711.8"), t(je, "y2", "751.7"), t(je, "gradientUnits", "userSpaceOnUse"), c(He, "xlink:href", "#j"), t(He, "id", "ac"), t(He, "x1", "549"), t(He, "x2", "549"), t(He, "y1", "713.4"), t(He, "y2", "748.4"), t(He, "gradientUnits", "userSpaceOnUse"), c(De, "xlink:href", "#k"), t(De, "id", "ag"), t(De, "x1", "515"), t(De, "x2", "536.3"), t(De, "y1", "1125"), t(De, "y2", "1146.3"), t(De, "gradientUnits", "userSpaceOnUse"), c(Qe, "xlink:href", "#i"), t(Qe, "id", "ae"), t(Qe, "x1", "514.8"), t(Qe, "x2", "583.9"), t(Qe, "y1", "711.8"), t(Qe, "y2", "751.7"), t(Qe, "gradientUnits", "userSpaceOnUse"), c(Be, "xlink:href", "#j"), t(Be, "id", "af"), t(Be, "x1", "549"), t(Be, "x2", "549"), t(Be, "y1", "713.4"), t(Be, "y2", "748.4"), t(Be, "gradientUnits", "userSpaceOnUse"), c(Re, "xlink:href", "#k"), t(Re, "id", "aj"), t(Re, "x1", "515"), t(Re, "x2", "536.3"), t(Re, "y1", "1125"), t(Re, "y2", "1146.3"), t(Re, "gradientUnits", "userSpaceOnUse"), c(Ke, "xlink:href", "#i"), t(Ke, "id", "ah"), t(Ke, "x1", "514.8"), t(Ke, "x2", "583.9"), t(Ke, "y1", "711.8"), t(Ke, "y2", "751.7"), t(Ke, "gradientUnits", "userSpaceOnUse"), c(Le, "xlink:href", "#j"), t(Le, "id", "ai"), t(Le, "x1", "549"), t(Le, "x2", "549"), t(Le, "y1", "713.4"), t(Le, "y2", "748.4"), t(Le, "gradientUnits", "userSpaceOnUse"), c(Ye, "xlink:href", "#k"), t(Ye, "id", "ay"), t(Ye, "x1", "515"), t(Ye, "x2", "536.3"), t(Ye, "y1", "1125"), t(Ye, "y2", "1146.3"), t(Ye, "gradientUnits", "userSpaceOnUse"), c(Pe, "xlink:href", "#i"), t(Pe, "id", "at"), t(Pe, "x1", "514.8"), t(Pe, "x2", "583.9"), t(Pe, "y1", "711.8"), t(Pe, "y2", "751.7"), t(Pe, "gradientUnits", "userSpaceOnUse"), c(Ve, "xlink:href", "#j"), t(Ve, "id", "au"), t(Ve, "x1", "549"), t(Ve, "x2", "549"), t(Ve, "y1", "713.4"), t(Ve, "y2", "748.4"), t(Ve, "gradientUnits", "userSpaceOnUse"), c(Ae, "xlink:href", "#k"), t(Ae, "id", "av"), t(Ae, "x1", "515"), t(Ae, "x2", "536.3"), t(Ae, "y1", "1125"), t(Ae, "y2", "1146.3"), t(Ae, "gradientUnits", "userSpaceOnUse"), c(Fe, "xlink:href", "#i"), t(Fe, "id", "aq"), t(Fe, "x1", "514.8"), t(Fe, "x2", "583.9"), t(Fe, "y1", "711.8"), t(Fe, "y2", "751.7"), t(Fe, "gradientUnits", "userSpaceOnUse"), c(Ie, "xlink:href", "#j"), t(Ie, "id", "ar"), t(Ie, "x1", "549"), t(Ie, "x2", "549"), t(Ie, "y1", "713.4"), t(Ie, "y2", "748.4"), t(Ie, "gradientUnits", "userSpaceOnUse"), c(Te, "xlink:href", "#k"), t(Te, "id", "as"), t(Te, "x1", "515"), t(Te, "x2", "536.3"), t(Te, "y1", "1125"), t(Te, "y2", "1146.3"), t(Te, "gradientUnits", "userSpaceOnUse"), c(Ne, "xlink:href", "#k"), t(Ne, "id", "ap"), t(Ne, "x1", "515"), t(Ne, "x2", "536.3"), t(Ne, "y1", "1125"), t(Ne, "y2", "1146.3"), t(Ne, "gradientUnits", "userSpaceOnUse"), c(Ze, "xlink:href", "#i"), t(Ze, "id", "ak"), t(Ze, "x1", "514.8"), t(Ze, "x2", "583.9"), t(Ze, "y1", "711.8"), t(Ze, "y2", "751.7"), t(Ze, "gradientUnits", "userSpaceOnUse"), c(We, "xlink:href", "#j"), t(We, "id", "al"), t(We, "x1", "549"), t(We, "x2", "549"), t(We, "y1", "713.4"), t(We, "y2", "748.4"), t(We, "gradientUnits", "userSpaceOnUse"), c(Xe, "xlink:href", "#k"), t(Xe, "id", "am"), t(Xe, "x1", "515"), t(Xe, "x2", "536.3"), t(Xe, "y1", "1125"), t(Xe, "y2", "1146.3"), t(Xe, "gradientUnits", "userSpaceOnUse"), c(Je, "xlink:href", "#i"), t(Je, "id", "an"), t(Je, "x1", "514.8"), t(Je, "x2", "583.9"), t(Je, "y1", "711.8"), t(Je, "y2", "751.7"), t(Je, "gradientUnits", "userSpaceOnUse"), c(t1, "xlink:href", "#j"), t(t1, "id", "ao"), t(t1, "x1", "549"), t(t1, "x2", "549"), t(t1, "y1", "713.4"), t(t1, "y2", "748.4"), t(t1, "gradientUnits", "userSpaceOnUse"), c(e1, "xlink:href", "#i"), t(e1, "id", "aw"), t(e1, "x1", "514.8"), t(e1, "x2", "583.9"), t(e1, "y1", "711.8"), t(e1, "y2", "751.7"), t(e1, "gradientUnits", "userSpaceOnUse"), c(r1, "xlink:href", "#j"), t(r1, "id", "ax"), t(r1, "x1", "549"), t(r1, "x2", "549"), t(r1, "y1", "713.4"), t(r1, "y2", "748.4"), t(r1, "gradientUnits", "userSpaceOnUse"), c(l1, "xlink:href", "#n"), t(l1, "id", "aB"), t(l1, "x1", "520"), t(l1, "x2", "528.5"), t(l1, "y1", "1122"), t(l1, "y2", "1152"), t(l1, "gradientUnits", "userSpaceOnUse"), c(n1, "xlink:href", "#i"), t(n1, "id", "az"), t(n1, "x1", "514.8"), t(n1, "x2", "624"), t(n1, "y1", "711.8"), t(n1, "y2", "743.4"), t(n1, "gradientUnits", "userSpaceOnUse"), c(i1, "xlink:href", "#j"), t(i1, "id", "aA"), t(i1, "x1", "549"), t(i1, "x2", "549"), t(i1, "y1", "713.4"), t(i1, "y2", "748.4"), t(i1, "gradientUnits", "userSpaceOnUse"), c(a1, "xlink:href", "#i"), t(a1, "id", "aC"), t(a1, "x1", "514.8"), t(a1, "x2", "624"), t(a1, "y1", "711.8"), t(a1, "y2", "743.4"), t(a1, "gradientUnits", "userSpaceOnUse"), c(o1, "xlink:href", "#n"), t(o1, "id", "aE"), t(o1, "x1", "520"), t(o1, "x2", "528.5"), t(o1, "y1", "1122"), t(o1, "y2", "1152"), t(o1, "gradientUnits", "userSpaceOnUse"), c(s1, "xlink:href", "#j"), t(s1, "id", "aD"), t(s1, "x1", "549"), t(s1, "x2", "549"), t(s1, "y1", "713.4"), t(s1, "y2", "748.4"), t(s1, "gradientUnits", "userSpaceOnUse"), c(c1, "xlink:href", "#i"), t(c1, "id", "aI"), t(c1, "x1", "514.8"), t(c1, "x2", "624"), t(c1, "y1", "711.8"), t(c1, "y2", "743.4"), t(c1, "gradientUnits", "userSpaceOnUse"), c(d1, "xlink:href", "#n"), t(d1, "id", "aK"), t(d1, "x1", "520"), t(d1, "x2", "528.5"), t(d1, "y1", "1122"), t(d1, "y2", "1152"), t(d1, "gradientUnits", "userSpaceOnUse"), c(f1, "xlink:href", "#i"), t(f1, "id", "aF"), t(f1, "x1", "514.8"), t(f1, "x2", "624"), t(f1, "y1", "711.8"), t(f1, "y2", "743.4"), t(f1, "gradientUnits", "userSpaceOnUse"), c(p1, "xlink:href", "#j"), t(p1, "id", "aG"), t(p1, "x1", "549"), t(p1, "x2", "549"), t(p1, "y1", "713.4"), t(p1, "y2", "748.4"), t(p1, "gradientUnits", "userSpaceOnUse"), c(h1, "xlink:href", "#n"), t(h1, "id", "aH"), t(h1, "x1", "520"), t(h1, "x2", "528.5"), t(h1, "y1", "1122"), t(h1, "y2", "1152"), t(h1, "gradientUnits", "userSpaceOnUse"), c(u1, "xlink:href", "#j"), t(u1, "id", "aJ"), t(u1, "x1", "549"), t(u1, "x2", "549"), t(u1, "y1", "713.4"), t(u1, "y2", "748.4"), t(u1, "gradientUnits", "userSpaceOnUse"), c(g1, "xlink:href", "#c"), t(g1, "id", "D"), t(g1, "x1", "575.8"), t(g1, "x2", "543.8"), t(g1, "y1", "691.7"), t(g1, "y2", "572.4"), t(g1, "gradientUnits", "userSpaceOnUse"), c(v1, "xlink:href", "#d"), t(v1, "id", "E"), t(v1, "x1", "562"), t(v1, "x2", "537.9"), t(v1, "y1", "686.2"), t(v1, "y2", "596.4"), t(v1, "gradientUnits", "userSpaceOnUse"), c(At, "xlink:href", "#o"), t(At, "id", "aL"), t(At, "x1", "504"), t(At, "x2", "504"), t(At, "y1", "978"), t(At, "y2", "876.8"), t(At, "gradientTransform", "translate(0 -285.6)"), t(At, "gradientUnits", "userSpaceOnUse"), c(Ft, "xlink:href", "#e"), t(Ft, "id", "aM"), t(Ft, "x1", "91.3"), t(Ft, "x2", "71.6"), t(Ft, "y1", "978.6"), t(Ft, "y2", "958.9"), t(Ft, "gradientTransform", "translate(0 -285.6)"), t(Ft, "gradientUnits", "userSpaceOnUse"), c(It, "xlink:href", "#g"), t(It, "id", "aN"), t(It, "x1", "544"), t(It, "x2", "575.4"), t(It, "y1", "980"), t(It, "y2", "948.6"), t(It, "gradientTransform", "translate(0 -285.6)"), t(It, "gradientUnits", "userSpaceOnUse"), c(x1, "xlink:href", "#p"), t(x1, "id", "aO"), t(x1, "x1", "327.1"), t(x1, "x2", "327.1"), t(x1, "y1", "580.4"), t(x1, "y2", "694.4"), t(x1, "gradientUnits", "userSpaceOnUse"), c(y1, "xlink:href", "#q"), t(y1, "id", "aP"), t(y1, "x1", "330.1"), t(y1, "x2", "330.1"), t(y1, "y1", "582.4"), t(y1, "y2", "694.4"), t(y1, "gradientUnits", "userSpaceOnUse"), c(m1, "xlink:href", "#r"), t(m1, "id", "aQ"), t(m1, "x1", "264.5"), t(m1, "x2", "350.3"), t(m1, "y1", "600.6"), t(m1, "y2", "686.4"), t(m1, "gradientUnits", "userSpaceOnUse"), c(q1, "xlink:href", "#s"), t(q1, "id", "aS"), t(q1, "x1", "274"), t(q1, "x2", "367.4"), t(q1, "y1", "632.4"), t(q1, "y2", "644.4"), t(q1, "gradientUnits", "userSpaceOnUse"), c(b1, "xlink:href", "#t"), t(b1, "id", "aT"), t(b1, "x1", "311.9"), t(b1, "x2", "313.6"), t(b1, "y1", "632.4"), t(b1, "y2", "644.4"), t(b1, "gradientUnits", "userSpaceOnUse"), c(w1, "xlink:href", "#t"), t(w1, "id", "aV"), t(w1, "x1", "251"), t(w1, "x2", "262.3"), t(w1, "y1", "645.1"), t(w1, "y2", "638.6"), t(w1, "gradientUnits", "userSpaceOnUse"), c(k1, "xlink:href", "#t"), t(k1, "id", "aU"), t(k1, "x1", "-329.7"), t(k1, "x2", "-320.5"), t(k1, "y1", "-677.4"), t(k1, "y2", "-667.2"), t(k1, "gradientUnits", "userSpaceOnUse"), c(G1, "xlink:href", "#t"), t(G1, "id", "aW"), t(G1, "x1", "251.4"), t(G1, "x2", "261.3"), t(G1, "y1", "633.6"), t(G1, "y2", "639.3"), t(G1, "gradientUnits", "userSpaceOnUse"), c(U1, "xlink:href", "#t"), t(U1, "id", "aR"), t(U1, "x1", "325"), t(U1, "x2", "325"), t(U1, "y1", "612.4"), t(U1, "y2", "606.9"), t(U1, "gradientUnits", "userSpaceOnUse"), c(z1, "xlink:href", "#u"), t(z1, "id", "aX"), t(z1, "x1", "328.8"), t(z1, "x2", "328.8"), t(z1, "y1", "1099"), t(z1, "y2", "1108"), t(z1, "gradientUnits", "userSpaceOnUse"), c(_1, "xlink:href", "#v"), t(_1, "id", "aY"), t(_1, "x1", "559.3"), t(_1, "x2", "583.9"), t(_1, "y1", "709.1"), t(_1, "y2", "751.7"), t(_1, "gradientUnits", "userSpaceOnUse"), c(S1, "xlink:href", "#w"), t(S1, "id", "aZ"), t(S1, "x1", "549"), t(S1, "x2", "549"), t(S1, "y1", "713.4"), t(S1, "y2", "748.4"), t(S1, "gradientUnits", "userSpaceOnUse"), c(O1, "xlink:href", "#v"), t(O1, "id", "ba"), t(O1, "x1", "559.3"), t(O1, "x2", "583.9"), t(O1, "y1", "709.1"), t(O1, "y2", "751.7"), t(O1, "gradientUnits", "userSpaceOnUse"), c($1, "xlink:href", "#w"), t($1, "id", "bb"), t($1, "x1", "549"), t($1, "x2", "549"), t($1, "y1", "713.4"), t($1, "y2", "748.4"), t($1, "gradientUnits", "userSpaceOnUse"), c(M1, "xlink:href", "#v"), t(M1, "id", "bc"), t(M1, "x1", "559.3"), t(M1, "x2", "583.9"), t(M1, "y1", "709.1"), t(M1, "y2", "751.7"), t(M1, "gradientUnits", "userSpaceOnUse"), c(E1, "xlink:href", "#w"), t(E1, "id", "bd"), t(E1, "x1", "549"), t(E1, "x2", "549"), t(E1, "y1", "713.4"), t(E1, "y2", "748.4"), t(E1, "gradientUnits", "userSpaceOnUse"), c(C1, "xlink:href", "#v"), t(C1, "id", "be"), t(C1, "x1", "559.3"), t(C1, "x2", "583.9"), t(C1, "y1", "709.1"), t(C1, "y2", "751.7"), t(C1, "gradientUnits", "userSpaceOnUse"), c(j1, "xlink:href", "#w"), t(j1, "id", "bf"), t(j1, "x1", "549"), t(j1, "x2", "549"), t(j1, "y1", "713.4"), t(j1, "y2", "748.4"), t(j1, "gradientUnits", "userSpaceOnUse"), c(H1, "xlink:href", "#v"), t(H1, "id", "bg"), t(H1, "x1", "559.3"), t(H1, "x2", "583.9"), t(H1, "y1", "709.1"), t(H1, "y2", "751.7"), t(H1, "gradientUnits", "userSpaceOnUse"), c(D1, "xlink:href", "#w"), t(D1, "id", "bh"), t(D1, "x1", "549"), t(D1, "x2", "549"), t(D1, "y1", "713.4"), t(D1, "y2", "748.4"), t(D1, "gradientUnits", "userSpaceOnUse"), c(Q1, "xlink:href", "#v"), t(Q1, "id", "bi"), t(Q1, "x1", "559.3"), t(Q1, "x2", "583.9"), t(Q1, "y1", "709.1"), t(Q1, "y2", "751.7"), t(Q1, "gradientUnits", "userSpaceOnUse"), c(B1, "xlink:href", "#w"), t(B1, "id", "bj"), t(B1, "x1", "549"), t(B1, "x2", "549"), t(B1, "y1", "713.4"), t(B1, "y2", "748.4"), t(B1, "gradientUnits", "userSpaceOnUse"), c(R1, "xlink:href", "#v"), t(R1, "id", "bk"), t(R1, "x1", "559.3"), t(R1, "x2", "583.9"), t(R1, "y1", "709.1"), t(R1, "y2", "751.7"), t(R1, "gradientUnits", "userSpaceOnUse"), c(K1, "xlink:href", "#w"), t(K1, "id", "bl"), t(K1, "x1", "549"), t(K1, "x2", "549"), t(K1, "y1", "713.4"), t(K1, "y2", "748.4"), t(K1, "gradientUnits", "userSpaceOnUse"), c(L1, "xlink:href", "#v"), t(L1, "id", "bm"), t(L1, "x1", "559.3"), t(L1, "x2", "583.9"), t(L1, "y1", "709.1"), t(L1, "y2", "751.7"), t(L1, "gradientUnits", "userSpaceOnUse"), c(Y1, "xlink:href", "#w"), t(Y1, "id", "bn"), t(Y1, "x1", "549"), t(Y1, "x2", "549"), t(Y1, "y1", "713.4"), t(Y1, "y2", "748.4"), t(Y1, "gradientUnits", "userSpaceOnUse"), c(P1, "xlink:href", "#v"), t(P1, "id", "bo"), t(P1, "x1", "559.3"), t(P1, "x2", "583.9"), t(P1, "y1", "709.1"), t(P1, "y2", "751.7"), t(P1, "gradientUnits", "userSpaceOnUse"), c(V1, "xlink:href", "#w"), t(V1, "id", "bp"), t(V1, "x1", "549"), t(V1, "x2", "549"), t(V1, "y1", "713.4"), t(V1, "y2", "748.4"), t(V1, "gradientUnits", "userSpaceOnUse"), c(A1, "xlink:href", "#v"), t(A1, "id", "bq"), t(A1, "x1", "559.3"), t(A1, "x2", "583.9"), t(A1, "y1", "709.1"), t(A1, "y2", "751.7"), t(A1, "gradientUnits", "userSpaceOnUse"), c(F1, "xlink:href", "#w"), t(F1, "id", "br"), t(F1, "x1", "549"), t(F1, "x2", "549"), t(F1, "y1", "713.4"), t(F1, "y2", "748.4"), t(F1, "gradientUnits", "userSpaceOnUse"), c(I1, "xlink:href", "#v"), t(I1, "id", "bs"), t(I1, "x1", "559.3"), t(I1, "x2", "583.9"), t(I1, "y1", "709.1"), t(I1, "y2", "751.7"), t(I1, "gradientUnits", "userSpaceOnUse"), c(T1, "xlink:href", "#w"), t(T1, "id", "bt"), t(T1, "x1", "549"), t(T1, "x2", "549"), t(T1, "y1", "713.4"), t(T1, "y2", "748.4"), t(T1, "gradientUnits", "userSpaceOnUse"), c(N1, "xlink:href", "#v"), t(N1, "id", "bu"), t(N1, "x1", "559.3"), t(N1, "x2", "583.9"), t(N1, "y1", "709.1"), t(N1, "y2", "751.7"), t(N1, "gradientUnits", "userSpaceOnUse"), c(Z1, "xlink:href", "#w"), t(Z1, "id", "bv"), t(Z1, "x1", "549"), t(Z1, "x2", "549"), t(Z1, "y1", "713.4"), t(Z1, "y2", "748.4"), t(Z1, "gradientUnits", "userSpaceOnUse"), t(Yr, "y", "0"), t(Yr, "x", "0"), t(Yr, "height", "18"), t(Yr, "width", "20"), t(Yr, "fill", "#272727"), t(hn, "fill", "#222"), t(hn, "fill-rule", "evenodd"), t(hn, "d", "M9.99 0 5 3v6l-5 3v6l10-6V0h-.01zm10 0L15 3v6l5-3V0h-.01z"), t(un, "fill", "#1c1c1c"), t(un, "fill-rule", "evenodd"), t(un, "d", "M0 0v6l5 3V3L.01 0H0zm10 0v12l10 6v-6l-5-3V3l-4.99-3H10z"), t(Mt, "id", "pattern1"), t(Mt, "x", "0"), t(Mt, "y", "0"), t(Mt, "width", "20"), t(Mt, "height", "18"), t(Mt, "patternUnits", "userSpaceOnUse"), t(Mt, "class", "svelte-py5gbp"), c(W1, "xlink:href", "#x"), t(W1, "id", "A"), t(W1, "x1", "295"), t(W1, "x2", "295"), t(W1, "y1", "1004.4"), t(W1, "y2", "-357.6"), t(W1, "gradientUnits", "userSpaceOnUse"), t(cl, "fill", "url(#y)"), t(cl, "fill-rule", "evenodd"), t(cl, "stroke", "#696a69"), t(cl, "d", "M119 1046.4c-33-.4-94-23-105-42-1-7-7-94-7-162v-1075c0-13 3.5-103 5-130 8-13.9 56-33.8 68-37 12-3.3 25-6 36-6h416c11 0 24 2.7 36 6 12 3.2 60 23.1 68 37 1.5 27 5 117 5 130v1075c0 68-6 155-7 162-11 19-72 41.6-105 42H365z"), t(gn, "fill", "url(#z)"), t(gn, "fill-rule", "evenodd"), t(gn, "d", "M120 1022.4c-60 0-102-25-102-135v-1135c0-75 17-133 117-133h378c100 0 117 58 117 133v1135c0 110-42 135-102 135H365z"), t(dl, "fill", "#269dc5"), t(dl, "fill-rule", "evenodd"), t(dl, "stroke", "#6ac1df"), t(dl, "d", "M120 1015.4c-55 0-96-23-96-128v-1135c0-75 16-128 111-128h378c95 0 111 53 111 128v1135c0 105-41 128-96 128H365z"), t(Pr, "id", "pattern-bg"), t(Pr, "fill", "url(#pattern1)"), t(Pr, "fill-rule", "evenodd"), t(Pr, "stroke", "#000"), t(Pr, "d", "M120 1007.4c-45.4 0-90-15-90-120v-1127c0-75 15-128 105-128h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H365z"), t(Et, "width", "516"), t(Et, "height", "894"), t(Et, "x", "66"), t(Et, "y", "-321.6"), t(Et, "fill", "#0d0d0d"), t(Et, "stroke", "url(#B)"), t(Et, "stroke-linecap", "round"), t(Et, "stroke-linejoin", "round"), t(Et, "rx", "22"), t(Et, "ry", "22"), t(Ct, "width", "493"), t(Ct, "height", "871"), t(Ct, "x", "77"), t(Ct, "y", "-310.6"), t(Ct, "fill", "#0d0d0d"), t(Ct, "stroke", "url(#C)"), t(Ct, "stroke-linecap", "round"), t(Ct, "stroke-linejoin", "round"), t(Ct, "rx", "10"), t(Ct, "ry", "10"), t(jt, "width", "516"), t(jt, "height", "120"), t(jt, "x", "66"), t(jt, "y", "578.4"), t(jt, "fill", "#0d0d0d"), t(jt, "stroke", "url(#D)"), t(jt, "stroke-linecap", "round"), t(jt, "stroke-linejoin", "round"), t(jt, "rx", "22"), t(jt, "ry", "22"), t(Ht, "width", "493"), t(Ht, "height", "96"), t(Ht, "x", "77"), t(Ht, "y", "590.4"), t(Ht, "fill", "#0d0d0d"), t(Ht, "stroke", "url(#E)"), t(Ht, "stroke-linecap", "round"), t(Ht, "stroke-linejoin", "round"), t(Ht, "rx", "10"), t(Ht, "ry", "10"), t(Tt, "width", "116"), t(Tt, "height", "36"), t(Tt, "x", "86"), t(Tt, "y", "644.4"), t(Tt, "fill", "#00ec3a"), t(Tt, "fill-opacity", ".2"), t(Tt, "rx", "7"), t(Tt, "ry", "7"), t(Nt, "width", "116"), t(Nt, "height", "36"), t(Nt, "x", "446"), t(Nt, "y", "596.4"), t(Nt, "fill", "#00ec3a"), t(Nt, "fill-opacity", ".2"), t(Nt, "rx", "7"), t(Nt, "ry", "7"), t(Zt, "width", "116"), t(Zt, "height", "36"), t(Zt, "x", "446"), t(Zt, "y", "644.4"), t(Zt, "fill", "#00ec3a"), t(Zt, "fill-opacity", ".2"), t(Zt, "rx", "7"), t(Zt, "ry", "7"), t(W, "width", "76"), t(W, "height", "44"), t(W, "x", "511"), t(W, "y", "709.4"), t(W, "fill", "url(#F)"), t(W, "stroke", "var(--btn-border-stroke)"), t(W, "stroke-linecap", "round"), t(W, "stroke-linejoin", "round"), t(W, "stroke-width", "2"), t(W, "rx", "8"), t(W, "ry", "8"), t(X1, "width", "68"), t(X1, "height", "35"), t(X1, "x", "515"), t(X1, "y", "713.4"), t(X1, "fill", "url(#G)"), t(X1, "rx", "4"), t(X1, "ry", "4"), t(vn, "fill", "url(#H)"), t(vn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(vn, "transform", "translate(0 -411.6)"), t(N0, "transform", "translate(0 54)"), t(N0, "class", "cp-button"), t(N0, "data-cp", "KEYCODE_TIMES"), t(b2, "fill", "#fff"), t(b2, "d", "M84-303.6h480v792H84z"), t(q2, "id", "uid_3418"), t(V, "transform", "translate(0 411.6)"), t(k2, "class", "cp-wrapper svelte-py5gbp"), t(Z0, "x", "0"), t(Z0, "y", "0"), t(Z0, "width", "480"), t(Z0, "height", "792"), t(Z0, "overflow", "hidden"), t(w2, "transform", "translate(85 109)"), t(xn, "fill", "url(#I)"), t(xn, "d", "M387.7 90a22 22 0 0 0-19 11H560a10 10 0 0 1 10 10v851a10 10 0 0 1-10 10H365.7v12H560a22 22 0 0 0 22-22V112a22 22 0 0 0-22-22H387.7z"), t(xn, "transform", "translate(0 -411.6)"), t(yn, "fill", "url(#J)"), t(yn, "d", "M66 904v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(yn, "transform", "translate(0 -411.6)"), t(mn, "fill", "url(#K)"), t(mn, "d", "M570 900v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62h-12z"), t(mn, "transform", "translate(0 -411.6)"), t(fl, "fill", "url(#L)"), t(fl, "fill-rule", "evenodd"), t(fl, "d", "M136.9 40C42.9 40 27 93 27 168v1135c0 44.7 7.4 74.6 20 94.1 17.3 23 43 29.9 73 29.9h408c30 0 55.7-6.8 73-29.9 12.6-19.5 20-49.4 20-94.1V168c0-75-15.8-128-109.9-128H137zm-1.9 4h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H120c-45.4 0-90-15-90-120V172C30 97 45 44 135 44z"), t(fl, "transform", "translate(0 -411.6)"), t(pl, "fill", "#1f7e9e"), t(pl, "fill-opacity", ".3"), t(pl, "fill-rule", "evenodd"), t(pl, "d", "M-638 1019.4c-54.4 0-95-23-95-128v-1135c0-75 15.8-128 109.9-128H-249c94 0 109.9 53 109.9 128v1135c0 105-40.6 128-95 128h-161.4z"), t(X, "width", "76"), t(X, "height", "44"), t(X, "x", "511"), t(X, "y", "709.4"), t(X, "fill", "url(#M)"), t(X, "stroke", "var(--btn-border-stroke)"), t(X, "stroke-linecap", "round"), t(X, "stroke-linejoin", "round"), t(X, "stroke-width", "2"), t(X, "rx", "8"), t(X, "ry", "8"), t(J1, "width", "68"), t(J1, "height", "35"), t(J1, "x", "515"), t(J1, "y", "713.4"), t(J1, "fill", "url(#N)"), t(J1, "rx", "4"), t(J1, "ry", "4"), t(qn, "fill", "url(#O)"), t(qn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(qn, "transform", "translate(0 -411.6)"), t(Vr, "class", "cp-button"), t(Vr, "data-cp", "KEYCODE_DIVIDE"), t(J, "width", "76"), t(J, "height", "44"), t(J, "x", "511"), t(J, "y", "709.4"), t(J, "fill", "url(#P)"), t(J, "stroke", "var(--btn-border-stroke)"), t(J, "stroke-linecap", "round"), t(J, "stroke-linejoin", "round"), t(J, "stroke-width", "2"), t(J, "rx", "8"), t(J, "ry", "8"), t(t0, "width", "68"), t(t0, "height", "35"), t(t0, "x", "515"), t(t0, "y", "713.4"), t(t0, "fill", "url(#Q)"), t(t0, "rx", "4"), t(t0, "ry", "4"), t(bn, "fill", "url(#R)"), t(bn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(bn, "transform", "translate(0 -411.6)"), t(W0, "transform", "translate(0 108)"), t(W0, "class", "cp-button"), t(W0, "data-cp", "KEYCODE_MINUS"), t(tt, "width", "76"), t(tt, "height", "44"), t(tt, "x", "511"), t(tt, "y", "709.4"), t(tt, "fill", "url(#S)"), t(tt, "stroke", "var(--btn-border-stroke)"), t(tt, "stroke-linecap", "round"), t(tt, "stroke-linejoin", "round"), t(tt, "stroke-width", "2"), t(tt, "rx", "8"), t(tt, "ry", "8"), t(e0, "width", "68"), t(e0, "height", "35"), t(e0, "x", "515"), t(e0, "y", "713.4"), t(e0, "fill", "url(#T)"), t(e0, "rx", "4"), t(e0, "ry", "4"), t(wn, "fill", "url(#U)"), t(wn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(wn, "transform", "translate(0 -411.6)"), t(X0, "transform", "translate(0 162)"), t(X0, "class", "cp-button"), t(X0, "data-cp", "KEYCODE_PLUS"), t(et, "width", "76"), t(et, "height", "44"), t(et, "x", "511"), t(et, "y", "709.4"), t(et, "fill", "url(#V)"), t(et, "stroke", "var(--btn-border-stroke)"), t(et, "stroke-linecap", "round"), t(et, "stroke-linejoin", "round"), t(et, "stroke-width", "2"), t(et, "rx", "8"), t(et, "ry", "8"), t(r0, "width", "68"), t(r0, "height", "35"), t(r0, "x", "515"), t(r0, "y", "713.4"), t(r0, "fill", "url(#W)"), t(r0, "rx", "4"), t(r0, "ry", "4"), t(kn, "fill", "url(#X)"), t(kn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(kn, "transform", "translate(0 -411.6)"), t(J0, "transform", "translate(0 216)"), t(J0, "class", "cp-button"), t(J0, "data-cp", "KEYCODE_EXE"), t(rt, "width", "76"), t(rt, "height", "44"), t(rt, "x", "511"), t(rt, "y", "709.4"), t(rt, "fill", "url(#Y)"), t(rt, "stroke", "var(--btn-border-stroke)"), t(rt, "stroke-linecap", "round"), t(rt, "stroke-linejoin", "round"), t(rt, "stroke-width", "2"), t(rt, "rx", "8"), t(rt, "ry", "8"), t(l0, "width", "68"), t(l0, "height", "35"), t(l0, "x", "515"), t(l0, "y", "713.4"), t(l0, "fill", "url(#Z)"), t(l0, "rx", "4"), t(l0, "ry", "4"), t(Gn, "fill", "url(#aa)"), t(Gn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Gn, "transform", "translate(0 -411.6)"), t(tr, "transform", "translate(-90)"), t(tr, "class", "cp-button"), t(tr, "data-cp", "KEYCODE_POWER"), t(lt, "width", "76"), t(lt, "height", "44"), t(lt, "x", "511"), t(lt, "y", "709.4"), t(lt, "fill", "url(#ab)"), t(lt, "stroke", "var(--btn-border-stroke)"), t(lt, "stroke-linecap", "round"), t(lt, "stroke-linejoin", "round"), t(lt, "stroke-width", "2"), t(lt, "rx", "8"), t(lt, "ry", "8"), t(n0, "width", "68"), t(n0, "height", "35"), t(n0, "x", "515"), t(n0, "y", "713.4"), t(n0, "fill", "url(#ac)"), t(n0, "rx", "4"), t(n0, "ry", "4"), t(Un, "fill", "url(#ad)"), t(Un, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Un, "transform", "translate(0 -411.6)"), t(er, "transform", "translate(-180)"), t(er, "class", "cp-button"), t(er, "data-cp", "KEYCODE_Z"), t(nt, "width", "76"), t(nt, "height", "44"), t(nt, "x", "511"), t(nt, "y", "709.4"), t(nt, "fill", "url(#ae)"), t(nt, "stroke", "var(--btn-border-stroke)"), t(nt, "stroke-linecap", "round"), t(nt, "stroke-linejoin", "round"), t(nt, "stroke-width", "2"), t(nt, "rx", "8"), t(nt, "ry", "8"), t(i0, "width", "68"), t(i0, "height", "35"), t(i0, "x", "515"), t(i0, "y", "713.4"), t(i0, "fill", "url(#af)"), t(i0, "rx", "4"), t(i0, "ry", "4"), t(zn, "fill", "url(#ag)"), t(zn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(zn, "transform", "translate(0 -411.6)"), t(rr, "transform", "translate(-270)"), t(rr, "class", "cp-button"), t(rr, "data-cp", "KEYCODE_Y"), t(it, "width", "76"), t(it, "height", "44"), t(it, "x", "511"), t(it, "y", "709.4"), t(it, "fill", "url(#ah)"), t(it, "stroke", "var(--btn-border-stroke)"), t(it, "stroke-linecap", "round"), t(it, "stroke-linejoin", "round"), t(it, "stroke-width", "2"), t(it, "rx", "8"), t(it, "ry", "8"), t(a0, "width", "68"), t(a0, "height", "35"), t(a0, "x", "515"), t(a0, "y", "713.4"), t(a0, "fill", "url(#ai)"), t(a0, "rx", "4"), t(a0, "ry", "4"), t(_n, "fill", "url(#aj)"), t(_n, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(_n, "transform", "translate(0 -411.6)"), t(lr, "transform", "translate(-360)"), t(lr, "class", "cp-button"), t(lr, "data-cp", "KEYCODE_X"), t(at, "width", "76"), t(at, "height", "44"), t(at, "x", "511"), t(at, "y", "709.4"), t(at, "fill", "url(#ak)"), t(at, "stroke", "var(--btn-border-stroke)"), t(at, "stroke-linecap", "round"), t(at, "stroke-linejoin", "round"), t(at, "stroke-width", "2"), t(at, "rx", "8"), t(at, "ry", "8"), t(o0, "width", "68"), t(o0, "height", "35"), t(o0, "x", "515"), t(o0, "y", "713.4"), t(o0, "fill", "url(#al)"), t(o0, "rx", "4"), t(o0, "ry", "4"), t(Sn, "fill", "url(#am)"), t(Sn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Sn, "transform", "translate(0 -411.6)"), t(nr, "transform", "translate(-450 54)"), t(nr, "class", "cp-button"), t(nr, "data-cp", "KEYCODE_OPEN_PARENTHESIS"), t(ot, "width", "76"), t(ot, "height", "44"), t(ot, "x", "511"), t(ot, "y", "709.4"), t(ot, "fill", "url(#an)"), t(ot, "stroke", "var(--btn-border-stroke)"), t(ot, "stroke-linecap", "round"), t(ot, "stroke-linejoin", "round"), t(ot, "stroke-width", "2"), t(ot, "rx", "8"), t(ot, "ry", "8"), t(s0, "width", "68"), t(s0, "height", "35"), t(s0, "x", "515"), t(s0, "y", "713.4"), t(s0, "fill", "url(#ao)"), t(s0, "rx", "4"), t(s0, "ry", "4"), t(On, "fill", "url(#ap)"), t(On, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(On, "transform", "translate(0 -411.6)"), t(ir, "transform", "translate(-450)"), t(ir, "class", "cp-button"), t(ir, "data-cp", "KEYCODE_EQUALS"), t(st, "width", "76"), t(st, "height", "44"), t(st, "x", "511"), t(st, "y", "709.4"), t(st, "fill", "url(#aq)"), t(st, "stroke", "var(--btn-border-stroke)"), t(st, "stroke-linecap", "round"), t(st, "stroke-linejoin", "round"), t(st, "stroke-width", "2"), t(st, "rx", "8"), t(st, "ry", "8"), t(c0, "width", "68"), t(c0, "height", "35"), t(c0, "x", "515"), t(c0, "y", "713.4"), t(c0, "fill", "url(#ar)"), t(c0, "rx", "4"), t(c0, "ry", "4"), t($n, "fill", "url(#as)"), t($n, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t($n, "transform", "translate(0 -411.6)"), t(ar, "transform", "translate(-450 108)"), t(ar, "class", "cp-button"), t(ar, "data-cp", "KEYCODE_CLOSE_PARENTHESIS"), t(ct, "width", "76"), t(ct, "height", "44"), t(ct, "x", "511"), t(ct, "y", "709.4"), t(ct, "fill", "url(#at)"), t(ct, "stroke", "var(--btn-border-stroke)"), t(ct, "stroke-linecap", "round"), t(ct, "stroke-linejoin", "round"), t(ct, "stroke-width", "2"), t(ct, "rx", "8"), t(ct, "ry", "8"), t(d0, "width", "68"), t(d0, "height", "35"), t(d0, "x", "515"), t(d0, "y", "713.4"), t(d0, "fill", "url(#au)"), t(d0, "rx", "4"), t(d0, "ry", "4"), t(Mn, "fill", "url(#av)"), t(Mn, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Mn, "transform", "translate(0 -411.6)"), t(or, "transform", "translate(-450 162)"), t(or, "class", "cp-button"), t(or, "data-cp", "KEYCODE_COMMA"), t(dt, "width", "76"), t(dt, "height", "44"), t(dt, "x", "511"), t(dt, "y", "709.4"), t(dt, "fill", "url(#aw)"), t(dt, "stroke", "var(--btn-border-stroke)"), t(dt, "stroke-linecap", "round"), t(dt, "stroke-linejoin", "round"), t(dt, "stroke-width", "2"), t(dt, "rx", "8"), t(dt, "ry", "8"), t(f0, "width", "68"), t(f0, "height", "35"), t(f0, "x", "515"), t(f0, "y", "713.4"), t(f0, "fill", "url(#ax)"), t(f0, "rx", "4"), t(f0, "ry", "4"), t(En, "fill", "url(#ay)"), t(En, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(En, "transform", "translate(0 -411.6)"), t(sr, "transform", "translate(-450 216)"), t(sr, "class", "cp-button"), t(sr, "data-cp", "KEYCODE_NEGATIVE"), t(ft, "width", "116"), t(ft, "height", "36"), t(ft, "x", "511"), t(ft, "y", "709.4"), t(ft, "fill", "url(#az)"), t(ft, "stroke", "var(--btn-border-stroke)"), t(ft, "stroke-linecap", "round"), t(ft, "stroke-linejoin", "round"), t(ft, "stroke-width", "2"), t(ft, "rx", "8"), t(ft, "ry", "8"), t(p0, "width", "107"), t(p0, "height", "27"), t(p0, "x", "515"), t(p0, "y", "713.4"), t(p0, "fill", "url(#aA)"), t(p0, "rx", "4"), t(p0, "ry", "4"), t(Cn, "fill", "url(#aB)"), t(Cn, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Cn, "transform", "translate(0 -411.6)"), t(cr, "transform", "translate(-425 -113)"), t(cr, "class", "cp-button"), t(cr, "data-cp", "KEYCODE_KEYBOARD"), t(pt, "width", "116"), t(pt, "height", "36"), t(pt, "x", "511"), t(pt, "y", "709.4"), t(pt, "fill", "url(#aC)"), t(pt, "stroke", "var(--btn-border-stroke)"), t(pt, "stroke-linecap", "round"), t(pt, "stroke-linejoin", "round"), t(pt, "stroke-width", "2"), t(pt, "rx", "8"), t(pt, "ry", "8"), t(h0, "width", "107"), t(h0, "height", "27"), t(h0, "x", "515"), t(h0, "y", "713.4"), t(h0, "fill", "url(#aD)"), t(h0, "rx", "4"), t(h0, "ry", "4"), t(jn, "fill", "url(#aE)"), t(jn, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(jn, "transform", "translate(0 -411.6)"), t(dr, "transform", "translate(-425 -65)"), t(dr, "class", "cp-button"), t(dr, "data-cp", "KEYCODE_SHIFT"), t(ht, "width", "116"), t(ht, "height", "36"), t(ht, "x", "511"), t(ht, "y", "709.4"), t(ht, "fill", "url(#aF)"), t(ht, "stroke", "var(--btn-border-stroke)"), t(ht, "stroke-linecap", "round"), t(ht, "stroke-linejoin", "round"), t(ht, "stroke-width", "2"), t(ht, "rx", "8"), t(ht, "ry", "8"), t(u0, "width", "107"), t(u0, "height", "27"), t(u0, "x", "515"), t(u0, "y", "713.4"), t(u0, "fill", "url(#aG)"), t(u0, "rx", "4"), t(u0, "ry", "4"), t(Hn, "fill", "url(#aH)"), t(Hn, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Hn, "transform", "translate(0 -411.6)"), t(fr, "transform", "translate(-65 -113)"), t(fr, "class", "cp-button"), t(fr, "data-cp", "KEYCODE_BACKSPACE"), t(ut, "width", "116"), t(ut, "height", "36"), t(ut, "x", "511"), t(ut, "y", "709.4"), t(ut, "fill", "url(#aI)"), t(ut, "stroke", "var(--btn-border-stroke)"), t(ut, "stroke-linecap", "round"), t(ut, "stroke-linejoin", "round"), t(ut, "stroke-width", "2"), t(ut, "rx", "8"), t(ut, "ry", "8"), t(g0, "width", "107"), t(g0, "height", "27"), t(g0, "x", "515"), t(g0, "y", "713.4"), t(g0, "fill", "url(#aJ)"), t(g0, "rx", "4"), t(g0, "ry", "4"), t(Dn, "fill", "url(#aK)"), t(Dn, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(Dn, "transform", "translate(0 -411.6)"), t(pr, "transform", "translate(-65 -65)"), t(pr, "class", "cp-button"), t(pr, "data-cp", "KEYCODE_CLEAR"), t(G2, "fill", "url(#aL)"), t(G2, "d", "M560 589.4s10 4.4 10 10v77a10 10 0 0 1-10 10H365.7v12H560c13.2 0 22-9.3 22-28v-70c0-12.2-22-22-22-22z"), t(U2, "fill", "url(#aM)"), t(U2, "d", "M66 618.4v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(z2, "fill", "url(#aN)"), t(z2, "d", "M570 614.4v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62z"), t(v0, "width", "204"), t(v0, "height", "116"), t(v0, "x", "221"), t(v0, "y", "580.4"), t(v0, "fill", "url(#aO)"), t(v0, "rx", "25"), t(v0, "ry", "58"), t(x0, "width", "200"), t(x0, "height", "112"), t(x0, "x", "223"), t(x0, "y", "582.4"), t(x0, "fill", "url(#aP)"), t(x0, "rx", "23"), t(x0, "ry", "55.9"), t(y0, "width", "185"), t(y0, "height", "98"), t(y0, "x", "231"), t(y0, "y", "589.4"), t(y0, "fill", "url(#aQ)"), t(y0, "rx", "16"), t(y0, "ry", "47.5"), t(m0, "class", "cp-button cp-button-arrow"), t(m0, "data-cp", "KEYCODE_UP"), t(m0, "fill", "#7f7f7f"), t(m0, "stroke", "url(#aR)"), t(m0, "stroke-linecap", "round"), t(m0, "stroke-linejoin", "round"), t(m0, "d", "M330.2 611.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(Dt, "width", "104"), t(Dt, "height", "12"), t(Dt, "x", "272"), t(Dt, "y", "632.4"), t(Dt, "fill", "url(#aS)"), t(Dt, "stroke", "url(#aT)"), t(Dt, "stroke-linecap", "round"), t(Dt, "stroke-linejoin", "round"), t(Dt, "rx", "2"), t(Dt, "ry", "2"), t(Wt, "class", "cp-button cp-button-arrow"), t(Wt, "data-cp", "KEYCODE_DOWN"), t(Wt, "fill", "#7f7f7f"), t(Wt, "stroke", "url(#aU)"), t(Wt, "stroke-linecap", "round"), t(Wt, "stroke-linejoin", "round"), t(Wt, "d", "M-317.8-665.2c-.4.8-5.3.8-6.2.8-.9 0-5.8 0-6.2-.8-.5-.7 2-5 2.4-5.8.4-.8 3-5 3.8-5 .9 0 3.4 4.2 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(Wt, "transform", "scale(-1)"), t(Xt, "class", "cp-button cp-button-arrow"), t(Xt, "data-cp", "KEYCODE_LEFT"), t(Xt, "fill", "#7f7f7f"), t(Xt, "stroke", "url(#aV)"), t(Xt, "stroke-linecap", "round"), t(Xt, "stroke-linejoin", "round"), t(Xt, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(Xt, "transform", "rotate(-90 255.8 641.5)"), t(Jt, "class", "cp-button cp-button-arrow"), t(Jt, "data-cp", "KEYCODE_RIGHT"), t(Jt, "fill", "#7f7f7f"), t(Jt, "stroke", "url(#aW)"), t(Jt, "stroke-linecap", "round"), t(Jt, "stroke-linejoin", "round"), t(Jt, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(Jt, "transform", "matrix(0 -1 -1 0 1033.7 897.4)"), t(Qn, "fill", "url(#aX)"), t(Qn, "d", "m245 1098.7-2.5 6.7c1.1.4 2.3.6 3.5.6h154c2 0 3.8-.6 5.6-1.7l-4-5.6c-.5.2-1 .3-1.6.3H247l-2-.3z"), t(Qn, "transform", "translate(0 -411.6)"), t(gt, "width", "102"), t(gt, "height", "44"), t(gt, "x", "511"), t(gt, "y", "709.4"), t(gt, "fill", "url(#aY)"), t(gt, "stroke", "var(--btn-border-stroke)"), t(gt, "stroke-linecap", "round"), t(gt, "stroke-linejoin", "round"), t(gt, "stroke-width", "2"), t(gt, "rx", "8"), t(gt, "ry", "8"), t(q0, "width", "94"), t(q0, "height", "35"), t(q0, "x", "515"), t(q0, "y", "713.4"), t(q0, "fill", "url(#aZ)"), t(q0, "rx", "4"), t(q0, "ry", "4"), t(Ar, "transform", "translate(-117 216)"), t(Ar, "class", "cp-button"), t(Ar, "data-cp", "KEYCODE_EXP"), t(vt, "width", "102"), t(vt, "height", "44"), t(vt, "x", "511"), t(vt, "y", "709.4"), t(vt, "fill", "url(#ba)"), t(vt, "stroke", "var(--btn-border-stroke)"), t(vt, "stroke-linecap", "round"), t(vt, "stroke-linejoin", "round"), t(vt, "stroke-width", "2"), t(vt, "rx", "8"), t(vt, "ry", "8"), t(b0, "width", "94"), t(b0, "height", "35"), t(b0, "x", "515"), t(b0, "y", "713.4"), t(b0, "fill", "url(#bb)"), t(b0, "rx", "4"), t(b0, "ry", "4"), t(Fr, "transform", "translate(-117 162)"), t(Fr, "class", "cp-button"), t(Fr, "data-cp", "KEYCODE_3"), t(xt, "width", "102"), t(xt, "height", "44"), t(xt, "x", "511"), t(xt, "y", "709.4"), t(xt, "fill", "url(#bc)"), t(xt, "stroke", "var(--btn-border-stroke)"), t(xt, "stroke-linecap", "round"), t(xt, "stroke-linejoin", "round"), t(xt, "stroke-width", "2"), t(xt, "rx", "8"), t(xt, "ry", "8"), t(w0, "width", "94"), t(w0, "height", "35"), t(w0, "x", "515"), t(w0, "y", "713.4"), t(w0, "fill", "url(#bd)"), t(w0, "rx", "4"), t(w0, "ry", "4"), t(Ir, "transform", "translate(-117 108)"), t(Ir, "class", "cp-button"), t(Ir, "data-cp", "KEYCODE_6"), t(yt, "width", "102"), t(yt, "height", "44"), t(yt, "x", "511"), t(yt, "y", "709.4"), t(yt, "fill", "url(#be)"), t(yt, "stroke", "var(--btn-border-stroke)"), t(yt, "stroke-linecap", "round"), t(yt, "stroke-linejoin", "round"), t(yt, "stroke-width", "2"), t(yt, "rx", "8"), t(yt, "ry", "8"), t(k0, "width", "94"), t(k0, "height", "35"), t(k0, "x", "515"), t(k0, "y", "713.4"), t(k0, "fill", "url(#bf)"), t(k0, "rx", "4"), t(k0, "ry", "4"), t(Tr, "transform", "translate(-117 54)"), t(Tr, "class", "cp-button"), t(Tr, "data-cp", "KEYCODE_9"), t(mt, "width", "102"), t(mt, "height", "44"), t(mt, "x", "511"), t(mt, "y", "709.4"), t(mt, "fill", "url(#bg)"), t(mt, "stroke", "var(--btn-border-stroke)"), t(mt, "stroke-linecap", "round"), t(mt, "stroke-linejoin", "round"), t(mt, "stroke-width", "2"), t(mt, "rx", "8"), t(mt, "ry", "8"), t(G0, "width", "94"), t(G0, "height", "35"), t(G0, "x", "515"), t(G0, "y", "713.4"), t(G0, "fill", "url(#bh)"), t(G0, "rx", "4"), t(G0, "ry", "4"), t(Nr, "transform", "translate(-238 216)"), t(Nr, "class", "cp-button"), t(Nr, "data-cp", "KEYCODE_DOT"), t(qt, "width", "102"), t(qt, "height", "44"), t(qt, "x", "511"), t(qt, "y", "709.4"), t(qt, "fill", "url(#bi)"), t(qt, "stroke", "var(--btn-border-stroke)"), t(qt, "stroke-linecap", "round"), t(qt, "stroke-linejoin", "round"), t(qt, "stroke-width", "2"), t(qt, "rx", "8"), t(qt, "ry", "8"), t(U0, "width", "94"), t(U0, "height", "35"), t(U0, "x", "515"), t(U0, "y", "713.4"), t(U0, "fill", "url(#bj)"), t(U0, "rx", "4"), t(U0, "ry", "4"), t(Zr, "transform", "translate(-238 162)"), t(Zr, "class", "cp-button"), t(Zr, "data-cp", "KEYCODE_2"), t(bt, "width", "102"), t(bt, "height", "44"), t(bt, "x", "511"), t(bt, "y", "709.4"), t(bt, "fill", "url(#bk)"), t(bt, "stroke", "var(--btn-border-stroke)"), t(bt, "stroke-linecap", "round"), t(bt, "stroke-linejoin", "round"), t(bt, "stroke-width", "2"), t(bt, "rx", "8"), t(bt, "ry", "8"), t(z0, "width", "94"), t(z0, "height", "35"), t(z0, "x", "515"), t(z0, "y", "713.4"), t(z0, "fill", "url(#bl)"), t(z0, "rx", "4"), t(z0, "ry", "4"), t(Wr, "transform", "translate(-238 108)"), t(Wr, "class", "cp-button"), t(Wr, "data-cp", "KEYCODE_5"), t(wt, "width", "102"), t(wt, "height", "44"), t(wt, "x", "511"), t(wt, "y", "709.4"), t(wt, "fill", "url(#bm)"), t(wt, "stroke", "var(--btn-border-stroke)"), t(wt, "stroke-linecap", "round"), t(wt, "stroke-linejoin", "round"), t(wt, "stroke-width", "2"), t(wt, "rx", "8"), t(wt, "ry", "8"), t(_0, "width", "94"), t(_0, "height", "35"), t(_0, "x", "515"), t(_0, "y", "713.4"), t(_0, "fill", "url(#bn)"), t(_0, "rx", "4"), t(_0, "ry", "4"), t(Xr, "transform", "translate(-238 54)"), t(Xr, "class", "cp-button"), t(Xr, "data-cp", "KEYCODE_8"), t(te, "width", "76"), t(te, "height", "44"), t(te, "x", "511"), t(te, "y", "1085.4"), t(te, "fill", "#15d81e"), t(te, "fill-opacity", ".2"), t(te, "rx", "8"), t(te, "ry", "8"), t(kt, "width", "102"), t(kt, "height", "44"), t(kt, "x", "511"), t(kt, "y", "709.4"), t(kt, "fill", "url(#bo)"), t(kt, "stroke", "var(--btn-border-stroke)"), t(kt, "stroke-linecap", "round"), t(kt, "stroke-linejoin", "round"), t(kt, "stroke-width", "2"), t(kt, "rx", "8"), t(kt, "ry", "8"), t(S0, "width", "94"), t(S0, "height", "35"), t(S0, "x", "515"), t(S0, "y", "713.4"), t(S0, "fill", "url(#bp)"), t(S0, "rx", "4"), t(S0, "ry", "4"), t(Jr, "transform", "translate(-359 216)"), t(Jr, "class", "cp-button"), t(Jr, "data-cp", "KEYCODE_0"), t(Gt, "width", "102"), t(Gt, "height", "44"), t(Gt, "x", "511"), t(Gt, "y", "709.4"), t(Gt, "fill", "url(#bq)"), t(Gt, "stroke", "var(--btn-border-stroke)"), t(Gt, "stroke-linecap", "round"), t(Gt, "stroke-linejoin", "round"), t(Gt, "stroke-width", "2"), t(Gt, "rx", "8"), t(Gt, "ry", "8"), t(O0, "width", "94"), t(O0, "height", "35"), t(O0, "x", "515"), t(O0, "y", "713.4"), t(O0, "fill", "url(#br)"), t(O0, "rx", "4"), t(O0, "ry", "4"), t(tl, "transform", "translate(-359 162)"), t(tl, "class", "cp-button"), t(tl, "data-cp", "KEYCODE_1"), t(Ut, "width", "102"), t(Ut, "height", "44"), t(Ut, "x", "511"), t(Ut, "y", "709.4"), t(Ut, "fill", "url(#bs)"), t(Ut, "stroke", "var(--btn-border-stroke)"), t(Ut, "stroke-linecap", "round"), t(Ut, "stroke-linejoin", "round"), t(Ut, "stroke-width", "2"), t(Ut, "rx", "8"), t(Ut, "ry", "8"), t($0, "width", "94"), t($0, "height", "35"), t($0, "x", "515"), t($0, "y", "713.4"), t($0, "fill", "url(#bt)"), t($0, "rx", "4"), t($0, "ry", "4"), t(el, "transform", "translate(-359 108)"), t(el, "class", "cp-button"), t(el, "data-cp", "KEYCODE_4"), t(zt, "width", "102"), t(zt, "height", "44"), t(zt, "x", "511"), t(zt, "y", "709.4"), t(zt, "fill", "url(#bu)"), t(zt, "stroke", "var(--btn-border-stroke)"), t(zt, "stroke-linecap", "round"), t(zt, "stroke-linejoin", "round"), t(zt, "stroke-width", "2"), t(zt, "rx", "8"), t(zt, "ry", "8"), t(M0, "width", "94"), t(M0, "height", "35"), t(M0, "x", "515"), t(M0, "y", "713.4"), t(M0, "fill", "url(#bv)"), t(M0, "rx", "4"), t(M0, "ry", "4"), t(rl, "transform", "translate(-359 54)"), t(rl, "class", "cp-button"), t(rl, "data-cp", "KEYCODE_7"), t(hr, "fill", "#3d3d3d"), t(hr, "d", "M201.5 795.5h-2.4q-.7 0-.3-.6l7.5-18.7h-8.8q-.6 0-.6-.7v-1.9q0-.6.6-.6h11.8q.7 0 .7.6v2.2q0 .5-.4 1.5l-7.1 17.7q-.2.5-1 .5z"), t(hr, "font-family", "Rajdhani"), t(hr, "font-size", "35"), t(hr, "font-weight", "600"), t(hr, "letter-spacing", "0"), t(hl, "word-spacing", "0"), t(hl, "class", "cp-button-label"), g(hl, "line-height", "125%"), t(E0, "fill", "#fff"), t(E0, "d", "M199.3 723.3q-3.8 4-8 8l1.9 4.3 1.1 2.5q.4.8.8 1.2l.7.5 1.1.3-.2 1h-4.9l-2.7-8-1.2 1.2-1.5 1.6-1 1.3-.4.9-.1.8q0 .5.3.8.3.3 1 .4l-.3 1h-5.5l-.4-1q4.3-4.6 8.4-8.5l-1.8-4.3-1-2q-.3-.8-.6-1.1l-.8-.6-1.2-.3.2-1h5l2.5 7.4 1.8-1.8 1.2-1.5q.4-.5.5-1 .2-.4.2-.9 0-1-1.3-1.2l.2-1h5.6l.4 1z"), t(E0, "font-family", "Cambria"), t(E0, "font-size", "40"), t(E0, "font-style", "italic"), t(E0, "font-weight", "400"), t(E0, "letter-spacing", "0"), t(ul, "word-spacing", "0"), t(ul, "class", "cp-button-label"), g(ul, "line-height", "125%"), t(ur, "x", "1714.4"), t(ur, "y", "880.6"), t(ur, "font-family", "Lucida Calligraphy"), t(ur, "font-style", "italic"), t(ur, "font-weight", "400"), t(_t, "xml:space", "preserve"), t(_t, "x", "1714.4"), t(_t, "y", "880.6"), t(_t, "font-family", "Script MT Bold"), t(_t, "font-size", "40"), t(_t, "font-weight", "700"), t(_t, "letter-spacing", "0"), t(_t, "word-spacing", "0"), g(_t, "line-height", "125%"), t(gr, "fill", "#3d3d3d"), t(gr, "d", "M322.2 792.6h2.7q1.3 0 2-.6.6-.6.6-2v-1.8q0-2.6-2.6-2.6h-2.7q-2.5 0-2.5 2.6v1.9q0 1.3.6 1.9.6.6 1.9.6zm0-9.8h2.7q2.6 0 2.6-2.6v-1.7q0-1.3-.7-2-.6-.5-1.9-.5h-2.7q-1.3 0-2 .6-.5.6-.5 1.9v1.7q0 2.6 2.5 2.6zm3.2 12.7h-3.7q-2.6 0-4-1.3t-1.4-3.9v-1.9q0-3.2 2.4-4.2-2.4-1-2.4-4.2v-1.8q0-2.5 1.4-3.8 1.4-1.4 4-1.4h3.7q2.6 0 4 1.4 1.5 1.3 1.5 3.8v1.8q0 1.6-.7 2.7-.6 1.1-1.7 1.5 2.4 1 2.4 4.3v1.8q0 2.6-1.5 3.9-1.4 1.3-4 1.3z"), t(gr, "font-family", "Rajdhani"), t(gr, "font-size", "35"), t(gr, "font-weight", "600"), t(gr, "letter-spacing", "0"), t(gl, "word-spacing", "0"), t(gl, "class", "cp-button-label"), g(gl, "line-height", "125%"), t(vr, "fill", "#3d3d3d"), t(vr, "d", "M441.9 784.1h4.9v-5.5q0-2.6-2.6-2.6H442q-2.5 0-2.5 2.6v3q0 2.5 2.5 2.5zm2.8 11.4h-7q-.7 0-.7-.6v-1.8q0-.5.6-.5h6.6q2.6 0 2.6-2.6v-3h-5.4q-2.6 0-4-1.4-1.5-1.4-1.5-4v-3.3q0-2.5 1.4-4 1.5-1.4 4-1.4h3.4q2.6 0 4 1.5 1.5 1.4 1.5 4V790q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(vr, "font-family", "Rajdhani"), t(vr, "font-size", "35"), t(vr, "font-weight", "600"), t(vr, "letter-spacing", "0"), t(vl, "word-spacing", "0"), t(vl, "class", "cp-button-label"), g(vl, "line-height", "125%"), t(xr, "fill", "#3d3d3d"), t(xr, "d", "M204 842.2V830l-7 12.3h7zm2.6 7.3h-2q-.7 0-.7-.6v-3.6h-9.2q-1 0-1-1v-1.1q0-.8.3-1.4l7.8-13.9.5-.7q.3-.2.8-.2h3q1 0 1 1v14.2h2.6q.6 0 .6.6v1.8q0 .7-.6.7h-2.5v3.6q0 .6-.6.6z"), t(xr, "font-family", "Rajdhani"), t(xr, "font-size", "35"), t(xr, "font-weight", "600"), t(xr, "letter-spacing", "0"), t(xl, "word-spacing", "0"), t(xl, "class", "cp-button-label"), g(xl, "line-height", "125%"), t(yr, "fill", "#3d3d3d"), t(yr, "d", "M323.9 837.6h-2.2q-.6 0-1.1.3-.4.2-.6.5-.3.8-.9.8h-2.2q-.6 0-.6-.6v-11q0-.6.6-.6h11.9q.6 0 .6.6v2q0 .6-.6.6h-9v6.4q.5-1.7 2.9-1.7h2q2.6 0 3.9 1.3 1.3 1.3 1.3 3.8v4.1q0 2.6-1.4 4-1.5 1.4-4 1.4h-3q-2.6 0-4-1.4t-1.4-4v-1q0-.5.6-.5h2.2q.6 0 .6.6v.9q0 2.5 2.5 2.5h2q2.6 0 2.6-2.5v-3.6q0-1.5-.6-2.2-.6-.7-2.1-.7z"), t(yr, "font-family", "Rajdhani"), t(yr, "font-size", "35"), t(yr, "font-weight", "600"), t(yr, "letter-spacing", "0"), t(yl, "word-spacing", "0"), t(yl, "class", "cp-button-label"), g(yl, "line-height", "125%"), t(mr, "fill", "#3d3d3d"), t(mr, "d", "M442 846.6h2.5q2.5 0 2.5-2.6v-2.8q0-2.6-2.5-2.6h-5v5.4q0 2.6 2.6 2.6zm3 3h-3.4q-2.6 0-4-1.5-1.5-1.4-1.5-4v-11.7q0-2.5 1.5-4 1.4-1.4 4-1.4h7q.5 0 .5.6v1.8q0 .6-.6.6h-6.4q-2.5 0-2.5 2.6v3h5.3q2.6 0 4 1.4 1.5 1.4 1.5 4v3.1q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(mr, "font-family", "Rajdhani"), t(mr, "font-size", "35"), t(mr, "font-weight", "600"), t(mr, "letter-spacing", "0"), t(ml, "word-spacing", "0"), t(ml, "class", "cp-button-label"), g(ml, "line-height", "125%"), t(qr, "fill", "#3d3d3d"), t(qr, "d", "M197.2 886.5v-2q0-.6.5-.9l3.6-2.2q.7-.4 1.2-.4h2q.7 0 .7.6V903q0 .6-.6.6h-2.3q-.6 0-.6-.6v-18.2l-3.8 2.2q-.7.3-.7-.4z"), t(qr, "font-family", "Rajdhani"), t(qr, "font-size", "35"), t(qr, "font-weight", "600"), t(qr, "letter-spacing", "0"), t(ql, "word-spacing", "0"), t(ql, "class", "cp-button-label"), g(ql, "line-height", "125%"), t(br, "fill", "#3d3d3d"), t(br, "d", "M316 903v-3.3q0-2.2 2-3.6l6.5-5.4q1.7-1.3 1.7-3.1v-1.2q0-2.5-2.6-2.5h-1.7q-1.4 0-2 .6-.6.6-.6 2v1.2q0 .7-.6.7h-2.2q-.6 0-.6-.7v-1.3q0-2.6 1.4-4 1.5-1.4 4-1.4h2.8q2.6 0 4 1.4t1.4 4v1.4q0 2.7-2.1 4.5l-6.7 5.5q-.8.7-.8 1.6v1h9q.7 0 .7.7v1.8q0 .6-.6.6h-12.3q-.6 0-.6-.6z"), t(br, "font-family", "Rajdhani"), t(br, "font-size", "35"), t(br, "font-weight", "600"), t(br, "letter-spacing", "0"), t(bl, "word-spacing", "0"), t(bl, "class", "cp-button-label"), g(bl, "line-height", "125%"), t(wr, "fill", "#3d3d3d"), t(wr, "d", "M442 890.8h1.9q2.6 0 2.6-2.5v-1.9q0-2.5-2.6-2.5h-2q-1.4 0-2 .6-.6.6-.6 2v1q0 .6-.6.6h-2.2q-.6 0-.6-.6v-1.1q0-2.6 1.4-4t4-1.4h3q2.7 0 4.1 1.4 1.4 1.4 1.4 4v1.9q0 3-2.8 4 2.8.6 2.8 3.8v2q0 2.6-1.4 4t-4 1.4h-3q-2.7 0-4-1.4-1.5-1.4-1.5-4V897q0-.6.6-.6h2.2q.6 0 .6.6v1.2q0 1.3.6 2 .6.5 2 .5h2q2.6 0 2.6-2.5v-2q0-2.5-2.6-2.5h-2q-.5 0-.5-.6v-1.5q0-.7.6-.7z"), t(wr, "font-family", "Rajdhani"), t(wr, "font-size", "35"), t(wr, "font-weight", "600"), t(wr, "letter-spacing", "0"), t(wl, "word-spacing", "0"), t(wl, "class", "cp-button-label"), g(wl, "line-height", "125%"), t(kr, "fill", "#3d3d3d"), t(kr, "d", "M204.2 954.6h2.5q2.6 0 2.6-2.6v-11.4q0-2.6-2.6-2.6h-2.5q-2.5 0-2.5 2.6V952q0 2.6 2.5 2.6zm3 3h-3.5q-2.6 0-4-1.5-1.4-1.4-1.4-4v-11.7q0-2.5 1.4-4 1.4-1.4 4-1.4h3.5q2.6 0 4 1.5 1.4 1.4 1.4 4V952q0 2.6-1.4 4t-4 1.4z"), t(kr, "font-family", "Rajdhani"), t(kr, "font-size", "35"), t(kr, "font-weight", "600"), t(kr, "letter-spacing", "0"), t(kl, "word-spacing", "0"), t(kl, "class", "cp-button-label"), g(kl, "line-height", "125%"), t(C0, "fill", "#3d3d3d"), t(C0, "d", "M387 1061.8h-10q-.5 0-.5-.5V1042q0-.5.5-.5h10q.6 0 .6.5v1.6q0 .6-.5.6h-7.2q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.5.6h-6.1q-.4 0-.4.3v5.6q0 .3.4.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.3-.1q-.1-.2 0-.4l5.2-10-5-9.2v-.3q.1-.2.4-.2h2.2q.6 0 .9.5l3.6 7.3h.1l3.7-7.3q.2-.5.8-.5h2.3q.3 0 .3.2.2.2 0 .4l-5 9.1 5.2 10q.2.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7-4 7.7q-.2.5-.7.5zm17.8 0h-2q-.6 0-.6-.5V1042q0-.5.6-.5h7.5q2.3 0 3.6 1.3 1.2 1.2 1.2 3.6v3.2q0 2.3-1.2 3.6-1.3 1.3-3.6 1.3h-4.6q-.4 0-.4.3v6.4q0 .5-.5.5zm.8-9.9h4.2q2.3 0 2.3-2.3v-3q0-2.3-2.3-2.3h-4.2q-.3 0-.3.3v7q0 .3.3.3z"), t(C0, "font-family", "Rajdhani"), t(C0, "font-size", "31.5"), t(C0, "font-weight", "600"), t(C0, "letter-spacing", "0"), t(C0, "transform", "scale(1.1 .9)"), t(Gl, "word-spacing", "0"), t(Gl, "class", "cp-button-label"), g(Gl, "line-height", "125%"), t(Bn, "fill", "#3d3d3d"), t(Bn, "d", "M327 946.4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z"), t(Bn, "class", "cp-button-label"), t(Lt, "fill", "#fff"), t(Lt, "d", "m273.8 721.7-.3 1.7h.5c.4 0 .6.2.7.2l.3.4.2 1.5 1.4 10.6-1.4 1.8-1.1 1.2-.9.6-.5.3h-1l-.2-.5v-.5h-2l-.8 3.5.4.2 1 .2a5.6 5.6 0 0 0 2.5-.1c.5-.1 1-.4 1.5-.7a9 9 0 0 0 1.6-1.3 109.4 109.4 0 0 0 6.7-8.7l3-4.7 2-4.3v-.2l-.6-1.2h-4.5l-.3 1.7h.6c.4 0 .6.2.7.2v.6c0 1.4-1.4 4.3-4 8l-1-10.5h-4.6z"), t(Lt, "font-family", "Script MT Bold"), t(Lt, "font-size", "29.8"), t(Lt, "font-weight", "700"), t(Lt, "letter-spacing", "0"), t(Lt, "word-spacing", "0"), t(Lt, "class", "cp-button-label"), g(Lt, "line-height", "125%"), t(j0, "fill", "#fff"), t(j0, "d", "m375.3 734.5-1.1 5.5H360l-.4-1 10.7-12.2 3.3-3.7v-.2H369q-1 0-1.5.2-.5.1-1 .5l-1 1q-.5.6-1.2 1.9h-1.7l1.1-5.1h14l.3 1-14 16h6.3q.6-.2 1.1-.6.5-.3 1-1t1.2-2.3h1.7z"), t(j0, "font-family", "Cambria"), t(j0, "font-size", "40"), t(j0, "font-style", "italic"), t(j0, "font-weight", "400"), t(j0, "letter-spacing", "0"), t(Ul, "word-spacing", "0"), t(Ul, "class", "cp-button-label"), g(Ul, "line-height", "125%"), t(Gr, "fill", "#fff"), t(Gr, "d", "m102 795-2.6 2.5-1-1-1.3-1.3-2.6-2.6q-.6-1-.6-2v-10.8q0-1 .6-2l2.3-2.5 1.1-1 1.5-1.4 2.6 2.5-1.3 1.2-2.2 2.1q-1 1-1 1.2v10.6q0 .3 1.9 2l2.7 2.5z"), t(Gr, "font-family", "Blender Pro"), t(Gr, "font-size", "35"), t(Gr, "font-weight", "700"), t(Gr, "letter-spacing", "0"), t(zl, "word-spacing", "0"), t(zl, "class", "cp-button-label"), g(zl, "line-height", "125%"), t(Ur, "fill", "#fff"), t(Ur, "d", "M102 844.6q0 1.1-.6 2-.6.8-2.6 2.6l-2.4 2.3-2.6-2.6q1-.7 2.7-2.3 1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2.1-2l-1.3-1.3 2.5-2.5 1 1 1.7 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(Ur, "font-family", "Blender Pro"), t(Ur, "font-size", "35"), t(Ur, "font-weight", "700"), t(Ur, "letter-spacing", "0"), t(_l, "word-spacing", "0"), t(_l, "class", "cp-button-label"), g(_l, "line-height", "125%"), t(zr, "fill", "#fff"), t(zr, "d", "M108 728.7H85.6V723H108v5.6zm0 9H85.6V732H108v5.6z"), t(zr, "font-family", "Blender Pro"), t(zr, "font-size", "60"), t(zr, "font-weight", "700"), t(zr, "letter-spacing", "0"), t(Sl, "word-spacing", "0"), t(Sl, "class", "cp-button-label"), g(Sl, "line-height", "125%"), t(H0, "fill", "#fff"), t(H0, "d", "M98 1300.2c-1 0-2 .2-2.6.8a4 4 0 0 0-.9 2.7c0 1 .2 1.9.8 2.5.4.4 1 .7 1.7.8-.3.7-.7 1.3-1.5 1.8l-.2.1v3.1l.6-.2a7.8 7.8 0 0 0 4.2-2.7 8 8 0 0 0 1.4-4.9c0-1.2-.3-2.3-.9-3-.6-.7-1.5-1-2.6-1z"), t(H0, "font-family", "Britannic Bold"), t(H0, "font-size", "35"), t(H0, "font-weight", "400"), t(H0, "letter-spacing", "0"), t(H0, "transform", "translate(0 -411.6)"), t(Ol, "word-spacing", "0"), t(Ol, "class", "cp-button-label"), g(Ol, "line-height", "125%"), t(D0, "fill", "#fff"), t(D0, "d", "m808.1 955-2.6 2.5-1.1-1-1.3-1.3q-2-1.9-2.5-2.6-.6-1-.6-2v-10.8q0-1 .6-2 .6-.9 2.3-2.5l1-1 1.6-1.4 2.6 2.5-1.4 1.2-2.1 2.1q-1 1-1 1.2v10.6q0 .3 1.8 2l2.7 2.5zm17.4-8h-13.6v-3.3h13.6v3.3zm10.6 3.6q0 1.1-.5 2-.6.8-2.5 2.6l-2.5 2.3-2.5-2.6 2.6-2.3q1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2-2l-1.4-1.3 2.5-2.5 1.1 1 1.6 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(D0, "font-family", "Blender Pro"), t(D0, "font-size", "35"), t(D0, "font-weight", "700"), t(D0, "letter-spacing", "0"), t(D0, "transform", "translate(-720)"), t($l, "word-spacing", "0"), t($l, "class", "cp-button-label"), g($l, "line-height", "125%"), t(Q0, "fill", "#fff"), t(Q0, "d", "M482.4 1061.8h-10q-.6 0-.6-.5V1042q0-.5.6-.5h10q.5 0 .5.5v1.6q0 .6-.5.6h-7.1q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.4.3h7.1q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.4-.1v-.4l5.3-10-5-9.2v-.3q0-.2.3-.2h2.3q.6 0 .9.5l3.6 7.3h.1l3.6-7.3q.3-.5.8-.5h2.4q.2 0 .3.2.1.2 0 .4l-5 9.1 5.2 10q.1.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7h-.1l-3.9 7.7q-.2.5-.7.5zm25.8 0h-10q-.6 0-.6-.5V1042q0-.5.5-.5h10.1q.5 0 .5.5v1.6q0 .6-.5.6H507q-.3 0-.3.3v5.3q0 .3.3.3h6.1q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.3.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5z"), t(Q0, "font-family", "Rajdhani"), t(Q0, "font-size", "31.5"), t(Q0, "font-weight", "600"), t(Q0, "letter-spacing", "0"), t(Q0, "transform", "scale(1.1 .9)"), t(Ml, "word-spacing", "0"), t(Ml, "class", "cp-button-label"), g(Ml, "line-height", "125%"), t(_r, "fill", "#fff"), t(_r, "d", "M552.6 889.9h8.5q1.2 0 1.2 1.2v2.5q0 1.2-1.2 1.2h-8.5v8.7q0 1.2-1.2 1.2h-2.7q-1.2 0-1.2-1.2v-8.7H539q-1.2 0-1.2-1.2v-2.5q0-1.2 1.2-1.2h8.6v-8.6q0-1.2 1.2-1.2h2.7q1.2 0 1.2 1.2v8.6z"), t(_r, "font-family", "Rajdhani"), t(_r, "font-size", "60"), t(_r, "font-weight", "600"), t(_r, "letter-spacing", "0"), t(El, "word-spacing", "0"), t(El, "class", "cp-button-label"), g(El, "line-height", "125%"), t(Sr, "fill", "#fff"), t(Sr, "d", "M559.3 840H539q-1 0-1-1v-1.3q0-1 1-1h20.3q1 0 1 1v1.3q0 1-1 1z"), t(Sr, "font-family", "Rajdhani"), t(Sr, "font-size", "60"), t(Sr, "font-weight", "600"), t(Sr, "letter-spacing", "0"), t(Cl, "word-spacing", "0"), t(Cl, "class", "cp-button-label"), g(Cl, "line-height", "125%"), t(Or, "fill", "#fff"), t(Or, "d", "m552.6 784 6.3 6.4q.8.7 0 1.6l-2 1.9q-.7.9-1.6 0l-6.3-6.3-6.3 6.4q-.9.8-1.6-.1l-2-2q-.8-.8 0-1.5l6.3-6.4-6.3-6.2q-.8-.9 0-1.7l2-2q.8-.8 1.6 0l6.3 6.3 6.3-6.2q.8-.9 1.6 0l2 2q.7.7 0 1.6l-6.3 6.2z"), t(Or, "font-family", "Rajdhani"), t(Or, "font-size", "60"), t(Or, "font-weight", "600"), t(Or, "letter-spacing", "0"), t(jl, "word-spacing", "0"), t(jl, "class", "cp-button-label"), g(jl, "line-height", "125%"), t($r, "fill", "#fff"), t($r, "d", "M547 740.3v-3.2q0-1 1-1 h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1zm11.1-7.9H540q-1.1 0-1.1-1v-2q0-1 1-1h18.2q1 0 1 1v2q0 1-1 1zm-11.1-8.8v-3.1q0-1.1 1-1.1h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1z"), t($r, "font-family", "Rajdhani"), t($r, "font-size", "60"), t($r, "font-weight", "600"), t($r, "letter-spacing", "0"), t(Hl, "word-spacing", "0"), t(Hl, "class", "cp-button-label"), g(Hl, "line-height", "125%"), t(Mr, "fill", "#fff"), t(Mr, "d", "M450.5 738.4H447q-1.3 0-.7-1.1l7.4-14.2q.5-1 .9-1.2.4-.3 1.3-.3h4.2q.9 0 1.3.3t.9 1.2l7.4 14.2q.6 1-.7 1h-3.4q-1 0-1.4-1l-6.2-12-6.2 12q-.6 1-1.4 1z"), t(Mr, "font-family", "Rajdhani"), t(Mr, "font-size", "60"), t(Mr, "font-weight", "600"), t(Mr, "letter-spacing", "0"), t(Dl, "word-spacing", "0"), t(Dl, "class", "cp-button-label"), g(Dl, "line-height", "125%"), t(Er, "fill", "#fff"), t(Er, "d", "M101.6 619.1h-1.5q-.4 0-.4-.3v-12.2q0-.4.4-.4h1.5q.4 0 .4.4v6.3h.1l.6-1 4.5-5.3q.3-.4.8-.4h1.7q.5 0 .2.4l-4.6 5.3 5.2 6.8q.2.4-.3.4h-1.3q-.7 0-1-.3l-4-5.5-1.9 1.9v3.6q0 .3-.4.3zm19.4 0h-5.2q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.7 0 2.7.8 1 .8 1 2.3v2.5q0 .4-.5.4h-6.3q-.2 0-.2.2v.9q0 1.4 1.7 1.4h4.7q.4 0 .4.4v1q0 .3-.4.3zm-6.3-5.6h4.2q.3 0 .3-.2v-1.2q0-.8-.4-1.1-.4-.4-1.3-.4h-1.3q-1 0-1.3.4-.4.3-.4 1v1.3q0 .2.2.2zm10.7 8.9h-1.2q-.4 0-.4-.4v-1q0-.4.4-.4h.5q1.5 0 2-.5.6-.4 1-1.5h-1q-.4 0-.5-.4l-3.1-9q-.1-.3.3-.3h1.6q.3 0 .4.3l2.6 7.9 2.7-7.9q0-.3.4-.3h1.5q.5 0 .4.3l-3.2 9.7q-.6 1.7-1.5 2.6-1 .9-2.9.9zm12.1-5h3q1.7 0 1.7-1.5v-4q0-1.4-1.7-1.4h-1.3q-2 0-2 1.7v5q0 .2.3.2zm-2.5 1.4v-13.4q0-.4.4-.4h1.5q.4 0 .4.4v4.5q.7-1 2.5-1h1q1.7 0 2.7.7 1 .8 1 2.3v4.1q0 1.5-1 2.3-1 .8-2.7.8h-5.4q-.4 0-.4-.3zm17.7.3h-2.1q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.8 0 2.8.8 1 .8 1 2.3v4q0 1.5-1 2.3-1 .8-2.7.8zm-1.8-1.7h1.5q1.7 0 1.7-1.5v-3.8q0-1.5-1.7-1.5h-1.5q-.9 0-1.3.4-.4.3-.4 1v4q0 .7.4 1 .4.4 1.3.4zm12.5 1.7h-1q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h5.2q.5 0 .5.3v9.6q0 .3-.5.3h-1.4q-.4 0-.4-.3v-.8h-.1q-.6 1.1-2.4 1.1zm2.5-3.4v-5l-.3-.1h-2.8q-1.7 0-1.7 1.5v3.8q0 1.5 1.7 1.5h1.1q2 0 2-1.7zm7.1 3.4h-1.5q-.4 0-.4-.3v-9.6q0-.3.4-.3h1.5q.4 0 .4.3v.8q.3-.5 1-.8.6-.3 1.5-.3h.8q.4 0 .4.3v1q0 .5-.4.4h-1.4q-2 0-2 1.8v6.4q0 .3-.3.3zm10.5 0h-1.2q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3.9-.8 2.6-.8h1.2q1.8 0 2.3 1h.1v-4.5q0-.4.4-.4h1.5q.4 0 .4.4v13.4q0 .3-.4.3h-1.5q-.4 0-.4-.3v-.8q-.6 1.1-2.4 1.1zm2.4-3.4v-3.4q0-1.7-2-1.7h-1.2q-1.6 0-1.6 1.5v3.8q0 1.5 1.6 1.5h1.3q2 0 2-1.7z"), t(Er, "font-family", "Rajdhani"), t(Er, "font-size", "25"), t(Er, "font-weight", "600"), t(Er, "letter-spacing", "0"), t(Ql, "word-spacing", "0"), t(Ql, "class", "cp-button-label"), g(Ql, "line-height", "125%"), t(B0, "fill", "#42caf7"), t(B0, "d", "M118.6 667.2v-.6q0-.4.4-.4h1.6q.4 0 .4.4v.4q0 1.1.5 1.6.4.4 1.5.4h1.7q1.1 0 1.6-.5t.5-1.6v-.5q0-.8-.7-1.3-.6-.5-1.5-.6l-2-.4-2-.6q-.8-.3-1.4-1.2-.6-.9-.6-2.3v-1q0-1.9 1-2.9t2.9-1h2.6q1.9 0 2.9 1t1 2.9v.5q0 .4-.4.4H127q-.4 0-.4-.4v-.3q0-1-.5-1.5-.4-.5-1.5-.5H123q-1 0-1.5.5t-.5 1.6v.8q0 1.1 1.6 1.5l1.6.3 1.8.4 1.6.7q.7.4 1.1 1.2.5.9.5 2v1q0 1.9-1 3-1.1 1-3 1h-2.7q-1.8 0-2.9-1-1-1.1-1-3zm15.7 3.9h-1.6q-.4 0-.4-.4V654q0-.4.4-.4h1.6q.4 0 .4.4v5.7h.1q.6-1.3 2.6-1.3h1q1.9 0 2.9 1t1 2.9v8.4q0 .4-.5.4h-1.6q-.4 0-.4-.4v-8.3q0-1.9-1.8-1.9h-1.2q-2 0-2 2.1v8.1q0 .4-.5.4zm11.1-14.8V654q0-.4.4-.4h1.6q.4 0 .4.4v2.3q0 .4-.4.4h-1.6q-.4 0-.4-.4zm0 14.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v12.3h-2q-.4 0-.4-.4zm9.6-12.3h2q.5 0 .5.4v1.3q0 .4-.5.4h-2q-.3 0-.3.3v10q0 .3-.5.3h-1.6q-.4 0-.4-.4v-10q0-.2-.3-.2h-1.3q-.4 0-.4-.4v-1.6l.4-.1h1.3q.3 0 .3-.3v-.7q0-1.8 1-2.8 1-1 2.7-1h1.1q.5 0 .5.4v1.3q0 .4-.5.4h-.7q-.9 0-1.3.4-.3.5-.3 1.4v.6q0 .3.2.3zm4.8 2.1h-1.5v-1.8q0-.4.3-.4h1.2q.3 0 .3-.3v-2q0-.4.4-.4h1.6q.4 0 .4.4v2.2q0 .3.3.3h2.3q.5 0 .5.4v1.3q0 .4-.5.4h-2.3q-.3 0-.3.3v6.4q0 1.8 2 1.8h.9q.4 0 .4.4v1.3q0 .4-.4.4H164q-1.8 0-2.9-1-1-1-1-2.8v-6.5q0-.3-.3-.3z"), t(B0, "font-family", "Rajdhani"), t(B0, "font-size", "25"), t(B0, "font-weight", "600"), t(B0, "letter-spacing", "0"), g(B0, "text-align", "center"), t(Cr, "text-anchor", "middle"), t(Cr, "word-spacing", "0"), t(Cr, "class", "cp-button-label"), g(Cr, "line-height", "125%"), g(Cr, "text-align", "center"), t(R0, "fill", "#fff"), t(R0, "d", "M503.8 671.1H501q-1.8 0-2.9-1-1-1-1-2.8v-8.4q0-1.8 1-2.8 1-1 3-1h2.8q1.8 0 2.9 1 1 1 1 2.8v1.2q0 .5-.5.5h-1.5q-.5 0-.5-.5v-1q0-1.9-1.8-1.9h-2.1q-1.8 0-1.8 1.8v8.2q0 1.8 1.8 1.8h2.1q1.8 0 1.8-1.8V666q0-.5.5-.5h1.5q.5 0 .5.5v1.2q0 1.8-1 2.8-1 1-2.9 1zm8.8 0h-1.5q-.5 0-.5-.4V654q0-.4.5-.4h1.5q.5 0 .5.4v16.7q0 .4-.5.4zm12.8 0H520q-1.9 0-3-1-1-1-1-2.8v-5q0-1.9 1-2.9 1.1-1 3-1h2q1.9 0 2.9 1t1 2.9v3.1q0 .5-.4.5h-6.7q-.3 0-.3.2v1.1q0 1.8 1.8 1.8h5q.5 0 .5.5v1.2q0 .4-.4.4zm-6.6-6.9h4.4q.3 0 .3-.3v-1.6q0-.9-.4-1.3-.5-.5-1.4-.5h-1.4q-1 0-1.4.5-.4.4-.4 1.3v1.6q0 .3.3.3zm14.4 6.9h-1q-1.8 0-2.8-1-1-1-1-2.8v-5q0-1.9 1-2.9t2.9-1h5.6q.4 0 .4.4v12q0 .3-.4.3h-1.6q-.4 0-.4-.4v-.9h-.1q-.6 1.3-2.6 1.3zm2.7-4.2v-6.1q0-.3-.3-.3h-3q-1.8 0-1.8 1.9v4.8q0 1.8 1.8 1.8h1.2q2 0 2-2.1zm7.5 4.2h-1.6q-.4 0-.4-.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v1h.1q.3-.7 1-1 .7-.4 1.6-.4h1q.3 0 .3.4v1.3q0 .5-.4.4H546q-2 0-2 2.3v8q0 .3-.5.3z"), t(R0, "font-family", "Rajdhani"), t(R0, "font-size", "25"), t(R0, "font-weight", "600"), t(R0, "letter-spacing", "0"), g(R0, "text-align", "center"), t(jr, "text-anchor", "middle"), t(jr, "word-spacing", "0"), t(jr, "class", "cp-button-label"), g(jr, "line-height", "125%"), g(jr, "text-align", "center"), t(j, "fill", "#42caf7"), t(j, "d", "M473.6 656.2a1.5 1.5 0 0 0-1 2.6 6.5 6.5 0 1 1-9.2 0 1.5 1.5 0 1 0-2.1-2.2 9.5 9.5 0 1 0 13.4 0 1.5 1.5 0 0 0-1-.4z"), t(j, "color", "#000"), t(j, "font-family", "sans-serif"), t(j, "font-weight", "400"), t(j, "overflow", "visible"), t(j, "class", "cp-button-label"), g(j, "line-height", "normal"), g(j, "text-indent", "0px"), g(j, "text-align", "start"), g(j, "text-decoration-line", "none"), g(j, "text-decoration-style", "solid"), g(j, "text-decoration-color", "rgb(0, 0, 0)"), g(j, "text-transform", "none"), g(j, "white-space", "normal"), g(j, "isolation", "auto"), g(j, "mix-blend-mode", "normal"), t(H, "fill", "#42caf7"), t(H, "d", "M468 652.4c-.8 0-1.5.6-1.5 1.5v10c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10c0-.9-.7-1.5-1.5-1.5z"), t(H, "color", "#000"), t(H, "font-family", "sans-serif"), t(H, "font-weight", "400"), t(H, "overflow", "visible"), t(H, "class", "cp-button-label"), g(H, "line-height", "normal"), g(H, "text-indent", "0px"), g(H, "text-align", "start"), g(H, "text-decoration-line", "none"), g(H, "text-decoration-style", "solid"), g(H, "text-decoration-color", "rgb(0, 0, 0)"), g(H, "text-transform", "none"), g(H, "white-space", "normal"), g(H, "isolation", "auto"), g(H, "mix-blend-mode", "normal"), t(Bl, "fill", "#fff"), t(Bl, "fill-rule", "evenodd"), t(Bl, "d", "m500 607.4-12 6.9 12.2 7v-4H520v-6h-20z"), t(Bl, "class", "cp-button-label"), t(Rn, "fill", "#222"), t(Rn, "fill-rule", "evenodd"), t(Rn, "d", "m1210-959.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(Kn, "fill", "#1c1c1c"), t(Kn, "fill-rule", "evenodd"), t(Kn, "d", "M1210-959.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(ee, "width", "20"), t(ee, "height", "18"), t(ee, "x", "1200"), t(ee, "y", "-941.6"), t(ee, "fill", "#7e7e7e"), t(ee, "fill-opacity", ".2"), t(ee, "rx", "0"), t(ee, "ry", "0"), t(Ln, "fill", "#272727"), t(Ln, "fill-rule", "evenodd"), t(Ln, "d", "m1275-897.6-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3z"), t(Yn, "fill", "#222"), t(Yn, "fill-rule", "evenodd"), t(Yn, "d", "m1275-909.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(Pn, "fill", "#1c1c1c"), t(Pn, "fill-rule", "evenodd"), t(Pn, "d", "M1275-909.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(re, "width", "20"), t(re, "height", "18"), t(re, "x", "1265"), t(re, "y", "-891.6"), t(re, "fill", "#7e7e7e"), t(re, "fill-opacity", ".2"), t(re, "rx", "0"), t(re, "ry", "0"), t(p, "transform", "translate(0 411.6)"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), t(n, "viewBox", "0 0 648 1464");
    },
    m($2, X2) {
      _($2, n, X2), e(n, l), e(l, a), e(a, o), e(a, s), e(a, u), e(a, d), e(l, f), e(f, h), e(f, w), e(f, q), e(f, y), e(f, b), e(l, G), e(G, k), e(G, L), e(G, E), e(G, C), e(l, B), e(B, v), e(B, le), e(B, I), e(B, St), e(B, ne), e(l, Yt), e(Yt, Y), e(Yt, Ot), e(Yt, Hr), e(Yt, Bt), e(l, Pt), e(Pt, Y0), e(Pt, R), e(l, T), e(T, Dr), e(T, Rt), e(T, ie), e(T, Qr), e(l, N), e(N, Br), e(N, Z), e(N, Kt), e(N, $t), e(l, ae), e(ae, Rr), e(ae, x), e(l, O), e(O, P0), e(O, V0), e(l, A0), e(A0, F0), e(A0, I0), e(l, Fl), e(Fl, In), e(Fl, Il), e(l, nl), e(nl, Tl), e(nl, Nl), e(nl, Zl), e(l, il), e(il, Wl), e(il, Xl), e(il, Jl), e(l, Kr), e(Kr, Tn), e(Kr, Nn), e(Kr, Zn), e(Kr, Wn), e(l, T0), e(T0, Xn), e(T0, Jn), e(T0, t2), e(T0, e2), e(T0, r2), e(l, tn), e(tn, l2), e(tn, en), e(l, Lr), e(Lr, n2), e(Lr, i2), e(Lr, a2), e(Lr, rn), e(l, al), e(al, o2), e(al, ln), e(al, nn), e(l, ol), e(ol, s2), e(ol, an), e(ol, on), e(l, sn), e(sn, c2), e(sn, cn), e(l, dn), e(dn, d2), e(dn, fn), e(l, sl), e(sl, f2), e(sl, pn), e(sl, p2), e(l, Vt), e(Vt, h2), e(Vt, u2), e(Vt, g2), e(Vt, v2), e(Vt, x2), e(Vt, y2), e(Vt, m2), e(l, oe), e(l, se), e(l, ce), e(l, de), e(l, fe), e(l, pe), e(l, he), e(l, ue), e(l, ge), e(l, ve), e(l, xe), e(l, ye), e(l, me), e(l, qe), e(l, be), e(l, we), e(l, ke), e(l, Ge), e(l, Ue), e(l, ze), e(l, _e), e(l, Se), e(l, Oe), e(l, $e), e(l, Me), e(l, Ee), e(l, Ce), e(l, je), e(l, He), e(l, De), e(l, Qe), e(l, Be), e(l, Re), e(l, Ke), e(l, Le), e(l, Ye), e(l, Pe), e(l, Ve), e(l, Ae), e(l, Fe), e(l, Ie), e(l, Te), e(l, Ne), e(l, Ze), e(l, We), e(l, Xe), e(l, Je), e(l, t1), e(l, e1), e(l, r1), e(l, l1), e(l, n1), e(l, i1), e(l, a1), e(l, o1), e(l, s1), e(l, c1), e(l, d1), e(l, f1), e(l, p1), e(l, h1), e(l, u1), e(l, g1), e(l, v1), e(l, At), e(l, Ft), e(l, It), e(l, x1), e(l, y1), e(l, m1), e(l, q1), e(l, b1), e(l, w1), e(l, k1), e(l, G1), e(l, U1), e(l, z1), e(l, _1), e(l, S1), e(l, O1), e(l, $1), e(l, M1), e(l, E1), e(l, C1), e(l, j1), e(l, H1), e(l, D1), e(l, Q1), e(l, B1), e(l, R1), e(l, K1), e(l, L1), e(l, Y1), e(l, P1), e(l, V1), e(l, A1), e(l, F1), e(l, I1), e(l, T1), e(l, N1), e(l, Z1), e(l, Mt), e(Mt, Yr), e(Mt, hn), e(Mt, un), e(l, W1), e(n, V), e(V, cl), e(V, gn), e(V, dl), e(V, Pr), e(V, Et), e(V, Ct), e(V, jt), e(V, Ht), e(V, Tt), e(V, Nt), e(V, Zt), e(V, N0), e(N0, W), e(N0, X1), e(N0, vn), e(V, q2), e(q2, b2), e(n, w2), e(w2, Z0), e(Z0, k2), e(n, p), e(p, xn), e(p, yn), e(p, mn), e(p, fl), e(p, pl), e(p, Vr), e(Vr, X), e(Vr, J1), e(Vr, qn), e(p, W0), e(W0, J), e(W0, t0), e(W0, bn), e(p, X0), e(X0, tt), e(X0, e0), e(X0, wn), e(p, J0), e(J0, et), e(J0, r0), e(J0, kn), e(p, tr), e(tr, rt), e(tr, l0), e(tr, Gn), e(p, er), e(er, lt), e(er, n0), e(er, Un), e(p, rr), e(rr, nt), e(rr, i0), e(rr, zn), e(p, lr), e(lr, it), e(lr, a0), e(lr, _n), e(p, nr), e(nr, at), e(nr, o0), e(nr, Sn), e(p, ir), e(ir, ot), e(ir, s0), e(ir, On), e(p, ar), e(ar, st), e(ar, c0), e(ar, $n), e(p, or), e(or, ct), e(or, d0), e(or, Mn), e(p, sr), e(sr, dt), e(sr, f0), e(sr, En), e(p, cr), e(cr, ft), e(cr, p0), e(cr, Cn), e(p, dr), e(dr, pt), e(dr, h0), e(dr, jn), e(p, fr), e(fr, ht), e(fr, u0), e(fr, Hn), e(p, pr), e(pr, ut), e(pr, g0), e(pr, Dn), e(p, G2), e(p, U2), e(p, z2), e(p, v0), e(p, x0), e(p, y0), e(p, m0), e(p, Dt), e(p, Wt), e(p, Xt), e(p, Jt), e(p, Qn), e(p, Ar), e(Ar, gt), e(Ar, q0), e(p, Fr), e(Fr, vt), e(Fr, b0), e(p, Ir), e(Ir, xt), e(Ir, w0), e(p, Tr), e(Tr, yt), e(Tr, k0), e(p, Nr), e(Nr, mt), e(Nr, G0), e(p, Zr), e(Zr, qt), e(Zr, U0), e(p, Wr), e(Wr, bt), e(Wr, z0), e(p, Xr), e(Xr, wt), e(Xr, _0), e(p, te), e(p, Jr), e(Jr, kt), e(Jr, S0), e(p, tl), e(tl, Gt), e(tl, O0), e(p, el), e(el, Ut), e(el, $0), e(p, rl), e(rl, zt), e(rl, M0), e(p, hl), e(hl, hr), e(p, ul), e(ul, E0), e(p, _t), e(_t, ur), e(ur, B2), e(_t, R2), e(p, gl), e(gl, gr), e(p, vl), e(vl, vr), e(p, xl), e(xl, xr), e(p, yl), e(yl, yr), e(p, ml), e(ml, mr), e(p, ql), e(ql, qr), e(p, bl), e(bl, br), e(p, wl), e(wl, wr), e(p, kl), e(kl, kr), e(p, Gl), e(Gl, C0), e(p, Bn), e(p, Lt), e(p, Ul), e(Ul, j0), e(p, zl), e(zl, Gr), e(p, _l), e(_l, Ur), e(p, Sl), e(Sl, zr), e(p, Ol), e(Ol, H0), e(p, $l), e($l, D0), e(p, Ml), e(Ml, Q0), e(p, El), e(El, _r), e(p, Cl), e(Cl, Sr), e(p, jl), e(jl, Or), e(p, Hl), e(Hl, $r), e(p, Dl), e(Dl, Mr), e(p, Ql), e(Ql, Er), e(p, Cr), e(Cr, B0), e(p, jr), e(jr, R0), e(p, j), e(p, H), e(p, Bl), e(p, Rn), e(p, Kn), e(p, ee), e(p, Ln), e(p, Yn), e(p, Pn), e(p, re);
    },
    p: m,
    i: m,
    o: m,
    d($2) {
      $2 && z(n);
    }
  };
}
class ca extends F {
  constructor(n) {
    super(), A(this, n, null, sa, P, {});
  }
}
const da = (i) => {
  console.log("emu:main recv:", i.detail.state);
}, fa = (i) => {
  console.error("cpu_crash recv:", i.detail), L0.set("crashed");
  let n = i.detail.name, l = (i.detail.address >>> 0).toString(16).padStart(8, "0"), a = (i.detail.pc >>> 0).toString(16).padStart(8, "0");
  O2.set({
    name: n,
    message: `@ 0x${l} 	
 PC:${a}
`
  });
}, pa = (i) => {
  console.error("cpu_dump recv:", i.detail), console.log(`cpu:dump: INSTR ${i.detail.instr.toString(16).padStart(4, "0")} 	 - PC: 0x${(i.detail.pc >>> 0).toString(16).padStart(8, "0")}`), console.log(i.detail.regs.map((n) => (n >>> 0).toString(16).toUpperCase()));
};
function ha() {
  document.addEventListener("emu:main", da), document.addEventListener("cpu:dump", pa), document.addEventListener("cpu:crash", fa);
}
function ua(i) {
  let n, l, a, o, s, u, d, f, h, w, q, y, b, G, k, L, E, C, B;
  return l = new Gi({}), h = new ca({}), q = new Ci({}), b = new _i({}), k = new ia({}), k.$on(
    "romChanged",
    /*doRomLoad*/
    i[6]
  ), k.$on(
    "doRun",
    /*doRun*/
    i[5]
  ), k.$on(
    "doDump",
    /*doDump*/
    i[3]
  ), k.$on(
    "doDebug",
    /*doDebug*/
    i[4]
  ), k.$on(
    "doFullscreen",
    /*doFullscreen*/
    i[0]
  ), k.$on(
    "doCopyScreen",
    /*doCopyScreen*/
    i[1]
  ), k.$on(
    "doSaveScreen",
    /*doSaveScreen*/
    i[2]
  ), C = new Hi({}), {
    c() {
      n = U("main"), K(l.$$.fragment), a = S(), o = U("div"), s = U("div"), s.innerHTML = `<img src="${wi}" alt="RuK Logo" class="svelte-1ww1402"/> <span class="svelte-1ww1402">RuK UI</span>`, u = S(), d = U("div"), f = U("div"), K(h.$$.fragment), w = S(), K(q.$$.fragment), y = S(), K(b.$$.fragment), G = S(), K(k.$$.fragment), L = S(), E = U("div"), K(C.$$.fragment), t(s, "class", "logo svelte-1ww1402"), t(f, "id", "classpad"), g(f, "--zoomFactor", "1.5"), t(f, "class", "svelte-1ww1402"), t(d, "class", "calc-container svelte-1ww1402"), g(E, "display", "none"), t(o, "class", "container svelte-1ww1402");
    },
    m(v, le) {
      _(v, n, le), D(l, n, null), e(n, a), e(n, o), e(o, s), e(o, u), e(o, d), e(d, f), D(h, f, null), e(d, w), D(q, d, null), e(d, y), D(b, d, null), e(o, G), D(k, o, null), e(o, L), e(o, E), D(C, E, null), B = !0;
    },
    p: m,
    i(v) {
      B || ($(l.$$.fragment, v), $(h.$$.fragment, v), $(q.$$.fragment, v), $(b.$$.fragment, v), $(k.$$.fragment, v), $(C.$$.fragment, v), B = !0);
    },
    o(v) {
      M(l.$$.fragment, v), M(h.$$.fragment, v), M(q.$$.fragment, v), M(b.$$.fragment, v), M(k.$$.fragment, v), M(C.$$.fragment, v), B = !1;
    },
    d(v) {
      v && z(n), Q(l), Q(h), Q(q), Q(b), Q(k), Q(C);
    }
  };
}
function ga(i, n, l) {
  let a;
  Yl(i, Si, (y) => l(8, a = y)), Q2(async () => {
    ha(), L0.subscribe((y) => {
      console.log(y);
    }), Ui();
  });
  const o = (y) => {
    window.Module.requestFullscreen(!0, !1);
  }, s = (y) => {
    const b = document.getElementById("canvas");
    b && b.toBlob(function(G) {
      const k = new ClipboardItem({ "image/png": G });
      navigator.clipboard.write([k]).then(() => {
        D2.set("Copied to clipboard !"), setTimeout(
          () => {
            D2.set(null);
          },
          4e3
        );
      }).catch(() => {
      });
    });
  }, u = (y) => {
    const b = document.getElementById("canvas");
    if (b) {
      const G = document.createElement("a");
      G.href = b.toDataURL("image/png"), G.download = "ClassPad_Screen.png", G.click();
    }
  }, d = (y) => {
  }, f = (y) => {
    W2.set(!0);
  }, h = async (y) => {
    let b = li(P2);
    if (b) {
      L0.set("running");
      try {
        window.Module.ccall("startInterpreter", null, ["string"], [b]);
      } catch (G) {
        O2.set(G), L0.set("crashed");
      }
    } else
      L0.set("crashed"), O2.set({
        name: "INVALID_FILE_NAME",
        message: "fileName is empty"
      });
  }, w = async (y) => {
    console.log(y.detail), L0.set("loading");
    var b = y.detail.target.files[0];
    b && oa(b, b.name).then(() => {
      console.log(b.name), P2.set(b.name), a ? h() : L0.set("loaded");
    }).catch((G) => {
      console.error("Error loading file:", G);
    });
  };
  let { ide: q = !0 } = n;
  return i.$$set = (y) => {
    "ide" in y && l(7, q = y.ide);
  }, [
    o,
    s,
    u,
    d,
    f,
    h,
    w,
    q
  ];
}
class va extends F {
  constructor(n) {
    super(), A(this, n, ga, ua, P, { ide: 7 });
  }
}
window.Module = window.Module || {};
new va({
  target: document.getElementById("app"),
  props: {
    ide: !1
  }
});
//# sourceMappingURL=ruk.js.map
