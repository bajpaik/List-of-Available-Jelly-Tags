/////UI Page

<!--?xml version="1.0" encoding="utf-8" ?--
        var serverArr = [];
        var gr = new GlideRecord('incident');
        gr.setLimit(5);
        gr.query();
        while (gr.next()) {
        var obj = {}
        obj.number = gr.number.toString()
        obj.short_desc = gr.short_description.toString();
        serverArr.push(obj);
        }
 
        serverArr = new global.JSON().encode(serverArr);
        serverArr; 
       
///Working with the following “Server data” on the Client side:

//Client Script Section of UI Page: Note that this must be pasted into this section via the list view of the page otherwise it will complain about the use of the ${serverArr} variable.

   var objArr = ${serverArr};
   jQuery('body').append(JSON.stringify(objArr) + '');
   for (var i= 0; i < objArr.length; i++) {
        var obj = objArr[i];
        jQuery('body').append(obj.number + ' - ' + obj.short_desc + '');
   }
