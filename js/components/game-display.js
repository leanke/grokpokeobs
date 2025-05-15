// This file contains functionality related to the game display, including rendering and updating the game screen.

class GameDisplay {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.gameData = null;
        this.animationFrameId = null;
    }

    loadGameData(data) {
        this.gameData = data;
        this.render();
    }

    render() {
        if (!this.gameData) return;

        this.clearCanvas();
        this.drawBackground();
        this.drawSprites();
        this.drawUI();
        
        this.animationFrameId = requestAnimationFrame(() => this.render());
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBackground() {
        // Example background drawing
        this.context.fillStyle = '#000';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSprites() {
        // Draw Pokémon sprites based on gameData
        this.gameData.pokemon.forEach(pokemon => {
            this.context.drawImage(pokemon.sprite, pokemon.x, pokemon.y);
        });
    }

    drawUI() {
        // Draw UI elements such as health bars, status effects, etc.
        this.gameData.pokemon.forEach(pokemon => {
            this.drawHealthBar(pokemon);
            this.drawStatusEffects(pokemon);
        });
    }

    drawHealthBar(pokemon) {
        const { x, y, health, maxHealth } = pokemon;
        const barWidth = 50;
        const barHeight = 5;
        const healthPercentage = health / maxHealth;

        this.context.fillStyle = '#fff';
        this.context.fillRect(x, y - 10, barWidth, barHeight);
        this.context.fillStyle = '#0f0';
        this.context.fillRect(x, y - 10, barWidth * healthPercentage, barHeight);
    }

    drawStatusEffects(pokemon) {
        // Draw status effects like poisoned, burned, etc.
        if (pokemon.status) {
            this.context.fillStyle = '#ff0';
            this.context.fillText(pokemon.status, pokemon.x, pokemon.y - 20);
        }
    }

    stop() {
        cancelAnimationFrame(this.animationFrameId);
    }
}

// Export the GameDisplay class for use in other modules
export default GameDisplay;