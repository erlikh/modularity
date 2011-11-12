describe('click_counter_2', function() {
  
  var display_counter_2, button, display;
  
  beforeEach(function() {
    loadFixtures('click_counter_2.html');

    button = new Button($('.button'));
    display = new Display($('.display'));
    click_counter_2 = new ClickCounter2(button, display);
  });
  
  describe('click counter variable', function() {
    it('is initially 0', function() {
      expect(click_counter_2.clicked_counter).toEqual(0);
    });
  });
  
  describe('on button click', function() {
    beforeEach(function() {
      spyOn(ClickCounter2, 'display_html').andReturn('mock display value');
    });
    
    it('increases the click counter', function() {
      button.fire_event(Button.events.CLICKED);
      expect(click_counter_2.clicked_counter).toEqual(1);
      button.fire_event(Button.events.CLICKED);
      expect(click_counter_2.clicked_counter).toEqual(2);
    });
    
    it ('updates the display element', function() {
      button.fire_event(Button.events.CLICKED);
      expect(display.container).toHaveText('mock display value');
    });
    
    it('displays text with the correct number of clicks', function() {
      button.fire_event(Button.events.CLICKED);
      expect(ClickCounter2.display_html).toHaveBeenCalledWith(1);
      button.fire_event(Button.events.CLICKED);
      expect(ClickCounter2.display_html).toHaveBeenCalledWith(2);
    });
  });

  describe('display_html', function() {
    it('shows a special text for the first click', function() {
      expect(ClickCounter.display_html(1)).toEqual('Please click again');
    });
    it('shows the number of clicks for subsequent clicks', function() {
      expect(ClickCounter.display_html(2)).toEqual('2 clicks!');
      expect(ClickCounter.display_html(3)).toEqual('3 clicks!');
    })
  });
});