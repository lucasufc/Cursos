from math import cos,sin,tan,pi
angulo = float(input('Digite o valor do ângulo: '))
rad = (angulo * pi)/180
print('O ângulo de {} tem o SENO de {:.2f}'.format(angulo, sin(rad)))
print('O ângulo de {} tem o COSSENO de {:.2f}'.format(angulo, cos(rad)))
print('O ângulo de {} tem a TANGENTE de {:.2f}'.format(angulo, tan(rad)))
