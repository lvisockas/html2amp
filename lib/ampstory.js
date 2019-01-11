const text = '<script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />'
const ampstory = $ => {
  if (!$('script[custom-element="amp-story"]').length && $('amp-story').length) {
    $('head').prepend(text)
    ('amp-story').attr('standalone', '')
    $('body').html($('amp-story'))
  }
  return $
}

module.exports = ampstory
