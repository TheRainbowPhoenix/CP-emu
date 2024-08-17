var Ln = Object.defineProperty;
var Pn = (a, n, l) => n in a ? Ln(a, n, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[n] = l;
var kn = (a, n, l) => Pn(a, typeof n != "symbol" ? n + "" : n, l);
(function() {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload"))
    return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    i(o);
  new MutationObserver((o) => {
    for (const d of o)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(o) {
    const d = {};
    return o.integrity && (d.integrity = o.integrity), o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? d.credentials = "include" : o.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d;
  }
  function i(o) {
    if (o.ep)
      return;
    o.ep = !0;
    const d = l(o);
    fetch(o.href, d);
  }
})();
function x() {
}
function jn(a) {
  return a();
}
function $n() {
  return /* @__PURE__ */ Object.create(null);
}
function zl(a) {
  a.forEach(jn);
}
function Cn(a) {
  return typeof a == "function";
}
function j(a, n) {
  return a != a ? n == n : a !== n || a && typeof a == "object" || typeof a == "function";
}
function An(a) {
  return Object.keys(a).length === 0;
}
function Hn(a, ...n) {
  if (a == null) {
    for (const i of n)
      i(void 0);
    return x;
  }
  const l = a.subscribe(...n);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function Tn(a) {
  let n;
  return Hn(a, (l) => n = l)(), n;
}
function Fn(a, n, l) {
  a.$$.on_destroy.push(Hn(n, l));
}
function e(a, n) {
  a.appendChild(n);
}
function z(a, n, l) {
  a.insertBefore(n, l || null);
}
function w(a) {
  a.parentNode && a.parentNode.removeChild(a);
}
function y(a) {
  return document.createElement(a);
}
function r(a) {
  return document.createElementNS("http://www.w3.org/2000/svg", a);
}
function Qn(a) {
  return document.createTextNode(a);
}
function U() {
  return Qn(" ");
}
function Un(a, n, l, i) {
  return a.addEventListener(n, l, i), () => a.removeEventListener(n, l, i);
}
function In(a) {
  return function(n) {
    return n.preventDefault(), a.call(this, n);
  };
}
function t(a, n, l) {
  l == null ? a.removeAttribute(n) : a.getAttribute(n) !== l && a.setAttribute(n, l);
}
function s(a, n, l) {
  a.setAttributeNS("http://www.w3.org/1999/xlink", n, l);
}
function Nn(a) {
  return Array.from(a.childNodes);
}
function p(a, n, l, i) {
  l == null ? a.style.removeProperty(n) : a.style.setProperty(n, l, "");
}
function Zn(a, n, { bubbles: l = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(a, { detail: n, bubbles: l, cancelable: i });
}
let Ul;
function Gl(a) {
  Ul = a;
}
function Dn() {
  if (!Ul) throw new Error("Function called outside component initialization");
  return Ul;
}
function Kn(a) {
  Dn().$$.on_mount.push(a);
}
function Wn() {
  const a = Dn();
  return (n, l, { cancelable: i = !1 } = {}) => {
    const o = a.$$.callbacks[n];
    if (o) {
      const d = Zn(
        /** @type {string} */
        n,
        l,
        { cancelable: i }
      );
      return o.slice().forEach((h) => {
        h.call(a, d);
      }), !d.defaultPrevented;
    }
    return !0;
  };
}
function Xn(a, n) {
  const l = a.$$.callbacks[n.type];
  l && l.slice().forEach((i) => i.call(this, n));
}
const w2 = [], bn = [];
let k2 = [];
const _n = [], Jn = /* @__PURE__ */ Promise.resolve();
let zn = !1;
function ta() {
  zn || (zn = !0, Jn.then(Yn));
}
function On(a) {
  k2.push(a);
}
const Gn = /* @__PURE__ */ new Set();
let m2 = 0;
function Yn() {
  if (m2 !== 0)
    return;
  const a = Ul;
  do {
    try {
      for (; m2 < w2.length; ) {
        const n = w2[m2];
        m2++, Gl(n), ea(n.$$);
      }
    } catch (n) {
      throw w2.length = 0, m2 = 0, n;
    }
    for (Gl(null), w2.length = 0, m2 = 0; bn.length; ) bn.pop()();
    for (let n = 0; n < k2.length; n += 1) {
      const l = k2[n];
      Gn.has(l) || (Gn.add(l), l());
    }
    k2.length = 0;
  } while (w2.length);
  for (; _n.length; )
    _n.pop()();
  zn = !1, Gn.clear(), Gl(a);
}
function ea(a) {
  if (a.fragment !== null) {
    a.update(), zl(a.before_update);
    const n = a.dirty;
    a.dirty = [-1], a.fragment && a.fragment.p(a.ctx, n), a.after_update.forEach(On);
  }
}
function ra(a) {
  const n = [], l = [];
  k2.forEach((i) => a.indexOf(i) === -1 ? n.push(i) : l.push(i)), l.forEach((i) => i()), k2 = n;
}
const mn = /* @__PURE__ */ new Set();
let la;
function D(a, n) {
  a && a.i && (mn.delete(a), a.i(n));
}
function mt(a, n, l, i) {
  if (a && a.o) {
    if (mn.has(a)) return;
    mn.add(a), la.c.push(() => {
      mn.delete(a);
    }), a.o(n);
  }
}
function bt(a) {
  a && a.c();
}
function K(a, n, l) {
  const { fragment: i, after_update: o } = a.$$;
  i && i.m(n, l), On(() => {
    const d = a.$$.on_mount.map(jn).filter(Cn);
    a.$$.on_destroy ? a.$$.on_destroy.push(...d) : zl(d), a.$$.on_mount = [];
  }), o.forEach(On);
}
function Y(a, n) {
  const l = a.$$;
  l.fragment !== null && (ra(l.after_update), zl(l.on_destroy), l.fragment && l.fragment.d(n), l.on_destroy = l.fragment = null, l.ctx = []);
}
function na(a, n) {
  a.$$.dirty[0] === -1 && (w2.push(a), ta(), a.$$.dirty.fill(0)), a.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function B(a, n, l, i, o, d, h = null, u = [-1]) {
  const g = Ul;
  Gl(a);
  const f = a.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: d,
    update: x,
    not_equal: o,
    bound: $n(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: $n(),
    dirty: u,
    skip_bound: !1,
    root: n.target || g.$$.root
  };
  h && h(f.root);
  let $ = !1;
  if (f.ctx = l ? l(a, n.props || {}, (v, V, ...b) => {
    const k = b.length ? b[0] : V;
    return f.ctx && o(f.ctx[v], f.ctx[v] = k) && (!f.skip_bound && f.bound[v] && f.bound[v](k), $ && na(a, v)), V;
  }) : [], f.update(), $ = !0, zl(f.before_update), f.fragment = i ? i(f.ctx) : !1, n.target) {
    if (n.hydrate) {
      const v = Nn(n.target);
      f.fragment && f.fragment.l(v), v.forEach(w);
    } else
      f.fragment && f.fragment.c();
    n.intro && D(a.$$.fragment), K(a, n.target, n.anchor), Yn();
  }
  Gl(g);
}
class R {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    kn(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    kn(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Y(this, 1), this.$destroy = x;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, l) {
    if (!Cn(l))
      return x;
    const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return i.push(l), () => {
      const o = i.indexOf(l);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(n) {
    this.$$set && !An(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const aa = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(aa);
const ia = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3clinearGradient%20id='g'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.1'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='h'%3e%3cstop%20offset='0'%20stop-color='%23eb5e06'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%3e%3cstop%20offset='0'%20stop-color='%23ffecc8'%20stop-opacity='.3'/%3e%3cstop%20offset='.3'%20stop-color='%23ffecc8'%20stop-opacity='.2'/%3e%3cstop%20offset='1'%20stop-color='%23ffecc8'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.3'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%3e%3cstop%20offset='0'%20stop-color='%23eb8403'/%3e%3cstop%20offset='1'%20stop-color='%23eb8403'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%3e%3cstop%20offset='0'%20stop-color='%23ffd100'/%3e%3cstop%20offset='.5'%20stop-color='%23ffb501'/%3e%3cstop%20offset='1'%20stop-color='%23fe9e01'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23a'%20id='i'%20x1='12'%20x2='18.8'%20y1='4'%20y2='15.8'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23b'%20id='j'%20x1='20.6'%20x2='14'%20y1='12.3'%20y2='16'%20gradientTransform='rotate(180%2012%20526.2)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23c'%20id='l'%20x1='7'%20x2='11.3'%20y1='1038'%20y2='1042.2'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23d'%20id='k'%20x1='18'%20x2='14.8'%20y1='1039.3'%20y2='1039.3'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='n'%20x1='6'%20x2='10.2'%20y1='1038'%20y2='1042.1'%20gradientTransform='rotate(180%2012%201040.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23f'%20id='m'%20x1='7.5'%20x2='18.2'%20y1='8.8'%20y2='11.7'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23g'%20id='o'%20x1='7.5'%20x2='21.2'%20y1='8.8'%20y2='12.5'%20gradientTransform='translate(0%201028.4)'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23h'%20id='p'%20x1='6.6'%20x2='15.9'%20y1='1038.8'%20y2='1044.5'%20gradientUnits='userSpaceOnUse'/%3e%3clinearGradient%20xlink:href='%23e'%20id='q'%20x1='31.4'%20x2='59.3'%20y1='1037.7'%20y2='1037.7'%20gradientUnits='userSpaceOnUse'/%3e%3c/defs%3e%3cpath%20fill='%23fe9e01'%20d='M2%2012c0-1.4%203.8-8%205-8.7a24%2024%200%200%201%2010%200c1.2.7%205%207.3%205%208.7%200%201.4-3.8%208-5%208.7a24%2024%200%200%201-10%200C5.8%2020%202%2013.4%202%2012z'/%3e%3cpath%20fill='none'%20d='M18%2012a15%2015%200%200%201-3%205.2c-.7.4-5.3.4-6%200A15%2015%200%200%201%206%2012a15%2015%200%200%201%203-5.2c.7-.4%205.3-.4%206%200%20.7.4%203%204.4%203%205.2z'/%3e%3cpath%20fill='url(%23i)'%20fill-rule='evenodd'%20d='M12%202.8a19.6%2019.6%200%200%200-3.7.3c1.7.1%204.3%201%205.5%202A30.3%2030.3%200%200%201%2018%2012c0%201-2.2%204.8-3%205.3l2%203.4a24%2024%200%200%200%205-8.6c0-1.4-3.8-8-5-8.7-.6-.3-2.8-.5-5-.5z'/%3e%3cpath%20fill='url(%23j)'%20fill-rule='evenodd'%20d='M12%201049.6a19.6%2019.6%200%200%200%203.7-.4c-1.7%200-4.3-1-5.5-2a30.3%2030.3%200%200%201-4.2-6.8c0-.9%202.2-4.7%203-5.2l-2-3.5a24%2024%200%200%200-5%208.7c0%201.4%203.8%208%205%208.6.6.4%202.8.6%205%20.6z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23k)'%20d='M18%201040.4a16%2016%200%200%201-3%205.2c-.7.4-5.3.4-6%200a16%2016%200%200%201-3-5.2c0-.9%202.3-4.8%203-5.2.7-.5%205.3-.5%206%200%20.7.4%203%204.3%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23l)'%20d='M9%201035.2c-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23m)'%20d='M9%206.8c-.8.5-3%204.4-3%205.2a30.3%2030.3%200%200%200%202.2%204.3c.7%201.1%201.4%202%202%202.5%201.2%201.1%203.8%202%205.5%202h1l.3-.1c1.2-.7%205-7.3%205-8.7l-4-.1v.1a15%2015%200%200%201-3%205.2%2015%2015%200%200%201-3-5.2%2015%2015%200%200%200-3-5.2z'/%3e%3cpath%20fill='url(%23n)'%20d='M15%201045.6c.7-.5%203-4.4%203-5.2%200-.9-2.3-4.8-3-5.2-.7.4-3%204.3-3%205.2a16%2016%200%200%200%203%205.2z'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20fill='url(%23o)'%20stroke='url(%23p)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-opacity='.3'%20stroke-width='.1'%20d='M18%201040.2h0v.2a16%2016%200%200%201-3%205.2%2016%2016%200%200%201-3-5.2c0-.9-2.3-4.8-3-5.2h0s0%200%200%200c-.8.5-3%204.3-3%205.2a30.3%2030.3%200%200%200%202.2%204.3s0%200%200%200%200%200%200%200c.7%201%201.4%202%202%202.5%201.2%201%203.8%202%205.5%202h1l.3-.2'%20transform='translate(0%20-1028.4)'/%3e%3cg%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20fill='%23252127'%20d='M38.5%201038.7q0%20.7-.4%201.3l-.5.7-.7.5-.6.4%202.7%205.4h-2.6l-2.4-5.3h-2.6v5.3H29v-13.4h6.3q1%200%201.6.5l.7.6.5.6q.4.6.4%201.4v2zm-2.3%200v-2.1q-.4-.7-.8-.8h-4v3.7h4l.4-.3.4-.5z'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3cpath%20fill='url(%23q)'%20fill-rule='evenodd'%20d='M31.4%201035.8v3.7h25.9l2-3.7h-28z'%20transform='translate(0%20-1028.4)'/%3e%3cg%20fill='%23252127'%20font-family='Blender%20Pro'%20font-size='22.5'%20font-weight='700'%20letter-spacing='0'%20style='line-height:125%25'%20word-spacing='0'%3e%3cpath%20d='M50.3%201047H48l-.1-.5q-1%20.6-1.4.6h-1.7q-1%200-1.7-.4-.6-.5-1-1.1-.4-.6-.4-1.4v-6.9H44v7l.8.7h1.7l.6-.3.7-.6v-6.8h2.3v7.7l.2%202z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3cpath%20d='M63.2%201047h-2.9l-4.7-5.6h-.2v5.6H53v-13.4h2.4v5.6h.2l2.4-2.8q1.5-2%202.3-2.8h2.9l-5.6%206.7%202.5%203%203.1%203.7z'%20style='-inkscape-font-specification:&quot;Blender%20Pro%20Bold&quot;'%20transform='translate(0%20-1028.4)'/%3e%3c/g%3e%3c/svg%3e";
function oa(a) {
  let n;
  return {
    c() {
      n = y("div"), n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" class="svelte-rvpkcl"><defs><filter id="blur"><feGaussianBlur stdDeviation="12"></feGaussianBlur></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad" class="svelte-rvpkcl"><stop stop-color="hsl(105, 69%, 40%)" stop-opacity="1" offset="0%" class="svelte-rvpkcl"></stop><stop stop-color="hsl(105, 69%, 60%)" stop-opacity="1" offset="100%" class="svelte-rvpkcl"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round" filter="url(#blur)"><path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="1.00"></path><path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.96"></path><path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.92"></path><path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.89"></path><path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.85"></path><path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.81"></path><path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.77"></path><path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.73"></path><path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.70"></path><path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.66"></path><path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.62"></path><path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.58"></path><path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.54"></path><path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.51"></path><path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.47"></path><path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.43"></path><path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.39"></path><path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.35"></path><path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.32"></path><path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.28"></path><path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.24"></path><path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.20"></path><path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.16"></path><path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.13"></path><path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.09"></path></g></svg>', t(n, "class", "bg-img svelte-rvpkcl");
    },
    m(l, i) {
      z(l, n, i);
    },
    p: x,
    i: x,
    o: x,
    d(l) {
      l && w(n);
    }
  };
}
class sa extends R {
  constructor(n) {
    super(), B(this, n, null, oa, j, {});
  }
}
function ca() {
  var a = document.createElement("script");
  a.setAttribute("async", ""), a.setAttribute("type", "text/javascript"), a.setAttribute("src", "calcemu.js"), document.body.appendChild(a);
}
function da(a) {
  let n;
  return {
    c() {
      n = y("div"), n.innerHTML = "", t(n, "id", "buttons");
    },
    m(l, i) {
      z(l, n, i);
    },
    p: x,
    i: x,
    o: x,
    d(l) {
      l && w(n);
    }
  };
}
class ha extends R {
  constructor(n) {
    super(), B(this, n, null, da, j, {});
  }
}
function fa(a) {
  let n, l, i;
  return {
    c() {
      n = y("canvas"), t(n, "class", "emscripten svelte-1yulcy9"), t(n, "id", "canvas"), t(n, "tabindex", "-1");
    },
    m(o, d) {
      z(o, n, d), a[2](n), l || (i = Un(n, "contextmenu", In(
        /*contextmenu_handler*/
        a[1]
      )), l = !0);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && w(n), a[2](null), l = !1, i();
    }
  };
}
function pa(a, n, l) {
  let i;
  Kn(() => {
    window.Module.canvas = i, i.addEventListener(
      "webglcontextlost",
      (h) => {
        alert("WebGL context lost. You will need to reload the page."), h.preventDefault();
      },
      !1
    );
  });
  function o(h) {
    Xn.call(this, a, h);
  }
  function d(h) {
    bn[h ? "unshift" : "push"](() => {
      i = h, l(0, i);
    });
  }
  return [i, o, d];
}
class ua extends R {
  constructor(n) {
    super(), B(this, n, pa, fa, j, {});
  }
}
function ga(a) {
  let n, l, i, o, d, h, u;
  return {
    c() {
      n = y("figure"), n.innerHTML = '<div class="spinner"></div><center style="margin-top:0.5em"><strong>emscripten</strong></center>', l = U(), i = y("div"), i.textContent = "Downloading...", o = U(), d = y("div"), d.innerHTML = '<progress value="0" max="100" id="progress" hidden=""></progress>', h = U(), u = y("textarea"), p(n, "overflow", "visible"), t(n, "id", "spinner"), t(i, "class", "emscripten"), t(i, "id", "status"), t(d, "class", "emscripten"), t(u, "class", "emscripten"), t(u, "id", "output"), t(u, "rows", "8");
    },
    m(g, f) {
      z(g, n, f), z(g, l, f), z(g, i, f), z(g, o, f), z(g, d, f), z(g, h, f), z(g, u, f);
    },
    p: x,
    i: x,
    o: x,
    d(g) {
      g && (w(n), w(l), w(i), w(o), w(d), w(h), w(u));
    }
  };
}
class xa extends R {
  constructor(n) {
    super(), B(this, n, null, ga, j, {});
  }
}
const b2 = [];
function Bn(a, n = x) {
  let l;
  const i = /* @__PURE__ */ new Set();
  function o(u) {
    if (j(a, u) && (a = u, l)) {
      const g = !b2.length;
      for (const f of i)
        f[1](), b2.push(f, a);
      if (g) {
        for (let f = 0; f < b2.length; f += 2)
          b2[f][0](b2[f + 1]);
        b2.length = 0;
      }
    }
  }
  function d(u) {
    o(u(a));
  }
  function h(u, g = x) {
    const f = [u, g];
    return i.add(f), i.size === 1 && (l = n(o, d) || x), u(a), () => {
      i.delete(f), i.size === 0 && l && (l(), l = null);
    };
  }
  return { set: o, update: d, subscribe: h };
}
const Rn = Bn("empty"), En = Bn(null);
function va(a) {
  let n, l, i;
  return {
    c() {
      n = r("svg"), l = r("path"), i = r("path"), t(l, "fill", "currentColor"), t(l, "fill-rule", "evenodd"), t(l, "d", "M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22"), t(l, "clip-rule", "evenodd"), t(l, "opacity", "0.5"), t(i, "fill", "currentColor"), t(i, "d", "M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, d) {
      z(o, n, d), e(n, l), e(n, i);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && w(n);
    }
  };
}
class ya extends R {
  constructor(n) {
    super(), B(this, n, null, va, j, {});
  }
}
function qa(a) {
  let n, l, i, o;
  return {
    c() {
      n = r("svg"), l = r("path"), i = r("path"), o = r("path"), t(l, "fill", "currentColor"), t(l, "d", "M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"), t(i, "fill", "currentColor"), t(i, "fill-rule", "evenodd"), t(i, "d", "M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"), t(i, "clip-rule", "evenodd"), t(o, "fill", "currentColor"), t(o, "d", "m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859"), t(o, "opacity", "0.4"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(d, h) {
      z(d, n, h), e(n, l), e(n, i), e(n, o);
    },
    p: x,
    i: x,
    o: x,
    d(d) {
      d && w(n);
    }
  };
}
class ma extends R {
  constructor(n) {
    super(), B(this, n, null, qa, j, {});
  }
}
function ba(a) {
  let n, l, i;
  return {
    c() {
      n = r("svg"), l = r("path"), i = r("path"), t(l, "fill", "currentColor"), t(l, "d", "M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"), t(l, "opacity", "0.5"), t(i, "fill", "currentColor"), t(i, "fill-rule", "evenodd"), t(i, "d", "M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06"), t(i, "clip-rule", "evenodd"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, d) {
      z(o, n, d), e(n, l), e(n, i);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && w(n);
    }
  };
}
class wa extends R {
  constructor(n) {
    super(), B(this, n, null, ba, j, {});
  }
}
function ka(a) {
  let n, l, i, o, d;
  return {
    c() {
      n = r("svg"), l = r("path"), i = r("path"), o = r("path"), d = r("path"), t(l, "fill", "currentColor"), t(l, "fill-rule", "evenodd"), t(l, "d", "M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938"), t(l, "clip-rule", "evenodd"), t(l, "opacity", "0.5"), t(i, "fill", "currentColor"), t(i, "d", "M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06q.333.684.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a4 4 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"), t(o, "fill", "currentColor"), t(o, "d", "M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z"), t(o, "opacity", "0.5"), t(d, "fill", "currentColor"), t(d, "fill-rule", "evenodd"), t(d, "d", "M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75"), t(d, "clip-rule", "evenodd"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(h, u) {
      z(h, n, u), e(n, l), e(n, i), e(n, o), e(n, d);
    },
    p: x,
    i: x,
    o: x,
    d(h) {
      h && w(n);
    }
  };
}
class Ga extends R {
  constructor(n) {
    super(), B(this, n, null, ka, j, {});
  }
}
function Ua(a) {
  let n, l, i, o, d, h;
  return {
    c() {
      n = r("svg"), l = r("g"), i = r("path"), o = r("path"), d = r("path"), h = r("path"), t(i, "d", "M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"), t(i, "opacity", "0.5"), t(o, "stroke-linecap", "round"), t(o, "stroke-linejoin", "round"), t(o, "d", "M12.429 10L11 12h2l-1.429 2"), t(d, "d", "M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"), t(h, "stroke-linecap", "round"), t(h, "d", "M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"), t(h, "opacity", "0.5"), t(l, "fill", "none"), t(l, "stroke", "currentColor"), t(l, "stroke-width", "1.5"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(u, g) {
      z(u, n, g), e(n, l), e(l, i), e(l, o), e(l, d), e(l, h);
    },
    p: x,
    i: x,
    o: x,
    d(u) {
      u && w(n);
    }
  };
}
class za extends R {
  constructor(n) {
    super(), B(this, n, null, Ua, j, {});
  }
}
function Oa(a) {
  let n, l, i;
  return {
    c() {
      n = r("svg"), l = r("path"), i = r("path"), t(l, "fill", "currentColor"), t(l, "d", "M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"), t(l, "opacity", "0.5"), t(i, "fill", "currentColor"), t(i, "fill-rule", "evenodd"), t(i, "d", "M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0"), t(i, "clip-rule", "evenodd"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, d) {
      z(o, n, d), e(n, l), e(n, i);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && w(n);
    }
  };
}
class Sa extends R {
  constructor(n) {
    super(), B(this, n, null, Oa, j, {});
  }
}
function Ma(a) {
  let n, l, i;
  return {
    c() {
      n = r("svg"), l = r("path"), i = r("path"), t(l, "fill", "currentColor"), t(l, "fill-rule", "evenodd"), t(l, "d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"), t(l, "clip-rule", "evenodd"), t(l, "opacity", "0.5"), t(i, "fill", "currentColor"), t(i, "d", "m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "width", "1em"), t(n, "height", "1em"), t(n, "viewBox", "0 0 24 24");
    },
    m(o, d) {
      z(o, n, d), e(n, l), e(n, i);
    },
    p: x,
    i: x,
    o: x,
    d(o) {
      o && w(n);
    }
  };
}
class $a extends R {
  constructor(n) {
    super(), B(this, n, null, Ma, j, {});
  }
}
function _a(a) {
  let n, l, i, o, d, h, u, g, f, $, v, V, b, k, E, C, wt, O, G, q, H, Et, vr, kt, Q, yr, jt, qr, Gt, Ut, Ht, Zt, Qt;
  return o = new ya({}), v = new ma({}), k = new wa({}), G = new Ga({}), Et = new za({}), Q = new $a({}), Ut = new Sa({}), {
    c() {
      n = y("div"), l = y("div"), i = y("button"), bt(o.$$.fragment), d = U(), h = y("input"), u = U(), g = y("div"), f = U(), $ = y("button"), bt(v.$$.fragment), V = U(), b = y("button"), bt(k.$$.fragment), E = U(), C = y("div"), wt = U(), O = y("button"), bt(G.$$.fragment), q = U(), H = y("button"), bt(Et.$$.fragment), vr = U(), kt = y("button"), bt(Q.$$.fragment), yr = U(), jt = y("div"), qr = U(), Gt = y("button"), bt(Ut.$$.fragment), t(h, "type", "file"), t(h, "id", "fileInput"), p(h, "display", "none"), t(i, "class", "toolbar-tool svelte-tciw3"), t(i, "type", "button"), t(i, "tabindex", "0"), t(i, "id", "btn_pickFile"), t(g, "class", "separator svelte-tciw3"), t(g, "role", "separator"), t(g, "data-orientation", "horizontal"), t(g, "aria-orientation", "horizontal"), t($, "class", "toolbar-tool svelte-tciw3"), t($, "type", "button"), t($, "tabindex", "0"), t($, "id", "btn_copyScreen"), t(b, "class", "toolbar-tool svelte-tciw3"), t(b, "type", "button"), t(b, "tabindex", "0"), t(b, "id", "btn_saveScreen"), t(C, "class", "separator svelte-tciw3"), t(C, "role", "separator"), t(C, "data-orientation", "horizontal"), t(C, "aria-orientation", "horizontal"), t(O, "class", "toolbar-tool svelte-tciw3"), t(O, "type", "button"), t(O, "tabindex", "0"), t(O, "id", "btn_debug"), t(H, "class", "toolbar-tool svelte-tciw3"), t(H, "type", "button"), t(H, "tabindex", "0"), t(H, "id", "btn_dump"), t(kt, "class", "toolbar-tool svelte-tciw3"), t(kt, "type", "button"), t(kt, "tabindex", "0"), t(kt, "id", "btn_run"), t(jt, "class", "separator svelte-tciw3"), t(jt, "role", "separator"), t(jt, "data-orientation", "horizontal"), t(jt, "aria-orientation", "horizontal"), t(Gt, "class", "toolbar-tool svelte-tciw3"), t(Gt, "type", "button"), t(Gt, "tabindex", "0"), t(Gt, "id", "btn_fullscreen"), t(l, "class", "toolbar svelte-tciw3"), t(n, "class", "tools-container svelte-tciw3");
    },
    m(m, Kr) {
      z(m, n, Kr), e(n, l), e(l, i), K(o, i, null), e(i, d), e(i, h), a[4](h), e(l, u), e(l, g), e(l, f), e(l, $), K(v, $, null), e(l, V), e(l, b), K(k, b, null), e(l, E), e(l, C), e(l, wt), e(l, O), K(G, O, null), e(l, q), e(l, H), K(Et, H, null), e(l, vr), e(l, kt), K(Q, kt, null), e(l, yr), e(l, jt), e(l, qr), e(l, Gt), K(Ut, Gt, null), Ht = !0, Zt || (Qt = [
        Un(
          h,
          "change",
          /*handleFile*/
          a[2]
        ),
        Un(
          i,
          "click",
          /*pickFile*/
          a[1]
        )
      ], Zt = !0);
    },
    p: x,
    i(m) {
      Ht || (D(o.$$.fragment, m), D(v.$$.fragment, m), D(k.$$.fragment, m), D(G.$$.fragment, m), D(Et.$$.fragment, m), D(Q.$$.fragment, m), D(Ut.$$.fragment, m), Ht = !0);
    },
    o(m) {
      mt(o.$$.fragment, m), mt(v.$$.fragment, m), mt(k.$$.fragment, m), mt(G.$$.fragment, m), mt(Et.$$.fragment, m), mt(Q.$$.fragment, m), mt(Ut.$$.fragment, m), Ht = !1;
    },
    d(m) {
      m && w(n), Y(o), a[4](null), Y(v), Y(k), Y(G), Y(Et), Y(Q), Y(Ut), Zt = !1, zl(Qt);
    }
  };
}
function Ea(a, n, l) {
  let i;
  Fn(a, Rn, (f) => l(3, i = f));
  const o = () => {
    d.click();
  };
  let d;
  const h = Wn(), u = (f) => {
    h("romChanged", f);
  };
  function g(f) {
    bn[f ? "unshift" : "push"](() => {
      d = f, l(0, d);
    });
  }
  return a.$$.update = () => {
    a.$$.dirty & /*$state*/
    8;
  }, [d, o, u, i, g];
}
class ja extends R {
  constructor(n) {
    super(), B(this, n, Ea, _a, j, {});
  }
}
function Ca(a, n, l) {
  var i = new FileReader();
  i.onload = function(o) {
    if (o.target && o.target.result) {
      var d = new Uint8Array(o.target.result);
      window.Module.FS.analyzePath(n).exists && window.Module.FS.unlink(n), window.Module.FS.createDataFile("/", n, d, !0, !0), console.log(`${n} loaded_filename into the Emscripten filesystem.`), l(null);
    } else
      l("target is empty");
  }, i.onerror = function(o) {
    l(o);
  }, i.readAsArrayBuffer(a);
}
function Ha(a, n) {
  return new Promise((l, i) => {
    Ca(a, n, (o) => {
      o ? i(o) : l(() => {
      });
    });
  });
}
function Qa(a) {
  let n, l, i, o, d, h, u, g, f, $, v, V, b, k, E, C, wt, O, G, q, H, Et, vr, kt, Q, yr, jt, qr, Gt, Ut, Ht, Zt, Qt, m, Kr, Ol, Sl, mr, Ml, $l, _l, El, G2, jl, Cl, U2, Hl, Ql, z2, Dl, Kl, O2, Yl, S2, Yr, M2, $2, _2, Br, E2, j2, C2, br, Bl, Rl, Vl, Ll, $0, Pl, Al, Tl, Fl, Il, H2, Nl, Q2, wr, Zl, Wl, Xl, D2, Rr, Jl, K2, Y2, Vr, tn, B2, R2, V2, en, L2, P2, rn, A2, Lr, ln, T2, nn, Dt, an, on, sn, cn, dn, hn, fn, Wt, Xt, Jt, te, ee, re, le, ne, ae, ie, oe, se, ce, de, he, fe, pe, ue, ge, xe, ve, ye, qe, me, be, we, ke, Ge, Ue, ze, Oe, Se, Me, $e, _e, Ee, je, Ce, He, Qe, De, Ke, Ye, Be, Re, Ve, Le, Pe, Ae, Te, Fe, Ie, Ne, Ze, We, Xe, Je, t1, e1, r1, l1, n1, a1, i1, Kt, Yt, Bt, o1, s1, c1, d1, h1, f1, p1, u1, g1, x1, v1, y1, q1, m1, b1, w1, k1, G1, U1, z1, O1, S1, M1, $1, _1, E1, j1, C1, H1, Q1, D1, K1, Y1, B1, zt, kr, F2, I2, R1, _, Pr, N2, Ar, Gr, Ot, St, Mt, $t, Rt, Vt, Lt, _0, L, V1, Z2, pn, un, gn, E0, xn, c, W2, X2, J2, Tr, Fr, Ur, P, L1, tl, j0, A, P1, el, C0, T, A1, rl, H0, F, T1, ll, Q0, I, F1, nl, D0, N, I1, al, K0, Z, N1, il, Y0, W, Z1, ol, B0, X, W1, sl, R0, J, X1, cl, V0, tt, J1, dl, L0, et, t0, hl, P0, rt, e0, fl, A0, lt, r0, pl, T0, nt, l0, ul, F0, at, n0, gl, I0, it, a0, xl, vn, yn, qn, i0, o0, s0, c0, _t, Pt, At, Tt, vl, zr, ot, d0, Or, st, h0, Sr, ct, f0, Mr, dt, p0, $r, ht, u0, _r, ft, g0, Er, pt, x0, jr, ut, v0, Ft, Cr, gt, y0, Hr, xt, q0, Qr, vt, m0, Dr, yt, b0, Ir, N0, Nr, w0, qt, Z0, Sn, Mn, Zr, W0, Wr, X0, Xr, J0, Jr, tr, t2, er, e2, rr, r2, lr, l2, nr, n2, ar, a2, k0, yl, Ct, i2, G0, o2, ir, s2, or, c2, sr, d2, U0, h2, z0, f2, O0, p2, cr, u2, dr, g2, hr, x2, fr, v2, pr, y2, ur, gr, S0, xr, M0, S, M, q2, ql, ml, It, bl, wl, kl, Nt;
  return {
    c() {
      n = r("svg"), l = r("defs"), i = r("linearGradient"), o = r("stop"), d = r("stop"), h = r("stop"), u = r("stop"), g = r("linearGradient"), f = r("stop"), $ = r("stop"), v = r("stop"), V = r("stop"), b = r("stop"), k = r("linearGradient"), E = r("stop"), C = r("stop"), wt = r("stop"), O = r("stop"), G = r("linearGradient"), q = r("stop"), H = r("stop"), Et = r("stop"), vr = r("stop"), kt = r("stop"), Q = r("linearGradient"), yr = r("stop"), jt = r("stop"), qr = r("stop"), Gt = r("stop"), Ut = r("linearGradient"), Ht = r("stop"), Zt = r("stop"), Qt = r("linearGradient"), m = r("stop"), Kr = r("stop"), Ol = r("stop"), Sl = r("stop"), mr = r("linearGradient"), Ml = r("stop"), $l = r("stop"), _l = r("stop"), El = r("stop"), G2 = r("linearGradient"), jl = r("stop"), Cl = r("stop"), U2 = r("linearGradient"), Hl = r("stop"), Ql = r("stop"), z2 = r("linearGradient"), Dl = r("stop"), Kl = r("stop"), O2 = r("linearGradient"), Yl = r("stop"), S2 = r("stop"), Yr = r("linearGradient"), M2 = r("stop"), $2 = r("stop"), _2 = r("stop"), Br = r("linearGradient"), E2 = r("stop"), j2 = r("stop"), C2 = r("stop"), br = r("linearGradient"), Bl = r("stop"), Rl = r("stop"), Vl = r("stop"), Ll = r("stop"), $0 = r("linearGradient"), Pl = r("stop"), Al = r("stop"), Tl = r("stop"), Fl = r("stop"), Il = r("stop"), H2 = r("linearGradient"), Nl = r("stop"), Q2 = r("stop"), wr = r("linearGradient"), Zl = r("stop"), Wl = r("stop"), Xl = r("stop"), D2 = r("stop"), Rr = r("linearGradient"), Jl = r("stop"), K2 = r("stop"), Y2 = r("stop"), Vr = r("linearGradient"), tn = r("stop"), B2 = r("stop"), R2 = r("stop"), V2 = r("linearGradient"), en = r("stop"), L2 = r("stop"), P2 = r("linearGradient"), rn = r("stop"), A2 = r("stop"), Lr = r("linearGradient"), ln = r("stop"), T2 = r("stop"), nn = r("stop"), Dt = r("linearGradient"), an = r("stop"), on = r("stop"), sn = r("stop"), cn = r("stop"), dn = r("stop"), hn = r("stop"), fn = r("stop"), Wt = r("linearGradient"), Xt = r("linearGradient"), Jt = r("linearGradient"), te = r("linearGradient"), ee = r("linearGradient"), re = r("linearGradient"), le = r("linearGradient"), ne = r("linearGradient"), ae = r("linearGradient"), ie = r("linearGradient"), oe = r("linearGradient"), se = r("linearGradient"), ce = r("linearGradient"), de = r("linearGradient"), he = r("linearGradient"), fe = r("linearGradient"), pe = r("linearGradient"), ue = r("linearGradient"), ge = r("linearGradient"), xe = r("linearGradient"), ve = r("linearGradient"), ye = r("linearGradient"), qe = r("linearGradient"), me = r("linearGradient"), be = r("linearGradient"), we = r("linearGradient"), ke = r("linearGradient"), Ge = r("linearGradient"), Ue = r("linearGradient"), ze = r("linearGradient"), Oe = r("linearGradient"), Se = r("linearGradient"), Me = r("linearGradient"), $e = r("linearGradient"), _e = r("linearGradient"), Ee = r("linearGradient"), je = r("linearGradient"), Ce = r("linearGradient"), He = r("linearGradient"), Qe = r("linearGradient"), De = r("linearGradient"), Ke = r("linearGradient"), Ye = r("linearGradient"), Be = r("linearGradient"), Re = r("linearGradient"), Ve = r("linearGradient"), Le = r("linearGradient"), Pe = r("linearGradient"), Ae = r("linearGradient"), Te = r("linearGradient"), Fe = r("linearGradient"), Ie = r("linearGradient"), Ne = r("linearGradient"), Ze = r("linearGradient"), We = r("linearGradient"), Xe = r("linearGradient"), Je = r("linearGradient"), t1 = r("linearGradient"), e1 = r("linearGradient"), r1 = r("linearGradient"), l1 = r("linearGradient"), n1 = r("linearGradient"), a1 = r("linearGradient"), i1 = r("linearGradient"), Kt = r("linearGradient"), Yt = r("linearGradient"), Bt = r("linearGradient"), o1 = r("linearGradient"), s1 = r("linearGradient"), c1 = r("linearGradient"), d1 = r("linearGradient"), h1 = r("linearGradient"), f1 = r("linearGradient"), p1 = r("linearGradient"), u1 = r("linearGradient"), g1 = r("linearGradient"), x1 = r("linearGradient"), v1 = r("linearGradient"), y1 = r("linearGradient"), q1 = r("linearGradient"), m1 = r("linearGradient"), b1 = r("linearGradient"), w1 = r("linearGradient"), k1 = r("linearGradient"), G1 = r("linearGradient"), U1 = r("linearGradient"), z1 = r("linearGradient"), O1 = r("linearGradient"), S1 = r("linearGradient"), M1 = r("linearGradient"), $1 = r("linearGradient"), _1 = r("linearGradient"), E1 = r("linearGradient"), j1 = r("linearGradient"), C1 = r("linearGradient"), H1 = r("linearGradient"), Q1 = r("linearGradient"), D1 = r("linearGradient"), K1 = r("linearGradient"), Y1 = r("linearGradient"), B1 = r("linearGradient"), zt = r("pattern"), kr = r("rect"), F2 = r("path"), I2 = r("path"), R1 = r("linearGradient"), _ = r("g"), Pr = r("path"), N2 = r("path"), Ar = r("path"), Gr = r("path"), Ot = r("rect"), St = r("rect"), Mt = r("rect"), $t = r("rect"), Rt = r("rect"), Vt = r("rect"), Lt = r("rect"), _0 = r("g"), L = r("rect"), V1 = r("rect"), Z2 = r("path"), pn = r("mask"), un = r("path"), gn = r("g"), E0 = r("foreignObject"), xn = y("div"), xn.innerHTML = '<canvas width="320" height="528" style="width: 320px; height: 528px"></canvas>', c = r("g"), W2 = r("path"), X2 = r("path"), J2 = r("path"), Tr = r("path"), Fr = r("path"), Ur = r("g"), P = r("rect"), L1 = r("rect"), tl = r("path"), j0 = r("g"), A = r("rect"), P1 = r("rect"), el = r("path"), C0 = r("g"), T = r("rect"), A1 = r("rect"), rl = r("path"), H0 = r("g"), F = r("rect"), T1 = r("rect"), ll = r("path"), Q0 = r("g"), I = r("rect"), F1 = r("rect"), nl = r("path"), D0 = r("g"), N = r("rect"), I1 = r("rect"), al = r("path"), K0 = r("g"), Z = r("rect"), N1 = r("rect"), il = r("path"), Y0 = r("g"), W = r("rect"), Z1 = r("rect"), ol = r("path"), B0 = r("g"), X = r("rect"), W1 = r("rect"), sl = r("path"), R0 = r("g"), J = r("rect"), X1 = r("rect"), cl = r("path"), V0 = r("g"), tt = r("rect"), J1 = r("rect"), dl = r("path"), L0 = r("g"), et = r("rect"), t0 = r("rect"), hl = r("path"), P0 = r("g"), rt = r("rect"), e0 = r("rect"), fl = r("path"), A0 = r("g"), lt = r("rect"), r0 = r("rect"), pl = r("path"), T0 = r("g"), nt = r("rect"), l0 = r("rect"), ul = r("path"), F0 = r("g"), at = r("rect"), n0 = r("rect"), gl = r("path"), I0 = r("g"), it = r("rect"), a0 = r("rect"), xl = r("path"), vn = r("path"), yn = r("path"), qn = r("path"), i0 = r("rect"), o0 = r("rect"), s0 = r("rect"), c0 = r("path"), _t = r("rect"), Pt = r("path"), At = r("path"), Tt = r("path"), vl = r("path"), zr = r("g"), ot = r("rect"), d0 = r("rect"), Or = r("g"), st = r("rect"), h0 = r("rect"), Sr = r("g"), ct = r("rect"), f0 = r("rect"), Mr = r("g"), dt = r("rect"), p0 = r("rect"), $r = r("g"), ht = r("rect"), u0 = r("rect"), _r = r("g"), ft = r("rect"), g0 = r("rect"), Er = r("g"), pt = r("rect"), x0 = r("rect"), jr = r("g"), ut = r("rect"), v0 = r("rect"), Ft = r("rect"), Cr = r("g"), gt = r("rect"), y0 = r("rect"), Hr = r("g"), xt = r("rect"), q0 = r("rect"), Qr = r("g"), vt = r("rect"), m0 = r("rect"), Dr = r("g"), yt = r("rect"), b0 = r("rect"), Ir = r("g"), N0 = r("path"), Nr = r("g"), w0 = r("path"), qt = r("text"), Z0 = r("tspan"), Sn = Qn("xyz"), Mn = U(), Zr = r("g"), W0 = r("path"), Wr = r("g"), X0 = r("path"), Xr = r("g"), J0 = r("path"), Jr = r("g"), tr = r("path"), t2 = r("g"), er = r("path"), e2 = r("g"), rr = r("path"), r2 = r("g"), lr = r("path"), l2 = r("g"), nr = r("path"), n2 = r("g"), ar = r("path"), a2 = r("g"), k0 = r("path"), yl = r("path"), Ct = r("path"), i2 = r("g"), G0 = r("path"), o2 = r("g"), ir = r("path"), s2 = r("g"), or = r("path"), c2 = r("g"), sr = r("path"), d2 = r("g"), U0 = r("path"), h2 = r("g"), z0 = r("path"), f2 = r("g"), O0 = r("path"), p2 = r("g"), cr = r("path"), u2 = r("g"), dr = r("path"), g2 = r("g"), hr = r("path"), x2 = r("g"), fr = r("path"), v2 = r("g"), pr = r("path"), y2 = r("g"), ur = r("path"), gr = r("g"), S0 = r("path"), xr = r("g"), M0 = r("path"), S = r("path"), M = r("path"), q2 = r("path"), ql = r("path"), ml = r("path"), It = r("rect"), bl = r("path"), wl = r("path"), kl = r("path"), Nt = r("rect"), t(o, "offset", "0"), t(o, "stop-color", "#3b3b3b"), t(d, "offset", ".1"), t(d, "stop-color", "#282828"), t(h, "offset", ".2"), t(h, "stop-color", "#282828"), t(u, "offset", "1"), t(u, "stop-color", "#272727"), t(i, "id", "x"), t(f, "offset", "0"), t(f, "stop-color", "#99b0df"), t($, "offset", ".1"), t($, "stop-color", "#7396de"), t(v, "offset", ".3"), t(v, "stop-color", "#4171d2"), t(V, "offset", ".9"), t(V, "stop-color", "#1f3d79"), t(b, "offset", "1"), t(b, "stop-color", "#173166"), t(g, "id", "l"), t(E, "offset", "0"), t(E, "stop-color", "#2b60cd"), t(C, "offset", ".5"), t(C, "stop-color", "#295fcc"), t(wt, "offset", ".8"), t(wt, "stop-color", "#3c73e3"), t(O, "offset", "1"), t(O, "stop-color", "#4279e8"), t(k, "id", "m"), t(q, "offset", "0"), t(q, "stop-color", "#ececec"), t(H, "offset", ".1"), t(H, "stop-color", "#ededed"), t(Et, "offset", ".3"), t(Et, "stop-color", "#ddd"), t(vr, "offset", ".9"), t(vr, "stop-color", "#b0b0b0"), t(kt, "offset", "1"), t(kt, "stop-color", "#9c9c9c"), t(G, "id", "v"), t(yr, "offset", "0"), t(yr, "stop-color", "#e7e7e7"), t(jt, "offset", ".5"), t(jt, "stop-color", "#f8f8f8"), t(qr, "offset", ".8"), t(qr, "stop-color", "#fff"), t(Gt, "offset", "1"), t(Gt, "stop-color", "#fbfbfb"), t(Q, "id", "w"), t(Ht, "offset", "0"), t(Ht, "stop-color", "#cdcdcd"), t(Ht, "stop-opacity", ".4"), t(Zt, "offset", "1"), t(Zt, "stop-color", "#cdcdcd"), t(Zt, "stop-opacity", "0"), t(Ut, "id", "u"), t(m, "offset", "0"), t(m, "stop-color", "#d1d1d1"), t(Kr, "offset", ".4"), t(Kr, "stop-color", "#c2c2c2"), t(Ol, "offset", ".7"), t(Ol, "stop-color", "#6b6b6b"), t(Sl, "offset", "1"), t(Sl, "stop-color", "#616161"), t(Qt, "id", "t"), t(Ml, "offset", "0"), t(Ml, "stop-color", "#a8a8a8"), t($l, "offset", ".3"), t($l, "stop-color", "#b2b2b2"), t(_l, "offset", ".8"), t(_l, "stop-color", "#dadada"), t(El, "offset", "1"), t(El, "stop-color", "#ccc"), t(mr, "id", "s"), t(jl, "offset", "0"), t(jl, "stop-color", "#252525"), t(Cl, "offset", "1"), t(Cl, "stop-color", "#363636"), t(G2, "id", "r"), t(Hl, "offset", "0"), t(Hl, "stop-color", "#f7f7f7"), t(Ql, "offset", "1"), t(Ql, "stop-color", "#535353"), t(U2, "id", "q"), t(Dl, "offset", "0"), t(Dl, "stop-color", "#909090"), t(Kl, "offset", "1"), t(Kl, "stop-color", "#2d2d2d"), t(z2, "id", "p"), t(Yl, "offset", "0"), t(Yl, "stop-color", "#313131"), t(S2, "offset", "1"), t(S2, "stop-color", "#3a3a3a"), t(S2, "stop-opacity", "0"), t(O2, "id", "o"), t(M2, "offset", "0"), t(M2, "stop-color", "#c6c6c6"), t(M2, "stop-opacity", ".4"), t($2, "offset", ".4"), t($2, "stop-color", "#a2a2a2"), t($2, "stop-opacity", ".1"), t(_2, "offset", "1"), t(_2, "stop-color", "#a2a2a2"), t(_2, "stop-opacity", "0"), t(Yr, "id", "n"), t(E2, "offset", "0"), t(E2, "stop-color", "#c6c6c6"), t(E2, "stop-opacity", ".4"), t(j2, "offset", ".7"), t(j2, "stop-color", "#a2a2a2"), t(j2, "stop-opacity", ".1"), t(C2, "offset", "1"), t(C2, "stop-color", "#a2a2a2"), t(C2, "stop-opacity", "0"), t(Br, "id", "k"), t(Bl, "offset", "0"), t(Bl, "stop-color", "#2e2e2e"), t(Rl, "offset", ".5"), t(Rl, "stop-color", "#2d2d2d"), t(Vl, "offset", ".8"), t(Vl, "stop-color", "#393939"), t(Ll, "offset", "1"), t(Ll, "stop-color", "#3d3d3d"), t(br, "id", "j"), t(Pl, "offset", "0"), t(Pl, "stop-color", "#464646"), t(Al, "offset", ".1"), t(Al, "stop-color", "#393939"), t(Tl, "offset", ".3"), t(Tl, "stop-color", "#2c2c2c"), t(Fl, "offset", ".9"), t(Fl, "stop-color", "#202020"), t(Il, "offset", "1"), t(Il, "stop-color", "#242424"), t($0, "id", "i"), t(Nl, "offset", "0"), t(Nl, "stop-color", "#1e7999"), t(Q2, "offset", "1"), t(Q2, "stop-color", "#1d7998"), t(Q2, "stop-opacity", "0"), t(H2, "id", "h"), t(Zl, "offset", "0"), t(Zl, "stop-color", "#3a3a3a"), t(Wl, "offset", ".3"), t(Wl, "stop-color", "#414141"), t(Xl, "offset", ".6"), t(Xl, "stop-color", "#464646"), t(D2, "offset", "1"), t(D2, "stop-color", "#4b4b4b"), t(D2, "stop-opacity", "0"), t(wr, "id", "g"), t(Jl, "offset", "0"), t(Jl, "stop-color", "#313131"), t(K2, "offset", ".4"), t(K2, "stop-color", "#3a3a3a"), t(K2, "stop-opacity", ".6"), t(Y2, "offset", "1"), t(Y2, "stop-color", "#3a3a3a"), t(Y2, "stop-opacity", "0"), t(Rr, "id", "f"), t(tn, "offset", "0"), t(tn, "stop-color", "#3a3a3a"), t(B2, "offset", ".4"), t(B2, "stop-color", "#3a3a3a"), t(B2, "stop-opacity", ".6"), t(R2, "offset", "1"), t(R2, "stop-color", "#3a3a3a"), t(R2, "stop-opacity", "0"), t(Vr, "id", "e"), t(en, "offset", "0"), t(en, "stop-color", "#4e4e4e"), t(L2, "offset", "1"), t(L2, "stop-color", "#4e4e4e"), t(L2, "stop-opacity", "0"), t(V2, "id", "d"), t(rn, "offset", "0"), t(rn, "stop-color", "#555"), t(A2, "offset", "1"), t(A2, "stop-color", "#424242"), t(A2, "stop-opacity", "0"), t(P2, "id", "c"), t(ln, "offset", "0"), t(ln, "stop-color", "#9c9c9c"), t(T2, "offset", ".8"), t(T2, "stop-color", "#b0b0b0"), t(T2, "stop-opacity", ".1"), t(nn, "offset", "1"), t(nn, "stop-color", "#f5f5f5"), t(Lr, "id", "b"), t(an, "offset", "0"), t(an, "stop-color", "#b6b6b6"), t(on, "offset", "0"), t(on, "stop-color", "#fefefe"), t(sn, "offset", ".1"), t(sn, "stop-color", "#e7e7e7"), t(cn, "offset", ".8"), t(cn, "stop-color", "#e8e8e8"), t(dn, "offset", ".9"), t(dn, "stop-color", "#e6e6e6"), t(hn, "offset", "1"), t(hn, "stop-color", "#e1e1e1"), t(fn, "offset", "1"), t(fn, "stop-color", "#b2b2b2"), t(Dt, "id", "a"), s(Wt, "xlink:href", "#a"), t(Wt, "id", "y"), t(Wt, "x1", "6.5"), t(Wt, "x2", "641.5"), t(Wt, "y1", "320.4"), t(Wt, "y2", "320.4"), t(Wt, "gradientUnits", "userSpaceOnUse"), s(Xt, "xlink:href", "#b"), t(Xt, "id", "z"), t(Xt, "x1", "9.3"), t(Xt, "x2", "634"), t(Xt, "y1", "-300.4"), t(Xt, "y2", "1004.4"), t(Xt, "gradientUnits", "userSpaceOnUse"), s(Jt, "xlink:href", "#c"), t(Jt, "id", "B"), t(Jt, "x1", "570"), t(Jt, "x2", "94.5"), t(Jt, "y1", "560.4"), t(Jt, "y2", "-263.2"), t(Jt, "gradientUnits", "userSpaceOnUse"), s(te, "xlink:href", "#d"), t(te, "id", "C"), t(te, "x1", "570"), t(te, "x2", "498.4"), t(te, "y1", "560.4"), t(te, "y2", "293"), t(te, "gradientUnits", "userSpaceOnUse"), s(ee, "xlink:href", "#e"), t(ee, "id", "J"), t(ee, "x1", "91.3"), t(ee, "x2", "71.6"), t(ee, "y1", "978.6"), t(ee, "y2", "958.9"), t(ee, "gradientUnits", "userSpaceOnUse"), s(re, "xlink:href", "#f"), t(re, "id", "I"), t(re, "x1", "504"), t(re, "x2", "504"), t(re, "y1", "978"), t(re, "y2", "215.2"), t(re, "gradientUnits", "userSpaceOnUse"), s(le, "xlink:href", "#g"), t(le, "id", "K"), t(le, "x1", "544"), t(le, "x2", "582"), t(le, "y1", "980"), t(le, "y2", "942"), t(le, "gradientUnits", "userSpaceOnUse"), s(ne, "xlink:href", "#h"), t(ne, "id", "L"), t(ne, "x1", "300"), t(ne, "x2", "300"), t(ne, "y1", "44"), t(ne, "y2", "1124"), t(ne, "gradientUnits", "userSpaceOnUse"), s(ae, "xlink:href", "#i"), t(ae, "id", "M"), t(ae, "x1", "514.8"), t(ae, "x2", "583.9"), t(ae, "y1", "711.8"), t(ae, "y2", "751.7"), t(ae, "gradientUnits", "userSpaceOnUse"), s(ie, "xlink:href", "#j"), t(ie, "id", "N"), t(ie, "x1", "549"), t(ie, "x2", "549"), t(ie, "y1", "713.4"), t(ie, "y2", "748.4"), t(ie, "gradientUnits", "userSpaceOnUse"), s(oe, "xlink:href", "#k"), t(oe, "id", "O"), t(oe, "x1", "515"), t(oe, "x2", "536.3"), t(oe, "y1", "1125"), t(oe, "y2", "1146.3"), t(oe, "gradientUnits", "userSpaceOnUse"), s(se, "xlink:href", "#k"), t(se, "id", "H"), t(se, "x1", "515"), t(se, "x2", "536.3"), t(se, "y1", "1125"), t(se, "y2", "1146.3"), t(se, "gradientUnits", "userSpaceOnUse"), s(ce, "xlink:href", "#i"), t(ce, "id", "F"), t(ce, "x1", "514.8"), t(ce, "x2", "583.9"), t(ce, "y1", "711.8"), t(ce, "y2", "751.7"), t(ce, "gradientUnits", "userSpaceOnUse"), s(de, "xlink:href", "#j"), t(de, "id", "G"), t(de, "x1", "549"), t(de, "x2", "549"), t(de, "y1", "713.4"), t(de, "y2", "748.4"), t(de, "gradientUnits", "userSpaceOnUse"), s(he, "xlink:href", "#k"), t(he, "id", "R"), t(he, "x1", "515"), t(he, "x2", "536.3"), t(he, "y1", "1125"), t(he, "y2", "1146.3"), t(he, "gradientUnits", "userSpaceOnUse"), s(fe, "xlink:href", "#i"), t(fe, "id", "P"), t(fe, "x1", "514.8"), t(fe, "x2", "583.9"), t(fe, "y1", "711.8"), t(fe, "y2", "751.7"), t(fe, "gradientUnits", "userSpaceOnUse"), s(pe, "xlink:href", "#j"), t(pe, "id", "Q"), t(pe, "x1", "549"), t(pe, "x2", "549"), t(pe, "y1", "713.4"), t(pe, "y2", "748.4"), t(pe, "gradientUnits", "userSpaceOnUse"), s(ue, "xlink:href", "#k"), t(ue, "id", "U"), t(ue, "x1", "515"), t(ue, "x2", "536.3"), t(ue, "y1", "1125"), t(ue, "y2", "1146.3"), t(ue, "gradientUnits", "userSpaceOnUse"), s(ge, "xlink:href", "#i"), t(ge, "id", "S"), t(ge, "x1", "514.8"), t(ge, "x2", "583.9"), t(ge, "y1", "711.8"), t(ge, "y2", "751.7"), t(ge, "gradientUnits", "userSpaceOnUse"), s(xe, "xlink:href", "#j"), t(xe, "id", "T"), t(xe, "x1", "549"), t(xe, "x2", "549"), t(xe, "y1", "713.4"), t(xe, "y2", "748.4"), t(xe, "gradientUnits", "userSpaceOnUse"), s(ve, "xlink:href", "#k"), t(ve, "id", "X"), t(ve, "x1", "515"), t(ve, "x2", "536.3"), t(ve, "y1", "1125"), t(ve, "y2", "1146.3"), t(ve, "gradientUnits", "userSpaceOnUse"), s(ye, "xlink:href", "#l"), t(ye, "id", "V"), t(ye, "x1", "514.8"), t(ye, "x2", "583.9"), t(ye, "y1", "711.8"), t(ye, "y2", "751.7"), t(ye, "gradientUnits", "userSpaceOnUse"), s(qe, "xlink:href", "#m"), t(qe, "id", "W"), t(qe, "x1", "549"), t(qe, "x2", "549"), t(qe, "y1", "713.4"), t(qe, "y2", "748.4"), t(qe, "gradientUnits", "userSpaceOnUse"), s(me, "xlink:href", "#k"), t(me, "id", "aa"), t(me, "x1", "515"), t(me, "x2", "536.3"), t(me, "y1", "1125"), t(me, "y2", "1146.3"), t(me, "gradientUnits", "userSpaceOnUse"), s(be, "xlink:href", "#i"), t(be, "id", "Y"), t(be, "x1", "514.8"), t(be, "x2", "583.9"), t(be, "y1", "711.8"), t(be, "y2", "751.7"), t(be, "gradientUnits", "userSpaceOnUse"), s(we, "xlink:href", "#j"), t(we, "id", "Z"), t(we, "x1", "549"), t(we, "x2", "549"), t(we, "y1", "713.4"), t(we, "y2", "748.4"), t(we, "gradientUnits", "userSpaceOnUse"), s(ke, "xlink:href", "#k"), t(ke, "id", "ad"), t(ke, "x1", "515"), t(ke, "x2", "536.3"), t(ke, "y1", "1125"), t(ke, "y2", "1146.3"), t(ke, "gradientUnits", "userSpaceOnUse"), s(Ge, "xlink:href", "#i"), t(Ge, "id", "ab"), t(Ge, "x1", "514.8"), t(Ge, "x2", "583.9"), t(Ge, "y1", "711.8"), t(Ge, "y2", "751.7"), t(Ge, "gradientUnits", "userSpaceOnUse"), s(Ue, "xlink:href", "#j"), t(Ue, "id", "ac"), t(Ue, "x1", "549"), t(Ue, "x2", "549"), t(Ue, "y1", "713.4"), t(Ue, "y2", "748.4"), t(Ue, "gradientUnits", "userSpaceOnUse"), s(ze, "xlink:href", "#k"), t(ze, "id", "ag"), t(ze, "x1", "515"), t(ze, "x2", "536.3"), t(ze, "y1", "1125"), t(ze, "y2", "1146.3"), t(ze, "gradientUnits", "userSpaceOnUse"), s(Oe, "xlink:href", "#i"), t(Oe, "id", "ae"), t(Oe, "x1", "514.8"), t(Oe, "x2", "583.9"), t(Oe, "y1", "711.8"), t(Oe, "y2", "751.7"), t(Oe, "gradientUnits", "userSpaceOnUse"), s(Se, "xlink:href", "#j"), t(Se, "id", "af"), t(Se, "x1", "549"), t(Se, "x2", "549"), t(Se, "y1", "713.4"), t(Se, "y2", "748.4"), t(Se, "gradientUnits", "userSpaceOnUse"), s(Me, "xlink:href", "#k"), t(Me, "id", "aj"), t(Me, "x1", "515"), t(Me, "x2", "536.3"), t(Me, "y1", "1125"), t(Me, "y2", "1146.3"), t(Me, "gradientUnits", "userSpaceOnUse"), s($e, "xlink:href", "#i"), t($e, "id", "ah"), t($e, "x1", "514.8"), t($e, "x2", "583.9"), t($e, "y1", "711.8"), t($e, "y2", "751.7"), t($e, "gradientUnits", "userSpaceOnUse"), s(_e, "xlink:href", "#j"), t(_e, "id", "ai"), t(_e, "x1", "549"), t(_e, "x2", "549"), t(_e, "y1", "713.4"), t(_e, "y2", "748.4"), t(_e, "gradientUnits", "userSpaceOnUse"), s(Ee, "xlink:href", "#k"), t(Ee, "id", "ay"), t(Ee, "x1", "515"), t(Ee, "x2", "536.3"), t(Ee, "y1", "1125"), t(Ee, "y2", "1146.3"), t(Ee, "gradientUnits", "userSpaceOnUse"), s(je, "xlink:href", "#i"), t(je, "id", "at"), t(je, "x1", "514.8"), t(je, "x2", "583.9"), t(je, "y1", "711.8"), t(je, "y2", "751.7"), t(je, "gradientUnits", "userSpaceOnUse"), s(Ce, "xlink:href", "#j"), t(Ce, "id", "au"), t(Ce, "x1", "549"), t(Ce, "x2", "549"), t(Ce, "y1", "713.4"), t(Ce, "y2", "748.4"), t(Ce, "gradientUnits", "userSpaceOnUse"), s(He, "xlink:href", "#k"), t(He, "id", "av"), t(He, "x1", "515"), t(He, "x2", "536.3"), t(He, "y1", "1125"), t(He, "y2", "1146.3"), t(He, "gradientUnits", "userSpaceOnUse"), s(Qe, "xlink:href", "#i"), t(Qe, "id", "aq"), t(Qe, "x1", "514.8"), t(Qe, "x2", "583.9"), t(Qe, "y1", "711.8"), t(Qe, "y2", "751.7"), t(Qe, "gradientUnits", "userSpaceOnUse"), s(De, "xlink:href", "#j"), t(De, "id", "ar"), t(De, "x1", "549"), t(De, "x2", "549"), t(De, "y1", "713.4"), t(De, "y2", "748.4"), t(De, "gradientUnits", "userSpaceOnUse"), s(Ke, "xlink:href", "#k"), t(Ke, "id", "as"), t(Ke, "x1", "515"), t(Ke, "x2", "536.3"), t(Ke, "y1", "1125"), t(Ke, "y2", "1146.3"), t(Ke, "gradientUnits", "userSpaceOnUse"), s(Ye, "xlink:href", "#k"), t(Ye, "id", "ap"), t(Ye, "x1", "515"), t(Ye, "x2", "536.3"), t(Ye, "y1", "1125"), t(Ye, "y2", "1146.3"), t(Ye, "gradientUnits", "userSpaceOnUse"), s(Be, "xlink:href", "#i"), t(Be, "id", "ak"), t(Be, "x1", "514.8"), t(Be, "x2", "583.9"), t(Be, "y1", "711.8"), t(Be, "y2", "751.7"), t(Be, "gradientUnits", "userSpaceOnUse"), s(Re, "xlink:href", "#j"), t(Re, "id", "al"), t(Re, "x1", "549"), t(Re, "x2", "549"), t(Re, "y1", "713.4"), t(Re, "y2", "748.4"), t(Re, "gradientUnits", "userSpaceOnUse"), s(Ve, "xlink:href", "#k"), t(Ve, "id", "am"), t(Ve, "x1", "515"), t(Ve, "x2", "536.3"), t(Ve, "y1", "1125"), t(Ve, "y2", "1146.3"), t(Ve, "gradientUnits", "userSpaceOnUse"), s(Le, "xlink:href", "#i"), t(Le, "id", "an"), t(Le, "x1", "514.8"), t(Le, "x2", "583.9"), t(Le, "y1", "711.8"), t(Le, "y2", "751.7"), t(Le, "gradientUnits", "userSpaceOnUse"), s(Pe, "xlink:href", "#j"), t(Pe, "id", "ao"), t(Pe, "x1", "549"), t(Pe, "x2", "549"), t(Pe, "y1", "713.4"), t(Pe, "y2", "748.4"), t(Pe, "gradientUnits", "userSpaceOnUse"), s(Ae, "xlink:href", "#i"), t(Ae, "id", "aw"), t(Ae, "x1", "514.8"), t(Ae, "x2", "583.9"), t(Ae, "y1", "711.8"), t(Ae, "y2", "751.7"), t(Ae, "gradientUnits", "userSpaceOnUse"), s(Te, "xlink:href", "#j"), t(Te, "id", "ax"), t(Te, "x1", "549"), t(Te, "x2", "549"), t(Te, "y1", "713.4"), t(Te, "y2", "748.4"), t(Te, "gradientUnits", "userSpaceOnUse"), s(Fe, "xlink:href", "#n"), t(Fe, "id", "aB"), t(Fe, "x1", "520"), t(Fe, "x2", "528.5"), t(Fe, "y1", "1122"), t(Fe, "y2", "1152"), t(Fe, "gradientUnits", "userSpaceOnUse"), s(Ie, "xlink:href", "#i"), t(Ie, "id", "az"), t(Ie, "x1", "514.8"), t(Ie, "x2", "624"), t(Ie, "y1", "711.8"), t(Ie, "y2", "743.4"), t(Ie, "gradientUnits", "userSpaceOnUse"), s(Ne, "xlink:href", "#j"), t(Ne, "id", "aA"), t(Ne, "x1", "549"), t(Ne, "x2", "549"), t(Ne, "y1", "713.4"), t(Ne, "y2", "748.4"), t(Ne, "gradientUnits", "userSpaceOnUse"), s(Ze, "xlink:href", "#i"), t(Ze, "id", "aC"), t(Ze, "x1", "514.8"), t(Ze, "x2", "624"), t(Ze, "y1", "711.8"), t(Ze, "y2", "743.4"), t(Ze, "gradientUnits", "userSpaceOnUse"), s(We, "xlink:href", "#n"), t(We, "id", "aE"), t(We, "x1", "520"), t(We, "x2", "528.5"), t(We, "y1", "1122"), t(We, "y2", "1152"), t(We, "gradientUnits", "userSpaceOnUse"), s(Xe, "xlink:href", "#j"), t(Xe, "id", "aD"), t(Xe, "x1", "549"), t(Xe, "x2", "549"), t(Xe, "y1", "713.4"), t(Xe, "y2", "748.4"), t(Xe, "gradientUnits", "userSpaceOnUse"), s(Je, "xlink:href", "#i"), t(Je, "id", "aI"), t(Je, "x1", "514.8"), t(Je, "x2", "624"), t(Je, "y1", "711.8"), t(Je, "y2", "743.4"), t(Je, "gradientUnits", "userSpaceOnUse"), s(t1, "xlink:href", "#n"), t(t1, "id", "aK"), t(t1, "x1", "520"), t(t1, "x2", "528.5"), t(t1, "y1", "1122"), t(t1, "y2", "1152"), t(t1, "gradientUnits", "userSpaceOnUse"), s(e1, "xlink:href", "#i"), t(e1, "id", "aF"), t(e1, "x1", "514.8"), t(e1, "x2", "624"), t(e1, "y1", "711.8"), t(e1, "y2", "743.4"), t(e1, "gradientUnits", "userSpaceOnUse"), s(r1, "xlink:href", "#j"), t(r1, "id", "aG"), t(r1, "x1", "549"), t(r1, "x2", "549"), t(r1, "y1", "713.4"), t(r1, "y2", "748.4"), t(r1, "gradientUnits", "userSpaceOnUse"), s(l1, "xlink:href", "#n"), t(l1, "id", "aH"), t(l1, "x1", "520"), t(l1, "x2", "528.5"), t(l1, "y1", "1122"), t(l1, "y2", "1152"), t(l1, "gradientUnits", "userSpaceOnUse"), s(n1, "xlink:href", "#j"), t(n1, "id", "aJ"), t(n1, "x1", "549"), t(n1, "x2", "549"), t(n1, "y1", "713.4"), t(n1, "y2", "748.4"), t(n1, "gradientUnits", "userSpaceOnUse"), s(a1, "xlink:href", "#c"), t(a1, "id", "D"), t(a1, "x1", "575.8"), t(a1, "x2", "543.8"), t(a1, "y1", "691.7"), t(a1, "y2", "572.4"), t(a1, "gradientUnits", "userSpaceOnUse"), s(i1, "xlink:href", "#d"), t(i1, "id", "E"), t(i1, "x1", "562"), t(i1, "x2", "537.9"), t(i1, "y1", "686.2"), t(i1, "y2", "596.4"), t(i1, "gradientUnits", "userSpaceOnUse"), s(Kt, "xlink:href", "#o"), t(Kt, "id", "aL"), t(Kt, "x1", "504"), t(Kt, "x2", "504"), t(Kt, "y1", "978"), t(Kt, "y2", "876.8"), t(Kt, "gradientTransform", "translate(0 -285.6)"), t(Kt, "gradientUnits", "userSpaceOnUse"), s(Yt, "xlink:href", "#e"), t(Yt, "id", "aM"), t(Yt, "x1", "91.3"), t(Yt, "x2", "71.6"), t(Yt, "y1", "978.6"), t(Yt, "y2", "958.9"), t(Yt, "gradientTransform", "translate(0 -285.6)"), t(Yt, "gradientUnits", "userSpaceOnUse"), s(Bt, "xlink:href", "#g"), t(Bt, "id", "aN"), t(Bt, "x1", "544"), t(Bt, "x2", "575.4"), t(Bt, "y1", "980"), t(Bt, "y2", "948.6"), t(Bt, "gradientTransform", "translate(0 -285.6)"), t(Bt, "gradientUnits", "userSpaceOnUse"), s(o1, "xlink:href", "#p"), t(o1, "id", "aO"), t(o1, "x1", "327.1"), t(o1, "x2", "327.1"), t(o1, "y1", "580.4"), t(o1, "y2", "694.4"), t(o1, "gradientUnits", "userSpaceOnUse"), s(s1, "xlink:href", "#q"), t(s1, "id", "aP"), t(s1, "x1", "330.1"), t(s1, "x2", "330.1"), t(s1, "y1", "582.4"), t(s1, "y2", "694.4"), t(s1, "gradientUnits", "userSpaceOnUse"), s(c1, "xlink:href", "#r"), t(c1, "id", "aQ"), t(c1, "x1", "264.5"), t(c1, "x2", "350.3"), t(c1, "y1", "600.6"), t(c1, "y2", "686.4"), t(c1, "gradientUnits", "userSpaceOnUse"), s(d1, "xlink:href", "#s"), t(d1, "id", "aS"), t(d1, "x1", "274"), t(d1, "x2", "367.4"), t(d1, "y1", "632.4"), t(d1, "y2", "644.4"), t(d1, "gradientUnits", "userSpaceOnUse"), s(h1, "xlink:href", "#t"), t(h1, "id", "aT"), t(h1, "x1", "311.9"), t(h1, "x2", "313.6"), t(h1, "y1", "632.4"), t(h1, "y2", "644.4"), t(h1, "gradientUnits", "userSpaceOnUse"), s(f1, "xlink:href", "#t"), t(f1, "id", "aV"), t(f1, "x1", "251"), t(f1, "x2", "262.3"), t(f1, "y1", "645.1"), t(f1, "y2", "638.6"), t(f1, "gradientUnits", "userSpaceOnUse"), s(p1, "xlink:href", "#t"), t(p1, "id", "aU"), t(p1, "x1", "-329.7"), t(p1, "x2", "-320.5"), t(p1, "y1", "-677.4"), t(p1, "y2", "-667.2"), t(p1, "gradientUnits", "userSpaceOnUse"), s(u1, "xlink:href", "#t"), t(u1, "id", "aW"), t(u1, "x1", "251.4"), t(u1, "x2", "261.3"), t(u1, "y1", "633.6"), t(u1, "y2", "639.3"), t(u1, "gradientUnits", "userSpaceOnUse"), s(g1, "xlink:href", "#t"), t(g1, "id", "aR"), t(g1, "x1", "325"), t(g1, "x2", "325"), t(g1, "y1", "612.4"), t(g1, "y2", "606.9"), t(g1, "gradientUnits", "userSpaceOnUse"), s(x1, "xlink:href", "#u"), t(x1, "id", "aX"), t(x1, "x1", "328.8"), t(x1, "x2", "328.8"), t(x1, "y1", "1099"), t(x1, "y2", "1108"), t(x1, "gradientUnits", "userSpaceOnUse"), s(v1, "xlink:href", "#v"), t(v1, "id", "aY"), t(v1, "x1", "559.3"), t(v1, "x2", "583.9"), t(v1, "y1", "709.1"), t(v1, "y2", "751.7"), t(v1, "gradientUnits", "userSpaceOnUse"), s(y1, "xlink:href", "#w"), t(y1, "id", "aZ"), t(y1, "x1", "549"), t(y1, "x2", "549"), t(y1, "y1", "713.4"), t(y1, "y2", "748.4"), t(y1, "gradientUnits", "userSpaceOnUse"), s(q1, "xlink:href", "#v"), t(q1, "id", "ba"), t(q1, "x1", "559.3"), t(q1, "x2", "583.9"), t(q1, "y1", "709.1"), t(q1, "y2", "751.7"), t(q1, "gradientUnits", "userSpaceOnUse"), s(m1, "xlink:href", "#w"), t(m1, "id", "bb"), t(m1, "x1", "549"), t(m1, "x2", "549"), t(m1, "y1", "713.4"), t(m1, "y2", "748.4"), t(m1, "gradientUnits", "userSpaceOnUse"), s(b1, "xlink:href", "#v"), t(b1, "id", "bc"), t(b1, "x1", "559.3"), t(b1, "x2", "583.9"), t(b1, "y1", "709.1"), t(b1, "y2", "751.7"), t(b1, "gradientUnits", "userSpaceOnUse"), s(w1, "xlink:href", "#w"), t(w1, "id", "bd"), t(w1, "x1", "549"), t(w1, "x2", "549"), t(w1, "y1", "713.4"), t(w1, "y2", "748.4"), t(w1, "gradientUnits", "userSpaceOnUse"), s(k1, "xlink:href", "#v"), t(k1, "id", "be"), t(k1, "x1", "559.3"), t(k1, "x2", "583.9"), t(k1, "y1", "709.1"), t(k1, "y2", "751.7"), t(k1, "gradientUnits", "userSpaceOnUse"), s(G1, "xlink:href", "#w"), t(G1, "id", "bf"), t(G1, "x1", "549"), t(G1, "x2", "549"), t(G1, "y1", "713.4"), t(G1, "y2", "748.4"), t(G1, "gradientUnits", "userSpaceOnUse"), s(U1, "xlink:href", "#v"), t(U1, "id", "bg"), t(U1, "x1", "559.3"), t(U1, "x2", "583.9"), t(U1, "y1", "709.1"), t(U1, "y2", "751.7"), t(U1, "gradientUnits", "userSpaceOnUse"), s(z1, "xlink:href", "#w"), t(z1, "id", "bh"), t(z1, "x1", "549"), t(z1, "x2", "549"), t(z1, "y1", "713.4"), t(z1, "y2", "748.4"), t(z1, "gradientUnits", "userSpaceOnUse"), s(O1, "xlink:href", "#v"), t(O1, "id", "bi"), t(O1, "x1", "559.3"), t(O1, "x2", "583.9"), t(O1, "y1", "709.1"), t(O1, "y2", "751.7"), t(O1, "gradientUnits", "userSpaceOnUse"), s(S1, "xlink:href", "#w"), t(S1, "id", "bj"), t(S1, "x1", "549"), t(S1, "x2", "549"), t(S1, "y1", "713.4"), t(S1, "y2", "748.4"), t(S1, "gradientUnits", "userSpaceOnUse"), s(M1, "xlink:href", "#v"), t(M1, "id", "bk"), t(M1, "x1", "559.3"), t(M1, "x2", "583.9"), t(M1, "y1", "709.1"), t(M1, "y2", "751.7"), t(M1, "gradientUnits", "userSpaceOnUse"), s($1, "xlink:href", "#w"), t($1, "id", "bl"), t($1, "x1", "549"), t($1, "x2", "549"), t($1, "y1", "713.4"), t($1, "y2", "748.4"), t($1, "gradientUnits", "userSpaceOnUse"), s(_1, "xlink:href", "#v"), t(_1, "id", "bm"), t(_1, "x1", "559.3"), t(_1, "x2", "583.9"), t(_1, "y1", "709.1"), t(_1, "y2", "751.7"), t(_1, "gradientUnits", "userSpaceOnUse"), s(E1, "xlink:href", "#w"), t(E1, "id", "bn"), t(E1, "x1", "549"), t(E1, "x2", "549"), t(E1, "y1", "713.4"), t(E1, "y2", "748.4"), t(E1, "gradientUnits", "userSpaceOnUse"), s(j1, "xlink:href", "#v"), t(j1, "id", "bo"), t(j1, "x1", "559.3"), t(j1, "x2", "583.9"), t(j1, "y1", "709.1"), t(j1, "y2", "751.7"), t(j1, "gradientUnits", "userSpaceOnUse"), s(C1, "xlink:href", "#w"), t(C1, "id", "bp"), t(C1, "x1", "549"), t(C1, "x2", "549"), t(C1, "y1", "713.4"), t(C1, "y2", "748.4"), t(C1, "gradientUnits", "userSpaceOnUse"), s(H1, "xlink:href", "#v"), t(H1, "id", "bq"), t(H1, "x1", "559.3"), t(H1, "x2", "583.9"), t(H1, "y1", "709.1"), t(H1, "y2", "751.7"), t(H1, "gradientUnits", "userSpaceOnUse"), s(Q1, "xlink:href", "#w"), t(Q1, "id", "br"), t(Q1, "x1", "549"), t(Q1, "x2", "549"), t(Q1, "y1", "713.4"), t(Q1, "y2", "748.4"), t(Q1, "gradientUnits", "userSpaceOnUse"), s(D1, "xlink:href", "#v"), t(D1, "id", "bs"), t(D1, "x1", "559.3"), t(D1, "x2", "583.9"), t(D1, "y1", "709.1"), t(D1, "y2", "751.7"), t(D1, "gradientUnits", "userSpaceOnUse"), s(K1, "xlink:href", "#w"), t(K1, "id", "bt"), t(K1, "x1", "549"), t(K1, "x2", "549"), t(K1, "y1", "713.4"), t(K1, "y2", "748.4"), t(K1, "gradientUnits", "userSpaceOnUse"), s(Y1, "xlink:href", "#v"), t(Y1, "id", "bu"), t(Y1, "x1", "559.3"), t(Y1, "x2", "583.9"), t(Y1, "y1", "709.1"), t(Y1, "y2", "751.7"), t(Y1, "gradientUnits", "userSpaceOnUse"), s(B1, "xlink:href", "#w"), t(B1, "id", "bv"), t(B1, "x1", "549"), t(B1, "x2", "549"), t(B1, "y1", "713.4"), t(B1, "y2", "748.4"), t(B1, "gradientUnits", "userSpaceOnUse"), t(kr, "y", "0"), t(kr, "x", "0"), t(kr, "height", "18"), t(kr, "width", "20"), t(kr, "fill", "#272727"), t(F2, "fill", "#222"), t(F2, "fill-rule", "evenodd"), t(F2, "d", "M9.99 0 5 3v6l-5 3v6l10-6V0h-.01zm10 0L15 3v6l5-3V0h-.01z"), t(I2, "fill", "#1c1c1c"), t(I2, "fill-rule", "evenodd"), t(I2, "d", "M0 0v6l5 3V3L.01 0H0zm10 0v12l10 6v-6l-5-3V3l-4.99-3H10z"), t(zt, "id", "pattern1"), t(zt, "x", "0"), t(zt, "y", "0"), t(zt, "width", "20"), t(zt, "height", "18"), t(zt, "patternUnits", "userSpaceOnUse"), t(zt, "class", "svelte-py5gbp"), s(R1, "xlink:href", "#x"), t(R1, "id", "A"), t(R1, "x1", "295"), t(R1, "x2", "295"), t(R1, "y1", "1004.4"), t(R1, "y2", "-357.6"), t(R1, "gradientUnits", "userSpaceOnUse"), t(Pr, "fill", "url(#y)"), t(Pr, "fill-rule", "evenodd"), t(Pr, "stroke", "#696a69"), t(Pr, "d", "M119 1046.4c-33-.4-94-23-105-42-1-7-7-94-7-162v-1075c0-13 3.5-103 5-130 8-13.9 56-33.8 68-37 12-3.3 25-6 36-6h416c11 0 24 2.7 36 6 12 3.2 60 23.1 68 37 1.5 27 5 117 5 130v1075c0 68-6 155-7 162-11 19-72 41.6-105 42H365z"), t(N2, "fill", "url(#z)"), t(N2, "fill-rule", "evenodd"), t(N2, "d", "M120 1022.4c-60 0-102-25-102-135v-1135c0-75 17-133 117-133h378c100 0 117 58 117 133v1135c0 110-42 135-102 135H365z"), t(Ar, "fill", "#269dc5"), t(Ar, "fill-rule", "evenodd"), t(Ar, "stroke", "#6ac1df"), t(Ar, "d", "M120 1015.4c-55 0-96-23-96-128v-1135c0-75 16-128 111-128h378c95 0 111 53 111 128v1135c0 105-41 128-96 128H365z"), t(Gr, "id", "pattern-bg"), t(Gr, "fill", "url(#pattern1)"), t(Gr, "fill-rule", "evenodd"), t(Gr, "stroke", "#000"), t(Gr, "d", "M120 1007.4c-45.4 0-90-15-90-120v-1127c0-75 15-128 105-128h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H365z"), t(Ot, "width", "516"), t(Ot, "height", "894"), t(Ot, "x", "66"), t(Ot, "y", "-321.6"), t(Ot, "fill", "#0d0d0d"), t(Ot, "stroke", "url(#B)"), t(Ot, "stroke-linecap", "round"), t(Ot, "stroke-linejoin", "round"), t(Ot, "rx", "22"), t(Ot, "ry", "22"), t(St, "width", "493"), t(St, "height", "871"), t(St, "x", "77"), t(St, "y", "-310.6"), t(St, "fill", "#0d0d0d"), t(St, "stroke", "url(#C)"), t(St, "stroke-linecap", "round"), t(St, "stroke-linejoin", "round"), t(St, "rx", "10"), t(St, "ry", "10"), t(Mt, "width", "516"), t(Mt, "height", "120"), t(Mt, "x", "66"), t(Mt, "y", "578.4"), t(Mt, "fill", "#0d0d0d"), t(Mt, "stroke", "url(#D)"), t(Mt, "stroke-linecap", "round"), t(Mt, "stroke-linejoin", "round"), t(Mt, "rx", "22"), t(Mt, "ry", "22"), t($t, "width", "493"), t($t, "height", "96"), t($t, "x", "77"), t($t, "y", "590.4"), t($t, "fill", "#0d0d0d"), t($t, "stroke", "url(#E)"), t($t, "stroke-linecap", "round"), t($t, "stroke-linejoin", "round"), t($t, "rx", "10"), t($t, "ry", "10"), t(Rt, "width", "116"), t(Rt, "height", "36"), t(Rt, "x", "86"), t(Rt, "y", "644.4"), t(Rt, "fill", "#00ec3a"), t(Rt, "fill-opacity", ".2"), t(Rt, "rx", "7"), t(Rt, "ry", "7"), t(Vt, "width", "116"), t(Vt, "height", "36"), t(Vt, "x", "446"), t(Vt, "y", "596.4"), t(Vt, "fill", "#00ec3a"), t(Vt, "fill-opacity", ".2"), t(Vt, "rx", "7"), t(Vt, "ry", "7"), t(Lt, "width", "116"), t(Lt, "height", "36"), t(Lt, "x", "446"), t(Lt, "y", "644.4"), t(Lt, "fill", "#00ec3a"), t(Lt, "fill-opacity", ".2"), t(Lt, "rx", "7"), t(Lt, "ry", "7"), t(L, "width", "76"), t(L, "height", "44"), t(L, "x", "511"), t(L, "y", "709.4"), t(L, "fill", "url(#F)"), t(L, "stroke", "var(--btn-border-stroke)"), t(L, "stroke-linecap", "round"), t(L, "stroke-linejoin", "round"), t(L, "stroke-width", "2"), t(L, "rx", "8"), t(L, "ry", "8"), t(V1, "width", "68"), t(V1, "height", "35"), t(V1, "x", "515"), t(V1, "y", "713.4"), t(V1, "fill", "url(#G)"), t(V1, "rx", "4"), t(V1, "ry", "4"), t(Z2, "fill", "url(#H)"), t(Z2, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(Z2, "transform", "translate(0 -411.6)"), t(_0, "transform", "translate(0 54)"), t(_0, "class", "cp-button"), t(_0, "data-cp", "KEYCODE_TIMES"), t(un, "fill", "#fff"), t(un, "d", "M84-303.6h480v792H84z"), t(pn, "id", "uid_3418"), t(_, "transform", "translate(0 411.6)"), t(xn, "class", "cp-wrapper svelte-py5gbp"), t(E0, "x", "0"), t(E0, "y", "0"), t(E0, "width", "480"), t(E0, "height", "792"), t(E0, "overflow", "hidden"), t(gn, "transform", "translate(85 109)"), t(W2, "fill", "url(#I)"), t(W2, "d", "M387.7 90a22 22 0 0 0-19 11H560a10 10 0 0 1 10 10v851a10 10 0 0 1-10 10H365.7v12H560a22 22 0 0 0 22-22V112a22 22 0 0 0-22-22H387.7z"), t(W2, "transform", "translate(0 -411.6)"), t(X2, "fill", "url(#J)"), t(X2, "d", "M66 904v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(X2, "transform", "translate(0 -411.6)"), t(J2, "fill", "url(#K)"), t(J2, "d", "M570 900v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62h-12z"), t(J2, "transform", "translate(0 -411.6)"), t(Tr, "fill", "url(#L)"), t(Tr, "fill-rule", "evenodd"), t(Tr, "d", "M136.9 40C42.9 40 27 93 27 168v1135c0 44.7 7.4 74.6 20 94.1 17.3 23 43 29.9 73 29.9h408c30 0 55.7-6.8 73-29.9 12.6-19.5 20-49.4 20-94.1V168c0-75-15.8-128-109.9-128H137zm-1.9 4h378c90 0 105 53 105 128v1127c0 105-44.6 120-90 120H120c-45.4 0-90-15-90-120V172C30 97 45 44 135 44z"), t(Tr, "transform", "translate(0 -411.6)"), t(Fr, "fill", "#1f7e9e"), t(Fr, "fill-opacity", ".3"), t(Fr, "fill-rule", "evenodd"), t(Fr, "d", "M-638 1019.4c-54.4 0-95-23-95-128v-1135c0-75 15.8-128 109.9-128H-249c94 0 109.9 53 109.9 128v1135c0 105-40.6 128-95 128h-161.4z"), t(P, "width", "76"), t(P, "height", "44"), t(P, "x", "511"), t(P, "y", "709.4"), t(P, "fill", "url(#M)"), t(P, "stroke", "var(--btn-border-stroke)"), t(P, "stroke-linecap", "round"), t(P, "stroke-linejoin", "round"), t(P, "stroke-width", "2"), t(P, "rx", "8"), t(P, "ry", "8"), t(L1, "width", "68"), t(L1, "height", "35"), t(L1, "x", "515"), t(L1, "y", "713.4"), t(L1, "fill", "url(#N)"), t(L1, "rx", "4"), t(L1, "ry", "4"), t(tl, "fill", "url(#O)"), t(tl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(tl, "transform", "translate(0 -411.6)"), t(Ur, "class", "cp-button"), t(Ur, "data-cp", "KEYCODE_DIVIDE"), t(A, "width", "76"), t(A, "height", "44"), t(A, "x", "511"), t(A, "y", "709.4"), t(A, "fill", "url(#P)"), t(A, "stroke", "var(--btn-border-stroke)"), t(A, "stroke-linecap", "round"), t(A, "stroke-linejoin", "round"), t(A, "stroke-width", "2"), t(A, "rx", "8"), t(A, "ry", "8"), t(P1, "width", "68"), t(P1, "height", "35"), t(P1, "x", "515"), t(P1, "y", "713.4"), t(P1, "fill", "url(#Q)"), t(P1, "rx", "4"), t(P1, "ry", "4"), t(el, "fill", "url(#R)"), t(el, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(el, "transform", "translate(0 -411.6)"), t(j0, "transform", "translate(0 108)"), t(j0, "class", "cp-button"), t(j0, "data-cp", "KEYCODE_MINUS"), t(T, "width", "76"), t(T, "height", "44"), t(T, "x", "511"), t(T, "y", "709.4"), t(T, "fill", "url(#S)"), t(T, "stroke", "var(--btn-border-stroke)"), t(T, "stroke-linecap", "round"), t(T, "stroke-linejoin", "round"), t(T, "stroke-width", "2"), t(T, "rx", "8"), t(T, "ry", "8"), t(A1, "width", "68"), t(A1, "height", "35"), t(A1, "x", "515"), t(A1, "y", "713.4"), t(A1, "fill", "url(#T)"), t(A1, "rx", "4"), t(A1, "ry", "4"), t(rl, "fill", "url(#U)"), t(rl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(rl, "transform", "translate(0 -411.6)"), t(C0, "transform", "translate(0 162)"), t(C0, "class", "cp-button"), t(C0, "data-cp", "KEYCODE_PLUS"), t(F, "width", "76"), t(F, "height", "44"), t(F, "x", "511"), t(F, "y", "709.4"), t(F, "fill", "url(#V)"), t(F, "stroke", "var(--btn-border-stroke)"), t(F, "stroke-linecap", "round"), t(F, "stroke-linejoin", "round"), t(F, "stroke-width", "2"), t(F, "rx", "8"), t(F, "ry", "8"), t(T1, "width", "68"), t(T1, "height", "35"), t(T1, "x", "515"), t(T1, "y", "713.4"), t(T1, "fill", "url(#W)"), t(T1, "rx", "4"), t(T1, "ry", "4"), t(ll, "fill", "url(#X)"), t(ll, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(ll, "transform", "translate(0 -411.6)"), t(H0, "transform", "translate(0 216)"), t(H0, "class", "cp-button"), t(H0, "data-cp", "KEYCODE_EXE"), t(I, "width", "76"), t(I, "height", "44"), t(I, "x", "511"), t(I, "y", "709.4"), t(I, "fill", "url(#Y)"), t(I, "stroke", "var(--btn-border-stroke)"), t(I, "stroke-linecap", "round"), t(I, "stroke-linejoin", "round"), t(I, "stroke-width", "2"), t(I, "rx", "8"), t(I, "ry", "8"), t(F1, "width", "68"), t(F1, "height", "35"), t(F1, "x", "515"), t(F1, "y", "713.4"), t(F1, "fill", "url(#Z)"), t(F1, "rx", "4"), t(F1, "ry", "4"), t(nl, "fill", "url(#aa)"), t(nl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(nl, "transform", "translate(0 -411.6)"), t(Q0, "transform", "translate(-90)"), t(Q0, "class", "cp-button"), t(Q0, "data-cp", "KEYCODE_POWER"), t(N, "width", "76"), t(N, "height", "44"), t(N, "x", "511"), t(N, "y", "709.4"), t(N, "fill", "url(#ab)"), t(N, "stroke", "var(--btn-border-stroke)"), t(N, "stroke-linecap", "round"), t(N, "stroke-linejoin", "round"), t(N, "stroke-width", "2"), t(N, "rx", "8"), t(N, "ry", "8"), t(I1, "width", "68"), t(I1, "height", "35"), t(I1, "x", "515"), t(I1, "y", "713.4"), t(I1, "fill", "url(#ac)"), t(I1, "rx", "4"), t(I1, "ry", "4"), t(al, "fill", "url(#ad)"), t(al, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(al, "transform", "translate(0 -411.6)"), t(D0, "transform", "translate(-180)"), t(D0, "class", "cp-button"), t(D0, "data-cp", "KEYCODE_Z"), t(Z, "width", "76"), t(Z, "height", "44"), t(Z, "x", "511"), t(Z, "y", "709.4"), t(Z, "fill", "url(#ae)"), t(Z, "stroke", "var(--btn-border-stroke)"), t(Z, "stroke-linecap", "round"), t(Z, "stroke-linejoin", "round"), t(Z, "stroke-width", "2"), t(Z, "rx", "8"), t(Z, "ry", "8"), t(N1, "width", "68"), t(N1, "height", "35"), t(N1, "x", "515"), t(N1, "y", "713.4"), t(N1, "fill", "url(#af)"), t(N1, "rx", "4"), t(N1, "ry", "4"), t(il, "fill", "url(#ag)"), t(il, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(il, "transform", "translate(0 -411.6)"), t(K0, "transform", "translate(-270)"), t(K0, "class", "cp-button"), t(K0, "data-cp", "KEYCODE_Y"), t(W, "width", "76"), t(W, "height", "44"), t(W, "x", "511"), t(W, "y", "709.4"), t(W, "fill", "url(#ah)"), t(W, "stroke", "var(--btn-border-stroke)"), t(W, "stroke-linecap", "round"), t(W, "stroke-linejoin", "round"), t(W, "stroke-width", "2"), t(W, "rx", "8"), t(W, "ry", "8"), t(Z1, "width", "68"), t(Z1, "height", "35"), t(Z1, "x", "515"), t(Z1, "y", "713.4"), t(Z1, "fill", "url(#ai)"), t(Z1, "rx", "4"), t(Z1, "ry", "4"), t(ol, "fill", "url(#aj)"), t(ol, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(ol, "transform", "translate(0 -411.6)"), t(Y0, "transform", "translate(-360)"), t(Y0, "class", "cp-button"), t(Y0, "data-cp", "KEYCODE_X"), t(X, "width", "76"), t(X, "height", "44"), t(X, "x", "511"), t(X, "y", "709.4"), t(X, "fill", "url(#ak)"), t(X, "stroke", "var(--btn-border-stroke)"), t(X, "stroke-linecap", "round"), t(X, "stroke-linejoin", "round"), t(X, "stroke-width", "2"), t(X, "rx", "8"), t(X, "ry", "8"), t(W1, "width", "68"), t(W1, "height", "35"), t(W1, "x", "515"), t(W1, "y", "713.4"), t(W1, "fill", "url(#al)"), t(W1, "rx", "4"), t(W1, "ry", "4"), t(sl, "fill", "url(#am)"), t(sl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(sl, "transform", "translate(0 -411.6)"), t(B0, "transform", "translate(-450 54)"), t(B0, "class", "cp-button"), t(B0, "data-cp", "KEYCODE_OPEN_PARENTHESIS"), t(J, "width", "76"), t(J, "height", "44"), t(J, "x", "511"), t(J, "y", "709.4"), t(J, "fill", "url(#an)"), t(J, "stroke", "var(--btn-border-stroke)"), t(J, "stroke-linecap", "round"), t(J, "stroke-linejoin", "round"), t(J, "stroke-width", "2"), t(J, "rx", "8"), t(J, "ry", "8"), t(X1, "width", "68"), t(X1, "height", "35"), t(X1, "x", "515"), t(X1, "y", "713.4"), t(X1, "fill", "url(#ao)"), t(X1, "rx", "4"), t(X1, "ry", "4"), t(cl, "fill", "url(#ap)"), t(cl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(cl, "transform", "translate(0 -411.6)"), t(R0, "transform", "translate(-450)"), t(R0, "class", "cp-button"), t(R0, "data-cp", "KEYCODE_EQUALS"), t(tt, "width", "76"), t(tt, "height", "44"), t(tt, "x", "511"), t(tt, "y", "709.4"), t(tt, "fill", "url(#aq)"), t(tt, "stroke", "var(--btn-border-stroke)"), t(tt, "stroke-linecap", "round"), t(tt, "stroke-linejoin", "round"), t(tt, "stroke-width", "2"), t(tt, "rx", "8"), t(tt, "ry", "8"), t(J1, "width", "68"), t(J1, "height", "35"), t(J1, "x", "515"), t(J1, "y", "713.4"), t(J1, "fill", "url(#ar)"), t(J1, "rx", "4"), t(J1, "ry", "4"), t(dl, "fill", "url(#as)"), t(dl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(dl, "transform", "translate(0 -411.6)"), t(V0, "transform", "translate(-450 108)"), t(V0, "class", "cp-button"), t(V0, "data-cp", "KEYCODE_CLOSE_PARENTHESIS"), t(et, "width", "76"), t(et, "height", "44"), t(et, "x", "511"), t(et, "y", "709.4"), t(et, "fill", "url(#at)"), t(et, "stroke", "var(--btn-border-stroke)"), t(et, "stroke-linecap", "round"), t(et, "stroke-linejoin", "round"), t(et, "stroke-width", "2"), t(et, "rx", "8"), t(et, "ry", "8"), t(t0, "width", "68"), t(t0, "height", "35"), t(t0, "x", "515"), t(t0, "y", "713.4"), t(t0, "fill", "url(#au)"), t(t0, "rx", "4"), t(t0, "ry", "4"), t(hl, "fill", "url(#av)"), t(hl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(hl, "transform", "translate(0 -411.6)"), t(L0, "transform", "translate(-450 162)"), t(L0, "class", "cp-button"), t(L0, "data-cp", "KEYCODE_COMMA"), t(rt, "width", "76"), t(rt, "height", "44"), t(rt, "x", "511"), t(rt, "y", "709.4"), t(rt, "fill", "url(#aw)"), t(rt, "stroke", "var(--btn-border-stroke)"), t(rt, "stroke-linecap", "round"), t(rt, "stroke-linejoin", "round"), t(rt, "stroke-width", "2"), t(rt, "rx", "8"), t(rt, "ry", "8"), t(e0, "width", "68"), t(e0, "height", "35"), t(e0, "x", "515"), t(e0, "y", "713.4"), t(e0, "fill", "url(#ax)"), t(e0, "rx", "4"), t(e0, "ry", "4"), t(fl, "fill", "url(#ay)"), t(fl, "d", "M519 1122a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-27a4 4 0 0 1 4-4h60a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6h-60z"), t(fl, "transform", "translate(0 -411.6)"), t(P0, "transform", "translate(-450 216)"), t(P0, "class", "cp-button"), t(P0, "data-cp", "KEYCODE_NEGATIVE"), t(lt, "width", "116"), t(lt, "height", "36"), t(lt, "x", "511"), t(lt, "y", "709.4"), t(lt, "fill", "url(#az)"), t(lt, "stroke", "var(--btn-border-stroke)"), t(lt, "stroke-linecap", "round"), t(lt, "stroke-linejoin", "round"), t(lt, "stroke-width", "2"), t(lt, "rx", "8"), t(lt, "ry", "8"), t(r0, "width", "107"), t(r0, "height", "27"), t(r0, "x", "515"), t(r0, "y", "713.4"), t(r0, "fill", "url(#aA)"), t(r0, "rx", "4"), t(r0, "ry", "4"), t(pl, "fill", "url(#aB)"), t(pl, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(pl, "transform", "translate(0 -411.6)"), t(A0, "transform", "translate(-425 -113)"), t(A0, "class", "cp-button"), t(A0, "data-cp", "KEYCODE_KEYBOARD"), t(nt, "width", "116"), t(nt, "height", "36"), t(nt, "x", "511"), t(nt, "y", "709.4"), t(nt, "fill", "url(#aC)"), t(nt, "stroke", "var(--btn-border-stroke)"), t(nt, "stroke-linecap", "round"), t(nt, "stroke-linejoin", "round"), t(nt, "stroke-width", "2"), t(nt, "rx", "8"), t(nt, "ry", "8"), t(l0, "width", "107"), t(l0, "height", "27"), t(l0, "x", "515"), t(l0, "y", "713.4"), t(l0, "fill", "url(#aD)"), t(l0, "rx", "4"), t(l0, "ry", "4"), t(ul, "fill", "url(#aE)"), t(ul, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(ul, "transform", "translate(0 -411.6)"), t(T0, "transform", "translate(-425 -65)"), t(T0, "class", "cp-button"), t(T0, "data-cp", "KEYCODE_SHIFT"), t(at, "width", "116"), t(at, "height", "36"), t(at, "x", "511"), t(at, "y", "709.4"), t(at, "fill", "url(#aF)"), t(at, "stroke", "var(--btn-border-stroke)"), t(at, "stroke-linecap", "round"), t(at, "stroke-linejoin", "round"), t(at, "stroke-width", "2"), t(at, "rx", "8"), t(at, "ry", "8"), t(n0, "width", "107"), t(n0, "height", "27"), t(n0, "x", "515"), t(n0, "y", "713.4"), t(n0, "fill", "url(#aG)"), t(n0, "rx", "4"), t(n0, "ry", "4"), t(gl, "fill", "url(#aH)"), t(gl, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(gl, "transform", "translate(0 -411.6)"), t(F0, "transform", "translate(-65 -113)"), t(F0, "class", "cp-button"), t(F0, "data-cp", "KEYCODE_BACKSPACE"), t(it, "width", "116"), t(it, "height", "36"), t(it, "x", "511"), t(it, "y", "709.4"), t(it, "fill", "url(#aI)"), t(it, "stroke", "var(--btn-border-stroke)"), t(it, "stroke-linecap", "round"), t(it, "stroke-linejoin", "round"), t(it, "stroke-width", "2"), t(it, "rx", "8"), t(it, "ry", "8"), t(a0, "width", "107"), t(a0, "height", "27"), t(a0, "x", "515"), t(a0, "y", "713.4"), t(a0, "fill", "url(#aJ)"), t(a0, "rx", "4"), t(a0, "ry", "4"), t(xl, "fill", "url(#aK)"), t(xl, "d", "M519 1122a7 7 0 0 0-7 7v20a7 7 0 0 0 7 7h4.3l1.3-4H519a4 4 0 0 1-4-4v-19a4 4 0 0 1 4-4h100a4 4 0 0 1 3.5 2l3-.4a7 7 0 0 0-6.5-4.6Z"), t(xl, "transform", "translate(0 -411.6)"), t(I0, "transform", "translate(-65 -65)"), t(I0, "class", "cp-button"), t(I0, "data-cp", "KEYCODE_CLEAR"), t(vn, "fill", "url(#aL)"), t(vn, "d", "M560 589.4s10 4.4 10 10v77a10 10 0 0 1-10 10H365.7v12H560c13.2 0 22-9.3 22-28v-70c0-12.2-22-22-22-22z"), t(yn, "fill", "url(#aM)"), t(yn, "d", "M66 618.4v58a22 22 0 0 0 22 22h472v-12H87a10 10 0 0 1-10-10v-58z"), t(qn, "fill", "url(#aN)"), t(qn, "d", "M570 614.4v62a10 10 0 0 1-10 10h-57.9v12H560a22 22 0 0 0 22-22v-62z"), t(i0, "width", "204"), t(i0, "height", "116"), t(i0, "x", "221"), t(i0, "y", "580.4"), t(i0, "fill", "url(#aO)"), t(i0, "rx", "25"), t(i0, "ry", "58"), t(o0, "width", "200"), t(o0, "height", "112"), t(o0, "x", "223"), t(o0, "y", "582.4"), t(o0, "fill", "url(#aP)"), t(o0, "rx", "23"), t(o0, "ry", "55.9"), t(s0, "width", "185"), t(s0, "height", "98"), t(s0, "x", "231"), t(s0, "y", "589.4"), t(s0, "fill", "url(#aQ)"), t(s0, "rx", "16"), t(s0, "ry", "47.5"), t(c0, "class", "cp-button cp-button-arrow"), t(c0, "data-cp", "KEYCODE_UP"), t(c0, "fill", "#7f7f7f"), t(c0, "stroke", "url(#aR)"), t(c0, "stroke-linecap", "round"), t(c0, "stroke-linejoin", "round"), t(c0, "d", "M330.2 611.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(_t, "width", "104"), t(_t, "height", "12"), t(_t, "x", "272"), t(_t, "y", "632.4"), t(_t, "fill", "url(#aS)"), t(_t, "stroke", "url(#aT)"), t(_t, "stroke-linecap", "round"), t(_t, "stroke-linejoin", "round"), t(_t, "rx", "2"), t(_t, "ry", "2"), t(Pt, "class", "cp-button cp-button-arrow"), t(Pt, "data-cp", "KEYCODE_DOWN"), t(Pt, "fill", "#7f7f7f"), t(Pt, "stroke", "url(#aU)"), t(Pt, "stroke-linecap", "round"), t(Pt, "stroke-linejoin", "round"), t(Pt, "d", "M-317.8-665.2c-.4.8-5.3.8-6.2.8-.9 0-5.8 0-6.2-.8-.5-.7 2-5 2.4-5.8.4-.8 3-5 3.8-5 .9 0 3.4 4.2 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(Pt, "transform", "scale(-1)"), t(At, "class", "cp-button cp-button-arrow"), t(At, "data-cp", "KEYCODE_LEFT"), t(At, "fill", "#7f7f7f"), t(At, "stroke", "url(#aV)"), t(At, "stroke-linecap", "round"), t(At, "stroke-linejoin", "round"), t(At, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(At, "transform", "rotate(-90 255.8 641.5)"), t(Tt, "class", "cp-button cp-button-arrow"), t(Tt, "data-cp", "KEYCODE_RIGHT"), t(Tt, "fill", "#7f7f7f"), t(Tt, "stroke", "url(#aW)"), t(Tt, "stroke-linecap", "round"), t(Tt, "stroke-linejoin", "round"), t(Tt, "d", "M265.2 641.5c-.4.8-5.3.9-6.2.9-.9 0-5.8 0-6.2-.9-.5-.7 2-5 2.4-5.8.4-.7 3-5 3.8-5 .9 0 3.4 4.3 3.8 5 .5.8 2.9 5 2.4 5.8z"), t(Tt, "transform", "matrix(0 -1 -1 0 1033.7 897.4)"), t(vl, "fill", "url(#aX)"), t(vl, "d", "m245 1098.7-2.5 6.7c1.1.4 2.3.6 3.5.6h154c2 0 3.8-.6 5.6-1.7l-4-5.6c-.5.2-1 .3-1.6.3H247l-2-.3z"), t(vl, "transform", "translate(0 -411.6)"), t(ot, "width", "102"), t(ot, "height", "44"), t(ot, "x", "511"), t(ot, "y", "709.4"), t(ot, "fill", "url(#aY)"), t(ot, "stroke", "var(--btn-border-stroke)"), t(ot, "stroke-linecap", "round"), t(ot, "stroke-linejoin", "round"), t(ot, "stroke-width", "2"), t(ot, "rx", "8"), t(ot, "ry", "8"), t(d0, "width", "94"), t(d0, "height", "35"), t(d0, "x", "515"), t(d0, "y", "713.4"), t(d0, "fill", "url(#aZ)"), t(d0, "rx", "4"), t(d0, "ry", "4"), t(zr, "transform", "translate(-117 216)"), t(zr, "class", "cp-button"), t(zr, "data-cp", "KEYCODE_EXP"), t(st, "width", "102"), t(st, "height", "44"), t(st, "x", "511"), t(st, "y", "709.4"), t(st, "fill", "url(#ba)"), t(st, "stroke", "var(--btn-border-stroke)"), t(st, "stroke-linecap", "round"), t(st, "stroke-linejoin", "round"), t(st, "stroke-width", "2"), t(st, "rx", "8"), t(st, "ry", "8"), t(h0, "width", "94"), t(h0, "height", "35"), t(h0, "x", "515"), t(h0, "y", "713.4"), t(h0, "fill", "url(#bb)"), t(h0, "rx", "4"), t(h0, "ry", "4"), t(Or, "transform", "translate(-117 162)"), t(Or, "class", "cp-button"), t(Or, "data-cp", "KEYCODE_3"), t(ct, "width", "102"), t(ct, "height", "44"), t(ct, "x", "511"), t(ct, "y", "709.4"), t(ct, "fill", "url(#bc)"), t(ct, "stroke", "var(--btn-border-stroke)"), t(ct, "stroke-linecap", "round"), t(ct, "stroke-linejoin", "round"), t(ct, "stroke-width", "2"), t(ct, "rx", "8"), t(ct, "ry", "8"), t(f0, "width", "94"), t(f0, "height", "35"), t(f0, "x", "515"), t(f0, "y", "713.4"), t(f0, "fill", "url(#bd)"), t(f0, "rx", "4"), t(f0, "ry", "4"), t(Sr, "transform", "translate(-117 108)"), t(Sr, "class", "cp-button"), t(Sr, "data-cp", "KEYCODE_6"), t(dt, "width", "102"), t(dt, "height", "44"), t(dt, "x", "511"), t(dt, "y", "709.4"), t(dt, "fill", "url(#be)"), t(dt, "stroke", "var(--btn-border-stroke)"), t(dt, "stroke-linecap", "round"), t(dt, "stroke-linejoin", "round"), t(dt, "stroke-width", "2"), t(dt, "rx", "8"), t(dt, "ry", "8"), t(p0, "width", "94"), t(p0, "height", "35"), t(p0, "x", "515"), t(p0, "y", "713.4"), t(p0, "fill", "url(#bf)"), t(p0, "rx", "4"), t(p0, "ry", "4"), t(Mr, "transform", "translate(-117 54)"), t(Mr, "class", "cp-button"), t(Mr, "data-cp", "KEYCODE_9"), t(ht, "width", "102"), t(ht, "height", "44"), t(ht, "x", "511"), t(ht, "y", "709.4"), t(ht, "fill", "url(#bg)"), t(ht, "stroke", "var(--btn-border-stroke)"), t(ht, "stroke-linecap", "round"), t(ht, "stroke-linejoin", "round"), t(ht, "stroke-width", "2"), t(ht, "rx", "8"), t(ht, "ry", "8"), t(u0, "width", "94"), t(u0, "height", "35"), t(u0, "x", "515"), t(u0, "y", "713.4"), t(u0, "fill", "url(#bh)"), t(u0, "rx", "4"), t(u0, "ry", "4"), t($r, "transform", "translate(-238 216)"), t($r, "class", "cp-button"), t($r, "data-cp", "KEYCODE_DOT"), t(ft, "width", "102"), t(ft, "height", "44"), t(ft, "x", "511"), t(ft, "y", "709.4"), t(ft, "fill", "url(#bi)"), t(ft, "stroke", "var(--btn-border-stroke)"), t(ft, "stroke-linecap", "round"), t(ft, "stroke-linejoin", "round"), t(ft, "stroke-width", "2"), t(ft, "rx", "8"), t(ft, "ry", "8"), t(g0, "width", "94"), t(g0, "height", "35"), t(g0, "x", "515"), t(g0, "y", "713.4"), t(g0, "fill", "url(#bj)"), t(g0, "rx", "4"), t(g0, "ry", "4"), t(_r, "transform", "translate(-238 162)"), t(_r, "class", "cp-button"), t(_r, "data-cp", "KEYCODE_2"), t(pt, "width", "102"), t(pt, "height", "44"), t(pt, "x", "511"), t(pt, "y", "709.4"), t(pt, "fill", "url(#bk)"), t(pt, "stroke", "var(--btn-border-stroke)"), t(pt, "stroke-linecap", "round"), t(pt, "stroke-linejoin", "round"), t(pt, "stroke-width", "2"), t(pt, "rx", "8"), t(pt, "ry", "8"), t(x0, "width", "94"), t(x0, "height", "35"), t(x0, "x", "515"), t(x0, "y", "713.4"), t(x0, "fill", "url(#bl)"), t(x0, "rx", "4"), t(x0, "ry", "4"), t(Er, "transform", "translate(-238 108)"), t(Er, "class", "cp-button"), t(Er, "data-cp", "KEYCODE_5"), t(ut, "width", "102"), t(ut, "height", "44"), t(ut, "x", "511"), t(ut, "y", "709.4"), t(ut, "fill", "url(#bm)"), t(ut, "stroke", "var(--btn-border-stroke)"), t(ut, "stroke-linecap", "round"), t(ut, "stroke-linejoin", "round"), t(ut, "stroke-width", "2"), t(ut, "rx", "8"), t(ut, "ry", "8"), t(v0, "width", "94"), t(v0, "height", "35"), t(v0, "x", "515"), t(v0, "y", "713.4"), t(v0, "fill", "url(#bn)"), t(v0, "rx", "4"), t(v0, "ry", "4"), t(jr, "transform", "translate(-238 54)"), t(jr, "class", "cp-button"), t(jr, "data-cp", "KEYCODE_8"), t(Ft, "width", "76"), t(Ft, "height", "44"), t(Ft, "x", "511"), t(Ft, "y", "1085.4"), t(Ft, "fill", "#15d81e"), t(Ft, "fill-opacity", ".2"), t(Ft, "rx", "8"), t(Ft, "ry", "8"), t(gt, "width", "102"), t(gt, "height", "44"), t(gt, "x", "511"), t(gt, "y", "709.4"), t(gt, "fill", "url(#bo)"), t(gt, "stroke", "var(--btn-border-stroke)"), t(gt, "stroke-linecap", "round"), t(gt, "stroke-linejoin", "round"), t(gt, "stroke-width", "2"), t(gt, "rx", "8"), t(gt, "ry", "8"), t(y0, "width", "94"), t(y0, "height", "35"), t(y0, "x", "515"), t(y0, "y", "713.4"), t(y0, "fill", "url(#bp)"), t(y0, "rx", "4"), t(y0, "ry", "4"), t(Cr, "transform", "translate(-359 216)"), t(Cr, "class", "cp-button"), t(Cr, "data-cp", "KEYCODE_0"), t(xt, "width", "102"), t(xt, "height", "44"), t(xt, "x", "511"), t(xt, "y", "709.4"), t(xt, "fill", "url(#bq)"), t(xt, "stroke", "var(--btn-border-stroke)"), t(xt, "stroke-linecap", "round"), t(xt, "stroke-linejoin", "round"), t(xt, "stroke-width", "2"), t(xt, "rx", "8"), t(xt, "ry", "8"), t(q0, "width", "94"), t(q0, "height", "35"), t(q0, "x", "515"), t(q0, "y", "713.4"), t(q0, "fill", "url(#br)"), t(q0, "rx", "4"), t(q0, "ry", "4"), t(Hr, "transform", "translate(-359 162)"), t(Hr, "class", "cp-button"), t(Hr, "data-cp", "KEYCODE_1"), t(vt, "width", "102"), t(vt, "height", "44"), t(vt, "x", "511"), t(vt, "y", "709.4"), t(vt, "fill", "url(#bs)"), t(vt, "stroke", "var(--btn-border-stroke)"), t(vt, "stroke-linecap", "round"), t(vt, "stroke-linejoin", "round"), t(vt, "stroke-width", "2"), t(vt, "rx", "8"), t(vt, "ry", "8"), t(m0, "width", "94"), t(m0, "height", "35"), t(m0, "x", "515"), t(m0, "y", "713.4"), t(m0, "fill", "url(#bt)"), t(m0, "rx", "4"), t(m0, "ry", "4"), t(Qr, "transform", "translate(-359 108)"), t(Qr, "class", "cp-button"), t(Qr, "data-cp", "KEYCODE_4"), t(yt, "width", "102"), t(yt, "height", "44"), t(yt, "x", "511"), t(yt, "y", "709.4"), t(yt, "fill", "url(#bu)"), t(yt, "stroke", "var(--btn-border-stroke)"), t(yt, "stroke-linecap", "round"), t(yt, "stroke-linejoin", "round"), t(yt, "stroke-width", "2"), t(yt, "rx", "8"), t(yt, "ry", "8"), t(b0, "width", "94"), t(b0, "height", "35"), t(b0, "x", "515"), t(b0, "y", "713.4"), t(b0, "fill", "url(#bv)"), t(b0, "rx", "4"), t(b0, "ry", "4"), t(Dr, "transform", "translate(-359 54)"), t(Dr, "class", "cp-button"), t(Dr, "data-cp", "KEYCODE_7"), t(N0, "fill", "#3d3d3d"), t(N0, "d", "M201.5 795.5h-2.4q-.7 0-.3-.6l7.5-18.7h-8.8q-.6 0-.6-.7v-1.9q0-.6.6-.6h11.8q.7 0 .7.6v2.2q0 .5-.4 1.5l-7.1 17.7q-.2.5-1 .5z"), t(N0, "font-family", "Rajdhani"), t(N0, "font-size", "35"), t(N0, "font-weight", "600"), t(N0, "letter-spacing", "0"), t(Ir, "word-spacing", "0"), t(Ir, "class", "cp-button-label"), p(Ir, "line-height", "125%"), t(w0, "fill", "#fff"), t(w0, "d", "M199.3 723.3q-3.8 4-8 8l1.9 4.3 1.1 2.5q.4.8.8 1.2l.7.5 1.1.3-.2 1h-4.9l-2.7-8-1.2 1.2-1.5 1.6-1 1.3-.4.9-.1.8q0 .5.3.8.3.3 1 .4l-.3 1h-5.5l-.4-1q4.3-4.6 8.4-8.5l-1.8-4.3-1-2q-.3-.8-.6-1.1l-.8-.6-1.2-.3.2-1h5l2.5 7.4 1.8-1.8 1.2-1.5q.4-.5.5-1 .2-.4.2-.9 0-1-1.3-1.2l.2-1h5.6l.4 1z"), t(w0, "font-family", "Cambria"), t(w0, "font-size", "40"), t(w0, "font-style", "italic"), t(w0, "font-weight", "400"), t(w0, "letter-spacing", "0"), t(Nr, "word-spacing", "0"), t(Nr, "class", "cp-button-label"), p(Nr, "line-height", "125%"), t(Z0, "x", "1714.4"), t(Z0, "y", "880.6"), t(Z0, "font-family", "Lucida Calligraphy"), t(Z0, "font-style", "italic"), t(Z0, "font-weight", "400"), t(qt, "xml:space", "preserve"), t(qt, "x", "1714.4"), t(qt, "y", "880.6"), t(qt, "font-family", "Script MT Bold"), t(qt, "font-size", "40"), t(qt, "font-weight", "700"), t(qt, "letter-spacing", "0"), t(qt, "word-spacing", "0"), p(qt, "line-height", "125%"), t(W0, "fill", "#3d3d3d"), t(W0, "d", "M322.2 792.6h2.7q1.3 0 2-.6.6-.6.6-2v-1.8q0-2.6-2.6-2.6h-2.7q-2.5 0-2.5 2.6v1.9q0 1.3.6 1.9.6.6 1.9.6zm0-9.8h2.7q2.6 0 2.6-2.6v-1.7q0-1.3-.7-2-.6-.5-1.9-.5h-2.7q-1.3 0-2 .6-.5.6-.5 1.9v1.7q0 2.6 2.5 2.6zm3.2 12.7h-3.7q-2.6 0-4-1.3t-1.4-3.9v-1.9q0-3.2 2.4-4.2-2.4-1-2.4-4.2v-1.8q0-2.5 1.4-3.8 1.4-1.4 4-1.4h3.7q2.6 0 4 1.4 1.5 1.3 1.5 3.8v1.8q0 1.6-.7 2.7-.6 1.1-1.7 1.5 2.4 1 2.4 4.3v1.8q0 2.6-1.5 3.9-1.4 1.3-4 1.3z"), t(W0, "font-family", "Rajdhani"), t(W0, "font-size", "35"), t(W0, "font-weight", "600"), t(W0, "letter-spacing", "0"), t(Zr, "word-spacing", "0"), t(Zr, "class", "cp-button-label"), p(Zr, "line-height", "125%"), t(X0, "fill", "#3d3d3d"), t(X0, "d", "M441.9 784.1h4.9v-5.5q0-2.6-2.6-2.6H442q-2.5 0-2.5 2.6v3q0 2.5 2.5 2.5zm2.8 11.4h-7q-.7 0-.7-.6v-1.8q0-.5.6-.5h6.6q2.6 0 2.6-2.6v-3h-5.4q-2.6 0-4-1.4-1.5-1.4-1.5-4v-3.3q0-2.5 1.4-4 1.5-1.4 4-1.4h3.4q2.6 0 4 1.5 1.5 1.4 1.5 4V790q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(X0, "font-family", "Rajdhani"), t(X0, "font-size", "35"), t(X0, "font-weight", "600"), t(X0, "letter-spacing", "0"), t(Wr, "word-spacing", "0"), t(Wr, "class", "cp-button-label"), p(Wr, "line-height", "125%"), t(J0, "fill", "#3d3d3d"), t(J0, "d", "M204 842.2V830l-7 12.3h7zm2.6 7.3h-2q-.7 0-.7-.6v-3.6h-9.2q-1 0-1-1v-1.1q0-.8.3-1.4l7.8-13.9.5-.7q.3-.2.8-.2h3q1 0 1 1v14.2h2.6q.6 0 .6.6v1.8q0 .7-.6.7h-2.5v3.6q0 .6-.6.6z"), t(J0, "font-family", "Rajdhani"), t(J0, "font-size", "35"), t(J0, "font-weight", "600"), t(J0, "letter-spacing", "0"), t(Xr, "word-spacing", "0"), t(Xr, "class", "cp-button-label"), p(Xr, "line-height", "125%"), t(tr, "fill", "#3d3d3d"), t(tr, "d", "M323.9 837.6h-2.2q-.6 0-1.1.3-.4.2-.6.5-.3.8-.9.8h-2.2q-.6 0-.6-.6v-11q0-.6.6-.6h11.9q.6 0 .6.6v2q0 .6-.6.6h-9v6.4q.5-1.7 2.9-1.7h2q2.6 0 3.9 1.3 1.3 1.3 1.3 3.8v4.1q0 2.6-1.4 4-1.5 1.4-4 1.4h-3q-2.6 0-4-1.4t-1.4-4v-1q0-.5.6-.5h2.2q.6 0 .6.6v.9q0 2.5 2.5 2.5h2q2.6 0 2.6-2.5v-3.6q0-1.5-.6-2.2-.6-.7-2.1-.7z"), t(tr, "font-family", "Rajdhani"), t(tr, "font-size", "35"), t(tr, "font-weight", "600"), t(tr, "letter-spacing", "0"), t(Jr, "word-spacing", "0"), t(Jr, "class", "cp-button-label"), p(Jr, "line-height", "125%"), t(er, "fill", "#3d3d3d"), t(er, "d", "M442 846.6h2.5q2.5 0 2.5-2.6v-2.8q0-2.6-2.5-2.6h-5v5.4q0 2.6 2.6 2.6zm3 3h-3.4q-2.6 0-4-1.5-1.5-1.4-1.5-4v-11.7q0-2.5 1.5-4 1.4-1.4 4-1.4h7q.5 0 .5.6v1.8q0 .6-.6.6h-6.4q-2.5 0-2.5 2.6v3h5.3q2.6 0 4 1.4 1.5 1.4 1.5 4v3.1q0 2.6-1.4 4-1.5 1.4-4 1.4z"), t(er, "font-family", "Rajdhani"), t(er, "font-size", "35"), t(er, "font-weight", "600"), t(er, "letter-spacing", "0"), t(t2, "word-spacing", "0"), t(t2, "class", "cp-button-label"), p(t2, "line-height", "125%"), t(rr, "fill", "#3d3d3d"), t(rr, "d", "M197.2 886.5v-2q0-.6.5-.9l3.6-2.2q.7-.4 1.2-.4h2q.7 0 .7.6V903q0 .6-.6.6h-2.3q-.6 0-.6-.6v-18.2l-3.8 2.2q-.7.3-.7-.4z"), t(rr, "font-family", "Rajdhani"), t(rr, "font-size", "35"), t(rr, "font-weight", "600"), t(rr, "letter-spacing", "0"), t(e2, "word-spacing", "0"), t(e2, "class", "cp-button-label"), p(e2, "line-height", "125%"), t(lr, "fill", "#3d3d3d"), t(lr, "d", "M316 903v-3.3q0-2.2 2-3.6l6.5-5.4q1.7-1.3 1.7-3.1v-1.2q0-2.5-2.6-2.5h-1.7q-1.4 0-2 .6-.6.6-.6 2v1.2q0 .7-.6.7h-2.2q-.6 0-.6-.7v-1.3q0-2.6 1.4-4 1.5-1.4 4-1.4h2.8q2.6 0 4 1.4t1.4 4v1.4q0 2.7-2.1 4.5l-6.7 5.5q-.8.7-.8 1.6v1h9q.7 0 .7.7v1.8q0 .6-.6.6h-12.3q-.6 0-.6-.6z"), t(lr, "font-family", "Rajdhani"), t(lr, "font-size", "35"), t(lr, "font-weight", "600"), t(lr, "letter-spacing", "0"), t(r2, "word-spacing", "0"), t(r2, "class", "cp-button-label"), p(r2, "line-height", "125%"), t(nr, "fill", "#3d3d3d"), t(nr, "d", "M442 890.8h1.9q2.6 0 2.6-2.5v-1.9q0-2.5-2.6-2.5h-2q-1.4 0-2 .6-.6.6-.6 2v1q0 .6-.6.6h-2.2q-.6 0-.6-.6v-1.1q0-2.6 1.4-4t4-1.4h3q2.7 0 4.1 1.4 1.4 1.4 1.4 4v1.9q0 3-2.8 4 2.8.6 2.8 3.8v2q0 2.6-1.4 4t-4 1.4h-3q-2.7 0-4-1.4-1.5-1.4-1.5-4V897q0-.6.6-.6h2.2q.6 0 .6.6v1.2q0 1.3.6 2 .6.5 2 .5h2q2.6 0 2.6-2.5v-2q0-2.5-2.6-2.5h-2q-.5 0-.5-.6v-1.5q0-.7.6-.7z"), t(nr, "font-family", "Rajdhani"), t(nr, "font-size", "35"), t(nr, "font-weight", "600"), t(nr, "letter-spacing", "0"), t(l2, "word-spacing", "0"), t(l2, "class", "cp-button-label"), p(l2, "line-height", "125%"), t(ar, "fill", "#3d3d3d"), t(ar, "d", "M204.2 954.6h2.5q2.6 0 2.6-2.6v-11.4q0-2.6-2.6-2.6h-2.5q-2.5 0-2.5 2.6V952q0 2.6 2.5 2.6zm3 3h-3.5q-2.6 0-4-1.5-1.4-1.4-1.4-4v-11.7q0-2.5 1.4-4 1.4-1.4 4-1.4h3.5q2.6 0 4 1.5 1.4 1.4 1.4 4V952q0 2.6-1.4 4t-4 1.4z"), t(ar, "font-family", "Rajdhani"), t(ar, "font-size", "35"), t(ar, "font-weight", "600"), t(ar, "letter-spacing", "0"), t(n2, "word-spacing", "0"), t(n2, "class", "cp-button-label"), p(n2, "line-height", "125%"), t(k0, "fill", "#3d3d3d"), t(k0, "d", "M387 1061.8h-10q-.5 0-.5-.5V1042q0-.5.5-.5h10q.6 0 .6.5v1.6q0 .6-.5.6h-7.2q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.5.6h-6.1q-.4 0-.4.3v5.6q0 .3.4.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.3-.1q-.1-.2 0-.4l5.2-10-5-9.2v-.3q.1-.2.4-.2h2.2q.6 0 .9.5l3.6 7.3h.1l3.7-7.3q.2-.5.8-.5h2.3q.3 0 .3.2.2.2 0 .4l-5 9.1 5.2 10q.2.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7-4 7.7q-.2.5-.7.5zm17.8 0h-2q-.6 0-.6-.5V1042q0-.5.6-.5h7.5q2.3 0 3.6 1.3 1.2 1.2 1.2 3.6v3.2q0 2.3-1.2 3.6-1.3 1.3-3.6 1.3h-4.6q-.4 0-.4.3v6.4q0 .5-.5.5zm.8-9.9h4.2q2.3 0 2.3-2.3v-3q0-2.3-2.3-2.3h-4.2q-.3 0-.3.3v7q0 .3.3.3z"), t(k0, "font-family", "Rajdhani"), t(k0, "font-size", "31.5"), t(k0, "font-weight", "600"), t(k0, "letter-spacing", "0"), t(k0, "transform", "scale(1.1 .9)"), t(a2, "word-spacing", "0"), t(a2, "class", "cp-button-label"), p(a2, "line-height", "125%"), t(yl, "fill", "#3d3d3d"), t(yl, "d", "M327 946.4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z"), t(yl, "class", "cp-button-label"), t(Ct, "fill", "#fff"), t(Ct, "d", "m273.8 721.7-.3 1.7h.5c.4 0 .6.2.7.2l.3.4.2 1.5 1.4 10.6-1.4 1.8-1.1 1.2-.9.6-.5.3h-1l-.2-.5v-.5h-2l-.8 3.5.4.2 1 .2a5.6 5.6 0 0 0 2.5-.1c.5-.1 1-.4 1.5-.7a9 9 0 0 0 1.6-1.3 109.4 109.4 0 0 0 6.7-8.7l3-4.7 2-4.3v-.2l-.6-1.2h-4.5l-.3 1.7h.6c.4 0 .6.2.7.2v.6c0 1.4-1.4 4.3-4 8l-1-10.5h-4.6z"), t(Ct, "font-family", "Script MT Bold"), t(Ct, "font-size", "29.8"), t(Ct, "font-weight", "700"), t(Ct, "letter-spacing", "0"), t(Ct, "word-spacing", "0"), t(Ct, "class", "cp-button-label"), p(Ct, "line-height", "125%"), t(G0, "fill", "#fff"), t(G0, "d", "m375.3 734.5-1.1 5.5H360l-.4-1 10.7-12.2 3.3-3.7v-.2H369q-1 0-1.5.2-.5.1-1 .5l-1 1q-.5.6-1.2 1.9h-1.7l1.1-5.1h14l.3 1-14 16h6.3q.6-.2 1.1-.6.5-.3 1-1t1.2-2.3h1.7z"), t(G0, "font-family", "Cambria"), t(G0, "font-size", "40"), t(G0, "font-style", "italic"), t(G0, "font-weight", "400"), t(G0, "letter-spacing", "0"), t(i2, "word-spacing", "0"), t(i2, "class", "cp-button-label"), p(i2, "line-height", "125%"), t(ir, "fill", "#fff"), t(ir, "d", "m102 795-2.6 2.5-1-1-1.3-1.3-2.6-2.6q-.6-1-.6-2v-10.8q0-1 .6-2l2.3-2.5 1.1-1 1.5-1.4 2.6 2.5-1.3 1.2-2.2 2.1q-1 1-1 1.2v10.6q0 .3 1.9 2l2.7 2.5z"), t(ir, "font-family", "Blender Pro"), t(ir, "font-size", "35"), t(ir, "font-weight", "700"), t(ir, "letter-spacing", "0"), t(o2, "word-spacing", "0"), t(o2, "class", "cp-button-label"), p(o2, "line-height", "125%"), t(or, "fill", "#fff"), t(or, "d", "M102 844.6q0 1.1-.6 2-.6.8-2.6 2.6l-2.4 2.3-2.6-2.6q1-.7 2.7-2.3 1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2.1-2l-1.3-1.3 2.5-2.5 1 1 1.7 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(or, "font-family", "Blender Pro"), t(or, "font-size", "35"), t(or, "font-weight", "700"), t(or, "letter-spacing", "0"), t(s2, "word-spacing", "0"), t(s2, "class", "cp-button-label"), p(s2, "line-height", "125%"), t(sr, "fill", "#fff"), t(sr, "d", "M108 728.7H85.6V723H108v5.6zm0 9H85.6V732H108v5.6z"), t(sr, "font-family", "Blender Pro"), t(sr, "font-size", "60"), t(sr, "font-weight", "700"), t(sr, "letter-spacing", "0"), t(c2, "word-spacing", "0"), t(c2, "class", "cp-button-label"), p(c2, "line-height", "125%"), t(U0, "fill", "#fff"), t(U0, "d", "M98 1300.2c-1 0-2 .2-2.6.8a4 4 0 0 0-.9 2.7c0 1 .2 1.9.8 2.5.4.4 1 .7 1.7.8-.3.7-.7 1.3-1.5 1.8l-.2.1v3.1l.6-.2a7.8 7.8 0 0 0 4.2-2.7 8 8 0 0 0 1.4-4.9c0-1.2-.3-2.3-.9-3-.6-.7-1.5-1-2.6-1z"), t(U0, "font-family", "Britannic Bold"), t(U0, "font-size", "35"), t(U0, "font-weight", "400"), t(U0, "letter-spacing", "0"), t(U0, "transform", "translate(0 -411.6)"), t(d2, "word-spacing", "0"), t(d2, "class", "cp-button-label"), p(d2, "line-height", "125%"), t(z0, "fill", "#fff"), t(z0, "d", "m808.1 955-2.6 2.5-1.1-1-1.3-1.3q-2-1.9-2.5-2.6-.6-1-.6-2v-10.8q0-1 .6-2 .6-.9 2.3-2.5l1-1 1.6-1.4 2.6 2.5-1.4 1.2-2.1 2.1q-1 1-1 1.2v10.6q0 .3 1.8 2l2.7 2.5zm17.4-8h-13.6v-3.3h13.6v3.3zm10.6 3.6q0 1.1-.5 2-.6.8-2.5 2.6l-2.5 2.3-2.5-2.6 2.6-2.3q1.8-1.8 1.8-2.1v-10.6q0-.3-1-1.2-.8-1-2-2l-1.4-1.3 2.5-2.5 1.1 1 1.6 1.4q1.6 1.6 2.3 2.6.5.8.5 2v10.7z"), t(z0, "font-family", "Blender Pro"), t(z0, "font-size", "35"), t(z0, "font-weight", "700"), t(z0, "letter-spacing", "0"), t(z0, "transform", "translate(-720)"), t(h2, "word-spacing", "0"), t(h2, "class", "cp-button-label"), p(h2, "line-height", "125%"), t(O0, "fill", "#fff"), t(O0, "d", "M482.4 1061.8h-10q-.6 0-.6-.5V1042q0-.5.6-.5h10q.5 0 .5.5v1.6q0 .6-.5.6h-7.1q-.4 0-.4.3v5.3q0 .3.4.3h6q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.4.3h7.1q.5 0 .5.6v1.6q0 .5-.5.5zm5.9 0h-2.4l-.4-.1v-.4l5.3-10-5-9.2v-.3q0-.2.3-.2h2.3q.6 0 .9.5l3.6 7.3h.1l3.6-7.3q.3-.5.8-.5h2.4q.2 0 .3.2.1.2 0 .4l-5 9.1 5.2 10q.1.2 0 .4l-.3.1h-2.4q-.5 0-.7-.5l-3.9-7.7h-.1l-3.9 7.7q-.2.5-.7.5zm25.8 0h-10q-.6 0-.6-.5V1042q0-.5.5-.5h10.1q.5 0 .5.5v1.6q0 .6-.5.6H507q-.3 0-.3.3v5.3q0 .3.3.3h6.1q.6 0 .6.5v1.6q0 .6-.6.6h-6q-.4 0-.4.3v5.6q0 .3.3.3h7.2q.5 0 .5.6v1.6q0 .5-.5.5z"), t(O0, "font-family", "Rajdhani"), t(O0, "font-size", "31.5"), t(O0, "font-weight", "600"), t(O0, "letter-spacing", "0"), t(O0, "transform", "scale(1.1 .9)"), t(f2, "word-spacing", "0"), t(f2, "class", "cp-button-label"), p(f2, "line-height", "125%"), t(cr, "fill", "#fff"), t(cr, "d", "M552.6 889.9h8.5q1.2 0 1.2 1.2v2.5q0 1.2-1.2 1.2h-8.5v8.7q0 1.2-1.2 1.2h-2.7q-1.2 0-1.2-1.2v-8.7H539q-1.2 0-1.2-1.2v-2.5q0-1.2 1.2-1.2h8.6v-8.6q0-1.2 1.2-1.2h2.7q1.2 0 1.2 1.2v8.6z"), t(cr, "font-family", "Rajdhani"), t(cr, "font-size", "60"), t(cr, "font-weight", "600"), t(cr, "letter-spacing", "0"), t(p2, "word-spacing", "0"), t(p2, "class", "cp-button-label"), p(p2, "line-height", "125%"), t(dr, "fill", "#fff"), t(dr, "d", "M559.3 840H539q-1 0-1-1v-1.3q0-1 1-1h20.3q1 0 1 1v1.3q0 1-1 1z"), t(dr, "font-family", "Rajdhani"), t(dr, "font-size", "60"), t(dr, "font-weight", "600"), t(dr, "letter-spacing", "0"), t(u2, "word-spacing", "0"), t(u2, "class", "cp-button-label"), p(u2, "line-height", "125%"), t(hr, "fill", "#fff"), t(hr, "d", "m552.6 784 6.3 6.4q.8.7 0 1.6l-2 1.9q-.7.9-1.6 0l-6.3-6.3-6.3 6.4q-.9.8-1.6-.1l-2-2q-.8-.8 0-1.5l6.3-6.4-6.3-6.2q-.8-.9 0-1.7l2-2q.8-.8 1.6 0l6.3 6.3 6.3-6.2q.8-.9 1.6 0l2 2q.7.7 0 1.6l-6.3 6.2z"), t(hr, "font-family", "Rajdhani"), t(hr, "font-size", "60"), t(hr, "font-weight", "600"), t(hr, "letter-spacing", "0"), t(g2, "word-spacing", "0"), t(g2, "class", "cp-button-label"), p(g2, "line-height", "125%"), t(fr, "fill", "#fff"), t(fr, "d", "M547 740.3v-3.2q0-1 1-1 h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1zm11.1-7.9H540q-1.1 0-1.1-1v-2q0-1 1-1h18.2q1 0 1 1v2q0 1-1 1zm-11.1-8.8v-3.1q0-1.1 1-1.1h2q1.1 0 1.1 1v3.2q0 1-1 1h-2q-1.1 0-1.1-1z"), t(fr, "font-family", "Rajdhani"), t(fr, "font-size", "60"), t(fr, "font-weight", "600"), t(fr, "letter-spacing", "0"), t(x2, "word-spacing", "0"), t(x2, "class", "cp-button-label"), p(x2, "line-height", "125%"), t(pr, "fill", "#fff"), t(pr, "d", "M450.5 738.4H447q-1.3 0-.7-1.1l7.4-14.2q.5-1 .9-1.2.4-.3 1.3-.3h4.2q.9 0 1.3.3t.9 1.2l7.4 14.2q.6 1-.7 1h-3.4q-1 0-1.4-1l-6.2-12-6.2 12q-.6 1-1.4 1z"), t(pr, "font-family", "Rajdhani"), t(pr, "font-size", "60"), t(pr, "font-weight", "600"), t(pr, "letter-spacing", "0"), t(v2, "word-spacing", "0"), t(v2, "class", "cp-button-label"), p(v2, "line-height", "125%"), t(ur, "fill", "#fff"), t(ur, "d", "M101.6 619.1h-1.5q-.4 0-.4-.3v-12.2q0-.4.4-.4h1.5q.4 0 .4.4v6.3h.1l.6-1 4.5-5.3q.3-.4.8-.4h1.7q.5 0 .2.4l-4.6 5.3 5.2 6.8q.2.4-.3.4h-1.3q-.7 0-1-.3l-4-5.5-1.9 1.9v3.6q0 .3-.4.3zm19.4 0h-5.2q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.7 0 2.7.8 1 .8 1 2.3v2.5q0 .4-.5.4h-6.3q-.2 0-.2.2v.9q0 1.4 1.7 1.4h4.7q.4 0 .4.4v1q0 .3-.4.3zm-6.3-5.6h4.2q.3 0 .3-.2v-1.2q0-.8-.4-1.1-.4-.4-1.3-.4h-1.3q-1 0-1.3.4-.4.3-.4 1v1.3q0 .2.2.2zm10.7 8.9h-1.2q-.4 0-.4-.4v-1q0-.4.4-.4h.5q1.5 0 2-.5.6-.4 1-1.5h-1q-.4 0-.5-.4l-3.1-9q-.1-.3.3-.3h1.6q.3 0 .4.3l2.6 7.9 2.7-7.9q0-.3.4-.3h1.5q.5 0 .4.3l-3.2 9.7q-.6 1.7-1.5 2.6-1 .9-2.9.9zm12.1-5h3q1.7 0 1.7-1.5v-4q0-1.4-1.7-1.4h-1.3q-2 0-2 1.7v5q0 .2.3.2zm-2.5 1.4v-13.4q0-.4.4-.4h1.5q.4 0 .4.4v4.5q.7-1 2.5-1h1q1.7 0 2.7.7 1 .8 1 2.3v4.1q0 1.5-1 2.3-1 .8-2.7.8h-5.4q-.4 0-.4-.3zm17.7.3h-2.1q-1.7 0-2.7-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h2q1.8 0 2.8.8 1 .8 1 2.3v4q0 1.5-1 2.3-1 .8-2.7.8zm-1.8-1.7h1.5q1.7 0 1.7-1.5v-3.8q0-1.5-1.7-1.5h-1.5q-.9 0-1.3.4-.4.3-.4 1v4q0 .7.4 1 .4.4 1.3.4zm12.5 1.7h-1q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3 1-.8 2.7-.8h5.2q.5 0 .5.3v9.6q0 .3-.5.3h-1.4q-.4 0-.4-.3v-.8h-.1q-.6 1.1-2.4 1.1zm2.5-3.4v-5l-.3-.1h-2.8q-1.7 0-1.7 1.5v3.8q0 1.5 1.7 1.5h1.1q2 0 2-1.7zm7.1 3.4h-1.5q-.4 0-.4-.3v-9.6q0-.3.4-.3h1.5q.4 0 .4.3v.8q.3-.5 1-.8.6-.3 1.5-.3h.8q.4 0 .4.3v1q0 .5-.4.4h-1.4q-2 0-2 1.8v6.4q0 .3-.3.3zm10.5 0h-1.2q-1.7 0-2.6-.8-1-.8-1-2.3v-4q0-1.5 1-2.3.9-.8 2.6-.8h1.2q1.8 0 2.3 1h.1v-4.5q0-.4.4-.4h1.5q.4 0 .4.4v13.4q0 .3-.4.3h-1.5q-.4 0-.4-.3v-.8q-.6 1.1-2.4 1.1zm2.4-3.4v-3.4q0-1.7-2-1.7h-1.2q-1.6 0-1.6 1.5v3.8q0 1.5 1.6 1.5h1.3q2 0 2-1.7z"), t(ur, "font-family", "Rajdhani"), t(ur, "font-size", "25"), t(ur, "font-weight", "600"), t(ur, "letter-spacing", "0"), t(y2, "word-spacing", "0"), t(y2, "class", "cp-button-label"), p(y2, "line-height", "125%"), t(S0, "fill", "#42caf7"), t(S0, "d", "M118.6 667.2v-.6q0-.4.4-.4h1.6q.4 0 .4.4v.4q0 1.1.5 1.6.4.4 1.5.4h1.7q1.1 0 1.6-.5t.5-1.6v-.5q0-.8-.7-1.3-.6-.5-1.5-.6l-2-.4-2-.6q-.8-.3-1.4-1.2-.6-.9-.6-2.3v-1q0-1.9 1-2.9t2.9-1h2.6q1.9 0 2.9 1t1 2.9v.5q0 .4-.4.4H127q-.4 0-.4-.4v-.3q0-1-.5-1.5-.4-.5-1.5-.5H123q-1 0-1.5.5t-.5 1.6v.8q0 1.1 1.6 1.5l1.6.3 1.8.4 1.6.7q.7.4 1.1 1.2.5.9.5 2v1q0 1.9-1 3-1.1 1-3 1h-2.7q-1.8 0-2.9-1-1-1.1-1-3zm15.7 3.9h-1.6q-.4 0-.4-.4V654q0-.4.4-.4h1.6q.4 0 .4.4v5.7h.1q.6-1.3 2.6-1.3h1q1.9 0 2.9 1t1 2.9v8.4q0 .4-.5.4h-1.6q-.4 0-.4-.4v-8.3q0-1.9-1.8-1.9h-1.2q-2 0-2 2.1v8.1q0 .4-.5.4zm11.1-14.8V654q0-.4.4-.4h1.6q.4 0 .4.4v2.3q0 .4-.4.4h-1.6q-.4 0-.4-.4zm0 14.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v12.3h-2q-.4 0-.4-.4zm9.6-12.3h2q.5 0 .5.4v1.3q0 .4-.5.4h-2q-.3 0-.3.3v10q0 .3-.5.3h-1.6q-.4 0-.4-.4v-10q0-.2-.3-.2h-1.3q-.4 0-.4-.4v-1.6l.4-.1h1.3q.3 0 .3-.3v-.7q0-1.8 1-2.8 1-1 2.7-1h1.1q.5 0 .5.4v1.3q0 .4-.5.4h-.7q-.9 0-1.3.4-.3.5-.3 1.4v.6q0 .3.2.3zm4.8 2.1h-1.5v-1.8q0-.4.3-.4h1.2q.3 0 .3-.3v-2q0-.4.4-.4h1.6q.4 0 .4.4v2.2q0 .3.3.3h2.3q.5 0 .5.4v1.3q0 .4-.5.4h-2.3q-.3 0-.3.3v6.4q0 1.8 2 1.8h.9q.4 0 .4.4v1.3q0 .4-.4.4H164q-1.8 0-2.9-1-1-1-1-2.8v-6.5q0-.3-.3-.3z"), t(S0, "font-family", "Rajdhani"), t(S0, "font-size", "25"), t(S0, "font-weight", "600"), t(S0, "letter-spacing", "0"), p(S0, "text-align", "center"), t(gr, "text-anchor", "middle"), t(gr, "word-spacing", "0"), t(gr, "class", "cp-button-label"), p(gr, "line-height", "125%"), p(gr, "text-align", "center"), t(M0, "fill", "#fff"), t(M0, "d", "M503.8 671.1H501q-1.8 0-2.9-1-1-1-1-2.8v-8.4q0-1.8 1-2.8 1-1 3-1h2.8q1.8 0 2.9 1 1 1 1 2.8v1.2q0 .5-.5.5h-1.5q-.5 0-.5-.5v-1q0-1.9-1.8-1.9h-2.1q-1.8 0-1.8 1.8v8.2q0 1.8 1.8 1.8h2.1q1.8 0 1.8-1.8V666q0-.5.5-.5h1.5q.5 0 .5.5v1.2q0 1.8-1 2.8-1 1-2.9 1zm8.8 0h-1.5q-.5 0-.5-.4V654q0-.4.5-.4h1.5q.5 0 .5.4v16.7q0 .4-.5.4zm12.8 0H520q-1.9 0-3-1-1-1-1-2.8v-5q0-1.9 1-2.9 1.1-1 3-1h2q1.9 0 2.9 1t1 2.9v3.1q0 .5-.4.5h-6.7q-.3 0-.3.2v1.1q0 1.8 1.8 1.8h5q.5 0 .5.5v1.2q0 .4-.4.4zm-6.6-6.9h4.4q.3 0 .3-.3v-1.6q0-.9-.4-1.3-.5-.5-1.4-.5h-1.4q-1 0-1.4.5-.4.4-.4 1.3v1.6q0 .3.3.3zm14.4 6.9h-1q-1.8 0-2.8-1-1-1-1-2.8v-5q0-1.9 1-2.9t2.9-1h5.6q.4 0 .4.4v12q0 .3-.4.3h-1.6q-.4 0-.4-.4v-.9h-.1q-.6 1.3-2.6 1.3zm2.7-4.2v-6.1q0-.3-.3-.3h-3q-1.8 0-1.8 1.9v4.8q0 1.8 1.8 1.8h1.2q2 0 2-2.1zm7.5 4.2h-1.6q-.4 0-.4-.4v-11.9q0-.4.4-.4h1.6q.4 0 .4.4v1h.1q.3-.7 1-1 .7-.4 1.6-.4h1q.3 0 .3.4v1.3q0 .5-.4.4H546q-2 0-2 2.3v8q0 .3-.5.3z"), t(M0, "font-family", "Rajdhani"), t(M0, "font-size", "25"), t(M0, "font-weight", "600"), t(M0, "letter-spacing", "0"), p(M0, "text-align", "center"), t(xr, "text-anchor", "middle"), t(xr, "word-spacing", "0"), t(xr, "class", "cp-button-label"), p(xr, "line-height", "125%"), p(xr, "text-align", "center"), t(S, "fill", "#42caf7"), t(S, "d", "M473.6 656.2a1.5 1.5 0 0 0-1 2.6 6.5 6.5 0 1 1-9.2 0 1.5 1.5 0 1 0-2.1-2.2 9.5 9.5 0 1 0 13.4 0 1.5 1.5 0 0 0-1-.4z"), t(S, "color", "#000"), t(S, "font-family", "sans-serif"), t(S, "font-weight", "400"), t(S, "overflow", "visible"), t(S, "class", "cp-button-label"), p(S, "line-height", "normal"), p(S, "text-indent", "0px"), p(S, "text-align", "start"), p(S, "text-decoration-line", "none"), p(S, "text-decoration-style", "solid"), p(S, "text-decoration-color", "rgb(0, 0, 0)"), p(S, "text-transform", "none"), p(S, "white-space", "normal"), p(S, "isolation", "auto"), p(S, "mix-blend-mode", "normal"), t(M, "fill", "#42caf7"), t(M, "d", "M468 652.4c-.8 0-1.5.6-1.5 1.5v10c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10c0-.9-.7-1.5-1.5-1.5z"), t(M, "color", "#000"), t(M, "font-family", "sans-serif"), t(M, "font-weight", "400"), t(M, "overflow", "visible"), t(M, "class", "cp-button-label"), p(M, "line-height", "normal"), p(M, "text-indent", "0px"), p(M, "text-align", "start"), p(M, "text-decoration-line", "none"), p(M, "text-decoration-style", "solid"), p(M, "text-decoration-color", "rgb(0, 0, 0)"), p(M, "text-transform", "none"), p(M, "white-space", "normal"), p(M, "isolation", "auto"), p(M, "mix-blend-mode", "normal"), t(q2, "fill", "#fff"), t(q2, "fill-rule", "evenodd"), t(q2, "d", "m500 607.4-12 6.9 12.2 7v-4H520v-6h-20z"), t(q2, "class", "cp-button-label"), t(ql, "fill", "#222"), t(ql, "fill-rule", "evenodd"), t(ql, "d", "m1210-959.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(ml, "fill", "#1c1c1c"), t(ml, "fill-rule", "evenodd"), t(ml, "d", "M1210-959.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(It, "width", "20"), t(It, "height", "18"), t(It, "x", "1200"), t(It, "y", "-941.6"), t(It, "fill", "#7e7e7e"), t(It, "fill-opacity", ".2"), t(It, "rx", "0"), t(It, "ry", "0"), t(bl, "fill", "#272727"), t(bl, "fill-rule", "evenodd"), t(bl, "d", "m1275-897.6-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3zm30 0-10 6 5 3 5-3 5 3 5-3zm-15 9-10 6 5 3 5-3 5 3 5-3z"), t(wl, "fill", "#222"), t(wl, "fill-rule", "evenodd"), t(wl, "d", "m1275-909.6-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6zm30 0-5 3v6l-5 3v6l10-6zm-15 9-5 3v6l-5 3v6l10-6z"), t(kl, "fill", "#1c1c1c"), t(kl, "fill-rule", "evenodd"), t(kl, "d", "M1275-909.6v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6zm30 0v12l10 6v-6l-5-3v-6zm-15 9v12l10 6v-6l-5-3v-6z"), t(Nt, "width", "20"), t(Nt, "height", "18"), t(Nt, "x", "1265"), t(Nt, "y", "-891.6"), t(Nt, "fill", "#7e7e7e"), t(Nt, "fill-opacity", ".2"), t(Nt, "rx", "0"), t(Nt, "ry", "0"), t(c, "transform", "translate(0 411.6)"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), t(n, "viewBox", "0 0 648 1464");
    },
    m(wn, Vn) {
      z(wn, n, Vn), e(n, l), e(l, i), e(i, o), e(i, d), e(i, h), e(i, u), e(l, g), e(g, f), e(g, $), e(g, v), e(g, V), e(g, b), e(l, k), e(k, E), e(k, C), e(k, wt), e(k, O), e(l, G), e(G, q), e(G, H), e(G, Et), e(G, vr), e(G, kt), e(l, Q), e(Q, yr), e(Q, jt), e(Q, qr), e(Q, Gt), e(l, Ut), e(Ut, Ht), e(Ut, Zt), e(l, Qt), e(Qt, m), e(Qt, Kr), e(Qt, Ol), e(Qt, Sl), e(l, mr), e(mr, Ml), e(mr, $l), e(mr, _l), e(mr, El), e(l, G2), e(G2, jl), e(G2, Cl), e(l, U2), e(U2, Hl), e(U2, Ql), e(l, z2), e(z2, Dl), e(z2, Kl), e(l, O2), e(O2, Yl), e(O2, S2), e(l, Yr), e(Yr, M2), e(Yr, $2), e(Yr, _2), e(l, Br), e(Br, E2), e(Br, j2), e(Br, C2), e(l, br), e(br, Bl), e(br, Rl), e(br, Vl), e(br, Ll), e(l, $0), e($0, Pl), e($0, Al), e($0, Tl), e($0, Fl), e($0, Il), e(l, H2), e(H2, Nl), e(H2, Q2), e(l, wr), e(wr, Zl), e(wr, Wl), e(wr, Xl), e(wr, D2), e(l, Rr), e(Rr, Jl), e(Rr, K2), e(Rr, Y2), e(l, Vr), e(Vr, tn), e(Vr, B2), e(Vr, R2), e(l, V2), e(V2, en), e(V2, L2), e(l, P2), e(P2, rn), e(P2, A2), e(l, Lr), e(Lr, ln), e(Lr, T2), e(Lr, nn), e(l, Dt), e(Dt, an), e(Dt, on), e(Dt, sn), e(Dt, cn), e(Dt, dn), e(Dt, hn), e(Dt, fn), e(l, Wt), e(l, Xt), e(l, Jt), e(l, te), e(l, ee), e(l, re), e(l, le), e(l, ne), e(l, ae), e(l, ie), e(l, oe), e(l, se), e(l, ce), e(l, de), e(l, he), e(l, fe), e(l, pe), e(l, ue), e(l, ge), e(l, xe), e(l, ve), e(l, ye), e(l, qe), e(l, me), e(l, be), e(l, we), e(l, ke), e(l, Ge), e(l, Ue), e(l, ze), e(l, Oe), e(l, Se), e(l, Me), e(l, $e), e(l, _e), e(l, Ee), e(l, je), e(l, Ce), e(l, He), e(l, Qe), e(l, De), e(l, Ke), e(l, Ye), e(l, Be), e(l, Re), e(l, Ve), e(l, Le), e(l, Pe), e(l, Ae), e(l, Te), e(l, Fe), e(l, Ie), e(l, Ne), e(l, Ze), e(l, We), e(l, Xe), e(l, Je), e(l, t1), e(l, e1), e(l, r1), e(l, l1), e(l, n1), e(l, a1), e(l, i1), e(l, Kt), e(l, Yt), e(l, Bt), e(l, o1), e(l, s1), e(l, c1), e(l, d1), e(l, h1), e(l, f1), e(l, p1), e(l, u1), e(l, g1), e(l, x1), e(l, v1), e(l, y1), e(l, q1), e(l, m1), e(l, b1), e(l, w1), e(l, k1), e(l, G1), e(l, U1), e(l, z1), e(l, O1), e(l, S1), e(l, M1), e(l, $1), e(l, _1), e(l, E1), e(l, j1), e(l, C1), e(l, H1), e(l, Q1), e(l, D1), e(l, K1), e(l, Y1), e(l, B1), e(l, zt), e(zt, kr), e(zt, F2), e(zt, I2), e(l, R1), e(n, _), e(_, Pr), e(_, N2), e(_, Ar), e(_, Gr), e(_, Ot), e(_, St), e(_, Mt), e(_, $t), e(_, Rt), e(_, Vt), e(_, Lt), e(_, _0), e(_0, L), e(_0, V1), e(_0, Z2), e(_, pn), e(pn, un), e(n, gn), e(gn, E0), e(E0, xn), e(n, c), e(c, W2), e(c, X2), e(c, J2), e(c, Tr), e(c, Fr), e(c, Ur), e(Ur, P), e(Ur, L1), e(Ur, tl), e(c, j0), e(j0, A), e(j0, P1), e(j0, el), e(c, C0), e(C0, T), e(C0, A1), e(C0, rl), e(c, H0), e(H0, F), e(H0, T1), e(H0, ll), e(c, Q0), e(Q0, I), e(Q0, F1), e(Q0, nl), e(c, D0), e(D0, N), e(D0, I1), e(D0, al), e(c, K0), e(K0, Z), e(K0, N1), e(K0, il), e(c, Y0), e(Y0, W), e(Y0, Z1), e(Y0, ol), e(c, B0), e(B0, X), e(B0, W1), e(B0, sl), e(c, R0), e(R0, J), e(R0, X1), e(R0, cl), e(c, V0), e(V0, tt), e(V0, J1), e(V0, dl), e(c, L0), e(L0, et), e(L0, t0), e(L0, hl), e(c, P0), e(P0, rt), e(P0, e0), e(P0, fl), e(c, A0), e(A0, lt), e(A0, r0), e(A0, pl), e(c, T0), e(T0, nt), e(T0, l0), e(T0, ul), e(c, F0), e(F0, at), e(F0, n0), e(F0, gl), e(c, I0), e(I0, it), e(I0, a0), e(I0, xl), e(c, vn), e(c, yn), e(c, qn), e(c, i0), e(c, o0), e(c, s0), e(c, c0), e(c, _t), e(c, Pt), e(c, At), e(c, Tt), e(c, vl), e(c, zr), e(zr, ot), e(zr, d0), e(c, Or), e(Or, st), e(Or, h0), e(c, Sr), e(Sr, ct), e(Sr, f0), e(c, Mr), e(Mr, dt), e(Mr, p0), e(c, $r), e($r, ht), e($r, u0), e(c, _r), e(_r, ft), e(_r, g0), e(c, Er), e(Er, pt), e(Er, x0), e(c, jr), e(jr, ut), e(jr, v0), e(c, Ft), e(c, Cr), e(Cr, gt), e(Cr, y0), e(c, Hr), e(Hr, xt), e(Hr, q0), e(c, Qr), e(Qr, vt), e(Qr, m0), e(c, Dr), e(Dr, yt), e(Dr, b0), e(c, Ir), e(Ir, N0), e(c, Nr), e(Nr, w0), e(c, qt), e(qt, Z0), e(Z0, Sn), e(qt, Mn), e(c, Zr), e(Zr, W0), e(c, Wr), e(Wr, X0), e(c, Xr), e(Xr, J0), e(c, Jr), e(Jr, tr), e(c, t2), e(t2, er), e(c, e2), e(e2, rr), e(c, r2), e(r2, lr), e(c, l2), e(l2, nr), e(c, n2), e(n2, ar), e(c, a2), e(a2, k0), e(c, yl), e(c, Ct), e(c, i2), e(i2, G0), e(c, o2), e(o2, ir), e(c, s2), e(s2, or), e(c, c2), e(c2, sr), e(c, d2), e(d2, U0), e(c, h2), e(h2, z0), e(c, f2), e(f2, O0), e(c, p2), e(p2, cr), e(c, u2), e(u2, dr), e(c, g2), e(g2, hr), e(c, x2), e(x2, fr), e(c, v2), e(v2, pr), e(c, y2), e(y2, ur), e(c, gr), e(gr, S0), e(c, xr), e(xr, M0), e(c, S), e(c, M), e(c, q2), e(c, ql), e(c, ml), e(c, It), e(c, bl), e(c, wl), e(c, kl), e(c, Nt);
    },
    p: x,
    i: x,
    o: x,
    d(wn) {
      wn && w(n);
    }
  };
}
class Da extends R {
  constructor(n) {
    super(), B(this, n, null, Qa, j, {});
  }
}
function Ka(a) {
  let n, l, i, o, d, h, u, g, f, $, v, V, b, k, E, C, wt, O, G;
  return l = new sa({}), f = new Da({}), v = new ua({}), b = new ha({}), E = new ja({}), E.$on(
    "romChanged",
    /*doRomLoad*/
    a[0]
  ), O = new xa({}), {
    c() {
      n = y("main"), bt(l.$$.fragment), i = U(), o = y("div"), d = y("div"), d.innerHTML = `<img src="${ia}" alt="RuK Logo" class="svelte-1ww1402"/> <span class="svelte-1ww1402">RuK UI</span>`, h = U(), u = y("div"), g = y("div"), bt(f.$$.fragment), $ = U(), bt(v.$$.fragment), V = U(), bt(b.$$.fragment), k = U(), bt(E.$$.fragment), C = U(), wt = y("div"), bt(O.$$.fragment), t(d, "class", "logo svelte-1ww1402"), t(g, "id", "classpad"), p(g, "--zoomFactor", "1.5"), t(g, "class", "svelte-1ww1402"), t(u, "class", "calc-container svelte-1ww1402"), p(wt, "display", "none"), t(o, "class", "container svelte-1ww1402");
    },
    m(q, H) {
      z(q, n, H), K(l, n, null), e(n, i), e(n, o), e(o, d), e(o, h), e(o, u), e(u, g), K(f, g, null), e(u, $), K(v, u, null), e(u, V), K(b, u, null), e(o, k), K(E, o, null), e(o, C), e(o, wt), K(O, wt, null), G = !0;
    },
    p: x,
    i(q) {
      G || (D(l.$$.fragment, q), D(f.$$.fragment, q), D(v.$$.fragment, q), D(b.$$.fragment, q), D(E.$$.fragment, q), D(O.$$.fragment, q), G = !0);
    },
    o(q) {
      mt(l.$$.fragment, q), mt(f.$$.fragment, q), mt(v.$$.fragment, q), mt(b.$$.fragment, q), mt(E.$$.fragment, q), mt(O.$$.fragment, q), G = !1;
    },
    d(q) {
      q && w(n), Y(l), Y(f), Y(v), Y(b), Y(E), Y(O);
    }
  };
}
function Ya(a, n, l) {
  Kn(async () => {
    ca();
  });
  const i = async (d) => {
    console.log(d.detail), Rn.set("loading");
    var h = d.detail.target.files[0];
    h && Ha(h, h.name).then(() => {
      console.log(h.name), En.set(h.name);
      let u = Tn(En);
      u && window.Module.ccall("startInterpreter", null, ["string"], [u]);
    }).catch((u) => {
      console.error("Error loading file:", u);
    });
  };
  let { ide: o = !0 } = n;
  return a.$$set = (d) => {
    "ide" in d && l(1, o = d.ide);
  }, [i, o];
}
class Ba extends R {
  constructor(n) {
    super(), B(this, n, Ya, Ka, j, { ide: 1 });
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
