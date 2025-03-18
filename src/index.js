require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de Google Calendar
const calendar = google.calendar({ version: 'v3' });

// ID del calendario público de Argentina (valor por defecto)
const DEFAULT_CALENDAR_ID = 'es.ar#holiday@group.v.calendar.google.com';

app.get('/events', async (req, res) => {
  try {
    // Obtener el ID del calendario de los parámetros GET o usar el valor por defecto
    const calendarId = req.query.calendarId || DEFAULT_CALENDAR_ID;

    const response = await calendar.events.list({
      calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
      key: process.env.GOOGLE_API_KEY
    });

    const events = response.data.items.map(event => ({
      id: event.id,
      summary: event.summary,
      description: event.description,
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
      location: event.location,
    }));

    res.json(events);
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    res.status(500).json({ 
      error: 'Error al obtener los eventos del calendario',
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
}); 