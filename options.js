(function () {
    var d, e, f, g, h, k, l, m, n, q, r, s, t, u, v, w, y = function () {
            var a = {};
            //a.language = f.options[f.selectedIndex].value;
            a.popupDblclick = g.checked ? "true" : "false";
            a.popupSelect = l.checked ? "true" : "false";
            a.popupDblclickKey = k.options[k.selectedIndex].value;
            a.popupSelectKey = n.options[n.selectedIndex].value;
            a.storeHistory = q.checked ? "true" : "false";
            a.allowCrossExtensionHistory = t.checked ? "true" : "false";
            a.enableHttps = "true";
            window.localStorage.options = JSON.stringify(a);
            var b = document.getElementById("save_status");
            b.style.setProperty("-webkit-transition",
                "opacity 0s ease-in");
            b.style.opacity = 1;
            window.setTimeout(function () {
                b.style.setProperty("-webkit-transition", "opacity 0.5s ease-in");
                b.style.opacity = 0
            }, 1E3);
            x(!1);
            chrome.extension.getBackgroundPage()["gdx.updateOptions"]()
        }, E = function () {
            x(!1);
            var a = JSON.parse(window.localStorage.options);
            //z(f, a.language);
            g.checked = "true" == a.popupDblclick;
            A();
            l.checked = "true" == a.popupSelect;
            B();
            z(k, a.popupDblclickKey);
            z(n, a.popupSelectKey);
            q.checked = "true" == a.storeHistory;
            t.checked = "true" == a.allowCrossExtensionHistory;
            C();
            chrome.storage.local.get("word-history", function (a) {
                r = a = Object.keys(a["word-history"]).length;
                s.innerHTML = a;
                D()
            })
        }, D = function () {
            0 < r && q.checked ? (u.disabled = !1, w.disabled = !1) : 0 == r && (u.disabled = !0, w.disabled = !0)
        }, F = function (a) {
            var b = "";
            a = a["word-history"];
            for (var c in a) var p = c.split("<"),
            G = a[c], b = b + p[0], b = b + "\t", b = b + p[1], b = b + "\t", b = b + p[2], b = b + "\t", b = b + G, b = b + "\n";
            v.href = window.URL.createObjectURL(new Blob([b], {
                type: "text/plain"
            }));
            b = v;
            c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            b.dispatchEvent(c)
        }, H = function () {
            chrome.storage.local.get("word-history", F)
        }, I = function () {
            chrome.storage.local.set({
                "word-history": {}
            });
            r = 0;
            s.innerHTML = 0;
            D()
        }, z = function (a, b) {
            for (var c = 0, p = a.options.length; c < p; c++)
                if (a.options[c].value == b) {
                    a.options[c].selected = !0;
                    break
                }
        }, x = function (a) {
            d.disabled = !a;
            e.disabled = !a
        }, J = function () {
            x(!0)
        }, A = function () {
            var a = g.checked;
            k.disabled = !a;
            h.className = a ? "" : "text_disabled"
        }, B = function () {
            var a = l.checked;
            n.disabled = !a;
            m.className = a ? "" : "text_disabled"
        }, C = function () {
            var a =
                q.checked;
            t.disabled = !a;
            a || (t.checked = !1);
            u.disabled = !a;
            w.disabled = !a;
            D()
        };
    (function () {
        d = document.getElementById("save_button");
        e = document.getElementById("reset_button");
        //f = document.getElementById("language_selector");
        g = document.getElementById("popup_dblclick_checkbox");
        h = document.getElementById("popup_dblclick_text");
        k = document.getElementById("popup_dblclick_key");
        l = document.getElementById("popup_select_checkbox");
        m = document.getElementById("popup_select_text");
        n = document.getElementById("popup_select_key");
        q = document.getElementById("store_history_checkbox");
        s = document.getElementById("num_words_in_history");
        t = document.getElementById("allow_cross_extension_history_checkbox");
        u = document.getElementById("download_history_button");
        v = document.getElementById("download_history_link");
        w = document.getElementById("clear_history_button");
        r = 0;
        d.addEventListener("click", y, !1);
        e.addEventListener("click", E, !1);
        g.addEventListener("change", function () {
            A()
        }, !1);
        l.addEventListener("change", function () {
            B()
        }, !1);
        q.addEventListener("change", function () {
            C()
        }, !1);
        u.addEventListener("click", H, !1);
        w.addEventListener("click", I, !1);
        document.getElementById("year").innerText = (new Date).getFullYear();
        for (var a = document.getElementsByTagName("input"), b = 0, c; c = a[b]; b++) c.addEventListener("change", J, !1);
        a = document.getElementsByTagName("select");
        for (b = 0; c = a[b]; b++) c.addEventListener("change", J, !1); - 1 != window.navigator.platform.toLowerCase().indexOf("mac") && (document.getElementById("popup_dblclick_key_ctrl").innerHTML = "Command", document.getElementById("popup_select_key_ctrl").innerHTML = "Command");
        E()
    })();
})();
