import * as z from "zod";
import { ChannelType } from "@prisma/client";

export const formModal = z.object({
    name: z.string().min(1, {
        message: "Server name is required."
    }),
    imageUrl: z.string().min(1, {
        message: "Server image is required."
    }),
});

export const formCreateModal = z.object({
    name: z.string().min(1, {
        message: "Channel name is required."
    }).refine(
        name => name !== "general",
        {
            message: "Channel name cannot be 'general'",
        }
    ),
    type: z.nativeEnum(ChannelType),
});

export const formChatInput = z.object({
    content: z.string().min(1),
});

export const formMessageFile = z.object({
    fileUrl: z.string().min(1, {
        message: "Attachment is required."
    }),
});

export const formChatItem = z.object({
    content: z.string().min(1),
});