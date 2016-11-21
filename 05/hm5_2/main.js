
function divCreator(){

    this.width = Math.floor(Math.random() * (document.documentElement.clientWidth/2 - 1)) + 1;;
    this.height = Math.floor(Math.random() * (document.documentElement.clientHeight/2 - 1)) + 1;
    this.top = 0;
    this.left = 0;
    this.color = 'rgb(0,0,0)';
    this.X = 0;
    this.Y = 0;
    this.self = null;
    this.div = null;

    this.create = function(){

        this.div = document.createElement('div');
        var main = document.getElementById('main');
        var body = document.getElementsByTagName('body');
        var style = '';
         
        // position generate
        this.positionGen();

        // color generate
        this.color = 'rgb('+ this.colorGen() + ', ' + this.colorGen() + ',' + this.colorGen() + ')';

        // addStyle
        this.div.style.position = 'absolute';
        this.div.style.top = this.top + 'px';
        this.div.style.left = this.left + 'px';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.background = this.color;

        // insert el
        body[0].insertBefore( this.div, main );
        
        // attach handlers
        this.addHandlers();

    }

    this.colorGen = function(){
       return  Math.floor(Math.random() * (256 - 0)) + 0;
    }

    this.positionGen = function(){
        var leftMin = 0;
        var leftMax =  document.documentElement.clientWidth - this.width;
        var topMin = 0;
        var topMax = document.documentElement.clientHeight - this.height;

        this.left = Math.floor(Math.random() * (leftMax - leftMin)) + leftMin;
        this.top = Math.floor(Math.random() * (topMax - topMin)) + topMin;
    }

    this.addHandlers = function(){

        var div = this.div;
        var self = this;

        div.addEventListener( 'mousedown', mouseDownHandler );

        function mouseDownHandler( event ){

            //register coords
            self.X = event.clientX;
            self.Y = event.clientY;

            // add evants
            div.addEventListener( 'mousemove', mouseMoveHandler );
            div.addEventListener( 'mouseup', removeHandlers );
            div.addEventListener( 'mouseleave', removeHandlers );
        }

        function mouseMoveHandler( event ){
            event.preventDefault();

            var newX = event.clientX;
            var newY = event.clientY;
            var deltaX = self.X - newX;
            var deltaY = self.Y - newY;
            var newLeft = self.left - deltaX;
            var newTop = self.top - deltaY;

            if( newLeft <= document.documentElement.clientWidth - self.width && newLeft >= 0 ){
                self.left = newLeft;
                div.style.left = self.left + 'px';
                self.X = newX;
            }

            if( newTop <= document.documentElement.clientHeight - self.height && newTop >= 0 ){
                self.top = newTop;
                div.style.top = self.top + 'px';
                self.Y = newY;
            }

        }

        function removeHandlers( event ){

            div.removeEventListener( 'mousemove', mouseMoveHandler );
            div.removeEventListener( 'mouseup', removeHandlers );
            div.removeEventListener( 'mouseleave', removeHandlers );

        }

    }

}

function buttonClickHandler( event ){
    var div = new divCreator();
    div.create();
}

var button = document.getElementById('button');
button.addEventListener( 'click', buttonClickHandler ); 