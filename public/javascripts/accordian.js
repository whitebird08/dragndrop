$(document).ready(function() {
  console.log("The document is ready!");


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


})