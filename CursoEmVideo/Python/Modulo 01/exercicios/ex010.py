real = float(input('Quantos reais você possui: '))
cotacao = 5.27
dolar = real / cotacao
print('Com R$ {:.2f} você pode comprar U$ {:.2f}'.format(real, dolar).replace('.', ','))
