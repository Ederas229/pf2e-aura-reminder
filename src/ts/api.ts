import type Module from "foundry-pf2e/foundry/client/packages/module.mjs";

interface ThisModule extends Module {
    api: ThisApi;
}

interface ThisApi {
    test(): void;
}

export { type ThisModule, type ThisApi };
