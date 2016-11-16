function deleteTextNodes( el ){

    if( el ){
        var nodes = el.childNodes;
        var textNodesArr = new Array();

        for( let i = 0; i < nodes.length; i++ ){

            if( nodes[i].nodeType == 3 ){
                textNodesArr.push( nodes[i] );
                continue;
            }
            if( nodes[i].nodeType == 1 ){
                deleteTextNodes( nodes[i] );
            }

        }

        textNodesArr.forEach( item => el.removeChild(item) );
    }
}