Documentación Oficial de Twilio: 

SMS: https://www.twilio.com/docs/sms/quickstart/node

Whatsapp: https://www.twilio.com/es-mx/docs/whatsapp/quickstart/node#

Recomendaciones:

Configurar un .env con los datos necesarios en base al .env_example

Para activar la recepción de whatsapp se debe realizar una solicitud previa.

whatsapp://send?phone=SandboxNumber&text=UrlEncodedKeyword ( a tomar del panel twilio)

o usar: https://www.qr-code-generator.com/ con la url pre configurada.

Status de la respuesta:  Es posible recibir un status "queued" debido al Sandbox Mode.

El ejemplo no esta modularizado.

Simplemente se encuentran reunidos los códigos en un ejecutable funcional con dos alternativas de configuración distintas.

:)
