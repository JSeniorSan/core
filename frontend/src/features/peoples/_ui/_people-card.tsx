"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { createUserFriend } from "../actions";
import { User } from "../model/types";

const PeopleCard = ({
  user,
  email,
  image,
  username,
}: {
  user?: User;
  username: string | null;
  email: string | null;
  image: string | null;
}) => {
  const handleOnClick = async () => {
    if (user) {
      await createUserFriend(user);
    }
  };

  return (
    <Card
      className="w-80 h-64 hover:border-orange-200 transition-all ease-in-out hover:scale-105"
      key={user?.email}
    >
      <CardHeader className="flex gap-3">
        <Avatar>
          <AvatarImage src={image ?? undefined} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>{username}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Button className="w-32 ">Send a message</Button>
        {user && (
          <Button className="w-32" onClick={handleOnClick}>
            Add to friends
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PeopleCard;