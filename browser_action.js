(function () {
    var c = 0,
        d = null,
        e = null,
        f = null,
        g = null,
        h = null,
        k = null,
        m = null,
        n = function (a) {
            a.target = "_blank";
            a.addEventListener("click", function () {
                window.close()
            }, !1)
        }, r = function () {
            var a;
            if (a = e.value.replace(/^\s+|\s+$/g, "")) g.innerHTML = "Searching...", f.style.display = "block", h.style.display = "none", k.style.display = "none", m.style.display = "none", d.disabled = !0, c++, chrome.runtime.sendMessage({
                type: "fetch_html",
                eventKey: c,
                query: a
            }, p)
        }, p = function (a) {
            if (a.eventKey == c) {
                //if (a.html) {
                    //m.innerHTML = a.html;
                    //var b = m.querySelectorAll(".audio");
                    //for (a = 0; a < b.length; a++) {
                        //var q = b[a],
                            //l = document.createElement("audio");
                        //l.a = !0;
                        //l.src = q.getAttribute("data-url");
                        //q.addEventListener("click", l.play.bind(l), !1)
                    //}
                    //b = m.querySelectorAll(".nym-link");
                    //for (a = 0; a < b.length; a++) b[a].addEventListener("click", function () {
                        //e.value = this.title ? this.title : this.innerHTML;
                        //r();
                        //return !1
                    //}, !1);
                    //b = m.querySelectorAll('a:not([class="nym-link"])');
                    //for (a = 0; a < b.length; a++) n(b[a]);
                    //f.style.display = "none";
                    //m.style.display = "block"
                //} else g.innerHTML = "No definition found.", f.style.display = "block",
                g.innerHTML = a.meaningObj.meaningText;
                h.href = "http://www.google.com/search?q=" + a.sanitizedQuery, h.innerHTML = 'Search the web for "' + a.sanitizedQuery + '" &raquo;', h.style.display = "block";
                d.disabled = !1
            }
        }, d = document.getElementById("button"),
        e = document.getElementById("query-field"),
        f = document.getElementById("status-box"),
        g = document.getElementById("status-msg"),
        h = document.getElementById("status-search-link"),
        k = document.getElementById("usage-tip"),
        m = document.getElementById("meaning");
    k.display = "block";
    k.innerText = "Tip: Select text on any webpage, then click the KV Dictionary button to view the definition of your selection.";
    document.getElementById("year").innerText = (new Date).getFullYear();
    n(h);
    n(document.getElementById("options-link"));
    e.focus();
    d.addEventListener("click", r, !1);
    e.addEventListener("keydown", function (a) {
        13 == a.keyCode && r()
    }, !1);
    chrome.tabs.query({
        active: !0,
        currentWindow: !0
    }, function (a) {
        a.length && (console.assert(1 == a.length), chrome.tabs.sendMessage(a[0].id, {
            type: "get_selection"
        }, function (a) {
            a && a.selection && (e.value = a.selection, r())
        }))
    });
})();
