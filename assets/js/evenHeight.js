(function(a) {
    evenheight = function(d, g) {
        a(d).each(function() {
            var d = 0, c = 0, b = [], e, k, r, l = 0;
            a(this).children().each(function() {
                e = a(this);
                r = e.find("." + g).length;
                k = !e.hasClass(g) || 1 > r ? e.find("." + g) : e;
                a(k).height("auto");
                l = e.position().top;
                if (c != l) {
                    for (currentDiv = 0; currentDiv < b.length; currentDiv++)
                        b[currentDiv].height(d);
                    b.length = 0;
                    c = l;
                    d = k.height();
                    b.push(k)
                } else
                    b.push(k), d = d < k.height() ? k.height() : d;
                for (currentDiv = 0; currentDiv < b.length; currentDiv++)
                    b[currentDiv].height(d)
            })
        })
    };
    a(window).load(function() {
        evenheight(".js-even-height-group", "js-even-height-target")
    });
    a(window).resize(function() {
        evenheight(".js-even-height-group", "js-even-height-target")
    })
})(jQuery);
