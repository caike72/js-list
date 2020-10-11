            var objetos = Array('Cadeira', 'Impressora', 'Garfo')
            
            //recuperar o valor contido no campo de texto
            function recuperaValor() {
                var valor = document.getElementById('campo_texto').value 

                if (valor == 0) {
                    alert('Informe um valor válido')
                } 
                
                if (objetos.includes(valor) == true) {
                    alert('Objeto já foi obtido')
                } else if (valor > 0) {} 
                else (objetos.push(valor))
            }

            function limpaCampo() {
                document.getElementById('campo_texto').value=('')
            }

            function ordenaValores() {
                console.log(objetos.sort())
            }
