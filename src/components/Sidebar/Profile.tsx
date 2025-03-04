import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
    return (
        <div className="flex items-center gap-3">
            <img className="h-10 w-10 rounded-full" src="https://github.com/Kennedysena.png" alt="Imagem de perfil" />
            <div className="flex flex-1 flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Kennedy Sena</span>
                <span className=" truncate text-xs text-zinc-500 dark:text-zinc-400">Kennedysena.dev@email.com</span>
            </div>
            <Button type="button" variant="ghost">
                <LogOut className="h5 w-5 text-zinc-500"/>
            </Button>
        </div>
    )
}