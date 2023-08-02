let texto = `Pregunta 1: 

**Una organización ha decidido comprar una instancia reservada (RI) de Amazon EC2 durante tres años para reducir los costes. Es posible que las cargas de trabajo de la aplicación cambien durante el período de reserva.**

**¿Cuál es el tipo de instancia reservada (RI) de EC2 que permitirá a la empresa intercambiar la instancia reservada comprada por otra instancia reservada con mayor potencia de cálculo si es necesario?**

• **RI elástico**
• **Premium RI**
• **RI estándar**
• ****Convertible RI(Correcto)****

****Explicación****
Cuando sus necesidades cambien, puede cambiar sus Instancias Reservadas Convertibles y continuar beneficiándose del descuento de precios de la reserva. Con las RI convertibles, puede intercambiar una o más instancias reservadas por otra instancia reservada con una configuración diferente, incluida la **familia de instancias, el sistema operativo y el arrendamiento.** No hay límites para el número de veces que realice un intercambio, siempre que la nueva instancia reservada convertible tenga un valor igual o superior al de las instancias reservadas convertibles originales que está intercambiando.

***Las otras opciones son incorrectas:***

***"RI estándar" es incorrecto.*** No puede intercambiar instancias reservadas estándar, pero puede **modificarlas**. Puede modificar atributos como la zona de disponibilidad, el tamaño de la instancia (**dentro de la misma familia de instancias**) y el ámbito de la instancia reservada (regional o zonal). Los RI estándar proporcionan el descuento más significativo (hasta un 72% de descuento bajo demanda) y son los más adecuados para el uso en estado estacionario.

***"RI elásticos" e "RI premium" no son tipos de RI válidos.***

**Referencias:**
https://aws.amazon.com/ec2/pricing/reserved-instances/
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html

Pregunta 2: 

**¿Qué proporciona AWS Snowball? (Elija DOS)**

• [ ] **Un catálogo de soluciones de software de terceros que los clientes necesitan para crear soluciones y administrar sus negocios**
• [ ] **Transferencia segura de grandes cantidades de datos dentro y fuera de la nube de AWS(Correcto)**
• [ ] **Un almacenamiento en la nube híbrida entre entornos locales y la nube de AWS**
• [ ] **Capacidades informáticas integradas que permiten a los clientes procesar datos localmente(Correcto)**
• [ ] ****Un servicio de transferencia de datos a escala de exabytes que le permite mover cantidades extremadamente grandes de datos a AWS
Explicación****
**AWS Snowball** es una solución de transporte de datos a escala de petabytes que utiliza dispositivos seguros para transferir grandes cantidades de datos dentro y fuera de la nube de AWS. El uso de Snowball aborda los desafíos comunes con las transferencias de datos a gran escala, incluidos los altos costos de red, los largos tiempos de transferencia y los problemas de seguridad. Los clientes de AWS utilizan Snowball para migrar datos de análisis, datos genómicos, bibliotecas de vídeo, repositorios de imágenes y copias de seguridad. La transferencia de datos con Snowball es simple, rápida, segura y puede costar tan solo una quinta parte del costo de usar Internet de alta velocidad.
Además, con AWS Snowball, puede obtener acceso a la potencia informática de la nube de AWS de forma local y rentable en lugares donde la conexión a Internet podría no ser una opción. AWS Snowball es una opción perfecta si necesita ejecutar informática en entornos robustos, austeros, móviles o desconectados (o conectados intermitentemente).
Con AWS Snowball, puede elegir entre dos dispositivos, **Snowball EdgeCompute Optimizado** con más capacidades informáticas, adecuado para cargas de trabajo de mayor rendimiento, o **Snowball Edge Storage Optimizado** con más almacenamiento, que es adecuado para migraciones de datos a gran escala y cargas de trabajo orientadas a la capacidad.
Snowball Edge Storage Optimized es la opción óptima si necesita transferir de forma segura y rápida docenas de terabytes a petabytes de datos a AWS. También es una buena opción para ejecutar análisis de propósito general, como la agregación y transformación de datos de IoT.
Snowball Edge Compute Optimized es la opción óptima si necesita un potente cómputo y almacenamiento de alta velocidad para el procesamiento de datos. Los ejemplos incluyen procesamiento de video de alta resolución, análisis avanzado de datos de IoT y optimización en tiempo real de modelos de aprendizaje automático.

***Las otras opciones son incorrectas:***

***"Un catálogo de soluciones de software de terceros que los clientes necesitan para crear soluciones y administrar sus negocios" es incorrecto.*** AWS Marketplace es el servicio que proporciona este catálogo. AWS Marketplace es un catálogo digital con miles de listados de software de proveedores de software independientes que facilitan la búsqueda, prueba, compra e implementación de software que se ejecuta en AWS. AWS Marketplace incluye listados de software de categorías como seguridad, redes, almacenamiento, aprendizaje automático, inteligencia empresarial, base de datos y DevOps.

***"Un almacenamiento en la nube híbrida entre entornos locales y la nube de AWS" es incorrecto.*** AWS Storage Gateway es el servicio que permite a sus aplicaciones locales utilizar sin problemas el almacenamiento en la nube de AWS.

***"Un servicio de transferencia de datos a escala de exabytes que le permite mover cantidades extremadamente grandes de datos a AWS" es incorrecto.*** AWS Snowmobile es el servicio de migración de datos a escala de exabytes que le permite mover conjuntos de datos muy grandes desde las instalaciones a AWS.

**Referencias:**
https://aws.amazon.com/snowball/

Pregunta 3: **Omitido¿Qué es el servicio de AWS que proporciona una red virtual dedicada a su cuenta de AWS?**
• **AWS VPN**
• **Subredes de AWS (AWS Subnets)**
• **Hosts dedicados de AWS (AWS Dedicated Hosts)**
• **Amazon VPC(Correcto)
Explicación**
Amazon Virtual Private Cloud (**Amazon VPC**) le permite dividir una parte de la nube de AWS dedicada a su cuenta de AWS. Amazon VPC le permite lanzar recursos de AWS en una red virtual que haya definido. Esta red virtual se parece mucho a una red tradicional que operaría en su propio centro de datos, con los beneficios de usar la infraestructura escalable de AWS.

***Las otras opciones son incorrectas:***

***"Hosts dedicados de AWS" es incorrecto.*** Un host dedicado de Amazon EC2 es un servidor físico con capacidad de instancia EC2 totalmente dedicada a su uso. Los hosts dedicados pueden ahorrarle dinero al permitirle aprovechar sus inversiones existentes en licencias de software vinculadas al servidor (por ejemplo, Windows Server, Windows SQL Server y SUSE Linux Enterprise Server) dentro de EC2, sujeto a sus términos de licencia. Los hosts dedicados también le brindan más flexibilidad, visibilidad y control sobre la ubicación de instancias en hardware dedicado. Esto facilita la implementación de las instancias de una manera que cumpla con los requisitos normativos y de cumplimiento.
***"AWS VPN" es incorrecto.*** AWS VPN se compone de dos servicios: AWS Site-to-Site VPN y AWS Client VPN. AWS Site-to-Site VPN le permite conectar de forma segura su red local o sitio de sucursal a AWS. AWS Client VPN le permite conectar de forma segura a los usuarios (desde cualquier ubicación) a AWS o a redes locales.

***"AWS Subnets" es incorrecto.*** Una subred es un intervalo de direcciones IP dentro de una VPC.

**Referencias:**
https://aws.amazon.com/vpc/

Pregunta 4: **Omitido¿Qué utiliza Amazon CloudFront para distribuir contenido a usuarios globales con baja latencia?**
• **Ubicaciones de borde de AWS (AWS Edge Locations)(Correcto)**
• **Zonas de disponibilidad de AWS (AWS Availability Zones)**
• **AWS Regions**
• **AWS Global Accelerator
Explicación**
Para entregar contenido a usuarios finales globales con menor latencia, **Amazon CloudFront** utiliza una red global de ubicaciones de borde y cachés de borde regionales en varias ciudades de todo el mundo. Amazon CloudFront utiliza esta red para almacenar en caché copias de su contenido cerca de sus usuarios finales. Amazon CloudFront garantiza que las solicitudes de los usuarios finales sean atendidas por la ubicación de borde más cercana. Como resultado, las solicitudes de los usuarios finales recorren una corta distancia, lo que mejora el rendimiento de los usuarios finales y reduce la carga en los servidores de origen.

***Las otras opciones son incorrectas:***

***AWS Global Accelerator es incorrecto.*** AWS Global Accelerator y CloudFront son dos servicios independientes que utilizan la red global de AWS y sus ubicaciones de borde en todo el mundo. CloudFront mejora el rendimiento tanto para el contenido almacenable en caché (por ejemplo, imágenes y vídeos) como para el contenido dinámico (por ejemplo, la entrega dinámica del sitio). Global Accelerator es una buena opción para casos de uso específicos, como juegos, IoT o voz sobre IP.

***"Zonas de disponibilidad de AWS" y "Regiones de AWS" son incorrectas.*** Amazon CloudFront solo utiliza ubicaciones de borde o cachés de borde regionales.

**Referencias:**
https://aws.amazon.com/cloudfront/

Pregunta 5: **Omitido¿Cuál de las siguientes opciones ayuda a un cliente a ver la actividad de facturación de Amazon EC2 durante el último mes?**
• **Informes de costos y uso de AWS (AWS Cost & Usage Reports)(Correcto)**
• **Administrador de sistemas de AWS (AWS Systems Manager)**
• **Presupuestos de AWS(AWS Budgets)**
• **Calculadora de precios de AWS(AWS Pricing Calculator)
Explicación**
El informe de costos y uso de AWS (AWS Cost & Usage Reports) es su ventanilla única para acceder a la información más detallada disponible sobre sus costos y uso de AWS. El informe de costos y uso de AWS enumera el uso de AWS para cada categoría de servicio utilizada por una cuenta y sus usuarios de IAM en partidas horarias o diarias, así como cualquier etiqueta que haya activado para fines de asignación de costos.

***Las otras opciones son incorrectas:***

***"Calculadora de precios de AWS" es incorrecta.*** AWS Pricing Calculator es un servicio web que puede utilizar para estimar el costo de su factura mensual de AWS en función de su uso esperado.

***"AWS Systems Manager" es incorrecto.*** AWS Systems Manager proporciona una interfaz de usuario unificada para que pueda ver los datos operativos de varios servicios de AWS y le permite automatizar las tareas operativas en todos sus recursos de AWS.

***"AWS Budgets" es incorrecto.*** AWS Budgets le ofrece la posibilidad de establecer presupuestos personalizados que le avisen cuando sus costos o uso superen (o se prevea que superen) el importe presupuestado.

**Referencias:**
https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/

Pregunta 6: **OmitidoCientos de miles de ataques DDoS se registran cada mes en todo el mundo. ¿Qué servicio proporciona AWS para ayudar a proteger a los clientes de AWS de estos ataques? (Elija DOS)**
• [ ] **AWS WAF(Correcto)**
• [ ] **AWS KMS**
• [ ] **Amazon Cognito**
• [ ] **AWS Config**
• [ ] **AWS Shield(Correcto)
Explicación**
AWS proporciona infraestructura y servicios flexibles que ayudan a los clientes a implementar mitigaciones de DDoS sólidas y crear arquitecturas de aplicaciones de alta disponibilidad que siguen las prácticas recomendadas de AWS para la resiliencia de DDoS. Estos incluyen servicios como **Amazon Route 53, Amazon CloudFront, Elastic Load Balancing y AWS WAF** para controlar y absorber el tráfico y desviar las solicitudes no deseadas. Estos servicios se integran con **AWS Shield**, un servicio de protección DDoS administrado que proporciona detección siempre activa y mitigaciones automáticas en línea para proteger las aplicaciones web que se ejecutan en AWS.

***Las otras opciones son incorrectas:***

***"Amazon Cognito" es incorrecto.*** Amazon Cognito le permite agregar el registro de usuarios, el inicio de sesión y el control de acceso a sus aplicaciones web y móviles de forma rápida y sencilla.

***"AWS KMS" es incorrecto.*** AWS KMS proporciona una solución de almacenamiento, administración y auditoría de claves de alta disponibilidad para que pueda cifrar datos dentro de sus propias aplicaciones y controlar el cifrado de datos almacenados en todos los servicios de AWS.

***"AWS Config" es incorrecto.*** AWS Config es un servicio que le permite supervisar, evaluar y auditar todos los cambios realizados en sus recursos de AWS.

**Referencias:**
https://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/

Pregunta 7: **Omitido¿Qué debe hacer para mantener seguros los datos de los volúmenes de EBS? (Elija DOS)**
• [ ] **Almacenar una copia de seguridad diariamente en una unidad externa**
• [ ] **Crear instantáneas (snapshots)de EBS(Correcto)**
• [ ] **Asegúrese de que los datos de EBS estén cifrados en reposo(Correcto)**
• [ ] **Evite cualquier acceso no autorizado a los centros de datos de AWS**
• [ ] **Actualice regularmente el firmware en dispositivos EBS
Explicación**
La **creación de instantáneas de volúmenes de EBS** puede ayudar a garantizar que tenga una copia de seguridad de sus volúmenes de EBS en caso de que surja algún problema.

El **cifrado de Amazon EBS** ofrece una solución de cifrado sencilla para sus recursos de EBS que no requiere que cree, mantenga y proteja su propia infraestructura de administración de claves. Las operaciones de cifrado se producen en los servidores que hospedan instancias EC2, lo que **garantiza la seguridad de los datos en reposo** y los datos en tránsito entre una instancia y su almacenamiento EBS conectado.

***Las otras opciones son incorrectas:***

***"Impedir cualquier acceso no autorizado a los centros de datos de AWS" es incorrecto.*** Es responsabilidad de AWS controlar y restringir el acceso a sus centros de datos.

***"Almacenar una copia de seguridad diariamente en una unidad externa" es incorrecto.*** Para realizar una copia de seguridad de los volúmenes de EBS, debe utilizar la función Instantánea. Las instantáneas pueden proporcionar una consistencia de copia en escritura (reflejar la imagen exacta del volumen en el punto en el tiempo de la instantánea).

***"Actualizar regularmente el firmware en dispositivos EBS" es incorrecto.*** Es responsabilidad de AWS actualizar regularmente el firmware en los dispositivos de hardware.

**Información adicional:**
Las instantáneas de EBS son copias de seguridad incrementales, lo que significa que solo se guardan los bloques del dispositivo que han cambiado después de la última instantánea. Esto minimiza el tiempo necesario para crear la instantánea y ahorra en costos de almacenamiento al no duplicar datos.

**Referencias:**
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html

Pregunta 8: **OmitidoHa implementado su aplicación en varias instancias Amazon EC2. Sus clientes se quejan de que a veces no pueden acceder a su aplicación. ¿Qué servicio de AWS le permite supervisar el rendimiento de sus instancias EC2 para ayudarle a solucionar estos problemas?**
• **Amazon CloudWatch(Correcto)**
• **AWS CloudTrail**
• **AWS Config**
• **AWS Lambda
Explicación**
**Amazon CloudWatch** es un servicio que monitorea los recursos de la nube de AWS y las aplicaciones que ejecuta en AWS. Puede utilizar Amazon CloudWatch para recopilar y realizar un seguimiento de las métricas, recopilar y supervisar archivos de registro, establecer alarmas y reaccionar automáticamente a los cambios en sus recursos de AWS. Amazon CloudWatch puede supervisar recursos de AWS, como instancias de Amazon EC2, tablas de Amazon DynamoDB e instancias de base de datos de Amazon RDS, así como métricas personalizadas generadas por sus aplicaciones y servicios, y cualquier archivo de registro que generen sus aplicaciones. Puede utilizar CloudWatch para detectar comportamientos anómalos en sus entornos, realizar acciones automatizadas, solucionar problemas y descubrir información para mantener sus aplicaciones funcionando sin problemas.

***Las otras opciones son incorrectas:***

***"AWS Config" es incorrecto.*** AWS Config es un servicio totalmente administrado que le proporciona un inventario de recursos de AWS, un historial de configuración y notificaciones de cambios de configuración para habilitar la seguridad y la gobernanza. Con AWS Config puede descubrir los recursos de AWS existentes, exportar un inventario completo de sus recursos de AWS con todos los detalles de configuración y determinar cómo se configuró un recurso en cualquier momento. Estas capacidades permiten la auditoría de cumplimiento, el análisis de seguridad y el seguimiento de cambios de recursos.

***"AWS CloudTrail" es incorrecto.*** AWS CloudTrail es un servicio de AWS que se puede utilizar para supervisar todas las interacciones de los usuarios con el entorno de AWS.

***"AWS Lambda" es incorrecto.*** AWS Lambda es un servicio informático sin servidor.

**Referencias:**
https://aws.amazon.com/cloudwatch/

Pregunta 9: **Omitido¿Cuál es el servicio de base de datos de AWS que le permite cargar datos estructurados en formato clave-valor?**
• **Amazon Redshift**
• **Amazon Aurora**
• **Amazon RDS**
• **Amazon DynamoDB(Correcto)
Explicación**
Amazon DynamoDB es un servicio de base de datos NoSQL. Las bases de datos NoSQL se utilizan para datos no estructurados que normalmente se almacenan en documentos de clave-valor similares a JSON.

***Las otras opciones son incorrectas:***

***Amazon Redshift es incorrecto.*** Amazon Redshift es un servicio de almacenamiento de datos que solo admite datos relacionales, NO datos clave-valor.
Información adicional:
Amazon Redshift es un servicio de almacenamiento de datos rápido y totalmente administrado que está diseñado específicamente para aplicaciones de procesamiento analítico en línea (OLAP) e inteligencia empresarial (BI), que requieren consultas complejas en grandes conjuntos de datos.

***Amazon Aurora es incorrecto.*** Amazon Aurora es una base de datos relacional compatible con MySQL y PostgreSQL, NO una base de datos clave-valor.

***Amazon RDS es incorrecto.*** Amazon RDS es una base de datos relacional NO una base de datos clave-valor.

**Referencias:**
https://aws.amazon.com/dynamodb/
https://aws.amazon.com/products/databases/

Pregunta 10: **OmitidoUna empresa se ha trasladado a AWS recientemente. ¿Cuál de los siguientes servicios de AWS ayudará a garantizar que tienen la configuración de seguridad adecuada? (Elija DOS)**
• [ ] **AWS Trusted Advisor(Correcto)**
• [ ] **Amazon Inspector(Correcto)**
• [ ] **Amazon SNS**
• [ ] **Equipo de soporte de conserjería(Concierge Support Team)**
• [ ] **Amazon CloudWatch
Explicación**
Amazon Inspector es un servicio automatizado de evaluación de seguridad que ayuda a mejorar la seguridad y la conformidad de las aplicaciones implementadas en AWS. Amazon Inspector evalúa automáticamente las aplicaciones en busca de vulnerabilidades o desviaciones de las prácticas recomendadas. Después de realizar una evaluación, Amazon Inspector produce una lista detallada de los hallazgos de seguridad priorizados por nivel de gravedad. Estos hallazgos se pueden revisar directamente o como parte de un informe de evaluación detallado que está disponible a través de la consola o API de Amazon Inspector. Para ayudar a comenzar rápidamente, Amazon Inspector incluye una base de conocimientos de cientos de reglas asignadas a prácticas recomendadas de seguridad comunes y definiciones de vulnerabilidad. Los ejemplos de reglas integradas incluyen la comprobación de que el inicio de sesión raíz remoto está habilitado o las versiones de software vulnerables instaladas. Los investigadores de seguridad de AWS actualizan periódicamente estas reglas.

AWS Trusted Advisor ofrece un amplio conjunto de comprobaciones y recomendaciones de prácticas recomendadas en cinco categorías: **optimización de costos; seguridad; tolerancia a errores; rendimiento; y límites de servicio.** Al igual que su experto en seguridad en la nube personalizado, AWS Trusted Advisor analiza su entorno de AWS y proporciona recomendaciones de seguridad para proteger su entorno de AWS. El servicio mejora la seguridad de sus aplicaciones al cerrar brechas, examinar permisos y habilitar varias características de seguridad de AWS.

***Las otras opciones son incorrectas:***

***"Amazon SNS" es incorrecto.*** Amazon SNS es un servicio de mensajería pub/sub que le permite desacoplar microservicios, sistemas distribuidos y aplicaciones sin servidor.

***"Concierge Support Team" es incorrecto.*** El equipo de aws Concierge Support es una oferta especializada disponible solo para clientes que tengan una suscripción a Enterprise Support. El equipo de conserjería ayuda a los clientes con sus consultas de facturación y cuenta.

***"Amazon CloudWatch" es incorrecto.*** Amazon CloudWatch se utiliza para supervisar la utilización de los recursos y servicios de AWS. Puede utilizar CloudWatch para visualizar las métricas del sistema, tomar medidas automatizadas, solucionar problemas de rendimiento, descubrir información para optimizar sus aplicaciones y asegurarse de que funcionan sin problemas.

**Referencias:**
https://aws.amazon.com/premiumsupport/trustedadvisor/
https://aws.amazon.com/inspector/

Pregunta 11: **OmitidoUn desarrollador planea crear una aplicación web de dos niveles que tenga una capa de base de datos MySQL. ¿Cuál de los siguientes servicios de base de datos de AWS proporcionaría copias de seguridad automatizadas para la aplicación?**
• **Amazon Aurora(Correcto)**
• **Amazon Neptune**
• **Amazon DynamoDB**
• **Una base de datos MySQL instalada en una instancia EC2
Explicación**
**Amazon Aurora** es una base de datos relacional compatible con MySQL y PostgreSQL creada para la nube. Amazon Aurora combina el rendimiento y la disponibilidad de las bases de datos empresariales tradicionales con la simplicidad y la rentabilidad de las bases de datos de código abierto. Ofrece hasta cinco veces el rendimiento de MySQL estándar y hasta tres veces el rendimiento de PostgreSQL estándar. Amazon Aurora está diseñado para ser compatible con MySQL y con PostgreSQL, de modo que las aplicaciones y herramientas existentes puedan ejecutarse sin necesidad de modificaciones. Está disponible a través de Amazon Relational Database Service (RDS), lo que le libera de tareas administrativas que consumen mucho tiempo, como el aprovisionamiento, la aplicación de parches, la copia de seguridad, la recuperación, la detección de errores y la reparación.

***Las otras opciones son incorrectas:***

***"Una base de datos MySQL instalada en una instancia EC2" es incorrecta.*** Puede instalar MySQL en una instancia EC2, pero en este escenario, tendría que administrar la base de datos y los procesos de copia de seguridad usted mismo; no sería automático.

***"Amazon DynamoDB" es incorrecto.*** Amazon DynamoDB no admite MySQL. Amazon DynamoDB es un servicio de base de datos NoSQL.

***"Amazon Neptune" es incorrecto.*** Amazon Neptune es un servicio de base de datos de gráficos, no un servicio de base de datos MySQL. Amazon Neptune se utiliza para crear y ejecutar aplicaciones que funcionan con conjuntos de datos altamente conectados, como redes sociales, motores de recomendación y gráficos de conocimiento.

**Referencias:**
https://aws.amazon.com/rds/aurora/

Pregunta 12: **Omitido¿Cuál de las siguientes opciones está relacionada con la confiabilidad de AWS? (Elija DOS)**
• [ ] **Aprovisionamiento automático de nuevos recursos para satisfacer la demanda(Correcto)**
• [ ] **Aplicación del principio de privilegios mínimos a todos los recursos de AWS**
• [ ] **Capacidad para recuperarse rápidamente de fallas(Correcto)**
• [ ] **Proporcionar compensación a los clientes si ocurren problemas**
• [ ] **Todos los servicios de AWS se consideran servicios globales y este diseño ayuda a los clientes a atender a sus usuarios internacionales
Explicación**
El término de confiabilidad abarca la capacidad de un sistema para recuperarse de interrupciones de infraestructura o servicio, adquirir dinámicamente recursos informáticos para satisfacer la demanda y mitigar interrupciones como configuraciones erróneas o problemas transitorios de red. El aprovisionamiento automático de recursos y la capacidad de recuperarse de fallos cumplen estos criterios.

***Las otras opciones son incorrectas:***

***"Aplicar el principio de privilegios mínimos a todos los recursos de AWS" es incorrecto.*** El principio de privilegios mínimos es un concepto de seguridad relacionado con la gestión del acceso.

***"Proporcionar compensación a los clientes si ocurren problemas" es incorrecto.*** POR LO GENERAL, AWS no proporciona compensación a los clientes si se producen problemas y hacerlo no tiene nada que ver con la confiabilidad.

***"Todos los servicios de AWS se consideran servicios globales, y este diseño ayuda a los clientes a servir a sus usuarios internacionales" es incorrecto.*** Los servicios de AWS son globales, regionales o específicos de una zona de disponibilidad. Entre todos los servicios que ofrece AWS, solo unos pocos de ellos se consideran servicios globales. **Entre los ejemplos de servicios globales de AWS se incluyen: Amazon CloudFront, AWS Shield, AWS Identity and Access Management (AWS IAM) y Amazon Route 53.** Esta respuesta es incorrecta porque NO TODOS LOS SERVICIOS DE AWS son globales.

**Referencias:**
https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/wellarchitected-reliability-pillar.pdf

Pregunta 13: **Omitido¿Qué proporciona AWS para implementar tecnologías populares, como IBM MQ, en AWS con la menor cantidad de esfuerzo y tiempo?**
• **Implementaciones de referencia de AWS Quick Start(AWS Quick Start reference deployments)(Correcto)**
• **AWS OpsWorks**
• **Amazon Aurora**
• **Amazon CloudWatch
Explicación**
Las implementaciones de referencia de inicio rápido de AWS describen las arquitecturas de las soluciones empresariales más populares en AWS y proporcionan plantillas de AWS CloudFormation para automatizar su implementación. Cada Quick Start lanza, configura y ejecuta los servicios informáticos, de red, de almacenamiento y otros servicios de AWS necesarios para implementar una carga de trabajo específica en AWS, utilizando las prácticas recomendadas de AWS para la seguridad y la disponibilidad.
Los Quick Starts son creados por arquitectos y socios de soluciones de AWS para ayudarle a implementar tecnologías populares en AWS, según las prácticas recomendadas de AWS. Estos aceleradores reducen cientos de procedimientos manuales de instalación y configuración en solo unos pocos pasos, para que pueda crear su entorno de producción rápidamente y comenzar a usarlo de inmediato.

***Las otras opciones son incorrectas:***

***AWS OpsWorks" es incorrecto.*** AWS OpsWorks es un servicio de administración de configuración que proporciona instancias administradas de Chef y Puppet. Chef y Puppet son plataformas de automatización que te permiten utilizar código para automatizar las configuraciones de tus servidores.

***"Amazon CloudWatch" es incorrecto.*** Amazon CloudWatch se utiliza principalmente para supervisar la utilización de los recursos de AWS.

***"Amazon Aurora" es incorrecto.*** Amazon Aurora es un servicio de base de datos.

**Referencias:**
https://aws.amazon.com/quickstart/

Pregunta 14: **OmitidoSeleccione DOS ejemplos de los controles compartidos de AWS.**
• [ ] **Administración de parches(Correcto)**
• [ ] **Gestión de IAM**
• [ ] **Administración de VPC**
• [ ] **Operaciones del centro de datos**
• [ ] **Gestión de la configuración(Correcto)
Explicación**
Los controles compartidos son controles que se aplican tanto a la capa de infraestructura como a las capas de cliente, pero en contextos o perspectivas completamente separados. En un control compartido, AWS proporciona los requisitos para la infraestructura y el cliente debe proporcionar su propia implementación de control dentro de su uso de los servicios de AWS.
Algunos ejemplos son:
** Administración de parches: AWS es responsable de aplicar parches a los hosts subyacentes y corregir fallas dentro de la infraestructura, pero los clientes son responsables de aplicar parches a sus aplicaciones y sistemas operativos invitados.
** Administración de la configuración: AWS mantiene la configuración de sus dispositivos de infraestructura, pero un cliente es responsable de configurar sus propios sistemas operativos, bases de datos y aplicaciones invitados.
** Sensibilización y capacitación: AWS capacita a los empleados de AWS, pero un cliente debe capacitar a sus propios empleados.

**Información adicional:**
Un equipo en el que AWS ejecuta una o más máquinas virtuales se denomina máquina **host**y cada máquina virtual se denomina máquina **invitada**. AWS impulsa el concepto de virtualización al permitir que la máquina host física opere varias máquinas virtuales como invitados (para varios clientes) para ayudar a maximizar el uso efectivo de los recursos informáticos, como la memoria, el ancho de banda de la red y los ciclos de CPU.

***Las otras opciones son incorrectas:***

***"Operaciones del centro de datos" es incorrecto.*** Las operaciones del centro de datos son una responsabilidad de AWS.

***"VPC Management" y "IAM Management" son incorrectos.*** La gestión de VPC e IAM son responsabilidades del cliente.

**Referencias:**
https://aws.amazon.com/compliance/shared-responsibility-model/

Pregunta 15: **Omitido¿Cuál de las siguientes opciones NO es correcta con respecto a las instancias bajo demanda de Amazon EC2?**
• **Con las instancias bajo demanda, no se necesitan compromisos a más largo plazo ni pagos por adelantado**
• **Cuando se utilizan instancias de Linux bajo demanda, se le cobra por segundo en función de una tarifa por hora**
• **Las instancias bajo demanda siguen el modelo de precios de pago por uso de AWS**
• **Debe pagar una tarifa de inicio al lanzar una nueva instancia por primera vez.(Correcto)
Explicación**
No hay tarifas de inicio o terminación asociadas con Amazon EC2.

***Las otras opciones son incorrectas:***

***"Las instancias bajo demanda siguen el modelo de precios de pago por uso de AWS" es incorrecto.*** El modelo de precios de pago por uso de AWS es similar a la forma en que paga por servicios públicos como el agua y la electricidad. Con las *instancias bajo demanda de* Amazon EC2, solo paga por la capacidad informática que consume y, una vez que deja de usarlas, no hay costos adicionales ni tarifas de terminación.

***"Con las instancias bajo demanda, no se necesitan compromisos a más largo plazo ni pagos por adelantado" es incorrecto.*** Con las instancias bajo demanda, paga la capacidad de proceso por hora o por segundo, dependiendo de las instancias que ejecute. No se necesitan compromisos a más largo plazo ni pagos por adelantado.

***"Cuando se utilizan instancias de Linux bajo demanda, se le cobra por segundo en función de una tarifa por hora" es incorrecto.*** Con la facturación por segundo, usted paga solo por lo que usa. Toma el costo de minutos y segundos no utilizados en una hora de descuento de la factura, por lo que puede concentrarse en mejorar sus aplicaciones en lugar de maximizar el uso a la hora. Especialmente, si administra instancias que se ejecutan durante períodos de tiempo irregulares, como aplicaciones de desarrollo / pruebas, procesamiento de datos, análisis, procesamiento por lotes y juegos, puede beneficiarse.
La facturación por segundo está disponible para las instancias lanzadas en:
- Formularios Bajo demanda, reservados y spot
- Todas las regiones y zonas de disponibilidad
- Amazon Linux, Windows y Ubuntu

**Referencias:**
https://aws.amazon.com/ec2/pricing/

Pregunta 16: **OmitidoUna empresa global con un gran número de cuentas de AWS está buscando una forma en la que puedan administrar de forma centralizada las políticas de facturación y seguridad en todas las cuentas. ¿Qué servicio de AWS les ayudará a alcanzar estos objetivos?**
• **Organizaciones de AWS (AWS Organizations)(Correcto)**
• **AWS Config**
• **AWS Trusted Advisor**
• **Grupos de IAM
Explicación**
**AWS Organizations** ayuda a los clientes a gobernar de forma centralizada sus entornos a medida que crecen y escalan sus cargas de trabajo en AWS. Ya sea que los clientes sean una startup en crecimiento o una gran empresa, Organizations les ayuda a administrar de manera centralizada la facturación; controlar el acceso, el cumplimiento y la seguridad; y compartir recursos entre sus cuentas de AWS.
AWS Organizations tiene cinco beneficios principales:
1) Administre de forma centralizada las políticas de acceso en varias cuentas de AWS.
2) Automatice la creación y administración de cuentas de AWS.
3) Controlar el acceso a los servicios de AWS.
4) Consolide la facturación en varias cuentas de AWS.
5) Configure los servicios de AWS en varias cuentas.

**Las otras opciones son incorrectas:**

***"AWS Trusted Advisor" es incorrecto.*** AWS Trusted Advisor es una herramienta en línea que proporciona a los clientes orientación en tiempo real para ayudarles a aprovisionar sus recursos siguiendo las prácticas recomendadas de AWS.

***"Grupos de IAM" es incorrecto.*** Los grupos de IAM no se utilizan para administrar varias cuentas de AWS. Un grupo de IAM es una colección de usuarios de IAM, dentro de la misma cuenta de AWS, que se administran como una unidad. Los grupos de IAM permiten a los clientes especificar permisos para varios usuarios, lo que puede facilitar la administración de los permisos de esos usuarios. Por ejemplo, los clientes podrían tener un grupo llamado Administradores y otorgar a ese grupo los tipos de permisos que los administradores suelen necesitar.

***"AWS Config" es incorrecto.*** AWS Config es un servicio totalmente administrado que proporciona a los clientes un inventario de recursos de AWS, un historial de configuración y notificaciones de cambios de configuración para habilitar la seguridad y la gobernanza.

**Referencias:**
https://aws.amazon.com/organizations/

Pregunta 17: **OmitidoCon el fin de implementar las mejores prácticas cuando se trata de un "punto único de falla”(“Single Point of Failure”), debe intentar crear la mayor automatización posible tanto para detectar como para reaccionar ante fallas. ¿Cuál de los siguientes servicios de AWS ayudaría? (Elija DOS)**
• [ ] **Escalado automático (Auto Scaling)(Correcto)**
• [ ] **ELB(Correcto)**
• [ ] **ECR**
• [ ] **Amazon Athena**
• [ ] **Amazon EC2
Explicación**
Debe intentar crear la mayor automatización posible tanto para detectar como para reaccionar ante fallos. Puede utilizar servicios como ELB y Amazon Route53 para configurar comprobaciones de estado y enmascarar errores al enrutar solo el tráfico a puntos de enlace en buen estado. Además, Auto Scaling se puede configurar para reemplazar automáticamente los nodos en mal estado.
También puede reemplazar nodos en mal estado mediante la característica de recuperación automática de Amazon EC2 o servicios como AWS OpsWorks y AWS Elastic Beanstalk. No será posible predecir todos los posibles escenarios de falla desde el primer día. Asegúrese de recopilar suficientes registros y métricas para comprender el comportamiento normal del sistema. Después de entender eso, podrá configurar alarmas que activen la respuesta automatizada o la intervención manual.

***Las otras opciones son incorrectas:***

***ECR es incorrecto.*** Amazon Elastic Container Registry (ECR) es un registro de contenedores de Docker que permite a los desarrolladores almacenar, administrar e implementar imágenes de contenedores de Docker.

***Amazon Athena es incorrecto.*** Amazon Athena es un servicio de consulta interactivo que se utiliza principalmente para analizar datos en Amazon S3 mediante SQL estándar.

***Amazon EC2 es incorrecto.*** Amazon EC2 es un servicio informático basado en servidor. La tolerancia a fallos no está incorporada, debe diseñar la tolerancia a fallas utilizando los servicios que mencionamos anteriormente.
Información adicional:
Lambda es un servicio informático sin servidor. La informática sin servidor proporciona tolerancia a fallos integrada. No es necesario diseñar esta capacidad, ya que el servicio la proporciona de forma predeterminada.

**Referencias:**
https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html
https://aws.amazon.com/elasticloadbalancing/

Pregunta 18: **OmitidoUna organización tiene un gran número de empleados técnicos que operan su infraestructura de nube de AWS. ¿Qué proporciona AWS para ayudar a organizarlos en equipos y, a continuación, asignar los permisos adecuados para cada equipo?**
• **Grupos de IAM(Correcto)**
• **Organizaciones de AWS**
• **Roles de IAM**
• **Usuarios de IAM
Explicación**
Un **grupo de IAM** es una colección de usuarios de IAM que se administran como una unidad. Los grupos le permiten especificar permisos para varios usuarios, lo que puede facilitar la administración de los permisos para esos usuarios. Por ejemplo, podría tener un grupo llamado Administradores y darle a ese grupo los tipos de permisos que los administradores suelen necesitar. Cualquier usuario de ese grupo tiene automáticamente los permisos asignados al grupo. Si un nuevo usuario se une a su organización y necesita privilegios de administrador, puede asignar los permisos adecuados agregando el usuario a ese grupo. Del mismo modo, si una persona cambia de trabajo en su organización, en lugar de editar los permisos de ese usuario, puede quitarlo de los grupos antiguos y agregarlo a los nuevos grupos apropiados.

***Las otras opciones son incorrectas:***

***"Rol de IAM" es incorrecto.*** Un rol de IAM es una identidad de IAM que puede crear en su cuenta y que tiene permisos específicos. Los roles de IAM le permiten delegar el acceso (durante un tiempo limitado) a usuarios o servicios que normalmente no tienen acceso a los recursos de AWS de su organización. Los usuarios de IAM o los servicios de AWS pueden asumir un rol para obtener credenciales de seguridad temporales que se pueden utilizar para interactuar con recursos específicos de AWS.
Puede utilizar roles para delegar el acceso a usuarios, aplicaciones o servicios que normalmente no tienen acceso a sus recursos de AWS. Por ejemplo, es posible que desee conceder a los usuarios de su cuenta de AWS acceso a recursos que normalmente no tienen o conceder a los usuarios de una cuenta de AWS acceso a los recursos de otra cuenta. O bien, es posible que desee permitir que una aplicación móvil utilice recursos de AWS, pero no desee incrustar claves de AWS en la aplicación. A veces desea dar acceso a AWS a los usuarios que ya tienen identidades definidas fuera de AWS, como en su directorio corporativo. O bien, es posible que desee conceder acceso a su cuenta a terceros para que puedan realizar una auditoría de sus recursos. Para estos escenarios, puede delegar el acceso a los recursos de AWS mediante un rol de IAM.

***"Usuarios de IAM" es incorrecto.*** Un usuario de IAM es una entidad que se crea en AWS para representar a la persona o aplicación que lo utiliza para interactuar directamente con AWS. Un uso principal para los usuarios de IAM es ofrecer a los usuarios la capacidad de iniciar sesión en la consola de administración de AWS para tareas interactivas y realizar solicitudes programáticas a los servicios de AWS mediante la API o la CLI. Un usuario en AWS consta de un nombre, una contraseña para iniciar sesión en la consola de administración de AWS y hasta dos claves de acceso que se pueden utilizar con la API o la CLI. Cuando se crea un usuario de IAM, se le conceden permisos convirtiéndolo en miembro de un grupo que tiene políticas de permisos adecuadas asociadas (recomendado) o adjuntando directamente políticas al usuario.

Información adicional:
Un rol de IAM es similar a un usuario de IAM, ya que es una identidad de AWS con políticas de permisos que determinan lo que la identidad puede y no puede hacer en AWS. Sin embargo, en lugar de estar asociado de forma única con una persona, un rol está destinado a ser asumido por cualquier persona (o cualquier servicio, aplicación, ... etc) quien lo necesita. Además, un rol no tiene credenciales estándar a largo plazo, como una contraseña o claves de acceso asociadas. En su lugar, cuando asume un rol, le proporciona credenciales de seguridad temporales para su sesión de rol. Los roles de IAM están destinados a ser asumidos por entidades autorizadas, como usuarios de IAM, aplicaciones o un servicio de AWS como Amazon EC2.

***"AWS Organizations" es incorrecto.*** AWS Organizations se puede utilizar para agrupar cuentas de AWS, no usuarios de IAM (los empleados). AWS Organization le ayuda a administrar de forma centralizada la facturación; controlar el acceso, el cumplimiento y la seguridad; y compartir recursos entre varias cuentas de AWS.

**Referencias:**
https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html

Pregunta 19: **Omitido¿Qué servicio se utiliza para garantizar que los mensajes entre los componentes de software no se pierdan si uno o más componentes fallan?**
• **Amazon Connect**
• **Amazon SQS(Correcto)**
• **Amazon SES**
• **AWS Direct Connect
Explicación**
Amazon Simple Queue Service (SQS) es un servicio de cola de mensajes totalmente administrado que le permite enviar, almacenar y recibir mensajes entre componentes de software en cualquier volumen, sin perder mensajes ni requerir que otros servicios estén disponibles. SQS le permite desacoplar los componentes de la aplicación para que se ejecuten de forma independiente, lo que aumenta la tolerancia general a fallos del sistema. Varias copias de cada mensaje se almacenan de forma redundante en varias zonas de disponibilidad para que estén disponibles siempre que sea necesario.

***Las otras opciones son incorrectas:***

***Amazon SES es incorrecto.*** Amazon SES (Amazon Simple Email Service) es una plataforma de mensajería de correo electrónico flexible, asequible y altamente escalable para empresas y desarrolladores.

***Amazon Connect es incorrecto.*** Amazon Connect es un servicio de centro de contacto basado en la nube que facilita a las empresas la prestación de servicio al cliente a bajo costo.

***AWS Direct Connect es incorrecto.*** AWS Direct Connect es una solución de servicio en la nube que se utiliza para establecer una conexión de red dedicada entre sus instalaciones y AWS.

**Referencias:**
https://d1.awsstatic.com/whitepapers/aws-overview.pdf

Pregunta 20: **OmitidoHa observado que se han terminado varias instancias críticas de Amazon EC2. ¿Cuál de los siguientes servicios de AWS le ayudaría a determinar quién realizó esta acción?**
• **AWS Trusted Advisor**
• **EC2 Instance Usage Report**
• **Amazon Inspector**
• **AWS CloudTrail(Correcto)
Explicación**
AWS CloudTrail es un servicio que permite la gobernanza, la conformidad, la auditoría operativa y la auditoría de riesgos de su cuenta de AWS. Con CloudTrail, puede registrar, monitorear continuamente y retener la actividad de la cuenta relacionada con las acciones en toda su infraestructura de AWS. CloudTrail proporciona un historial de eventos de la actividad de su cuenta de AWS, incluidas las acciones realizadas a través de la consola de administración de AWS, los SDK de AWS, las herramientas de línea de comandos y otros servicios de AWS. Este historial de eventos simplifica el análisis de seguridad, el seguimiento de cambios de recursos y la solución de problemas.

***Las otras opciones son incorrectas:***

***"Amazon Inspector" es incorrecto.*** Amazon Inspector es un servicio automatizado de evaluación de seguridad que ayuda a mejorar la seguridad y la conformidad de las aplicaciones implementadas en AWS.

***"Informe de uso de instancias EC2" es incorrecto.*** Este informe muestra su uso histórico de la instancia EC2 y le ayuda a planificar el uso futuro de EC2. Los informes de uso de instancias EC2 están diseñados para facilitarle el seguimiento y la mejor gestión de su uso y gasto de EC2.

***"AWS Trusted Advisor" es incorrecto.*** AWS Trusted Advisor es una herramienta en línea que proporciona orientación en tiempo real para ayudarle a aprovisionar sus recursos siguiendo las prácticas recomendadas de AWS.

**Referencias:**
https://aws.amazon.com/cloudtrail/

Pregunta 21: **Omitido¿Cómo puede ver la distribución del gasto de AWS en una de sus cuentas de AWS?**
• **Poniéndose en contacto con el equipo de AWS Finance**
• **Mediante AWS Cost Explorer(Correcto)**
• **Mediante la consola de Amazon VPC**
• **Poniéndose en contacto con el equipo de AWS Support
Explicación**
**AWS Cost Explorer** es una herramienta gratuita que puede utilizar para ver sus costos y uso. Puede ver los datos hasta los últimos 13 meses, pronosticar cuánto es probable que gaste durante los próximos 12 meses y obtener recomendaciones sobre qué instancias reservadas comprar. Puede utilizar AWS Cost Explorer para ver patrones en cuánto gasta en recursos de AWS a lo largo del tiempo, identificar áreas que necesitan más información y ver las tendencias que puede utilizar para comprender sus costos. También puede especificar intervalos de tiempo para los datos y ver los datos de tiempo por día o por mes.

***Las otras opciones son incorrectas:***

***"Poniéndose en contacto con el equipo de AWS Finance" es incorrecto.*** El equipo de aws Finance proporciona análisis basados en datos, soporte de decisiones estratégicas, planificación financiera y control a los equipos que planifican y crean centros de datos, diseñan y originan servidores, y desarrollan y venden servicios en la nube a gran escala a desarrolladores y empresas de todo el mundo.

***"Poniéndose en contacto con el equipo de AWS Support" es incorrecto.*** El equipo de soporte de AWS le indicará que utilice AWS Cost Explorer.

***"Mediante el uso de la consola de Amazon VPC" es incorrecto.*** Puede utilizar la consola de Amazon Virtual Private Cloud para lanzar recursos de AWS, como instancias Amazon EC2. Puede usarlo para especificar un intervalo de direcciones IP para la VPC, agregar subredes, asociar grupos de seguridad y configurar tablas de enrutamiento.

**Referencias:**
https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-explorer-what-is.html

Pregunta 22: **Omitido¿Qué gana al configurar la facturación consolidada para cinco cuentas de AWS diferentes en otra cuenta maestra?**
• **Cada cuenta de AWS obtiene descuentos por volumen(Correcto)**
• **Los costos de los servicios de AWS se reducirán a la mitad del precio original**
• **Cada cuenta de AWS obtiene cinco veces la capacidad de los servicios de capa gratuita**
• **La función de facturación consolidada es solo para fines organizativos
Explicación**
La facturación consolidada de AWS permite a una organización consolidar los pagos de varias cuentas de AWS dentro de una sola organización mediante la creación de una única cuenta de pago. Para fines de facturación, AWS trata todas las cuentas de la factura consolidada como una sola cuenta. Algunos servicios, como Amazon EC2 y Amazon S3, tienen niveles de precios por volumen en determinadas dimensiones de uso que ofrecen al usuario precios más bajos cuando utiliza más el servicio. Por ejemplo, si usa 50 TB en cada cuenta, normalmente se le cobraría $ 23 * 50 * 3 (porque son 3 cuentas diferentes), pero con la facturación consolidada se le cobraría $ 23 * 50 + $ 22 * 50 * 2 (porque se tratan como una cuenta), lo que significa que ahorraría $ 100.

**CÓMO FUNCIONA**
Después de crear una organización y comprobar que es el propietario de la dirección de correo electrónico asociada a la cuenta maestra (de administración), puede invitar a las cuentas de AWS existentes a unirse a su organización. Cuando invita a una cuenta, el servicio AWS Organizations envía una invitación al propietario de la cuenta, que decide si acepta o rechaza la invitación. Si aceptan, su cuenta se convierte en miembro de esa organización.
En el momento en que una cuenta acepta la invitación para unirse a una organización, la cuenta maestra de la organización se hace responsable de todos los cargos acumulados por la nueva cuenta de miembro. El método de pago adjunto a la cuenta de miembro ya no se utiliza. En cambio, el método de pago adjunto a la cuenta maestra de la organización paga todos los cargos acumulados por la cuenta de miembro.

**Referencias:**
https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html
https://aws.amazon.com/s3/pricing/

Pregunta 23: **Omitido¿Cuál de las siguientes opciones NO pertenece a los modelos de AWS Cloud Computing?**
• **Software como servicio (SaaS)**
• **Redes como servicio (NaaS)(Correcto)**
• **Infraestructura como servicio (IaaS)**
• **Plataforma como servicio (PaaS)
Explicación**
Existen tres modelos de Cloud Computing:
1) Infraestructura como servicio (IaaS): la infraestructura como servicio (IaaS) contiene los bloques de construcción básicos para la TI en la nube y, por lo general, proporciona acceso a funciones de red, computadoras (hardware virtual o dedicado) y espacio de almacenamiento de datos. IaaS le proporciona el más alto nivel de flexibilidad y control de gestión sobre sus recursos de TI y es más similar a los recursos de TI existentes con los que muchos departamentos y desarrolladores de TI están familiarizados hoy en día.
2) Plataforma como servicio (PaaS): la plataforma como servicio (PaaS) elimina la necesidad de que su organización administre la infraestructura subyacente (generalmente hardware y sistemas operativos) y le permite centrarse en la implementación y administración de sus aplicaciones. Esto le ayuda a ser más eficiente, ya que no necesita preocuparse por la adquisición de recursos, la planificación de la capacidad, el mantenimiento del software, la aplicación de parches o cualquiera de los otros trabajos pesados indiferenciados involucrados en la ejecución de su aplicación.
3) Software como servicio (SaaS): el software como servicio (SaaS) le proporciona un producto completo que es ejecutado y administrado por el proveedor de servicios. En la mayoría de los casos, las personas que se refieren al Software como Servicio se refieren a aplicaciones de usuario final. Con una oferta SaaS, no tiene que pensar en cómo se mantiene el servicio o cómo se administra la infraestructura subyacente; solo necesita pensar en cómo usará esa pieza de software en particular. Un ejemplo común de una aplicación SaaS es el correo electrónico basado en la web que puede usar para enviar y recibir correo electrónico sin tener que administrar las adiciones de funciones al producto de correo electrónico o mantener los servidores y sistemas operativos en los que se ejecuta el programa de correo electrónico.

***Los servicios de red se proporcionan como parte del modelo IaaS.***

**Referencias:**
https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/types-of-cloud-computing.html

Pregunta 24: **OmitidoEn el modelo de responsabilidad compartida de AWS, ¿cuál de las siguientes es la responsabilidad del cliente? (Elija DOS)**
• [ ] **Control del acceso físico a los recursos informáticos**
• [ ] **Aplicación de parches a la infraestructura de red**
• [ ] **Establecer reglas de complejidad de contraseñas(Correcto)**
• [ ] **Configuración de reglas de acceso a la red(Correcto)**
• [ ] **Eliminación de discos
Explicación**
El cliente es responsable de proteger su red mediante la configuración de grupos de seguridad, listas de control de acceso a la red (ACL de red) y tablas de enrutamiento. El cliente también es responsable de establecer una **política de contraseñas** en su cuenta de AWS que especifique la complejidad y los períodos de rotación obligatorios para las contraseñas de sus usuarios de IAM.

***Las otras opciones son incorrectas:***

***"Eliminación de discos" es incorrecto.*** Eliminación de discos (Desmantelamiento de dispositivos de almacenamiento): cuando un dispositivo de almacenamiento ha llegado al final de su vida útil, los procedimientos de AWS incluyen un proceso de desmantelamiento diseñado para evitar que los datos de los clientes se expongan a personas no autorizadas. Todos los dispositivos de almacenamiento magnético fuera de servicio se desmagnetizan y destruyen físicamente de acuerdo con las prácticas estándar de la industria.

***"Controlar el acceso físico a los recursos informáticos" es incorrecto.*** AWS es responsable de controlar el acceso físico a los centros de datos.

***"Parchear la infraestructura de red" es incorrecto.*** La aplicación de parches a la infraestructura subyacente es responsabilidad de AWS. El cliente es responsable de aplicar parches al sistema operativo de sus instancias EC2 y a cualquier software instalado en estas instancias.

**Referencias:**
https://aws.amazon.com/compliance/shared-responsibility-model/

Pregunta 25: **OmitidoTiene soporte básico de AWS y ha descubierto que algunos recursos de AWS se utilizan de forma malintencionada y esos recursos podrían poner en peligro sus datos. ¿Qué debes hacer?**
• **Póngase en contacto con el equipo de servicio al cliente de AWS**
• **Póngase en contacto con el equipo de seguridad de AWS**
• **Póngase en contacto con el equipo de AWS Abuse(Correcto)**
• **Póngase en contacto con el equipo de aws Concierge
Explicación**
**El equipo de AWS Abuse** puede ayudarle cuando los recursos de AWS se utilizan para participar en los siguientes tipos de comportamiento abusivo:
I. Spam: está recibiendo correos electrónicos no deseados de una dirección IP propiedad de AWS o los recursos de AWS se están utilizando para enviar spam a sitios web o foros.
II. Análisis de puertos: sus registros muestran que una o más direcciones IP propiedad de AWS están enviando paquetes a varios puertos de su servidor, y cree que esto es un intento de descubrir puertos no seguros.
III. Ataques de denegación de servicio (DOS): sus registros muestran que una o más direcciones IP propiedad de AWS se están utilizando para inundar los puertos de sus recursos con paquetes, y cree que esto es un intento de abrumar o bloquear su servidor o software que se ejecuta en su servidor.
IV. Intentos de intrusión: sus registros muestran que se están utilizando una o más direcciones IP propiedad de AWS para intentar iniciar sesión en sus recursos.
V. Alojamiento de contenido objetable o protegido por derechos de autor: tiene pruebas de que los recursos de AWS se utilizan para alojar o distribuir contenido ilegal o distribuir contenido protegido por derechos de autor sin el consentimiento del titular de los derechos de autor.
VI. Distribución de malware: tiene pruebas de que los recursos de AWS se utilizan para distribuir software creado a sabiendas para comprometer o causar daños a los equipos o máquinas en los que está instalado.

Nota: Cualquier persona puede denunciar el abuso de los recursos de AWS, no solo los clientes de AWS.

***Las otras opciones son incorrectas:***

***"Póngase en contacto con el equipo de seguridad de AWS" es incorrecto.*** El equipo de seguridad de AWS es responsable de la seguridad de los servicios ofrecidos por AWS.

***"Póngase en contacto con el equipo de AWS Concierge" es incorrecto.*** El equipo de AWS Concierge puede ayudarle con los problemas relacionados con la facturación y la administración de cuentas.

***"Póngase en contacto con el equipo de servicio al cliente de AWS" es incorrecto.*** El equipo de servicio al cliente de AWS está a la vanguardia de esta tecnología transformadora que ayuda a una lista global de clientes que aprovechan un conjunto creciente de servicios y características para ejecutar sus aplicaciones de misión crítica. El equipo ayuda a los clientes de AWS a comprender de qué se trata la computación en la nube y si puede ser útil para sus necesidades empresariales.

**Referencias:**
https://aws.amazon.com/security/vulnerability-reporting/

Pregunta 26: **OmitidoAjustar la capacidad de cómputo dinámicamente para reducir costos, es una implementación  práctica de la nube de AWS.**
• **Paralelizar tareas**
• **Adoptar una arquitectura monolítica**
• **Cree seguridad en cada capa**
• **Implementar elasticidad(Correcto)
Explicación**
En el modelo tradicional de TI basado en centros de datos, una vez que se implementa la infraestructura, generalmente se ejecuta si se necesita o no, y toda la capacidad se paga, independientemente de cuánto se use. En la nube, los **recursos son elásticos**, lo que significa que pueden crecer instantáneamente (para mantener el rendimiento) o reducirse (para reducir los costos).

***Las otras opciones son incorrectas.***

***"Adoptar arquitectura monolítica" es incorrecto.*** AWS recomienda adoptar la arquitectura de microservicios, no la arquitectura monolítica. Con las arquitecturas monolíticas, los componentes de la aplicación están **estrechamente acoplados** y se ejecutan como un solo servicio. Con una arquitectura de microservicios, una aplicación se construye como componentes **poco acoplados**.
Los beneficios de la arquitectura de microservicios incluyen:
1- Los microservicios permiten que cada servicio se escale de forma independiente para satisfacer la demanda de la característica de la aplicación que admite.
2- Los equipos están capacitados para trabajar de manera más independiente y más rápida.
3- Los microservicios permiten la integración continua y la entrega continua, lo que facilita la prueba de nuevas ideas y la reversión si algo no funciona.
4- La independencia del servicio aumenta la resistencia de una aplicación al fracaso. En una arquitectura monolítica, si un solo componente falla, puede hacer que toda la aplicación falle. Con los microservicios, las aplicaciones manejan la falla total del servicio degradando la funcionalidad y no bloqueando toda la aplicación.

***"Paralelizar tareas" es incorrecto.*** Un ejemplo de paralelización es cuando se utiliza un equilibrador de carga para distribuir las solicitudes entrantes entre varias instancias asincrónicas o cuando se utiliza la carga multiparte de AWS para cargar objetos grandes en partes. El ajuste de la capacidad hacia arriba o hacia abajo en función de la demanda define la elasticidad de la nube de AWS, no la paralelización.

***"Construir seguridad en cada capa" es incorrecto.*** Esta opción está relacionada con la seguridad.

**Referencias:**
https://wa.aws.amazon.com/wat.concept.elasticity.en.html
http://aws001.s3.amazonaws.com/trailhead/TrailHead_ArchitectingInTheCloud.pdf

Pregunta 27: **OmitidoDesea ejecutar una aplicación de cuestionario durante solo un día (sin interrupción), ¿qué opción de compra de Amazon EC2 debe utilizar?**
• **Instancias dedicadas**
• **Instancias reservadas**
• **Instancias bajo demanda(Correcto)**
• **Spot Instancias
Explicación**
Con las instancias Bajo demanda, paga la capacidad de cómputo por hora o segundo (mínimo de 60 segundos) sin compromisos a largo plazo. Puede aumentar o disminuir su capacidad de cómputo en función de las demandas de su aplicación y solo pagar por lo que usa.
El uso de instancias Bajo demanda lo libera de los costos y complejidades de la planificación, compra y mantenimiento de hardware y transforma lo que comúnmente son costos fijos grandes en costos variables mucho más pequeños. Las instancias bajo demanda también eliminan la necesidad de comprar capacidad de "red de seguridad" para manejar picos de tráfico periódicos.

***Las otras opciones son incorrectas:***

***"Instancias reservadas" es incorrecto.*** Las instancias reservadas no son apropiadas en este caso porque la duración de la reserva más corta es de un año.

***"Detectar instancias" es incorrecto.*** Las instancias de spot no son la opción correcta porque la aplicación debe ejecutarse sin interrupción.

***"Instancias dedicadas" es incorrecto.*** Se pueden utilizar instancias dedicadas si necesita que su instancia esté físicamente aislada en el nivel de hardware del host de las instancias que pertenecen a otras cuentas de AWS.

**Referencias:**
https://d1.awsstatic.com/whitepapers/aws-overview.pdf

Pregunta 28: **OmitidoUna empresa está introduciendo un nuevo producto a sus clientes, y está esperando un aumento en el tráfico a su aplicación web. Como parte de su plan de soporte empresarial, ¿cuál de las siguientes opciones proporciona a la empresa orientación sobre arquitectura y escalamiento?**
• **AWS Support Concierge Service**
• **Infrastructure Event Management(Correcto)**
• **AWS Knowledge Center**
• **AWS Personal Health Dashboard
Explicación**
AWS Infrastructure Event Management es un compromiso a corto plazo con AWS Support, incluido en la oferta de productos de soporte de nivel empresarial y disponible para su compra adicional para suscriptores de soporte de nivel empresarial. AWS Infrastructure Event Management se asocia con sus recursos técnicos y de proyecto para obtener una comprensión profunda de su caso de uso y proporcionar orientación sobre arquitectura y escalado para un evento. Los ejemplos de casos de uso comunes para AWS Event Management incluyen lanzamientos publicitarios, lanzamientos de nuevos productos y migraciones de infraestructura a AWS.

***Las otras opciones son incorrectas:***

***"AWS Personal Health Dashboard" es incorrecto.*** AWS Personal Health Dashboard proporciona alertas y orientación de corrección cuando AWS experimenta eventos que pueden afectarle. Mientras que el panel de estado del servicio muestra el estado general de los servicios de AWS, el panel de estado personal le ofrece una vista personalizada del rendimiento y la disponibilidad de los servicios de AWS subyacentes a sus recursos de AWS.

***AWS Knowledge Center es incorrecto.*** [AWS Knowledge Center](https://aws.amazon.com/premiumsupport/knowledge-center/) no forma parte del plan de soporte empresarial. AWS Knowledge Center está disponible para todos de forma gratuita. El Centro de conocimiento de AWS ayuda a responder a las preguntas más frecuentes de los clientes de AWS. El Centro de conocimiento de AWS no proporciona orientación caso por caso.

***El servicio de conserjería de AWS Support es incorrecto.*** EL servicio de conserjería de AWS Support ayuda a los clientes con las consultas sobre cuentas y facturación.

**Referencias:**
https://aws.amazon.com/premiumsupport/features/

Pregunta 29: **OmitidoA una empresa le preocupa que estén gastando dinero en recursos informáticos subutilizados en AWS. ¿Qué característica de AWS ayudará a garantizar que sus aplicaciones agreguen o eliminen automáticamente la capacidad informática de EC2 para que coincida estrechamente con la demanda requerida?**
• **Balanceador Elástico de carga(AWS Elastic Load Balancer)**
• **Escalado automático de AWS(AWS Auto Scaling)(Correcto)**
• **Presupuestos de AWS(AWS Budgets)**
• **Explorador de costos de AWS(AWS Cost Explorer)
Explicación**
**AWS Auto Scaling** es la característica que automatiza el proceso de adición/eliminación de la capacidad del servidor (en función de la demanda). El escalado automático le permite reducir sus costos al desactivar automáticamente los recursos que no están en uso. Por otro lado, el escalado automático garantiza que la aplicación se ejecute de manera efectiva mediante el aprovisionamiento de más capacidad del servidor si es necesario.

***Las otras opciones son incorrectas:***

***"AWS Budgets" es incorrecto.*** AWS Budgets le ofrece la posibilidad de establecer presupuestos personalizados que le avisen cuando sus costos o uso superen (o se prevea que superen) el importe presupuestado.

***"AWS Elastic Load Balancer" es incorrecto.*** AWS Elastic Load Balancer (ELB) es un servicio que distribuye el tráfico entrante de la aplicación a varios destinos que usted defina.

***"AWS Cost Explorer" es incorrecto.*** AWS Cost Explorer proporciona una interfaz fácil de usar que le permite visualizar, comprender y administrar los costos y el uso de AWS a lo largo del tiempo.

**Referencias:**
https://aws.amazon.com/autoscaling/

Pregunta 30: **OmitidoUna empresa japonesa aloja sus aplicaciones en instancias Amazon EC2 en la región de Tokio. La compañía ha abierto nuevas sucursales en los Estados Unidos, y los usuarios estadounidenses se quejan de la alta latencia. ¿Qué puede hacer la empresa para reducir la latencia de los usuarios en los EE.UU. mientras minimiza los costos?**
• **Aplicación de la política de enrutamiento basada en latencia de Amazon Connect**
• **Registrar un nuevo nombre de dominio de EE. UU. para servir a los usuarios en los EE. UU.**
• **Construir un nuevo centro de datos en los Estados Unidos e implementar un modelo híbrido**
• **Implementación de nuevas instancias Amazon EC2 en una región ubicada en EE. UU.(Correcto)
Explicación**
La única forma de reducir la latencia para los usuarios de EE. UU. es aprovisionar nuevas instancias de Amazon EC2 en una región más cercana o en EE. UU., O mediante amazon CloudFront para almacenar en caché copias del contenido en ubicaciones de borde cercanas a los usuarios de EE. UU. En ambos casos, las solicitudes de los usuarios recorrerán una distancia más corta a través de la red y el rendimiento mejorará.

***Las otras opciones son incorrectas:***

***"Construir un nuevo centro de datos en los Estados Unidos e implementar un modelo híbrido" es incorrecto.*** Construir un nuevo centro de datos en los Estados Unidos es significativamente costoso.

***"Aplicación de la política de enrutamiento basada en latencia de Amazon Connect" es incorrecto.*** El enrutamiento basado en latencia es una característica de Amazon Route 53, no de Amazon Connect. Amazon Connect es un servicio de centro de contacto basado en la nube que ayuda a las empresas a ofrecer servicio al cliente a un bajo costo.

***"Registrar un nuevo nombre de dominio de EE.UU. para servir a los usuarios en los EE.UU."" es incorrecto.*** No existe relación entre los nombres de dominio y la latencia. Los nombres de dominio son globales y no están vinculados a una región específica.
Un nombre de dominio (example.com) es solo una forma de dirigir a los usuarios finales a un sitio web \ aplicación específica en lugar de usar direcciones IP (116.203.247.177, por ejemplo), que son muy difíciles de recordar.

***Referencias:***
https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf

Pregunta 31: **Omitido¿Cuál de los siguientes es un ejemplo de escalado horizontal en la nube de AWS?**
• **Aumento de la capacidad de cómputo de una única instancia EC2 para hacer frente a las crecientes demandas de una aplicación**
• **Agregar más instancias EC2 del mismo tamaño para controlar un aumento en el tráfico(Correcto)**
• **Agregar más capacidad de RAM a una instancia EC2**
• **Sustitución de una instancia EC2 existente por una más grande y potente
Explicación**
**Escalado horizontal:**
El escalado horizontal se realiza a través de un aumento en el número de recursos (por ejemplo, agregar más discos duros a una matriz de almacenamiento o agregar más servidores para admitir una aplicación). Esta es una excelente manera de crear aplicaciones a escala de Internet que aprovechen la elasticidad de la computación en la nube.

**Escalado vertical:**
El escalado vertical se realiza a través de un aumento en las especificaciones de un recurso individual (por ejemplo, actualizar un servidor con un disco duro más grande, agregar más memoria o aprovisionar una CPU más rápida). En Amazon EC2, esto se puede lograr fácilmente deteniendo una instancia y cambiándola de tamaño a un tipo de instancia que tenga más RAM, CPU, E/S o capacidades de red. Esta forma de escalar puede eventualmente llegar a un límite y no siempre es un enfoque rentable o altamente disponible. Sin embargo, es muy fácil de implementar y puede ser suficiente para muchos casos de uso, especialmente como una solución a corto plazo.

**Información adicional:**
El escalado vertical a menudo se limita a las restricciones de capacidad de una sola máquina, escalar más allá de esa capacidad a menudo implica tiempo de inactividad y viene con un límite superior. Con el escalado horizontal, a menudo es más fácil escalar dinámicamente agregando más máquinas en paralelo. Por lo tanto, en la mayoría de los casos, se recomienda el escalado horizontal sobre el escalado vertical.

***Las otras opciones son incorrectas:***

Todas las demás opciones son ejemplos de escalado vertical.

**Referencias:**
https://wa.aws.amazon.com/wat.concept.horizontal-scaling.en.html

Pregunta 32: **Omitido¿Cuál de las siguientes opciones debe proporcionar un usuario de IAM para interactuar con los servicios de AWS mediante la AWS Command Line Interface (AWS CLI)?**
• **Nombre de usuario y contraseña**
• **(Claves de acceso)Access keys(Correcto)**
• **Token secreto**
• **ID de usuario
Explicación**
Las claves de acceso consisten en un ID de clave de acceso y una clave de acceso secreta, que se utilizan para firmar solicitudes mediante programación a AWS mediante la CLI o el SDK.

**Referencias:**
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

Pregunta 33: **Omitido¿Cuáles son los beneficios de tener una infraestructura alojada en AWS? (Elija DOS)**
• [ ] **No hay necesidad de preocuparse por la seguridad**
• [ ] **Aumento de la velocidad y la agilidad(Correcto)**
• [ ] **Toda la seguridad física y la mayor parte de la seguridad de datos / red se encargan de usted(Correcto)**
• [ ] **Obtener un control completo sobre la infraestructura física**
• [ ] **Operar aplicaciones en nombre de los clientes
Explicación**
Toda la seguridad física se cuida por usted. Los centros de datos de Amazon están rodeados por tres capas físicas de seguridad. "Nada puede entrar o salir sin activar una alarma". Es importante mantener a los malos fuera, pero igualmente importante mantener los datos, por lo que Amazon monitorea el equipo entrante, rastreando cada disco que ingresa a la instalación. Y "si se rompe, no devolvemos el disco para la garantía. La única forma en que un disco sale de nuestro centro de datos es cuando es confeti".
La mayoría (no todos) los datos y la seguridad de la red se encargan de usted. Cuando hablamos de la seguridad de los datos/red, AWS tiene un "modelo de responsabilidad compartida" en el que AWS y el cliente comparten la responsabilidad de protegerlos. Por ejemplo, el cliente es responsable de crear reglas para asegurar su tráfico de red utilizando los grupos de seguridad y también es responsable de proteger los datos con cifrado.

"Aumentar la velocidad y la agilidad" también es una respuesta correcta porque en un entorno de computación en la nube, los nuevos recursos de TI están a solo un clic de distancia, lo que significa que requiere menos tiempo para que esos recursos estén disponibles para los desarrolladores, desde semanas hasta solo minutos. Esto resulta en un aumento dramático en la agilidad para la organización, ya que el costo y el tiempo que lleva experimentar y desarrollar es significativamente menor.

***Las otras opciones son incorrectas:***

***"Obtener un control completo sobre la infraestructura física" es incorrecto.*** La infraestructura física es responsabilidad de AWS, no del cliente.

***"Operar aplicaciones en nombre de los clientes" es incorrecto.*** Los clientes de AWS son responsables de crear y operar sus aplicaciones.

***"No hay necesidad de preocuparse por la seguridad" es incorrecto.*** Como se mencionó anteriormente, la seguridad es una responsabilidad compartida entre AWS y el cliente. Por ejemplo, el cliente tiene que administrar quién puede obtener acceso a los recursos de AWS y utilizarlos mediante el servicio de IAM.

**Referencias:**
https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/six-advantages-of-cloud-computing.html

Pregunta 34: **OmitidoEl proceso de identificación de una empresa de servicios financieros en línea requiere que los nuevos usuarios deben completar una entrevista en línea con su equipo de seguridad. Las entrevistas grabadas completadas solo se requieren en caso de un problema legal o una violación del cumplimiento normativo. ¿Cuál es el servicio más rentable para almacenar los videos grabados?**
• **S3 Intelligent-Tiering**
• **Amazon EBS**
• **Amazon S3 Glacier Deep Archive(Correcto)**
• **AWS Marketplace
Explicación**
Amazon S3 Glacier Deep Archive es un servicio de almacenamiento de muy bajo costo que proporciona almacenamiento seguro, duradero y flexible para realizar copias de seguridad y archivar datos a largo plazo. Con Amazon S3 Glacier Deep Archive, los clientes pueden almacenar sus datos de forma fiable por tan solo 1 USD por terabyte al mes, lo que supone un ahorro significativo en comparación con las soluciones locales. Amazon Glacier permite a los clientes descargar las cargas administrativas de operar y escalar el almacenamiento a AWS, de modo que no tengan que preocuparse por la planificación de la capacidad, el aprovisionamiento de hardware, la replicación de datos, la detección y reparación de errores de hardware o las migraciones de hardware que consumen mucho tiempo.

***Las otras opciones son incorrectas:***

***"S3 Intelligent-Tiering" es incorrecto.*** S3 Intelligent-Tiering es ideal para datos con patrones de acceso desconocidos o cambiantes.
S3 Intelligent-Tiering es la primera clase de almacenamiento de objetos en la nube que ofrece ahorros de costos automáticos al mover datos entre dos niveles de acceso (acceso frecuente y acceso poco frecuente) cuando cambian los patrones de acceso.

***"AWS Marketplace" es incorrecto.*** AWS Marketplace es un catálogo digital seleccionado que facilita a los clientes la búsqueda, compra, implementación y administración de software y servicios de terceros que los clientes necesitan para crear soluciones y administrar sus negocios. AWS Marketplace incluye miles de listados de software de categorías populares como seguridad, redes, almacenamiento, aprendizaje automático, inteligencia empresarial, base de datos y DevOps. AWS Marketplace también simplifica las licencias y adquisiciones de software con opciones de precios flexibles y múltiples métodos de implementación. Los clientes pueden iniciar rápidamente software preconfigurado con solo unos pocos clics y elegir soluciones de software en formatos AMI y SaaS, así como en otros formatos. Las opciones de precios flexibles incluyen prueba gratuita, por hora, mensual, anual, multianual y BYOL, y se facturan desde una fuente, AWS.

***"Amazon EBS" es incorrecto.*** Amazon EBS es un almacenamiento a nivel de bloque que proporciona volúmenes de almacenamiento para su uso con Amazon EC2 y Amazon RDS. Amazon EBS no es una opción rentable aquí.

**Referencias:**
https://aws.amazon.com/glacier/

Pregunta 35: **OmitidoUna empresa tiene un plan de AWS Enterprise Support. Quieren una orientación rápida y eficiente con sus consultas de facturación y cuenta. ¿Cuál de las siguientes opciones debe utilizar la empresa?**
• **Soporte de operaciones de AWS (AWS Operations Support)**
• **Panel de salud personal de AWS (AWS Personal Health Dashboard)**
• **Conserje de AWS Support (AWS Support Concierge)(Correcto)**
• **Servicio al cliente de AWS (AWS Customer Service)
Explicación**
Incluido como parte del plan enterprise Support, el equipo de support Concierge es experto en facturación y cuentas de AWS que se especializa en trabajar con cuentas empresariales. El equipo de Concierge lo ayudará de manera rápida y eficiente con sus consultas de facturación y cuenta, y trabajará con usted para ayudarlo a implementar las mejores prácticas de facturación y cuenta para que pueda concentrarse en administrar su negocio.
El servicio de conserjería de soporte incluye:
** Acceso 24 x 7 a las consultas de cuentas y facturación de AWS.
** Orientación y mejores prácticas para la asignación de facturación, informes, consolidación de cuentas y seguridad de cuentas a nivel raíz.
** Acceso a especialistas en cuentas Enterprise para consultas de pago, capacitación sobre informes de costos específicos, asistencia con los límites de servicio y facilitación de compras a granel.

***Las otras opciones son incorrectas:***

***"Servicio al cliente de AWS" es incorrecto.*** AWS Customer Service puede ayudar a los clientes de AWS con sus consultas de facturación y cuenta, y se incluye en todos los planes de soporte de AWS (Básico, Desarrollador, Negocio y Empresa). Sin embargo, debido al hecho de que el servicio de atención al cliente de AWS no está dedicado a tipos específicos de consultas, no es tan rápido ni tan eficiente como el conserje de AWS Support. AWS Support Concierge solo está disponible para suscriptores de AWS Enterprise Support y está dedicado únicamente a ayudar a los clientes de AWS con sus consultas de facturación y cuenta.

***"AWS Operations Support" es incorrecto.*** AWS Operations Support es un programa de soporte empresarial que proporciona evaluaciones y análisis de operaciones para identificar brechas en todo el ciclo de vida de las operaciones, así como recomendaciones basadas en prácticas recomendadas.

***"AWS Personal Health Dashboard" es incorrecto.*** AWS Personal Health Dashboard proporciona una vista personalizada del estado de los servicios específicos que impulsan sus cargas de trabajo y aplicaciones. AWS Personal Health Dashboard le notifica de forma proactiva cuando AWS experimenta cualquier evento que pueda afectarle, lo que ayuda a proporcionar visibilidad y orientación rápidas para minimizar el impacto de los eventos en curso y planificar cualquier cambio programado, como el mantenimiento del hardware de AWS.

**Referencias:**
https://aws.amazon.com/premiumsupport/features/
https://aws.amazon.com/premiumsupport/plans/enterprise/

Pregunta 36: **OmitidoUna empresa de nueva creación está operando con fondos limitados y está extremadamente preocupada por los sobrecostos. ¿Cuál de las siguientes opciones se puede utilizar para notificar a la empresa cuando su factura mensual de AWS supera los $500.000 ? (Elija DOS)**
• [ ] **Configurar Amazon Connect Service para alertar a la empresa cuando se supere el umbral**
• [ ] **Configurar Amazon Simple Email Service para enviar alertas de facturación a su dirección de correo electrónico diariamente(Correcto)**
• [ ] **Configurar una alarma de facturación de CloudWatch que active una notificación SNS cuando se supere el umbral(Correcto)**
• [ ] **Configurar AWS Budgets Service para alertar a la empresa cuando se supere el umbral**
• [ ] **Configurar AWS CloudTrail para eliminar automáticamente todos los recursos de AWS cuando se supere el umbral
Explicación**
En CloudWatch, puede configurar una alarma de facturación que se active si sus costes superan un umbral establecido. Esta alarma de CloudWatch también se puede configurar para activar una notificación SNS en su dirección de correo electrónico.
AWS Budgets es otro servicio de AWS que se puede utilizar en este escenario. AWS Budgets le ofrece la posibilidad de establecer presupuestos personalizados que le avisen cuando sus costos o uso superen (o se prevea que superen) el importe presupuestado. La diferencia entre las alarmas de facturación de AWS Budgets y Amazon CloudWatch es que las alarmas de facturación de Amazon CloudWatch le avisan solo cuando el costo **real** supera un determinado umbral, mientras que AWS Budgets se puede configurar para que le avise cuando el coste **real** o **previsto** supere un determinado umbral.

***Las otras opciones son incorrectas:***

***"Configurar Amazon Connect Service para alertar a la empresa cuando se supere el umbral" es incorrecto.*** Amazon Connect es un servicio de centro de contacto de autoservicio basado en la nube que facilita a cualquier empresa ofrecer un mejor servicio al cliente a un costo menor. Amazon Connect no se puede utilizar para enviar notificaciones de facturación.

***"Configurar Amazon Simple Email Service para enviar alertas de facturación a su dirección de correo electrónico diariamente" es incorrecto.*** Amazon Simple Email Service (Amazon SES) es un servicio de envío de correo electrónico basado en la nube diseñado para ayudar a los especialistas en marketing digital y desarrolladores de aplicaciones a enviar correos electrónicos de marketing, notificaciones y transacciones. Amazon SES no se puede utilizar para enviar alertas de facturación.

***"Configurar AWS CloudTrail para eliminar automáticamente todos los recursos de AWS cuando se supera el umbral" es incorrecto.*** Los clientes de AWS configuran alarmas de facturación para administrar y ajustar sus presupuestos, no para eliminar todos los recursos de AWS. AWS CloudTrail es un servicio que permite la gobernanza, la conformidad, la auditoría operativa y la auditoría de riesgos mediante el registro de todas las llamadas a la API realizadas dentro de su cuenta de AWS. AWS CloudTrail no se puede utilizar para eliminar recursos de AWS.
**Referencias:**
https://aws.amazon.com/aws-cost-management/aws-budgets/
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html

Pregunta 37: **Omitido¿Qué servicio proporciona DNS en la nube de AWS?**
• **AWS Config**
• **Amazon EMR**
• **Amazon CloudFront**
• **Amazon Route 53(Correcto)
Explicación**
**Amazon Route 53** es un servicio global que proporciona servicios de sistema de nombres de dominio (DNS) escalables y de alta disponibilidad, registro de nombres de dominio y servicios web de comprobación de estado. Está diseñado para brindar a los desarrolladores y empresas una forma extremadamente confiable y rentable de enrutar a los usuarios finales a las aplicaciones de Internet traduciendo nombres como example.com en las direcciones IP numéricas, como 192.0.2.1, que las computadoras usan para conectarse entre sí.
Route 53 también simplifica la nube híbrida al proporcionar DNS recursivo para su Amazon VPC y redes locales a través de AWS Direct Connect o AWS VPN.

***Las otras opciones son incorrectas:***

***"Amazon EMR" es incorrecto.*** EMR se utiliza para procesar grandes cantidades de datos de forma fácil y segura. Los casos de uso incluyen: big data, análisis de registros, indexación web, transformaciones de datos (ETL), aprendizaje automático, análisis financiero, simulación científica y bioinformática.

***"AWS Config" es incorrecto.*** AWS Config es un servicio totalmente administrado que le proporciona un inventario de recursos de AWS, un historial de configuración y notificaciones de cambios de configuración para habilitar la seguridad y la gobernanza.

***"Amazon CloudFront" es incorrecto.*** Amazon CloudFront ofrece a las empresas y a los desarrolladores de aplicaciones web una forma fácil y rentable de distribuir contenido a nivel mundial con baja latencia y altas velocidades de transferencia de datos.

**Referencias:**
https://aws.amazon.com/route53/

Pregunta 38: **Omitido¿Qué afirmación es cierta con respecto al modelo de responsabilidad compartida de AWS?**
• **La aplicación de parches al sistema operativo invitado es siempre responsabilidad de AWS**
• **Las responsabilidades varían dependiendo de los servicios utilizados(Correcto)**
• **La seguridad de los servicios gestionados es responsabilidad del cliente**
• **La seguridad de los servicios de IaaS es responsabilidad de AWS
Explicación**
Los clientes deben ser conscientes de que sus responsabilidades pueden variar en función de los servicios de AWS elegidos. Por ejemplo, al utilizar Amazon EC2, usted es responsable de aplicar regularmente los parches de seguridad del sistema operativo y de las aplicaciones. Sin embargo, estos parches se aplican automáticamente cuando se utiliza Amazon RDS.

***Las otras opciones son incorrectas:***

***"La seguridad de los servicios de IaaS es responsabilidad de AWS" es incorrecta.*** Los productos de AWS que entran en la categoría bien entendida de Infraestructura como servicio (IaaS), como Amazon EC2, Amazon VPC y Amazon S3, están completamente bajo su control y requieren que realice todas las tareas de configuración y administración de seguridad necesarias. Por ejemplo, en el caso de las instancias EC2, usted es responsable de la administración del sistema operativo invitado (incluidas las actualizaciones y los parches de seguridad), cualquier software de aplicación o utilidad que instale en las instancias y la configuración del firewall proporcionado por AWS (denominado grupo de seguridad) en cada instancia. Estas son básicamente las mismas tareas de seguridad que está acostumbrado a realizar sin importar dónde se encuentren sus servidores.

***"La seguridad de los servicios gestionados es responsabilidad del cliente" es incorrecto.*** AWS es responsable de la configuración de seguridad de sus servicios administrados. Entre los ejemplos de estos tipos de servicios se incluyen Amazon DynamoDB, Amazon RDS, Amazon Redshift, Amazon Elastic MapReduce y Amazon WorkSpaces. Para la mayoría de estos servicios, todo lo que tiene que hacer es configurar controles de acceso lógicos en los recursos y proteger las credenciales de su cuenta, pero en general, el servicio realiza el trabajo de configuración de seguridad.

***"La aplicación de parches al sistema operativo invitado es siempre responsabilidad de AWS" es incorrecta.***
Un equipo en el que AWS ejecuta una o más máquinas virtuales se denomina máquina **host**y cada máquina virtual se denomina máquina **invitada**. AWS impulsa el concepto de virtualización al permitir que la máquina host física opere varias máquinas virtuales como invitados (para varios clientes) para ayudar a maximizar el uso efectivo de los recursos informáticos, como la memoria, el ancho de banda de la red y los ciclos de CPU.
La aplicación de parches al sistema operativo invitado es responsabilidad de AWS solo para los servicios administrados (como Amazon RDS). El cliente es responsable de aplicar parches al sistema operativo invitado para otros servicios (como Amazon EC2).
AWS es responsable de aplicar parches a los **hosts** subyacentes, actualizar el firmware y corregir los defectos dentro de la infraestructura de todos los servicios, incluido Amazon EC2.

**Referencias:**
https://aws.amazon.com/compliance/shared-responsibility-model/

Pregunta 39: **Omitido¿A qué se refiere el "Principio de Mínimo Privilegio"?**
• **Todos los usuarios de IAM de confianza deben tener acceso a cualquier servicio de AWS en la cuenta de AWS correspondiente**
• **Todos los usuarios de IAM deben tener al menos los permisos necesarios para obtener acceso a los servicios principales de AWS**
• **Debe otorgar a sus usuarios solo los permisos que necesitan cuando los necesitan y nada más(Correcto)**
• **A los usuarios de IAM no se les debe conceder ningún permiso; para mantener tu cuenta segura
Explicación**
El **principio de privilegios mínimos** es una de las prácticas de seguridad más importantes y significa otorgar a los usuarios los permisos necesarios para realizar las tareas que se les confían y nada más. El administrador de seguridad determina qué tareas deben realizar los usuarios y, a continuación, adjunta las directivas que les permiten realizar solo esas tareas. Debe comenzar con un conjunto mínimo de permisos y otorgar permisos adicionales cuando sea necesario. Hacerlo es más seguro que comenzar con permisos que son demasiado indulgentes y luego tratar de ajustarlos.

**Referencias:**
https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege

Pregunta 40: **OmitidoUna empresa está implementando una nueva aplicación web de dos niveles en AWS. ¿Dónde se deben almacenar los datos a los que se accede con más frecuencia para que el tiempo de respuesta de la aplicación sea óptimo?**
• **AWS OpsWorks**
• **Volumen de Amazon EBS**
• **Amazon ElastiCache(Correcto)**
• **AWS Storage Gateway
Explicación**
**Amazon ElastiCache** es un servicio web que facilita la implementación, el funcionamiento y la escalabilidad de un almacén de datos en memoria o caché en la nube. El servicio mejora el rendimiento de las aplicaciones web al permitirle recuperar información de almacenes de datos en memoria rápidos, administrados, en lugar de depender completamente de bases de datos basadas en disco más lentas.
El propósito principal de un almacén de datos en memoria es proporcionar acceso ultrarrápido (latencia de submillisegundos) y económico a copias de datos. Consultar una base de datos siempre es más lento y costoso que localizar una copia de esos datos en una memoria caché. Algunas consultas de base de datos son especialmente costosas de realizar. Un ejemplo son las consultas que implican uniones entre varias tablas o consultas con cálculos intensivos. Al almacenar en caché (almacenar) dichos resultados de consulta, solo paga el precio de la consulta una vez. A continuación, puede recuperar rápidamente los datos varias veces sin tener que volver a ejecutar la consulta.

***Las otras opciones son incorrectas:***

***"AWS Storage Gateway" es incorrecto.*** AWS Storage Gateway no es un servicio de almacenamiento en caché, es un servicio de almacenamiento híbrido que permite a sus aplicaciones locales utilizar sin problemas el almacenamiento en la nube de AWS.

***"Volumen de Amazon EBS" es incorrecto.*** Un volumen de Amazon EBS es un dispositivo de almacenamiento duradero a nivel de bloque que puede conectar a una única instancia EC2. Puede usar volúmenes de EBS como almacenamiento principal para datos que requieren actualizaciones frecuentes, como la unidad del sistema para una instancia o el almacenamiento para una aplicación de base de datos. También puede utilizarlos para aplicaciones de rendimiento intensivo que realizan análisis continuos de disco.

***"AWS OpsWorks" es incorrecto.*** AWS OpsWorks es un servicio de administración de configuración que proporciona instancias administradas de Chef y Puppet. Chef y Puppet son plataformas de automatización que te permiten utilizar código para automatizar las configuraciones de tus servidores. OpsWorks le permite utilizar Chef y Puppet para automatizar la forma en que se configuran, implementan y administran los servidores en sus instancias Amazon EC2 o entornos informáticos locales.

**Referencias:**
https://aws.amazon.com/elasticache/

Pregunta 41: **OmitidoAWS permite a los usuarios administrar sus recursos mediante una interfaz de usuario basada en web. ¿Cuál es el nombre de esta interfaz?**
• **AWS CLI**
• **AWS SDK**
• **Consola de administración de AWS(Correcto)**
• **AWS API
Explicación**
La consola de administración de AWS le permite acceder a Amazon Web Services y administrarlos a través de una interfaz de usuario sencilla e intuitiva basada en la web. También puede utilizar la aplicación móvil de la consola de AWS para ver rápidamente los recursos sobre la marcha.

***Las otras opciones son incorrectas:***

***La AWS CLI es incorrecta.*** La AWS Command Line Interface (CLI) es una herramienta unificada para administrar sus servicios de AWS. Con una sola herramienta para descargar y configurar, puede controlar varios servicios de AWS desde la línea de comandos y automatizarlos a través de scripts.

***AWS SDK es incorrecto.*** AWS SDK (Software Development Kit) le permite interactuar con los servicios de AWS utilizando su lenguaje de programación preferido.

***La API de AWS es incorrecta.*** La API de AWS hace referencia a la interfaz de programación de aplicaciones de AWS.

**Referencias:**
https://aws.amazon.com/console/

Pregunta 42: **OmitidoUna empresa planea alojar un sitio web educativo en AWS. Sus cursos de video se transmitirán en todo el mundo. ¿Cuál de los siguientes servicios de AWS ayudará a lograr altas velocidades de transferencia?**
• **Amazon SNS**
• **AWS CloudFormation**
• **Transmisiones de vídeo de Amazon Kinesis**
• **Amazon CloudFront(Correcto)
Explicación**
**Amazon CloudFront** es un servicio de red de entrega rápida de contenido (CDN) que entrega de forma segura datos, vídeos, aplicaciones y API a clientes de todo el mundo con baja latencia y altas velocidades de transferencia, todo ello dentro de un entorno amigable para los desarrolladores.

Los casos de uso de Amazon CloudFront incluyen:
1- Acelere la entrega de contenido estático del sitio web.
CloudFront puede acelerar la entrega de su contenido estático (por ejemplo, imágenes, hojas de estilo, JavaScript, etc.) a los espectadores de todo el mundo. Mediante CloudFront, puede aprovechar la red troncal de AWS y los servidores de borde de CloudFront para ofrecer a sus espectadores una experiencia rápida, segura y fiable cuando visitan su sitio web.
2- Transmisión de video en vivo y bajo demanda. La CDN de Amazon CloudFront ofrece múltiples opciones para transmitir sus medios (tanto archivos pregrabados como eventos en vivo) con un rendimiento alto y sostenido requerido para la entrega 4K a espectadores globales.
3- Seguridad.
CloudFront se integra a la perfección con AWS Shield para la mitigación de DDoS de capa 3/4 y AWS WAF para la protección de capa 7.
4- Entrega de contenido personalizable con Lambda@Edge.
Lambda@Edge es una característica de Amazon CloudFront que le permite ejecutar código más cerca de los usuarios de su aplicación, lo que mejora el rendimiento y reduce la latencia.

***Las otras opciones son incorrectas:***

***"AWS CloudFormation" es incorrecto.*** AWS CloudFormation le permite utilizar lenguajes de programación o un archivo de texto simple para modelar y aprovisionar, de forma automatizada y segura, todos los recursos necesarios para sus aplicaciones en todas las regiones y cuentas.

***"Amazon Kinesis Video Streams" es incorrecto.*** Amazon Kinesis Video Streams le permite transmitir vídeo de forma segura desde dispositivos conectados (dispositivos IoT) a AWS para análisis, aprendizaje automático (ML), reproducción y otros procesamientos. Kinesis Video Streams aprovisiona y escala automáticamente toda la infraestructura necesaria para ingerir datos de transmisión de video desde millones de dispositivos. Almacena, cifra e indexa de forma duradera los datos de vídeo en sus transmisiones, y le permite acceder a sus datos a través de API fáciles de usar.

***"Amazon SNS" es incorrecto.*** Amazon Simple Notification Service (SNS) es un servicio de mensajería pub/sub totalmente administrado que le permite desacoplar microservicios, sistemas distribuidos y aplicaciones sin servidor. Con los temas de Amazon SNS, los sistemas de los editores pueden distribuir mensajes a un gran número de puntos de enlace de suscriptores para su procesamiento en paralelo, incluidas las funciones de AWS Lambda y los webhooks HTTP/S. Además, SNS se puede utilizar para distribuir notificaciones a los usuarios finales mediante push móvil, SMS y correo electrónico.

**Referencias:**
https://aws.amazon.com/cloudfront/

Pregunta 43: **OmitidoSu empresa está desarrollando una aplicación web crítica en AWS, y la seguridad de la aplicación es una prioridad. ¿Cuál de los siguientes servicios de AWS proporcionará recomendaciones de optimización de la seguridad de la infraestructura?**
• **Consola de administración de AWS(AWS Management Console)**
• **AWS Shield**
• **AWS Trusted Advisor(Correcto)**
• **AWS Secrets Manager
Explicación**
AWS Trusted Advisor es una herramienta en línea que le proporciona orientación en tiempo real para ayudarle a aprovisionar sus recursos siguiendo las prácticas recomendadas de AWS. AWS Trusted Advisor ofrece un amplio conjunto de comprobaciones y recomendaciones de prácticas recomendadas en cinco categorías: optimización de costos; seguridad; tolerancia a fallos; rendimiento; y límites de servicio (también denominados cuotas de servicio).
AWS Trusted Advisor mejora la seguridad de su aplicación al cerrar brechas, habilitar varias características de seguridad de AWS y examinar sus permisos.

**Las comprobaciones de seguridad principales incluyen: (Importante)**
**1- Grupos de seguridad - Puertos específicos sin restricciones.**
Comprueba los grupos de seguridad en busca de reglas que permitan el acceso sin restricciones a puertos específicos. El acceso sin restricciones aumenta las oportunidades de actividad maliciosa (piratería, ataques de denegación de servicio, pérdida de datos).
**2- Permisos de bucket de Amazon S3.**
Comprueba los buckets de Amazon Simple Storage Service (Amazon S3) que tienen permisos de acceso abierto. Los permisos de bucket que conceden acceso a list a todos pueden dar lugar a cargos superiores a los esperados si los objetos del bucket son enumerados por usuarios no deseados con una frecuencia alta. Los permisos de bucket que otorgan acceso de carga/eliminación a todos crean posibles vulnerabilidades de seguridad al permitir que cualquier persona agregue, modifique o elimine elementos en un bucket. Esta comprobación examina los permisos explícitos del bucket y las políticas de bucket asociadas que podrían invalidar los permisos del bucket.
**3- MFA en la cuenta raíz.**
Comprueba la cuenta raíz y advierte si la autenticación multifactor (MFA) no está habilitada. Para aumentar la seguridad, AWS recomienda que proteja su cuenta mediante MFA, que requiere que un usuario introduzca un código de autenticación único desde su hardware MFA o dispositivo virtual al interactuar con la consola de AWS y los sitios web asociados.
***Las otras opciones son incorrectas:***

***"AWS Shield" es incorrecto.*** AWS Shield no proporciona recomendaciones de seguridad. AWS Shield es un servicio de protección de denegación de servicio distribuido (DDoS) administrado que protege las aplicaciones que se ejecutan en AWS.

***"Consola de administración de AWS" es incorrecta.*** La consola de administración de AWS se utiliza para obtener acceso a Amazon Web Services y administrarlos a través de una interfaz de usuario sencilla e intuitiva basada en la web. La consola en sí no proporciona ninguna recomendación.

***"AWS Secrets Manager" es incorrecto.*** AWS Secrets Manager no proporciona recomendaciones de seguridad. AWS Secrets Manager es un servicio de administración de secretos que le permite almacenar, recuperar, rotar, auditar y supervisar secretos de forma centralizada. AWS Secrets Manager le permite administrar secretos como credenciales de base de datos, credenciales de recursos locales, credenciales de aplicaciones SaaS, claves de API de terceros y claves de Secure Shell (SSH).

**Referencias:**
https://aws.amazon.com/premiumsupport/trustedadvisor/

Pregunta 44: **Omitido¿Cuál de las siguientes opciones se puede describir como un servicio de red de entrega de contenido global (CDN)?**
• **Amazon CloudFront(Correcto)**
• **AWS Direct Connect**
• **AWS Regions**
• **AWS VPN
Explicación**
**Amazon CloudFront** es un servicio de red de entrega de contenido (CDN) global que ofrece a las empresas y a los desarrolladores de aplicaciones web una forma fácil y rentable de distribuir contenido (como vídeos, datos, aplicaciones y API) con baja latencia y altas velocidades de transferencia de datos. Al igual que otros servicios de AWS, Amazon CloudFront es una oferta de autoservicio de pago por uso, que no requiere compromisos a largo plazo ni tarifas mínimas. Con CloudFront, sus archivos se entregan a los usuarios finales mediante una red global de ubicaciones de borde. CloudFront está integrado con otros servicios de AWS, como AWS Shield para la mitigación de DDoS, Amazon S3, Elastic Load Balancing o Amazon EC2 como orígenes de sus aplicaciones, y Lambda@Edge ejecutar código personalizado cerca de sus espectadores.

***Las otras opciones son incorrectas:***

***"AWS Direct Connect" es incorrecto.*** AWS Direct Connect le permite establecer una conexión de red dedicada desde sus instalaciones a AWS.

***"Regiones de AWS" es incorrecto.*** Una región de AWS es una ubicación física en el mundo donde AWS tiene varias zonas de disponibilidad. Las zonas de disponibilidad consisten en uno o más centros de datos discretos, cada uno con energía, redes y conectividad redundantes, alojados en instalaciones separadas.

***"AWS VPN" es incorrecto.*** AWS VPN se compone de dos servicios: AWS Site-to-Site VPN y AWS Client VPN. AWS Site-to-Site VPN le permite conectar de forma segura su red local o sitio de sucursal a AWS. AWS Client VPN le permite conectar de forma segura a los usuarios (desde cualquier ubicación) a AWS o a redes locales.

**Referencias:**
https://aws.amazon.com/cloudfront/

Pregunta 45: **OmitidoBajo el modelo de responsabilidad compartida, ¿cuál de las siguientes es la responsabilidad de AWS?**
• **Cifrado del lado del servidor**
• **Configuración de dispositivos de infraestructura(Correcto)**
• **Cifrado del lado del cliente**
• **Filtrado del tráfico con grupos de seguridad
Explicación**
**Bajo el modelo de responsabilidad compartida**, AWS es responsable del hardware y el software que ejecutan los servicios de AWS. Esto incluye la aplicación de parches al software de infraestructura y la configuración de dispositivos de infraestructura. Como cliente, usted es responsable de implementar las mejores prácticas para el cifrado de datos, la aplicación de parches al sistema operativo invitado y las aplicaciones, la gestión de identidades y accesos, y las configuraciones de red y firewall.

**Las otras opciones son incorrectas.**

***"Filtrar el tráfico con grupos de seguridad" es incorrecto.*** El cliente de AWS es responsable de todas las configuraciones de red y firewall, incluida la configuración de grupos de seguridad, listas de control de acceso a red (ACL de red) y tablas de enrutamiento.

***"Cifrado del lado del cliente" y "Cifrado del lado del servidor" son incorrectos.*** De acuerdo con el [modelo de responsabilidad compartida de](https://aws.amazon.com/compliance/shared-responsibility-model/) AWS, los clientes de AWS son responsables del cifrado del lado del cliente y del cifrado del lado del servidor. Sin embargo, para algunos servicios totalmente administrados de AWS, como Amazon DynamoDB, AWS realiza automáticamente el cifrado del lado del servidor. Amazon DynamoDB cifra y descifra de forma transparente todas las tablas cuando se escriben en el disco. No hay ninguna opción para habilitar o deshabilitar el cifrado del lado del servidor.
Información adicional:
AWS ofrece una gran cantidad de servicios y características que ayudan a los clientes de AWS a proteger sus datos en la nube. Los clientes pueden proteger sus datos cifrándolos en tránsito y en reposo. Pueden usar CloudTrail para registrar la API y la actividad del usuario, incluido quién, qué y desde dónde se realizaron las llamadas. También pueden utilizar AWS Identity and Access Management (IAM) para controlar quién puede obtener acceso a sus datos o editarlos.

**Referencias:**
https://aws.amazon.com/compliance/shared-responsibility-model/

Pregunta 46: **Omitido¿Cuál de las siguientes es una práctica recomendada al diseñar soluciones en AWS?**
• **Aprovisione una gran capacidad de cómputo para manejar cualquier pico de carga**
• **Invierta mucho en la arquitectura de su entorno, ya que no es fácil cambiar su diseño más adelante**
• **Automatice siempre que sea posible para facilitar la experimentación arquitectónica(Correcto)**
• **Utilice las reservas de AWS para reducir los costos al probar su entorno de producción
Explicación**
El marco bien diseñado identifica un conjunto de principios generales de diseño para facilitar un buen diseño en la nube:
1- Deje de adivinar sus necesidades de capacidad: Elimine las conjeturas sobre sus necesidades de capacidad de infraestructura. Cuando toma una decisión de capacidad antes de implementar un sistema, puede terminar sentado en costosos recursos inactivos o lidiando con las implicaciones de rendimiento de la capacidad limitada. Con la computación en la nube, estos problemas pueden desaparecer. Puede usar tanta o tan poca capacidad como necesite, y escalar hacia arriba y hacia abajo automáticamente.
2- Sistemas de prueba a escala de producción: en la nube, puede crear un entorno de prueba a escala de producción bajo demanda, completar sus pruebas y luego retirar los recursos. Dado que solo paga por el entorno de prueba cuando se está ejecutando, puede simular su entorno en vivo por una fracción del costo de las pruebas en las instalaciones.
3- Automatice para facilitar la experimentación arquitectónica: La automatización le permite crear y replicar sus sistemas a bajo costo y evitar el gasto del esfuerzo manual. Puede realizar un seguimiento de los cambios en la automatización, auditar el impacto y volver a los parámetros anteriores cuando sea necesario.
4- Permitir arquitecturas evolutivas: Permitir arquitecturas evolutivas. En un entorno tradicional, las decisiones arquitectónicas a menudo se implementan como eventos estáticos de una sola vez, con algunas versiones principales de un sistema durante su vida útil. A medida que una empresa y su contexto continúan cambiando, estas decisiones iniciales pueden obstaculizar la capacidad del sistema para cumplir con los requisitos comerciales cambiantes. En la nube, la capacidad de automatizar y probar bajo demanda reduce el riesgo de impacto de los cambios de diseño. Esto permite que los sistemas evolucionen con el tiempo para que las empresas puedan aprovechar las innovaciones como una práctica estándar.
5- Maneje arquitecturas utilizando datos: En la nube puede recopilar datos sobre cómo sus elecciones arquitectónicas afectan el comportamiento de su carga de trabajo. Esto le permite tomar decisiones basadas en hechos sobre cómo mejorar su carga de trabajo. Su infraestructura en la nube es código, por lo que puede usar esos datos para informar sus opciones de arquitectura y mejoras con el tiempo.
6- Mejore a través de los días de juego: Pruebe cómo funcionan su arquitectura y procesos programando regularmente días de juego para simular eventos en producción. Esto le ayudará a comprender dónde se pueden realizar mejoras y puede ayudar a desarrollar la experiencia organizacional en el manejo de eventos.

***Las otras opciones son incorrectas:***

***"Aprovisionar una gran capacidad de cómputo para manejar cualquier pico de carga" es incorrecto.*** En lugar de aprovisionar una gran capacidad informática para controlar los picos de carga, se recomienda utilizar el servicio AWS Auto Scaling para agregar o eliminar instancias en función de la demanda. El servicio AWS Auto Scaling le permite aprovisionar automáticamente nuevos recursos para satisfacer la demanda y mantener el rendimiento. Cuando la demanda disminuya, AWS Auto Scaling eliminará automáticamente cualquier exceso de capacidad de recursos, para evitar gastos excesivos.

***"Utilice las reservas de AWS para reducir los costos al probar su entorno de producción" es incorrecto.*** Las reservas en AWS no son una opción adecuada cuando necesita probar su entorno de producción, las reservas de AWS tienen un plazo mínimo de un año.

***"Invierta mucho en la arquitectura de su entorno, ya que no es fácil cambiar su diseño más tarde" es incorrecto.*** En AWS, puede probar y aprovisionar sus recursos bajo demanda y pagar solo por lo que usa sin contratos a largo plazo. Esto le permite realizar los cambios que desee en el diseño de su arquitectura en cualquier momento sin ningún riesgo.

**Referencias:**
https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf

Pregunta 47: **OmitidoEl principio "diseñar para errores y nada fallará" es muy importante al diseñar su arquitectura de nube de AWS. ¿Cuál de las siguientes cosas ayudaría a adherirse a este principio? (Elija DOS)**
• [ ] **Zonas de disponibilidad(Correcto)**
• [ ] **Autenticación multifactor (MFA)**
• [ ] **Escalado vertical (Vertical Scaling)**
• [ ] **Elastic Load Balancing(Correcto)
Explicación**
Cada región de AWS es un área geográfica independiente. Cada región de AWS tiene varias ubicaciones aisladas conocidas como zonas de disponibilidad. Al diseñar su arquitectura de nube de AWS, debe asegurarse de que su sistema continúe ejecutándose incluso si se producen errores. Puede lograrlo implementando sus recursos de AWS en varias zonas de disponibilidad. Las zonas de disponibilidad están aisladas entre sí; por lo tanto, si una zona de disponibilidad deja de funcionar, las otras zonas de disponibilidad seguirán funcionando y, por lo tanto, la aplicación será más tolerante a errores. Además de las zonas de disponibilidad, puede crear una solución de recuperación ante desastres implementando sus recursos de AWS en otras regiones. Si una región entera se cae, todavía tendrá recursos en otra región capaz de continuar proporcionando una solución. Por último, puede usar el servicio Elastic Load Balancing para realizar comprobaciones de estado de forma periódica y distribuir el tráfico solo a instancias en buen estado.

***Las otras opciones son incorrectas:***

***La "autenticación multifactor" es incorrecta.*** AWS Multi-Factor Authentication (MFA) es una práctica recomendada sencilla que agrega una capa adicional de protección además de su nombre de usuario y contraseña. La autenticación multifactor está mucho más relacionada con la seguridad, no con la tolerancia a fallos.

***"Pruebas de penetración" es incorrecto.*** Las pruebas de penetración son la práctica de probar una red o aplicación web para encontrar vulnerabilidades de seguridad que un atacante podría explotar. Las pruebas de penetración están mucho más relacionadas con la seguridad, no con la tolerancia a fallos.

***"Escala vertical" es incorrecto.*** Un sistema "escalable verticalmente" está limitado a ejecutar sus procesos en una sola computadora; en tales sistemas, la única forma de aumentar el rendimiento es agregar más recursos a una computadora en forma de CPU, memoria o almacenamiento más rápidos (o más). El escalado vertical puede mejorar el rendimiento, pero no la tolerancia a fallos; porque si este "equipo" falla, todo el sistema fallará.

**Referencias:**
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html
https://aws.amazon.com/elasticloadbalancing/

Pregunta 48: **OmitidoHa configurado la facturación consolidada para varias cuentas de AWS. Una de las cuentas ha comprado una serie de instancias reservadas durante 3 años. ¿Cuál de las siguientes situaciones es cierta con respecto a este escenario?**
• **Todas las cuentas pueden recibir el beneficio de costo por hora de las instancias reservadas(Correcto)**
• **Las instancias compradas tendrán un mejor rendimiento que las instancias bajo demanda**
• **Los descuentos de instancia reservada solo se pueden compartir con la cuenta maestra**
• **No hay beneficios de costos al usar la facturación consolidada; Es solo para fines informativos
Explicación**
Para fines de facturación, la característica de facturación consolidada de AWS Organizations trata todas las cuentas de la organización como una sola cuenta. Esto significa que todas las cuentas de la organización pueden recibir el beneficio de costo por hora de las instancias reservadas que son compradas por cualquier otra cuenta. Por ejemplo, supongamos que Fiona y John tienen cada uno una cuenta en una organización. Fiona tiene cinco instancias reservadas del mismo tipo, y John no tiene ninguna. Durante una hora en particular, Fiona usa tres instancias y John usa seis, para un total de nueve instancias en el proyecto de ley consolidado de la organización. AWS factura cinco instancias como instancias reservadas y las cuatro instancias restantes como instancias bajo demanda.

***Las otras opciones son incorrectas:***

***"Las instancias compradas tendrán un mejor rendimiento que las instancias bajo demanda" es incorrecto.*** No hay diferencia en el rendimiento entre las instancias bajo demanda y reservadas del mismo tipo.

***"Los descuentos de instancia reservada solo se pueden compartir con la cuenta maestra" es incorrecto.*** Los descuentos de instancia reservada se pueden compartir con todas las cuentas de la organización.

***"No hay beneficios de costos por usar la facturación consolidada; Es solo para fines informativos" es incorrecto.*** Con la facturación consolidada, puede combinar el uso en todas las cuentas de la organización para compartir los descuentos de instancias reservadas, los descuentos de precios por volumen y los planes de ahorro. Esto puede resultar en un cargo más bajo para su proyecto, departamento o empresa que con cuentas independientes individuales.

**Referencias:**
https://docs.aws.amazon.com/aws-technical-content/latest/cost-optimization-reservation-models/consolidated-billing.html
https://aws.amazon.com/organizations/

Pregunta 49: **OmitidoComo parte del plan de soporte Enterprise, ¿quién es el principal punto de contacto para las necesidades de soporte continuo?**
• **Usuario de AWS Identity and Access Management (IAM)**
• **Socios consultores de AWS**
• **Ingeniero de gestión de eventos de infraestructura (IEM)**
• **Gerente Técnico de Cuentas (TAM-Technical Account Manager)(Correcto)
Explicación**
Para los clientes de nivel empresarial, un TAM (Technical Account Manager) proporciona experiencia técnica para toda la gama de servicios de AWS y obtiene una comprensión detallada de su caso de uso y arquitectura tecnológica. Los TAM trabajan con aws solution architects para ayudarle a lanzar nuevos proyectos y ofrecer recomendaciones de prácticas recomendadas a lo largo del ciclo de vida de la implementación. Su TAM es el principal punto de contacto para las necesidades de soporte continuo, y usted tiene una línea telefónica directa a su TAM.

***Las otras opciones son incorrectas:***

***"Ingeniero de gestión de eventos de infraestructura (IEM)" es incorrecto.*** AWS Infrastructure Event Management (IEM) es un programa estructurado disponible para los clientes de Enterprise Support (y los clientes de Business Support por una tarifa adicional) que le ayuda a planificar **eventos a gran escala**, como lanzamientos de productos o aplicaciones, migraciones de infraestructura y eventos de marketing. Con Infrastructure Event Management, obtiene asistencia de planificación estratégica antes de su evento, así como soporte en tiempo real durante estos momentos que más importan para su negocio. AWS Infrastructure Event Management no es para las necesidades de soporte diarias.

***"Usuario de AWS Identity and Access Management (IAM)" es incorrecto.*** Un usuario de AWS Identity and Access Management (IAM) es una entidad que se crea en AWS para representar a la persona o el servicio que lo utiliza para interactuar directamente con AWS. Un uso principal para los usuarios de IAM es conceder a las personas acceso a la consola de administración de AWS para tareas interactivas y/o realizar solicitudes programáticas a los servicios de AWS mediante la API o la CLI.

***"Socios consultores de AWS" es incorrecto.*** Los socios consultores de AWS no forman parte del soporte de AWS. Los socios consultores de AWS son empresas de servicios profesionales que ayudan a los clientes a diseñar, diseñar, crear, migrar y administrar sus cargas de trabajo y aplicaciones en AWS. Los socios consultores incluyen integradores de sistemas, consultorías estratégicas, agencias, proveedores de servicios administrados y revendedores de valor agregado.

**Referencias:**
https://aws.amazon.com/premiumsupport/plans/

Pregunta 50: **Omitido¿Cuál es el servicio de AWS que permite a los arquitectos de AWS administrar la infraestructura como código?**
• **AWS CloudFormation(Correcto)**
• **AWS Config**
• **Amazon EMR**
• **Amazon SES
Explicación**
**AWS CloudFormation** le permite utilizar lenguajes de programación o un archivo de texto simple para modelar y aprovisionar, de forma automatizada y segura, todos los recursos necesarios para sus aplicaciones en todas las regiones y cuentas. Cree una plantilla que describa todos los recursos de AWS que desee (como instancias amazon EC2 o instancias de base de datos de Amazon RDS), y AWS CloudFormation se encarga de aprovisionar y configurar esos recursos por usted. No es necesario crear y configurar individualmente los recursos de AWS y averiguar qué depende de qué; AWS CloudFormation se encarga de todo eso por usted.

***Las otras opciones son incorrectas:***

***"Amazon SES" es incorrecto.*** Amazon SES hace referencia al servicio amazon Simple Email.

***"AWS Config" es incorrecto.*** AWS Config es un servicio que le permite evaluar, auditar y evaluar las configuraciones de sus recursos de AWS.

***"Amazon EMR" es incorrecto.*** Amazon EMR se utiliza para ejecutar y escalar Apache Spark, Hadoop, Presto y otros marcos de Big Data.

**Referencias:**
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html

Pregunta 51: **OmitidoEstás trabajando en un proyecto que implica crear miniaturas de millones de imágenes. El tiempo de actividad constante no es un problema, y no se requiere un procesamiento continuo. ¿Qué opción de compra de EC2 sería la más rentable?**
• **Instancias bajo Demanda**
• **Instancias Spot(Correcto)**
• **Instancias dedicadas**
• **Instancias Reservadas
Explicación**
Las instancias spot ofrecen un descuento (hasta el 90%) sobre el precio On-Demand. El precio spot está determinado por las tendencias a largo plazo en la oferta y la demanda de capacidad excedentaria de EC2. Si el precio spot supera el precio máximo especificado para una instancia determinada o si la capacidad ya no está disponible, la instancia se interrumpirá automáticamente.
Las instancias de spot son una opción rentable si puede ser flexible sobre cuándo se ejecutan sus aplicaciones y si no le importa si sus aplicaciones se interrumpen. Por ejemplo, las instancias de spot son adecuadas para el análisis de datos, los trabajos por lotes, el procesamiento en segundo plano y las tareas opcionales.

***Las otras opciones son incorrectas:***

***"Instancias reservadas" es incorrecto.*** Las instancias reservadas se recomiendan para los clientes que pueden comprometerse a usar EC2 durante un período de 1 o 3 años para reducir sus costos informáticos totales. Incluso si el proyecto durará más de un año, el costo-beneficio para adquirir instancias reservadas no es tan grande como el costo-beneficio del uso de instancias de spot. La opción Spot ofrece el mayor descuento (hasta el 90%).

***"Instancias bajo demanda" es incorrecto.*** Las instancias bajo demanda son significativamente menos rentables que las instancias spot.

***"Instancias dedicadas" es incorrecto.*** Las instancias dedicadas se utilizan cuando necesita que sus instancias estén físicamente aisladas en el nivel de hardware del host de las instancias que pertenecen a otras cuentas de AWS. Las instancias dedicadas son significativamente más caras que las instancias de spot

**Referencias:**
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html

Pregunta 52: **Omitido¿Qué servicio proporciona almacenamiento a nivel de objeto en AWS?**
• **Amazon EBS**
• **Amazon S3(Correcto)**
• **Amazon EFS**
• **Amazon Instance Store
Explicación**
Amazon S3 es un almacenamiento a nivel de objeto creado para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar: sitios web y aplicaciones móviles, aplicaciones corporativas y datos de sensores o dispositivos de IoT. Está diseñado para ofrecer una durabilidad del 99,9999999999% y almacena datos para millones de aplicaciones utilizadas por los líderes del mercado en todas las industrias.

***Las otras opciones son incorrectas:***

***"Amazon EFS" es incorrecto.*** Amazon EFS es una tecnología de almacenamiento a nivel de archivo que proporciona acceso compartido paralelo masivo a miles de instancias de Amazon EC2, lo que permite a sus aplicaciones alcanzar altos niveles de rendimiento agregado e IOPS con latencias consistentemente bajas.

***"Amazon EBS" es incorrecto.*** Amazon EBS es un almacenamiento **a nivel de bloque** que proporciona volúmenes de almacenamiento para su uso con instancias Amazon EC2 y Amazon RDS.

***"Amazon Instance Store" es incorrecto.*** Un almacén de instancias proporciona almacenamiento temporal **a nivel de bloque** para las instancias EC2. El almacén de instancias es ideal para el almacenamiento temporal de información que cambia con frecuencia, como búferes, cachés, datos de memoria virtual y otro contenido temporal.

**Referencias:**
https://aws.amazon.com/s3/
https://aws.amazon.com/what-is-cloud-object-storage/

Pregunta 53: **OmitidoUna empresa ha desarrollado una aplicación web de comercio electrónico en AWS. ¿Qué deben hacer para garantizar que la aplicación tenga el más alto nivel de disponibilidad?**
• **Implementar la aplicación en varias zonas de disponibilidad y subredes**
• **Implementación de la aplicación en varias VPC y subredes**
• **Implemente la aplicación en varias zonas de disponibilidad y ubicaciones perimetrales**
• **Implementar la aplicación en varias regiones y zonas de disponibilidad(Correcto)
Explicación**
La infraestructura global de AWS se basa en regiones y zonas de disponibilidad (AZ). Cada región de AWS es un área geográfica independiente. Cada región de AWS tiene varias ubicaciones aisladas conocidas como zonas de disponibilidad. Las zonas de disponibilidad de una región están conectadas con baja latencia, alto rendimiento y redes altamente redundantes. Estas zonas de disponibilidad ofrecen a los clientes de AWS una forma más fácil y eficaz de diseñar y operar aplicaciones y bases de datos, lo que las hace más altamente disponibles, tolerantes a errores y escalables que las infraestructuras tradicionales de un solo centro de datos o las infraestructuras de varios centros de datos.
Además de replicar aplicaciones y datos en varios centros de datos de la misma región mediante zonas de disponibilidad, también puede optar por aumentar aún más la redundancia y la tolerancia a errores mediante la replicación de datos entre regiones geográficas (especialmente si atiende a clientes de todo el mundo). Puede hacerlo utilizando redes privadas de alta velocidad y conexiones públicas a Internet para proporcionar una capa adicional de continuidad del negocio o para proporcionar acceso de baja latencia en todo el mundo.

***Las otras opciones son incorrectas:***

***"Implementar la aplicación en varias zonas de disponibilidad y subredes" es incorrecto.*** Una subred es un intervalo de direcciones IP de la VPC.

***"Implementar la aplicación en varias zonas de disponibilidad y ubicaciones perimetrales" es incorrecto.*** Las ubicaciones perimetrales no se usan para hospedar aplicaciones. CloudFront utiliza las ubicaciones de borde para almacenar en caché y distribuir contenido a sus clientes globales con baja latencia.

***"Implementar la aplicación en varias VPC y subredes" es incorrecto.*** VPC se refiere a la nube privada virtual, que es una red virtual que usted define. La implementación de la aplicación en varias VPC dentro de la misma región no ayudará a sus clientes globales.

**Referencias:**
https://aws.amazon.com/about-aws/global-infrastructure/

Pregunta 54: **Omitido¿Qué proporciona AWS Personal Health Dashboard? (Elija DOS)**
• [ ] **Recomendaciones para la optimización de costos**
• [ ] **Información publicada sobre el estado actual y la disponibilidad de todos los servicios de AWS**
• [ ] **Guía detallada de solución de problemas para abordar los eventos de AWS que afectan a sus recursos(Correcto)**
• [ ] **Un panel que detalla las vulnerabilidades en sus aplicaciones**
• [ ] **Vista personalizada del estado del servicio de AWS(Correcto)
Explicación**
**AWS Personal Health Dashboard** proporciona alertas y orientación de corrección cuando AWS experimenta eventos que pueden afectarle. Mientras que el panel de estado del servicio muestra el estado general de los servicios de AWS, el panel de estado personal le ofrece una vista personalizada del rendimiento y la disponibilidad de los servicios de AWS subyacentes a sus recursos de AWS.
Los beneficios del panel de salud personal de AWS incluyen:
**Una vista personalizada del estado del servicio: personal Health Dashboard le ofrece una vista personalizada del estado de los servicios de AWS que impulsan sus aplicaciones, lo que le permite ver rápidamente cuándo AWS está experimentando problemas que pueden afectarle. Por ejemplo, en el caso de que se pierda un volumen de EBS asociado a una de sus instancias EC2, obtendrá una visibilidad rápida del estado del servicio específico que está utilizando, lo que le ayudaría a ahorrar un tiempo precioso en la solución de problemas para determinar la causa raíz.
**Notificaciones proactivas: el panel también proporciona notificaciones prospectivas, y puede configurar alertas en múltiples canales, incluidas notificaciones por correo electrónico y móviles, para que reciba información oportuna y relevante para ayudar a planificar los cambios programados que pueden afectarlo. En el caso de actividades de mantenimiento de hardware de AWS que puedan afectar a una de sus instancias EC2, por ejemplo, recibirá una alerta con información para ayudarle a planificar y abordar de forma proactiva cualquier problema asociado con el próximo cambio.
**Guía detallada para la solución de problemas: cuando recibe una alerta, incluye detalles de corrección y orientación específica para permitirle tomar medidas inmediatas para abordar los eventos de AWS que afectan a sus recursos. Por ejemplo, en el caso de que un error de hardware de AWS afecte a uno de sus volúmenes de EBS, la alerta incluirá una lista de los recursos afectados, una recomendación para restaurar el volumen y vínculos a los pasos para ayudarle a restaurarlo desde una instantánea. Esta información específica y procesable reduce el tiempo necesario para resolver problemas.

***Las otras opciones son incorrectas:***

***"Un panel que detalla las vulnerabilidades en sus aplicaciones" es incorrecto.*** Puede comprobar si hay vulnerabilidades en sus aplicaciones mediante otros servicios como Amazon Inspector.

***"Recomendaciones para la optimización de costos" es incorrecto.*** Puede obtener ayuda sobre la optimización de costos mediante otros servicios, como AWS Trusted Advisor.

***"Información publicada sobre el estado actual y la disponibilidad de todos los servicios de AWS" es incorrecta.*** Puede obtener información sobre el estado actual y la disponibilidad de los servicios de AWS en cualquier momento utilizando el aws Service Health Dashboard que está disponible en este enlace: https://status.aws.amazon.com/

**Referencias:**
https://aws.amazon.com/premiumsupport/phd/

Pregunta 55: **OmitidoDe acuerdo con la Política de uso aceptable de AWS, ¿cuál de las siguientes afirmaciones es cierta con respecto a las pruebas de penetración de instancias EC2?**
• **AWS realiza automáticamente pruebas de penetración para determinar las vulnerabilidades en su infraestructura de AWS**
• **Los clientes de AWS solo pueden realizar pruebas de penetración en servicios administrados por AWS**
• **Las pruebas de penetración no están permitidas en AWS**
• **El cliente puede realizar pruebas de penetración en sus propias instancias sin autorización previa de AWS(Correcto)
Explicación**
Los clientes de AWS pueden realizar evaluaciones de seguridad y pruebas de penetración en su infraestructura de AWS sin aprobación previa para 8 servicios:
1- Instancias Amazon EC2, gateways NAT y Elastic Load Balancers.
2- Amazon RDS.
3- Amazon CloudFront.
4- Aurora Amazónica.
5- Amazon API Gateways.
6- Funciones de AWS Lambda y Lambda Edge.
7- Recursos de Amazon Lightsail.
8- Entornos de Amazon Elastic Beanstalk.

***Las otras opciones son incorrectas.***

***"AWS realiza automáticamente pruebas de penetración para determinar vulnerabilidades en su infraestructura de AWS" es incorrecto.*** Los clientes de AWS son responsables de realizar pruebas de penetración en su infraestructura de AWS.

***"Las pruebas de penetración no están permitidas en AWS" es incorrecto.*** Los clientes de AWS pueden realizar pruebas de penetración en su infraestructura de AWS, pero deben asegurarse de que sus actividades estén alineadas con las políticas de AWS.

***"Los clientes de AWS solo pueden realizar pruebas de penetración en servicios administrados por AWS" es incorrecto.*** Los clientes de AWS pueden realizar pruebas de penetración tanto en servicios administrados por AWS, como Amazon RDS, como en servicios administrados por clientes, como Amazon EC2.

**Información adicional:**

**La diferencia entre los servicios administrados por AWS y los servicios administrados por el cliente:**

Para los servicios administrados por AWS, como Amazon RDS y Amazon DynamoDB, AWS es responsable de realizar todas las operaciones necesarias para mantener el servicio en funcionamiento.
Los servicios administrados por AWS automatizan las tareas de administración que consumen mucho tiempo, como el aprovisionamiento de hardware, la configuración de software, la aplicación de parches y las copias de seguridad. Los servicios administrados por AWS permiten a los clientes centrarse en sus aplicaciones para que puedan ofrecerles el rendimiento rápido, la alta disponibilidad, la seguridad y la compatibilidad que necesitan.
Entre los ejemplos de servicios administrados por AWS se incluyen Amazon RDS, Amazon DynamoDB, Amazon Redshift, Amazon WorkSpaces, Amazon CloudFront, Amazon CloudSearch y varios otros servicios.
Por otro lado, los servicios gestionados por el cliente son servicios que son completamente gestionados por el cliente. Por ejemplo, un servicio como Amazon Elastic Compute Cloud (Amazon EC2) se clasifica como Infraestructura como servicio (IaaS) y, como tal, requiere que el cliente realice todas las tareas de configuración y administración de seguridad necesarias. Los clientes que implementan una instancia Amazon EC2 son responsables de la administración del sistema operativo invitado (incluidas las actualizaciones y los parches de seguridad), cualquier software de aplicación o utilidades instaladas por el cliente en las instancias y la configuración del firewall proporcionado por AWS (denominado grupo de seguridad) en cada instancia.
Entre los ejemplos de servicios administrados por el cliente se incluyen Amazon Elastic Compute Cloud (Amazon EC2), Amazon Virtual Private Cloud (Amazon VPC) y AWS Identity And Access Management (AWS IAM).

**Referencias:**
https://aws.amazon.com/security/penetration-testing/

Pregunta 56: **Omitido¿Cuál es la ventaja de la práctica recomendada por AWS de "desacoplamiento" de aplicaciones?**
• **Permite tratar una aplicación como una unidad única y cohesiva**
• **Permite el seguimiento de cualquier llamada a la API realizada a cualquier servicio de AWS**
• **Permite actualizaciones de cualquier aplicación monolítica de forma rápida y sencilla**
• **Reduce las interdependencias para que los errores no afecten a otros componentes de la aplicación(Correcto)
Explicación**
A medida que aumenta la complejidad de la aplicación, un atributo deseable de un sistema de TI es que se puede dividir en componentes más pequeños y poco acoplados. Esto significa que los sistemas de TI deben diseñarse de manera que reduzcan las interdependencias: un cambio o una falla en un componente no debe caer en cascada a otros componentes. Por otro lado, si los componentes de una aplicación están estrechamente acoplados y un componente falla, toda la aplicación también fallará. Por lo tanto, al diseñar su aplicación, siempre debe desacoplar sus componentes.

***Las otras opciones son incorrectas:***

***"Permite tratar una aplicación como una sola unidad cohesiva" es incorrecto.*** El desacoplamiento le permite tratar su aplicación como múltiples componentes independientes (microservicios) no como una sola unidad cohesiva.

***"Permite el seguimiento de cualquier llamada a la API realizada a cualquier servicio de AWS" es incorrecto.*** No existe ninguna relación entre el desacoplamiento de una aplicación y el seguimiento de las llamadas a la API. AWS CloudTrail realiza un seguimiento de las llamadas a la API.

***"Permite actualizaciones de cualquier aplicación monolítica de forma rápida y sencilla" es incorrecto.*** El desacoplamiento es exactamente lo contrario de tener una aplicación monolítica. Una aplicación monolítica está diseñada para ser autónoma; los componentes del programa están interconectados e interdependientes en lugar de estar poco acoplados, como es el caso de las aplicaciones de microservicios (o aplicaciones de acoplamiento flexible). El desacoplamiento permite que la actualización de cualquier componente de la aplicación de microservicios se produzca de forma rápida e independiente del resto de la aplicación. Esto permite a los desarrolladores trabajar de forma independiente para actualizar varios componentes al mismo tiempo. Por otro lado, una aplicación monolítica es una sola unidad y requiere más tiempo y esfuerzo para actualizarse.

**Referencias:**
https://aws.amazon.com/microservices/

Pregunta 57: **Omitido¿Cuál es la característica de AWS que proporciona un nivel adicional de seguridad por encima del mecanismo de autenticación predeterminado de nombres de usuario y contraseñas?**
• **Verificación de correo electrónico**
• **AWS MFA(Correcto)**
• **Claves cifradas (Encrypted keys)**
• **AWS KMS
Explicación**
AWS Multi-Factor Authentication **(MFA)** es una práctica recomendada sencilla que agrega una capa adicional de protección además de usar solo su nombre de usuario y contraseña para autenticarse.

***Las otras opciones son incorrectas:***

***"Claves cifradas" es incorrecto.*** Iniciar sesión en la consola de administración de AWS no requiere claves cifradas.

***"Verificación de correo electrónico" es incorrecto.*** La verificación por correo electrónico es el proceso de verificar su propiedad de la dirección de correo electrónico de una cuenta.

***"AWS KMS" es incorrecto.*** AWS Key Management Service (AWS KMS) es un servicio administrado que facilita la creación y el control de las claves de cifrado utilizadas para cifrar los datos.

**Referencias:**
https://aws.amazon.com/iam/details/mfa/

Pregunta 58: **OmitidoUna de las prácticas recomendadas de AWS más importantes a seguir es el principio de elasticidad de la arquitectura de la nube. ¿Cómo mejora este principio el diseño de su arquitectura?**
• **Aprovisionando automáticamente los recursos de AWS necesarios en función de los cambios en la demanda(Correcto)**
• **Escalando automáticamente sus recursos de AWS mediante un Elastic Load Balancer**
• **Reduciendo las interdependencias entre los componentes de la aplicación siempre que sea posible**
• **Escalando automáticamente los recursos locales en función de los cambios en la demanda
Explicación**
Antes de la computación en la nube, tenía que sobreaprovisionar la infraestructura para asegurarse de que tenía suficiente capacidad para manejar sus operaciones comerciales en el nivel máximo de actividad. Ahora, puede aprovisionar la cantidad de recursos que realmente necesita, sabiendo que puede escalar instantáneamente hacia arriba o hacia abajo con las necesidades de su negocio. Esto reduce los costos y mejora su capacidad para satisfacer las demandas de sus usuarios.
El concepto de elasticidad implica la capacidad de un servicio para escalar sus recursos hacia afuera o hacia adentro (hacia arriba o hacia abajo) en función de los cambios en la demanda. Por ejemplo, el escalado automático de Amazon EC2 puede ayudar a automatizar el proceso de adición o eliminación de instancias de Amazon EC2 a medida que aumenta o disminuye la demanda.

***Las otras opciones son incorrectas:***

***"Reduciendo las interdependencias entre los componentes de la aplicación siempre que sea posible" es incorrecto.*** La reducción de las interdependencias entre los componentes de la aplicación está mucho más relacionada con el concepto de "acoplamiento suelto". El acoplamiento flexible es un enfoque que implica interconectar los componentes en un sistema o red para que esos componentes dependan entre sí en la menor medida posible. Los ingenieros deben diseñar su sistema o aplicación de tal manera que la falla en un componente no afecte negativamente a otros componentes. Los componentes poco acoplados hacen que el sistema sea resistente y le permiten recuperarse con gracia de una falla.

***"Al escalar automáticamente los recursos locales en función de los cambios en la demanda" es incorrecto.*** No es posible escalar automáticamente los recursos locales. Al implementar localmente, debe adivinar sus necesidades de capacidad de infraestructura.

***"Al escalar automáticamente sus recursos de AWS mediante un Elastic Load Balancer" es incorrecto.*** Los Elastic Load Balancers no escalan los recursos. Elastic Load Balancers distribuye el tráfico entrante de aplicaciones entre varios destinos, como instancias Amazon EC2, contenedores, direcciones IP y funciones de Lambda.

**Referencias:**
https://aws.amazon.com/ec2/autoscaling/
https://wa.aws.amazon.com/wat.concept.elasticity.en.html

Pregunta 59: **Omitido¿Cuáles de los siguientes son ejemplos de servicios administrados de AWS, donde AWS es responsable de las cargas operativas y de mantenimiento de la ejecución del servicio?**
• [ ] **Amazon DynamoDB(Correcto)**
• [ ] **Amazon Elastic Compute Cloud**
• [ ] **Amazon VPC**
• [ ] **Amazon Elastic MapReduce(Correcto)**
• [ ] **AWS IAM
Explicación**
Para los servicios administrados como Amazon Elastic MapReduce (Amazon EMR) y DynamoDB, AWS es responsable de realizar todas las operaciones necesarias para mantener el servicio en funcionamiento.
Amazon EMR lanza clústeres en cuestión de minutos. No necesita preocuparse por el aprovisionamiento de nodos, la configuración de la infraestructura, la configuración de Hadoop o el ajuste del clúster. Amazon EMR se encarga de estas tareas para que pueda centrarse en el análisis.
DynamoDB no tiene servidor, no tiene servidores que aprovisionar, aplicar parches o administrar y no tiene software que instalar, mantener u operar. DynamoDB escala automáticamente las tablas hacia arriba y hacia abajo para ajustar la capacidad y mantener el rendimiento. La disponibilidad y la tolerancia a fallos están integradas, lo que elimina la necesidad de diseñar sus aplicaciones para estas capacidades.
**Otros servicios administrados incluyen:** AWS Lambda, Amazon RDS, Amazon Redshift, Amazon CloudFront y varios otros servicios.
Para estos servicios administrados, AWS es responsable de la mayoría de las tareas de configuración y administración, pero los clientes siguen siendo responsables de administrar sus datos (incluidas las opciones de cifrado), clasificar sus activos y usar herramientas de IAM para aplicar los permisos adecuados.

**NOTA:**
Los servicios administrados de AWS que mencionamos anteriormente son diferentes del servicio de servicios administrados de AWS (AMS). AMS es un servicio de AWS que opera AWS en nombre de clientes y socios empresariales. Las empresas quieren adoptar AWS a escala, pero a menudo las habilidades que les han servido bien en la TI tradicional no siempre se traducen en éxito en la nube. AWS Managed Services (AMS) les permite migrar a AWS a escala más rápidamente, reducir sus costos operativos, mejorar la seguridad y la conformidad y centrarse en sus prioridades empresariales diferenciadoras.

***Las otras opciones son incorrectas:***

***"Amazon VPC" es incorrecto.*** Amazon Virtual Private Cloud (Amazon VPC) le permite aprovisionar una sección lógicamente aislada de la nube de AWS donde puede lanzar recursos de AWS en una red virtual que usted defina. Usted tiene control total sobre su entorno de red virtual. Amazon VPC no es un servicio administrado, usted es responsable de administrar casi todo cuando se utiliza el servicio Amazon VPC.

***"Amazon Elastic Compute Cloud" es incorrecto.*** Amazon Elastic Compute Cloud (Amazon EC2) es un servicio que le brinda un control completo sobre sus recursos informáticos. Además de aplicar parches al host subyacente, que es responsabilidad de AWS, usted es responsable de administrar casi todo en sus instancias de servidor cuando utiliza Amazon EC2.

***"AWS IAM" es incorrecto.*** AWS Identity and Access Management (IAM) le permite administrar el acceso a los servicios y recursos de AWS de forma segura. Con IAM, puede crear y administrar usuarios y grupos de AWS, y usar permisos para permitir y denegar su acceso a los recursos de AWS.

**Referencias:**
https://aws.amazon.com/dynamodb/
https://aws.amazon.com/emr/

Pregunta 60: **Omitido¿Qué clase de almacenamiento de S3 es la mejor para datos con patrones de acceso impredecibles?**
• **Estándar de Amazon S3**
• **Acceso poco frecuente estándar de Amazon S3(Amazon S3 Standard-Infrequent Access)**
• **Niveles inteligentes de Amazon S3(Amazon S3 Intelligent-Tiering)(Correcto)**
• **Glaciar Amazon S3 (Amazon S3 Glacier)
Explicación**
La clase de almacenamiento de información S3 Intelligent-Tiering está diseñada para optimizar los costos al mover automáticamente los datos al nivel de acceso más rentable, sin impacto en el performance ni sobrecarga operativa. Funciona almacenando objetos en dos niveles de acceso: un nivel optimizado para el acceso frecuente y otro nivel de menor costo que está optimizado para el acceso poco frecuente. Por una pequeña tarifa mensual de supervisión y automatización por objeto, Amazon S3 supervisa los patrones de acceso de los objetos en S3 Intelligent-Tiering y mueve los que no se han accedido durante 30 días consecutivos al nivel de acceso poco frecuente. Si se accede a un objeto en el nivel de acceso poco frecuente, se vuelve a mover automáticamente al nivel de acceso frecuente. No hay cargos de recuperación cuando se usa la clase de almacenamiento de información S3 Intelligent-Tiering ni cargos adicionales de organización en niveles cuando los objetos se mueven entre niveles de acceso. Es la clase de almacenamiento ideal para datos de larga duración con patrones de acceso desconocidos o impredecibles.

***Las otras opciones son incorrectas:***

***"Amazon S3 Standard" es incorrecto.*** S3 Standard ofrece un almacenamiento de objetos de alta durabilidad, disponibilidad y rendimiento para los datos a los que se accede con frecuencia.

***"Acceso poco frecuente estándar de Amazon S3" es incorrecto.*** El acceso no frecuente estándar de Amazon S3 (S3 Standard-IA) es para datos a los que se accede con menos frecuencia, pero que requieren un acceso rápido cuando es necesario.

***"Amazon S3 Glacier" es incorrecto.*** Amazon S3 Glacier es una clase de almacenamiento de bajo costo para datos a los que rara vez se accede; como los datos archivados.

**Referencias:**
https://aws.amazon.com/s3/storage-classes/

Pregunta 61: **OmitidoSu empresa tiene una aplicación de almacén de datos que requiere acceso a una base de datos NoSQL. ¿Qué oferta de base de datos de AWS cumpliría este requisito?**
• **Amazon Elastic Block Store**
• **Amazon DynamoDB(Correcto)**
• **Amazon Aurora**
• **Amazon Redshift
Explicación**
**Amazon DynamoDB** es un servicio de base de datos NoSQL rápido y flexible para todas las aplicaciones que necesitan una latencia de milisegundos consistente de un solo dígito a cualquier escala. Es una base de datos en la nube totalmente administrada y admite modelos de almacenamiento de documentos y clave-valor. Su modelo de datos flexible, rendimiento confiable y escalado automático de la capacidad de rendimiento, lo convierten en una excelente opción para aplicaciones móviles, web, juegos, tecnología publicitaria, IoT y muchas otras.

***Las otras opciones son incorrectas:***

***"Amazon Elastic Block Store" es incorrecto.*** Amazon Elastic Block Store (Amazon EBS) es un servicio de almacenamiento, NO un servicio de base de datos.

***"Amazon Aurora" es incorrecto.*** Amazon Aurora no admite bases de datos NoSQL. Amazon Aurora es una base de datos relacional compatible con MySQL y PostgreSQL.

***"Amazon Redshift" es incorrecto.*** Amazon Redshift no admite datos no relacionales. Amazon Redshift es un servicio de almacenamiento de datos totalmente administrado que le permite ejecutar consultas analíticas complejas en petabytes de datos estructurados mediante SQL estándar y sus herramientas de Business Intelligence (BI) existentes.

**Referencias:**
https://aws.amazon.com/dynamodb/

Pregunta 62: **OmitidoTrabaja localmente en un DBA de MySQL. El trabajo de configuración de bases de datos, copias de seguridad, parches y DR en recuperación ante desastres puede llevar mucho tiempo y ser repetitivo. Su empresa ha decidido migrar a la nube de AWS. ¿Cuál de las siguientes opciones puede ayudar a ahorrar tiempo en el mantenimiento de la base de datos para que pueda centrarse en la arquitectura y el rendimiento de los datos?**
• **Amazon Redshift**
• **Amazon CloudWatch**
• **Amazon DynamoDB**
• **Amazon RDS(Correcto)
Explicación**
Amazon Relational Database Service (**Amazon RDS**) facilita la configuración, el funcionamiento y la escalabilidad de una base de datos relacional en la nube. Proporciona una capacidad rentable y redimensionable al tiempo que automatiza las tareas de administración que consumen mucho tiempo, como el aprovisionamiento de hardware, el mantenimiento del sistema operativo, la configuración de la base de datos, la aplicación de parches y las copias de seguridad. Le libera para centrarse en sus aplicaciones para que pueda darles el rendimiento rápido, la alta disponibilidad, la seguridad y la compatibilidad que necesitan.
Amazon RDS se puede utilizar para alojar bases de datos Amazon Aurora, **PostgreSQL, MySQL**, MariaDB, Oracle y Microsoft SQL Server.

***Las otras opciones son incorrectas:***

***"Amazon Redshift" es incorrecto.*** Amazon Redshift no es un servicio de base de datos MySQL. Amazon Redshift es un servicio de almacenamiento de datos totalmente administrado que hace que sea sencillo y rentable analizar todos sus datos mediante SQL estándar y sus herramientas de Business Intelligence (BI) existentes.

***"Amazon DynamoDB" es incorrecto.*** Amazon DynamoDB no es un servicio de base de datos MySQL. Amazon DynamoDB es un servicio de base de datos NoSQL totalmente administrado.

***"Amazon CloudWatch" es incorrecto.*** Amazon CloudWatch no es un servicio de base de datos. Amazon CloudWatch es un servicio de monitorización que le ofrece una visibilidad completa de sus recursos y aplicaciones en la nube.

**Referencias:**
https://aws.amazon.com/rds/

Pregunta 63: **Omitido¿Cuál de los siguientes servicios permite a los clientes administrar sus acuerdos con AWS?**
• **AWS Certificate Manager**
• **AWS Organizations**
• **AWS Artifact(Correcto)**
• **AWS Systems Manager
Explicación**
AWS Artifact es un portal de recuperación de artefactos de auditoría de autoservicio que proporciona a los clientes acceso bajo demanda a la documentación de conformidad y los acuerdos de AWS. Puede utilizar los acuerdos de AWS Artifact para revisar, aceptar y realizar un seguimiento del estado de los acuerdos de AWS, como el Anexo para socios comerciales (BAA).
Información adicional:
También puede utilizar AWS Artifact Reports para descargar documentos de seguridad y conformidad de AWS, como certificaciones ISO de AWS, informes de la industria de tarjetas de pago (PCI) y control de sistemas y organizaciones (SOC).

***Las otras opciones son incorrectas:***

***"AWS Organizations" es incorrecto.*** AWS Organizations proporciona administración y gobierno centrales en varias cuentas de AWS.

***"AWS Systems Manager" es incorrecto.*** AWS Systems Manager le ofrece visibilidad y control de su infraestructura en AWS. Systems Manager proporciona una interfaz de usuario unificada para que pueda ver los datos operativos de varios servicios de AWS y le permite automatizar las tareas operativas en todos sus recursos de AWS.

***"AWS Certificate Manager" es incorrecto.*** AWS Certificate Manager es un servicio que le permite aprovisionar, administrar e implementar fácilmente certificados públicos y privados de Secure Sockets Layer/Transport Layer Security (SSL/TLS) para su uso con los servicios de AWS y sus recursos conectados internos

**Referencias:**
https://aws.amazon.com/artifact/

Pregunta 64: **Omitido¿Cuál de las siguientes opciones no es un beneficio de Amazon S3? (Elija DOS)**
• [ ] **Amazon S3 se puede escalar manualmente para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar(Correcto)**
• [ ] **Amazon S3 puede ejecutar cualquier tipo de aplicación o sistema back-end(Correcto)**
• [ ] **Amazon S3 proporciona almacenamiento ilimitado para cualquier tipo de datos**
• [ ] **Amazon S3 almacena cualquier número de objetos, pero con límites de tamaño de objeto**
• [ ] **Amazon S3 proporciona un 99,999999999 % (11 9) de durabilidad de los datos
Explicación**
***"Amazon S3 puede ejecutar cualquier tipo de aplicación o sistema backend"*** no es un beneficio de S3 y, por lo tanto, es una respuesta correcta. Amazon S3 es un servicio de almacenamiento, no un servicio informático.
***"Amazon S3 se puede escalar manualmente para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar"*** no es un beneficio de S3 y, por lo tanto, es una respuesta correcta. Amazon S3 se escala automáticamente para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar.

Las empresas de hoy en día necesitan la capacidad de recopilar, almacenar y analizar sus datos de forma simple y segura a gran escala. Amazon S3 es un almacenamiento de objetos creado para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar: sitios web y aplicaciones móviles, aplicaciones corporativas y datos de sensores o dispositivos de IoT. Es un servicio de almacenamiento simple que ofrece una infraestructura de almacenamiento de datos altamente disponible e infinitamente escalable a costos muy bajos. Está diseñado para ofrecer una durabilidad del 99,9999999999% y almacena datos para millones de aplicaciones utilizadas por los líderes del mercado en todas las industrias. S3 proporciona capacidades integrales de seguridad y cumplimiento que cumplen incluso con los requisitos reglamentarios más estrictos. Brinda a los clientes flexibilidad en la forma en que administran los datos para la optimización de costos, el control de acceso y el cumplimiento. S3 proporciona funcionalidad de consulta in situ, lo que le permite ejecutar análisis potentes directamente en sus datos en reposo en S3. Y Amazon S3 es el servicio de almacenamiento en la nube más compatible disponible, con integración de la mayor comunidad de soluciones de terceros, socios integradores de sistemas y otros servicios de AWS.

Amazon S3 almacena cualquier número de objetos, pero cada objeto tiene una limitación de tamaño. Los objetos individuales de Amazon S3 pueden variar en tamaño desde un mínimo de 0 bytes hasta un máximo de 5 terabytes.

**Referencias:**
https://aws.amazon.com/s3/

Pregunta 65: **OmitidoUna empresa ha decidido migrar su base de datos Oracle a AWS. ¿Qué servicio de AWS puede ayudar a lograr esto sin afectar negativamente a la funcionalidad de la base de datos de origen?**
• **Servicio de migración de servidores de AWS (AWS Server Migration Service)**
• **AWS OpsWorks**
• **Servicio de migración de bases de datos de AWS (AWS Database Migration Service)(Correcto)**
• **Servicio de detección de aplicaciones de AWS (AWS Application Discovery Service)
Explicación**
**AWS Database Migration Service (DMS)** le ayuda a migrar bases de datos a AWS de forma fácil y segura. La base de datos de origen permanece completamente operativa durante la migración, lo que minimiza el tiempo de inactividad de las aplicaciones que dependen de la base de datos. AWS Database Migration Service puede migrar sus datos hacia y desde las bases de datos comerciales y de código abierto más utilizadas. El servicio admite migraciones homogéneas como Oracle a Oracle, así como migraciones heterogéneas entre diferentes plataformas de bases de datos, como Oracle a Amazon Aurora o Microsoft SQL Server a MySQL. También le permite transmitir datos a Amazon Redshift desde cualquiera de los orígenes admitidos, incluidos Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, SAP ASE y SQL Server, lo que permite la consolidación y el análisis sencillo de los datos en el almacén de datos a escala de petabytes. AWS Database Migration Service también se puede utilizar para la replicación continua de datos con alta disponibilidad.

***Las otras opciones son incorrectas:***

***"AWS OpsWorks" es incorrecto.*** AWS OpsWorks es un servicio de administración de configuración que proporciona instancias administradas de Chef y Puppet.

***"AWS Server Migration Service" es incorrecto.*** AWS Server Migration Service (SMS) se utiliza para migrar las cargas de trabajo locales a AWS.

***"AWS Application Discovery Service" es incorrecto.*** AWS Application Discovery Service ayuda a los clientes empresariales a planificar proyectos de migración mediante la recopilación de información sobre sus centros de datos locales.

**Referencias:**
https://d1.awsstatic.com/whitepapers/aws-overview.pdf`;

let questions = texto
  .replace(/\*/g, "")
  .split("Pregunta")
  .splice(1)
  .map((question) => {
    const pregunta = question
      .split("Explicación")[0]
      .split("•")[0]
      .trim()
      .slice(3)
      .replace("Omitido", "")
      .trim();

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

console.log(JSON.stringify(questions));
