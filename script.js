// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Dummy data for demonstration
    const data = {
        overallCropHealth: 85,
        areaSurveyed: 1200,
        activeIssues: 3,
        todayMissions: 2,
        alerts: [
            { type: 'Alert', message: 'Fungal disease detected in Sector B-2' },
            { type: 'Warning', message: 'Clogged nozzle detected, causing underwatering in Field A' },
            { type: 'Notice', message: 'Nitrogen deficiency identified in the northeast corner of Field C' }
        ],
        missionHistory: [
            { date: '2023-10-26 10:00 AM', area: 'Field A, Sector 1', pesticide: 'Bio-Pesticide X', covered: 50 },
            { date: '2023-10-25 02:30 PM', area: 'Field B, Sector 3', pesticide: 'Fungicide Y', covered: 30 },
            { date: '2023-10-24 09:00 AM', area: 'Field C, Sector 2', pesticide: 'Herbicide Z', covered: 45 }
        ],
        currentConditions: {
            temperature: 25,
            humidity: 60
        },
        yieldForecast: 2.5,
        resourceEfficiencyScore: 30,
        fieldStatus: [
            { name: 'Field A', health: 95, status: 'healthy' },
            { name: 'Field B', health: 75, status: 'warning' },
            { name: 'Field C', health: 45, status: 'critical' }
        ],
        recentOperations: [
            { time: '2 hours ago', description: 'Spraying completed in Field A', status: 'success' },
            { time: '5 hours ago', description: 'Surveillance scan in Field B', status: 'success' }
        ]
    };

    // Dashboard Section - Update all dashboard elements
    document.getElementById('dashboard-health').textContent = `${data.overallCropHealth}%`;
    document.getElementById('dashboard-area').textContent = `${data.areaSurveyed.toLocaleString()} Acres`;
    document.getElementById('dashboard-issues').textContent = data.activeIssues;
    document.getElementById('dashboard-missions').textContent = data.todayMissions;
    document.getElementById('dashboard-temp').textContent = `${data.currentConditions.temperature}°C`;
    document.getElementById('dashboard-humidity').textContent = `${data.currentConditions.humidity}%`;

    // Quick Actions Event Listeners
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            handleQuickAction(action);
        });
    });

    // Handle Quick Actions
    function handleQuickAction(action) {
        switch(action) {
            case '🚁 Start New Mission':
                alert('Starting new drone mission...\nThis would open the mission planning interface.');
                break;
            case '📊 Generate Report':
                alert('Generating comprehensive farm report...\nThis would create and download a PDF report.');
                break;
            case '🔍 Field Scan':
                alert('Initiating field surveillance scan...\nDrone will begin scanning for crop health issues.');
                break;
            case '📱 Contact Support':
                alert('Opening support contact form...\nThis would open the contact support interface.');
                break;
            default:
                console.log('Unknown action:', action);
        }
    }

    // Field Overview KPIs
    document.getElementById('overall-health').textContent = `${data.overallCropHealth}%`;
    document.getElementById('area-surveyed').textContent = `${data.areaSurveyed} Acres`;
    document.getElementById('active-issues').textContent = data.activeIssues;

    // Real-Time Alerts
    const alertList = document.getElementById('alert-list');
    alertList.innerHTML = ''; // Clear initial dummy alert
    data.alerts.forEach(alert => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="alert-type ${alert.type.toLowerCase()}">${alert.type}:</span> ${alert.message}`;
        alertList.appendChild(li);
    });

    // Mission History
    const missionHistoryTableBody = document.querySelector('#mission-history-table tbody');
    missionHistoryTableBody.innerHTML = ''; // Clear initial dummy data
    data.missionHistory.forEach(mission => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${mission.date}</td>
            <td>${mission.area}</td>
            <td>${mission.pesticide}</td>
            <td>${mission.covered}</td>
        `;
        missionHistoryTableBody.appendChild(tr);
    });

    // Resource Usage Tracker (Placeholder for chart integration)
    // You would typically use a charting library like Chart.js or D3.js here
    // to visualize pesticide consumption over time.

    // Efficacy Report (Placeholder for dynamic comparison)
    // This would involve loading and comparing two NDVI maps dynamically.

    // Current Environmental Conditions
    document.getElementById('current-temp').textContent = `${data.currentConditions.temperature}°C`;
    document.getElementById('current-humidity').textContent = `${data.currentConditions.humidity}%`;

    // Historical Data for Environmental Monitoring (Placeholder for chart integration)
    // This chart would show temperature and humidity trends over time.

    // Reporting & Analytics KPIs
    document.getElementById('yield-forecast').textContent = `${data.yieldForecast} Tons/Acre`;
    document.getElementById('efficiency-score').textContent = `${data.resourceEfficiencyScore}% Savings`;

    // Placeholder for chart libraries (e.g., Chart.js, D3.js) integration
    // For real implementation, you would use a library to render dynamic charts here.

    // Crop Health Analysis (Placeholder for dynamic map loading)
    // In a real application, you would load dynamic map data and render it
    // using a library like Leaflet.js or Google Maps API, overlaying with
    // NDVI, pest, and nutrient data.

    // Spraying & Operations Log (already populated with dummy data)

    // Trend Analysis (Crop Health) - Placeholder for chart integration
    // This chart would visualize crop health trends over the season.
});
