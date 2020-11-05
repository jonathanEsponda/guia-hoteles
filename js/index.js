
      $(function () {
        $("[data-toggle='tooltip']").tooltip();
          $("[data-toggle='popover']").popover();
          $('#contacto').on('show.bs.modal', function (e) {
            console.log('el modal se está mostrando')
         
        $('#contactoBtn').removeClass('btn-outline-succes');  
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
      });
        $('#contacto').on('hidden.bs.modal', function(e){
          console.log('el modal contacto se ocultó');
          $('#contactoBtn').prop('disabled', false);
        })    

        $('.carousel').carousel({
        interval:4000
      }) 
       });
       

    