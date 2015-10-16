$(document).ready(function() {
  console.log("The document is ready!");
  $.ajax({
    type: 'GET',
    url: '/tasks',
    success:function(data){
      $.each(data, function(i, item){
        if(item.category === 'health')
        $(".classHealth").append('<li>' + item.description + '</li>')
      })
      $.each(data, function(i, item){
        if(item.category === 'wealth')
        $(".classWealth").append('<li>' + item.description + '</li>')
      })
      $.each(data, function(i, item){
        if(item.category === 'soul')
        $(".classSoul").append('<li>' + item.description + '</li>')
      })
      
      $(function() {
        $( "#tasks" ).accordion();
        });

      $(function() {
        $( "#tasks" ).accordion();
        $( "#tasks li" ).draggable({
          appendTo: "body",
          helper: "clone"
        });
        $( "#plan ol" ).droppable({
          activeClass: "ui-state-default",
          hoverClass: "ui-state-hover",
          accept: ":not(.ui-sortable-helper)",
          drop: function( event, ui ) {
            $( this ).find( ".placeholder" ).remove();
            $( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
          }
        }).sortable({
          items: "li:not(.placeholder)",
          sort: function() {
            // gets added unintentionally by droppable interacting with sortable
            // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
            $( this ).removeClass( "ui-state-default" );
          }
        });
      });

      $(function() {
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();
      });

    }
  })

})