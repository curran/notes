/**
 * This file contains the core of the note viewing app.
 *
 * By Curran Kelleher 11/9/2013
 *
 * Draws from:
 *
 * http://backbonejs.org
 * http://backbonetutorials.com/what-is-a-view/
 * http://net.tutsplus.com/tutorials/javascript-ajax/game-on-backbone-and-ember
 */
$(function (){
  var defaultAuthor = 'Curran Kelleher';
  var containerDivId = 'container';

  var Note = Backbone.Model.extend({
    defaults: {
      name: '',
      content: 'loading content...',
      author: defaultAuthor
    }
  });

  var Notes = Backbone.Collection.extend({
    model: Note,
    url: 'entriesList.json',
    parse: function(names) {
      return names.map(parseName);
    }
  });

  function parseName (name) {
    // example name: "2013_07_11_Web_Unleashed.md"
    // year:          2013
    // month:              07
    // day:                   11
    // title:                    Web Unleashed
    return {
      name: name,
      date: moment(name, 'YYYY_MM_DD'),
      title: parseTitle(name)
    };
  }

  function parseTitle(name) {
    var titleWithMdExtension = name.split('_').slice(3).join(' ');
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

  var Router = Backbone.Router.extend({
    routes: {
      'entries/:name': 'entryPage',
      '*path': 'indexPage'
    },
    entryPage: function (name) {
      var note = new Note(parseName(name));
          view = new EntryPageView({ model: note });
      view.render();
      $.get('entries/' + name, function (data) {
        note.set('content', marked(data));
        view.render();
      });
    },
    indexPage: function () {
      var notes = new Notes(),
          view = new IndexPageView({ collection: notes });
      notes.fetch({
        success: function () {
          view.render();
        }
      });
    }
  });

  new Router;
  Backbone.history.start()
});
