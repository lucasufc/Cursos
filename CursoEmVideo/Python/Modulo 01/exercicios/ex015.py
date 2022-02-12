dias = int(input('Quantidade de dias alugados: '))
quilometros = float(input('Quantos quilômetros foram rodados: '))
total = dias * 60 + 0.15 * quilometros
print('O total a ser pago é de R${:.2f}!'.format(total).replace('.',','))
