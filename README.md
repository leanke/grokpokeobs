# Pokémon OBS Overlay

## Overview
The Pokémon OBS Overlay project is designed to enhance your streaming experience by providing a customizable overlay for displaying Pokémon-related information. This overlay integrates seamlessly with OBS (Open Broadcaster Software) and allows you to showcase your Pokémon gameplay, stats, and team information in a visually appealing manner.

## Project Structure
The project is organized into the following directories:

- **css/**: Contains all the stylesheets for the overlay.
  - **common.css**: Shared styles for typography and layout.
  - **components/**: Specific styles for various components.
    - **hp-bars.css**: Styles for HP bars.
    - **panels.css**: Styles for panels used in the overlay.
    - **pokemon-cards.css**: Styles for displaying Pokémon cards.
    - **status-bars.css**: Styles for status bars.
  - **effects.css**: Styles for visual effects and animations.
  - **variables.css**: CSS variables for reusable styles.

- **js/**: Contains all the JavaScript files for functionality.
  - **main.js**: Main entry point for the application.
  - **components/**: JavaScript for specific components.
    - **game-display.js**: Functionality for the game display.
    - **pokemon-status.js**: Manages Pokémon status information.
    - **stream-stats.js**: Handles stream statistics display.
  - **utils/**: Utility functions for the application.
    - **socket.js**: Functions for WebSocket connections.
    - **ui-helpers.js**: Helper functions for UI manipulation.

- **assets/**: Contains assets used in the overlay.
  - **fonts/**: Font files for the overlay.
    - **press-start-2p.ttf**: Retro gaming font.
  - **images/**: Image assets.
    - **logo.svg**: Logo for the overlay.

- **components/**: HTML files defining the structure of various components.
  - **game-screen.html**: HTML for the game screen overlay.
  - **performance-metrics.html**: HTML for performance metrics display.
  - **pokemon-team.html**: HTML for displaying the Pokémon team.
  - **stats-panel.html**: HTML for the statistics panel.
  - **status-bar.html**: HTML for the status bar.

- **index.html**: The main HTML file that ties everything together.

## Setup Instructions
1. **Clone the Repository**: Clone this repository to your local machine.
   ```
   git clone <repository-url>
   ```

2. **Open in OBS**: Open OBS and add a new Browser Source. Point it to the `index.html` file in the cloned repository.

3. **Customize**: Modify the CSS and HTML files as needed to customize the overlay to your liking.

4. **Run the Application**: Open the `index.html` file in a web browser to see the overlay in action.

## Usage Guidelines
- Ensure that your WebSocket server is running to provide real-time data to the overlay.
- Customize the styles in the CSS files to match your stream's theme.
- Use the provided JavaScript functions to manipulate the overlay dynamically based on your gameplay.

## License
This project is licensed under the MIT License. Feel free to modify and distribute as needed.