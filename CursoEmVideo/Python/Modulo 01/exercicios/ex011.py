altura = float(input('Digite a Altura: '))
largura = float(input('Digite a Largura: '))
area = altura * largura
tinta = area / 2
print('A quantidade de tinta necessária para pintar uma parede de {:.2f}m² é {:.2f}L '.format(area, tinta))
