/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  
  switch(color){
    case "green":
    case "GREEN":
    case "Green":
      return "GO";
      
    case "yellow":
    case "YELLOW":
    case "Yellow":
      return "SLOW DOWN";

    case "red":
    case "RED":
    case "Red":
      return "STOP";

    case "flashing red":
    case "FLASHING RED":
    case "Flashing red":
      return "STOP AND PROCEED WITH CAUTION";
      
    default:
      return "INVALID SIGNAL";

  }
}
