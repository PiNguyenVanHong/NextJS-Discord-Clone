import { Server as NetServer} from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

import { NextApiResponseServerIo } from "@/types";

export const config = {
    api: {
        bodyParser: false,
    },
}

const initializeSocketServer = (httpServer: NetServer): ServerIO => {
    const path = "/api/socket/io";
    return new ServerIO(httpServer, {
        path,
        // @ts-ignore
        addTrailingSlash: false,
    });
};

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
    if(!res.socket.server.io) {
        res.socket.server.io = initializeSocketServer(res.socket.server.io as unknown as NetServer);
    }

    res.end();
}

export default ioHandler;