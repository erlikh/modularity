describe('display', function() {
  var display;
  
  beforeEach(function() {
    loadFixtures('display.html');
    display = new Display($('.display'));
  });

  describe('display_html', function() {
    it('shows the given text in the display element', function() {
      display.display_html('foo bar');
      expect(display.container).toHaveText('foo bar');
    });
  });
});