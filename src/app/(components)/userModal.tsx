import React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "../../../gql/graphql";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, } from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  users: User[];
}

const FollowersFollowingModal: React.FC<ModalProps> = ({ isOpen, onClose, title, users }) => {
  return (
    <Dialog  open={isOpen}  >
      <DialogContent className="bg-zinc-900 p-6 rounded-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="flex items-center space-x-4 hover:bg-zinc-200 hover:rounded-full dark:hover:bg-zinc-800 ">
              {user.profileImageURL && (
                <Image
                  src={user.profileImageURL}
                  width={40}
                  height={40}
                  alt="Profile image"
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-semibold">{user.firstName} {user.lastName}</p>
              </div>
            </li>
          ))}
        </ul>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FollowersFollowingModal;
