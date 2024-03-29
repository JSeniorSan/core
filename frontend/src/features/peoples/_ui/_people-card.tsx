"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { createChat, createUserFriend, deleteFriend } from "../actions";

const PeopleCard = ({
  state,
  image,
  username,
  email,
  userId,
}: {
  state: "friend" | "user";
  userId?: string | null;
  email?: string | null;
  username?: string | null;
  image: string | null;
}) => {
  const handleOnClick = async () => {
    if (email) {
      await createUserFriend(email, username!, userId!, image!);
    }
  };

  const handleDelete = async () => {
    await deleteFriend(email!);
  };

  const handleSendMessage = async () => {
    await createChat(username!, image!);
  };

  return (
    <Card
      className="w-80 h-64 hover:border-orange-200 transition-all ease-in-out hover:scale-105"
      key={email}
    >
      <CardHeader className="flex gap-3">
        <Avatar>
          <AvatarImage src={image ?? undefined} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>{username}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Button className="w-36" onClick={handleSendMessage}>
          Send a message
        </Button>
        {state === "user" && (
          <Button className="w-36" onClick={handleOnClick}>
            Add to friends
          </Button>
        )}
        {state === "friend" && (
          <Button className="w-36" onClick={handleDelete}>
            Delete friend
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PeopleCard;
