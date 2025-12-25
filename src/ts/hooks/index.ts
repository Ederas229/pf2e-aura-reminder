import { Init } from "./init.ts";
import { Setup } from "./setup.ts";
import { StartTurn } from "./startTurn.ts";

interface Listener {
    listen(): void;
}

const HooksModule: Listener = {
    listen(): void {
        const listeners: Listener[] = [Init, Setup, StartTurn];

        for (const listener of listeners) {
            listener.listen();
        }
    },
};

export { HooksModule };
export type { Listener };
