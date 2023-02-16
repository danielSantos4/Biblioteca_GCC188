# Sistema Saci - Gerenciamento de Bibliotecas
Trabalho final da matéria de engenharia de software (GCC 188)

# Membros
<summary>  Daniel Messias Santos - 202110168 </summary>
<summary>  Luiz Filipe Bartelega Penha - 202111082 </summary>
<summary>  Thiago Pereira Freire - 202110167 </summary>

# Descrição
Na cidade de `Campo Azul, Paraná`a biblioteca `Alexandria` usa um sistema de reserva de livros em que os próprios usuários podem fazer a reserva e pegar o livro nas prateleiras, mas isso está gerando grandes problemas devido ao fato de existirem diversos usuários que não registram seus empréstimos e  ao fato dos dados estarem salvos em papel, sendo necessário uma constante atenção do administrador da biblioteca a respeito do estoque. 
Com isso, essa biblioteca decidiu contratar a empresa `The Builders` para elaborar um sistema para automatizar a coleta e a gerência desses dados, facilitando a vida do administrador da biblioteca.

### Funcionalidades
    - Os usuários devem ser capazes de se cadastrarem por conta própria no sistema.
    - Os administradores devem ser capazes de visualizar, excluir e alterar uma reserva de um livro por um usuário.
    - Os administradores devem ser capazes de cadastrar, alterar e visualizar livros cadastrados.
    - Os usuários devem ser capazes de visualizar os livros cadastrados.
    - Os usuários devem ser capazes de cadastrar reservas.
    
### Usuários
    - Usuários
    - Administradores
    
    
### Estrutura de diretório

    - Saci
      - Documentos de Requisitos
      - Padrẽes adotados
      - Códigos
        - Páginas
        - MVC


## Tecnologias

- HTML 5
- CSS 3
- NodeJS 18.13.0
- Postgres v15.0


## Regras de uso do git

### Regras de commit
- Deve ser feito um commit ao fim de cada passo do trabalho.
- Cada commit deve possuir uma mensagem clara, que especifique o que foi realizado.

## Regras de uso de branches
- Quando o desenvolvedor necessitar fazer um commit antes de terminar um passo, ele deve criar uma branch e fazer todos os commits necessários nela.
- Ao terminar um passo, deve ser realizado um merge entre a branch main e outras branches, se essas existirem.

## Boas práticas de codificação que devem ser utilizadas
- As variáveis devem seguir o estilo de notação camelCase.
- Os comentários devem ser escritos com o objetivo de explicar um determinado bloco de código, devendo ser escritos imediatamente antes do código a ser explicado.
- Deve-se utilizar espaçamento em torno dos operadores lógicos e operadores relacionais.
- A indentação deve ser feita utilizando o espaçamento de um tab.
- Uma linha de código não deve possuir mais de 100 caracteres.
