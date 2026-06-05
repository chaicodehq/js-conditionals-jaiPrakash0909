/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {

  let tipAmount = 0;
  let tipPercentage = 0;
  let totalAmount = 0;

  if (
    typeof billAmount === "number" &&
    billAmount > 0 &&
    Number.isInteger(serviceRating) &&
    serviceRating >= 1 &&
    serviceRating <= 5
  ) {

    if (serviceRating === 1) tipPercentage = 5;
    else if (serviceRating === 2) tipPercentage = 10;
    else if (serviceRating === 3) tipPercentage = 15;
    else if (serviceRating === 4) tipPercentage = 20;
    else tipPercentage = 25;

    tipAmount = Number(
      ((billAmount * tipPercentage) / 100).toFixed(2)
    );

    totalAmount = Number(
      (billAmount + tipAmount).toFixed(2)
    );

    return {
      tipPercentage,
      tipAmount,
      totalAmount
    };

  }

  return null;

}
