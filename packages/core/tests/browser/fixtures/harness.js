// ../../node_modules/.pnpm/preact@10.29.3/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var a;
var s;
var h;
var p;
var v;
var y;
var d = {};
var w = [];
var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var g = Array.isArray;
function m(n2, l3) {
  for (var u4 in l3) n2[u4] = l3[u4];
  return n2;
}
function b(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function k(l3, u4, t3) {
  var i3,
    r3,
    o3,
    e3 = {};
  for (o3 in u4) "key" == o3 ? (i3 = u4[o3]) : "ref" == o3 ? (r3 = u4[o3]) : (e3[o3] = u4[o3]);
  if (
    (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3),
    "function" == typeof l3 && null != l3.defaultProps)
  )
    for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
  return x(l3, e3, i3, r3, null);
}
function x(n2, t3, i3, r3, o3) {
  var e3 = {
    type: n2,
    props: t3,
    key: i3,
    ref: r3,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: null == o3 ? ++u : o3,
    __i: -1,
    __u: 0,
  };
  return (null == o3 && null != l.vnode && l.vnode(e3), e3);
}
function S(n2) {
  return n2.children;
}
function C(n2, l3) {
  ((this.props = n2), (this.context = l3));
}
function $(n2, l3) {
  if (null == l3) return n2.__ ? $(n2.__, n2.__i + 1) : null;
  for (var u4; l3 < n2.__k.length; l3++)
    if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n2.type ? $(n2) : null;
}
function I(n2) {
  if (n2.__P && n2.__d) {
    var u4 = n2.__v,
      t3 = u4.__e,
      i3 = [],
      r3 = [],
      o3 = m({}, u4);
    ((o3.__v = u4.__v + 1),
      l.vnode && l.vnode(o3),
      q(
        n2.__P,
        o3,
        u4,
        n2.__n,
        n2.__P.namespaceURI,
        32 & u4.__u ? [t3] : null,
        i3,
        null == t3 ? $(u4) : t3,
        !!(32 & u4.__u),
        r3,
      ),
      (o3.__v = u4.__v),
      (o3.__.__k[o3.__i] = o3),
      D(i3, o3, r3),
      (u4.__e = u4.__ = null),
      o3.__e != t3 && P(o3));
  }
}
function P(n2) {
  if (null != (n2 = n2.__) && null != n2.__c)
    return (
      (n2.__e = n2.__c.base = null),
      n2.__k.some(function (l3) {
        if (null != l3 && null != l3.__e) return (n2.__e = n2.__c.base = l3.__e);
      }),
      P(n2)
    );
}
function A(n2) {
  ((!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++) || r != l.debounceRendering) &&
    ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n2, l3 = 1; i.length;)
      (i.length > l3 && i.sort(e), (n2 = i.shift()), (l3 = i.length), I(n2));
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n2, l3, u4, t3, i3, r3, o3, e3, f4, c3, a3) {
  var s3,
    h2,
    p3,
    v3,
    y2,
    _3,
    g2,
    m3 = (t3 && t3.__k) || w,
    b2 = l3.length;
  for (f4 = T(u4, l3, m3, f4, b2), s3 = 0; s3 < b2; s3++)
    null != (p3 = u4.__k[s3]) &&
      ((h2 = (-1 != p3.__i && m3[p3.__i]) || d),
      (p3.__i = s3),
      (_3 = q(n2, p3, h2, i3, r3, o3, e3, f4, c3, a3)),
      (v3 = p3.__e),
      p3.ref &&
        h2.ref != p3.ref &&
        (h2.ref && J(h2.ref, null, p3), a3.push(p3.ref, p3.__c || v3, p3)),
      null == y2 && null != v3 && (y2 = v3),
      (g2 = !!(4 & p3.__u)) || h2.__k === p3.__k
        ? ((f4 = j(p3, f4, n2, g2)), g2 && h2.__e && (h2.__e = null))
        : "function" == typeof p3.type && void 0 !== _3
          ? (f4 = _3)
          : v3 && (f4 = v3.nextSibling),
      (p3.__u &= -7));
  return ((u4.__e = y2), f4);
}
function T(n2, l3, u4, t3, i3) {
  var r3,
    o3,
    e3,
    f4,
    c3,
    a3 = u4.length,
    s3 = a3,
    h2 = 0;
  for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++)
    null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3
      ? ("string" == typeof o3 ||
        "number" == typeof o3 ||
        "bigint" == typeof o3 ||
        o3.constructor == String
          ? (o3 = n2.__k[r3] = x(null, o3, null, null, null))
          : g(o3)
            ? (o3 = n2.__k[r3] = x(S, { children: o3 }, null, null, null))
            : void 0 === o3.constructor && o3.__b > 0
              ? (o3 = n2.__k[r3] = x(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v))
              : (n2.__k[r3] = o3),
        (f4 = r3 + h2),
        (o3.__ = n2),
        (o3.__b = n2.__b + 1),
        (e3 = null),
        -1 != (c3 = o3.__i = O(o3, u4, f4, s3)) && (s3--, (e3 = u4[c3]) && (e3.__u |= 2)),
        null == e3 || null == e3.__v
          ? (-1 == c3 && (i3 > a3 ? h2-- : i3 < a3 && h2++),
            "function" != typeof o3.type && (o3.__u |= 4))
          : c3 != f4 &&
            (c3 == f4 - 1 ? h2-- : c3 == f4 + 1 ? h2++ : (c3 > f4 ? h2-- : h2++, (o3.__u |= 4))))
      : (n2.__k[r3] = null);
  if (s3)
    for (r3 = 0; r3 < a3; r3++)
      null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = $(e3)), K(e3, e3));
  return t3;
}
function j(n2, l3, u4, t3) {
  var i3, r3;
  if ("function" == typeof n2.type) {
    for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++)
      i3[r3] && ((i3[r3].__ = n2), (l3 = j(i3[r3], l3, u4, t3)));
    return l3;
  }
  n2.__e != l3 &&
    (t3 && (l3 && n2.type && !l3.parentNode && (l3 = $(n2)), u4.insertBefore(n2.__e, l3 || null)),
    (l3 = n2.__e));
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function O(n2, l3, u4, t3) {
  var i3,
    r3,
    o3,
    e3 = n2.key,
    f4 = n2.type,
    c3 = l3[u4],
    a3 = null != c3 && 0 == (2 & c3.__u);
  if ((null === c3 && null == e3) || (a3 && e3 == c3.key && f4 == c3.type)) return u4;
  if (t3 > (a3 ? 1 : 0)) {
    for (i3 = u4 - 1, r3 = u4 + 1; i3 >= 0 || r3 < l3.length;)
      if (
        null != (c3 = l3[(o3 = i3 >= 0 ? i3-- : r3++)]) &&
        0 == (2 & c3.__u) &&
        e3 == c3.key &&
        f4 == c3.type
      )
        return o3;
  }
  return -1;
}
function z(n2, l3, u4) {
  "-" == l3[0]
    ? n2.setProperty(l3, null == u4 ? "" : u4)
    : (n2[l3] = null == u4 ? "" : "number" != typeof u4 || _.test(l3) ? u4 : u4 + "px");
}
function N(n2, l3, u4, t3, i3) {
  var r3, o3;
  n: if ("style" == l3)
    if ("string" == typeof u4) n2.style.cssText = u4;
    else {
      if (("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3))
        for (l3 in t3) (u4 && l3 in u4) || z(n2.style, l3, "");
      if (u4) for (l3 in u4) (t3 && u4[l3] == t3[l3]) || z(n2.style, l3, u4[l3]);
    }
  else if ("o" == l3[0] && "n" == l3[1])
    ((r3 = l3 != (l3 = l3.replace(s, "$1"))),
      (o3 = l3.toLowerCase()),
      (l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2)),
      n2.l || (n2.l = {}),
      (n2.l[l3 + r3] = u4),
      u4
        ? t3
          ? (u4[a] = t3[a])
          : ((u4[a] = h), n2.addEventListener(l3, r3 ? v : p, r3))
        : n2.removeEventListener(l3, r3 ? v : p, r3));
  else {
    if ("http://www.w3.org/2000/svg" == i3)
      l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      "width" != l3 &&
      "height" != l3 &&
      "href" != l3 &&
      "list" != l3 &&
      "form" != l3 &&
      "tabIndex" != l3 &&
      "download" != l3 &&
      "rowSpan" != l3 &&
      "colSpan" != l3 &&
      "role" != l3 &&
      "popover" != l3 &&
      l3 in n2
    )
      try {
        n2[l3] = null == u4 ? "" : u4;
        break n;
      } catch (n3) {}
    "function" == typeof u4 ||
      (null == u4 || (false === u4 && "-" != l3[4])
        ? n2.removeAttribute(l3)
        : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function V(n2) {
  return function (u4) {
    if (this.l) {
      var t3 = this.l[u4.type + n2];
      if (null == u4[c]) u4[c] = h++;
      else if (u4[c] < t3[a]) return;
      return t3(l.event ? l.event(u4) : u4);
    }
  };
}
function q(n2, u4, t3, i3, r3, o3, e3, f4, c3, a3) {
  var s3,
    h2,
    p3,
    v3,
    y2,
    d2,
    _3,
    k3,
    x3,
    M,
    $2,
    I2,
    P2,
    A3,
    H2,
    T3,
    j3 = u4.type;
  if (void 0 !== u4.constructor) return null;
  (128 & t3.__u && ((c3 = !!(32 & t3.__u)), (o3 = [(f4 = u4.__e = t3.__e)])),
    (s3 = l.__b) && s3(u4));
  n: if ("function" == typeof j3) {
    h2 = e3.length;
    try {
      if (
        ((x3 = u4.props),
        (M = j3.prototype && j3.prototype.render),
        ($2 = (s3 = j3.contextType) && i3[s3.__c]),
        (I2 = s3 ? ($2 ? $2.props.value : s3.__) : i3),
        t3.__c
          ? (k3 = (p3 = u4.__c = t3.__c).__ = p3.__E)
          : (M
              ? (u4.__c = p3 = new j3(x3, I2))
              : ((u4.__c = p3 = new C(x3, I2)), (p3.constructor = j3), (p3.render = Q)),
            $2 && $2.sub(p3),
            p3.state || (p3.state = {}),
            (p3.__n = i3),
            (v3 = p3.__d = true),
            (p3.__h = []),
            (p3._sb = [])),
        M && null == p3.__s && (p3.__s = p3.state),
        M &&
          null != j3.getDerivedStateFromProps &&
          (p3.__s == p3.state && (p3.__s = m({}, p3.__s)),
          m(p3.__s, j3.getDerivedStateFromProps(x3, p3.__s))),
        (y2 = p3.props),
        (d2 = p3.state),
        (p3.__v = u4),
        v3)
      )
        (M &&
          null == j3.getDerivedStateFromProps &&
          null != p3.componentWillMount &&
          p3.componentWillMount(),
          M && null != p3.componentDidMount && p3.__h.push(p3.componentDidMount));
      else {
        if (
          (M &&
            null == j3.getDerivedStateFromProps &&
            x3 !== y2 &&
            null != p3.componentWillReceiveProps &&
            p3.componentWillReceiveProps(x3, I2),
          u4.__v == t3.__v ||
            (!p3.__e &&
              null != p3.shouldComponentUpdate &&
              false === p3.shouldComponentUpdate(x3, p3.__s, I2)))
        ) {
          (u4.__v != t3.__v && ((p3.props = x3), (p3.state = p3.__s), (p3.__d = false)),
            (u4.__e = t3.__e),
            (u4.__k = t3.__k),
            u4.__k.some(function (n3) {
              n3 && (n3.__ = u4);
            }),
            w.push.apply(p3.__h, p3._sb),
            (p3._sb = []),
            p3.__h.length && e3.push(p3));
          break n;
        }
        (null != p3.componentWillUpdate && p3.componentWillUpdate(x3, p3.__s, I2),
          M &&
            null != p3.componentDidUpdate &&
            p3.__h.push(function () {
              p3.componentDidUpdate(y2, d2, _3);
            }));
      }
      if (
        ((p3.context = I2),
        (p3.props = x3),
        (p3.__P = n2),
        (p3.__e = false),
        (P2 = l.__r),
        (A3 = 0),
        M)
      )
        ((p3.state = p3.__s),
          (p3.__d = false),
          P2 && P2(u4),
          (s3 = p3.render(p3.props, p3.state, p3.context)),
          w.push.apply(p3.__h, p3._sb),
          (p3._sb = []));
      else
        do {
          ((p3.__d = false),
            P2 && P2(u4),
            (s3 = p3.render(p3.props, p3.state, p3.context)),
            (p3.state = p3.__s));
        } while (p3.__d && ++A3 < 25);
      ((p3.state = p3.__s),
        null != p3.getChildContext && (i3 = m(m({}, i3), p3.getChildContext())),
        M && !v3 && null != p3.getSnapshotBeforeUpdate && (_3 = p3.getSnapshotBeforeUpdate(y2, d2)),
        (H2 = null != s3 && s3.type === S && null == s3.key ? E(s3.props.children) : s3),
        (f4 = L(n2, g(H2) ? H2 : [H2], u4, t3, i3, r3, o3, e3, f4, c3, a3)),
        (p3.base = u4.__e),
        (u4.__u &= -161),
        p3.__h.length && e3.push(p3),
        k3 && (p3.__E = p3.__ = null));
    } catch (n3) {
      if (((e3.length = h2), (u4.__v = null), c3 || null != o3))
        if (n3.then) {
          for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling;)
            f4 = f4.nextSibling;
          (null != o3 && (o3[o3.indexOf(f4)] = null), (u4.__e = f4));
        } else {
          if (null != o3) for (T3 = o3.length; T3--;) b(o3[T3]);
          B(u4);
        }
      else ((u4.__e = t3.__e), !u4.__k && t3.__k && (u4.__k = t3.__k), n3.then || B(u4));
      l.__e(n3, u4, t3);
    }
  } else
    null == o3 && u4.__v == t3.__v
      ? ((u4.__k = t3.__k), (u4.__e = t3.__e))
      : (f4 = u4.__e = G(t3.__e, u4, t3, i3, r3, o3, e3, c3, a3));
  return ((s3 = l.diffed) && s3(u4), 128 & u4.__u ? void 0 : f4);
}
function B(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
}
function D(n2, u4, t3) {
  for (var i3 = 0; i3 < t3.length; i3++) J(t3[i3], t3[++i3], t3[++i3]);
  (l.__c && l.__c(u4, n2),
    n2.some(function (u5) {
      try {
        ((n2 = u5.__h),
          (u5.__h = []),
          n2.some(function (n3) {
            n3.call(u5);
          }));
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    }));
}
function E(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0
    ? n2
    : g(n2)
      ? n2.map(E)
      : void 0 !== n2.constructor
        ? null
        : m({}, n2);
}
function G(u4, t3, i3, r3, o3, e3, f4, c3, a3) {
  var s3,
    h2,
    p3,
    v3,
    y2,
    w3,
    _3,
    m3 = i3.props || d,
    k3 = t3.props,
    x3 = t3.type;
  if (
    ("svg" == x3
      ? (o3 = "http://www.w3.org/2000/svg")
      : "math" == x3
        ? (o3 = "http://www.w3.org/1998/Math/MathML")
        : o3 || (o3 = "http://www.w3.org/1999/xhtml"),
    null != e3)
  ) {
    for (s3 = 0; s3 < e3.length; s3++)
      if (
        (y2 = e3[s3]) &&
        "setAttribute" in y2 == !!x3 &&
        (x3 ? y2.localName == x3 : 3 == y2.nodeType)
      ) {
        ((u4 = y2), (e3[s3] = null));
        break;
      }
  }
  if (null == u4) {
    if (null == x3) return document.createTextNode(k3);
    ((u4 = document.createElementNS(o3, x3, k3.is && k3)),
      c3 && (l.__m && l.__m(t3, e3), (c3 = false)),
      (e3 = null));
  }
  if (null == x3) m3 === k3 || (c3 && u4.data == k3) || (u4.data = k3);
  else {
    if (
      ((e3 = "textarea" == x3 && null != k3.defaultValue ? null : e3 && n.call(u4.childNodes)),
      !c3 && null != e3)
    )
      for (m3 = {}, s3 = 0; s3 < u4.attributes.length; s3++)
        m3[(y2 = u4.attributes[s3]).name] = y2.value;
    for (s3 in m3)
      ((y2 = m3[s3]),
        "dangerouslySetInnerHTML" == s3
          ? (p3 = y2)
          : "children" == s3 ||
            s3 in k3 ||
            ("value" == s3 && "defaultValue" in k3) ||
            ("checked" == s3 && "defaultChecked" in k3) ||
            N(u4, s3, null, y2, o3));
    for (s3 in k3)
      ((y2 = k3[s3]),
        "children" == s3
          ? (v3 = y2)
          : "dangerouslySetInnerHTML" == s3
            ? (h2 = y2)
            : "value" == s3
              ? (w3 = y2)
              : "checked" == s3
                ? (_3 = y2)
                : (c3 && "function" != typeof y2) || m3[s3] === y2 || N(u4, s3, y2, m3[s3], o3));
    if (h2)
      (c3 ||
        (p3 && (h2.__html == p3.__html || h2.__html == u4.innerHTML)) ||
        (u4.innerHTML = h2.__html),
        (t3.__k = []));
    else if (
      (p3 && (u4.innerHTML = ""),
      L(
        "template" == t3.type ? u4.content : u4,
        g(v3) ? v3 : [v3],
        t3,
        i3,
        r3,
        "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o3,
        e3,
        f4,
        e3 ? e3[0] : i3.__k && $(i3, 0),
        c3,
        a3,
      ),
      null != e3)
    )
      for (s3 = e3.length; s3--;) b(e3[s3]);
    (c3 && "textarea" != x3) ||
      ((s3 = "value"),
      "progress" == x3 && null == w3
        ? u4.removeAttribute("value")
        : null != w3 &&
          (w3 !== u4[s3] || ("progress" == x3 && !w3) || ("option" == x3 && w3 != m3[s3])) &&
          N(u4, s3, w3, m3[s3], o3),
      (s3 = "checked"),
      null != _3 && _3 != u4[s3] && N(u4, s3, _3, m3[s3], o3));
  }
  return u4;
}
function J(n2, u4, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      (i3 && n2.__u(), (i3 && null == u4) || (n2.__u = n2(u4)));
    } else n2.current = u4;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function K(n2, u4, t3) {
  var i3, r3;
  if (
    (l.unmount && l.unmount(n2),
    (i3 = n2.ref) && ((i3.current && i3.current != n2.__e) || J(i3, null, u4)),
    null != (i3 = n2.__c))
  ) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
    i3.base = i3.__P = i3.__n = null;
  }
  if ((i3 = n2.__k))
    for (r3 = 0; r3 < i3.length; r3++) i3[r3] && K(i3[r3], u4, t3 || "function" != typeof n2.type);
  (t3 || b(n2.__e), (n2.__c = n2.__ = n2.__e = void 0));
}
function Q(n2, l3, u4) {
  return this.constructor(n2, u4);
}
function R(u4, t3, i3) {
  var r3, o3, e3, f4;
  (t3 == document && (t3 = document.documentElement),
    l.__ && l.__(u4, t3),
    (o3 = (r3 = "function" == typeof i3) ? null : (i3 && i3.__k) || t3.__k),
    (e3 = []),
    (f4 = []),
    q(
      t3,
      (u4 = ((!r3 && i3) || t3).__k = k(S, null, [u4])),
      o3 || d,
      d,
      t3.namespaceURI,
      !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null,
      e3,
      !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild,
      r3,
      f4,
    ),
    D(e3, u4, f4),
    (u4.props.children = null));
}
function X(n2) {
  function l3(n3) {
    var u4, t3;
    return (
      this.getChildContext ||
        ((u4 = /* @__PURE__ */ new Set()),
        ((t3 = {})[l3.__c] = this),
        (this.getChildContext = function () {
          return t3;
        }),
        (this.componentWillUnmount = function () {
          u4 = null;
        }),
        (this.shouldComponentUpdate = function (n4) {
          this.props.value != n4.value &&
            u4.forEach(function (n5) {
              ((n5.__e = true), A(n5));
            });
        }),
        (this.sub = function (n4) {
          u4.add(n4);
          var l4 = n4.componentWillUnmount;
          n4.componentWillUnmount = function () {
            (u4 && u4.delete(n4), l4 && l4.call(n4));
          };
        })),
      n3.children
    );
  }
  return (
    (l3.__c = "__cC" + y++),
    (l3.__ = n2),
    (l3.Provider =
      l3.__l =
      (l3.Consumer = function (n3, l4) {
        return n3.children(l4);
      }).contextType =
        l3),
    l3
  );
}
((n = w.slice),
  (l = {
    __e: function (n2, l3, u4, t3) {
      for (var i3, r3, o3; (l3 = l3.__);)
        if ((i3 = l3.__c) && !i3.__)
          try {
            if (
              ((r3 = i3.constructor) &&
                null != r3.getDerivedStateFromError &&
                (i3.setState(r3.getDerivedStateFromError(n2)), (o3 = i3.__d)),
              null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), (o3 = i3.__d)),
              o3)
            )
              return (i3.__E = i3);
          } catch (l4) {
            n2 = l4;
          }
      throw n2;
    },
  }),
  (u = 0),
  (t = function (n2) {
    return null != n2 && void 0 === n2.constructor;
  }),
  (C.prototype.setState = function (n2, l3) {
    var u4;
    ((u4 = null != this.__s && this.__s != this.state ? this.__s : (this.__s = m({}, this.state))),
      "function" == typeof n2 && (n2 = n2(m({}, u4), this.props)),
      n2 && m(u4, n2),
      null != n2 && this.__v && (l3 && this._sb.push(l3), A(this)));
  }),
  (C.prototype.forceUpdate = function (n2) {
    this.__v && ((this.__e = true), n2 && this.__h.push(n2), A(this));
  }),
  (C.prototype.render = S),
  (i = []),
  (o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (e = function (n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }),
  (H.__r = 0),
  (f = Math.random().toString(8)),
  (c = "__d" + f),
  (a = "__a" + f),
  (s = /(PointerCapture)$|Capture$/i),
  (h = 0),
  (p = V(false)),
  (v = V(true)),
  (y = 0));

// ../../node_modules/.pnpm/preact@10.29.3/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var p2 = c2.__;
function s2(n2, t3) {
  (c2.__h && c2.__h(r2, n2, o2 || t3), (o2 = 0));
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return (n2 >= u4.__.length && u4.__.push({}), u4.__[n2]);
}
function _2(n2, u4) {
  var i3 = s2(t2++, 4);
  !c2.__s && C2(i3.__H, u4) && ((i3.__ = n2), (i3.u = u4), r2.__h.push(i3));
}
function A2(n2) {
  return (
    (o2 = 5),
    T2(function () {
      return { current: n2 };
    }, [])
  );
}
function T2(n2, r3) {
  var u4 = s2(t2++, 7);
  return (C2(u4.__H, r3) && ((u4.__ = n2()), (u4.__H = r3), (u4.__h = n2)), u4.__);
}
function x2(n2) {
  var u4 = r2.context[n2.__c],
    i3 = s2(t2++, 9);
  return (
    (i3.c = n2), u4 ? (null == i3.__ && ((i3.__ = true), u4.sub(r2)), u4.props.value) : n2.__
  );
}
function j2() {
  for (var n2; (n2 = f2.shift());) {
    var t3 = n2.__H;
    if (n2.__P && t3)
      try {
        (t3.__h.some(z2), t3.__h.some(B2), (t3.__h = []));
      } catch (r3) {
        ((t3.__h = []), c2.__e(r3, n2.__v));
      }
  }
}
((c2.__b = function (n2) {
  ((r2 = null), e2 && e2(n2));
}),
  (c2.__ = function (n2, t3) {
    (n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), p2 && p2(n2, t3));
  }),
  (c2.__r = function (n2) {
    (a2 && a2(n2), (t2 = 0));
    var i3 = (r2 = n2.__c).__H;
    (i3 &&
      (u2 === r2
        ? ((i3.__h = []),
          (r2.__h = []),
          i3.__.some(function (n3) {
            (n3.__N && (n3.__ = n3.__N), (n3.u = n3.__N = void 0));
          }))
        : (i3.__h.length && j2(), (t2 = 0))),
      (u2 = r2));
  }),
  (c2.diffed = function (n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    (t3 &&
      t3.__H &&
      (t3.__H.__h.length &&
        ((1 !== f2.push(t3) && i2 === c2.requestAnimationFrame) ||
          ((i2 = c2.requestAnimationFrame) || w2)(j2)),
      t3.__H.__.some(function (n3) {
        n3.u && ((n3.__H = n3.u), (n3.u = void 0));
      })),
      (u2 = r2 = null));
  }),
  (c2.__c = function (n2, t3) {
    (t3.some(function (n3) {
      try {
        (n3.__h.some(z2),
          (n3.__h = n3.__h.filter(function (n4) {
            return !n4.__ || B2(n4);
          })));
      } catch (r3) {
        (t3.some(function (n4) {
          n4.__h && (n4.__h = []);
        }),
          (t3 = []),
          c2.__e(r3, n3.__v));
      }
    }),
      l2 && l2(n2, t3));
  }),
  (c2.unmount = function (n2) {
    m2 && m2(n2);
    var t3,
      r3 = n2.__c;
    r3 &&
      r3.__H &&
      (r3.__H.__.some(function (n3) {
        try {
          z2(n3);
        } catch (n4) {
          t3 = n4;
        }
      }),
      (r3.__H = void 0),
      t3 && c2.__e(t3, r3.__v));
  }));
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3,
    r3 = function () {
      (clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2));
    },
    u4 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2,
    u4 = n2.__c;
  ("function" == typeof u4 && ((n2.__c = void 0), u4()), (r2 = t3));
}
function B2(n2) {
  var t3 = r2;
  ((n2.__c = n2.__()), (r2 = t3));
}
function C2(n2, t3) {
  return (
    !n2 ||
    n2.length !== t3.length ||
    t3.some(function (t4, r3) {
      return t4 !== n2[r3];
    })
  );
}

