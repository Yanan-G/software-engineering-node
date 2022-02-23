import {Request, Response} from "express";

export default interface FollowControllerI {
    findAllMessagesSentByUser (req: Request, res: Response): void;
    findAllMessagesReceivedByUser (req: Request, res: Response): void;
    userDeletesMessage (req: Request, res: Response): void;
    userSendsMessage (req: Request, res: Response): void;
};