import { CombatantPF2e } from "foundry-pf2e";
import { Listener } from "./index.ts";

const StartTurn: Listener = {
    listen(): void {
        Hooks.on("pf2e.startTurn", (combatant: CombatantPF2e): void => {
            console.log(combatant.actorId);
        });
    },
};

export { StartTurn };