// ../../node_modules/.pnpm/preact@10.29.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f3 = 0;
function u3(e3, t3, n2, o3, i3, u4) {
  t3 || (t3 = {});
  var a3,
    c3,
    p3 = t3;
  if ("ref" in p3) for (c3 in ((p3 = {}), t3)) "ref" == c3 ? (a3 = t3[c3]) : (p3[c3] = t3[c3]);
  var l3 = {
    type: e3,
    props: p3,
    key: n2,
    ref: a3,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --f3,
    __i: -1,
    __u: 0,
    __source: i3,
    __self: u4,
  };
  if ("function" == typeof e3 && (a3 = e3.defaultProps))
    for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return (l.vnode && l.vnode(l3), l3);
}

// dist/lucide/animated/index.js
function canUseDOM() {
  return typeof document !== "undefined";
}
function supportsElementAnimate() {
  if (!canUseDOM()) return false;
  return typeof Element !== "undefined" && typeof Element.prototype.animate === "function";
}
function supportsIntersectionObserver() {
  if (!canUseDOM()) return false;
  return typeof IntersectionObserver === "function";
}
function composeHandlers(...handlers) {
  return (event) => {
    for (const handler of handlers) {
      handler?.(event);
    }
  };
}
var AnimateIconContext = X(null);
function useAnimateIconContext() {
  return x2(AnimateIconContext);
}
var REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function readSystemReducedMotion() {
  if (typeof globalThis.matchMedia !== "function") return false;
  return globalThis.matchMedia(REDUCED_MOTION_QUERY).matches;
}
function resolveReducedMotion(mode) {
  if (mode === "always") return true;
  if (mode === "never") return false;
  return readSystemReducedMotion();
}
function subscribeReducedMotion(onChange) {
  if (typeof globalThis.matchMedia !== "function") return () => {};
  const media = globalThis.matchMedia(REDUCED_MOTION_QUERY);
  const handler = () => onChange(media.matches);
  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
}
function isSvgGeometry(element) {
  return typeof element.getTotalLength === "function";
}
function scaleDashValue(value, length) {
  if (typeof value === "number") {
    if (value >= 0 && value <= 1) return String(length * value);
    return String(value);
  }
  const trimmed = value.trim();
  if (trimmed.endsWith("%")) {
    const pct = Number.parseFloat(trimmed) / 100;
    return String(length * pct);
  }
  return trimmed;
}
function scaleKeyframe(kf, length) {
  const next = { ...kf };
  if ("strokeDasharray" in kf && kf.strokeDasharray !== void 0) {
    next.strokeDasharray = scaleDashValue(kf.strokeDasharray, length);
  }
  if ("strokeDashoffset" in kf && kf.strokeDashoffset !== void 0) {
    next.strokeDashoffset = scaleDashValue(kf.strokeDashoffset, length);
  }
  return next;
}
function preparePathDrawingElement(element) {
  const length = element.getTotalLength();
  element.style.strokeDasharray = `${length}`;
  return length;
}
function resolvePathDrawingKeyframes(element, keyframes) {
  const length = preparePathDrawingElement(element);
  if (Array.isArray(keyframes)) {
    return keyframes.map((kf) => scaleKeyframe(kf, length));
  }
  const scaled = { ...keyframes };
  if (keyframes.strokeDasharray !== void 0) {
    const values = Array.isArray(keyframes.strokeDasharray)
      ? keyframes.strokeDasharray
      : [keyframes.strokeDasharray];
    scaled.strokeDasharray = values.map((v3) => scaleDashValue(v3, length));
  }
  if (keyframes.strokeDashoffset !== void 0) {
    const values = Array.isArray(keyframes.strokeDashoffset)
      ? keyframes.strokeDashoffset
      : [keyframes.strokeDashoffset];
    scaled.strokeDashoffset = values.map((v3) => scaleDashValue(v3, length));
  }
  return scaled;
}
function resolveVariantName(recipe, variant) {
  if (variant) return variant;
  if (recipe.defaultVariant) return recipe.defaultVariant;
  const names = Object.keys(recipe.variants);
  return names[0];
}
function resolveIterations(loop) {
  if (loop === true) return Number.POSITIVE_INFINITY;
  if (typeof loop === "number" && loop > 0) return loop;
  return 1;
}
function buildAnimationOptions(track, runner) {
  const base = { ...track.options };
  const iterations = resolveIterations(runner.loop);
  if (iterations !== 1) base.iterations = iterations;
  if (runner.persistOnEnd) base.fill = "forwards";
  return base;
}
function collectTracks(root, recipe, variant) {
  const tracks = recipe.variants[variant] ?? [];
  const active = [];
  for (const track of tracks) {
    const nodes = root.querySelectorAll(`[data-kamod-part="${track.target}"]`);
    for (const element of nodes) {
      active.push({ element, track });
    }
  }
  return active;
}
function createRecipeRunner(runnerOptions) {
  let animations = [];
  let timers = [];
  let loopTimer;
  let generation = 0;
  let pathStyles = /* @__PURE__ */ new Map();
  function rememberPathStyle(element) {
    if (!isSvgGeometry(element)) return;
    if (pathStyles.has(element)) return;
    pathStyles.set(element, {
      strokeDasharray: element.style.strokeDasharray,
      strokeDashoffset: element.style.strokeDashoffset,
    });
  }
  function clearTimers() {
    for (const timer of timers) clearTimeout(timer);
    timers = [];
    if (loopTimer !== void 0) {
      clearTimeout(loopTimer);
      loopTimer = void 0;
    }
  }
  function cancelAnimations() {
    for (const animation of animations) {
      try {
        animation.cancel();
      } catch {}
    }
    animations = [];
  }
  function restorePathStyles() {
    for (const [element, styles] of pathStyles) {
      if (!isSvgGeometry(element)) continue;
      element.style.strokeDasharray = styles.strokeDasharray;
      element.style.strokeDashoffset = styles.strokeDashoffset;
    }
    pathStyles = /* @__PURE__ */ new Map();
  }
  function stop() {
    generation += 1;
    clearTimers();
    cancelAnimations();
  }
  function reset() {
    stop();
    restorePathStyles();
  }
  function destroy() {
    reset();
  }
  function finish() {
    clearTimers();
    for (const animation of animations) {
      try {
        animation.finish();
      } catch {}
    }
  }
  function startTracks(variant, gen) {
    if (gen !== generation) return;
    if (runnerOptions.reducedMotion || !supportsElementAnimate()) return;
    const activeTracks = collectTracks(runnerOptions.root, runnerOptions.recipe, variant);
    const started = [];
    for (const { element, track } of activeTracks) {
      rememberPathStyle(element);
      let keyframes = track.keyframes;
      if (track.pathDrawing && isSvgGeometry(element)) {
        keyframes = resolvePathDrawingKeyframes(element, keyframes);
      }
      const options = buildAnimationOptions(track, runnerOptions);
      const animation = element.animate(keyframes, options);
      started.push(animation);
    }
    animations = started;
    if (runnerOptions.loopDelay && runnerOptions.loopDelay > 0 && started.length > 0) {
      const loopDelay = runnerOptions.loopDelay;
      void Promise.all(started.map((animation) => animation.finished.catch(() => void 0))).then(
        () => {
          if (gen !== generation) return;
          loopTimer = setTimeout(() => {
            if (gen !== generation) return;
            play(variant);
          }, loopDelay);
        },
      );
    }
  }
  function play(variant) {
    stop();
    const gen = generation;
    const variantName = resolveVariantName(runnerOptions.recipe, variant);
    if (!variantName) return;
    const delay = runnerOptions.delay ?? 0;
    if (delay > 0) {
      const timer = setTimeout(() => startTracks(variantName, gen), delay);
      timers.push(timer);
      return;
    }
    startTracks(variantName, gen);
  }
  return { play, stop, finish, reset, destroy };
}
function resolveTriggerVariant(value, fallback) {
  if (value === false || value === void 0) return void 0;
  if (value === true) return fallback;
  return value;
}
function resolveTriggerTarget(root, target) {
  if (target === "self") return root;
  if (target === "parent") return root.parentElement ?? root;
  if (target.startsWith("closest:")) {
    const selector = target.slice("closest:".length);
    return root.closest(selector) ?? root;
  }
  return root;
}
function createTriggerController(initial) {
  let options = initial;
  let runner;
  let observer;
  let pressActive = false;
  let onPointerEnter;
  let onPointerLeave;
  let onFocusIn;
  let onFocusOut;
  let onPointerDown;
  let onPointerUp;
  let onPointerCancel;
  function defaultVariant() {
    return (
      options.recipe?.defaultVariant ?? Object.keys(options.recipe?.variants ?? {})[0] ?? "default"
    );
  }
  function ensureRunner() {
    if (!options.recipe) return void 0;
    runner ??
      (runner = createRecipeRunner({
        root: options.root,
        recipe: options.recipe,
        reducedMotion: options.reducedMotion,
        loop: options.loop,
        loopDelay: options.loopDelay,
        delay: options.delay,
        persistOnEnd: options.persistOnEnd,
      }));
    return runner;
  }
  function playFrom(value) {
    const variant = resolveTriggerVariant(value, defaultVariant());
    if (!variant) return;
    ensureRunner()?.play(variant);
  }
  function stopRunner() {
    runner?.stop();
  }
  function resetRunner() {
    runner?.reset();
  }
  function bindPointerHover() {
    const hoverVariant = options.animateOnHover;
    if (!hoverVariant) return;
    onPointerEnter = composeHandlers(options.consumerHandlers?.onPointerEnter, () =>
      playFrom(hoverVariant),
    );
    onPointerLeave = composeHandlers(options.consumerHandlers?.onPointerLeave, () => {
      if (options.persistOnEnd) stopRunner();
      else resetRunner();
    });
    options.triggerElement.addEventListener("pointerenter", onPointerEnter);
    options.triggerElement.addEventListener("pointerleave", onPointerLeave);
  }
  function bindFocus() {
    const focusVariant = options.animateOnFocus;
    if (!focusVariant) return;
    onFocusIn = composeHandlers(options.consumerHandlers?.onFocusIn, () => playFrom(focusVariant));
    onFocusOut = composeHandlers(options.consumerHandlers?.onFocusOut, () => {
      if (options.persistOnEnd) stopRunner();
      else resetRunner();
    });
    options.triggerElement.addEventListener("focusin", onFocusIn);
    options.triggerElement.addEventListener("focusout", onFocusOut);
  }
  function bindPress() {
    const pressVariant = options.animateOnPress;
    if (!pressVariant) return;
    onPointerDown = composeHandlers(options.consumerHandlers?.onPointerDown, (event) => {
      if (!(event instanceof PointerEvent) || event.button !== 0) return;
      pressActive = true;
      playFrom(pressVariant);
    });
    onPointerUp = composeHandlers(options.consumerHandlers?.onPointerUp, () => {
      if (!pressActive) return;
      pressActive = false;
      if (options.persistOnEnd) stopRunner();
      else resetRunner();
    });
    onPointerCancel = composeHandlers(options.consumerHandlers?.onPointerCancel, () => {
      if (!pressActive) return;
      pressActive = false;
      if (options.persistOnEnd) stopRunner();
      else resetRunner();
    });
    options.triggerElement.addEventListener("pointerdown", onPointerDown);
    options.triggerElement.addEventListener("pointerup", onPointerUp);
    options.triggerElement.addEventListener("pointercancel", onPointerCancel);
  }
  function bindView() {
    const viewVariant = options.animateOnView;
    if (!viewVariant || !supportsIntersectionObserver()) return;
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          playFrom(viewVariant);
          if (options.animateOnViewOnce !== false) {
            observer?.disconnect();
            observer = void 0;
          }
        }
      },
      { rootMargin: options.animateOnViewMargin ?? "0px" },
    );
    observer.observe(options.triggerElement);
  }
  function unbindAll() {
    if (onPointerEnter) {
      options.triggerElement.removeEventListener("pointerenter", onPointerEnter);
      onPointerEnter = void 0;
    }
    if (onPointerLeave) {
      options.triggerElement.removeEventListener("pointerleave", onPointerLeave);
      onPointerLeave = void 0;
    }
    if (onFocusIn) {
      options.triggerElement.removeEventListener("focusin", onFocusIn);
      onFocusIn = void 0;
    }
    if (onFocusOut) {
      options.triggerElement.removeEventListener("focusout", onFocusOut);
      onFocusOut = void 0;
    }
    if (onPointerDown) {
      options.triggerElement.removeEventListener("pointerdown", onPointerDown);
      options.triggerElement.removeEventListener("pointerup", onPointerUp);
      options.triggerElement.removeEventListener("pointercancel", onPointerCancel);
      onPointerDown = void 0;
      onPointerUp = void 0;
      onPointerCancel = void 0;
    }
    observer?.disconnect();
    observer = void 0;
    pressActive = false;
  }
  function bindAll() {
    bindPointerHover();
    bindFocus();
    bindPress();
    bindView();
    if (options.animate) playFrom(options.animate);
  }
  function destroy() {
    unbindAll();
    runner?.destroy();
    runner = void 0;
  }
  function update(next) {
    destroy();
    options = next;
    runner = void 0;
    bindAll();
  }
  bindAll();
  return {
    destroy,
    getRunner: () => runner,
    update,
  };
}
function useAnimatedIcon(props) {
  const {
    animation,
    animate,
    animateOnHover,
    animateOnFocus,
    animateOnPress,
    animateOnView,
    animateOnViewOnce,
    animateOnViewMargin,
    loop,
    loopDelay,
    delay,
    persistOnEnd,
    triggerTarget = "self",
    reducedMotion = "system",
    size: _size,
    title: _title,
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    ...svgProps
  } = props;
  const svgRef = A2(null);
  const controllerRef = A2(void 0);
  const triggerRef = A2(void 0);
  const registrationRef = A2(void 0);
  const reducedRef = A2(false);
  const group = useAnimateIconContext();
  const consumerHandlersRef = A2({
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  });
  consumerHandlersRef.current = {
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  };
  _2(() => {
    if (!canUseDOM()) return;
    reducedRef.current = resolveReducedMotion(reducedMotion);
    return subscribeReducedMotion(() => {
      if (reducedMotion !== "system") return;
      reducedRef.current = resolveReducedMotion("system");
    });
  }, [reducedMotion]);
  _2(() => {
    if (!canUseDOM()) return;
    const svg = svgRef.current;
    if (!svg || !animation) return;
    controllerRef.current = createRecipeRunner({
      root: svg,
      recipe: animation,
      reducedMotion: reducedRef.current,
      loop,
      loopDelay,
      delay,
      persistOnEnd,
    });
    const id = /* @__PURE__ */ Symbol("kamod-animated-icon");
    registrationRef.current = id;
    group?.register({ id, controller: controllerRef.current });
    triggerRef.current = createTriggerController({
      root: svg,
      triggerElement: resolveTriggerTarget(svg, triggerTarget),
      recipe: animation,
      animate,
      animateOnHover,
      animateOnFocus,
      animateOnPress,
      animateOnView: triggerTarget === "self" ? animateOnView : animateOnView,
      animateOnViewOnce,
      animateOnViewMargin,
      reducedMotion: reducedRef.current,
      loop,
      loopDelay,
      delay,
      persistOnEnd,
      consumerHandlers: {
        onPointerEnter: (event) => consumerHandlersRef.current.onPointerEnter?.(event),
        onPointerLeave: (event) => consumerHandlersRef.current.onPointerLeave?.(event),
        onFocusIn: (event) => consumerHandlersRef.current.onFocusIn?.(event),
        onFocusOut: (event) => consumerHandlersRef.current.onFocusOut?.(event),
        onPointerDown: (event) => consumerHandlersRef.current.onPointerDown?.(event),
        onPointerUp: (event) => consumerHandlersRef.current.onPointerUp?.(event),
        onPointerCancel: (event) => consumerHandlersRef.current.onPointerCancel?.(event),
      },
    });
    return () => {
      triggerRef.current?.destroy();
      triggerRef.current = void 0;
      if (registrationRef.current) {
        group?.unregister(registrationRef.current);
        registrationRef.current = void 0;
      }
      controllerRef.current?.destroy();
      controllerRef.current = void 0;
    };
  }, [
    animation,
    animate,
    animateOnHover,
    animateOnFocus,
    animateOnPress,
    animateOnView,
    animateOnViewOnce,
    animateOnViewMargin,
    loop,
    loopDelay,
    delay,
    persistOnEnd,
    triggerTarget,
    reducedMotion,
    group,
  ]);
  return { svgRef, svgProps };
}
function AnimatedIconSvg({ size = 24, title, overflow = "hidden", svgRef, svgProps, children }) {
  return /* @__PURE__ */ u3("svg", {
    ref: svgRef,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    overflow,
    "aria-hidden": title ? void 0 : true,
    role: title ? "img" : void 0,
    ...svgProps,
    children: [title ? /* @__PURE__ */ u3("title", { children: title }) : null, children],
  });
}
var searchAnimatedRecipe = {
  source: "kamod",
  intent:
    "A short, precise sweep of the lens and handle \u2014 like scanning a field of view once.",
  defaultVariant: "scan",
  loopCapable: false,
  variants: {
    scan: [
      {
        target: "lens",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(2px, -1px)" },
          { transform: "translate(-1px, 1px)" },
          { transform: "translate(0px, 0px)" },
        ],
        options: { duration: 720, easing: "ease-in-out" },
      },
      {
        target: "handle",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(2px, -1px)" },
          { transform: "translate(-1px, 1px)" },
          { transform: "translate(0px, 0px)" },
        ],
        options: { duration: 720, easing: "ease-in-out" },
      },
    ],
  },
};
function SearchAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: searchAnimatedRecipe,
    ...props,
  });
  return /* @__PURE__ */ u3(AnimatedIconSvg, {
    size: props.size,
    title: props.title,
    svgRef,
    svgProps,
    overflow: "visible",
    children: [
      /* @__PURE__ */ u3("circle", { "data-kamod-part": "lens", cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ u3("path", { "data-kamod-part": "handle", d: "m21 21-4.34-4.34" }),
    ],
  });
}
var checkAnimatedRecipe = {
  source: "kamod",
  intent:
    "The check mark draws once along its path \u2014 confirmation without bounce or overshoot.",
  defaultVariant: "draw",
  loopCapable: false,
  variants: {
    draw: [
      {
        target: "mark",
        pathDrawing: true,
        keyframes: [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        options: { duration: 520, easing: "ease-out", fill: "forwards" },
      },
    ],
  },
};
function CheckAnimatedIcon(props) {
  const { persistOnEnd = true, ...rest } = props;
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: checkAnimatedRecipe,
    persistOnEnd,
    ...rest,
  });
  return /* @__PURE__ */ u3(AnimatedIconSvg, {
    size: props.size,
    title: props.title,
    svgRef,
    svgProps,
    children: /* @__PURE__ */ u3("path", { "data-kamod-part": "mark", d: "M20 6 9 17l-5-5" }),
  });
}
var bellAnimatedRecipe = {
  source: "kamod",
  intent:
    "The bell body and clapper swing from plausible pivot points \u2014 a single believable ring, not endless shaking.",
  defaultVariant: "ring",
  loopCapable: false,
  variants: {
    ring: [
      {
        target: "body",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 6px" },
          { transform: "rotate(-7deg)", transformOrigin: "12px 6px" },
          { transform: "rotate(7deg)", transformOrigin: "12px 6px" },
          { transform: "rotate(-4deg)", transformOrigin: "12px 6px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 6px" },
        ],
        options: { duration: 680, easing: "ease-in-out" },
      },
      {
        target: "clapper",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(10deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(-10deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(5deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 19px" },
        ],
        options: { duration: 680, easing: "ease-in-out" },
      },
    ],
  },
};
function BellAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: bellAnimatedRecipe,
    ...props,
  });
  return /* @__PURE__ */ u3(AnimatedIconSvg, {
    size: props.size,
    title: props.title,
    svgRef,
    svgProps,
    overflow: "visible",
    children: [
      /* @__PURE__ */ u3("path", {
        "data-kamod-part": "body",
        d: "M4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      }),
      /* @__PURE__ */ u3("path", {
        "data-kamod-part": "clapper",
        d: "M10.268 21a2 2 0 0 0 3.464 0",
      }),
    ],
  });
}
var heartAnimatedRecipe = {
  source: "kamod",
  intent:
    "Pulse affirms lightly; selected fills with currentColor and rests in a stable favored state.",
  defaultVariant: "pulse",
  loopCapable: false,
  variants: {
    pulse: [
      {
        target: "heart",
        keyframes: [
          { transform: "scale(1)", transformOrigin: "12px 12px" },
          { transform: "scale(1.06)", transformOrigin: "12px 12px" },
          { transform: "scale(1)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 560, easing: "ease-in-out" },
      },
    ],
    selected: [
      {
        target: "heart",
        keyframes: [
          { fillOpacity: 0, strokeOpacity: 1 },
          { fillOpacity: 1, strokeOpacity: 1 },
        ],
        options: { duration: 480, easing: "ease-out", fill: "forwards" },
      },
    ],
  },
};
function HeartAnimatedIcon(props) {
  const { persistOnEnd: persistProp, ...rest } = props;
  const persistOnEnd =
    persistProp ?? (rest.animate === "selected" || rest.animateOnHover === "selected");
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: heartAnimatedRecipe,
    persistOnEnd,
    ...rest,
  });
  return /* @__PURE__ */ u3(AnimatedIconSvg, {
    size: props.size,
    title: props.title,
    svgRef,
    svgProps,
    children: /* @__PURE__ */ u3("path", {
      "data-kamod-part": "heart",
      fill: "currentColor",
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
    }),
  });
}
var loaderCircleAnimatedRecipe = {
  source: "kamod",
  intent:
    "An even, continuous rotation that reads as loading and stops cleanly when unmounted or reduced motion applies.",
  defaultVariant: "spin",
  loopCapable: true,
  variants: {
    spin: [
      {
        target: "arc",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(360deg)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 900, easing: "linear" },
      },
    ],
  },
};
function LoaderCircleAnimatedIcon(props) {
  const { loop = true, ...rest } = props;
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: loaderCircleAnimatedRecipe,
    loop,
    ...rest,
  });
  return /* @__PURE__ */ u3(AnimatedIconSvg, {
    size: props.size,
    title: props.title,
    svgRef,
    svgProps,
    overflow: "visible",
    children: /* @__PURE__ */ u3("path", {
      "data-kamod-part": "arc",
      d: "M21 12a9 9 0 1 1-6.219-8.56",
    }),
  });
}

