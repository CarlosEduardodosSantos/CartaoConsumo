export var environment = {
  production: false,
  apiurl: 'http://api.zclub.com.br/',
  resId: 66,
};

/* isAdmin define o tipo de usuário.
1 = ADMIN, 
2 = CLIENTE, 
3 = CAIXA

tipoMov define o tipo de movimentação.
1 = POSITIVA,
2 = NEGATIVA

totalzao calcula e formata o saldo na pag user-mov.
O login e senha são definidos na classe de rotas.
a rota é definida na classe enviroment assim como o id do restaurante.
*/
