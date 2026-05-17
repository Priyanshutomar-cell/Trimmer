# 🌤️ Weather Dashboard - Complete Application Guide

A comprehensive, fully-featured weather dashboard that fetches real-time data from OpenWeatherMap API. Built with pure HTML, CSS, and JavaScript - no frameworks or dependencies needed!

## 🎯 Features

### Current Weather Display
- 🌡️ **Real-Time Temperature** - Accurate temperature with weather icons
- 💨 **Wind Information** - Wind speed and direction
- 💧 **Humidity Levels** - Current humidity percentage
- 🔬 **Pressure Data** - Atmospheric pressure in hPa
- 👁️ **Visibility** - How far you can see
- 🌅 **Sunrise/Sunset** - Daily solar times

### Forecast Data
- ⏰ **Hourly Forecast** - Next 24 hours in 3-hour intervals
- 📅 **5-Day Forecast** - Weekly outlook with min/max temperatures
- 📊 **Detailed Metrics** - Wind speed and humidity for each forecast

### Advanced Features
- 🌍 **City Search** - Find weather for any city worldwide
- 📍 **Geolocation** - Auto-detect your current location
- 🌙 **Dark Mode** - Easy on the eyes at night
- 🌡️ **Unit Toggle** - Switch between Celsius/Fahrenheit
- 💾 **Recent Cities** - Quick access to searched locations
- 🏥 **Air Quality Index (AQI)** - Pollutant level monitoring
- 🧪 **Pollutant Details** - PM2.5, PM10, NO₂, O₃, SO₂, CO levels
- 🔄 **Auto-Save Preferences** - Settings persist between sessions

### UI/UX Features
- 📱 **Fully Responsive** - Perfect on all screen sizes
- ✨ **Smooth Animations** - Professional transitions
- 🎨 **Beautiful Gradients** - Modern gradient design
- 📊 **Data Visualization** - Easy-to-read layouts
- ⚡ **Fast Loading** - Optimized API calls
- 📲 **Mobile-Friendly** - Touch-optimized interface

## 🚀 Quick Start

### Option 1: Direct Open (Easiest)
```bash
1. Download weather.html
2. Double-click to open in browser
3. Start checking weather!
```

### Option 2: Local Server
```bash
# Python 3
python -m http.server 8000
# Visit: http://localhost:8000/weather.html

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

### Option 3: Deploy to GitHub Pages
1. Push `weather.html` to your GitHub repo
2. Enable GitHub Pages in repo settings
3. Access via: `https://yourusername.github.io/repo/weather.html`

## 📡 API Integration

### OpenWeatherMap API Used

The dashboard uses **free tier** endpoints from OpenWeatherMap:

1. **Current Weather API**
   - Endpoint: `/data/2.5/weather`
   - Returns: Current conditions, temperature, wind, etc.

2. **5-Day Forecast API**
   - Endpoint: `/data/2.5/forecast`
   - Returns: 5-day forecast in 3-hour intervals

3. **Air Pollution API**
   - Endpoint: `/data/2.5/air_pollution`
   - Returns: AQI and pollutant levels

4. **Geocoding API**
   - Endpoint: `/geo/1.0/direct`
   - Returns: Latitude and longitude from city name

### Included API Key
The dashboard includes a working free API key:
```javascript
const API_KEY = 'a6d9155ef83437e0dada8a0307a7a9b6';
```

