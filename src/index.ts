import { Bot } from "mineflayer";
import { PVP } from "./PVP";

export function plugin(bot: Bot)
{
    const pvp = new PVP(bot);

    bot.pvp = pvp;
}

export * from './Cooldown';
export * from './TimingSolver';


declare module 'mineflayer'
{
	interface Bot
    {
		pvp: PVP;
	}

    interface BotEvents
    {
        startedAttacking: () => void;
        stoppedAttacking: () => void;
        attackedTarget: () => void;
    }
}
