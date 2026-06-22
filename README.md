# Sistema Confidencial de Evaluación del Colaborador

Versión base para registrar encuestas confidenciales de colaboradores, centralizar la información y generar análisis administrativo para auditoría preventiva, bienestar laboral y planificación operativa.

## Incluye

- `index.html`
- `manifest.webmanifest`
- `sw.js`
- Carpeta opcional de íconos para instalación como aplicación web progresiva

## Qué hace

- Presenta una encuesta confidencial para colaboradores.
- Solicita aceptación de confidencialidad antes de iniciar.
- Divide la encuesta por módulos para facilitar el llenado.
- Captura información personal, socioeconómica, financiera, salud, experiencia laboral, entorno familiar y traslado.
- Calcula automáticamente indicadores de presión económica.
- Clasifica el nivel financiero en bajo, moderado, alto, crítico o sobreendeudamiento severo.
- Cuenta con panel administrativo privado.
- Permite visualizar registros consolidados.
- Muestra indicadores y gráficas gerenciales.
- Permite exportar la información para análisis administrativo.
- Está preparado para conexión con Firebase Firestore.

## Módulos principales de la encuesta

1. Datos personales del colaborador.
2. Situación socioeconómica y vivienda.
3. Situación financiera, endeudamiento y procesos económicos legales.
4. Salud, condiciones físicas y hábitos personales.
5. Historia laboral, experiencia y antecedentes operativos.
6. Entorno familiar básico.
7. Rutina, asistencia y logística de traslado.

## Uso previsto

Este sistema está diseñado para uso interno y confidencial.

La información recopilada debe utilizarse únicamente para análisis estadístico, planificación operativa, bienestar laboral y auditoría preventiva.

No debe utilizarse para discriminación, señalamiento individual, sanción automática o toma de decisiones sin revisión humana responsable.

## Cómo probar

1. Abre `index.html` en el navegador.
2. Acepta la nota de confidencialidad.
3. Presiona **Iniciar encuesta**.
4. Completa los módulos solicitados.
5. Presiona **Enviar encuesta**.
6. Ingresa al panel administrativo.
7. Revisa los registros, indicadores y gráficas.

## Acceso administrativo de prueba

La versión de demostración puede incluir una contraseña temporal para vista previa del panel administrativo.

Ejemplo:

```text
ADMIN-DEMO