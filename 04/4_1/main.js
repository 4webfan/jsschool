function prepend( container, newElement ){

    if( container ){
        // if newElement is node
        if( newElement.nodeType ){

            var firstEl = container.firstChild;

            ( container.childNodes.length ) ? container.insertBefore( newElement, firstEl ) : container.append( newElement );

        }
    }


}