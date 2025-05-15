// This file handles the display of stream statistics, updating the overlay with relevant data.

class StreamStats {
    constructor() {
        this.statsContainer = document.querySelector('.stats-data');
        this.connectionStatus = document.getElementById('connectionStatus');
    }

    updateStats(data) {
        this.statsContainer.innerHTML = ''; // Clear previous stats
        const stats = this.createStatsElements(data);
        this.statsContainer.appendChild(stats);
    }

    createStatsElements(data) {
        const fragment = document.createDocumentFragment();
        for (const [key, value] of Object.entries(data)) {
            const statElement = document.createElement('div');
            statElement.className = 'stat-item';
            statElement.innerHTML = `<strong>${key}:</strong> ${value}`;
            fragment.appendChild(statElement);
        }
        return fragment;
    }

    setConnectionStatus(isConnected) {
        this.connectionStatus.textContent = isConnected ? 'Connected' : 'Disconnected';
        this.connectionStatus.classList.toggle('highlight', isConnected);
    }
}

const streamStats = new StreamStats();

// Example usage: Update stats and connection status
// streamStats.updateStats({ viewers: 150, likes: 20 });
// streamStats.setConnectionStatus(true);