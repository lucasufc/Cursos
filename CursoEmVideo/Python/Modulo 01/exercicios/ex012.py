preco = float(input('Digite o preço do produto: R$ '))
desconto = float(input('Qual o valor % do desconto: '))
total = preco - (preco * desconto)/100
print('O novo preço vai ser de R$ {:.2f}'.format(total).replace('.',','))
