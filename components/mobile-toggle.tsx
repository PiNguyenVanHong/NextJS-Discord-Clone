import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

interface MobileToggleProps {
    serverId: string;
}

export const MobileToggle = ({
    serverId,
}: MobileToggleProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="md:hidden dark:text-zinc-100 mr-4" variant={"ghost"} size={"icon"}>
                    <Menu className="text-primary" />
                </Button>
            </SheetTrigger>
            <SheetContent className="p-0 flex gap-0" side={"left"}>
                <div className="w-[72px]">
                    <NavigationSidebar />
                </div>
                <ServerSidebar serverId={serverId} />
            </SheetContent>
        </Sheet>
    )
}