H5P.SimpleTextareaPapiJo = (function ($, EventDispatcher) {

  /**
   * A simple library for displaying text with advanced styling.
   *
   * @class H5P.TextareaPapiJo
   * @param {Object} parameters
   * @param {Object} [parameters.text='New text']
   * @param {number} id
   */
  function Textarea(parameters, id) {
    const self = this;
    EventDispatcher.call(this);
    let text = parameters.text;

    //Allow some html tags.
    text = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    self.attach = function ($container) {
      $container.addClass('h5p-textarea-pj');
      $container.append(text);
    };

  }

  Textarea.prototype = Object.create(EventDispatcher.prototype);
  Textarea.prototype.constructor = Textarea;

  return Textarea;

})(H5P.jQuery, H5P.EventDispatcher);
