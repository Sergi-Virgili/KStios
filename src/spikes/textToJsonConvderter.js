let text = `
Pregunta 1: 

Una organización ha decidido comprar una instancia reservada (RI) de Amazon EC2 durante tres años para reducir los costes. Es posible que las cargas de trabajo de la aplicación cambien durante el período de reserva.

¿Cuál es el tipo de instancia reservada (RI) de EC2 que permitirá a la empresa intercambiar la instancia reservada comprada por otra instancia reservada con mayor potencia de cálculo si es necesario?

• RI elástico
• Premium RI
• RI estándar
• Convertible RI(Correcto)

Explicación

Cuando sus necesidades cambien, puede cambiar sus Instancias Reservadas Convertibles y continuar beneficiándose del descuento de precios de la reserva. Con las RI convertibles, puede intercambiar una o más instancias reservadas por otra instancia reservada con una configuración diferente, incluida la familia de instancias, el sistema operativo y el arrendamiento. No hay límites para el número de veces que realice un intercambio, siempre que la nueva instancia reservada convertible tenga un valor igual o superior al de las instancias reservadas convertibles originales que está intercambiando.

Las otras opciones son incorrectas:

"RI estándar" es incorrecto. No puede intercambiar instancias reservadas estándar, pero puede modificarlas. Puede modificar atributos como la zona de disponibilidad, el tamaño de la instancia (dentro de la misma familia de instancias) y el ámbito de la instancia reservada (regional o zonal). Los RI estándar proporcionan el descuento más significativo (hasta un 72% de descuento bajo demanda) y son los más adecuados para el uso en estado estacionario.

"RI elásticos" e "RI premium" no son tipos de RI válidos.

Referencias:
https://aws.amazon.com/ec2/pricing/reserved-instances/
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html

Pregunta 2: 

¿Qué proporciona AWS Snowball? (Elija DOS)

• Un catálogo de soluciones de software de terceros que los clientes necesitan para crear soluciones y administrar sus negocios
• Transferencia segura de grandes cantidades de datos dentro y fuera de la nube de AWS(Correcto)
• Un almacenamiento en la nube híbrida entre entornos locales y la nube de AWS
• Capacidades informáticas integradas que permiten a los clientes procesar datos localmente(Correcto)
• Un servicio de transferencia de datos a escala de exabytes que le permite mover cantidades extremadamente grandes de datos a AWS
Explicación

AWS Snowball es una solución de transporte de datos a escala de petabytes que utiliza dispositivos seguros para transferir grandes cantidades de datos dentro y fuera de la nube de AWS. El uso de Snowball aborda los desafíos comunes con las transferencias de datos a gran escala, incluidos los altos costos de red, los largos tiempos de transferencia y los problemas de seguridad. Los clientes de AWS utilizan Snowball para migrar datos de análisis, datos genómicos, bibliotecas de vídeo, repositorios de imágenes y copias de seguridad. La transferencia de datos con Snowball es simple, rápida, segura y puede costar tan solo una quinta parte del costo de usar Internet de alta velocidad.
Además, con AWS Snowball, puede obtener acceso a la potencia informática de la nube de AWS de forma local y rentable en lugares donde la conexión a Internet podría no ser una opción. AWS Snowball es una opción perfecta si necesita ejecutar informática en entornos robustos, austeros, móviles o desconectados (o conectados intermitentemente).
Con AWS Snowball, puede elegir entre dos dispositivos, Snowball EdgeCompute Optimizado con más capacidades informáticas, adecuado para cargas de trabajo de mayor rendimiento, o Snowball Edge Storage Optimizado con más almacenamiento, que es adecuado para migraciones de datos a gran escala y cargas de trabajo orientadas a la capacidad.
Snowball Edge Storage Optimized es la opción óptima si necesita transferir de forma segura y rápida docenas de terabytes a petabytes de datos a AWS. También es una buena opción para ejecutar análisis de propósito general, como la agregación y transformación de datos de IoT.
Snowball Edge Compute Optimized es la opción óptima si necesita un potente cómputo y almacenamiento de alta velocidad para el procesamiento de datos. Los ejemplos incluyen procesamiento de video de alta resolución, análisis avanzado de datos de IoT y optimización en tiempo real de modelos de aprendizaje automático.

Las otras opciones son incorrectas:

"Un catálogo de soluciones de software de terceros que los clientes necesitan para crear soluciones y administrar sus negocios" es incorrecto. AWS Marketplace es el servicio que proporciona este catálogo. AWS Marketplace es un catálogo digital con miles de listados de software de proveedores de software independientes que facilitan la búsqueda, prueba, compra e implementación de software que se ejecuta en AWS. AWS Marketplace incluye listados de software de categorías como seguridad, redes, almacenamiento, aprendizaje automático, inteligencia empresarial, base de datos y DevOps.

"Un almacenamiento en la nube híbrida entre entornos locales y la nube de AWS" es incorrecto. AWS Storage Gateway es el servicio que permite a sus aplicaciones locales utilizar sin problemas el almacenamiento en la nube de AWS.

"Un servicio de transferencia de datos a escala de exabytes que le permite mover cantidades extremadamente grandes de datos a AWS" es incorrecto. AWS Snowmobile es el servicio de migración de datos a escala de exabytes que le permite mover conjuntos de datos muy grandes desde las instalaciones a AWS.

Referencias:
https://aws.amazon.com/snowball/

Pregunta 3: 

Omitido¿Qué es el servicio de AWS que proporciona una red virtual dedicada a su cuenta de AWS?
• AWS VPN
• Subredes de AWS (AWS Subnets)
• Hosts dedicados de AWS (AWS Dedicated Hosts)
• Amazon VPC(Correcto)

Explicación
Amazon Virtual Private Cloud (Amazon VPC) le permite dividir una parte de la nube de AWS dedicada a su cuenta de AWS. Amazon VPC le permite lanzar recursos de AWS en una red virtual que haya definido. Esta red virtual se parece mucho a una red tradicional que operaría en su propio centro de datos, con los beneficios de usar la infraestructura escalable de AWS.

Las otras opciones son incorrectas:

"Hosts dedicados de AWS" es incorrecto. Un host dedicado de Amazon EC2 es un servidor físico con capacidad de instancia EC2 totalmente dedicada a su uso. Los hosts dedicados pueden ahorrarle dinero al permitirle aprovechar sus inversiones existentes en licencias de software vinculadas al servidor (por ejemplo, Windows Server, Windows SQL Server y SUSE Linux Enterprise Server) dentro de EC2, sujeto a sus términos de licencia. Los hosts dedicados también le brindan más flexibilidad, visibilidad y control sobre la ubicación de instancias en hardware dedicado. Esto facilita la implementación de las instancias de una manera que cumpla con los requisitos normativos y de cumplimiento.
"AWS VPN" es incorrecto. AWS VPN se compone de dos servicios: AWS Site-to-Site VPN y AWS Client VPN. AWS Site-to-Site VPN le permite conectar de forma segura su red local o sitio de sucursal a AWS. AWS Client VPN le permite conectar de forma segura a los usuarios (desde cualquier ubicación) a AWS o a redes locales.

"Subredes de AWS (AWS Subnets)" es incorrecto. Una subred es un intervalo de direcciones IP dentro de una VPC.

Referencias:
https://aws.amazon.com/vpc/

Pregunta 4: 

Omitido¿Qué utiliza Amazon CloudFront para distribuir contenido a usuarios globales con baja latencia?
• Ubicaciones de borde de AWS (AWS Edge Locations)(Correcto)
• Zonas de disponibilidad de AWS (AWS Availability Zones)
• AWS Regions
• AWS Global Accelerator

Explicación
Para entregar contenido a usuarios finales globales con menor latencia, Amazon CloudFront utiliza una red global de ubicaciones de borde y cachés de borde regionales en varias ciudades de todo el mundo. Amazon CloudFront utiliza esta red para almacenar en caché copias de su contenido cerca de sus usuarios finales. Amazon CloudFront garantiza que las solicitudes de los usuarios finales sean atendidas por la ubicación de borde más cercana. Como resultado, las solicitudes de los usuarios finales recorren una corta distancia, lo que mejora el rendimiento de los usuarios finales y reduce la carga en los servidores de origen.

Las otras opciones son incorrectas:

"AWS Global Accelerator" es incorrecto. AWS Global Accelerator y CloudFront son dos servicios independientes que utilizan la red global de AWS y sus ubicaciones de borde en todo el mundo. CloudFront mejora el rendimiento tanto para el contenido almacenable en caché (por ejemplo, imágenes y vídeos) como para el contenido dinámico (por ejemplo, la entrega dinámica del sitio). Global Accelerator es una buena opción para casos de uso específicos, como juegos, IoT o voz sobre IP.

"Zonas de disponibilidad de AWS (AWS Availability Zones)" y "Regiones de AWS (AWS Regions)" son incorrectas. Amazon CloudFront solo utiliza ubicaciones de borde o cachés de borde regionales.

Referencias:
https://aws.amazon.com/cloudfront/

Pregunta 5: 

Omitido¿Cuál de las siguientes opciones ayuda a un cliente a ver la actividad de facturación de Amazon EC2 durante el último mes?
• Informes de costos y uso de AWS (AWS Cost & Usage Reports)(Correcto)
• Administrador de sistemas de AWS (AWS Systems Manager)
• Presupuestos de AWS(AWS Budgets)
• Calculadora de precios de AWS(AWS Pricing Calculator)

Explicación
El informe de costos y uso de AWS (AWS Cost & Usage Reports) es su ventanilla única para acceder a la información más detallada disponible sobre sus costos y uso de AWS. El informe de costos y uso de AWS enumera el uso de AWS para cada categoría de servicio utilizada por una cuenta y sus usuarios de IAM en partidas horarias o diarias, así como cualquier etiqueta que haya activado para fines de asignación de costos.

Las otras opciones son incorrectas:

"Calculadora de precios de AWS" es incorrecta. AWS Pricing Calculator es un servicio web que puede utilizar para estimar el costo de su factura mensual de AWS en función de su uso esperado.

"AWS Systems Manager" es incorrecto. AWS Systems Manager proporciona una interfaz de usuario unificada para que pueda ver los datos operativos de varios servicios de AWS y le permite automatizar las tareas operativas en todos sus recursos de AWS.

"AWS Budgets" es incorrecto. AWS Budgets le ofrece la posibilidad de establecer presupuestos personalizados que le avisen cuando sus costos o uso superen (o se prevea que superen) el importe presupuestado.

Referencias:
https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/

Pregunta 6: 

OmitidoCientos de miles de ataques DDoS se registran cada mes en todo el mundo. ¿Qué servicio proporciona AWS para ayudar a proteger a los clientes de AWS de estos ataques? (Elija DOS)
• AWS WAF(Correcto)
• AWS KMS
• Amazon Cognito
• AWS Config
• AWS Shield(Correcto)

Explicación
AWS proporciona infraestructura y servicios flexibles que ayudan a los clientes a implementar mitigaciones de DDoS sólidas y crear arquitecturas de aplicaciones de alta disponibilidad que siguen las prácticas recomendadas de AWS para la resiliencia de DDoS. Estos incluyen servicios como Amazon Route 53, Amazon CloudFront, Elastic Load Balancing y AWS WAF para controlar y absorber el tráfico y desviar las solicitudes no deseadas. Estos servicios se integran con AWS Shield, un servicio de protección DDoS administrado que proporciona detección siempre activa y mitigaciones automáticas en línea para proteger las aplicaciones web que se ejecutan en AWS.

Las otras opciones son incorrectas:

"Amazon Cognito" es incorrecto. Amazon Cognito le permite agregar el registro de usuarios, el inicio de sesión y el control de acceso a sus aplicaciones web y móviles de forma rápida y sencilla.

"AWS KMS" es incorrecto. AWS KMS proporciona una solución de almacenamiento, administración y auditoría de claves de alta disponibilidad para que pueda cifrar datos dentro de sus propias aplicaciones y controlar el cifrado de datos almacenados en todos los servicios de AWS.

"AWS Config" es incorrecto. AWS Config es un servicio que le permite supervisar, evaluar y auditar todos los cambios realizados en sus recursos de AWS.

Referencias:
https://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/
`;

let questions = text
  .split("Pregunta")
  .splice(1)
  .map((question) => {
    const pregunta = question
      .split("Explicación")[0]
      .split("•")[0]
      .split("\n")
      .slice(1)
      .join("\n")
      .trim()
      .replace("Omitido", "");

    const respuestas = question
      .split("Explicación")[0]
      .split("•")
      .filter((x, index) => index != 0)
      .map((answer, index) => {
        let isCorrect = answer.includes("(Correcto)");
        let texto = answer.replace("\n", "").trim().replace("(Correcto)", "");
        return {
          answer: texto,
          correct: isCorrect,
          explanation: "",
        };
      });

    return {
      question: pregunta,
      answers: respuestas,
      // "explicacion" : question.split('Explicación')[1]
    };
  });

console.log(questions);
