describe("angular.js homepage test", function () {

    it('expect we send from "angularjs.org" to "docs.angularjs.org/tutorial" ', function () {
        var dropdown = element.all(by.css('.dropdown')).first(),
            dropdownToggle = dropdown.element(by.css('.dropdown-toggle')),
            dropdownMenu = dropdown.element(by.css('.dropdown-menu')),
            menuItem = dropdownMenu.all(by.tagName('li')).first();
        
        browser.get('https://angularjs.org/');
            dropdownToggle.click();
            menuItem.click();

        expect(browser.getCurrentUrl()).toEqual('https://docs.angularjs.org/tutorial');

    });

    it('paragraph "0 - Bootstrapping" will be pressed ', async function()  {
        var tutorialLabel = element(by.cssContainingText('.ng-binding', '0 - Bootstrapping'));

        tutorialLabel.isPresent().then( function() { // wait load elements 
            expect(tutorialLabel.getText()).toEqual('0 - Bootstrapping');
            tutorialLabel.click();
        });   
       
    });

    it('span  "npm instal" should be present', async function() {
        var span = element(by.cssContainingText('.pln', 'npm install'));

        span.isPresent().then( function() { // wait load elements 
            expect(span.getText()).toEqual('npm install');
           
        });

    });
    
    // second the hometask

    // first way
    it('return by used brand logo href url', function() {
        var brandLogo = element(by.css('.brand'));
        var href = brandLogo.element(by.tagName('a'));

        href.click();

        expect(browser.getCurrentUrl()).toEqual('https://angularjs.org/');

    });

    it('return to original state', function(){
        browser.navigate().back(); // return to https://docs.angularjs.org/tutorial/step_00  
        //if you delete first example => delete upper command too.

    });


    //second way    
    it('return by used browser history back', function() {
        browser.navigate().back(); // return to https://docs.angularjs.org/tutorial

        browser.navigate().back(); // return to https://angularjs.org/ 

        expect(browser.getCurrentUrl()).toEqual('https://angularjs.org/');
    });

    //third way
    it('return by used direct url', function() {
        browser.get('https://angularjs.org/');

        expect(browser.getCurrentUrl()).toEqual('https://angularjs.org/');
    });

});