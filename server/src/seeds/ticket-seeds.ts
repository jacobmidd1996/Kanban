import { Ticket } from "../models/ticket.js";

export const seedTickets = async () => {
  await Ticket.bulkCreate([
    // Joel (The Last of Us)
    {
      name: "Secure the safe zone",
      status: "In Progress",
      description:
        "Reinforce the perimeter and set traps to keep out infected.",
      assignedUserId: 3,
    },
    {
      name: "Escort Ellie to safety",
      status: "Todo",
      description: "Guide Ellie through the city to reach the Fireflies’ base.",
      assignedUserId: 3,
    },
    {
      name: "Forage for supplies",
      status: "Done",
      description:
        "Gather medical kits, ammunition, and food from nearby areas.",
      assignedUserId: 3,
    },

    // Geralt (The Witcher)
    {
      name: "Hunt the Griffin",
      status: "In Progress",
      description: "Track and slay the Griffin terrorizing the local village.",
      assignedUserId: 2,
    },
    {
      name: "Prepare potions and oils",
      status: "Todo",
      description: "Craft potions and oils for an upcoming monster contract.",
      assignedUserId: 2,
    },
    {
      name: "Resolve village dispute",
      status: "Done",
      description:
        "Mediate a conflict between villagers and a cursed nobleman.",
      assignedUserId: 2,
    },

    // Mando (The Mandalorian)
    {
      name: "Deliver the asset",
      status: "Todo",
      description: "Safely transport Grogu to the Jedi on Tython.",
      assignedUserId: 1,
    },
    {
      name: "Repair the Razor Crest",
      status: "In Progress",
      description: "Fix the damaged hyperdrive and hull on the ship.",
      assignedUserId: 1,
    },
    {
      name: "Retrieve beskar armor",
      status: "Done",
      description:
        "Locate and secure the beskar ingot from an Imperial remnant.",
      assignedUserId: 1,
    },
  ]);
};
