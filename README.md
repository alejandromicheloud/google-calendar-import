# Google Calendar Import POC

Este es un proyecto de prueba (POC) que demuestra cómo leer eventos de un calendario público de Google Calendar utilizando Node.js y la API de Google Calendar.

## Características

- Lectura de eventos de un calendario público de Google Calendar
- API REST con Express.js
- Endpoint para obtener los próximos eventos
- Manejo de errores y respuestas JSON
- Autenticación mediante API Key
- Soporte para múltiples calendarios públicos
- Paginación automática para obtener todos los eventos

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (Node Package Manager)
- Cuenta de Google Cloud Platform

## Configuración de Credenciales

1. Ve a la [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google Calendar para tu proyecto
4. Ve a "Credenciales"
5. Haz clic en "Crear Credenciales" y selecciona "Clave de API"
6. Copia la API Key generada

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd google-calendar-import
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:
```bash
PORT=3001
GOOGLE_API_KEY=tu_api_key
```

## Uso

1. Inicia el servidor:
```bash
npm run dev
```

2. El servidor estará disponible en `http://localhost:3001`
3. Usa el endpoint `/events` para obtener los eventos del calendario

## Endpoints

### GET /events
Obtiene todos los eventos del calendario público a partir de una fecha específica.

#### Parámetros
- `calendarId` (opcional): ID del calendario a consultar. Si no se proporciona, se usa el calendario de feriados de Argentina por defecto.
- `timeMin` (opcional): Fecha y hora de inicio para obtener eventos (formato ISO 8601). Si no se proporciona, se usa la fecha y hora actual.

#### Ejemplos
- Obtener todos los eventos desde ahora:
  ```
  GET http://localhost:3001/events
  ```

- Obtener eventos de un calendario específico desde una fecha:
  ```
  GET http://localhost:3001/events?calendarId=tu_calendario_id&timeMin=2024-01-01T00:00:00Z
  ```

**Respuesta exitosa:**
```json
{
  "total": 42,
  "events": [
    {
      "id": "event_id",
      "summary": "Nombre del evento",
      "description": "Descripción del evento",
      "start": "2024-03-20T10:00:00Z",
      "end": "2024-03-20T11:00:00Z",
      "location": "Ubicación del evento"
    }
  ]
}
```

## Tecnologías Utilizadas

- Node.js
- Express.js
- Google Calendar API
- dotenv

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 
