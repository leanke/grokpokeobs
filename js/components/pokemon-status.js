// This file manages the display of Pokémon status information, including health and status effects.

class PokemonStatus {
    constructor(pokemon) {
        this.pokemon = pokemon;
        this.statusElement = document.createElement('div');
        this.statusElement.className = 'pokemon-status';
        this.updateStatus();
    }

    updateStatus() {
        this.statusElement.innerHTML = `
            <div class="pokemon-name">${this.pokemon.name}</div>
            <div class="hp-bar-container">
                <div class="hp-bar" style="width: ${this.calculateHPPercentage()}%"></div>
            </div>
            <div class="hp-text">${this.pokemon.currentHP} / ${this.pokemon.maxHP}</div>
            ${this.pokemon.statusEffects.map(effect => this.renderStatusEffect(effect)).join('')}
        `;
    }

    calculateHPPercentage() {
        return (this.pokemon.currentHP / this.pokemon.maxHP) * 100;
    }

    renderStatusEffect(effect) {
        return `<div class="pokemon-status ${effect.type}">${effect.message}</div>`;
    }

    attachTo(container) {
        container.appendChild(this.statusElement);
    }
}

// Example usage:
// const pikachu = new PokemonStatus({ name: 'Pikachu', currentHP: 35, maxHP: 100, statusEffects: [{ type: 'poisoned', message: 'Poisoned' }] });
// pikachu.attachTo(document.getElementById('pokemon-status-container'));