// tests/browser/harness.tsx
function mount(label, node) {
  const row = document.createElement("div");
  row.className = "row";
  row.dataset.testid = label;
  const heading = document.createElement("h2");
  heading.textContent = label;
  const slot = document.createElement("div");
  slot.className = "slot";
  row.append(heading, slot);
  R(node, slot);
  return row;
}
var app = document.getElementById("app");
if (!app) throw new Error("Missing #app");
app.append(
  mount(
    "search-hover",
    /* @__PURE__ */ u3(SearchAnimatedIcon, {
      id: "search",
      size: 32,
      animateOnHover: "scan",
      title: "Search",
    }),
  ),
  mount(
    "bell-programmatic",
    /* @__PURE__ */ u3(BellAnimatedIcon, { id: "bell", size: 32, title: "Bell" }),
  ),
  mount(
    "check-draw",
    /* @__PURE__ */ u3(CheckAnimatedIcon, { id: "check", size: 32, title: "Check" }),
  ),
  mount(
    "heart-pulse",
    /* @__PURE__ */ u3(HeartAnimatedIcon, { id: "heart", size: 32, title: "Heart" }),
  ),
  mount(
    "loader-spin",
    /* @__PURE__ */ u3(LoaderCircleAnimatedIcon, { id: "loader", size: 32, title: "Loading" }),
  ),
  mount(
    "parent-focus",
    /* @__PURE__ */ u3("button", {
      type: "button",
      class: "icon-btn",
      "aria-label": "Search action",
      id: "parent-btn",
      children: /* @__PURE__ */ u3(SearchAnimatedIcon, {
        size: 32,
        animateOnFocus: "scan",
        triggerTarget: "parent",
        title: "Search",
      }),
    }),
  ),
);
window.__playwright = {
  playBell: () => {
    const icon = document.querySelector("#bell");
    icon?.dispatchEvent(new CustomEvent("kamod-play"));
  },
  animateCheck: () => {
    const slot = document.querySelector('[data-testid="check-draw"] .slot');
    R(/* @__PURE__ */ u3(CheckAnimatedIcon, { size: 32, animate: "draw", title: "Check" }), slot);
  },
  animateLoader: () => {
    const slot = document.querySelector('[data-testid="loader-spin"] .slot');
    R(
      /* @__PURE__ */ u3(LoaderCircleAnimatedIcon, {
        size: 32,
        animate: "spin",
        loop: true,
        title: "Loading",
      }),
      slot,
    );
  },
  animateHeart: () => {
    const slot = document.querySelector('[data-testid="heart-pulse"] .slot');
    R(/* @__PURE__ */ u3(HeartAnimatedIcon, { size: 32, animate: "pulse", title: "Heart" }), slot);
  },
};
