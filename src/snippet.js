!function(a, d, v, s, u, cacheTime, i, t, e) {
    s = s;
    u = u;
    // return if the setup has already occurred
    // this is to prevent double loading openpixel.js if someone accidentally had this more than once on a page
    if (a[u]) return;

    // setup the queue to collect all of the calls to openpixel.js before it is loaded
    i = a[u] = function() {
      // if openpixel.js has loaded, pass the argument through to it
      // if openpixel.js has not loaded yet, queue the calls in an array
      i.process ? i.process.apply(i, arguments) : i.queue.push(arguments)
    }
    // setup an empty queue array
    i.queue = [];
    // get the current time (integer) that the page was loaded and save for later
    i.t = 1 * new Date();

    // create a script tag
    t = d.createElement(v);
    // set the script tag to run async
    t.async = 1;
    // set the source of the script tag and cache bust every 24 hours
    t.src = s + '?t=' + (Math.ceil(new Date()/cacheTime)*cacheTime);

    // get the first <script> that occurs in the document
    // if this block is the only <script> tag on the page it will get this block
    e = d.getElementsByTagName(v)[0];
    // insert the newly created script tag above the first <script> tag in the document
    // this ensures openpixel.js is loaded asynchronously
    e.parentNode.insertBefore(t, e)
}(window, document, 'script', 'JS_URL', 'OPIX_FUNC', 24*60*60*1000);
OPIX_FUNC("init","ID-XXXXXXXX");
OPIX_FUNC("event","pageload");
