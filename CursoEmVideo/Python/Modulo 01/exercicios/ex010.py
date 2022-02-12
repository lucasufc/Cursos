valor = float(input('Quantos reais você possui: '))
cotacao = 5.27
dolar = valor * cotacao
print('Você tem $ {:.2f}'.format(dolar).replace('.', ','))