### Get Your Own API Key
1. Visit [openweathermap.org](https://openweathermap.org/)
2. Sign up for free account
3. Go to API keys section
4. Copy your key
5. Replace in code: `const API_KEY = 'YOUR_KEY_HERE';`

## 📊 Data Displayed

### Current Weather Section
| Data | Display | Unit |
|------|---------|------|
| Temperature | Large number | °C/°F |
| Feels Like | Secondary temp | °C/°F |
| Condition | Weather description | Text |
| Humidity | Card display | % |
| Pressure | Card display | hPa |
| Wind Speed | Card display | m/s or mph |
| Visibility | Card display | km |
| Sunrise | Card display | HH:MM AM/PM |
| Sunset | Card display | HH:MM AM/PM |

### Forecast Data
- **Hourly**: Time, icon, temperature, description
- **5-Day**: Date, icon, max/min temp, condition, wind, humidity

### Air Quality (AQI)
| AQI Level | Status | Color |
|-----------|--------|-------|
| 1 | Good | Green |
| 2 | Fair | Yellow |
| 3 | Moderate | Orange |
| 4 | Poor | Red |
| 5 | Very Poor | Dark Red |

Pollutants tracked:
- PM2.5 (Fine particles)
- PM10 (Coarse particles)
- NO₂ (Nitrogen dioxide)
- O₃ (Ozone)
- SO₂ (Sulfur dioxide)
- CO (Carbon monoxide)

## 🎨 Customization Guide

### Change Theme Colors
Edit the CSS variables at the top:
```css
:root {
    --primary-color: #1e3a8a;      /* Main blue */
    --secondary-color: #3b82f6;    /* Light blue */
    --accent-color: #f59e0b;       /* Orange */
    --danger-color: #ef4444;       /* Red */
    --success-color: #10b981;      /* Green */
}
```

### Change Background Gradient
Find and modify:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add More Weather Icons
Extend the `weatherIcons` object:
```javascript
const weatherIcons = {
    '01d': '☀️',  // Sunny day
    '01n': '🌙',  // Clear night
    // ... add more
};
```

### Customize Default Location
In `DOMContentLoaded`:
```javascript
// Change these coordinates (currently New York)
getWeatherByCoords(40.7128, -74.0060);  // Your coordinates
```

### Modify Forecast Days
Change in `display5DayForecast()`:
```javascript
if (dayCount >= 5) break;  // Change 5 to desired number
```

## 💻 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables and animations
- **JavaScript ES6+** - Modern JavaScript features
- **Fetch API** - API communication
- **LocalStorage API** - Data persistence
- **Geolocation API** - Location detection

### Key Functions

**Core Functions:**
- `getWeatherByCoords(lat, lon)` - Fetch all weather data
- `handleSearch()` - Search by city name
- `getCurrentLocation()` - Use browser geolocation
- `displayCurrentWeather(data)` - Render current conditions
- `displayHourlyForecast(data)` - Render hourly data
- `display5DayForecast(data)` - Render weekly data
- `displayAirQuality(data)` - Render AQI data

**Utility Functions:**
- `toggleTheme()` - Switch dark/light mode
- `toggleUnit()` - Switch °C/°F
- `addRecentCity(name)` - Save to recent list
- `loadRecentCities()` - Display recent searches
- `showToast(message)` - Show notifications

### LocalStorage Keys
```javascript
localStorage.getItem('weatherTheme')   // 'dark' or 'light'
localStorage.getItem('weatherUnit')    // 'metric' or 'imperial'
localStorage.getItem('weatherCities')  // JSON array of cities
```

## 📱 Responsive Breakpoints

```css
/* Desktop - Full layout */
> 1200px

/* Tablet - Adjusted columns */
768px - 1199px

/* Mobile - Single column */
< 768px
```

## 🔐 Security Notes

- **Client-side only** - No backend needed
- **API Key visible** - Free tier key for demo
- **For production**: Use backend to hide API key
- **HTTPS required** - For production deployment
- **Geolocation** - Requires user permission

## ⚡ Performance Tips

1. **API Call Optimization**
   - Calls are batched (3 requests per search)
   - Results cached in DOM

2. **Rendering Efficiency**
   - Uses grid layout for fast rendering
   - CSS animations are GPU-accelerated

3. **Storage Management**
   - Recent cities limited to 5
   - Themes/units cached locally

## 🐛 Troubleshooting

### Issue: "City not found" Error
**Solution:** Check city spelling, try different city names

### Issue: Geolocation not working
**Solution:** 
- Allow location permission in browser
- Use HTTPS (required for geolocation)
- Check browser permissions

### Issue: No weather data showing
**Solution:**
- Check internet connection
- Verify API key is valid
- Check browser console for errors

### Issue: Dark mode not persisting
**Solution:** Check if localStorage is enabled

## 📊 API Response Example

```json
{
  "name": "New York",
  "sys": { "country": "US" },
  "main": {
    "temp": 22.5,
    "feels_like": 21,
    "humidity": 65,
    "pressure": 1013
  },
  "weather": [{
    "main": "Cloudy",
    "icon": "04d"
  }],
  "wind": { "speed": 3.5 },
  "visibility": 10000,
  "sys": {
    "sunrise": 1625097600,
    "sunset": 1625151000
  }
}
```

## 🚀 Advanced Features

### Air Quality Monitoring
Real-time AQI helps you:
- Plan outdoor activities
- Track pollution levels
- Monitor air quality trends
- Check specific pollutants

### Recent Cities Feature
- Click recent city tags to quickly switch
- Up to 5 recent searches saved
- Persists between sessions

### Dark Mode
- Automatically saved preference
- Easy on eyes in low light
- Complete dark styling throughout

## 📞 Support & Resources

### Official Links
- [OpenWeatherMap](https://openweathermap.org/)
- [API Documentation](https://openweathermap.org/api)
- [Icon Mapping](https://openweathermap.org/weather-conditions)

### Browser Requirements
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

This project teaches:
- REST API integration
- Fetch API usage
- DOM manipulation
- LocalStorage management
- Responsive design
- CSS Grid & Flexbox
- Event handling
- Error handling
- Data visualization

## 📝 Notes

- **Free Tier Limits**: 60 calls/minute, 1M calls/month
- **Accuracy**: Typically ±1-2°C
- **Update Frequency**: Real-time data
- **Coverage**: 193 countries, 7M+ cities

## 🎉 Features Summary

✅ Real-time weather data  
✅ Multiple location search  
✅ Hourly & 5-day forecasts  
✅ Air quality monitoring  
✅ Geolocation support  
✅ Dark/Light mode  
✅ Celsius/Fahrenheit toggle  
✅ Recent cities history  
✅ Responsive design  
✅ No dependencies  
✅ Free API included  
✅ Easy customization  

## 📄 License

Open source - Free to use and modify

---

**Happy Weather Checking!** 🌤️⛅🌧️❄️

Developed with ❤️ for weather enthusiasts