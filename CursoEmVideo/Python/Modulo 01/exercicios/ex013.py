salario = float(input('Qual o seu antigo salário: R$ '))
aumento = float(input('Quantos % de aumento você irá receber? '))
novo_salario =  salario + (salario * aumento)/100
print('Seu novo salário será de R$ {:.2f}'.format(novo_salario).replace('.',','))
