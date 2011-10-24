Modularity is a lightweight object-oriented JavaScript framework 
that allows to compose functionally rich web pages 
in a clean and testable manner out of cleanly separated and reusable components. 
It is built on top of jQuery and allows to compress the code using 
Google's closure compiler in advanced mode. 
It can be combined with any backend technology (Ruby on Rails, Node.js, PHP, Java, .NET etc).

If you want to write complex web pages using jQuery, compress the result with the most advanced JS compiler for 
the most effective compression, and keep your sanity coding
complex functionality, Widgetry might be worth taking a look at. It is a manifestation of best practices to handle complexity by utilizing 
object-oriented encapsulation of code and data, event-driven computing, and loose coupling.
It combines the most useful aspects of Google's Closure Library with jQuery functionality and 
Google's powerful Closure compiler.

Widgetry is simple, pragmatic, can be learned in a very short time. 
It allows to implement very complex code in clean ways, 
is interoperable with a number of other toolkits, and is fully testable. 


Widgets to encapsulate sections of pages.
A web page consists of different sections. The JavaScript for each section is encapsulated in 

Widgets communicate through events
- local events
- global events

The following libraries are fully compressable using Closure compiler:
- underscore.js (custom version only): http://documentcloud.github.com/underscore

Widgetry provides externs files ()
for JavaScript libraries that are not to be included in the compressed JavaScript file
either because they are loaded from an external source or cannot be compressed using advanced compression.
- jQuery UI: http://jqueryui.com
- Facebook SDK: https://developers.facebook.com/docs/reference/javascript/
- Google Maps: http://code.google.com/apis/maps/documentation/javascript/
- Youtube Player API: http://code.google.com/apis/youtube/getting_started.html#player_apis
- jQuery AutoSuggest: http://code.drewwilson.com/entry/autosuggest-jquery-plugin
- Uploadify: http://www.uploadify.com
- jQuery editable: http://www.appelsiini.net/projects/jeditable/custom.html
- jQuery JSON: http://code.google.com/p/jquery-json/
- jQuery Masked Input Plugin: http://digitalbush.com/projects/masked-input-plugin
- Nivo Slider: http://nivo.dev7studios.com/
- jQuery Treeview: http://bassistance.de/jquery-plugins/jquery-plugin-treeview
- JSON2 library from Douglas Crockford: https://github.com/douglascrockford/JSON-js

Support for more libraries can be added easily by providing an externs file.

#Performance tuning
Widgetry provides tools to define arbitrary timestamps in the code and measure the time between them.
The toolkit is browser agnostic and works also in older browsers like Firefox 2 or Internet explorer 6-8. 
This is useful to identify code that is slow in general or in certain older browsers.