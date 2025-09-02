import { Card, CardFooter, Image, Button } from "@heroui/react";

export default function card() {
  return (
    <Card isFooterBlurred className=" bg-black w-80  p-4 m-4 border-gray-300 rounded-lg shadow-lg inline-block" >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={300}
        src="https://heroui.com/images/hero-card.jpeg"
        width={300}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-gray-400">Available soon.</p>
        <Button
          className="bg-blue-500 text-black px-2 py-2 rounded-lg text-sm font-medium 
             hover:bg-blue-600 active:bg-blue-700 transition-colors "
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}
