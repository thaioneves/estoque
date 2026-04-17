let produto;
produto=prompt('Informe o nome do produto');

let quantidade;
quantidade=prompt('Informe a quantidade');

if (quantidade<0 || produto=='') {
     alert ('erro')
} else {
    if (quantidade<0) {
        alert("produto esgotado");
    } else {
        if (quantidade<50) {
            alert("estoque muito baixo");
        } else {
            if (quantidade<150) {
                alert('estoque baixo');
            } else {
                if (quantidade<300) {
                    alert('estoque médio');
                } else {
                   alert('estoque alto')
                }
            }
        }
    }
  
}

