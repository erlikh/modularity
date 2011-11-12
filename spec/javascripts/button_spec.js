describe('button', function() {
  var button;

  beforeEach(function() {
    loadFixtures('button.html');
    button = new Button($('.button'));
  });

  describe('when clicked', function() {
    it('fires the Button.events.CLICKED event', function() {
      spyOn(button, 'fire_event');
      button.container.click();
      expect(button.fire_event).toHaveBeenCalledWith(Button.events.CLICKED);
    });
  });
});