(function () {
    var d, h = function (a) {
            return a.replace(/^\s+|\s+$/g, "")
        }, k = function (a, b) {
            return function () {
                return b.apply(a, arguments)
            }
        }, p = function (a) {
            if (a && a.tagName) {
                var b = a.tagName.toLowerCase();
                if ("input" == b || "textarea" == b) return !0
            }
            if (document.designMode && "on" == document.designMode.toLowerCase()) return !0;
            for (; a; a = a.parentNode)
                if (a.isContentEditable) return !0;
            return !1
        }, q = /[0-9A-Za-z]/,
        A = function () {
            chrome.runtime.sendMessage({
                type: "initialize"
            }, k(this, function (a) {
                this.C = a.instanceId;
                a = document.createElement("div");
                var b = document.createElement("a");
                b.target = "_blank";
                this.s = a.cloneNode(!1);
                this.p = document.createElement("audio");
                this.p.M = !0;
                this.c = a.cloneNode(!1);
                this.c.id = "gdx-bubble-container";
                this.a = a.cloneNode(!1);
                this.a.id = "gdx-bubble-main";
                this.c.appendChild(this.a);
                this.b = a.cloneNode(!1);
                this.b.id = "gdx-bubble-query-container";
                this.q = a.cloneNode(!1);
                this.q.id = "gdx-bubble-query";
                this.l = a.cloneNode(!1);
                this.l.id = "gdx-bubble-audio-icon";
                var c = a.cloneNode(!1);
                c.id = "gdx-bubble-query-container-end";
                this.b.appendChild(this.q);
                this.b.appendChild(this.l);
                this.b.appendChild(c);
                this.h = a.cloneNode(!1);
                this.h.id = "gdx-bubble-meaning";
                this.e = a.cloneNode(!1);
                this.e.id = "gdx-bubble-options-tip";
                this.e.innerHTML = s;
                this.i = a.cloneNode(!1);
                this.i.id = "gdx-bubble-more";
                this.f = b.cloneNode(!1);
                this.i.appendChild(this.f);
                this.d = a.cloneNode(!1);
                this.d.id = "gdx-bubble-attribution";
                this.k = b.cloneNode(!1);
                this.o = a.cloneNode(!1);
                this.d.appendChild(this.k);
                this.d.appendChild(this.o);
                this.r = a.cloneNode(!1);
                this.r.id = "gdx-bubble-close";
                this.a.appendChild(this.r);
                this.a.appendChild(this.b);
                this.a.appendChild(this.h);
                this.a.appendChild(this.e);
                this.a.appendChild(this.d);
                this.a.appendChild(this.i);
                this.n = a.cloneNode(!1);
                this.n.id = "gdx-arrow-container";
                this.c.appendChild(this.n);
                this.F = w(a, "up");
                this.D = w(a, "down");
                this.B = k(this, this.K);
                this.t = k(this, this.G);
                this.u = k(this, this.H);
                this.w = k(this, this.g);
                this.A = k(this, this.J);
                this.v = k(this, this.I);
                x("mouseup", this.B, document);
                x("click", this.t, document);
                x("dblclick", this.u, document);
                x("resize", this.w, window);
                x("keydown", this.A, document);
                x("click", k(this.p, this.p.play), this.l);
                chrome.runtime.onMessage.addListener(z);
                chrome.runtime.onMessage.addListener(this.v)
            }))
        }, B = [],
        s = "Tip: Didn't want this definition pop-up? Try setting a trigger key in <a href=\"" + chrome.runtime.getURL("options.html") + '" target="_blank">Extension Options</a>.';
    d = A.prototype;
    d.m = 0;
    d.s = null;
    d.p = null;
    d.c = null;
    d.a = null;
    d.b = null;
    d.q = null;
    d.l = null;
    d.h = null;
    d.e = null;
    d.r = null;
    d.i = null;
    d.f = null;
    d.d = null;
    d.k = null;
    d.o = null;
    d.n = null;
    d.F = null;
    d.D = null;
    d.j = null;
    d.B = null;
    d.t = null;
    d.u = null;
    d.w = null;
    d.A = null;
    d.v = null;
    var x = function (a, b, c) {
        document.addEventListener ? c.addEventListener(a, b, !1) : c.attachEvent("on" + a, b)
    }, C = function (a, b, c) {
            document.removeEventListener ? c.removeEventListener(a, b, !1) : c.detachEvent("on" + a, b)
        }, w = function (a, b) {
            var c = a.cloneNode(!1),
                f = a.cloneNode(!1),
                e = a.cloneNode(!1);
            c.id = "gdx-arrow-main";
            "up" == b ? (f.id = "gdx-bubble-arrow-inner-up", e.id = "gdx-bubble-arrow-outer-up") : (f.id = "gdx-bubble-arrow-inner-down", e.id = "gdx-bubble-arrow-outer-down");
            c.appendChild(f);
            c.appendChild(e);
            return c
        }, D = function (a,
            b, c, f) {
            this.left = a;
            this.top = b;
            this.right = c;
            this.bottom = f
        }, E = function (a) {
            a.a.style.left = "0";
            a.a.style.top = "0";
            var b = a.a.offsetWidth,
                c = a.a.offsetHeight,
                f = [self.pageXOffset, self.pageYOffset],
                e = [a.j.left + f[0], a.j.top + f[1]],
                g = a.j.bottom - a.j.top,
                r = e[0] + (a.j.right - a.j.left) / 2,
                f = document.documentElement.offsetWidth + document.documentElement.scrollLeft,
                y = document.documentElement.scrollLeft,
                m = r - b / 2;
            m + b > f && (m = f - b);
            m < y && (m = y);
            var u = e[1] - c - 12 + 2,
                n = e[1] + g + 12 - 2;
            i: if (b = new D(m, u, m + b, u + c), b.top < document.documentElement.scrollTop) b = !1;
            else {
                for (var c = document.getElementsByTagName("embed"), G = document.getElementsByTagName("object"), v = [self.pageXOffset, self.pageYOffset], t = 0, L = c.length + G.length; t < L; t++) {
                    var l = (t < c.length ? c[t] : G[t - c.length]).getBoundingClientRect(),
                        l = new D(l.left + v[0], l.top + v[1], l.right + v[0], l.bottom + v[1]);
                    if (b.bottom > l.top && l.bottom > b.top && b.left < l.right && l.left < b.right) {
                        b = !1;
                        break i
                    }
                }
                b = !0
            }
            b ? (n = a.D, n.style.top = e[1] - 12 + "px") : (u = n, n = a.F, n.style.top = e[1] + g + "px");
            e = r - 12;
            n.style.left = e + "px";
            e - 5 > y && e + 24 + 5 < f && a.n.appendChild(n);
            a.a.style.top = u + "px";
            a.a.style.left = m + "px"
        };
    A.prototype.L = function (a) {
        if (a.eventKey == this.m) {
            this.g();
            this.l.className = "gdx-display-none";
            this.e.className = "gdx-display-none";
            this.i.className = "gdx-display-block";
            this.d.className = "gdx-display-none";
            if (a.meaningObj) {
                var b = a.meaningObj;
                this.b.className = "gdx-display-block";
                this.q.innerHTML = b.prettyQuery;
                this.h.innerHTML = b.meaningText;
                b.audio && (this.p.src = b.audio, this.l.className = "gdx-display-block");
                this.f.href = b.moreUrl;
                this.f.innerHTML = "More \u00bb";
                b.attribution && ("translation" == b.type ? (this.o.innerHTML =
                    b.attribution, this.k.className = "gdx-display-none", this.o.className = "gdx-display-inline") : (this.s.innerHTML = b.attribution, b = this.s.getElementsByTagName("a")[0], this.k.href = b.href, this.k.innerHTML = b.innerHTML.replace("http://", ""), this.k.className = "gdx-display-inline", this.o.className = "gdx-display-none"), this.d.className = "gdx-display-block")
            } else this.b.className = "gdx-display-none", this.h.innerHTML = "No definition found.", this.f.href = "http://www.google.com/search?q=" + encodeURIComponent(a.sanitizedQuery),
            this.f.innerHTML = 'Search the web for "' + a.sanitizedQuery + '" \u00bb';
            a.showOptionsTip && (this.e.className = "gdx-display-block");
            document.documentElement.appendChild(this.c);
            E(this)
        }
    };
    var F = function (a, b) {
        b == a.m && (a.h.innerHTML = "Dictionary is disabled for https pages.", a.f.href = "http://support.google.com/TODO", a.f.innerHTML = "More information \u00bb", a.i.className = "gdx-display-block", a.b.className = "gdx-display-none", a.e.className = "gdx-display-none", a.d.className = "gdx-display-none", document.documentElement.appendChild(a.c), E(a))
    }, H = function (a, b) {
            var c = b.getBoundingClientRect();
            a.j = new D(c.left, c.top, c.right, c.bottom)
        };
    A.prototype.g = function () {
        this.m++;
        var a = this.c;
        a && a.parentNode && a.parentNode.removeChild(a);
        for (a = this.n; a && a.hasChildNodes();) a.removeChild(a.childNodes[0])
    };
    A.prototype.J = function (a) {
        27 == a.keyCode && this.g()
    };
    var I = function (a, b) {
        return "none" == b || "alt" == b && a.altKey || "ctrl" == b && (-1 != window.navigator.platform.toLowerCase().indexOf("mac") ? a.metaKey : a.ctrlKey) || "shift" == b && a.shiftKey
    }, J = function (a, b) {
            for (var c = b.target; c; c = c.parentNode)
                if (c == a.c) return !0;
            return !1
        }, K = function (a, b, c, f) {
            var e;
            "mouseup" == c ? e = "true" == f.popupSelect && I(b, f.popupSelectKey) : "dblclick" == c ? e = "true" == f.popupSelect && I(b, f.popupSelectKey) ? !1 : "true" == f.popupDblclick && I(b, f.popupDblclickKey) : (console.warn("Unexpected eventType: " + c), e = !1);
            if (e) {
                e = 0;
                for (var g = B.length; e < g; e++)
                    if (location.href.match(B[e])) return;
                if (!p(b.target)) {
                    e = null;
                    g = "";
                    if (window.getSelection) {
                        g = window.getSelection();
                        if (1 > g.rangeCount) return;
                        e = g.getRangeAt(0);
                        g = h(g.toString())
                    } else document.selection && (e = document.selection.createRange(), g = h(e.text)); if (!(!g || 1 == g.length && 127 >= g.charCodeAt(0) && !g.match(q) || "dblclick" == c && -1 != g.indexOf(" "))) {
                        a.m++;
                        var r = a.m;
                        J(a, b) || H(a, e);
                        "false" == f.enableHttps && 0 == location.href.lastIndexOf("https", 0) ? F(a, r) : (window.setTimeout(k(a,
                            function () {
                                r == this.m && (this.h.innerHTML = "Searching...", this.b.className = "gdx-display-none", this.e.className = "gdx-display-none", this.i.className = "gdx-display-none", this.d.className = "gdx-display-none", document.documentElement.appendChild(this.c), E(this))
                            }), 300), chrome.runtime.sendMessage({
                            type: "fetch_raw",
                            eventKey: r,
                            instanceId: a.C,
                            query: g
                        }, k(a, a.L)))
                    }
                }
            }
        };
    A.prototype.K = function (a) {
        var b = a.target;
        if (J(this, a))
            if (b == this.r) this.g();
            else {
                if ("a" == b.tagName.toLowerCase()) return
            } else this.g();
        chrome.runtime.sendMessage({
            type: "options"
        }, k(this, function (b) {
            K(this, a, "mouseup", b.options)
        }))
    };
    A.prototype.G = function (a) {
        var b = a.target;
        J(this, a) && "a" == b.tagName.toLowerCase() && this.g()
    };
    A.prototype.H = function (a) {
        chrome.runtime.sendMessage({
            type: "options"
        }, k(this, function (b) {
            K(this, a, "dblclick", b.options)
        }))
    };
    var z = function (a, b, c) {
        "get_selection" == a.type && (a = h(window.getSelection().toString())) && c({
            selection: a
        })
    };
    A.prototype.I = function (a) {
        "hide" == a.type && a.instanceId == this.C && this.g()
    };
    var M = M || !1;
    if ("undefined" == typeof M || !M) {
        if (window.gdxBubbleInstance) {
            var N = window.gdxBubbleInstance;
            C("mouseup", N.B, document);
            C("click", N.t, document);
            C("dblclick", N.u, document);
            C("resize", N.w, window);
            C("keydown", N.A, document);
            chrome.runtime.onMessage.removeListener(z);
            chrome.runtime.onMessage.removeListener(N.v);
            N.g()
        }
        window.gdxBubbleInstance = new A
    };
})();
