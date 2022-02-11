medida = float(input('Digite o valor da medida em metros: '))
centimetros = medida * 100
milimetros = centimetros * 10
print('{:.2f} m \n{:.2f} cm \n{:.2f}mm'.format(medida, centimetros, milimetros))
