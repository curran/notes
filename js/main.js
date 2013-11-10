/**
 * This file contains the core of the note viewing app.
 * By Curran Kelleher 11/9/2013
 *
 * This page is a Backbone-driven "single page app" that has two kinds of views:
 *
 *  * an index of all notes with links to each, and
 *  * a page with the content of a specific note.
 *
 * Draws from:
 *
 * http://backbonejs.org
 * http://backbonetutorials.com/what-is-a-view/
 * http://net.tutsplus.com/tutorials/javascript-ajax/game-on-backbone-and-ember
 */
$(function (){
  var defaultAuthor = 'Curran Kelleher';
  var containerDivId = 'content';

  // The model for a single note entry.
  var Note = Backbone.Model.extend({
    defaults: {
      content: 'loading content...',
      author: defaultAuthor
      // additional expected fields:
      //   name: String
      //   title: String
      //   date: Date
    }
  });

  // The collection of notes used by the index view.
  var Notes = Backbone.Collection.extend({
    model: Note,
    url: 'entriesList.json',
    parse: function(names) {
      return names.map(parseName);
    }
  });

  // Parses an entry file name into its constituent parts,
  // returning an objects that provides values for all fields
  // of the Note model except 'content'.
  function parseName (name) {
    // example name: "2013_11_07_Web_Unleashed.md"
    // year:          2013
    // month:              11
    // day:                   07
    // title:                    Web Unleashed
    return {
      name: name,
      date: moment(name, 'YYYY_MM_DD'),
      title: parseTitle(name)
    };
  }

  // Parses the title portion out of an entry file name.
  // parseTitle('2013_07_11_Web_Unleashed.md') returns 'Web Unleashed'
  function parseTitle(name) {
    var tokensAfterDate = name.split('_').slice(3),
        titleWithMdExtension = tokensAfterDate.join(' ');
    return titleWithMdExtension.replace('.md', '');
  }

  // Shows an index of all notes with links to each.
  var IndexPageView = Backbone.View.extend({
    el: '#' + containerDivId,
    template: _.template($('#indexPage').html()),
    render: function (){
      var data = {
        entries: this.collection.toJSON(),
        author: defaultAuthor
      };
      this.$el.html(this.template(data));
    }
  });

  // Shows a page with the content of a specific note.
  var EntryPageView = Backbone.View.extend({
    el: '#' + containerDivId,
    template: _.template($('#entryPage').html()),
    render: function (){
      var data = this.model.toJSON();
      this.$el.html(this.template(data));
    }
  });

  // Sets dynamic page content based on fragment identifiers.
  var Router = Backbone.Router.extend({
    routes: {
      '!entries/:name': 'entryPage',
      '*path': 'indexPage'
    },
    entryPage: function (name) {
      var note = new Note(parseName(name));
          view = new EntryPageView({ model: note });

      // Render with content as 'loading content...'.
      view.render();

      // Fetch the Markdown (.md) file that contains the content of the entry.
      $.get('entries/' + name, function (data) {

        // Re-render with real content.
        note.set('content', marked(data));
        view.render();
      });

      resetDisqusComments(note.get('name'));
    },
    indexPage: function () {
      var notes = new Notes(),
          view = new IndexPageView({ collection: notes });
      notes.fetch({
        success: function () {
          view.render();
        }
      });
      resetDisqusComments('index');
    }
  });

  // Updates Disqus to show comments for the current page.
  // see http://help.disqus.com/customer/portal/articles/472107
  function resetDisqusComments(id) {
    DISQUS.reset({
      reload: true,
      config: function () {  
        this.page.identifier = id;
        this.page.url = window.location.href;
        console.log(this.page.url);
      }
    });
  }

  new Router;
  Backbone.history.start()
});
