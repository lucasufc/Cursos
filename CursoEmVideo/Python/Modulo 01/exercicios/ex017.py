from math import sqrt
cateto_oposto = float(input('Digite o valor do cateto oposto: '))
cateto_adjacente = float(input('Digite o valor do cateto adjacente: '))
hipotenusa = sqrt((cateto_adjacente ** 2 + cateto_oposto ** 2))
print('O triângulo retângulo de lados {:.2f} e {:.2f} tem uma hipotenusa de {:.2f}'.format(cateto_adjacente, cateto_oposto, hipotenusa))
