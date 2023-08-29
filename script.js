$(document).ready(function() {
    
    $('#telefone').mask('(00) 0000-0000')

    $('form').validate({

        rules: {
            nome: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            mensagem: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            mensagem: 'Digite sua mensagem!'
        }
        

    });

});