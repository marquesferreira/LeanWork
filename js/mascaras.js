
    $(document).ready(function () { 
        var $cpf = $("#cpf");
        $cpf.mask('000.000.000-00', {reverse: true});

        var $telefone = $("#telefone");
        $telefone.mask("(00) 0000-00009");
    });
