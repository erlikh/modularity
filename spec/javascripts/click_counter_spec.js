describe('click_counter', function() {
  
  var click_counter;
  var button;
  
  beforeEach(function() {
    loadFixtures('click_counter.html');
    click_counter = new ClickCounter($('.click_counter_container'));
    button = $('.click_counter_container .button');
  });

  describe('current_clicks instance field', function() {
    it('is initially 0', function() {
      expect(click_counter.current_clicks).toEqual(0);
    })
    
    it('gets increased by 1 with each click', function() {
      button.click();
      expect(click_counter.current_clicks).toEqual(1);
      button.click();
      expect(click_counter.current_clicks).toEqual(2);
    });
  });
  
  describe('display element', function() {
    it('is invisible in the beginning', function() {
      expect(click_counter.display).toHaveText('');
    });
  });
  
  describe('button click', function() {
    beforeEach(function() {
      spyOn(ClickCounter, 'display_html').andReturn('mock display value');
      button.click();
    });

    it('displays the text returned by "display_html"', function() {
      expect(ClickCounter.display_html).toHaveBeenCalled();
    });
    
    it('uses the display element for displaying', function() {
      expect(click_counter.display).toHaveText('mock display value');
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