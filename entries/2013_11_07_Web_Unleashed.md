Today I attended [Web Unleashed 2013](http://fitc.ca/event/webu2013/), an event
geared toward professional front end Web developers put on by an outfit called 
[FITC](http://fitc.ca/) - Future. Innovation. Technology. Creativity.

The main focus of the event was JavaScript application frameworks and 
libraries. It was fascinating to get a bird's eye view of this topic.
The JavaScript application development space is evolving at a mind
boggling rate. It was striking how great the difference is between the set of 
skills most valuable in todays professional Web developers and the set of 
Computer Science skills taught today in universities. I suppose that gulf
is the reason events like Web Unleashed have value. The focus of professionals
is more about having a great workflow and set of tools to deliver working
applications to customers or clients, whereas the focus of academic Computer 
Science is more on the fundamentals of computing and the eternal patterns
that recur again and again in almost every new language or framework.

The JavaScript space is fascinating, because certain libraries or practices
stick around and widthstand the test of time, while others fade away more
quickly. At Web Unleashed, much of the focus was on taking advantage of 
application building frameworks that deal with Model View Controller
separation or management of data dependencies. A big part of the scene
though is how each individual developer finds his or her own personal 
favorite tools and then evangelizes about them. 

Here are what seem to be the top JavaScript libraries and frameworks:

 * [jQuery](http://jquery.com/) is the long standing top library for DOM 
   manipulation and AJAX.
 * [Underscore](http://underscorejs.org/) is the go-to functional programming 
   utility library, providing functional primitives found in other languages
   such as map and reduce. In practice Underscore finds wide use in 
   transforming data. Underscore also has a minimalist templating API,
   which is used often when only simple template logic is required.
 * [Backbone](http://backbonejs.org/) is a tried and true bare bones MVC 
   framework that provides a great implementation of fundamental features 
   such as events, observable properties, and class-like inheritance.
   Backbone also has foundational support for routes based on hash fragments
   and RESTful synchronization with a CRUD backend for persistence.
 * [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) is becoming the industry 
   standard for separating JavaScript projects across many files using 
   modules. The top AMD implementation is [Require](http://requirejs.org/).
 * [Promises](http://wiki.commonjs.org/wiki/Promises/A) is becoming the 
   industry standard pattern for dealing with asynchronous control flow. 
   The top Promises implementation is [Q](https://github.com/kriskowal/q).
   [Async.js](https://github.com/caolan/async) is also great.
 * Data Binding frameworks are all the rage today, because they take so much
   boilerplate and repetition out of end-to-end application development. These 
   frameworks solve the fundamental recurring problems of propagating changes 
   through a data dependency graph and managing client side template rendering.
   The top data binding frameworks today are:
     * [Ember.js](http://emberjs.com/)
     * [Angular.js](http://angularjs.org/)
     * [Knockout.js](http://knockoutjs.com/)
 * [Handlebars](http://handlebarsjs.com/) is the top client side templating 
   library today. Handlebars is derived from 
   [Mustache](http://mustache.github.io/), which provides logic-less templates.
   Ember is built on top of Handlebars.

I say "is the top framework for ...", but I don't really know. These are just 
my impressions based on my own experiences and the talks I saw at Web Unleashed
and various Boston Web tech meetups.

In any case, Web Unleashed was inspiring. It confirmed for me the notion that 
the Web is in fact the premiere application development platform of our time.
It seems that HTML5 is now taking preference for new projects over most other 
application development platforms like Java, Adobe Flex, C#, and iOS. This is 
because JavaScript and HTML5 as a platform offers the most compelling solution 
to the age old "write once, run anywhere" problem, especially the modern era 
of cloud and mobile computing.
