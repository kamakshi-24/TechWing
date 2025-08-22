// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for demonstration
    const dashboardData = {
        overallCropHealth: 85,
        areaSurveyed: 1200,
        activeIssues: 3,
        todayMissions: 2,
        currentConditions: {
            temperature: 25,
            humidity: 60
        }
    };

    // Update dashboard values
    document.getElementById('dashboard-health').textContent = `${dashboardData.overallCropHealth}%`;
    document.getElementById('dashboard-area').textContent = `${dashboardData.areaSurveyed.toLocaleString()} Acres`;
    document.getElementById('dashboard-issues').textContent = dashboardData.activeIssues;
    document.getElementById('dashboard-missions').textContent = dashboardData.todayMissions;
    document.getElementById('dashboard-temp').textContent = `${dashboardData.currentConditions.temperature}°C`;
    document.getElementById('dashboard-humidity').textContent = `${dashboardData.currentConditions.humidity}%`;

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

    // Simulate real-time updates (for demo purposes)
    setInterval(function() {
        // Update temperature randomly
        const currentTemp = document.getElementById('dashboard-temp');
        const baseTemp = 25;
        const variation = Math.floor(Math.random() * 6) - 3; // ±3 degrees
        currentTemp.textContent = `${baseTemp + variation}°C`;
        
        // Update humidity randomly
        const currentHumidity = document.getElementById('dashboard-humidity');
        const baseHumidity = 60;
        const humidityVariation = Math.floor(Math.random() * 10) - 5; // ±5%
        currentHumidity.textContent = `${Math.max(0, Math.min(100, baseHumidity + humidityVariation))}%`;
    }, 30000); // Update every 30 seconds

    // Add some interactive features
    document.querySelectorAll('.field-item').forEach(field => {
        field.addEventListener('click', function() {
            const fieldName = this.querySelector('.field-name').textContent;
            alert(`Field ${fieldName} clicked!\nThis would open detailed field information and management options.`);
        });
    });

    // Make alert items clickable
    document.querySelectorAll('.alert-item').forEach(alert => {
        alert.addEventListener('click', function() {
            const alertText = this.querySelector('.alert-text').textContent;
            alert(`Alert: ${alertText}\nThis would open detailed alert information and resolution options.`);
        });
    });

    console.log('Dashboard loaded successfully!');
});

